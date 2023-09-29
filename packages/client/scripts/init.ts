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
    '0x390b4ba82cac5053aa391b0a340cfc73e0ba1a293f4405c07f5d409a95390452';

  const metadata = await getMetadata(network as NetworkType, packageId);

  const obelisk = new Obelisk({
    networkType: network as NetworkType,
    packageId: packageId,
    metadata: metadata,
    // secretKey: privkey
  });

  // let compTable = await obelisk.getCompontentTable(
  //   '0xdd0fdf891ac70e1d0801f509c92b408aea239ebaa2ec93ab5ae1a805538311e6',
  //   'multi_column_comp'
  // );
  // console.log(compTable);
  // let entities = await obelisk.getEntities(
  //   '0xdd0fdf891ac70e1d0801f509c92b408aea239ebaa2ec93ab5ae1a805538311e6',
  //   'multi_column_comp'
  // );

  // let entity = await obelisk.getEntity(
  //   '0xdd0fdf891ac70e1d0801f509c92b408aea239ebaa2ec93ab5ae1a805538311e6',
  //   'multi_column_comp',
  //   '0x00000000000000000000000000000000000000000000000000000000000003f2'
  // );

  // let entityData = await obelisk.getEntityData(
  //   '0xdd0fdf891ac70e1d0801f509c92b408aea239ebaa2ec93ab5ae1a805538311e6',
  //   'multi_column_comp',
  //   '0x00000000000000000000000000000000000000000000000000000000000003f2'
  // );

  let objectAddress = await obelisk.entity_key_from_object(
    '0xdd0fdf891ac70e1d0801f509c92b408aea239ebaa2ec93ab5ae1a805538311e6'
  );
  console.log(objectAddress);

  let bytesAddress = await obelisk.entity_key_from_bytes('hello');
  console.log(bytesAddress);

  let numberAddress = await obelisk.entity_key_from_u256(123);
  console.log(numberAddress);

  // console.log

  // let data1 = await obelisk.getComponentByName(
  //   '0x775c80938d20cc7af849f3aed4105eba8a7e5cdf65d8f795f78cdf62e578012f',
  //   'user_info'
  // );
  // console.log(JSON.stringify(data1.data?.content));
  // const senderAddress = `0xd2c36eea220c7deb9d1c7d4b01269eca9d9543050255432896cd13ade6550d90`;
  // const hashAddress = keccak256(senderAddress);
  // const entityKey = uint8ArrayToHexString(hashAddress);
  // const tx = new TransactionBlock();
  // let params = [
  //   tx.pure(
  //     '0x775c80938d20cc7af849f3aed4105eba8a7e5cdf65d8f795f78cdf62e578012f'
  //   ),
  //   tx.pure(entityKey),
  // ] as SuiTxArgument[];
  // let data2 = await obelisk.query.user_info_comp.get(tx, params);
  // console.log(JSON.stringify(data2));
}

init();
