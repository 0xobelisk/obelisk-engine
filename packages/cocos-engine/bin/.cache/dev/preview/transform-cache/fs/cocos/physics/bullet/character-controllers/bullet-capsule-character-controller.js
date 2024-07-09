System.register("q-bundled:///fs/cocos/physics/bullet/character-controllers/bullet-capsule-character-controller.js", ["../../../core/index.js", "../../framework/index.js", "./bullet-character-controller.js", "../../../core/utils/misc.js", "../instantiated.js", "../bullet-cache.js", "../bullet-env.js"], function (_export, _context) {
  "use strict";

  var Vec3, absMax, PhysicsSystem, BulletCharacterController, degreesToRadians, bt, BulletCache, importFunc, v3_0, BulletCapsuleCharacterController;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
  return {
    setters: [function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      absMax = _coreIndexJs.absMax;
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
      _export("BulletCapsuleCharacterController", BulletCapsuleCharacterController = /*#__PURE__*/function (_BulletCharacterContr) {
        _inheritsLoose(BulletCapsuleCharacterController, _BulletCharacterContr);
        function BulletCapsuleCharacterController() {
          return _BulletCharacterContr.apply(this, arguments) || this;
        }
        var _proto = BulletCapsuleCharacterController.prototype;
        _proto.onComponentSet = function onComponentSet() {
          this.component.node.getWorldPosition(v3_0);
          v3_0.add(this.scaledCenter);
          var pos = BulletCache.instance.BT_V3_0;
          bt.Vec3_set(pos, v3_0.x, v3_0.y, v3_0.z);
          var upDir = Vec3.UNIT_Y;
          var up = BulletCache.instance.BT_V3_1;
          bt.Vec3_set(up, upDir.x, upDir.y, upDir.z);
          var report = bt.ControllerHitReport.implement(importFunc).$$.ptr;
          var bulletWorld = PhysicsSystem.instance.physicsWorld;
          var controllerDesc = bt.CapsuleCharacterControllerDesc_new(degreesToRadians(this.component.slopeLimit), this.component.stepOffset, this.component.skinWidth, up, pos, report,
          //btUserControllerHitReport
          this.component.radius, this.component.height);
          this._impl = bt.CapsuleCharacterController_new(bulletWorld.impl, controllerDesc, 0 /*?*/);

          this.updateScale();
        };
        _proto.setRadius = function setRadius(value) {
          this.updateScale();
        };
        _proto.setHeight = function setHeight(value) {
          this.updateScale();
        };
        _proto.updateScale = function updateScale() {
          this.updateGeometry();
        };
        _proto.updateGeometry = function updateGeometry() {
          var ws = this.component.node.worldScale;
          var r = this.component.radius * absMax(ws.x, ws.z);
          var h = this.component.height * Math.abs(ws.y);
          bt.CapsuleCharacterController_setRadius(this.impl, r);
          bt.CapsuleCharacterController_setHeight(this.impl, h);
          this._dirty = true;
        };
        _createClass(BulletCapsuleCharacterController, [{
          key: "component",
          get: function get() {
            return this._comp;
          }
        }]);
        return BulletCapsuleCharacterController;
      }(BulletCharacterController));
    }
  };
});