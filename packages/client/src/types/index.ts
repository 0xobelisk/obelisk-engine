import { Infer } from 'superstruct';
import {
  DisplayFieldsResponse,
  ObjectCallArg,
  ObjectContentFields,
  SharedObjectRef,
  SuiObjectRef,
  TransactionArgument,
  TransactionBlock,
  SuiTransactionBlockResponse,
  DevInspectResults,
  SuiMoveNormalizedModules,
} from '@mysten/sui.js';

import {
  SuiMoveMoudleValueType,
  SuiMoveMoudleFuncType,
} from '../libs/suiContractFactory/types';

export type ObeliskObjectData = {
  objectId: string;
  objectType: string;
  objectVersion: number;
  objectDisplay: DisplayFieldsResponse;
  objectFields: ObjectContentFields;
};

export type ObeliskParams = {
  mnemonics?: string;
  secretKey?: string;
  fullnodeUrls?: string[];
  faucetUrl?: string;
  networkType?: NetworkType;
  packageId?: string;
  metadata?: SuiMoveNormalizedModules;
};

export type SchemaFieldType = {
  schemas: {
    type: string;
    fields: {
      id: {
        id: string;
      };
      size: string;
    };
  };
};

export type SchemaValueType = {
  id: {
    id: string;
  };
  name: string;
  value: {
    type: string;
    fields: SchemaFieldType;
  };
};

export type SuiTxArgument =
  | {
      kind: 'Input';
      index: number;
      type?: 'object' | 'pure' | undefined;
      value?: any;
    }
  | {
      kind: 'GasCoin';
    }
  | {
      kind: 'Result';
      index: number;
    }
  | {
      kind: 'NestedResult';
      index: number;
      resultIndex: number;
    };
export type SchemaContentType = {
  type: string;
  fields: SchemaValueType;
  hasPublicTransfer: boolean;
  dataType: 'moveObject';
};

export interface MessageMeta {
  readonly meta: SuiMoveMoudleFuncType;
}

export interface ContractQuery extends MessageMeta {
  (
    tx: TransactionBlock,
    params: SuiTxArgument[],
    typeArgs?: string[],
    isRaw?: boolean
  ): Promise<DevInspectResults | TransactionBlock>;
}

export interface ContractTx extends MessageMeta {
  (
    tx: TransactionBlock,
    params: SuiTxArgument[],
    typeArgs?: string[],
    isRaw?: boolean
  ): SuiTransactionBlockResponse | TransactionBlock;
}

export type MapMessageTx = Record<string, ContractTx>;
export type MapMessageQuery = Record<string, ContractQuery>;

export type MapMoudleFuncTx = Record<string, MapMessageTx>;
export type MapMoudleFuncQuery = Record<string, MapMessageQuery>;

export type MapMoudleFuncTest = Record<string, Record<string, string>>;
export type MapMoudleFuncQueryTest = Record<string, Record<string, string>>;

export type AccountMangerParams = {
  mnemonics?: string;
  secretKey?: string;
};

export type DerivePathParams = {
  accountIndex?: number;
  isExternal?: boolean;
  addressIndex?: number;
};

export type NetworkType = 'testnet' | 'mainnet' | 'devnet' | 'localnet';
export type FaucetNetworkType = 'testnet' | 'devnet' | 'localnet';

export type SuiKitParams = {
  mnemonics?: string;
  secretKey?: string;
  fullnodeUrls?: string[];
  faucetUrl?: string;
  networkType?: NetworkType;
};

export type ObjectData = {
  objectId: string;
  objectType: string;
  objectVersion: number;
  objectDigest: string;
  initialSharedVersion?: number;
  objectDisplay: DisplayFieldsResponse;
  objectFields: ObjectContentFields;
};

export type ObjectFieldType = {
  id: {
    id: string;
  };
  name: string;
  value: string;
};

export type EntityData = {
  objectId: string;
  index: string;
  key: string;
};

export type SuiTxArg =
  | Infer<typeof TransactionArgument>
  | Infer<typeof ObjectCallArg>
  | string
  | number
  | bigint
  | boolean;

export type SuiObjectArg =
  | SharedObjectRef
  | Infer<typeof SuiObjectRef>
  | string
  | Infer<typeof ObjectCallArg>
  | Infer<typeof TransactionArgument>;

export type SuiVecTxArg =
  | { value: SuiTxArg[]; vecType: SuiInputTypes }
  | SuiTxArg[];

/**
 * These are the basics types that can be used in the SUI
 */
export type SuiBasicTypes =
  | 'address'
  | 'bool'
  | 'u8'
  | 'u16'
  | 'u32'
  | 'u64'
  | 'u128'
  | 'u256';

export type SuiInputTypes = 'object' | SuiBasicTypes;

export type SuiReturnValues = {
  returnValues: [number[], string][];
}[];

export type DynamicFieldContentType = {
  type: string;
  fields: Record<string, any>;
  hasPublicTransfer: boolean;
  dataType: string;
};

export type ObjectContent = {
  type: string;
  fields: Record<string, any>;
  hasPublicTransfer: boolean;
  dataType: string;
};
