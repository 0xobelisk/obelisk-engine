module counter::deploy_hook {
    use obelisk::world::{World, AdminCap};

    /// Not the right admin for this world
    const ENotAdmin: u64 = 0;

    public entry fun run(world: &mut World, admin_cap: &AdminCap) {
         assert!(world.admin() == object::id(admin_cap), ENotAdmin);
        
        // Logic that needs to be automated once the contract is deployed
        
    }

    #[test_only]
    public fun deploy_hook_for_testing(world: &mut World, admin_cap: &AdminCap){
        run(world, admin_cap)
    }
}
