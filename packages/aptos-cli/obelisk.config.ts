import { ObeliskConfig } from "@0xobelisk/aptos-common";

export const obeliskConfig = {
  name: "examples",
  description: "examples",
  systems: ["example_system"],
  schemas: {
    single_column: "u64",
    multi_column: {
      valueType: {
        state: "string",
        last_update_time: "u64",
      },
    },
    ephemeral: {
      ephemeral: true,
      valueType: {
        state: "string",
        level: "u64",
      },
    },
    single_value: {
      valueType: "u64",
      defaultValue: 1000,
    },
    single_struct: {
      valueType: {
        name: "string",
        admin: "address",
        fee: "u64",
      },
      defaultValue: {
        name: "obelisk",
        admin: "@0x1",
        fee: 100,
      },
    },
  },
} as ObeliskConfig;
