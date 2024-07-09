System.register(['./index-ce98320e.js', './rendering-sub-mesh.jsb-25043997.js', './node-event-18d96a1b.js', './builtin-res-mgr.jsb-c9e8e53a.js', './scene-asset.jsb-0d4c6201.js'], (function (exports) {
    'use strict';
    var ccclass, applyDecoratedInitializer, serializable, Asset;
    return {
        setters: [function (module) {
            ccclass = module.by;
            applyDecoratedInitializer = module.bx;
            serializable = module.bf;
        }, function () {}, function (module) {
            Asset = module.A;
        }, function () {}, function () {}],
        execute: (function () {

            var _dec, _class2, _class3, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _dec2, _class5, _dec3, _class7, _class8, _initializer7;
            const TERRAIN_MAX_LEVELS = exports('l', 4);
            const TERRAIN_MAX_BLEND_LAYERS = exports('j', 4);
            const TERRAIN_MAX_LAYER_COUNT = exports('d', 256);
            const TERRAIN_BLOCK_TILE_COMPLEXITY = exports('a', 32);
            const TERRAIN_BLOCK_VERTEX_COMPLEXITY = exports('c', 33);
            const TERRAIN_BLOCK_VERTEX_SIZE = exports('b', 8);
            const TERRAIN_HEIGHT_BASE = exports('h', 32768);
            const TERRAIN_HEIGHT_FACTORY = exports('i', 1.0 / 128.0);
            const TERRAIN_HEIGHT_FACTORY_V7 = exports('m', 1.0 / 512.0);
            const TERRAIN_HEIGHT_FMIN = exports('g', -TERRAIN_HEIGHT_BASE * TERRAIN_HEIGHT_FACTORY);
            const TERRAIN_HEIGHT_FMAX = exports('f', (65535 - TERRAIN_HEIGHT_BASE) * TERRAIN_HEIGHT_FACTORY);
            const TERRAIN_NORTH_INDEX = exports('n', 0);
            const TERRAIN_SOUTH_INDEX = exports('o', 1);
            const TERRAIN_WEST_INDEX = exports('p', 2);
            const TERRAIN_EAST_INDEX = exports('q', 3);
            const TERRAIN_DATA_VERSION = exports('r', 0x01010001);
            const TERRAIN_DATA_VERSION2 = exports('s', 0x01010002);
            const TERRAIN_DATA_VERSION3 = exports('t', 0x01010003);
            const TERRAIN_DATA_VERSION4 = exports('u', 0x01010004);
            const TERRAIN_DATA_VERSION5 = exports('k', 0x01010005);
            const TERRAIN_DATA_VERSION6 = exports('v', 0x01010006);
            const TERRAIN_DATA_VERSION7 = exports('w', 0x01010007);
            const TERRAIN_DATA_VERSION8 = exports('x', 0x01010008);
            const TERRAIN_DATA_VERSION_DEFAULT = exports('y', 0x01010111);
            class TerrainBuffer {
              constructor() {
                this.length = 0;
                this.buffer = new Uint8Array(2048);
                this._buffView = new DataView(this.buffer.buffer);
                this._seekPos = 0;
              }
              reserve(size) {
                if (this.buffer.byteLength > size) {
                  return;
                }
                let capacity = this.buffer.byteLength;
                while (capacity < size) {
                  capacity += capacity;
                }
                const temp = new Uint8Array(capacity);
                for (let i = 0; i < this.length; ++i) {
                  temp[i] = this.buffer[i];
                }
                this.buffer = temp;
                this._buffView = new DataView(this.buffer.buffer);
              }
              assign(buff) {
                this.buffer = buff;
                this.length = buff.length;
                this._seekPos = buff.byteOffset;
                this._buffView = new DataView(buff.buffer);
              }
              writeInt8(value) {
                this.reserve(this.length + 1);
                this._buffView.setInt8(this.length, value);
                this.length += 1;
              }
              writeInt16(value) {
                this.reserve(this.length + 2);
                this._buffView.setInt16(this.length, value, true);
                this.length += 2;
              }
              writeInt32(value) {
                this.reserve(this.length + 4);
                this._buffView.setInt32(this.length, value, true);
                this.length += 4;
              }
              writeIntArray(value) {
                this.reserve(this.length + 4 * value.length);
                for (let i = 0; i < value.length; ++i) {
                  this._buffView.setInt32(this.length + i * 4, value[i], true);
                }
                this.length += 4 * value.length;
              }
              writeFloat(value) {
                this.reserve(this.length + 4);
                this._buffView.setFloat32(this.length, value, true);
                this.length += 4;
              }
              writeFloatArray(value) {
                this.reserve(this.length + 4 * value.length);
                for (let i = 0; i < value.length; ++i) {
                  this._buffView.setFloat32(this.length + i * 4, value[i], true);
                }
                this.length += 4 * value.length;
              }
              writeDouble(value) {
                this.reserve(this.length + 8);
                this._buffView.setFloat64(this.length, value, true);
                this.length += 8;
              }
              writeDoubleArray(value) {
                this.reserve(this.length + 8 * value.length);
                for (let i = 0; i < value.length; ++i) {
                  this._buffView.setFloat64(this.length + i * 8, value[i], true);
                }
                this.length += 8 * value.length;
              }
              writeString(value) {
                this.reserve(this.length + value.length + 4);
                this._buffView.setInt32(this.length, value.length, true);
                for (let i = 0; i < value.length; ++i) {
                  this._buffView.setInt8(this.length + 4 + i, value.charCodeAt(i));
                }
                this.length += value.length + 4;
              }
              readInt8() {
                const value = this._buffView.getInt8(this._seekPos);
                this._seekPos += 1;
                return value;
              }
              readInt16() {
                const value = this._buffView.getInt16(this._seekPos, true);
                this._seekPos += 2;
                return value;
              }
              readInt() {
                const value = this._buffView.getInt32(this._seekPos, true);
                this._seekPos += 4;
                return value;
              }
              readIntArray(value) {
                for (let i = 0; i < value.length; ++i) {
                  value[i] = this._buffView.getInt32(this._seekPos + i * 4, true);
                }
                this._seekPos += 4 * value.length;
                return value;
              }
              readFloat() {
                const value = this._buffView.getFloat32(this._seekPos, true);
                this._seekPos += 4;
                return value;
              }
              readFloatArray(value) {
                for (let i = 0; i < value.length; ++i) {
                  value[i] = this._buffView.getFloat32(this._seekPos + i * 4, true);
                }
                this._seekPos += 4 * value.length;
                return value;
              }
              readDouble() {
                const value = this._buffView.getFloat64(this._seekPos, true);
                this._seekPos += 8;
                return value;
              }
              readDoubleArray(value) {
                for (let i = 0; i < value.length; ++i) {
                  value[i] = this._buffView.getFloat64(this._seekPos + i * 4, true);
                }
                this._seekPos += 8 * value.length;
                return value;
              }
              readString() {
                const length = this.readInt();
                let value = '';
                for (let i = 0; i < length; ++i) {
                  value += String.fromCharCode(this.readInt8());
                }
                return value;
              }
            }
            let TerrainLayerInfo = exports('e', (_dec = ccclass('cc.TerrainLayerInfo'), _dec(_class2 = (_class3 = class TerrainLayerInfo {
              constructor() {
                this.slot = _initializer && _initializer();
                this.tileSize = _initializer2 && _initializer2();
                this.detailMap = _initializer3 && _initializer3();
                this.normalMap = _initializer4 && _initializer4();
                this.roughness = _initializer5 && _initializer5();
                this.metallic = _initializer6 && _initializer6();
              }
            }, (_initializer = applyDecoratedInitializer(_class3.prototype, "slot", [serializable], function () {
              return 0;
            }), _initializer2 = applyDecoratedInitializer(_class3.prototype, "tileSize", [serializable], function () {
              return 1;
            }), _initializer3 = applyDecoratedInitializer(_class3.prototype, "detailMap", [serializable], function () {
              return null;
            }), _initializer4 = applyDecoratedInitializer(_class3.prototype, "normalMap", [serializable], function () {
              return null;
            }), _initializer5 = applyDecoratedInitializer(_class3.prototype, "roughness", [serializable], function () {
              return 1;
            }), _initializer6 = applyDecoratedInitializer(_class3.prototype, "metallic", [serializable], function () {
              return 0;
            })), _class3)) || _class2));
            let TerrainLayerBinaryInfo = exports('z', (_dec2 = ccclass('cc.TerrainLayerBinaryInfo'), _dec2(_class5 = class TerrainLayerBinaryInfo {
              constructor() {
                this.slot = 0;
                this.tileSize = 1;
                this.roughness = 1;
                this.metallic = 0;
                this.detailMapId = '';
                this.normalMapId = '';
              }
            }) || _class5));
            let TerrainAsset = exports('T', (_dec3 = ccclass('cc.TerrainAsset'), _dec3(_class7 = (_class8 = class TerrainAsset extends Asset {
              constructor() {
                super();
                this._version = 0;
                this._data = null;
                this._tileSize = 1;
                this._blockCount = [1, 1];
                this._weightMapSize = 128;
                this._lightMapSize = 128;
                this._heights = new Uint16Array();
                this._normals = new Float32Array();
                this._weights = new Uint8Array();
                this._layerBuffer = [-1, -1, -1, -1];
                this._layerBinaryInfos = [];
                this._layerInfos = _initializer7 && _initializer7();
              }
              get _nativeAsset() {
                return this._data.buffer;
              }
              set _nativeAsset(value) {
                if (this._data && this._data.byteLength === value.byteLength) {
                  this._data.set(new Uint8Array(value));
                } else {
                  this._data = new Uint8Array(value);
                }
                this._loadNativeData(this._data);
              }
              get version() {
                return this._version;
              }
              set tileSize(value) {
                this._tileSize = value;
              }
              get tileSize() {
                return this._tileSize;
              }
              set blockCount(value) {
                this._blockCount = value;
              }
              get blockCount() {
                return this._blockCount;
              }
              set lightMapSize(value) {
                this._lightMapSize = value;
              }
              get lightMapSize() {
                return this._lightMapSize;
              }
              set weightMapSize(value) {
                this._weightMapSize = value;
              }
              get weightMapSize() {
                return this._weightMapSize;
              }
              set heights(value) {
                this._heights = value;
              }
              get heights() {
                return this._heights;
              }
              set normals(value) {
                this._normals = value;
              }
              get normals() {
                return this._normals;
              }
              set weights(value) {
                this._weights = value;
              }
              get weights() {
                return this._weights;
              }
              set layerBuffer(value) {
                this._layerBuffer = value;
              }
              get layerBuffer() {
                return this._layerBuffer;
              }
              set layerInfos(value) {
                this._layerInfos = value;
              }
              get layerInfos() {
                return this._layerInfos;
              }
              get layerBinaryInfos() {
                return this._layerBinaryInfos;
              }
              getLayer(xBlock, yBlock, layerId) {
                const blockId = yBlock * this.blockCount[0] + xBlock;
                const index = blockId * 4 + layerId;
                if (xBlock < this.blockCount[0] && yBlock < this.blockCount[1] && index < this._layerBuffer.length) {
                  return this._layerBuffer[index];
                }
                return -1;
              }
              getHeight(i, j) {
                const vertexCountX = this._blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY + 1;
                return (this._heights[j * vertexCountX + i] - TERRAIN_HEIGHT_BASE) * TERRAIN_HEIGHT_FACTORY;
              }
              getVertexCountI() {
                if (this._blockCount.length < 1) return 0;
                return this._blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY + 1;
              }
              getVertexCountJ() {
                if (this._blockCount.length < 2) return 0;
                return this._blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY + 1;
              }
              _setNativeData(_nativeData) {
                this._data = _nativeData;
              }
              _loadNativeData(_nativeData) {
                if (!_nativeData || _nativeData.length === 0) {
                  return false;
                }
                const stream = new TerrainBuffer();
                stream.assign(_nativeData);
                this._version = stream.readInt();
                if (this._version === TERRAIN_DATA_VERSION_DEFAULT) {
                  return true;
                }
                if (this._version !== TERRAIN_DATA_VERSION && this._version !== TERRAIN_DATA_VERSION2 && this._version !== TERRAIN_DATA_VERSION3 && this._version !== TERRAIN_DATA_VERSION4 && this._version !== TERRAIN_DATA_VERSION5 && this._version !== TERRAIN_DATA_VERSION6 && this._version !== TERRAIN_DATA_VERSION7 && this._version !== TERRAIN_DATA_VERSION8) {
                  return false;
                }
                if (this._version >= TERRAIN_DATA_VERSION7) {
                  this.tileSize = stream.readDouble();
                } else {
                  this.tileSize = stream.readFloat();
                }
                this.tileSize = Math.floor(this.tileSize * 100) / 100.0;
                stream.readIntArray(this._blockCount);
                this.weightMapSize = stream.readInt16();
                this.lightMapSize = stream.readInt16();
                const heightBufferSize = stream.readInt();
                this.heights = new Uint16Array(heightBufferSize);
                for (let i = 0; i < this.heights.length; ++i) {
                  this.heights[i] = stream.readInt16();
                }
                if (this._version < TERRAIN_DATA_VERSION8) {
                  for (let i = 0; i < this.heights.length; ++i) {
                    const h = (this._heights[i] - TERRAIN_HEIGHT_BASE) * TERRAIN_HEIGHT_FACTORY_V7;
                    const ch = TERRAIN_HEIGHT_BASE + h / TERRAIN_HEIGHT_FACTORY;
                    this.heights[i] = ch;
                  }
                }
                if (this._version >= TERRAIN_DATA_VERSION6) {
                  const normalBufferSize = stream.readInt();
                  this.normals = new Float32Array(normalBufferSize);
                  for (let i = 0; i < this.normals.length; ++i) {
                    this.normals[i] = stream.readFloat();
                  }
                }
                const WeightBufferSize = stream.readInt();
                this.weights = new Uint8Array(WeightBufferSize);
                for (let i = 0; i < this.weights.length; ++i) {
                  this.weights[i] = stream.readInt8();
                }
                if (this._version >= TERRAIN_DATA_VERSION2) {
                  const layerBufferSize = stream.readInt();
                  this.layerBuffer = new Array(layerBufferSize);
                  for (let i = 0; i < this.layerBuffer.length; ++i) {
                    this.layerBuffer[i] = stream.readInt16();
                  }
                }
                if (this._version >= TERRAIN_DATA_VERSION3) {
                  const layerInfoSize = stream.readInt();
                  this._layerBinaryInfos = new Array(layerInfoSize);
                  for (let i = 0; i < this._layerBinaryInfos.length; ++i) {
                    this._layerBinaryInfos[i] = new TerrainLayerBinaryInfo();
                    this._layerBinaryInfos[i].slot = stream.readInt();
                    if (this._version >= TERRAIN_DATA_VERSION7) {
                      this._layerBinaryInfos[i].tileSize = stream.readDouble();
                    } else {
                      this._layerBinaryInfos[i].tileSize = stream.readFloat();
                    }
                    this._layerBinaryInfos[i].detailMapId = stream.readString();
                    if (this._version >= TERRAIN_DATA_VERSION4) {
                      this._layerBinaryInfos[i].normalMapId = stream.readString();
                      if (this._version >= TERRAIN_DATA_VERSION7) {
                        this._layerBinaryInfos[i].roughness = stream.readDouble();
                        this._layerBinaryInfos[i].metallic = stream.readDouble();
                      } else {
                        this._layerBinaryInfos[i].roughness = stream.readFloat();
                        this._layerBinaryInfos[i].metallic = stream.readFloat();
                      }
                    }
                  }
                }
                return true;
              }
              _exportNativeData() {
                const stream = new TerrainBuffer();
                stream.writeInt32(TERRAIN_DATA_VERSION8);
                stream.writeDouble(this.tileSize);
                stream.writeIntArray(this._blockCount);
                stream.writeInt16(this.weightMapSize);
                stream.writeInt16(this.lightMapSize);
                stream.writeInt32(this.heights.length);
                for (let i = 0; i < this.heights.length; ++i) {
                  stream.writeInt16(this.heights[i]);
                }
                stream.writeInt32(this.normals.length);
                for (let i = 0; i < this.normals.length; ++i) {
                  stream.writeFloat(this.normals[i]);
                }
                stream.writeInt32(this.weights.length);
                for (let i = 0; i < this.weights.length; ++i) {
                  stream.writeInt8(this.weights[i]);
                }
                stream.writeInt32(this.layerBuffer.length);
                for (let i = 0; i < this.layerBuffer.length; ++i) {
                  stream.writeInt16(this.layerBuffer[i]);
                }
                const layerBinaryInfos = [];
                layerBinaryInfos.length = this.layerInfos.length;
                for (let i = 0; i < layerBinaryInfos.length; ++i) {
                  const layer = this.layerInfos[i];
                  const binaryLayer = new TerrainLayerBinaryInfo();
                  binaryLayer.slot = i;
                  binaryLayer.tileSize = layer.tileSize;
                  binaryLayer.detailMapId = layer.detailMap ? layer.detailMap._uuid : '';
                  binaryLayer.normalMapId = layer.normalMap ? layer.normalMap._uuid : '';
                  binaryLayer.metallic = layer.metallic;
                  binaryLayer.roughness = layer.roughness;
                  layerBinaryInfos[i] = binaryLayer;
                }
                stream.writeInt32(layerBinaryInfos.length);
                for (let i = 0; i < layerBinaryInfos.length; ++i) {
                  stream.writeInt32(layerBinaryInfos[i].slot);
                  stream.writeDouble(layerBinaryInfos[i].tileSize);
                  stream.writeString(layerBinaryInfos[i].detailMapId);
                  stream.writeString(layerBinaryInfos[i].normalMapId);
                  stream.writeDouble(layerBinaryInfos[i].roughness);
                  stream.writeDouble(layerBinaryInfos[i].metallic);
                }
                return stream.buffer;
              }
              _exportDefaultNativeData() {
                const stream = new TerrainBuffer();
                stream.writeInt32(TERRAIN_DATA_VERSION_DEFAULT);
                return stream.buffer;
              }
            }, (_initializer7 = applyDecoratedInitializer(_class8.prototype, "_layerInfos", [serializable], function () {
              return [];
            })), _class8)) || _class7));

        })
    };
}));
