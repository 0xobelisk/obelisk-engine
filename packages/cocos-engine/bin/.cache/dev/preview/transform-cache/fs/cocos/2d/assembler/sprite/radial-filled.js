System.register("q-bundled:///fs/cocos/2d/assembler/sprite/radial-filled.js", ["../../../../../virtual/internal%253Aconstants.js", "../../../core/index.js", "../../utils/dynamic-atlas/atlas-manager.js"], function (_export, _context) {
  "use strict";

  var JSB, Mat4, Vec2, dynamicAtlasManager, PI_2, EPSILON, m, _vertPos, _vertices, _uvs, _intersectPoint_1, _intersectPoint_2, _center, _triangles, QUAD_INDICES, radialFilled;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
  function _calcIntersectedPoints(left, right, bottom, top, center, angle, intersectPoints) {
    // left bottom, right, top
    var sinAngle = Math.sin(angle);
    sinAngle = Math.abs(sinAngle) > EPSILON ? sinAngle : 0;
    var cosAngle = Math.cos(angle);
    cosAngle = Math.abs(cosAngle) > EPSILON ? cosAngle : 0;
    var tanAngle = 0;
    var cotAngle = 0;
    if (cosAngle !== 0) {
      tanAngle = sinAngle / cosAngle;
      // calculate right and left
      if ((left - center.x) * cosAngle > 0) {
        var yLeft = center.y + tanAngle * (left - center.x);
        intersectPoints[0].x = left;
        intersectPoints[0].y = yLeft;
      }
      if ((right - center.x) * cosAngle > 0) {
        var yRight = center.y + tanAngle * (right - center.x);
        intersectPoints[2].x = right;
        intersectPoints[2].y = yRight;
      }
    }
    if (sinAngle !== 0) {
      cotAngle = cosAngle / sinAngle;
      // calculate  top and bottom
      if ((top - center.y) * sinAngle > 0) {
        var xTop = center.x + cotAngle * (top - center.y);
        intersectPoints[3].x = xTop;
        intersectPoints[3].y = top;
      }
      if ((bottom - center.y) * sinAngle > 0) {
        var xBottom = center.x + cotAngle * (bottom - center.y);
        intersectPoints[1].x = xBottom;
        intersectPoints[1].y = bottom;
      }
    }
  }
  function _calculateVertices(sprite) {
    var uiTrans = sprite.node._uiProps.uiTransformComp;
    var width = uiTrans.width;
    var height = uiTrans.height;
    var appX = uiTrans.anchorX * width;
    var appY = uiTrans.anchorY * height;
    var l = -appX;
    var b = -appY;
    var r = width - appX;
    var t = height - appY;
    var vertices = _vertices;
    vertices[0] = l;
    vertices[1] = b;
    vertices[2] = r;
    vertices[3] = t;
    var fillCenter = sprite.fillCenter;
    var cx = _center.x = Math.min(Math.max(0, fillCenter.x), 1) * (r - l) + l;
    var cy = _center.y = Math.min(Math.max(0, fillCenter.y), 1) * (t - b) + b;
    _vertPos[0].x = _vertPos[3].x = l;
    _vertPos[1].x = _vertPos[2].x = r;
    _vertPos[0].y = _vertPos[1].y = b;
    _vertPos[2].y = _vertPos[3].y = t;
    for (var _i = 0, _triangles2 = _triangles; _i < _triangles2.length; _i++) {
      var num = _triangles2[_i];
      Vec2.set(num, 0, 0);
    }
    if (cx !== vertices[0]) {
      Vec2.set(_triangles[0], 3, 0);
    }
    if (cx !== vertices[2]) {
      Vec2.set(_triangles[2], 1, 2);
    }
    if (cy !== vertices[1]) {
      Vec2.set(_triangles[1], 0, 1);
    }
    if (cy !== vertices[3]) {
      Vec2.set(_triangles[3], 2, 3);
    }
  }
  function _calculateUVs(spriteFrame) {
    var atlasWidth = spriteFrame.width;
    var atlasHeight = spriteFrame.height;
    var textureRect = spriteFrame.getRect();
    var u0 = 0;
    var u1 = 0;
    var v0 = 0;
    var v1 = 0;
    var uvs = _uvs;
    if (spriteFrame.isRotated()) {
      u0 = textureRect.x / atlasWidth;
      u1 = (textureRect.x + textureRect.height) / atlasWidth;
      v0 = textureRect.y / atlasHeight;
      v1 = (textureRect.y + textureRect.width) / atlasHeight;
      uvs[0] = uvs[2] = u0;
      uvs[4] = uvs[6] = u1;
      uvs[3] = uvs[7] = v1;
      uvs[1] = uvs[5] = v0;
    } else {
      u0 = textureRect.x / atlasWidth;
      u1 = (textureRect.x + textureRect.width) / atlasWidth;
      v0 = textureRect.y / atlasHeight;
      v1 = (textureRect.y + textureRect.height) / atlasHeight;
      uvs[0] = uvs[4] = u0;
      uvs[2] = uvs[6] = u1;
      uvs[1] = uvs[3] = v1;
      uvs[5] = uvs[7] = v0;
    }
  }
  function _getVertAngle(start, end) {
    var placementX = end.x - start.x;
    var placementY = end.y - start.y;
    if (placementX === 0 && placementY === 0) {
      return 0;
    } else if (placementX === 0) {
      if (placementY > 0) {
        return Math.PI * 0.5;
      } else {
        return Math.PI * 1.5;
      }
    } else {
      var angle = Math.atan(placementY / placementX);
      if (placementX < 0) {
        angle += Math.PI;
      }
      return angle;
    }
  }
  function _generateTriangle(dataList, offset, vert0, vert1, vert2) {
    var vertices = _vertices;
    var v0x = vertices[0];
    var v0y = vertices[1];
    var v1x = vertices[2];
    var v1y = vertices[3];
    dataList[offset].x = vert0.x;
    dataList[offset].y = vert0.y;
    dataList[offset + 1].x = vert1.x;
    dataList[offset + 1].y = vert1.y;
    dataList[offset + 2].x = vert2.x;
    dataList[offset + 2].y = vert2.y;
    var progressX = 0;
    var progressY = 0;
    progressX = (vert0.x - v0x) / (v1x - v0x);
    progressY = (vert0.y - v0y) / (v1y - v0y);
    _generateUV(progressX, progressY, dataList, offset);
    progressX = (vert1.x - v0x) / (v1x - v0x);
    progressY = (vert1.y - v0y) / (v1y - v0y);
    _generateUV(progressX, progressY, dataList, offset + 1);
    progressX = (vert2.x - v0x) / (v1x - v0x);
    progressY = (vert2.y - v0y) / (v1y - v0y);
    _generateUV(progressX, progressY, dataList, offset + 2);
  }
  function _generateUV(progressX, progressY, data, offset) {
    var uvs = _uvs;
    var px1 = uvs[0] + (uvs[2] - uvs[0]) * progressX;
    var px2 = uvs[4] + (uvs[6] - uvs[4]) * progressX;
    var py1 = uvs[1] + (uvs[3] - uvs[1]) * progressX;
    var py2 = uvs[5] + (uvs[7] - uvs[5]) * progressX;
    var uv = data[offset];
    uv.u = px1 + (px2 - px1) * progressY;
    uv.v = py1 + (py2 - py1) * progressY;
  }

  /**
   * radialFilled 组装器
   * 可通过 `UI.radialFilled` 获取该组装器。
   */
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      Vec2 = _coreIndexJs.Vec2;
    }, function (_utilsDynamicAtlasAtlasManagerJs) {
      dynamicAtlasManager = _utilsDynamicAtlasAtlasManagerJs.dynamicAtlasManager;
    }],
    execute: function () {
      PI_2 = Math.PI * 2;
      EPSILON = 1e-6;
      m = new Mat4();
      _vertPos = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];
      _vertices = new Array(4);
      _uvs = new Array(8);
      _intersectPoint_1 = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];
      _intersectPoint_2 = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];
      _center = new Vec2();
      _triangles = [new Vec2(), new Vec2(), new Vec2(), new Vec2()];
      QUAD_INDICES = null;
      _export("radialFilled", radialFilled = {
        useModel: false,
        createData: function createData(sprite) {
          return sprite.requestRenderData();
        },
        updateRenderData: function updateRenderData(sprite) {
          var frame = sprite.spriteFrame;
          dynamicAtlasManager.packToDynamicAtlas(sprite, frame);
          // TODO update material and uv
          this.updateUVs(sprite);
          var renderData = sprite.renderData;
          if (renderData && frame) {
            if (!renderData.vertDirty) {
              return;
            }
            var dataList = renderData.data;
            var fillStart = sprite.fillStart;
            var fillRange = sprite.fillRange;
            if (fillRange < 0) {
              fillStart += fillRange;
              fillRange = -fillRange;
            }
            // do round fill start [0,1), include 0, exclude 1
            while (fillStart >= 1.0) {
              fillStart -= 1.0;
            }
            while (fillStart < 0.0) {
              fillStart += 1.0;
            }
            fillStart *= PI_2;
            fillRange *= PI_2;
            var fillEnd = fillStart + fillRange;
            // build vertices
            _calculateVertices(sprite);
            // build uvs
            _calculateUVs(frame);
            _calcIntersectedPoints(_vertices[0], _vertices[2], _vertices[1], _vertices[3], _center, fillStart, _intersectPoint_1);
            _calcIntersectedPoints(_vertices[0], _vertices[2], _vertices[1], _vertices[3], _center, fillStart + fillRange, _intersectPoint_2);
            var offset = 0;
            for (var triangleIndex = 0; triangleIndex < 4; ++triangleIndex) {
              var triangle = _triangles[triangleIndex];
              if (!triangle) {
                continue;
              }
              // all in
              if (fillRange >= PI_2) {
                renderData.dataLength = offset + 3;
                _generateTriangle(dataList, offset, _center, _vertPos[triangle.x], _vertPos[triangle.y]);
                offset += 3;
                continue;
              }
              // test against
              var startAngle = _getVertAngle(_center, _vertPos[triangle.x]);
              var endAngle = _getVertAngle(_center, _vertPos[triangle.y]);
              if (endAngle < startAngle) {
                endAngle += PI_2;
              }
              startAngle -= PI_2;
              endAngle -= PI_2;
              // testing
              for (var testIndex = 0; testIndex < 3; ++testIndex) {
                if (startAngle >= fillEnd) {
                  // all out
                } else if (startAngle >= fillStart) {
                  renderData.dataLength = offset + 3;
                  if (endAngle >= fillEnd) {
                    // startAngle to fillEnd
                    _generateTriangle(dataList, offset, _center, _vertPos[triangle.x], _intersectPoint_2[triangleIndex]);
                  } else {
                    // startAngle to endAngle
                    _generateTriangle(dataList, offset, _center, _vertPos[triangle.x], _vertPos[triangle.y]);
                  }
                  offset += 3;
                } else if (endAngle > fillStart) {
                  // startAngle < fillStart
                  if (endAngle <= fillEnd) {
                    renderData.dataLength = offset + 3;
                    // fillStart to endAngle
                    _generateTriangle(dataList, offset, _center, _intersectPoint_1[triangleIndex], _vertPos[triangle.y]);
                    offset += 3;
                  } else {
                    renderData.dataLength = offset + 3;
                    // fillStart to fillEnd
                    _generateTriangle(dataList, offset, _center, _intersectPoint_1[triangleIndex], _intersectPoint_2[triangleIndex]);
                    offset += 3;
                  }
                }
                // add 2 * PI
                startAngle += PI_2;
                endAngle += PI_2;
              }
            }
            // hack for native when offset is 0
            if (offset === 0) {
              renderData.dataLength = 0;
            }
            renderData.resize(offset, offset);
            if (JSB) {
              var indexCount = renderData.indexCount;
              this.createQuadIndices(indexCount);
              renderData.chunk.setIndexBuffer(QUAD_INDICES);
              // may can update color & uv here
              // need dirty
              this.updateWorldUVData(sprite);
              //this.updateColorLate(sprite);
              sprite.renderEntity.colorDirty = true;
            }
            renderData.updateRenderData(sprite, frame);
          }
        },
        createQuadIndices: function createQuadIndices(indexCount) {
          QUAD_INDICES = null;
          QUAD_INDICES = new Uint16Array(indexCount);
          var offset = 0;
          for (var i = 0; i < indexCount; i++) {
            QUAD_INDICES[offset++] = i;
          }
        },
        fillBuffers: function fillBuffers(comp, renderer) {
          var node = comp.node;
          var renderData = comp.renderData;
          var chunk = renderData.chunk;
          if (comp._flagChangedVersion !== node.flagChangedVersion || renderData.vertDirty) {
            this.updateWorldVertexAndUVData(comp, chunk);
            renderData.vertDirty = false;
            comp._flagChangedVersion = node.flagChangedVersion;
          }

          // forColor
          this.updateColorLate(comp);
          var bid = chunk.bufferId;
          var vid = chunk.vertexOffset;
          var meshBuffer = chunk.meshBuffer;
          var ib = chunk.meshBuffer.iData;
          var indexOffset = meshBuffer.indexOffset;
          for (var i = 0; i < renderData.indexCount; i++) {
            ib[indexOffset + i] = vid + i;
          }
          meshBuffer.indexOffset += renderData.indexCount;
          meshBuffer.setDirty();
        },
        updateWorldUVData: function updateWorldUVData(sprite, chunk) {
          var renderData = sprite.renderData;
          var stride = renderData.floatStride;
          var dataList = renderData.data;
          var vData = renderData.chunk.vb;
          for (var i = 0; i < dataList.length; i++) {
            var offset = i * stride;
            vData[offset + 3] = dataList[i].u;
            vData[offset + 4] = dataList[i].v;
          }
        },
        // only for TS
        updateWorldVertexAndUVData: function updateWorldVertexAndUVData(sprite, chunk) {
          var node = sprite.node;
          node.getWorldMatrix(m);
          var renderData = sprite.renderData;
          var stride = renderData.floatStride;
          var dataList = sprite.renderData.data;
          var vData = chunk.vb;
          var vertexCount = renderData.vertexCount;
          var vertexOffset = 0;
          for (var i = 0; i < vertexCount; i++) {
            var vert = dataList[i];
            var x = vert.x;
            var y = vert.y;
            var rhw = m.m03 * x + m.m07 * y + m.m15;
            rhw = rhw ? 1 / rhw : 1;
            vData[vertexOffset + 0] = (m.m00 * x + m.m04 * y + m.m12) * rhw;
            vData[vertexOffset + 1] = (m.m01 * x + m.m05 * y + m.m13) * rhw;
            vData[vertexOffset + 2] = (m.m02 * x + m.m06 * y + m.m14) * rhw;
            vData[vertexOffset + 3] = vert.u;
            vData[vertexOffset + 4] = vert.v;
            vertexOffset += stride;
          }
        },
        // dirty Mark
        // the real update uv is on updateWorldUVData
        updateUVs: function updateUVs(sprite) {
          var renderData = sprite.renderData;
          renderData.vertDirty = true;
          sprite.markForUpdateRenderData();
        },
        // fill color here
        updateColorLate: function updateColorLate(sprite) {
          var renderData = sprite.renderData;
          var vData = renderData.chunk.vb;
          var stride = renderData.floatStride;
          var vertexCount = renderData.vertexCount;
          var colorOffset = 5;
          var color = sprite.color;
          var colorR = color.r / 255;
          var colorG = color.g / 255;
          var colorB = color.b / 255;
          var colorA = sprite.node._uiProps.opacity;
          for (var i = 0; i < vertexCount; i++) {
            vData[colorOffset] = colorR;
            vData[colorOffset + 1] = colorG;
            vData[colorOffset + 2] = colorB;
            vData[colorOffset + 3] = colorA;
            colorOffset += stride;
          }
        },
        // Too early
        updateColor: function updateColor(sprite) {
          // Update color by updateColorLate
        }
      });
    }
  };
});