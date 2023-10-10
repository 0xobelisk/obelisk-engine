import type { CommandModule } from "yargs";
import { logError } from "../utils/errors";
import { upgradeHandler } from "../utils";
import { ObeliskConfig } from "@0xobelisk/common";
import { loadConfig } from "@0xobelisk/common";

type Options = {
  path?: string;
};

const commandModule: CommandModule<Options, Options> = {
  command: "upgrade",

  describe: "Upgrade your move contracts",

  builder(yargs) {
    return yargs.options({
      path: { type: "string", desc: "Path to the save template file" },
    });
  },

  async handler({ path }) {
    try {

      const obeliskConfig = (await loadConfig(process.cwd() + "/obelisk.config.ts")) as ObeliskConfig;

      let schemaNames = Object.keys(obeliskConfig.schemas)

      await upgradeHandler(obeliskConfig.name, schemaNames, path);
    } catch (error: any) {
      logError(error);
      process.exit(1);
    }
    process.exit(0);
  },
};

export default commandModule;
