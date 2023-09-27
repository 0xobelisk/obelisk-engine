module examples::single_value_comp {
    use std::ascii::{String, string};
    use std::option::none;
    use std::vector;
	use sui::table::Table;
	use sui::table;
	use sui::tx_context::TxContext;
	use sui::bcs;
    use examples::entity_key;
    use examples::world::{Self, World};
  
    // Systems
	friend examples::example_system;

	const NAME: vector<u8> = b"single_value";

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
		table::add(&mut component.data, id(), encode(1000));
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

	public(friend) fun update(world: &mut World, value: u64) {
		let component = world::get_mut_comp<CompMetadata>(world, id());
		let data = encode(value);
		*table::borrow_mut<address, vector<u8>>(&mut component.data, id()) = data;
		world::emit_update_event(id(), none(), data)
	}

	public fun get(world: &World): u64 {
		let component = world::get_comp<CompMetadata>(world, id());
		let data = table::borrow<address, vector<u8>>(&component.data, id());
		decode(*data)
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
