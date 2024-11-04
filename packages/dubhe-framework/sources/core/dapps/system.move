module dubhe::dapps_system {
    use std::ascii::String;
    use std::ascii;
    use std::type_name;
    use dubhe::root_schema::Root;
    use dubhe::root_system;
    use sui::address;
    use dubhe::dapp_metadata;
    use sui::clock::Clock;
    use dubhe::dapps_schema::Dapps;

    public fun current_package_id<T>(): address {
        let dapp_package_id_string = type_name::get<T>().get_address().into_bytes();
        address::from_ascii_bytes(&dapp_package_id_string)
    }

    public entry fun register<T>(
        dapps: &mut Dapps,
        name: String,
        description: String,
        clock: &Clock,
        ctx: &mut TxContext
    ) {
        let dapp_package_id = current_package_id<T>();
        assert!(!dapps.borrow_metadata().contains_key(dapp_package_id), 0);

        dapps.borrow_mut_metadata().set(
            dapp_package_id,
            dapp_metadata::new(
                name,
                description,
                ascii::string(b""),
                ascii::string(b""),
                clock.timestamp_ms(),
                vector[]
            )
        );
        dapps.borrow_mut_admin().set(dapp_package_id, ctx.sender());
        dapps.borrow_mut_version().set(dapp_package_id, 0);
        dapps.borrow_mut_schemas().set(dapp_package_id, vector[]);
        dapps.borrow_mut_safe_mode().set(dapp_package_id, false);
    }

    public entry fun set_metadata(
        dapps: &mut Dapps,
        package_id: address,
        clock: &Clock,
        name: String,
        description: String,
        icon_url: String,
        website_url: String,
        partners: vector<String>,
        ctx: &mut TxContext
    ) {
        assert!(dapps.borrow_admin().get(package_id) == ctx.sender(), 0);
        let created_at = clock.timestamp_ms();
        assert!(dapps.borrow_metadata().contains_key(package_id), 0);
        dapps.borrow_mut_metadata().mutate!(package_id, |metadata| {
            metadata.set(name, description, icon_url, website_url, created_at, partners);
        });
    }

    public entry fun add_schema<T>(dapps: &mut Dapps, package_id: address, ctx: &mut TxContext) {
        assert!(dapps.borrow_admin().get(package_id) == ctx.sender(), 0);
        let schema = type_name::get<T>().into_string();
        assert!(!dapps.borrow_schemas().get(package_id).contains(&schema), 0);
        dapps.borrow_mut_schemas().mutate!(package_id, |schemas| {
            schemas.push_back(schema);
        });
    }

    public entry fun transfer_ownership(
        dapps: &mut Dapps,
        package_id: address,
        new_admin: address,
        ctx: &mut TxContext
    ) {
        assert!(dapps.borrow_admin().get(package_id) == ctx.sender(), 0);
        dapps.borrow_mut_admin().set(package_id, new_admin);
    }

    public entry fun add_verification(dapps: &mut Dapps, root: &Root, package_id: address, ctx: &mut TxContext) {
        root_system::ensure_root(root, ctx);
        assert!(dapps.borrow_metadata().contains_key(package_id), 0);
        dapps.borrow_mut_verified().set(package_id, true);
    }

    public entry fun remove_verification(dapps: &mut Dapps, root: &Root, package_id: address, ctx: &mut TxContext) {
        root_system::ensure_root(root, ctx);
        assert!(dapps.borrow_metadata().contains_key(package_id), 0);
        dapps.borrow_mut_verified().remove(package_id);
    }

    public fun assert_admin<T: drop>(dapps: &Dapps, ctx: &TxContext) {
        let package_id = current_package_id<T>();
        assert!(dapps.borrow_admin().get(package_id) == ctx.sender(), 0);
    }

    public fun assert_is_safe_mode<T: drop>(dapps: &Dapps) {
        let package_id = current_package_id<T>();
        assert!(!dapps.borrow_safe_mode().get(package_id), 0);
    }

}
