module examples::init {
    use std::ascii::string;
    use sui::transfer;
    use sui::tx_context::TxContext;
    use examples::world;
    use examples::single_column_comp;
    use examples::multi_column_comp;
    use examples::ephemeral_comp;
    use examples::single_value_comp;
    use examples::single_struct_comp;

    fun init(ctx: &mut TxContext) {
        let _obelisk_world = world::create(string(b"Examples"), string(b"Examples"),ctx);

        // Add Component
        single_column_comp::register(&mut _obelisk_world, ctx);
        multi_column_comp::register(&mut _obelisk_world, ctx);
        ephemeral_comp::register(&mut _obelisk_world, ctx);
        single_value_comp::register(&mut _obelisk_world, ctx);
        single_struct_comp::register(&mut _obelisk_world, ctx);

        transfer::public_share_object(_obelisk_world);
    }

    #[test_only]
    public fun init_world_for_testing(ctx: &mut TxContext){
        init(ctx)
    }
}
