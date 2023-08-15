import { Obelisk } from "../src/obelisk";
import * as process from 'process';
import * as fs from 'fs';
import { SuiMoveNormalizedType } from "@mysten/sui.js"
import { NetworkType, SuiMoveMoudleValueType } from "../src/types";

import {
    SuiMoveNormalizedModules,
  } from '@mysten/sui.js';
async function getMoudleFunc() {
    const network = process.argv[2]
    let obelist = new Obelisk({
        networkType: network as NetworkType,
    })

    let jsonData = await obelist.getWorldConfig() as SuiMoveNormalizedModules;
    // console.log(jsonData)

    Object.values(jsonData).forEach(value => {
        let data = value as SuiMoveMoudleValueType;
        console.log(`moudle name: ${data.name}`)
        // console.log(data.exposedFunctions)
        Object.entries(data.exposedFunctions).forEach(([key, value]) => {
            console.log(`func name: ${key}`)
            Object.values(value.parameters).forEach(values => {
                console.log(values)
            })
        });
    });
}

getMoudleFunc()