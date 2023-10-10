import type { CommandModule } from "yargs";
import { logError } from "../utils/errors";
import { publishHandler } from "../utils";

type Options = {
  network: any;
  path?: string;
};

const commandModule: CommandModule<Options, Options> = {
  command: "publish",

  describe: "Publish obelisk move contracts",

  builder(yargs) {
    return yargs.options({
      network: {
        type: "string",
        choices: ["mainnet", "testnet", "devnet", "localnet"],
        desc: "Network of the node (mainnet/testnet/devnet/localnet)",
      },
      path: { type: "string", desc: "Path to the save template file" },
    });
  },

  async handler({ network, path }) {
    try {
      await publishHandler(network, path);
    } catch (error: any) {
      logError(error);
      process.exit(1);
    }
    process.exit(0);
  },
};

export default commandModule;
