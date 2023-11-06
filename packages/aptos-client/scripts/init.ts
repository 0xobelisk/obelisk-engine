import { Types, Network } from 'aptos';
import { Obelisk } from '../src/obelisk';
import { loadMetadata } from '../src/metadata/index';

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function init() {
  const network = 'devnet' as Network;
  const packageId =
    '0xafa14f6a40838a5891788dd441d49531bd94b0d1da0ec79d3153d921d8611464';
  const metadata = await loadMetadata(network, packageId);

  const obelisk = new Obelisk({
    // networkType: network as Network,
    // packageId: packageId,
    // metadata: metadata,
    // secretKey:
    // '0xf74d5761583efae65ce0fa53b5327edd4ed05470aaa58357802acf1e366370ab',
  });
  let faucetRes = await obelisk.requestFaucet(
    network,
    '0xf1b729515527b700135ca2108018450d7d3671fb078497558dbadbab9bcb0722'
  );
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
