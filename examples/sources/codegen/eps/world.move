module examples::world {
    use std::ascii::String;
    use std::option::Option;
    use sui::event;
    use sui::tx_context::TxContext;
    use sui::bag::{ Self, Bag };
    use sui::object::{ Self, UID };

    const CompDoesNotExist: u64 = 0;
    const CompAlreadyExists: u64 = 1;

    struct World has key, store{
        id: UID,
        /// Name of the world
        name: String,
        /// Description of the world
        description: String,
        /// Components of the world
        components: Bag,
    }

    struct CompRemoveField has copy, drop {
        comp: address,
        key: address
    }

    struct CompAddField has copy, drop {
        comp: address,
        key: address,
        data: vector<u8>
    }

    struct CompUpdateField has copy, drop {
        comp: address,
        key: Option<address>,
        data: vector<u8>
    }

    public fun create(name: String, description: String, ctx: &mut TxContext): World {
        World {
            id: object::new(ctx),
            name,
            description,
            components: bag::new(ctx),
        }
    }

    public fun info(world: &World): (String, String) {
        (world.name, world.description)
    }

    public fun get_component<T : store>(world: &World, id: address): &T {
        assert!(bag::contains(&world.components, id), CompDoesNotExist);
        bag::borrow<address, T>(&world.components, id)
    }

    public fun get_mut_component<T : store>(world: &mut World, id: address): &mut T {
        assert!(bag::contains(&world.components, id), CompDoesNotExist);
        bag::borrow_mut<address, T>(&mut world.components, id)
    }

    public fun add_component<T : store>(world: &mut World, id: address, component: T){
        assert!(!bag::contains(&world.components, id), CompAlreadyExists);
        bag::add<address,T>(&mut world.components, id, component);
    }

    public fun contains(world: &mut World, id: address): bool {
        bag::contains(&mut world.components, id)
    }

    public fun emit_remove_event(comp: address, key: address) {
        event::emit(CompRemoveField { comp, key })
    }

    public fun emit_add_event(comp: address, key: address, data: vector<u8>) {
        event::emit(CompAddField { comp, key, data})
    }

    public fun emit_update_event(comp: address, key: Option<address>, data: vector<u8>) {
        event::emit(CompUpdateField { comp, key, data})
    }
}
