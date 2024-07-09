import {
	getDefaultURL,
	InputNetworkType,
	Network,
	FaucetClient,
	AptosClient,
} from '@0xobelisk/aptos-client';
import { delay } from './utils';

export async function requestFaucet(
	host: {
		fullNode: string;
		faucet: string;
	},
	//   network: string,
	accountAddress: string,
	amount: number
) {
	try {
		const faucetClient = new FaucetClient(host.fullNode, host.faucet);

		await faucetClient.fundAccount(accountAddress, amount);
		return true;
	} catch (err) {
		await delay(2000);
		console.warn(`Failed to fund token with faucetClient: ${err}`);
	}
	return false;
}

export async function getBalance(
	host: {
		fullNode: string;
		faucet: string;
	},
	accountAddress: string
) {
	try {
		const client = new AptosClient(host.fullNode);
		const resources = await client.getAccountResources(accountAddress);
		const aptosCoin = '0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>';
		let accountResource = resources.find(r => r.type === aptosCoin);
		return BigInt((accountResource!.data as any).coin.value);
	} catch (err) {
		await delay(2000);
		console.warn(`Failed to get balance with AptosClient: ${err}`);
	}
}
