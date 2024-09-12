module counter::app_key {
  /// Authorization token for the app.
    public struct AppKey has drop {}

    public(package) fun new(): AppKey {
        AppKey {  }
    }
}
