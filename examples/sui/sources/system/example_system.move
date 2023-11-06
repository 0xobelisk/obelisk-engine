module examples::example_system {
    use examples::single_value_schema;
    use examples::world::World;
    #[test_only]
    use std::ascii::string;
    #[test_only]
    use std::debug;
    #[test_only]
    use examples::entity_key;
    #[test_only]
    use examples::ephemeral_schema;
    #[test_only]
    use examples::init;
    #[test_only]
    use examples::multi_column_schema;
    #[test_only]
    use examples::single_column_schema;
    #[test_only]
    use examples::single_struct_schema;
    #[test_only]
    use examples::world;
    #[test_only]
    use sui::test_scenario;
    #[test_only]
    use sui::test_scenario::Scenario;
    use sui::transfer;
    #[test_only]
    use sui::sui::SUI;
    #[test_only]
    use sui::coin;
    #[test_only]
    use sui::coin::Coin;

    public entry fun increase(world: &mut World) {
        let old_number = single_value_schema::get(world);
        let new_number = old_number + 10;
        single_value_schema::set(world, new_number);
    }

    public entry fun increase_with_type<T: key + store>(world: &mut World, coin: T) {
        let old_number = single_value_schema::get(world);
        let new_number = old_number + 10;
        single_value_schema::set(world, new_number);
        transfer::public_transfer(coin, @examples)
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
        assert!(description == string(b"Examples"), 0);
        assert!(version == 1, 0);

        let names = world::schema_names(&world);
        debug::print(&names);
        assert!(names == vector[
            string(b"single_column"),
            string(b"multi_column"),
            string(b"single_value"),
            string(b"single_struct"),
        ], 0);

        test_scenario::return_shared<World>(world);
        test_scenario::end(scenario_val);
    }

    #[test]
    public fun test_increase_with_type()  {
        let scenario_val = init_test();
        let scenario = &mut scenario_val;

        let world = test_scenario::take_shared<World>(scenario);

        let c = coin::mint_for_testing<SUI>(10, test_scenario::ctx(scenario));
        increase_with_type<Coin<SUI>>(&mut world, c);

        test_scenario::return_shared<World>(world);
        test_scenario::end(scenario_val);
    }


    #[test]
    public fun test_ephemeral()  {
        let scenario_val = init_test();
        let scenario = &mut scenario_val;

        let world = test_scenario::take_shared<World>(scenario);

        ephemeral_schema::emit_ephemeral(100);

        test_scenario::return_shared<World>(world);
        test_scenario::end(scenario_val);
    }

    #[test]
    public fun test_single_value()  {
        let scenario_val = init_test();
        let scenario = &mut scenario_val;

        let world = test_scenario::take_shared<World>(scenario);

        // Value == 1000
        assert!(single_value_schema::get(&world) == 1000, 0 );

        // Update value to 1001
        single_value_schema::set(&mut world, 1001);
        // Value == 1001
        assert!(single_value_schema::get(&world) == 1001, 0 );

        test_scenario::return_shared<World>(world);
        test_scenario::end(scenario_val);
    }

    #[test]
    public fun test_single_struct()  {
        let scenario_val = init_test();
        let scenario = &mut scenario_val;

        let world = test_scenario::take_shared<World>(scenario);

        // admin == 0x1, fee == 100
        let (admin, fee) = single_struct_schema::get(&world);
        assert!(admin == @0x1, 0);
        assert!(fee == 100, 0);

        // admin == 0x1, fee == 100
        let admin = single_struct_schema::get_admin(&world);
        let fee = single_struct_schema::get_fee(&world);
        assert!(admin == @0x1, 0);
        assert!(fee == 100, 0);

        // Update admin to 0x2, Update fee to 101,
        single_struct_schema::set(&mut world, @0x2, 101);
        // admin == 0x2, fee == 101
        let (admin, fee) = single_struct_schema::get(&world);
        assert!(admin == @0x2, 0);
        assert!(fee == 101, 0);

        // admin == 0x2, fee == 101
        let admin = single_struct_schema::get_admin(&world);
        let fee = single_struct_schema::get_fee(&world);
        assert!(admin == @0x2, 0);
        assert!(fee == 101, 0);

        // Update admin to 0x3, Update fee to 102,
        single_struct_schema::set_admin(&mut world, @0x3);
        single_struct_schema::set_fee(&mut world, 102);

        // admin == 0x3, fee == 102
        let (admin, fee) = single_struct_schema::get(&world);
        assert!(admin == @0x3, 0);
        assert!(fee == 102, 0);

        // admin == 0x2, fee == 101
        let admin = single_struct_schema::get_admin(&world);
        let fee = single_struct_schema::get_fee(&world);
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
        single_column_schema::set(&mut world, entity_key, 10);
        // is exist
        assert!(single_column_schema::contains(&world,entity_key) == true, 0);

        // get 10
        let level = single_column_schema::get(&mut world, entity_key);
        assert!(level == 10, 0);

        // Update a field
        single_column_schema::set(&mut world, entity_key::from_u256(0), 11);
        // get 11
        let level = single_column_schema::get(&mut world, entity_key::from_u256(0));
        assert!(level == 11, 0);

        // Remove a field
        single_column_schema::remove(&mut world, entity_key::from_u256(0));
        // is not exist
        assert!(single_column_schema::contains(&world,entity_key) == false, 0);

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
        multi_column_schema::set(&mut world, entity_key::from_u256(0), b"online", 1000);
        multi_column_schema::set(&mut world, entity_key::from_u256(1), b"online", 1000);
        multi_column_schema::set(&mut world, entity_key::from_u256(2), b"online", 1000);

        assert!(multi_column_schema::contains(&world, entity_key), 0);

        // get online and get 1000
        let (state, last_update_time) = multi_column_schema::get(&mut world, entity_key);
        assert!(state == b"online", 0);
        assert!(last_update_time == 1000, 0);

        let state = multi_column_schema::get_state(&mut world, entity_key);
        let last_update_time = multi_column_schema::get_last_update_time(&mut world, entity_key);
        assert!(state == b"online", 0);
        assert!(last_update_time == 1000, 0);

        // Update a field
        multi_column_schema::set(&mut world, entity_key::from_u256(0), b"offline", 1001);
        // get offline and get 1001
        let (state, last_update_time) = multi_column_schema::get(&mut world, entity_key::from_u256(0));
        assert!(state == b"offline", 0);
        assert!(last_update_time == 1001, 0);

        // Remove a field
        multi_column_schema::remove(&mut world, entity_key::from_u256(0));
        // is not exist
        assert!(multi_column_schema::contains(&world,entity_key) == false, 0);

        test_scenario::return_shared<World>(world);
        test_scenario::end(scenario_val);
    }
}


