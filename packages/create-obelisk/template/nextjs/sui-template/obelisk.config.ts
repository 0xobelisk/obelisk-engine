import { ObeliskConfig } from '@0xobelisk/sui-common';

export const obeliskConfig = {
  name: 'counter',
  description: 'counter',
  systems: ['counter'],
  schemas: {
    counter: {
      structure: {
        value: "StorageValue<u32>"
      }
    },
  },
} as ObeliskConfig;
