module counter::counter_system {
    use counter::counter_schema;
    use counter::migrate;
    use counter::single_value_schema;
    use obelisk::world::World;

    public entry fun inc(world: &mut World) {
        migrate::assert_version(world);
        let old_value = single_value_schema::get(world);
        single_value_schema::set(world, old_value + 100);

        counter_schema::set(world, old_value);
    }
}
