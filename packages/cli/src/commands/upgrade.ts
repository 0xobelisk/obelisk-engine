import type { CommandModule } from "yargs";
import { logError } from "../utils/errors";
import { upgradeHandler } from "../utils";
import { ObeliskConfig, loadConfig } from "@0xobelisk/common";

type Options = {
  configPath: string;
  // path?: string;
};

const commandModule: CommandModule<Options, Options> = {
  command: "upgrade",

  describe: "Upgrade your move contracts",

  builder(yargs) {
    return yargs.options({
      configPath: {
        type: "string",
        default: "obelisk.config.ts",
        decs: "Path to the config file",
      },
      // path: { type: "string", desc: "Path to the save template file" },
    });
  },

  async handler({ configPath }) {
    try {
      // const obeliskConfig = (await loadConfig(process.cwd() + "/obelisk.config.ts")) as ObeliskConfig;
      const obeliskConfig = (await loadConfig(configPath)) as ObeliskConfig;

      let schemaNames = Object.keys(obeliskConfig.schemas);

      await upgradeHandler(obeliskConfig.name, schemaNames);
    } catch (error: any) {
      logError(error);
      process.exit(1);
    }
    process.exit(0);
  },
};

export default commandModule;
