import {
  ObeliskConfig,
  BaseValueType,
  BaseType,
  MoveType, StorageValueType, StorageType,
} from "../../types";
import { formatAndWriteMove } from "../formatAndWrite";
import {
  renderKeyName,
  renderContainFunc,
  renderRemoveFunc,
  renderStruct,
  renderNewStructFunc,
  convertToCamelCase,
  renderRegisterFunc,
  getStructAttrsWithType,
  getStructAttrs,
  renderRegisterFuncWithInit,
  renderSingleSetFunc,
  renderSingleSetAttrsFunc,
  renderSingleGetAllFunc,
  renderSingleGetAttrsFunc, getStructTypes, getStructAttrsQuery,
} from "./common";

interface SchemaField {
    fieldName: string;
    keyType?: string | Record<string, string>;
    valueType: string | Record<string, string>;
    storageType: string;
    defaultValue?: string;
}

type SchemaOptions  = Record<string, SchemaField[]>


function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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

function getValueStructName(schemaName: string, objectName: string): string {
    return capitalizeAndRemoveUnderscores(schemaName) + capitalizeAndRemoveUnderscores(objectName) + "Value"
}


function getKeyStructName(schemaName: string, objectName: string): string {
    return capitalizeAndRemoveUnderscores(schemaName) + capitalizeAndRemoveUnderscores(objectName) + "Key"
}
function getKey1StructName(schemaName: string, objectName: string): string {
    return capitalizeAndRemoveUnderscores(schemaName) + capitalizeAndRemoveUnderscores(objectName) + "Key1"
}

export function renderSetAttrsFunc(
    schemaName: string,
    fields: BaseType | Record<string, BaseType>
): string {
  return "" +
      Object.entries(fields)
          .map(
              ([key, type]) =>
                  `\tpublic(package) fun set_${key}(self: &mut ${schemaName}, ${key}: ${type}) {
\t\tself.${key} = ${key};
\t}
`
          )
          .join("\n");
}

export function renderSetFunc(
    schemaName: string,
    fields: BaseType | Record<string, BaseType>
): string {
  return `\tpublic(package) fun set(self: &mut ${schemaName}, ${getStructAttrsWithType(
      fields,
      " "
  )}) {
\t\t${Object.entries(fields)
      .map(([fieldName]) => `self.${fieldName} = ${fieldName};`)
      .join('\n        ')}
\t}
`;
}

export function renderGetAllFunc(
    schemaName: string,
    fields: BaseType | Record<string, BaseType>
): string {
  return `\tpublic fun get(self: &${schemaName}): ${getStructTypes(
      fields
  )} {
\t\t(
${getStructAttrsQuery(fields, "\t\t\t").join(",\n")}
\t\t)
\t}
`;
}

export function renderGetAttrsFunc(
    schemaName: string,
    fields: BaseType | Record<string, BaseType>
): string {
  return "" +
      Object.entries(fields)
          .map(
              ([
                 key,
                 type,
               ]) => `\tpublic fun get_${key}(self: &${schemaName}): ${type} {
\t\tself.${key}
\t}
`
          )
          .join("\n");
}

function generateStorageValue(projectName: string, schemaName: string, objectName: string, fields: BaseType | Record<string, BaseType>, path: string) {
  const moduleHeader = `module ${projectName}::${schemaName}_${objectName} {
    use std::ascii::String;

   ${renderStruct(getValueStructName(schemaName, objectName), fields)}
   ${renderNewStructFunc(getValueStructName(schemaName, objectName), fields)}

   ${renderGetAllFunc(getValueStructName(schemaName, objectName), fields)}
   ${renderGetAttrsFunc(getValueStructName(schemaName, objectName), fields)}
   ${renderSetAttrsFunc(getValueStructName(schemaName, objectName), fields)}
   ${renderSetFunc(getValueStructName(schemaName, objectName), fields)}
}`;

    formatAndWriteMove(
        moduleHeader,
      `${path}/contracts/${projectName}/sources/codegen/schemas/${schemaName}/${objectName}.move`,
      "formatAndWriteMove"
    );
}

