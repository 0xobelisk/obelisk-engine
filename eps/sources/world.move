module eps::world {
    use sui::object::{UID, ID};
    use sui::object;
    use sui::tx_context::TxContext;
    use sui::bag::Bag;
    use sui::bag;
    use eps::entity::Entity;
    use sui::tx_context;
    use sui::hash::keccak256;

    struct World has key, store{
        id: UID,
        /// Owner of the world
        owner: address,
        /// Name for the world
        name: vector<u8>,
        /// Description of the world
        description: vector<u8>,
        /// entity set
        entities: Bag
    }


    public fun create_world(ctx: &mut TxContext, name: vector<u8>, description: vector<u8>): World{
        World {
            id: object::new(ctx),
            owner: tx_context::sender(ctx),
            name,
            description,
            entities:bag::new(ctx)
        }
    }

    public fun get_world_owner(world: &World): address {
        world.owner
    }

    public fun get_world_name(world: &World): vector<u8> {
        world.name
    }

    public fun get_world_description(world: &World): vector<u8> {
        world.description
    }

    public fun get_entity(world: &World, obj_id: ID): &Entity {
        bag::borrow<ID,Entity>(&world.entities, obj_id)
    }

    public fun get_mut_entity<T : key + store>(world: &mut World, obj: &T): &mut Entity {
        let entity_key = object::id(obj);
        bag::borrow_mut<ID,Entity>(&mut world.entities, entity_key)
    }

    public fun add_entity_in_world<T : key + store>(world: &mut World, obj: &T, entity: Entity){
        let entity_key = object::id(obj);
        bag::add(&mut world.entities, entity_key, entity);
    }

    public fun get_mut_custom_entity<T : store>(world: &mut World, entity_key: vector<u8>, ctx: &mut TxContext): &mut T {
        let owner = get_world_owner(world);
        assert!(tx_context::sender(ctx) == owner, 0);
        let entity_key = keccak256(&entity_key);
        let entity_id = object::id_from_bytes(entity_key);
        bag::borrow_mut<ID, T>(&mut world.entities, entity_id)
    }

    public fun add_custom_entity_in_world<T : store>(world: &mut World, entity_key: vector<u8>, obj: T, ctx: &mut TxContext){
        let owner = get_world_owner(world);
        assert!(tx_context::sender(ctx) == owner, 0);
        let entity_key = keccak256(&entity_key);
        let entity_id = object::id_from_bytes(entity_key);
        bag::add(&mut world.entities, entity_id, obj);
    }

    public fun remove_entity<T : key + store>(world: &mut World, obj: &T) : Entity {
        let entity_key = object::id(obj);
       bag::remove<ID,Entity>(&mut world.entities,entity_key)
    }

    public fun entities_length(world: &mut World) : u64 {
        bag::length(&mut world.entities)
    }
}
