import { Obelisk } from '../src/obelisk';
import * as process from 'process';
import { NetworkType, ComponentContentType, SuiTxArgument } from '../src/types';
import { BCS, getSuiMoveConfig, fromHEX, fromB64, fromB58 } from '@mysten/bcs';
import { DevInspectResults, TransactionBlock } from '@mysten/sui.js';
import { getMetadata } from '../src/metadata/index';
import { pure } from '../src/framework/util';
const keccak256 = require('keccak256');
import * as crypto from 'crypto';

type DataItem = [number[], string];

type DataType = 'string' | 'bool' | 'u64';

function formatData(data: DataItem[]): string {
  const formattedData: string[] = [];

  data.forEach(([values, format]) => {
    let formattedValue: string;
    console.log(values, format);
    if (format === '0x1::string::String') {
      formattedValue = values.map((num) => String.fromCharCode(num)).join('');
    } else if (format === 'bool') {
      formattedValue = values[0] !== 0 ? 'true' : 'false';
    } else if (format === 'u64') {
      const u64Value = new DataView(new ArrayBuffer(8));
      values.forEach((num, index) => u64Value.setUint8(index, num));
      formattedValue = u64Value.getBigUint64(0).toString();
    } else {
      formattedValue = 'Unknown Format';
    }

    formattedData.push(formattedValue);
  });

  return formattedData.join('\n');
}
type data = {
  type: string;
  fields: Record<string, any>;
  hasPublicTransfer: boolean;
  dataType: 'moveObject';
};

function uint8ArrayToHexString(uint8Array: Uint8Array): string {
  return Array.from(uint8Array, (byte) => {
    return ('0' + (byte & 0xff).toString(16)).slice(-2);
  }).join('');
}

async function init() {
  const network = 'devnet';
  const packageId =
    '0x284c284b75cf96a94ccab02bbc1abf77f17e1556c927c6c68da36f88e14ba391';

  const metadata = await getMetadata(network as NetworkType, packageId);

  const obelisk = new Obelisk({
    networkType: network as NetworkType,
    packageId: packageId,
    metadata: metadata,
    // secretKey: privkey
  });

  // let data1 = await obelisk.getComponent("0x36cbd7d72444757040b496e7380af38c873e3ce4a88a30a0800ed7d3a24b3929", hexdata)
  let data1 = await obelisk.getComponentByName(
    '0x775c80938d20cc7af849f3aed4105eba8a7e5cdf65d8f795f78cdf62e578012f',
    'user_info'
  );
  console.log(JSON.stringify(data1.data?.content));
  const senderAddress = `0xd2c36eea220c7deb9d1c7d4b01269eca9d9543050255432896cd13ade6550d90`;
  const hashAddress = keccak256(senderAddress);
  const entityKey = uint8ArrayToHexString(hashAddress);
  const tx = new TransactionBlock();
  let params = [
    tx.pure(
      '0x775c80938d20cc7af849f3aed4105eba8a7e5cdf65d8f795f78cdf62e578012f'
    ),
    tx.pure(entityKey),
  ] as SuiTxArgument[];
  let data2 = await obelisk.query.user_info_comp.get(tx, params);
  console.log(JSON.stringify(data2));

  // const data2 = bcs.de('u64', byteArray);
  // console.log(data2);

  // const tx = new TransactionBlock();
  // let params = [] as SuiTxArgument[];
  // // let res2 = await obelisk.query.pet_system.get_pet_basic_info(tx, params) as DevInspectResults;
  // const resq = (await obelisk.query.counter_comp.field_types(
  //   tx,
  //   params
  // )) as DevInspectResults;
  // // console.log(JSON.stringify(resq.results![0].returnValues!));
  // let returnData = resq.results![0].returnValues!;

  // console.log(returnData);
  // let databytes = new Uint8Array(returnData[0][0]);
  // const data3 = bcs.de('vector<vector<u8>>', databytes)[0];
  // const asciiString: string = String.fromCharCode(...data3);

  // console.log(data3);
  // console.log(asciiString);

  // const tx = new TransactionBlock();
  // let params = [tx.pure(res) as SuiTxArgument] as SuiTxArgument[];
  // // let res2 = await obelisk.query.pet_system.get_pet_basic_info(tx, params) as DevInspectResults;
  // const resq = (await obelisk.query.counter_comp.decode(
  //   tx,
  //   params
  // )) as DevInspectResults;
  // console.log(JSON.stringify(resq.results![0].returnValues!));
  // let returnData = resq.results![0].returnValues!;
  // const data3 = bcs.de(returnData[0][1], byteArray);

  // // Same with deserialization
  // let data_restored = bcs.de('vector<u8>', data_bytes);
  // console.log(data_bytes);
  // console.log(data_restored);

  // const resu = peel_u64(data_restored);
  // console.log(resu);

  // const tx = new TransactionBlock();
  // let params = [tx.pure(res) as SuiTxArgument] as SuiTxArgument[];

  // // let res2 = await obelisk.query.pet_system.get_pet_basic_info(tx, params) as DevInspectResults;
  // const resq = (await obelisk.query.counter_comp.decode(
  //   tx,
  //   params
  // )) as DevInspectResults;
  // console.log(JSON.stringify(resq.results![0].returnValues!));
  // let data = formatData(resq.results![0].returnValues!);
  // console.log(data);
  // await obelisk.requestFaucet(
  //   '0x1804b821bba181110599b8757008eabe6f89f62774d7fafb5ee666ac742a41f8',
  //   'devnet'
  // );
  // let ownerdObjects = await obelisk.getOwnedEntities("0x1804b821bba181110599b8757008eabe6f89f62774d7fafb5ee666ac742a41f8")
  // console.log(ownerdObjects)

  // ownerdObjects.data.map(async (object) => {
  //   console.log(object.data?.objectId)
  //   let objectDetail = await obelisk.getObject(object.data!.objectId)
  //   console.log(JSON.stringify(objectDetail))
  // })

  // const tx = new TransactionBlock();
  // let params = [tx.pure("0x6fa43c68221960f942572905f3c198a5bccaa0700506b3b6bd83dd9b007e6324") as SuiTxArgument,
  // tx.pure("0xbf64721f0961a0426ccde6b8d9343e2cb2c26a105a5c33e57074580fd98b2cb1") as SuiTxArgument,
  // tx.pure("0x6") as SuiTxArgument] as SuiTxArgument[]

  // let res1 = await obelisk.query.pet_system.get_pet_basic_info(tx, params, true) as TransactionBlock;
  // let data1 = await obelisk.inspectTxn(res1);
  // console.log(data1.results![0].returnValues!)

  // let res2 = await obelisk.query.pet_system.get_pet_basic_info(tx, params) as DevInspectResults;
  // console.log(JSON.stringify(res2.results![0].returnValues))
  // const input: DataItem[] = res2.results![0].returnValues!;

  // const formattedOutput: string = formatData(input);
  // console.log(formattedOutput);

  // console.log(obelisk.contractFactory.metadata)

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
