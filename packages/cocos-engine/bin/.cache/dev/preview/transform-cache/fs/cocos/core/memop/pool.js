System.register("q-bundled:///fs/cocos/core/memop/pool.js", ["../platform/debug.js", "./scalable-container.js"], function (_export, _context) {
  "use strict";

  var warnID, ScalableContainer, Pool;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
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
  return {
    setters: [function (_platformDebugJs) {
      warnID = _platformDebugJs.warnID;
    }, function (_scalableContainerJs) {
      ScalableContainer = _scalableContainerJs.ScalableContainer;
    }],
    execute: function () {
      /**
       * @en Typed object pool.
       * It's a traditional design, you can get elements out of the pool or recycle elements by putting back into the pool.
       * @zh 支持类型的对象池。这是一个传统设计的对象池，你可以从对象池中取出对象或是放回不再需要对象来复用。
       * @see [[RecyclePool]]
       */
      _export("Pool", Pool = /*#__PURE__*/function (_ScalableContainer) {
        _inheritsLoose(Pool, _ScalableContainer);
        /**
         * @en Constructor with the allocator of elements and initial pool size.
         * @zh 使用元素的构造器和初始大小的构造函数。
         * @param ctor @en The allocator of elements in pool, it's invoked directly without `new` in Pool.
         * @zh 元素的构造器，Pool 内部使用该构造器直接创建实例。
         * @param elementsPerBatch @en Initial pool size, this size will also be the incremental size when
         * the pool is overloaded.
         * @zh 对象池的初始大小。当对象池扩容时，也会使用该值。
         * @param dtor @en The finalizer of element, it's invoked when this Pool is destroyed or shrunk if
         * it is valid.
         * @zh 元素的析构器。如果存在的话，当对象池销毁或者缩容时，会使用该析构器。
         */
        function Pool(ctor, elementsPerBatch, dtor) {
          var _this;
          _this = _ScalableContainer.call(this) || this;
          _this._ctor = void 0;
          _this._elementsPerBatch = void 0;
          _this._nextAvail = void 0;
          _this._freePool = [];
          _this._dtor = void 0;
          _this._ctor = ctor;
          _this._dtor = dtor || null;
          _this._elementsPerBatch = Math.max(elementsPerBatch, 1);
          _this._nextAvail = _this._elementsPerBatch - 1;
          for (var i = 0; i < _this._elementsPerBatch; ++i) {
            _this._freePool.push(ctor());
          }
          return _this;
        }

        /**
         * @en Take an object out of the object pool.
         * @zh 从对象池中取出一个对象。
         * @returns @en An object ready for use. This function always returns an object.
         * @zh 该函数总是返回一个可用的对象。
         */
        var _proto = Pool.prototype;
        _proto.alloc = function alloc() {
          if (this._nextAvail < 0) {
            this._freePool.length = this._elementsPerBatch;
            for (var i = 0; i < this._elementsPerBatch; i++) {
              this._freePool[i] = this._ctor();
            }
            this._nextAvail = this._elementsPerBatch - 1;
          }
          return this._freePool[this._nextAvail--];
        }

        /**
         * @en Put an object back into the object pool.
         * @zh 将一个对象放回对象池中。
         * @param obj @en The object to be put back into the pool.
         * @zh 放回对象池中的对象。
         */;
        _proto.free = function free(obj) {
          this._freePool[++this._nextAvail] = obj;
        }

        /**
         * @en Put multiple objects back into the object pool.
         * @zh 将一组对象放回对象池中。
         * @param objs @en An array of objects to be put back into the pool.
         * @zh 放回对象池中的一组对象。
         */;
        _proto.freeArray = function freeArray(objs) {
          this._freePool.length = this._nextAvail + 1;
          Array.prototype.push.apply(this._freePool, objs);
          this._nextAvail += objs.length;
        }

        /**
         * @en Try to shrink the object pool to reduce memory usage.
         * @zh 尝试缩容对象池，以释放内存。
         */;
        _proto.tryShrink = function tryShrink() {
          if (this._nextAvail >> 1 > this._elementsPerBatch) {
            if (this._dtor) {
              for (var i = this._nextAvail >> 1; i <= this._nextAvail; i++) {
                this._dtor(this._freePool[i]);
              }
            }
            this._freePool.length = this._nextAvail >> 1;
            this._nextAvail = this._freePool.length - 1;
          }
        }

        /**
         * @en Destroy all elements and clear the pool.
         * @zh 释放对象池中所有资源并清空缓存池。
         */;
        _proto.destroy = function destroy() {
          var dtor = arguments.length > 0 ? arguments[0] : null;
          if (dtor) {
            warnID(14100);
          }
          var readDtor = dtor || this._dtor;
          if (readDtor) {
            for (var i = 0; i <= this._nextAvail; i++) {
              readDtor(this._freePool[i]);
            }
          }
          this._freePool.length = 0;
          this._nextAvail = -1;
          _ScalableContainer.prototype.destroy.call(this);
        };
        return Pool;
      }(ScalableContainer));
    }
  };
});