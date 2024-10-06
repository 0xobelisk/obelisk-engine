module obelisk::wrapper_system {
    use std::string::String;
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
        let asset_id = assets.next_asset_id().get();
        wrapper.asset_ids().add<WrapperCoin<T>, u32>(wrapper_coin::new(), asset_id);
        wrapper.coins().add<u32, WrapperCoin<T>>(asset_id , wrapper_coin::new());
        wrapper.pools().add<u32, Balance<T>>(asset_id, balance::zero<T>());
        assets_functions::do_create(assets, ctx.sender(), name, symbol, description, decimals, url, info);
    }

    public entry fun wrap<T>(wrapper: &mut Wrapper, assets: &mut Assets, coin: Coin<T>, beneficiary: address, _ctx: &mut TxContext) {
        let wrapper_coin = wrapper_coin::new<T>();
        assert!(wrapper.asset_ids().contains(wrapper_coin), 0);
        let asset_id = *wrapper.asset_ids().borrow<WrapperCoin<T>, u32>(wrapper_coin);
        let pool_balance = wrapper.pools().borrow_mut<u32, Balance<T>>(asset_id);
        let amount = pool_balance.join(coin.into_balance());

        assets_functions::increase_balance(asset_id, beneficiary, amount as u64, assets);
    }

    public entry fun unwrap<T>(wrapper: &mut Wrapper, assets: &mut Assets, amount: u64, beneficiary: address, ctx: &mut TxContext) {
        let wrapper_coin = wrapper_coin::new<T>();
        assert!(wrapper.asset_ids().contains(wrapper_coin), 0);
        let asset_id = *wrapper.asset_ids().borrow<WrapperCoin<T>, u32>(wrapper_coin);
        assets_functions::decrease_balance(asset_id, ctx.sender(), amount, assets);

        let pool_balance = wrapper.pools().borrow_mut<u32, Balance<T>>(asset_id);
        let coin =  coin::from_balance<T>(pool_balance.split(amount), ctx);
        transfer::public_transfer(coin, beneficiary);
    }

    public fun wrapped_assets(wrapper: &mut Wrapper, assets: &mut Assets): vector<u32> {
        let mut wrapped_assets = vector[];
        let asset_id = assets.next_asset_id().get();
        let mut i = 0;
        while (i  < asset_id) {
            if (wrapper.coins().contains(i)) {
                wrapped_assets.push_back(i);
            };
            i = i + 1;
        };
        wrapped_assets
    }
}