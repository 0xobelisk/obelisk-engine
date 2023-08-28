import type { CommandModule } from "yargs";
import { requestSuiFromFaucetV0, getFaucetHost } from '@mysten/sui.js/faucet';
import { SuiClient, getFullnodeUrl, GetBalanceParams } from '@mysten/sui.js/client';

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
        choices: ['testnet', 'devnet', 'localnet'],
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
    const client = new SuiClient({ url: getFullnodeUrl(network) });
    let params = {
      owner: recipient
    } as GetBalanceParams;
    console.log(await client.getBalance(params))
    process.exit(0);
  },
};

export default commandModule;
