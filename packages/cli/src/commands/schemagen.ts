import type { CommandModule } from "yargs";
import { worldgen, loadConfig, ObeliskConfig } from "@0xobelisk/common";

type Options = {
  configPath?: string;
};

const commandModule: CommandModule<Options, Options> = {
  command: "schemagen <configPath>",

  describe: "Autogenerate Obelisk schemas based on the config file",

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
