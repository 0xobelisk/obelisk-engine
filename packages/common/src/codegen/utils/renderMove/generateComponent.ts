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
    getStructInitValue, getTypesCode,
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

${renderKeyName(value)}
\tstruct CompMetadata has store {
\t\tid: address,
\t\tname: String,
\t\ttypes: vector<String>,
\t\tentities: vector<address>,
\t\tdata: Table<address, vector<u8>>
\t}

\tpublic fun new(ctx: &mut TxContext): CompMetadata {
\t\tlet component = CompMetadata {
\t\t\tid: id(),
\t\t\tname: name(),
\t\t\ttypes: types(),
\t\t\tentities: vector::empty<address>(),
\t\t\tdata: table::new<address, vector<u8>>(ctx)
\t\t};
\t\tcomponent
\t}

\tpublic fun id(): address {
\t\tentity_key::from_bytes(NAME)
\t}

\tpublic fun name(): String {
\t\tstring(NAME)
\t}

\tpublic fun types(): vector<String> {
\t\t${getTypesCode(value)}
\t}

\tpublic fun entities(world: &World): vector<address> {
\t\tlet component = world::get_comp<CompMetadata>(world, id());
\t\tcomponent.entities
\t}

\tpublic fun register(world: &mut World, ctx: &mut TxContext) {
\t\tworld::add_comp<CompMetadata>(world, NAME, new(ctx));
\t}

\tpublic fun data(world: &World): &Table<address, vector<u8>> {
\t\tlet component = world::get_comp<CompMetadata>(world, id());
\t\t&component.data
\t}

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
    use sui::tx_context::TxContext;
    use sui::table::{Self, Table};
    use ${config.name}::entity_key;
    use ${config.name}::world::{Self, World};
  
    // Systems
${getFriendSystem(config.name, config.systems)}

\tconst NAME: vector<u8> = b"${componentName}";

${renderKeyName(value)}
\tstruct CompMetadata has store {
\t\tid: address,
\t\tname: String,
\t\ttypes: vector<String>,
\t\tentities: vector<address>,
\t\tdata: Table<address, vector<u8>>
\t}

\tpublic fun new(ctx: &mut TxContext): CompMetadata {
\t\tlet component = CompMetadata {
\t\t\tid: id(),
\t\t\tname: name(),
\t\t\ttypes: types(),
\t\t\tentities: vector::empty<address>(),
\t\t\tdata: table::new<address, vector<u8>>(ctx)
\t\t};
\t\ttable::add(&mut component.data, id(), encode(${getStructInitValue(
        value.init
      ).join(", ")}));
\t\tcomponent
\t}

\tpublic fun id(): address {
\t\tentity_key::from_bytes(NAME)
\t}

\tpublic fun name(): String {
\t\tstring(NAME)
\t}

\tpublic fun types(): vector<String> {
\t\t${getTypesCode(value.type)}
\t}

\tpublic fun entities(world: &World): vector<address> {
\t\tlet component = world::get_comp<CompMetadata>(world, id());
\t\tcomponent.entities
\t}

\tpublic fun register(world: &mut World, ctx: &mut TxContext) {
\t\tworld::add_comp<CompMetadata>(world, NAME, new(ctx));
\t}

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
