System.register("q-bundled:///fs/cocos/terrain/terrain-asset.js", ["../core/data/decorators/index.js", "../asset/assets/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, Asset, _dec, _class2, _class3, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _dec2, _class5, _dec3, _class7, _class8, _initializer7, TERRAIN_MAX_LEVELS, TERRAIN_MAX_BLEND_LAYERS, TERRAIN_MAX_LAYER_COUNT, TERRAIN_BLOCK_TILE_COMPLEXITY, TERRAIN_BLOCK_VERTEX_COMPLEXITY, TERRAIN_BLOCK_VERTEX_SIZE, TERRAIN_HEIGHT_BASE, TERRAIN_HEIGHT_FACTORY, TERRAIN_HEIGHT_FACTORY_V7, TERRAIN_HEIGHT_FMIN, TERRAIN_HEIGHT_FMAX, TERRAIN_NORTH_INDEX, TERRAIN_SOUTH_INDEX, TERRAIN_WEST_INDEX, TERRAIN_EAST_INDEX, TERRAIN_DATA_VERSION, TERRAIN_DATA_VERSION2, TERRAIN_DATA_VERSION3, TERRAIN_DATA_VERSION4, TERRAIN_DATA_VERSION5, TERRAIN_DATA_VERSION6, TERRAIN_DATA_VERSION7, TERRAIN_DATA_VERSION8, TERRAIN_DATA_VERSION_DEFAULT, TerrainBuffer, TerrainLayerInfo, TerrainLayerBinaryInfo, TerrainAsset;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_assetAssetsIndexJs) {
      Asset = _assetAssetsIndexJs.Asset;
    }],
    execute: function () {
      _export("TERRAIN_MAX_LEVELS", TERRAIN_MAX_LEVELS = 4);
      _export("TERRAIN_MAX_BLEND_LAYERS", TERRAIN_MAX_BLEND_LAYERS = 4);
      _export("TERRAIN_MAX_LAYER_COUNT", TERRAIN_MAX_LAYER_COUNT = 256);
      _export("TERRAIN_BLOCK_TILE_COMPLEXITY", TERRAIN_BLOCK_TILE_COMPLEXITY = 32);
      _export("TERRAIN_BLOCK_VERTEX_COMPLEXITY", TERRAIN_BLOCK_VERTEX_COMPLEXITY = 33);
      _export("TERRAIN_BLOCK_VERTEX_SIZE", TERRAIN_BLOCK_VERTEX_SIZE = 8); // position + normal + uv
      _export("TERRAIN_HEIGHT_BASE", TERRAIN_HEIGHT_BASE = 32768);
      _export("TERRAIN_HEIGHT_FACTORY", TERRAIN_HEIGHT_FACTORY = 1.0 / 128.0);
      _export("TERRAIN_HEIGHT_FACTORY_V7", TERRAIN_HEIGHT_FACTORY_V7 = 1.0 / 512.0);
      _export("TERRAIN_HEIGHT_FMIN", TERRAIN_HEIGHT_FMIN = -TERRAIN_HEIGHT_BASE * TERRAIN_HEIGHT_FACTORY);
      _export("TERRAIN_HEIGHT_FMAX", TERRAIN_HEIGHT_FMAX = (65535 - TERRAIN_HEIGHT_BASE) * TERRAIN_HEIGHT_FACTORY);
      _export("TERRAIN_NORTH_INDEX", TERRAIN_NORTH_INDEX = 0);
      _export("TERRAIN_SOUTH_INDEX", TERRAIN_SOUTH_INDEX = 1);
      _export("TERRAIN_WEST_INDEX", TERRAIN_WEST_INDEX = 2);
      _export("TERRAIN_EAST_INDEX", TERRAIN_EAST_INDEX = 3);
      _export("TERRAIN_DATA_VERSION", TERRAIN_DATA_VERSION = 0x01010001);
      _export("TERRAIN_DATA_VERSION2", TERRAIN_DATA_VERSION2 = 0x01010002);
      _export("TERRAIN_DATA_VERSION3", TERRAIN_DATA_VERSION3 = 0x01010003);
      _export("TERRAIN_DATA_VERSION4", TERRAIN_DATA_VERSION4 = 0x01010004);
      _export("TERRAIN_DATA_VERSION5", TERRAIN_DATA_VERSION5 = 0x01010005);
      _export("TERRAIN_DATA_VERSION6", TERRAIN_DATA_VERSION6 = 0x01010006);
      _export("TERRAIN_DATA_VERSION7", TERRAIN_DATA_VERSION7 = 0x01010007);
      _export("TERRAIN_DATA_VERSION8", TERRAIN_DATA_VERSION8 = 0x01010008);
      _export("TERRAIN_DATA_VERSION_DEFAULT", TERRAIN_DATA_VERSION_DEFAULT = 0x01010111);
      TerrainBuffer = /*#__PURE__*/function () {
        function TerrainBuffer() {
          this.length = 0;
          this.buffer = new Uint8Array(2048);
          this._buffView = new DataView(this.buffer.buffer);
          this._seekPos = 0;
        }
        var _proto = TerrainBuffer.prototype;
        _proto.reserve = function reserve(size) {
          if (this.buffer.byteLength > size) {
            return;
          }
          var capacity = this.buffer.byteLength;
          while (capacity < size) {
            capacity += capacity;
          }
          var temp = new Uint8Array(capacity);
          for (var i = 0; i < this.length; ++i) {
            temp[i] = this.buffer[i];
          }
          this.buffer = temp;
          this._buffView = new DataView(this.buffer.buffer);
        };
        _proto.assign = function assign(buff) {
          this.buffer = buff;
          this.length = buff.length;
          this._seekPos = buff.byteOffset;
          this._buffView = new DataView(buff.buffer);
        };
        _proto.writeInt8 = function writeInt8(value) {
          this.reserve(this.length + 1);
          this._buffView.setInt8(this.length, value);
          this.length += 1;
        };
        _proto.writeInt16 = function writeInt16(value) {
          this.reserve(this.length + 2);
          this._buffView.setInt16(this.length, value, true);
          this.length += 2;
        };
        _proto.writeInt32 = function writeInt32(value) {
          this.reserve(this.length + 4);
          this._buffView.setInt32(this.length, value, true);
          this.length += 4;
        };
        _proto.writeIntArray = function writeIntArray(value) {
          this.reserve(this.length + 4 * value.length);
          for (var i = 0; i < value.length; ++i) {
            this._buffView.setInt32(this.length + i * 4, value[i], true);
          }
          this.length += 4 * value.length;
        };
        _proto.writeFloat = function writeFloat(value) {
          this.reserve(this.length + 4);
          this._buffView.setFloat32(this.length, value, true);
          this.length += 4;
        };
        _proto.writeFloatArray = function writeFloatArray(value) {
          this.reserve(this.length + 4 * value.length);
          for (var i = 0; i < value.length; ++i) {
            this._buffView.setFloat32(this.length + i * 4, value[i], true);
          }
          this.length += 4 * value.length;
        };
        _proto.writeDouble = function writeDouble(value) {
          this.reserve(this.length + 8);
          this._buffView.setFloat64(this.length, value, true);
          this.length += 8;
        };
        _proto.writeDoubleArray = function writeDoubleArray(value) {
          this.reserve(this.length + 8 * value.length);
          for (var i = 0; i < value.length; ++i) {
            this._buffView.setFloat64(this.length + i * 8, value[i], true);
          }
          this.length += 8 * value.length;
        };
        _proto.writeString = function writeString(value) {
          this.reserve(this.length + value.length + 4);
          this._buffView.setInt32(this.length, value.length, true);
          for (var i = 0; i < value.length; ++i) {
            this._buffView.setInt8(this.length + 4 + i, value.charCodeAt(i));
          }
          this.length += value.length + 4;
        };
        _proto.readInt8 = function readInt8() {
          var value = this._buffView.getInt8(this._seekPos);
          this._seekPos += 1;
          return value;
        };
        _proto.readInt16 = function readInt16() {
          var value = this._buffView.getInt16(this._seekPos, true);
          this._seekPos += 2;
          return value;
        };
        _proto.readInt = function readInt() {
          var value = this._buffView.getInt32(this._seekPos, true);
          this._seekPos += 4;
          return value;
        };
        _proto.readIntArray = function readIntArray(value) {
          for (var i = 0; i < value.length; ++i) {
            value[i] = this._buffView.getInt32(this._seekPos + i * 4, true);
          }
          this._seekPos += 4 * value.length;
          return value;
        };
        _proto.readFloat = function readFloat() {
          var value = this._buffView.getFloat32(this._seekPos, true);
          this._seekPos += 4;
          return value;
        };
        _proto.readFloatArray = function readFloatArray(value) {
          for (var i = 0; i < value.length; ++i) {
            value[i] = this._buffView.getFloat32(this._seekPos + i * 4, true);
          }
          this._seekPos += 4 * value.length;
          return value;
        };
        _proto.readDouble = function readDouble() {
          var value = this._buffView.getFloat64(this._seekPos, true);
          this._seekPos += 8;
          return value;
        };
        _proto.readDoubleArray = function readDoubleArray(value) {
          for (var i = 0; i < value.length; ++i) {
            value[i] = this._buffView.getFloat64(this._seekPos + i * 4, true);
          }
          this._seekPos += 8 * value.length;
          return value;
        };
        _proto.readString = function readString() {
          var length = this.readInt();
          var value = '';
          for (var i = 0; i < length; ++i) {
            value += String.fromCharCode(this.readInt8());
          }
          return value;
        };
        return TerrainBuffer;
      }();
      /**
       * @en terrain layer info
       * @zh 地形纹理信息
       */
      _export("TerrainLayerInfo", TerrainLayerInfo = (_dec = ccclass('cc.TerrainLayerInfo'), _dec(_class2 = (_class3 = function TerrainLayerInfo() {
        this.slot = _initializer && _initializer();
        this.tileSize = _initializer2 && _initializer2();
        this.detailMap = _initializer3 && _initializer3();
        this.normalMap = _initializer4 && _initializer4();
        this.roughness = _initializer5 && _initializer5();
        this.metallic = _initializer6 && _initializer6();
      }, (_initializer = _applyDecoratedInitializer(_class3.prototype, "slot", [serializable], function () {
        return 0;
      }), _initializer2 = _applyDecoratedInitializer(_class3.prototype, "tileSize", [serializable], function () {
        return 1;
      }), _initializer3 = _applyDecoratedInitializer(_class3.prototype, "detailMap", [serializable], function () {
        return null;
      }), _initializer4 = _applyDecoratedInitializer(_class3.prototype, "normalMap", [serializable], function () {
        return null;
      }), _initializer5 = _applyDecoratedInitializer(_class3.prototype, "roughness", [serializable], function () {
        return 1;
      }), _initializer6 = _applyDecoratedInitializer(_class3.prototype, "metallic", [serializable], function () {
        return 0;
      })), _class3)) || _class2));
      /**
       * @en terrain layer binary info
       * @zh 地形纹理二进制信息
       */
      _export("TerrainLayerBinaryInfo", TerrainLayerBinaryInfo = (_dec2 = ccclass('cc.TerrainLayerBinaryInfo'), _dec2(_class5 = function TerrainLayerBinaryInfo() {
        this.slot = 0;
        this.tileSize = 1;
        this.roughness = 1;
        this.metallic = 0;
        this.detailMapId = '';
        this.normalMapId = '';
      }) || _class5));
      /**
       * @en terrain asset
       * @zh 地形资源
       */
      _export("TerrainAsset", TerrainAsset = (_dec3 = ccclass('cc.TerrainAsset'), _dec3(_class7 = (_class8 = /*#__PURE__*/function (_Asset) {
        _inheritsLoose(TerrainAsset, _Asset);
        function TerrainAsset() {
          var _this;
          _this = _Asset.call(this) || this;
          _this._version = 0;
          _this._data = null;
          _this._tileSize = 1;
          _this._blockCount = [1, 1];
          _this._weightMapSize = 128;
          _this._lightMapSize = 128;
          _this._heights = new Uint16Array();
          _this._normals = new Float32Array();
          _this._weights = new Uint8Array();
          _this._layerBuffer = [-1, -1, -1, -1];
          _this._layerBinaryInfos = [];
          _this._layerInfos = _initializer7 && _initializer7();
          return _this;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        var _proto2 = TerrainAsset.prototype;
        /**
         * @en get layer
         * @zh 获得纹理索引
         * @param xBlock block index x
         * @param yBlock block index y
         * @param layerId layer id
         */
        _proto2.getLayer = function getLayer(xBlock, yBlock, layerId) {
          var blockId = yBlock * this.blockCount[0] + xBlock;
          var index = blockId * 4 + layerId;
          if (xBlock < this.blockCount[0] && yBlock < this.blockCount[1] && index < this._layerBuffer.length) {
            return this._layerBuffer[index];
          }
          return -1;
        };
        _proto2.getHeight = function getHeight(i, j) {
          var vertexCountX = this._blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY + 1;
          return (this._heights[j * vertexCountX + i] - TERRAIN_HEIGHT_BASE) * TERRAIN_HEIGHT_FACTORY;
        };
        _proto2.getVertexCountI = function getVertexCountI() {
          if (this._blockCount.length < 1) return 0;
          return this._blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY + 1;
        };
        _proto2.getVertexCountJ = function getVertexCountJ() {
          if (this._blockCount.length < 2) return 0;
          return this._blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY + 1;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto2._setNativeData = function _setNativeData(_nativeData) {
          this._data = _nativeData;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto2._loadNativeData = function _loadNativeData(_nativeData) {
          if (!_nativeData || _nativeData.length === 0) {
            return false;
          }
          var stream = new TerrainBuffer();
          stream.assign(_nativeData);

          // version
          this._version = stream.readInt();
          if (this._version === TERRAIN_DATA_VERSION_DEFAULT) {
            return true;
          }
          if (this._version !== TERRAIN_DATA_VERSION && this._version !== TERRAIN_DATA_VERSION2 && this._version !== TERRAIN_DATA_VERSION3 && this._version !== TERRAIN_DATA_VERSION4 && this._version !== TERRAIN_DATA_VERSION5 && this._version !== TERRAIN_DATA_VERSION6 && this._version !== TERRAIN_DATA_VERSION7 && this._version !== TERRAIN_DATA_VERSION8) {
            return false;
          }

          // geometry info
          if (this._version >= TERRAIN_DATA_VERSION7) {
            this.tileSize = stream.readDouble();
          } else {
            this.tileSize = stream.readFloat();
          }
          this.tileSize = Math.floor(this.tileSize * 100) / 100.0;
          stream.readIntArray(this._blockCount);
          this.weightMapSize = stream.readInt16();
          this.lightMapSize = stream.readInt16();

          // heights
          var heightBufferSize = stream.readInt();
          this.heights = new Uint16Array(heightBufferSize);
          for (var i = 0; i < this.heights.length; ++i) {
            this.heights[i] = stream.readInt16();
          }
          if (this._version < TERRAIN_DATA_VERSION8) {
            for (var _i = 0; _i < this.heights.length; ++_i) {
              var h = (this._heights[_i] - TERRAIN_HEIGHT_BASE) * TERRAIN_HEIGHT_FACTORY_V7;
              var ch = TERRAIN_HEIGHT_BASE + h / TERRAIN_HEIGHT_FACTORY;
              this.heights[_i] = ch;
            }
          }

          // normals
          if (this._version >= TERRAIN_DATA_VERSION6) {
            var normalBufferSize = stream.readInt();
            this.normals = new Float32Array(normalBufferSize);
            for (var _i2 = 0; _i2 < this.normals.length; ++_i2) {
              this.normals[_i2] = stream.readFloat();
            }
          }

          // weights
          var WeightBufferSize = stream.readInt();
          this.weights = new Uint8Array(WeightBufferSize);
          for (var _i3 = 0; _i3 < this.weights.length; ++_i3) {
            this.weights[_i3] = stream.readInt8();
          }

          // layer buffer
          if (this._version >= TERRAIN_DATA_VERSION2) {
            var layerBufferSize = stream.readInt();
            this.layerBuffer = new Array(layerBufferSize);
            for (var _i4 = 0; _i4 < this.layerBuffer.length; ++_i4) {
              this.layerBuffer[_i4] = stream.readInt16();
            }
          }

          // layer infos
          if (this._version >= TERRAIN_DATA_VERSION3) {
            var layerInfoSize = stream.readInt();
            this._layerBinaryInfos = new Array(layerInfoSize);
            for (var _i5 = 0; _i5 < this._layerBinaryInfos.length; ++_i5) {
              this._layerBinaryInfos[_i5] = new TerrainLayerBinaryInfo();
              this._layerBinaryInfos[_i5].slot = stream.readInt();
              if (this._version >= TERRAIN_DATA_VERSION7) {
                this._layerBinaryInfos[_i5].tileSize = stream.readDouble();
              } else {
                this._layerBinaryInfos[_i5].tileSize = stream.readFloat();
              }
              this._layerBinaryInfos[_i5].detailMapId = stream.readString();
              if (this._version >= TERRAIN_DATA_VERSION4) {
                this._layerBinaryInfos[_i5].normalMapId = stream.readString();
                if (this._version >= TERRAIN_DATA_VERSION7) {
                  this._layerBinaryInfos[_i5].roughness = stream.readDouble();
                  this._layerBinaryInfos[_i5].metallic = stream.readDouble();
                } else {
                  this._layerBinaryInfos[_i5].roughness = stream.readFloat();
                  this._layerBinaryInfos[_i5].metallic = stream.readFloat();
                }
              }
            }
          }
          return true;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto2._exportNativeData = function _exportNativeData() {
          var stream = new TerrainBuffer();

          // version
          stream.writeInt32(TERRAIN_DATA_VERSION8);

          // geometry info
          stream.writeDouble(this.tileSize);
          stream.writeIntArray(this._blockCount);
          stream.writeInt16(this.weightMapSize);
          stream.writeInt16(this.lightMapSize);

          // heights
          stream.writeInt32(this.heights.length);
          for (var i = 0; i < this.heights.length; ++i) {
            stream.writeInt16(this.heights[i]);
          }

          // normals
          stream.writeInt32(this.normals.length);
          for (var _i6 = 0; _i6 < this.normals.length; ++_i6) {
            stream.writeFloat(this.normals[_i6]);
          }

          // weights
          stream.writeInt32(this.weights.length);
          for (var _i7 = 0; _i7 < this.weights.length; ++_i7) {
            stream.writeInt8(this.weights[_i7]);
          }

          // layer buffer
          stream.writeInt32(this.layerBuffer.length);
          for (var _i8 = 0; _i8 < this.layerBuffer.length; ++_i8) {
            stream.writeInt16(this.layerBuffer[_i8]);
          }

          // layer infos
          var layerBinaryInfos = [];
          layerBinaryInfos.length = this.layerInfos.length;
          for (var _i9 = 0; _i9 < layerBinaryInfos.length; ++_i9) {
            var layer = this.layerInfos[_i9];
            var binaryLayer = new TerrainLayerBinaryInfo();
            binaryLayer.slot = _i9;
            binaryLayer.tileSize = layer.tileSize;
            binaryLayer.detailMapId = layer.detailMap ? layer.detailMap._uuid : '';
            binaryLayer.normalMapId = layer.normalMap ? layer.normalMap._uuid : '';
            binaryLayer.metallic = layer.metallic;
            binaryLayer.roughness = layer.roughness;
            layerBinaryInfos[_i9] = binaryLayer;
          }
          stream.writeInt32(layerBinaryInfos.length);
          for (var _i10 = 0; _i10 < layerBinaryInfos.length; ++_i10) {
            stream.writeInt32(layerBinaryInfos[_i10].slot);
            stream.writeDouble(layerBinaryInfos[_i10].tileSize);
            stream.writeString(layerBinaryInfos[_i10].detailMapId);
            stream.writeString(layerBinaryInfos[_i10].normalMapId);
            stream.writeDouble(layerBinaryInfos[_i10].roughness);
            stream.writeDouble(layerBinaryInfos[_i10].metallic);
          }
          return stream.buffer;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto2._exportDefaultNativeData = function _exportDefaultNativeData() {
          var stream = new TerrainBuffer();
          stream.writeInt32(TERRAIN_DATA_VERSION_DEFAULT);
          return stream.buffer;
        };
        _createClass(TerrainAsset, [{
          key: "_nativeAsset",
          get: function get() {
            return this._data.buffer;
          },
          set: function set(value) {
            if (this._data && this._data.byteLength === value.byteLength) {
              this._data.set(new Uint8Array(value));
            } else {
              this._data = new Uint8Array(value);
            }
            this._loadNativeData(this._data);
          }

          /**
           * @en version
           * @zh 版本
           */
        }, {
          key: "version",
          get: function get() {
            return this._version;
          }

          /**
           * @en tile size
           * @zh 栅格大小
           */
        }, {
          key: "tileSize",
          get: function get() {
            return this._tileSize;
          }

          /**
           * @en block count
           * @zh 块数量
           */,
          set: function set(value) {
            this._tileSize = value;
          }
        }, {
          key: "blockCount",
          get: function get() {
            return this._blockCount;
          }

          /**
           * @en light map size
           * @zh 光照图大小
           */,
          set: function set(value) {
            this._blockCount = value;
          }
        }, {
          key: "lightMapSize",
          get: function get() {
            return this._lightMapSize;
          }

          /**
           * @en weight map size
           * @zh 权重图大小
           */,
          set: function set(value) {
            this._lightMapSize = value;
          }
        }, {
          key: "weightMapSize",
          get: function get() {
            return this._weightMapSize;
          }

          /**
           * @en height buffer
           * @zh 高度缓存
           */,
          set: function set(value) {
            this._weightMapSize = value;
          }
        }, {
          key: "heights",
          get: function get() {
            return this._heights;
          }

          /**
           * @en normal buffer
           * @zh 法线缓存
           */,
          set: function set(value) {
            this._heights = value;
          }
        }, {
          key: "normals",
          get: function get() {
            return this._normals;
          }

          /**
           * @en weight buffer
           * @zh 权重缓存
           */,
          set: function set(value) {
            this._normals = value;
          }
        }, {
          key: "weights",
          get: function get() {
            return this._weights;
          }

          /**
           * @en layer buffer
           * @zh 纹理索引缓存
           */,
          set: function set(value) {
            this._weights = value;
          }
        }, {
          key: "layerBuffer",
          get: function get() {
            return this._layerBuffer;
          }

          /**
           * @en layer info
           * @zh 纹理信息
           */,
          set: function set(value) {
            this._layerBuffer = value;
          }
        }, {
          key: "layerInfos",
          get: function get() {
            return this._layerInfos;
          },
          set: function set(value) {
            this._layerInfos = value;
          }
        }, {
          key: "layerBinaryInfos",
          get: function get() {
            return this._layerBinaryInfos;
          }
        }]);
        return TerrainAsset;
      }(Asset), (_initializer7 = _applyDecoratedInitializer(_class8.prototype, "_layerInfos", [serializable], function () {
        return [];
      })), _class8)) || _class7));
    }
  };
});