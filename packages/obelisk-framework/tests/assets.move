#[test_only]
module obelisk::assets_tests {
    use std::debug;
    use std::string;
    use std::string::String;
    use obelisk::assets_system;
    use obelisk::assets_metadata;
    use obelisk::assets_schema::Assets;
    use obelisk::assets_schema;
    use sui::test_scenario;
    use sui::test_scenario::Scenario;

    public fun init_test(): Scenario {
        let mut scenario = test_scenario::begin(@0xA);
        {
            let ctx = test_scenario::ctx(&mut scenario);
            assets_schema::init_assets_for_testing(ctx);
        };
        test_scenario::next_tx(&mut scenario,@0xA);
        scenario
    }

    public fun create_assets(assets: &mut Assets, name: String, symbol: String, description: String, decimals: u8, url: String, info: String, scenario: &mut Scenario) {
        let ctx = test_scenario::ctx(scenario);
        assets_system::create(assets, name, symbol, description, decimals, url, info, 0, @0xA, @0xA, true, true, true,  ctx);
        test_scenario::next_tx(scenario,@0xA);
    }

    #[test]
    public fun test_init_assets()  {
        let scenario = init_test();

        let assets = test_scenario::take_shared<Assets>(&scenario);

        test_scenario::return_shared<Assets>(assets);
        test_scenario::end(scenario);
    }

    #[test]
    public fun assets_create() {
        let mut scenario = init_test();

        let mut assets = test_scenario::take_shared<Assets>(&scenario);

        let name = string::utf8(b"Obelisk Coin");
        let symbol = string::utf8(b"OBJ");
        let description = string::utf8(b"Obelisk Coin");
        let url = string::utf8(b"");
        let info = string::utf8(b"Obelisk Coin");
        let decimals = 9;
        create_assets(&mut assets, name, symbol, description, decimals, url, info, &mut scenario);
        create_assets(&mut assets, name, symbol, description, decimals, url, info, &mut scenario);

        let metadata = assets.borrow_mut_metadata().get(0);
        assert!(metadata == assets_metadata::new(name, symbol, description, decimals, url, info), 0);
        assert!(2 == assets.borrow_mut_next_asset_id().get(), 0);

        let ctx = test_scenario::ctx(&mut scenario);
        assets_system::mint(&mut assets, 0, ctx.sender(), 100, ctx);
        assets_system::mint(&mut assets, 1, ctx.sender(), 100, ctx);
        assert!(assets_system::balance_of(&assets, 0, ctx.sender()) == 100, 0);
        assert!(assets_system::balance_of(&assets, 0, @0x10000) == 0, 0);
        assert!(assets_system::supply_of(&assets, 0) == 100, 0);
        assert!(assets_system::owned_assets(&assets, ctx.sender()) == vector[0, 1], 0);

        debug::print(&assets_system::owned_assets(&assets, ctx.sender()));
        assets_system::transfer(&mut assets, 0, @0x0002, 50, ctx);
        assert!(assets_system::balance_of(&assets, 0, ctx.sender()) == 50, 0);
        assert!(assets_system::balance_of(&assets, 0, @0x0002) == 50, 0);
        assert!(assets_system::supply_of(&assets, 0) == 100, 0);

        assets_system::burn(&mut assets, 0, ctx.sender(), 50, ctx);
        assert!(assets_system::balance_of(&assets, 0, ctx.sender()) == 0, 0);
        assert!(assets_system::supply_of(&assets, 0) == 50, 0);

        test_scenario::return_shared<Assets>(assets);
        test_scenario::end(scenario);
    }
}