import { NetworkType, Obelisk, Types } from './../src';
import { loadMetadata } from '../src/metadata/index';
import dotenv from 'dotenv';
dotenv.config();

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function init() {
  const network = 'movementdevnet' as NetworkType;
  const packageId =
    '0x35cc4910b9934ceacf0bbb014e3a823f9dee5b8725110360729b500ee81a2d3a';
  const metadata = await loadMetadata(network, packageId);
  const privateKey = process.env.PRIVATE_KEY;
  const obelisk = new Obelisk({
    networkType: network as NetworkType,
    packageId: packageId,
    metadata: metadata,
    secretKey: privateKey,
  });

  let myAddr = obelisk.getAddress();
  let myBalance = await obelisk.getBalance();
  console.log(`Addr: ${myAddr}`);
  console.log(`Balance: ${myBalance}`);

  console.log('======= query other user message ========');

  let message = await obelisk.query.message.get_message([
    '0x35cc4910b9934ceacf0bbb014e3a823f9dee5b8725110360729b500ee81a2d3a',
  ]);
  console.log(message);

  console.log('======= set our message ========');
  const res1 = (await obelisk.tx.message.set_message(obelisk.getAddress(), [
    'first set',
  ])) as Types.PendingTransaction;
  console.log(res1.hash);
  await delay(1000);

  console.log('======= query our message ========');
  let myMessage = await obelisk.query.message.get_message([myAddr]);
  console.log(myMessage);

  console.log('======= set our message again ========');

  const res2 = (await obelisk.tx.message.set_message(obelisk.getAddress(), [
    'hello world',
  ])) as Types.PendingTransaction;
  console.log(res2.hash);
  await delay(1000);

  console.log('======= query our message ========');
  let mySecondMessage = await obelisk.query.message.get_message([myAddr]);
  console.log(mySecondMessage);

  let faucetRes = await obelisk.requestFaucet(network);
  console.log(faucetRes);
  // const counter = await obelisk.getEntity('single_value');
  // console.log(counter);

  // console.log('\n======= send inc transaction ========');
  // const res =
  //   (await obelisk.tx.example_system.increase()) as Types.PendingTransaction;
  // console.log(res.hash);

  // console.log('=======================================\n');
  // await delay(1000);
  // const counterend = await obelisk.query.single_value_schema.get();
  // console.log(counterend);

  // const balance = await obelisk.getBalance();
  // console.log(balance);
}

init();
