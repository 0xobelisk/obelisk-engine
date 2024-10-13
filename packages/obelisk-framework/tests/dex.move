#[test_only]
module obelisk::dex_tests {
    use std::debug;
    use std::string;
    use obelisk::dex_pools;
    use obelisk::dex_system;
    use obelisk::dex_schema::Dex;
    use obelisk::assets_tests;
    use obelisk::dex_schema;
    use obelisk::assets_system;
    use obelisk::assets_schema::Assets;
    use obelisk::assets_schema;
    use sui::test_scenario;
    use sui::test_scenario::Scenario;

    public fun init_test(): (Assets, Scenario) {
        let mut scenario = test_scenario::begin(@0xA);
        {
            let ctx = test_scenario::ctx(&mut scenario);
            assets_schema::init_assets_for_testing(ctx);
            dex_schema::init_dex_for_testing(ctx);
        };
        test_scenario::next_tx(&mut scenario,@0xA);

        let mut assets = test_scenario::take_shared<Assets>(&scenario);
        let name = string::utf8(b"Poils Coin");
        let symbol = string::utf8(b"POL");
        let description = string::utf8(b"");
        let url = string::utf8(b"");
        let info = string::utf8(b"");
        let decimals = 9;
        assets_tests::create_assets(&mut assets, name, symbol, description, decimals, url, info, &mut scenario);
        assets_tests::create_assets(&mut assets, name, symbol, description, decimals, url, info, &mut scenario);
        assets_tests::create_assets(&mut assets, name, symbol, description, decimals, url, info, &mut scenario);

        let ctx = test_scenario::ctx(&mut scenario);
        assets_system::mint(&mut assets, 0, ctx.sender(), 1000000, ctx);
        assets_system::mint(&mut assets, 1, ctx.sender(), 1000000, ctx);
        assets_system::mint(&mut assets, 2, ctx.sender(), 1000000, ctx);

        (assets ,scenario)
    }

    #[test]
    public fun create_pool() {
        let (mut assets, mut scenario) = init_test();
        let mut dex = test_scenario::take_shared<Dex>(&scenario);

        let ctx =  test_scenario::ctx(&mut scenario);
        dex_system::create_pool(&mut dex, &mut assets, 0, 1, ctx);
        assert!(dex.borrow_mut_pool_id().contains_key(0, 1), 0);
        assert!(dex.borrow_mut_next_pool_id().get() == 1, 0);
        let pool_id = dex.borrow_mut_pool_id().get(0, 1);
        assert!(dex.borrow_mut_pools().get(pool_id) == dex_pools::new(@0x0, 3), 0);

        dex_system::create_pool(&mut dex, &mut assets, 1, 2, ctx);
        assert!(dex.borrow_mut_pool_id().contains_key(1, 2), 0);
        assert!(dex.borrow_mut_next_pool_id().get() == 2, 0);
        let pool_id = dex.borrow_mut_pool_id().get(1, 2);
        assert!(dex.borrow_mut_pools().get(pool_id) == dex_pools::new(@0x1, 4), 0);

        test_scenario::return_shared<Assets>(assets);
        test_scenario::return_shared<Dex>(dex);
        test_scenario::end(scenario);
    }

    #[test]
    public fun liquidity_test() {
        let (mut assets, mut scenario) = init_test();
        let mut dex = test_scenario::take_shared<Dex>(&scenario);

        let ctx =  test_scenario::ctx(&mut scenario);
        dex_system::create_pool(&mut dex, &mut assets, 0, 1, ctx);
        dex_system::create_pool(&mut dex, &mut assets, 1, 2, ctx);

        dex_system::add_liquidity(&dex, &mut assets, 0, 1, 100000, 100000, 100000, 100000, ctx);
        assert!(assets_system::balance_of(&assets, 0, ctx.sender()) == 900000, 0);
        assert!(assets_system::balance_of(&assets, 1, ctx.sender()) == 900000, 0);
        assert!(assets_system::balance_of(&assets, 3, ctx.sender()) == 100000, 0);

        assert!(assets_system::balance_of(&assets, 0, @0x0) == 100000, 0);
        assert!(assets_system::balance_of(&assets, 1, @0x0) == 100000, 0);

        dex_system::add_liquidity(&dex, &mut assets, 0, 1, 100000, 100000, 100000, 100000, ctx);
        assert!(assets_system::balance_of(&assets, 0, ctx.sender()) == 800000, 0);
        assert!(assets_system::balance_of(&assets, 1, ctx.sender()) == 800000, 0);
        assert!(assets_system::balance_of(&assets, 3, ctx.sender()) == 200000, 0);

        assert!(assets_system::balance_of(&assets, 0, @0x0) == 200000, 0);
        assert!(assets_system::balance_of(&assets, 1, @0x0) == 200000, 0);

        dex_system::add_liquidity(&dex, &mut assets, 0, 1, 200000, 100000, 100000, 100000, ctx);
        assert!(assets_system::balance_of(&assets, 0, ctx.sender()) == 700000, 0);
        assert!(assets_system::balance_of(&assets, 1, ctx.sender()) == 700000, 0);
        assert!(assets_system::balance_of(&assets, 3, ctx.sender()) == 300000, 0);

        assert!(assets_system::balance_of(&assets, 0, @0x0) == 300000, 0);
        assert!(assets_system::balance_of(&assets, 1, @0x0) == 300000, 0);

        dex_system::add_liquidity(&dex, &mut assets, 0, 1, 100000, 200000, 100000, 100000, ctx);
        assert!(assets_system::balance_of(&assets, 0, ctx.sender()) == 600000, 0);
        assert!(assets_system::balance_of(&assets, 1, ctx.sender()) == 600000, 0);
        assert!(assets_system::balance_of(&assets, 3, ctx.sender()) == 400000, 0);

        assert!(assets_system::balance_of(&assets, 0, @0x0) == 400000, 0);
        assert!(assets_system::balance_of(&assets, 1, @0x0) == 400000, 0);

        dex_system::remove_liquidity(&dex, &mut assets, 0, 1, 100000, 100000, 100000, ctx);
        assert!(assets_system::balance_of(&assets, 0, ctx.sender()) == 700000, 0);
        assert!(assets_system::balance_of(&assets, 1, ctx.sender()) == 700000, 0);
        assert!(assets_system::balance_of(&assets, 3, ctx.sender()) == 300000, 0);

        assert!(assets_system::balance_of(&assets, 0, @0x0) == 300000, 0);
        assert!(assets_system::balance_of(&assets, 1, @0x0) == 300000, 0);

        dex_system::remove_liquidity(&dex, &mut assets, 1, 0, 100000, 100000, 100000, ctx);
        assert!(assets_system::balance_of(&assets, 0, ctx.sender()) == 800000, 0);
        assert!(assets_system::balance_of(&assets, 1, ctx.sender()) == 800000, 0);
        assert!(assets_system::balance_of(&assets, 3, ctx.sender()) == 200000, 0);

        assert!(assets_system::balance_of(&assets, 0, @0x0) == 200000, 0);
        assert!(assets_system::balance_of(&assets, 1, @0x0) == 200000, 0);

        test_scenario::return_shared<Assets>(assets);
        test_scenario::return_shared<Dex>(dex);
        test_scenario::end(scenario);
    }

