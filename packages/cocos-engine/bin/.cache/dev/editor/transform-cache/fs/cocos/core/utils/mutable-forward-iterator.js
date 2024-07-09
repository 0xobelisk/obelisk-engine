System.register("q-bundled:///fs/cocos/core/utils/mutable-forward-iterator.js", [], function (_export, _context) {
  "use strict";

  var MutableForwardIterator;
  _export("default", void 0);
  return {
    setters: [],
    execute: function () {
      /*
       Copyright (c) 2013-2016 Chukong Technologies Inc.
       Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
      
       https://www.cocos.com/
      
       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated documentation files (the "Software"), to deal
       in the Software without restriction, including without limitation the rights to
       use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
       of the Software, and to permit persons to whom the Software is furnished to do so,
       subject to the following conditions:
      
       The above copyright notice and this permission notice shall be included in
       all copies or substantial portions of the Software.
      
       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      /**
       * @example
       * ```
       * import { js } from 'cc';
       * var array = [0, 1, 2, 3, 4];
       * var iterator = new js.array.MutableForwardIterator(array);
       * for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
       *     var item = array[iterator.i];
       *     ...
       * }
       * ```
       * @engineInternal
       */
      _export("default", MutableForwardIterator = class MutableForwardIterator {
        constructor(array) {
          this.i = 0;
          this.array = array;
        }
        get length() {
          return this.array.length;
        }
        set length(value) {
          this.array.length = value;
          if (this.i >= value) {
            this.i = value - 1;
          }
        }
        remove(value) {
          const index = this.array.indexOf(value);
          if (index >= 0) {
            this.removeAt(index);
          }
        }
        removeAt(i) {
          this.array.splice(i, 1);
          if (i <= this.i) {
            --this.i;
          }
        }
        fastRemove(value) {
          const index = this.array.indexOf(value);
          if (index >= 0) {
            this.fastRemoveAt(index);
          }
        }
        fastRemoveAt(i) {
          const array = this.array;
          array[i] = array[array.length - 1];
          --array.length;
          if (i <= this.i) {
            --this.i;
          }
        }
        push(item) {
          this.array.push(item);
        }
      });
    }
  };
});