// module examples::obk_system {
//     use sui::tx_context::TxContext;
//     use sui::coin;
//     use std::option;
//     use sui::url;
//     use sui::tx_context;
//     use sui::transfer;
//     use sui::coin::{TreasuryCap, Coin};
//
//     const SYMBOL: vector<u8> = b"OBK";
//     const NAME: vector<u8> = b"Dubhe Coin";
//     const DESCRIPTION: vector<u8> = b"Dubhe Coin";
//     const ICON_URL: vector<u8> = b"https://avatars.githubusercontent.com/u/136115432?s=200&v=4";
//     const DECIMALS: u8 = 8;
//     // 10e
//     const MAX_SUPPLY: u64 = 1000000000 * 100000000;
//
//     struct OBK_SYSTEM has drop {}
//
//     fun init(witness: OBK_SYSTEM, ctx: &mut TxContext) {
//         // Get a treasury cap for the coin and give it to the transaction sender
//         let (treasury_cap, metadata) = coin::create_currency<OBK_SYSTEM>(
//             witness,
//             DECIMALS,
//             SYMBOL,
//             NAME,
//             DESCRIPTION,
//             option::some(url::new_unsafe_from_bytes(ICON_URL)),
//             ctx
//         );
//
//         let receiver = tx_context::sender(ctx);
//
//         coin::mint_and_transfer(&mut treasury_cap, MAX_SUPPLY, receiver, ctx);
//
//         transfer::public_freeze_object(metadata);
//         transfer::public_transfer(treasury_cap, receiver)
//     }
//
//     /// Manager can mint new coins
//     public entry fun mint(
//         treasury_cap: &mut TreasuryCap<OBK_SYSTEM>, amount: u64, recipient: address, ctx: &mut TxContext
//     ) {
//         coin::mint_and_transfer(treasury_cap, amount, recipient, ctx)
//     }
//
//     /// Manager can burn coins
//     public entry fun burn(treasury_cap: &mut TreasuryCap<OBK_SYSTEM>, coin: Coin<OBK_SYSTEM>) {
//         coin::burn(treasury_cap, coin);
//     }
//
//     #[test_only]
//     public fun test_init(ctx: &mut TxContext) {
//         init(OBK_SYSTEM {}, ctx)
//     }
// }