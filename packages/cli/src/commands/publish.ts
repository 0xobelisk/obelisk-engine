import type { CommandModule } from "yargs";
import { logError } from "../utils/errors";
import { publishHandler } from "../utils";
import { loadConfig } from "../../../common/src/codegen";
import { ObeliskConfig } from "../../../common/src/codegen/types";

type Options = {
  configPath: string,
  nodeUrl: any
}

const commandModule: CommandModule<Options, Options> = {
  command: "publish",

  describe: "Publish obelisk move contracts",

  builder(yargs) {
    return yargs.options({
      configPath: { type: "string", default: ".", decs: "Path to the file where you want to publish the module" },
      nodeUrl: { type: 'string', choices: ['mainnet', 'testnet', 'devnet', 'localnet'], desc: "URL of the node (mainnet/testnet/devnet/localnet)" }
    });
  },

  async handler({ configPath, nodeUrl}) {
    try {
      const obeliskConfig = await loadConfig(configPath) as ObeliskConfig;

      await publishHandler(obeliskConfig.project_name, nodeUrl);
    } catch (error: any) {
      logError(error);
      process.exit(1);
    }
    process.exit(0);
  },
};

export default commandModule;
