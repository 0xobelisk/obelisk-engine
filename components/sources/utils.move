module components::utils {

    use sui::hash::keccak256;

    const Hour:u64 = 3600000u64;
    const Minute:u64 = 60000u64;
    const Second:u64 = 1000u64;

    public fun generate_component_id(component_name: vector<u8>): vector<u8> {
        keccak256(&component_name)
    }
}