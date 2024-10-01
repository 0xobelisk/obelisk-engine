module obelisk::dex_schema {
    use obelisk::storage_double_map;
    use obelisk::assets_asset_id::AssetsAssetId;
    use obelisk::storage_double_map::StorageDoubleMap;
    use sui::transfer::public_share_object;
    use obelisk::storage_map;
    use obelisk::dex_pool_id;
    use obelisk::storage_value;
    use obelisk::dex_pools::DexPools;
    use obelisk::storage_map::StorageMap;
    use obelisk::dex_pool_id::DexPoolId;
    use obelisk::storage_value::StorageValue;

    public struct Dex has key, store {
        id: UID,
        next_pool_id: StorageValue<DexPoolId>,
        pool_id: StorageDoubleMap<AssetsAssetId, AssetsAssetId, DexPoolId>,
        pools: StorageMap<DexPoolId, DexPools>,
    }
    
    public(package) fun next_pool_id(self: &mut Dex): &mut StorageValue<DexPoolId> {
        &mut self.next_pool_id
    }

    public(package) fun pool_id(self: &mut Dex): &mut StorageDoubleMap<AssetsAssetId, AssetsAssetId, DexPoolId> {
        &mut self.pool_id
    }
    
    public(package) fun pools(self: &mut Dex): &mut StorageMap<DexPoolId, DexPools> {
        &mut self.pools
    }
    
    fun init(ctx: &mut TxContext) {
        let dex = Dex {
            id: object::new(ctx),
            next_pool_id: storage_value::new(dex_pool_id::new(0)),
            pool_id: storage_double_map::empty(),
            pools: storage_map::empty(),
        };
        public_share_object(dex);
    }

    #[test_only]
    public fun init_dex_for_testing(ctx: &mut TxContext){
        init(ctx)
    }
}