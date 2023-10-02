import { Obelisk } from '../src/obelisk';
import * as process from 'process';
import { NetworkType, ComponentContentType, SuiTxArgument } from '../src/types';
import { BCS, getSuiMoveConfig, fromHEX, fromB64, fromB58 } from '@mysten/bcs';
import { DevInspectResults, TransactionBlock, bcs } from '@mysten/sui.js';
import { getMetadata } from '../src/metadata/index';
const keccak256 = require('keccak256');
import * as crypto from 'crypto';

type DataItem = [number[], string];

type DataType = 'string' | 'bool' | 'u64';

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
    '0x9e03a7dc9e41246983f21e385abbf183d24563386886b50d74e5a9c36fa01041';

  const metadata = await getMetadata(network as NetworkType, packageId);

  const obelisk = new Obelisk({
    networkType: network as NetworkType,
    packageId: packageId,
    metadata: metadata,
    // secretKey: privkey
  });

  // let compTable = await obelisk.getComponentTable(
  //   '0xa95356404c92adb706fe968912e6b7c0ab1761e046d142013e1d8cfa54a045f2',
  //   'single_column'
  // );
  // console.log(compTable);

  // let entities = await obelisk.getEntities(
  //   '0xa95356404c92adb706fe968912e6b7c0ab1761e046d142013e1d8cfa54a045f2',
  //   'single_column'
  // );
  // console.log(entities);

  // const tx = new TransactionBlock();
  // let params = [
  //   tx.pure(
  //     '0xa95356404c92adb706fe968912e6b7c0ab1761e046d142013e1d8cfa54a045f2'
  //   ),
  // ] as SuiTxArgument[];
  // let entityDataRes = (await obelisk.query.single_value_comp.get(
  //   tx,
  //   params
  // )) as DevInspectResults;
  // const bcs = new BCS(getSuiMoveConfig());
  // let value = Uint8Array.from(entityDataRes.results![0].returnValues![0][0]);
  // let data = bcs.de('u64', value);
  // console.log(data);

  let entity = await obelisk.getEntity(
    '0xa95356404c92adb706fe968912e6b7c0ab1761e046d142013e1d8cfa54a045f2',
    'single_column',
    '0x0000000000000000000000000000000000000000000000000000000000000463'
  );
  console.log(entity);
  console.log(JSON.stringify(entity));

  // let entityData = await obelisk.getEntityData(
  //   '0xa95356404c92adb706fe968912e6b7c0ab1761e046d142013e1d8cfa54a045f2',
  //   'single_column',
  //   '0x0000000000000000000000000000000000000000000000000000000000000463'
  // );
  // console.log(entityData);

  let objectAddress = await obelisk.entity_key_from_object(
    '0xa95356404c92adb706fe968912e6b7c0ab1761e046d142013e1d8cfa54a045f2'
  );
  console.log(objectAddress);

  let bytesAddress = await obelisk.entity_key_from_bytes('hello');
  console.log(bytesAddress);

  let numberAddress = await obelisk.entity_key_from_u256(123);
  console.log(numberAddress);

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
