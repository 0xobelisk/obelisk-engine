module obelisk::world {
    use std::ascii::{String};
    use sui::bag::{Self, Bag};

    public struct AdminCap has key, store {
        id: UID,
    }

    public struct World has key, store {
        id: UID,
        /// Name of the world
        name: String,
        /// Description of the world
        description: String,
        /// Schemas of the world
        schemas: Bag,
        /// Schema names of the world
        schema_names: vector<String>,
        /// admin of the world
        admin: ID
    }

    public fun create(name: String, description: String, ctx: &mut TxContext): (World, AdminCap) {
        let admin_cap = AdminCap {
            id: object::new(ctx),
        };
        let world = World {
            id: object::new(ctx),
            name,
            description,
            schemas: bag::new(ctx),
            schema_names: vector::empty(),
            admin: object::id(&admin_cap)
        };
        (world, admin_cap)
    }
    
    public fun admin(world: &World): ID {
        world.admin
    }

    public fun info(world: &World): (String, String) {
        (world.name, world.description)
    }

    public fun schema_names(world: &World): vector<String> {
        world.schema_names
    }

    public(package) fun mut_schema_names(world: &mut World): &mut vector<String> {
        &mut world.schema_names
    }

    public(package) fun mut_uid(world: &mut World): &mut UID {
        &mut world.id
    }

    public(package) fun uid(world: &World): &UID {
        &world.id
    }

    public(package) fun schemas(world: &World): &Bag {
        &world.schemas
    }

    public(package) fun mut_schemas(world: &mut World): &mut Bag {
        &mut world.schemas
    }
}
