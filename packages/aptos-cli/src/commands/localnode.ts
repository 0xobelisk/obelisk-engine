import type { CommandModule } from "yargs";
import { execa } from "execa";
import { execSync } from "child_process";

const commandModule: CommandModule = {
  command: "localnode",

  describe: "Start a local Aptos node for development",

  builder(yargs) {
    return yargs;
  },

  async handler() {
    console.log("Clearing localnode history");

    console.log(`Running: aptos node run-local-testnet --with-faucet`);
    const child = execa("aptos", [
      "node",
      "run-local-testnet",
      "--with-faucet",
    ]);

    process.on("SIGINT", () => {
      console.log("\ngracefully shutting down from SIGINT (Crtl-C)");
      child.kill();
      process.exit();
    });
    await child;
  },
};

export default commandModule;
