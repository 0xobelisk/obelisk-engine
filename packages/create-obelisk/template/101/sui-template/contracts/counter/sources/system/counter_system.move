module counter::counter_system {
    use counter::counter_schema;
    use counter::migrate;
    use obelisk::world::World;

    public entry fun inc(world: &mut World) {
        migrate::assert_version(world);
        let old_value = counter_schema::get(world);
        counter_schema::set(world, old_value + 1);
    }
}
