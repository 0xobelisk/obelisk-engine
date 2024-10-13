// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

module obelisk::storage_value {

    /// A storable handler for values in general. Is used in the `StorageValue`
    public struct StorageValue<Value: store> has store {
        value: Value,
    }

    /// Creates a new, empty StorageValue
    public fun new<Value: store>(value: Value): StorageValue<Value> {
        StorageValue { value }
    }

    /// Gets the value of the StorageValue `self: &StorageValue<Value>`.
    public fun borrow<Value: store>(self: &StorageValue<Value>): &Value {
        &self.value
    }

    /// Gets the value of the StorageValue `self: &mut StorageValue<Value>`.
    public fun borrow_mut<Value: store>(self: &mut StorageValue<Value>): &mut Value {
        &mut self.value
    }

    /// Update the `value` of the `StorageValue`.
    public macro fun mutate<$Value: store>($self: &mut StorageValue<$Value>, $f: |&mut $Value|) {
        let self = $self;
        $f(borrow_mut(self));
    }


    // ======================================= Value: drop + copy + store =======================================

    /// Set the `value` of the `StorageValue`.
    public fun set<V: copy + drop + store>(self: &mut StorageValue<V>, value: V) {
        self.value = value;
    }

    /// Get the `value` of the `StorageValue`.
    public fun get<V: copy + drop + store>(self: &StorageValue<V>): V {
        self.value
    }

    // ============================================================================================
}
