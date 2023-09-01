import type { CommandModule } from "yargs";
import { worldgen } from "../../../common/src/codegen";
import { ObeliskConfig } from "../../../common/src/codegen/types";

type Options = {
  configPath?: string;
};

const commandModule: CommandModule<Options, Options> = {
  command: "compgen <configPath>",

  describe: "Autogenerate Obelisk components based on the config file",

  builder(yargs) {
    return yargs.options({
      configPath: { type: "string", desc: "Path to the config file" },
    });
  },

  async handler({ configPath }) {

  let config = {
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
          data: "bool"
        },
      },  
    } as ObeliskConfig;
    worldgen(config);

    process.exit(0);
  },
};

export default commandModule;
