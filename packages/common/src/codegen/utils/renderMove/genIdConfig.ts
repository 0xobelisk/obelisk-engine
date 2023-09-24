import { ObeliskConfig } from "../../types";
import { formatAndWriteMove } from "../formatAndWrite";

export function generateIdConfig(
  network: string,
  packageId: string,
  worldId: string,
  savePath: string
) {
  let code = `type NetworkType = 'testnet' | 'mainnet' | 'devnet' | 'localnet';

const NETWORK: NetworkType = '${network}';

const PACKAGE_ID = '${packageId}'
const WORLD_ID = '${worldId}'

export {
    NETWORK,
    PACKAGE_ID,
    WORLD_ID,
}
`;
  const path = process.cwd();
  formatAndWriteMove(code, `${path}/${savePath}`, "formatAndWriteMove");
}

export function saveContractData(
  projectName: string,
  network: string,
  packageId: string,
  worldId: string,
  upgradeCap: string,
  version: number
) {
  const path = process.cwd();
  const savePath = `${path}/contracts/${projectName}/.history`;
  formatAndWriteMove(network, `${savePath}/network`);
  formatAndWriteMove(packageId, `${savePath}/package_id`);
  formatAndWriteMove(worldId, `${savePath}/world_id`);
  formatAndWriteMove(upgradeCap, `${savePath}/upgrade_cap`);
  formatAndWriteMove(version.toString(), `${savePath}/version`);
}
