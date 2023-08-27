import type { CommandModule } from "yargs";

type Options = {
  configPath?: string;
};

const commandModule: CommandModule<Options, Options> = {
  command: "compgen <configPath>",

  describe: "Autogenerate Obelisk components based on the config file",

  builder(yargs) {
    return yargs.options({
      configPath: { type: "string", desc: "Path to the config file" },
    });
  },

  async handler({ configPath }) {
    console.log(`Components gen ${configPath}`)
    process.exit(0);
  },
};

export default commandModule;
