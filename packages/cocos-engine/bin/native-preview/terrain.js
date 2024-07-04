System.register(['./index-ce98320e.js', './node-event-18d96a1b.js', './builtin-res-mgr.jsb-c9e8e53a.js', './director-dc238483.js', './model-renderer-f8d2f66d.js', './rendering-sub-mesh.jsb-25043997.js', './scene-asset.jsb-0d4c6201.js', './find-7a03d1cc.js', './deprecated-80961f27.js', './renderer-3bf7a012.js', './terrain-asset-debe117c.js', './device-90bc7390.js', './decorators-b63b63a2.js', './touch-af62e326.js', './pipeline-sub-state.jsb-f3a5cc2c.js'], (function (exports) {
    'use strict';
    var clamp, ccclass, applyDecoratedInitializer, type, disallowMultiple, Size, serializable, Vec3, CCObject, legacyCC, Vec4, Rect, Vec2, CCFloat, isValid, _applyDecoratedDescriptor, Component, Node, Model, builtinResMgr, WrapMode, Texture2D, PixelFormat, Filter, EffectAsset, Material, MobilityMode, director, PipelineEventType, ModelRenderer, RenderingSubMesh, deviceManager, TERRAIN_BLOCK_TILE_COMPLEXITY, TERRAIN_BLOCK_VERTEX_SIZE, TERRAIN_BLOCK_VERTEX_COMPLEXITY, TerrainAsset, TERRAIN_MAX_LAYER_COUNT, TerrainLayerInfo, TERRAIN_HEIGHT_FMAX, TERRAIN_HEIGHT_FMIN, TERRAIN_HEIGHT_BASE, TERRAIN_HEIGHT_FACTORY, TERRAIN_MAX_BLEND_LAYERS, TERRAIN_DATA_VERSION5, BufferInfo, BufferUsageBit, MemoryUsageBit, Attribute, AttributeName, Format, PrimitiveMode;
    return {
        setters: [function (module) {
            clamp = module.F;
            ccclass = module.by;
            applyDecoratedInitializer = module.bx;
            type = module.bw;
            disallowMultiple = module.ck;
            Size = module.S;
            serializable = module.bf;
            Vec3 = module.n;
            CCObject = module.as;
            legacyCC = module.l;
            Vec4 = module.p;
            Rect = module.R;
            Vec2 = module.V;
            CCFloat = module.au;
            isValid = module.bm;
        }, function (module) {
            _applyDecoratedDescriptor = module.H;
            Component = module.C;
        }, function (module) {
            Node = module.Q;
            Model = module.a;
            builtinResMgr = module.at;
            WrapMode = module.aT;
            Texture2D = module.am;
            PixelFormat = module.aS;
            Filter = module.aR;
            EffectAsset = module.ao;
            Material = module.ap;
            MobilityMode = module._;
        }, function (module) {
            director = module.n;
            PipelineEventType = module.l;
        }, function (module) {
            ModelRenderer = module.M;
        }, function (module) {
            RenderingSubMesh = module.R;
        }, function () {}, function (module) {
            deviceManager = module.d;
        }, function () {}, function () {}, function (module) {
            TERRAIN_BLOCK_TILE_COMPLEXITY = module.a;
            TERRAIN_BLOCK_VERTEX_SIZE = module.b;
            TERRAIN_BLOCK_VERTEX_COMPLEXITY = module.c;
            TerrainAsset = module.T;
            TERRAIN_MAX_LAYER_COUNT = module.d;
            TerrainLayerInfo = module.e;
            TERRAIN_HEIGHT_FMAX = module.f;
            TERRAIN_HEIGHT_FMIN = module.g;
            TERRAIN_HEIGHT_BASE = module.h;
            TERRAIN_HEIGHT_FACTORY = module.i;
            TERRAIN_MAX_BLEND_LAYERS = module.j;
            TERRAIN_DATA_VERSION5 = module.k;
            exports({ TERRAIN_BLOCK_TILE_COMPLEXITY: module.a, TERRAIN_BLOCK_VERTEX_COMPLEXITY: module.c, TERRAIN_BLOCK_VERTEX_SIZE: module.b, TERRAIN_DATA_VERSION: module.r, TERRAIN_DATA_VERSION2: module.s, TERRAIN_DATA_VERSION3: module.t, TERRAIN_DATA_VERSION4: module.u, TERRAIN_DATA_VERSION5: module.k, TERRAIN_DATA_VERSION6: module.v, TERRAIN_DATA_VERSION7: module.w, TERRAIN_DATA_VERSION8: module.x, TERRAIN_DATA_VERSION_DEFAULT: module.y, TERRAIN_EAST_INDEX: module.q, TERRAIN_HEIGHT_BASE: module.h, TERRAIN_HEIGHT_FACTORY: module.i, TERRAIN_HEIGHT_FACTORY_V7: module.m, TERRAIN_HEIGHT_FMAX: module.f, TERRAIN_HEIGHT_FMIN: module.g, TERRAIN_MAX_BLEND_LAYERS: module.j, TERRAIN_MAX_LAYER_COUNT: module.d, TERRAIN_MAX_LEVELS: module.l, TERRAIN_NORTH_INDEX: module.n, TERRAIN_SOUTH_INDEX: module.o, TERRAIN_WEST_INDEX: module.p, TerrainAsset: module.T, TerrainLayerBinaryInfo: module.z, TerrainLayerInfo: module.e });
        }, function (module) {
            BufferInfo = module.a7;
            BufferUsageBit = module.B;
            MemoryUsageBit = module.e;
            Attribute = module.ao;
            AttributeName = module.aN;
            Format = module.b;
            PrimitiveMode = module.u;
        }, function () {}, function () {}, function () {}],
        execute: (function () {

            class HeightField {
              constructor(w, h) {
                this.data = new Uint16Array();
                this.w = 0;
                this.h = 0;
                this.w = w;
                this.h = h;
                this.data = new Uint16Array(w * h);
                for (let i = 0; i < w * h; ++i) {
                  this.data[i] = 0;
                }
              }
              set(i, j, value) {
                this.data[j * this.w + i] = value;
              }
              get(i, j) {
                return this.data[j * this.w + i];
              }
              getClamp(i, j) {
                i = clamp(i, 0, this.w - 1);
                j = clamp(j, 0, this.h - 1);
                return this.get(i, j);
              }
              getAt(x, y) {
                const fx = x;
                const fy = y;
                let ix0 = Math.floor(fx);
                let iz0 = Math.floor(fy);
                let ix1 = ix0 + 1;
                let iz1 = iz0 + 1;
                const dx = fx - ix0;
                const dz = fy - iz0;
                ix0 = clamp(ix0, 0, this.w - 1);
                iz0 = clamp(iz0, 0, this.h - 1);
                ix1 = clamp(ix1, 0, this.w - 1);
                iz1 = clamp(iz1, 0, this.h - 1);
                let a = this.get(ix0, iz0);
                const b = this.get(ix1, iz0);
                const c = this.get(ix0, iz1);
                let d = this.get(ix1, iz1);
                const m = (b + c) * 0.5;
                if (dx + dz <= 1.0) {
                  d = m + (m - a);
                } else {
                  a = m + (m - d);
                }
                const h1 = a * (1.0 - dx) + b * dx;
                const h2 = c * (1.0 - dx) + d * dx;
                const h = h1 * (1.0 - dz) + h2 * dz;
                return h;
              }
            } exports('HeightField', HeightField);

            const TERRAIN_LOD_VERTS = 33;
            const TERRAIN_LOD_TILES = 32;
            const TERRAIN_LOD_LEVELS = 4;
            const TERRAIN_LOD_NORTH_INDEX = 0;
            const TERRAIN_LOD_SOUTH_INDEX = 1;
            const TERRAIN_LOD_WEST_INDEX = 2;
            const TERRAIN_LOD_EAST_INDEX = 3;
            const TERRAIN_LOD_MAX_DISTANCE = 100000000000000.0;
            class TerrainLodKey {
              constructor() {
                this.level = 0;
                this.north = 0;
                this.south = 0;
                this.west = 0;
                this.east = 0;
              }
              equals(rk) {
                return this.level === rk.level && this.north === rk.north && this.south === rk.south && this.west === rk.west && this.east === rk.east;
              }
            }
            class TerrainIndexPool {
              constructor() {
                this.size = 0;
                this.indices = null;
              }
            }
            class TerrainIndexData {
              constructor() {
                this.key = new TerrainLodKey();
                this.start = 0;
                this.size = 0;
                this.buffer = null;
                this.primCount = 0;
              }
            }
            class TerrainLod {
              static mapIndex(i, j, k) {
                return i * (TERRAIN_LOD_LEVELS * TERRAIN_LOD_LEVELS) + j * TERRAIN_LOD_LEVELS + k;
              }
              constructor() {
                this._bodyIndexPool = void 0;
                this._connecterIndexPool = void 0;
                this._indexMap = [];
                this._indexBuffer = new Uint16Array();
                this._bodyIndexPool = new Array(TERRAIN_LOD_LEVELS);
                for (let i = 0; i < TERRAIN_LOD_LEVELS; ++i) {
                  this._bodyIndexPool[i] = new TerrainIndexPool();
                }
                this._connecterIndexPool = new Array(TERRAIN_LOD_LEVELS * TERRAIN_LOD_LEVELS * 4);
                for (let i = 0; i < TERRAIN_LOD_LEVELS; ++i) {
                  for (let j = 0; j < TERRAIN_LOD_LEVELS; ++j) {
                    for (let k = 0; k < 4; ++k) {
                      this._connecterIndexPool[TerrainLod.mapIndex(i, j, k)] = new TerrainIndexPool();
                    }
                  }
                }
                for (let i = 0; i < TERRAIN_LOD_LEVELS; ++i) {
                  this._genBodyIndex(i);
                }
                for (let i = 0; i < TERRAIN_LOD_LEVELS; ++i) {
                  for (let j = 0; j < TERRAIN_LOD_LEVELS; ++j) {
                    this._genConnecterIndexNorth(i, j);
                    this._genConnecterIndexSouth(i, j);
                    this._genConnecterIndexWest(i, j);
                    this._genConnecterIndexEast(i, j);
                  }
                }
                const levels = TERRAIN_LOD_LEVELS;
                for (let l = 0; l < levels; ++l) {
                  for (let n = 0; n < levels; ++n) {
                    if (n < l) {
                      continue;
                    }
                    for (let s = 0; s < levels; ++s) {
                      if (s < l) {
                        continue;
                      }
                      for (let w = 0; w < levels; ++w) {
                        if (w < l) {
                          continue;
                        }
                        for (let e = 0; e < levels; ++e) {
                          if (e < l) {
                            continue;
                          }
                          const k = new TerrainLodKey();
                          k.level = l;
                          k.north = n;
                          k.south = s;
                          k.west = w;
                          k.east = e;
                          this._genIndexData(k);
                        }
                      }
                    }
                  }
                }
              }
              getIndexData(k) {
                for (let i = 0; i < this._indexMap.length; ++i) {
                  if (this._indexMap[i].key.equals(k)) {
                    return this._indexMap[i];
                  }
                }
                return null;
              }
              _genBodyIndex(level) {
                const step = 1 << level;
                let tiles = TERRAIN_LOD_TILES >> level;
                let start = 0;
                if (level < TERRAIN_LOD_LEVELS - 1) {
                  tiles -= 2;
                  start = step * TERRAIN_LOD_VERTS + step;
                }
                if (tiles === 0 || tiles === 0) {
                  return;
                }
                const count = tiles * tiles * 6;
                this._bodyIndexPool[level].indices = new Uint16Array(count);
                let index = 0;
                const indices = new Uint16Array(count);
                let row_c = start;
                let row_n = row_c + TERRAIN_LOD_VERTS * step;
                for (let y = 0; y < tiles; ++y) {
                  for (let x = 0; x < tiles; ++x) {
                    indices[index++] = row_n + x * step;
                    indices[index++] = row_n + (x + 1) * step;
                    indices[index++] = row_c + x * step;
                    indices[index++] = row_n + (x + 1) * step;
                    indices[index++] = row_c + (x + 1) * step;
                    indices[index++] = row_c + x * step;
                  }
                  row_c += TERRAIN_LOD_VERTS * step;
                  row_n += TERRAIN_LOD_VERTS * step;
                }
                this._bodyIndexPool[level].size = index;
                this._bodyIndexPool[level].indices = indices;
              }
              _genConnecterIndexNorth(level, connecter) {
                const connecterIndex = TerrainLod.mapIndex(level, connecter, TERRAIN_LOD_NORTH_INDEX);
                if (connecter < level || level === TERRAIN_LOD_LEVELS - 1) {
                  this._connecterIndexPool[connecterIndex].size = 0;
                  this._connecterIndexPool[connecterIndex].indices = null;
                  return;
                }
                const self_step = 1 << level;
                const neighbor_step = 1 << connecter;
                const self_tile = TERRAIN_LOD_TILES >> level;
                const count = self_tile * 2 + 2;
                let index = 0;
                const indices = new Uint16Array(count);
                indices[index++] = 0;
                indices[index++] = 0;
                for (let i = 1; i < self_tile; ++i) {
                  const x1 = i * self_step;
                  const y1 = self_step;
                  const x0 = x1 / neighbor_step * neighbor_step;
                  const y0 = y1 - self_step;
                  const index0 = y1 * TERRAIN_LOD_VERTS + x1;
                  const index1 = y0 * TERRAIN_LOD_VERTS + x0;
                  indices[index++] = index0;
                  indices[index++] = index1;
                }
                indices[index++] = TERRAIN_LOD_VERTS - 1;
                indices[index++] = TERRAIN_LOD_VERTS - 1;
                this._connecterIndexPool[connecterIndex].size = index;
                this._connecterIndexPool[connecterIndex].indices = indices;
              }
              _genConnecterIndexSouth(level, connecter) {
                const connecterIndex = TerrainLod.mapIndex(level, connecter, TERRAIN_LOD_SOUTH_INDEX);
                if (connecter < level || level === TERRAIN_LOD_LEVELS - 1) {
                  this._connecterIndexPool[connecterIndex].size = 0;
                  this._connecterIndexPool[connecterIndex].indices = null;
                  return;
                }
                const self_step = 1 << level;
                const neighbor_step = 1 << connecter;
                const self_tile = TERRAIN_LOD_TILES >> level;
                const count = self_tile * 2 + 2;
                let index = 0;
                const indices = new Uint16Array(count);
                indices[index++] = TERRAIN_LOD_TILES * TERRAIN_LOD_VERTS;
                indices[index++] = TERRAIN_LOD_TILES * TERRAIN_LOD_VERTS;
                for (let i = 1; i < self_tile; ++i) {
                  const x0 = i * self_step;
                  const y0 = TERRAIN_LOD_VERTS - 1 - self_step;
                  const x1 = x0 / neighbor_step * neighbor_step;
                  const y1 = y0 + self_step;
                  const index0 = y1 * TERRAIN_LOD_VERTS + x1;
                  const index1 = y0 * TERRAIN_LOD_VERTS + x0;
                  indices[index++] = index0;
                  indices[index++] = index1;
                }
                indices[index++] = TERRAIN_LOD_VERTS * TERRAIN_LOD_VERTS - 1;
                indices[index++] = TERRAIN_LOD_VERTS * TERRAIN_LOD_VERTS - 1;
                this._connecterIndexPool[connecterIndex].size = index;
                this._connecterIndexPool[connecterIndex].indices = indices;
              }
              _genConnecterIndexWest(level, connecter) {
                const connecterIndex = TerrainLod.mapIndex(level, connecter, TERRAIN_LOD_WEST_INDEX);
                if (connecter < level || level === TERRAIN_LOD_LEVELS - 1) {
                  this._connecterIndexPool[connecterIndex].size = 0;
                  this._connecterIndexPool[connecterIndex].indices = null;
                  return;
                }
                const self_step = 1 << level;
                const neighbor_step = 1 << connecter;
                const self_tile = TERRAIN_LOD_TILES >> level;
                const count = self_tile * 2 + 2;
                let index = 0;
                const indices = new Uint16Array(count);
                indices[index++] = 0;
                indices[index++] = 0;
                for (let i = 1; i < self_tile; ++i) {
                  const x0 = 0;
                  const y0 = i * self_step / neighbor_step * neighbor_step;
                  const x1 = self_step;
                  const y1 = i * self_step;
                  const index0 = y0 * TERRAIN_LOD_VERTS + x0;
                  const index1 = y1 * TERRAIN_LOD_VERTS + x1;
                  indices[index++] = index0;
                  indices[index++] = index1;
                }
                indices[index++] = TERRAIN_LOD_TILES * TERRAIN_LOD_VERTS;
                indices[index++] = TERRAIN_LOD_TILES * TERRAIN_LOD_VERTS;
                this._connecterIndexPool[connecterIndex].size = index;
                this._connecterIndexPool[connecterIndex].indices = indices;
              }
              _genConnecterIndexEast(level, connecter) {
                const connecterIndex = TerrainLod.mapIndex(level, connecter, TERRAIN_LOD_EAST_INDEX);
                if (connecter < level || level === TERRAIN_LOD_LEVELS - 1) {
                  this._connecterIndexPool[connecterIndex].size = 0;
                  this._connecterIndexPool[connecterIndex].indices = null;
                  return;
                }
                const self_step = 1 << level;
                const neighbor_step = 1 << connecter;
                const self_tile = TERRAIN_LOD_TILES >> level;
                const count = self_tile * 2 + 2;
                let index = 0;
                const indices = new Uint16Array(count);
                indices[index++] = TERRAIN_LOD_VERTS - 1;
                indices[index++] = TERRAIN_LOD_VERTS - 1;
                for (let i = 1; i < self_tile; ++i) {
                  const x0 = TERRAIN_LOD_VERTS - 1 - self_step;
                  const y0 = i * self_step;
                  const x1 = TERRAIN_LOD_VERTS - 1;
                  const y1 = i * self_step / neighbor_step * neighbor_step;
                  const index0 = y0 * TERRAIN_LOD_VERTS + x0;
                  const index1 = y1 * TERRAIN_LOD_VERTS + x1;
                  indices[index++] = index0;
                  indices[index++] = index1;
                }
                indices[index++] = TERRAIN_LOD_VERTS * TERRAIN_LOD_VERTS - 1;
                indices[index++] = TERRAIN_LOD_VERTS * TERRAIN_LOD_VERTS - 1;
                this._connecterIndexPool[connecterIndex].size = index;
                this._connecterIndexPool[connecterIndex].indices = indices;
              }
              _getConnenterIndex(i, j, k) {
                return this._connecterIndexPool[TerrainLod.mapIndex(i, j, k)];
              }
              _genIndexData(k) {
                let data = this.getIndexData(k);
                if (data != null) {
                  return data;
                }
                const body = this._bodyIndexPool[k.level];
                const north = this._getConnenterIndex(k.level, k.north, TERRAIN_LOD_NORTH_INDEX);
                const south = this._getConnenterIndex(k.level, k.south, TERRAIN_LOD_SOUTH_INDEX);
                const west = this._getConnenterIndex(k.level, k.west, TERRAIN_LOD_WEST_INDEX);
                const east = this._getConnenterIndex(k.level, k.east, TERRAIN_LOD_EAST_INDEX);
                data = new TerrainIndexData();
                data.size = 0;
                data.primCount = 0;
                if (body.indices != null) {
                  data.size += body.size;
                }
                if (north.indices) {
                  data.size += (north.size - 2) * 3;
                }
                if (south.indices) {
                  data.size += (south.size - 2) * 3;
                }
                if (west.indices) {
                  data.size += (west.size - 2) * 3;
                }
                if (east.indices) {
                  data.size += (east.size - 2) * 3;
                }
                if (data.size === 0) {
                  return null;
                }
                let index = 0;
                data.buffer = new Uint16Array(data.size);
                data.key.level = k.level;
                data.key.east = k.east;
                data.key.west = k.west;
                data.key.north = k.north;
                data.key.south = k.south;
                if (body.indices) {
                  for (let i = 0; i < body.size; ++i) {
                    data.buffer[index++] = body.indices[i];
                  }
                }
                if (north.indices) {
                  for (let i = 0; i < north.size - 2; i += 2) {
                    const a = north.indices[i + 0];
                    const b = north.indices[i + 1];
                    const c = north.indices[i + 2];
                    const d = north.indices[i + 3];
                    data.buffer[index++] = a;
                    data.buffer[index++] = c;
                    data.buffer[index++] = b;
                    data.buffer[index++] = c;
                    data.buffer[index++] = d;
                    data.buffer[index++] = b;
                  }
                }
                if (south.indices) {
                  for (let i = 0; i < south.size - 2; i += 2) {
                    const a = south.indices[i + 0];
                    const b = south.indices[i + 1];
                    const c = south.indices[i + 2];
                    const d = south.indices[i + 3];
                    data.buffer[index++] = a;
                    data.buffer[index++] = c;
                    data.buffer[index++] = b;
                    data.buffer[index++] = c;
                    data.buffer[index++] = d;
                    data.buffer[index++] = b;
                  }
                }
                if (west.indices) {
                  for (let i = 0; i < west.size - 2; i += 2) {
                    const a = west.indices[i + 0];
                    const b = west.indices[i + 1];
                    const c = west.indices[i + 2];
                    const d = west.indices[i + 3];
                    data.buffer[index++] = a;
                    data.buffer[index++] = c;
                    data.buffer[index++] = b;
                    data.buffer[index++] = c;
                    data.buffer[index++] = d;
                    data.buffer[index++] = b;
                  }
                }
                if (east.indices) {
                  for (let i = 0; i < east.size - 2; i += 2) {
                    const a = east.indices[i + 0];
                    const b = east.indices[i + 1];
                    const c = east.indices[i + 2];
                    const d = east.indices[i + 3];
                    data.buffer[index++] = a;
                    data.buffer[index++] = c;
                    data.buffer[index++] = b;
                    data.buffer[index++] = c;
                    data.buffer[index++] = d;
                    data.buffer[index++] = b;
                  }
                }
                data.primCount = index / 3;
                data.start = this._indexBuffer.length;
                this._indexMap.push(data);
                const temp = new Uint16Array(data.start + data.size);
                temp.set(this._indexBuffer, 0);
                temp.set(data.buffer, data.start);
                this._indexBuffer = temp;
                return data;
              }
            }

            var _dec, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _dec2, _class4, _class5, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _dec3, _class8, _class9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class12, _class13, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _initializer22;
            const TERRAIN_EFFECT_UUID = '1d08ef62-a503-4ce2-8b9a-46c90873f7d3';
            let TerrainInfo = exports('TerrainInfo', (_dec = ccclass('cc.TerrainInfo'), _dec(_class = (_class2 = class TerrainInfo {
              constructor() {
                this.tileSize = _initializer && _initializer();
                this.blockCount = _initializer2 && _initializer2();
                this.weightMapSize = _initializer3 && _initializer3();
                this.lightMapSize = _initializer4 && _initializer4();
              }
              get size() {
                const sz = new Size(0, 0);
                sz.width = this.blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY * this.tileSize;
                sz.height = this.blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY * this.tileSize;
                return sz;
              }
              get tileCount() {
                const _tileCount = [0, 0];
                _tileCount[0] = this.blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY;
                _tileCount[1] = this.blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY;
                return _tileCount;
              }
              get vertexCount() {
                const _vertexCount = this.tileCount;
                _vertexCount[0] += 1;
                _vertexCount[1] += 1;
                return _vertexCount;
              }
            }, (_initializer = applyDecoratedInitializer(_class2.prototype, "tileSize", [serializable], function () {
              return 1;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "blockCount", [serializable], function () {
              return [1, 1];
            }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "weightMapSize", [serializable], function () {
              return 128;
            }), _initializer4 = applyDecoratedInitializer(_class2.prototype, "lightMapSize", [serializable], function () {
              return 128;
            })), _class2)) || _class));
            let TerrainLayer = exports('TerrainLayer', (_dec2 = ccclass('cc.TerrainLayer'), _dec2(_class4 = (_class5 = class TerrainLayer {
              constructor() {
                this.detailMap = _initializer5 && _initializer5();
                this.normalMap = _initializer6 && _initializer6();
                this.tileSize = _initializer7 && _initializer7();
                this.metallic = _initializer8 && _initializer8();
                this.roughness = _initializer9 && _initializer9();
              }
            }, (_initializer5 = applyDecoratedInitializer(_class5.prototype, "detailMap", [serializable], function () {
              return null;
            }), _initializer6 = applyDecoratedInitializer(_class5.prototype, "normalMap", [serializable], function () {
              return null;
            }), _initializer7 = applyDecoratedInitializer(_class5.prototype, "tileSize", [serializable], function () {
              return 1;
            }), _initializer8 = applyDecoratedInitializer(_class5.prototype, "metallic", [serializable], function () {
              return 0;
            }), _initializer9 = applyDecoratedInitializer(_class5.prototype, "roughness", [serializable], function () {
              return 1;
            })), _class5)) || _class4));
            class TerrainRenderable extends ModelRenderer {
              constructor(...args) {
                super(...args);
                this._model = null;
                this._meshData = null;
                this._brushPass = null;
                this._brushMaterial = null;
                this._currentMaterial = null;
                this._currentMaterialLayers = 0;
                this._lightmap = null;
              }
              destroy() {
                if (this._model != null) {
                  legacyCC.director.root.destroyModel(this._model);
                  this._model = null;
                }
                return super.destroy();
              }
              _destroyModel() {
                if (this._model != null) {
                  legacyCC.director.root.destroyModel(this._model);
                  this._model = null;
                }
                if (this._meshData != null) {
                  this._meshData.destroy();
                  this._meshData = null;
                }
              }
              _invalidMaterial() {
                if (this._currentMaterial == null) {
                  return;
                }
                this._clearMaterials();
                this._brushPass = null;
                this._currentMaterial = null;
                if (this._model != null) {
                  this._model.enabled = false;
                }
              }
              _updateMaterial(block, init) {
                if (this._meshData == null || this._model == null) {
                  return false;
                }
                const nLayers = block.getMaxLayer();
                if (this._currentMaterial == null || nLayers !== this._currentMaterialLayers) {
                  this._currentMaterial = new Material();
                  this._currentMaterial.initialize({
                    effectAsset: block.getTerrain().getEffectAsset(),
                    defines: block._getMaterialDefines(nLayers)
                  });
                  if (this._brushMaterial !== null) {
                    const brushMaterialInstance = new Material();
                    brushMaterialInstance.copy(this._brushMaterial);
                    this._brushPass = null;
                    if (brushMaterialInstance.passes !== null && brushMaterialInstance.passes.length > 0) {
                      this._brushPass = brushMaterialInstance.passes[0];
                      const passes = this._currentMaterial.passes;
                      passes.push(this._brushPass);
                      brushMaterialInstance.passes.pop();
                    }
                  }
                  if (init) {
                    this._model.initSubModel(0, this._meshData, this._currentMaterial);
                  }
                  this.setSharedMaterial(this._currentMaterial, 0);
                  this._currentMaterialLayers = nLayers;
                  this._model.enabled = true;
                  this._model.receiveShadow = block.getTerrain().receiveShadow;
                  return true;
                }
                return false;
              }
              _updateLightingmap(texture, uvParam) {
                if (this._model == null) {
                  return;
                }
                this._lightmap = texture;
                this._updateReceiveDirLight();
                this._model.updateLightingmap(texture, uvParam);
              }
              _onMaterialModified(idx, mtl) {
                if (this._model == null) {
                  return;
                }
                this._onRebuildPSO(idx, mtl || this._getBuiltinMaterial());
              }
              _onRebuildPSO(idx, material) {
                if (this._model) {
                  this._model.setSubModelMaterial(idx, material);
                }
              }
              _clearMaterials() {
                if (this._model == null) {
                  return;
                }
                this._onMaterialModified(0, null);
              }
              _onUpdateReceiveDirLight(visibility, forceClose = false) {
                if (!this._model) {
                  return;
                }
                if (forceClose) {
                  this._model.receiveDirLight = false;
                  return;
                }
                if (this.node && (visibility & this.node.layer) === this.node.layer || visibility & this._model.visFlags) {
                  this._model.receiveDirLight = true;
                } else {
                  this._model.receiveDirLight = false;
                }
              }
              _updateReceiveDirLight() {
                const scene = this.node.scene;
                if (!scene || !scene.renderScene) {
                  return;
                }
                const mainLight = scene.renderScene.mainLight;
                if (!mainLight) {
                  return;
                }
                const visibility = mainLight.visibility;
                if (!mainLight.node) {
                  return;
                }
                if (mainLight.node.mobility === MobilityMode.Static && this._lightmap) {
                  this._onUpdateReceiveDirLight(visibility, true);
                } else {
                  this._onUpdateReceiveDirLight(visibility);
                }
              }
              _getBuiltinMaterial() {
                return builtinResMgr.get('missing-material');
              }
            }
            let TerrainBlockLightmapInfo = exports('TerrainBlockLightmapInfo', (_dec3 = ccclass('cc.TerrainBlockLightmapInfo'), _dec3(_class8 = (_class9 = class TerrainBlockLightmapInfo {
              constructor() {
                this.texture = _initializer10 && _initializer10();
                this.UOff = _initializer11 && _initializer11();
                this.VOff = _initializer12 && _initializer12();
                this.UScale = _initializer13 && _initializer13();
                this.VScale = _initializer14 && _initializer14();
              }
            }, (_initializer10 = applyDecoratedInitializer(_class9.prototype, "texture", [serializable], function () {
              return null;
            }), _initializer11 = applyDecoratedInitializer(_class9.prototype, "UOff", [serializable], function () {
              return 0;
            }), _initializer12 = applyDecoratedInitializer(_class9.prototype, "VOff", [serializable], function () {
              return 0;
            }), _initializer13 = applyDecoratedInitializer(_class9.prototype, "UScale", [serializable], function () {
              return 0;
            }), _initializer14 = applyDecoratedInitializer(_class9.prototype, "VScale", [serializable], function () {
              return 0;
            })), _class9)) || _class8));
            class TerrainBlock {
              constructor(t, i, j) {
                this._terrain = void 0;
                this._node = void 0;
                this._renderable = void 0;
                this._index = [1, 1];
                this._weightMap = null;
                this._lightmapInfo = null;
                this._lodLevel = 0;
                this._lodKey = new TerrainLodKey();
                this._errorMetrics = [0, 0, 0, 0];
                this._LevelDistances = [TERRAIN_LOD_MAX_DISTANCE, TERRAIN_LOD_MAX_DISTANCE, TERRAIN_LOD_MAX_DISTANCE, TERRAIN_LOD_MAX_DISTANCE];
                this._bbMin = new Vec3();
                this._bbMax = new Vec3();
                this._terrain = t;
                this._index[0] = i;
                this._index[1] = j;
                this._lightmapInfo = t._getLightmapInfo(i, j);
                this._node = new Node('TerrainBlock');
                this._node.setParent(this._terrain.node);
                this._node.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
                this._node.layer = this._terrain.node.layer;
                this._renderable = this._node.addComponent(TerrainRenderable);
              }
              build() {
                const gfxDevice = director.root.device;
                const vertexData = new Float32Array(TERRAIN_BLOCK_VERTEX_SIZE * TERRAIN_BLOCK_VERTEX_COMPLEXITY * TERRAIN_BLOCK_VERTEX_COMPLEXITY);
                this._buildVertexData(vertexData);
                const vertexBuffer = gfxDevice.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, TERRAIN_BLOCK_VERTEX_SIZE * Float32Array.BYTES_PER_ELEMENT * TERRAIN_BLOCK_VERTEX_COMPLEXITY * TERRAIN_BLOCK_VERTEX_COMPLEXITY, TERRAIN_BLOCK_VERTEX_SIZE * Float32Array.BYTES_PER_ELEMENT));
                vertexBuffer.update(vertexData);
                this._buildBoundingBox();
                const gfxAttributes = [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_NORMAL, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RG32F)];
                this._renderable._meshData = new RenderingSubMesh([vertexBuffer], gfxAttributes, PrimitiveMode.TRIANGLE_LIST, this._terrain._getSharedIndexBuffer(), null, false);
                this._renderable._model = legacyCC.director.root.createModel(Model);
                this._renderable._model.createBoundingShape(this._bbMin, this._bbMax);
                this._renderable._model.node = this._renderable._model.transform = this._node;
                if (this._renderable.node.scene != null) {
                  this.visible = true;
                }
                this._updateWeightMap();
                this._updateMaterial(true);
                if (this._terrain.lodEnable) {
                  this._updateLodBuffer(vertexData);
                  this._updateIndexBuffer();
                }
              }
              rebuild() {
                this._updateHeight();
                this._updateWeightMap();
                this._renderable._invalidMaterial();
                this._updateMaterial(false);
              }
              destroy() {
                this.visible = false;
                this._renderable._destroyModel();
                if (this._node != null && this._node.isValid) {
                  this._node.destroy();
                }
                if (this._weightMap != null) {
                  this._weightMap.destroy();
                }
              }
              update() {
                this._updateMaterial(false);
                if (this.lightmap !== this._renderable._lightmap) {
                  this._renderable._updateLightingmap(this.lightmap, this.lightmapUVParam);
                }
                const useNormalMap = this._terrain.useNormalMap;
                const usePBR = this._terrain.usePBR;
                const getDetailTex = layer => {
                  return layer !== null ? layer.detailMap : null;
                };
                const getNormalTex = layer => {
                  let normalTex = layer !== null ? layer.normalMap : null;
                  if (normalTex === null) {
                    normalTex = builtinResMgr.get('normal-texture');
                  }
                  return normalTex;
                };
                const mtl = this._renderable._currentMaterial;
                if (mtl !== null) {
                  const nLayers = this.getMaxLayer();
                  const uvScale = new Vec4(1, 1, 1, 1);
                  const roughness = new Vec4(1, 1, 1, 1);
                  const metallic = new Vec4(0, 0, 0, 0);
                  if (nLayers === 0) {
                    if (this.layers[0] !== -1) {
                      const l0 = this._terrain.getLayer(this.layers[0]);
                      if (l0 !== null) {
                        uvScale.x = 1.0 / l0.tileSize;
                        roughness.x = l0.roughness;
                        metallic.x = l0.metallic;
                      }
                      mtl.setProperty('detailMap0', getDetailTex(l0));
                      if (useNormalMap) {
                        mtl.setProperty('normalMap0', getNormalTex(l0));
                      }
                    } else {
                      mtl.setProperty('detailMap0', builtinResMgr.get('default-texture'));
                      if (useNormalMap) {
                        mtl.setProperty('normalMap0', builtinResMgr.get('normal-texture'));
                      }
                    }
                  } else if (nLayers === 1) {
                    const l0 = this._terrain.getLayer(this.layers[0]);
                    const l1 = this._terrain.getLayer(this.layers[1]);
                    if (l0 !== null) {
                      uvScale.x = 1.0 / l0.tileSize;
                      roughness.x = l0.roughness;
                      metallic.x = l0.metallic;
                    }
                    if (l1 !== null) {
                      uvScale.y = 1.0 / l1.tileSize;
                      roughness.y = l1.roughness;
                      metallic.y = l1.metallic;
                    }
                    mtl.setProperty('weightMap', this._weightMap);
                    mtl.setProperty('detailMap0', getDetailTex(l0));
                    mtl.setProperty('detailMap1', getDetailTex(l1));
                    if (useNormalMap) {
                      mtl.setProperty('normalMap0', getNormalTex(l0));
                      mtl.setProperty('normalMap1', getNormalTex(l1));
                    }
                  } else if (nLayers === 2) {
                    const l0 = this._terrain.getLayer(this.layers[0]);
                    const l1 = this._terrain.getLayer(this.layers[1]);
                    const l2 = this._terrain.getLayer(this.layers[2]);
                    if (l0 !== null) {
                      uvScale.x = 1.0 / l0.tileSize;
                      roughness.x = l0.roughness;
                      metallic.x = l0.metallic;
                    }
                    if (l1 !== null) {
                      uvScale.y = 1.0 / l1.tileSize;
                      roughness.y = l1.roughness;
                      metallic.y = l1.metallic;
                    }
                    if (l2 !== null) {
                      uvScale.z = 1.0 / l2.tileSize;
                      roughness.z = l2.roughness;
                      metallic.z = l2.metallic;
                    }
                    mtl.setProperty('weightMap', this._weightMap);
                    mtl.setProperty('detailMap0', getDetailTex(l0));
                    mtl.setProperty('detailMap1', getDetailTex(l1));
                    mtl.setProperty('detailMap2', getDetailTex(l2));
                    if (useNormalMap) {
                      mtl.setProperty('normalMap0', getNormalTex(l0));
                      mtl.setProperty('normalMap1', getNormalTex(l1));
                      mtl.setProperty('normalMap2', getNormalTex(l2));
                    }
                  } else if (nLayers === 3) {
                    const l0 = this._terrain.getLayer(this.layers[0]);
                    const l1 = this._terrain.getLayer(this.layers[1]);
                    const l2 = this._terrain.getLayer(this.layers[2]);
                    const l3 = this._terrain.getLayer(this.layers[3]);
                    if (l0 !== null) {
                      uvScale.x = 1.0 / l0.tileSize;
                      roughness.x = l0.roughness;
                      metallic.x = l0.metallic;
                    }
                    if (l1 !== null) {
                      uvScale.y = 1.0 / l1.tileSize;
                      roughness.y = l1.roughness;
                      metallic.y = l1.metallic;
                    }
                    if (l2 !== null) {
                      uvScale.z = 1.0 / l2.tileSize;
                      roughness.z = l2.roughness;
                      metallic.z = l2.metallic;
                    }
                    if (l3 !== null) {
                      uvScale.w = 1.0 / l3.tileSize;
                      roughness.w = l3.roughness;
                      metallic.w = l3.metallic;
                    }
                    mtl.setProperty('weightMap', this._weightMap);
                    mtl.setProperty('detailMap0', getDetailTex(l0));
                    mtl.setProperty('detailMap1', getDetailTex(l1));
                    mtl.setProperty('detailMap2', getDetailTex(l2));
                    mtl.setProperty('detailMap3', getDetailTex(l3));
                    if (useNormalMap) {
                      mtl.setProperty('normalMap0', getNormalTex(l0));
                      mtl.setProperty('normalMap1', getNormalTex(l1));
                      mtl.setProperty('normalMap2', getNormalTex(l2));
                      mtl.setProperty('normalMap3', getNormalTex(l3));
                    }
                  }
                  mtl.setProperty('UVScale', uvScale);
                  if (usePBR) {
                    mtl.setProperty('roughness', roughness);
                    mtl.setProperty('metallic', metallic);
                  }
                }
              }
              _buildLodInfo() {
                const vertexData = new Float32Array(TERRAIN_BLOCK_VERTEX_SIZE * TERRAIN_BLOCK_VERTEX_COMPLEXITY * TERRAIN_BLOCK_VERTEX_COMPLEXITY);
                this._buildVertexData(vertexData);
                this._updateLodBuffer(vertexData);
                this._updateIndexBuffer();
              }
              _updateLevel(camPos) {
                const maxLevel = TERRAIN_LOD_LEVELS - 1;
                const bbMin = new Vec3();
                const bbMax = new Vec3();
                Vec3.add(bbMin, this._bbMin, this._terrain.node.getWorldPosition());
                Vec3.add(bbMax, this._bbMax, this._terrain.node.getWorldPosition());
                const d1 = Vec3.distance(bbMin, camPos);
                const d2 = Vec3.distance(bbMax, camPos);
                let d = Math.min(d1, d2);
                d -= this._terrain.LodBias;
                this._lodLevel = 0;
                while (this._lodLevel < maxLevel) {
                  const ld1 = this._LevelDistances[this._lodLevel + 1];
                  if (d <= ld1) {
                    break;
                  }
                  ++this._lodLevel;
                }
              }
              setBrushMaterial(mtl) {
                if (this._renderable._brushMaterial !== mtl) {
                  this._renderable._invalidMaterial();
                  this._renderable._brushMaterial = mtl;
                }
              }
              _getBrushMaterial() {
                return this._renderable ? this._renderable._brushMaterial : null;
              }
              _getBrushPass() {
                return this._renderable ? this._renderable._brushPass : null;
              }
              get valid() {
                if (this._terrain === null) {
                  return false;
                }
                const blocks = this._terrain.getBlocks();
                for (let i = 0; i < blocks.length; ++i) {
                  if (blocks[i] === this) {
                    return true;
                  }
                }
                return false;
              }
              get material() {
                return this._renderable ? this._renderable._currentMaterial : null;
              }
              get layers() {
                return this._terrain.getBlockLayers(this._index[0], this._index[1]);
              }
              get weightmap() {
                return this._weightMap;
              }
              get lightmap() {
                return this._lightmapInfo ? this._lightmapInfo.texture : null;
              }
              get lightmapUVParam() {
                if (this._lightmapInfo != null) {
                  return new Vec4(this._lightmapInfo.UOff, this._lightmapInfo.VOff, this._lightmapInfo.UScale, this._lightmapInfo.VScale);
                }
                return new Vec4(0, 0, 0, 0);
              }
              set visible(val) {
                if (this._renderable._model !== null) {
                  if (val) {
                    if (this._terrain.node != null && this._terrain.node.scene != null && this._terrain.node.scene.renderScene != null && this._renderable._model.scene == null) {
                      this._terrain.node.scene.renderScene.addModel(this._renderable._model);
                    }
                  } else if (this._renderable._model.scene !== null) {
                    this._renderable._model.scene.removeModel(this._renderable._model);
                  }
                }
              }
              get visible() {
                if (this._renderable._model !== null) {
                  return this._renderable._model.scene !== null;
                }
                return false;
              }
              getTerrain() {
                return this._terrain;
              }
              getIndex() {
                return this._index;
              }
              getRect() {
                const rect = new Rect();
                rect.x = this._index[0] * TERRAIN_BLOCK_TILE_COMPLEXITY;
                rect.y = this._index[1] * TERRAIN_BLOCK_TILE_COMPLEXITY;
                rect.width = TERRAIN_BLOCK_TILE_COMPLEXITY;
                rect.height = TERRAIN_BLOCK_TILE_COMPLEXITY;
                return rect;
              }
              setLayer(index, layerId) {
                if (this.layers[index] !== layerId) {
                  this._terrain.setBlockLayer(this._index[0], this._index[1], index, layerId);
                  this._renderable._invalidMaterial();
                  this._updateMaterial(false);
                }
              }
              getLayer(index) {
                return this.layers[index];
              }
              getMaxLayer() {
                if (this.layers[3] >= 0) {
                  return 3;
                }
                if (this.layers[2] >= 0) {
                  return 2;
                }
                if (this.layers[1] >= 0) {
                  return 1;
                }
                return 0;
              }
              _getMaterialDefines(nLayers) {
                let lightmapMacroValue = 1;
                if (this._terrain.node && this._terrain.node.scene) {
                  if (this._terrain.node.scene.globals.bakedWithStationaryMainLight) {
                    lightmapMacroValue = 2;
                  }
                }
                return {
                  LAYERS: nLayers + 1,
                  CC_USE_LIGHTMAP: this.lightmap !== null ? lightmapMacroValue : 0,
                  USE_NORMALMAP: this._terrain.useNormalMap ? 1 : 0,
                  USE_PBR: this._terrain.usePBR ? 1 : 0
                };
              }
              _invalidMaterial() {
                this._renderable._invalidMaterial();
              }
              _updateMaterial(init) {
                if (this._renderable._updateMaterial(this, init)) {
                  if (this.lightmap !== null) {
                    this.lightmap.setWrapMode(WrapMode.CLAMP_TO_BORDER, WrapMode.CLAMP_TO_BORDER);
                  }
                  this._renderable._updateLightingmap(this.lightmap, this.lightmapUVParam);
                }
              }
              _updateHeight() {
                if (this._renderable._meshData == null) {
                  return;
                }
                const vertexData = new Float32Array(TERRAIN_BLOCK_VERTEX_SIZE * TERRAIN_BLOCK_VERTEX_COMPLEXITY * TERRAIN_BLOCK_VERTEX_COMPLEXITY);
                this._buildVertexData(vertexData);
                this._renderable._meshData.vertexBuffers[0].update(vertexData);
                this._buildBoundingBox();
                this._renderable._model.createBoundingShape(this._bbMin, this._bbMax);
                this._renderable._model.updateWorldBound();
                this._updateLodBuffer(vertexData);
                this._updateIndexBuffer();
              }
              _updateWeightMap() {
                const nLayers = this.getMaxLayer();
                if (nLayers === 0) {
                  if (this._weightMap != null) {
                    this._weightMap.destroy();
                    this._weightMap = null;
                  }
                  return;
                }
                if (this._weightMap == null) {
                  this._weightMap = new Texture2D();
                  this._weightMap.create(this._terrain.weightMapSize, this._terrain.weightMapSize, PixelFormat.RGBA8888);
                  this._weightMap.setFilters(Filter.LINEAR, Filter.LINEAR);
                  this._weightMap.setWrapMode(WrapMode.CLAMP_TO_EDGE, WrapMode.CLAMP_TO_EDGE);
                }
                const weightData = new Uint8Array(this._terrain.weightMapSize * this._terrain.weightMapSize * 4);
                let weightIndex = 0;
                for (let j = 0; j < this._terrain.weightMapSize; ++j) {
                  for (let i = 0; i < this._terrain.weightMapSize; ++i) {
                    const x = this._index[0] * this._terrain.weightMapSize + i;
                    const y = this._index[1] * this._terrain.weightMapSize + j;
                    const w = this._terrain.getWeight(x, y);
                    weightData[weightIndex * 4 + 0] = Math.floor(w.x * 255);
                    weightData[weightIndex * 4 + 1] = Math.floor(w.y * 255);
                    weightData[weightIndex * 4 + 2] = Math.floor(w.z * 255);
                    weightData[weightIndex * 4 + 3] = Math.floor(w.w * 255);
                    weightIndex += 1;
                  }
                }
                this._weightMap.uploadData(weightData);
              }
              _updateLightmap(info) {
                this._lightmapInfo = info;
                this._invalidMaterial();
              }
              _updateLod() {
                const key = new TerrainLodKey();
                key.level = this._lodLevel;
                key.north = this._lodLevel;
                key.south = this._lodLevel;
                key.west = this._lodLevel;
                key.east = this._lodLevel;
                if (this._index[0] > 0) {
                  const n = this.getTerrain().getBlock(this._index[0] - 1, this._index[1]);
                  key.west = n._lodLevel;
                  if (key.west < this._lodLevel) {
                    key.west = this._lodLevel;
                  }
                }
                if (this._index[0] < this._terrain.info.blockCount[0] - 1) {
                  const n = this.getTerrain().getBlock(this._index[0] + 1, this._index[1]);
                  key.east = n._lodLevel;
                  if (key.east < this._lodLevel) {
                    key.east = this._lodLevel;
                  }
                }
                if (this._index[1] > 0) {
                  const n = this.getTerrain().getBlock(this._index[0], this._index[1] - 1);
                  key.north = n._lodLevel;
                  if (key.north < this._lodLevel) {
                    key.north = this._lodLevel;
                  }
                }
                if (this._index[1] < this._terrain.info.blockCount[1] - 1) {
                  const n = this.getTerrain().getBlock(this._index[0], this._index[1] + 1);
                  key.south = n._lodLevel;
                  if (key.south < this._lodLevel) {
                    key.south = this._lodLevel;
                  }
                }
                if (this._lodKey.equals(key)) {
                  return;
                }
                this._lodKey = key;
                this._updateIndexBuffer();
              }
              _resetLod() {
                const key = new TerrainLodKey();
                key.level = 0;
                key.north = 0;
                key.south = 0;
                key.west = 0;
                key.east = 0;
                if (this._lodKey.equals(key)) {
                  return;
                }
                this._lodKey = key;
                this._updateIndexBuffer();
              }
              _updateIndexBuffer() {
                if (this._renderable._meshData === null) {
                  return;
                }
                if (this._renderable._model === null) {
                  return;
                }
                if (this._renderable._model.subModels.length === 0) {
                  return;
                }
                const indexData = this._terrain._getIndexData(this._lodKey);
                if (indexData === null) {
                  return;
                }
                const model = this._renderable._model.subModels[0];
                model.inputAssembler.firstIndex = indexData.start;
                model.inputAssembler.indexCount = indexData.size;
              }
              _getHeight(x, y, verts) {
                const idx = TERRAIN_BLOCK_VERTEX_COMPLEXITY * y + x;
                return verts[idx * TERRAIN_BLOCK_VERTEX_SIZE + 1];
              }
              _updateLodBuffer(vertices) {
                this._lodLevel = 0;
                this._lodKey = new TerrainLodKey();
                this._calcErrorMetrics(vertices);
                this._calcLevelDistances(vertices);
              }
              _calcErrorMetrics(vertices) {
                this._errorMetrics[0] = 0;
                for (let i = 1; i < TERRAIN_LOD_LEVELS; ++i) {
                  this._errorMetrics[i] = this._calcErrorMetric(i, vertices);
                }
                for (let i = 2; i < TERRAIN_LOD_LEVELS; ++i) {
                  this._errorMetrics[i] = Math.max(this._errorMetrics[i], this._errorMetrics[i - 1]);
                }
              }
              _calcErrorMetric(level, vertices) {
                let err = 0.0;
                const step = 1 << level;
                const xSectionVertices = TERRAIN_BLOCK_VERTEX_COMPLEXITY;
                const ySectionVertices = TERRAIN_BLOCK_VERTEX_COMPLEXITY;
                const xSides = xSectionVertices - 1 >> level;
                const ySides = ySectionVertices - 1 >> level;
                for (let y = 0; y < ySectionVertices; y += step) {
                  for (let x = 0; x < xSides; ++x) {
                    const x0 = x * step;
                    const x1 = x0 + step;
                    const xm = (x1 + x0) / 2;
                    const h0 = this._getHeight(x0, y, vertices);
                    const h1 = this._getHeight(x1, y, vertices);
                    const hm = this._getHeight(xm, y, vertices);
                    const hmi = (h0 + h1) / 2;
                    const delta = Math.abs(hm - hmi);
                    err = Math.max(err, delta);
                  }
                }
                for (let x = 0; x < xSectionVertices; x += step) {
                  for (let y = 0; y < ySides; ++y) {
                    const y0 = y * step;
                    const y1 = y0 + step;
                    const ym = (y0 + y1) / 2;
                    const h0 = this._getHeight(x, y0, vertices);
                    const h1 = this._getHeight(x, y1, vertices);
                    const hm = this._getHeight(x, ym, vertices);
                    const hmi = (h0 + h1) / 2;
                    const delta = Math.abs(hm - hmi);
                    err = Math.max(err, delta);
                  }
                }
                for (let y = 0; y < ySides; ++y) {
                  const y0 = y * step;
                  const y1 = y0 + step;
                  const ym = (y0 + y1) / 2;
                  for (let x = 0; x < xSides; ++x) {
                    const x0 = x * step;
                    const x1 = x0 + step;
                    const xm = (x0 + x1) / 2;
                    const h0 = this._getHeight(x0, y0, vertices);
                    const h1 = this._getHeight(x1, y1, vertices);
                    const hm = this._getHeight(xm, ym, vertices);
                    const hmi = (h0 + h1) / 2;
                    const delta = Math.abs(hm - hmi);
                    err = Math.max(err, delta);
                  }
                }
                return err;
              }
              _calcLevelDistances(vertices) {
                const pixelErr = 4;
                const resolution = 768;
                const c = 1.0 / (2 * pixelErr / resolution);
                for (let i = 1; i < TERRAIN_LOD_LEVELS; ++i) {
                  const e = this._errorMetrics[i];
                  const d = e * c;
                  this._LevelDistances[i] = d;
                }
              }
              _buildVertexData(vertexData) {
                let index = 0;
                for (let j = 0; j < TERRAIN_BLOCK_VERTEX_COMPLEXITY; ++j) {
                  for (let i = 0; i < TERRAIN_BLOCK_VERTEX_COMPLEXITY; ++i) {
                    const x = this._index[0] * TERRAIN_BLOCK_TILE_COMPLEXITY + i;
                    const y = this._index[1] * TERRAIN_BLOCK_TILE_COMPLEXITY + j;
                    const position = this._terrain.getPosition(x, y);
                    const normal = this._terrain.getNormal(x, y);
                    const uv = new Vec2(i / TERRAIN_BLOCK_TILE_COMPLEXITY, j / TERRAIN_BLOCK_TILE_COMPLEXITY);
                    vertexData[index++] = position.x;
                    vertexData[index++] = position.y;
                    vertexData[index++] = position.z;
                    vertexData[index++] = normal.x;
                    vertexData[index++] = normal.y;
                    vertexData[index++] = normal.z;
                    vertexData[index++] = uv.x;
                    vertexData[index++] = uv.y;
                  }
                }
              }
              _buildBoundingBox() {
                this._bbMin.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
                this._bbMax.set(Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE);
                for (let j = 0; j < TERRAIN_BLOCK_VERTEX_COMPLEXITY; ++j) {
                  for (let i = 0; i < TERRAIN_BLOCK_VERTEX_COMPLEXITY; ++i) {
                    const x = this._index[0] * TERRAIN_BLOCK_TILE_COMPLEXITY + i;
                    const y = this._index[1] * TERRAIN_BLOCK_TILE_COMPLEXITY + j;
                    const position = this._terrain.getPosition(x, y);
                    Vec3.min(this._bbMin, this._bbMin, position);
                    Vec3.max(this._bbMax, this._bbMax, position);
                  }
                }
              }
            } exports('TerrainBlock', TerrainBlock);
            let Terrain = exports('Terrain', (_dec4 = ccclass('cc.Terrain'), _dec5 = type(TerrainAsset), _dec6 = type(EffectAsset), _dec7 = type(TerrainBlockLightmapInfo), _dec8 = type(CCFloat), _dec9 = type(TerrainAsset), _dec10 = type(EffectAsset), _dec11 = type(TerrainInfo), _dec4(_class12 = disallowMultiple(_class12 = (_class13 = class Terrain extends Component {
              constructor() {
                super();
                this.__asset = _initializer15 && _initializer15();
                this._effectAsset = _initializer16 && _initializer16();
                this._lightmapInfos = _initializer17 && _initializer17();
                this._receiveShadow = _initializer18 && _initializer18();
                this._useNormalmap = _initializer19 && _initializer19();
                this._usePBR = _initializer20 && _initializer20();
                this._lodEnable = _initializer21 && _initializer21();
                this._lodBias = _initializer22 && _initializer22();
                this._buitinAsset = null;
                this._tileSize = 1;
                this._blockCount = [1, 1];
                this._weightMapSize = 128;
                this._lightMapSize = 128;
                this._heights = new Uint16Array();
                this._weights = new Uint8Array();
                this._normals = new Float32Array();
                this._layerList = [];
                this._layerBuffer = [];
                this._blocks = [];
                this._lod = null;
                this._sharedIndexBuffer = null;
                this._sharedLodIndexBuffer = null;
                for (let i = 0; i < TERRAIN_MAX_LAYER_COUNT; ++i) {
                  this._layerList.push(null);
                }
              }
              set _asset(value) {
                this.__asset = value;
                if (this._buitinAsset !== this.__asset) {
                  this._buitinAsset = this.__asset;
                  for (let i = 0; i < this._blocks.length; ++i) {
                    this._blocks[i].destroy();
                  }
                  this._blocks = [];
                  if (this.__asset === null) {
                    this._effectAsset = null;
                    this._lightmapInfos = [];
                    this._receiveShadow = false;
                    this._useNormalmap = false;
                    this._usePBR = false;
                    this._tileSize = 1;
                    this._blockCount = [1, 1];
                    this._weightMapSize = 128;
                    this._lightMapSize = 128;
                    this._heights = new Uint16Array();
                    this._weights = new Uint8Array();
                    this._normals = new Float32Array();
                    this._layerBuffer = [];
                    this._blocks = [];
                    this._layerList = [];
                    for (let i = 0; i < TERRAIN_MAX_LAYER_COUNT; ++i) {
                      this._layerList.push(null);
                    }
                  }
                  if (deviceManager.gfxDevice) {
                    this._buildImp();
                  }
                }
              }
              get _asset() {
                return this.__asset;
              }
              set effectAsset(value) {
                if (this._effectAsset === value) {
                  return;
                }
                this._effectAsset = value;
                for (let i = 0; i < this._blocks.length; ++i) {
                  this._blocks[i]._invalidMaterial();
                }
              }
              get effectAsset() {
                return this._effectAsset;
              }
              get receiveShadow() {
                return this._receiveShadow;
              }
              set receiveShadow(val) {
                this._receiveShadow = val;
                for (let i = 0; i < this._blocks.length; i++) {
                  this._blocks[i]._invalidMaterial();
                }
              }
              get useNormalMap() {
                return this._useNormalmap;
              }
              set useNormalMap(val) {
                this._useNormalmap = val;
                for (let i = 0; i < this._blocks.length; i++) {
                  this._blocks[i]._invalidMaterial();
                }
              }
              get usePBR() {
                return this._usePBR;
              }
              set usePBR(val) {
                this._usePBR = val;
                for (let i = 0; i < this._blocks.length; i++) {
                  this._blocks[i]._invalidMaterial();
                }
              }
              get lodEnable() {
                return this._lodEnable;
              }
              set lodEnable(val) {
                this._lodEnable = val;
                if (this._lodEnable && this._lod === null) {
                  this._lod = new TerrainLod();
                  if (this._sharedLodIndexBuffer === null) {
                    this._sharedLodIndexBuffer = this._createSharedIndexBuffer();
                  }
                  for (let i = 0; i < this._blocks.length; ++i) {
                    this._blocks[i].destroy();
                  }
                  this._blocks = [];
                  for (let j = 0; j < this._blockCount[1]; ++j) {
                    for (let i = 0; i < this._blockCount[0]; ++i) {
                      this._blocks.push(new TerrainBlock(this, i, j));
                    }
                  }
                  for (let i = 0; i < this._blocks.length; ++i) {
                    this._blocks[i].build();
                  }
                }
                if (!this._lodEnable) {
                  for (let i = 0; i < this._blocks.length; i++) {
                    this._blocks[i]._resetLod();
                  }
                }
              }
              get LodBias() {
                return this._lodBias;
              }
              set LodBias(val) {
                this._lodBias = val;
              }
              get size() {
                const sz = new Size(0, 0);
                sz.width = this.blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY * this.tileSize;
                sz.height = this.blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY * this.tileSize;
                return sz;
              }
              get tileSize() {
                return this._tileSize;
              }
              get tileCount() {
                return [this.blockCount[0] * TERRAIN_BLOCK_TILE_COMPLEXITY, this.blockCount[1] * TERRAIN_BLOCK_TILE_COMPLEXITY];
              }
              get vertexCount() {
                const _vertexCount = this.tileCount;
                _vertexCount[0] += 1;
                _vertexCount[1] += 1;
                return _vertexCount;
              }
              get blockCount() {
                return this._blockCount;
              }
              get lightMapSize() {
                return this._lightMapSize;
              }
              get weightMapSize() {
                return this._weightMapSize;
              }
              get heights() {
                return this._heights;
              }
              get weights() {
                return this._weights;
              }
              get valid() {
                return this._blocks.length > 0;
              }
              get info() {
                const ti = new TerrainInfo();
                ti.tileSize = this.tileSize;
                ti.blockCount[0] = this.blockCount[0];
                ti.blockCount[1] = this.blockCount[1];
                ti.weightMapSize = this.weightMapSize;
                ti.lightMapSize = this.lightMapSize;
                return ti;
              }
              build(info) {
                this._tileSize = info.tileSize;
                this._blockCount[0] = info.blockCount[0];
                this._blockCount[1] = info.blockCount[1];
                this._weightMapSize = info.weightMapSize;
                this._lightMapSize = info.lightMapSize;
                return this._buildImp();
              }
              rebuild(info) {
                for (let i = 0; i < this._blocks.length; ++i) {
                  this._blocks[i].destroy();
                }
                this._blocks = [];
                this._resetLightmap(false);
                this._rebuildLayerBuffer(info);
                const heightsChanged = this._rebuildHeights(info);
                this._rebuildWeights(info);
                this._tileSize = info.tileSize;
                this._blockCount[0] = info.blockCount[0];
                this._blockCount[1] = info.blockCount[1];
                this._weightMapSize = info.weightMapSize;
                this._lightMapSize = info.lightMapSize;
                if (heightsChanged) {
                  this._normals = new Float32Array(this.heights.length * 3);
                  this._buildNormals();
                }
                for (let j = 0; j < this._blockCount[1]; ++j) {
                  for (let i = 0; i < this._blockCount[0]; ++i) {
                    this._blocks.push(new TerrainBlock(this, i, j));
                  }
                }
                for (let i = 0; i < this._blocks.length; ++i) {
                  this._blocks[i].build();
                }
              }
              importHeightField(hf, heightScale) {
                let index = 0;
                for (let j = 0; j < this.vertexCount[1]; ++j) {
                  for (let i = 0; i < this.vertexCount[0]; ++i) {
                    const u = i / this.tileCount[0];
                    const v = j / this.tileCount[1];
                    const h = hf.getAt(u * hf.w, v * hf.h) * heightScale;
                    this._heights[index++] = h;
                  }
                }
                this._buildNormals();
                for (let i = 0; i < this._blocks.length; ++i) {
                  this._blocks[i]._updateHeight();
                }
              }
              exportHeightField(hf, heightScale) {
                let index = 0;
                for (let j = 0; j < hf.h; ++j) {
                  for (let i = 0; i < hf.w; ++i) {
                    const u = i / (hf.w - 1);
                    const v = j / (hf.h - 1);
                    const x = u * this.size.width;
                    const y = v * this.size.height;
                    const h = this.getHeightAt(x, y);
                    if (h != null) {
                      hf.data[index++] = h * heightScale;
                    }
                  }
                }
              }
              exportAsset() {
                const asset = new TerrainAsset();
                asset.tileSize = this.tileSize;
                asset.blockCount = this.blockCount;
                asset.lightMapSize = this.lightMapSize;
                asset.weightMapSize = this.weightMapSize;
                asset.heights = this.heights;
                asset.weights = this.weights;
                asset.layerBuffer = new Array(this._blocks.length * 4);
                for (let i = 0; i < this._blocks.length; ++i) {
                  asset.layerBuffer[i * 4 + 0] = this._blocks[i].layers[0];
                  asset.layerBuffer[i * 4 + 1] = this._blocks[i].layers[1];
                  asset.layerBuffer[i * 4 + 2] = this._blocks[i].layers[2];
                  asset.layerBuffer[i * 4 + 3] = this._blocks[i].layers[3];
                }
                this.exportLayerListToAsset(asset);
                return asset;
              }
              exportLayerListToAsset(asset) {
                asset.layerInfos.length = 0;
                for (let i = 0; i < this._layerList.length; ++i) {
                  const temp = this._layerList[i];
                  if (temp && temp.detailMap && isValid(temp.detailMap)) {
                    const layer = new TerrainLayerInfo();
                    layer.slot = i;
                    layer.tileSize = temp.tileSize;
                    layer.detailMap = temp.detailMap;
                    layer.normalMap = temp.normalMap;
                    layer.metallic = temp.metallic;
                    layer.roughness = temp.roughness;
                    asset.layerInfos.push(layer);
                  }
                }
              }
              getEffectAsset() {
                if (this._effectAsset === null) {
                  return legacyCC.EffectAsset.get(TERRAIN_EFFECT_UUID);
                }
                return this._effectAsset;
              }
              onEnable() {
                if (this._blocks.length === 0) {
                  this._buildImp();
                }
                for (let i = 0; i < this._blocks.length; ++i) {
                  this._blocks[i].visible = true;
                }
                legacyCC.director.root.pipelineEvent.on(PipelineEventType.RENDER_CAMERA_BEGIN, this.onUpdateFromCamera, this);
              }
              onDisable() {
                legacyCC.director.root.pipelineEvent.off(PipelineEventType.RENDER_CAMERA_BEGIN, this.onUpdateFromCamera, this);
                for (let i = 0; i < this._blocks.length; ++i) {
                  this._blocks[i].visible = false;
                }
              }
              onDestroy() {
                for (let i = 0; i < this._blocks.length; ++i) {
                  this._blocks[i].destroy();
                }
                this._blocks = [];
                for (let i = 0; i < this._layerList.length; ++i) {
                  this._layerList[i] = null;
                }
                if (this._sharedIndexBuffer != null) {
                  this._sharedIndexBuffer.destroy();
                }
                if (this._sharedLodIndexBuffer != null) {
                  this._sharedLodIndexBuffer.destroy();
                }
              }
              onRestore() {
                this.onEnable();
                this._buildImp(true);
              }
              update(deltaTime) {
                for (let i = 0; i < this._blocks.length; ++i) {
                  this._blocks[i].update();
                }
              }
              onUpdateFromCamera(cam) {
                if (!this.lodEnable || this._sharedLodIndexBuffer == null) {
                  return;
                }
                if (cam.scene !== this._getRenderScene()) {
                  return;
                }
                for (let i = 0; i < this._blocks.length; ++i) {
                  this._blocks[i]._updateLevel(cam.position);
                }
                for (let i = 0; i < this._blocks.length; ++i) {
                  this._blocks[i]._updateLod();
                }
              }
              addLayer(layer) {
                for (let i = 0; i < this._layerList.length; ++i) {
                  var _this$_layerList$i;
                  if (this._layerList[i] === null || this._layerList[i] && ((_this$_layerList$i = this._layerList[i]) === null || _this$_layerList$i === void 0 ? void 0 : _this$_layerList$i.detailMap) === null) {
                    this._layerList[i] = layer;
                    if (this._asset) {
                      this.exportLayerListToAsset(this._asset);
                    }
                    return i;
                  }
                }
                return -1;
              }
              setLayer(i, layer) {
                this._layerList[i] = layer;
                if (this._asset) {
                  this.exportLayerListToAsset(this._asset);
                }
              }
              removeLayer(id) {
                this._layerList[id] = null;
                if (this._asset) {
                  this.exportLayerListToAsset(this._asset);
                }
              }
              getLayer(id) {
                if (id === -1) {
                  return null;
                }
                return this._layerList[id];
              }
              getPosition(i, j) {
                const x = i * this._tileSize;
                const z = j * this._tileSize;
                const y = this.getHeight(i, j);
                return new Vec3(x, y, z);
              }
              getHeightField() {
                return this._heights;
              }
              setHeight(i, j, h) {
                h = clamp(h, TERRAIN_HEIGHT_FMIN, TERRAIN_HEIGHT_FMAX);
                this._heights[j * this.vertexCount[0] + i] = TERRAIN_HEIGHT_BASE + h / TERRAIN_HEIGHT_FACTORY;
              }
              getHeight(i, j) {
                return (this._heights[j * this.vertexCount[0] + i] - TERRAIN_HEIGHT_BASE) * TERRAIN_HEIGHT_FACTORY;
              }
              getHeightClamp(i, j) {
                i = clamp(i, 0, this.vertexCount[0] - 1);
                j = clamp(j, 0, this.vertexCount[1] - 1);
                return this.getHeight(i, j);
              }
              getHeightAt(x, y) {
                const fx = x / this.tileSize;
                const fy = y / this.tileSize;
                let ix0 = Math.floor(fx);
                let iz0 = Math.floor(fy);
                let ix1 = ix0 + 1;
                let iz1 = iz0 + 1;
                const dx = fx - ix0;
                const dz = fy - iz0;
                if (ix0 < 0 || ix0 > this.vertexCount[0] - 1 || iz0 < 0 || iz0 > this.vertexCount[1] - 1) {
                  return null;
                }
                ix0 = clamp(ix0, 0, this.vertexCount[0] - 1);
                iz0 = clamp(iz0, 0, this.vertexCount[1] - 1);
                ix1 = clamp(ix1, 0, this.vertexCount[0] - 1);
                iz1 = clamp(iz1, 0, this.vertexCount[1] - 1);
                let a = this.getHeight(ix0, iz0);
                const b = this.getHeight(ix1, iz0);
                const c = this.getHeight(ix0, iz1);
                let d = this.getHeight(ix1, iz1);
                const m = (b + c) * 0.5;
                if (dx + dz <= 1.0) {
                  d = m + (m - a);
                } else {
                  a = m + (m - d);
                }
                const h1 = a * (1.0 - dx) + b * dx;
                const h2 = c * (1.0 - dx) + d * dx;
                const h = h1 * (1.0 - dz) + h2 * dz;
                return h;
              }
              _setNormal(i, j, n) {
                const index = j * this.vertexCount[0] + i;
                this._normals[index * 3 + 0] = n.x;
                this._normals[index * 3 + 1] = n.y;
                this._normals[index * 3 + 2] = n.z;
              }
              getNormal(i, j) {
                const index = j * this.vertexCount[0] + i;
                const n = new Vec3();
                n.x = this._normals[index * 3 + 0];
                n.y = this._normals[index * 3 + 1];
                n.z = this._normals[index * 3 + 2];
                return n;
              }
              getNormalAt(x, y) {
                const fx = x / this.tileSize;
                const fy = y / this.tileSize;
                let ix0 = Math.floor(fx);
                let iz0 = Math.floor(fy);
                let ix1 = ix0 + 1;
                let iz1 = iz0 + 1;
                const dx = fx - ix0;
                const dz = fy - iz0;
                if (ix0 < 0 || ix0 > this.vertexCount[0] - 1 || iz0 < 0 || iz0 > this.vertexCount[1] - 1) {
                  return null;
                }
                ix0 = clamp(ix0, 0, this.vertexCount[0] - 1);
                iz0 = clamp(iz0, 0, this.vertexCount[1] - 1);
                ix1 = clamp(ix1, 0, this.vertexCount[0] - 1);
                iz1 = clamp(iz1, 0, this.vertexCount[1] - 1);
                const a = this.getNormal(ix0, iz0);
                const b = this.getNormal(ix1, iz0);
                const c = this.getNormal(ix0, iz1);
                const d = this.getNormal(ix1, iz1);
                const m = new Vec3();
                Vec3.add(m, b, c).multiplyScalar(0.5);
                if (dx + dz <= 1.0) {
                  d.set(m);
                  d.subtract(a);
                  d.add(m);
                } else {
                  a.set(m);
                  a.subtract(d);
                  a.add(m);
                }
                const n1 = new Vec3();
                const n2 = new Vec3();
                const n = new Vec3();
                Vec3.lerp(n1, a, b, dx);
                Vec3.lerp(n2, c, d, dx);
                Vec3.lerp(n, n1, n2, dz);
                return n;
              }
              setWeight(i, j, w) {
                const index = j * this._weightMapSize * this._blockCount[0] + i;
                this._weights[index * 4 + 0] = w.x * 255;
                this._weights[index * 4 + 1] = w.y * 255;
                this._weights[index * 4 + 2] = w.z * 255;
                this._weights[index * 4 + 3] = w.w * 255;
              }
              getWeight(i, j) {
                const index = j * this._weightMapSize * this._blockCount[0] + i;
                const w = new Vec4();
                w.x = this._weights[index * 4 + 0] / 255.0;
                w.y = this._weights[index * 4 + 1] / 255.0;
                w.z = this._weights[index * 4 + 2] / 255.0;
                w.w = this._weights[index * 4 + 3] / 255.0;
                return w;
              }
              getWeightAt(x, y) {
                const uWeightComplexity = this.weightMapSize * this.blockCount[0];
                const vWeightComplexity = this.weightMapSize * this.blockCount[1];
                if (uWeightComplexity === 0 || vWeightComplexity === 0) {
                  return null;
                }
                const fx = x / uWeightComplexity;
                const fy = y / vWeightComplexity;
                let ix0 = Math.floor(fx);
                let iz0 = Math.floor(fy);
                let ix1 = ix0 + 1;
                let iz1 = iz0 + 1;
                const dx = fx - ix0;
                const dz = fy - iz0;
                if (ix0 < 0 || ix0 > uWeightComplexity - 1 || iz0 < 0 || iz0 > vWeightComplexity - 1) {
                  return null;
                }
                ix0 = clamp(ix0, 0, uWeightComplexity - 1);
                iz0 = clamp(iz0, 0, vWeightComplexity - 1);
                ix1 = clamp(ix1, 0, uWeightComplexity - 1);
                iz1 = clamp(iz1, 0, vWeightComplexity - 1);
                let a = this.getWeight(ix0, iz0);
                const b = this.getWeight(ix1, iz0);
                const c = this.getWeight(ix0, iz1);
                let d = this.getWeight(ix1, iz1);
                const m = new Vec4();
                Vec4.add(m, b, c).multiplyScalar(0.5);
                if (dx + dz <= 1.0) {
                  d = new Vec4();
                  Vec4.subtract(d, m, a).add(m);
                } else {
                  a = new Vec4();
                  Vec4.subtract(a, m, d).add(m);
                }
                const n1 = new Vec4();
                const n2 = new Vec4();
                const n = new Vec4();
                Vec4.lerp(n1, a, b, dx);
                Vec4.lerp(n2, c, d, dx);
                Vec4.lerp(n, n1, n2, dz);
                return n;
              }
              getMaxWeightLayerAt(x, y) {
                const uWeightComplexity = this.weightMapSize * this.blockCount[0];
                const vWeightComplexity = this.weightMapSize * this.blockCount[1];
                if (uWeightComplexity === 0 || vWeightComplexity === 0) {
                  return null;
                }
                const fx = x / uWeightComplexity;
                const fy = y / vWeightComplexity;
                const ix0 = Math.floor(fx);
                const iz0 = Math.floor(fy);
                if (ix0 < 0 || ix0 > uWeightComplexity - 1 || iz0 < 0 || iz0 > vWeightComplexity - 1) {
                  return null;
                }
                const w = this.getWeight(ix0, iz0);
                const bx = Math.floor(x / this.weightMapSize);
                const by = Math.floor(y / this.weightMapSize);
                const block = this.getBlock(bx, by);
                let i = 0;
                if (w.y > w[i] && block.getLayer(1) !== -1) {
                  i = 1;
                }
                if (w.y > w[i] && block.getLayer(2) !== -1) {
                  i = 2;
                }
                if (w.z > w[i] && block.getLayer(3) !== -1) {
                  i = 3;
                }
                i = block.getLayer(i);
                return this.getLayer(i);
              }
              getBlockLayers(i, j) {
                const layerIndex = (j * this._blockCount[0] + i) * TERRAIN_MAX_BLEND_LAYERS;
                return [this._layerBuffer[layerIndex], this._layerBuffer[layerIndex + 1], this._layerBuffer[layerIndex + 2], this._layerBuffer[layerIndex + 3]];
              }
              getBlockLayer(i, j, index) {
                const layerIndex = (j * this._blockCount[0] + i) * TERRAIN_MAX_BLEND_LAYERS;
                return this._layerBuffer[layerIndex + index];
              }
              setBlockLayer(i, j, index, layerId) {
                const layerIndex = (j * this._blockCount[0] + i) * TERRAIN_MAX_BLEND_LAYERS;
                this._layerBuffer[layerIndex + index] = layerId;
              }
              getBlock(i, j) {
                return this._blocks[j * this._blockCount[0] + i];
              }
              getBlocks() {
                return this._blocks;
              }
              rayCheck(start, dir, step, worldSpace = true) {
                const MAX_COUNT = 2000;
                const trace = start;
                if (worldSpace) {
                  Vec3.subtract(trace, start, this.node.getWorldPosition());
                }
                const delta = new Vec3();
                delta.set(dir);
                delta.multiplyScalar(step);
                let position = null;
                if (dir.equals(new Vec3(0, 1, 0))) {
                  const y = this.getHeightAt(trace.x, trace.z);
                  if (y != null && trace.y <= y) {
                    position = new Vec3(trace.x, y, trace.z);
                  }
                } else if (dir.equals(new Vec3(0, -1, 0))) {
                  const y = this.getHeightAt(trace.x, trace.z);
                  if (y != null && trace.y >= y) {
                    position = new Vec3(trace.x, y, trace.z);
                  }
                } else {
                  let i = 0;
                  while (i++ < MAX_COUNT) {
                    const y = this.getHeightAt(trace.x, trace.z);
                    if (y != null && trace.y <= y) {
                      break;
                    }
                    trace.add(dir);
                  }
                  while (i++ < MAX_COUNT) {
                    const y = this.getHeightAt(trace.x, trace.z);
                    if (y != null && trace.y <= y) {
                      position = new Vec3(trace.x, y, trace.z);
                      break;
                    }
                    trace.add(delta);
                  }
                }
                return position;
              }
              _createSharedIndexBuffer() {
                const gfxDevice = deviceManager.gfxDevice;
                if (this._lod !== null) {
                  const gfxBuffer = gfxDevice.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, Uint16Array.BYTES_PER_ELEMENT * this._lod._indexBuffer.length, Uint16Array.BYTES_PER_ELEMENT));
                  gfxBuffer.update(this._lod._indexBuffer);
                  return gfxBuffer;
                } else {
                  const indexData = new Uint16Array(TERRAIN_BLOCK_TILE_COMPLEXITY * TERRAIN_BLOCK_TILE_COMPLEXITY * 6);
                  let index = 0;
                  for (let j = 0; j < TERRAIN_BLOCK_TILE_COMPLEXITY; ++j) {
                    for (let i = 0; i < TERRAIN_BLOCK_TILE_COMPLEXITY; ++i) {
                      const a = j * TERRAIN_BLOCK_VERTEX_COMPLEXITY + i;
                      const b = j * TERRAIN_BLOCK_VERTEX_COMPLEXITY + i + 1;
                      const c = (j + 1) * TERRAIN_BLOCK_VERTEX_COMPLEXITY + i;
                      const d = (j + 1) * TERRAIN_BLOCK_VERTEX_COMPLEXITY + i + 1;
                      indexData[index++] = a;
                      indexData[index++] = c;
                      indexData[index++] = b;
                      indexData[index++] = b;
                      indexData[index++] = c;
                      indexData[index++] = d;
                    }
                  }
                  const gfxBuffer = gfxDevice.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, Uint16Array.BYTES_PER_ELEMENT * indexData.length, Uint16Array.BYTES_PER_ELEMENT));
                  gfxBuffer.update(indexData);
                  return gfxBuffer;
                }
              }
              _getSharedIndexBuffer() {
                if (this._sharedLodIndexBuffer !== null) {
                  return this._sharedLodIndexBuffer;
                }
                if (this._sharedIndexBuffer !== null) {
                  return this._sharedIndexBuffer;
                }
                if (this.lodEnable && this._lod === null) {
                  this._lod = new TerrainLod();
                }
                if (this._lod !== null) {
                  this._sharedLodIndexBuffer = this._createSharedIndexBuffer();
                  return this._sharedLodIndexBuffer;
                } else {
                  this._sharedIndexBuffer = this._createSharedIndexBuffer();
                  return this._sharedIndexBuffer;
                }
              }
              _getIndexData(key) {
                if (this._sharedLodIndexBuffer !== null && this._lod !== null) {
                  return this._lod.getIndexData(key);
                }
                return null;
              }
              _resetLightmap(enable) {
                this._lightmapInfos.length = 0;
                if (enable) {
                  for (let i = 0; i < this._blockCount[0] * this._blockCount[1]; ++i) {
                    this._lightmapInfos.push(new TerrainBlockLightmapInfo());
                  }
                }
              }
              _updateLightmap(blockId, tex, uOff, vOff, uScale, vScale) {
                if (tex) {
                  if (this._lightmapInfos.length === 0) {
                    for (let i = 0; i < this._blockCount[0] * this._blockCount[1]; ++i) {
                      this._lightmapInfos.push(new TerrainBlockLightmapInfo());
                    }
                  }
                } else if (this._lightmapInfos.length === 0) {
                  return;
                }
                this._lightmapInfos[blockId].texture = tex;
                this._lightmapInfos[blockId].UOff = uOff;
                this._lightmapInfos[blockId].VOff = vOff;
                this._lightmapInfos[blockId].UScale = uScale;
                this._lightmapInfos[blockId].VScale = vScale;
                this._blocks[blockId]._updateLightmap(this._lightmapInfos[blockId]);
              }
              _getLightmapInfo(i, j) {
                const index = j * this._blockCount[0] + i;
                return index < this._lightmapInfos.length ? this._lightmapInfos[index] : null;
              }
              _calcNormal(x, z) {
                let flip = 1;
                const here = this.getPosition(x, z);
                let right;
                let up;
                if (x < this.vertexCount[0] - 1) {
                  right = this.getPosition(x + 1, z);
                } else {
                  flip *= -1;
                  right = this.getPosition(x - 1, z);
                }
                if (z < this.vertexCount[1] - 1) {
                  up = this.getPosition(x, z + 1);
                } else {
                  flip *= -1;
                  up = this.getPosition(x, z - 1);
                }
                right.subtract(here);
                up.subtract(here);
                const normal = new Vec3();
                normal.set(up);
                normal.cross(right);
                normal.multiplyScalar(flip);
                normal.normalize();
                return normal;
              }
              _buildNormals() {
                let index = 0;
                for (let y = 0; y < this.vertexCount[1]; ++y) {
                  for (let x = 0; x < this.vertexCount[0]; ++x) {
                    const n = this._calcNormal(x, y);
                    this._normals[index * 3 + 0] = n.x;
                    this._normals[index * 3 + 1] = n.y;
                    this._normals[index * 3 + 2] = n.z;
                    index += 1;
                  }
                }
              }
              _buildImp(restore = false) {
                if (this.valid) {
                  return;
                }
                const terrainAsset = this.__asset;
                if (this._buitinAsset !== terrainAsset) {
                  this._buitinAsset = terrainAsset;
                }
                if (!restore && terrainAsset !== null) {
                  this._tileSize = terrainAsset.tileSize;
                  this._blockCount = terrainAsset.blockCount;
                  this._weightMapSize = terrainAsset.weightMapSize;
                  this._lightMapSize = terrainAsset.lightMapSize;
                  this._heights = terrainAsset.heights;
                  this._normals = terrainAsset.normals;
                  this._weights = terrainAsset.weights;
                  this._layerBuffer = terrainAsset.layerBuffer;
                  for (let i = 0; i < this._layerList.length; ++i) {
                    this._layerList[i] = null;
                  }
                  if (terrainAsset.version < TERRAIN_DATA_VERSION5) {
                    for (let i = 0; i < terrainAsset.layerBinaryInfos.length; ++i) {
                      const layer = new TerrainLayer();
                      const layerInfo = terrainAsset.layerBinaryInfos[i];
                      layer.tileSize = layerInfo.tileSize;
                      legacyCC.assetManager.loadAny(layerInfo.detailMapId, (err, asset) => {
                        layer.detailMap = asset;
                      });
                      if (layerInfo.normalMapId !== '') {
                        legacyCC.assetManager.loadAny(layerInfo.normalMapId, (err, asset) => {
                          layer.normalMap = asset;
                        });
                      }
                      layer.roughness = layerInfo.roughness;
                      layer.metallic = layerInfo.metallic;
                      this._layerList[layerInfo.slot] = layer;
                    }
                  } else {
                    for (let i = 0; i < terrainAsset.layerInfos.length; ++i) {
                      const layer = new TerrainLayer();
                      const layerInfo = terrainAsset.layerInfos[i];
                      layer.tileSize = layerInfo.tileSize;
                      layer.detailMap = layerInfo.detailMap;
                      layer.normalMap = layerInfo.normalMap;
                      layer.roughness = layerInfo.roughness;
                      layer.metallic = layerInfo.metallic;
                      this._layerList[layerInfo.slot] = layer;
                    }
                  }
                }
                if (this._blockCount[0] === 0 || this._blockCount[1] === 0) {
                  return;
                }
                const vertexCount = this.vertexCount[0] * this.vertexCount[1];
                if (this._heights === null || this._heights.length !== vertexCount) {
                  this._heights = new Uint16Array(vertexCount);
                  this._normals = new Float32Array(vertexCount * 3);
                  for (let i = 0; i < vertexCount; ++i) {
                    this._heights[i] = TERRAIN_HEIGHT_BASE;
                    this._normals[i * 3 + 0] = 0;
                    this._normals[i * 3 + 1] = 1;
                    this._normals[i * 3 + 2] = 0;
                  }
                }
                if (this._normals === null || this._normals.length !== vertexCount * 3) {
                  this._normals = new Float32Array(vertexCount * 3);
                  this._buildNormals();
                }
                const layerBufferSize = this.blockCount[0] * this.blockCount[1] * TERRAIN_MAX_BLEND_LAYERS;
                if (this._layerBuffer === null || this._layerBuffer.length !== layerBufferSize) {
                  this._layerBuffer = new Array(layerBufferSize);
                  for (let i = 0; i < layerBufferSize; ++i) {
                    this._layerBuffer[i] = -1;
                  }
                }
                const weightMapComplexityU = this._weightMapSize * this._blockCount[0];
                const weightMapComplexityV = this._weightMapSize * this._blockCount[1];
                if (this._weights.length !== weightMapComplexityU * weightMapComplexityV * 4) {
                  this._weights = new Uint8Array(weightMapComplexityU * weightMapComplexityV * 4);
                  for (let i = 0; i < weightMapComplexityU * weightMapComplexityV; ++i) {
                    this._weights[i * 4 + 0] = 255;
                    this._weights[i * 4 + 1] = 0;
                    this._weights[i * 4 + 2] = 0;
                    this._weights[i * 4 + 3] = 0;
                  }
                }
                for (let j = 0; j < this._blockCount[1]; ++j) {
                  for (let i = 0; i < this._blockCount[0]; ++i) {
                    this._blocks.push(new TerrainBlock(this, i, j));
                  }
                }
                for (let i = 0; i < this._blocks.length; ++i) {
                  this._blocks[i].build();
                }
              }
              _rebuildHeights(info) {
                if (this.vertexCount[0] === info.vertexCount[0] && this.vertexCount[1] === info.vertexCount[1]) {
                  return false;
                }
                const heights = new Uint16Array(info.vertexCount[0] * info.vertexCount[1]);
                for (let i = 0; i < heights.length; ++i) {
                  heights[i] = TERRAIN_HEIGHT_BASE;
                }
                const w = Math.min(this.vertexCount[0], info.vertexCount[0]);
                const h = Math.min(this.vertexCount[1], info.vertexCount[1]);
                for (let j = 0; j < h; ++j) {
                  for (let i = 0; i < w; ++i) {
                    const index0 = j * info.vertexCount[0] + i;
                    const index1 = j * this.vertexCount[0] + i;
                    heights[index0] = this._heights[index1];
                  }
                }
                this._heights = heights;
                return true;
              }
              _rebuildLayerBuffer(info) {
                if (this.blockCount[0] === info.blockCount[0] && this.blockCount[1] === info.blockCount[1]) {
                  return false;
                }
                const layerBuffer = [];
                layerBuffer.length = info.blockCount[0] * info.blockCount[1] * TERRAIN_MAX_BLEND_LAYERS;
                for (let i = 0; i < layerBuffer.length; ++i) {
                  layerBuffer[i] = -1;
                }
                const w = Math.min(this.blockCount[0], info.blockCount[0]);
                const h = Math.min(this.blockCount[1], info.blockCount[1]);
                for (let j = 0; j < h; ++j) {
                  for (let i = 0; i < w; ++i) {
                    const index0 = j * info.blockCount[0] + i;
                    const index1 = j * this.blockCount[0] + i;
                    for (let l = 0; l < TERRAIN_MAX_BLEND_LAYERS; ++l) {
                      layerBuffer[index0 * TERRAIN_MAX_BLEND_LAYERS + l] = this._layerBuffer[index1 * TERRAIN_MAX_BLEND_LAYERS + l];
                    }
                  }
                }
                this._layerBuffer = layerBuffer;
                return true;
              }
              _rebuildWeights(info) {
                const oldWeightMapSize = this._weightMapSize;
                const oldWeightMapComplexityU = this._weightMapSize * this._blockCount[0];
                const oldWeightMapComplexityV = this._weightMapSize * this._blockCount[1];
                const weightMapComplexityU = info.weightMapSize * info.blockCount[0];
                const weightMapComplexityV = info.weightMapSize * info.blockCount[1];
                if (weightMapComplexityU === oldWeightMapComplexityU && weightMapComplexityV === oldWeightMapComplexityV) {
                  return false;
                }
                const weights = new Uint8Array(weightMapComplexityU * weightMapComplexityV * 4);
                for (let i = 0; i < weightMapComplexityU * weightMapComplexityV; ++i) {
                  weights[i * 4 + 0] = 255;
                  weights[i * 4 + 1] = 0;
                  weights[i * 4 + 2] = 0;
                  weights[i * 4 + 3] = 0;
                }
                const w = Math.min(info.blockCount[0], this._blockCount[0]);
                const h = Math.min(info.blockCount[1], this._blockCount[1]);
                const getOldWeight = (_i, _j, _weights) => {
                  const index = _j * oldWeightMapComplexityU + _i;
                  const weight = new Vec4();
                  weight.x = _weights[index * 4 + 0] / 255.0;
                  weight.y = _weights[index * 4 + 1] / 255.0;
                  weight.z = _weights[index * 4 + 2] / 255.0;
                  weight.w = _weights[index * 4 + 3] / 255.0;
                  return weight;
                };
                const sampleOldWeight = (_x, _y, _xOff, _yOff, _weights) => {
                  const ix0 = Math.floor(_x);
                  const iz0 = Math.floor(_y);
                  const ix1 = Math.min(ix0 + 1, oldWeightMapSize - 1);
                  const iz1 = Math.min(iz0 + 1, oldWeightMapSize - 1);
                  const dx = _x - ix0;
                  const dz = _y - iz0;
                  const a = getOldWeight(ix0 + _xOff, iz0 + _yOff, this._weights);
                  const b = getOldWeight(ix1 + _xOff, iz0 + _yOff, this._weights);
                  const c = getOldWeight(ix0 + _xOff, iz1 + _yOff, this._weights);
                  const d = getOldWeight(ix1 + _xOff, iz1 + _yOff, this._weights);
                  const m = new Vec4();
                  Vec4.add(m, b, c).multiplyScalar(0.5);
                  if (dx + dz <= 1.0) {
                    d.set(m);
                    d.subtract(a);
                    d.add(m);
                  } else {
                    a.set(m);
                    a.subtract(d);
                    a.add(m);
                  }
                  const n1 = new Vec4();
                  const n2 = new Vec4();
                  const n = new Vec4();
                  Vec4.lerp(n1, a, b, dx);
                  Vec4.lerp(n2, c, d, dx);
                  Vec4.lerp(n, n1, n2, dz);
                  return n;
                };
                for (let j = 0; j < h; ++j) {
                  for (let i = 0; i < w; ++i) {
                    const uOff = i * oldWeightMapSize;
                    const vOff = j * oldWeightMapSize;
                    for (let v = 0; v < info.weightMapSize; ++v) {
                      for (let u = 0; u < info.weightMapSize; ++u) {
                        let w;
                        if (info.weightMapSize === oldWeightMapSize) {
                          w = getOldWeight(u + uOff, v + vOff, this._weights);
                        } else {
                          const x = u / (info.weightMapSize - 1) * (oldWeightMapSize - 1);
                          const y = v / (info.weightMapSize - 1) * (oldWeightMapSize - 1);
                          w = sampleOldWeight(x, y, uOff, vOff, this._weights);
                        }
                        const du = i * info.weightMapSize + u;
                        const dv = j * info.weightMapSize + v;
                        const index = dv * weightMapComplexityU + du;
                        weights[index * 4 + 0] = w.x * 255;
                        weights[index * 4 + 1] = w.y * 255;
                        weights[index * 4 + 2] = w.z * 255;
                        weights[index * 4 + 3] = w.w * 255;
                      }
                    }
                  }
                }
                this._weights = weights;
                return true;
              }
            }, (_initializer15 = applyDecoratedInitializer(_class13.prototype, "__asset", [_dec5, serializable], function () {
              return null;
            }), _initializer16 = applyDecoratedInitializer(_class13.prototype, "_effectAsset", [_dec6, serializable], function () {
              return null;
            }), _initializer17 = applyDecoratedInitializer(_class13.prototype, "_lightmapInfos", [_dec7, serializable], function () {
              return [];
            }), _initializer18 = applyDecoratedInitializer(_class13.prototype, "_receiveShadow", [serializable], function () {
              return false;
            }), _initializer19 = applyDecoratedInitializer(_class13.prototype, "_useNormalmap", [serializable], function () {
              return false;
            }), _initializer20 = applyDecoratedInitializer(_class13.prototype, "_usePBR", [serializable], function () {
              return false;
            }), _initializer21 = applyDecoratedInitializer(_class13.prototype, "_lodEnable", [serializable], function () {
              return false;
            }), _initializer22 = applyDecoratedInitializer(_class13.prototype, "_lodBias", [_dec8, serializable], function () {
              return 0;
            }), _applyDecoratedDescriptor(_class13.prototype, "_asset", [_dec9], Object.getOwnPropertyDescriptor(_class13.prototype, "_asset"), _class13.prototype), _applyDecoratedDescriptor(_class13.prototype, "effectAsset", [_dec10], Object.getOwnPropertyDescriptor(_class13.prototype, "effectAsset"), _class13.prototype), _applyDecoratedDescriptor(_class13.prototype, "info", [_dec11], Object.getOwnPropertyDescriptor(_class13.prototype, "info"), _class13.prototype)), _class13)) || _class12) || _class12));

        })
    };
}));
