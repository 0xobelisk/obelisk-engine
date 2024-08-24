module counter::single_value_schema {
	use std::option::none;
    use counter::app_key;
    use counter::app_key::AppKey;
    use obelisk::schema;
    use obelisk::events;
    use obelisk::world::{World, AdminCap};

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

	public fun register(_obelisk_world: &mut World, admin_cap: &AdminCap, _ctx: &mut TxContext) {
		let _obelisk_schema = new(1000);
		schema::add<SingleValueData>(_obelisk_world, SCHEMA_ID, _obelisk_schema, admin_cap);
		events::emit_set(SCHEMA_ID, SCHEMA_TYPE, none(), _obelisk_schema);
	}

	public(package) fun set(_obelisk_world: &mut World,  value: u64) {
		let _obelisk_schema = schema::get_mut<SingleValueData, AppKey>(app_key::new(),_obelisk_world, SCHEMA_ID);
		_obelisk_schema.value = value;
        events::emit_set(SCHEMA_ID, SCHEMA_TYPE, none(), _obelisk_schema.value);
	}

	public fun get(_obelisk_world: &World): u64 {
		let _obelisk_schema = schema::get<SingleValueData>(_obelisk_world, SCHEMA_ID);
		(
			_obelisk_schema.value
		)
	}
}
