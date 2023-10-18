module examples::single_column_schema {
    use std::option::some;
    use sui::tx_context::TxContext;
    use sui::table::{Self, Table};
    use examples::events;
    use examples::world::{Self, World};

    // Systems
	friend examples::example_system;

	/// Entity does not exist
	const EEntityDoesNotExist: u64 = 0;

	const SCHEMA_ID: vector<u8> = b"single_column";

	// value
	struct SingleColumnData has copy, drop , store {
		value: u64
	}

	public fun new(value: u64): SingleColumnData {
		SingleColumnData {
			value
		}
	}

	public fun register(_obelisk_world: &mut World, ctx: &mut TxContext) {
		world::add_schema<Table<address,SingleColumnData>>(_obelisk_world, SCHEMA_ID, table::new<address, SingleColumnData>(ctx));
	}

	public(friend) fun set(_obelisk_world: &mut World, _obelisk_entity_key: address,  value: u64) {
		let _obelisk_schema = world::get_mut_schema<Table<address,SingleColumnData>>(_obelisk_world, SCHEMA_ID);
		let _obelisk_data = new( value);
		if(table::contains<address, SingleColumnData>(_obelisk_schema, _obelisk_entity_key)) {
			*table::borrow_mut<address, SingleColumnData>(_obelisk_schema, _obelisk_entity_key) = _obelisk_data;
		} else {
			table::add(_obelisk_schema, _obelisk_entity_key, _obelisk_data);
		};
		events::emit_set(SCHEMA_ID, some(_obelisk_entity_key), _obelisk_data)
	}

	public fun get(_obelisk_world: &World, _obelisk_entity_key: address): u64 {
		let _obelisk_schema = world::get_schema<Table<address,SingleColumnData>>(_obelisk_world, SCHEMA_ID);
		assert!(table::contains<address, SingleColumnData>(_obelisk_schema, _obelisk_entity_key), EEntityDoesNotExist);
		let _obelisk_data = table::borrow<address, SingleColumnData>(_obelisk_schema, _obelisk_entity_key);
		(
			_obelisk_data.value
		)
	}

	public(friend) fun remove(_obelisk_world: &mut World, _obelisk_entity_key: address) {
		let _obelisk_schema = world::get_mut_schema<Table<address,SingleColumnData>>(_obelisk_world, SCHEMA_ID);
		assert!(table::contains<address, SingleColumnData>(_obelisk_schema, _obelisk_entity_key), EEntityDoesNotExist);
		table::remove(_obelisk_schema, _obelisk_entity_key);
		events::emit_remove(SCHEMA_ID, _obelisk_entity_key)
	}

	public fun contains(_obelisk_world: &World, _obelisk_entity_key: address): bool {
		let _obelisk_schema = world::get_schema<Table<address,SingleColumnData>>(_obelisk_world, SCHEMA_ID);
		table::contains<address, SingleColumnData>(_obelisk_schema, _obelisk_entity_key)
	}
}
