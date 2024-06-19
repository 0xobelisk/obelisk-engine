import keccak256 from 'keccak256';
import { getFullnodeUrl } from '@mysten/sui/client';
import { Transaction, TransactionResult } from '@mysten/sui/transactions';
import type { BcsType, SerializedBcs } from '@mysten/bcs';
import type { TransactionArgument } from '@mysten/sui/transactions';
import type {
  SuiTransactionBlockResponse,
  DevInspectResults,
  SuiMoveNormalizedModules,
  SuiObjectData,
} from '@mysten/sui/client';
import { SuiAccountManager } from './libs/suiAccountManager';
import { SuiTx } from './libs/suiTxBuilder';
import { SuiInteractor } from './libs/suiInteractor';

import { MapMoudleStruct, NetworkType, ObeliskObjectContent } from './types';
import { SuiContractFactory } from './libs/suiContractFactory';
import {
  SuiMoveMoudleFuncType,
  SuiMoveMoudleValueType,
} from './libs/suiContractFactory/types';
import {
  ContractQuery,
  ContractTx,
  DerivePathParams,
  FaucetNetworkType,
  MapMoudleFuncQuery,
  MapMoudleFuncTx,
  ObeliskParams,
  SuiTxArg,
  // SuiTxArgument,
  SuiVecTxArg,
} from './types';
import { normalizeHexAddress, numberToAddressHex } from './utils';
import { bcs, fromHEX, toHEX } from '@mysten/bcs';
import { TypeTagSerializer } from '@mysten/sui/bcs';

export function isUndefined(value?: unknown): value is undefined {
  return value === undefined;
}

export function withMeta<T extends { meta: SuiMoveMoudleFuncType }>(
  meta: SuiMoveMoudleFuncType,
  creator: Omit<T, 'meta'>
): T {
  (creator as T).meta = meta;

  return creator as T;
}

function createQuery(
  meta: SuiMoveMoudleFuncType,
  fn: (
    tx: Transaction,
    params: (TransactionArgument | SerializedBcs<any>)[],
    typeArguments?: string[],
    isRaw?: boolean
  ) => Promise<DevInspectResults | TransactionResult>
): ContractQuery {
  return withMeta(
    meta,
    async (
      tx: Transaction,
      params: (TransactionArgument | SerializedBcs<any>)[],
      typeArguments?: string[],
      isRaw?: boolean
    ): Promise<DevInspectResults | TransactionResult> => {
      const result = await fn(tx, params, typeArguments, isRaw);
      return result;
    }
  );
}

function createTx(
  meta: SuiMoveMoudleFuncType,
  fn: (
    tx: Transaction,
    params: (TransactionArgument | SerializedBcs<any>)[],
    typeArguments?: string[],
    isRaw?: boolean
  ) => Promise<SuiTransactionBlockResponse | TransactionResult>
): ContractTx {
  return withMeta(
    meta,
    async (
      tx: Transaction,
      params: (TransactionArgument | SerializedBcs<any>)[],
      typeArguments?: string[],
      isRaw?: boolean
    ): Promise<SuiTransactionBlockResponse | TransactionResult> => {
      // const result = await fn(tx, params, typeArguments, isRaw);
      return await fn(tx, params, typeArguments, isRaw);
    }
  );
}

/**
 * @class Obelisk
 * @description This class is used to aggregate the tools that used to interact with SUI network.
 */
export class Obelisk {
  public accountManager: SuiAccountManager;
  public suiInteractor: SuiInteractor;
  public contractFactory: SuiContractFactory;
  public packageId: string | undefined;
  public metadata: SuiMoveNormalizedModules | undefined;

