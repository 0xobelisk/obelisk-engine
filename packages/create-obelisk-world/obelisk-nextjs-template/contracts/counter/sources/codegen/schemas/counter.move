module counter::counter_schema {
    use std::ascii::{String, string};
    use sui::tx_context::TxContext;
    use sui::table::{Self, Table};
    use counter::entity_key;
    use counter::events;
    use counter::world::{Self, World};
  
    // Systems
	friend counter::counter_system;

	/// Entity does not exist
	const EEntityDoesNotExist: u64 = 0;

	const NAME: vector<u8> = b"counter";

	public fun id(): address {
		entity_key::from_bytes(NAME)
	}

	// value
	struct CounterData has copy , drop, store {
		value: u64
	}

	public fun new(value: u64): CounterData {
		CounterData {
			value
		}
	}

	struct SchemaMetadata has store {
		name: String,
		data: Table<address, CounterData>
	}

	public fun register(_obelisk_world: &mut World, ctx: &mut TxContext) {
		let _obelisk_schema = SchemaMetadata {
			name: string(NAME),
			data: table::new<address, CounterData>(ctx)
		};
		table::add(&mut _obelisk_schema.data, id(), new(0));
		world::add_schema<SchemaMetadata>(_obelisk_world, NAME, _obelisk_schema);
		events::emit_set(string(NAME), id(), new(0));
	}

	public(friend) fun set(_obelisk_world: &mut World,  value: u64) {
		let _obelisk_schema = world::get_mut_schema<SchemaMetadata>(_obelisk_world, id());
		let _obelisk_data = new(value);
		if(table::contains<address, CounterData>(&_obelisk_schema.data, id())) {
			*table::borrow_mut<address, CounterData>(&mut _obelisk_schema.data, id()) = _obelisk_data;
		} else {
			table::add(&mut _obelisk_schema.data, id(), _obelisk_data);
		};
		events::emit_set(string(NAME), id(), _obelisk_data)
	}


	public fun get(_obelisk_world: &World ,): u64 {
  		let _obelisk_schema = world::get_schema<SchemaMetadata>(_obelisk_world, id());
  		assert!(table::contains<address, CounterData>(&_obelisk_schema.data, id()), EEntityDoesNotExist);
		let _obelisk_data = table::borrow<address, CounterData>(&_obelisk_schema.data, id());
		(
			_obelisk_data.value
		)
	}




}
