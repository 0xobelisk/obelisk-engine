module examples::entity_key {
    use sui::bcs;
    use sui::hash::keccak256;
    use sui::address;

    public fun from_object<T: key + store>(object: &T): address {
        object::id_address(object)
    }

    public fun from_bytes(bytes: vector<u8>): address {
        address::from_bytes(keccak256(&bytes))
    }

    public fun from_u256(x: u256): address {
        address::from_u256(x)
    }

    public fun from_address_with_seed(addr: address, seed: vector<u8>): address {
        let mut data = address::to_bytes(addr);
        vector::append(&mut data, seed);
        from_bytes(data)
    }

    public fun from_address_with_u256(addr: address, x: u256): address {
        let mut data = address::to_bytes(addr);
        vector::append(&mut data, bcs::to_bytes<u256>(&x));
        from_bytes(data)
    }

    public fun from_object_with_seed<T: key + store>(object: &T, seed: vector<u8>): address {
        let mut data = address::to_bytes(object::id_address(object));
        vector::append(&mut data, seed);
        from_bytes(data)
    }

    public fun from_object_with_u256<T: key + store>(object: &T, x: u256): address {
        let mut data = address::to_bytes(object::id_address(object));
        vector::append(&mut data, bcs::to_bytes<u256>(&x));
        from_bytes(data)
    }

    #[test]
    public fun test_from_bytes() {
        assert!(from_bytes(b"Hello") == @0x6b3dfaec148fb1bb2b066f10ec285e7c9bf402ab32aa78a5d38e34566810cd2, 0);
    }

    #[test]
    public fun test_from_u256() {
        assert!(from_u256(1) == @0x1, 0);
    }
}
