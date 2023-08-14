module eps::entity {
    use sui::bag::Bag;
    use sui::bag;
    use sui::tx_context::TxContext;

    struct Entity has store  {
        components: Bag
    }

    public fun create_entity(ctx: &mut TxContext): Entity {
        Entity {
            components: bag::new(ctx)
        }
    }

    public fun get_components(entity: &mut Entity): &mut Bag {
        &mut entity.components
    }

    public fun get_component<T: store>(entity: &mut Entity, component_id: vector<u8>): &mut T {
        assert!(bag::contains(&entity.components, component_id),0);
        bag::borrow_mut<vector<u8>,T>(&mut entity.components,component_id)
    }

}
