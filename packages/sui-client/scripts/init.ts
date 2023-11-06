import { Obelisk } from '../src/obelisk';
import * as process from 'process';
import { NetworkType, SchemaContentType, SuiTxArgument } from '../src/types';
import { DevInspectResults, TransactionBlock, bcs } from '@mysten/sui.js';
import { loadMetadata } from '../src/metadata/index';
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
    '0xa0c67881c008ca5281f32666f141b4a911e677c75da698106f327352f00d9afc';

  const metadata = await loadMetadata(network as NetworkType, packageId);

  const obelisk = new Obelisk({
    networkType: network as NetworkType,
    packageId: packageId,
    metadata: metadata,
    secretKey:
      '0x014e45cbd1ee9238f39282d67e16841adba7f1ef993ee995b99032aa36ef6a7e',
  });

  // let comsName = await obelisk.listSchemaNames(
  //   '0x1541f3a2e7ac48e3e68e60bb97a7cee94e16316cc3f9043a9c0f5e6790ea3af0'
  // );

  // console.log(comsName);

  // let entities = await obelisk.getEntities(
  //   '0x1541f3a2e7ac48e3e68e60bb97a7cee94e16316cc3f9043a9c0f5e6790ea3af0',
  //   'multi_column'
  // );
  // console.log(entities);

  let entityData = await obelisk.getEntity(
    '0xdca3675091c8fdccd4fb46f9f70de0bd65053fbc8104600daf86a959ca9b7120',
    'single_value'
  );
  console.log(entityData);

  // let tx = new TransactionBlock();

  // let params = [
  //   tx.pure(
  //     '0xdca3675091c8fdccd4fb46f9f70de0bd65053fbc8104600daf86a959ca9b7120'
  //   ),
  // ];
  // let inc_res = await obelisk.tx.example_system.increase(tx, params);
  // console.log(inc_res);

  let txb = new TransactionBlock();

  let params = [
    txb.pure(
      '0xdca3675091c8fdccd4fb46f9f70de0bd65053fbc8104600daf86a959ca9b7120'
    ),
    txb.pure(
      '0x6761ca73d8793006a3d0ac74ed2ad541487d4010c706f7c6d0d41d96eff9e4cf'
    ),
  ];

  let typeArgs = ['0x2::coin::Coin<0x2::sui::SUI>'];
  let inc_with_type_res = await obelisk.tx.example_system.increase_with_type(
    txb,
    params,
    typeArgs
  );
  console.log(inc_with_type_res);

  // let containData = await obelisk.containEntity(
  //   '0x9f2b0bd5153799eb97c8d604472f0993a10586ce6725cdeb175b02dedc2dd10a',
  //   'position',
  //   '0x59a5fbf2c56da3a4a2ac761f062cb0e8ed6c6cb1812136178cf2321586736cc7'
  // );

  // console.log(containData);

  // let objectAddress = await obelisk.entity_key_from_object(
  //   '0x1541f3a2e7ac48e3e68e60bb97a7cee94e16316cc3f9043a9c0f5e6790ea3af0'
  // );
  // console.log(objectAddress);

  // let bytesAddress = await obelisk.entity_key_from_bytes('hello');
  // console.log(bytesAddress);

  // let numberAddress = await obelisk.entity_key_from_u256(123);
  // console.log(numberAddress);
}

init();
