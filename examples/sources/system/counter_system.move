module examples::counter_system {
    use sui::tx_context::TxContext;
    use examples::world::World;
    use examples::single_value_comp;
    #[test_only]
    use std::ascii::string;
    #[test_only]
    use examples::init;
    #[test_only]
    use examples::world;
    #[test_only]
    use sui::test_scenario;

    public entry fun increase(world: &mut World, _ctx: &mut TxContext) {
        let old_number = single_value_comp::get(world);
        let new_number = old_number + 1;
        single_value_comp::update(world, new_number);
    }

    #[test]
    public fun test_increase()  {
        let scenario_val = test_scenario::begin(@0x0001);
        let scenario = &mut scenario_val;
        {
            let ctx = test_scenario::ctx(scenario);
            init::init_world_for_testing(ctx);
        };
        test_scenario::next_tx(scenario,@0x0001);
        let world = test_scenario::take_shared<World>(scenario);

        let (name,description) = world::info(&world);

        assert!(name == string(b"Examples"), 0);
        assert!(description == string(b"Examples description"), 0);
        {
            let ctx = test_scenario::ctx(scenario);
            increase(&mut world, ctx);
        };
        test_scenario::next_tx(scenario,@0x0001);

        assert!(single_value_comp::get(&world) == 1001, 0);

        test_scenario::return_shared<World>(world);
        test_scenario::end(scenario_val);
    }
}


