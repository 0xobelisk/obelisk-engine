import type { CommandModule } from 'yargs';
import { logError } from '../utils/errors';
import { publishHandler } from '../utils';
import { loadConfig, ObeliskConfig } from '@0xobelisk/sui-common';

type Options = {
	network: any;
	configPath: string;
	dappsObjectId?: string;
};

const commandModule: CommandModule<Options, Options> = {
	command: 'publish',

	describe: 'Publish obelisk move contract',

	builder(yargs) {
		return yargs.options({
			network: {
				type: 'string',
				choices: ['mainnet', 'testnet', 'devnet', 'localnet'],
				desc: 'Node network (mainnet/testnet/devnet/localnet)',
			},
			configPath: {
				type: 'string',
				default: 'obelisk.config.ts',
				desc: 'Configuration file path',
			},
			dappsObjectId: {
				type: 'string',
				desc: 'Optional dappsObjectId',
			},
		});
	},

	async handler({ network, configPath, dappsObjectId }) {
		try {
			const obeliskConfig = (await loadConfig(
				configPath
			)) as ObeliskConfig;
			await publishHandler(obeliskConfig.name, network, dappsObjectId);
		} catch (error: any) {
			logError(error);
			process.exit(1);
		}
		process.exit(0);
	},
};

export default commandModule;
