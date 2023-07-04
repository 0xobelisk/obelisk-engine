module eps::entity_manager {
    use sui::table::Table;
    use sui::table;
    use sui::object::UID;
    use sui::transfer;
    use sui::object;
    use sui::tx_context::TxContext;

    struct Entity has key,store{
        id:UID
    }

    struct Entity_Manager<phantom T:key + store> has key,store{
        id: UID,
        entity_component:Table<address,T>
    }

    public entry fun create_entity_manager<T:key + store>(ctx: &mut TxContext){
        transfer::public_share_object(Entity_Manager{
            id:object::new(ctx),
            entity_component:table::new<address,T>(ctx)
        })
    }

    public entry fun create_entity(ctx: &mut TxContext) {
        let uid = object::new(ctx);
        transfer::public_share_object(Entity{
            id:uid
        });
    }

    public entry fun add_componment<T:key + store>(entity:&mut Entity,componment:T,entity_manager:&mut Entity_Manager<T>){
        let address =  object::uid_to_address(&entity.id);
        table::add(&mut entity_manager.entity_component,address,componment)
    }
}
