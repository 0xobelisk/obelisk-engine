import {
  normalizeSuiObjectId,
  normalizeSuiAddress,
  isValidSuiObjectId,
  isValidSuiAddress,
} from '@mysten/sui/utils';
import { Inputs } from '@mysten/sui/transactions';
import { isSerializedBcs, EnumOutputShapeWithKeys } from '@mysten/bcs';
import type {
  TransactionArgument,
  Transaction,
  TransactionObjectArgument,
} from '@mysten/sui/transactions';
import { bcs } from '@mysten/sui/bcs';
import type {
  SuiInputTypes,
  SuiObjectArg,
  SuiAddressArg,
  SuiTxArg,
  SuiVecTxArg,
  DryTxReturnValues,
} from '../../types';
import type { ObjectRef } from '@mysten/sui/transactions';
export const getDefaultSuiInputType = (
  value: SuiTxArg
): SuiInputTypes | undefined => {
  if (typeof value === 'string' && isValidSuiObjectId(value)) {
    return 'object';
  } else if (typeof value === 'number' || typeof value === 'bigint') {
    return 'u64';
  } else if (typeof value === 'boolean') {
    return 'bool';
  } else {
    return undefined;
  }
};

/**
 * A pure argument.
 */
export type PureArg = { Pure: Array<number> };

export function isPureArg(arg: any): arg is PureArg {
  return (arg as PureArg).Pure !== undefined;
}

/**
 * Since we know the elements in the array are the same type
 * If type is not provided, we will try to infer the type from the first element
 * By default,
 *
 * string is hex and its length equal to 32 =====> object id
 * number, bigint ====> u64
 * boolean =====> bool
 *
 * If type is provided, we will use the type to convert the array
 * @param args
 * @param type 'address' | 'bool' | 'u8' | 'u16' | 'u32' | 'u64' | 'u128' | 'u256' | 'signer' | 'object' | string
 */
export function makeVecParam(
  tx: Transaction,
  args: SuiTxArg[],
  type?: SuiInputTypes
): TransactionArgument {
  if (args.length === 0)
    throw new Error('Transaction builder error: Empty array is not allowed');
  // Using first element value as default type
  const defaultSuiType = getDefaultSuiInputType(args[0]);
  const VECTOR_REGEX = /^vector<(.+)>$/;
  const STRUCT_REGEX = /^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;

  type = type || defaultSuiType;

  if (type === 'object') {
    const elements = args.map((arg) =>
      typeof arg === 'string' && isValidSuiObjectId(arg)
        ? tx.object(normalizeSuiObjectId(arg))
        : convertObjArg(tx, arg as SuiObjectArg)
    );
    return tx.makeMoveVec({ elements });
  } else if (
    typeof type === 'string' &&
    !VECTOR_REGEX.test(type) &&
    !STRUCT_REGEX.test(type)
  ) {
    if (type === 'address') {
      return tx.pure(bcs.vector(bcs.Address).serialize(args as string[]));
    } else if (type === 'bool') {
      return tx.pure(bcs.vector(bcs.Bool).serialize(args as boolean[]));
    } else if (type === 'u8') {
      return tx.pure(bcs.vector(bcs.U8).serialize(args as number[]));
    } else if (type === 'u16') {
      return tx.pure(bcs.vector(bcs.U16).serialize(args as number[]));
    } else if (type === 'u32') {
      return tx.pure(bcs.vector(bcs.U32).serialize(args as number[]));
    } else if (type === 'u64') {
      return tx.pure(bcs.vector(bcs.U64).serialize(args as string[]));
    } else if (type === 'u128') {
      return tx.pure(bcs.vector(bcs.U128).serialize(args as string[]));
    } else if (type === 'u256') {
      return tx.pure(bcs.vector(bcs.U256).serialize(args as string[]));
    } else {
      return tx.pure(bcs.vector(bcs.U8).serialize(args as number[]));
    }
    // return tx.pure(args, `vector<${type}>`);
  } else {
    const elements = args.map((arg) => convertObjArg(tx, arg as SuiObjectArg));
    return tx.makeMoveVec({ elements, type });
  }
}

/**
 * Check whether it is an valid move vec input.
 *
 * @param arg The argument to check.
 * @returns boolean.
 */
export function isMoveVecArg(arg: SuiTxArg | SuiVecTxArg): arg is SuiVecTxArg {
  if (typeof arg === 'object' && 'vecType' in arg && 'value' in arg) {
    return true;
  } else if (Array.isArray(arg)) {
    return true;
  }
  return false;
}

/**
 * Convert any valid input into array of TransactionArgument.
 *
 * @param txb The Transaction Block
 * @param args The array of argument to convert.
 * @returns The converted array of TransactionArgument.
 */
