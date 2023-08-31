import type { CommandModule } from "yargs";
import { logError } from "../utils/errors";
import { publishHandler } from "../utils";

type Options = {
  packagePath: string,
  nodeUrl: any
}

const commandModule: CommandModule<Options, Options> = {
  command: "publish",

  describe: "Publish obelisk move contracts",

  builder(yargs) {
    return yargs.options({
      packagePath: { type: "string", default: ".", decs: "Path to the file where you want to publish the module" },
      nodeUrl: { type: 'string', choices: ['mainnet', 'testnet', 'devnet', 'localnet'], desc: "URL of the node (mainnet/testnet/devnet/localnet)" }
    });
  },

  async handler({ packagePath, nodeUrl}) {
    try {
      await publishHandler(packagePath,nodeUrl);
    } catch (error: any) {
      logError(error);
      process.exit(1);
    }
    process.exit(0);
  },
};

export default commandModule;
