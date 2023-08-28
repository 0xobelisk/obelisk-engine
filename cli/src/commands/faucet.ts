import type { CommandModule } from "yargs";
import { requestSuiFromFaucetV0, getFaucetHost } from '@mysten/sui.js/faucet';

type Options = {
  network: any;
  recipient: string;
};

const commandModule: CommandModule<Options, Options> = {
  command: "faucet",

  describe: "Interact with a Obelisk faucet",

  builder(yargs) {
    return yargs.options({
      network: {
        type: "string",
        desc: "URL of the Obelisk faucet",
        choices: ['mainnet', 'testnet', 'devnet', 'localnet'],
        default: 'localnet'
      },
      recipient: {
        type: "string",
        desc: "Sui address to fund",
        required: true,
      },
    });
  },

  async handler({ network, recipient }) {
    await requestSuiFromFaucetV0({
      host: getFaucetHost(network),
      recipient: recipient,
    });
    process.exit(0);
  },
};

export default commandModule;
