import { rmSync } from "fs";
import { homedir } from "os";
import path from "path";
import type { CommandModule } from "yargs";
import { execa } from "execa";

type Options = {
  outputLog: string;
};

const commandModule: CommandModule<Options, Options> = {
  command: "devnode <outputLog>",

  describe: "Start a local Sui node for development",

  builder(yargs) {
    return yargs.options({
      outputLog: { type: "string", default: "sui-node-log.txt", decs: "Sui-node log output file" },
    });
  },

  async handler({ outputLog }) {
    console.log("Clearing devnode history");
    const userHomeDir = homedir();
    rmSync(path.join(userHomeDir, ".sui", "sui_config", "tmp"), { recursive: true, force: true });

    const suiNodeArgs = ["--write-ahead-log", outputLog];
    console.log(`Running: sui-node ${suiNodeArgs.join(" ")}`);
    const child = execa("sui-node", suiNodeArgs, {
      stdio: ["inherit", "inherit", "inherit"],
    });

    process.on("SIGINT", () => {
      console.log("\ngracefully shutting down from SIGINT (Crtl-C)");
      child.kill();
      process.exit();
    });
    await child;
  },
};

export default commandModule;
