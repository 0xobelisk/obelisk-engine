module obelisk::assets_system {
    use std::string;
    use std::string::String;
    use obelisk::assets_functions;
    use obelisk::assets_account;
    use obelisk::assets_detail;
    use obelisk::assets_schema::Assets;

    public entry fun create(assets: &mut Assets, name: String, symbol: String, description: String, decimals: u8, url: String, info: String, ctx: &mut TxContext) {
        // TODO: Charge a fee for creating an asset

        // Create a new asset
        assets_functions::do_create(assets, ctx.sender(), name, symbol, description, decimals, url, info);
    }

    public entry fun mint(assets: &mut Assets, asset_id: u32, to: address, amount: u64, ctx: &mut TxContext) {
        let issuer = ctx.sender();
        assets_functions::do_mint(asset_id, to, amount, issuer, assets);
    }

    public entry fun burn(assets: &mut Assets, asset_id: u32, who: address, amount: u64, ctx: &mut TxContext) {
        let burner = ctx.sender();
        assets_functions::do_burn(asset_id, who, amount, burner, assets);
    }

    public entry fun transfer(assets: &mut Assets, asset_id: u32, to: address, amount: u64, ctx: &mut TxContext) {
        let from = ctx.sender();
        assets_functions::do_transfer(asset_id, from, to, amount, assets);
    }

    public entry fun transfer_all(assets: &mut Assets, asset_id: u32, to: address, ctx: &mut TxContext) {
        let from = ctx.sender();
        let balance = balance_of(assets, asset_id, from);

        assets_functions::do_transfer(asset_id, from, to, balance, assets);
    }

    public entry fun frozen(assets: &mut Assets, asset_id: u32, who: address, ctx: &mut TxContext) {
        let freezer = ctx.sender();

        let maybe_assets_details = assets.details().try_get(&asset_id);
        assert!(maybe_assets_details.is_some(), 5);
        let assets_details = maybe_assets_details.borrow();

        assert!(assets_details.get_status() != assets_detail::get_assets_status_destroying(), 5);
        assert!(assets_details.get_owner() == freezer, 6);

        let mut maybe_account = assets.account().try_get(&asset_id, &who);
        assert!(maybe_account.is_some(), 7);
        let mut account = maybe_account.extract();
        account.set_status(assets_account::get_account_status_frozen());
        assets.account().insert(asset_id, who, account);
    }

    public entry fun unfrozen(assets: &mut Assets, asset_id: u32, who: address, ctx: &mut TxContext) {
        let unfreezer = ctx.sender();

        let maybe_assets_details = assets.details().try_get(&asset_id);
        assert!(maybe_assets_details.is_some(), 5);
        let assets_details = maybe_assets_details.borrow();

        assert!(assets_details.get_status() != assets_detail::get_assets_status_destroying(), 5);
        assert!(assets_details.get_owner() == unfreezer, 6);

        let mut maybe_account = assets.account().try_get(&asset_id, &who);
        assert!(maybe_account.is_some(), 7);
        let mut account = maybe_account.extract();
        account.set_status(assets_account::get_account_status_liquid());
        assets.account().insert(asset_id, who, account);
    }

    public entry fun frozen_assets(assets: &mut Assets, asset_id: u32, ctx: &mut TxContext) {
        let freezer = ctx.sender();

        let mut maybe_assets_details = assets.details().try_get(&asset_id);
        assert!(maybe_assets_details.is_some(), 5);
        let mut assets_details = maybe_assets_details.extract();

        assert!(assets_details.get_status() == assets_detail::get_assets_status_live(), 5);
        assert!(assets_details.get_owner() == freezer, 6);

        assets_details.set_status(assets_detail::get_assets_status_frozen());
        assets.details().insert(asset_id, assets_details);
    }

    public entry fun unfrozen_assets(assets: &mut Assets, asset_id: u32, ctx: &mut TxContext) {
        let unfreezer = ctx.sender();

        let mut maybe_assets_details = assets.details().try_get(&asset_id);
        assert!(maybe_assets_details.is_some(), 5);
        let mut assets_details = maybe_assets_details.extract();

        assert!(assets_details.get_status() == assets_detail::get_assets_status_frozen(), 5);
        assert!(assets_details.get_owner() == unfreezer, 6);

        assets_details.set_status(assets_detail::get_assets_status_live());
        assets.details().insert(asset_id, assets_details);
    }

    public entry fun block(assets: &mut Assets, asset_id: u32, who: address, ctx: &mut TxContext) {
        let blocker = ctx.sender();

        let maybe_assets_details = assets.details().try_get(&asset_id);
        assert!(maybe_assets_details.is_some(), 5);
        let assets_details = maybe_assets_details.borrow();

        assert!(assets_details.get_owner() == blocker, 6);

        let mut maybe_account = assets.account().try_get(&asset_id, &who);
        assert!(maybe_account.is_some(), 7);
        let mut account = maybe_account.extract();
        account.set_status(assets_account::get_account_status_blocked());
        assets.account().insert(asset_id, who, account);
    }

    public entry fun transfer_ownership(assets: &mut Assets, asset_id: u32, to: address, ctx: &mut TxContext) {
        let owner = ctx.sender();

        let mut maybe_assets_details = assets.details().try_get(&asset_id);
        assert!(maybe_assets_details.is_some(), 5);
        let mut assets_details = maybe_assets_details.extract();

        assert!(assets_details.get_owner() == owner, 6);

        assets_details.set_owner(to);
        assets.details().insert(asset_id, assets_details);
    }

    public fun balance_of(assets: &mut Assets, asset_id: u32, who: address): u64 {
        assets_functions::balance_of(assets, asset_id, who)
    }

    public fun supply_of(assets: &mut Assets, asset_id: u32): u64 {
        assets_functions::supply_of(assets, asset_id)
    }

    public fun metadata_of(assets: &mut Assets, asset_id: u32): (String, String, String, u8, String) {
        let maybe_metadata = assets.metadata().try_get(&asset_id);
        if (maybe_metadata.is_none()) {
            return (string::utf8(b""), string::utf8(b""), string::utf8(b""), 0, string::utf8(b""))
        };
        let metadata = maybe_metadata.borrow();
        let (name, symbol, description, decimals, url, _) = metadata.get();
        (name, symbol, description, decimals, url)
    }

    public fun owned_assets(assets: &mut Assets, owner: address): vector<u32> {
        let mut owned_assets = vector[];
        let asset_id = assets.next_asset_id().get();

        let mut i = 0;
        while (i  < asset_id) {
            if (assets.account().contains(&i, &owner)) {
                owned_assets.push_back(i);
            };
            i = i + 1;
        };
        owned_assets
    }
}