  readonly #query: MapMoudleFuncQuery = {};
  readonly #tx: MapMoudleFuncTx = {};
  readonly #struct: MapMoudleStruct = {};
  /**
   * Support the following ways to init the ObeliskClient:
   * 1. mnemonics
   * 2. secretKey (base64 or hex)
   * If none of them is provided, will generate a random mnemonics with 24 words.
   *
   * @param mnemonics, 12 or 24 mnemonics words, separated by space
   * @param secretKey, base64 or hex string or bech32, when mnemonics is provided, secretKey will be ignored
   * @param networkType, 'testnet' | 'mainnet' | 'devnet' | 'localnet', default is 'devnet'
   * @param fullnodeUrl, the fullnode url, default is the preconfig fullnode url for the given network type
   * @param packageId
   */
  constructor({
    mnemonics,
    secretKey,
    networkType,
    fullnodeUrls,
    packageId,
    metadata,
  }: ObeliskParams = {}) {
    // Init the account manager
    this.accountManager = new SuiAccountManager({ mnemonics, secretKey });
    // Init the rpc provider
    fullnodeUrls = fullnodeUrls || [getFullnodeUrl(networkType ?? 'mainnet')];
    this.suiInteractor = new SuiInteractor(fullnodeUrls, networkType);

    this.packageId = packageId;
    if (metadata !== undefined) {
      this.metadata = metadata as SuiMoveNormalizedModules;
      Object.values(metadata as SuiMoveNormalizedModules).forEach(
        (moudlevalue) => {
          const data = moudlevalue as SuiMoveMoudleValueType;
          const moduleName = data.name;
          const structAddr = `${data.address}::${data.name}`;
          console.log('\n');
          console.log(data.address, data.name);
          console.log(JSON.stringify(data.structs));
          console.log('\n');

          Object.entries(data.structs).forEach(([structName, structBody]) => {
            console.log(`${structAddr}::${structName}`);
            const structId = `${structAddr}::${structName}`;
            const structFields = structBody.fields;
            let bcsJson: Record<string, BcsType<any, any>> = {};
            Object.entries(structFields).forEach(([index, field]) => {
              console.log(field);
              if (field.name === 'Bool') {
                bcsJson[field.name] = bcs.bool();
              } else if (field.name === 'U8') {
                bcsJson[field.name] = bcs.u8();
              } else if (field.name === 'U16') {
                bcsJson[field.name] = bcs.u16();
              } else if (field.name === 'U32') {
                bcsJson[field.name] = bcs.u32();
              } else if (field.name === 'U64') {
                bcsJson[field.name] = bcs.u64();
              } else if (field.name === 'U128') {
                bcsJson[field.name] = bcs.u128();
              } else if (field.name === 'U256') {
                bcsJson[field.name] = bcs.u256();
              } else if (field.name === 'Address') {
                const Address = bcs.bytes(32).transform({
                  // To change the input type, you need to provide a type definition for the input
                  input: (val: string) => fromHEX(val),
                  output: (val) => toHEX(val),
                });

                bcsJson[field.name] = Address;
              } else if (field.name === 'Signer') {
              }
            });
            const bcsStruct = bcs.struct(structName, bcsJson);
            this.#struct[structId] = {
              struct: {
                [structName]: structBody,
              },
              bcs: bcsStruct,
            };
          });

          console.log('\n');

          Object.entries(data.exposedFunctions).forEach(
            ([funcName, funcvalue]) => {
              const meta = funcvalue as SuiMoveMoudleFuncType;
              meta.moduleName = moduleName;
              meta.funcName = funcName;
              // console.log(JSON.stringify(funcvalue));
              if (isUndefined(this.#query[moduleName])) {
                this.#query[moduleName] = {};
              }
              if (isUndefined(this.#query[moduleName][funcName])) {
                this.#query[moduleName][funcName] = createQuery(
                  meta,
                  (tx, p, typeArguments, isRaw) =>
                    this.#read(meta, tx, p, typeArguments, isRaw)
                );
              }

              if (isUndefined(this.#tx[moduleName])) {
                this.#tx[moduleName] = {};
              }
              if (isUndefined(this.#tx[moduleName][funcName])) {
                this.#tx[moduleName][funcName] = createTx(
                  meta,
                  (tx, p, typeArguments, isRaw) =>
                    this.#exec(meta, tx, p, typeArguments, isRaw)
                );
              }
            }
          );
        }
      );
    }
    this.contractFactory = new SuiContractFactory({
      packageId,
      metadata,
    });
  }

  public get query(): MapMoudleFuncQuery {
    return this.#query;
  }

  public get tx(): MapMoudleFuncTx {
    return this.#tx;
  }

  public get struct(): MapMoudleStruct {
    return this.#struct;
  }

  #exec = async (
    meta: SuiMoveMoudleFuncType,
    tx: Transaction,
    params: (TransactionArgument | SerializedBcs<any>)[],
    typeArguments?: string[],
    isRaw?: boolean
  ) => {
    if (isRaw === true) {
      return tx.moveCall({
        target: `${this.contractFactory.packageId}::${meta.moduleName}::${meta.funcName}`,
        arguments: params,
        typeArguments,
      });
    }

    tx.moveCall({
      target: `${this.contractFactory.packageId}::${meta.moduleName}::${meta.funcName}`,
      arguments: params,
      typeArguments,
    });
    return await this.signAndSendTxn(tx);
  };

