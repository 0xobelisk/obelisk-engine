import type { CommandModule } from "yargs";
import { logError } from "../utils/errors";
import { upgradeHandler } from "../utils";
import { loadConfig } from "@0xobelisk/common/src/codegen";
import { ObeliskConfig } from "@0xobelisk/common/src/codegen/types";

type Options = {
  configPath: string;
  savePath?: string;
};

const commandModule: CommandModule<Options, Options> = {
  command: "upgrade",

  describe: "Upgrade your move contracts",

  builder(yargs) {
    return yargs.options({
      configPath: {
        type: "string",
        default: ".",
        decs: "Path to the config file",
      },
      savePath: { type: "string", desc: "Path to the save template file" },
    });
  },

  async handler({ configPath, savePath }) {
    try {
      const obeliskConfig = (await loadConfig(configPath)) as ObeliskConfig;

      let compnames = Object.keys(obeliskConfig.components).concat(
        Object.keys(obeliskConfig.singletonComponents)
      );

      await upgradeHandler(obeliskConfig.name, compnames, savePath);
    } catch (error: any) {
      logError(error);
      process.exit(1);
    }
    process.exit(0);
  },
};

export default commandModule;