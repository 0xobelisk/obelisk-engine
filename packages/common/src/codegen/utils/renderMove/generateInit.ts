import { ObeliskConfig } from "../../types";
import { formatAndWriteMove } from "../formatAndWrite";
import {
  getRegisterComponent,
  getUseComponent,
  capitalizeFirstLetter,
} from "./common";

export function generateInit(config: ObeliskConfig, srcPrefix: string) {
  let code = `module ${config.name}::init {
    use std::ascii::string;
    use sui::transfer;
    use sui::tx_context::TxContext;
    use ${config.name}::world;
${getUseComponent(config.name, config.components).join("\n")}

    fun init(ctx: &mut TxContext) {
        let _obelisk_world = world::create(string(b"${capitalizeFirstLetter(
          config.name
        )}"), string(b"${capitalizeFirstLetter(
    config.description
  )}"),ctx);

        // Add Component
${getRegisterComponent(config.components).join("\n")}

        transfer::public_share_object(_obelisk_world);
    }

    #[test_only]
    public fun init_world_for_testing(ctx: &mut TxContext){
        init(ctx)
    }
}
`;
  formatAndWriteMove(
    code,
    `${srcPrefix}/contracts/${config.name}/sources/codegen/init.move`,
    "formatAndWriteMove"
  );
}
