module obelisk::dex_pool_id {
    public struct DexPoolId has drop, copy, store {
        value: u32,
    }

    public fun new(value: u32): DexPoolId {
        DexPoolId {
            value
        }
    }

    public fun get(asset_id: &DexPoolId): u32 {
        asset_id.value
    }

    public fun set(asset_id: &mut DexPoolId, value: u32) {
        asset_id.value = value;
    }
}