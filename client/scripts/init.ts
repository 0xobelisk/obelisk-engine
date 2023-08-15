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
}

init()