module counter::migrate {
    use obelisk::world::{World, AdminCap};

    const VERSION: u64 = 1;

    /// Not the right admin for this world
    const ENotAdmin: u64 = 0;
    const EWrongVersion: u64 = 1;
    const ENotUpgrade: u64 = 2;

    public entry fun run(world: &mut World, admin_cap: &AdminCap) {
        assert!(world.admin() == object::id(admin_cap), ENotAdmin);
        assert!(world.version() < VERSION, ENotUpgrade);
        *obelisk::world::mut_version(world, admin_cap) = VERSION;
    }

    public fun assert_version(world: &World){
        assert!(world.version() == VERSION, EWrongVersion);
    }
}
