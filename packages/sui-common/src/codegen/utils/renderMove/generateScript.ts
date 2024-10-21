import { ObeliskConfig } from "../../types";
import { formatAndWriteMove } from "../formatAndWrite";
import { existsSync } from "fs";

export function generateDeployHook(config: ObeliskConfig, srcPrefix: string) {
    if (
        !existsSync(
            `${srcPrefix}/contracts/${config.name}/sources/script/deploy_hook.move`
        )
    ) {
        let code = `module ${config.name}::deploy_hook {
    use obelisk::dapps_schema::Dapps;
    use obelisk::dapps_system;
    use examples::dapp_key::DappKey;
    use std::ascii;
    use sui::clock::Clock;

    public entry fun run(dapps: &mut Dapps, clock: &Clock, ctx: &mut TxContext) {
        // Register the dapp to obelisk.
        dapps_system::register<DappKey>(
            dapps,
            ascii::string(b"example"),
            ascii::string(b"example"),
            clock,
            ctx
        );

        // Logic that needs to be automated once the contract is deployed

    }

    #[test_only]
    public fun deploy_hook_for_testing(dapp: &mut Dapps, clock: &Clock, ctx: &mut TxContext){
        ${Object.keys(config.schemas).map(schemaName => {
            return `examples::${schemaName}_schema::init_${schemaName}_for_testing(ctx);`
        }).join("\n")}
        run(dapp, clock, ctx)
    }
}
`;
        formatAndWriteMove(
            code,
            `${srcPrefix}/contracts/${config.name}/sources/script/deploy_hook.move`,
            "formatAndWriteMove"
        );
    }
}

export function generateMigrate(config: ObeliskConfig, srcPrefix: string) {
    if (
        !existsSync(
            `${srcPrefix}/contracts/${config.name}/sources/script/migrate.move`
        )
    ) {
        let code = `module ${config.name}::migrate {
    use obelisk::world::{World, AdminCap};

    /// Not the right admin for this world
    const ENotAdmin: u64 = 0;
    const EWrongVersion: u64 = 1;
    const ENotUpgrade: u64 = 2;
    const VERSION: u64 = 1;

    public entry fun run(world: &mut World, admin_cap: &AdminCap) {
        assert!(world.admin() == object::id(admin_cap), ENotAdmin);
        assert!(world.version() < VERSION, ENotUpgrade);
        *obelisk::world::mut_version(world, admin_cap) = VERSION;
    }

    public fun assert_version(world: &World){
        assert!(world.version() == VERSION, EWrongVersion);
    }
}
`;
        formatAndWriteMove(
            code,
            `${srcPrefix}/contracts/${config.name}/sources/script/migrate.move`,
            "formatAndWriteMove"
        );
    }
}

