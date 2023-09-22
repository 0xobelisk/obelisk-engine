module examples::init {
    use std::ascii::string;
    use sui::transfer;
    use sui::tx_context::TxContext;
    use examples::world;
    use examples::single_column_comp;
    use examples::multi_column_comp;
    use examples::single_value_comp;

    fun init(ctx: &mut TxContext) {
        let world = world::create(string(b"Examples"), string(b"Examples description"),ctx);

        // Add Component
        single_column_comp::register(&mut world, ctx);
        multi_column_comp::register(&mut world, ctx);
        single_value_comp::register(&mut world);

        transfer::public_share_object(world);
    }

    #[test_only]
    public fun init_world_for_testing(ctx: &mut TxContext){
        init(ctx)
    }
}
