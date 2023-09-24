module examples::single_column_comp {
    use std::ascii::{String, string};
    use std::option::some;
    use std::vector;
    use sui::bcs;
    use sui::tx_context::TxContext;
    use sui::table::{Self, Table};
    use examples::entity_key;
    use examples::world::{Self, World};
  
    // Systems
	friend examples::example_system;

	const NAME: vector<u8> = b"single_column";

	public fun id(): address {
		entity_key::from_bytes(NAME)
	}

	// value
	public fun field_types(): vector<String> {
		vector[string(b"u64")]
	}
  
	struct Field has drop, store {
		data: vector<u8>
	}

	public fun register(world: &mut World, ctx: &mut TxContext) {
		world::add_comp<Table<address,Field>>(
			world,
			NAME,
			table::new<address,Field>(ctx)
		);
	}

	public(friend) fun add(world: &mut World, key: address, value: u64) {
		let component = world::get_mut_comp<Table<address,Field>>(world, id());
		let data = encode(value);
		table::add(component, key, Field { data });
		world::emit_add_event(id(), key, data)
	}

	public(friend) fun remove(world: &mut World, key: address) {
		let component = world::get_mut_comp<Table<address,Field>>(world, id());
		table::remove(component, key);
		world::emit_remove_event(id(), key)
	}

	public(friend) fun update(world: &mut World, key: address, value: u64) {
		let component = world::get_mut_comp<Table<address, Field>>(world, id());
		let field = table::borrow_mut<address, Field>(component, key);
		let data = encode(value);
		field.data = data;
		world::emit_update_event(id(), some(key), data)
	}

	public fun get(world: &World, key: address): u64 {
		let component = world::get_comp<Table<address,Field>>(world, id());
		let field = table::borrow<address, Field>(component, key);
		decode(field.data)
	}

	public fun contains(world: &World, key: address): bool {
		let component = world::get_comp<Table<address,Field>>(world, id());
		table::contains<address, Field>(component, key)
	}

	public fun encode(value: u64): vector<u8> {
		let data = vector::empty<u8>();
		vector::append(&mut data, bcs::to_bytes(&value));
		data
	}

	public fun decode(bytes: vector<u8>): u64 {
		let data = bcs::new(bytes);
		(
			bcs::peel_u64(&mut data)
		)
	}
}
