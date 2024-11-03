import { SchemaType, DubheConfig } from '../../types';
import { rmdirSync, existsSync } from 'fs';
import { deleteFolderRecursive } from './common';
import { generateSystem } from './generateSystem';
import { generateToml } from './generateToml';
import { generateSchemaData, generateSchemaStructure } from './generateSchema';
import { generateDeployHook, generateMigrate } from './generateScript';
import { generateDappKey } from './generateDappKey';

function matchFrameworkId(
	network: 'mainnet' | 'testnet' | 'devnet' | 'localnet'
): string {
	switch (network) {
		case 'testnet':
			return '0x3dc2d6239eed38c9798444afbf4bada0998ec98edc365713864405fe64203256';
		case 'localnet':
			return '0x3dc2d6239eed38c9798444afbf4bada0998ec98edc365713864405fe64203256';
		default:
			return '0x3dc2d6239eed38c9798444afbf4bada0998ec98edc365713864405fe64203256';
	}
}

export async function schemaGen(
	config: DubheConfig,
	srcPrefix?: string,
	network?: 'mainnet' | 'testnet' | 'devnet' | 'localnet',
	frameworkId?: string
) {
	console.log('\n🚀 Starting Schema Generation Process...');
	console.log('📋 Project Configuration:');
	console.log(`  ├─ Name: ${config.name}`);
	console.log(
		`  ├─ Description: ${config.description || 'No description provided'}`
	);
	console.log(`  ├─ Network: ${network || 'testnet'}`);
	console.log(
		`  └─ Framework ID: ${
			frameworkId || matchFrameworkId(network ?? 'testnet')
		}\n`
	);

	const path = srcPrefix ?? process.cwd();

	frameworkId = frameworkId || matchFrameworkId(network ?? 'testnet');

	if (existsSync(`${path}/contracts/${config.name}`)) {
		deleteFolderRecursive(
			`${path}/contracts/${config.name}/sources/codegen`
		);
	}

	if (!existsSync(`${path}/contracts/${config.name}/Move.toml`)) {
		await generateToml(config, path, frameworkId);
	}

	if (
		!existsSync(
			`${path}/contracts/${config.name}/sources/script/deploy_hook.move`
		)
	) {
		await generateDeployHook(config, path);
	}

	await generateSystem(config, path);
	await generateSchemaData(config.name, config.schemas, path);
	await generateSchemaStructure(config.name, config.schemas, path);
	await generateDappKey(config, path);
	console.log('✅ Schema Generation Process Complete!\n');
}
