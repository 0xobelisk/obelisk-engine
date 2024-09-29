module obelisk::assets_schema {
    use obelisk::storage_double_map;
    use obelisk::assets_account::AssetsAccount;
    use obelisk::storage_double_map::StorageDoubleMap;
    use obelisk::assets_metadata::AssetsMetadata;
    use obelisk::assets_asset_id;
    use obelisk::assets_detail::AssetsDetails;
    use obelisk::assets_asset_id::AssetsAssetId;
    use sui::transfer::{public_share_object};
    use obelisk::storage_map::{StorageMap};
    use obelisk::storage_value;
    use obelisk::storage_map;
    use obelisk::storage_value::StorageValue;

    public struct Assets has key, store {
        id: UID,
        asset_id: StorageValue<AssetsAssetId>,
        metadata: StorageMap<AssetsAssetId, AssetsMetadata>,
        details: StorageMap<AssetsAssetId, AssetsDetails>,
        account: StorageDoubleMap<AssetsAssetId, address, AssetsAccount>
    }

    public(package) fun asset_id(self: &mut Assets): &mut StorageValue<AssetsAssetId> {
        &mut self.asset_id
    }

    public(package) fun metadata(self: &mut Assets): &mut StorageMap<AssetsAssetId, AssetsMetadata> {
        &mut self.metadata
    }

    public(package) fun details(self: &mut Assets): &mut StorageMap<AssetsAssetId, AssetsDetails> {
        &mut self.details
    }

    public(package) fun account(self: &mut Assets): &mut StorageDoubleMap<AssetsAssetId, address, AssetsAccount> {
        &mut self.account
    }

    fun init(ctx: &mut TxContext) {
        let assets = Assets {
            id: object::new(ctx),
            asset_id: storage_value::new(assets_asset_id::new(0)),
            metadata: storage_map::empty(),
            details: storage_map::empty(),
            account: storage_double_map::empty()
        };
        public_share_object(assets);
    }

    #[test_only]
    public fun init_assets_for_testing(ctx: &mut TxContext){
        init(ctx)
    }
}