module obelisk::wrapper_coin {
    public struct WrapperCoin<phantom T> has drop, copy, store { }

    public fun new<T>(): WrapperCoin<T> {
        WrapperCoin {}
    }
}