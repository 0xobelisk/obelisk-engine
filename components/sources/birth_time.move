module components::birth_time_component {
    use eps::world::World;
    use eps::world;
    use components::utils::generate_component_id;
    use eps::entity;
    use sui::clock::Clock;
    use sui::clock;

    const COMPONENT_NAME: vector<u8> = b"Obelisk component birth_time";

    struct BirthTimeComponent has store {
        value: u64
    }

    public fun new_birth_time(clock: &Clock): BirthTimeComponent {
        BirthTimeComponent {
            value : clock::timestamp_ms(clock)
        }
    }

    public fun get_birth_time(birth_time: &BirthTimeComponent): u64 {
        birth_time.value
    }

    public fun get_age_timestamp<T : key + store>(world: &mut World, clock: &Clock, obj: &T): u64 {
        let entity = world::get_mut_entity(world, obj);
        let components_id = generate_component_id(COMPONENT_NAME);
        let component = entity::get_mut_component<BirthTimeComponent>(entity, components_id);
        let current_time = clock::timestamp_ms(clock);
        let birth_time = get_birth_time(component);
        current_time - birth_time
    }
}