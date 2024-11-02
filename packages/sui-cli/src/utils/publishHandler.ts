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
	console.log('\n🚀 Starting Contract Publication...');
	console.log(`  ├─ Project: ${name}`);
	console.log(`  ├─ Network: ${network}`);

	const path = process.cwd();
	const projectPath = `${path}/contracts/${name}`;
	dappsObjectId = dappsObjectId || (await getDappsObjectId(network));

	console.log('  ├─ Validating Environment...');
	const privateKey = process.env.PRIVATE_KEY;
	if (!privateKey) {
		throw new ObeliskCliError(
			`Missing PRIVATE_KEY environment variable.
Run 'echo "PRIVATE_KEY=YOUR_PRIVATE_KEY" > .env'
in your contracts directory to use the default sui private key.`
		);
	}

	const privateKeyFormat = validatePrivateKey(privateKey);
	if (privateKeyFormat === false) {
		throw new ObeliskCliError(`Please check your privateKey.`);
	}

	const obelisk = new Obelisk({ secretKey: privateKeyFormat });
	const keypair = obelisk.getKeypair();
	console.log(`  └─ Account: ${keypair.toSuiAddress()}`);

	const client = new SuiClient({ url: getFullnodeUrl(network) });

	console.log('\n📦 Building Contract...');
	let modules: any, dependencies: any;
	try {
		const buildResult = JSON.parse(
			execSync(
				`sui move build --dump-bytecode-as-base64 --path ${projectPath}`,
				{
					encoding: 'utf-8',
				}
			)
		);
		modules = buildResult.modules;
		dependencies = buildResult.dependencies;
		console.log('  └─ Build successful');
	} catch (error: any) {
		console.error(chalk.red('  └─ Build failed'));
		console.error(error.stdout);
		process.exit(1);
	}

	console.log('\n🔄 Publishing Contract...');
	const tx = new Transaction();
	const [upgradeCap] = tx.publish({ modules, dependencies });
	tx.transferObjects([upgradeCap], keypair.toSuiAddress());

	let result: SuiTransactionBlockResponse;
	try {
		result = await client.signAndExecuteTransaction({
			signer: keypair,
			transaction: tx,
			options: { showObjectChanges: true },
		});
	} catch (error: any) {
		console.error(chalk.red('  └─ Publication failed'));
		console.error(error.message);
		process.exit(1);
	}

	if (result.effects?.status.status === 'failure') {
		console.log(chalk.red('  └─ Publication failed'));
		process.exit(1);
	}

	console.log('  ├─ Processing publication results...');
	let version = 1;
	let packageId = '';
	let schemas: schema[] = [];
	let upgradeCapId = '';

	result.objectChanges!.map(object => {
		if (object.type === 'published') {
			console.log(`  ├─ Package ID: ${object.packageId}`);
			packageId = object.packageId;
		}
		if (
			object.type === 'created' &&
			object.objectType === '0x2::package::UpgradeCap'
		) {
			console.log(`  ├─ Upgrade Cap: ${object.objectId}`);
			upgradeCapId = object.objectId;
		}
	});

	console.log(`  └─ Transaction: ${result.digest}`);

	console.log('\n⚡ Executing Deploy Hook...');
	await new Promise(resolve => setTimeout(resolve, 5000));

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
			options: { showEffects: true, showObjectChanges: true },
		});
	} catch (error: any) {
		console.error(chalk.red('  └─ Deploy hook execution failed'));
		console.error(error.message);
		process.exit(1);
	}

	if (deployHookResult.effects?.status.status === 'success') {
		console.log('  ├─ Hook execution successful');
		console.log(`  ├─ Transaction: ${deployHookResult.digest}`);

		console.log('\n📋 Created Schemas:');
		deployHookResult.objectChanges?.map(object => {
			if (
				object.type === 'created' &&
				object.objectType.includes('schema')
			) {
				console.log(`  ├─ ${object.objectType}`);
				console.log(`     └─ ID: ${object.objectId}`);
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
		console.log('\n✅ Contract Publication Complete\n');
	} else {
		console.log(chalk.yellow('  └─ Deploy hook execution failed'));
		console.log(
			chalk.yellow(
				'     Please republish or manually call deploy_hook::run'
			)
		);
	}
}
