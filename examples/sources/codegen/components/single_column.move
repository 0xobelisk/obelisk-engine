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

	struct CompMetadata has store {
		id: address,
		name: String,
		types: vector<String>,
		entities: vector<address>,
		data: Table<address, vector<u8>>
	}

	public fun new(ctx: &mut TxContext): CompMetadata {
		let component = CompMetadata {
			id: id(),
			name: name(),
			types: types(),
			entities: vector::empty<address>(),
			data: table::new<address, vector<u8>>(ctx)
		};
		component
	}

	public fun id(): address {
		entity_key::from_bytes(NAME)
	}

	public fun name(): String {
		string(NAME)
	}

	public fun types(): vector<String> {
		vector[string(b"vector<u8>"), string(b"u64")]
	}

	public fun entities(world: &World): vector<address> {
		let component = world::get_comp<CompMetadata>(world, id());
		component.entities
	}

	public fun register(world: &mut World, ctx: &mut TxContext) {
		world::add_comp<CompMetadata>(world, NAME, new(ctx));
	}

	public(friend) fun add(world: &mut World, key: address, value: u64) {
		let component = world::get_mut_comp<CompMetadata>(world, id());
		let data = encode(value);
		vector::push_back(&mut component.entities, key);
		table::add(&mut component.data, key, data);
		world::emit_add_event(id(), key, data)
	}

	public(friend) fun remove(world: &mut World, key: address) {
		let component = world::get_mut_comp<CompMetadata>(world, id());
		let (_, entity_index) = vector::index_of(&component.entities, &key);
		vector::remove(&mut component.entities, entity_index);
		table::remove(&mut component.data, key);
		world::emit_remove_event(id(), key)
	}

	public(friend) fun update(world: &mut World, key: address, value: u64) {
		let component = world::get_mut_comp<CompMetadata>(world, id());
		let data = encode(value);
		*table::borrow_mut<address, vector<u8>>(&mut component.data, key) = data;
		world::emit_update_event(id(), some(key), data)
	}

	public fun get(world: &World, key: address): u64 {
		let component = world::get_comp<CompMetadata>(world, id());
		let data = table::borrow<address, vector<u8>>(&component.data, key);
		decode(*data)
	}

	public fun contains(world: &World, key: address): bool {
		let component = world::get_comp<CompMetadata>(world, id());
		table::contains<address, vector<u8>>(&component.data, key)
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
