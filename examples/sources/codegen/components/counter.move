module examples::counter_component {
    use examples::world::{Self , World};
  
    // Systems
	friend examples::counter_system;
      
	const COMPONENT_NAME: vector<u8> = b"Counter Component";
    
  	struct CounterData has drop, store {
		value: u64
	}

  	public fun new(value: u64): CounterData {
		CounterData {
			value
		}
	}

  	public fun register(world: &mut World) {
  		world::add_component<CounterData>(
			world,
			COMPONENT_NAME,
			new(0)
		);
	}
  
  	public(friend) fun update(world: &mut World, value: u64) {
		world::get_mut_component<CounterData>(world, COMPONENT_NAME).value = value; 
	}

  	public fun get(world: &World): u64 {
		world::get_component<CounterData>(world, COMPONENT_NAME).value
	}
}
