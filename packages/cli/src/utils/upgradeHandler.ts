import { TransactionBlock, UpgradePolicy } from "@mysten/sui.js/transactions";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { execSync } from "child_process";
import chalk from "chalk";
import { ObeliskCliError, UpgradeError } from "./errors";
import {
  updateVersionInFile,
  getNetwork,
  getOldPackageId,
  getVersion,
  getWorldId,
  getUpgradeCap,
  saveContractData,
  validatePrivateKey,
  getAdminCap,
} from "./utils";

type ObjectContent = {
  type: string;
  fields: Record<string, any>;
  hasPublicTransfer: boolean;
  dataType: string;
};

export async function upgradeHandler(
  name: string,
  network: "mainnet" | "testnet" | "devnet" | "localnet",
  schemaNames: string[]
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

  // const network = await getNetwork(projectPath);
  const client = new SuiClient({
    url: getFullnodeUrl(network),
  });

  let oldVersion = Number(await getVersion(projectPath, network));
  const oldPackageId = await getOldPackageId(projectPath, network);
  const worldId = await getWorldId(projectPath, network);
  const upgradeCap = await getUpgradeCap(projectPath, network);
  const adminCap = await getAdminCap(projectPath, network);

  const newVersion = oldVersion + 1;
  await updateVersionInFile(projectPath, newVersion.toString());

  try {
    let modules: any, dependencies: any, digest: any;
    try {
      const {
        modules: extractedModules,
        dependencies: extractedDependencies,
        digest: extractedDigest,
      } = JSON.parse(
        execSync(
          `sui move build --dump-bytecode-as-base64 --path ${path}/contracts/${name}`,
          {
            encoding: "utf-8",
          }
        )
      );

      modules = extractedModules;
      dependencies = extractedDependencies;
      digest = extractedDigest;
    } catch (error: any) {
      throw new UpgradeError(error.stdout);
    }

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
      adminCap,
      newVersion
    );

    const migrateTx = new TransactionBlock();

    migrateTx.setGasBudget(5000000000);

    migrateTx.moveCall({
      target: `${newPackageId}::world::migrate`,
      arguments: [migrateTx.object(worldId), migrateTx.object(adminCap)],
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
        arguments: [registerTx.object(worldId), registerTx.object(adminCap)],
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
        `\n${name} world schemas is ${registerObjectContent.fields["schema_names"]}`
      )
    );
  } catch (error: any) {
    console.log(chalk.red("Upgrade failed!"));
    console.error(error.message);

    saveContractData(
      name,
      network,
      oldPackageId,
      worldId,
      upgradeCap,
      adminCap,
      newVersion
    );
    // if (savePath !== undefined) {
    //   generateIdConfig(network, oldPackageId, worldId);
    // }
    await updateVersionInFile(projectPath, oldVersion.toString());
  }
}
