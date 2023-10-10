import { execSync } from "child_process";
import { TransactionBlock, UpgradePolicy } from "@mysten/sui.js/transactions";
import * as fs from "fs";

import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

import chalk from "chalk";

import { ObeliskCliError } from "./errors";
import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { validatePrivateKey } from "./validatePrivateKey";
import {
  generateIdConfig,
  generateEps,
  saveContractData,
} from "@0xobelisk/common";
import {updateVersionInFile} from "./publishHandler";

type ObjectContent = {
  type: string;
  fields: Record<string, any>;
  hasPublicTransfer: boolean;
  dataType: string;
};

export async function upgradeHandler(
  name: string,
  schemaNames: string[],
  // network: "mainnet" | "testnet" | "devnet" | "localnet",
  savePath?: string | undefined
) {
  const path = process.cwd();
  const projectPath = `${path}/contracts/${name}`;
  const privateKey = process.env.PRIVATE_KEY;
  if (!privateKey)
    throw new ObeliskCliError(
      `Missing PRIVATE_KEY environment variable.
Run 'echo "PRIVATE_KEY=0xYOUR_PRIVATE_KEY" > .env'
in your contracts directory to use the default sui private key.`
    );

  const privateKeyFormat = validatePrivateKey(privateKey);
  if (privateKeyFormat === false) {
    throw new ObeliskCliError(`Please check your privateKey.`);
  }
  const privateKeyRaw = Buffer.from(privateKeyFormat as string, "hex");
  const keypair = Ed25519Keypair.fromSecretKey(privateKeyRaw);

  const network = await getNetwork(projectPath);
  const client = new SuiClient({
    url: getFullnodeUrl(network),
  });

  let oldVersion = Number(await getVersion(projectPath));

  const oldPackageId = await getOldPackageId(projectPath);
  const worldId = await getWorldId(projectPath);
  const upgradeCap = await getUpgradeCap(projectPath);

  const newVersion = oldVersion + 1;
  await updateVersionInFile(`${projectPath}/sources/codegen/eps/world.move`, newVersion.toString());

  try {
    console.log(
      `sui move build --dump-bytecode-as-base64 --path ${path}/contracts/${name}`
    );
    const { modules, dependencies, digest } = JSON.parse(
      execSync(
        `sui move build --dump-bytecode-as-base64 --path ${path}/contracts/${name}`,
        {
          encoding: "utf-8",
        }
      )
    );
    const tx = new TransactionBlock();

    tx.setGasBudget(5000000000);

    const ticket = tx.moveCall({
      target: "0x2::package::authorize_upgrade",
      arguments: [
        tx.object(upgradeCap),
        tx.pure(UpgradePolicy.COMPATIBLE),
        tx.pure(digest),
      ],
    });

    const receipt = tx.upgrade({
      modules,
      dependencies,
      packageId: oldPackageId,
      ticket,
    });

    tx.moveCall({
      target: "0x2::package::commit_upgrade",
      arguments: [tx.object(upgradeCap), receipt],
    });

    tx.transferObjects(
      [tx.object(upgradeCap)],
      tx.pure(keypair.getPublicKey().toSuiAddress())
    );

    const result = await client.signAndExecuteTransactionBlock({
      signer: keypair,
      transactionBlock: tx,
      options: {
        showObjectChanges: true,
      },
    });

    let worldObject = await client.getObject({
      id: worldId,
      options: {
        showContent: true,
        showDisplay: true,
        showType: true,
        showOwner: true,
      },
    });
    let objectContent = worldObject.data!.content as ObjectContent;

    console.log("");
    console.log(chalk.blue(`Transaction Digest: ${result.digest}`));
    console.log(`${name} WorldId: ${worldId}`);

    let newPackageId = "";
    let newUpgradeCap = "";
    result.objectChanges!.map((object) => {
      if (object.type === "published") {
        console.log(chalk.green(`${name} PackageId: ${object.packageId}`));
        newPackageId = object.packageId;
      }
      if (
        object.type === "mutated" &&
        object.objectType === "0x2::package::UpgradeCap"
      ) {
        console.log(chalk.green(`${name} UpgradeCap: ${object.objectId}`));
        newUpgradeCap = object.objectId;
      }
    });
    saveContractData(
      name,
      network,
      newPackageId,
      worldId,
      newUpgradeCap,
      newVersion
    );
    if (savePath !== undefined) {
      generateIdConfig(network, newPackageId, worldId, savePath);
    }

    const migrateTx = new TransactionBlock();

    migrateTx.setGasBudget(5000000000);

    migrateTx.moveCall({
      target: `${newPackageId}::world::migrate`,
      arguments: [
        migrateTx.object(worldId),
        migrateTx.object(objectContent.fields["admin"]),
      ],
    });

    const migrateResult = await client.signAndExecuteTransactionBlock({
      signer: keypair,
      transactionBlock: migrateTx,
      options: {
        // showObjectChanges: true,
        showEffects: true,
      },
    });

    let newWorldObject = await client.getObject({
      id: worldId,
      options: {
        showContent: true,
        showDisplay: true,
        showType: true,
        showOwner: true,
      },
    });
    let newObjectContent = newWorldObject.data!.content as ObjectContent;

    if (migrateResult.effects?.status.status === "success") {
      console.log(
        chalk.blue(
          `${name} migrate world success, new world version is: ${newObjectContent.fields["version"]}, package version is ${newVersion}`
        )
      );
    } else {
      console.log(
        chalk.yellow(
          `${name} migrate world failed, world version is: ${newObjectContent.fields["version"]}, package version is ${newVersion}`
        )
      );
    }

    console.log(newObjectContent.fields)
    const uniqueSchema: string[] = schemaNames.filter(
      (item) => !newObjectContent.fields["schema_names"].includes(item)
    );

    console.log("\n----- new schema -----");
    console.log(uniqueSchema);

    for (const newSchema of uniqueSchema) {
      const registerTx = new TransactionBlock();

      registerTx.setGasBudget(5000000000);

      registerTx.moveCall({
        target: `${newPackageId}::${newSchema}_schema::register`,
        arguments: [registerTx.object(worldId)],
      });

      const registerResult = await client.signAndExecuteTransactionBlock({
        signer: keypair,
        transactionBlock: registerTx,
        options: {
          // showObjectChanges: true,
          showEffects: true,
        },
      });
      if (registerResult.effects?.status.status === "success") {
        console.log(
          chalk.blue(`new schema: ${newSchema}_schema register success.`)
        );
      } else {
        console.log(chalk.yellow(`${newSchema}_schema register failed.`));
      }
    }

    let registerWorldObject = await client.getObject({
      id: worldId,
      options: {
        showContent: true,
        showDisplay: true,
        showType: true,
        showOwner: true,
      },
    });
    let registerObjectContent = registerWorldObject.data!
      .content as ObjectContent;

    console.log(
      chalk.blue(
        `\n${name} world schemas is ${registerObjectContent.fields["schemaNames"]}`
      )
    );
  } catch (error) {
    console.log("upgrade failed!");
    console.error(error);

    saveContractData(
      name,
      network,
      oldPackageId,
      worldId,
      upgradeCap,
      newVersion
    );
    if (savePath !== undefined) {
      generateIdConfig(network, oldPackageId, worldId, savePath);
    }
    await updateVersionInFile(`${projectPath}/sources/codegen/eps/world.move`, oldVersion.toString());
  }
}

function getVersion(projectPath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(`${projectPath}/.history/version`, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function getNetwork(
  projectPath: string
): Promise<"mainnet" | "testnet" | "devnet" | "localnet"> {
  return new Promise((resolve, reject) => {
    fs.readFile(`${projectPath}/.history/network`, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data as "mainnet" | "testnet" | "devnet" | "localnet");
      }
    });
  });
}

function getOldPackageId(projectPath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(`${projectPath}/.history/package_id`, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function getWorldId(projectPath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(`${projectPath}/.history/world_id`, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function getUpgradeCap(projectPath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(`${projectPath}/.history/upgrade_cap`, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
