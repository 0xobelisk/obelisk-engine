import { ObeliskConfig } from '../../types';
import { formatAndWriteMove } from '../formatAndWrite';
import {
  capitalizeFirstLetter, getFriendSystem,
  renderAddFunc, renderContainFunc,
  renderNewStructFunc, renderQueryFunc,
  renderRegisterFunc,
  renderRemoveFunc,
  renderStruct, renderUpdateFunc,
} from './common';

export function generateComponent(config: ObeliskConfig, srcPrefix: string) {
  Object.entries(config.components).forEach(([componentName, value]) => {
    let code = `module ${config.project_name}::${componentName}_component {
    use sui::tx_context::TxContext;
    use sui::table::{Self, Table};
    use ${config.project_name}::world::{Self , World};
  
    // Systems
    ${getFriendSystem(config.project_name,config.systems)}
      
  const COMPONENT_NAME: vector<u8> = b"${capitalizeFirstLetter(componentName)} Component";
    
  ${renderStruct(componentName, value)}
  ${renderNewStructFunc(componentName, value)}
  ${renderRegisterFunc(componentName, value)}
  ${renderAddFunc(componentName, value)}
  ${renderRemoveFunc(componentName)}
  ${renderUpdateFunc(componentName, value)}
  ${renderQueryFunc(componentName, value)}
  ${renderContainFunc(componentName)}
}
`
    formatAndWriteMove(code, `${srcPrefix}/contracts/${config.project_name}/sources/codegen/components/${componentName}.move`, "formatAndWriteMove");
  })
}