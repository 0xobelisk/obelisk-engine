module examples::single_struct_comp {
    use std::ascii::{String, string};
    use std::option::none;
    use std::vector;
    use sui::bcs;
    use examples::entity_key;
    use examples::world::{Self, World};
  
    // Systems
	friend examples::example_system;

	const COMPONENT_NAME: vector<u8> = b"single_struct";

	public fun id(): address {
		entity_key::from_bytes(COMPONENT_NAME)
	}

	// admin
	// fee
	public fun field_types(): vector<String> {
		vector[string(b"u64")]
	}
  
	struct Field has drop, store {
		data: vector<u8>
	}

	public fun register(world: &mut World) {
		world::add_component<Field>(
			world,
			id(),
			Field { data: encode(@0x1, 100) },
			string(COMPONENT_NAME)
		);
	}

	public(friend) fun update(world: &mut World, admin: address, fee: u64) {
		let data = encode(admin, fee);
		world::get_mut_component<Field>(world, id()).data = data;
		world::emit_update_event(id(), none(), data)
	}
	public(friend) fun update_admin(world: &mut World, admin: address) {
		let field = world::get_mut_component<Field>(world, id());
		let (_, fee) = decode(field.data);
		field.data = encode(admin, fee);
		world::emit_update_event(id(), none(), field.data)
	}

	public(friend) fun update_fee(world: &mut World, fee: u64) {
		let field = world::get_mut_component<Field>(world, id());
		let (admin, _) = decode(field.data);
		field.data = encode(admin, fee);
		world::emit_update_event(id(), none(), field.data)
	}

	public fun get(world: &World): (address,u64) {
		let data = world::get_component<Field>(world, id()).data;
		decode(data)
	}

	public fun get_admin(world: &World): address {
		let data = world::get_component<Field>(world, id()).data;
		let (admin, _) = decode(data);
		admin
	}

	public fun get_fee(world: &World): u64 {
		let data = world::get_component<Field>(world, id()).data;
		let (_, fee) = decode(data);
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
