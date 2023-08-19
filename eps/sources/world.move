module eps::world {
    use sui::object::{UID, ID};
    use sui::object;
    use sui::tx_context::TxContext;
    use sui::bag::Bag;
    use sui::bag;
    use eps::entity::Entity;
    use std::string;

    struct World has key, store{
        id: UID,
        /// Name for the world
        name: string::String,
        /// Description of the world
        description: string::String,
        /// entity set
        entities: Bag
    }


    public fun create_world(ctx: &mut TxContext, name: vector<u8>, description: vector<u8>): World{
        World {
            id: object::new(ctx),
            name: string::utf8(name),
            description: string::utf8(description),
            entities:bag::new(ctx)
        }
    }

    public fun get_entity(world: &World, obj_id: ID): &Entity {
        bag::borrow<ID,Entity>(&world.entities, obj_id)
    }

    public fun get_mut_entity<T : key + store>(world: &mut World, obj: &T): &mut Entity {
        let entity_key = object::id(obj);
        bag::borrow_mut<ID,Entity>(&mut world.entities, entity_key)
    }

    public fun add_entity_in_world<T : key + store>(world:&mut World, obj: &T, entity: Entity){
        let entity_key = object::id(obj);
        bag::add(&mut world.entities, entity_key, entity);
    }

    public fun remove_entity<T : key + store>(world: &mut World, obj: &T) : Entity {
        let entity_key = object::id(obj);
       bag::remove<ID,Entity>(&mut world.entities,entity_key)
    }
}
