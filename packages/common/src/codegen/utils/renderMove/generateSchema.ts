import {ObeliskConfig, RenderSchemaOptions} from "../../types";
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
  getStructAttrsWithType,
  getStructAttrs,
  renderRegisterFuncWithInit,
  renderSingleSetFunc,
  renderSingleSetAttrsFunc, renderSingleGetAllFunc, renderSingleGetAttrsFunc,
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
      projectName: config.name,
      systems: config.systems,
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
    let code: string;
    if (option.ephemeral) {
      code =  renderEphemeralSchema(option)
    } else if(option.singleton) {
      code =  renderSingleSchema(option)
    } else {
      code = renderSchema(option)
    }
    formatAndWriteMove(
      code,
      `${srcPrefix}/contracts/${option.projectName}/sources/codegen/schemas/${option.schemaName}.move`,
      "formatAndWriteMove"
    );
  }
}

function renderEphemeralSchema(option: RenderSchemaOptions): string {
  return `module ${option.projectName}::${option.schemaName}_schema {
    use std::option::none;
    use ${option.projectName}::events;
    
    const SCHEMA_ID: vector<u8> = b"${option.schemaName}";
    
${renderKeyName(option.resourceData)}
${renderStruct(option.structName, option.resourceData)}  
\tpublic fun emit_${option.schemaName}(${getStructAttrsWithType(option.resourceData, " ")}) {
\t\tevents::emit_set(SCHEMA_ID, none(), ${option.structName} { ${getStructAttrs(option.resourceData, " ")} })
\t}
}`
}

function renderSingleSchema(option: RenderSchemaOptions): string {
return `module ${option.projectName}::${option.schemaName}_schema {
    use std::option::none;
    use sui::tx_context::TxContext;
    use ${option.projectName}::events;
    use ${option.projectName}::world::{Self, World};
  
    // Systems
${getFriendSystem(option.projectName, option.systems)}

\tconst SCHEMA_ID: vector<u8> = b"${option.schemaName}";

${renderKeyName(option.resourceData)}
${renderStruct(option.structName, option.resourceData)}
${renderNewStructFunc(option.structName, option.resourceData)}
${renderRegisterFuncWithInit(option.structName, option.init)}

${renderSingleSetFunc(option.structName, option.resourceData)}

${renderSingleSetAttrsFunc(option.structName, option.resourceData)}
${renderSingleGetAllFunc(option.structName, option.resourceData)}
${renderSingleGetAttrsFunc(option.structName, option.resourceData)}
}
`
}

function renderSchema(option: RenderSchemaOptions) {
  return `module ${option.projectName}::${option.schemaName}_schema {
    use std::option::some;
    use sui::tx_context::TxContext;
    use sui::table::{Self, Table};
    use ${option.projectName}::events;
    use ${option.projectName}::world::{Self, World};

    // Systems
${getFriendSystem(option.projectName, option.systems)}

\t/// Entity does not exist
\tconst EEntityDoesNotExist: u64 = 0;

\tconst SCHEMA_ID: vector<u8> = b"${option.schemaName}";

${renderKeyName(option.resourceData)}
${renderStruct(option.structName, option.resourceData)}
${renderNewStructFunc(option.structName, option.resourceData)}
${renderRegisterFunc(option.structName)}

${renderSetFunc(option.structName, option.resourceData)}
${renderSetAttrsFunc(option.structName, option.resourceData)}
${renderGetAllFunc(option.structName, option.resourceData)}
${renderGetAttrsFunc(option.structName, option.resourceData)}
${renderRemoveFunc(option.structName)}
${renderContainFunc(option.structName)}
}
`
}
