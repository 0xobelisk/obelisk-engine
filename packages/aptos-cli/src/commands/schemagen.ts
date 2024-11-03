import type { CommandModule } from 'yargs';
import { worldgen, loadConfig, DubheConfig } from '@0xobelisk/aptos-common';
import chalk from 'chalk';

type Options = {
	configPath?: string;
};

const commandModule: CommandModule<Options, Options> = {
	command: 'schemagen <configPath>',

	describe: 'Autogenerate Dubhe schemas based on the config file',

	builder(yargs) {
		return yargs.options({});
	},

	async handler({ configPath }) {
		try {
			const dubheConfig = (await loadConfig(
				configPath
			)) as DubheConfig;
			worldgen(dubheConfig);
			process.exit(0);
		} catch (error: any) {
			console.log(chalk.red('Schemagen failed!'));
			console.error(error.message);
		}
	},
};

export default commandModule;
