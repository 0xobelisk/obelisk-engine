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
  const combinedStrings = Object.entries(values).map(([key, _]) => `${prefixArgs}data.${key} = ${key}`);
  return combinedStrings
}

export function renderGetDataMapKey(values: ComponentMapType, prefixArgs: string): string[] {
  const combinedStrings = Object.entries(values).map(([key, _]) => `${prefixArgs}data.${key}`);
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
\t\tworld::add_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(
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
\t}
`
}

function renderRemoveFunc(componentName: string): string {
  return `\tpublic(friend) fun remove(world : &mut World, key: vector<u8>) {
\t\tlet component = world::get_mut_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
\t\ttable::remove(component, key);
\t}
`
}

function renderUpdateTotalFunc(componentName: string, values: ComponentMapType): string {
  return `\tpublic(friend) fun update(world : &mut World, key: vector<u8>, ${renderMapKeyWithType(values).join(", ")}) {
\t\tlet component = world::get_mut_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
\t\tlet data =  table::borrow_mut<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(component, key);
${renderDataMapKey(values, "\t\t").join(";\n")}
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
${renderGetDataMapKey(values, "\t\t\t").join(",\n")}
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
  const combinedStrings = Object.entries(values).map(([key, _]) => `\tuse ${projectName}::${key}_component;`);
  return combinedStrings
}

export function renderImportSystem(projectName: string, values: string[]): string[] {
  const combinedStrings = values.map((key) => `\tfriend ${projectName}::${key};`);
  return combinedStrings
}

export function renderRegisterComponent(values: Record<string, ComponentMapType>): string[] {
  const combinedStrings = Object.entries(values).map(([key, _]) => `\t\t${key}_component::register(&mut world, ctx);`);
  return combinedStrings
}

export function generateEpsMove(config: ObeliskConfig, srcPrefix: string) {
  let code = `module ${config.project_name}::world {
    use sui::tx_context::TxContext;
    use sui::hash::keccak256;
    use sui::bag::{ Self, Bag };
    use sui::object::{ Self, UID };

    struct World has key, store{
        id: UID,
        /// Components of the world
        /// K256(component_name) <=> Table<entity_key,T>
        components: Bag,
    }

    public fun create_world(ctx: &mut TxContext): World {
        World {
            id: object::new(ctx),
            components: bag::new(ctx),
        }
    }

    public fun get_component<T : store>(world: &World, component_name: vector<u8>): &T {
        let component_id = keccak256(&component_name);
        bag::borrow<vector<u8>, T>(&world.components, component_id)
    }

    public fun get_mut_component<T : store>(world: &mut World, component_name: vector<u8>): &mut T {
        let component_id = keccak256(&component_name);
        bag::borrow_mut<vector<u8>, T>(&mut world.components, component_id)
    }

    public fun add_component<T : store>(world: &mut World, component_name: vector<u8>, component: T){
        let component_id = keccak256(&component_name);
        bag::add<vector<u8>,T>(&mut world.components, component_id, component);
    }

    public fun contains(world: &mut World, component_name: vector<u8>): bool {
        let component_id = keccak256(&component_name);
        bag::contains(&mut world.components, component_id)
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

}
`
    formatAndWriteMove(code, `${srcPrefix}/contracts/${config.project_name}/sources/system/${systemName}.move`, "formatAndWriteMove");
  })
}

export function generateInitMove(config: ObeliskConfig, srcPrefix: string) {
    let code = `module ${config.project_name}::init {
    use sui::transfer;
    use sui::tx_context::TxContext;
    use withinfinity::world;
${renderImportComponent(config.project_name, config.components).join("\n")}

    fun init(ctx: &mut TxContext) {
        let world = world::create_world(ctx);

        // Add Component
${renderRegisterComponent(config.components).join("\n")}

        transfer::public_share_object(world);
    }

    #[test_only]
    public fun init_world_for_testing(ctx: &mut TxContext){
        init(ctx)
    }
}
`
  formatAndWriteMove(code, `${srcPrefix}/contracts/${config.project_name}/sources/codegen/init.move`, "formatAndWriteMove");
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
    deleteFolderRecursive(`${path}/contracts/${config.project_name}/sources/codegen`)
  } else {
    generateSystemMove(config, path);
    generateMoveToml(config, path);
  }

  // generate codegen
  generateComponentMove(config, path);
  generateEpsMove(config, path);
  generateInitMove(config, path);
}
