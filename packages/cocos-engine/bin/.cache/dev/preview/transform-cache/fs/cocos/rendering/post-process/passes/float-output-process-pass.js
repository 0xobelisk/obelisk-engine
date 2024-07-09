System.register("q-bundled:///fs/cocos/rendering/post-process/passes/float-output-process-pass.js", ["../../../core/index.js", "../../../gfx/index.js", "../../../render-scene/scene/index.js", "../../custom/define.js", "../utils/pass-context.js", "./setting-pass.js"], function (_export, _context) {
  "use strict";

  var Vec4, cclegacy, ClearFlagBit, Format, FOG_TYPE_NONE, getCameraUniqueID, passContext, SettingPass, FloatOutputProcessPass;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
    setters: [function (_coreIndexJs) {
      Vec4 = _coreIndexJs.Vec4;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_gfxIndexJs) {
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
      Format = _gfxIndexJs.Format;
    }, function (_renderSceneSceneIndexJs) {
      FOG_TYPE_NONE = _renderSceneSceneIndexJs.FOG_TYPE_NONE;
    }, function (_customDefineJs) {
      getCameraUniqueID = _customDefineJs.getCameraUniqueID;
    }, function (_utilsPassContextJs) {
      passContext = _utilsPassContextJs.passContext;
    }, function (_settingPassJs) {
      SettingPass = _settingPassJs.SettingPass;
    }],
    execute: function () {
      _export("FloatOutputProcessPass", FloatOutputProcessPass = /*#__PURE__*/function (_SettingPass) {
        _inheritsLoose(FloatOutputProcessPass, _SettingPass);
        function FloatOutputProcessPass() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SettingPass.call.apply(_SettingPass, [this].concat(args)) || this;
          _this.name = 'FloatOutputProcessPass';
          _this.effectName = 'pipeline/float-output-process';
          _this.outputNames = ['FloatOutputProcess'];
          _this.hdrInputName = '';
          _this.enableInAllEditorCamera = true;
          _this.enable = true;
          return _this;
        }
        var _proto = FloatOutputProcessPass.prototype;
        _proto.checkEnable = function checkEnable(camera) {
          var ppl = cclegacy.director.root.pipeline;
          return ppl.getMacroBool('CC_USE_FLOAT_OUTPUT');
        };
        _proto.getHDRInputName = function getHDRInputName() {
          return this.hdrInputName;
        };
        _proto.onGlobalPipelineStateChanged = function onGlobalPipelineStateChanged() {
          passContext.material = this.material;
          var passes = passContext.material.passes;
          for (var i = 0; i < passes.length; i++) {
            var pass = passes[i];
            pass.beginChangeStatesSilently();
            pass.tryCompile(); // force update shaders
            pass.endChangeStatesSilently();
          }
        };
        _proto.needDepthInput = function needDepthInput(ppl) {
          return ppl.pipelineSceneData.fog.type !== FOG_TYPE_NONE;
        };
        _proto.render = function render(camera, ppl) {
          var cameraID = getCameraUniqueID(camera);
          passContext.material = this.material;
          var copyDS = '';
          var passIndx = 0;
          var inputDS = passContext.depthSlotName;
          if (this.needDepthInput(ppl)) {
            copyDS = 'floatOutputProcessCopyDS';
            // ==== Copy input DS ===
            var copyInputDSPassLayoutName = 'copy-pass';
            var copyInputDSPass = "floatOutputProcessCopyDS-pass" + cameraID;
            passContext.updatePassViewPort().addRenderPass(copyInputDSPassLayoutName, copyInputDSPass).setClearFlag(ClearFlagBit.COLOR).setClearColor(1.0, 0, 0, 0).setPassInput(inputDS, 'depthRaw').addRasterView(copyDS, Format.RGBA8).blitScreen(passIndx).version();
          }
          passIndx = 1;
          this.hdrInputName = this.lastPass.slotName(camera, 0);
          var output = this.slotName(camera, 0);
          var layoutName = 'tone-mapping';
          var passName = "tone-mapping" + cameraID;
          passContext.clearFlag = ClearFlagBit.COLOR;
          Vec4.set(passContext.clearColor, camera.clearColor.x, camera.clearColor.y, camera.clearColor.z, camera.clearColor.w);
          passContext.updatePassViewPort().addRenderPass(layoutName, passName).setPassInput(this.hdrInputName, 'u_texSampler').setPassInput(copyDS, 'DepthTex').addRasterView(output, Format.RGBA8).blitScreen(passIndx).version();
        };
        return FloatOutputProcessPass;
      }(SettingPass));
    }
  };
});