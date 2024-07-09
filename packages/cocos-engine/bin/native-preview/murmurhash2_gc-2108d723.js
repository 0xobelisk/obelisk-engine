System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports('m', murmurhash2_32_gc);

            const getUint8ForString = String.prototype.charCodeAt;
            function getUint8ForArray(idx) {
              return this[idx];
            }
            function murmurhash2_32_gc(input, seed) {
              let l = input.length;
              let h = seed ^ l;
              let i = 0;
              const getUint8 = typeof input === 'string' ? getUint8ForString : getUint8ForArray;
              while (l >= 4) {
                let k = getUint8.call(input, i) & 0xff | (getUint8.call(input, ++i) & 0xff) << 8 | (getUint8.call(input, ++i) & 0xff) << 16 | (getUint8.call(input, ++i) & 0xff) << 24;
                k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
                k ^= k >>> 24;
                k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
                h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
                l -= 4;
                ++i;
              }
              switch (l) {
                case 3:
                  h ^= (getUint8.call(input, i + 2) & 0xff) << 16;
                case 2:
                  h ^= (getUint8.call(input, i + 1) & 0xff) << 8;
                case 1:
                  h ^= getUint8.call(input, i) & 0xff;
                  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
                  break;
              }
              h ^= h >>> 13;
              h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
              h ^= h >>> 15;
              return h >>> 0;
            }

        })
    };
}));
