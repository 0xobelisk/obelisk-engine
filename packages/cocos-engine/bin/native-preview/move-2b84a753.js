System.register(['./index-ce98320e.js'], (function (exports) {
    'use strict';
    var assertsArrayIndex;
    return {
        setters: [function (module) {
            assertsArrayIndex = module.bv;
        }],
        execute: (function () {

            exports('s', shift);

            function shift(array, first, last) {
              assertsArrayIndex(array, first);
              assertsArrayIndex(array, last);
              if (first === last) {
                return array;
              }
              const element = array[first];
              if (first < last) {
                for (let iElement = first + 1; iElement <= last; ++iElement) {
                  array[iElement - 1] = array[iElement];
                }
              } else {
                for (let iElement = first; iElement !== last; --iElement) {
                  array[iElement] = array[iElement - 1];
                }
              }
              array[last] = element;
              return array;
            }

        })
    };
}));
