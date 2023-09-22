import { ObeliskConfig } from '../../types';
import { formatAndWriteMove } from '../formatAndWrite';

export function generateSystem(config: ObeliskConfig, srcPrefix: string) {
  config.systems.map((systemName) => {
    let code = `module ${config.name}::${systemName} {

}
`
    formatAndWriteMove(code, `${srcPrefix}/contracts/${config.name}/sources/system/${systemName}.move`, "formatAndWriteMove");
  })
}