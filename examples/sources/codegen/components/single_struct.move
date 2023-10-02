module examples::single_struct_comp {
    use std::ascii::{String, string};
    use std::option::none;
    use std::vector;
    use sui::bcs;
    use sui::tx_context::TxContext;
    use sui::table::{Self, Table};
    use sui::table_vec::{Self, TableVec};
    use examples::entity_key;
    use examples::world::{Self, World};
  
    // Systems
	friend examples::example_system;

	const NAME: vector<u8> = b"single_struct";

	// admin
	// fee
	struct CompMetadata has store {
		id: address,
		name: String,
		types: vector<String>,
		entity_key_to_index: Table<address, u64>,
		entities: TableVec<address>,
		data: Table<address, vector<u8>>
	}

	public fun new(ctx: &mut TxContext): CompMetadata {
		let component = CompMetadata {
			id: id(),
			name: name(),
			types: types(),
			entity_key_to_index: table::new<address, u64>(ctx),
			entities: table_vec::empty<address>(ctx),
			data: table::new<address, vector<u8>>(ctx)
		};
		table::add(&mut component.data, id(), encode(@0x1, 100));
		component
	}

	public fun id(): address {
		entity_key::from_bytes(NAME)
	}

	public fun name(): String {
		string(NAME)
	}

	public fun types(): vector<String> {
		vector[string(b"address"), string(b"u64")]
	}

	public fun entities(world: &World): &TableVec<address> {
		let component = world::get_comp<CompMetadata>(world, id());
		&component.entities
	}

	public fun entity_length(world: &World): u64 {
		let component = world::get_comp<CompMetadata>(world, id());
		table_vec::length(&component.entities)
	}

	public fun data(world: &World): &Table<address, vector<u8>> {
		let component = world::get_comp<CompMetadata>(world, id());
		&component.data
	}

	public fun register(world: &mut World, ctx: &mut TxContext) {
		world::add_comp<CompMetadata>(world, NAME, new(ctx));
		world::emit_register_event(NAME, types());
	}

	public(friend) fun update(world: &mut World, admin: address, fee: u64) {
		let component = world::get_mut_comp<CompMetadata>(world, id());
		let data = encode(admin, fee);
		*table::borrow_mut<address, vector<u8>>(&mut component.data, id()) = data;
		world::emit_update_event(id(), none(), data)
	}
	public(friend) fun update_admin(world: &mut World, admin: address) {
		let component = world::get_mut_comp<CompMetadata>(world, id());
		let comp_data = table::borrow_mut<address, vector<u8>>(&mut component.data, id());
		let (_, fee) = decode(*comp_data);
		let data = encode(admin, fee);
		*comp_data = data;
		world::emit_update_event(id(), none(), data)
	}

	public(friend) fun update_fee(world: &mut World, fee: u64) {
		let component = world::get_mut_comp<CompMetadata>(world, id());
		let comp_data = table::borrow_mut<address, vector<u8>>(&mut component.data, id());
		let (admin, _) = decode(*comp_data);
		let data = encode(admin, fee);
		*comp_data = data;
		world::emit_update_event(id(), none(), data)
	}

	public fun get(world: &World): (address,u64) {
		let component = world::get_comp<CompMetadata>(world, id());
		let data = table::borrow<address, vector<u8>>(&component.data, id());
		decode(*data)
	}

	public fun get_admin(world: &World): address {
		let component = world::get_comp<CompMetadata>(world, id());
		let data = table::borrow<address, vector<u8>>(&component.data, id());
		let (admin, _) = decode(*data);
		admin
	}

	public fun get_fee(world: &World): u64 {
		let component = world::get_comp<CompMetadata>(world, id());
		let data = table::borrow<address, vector<u8>>(&component.data, id());
		let (_, fee) = decode(*data);
		fee
	}

	public fun encode(admin: address, fee: u64): vector<u8> {
		let data = vector::empty<u8>();
		vector::append(&mut data, bcs::to_bytes(&admin));
		vector::append(&mut data, bcs::to_bytes(&fee));
		data
	}

	public fun decode(bytes: vector<u8>): (address,u64) {
		let data = bcs::new(bytes);
		(
			bcs::peel_address(&mut data),
			bcs::peel_u64(&mut data)
		)
	}
}
