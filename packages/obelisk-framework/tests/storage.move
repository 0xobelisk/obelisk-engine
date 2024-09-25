#[test_only]
module obelisk::storage_tests {
    use obelisk::storage_immutable_value::StorageImmutableValue;
    use obelisk::storage_immutable_value;
    use sui::test_scenario;
    use sui::transfer::public_share_object;
    use obelisk::storage_value;
    use obelisk::storage_value::StorageValue;

    public struct TestValue has drop, copy, store {
        value: u64,
    }

    public struct TestStoreValue has store {
        value: u64,
    }

    /// Destroy a TestStoreValue`.
    public fun destroy_value(value: TestStoreValue) {
        let TestStoreValue { value: _ } = value;
    }

    public struct TestObject has key, store {
        id: UID,
        value: StorageValue<TestValue>,
        immutable_value: StorageImmutableValue<TestStoreValue>,
    }

    public fun value(self: &mut TestObject): &mut StorageValue<TestValue> {
        &mut self.value
    }

    #[test]
    public fun test_value() {
        let mut scenario = test_scenario::begin(@0x0001);
        let ctx = test_scenario::ctx(&mut scenario);
       let mut storage_value = storage_value::empty<TestValue>();
        storage_value.set(TestValue { value: 1 });
        assert!(storage_value.contains());
        assert!(!storage_value.is_empty());
        assert!(storage_value.get() == TestValue { value: 1 });

        let mut storage_immutable_value = storage_immutable_value::new<TestStoreValue>(ctx);
        storage_immutable_value.add(TestStoreValue { value: 1 });
        assert!(storage_immutable_value.contains());
        assert!(!storage_immutable_value.is_empty());
        assert!(storage_immutable_value.borrow().value == 1);

        storage_immutable_value.borrow_mut().value = 2;
        assert!(storage_immutable_value.borrow().value == 2);

        public_share_object(TestObject {
            id: object::new(ctx),
            value: storage_value,
            immutable_value: storage_immutable_value,
        });

        scenario.end();
    }

    // #[test]
    // public fun test_object() {
    //     let sender = @0x0001;
    //     let mut scenario_val = test_scenario::begin(sender);
    //     let scenario = &mut scenario_val;
    //
    //     let obj = TestObject {
    //         id: object::new(test_scenario::ctx(scenario)),
    //         value: storage_value::empty(),
    //     };
    //     public_share_object(obj);
    //
    //     test_scenario::next_tx(scenario, sender);
    //
    //     let mut obj = test_scenario::take_shared<TestObject>(scenario);
    //
    //     obj.value.set(TestValue { value: 1 });
    //     assert!(obj.value.contains());
    //     assert!(!obj.value.is_empty());
    //     assert!(obj.value.get() == TestValue { value: 1 });
    //
    //     obj.value.set(TestValue { value: 2 });
    //     assert!(obj.value.contains());
    //     assert!(!obj.value.is_empty());
    //     assert!(obj.value.get() == TestValue { value: 2 });
    //
    //     test_scenario::return_shared<TestObject>(obj);
    //     test_scenario::end(scenario_val);
    // }
}