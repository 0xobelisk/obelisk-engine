import * as fsAsync from "fs/promises";
import { mkdirSync, writeFileSync } from "fs";
import { dirname } from "path";
import { FsIibError } from "./errors";

export type DeploymentJsonType = {
  projectName: string;
  network: "mainnet" | "testnet" | "devnet" | "localnet";
  packageId: string;
  worldId: string;
  upgradeCap: string;
  version: number;
};

export function validatePrivateKey(privateKey: string): boolean | string {
  if (privateKey.startsWith("0x")) {
    const strippedPrivateKey = privateKey.slice(2);
    if (strippedPrivateKey.length === 64) {
      return strippedPrivateKey;
    } else {
      return false;
    }
  } else {
    if (privateKey.length === 64) {
      return privateKey;
    } else {
      return false;
    }
  }
}

export async function updateVersionInFile(
  projectPath: string,
  newVersion: string
) {
  try {
    const filePath = `${projectPath}/sources/codegen/eps/world.move`;
    const data = await fsAsync.readFile(filePath, "utf8");

    // update version data
    const updatedData = data.replace(
      /const VERSION: u64 = \d+;/,
      `const VERSION: u64 = ${newVersion};`
    );

    // write new version
    writeOutput(updatedData, filePath, "Update package version");
  } catch {
    throw new FsIibError("Fs update version failed.");
  }
}

async function getDeploymentJson(projectPath: string) {
  try {
    const data = await fsAsync.readFile(
      `${projectPath}/.history/deployment.json`,
      "utf8"
    );
    return JSON.parse(data) as DeploymentJsonType;
  } catch {
    throw new FsIibError("Fs read deployment file failed.");
  }
}

export async function getVersion(projectPath: string): Promise<number> {
  const deployment = await getDeploymentJson(projectPath);
  return deployment.version;
}

export async function getNetwork(
  projectPath: string
): Promise<"mainnet" | "testnet" | "devnet" | "localnet"> {
  const deployment = await getDeploymentJson(projectPath);
  return deployment.network;
}

export async function getOldPackageId(projectPath: string): Promise<string> {
  const deployment = await getDeploymentJson(projectPath);
  return deployment.packageId;
}

export async function getWorldId(projectPath: string): Promise<string> {
  const deployment = await getDeploymentJson(projectPath);
  return deployment.worldId;
}

export async function getUpgradeCap(projectPath: string): Promise<string> {
  const deployment = await getDeploymentJson(projectPath);
  return deployment.upgradeCap;
}

export function saveContractData(
  projectName: string,
  network: "mainnet" | "testnet" | "devnet" | "localnet",
  packageId: string,
  worldId: string,
  upgradeCap: string,
  version: number
) {
  const DeploymentData: DeploymentJsonType = {
    projectName,
    network,
    packageId,
    worldId,
    upgradeCap,
    version,
  };

  const path = process.cwd();
  const storeDeploymentData = JSON.stringify(DeploymentData, null, 2);
  writeOutput(
    storeDeploymentData,
    `${path}/contracts/${projectName}/.history/deployment.json`,
    "Update deploy log"
  );
}

export async function writeOutput(
  output: string,
  fullOutputPath: string,
  logPrefix?: string
): Promise<void> {
  mkdirSync(dirname(fullOutputPath), { recursive: true });

  writeFileSync(fullOutputPath, output);
  if (logPrefix !== undefined) {
    console.log(`${logPrefix}: ${fullOutputPath}`);
  }
}
