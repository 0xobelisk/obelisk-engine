System.register("q-bundled:///fs/cocos/physics/bullet/character-controllers/bullet-box-character-controller.js", ["../../../core/index.js", "../../framework/index.js", "./bullet-character-controller.js", "../../../core/utils/misc.js", "../instantiated.js", "../bullet-cache.js", "../bullet-env.js"], function (_export, _context) {
  "use strict";

  var Vec3, PhysicsSystem, BulletCharacterController, degreesToRadians, bt, BulletCache, importFunc, BulletBoxCharacterController, v3_0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
  _export("BulletBoxCharacterController", void 0);
  return {
    setters: [function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }, function (_frameworkIndexJs) {
      PhysicsSystem = _frameworkIndexJs.PhysicsSystem;
    }, function (_bulletCharacterControllerJs) {
      BulletCharacterController = _bulletCharacterControllerJs.BulletCharacterController;
    }, function (_coreUtilsMiscJs) {
      degreesToRadians = _coreUtilsMiscJs.degreesToRadians;
    }, function (_instantiatedJs) {
      bt = _instantiatedJs.bt;
    }, function (_bulletCacheJs) {
      BulletCache = _bulletCacheJs.BulletCache;
    }, function (_bulletEnvJs) {
      importFunc = _bulletEnvJs.importFunc;
    }],
    execute: function () {
      v3_0 = new Vec3(0, 0, 0);
      _export("BulletBoxCharacterController", BulletBoxCharacterController = class BulletBoxCharacterController extends BulletCharacterController {
        get component() {
          return this._comp;
        }
        onComponentSet() {
          this.component.node.getWorldPosition(v3_0);
          v3_0.add(this.scaledCenter);
          const pos = BulletCache.instance.BT_V3_0;
          bt.Vec3_set(pos, v3_0.x, v3_0.y, v3_0.z);
          const upDir = Vec3.UNIT_Y;
          const up = BulletCache.instance.BT_V3_1;
          bt.Vec3_set(up, upDir.x, upDir.y, upDir.z);
          const report = bt.ControllerHitReport.implement(importFunc).$$.ptr;
          const bulletWorld = PhysicsSystem.instance.physicsWorld;
          const controllerDesc = bt.BoxCharacterControllerDesc_new(degreesToRadians(this.component.slopeLimit), this.component.stepOffset, this.component.skinWidth, up, pos, report,
          //btUserControllerHitReport
          this.component.halfHeight, this.component.halfSideExtent, this.component.halfForwardExtent);
          this._impl = bt.BoxCharacterController_new(bulletWorld.impl, controllerDesc, 0 /*?*/);

          this.updateScale();
        }
        setHalfHeight(value) {
          this.updateScale();
        }
        setHalfSideExtent(value) {
          this.updateScale();
        }
        setHalfForwardExtent(value) {
          this.updateScale();
        }
        updateScale() {
          this.updateGeometry();
        }
        updateGeometry() {
          const ws = this.component.node.worldScale;
          bt.BoxCharacterController_setHalfSideExtent(this.impl, this.component.halfSideExtent * ws.x);
          bt.BoxCharacterController_setHalfHeight(this.impl, this.component.halfHeight * ws.y);
          bt.BoxCharacterController_setHalfForwardExtent(this.impl, this.component.halfForwardExtent * ws.z);
          this._dirty = true;
        }
      });
    }
  };
});