import { ObeliskConfig } from "@0xobelisk/common";

export const obeliskConfig = {
    name: "counter",
    description: "counter",
    systems: [
        "counter_system",
    ],
    schemas: {
        counter: {
            singleton: true,
            valueSchema: "u64",
            init: 0
        },
    }
} as ObeliskConfig;
