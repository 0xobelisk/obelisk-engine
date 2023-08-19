module components::sex_component {
    use components::utils::generate_component_id;

    const COMPONENT_NAME: vector<u8> = b"Obelisk sex component";

    struct SexComponent has store {
        value: bool
    }

    public fun new_sex(sex: bool): SexComponent {
        SexComponent {
            value : sex
        }
    }

    public fun get_sex(sex_component: &SexComponent) : bool {
        sex_component.value
    }

    public fun get_component_id() : vector<u8> {
        generate_component_id(COMPONENT_NAME)
    }
}