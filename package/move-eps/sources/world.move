module eps::world {
    use sui::object::UID;
    use sui::object;
    use sui::tx_context::TxContext;
    use sui::bag::Bag;
    use sui::bag;
    use eps::entity::{Entity, get_components};

    struct World has key,store{
        id: UID,
        entities: Bag
    }


    public fun create_world(ctx: &mut TxContext):World{
        World{
            id:object::new(ctx),
            entities:bag::new(ctx)
        }
    }


    public fun get_mut_entity(world: &mut World,entity_id: u64): &mut Entity {
        bag::borrow_mut<u64,Entity>(&mut world.entities,entity_id)
    }

    public fun add_entity_in_world<T:store>(world:&mut World,entity:T){
        let entity_length = bag::length(&world.entities);
        bag::add(&mut world.entities, entity_length, entity);
    }

    public fun remove_entity(world: &mut World,entity_id: u64) : Entity {
       bag::remove<u64,Entity>(&mut world.entities,entity_id)
    }

    public fun add_component<T: store>(world: &mut World, entity_id: u64,component:T){
        let entity = get_mut_entity(world,entity_id);
        let components = get_components(entity);
        let components_length =  bag::length(components);
        bag::add(components, components_length, component);
    }

    public fun remove_component<T: store + drop >(world: &mut World, entity_id: u64,component_id:u64){
        let entity = get_mut_entity(world,entity_id);
        let components= get_components(entity);
        bag::remove<u64,T>(components,component_id);
    }

}
