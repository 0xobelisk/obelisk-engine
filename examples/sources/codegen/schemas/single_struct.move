module examples::single_struct_schema {
    use std::ascii::{String, string};
    use sui::tx_context::TxContext;
    use sui::table::{Self, Table};
    use examples::entity_key;
    use examples::events;
    use examples::world::{Self, World};
  
    // Systems
	friend examples::example_system;

	/// Entity does not exist
	const EEntityDoesNotExist: u64 = 0;

	const NAME: vector<u8> = b"single_struct";

	public fun id(): address {
		entity_key::from_bytes(NAME)
	}

	// admin
	// fee
	struct SingleStructData has copy , drop, store {
		admin: address,
		fee: u64
	}

	public fun new(admin: address, fee: u64): SingleStructData {
		SingleStructData {
			admin, 
			fee
		}
	}

	struct SchemaMetadata has store {
		name: String,
		data: Table<address, SingleStructData>
	}

	public fun register(_obelisk_world: &mut World, ctx: &mut TxContext) {
		let _obelisk_schema = SchemaMetadata {
			name: string(NAME),
			data: table::new<address, SingleStructData>(ctx)
		};
		table::add(&mut _obelisk_schema.data, id(), new(@0x1, 100));
		world::add_schema<SchemaMetadata>(_obelisk_world, NAME, _obelisk_schema);
		events::emit_set(string(NAME), id(), new(@0x1, 100));
	}

	public(friend) fun set(_obelisk_world: &mut World,  admin: address, fee: u64) {
		let _obelisk_schema = world::get_mut_schema<SchemaMetadata>(_obelisk_world, id());
		let _obelisk_data = new(admin, fee);
		if(table::contains<address, SingleStructData>(&_obelisk_schema.data, id())) {
			*table::borrow_mut<address, SingleStructData>(&mut _obelisk_schema.data, id()) = _obelisk_data;
		} else {
			table::add(&mut _obelisk_schema.data, id(), _obelisk_data);
		};
		events::emit_set(string(NAME), id(), _obelisk_data)
	}

	public(friend) fun set_admin(_obelisk_world: &mut World,  admin: address) {
		let _obelisk_schema = world::get_mut_schema<SchemaMetadata>(_obelisk_world, id());
		assert!(table::contains<address, SingleStructData>(&_obelisk_schema.data, id()), EEntityDoesNotExist);
		let _obelisk_data = table::borrow_mut<address, SingleStructData>(&mut _obelisk_schema.data, id());
		_obelisk_data.admin = admin;
		events::emit_set(string(NAME), id(), *_obelisk_data)
	}

	public(friend) fun set_fee(_obelisk_world: &mut World,  fee: u64) {
		let _obelisk_schema = world::get_mut_schema<SchemaMetadata>(_obelisk_world, id());
		assert!(table::contains<address, SingleStructData>(&_obelisk_schema.data, id()), EEntityDoesNotExist);
		let _obelisk_data = table::borrow_mut<address, SingleStructData>(&mut _obelisk_schema.data, id());
		_obelisk_data.fee = fee;
		events::emit_set(string(NAME), id(), *_obelisk_data)
	}

	public fun get(_obelisk_world: &World ,): (address,u64) {
  		let _obelisk_schema = world::get_schema<SchemaMetadata>(_obelisk_world, id());
  		assert!(table::contains<address, SingleStructData>(&_obelisk_schema.data, id()), EEntityDoesNotExist);
		let _obelisk_data = table::borrow<address, SingleStructData>(&_obelisk_schema.data, id());
		(
			_obelisk_data.admin,
			_obelisk_data.fee
		)
	}

	public fun get_admin(_obelisk_world: &World, ): address {
		let _obelisk_schema = world::get_schema<SchemaMetadata>(_obelisk_world, id());
		assert!(table::contains<address, SingleStructData>(&_obelisk_schema.data, id()), EEntityDoesNotExist);
		let _obelisk_data = table::borrow<address, SingleStructData>(&_obelisk_schema.data, id());
		_obelisk_data.admin
	}

	public fun get_fee(_obelisk_world: &World, ): u64 {
		let _obelisk_schema = world::get_schema<SchemaMetadata>(_obelisk_world, id());
		assert!(table::contains<address, SingleStructData>(&_obelisk_schema.data, id()), EEntityDoesNotExist);
		let _obelisk_data = table::borrow<address, SingleStructData>(&_obelisk_schema.data, id());
		_obelisk_data.fee
	}



}
