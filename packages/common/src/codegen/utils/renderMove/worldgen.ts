import { ComponentMapType, ObeliskConfig } from '../../types';
import { rmdirSync, existsSync } from "fs";
import { deleteFolderRecursive } from './common';
import { generateSystem } from './generateSystem';
import { generateToml } from './generateToml';
import { generateEntityKey } from './generateEntityKey';
import { generateInit } from './generateInit';
import { generateEps } from './generateEps';
import { generateComponent } from './generateComponent';

export function worldgen(config: ObeliskConfig, srcPrefix?: string) {
  let path = "";
  if (srcPrefix === undefined) {
    path = process.cwd()
  } else {
    path = srcPrefix;
  }

  if (existsSync(`${path}/contracts/${config.project_name}`)) {
    deleteFolderRecursive(`${path}/contracts/${config.project_name}/sources/codegen`)
  } else {
    generateSystem(config, path);
    generateToml(config, path);
    generateEntityKey(config, path);
  }

  // generate codegen
  generateComponent(config, path);
  generateEps(config, path);
  generateInit(config, path);
}