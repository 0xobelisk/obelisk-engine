import { ObeliskConfig } from "../common";

export const obeliskConfig = {
  name: "examples",
  description: "examples description",
  systems: ["example_system", "b_system", "a_system"],
  components: {
    // Key - Single value
    single_column: "u64",
    // Key - Struct value
    multi_column: {
      state: "vector<u8>",
      last_update_time: "u64",
    },
  },
  singletonComponents: {
    // Single value
    single_value: {
      type: "u64",
      init: "1000",
    },
    // Struct value
    single_struct: {
      type: {
        admin: "address",
        fee: "vector<u8>",
      },
      init: {
        admin: "@0x1",
        fee: "vector[1,2,3,4]",
      },
    },
  },
} as ObeliskConfig;
