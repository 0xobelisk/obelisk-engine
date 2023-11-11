module examples::multi_column_schema {
	use std::string::String;
	use std::option::some;
    use std::signer::address_of;
    use aptos_std::table::{Self, Table};
    use examples::events;
    use examples::world;

    // Systems
	friend examples::example_system;
	friend examples::deploy_hook;

	// state
	// last_update_time
	struct MultiColumnData has store  {
		state: String,
		last_update_time: u64
	}

	public fun new(state: String, last_update_time: u64): MultiColumnData {
		MultiColumnData {
			state, 
			last_update_time
		}
	}

	struct MultiColumnDataEvent has drop, store {
		state: String,
		last_update_time: u64
	}

	struct SchemaData has key {
		value: Table<address, MultiColumnData>
	}

	public fun register(deployer: &signer) {
		assert!(address_of(deployer) == world::deployer_address(), 0);
		let _obelisk_schema = SchemaData { value: table::new() };
		let resource_signer = world::resource_signer();
		move_to(&resource_signer, _obelisk_schema)
	}

	public(friend) fun set(_obelisk_entity_key: address,  state: String, last_update_time: u64) acquires SchemaData {
		let _obelisk_resource_address = world::resource_address();
		let _obelisk_schema = borrow_global_mut<SchemaData>(_obelisk_resource_address);
		if(table::contains<address, MultiColumnData>(&_obelisk_schema.value, _obelisk_entity_key)) {
			let _obelisk_data = table::borrow_mut<address, MultiColumnData>(&mut _obelisk_schema.value, _obelisk_entity_key);
			_obelisk_data.state = state;
			_obelisk_data.last_update_time = last_update_time;
		} else {
			table::add(&mut _obelisk_schema.value, _obelisk_entity_key, new( state, last_update_time));
		};
		events::emit_set(schema_id(), schema_type(), some(_obelisk_entity_key), MultiColumnDataEvent{  state, last_update_time });
	}

	public(friend) fun set_state(_obelisk_entity_key: address, state: String) acquires SchemaData {
		let _obelisk_resource_address = world::resource_address();
		let _obelisk_schema = borrow_global_mut<SchemaData>(_obelisk_resource_address);
		let _obelisk_data = table::borrow_mut<address, MultiColumnData>(&mut _obelisk_schema.value, _obelisk_entity_key);
		_obelisk_data.state = state;
		events::emit_set(schema_id(), schema_type(), some(_obelisk_entity_key), MultiColumnDataEvent{  state, last_update_time: _obelisk_data.last_update_time });
	}

	public(friend) fun set_last_update_time(_obelisk_entity_key: address, last_update_time: u64) acquires SchemaData {
		let _obelisk_resource_address = world::resource_address();
		let _obelisk_schema = borrow_global_mut<SchemaData>(_obelisk_resource_address);
		let _obelisk_data = table::borrow_mut<address, MultiColumnData>(&mut _obelisk_schema.value, _obelisk_entity_key);
		_obelisk_data.last_update_time = last_update_time;
		events::emit_set(schema_id(), schema_type(), some(_obelisk_entity_key), MultiColumnDataEvent{  state: _obelisk_data.state, last_update_time });
	}

	public(friend) fun remove(_obelisk_entity_key: address) acquires SchemaData {
		let _obelisk_resource_address = world::resource_address();
		let _obelisk_schema = borrow_global_mut<SchemaData>(_obelisk_resource_address);
		let _obelisk_data = table::remove(&mut _obelisk_schema.value, _obelisk_entity_key);
		events::emit_remove(schema_id(), _obelisk_entity_key);
		let MultiColumnData { state: _state,last_update_time: _last_update_time } = _obelisk_data;
	}

	#[view]
	public fun get(_obelisk_entity_key: address): (String,u64) acquires SchemaData {
		let _obelisk_resource_address = world::resource_address();
		let _obelisk_schema = borrow_global<SchemaData>(_obelisk_resource_address);
		let _obelisk_data = table::borrow<address, MultiColumnData>(&_obelisk_schema.value, _obelisk_entity_key);
		(
			_obelisk_data.state,
			_obelisk_data.last_update_time
		)
	}

	#[view]
	public fun get_state(_obelisk_entity_key: address): String acquires SchemaData {
		let _obelisk_resource_address = world::resource_address();
		let _obelisk_schema = borrow_global<SchemaData>(_obelisk_resource_address);
		let _obelisk_data = table::borrow<address, MultiColumnData>(&_obelisk_schema.value, _obelisk_entity_key);
		_obelisk_data.state
	}

	#[view]
	public fun get_last_update_time(_obelisk_entity_key: address): u64 acquires SchemaData {
		let _obelisk_resource_address = world::resource_address();
		let _obelisk_schema = borrow_global<SchemaData>(_obelisk_resource_address);
		let _obelisk_data = table::borrow<address, MultiColumnData>(&_obelisk_schema.value, _obelisk_entity_key);
		_obelisk_data.last_update_time
	}

	#[view]
	public fun contains(_obelisk_entity_key: address): bool acquires SchemaData {
		let _obelisk_resource_address = world::resource_address();
		let _obelisk_schema = borrow_global<SchemaData>(_obelisk_resource_address);
		table::contains<address, MultiColumnData>(&_obelisk_schema.value, _obelisk_entity_key)
	}

	#[view]
	public fun schema_id(): vector<u8> {
		b"multi_column"
	}

	#[view]
	public fun schema_type(): u8 {
		0
	}
}
