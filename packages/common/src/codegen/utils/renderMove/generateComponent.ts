import { ObeliskConfig } from "../../types";
import { formatAndWriteMove } from "../formatAndWrite";
import {
  capitalizeFirstLetter,
  getFriendSystem,
  renderKeyName,
  renderAddFunc,
  renderContainFunc,
  // renderNewStructFunc,
  renderQueryFunc,
  renderRegisterFunc,
  renderRegisterFuncWithInit,
  renderRemoveFunc,
  // renderSingletonQueryFunc,
  // renderSingletonUpdateFunc,
  renderStruct,
  renderUpdateFunc,
  renderEncodeFunc,
  // renderSigletonEncodeFunc,
  renderDecodeFunc,
  // renderSigletonDecodeFunc,
} from "./common";

export function generateComponent(config: ObeliskConfig, srcPrefix: string) {
  Object.entries(config.components).forEach(([componentName, value]) => {
    let code = `module ${config.name}::${componentName}_comp {
    use std::ascii::{String, string};
    use std::option::some;
    use std::vector;
    use sui::bcs;
    use sui::tx_context::TxContext;
    use sui::table::{Self, Table};
    use ${config.name}::entity_key;
    use ${config.name}::world::{Self, World};
  
    // Systems
${getFriendSystem(config.name, config.systems)}

\tconst NAME: vector<u8> = b"${componentName}";

\tpublic fun id(): address {
\t\tentity_key::from_bytes(NAME)
\t}

${renderKeyName(value)}
${renderStruct(value)}
${renderRegisterFunc()}
${renderAddFunc(value)}
${renderRemoveFunc()}
${renderUpdateFunc(value)}
${renderQueryFunc(value)}
${renderContainFunc()}
${renderEncodeFunc(value)}
${renderDecodeFunc(value)}
}
`;
    formatAndWriteMove(
      code,
      `${srcPrefix}/contracts/${config.name}/sources/codegen/components/${componentName}.move`,
      "formatAndWriteMove"
    );
  });
}

export function generateSingletonComponent(
  config: ObeliskConfig,
  srcPrefix: string
) {
  Object.entries(config.singletonComponents).forEach(
    ([componentName, value]) => {
      let code = `module ${config.name}::${componentName}_comp {
    use std::ascii::{String, string};
    use std::option::none;
    use std::vector;
    use sui::bcs;
    use ${config.name}::entity_key;
    use ${config.name}::world::{Self, World};
  
    // Systems
${getFriendSystem(config.name, config.systems)}

\tconst NAME: vector<u8> = b"${componentName}";

\tpublic fun id(): address {
\t\tentity_key::from_bytes(NAME)
\t}

${renderKeyName(value)}
${renderStruct(value)}
${renderRegisterFuncWithInit(value)}
${renderUpdateFunc(value)}
${renderQueryFunc(value)}
${renderEncodeFunc(value)}
${renderDecodeFunc(value)}
}
`;
      formatAndWriteMove(
        code,
        `${srcPrefix}/contracts/${config.name}/sources/codegen/components/${componentName}.move`,
        "formatAndWriteMove"
      );
    }
  );
}
