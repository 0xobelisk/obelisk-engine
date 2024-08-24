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
    use obelisk::world::{World, AdminCap};

    /// Not the right admin for this world
    const ENotAdmin: u64 = 0;

    public entry fun run(world: &mut World, admin_cap: &AdminCap) {
         assert!(world.admin() == object::id(admin_cap), ENotAdmin);
        
        // Logic that needs to be automated once the contract is deployed
        
    }

    #[test_only]
    public fun deploy_hook_for_testing(world: &mut World, admin_cap: &AdminCap){
        run(world, admin_cap)
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

