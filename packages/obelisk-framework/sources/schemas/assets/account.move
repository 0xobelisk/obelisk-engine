module obelisk::assets_account {
    // The status of an asset account.
    public enum AccountStatus has drop, copy, store {
        // Asset account can receive and transfer the assets.
        Liquid,
        // Asset account cannot transfer the assets.
        Frozen,
        // Asset account cannot receive and transfer the assets.
        Blocked,
    }

    public fun get_account_status_liquid(): AccountStatus {
        AccountStatus::Liquid
    }

    public fun get_account_status_frozen(): AccountStatus {
        AccountStatus::Frozen
    }

    public fun get_account_status_blocked(): AccountStatus {
        AccountStatus::Blocked
    }

    public struct AssetsAccount has drop, copy, store  {
        // The balance.
        balance: u64,
        // The status of the account.
        status: AccountStatus,
    }

    public fun new(balance: u64, status: AccountStatus): AssetsAccount {
        AssetsAccount {
            balance,
            status,
        }
    }

    public fun get(account: &AssetsAccount): (u64, AccountStatus) {
        (account.balance, account.status)
    }

    public fun get_balance(account: &AssetsAccount): u64 {
        account.balance
    }

    public fun get_status(account: &AssetsAccount): AccountStatus {
        account.status
    }

    public fun set(account: &mut AssetsAccount, balance: u64, status: AccountStatus) {
        account.balance = balance;
        account.status = status;
    }

    public fun set_balance(account: &mut AssetsAccount, balance: u64) {
        account.balance = balance;
    }

    public fun set_status(account: &mut AssetsAccount, status: AccountStatus) {
        account.status = status;
    }
}