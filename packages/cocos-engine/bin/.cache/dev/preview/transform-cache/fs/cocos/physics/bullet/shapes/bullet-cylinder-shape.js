System.register("q-bundled:///fs/cocos/physics/bullet/shapes/bullet-cylinder-shape.js", ["./bullet-shape.js", "../../../core/index.js", "../bullet-cache.js", "../instantiated.js"], function (_export, _context) {
  "use strict";

  var BulletShape, absMax, BulletCache, bt, BulletCylinderShape;
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
    }, function (_coreIndexJs) {
      absMax = _coreIndexJs.absMax;
    }, function (_bulletCacheJs) {
      BulletCache = _bulletCacheJs.BulletCache;
    }, function (_instantiatedJs) {
      bt = _instantiatedJs.bt;
    }],
    execute: function () {
      _export("BulletCylinderShape", BulletCylinderShape = /*#__PURE__*/function (_BulletShape) {
        _inheritsLoose(BulletCylinderShape, _BulletShape);
        function BulletCylinderShape() {
          return _BulletShape.apply(this, arguments) || this;
        }
        var _proto = BulletCylinderShape.prototype;
        _proto.setHeight = function setHeight(v) {
          this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
        };
        _proto.setDirection = function setDirection(v) {
          this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
        };
        _proto.setRadius = function setRadius(v) {
          this.updateProperties(this.collider.radius, this.collider.height, this.collider.direction, this._collider.node.worldScale);
        };
        _proto.onComponentSet = function onComponentSet() {
          var bt_v3 = BulletCache.instance.BT_V3_0;
          bt.Vec3_set(bt_v3, 0.5, 1, 0.5);
          this._impl = bt.CylinderShape_new(bt_v3);
          this.setRadius(this.collider.radius);
        };
        _proto.updateScale = function updateScale() {
          _BulletShape.prototype.updateScale.call(this);
          this.setRadius(this.collider.radius);
        };
        _proto.updateProperties = function updateProperties(radius, height, direction, scale) {
          var ws = scale;
          var upAxis = direction;
          var wr;
          var wh;
          if (upAxis === 1) {
            wh = height * Math.abs(ws.y);
            wr = radius * Math.abs(absMax(ws.x, ws.z));
          } else if (upAxis === 0) {
            wh = height * Math.abs(ws.x);
            wr = radius * Math.abs(absMax(ws.y, ws.z));
          } else {
            wh = height * Math.abs(ws.z);
            wr = radius * Math.abs(absMax(ws.x, ws.y));
          }
          bt.CylinderShape_updateProp(this._impl, wr, wh / 2, upAxis);
          this.updateCompoundTransform();
        };
        _createClass(BulletCylinderShape, [{
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }]);
        return BulletCylinderShape;
      }(BulletShape));
    }
  };
});