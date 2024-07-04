System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            class ArrayCollisionMatrix {
              constructor() {
                this.matrix = [];
              }
              get(i, j) {
                if (j > i) {
                  const temp = j;
                  j = i;
                  i = temp;
                }
                return this.matrix[(i * (i + 1) >> 1) + j - 1];
              }
              set(i, j, value) {
                if (j > i) {
                  const temp = j;
                  j = i;
                  i = temp;
                }
                this.matrix[(i * (i + 1) >> 1) + j - 1] = value ? 1 : 0;
              }
              reset() {
                this.matrix.length = 0;
              }
              setNumObjects(n) {
                this.matrix.length = n * (n - 1) >> 1;
              }
            } exports('A', ArrayCollisionMatrix);

        })
    };
}));
