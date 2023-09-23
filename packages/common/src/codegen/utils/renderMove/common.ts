// import { ComponentMapType, isSingletonType, SingletonType } from '../../types';
import { ComponentMapType, SingletonType, isSingletonType } from "../../types";
import fs from "fs";

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
 * @return [ name_component::register(&mut world, ctx) ,info_component::register(&mut world, ctx) ]
 */
export function getRegisterComponent(
  values: Record<string, ComponentMapType>
): string[] {
  return Object.entries(values).map(
    ([key, _]) => `\t\t${key}_comp::register(&mut world, ctx);`
  );
}

/**
 * @param values
 * @return [ name_component::register(&mut world) ,info_component::register(&mut world) ]
 */
export function getRegisterSingletonComponent(
  values: Record<string, SingletonType>
): string[] {
  return Object.entries(values).map(
    ([key, _]) => `\t\t${key}_comp::register(&mut world);`
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
  values: string | Record<string, string>,
  prefixArgs: string
): string[] {
  return typeof values === "string"
    ? [`${prefixArgs}value`]
    : Object.entries(values).map(([key, _]) => `${prefixArgs}${key}`);
}

export function getStructInitValue(
  values: string | Record<string, string>
): string[] {
  return typeof values === "string"
    ? [`${values}`]
    : Object.entries(values).map(([_, value]) => `${value}`);
}

/**
 *
 * @param values
 * @return ( bool , u64 , u64)
 */
// export function getStructTypes(values: ComponentMapType): string {
export function getStructTypes(
  values: string | Record<string, string>
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
  values: string | Record<string, string>,
  prefix: string
): string[] {
  return typeof values === "string"
    ? [`${prefix}value: ${values}`]
    : Object.entries(values).map(([key, type]) => `${prefix}${key}: ${type}`);
}

export function getFieldAttrsWithType(
  values: string | Record<string, string>
  // prefix: string
): string[] {
  return typeof values === "string"
    ? [`string(b"${values}")`]
    : Object.entries(values).map(([key, type]) => `string(b"${type}")`);
}

export function getFieldTypes(
  values: ComponentMapType | SingletonType
): string[] {
  let map = values;
  if (isSingletonType(values)) {
    let singleValue = values as SingletonType;
    map = singleValue.type;
  }
  return typeof map === "string"
    ? [`${map}`]
    : Object.entries(map).map(([key, type]) => `${type}`);
}

/**
 * @param values
 * @param prefixArgs
 * @return [ data.name = name , data.age = age ]
 */
export function getStructAttrsEncode(
  values: string | Record<string, string>,
  prefixArgs: string
): string[] {
  return typeof values === "string"
    ? [`${prefixArgs}vector::append(&mut data, bcs::to_bytes(&value));`]
    : Object.entries(values).map(
        ([key, _]) =>
          `${prefixArgs}vector::append(&mut data, bcs::to_bytes(&${key}));`
      );
}

/**
 * @param values
 * @param prefixArgs
 * @return [ data.name, data.age ]
 */
export function getStructAttrsQuery(
  values: string | Record<string, string>,
  prefixArgs: string
): string[] {
  return typeof values === "string"
    ? [`${prefixArgs}data.value`]
    : Object.entries(values).map(([key, _]) => `${prefixArgs}data.${key}`);
}

export function renderStruct(values: ComponentMapType | SingletonType): string {
  let map = values;
  if (isSingletonType(values)) {
    let singleValue = values as SingletonType;
    map = singleValue.type;
  }

  return `
\tpublic fun field_types() : vector<String> {
\t\tvector[string(b"u64")]
\t}
  
\tstruct Field has drop, store {
\t\tdata: vector<u8>
\t}\n`;
}

export function renderRegisterFunc(): string {
  return `\tpublic fun register(world: &mut World, ctx: &mut TxContext) {
\t\tworld::add_component<Table<address,Field>>(
\t\t\tworld,
\t\t\tid(),
\t\t\ttable::new<address,Field>(ctx)
\t\t);
\t}
`;
}

export function renderAddFunc(values: ComponentMapType): string {
  return `\tpublic(friend) fun add(world: &mut World, key: address, ${getStructAttrsWithType(
    values,
    ""
  ).join(", ")}) {
\t\tlet component = world::get_mut_component<Table<address,Field>>(world, id());
\t\tlet data = encode(${getStructAttrs(values, "").join(", ")});
\t\ttable::add(component, key, Field { data });
\t\tworld::emit_add_event(id(), key, data)
\t}
`;
}

export function renderRemoveFunc(): string {
  return `\tpublic(friend) fun remove(world: &mut World, key: address) {
\t\tlet component = world::get_mut_component<Table<address,Field>>(world, id());
\t\ttable::remove(component, key);
\t\tworld::emit_remove_event(id(), key)
\t}
`;
}

function generateGetPlaceholderString(
  keys: string[],
  targetKey: string
): string {
  return `(${keys.map((key) => (key === targetKey ? key : "_")).join(", ")})`;
}

function generateUpdatePlaceholderString(
  keys: string[],
  targetKey: string
): string {
  return `(${keys.map((key) => (key === targetKey ? "_" : key)).join(", ")})`;
}

function getDecodeData(values: ComponentMapType, key: string) {
  if (typeof values !== "string") {
    let allKey = Object.keys(values);
    const result = generateGetPlaceholderString(allKey, key);
    return result;
  }
}

function updateDecodeData(values: ComponentMapType, key: string) {
  if (typeof values !== "string") {
    let allKey = Object.keys(values);
    const result = generateUpdatePlaceholderString(allKey, key);
    return result;
  }
}

export function renderUpdateFunc(
  values: ComponentMapType | SingletonType
): string {
  let map: string | Record<string, string> = "";
  let total = "";
  let all = "";
  if (isSingletonType(values)) {
    let singleValue = values as SingletonType;
    map = singleValue.type;

    total = `\tpublic(friend) fun update(world: &mut World, ${getStructAttrsWithType(
      map,
      ""
    ).join(", ")}) {
\t\tlet data = encode(${getStructAttrs(map, "").join(", ")});
\t\tworld::get_mut_component<Field>(world, id()).data = data;
\t\tworld::emit_update_event(id(), none(), data)
\t}
`;

    all =
      typeof map === "string"
        ? ""
        : Object.entries(map)
            .map(
              ([key, type]) =>
                `\tpublic(friend) fun update_${key}(world: &mut World, ${key}: ${type}) {
\t\tlet field = world::get_mut_component<Field>(world, id());
\t\tlet ${updateDecodeData(map, key)} = decode(field.data);
\t\tfield.data = encode(${getStructAttrs(map, "").join(", ")});
\t\tworld::emit_update_event(id(), none(), field.data)
\t}
`
            )
            .join("\n");
  } else {
    map = values as ComponentMapType;

    total = `\tpublic(friend) fun update(world: &mut World, key: address, ${getStructAttrsWithType(
      map,
      ""
    ).join(", ")}) {
\t\tlet component = world::get_mut_component<Table<address, Field>>(world, id());
\t\tlet field = table::borrow_mut<address, Field>(component, key);
\t\tlet data = encode(${getStructAttrs(map, "").join(", ")});
\t\tfield.data = data;
\t\tworld::emit_update_event(id(), some(key), data)
\t}
`;

    all =
      typeof map === "string"
        ? ""
        : Object.entries(map)
            .map(
              ([key, type]) =>
                `\tpublic(friend) fun update_${key}(world: &mut World, key: address, ${key}: ${type}) {
\t\tlet component = world::get_mut_component<Table<address,Field>>(world, id());
\t\tlet field = table::borrow_mut<address, Field>(component, key);
\t\tlet ${updateDecodeData(map, key)} = decode(field.data);
\t\tlet data = encode(${getStructAttrs(map, "").join(", ")});
\t\tfield.data = data;
\t\tworld::emit_update_event(id(), some(key), data)
\t}
`
            )
            .join("\n");
  }

  return total + all;
}

export function renderQueryFunc(
  values: ComponentMapType | SingletonType
): string {
  let map: string | Record<string, string> = "";
  let total = "";
  let all = "";
  if (isSingletonType(values)) {
    let singleValue = values as SingletonType;
    map = singleValue.type;

    total = `\tpublic fun get(world: &World): ${getStructTypes(map)} {
\t\tlet data = world::get_component<Field>(world, id()).data;
\t\tdecode(data)
\t}\n`;

    all =
      typeof map === "string"
        ? ""
        : "\n" +
          Object.entries(map)
            .map(
              ([
                key,
                type,
              ]) => `\tpublic fun get_${key}(world: &World): ${type} {
\t\tlet data = world::get_component<Field>(world, id()).data;
\t\tlet ${getDecodeData(map, key)} = decode(data);
\t\t${key}
\t}
`
            )
            .join("\n");
  } else {
    map = values as ComponentMapType;

    total = `\tpublic fun get(world: &World, key: address): ${getStructTypes(
      map
    )} {
\t\tlet component = world::get_component<Table<address,Field>>(world, id());
\t\tlet field = table::borrow<address, Field>(component, key);
\t\tdecode(field.data)
\t}\n`;

    all =
      typeof map === "string"
        ? ""
        : "\n" +
          Object.entries(map)
            .map(
              ([
                key,
                type,
              ]) => `\tpublic fun get_${key}(world: &World, key: address): ${type} {
\t\tlet component = world::get_component<Table<address,Field>>(world, id());
\t\tlet field = table::borrow<address, Field>(component, key);
\t\tlet ${getDecodeData(map, key)} = decode(field.data);
\t\t${key}
\t}
`
            )
            .join("\n");
  }

  return total + all;
}

export function renderContainFunc(): string {
  return `\tpublic fun contains(world: &World, key: address): bool {
\t\tlet component = world::get_component<Table<address,Field>>(world, id());
\t\ttable::contains<address, Field>(component, key)
\t}
`;
}

export function renderEncodeFunc(
  values: ComponentMapType | SingletonType
): string {
  let map: string | Record<string, string> = "";
  if (isSingletonType(values)) {
    let singleValue = values as SingletonType;
    map = singleValue.type;
  } else {
    map = values as ComponentMapType;
  }

  return `\tpublic fun encode(${getStructAttrsWithType(map, "").join(
    ", "
  )}): vector<u8> {
\t\tlet data = vector::empty<u8>();
${getStructAttrsEncode(map, "\t\t").join("\n")}
\t\tdata
\t}
`;
}

// export function renderSigletonEncodeFunc(): string {
//   return `\tpublic fun encode(value: u64): vector<u8> {
// \t\tlet data = vector::empty<u8>();
// \t\tvector::append(&mut data, bcs::to_bytes(&value));
// \t\tdata
// \t}
// `;
// }

// todo: struct / bag
function renderBcsDecodeFunc(type: string) {
  if (type === "address") {
    return `bcs::peel_address(&mut data)`;
  } else if (type === "bool") {
    return `bcs::peel_bool(&mut data)`;
  } else if (type === "u8") {
    return `bcs::peel_u8(&mut data)`;
  } else if (type === "u64") {
    return `bcs::peel_u64(&mut data)`;
  } else if (type === "u128") {
    return `bcs::peel_u128(&mut data)`;
  } else if (type === "vector<address>") {
    return `bcs::peel_vec_address(&mut data)`;
  } else if (type === "vector<bool>") {
    return `bcs::peel_vec_bool(&mut data)`;
  } else if (type === "vector<u8>") {
    return `bcs::peel_vec_u8(&mut data)`;
  } else if (type === "vector<vector<u8>>") {
    return `bcs::peel_vec_vec_u8(&mut data)`;
  } else if (type === "vector<u64>") {
    return `bcs::peel_vec_u64(&mut data)`;
  } else if (type === "vector<u128>") {
    return `bcs::peel_vec_u128(&mut data)`;
  } else if (type === "Option<address>") {
    return `bcs::peel_option_address(&mut data)`;
  } else if (type === "Option<bool>") {
    return `bcs::peel_option_bool(&mut data)`;
  } else if (type === "Option<u8>") {
    return `bcs::peel_option_u8(&mut data)`;
  } else if (type === "Option<u64>") {
    return `bcs::peel_option_u64(&mut data)`;
  } else if (type === "Option<u128>") {
    return `bcs::peel_option_u128(&mut data)`;
  }
}

// export function renderSigletonDecodeFunc(values: SingletonType): string {
//   return `\tpublic fun decode(bytes: vector<u8>): ${getFieldTypes(values)} {
// \t\tlet data = bcs::new(bytes);
// \t\t(
// \t\t\t${renderBcsDecodeFunc(values.type)}
// \t\t)
// \t}
// `;
// }

export function renderDecodeFunc(
  values: ComponentMapType | SingletonType
): string {
  let map: string | Record<string, string> = "";
  if (isSingletonType(values)) {
    let singleValue = values as SingletonType;
    map = singleValue.type;
  } else {
    map = values as ComponentMapType;
  }

  const all =
    typeof map === "string"
      ? `\t\t\t${renderBcsDecodeFunc(map)}`
      : Object.entries(map)
          .map(([key, type]) => `\t\t\t${renderBcsDecodeFunc(type)}`)
          .join(",\n");

  return `\tpublic fun decode(bytes: vector<u8>): ${getStructTypes(map)} {
\t\tlet data = bcs::new(bytes);
\t\t(
${all}
\t\t)
\t}`;
}

// function formatData(value: SingletonType): string {
//   // TODO: Support other type (string, time, table, bag...)
//   let fmtData = value.init;
//   if (value.type === "address") {
//     fmtData = `@` + value.init;
//     // } else if (value.type === "table") {
//     //   fmtData = ''
//   }

//   return fmtData;
// }

export function renderRegisterFuncWithInit(values: SingletonType): string {
  // const initData = formatData(values);

  return `\tpublic fun register(world: &mut World) {
\t\tworld::add_component<Field>(
\t\t\tworld,
\t\t\tid(),
\t\t\tField { data: encode(${getStructInitValue(values.init).join(", ")}) }
\t\t);
\t}
`;
}
