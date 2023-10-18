module examples::multi_column_schema {
    use std::option::some;
    use sui::tx_context::TxContext;
    use sui::table::{Self, Table};
    use examples::events;
    use examples::world::{Self, World};

    // Systems
	friend examples::example_system;

	/// Entity does not exist
	const EEntityDoesNotExist: u64 = 0;

	const SCHEMA_ID: vector<u8> = b"multi_column";

	// state
	// last_update_time
	struct MultiColumnData has copy , drop, store {
		state: vector<u8>,
		last_update_time: u64
	}

	public fun new(state: vector<u8>, last_update_time: u64): MultiColumnData {
		MultiColumnData {
			state, 
			last_update_time
		}
	}

	public fun register(_obelisk_world: &mut World, ctx: &mut TxContext) {
		world::add_schema<Table<address,MultiColumnData>>(_obelisk_world, SCHEMA_ID, table::new<address, MultiColumnData>(ctx));
	}

	public(friend) fun set(_obelisk_world: &mut World, _obelisk_entity_key: address,  state: vector<u8>, last_update_time: u64) {
		let _obelisk_schema = world::get_mut_schema<Table<address,MultiColumnData>>(_obelisk_world, SCHEMA_ID);
		let _obelisk_data = new( state, last_update_time);
		if(table::contains<address, MultiColumnData>(_obelisk_schema, _obelisk_entity_key)) {
    		*table::borrow_mut<address, MultiColumnData>(_obelisk_schema, _obelisk_entity_key) = _obelisk_data;
		} else {
    		table::add(_obelisk_schema, _obelisk_entity_key, _obelisk_data);
		};
		events::emit_set(SCHEMA_ID, some(_obelisk_entity_key), _obelisk_data)
	}

	public(friend) fun set_state(_obelisk_world: &mut World, _obelisk_entity_key: address, state: vector<u8>) {
		let _obelisk_schema = world::get_mut_schema<Table<address,MultiColumnData>>(_obelisk_world, SCHEMA_ID);
		assert!(table::contains<address, MultiColumnData>(_obelisk_schema, _obelisk_entity_key), EEntityDoesNotExist);
		let _obelisk_data = table::borrow_mut<address, MultiColumnData>(_obelisk_schema, _obelisk_entity_key);
		_obelisk_data.state = state;
		events::emit_set(SCHEMA_ID, some(_obelisk_entity_key), *_obelisk_data)
	}

	public(friend) fun set_last_update_time(_obelisk_world: &mut World, _obelisk_entity_key: address, last_update_time: u64) {
		let _obelisk_schema = world::get_mut_schema<Table<address,MultiColumnData>>(_obelisk_world, SCHEMA_ID);
		assert!(table::contains<address, MultiColumnData>(_obelisk_schema, _obelisk_entity_key), EEntityDoesNotExist);
		let _obelisk_data = table::borrow_mut<address, MultiColumnData>(_obelisk_schema, _obelisk_entity_key);
		_obelisk_data.last_update_time = last_update_time;
		events::emit_set(SCHEMA_ID, some(_obelisk_entity_key), *_obelisk_data)
	}

	public fun get(_obelisk_world: &World, _obelisk_entity_key: address): (vector<u8>,u64) {
  		let _obelisk_schema = world::get_schema<Table<address,MultiColumnData>>(_obelisk_world, SCHEMA_ID);
  		assert!(table::contains<address, MultiColumnData>(_obelisk_schema, _obelisk_entity_key), EEntityDoesNotExist);
		let _obelisk_data = table::borrow<address, MultiColumnData>(_obelisk_schema, _obelisk_entity_key);
		(
			_obelisk_data.state,
			_obelisk_data.last_update_time
		)
	}

	public fun get_state(_obelisk_world: &World, _obelisk_entity_key: address): vector<u8> {
		let _obelisk_schema = world::get_schema<Table<address,MultiColumnData>>(_obelisk_world, SCHEMA_ID);
		assert!(table::contains<address, MultiColumnData>(_obelisk_schema, _obelisk_entity_key), EEntityDoesNotExist);
		let _obelisk_data = table::borrow<address, MultiColumnData>(_obelisk_schema, _obelisk_entity_key);
		_obelisk_data.state
	}

	public fun get_last_update_time(_obelisk_world: &World, _obelisk_entity_key: address): u64 {
		let _obelisk_schema = world::get_schema<Table<address,MultiColumnData>>(_obelisk_world, SCHEMA_ID);
		assert!(table::contains<address, MultiColumnData>(_obelisk_schema, _obelisk_entity_key), EEntityDoesNotExist);
		let _obelisk_data = table::borrow<address, MultiColumnData>(_obelisk_schema, _obelisk_entity_key);
		_obelisk_data.last_update_time
	}

	public(friend) fun remove(_obelisk_world: &mut World, _obelisk_entity_key: address) {
		let _obelisk_schema = world::get_mut_schema<Table<address,MultiColumnData>>(_obelisk_world, SCHEMA_ID);
		assert!(table::contains<address, MultiColumnData>(_obelisk_schema, _obelisk_entity_key), EEntityDoesNotExist);
		table::remove(_obelisk_schema, _obelisk_entity_key);
		events::emit_remove(SCHEMA_ID, _obelisk_entity_key)
	}

	public fun contains(_obelisk_world: &World, _obelisk_entity_key: address): bool {
		let _obelisk_schema = world::get_schema<Table<address,MultiColumnData>>(_obelisk_world, SCHEMA_ID);
		table::contains<address, MultiColumnData>(_obelisk_schema, _obelisk_entity_key)
	}

}
