module examples::single_column_schema {
	use std::option::some;
    use sui::table;
    use sui::table::Table;
    use dubhe::schema;
    use examples::app_key;
    use examples::app_key::AppKey;
    use examples::events;
    use examples::world::{World, AdminCap};

	/// Entity does not exist
	const EEntityDoesNotExist: u64 = 0;

	const SCHEMA_ID: vector<u8> = b"single_column";
	const SCHEMA_TYPE: u8 = 0;

	// value
	public struct SingleColumnData has copy, drop , store {
		value: u64
	}

	public fun new(value: u64): SingleColumnData {
		SingleColumnData {
			value
		}
	}

	public fun register(_dubhe_world: &mut World, admin_cap: &AdminCap, ctx: &mut TxContext) {
        schema::add<Table<address,SingleColumnData>>(_dubhe_world, SCHEMA_ID, table::new<address, SingleColumnData>(ctx), admin_cap);
	}

	public(package) fun set(_dubhe_world: &mut World, _dubhe_entity_key: address,  value: u64) {
		let _dubhe_schema = schema::get_mut<Table<address,SingleColumnData>, AppKey>(app_key::new(), _dubhe_world, SCHEMA_ID);
		let _dubhe_data = new( value);
		if(table::contains<address, SingleColumnData>(_dubhe_schema, _dubhe_entity_key)) {
			*table::borrow_mut<address, SingleColumnData>(_dubhe_schema, _dubhe_entity_key) = _dubhe_data;
		} else {
			table::add(_dubhe_schema, _dubhe_entity_key, _dubhe_data);
		};
		events::emit_set(SCHEMA_ID, SCHEMA_TYPE, some(_dubhe_entity_key), _dubhe_data)
	}

	public fun get(_dubhe_world: &World, _dubhe_entity_key: address): u64 {
		let _dubhe_schema = schema::get<Table<address,SingleColumnData>>(_dubhe_world, SCHEMA_ID);
		assert!(table::contains<address, SingleColumnData>(_dubhe_schema, _dubhe_entity_key), EEntityDoesNotExist);
		let _dubhe_data = table::borrow<address, SingleColumnData>(_dubhe_schema, _dubhe_entity_key);
		(
			_dubhe_data.value
		)
	}

	public(package) fun remove(_dubhe_world: &mut World, _dubhe_entity_key: address) {
		let _dubhe_schema = schema::get_mut<Table<address,SingleColumnData>, AppKey>(app_key::new(),_dubhe_world, SCHEMA_ID);
		assert!(table::contains<address, SingleColumnData>(_dubhe_schema, _dubhe_entity_key), EEntityDoesNotExist);
		table::remove(_dubhe_schema, _dubhe_entity_key);
		events::emit_remove(SCHEMA_ID, _dubhe_entity_key)
	}

	public fun contains(_dubhe_world: &World, _dubhe_entity_key: address): bool {
		let _dubhe_schema = schema::get<Table<address,SingleColumnData>>(_dubhe_world, SCHEMA_ID);
		table::contains<address, SingleColumnData>(_dubhe_schema, _dubhe_entity_key)
	}
}
