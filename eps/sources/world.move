module eps::world {
    use sui::object::{UID, ID};
    use sui::object;
    use sui::tx_context::TxContext;
    use sui::bag::Bag;
    use sui::bag;
    use eps::entity::{Entity, get_components};
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


    public fun get_mut_entity(world: &mut World, entity_key: ID): &mut Entity {
        assert!(bag::contains(&mut world.entities,entity_key),0);
        bag::borrow_mut<ID,Entity>(&mut world.entities, entity_key)
    }

    public fun add_entity_in_world(world:&mut World,entity_key: ID, entity: Entity){
        bag::add(&mut world.entities, entity_key, entity);
    }

    public fun remove_entity(world: &mut World,entity_key: ID) : Entity {
       bag::remove<ID,Entity>(&mut world.entities,entity_key)
    }

    public fun add_component<T: store>(world: &mut World, entity_key: ID, component:T){
        let entity = get_mut_entity(world, entity_key);
        let components = get_components(entity);
        let components_length =  bag::length(components);
        bag::add(components, components_length, component);
    }

    public fun remove_component<T: drop + store>(world: &mut World, entity_key: ID, component_id:u64){
        let entity = get_mut_entity(world, entity_key);
        let components= get_components(entity);
        bag::remove<u64,T>(components,component_id);
    }
}
