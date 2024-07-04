System.register("q-bundled:///fs/cocos/terrain/terrain-lod.js", [], function (_export, _context) {
  "use strict";

  var TERRAIN_LOD_VERTS, TERRAIN_LOD_TILES, TERRAIN_LOD_LEVELS, TERRAIN_LOD_NORTH_INDEX, TERRAIN_LOD_SOUTH_INDEX, TERRAIN_LOD_WEST_INDEX, TERRAIN_LOD_EAST_INDEX, TERRAIN_LOD_MAX_DISTANCE, TerrainLodKey, TerrainIndexPool, TerrainIndexData, TerrainLod;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [],
    execute: function () {
      /*
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
      _export("TERRAIN_LOD_VERTS", TERRAIN_LOD_VERTS = 33);
      _export("TERRAIN_LOD_TILES", TERRAIN_LOD_TILES = 32);
      _export("TERRAIN_LOD_LEVELS", TERRAIN_LOD_LEVELS = 4);
      _export("TERRAIN_LOD_NORTH_INDEX", TERRAIN_LOD_NORTH_INDEX = 0);
      _export("TERRAIN_LOD_SOUTH_INDEX", TERRAIN_LOD_SOUTH_INDEX = 1);
      _export("TERRAIN_LOD_WEST_INDEX", TERRAIN_LOD_WEST_INDEX = 2);
      _export("TERRAIN_LOD_EAST_INDEX", TERRAIN_LOD_EAST_INDEX = 3);
      _export("TERRAIN_LOD_MAX_DISTANCE", TERRAIN_LOD_MAX_DISTANCE = 100000000000000.0);
      _export("TerrainLodKey", TerrainLodKey = /*#__PURE__*/function () {
        function TerrainLodKey() {
          this.level = 0;
          this.north = 0;
          this.south = 0;
          this.west = 0;
          this.east = 0;
        }
        var _proto = TerrainLodKey.prototype;
        _proto.equals = function equals(rk) {
          return this.level === rk.level && this.north === rk.north && this.south === rk.south && this.west === rk.west && this.east === rk.east;
        };
        return TerrainLodKey;
      }());
      _export("TerrainIndexPool", TerrainIndexPool = function TerrainIndexPool() {
        this.size = 0;
        this.indices = null;
      });
      _export("TerrainIndexData", TerrainIndexData = function TerrainIndexData() {
        this.key = new TerrainLodKey();
        this.start = 0;
        this.size = 0;
        this.buffer = null;
        this.primCount = 0;
      });
      _export("TerrainLod", TerrainLod = /*#__PURE__*/function () {
        TerrainLod.mapIndex = function mapIndex(i, j, k) {
          return i * (TERRAIN_LOD_LEVELS * TERRAIN_LOD_LEVELS) + j * TERRAIN_LOD_LEVELS + k;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;

        function TerrainLod() {
          this._bodyIndexPool = void 0;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._connecterIndexPool = void 0;
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._indexMap = [];
          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
          this._indexBuffer = new Uint16Array();
          this._bodyIndexPool = new Array(TERRAIN_LOD_LEVELS);
          for (var i = 0; i < TERRAIN_LOD_LEVELS; ++i) {
            this._bodyIndexPool[i] = new TerrainIndexPool();
          }
          this._connecterIndexPool = new Array(TERRAIN_LOD_LEVELS * TERRAIN_LOD_LEVELS * 4);
          for (var _i = 0; _i < TERRAIN_LOD_LEVELS; ++_i) {
            for (var j = 0; j < TERRAIN_LOD_LEVELS; ++j) {
              for (var k = 0; k < 4; ++k) {
                this._connecterIndexPool[TerrainLod.mapIndex(_i, j, k)] = new TerrainIndexPool();
              }
            }
          }
          for (var _i2 = 0; _i2 < TERRAIN_LOD_LEVELS; ++_i2) {
            this._genBodyIndex(_i2);
          }
          for (var _i3 = 0; _i3 < TERRAIN_LOD_LEVELS; ++_i3) {
            for (var _j = 0; _j < TERRAIN_LOD_LEVELS; ++_j) {
              this._genConnecterIndexNorth(_i3, _j);
              this._genConnecterIndexSouth(_i3, _j);
              this._genConnecterIndexWest(_i3, _j);
              this._genConnecterIndexEast(_i3, _j);
            }
          }
          var levels = TERRAIN_LOD_LEVELS;
          for (var l = 0; l < levels; ++l) {
            for (var n = 0; n < levels; ++n) {
              if (n < l) {
                continue;
              }
              for (var s = 0; s < levels; ++s) {
                if (s < l) {
                  continue;
                }
                for (var w = 0; w < levels; ++w) {
                  if (w < l) {
                    continue;
                  }
                  for (var e = 0; e < levels; ++e) {
                    if (e < l) {
                      continue;
                    }
                    var _k = new TerrainLodKey();
                    _k.level = l;
                    _k.north = n;
                    _k.south = s;
                    _k.west = w;
                    _k.east = e;
                    this._genIndexData(_k);
                  }
                }
              }
            }
          }
        }
        var _proto2 = TerrainLod.prototype;
        _proto2.getIndexData = function getIndexData(k) {
          for (var i = 0; i < this._indexMap.length; ++i) {
            if (this._indexMap[i].key.equals(k)) {
              return this._indexMap[i];
            }
          }
          return null;
        };
        _proto2._genBodyIndex = function _genBodyIndex(level) {
          var step = 1 << level;
          var tiles = TERRAIN_LOD_TILES >> level;
          var start = 0;
          if (level < TERRAIN_LOD_LEVELS - 1) {
            tiles -= 2;
            start = step * TERRAIN_LOD_VERTS + step;
          }
          if (tiles === 0 || tiles === 0) {
            return;
          }
          var count = tiles * tiles * 6;
          this._bodyIndexPool[level].indices = new Uint16Array(count);
          var index = 0;
          var indices = new Uint16Array(count);

          // generate triangle list cw
          //
          var row_c = start;
          var row_n = row_c + TERRAIN_LOD_VERTS * step;
          for (var y = 0; y < tiles; ++y) {
            for (var x = 0; x < tiles; ++x) {
              /*
              indices[index++] = row_n + x * step;
              indices[index++] = row_c + x * step;
              indices[index++] = row_n + (x + 1) * step;
               indices[index++] = row_n + (x + 1) * step;
              indices[index++] = row_c + x * step;
              indices[index++] = row_c + (x + 1) * step;
              */

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
        };
        _proto2._genConnecterIndexNorth = function _genConnecterIndexNorth(level, connecter) {
          var connecterIndex = TerrainLod.mapIndex(level, connecter, TERRAIN_LOD_NORTH_INDEX);
          if (connecter < level || level === TERRAIN_LOD_LEVELS - 1) {
            this._connecterIndexPool[connecterIndex].size = 0;
            this._connecterIndexPool[connecterIndex].indices = null;
            return;
          }
          var self_step = 1 << level;
          var neighbor_step = 1 << connecter;
          var self_tile = TERRAIN_LOD_TILES >> level;
          var count = self_tile * 2 + 2;
          var index = 0;
          var indices = new Uint16Array(count);

          // starter
          indices[index++] = 0;
          indices[index++] = 0;

          // middler
          for (var i = 1; i < self_tile; ++i) {
            var x1 = i * self_step;
            var y1 = self_step;
            var x0 = x1 / neighbor_step * neighbor_step;
            var y0 = y1 - self_step;
            var index0 = y1 * TERRAIN_LOD_VERTS + x1;
            var index1 = y0 * TERRAIN_LOD_VERTS + x0;
            indices[index++] = index0;
            indices[index++] = index1;
          }

          // ender
          indices[index++] = TERRAIN_LOD_VERTS - 1;
          indices[index++] = TERRAIN_LOD_VERTS - 1;
          this._connecterIndexPool[connecterIndex].size = index;
          this._connecterIndexPool[connecterIndex].indices = indices;
        };
        _proto2._genConnecterIndexSouth = function _genConnecterIndexSouth(level, connecter) {
          var connecterIndex = TerrainLod.mapIndex(level, connecter, TERRAIN_LOD_SOUTH_INDEX);
          if (connecter < level || level === TERRAIN_LOD_LEVELS - 1) {
            this._connecterIndexPool[connecterIndex].size = 0;
            this._connecterIndexPool[connecterIndex].indices = null;
            return;
          }
          var self_step = 1 << level;
          var neighbor_step = 1 << connecter;
          var self_tile = TERRAIN_LOD_TILES >> level;
          var count = self_tile * 2 + 2;
          var index = 0;
          var indices = new Uint16Array(count);

          // starter
          indices[index++] = TERRAIN_LOD_TILES * TERRAIN_LOD_VERTS;
          indices[index++] = TERRAIN_LOD_TILES * TERRAIN_LOD_VERTS;

          // middler
          for (var i = 1; i < self_tile; ++i) {
            var x0 = i * self_step;
            var y0 = TERRAIN_LOD_VERTS - 1 - self_step;
            var x1 = x0 / neighbor_step * neighbor_step;
            var y1 = y0 + self_step;
            var index0 = y1 * TERRAIN_LOD_VERTS + x1;
            var index1 = y0 * TERRAIN_LOD_VERTS + x0;
            indices[index++] = index0;
            indices[index++] = index1;
          }

          // ender
          indices[index++] = TERRAIN_LOD_VERTS * TERRAIN_LOD_VERTS - 1;
          indices[index++] = TERRAIN_LOD_VERTS * TERRAIN_LOD_VERTS - 1;
          this._connecterIndexPool[connecterIndex].size = index;
          this._connecterIndexPool[connecterIndex].indices = indices;
        };
        _proto2._genConnecterIndexWest = function _genConnecterIndexWest(level, connecter) {
          var connecterIndex = TerrainLod.mapIndex(level, connecter, TERRAIN_LOD_WEST_INDEX);
          if (connecter < level || level === TERRAIN_LOD_LEVELS - 1) {
            this._connecterIndexPool[connecterIndex].size = 0;
            this._connecterIndexPool[connecterIndex].indices = null;
            return;
          }
          var self_step = 1 << level;
          var neighbor_step = 1 << connecter;
          var self_tile = TERRAIN_LOD_TILES >> level;
          var count = self_tile * 2 + 2;
          var index = 0;
          var indices = new Uint16Array(count);

          // starter
          indices[index++] = 0;
          indices[index++] = 0;

          // middler
          for (var i = 1; i < self_tile; ++i) {
            var x0 = 0;
            var y0 = i * self_step / neighbor_step * neighbor_step;
            var x1 = self_step;
            var y1 = i * self_step;
            var index0 = y0 * TERRAIN_LOD_VERTS + x0;
            var index1 = y1 * TERRAIN_LOD_VERTS + x1;
            indices[index++] = index0;
            indices[index++] = index1;
          }

          // ender
          indices[index++] = TERRAIN_LOD_TILES * TERRAIN_LOD_VERTS;
          indices[index++] = TERRAIN_LOD_TILES * TERRAIN_LOD_VERTS;
          this._connecterIndexPool[connecterIndex].size = index;
          this._connecterIndexPool[connecterIndex].indices = indices;
        };
        _proto2._genConnecterIndexEast = function _genConnecterIndexEast(level, connecter) {
          var connecterIndex = TerrainLod.mapIndex(level, connecter, TERRAIN_LOD_EAST_INDEX);
          if (connecter < level || level === TERRAIN_LOD_LEVELS - 1) {
            this._connecterIndexPool[connecterIndex].size = 0;
            this._connecterIndexPool[connecterIndex].indices = null;
            return;
          }
          var self_step = 1 << level;
          var neighbor_step = 1 << connecter;
          var self_tile = TERRAIN_LOD_TILES >> level;
          var count = self_tile * 2 + 2;
          var index = 0;
          var indices = new Uint16Array(count);

          // starter
          indices[index++] = TERRAIN_LOD_VERTS - 1;
          indices[index++] = TERRAIN_LOD_VERTS - 1;

          // middler
          for (var i = 1; i < self_tile; ++i) {
            var x0 = TERRAIN_LOD_VERTS - 1 - self_step;
            var y0 = i * self_step;
            var x1 = TERRAIN_LOD_VERTS - 1;
            var y1 = i * self_step / neighbor_step * neighbor_step;
            var index0 = y0 * TERRAIN_LOD_VERTS + x0;
            var index1 = y1 * TERRAIN_LOD_VERTS + x1;
            indices[index++] = index0;
            indices[index++] = index1;
          }

          // ender
          indices[index++] = TERRAIN_LOD_VERTS * TERRAIN_LOD_VERTS - 1;
          indices[index++] = TERRAIN_LOD_VERTS * TERRAIN_LOD_VERTS - 1;
          this._connecterIndexPool[connecterIndex].size = index;
          this._connecterIndexPool[connecterIndex].indices = indices;
        };
        _proto2._getConnenterIndex = function _getConnenterIndex(i, j, k) {
          return this._connecterIndexPool[TerrainLod.mapIndex(i, j, k)];
        };
        _proto2._genIndexData = function _genIndexData(k) {
          var data = this.getIndexData(k);
          if (data != null) {
            return data;
          }
          var body = this._bodyIndexPool[k.level];
          var north = this._getConnenterIndex(k.level, k.north, TERRAIN_LOD_NORTH_INDEX);
          var south = this._getConnenterIndex(k.level, k.south, TERRAIN_LOD_SOUTH_INDEX);
          var west = this._getConnenterIndex(k.level, k.west, TERRAIN_LOD_WEST_INDEX);
          var east = this._getConnenterIndex(k.level, k.east, TERRAIN_LOD_EAST_INDEX);
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
          var index = 0;
          data.buffer = new Uint16Array(data.size);
          data.key.level = k.level;
          data.key.east = k.east;
          data.key.west = k.west;
          data.key.north = k.north;
          data.key.south = k.south;
          if (body.indices) {
            for (var i = 0; i < body.size; ++i) {
              data.buffer[index++] = body.indices[i];
            }
          }
          if (north.indices) {
            for (var _i4 = 0; _i4 < north.size - 2; _i4 += 2) {
              var a = north.indices[_i4 + 0];
              var b = north.indices[_i4 + 1];
              var c = north.indices[_i4 + 2];
              var d = north.indices[_i4 + 3];
              data.buffer[index++] = a;
              data.buffer[index++] = c;
              data.buffer[index++] = b;
              data.buffer[index++] = c;
              data.buffer[index++] = d;
              data.buffer[index++] = b;
            }
          }
          if (south.indices) {
            for (var _i5 = 0; _i5 < south.size - 2; _i5 += 2) {
              var _a = south.indices[_i5 + 0];
              var _b = south.indices[_i5 + 1];
              var _c = south.indices[_i5 + 2];
              var _d = south.indices[_i5 + 3];
              data.buffer[index++] = _a;
              data.buffer[index++] = _c;
              data.buffer[index++] = _b;
              data.buffer[index++] = _c;
              data.buffer[index++] = _d;
              data.buffer[index++] = _b;
            }
          }
          if (west.indices) {
            for (var _i6 = 0; _i6 < west.size - 2; _i6 += 2) {
              var _a2 = west.indices[_i6 + 0];
              var _b2 = west.indices[_i6 + 1];
              var _c2 = west.indices[_i6 + 2];
              var _d2 = west.indices[_i6 + 3];
              data.buffer[index++] = _a2;
              data.buffer[index++] = _c2;
              data.buffer[index++] = _b2;
              data.buffer[index++] = _c2;
              data.buffer[index++] = _d2;
              data.buffer[index++] = _b2;
            }
          }
          if (east.indices) {
            for (var _i7 = 0; _i7 < east.size - 2; _i7 += 2) {
              var _a3 = east.indices[_i7 + 0];
              var _b3 = east.indices[_i7 + 1];
              var _c3 = east.indices[_i7 + 2];
              var _d3 = east.indices[_i7 + 3];
              data.buffer[index++] = _a3;
              data.buffer[index++] = _c3;
              data.buffer[index++] = _b3;
              data.buffer[index++] = _c3;
              data.buffer[index++] = _d3;
              data.buffer[index++] = _b3;
            }
          }
          data.primCount = index / 3;
          data.start = this._indexBuffer.length;
          this._indexMap.push(data);
          var temp = new Uint16Array(data.start + data.size);
          temp.set(this._indexBuffer, 0);
          temp.set(data.buffer, data.start);
          this._indexBuffer = temp;
          return data;
        };
        return TerrainLod;
      }());
    }
  };
});