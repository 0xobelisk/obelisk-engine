module obelisk::wrapper_schema {
    use sui::bag;
    use sui::bag::Bag;
    use sui::transfer::public_share_object;

    public struct Wrapper has key, store {
        id: UID,
        asset_ids: Bag,
        pools: Bag,
        coins: Bag,
    }

    public(package) fun asset_ids(self: &mut Wrapper): &mut Bag {
        &mut self.asset_ids
    }

    public(package) fun pools(self: &mut Wrapper): &mut Bag {
        &mut self.pools
    }

    public(package) fun coins(self: &mut Wrapper): &mut Bag {
        &mut self.coins
    }

    fun init(ctx: &mut TxContext) {
        let wrap = Wrapper {
            id: object::new(ctx),
            asset_ids: bag::new(ctx),
            pools: bag::new(ctx),
            coins: bag::new(ctx),
        };
        public_share_object(wrap);
    }

    #[test_only]
    public fun init_wrap_for_testing(ctx: &mut TxContext){
        init(ctx)
    }

}