    #[test]
    public fun swap_test() {
        let (mut assets, mut scenario) = init_test();
        let mut dex = test_scenario::take_shared<Dex>(&scenario);

        let ctx =  test_scenario::ctx(&mut scenario);
        dex_system::create_pool(&mut dex, &mut assets, 0, 1, ctx);
        dex_system::create_pool(&mut dex, &mut assets, 1, 2, ctx);

        dex_system::add_liquidity(&dex, &mut assets, 0, 1, 100000, 100000, 100000, 100000, ctx);
        dex_system::add_liquidity(&dex, &mut assets, 1, 2, 100000, 100000, 100000, 100000, ctx);


        assert!(dex_system::get_amount_out(&dex, &assets, vector[0, 1], 10000) == 9066, 0);
        dex_system::swap_exact_tokens_for_tokens(&dex, &mut assets, vector[0, 1], 10000, 0, ctx.sender(), ctx);
        assert!(assets_system::balance_of(&assets, 0, ctx.sender()) == 900000 - 10000, 0);
        assert!(assets_system::balance_of(&assets, 1, ctx.sender()) == 800000 + 9066, 0);

        assert!(assets_system::balance_of(&assets, 0, @0x0) == 100000 + 10000, 0);
        assert!(assets_system::balance_of(&assets, 1, @0x0) == 100000 - 9066, 0);

        assert!(dex_system::get_amount_out(&dex, &assets, vector[0, 1, 2], 10000) == 7005, 0);
        dex_system::swap_exact_tokens_for_tokens(&dex, &mut assets, vector[0, 1, 2], 10000, 0, ctx.sender(), ctx);
        assert!(assets_system::balance_of(&assets, 0, ctx.sender()) == 900000 - 10000 - 10000, 0);
        assert!(assets_system::balance_of(&assets, 1, ctx.sender()) == 800000 + 9066, 0);

        debug::print(&assets_system::balance_of(&assets, 0, @0x0));
        debug::print(&assets_system::balance_of(&assets, 1, @0x0));
        assert!(assets_system::balance_of(&assets, 0, @0x0) == 100000 + 10000 + 10000, 0);
        assert!(assets_system::balance_of(&assets, 1, @0x0) == 100000 - 9066 - 7556, 0);

        assert!(assets_system::balance_of(&assets, 1, @0x1) == 100000 + 7556, 0);
        assert!(assets_system::balance_of(&assets, 2, @0x1) == 100000 - 7005, 0);

        assert!(assets_system::balance_of(&assets, 2, ctx.sender()) == 900000 + 7005, 0);


        assert!(dex_system::get_amount_in(&dex, &assets, vector[1, 0], 10000) == 7603, 0);
        dex_system::swap_tokens_for_exact_tokens(&dex, &mut assets, vector[1, 0], 10000, 20000, ctx.sender(), ctx);
        assert!(assets_system::balance_of(&assets, 0, ctx.sender()) == 900000 - 10000 - 10000 + 10000, 0);
        assert!(assets_system::balance_of(&assets, 1, ctx.sender()) == 800000 + 9066 - 7603, 0);

        assert!(assets_system::balance_of(&assets, 0, @0x0) == 100000 + 10000 + 10000 - 10000, 0);
        assert!(assets_system::balance_of(&assets, 1, @0x0) == 100000 - 9066 - 7556 + 7603, 0);

        assert!(dex_system::get_amount_in(&dex, &assets, vector[1, 0, 1, 2], 10000) == 18322, 0);
        dex_system::swap_tokens_for_exact_tokens(&dex, &mut assets, vector[1, 0, 1, 2], 10000, 20000, ctx.sender(), ctx);

        test_scenario::return_shared<Assets>(assets);
        test_scenario::return_shared<Dex>(dex);
        test_scenario::end(scenario);
    }
}