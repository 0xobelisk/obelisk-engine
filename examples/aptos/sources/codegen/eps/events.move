module examples::events {
    use std::option::Option;
    use aptos_framework::event;

    #[event]
    struct SchemaSetRecord<T: drop + store> has drop, store {
        _obelisk_schema_id: vector<u8>,
        _obelisk_schema_type: u8,
        _obelisk_entity_key: Option<address>,
        _obelisk_data: T
    }

    #[event]
    struct SchemaRemoveRecord has drop, store {
        _obelisk_schema_id: vector<u8>,
        _obelisk_entity_key: address
    }

    public fun emit_set<T: drop + store>(_obelisk_schema_id: vector<u8>, _obelisk_schema_type: u8, _obelisk_entity_key: Option<address>, _obelisk_data: T) {
        event::emit(SchemaSetRecord { _obelisk_schema_id, _obelisk_schema_type, _obelisk_entity_key, _obelisk_data });
    }

    public fun emit_remove(_obelisk_schema_id: vector<u8>, _obelisk_entity_key: address) {
        event::emit(SchemaRemoveRecord { _obelisk_schema_id, _obelisk_entity_key });
    }
}
