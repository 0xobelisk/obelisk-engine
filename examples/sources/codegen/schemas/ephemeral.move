module examples::ephemeral_schema {
    use sui::table::{Self, Table};
    use std::ascii::{String, string};
    use sui::tx_context::TxContext;
    use examples::events;
    use examples::world::{Self, World};
    
    const NAME: vector<u8> = b"ephemeral";
    
	// value
	struct EphemeralData has copy , drop, store {
		value: u64
	}
  
	struct SchemaMetadata has store {
		name: String,
		data: Table<address, EphemeralData>
	}

	public fun register(_obelisk_world: &mut World, ctx: &mut TxContext) {
		world::add_schema<SchemaMetadata>(_obelisk_world, NAME, SchemaMetadata {
			name: string(NAME),
			data: table::new<address, EphemeralData>(ctx)
		});
	}

	public fun emit_ephemeral(value: u64) {
		events::emit_ephemeral(string(NAME), EphemeralData { value })
	}
}