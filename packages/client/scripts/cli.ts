import { formatAndWriteMove } from "../../common/src/codegen";
import chalk from "chalk";

type ComponentMapType = Record<string, string>

type ConfigDataType = Record<string, string>

type ObeliskConfig = {
    project_name: string,
    systems: string[],
    components: Record<string, ComponentMapType>
}

function capitalizeFirstLetter(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

// function renderSystemName(config: ObeliskConfig): string {
//   return config.systems.map((data) => `
//   friend ${config.project_name}::${data};
//   `)
// }

function renderMapEnterKeyWithType(values: ComponentMapType): string[] {
  const combinedStrings = Object.entries(values).map(([key, type]) => `\t${key}: ${type}`);
  return combinedStrings
  // const result = combinedStrings.join(',\n');
  // return result
}

// function renderMapKey(values: ComponentMapType): string {
//   const combinedStrings = Object.entries(values).map(([key, type]) => `\t${key}`);
//   const result = combinedStrings.join(',\n');
//   return result
// }


function renderMapKey(values: ComponentMapType): string[] {
  const combinedStrings = Object.entries(values).map(([key, _]) => `${key}`);
  return combinedStrings
  // const result = combinedStrings.join(joinType);
  // return result
}


function renderMapType(values: ComponentMapType): string[] {
  const combinedStrings = Object.entries(values).map(([_, type]) => `${type}`);
  return combinedStrings
}
function renderMapKeyWithType(values: ComponentMapType): string[] {
  const combinedStrings = Object.entries(values).map(([key, type]) => `${key}: ${type}`);
  return combinedStrings
  // const result = combinedStrings.join(joinType);
  // return result
}

function renderDataMapKey(values: ComponentMapType): string[] {
  const combinedStrings = Object.entries(values).map(([key, _]) => `\tdata.${key} = ${key};`);
  return combinedStrings
}

function renderStructMap(componentName: string, values: ComponentMapType): string {
    return `struct ${capitalizeFirstLetter(componentName)}Data has drop, store {
${renderMapEnterKeyWithType(values).join(',\n')}
  }

  public fun new(${renderMapKeyWithType(values).join(', ')}): ${capitalizeFirstLetter(componentName)}Data {
     ${capitalizeFirstLetter(componentName)}Data {
      ${renderMapKey(values).join(", \n")}
     }
  }

  public fun register(world: &mut World, ctx: &mut TxContext) {
      world::add_component_in_world<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(
          world,
          COMPONENT_NAME,
          table::new<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(ctx)
      );
  }
    `
}

function renderAddFunc(componentName: string, values: ComponentMapType): string {
  return `public(friend) fun add(world : &mut World, key: vector<u8>, ${renderMapKeyWithType(values).join(", ")}) {
      let component = world::get_mut_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
      table::add(component, key, new(${renderMapKey(values).join(", ")}));
      world::add_component_in_entity(world, key, COMPONENT_NAME)
  }
  `
}

function renderRemoveFunc(componentName: string): string {
  return `public(friend) fun remove(world : &mut World, key: vector<u8>) {
    let component = world::get_mut_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
    table::remove(component, key);
    world::remove_component_from_entity(world, key)
}`
}

function renderUpdateTotalFunc(componentName: string, values: ComponentMapType): string {
  return `public(friend) fun update(world : &mut World, key: vector<u8>, ${renderMapKeyWithType(values).join(", ")}) {
    let component = world::get_mut_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
    let data =  table::borrow_mut<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(component, key);
    ${renderDataMapKey(values).join("\n")}
}`
}

function renderAllUpdateFunc(componentName: string, values: ComponentMapType): string {
  const combinedStrings = Object.entries(values).map(([key, type]) => `public(friend) fun update_${key}(world : &mut World, key: vector<u8>, ${key}: ${type}) {
    let component = world::get_mut_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
    table::borrow_mut<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(component, key).${key} = ${key};
}`);
  // return combinedStrings
  const result = combinedStrings.join("\n");
  return result
}

function renderGetTotalFunc(componentName: string, values: ComponentMapType): string {
  return `public fun get(world : &World, key: vector<u8>) : (${renderMapType(values).join(", ")}) {
    let component = world::get_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
    let data = table::borrow<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(component, key);
    (
      ${renderDataMapKey(values).join("\n")}
    )
}`
}

function renderAllGetFunc(componentName: string, values: ComponentMapType): string {
  const combinedStrings = Object.entries(values).map(([key, type]) => `public fun get_${key}(world : &World, key: vector<u8>) : ${type} {
    let component = world::get_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
    table::borrow<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(component, key).${key}
}`);
  // return combinedStrings
  const result = combinedStrings.join("\n");
  return result
}

function renderContainFunc(componentName: string): string {
  return `public fun contains(world : &World, key: vector<u8>): bool {
    let component = world::get_component<Table<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>>(world, COMPONENT_NAME);
    table::contains<vector<u8>, ${capitalizeFirstLetter(componentName)}Data>(component, key)
}`
}

// function renderComponent(componentName: string, value: ComponentMapType): string{
//   if (typeof value === "object") {
//     return renderComponentMap(componentName, value)
//   }
// }

async function init() {
  let config = {
    project_name: "withinfinity",
    systems: [
        "fee_system",
        "home_system",
        "pet_system",
        "state_system",
    ],
    components: {
      // Key - Struct value
      level: {
          hunger: "u64",
          cleanliness: "u64",
          mood: "u64",
          level: "u64",
      },
      // Key - Struct value
      state: {
          state: "vector<u8>" ,
          last_update_time: "u64" ,
      },
      // Key - Single value
      suifren: {
        data: "bool"
      },
    },  
  } as ObeliskConfig;
  

  Object.entries(config.components).forEach(([componentName, value]) => {
    console.log(componentName)
    let code = `moudle ${config.project_name}::${componentName}_component {
    use sui::tx_context::TxContext;
    use sui::table::{ Self, Table };
    use ${config.project_name}::world::{ Self , World };
  
    // Systems
${config.systems.map((data) => `    friend ${config.project_name}::${data};`).join("\n")}
    const COMPONENT_NAME: vector<u8> = b"${capitalizeFirstLetter(componentName)} Component";

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
    console.log(code)
    console.log(`${componentName}.move`)
    formatAndWriteMove(code, `/Users/feng/Desktop/obelisk/obelisk-engine/packages/client/codegen/${componentName}.move`, "formatAndWriteMove");
  })

    // formatAndWriteMove(output, "/Users/feng/Desktop/obelisk/obelisk-engine/packages/client/a.move", "formatAndWriteMove");
}

init();
