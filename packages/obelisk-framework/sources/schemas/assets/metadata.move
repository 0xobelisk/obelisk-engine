module obelisk::assets_metadata {
    use std::string::String;

    public struct AssetsMetadata has drop, copy, store {
        // The user friendly name of this asset. Limited in length by `StringLimit`.
        name: String,
        // The ticker symbol for this asset. Limited in length by `StringLimit`.
        symbol: String,
        // A short description of this asset.
        description: String,
        // The number of decimals this asset uses to represent one unit.
        decimals: u8,
        // Asset icon url
        url: String,
        // Extra information about this asset. Generally used for display purposes.
        info: String
    }

    public fun new(name: String, symbol: String, description: String, decimals: u8, url: String, info: String): AssetsMetadata {
        AssetsMetadata {
            name,
            symbol,
            description,
            decimals,
            url,
            info
        }
    }

    public fun get(self: &AssetsMetadata): (String, String, String, u8, String, String) {
        (self.name, self.symbol, self.description, self.decimals, self.url, self.info)
    }

    public fun get_name(self: AssetsMetadata): String {
        self.name
    }

    public fun get_symbol(self: AssetsMetadata): String {
        self.symbol
    }
}