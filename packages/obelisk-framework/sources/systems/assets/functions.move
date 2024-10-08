module obelisk::assets_functions {
    use std::string::String;
    use obelisk::assets_metadata;
    use obelisk::assets_schema::Assets;
    use obelisk::assets_account;
    use obelisk::assets_detail;

    public(package) fun do_create(
        assets: &mut Assets,
        is_mintable: bool,
        is_burnable: bool,
        is_freezable: bool,
        owner: address,
        name: String,
        symbol: String,
        description: String,
        decimals: u8,
        url: String,
        info: String,

    ): u32 {
        let asset_id = assets.next_asset_id().get();

        // set the assets details
        let assets_details = assets_detail::new(
            owner,
            0,
            0,
            0,
            assets_detail::get_assets_status_live(),
            is_mintable,
            is_burnable,
            is_freezable
        );
        assets.details().insert(asset_id, assets_details);

        // set the metadata
        let assets_metadata = assets_metadata::new(name, symbol, description, decimals, url, info);
        assets.metadata().insert(asset_id, assets_metadata);

        // Increment the asset ID
        assets.next_asset_id().set(asset_id + 1);

        asset_id
    }

    public(package) fun can_increase(asset_id: u32, beneficiary: address, amount: u64, assets: &mut Assets) {
        assert!(assets.details().contains(&asset_id), 0);
        let details = assets.details().get(&asset_id);
        let (_, supply, _, _, status) = details.get();

        assert!(amount < 18446744073709551615u64 - supply, 2);
        assert!(status != assets_detail::get_assets_status_destroying(), 3);

        let maybe_account = assets.account().try_get(&asset_id, &beneficiary);
        if (maybe_account.is_some()) {
            let account = maybe_account.borrow();
            let (balance, status) = account.get();
            assert!(balance + amount < 18446744073709551615u64, 3);
            assert!(status != assets_account::get_account_status_blocked(), 4);
        };
    }

    public fun can_decrease(asset_id: u32, who: address, amount: u64, assets: &mut Assets) {
        assert!(assets.details().contains(&asset_id), 0);
        let details = assets.details().get(&asset_id);
        let (_, supply, _, _, status) = details.get();

        assert!(supply >= amount, 2);
        assert!(status == assets_detail::get_assets_status_live(), 5);

        assert!(assets.account().contains(&asset_id, &who), 6);
        let account = assets.account().get(&asset_id, &who);
        let (balance, status) = account.get();
        assert!(balance >= amount, 4);
        assert!(status != assets_account::get_account_status_frozen(), 5);
        assert!(status != assets_account::get_account_status_blocked(), 5);
    }

    public (package) fun increase_balance(asset_id: u32, beneficiary: address, amount: u64, assets: &mut Assets) {
        // Ensure that the asset can be increased
        can_increase(asset_id, beneficiary, amount, assets);

        if (assets.account().contains(&asset_id, &beneficiary)) {
            // Increase the balance
            let account = assets.account().get_mut(&asset_id, &beneficiary);
            let balance = account.get_balance();
            account.set_balance(balance + amount);
        } else {
            // If the account does not exist, increment the number of accounts
            let assets_details = assets.details().get_mut(&asset_id);
            let accounts = assets_details.get_accounts() + 1;
            assets_details.set_accounts(accounts);
            let account = assets_account::new(amount, assets_account::get_account_status_liquid());
            assets.account().insert(asset_id, beneficiary, account);
        };
    }


    public(package) fun decrease_balance(asset_id: u32, who: address, amount: u64, assets: &mut Assets) {
        can_decrease(asset_id, who, amount, assets);

        let account = assets.account().get_mut(&asset_id, &who);

        // Decrease the balance
        if (account.get_balance() == amount) {
            let details = assets.details().get_mut(&asset_id);
            let accounts = details.get_accounts() - 1;
            details.set_accounts(accounts);
            assets.account().remove(&asset_id, &who);
        } else {
            let balance = account.get_balance() - amount;
            account.set_balance(balance);
        };
    }

    public(package) fun do_mint(asset_id: u32, to: address, amount: u64, assets: &mut Assets) {
        increase_balance(asset_id, to, amount, assets);

        let assets_details = assets.details().get_mut(&asset_id);
        let supply = assets_details.get_supply() + amount;
        assets_details.set_supply(supply);
    }

    public(package) fun do_burn(asset_id: u32, who: address, amount: u64, assets: &mut Assets) {
        decrease_balance(asset_id, who, amount, assets);

        let assets_details = assets.details().get_mut(&asset_id);
        let supply = assets_details.get_supply() - amount;
        assets_details.set_supply(supply);
    }

    public(package) fun do_transfer(asset_id: u32, from: address, to: address, amount: u64, assets: &mut Assets): u64 {
        if (from == to || amount == 0) {
            return amount
        };
        decrease_balance(asset_id, from, amount, assets);
        increase_balance(asset_id, to, amount, assets);
        amount
    }

    public fun balance_of(assets: &mut Assets, asset_id: u32, who: address): u64 {
        let maybe_account = assets.account().try_get(&asset_id, &who);
        if (maybe_account.is_none()) {
            return 0
        };
        let account = maybe_account.borrow();
        account.get_balance()
    }

    public fun supply_of(assets: &mut Assets, asset_id: u32): u64 {
        let maybe_assets_details = assets.details().try_get(&asset_id);
        if (maybe_assets_details.is_none()) {
            return 0
        };
        let assets_details = maybe_assets_details.borrow();
        assets_details.get_supply()
    }

}