import { execSync, spawn } from 'child_process';
import chalk from 'chalk';

function isSuiStartRunning(): boolean {
	try {
		const cmd =
			process.platform === 'win32'
				? `tasklist /FI "IMAGENAME eq sui.exe" /FO CSV /NH`
				: 'pgrep -f "sui start"';

		const result = execSync(cmd).toString().trim();
		return process.platform === 'win32'
			? result.toLowerCase().includes('sui.exe')
			: result.length > 0;
	} catch (error) {
		return false;
	}
}

export async function startLocalnode(background: boolean = false) {
	console.log('\n🔍 Checking Local Node Status...');
	console.log('  ├─ Scanning running processes');

	if (isSuiStartRunning()) {
		console.log(chalk.yellow('\n⚠️  Warning: Local Node Already Running'));
		console.log(chalk.yellow('  ├─ Cannot start a new instance'));
		console.log(
			chalk.yellow('  └─ Please stop the existing process first')
		);
		return;
	}

	console.log('\n🚀 Starting Local Node...');
	console.log('  ├─ Mode: ' + (background ? 'Background' : 'Foreground'));
	console.log('  ├─ Faucet: Enabled');
	console.log('  └─ Force Regenesis: Yes');

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
			console.error(chalk.red('\n❌ Failed to Start Local Node'));
			console.error(chalk.red(`  └─ Error: ${error.message}`));
		});

		if (!background) {
			suiProcess.on('exit', code => {
				if (code === 0) {
					console.log(chalk.green('\n✅ Local Node Stopped'));
					console.log(chalk.green('  └─ Exit Status: Normal'));
				} else {
					console.error(chalk.red('\n❌ Local Node Crashed'));
					console.error(chalk.red(`  └─ Exit Code: ${code}`));
				}
			});

			console.log(chalk.cyan('\n📡 Local Node Running'));
			console.log(chalk.cyan('  └─ Press Ctrl+C to stop'));

			await new Promise(() => {});
		} else {
			suiProcess.unref();
			console.log(chalk.green('\n✅ Local Node Started in Background'));

			if (process.platform === 'win32') {
				console.log('\n💡 Helpful Commands:');
				console.log('  ├─ Check Process: tasklist | findstr sui.exe');
				console.log('  └─ Stop Node: taskkill /PID <process_id> /F');
			} else {
				console.log('\n💡 Helpful Commands:');
				console.log("  ├─ Check Process: pgrep -f 'sui start'");
				console.log('  └─ Stop Node: kill <process_id>');
			}
		}
	} catch (error: any) {
		console.error(chalk.red('\n❌ Failed to Start Local Node'));
		console.error(chalk.red(`  └─ Error: ${error.message}`));
	}
}
