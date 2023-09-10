// import {
//     Ed25519Keypair,
//     JsonRpcProvider,
//     RawSigner,
//     TransactionBlock,
//     localnetConnection
// } from '@mysten/sui.js';
//
//
// const keypair = Ed25519Keypair.generate()
// const provider = new JsonRpcProvider();
// const signer = new RawSigner(keypair, provider);
// const tx = new TransactionBlock();
// const user_sui_address = keypair.getPublicKey().toSuiAddress()
// await provider.requestSuiFromFaucet(user_sui_address)
//

// const { Ed25519Keypair,fromB64 } = require("@0xobelisk/client");
import {NetworkType, Obelisk} from "@0xobelisk/client";


const main = async () => {

    const NETWORK: NetworkType = 'testnet';
    const obelisk = new Obelisk({
        secretKey: 'c71a1529d774a80d521e02953ce656f1b1cef126451daacaebec763f8dd0b535',
        networkType: NETWORK,
    });
    // const obeject_id = '0x97706e7066536b8c542c175e77eec801989cca8c3c4c68b80db056c5ca30330f'
    // const result = await obelisk.getObjects([obeject_id])
    // console.log(result[0].objectFields.number)
    const world_id = '0xea07f58052bcdef935a3eee097d41a97bc4a0f0b1b60ff6b18f2caa858609bf8'
    const system_name = 'counter_change'
    const counter =  '0x97706e7066536b8c542c175e77eec801989cca8c3c4c68b80db056c5ca30330f'
    const result= await obelisk.call(world_id,system_name,counter)
    console.log(result)
}

main()
