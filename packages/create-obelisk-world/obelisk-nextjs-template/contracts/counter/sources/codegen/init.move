module counter::init {
    use std::ascii::string;
    use sui::transfer;
    use sui::tx_context::TxContext;
    use counter::world;
	use counter::counter_schema;

    fun init(ctx: &mut TxContext) {
        let _obelisk_world = world::create(string(b"Counter"), string(b"Counter"),ctx);

        // Add Schema
		counter_schema::register(&mut _obelisk_world, ctx);

        transfer::public_share_object(_obelisk_world);
    }

    #[test_only]
    public fun init_world_for_testing(ctx: &mut TxContext){
        init(ctx)
    }
}
