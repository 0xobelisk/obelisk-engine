import { DisplayFieldsResponse } from '@mysten/sui.js/client';
import { ObjectContentFields } from "@mysten/sui.js/src/types/objects"
export type NetworkType = 'testnet' | 'mainnet' | 'devnet' | 'localnet';

type FaucetCoinInfo = {
  amount: number;
  id: string;
  transferTxDigest: string;
};
export type FaucetResponse = {
  transferredGasObjects: FaucetCoinInfo[];
  error?: string | null;
};

export type ObjectData = {
  objectId: string;
  objectType: string;
  objectVersion: number;
  objectDisplay: DisplayFieldsResponse;
  objectFields: ObjectContentFields;
};

export type SuiRpcProviderParams = {
  fullnodeUrl?: string;
  faucetUrl?: string;
  networkType?: NetworkType;
};
