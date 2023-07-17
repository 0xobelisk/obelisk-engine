#[test_only]
module eps::world_test {
    use sui::test_scenario::{
    Scenario, next_tx, begin, end, ctx, take_shared,
    return_shared, take_from_sender, return_to_sender
    };

    // utilities
    fun scenario(): Scenario { begin(@0x1) }

    #[test]
    fun test_init() {
        let scenario = scenario();
        test_init_(&mut scenario);
        end(scenario);
    }

    fun test_init_(test: &mut Scenario) {
        let admin = @0xaaa;
        let beneficiary = @0xbbb;

        // next_tx(test, admin);
        // {
        //     init_for_testing(beneficiary, ctx(test));
        // };
    }
}
