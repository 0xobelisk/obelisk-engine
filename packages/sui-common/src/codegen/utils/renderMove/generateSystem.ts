import { ObeliskConfig } from "../../types";
import { formatAndWriteMove } from "../formatAndWrite";
import { existsSync } from "fs";

export function generateSystem(config: ObeliskConfig, srcPrefix: string) {
  config.systems.map((systemName) => {
    if (
      !existsSync(
        `${srcPrefix}/contracts/${config.name}/sources/system/${systemName}.move`
      )
    ) {
      let code = `module ${config.name}::${systemName} {

}
`;
      formatAndWriteMove(
        code,
        `${srcPrefix}/contracts/${config.name}/sources/system/${systemName}.move`,
        "formatAndWriteMove"
      );
    }
  });
}
