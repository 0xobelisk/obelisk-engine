import { Obelisk } from '../src/obelisk';
import * as process from 'process';
import { NetworkType, SchemaContentType, SuiTxArgument } from '../src/types';
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
    '0x2995d4940249b81d7d98052aafc5cbacac55f86088615af48110663820e805d7';

  const metadata = await getMetadata(network as NetworkType, packageId);

  const obelisk = new Obelisk({
    networkType: network as NetworkType,
    packageId: packageId,
    metadata: metadata,
    // secretKey: privkey
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
    '0x1ebfc36f211f2459dd8394ddc2c3eb026b19763946292e986bdafaf0e04a789d',
    'position',
    '0x2a994a77dda48ddf2413eabe96b6577b3511ecbd473621af37e06e824a788c23'
  );

  console.log(entityData);

  let containData = await obelisk.containEntity(
    '0x1ebfc36f211f2459dd8394ddc2c3eb026b19763946292e986bdafaf0e04a789d',
    'encounter',
    '0x2a994a77dda48ddf2413eabe96b6577b3511ecbd473621af37e06e824a788c23'
  );

  console.log(containData);

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
