import { Obelisk } from '@0xobelisk/sui-client';
import * as fs from 'fs';

function generateAccount() {
  const obelisk = new Obelisk();
  const keypair = obelisk.getKeypair();
  const privateKey = keypair.getSecretKey();
  const path = process.cwd();
  const chainFolderPath = `${path}/src/chain`;
  fs.mkdirSync(chainFolderPath, { recursive: true });

  fs.writeFileSync(`${path}/.env`, `PRIVATE_KEY=${privateKey}`);

  fs.writeFileSync(
    `${path}/src/chain/key.ts`,
    `export const PRIVATEKEY = '${privateKey}';
  export const ACCOUNT = '${keypair.toSuiAddress()}';
  `,
  );

  console.log(`Generate new Account: ${keypair.toSuiAddress()}`);
}

generateAccount();
