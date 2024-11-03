import { HexString, Network, Types } from 'aptos';

import { MoveModuleFuncType } from '../libs/aptosContractFactory/types';

export type DubheParams = {
  mnemonics?: string;
  secretKey?: string;
  fullnodeUrls?: string[];
  faucetUrl?: string;
  networkType?: NetworkType;
  packageId?: string;
  metadata?: Types.MoveModule[];
};

export type ComponentFieldType = {
  components: {
    type: string;
    fields: {
      id: {
        id: string;
      };
      size: string;
    };
  };
};

export type ComponentValueType = {
  id: {
    id: string;
  };
  name: string;
  value: {
    type: string;
    fields: ComponentFieldType;
  };
};

export type ComponentContentType = {
  type: string;
  fields: ComponentValueType;
  hasPublicTransfer: boolean;
  dataType: 'moveObject';
};

export interface MessageMeta {
  readonly meta: MoveModuleFuncType;
}

export interface ContractQuery extends MessageMeta {
  (params?: any[], typeArguments?: Types.MoveType[]): Promise<
    Types.MoveValue[]
  >;
}

export interface ContractTx extends MessageMeta {
  (
    sender?: HexString | string,
    params?: any[],
    typeArguments?: Types.MoveType[],
    isRaw?: boolean
  ): Promise<Types.PendingTransaction | Types.EntryFunctionPayload>;
}

export type MapMessageTx = Record<string, ContractTx>;
export type MapMessageQuery = Record<string, ContractQuery>;

export type MapModuleFuncTx = Record<string, MapMessageTx>;
export type MapModuleFuncQuery = Record<string, MapMessageQuery>;

export type MapModuleFuncTest = Record<string, Record<string, string>>;
export type MapModuleFuncQueryTest = Record<string, Record<string, string>>;

export type AccountMangerParams = {
  mnemonics?: string;
  secretKey?: string;
};

export type DerivePathParams = {
  accountIndex?: number;
  isExternal?: boolean;
  addressIndex?: number;
};

export enum MovementNetwork {
  // MAINNET = "movementmainnet",
  TESTNET = 'movementtestnet',
  DEVNET = 'movementdevnet',
  LOCAL = 'movementlocal',
}

export const NetworkNameToIndexerAPI: Record<string, string> = {
  mainnet: 'https://api.mainnet.aptoslabs.com/v1/graphql',
  testnet: 'https://api.testnet.aptoslabs.com/v1/graphql',
  devnet: 'https://api.devnet.aptoslabs.com/v1/graphql',
  local: 'http://127.0.0.1:8090/v1/graphql',
  movementmainnet: '',
  movementtestnet: '',
  movementdevnet: '',
  movementlocal: '',
};

export type NetworkType = Network | MovementNetwork;

export type InputNetworkType =
  | 'mainnet'
  | 'testnet'
  | 'devnet'
  | 'local'
  | 'movementtestnet'
  | 'movementdevnet'
  | 'movementlocal';

/**
 * These are the basics types that can be used in the APT
 */
export type MoveBasicTypes =
  | 'address'
  | 'bool'
  | 'u8'
  | 'u16'
  | 'u32'
  | 'u64'
  | 'u128'
  | 'u256';

export type MoveInputTypes = 'object' | MoveBasicTypes;
