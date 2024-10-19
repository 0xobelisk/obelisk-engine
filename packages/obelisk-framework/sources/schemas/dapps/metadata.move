module obelisk::dapp_metadata {
    use std::ascii::String;

    public struct DappMetadata has drop, copy, store {
        name: String,
        description: String,
        icon_url: String,
        website_url: String,
        created_at: u64,
        partners: vector<String>,
    }

    public fun new(
        name: String,
        description: String,
        icon_url: String,
        website_url: String,
        created_at: u64,
        partners: vector<String>,
    ): DappMetadata {
        DappMetadata {
            name,
            description,
            icon_url,
            website_url,
            created_at,
            partners,
        }
    }

    public fun set(
        self: &mut DappMetadata,
        name: String,
        description: String,
        icon_url: String,
        website_url: String,
        created_at: u64,
        partners: vector<String>,
    ) {
        self.name = name;
        self.description = description;
        self.icon_url = icon_url;
        self.website_url = website_url;
        self.created_at = created_at;
        self.partners = partners;
    }

    public fun get_name(self: DappMetadata): String {
        self.name
    }

    public fun get_description(self: DappMetadata): String {
        self.description
    }

    public fun get_icon_url(self: DappMetadata): String {
        self.icon_url
    }

    public fun get_website_url(self: DappMetadata): String {
        self.website_url
    }

    public fun get_created_at(self: DappMetadata): u64 {
        self.created_at
    }

    public fun get_partners(self: DappMetadata): vector<String> {
        self.partners
    }

    public fun borrow_mut_name(self: &mut DappMetadata): &mut String {
        &mut self.name
    }

    public fun borrow_mut_description(self: &mut DappMetadata): &mut String {
        &mut self.description
    }

    public fun borrow_mut_icon_url(self: &mut DappMetadata): &mut String {
        &mut self.icon_url
    }

    public fun borrow_mut_website_url(self: &mut DappMetadata): &mut String {
        &mut self.website_url
    }

    public fun borrow_mut_partners(self: &mut DappMetadata): &mut vector<String> {
        &mut self.partners
    }
}