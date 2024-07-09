import { Network, Provider } from 'aptos';
import { MovementNetwork, NetworkType } from 'src/types';
export const defaultGasBudget = 10 ** 8; // 0.1 APTOS, should be enough for most of the transactions
export const defaultGasPrice = 1000; // 1000 MIST

/**
//  * @description Get the default fullnode url for the given network type
//  * @param networkType, 'testnet' | 'mainnet' | 'devnet' | 'localnet', default is 'devnet'
//  * @returns { fullNode: string }
//  */
// export const getDefaultURL = (networkType: NetworkType = Network.DEVNET) => {
//   switch (networkType) {
//     case Network.LOCAL:
//       return 'http://127.0.0.1:8080';
//     case Network.DEVNET:
//       return 'https://fullnode.devnet.aptoslabs.com';
//     case Network.TESTNET:
//       return 'https://fullnode.testnet.aptoslabs.com';
//     case Network.MAINNET:
//       return 'https://fullnode.mainnet.aptoslabs.com';
//     default:
//       return 'https://fullnode.devnet.aptoslabs.com';
//   }
// };

/**
 * @description Get the default fullnode and faucet url for the given network type
 * @param networkType, 'testnet' | 'mainnet' | 'devnet' | 'localnet', default is 'devnet'
 * @returns { fullNode: string, faucet?: string }
 */
export const getDefaultURL = (networkType: NetworkType = Network.DEVNET) => {
  switch (networkType) {
    case Network.LOCAL:
      return {
        fullNode: 'http://127.0.0.1:8080',
        faucet: 'http://127.0.0.1:8081',
      };
    case Network.DEVNET:
      return {
        fullNode: 'https://fullnode.devnet.aptoslabs.com',
        faucet: 'https://faucet.devnet.aptoslabs.com',
      };
    case Network.TESTNET:
      return {
        fullNode: 'https://fullnode.testnet.aptoslabs.com',
        faucet: 'https://faucet.testnet.aptoslabs.com',
      };
    case Network.MAINNET:
      return {
        fullNode: 'https://fullnode.mainnet.aptoslabs.com',
      };
    case MovementNetwork.DEVNET:
      return {
        fullNode: 'https://aptos.devnet.m1.movementlabs.xyz',
        faucet: 'https://aptos.devnet.m1.movementlabs.xyz',
      };
    case MovementNetwork.TESTNET:
      return {
        fullNode: 'https://aptos.testnet.m1.movementlabs.xyz',
        faucet: 'https://aptos.testnet.m1.movementlabs.xyz',
      };
    default:
      return {
        fullNode: 'https://fullnode.devnet.aptoslabs.com',
        faucet: 'https://faucet.devnet.aptoslabs.com',
      };
  }
};
