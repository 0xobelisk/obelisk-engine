import type { CommandModule } from "yargs";
import { worldgen, loadConfig } from "@0xobelisk/common/codegen";
import { ObeliskConfig } from "@0xobelisk/common/src/codegen";

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
    const obeliskConfig = (await loadConfig(configPath)) as ObeliskConfig;
    worldgen(obeliskConfig);
    process.exit(0);
  },
};

export default commandModule;
