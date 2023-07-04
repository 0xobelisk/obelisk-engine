module eps::component {
    use sui::object::UID;
    use sui::tx_context::TxContext;
    use sui::transfer::{public_share_object};
    use sui::object;

    struct Counter has key, store {
        id:UID,
        number: u256
    }

    public entry fun create_counter(ctx: &mut TxContext){
        let uid = object::new(ctx);
        public_share_object(Counter{
            id:uid,
            number:0u256
        })
    }

    public fun counter_change(counter: &mut Counter) {
        counter.number = counter.number + 1u256;
    }
}


