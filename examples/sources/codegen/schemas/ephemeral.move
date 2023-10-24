module examples::ephemeral_schema {
    use std::option::none;
    use examples::events;
    
    const SCHEMA_ID: vector<u8> = b"ephemeral";
    const SCHEMA_TYPE: u8 = 2;
    
	// value
	struct EphemeralData has copy, drop  {
		value: u64
	}
  
	public fun emit_ephemeral( value: u64) {
		events::emit_set(SCHEMA_ID, SCHEMA_TYPE, none(), EphemeralData {  value })
	}
}