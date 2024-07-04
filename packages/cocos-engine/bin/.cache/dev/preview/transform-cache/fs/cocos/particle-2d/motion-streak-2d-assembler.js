System.register("q-bundled:///fs/cocos/particle-2d/motion-streak-2d-assembler.js", ["../../../virtual/internal%253Aconstants.js", "./motion-streak-2d.js", "../core/index.js"], function (_export, _context) {
  "use strict";

  var JSB, MotionStreak, Vec2, Color, _tangent, _normal, _vec2, QUAD_INDICES, MotionStreakAssembler, MotionStreakAssemblerManager;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2018 Chukong Technologies Inc.
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
  function normal(out, dir) {
    // get perpendicular
    out.x = -dir.y;
    out.y = dir.x;
    return out;
  }
  function computeMiter(miter, lineA, lineB, halfThick, maxMultiple) {
    // get tangent line
    lineA.add(lineB, _tangent);
    _tangent.normalize();

    // get miter as a unit vector
    miter.x = -_tangent.y;
    miter.y = _tangent.x;
    _vec2.x = -lineA.y;
    _vec2.y = lineA.x;

    // get the necessary length of our miter
    var multiple = 1 / miter.dot(_vec2);
    if (maxMultiple) {
      multiple = Math.min(multiple, maxMultiple);
    }
    return halfThick * multiple;
  }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_motionStreak2dJs) {
      MotionStreak = _motionStreak2dJs.MotionStreak;
    }, function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
      Color = _coreIndexJs.Color;
    }],
    execute: function () {
      _tangent = new Vec2(); // const _miter = new Vec2();
      _normal = new Vec2();
      _vec2 = new Vec2();
      _export("MotionStreakAssembler", MotionStreakAssembler = {
        createData: function createData(comp) {
          var renderData = comp.requestRenderData();
          renderData.dataLength = 4;
          renderData.resize(16, (16 - 2) * 3);
          return renderData;
        },
        update: function update(comp, dt) {
          var stroke = comp.stroke / 2;
          var node = comp.node;
          var matrix = node.worldMatrix;
          var tx = matrix.m12;
          var ty = matrix.m13;
          var points = comp.points;
          var cur;
          if (points.length > 1) {
            var point = points[0];
            var difx = point.point.x - tx;
            var dify = point.point.y - ty;
            if (difx * difx + dify * dify < comp.minSeg) {
              cur = point;
            }
          }
          if (!cur) {
            cur = new MotionStreak.Point();
            points.unshift(cur);
          }
          cur.setPoint(tx, ty);
          cur.time = comp.fadeTime + dt;
          var vertexCount = 0;
          var indexCount = 0;
          if (points.length < 2) {
            return;
          }
          var renderData = comp.renderData;
          this.updateRenderDataCache(comp, renderData);
          var color = comp.color;
          var cr = color.r;
          var cg = color.g;
          var cb = color.b;
          var ca = color.a;
          var prev = points[1];
          prev.distance = Vec2.subtract(_vec2, cur.point, prev.point).length();
          _vec2.normalize();
          prev.setDir(_vec2.x, _vec2.y);
          cur.setDir(_vec2.x, _vec2.y);
          renderData.dataLength = points.length * 2;
          var data = renderData.data;
          var fadeTime = comp.fadeTime;
          var findLast = false;
          for (var i = points.length - 1; i >= 0; i--) {
            var p = points[i];
            var _point = p.point;
            var dir = p.dir;
            p.time -= dt;
            if (p.time < 0) {
              points.splice(i, 1);
              continue;
            }
            var progress = p.time / fadeTime;
            var next = points[i - 1];
            if (!findLast) {
              if (!next) {
                points.splice(i, 1);
                continue;
              }
              _point.x = next.point.x - dir.x * progress;
              _point.y = next.point.y - dir.y * progress;
            }
            findLast = true;
            normal(_normal, dir);
            var da = progress * ca;
            var c = (da << 24 >>> 0) + (cb << 16) + (cg << 8) + cr;
            var offset = vertexCount;
            data[offset].x = _point.x + _normal.x * stroke;
            data[offset].y = _point.y + _normal.y * stroke;
            data[offset].u = 1;
            data[offset].v = progress;
            data[offset].color._val = c;
            offset += 1;
            data[offset].x = _point.x - _normal.x * stroke;
            data[offset].y = _point.y - _normal.y * stroke;
            data[offset].u = 0;
            data[offset].v = progress;
            data[offset].color._val = c;
            vertexCount += 2;
          }
          indexCount = vertexCount <= 2 ? 0 : (vertexCount - 2) * 3;
          renderData.resize(vertexCount, indexCount); // resize
          if (JSB) {
            var _indexCount = renderData.indexCount;
            this.createQuadIndices(comp, _indexCount);
            renderData.chunk.setIndexBuffer(QUAD_INDICES);

            //  Fill all dataList to vData
            this.updateWorldVertexAllData(comp);
            renderData.updateRenderData(comp, comp.texture);
            comp.markForUpdateRenderData();
          }
        },
        updateWorldVertexAllData: function updateWorldVertexAllData(comp) {
          var renderData = comp.renderData;
          var stride = renderData.floatStride;
          var dataList = renderData.data;
          var vData = renderData.chunk.vb;
          for (var i = 0; i < dataList.length; i++) {
            var offset = i * stride;
            vData[offset + 0] = dataList[i].x;
            vData[offset + 1] = dataList[i].y;
            vData[offset + 2] = dataList[i].z;
            vData[offset + 3] = dataList[i].u;
            vData[offset + 4] = dataList[i].v;
            Color.toArray(vData, dataList[i].color, offset + 5);
          }
        },
        createQuadIndices: function createQuadIndices(comp, indexCount) {
          var renderData = comp.renderData;
          var chunk = renderData.chunk;
          var vid = 0;
          var meshBuffer = chunk.meshBuffer;
          var indexOffset = meshBuffer.indexOffset;
          QUAD_INDICES = null;
          QUAD_INDICES = new Uint16Array(indexCount);
          for (var i = 0, l = indexCount; i < l; i += 2) {
            var start = vid + i;
            QUAD_INDICES[indexOffset++] = start;
            QUAD_INDICES[indexOffset++] = start + 2;
            QUAD_INDICES[indexOffset++] = start + 1;
            QUAD_INDICES[indexOffset++] = start + 1;
            QUAD_INDICES[indexOffset++] = start + 2;
            QUAD_INDICES[indexOffset++] = start + 3;
          }
        },
        updateRenderDataCache: function updateRenderDataCache(comp, renderData) {
          if (renderData.passDirty) {
            renderData.updatePass(comp);
          }
          if (renderData.nodeDirty) {
            renderData.updateNode(comp);
          }
          if (renderData.textureDirty && comp.texture) {
            renderData.updateTexture(comp.texture);
            renderData.material = comp.getRenderMaterial(0);
          }
          if (renderData.hashDirty) {
            renderData.updateHash();
          }
        },
        updateRenderData: function updateRenderData(comp) {
          if (JSB) {
            // A dirty hack
            // The world matrix was updated in advance and needs to be avoided at the cpp level
            // Need a flag to explicitly not update the world transform to solve this problem
            comp.renderData.renderDrawInfo.setVertDirty(false);
            comp.node.hasChangedFlags = 0;
          }
        },
        updateColor: function updateColor(comp) {},
        fillBuffers: function fillBuffers(comp, renderer) {
          var renderData = comp.renderData;
          var chunk = renderData.chunk;
          var dataList = renderData.data;
          var vertexCount = renderData.vertexCount;
          var indexCount = renderData.indexCount;
          var vData = chunk.vb;
          var vertexOffset = 0;
          for (var i = 0; i < vertexCount; i++) {
            var vert = dataList[i];
            vData[vertexOffset++] = vert.x;
            vData[vertexOffset++] = vert.y;
            vData[vertexOffset++] = vert.z;
            vData[vertexOffset++] = vert.u;
            vData[vertexOffset++] = vert.v;
            Color.toArray(vData, vert.color, vertexOffset);
            vertexOffset += 4;
          }

          // fill index data
          var bid = chunk.bufferId;
          var vid = chunk.vertexOffset;
          var meshBuffer = chunk.meshBuffer;
          var ib = chunk.meshBuffer.iData;
          var indexOffset = meshBuffer.indexOffset;
          for (var _i = 0, l = indexCount; _i < l; _i += 2) {
            var start = vid + _i;
            ib[indexOffset++] = start;
            ib[indexOffset++] = start + 2;
            ib[indexOffset++] = start + 1;
            ib[indexOffset++] = start + 1;
            ib[indexOffset++] = start + 2;
            ib[indexOffset++] = start + 3;
          }
          meshBuffer.indexOffset += renderData.indexCount;
          meshBuffer.setDirty();
        }
      });
      _export("MotionStreakAssemblerManager", MotionStreakAssemblerManager = {
        getAssembler: function getAssembler(comp) {
          return MotionStreakAssembler;
        }
      });
      MotionStreak.Assembler = MotionStreakAssemblerManager;
    }
  };
});