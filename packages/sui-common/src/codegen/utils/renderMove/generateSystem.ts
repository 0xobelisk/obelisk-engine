import { ObeliskConfig } from "../../types";
import { formatAndWriteMove } from "../formatAndWrite";
import { existsSync } from "fs";

export async function generateSystem(config: ObeliskConfig, srcPrefix: string) {
  config.systems.map(async (systemName) => {
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
                "formatAndWriteMove"
            );
    }
  });
}
