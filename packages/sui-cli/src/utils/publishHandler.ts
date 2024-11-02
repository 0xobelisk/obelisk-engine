import { Obelisk } from '@0xobelisk/sui-client';
import { Transaction } from '@mysten/sui/transactions';
import {
	getFullnodeUrl,
	SuiClient,
	SuiTransactionBlockResponse,
} from '@mysten/sui/client';
import { execSync } from 'child_process';
import chalk from 'chalk';
import { ObeliskCliError } from './errors';
import {
	updateVersionInFile,
	saveContractData,
	validatePrivateKey,
	schema,
} from './utils';

async function getDappsObjectId(
	network: 'mainnet' | 'testnet' | 'devnet' | 'localnet'
) {
	switch (network) {
		case 'testnet':
			return '0xa66942c08d9fc318a70ab9d0cfd7e75f1a2dd1ac31aff12fde008d25bfa9604b';
		default:
			return '0xa66942c08d9fc318a70ab9d0cfd7e75f1a2dd1ac31aff12fde008d25bfa9604b';
	}
}

export async function publishHandler(
	name: string,
	network: 'mainnet' | 'testnet' | 'devnet' | 'localnet',
	dappsObjectId?: string
) {
	const path = process.cwd();
	const projectPath = `${path}/contracts/${name}`;
	dappsObjectId = dappsObjectId || (await getDappsObjectId(network));
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

	const client = new SuiClient({
		url: getFullnodeUrl(network),
	});

	let modules: any, dependencies: any;
	try {
		const {
			modules: extractedModules,
			dependencies: extractedDependencies,
		} = JSON.parse(
			execSync(
				`sui move build --dump-bytecode-as-base64 --path ${projectPath}`,
				{
					encoding: 'utf-8',
				}
			)
		);
		modules = extractedModules;
		dependencies = extractedDependencies;
	} catch (error: any) {
		console.error(chalk.red('Error executing sui move build:'));
		console.error(error.stdout);
		process.exit(1); // You might want to exit with a non-zero status code to indicate an error
	}

	console.log(chalk.blue(`Account: ${keypair.toSuiAddress()}`));

	const tx = new Transaction();
	const [upgradeCap] = tx.publish({
		modules,
		dependencies,
	});
	tx.transferObjects([upgradeCap], keypair.toSuiAddress());

	let result: SuiTransactionBlockResponse;
	try {
		result = await client.signAndExecuteTransaction({
			signer: keypair,
			transaction: tx,
			options: {
				showObjectChanges: true,
			},
		});
	} catch (error: any) {
		console.error(chalk.red(`Failed to execute publish, please republish`));
		console.error(error.message);
		process.exit(1);
	}

	if (result.effects?.status.status === 'failure') {
		console.log(chalk.red(`Failed to execute publish, please republish`));
		process.exit(1);
	}

	let version = 1;
	let packageId = '';
	let schemas: schema[] = [];
	let upgradeCapId = '';
	result.objectChanges!.map(object => {
		if (object.type === 'published') {
			console.log(chalk.blue(`${name} PackageId: ${object.packageId}`));
			packageId = object.packageId;
		}
		if (
			object.type === 'created' &&
			object.objectType === '0x2::package::UpgradeCap'
		) {
			console.log(chalk.blue(`${name} UpgradeCap: ${object.objectId}`));
			upgradeCapId = object.objectId;
		}
	});

	console.log(chalk.green(`Publish transaction digest: ${result.digest}`));

	console.log('Executing the deployHook: ');
	const delay = (ms: number) =>
		new Promise(resolve => setTimeout(resolve, ms));
	await delay(5000);

	const deployHookTx = new Transaction();

	deployHookTx.moveCall({
		target: `${packageId}::deploy_hook::run`,
		arguments: [
			deployHookTx.object(dappsObjectId),
			deployHookTx.object('0x6'),
		],
	});

	let deployHookResult: SuiTransactionBlockResponse;
	try {
		deployHookResult = await client.signAndExecuteTransaction({
			signer: keypair,
			transaction: deployHookTx,
			options: {
				showEffects: true,
				showObjectChanges: true,
			},
		});
	} catch (error: any) {
		console.error(
			chalk.red(
				`Failed to execute deployHook, please republish or manually call deploy_hook::run`
			)
		);
		console.error(error.message);
		process.exit(1);
	}

	if (deployHookResult.effects?.status.status === 'success') {
		console.log(
			chalk.green(
				`Successful auto-execution of deployHook, please check the transaction digest: ${deployHookResult.digest}`
			)
		);
		deployHookResult.objectChanges?.map(object => {
			if (
				object.type === 'created' &&
				object.objectType.includes('schema')
			) {
				console.log(
					chalk.blue(`${name} Schema Object id: ${object.objectId}`)
				);
				console.log(
					chalk.blue(
						`${name} Schema Object type: ${object.objectType}`
					)
				);
				schemas.push({
					name: object.objectType,
					objectId: object.objectId,
				});
			}
		});
		saveContractData(
			name,
			network,
			packageId,
			schemas,
			upgradeCapId,
			version
		);
	} else {
		console.log(
			chalk.yellow(
				`Failed to execute deployHook, please republish or manually call deploy_hook::run`
			)
		);
	}
}
