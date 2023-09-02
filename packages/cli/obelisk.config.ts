import { ObeliskConfig } from "../common/src/codegen/types";

export const obeliskConfig = {
  project_name: "withinfinity",
  systems: [
      "fee_system",
      "home_system",
      "pet_system",
      "state_system",
  ],
  components: {
    // Key - Struct value
    level: {
        hunger: "u64",
        cleanliness: "u64",
        mood: "u64",
        level: "u64",
    },
    // Key - Struct value
    state: {
        state: "vector<u8>" ,
        last_update_time: "u64" ,
    },
    // Key - Single value
    suifren: {
      value: "bool"
    },
    admin: {
      user: "bool"
    },
  },  
} as ObeliskConfig;
