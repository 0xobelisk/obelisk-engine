System.register("q-bundled:///fs/cocos/primitive/cylinder.js", ["../core/index.js"], function (_export, _context) {
  "use strict";

  var Vec3, temp1, temp2;
  function cylinder(radiusTop, radiusBottom, height, opts) {
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
    var halfHeight = height * 0.5;
    var radialSegments = opts.radialSegments || 32;
    var heightSegments = opts.heightSegments || 1;
    var capped = opts.capped !== undefined ? opts.capped : true;
    var arc = opts.arc || 2.0 * Math.PI;
    var cntCap = 0;
    if (capped) {
      if (radiusTop > 0) {
        cntCap++;
      }
      if (radiusBottom > 0) {
        cntCap++;
      }
    }

    // calculate vertex count
    var vertCount = (radialSegments + 1) * (heightSegments + 1);
    if (capped) {
      vertCount += (radialSegments + 1) * cntCap + radialSegments * cntCap;
    }

    // calculate index count
    var indexCount = radialSegments * heightSegments * 2 * 3;
    if (capped) {
      indexCount += radialSegments * cntCap * 3;
    }
    var indices = new Array(indexCount);
    var positions = new Array(vertCount * 3);
    var normals = new Array(vertCount * 3);
    var uvs = new Array(vertCount * 2);
    var maxRadius = Math.max(radiusTop, radiusBottom);
    var minPos = new Vec3(-maxRadius, -halfHeight, -maxRadius);
    var maxPos = new Vec3(maxRadius, halfHeight, maxRadius);
    var boundingRadius = Math.sqrt(maxRadius * maxRadius + halfHeight * halfHeight);
    var index = 0;
    var indexOffset = 0;
    generateTorso();
    if (capped) {
      if (radiusBottom > 0) {
        generateCap(false);
      }
      if (radiusTop > 0) {
        generateCap(true);
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

    // =======================
    // internal fucntions
    // =======================

    function generateTorso() {
      var indexArray = [];

      // this will be used to calculate the normal
      var r = radiusTop - radiusBottom;
      var slope = r * r / height * Math.sign(r);

      // generate positions, normals and uvs
      for (var y = 0; y <= heightSegments; y++) {
        var indexRow = [];
        var v = y / heightSegments;

        // calculate the radius of the current row
        var radius = v * r + radiusBottom;
        for (var x = 0; x <= radialSegments; ++x) {
          var u = x / radialSegments;
          var theta = u * arc;
          var sinTheta = Math.sin(theta);
          var cosTheta = Math.cos(theta);

          // vertex
          positions[3 * index] = radius * sinTheta;
          positions[3 * index + 1] = v * height - halfHeight;
          positions[3 * index + 2] = radius * cosTheta;

          // normal
          Vec3.normalize(temp1, Vec3.set(temp2, sinTheta, -slope, cosTheta));
          normals[3 * index] = temp1.x;
          normals[3 * index + 1] = temp1.y;
          normals[3 * index + 2] = temp1.z;

          // uv
          uvs[2 * index] = (1 - u) * 2 % 1;
          uvs[2 * index + 1] = v;

          // save index of vertex in respective row
          indexRow.push(index);

          // increase index
          ++index;
        }

        // now save positions of the row in our index array
        indexArray.push(indexRow);
      }

      // generate indices
      for (var _y = 0; _y < heightSegments; ++_y) {
        for (var _x = 0; _x < radialSegments; ++_x) {
          // we use the index array to access the correct indices
          var i1 = indexArray[_y][_x];
          var i2 = indexArray[_y + 1][_x];
          var i3 = indexArray[_y + 1][_x + 1];
          var i4 = indexArray[_y][_x + 1];

          // face one
          indices[indexOffset] = i1;
          ++indexOffset;
          indices[indexOffset] = i4;
          ++indexOffset;
          indices[indexOffset] = i2;
          ++indexOffset;

          // face two
          indices[indexOffset] = i4;
          ++indexOffset;
          indices[indexOffset] = i3;
          ++indexOffset;
          indices[indexOffset] = i2;
          ++indexOffset;
        }
      }
    }
    function generateCap(top) {
      var radius = top ? radiusTop : radiusBottom;
      var sign = top ? 1 : -1;

      // save the index of the first center vertex
      var centerIndexStart = index;

      // first we generate the center vertex data of the cap.
      // because the geometry needs one set of uvs per face,
      // we must generate a center vertex per face/segment

      for (var x = 1; x <= radialSegments; ++x) {
        // vertex
        positions[3 * index] = 0;
        positions[3 * index + 1] = halfHeight * sign;
        positions[3 * index + 2] = 0;

        // normal
        normals[3 * index] = 0;
        normals[3 * index + 1] = sign;
        normals[3 * index + 2] = 0;

        // uv
        uvs[2 * index] = 0.5;
        uvs[2 * index + 1] = 0.5;

        // increase index
        ++index;
      }

      // save the index of the last center vertex
      var centerIndexEnd = index;

      // now we generate the surrounding positions, normals and uvs

      for (var _x2 = 0; _x2 <= radialSegments; ++_x2) {
        var u = _x2 / radialSegments;
        var theta = u * arc;
        var cosTheta = Math.cos(theta);
        var sinTheta = Math.sin(theta);

        // vertex
        positions[3 * index] = radius * sinTheta;
        positions[3 * index + 1] = halfHeight * sign;
        positions[3 * index + 2] = radius * cosTheta;

        // normal
        normals[3 * index] = 0;
        normals[3 * index + 1] = sign;
        normals[3 * index + 2] = 0;

        // uv
        uvs[2 * index] = 0.5 - sinTheta * 0.5 * sign;
        uvs[2 * index + 1] = 0.5 + cosTheta * 0.5;

        // increase index
        ++index;
      }

      // generate indices

      for (var _x3 = 0; _x3 < radialSegments; ++_x3) {
        var c = centerIndexStart + _x3;
        var i = centerIndexEnd + _x3;
        if (top) {
          // face top
          indices[indexOffset] = i + 1;
          ++indexOffset;
          indices[indexOffset] = c;
          ++indexOffset;
          indices[indexOffset] = i;
          ++indexOffset;
        } else {
          // face bottom
          indices[indexOffset] = c;
          ++indexOffset;
          indices[indexOffset] = i + 1;
          ++indexOffset;
          indices[indexOffset] = i;
          ++indexOffset;
        }
      }
    }
  }
  _export("default", cylinder);
  return {
    setters: [function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }],
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
      /**
       * @en
       * The definition of the parameter for building a cylinder.
       * @zh
       * 圆柱参数选项。
       */
      temp1 = new Vec3(0, 0, 0);
      temp2 = new Vec3(0, 0, 0);
      /**
       * @en
       * Generate a cylinder with radiusTop radiusBottom 0.5, height 2 and centered at origin,
       * but may be repositioned through the `center` option.
       * @zh
       * 生成一个圆柱。
       * @param radiusTop @en Radius of top plane. @zh 顶部半径。
       * @param radiusBottom @en Radius of bottom plane.  @zh 底部半径。
       * @param height @en The cylinder height.  @zh 圆柱的高
       * @param opts @en The optional creation parameters of the cylinder.  @zh 圆柱参数选项。
       */
    }
  };
});