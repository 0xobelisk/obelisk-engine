module examples::single_struct_schema {
    use std::option::none;
    use sui::tx_context::TxContext;
    use examples::events;
    use examples::world::{Self, World};
  
    // Systems
	friend examples::example_system;

	const SCHEMA_ID: vector<u8> = b"single_struct";

	// admin
	// fee
	struct SingleStructData has copy, drop , store {
		admin: address,
		fee: u64
	}

	public fun new(admin: address, fee: u64): SingleStructData {
		SingleStructData {
			admin, 
			fee
		}
	}

	public fun register(_obelisk_world: &mut World, _ctx: &mut TxContext) {
		let _obelisk_schema = new(@0x1,100);
		world::add_schema<SingleStructData>(_obelisk_world, SCHEMA_ID, _obelisk_schema);
		events::emit_set(SCHEMA_ID, none(), _obelisk_schema);
	}

	public(friend) fun set(_obelisk_world: &mut World,  admin: address, fee: u64) {
		let _obelisk_schema = world::get_mut_schema<SingleStructData>(_obelisk_world, SCHEMA_ID);
		_obelisk_schema.admin = admin;
		_obelisk_schema.fee = fee;
	}

	public(friend) fun set_admin(_obelisk_world: &mut World, admin: address) {
		let _obelisk_schema = world::get_mut_schema<SingleStructData>(_obelisk_world, SCHEMA_ID);
		_obelisk_schema.admin = admin;
		events::emit_set(SCHEMA_ID, none(), *_obelisk_schema)
	}

	public(friend) fun set_fee(_obelisk_world: &mut World, fee: u64) {
		let _obelisk_schema = world::get_mut_schema<SingleStructData>(_obelisk_world, SCHEMA_ID);
		_obelisk_schema.fee = fee;
		events::emit_set(SCHEMA_ID, none(), *_obelisk_schema)
	}

	public fun get(_obelisk_world: &World): (address,u64) {
		let _obelisk_schema = world::get_schema<SingleStructData>(_obelisk_world, SCHEMA_ID);
		(
			_obelisk_schema.admin,
			_obelisk_schema.fee,
		)
	}

	public fun get_admin(_obelisk_world: &World): address {
		let _obelisk_schema = world::get_schema<SingleStructData>(_obelisk_world, SCHEMA_ID);
		_obelisk_schema.admin
	}

	public fun get_fee(_obelisk_world: &World): u64 {
		let _obelisk_schema = world::get_schema<SingleStructData>(_obelisk_world, SCHEMA_ID);
		_obelisk_schema.fee
	}
}
