System.register("q-bundled:///fs/cocos/physics/physx/character-controllers/physx-box-character-controller.js", ["../../../core/index.js", "../../framework/index.js", "../physx-adapter.js", "./physx-character-controller.js", "../physx-instance.js", "../../../core/utils/misc.js"], function (_export, _context) {
  "use strict";

  var Vec3, PhysicsSystem, PX, PhysXCharacterController, PhysXInstance, degreesToRadians, v3_0, upDir, PhysXBoxCharacterController;
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
    }, function (_frameworkIndexJs) {
      PhysicsSystem = _frameworkIndexJs.PhysicsSystem;
    }, function (_physxAdapterJs) {
      PX = _physxAdapterJs.PX;
    }, function (_physxCharacterControllerJs) {
      PhysXCharacterController = _physxCharacterControllerJs.PhysXCharacterController;
    }, function (_physxInstanceJs) {
      PhysXInstance = _physxInstanceJs.PhysXInstance;
    }, function (_coreUtilsMiscJs) {
      degreesToRadians = _coreUtilsMiscJs.degreesToRadians;
    }],
    execute: function () {
      v3_0 = new Vec3(0, 0, 0);
      upDir = new Vec3(0, 1, 0);
      _export("PhysXBoxCharacterController", PhysXBoxCharacterController = /*#__PURE__*/function (_PhysXCharacterContro) {
        _inheritsLoose(PhysXBoxCharacterController, _PhysXCharacterContro);
        function PhysXBoxCharacterController() {
          return _PhysXCharacterContro.apply(this, arguments) || this;
        }
        var _proto = PhysXBoxCharacterController.prototype;
        _proto.onComponentSet = function onComponentSet() {
          this.create();
        };
        _proto.create = function create() {
          _PhysXCharacterContro.prototype.release.call(this);
          this.component.node.getWorldPosition(v3_0);
          v3_0.add(this.scaledCenter);
          var pxMtl = PhysXInstance.physics.createMaterial(0.5, 0.5, 0.5); //temp
          var physxWorld = PhysicsSystem.instance.physicsWorld;
          var controllerDesc = new PX.PxBoxControllerDesc();
          controllerDesc.halfHeight = this.component.halfHeight;
          controllerDesc.halfSideExtent = this.component.halfSideExtent;
          controllerDesc.halfForwardExtent = this.component.halfForwardExtent;
          controllerDesc.density = 10.0;
          controllerDesc.scaleCoeff = 0.8;
          controllerDesc.volumeGrowth = 1.5;
          controllerDesc.contactOffset = this.component.skinWidth;
          controllerDesc.stepOffset = this.component.stepOffset;
          controllerDesc.slopeLimit = Math.cos(degreesToRadians(this.component.slopeLimit));
          controllerDesc.upDirection = upDir;
          controllerDesc.position = {
            x: v3_0.x,
            y: v3_0.y,
            z: v3_0.z
          }; //PxExtendedVec3
          controllerDesc.setMaterial(pxMtl);
          controllerDesc.setReportCallback(PX.PxUserControllerHitReport.implement(physxWorld.callback.controllerHitReportCB));
          this._impl = PX.createBoxCharacterController(physxWorld.controllerManager, controllerDesc);
          if (this._impl.$$) {
            PX.IMPL_PTR[this._impl.$$.ptr] = this;
            var shapePtr = this._impl.getShape().$$.ptr;
            PX.IMPL_PTR[shapePtr] = this;
          }
          this.updateScale();
        };
        _proto.setHalfHeight = function setHalfHeight(value) {
          this.updateScale();
        };
        _proto.setHalfSideExtent = function setHalfSideExtent(value) {
          this.updateScale();
        };
        _proto.setHalfForwardExtent = function setHalfForwardExtent(value) {
          this.updateScale();
        };
        _proto.updateScale = function updateScale() {
          this.updateGeometry();
        };
        _proto.updateGeometry = function updateGeometry() {
          var ws = this.component.node.worldScale;
          this._impl.setHalfSideExtent(this.component.halfSideExtent * ws.x);
          this._impl.setHalfHeight(this.component.halfHeight * ws.y);
          this._impl.setHalfForwardExtent(this.component.halfForwardExtent * ws.z);
        };
        _createClass(PhysXBoxCharacterController, [{
          key: "component",
          get: function get() {
            return this._comp;
          }
        }]);
        return PhysXBoxCharacterController;
      }(PhysXCharacterController));
    }
  };
});