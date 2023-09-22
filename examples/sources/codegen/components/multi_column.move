module examples::multi_column_comp {
    use std::ascii::{String, string};
    use std::option::some;
    use std::vector;
    use sui::bcs;
    use sui::tx_context::TxContext;
    use sui::table::{Self, Table};
    use examples::entity_key;
    use examples::world::{Self, World};
  
    // Systems
	friend examples::counter_system;

	public fun id() : address {
		entity_key::from_bytes(b"Multi_column Comp")
	}

	public fun field_types() : vector<String> {
		vector[string(b"u64")]
	}
  
	struct Field has drop, store {
		data: vector<u8>
	}

	public fun register(world: &mut World, ctx: &mut TxContext) {
		world::add_component<Table<address,Field>>(
			world,
			id(),
			table::new<address,Field>(ctx)
		);
	}

	public(friend) fun add(world: &mut World, key: address, state: vector<u8>, last_update_time: u64) {
		let component = world::get_mut_component<Table<address,Field>>(world, id());
		let data = encode(state, last_update_time);
		table::add(component, key, Field { data });
		world::emit_add_event(id(), key, data)
	}

	public(friend) fun remove(world: &mut World, key: address) {
		let component = world::get_mut_component<Table<address,Field>>(world, id());
		table::remove(component, key);
		world::emit_remove_event(id(), key)
	}

	public(friend) fun update(world: &mut World, key: address, state: vector<u8>, last_update_time: u64) {
		let component = world::get_mut_component<Table<address, Field>>(world, id());
		let field = table::borrow_mut<address, Field>(component, key);
		let data = encode(state, last_update_time);
		field.data = data;
		world::emit_update_event(id(), some(key), data)
	}
	public(friend) fun update_state(world: &mut World, key: address, state: vector<u8>) {
		let component = world::get_mut_component<Table<address,Field>>(world, id());
		let field = table::borrow_mut<address, Field>(component, key);
		let (_, last_update_time) = decode(field.data);
		let data = encode(state, last_update_time);
		field.data = data;
		world::emit_update_event(id(), some(key), data)
	}

	public(friend) fun update_last_update_time(world: &mut World, key: address, last_update_time: u64) {
		let component = world::get_mut_component<Table<address,Field>>(world, id());
		let field = table::borrow_mut<address, Field>(component, key);
		let (state, _) = decode(field.data);
		let data = encode(state, last_update_time);
		field.data = data;
		world::emit_update_event(id(), some(key), data)
	}

	public fun get(world: &World, key: address): (vector<u8>,u64) {
		let component = world::get_component<Table<address,Field>>(world, id());
		let field = table::borrow<address, Field>(component, key);
		decode(field.data)
	}

	public fun get_state(world: &World, key: address): vector<u8> {
		let component = world::get_component<Table<address,Field>>(world, id());
		let field = table::borrow<address, Field>(component, key);
		let (state, _) = decode(field.data);
		state
	}

	public fun get_last_update_time(world: &World, key: address): u64 {
		let component = world::get_component<Table<address,Field>>(world, id());
		let field = table::borrow<address, Field>(component, key);
		let (_, last_update_time) = decode(field.data);
		last_update_time
	}

	public fun contains(world: &World, key: address): bool {
		let component = world::get_component<Table<address,Field>>(world, id());
		table::contains<address, Field>(component, key)
	}

	public fun encode(state: vector<u8>, last_update_time: u64): vector<u8> {
		let data = vector::empty<u8>();
		vector::append(&mut data, bcs::to_bytes(&state));
		vector::append(&mut data, bcs::to_bytes(&last_update_time));
		data
	}

	public fun decode(bytes: vector<u8>): (vector<u8>,u64) {
		let data = bcs::new(bytes);
		(
			bcs::peel_vec_u8(&mut data),
			bcs::peel_u64(&mut data)
		)
	}
}
