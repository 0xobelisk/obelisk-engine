module components::utils {

    use sui::hash::keccak256;

    public fun generate_component_id(component_name: vector<u8>): vector<u8> {
        keccak256(&component_name)
    }
}