System.register("q-bundled:///fs/cocos/physics/cannon/constraints/cannon-constraint.js", ["@cocos/cannon"], function (_export, _context) {
  "use strict";

  var CANNON, CannonConstraint;
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
                                                                                                                                                                                                                                                                                                                                                                                            */
  return {
    setters: [function (_cocosCannon) {
      CANNON = _cocosCannon.default;
    }],
    execute: function () {
      CANNON.World.staticBody = new CANNON.Body();
      CANNON.World.idToConstraintMap = {};
      _export("CannonConstraint", CannonConstraint = /*#__PURE__*/function () {
        function CannonConstraint() {
          this._impl = void 0;
          this._com = void 0;
          this._rigidBody = void 0;
          this._connectedBody = void 0;
        }
        var _proto = CannonConstraint.prototype;
        _proto.setConnectedBody = function setConnectedBody(v) {
          if (this._connectedBody === v) return;
          var oldBody2 = this._connectedBody;
          if (oldBody2) {
            var oldSB2 = oldBody2.body.sharedBody;
            oldSB2.removeJoint(this, 1);
          }
          var sb = this._rigidBody.body.sharedBody;
          sb.removeJoint(this, 0);
          if (this._impl) {
            sb.wrappedWorld.removeConstraint(this);
            delete CANNON.World.idToConstraintMap[this._impl.id];
            this._impl = null;
          }
          this._connectedBody = v;
          var connect = this._connectedBody;
          this.onComponentSet();
          this.setEnableCollision(this._com.enableCollision);
          CANNON.World.idToConstraintMap[this._impl.id] = this._impl;
          sb.wrappedWorld.addConstraint(this);
          sb.addJoint(this, 0);
          if (connect) {
            var newSB2 = connect.body.sharedBody;
            newSB2.addJoint(this, 1);
          }
        };
        _proto.setEnableCollision = function setEnableCollision(v) {
          this._impl.collideConnected = v;
        };
        _proto.initialize = function initialize(v) {
          this._com = v;
          this._rigidBody = v.attachedBody;
          this._connectedBody = v.connectedBody;
          this.onComponentSet();
          this.setEnableCollision(v.enableCollision);
          CANNON.World.idToConstraintMap[this._impl.id] = this._impl;
        }

        // virtual
        ;
        _proto.onComponentSet = function onComponentSet() {}

        // virtual
        ;
        _proto.updateScale0 = function updateScale0() {};
        _proto.updateScale1 = function updateScale1() {};
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
          delete CANNON.World.idToConstraintMap[this._impl.id];
          this._com = null;
          this._rigidBody = null;
          this._connectedBody = null;
          this._impl = null;
        };
        _createClass(CannonConstraint, [{
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
        return CannonConstraint;
      }());
    }
  };
});