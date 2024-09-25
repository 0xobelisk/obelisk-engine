// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

module obelisk::storage_value {

    // /// This key already exists in the map
    // const EKeyAlreadyExists: u64 = 0;
    //
    // /// This key does not exist in the map
    // const EKeyDoesNotExist: u64 = 1;

    /// A set data structure backed by a vector. The set is guaranteed not to
    /// contain duplicate keys. All operations are O(N) in the size of the set
    /// - the intention of this data structure is only to provide the convenience
    /// of programming against a set API. Sets that need sorted iteration rather
    /// than insertion order iteration should be handwritten.
    public struct StorageValue<K: copy + drop> has copy, drop, store {
        contents: vector<K>,
    }

    /// Create an empty `StorageValue`
    public fun empty<K: copy + drop>(): StorageValue<K> {
        StorageValue { contents: vector[] }
    }

    /// Create a singleton `StorageValue` that only contains one element.
    public fun new<K: copy + drop>(key: K): StorageValue<K> {
        StorageValue { contents: vector[key] }
    }

    /// Insert a `key` into self.
    /// Aborts if `key` is already present in `self`.
    public fun set<K: copy + drop>(self: &mut StorageValue<K>, key: K) {
        // assert!(!self.contains(&key), EKeyAlreadyExists);
        if (self.contains()) {
            self.remove();
        };
        self.contents.push_back(key);
    }

    /// Remove the entry `key` from self. Aborts if `key` is not present in `self`.
    public fun remove<K: copy + drop>(self: &mut StorageValue<K>) {
        self.contents.remove(0);
    }

    /// Return true if `self` contains an entry for `key`, false otherwise
    public fun contains<K: copy + drop>(self: &StorageValue<K>): bool {
        self.contents.length() > 0
    }

    /// Return true if `self` has 0 elements, false otherwise
    public fun is_empty<K: copy + drop>(self: &StorageValue<K>): bool {
        self.contents.length() == 0
    }

    /// Unpack `self` into vectors of keys.
    /// The output keys are stored in insertion order, *not* sorted.
    public fun into_value<K: copy + drop>(self: StorageValue<K>): K {
        let StorageValue { contents } = self;
        contents[0]
    }

    /// Construct a new `StorageValue` from a vector of keys.
    /// The keys are stored in insertion order (the original `keys` ordering)
    /// and are *not* sorted.
    public fun from_value<K: copy + drop>(key: K): StorageValue<K> {
        let mut storage = empty();
        storage.set(key);
        storage
    }

    /// Borrow the `contents` of the `StorageValue` to access content by index
    /// without unpacking. The contents are stored in insertion order,
    /// *not* sorted.
    public fun get<K: copy + drop>(self: &StorageValue<K>): K {
        self.contents[0]
    }

    /// Safely try borrow a value bound to `key` in `self`.
    /// Return Some(V) if the value exists, None otherwise.
    /// Only works for a "copyable" value as references cannot be stored in `vector`.
    public fun try_get<K: copy + drop>(self: &StorageValue<K>): Option<K> {
        if (self.contains()) {
            option::some(self.get())
        } else {
            option::none()
        }
    }
}