System.register(['./physics-enum-187e99c4.js'], (function (exports) {
    'use strict';
    var PhysicsGroup;
    return {
        setters: [function (module) {
            PhysicsGroup = module.P;
        }],
        execute: (function () {

            class CollisionMatrix {
              constructor(strategy) {
                if (strategy === 1) {
                  const self = this;
                  for (let i = 0; i < 32; i++) {
                    const key = `_${1 << i}`;
                    self[key] = 0;
                    self.updateArray = [];
                    Object.defineProperty(self, 1 << i, {
                      get() {
                        return this[key];
                      },
                      set(v) {
                        if (this[key] !== v) {
                          this[key] = v;
                          if (this.updateArray.indexOf(i) < 0) {
                            this.updateArray.push(i);
                          }
                        }
                      }
                    });
                  }
                  this['_1'] = PhysicsGroup.DEFAULT;
                } else {
                  for (let i = 0; i < 32; i++) {
                    const key = 1 << i;
                    this[`${key}`] = 0;
                  }
                  this['1'] = PhysicsGroup.DEFAULT;
                }
              }
            } exports('C', CollisionMatrix);

        })
    };
}));
