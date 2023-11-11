import { loadConfig, ObeliskConfig } from "@0xobelisk/aptos-common";
import type { CommandModule } from "yargs";
import { execSync } from "child_process";
import chalk from "chalk";

type Options = {
  configPath: string;
};

const commandModule: CommandModule<Options, Options> = {
  command: "test",

  describe: "Run tests in Obelisk contracts",

  builder(yargs) {
    return yargs.options({
      configPath: {
        type: "string",
        default: "obelisk.config.ts",
        decs: "Path to the config file",
      },
    });
  },

  async handler({ configPath }) {
    const obeliskConfig = (await loadConfig(configPath)) as ObeliskConfig;

    // Start an internal anvil process if no world address is provided
    try {
      const logs = execSync(
        `aptos move test --package-dir contracts/${obeliskConfig.name} --named-addresses ${obeliskConfig.name}=0x0`,
        {
          encoding: "utf-8",
        }
      );

      console.log(logs);
    } catch (error: any) {
      console.error(chalk.red("Error executing sui move test:"));
      console.log(error.stdout);
      process.exit(0);
    }
  },
};

export default commandModule;
