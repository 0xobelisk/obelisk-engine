import { ObeliskConfig } from '../../types';
import { formatAndWriteMove } from '../formatAndWrite';
import { existsSync } from 'fs';

export async function generateSystem(config: ObeliskConfig, srcPrefix: string) {
	console.log('\n⚙️ Starting System Generation...');
	config.systems.map(async systemName => {
		console.log(`  ├─ Generating system: ${systemName}`);
		console.log(
			`     └─ Output path: ${srcPrefix}/contracts/${config.name}/sources/system/${systemName}.move`
		);

		if (
			!existsSync(
				`${srcPrefix}/contracts/${config.name}/sources/system/${systemName}.move`
			)
		) {
			let code = `module ${config.name}::${systemName}_system {

}
`;
			await formatAndWriteMove(
				code,
				`${srcPrefix}/contracts/${config.name}/sources/system/${systemName}.move`,
				'formatAndWriteMove'
			);
		}
	});
	console.log('✅ System Generation Complete\n');
}
