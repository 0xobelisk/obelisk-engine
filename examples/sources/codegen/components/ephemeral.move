module examples::ephemeral_comp {
    use sui::event;
    use sui::table::{Self, Table};
    use examples::world::{Self, World};
    use std::ascii::{String, string};
    use sui::tx_context::TxContext;
    
    const NAME: vector<u8> = b"ephemeral";
    
	// value
	struct EphemeralData has copy , drop, store {
		value: u64
	}

            
	struct CompMetadata has store {
		name: String,
		data: Table<address, EphemeralData>
	}

	public fun register(_obelisk_world: &mut World, ctx: &mut TxContext) {
		world::add_comp<CompMetadata>(_obelisk_world, NAME, CompMetadata {
			name: string(NAME),
			data: table::new<address, EphemeralData>(ctx)
		});
	}

	public fun emit_ephemeral(value: u64) {
		event::emit(EphemeralData { value })
	}
}