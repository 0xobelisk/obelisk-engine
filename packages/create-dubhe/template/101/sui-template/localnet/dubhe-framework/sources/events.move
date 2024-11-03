module dubhe::events {
    use sui::event;

    public struct SchemaSetRecord<T: copy + drop> has copy, drop {
        _dubhe_schema_id: vector<u8>,
        _dubhe_schema_type: u8,
        _dubhe_entity_key: Option<address>,
        data: T
    }

    public struct SchemaRemoveRecord has copy, drop {
        _dubhe_schema_id: vector<u8>,
        _dubhe_entity_key: address
    }

    public fun emit_set<T: copy + drop>(_dubhe_schema_id: vector<u8>, _dubhe_schema_type: u8, _dubhe_entity_key: Option<address>, data: T) {
        event::emit(SchemaSetRecord { _dubhe_schema_id, _dubhe_schema_type, _dubhe_entity_key, data})
    }

    public fun emit_remove(_dubhe_schema_id: vector<u8>, _dubhe_entity_key: address) {
        event::emit(SchemaRemoveRecord { _dubhe_schema_id, _dubhe_entity_key })
    }
}
