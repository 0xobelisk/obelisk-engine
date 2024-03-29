import { ObeliskConfig } from '@0xobelisk/aptos-common';

export const obeliskConfig = {
  name: 'counter',
  description: 'counter',
  systems: ['counter_system'],
  schemas: {
    counter: {
      valueType: 'u64',
      defaultValue: 0,
    },
  },
} as ObeliskConfig;
