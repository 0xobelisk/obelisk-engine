module examples::single_value_schema {
	use std::option::none;
	use examples::app_key;
	use examples::app_key::AppKey;
    use dubhe::events;
    use dubhe::world::{World, AdminCap};
    use dubhe::schema;

	const SCHEMA_ID: vector<u8> = b"single_value";
	const SCHEMA_TYPE: u8 = 1;

	// value
	public struct SingleValueData has copy, drop , store {
		value: u64
	}

	public fun new(value: u64): SingleValueData {
		SingleValueData {
			value
		}
	}

	public fun register(_dubhe_world: &mut World, admin_cap: &AdminCap, _ctx: &mut TxContext) {
		let _dubhe_schema = new(1000);
        schema::add<SingleValueData>(_dubhe_world, SCHEMA_ID, _dubhe_schema, admin_cap);
		events::emit_set(SCHEMA_ID, SCHEMA_TYPE, none(), _dubhe_schema);
	}

	public(package) fun set(_dubhe_world: &mut World,  value: u64) {
		let _dubhe_schema = schema::get_mut<SingleValueData, AppKey>(app_key::new(),_dubhe_world, SCHEMA_ID);
		_dubhe_schema.value = value;
	}

	public fun get(_dubhe_world: &World): u64 {
		let _dubhe_schema = schema::get<SingleValueData>(_dubhe_world, SCHEMA_ID);
		(
			_dubhe_schema.value
		)
	}
}
