#[test_only]
module obelisk::wrapper_tests {
    use std::ascii;
    use std::ascii::String;
    use obelisk::wrapper_schema;
    use obelisk::assets_system;
    use obelisk::assets_schema::Assets;
    use obelisk::assets_schema;
    use obelisk::wrapper_system;
    use obelisk::wrapper_schema::Wrapper;
    use sui::test_scenario;
    use sui::test_scenario::Scenario;
    use sui::coin;

    public struct USDT has drop {}

    public fun init_test(): Scenario {
        let mut scenario = test_scenario::begin(@0xA);
        {
            let ctx = test_scenario::ctx(&mut scenario);
            assets_schema::init_assets_for_testing(ctx);
            wrapper_schema::init_wrap_for_testing(ctx);
        };
        test_scenario::next_tx(&mut scenario,@0xA);
        scenario
    }

    public fun wrapper_register<T>(wrapper: &mut Wrapper, assets: &mut Assets, name: String, symbol: String, description: String, decimals: u8, url: String, info: String, scenario: &mut Scenario) {
        let ctx = test_scenario::ctx(scenario);
        wrapper_system::register<T>(wrapper, assets, name, symbol, description, decimals, url, info, ctx);
        test_scenario::next_tx(scenario,@0xA);
    }

    #[test]
    public fun wrapper() {
        let mut scenario = init_test();

        let mut wrapper = test_scenario::take_shared<Wrapper>(&scenario);
        let mut assets = test_scenario::take_shared<Assets>(&scenario);
        assets.borrow_mut_next_asset_id().set(0);

        let name = ascii::string(b"USDT");
        let symbol = ascii::string(b"USDT");
        let description = ascii::string(b"USDT");
        let url = ascii::string(b"");
        let info = ascii::string(b"USDT");
        let decimals = 6;
        wrapper_register<USDT>(&mut wrapper, &mut assets, name, symbol, description, decimals, url, info, &mut scenario);

        let ctx = test_scenario::ctx(&mut scenario);
        let amount = 1000000;

        let usdt = coin::mint_for_testing<USDT>(amount, ctx);
        let beneficiary = ctx.sender();
        wrapper_system::wrap(&mut wrapper, &mut assets, usdt, beneficiary, ctx);
        assert!(assets_system::balance_of(&assets,0, beneficiary) == amount, 0);
        assert!(assets_system::supply_of(&assets,0) == amount, 1);
        assert!(wrapper_system::wrapped_assets(&wrapper, &assets) == vector[0], 2);

        wrapper_system::unwrap<USDT>(&mut wrapper, &mut assets, amount, beneficiary, ctx);
        assert!(assets_system::balance_of(&assets, 0, beneficiary) == 0, 1);

        let usdt = coin::mint_for_testing<USDT>(amount, ctx);
        wrapper_system::wrap(&mut wrapper, &mut assets, usdt, beneficiary, ctx);
        assert!(assets_system::balance_of(&assets,0, beneficiary) == amount, 0);
        assert!(assets_system::supply_of(&assets,0) == amount, 1);
        assert!(wrapper_system::wrapped_assets(&wrapper, &assets) == vector[0], 2);

        let usdt = coin::mint_for_testing<USDT>(amount, ctx);
        wrapper_system::wrap(&mut wrapper, &mut assets, usdt, beneficiary, ctx);
        assert!(assets_system::balance_of(&assets,0, beneficiary) == amount * 2, 0);
        assert!(assets_system::supply_of(&assets,0) == amount * 2, 1);
        assert!(wrapper_system::wrapped_assets(&wrapper, &assets) == vector[0], 2);

        let usdt = coin::mint_for_testing<USDT>(amount, ctx);
        wrapper_system::wrap(&mut wrapper, &mut assets, usdt, beneficiary, ctx);
        assert!(assets_system::balance_of(&assets,0, beneficiary) == amount * 3, 0);
        assert!(assets_system::supply_of(&assets,0) == amount * 3, 1);
        assert!(wrapper_system::wrapped_assets(&wrapper, &assets) == vector[0], 2);

        test_scenario::return_shared<Wrapper>(wrapper);
        test_scenario::return_shared<Assets>(assets);
        test_scenario::end(scenario);
    }
}