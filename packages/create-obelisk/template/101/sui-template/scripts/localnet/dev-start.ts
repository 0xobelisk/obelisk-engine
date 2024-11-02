import { exec, spawn } from 'child_process';
import chalk from 'chalk';
import { deployFramework } from '../framework/deploy';
import { validateAndUpdatePackageId } from '../framework/parse-history';
import { obeliskConfig } from '../../obelisk.config';

async function deployCounterContract(dappsObjectId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log(chalk.blue(`\n📦 Deploying ${obeliskConfig.name} contract...`));
    const childProcess = spawn(
      'pnpm',
      [
        'obelisk',
        'publish',
        '--network',
        'localnet',
        '--configPath',
        './obelisk.config.ts',
        '--dappsObjectId',
        dappsObjectId,
      ],
      {
        shell: true,
        stdio: 'inherit',
      },
    );

    childProcess.on('exit', code => {
      if (code === 0) {
        console.log(chalk.green(`  ✅ ${obeliskConfig.name} contract deployed successfully`));
        console.log(chalk.blue('\n💾 Storing configuration...'));
        const storeConfigProcess = spawn('ts-node', ['scripts/storeConfig.ts', 'localnet'], {
          stdio: 'inherit',
          shell: true,
        });

        storeConfigProcess.on('exit', storeConfigCode => {
          if (storeConfigCode === 0) {
            console.log(chalk.green('  ✅ Configuration stored successfully'));
            resolve();
          } else {
            console.error(chalk.red(`  ❌ Failed to store configuration. Exit code: ${storeConfigCode}`));
            reject(new Error(`Failed to store configuration. Exit code: ${storeConfigCode}`));
          }
        });
      } else {
        console.error(chalk.red(`  ❌ Deployment failed. Exit code: ${code}`));
        reject(new Error(`Deployment failed. Exit code: ${code}`));
      }
    });
  });
}

async function delay(ms: number) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  try {
    // 1. Deploy framework contract
    console.log(chalk.blue('\n🏗️  Deploying framework contract...'));
    await deployFramework();
    console.log(chalk.green('  ✅ Framework contract deployed successfully'));
    await delay(1000);

    // 2. Parse framework information
    console.log(chalk.blue('\n🔍 Parsing framework information...'));
    const deploymentData = await validateAndUpdatePackageId();
    console.log(chalk.green('  ✅ Framework information parsed successfully'));
    await delay(1000);

    // 3. Deploy counter contract
    const dappsObjectId = deploymentData.dappsObjectId;
    await deployCounterContract(dappsObjectId);

    console.log(chalk.green('\n✅ All operations completed successfully'));
  } catch (error) {
    console.error(chalk.red(`\n❌ Execution failed: ${error}`));
    process.exit(1);
  }
}

// Use IIFE (Immediately Invoked Function Expression) to ensure async code executes correctly
(async () => {
  try {
    await main();
  } catch (error) {
    console.error(chalk.red(`\n❌ Main program execution failed: ${error}`));
    process.exit(1);
  }
})();
