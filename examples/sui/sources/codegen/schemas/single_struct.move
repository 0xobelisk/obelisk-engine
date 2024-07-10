module examples::single_struct_schema {
	use std::option::none;
    use examples::app_key::AppKey;
    use examples::app_key;
    use obelisk::schema;
    use obelisk::events;
    use obelisk::world::{World, AdminCap};

	const SCHEMA_ID: vector<u8> = b"single_struct";
	const SCHEMA_TYPE: u8 = 1;

	// admin
	// fee
	public struct SingleStructData has copy, drop , store {
		admin: address,
		fee: u64
	}

	public fun new(admin: address, fee: u64): SingleStructData {
		SingleStructData {
			admin,
			fee
		}
	}

	public fun register(_obelisk_world: &mut World, admin_cap: &AdminCap, _ctx: &mut TxContext) {
		let _obelisk_schema = new(@0x1,100);
		schema::add<SingleStructData>(_obelisk_world, SCHEMA_ID, _obelisk_schema, admin_cap);
		events::emit_set(SCHEMA_ID, SCHEMA_TYPE, none(), _obelisk_schema);
	}

	public(package) fun set(_obelisk_world: &mut World,  admin: address, fee: u64) {
		let _obelisk_schema = schema::get_mut<SingleStructData, AppKey>(app_key::new(), _obelisk_world, SCHEMA_ID);
		_obelisk_schema.admin = admin;
		_obelisk_schema.fee = fee;
	}

	public(package) fun set_admin(_obelisk_world: &mut World, admin: address) {
		let _obelisk_schema = schema::get_mut<SingleStructData, AppKey>(app_key::new(),_obelisk_world, SCHEMA_ID);
		_obelisk_schema.admin = admin;
		events::emit_set(SCHEMA_ID, SCHEMA_TYPE, none(), *_obelisk_schema)
	}

	public(package) fun set_fee(_obelisk_world: &mut World, fee: u64) {
		let _obelisk_schema = schema::get_mut<SingleStructData, AppKey>(app_key::new(),_obelisk_world, SCHEMA_ID);
		_obelisk_schema.fee = fee;
		events::emit_set(SCHEMA_ID, SCHEMA_TYPE, none(), *_obelisk_schema)
	}

	public fun get(_obelisk_world: &World): (address,u64) {
		let _obelisk_schema = schema::get<SingleStructData>(_obelisk_world, SCHEMA_ID);
		(
			_obelisk_schema.admin,
			_obelisk_schema.fee,
		)
	}

	public fun get_admin(_obelisk_world: &World): address {
		let _obelisk_schema = schema::get<SingleStructData>(_obelisk_world, SCHEMA_ID);
		_obelisk_schema.admin
	}

	public fun get_fee(_obelisk_world: &World): u64 {
		let _obelisk_schema = schema::get<SingleStructData>(_obelisk_world, SCHEMA_ID);
		_obelisk_schema.fee
	}
}
