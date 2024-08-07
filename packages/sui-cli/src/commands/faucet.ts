import { Obelisk } from '@0xobelisk/sui-client';
import type { CommandModule } from 'yargs';
import { requestSuiFromFaucetV0, getFaucetHost } from '@mysten/sui/faucet';
import {
	SuiClient,
	getFullnodeUrl,
	GetBalanceParams,
} from '@mysten/sui/client';
import { validatePrivateKey, ObeliskCliError } from '../utils';

type Options = {
	network: any;
	recipient?: string;
};

const commandModule: CommandModule<Options, Options> = {
	command: 'faucet',

	describe: 'Interact with a Obelisk faucet',

	builder(yargs) {
		return yargs.options({
			network: {
				type: 'string',
				desc: 'URL of the Obelisk faucet',
				choices: ['testnet', 'devnet', 'localnet'],
				default: 'localnet',
			},
			recipient: {
				type: 'string',
				desc: 'Sui address to fund',
			},
		});
	},

	async handler({ network, recipient }) {
		let faucet_address = '';
		if (recipient === undefined) {
			const privateKey = process.env.PRIVATE_KEY;
			if (!privateKey)
				throw new ObeliskCliError(
					`Missing PRIVATE_KEY environment variable.
    Run 'echo "PRIVATE_KEY=YOUR_PRIVATE_KEY" > .env'
    in your contracts directory to use the default sui private key.`
				);

			const privateKeyFormat = validatePrivateKey(privateKey);
			if (privateKeyFormat === false) {
				throw new ObeliskCliError(`Please check your privateKey.`);
			}
			const obelisk = new Obelisk({
				secretKey: privateKeyFormat,
			});
			const keypair = obelisk.getKeypair();
			faucet_address = keypair.toSuiAddress();
		} else {
			faucet_address = recipient;
		}
		await requestSuiFromFaucetV0({
			host: getFaucetHost(network),
			recipient: faucet_address,
		});
		const client = new SuiClient({ url: getFullnodeUrl(network) });
		let params = {
			owner: faucet_address,
		} as GetBalanceParams;
		console.log(`Account: ${faucet_address}`);
		console.log(await client.getBalance(params));
		process.exit(0);
	},
};

export default commandModule;
