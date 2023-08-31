import { SuiMoveNormalizedModules, DevInspectResults, SuiTransactionBlockResponse, SuiMoveNormalizedType, TransactionBlock } from "@mysten/sui.js";

import type { NetworkType as SuiNetworkType } from '../libs/suiRpcProvider/types';

export type { DerivePathParams } from '../libs/suiAccountManager/types';
import { SuiMoveMoudleValueType, SuiMoveMoudleFuncType } from '../libs/suiContractFactory/types';

export type {
  SuiTxArg,
  SuiVecTxArg,
  SuiObjectArg,
} from '../libs/suiTxBuilder/types';

export type NetworkType = SuiNetworkType;

export type ObeliskParams = {
  mnemonics?: string;
  secretKey?: string;
  fullnodeUrl?: string;
  faucetUrl?: string;
  networkType?: NetworkType;
  packageId?: string,
  metadata?: SuiMoveNormalizedModules,
};

export type ComponentFieldType = {
    components: {
        type: string;
        fields: {
            id: {
                id: string;
            },
            size: string;
        }
    }
}

export type ComponentValueType = {
    id: {
        id: string;
    }
    name: string;
    value: {
        type: string;
        fields: ComponentFieldType;
    }

}

export type SuiTxArgument = {
    kind: "Input";
    index: number;
    type?: "object" | "pure" | undefined;
    value?: any;
  } | {
    kind: "GasCoin";
  } | {
    kind: "Result";
    index: number;
  } | {
    kind: "NestedResult";
    index: number;
    resultIndex: number;
  }
export type ComponentContentType = {
    type: string;
    fields: ComponentValueType;
    hasPublicTransfer: boolean;
    dataType: "moveObject";
}

export interface MessageMeta {
  readonly meta: SuiMoveMoudleFuncType;
}

export interface ContractQuery extends MessageMeta {
  (tx: TransactionBlock, params: SuiTxArgument[], isRaw?: boolean): Promise<DevInspectResults | TransactionBlock>;
}

export interface ContractTx extends MessageMeta {
  (tx: TransactionBlock, params: SuiTxArgument[], isRaw?: boolean): SuiTransactionBlockResponse | TransactionBlock;
}

export type MapMessageTx = Record<string, ContractTx>;
export type MapMessageQuery = Record<string, ContractQuery>;

export type MapMoudleFuncTx = Record<string, MapMessageTx>;
export type MapMoudleFuncQuery = Record<string, MapMessageQuery>;

export type MapMoudleFuncTest = Record<string, Record<string, string>>;
export type MapMoudleFuncQueryTest = Record<string, Record<string, string>>;
