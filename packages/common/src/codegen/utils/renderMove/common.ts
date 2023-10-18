import {BaseType, SchemaMapType} from "../../types";
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
  return result + "Data";
}

/**
 *
 * @param name
 * @param values
 * @return [use name::name_schema, use name::info_schema]
 */
export function getUseSchema(
  name: string,
  values: Record<string, SchemaMapType>
): string[] {
  let schema: string[] = [];
  Object.entries(values).forEach(
      ([key, value]) => {
        if (typeof value === 'object' && value.ephemeral) {
        } else {
          schema.push(`\tuse ${name}::${key}_schema;`)
        }
      }
  )
  return schema;
}

/**
 * @param values
 * @return [ name_schema::register(&mut _obelisk_world, ctx) ,info_schema::register(&mut _obelisk_world, ctx) ]
 */
export function getRegisterSchema(
  values: Record<string, SchemaMapType>
): string[] {
  let registers: string[] = [];
  Object.entries(values).forEach(
    ([key, value]) => {
      if (typeof value === 'object' && value.ephemeral) {
      } else {
        registers.push(`\t\t${key}_schema::register(&mut _obelisk_world, ctx);`)
      }
    }
  )
  return registers;
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
  if (
    typeof values === "string" ||
    typeof values === "boolean" ||
    typeof values === "number"
  ) {
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
// export function getStructTypes(values: SchemaMapType): string {
export function getStructTypes(values: BaseType | Record<string, BaseType>): string {
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
  values: BaseType | Record<string, BaseType>,
  prefixArgs: string
): string[] {
  return typeof values === "string"
    ? [`${prefixArgs}_obelisk_data.value`]
    : Object.entries(values).map(
        ([key, _]) => `${prefixArgs}_obelisk_data.${key}`
      );
}

export function renderKeyName(values: Record<string, string> | string): string {
  return `\t${getStructAttrs(values, "// ").join("\n\t")}`;
}

export function renderStruct(
  structName: string,
  values: Record<string, string> | string,
  isEphemeral: boolean = false
): string {
  return `\tstruct ${structName} has copy, drop ${isEphemeral ? "" : ", store"} {
${getStructAttrsWithType(values, "\t\t").join(",\n")}
\t}\n`;
}

export function renderNewStructFunc(
  structName: string,
  values: Record<string, string> | string
): string {
  return `\tpublic fun new(${getStructAttrsWithType(values, "").join(
    ", "
  )}): ${structName} {
\t\t${structName} {
${getStructAttrs(values, "\t\t\t").join(", \n")}
\t\t}
\t}\n`;
}

export function renderRegisterFunc(structName: string): string {
  return `\tpublic fun register(_obelisk_world: &mut World, ctx: &mut TxContext) {
\t\tworld::add_schema<Table<address,${structName}>>(_obelisk_world, SCHEMA_ID, table::new<address, ${structName}>(ctx));
\t}`;
}

export function renderSetFunc(
  structName: string,
  values: Record<string, string> | string
): string {
  return `\tpublic(friend) fun set(_obelisk_world: &mut World, _obelisk_entity_key: address, ${getStructAttrsWithType(values, " ")}) {
\t\tlet _obelisk_schema = world::get_mut_schema<Table<address,${structName}>>(_obelisk_world, SCHEMA_ID);
\t\tlet _obelisk_data = new(${getStructAttrs(values, " ")});
\t\tif(table::contains<address, ${structName}>(_obelisk_schema, _obelisk_entity_key)) {
\t\t\t*table::borrow_mut<address, ${structName}>(_obelisk_schema, _obelisk_entity_key) = _obelisk_data;
\t\t} else {
\t\t\ttable::add(_obelisk_schema, _obelisk_entity_key, _obelisk_data);
\t\t};
\t\tevents::emit_set(SCHEMA_ID, some(_obelisk_entity_key), _obelisk_data)
\t}
`;
}

export function renderRemoveFunc(structName: string): string {
  return `\tpublic(friend) fun remove(_obelisk_world: &mut World, _obelisk_entity_key: address) {
\t\tlet _obelisk_schema = world::get_mut_schema<Table<address,${structName}>>(_obelisk_world, SCHEMA_ID);
\t\tassert!(table::contains<address, ${structName}>(_obelisk_schema, _obelisk_entity_key), EEntityDoesNotExist);
\t\ttable::remove(_obelisk_schema, _obelisk_entity_key);
\t\tevents::emit_remove(SCHEMA_ID, _obelisk_entity_key)
\t}
`;
}

export function renderSetAttrsFunc(
  structName: string,
  struct: BaseType | Record<string, BaseType>
): string {
  return typeof struct === "string"
    ? ""
    : "\n" + Object.entries(struct)
        .map(
          ([key, type]) =>
            `\tpublic(friend) fun set_${key}(_obelisk_world: &mut World, _obelisk_entity_key: address, ${key}: ${type}) {
\t\tlet _obelisk_schema = world::get_mut_schema<Table<address,${structName}>>(_obelisk_world, SCHEMA_ID);
\t\tassert!(table::contains<address, ${structName}>(_obelisk_schema, _obelisk_entity_key), EEntityDoesNotExist);
\t\tlet _obelisk_data = table::borrow_mut<address, ${structName}>(_obelisk_schema, _obelisk_entity_key);
\t\t_obelisk_data.${key} = ${key};
\t\tevents::emit_set(SCHEMA_ID, some(_obelisk_entity_key), *_obelisk_data)
\t}
`
        )
        .join("\n");
}

export function renderGetAllFunc(
    structName: string,
    struct: BaseType | Record<string, BaseType>,
): string {
  return `\tpublic fun get(_obelisk_world: &World, _obelisk_entity_key: address): ${getStructTypes(struct)} {
\t\tlet _obelisk_schema = world::get_schema<Table<address,${structName}>>(_obelisk_world, SCHEMA_ID);
\t\tassert!(table::contains<address, ${structName}>(_obelisk_schema, _obelisk_entity_key), EEntityDoesNotExist);
\t\tlet _obelisk_data = table::borrow<address, ${structName}>(_obelisk_schema, _obelisk_entity_key);
\t\t(
${getStructAttrsQuery(struct, "\t\t\t").join(",\n")}
\t\t)
\t}
`;
}

export function renderGetAttrsFunc(
    structName: string,
    struct: BaseType | Record<string, BaseType>
): string {
  return typeof struct === "string"
      ? ""
      : "\n" + Object.entries(struct)
          .map(
              ([key, type]) => `\tpublic fun get_${key}(_obelisk_world: &World, _obelisk_entity_key: address): ${type} {
\t\tlet _obelisk_schema = world::get_schema<Table<address,${structName}>>(_obelisk_world, SCHEMA_ID);
\t\tassert!(table::contains<address, ${structName}>(_obelisk_schema, _obelisk_entity_key), EEntityDoesNotExist);
\t\tlet _obelisk_data = table::borrow<address, ${structName}>(_obelisk_schema, _obelisk_entity_key);
\t\t_obelisk_data.${key}
\t}
`
          )
          .join("\n");
}

export function renderContainFunc(structName: string): string {
  return `\tpublic fun contains(_obelisk_world: &World, _obelisk_entity_key: address): bool {
\t\tlet _obelisk_schema = world::get_schema<Table<address,${structName}>>(_obelisk_world, SCHEMA_ID);
\t\ttable::contains<address, ${structName}>(_obelisk_schema, _obelisk_entity_key)
\t}`;
}

export function renderRegisterFuncWithInit(
    structName: string,
    init: Record<string, string> | string
): string {
  return  `\tpublic fun register(_obelisk_world: &mut World, _ctx: &mut TxContext) {
\t\tlet _obelisk_schema = new(${getStructInitValue(init)});
\t\tworld::add_schema<${structName}>(_obelisk_world, SCHEMA_ID, _obelisk_schema);
\t\tevents::emit_set(SCHEMA_ID, none(), _obelisk_schema);
\t}`;
}

export function renderSingleSetFunc(
    structName: string,
    values: Record<string, string> | string,
): string {
  return `\tpublic(friend) fun set(_obelisk_world: &mut World, ${getStructAttrsWithType(values, " ")}) {
\t\tlet _obelisk_schema = world::get_mut_schema<${structName}>(_obelisk_world, SCHEMA_ID);
${typeof values === "string" ?
      `\t\t_obelisk_schema.value = value;` :
      Object.entries(values).map(([key, _]) =>
          `\t\t_obelisk_schema.${key} = ${key};`).join("\n")}
\t}`;
}

export function renderSingleSetAttrsFunc(
    structName: string,
    struct: BaseType | Record<string, BaseType>,
): string {
  return typeof struct === "string"
      ? ""
      : "\n" + Object.entries(struct)
          .map(
              ([key, type]) => `
\tpublic(friend) fun set_${key}(_obelisk_world: &mut World, ${key}: ${type}) {
\t\tlet _obelisk_schema = world::get_mut_schema<${structName}>(_obelisk_world, SCHEMA_ID);
\t\t_obelisk_schema.${key} = ${key};
\t\tevents::emit_set(SCHEMA_ID, none(), *_obelisk_schema)
\t}`
          )
          .join("\n");
}

export function renderSingleGetAllFunc(
    structName: string,
    values: BaseType | Record<string, BaseType>,
): string {
  return `\tpublic fun get(_obelisk_world: &World): ${getStructTypes(values)} {
\t\tlet _obelisk_schema = world::get_schema<${structName}>(_obelisk_world, SCHEMA_ID);
\t\t(
${typeof values === "string" ?
      `\t\t\t_obelisk_schema.value` :
      Object.entries(values).map(([key, _]) =>
          `\t\t\t_obelisk_schema.${key},`).join("\n")}
\t\t)
\t}`;
}

export function renderSingleGetAttrsFunc(
    structName: string,
    struct: BaseType | Record<string, BaseType>,
): string {
  return typeof struct === "string"
      ? ""
      : "\n" + Object.entries(struct)
          .map(
              ([key, type]) => `
\tpublic fun get_${key}(_obelisk_world: &World): ${type} {
\t\tlet _obelisk_schema = world::get_schema<${structName}>(_obelisk_world, SCHEMA_ID);
\t\t_obelisk_schema.${key}
\t}`
          )
          .join("\n");
}
