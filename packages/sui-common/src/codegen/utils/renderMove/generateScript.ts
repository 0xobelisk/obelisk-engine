import { ObeliskConfig } from '../../types';
import { formatAndWriteMove } from '../formatAndWrite';
import { existsSync } from 'fs';

export async function generateDeployHook(
	config: ObeliskConfig,
	srcPrefix: string
) {
	console.log('\n📝 Starting Deploy Hook Generation...');
	console.log(
		`  └─ Output path: ${srcPrefix}/contracts/${config.name}/sources/script/deploy_hook.move`
	);

	if (
		!existsSync(
			`${srcPrefix}/contracts/${config.name}/sources/script/deploy_hook.move`
		)
	) {
		let code = `module ${config.name}::deploy_hook {
    use obelisk::dapps_schema::Dapps;
    use obelisk::dapps_system;
    use ${config.name}::dapp_key::DappKey;
    use std::ascii;
    use sui::clock::Clock;
    use sui::transfer::public_share_object;
    #[test_only]
      use obelisk::dapps_schema;
      #[test_only]
      use sui::clock;
      #[test_only]
      use sui::test_scenario;
      #[test_only]
      use sui::test_scenario::Scenario;

    public entry fun run(dapps: &mut Dapps, clock: &Clock, ctx: &mut TxContext) {
        // Register the dapp to obelisk.
        dapps_system::register<DappKey>(
            dapps,
            ascii::string(b"${config.name}"),
            ascii::string(b"${config.description}"),
            clock,
            ctx
        );
        ${Object.keys(config.schemas)
			.map(schemaName => {
				return `let ${schemaName} = ${config.name}::${schemaName}_schema::register(dapps, ctx);`;
			})
			.join('\n')}
        // Logic that needs to be automated once the contract is deployed


        // Share the dapp object with the public
        ${Object.keys(config.schemas)
			.map(schemaName => {
				return `public_share_object(${schemaName});`;
			})
			.join('\n')}
    }

    #[test_only]
    public fun deploy_hook_for_testing(): (Scenario, Dapps) {
      let mut scenario = test_scenario::begin(@0xA);
      {
          let ctx = test_scenario::ctx(&mut scenario);
          dapps_schema::init_dapps_for_testing(ctx);
          test_scenario::next_tx(&mut scenario,@0xA);
      };
      let mut dapps = test_scenario::take_shared<Dapps>(&scenario);
      let ctx = test_scenario::ctx(&mut scenario);
      let clock = clock::create_for_testing(ctx);
      run(&mut dapps, &clock, ctx);
      clock::destroy_for_testing(clock);
      test_scenario::next_tx(&mut scenario,@0xA);
      (scenario, dapps)
  }
}
`;
		await formatAndWriteMove(
			code,
			`${srcPrefix}/contracts/${config.name}/sources/script/deploy_hook.move`,
			'formatAndWriteMove'
		);
	}
	console.log('✅ Deploy Hook Generation Complete\n');
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
			'formatAndWriteMove'
		);
	}
}
