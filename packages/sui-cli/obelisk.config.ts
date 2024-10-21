import { ObeliskConfig } from "@0xobelisk/sui-common";

// let remarkType = {
//   name: "String",
//   description: "string",
// }

export const obeliskConfig = {
  name: "examples",
  description: "examples",
  systems: ["counter"],
  schemas: {
    counter: {
      value: {
        valueType: "u64",
        storageType: "Value",
        defaultValue: 10
      },
      last_update_time: {
        keyType: "u64",
        valueType: "u64",
        storageType: "Map"
      },
      remark : {
        keyType: "u64",
        valueType: {
          name: "String",
          description: "String",
        },
        storageType: "Map"
      },
      hello : {
        keyType: "u64",
        valueType: "u64",
        storageType: "Map"
      },
    }
  },
} as ObeliskConfig;
