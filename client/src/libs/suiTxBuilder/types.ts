import {
  TransactionArgument
} from '@mysten/sui.js';
import {
  SuiObjectRef
} from "@mysten/sui.js/dist/cjs/types/objects"
import {
  SharedObjectRef
} from "@mysten/sui.js/bcs"

export type SuiTxArg = TransactionArgument | string | number | bigint | boolean;

export type SuiObjectArg =
  | SharedObjectRef
  | SuiObjectRef
  | string
  | TransactionArgument;

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
