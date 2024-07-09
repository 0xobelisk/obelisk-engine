import { Types } from 'aptos';
import { NetworkType } from '../types';
import { AptosInteractor, getDefaultURL } from '../libs/aptosInteractor';

export async function loadMetadata(
  networkType: NetworkType,
  packageId: string
): Promise<Types.MoveModule[] | undefined> {
  // Init the rpc provider
  const fullnodeUrls = [getDefaultURL(networkType).fullNode];
  const aptosInteractor = new AptosInteractor(fullnodeUrls);
  if (packageId !== undefined) {
    const jsonData = await aptosInteractor.getAccountModules(packageId);
    return jsonData.map((data) => data.abi!);
  } else {
    console.error('please set your package id.');
  }
}
