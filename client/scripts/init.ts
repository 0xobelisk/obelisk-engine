import { Obelisk } from "../src/obelisk";
import * as process from 'process';
import { NetworkType, ComponentContentType } from "../src/types";
import { TransactionBlock } from "@mysten/sui.js";

async function init() {
    const network = process.argv[2]
    const packageId = process.argv[3]
    console.log(network)
    console.log(packageId)
    // console.log(contract)
    // 0x80d7de9c4a56194087e0ba0bf59492aa8e6a5ee881606226930827085ddf2332
    // const privkey = 'c71a1529d774a80d521e02953ce656f1b1cef126451daacaebec763f8dd0b535'

    let obelisk = new Obelisk({
        networkType: network as NetworkType,
        packageId: packageId,
        // secretKey: privkey
    })
    await obelisk.initialize()
    const tx = new TransactionBlock();
    
    // let data2 = obelisk.query.pet_centre.update_pet_name(
    //     'hello', 'world', [tx.pure("0x6")]
    // );

    let data2 = obelisk.query.pet_centre.update_pet_name
    console.log(data2)

    // let data = obelisk.contractFactory.getAllFunc();
    // // console.log(data)

    // console.log('---------- getWorld')
    // let res = await obelisk.getWorld("0x17d08944903f2b9c0069872a895ee8a12c800e00c948e030138612e1e13cee4d")
    // console.log(JSON.stringify(res))

    // console.log('---------- getAllEntities')
    // const worldId = "0x17d08944903f2b9c0069872a895ee8a12c800e00c948e030138612e1e13cee4d"
    // let res1 = await obelisk.getAllEntities(worldId)
    // // console.log(res1)
    // res1.data.map((res) => {
    //     console.log(res.name)
    // })

    // console.log('---------- getEntity')
    // const entityId = "0xe881e7b52de6374ea3bb33c9b720102e9166786013f2d374395e12fce1d9a800"
    // let res2 = await obelisk.getEntity(worldId, entityId)
    // console.log(JSON.stringify(res2))

    // console.log('---------- getEntityComponents')
    // let comp = await obelisk.getEntityComponents(worldId, entityId);
    // console.log(JSON.stringify(comp))

    // console.log('---------- getBirthTime')
    // const birthTimeId = "0x1b204289500b7e7a2c0d2f10838fd8471c587e8ecee24661652d1df18b061685"
    // const sender = "0x1804b821bba181110599b8757008eabe6f89f62774d7fafb5ee666ac742a41f8"
    // let time = await obelisk.getBirthTime(birthTimeId);
    // console.log(JSON.stringify(time))

      // target: `::status_system::get_pet_state`,

}

init()
