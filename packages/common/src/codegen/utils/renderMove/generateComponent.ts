import {BaseType, ComponentMapType, ObeliskConfig, RenderComponentOptions, ValueSchemaType} from "../../types";
import { formatAndWriteMove } from "../formatAndWrite";
import {
    getFriendSystem,
    renderKeyName,
    renderSetFunc,
    renderContainFunc,
    renderRemoveFunc,
    renderStruct,
    renderNewStructFunc,
    convertToCamelCase, renderSetAttrsFunc, renderRegisterFunc, renderGetAllFunc, renderGetAttrsFunc, renderEmit,
} from "./common";


export function getRenderComponentOptions(config: ObeliskConfig) {
    const options: any = [];
    for (const componentName of Object.keys(config.components)) {
        const componentData = config.components[componentName];
        let resourceData: Record<string, string> | string;
        let init: any;
        let ephemeral = false;
        let singleton = false;
        if ( typeof componentData === "string") {
            resourceData = componentData;
        } else {
            resourceData = componentData.valueSchema;
            init = componentData.init;
            ephemeral = componentData.ephemeral !== undefined ? componentData.ephemeral : false;
            singleton = componentData.singleton !== undefined ? componentData.singleton : false;
        }
            options.push({
                componentName: componentName,
                structName: convertToCamelCase(componentName),
                ephemeral,
                singleton,
                resourceData,
                structAttrs: renderKeyName(resourceData),
                structTypes: renderStruct(convertToCamelCase(componentName), resourceData),
                init
            });
        }
    return options;
}

export function generateComponent(config: ObeliskConfig, srcPrefix: string) {
    const options = getRenderComponentOptions(config)
    for (const option of options) {
    let code = option.ephemeral
        ? `module ${config.name}::${option.componentName}_comp {
    use sui::event;
    use sui::table::{Self, Table};
    use ${config.name}::world::{Self, World};
    use std::ascii::{String, string};
    use sui::tx_context::TxContext;
    
    const NAME: vector<u8> = b"${option.componentName}";
    
${renderKeyName(option.resourceData)}
${renderStruct(option.structName, option.resourceData)}
            
\tstruct CompMetadata has store {
\t\tname: String,
\t\tdata: Table<address, ${option.structName}>
\t}

${renderRegisterFunc(option.structName, false, option.init)}

${renderEmit(option.componentName, option.structName, option.resourceData)}
}`

        : `module ${config.name}::${option.componentName}_comp {
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

\tconst NAME: vector<u8> = b"${option.componentName}";

\tpublic fun id(): address {
\t\tentity_key::from_bytes(NAME)
\t}

${renderKeyName(option.resourceData)}
${renderStruct(option.structName, option.resourceData)}
${renderNewStructFunc(option.structName, option.resourceData)}

\tstruct CompMetadata has store {
\t\tname: String,
\t\tdata: Table<address, ${option.structName}>
\t}

${renderRegisterFunc(option.structName, option.singleton, option.init)}

${renderSetFunc(option.structName,option.resourceData, option.singleton)}
${renderSetAttrsFunc(option.structName,option.resourceData,option.singleton)}

${renderGetAllFunc(option.structName, option.resourceData, option.singleton)}
${renderGetAttrsFunc(option.structName, option.resourceData, option.singleton)}

${ option.singleton ? "" : renderRemoveFunc(option.structName)}
${ option.singleton ? "" : renderContainFunc(option.structName)}
}
`;
    formatAndWriteMove(
      code,
      `${srcPrefix}/contracts/${config.name}/sources/codegen/components/${option.componentName}.move`,
      "formatAndWriteMove"
    );
  }
}
