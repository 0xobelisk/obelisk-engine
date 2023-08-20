module components::name_component {
    use components::utils::generate_component_id;

    const COMPONENT_NAME: vector<u8> = b"Obelisk name component";

    struct NameComponent has store {
        value: vector<u8>
    }

    public fun new_name(name: vector<u8>): NameComponent {
        NameComponent {
            value : name
        }
    }

    public fun update_name(name_component: &mut NameComponent, name: vector<u8>) {
        name_component.value = name;
    }

    public fun get_name(name_component: &NameComponent): vector<u8> {
        name_component.value
    }
    
    public fun get_component_id() : vector<u8> {
        generate_component_id(COMPONENT_NAME)
    }
}