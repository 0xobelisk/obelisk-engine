System.register("q-bundled:///fs/cocos/2d/assembler/graphics/webgl/graphics-assembler.js", ["../../../../../../virtual/internal%253Aconstants.js", "../../../../core/index.js", "../types.js", "./earcut.js", "./impl.js"], function (_export, _context) {
  "use strict";

  var JSB, Color, Vec3, LineCap, LineJoin, PointFlags, Earcut, Point, MAX_VERTEX, MAX_INDICES, PI, min, max, ceil, acos, cos, sin, atan2, attrBytes, _renderData, _impl, _curColor, vec3_temps, i, graphicsAssembler;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             http://www.cocos.com
                                                                                                                                                                                                                                                                                                                                                                                            
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
  function curveDivs(r, arc, tol) {
    var da = acos(r / (r + tol)) * 2.0;
    return max(2, ceil(arc / da));
  }
  function clamp(v, minNum, maxNum) {
    if (v < minNum) {
      return minNum;
    } else if (v > maxNum) {
      return maxNum;
    }
    return v;
  }

  /**
   * graphics 组装器
   * 可通过 `UI.graphicsAssembler` 获取该组装器。
   */
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      Vec3 = _coreIndexJs.Vec3;
    }, function (_typesJs) {
      LineCap = _typesJs.LineCap;
      LineJoin = _typesJs.LineJoin;
      PointFlags = _typesJs.PointFlags;
    }, function (_earcutJs) {
      Earcut = _earcutJs.earcut;
    }, function (_implJs) {
      Point = _implJs.Point;
    }],
    execute: function () {
      MAX_VERTEX = 65535;
      MAX_INDICES = MAX_VERTEX * 2;
      PI = Math.PI;
      min = Math.min;
      max = Math.max;
      ceil = Math.ceil;
      acos = Math.acos;
      cos = Math.cos;
      sin = Math.sin;
      atan2 = Math.atan2;
      attrBytes = 8;
      _renderData = null;
      _impl = null;
      _curColor = new Color();
      vec3_temps = [];
      for (i = 0; i < 4; i++) {
        vec3_temps.push(new Vec3());
      }
      _export("graphicsAssembler", graphicsAssembler = {
        useModel: true,
        updateRenderData: function updateRenderData(graphics) {
          if (JSB) {
            if (graphics.renderData) {
              graphics.renderData.material = graphics.getMaterialInstance(0);
            }
          }
        },
        fillBuffers: function fillBuffers(graphics, renderer) {
          // this.renderIA!(graphics, renderer);
        },
        renderIA: function renderIA(graphics, renderer) {},
        getRenderData: function getRenderData(graphics, vertexCount) {
          if (!_impl) {
            return null;
          }
          var renderDataList = _impl.getRenderDataList();
          var renderData = renderDataList[_impl.dataOffset];
          if (!renderData) {
            return null;
          }
          var meshBuffer = renderData;
          var maxVertexCount = meshBuffer ? meshBuffer.vertexStart + vertexCount : 0;
          if (maxVertexCount > MAX_VERTEX || maxVertexCount * 3 > MAX_INDICES) {
            ++_impl.dataOffset;
            if (_impl.dataOffset < renderDataList.length) {
              renderData = renderDataList[_impl.dataOffset];
            } else {
              renderData = _impl.requestRenderData();
              renderDataList[_impl.dataOffset] = renderData;
            }
            meshBuffer = renderData;
          }
          if (meshBuffer && meshBuffer.vertexCount < maxVertexCount) {
            meshBuffer.request(vertexCount, vertexCount * 3);
          }
          return renderData;
        },
        stroke: function stroke(graphics) {
          Color.copy(_curColor, graphics.strokeColor);
          // graphics.node.getWorldMatrix(_currMatrix);
          if (!graphics.impl) {
            return;
          }
          this._flattenPaths(graphics.impl);
          this._expandStroke(graphics);
          graphics.impl.updatePathOffset = true;
          this.end(graphics);
        },
        fill: function fill(graphics) {
          Color.copy(_curColor, graphics.fillColor);
          // graphics.node.getWorldMatrix(_currMatrix);

          this._expandFill(graphics);
          if (graphics.impl) {
            graphics.impl.updatePathOffset = true;
          }
          this.end(graphics);
        },
        end: function end(graphics) {
          graphics.markForUpdateRenderData();
        },
        _expandStroke: function _expandStroke(graphics) {
          var w = graphics.lineWidth * 0.5;
          var lineCap = graphics.lineCap;
          var lineJoin = graphics.lineJoin;
          var miterLimit = graphics.miterLimit;
          _impl = graphics.impl;
          if (!_impl) {
            return;
          }
          var nCap = curveDivs(w, PI, _impl.tessTol);
          this._calculateJoins(_impl, w, lineJoin, miterLimit);
          var paths = _impl.paths;

          // Calculate max vertex usage.
          var vertexCount = 0;
          for (var _i = _impl.pathOffset, l = _impl.pathLength; _i < l; _i++) {
            var path = paths[_i];
            var pointsLength = path.points.length;
            if (lineJoin === LineJoin.ROUND) {
              vertexCount += (pointsLength + path.bevel * (nCap + 2) + 1) * 2;
            } else {
              vertexCount += (pointsLength + path.bevel * 5 + 1) * 2;
            } // plus one for loop

            if (!path.closed) {
              // space for caps
              if (lineCap === LineCap.ROUND) {
                vertexCount += (nCap * 2 + 2) * 2;
              } else {
                vertexCount += (3 + 3) * 2;
              }
            }
          }
          var meshBuffer = _renderData = this.getRenderData(graphics, vertexCount);
          if (!meshBuffer) {
            return;
          }
          var vData = meshBuffer.vData;
          var iData = meshBuffer.iData;
          for (var _i2 = _impl.pathOffset, _l = _impl.pathLength; _i2 < _l; _i2++) {
            var _path = paths[_i2];
            var pts = _path.points;
            var _pointsLength = pts.length;
            var offset = meshBuffer.vertexStart;
            var p0 = void 0;
            var p1 = void 0;
            var start = 0;
            var end = 0;
            var loop = _path.closed;
            if (loop) {
              // Looping
              p0 = pts[_pointsLength - 1];
              p1 = pts[0];
              start = 0;
              end = _pointsLength;
            } else {
              // Add cap
              p0 = pts[0];
              p1 = pts[1];
              start = 1;
              end = _pointsLength - 1;
            }
            p1 = p1 || p0;
            if (!loop) {
              // Add cap
              var dPos = new Point(p1.x, p1.y);
              dPos.subtract(p0);
              dPos.normalize();
              var dx = dPos.x;
              var dy = dPos.y;
              if (lineCap === LineCap.BUTT) {
                this._buttCapStart(p0, dx, dy, w, 0);
              } else if (lineCap === LineCap.SQUARE) {
                this._buttCapStart(p0, dx, dy, w, w);
              } else if (lineCap === LineCap.ROUND) {
                this._roundCapStart(p0, dx, dy, w, nCap);
              }
            }
            for (var j = start; j < end; ++j) {
              if (lineJoin === LineJoin.ROUND) {
                this._roundJoin(p0, p1, w, w, nCap);
              } else if ((p1.flags & (PointFlags.PT_BEVEL | PointFlags.PT_INNERBEVEL)) !== 0) {
                this._bevelJoin(p0, p1, w, w);
              } else {
                this._vSet(p1.x + p1.dmx * w, p1.y + p1.dmy * w, 1);
                this._vSet(p1.x - p1.dmx * w, p1.y - p1.dmy * w, -1);
              }
              p0 = p1;
              p1 = pts[j + 1];
            }
            if (loop) {
              // Loop it
              var vDataOffset = offset * attrBytes;
              this._vSet(vData[vDataOffset], vData[vDataOffset + 1], 1);
              this._vSet(vData[vDataOffset + attrBytes], vData[vDataOffset + attrBytes + 1], -1);
            } else {
              // Add cap
              var _dPos = new Point(p1.x, p1.y);
              _dPos.subtract(p0);
              _dPos.normalize();
              var _dx = _dPos.x;
              var _dy = _dPos.y;
              if (lineCap === LineCap.BUTT) {
                this._buttCapEnd(p1, _dx, _dy, w, 0);
              } else if (lineCap === LineCap.SQUARE) {
                this._buttCapEnd(p1, _dx, _dy, w, w);
              } else if (lineCap === LineCap.ROUND) {
                this._roundCapEnd(p1, _dx, _dy, w, nCap);
              }
            }

            // stroke indices
            var indicesOffset = meshBuffer.indexStart;
            for (var begin = offset + 2, over = meshBuffer.vertexStart; begin < over; begin++) {
              iData[indicesOffset++] = begin - 2;
              iData[indicesOffset++] = begin - 1;
              iData[indicesOffset++] = begin;
            }
            meshBuffer.indexStart = indicesOffset;
          }
          _renderData = null;
          _impl = null;
        },
        _expandFill: function _expandFill(graphics) {
          _impl = graphics.impl;
          if (!_impl) {
            return;
          }
          var paths = _impl.paths;

          // Calculate max vertex usage.
          var vertexCount = 0;
          for (var _i3 = _impl.pathOffset, l = _impl.pathLength; _i3 < l; _i3++) {
            var path = paths[_i3];
            var pointsLength = path.points.length;
            vertexCount += pointsLength;
          }
          var renderData = _renderData = this.getRenderData(graphics, vertexCount);
          if (!renderData) {
            return;
          }
          var meshBuffer = renderData;
          var vData = meshBuffer.vData;
          var iData = meshBuffer.iData;
          for (var _i4 = _impl.pathOffset, _l2 = _impl.pathLength; _i4 < _l2; _i4++) {
            var _path2 = paths[_i4];
            var pts = _path2.points;
            var _pointsLength2 = pts.length;
            if (_pointsLength2 === 0) {
              continue;
            }

            // Calculate shape vertices.
            var vertexOffset = renderData.vertexStart;
            for (var j = 0; j < _pointsLength2; ++j) {
              this._vSet(pts[j].x, pts[j].y);
            }
            var indicesOffset = renderData.indexStart;
            if (_path2.complex) {
              var earcutData = [];
              for (var _j = vertexOffset, end = renderData.vertexStart; _j < end; _j++) {
                var vDataOffset = _j * attrBytes;
                earcutData.push(vData[vDataOffset++]);
                earcutData.push(vData[vDataOffset++]);
                earcutData.push(vData[vDataOffset++]);
              }
              var newIndices = Earcut(earcutData, null, 3);
              if (!newIndices || newIndices.length === 0) {
                continue;
              }
              for (var _j2 = 0, nIndices = newIndices.length; _j2 < nIndices; _j2++) {
                iData[indicesOffset++] = newIndices[_j2] + vertexOffset;
              }
            } else {
              var first = vertexOffset;
              for (var start = vertexOffset + 2, _end = meshBuffer.vertexStart; start < _end; start++) {
                iData[indicesOffset++] = first;
                iData[indicesOffset++] = start - 1;
                iData[indicesOffset++] = start;
              }
            }
            meshBuffer.indexStart = indicesOffset;
          }
          _renderData = null;
          _impl = null;
        },
        _calculateJoins: function _calculateJoins(impl, w, lineJoin, miterLimit) {
          var iw = 0.0;
          if (w > 0.0) {
            iw = 1 / w;
          }

          // Calculate which joins needs extra vertices to append, and gather vertex count.
          var paths = impl.paths;
          for (var _i5 = impl.pathOffset, l = impl.pathLength; _i5 < l; _i5++) {
            var path = paths[_i5];
            var pts = path.points;
            var ptsLength = pts.length;
            var p0 = pts[ptsLength - 1];
            var p1 = pts[0];
            var nLeft = 0;
            path.bevel = 0;
            for (var j = 0; j < ptsLength; j++) {
              var dmr2 = 0;
              var cross = 0;
              var limit = 0;

              // perp normals
              var dlx0 = p0.dy;
              var dly0 = -p0.dx;
              var dlx1 = p1.dy;
              var dly1 = -p1.dx;

              // Calculate extrusions
              p1.dmx = (dlx0 + dlx1) * 0.5;
              p1.dmy = (dly0 + dly1) * 0.5;
              dmr2 = p1.dmx * p1.dmx + p1.dmy * p1.dmy;
              if (dmr2 > 0.000001) {
                var scale = 1 / dmr2;
                if (scale > 600) {
                  scale = 600;
                }
                p1.dmx *= scale;
                p1.dmy *= scale;
              }

              // Keep track of left turns.
              cross = p1.dx * p0.dy - p0.dx * p1.dy;
              if (cross > 0) {
                nLeft++;
                p1.flags |= PointFlags.PT_LEFT;
              }

              // Calculate if we should use bevel or miter for inner join.
              limit = max(11, min(p0.len, p1.len) * iw);
              if (dmr2 * limit * limit < 1) {
                p1.flags |= PointFlags.PT_INNERBEVEL;
              }

              // Check to see if the corner needs to be beveled.
              if (p1.flags & PointFlags.PT_CORNER) {
                if (dmr2 * miterLimit * miterLimit < 1 || lineJoin === LineJoin.BEVEL || lineJoin === LineJoin.ROUND) {
                  p1.flags |= PointFlags.PT_BEVEL;
                }
              }
              if ((p1.flags & (PointFlags.PT_BEVEL | PointFlags.PT_INNERBEVEL)) !== 0) {
                path.bevel++;
              }
              p0 = p1;
              p1 = pts[j + 1];
            }
          }
        },
        _flattenPaths: function _flattenPaths(impl) {
          var paths = impl.paths;
          for (var _i6 = impl.pathOffset, l = impl.pathLength; _i6 < l; _i6++) {
            var path = paths[_i6];
            var pts = path.points;
            var p0 = pts[pts.length - 1];
            var p1 = pts[0];
            if (pts.length > 2 && p0.equals(p1)) {
              path.closed = true;
              pts.pop();
              p0 = pts[pts.length - 1];
            }
            for (var j = 0, size = pts.length; j < size; j++) {
              // Calculate segment direction and length
              var dPos = new Point(p1.x, p1.y);
              dPos.subtract(p0);
              p0.len = dPos.length();
              if (dPos.x || dPos.y) {
                dPos.normalize();
              }
              p0.dx = dPos.x;
              p0.dy = dPos.y;
              // Advance
              p0 = p1;
              p1 = pts[j + 1];
            }
          }
        },
        _chooseBevel: function _chooseBevel(bevel, p0, p1, w) {
          var x = p1.x;
          var y = p1.y;
          var x0 = 0;
          var y0 = 0;
          var x1 = 0;
          var y1 = 0;
          if (bevel !== 0) {
            x0 = x + p0.dy * w;
            y0 = y - p0.dx * w;
            x1 = x + p1.dy * w;
            y1 = y - p1.dx * w;
          } else {
            x0 = x1 = x + p1.dmx * w;
            y0 = y1 = y + p1.dmy * w;
          }
          return [x0, y0, x1, y1];
        },
        _buttCapStart: function _buttCapStart(p, dx, dy, w, d) {
          var px = p.x - dx * d;
          var py = p.y - dy * d;
          var dlx = dy;
          var dly = -dx;
          this._vSet(px + dlx * w, py + dly * w, 1);
          this._vSet(px - dlx * w, py - dly * w, -1);
        },
        _buttCapEnd: function _buttCapEnd(p, dx, dy, w, d) {
          var px = p.x + dx * d;
          var py = p.y + dy * d;
          var dlx = dy;
          var dly = -dx;
          this._vSet(px + dlx * w, py + dly * w, 1);
          this._vSet(px - dlx * w, py - dly * w, -1);
        },
        _roundCapStart: function _roundCapStart(p, dx, dy, w, nCap) {
          var px = p.x;
          var py = p.y;
          var dlx = dy;
          var dly = -dx;
          for (var _i7 = 0; _i7 < nCap; _i7++) {
            var a = _i7 / (nCap - 1) * PI;
            var ax = cos(a) * w;
            var ay = sin(a) * w;
            this._vSet(px - dlx * ax - dx * ay, py - dly * ax - dy * ay, 1);
            this._vSet(px, py, 0);
          }
          this._vSet(px + dlx * w, py + dly * w, 1);
          this._vSet(px - dlx * w, py - dly * w, -1);
        },
        _roundCapEnd: function _roundCapEnd(p, dx, dy, w, nCap) {
          var px = p.x;
          var py = p.y;
          var dlx = dy;
          var dly = -dx;
          this._vSet(px + dlx * w, py + dly * w, 1);
          this._vSet(px - dlx * w, py - dly * w, -1);
          for (var _i8 = 0; _i8 < nCap; _i8++) {
            var a = _i8 / (nCap - 1) * PI;
            var ax = cos(a) * w;
            var ay = sin(a) * w;
            this._vSet(px, py, 0);
            this._vSet(px - dlx * ax + dx * ay, py - dly * ax + dy * ay, 1);
          }
        },
        _roundJoin: function _roundJoin(p0, p1, lw, rw, nCap) {
          var dlx0 = p0.dy;
          var dly0 = -p0.dx;
          var dlx1 = p1.dy;
          var dly1 = -p1.dx;
          var p1x = p1.x;
          var p1y = p1.y;
          if ((p1.flags & PointFlags.PT_LEFT) !== 0) {
            var out = this._chooseBevel(p1.flags & PointFlags.PT_INNERBEVEL, p0, p1, lw);
            var lx0 = out[0];
            var ly0 = out[1];
            var lx1 = out[2];
            var ly1 = out[3];
            var a0 = atan2(-dly0, -dlx0);
            var a1 = atan2(-dly1, -dlx1);
            if (a1 > a0) {
              a1 -= PI * 2;
            }
            this._vSet(lx0, ly0, 1);
            this._vSet(p1x - dlx0 * rw, p1.y - dly0 * rw, -1);
            var n = clamp(ceil((a0 - a1) / PI) * nCap, 2, nCap);
            for (var _i9 = 0; _i9 < n; _i9++) {
              var u = _i9 / (n - 1);
              var a = a0 + u * (a1 - a0);
              var rx = p1x + cos(a) * rw;
              var ry = p1y + sin(a) * rw;
              this._vSet(p1x, p1y, 0);
              this._vSet(rx, ry, -1);
            }
            this._vSet(lx1, ly1, 1);
            this._vSet(p1x - dlx1 * rw, p1y - dly1 * rw, -1);
          } else {
            var _out = this._chooseBevel(p1.flags & PointFlags.PT_INNERBEVEL, p0, p1, -rw);
            var rx0 = _out[0];
            var ry0 = _out[1];
            var rx1 = _out[2];
            var ry1 = _out[3];
            var _a = atan2(dly0, dlx0);
            var _a2 = atan2(dly1, dlx1);
            if (_a2 < _a) {
              _a2 += PI * 2;
            }
            this._vSet(p1x + dlx0 * rw, p1y + dly0 * rw, 1);
            this._vSet(rx0, ry0, -1);
            var _n = clamp(ceil((_a2 - _a) / PI) * nCap, 2, nCap);
            for (var _i10 = 0; _i10 < _n; _i10++) {
              var _u = _i10 / (_n - 1);
              var _a3 = _a + _u * (_a2 - _a);
              var lx = p1x + cos(_a3) * lw;
              var ly = p1y + sin(_a3) * lw;
              this._vSet(lx, ly, 1);
              this._vSet(p1x, p1y, 0);
            }
            this._vSet(p1x + dlx1 * rw, p1y + dly1 * rw, 1);
            this._vSet(rx1, ry1, -1);
          }
        },
        _bevelJoin: function _bevelJoin(p0, p1, lw, rw) {
          var rx0 = 0;
          var ry0 = 0;
          var rx1 = 0;
          var ry1 = 0;
          var lx0 = 0;
          var ly0 = 0;
          var lx1 = 0;
          var ly1 = 0;
          var dlx0 = p0.dy;
          var dly0 = -p0.dx;
          var dlx1 = p1.dy;
          var dly1 = -p1.dx;
          if (p1.flags & PointFlags.PT_LEFT) {
            var out = this._chooseBevel(p1.flags & PointFlags.PT_INNERBEVEL, p0, p1, lw);
            lx0 = out[0];
            ly0 = out[1];
            lx1 = out[2];
            ly1 = out[3];
            this._vSet(lx0, ly0, 1);
            this._vSet(p1.x - dlx0 * rw, p1.y - dly0 * rw, -1);
            this._vSet(lx1, ly1, 1);
            this._vSet(p1.x - dlx1 * rw, p1.y - dly1 * rw, -1);
          } else {
            var _out2 = this._chooseBevel(p1.flags & PointFlags.PT_INNERBEVEL, p0, p1, -rw);
            rx0 = _out2[0];
            ry0 = _out2[1];
            rx1 = _out2[2];
            ry1 = _out2[3];
            this._vSet(p1.x + dlx0 * lw, p1.y + dly0 * lw, 1);
            this._vSet(rx0, ry0, -1);
            this._vSet(p1.x + dlx1 * lw, p1.y + dly1 * lw, 1);
            this._vSet(rx1, ry1, -1);
          }
        },
        _vSet: function _vSet(x, y, distance) {
          if (distance === void 0) {
            distance = 0;
          }
          if (!_renderData) {
            return;
          }
          var meshBuffer = _renderData;
          var dataOffset = meshBuffer.vertexStart * attrBytes;
          var vData = meshBuffer.vData;
          // vec3.set(_tempVec3, x, y, 0);
          // vec3.transformMat4(_tempVec3, _tempVec3, _currMatrix);

          vData[dataOffset++] = x;
          vData[dataOffset++] = y;
          vData[dataOffset++] = 0;
          Color.toArray(vData, _curColor, dataOffset);
          dataOffset += 4;
          vData[dataOffset++] = distance;
          meshBuffer.vertexStart++;
        }
      });
    }
  };
});