import {
	NetworkType,
	AptosAccount,
	getDefaultURL,
} from '@0xobelisk/aptos-client';
import type { CommandModule } from 'yargs';

import {
	validatePrivateKey,
	DubheCliError,
	requestFaucet,
	getBalance,
} from '../utils';
import chalk from 'chalk';

type Options = {
	network: any;
	recipient?: string;
	amount?: number;
};

const commandModule: CommandModule<Options, Options> = {
	command: 'faucet',

	describe: 'Interact with a Dubhe faucet',

	builder(yargs) {
		return yargs.options({
			network: {
				type: 'string',
				desc: 'URL of the aptos faucet',
				choices: [
					'testnet',
					'devnet',
					'local',
					'movementtestnet',
					'movementdevnet',
					'movementlocal',
				],
				default: 'devnet',
			},
			recipient: {
				type: 'string',
				desc: 'Aptos address to fund',
			},
			amount: {
				type: 'number',
				desc: 'fund amount',
				default: 50000000,
			},
		});
	},

	async handler({ network, recipient, amount }) {
		let faucet_address = '';
		if (recipient === undefined) {
			const privateKey = process.env.PRIVATE_KEY;
			if (!privateKey)
				throw new DubheCliError(
					`Missing PRIVATE_KEY environment variable.
    Run 'echo "PRIVATE_KEY=YOUR_PRIVATE_KEY" > .env'
    in your contracts directory to use the default aptos private key.`
				);

			const privateKeyFormat = validatePrivateKey(privateKey);
			if (privateKeyFormat === false) {
				throw new DubheCliError(`Please check your privateKey.`);
			}
			const keypair = AptosAccount.fromAptosAccountObject({
				privateKeyHex: privateKeyFormat.toString(),
			});
			faucet_address = keypair.address().toString();
		} else {
			faucet_address = recipient;
		}

		if (amount === undefined) {
			amount = 50000000;
		}
		const defaultUrl = getDefaultURL(network as NetworkType);

		if (defaultUrl.faucet === undefined) {
			console.error(chalk.red(`${network} not support faucet`));
			process.exit(0);
		}

		await requestFaucet(defaultUrl, faucet_address, amount);

		console.log(`Account: ${faucet_address}`);
		const balance = await getBalance(defaultUrl, faucet_address);
		console.log(`Balance: ${balance}`);
		process.exit(0);
	},
};

export default commandModule;
