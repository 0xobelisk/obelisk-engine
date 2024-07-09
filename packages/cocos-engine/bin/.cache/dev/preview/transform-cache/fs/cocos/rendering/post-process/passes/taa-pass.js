System.register("q-bundled:///fs/cocos/rendering/post-process/passes/taa-pass.js", ["../../../../../virtual/internal%253Aconstants.js", "../../../core/index.js", "../../../game/index.js", "../../../gfx/index.js", "../../../render-scene/scene/index.js", "../../custom/types.js", "../../custom/define.js", "../components/taa.js", "../components/taa-mask.js", "../utils/pass-context.js", "./base-pass.js", "./setting-pass.js", "../../../asset/asset-manager/index.js", "../../../render-scene/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, Mat4, Vec2, Vec4, game, ClearFlagBit, Format, CameraUsage, ResourceResidency, getCameraUniqueID, TAA, TAAMask, passContext, disablePostProcessForDebugView, getSetting, SettingPass, builtinResMgr, MaterialInstance, tempVec4, halton8, SampleOffsets, TAAPass;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      Vec2 = _coreIndexJs.Vec2;
      Vec4 = _coreIndexJs.Vec4;
    }, function (_gameIndexJs) {
      game = _gameIndexJs.game;
    }, function (_gfxIndexJs) {
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
      Format = _gfxIndexJs.Format;
    }, function (_renderSceneSceneIndexJs) {
      CameraUsage = _renderSceneSceneIndexJs.CameraUsage;
    }, function (_customTypesJs) {
      ResourceResidency = _customTypesJs.ResourceResidency;
    }, function (_customDefineJs) {
      getCameraUniqueID = _customDefineJs.getCameraUniqueID;
    }, function (_componentsTaaJs) {
      TAA = _componentsTaaJs.TAA;
    }, function (_componentsTaaMaskJs) {
      TAAMask = _componentsTaaMaskJs.TAAMask;
    }, function (_utilsPassContextJs) {
      passContext = _utilsPassContextJs.passContext;
    }, function (_basePassJs) {
      disablePostProcessForDebugView = _basePassJs.disablePostProcessForDebugView;
    }, function (_settingPassJs) {
      getSetting = _settingPassJs.getSetting;
      SettingPass = _settingPassJs.SettingPass;
    }, function (_assetAssetManagerIndexJs) {
      builtinResMgr = _assetAssetManagerIndexJs.builtinResMgr;
    }, function (_renderSceneIndexJs) {
      MaterialInstance = _renderSceneIndexJs.MaterialInstance;
    }],
    execute: function () {
      tempVec4 = new Vec4();
      halton8 = [new Vec2(0.5, 1.0 / 3), new Vec2(0.25, 2.0 / 3), new Vec2(0.75, 1.0 / 9), new Vec2(0.125, 4.0 / 9), new Vec2(0.625, 7.0 / 9), new Vec2(0.375, 2.0 / 9), new Vec2(0.875, 5.0 / 9), new Vec2(0.0625, 8.0 / 9)];
      halton8.forEach(function (v) {
        v.x -= 0.5;
        v.y -= 0.5;
      });
      SampleOffsets = {
        // 2xMSAA
        // Pattern docs: http://msdn.microsoft.com/en-us/library/windows/desktop/ff476218(v=vs.85).aspx
        //   N.
        //   .S
        x2: [new Vec2(-4.0 / 16.0, -4.0 / 16.0), new Vec2(4.0 / 16.0, 4.0 / 16.0)],
        // 3xMSAA
        //   A..
        //   ..B
        //   .C.
        // Rolling circle pattern (A,B,C).
        x3: [new Vec2(-2.0 / 3.0, -2.0 / 3.0), new Vec2(2 / 3, 0 / 3), new Vec2(0 / 3, 2 / 3)],
        // 4xMSAA
        // Pattern docs: http://msdn.microsoft.com/en-us/library/windows/desktop/ff476218(v=vs.85).aspx
        //   .N..
        //   ...E
        //   W...
        //   ..S.
        // Rolling circle pattern (N,E,S,W).
        x4: [new Vec2(-2 / 16, -6 / 16), new Vec2(6 / 16, -2 / 16), new Vec2(2 / 16, 6 / 16), new Vec2(-6 / 16, 2 / 16)],
        x5: [
        // Compressed 4 sample pattern on same vertical and horizontal line (less temporal flicker).
        // Compressed 1/2 works better than correct 2/3 (reduced temporal flicker).
        //   . N .
        //   W . E
        //   . S .
        // Rolling circle pattern (N,E,S,W).
        new Vec2(0, -1 / 2), new Vec2(1 / 2, 0), new Vec2(0, 1 / 2), new Vec2(-1 / 2, 0)],
        halton8: halton8
      };
      _export("TAAPass", TAAPass = /*#__PURE__*/function (_SettingPass) {
        _inheritsLoose(TAAPass, _SettingPass);
        function TAAPass() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SettingPass.call.apply(_SettingPass, [this].concat(args)) || this;
          _this.name = 'TAAPass';
          _this.effectName = 'pipeline/post-process/taa';
          _this.outputNames = ['TAA_First', 'TAA_Second'];
          _this.prevMatViewProj = new Mat4();
          _this.taaTextureIndex = -2;
          _this.samples = SampleOffsets.halton8;
          _this.sampleIndex = -1;
          _this.sampleOffset = new Vec2();
          _this.forceRender = true;
          _this.dirty = false;
          _this.taaMaskMaterial = void 0;
          _this.firstRender = true;
          return _this;
        }
        var _proto = TAAPass.prototype;
        _proto.checkEnable = function checkEnable(camera) {
          var enable = _SettingPass.prototype.checkEnable.call(this, camera);
          if (EDITOR && camera.cameraUsage === CameraUsage.PREVIEW) {
            enable = false;
          }
          if (disablePostProcessForDebugView()) {
            enable = false;
          }
          return enable;
        };
        _proto.slotName = function slotName(camera, index) {
          if (index === void 0) {
            index = 0;
          }
          if (!this.checkEnable(camera)) {
            return this.lastPass.slotName(camera, index);
          }
          if (this.taaTextureIndex < 0) {
            return _SettingPass.prototype.slotName.call(this, camera, 0);
          }
          return _SettingPass.prototype.slotName.call(this, camera, (this.taaTextureIndex + 1) % 2);
        };
        _proto.applyCameraJitter = function applyCameraJitter(camera) {
          camera._isProjDirty = true;
          camera.update(true);
          camera.matProj.m12 += this.sampleOffset.x;
          camera.matProj.m13 += this.sampleOffset.y;
          Mat4.invert(camera.matProjInv, camera.matProj);
          Mat4.multiply(camera.matViewProj, camera.matProj, camera.matView);
          Mat4.invert(camera.matViewProjInv, camera.matViewProj);
          camera.frustum.update(camera.matViewProj, camera.matViewProjInv);
        };
        _proto.updateSample = function updateSample() {
          if (this.dirty || this.forceRender) {
            this.sampleIndex++;
            this.taaTextureIndex++;
            this.dirty = false;
          }
          var offset = this.samples[this.sampleIndex % this.samples.length];
          if (this.sampleIndex === -1) {
            offset = Vec2.ZERO;
          }
          var setting = this.setting;
          this.sampleOffset.x = offset.x * setting.sampleScale / game.canvas.width;
          this.sampleOffset.y = offset.y * setting.sampleScale / game.canvas.height;
        };
        _proto.render = function render(camera, ppl) {
          var cameraID = getCameraUniqueID(camera);
          passContext.clearFlag = ClearFlagBit.COLOR;
          Vec4.set(passContext.clearColor, 0, 0, 0, 1);
          var firstRender = this.firstRender;
          if (firstRender) {
            this.prevMatViewProj.set(camera.matViewProj);
            this.firstRender = false;
          }
          var setting = this.setting;
          passContext.updatePassViewPort();
          var width = passContext.passViewport.width;
          var height = passContext.passViewport.height;
          var material = this.material;
          var taaMask = camera.node.getComponent(TAAMask);
          var maskTex;
          if (taaMask && taaMask.enabledInHierarchy) {
            maskTex = taaMask.mask;
          }
          if (maskTex) {
            if (!this.taaMaskMaterial) {
              var mi = new MaterialInstance({
                parent: material
              });
              mi.recompileShaders({
                USE_TAA_MASK: !EDITOR
              });
              this.taaMaskMaterial = mi;
            }
            material = this.taaMaskMaterial;
            material.setProperty('motionMaskTex', maskTex);
          } else {
            var black = builtinResMgr.get('black-texture');
            maskTex = black;
            material.setProperty('motionMaskTex', maskTex);
          }
          material.setProperty('taaParams1', tempVec4.set(this.sampleOffset.x, this.sampleOffset.y, setting.feedback, 0));
          material.setProperty('taaTextureSize', tempVec4.set(1 / width, 1 / height, 1 / width, 1 / height));
          material.setProperty('taaPrevViewProj', this.prevMatViewProj);
          this.prevMatViewProj.set(camera.matViewProj);
          passContext.material = material;

          // input output
          var input0 = this.lastPass.slotName(camera, 0);
          var historyTexture = _SettingPass.prototype.slotName.call(this, camera, this.taaTextureIndex % 2);
          if (firstRender) {
            historyTexture = input0;
          }
          var slot0 = this.slotName(camera, 0);
          var depthTex = passContext.depthSlotName;
          var layoutName = "DeferredTAA" + (this.taaTextureIndex < 0 ? -1 : this.taaTextureIndex % 2);
          passContext.addRenderPass(layoutName, "CameraTAAPass" + cameraID).setPassInput(input0, 'inputTexture').setPassInput(depthTex, 'depthTex').setPassInput(historyTexture, 'taaPrevTexture').addRasterView(slot0, Format.RGBA16F, true, ResourceResidency.PERSISTENT).blitScreen(0).version();
        };
        _createClass(TAAPass, [{
          key: "setting",
          get: function get() {
            return getSetting(TAA);
          }
        }]);
        return TAAPass;
      }(SettingPass));
    }
  };
});