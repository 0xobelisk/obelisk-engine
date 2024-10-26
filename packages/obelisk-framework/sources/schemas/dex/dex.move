module obelisk::dex_schema {
    use obelisk::storage_double_map;
    use obelisk::storage_double_map::StorageDoubleMap;
    use sui::transfer::public_share_object;
    use obelisk::storage_map;
    use obelisk::storage_value;
    use obelisk::dex_pools::DexPools;
    use obelisk::storage_map::StorageMap;
    use obelisk::storage_value::StorageValue;

    public struct Dex has key, store {
        id: UID,
        next_pool_id: StorageValue<u32>,
        pool_id: StorageDoubleMap<u32, u32, u32>,
        pools: StorageMap<u32, DexPools>,
    }
    
    public(package) fun borrow_mut_next_pool_id(self: &mut Dex): &mut StorageValue<u32> {
        &mut self.next_pool_id
    }

    public(package) fun borrow_mut_pool_id(self: &mut Dex): &mut StorageDoubleMap<u32, u32, u32> {
        &mut self.pool_id
    }
    
    public(package) fun borrow_mut_pools(self: &mut Dex): &mut StorageMap<u32, DexPools> {
        &mut self.pools
    }

    public(package) fun borrow_next_pool_id(self: &Dex): &StorageValue<u32> {
        &self.next_pool_id
    }

    public(package) fun borrow_pool_id(self: &Dex): &StorageDoubleMap<u32, u32, u32> {
        &self.pool_id
    }

    public(package) fun borrow_pools(self: &Dex): &StorageMap<u32, DexPools> {
        &self.pools
    }
    
    fun init(ctx: &mut TxContext) {
        let dex = Dex {
            id: object::new(ctx),
            next_pool_id: storage_value::new(),
            pool_id: storage_double_map::new(),
            pools: storage_map::new(),
        };
        public_share_object(dex);
    }

    #[test_only]
    public fun init_dex_for_testing(ctx: &mut TxContext){
        init(ctx)
    }
}