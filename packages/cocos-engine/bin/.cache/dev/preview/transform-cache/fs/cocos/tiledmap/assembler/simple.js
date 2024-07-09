System.register("q-bundled:///fs/cocos/tiledmap/assembler/simple.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/math/index.js", "../tiled-types.js", "../../game/index.js", "../../2d/renderer/static-vb-accessor.js", "../../2d/renderer/vertex-format.js", "../../2d/renderer/render-data.js", "../../2d/renderer/render-draw-info.js"], function (_export, _context) {
  "use strict";

  var JSB, Mat4, Vec3, RenderOrder, TileFlag, director, Director, StaticVBAccessor, vfmtPosUvColor, RenderData, RenderDrawInfoType, MaxGridsLimit, vec3_temps, i, _mat4_temp, _vec3u_temp, _leftDown, _uva, _uvb, _uvc, _uvd, _vfOffset, _moveX, _moveY, _fillCount, _curTexture, _tempBuffers, _curLayer, flipTexture, _accessor, simple;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /*
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
  /*
  texture coordinate
  a c
  b d
  */
  function _flipTexture(inGrid, gid) {
    if (inGrid._rotated) {
      // 2:b   1:a
      // 4:d   3:c
      _uva.x = inGrid.r;
      _uva.y = inGrid.t;
      _uvb.x = inGrid.l;
      _uvb.y = inGrid.t;
      _uvc.x = inGrid.r;
      _uvc.y = inGrid.b;
      _uvd.x = inGrid.l;
      _uvd.y = inGrid.b;
    } else {
      // 1:a  3:c
      // 2:b  4:d
      _uva.x = inGrid.l;
      _uva.y = inGrid.t;
      _uvb.x = inGrid.l;
      _uvb.y = inGrid.b;
      _uvc.x = inGrid.r;
      _uvc.y = inGrid.t;
      _uvd.x = inGrid.r;
      _uvd.y = inGrid.b;
    }
    var tempVal;

    // vice
    if ((gid & TileFlag.DIAGONAL) >>> 0) {
      tempVal = _uvb;
      _uvb = _uvc;
      _uvc = tempVal;
    }

    // flip x
    if ((gid & TileFlag.HORIZONTAL) >>> 0) {
      tempVal = _uva;
      _uva = _uvc;
      _uvc = tempVal;
      tempVal = _uvb;
      _uvb = _uvd;
      _uvd = tempVal;
    }

    // flip y
    if ((gid & TileFlag.VERTICAL) >>> 0) {
      tempVal = _uva;
      _uva = _uvb;
      _uvb = tempVal;
      tempVal = _uvc;
      _uvc = _uvd;
      _uvd = tempVal;
    }
  }

  /*
  texture coordinate
     a
  b     c
     d
  */
  function _flipDiamondTileTexture(inGrid, gid) {
    if (inGrid._rotated) {
      //       2:b
      // 4:d         1:a
      //       3:c
      _uva.x = inGrid.r;
      _uva.y = inGrid.cy;
      _uvb.x = inGrid.cx;
      _uvb.y = inGrid.t;
      _uvc.x = inGrid.cx;
      _uvc.y = inGrid.b;
      _uvd.x = inGrid.l;
      _uvd.y = inGrid.cy;
    } else {
      //       1:a
      // 2:b         3:c
      //       4:d
      _uva.x = inGrid.cx;
      _uva.y = inGrid.t;
      _uvb.x = inGrid.l;
      _uvb.y = inGrid.cy;
      _uvc.x = inGrid.r;
      _uvc.y = inGrid.cy;
      _uvd.x = inGrid.cx;
      _uvd.y = inGrid.b;
    }
    var tempVal;

    // vice
    if ((gid & TileFlag.DIAGONAL) >>> 0) {
      tempVal = _uva;
      _uva = _uvb;
      _uvb = tempVal;
      tempVal = _uvc;
      _uvc = _uvd;
      _uvd = tempVal;
    }

    // flip x
    if ((gid & TileFlag.HORIZONTAL) >>> 0) {
      tempVal = _uvb;
      _uvb = _uvc;
      _uvc = tempVal;
    }

    // flip y
    if ((gid & TileFlag.VERTICAL) >>> 0) {
      tempVal = _uva;
      _uva = _uvd;
      _uvd = tempVal;
    }
  }
  function packRenderData() {
    if (_fillCount < 1 || !_curTexture) return;
    var vbCount = 4 * _fillCount;
    var ibCount = 6 * _fillCount;
    var tiledData = _curLayer.requestTiledRenderData();
    if (JSB) {
      tiledData.renderData = RenderData.add(vfmtPosUvColor, _accessor);
      tiledData.renderData.drawInfoType = RenderDrawInfoType.MIDDLEWARE;
    } else {
      tiledData.renderData = RenderData.add(vfmtPosUvColor);
    }
    tiledData.texture = _curTexture;
    var rd = tiledData.renderData;
    rd.resize(vbCount, ibCount);
    var vb = rd.chunk.vb;
    vb.set(_tempBuffers.subarray(0, vbCount * 9), 0);
    _fillCount = 0;
    _curTexture = null;
  }

  // rowMoveDir is -1 or 1, -1 means decrease, 1 means increase
  // colMoveDir is -1 or 1, -1 means decrease, 1 means increase
  function traverseGrids(leftDown, rightTop, rowMoveDir, colMoveDir, comp) {
    // show nothing
    if (rightTop.row < 0 || rightTop.col < 0) return;
    _curLayer = comp;
    var matrix = comp.node.worldMatrix;
    _vfOffset = 0;
    var tiledTiles = comp.tiledTiles;
    var texGrids = comp.texGrids;
    var tiles = comp.tiles;
    var vertStep = 9;
    var vertStep2 = vertStep * 2;
    var vertStep3 = vertStep * 3;
    var vertices = comp.vertices;
    var rowData;
    var col;
    var cols;
    var row;
    var rows;
    var colData;
    var tileSize;
    var grid;
    var gid = 0;
    var left = 0;
    var bottom = 0;
    var right = 0;
    var top = 0; // x, y
    var tiledNode;
    var colNodesCount = 0;
    var isCheckColRange = true;
    var diamondTile = false; // TODO:comp._diamondTile;

    flipTexture = diamondTile ? _flipDiamondTileTexture : _flipTexture;
    var color = new Float32Array(4);
    color[0] = comp.color.r / 255;
    color[1] = comp.color.g / 255;
    color[2] = comp.color.b / 255;
    color[3] = comp.color.a / 255;
    if (rowMoveDir === -1) {
      row = rightTop.row;
      rows = leftDown.row;
    } else {
      row = leftDown.row;
      rows = rightTop.row;
    }
    var _tempRows = Math.abs(leftDown.row - rightTop.row) + 1;
    var _tempClos = Math.abs(rightTop.col - leftDown.col) + 1;
    _tempBuffers = new Float32Array(_tempRows * _tempClos * 9 * 4);
    _fillCount = 0;
    var vertexBuf = _tempBuffers;
    // traverse row
    for (; (rows - row) * rowMoveDir >= 0; row += rowMoveDir) {
      rowData = vertices[row];
      colNodesCount = comp.getNodesCountByRow(row);
      isCheckColRange = rowData && colNodesCount === 0;

      // limit min col and max col
      if (colMoveDir === 1) {
        col = isCheckColRange && leftDown.col < rowData.minCol ? rowData.minCol : leftDown.col;
        cols = isCheckColRange && rightTop.col > rowData.maxCol ? rowData.maxCol : rightTop.col;
      } else {
        col = isCheckColRange && rightTop.col > rowData.maxCol ? rowData.maxCol : rightTop.col;
        cols = isCheckColRange && leftDown.col < rowData.minCol ? rowData.minCol : leftDown.col;
      }

      // traverse col
      for (; (cols - col) * colMoveDir >= 0; col += colMoveDir) {
        colData = rowData && rowData[col];
        if (colNodesCount > 0) {
          packRenderData();
          var nodes = comp.requestSubNodesData();
          var celData = comp.getNodesByRowCol(row, col);
          if (celData && celData.count > 0) {
            nodes.subNodes = celData.list;
          }
        }
        if (!colData) {
          // only render users nodes because map data is empty
          continue;
        }
        gid = tiles[colData.index];
        grid = texGrids.get((gid & TileFlag.FLIPPED_MASK) >>> 0);
        if (!grid) continue;

        // check init or new material
        if (_curTexture !== grid.texture) {
          packRenderData();
          _curTexture = grid.texture;
        }
        tileSize = grid.tileset._tileSize;

        // calc rect vertex
        left = colData.left - _moveX;
        bottom = colData.bottom - _moveY;
        right = left + tileSize.width;
        top = bottom + tileSize.height;

        // begin to fill vertex buffer
        tiledNode = tiledTiles[colData.index];
        _vfOffset = _fillCount * 4 * 9;
        if (!tiledNode) {
          if (diamondTile) {
            var centerX = (left + right) / 2;
            var centerY = (top + bottom) / 2;
            // ct
            vec3_temps[0].x = centerX;
            vec3_temps[0].y = top;

            // lc
            vec3_temps[1].x = left;
            vec3_temps[1].y = centerY;

            // rc
            vec3_temps[2].x = right;
            vec3_temps[2].y = centerY;

            // cb
            vec3_temps[3].x = centerX;
            vec3_temps[3].y = bottom;
          } else {
            // lt
            vec3_temps[0].x = left;
            vec3_temps[0].y = top;

            // lb
            vec3_temps[1].x = left;
            vec3_temps[1].y = bottom;

            // rt
            vec3_temps[2].x = right;
            vec3_temps[2].y = top;

            // rb
            vec3_temps[3].x = right;
            vec3_temps[3].y = bottom;
          }
          vec3_temps[0].transformMat4(matrix);
          vertexBuf[_vfOffset] = vec3_temps[0].x;
          vertexBuf[_vfOffset + 1] = vec3_temps[0].y;
          vertexBuf[_vfOffset + 2] = vec3_temps[0].z;
          vec3_temps[1].transformMat4(matrix);
          vertexBuf[_vfOffset + vertStep] = vec3_temps[1].x;
          vertexBuf[_vfOffset + vertStep + 1] = vec3_temps[1].y;
          vertexBuf[_vfOffset + vertStep + 2] = vec3_temps[1].z;
          vec3_temps[2].transformMat4(matrix);
          vertexBuf[_vfOffset + vertStep2] = vec3_temps[2].x;
          vertexBuf[_vfOffset + vertStep2 + 1] = vec3_temps[2].y;
          vertexBuf[_vfOffset + vertStep2 + 2] = vec3_temps[2].z;
          vec3_temps[3].transformMat4(matrix);
          vertexBuf[_vfOffset + vertStep3] = vec3_temps[3].x;
          vertexBuf[_vfOffset + vertStep3 + 1] = vec3_temps[3].y;
          vertexBuf[_vfOffset + vertStep3 + 2] = vec3_temps[3].z;
          vertexBuf.set(color, _vfOffset + 5);
          vertexBuf.set(color, _vfOffset + vertStep + 5);
          vertexBuf.set(color, _vfOffset + vertStep2 + 5);
          vertexBuf.set(color, _vfOffset + vertStep3 + 5);
        } else if (tiledNode.node.active) {
          fillByTiledNode(tiledNode.node, color, vertexBuf, left, right, top, bottom, diamondTile);
        }
        flipTexture(grid, gid);

        // lt/ct -> a
        vertexBuf[_vfOffset + 3] = _uva.x;
        vertexBuf[_vfOffset + 4] = _uva.y;

        // lb/lc -> b
        vertexBuf[_vfOffset + vertStep + 3] = _uvb.x;
        vertexBuf[_vfOffset + vertStep + 4] = _uvb.y;

        // rt/rc -> c
        vertexBuf[_vfOffset + vertStep2 + 3] = _uvc.x;
        vertexBuf[_vfOffset + vertStep2 + 4] = _uvc.y;

        // rt/cb -> d
        vertexBuf[_vfOffset + vertStep3 + 3] = _uvd.x;
        vertexBuf[_vfOffset + vertStep3 + 4] = _uvd.y;
        _fillCount++;

        // vertices count exceed 66635, buffer must be switched
        if (_fillCount >= MaxGridsLimit) {
          packRenderData();
        }
      }
    }
    packRenderData();
  }
  function fillByTiledNode(tiledNode, color, vbuf, left, right, top, bottom, diamondTile) {
    var vertStep = 9;
    var vertStep2 = vertStep * 2;
    var vertStep3 = vertStep * 3;
    tiledNode.updateWorldTransform();
    Mat4.fromRTS(_mat4_temp, tiledNode.rotation, tiledNode.position, tiledNode.scale);
    Vec3.set(_vec3u_temp, -(left + _moveX), -(bottom + _moveY), 0);
    Mat4.transform(_mat4_temp, _mat4_temp, _vec3u_temp);
    Mat4.multiply(_mat4_temp, tiledNode.parent.worldMatrix, _mat4_temp);
    var m = _mat4_temp;
    var tx = m.m12;
    var ty = m.m13;
    var a = m.m00;
    var b = m.m01;
    var c = m.m04;
    var d = m.m05;
    var justTranslate = a === 1 && b === 0 && c === 0 && d === 1;
    if (diamondTile) {
      var centerX = (left + right) / 2;
      var centerY = (top + bottom) / 2;
      if (justTranslate) {
        // ct
        vbuf[_vfOffset] = centerX + tx;
        vbuf[_vfOffset + 1] = top + ty;

        // lc
        vbuf[_vfOffset + vertStep] = left + tx;
        vbuf[_vfOffset + vertStep + 1] = centerY + ty;

        // rc
        vbuf[_vfOffset + vertStep2] = right + tx;
        vbuf[_vfOffset + vertStep2 + 1] = centerY + ty;

        // cb
        vbuf[_vfOffset + vertStep3] = centerX + tx;
        vbuf[_vfOffset + vertStep3 + 1] = bottom + ty;
      } else {
        // ct
        vbuf[_vfOffset] = centerX * a + top * c + tx;
        vbuf[_vfOffset + 1] = centerX * b + top * d + ty;

        // lc
        vbuf[_vfOffset + vertStep] = left * a + centerY * c + tx;
        vbuf[_vfOffset + vertStep + 1] = left * b + centerY * d + ty;

        // rc
        vbuf[_vfOffset + vertStep2] = right * a + centerY * c + tx;
        vbuf[_vfOffset + vertStep2 + 1] = right * b + centerY * d + ty;

        // cb
        vbuf[_vfOffset + vertStep3] = centerX * a + bottom * c + tx;
        vbuf[_vfOffset + vertStep3 + 1] = centerX * b + bottom * d + ty;
      }
    } else if (justTranslate) {
      vbuf[_vfOffset] = left + tx;
      vbuf[_vfOffset + 1] = top + ty;
      vbuf[_vfOffset + vertStep] = left + tx;
      vbuf[_vfOffset + vertStep + 1] = bottom + ty;
      vbuf[_vfOffset + vertStep2] = right + tx;
      vbuf[_vfOffset + vertStep2 + 1] = top + ty;
      vbuf[_vfOffset + vertStep3] = right + tx;
      vbuf[_vfOffset + vertStep3 + 1] = bottom + ty;
    } else {
      // lt
      vbuf[_vfOffset] = left * a + top * c + tx;
      vbuf[_vfOffset + 1] = left * b + top * d + ty;

      // lb
      vbuf[_vfOffset + vertStep] = left * a + bottom * c + tx;
      vbuf[_vfOffset + vertStep + 1] = left * b + bottom * d + ty;

      // rt
      vbuf[_vfOffset + vertStep2] = right * a + top * c + tx;
      vbuf[_vfOffset + vertStep2 + 1] = right * b + top * d + ty;

      // rb
      vbuf[_vfOffset + vertStep3] = right * a + bottom * c + tx;
      vbuf[_vfOffset + vertStep3 + 1] = right * b + bottom * d + ty;
    }
    vbuf.set(color, _vfOffset + 5);
    vbuf.set(color, _vfOffset + vertStep + 5);
    vbuf.set(color, _vfOffset + vertStep2 + 5);
    vbuf.set(color, _vfOffset + vertStep3 + 5);
  }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_coreMathIndexJs) {
      Mat4 = _coreMathIndexJs.Mat4;
      Vec3 = _coreMathIndexJs.Vec3;
    }, function (_tiledTypesJs) {
      RenderOrder = _tiledTypesJs.RenderOrder;
      TileFlag = _tiledTypesJs.TileFlag;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
      Director = _gameIndexJs.Director;
    }, function (_dRendererStaticVbAccessorJs) {
      StaticVBAccessor = _dRendererStaticVbAccessorJs.StaticVBAccessor;
    }, function (_dRendererVertexFormatJs) {
      vfmtPosUvColor = _dRendererVertexFormatJs.vfmtPosUvColor;
    }, function (_dRendererRenderDataJs) {
      RenderData = _dRendererRenderDataJs.RenderData;
    }, function (_dRendererRenderDrawInfoJs) {
      RenderDrawInfoType = _dRendererRenderDrawInfoJs.RenderDrawInfoType;
    }],
    execute: function () {
      MaxGridsLimit = Math.ceil(65535 / 6);
      vec3_temps = [];
      for (i = 0; i < 4; i++) {
        vec3_temps.push(new Vec3());
      }
      _mat4_temp = new Mat4();
      _vec3u_temp = new Vec3();
      _leftDown = {
        row: 0,
        col: 0
      };
      _uva = {
        x: 0,
        y: 0
      };
      _uvb = {
        x: 0,
        y: 0
      };
      _uvc = {
        x: 0,
        y: 0
      };
      _uvd = {
        x: 0,
        y: 0
      };
      _vfOffset = 0;
      _moveX = 0;
      _moveY = 0;
      _fillCount = 0;
      _curTexture = null;
      _accessor = null;
      /**
       * simple 组装器
       * 可通过 `UI.simple` 获取该组装器。
       */
      _export("simple", simple = {
        ensureAccessor: function ensureAccessor() {
          if (!_accessor) {
            var device = director.root.device;
            var batcher = director.root.batcher2D;
            _accessor = new StaticVBAccessor(device, vfmtPosUvColor, this.vCount);
            //batcher.registerBufferAccessor(Number.parseInt('TILED-MAP', 36), _accessor);
            director.on(Director.EVENT_BEFORE_DRAW, function () {
              _accessor.reset();
            });
          }
        },
        createData: function createData(layer) {
          if (JSB) {
            this.ensureAccessor();
          }
        },
        fillBuffers: function fillBuffers(layer, renderer) {
          if (!layer || layer.tiledDataArray.length === 0) return;
          var dataArray = layer.tiledDataArray;

          // 当前渲染的数据
          var data = dataArray[layer._tiledDataArrayIdx];
          var renderData = data.renderData;
          var iBuf = renderData.chunk.meshBuffer.iData;
          var indexOffset = renderData.chunk.meshBuffer.indexOffset;
          var vertexId = renderData.chunk.vertexOffset;
          var quadCount = renderData.vertexCount / 4;
          for (var _i = 0; _i < quadCount; _i += 1) {
            iBuf[indexOffset] = vertexId;
            iBuf[indexOffset + 1] = vertexId + 1;
            iBuf[indexOffset + 2] = vertexId + 2;
            iBuf[indexOffset + 3] = vertexId + 2;
            iBuf[indexOffset + 4] = vertexId + 1;
            iBuf[indexOffset + 5] = vertexId + 3;
            indexOffset += 6;
            vertexId += 4;
          }
          renderData.chunk.meshBuffer.indexOffset = indexOffset;
        },
        updateRenderData: function updateRenderData(comp) {
          comp.updateCulling();
          _moveX = comp.leftDownToCenterX;
          _moveY = comp.leftDownToCenterY;
          if (comp.colorChanged || comp.isCullingDirty() || comp.isUserNodeDirty() || comp.hasAnimation() || comp.hasTiledNode() || comp.node.hasChangedFlags) {
            comp.colorChanged = false;
            comp.destroyRenderData();
            var leftDown;
            var rightTop;
            if (comp.enableCulling) {
              var cullingRect = comp.cullingRect;
              leftDown = cullingRect.leftDown;
              rightTop = cullingRect.rightTop;
            } else {
              leftDown = _leftDown;
              rightTop = comp.rightTop;
            }
            switch (comp.renderOrder) {
              // left top to right down, col add, row sub,
              case RenderOrder.RightDown:
                traverseGrids(leftDown, rightTop, -1, 1, comp);
                break;
              // right top to left down, col sub, row sub
              case RenderOrder.LeftDown:
                traverseGrids(leftDown, rightTop, -1, -1, comp);
                break;
              // left down to right up, col add, row add
              case RenderOrder.RightUp:
                traverseGrids(leftDown, rightTop, 1, 1, comp);
                break;
              // right down to left up, col sub, row add
              case RenderOrder.LeftUp:
              default:
                traverseGrids(leftDown, rightTop, 1, -1, comp);
                break;
            }
            comp.setCullingDirty(false);
            comp.setUserNodeDirty(false);
          }
          if (JSB) {
            comp.prepareDrawData();
          }
        },
        updateColor: function updateColor(tiled) {
          var color = tiled.color;
          var colorV = new Float32Array(4);
          colorV[0] = color.r / 255;
          colorV[1] = color.g / 255;
          colorV[2] = color.b / 255;
          colorV[3] = color.a / 255;
          var rs = tiled.tiledDataArray;
          for (var _iterator = _createForOfIteratorHelperLoose(rs), _step; !(_step = _iterator()).done;) {
            var r = _step.value;
            if (!r.renderData) continue;
            var renderData = r.renderData;
            var vs = renderData.vData;
            for (var _i2 = renderData.vertexStart, l = renderData.vertexCount; _i2 < l; _i2++) {
              vs.set(colorV, _i2 * 9 + 5);
            }
          }
        }
      });
    }
  };
});