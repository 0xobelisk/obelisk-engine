import { ObeliskConfig } from "@0xobelisk/common/src/codegen/types";

export const obeliskConfig = {
  name: "examples",
  description: "examples description",
  systems: ["counter_system"],
  components: {
    // Key - Single value
    single_column: "u64",
    // Key - Struct value
    multi_column: {
      state: "vector<u8>",
      last_update_time: "u64",
    }
  },
  singletonComponents: {
    // Single value
    counter: {
      type: "u64",
      init: "1000",
    },
    // TODO: Struct value
    // Manager: {
    //   type: {
    //     admin: "address",
    //     fee: "u64"
    //   },
    //   init: {
    //     admin: "0x1",
    //     fee: "100",
    //   },
    // },
  },
} as ObeliskConfig;
