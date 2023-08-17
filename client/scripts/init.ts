import { Obelisk } from "../src/obelisk";
import * as process from 'process';
import * as fs from 'fs';
import { NetworkType } from "../src/types";

async function init() {
    const network = process.argv[2]
    const packageId = process.argv[3]
    console.log(network)
    console.log(packageId)
    // console.log(contract)
    // 0x80d7de9c4a56194087e0ba0bf59492aa8e6a5ee881606226930827085ddf2332
    let obelisk = new Obelisk({
        networkType: network as NetworkType,
        packageId: packageId
    })
    await obelisk.initialize()
    let data = obelisk.contractFactory.getAllFunc();
    // console.log(data)

    let res = await obelisk.getWorld("0x17d08944903f2b9c0069872a895ee8a12c800e00c948e030138612e1e13cee4d")
    console.log(res)

    const worldId = "0x17d08944903f2b9c0069872a895ee8a12c800e00c948e030138612e1e13cee4d"
    let res1 = await obelisk.getAllEntities(worldId)
    // console.log(res1)
    res1.data.map((res) => {
        console.log(res.name)
    })
    console.log("-------")
    let res2 = await obelisk.getEntity(worldId, "0x18a30bb15a06ed85ee97b006543c7e10fc722aa8ea1d25e1f262b3278b5f2657")
    console.log(res2)

    console.log("==================")
    let res3 = await obelisk.getObject("0x18a30bb15a06ed85ee97b006543c7e10fc722aa8ea1d25e1f262b3278b5f2657");
    console.log(res3)
    console.log("----------- 1")
    let comps = await obelisk.getEntityComponents("0xe881e7b52de6374ea3bb33c9b720102e9166786013f2d374395e12fce1d9a800");
    console.log(comps)

    console.log("----------- 2")

    // let comp = await obelisk.getEntityComponents("0x18a30bb15a06ed85ee97b006543c7e10fc722aa8ea1d25e1f262b3278b5f2657");
    // console.log(comp)
}

init()