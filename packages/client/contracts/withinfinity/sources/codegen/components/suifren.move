module withinfinity::suifren_component {
	use sui::tx_context::TxContext;
	use sui::table::{Self, Table};
	use withinfinity::world::{Self , World};
  
	// Systems
	friend withinfinity::fee_system;
	friend withinfinity::home_system;
	friend withinfinity::pet_system;
	friend withinfinity::state_system;

	const COMPONENT_NAME: vector<u8> = b"Suifren Component";

	struct SuifrenData has drop, store {
		data: bool
	}

	public fun new(data: bool): SuifrenData {
		SuifrenData {
			data
		}
	}

	public fun register(world: &mut World, ctx: &mut TxContext) {
		world::add_component_in_world<Table<vector<u8>, SuifrenData>>(
			world,
			COMPONENT_NAME,
			table::new<vector<u8>, SuifrenData>(ctx)
		);
	}

	public(friend) fun add(world : &mut World, key: vector<u8>, data: bool) {
		let component = world::get_mut_component<Table<vector<u8>, SuifrenData>>(world, COMPONENT_NAME);
		table::add(component, key, new(data));
		world::add_component_in_entity(world, key, COMPONENT_NAME)
	}

	public(friend) fun remove(world : &mut World, key: vector<u8>) {
		let component = world::get_mut_component<Table<vector<u8>, SuifrenData>>(world, COMPONENT_NAME);
		table::remove(component, key);
		world::remove_component_from_entity(world, key)
	}

	public(friend) fun update(world : &mut World, key: vector<u8>, data: bool) {
		let component = world::get_mut_component<Table<vector<u8>, SuifrenData>>(world, COMPONENT_NAME);
		let data =  table::borrow_mut<vector<u8>, SuifrenData>(component, key);
		data.data = data;
	}

	public(friend) fun update_data(world : &mut World, key: vector<u8>, data: bool) {
		let component = world::get_mut_component<Table<vector<u8>, SuifrenData>>(world, COMPONENT_NAME);
		table::borrow_mut<vector<u8>, SuifrenData>(component, key).data = data;
	}

	public fun get(world : &World, key: vector<u8>) : (bool) {
		let component = world::get_component<Table<vector<u8>, SuifrenData>>(world, COMPONENT_NAME);
		let data = table::borrow<vector<u8>, SuifrenData>(component, key);
		(
			data.data = data;
		)
	}

	public fun get_data(world : &World, key: vector<u8>) : bool {
		let component = world::get_component<Table<vector<u8>, SuifrenData>>(world, COMPONENT_NAME);
		table::borrow<vector<u8>, SuifrenData>(component, key).data
	}

	public fun contains(world : &World, key: vector<u8>): bool {
		let component = world::get_component<Table<vector<u8>, SuifrenData>>(world, COMPONENT_NAME);
		table::contains<vector<u8>, SuifrenData>(component, key)
	}
}
