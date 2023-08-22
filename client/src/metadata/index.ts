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
  const folderPath = "./metadata"
    fs.access(folderPath, (error) => {
      if (error) {
        fs.mkdir(folderPath, (mkdirError) => {
          if (mkdirError) {
            console.error('Create folder error:', mkdirError);
          }
        });
      }
    });
    const jsonFileName = `${folderPath}/${packageId}.json`;

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
            console.error('write data error:', err);
          }
        });
        return jsonData as SuiMoveNormalizedModules;
      } else {
        console.error('please set your package id.');
      }
    }
  }