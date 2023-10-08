import { ObeliskConfig } from "../../types";
import { formatAndWriteMove } from "../formatAndWrite";
import {
  getFriendSystem,
  renderKeyName,
  renderSetFunc,
  renderContainFunc,
  renderRemoveFunc,
  renderStruct,
  renderNewStructFunc,
  convertToCamelCase,
  renderSetAttrsFunc,
  renderRegisterFunc,
  renderGetAllFunc,
  renderGetAttrsFunc,
  renderEmit,
} from "./common";

export function getRenderSchemaOptions(config: ObeliskConfig) {
  const options: any = [];
  for (const schemaName of Object.keys(config.schemas)) {
    const schemaData = config.schemas[schemaName];
    let resourceData: Record<string, string> | string;
    let init: any;
    let ephemeral = false;
    let singleton = false;
    if (typeof schemaData === "string") {
      resourceData = schemaData;
    } else {
      resourceData = schemaData.valueSchema;
      init = schemaData.init;
      ephemeral =
        schemaData.ephemeral !== undefined ? schemaData.ephemeral : false;
      singleton =
        schemaData.singleton !== undefined ? schemaData.singleton : false;
    }
    options.push({
      schemaName: schemaName,
      structName: convertToCamelCase(schemaName),
      ephemeral,
      singleton,
      resourceData,
      structAttrs: renderKeyName(resourceData),
      structTypes: renderStruct(convertToCamelCase(schemaName), resourceData),
      init,
    });
  }
  return options;
}

export function generateSchema(config: ObeliskConfig, srcPrefix: string) {
  const options = getRenderSchemaOptions(config);
  for (const option of options) {
    let code = option.ephemeral
      ? `module ${config.name}::${option.schemaName}_schema {
    use sui::table::{Self, Table};
    use std::ascii::{String, string};
    use sui::tx_context::TxContext;
    use ${config.name}::events;
    use ${config.name}::world::{Self, World};
    
    const NAME: vector<u8> = b"${option.schemaName}";
    
${renderKeyName(option.resourceData)}
${renderStruct(option.structName, option.resourceData)}  
\tstruct SchemaMetadata has store {
\t\tname: String,
\t\tdata: Table<address, ${option.structName}>
\t}

${renderRegisterFunc(option.structName, false, option.init)}

${renderEmit(option.schemaName, option.structName, option.resourceData)}
}`
      : `module ${config.name}::${option.schemaName}_schema {
    use std::ascii::{String, string};
    use sui::tx_context::TxContext;
    use sui::table::{Self, Table};
    use ${config.name}::entity_key;
    use ${config.name}::events;
    use ${config.name}::world::{Self, World};
  
    // Systems
${getFriendSystem(config.name, config.systems)}

\t/// Entity does not exist
\tconst EEntityDoesNotExist: u64 = 0;

\tconst NAME: vector<u8> = b"${option.schemaName}";

\tpublic fun id(): address {
\t\tentity_key::from_bytes(NAME)
\t}

${renderKeyName(option.resourceData)}
${renderStruct(option.structName, option.resourceData)}
${renderNewStructFunc(option.structName, option.resourceData)}
\tstruct SchemaMetadata has store {
\t\tname: String,
\t\tdata: Table<address, ${option.structName}>
\t}

${renderRegisterFunc(option.structName, option.singleton, option.init)}

${renderSetFunc(option.structName, option.resourceData, option.singleton)}
${renderSetAttrsFunc(option.structName, option.resourceData, option.singleton)}
${renderGetAllFunc(option.structName, option.resourceData, option.singleton)}
${renderGetAttrsFunc(option.structName, option.resourceData, option.singleton)}
${option.singleton ? "" : renderRemoveFunc(option.structName)}
${option.singleton ? "" : renderContainFunc(option.structName)}
}
`;
    formatAndWriteMove(
      code,
      `${srcPrefix}/contracts/${config.name}/sources/codegen/schemas/${option.schemaName}.move`,
      "formatAndWriteMove"
    );
  }
}
