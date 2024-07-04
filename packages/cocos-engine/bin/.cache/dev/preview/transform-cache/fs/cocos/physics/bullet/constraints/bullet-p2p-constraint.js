System.register("q-bundled:///fs/cocos/physics/bullet/constraints/bullet-p2p-constraint.js", ["./bullet-constraint.js", "../../../core/index.js", "../bullet-cache.js", "../instantiated.js", "../bullet-utils.js"], function (_export, _context) {
  "use strict";

  var BulletConstraint, Vec3, BulletCache, CC_V3_0, bt, cocos2BulletVec3, BulletP2PConstraint;
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
      Vec3 = _coreIndexJs.Vec3;
    }, function (_bulletCacheJs) {
      BulletCache = _bulletCacheJs.BulletCache;
      CC_V3_0 = _bulletCacheJs.CC_V3_0;
    }, function (_instantiatedJs) {
      bt = _instantiatedJs.bt;
    }, function (_bulletUtilsJs) {
      cocos2BulletVec3 = _bulletUtilsJs.cocos2BulletVec3;
    }],
    execute: function () {
      _export("BulletP2PConstraint", BulletP2PConstraint = /*#__PURE__*/function (_BulletConstraint) {
        _inheritsLoose(BulletP2PConstraint, _BulletConstraint);
        function BulletP2PConstraint() {
          return _BulletConstraint.apply(this, arguments) || this;
        }
        var _proto = BulletP2PConstraint.prototype;
        _proto.setPivotA = function setPivotA(v) {
          var cs = this.constraint;
          var pivotA = BulletCache.instance.BT_V3_0;
          Vec3.multiply(CC_V3_0, cs.node.worldScale, cs.pivotA);
          cocos2BulletVec3(pivotA, CC_V3_0);
          bt.P2PConstraint_setPivotA(this._impl, pivotA);
          if (!cs.connectedBody) this.setPivotB(cs.pivotB);
        };
        _proto.setPivotB = function setPivotB(v) {
          var cs = this.constraint;
          var node = this._rigidBody.node;
          var pivotB = BulletCache.instance.BT_V3_0;
          var cb = cs.connectedBody;
          if (cb) {
            Vec3.multiply(CC_V3_0, cb.node.worldScale, cs.pivotB);
            cocos2BulletVec3(pivotB, CC_V3_0);
          } else {
            Vec3.multiply(CC_V3_0, node.worldScale, cs.pivotA);
            Vec3.transformQuat(CC_V3_0, CC_V3_0, node.worldRotation);
            Vec3.add(CC_V3_0, CC_V3_0, node.worldPosition);
            cocos2BulletVec3(pivotB, CC_V3_0);
          }
          bt.P2PConstraint_setPivotB(this._impl, pivotB);
        };
        _proto.onComponentSet = function onComponentSet() {
          var cb = this.constraint.connectedBody;
          var bodyA = this._rigidBody.body.impl;
          var bodyB = cb ? cb.body.impl : bt.TypedConstraint_getFixedBody();
          var pivotA = BulletCache.instance.BT_V3_0;
          var pivotB = BulletCache.instance.BT_V3_1;
          this._impl = bt.P2PConstraint_new(bodyA, bodyB, pivotA, pivotB);
          this.setPivotA(this.constraint.pivotA);
          this.setPivotB(this.constraint.pivotB);
          this.updateDebugDrawSize();
        };
        _proto.updateScale0 = function updateScale0() {
          this.setPivotA(this.constraint.pivotA);
        };
        _proto.updateScale1 = function updateScale1() {
          this.setPivotB(this.constraint.pivotB);
        };
        _createClass(BulletP2PConstraint, [{
          key: "constraint",
          get: function get() {
            return this._com;
          }
        }]);
        return BulletP2PConstraint;
      }(BulletConstraint));
    }
  };
});