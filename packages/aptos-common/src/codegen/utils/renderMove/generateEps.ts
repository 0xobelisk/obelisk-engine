import { formatAndWriteMove } from "../formatAndWrite";
import {ObeliskConfig} from "../../types";
import {getFriendSchema} from "./common";

export function generateEps(
    config: ObeliskConfig,
  srcPrefix: string,
  version?: number
) {
  generateWorld(config, srcPrefix, version);
  generateEvents(config.name, srcPrefix);
}

function generateWorld(
    config: ObeliskConfig,
  srcPrefix: string,
  version?: number
) {
  if (version === undefined) {
    version = 1;
  }

  let code = `module ${config.name}::world {
    use std::string::String;
    use aptos_framework::account::{SignerCapability, create_signer_with_capability, get_signer_capability_address};
    use aptos_framework::account;
    use std::signer;
    
    friend ${config.name}::init;
    ${getFriendSchema(config.name, config.schemas)}
    
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

    struct World has key {
        /// Deployer
        deployer: address,
        /// Name of the world
        name: String,
        /// Description of the world
        description: String,
        /// Resource Capability  of the world
        resource_cap: SignerCapability
    }

    public(friend) fun create(deployer_signer: &signer, name: String, description: String) {
        let deployer = signer::address_of(deployer_signer);
        let (_, resource_cap) = account::create_resource_account(deployer_signer, b"Examples");
        move_to(deployer_signer, World { deployer, name, description, resource_cap });
    }

    public(friend) fun resource_signer(): signer acquires World {
        let _obelisk_world = borrow_global_mut<World>(@${config.name});
        create_signer_with_capability(&_obelisk_world.resource_cap)
    }

    // ============================= View Function =============================

    #[view]
    public fun resource_address(): address acquires World {
        let _obelisk_world = borrow_global_mut<World>(@${config.name});
        get_signer_capability_address(&_obelisk_world.resource_cap)
    }

    #[view]
    public fun deployer_address(): address acquires World {
        let _obelisk_world = borrow_global_mut<World>(@${config.name});
        _obelisk_world.deployer
    }

    #[view]
    public fun info(): (String, String, address) acquires World {
        let _obelisk_world = borrow_global_mut<World>(@${config.name});
        (_obelisk_world.name, _obelisk_world.description, _obelisk_world.deployer)
    }
}
`;
  formatAndWriteMove(
    code,
    `${srcPrefix}/contracts/${config.name}/sources/codegen/eps/world.move`,
    "formatAndWriteMove"
  );
}

function generateEvents(projectName: string, srcPrefix: string) {
  let code = `module ${projectName}::events {
    use std::option::Option;
    use aptos_framework::event;

    #[event]
    struct SchemaSetRecord<T: drop + store> has drop, store {
        _obelisk_schema_id: vector<u8>,
        _obelisk_schema_type: u8,
        _obelisk_entity_key: Option<address>,
        data: T
    }

    #[event]
    struct SchemaRemoveRecord has drop, store {
        _obelisk_schema_id: vector<u8>,
        _obelisk_entity_key: address
    }

    public fun new_set_record_event<T: drop + store>(_obelisk_schema_id: vector<u8>, _obelisk_schema_type: u8, _obelisk_entity_key: Option<address>, data: T): SchemaSetRecord<T> {
        SchemaSetRecord { _obelisk_schema_id, _obelisk_schema_type, _obelisk_entity_key, data }
    }

    public fun new_remove_record_event(_obelisk_schema_id: vector<u8>, _obelisk_entity_key: address): SchemaRemoveRecord {
        SchemaRemoveRecord { _obelisk_schema_id, _obelisk_entity_key }
    }

    public fun emit_set<T: drop + store>(_obelisk_schema_id: vector<u8>, _obelisk_schema_type: u8, _obelisk_entity_key: Option<address>, data: T) {
        event::emit(new_set_record_event<T>(_obelisk_schema_id, _obelisk_schema_type, _obelisk_entity_key, data));
    }

    public fun emit_remove(_obelisk_schema_id: vector<u8>, _obelisk_entity_key: address) {
        event::emit(new_remove_record_event(_obelisk_schema_id, _obelisk_entity_key));
    }
}
`;
  formatAndWriteMove(
    code,
    `${srcPrefix}/contracts/${projectName}/sources/codegen/eps/events.move`,
    "formatAndWriteMove"
  );
}
