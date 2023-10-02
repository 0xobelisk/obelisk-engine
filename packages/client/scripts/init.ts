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
    '0xa3cea02cbd57956a0a2f42593b951e9356bb48d7883d061a5cdf9f13a7a1c8ec';

  const metadata = await getMetadata(network as NetworkType, packageId);

  const obelisk = new Obelisk({
    networkType: network as NetworkType,
    packageId: packageId,
    metadata: metadata,
    // secretKey: privkey
  });

  let comsName = await obelisk.listComponentNames(
    '0x1541f3a2e7ac48e3e68e60bb97a7cee94e16316cc3f9043a9c0f5e6790ea3af0'
  );

  console.log(comsName);

  let entities = await obelisk.getEntities(
    '0x1541f3a2e7ac48e3e68e60bb97a7cee94e16316cc3f9043a9c0f5e6790ea3af0',
    'multi_column'
  );
  console.log(entities);

  let comData = await obelisk.getEntity(
    '0x1541f3a2e7ac48e3e68e60bb97a7cee94e16316cc3f9043a9c0f5e6790ea3af0',
    'multi_column',
    '0x00000000000000000000000000000000000000000000000000000000000003ed'
  );

  console.log(comData);

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
