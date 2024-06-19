import { Transaction } from '@mysten/sui/transactions';
import { SUI_SYSTEM_STATE_OBJECT_ID } from '@mysten/sui/utils';
import type { SuiClient, SuiObjectRef } from '@mysten/sui/client';
import type {
  TransactionObjectArgument,
  TransactionObjectInput,
} from '@mysten/sui/transactions';
import { bcs } from '@mysten/sui/bcs';
import type { Keypair } from '@mysten/sui/cryptography';
import { SerializedBcs } from '@mysten/bcs';

import type {
  ObjectCallArg,
  TransactionType,
  SuiTxArg,
  SuiAddressArg,
  SuiObjectArg,
  SuiVecTxArg,
} from '../../types';
import {
  convertArgs,
  convertAddressArg,
  convertObjArg,
  getDefaultSuiInputType,
} from './util';

export class SuiTx {
  public tx: Transaction;

  constructor(transaction?: Transaction) {
    if (transaction !== undefined) {
      this.tx = Transaction.from(transaction);
    } else {
      this.tx = new Transaction();
    }
  }

  /* Directly wrap methods and properties of TransactionBlock */
  get gas() {
    return this.tx.gas;
  }
  get blockData() {
    return this.tx.blockData;
  }

  autoPure(value: string, type?: string) {
    if (type === undefined) {
      return convertArgs(this.tx, [value]);
    }

    return;
  }

  address(value: string) {
    return this.tx.pure.address(value);
  }
  pure(value: SerializedBcs<any, any> | Uint8Array) {
    return this.tx.pure(value);
  }
  object(value: TransactionObjectInput) {
    return this.tx.object(value);
  }
  objectRef(ref: SuiObjectRef) {
    return this.tx.objectRef(ref);
  }
  sharedObjectRef(ref: typeof bcs.SharedObjectRef.$inferType) {
    return this.tx.sharedObjectRef(ref);
  }
  setSender(sender: string) {
    return this.tx.setSender(sender);
  }
  setSenderIfNotSet(sender: string) {
    return this.tx.setSenderIfNotSet(sender);
  }
  setExpiration(expiration?: typeof bcs.TransactionExpiration.$inferType) {
    return this.tx.setExpiration(expiration);
  }
  setGasPrice(price: number | bigint) {
    return this.tx.setGasPrice(price);
  }
  setGasBudget(budget: number | bigint) {
    return this.tx.setGasBudget(budget);
  }
  setGasOwner(owner: string) {
    return this.tx.setGasOwner(owner);
  }
  setGasPayment(payments: SuiObjectRef[]) {
    return this.tx.setGasPayment(payments);
  }
  serialize() {
    return this.tx.serialize();
  }
  sign(params: {
    signer: Keypair;
    client?: SuiClient;
    onlyTransactionKind?: boolean;
  }) {
    return this.tx.sign(params);
  }
  build(
    params: {
      client?: SuiClient;
      onlyTransactionKind?: boolean;
    } = {}
  ) {
    return this.tx.build(params);
  }
  getDigest(params: { client?: SuiClient } = {}) {
    return this.tx.getDigest(params);
  }
  add(...args: TransactionType) {
    return this.tx.add(...args);
  }
  publish({
    modules,
    dependencies,
  }: {
    modules: number[][] | string[];
    dependencies: string[];
  }) {
    return this.tx.publish({ modules, dependencies });
  }
  upgrade({
    modules,
    dependencies,
    package: packageId,
    ticket,
  }: {
    modules: number[][] | string[];
    dependencies: string[];
    package: string;
    ticket: TransactionObjectArgument | string;
  }) {
    return this.tx.upgrade({
      modules,
      dependencies,
      package: packageId,
      ticket,
    });
  }
  makeMoveVec({
    elements,
    type,
  }: {
    elements: (TransactionObjectArgument | string)[];
    type?: string;
  }) {
    return this.tx.makeMoveVec({ elements, type });
  }

  /* Override methods of TransactionBlock */

  transferObjects(objects: SuiObjectArg[], address: SuiAddressArg) {
    return this.tx.transferObjects(
      objects.map((object) => convertObjArg(this.tx, object)),
      convertAddressArg(this.tx, address)
    );
  }

  splitCoins(coin: SuiObjectArg, amounts: SuiTxArg[]) {
    const res = this.tx.splitCoins(
      convertObjArg(this.tx, coin),
      convertArgs(this.tx, amounts)
    );
    return amounts.map((_, i) => res[i]);
  }

  mergeCoins(destination: SuiObjectArg, sources: SuiObjectArg[]) {
    const destinationObject = convertObjArg(this.tx, destination);
    const sourceObjects = sources.map((source) =>
      convertObjArg(this.tx, source)
    );
    return this.tx.mergeCoins(destinationObject, sourceObjects);
  }

