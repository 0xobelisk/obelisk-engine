import {
  Types,
  TxnBuilderTypes,
  AptosAccount,
  Network,
  HexString,
} from 'aptos';
import { AptosAccountManager } from './libs/aptosAccountManager';
// import { SuiTxBlock } from './libs/suiTxBuilder';
import { AptosInteractor, getDefaultURL } from './libs/aptosInteractor';
// import { SuiSharedObject, SuiOwnedObject } from './libs/suiModel';

import { AptosContractFactory } from './libs/aptosContractFactory';
import {
  MoveModuleValueType,
  MoveModuleFuncType,
} from './libs/aptosContractFactory/types';

import {
  DubheParams,
  DerivePathParams,
  ComponentContentType,
  ContractQuery,
  ContractTx,
  MapModuleFuncQuery,
  MapModuleFuncTx,
  NetworkType,
} from './types';

const {
  AccountAddress,
  EntryFunction,
  MultiSig,
  MultiSigTransactionPayload,
  TransactionPayloadMultisig,
} = TxnBuilderTypes;

type RawTransaction = TxnBuilderTypes.RawTransaction;

export function isUndefined(value?: unknown): value is undefined {
  return value === undefined;
}

export function withMeta<T extends { meta: MoveModuleFuncType }>(
  meta: MoveModuleFuncType,
  creator: Omit<T, 'meta'>
): T {
  (creator as T).meta = meta;

  return creator as T;
}

function createQuery(
  meta: MoveModuleFuncType,
  fn: (
    params?: any[],
    typeArguments?: Types.MoveType[]
  ) => Promise<Types.MoveValue[]>
): ContractQuery {
  return withMeta(
    meta,
    async (
      params?: any[],
      typeArguments?: Types.MoveType[]
    ): Promise<Types.MoveValue[]> => {
      const result = await fn(params, typeArguments);
      return result;
    }
  );
}

function createTx(
  meta: MoveModuleFuncType,
  fn: (
    sender?: HexString | string,
    params?: any[],
    typeArguments?: Types.MoveType[],
    isRaw?: boolean
  ) => Promise<Types.PendingTransaction | Types.EntryFunctionPayload>
): ContractTx {
  return withMeta(
    meta,
    async (
      sender?: HexString | string,
      params?: any[],
      typeArguments?: Types.MoveType[],
      isRaw?: boolean
    ): Promise<Types.PendingTransaction | Types.EntryFunctionPayload> => {
      const result = await fn(sender, params, typeArguments, isRaw);
      return result;
    }
  );
}

/**
 * @class Dubhe
 * @description This class is used to aggregate the tools that used to interact with SUI network.
 */
export class Dubhe {
  public accountManager: AptosAccountManager;
  public aptosInteractor: AptosInteractor;
  public contractFactory: AptosContractFactory;
  public packageId: string | undefined;
  public metadata: Types.MoveModule[] | undefined;

  readonly #query: MapModuleFuncQuery = {};
  readonly #tx: MapModuleFuncTx = {};
  /**
   * Support the following ways to init the DubheClient:
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
  }: DubheParams = {}) {
    // Init the account manager
    this.accountManager = new AptosAccountManager({ mnemonics, secretKey });
    // Init the rpc provider
    fullnodeUrls = fullnodeUrls || [getDefaultURL(networkType).fullNode];
    this.aptosInteractor = new AptosInteractor(fullnodeUrls, networkType);

    this.packageId = packageId;
    if (metadata !== undefined) {
      this.metadata = metadata as Types.MoveModule[];
      Object.values(metadata as Types.MoveModule[]).forEach((metadataRes) => {
        let contractAddress = metadataRes.address;
        let moduleName = metadataRes.name;
        Object.values(metadataRes.exposed_functions).forEach((value) => {
          const meta: MoveModuleFuncType = {
            contractAddress,
            moduleName,
            funcName: value.name,
            visibility: value.visibility,
            isEntry: value.is_entry,
            isView: value.is_view,
            typeParameters: value.generic_type_params,
            parameters: value.params,
            return: value.return,
          };

          if (value.is_view) {
            if (isUndefined(this.#query[moduleName])) {
              this.#query[moduleName] = {};
            }
            if (isUndefined(this.#query[moduleName][value.name])) {
              this.#query[moduleName][value.name] = createQuery(
                meta,
                (p, type_p) => this.#read(meta, p, type_p)
              );
            }
          }

          if (value.is_entry) {
            if (isUndefined(this.#tx[moduleName])) {
              this.#tx[moduleName] = {};
            }
            if (isUndefined(this.#tx[moduleName][value.name])) {
              this.#tx[moduleName][value.name] = createTx(
                meta,
                (s, p, type_p, isRaw) => this.#exec(meta, s, p, type_p, isRaw)
              );
            }
          }
        });
      });
    }
    this.contractFactory = new AptosContractFactory({
      packageId,
      metadata,
    });
  }

  public get query(): MapModuleFuncQuery {
    return this.#query;
  }

  public get tx(): MapModuleFuncTx {
    return this.#tx;
  }

  #exec = async (
    meta: MoveModuleFuncType,
    sender?: HexString | string,
    params?: any[],
    typeArguments?: Types.MoveType[],
    isRaw?: boolean
  ) => {
    if (typeArguments === undefined) {
      typeArguments = [];
    }

    if (params === undefined) {
      params = [];
    }

    const payload = await this.generatePayload(
      `${this.contractFactory.packageId}::${meta.moduleName}::${meta.funcName}`,
      typeArguments,
      params
    );

    if (isRaw === true) {
      return payload;
    }
    return await this.signAndSendTxnWithPayload(payload, sender);
  };

  #read = async (
    meta: MoveModuleFuncType,
    params?: any[],
    typeArguments?: Types.MoveType[]
  ) => {
    if (typeArguments === undefined) {
      typeArguments = [];
    }

    if (params === undefined) {
      params = [];
    }

    return this.aptosInteractor.view(
      meta.contractAddress,
      meta.moduleName,
      meta.funcName,
      typeArguments,
      params
    );
  };
  /**
   * if derivePathParams is not provided or mnemonics is empty, it will return the currentSigner.
   * else:
   * it will generate signer from the mnemonic with the given derivePathParams.
   * @param derivePathParams, such as { accountIndex: 2, isExternal: false, addressIndex: 10 }, comply with the BIP44 standard
   */
  getSigner(derivePathParams?: DerivePathParams) {
    const keyPair = this.accountManager.getKeyPair(derivePathParams);
    return keyPair;
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
    return this.aptosInteractor.currentProvider;
  }

