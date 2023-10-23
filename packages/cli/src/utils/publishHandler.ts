import { TransactionBlock } from "@mysten/sui.js/transactions";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { execSync } from "child_process";
import chalk from "chalk";
import { ObeliskCliError } from "./errors";
import {
  updateVersionInFile,
  saveContractData,
  validatePrivateKey,
} from "./utils";

export async function publishHandler(
  name: string,
  network: "mainnet" | "testnet" | "devnet" | "localnet"
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
  const client = new SuiClient({
    url: getFullnodeUrl(network),
  });

  // Set version 1
  await updateVersionInFile(projectPath, "1");

  const { modules, dependencies } = JSON.parse(
    execSync(`sui move build --dump-bytecode-as-base64 --path ${projectPath}`, {
      encoding: "utf-8",
    })
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
  let adminCapId = "";
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
    if (
        object.type === "created" &&
        object.objectType.endsWith("::world::AdminCap")
    ) {
      console.log(chalk.green(`${name} AdminCapId: ${object.objectId}`));
      adminCapId = object.objectId;
    }
  });

  saveContractData(name, network, packageId, worldId, upgradeCapId, adminCapId, version);

  const deployHookTx = new TransactionBlock();

  deployHookTx.setGasBudget(5000000000);

  deployHookTx.moveCall({
    target: `${packageId}::deploy_hook::run`,
    arguments: [
      deployHookTx.object(worldId),
      deployHookTx.object(adminCapId),
    ],
  });

  const deployHookResult = await client.signAndExecuteTransactionBlock({
    signer: keypair,
    transactionBlock: deployHookTx,
    options: {
      showEffects: true,
    },
  });

  if (deployHookResult.effects?.status.status === "success") {
    console.log(
        chalk.blue(
            `Successful auto-execution of deployHook, please check the transaction digest: ${deployHookResult.digest}`
        )
    );
  } else {
    console.log(
        chalk.yellow(
            `Failed to execute deployHook, please republish or manually call deploy_hook::run`
        )
    );
  }
}
