#[allow(lint(share_owned))]

module examples::init {
    use std::ascii::string;
    use examples::app_key::AppKey;
    use dubhe::access_control;
    use dubhe::world;
	use examples::single_column_schema;
	use examples::multi_column_schema;
	use examples::single_value_schema;
	use examples::single_struct_schema;

    fun init(ctx: &mut TxContext) {
        let (mut _dubhe_world, admin_cap) = world::create(string(b"Examples"), string(b"Examples"),ctx);

        // Authorize this application to access protected features of the World.
        access_control::authorize_app<AppKey>(&admin_cap, &mut _dubhe_world);

        // Add Schema
		single_column_schema::register(&mut _dubhe_world, &admin_cap, ctx);
		multi_column_schema::register(&mut _dubhe_world, &admin_cap, ctx);
		single_value_schema::register(&mut _dubhe_world, &admin_cap, ctx);
		single_struct_schema::register(&mut _dubhe_world, &admin_cap, ctx);

        transfer::public_share_object(_dubhe_world);
        transfer::public_transfer(admin_cap, tx_context::sender(ctx));
    }

    #[test_only]
    public fun init_world_for_testing(ctx: &mut TxContext){
        init(ctx)
    }
}
