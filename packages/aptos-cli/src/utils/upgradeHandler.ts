import fs from 'fs';
import chalk from 'chalk';
import { execSync } from 'child_process';
import {
	AptosAccount,
	TxnBuilderTypes,
	MaybeHexString,
	HexString,
	FaucetClient,
	AptosClient,
	Network,
	Types,
	Provider,
	FungibleAssetClient,
	CustomEndpoints,
} from 'aptos';
import { Seq } from 'aptos/src/bcs';
import { getDefaultURL, InputNetworkType } from '@0xobelisk/aptos-client';

import { ObeliskCliError } from './errors';
import { saveContractData, validatePrivateKey } from './utils';

const {
	AccountAddress,
	EntryFunction,
	MultiSig,
	MultiSigTransactionPayload,
	TransactionPayloadMultisig,
} = TxnBuilderTypes;

type Module = TxnBuilderTypes.Module;
// type Seq = TxnBuilderTypes.Seq;

// type publishRes = {
//   projectName: string,
//   transactionHash: string,
//   packageId: string,
//   worldId: string
// }

export async function upgradeHandler(
	projectName: string,
	network: InputNetworkType
) {
	const privateKey = process.env.PRIVATE_KEY;
	if (!privateKey)
		throw new ObeliskCliError(
			`Missing PRIVATE_KEY environment variable.
  Run 'echo "PRIVATE_KEY=YOUR_PRIVATE_KEY" > .env'
  in your contracts directory to use the default aptos private key.`
		);

	const privateKeyFormat = validatePrivateKey(privateKey);
	if (privateKeyFormat === false) {
		throw new ObeliskCliError(`Please check your privateKey.`);
	}

	const keypair = AptosAccount.fromAptosAccountObject({
		privateKeyHex: privateKeyFormat.toString(),
	});

	const client = new AptosClient(getDefaultURL(network as Network).fullNode);

	const path = process.cwd();
	let modulesInfo: string[];
	try {
		const { Result: compileResult } = JSON.parse(
			execSync(
				`aptos move compile --save-metadata --package-dir ${path}/contracts/${projectName} --named-addresses ${projectName}=${keypair
					.address()
					.toString()}`,
				{
					encoding: 'utf-8',
				}
			)
		);
		modulesInfo = compileResult;
	} catch (error: any) {
		console.error(chalk.red('Error executing aptos move compile:'));
		console.error(error.stdout);
		process.exit(1); // You might want to exit with a non-zero status code to indicate an error
	}

	let packageId = '';
	let version = 0;

	try {
		const packageMetadata = fs.readFileSync(
			`${path}/contracts/${projectName}/build/${projectName}/package-metadata.bcs`
		);

		let modulesData: Module[] = [];
		modulesInfo.forEach(value => {
			const moduleName = value.split('::')[1];
			const moduleData = fs.readFileSync(
				`${path}/contracts/${projectName}/build/${projectName}/bytecode_modules/${moduleName}.mv`
			);

			modulesData.push(
				new TxnBuilderTypes.Module(
					new HexString(moduleData.toString('hex')).toUint8Array()
				)
			);
		});

		let txnHash = await client.publishPackage(
			keypair,
			new HexString(packageMetadata.toString('hex')).toUint8Array(),
			modulesData as Seq<Module>
		);
		await client.waitForTransaction(txnHash, { checkSuccess: true });

		packageId = keypair.address().toString();
		version = 1;

		console.log(chalk.blue(`${projectName} PackageId: ${packageId}`));
		saveContractData(projectName, network, packageId, version);
		console.log(chalk.green(`Upgrade Transaction Digest: ${txnHash}`));
	} catch (error: any) {
		console.error(chalk.red(`Failed to execute upgrade`));
		console.error(error.message);
		process.exit(1);
	}
}
