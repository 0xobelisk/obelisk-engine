System.register("q-bundled:///fs/cocos/primitive/torus.js", ["../core/index.js"], function (_export, _context) {
  "use strict";

  var Vec3;
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
  function torus(radius, tube, opts) {
    if (radius === void 0) {
      radius = 0.4;
    }
    if (tube === void 0) {
      tube = 0.1;
    }
    if (opts === void 0) {
      opts = {};
    }
    var radialSegments = opts.radialSegments || 32;
    var tubularSegments = opts.tubularSegments || 32;
    var arc = opts.arc || 2.0 * Math.PI;
    var positions = [];
    var normals = [];
    var uvs = [];
    var indices = [];
    var minPos = new Vec3(-radius - tube, -tube, -radius - tube);
    var maxPos = new Vec3(radius + tube, tube, radius + tube);
    var boundingRadius = radius + tube;
    for (var j = 0; j <= radialSegments; j++) {
      for (var i = 0; i <= tubularSegments; i++) {
        var u = i / tubularSegments;
        var v = j / radialSegments;
        var u1 = u * arc;
        var v1 = v * Math.PI * 2;

        // vertex
        var x = (radius + tube * Math.cos(v1)) * Math.sin(u1);
        var y = tube * Math.sin(v1);
        var z = (radius + tube * Math.cos(v1)) * Math.cos(u1);

        // this vector is used to calculate the normal
        var nx = Math.sin(u1) * Math.cos(v1);
        var ny = Math.sin(v1);
        var nz = Math.cos(u1) * Math.cos(v1);
        positions.push(x, y, z);
        normals.push(nx, ny, nz);
        uvs.push(u, v);
        if (i < tubularSegments && j < radialSegments) {
          var seg1 = tubularSegments + 1;
          var a = seg1 * j + i;
          var b = seg1 * (j + 1) + i;
          var c = seg1 * (j + 1) + i + 1;
          var d = seg1 * j + i + 1;
          indices.push(a, d, b);
          indices.push(d, c, b);
        }
      }
    }
    return {
      positions: positions,
      normals: normals,
      uvs: uvs,
      indices: indices,
      minPos: minPos,
      maxPos: maxPos,
      boundingRadius: boundingRadius
    };
  }
  _export("default", torus);
  return {
    setters: [function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }],
    execute: function () {}
  };
});