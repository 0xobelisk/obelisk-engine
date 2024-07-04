System.register(['./index-ce98320e.js'], (function (exports) {
    'use strict';
    var ScalableContainer;
    return {
        setters: [function (module) {
            ScalableContainer = module.cf;
        }],
        execute: (function () {

            class CachedArray extends ScalableContainer {
              constructor(length, compareFn) {
                super();
                this.array = void 0;
                this.length = 0;
                this._compareFn = void 0;
                this._initSize = 0;
                this.array = new Array(length);
                this._initSize = length;
                this.length = 0;
                this._compareFn = compareFn;
              }
              push(item) {
                this.array[this.length++] = item;
              }
              pop() {
                return this.array[--this.length];
              }
              get(idx) {
                return this.array[idx];
              }
              clear() {
                this.length = 0;
              }
              destroy() {
                this.length = 0;
                this.array.length = 0;
                super.destroy();
              }
              tryShrink() {
                if (this.array.length >> 2 > this.length) {
                  this.array.length = Math.max(this._initSize, this.array.length >> 1);
                }
              }
              sort() {
                this.array.length = this.length;
                this.array.sort(this._compareFn);
              }
              concat(array) {
                for (let i = 0; i < array.length; ++i) {
                  this.array[this.length++] = array[i];
                }
              }
              fastRemove(idx) {
                if (idx >= this.length || idx < 0) {
                  return;
                }
                const last = --this.length;
                this.array[idx] = this.array[last];
              }
              indexOf(val) {
                for (let i = 0, len = this.length; i < len; ++i) {
                  if (this.array[i] === val) {
                    return i;
                  }
                }
                return -1;
              }
            } exports('C', CachedArray);

        })
    };
}));
