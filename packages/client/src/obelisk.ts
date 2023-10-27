import {
  DevInspectResults,
  RawSigner,
  SuiAddress,
  SuiMoveNormalizedModules,
  SuiTransactionBlockResponse,
  TransactionBlock,
} from '@mysten/sui.js';
import { SuiAccountManager } from './libs/suiAccountManager';
import { SuiTxBlock } from './libs/suiTxBuilder';
import { getDefaultConnection, SuiInteractor } from './libs/suiInteractor';

import { ObeliskObjectData } from 'src/types';
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
  SuiTxArgument,
  SuiVecTxArg,
} from './types';
import { normalizeHexAddress, numberToAddressHex } from './utils';
import keccak256 from 'keccak256';
import { BCS, getSuiMoveConfig } from '@mysten/bcs';

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
    tx: TransactionBlock,
    params: SuiTxArgument[],
    isRaw?: boolean
  ) => Promise<DevInspectResults | TransactionBlock>
): ContractQuery {
  return withMeta(
    meta,
    async (
      tx: TransactionBlock,
      params: SuiTxArgument[],
      isRaw?: boolean
    ): Promise<DevInspectResults | TransactionBlock> => {
      const result = await fn(tx, params, isRaw);
      return result;
    }
  );
}

function createTx(
  meta: SuiMoveMoudleFuncType,
  fn: (
    tx: TransactionBlock,
    params: SuiTxArgument[],
    isRaw?: boolean
  ) => Promise<SuiTransactionBlockResponse | TransactionBlock>
): ContractTx {
  return withMeta(
    meta,
    async (
      tx: TransactionBlock,
      params: SuiTxArgument[],
      isRaw?: boolean
    ): Promise<SuiTransactionBlockResponse | TransactionBlock> => {
      const result = await fn(tx, params, isRaw);
      return result;
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
  /**
   * Support the following ways to init the ObeliskClient:
   * 1. mnemonics
   * 2. secretKey (base64 or hex)
   * If none of them is provided, will generate a random mnemonics with 24 words.
   *
   * @param mnemonics, 12 or 24 mnemonics words, separated by space
   * @param secretKey, base64 or hex string, when mnemonics is provided, secretKey will be ignored
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
    fullnodeUrls = fullnodeUrls || [getDefaultConnection(networkType).fullnode];
    this.suiInteractor = new SuiInteractor(fullnodeUrls, networkType);

    this.packageId = packageId;
    if (metadata !== undefined) {
      this.metadata = metadata as SuiMoveNormalizedModules;
      Object.values(metadata as SuiMoveNormalizedModules).forEach((value) => {
        const data = value as SuiMoveMoudleValueType;
        const moduleName = data.name;
        Object.entries(data.exposedFunctions).forEach(([funcName, value]) => {
          const meta = value as SuiMoveMoudleFuncType;
          meta.moudleName = moduleName;
          meta.funcName = funcName;

          if (isUndefined(this.#query[moduleName])) {
            this.#query[moduleName] = {};
          }
          if (isUndefined(this.#query[moduleName][funcName])) {
            this.#query[moduleName][funcName] = createQuery(
              meta,
              (tx, p, isRaw) => this.#read(meta, tx, p, isRaw)
            );
          }

          if (isUndefined(this.#tx[moduleName])) {
            this.#tx[moduleName] = {};
          }
          if (isUndefined(this.#tx[moduleName][funcName])) {
            this.#tx[moduleName][funcName] = createTx(meta, (tx, p, isRaw) =>
              this.#exec(meta, tx, p, isRaw)
            );
          }
        });
      });
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

  #exec = async (
    meta: SuiMoveMoudleFuncType,
    tx: TransactionBlock,
    params: SuiTxArgument[],
    isRaw?: boolean
  ) => {
    tx.moveCall({
      target: `${this.contractFactory.packageId}::${meta.moudleName}::${meta.funcName}`,
      arguments: params,
    });

    if (isRaw === true) {
      return tx;
    }
    return await this.signAndSendTxn(tx);
  };

  #read = async (
    meta: SuiMoveMoudleFuncType,
    tx: TransactionBlock,
    params: SuiTxArgument[],
    isRaw?: boolean
  ) => {
    tx.moveCall({
      target: `${this.contractFactory.packageId}::${meta.moudleName}::${meta.funcName}`,
      arguments: params,
    });

    if (isRaw === true) {
      return tx;
    }
    return await this.inspectTxn(tx);
  };
  /**
   * if derivePathParams is not provided or mnemonics is empty, it will return the currentSigner.
   * else:
   * it will generate signer from the mnemonic with the given derivePathParams.
   * @param derivePathParams, such as { accountIndex: 2, isExternal: false, addressIndex: 10 }, comply with the BIP44 standard
   */
  getSigner(derivePathParams?: DerivePathParams) {
    const keyPair = this.accountManager.getKeyPair(derivePathParams);
    return new RawSigner(keyPair, this.suiInteractor.currentProvider);
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

  provider() {
    return this.suiInteractor.currentProvider;
  }

  getPackageId() {
    return this.contractFactory.packageId;
  }

  getMetadata() {
    return this.contractFactory.metadata;
  }
  /**
   * Request some SUI from faucet
   * @Returns {Promise<boolean>}, true if the request is successful, false otherwise.
   */
  async requestFaucet(address: SuiAddress, network: FaucetNetworkType) {
    // const addr = this.accountManager.getAddress(derivePathParams);
    return this.suiInteractor.requestFaucet(address, network);
  }

  async getBalance(coinType?: string, derivePathParams?: DerivePathParams) {
    const owner = this.accountManager.getAddress(derivePathParams);
    return this.suiInteractor.currentProvider.getBalance({ owner, coinType });
  }

  async getObject(objectId: string) {
    return this.suiInteractor.getObject(objectId);
  }

  async getObjects(objectIds: string[]) {
    return this.suiInteractor.getObjects(objectIds);
  }

  async signTxn(
    tx: Uint8Array | TransactionBlock | SuiTxBlock,
    derivePathParams?: DerivePathParams
  ) {
    tx = tx instanceof SuiTxBlock ? tx.txBlock : tx;
    const signer = this.getSigner(derivePathParams);
    return signer.signTransactionBlock({ transactionBlock: tx });
  }

  async signAndSendTxn(
    tx: Uint8Array | TransactionBlock | SuiTxBlock,
    derivePathParams?: DerivePathParams
  ): Promise<SuiTransactionBlockResponse> {
    const { transactionBlockBytes, signature } = await this.signTxn(
      tx,
      derivePathParams
    );
    return this.suiInteractor.sendTx(transactionBlockBytes, signature);
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
    const tx = new SuiTxBlock();
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
    const tx = new SuiTxBlock();
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
    const tx = new SuiTxBlock();
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
    const tx = new SuiTxBlock();
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
    const tx = new SuiTxBlock();
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
    const tx = new SuiTxBlock();
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
    tx: Uint8Array | TransactionBlock | SuiTxBlock,
    derivePathParams?: DerivePathParams
  ): Promise<DevInspectResults> {
    tx = tx instanceof SuiTxBlock ? tx.txBlock : tx;
    return this.suiInteractor.currentProvider.devInspectTransactionBlock({
      transactionBlock: tx,
      sender: this.getAddress(derivePathParams),
    });
  }

  async getWorld(worldObjectId: string) {
    return this.suiInteractor.getObject(worldObjectId);
  }

  async listSchemaNames(worldId: string) {
    const worldObject = await this.getObject(worldId);
    const newObjectContent = worldObject.objectFields;
    return newObjectContent['schemaNames'];
  }

  async getEntity(
    worldId: string,
    schemaName: string,
    entityId?: string
  ): Promise<any[] | undefined> {
    const schemaMoudleName = `${schemaName}_schema`;
    const tx = new TransactionBlock();
    const params = [tx.pure(worldId)] as SuiTxArgument[];
    if (entityId !== undefined) {
      params.push(tx.pure(entityId));
    }

    const getResult = (await this.query[schemaMoudleName].get(
      tx,
      params
    )) as DevInspectResults;
    const returnValue = [];

    // "success" | "failure";
    if (getResult.effects.status.status === 'success') {
      const resultList = getResult.results![0].returnValues!;
      for (const res of resultList) {
        const bcs = new BCS(getSuiMoveConfig());
        const value = Uint8Array.from(res[0]);
        const data = bcs.de(res[1], value);
        returnValue.push(data);
      }
      return returnValue;
    } else {
      return undefined;
    }
  }

  async containEntity(
    worldId: string,
    schemaName: string,
    entityId?: string
  ): Promise<boolean | undefined> {
    const schemaMoudleName = `${schemaName}_schema`;
    const tx = new TransactionBlock();
    const params = [tx.pure(worldId)] as SuiTxArgument[];
    if (entityId !== undefined) {
      params.push(tx.pure(entityId));
    }

    const getResult = (await this.query[schemaMoudleName].contains(
      tx,
      params
    )) as DevInspectResults;

    // "success" | "failure";
    if (getResult.effects.status.status === 'success') {
      const res = getResult.results![0].returnValues![0];
      const bcs = new BCS(getSuiMoveConfig());
      const value = Uint8Array.from(res[0]);
      return bcs.de(res[1], value);
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
  //   let schemaMoudleName = `${schemaName}_schema`;

  //   const tx = new TransactionBlock();
  //   let params = [tx.pure(worldId)] as SuiTxArgument[];

  //   const tableResult = (await this.query[schemaonentMoudleName].entities(
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

  async getOwnedObjects(owner: SuiAddress, cursor?: string, limit?: number) {
    const ownedObjects = await this.suiInteractor.getOwnedObjects(
      owner,
      cursor,
      limit
    );
    const ownedObjectsRes: ObeliskObjectData[] = [];

    for (const object of ownedObjects.data) {
      const objectDetail = await this.getObject(object.data!.objectId);

      if (
        objectDetail.objectType.split('::')[0] ===
        this.contractFactory.packageId
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
    const bcs = new BCS(getSuiMoveConfig());
    const value = Uint8Array.from(hashU8Array);
    const data = bcs.de('address', value);
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
      const bcs = new BCS(getSuiMoveConfig());
      const bytes = Buffer.from(objectId.slice(2), 'hex');
      const numberBytes = bcs.ser('u256', x).toBytes();
      return this.entity_key_from_bytes(Buffer.concat([bytes, numberBytes]));
    } else {
      return undefined;
    }
  }

  async entity_key_from_u256(x: number) {
    return numberToAddressHex(x);
  }

  async formatData(type: string, value: Buffer | number[] | Uint8Array) {
    const bcs = new BCS(getSuiMoveConfig());
    const u8Value = Uint8Array.from(value);
    return bcs.de(type, u8Value);
  }
}
