import type { CommandModule } from "yargs";

type Options = {
  dripDev?: boolean;
  faucetUrl: string;
  address: string;
};

function createFaucetService(url: string) {
  console.log(url)
}

const commandModule: CommandModule<Options, Options> = {
  command: "faucet",

  describe: "Interact with a Obelisk faucet",

  builder(yargs) {
    return yargs.options({
      dripDev: {
        type: "boolean",
        desc: "Request a drip from the dev endpoint (requires faucet to have dev mode enabled)",
        default: true,
      },
      faucetUrl: {
        type: "string",
        desc: "URL of the Obelisk faucet",
        default: "https://faucet.testnet-obelisk-services.com",
      },
      address: {
        type: "string",
        desc: "Sui address to fund",
        required: true,
      },
    });
  },

  async handler({ dripDev, faucetUrl, address }) {
    createFaucetService(faucetUrl);
    process.exit(0);
  },
};

export default commandModule;
