import { Obelisk } from '../src/obelisk';
import * as process from 'process';
import { NetworkType, SuiTxArgument } from '../src/types';
import { TransactionBlock } from '@mysten/sui.js';

async function init() {
  const network = process.argv[2];
  const packageId = process.argv[3];
  console.log(network);
  console.log(packageId);
  // console.log(contract)
  // 0x80d7de9c4a56194087e0ba0bf59492aa8e6a5ee881606226930827085ddf2332
  // const privkey = 'c71a1529d774a80d521e02953ce656f1b1cef126451daacaebec763f8dd0b535'

  const obelisk = new Obelisk({
    networkType: network as NetworkType,
    packageId: packageId,
    // secretKey: privkey
  });
  await obelisk.initialize();
  // const tx = new TransactionBlock();

  // let data2 = obelisk.query.pet_centre.update_pet_name(
  //     'hello', 'world', [tx.pure("0x6")]
  // );

  // let data2 = obelisk.queryt.pet_centre.update_pet_name
  // let data2 = obelisk.queryt
  // console.log(data2)
  //
  //
  // let data3 = obelisk.query;
  // console.log(data3)

  // tx.moveCall({
  //   // target: `0x12b216923e5454e1f076ccb5fc638b59f8aba2175c34df9899de71124d66badd::status_system::get_pet_state`,
  //   target: `0x6afbf113a5872b781a2a0068b95c0d9d0ee89428518fdd65f862c841eab45b82::pet_system::get_pet_basic_info`,
  //   arguments: [
  //     // tx.pure("0x6fa43c68221960f942572905f3c198a5bccaa0700506b3b6bd83dd9b007e6324"),
  //     // tx.pure("0xbf64721f0961a0426ccde6b8d9343e2cb2c26a105a5c33e57074580fd98b2cb1"),
  //     // tx.pure("0x6"),

  //     obj(tx, "0x26804211486be597a89c46c16b929d7031fb7c701ecf89d4c750e49459b4bea2"),
  //     pure(tx, "0x35ba3bfb8590dbd060f41cd58c7b140d67efd2126648409cd231c74cff2828b8", `0x2::object::ID`),
  //     obj(tx, "0x6")
  //   ],
  const tx = new TransactionBlock();
  const params = [
    tx.pure(
      '0x6fa43c68221960f942572905f3c198a5bccaa0700506b3b6bd83dd9b007e6324'
    ) as SuiTxArgument,
    tx.pure(
      '0xbf64721f0961a0426ccde6b8d9343e2cb2c26a105a5c33e57074580fd98b2cb1'
    ) as SuiTxArgument,
    tx.pure('0x6') as SuiTxArgument,
  ] as SuiTxArgument[];
  const res1 = await obelisk.query.pet_system.get_pet_basic_info(tx, params);
  console.log(res1);

  // console.log(obelisk.contractFactory.metadata)

  // let data = obelisk.contractFactory.getAllFunc();
  // // console.log(data)

  // console.log('---------- getWorld')
  // let res = await obelisk.getWorld("0x17d08944903f2b9c0069872a895ee8a12c800e00c948e030138612e1e13cee4d")
  // console.log(JSON.stringify(res))

  // console.log('---------- getAllEntities')
  // const worldId = "0x17d08944903f2b9c0069872a895ee8a12c800e00c948e030138612e1e13cee4d"
  // let res1 = await obelisk.getAllEntities(worldId)
  // // console.log(res1)
  // res1.data.map((res) => {
  //     console.log(res.name)
  // })

  // console.log('---------- getEntity')
  // const entityId = "0xe881e7b52de6374ea3bb33c9b720102e9166786013f2d374395e12fce1d9a800"
  // let res2 = await obelisk.getEntity(worldId, entityId)
  // console.log(JSON.stringify(res2))

  // console.log('---------- getEntityComponents')
  // let comp = await obelisk.getEntityComponents(worldId, entityId);
  // console.log(JSON.stringify(comp))

  // console.log('---------- getBirthTime')
  // const birthTimeId = "0x1b204289500b7e7a2c0d2f10838fd8471c587e8ecee24661652d1df18b061685"
  // const sender = "0x1804b821bba181110599b8757008eabe6f89f62774d7fafb5ee666ac742a41f8"
  // let time = await obelisk.getBirthTime(birthTimeId);
  // console.log(JSON.stringify(time))

  // target: `::status_system::get_pet_state`,
}

init();
