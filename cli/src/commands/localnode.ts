import { rmSync } from "fs";
import { homedir } from "os";
import path from "path";
import type { CommandModule } from "yargs";
import { execa } from "execa";

type Options = {
};

const commandModule: CommandModule = {
  command: "localnode",

  describe: "Start a local Sui node for development",

  builder(yargs) {
    return yargs.options({
      outputLog: { type: "string", default: "sui-node-log.txt", decs: "Sui-node log output file" },
    });
  },

  async handler() {
    console.log("Clearing localnode history");
    const userHomeDir = homedir();
    rmSync(path.join(userHomeDir, ".sui", "sui_config", "tmp"), { recursive: true, force: true });

    console.log(`Running: sui-test-validator`);
    const child = execa("sui-test-validator");

    process.on("SIGINT", () => {
      console.log("\ngracefully shutting down from SIGINT (Crtl-C)");
      child.kill();
      process.exit();
    });
    await child;
  },
};

export default commandModule;
