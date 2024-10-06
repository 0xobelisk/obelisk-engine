module obelisk::dex_pools {

    public struct DexPools has drop, copy, store  {
        pool_address: address,
        lp_asset_id: u32,
    }

    public fun new(pool_address: address, lp_asset_id: u32): DexPools {
        DexPools {
            pool_address,
            lp_asset_id
        }
    }

    public fun get_pool_address(dex_pools: &DexPools): address {
        dex_pools.pool_address
    }

    public fun get_lp_asset_id(dex_pools: &DexPools): u32 {
        dex_pools.lp_asset_id
    }
}