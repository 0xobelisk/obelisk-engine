import { ObeliskConfig } from '../../types';
import { formatAndWriteMove } from '../formatAndWrite';

export function generateSystem(config: ObeliskConfig, srcPrefix: string) {
  config.systems.map((systemName) => {
    let code = `module ${config.project_name}::${systemName} {

}
`
    formatAndWriteMove(code, `${srcPrefix}/contracts/${config.project_name}/sources/system/${systemName}.move`, "formatAndWriteMove");
  })
}