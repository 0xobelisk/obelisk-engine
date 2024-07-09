System.register("q-bundled:///fs/cocos/physics/bullet/constraints/bullet-constraint.js", ["../../framework/index.js", "../instantiated.js"], function (_export, _context) {
  "use strict";

  var PhysicsSystem, bt, EBulletType, BulletConstraint;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
                                                                                                                                                                                                                                                                                                                                                                                            */ /* eslint-disable new-cap */
  return {
    setters: [function (_frameworkIndexJs) {
      PhysicsSystem = _frameworkIndexJs.PhysicsSystem;
    }, function (_instantiatedJs) {
      bt = _instantiatedJs.bt;
      EBulletType = _instantiatedJs.EBulletType;
    }],
    execute: function () {
      _export("BulletConstraint", BulletConstraint = /*#__PURE__*/function () {
        function BulletConstraint() {
          this.dirty = 0;
          this.index = -1;
          this._impl = 0;
          this._com = void 0;
          this._rigidBody = void 0;
          this._connectedBody = null;
          this._collided = false;
        }
        var _proto = BulletConstraint.prototype;
        _proto.setConnectedBody = function setConnectedBody(v) {
          if (this._connectedBody === v) return;
          // clear old joint info
          var oldBody2 = this._connectedBody;
          if (oldBody2) {
            var oldSB2 = oldBody2.body.sharedBody;
            oldSB2.removeJoint(this, 1);
          }
          var sb = this._rigidBody.body.sharedBody;
          sb.removeJoint(this, 0);
          if (this._impl) {
            sb.wrappedWorld.removeConstraint(this);
            bt._safe_delete(this._impl, EBulletType.EBulletTypeTypedConstraint); // delete old bullet constraint
          }

          this._connectedBody = v;
          var connect = this._connectedBody;
          // create the new joint
          this.onComponentSet();
          this.setEnableCollision(this._collided);
          sb.wrappedWorld.addConstraint(this);
          sb.addJoint(this, 0);
          // fill new joint info
          if (connect) {
            var sb2 = connect.body.sharedBody;
            sb2.addJoint(this, 1);
          }
        };
        _proto.setEnableCollision = function setEnableCollision(v) {
          if (this._collided !== v) {
            this._collided = v;
            this.updateByReAdd();
          }
        };
        _proto.updateByReAdd = function updateByReAdd() {
          if (this._rigidBody && this.index >= 0) {
            var sb = this._rigidBody.body.sharedBody;
            sb.wrappedWorld.removeConstraint(this);
            sb.wrappedWorld.addConstraint(this);
          }
        };
        _proto.initialize = function initialize(v) {
          this._com = v;
          this._rigidBody = v.attachedBody;
          this._connectedBody = v.connectedBody;
          this._collided = v.enableCollision;
          this.onComponentSet();
          this.setEnableCollision(this._collided);
        };
        _proto.updateDebugDrawSize = function updateDebugDrawSize() {
          if (this.impl) {
            var size = PhysicsSystem.instance.physicsWorld.debugDrawConstraintSize;
            bt.TypedConstraint_setDbgDrawSize(this.impl, size);
          }
        }

        // virtual
        ;
        _proto.onEnable = function onEnable() {
          var sb = this._rigidBody.body.sharedBody;
          sb.wrappedWorld.addConstraint(this);
          sb.addJoint(this, 0);
          var connect = this._connectedBody;
          if (connect) {
            var sb2 = connect.body.sharedBody;
            sb2.addJoint(this, 1);
          }
        };
        _proto.onDisable = function onDisable() {
          var sb = this._rigidBody.body.sharedBody;
          sb.wrappedWorld.removeConstraint(this);
          sb.removeJoint(this, 0);
          var connect = this._connectedBody;
          if (connect) {
            var sb2 = connect.body.sharedBody;
            sb2.removeJoint(this, 1);
          }
        };
        _proto.onDestroy = function onDestroy() {
          bt._safe_delete(this._impl, EBulletType.EBulletTypeTypedConstraint);
          this._com = null;
          this._rigidBody = null;
          this._connectedBody = null;
        };
        _createClass(BulletConstraint, [{
          key: "impl",
          get: function get() {
            return this._impl;
          }
        }, {
          key: "constraint",
          get: function get() {
            return this._com;
          }
        }]);
        return BulletConstraint;
      }());
    }
  };
});