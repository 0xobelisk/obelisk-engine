System.register("q-bundled:///fs/cocos/primitive/capsule.js", ["../core/index.js"], function (_export, _context) {
  "use strict";

  var Vec3, temp1, temp2;
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
  function capsule(radiusTop, radiusBottom, height, opts) {
    if (radiusTop === void 0) {
      radiusTop = 0.5;
    }
    if (radiusBottom === void 0) {
      radiusBottom = 0.5;
    }
    if (height === void 0) {
      height = 2;
    }
    if (opts === void 0) {
      opts = {};
    }
    var torsoHeight = height - radiusTop - radiusBottom;
    var sides = opts.sides || 32;
    var heightSegments = opts.heightSegments || 32;
    var bottomProp = radiusBottom / height;
    var torProp = torsoHeight / height;
    var topProp = radiusTop / height;
    var bottomSegments = Math.floor(heightSegments * bottomProp);
    var topSegments = Math.floor(heightSegments * topProp);
    var torSegments = Math.floor(heightSegments * torProp);
    var topOffset = torsoHeight + radiusBottom - height / 2;
    var torOffset = radiusBottom - height / 2;
    var bottomOffset = radiusBottom - height / 2;
    var arc = opts.arc || 2.0 * Math.PI;

    // calculate vertex count
    var positions = [];
    var normals = [];
    var uvs = [];
    var indices = [];
    var maxRadius = Math.max(radiusTop, radiusBottom);
    var minPos = new Vec3(-maxRadius, -height / 2, -maxRadius);
    var maxPos = new Vec3(maxRadius, height / 2, maxRadius);
    var boundingRadius = height / 2;
    var index = 0;
    var indexArray = [];
    generateBottom();
    generateTorso();
    generateTop();
    return {
      positions: positions,
      normals: normals,
      uvs: uvs,
      indices: indices,
      minPos: minPos,
      maxPos: maxPos,
      boundingRadius: boundingRadius
    };

    // =======================
    // internal fucntions
    // =======================

    function generateTorso() {
      // this will be used to calculate the normal
      var slope = (radiusTop - radiusBottom) / torsoHeight;

      // generate positions, normals and uvs
      for (var y = 0; y <= torSegments; y++) {
        var indexRow = [];
        var lat = y / torSegments;
        var radius = lat * (radiusTop - radiusBottom) + radiusBottom;
        for (var x = 0; x <= sides; ++x) {
          var u = x / sides;
          var v = lat * torProp + bottomProp;
          var theta = u * arc - arc / 4;
          var sinTheta = Math.sin(theta);
          var cosTheta = Math.cos(theta);

          // vertex
          positions.push(radius * sinTheta);
          positions.push(lat * torsoHeight + torOffset);
          positions.push(radius * cosTheta);

          // normal
          Vec3.normalize(temp1, Vec3.set(temp2, sinTheta, -slope, cosTheta));
          normals.push(temp1.x);
          normals.push(temp1.y);
          normals.push(temp1.z);

          // uv
          uvs.push(u, v);
          // save index of vertex in respective row
          indexRow.push(index);

          // increase index
          ++index;
        }

        // now save positions of the row in our index array
        indexArray.push(indexRow);
      }

      // generate indices
      for (var _y = 0; _y < torSegments; ++_y) {
        for (var _x = 0; _x < sides; ++_x) {
          // we use the index array to access the correct indices
          var i1 = indexArray[_y][_x];
          var i2 = indexArray[_y + 1][_x];
          var i3 = indexArray[_y + 1][_x + 1];
          var i4 = indexArray[_y][_x + 1];

          // face one
          indices.push(i1);
          indices.push(i4);
          indices.push(i2);

          // face two
          indices.push(i4);
          indices.push(i3);
          indices.push(i2);
        }
      }
    }
    function generateBottom() {
      for (var lat = 0; lat <= bottomSegments; ++lat) {
        var theta = lat * Math.PI / bottomSegments / 2;
        var sinTheta = Math.sin(theta);
        var cosTheta = -Math.cos(theta);
        for (var lon = 0; lon <= sides; ++lon) {
          var phi = lon * 2 * Math.PI / sides - Math.PI / 2.0;
          var sinPhi = Math.sin(phi);
          var cosPhi = Math.cos(phi);
          var x = sinPhi * sinTheta;
          var y = cosTheta;
          var z = cosPhi * sinTheta;
          var u = lon / sides;
          var v = lat / heightSegments;
          positions.push(x * radiusBottom, y * radiusBottom + bottomOffset, z * radiusBottom);
          normals.push(x, y, z);
          uvs.push(u, v);
          if (lat < bottomSegments && lon < sides) {
            var seg1 = sides + 1;
            var a = seg1 * lat + lon;
            var b = seg1 * (lat + 1) + lon;
            var c = seg1 * (lat + 1) + lon + 1;
            var d = seg1 * lat + lon + 1;
            indices.push(a, d, b);
            indices.push(d, c, b);
          }
          ++index;
        }
      }
    }
    function generateTop() {
      for (var lat = 0; lat <= topSegments; ++lat) {
        var theta = lat * Math.PI / topSegments / 2 + Math.PI / 2;
        var sinTheta = Math.sin(theta);
        var cosTheta = -Math.cos(theta);
        for (var lon = 0; lon <= sides; ++lon) {
          var phi = lon * 2 * Math.PI / sides - Math.PI / 2.0;
          var sinPhi = Math.sin(phi);
          var cosPhi = Math.cos(phi);
          var x = sinPhi * sinTheta;
          var y = cosTheta;
          var z = cosPhi * sinTheta;
          var u = lon / sides;
          var v = lat / heightSegments + (1 - topProp);
          positions.push(x * radiusTop, y * radiusTop + topOffset, z * radiusTop);
          normals.push(x, y, z);
          uvs.push(u, v);
          if (lat < topSegments && lon < sides) {
            var seg1 = sides + 1;
            var a = seg1 * lat + lon + indexArray[torSegments][sides] + 1;
            var b = seg1 * (lat + 1) + lon + indexArray[torSegments][sides] + 1;
            var c = seg1 * (lat + 1) + lon + 1 + indexArray[torSegments][sides] + 1;
            var d = seg1 * lat + lon + 1 + indexArray[torSegments][sides] + 1;
            indices.push(a, d, b);
            indices.push(d, c, b);
          }
        }
      }
    }
  }
  _export("default", capsule);
  return {
    setters: [function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }],
    execute: function () {
      /**
       * @en
       * The definition of the parameter for building a capsule.
       * @zh
       * 胶囊体参数选项。
       */
      temp1 = new Vec3(0, 0, 0);
      temp2 = new Vec3(0, 0, 0);
      /**
       * Generate a capsule with radiusTop radiusBottom 0.5, height 2, centered at origin,
       * but may be repositioned through the `center` option.
       * @zh
       * 生成一个胶囊体。
       * @param radiusTop @zh 顶部半径。 @en The radius of top sphere
       * @param radiusBottom @zh 底部半径。@en The radius of bottom sphere
       * @param opts @zh 胶囊体参数选项。@en The optional creation parameters of the capsule
       */
    }
  };
});