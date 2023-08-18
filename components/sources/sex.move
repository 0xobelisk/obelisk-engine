module components::sex_component {
    use sui::tx_context::TxContext;
    use eps::entity;
    use eps::world;
    use eps::world::{World};
    use components::utils::generate_component_id;

    const COMPONENT_NAME: vector<u8> = b"Obelisk component sex";

    struct SexComponent has store {
        value: bool
    }

    public fun new_sex(sex: bool): SexComponent {
        SexComponent {
            value : sex
        }
    }

    public fun update_sex<T : key + store>(world: &mut World, obj: &T, sex: bool, _ctx: &mut TxContext) {
        let entity = world::get_mut_entity(world, obj);
        let components_id = generate_component_id(COMPONENT_NAME);
        let component = entity::get_mut_component<SexComponent>(entity, components_id);
        component.value = sex;
    }

    public fun get_sex<T : key + store>(world: &mut World, obj: &T): bool {
        let entity = world::get_mut_entity(world, obj);
        let components_id = generate_component_id(COMPONENT_NAME);
        let component = entity::get_mut_component<SexComponent>(entity, components_id);
        component.value
    }
}