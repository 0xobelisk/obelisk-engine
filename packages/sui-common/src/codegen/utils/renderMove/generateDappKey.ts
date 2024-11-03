import { DubheConfig } from '../../types';
import { formatAndWriteMove } from '../formatAndWrite';

export async function generateDappKey(
	config: DubheConfig,
	srcPrefix: string
) {
	console.log('\n🔑 Starting DappKey Generation...');
	console.log(
		`  └─ Output path: ${srcPrefix}/contracts/${config.name}/sources/codegen/dapp_key.move`
	);

	let code = `module ${config.name}::dapp_key {
\t/// Authorization token for the app.
\tpublic struct DappKey has drop {}

\tpublic(package) fun new(): DappKey {
\t\tDappKey {  }
\t}
}
`;
	await formatAndWriteMove(
		code,
		`${srcPrefix}/contracts/${config.name}/sources/codegen/dapp_key.move`,
		'formatAndWriteMove'
	);
	console.log('✅ DappKey Generation Complete\n');
}
