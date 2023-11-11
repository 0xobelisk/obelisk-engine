module examples::single_column_schema {
	use std::option::some;
    use std::signer::address_of;
    use aptos_std::table::{Self, Table};
    use examples::events;
    use examples::world;

    // Systems
	friend examples::example_system;
	friend examples::deploy_hook;

	// value
	struct SingleColumnData has store  {
		value: u64
	}

	public fun new(value: u64): SingleColumnData {
		SingleColumnData {
			value
		}
	}

	struct SingleColumnDataEvent has drop, store {
		value: u64
	}

	struct SchemaData has key {
		value: Table<address, SingleColumnData>
	}

	public fun register(deployer: &signer) {
		assert!(address_of(deployer) == world::deployer_address(), 0);
		let _obelisk_schema = SchemaData { value: table::new() };
		let resource_signer = world::resource_signer();
		move_to(&resource_signer, _obelisk_schema)
	}

	public(friend) fun set(_obelisk_entity_key: address,  value: u64) acquires SchemaData {
		let _obelisk_resource_address = world::resource_address();
		let _obelisk_schema = borrow_global_mut<SchemaData>(_obelisk_resource_address);
		if(table::contains<address, SingleColumnData>(&_obelisk_schema.value, _obelisk_entity_key)) {
			let _obelisk_data = table::borrow_mut<address, SingleColumnData>(&mut _obelisk_schema.value, _obelisk_entity_key);
			_obelisk_data.value = value;
		} else {
			table::add(&mut _obelisk_schema.value, _obelisk_entity_key, new( value));
		};
		events::emit_set(schema_id(), schema_type(), some(_obelisk_entity_key), SingleColumnDataEvent{  value });
	}

	public(friend) fun remove(_obelisk_entity_key: address) acquires SchemaData {
		let _obelisk_resource_address = world::resource_address();
		let _obelisk_schema = borrow_global_mut<SchemaData>(_obelisk_resource_address);
		let _obelisk_data = table::remove(&mut _obelisk_schema.value, _obelisk_entity_key);
		events::emit_remove(schema_id(), _obelisk_entity_key);
		let SingleColumnData { value: _value } = _obelisk_data;
	}

	#[view]
	public fun get(_obelisk_entity_key: address): u64 acquires SchemaData {
		let _obelisk_resource_address = world::resource_address();
		let _obelisk_schema = borrow_global<SchemaData>(_obelisk_resource_address);
		let _obelisk_data = table::borrow<address, SingleColumnData>(&_obelisk_schema.value, _obelisk_entity_key);
		(
			_obelisk_data.value
		)
	}

	#[view]
	public fun contains(_obelisk_entity_key: address): bool acquires SchemaData {
		let _obelisk_resource_address = world::resource_address();
		let _obelisk_schema = borrow_global<SchemaData>(_obelisk_resource_address);
		table::contains<address, SingleColumnData>(&_obelisk_schema.value, _obelisk_entity_key)
	}

	#[view]
	public fun schema_id(): vector<u8> {
		b"single_column"
	}

	#[view]
	public fun schema_type(): u8 {
		0
	}
}
