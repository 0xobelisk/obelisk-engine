module components::sex {
    use sui::tx_context::TxContext;
    use sui::object;
    use eps::entity;
    use eps::world;
    use eps::world::{World};
    use components::utils::generate_component_id;

    const COMPONENT_NAME: vector<u8> = b"Obelisk component sex";

    struct Sex has store {
        value: bool
    }

    public fun update_sex<T : key + store>(world: &mut World, entity_key: &T, sex: bool, _ctx: &mut TxContext) {
        let id = object::id(entity_key);
        let entity = world::get_mut_entity(world, id);
        let components_id = generate_component_id(COMPONENT_NAME);
        let component = entity::get_component<Sex>(entity, components_id);
        component.value = sex;
    }

    public fun get_sex<T : key + store>(world: &mut World, entity_key: &T): bool {
        let id = object::id(entity_key);
        let entity = world::get_mut_entity(world, id);
        let components_id = generate_component_id(COMPONENT_NAME);
        let component = entity::get_component<Sex>(entity, components_id);
        component.value
    }
}