System.register("q-bundled:///fs/cocos/physics/bullet/shapes/bullet-sphere-shape.js", ["./bullet-shape.js", "../../../../exports/physics-framework.js", "../bullet-utils.js", "../bullet-cache.js", "../instantiated.js", "../../../core/index.js"], function (_export, _context) {
  "use strict";

  var BulletShape, PhysicsSystem, cocos2BulletVec3, BulletCache, CC_V3_0, bt, absMaxComponent, BulletSphereShape;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
  return {
    setters: [function (_bulletShapeJs) {
      BulletShape = _bulletShapeJs.BulletShape;
    }, function (_exportsPhysicsFrameworkJs) {
      PhysicsSystem = _exportsPhysicsFrameworkJs.PhysicsSystem;
    }, function (_bulletUtilsJs) {
      cocos2BulletVec3 = _bulletUtilsJs.cocos2BulletVec3;
    }, function (_bulletCacheJs) {
      BulletCache = _bulletCacheJs.BulletCache;
      CC_V3_0 = _bulletCacheJs.CC_V3_0;
    }, function (_instantiatedJs) {
      bt = _instantiatedJs.bt;
    }, function (_coreIndexJs) {
      absMaxComponent = _coreIndexJs.absMaxComponent;
    }],
    execute: function () {
      _export("BulletSphereShape", BulletSphereShape = /*#__PURE__*/function (_BulletShape) {
        _inheritsLoose(BulletSphereShape, _BulletShape);
        function BulletSphereShape() {
          return _BulletShape.apply(this, arguments) || this;
        }
        var _proto = BulletSphereShape.prototype;
        _proto.updateRadius = function updateRadius() {
          bt.SphereShape_setUnscaledRadius(this.impl, this.getMinUnscaledRadius());
          this.updateCompoundTransform();
        };
        _proto.onComponentSet = function onComponentSet() {
          this._impl = bt.SphereShape_new(this.getMinUnscaledRadius());
          this.updateScale();
        };
        _proto.updateScale = function updateScale() {
          _BulletShape.prototype.updateScale.call(this);
          var scale = this.getMinScale();
          CC_V3_0.set(scale, scale, scale);
          var bt_v3 = BulletCache.instance.BT_V3_0;
          bt.CollisionShape_setLocalScaling(this._impl, cocos2BulletVec3(bt_v3, CC_V3_0));
          this.updateCompoundTransform();
        };
        _proto.getMinUnscaledRadius = function getMinUnscaledRadius() {
          var radius = this.collider.radius;
          var ws = Math.abs(absMaxComponent(this._collider.node.worldScale));
          var minVolumeSize = PhysicsSystem.instance.minVolumeSize;
          return ws * radius < minVolumeSize ? minVolumeSize / ws : radius;
        };
        _proto.getMinScale = function getMinScale() {
          var radius = this.collider.radius;
          var ws = Math.abs(absMaxComponent(this._collider.node.worldScale));
          var minVolumeSize = PhysicsSystem.instance.minVolumeSize;
          return ws * radius < minVolumeSize ? minVolumeSize / radius : ws;
        };
        _createClass(BulletSphereShape, [{
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }]);
        return BulletSphereShape;
      }(BulletShape));
    }
  };
});