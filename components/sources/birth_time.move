module components::birth_time_component {
    use components::utils::generate_component_id;
    use sui::clock::Clock;
    use sui::clock;

    const COMPONENT_NAME: vector<u8> = b"Obelisk birth_time component";

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

    public fun get_age_timestamp(birth_time: &BirthTimeComponent, clock: &Clock): u64 {
        let current_time = clock::timestamp_ms(clock);
        let birth_time = get_birth_time(birth_time);
        current_time - birth_time
    }

    public fun get_component_id() : vector<u8> {
        generate_component_id(COMPONENT_NAME)
    }
}