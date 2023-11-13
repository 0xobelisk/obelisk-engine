module examples::single_value_schema {
	use std::option::none;
    use sui::tx_context::TxContext;
    use examples::events;
    use examples::world::{Self, World, AdminCap};
    // Systems
	friend examples::example_system;
	friend examples::deploy_hook;

	const SCHEMA_ID: vector<u8> = b"single_value";
	const SCHEMA_TYPE: u8 = 1;

	// value
	struct SingleValueData has copy, drop , store {
		value: u64
	}

	public fun new(value: u64): SingleValueData {
		SingleValueData {
			value
		}
	}

	public fun register(_obelisk_world: &mut World, admin_cap: &AdminCap, _ctx: &mut TxContext) {
		let _obelisk_schema = new(1000);
		world::add_schema<SingleValueData>(_obelisk_world, SCHEMA_ID, _obelisk_schema, admin_cap);
		events::emit_set(SCHEMA_ID, SCHEMA_TYPE, none(), _obelisk_schema);
	}

	public(friend) fun set(_obelisk_world: &mut World,  value: u64) {
		let _obelisk_schema = world::get_mut_schema<SingleValueData>(_obelisk_world, SCHEMA_ID);
		_obelisk_schema.value = value;
	}

	public fun get(_obelisk_world: &World): u64 {
		let _obelisk_schema = world::get_schema<SingleValueData>(_obelisk_world, SCHEMA_ID);
		(
			_obelisk_schema.value
		)
	}
}
