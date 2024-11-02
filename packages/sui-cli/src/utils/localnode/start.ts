import { execSync, spawn } from 'child_process';
import chalk from 'chalk';

function isSuiStartRunning(): boolean {
	try {
		const result = execSync('pgrep -f "sui start"').toString().trim();
		return result.length > 0;
	} catch (error) {
		return false;
	}
}

export async function startLocalnode(background: boolean = false) {
	console.log(chalk.blue('Checking if sui start process is running...'));

	if (isSuiStartRunning()) {
		console.log(
			chalk.yellow('Warning: sui start process is already running.')
		);
		console.log(
			chalk.yellow(
				'Cannot start a new local node. Please stop the existing sui start process first.'
			)
		);
		return;
	}

	console.log(chalk.green('Starting local node...'));
	try {
		const suiProcess = spawn(
			'sui',
			['start', '--with-faucet', '--force-regenesis'],
			{
				env: { ...process.env, RUST_LOG: 'off,sui_node=info' },
				stdio: background ? 'ignore' : 'inherit',
				detached: background,
			}
		);

		suiProcess.on('error', error => {
			console.error(chalk.red('Failed to start local node:'), error);
		});

		if (!background) {
			suiProcess.on('exit', code => {
				if (code === 0) {
					console.log(chalk.green('Local node has exited normally'));
				} else {
					console.error(
						chalk.red(
							`Local node exited abnormally with code: ${code}`
						)
					);
				}
			});

			console.log(chalk.cyan('Local node is running...'));
			console.log(chalk.cyan('Press Ctrl+C to stop the local node'));

			// Keep the script running
			await new Promise(() => {});
		} else {
			suiProcess.unref();
			console.log(
				chalk.green('Local node has been started in the background')
			);
			console.log(
				chalk.cyan(
					'Use "pgrep -f \'sui start\'" to check the process ID'
				)
			);
			console.log(
				chalk.cyan(
					'Use "kill <process_id>" to stop the background node'
				)
			);
		}
	} catch (error) {
		console.error(chalk.red('Failed to start local node:'), error);
	}
}

// Get the background flag from command line arguments
const args = process.argv.slice(2);
const runInBackground = args.includes('--background') || args.includes('-b');

// startLocalnode(runInBackground);
