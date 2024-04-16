import { Ed25519Keypair, fromB64, encodeSuiPrivateKey } from '@0xobelisk/sui-client';
import * as fs from 'fs';

function uint8ArrayToHexString(uint8Array: Uint8Array): string {
  return Array.from(uint8Array, byte => {
    return ('0' + (byte & 0xff).toString(16)).slice(-2);
  }).join('');
}

function generateAccount() {
  const keypair = new Ed25519Keypair();

  const privateKey_u8 = keypair.getSecretKey();
  console.log(privateKey_u8);
  // const privateKey = uint8ArrayToHexString(privateKey_u8);
  // console.log(privateKey);
  // const privateKey = Buffer.from(privateKey_u8).toString('hex');

  // const path = process.cwd();
  // const chainFolderPath = `${path}/src/chain`;
  // fs.mkdirSync(chainFolderPath, { recursive: true });

  // fs.writeFileSync(`${path}/.env`, `PRIVATE_KEY=${privateKey}`);

  //   fs.writeFileSync(
  //     `${path}/src/chain/key.ts`,
  //     `export const PRIVATEKEY = '${privateKey}';
  // export const ACCOUNT = '${keypair.toSuiAddress()}';
  // `,
  //   );

  console.log(`Generate new Account: ${keypair.toSuiAddress()}`);
}

generateAccount();
