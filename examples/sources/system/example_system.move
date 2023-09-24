module examples::example_system {
    use examples::single_value_comp;
    use examples::world::World;
    #[test_only]
    use std::ascii::string;
    #[test_only]
    use examples::entity_key;
    #[test_only]
    use examples::init;
    #[test_only]
    use examples::multi_column_comp;
    #[test_only]
    use examples::single_column_comp;
    #[test_only]
    use examples::single_struct_comp;
    #[test_only]
    use examples::world;
    #[test_only]
    use sui::test_scenario;
    #[test_only]
    use sui::test_scenario::Scenario;

    public entry fun increase(world: &mut World) {
        let old_number = single_value_comp::get(world);
        let new_number = old_number + 10;
        single_value_comp::update(world, new_number);
    }

    #[test_only]
    public fun init_test(): Scenario {
        let scenario_val = test_scenario::begin(@0x0001);
        let scenario = &mut scenario_val;
        {
            let ctx = test_scenario::ctx(scenario);
            init::init_world_for_testing(ctx);
        };
        test_scenario::next_tx(scenario,@0x0001);
        scenario_val
    }

    #[test]
    public fun test_create_world()  {
        let scenario_val = init_test();
        let scenario = &mut scenario_val;

        let world = test_scenario::take_shared<World>(scenario);

        let (name,description,version) = world::info(&world);

        assert!(name == string(b"Examples"), 0);
        assert!(description == string(b"Examples description"), 0);
        assert!(version == 1, 0);

        let names = world::component_names(&world);
        assert!(names == vector[
            string(b"single_column"),
            string(b"multi_column"),
            string(b"single_value"),
            string(b"single_struct")
        ], 0);

        test_scenario::return_shared<World>(world);
        test_scenario::end(scenario_val);
    }

    #[test]
    public fun test_single_value()  {
        let scenario_val = init_test();
        let scenario = &mut scenario_val;

        let world = test_scenario::take_shared<World>(scenario);

        // Value == 1000
        assert!(single_value_comp::get(&world) == 1000, 0 );

        // Update value to 1001
        single_value_comp::update(&mut world, 1001);
        // Value == 1001
        assert!(single_value_comp::get(&world) == 1001, 0 );

        test_scenario::return_shared<World>(world);
        test_scenario::end(scenario_val);
    }

    #[test]
    public fun test_single_struct()  {
        let scenario_val = init_test();
        let scenario = &mut scenario_val;

        let world = test_scenario::take_shared<World>(scenario);

        // admin == 0x1, fee == 100
        let (admin, fee) = single_struct_comp::get(&world);
        assert!(admin == @0x1, 0);
        assert!(fee == 100, 0);

        // admin == 0x1, fee == 100
        let admin = single_struct_comp::get_admin(&world);
        let fee = single_struct_comp::get_fee(&world);
        assert!(admin == @0x1, 0);
        assert!(fee == 100, 0);

        // Update admin to 0x2, Update fee to 101,
        single_struct_comp::update(&mut world, @0x2, 101);
        // admin == 0x2, fee == 101
        let (admin, fee) = single_struct_comp::get(&world);
        assert!(admin == @0x2, 0);
        assert!(fee == 101, 0);

        // admin == 0x2, fee == 101
        let admin = single_struct_comp::get_admin(&world);
        let fee = single_struct_comp::get_fee(&world);
        assert!(admin == @0x2, 0);
        assert!(fee == 101, 0);

        // Update admin to 0x3, Update fee to 102,
        single_struct_comp::update_admin(&mut world, @0x3);
        single_struct_comp::update_fee(&mut world, 102);

        // admin == 0x3, fee == 102
        let (admin, fee) = single_struct_comp::get(&world);
        assert!(admin == @0x3, 0);
        assert!(fee == 102, 0);

        // admin == 0x2, fee == 101
        let admin = single_struct_comp::get_admin(&world);
        let fee = single_struct_comp::get_fee(&world);
        assert!(admin == @0x3, 0);
        assert!(fee == 102, 0);

        test_scenario::return_shared<World>(world);
        test_scenario::end(scenario_val);
    }

    #[test]
    public fun test_single_column()  {
        let scenario_val = init_test();
        let scenario = &mut scenario_val;

        let world = test_scenario::take_shared<World>(scenario);

        let entity_key = entity_key::from_u256(0);
        // Add a field
        single_column_comp::add(&mut world, entity_key, 10);
        // is exist
        assert!(single_column_comp::contains(&world,entity_key) == true, 0);

        // get 10
        let level = single_column_comp::get(&mut world, entity_key);
        assert!(level == 10, 0);

        // Update a field
        single_column_comp::update(&mut world, entity_key::from_u256(0), 11);
        // get 11
        let level = single_column_comp::get(&mut world, entity_key::from_u256(0));
        assert!(level == 11, 0);

        // Remove a field
        single_column_comp::remove(&mut world, entity_key::from_u256(0));
        // is not exist
        assert!(single_column_comp::contains(&world,entity_key) == false, 0);

        test_scenario::return_shared<World>(world);
        test_scenario::end(scenario_val);
    }

    #[test]
    public fun test_multi_column()  {
        let scenario_val = init_test();
        let scenario = &mut scenario_val;

        let world = test_scenario::take_shared<World>(scenario);

        let entity_key = entity_key::from_u256(0);
        // Add a field
        multi_column_comp::add(&mut world, entity_key, b"online", 1000);
        // is exist
        assert!(multi_column_comp::contains(&world, entity_key) == true, 0);

        // get online and get 1000
        let (state, last_update_time) = multi_column_comp::get(&mut world, entity_key);
        assert!(state == b"online", 0);
        assert!(last_update_time == 1000, 0);

        let state = multi_column_comp::get_state(&mut world, entity_key);
        let last_update_time = multi_column_comp::get_last_update_time(&mut world, entity_key);
        assert!(state == b"online", 0);
        assert!(last_update_time == 1000, 0);

        // Update a field
        multi_column_comp::update(&mut world, entity_key::from_u256(0), b"offline", 1001);
        // get offline and get 1001
        let (state, last_update_time) = multi_column_comp::get(&mut world, entity_key::from_u256(0));
        assert!(state == b"offline", 0);
        assert!(last_update_time == 1001, 0);

        // Remove a field
        multi_column_comp::remove(&mut world, entity_key::from_u256(0));
        // is not exist
        assert!(multi_column_comp::contains(&world,entity_key) == false, 0);

        test_scenario::return_shared<World>(world);
        test_scenario::end(scenario_val);
    }
}


