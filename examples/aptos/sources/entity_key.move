module examples::entity_key {
    use aptos_framework::util::address_from_bytes;
    use aptos_framework::transaction_context::generate_auid_address;
    use aptos_std::aptos_hash::keccak256;
    use aptos_framework::account::create_resource_address;
    use std::signer::address_of;
    use std::bcs::to_bytes;
    use std::vector;

    public fun from_signer(signer: &signer): address {
        address_of(signer)
    }

    public fun from_bytes(bytes: vector<u8>): address {
        address_from_bytes(keccak256(bytes))
    }

    public fun from_u256(x: u256): address {
        let bytes = to_bytes<u256>(&x);
        vector::append(&mut bytes, b"u256");
        address_from_bytes(keccak256(bytes))
    }

    public fun from_address_with_seed(addr: address, seed: vector<u8>): address {
        create_resource_address(&addr, seed)
    }

    public fun from_auid(): address {
        generate_auid_address()
    }
}
