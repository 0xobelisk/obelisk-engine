import type { Infer } from 'superstruct';
import { any, record, string } from 'superstruct';
import type { BcsType, SerializedBcs } from '@mysten/bcs';
import type { TransactionArgument } from '@mysten/sui/transactions';
import type {
  Transaction,
  TransactionObjectArgument,
  TransactionResult,
  ObjectRef,
} from '@mysten/sui/transactions';
import type {
  SuiObjectRef,
  SuiMoveNormalizedModules,
  DevInspectResults,
  SuiTransactionBlockResponse,
  DisplayFieldsResponse,
  SuiMoveNormalizedType,
  MoveStruct,
} from '@mysten/sui/client';
import { bcs } from '@mysten/sui/bcs';
import { bcs as BCS } from '@mysten/bcs';

import { SuiMoveMoudleFuncType } from '../libs/suiContractFactory/types';

export const ObjectContentFields = record(string(), any());
export type ObjectContentFields = Infer<typeof ObjectContentFields>;

export type ObeliskObjectData = {
  objectId: string;
  objectType: string;
  objectVersion: number;
  objectDisplay: DisplayFieldsResponse;
  objectFields: ObjectContentFields;
};

export type ObeliskObjectContent = {
  dataType: 'moveObject';
  fields: MoveStruct;
  hasPublicTransfer: boolean;
  type: string;
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
    tx: Transaction,
    params: (TransactionArgument | SerializedBcs<any>)[],
    typeArguments?: string[],
    isRaw?: boolean
  ): Promise<DevInspectResults | TransactionResult>;
}

export interface ContractTx extends MessageMeta {
  (
    tx: Transaction,
    params: (TransactionArgument | SerializedBcs<any>)[],
    typeArguments?: string[],
    isRaw?: boolean
  ): Promise<SuiTransactionBlockResponse | TransactionResult>;
}

export type MapMessageTx = Record<string, ContractTx>;
export type MapMessageQuery = Record<string, ContractQuery>;

export type MapMoudleFuncTx = Record<string, MapMessageTx>;
export type MapMoudleFuncQuery = Record<string, MapMessageQuery>;

type MoveStructType = {
  struct: Record<
    string,
    {
      fields: {
        type: SuiMoveNormalizedType;
        name: string;
      }[];
      abilities: {
        abilities: string[];
      };
      typeParameters: {
        constraints: {
          abilities: string[];
        };
        isPhantom: boolean;
      }[];
    }
  >;
  bcs: BcsType<
    {
      [x: string]: any;
    },
    {
      [x: string]: any;
    }
  >;
};
export type MapMoudleStruct = Record<string, MoveStructType>;

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
type TransactionBlockType = InstanceType<typeof Transaction>;

export type PureCallArg = {
  Pure: number[];
};
export type ObjectCallArg = {
  Object: typeof bcs.CallArg.$inferType;
};

export type TransactionType = Parameters<TransactionBlockType['add']>;

export type TransactionPureArgument = Extract<
  TransactionArgument,
  {
    kind: 'Input';
    type: 'pure';
  }
>;

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

export type SuiAddressArg =
  | TransactionArgument
  | SerializedBcs<any>
  | string
  | PureCallArg;

export type SuiTxArg = SuiAddressArg | number | bigint | boolean;

export type SuiObjectArg =
  | ObjectRef
  | TransactionObjectArgument
  | string
  | typeof bcs.SharedObjectRef.$inferType
  | SuiObjectRef
  | ObjectCallArg;

export type SuiVecTxArg =
  | { value: SuiTxArg[]; vecType: SuiInputTypes }
  | SuiTxArg[];

export type DryTxReturnValues = Array<[Uint8Array, string]>;
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
  | 'u256'
  | 'signer';

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
