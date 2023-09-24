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
} from "../../../common/src/codegen";

export async function upgradeHandler(
  name: string,
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

  console.log(oldVersion);
  console.log(network);

  const oldPackageId = await getOldPackageId(projectPath);
  const worldId = await getWorldId(projectPath);
  const upgradeCap = await getUpgradeCap(projectPath);

  console.log(`old package_id: ${oldPackageId}`);
  console.log(`wrold_id: ${worldId}`);
  console.log(`upgrade_cap: ${upgradeCap}`);
  const newVersion = oldVersion + 1;
  generateEps(name, path, newVersion);

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

    tx.setGasBudget(10000000000);

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







    // const migrateTx = new TransactionBlock();

    // migrateTx.setGasBudget(10000000000);

    // tx.moveCall({
    //   target: `::package::commit_upgrade`,
    //   arguments: [tx.object(upgradeCap), receipt],
    // });

    // tx.transferObjects(
    //   [tx.object(upgradeCap)],
    //   tx.pure(keypair.getPublicKey().toSuiAddress())
    // );

    // const result = await client.signAndExecuteTransactionBlock({
    //   signer: keypair,
    //   transactionBlock: tx,
    //   options: {
    //     showObjectChanges: true,
    //   },
    // });

    console.log("");
    console.log(chalk.blue(`Transaction Digest: ${result.digest}`));

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
  } catch {
    console.log("upgrade failed!");
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
    generateEps(name, path, oldVersion);
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
