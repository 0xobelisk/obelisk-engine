module obelisk::dex_system {
    use std::string;
    use obelisk::dex_functions::{sort_assets, get_pool_id};
    use sui::address;
    use obelisk::dex_pools;
    use obelisk::assets_functions;
    use obelisk::dex_functions;
    use obelisk::assets_schema::Assets;
    use obelisk::dex_schema::Dex;

    const LP_ASSET_DESCRIPTION: vector<u8> = b"Obelisk LP Asset";

    public entry fun create_pool(dex: &mut Dex, assets: &mut Assets, asset1: u32, asset2: u32, _ctx: &mut TxContext) {
        // let sender = ctx.sender();

        let (asset1, asset2) = sort_assets(asset1, asset2);

        assert!(assets.metadata().contains(&asset1), 0);
        assert!(assets.metadata().contains(&asset2), 0);
        assert!(!dex.pool_id().contains(&asset1, &asset2), 0);

        let pool_id = dex.next_pool_id().get();
        assert!(!dex.pools().contains(&pool_id), 0);

        let asset1_metadata = assets.metadata().get(&asset1);
        let asset2_metadata = assets.metadata().get(&asset2);
        let lp_asset_symbol = dex_functions::pool_asset_symbol(asset1_metadata, asset2_metadata);

        let pool_address = address::from_u256((pool_id as u256));
        let lp_asset_id = assets.next_asset_id().get();

        assets_functions::do_create(
            assets,
            false,
            false,
            true,
            @obelisk,
            lp_asset_symbol,
            lp_asset_symbol,
            string::utf8(LP_ASSET_DESCRIPTION),
            9,
            string::utf8(b""),
            string::utf8(b""),
        );

        dex.pool_id().insert(asset1, asset2, pool_id);
        dex.pools().insert(pool_id, dex_pools::new(pool_address, lp_asset_id));
        dex.next_pool_id().set(pool_id + 1);
    }

    public entry fun add_liquidity(dex: &mut Dex, assets: &mut Assets, asset1: u32, asset2: u32, amount1_desired: u64, amount2_desired: u64, amount1_min: u64, amount2_min: u64, ctx: &mut TxContext) {
        let sender = ctx.sender();

        let pool_id = get_pool_id(asset1, asset2, dex);
        assert!(dex.pools().contains(&pool_id), 0);
        let pool = dex.pools().get(&pool_id);

        let reserve1 = assets_functions::balance_of(assets, asset1, pool.get_pool_address());
        let reserve2 = assets_functions::balance_of(assets, asset2, pool.get_pool_address());
        let amount1;
        let amount2;
        if(reserve1 == 0 || reserve2 == 0) {
            amount1 = amount1_desired;
            amount2 = amount2_desired;
        } else {
            let amount2_optimal = dex_functions::qoute(amount1_desired, reserve1, reserve2);
            if(amount2_optimal <= amount2_desired) {
                assert!(amount2_optimal >= amount2_min, 0);
                amount1 = amount1_desired;
                amount2 = amount2_optimal;
            } else {
                let amount1_optimal = dex_functions::qoute(amount2_desired, reserve2, reserve1);
                assert!(amount1_optimal <= amount1_desired, 0);
                assert!(amount1_optimal >= amount1_min, 0);
                amount1 = amount1_optimal;
                amount2 = amount2_desired;
            }
        };

        assets_functions::do_transfer(asset1, sender, pool.get_pool_address(), amount1, assets);
        assets_functions::do_transfer(asset2, sender, pool.get_pool_address(), amount2, assets);

        let total_supply = assets_functions::supply_of(assets, pool.get_lp_asset_id());
        let lp_token_amount;
        if (total_supply == 0) {
            lp_token_amount = dex_functions::mul_sqrt(amount1, amount2);
        } else {
            let side1 = dex_functions::mul_div(amount1, total_supply, reserve1);
            let side2 = dex_functions::mul_div(amount2, total_supply, reserve2);
            lp_token_amount = side1.min(side2);
        };

        assets_functions::do_mint(pool.get_lp_asset_id(), sender, lp_token_amount, assets);
    }

    public entry fun remove_liquidity(dex: &mut Dex, assets: &mut Assets, asset1: u32, asset2: u32, lp_token_burn: u64, amount1_min_receive: u64, amount2_min_receive: u64, ctx: &mut TxContext) {
        let sender = ctx.sender();

        let pool_id = get_pool_id(asset1, asset2, dex);
        assert!(dex.pools().contains(&pool_id), 0);
        let pool = dex.pools().get(&pool_id);

        let reserve1 = assets_functions::balance_of(assets, asset1, pool.get_pool_address());
        let reserve2 = assets_functions::balance_of(assets, asset2, pool.get_pool_address());

        let total_supply = assets_functions::supply_of(assets, pool.get_lp_asset_id());
        assert!(total_supply >= lp_token_burn, 0);
        // TODO: Charge withdraw liquidity fee

        let amount1 = dex_functions::mul_div(lp_token_burn, reserve1, total_supply);
        let amount2 = dex_functions::mul_div(lp_token_burn, reserve2, total_supply);

        assert!(amount1 > 0 && amount1 >= amount1_min_receive, 0);
        assert!(amount2 > 0 && amount2 >= amount2_min_receive, 0);

        // burn the provided lp token amount that includes the fee
        assets_functions::do_burn(pool.get_lp_asset_id(), sender, lp_token_burn, assets);

        assets_functions::do_transfer(asset1, pool.get_pool_address(), sender, amount1, assets);
        assets_functions::do_transfer(asset2, pool.get_pool_address(), sender, amount2, assets);
    }

    /// Swap the exact amount of `asset1` into `asset2`.
    /// `amount_out_min` param allows you to specify the min amount of the `asset2`
    /// you're happy to receive.
    ///
    public entry fun swap_exact_tokens_for_tokens(dex: &mut Dex, assets: &mut Assets, path: vector<u32>, amount_in: u64, amount_out_min: u64, to: address, ctx: &mut TxContext) {
        let sender = ctx.sender();
        dex_functions::do_swap_exact_tokens_for_tokens(dex, assets, sender, path, amount_in, amount_out_min, to);
    }

    /// Swap any amount of `asset1` to get the exact amount of `asset2`.
    /// `amount_in_max` param allows to specify the max amount of the `asset1`
    /// you're happy to provide.
    ///
    public entry fun swap_tokens_for_exact_tokens(dex: &mut Dex, assets: &mut Assets, path: vector<u32>, amount_out: u64, amount_in_max: u64, to: address, ctx: &mut TxContext) {
        let sender = ctx.sender();
        dex_functions::do_swap_tokens_for_exact_tokens(dex, assets, sender, path, amount_out, amount_in_max, to);
    }

    public fun get_amount_out(dex: &mut Dex, assets: &mut Assets, path: vector<u32>, amount_in: u64): u64 {
        dex_functions::get_final_amount_out(dex, assets, path, amount_in)
    }

    public fun get_amount_in(dex: &mut Dex, assets: &mut Assets, path: vector<u32>, amount_out: u64): u64 {
        dex_functions::get_final_amount_in(dex, assets, path, amount_out)
    }
}