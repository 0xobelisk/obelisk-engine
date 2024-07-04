System.register("q-bundled:///fs/cocos/render-scene/scene/sphere-light.js", ["../../core/index.js", "./light.js"], function (_export, _context) {
  "use strict";

  var Vec3, cclegacy, geometry, Light, LightType, nt2lm, SphereLight;
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
    setters: [function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
      cclegacy = _coreIndexJs.cclegacy;
      geometry = _coreIndexJs.geometry;
    }, function (_lightJs) {
      Light = _lightJs.Light;
      LightType = _lightJs.LightType;
      nt2lm = _lightJs.nt2lm;
    }],
    execute: function () {
      /**
       * @en The sphere light representation in the render scene, it will light up a spherical area in the scene.
       * It doesn't support shadow generation currently.
       * @zh 渲染场景中的球面光抽象，可以照亮场景中的一个球形区域，目前还不支持生成阴影。
       */
      _export("SphereLight", SphereLight = /*#__PURE__*/function (_Light) {
        _inheritsLoose(SphereLight, _Light);
        function SphereLight() {
          var _this;
          _this = _Light.call(this) || this;
          _this._needUpdate = false;
          _this._size = 0.15;
          _this._range = 1.0;
          _this._luminanceHDR = 0;
          _this._luminanceLDR = 0;
          _this._pos = void 0;
          _this._aabb = void 0;
          _this._aabb = geometry.AABB.create();
          _this._pos = new Vec3();
          _this._type = LightType.SPHERE;
          return _this;
        }
        var _proto = SphereLight.prototype;
        _proto.initialize = function initialize() {
          _Light.prototype.initialize.call(this);
          var size = 0.15;
          this.size = size;
          this.range = 1.0;
          this.luminanceHDR = 1700 / nt2lm(size);
          this.luminanceLDR = 1.0;
        }

        /**
         * @en Update the lighting area
         * @zh 更新光源影响范围
         */;
        _proto.update = function update() {
          if (this._node && (this._node.hasChangedFlags || this._needUpdate)) {
            this._node.getWorldPosition(this._pos);
            var range = this._range;
            geometry.AABB.set(this._aabb, this._pos.x, this._pos.y, this._pos.z, range, range, range);
            this._needUpdate = false;
          }
        };
        _createClass(SphereLight, [{
          key: "position",
          get:
          /**
           * @en The world position of the light source
           * @zh 光源中心点的世界坐标
           */
          function get() {
            return this._pos;
          }

          /**
           * @en The size of the light source
           * @zh 球面光源的尺寸
           */
        }, {
          key: "size",
          get: function get() {
            return this._size;
          }

          /**
           * @en The lighting range of the light source
           * @zh 球面光源的光照范围
           */,
          set: function set(size) {
            this._size = size;
          }
        }, {
          key: "range",
          get: function get() {
            return this._range;
          }

          /**
           * @en The luminance of the light source
           * @zh 光源的亮度
           */,
          set: function set(range) {
            this._range = range;
            this._needUpdate = true;
          }
        }, {
          key: "luminance",
          get: function get() {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              return this._luminanceHDR;
            } else {
              return this._luminanceLDR;
            }
          },
          set: function set(value) {
            var isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
            if (isHDR) {
              this.luminanceHDR = value;
            } else {
              this.luminanceLDR = value;
            }
          }

          /**
           * @en The luminance of the light source in HDR mode
           * @zh HDR 模式下光源的亮度
           */
        }, {
          key: "luminanceHDR",
          get: function get() {
            return this._luminanceHDR;
          },
          set: function set(value) {
            this._luminanceHDR = value;
          }

          /**
           * @en The luminance of the light source in LDR mode
           * @zh LDR 模式下光源的亮度
           */
        }, {
          key: "luminanceLDR",
          set: function set(value) {
            this._luminanceLDR = value;
          }

          /**
           * @en The AABB bounding box of the lighting area
           * @zh 受光源影响范围的 AABB 包围盒
           */
        }, {
          key: "aabb",
          get: function get() {
            return this._aabb;
          }
        }]);
        return SphereLight;
      }(Light));
    }
  };
});