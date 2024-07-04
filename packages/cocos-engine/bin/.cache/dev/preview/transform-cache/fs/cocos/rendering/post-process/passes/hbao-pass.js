System.register("q-bundled:///fs/cocos/rendering/post-process/passes/hbao-pass.js", ["../../../../../virtual/internal%253Aconstants.js", "../../../core/index.js", "../../../render-scene/scene/index.js", "../../custom/define.js", "../utils/pass-context.js", "./setting-pass.js", "../components/index.js", "../../../asset/assets/texture-2d.js", "../../../asset/assets/image-asset.js", "../../debug-view.js", "../../../gfx/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, cclegacy, toRadian, Vec2, Vec4, Vec3, v3, CameraUsage, getCameraUniqueID, passContext, getSetting, SettingPass, HBAO, Texture2D, ImageAsset, DebugViewCompositeType, DebugViewSingleType, ClearFlagBit, Format, vec2, HBAOParams, HBAOPass;
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
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      toRadian = _coreIndexJs.toRadian;
      Vec2 = _coreIndexJs.Vec2;
      Vec4 = _coreIndexJs.Vec4;
      Vec3 = _coreIndexJs.Vec3;
      v3 = _coreIndexJs.v3;
    }, function (_renderSceneSceneIndexJs) {
      CameraUsage = _renderSceneSceneIndexJs.CameraUsage;
    }, function (_customDefineJs) {
      getCameraUniqueID = _customDefineJs.getCameraUniqueID;
    }, function (_utilsPassContextJs) {
      passContext = _utilsPassContextJs.passContext;
    }, function (_settingPassJs) {
      getSetting = _settingPassJs.getSetting;
      SettingPass = _settingPassJs.SettingPass;
    }, function (_componentsIndexJs) {
      HBAO = _componentsIndexJs.HBAO;
    }, function (_assetAssetsTexture2dJs) {
      Texture2D = _assetAssetsTexture2dJs.Texture2D;
    }, function (_assetAssetsImageAssetJs) {
      ImageAsset = _assetAssetsImageAssetJs.ImageAsset;
    }, function (_debugViewJs) {
      DebugViewCompositeType = _debugViewJs.DebugViewCompositeType;
      DebugViewSingleType = _debugViewJs.DebugViewSingleType;
    }, function (_gfxIndexJs) {
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
      Format = _gfxIndexJs.Format;
    }],
    execute: function () {
      vec2 = new Vec2();
      HBAOParams = /*#__PURE__*/function () {
        var _proto = HBAOParams.prototype;
        _proto._init = function _init() {
          var width = 4;
          var height = 4;
          var pixelFormat = Texture2D.PixelFormat.RGBA8888;
          var arrayBuffer = new Uint8Array(width * height * 4);
          for (var i = 0; i < this._randomDirAndJitter.length; i++) {
            arrayBuffer[i] = this._randomDirAndJitter[i];
          }
          var image = new ImageAsset({
            width: width,
            height: height,
            _data: arrayBuffer,
            _compressed: false,
            format: pixelFormat
          });
          this.randomTexture = new Texture2D();
          this.randomTexture.setFilters(Texture2D.Filter.NEAREST, Texture2D.Filter.NEAREST);
          this.randomTexture.setMipFilter(Texture2D.Filter.NONE);
          this.randomTexture.setWrapMode(Texture2D.WrapMode.REPEAT, Texture2D.WrapMode.REPEAT, Texture2D.WrapMode.REPEAT);
          this.randomTexture.image = image;
        };
        _proto.update = function update() {
          // should be same value as shader
          var HALF_KERNEL_RADIUS = 4;
          var INV_LN2 = 1.44269504;
          var SQRT_LN2 = 0.8325546;
          var gR = this._radiusScale * this._sceneScale;
          var gR2 = gR * gR;
          var gNegInvR2 = -1.0 / gR2;
          var gMaxRadiusPixels = 0.1 * Math.min(this._depthTexFullResolution.x, this._depthTexFullResolution.y);
          this._radiusParam.set(gR, gR2, gNegInvR2, gMaxRadiusPixels);
          var vec2 = new Vec2(this._depthTexResolution.y / this._depthTexResolution.x, 1.0);
          var gFocalLen = new Vec2(vec2.x / Math.tan(this._cameraFov * 0.5), vec2.y / Math.tan(this._cameraFov * 0.5));
          var gTanAngleBias = Math.tan(toRadian(this._angleBiasDegree));
          var gStrength = this._aoStrength;
          this._miscParam.set(gFocalLen.x, gFocalLen.y, gTanAngleBias, gStrength);
          var gUVToViewA = new Vec2(2.0 / gFocalLen.x, -2.0 / gFocalLen.y);
          var gUVToViewB = new Vec2(-1.0 / gFocalLen.x, 1.0 / gFocalLen.y);
          this._uvDepthToEyePosParams.set(gUVToViewA.x, gUVToViewA.y, gUVToViewB.x, gUVToViewB.y);
          var BlurSigma = (HALF_KERNEL_RADIUS + 1.0) * 0.5;
          var gBlurFallOff = INV_LN2 / (2.0 * BlurSigma * BlurSigma);
          var gBlurDepthThreshold = 2.0 * SQRT_LN2 * (this._sceneScale / this._blurSharpness);
          this._blurParam.set(gBlurFallOff, gBlurDepthThreshold, this._blurSharpness / 8.0, this._aoSaturation);
        };
        function HBAOParams() {
          this._uvDepthToEyePosParams = new Vec4();
          this._radiusParam = new Vec4();
          this._miscParam = new Vec4();
          this._blurParam = new Vec4();
          this._depthTexFullResolution = new Vec2(1024);
          this._depthTexResolution = new Vec2(1024);
          this._sceneScale = 1.0;
          this._cameraFov = toRadian(45.0);
          this._radiusScale = 1.0;
          this._angleBiasDegree = 10.0;
          this._aoStrength = 1.0;
          this._blurSharpness = 8;
          this._aoSaturation = 1.0;
          this._randomDirAndJitter = [238, 91, 87, 255, 251, 44, 119, 255, 247, 64, 250, 255, 232, 5, 225, 255, 253, 177, 140, 255, 250, 51, 84, 255, 243, 76, 97, 255, 252, 36, 232, 255, 235, 100, 24, 255, 252, 36, 158, 255, 254, 20, 142, 255, 245, 135, 124, 255, 251, 43, 121, 255, 253, 31, 145, 255, 235, 98, 160, 255, 240, 146, 198, 255];
          this._init();
          this.update();
        }
        _createClass(HBAOParams, [{
          key: "uvDepthToEyePosParams",
          get: function get() {
            return this._uvDepthToEyePosParams;
          }
        }, {
          key: "radiusParam",
          get: function get() {
            return this._radiusParam;
          }
        }, {
          key: "miscParam",
          get: function get() {
            return this._miscParam;
          }
        }, {
          key: "blurParam",
          get: function get() {
            return this._blurParam;
          }
        }, {
          key: "depthTexFullResolution",
          set: function set(val) {
            this._depthTexFullResolution.set(val);
          }
        }, {
          key: "depthTexResolution",
          set: function set(val) {
            this._depthTexResolution.set(val);
          }
        }, {
          key: "sceneScale",
          set: function set(val) {
            this._sceneScale = val;
          }
        }, {
          key: "cameraFov",
          set: function set(val) {
            this._cameraFov = val;
          }
        }, {
          key: "radiusScale",
          set: function set(val) {
            this._radiusScale = val;
          }
        }, {
          key: "angleBiasDegree",
          set: function set(val) {
            this._angleBiasDegree = val;
          }
        }, {
          key: "aoStrength",
          set: function set(val) {
            this._aoStrength = val;
          }
        }, {
          key: "blurSharpness",
          set: function set(val) {
            this._blurSharpness = val;
          }
        }, {
          key: "aoSaturation",
          set: function set(val) {
            this._aoSaturation = val;
          }
        }]);
        return HBAOParams;
      }();
      _export("HBAOPass", HBAOPass = /*#__PURE__*/function (_SettingPass) {
        _inheritsLoose(HBAOPass, _SettingPass);
        function HBAOPass() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SettingPass.call.apply(_SettingPass, [this].concat(args)) || this;
          _this.HBAO_PASS_INDEX = 0;
          _this.HBAO_BLUR_X_PASS_INDEX = 1;
          _this.HBAO_BLUR_Y_PASS_INDEX = 2;
          _this.HBAO_COMBINED_PASS_INDEX = 3;
          _this._hbaoParams = null;
          _this._initialize = false;
          _this.averageObjectSize = new Map();
          _this.name = 'HBAOPass';
          _this.effectName = 'pipeline/post-process/hbao';
          _this.outputNames = ['hbaoRTName', 'hbaoBluredRTName'];
          return _this;
        }
        var _proto2 = HBAOPass.prototype;
        _proto2.checkEnable = function checkEnable(camera) {
          var enable = _SettingPass.prototype.checkEnable.call(this, camera);
          if (EDITOR && camera.cameraUsage === CameraUsage.PREVIEW) {
            enable = false;
          }
          return enable;
        };
        _proto2.onGlobalPipelineStateChanged = function onGlobalPipelineStateChanged() {
          passContext.material = this.material;
          var passes = passContext.material.passes;
          for (var i = 0; i < passes.length; i++) {
            var pass = passes[i];
            pass.beginChangeStatesSilently();
            pass.tryCompile(); // force update shaders
            pass.endChangeStatesSilently();
          }
        };
        _proto2.getSceneScale = function getSceneScale(camera) {
          var sceneScale = camera.nearClip;
          if (!this.averageObjectSize.has(camera.node.scene)) {
            this._calculateObjectSize(camera.node.scene, camera.visibility);
          }
          if (this.averageObjectSize.has(camera.node.scene)) {
            var objectSize = this.averageObjectSize.get(camera.node.scene);
            // simple conversion
            sceneScale = objectSize * 0.1;
          }
          return sceneScale;
        };
        _proto2.render = function render(camera, ppl) {
          passContext.updatePassViewPort();
          var width = passContext.passViewport.width;
          var height = passContext.passViewport.height;
          if (!this._hbaoParams) {
            this._hbaoParams = new HBAOParams();
          }
          var setting = this.setting;
          if (!this._initialize) {
            passContext.material = this.material;
            this.material.setProperty('RandomTex', this._hbaoParams.randomTexture, 0);
          }

          // params
          var aoStrength = 1.0;
          // todo: nearest object distance from camera
          var sceneScale = this.getSceneScale(camera);
          // todo: Half Res Depth Tex
          this._hbaoParams.depthTexFullResolution = vec2.set(width, height);
          this._hbaoParams.depthTexResolution = vec2.set(width, height);
          this._hbaoParams.sceneScale = sceneScale;
          this._hbaoParams.cameraFov = camera.fov;
          this._hbaoParams.radiusScale = setting.radiusScale;
          this._hbaoParams.angleBiasDegree = setting.angleBiasDegree;
          this._hbaoParams.aoStrength = aoStrength;
          this._hbaoParams.blurSharpness = setting.blurSharpness;
          this._hbaoParams.aoSaturation = setting.aoSaturation;
          this._hbaoParams.update();

          // debug view
          var director = cclegacy.director;
          var root = director.root;
          if (root.debugView) {
            if (root.debugView.isEnabled() && (root.debugView.singleMode !== DebugViewSingleType.NONE && root.debugView.singleMode !== DebugViewSingleType.AO || !root.debugView.isCompositeModeEnabled(DebugViewCompositeType.AO))) {
              return;
            }
          }
          var inputRT = this.lastPass.slotName(camera, 0);
          var inputDS = this.lastPass.slotName(camera, 1);
          var hbaoInfo = this._renderHBAOPass(camera, inputDS);
          var hbaoCombinedInputRTName = hbaoInfo.rtName;
          if (this.setting.needBlur) {
            var haboBlurInfoX = this._renderHBAOBlurPass(camera, hbaoInfo.rtName, inputDS, false);
            var haboBlurInfoY = this._renderHBAOBlurPass(camera, haboBlurInfoX.rtName, inputDS, true);
            hbaoCombinedInputRTName = haboBlurInfoY.rtName;
          }
          this._renderHBAOCombinedPass(camera, hbaoCombinedInputRTName, inputRT);
        };
        _proto2._renderHBAOPass = function _renderHBAOPass(camera, inputDS) {
          var cameraID = getCameraUniqueID(camera);
          var passIdx = this.HBAO_PASS_INDEX;
          this.material.setProperty('uvDepthToEyePosParams', this._hbaoParams.uvDepthToEyePosParams, passIdx);
          this.material.setProperty('radiusParam', this._hbaoParams.radiusParam, passIdx);
          this.material.setProperty('miscParam', this._hbaoParams.miscParam, passIdx);
          this.material.setProperty('randomTexSize', new Vec4(this._hbaoParams.randomTexture.width, this._hbaoParams.randomTexture.height, 1.0 / this._hbaoParams.randomTexture.width, 1.0 / this._hbaoParams.randomTexture.height), passIdx);
          this.material.setProperty('blurParam', this._hbaoParams.blurParam, passIdx);
          passContext.clearBlack();
          var outputRT = _SettingPass.prototype.slotName.call(this, camera, 0);
          var layoutName = 'hbao-pass';
          var passName = "CameraHBAOPass" + cameraID;
          passContext.addRenderPass(layoutName, passName).setPassInput(inputDS, 'DepthTex').addRasterView(outputRT, Format.RGBA8).blitScreen(passIdx).version();
          return {
            rtName: outputRT,
            dsName: inputDS
          };
        };
        _proto2._renderHBAOBlurPass = function _renderHBAOBlurPass(camera, inputRT, inputDS, isYPass) {
          var cameraID = getCameraUniqueID(camera);
          passContext.clearBlack();
          var passIdx = isYPass ? this.HBAO_BLUR_Y_PASS_INDEX : this.HBAO_BLUR_X_PASS_INDEX;
          passContext.material = this.material;
          this.material.setProperty('uvDepthToEyePosParams', this._hbaoParams.uvDepthToEyePosParams, passIdx);
          this.material.setProperty('radiusParam', this._hbaoParams.radiusParam, passIdx);
          this.material.setProperty('miscParam', this._hbaoParams.miscParam, passIdx);
          this.material.setProperty('randomTexSize', new Vec4(this._hbaoParams.randomTexture.width, this._hbaoParams.randomTexture.height, 1.0 / this._hbaoParams.randomTexture.width, 1.0 / this._hbaoParams.randomTexture.height), passIdx);
          this.material.setProperty('blurParam', this._hbaoParams.blurParam, passIdx);
          var outputRT = _SettingPass.prototype.slotName.call(this, camera, 1);
          var layoutName = 'blurx-pass';
          var passName = "CameraHBAOBluredXPass" + cameraID;
          if (isYPass) {
            outputRT = _SettingPass.prototype.slotName.call(this, camera, 0);
            layoutName = 'blury-pass';
            passName = "CameraHBAOBluredYPass" + cameraID;
          }
          passContext.addRenderPass(layoutName, passName).setPassInput(inputRT, 'AOTexNearest').setPassInput(inputDS, 'DepthTex').addRasterView(outputRT, Format.RGBA8).blitScreen(passIdx).version();
          return {
            rtName: outputRT,
            dsName: inputDS
          };
        };
        _proto2._renderHBAOCombinedPass = function _renderHBAOCombinedPass(camera, inputRT, outputRT) {
          var cameraID = getCameraUniqueID(camera);
          var passIdx = this.HBAO_COMBINED_PASS_INDEX;
          passContext.material = this.material;
          this.material.setProperty('uvDepthToEyePosParams', this._hbaoParams.uvDepthToEyePosParams, passIdx);
          this.material.setProperty('radiusParam', this._hbaoParams.radiusParam, passIdx);
          this.material.setProperty('miscParam', this._hbaoParams.miscParam, passIdx);
          this.material.setProperty('randomTexSize', new Vec4(this._hbaoParams.randomTexture.width, this._hbaoParams.randomTexture.height, 1.0 / this._hbaoParams.randomTexture.width, 1.0 / this._hbaoParams.randomTexture.height), passIdx);
          this.material.setProperty('blurParam', this._hbaoParams.blurParam, passIdx);
          passContext.clearFlag = ClearFlagBit.NONE;
          var layoutName = 'combine-pass';
          var passName = "CameraHBAOCombinedPass" + cameraID;
          passContext.addRenderPass(layoutName, passName).setPassInput(inputRT, 'AOTexNearest').addRasterView(outputRT, Format.RGBA8).blitScreen(passIdx).version();
        };
        _proto2._calculateObjectSize = function _calculateObjectSize(scene, visibility) {
          if (!scene || !scene.renderScene) {
            return;
          }
          var sumSize = new Vec3(0);
          var modelCount = 0;
          var models = scene.renderScene.models;
          for (var i = 0; i < models.length; i++) {
            var model = models[i];
            if (!model.node || !model.worldBounds) continue;
            if (model.node.layer & visibility) {
              sumSize.add(model.worldBounds.halfExtents);
              modelCount++;
            }
          }
          if (modelCount > 0) {
            sumSize.divide(v3(modelCount));
            var scale = Math.min(sumSize.x, sumSize.y, sumSize.z);
            this.averageObjectSize.set(scene, scale);
          }
        };
        _proto2.slotName = function slotName(camera, index) {
          if (index === void 0) {
            index = 0;
          }
          return this.lastPass.slotName(camera, index);
        };
        _createClass(HBAOPass, [{
          key: "setting",
          get: function get() {
            return getSetting(HBAO);
          }
        }]);
        return HBAOPass;
      }(SettingPass));
    }
  };
});