module components::birth_time {
    use eps::world::World;
    use sui::object;
    use eps::world;
    use components::utils::generate_component_id;
    use eps::entity;
    use sui::clock::Clock;
    use sui::clock;

    const COMPONENT_NAME: vector<u8> = b"Obelisk component birth_time";

    struct BirthTime has store {
        value: u64
    }

    public fun new_birth_time(clock: &Clock): BirthTime {
        BirthTime {
            value : clock::timestamp_ms(clock)
        }
    }

    public fun get_birth_time(birth_time: &BirthTime): u64 {
        birth_time.value
    }

    public fun get_age_timestamp<T : key + store>(world: &mut World, clock: &Clock, entity_key: &T): u64 {
        let id = object::id(entity_key);
        let entity = world::get_mut_entity(world, id);
        let components_id = generate_component_id(COMPONENT_NAME);
        let component = entity::get_component<BirthTime>(entity, components_id);
        let current_time = clock::timestamp_ms(clock);
        let birth_time = get_birth_time(component);
        current_time - birth_time
    }
}