  /**
   * @description Move call
   * @param target `${string}::${string}::${string}`, e.g. `0x3::sui_system::request_add_stake`
   * @param args the arguments of the move call, such as `['0x1', '0x2']`
   * @param typeArgs the type arguments of the move call, such as `['0x2::sui::SUI']`
   */
  moveCall(
    target: string,
    args: (SuiTxArg | SuiVecTxArg)[] = [],
    typeArgs: string[] = []
  ) {
    // a regex for pattern `${string}::${string}::${string}`
    const regex =
      /(?<package>[a-zA-Z0-9]+)::(?<module>[a-zA-Z0-9_]+)::(?<function>[a-zA-Z0-9_]+)/;
    const match = target.match(regex);
    if (match === null)
      throw new Error(
        'Invalid target format. Expected `${string}::${string}::${string}`'
      );
    const convertedArgs = convertArgs(this.tx, args);
    return this.tx.moveCall({
      target: target as `${string}::${string}::${string}`,
      arguments: convertedArgs,
      typeArguments: typeArgs,
    });
  }

  /* Enhance methods of TransactionBlock */

  transferSuiToMany(recipients: SuiAddressArg[], amounts: SuiTxArg[]) {
    // require recipients.length === amounts.length
    if (recipients.length !== amounts.length) {
      throw new Error(
        'transferSuiToMany: recipients.length !== amounts.length'
      );
    }
    const coins = this.tx.splitCoins(
      this.tx.gas,
      convertArgs(this.tx, amounts)
    );
    const recipientObjects = recipients.map((recipient) =>
      convertAddressArg(this.tx, recipient)
    );
    recipientObjects.forEach((address, index) => {
      this.tx.transferObjects([coins[index]], address);
    });
    return this;
  }

  transferSui(address: SuiAddressArg, amount: SuiTxArg) {
    return this.transferSuiToMany([address], [amount]);
  }

  takeAmountFromCoins(coins: SuiObjectArg[], amount: SuiTxArg) {
    const coinObjects = coins.map((coin) => convertObjArg(this.tx, coin));
    const mergedCoin = coinObjects[0];
    if (coins.length > 1) {
      this.tx.mergeCoins(mergedCoin, coinObjects.slice(1));
    }
    const [sendCoin] = this.tx.splitCoins(
      mergedCoin,
      convertArgs(this.tx, [amount])
    );
    return [sendCoin, mergedCoin];
  }

  splitSUIFromGas(amounts: SuiTxArg[]) {
    return this.tx.splitCoins(this.tx.gas, convertArgs(this.tx, amounts));
  }

  splitMultiCoins(coins: SuiObjectArg[], amounts: SuiTxArg[]) {
    const coinObjects = coins.map((coin) => convertObjArg(this.tx, coin));
    const mergedCoin = coinObjects[0];
    if (coins.length > 1) {
      this.tx.mergeCoins(mergedCoin, coinObjects.slice(1));
    }
    const splitedCoins = this.tx.splitCoins(
      mergedCoin,
      convertArgs(this.tx, amounts)
    );
    return { splitedCoins, mergedCoin };
  }

  transferCoinToMany(
    coins: SuiObjectArg[],
    sender: SuiAddressArg,
    recipients: SuiAddressArg[],
    amounts: SuiTxArg[]
  ) {
    // require recipients.length === amounts.length
    if (recipients.length !== amounts.length) {
      throw new Error(
        'transferSuiToMany: recipients.length !== amounts.length'
      );
    }
    const coinObjects = coins.map((coin) => convertObjArg(this.tx, coin));
    const { splitedCoins, mergedCoin } = this.splitMultiCoins(
      coinObjects,
      amounts
    );
    const recipientObjects = recipients.map((recipient) =>
      convertAddressArg(this.tx, recipient)
    );
    recipientObjects.forEach((address, index) => {
      this.tx.transferObjects([splitedCoins[index]], address);
    });
    this.tx.transferObjects([mergedCoin], convertAddressArg(this.tx, sender));
    return this;
  }

  transferCoin(
    coins: SuiObjectArg[],
    sender: SuiAddressArg,
    recipient: SuiAddressArg,
    amount: SuiTxArg
  ) {
    return this.transferCoinToMany(coins, sender, [recipient], [amount]);
  }

  stakeSui(amount: SuiTxArg, validatorAddr: SuiAddressArg) {
    const [stakeCoin] = this.tx.splitCoins(
      this.tx.gas,
      convertArgs(this.tx, [amount])
    );
    return this.tx.moveCall({
      target: '0x3::sui_system::request_add_stake',
      arguments: convertArgs(this.tx, [
        SUI_SYSTEM_STATE_OBJECT_ID,
        stakeCoin,
        this.tx.pure.address(validatorAddr.toString()),
      ]),
    });
  }
}
