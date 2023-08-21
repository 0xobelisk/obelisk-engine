import { Obelisk } from '../src/obelisk';
import * as process from 'process';
import { NetworkType, ComponentContentType, SuiTxArgument } from "../src/types";
import { TransactionBlock } from "@mysten/sui.js";
import { initialize } from '../src/metadata/index';

type DataItem = [number[], string];

type DataType = "string" | "bool" | "u64";

function formatData(data: DataItem[]): string {
    const formattedData: string[] = [];

    data.forEach(([values, format]) => {
        let formattedValue: string;

        if (format === "0x1::string::String") {
        formattedValue = values.map((num) => String.fromCharCode(num)).join("");
        } else if (format === "bool") {
        formattedValue = values[0] !== 0 ? "true" : "false";
        } else if (format === "u64") {
        const u64Value = new DataView(new ArrayBuffer(8));
        values.forEach((num, index) => u64Value.setUint8(index, num));
        formattedValue = u64Value.getBigUint64(0).toString();
        } else {
        formattedValue = "Unknown Format";
        }

        formattedData.push(formattedValue);
    });

    return formattedData.join("\n");
}

async function init() {
    const network = process.argv[2]
    const packageId = process.argv[3]

    const metadata = await initialize(network as NetworkType, packageId)

    let obelisk = new Obelisk({
        networkType: network as NetworkType,
        packageId: packageId,
        metadata: metadata
        // secretKey: privkey
    })

    let data3 = obelisk.query;
    console.log(data3)

  // let data2 = obelisk.queryt.pet_centre.update_pet_name
  // let data2 = obelisk.queryt
  // console.log(data2)
  //
  //
  // let data3 = obelisk.query;
  // console.log(data3)

    const tx = new TransactionBlock();
    let params = [tx.pure("0x6fa43c68221960f942572905f3c198a5bccaa0700506b3b6bd83dd9b007e6324") as SuiTxArgument, 
    tx.pure("0xbf64721f0961a0426ccde6b8d9343e2cb2c26a105a5c33e57074580fd98b2cb1") as SuiTxArgument,
    tx.pure("0x6") as SuiTxArgument] as SuiTxArgument[]
    let res1 = await obelisk.query.pet_system.get_pet_basic_info(tx, params);
    console.log(JSON.stringify(res1.results![0].returnValues))

    const input: DataItem[] = [
    [[7, 66, 97, 111, 76, 111, 110, 103], "0x1::string::String"],
    [[0], "bool"],
    [[157, 136, 137, 14, 138, 1, 0, 0], "u64"],
    [[11, 129, 14, 11, 0, 0, 0, 0], "u64"],
    ];

    const formattedOutput: string = formatData(input);
    console.log(formattedOutput);
    // console.log(obelisk.contractFactory.metadata)

  // console.log(obelisk.contractFactory.metadata)

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

init();
