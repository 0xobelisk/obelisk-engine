import { SuiMoveNormalizedModules } from '@mysten/sui.js';
import { SuiInteractor, getDefaultConnection } from '../libs/suiInteractor';

import { NetworkType } from '../types';

export async function loadMetadata(
  networkType: NetworkType,
  packageId: string
) {
  // Init the rpc provider
  const fullnodeUrls = [getDefaultConnection(networkType).fullnode];
  const suiInteractor = new SuiInteractor(fullnodeUrls);
  if (packageId !== undefined) {
    const jsonData = await suiInteractor.getNormalizedMoveModulesByPackage(
      packageId
    );

    return jsonData as SuiMoveNormalizedModules;
  } else {
    console.error('please set your package id.');
  }
}
