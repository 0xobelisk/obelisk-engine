import { ObeliskConfig } from "../../types";
import { formatAndWriteMove } from "../formatAndWrite";
import {
  getRegisterSchema,
  getUseSchema,
  capitalizeFirstLetter,
} from "./common";

export function generateInit(config: ObeliskConfig, srcPrefix: string) {
  let code = `#[allow(lint(share_owned))] 

module ${config.name}::init {
    use std::ascii::string;
    use ${config.name}::app_key::AppKey;
    use obelisk::access_control;
    use obelisk::world;
${getUseSchema(config.name, config.schemas).join("\n")}

    fun init(ctx: &mut TxContext) {
        let (mut _obelisk_world, admin_cap) = world::create(string(b"${capitalizeFirstLetter(
          config.name
        )}"), string(b"${capitalizeFirstLetter(config.description)}"),ctx);
        
        // Authorize this application to access protected features of the World.
        access_control::authorize_app<AppKey>(&admin_cap, &mut _obelisk_world);

        // Add Schema
${getRegisterSchema(config.schemas).join("\n")}

        transfer::public_share_object(_obelisk_world);
        transfer::public_transfer(admin_cap, tx_context::sender(ctx));
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
