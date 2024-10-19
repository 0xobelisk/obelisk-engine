module obelisk::wrapper_system {
    use std::ascii::String;
    use obelisk::assets_functions;
    use sui::balance;
    use sui::balance::Balance;
    use sui::coin;
    use sui::coin::Coin;
    use obelisk::wrapper_coin;
    use obelisk::wrapper_coin::WrapperCoin;
    use obelisk::assets_schema::Assets;
    use obelisk::wrapper_schema::Wrapper;

    public entry fun register<T>(wrapper: &mut Wrapper, assets: &mut Assets, name: String, symbol: String, description: String, decimals: u8, url: String, info: String, ctx: &mut TxContext) {
        let asset_id = assets.borrow_mut_next_asset_id().get();
        wrapper.borrow_mut_asset_ids().add<WrapperCoin<T>, u32>(wrapper_coin::new(), asset_id);
        wrapper.borrow_mut_coins().add<u32, WrapperCoin<T>>(asset_id , wrapper_coin::new());
        wrapper.borrow_mut_pools().add<u32, Balance<T>>(asset_id, balance::zero<T>());
        assets_functions::do_create(assets, false, false, true, ctx.sender(), name, symbol, description, decimals, url, info);
    }

    public entry fun wrap<T>(wrapper: &mut Wrapper, assets: &mut Assets, coin: Coin<T>, beneficiary: address, _ctx: &mut TxContext) {
        let wrapper_coin = wrapper_coin::new<T>();
        assert!(wrapper.borrow_asset_ids().contains(wrapper_coin), 0);
        let asset_id = *wrapper.borrow_asset_ids().borrow<WrapperCoin<T>, u32>(wrapper_coin);
        let amount = coin.value();
        let pool_balance = wrapper.borrow_mut_pools().borrow_mut<u32, Balance<T>>(asset_id);
        pool_balance.join(coin.into_balance());

        assets_functions::do_mint(asset_id, beneficiary, amount, assets);
    }

    public entry fun unwrap<T>(wrapper: &mut Wrapper, assets: &mut Assets, amount: u64, beneficiary: address, ctx: &mut TxContext) {
        let wrapper_coin = wrapper_coin::new<T>();
        assert!(wrapper.borrow_mut_asset_ids().contains(wrapper_coin), 0);
        let asset_id = *wrapper.borrow_mut_asset_ids().borrow<WrapperCoin<T>, u32>(wrapper_coin);
        assets_functions::do_burn(asset_id, ctx.sender(), amount, assets);

        let pool_balance = wrapper.borrow_mut_pools().borrow_mut<u32, Balance<T>>(asset_id);
        let coin =  coin::from_balance<T>(pool_balance.split(amount), ctx);
        transfer::public_transfer(coin, beneficiary);
    }

    public fun wrapped_assets(wrapper: &Wrapper, assets: &Assets): vector<u32> {
        let mut wrapped_assets = vector[];
        let asset_ids = assets.borrow_details().keys();
        let mut i = 0;
        while (i  < (asset_ids.length() as u32)) {
            if (wrapper.borrow_coins().contains(i)) {
                wrapped_assets.push_back(i);
            };
            i = i + 1;
        };
        wrapped_assets
    }
}