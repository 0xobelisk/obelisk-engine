import { execSync } from 'child_process';
import chalk from 'chalk';

export async function checkLocalNodeStatus() {
	try {
		const output = execSync(
			"ps aux | grep '[s]ui start --with-faucet --force-regenesis'",
			{
				encoding: 'utf8',
			}
		);

		const lines = output.split('\n').filter(Boolean);

		if (lines.length > 0) {
			console.log(chalk.green('✓ Sui Local Node Status: Running'));
			console.log(chalk.gray('Process Details:'));
			for (const line of lines) {
				console.log(chalk.gray(`  ${line}`));
			}
		} else {
			console.log(chalk.red('✗ Sui Local Node Status: Not Running'));
			console.log(
				chalk.yellow(
					'Tip: Use `pnpm run start-localnode` to start the local node'
				)
			);
		}
	} catch (error) {
		console.log(chalk.red('✗ Sui Local Node Status: Not Running'));
		console.log(
			chalk.yellow(
				'Tip: Use `pnpm run start-localnode` to start the local node'
			)
		);
	}
}

// checkLocalNodeStatus();
