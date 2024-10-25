import { ObeliskConfig } from "@0xobelisk/sui-common";

export const obeliskConfig = {
  name: "examples",
  description: "examples",
  systems: ["counter"],
  schemas: {
    counter: {
      data: [
        {
            name: "Remark",
            fields: { name: "String", description: "String" }
        },
        {
          name: "Info",
          fields: { name: "String", sex: "bool", age: "u64" }
        }
      ],
       structure: {
           value: "StorageValue<u64>",
           last_update_time: "StorageMap<u64, u64>",
           remark: "StorageMap<u64, Remark>",
           info: "StorageMap<Info, Remark>",
       }
    }
  },
} as ObeliskConfig;
