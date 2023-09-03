import { ObeliskConfig } from '../../types';
import { formatAndWriteMove } from '../formatAndWrite';
import { getRegisterComponent, getUseComponent } from './common';

export function generateInit(config: ObeliskConfig, srcPrefix: string) {
  let code = `module ${config.project_name}::init {
    use sui::transfer;
    use sui::tx_context::TxContext;
    use withinfinity::world;
${getUseComponent(config.project_name, config.components).join("\n")}

    fun init(ctx: &mut TxContext) {
        let world = world::create_world(ctx);

        // Add Component
${getRegisterComponent(config.components).join("\n")}

        transfer::public_share_object(world);
    }

    #[test_only]
    public fun init_world_for_testing(ctx: &mut TxContext){
        init(ctx)
    }
}
`
  formatAndWriteMove(code, `${srcPrefix}/contracts/${config.project_name}/sources/codegen/init.move`, "formatAndWriteMove");
}