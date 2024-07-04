System.register("q-bundled:///fs/cocos/physics/framework/physics-ray-result.js", ["../../core/index.js"], function (_export, _context) {
  "use strict";

  var Vec3, PhysicsRayResult, PhysicsLineStripCastResult;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
    setters: [function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }],
    execute: function () {
      /**
       * @en
       * Used to store physics ray test results.
       * @zh
       * 用于保存物理射线检测结果。
       */
      _export("PhysicsRayResult", PhysicsRayResult = /*#__PURE__*/function () {
        function PhysicsRayResult() {
          this._hitPoint = new Vec3();
          this._hitNormal = new Vec3();
          this._distance = 0;
          this._collider = null;
        }
        var _proto = PhysicsRayResult.prototype;
        /**
         * @en
         * internal methods.
         * @zh
         * 设置射线，此方法由引擎内部使用，请勿在外部脚本调用。
         *
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _proto._assign = function _assign(hitPoint, distance, collider, hitNormal) {
          Vec3.copy(this._hitPoint, hitPoint);
          Vec3.copy(this._hitNormal, hitNormal);
          this._distance = distance;
          this._collider = collider;
        }

        /**
         * @en
         * clone.
         * @zh
         * 克隆。
         */;
        _proto.clone = function clone() {
          var c = new PhysicsRayResult();
          Vec3.copy(c._hitPoint, this._hitPoint);
          Vec3.copy(c._hitNormal, this._hitNormal);
          c._distance = this._distance;
          c._collider = this._collider;
          return c;
        };
        _createClass(PhysicsRayResult, [{
          key: "hitPoint",
          get:
          /**
           * @en
           * The hit point，in world space.
           * @zh
           * 在世界坐标系下的击中点。
           */
          function get() {
            return this._hitPoint;
          }

          /**
           * @en
           * The distance between the ray origin with the hit.
           * @zh
           * 距离。
           */
        }, {
          key: "distance",
          get: function get() {
            return this._distance;
          }

          /**
           * @en
           * The collider hit by the ray.
           * @zh
           * 击中的碰撞盒
           */
        }, {
          key: "collider",
          get: function get() {
            return this._collider;
          }

          /**
           * @en
           * The normal of the hit plane，in world space.
           * @zh
           * 在世界坐标系下击中面的法线。
           */
        }, {
          key: "hitNormal",
          get: function get() {
            return this._hitNormal;
          }
        }]);
        return PhysicsRayResult;
      }());
      /**
       * @en
       * Used to store physics line strip cast test results.
       * @zh
       * 用于保存物理逐线段检测结果。
       */
      _export("PhysicsLineStripCastResult", PhysicsLineStripCastResult = /*#__PURE__*/function (_PhysicsRayResult) {
        _inheritsLoose(PhysicsLineStripCastResult, _PhysicsRayResult);
        function PhysicsLineStripCastResult() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _PhysicsRayResult.call.apply(_PhysicsRayResult, [this].concat(args)) || this;
          _this._id = 0;
          return _this;
        }
        var _proto2 = PhysicsLineStripCastResult.prototype;
        /**
         * @en
         * internal methods.
         * @zh
         * 设置射线，此方法由引擎内部使用，请勿在外部脚本调用。
         * @engineInternal
         */
        _proto2._assign = function _assign(hitPoint, distance, collider, hitNormal, id) {
          if (id === void 0) {
            id = 0;
          }
          _PhysicsRayResult.prototype._assign.call(this, hitPoint, distance, collider, hitNormal);
          this._id = id;
        }

        /**
         * @en
         * clone.
         * @zh
         * 克隆。
         */;
        _proto2.clone = function clone() {
          var c = new PhysicsLineStripCastResult();
          Vec3.copy(c._hitPoint, this._hitPoint);
          Vec3.copy(c._hitNormal, this._hitNormal);
          c._distance = this._distance;
          c._collider = this._collider;
          c._id = this._id;
          return c;
        };
        _createClass(PhysicsLineStripCastResult, [{
          key: "id",
          get:
          /**
           * @en
           * The line id of the line segments. This is only for lineStripCast
           * @zh
           * id
           */
          function get() {
            return this._id;
          }
        }]);
        return PhysicsLineStripCastResult;
      }(PhysicsRayResult));
    }
  };
});