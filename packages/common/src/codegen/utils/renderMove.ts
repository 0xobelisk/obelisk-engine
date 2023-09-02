import { formatAndWriteMove } from './formatAndWrite';
import { ComponentMapType, ObeliskConfig } from '../types';
import { rmdirSync, existsSync } from "fs";
import * as fs from 'fs';

export function capitalizeFirstLetter(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function renderMapEnterKeyWithType(values: ComponentMapType): string[] {
  const combinedStrings = Object.entries(values).map(([key, type]) => `\t\t${key}: ${type}`);
  return combinedStrings
}

export function renderMapKey(values: ComponentMapType, prefixArgs: string): string[] {
  const combinedStrings = Object.entries(values).map(([key, _]) => `${prefixArgs}${key}`);
  return combinedStrings
}

export function renderMapType(values: ComponentMapType): string[] {
  const combinedStrings = Object.entries(values).map(([_, type]) => `${type}`);
  return combinedStrings
}

export function renderMapKeyWithType(values: ComponentMapType): string[] {
  const combinedStrings = Object.entries(values).map(([key, type]) => `${key}: ${type}`);
  return combinedStrings
}

export function renderDataMapKey(values: ComponentMapType, prefixArgs: string): string[] {
  const combinedStrings = Object.entries(values).map(([key, _]) => `${prefixArgs}data.${key} = ${key};`);
  return combinedStrings
}

function renderStructMap(componentName: string, values: ComponentMapType): string {
    return `\tstruct ${capitalizeFirstLetter(componentName)}Data has drop, store {
${renderMapEnterKeyWithType(values).join(',\n')}
\t}

\tpublic fun new(${renderMapKeyWithType(values).join(', ')}): ${capitalizeFirstLetter(componentName)}Data {
\t\t${capitalizeFirstLetter(componentName)}Data {
${renderMapKey(values, "\t\t\t").join(", \n")}
\t\t}
\t}

\tpublic fun register(world: &mut World, ctx: &mut TxContext) {
\t\tworld::add_component_in_world<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(
\t\t\tworld,
\t\t\tCOMPONENT_NAME,
\t\t\ttable::new<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(ctx)
\t\t);
\t}
`
}

function renderAddFunc(componentName: string, values: ComponentMapType): string {
  return `\tpublic(friend) fun add(world : &mut World, key: vector<u8>, ${renderMapKeyWithType(values).join(", ")}) {
\t\tlet component = world::get_mut_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
\t\ttable::add(component, key, new(${renderMapKey(values, "").join(", ")}));
\t\tworld::add_component_in_entity(world, key, COMPONENT_NAME)
\t}
`
}

function renderRemoveFunc(componentName: string): string {
  return `\tpublic(friend) fun remove(world : &mut World, key: vector<u8>) {
\t\tlet component = world::get_mut_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
\t\ttable::remove(component, key);
\t\tworld::remove_component_from_entity(world, key)
\t}
`
}

function renderUpdateTotalFunc(componentName: string, values: ComponentMapType): string {
  return `\tpublic(friend) fun update(world : &mut World, key: vector<u8>, ${renderMapKeyWithType(values).join(", ")}) {
\t\tlet component = world::get_mut_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
\t\tlet data =  table::borrow_mut<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(component, key);
${renderDataMapKey(values, "\t\t").join("\n")}
\t}
`
}

function renderAllUpdateFunc(componentName: string, values: ComponentMapType): string {
  const combinedStrings = Object.entries(values).map(([key, type]) => `\tpublic(friend) fun update_${key}(world : &mut World, key: vector<u8>, ${key}: ${type}) {
\t\tlet component = world::get_mut_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
\t\ttable::borrow_mut<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(component, key).${key} = ${key};
\t}
`);
  // return combinedStrings
  const result = combinedStrings.join("\n");
  return result
}

function renderGetTotalFunc(componentName: string, values: ComponentMapType): string {
  return `\tpublic fun get(world : &World, key: vector<u8>) : (${renderMapType(values).join(", ")}) {
\t\tlet component = world::get_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
\t\tlet data = table::borrow<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(component, key);
\t\t(
${renderDataMapKey(values, "\t\t\t").join("\n")}
\t\t)
\t}
`
}

function renderAllGetFunc(componentName: string, values: ComponentMapType): string {
  const combinedStrings = Object.entries(values).map(([key, type]) => `\tpublic fun get_${key}(world : &World, key: vector<u8>) : ${type} {
\t\tlet component = world::get_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
\t\ttable::borrow<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(component, key).${key}
\t}
`);
  // return combinedStrings
  const result = combinedStrings.join("\n");
  return result
}

function renderContainFunc(componentName: string): string {
  return `\tpublic fun contains(world : &World, key: vector<u8>): bool {
\t\tlet component = world::get_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
\t\ttable::contains<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(component, key)
\t}`
}

export function generateComponentMove(config: ObeliskConfig, srcPrefix: string) {
  Object.entries(config.components).forEach(([componentName, value]) => {
    let code = `module ${config.project_name}::${componentName}_component {
\tuse sui::tx_context::TxContext;
\tuse sui::table::{Self, Table};
\tuse ${config.project_name}::world::{Self , World};
  
\t// Systems
${config.systems.map((data) => `\tfriend ${config.project_name}::${data};`).join("\n")}

\tconst COMPONENT_NAME: vector<u8> = b"${capitalizeFirstLetter(componentName)} Component";

${renderStructMap(componentName, value)}
${renderAddFunc(componentName, value)}
${renderRemoveFunc(componentName)}
${renderUpdateTotalFunc(componentName, value)}
${renderAllUpdateFunc(componentName, value)}
${renderGetTotalFunc(componentName, value)}
${renderAllGetFunc(componentName, value)}
${renderContainFunc(componentName)}
}
`
    formatAndWriteMove(code, `${srcPrefix}/contracts/${config.project_name}/sources/codegen/components/${componentName}.move`, "formatAndWriteMove");
  })
}

export function renderImportComponent(projectName: string, values: Record<string, ComponentMapType>): string[] {
  const combinedStrings = Object.entries(values).map(([key, _]) => `\tfriend ${projectName}::${key}_component;`);
  return combinedStrings
}

export function renderImportSystem(projectName: string, values: Record<string, ComponentMapType>): string[] {
  const combinedStrings = Object.entries(values).map(([key, _]) => `\tfriend ${projectName}::${key}_system;`);
  return combinedStrings
}

export function generateEpsMove(config: ObeliskConfig, srcPrefix: string) {
  let code = `module ${config.project_name}::world {
    use sui::tx_context::TxContext;
    use sui::hash::keccak256;
    use sui::bag::{ Self, Bag };
    use sui::object::{ Self, UID };
    use sui::table::Table;
    use sui::table;
    use std::vector;

    // init
    friend ${config.project_name}::init;

    // components
${renderImportComponent(config.project_name, config.components).join("\n")}

    // systems
${renderImportSystem(config.project_name, config.components).join("\n")}


    struct World has key, store{
        id: UID,
        /// Entities of the world
        /// entity_key <=> vector<component_name>
        entities: Table<vector<u8>, vector<vector<u8>>>,
        /// Components of the world
        /// K256(component_name) <=> Table<entity_key,T>
        components: Bag,
        /// Configs of the world
        /// K256(config_name) <=> T
        configs: Bag
    }

    public fun create_world(ctx: &mut TxContext): World {
        World {
            id: object::new(ctx),
            entities: table::new<vector<u8>, vector<vector<u8>>>(ctx),
            components: bag::new(ctx),
            configs: bag::new(ctx)
        }
    }

    public fun get_component<T : store>(world: &World, component_name: vector<u8>): &T {
        let component_id = keccak256(&component_name);
        bag::borrow<vector<u8>, T>(&world.components, component_id)
    }

    public(friend) fun get_mut_component<T : store>(world: &mut World, component_name: vector<u8>): &mut T {
        let component_id = keccak256(&component_name);
        bag::borrow_mut<vector<u8>, T>(&mut world.components, component_id)
    }

    public(friend) fun add_component_in_world<T : store>(world: &mut World, component_name: vector<u8>, storage: T){
        let component_id = keccak256(&component_name);
        bag::add<vector<u8>,T>(&mut world.components, component_id, storage);
    }

    public(friend) fun remove_component_from_world<T : store>(world: &mut World, component_name: vector<u8>): T {
        let component_id = keccak256(&component_name);
        bag::remove<vector<u8>,T>(&mut world.components, component_id)
    }

    public fun world_contains_component(world: &mut World, component_name: vector<u8>): bool {
        let component_id = keccak256(&component_name);
        bag::contains(&mut world.components, component_id)
    }

    public fun get_config<T : store>(world: &World, config_name: vector<u8>): &T {
        let config_id = keccak256(&config_name);
        bag::borrow<vector<u8>, T>(&world.components, config_id)
    }

    public(friend) fun get_mut_config<T : store>(world: &mut World, config_name: vector<u8>): &mut T {
        let config_id = keccak256(&config_name);
        bag::borrow_mut<vector<u8>, T>(&mut world.configs, config_id)
    }

    public(friend) fun add_config_in_world<T : store>(world: &mut World, config_name: vector<u8>, config: T){
        let config_id = keccak256(&config_name);
        bag::add<vector<u8>,T>(&mut world.components, config_id, config);
    }

    public(friend) fun remove_config_from_world<T : store>(world: &mut World, config_name: vector<u8>): T {
        let config_id = keccak256(&config_name);
        bag::remove<vector<u8>,T>(&mut world.components, config_id)
    }

    public fun world_contains_config(world: &mut World, config_name: vector<u8>): bool {
        let config_id = keccak256(&config_name);
        bag::contains(&mut world.components, config_id)
    }

    public fun get_entities(world: &World): &Table<vector<u8>, vector<vector<u8>>> {
        &world.entities
    }

    public(friend) fun get_mut_entities(world: &mut World): &mut Table<vector<u8>, vector<vector<u8>>> {
        &mut world.entities
    }

    public(friend) fun add_component_in_entity(world: &mut World, entity_key: vector<u8>, component_name: vector<u8>) {
        if(table::contains(&world.entities, entity_key)) {
            let components = table::borrow_mut(&mut world.entities, entity_key);
            vector::push_back(components, component_name);
        } else {
            let components = vector::empty<vector<u8>>();
            vector::push_back(&mut components, component_name);
            table::add(&mut world.entities, entity_key, components);
        }
    }

    public(friend) fun remove_component_from_entity(world: &mut World, entity_key: vector<u8>) {
        let components = table::borrow_mut(&mut world.entities, entity_key);
        let (_, index) = vector::index_of(components, &entity_key);
        vector::remove(components, index);
    }

    public fun entity_contains_component(world: &World, entity_key: vector<u8>): bool {
        let components = table::borrow(&world.entities, entity_key);
        vector::contains(components, &entity_key)
    }

    public fun get_entity_all_components(world: &World, entity_key: vector<u8>): vector<vector<u8>> {
        *table::borrow(&world.entities, entity_key)
    }
}
 `
  formatAndWriteMove(code, `${srcPrefix}/contracts/${config.project_name}/sources/codegen/eps/world.move`, "formatAndWriteMove");
}

export function generateMoveToml(config: ObeliskConfig, srcPrefix: string) {
  let code = `[package]
  name = "${config.project_name}"
  version = "0.0.1"
  
  [dependencies]
  Sui = { git = "https://github.com/MystenLabs/sui.git", subdir = "crates/sui-framework/packages/sui-framework", rev = "testnet-v1.8.0" }
  
  [addresses]
  sui =  "0x2"
  ${config.project_name} = "0x0"
`
  formatAndWriteMove(code, `${srcPrefix}/contracts/${config.project_name}/Move.toml`, "formatAndWriteMove");
}


export function generateSystemMove(config: ObeliskConfig, srcPrefix: string) {
  config.systems.map((systemName) => {
    let code = `module ${config.project_name}::${systemName} {
\tuse ${config.project_name}::world::{ Self, World };
\tuse sui::tx_context::TxContext;
\tuse sui::table::Table;
\tuse sui::table;

}
`
    formatAndWriteMove(code, `${srcPrefix}/contracts/${config.project_name}/sources/system/${systemName}.move`, "formatAndWriteMove");
  })
}

function deleteFolderRecursive(path: string) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file) => {
      const curPath = `${path}/${file}`;
      if (fs.lstatSync(curPath).isDirectory()) {
        // 递归删除子文件夹
        deleteFolderRecursive(curPath);
      } else {
        // 删除文件
        fs.unlinkSync(curPath);
      }
    });
    // 删除空文件夹
    fs.rmdirSync(path);
  }
}

export function worldgen(config: ObeliskConfig, srcPrefix?: string) {
  let path = "";
  if (srcPrefix === undefined) {
    path = process.cwd()
  } else {
    path = srcPrefix;
  }

  if (existsSync(`${path}/contracts/${config.project_name}`)) {
    deleteFolderRecursive(`${path}/contracts/${config.project_name}`)
  }
  generateComponentMove(config, path);
  generateEpsMove(config, path);
  generateMoveToml(config, path);
  generateSystemMove(config, path);
}
