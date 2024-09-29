// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

module obelisk::storage_double_map {

    // This key already exists in the map
    const EKeyAlreadyExists: u64 = 0;

    // This key does not exist in the map
    const EKeyDoesNotExist: u64 = 1;

    // Trying to destroy a map that is not empty
    const EMapNotEmpty: u64 = 2;

    // Trying to access an element of the map at an invalid index
    const EIndexOutOfBounds: u64 = 3;

    // Trying to pop from a map that is empty
    const EMapEmpty: u64 = 4;

    // Trying to construct a map from keys and values of different lengths
    const EUnequalLengths: u64 = 5;

    // A map data structure backed by a vector. The map is guaranteed not to contain duplicate keys, but entries
    // are *not* sorted by key--entries are included in insertion order.
    // All operations are O(N) in the size of the map--the intention of this data structure is only to provide
    // the convenience of programming against a map API.
    // Large maps should use handwritten parent/child relationships instead.
    // Maps that need sorted iteration rather than insertion order iteration should also be handwritten.
    public struct StorageDoubleMap<K1: copy + drop, K2: copy + drop , V: copy + drop> has copy, drop, store {
        contents: vector<Entry<K1, K2, V>>,
    }

    // An entry in the map
    public struct Entry<K1: copy + drop, K2: copy + drop , V: copy + drop> has copy, drop, store {
        key1: K1,
        key2: K2,
        value: V,
    }

    // Create an empty `StorageDoubleMap`
    public fun empty<K1: copy + drop, K2: copy + drop , V: copy + drop>(): StorageDoubleMap<K1, K2,V> {
        StorageDoubleMap { contents: vector[] }
    }

    // Insert the entry `key` |-> `value` into `self`.
    // Aborts if `key` is already bound in `self`.
    public fun insert<K1: copy + drop, K2: copy + drop , V: copy + drop>(self: &mut StorageDoubleMap<K1, K2,V>, key1: K1, key2: K2, value: V) {
        if (self.contains(&key1, &key2)) {
            self.remove(&key1, &key2);
        };
        self.contents.push_back(Entry { key1, key2, value })
    }

    // Remove the entry `key` |-> `value` from self. Aborts if `key` is not bound in `self`.
    public fun remove<K1: copy + drop, K2: copy + drop , V: copy + drop>(self: &mut StorageDoubleMap<K1, K2,V>, key1: &K1, key2: &K2): (K1, K2, V) {
        let idx = self.get_idx(key1, key2);
        let Entry { key1, key2, value } = self.contents.remove(idx);
        (key1, key2, value)
    }

    // Pop the most recently inserted entry from the map. Aborts if the map is empty.
    public fun pop<K1: copy + drop, K2: copy + drop , V: copy + drop>(self: &mut StorageDoubleMap<K1, K2, V>): (K1, K2, V) {
        assert!(!self.contents.is_empty(), EMapEmpty);
        let Entry { key1, key2, value } = self.contents.pop_back();
        (key1, key2, value)
    }

    #[syntax(index)]
    // Get a mutable reference to the value bound to `key` in `self`.
    // Aborts if `key` is not bound in `self`.
    public fun get_mut<K1: copy + drop, K2: copy + drop , V: copy + drop>(self: &mut StorageDoubleMap<K1, K2, V>, key1: &K1, key2: &K2): &mut V {
        let idx = self.get_idx(key1, key2);
        let entry = &mut self.contents[idx];
        &mut entry.value
    }

    // Get a reference to the value bound to `key` in `self`.
    // Aborts if `key` is not bound in `self`.
    public fun get<K1: copy + drop, K2: copy + drop , V: copy + drop>(self: &StorageDoubleMap<K1, K2, V>, key1: &K1, key2: &K2): V {
        let idx = self.get_idx(key1, key2);
        let entry = &self.contents[idx];
        entry.value
    }

    // Safely try borrow a value bound to `key` in `self`.
    // Return Some(V) if the value exists, None otherwise.
    // Only works for a "copyable" value as references cannot be stored in `vector`.
    public fun try_get<K1: copy + drop, K2: copy + drop , V: copy + drop>(self: &StorageDoubleMap<K1, K2, V>, key1: &K1, key2: &K2): Option<V> {
        if (self.contains(key1, key2)) {
            option::some(get(self, key1, key2))
        } else {
            option::none()
        }
    }

    // Return true if `self` contains an entry for `key`, false otherwise
    public fun contains<K1: copy + drop, K2: copy + drop , V: copy + drop>(self: &StorageDoubleMap<K1, K2, V>, key1: &K1, key2: &K2): bool {
        get_idx_opt(self, key1, key2).is_some()
    }

    // Return the number of entries in `self`
    public fun size<K1: copy + drop, K2: copy + drop , V: copy + drop>(self: &StorageDoubleMap<K1, K2, V>): u64 {
        self.contents.length()
    }

    // Return true if `self` has 0 elements, false otherwise
    public fun is_empty<K1: copy + drop, K2: copy + drop , V: copy + drop>(self: &StorageDoubleMap<K1, K2, V>): bool {
        self.size() == 0
    }

    // Destroy an empty map. Aborts if `self` is not empty
    public fun destroy_empty<K1: copy + drop, K2: copy + drop , V: copy + drop>(self: StorageDoubleMap<K1, K2, V>) {
        let StorageDoubleMap { contents } = self;
        assert!(contents.is_empty(), EMapNotEmpty);
        contents.destroy_empty()
    }

