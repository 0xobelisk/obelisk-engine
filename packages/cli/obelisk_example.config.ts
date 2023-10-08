import { ObeliskConfig } from "@0xobelisk/common";

export const obelisk_exampleConfig = {
  name: "examples",
  description: "examples",
  systems: [
    "example_system",
  ],
  components: {
    single_column: "u64",
    multi_column: {
      valueSchema: {
        state: "vector<u8>",
        last_update_time: "u64",
      }
    },
    ephemeral: {
      ephemeral: true,
      valueSchema: "u64",
    },
    single_value: {
      singleton: true,
      valueSchema: "u64",
      init: 1000
    },
    single_struct: {
      singleton: true,
      valueSchema: {
        admin: "address",
        fee: "vector<u8>",
      },
      init: {
        admin: "@0x1",
        fee: 100,
      }
    },
  }
} as unknown as ObeliskConfig;
