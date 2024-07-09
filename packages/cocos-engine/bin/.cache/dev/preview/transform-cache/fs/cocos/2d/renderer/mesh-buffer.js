System.register("q-bundled:///fs/cocos/2d/renderer/mesh-buffer.js", ["../../../../virtual/internal%253Aconstants.js", "../../gfx/index.js", "./vertex-format.js", "../../core/index.js", "./native-2d.js"], function (_export, _context) {
  "use strict";

  var JSB, BufferUsageBit, MemoryUsageBit, BufferInfo, InputAssemblerInfo, getAttributeStride, sys, getError, warnID, assertIsTrue, NativeUIMeshBuffer, MeshBufferSharedBufferView, IA_POOL_USED_SCALE, MeshBuffer;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2019-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
    setters: [function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_gfxIndexJs) {
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
      BufferInfo = _gfxIndexJs.BufferInfo;
      InputAssemblerInfo = _gfxIndexJs.InputAssemblerInfo;
    }, function (_vertexFormatJs) {
      getAttributeStride = _vertexFormatJs.getAttributeStride;
    }, function (_coreIndexJs) {
      sys = _coreIndexJs.sys;
      getError = _coreIndexJs.getError;
      warnID = _coreIndexJs.warnID;
      assertIsTrue = _coreIndexJs.assertIsTrue;
    }, function (_native2dJs) {
      NativeUIMeshBuffer = _native2dJs.NativeUIMeshBuffer;
    }],
    execute: function () {
      (function (MeshBufferSharedBufferView) {
        MeshBufferSharedBufferView[MeshBufferSharedBufferView["byteOffset"] = 0] = "byteOffset";
        MeshBufferSharedBufferView[MeshBufferSharedBufferView["vertexOffset"] = 1] = "vertexOffset";
        MeshBufferSharedBufferView[MeshBufferSharedBufferView["indexOffset"] = 2] = "indexOffset";
        MeshBufferSharedBufferView[MeshBufferSharedBufferView["dirty"] = 3] = "dirty";
        MeshBufferSharedBufferView[MeshBufferSharedBufferView["count"] = 4] = "count";
      })(MeshBufferSharedBufferView || (MeshBufferSharedBufferView = {}));
      IA_POOL_USED_SCALE = 1 / 2;
      /**
       * @en Mesh buffer used for 2d rendering, used internally and not of concern to the user.
       * @zh 2d 渲染使用的网格缓冲数据，内部使用，用户不须关心。
       * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
       */
      _export("MeshBuffer", MeshBuffer = /*#__PURE__*/function () {
        var _proto = MeshBuffer.prototype;
        /**
         * @en Initial native shared buffer.
         * @zh 初始化原生共享缓冲。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        _proto.initSharedBuffer = function initSharedBuffer() {
          if (JSB) {
            this._sharedBuffer = new Uint32Array(MeshBufferSharedBufferView.count);
          }
        }

        /**
         * @en Synchronized native shared buffer.
         * @zh 同步原生共享缓冲。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.syncSharedBufferToNative = function syncSharedBufferToNative() {
          if (JSB) {
            this._nativeObj.syncSharedBufferToNative(this._sharedBuffer);
          }
        };
        function MeshBuffer() {
          this._byteOffset = 0;
          this._vertexOffset = 0;
          this._indexOffset = 0;
          this._dirty = false;
          this._floatsPerVertex = 0;
          this._vData = null;
          this._iData = null;
          this._vertexFormatBytes = 0;
          this._initVDataCount = 0;
          this._initIDataCount = 0;
          this._attributes = null;
          // InputAssembler pools for each mesh buffer, array offset correspondent
          this._iaPool = [];
          this._iaInfo = null;
          this._nextFreeIAHandle = 0;
          if (JSB) {
            this._nativeObj = new NativeUIMeshBuffer();
          }
          this.initSharedBuffer();
          this.syncSharedBufferToNative();
        }

        /**
         * @en Initialize mesh buffer.
         * @zh 初始化对象。
         * @param device @en The GFX device. @zh GFX设备。
         * @param attrs @en The vertex attributes of the buffer. @zh 缓冲区的顶点属性。
         * @param vFloatCount @en The vertexes float count. @zh 每顶点所需的 float 数量。
         * @param iCount @en The indices count. @zh 索引数量。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        _proto.initialize = function initialize(device, attrs, vFloatCount, iCount) {
          this._initVDataCount = vFloatCount;
          this._initIDataCount = iCount;
          this._attributes = attrs;
          this.floatsPerVertex = getAttributeStride(attrs) >> 2;
          assertIsTrue(this._initVDataCount / this._floatsPerVertex < 65536, getError(9005));
          if (!this.vData || !this.iData) {
            this.vData = new Float32Array(this._initVDataCount);
            this.iData = new Uint16Array(this._initIDataCount);
          }
          // Initialize the first ia
          this._iaPool.push(this.createNewIA(device));
          if (JSB) {
            this._nativeObj.initialize(attrs);
          }
        }

        /**
         * @en Reset state.
         * @zh 重置状态。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.reset = function reset() {
          this._nextFreeIAHandle = 0;
          this.dirty = false;
        };
        _proto.destroy = function destroy() {
          this.reset();
          this._attributes = null;
          this._iaInfo = null;
          this.vData = null;
          this.iData = null;

          // Destroy InputAssemblers
          for (var i = 0; i < this._iaPool.length; ++i) {
            var iaRef = this._iaPool[i];
            if (iaRef.vertexBuffers[0]) {
              iaRef.vertexBuffers[0].destroy();
            }
            if (iaRef.indexBuffer) {
              iaRef.indexBuffer.destroy();
            }
            iaRef.ia.destroy();
          }
          this._iaPool.length = 0;
        }

        /**
         * @en Set dirty flag.
         * @zh 设置脏标签。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.setDirty = function setDirty() {
          this.dirty = true;
        }

        /**
         * @deprecated since v3.4.0, please use BufferAccessor's request
         * @see [[BufferAccessor.request]]
         */;
        _proto.request = function request(vertexCount, indexCount) {
          warnID(9002);
          return false;
        }

        /**
         * @en require Free input assembler.
         * @zh 请求可用的输入汇集器。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.requireFreeIA = function requireFreeIA(device) {
          if (this._iaPool.length <= this._nextFreeIAHandle) {
            this._iaPool.push(this.createNewIA(device));
          }
          var ia = this._iaPool[this._nextFreeIAHandle++].ia;
          return ia;
        }

        /**
         * @en recycle input assembler.
         * @zh 回收输入汇集器。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.recycleIA = function recycleIA(ia) {
          var pool = this._iaPool;
          for (var i = 0; i < this._nextFreeIAHandle; ++i) {
            if (ia === pool[i].ia) {
              // Swap to recycle the ia
              var iaRef = pool[i];
              pool[i] = pool[--this._nextFreeIAHandle];
              pool[this._nextFreeIAHandle] = iaRef;
              return;
            }
          }
        }

        /**
         * @en check capacity.
         * @zh 检查可分配余量。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.checkCapacity = function checkCapacity(vertexCount, indexCount) {
          var maxVertex = (this.vertexOffset + vertexCount) * this._floatsPerVertex;
          var maxIndex = this.indexOffset + indexCount;
          if (maxVertex > this._initVDataCount || maxIndex > this._initIDataCount) {
            return false;
          }
          return true;
        }

        /**
         * @en Upload and update buffers data.
         * @zh 上传更新缓冲内容。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.uploadBuffers = function uploadBuffers() {
          if (this.byteOffset === 0 || !this._dirty) {
            return;
          }

          // On iOS14, different IAs can not share same GPU buffer, so must submit the same date to different buffers
          var iOS14 = sys.__isWebIOS14OrIPadOS14Env;
          var submitCount = iOS14 ? this._nextFreeIAHandle : 1;
          if (iOS14 && submitCount / this._iaPool.length < IA_POOL_USED_SCALE) {
            var count = submitCount / IA_POOL_USED_SCALE;
            var length = this._iaPool.length;
            // Destroy InputAssemblers
            for (var i = length - 1; i >= count; i--) {
              var iaRef = this._iaPool[i];
              if (iaRef.vertexBuffers[0]) {
                iaRef.vertexBuffers[0].destroy();
              }
              if (iaRef.indexBuffer) {
                iaRef.indexBuffer.destroy();
              }
              iaRef.ia.destroy();
            }
            this._iaPool.length = count;
          }
          var byteCount = this.byteOffset;
          var indexCount = this.indexOffset;
          for (var _i = 0; _i < submitCount; ++_i) {
            var _iaRef = this._iaPool[_i];
            var verticesData = new Float32Array(this.vData.buffer, 0, byteCount >> 2);
            var indicesData = new Uint16Array(this.iData.buffer, 0, indexCount);
            var vertexBuffer = _iaRef.vertexBuffers[0];
            if (byteCount > vertexBuffer.size) {
              vertexBuffer.resize(byteCount);
            }
            vertexBuffer.update(verticesData);
            if (indexCount * 2 > _iaRef.indexBuffer.size) {
              _iaRef.indexBuffer.resize(indexCount * 2);
            }
            _iaRef.indexBuffer.update(indicesData);
          }
          this.dirty = false;
        };
        _proto.createNewIA = function createNewIA(device) {
          var ia;
          var vertexBuffers;
          var indexBuffer;
          // HACK: After sharing buffer between drawcalls, the performance degradation a lots on iOS 14 or iPad OS 14 device
          // TODO: Maybe it can be removed after Apple fixes it?
          if (sys.__isWebIOS14OrIPadOS14Env || !this._iaPool[0]) {
            var vbStride = this._vertexFormatBytes = this._floatsPerVertex * Float32Array.BYTES_PER_ELEMENT;
            var ibStride = Uint16Array.BYTES_PER_ELEMENT;
            var vertexBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, vbStride, vbStride));
            indexBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, ibStride, ibStride));
            vertexBuffers = [vertexBuffer];
            // Reuse purpose for new IAs
            this._iaInfo = new InputAssemblerInfo(this._attributes, vertexBuffers, indexBuffer);
            ia = device.createInputAssembler(this._iaInfo);
          } else {
            ia = device.createInputAssembler(this._iaInfo);
            vertexBuffers = this._iaInfo.vertexBuffers;
            indexBuffer = this._iaInfo.indexBuffer;
          }
          return {
            ia: ia,
            vertexBuffers: vertexBuffers,
            indexBuffer: indexBuffer
          };
        };
        _createClass(MeshBuffer, [{
          key: "attributes",
          get:
          /**
           * @en The vertex attributes of the buffer.
           * @zh buffer 的顶点属性。
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
          function get() {
            return this._attributes;
          }
          /**
           * @en Number of bytes in vertex format.
           * @zh 顶点格式的字节数。
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
        }, {
          key: "vertexFormatBytes",
          get: function get() {
            return this._vertexFormatBytes;
          }
        }, {
          key: "byteOffset",
          get:
          /**
           * @en byte offset.
           * @zh 字节偏移量。
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
          function get() {
            return this._byteOffset;
          },
          set: function set(val) {
            this._byteOffset = val;
            if (JSB) {
              this._sharedBuffer[MeshBufferSharedBufferView.byteOffset] = val;
            }
          }
        }, {
          key: "vertexOffset",
          get:
          /**
           * @en Vertexes offset.
           * @zh 顶点数偏移。
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
          function get() {
            return this._vertexOffset;
          },
          set: function set(val) {
            this._vertexOffset = val;
            if (JSB) {
              this._sharedBuffer[MeshBufferSharedBufferView.vertexOffset] = val;
            }
          }
        }, {
          key: "indexOffset",
          get:
          /**
           * @en Indices offset.
           * @zh 索引偏移。
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
          function get() {
            return this._indexOffset;
          },
          set: function set(val) {
            this._indexOffset = val;
            if (JSB) {
              this._sharedBuffer[MeshBufferSharedBufferView.indexOffset] = val;
            }
          }
        }, {
          key: "dirty",
          get:
          /**
           * @en Dirty flag.
           * @zh 脏标记。
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
          function get() {
            return this._dirty;
          },
          set: function set(val) {
            this._dirty = val;
            if (JSB) {
              this._sharedBuffer[MeshBufferSharedBufferView.dirty] = val ? 1 : 0;
            }
          }
        }, {
          key: "floatsPerVertex",
          get:
          /**
           * @en Float numbers per vertex.
           * @zh 每顶点的浮点数长度。
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
          function get() {
            return this._floatsPerVertex;
          },
          set: function set(val) {
            this._floatsPerVertex = val;
          }
        }, {
          key: "vData",
          get:
          /**
           * @en Vertexes data.
           * @zh 顶点数据。
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
          function get() {
            return this._vData;
          },
          set: function set(val) {
            this._vData = val;
            //还得看是否需要共享.buffer
            if (JSB) {
              this._nativeObj.vData = val;
            }
          }
        }, {
          key: "iData",
          get:
          /**
           * @en Indices data.
           * @zh 索引数据。
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
          function get() {
            return this._iData;
          },
          set: function set(val) {
            this._iData = val;
            if (JSB) {
              this._nativeObj.iData = val;
            }
          }
        }, {
          key: "nativeObj",
          get:
          //nativeObj

          /**
           * @en Native object.
           * @zh 原生对象。
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
          function get() {
            return this._nativeObj;
          }

          //sharedBuffer
        }, {
          key: "sharedBuffer",
          get:
          /**
           * @en Native shared buffer.
           * @zh 原生共享缓冲。
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
          function get() {
            return this._sharedBuffer;
          }
        }]);
        return MeshBuffer;
      }());
    }
  };
});