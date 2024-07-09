System.register("q-bundled:///fs/cocos/2d/renderer/render-data.js", ["../../../../virtual/internal%253Aconstants.js", "../../game/director.js", "../../core/index.js", "./static-vb-accessor.js", "./vertex-format.js", "../../gfx/index.js", "./render-draw-info.js", "./render-entity.js"], function (_export, _context) {
  "use strict";

  var DEBUG, JSB, director, Color, RecyclePool, murmurhash2_32_gc, assert, assertIsTrue, StaticVBAccessor, getAttributeStride, vfmtPosUvColor, BufferInfo, BufferUsageBit, InputAssemblerInfo, MemoryUsageBit, RenderDrawInfo, RenderDrawInfoType, RenderEntityType, DEFAULT_STRIDE, BaseRenderData, RenderData, MeshRenderData;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_gameDirectorJs) {
      director = _gameDirectorJs.director;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      RecyclePool = _coreIndexJs.RecyclePool;
      murmurhash2_32_gc = _coreIndexJs.murmurhash2_32_gc;
      assert = _coreIndexJs.assert;
      assertIsTrue = _coreIndexJs.assertIsTrue;
    }, function (_staticVbAccessorJs) {
      StaticVBAccessor = _staticVbAccessorJs.StaticVBAccessor;
    }, function (_vertexFormatJs) {
      getAttributeStride = _vertexFormatJs.getAttributeStride;
      vfmtPosUvColor = _vertexFormatJs.vfmtPosUvColor;
    }, function (_gfxIndexJs) {
      BufferInfo = _gfxIndexJs.BufferInfo;
      BufferUsageBit = _gfxIndexJs.BufferUsageBit;
      InputAssemblerInfo = _gfxIndexJs.InputAssemblerInfo;
      MemoryUsageBit = _gfxIndexJs.MemoryUsageBit;
    }, function (_renderDrawInfoJs) {
      RenderDrawInfo = _renderDrawInfoJs.RenderDrawInfo;
      RenderDrawInfoType = _renderDrawInfoJs.RenderDrawInfoType;
    }, function (_renderEntityJs) {
      RenderEntityType = _renderEntityJs.RenderEntityType;
    }],
    execute: function () {
      /**
       * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
       */
      DEFAULT_STRIDE = getAttributeStride(vfmtPosUvColor) >> 2;
      /**
       * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
       */
      _export("BaseRenderData", BaseRenderData = /*#__PURE__*/function () {
        function BaseRenderData(vertexFormat) {
          if (vertexFormat === void 0) {
            vertexFormat = vfmtPosUvColor;
          }
          this.chunk = null;
          // entity for native
          this._renderDrawInfo = null;
          this._material = null;
          this._dataHash = 0;
          this._isMeshBuffer = false;
          this._vc = 0;
          this._ic = 0;
          this._floatStride = 0;
          this._vertexFormat = vfmtPosUvColor;
          this._drawInfoType = RenderDrawInfoType.COMP;
          this._multiOwner = false;
          this._batcher = null;
          this._floatStride = vertexFormat === vfmtPosUvColor ? DEFAULT_STRIDE : getAttributeStride(vertexFormat) >> 2;
          this._vertexFormat = vertexFormat;
        }
        var _proto = BaseRenderData.prototype;
        _proto.isValid = function isValid() {
          return this._ic > 0 && this.chunk.vertexAccessor;
        }

        // it should be invoked at where a render data is allocated.
        ;
        _proto.initRenderDrawInfo = function initRenderDrawInfo(comp, drawInfoType) {
          if (drawInfoType === void 0) {
            drawInfoType = RenderDrawInfoType.COMP;
          }
          if (JSB) {
            var renderEntity = comp.renderEntity;
            if (renderEntity.renderEntityType === RenderEntityType.STATIC) {
              if (!this._renderDrawInfo) {
                // initialization should be in native
                var drawInfo = renderEntity.getStaticRenderDrawInfo();
                if (drawInfo) {
                  this._renderDrawInfo = drawInfo;
                }
              }
            } else if (this.multiOwner === false) {
              if (!this._renderDrawInfo) {
                this._renderDrawInfo = new RenderDrawInfo();
                // for no resize() invoking components
                //this.setRenderDrawInfoAttributes();
                renderEntity.addDynamicRenderDrawInfo(this._renderDrawInfo);
              }
            }
            this.drawInfoType = drawInfoType;
            this.setRenderDrawInfoAttributes();
          }
        };
        _proto.removeRenderDrawInfo = function removeRenderDrawInfo(comp) {
          if (JSB) {
            var renderEntity = comp.renderEntity;
            if (renderEntity.renderEntityType === RenderEntityType.DYNAMIC) {
              renderEntity.removeDynamicRenderDrawInfo();
            } else if (renderEntity.renderEntityType === RenderEntityType.STATIC) {
              renderEntity.clearStaticRenderDrawInfos();
            }
          }
        };
        _proto.setRenderDrawInfoAttributes = function setRenderDrawInfoAttributes() {
          if (JSB) {
            if (!this._renderDrawInfo) {
              return;
            }
            if (this.chunk) {
              this._renderDrawInfo.setBufferId(this.chunk.bufferId);
              this._renderDrawInfo.setVertexOffset(this.chunk.vertexOffset);
              this._renderDrawInfo.setVB(this.chunk.vb);
              // TODO: on TS 4.2, argument of type 'Readonly<Uint16Array>' is not assignable to parameter of type 'Uint16Array'.
              this._renderDrawInfo.setIB(this.chunk.ib);
              if (this.chunk.meshBuffer) {
                this._renderDrawInfo.setIndexOffset(this.chunk.meshBuffer.indexOffset);
                this._renderDrawInfo.setVData(this.chunk.meshBuffer.vData.buffer);
                this._renderDrawInfo.setIData(this.chunk.meshBuffer.iData.buffer);
              }
            }
            this._renderDrawInfo.setVBCount(this._vc);
            this._renderDrawInfo.setIBCount(this._ic);
            this._renderDrawInfo.setDataHash(this.dataHash);
            this._renderDrawInfo.setIsMeshBuffer(this._isMeshBuffer);
            this._renderDrawInfo.setMaterial(this.material);
            this._renderDrawInfo.setDrawInfoType(this._drawInfoType);
          }
        };
        _createClass(BaseRenderData, [{
          key: "vertexCount",
          get: function get() {
            return this._vc;
          }
        }, {
          key: "indexCount",
          get: function get() {
            return this._ic;
          }
        }, {
          key: "stride",
          get: function get() {
            return this._floatStride << 2;
          }
        }, {
          key: "floatStride",
          get: function get() {
            return this._floatStride;
          }
        }, {
          key: "vertexFormat",
          get: function get() {
            return this._vertexFormat;
          }
        }, {
          key: "drawInfoType",
          get: function get() {
            return this._drawInfoType;
          },
          set: function set(type) {
            this._drawInfoType = type;
            if (this._renderDrawInfo) {
              this._renderDrawInfo.setDrawInfoType(type);
            }
          }
        }, {
          key: "renderDrawInfo",
          get: function get() {
            return this._renderDrawInfo;
          }
        }, {
          key: "material",
          get: function get() {
            return this._material;
          },
          set: function set(val) {
            this._material = val;
            if (this._renderDrawInfo) {
              this._renderDrawInfo.setMaterial(val);
            }
          }
        }, {
          key: "dataHash",
          get: function get() {
            return this._dataHash;
          },
          set: function set(val) {
            this._dataHash = val;
            if (this._renderDrawInfo) {
              this._renderDrawInfo.setDataHash(val);
            }
          }
        }, {
          key: "multiOwner",
          get: function get() {
            return this._multiOwner;
          },
          set: function set(val) {
            this._multiOwner = val;
          }
        }, {
          key: "batcher",
          get: function get() {
            if (!this._batcher) {
              this._batcher = director.root.batcher2D;
            }
            return this._batcher;
          }
        }]);
        return BaseRenderData;
      }());
      /**
       * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
       */
      _export("RenderData", RenderData = /*#__PURE__*/function (_BaseRenderData) {
        _inheritsLoose(RenderData, _BaseRenderData);
        RenderData.add = function add(vertexFormat, accessor) {
          if (vertexFormat === void 0) {
            vertexFormat = vfmtPosUvColor;
          }
          var rd = new RenderData(vertexFormat, accessor);
          if (!accessor) {
            var batcher = director.root.batcher2D;
            accessor = batcher.switchBufferAccessor(rd._vertexFormat);
          }
          rd._accessor = accessor;
          return rd;
        };
        RenderData.remove = function remove(data) {
          // const idx = _pool.data.indexOf(data);
          // if (idx === -1) {
          //     return;
          // }

          data.clear();
          data._accessor = null;
          // _pool.removeAt(idx);
        };

        function RenderData(vertexFormat, accessor) {
          var _this;
          if (vertexFormat === void 0) {
            vertexFormat = vfmtPosUvColor;
          }
          _this = _BaseRenderData.call(this, vertexFormat) || this;
          _this._vertDirty = true;
          _this._textureHash = 0;
          _this.indices = null;
          _this.layer = 0;
          _this.nodeDirty = true;
          _this.passDirty = true;
          _this.textureDirty = true;
          _this.hashDirty = true;
          _this._data = [];
          _this._frame = null;
          _this._accessor = null;
          _this.vertexRow = 1;
          _this.vertexCol = 1;
          if (!accessor) {
            accessor = _this.batcher.switchBufferAccessor(_this._vertexFormat);
          }
          _this._accessor = accessor;
          return _this;
        }
        var _proto2 = RenderData.prototype;
        _proto2.resize = function resize(vertexCount, indexCount) {
          if (vertexCount === this._vc && indexCount === this._ic && this.chunk) return;
          this._vc = vertexCount;
          this._ic = indexCount;
          if (this.chunk) {
            this._accessor.recycleChunk(this.chunk);
            this.chunk = null;
          }
          // renderData always have chunk
          this.chunk = this._accessor.allocateChunk(vertexCount, indexCount);
          this.updateHash();
          if (JSB && this.multiOwner === false && this._renderDrawInfo) {
            // for sync vData and iData address to native
            this._renderDrawInfo.setDrawInfoType(this._drawInfoType);
            this._renderDrawInfo.setBufferId(this.chunk.bufferId);
            this._renderDrawInfo.setVertexOffset(this.chunk.vertexOffset);
            this._renderDrawInfo.setIndexOffset(this.chunk.meshBuffer.indexOffset);
            this._renderDrawInfo.setVB(this.chunk.vb);
            // TODO: on TS 4.2, argument of type 'Readonly<Uint16Array>' is not assignable to parameter of type 'Uint16Array'.
            this._renderDrawInfo.setIB(this.chunk.ib);
            this._renderDrawInfo.setVData(this.chunk.meshBuffer.vData.buffer);
            this._renderDrawInfo.setIData(this.chunk.meshBuffer.iData.buffer);
            this._renderDrawInfo.setVBCount(this._vc);
            this._renderDrawInfo.setIBCount(this._ic);
          }
        };
        _proto2.setRenderDrawInfoAttributes = function setRenderDrawInfoAttributes() {
          if (JSB) {
            if (!this._renderDrawInfo) {
              return;
            }
            this._renderDrawInfo.setAccId(this._accessor.id);
            _BaseRenderData.prototype.setRenderDrawInfoAttributes.call(this);
            this._renderDrawInfo.setTexture(this.frame ? this.frame.getGFXTexture() : null);
            this._renderDrawInfo.setSampler(this.frame ? this.frame.getGFXSampler() : null);
          }
        }
        /**
         * @internal
         */;
        _proto2.fillDrawInfoAttributes = function fillDrawInfoAttributes(drawInfo) {
          if (JSB) {
            if (!drawInfo) {
              return;
            }
            drawInfo.setDrawInfoType(this._drawInfoType);
            drawInfo.setAccAndBuffer(this._accessor.id, this.chunk.bufferId);
            drawInfo.setVertexOffset(this.chunk.vertexOffset);
            drawInfo.setIndexOffset(this.chunk.meshBuffer.indexOffset);
            drawInfo.setVB(this.chunk.vb);
            // TODO: on TS 4.2, argument of type 'Readonly<Uint16Array>' is not assignable to parameter of type 'Uint16Array'.
            drawInfo.setIB(this.chunk.ib);
            drawInfo.setVData(this.chunk.meshBuffer.vData.buffer);
            drawInfo.setIData(this.chunk.meshBuffer.iData.buffer);
            drawInfo.setVBCount(this._vc);
            drawInfo.setIBCount(this._ic);
            drawInfo.setDataHash(this.dataHash);
            drawInfo.setIsMeshBuffer(this._isMeshBuffer);
          }
        }

        // Initial advance render data for native
        ;
        _proto2.syncRender2dBuffer = function syncRender2dBuffer() {
          if (JSB && this.multiOwner === false) {
            if (!this._renderDrawInfo) {
              return;
            }
            this.renderDrawInfo.setStride(this.floatStride);
            this.renderDrawInfo.setVBCount(this.dataLength);
            this.renderDrawInfo.initRender2dBuffer();
          }
        };
        _proto2.resizeAndCopy = function resizeAndCopy(vertexCount, indexCount) {
          if (vertexCount === this._vc && indexCount === this._ic && this.chunk) return;
          this._vc = vertexCount;
          this._ic = indexCount;
          var oldChunk = this.chunk;
          // renderData always have chunk
          this.chunk = this._accessor.allocateChunk(vertexCount, indexCount);
          // Copy old chunk data
          if (oldChunk) {
            this.chunk.vb.set(oldChunk.vb);
            this._accessor.recycleChunk(oldChunk);
          }
          this.updateHash();
        };
        _proto2.getMeshBuffer = function getMeshBuffer() {
          if (this.chunk && this._accessor) {
            return this._accessor.getMeshBuffer(this.chunk.bufferId);
          } else {
            return null;
          }
        };
        _proto2.updateNode = function updateNode(comp) {
          this.layer = comp.node.layer;
          this.nodeDirty = false;
          this.hashDirty = true;
        };
        _proto2.updatePass = function updatePass(comp) {
          this.material = comp.getRenderMaterial(0);
          this.passDirty = false;
          this.hashDirty = true;
        };
        _proto2.updateTexture = function updateTexture(frame) {
          this.frame = frame;
          this.textureHash = frame.getHash();
          this.textureDirty = false;
          this.hashDirty = true;
        };
        _proto2.updateHash = function updateHash() {
          var bid = this.chunk ? this.chunk.bufferId : -1;
          var hashString = "" + bid + this.layer + " " + this.textureHash;
          this.dataHash = murmurhash2_32_gc(hashString, 666);
          this.hashDirty = false;
        };
        _proto2.updateRenderData = function updateRenderData(comp, frame) {
          if (this.passDirty) {
            this.material = comp.getRenderMaterial(0);
            this.passDirty = false;
            this.hashDirty = true;
            if (this._renderDrawInfo) {
              this._renderDrawInfo.setMaterial(this.material);
            }
          }
          if (this.nodeDirty) {
            var renderScene = comp.node.scene ? comp._getRenderScene() : null;
            this.layer = comp.node.layer;
            // Hack for updateRenderData when node not add to scene
            if (renderScene !== null) {
              this.nodeDirty = false;
            }
            this.hashDirty = true;
          }
          if (this.textureDirty) {
            this.frame = frame;
            this.textureHash = frame.getHash();
            this.textureDirty = false;
            this.hashDirty = true;
            if (this._renderDrawInfo) {
              this._renderDrawInfo.setTexture(this.frame ? this.frame.getGFXTexture() : null);
              this._renderDrawInfo.setSampler(this.frame ? this.frame.getGFXSampler() : null);
            }
          }
          if (this.hashDirty) {
            this.updateHash();
            if (this._renderDrawInfo) {
              this._renderDrawInfo.setDataHash(this.dataHash);
            }
          }

          // Hack Do not update pre frame
          if (JSB && this.multiOwner === false) {
            if (DEBUG) {
              assert(this._renderDrawInfo.render2dBuffer.length === this._floatStride * this._data.length, 'Vertex count doesn\'t match.');
            }
            // sync shared buffer to native
            this._renderDrawInfo.fillRender2dBuffer(this._data);
          }
        };
        _proto2.clear = function clear() {
          this.resize(0, 0);
          this._data.length = 0;
          this.indices = null;
          this.vertDirty = true;
          this.material = null;
          this.nodeDirty = true;
          this.passDirty = true;
          this.textureDirty = true;
          this.hashDirty = true;
          this.layer = 0;
          this.frame = null;
          this.textureHash = 0;
          this.dataHash = 0;
          if (JSB && this._renderDrawInfo) {
            this._renderDrawInfo.clear();
          }
        };
        RenderData.createStaticVBAccessor = function createStaticVBAccessor(attributes, vCount, iCount) {
          var device = director.root.device;
          var accessor = new StaticVBAccessor(device, attributes, vCount, iCount);
          return accessor;
        };
        _createClass(RenderData, [{
          key: "dataLength",
          get: function get() {
            return this._data.length;
          },
          set: function set(length) {
            var data = this._data;
            if (data.length !== length) {
              for (var i = data.length; i < length; i++) {
                data.push({
                  x: 0,
                  y: 0,
                  z: 0,
                  u: 0,
                  v: 0,
                  color: Color.WHITE.clone()
                });
              }
              data.length = length;
            }
            this.syncRender2dBuffer();
          }
        }, {
          key: "data",
          get: function get() {
            return this._data;
          }
        }, {
          key: "vertDirty",
          get: function get() {
            return this._vertDirty;
          },
          set: function set(val) {
            this._vertDirty = val;
            if (this._renderDrawInfo && val) {
              this._renderDrawInfo.setVertDirty(val);
            }
          }
        }, {
          key: "textureHash",
          get: function get() {
            return this._textureHash;
          },
          set: function set(val) {
            this._textureHash = val;
          }
        }, {
          key: "frame",
          get: function get() {
            return this._frame;
          },
          set: function set(val) {
            this._frame = val;
            if (this._renderDrawInfo) {
              if (this._frame) {
                this._renderDrawInfo.setTexture(this._frame.getGFXTexture());
                this._renderDrawInfo.setSampler(this._frame.getGFXSampler());
              } else {
                this._renderDrawInfo.setTexture(null);
                this._renderDrawInfo.setSampler(null);
              }
            }
          }
        }, {
          key: "accessor",
          get: function get() {
            return this._accessor;
          }
        }]);
        return RenderData;
      }(BaseRenderData));
      /**
       * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
       */
      _export("MeshRenderData", MeshRenderData = /*#__PURE__*/function (_BaseRenderData2) {
        _inheritsLoose(MeshRenderData, _BaseRenderData2);
        MeshRenderData.add = function add(vertexFormat) {
          if (vertexFormat === void 0) {
            vertexFormat = vfmtPosUvColor;
          }
          // const rd = _meshDataPool.add();
          var rd = new MeshRenderData();
          rd._floatStride = vertexFormat === vfmtPosUvColor ? DEFAULT_STRIDE : getAttributeStride(vertexFormat) >> 2;
          rd._vertexFormat = vertexFormat;
          return rd;
        };
        MeshRenderData.remove = function remove(data) {
          // const idx = _meshDataPool.data.indexOf(data);
          // if (idx === -1) {
          //     return;
          // }

          // _meshDataPool.data[idx].clear();
          // _meshDataPool.removeAt(idx);

          data.clear();
        }

        /**
         * @deprecated
         */;

        function MeshRenderData(vertexFormat) {
          var _this2;
          if (vertexFormat === void 0) {
            vertexFormat = vfmtPosUvColor;
          }
          _this2 = _BaseRenderData2.call(this, vertexFormat) || this;
          _this2._isMeshBuffer = true;
          _this2.vData = void 0;
          _this2.iData = void 0;
          /**
           * First vertex used in the current IA
           */
          _this2.vertexStart = 0;
          /**
           * Vertex count used in the current IA
           */
          _this2.vertexRange = 0;
          /**
           * First index used in the current IA
           */
          _this2.indexStart = 0;
          /**
           * Index count used in the current IA
           */
          _this2.indexRange = 0;
          // only for graphics
          _this2.lastFilledIndex = 0;
          _this2.lastFilledVertex = 0;
          _this2.frame = void 0;
          _this2._byteLength = 0;
          _this2._vertexBuffers = [];
          _this2._indexBuffer = null;
          _this2._iaPool = null;
          _this2._iaInfo = null;
          _this2.vData = new Float32Array(256 * _this2.stride);
          _this2.iData = new Uint16Array(256 * 6);
          return _this2;
        }
        var _proto3 = MeshRenderData.prototype;
        _proto3.request = function request(vertexCount, indexCount) {
          var byteOffset = this._byteLength + vertexCount * this.stride;
          var succeed = this.reserve(vertexCount, indexCount);
          if (!succeed) return false;
          this._vc += vertexCount; // vertexOffset
          this._ic += indexCount; // indicesOffset
          this._byteLength = byteOffset; // byteOffset
          this.vertexRange = this._vc;
          this.indexRange = this._ic;
          return true;
        };
        _proto3.reserve = function reserve(vertexCount, indexCount) {
          var newVBytes = this._byteLength + vertexCount * this.stride;
          var newICount = this.indexCount + indexCount;
          if (vertexCount + this.vertexCount > 65535) {
            return false;
          }
          var byteLength = this.vData.byteLength;
          var indicesLength = this.iData.length;
          var vCount = this.vData.length;
          var iCount = this.iData.length;
          if (newVBytes > byteLength || newICount > indicesLength) {
            while (byteLength < newVBytes || indicesLength < newICount) {
              vCount *= 2;
              iCount *= 2;
              byteLength = vCount * 4;
              indicesLength = iCount;
            }
            this._reallocBuffer(vCount, iCount);
          }
          return true;
        }

        // overload
        // Resize buffer and IA range
        ;
        _proto3.resize = function resize(vertexCount, indexCount) {
          var byteLength = vertexCount * this.stride;
          assertIsTrue(vertexCount >= 0 && indexCount >= 0 && byteLength <= this.vData.byteLength && indexCount <= this.iData.length);
          this._vc = vertexCount;
          this._ic = indexCount;
          this._byteLength = byteLength;
          this.updateRange(0, vertexCount, 0, indexCount);
        }

        // Only resize IA range
        ;
        _proto3.updateRange = function updateRange(vertOffset, vertexCount, indexOffset, indexCount) {
          assertIsTrue(vertexCount >= 0 && indexCount >= 0 && vertexCount <= this._vc && indexCount <= this._ic);
          this.vertexStart = vertOffset;
          this.indexStart = indexOffset;
          this.vertexRange = vertexCount;
          this.indexRange = indexCount;
        };
        _proto3.requestIA = function requestIA(device) {
          this._initIAInfo(device);
          var ia = this._iaPool.add();
          ia.firstIndex = this.indexStart;
          ia.indexCount = this.indexRange;
          return ia;
        };
        _proto3.uploadBuffers = function uploadBuffers() {
          if (this._byteLength === 0 || !this._vertexBuffers[0] || !this._indexBuffer) {
            return;
          }
          var indexCount = this._ic;
          var verticesData = new Float32Array(this.vData.buffer, 0, this._byteLength >> 2);
          var indicesData = new Uint16Array(this.iData.buffer, 0, indexCount);
          var vertexBuffer = this._vertexBuffers[0];
          if (this._byteLength > vertexBuffer.size) {
            vertexBuffer.resize(this._byteLength);
          }
          vertexBuffer.update(verticesData);
          var indexBytes = indexCount << 1;
          if (indexBytes > this._indexBuffer.size) {
            this._indexBuffer.resize(indexBytes);
          }
          this._indexBuffer.update(indicesData);
        };
        _proto3.freeIAPool = function freeIAPool() {
          if (this._iaPool) {
            this._iaPool.reset();
          }
        };
        _proto3.reset = function reset() {
          this._vc = 0;
          this._ic = 0;
          this._byteLength = 0;
          this.vertexStart = 0;
          this.vertexRange = 0;
          this.indexStart = 0;
          this.indexRange = 0;
          this.lastFilledIndex = 0;
          this.lastFilledVertex = 0;
          this.material = null;
          this.freeIAPool();
        };
        _proto3.clear = function clear() {
          this.reset();
          if (this._iaPool) {
            this._iaPool.destroy();
          }
          if (this._vertexBuffers[0]) {
            this._vertexBuffers[0].destroy();
            this._vertexBuffers = [];
          }
          this._iaInfo = null;
          this.vData = new Float32Array(256 * this.stride);
          this.iData = new Uint16Array(256 * 6);
        };
        _proto3._initIAInfo = function _initIAInfo(device) {
          var _this3 = this;
          if (!this._iaInfo) {
            var vbStride = this.stride;
            var vbs = this._vertexBuffers;
            if (!vbs.length) {
              vbs.push(device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, vbStride, vbStride)));
            }
            var ibStride = Uint16Array.BYTES_PER_ELEMENT;
            if (!this._indexBuffer) {
              this._indexBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, ibStride, ibStride));
            }
            this._iaInfo = new InputAssemblerInfo(this._vertexFormat, vbs, this._indexBuffer);
            this._iaPool = new RecyclePool(function () {
              return device.createInputAssembler(_this3._iaInfo);
            }, 1, function (ia) {
              ia.destroy();
            });
          }
        };
        _proto3._reallocBuffer = function _reallocBuffer(vCount, iCount) {
          // copy old data
          var oldVData = this.vData;
          this.vData = new Float32Array(vCount);
          if (oldVData) {
            this.vData.set(oldVData, 0);
          }
          var oldIData = this.iData;
          this.iData = new Uint16Array(iCount);
          if (oldIData) {
            this.iData.set(oldIData, 0);
          }
        };
        _proto3.setRenderDrawInfoAttributes = function setRenderDrawInfoAttributes() {
          if (JSB) {
            var _this$frame, _this$frame2;
            if (!this._renderDrawInfo) {
              return;
            }
            this._renderDrawInfo.setVData(this.vData.buffer);
            this._renderDrawInfo.setIData(this.iData.buffer);
            this._renderDrawInfo.setVBCount(this._vc);
            this._renderDrawInfo.setIBCount(this._ic);
            this._renderDrawInfo.setVertexOffset(this.vertexStart);
            this._renderDrawInfo.setIndexOffset(this.indexStart);
            this._renderDrawInfo.setIsMeshBuffer(this._isMeshBuffer);
            this._renderDrawInfo.setMaterial(this.material);
            this._renderDrawInfo.setTexture((_this$frame = this.frame) === null || _this$frame === void 0 ? void 0 : _this$frame.getGFXTexture());
            this._renderDrawInfo.setSampler((_this$frame2 = this.frame) === null || _this$frame2 === void 0 ? void 0 : _this$frame2.getGFXSampler());
          }
        }

        //  only for particle2d
        ;
        _proto3.particleInitRenderDrawInfo = function particleInitRenderDrawInfo(entity) {
          if (JSB) {
            if (entity.renderEntityType === RenderEntityType.STATIC) {
              if (!this._renderDrawInfo) {
                // initialization should be in native
                var drawInfo = entity.getStaticRenderDrawInfo();
                if (drawInfo) {
                  this._renderDrawInfo = drawInfo;
                }
              }
            }
          }
        };
        _createClass(MeshRenderData, [{
          key: "formatByte",
          get: function get() {
            return this.stride;
          },
          set: function set(value) {}
        }, {
          key: "floatStride",
          get: function get() {
            return this._floatStride;
          }

          /**
           * Index of Float32Array: vData
           */
        }, {
          key: "vDataOffset",
          get: function get() {
            return this._byteLength >>> 2;
          }
        }]);
        return MeshRenderData;
      }(BaseRenderData));
    }
  };
});