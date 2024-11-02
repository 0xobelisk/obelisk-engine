import { loadMetadata } from '@0xobelisk/sui-client';
import { obeliskConfig } from '../../obelisk.config';
import * as fsAsync from 'fs/promises';
import * as path from 'path';
import chalk from 'chalk';

export type DeploymentJsonType = {
  projectName: string;
  network: 'mainnet' | 'testnet' | 'devnet' | 'localnet';
  packageId: string;
  upgradeCap: string;
  dappsObjectId: string;
  version: number;
};

export async function getDeploymentJson(projectPath: string, network: string): Promise<DeploymentJsonType> {
  try {
    const data = await fsAsync.readFile(
      `${projectPath}/localnet/obelisk-framework/.history/sui_${network}/latest.json`,
      'utf8',
    );
    return JSON.parse(data) as DeploymentJsonType;
  } catch {
    throw new Error('Failed to read deployment history file');
  }
}

async function updateMoveToml(packageName: string, obeliskPackageId: string) {
  const moveTomlPath = path.join(process.cwd(), 'contracts', packageName, 'Move.toml');

  try {
    let content = await fsAsync.readFile(moveTomlPath, 'utf8');

    // Update Obelisk dependency
    content = content.replace(/Obelisk = \{[^}]+\}/, `Obelisk = { local = "../../localnet/obelisk-framework" }`);

    // Update regex to match possible multiple spaces
    content = content.replace(/^obelisk\s+=\s+"0x[0-9a-fA-F]+"/m, `obelisk = "${obeliskPackageId}"`);

    await fsAsync.writeFile(moveTomlPath, content);
    console.log(chalk.green(`Successfully updated ${moveTomlPath}`));
  } catch (error) {
    console.error(chalk.red(`Failed to update Move.toml: ${error}`));
    throw error;
  }
}

export async function validateAndUpdatePackageId(): Promise<DeploymentJsonType> {
  const network = 'localnet';
  const projectPath = process.cwd();

  try {
    const packageName = obeliskConfig.name;

    if (!packageName) {
      throw new Error('Package name not found in the config file');
    }

    // Get historical deployment information
    const deploymentData = await getDeploymentJson(projectPath, network);

    // Verify if packageId exists on chain
    try {
      const metadata = await loadMetadata(network, deploymentData.packageId);
      if (!metadata) {
        throw new Error('PackageId does not exist on chain');
      }

      console.log(chalk.green(`Verification successful: PackageId ${deploymentData.packageId} exists on chain`));

      // Update Move.toml file
      await updateMoveToml(packageName, deploymentData.packageId);

      console.log(chalk.green('All updates completed successfully'));
      return deploymentData;
    } catch (error) {
      console.error(chalk.red(`Verification failed: ${error}`));
      throw error;
    }
  } catch (error) {
    console.error(chalk.red(`Processing failed: ${error}`));
    throw error;
  }
}

// Export main function
export async function parseAndUpdateFramework() {
  try {
    const packageId = await validateAndUpdatePackageId();
    return packageId;
  } catch (error) {
    console.error(chalk.red(`Framework update failed: ${error}`));
    process.exit(1);
  }
}
