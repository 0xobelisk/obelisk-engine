import {execSync} from "child_process";
import {
  TransactionBlock
} from "@mysten/sui.js/transactions";

import {
  Ed25519Keypair,
} from "@mysten/sui.js/keypairs/ed25519";

import {

} from "@mysten/sui.js";
 
 
import {ObeliskCliError} from "./errors";
import {getFullnodeUrl, SuiClient} from "@mysten/sui.js/client";
import {validatePrivateKey} from "./validatePrivateKey";

export async function publishHandler(projectName: string, nodeUrl: 'mainnet' | 'testnet' | 'devnet' | 'localnet') {
  const privateKey = process.env.PRIVATE_KEY;
  if (!privateKey)
    throw new ObeliskCliError(
        `Missing PRIVATE_KEY environment variable.
Run 'echo "PRIVATE_KEY=0xYOUR_PRIVATE_KEY" > .env'
in your contracts directory to use the default sui private key.`
    );
  
  const privateKeyFormat = validatePrivateKey(privateKey);
  if (privateKeyFormat === false) {
    throw new ObeliskCliError(
      `Please check your privateKey.`
    );
  }
  const privateKeyRaw = Buffer.from(privateKeyFormat as string, 'hex')
  // const keypair = Ed25519Keypair.deriveKeypair(privateKey);
  // const keypair = Ed25519Keypair.fromSecretKey(privateKeyRaw);
  // const keypair = Ed25519Keypair.fromSecretKey(privateKeyRaw);
  const keypair = Ed25519Keypair.fromSecretKey(privateKeyRaw);
  const client = new SuiClient({
    url: getFullnodeUrl(nodeUrl),
  });

  const path = process.cwd()

  const { modules, dependencies } = JSON.parse(
      execSync(`sui move build --dump-bytecode-as-base64 --path ${path}/contracts/${projectName}`, {
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
    options: {
      showObjectChanges: true,
    },
  });
  result.objectChanges!.map((object) => {
    if (object.type === "published") {
      console.log(`${projectName} PackageId: ${object.packageId}`)
    }
  })
}
