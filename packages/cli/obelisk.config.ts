import { ObeliskConfig } from "@0xobelisk/common/src/codegen/types";

export const obeliskConfig = {
  projectName: "withinfinity",
  systems: ["counter_system", "home_system", "pet_system", "state_system"],
  components: {
    // Key - Struct value
    level: {
      hunger: "u64",
      cleanliness: "address",
      mood: "bool",
      level: "vector<address>",
    },
    // Key - Struct value
    state: {
      state: "vector<u8>",
      last_update_time: "u64",
    },
    // Key - Single value
    suifren: "bool",
    // Key - Single value
    le: "u64",
  },
  singletonComponents: {
    counter: {
      type: "u64",
      init: "1000",
    },
  },
} as ObeliskConfig;
