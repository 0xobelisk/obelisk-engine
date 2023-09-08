module examples::entity_key {
    use sui::object;

    public fun object_to_entity_key<T: key + store>(object: &T): vector<u8> {
        object::id_bytes(object)
    }
}
