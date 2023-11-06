import { Types, Network } from 'aptos';
import { AptosInteractor, getDefaultURL } from '../libs/aptosInteractor';

export async function loadMetadata(
  networkType: Network,
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
