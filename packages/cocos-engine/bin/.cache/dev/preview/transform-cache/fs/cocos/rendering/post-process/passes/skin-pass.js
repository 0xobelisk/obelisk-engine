System.register("q-bundled:///fs/cocos/rendering/post-process/passes/skin-pass.js", ["../../../core/index.js", "../../custom/types.js", "../../custom/define.js", "../utils/pass-context.js", "../../../gfx/index.js", "./setting-pass.js", "./base-pass.js"], function (_export, _context) {
  "use strict";

  var Vec4, Vec3, cclegacy, warnID, LightInfo, QueueHint, SceneFlags, getCameraUniqueID, passContext, ClearFlagBit, Format, SettingPass, forceEnableFloatOutput, getRTFormatBeforeToneMapping, getShadowMapSampler, COPY_INPUT_DS_PASS_INDEX, SSSS_BLUR_X_PASS_INDEX, SSSS_BLUR_Y_PASS_INDEX, _varianceArray, _strengthParameterArray, _vec3Temp, _vec3Temp2, _vec4Temp, _vec4Temp2, EXPONENT, I_SAMPLES_COUNT, SSSSBlurData, SkinPass;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
  function hasSkinObject(ppl) {
    var sceneData = ppl.pipelineSceneData;
    return sceneData.skin.enabled && sceneData.skinMaterialModel !== null;
  }
  return {
    setters: [function (_coreIndexJs) {
      Vec4 = _coreIndexJs.Vec4;
      Vec3 = _coreIndexJs.Vec3;
      cclegacy = _coreIndexJs.cclegacy;
      warnID = _coreIndexJs.warnID;
    }, function (_customTypesJs) {
      LightInfo = _customTypesJs.LightInfo;
      QueueHint = _customTypesJs.QueueHint;
      SceneFlags = _customTypesJs.SceneFlags;
    }, function (_customDefineJs) {
      getCameraUniqueID = _customDefineJs.getCameraUniqueID;
    }, function (_utilsPassContextJs) {
      passContext = _utilsPassContextJs.passContext;
    }, function (_gfxIndexJs) {
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
      Format = _gfxIndexJs.Format;
    }, function (_settingPassJs) {
      SettingPass = _settingPassJs.SettingPass;
    }, function (_basePassJs) {
      forceEnableFloatOutput = _basePassJs.forceEnableFloatOutput;
      getRTFormatBeforeToneMapping = _basePassJs.getRTFormatBeforeToneMapping;
      getShadowMapSampler = _basePassJs.getShadowMapSampler;
    }],
    execute: function () {
      _export("COPY_INPUT_DS_PASS_INDEX", COPY_INPUT_DS_PASS_INDEX = 0);
      _export("SSSS_BLUR_X_PASS_INDEX", SSSS_BLUR_X_PASS_INDEX = 1);
      _export("SSSS_BLUR_Y_PASS_INDEX", SSSS_BLUR_Y_PASS_INDEX = 2);
      _varianceArray = [0.0484, 0.187, 0.567, 1.99, 7.41];
      _strengthParameterArray = [0.100, 0.118, 0.113, 0.358, 0.078];
      _vec3Temp = new Vec3();
      _vec3Temp2 = new Vec3();
      _vec4Temp = new Vec4();
      _vec4Temp2 = new Vec4();
      _export("EXPONENT", EXPONENT = 2.0);
      _export("I_SAMPLES_COUNT", I_SAMPLES_COUNT = 25);
      _export("SSSSBlurData", SSSSBlurData = /*#__PURE__*/function () {
        var _proto = SSSSBlurData.prototype;
        /**
         * We use a falloff to modulate the shape of the profile. Big falloffs
         * spreads the shape making it wider, while small falloffs make it
         * narrower.
         */
        _proto._gaussian = function _gaussian(out, variance, r) {
          var xx = r / (0.001 + this._v3SSSSFallOff.x);
          out.x = Math.exp(-(xx * xx) / (2.0 * variance)) / (2.0 * 3.14 * variance);
          var yy = r / (0.001 + this._v3SSSSFallOff.y);
          out.y = Math.exp(-(yy * yy) / (2.0 * variance)) / (2.0 * 3.14 * variance);
          var zz = r / (0.001 + this._v3SSSSFallOff.z);
          out.z = Math.exp(-(zz * zz) / (2.0 * variance)) / (2.0 * 3.14 * variance);
        }

        /**
         * We used the red channel of the original skin profile defined in
         * [d'Eon07] for all three channels. We noticed it can be used for green
         * and blue channels (scaled using the falloff parameter) without
         * introducing noticeable differences and allowing for total control over
         * the profile. For example, it allows to create blue SSS gradients, which
         * could be useful in case of rendering blue creatures.
         */;
        _proto._profile = function _profile(out, val) {
          for (var i = 0; i < 5; i++) {
            this._gaussian(_vec3Temp2, _varianceArray[i], val);
            _vec3Temp2.multiplyScalar(_strengthParameterArray[i]);
            out.add(_vec3Temp2);
          }
        };
        _proto._updateSampleCount = function _updateSampleCount() {
          var strength = this._v3SSSSStrength;
          var nSamples = I_SAMPLES_COUNT;
          var range = nSamples > 20 ? 3.0 : 2.0;

          // Calculate the offsets:
          var step = 2.0 * range / (nSamples - 1);
          for (var i = 0; i < nSamples; i++) {
            var o = -range + i * step;
            var sign = o < 0.0 ? -1.0 : 1.0;
            // eslint-disable-next-line no-restricted-properties
            this._kernel[i].w = range * sign * Math.abs(Math.pow(o, EXPONENT)) / Math.pow(range, EXPONENT);
          }

          // Calculate the weights:
          for (var _i = 0; _i < nSamples; _i++) {
            var w0 = _i > 0 ? Math.abs(this._kernel[_i].w - this._kernel[_i - 1].w) : 0.0;
            var w1 = _i < nSamples - 1 ? Math.abs(this._kernel[_i].w - this._kernel[_i + 1].w) : 0.0;
            var area = (w0 + w1) / 2.0;
            _vec3Temp.set(0);
            this._profile(_vec3Temp, this._kernel[_i].w);
            _vec3Temp.multiplyScalar(area);
            this._kernel[_i].x = _vec3Temp.x;
            this._kernel[_i].y = _vec3Temp.y;
            this._kernel[_i].z = _vec3Temp.z;
          }

          // We want the offset 0.0 to come first:
          var remainder = nSamples % 2;
          _vec4Temp.set(this._kernel[(nSamples - remainder) / 2]);
          for (var _i2 = (nSamples - remainder) / 2; _i2 > 0; _i2--) {
            _vec4Temp2.set(this._kernel[_i2 - 1]);
            this._kernel[_i2].set(_vec4Temp2);
          }
          this._kernel[0].set(_vec4Temp);

          // Calculate the sum of the weights, we will need to normalize them below:
          _vec3Temp.set(0.0);
          for (var _i3 = 0; _i3 < nSamples; _i3++) {
            _vec3Temp.add3f(this._kernel[_i3].x, this._kernel[_i3].y, this._kernel[_i3].z);
          }
          // Normalize the weights:
          for (var _i4 = 0; _i4 < nSamples; _i4++) {
            this._kernel[_i4].x /= _vec3Temp.x;
            this._kernel[_i4].y /= _vec3Temp.y;
            this._kernel[_i4].z /= _vec3Temp.z;
          }

          // Tweak them using the desired strength. The first one is:
          // lerp(1.0, kernel[0].rgb, strength)
          this._kernel[0].x = (1.0 - strength.x) * 1.0 + strength.x * this._kernel[0].x;
          this._kernel[0].y = (1.0 - strength.y) * 1.0 + strength.y * this._kernel[0].y;
          this._kernel[0].z = (1.0 - strength.z) * 1.0 + strength.z * this._kernel[0].z;

          // The others:
          // lerp(0.0, kernel[0].rgb, strength)
          for (var _i5 = 1; _i5 < nSamples; _i5++) {
            this._kernel[_i5].x *= strength.x;
            this._kernel[_i5].y *= strength.y;
            this._kernel[_i5].z *= strength.z;
          }
        };
        _proto._init = function _init() {
          for (var i = 0; i < I_SAMPLES_COUNT; i++) {
            this._kernel[i] = new Vec4();
          }
          this._updateSampleCount();
        };
        function SSSSBlurData() {
          this._v3SSSSStrength = new Vec3(0.48, 0.41, 0.28);
          this._v3SSSSFallOff = new Vec3(1.0, 0.37, 0.3);
          this._kernel = [];
          this._init();
        }
        _createClass(SSSSBlurData, [{
          key: "ssssStrength",
          get: function get() {
            return this._v3SSSSStrength;
          },
          set: function set(val) {
            this._v3SSSSStrength = val;
            this._updateSampleCount();
          }
        }, {
          key: "ssssFallOff",
          get: function get() {
            return this._v3SSSSFallOff;
          },
          set: function set(val) {
            this._v3SSSSFallOff = val;
            this._updateSampleCount();
          }
        }, {
          key: "kernel",
          get: function get() {
            return this._kernel;
          }
        }]);
        return SSSSBlurData;
      }());
      _export("SkinPass", SkinPass = /*#__PURE__*/function (_SettingPass) {
        _inheritsLoose(SkinPass, _SettingPass);
        function SkinPass() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SettingPass.call.apply(_SettingPass, [this].concat(args)) || this;
          _this.name = 'SkinPass';
          _this.effectName = 'pipeline/ssss-blur';
          _this.outputNames = ['SSSSBlur', 'SSSSBlurDS'];
          _this.ssssBlurData = new SSSSBlurData();
          _this._activate = false;
          _this.enableInAllEditorCamera = true;
          return _this;
        }
        var _proto2 = SkinPass.prototype;
        _proto2.checkEnable = function checkEnable(camera) {
          var ppl = cclegacy.director.root.pipeline;
          var enable = hasSkinObject(ppl);
          if (enable) {
            if (!this._activate) {
              if (!ppl.getMacroBool('CC_USE_FLOAT_OUTPUT')) {
                warnID(16303);
              }
              if (!ppl.pipelineSceneData.standardSkinModel) {
                warnID(16304);
              }
              this._activate = true;
            }
            enable = forceEnableFloatOutput(ppl);
          }
          return enable;
        };
        _proto2.render = function render(camera, ppl) {
          var _this$lastPass;
          passContext.material = this.material;
          var inputRT = (_this$lastPass = this.lastPass) === null || _this$lastPass === void 0 ? void 0 : _this$lastPass.slotName(camera, 0);
          var inputDS = passContext.depthSlotName;
          this._buildSSSSBlurPass(camera, ppl, inputRT, inputDS);
          this._buildSpecularPass(camera, ppl, inputRT, inputDS);
        };
        _proto2._buildSSSSBlurPass = function _buildSSSSBlurPass(camera, ppl, inputRT, inputDS) {
          var cameraID = getCameraUniqueID(camera);
          var pipelineSceneData = ppl.pipelineSceneData;
          var halfExtents = new Vec3(0.2, 0.2, 0.2);
          var standardSkinModel = pipelineSceneData.standardSkinModel;
          var skinMaterialModel = pipelineSceneData.skinMaterialModel;
          if (standardSkinModel && standardSkinModel.worldBounds) {
            halfExtents = standardSkinModel.worldBounds.halfExtents;
          } else if (skinMaterialModel && skinMaterialModel.worldBounds) {
            halfExtents = skinMaterialModel.worldBounds.halfExtents;
          }
          var boundingBox = Math.min(halfExtents.x, halfExtents.y, halfExtents.z) * 2.0;
          var skin = pipelineSceneData.skin;
          var ssssBlurRTName = _SettingPass.prototype.slotName.call(this, camera, 0);
          var ssssBlurDSName = _SettingPass.prototype.slotName.call(this, camera, 1);

          // ==== Copy input DS ===
          var copyInputDSPassLayoutName = 'copy-pass';
          var copyInputDSPass = "copyDS-pass" + cameraID;
          var passIdx = COPY_INPUT_DS_PASS_INDEX;
          passContext.updatePassViewPort().addRenderPass(copyInputDSPassLayoutName, copyInputDSPass).setClearFlag(ClearFlagBit.COLOR).setClearColor(1.0, 0, 0, 0).setPassInput(inputDS, 'depthRaw').addRasterView(ssssBlurDSName, Format.RGBA8).blitScreen(passIdx).version();

          // ==== SSSS Blur X Pass ===
          passIdx = SSSS_BLUR_X_PASS_INDEX;
          var ssssblurXPassLayoutName = 'ssss-blurX';
          var ssssblurXPassPassName = "ssss-blurX" + cameraID;
          this.material.setProperty('blurInfo', new Vec4(camera.fov, skin.blurRadius, boundingBox, skin.sssIntensity), passIdx);
          this.material.setProperty('kernel', this.ssssBlurData.kernel, passIdx);
          passContext.updatePassViewPort().addRenderPass(ssssblurXPassLayoutName, ssssblurXPassPassName).setPassInput(inputRT, 'colorTex').setPassInput(ssssBlurDSName, 'depthTex').setClearFlag(ClearFlagBit.COLOR).setClearColor(0, 0, 0, 1).addRasterView(ssssBlurRTName, getRTFormatBeforeToneMapping(ppl)).blitScreen(passIdx).version();

          // === SSSS Blur Y Pass ===
          passIdx = SSSS_BLUR_Y_PASS_INDEX;
          var ssssblurYPassLayoutName = 'ssss-blurY';
          var ssssblurYPassPassName = "ssss-blurY" + cameraID;
          this.material.setProperty('blurInfo', new Vec4(camera.fov, skin.blurRadius, boundingBox, skin.sssIntensity), passIdx);
          this.material.setProperty('kernel', this.ssssBlurData.kernel, passIdx);
          passContext.updatePassViewPort().addRenderPass(ssssblurYPassLayoutName, ssssblurYPassPassName).setPassInput(ssssBlurRTName, 'colorTex').setPassInput(ssssBlurDSName, 'depthTex').setClearFlag(ClearFlagBit.NONE).setClearColor(0, 0, 0, 1).addRasterView(inputRT, getRTFormatBeforeToneMapping(ppl)).blitScreen(passIdx).version();
        };
        _proto2._buildSpecularPass = function _buildSpecularPass(camera, ppl, inputRT, inputDS) {
          var cameraID = getCameraUniqueID(camera);
          var layoutName = 'specular-pass';
          var passName = "specular-pass" + cameraID;
          passContext.updatePassViewPort().addRenderPass(layoutName, passName).setClearFlag(ClearFlagBit.NONE).setClearColor(0, 0, 0, 1).addRasterView(inputRT, getRTFormatBeforeToneMapping(ppl), true).setClearFlag(ClearFlagBit.NONE).setClearDepthColor(camera.clearDepth, camera.clearStencil, 0, 1).addRasterView(inputDS, Format.DEPTH_STENCIL, true).version();
          var pass = passContext.pass;
          var shadowPass = passContext.shadowPass;
          if (shadowPass) {
            for (var _iterator = _createForOfIteratorHelperLoose(shadowPass.mainLightShadows), _step; !(_step = _iterator()).done;) {
              var dirShadowName = _step.value;
              if (ppl.containsResource(dirShadowName)) {
                pass.addTexture(dirShadowName, 'cc_shadowMap', getShadowMapSampler());
              }
            }
            for (var _iterator2 = _createForOfIteratorHelperLoose(shadowPass.spotLightShadows), _step2; !(_step2 = _iterator2()).done;) {
              var spotShadowName = _step2.value;
              if (ppl.containsResource(spotShadowName)) {
                pass.addTexture(spotShadowName, 'cc_spotShadowMap', getShadowMapSampler());
              }
            }
          }
          pass.addQueue(QueueHint.RENDER_OPAQUE, 'default').addSceneOfCamera(camera, new LightInfo(), SceneFlags.TRANSPARENT_OBJECT | SceneFlags.CUTOUT_OBJECT);
          pass.addQueue(QueueHint.RENDER_TRANSPARENT, 'forward-add').addSceneOfCamera(camera, new LightInfo(), SceneFlags.TRANSPARENT_OBJECT | SceneFlags.CUTOUT_OBJECT);
        };
        _proto2.slotName = function slotName(camera, index) {
          if (index === void 0) {
            index = 0;
          }
          return this.lastPass.slotName(camera, index);
        };
        return SkinPass;
      }(SettingPass));
    }
  };
});