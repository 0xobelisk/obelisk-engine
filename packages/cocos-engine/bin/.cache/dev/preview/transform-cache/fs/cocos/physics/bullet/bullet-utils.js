System.register("q-bundled:///fs/cocos/physics/bullet/bullet-utils.js", ["../../gfx/index.js", "./instantiated.js", "./bullet-cache.js"], function (_export, _context) {
  "use strict";

  var PrimitiveMode, bt, BulletCache;
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

  function cocos2BulletVec3(out, v) {
    bt.Vec3_set(out, v.x, v.y, v.z);
    return out;
  }
  function bullet2CocosVec3(out, v) {
    var rawVertexBuffer = bt.HEAPF32.subarray(v / 4, v / 4 + 3);
    out.x = rawVertexBuffer[0];
    out.y = rawVertexBuffer[1];
    out.z = rawVertexBuffer[2];
    return out;
  }
  function cocos2BulletQuat(out, q) {
    bt.Quat_set(out, q.x, q.y, q.z, q.w);
    return out;
  }
  function bullet2CocosQuat(out, q) {
    var rawVertexBuffer = bt.HEAPF32.subarray(q / 4, q / 4 + 4);
    out.x = rawVertexBuffer[0];
    out.y = rawVertexBuffer[1];
    out.z = rawVertexBuffer[2];
    out.w = rawVertexBuffer[3];
    return out;
  }
  function cocos2BulletTriMesh(out, mesh) {
    var len = mesh.renderingSubMeshes.length;
    for (var i = 0; i < len; i++) {
      var subMesh = mesh.renderingSubMeshes[i];
      var geoInfo = subMesh.geometricInfo;
      if (geoInfo) {
        var primitiveMode = subMesh.primitiveMode;
        var vb = geoInfo.positions;
        var ib = geoInfo.indices;
        var v0 = BulletCache.instance.BT_V3_0;
        var v1 = BulletCache.instance.BT_V3_1;
        var v2 = BulletCache.instance.BT_V3_2;
        if (primitiveMode === PrimitiveMode.TRIANGLE_LIST) {
          var cnt = ib.length;
          for (var j = 0; j < cnt; j += 3) {
            var i0 = ib[j] * 3;
            var i1 = ib[j + 1] * 3;
            var i2 = ib[j + 2] * 3;
            bt.Vec3_set(v0, vb[i0], vb[i0 + 1], vb[i0 + 2]);
            bt.Vec3_set(v1, vb[i1], vb[i1 + 1], vb[i1 + 2]);
            bt.Vec3_set(v2, vb[i2], vb[i2 + 1], vb[i2 + 2]);
            bt.TriangleMesh_addTriangle(out, v0, v1, v2, false);
          }
        } else if (primitiveMode === PrimitiveMode.TRIANGLE_STRIP) {
          var _cnt = ib.length - 2;
          var rev = 0;
          for (var _j = 0; _j < _cnt; _j += 1) {
            var _i = ib[_j - rev] * 3;
            var _i2 = ib[_j + rev + 1] * 3;
            var _i3 = ib[_j + 2] * 3;
            rev = ~rev;
            bt.Vec3_set(v0, vb[_i], vb[_i + 1], vb[_i + 2]);
            bt.Vec3_set(v1, vb[_i2], vb[_i2 + 1], vb[_i2 + 2]);
            bt.Vec3_set(v2, vb[_i3], vb[_i3 + 1], vb[_i3 + 2]);
            bt.TriangleMesh_addTriangle(out, v0, v1, v2, false);
          }
        } else if (primitiveMode === PrimitiveMode.TRIANGLE_FAN) {
          var _cnt2 = ib.length - 1;
          var _i4 = ib[0] * 3;
          bt.Vec3_set(v0, vb[_i4], vb[_i4 + 1], vb[_i4 + 2]);
          for (var _j2 = 1; _j2 < _cnt2; _j2 += 1) {
            var _i5 = ib[_j2] * 3;
            var _i6 = ib[_j2 + 1] * 3;
            bt.Vec3_set(v1, vb[_i5], vb[_i5 + 1], vb[_i5 + 2]);
            bt.Vec3_set(v2, vb[_i6], vb[_i6 + 1], vb[_i6 + 2]);
            bt.TriangleMesh_addTriangle(out, v0, v1, v2, false);
          }
        }
      }
    }
    return out;
  }
  function force2Impulse(force, dt) {
    return force * dt;
  }
  function impulse2Force(impulse, dt) {
    return impulse / dt;
  }
  _export({
    cocos2BulletVec3: cocos2BulletVec3,
    bullet2CocosVec3: bullet2CocosVec3,
    cocos2BulletQuat: cocos2BulletQuat,
    bullet2CocosQuat: bullet2CocosQuat,
    cocos2BulletTriMesh: cocos2BulletTriMesh,
    force2Impulse: force2Impulse,
    impulse2Force: impulse2Force
  });
  return {
    setters: [function (_gfxIndexJs) {
      PrimitiveMode = _gfxIndexJs.PrimitiveMode;
    }, function (_instantiatedJs) {
      bt = _instantiatedJs.bt;
    }, function (_bulletCacheJs) {
      BulletCache = _bulletCacheJs.BulletCache;
    }],
    execute: function () {}
  };
});