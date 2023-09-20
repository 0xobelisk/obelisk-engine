module examples::entity_key {
    use std::vector;
    use sui::address;
    use sui::object;

    public fun from_object<T: key + store>(object: &T): address {
        object::id_address(object)
    }

    public fun from_bytes(bytes: vector<u8>): address {
        let len = vector::length(&bytes);
        assert!(len != 0 && len <= 32, 0);

        let offset = address::length() - len;

        let i = 0;
        while (i < offset) {
            vector::push_back(&mut bytes,0u8);
            i = i + 1;
        };

        address::from_bytes(bytes)
    }

    public fun from_u256(x: u256): address {
        address::from_u256(x)
    }

    #[test]
    public fun test_from_bytes() {
        assert!(from_bytes(b"Hello") == @0x48656c6c6f000000000000000000000000000000000000000000000000000000, 0);
    }

    #[test]
    public fun test_from_u256() {
        assert!(from_u256(1) == @0x1, 0);
    }
}
