import {execSync} from "child_process";
import {
  Ed25519Keypair,
  TransactionBlock
} from "@mysten/sui.js";
import {ObeliskCliError} from "./errors";
import {getFullnodeUrl, SuiClient} from "@mysten/sui.js/client";

export async function publishHandler(packagePath: string, nodeUrl: 'mainnet' | 'testnet' | 'devnet' | 'localnet') {

  const { execSync } = require('child_process');
  const privateKey = process.env.SUI_ACCOUNT_SECRET;
  if (!privateKey)
    throw new ObeliskCliError(
        `Missing PRIVATE_KEY environment variable.
Run 'echo "PRIVATE_KEY=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" > .env'
in your contracts directory to use the default sui private key.`
    );
  const keypair = Ed25519Keypair.deriveKeypair(privateKey);
  const client = new SuiClient({
    url: getFullnodeUrl(nodeUrl),
  });
  const { modules, dependencies } = JSON.parse(
      execSync(`sui move build --dump-bytecode-as-base64 --path ${packagePath}`, {
        encoding: 'utf-8',
      }),
  );
  const tx = new TransactionBlock();
  const [upgradeCap] = tx.publish({
    modules,
    dependencies,
  });
  tx.transferObjects([upgradeCap], tx.pure(keypair.getPublicKey().toSuiAddress()));
  const result = await client.signAndExecuteTransactionBlock({
    signer: keypair,
    transactionBlock: tx,
  });
  console.log({ result });
}
