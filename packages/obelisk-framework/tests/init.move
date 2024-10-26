#[test_only]
module obelisk::init_tests {
    public fun init_obelisk_for_testing(ctx: &mut TxContext){
        obelisk::assets_schema::init_assets_for_testing(ctx);
        obelisk::dex_schema::init_dex_for_testing(ctx);
        obelisk::wrapper_schema::init_wrap_for_testing(ctx);
        obelisk::dapps_schema::init_dapps_for_testing(ctx);
    }
}