    // Unpack `self` into vectors of its keys and values.
    // The output keys and values are stored in insertion order, *not* sorted by key.
    public fun into_keys_values<K1: copy + drop, K2: copy + drop , V: copy + drop>(self: StorageDoubleMap<K1, K2, V>): (vector<K1>, vector<K2>, vector<V>) {
        let StorageDoubleMap { mut contents } = self;
        // reverse the vector so the output keys and values will appear in insertion order
        contents.reverse();
        let mut i = 0;
        let n = contents.length();
        let mut keys1 = vector[];
        let mut keys2 = vector[];
        let mut values = vector[];
        while (i < n) {
            let Entry { key1, key2, value } = contents.pop_back();
            keys1.push_back(key1);
            keys2.push_back(key2);
            values.push_back(value);
            i = i + 1;
        };
        contents.destroy_empty();
        (keys1, keys2, values)
    }

    // Construct a new `StorageDoubleMap` from two vectors, one for keys and one for values.
    // The key value pairs are associated via their indices in the vectors, e.g. the key at index i
    // in `keys` is associated with the value at index i in `values`.
    // The key value pairs are stored in insertion order (the original vectors ordering)
    // and are *not* sorted.
    public fun from_keys_values<K1: copy + drop, K2: copy + drop , V: copy + drop>(
        mut keys1: vector<K1>,
        mut keys2: vector<K2>,
        mut values: vector<V>,
    ): StorageDoubleMap<K1, K2, V> {
        assert!(keys1.length() == values.length(), EUnequalLengths);
        assert!(keys2.length() == values.length(), EUnequalLengths);
        keys1.reverse();
        keys2.reverse();
        values.reverse();
        let mut map = empty();
        while (!keys1.is_empty()) map.insert(keys1.pop_back(), keys2.pop_back(), values.pop_back());
        keys1.destroy_empty();
        keys2.destroy_empty();
        values.destroy_empty();
        map
    }

    // Returns a list of keys in the map.
    // Do not assume any particular ordering.
    public fun keys<K1: copy + drop, K2: copy + drop , V: copy + drop>(self: &StorageDoubleMap<K1, K2, V>): (vector<K1>, vector<K2>) {
        let mut i = 0;
        let n = self.contents.length();
        let mut keys1 = vector[];
        let mut keys2 = vector[];
        while (i < n) {
            let entry = self.contents.borrow(i);
            keys1.push_back(entry.key1);
            keys2.push_back(entry.key2);
            i = i + 1;
        };
        (keys1, keys2)
    }

    // Find the index of `key` in `self`. Return `None` if `key` is not in `self`.
    // Note that map entries are stored in insertion order, *not* sorted by key.
    public fun get_idx_opt<K1: copy + drop, K2: copy + drop , V: copy + drop>(self: &StorageDoubleMap<K1, K2, V>, key1: &K1, key2: &K2): Option<u64> {
        let mut i = 0;
        let n = size(self);
        while (i < n) {
            if (&self.contents[i].key1 == key1 && &self.contents[i].key2 == key2) {
                return option::some(i)
            };
            i = i + 1;
        };
        option::none()
    }

    // Find the index of `key` in `self`. Aborts if `key` is not in `self`.
    // Note that map entries are stored in insertion order, *not* sorted by key.
    public fun get_idx<K1: copy + drop, K2: copy + drop , V: copy + drop>(self: &StorageDoubleMap<K1, K2, V>, key1: &K1, key2: &K2): u64 {
        let idx_opt = self.get_idx_opt(key1, key2);
        assert!(idx_opt.is_some(), EKeyDoesNotExist);
        idx_opt.destroy_some()
    }

    // Return a reference to the `idx`th entry of `self`. This gives direct access into the backing array of the map--use with caution.
    // Note that map entries are stored in insertion order, *not* sorted by key.
    // Aborts if `idx` is greater than or equal to `size(self)`
    public fun get_entry_by_idx<K1: copy + drop, K2: copy + drop , V: copy + drop>(self: &StorageDoubleMap<K1, K2, V>, idx: u64): (&K1, &K2, &V) {
        assert!(idx < size(self), EIndexOutOfBounds);
        let entry = &self.contents[idx];
        (&entry.key1, &entry.key2, &entry.value)
    }

    // Return a mutable reference to the `idx`th entry of `self`. This gives direct access into the backing array of the map--use with caution.
    // Note that map entries are stored in insertion order, *not* sorted by key.
    // Aborts if `idx` is greater than or equal to `size(self)`
    public fun get_entry_by_idx_mut<K1: copy + drop, K2: copy + drop , V: copy + drop>(self: &mut StorageDoubleMap<K1, K2, V>, idx: u64): (&K1, &K2, &mut V) {
        assert!(idx < size(self), EIndexOutOfBounds);
        let entry = &mut self.contents[idx];
        (&entry.key1, &entry.key2, &mut entry.value)
    }

    // Remove the entry at index `idx` from self.
    // Aborts if `idx` is greater than or equal to `size(self)`
    public fun remove_entry_by_idx<K1: copy + drop, K2: copy + drop , V: copy + drop>(self: &mut StorageDoubleMap<K1, K2, V>, idx: u64): (K1, K2, V) {
        assert!(idx < size(self), EIndexOutOfBounds);
        let Entry { key1, key2, value } = self.contents.remove(idx);
        (key1, key2, value)
    }
}