import type { CommandModule } from "yargs";
import { logError } from "../utils/errors";
import { publishHandler } from "../utils";
import { loadConfig, ObeliskConfig } from "@0xobelisk/aptos-common";

type Options = {
  network: any;
  configPath: string;
};

const commandModule: CommandModule<Options, Options> = {
  command: "publish",

  describe: "Publish obelisk move contracts",

  builder(yargs) {
    return yargs.options({
      network: {
        type: "string",
        choices: ["mainnet", "testnet", "devnet", "local"],
        desc: "Network of the node (mainnet/testnet/devnet/local)",
      },
      configPath: {
        type: "string",
        default: "obelisk.config.ts",
        decs: "Path to the config file",
      },
    });
  },

  async handler({ network, configPath }) {
    try {
      const obeliskConfig = (await loadConfig(configPath)) as ObeliskConfig;
      await publishHandler(obeliskConfig.name, network);
    } catch (error: any) {
      logError(error);
      process.exit(1);
    }
    process.exit(0);
  },
};

export default commandModule;
