import { SchemaMapType, ObeliskConfig } from "../../types";
import { rmdirSync, existsSync } from "fs";
import { deleteFolderRecursive } from "./common";
import { generateSystem } from "./generateSystem";
import { generateToml } from "./generateToml";
import { generateEntityKey } from "./generateEntityKey";
import { generateInit } from "./generateInit";
import { generateEps } from "./generateEps";
import { generateSchema } from "./generateSchema";
import {generateDeployHook, generateMigrate} from "./generateScript";
import {generateAppKey} from "./generateAppKey";

export function worldgen(config: ObeliskConfig, srcPrefix?: string) {
  let path = "";
  if (srcPrefix === undefined) {
    path = process.cwd();
  } else {
    path = srcPrefix;
  }

  if (existsSync(`${path}/contracts/${config.name}`)) {
    deleteFolderRecursive(`${path}/contracts/${config.name}/sources/codegen`);
  } else {
    generateToml(config, path);
    generateEntityKey(config, path);
  }

  generateSystem(config, path);
  generateDeployHook(config, path);
  generateMigrate(config, path);

  // generate codegen
  generateSchema(config, path);
  generateInit(config, path);
  generateAppKey(config, path);
}
