import {
  RawSigner,
  TransactionBlock,
  DevInspectResults,
  SuiTransactionBlockResponse, JsonRpcProvider, testnetConnection,
  SuiMoveNormalizedModules, DynamicFieldPage, DynamicFieldName,
} from '@mysten/sui.js';
import { SuiAddress } from "@mysten/sui.js/src/types";
import { SuiRpcProvider } from '../libs/suiRpcProvider';
import { NetworkType } from '../libs/suiRpcProvider/types';
import * as fs from 'fs';

export async function initialize(networkType: NetworkType, packageId: string) {
    const jsonFileName = `metadata/${packageId}.json`;

    const rpcProvider = new SuiRpcProvider({
      networkType,
    });
    try {
      const data = await fs.promises.readFile(jsonFileName, 'utf-8');
      const jsonData = JSON.parse(data);

      return jsonData as SuiMoveNormalizedModules;
    } catch (error) {
      if (packageId !== undefined) {
        const jsonData = await rpcProvider.getNormalizedMoveModulesByPackage(packageId);

        fs.writeFile(jsonFileName, JSON.stringify(jsonData, null, 2), (err) => {
          if (err) {
            console.error('写入文件时出错:', err);
          } else {
            console.log('JSON 数据已保存到文件:', jsonFileName);
          }
        });
        return jsonData as SuiMoveNormalizedModules;
      } else {
        console.error('please set your package id.');
      }
    }
  }