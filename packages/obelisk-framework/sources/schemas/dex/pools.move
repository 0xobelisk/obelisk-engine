module obelisk::dex_pools {
    use obelisk::assets_asset_id::AssetsAssetId;

    public struct DexPools has drop, copy, store  {
        pool_address: address,
        lp_asset_id: AssetsAssetId,
    }

    public fun new(pool_address: address, lp_asset_id: AssetsAssetId): DexPools {
        DexPools {
            pool_address,
            lp_asset_id
        }
    }

    public fun get_pool_address(dex_pools: &DexPools): address {
        dex_pools.pool_address
    }

    public fun get_lp_asset_id(dex_pools: &DexPools): AssetsAssetId {
        dex_pools.lp_asset_id
    }
}