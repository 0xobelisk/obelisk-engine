System.register("q-bundled:///fs/cocos/render-scene/scene/spot-light.js", ["../../core/index.js", "./light.js", "./shadows.js"], function (_export, _context) {
  "use strict";

  var Mat4, Quat, Vec3, geometry, cclegacy, Light, LightType, nt2lm, PCFType, _forward, _qt, _matView, _matProj, _matViewProj, _matViewProjInv, SpotLight;
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
    setters: [function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      Quat = _coreIndexJs.Quat;
      Vec3 = _coreIndexJs.Vec3;
      geometry = _coreIndexJs.geometry;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_lightJs) {
      Light = _lightJs.Light;
      LightType = _lightJs.LightType;
      nt2lm = _lightJs.nt2lm;
    }, function (_shadowsJs) {
      PCFType = _shadowsJs.PCFType;
    }],
    execute: function () {
      _forward = new Vec3(0, 0, -1);
      _qt = new Quat();
      _matView = new Mat4();
      _matProj = new Mat4();
      _matViewProj = new Mat4();
      _matViewProjInv = new Mat4();
      /**
       * @en The spot light representation in the render scene, it will light up a cone area in the direction of the light, it supports shadow generation.
       * @zh 渲染场景中的聚光灯抽象，可以照亮光源方向上的一个锥形区域，支持生成阴影。
       */
      _export("SpotLight", SpotLight = /*#__PURE__*/function (_Light) {
        _inheritsLoose(SpotLight, _Light);
        function SpotLight() {
          var _this;
          _this = _Light.call(this) || this;
          _this._dir = new Vec3(1.0, -1.0, -1.0);
          _this._range = 5.0;
          _this._spotAngle = Math.cos(Math.PI / 6);
          _this._angleAttenuationStrength = 0;
          _this._pos = void 0;
          _this._aabb = void 0;
          _this._frustum = void 0;
          /**
           * @en User-specified full-angle radians.
           * @zh 用户指定的全角弧度。
           */
          _this._angle = 0;
          _this._needUpdate = false;
          _this._size = 0.15;
          _this._luminanceHDR = 0;
          _this._luminanceLDR = 0;
          // Shadow map properties
          _this._shadowEnabled = false;
          _this._shadowPcf = PCFType.HARD;
          _this._shadowBias = 0.00001;
          _this._shadowNormalBias = 0.0;
          _this._aabb = geometry.AABB.create();
          _this._frustum = geometry.Frustum.create();
          _this._pos = new Vec3();
          _this._type = LightType.SPOT;
          return _this;
        }
        var _proto = SpotLight.prototype;
        _proto.initialize = function initialize() {
          _Light.prototype.initialize.call(this);
          var size = 0.15;
          this.size = size;
          this.luminanceHDR = 1700 / nt2lm(size);
          this.luminanceLDR = 1.0;
          this.range = Math.cos(Math.PI / 6);
          this._dir.set(new Vec3(1.0, -1.0, -1.0));
        };
        _proto.update = function update() {
          if (this._node && (this._node.hasChangedFlags || this._needUpdate)) {
            this._node.getWorldPosition(this._pos);
            Vec3.transformQuat(this._dir, _forward, this._node.getWorldRotation(_qt));
            Vec3.normalize(this._dir, this._dir);
            geometry.AABB.set(this._aabb, this._pos.x, this._pos.y, this._pos.z, this._range, this._range, this._range);

            // view matrix
            this._node.getWorldRT(_matView);
            Mat4.invert(_matView, _matView);
            Mat4.perspective(_matProj, this._angle, 1.0, 0.001, this._range);

            // view-projection
            Mat4.multiply(_matViewProj, _matProj, _matView);
            // Mat4.invert(_matViewProjInv, _matViewProj);

            this._frustum.update(_matViewProj, _matViewProjInv);
            this._needUpdate = false;
          }
        };
        _createClass(SpotLight, [{
          key: "position",
          get:
          /**
           * @en The world position of the light source
           * @zh 光源的世界坐标
           */
          function get() {
            return this._pos;
          }

          /**
           * @en The size of the spot light source
           * @zh 聚光灯的光源尺寸
           */
        }, {
          key: "size",
          get: function get() {
            return this._size;
          }

          /**
           * @en The lighting range of the spot light
           * @zh 聚光灯的光照范围
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
          get: function get() {
            return this._luminanceLDR;
          },
          set: function set(value) {
            this._luminanceLDR = value;
          }

          /**
           * @en The direction of the spot light
           * @zh 聚光灯的照明方向
           */
        }, {
          key: "direction",
          get: function get() {
            return this._dir;
          }

          /**
           * @en The setter will take the value as the cone angle,
           * but the getter will give you the cosine value of the half cone angle: `cos(angle / 2)`.
           * As the in-consistence is not acceptable for a property, please do not use it.
           * @zh 赋值时这个属性会把输入值当做聚光灯光照区域的锥角，但是获取时返回的是 cos(angle / 2)。
           * 由于这种不一致性，请不要使用这个属性。
           * @internal
           */
        }, {
          key: "spotAngle",
          get: function get() {
            return this._spotAngle;
          },
          set: function set(val) {
            this._angle = val;
            this._spotAngle = Math.cos(val * 0.5);
            this._needUpdate = true;
          }

          /**
           * @en The angle attenuation strength of the spot light.
           * The larger the value, the softer the edge, and the smaller the value, the harder the edge.
           * @zh 聚光灯角度衰减强度。值越大，边缘越柔和，值越小，边缘越硬。
           */
        }, {
          key: "angleAttenuationStrength",
          get: function get() {
            return this._angleAttenuationStrength;
          },
          set: function set(val) {
            this._angleAttenuationStrength = val;
            this._needUpdate = true;
          }

          /**
           * @en The cone angle of the lighting area
           * @zh 聚光灯锥角
           */
        }, {
          key: "angle",
          get: function get() {
            return this._angle;
          }
        }, {
          key: "aabb",
          get: function get() {
            return this._aabb;
          }

          /**
           * @en The frustum of the lighting area
           * @zh 受光源影响范围的截椎体
           */
        }, {
          key: "frustum",
          get: function get() {
            return this._frustum;
          }

          /**
           * @en Whether shadow casting is enabled
           * @zh 是否启用阴影？
           */
        }, {
          key: "shadowEnabled",
          get: function get() {
            return this._shadowEnabled;
          },
          set: function set(val) {
            this._shadowEnabled = val;
          }

          /**
           * @en The pcf level of the shadow generation.
           * @zh 获取或者设置阴影 pcf 等级。
           */
        }, {
          key: "shadowPcf",
          get: function get() {
            return this._shadowPcf;
          },
          set: function set(val) {
            this._shadowPcf = val;
          }

          /**
           * @en The depth offset of shadow to avoid moire pattern artifacts
           * @zh 阴影的深度偏移, 可以减弱跨像素导致的条纹状失真
           */
        }, {
          key: "shadowBias",
          get: function get() {
            return this._shadowBias;
          },
          set: function set(val) {
            this._shadowBias = val;
          }

          /**
            * @en The normal bias of the shadow map.
            * @zh 设置或者获取法线偏移。
            */
        }, {
          key: "shadowNormalBias",
          get: function get() {
            return this._shadowNormalBias;
          },
          set: function set(val) {
            this._shadowNormalBias = val;
          }
        }]);
        return SpotLight;
      }(Light));
    }
  };
});