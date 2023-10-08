import { ComponentMapType, SingletonType } from "../../types";
import fs from "fs";

export function deleteFolderRecursive(path: string) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file) => {
      const curPath = `${path}/${file}`;
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}

export function capitalizeFirstLetter(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

/**
 * Convert snake_case to camelCase
 * @param str
 */
export function convertToCamelCase(str: string): string {
  str = str.charAt(0).toUpperCase() + str.slice(1);
  let result = str.replace(/(_\w)/g, (match) => match[1].toUpperCase());
  return result + 'Data';
}

/**
 *
 * @param name
 * @param values
 * @return [use name::name_component, use name::info_component]
 */
export function getUseComponent(
  name: string,
  values: Record<string, ComponentMapType | SingletonType>
): string[] {
  return Object.entries(values).map(
    ([key, _]) => `\tuse ${name}::${key}_comp;`
  );
}

/**
 * @param values
 * @return [ name_component::register(&mut _obelisk_world, ctx) ,info_component::register(&mut _obelisk_world, ctx) ]
 */
export function getRegisterComponent(
  values: Record<string, ComponentMapType> | Record<string, SingletonType>
): string[] {
  return Object.entries(values).map(
    ([key, _]) => `\t\t${key}_comp::register(&mut _obelisk_world, ctx);`
  );
}

/**
 *
 * @param name
 * @param values
 * @return [ friend name::name_system, friend name::info_system ]
 */
export function getFriendSystem(name: string, values: string[]): string {
  return values.map((key) => `\tfriend ${name}::${key};`).join("\n");
}

/**
 *
 * @param values
 * @param prefixArgs
 * @return [ name, age, birth_time ]
 */
export function getStructAttrs(
  values: Record<string, string> | string,
  prefixArgs: string
): string[] {
  return typeof values === "string"
    ? [`${prefixArgs}value`]
    : Object.entries(values).map(([key, _]) => `${prefixArgs}${key}`);
}

export function getStructInitValue(values: any): string[] {
  if (typeof values === "string" || typeof values === "boolean" || typeof values === "number") {
    return [`${values}`];
  } else {
    return Object.entries(values).map(([_, value]) => `${value}`);
  }
}

/**
 *
 * @param values
 * @return ( bool , u64 , u64)
 */
// export function getStructTypes(values: ComponentMapType): string {
export function getStructTypes(
  values: ComponentMapType | SingletonType
): string {
  return typeof values === "string"
    ? values
    : `(${Object.entries(values).map(([_, type]) => `${type}`)})`;
}

/**
 *
 * @param values
 * @return Attributes and types of the struct. [ name: string, age: u64 ]
 */
export function getStructAttrsWithType(
  values: Record<string, string> | string,
  prefix: string
): string[] {
  return typeof values === "string"
    ? [`${prefix}value: ${values}`]
    : Object.entries(values).map(([key, type]) => `${prefix}${key}: ${type}`);
}

/**
 * @param values
 * @param prefixArgs
 * @return [ data.name, data.age ]
 */
export function getStructAttrsQuery(
  values: ComponentMapType | SingletonType,
  prefixArgs: string
): string[] {
  return typeof values === "string"
    ? [`${prefixArgs}_obelisk_data.value`]
    : Object.entries(values).map(([key, _]) => `${prefixArgs}_obelisk_data.${key}`);
}

export function renderKeyName(
  values: Record<string, string> | string,
): string {
  return `\t${getStructAttrs(values, "// ").join("\n\t")}`;
}

export function renderStruct(structName: string, values: Record<string, string> | string): string {
  return `\tstruct ${structName} has copy , drop, store {
${getStructAttrsWithType(values, "\t\t").join(',\n')}
\t}\n`
}

export function renderNewStructFunc(structName: string, values: Record<string, string> | string): string {
  return `\tpublic fun new(${getStructAttrsWithType(values, "").join(', ')}): ${structName} {
\t\t${structName} {
${getStructAttrs(values, "\t\t\t").join(", \n")}
\t\t}
\t}\n`
}

export function renderEmit(componentName: string, structName: string, resourceData: Record<string, string> | string): string {
  return `\tpublic fun emit_${componentName}(${getStructAttrsWithType(resourceData, "").join(', ')}) {
\t\tevent::emit(${structName} { ${getStructAttrs(resourceData, "").join(", ")} })
\t}`
}

export function renderRegisterFunc(structName: string, isSingle: boolean, init: Record<string, string> | string): string {
  const init_data= init !== undefined ? `new(${getStructInitValue(init).join(", ")})` : '';

  return !isSingle ||  init == undefined ?
      `\tpublic fun register(_obelisk_world: &mut World, ctx: &mut TxContext) {
\t\tworld::add_comp<CompMetadata>(_obelisk_world, NAME, CompMetadata {
\t\t\tname: string(NAME),
\t\t\tdata: table::new<address, ${structName}>(ctx)
\t\t});
\t}`
      :
      `\tpublic fun register(_obelisk_world: &mut World, ctx: &mut TxContext) {
\t\tlet _obelisk_component = CompMetadata {
\t\t\tname: string(NAME),
\t\t\tdata: table::new<address, ${structName}>(ctx)
\t\t};
\t\ttable::add(&mut _obelisk_component.data, id(), ${init_data});
\t\tworld::add_comp<CompMetadata>(_obelisk_world, NAME, _obelisk_component);
\t\tevents::emit_set(string(NAME), id(), ${init_data});
\t}`
}

export function renderSetFunc(structName: string, values: Record<string, string> | string, isSingle: boolean): string {
  return `\tpublic(friend) fun set(_obelisk_world: &mut World, ${isSingle ? `` : `_obelisk_entity_key: address,`} ${getStructAttrsWithType(
    values,
    ""
  ).join(", ")}) {
\t\tlet _obelisk_component = world::get_mut_comp<CompMetadata>(_obelisk_world, id());
\t\tlet _obelisk_data = new(${getStructAttrs(values, "").join(", ")});
\t\tif(table::contains<address, ${structName}>(&_obelisk_component.data, ${isSingle ? `id()` : `_obelisk_entity_key`})) {
\t\t\t*table::borrow_mut<address, ${structName}>(&mut _obelisk_component.data, ${isSingle ? `id()` : `_obelisk_entity_key`}) = _obelisk_data;
\t\t} else {
\t\t\ttable::add(&mut _obelisk_component.data, ${isSingle ? `id()` : `_obelisk_entity_key`}, _obelisk_data);
\t\t};
\t\tevents::emit_set(string(NAME), ${isSingle ? `id()` : `_obelisk_entity_key`}, _obelisk_data)
\t}
`;
}

export function renderRemoveFunc(structName: string,): string {
  return `\tpublic(friend) fun remove(_obelisk_world: &mut World, _obelisk_entity_key: address) {
\t\tlet _obelisk_component = world::get_mut_comp<CompMetadata>(_obelisk_world, id());
\t\tassert!(table::contains<address, ${structName}>(&_obelisk_component.data, _obelisk_entity_key), EEntityDoesNotExist);
\t\ttable::remove(&mut _obelisk_component.data, _obelisk_entity_key);
\t\tevents::emit_remove(string(NAME), _obelisk_entity_key)
\t}
`;
}

export function renderSetAttrsFunc(structName: string, struct : ComponentMapType | SingletonType, isSingle: boolean): string {
  return typeof struct === "string"
      ? ""
      : Object.entries(struct)
          .map(
              ([key, type]) =>
                  `\tpublic(friend) fun set_${key}(_obelisk_world: &mut World, ${isSingle ? `` : `_obelisk_entity_key: address,`} ${key}: ${type}) {
\t\tlet _obelisk_component = world::get_mut_comp<CompMetadata>(_obelisk_world, id());
\t\tassert!(table::contains<address, ${structName}>(&_obelisk_component.data, ${isSingle ? `id()` : `_obelisk_entity_key`}), EEntityDoesNotExist);
\t\tlet _obelisk_data = table::borrow_mut<address, ${structName}>(&mut _obelisk_component.data, ${isSingle ? `id()` : `_obelisk_entity_key`});
\t\t_obelisk_data.${key} = ${key};
\t\tevents::emit_set(string(NAME), ${isSingle ? `id()` : `_obelisk_entity_key`}, *_obelisk_data)
\t}
`
          )
          .join("\n");
}

export function renderGetAllFunc(structName: string, struct : ComponentMapType | SingletonType, isSingle: boolean): string {
  return `\tpublic fun get(_obelisk_world: &World ,${isSingle ? `` : `_obelisk_entity_key: address`}): ${getStructTypes(struct)} {
  \t\tlet _obelisk_component = world::get_comp<CompMetadata>(_obelisk_world, id());
  \t\tassert!(table::contains<address, ${structName}>(&_obelisk_component.data, ${isSingle ? `id()` : `_obelisk_entity_key`}), EEntityDoesNotExist);
\t\tlet _obelisk_data = table::borrow<address, ${structName}>(&_obelisk_component.data, ${isSingle ? `id()` : `_obelisk_entity_key`});
\t\t(
${getStructAttrsQuery(struct, "\t\t\t").join(",\n")}
\t\t)
\t}
`;
}

export function renderGetAttrsFunc(structName: string, struct: ComponentMapType | SingletonType, isSingle: boolean): string {
  return typeof struct === "string"
      ? ""
      : Object.entries(struct)
      .map(
          ([
             key,
             type,
           ]) => `\tpublic fun get_${key}(_obelisk_world: &World, ${isSingle ? `` : `_obelisk_entity_key: address`}): ${type} {
\t\tlet _obelisk_component = world::get_comp<CompMetadata>(_obelisk_world, id());
\t\tassert!(table::contains<address, ${structName}>(&_obelisk_component.data, ${isSingle ? `id()` : `_obelisk_entity_key`}), EEntityDoesNotExist);
\t\tlet _obelisk_data = table::borrow<address, ${structName}>(&_obelisk_component.data, ${isSingle ? `id()` : `_obelisk_entity_key`});
\t\t_obelisk_data.${key}
\t}
`
      )
      .join("\n");
}

export function renderContainFunc(structName: string): string {
  return `\tpublic fun contains(_obelisk_world: &World, _obelisk_entity_key: address): bool {
\t\tlet _obelisk_component = world::get_comp<CompMetadata>(_obelisk_world, id());
\t\ttable::contains<address, ${structName}>(&_obelisk_component.data, _obelisk_entity_key)
\t}
`;
}
