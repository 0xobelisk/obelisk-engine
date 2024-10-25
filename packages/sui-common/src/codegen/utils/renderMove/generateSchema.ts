import {
    BaseType, SchemaType,
} from "../../types";
import { formatAndWriteMove } from "../formatAndWrite";
import {
  getStructAttrsWithType,
  getStructAttrs,
    getStructTypes, getStructAttrsQuery,
} from "./common";

function capitalizeAndRemoveUnderscores(input: string): string {
  return input
      .split('_')
      .map((word, index) => {
        return index === 0
            ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
}

export function renderSetAttrsFunc(
    schemaName: string,
    fields: BaseType | Record<string, BaseType>
): string {
  return Object.entries(fields)
          .map(
              ([key, type]) =>
                  `public(package) fun set_${key}(self: &mut ${schemaName}, ${key}: ${type}) {
                        self.${key} = ${key};
                    }`
          ).join("\n");
}

export function renderSetFunc(
    schemaName: string,
    fields: Record<string, string>
): string {
  return `public(package) fun set(self: &mut ${schemaName}, ${getStructAttrsWithType(fields)}) {
            ${Object.entries(fields)
                  .map(([fieldName]) => `self.${fieldName} = ${fieldName};`)
                  .join('\n')}
            }`;
}

export function renderGetAllFunc(
    schemaName: string,
    fields: BaseType | Record<string, BaseType>
): string {
  return `public fun get(self: &${schemaName}): ${getStructTypes(fields)} {
        (${getStructAttrsQuery(fields, "")})
    }`;
}

export function renderGetAttrsFunc(
    schemaName: string,
    fields: BaseType | Record<string, BaseType>
): string {
  return Object.entries(fields)
          .map(
              ([key, type]) => `public fun get_${key}(self: &${schemaName}): ${type} {
                                    self.${key}
                                }`
          ).join("\n");
}

function convertToSnakeCase(input: string): string {
    return input
        .replace(/([A-Z])/g, '_$1')
        .toLowerCase()
        .replace(/^_/, '');
}

export async function generateSchemaData(projectName: string, schemas: Record<string, SchemaType>, path: string) {
    for (const schemaName in schemas) {
        console.log(`Schema: ${schemaName}`);
        const schema = schemas[schemaName];
        if (schema.data) {
            for (const item of schema.data) {
                console.log(`Name: ${item.name}`);
                console.log(`Fields: ${item.fields}`);

                const moduleHeader = `module ${projectName}::${schemaName}_${convertToSnakeCase(item.name)} {
                            use std::ascii::String;

                           public struct ${item.name} has copy, drop , store {
                                ${getStructAttrsWithType(item.fields)}
                           }
                        
                           public fun new(${getStructAttrsWithType(item.fields)}): ${item.name} {
                               ${item.name} {
                                   ${getStructAttrs(item.fields)}
                               }
                            }
                        
                           ${renderGetAllFunc(item.name, item.fields)}
                           ${renderGetAttrsFunc(item.name, item.fields)}
                           ${renderSetAttrsFunc(item.name, item.fields)}
                           ${renderSetFunc(item.name, item.fields)}
                        }`;

                await formatAndWriteMove(
                    moduleHeader,
                    `${path}/contracts/${projectName}/sources/codegen/schemas/${schemaName}_${convertToSnakeCase(item.name)}.move`,
                    "formatAndWriteMove"
                );


            }
        }
    }
}

function generateImport(projectName: string, schemaName: string, schema: SchemaType) {
    if (schema.data) {
        return schema.data.map(item => {
            return `use ${projectName}::${schemaName}_${convertToSnakeCase(item.name)}::${item.name};`
        }).join('\n');
    } else {
        return ""
    }
}

export async function generateSchemaStructure(projectName: string, schemas: Record<string, SchemaType>, path: string) {
    for (const schemaName in schemas) {
        console.log(`Schema: ${schemaName}`);
        const schema = schemas[schemaName];
        const schemaMoudle = `module ${projectName}::${schemaName}_schema {
                    use std::ascii::String;
                    use sui::transfer::{public_share_object};
                    use obelisk::storage_value::{Self, StorageValue};
                    use obelisk::storage_map::{Self, StorageMap};
                    use obelisk::storage_double_map::{Self, StorageDoubleMap};
                    ${generateImport(projectName, schemaName, schema)}

                    public struct ${capitalizeAndRemoveUnderscores(schemaName)} has key, store {
                        id: UID,
                        ${getStructAttrsWithType(schema.structure)}
                    } 
                    
                     ${Object.entries(schema.structure).map(([key, value]) => {
                        return `public fun borrow_${key}(self: &${capitalizeAndRemoveUnderscores(schemaName)}) : &${value} {
                        &self.${key}
                    }
                    
                    public(package) fun borrow_mut_${key}(self: &mut ${capitalizeAndRemoveUnderscores(schemaName)}): &mut ${value} {
                        &mut self.${key}
                    }
                    `
                    }).join('')} 
                
                fun init(ctx: &mut TxContext) { 
                public_share_object(${capitalizeAndRemoveUnderscores(schemaName)} {
                    id: object::new(ctx),
                    ${Object.entries(schema.structure).map(([key, value]) => {
                        let storage_type = ""
                        if (value.includes("StorageValue")) {
                            storage_type = `storage_value::new()`
                        } else if (value.includes("StorageMap")) {
                            storage_type = `storage_map::new()`
                        } else if (value.includes("StorageDoubleMap")) {
                            storage_type = `storage_double_map::new()`
                        }
                        return `${key}: ${storage_type},`
                    }).join('\n')
                    }
                });
                }
                    
                #[test_only]
                public fun init_${schemaName}_for_testing(ctx: &mut TxContext){
                    init(ctx)
                }    
           }`;
        await formatAndWriteMove(
            schemaMoudle,
            `${path}/contracts/${projectName}/sources/codegen/schemas/${schemaName}.move`,
            "formatAndWriteMove"
        );
    }
}