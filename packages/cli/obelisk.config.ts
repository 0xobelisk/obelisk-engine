import { ObeliskConfig } from "@0xobelisk/common";

export const obeliskConfig = {
  name: "examples",
  description: "examples description",
  systems: ["example_system", "b_system", "a_system"],
  components: {
    // Key - Single value
    single_column: "u64",
    // counter: "u64",
    b_counter: "u64",
    // Key - Struct value
    multi_column: {
      state: "vector<u8>",
      last_update_time: "u64",
    },
  },
  singletonComponents: {
    init_counter: {
      type: "u64",
      init: "100",
    },
    test_counter: {
      type: "u64",
      init: "123",
    },
    i_counter: {
      type: "u64",
      init: "100",
    },
    // Single value
    single_value: {
      type: "u64",
      init: "1000",
    },
    // Struct value
    single_struct: {
      type: {
        admin: "address",
        fee: "u64",
      },
      init: {
        admin: "@0x1",
        fee: "100",
      },
    },
  },
} as ObeliskConfig;
