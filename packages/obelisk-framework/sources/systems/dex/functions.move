module obelisk::dex_functions {
    use std::debug;
    use std::debug::print;
    use std::string;
    use std::string::String;
    use obelisk::assets_functions;
    use obelisk::assets_schema::Assets;
    use obelisk::dex_schema::Dex;
    use obelisk::assets_metadata::AssetsMetadata;

    public struct BalancePathElement has drop, copy, store {
        asset_id: u32,
        balance: u64,
    }

    public(package) fun sort_assets(asset1: u32, asset2: u32): (u32, u32) {
        assert!(asset1 != asset2, 0);

        if (asset1 < asset2) {
            (asset1, asset2)
        } else {
            (asset2, asset1)
        }
    }

    public(package) fun get_pool_id(asset1: u32, asset2: u32, dex: &Dex): u32 {
        let (asset1, asset2) = sort_assets(asset1, asset2);
        assert!(dex.borrow_pool_id().contains_key(asset1, asset2), 0);
        dex.borrow_pool_id().get(asset1, asset2)
    }

    public(package) fun pool_asset_symbol(asset1_metadata: AssetsMetadata, asset2_metadata: AssetsMetadata): String {
        let asset1_symbol = asset1_metadata.get_symbol();
        let asset2_symbol = asset2_metadata.get_symbol();
        let mut lp_asset_symbol = string::utf8(b"");
        lp_asset_symbol.append(asset1_symbol);
        lp_asset_symbol.append_utf8(b"-");
        lp_asset_symbol.append(asset2_symbol);
        lp_asset_symbol
    }

    public(package) fun mul_div(x: u64, y: u64, z: u64): u64 {
        assert!(z > 0, 0);
        let r = (x as u128) * (y as u128) / (z as u128);
        assert!(r < (18446744073709551615u64 as u128), 0);
        r as u64
    }

    public(package) fun mul_sqrt(x: u64, y: u64): u64 {
        let r = (x as u128) * (y as u128);
        let r = r.sqrt();
        assert!(r < (18446744073709551615u64 as u128), 0);
        r as u64
    }

    public(package) fun qoute(amount: u64, reserve1: u64, reserve2: u64): u64 {
        mul_div(amount, reserve2, reserve1)
    }

    /// Ensure that a path is valid.
    public(package) fun validate_swap_path(dex: &Dex, path: vector<u32>) {
        let mut len = path.length();
        assert!(len >= 2, 0);
        // TODO: Check MaxSwapPathLength
        while (len > 1) {
            let asset1 = path[len - 2];
            let asset2 = path[len - 1];

            let (asset1, asset2) = sort_assets(asset1, asset2);
            assert!(dex.borrow_pool_id().contains_key(asset1, asset2), 0);
            len = len - 1;
        }
    }

    public(package) fun get_reserves(asset1: u32, asset2: u32, dex: &Dex, assets: &Assets): (u64, u64) {
        let pool_id = get_pool_id(asset1, asset2, dex);
        assert!(dex.borrow_pools().contains_key(pool_id), 0);
        let pool = dex.borrow_pools().get(pool_id);

        let balance1 = assets_functions::balance_of(assets, asset1, pool.get_pool_address());
        let balance2 = assets_functions::balance_of(assets, asset2, pool.get_pool_address());
        (balance1, balance2)
    }

    // Calculates amount out.
    //
    // Given an input amount of an asset and pair reserves, returns the maximum output amount
    // of the other asset.
    // TODO: Dynamic fee
    public(package) fun get_amount_out(amount_in: u64, reserve_in: u64, reserve_out: u64): u64 {
        assert!(reserve_in > 0 && reserve_out > 0, 0);
        let amount_in_with_fee = amount_in * 997;
        let numerator = amount_in_with_fee * reserve_out;
        let denominator = reserve_in * 1000 + amount_in_with_fee;
        debug::print(&numerator);
        debug::print(&denominator);
        numerator / denominator
    }

    // Calculates amount out.
    //
    // Given an input amount of an asset and pair reserves, returns the maximum output amount
    // of the other asset.
    // TODO: Dynamic fee
    public(package) fun get_amount_in(amount_out: u64, reserve_in: u64, reserve_out: u64): u64 {
        assert!(reserve_in > 0 && reserve_out > 0, 0);
        let numerator = reserve_in * amount_out * 1000;
        let denominator = (reserve_out - amount_out) * 997;
        numerator / denominator + 1
    }

    public(package) fun balance_path_from_amount_in(amount_in: u64, path: vector<u32>, dex: &Dex, assets: &Assets): (vector<BalancePathElement>, u64) {
        let mut amount_out = amount_in;
        let mut balance_path = vector[];
        let len = path.length();

        let mut i = 0;
        while (i < len) {
            let asset1 = path[i];
            if (i + 1 < len) {
                let asset2 = path[i + 1];
                let (reserve_in, reserve_out) = get_reserves(asset1, asset2, dex, assets);
                balance_path.push_back(BalancePathElement { asset_id: asset1, balance: amount_out });
                amount_out = get_amount_out(amount_out, reserve_in, reserve_out);
            } else {
                balance_path.push_back(BalancePathElement { asset_id: asset1, balance: amount_out });
                break
            };
            i = i + 1;
        };
        (balance_path, balance_path[len - 1].balance)
    }

    public(package) fun balance_path_from_amount_out(amount_out: u64, path: vector<u32>, dex: &Dex, assets: &Assets): (vector<BalancePathElement>, u64) {
        let mut amount_in = amount_out;
        let mut path = path;
        path.reverse();
        let len = path.length();

        let mut balance_path = vector[];

        let mut i = 0;
        while (i < len) {
            let asset2 = path[i];
            if (i + 1 < len) {
                let asset1 = path[i + 1];
                let (reserve_in, reserve_out) = get_reserves(asset1, asset2, dex, assets);
                balance_path.push_back(BalancePathElement { asset_id: asset2, balance: amount_in });
                amount_in = get_amount_in(amount_in, reserve_in, reserve_out);
            } else {
                balance_path.push_back(BalancePathElement { asset_id: asset2, balance: amount_in });
                break
            };
            i = i + 1;
        };
        balance_path.reverse();
        (balance_path, balance_path[0].balance)
    }

    public(package) fun credit_swap(path: vector<BalancePathElement>, dex: &mut Dex, assets: &mut Assets): (u32, u64) {
        let len = path.length();
        let mut pos = 0;
        let mut return_balance = 0;
        let mut return_asset_id = 0;
        while (pos < len) {
            let asset1 = path[pos].asset_id;

            if(pos + 1 < len) {
                let asset2 = path[pos + 1].asset_id;
                let amount_out = path[pos + 1].balance;
                let dex_pool_id = get_pool_id(asset1, asset2, dex);
                let pool = dex.borrow_mut_pools().get(dex_pool_id);
                let pool_from_address = pool.get_pool_address();

                if (pos + 2 < len) {
                    let asset3 = path[pos + 2].asset_id;
                    let dex_pool_id = get_pool_id(asset2, asset3, dex);

                    let pool = dex.borrow_mut_pools().get(dex_pool_id);
                    let pool_to_address = pool.get_pool_address();
                    assets_functions::do_transfer(asset2, pool_from_address, pool_to_address, amount_out, assets);
                } else {
                    assets_functions::do_burn(asset2, pool_from_address, amount_out, assets);
                    return_asset_id = asset2;
                    return_balance = amount_out;
                    break
                };
            };

            pos = pos + 1;
        };

        let asset1 = path[0].asset_id;
        let amount_in = path[0].balance;
        let asset2 = path[1].asset_id;

        let dex_pool_id = get_pool_id(asset1, asset2, dex);

        let pool = dex.borrow_mut_pools().get(dex_pool_id);
        let pool_to_address = pool.get_pool_address();
        assets_functions::do_mint(asset1, pool_to_address, amount_in, assets);
        (return_asset_id, return_balance)
    }

    // Swap assets along the `path`, withdrawing from `sender` and depositing in `send_to`.
    // Note: It's assumed that the provided `path` is valid.
    public(package) fun swap(sender: address, path: vector<BalancePathElement>, send_to: address, dex: &mut Dex, assets: &mut Assets) {
        let asset_in = path[0].asset_id;
        let amount_in = path[0].balance;
        // Withdraw the first asset from the sender
        assets_functions::do_burn(asset_in, sender, amount_in, assets);
        let (asset_id, balance) = credit_swap(path, dex, assets);
        // Deposit the last asset to the send_to
        assets_functions::do_mint(asset_id, send_to, balance, assets);
    }

    public(package) fun do_swap_exact_tokens_for_tokens(
        dex: &mut Dex,
        assets: &mut Assets,
        sender: address,
        path: vector<u32>,
        amount_in: u64,
        amount_out_min: u64,
        to: address
    ) {
        assert!(amount_in > 0, 0);
        assert!(amount_out_min >= 0, 0);

        validate_swap_path(dex, path);
        let (path, amount_out) = balance_path_from_amount_in(amount_in, path, dex, assets);
        print(&path);
        assert!(amount_out >= amount_out_min, 0);

        swap(sender, path, to, dex, assets);
    }

    /// Take the `path[0]` asset and swap some amount for `amount_out` of the `path[1]`. If an
    /// `amount_in_max` is specified, it will return an error if acquiring `amount_out` would be
    /// too costly.
    ///
    /// Withdraws `path[0]` asset from `sender`, deposits the `path[1]` asset to `send_to`,
    /// respecting `keep_alive`.
    ///
    /// If successful returns the amount of the `path[0]` taken to provide `path[1]`.
    ///
    /// WARNING: This may return an error after a partial storage mutation. It should be used
    /// only inside a transactional storage context and an Err result must imply a storage
    /// rollback.
    public(package) fun do_swap_tokens_for_exact_tokens(
        dex: &mut Dex,
        assets: &mut Assets,
        sender: address,
        path: vector<u32>,
        amount_out: u64,
        amount_in_max: u64,
        to: address) {
        assert!(amount_out > 0, 0);
        assert!(amount_in_max > 0, 0);

        validate_swap_path(dex, path);
        let (path, amount_in) = balance_path_from_amount_out(amount_out, path, dex, assets);

        print(&path);
        assert!(amount_in <= amount_in_max, 0);

        swap(sender, path, to, dex, assets);
    }
}