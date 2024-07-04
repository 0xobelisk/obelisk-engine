System.register("q-bundled:///fs/cocos/primitive/utils.js", ["../gfx/index.js"], function (_export, _context) {
  "use strict";

  var PrimitiveMode;
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
  /**
   * @deprecated
   */
  function wireframe(indices) {
    var offsets = [[0, 1], [1, 2], [2, 0]];
    var lines = [];
    var lineIDs = {};
    for (var i = 0; i < indices.length; i += 3) {
      for (var k = 0; k < 3; ++k) {
        var i1 = indices[i + offsets[k][0]];
        var i2 = indices[i + offsets[k][1]];

        // check if we already have the line in our lines
        var id = i1 > i2 ? i2 << 16 | i1 : i1 << 16 | i2;
        if (lineIDs[id] === undefined) {
          lineIDs[id] = 0;
          lines.push(i1, i2);
        }
      }
    }
    return lines;
  }

  /**
   * @deprecated
   */
  function invWinding(indices) {
    var newIB = [];
    for (var i = 0; i < indices.length; i += 3) {
      newIB.push(indices[i], indices[i + 2], indices[i + 1]);
    }
    return newIB;
  }

  /**
   * @deprecated
   */
  function toWavefrontOBJ(primitive, scale) {
    if (scale === void 0) {
      scale = 1;
    }
    if (!primitive.indices || !primitive.uvs || !primitive.normals || primitive.primitiveMode !== undefined && primitive.primitiveMode !== PrimitiveMode.TRIANGLE_LIST) {
      return '';
    }
    var v = primitive.positions;
    var t = primitive.uvs;
    var n = primitive.normals;
    var IB = primitive.indices;
    var V = function V(i) {
      return IB[i] + 1 + "/" + (IB[i] + 1) + "/" + (IB[i] + 1);
    };
    var content = '';
    for (var i = 0; i < v.length; i += 3) {
      content += "v " + v[i] * scale + " " + v[i + 1] * scale + " " + v[i + 2] * scale + "\n";
    }
    for (var _i = 0; _i < t.length; _i += 2) {
      content += "vt " + t[_i] + " " + t[_i + 1] + "\n";
    }
    for (var _i2 = 0; _i2 < n.length; _i2 += 3) {
      content += "vn " + n[_i2] + " " + n[_i2 + 1] + " " + n[_i2 + 2] + "\n";
    }
    for (var _i3 = 0; _i3 < IB.length; _i3 += 3) {
      content += "f " + V(_i3) + " " + V(_i3 + 1) + " " + V(_i3 + 2) + "\n";
    }
    return content;
  }

  /**
   * @deprecated
   */
  function normals(positions, nms, length) {
    if (length === void 0) {
      length = 1;
    }
    var verts = new Array(2 * positions.length);
    for (var i = 0; i < positions.length / 3; ++i) {
      var i3 = 3 * i;
      var i6 = 6 * i;

      // line start
      verts[i6 + 0] = positions[i3 + 0];
      verts[i6 + 1] = positions[i3 + 1];
      verts[i6 + 2] = positions[i3 + 2];

      // line end
      verts[i6 + 3] = positions[i3 + 0] + nms[i3 + 0] * length;
      verts[i6 + 4] = positions[i3 + 1] + nms[i3 + 1] * length;
      verts[i6 + 5] = positions[i3 + 2] + nms[i3 + 2] * length;
    }
    return verts;
  }
  _export({
    wireframe: wireframe,
    invWinding: invWinding,
    toWavefrontOBJ: toWavefrontOBJ,
    normals: normals
  });
  return {
    setters: [function (_gfxIndexJs) {
      PrimitiveMode = _gfxIndexJs.PrimitiveMode;
    }],
    execute: function () {}
  };
});