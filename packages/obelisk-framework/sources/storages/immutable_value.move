// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/// A StorageImmutableValue is a map-like collection. But unlike a traditional collection, it's keys and values are
/// not stored within the `StorageImmutableValue` value, but instead are stored using Sui's object system. The
/// `StorageImmutableValue` struct acts only as a handle into the object system to retrieve those keys and values.
/// Note that this means that `StorageImmutableValue` values with exactly the same key-value mapping will not be
/// equal, with `==`, at runtime. For example
/// ```
/// let StorageValue1 = StorageImmutableValue::new<u64, bool>();
/// let StorageValue2 = StorageImmutableValue::new<u64, bool>();
/// StorageImmutableValue::add(&mut StorageValue1, 0, false);
/// StorageImmutableValue::add(&mut StorageValue1, 1, true);
/// StorageImmutableValue::add(&mut StorageValue2, 0, false);
/// StorageImmutableValue::add(&mut StorageValue2, 1, true);
/// // StorageValue1 does not equal StorageValue2, despite having the same entries
/// assert!(&StorageValue1 != &StorageValue2);
/// ```
module obelisk::storage_immutable_value {
    use sui::dynamic_field as field;
    
    const KEY: vector<u8> = b"StorageImmutableValue";

    public struct StorageImmutableValue<phantom V: store> has key, store {
        /// the ID of this StorageImmutableValue
        id: UID,
    }

    /// Creates a new, empty StorageImmutableValue
    public fun new<V: store>(ctx: &mut TxContext): StorageImmutableValue<V> {
        StorageImmutableValue {
            id: object::new(ctx),
        }
    }

    /// Adds a key-value pair to the table `table: &mut Table<K, V>`
    /// Aborts with `sui::dynamic_field::EFieldAlreadyExists` if the table already has an entry with
    /// that key `k: K`.
    public fun add<V: store>(self: &mut StorageImmutableValue<V>, v: V) {
        field::add(&mut self.id, KEY, v);
    }

    /// ImmuStorageValue borrows the value associated with the key in the StorageImmutableValue `self: &StorageImmutableValue<V>`.
    /// Aborts with `sui::dynamic_field::EFieldDoesNotExist` if the StorageImmutableValue does not have an entry with
    /// that key `k: K`.
    public fun borrow<V: store>(self: &StorageImmutableValue<V>): &V {
        field::borrow<vector<u8>, V>(&self.id, KEY)
    }

    /// Mutably borrows the value associated with the key in the StorageImmutableValue `self: &mut StorageImmutableValue<V>`.
    /// Aborts with `sui::dynamic_field::EFieldDoesNotExist` if the StorageImmutableValue does not have an entry with
    /// that key `k: K`.
    public fun borrow_mut<V: store>(self: &mut StorageImmutableValue<V>): &mut V {
          field::borrow_mut<vector<u8>, V>(&mut self.id, KEY)
    }

    /// Removes the key-value pair in the StorageImmutableValue `self: &mut StorageImmutableValue<V>` and returns the value.
    /// Aborts with `sui::dynamic_field::EFieldDoesNotExist` if the StorageImmutableValue does not have an entry with
    /// that key `k: K`.
    public fun remove<V: store>(self: &mut StorageImmutableValue<V>): V {
            field::remove<vector<u8>, V>(&mut self.id, KEY)
    }

    /// Returns true iff there is a value associated with the key `k: K` in StorageImmutableValue `self: &StorageImmutableValue<V>`
    public fun contains<V: store>(self: &StorageImmutableValue<V>): bool {
        field::exists_with_type<vector<u8>, V>(&self.id, KEY)
    }

    /// Returns true iff the StorageImmutableValue is empty (if `length` returns `0`)
    public fun is_empty<V: store>(self: &StorageImmutableValue<V>): bool {
        !self.contains()
    }

    /// Destroys an empty StorageImmutableValue
    /// Aborts with `EStorageValueNotEmpty` if the StorageImmutableValue still contains values
    public fun destroy_empty<V: store>(self: StorageImmutableValue<V>) {
        let StorageImmutableValue { id } = self;
        id.delete()
    }

    /// Drop a possibly non-empty StorageImmutableValue.
    /// Usable only if the value type `V` has the `drop` ability
    public fun drop<V: drop + store>(self: StorageImmutableValue<V>) {
        let StorageImmutableValue { id} = self;
        id.delete()
    }
}
