module examples::ephemeral_schema {
    use std::option::none;
    use examples::events;
    
    const SCHEMA_ID: vector<u8> = b"ephemeral";
    
	// caller
	// value
	// flag
	struct EphemeralData has copy , drop, store {
		caller: address,
		value: u64,
		flag: bool
	}
  
	public fun emit_ephemeral( caller: address, value: u64, flag: bool) {
		events::emit_set(SCHEMA_ID, none(), EphemeralData {  caller, value, flag })
	}
}