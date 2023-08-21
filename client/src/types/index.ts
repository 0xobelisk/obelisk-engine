import { SuiMoveNormalizedModules, SuiMoveNormalizedType } from "@mysten/sui.js";

import type { NetworkType as SuiNetworkType } from '../libs/suiRpcProvider/types';

export type { DerivePathParams } from '../libs/suiAccountManager/types';
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
//   metadata?: SuiMoveNormalizedModules,
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

export type SuiMoveMoudleValueType =  {
    address: string;
    name: string;
    fileFormatVersion: number;
    friends: {
        address: string;
        name: string;
    }[];
    structs: Record<string, {
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
    }>;
    exposedFunctions: Record<string, {
        visibility: "Private" | "Public" | "Friend";
        isEntry: boolean;
        typeParameters: {
            abilities: string[];
        }[];
        parameters: SuiMoveNormalizedType[];
        return: SuiMoveNormalizedType[];
    }>;
}