export function convertArgs(tx: Transaction, args: (SuiTxArg | SuiVecTxArg)[]) {
  return args.map((arg) => {
    if (typeof arg === 'string' && isValidSuiObjectId(arg)) {
      return tx.object(normalizeSuiObjectId(arg));
    } else if (
      typeof arg == 'object' &&
      !isSerializedBcs(arg) &&
      !isPureArg(arg) &&
      !isMoveVecArg(arg)
    ) {
      return convertObjArg(tx, arg as SuiObjectArg);
    } else if (isMoveVecArg(arg)) {
      const vecType = 'vecType' in arg;
      return vecType
        ? makeVecParam(tx, arg.value, arg.vecType)
        : makeVecParam(tx, arg);
    } else if (isSerializedBcs(arg)) {
      return arg;
    } else {
      let argType = getDefaultSuiInputType(arg);
      if (argType === 'address') {
        return tx.pure.address(arg as string);
      } else if (argType === 'u64') {
        return tx.pure.u64(arg as string);
      } else if (argType === 'bool') {
        return tx.pure.bool(arg as boolean);
      } else {
        return tx.pure.u64(arg as string);
      }
    }
  });
}

// /**
//  * Convert any valid input into array of TransactionArgument.
//  *
//  * @param txb The Transaction Block
//  * @param args The array of argument to convert.z
//  * @returns The converted array of TransactionArgument.
//  */
// export function convertReturnValue(values: DryTxReturnValues) {
//   return values.map(([value, type]) => {
//     if (type === 'address') {
//       return tx.pure.address(value);
//     } else if (type === 'bool') {
//       return tx.pure.bool(value);
//     } else if (type === 'u8') {
//       return tx.pure(bcs.vector(bcs.U8).serialize(args));
//     } else if (type === 'u16') {
//       return tx.pure(bcs.vector(bcs.U16).serialize(args));
//     } else if (type === 'u32') {
//       return tx.pure(bcs.vector(bcs.U32).serialize(args));
//     } else if (type === 'u64') {
//       return tx.pure(bcs.vector(bcs.U64).serialize(args));
//     } else if (type === 'u128') {
//       return tx.pure(bcs.vector(bcs.U128).serialize(args));
//     } else if (type === 'u256') {
//       return tx.pure(bcs.vector(bcs.U256).serialize(args));
//     }
//   });
// }

/**
 * Convert any valid address input into a TransactionArgument.
 *
 * @param txb The Transaction Block
 * @param arg The address argument to convert.
 * @returns The converted TransactionArgument.
 */
export function convertAddressArg(tx: Transaction, arg: SuiAddressArg) {
  if (typeof arg === 'string' && isValidSuiAddress(arg)) {
    return tx.pure.address(normalizeSuiAddress(arg));
  } else if (
    typeof arg == 'object' &&
    !isSerializedBcs(arg) &&
    !isPureArg(arg)
  ) {
    return convertObjArg(tx, arg as SuiObjectArg);
  } else if (isPureArg(arg)) {
    return tx.pure(Uint8Array.from(arg.Pure));
  } else {
    return arg;
  }
}

/**
 * Convert any valid object input into a TransactionArgument.
 *
 * @param tx The Transaction
 * @param arg The object argument to convert.
 * @returns The converted TransactionArgument.
 */
export function convertObjArg(
  tx: Transaction,
  arg: SuiObjectArg
): TransactionObjectArgument {
  if (typeof arg === 'string') {
    return tx.object(arg);
  }

  if ('digest' in arg && 'version' in arg && 'objectId' in arg) {
    return tx.objectRef(arg);
  }

  if ('objectId' in arg && 'initialSharedVersion' in arg && 'mutable' in arg) {
    return tx.sharedObjectRef(arg);
  }

  if ('Object' in arg) {
    if ('ImmOrOwnedObject' in arg.Object) {
      return tx.object(
        Inputs.ObjectRef(arg.Object.ImmOrOwnedObject as ObjectRef)
      );
    } else if ('SharedObject' in arg.Object) {
      return tx.object(
        Inputs.SharedObjectRef(
          arg.Object.SharedObject as {
            objectId: string;
            mutable: boolean;
            initialSharedVersion: number | string;
          }
        )
      );
    } else if ('Receiving' in arg.Object) {
      return tx.object(Inputs.ReceivingRef(arg.Object.Receiving as ObjectRef));
    } else {
      throw new Error('Invalid argument type');
    }
  }

  if ('kind' in arg) {
    return arg;
  }

  throw new Error('Invalid argument type');
}
