import { ObeliskConfig } from "../../types";
import { formatAndWriteMove } from "../formatAndWrite";

export async function generateDappKey(config: ObeliskConfig, srcPrefix: string) {
  let code = `module ${config.name}::dapp_key {
  /// Authorization token for the app.
    public struct DappKey has drop {}

    public(package) fun new(): DappKey {
        DappKey {  }
    }
}
`;
  await formatAndWriteMove(
    code,
    `${srcPrefix}/contracts/${config.name}/sources/codegen/dapp_key.move`,
    "formatAndWriteMove"
  );
}
