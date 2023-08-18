import { SuiMoveNormalizedModules, TransactionBlock } from "@mysten/sui.js";
import type { ContractFactoryParams, SuiMoveMoudleValueType } from './types';

export class SuiContractFactory {
  public packageId: string;
  public metadata: SuiMoveNormalizedModules | undefined;
  public epsId: string;
  public componentsId: string;

  /**
   * Support the following ways to init the SuiToolkit:
   * 1. mnemonics
   * 2. secretKey (base64 or hex)
   * If none of them is provided, will generate a random mnemonics with 24 words.
   *
   * @param mnemonics, 12 or 24 mnemonics words, separated by space
   * @param secretKey, base64 or hex string, when mnemonics is provided, secretKey will be ignored
   */
  constructor({ packageId, metadata }: ContractFactoryParams = {}) {
    // If the mnemonics or secretKey is provided, use it
    // Otherwise, generate a random mnemonics with 24 words
    this.packageId = packageId || '';
    this.metadata = metadata || undefined;
    this.epsId = "0xf2196f638c3174e18c0e31aa630a02fd516c2c5deec1ded72c0fea864c9f091a"
    this.componentsId = "0x3bc407eb543149e42846ade59ac2a3c901584af4339dc1ecd0affd090529545f"
  }

  getFuncByModuleName(moduleName: string) {
    Object.values(this.metadata as SuiMoveNormalizedModules).forEach(value => {
      let data = value as SuiMoveMoudleValueType;
      console.log(`moudle name: ${data.name}`)
      // console.log(data.exposedFunctions)
      Object.entries(data.exposedFunctions).forEach(([key, value]) => {
          console.log(`\tfunc name: ${key}`)
          Object.values(value.parameters).forEach(values => {
              // console.log(values)
          })
      });
    });
  }

  getAllFunc() {
    Object.values(this.metadata as SuiMoveNormalizedModules).forEach(value => {
      let data = value as SuiMoveMoudleValueType;
      console.log(`moudle name: ${data.name}`)
      // console.log(data.exposedFunctions)
      Object.entries(data.exposedFunctions).forEach(([key, value]) => {
          console.log(`\tfunc name: ${key}`)
          console.log(`\t\t${value.parameters.length}`);
          Object.values(value.parameters).forEach(values => {
              // console.log(values)
              console.log(`\t\targs: ${values}`)
          })
      });
    });
  }

  getAllModule() {
    Object.values(this.metadata as SuiMoveNormalizedModules).forEach((value, index) => {
      let data = value as SuiMoveMoudleValueType;
      console.log(`${index}. ${data.name}`)
    });
  }
  async worldCall() {
    
  }

  // async call(counter: any,derivePathParams?: DerivePathParams) {
  //   const tx = new TransactionBlock();
  //   tx.moveCall({
  //     target: `${this.componentsId}::birth_time::get_birth_time`,
  //     arguments: [
  //       // txb.pure(manager),
  //       tx.pure(counter),
  //     ],
  //   })
  //   return this.signAndSendTxn(tx);
  // }

}
