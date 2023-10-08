import { ObeliskConfig } from "../../types";
import { formatAndWriteMove } from "../formatAndWrite";

export function generateEps(
  projectName: string,
  srcPrefix: string,
  version?: number
) {
  generateWorld(projectName, srcPrefix, version);
  generateEvents(projectName, srcPrefix);
}

function generateWorld(
    projectName: string,
    srcPrefix: string,
    version?: number
) {undefined
  if (version === undefined) {
    version = 1;
  }

  let code = `module ${projectName}::world {
    use std::ascii::{String, string};
    use std::vector;
    use sui::tx_context;
    use sui::transfer;
    use sui::tx_context::TxContext;
    use sui::bag::{Self, Bag};
    use sui::object::{Self, UID, ID};
    use ${projectName}::entity_key;

    const VERSION: u64 = ${version};

    /// Schema does not exist
    const ESchemaDoesNotExist: u64 = 0;
    /// Schema already exists
    const ESchemaAlreadyExists: u64 = 1;
    /// Not the right admin for this world
    const ENotAdmin: u64 = 2;
    /// Migration is not an upgrade
    const ENotUpgrade: u64 = 3;
    /// Calling functions from the wrong package version
    const EWrongVersion: u64 = 4;

    struct AdminCap has key {
        id: UID,
    }

    struct World has key, store {
        id: UID,
        /// Name of the world
        name: String,
        /// Description of the world
        description: String,
        /// Schemas of the world
        schemas: Bag,
        /// Schema names of the world
        schema_names: vector<String>,
        /// admin of the world
        admin: ID,
        /// Version of the world
        version: u64
    }

    public fun create(name: String, description: String, ctx: &mut TxContext): World {
        let admin = AdminCap {
            id: object::new(ctx),
        };
        let _obelisk_world = World {
            id: object::new(ctx),
            name,
            description,
            schemas: bag::new(ctx),
            schema_names: vector::empty(),
            admin: object::id(&admin),
            version: VERSION
        };
        transfer::transfer(admin, tx_context::sender(ctx));
        _obelisk_world
    }

    public fun info(_obelisk_world: &World): (String, String, u64) {
        (_obelisk_world.name, _obelisk_world.description, _obelisk_world.version)
    }
    
    public fun schema_names(_obelisk_world: &World): vector<String> {
        _obelisk_world.schema_names
    }

    public fun get_schema<T : store>(_obelisk_world: &World, id: address): &T {
        assert!(_obelisk_world.version == VERSION, EWrongVersion);
        assert!(bag::contains(&_obelisk_world.schemas, id), ESchemaDoesNotExist);
        bag::borrow<address, T>(&_obelisk_world.schemas, id)
    }

    public fun get_mut_schema<T : store>(_obelisk_world: &mut World, id: address): &mut T {
        assert!(_obelisk_world.version == VERSION, EWrongVersion);
        assert!(bag::contains(&_obelisk_world.schemas, id), ESchemaDoesNotExist);
        bag::borrow_mut<address, T>(&mut _obelisk_world.schemas, id)
    }

    public fun add_schema<T : store>(_obelisk_world: &mut World, schema_name: vector<u8>, schema: T){
        assert!(_obelisk_world.version == VERSION, EWrongVersion);
        let id = entity_key::from_bytes(schema_name);
        assert!(!bag::contains(&_obelisk_world.schemas, id), ESchemaAlreadyExists);
        vector::push_back(&mut _obelisk_world.schema_names, string(schema_name));
        bag::add<address,T>(&mut _obelisk_world.schemas, id, schema);
    }

    public fun contains(_obelisk_world: &mut World, id: address): bool {
        assert!(_obelisk_world.version == VERSION, EWrongVersion);
        bag::contains(&mut _obelisk_world.schemas, id)
    }

    entry fun migrate(_obelisk_world: &mut World, admin_cap: &AdminCap) {
        assert!(_obelisk_world.admin == object::id(admin_cap), ENotAdmin);
        assert!(_obelisk_world.version < VERSION, ENotUpgrade);
        _obelisk_world.version = VERSION;
    }
}
`;
  formatAndWriteMove(
      code,
      `${srcPrefix}/contracts/${projectName}/sources/codegen/eps/world.move`,
      "formatAndWriteMove"
  );
}

function generateEvents(
    projectName: string,
    srcPrefix: string,
) {
  let code = `module ${projectName}::events {
     use std::ascii::String;
    use sui::event;

    struct SchemaRemoveField has copy, drop {
        _obelisk_schema_name: String,
        _obelisk_entity_key: address
    }

    struct SchemaSetField<T: copy + drop + store> has copy, drop {
        _obelisk_schema_name: String,
        _obelisk_entity_key: address,
        data: T
    }
    
    struct SchemaSetEphemeralRecord<T: copy + drop + store> has copy, drop {
        _obelisk_schema_name: String,
        data: T
    }

    public fun emit_set<T: copy + drop + store>(_obelisk_schema_name: String, _obelisk_entity_key: address, data: T) {
        event::emit(SchemaSetField { _obelisk_schema_name, _obelisk_entity_key, data})
    }
    
    public fun emit_ephemeral<T: copy + drop + store>(_obelisk_schema_name: String, data: T) {
        event::emit(SchemaSetEphemeralRecord { _obelisk_schema_name, data })
    }

    public fun emit_remove(_obelisk_schema_name: String, _obelisk_entity_key: address) {
        event::emit(SchemaRemoveField { _obelisk_schema_name, _obelisk_entity_key })
    }
}
`;
  formatAndWriteMove(
      code,
      `${srcPrefix}/contracts/${projectName}/sources/codegen/eps/events.move`,
      "formatAndWriteMove"
  );
}

