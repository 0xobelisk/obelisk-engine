module obelisk::assets_asset_id {
    public struct AssetsAssetId has drop, copy, store {
        value: u32,
    }

    public fun new(value: u32): AssetsAssetId {
        AssetsAssetId {
            value
        }
    }

    public fun get(asset_id: &AssetsAssetId): u32 {
        asset_id.value
    }

    public fun set(asset_id: &mut AssetsAssetId, value: u32) {
        asset_id.value = value;
    }
}