  #read = async (
    meta: SuiMoveMoudleFuncType,
    tx: Transaction,
    params: (TransactionArgument | SerializedBcs<any>)[],
    typeArguments?: string[],
    isRaw?: boolean
  ) => {
    if (isRaw === true) {
      return tx.moveCall({
        target: `${this.contractFactory.packageId}::${meta.moduleName}::${meta.funcName}`,
        arguments: params,
        typeArguments,
      });
    }

    tx.moveCall({
      target: `${this.contractFactory.packageId}::${meta.moduleName}::${meta.funcName}`,
      arguments: params,
      typeArguments,
    });

    return await this.inspectTxn(tx);
  };

  /**
   * if derivePathParams is not provided or mnemonics is empty, it will return the keypair.
   * else:
   * it will generate signer from the mnemonic with the given derivePathParams.
   * @param derivePathParams, such as { accountIndex: 2, isExternal: false, addressIndex: 10 }, comply with the BIP44 standard
   */
  getKeypair(derivePathParams?: DerivePathParams) {
    return this.accountManager.getKeyPair(derivePathParams);
  }

  /**
   * @description Switch the current account with the given derivePathParams
   * @param derivePathParams, such as { accountIndex: 2, isExternal: false, addressIndex: 10 }, comply with the BIP44 standard
   */
  switchAccount(derivePathParams: DerivePathParams) {
    this.accountManager.switchAccount(derivePathParams);
  }

  /**
   * @description Get the address of the account for the given derivePathParams
   * @param derivePathParams, such as { accountIndex: 2, isExternal: false, addressIndex: 10 }, comply with the BIP44 standard
   */
  getAddress(derivePathParams?: DerivePathParams) {
    return this.accountManager.getAddress(derivePathParams);
  }

  currentAddress() {
    return this.accountManager.currentAddress;
  }

  getPackageId() {
    return this.contractFactory.packageId;
  }

  getMetadata() {
    return this.contractFactory.metadata;
  }

  getNetwork() {
    return this.suiInteractor.network;
  }
  /**
   * Request some SUI from faucet
   * @Returns {Promise<boolean>}, true if the request is successful, false otherwise.
   */
  async requestFaucet(
    address?: string,
    network?: FaucetNetworkType,
    derivePathParams?: DerivePathParams
  ) {
    if (address === undefined) {
      address = this.accountManager.getAddress(derivePathParams);
    }
    if (network === undefined) {
      network = this.getNetwork() as
        | FaucetNetworkType
        | 'devnet' as FaucetNetworkType;
    }
    // const addr = this.accountManager.getAddress(derivePathParams);
    return this.suiInteractor.requestFaucet(address, network);
  }

  async getBalance(coinType?: string, derivePathParams?: DerivePathParams) {
    const owner = this.accountManager.getAddress(derivePathParams);
    return this.suiInteractor.currentClient.getBalance({ owner, coinType });
  }

  async balanceOf(
    accountAddress?: string,
    coinType?: string,
    derivePathParams?: DerivePathParams
  ) {
    if (accountAddress === undefined) {
      accountAddress = this.accountManager.getAddress(derivePathParams);
    }
    const owner = accountAddress;
    return this.suiInteractor.currentClient.getBalance({ owner, coinType });
  }

  client() {
    return this.suiInteractor.currentClient;
  }

  async getObject(objectId: string) {
    return this.suiInteractor.getObject(objectId);
  }

  async getObjects(objectIds: string[]) {
    return this.suiInteractor.getObjects(objectIds);
  }

  async signTxn(
    tx: Uint8Array | Transaction | SuiTx,
    derivePathParams?: DerivePathParams
  ) {
    if (tx instanceof SuiTx || tx instanceof Transaction) {
      tx.setSender(this.getAddress(derivePathParams));
    }
    const txBlock = tx instanceof SuiTx ? tx.tx : tx;
    const txBytes =
      txBlock instanceof Transaction
        ? await txBlock.build({ client: this.client() })
        : txBlock;
    const keyPair = this.getKeypair(derivePathParams);
    return await keyPair.signTransaction(txBytes);
  }

  async signAndSendTxn(
    tx: Uint8Array | Transaction | SuiTx,
    derivePathParams?: DerivePathParams
  ): Promise<SuiTransactionBlockResponse> {
    const { bytes, signature } = await this.signTxn(tx, derivePathParams);
    return this.suiInteractor.sendTx(bytes, signature);
  }

  /**
   * Transfer the given amount of SUI to the recipient
   * @param recipient
   * @param amount
   * @param derivePathParams
   */
  async transferSui(
    recipient: string,
    amount: number,
    derivePathParams?: DerivePathParams
  ) {
    const tx = new SuiTx();
    tx.transferSui(recipient, amount);
    return this.signAndSendTxn(tx, derivePathParams);
  }

  /**
   * Transfer to mutliple recipients
   * @param recipients the recipients addresses
   * @param amounts the amounts of SUI to transfer to each recipient, the length of amounts should be the same as the length of recipients
   * @param derivePathParams
   */
  async transferSuiToMany(
    recipients: string[],
    amounts: number[],
    derivePathParams?: DerivePathParams
  ) {
    const tx = new SuiTx();
    tx.transferSuiToMany(recipients, amounts);
    return this.signAndSendTxn(tx, derivePathParams);
  }

  /**
   * Transfer the given amounts of coin to multiple recipients
   * @param recipients the list of recipient address
   * @param amounts the amounts to transfer for each recipient
   * @param coinType any custom coin type but not SUI
   * @param derivePathParams the derive path params for the current signer
   */
  async transferCoinToMany(
    recipients: string[],
    amounts: number[],
    coinType: string,
    derivePathParams?: DerivePathParams
  ) {
    const tx = new SuiTx();
    const owner = this.accountManager.getAddress(derivePathParams);
    const totalAmount = amounts.reduce((a, b) => a + b, 0);
    const coins = await this.suiInteractor.selectCoins(
      owner,
      totalAmount,
      coinType
    );
    tx.transferCoinToMany(
      coins.map((c) => c.objectId),
      owner,
      recipients,
      amounts
    );
    return this.signAndSendTxn(tx, derivePathParams);
  }

  async transferCoin(
    recipient: string,
    amount: number,
    coinType: string,
    derivePathParams?: DerivePathParams
  ) {
    return this.transferCoinToMany(
      [recipient],
      [amount],
      coinType,
      derivePathParams
    );
  }

  async transferObjects(
    objects: string[],
    recipient: string,
    derivePathParams?: DerivePathParams
  ) {
    const tx = new SuiTx();
    tx.transferObjects(objects, recipient);
    return this.signAndSendTxn(tx, derivePathParams);
  }

  async moveCall(callParams: {
    target: string;
    arguments?: (SuiTxArg | SuiVecTxArg)[];
    typeArguments?: string[];
    derivePathParams?: DerivePathParams;
  }) {
    const {
      target,
      arguments: args = [],
      typeArguments = [],
      derivePathParams,
    } = callParams;
    const tx = new SuiTx();
    tx.moveCall(target, args, typeArguments);
    return this.signAndSendTxn(tx, derivePathParams);
  }

  /**
   * Select coins with the given amount and coin type, the total amount is greater than or equal to the given amount
   * @param amount
   * @param coinType
   * @param owner
   */
  async selectCoinsWithAmount(
    amount: number,
    coinType: string,
    owner?: string
  ) {
    owner = owner || this.accountManager.currentAddress;
    const coins = await this.suiInteractor.selectCoins(owner, amount, coinType);
    return coins.map((c) => c.objectId);
  }

  async selectObjectsWithType(objectType: string, owner?: string) {
    owner = owner || this.accountManager.currentAddress;
    const objects = await this.suiInteractor.selectObjects(owner, objectType);
    return objects.map((c) => c.objectId);
  }

  /**
   * stake the given amount of SUI to the validator
   * @param amount the amount of SUI to stake
   * @param validatorAddr the validator address
   * @param derivePathParams the derive path params for the current signer
   */
  async stakeSui(
    amount: number,
    validatorAddr: string,
    derivePathParams?: DerivePathParams
  ) {
    const tx = new SuiTx();
    tx.stakeSui(amount, validatorAddr);
    return this.signAndSendTxn(tx, derivePathParams);
  }

  /**
   * Execute the transaction with on-chain data but without really submitting. Useful for querying the effects of a transaction.
   * Since the transaction is not submitted, its gas cost is not charged.
   * @param tx the transaction to execute
   * @param derivePathParams the derive path params
   * @returns the effects and events of the transaction, such as object changes, gas cost, event emitted.
   */
  async inspectTxn(
    tx: Uint8Array | Transaction | SuiTx,
    derivePathParams?: DerivePathParams
  ): Promise<DevInspectResults> {
    const txBlock = tx instanceof SuiTx ? tx.tx : tx;
    return this.suiInteractor.currentClient.devInspectTransactionBlock({
      transactionBlock: txBlock,
      sender: this.getAddress(derivePathParams),
    });
  }

  async getWorld(worldObjectId: string) {
    return this.suiInteractor.getObject(worldObjectId);
  }

  async listSchemaNames(worldId: string) {
    const worldObject = await this.getObject(worldId);
    const newObjectContent = worldObject.content;
    if (newObjectContent != null) {
      const objectContent = newObjectContent as ObeliskObjectContent;
      const objectFields = objectContent.fields as Record<string, any>;
      return objectFields['schema_names'];
    } else {
      return [];
    }
  }

  async getEntity(
    worldId: string,
    schemaName: string,
    entityId?: string
  ): Promise<any[] | undefined> {
    const schemaModuleName = `${schemaName}_schema`;
    const tx = new Transaction();
    const params = [tx.pure.address(worldId)] as TransactionArgument[];

    if (entityId !== undefined) {
      params.push(tx.pure.address(entityId));
    }

    const getResult = (await this.query[schemaModuleName].get(
      tx,
      params
    )) as DevInspectResults;
    let returnValues = [];

    // "success" | "failure";
    if (getResult.effects.status.status === 'success') {
      const resultList = getResult.results![0].returnValues!;

      for (const res of resultList) {
        let baseValue = res[0];
        let baseType = res[1];

        const value = Uint8Array.from(baseValue);
        if (baseType === 'address') {
          const Address = bcs.bytes(32).transform({
            // To change the input type, you need to provide a type definition for the input
            input: (val: string) => fromHEX(val),
            output: (val) => toHEX(val),
          });
          returnValues.push(Address.parse(value));
        } else if (baseType === 'u8') {
          returnValues.push(bcs.u8().parse(value));
        } else if (baseType === 'u16') {
          returnValues.push(bcs.u16().parse(value));
        } else if (baseType === 'u32') {
          returnValues.push(bcs.u32().parse(value));
        } else if (baseType === 'u64') {
          returnValues.push(bcs.u64().parse(value));
        } else if (baseType === 'u128') {
          returnValues.push(bcs.u128().parse(value));
        } else if (baseType === 'u256') {
          returnValues.push(bcs.u256().parse(value));
        } else if (baseType === 'bool') {
          returnValues.push(bcs.bool().parse(value));
        } else if (baseType === '0x1::ascii::String') {
          returnValues.push(bcs.string().parse(value));
        }
      }
      return returnValues;
    } else {
      return undefined;
    }
  }

  async containEntity(
    worldId: string,
    schemaName: string,
    entityId?: string
  ): Promise<boolean | undefined> {
    const schemaModuleName = `${schemaName}_schema`;
    const tx = new Transaction();
    const params = [tx.pure.address(worldId)] as TransactionArgument[];

    if (entityId !== undefined) {
      params.push(tx.pure.address(entityId));
    }

    const getResult = (await this.query[schemaModuleName].contains(
      tx,
      params
    )) as DevInspectResults;

    // "success" | "failure";
    if (getResult.effects.status.status === 'success') {
      const res = getResult.results![0].returnValues![0];
      let baseValue = res[0];

      const value = Uint8Array.from(baseValue);
      return bcs.bool().parse(value);
    } else {
      return undefined;
    }
  }

  // async getEntities(
  //   worldId: string,
  //   schemaName: string,
  //   cursor?: string,
  //   limit?: number
  // ) {
  //   let schemaModuleName = `${schemaName}_schema`;

  //   const tx = new TransactionBlock();
  //   let params = [tx.pure(worldId)] as SuiTxArgument[];

  //   const tableResult = (await this.query[schemaonentModuleName].entities(
  //     tx,
  //     params
  //   )) as DevInspectResults;
  //   const entities = tableResult.results as SuiReturnValues;
  //   const bcs = new BCS(getSuiMoveConfig());

  //   let value = Uint8Array.from(entities[0].returnValues[0][0]);
  //   let tableId = '0x' + bcs.de('address', value);
  //   let dynamicFields = await this.suiInteractor.getDynamicFields(
  //     tableId,
  //     cursor,
  //     limit
  //   );
  //   let objectIds = dynamicFields.data.map((field) => field.objectId);
  //   let objectDatas = await this.suiInteractor.getEntitiesObjects(objectIds);
  //   return {
  //     data: objectDatas,
  //     nextCursor: dynamicFields.nextCursor,
  //     hasNextPage: dynamicFields.hasNextPage,
  //   };
  // }

  async getOwnedObjects(owner: string, cursor?: string, limit?: number) {
    const ownedObjects = await this.suiInteractor.getOwnedObjects(
      owner,
      cursor,
      limit
    );
    const ownedObjectsRes: SuiObjectData[] = [];

    for (const object of ownedObjects.data) {
      const objectDetail = await this.getObject(object.data!.objectId);
      if (
        objectDetail.type!.split('::')[0] === this.contractFactory.packageId
      ) {
        ownedObjectsRes.push(objectDetail);
      }
    }

    return ownedObjectsRes;
  }

  async entity_key_from_object(objectId: string) {
    const checkObjectId = normalizeHexAddress(objectId);
    if (checkObjectId !== null) {
      objectId = checkObjectId;
      return objectId;
    } else {
      return undefined;
    }
  }

  async entity_key_from_bytes(bytes: Uint8Array | Buffer | string) {
    const hashBytes = keccak256(bytes);
    const hashU8Array: number[] = Array.from(hashBytes);
    const value = Uint8Array.from(hashU8Array);
    const Address = bcs.bytes(32).transform({
      // To change the input type, you need to provide a type definition for the input
      input: (val: string) => fromHEX(val),
      output: (val) => toHEX(val),
    });
    const data = Address.parse(value);
    return '0x' + data;
  }

  async entity_key_from_address_with_seed(objectId: string, seed: string) {
    const checkObjectId = normalizeHexAddress(objectId);
    if (checkObjectId !== null) {
      objectId = checkObjectId;
      const bytes = Buffer.from(objectId.slice(2), 'hex');
      const newBuffer = Buffer.concat([bytes, Buffer.from(seed, 'utf-8')]);
      return this.entity_key_from_bytes(newBuffer);
    } else {
      return undefined;
    }
  }

  async entity_key_from_address_with_u256(objectId: string, x: number) {
    const checkObjectId = normalizeHexAddress(objectId);
    if (checkObjectId !== null) {
      objectId = checkObjectId;
      const bytes = Buffer.from(objectId.slice(2), 'hex');

      const numberBytes = bcs.u256().serialize(x).toBytes();

      return this.entity_key_from_bytes(Buffer.concat([bytes, numberBytes]));
    } else {
      return undefined;
    }
  }

  async entity_key_from_u256(x: number) {
    return numberToAddressHex(x);
  }

  // async formatData(type: string, value: Buffer | number[] | Uint8Array) {
  //   const u8Value = Uint8Array.from(value);
  //   return bcs.de(type, u8Value);
  // }

  async autoFormatDryValue(value: DevInspectResults) {
    let returnValues = [];

    // "success" | "failure";
    if (value.effects.status.status === 'success') {
      const resultList = value.results![0].returnValues!;

      for (const res of resultList) {
        let baseValue = res[0];
        let baseType = res[1];
        let serType = TypeTagSerializer.parseFromStr(baseType);
        console.log('serType', serType);
        const value = Uint8Array.from(baseValue);
        if (baseType === 'address') {
          const Address = bcs.bytes(32).transform({
            // To change the input type, you need to provide a type definition for the input
            input: (val: string) => fromHEX(val),
            output: (val) => toHEX(val),
          });
          returnValues.push(Address.parse(value));
        } else if (baseType === 'u8') {
          returnValues.push(bcs.u8().parse(value));
        } else if (baseType === 'u16') {
          returnValues.push(bcs.u16().parse(value));
        } else if (baseType === 'u32') {
          returnValues.push(bcs.u32().parse(value));
        } else if (baseType === 'u64') {
          returnValues.push(bcs.u64().parse(value));
        } else if (baseType === 'u128') {
          returnValues.push(bcs.u128().parse(value));
        } else if (baseType === 'u256') {
          returnValues.push(bcs.u256().parse(value));
        } else if (baseType === 'bool') {
          returnValues.push(bcs.bool().parse(value));
        } else if (baseType === '0x1::ascii::String') {
          returnValues.push(bcs.string().parse(value));
        } else if (baseType === 'vector<u8>') {
          returnValues.push(bcs.vector(bcs.u8()).parse(value));
        } else if (baseType === '0x1::option::Option<u8>') {
          returnValues.push(bcs.option(bcs.u8()).parse(value));
        }
      }
      return returnValues;
    } else {
      return undefined;
    }
  }
}
