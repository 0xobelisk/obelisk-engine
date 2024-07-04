System.register("q-bundled:///fs/cocos/physics/bullet/constraints/bullet-fixed-constraint.js", ["./bullet-constraint.js", "../../../core/index.js", "../bullet-cache.js", "../instantiated.js", "../bullet-utils.js"], function (_export, _context) {
  "use strict";

  var BulletConstraint, Mat4, BulletCache, CC_MAT4_0, CC_QUAT_0, CC_V3_0, bt, cocos2BulletQuat, cocos2BulletVec3, BulletFixedConstraint;
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
                                                                                                                                                                                                           */ /* eslint-disable new-cap */
  return {
    setters: [function (_bulletConstraintJs) {
      BulletConstraint = _bulletConstraintJs.BulletConstraint;
    }, function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
    }, function (_bulletCacheJs) {
      BulletCache = _bulletCacheJs.BulletCache;
      CC_MAT4_0 = _bulletCacheJs.CC_MAT4_0;
      CC_QUAT_0 = _bulletCacheJs.CC_QUAT_0;
      CC_V3_0 = _bulletCacheJs.CC_V3_0;
    }, function (_instantiatedJs) {
      bt = _instantiatedJs.bt;
    }, function (_bulletUtilsJs) {
      cocos2BulletQuat = _bulletUtilsJs.cocos2BulletQuat;
      cocos2BulletVec3 = _bulletUtilsJs.cocos2BulletVec3;
    }],
    execute: function () {
      _export("BulletFixedConstraint", BulletFixedConstraint = /*#__PURE__*/function (_BulletConstraint) {
        _inheritsLoose(BulletFixedConstraint, _BulletConstraint);
        function BulletFixedConstraint() {
          return _BulletConstraint.apply(this, arguments) || this;
        }
        var _proto = BulletFixedConstraint.prototype;
        _proto.setBreakForce = function setBreakForce(v) {
          bt.TypedConstraint_setMaxImpulseThreshold(this._impl, v);
        };
        _proto.setBreakTorque = function setBreakTorque(v) {
          // not supported
        };
        _proto.onComponentSet = function onComponentSet() {
          var cb = this.constraint.connectedBody;
          var bodyA = this._rigidBody.body.impl;
          var bodyB = cb ? cb.body.impl : bt.TypedConstraint_getFixedBody();
          var trans0 = BulletCache.instance.BT_TRANSFORM_0;
          var trans1 = BulletCache.instance.BT_TRANSFORM_1;
          this._impl = bt.FixedConstraint_new(bodyA, bodyB, trans0, trans1);
          this.setBreakForce(this.constraint.breakForce);
          this.setBreakTorque(this.constraint.breakTorque);
          this.updateFrames();
          this.updateDebugDrawSize();
        };
        _proto.updateFrames = function updateFrames() {
          var cb = this.constraint.connectedBody;
          var bodyA = this._rigidBody.body.sharedBody;
          var pos = CC_V3_0;
          var rot = CC_QUAT_0;
          var trans0 = BulletCache.instance.BT_TRANSFORM_0;
          var trans1 = BulletCache.instance.BT_TRANSFORM_1;
          var quat = BulletCache.instance.BT_QUAT_0;
          var trans = CC_MAT4_0;
          // the local frame transform respect to bodyA
          Mat4.fromRT(trans, bodyA.node.worldRotation, bodyA.node.worldPosition);
          Mat4.invert(trans, trans);
          Mat4.getRotation(rot, trans);
          Mat4.getTranslation(pos, trans);
          cocos2BulletVec3(bt.Transform_getOrigin(trans0), pos);
          cocos2BulletQuat(quat, rot);
          bt.Transform_setRotation(trans0, quat);
          if (cb) {
            // the local frame transform respect to bodyB
            var bodyB = cb.body.sharedBody;
            Mat4.fromRT(trans, bodyB.node.worldRotation, bodyB.node.worldPosition);
            Mat4.invert(trans, trans);
            Mat4.getRotation(rot, trans);
            Mat4.getTranslation(pos, trans);
            cocos2BulletVec3(bt.Transform_getOrigin(trans1), pos);
            cocos2BulletQuat(quat, rot);
            bt.Transform_setRotation(trans1, quat);
          } else {
            bt.Transform_setIdentity(trans1);
          }
          bt.FixedConstraint_setFrames(this._impl, trans0, trans1);
        };
        _proto.updateScale0 = function updateScale0() {
          this.updateFrames();
        };
        _proto.updateScale1 = function updateScale1() {
          this.updateFrames();
        };
        _createClass(BulletFixedConstraint, [{
          key: "constraint",
          get: function get() {
            return this._com;
          }
        }]);
        return BulletFixedConstraint;
      }(BulletConstraint));
    }
  };
});