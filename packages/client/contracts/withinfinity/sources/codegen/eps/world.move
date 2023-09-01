module withinfinity::world {
    use sui::tx_context::TxContext;
    use sui::hash::keccak256;
    use sui::bag::{ Self, Bag };
    use sui::object::{ Self, UID };
    use sui::table::Table;
    use sui::table;
    use std::vector;

    // init
    friend withinfinity::init;

    // components
	friend withinfinity::level_component;
	friend withinfinity::state_component;
	friend withinfinity::suifren_component;

    // systems
	friend withinfinity::level_system;
	friend withinfinity::state_system;
	friend withinfinity::suifren_system;


    struct World has key, store{
        id: UID,
        /// Entities of the world
        /// entity_key <=> vector<component_name>
        entities: Table<vector<u8>, vector<vector<u8>>>,
        /// Components of the world
        /// K256(component_name) <=> Table<entity_key,T>
        components: Bag,
        /// Configs of the world
        /// K256(config_name) <=> T
        configs: Bag
    }

    public fun create_world(ctx: &mut TxContext): World {
        World {
            id: object::new(ctx),
            entities: table::new<vector<u8>, vector<vector<u8>>>(ctx),
            components: bag::new(ctx),
            configs: bag::new(ctx)
        }
    }

    public fun get_component<T : store>(world: &World, component_name: vector<u8>): &T {
        let component_id = keccak256(&component_name);
        bag::borrow<vector<u8>, T>(&world.components, component_id)
    }

    public(friend) fun get_mut_component<T : store>(world: &mut World, component_name: vector<u8>): &mut T {
        let component_id = keccak256(&component_name);
        bag::borrow_mut<vector<u8>, T>(&mut world.components, component_id)
    }

    public(friend) fun add_component_in_world<T : store>(world: &mut World, component_name: vector<u8>, storage: T){
        let component_id = keccak256(&component_name);
        bag::add<vector<u8>,T>(&mut world.components, component_id, storage);
    }

    public(friend) fun remove_component_from_world<T : store>(world: &mut World, component_name: vector<u8>): T {
        let component_id = keccak256(&component_name);
        bag::remove<vector<u8>,T>(&mut world.components, component_id)
    }

    public fun world_contains_component(world: &mut World, component_name: vector<u8>): bool {
        let component_id = keccak256(&component_name);
        bag::contains(&mut world.components, component_id)
    }

    public fun get_config<T : store>(world: &World, config_name: vector<u8>): &T {
        let config_id = keccak256(&config_name);
        bag::borrow<vector<u8>, T>(&world.components, config_id)
    }

    public(friend) fun get_mut_config<T : store>(world: &mut World, config_name: vector<u8>): &mut T {
        let config_id = keccak256(&config_name);
        bag::borrow_mut<vector<u8>, T>(&mut world.configs, config_id)
    }

    public(friend) fun add_config_in_world<T : store>(world: &mut World, config_name: vector<u8>, config: T){
        let config_id = keccak256(&config_name);
        bag::add<vector<u8>,T>(&mut world.components, config_id, config);
    }

    public(friend) fun remove_config_from_world<T : store>(world: &mut World, config_name: vector<u8>): T {
        let config_id = keccak256(&config_name);
        bag::remove<vector<u8>,T>(&mut world.components, config_id)
    }

    public fun world_contains_config(world: &mut World, config_name: vector<u8>): bool {
        let config_id = keccak256(&config_name);
        bag::contains(&mut world.components, config_id)
    }

    public fun get_entities(world: &World): &Table<vector<u8>, vector<vector<u8>>> {
        &world.entities
    }

    public(friend) fun get_mut_entities(world: &mut World): &mut Table<vector<u8>, vector<vector<u8>>> {
        &mut world.entities
    }

    public(friend) fun add_component_in_entity(world: &mut World, entity_key: vector<u8>, component_name: vector<u8>) {
        if(table::contains(&world.entities, entity_key)) {
            let components = table::borrow_mut(&mut world.entities, entity_key);
            vector::push_back(components, component_name);
        } else {
            let components = vector::empty<vector<u8>>();
            vector::push_back(&mut components, component_name);
            table::add(&mut world.entities, entity_key, components);
        }
    }

    public(friend) fun remove_component_from_entity(world: &mut World, entity_key: vector<u8>) {
        let components = table::borrow_mut(&mut world.entities, entity_key);
        let (_, index) = vector::index_of(components, &entity_key);
        vector::remove(components, index);
    }

    public fun entity_contains_component(world: &World, entity_key: vector<u8>): bool {
        let components = table::borrow(&world.entities, entity_key);
        vector::contains(components, &entity_key)
    }

    public fun get_entity_all_components(world: &World, entity_key: vector<u8>): vector<vector<u8>> {
        *table::borrow(&world.entities, entity_key)
    }
}
 