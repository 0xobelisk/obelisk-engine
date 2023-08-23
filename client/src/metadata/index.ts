import { SuiMoveNormalizedModules } from '@mysten/sui.js';
import { SuiRpcProvider } from '../libs/suiRpcProvider';
import { NetworkType } from '../libs/suiRpcProvider/types';

export async function getMetadata(networkType: NetworkType, packageId: string) {
  const rpcProvider = new SuiRpcProvider({
    networkType,
  });

  if (packageId !== undefined) {
    const jsonData = await rpcProvider.getNormalizedMoveModulesByPackage(packageId);

    return jsonData as SuiMoveNormalizedModules;
  } else {
    console.error('please set your package id.');
  }
}
