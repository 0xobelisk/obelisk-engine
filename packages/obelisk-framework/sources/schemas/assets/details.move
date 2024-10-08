module obelisk::assets_detail {
    // AssetStatus holds the current state of the asset. It could either be Live and available for use,
    // or in a Destroying state.
    public enum AssetsStatus has copy, drop, store  {
        // The asset is active and able to be used.
        Live,
        // Whether the asset is frozen for non-admin transfers.
        Frozen,
        // The asset is currently being destroyed, and all actions are no longer permitted on the
        // asset. Once set to `Destroying`, the asset can never transition back to a `Live` state.
        Destroying,
    }

    public fun get_assets_status_live(): AssetsStatus {
        AssetsStatus::Live
    }

    public fun get_assets_status_frozen(): AssetsStatus {
        AssetsStatus::Frozen
    }

    public fun get_assets_status_destroying(): AssetsStatus {
        AssetsStatus::Destroying
    }

    public struct AssetsDetails has copy, drop, store {
        // Can change `owner`, `issuer`, `freezer` and `admin` accounts.
        owner: address,
        // The total supply across all accounts.
        supply: u64,
        // The total number of accounts.
        accounts: u32,
        // The total number of approvals.
        approvals: u32,
        // The status of the asset
        status: AssetsStatus,
        // Whether the asset is mintable.
        is_mintable: bool,
        // Whether the asset is burnable.
        is_burnable: bool,
        // Whether the asset is freezable.
        is_freezable: bool,
    }

    public fun new(owner: address, supply: u64, accounts: u32, approvals: u32, status: AssetsStatus, is_mintable: bool, is_burnable: bool, is_freezable: bool): AssetsDetails {
        AssetsDetails {
            owner,
            supply,
            accounts,
            approvals,
            status,
            is_mintable,
            is_burnable,
            is_freezable,
        }
    }

    public fun get(accounts_details: &AssetsDetails): (address, u64, u32, u32, AssetsStatus) {
        (accounts_details.owner, accounts_details.supply, accounts_details.accounts, accounts_details.approvals, accounts_details.status)
    }

    public fun get_owner(accounts_details: &AssetsDetails): address {
        accounts_details.owner
    }

    public fun get_supply(accounts_details: &AssetsDetails): u64 {
        accounts_details.supply
    }

    public fun get_accounts(accounts_details: &AssetsDetails): u32 {
        accounts_details.accounts
    }

    public fun get_approvals(accounts_details: &AssetsDetails): u32 {
        accounts_details.approvals
    }

    public fun get_status(accounts_details: &AssetsDetails): AssetsStatus {
        accounts_details.status
    }

    public fun get_is_mintable(accounts_details: &AssetsDetails): bool {
        accounts_details.is_mintable
    }

    public fun get_is_burnable(accounts_details: &AssetsDetails): bool {
        accounts_details.is_burnable
    }

    public fun get_is_freezable(accounts_details: &AssetsDetails): bool {
        accounts_details.is_freezable
    }

    public fun set(accounts_details: &mut AssetsDetails, owner: address, supply: u64, accounts: u32, approvals: u32, status: AssetsStatus) {
        accounts_details.owner = owner;
        accounts_details.supply = supply;
        accounts_details.accounts = accounts;
        accounts_details.approvals = approvals;
        accounts_details.status = status;
    }

    public fun set_owner(accounts_details: &mut AssetsDetails, owner: address) {
        accounts_details.owner = owner;
    }

    public fun set_supply(accounts_details: &mut AssetsDetails, supply: u64) {
        accounts_details.supply = supply;
    }

    public fun set_accounts(accounts_details: &mut AssetsDetails, accounts: u32) {
        accounts_details.accounts = accounts;
    }

    public fun set_approvals(accounts_details: &mut AssetsDetails, approvals: u32) {
        accounts_details.approvals = approvals;
    }

    public fun set_status(accounts_details: &mut AssetsDetails, status: AssetsStatus) {
        accounts_details.status = status;
    }

    public fun set_is_mintable(accounts_details: &mut AssetsDetails, is_mintable: bool) {
        accounts_details.is_mintable = is_mintable;
    }

    public fun set_is_burnable(accounts_details: &mut AssetsDetails, is_burnable: bool) {
        accounts_details.is_burnable = is_burnable;
    }

    public fun set_is_freezable(accounts_details: &mut AssetsDetails, is_freezable: bool) {
        accounts_details.is_freezable = is_freezable;
    }
}