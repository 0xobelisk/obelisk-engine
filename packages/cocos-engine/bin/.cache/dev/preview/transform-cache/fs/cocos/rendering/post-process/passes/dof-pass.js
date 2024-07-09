System.register("q-bundled:///fs/cocos/rendering/post-process/passes/dof-pass.js", ["../../../gfx/index.js", "../../custom/define.js", "../utils/pass-context.js", "./setting-pass.js", "./base-pass.js", "../../../core/index.js", "../components/dof.js"], function (_export, _context) {
  "use strict";

  var ClearFlagBit, Format, getCameraUniqueID, passContext, getSetting, SettingPass, disablePostProcessForDebugView, Vec4, DOF, DofPass;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_gfxIndexJs) {
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
      Format = _gfxIndexJs.Format;
    }, function (_customDefineJs) {
      getCameraUniqueID = _customDefineJs.getCameraUniqueID;
    }, function (_utilsPassContextJs) {
      passContext = _utilsPassContextJs.passContext;
    }, function (_settingPassJs) {
      getSetting = _settingPassJs.getSetting;
      SettingPass = _settingPassJs.SettingPass;
    }, function (_basePassJs) {
      disablePostProcessForDebugView = _basePassJs.disablePostProcessForDebugView;
    }, function (_coreIndexJs) {
      Vec4 = _coreIndexJs.Vec4;
    }, function (_componentsDofJs) {
      DOF = _componentsDofJs.DOF;
    }],
    execute: function () {
      _export("DofPass", DofPass = /*#__PURE__*/function (_SettingPass) {
        _inheritsLoose(DofPass, _SettingPass);
        function DofPass() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SettingPass.call.apply(_SettingPass, [this].concat(args)) || this;
          _this.name = 'DOFPass';
          _this.effectName = 'pipeline/post-process/dof';
          _this.outputNames = ['DOFColor'];
          return _this;
        }
        var _proto = DofPass.prototype;
        _proto.checkEnable = function checkEnable(camera) {
          var enable = _SettingPass.prototype.checkEnable.call(this, camera);
          if (disablePostProcessForDebugView()) {
            enable = false;
          }
          return enable;
        };
        _proto.render = function render(camera, ppl) {
          var cameraID = getCameraUniqueID(camera);
          passContext.clearFlag = ClearFlagBit.COLOR;
          Vec4.set(passContext.clearColor, 0, 0, 0, 1);
          var passViewport = passContext.passViewport;
          passContext.material = this.material;
          var setting = this.setting;
          var width = passViewport.width;
          var height = passViewport.height;
          var cocParams = new Vec4(setting.focusDistance, setting.focusRange, setting.bokehRadius, 0.0);
          var mainTexTexelSize = new Vec4(1.0 / width, 1.0 / height, width, height);
          this.material.setProperty('cocParams', cocParams);
          this.material.setProperty('mainTexTexelSize', mainTexTexelSize);
          var slot = this.slotName(camera, 0);
          var colorTex = this.lastPass.slotName(camera, 0);
          var depthTex = this.lastPass.slotName(camera, 1);

          // compute CoC
          var outputCOC = "DOF_CIRCLE_OF_CONFUSION" + cameraID;
          passContext.updatePassViewPort().addRenderPass('dof-coc', "dof-coc" + cameraID).setPassInput(depthTex, 'DepthTex').addRasterView(outputCOC, Format.RGBA8).blitScreen(0).version();

          // downscale
          var outputPrefilter = "DOF_PREFILTER" + cameraID;
          passContext.updatePassViewPort(0.5).addRenderPass('dof-prefilter', "dof-prefilter" + cameraID).setPassInput(colorTex, 'colorTex').setPassInput(outputCOC, 'cocTex').addRasterView(outputPrefilter, Format.RGBA8).blitScreen(1).version();

          // bokeh blur
          var outputBokeh = "DOF_BOKEH" + cameraID;
          passContext.updatePassViewPort(0.5).addRenderPass('dof-bokeh', "dof-bokeh" + cameraID).setPassInput(outputPrefilter, 'prefilterTex').addRasterView(outputBokeh, Format.RGBA8).blitScreen(2).version();

          //filtering
          var outputFilter = "DOF_FILTER" + cameraID;
          passContext.updatePassViewPort(0.5).addRenderPass('dof-filter', "dof-filter" + cameraID).setPassInput(outputBokeh, 'bokehTex').addRasterView(outputFilter, Format.RGBA8).blitScreen(3).version();

          //combine
          passContext.updatePassViewPort().addRenderPass('dof-combine', "dof-combine" + cameraID).setPassInput(outputFilter, 'filterTex').setPassInput(outputCOC, 'cocTex').setPassInput(colorTex, 'colorTex').addRasterView(slot, Format.RGBA8).blitScreen(4).version();
        };
        _createClass(DofPass, [{
          key: "setting",
          get: function get() {
            return getSetting(DOF);
          }
        }]);
        return DofPass;
      }(SettingPass));
    }
  };
});