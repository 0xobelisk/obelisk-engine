module components::name_component {
    use std::string;
    use components::utils::generate_component_id;

    const COMPONENT_NAME: vector<u8> = b"Obelisk component name";

    struct NameComponent has store {
        value: string::String
    }

    public fun new_name(name: vector<u8>): NameComponent {
        NameComponent {
            value : string::utf8(name)
        }
    }

    public fun update_name(name_component: &mut NameComponent, name: vector<u8>) {
        name_component.value = string::utf8(name);
    }

    public fun get_name(name_component: &NameComponent): string::String {
        name_component.value
    }
    
    public fun get_component_id() : vector<u8> {
        generate_component_id(COMPONENT_NAME)
    }
}