function generateSchemaModule(projectName: string, schemaName: string, schema: SchemaField[], path: string) {
    const schemaMoudle = `module ${projectName}::${schemaName}_schema {
    use std::ascii::String;
    use sui::transfer::{public_share_object};
    ${schema.some(field => field.storageType.includes("StorageValue")) ? `use obelisk::storage_value::{Self, StorageValue};` : ''}
    ${schema.some(field => field.storageType.includes("StorageMap")) ? `use obelisk::storage_map::{Self, StorageMap};` : ''}
    ${schema.some(field => field.storageType.includes("StorageDoubleMap")) ? `use obelisk::storage_double_map::{Self, StorageDoubleMap};` : ''}
    ${schema.map(field => {
        if (field.storageType.includes("StorageValue")) {
            if (typeof field.valueType === "object") {
                return `use ${projectName}::${schemaName}_${field.fieldName}::${getValueStructName(schemaName, field.fieldName)};`
            }
        } else if (field.storageType.includes("StorageMap")) {
            if (typeof field.keyType === "object") {
                return `use ${projectName}::${schemaName}_${field.fieldName}::${getKeyStructName(schemaName, field.fieldName)};`
            } else if (typeof field.valueType === "object") {
                return `use ${projectName}::${schemaName}_${field.fieldName}::${getValueStructName(schemaName, field.fieldName)};`
            }
        }
    }).filter(value => value !== "").join('\n')}

    public struct ${capitalizeAndRemoveUnderscores(schemaName)} has key, store {
        id: UID,
        ${schema.map(field => {
            return `${field.fieldName}: ${field.storageType},`
        }).join('\n')}
    } 
    
    ${schema.map(field => {
        return `public fun borrow_${field.fieldName}(self: &${capitalizeAndRemoveUnderscores(schemaName)}) : &${field.storageType} {
            &self.${field.fieldName}
        }
        
        public(package) fun borrow_mut_${field.fieldName}(self: &mut ${capitalizeAndRemoveUnderscores(schemaName)}): &mut ${field.storageType} {
            &mut self.${field.fieldName}
        }
        `
    }).join('\n')} 
    
    fun init(ctx: &mut TxContext) { 
    public_share_object(${capitalizeAndRemoveUnderscores(schemaName)} {
        id: object::new(ctx),
        ${schema.map(field => {
            let storage_type = ""
            if (field.storageType.includes("StorageValue")) {
                storage_type = `storage_value::new(${field.defaultValue})`
            } else if (field.storageType.includes("StorageMap")) {
                storage_type = `storage_map::new()`
            } else if (field.storageType.includes("StorageDoubleMap")) {
                storage_type = `storage_double_map::new()`
            }
            return `${field.fieldName}: ${storage_type},`
        }).join('\n')
    }
    });
    }
        
    #[test_only]
    public fun init_${schemaName}_for_testing(ctx: &mut TxContext){
        init(ctx)
    }    
     
}`;

    formatAndWriteMove(
        schemaMoudle,
        `${path}/contracts/${projectName}/sources/codegen/schemas/${schemaName}/${schemaName}.move`,
        "formatAndWriteMove"
    );
}

export function generateSchema(config: ObeliskConfig, path: string) {
    let schemas: SchemaOptions = {};
  for (const [schemaName, fields] of Object.entries(config.schemas)) {
      let schemaFields: SchemaField[] = [];
      Object.keys(fields).forEach(fieldName => {
          const fieldDetails = fields[fieldName];
          console.log(fieldDetails);
          if (fieldDetails.storageType === "Value") {
                if (typeof fieldDetails.valueType === "object") {
                    generateStorageValue(config.name, schemaName, fieldName, fieldDetails.valueType, path);
                    schemaFields.push({
                        fieldName,
                        valueType: fieldDetails.valueType,
                        storageType: `StorageValue<${getValueStructName(schemaName, fieldName)}>`,
                        defaultValue: fieldDetails.defaultValue
                    })
                } else {
                    schemaFields.push({
                        fieldName,
                        valueType: fieldDetails.valueType,
                        storageType: `StorageValue<${fieldDetails.valueType}>`,
                        defaultValue: fieldDetails.defaultValue
                    })
                }
            } else if(fieldDetails.storageType === "Map") {
                if (typeof fieldDetails.keyType === "object") {
                    if (typeof fieldDetails.valueType === "object") {
                        generateStorageValue(config.name, schemaName, fieldName, fieldDetails.valueType, path);
                        schemaFields.push({
                            fieldName,
                            keyType: fieldDetails.keyType,
                            valueType: fieldDetails.valueType,
                            storageType: `StorageMap<${getKeyStructName(schemaName, fieldName)}, ${getValueStructName(schemaName, fieldName)}>`,
                        })
                    } else {
                        schemaFields.push({
                            fieldName,
                            keyType: fieldDetails.keyType,
                            valueType: fieldDetails.valueType,
                            storageType: `StorageMap<${getKeyStructName(schemaName, fieldName)}, ${fieldDetails.valueType}>`,
                        })
                    }
                } else {
                    if (typeof fieldDetails.valueType === "object") {
                        generateStorageValue(config.name, schemaName, fieldName, fieldDetails.valueType, path);
                        schemaFields.push({
                            fieldName,
                            keyType: fieldDetails.keyType,
                            valueType: fieldDetails.valueType,
                            storageType: `StorageMap<${fieldDetails.keyType}, ${getValueStructName(schemaName, fieldName)}>`,
                        })
                    } else {
                        schemaFields.push({
                            fieldName,
                            keyType: fieldDetails.keyType,
                            valueType: fieldDetails.valueType,
                            storageType: `StorageMap<${fieldDetails.keyType}, ${fieldDetails.valueType}>`,
                        })
                    }
                }
            }



      })
      schemas[schemaName] = schemaFields;
  }

    console.log(schemas);

   Object.entries(schemas).forEach(([schemaName, fields]) => {
       generateSchemaModule(config.name, schemaName, fields, path);
   });
}

