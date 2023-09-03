import { ComponentMapType } from '../../types';
import fs from 'fs';

export function deleteFolderRecursive(path: string) {
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

export function capitalizeFirstLetter(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function getUseComponent(projectName: string, values: Record<string, ComponentMapType>): string[] {
  return Object.entries(values).map(([key, _]) => `\tuse ${projectName}::${key}_component;`)
}

export function getRegisterComponent(values: Record<string, ComponentMapType>): string[] {
  return Object.entries(values).map(([key, _]) => `\t\t${key}_component::register(&mut world, ctx);`)
}

export function getFriendSystem(projectName: string, values: string[]): string {
  return values.map((key) => `friend ${projectName}::${key};`).join("\n")
}

export function getStructAttrs(values: ComponentMapType, prefixArgs: string): string[] {
  return typeof values === 'string'
    ? [`${prefixArgs}value`]
    : Object.entries(values).map(([key, _]) => `${prefixArgs}${key}`)
}

export function getStructTypes(values: ComponentMapType): string {
  return typeof values === 'string'
    ? values
    : `(${Object.entries(values).map(([_, type]) => `${type}`)})`
}


/// Returns Attributes and types of the struct. [ name: string, age: u64 ]
export function getStructAttrsWithType(values: ComponentMapType): string[] {
  return typeof values === 'string'
    ? [`\t\tvalue: ${values}`]
    : Object.entries(values).map(([key, type]) => `\t\t${key}: ${type}`)
}

export function getStructAttrsUpdate(values: ComponentMapType, prefixArgs: string): string[] {
  return typeof values === 'string'
    ? [`${prefixArgs}data.value = value`]
    : Object.entries(values).map(([key, _]) => `${prefixArgs}data.${key} = ${key}`)
}

export function getStructAttrsQuery(values: ComponentMapType, prefixArgs: string): string[] {
  return typeof values === 'string'
    ? [`${prefixArgs}data.value`]
    : Object.entries(values).map(([key, _]) => `${prefixArgs}data.${key}`)
}

export function renderStruct(componentName: string, values: ComponentMapType): string {
  return `\tstruct ${capitalizeFirstLetter(componentName)}Data has drop, store {
    ${getStructAttrsWithType(values).join(',\n')}
\t}`
}

export function renderNewStructFunc(componentName: string, values: ComponentMapType): string {
  return `\tpublic fun new(${getStructAttrsWithType(values).join(', ')}): ${capitalizeFirstLetter(componentName)}Data {
\t\t${capitalizeFirstLetter(componentName)}Data {
${getStructAttrs(values, "\t\t\t").join(", \n")}
\t\t}
\t}`
}

export function renderRegisterFunc(componentName: string, values: ComponentMapType): string {
  return `\tpublic fun register(world: &mut World, ctx: &mut TxContext) {
  \t\tworld::add_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(
\t\t\tworld,
\t\t\tCOMPONENT_NAME,
\t\t\ttable::new<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(ctx)
\t\t);
\t}
  `
}

export function renderAddFunc(componentName: string, values: ComponentMapType): string {
  return `\tpublic(friend) fun add(world : &mut World, key: vector<u8>, ${getStructAttrsWithType(values).join(", ")}) {
\t\tlet component = world::get_mut_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
\t\ttable::add(component, key, new(${getStructAttrs(values, "").join(", ")}));
\t}
`
}

export function renderRemoveFunc(componentName: string): string {
  return `\tpublic(friend) fun remove(world : &mut World, key: vector<u8>) {
\t\tlet component = world::get_mut_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
\t\ttable::remove(component, key);
\t}
`
}

export function renderUpdateFunc(componentName: string, values: ComponentMapType): string {
  const total =  `\tpublic(friend) fun update(world : &mut World, key: vector<u8>, ${getStructAttrsWithType(values).join(", ")}) {
\t\tlet component = world::get_mut_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
\t\tlet data =  table::borrow_mut<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(component, key);
${getStructAttrsUpdate(values, "\t\t").join(";\n")}
\t} \n`

  const all =  typeof values === 'string'
    ? ''
    : Object.entries(values).map(([key, type]) =>
    `\tpublic(friend) fun update_${key}(world : &mut World, key: vector<u8>, ${key}: ${type}) {
\t\tlet component = world::get_mut_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
\t\ttable::borrow_mut<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(component, key).${key} = ${key};
\t}
`).join("\n");

  return total + all
}

export function renderQueryFunc(componentName: string, values: ComponentMapType): string {
  const total =  `\tpublic fun get(world : &World, key: vector<u8>) : ${getStructTypes(values) } {
\t\tlet component = world::get_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
\t\tlet data = table::borrow<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(component, key);
\t\t(
${getStructAttrsQuery(values, "\t\t\t").join(",\n")}
\t\t)
\t} \n`

  const all =  typeof values === 'string'
    ? ''
    : Object.entries(values).map(([key, type]) => `\tpublic fun get_${key}(world : &World, key: vector<u8>) : ${type} {
\t\tlet component = world::get_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
\t\ttable::borrow<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(component, key).${key}
\t}
`).join("\n");

  return total + all
}

export function renderContainFunc(componentName: string): string {
  return `\tpublic fun contains(world : &World, key: vector<u8>): bool {
\t\tlet component = world::get_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
\t\ttable::contains<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(component, key)
\t}`
}
