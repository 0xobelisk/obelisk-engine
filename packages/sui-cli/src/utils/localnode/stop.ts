import { execSync } from 'child_process';

export async function stopLocalnode() {
	console.log('Stopping local node...');

	try {
		// Find localnode process using ps command
		const output = execSync(
			"ps aux | grep '[s]ui start --with-faucet --force-regenesis'",
			{
				encoding: 'utf8',
			}
		);

		if (!output) {
			console.log('No running local node process found');
			return;
		}

		// Get process ID
		const pid = output.toString().split(/\s+/)[1];

		// Kill the process
		process.kill(Number(pid));
		console.log('✅ Local node stopped successfully');
	} catch (error: any) {
		if (error.code === 'ESRCH') {
			console.log('No running local node process found');
		} else {
			console.error('❌ Error stopping local node:', error.message);
		}
	}
}

// stopLocalnode();
