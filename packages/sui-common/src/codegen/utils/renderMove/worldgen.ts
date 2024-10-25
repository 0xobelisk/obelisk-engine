import { SchemaType, ObeliskConfig } from "../../types";
import { rmdirSync, existsSync } from "fs";
import { deleteFolderRecursive } from "./common";
import { generateSystem } from "./generateSystem";
import { generateToml } from "./generateToml";
import {generateSchemaData, generateSchemaStructure} from "./generateSchema";
import {generateDeployHook, generateMigrate} from "./generateScript";
import {generateDappKey} from "./generateDappKey";

export async function worldgen(config: ObeliskConfig, srcPrefix?: string) {
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
  }

  generateSystem(config, path);
  generateDeployHook(config, path);

  await generateSchemaData(config.name, config.schemas, path);
  await generateSchemaStructure(config.name, config.schemas, path);
  await generateDappKey(config, path);
}