  getPackageId() {
    return this.contractFactory.packageId;
  }

  getMetadata(): Types.MoveModule[] | undefined {
    return this.contractFactory.metadata;
  }

  /**
   * Request some APT from faucet
   * @Returns {Promise<boolean>}, true if the request is successful, false otherwise.
   */
  async requestFaucet(
    network: NetworkType,
    accountAddress?: string,
    amount?: number
  ) {
    if (network === Network.MAINNET) {
      return false;
    }
    if (accountAddress === undefined) {
      accountAddress = this.getAddress();
    }
    if (amount === undefined) {
      amount = 50000000;
    }
    return this.aptosInteractor.requestFaucet(network, accountAddress, amount);
  }

  async getBalance(
    accountAddress?: string,
    coinType?: string
  ): Promise<string | number> {
    try {
      if (accountAddress === undefined) {
        accountAddress = this.getAddress();
      }
      if (coinType === undefined) {
        coinType = '0x1::aptos_coin::AptosCoin';
      }

      const resource = await this.aptosInteractor.getAccountResource(
        accountAddress,
        `0x1::coin::CoinStore<${coinType}>`
      );

      return parseInt((resource.data as any)['coin']['value']);
    } catch (_) {
      return 0;
    }
  }

  async signAndSendTxnWithPayload(
    payload: Types.EntryFunctionPayload,
    sender?: HexString | string,
    derivePathParams?: DerivePathParams
  ) {
    const signer = this.getSigner(derivePathParams);
    if (sender === undefined) {
      sender = signer.address();
    }

    if (typeof sender === 'string') {
      sender = new HexString(sender);
    }

    return this.aptosInteractor.sendTxWithPayload(signer, sender, payload);
  }

  async generatePayload(
    target: string,
    typeArguments: Types.MoveType[],
    params: any[]
  ): Promise<Types.EntryFunctionPayload> {
    const payload = {
      function: target, // `${contractAddress}::${moduleName}::${funcName}`
      type_arguments: typeArguments,
      arguments: params,
    };
    return payload;
  }

  async generateTransaction(
    sender: HexString,
    contractAddress: string,
    moduleName: string,
    funcName: string,
    typeArguments: Types.MoveType[],
    params: any[]
  ): Promise<RawTransaction> {
    const rawTxn = await this.aptosInteractor.currentClient.generateTransaction(
      sender,
      {
        function: `${contractAddress}::${moduleName}::${funcName}`,
        type_arguments: typeArguments,
        arguments: params,
      }
    );
    return rawTxn;
  }

  async waitForTransaction(txnHash: string) {
    return this.aptosInteractor.waitForTransaction(txnHash);
  }

  async signAndSendTxn(
    tx: RawTransaction,
    derivePathParams?: DerivePathParams
  ) {
    const sender = this.getSigner(derivePathParams);
    return this.aptosInteractor.signAndSubmitTransaction(sender, tx);
  }

  async getEntity(
    schemaName: string,
    entityId?: string
  ): Promise<any[] | undefined> {
    const schemaModuleName = `${schemaName}_schema`;
    let params = [];
    if (entityId !== undefined) {
      params.push(entityId);
    }

    const result = await this.query[schemaModuleName].get(undefined, params);
    return result;
  }

  async containEntity(
    schemaName: string,
    entityId?: string
  ): Promise<boolean | undefined> {
    const schemaModuleName = `${schemaName}_schema`;
    let params = [];
    if (entityId !== undefined) {
      params.push(entityId);
    }

    const result = await this.query[schemaModuleName].contains(
      undefined,
      params
    );
    return result[0] as boolean;
  }
}
