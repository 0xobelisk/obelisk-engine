import { execSync } from "child_process";
import { TransactionBlock } from "@mysten/sui.js/transactions";

import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

import chalk from "chalk";

import { ObeliskCliError } from "./errors";
import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { validatePrivateKey } from "./validatePrivateKey";
import {
  generateIdConfig,
  saveContractData,
  generateEps,
} from "@0xobelisk/common";
import fs from "fs";
import * as fsAsync from 'fs/promises';

export async function publishHandler(
  network: "mainnet" | "testnet" | "devnet" | "localnet",
  savePath?: string | undefined
) {
  const path = process.cwd();

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
  const client = new SuiClient({
    url: getFullnodeUrl(network),
  });

  // Set version 1
  const name = fs.readdirSync(path + "/contracts")[0]
  await updateVersionInFile(path + `/contracts/${name}/sources/codegen/eps/world.move`, "1");

  const { modules, dependencies } = JSON.parse(
    execSync(
      `sui move build --dump-bytecode-as-base64 --path ${path}/contracts/${name}`,
      {
        encoding: "utf-8",
      }
    )
  );

  console.log(chalk.blue(`Account: ${keypair.toSuiAddress()}`));

  const tx = new TransactionBlock();
  const [upgradeCap] = tx.publish({
    modules,
    dependencies,
  });
  tx.transferObjects(
    [upgradeCap],
    tx.pure(keypair.getPublicKey().toSuiAddress())
  );
  const result = await client.signAndExecuteTransactionBlock({
    signer: keypair,
    transactionBlock: tx,
    options: {
      showObjectChanges: true,
    },
  });
  console.log(chalk.blue(`Publish transaction digest: ${result.digest}`));

  let version = 1;
  let packageId = "";
  let worldId = "";
  let upgradeCapId = "";
  result.objectChanges!.map((object) => {
    if (object.type === "published") {
      console.log(chalk.green(`${name} PackageId: ${object.packageId}`));
      packageId = object.packageId;
    }
    if (
      object.type === "created" &&
      object.objectType.endsWith("::world::World")
    ) {
      console.log(chalk.green(`${name} WorldId: ${object.objectId}`));
      worldId = object.objectId;
    }
    if (
      object.type === "created" &&
      object.objectType === "0x2::package::UpgradeCap"
    ) {
      console.log(chalk.green(`${name} UpgradeCap: ${object.objectId}`));
      upgradeCapId = object.objectId;
    }
  });

  saveContractData(name, network, packageId, worldId, upgradeCapId, version);
  if (savePath !== undefined) {
    generateIdConfig(network, packageId, worldId, savePath);
  }
}

export async function updateVersionInFile(filePath: string, newVersion: string) {
  try {
    // 读取文件
    const data = await fsAsync.readFile(filePath, 'utf8');

    // 更新数据
    const updatedData = data.replace(/const VERSION: u64 = \d+;/, `const VERSION: u64 = ${newVersion};`);

    // 写入文件
    await fsAsync.writeFile(filePath, updatedData, 'utf8');

    console.log('Version updated in the file.');
  } catch (err) {
    console.error('Error updating the file:', err);
  }
}

