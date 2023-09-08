module examples::counter_system {
    use examples::world::World;
    use examples::counter_component;

    public entry fun increase(world: &mut World) {
        let old_number = counter_component::get(world);
        let new_number = old_number + 1;
        counter_component::update(world, new_number);
    }
}
