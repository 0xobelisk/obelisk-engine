System.register("q-bundled:///fs/cocos/rendering/post-process/passes/forward-final-pass.js", ["../../../core/index.js", "../../../gfx/index.js", "../../../render-scene/scene/index.js", "../../custom/define.js", "../utils/pass-context.js", "./base-pass.js"], function (_export, _context) {
  "use strict";

  var Vec4, ClearFlagBit, Format, SKYBOX_FLAG, getCameraUniqueID, passContext, BasePass, ForwardFinalPass;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreIndexJs) {
      Vec4 = _coreIndexJs.Vec4;
    }, function (_gfxIndexJs) {
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
      Format = _gfxIndexJs.Format;
    }, function (_renderSceneSceneIndexJs) {
      SKYBOX_FLAG = _renderSceneSceneIndexJs.SKYBOX_FLAG;
    }, function (_customDefineJs) {
      getCameraUniqueID = _customDefineJs.getCameraUniqueID;
    }, function (_utilsPassContextJs) {
      passContext = _utilsPassContextJs.passContext;
    }, function (_basePassJs) {
      BasePass = _basePassJs.BasePass;
    }],
    execute: function () {
      _export("ForwardFinalPass", ForwardFinalPass = /*#__PURE__*/function (_BasePass) {
        _inheritsLoose(ForwardFinalPass, _BasePass);
        function ForwardFinalPass() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePass.call.apply(_BasePass, [this].concat(args)) || this;
          _this.name = 'ForwardFinalPass';
          _this.outputNames = ['ForwardFinalColor'];
          _this.enableInAllEditorCamera = true;
          return _this;
        }
        var _proto = ForwardFinalPass.prototype;
        _proto.render = function render(camera, ppl) {
          if (!this.lastPass) {
            return;
          }
          passContext.clearFlag = camera.clearFlag & ClearFlagBit.COLOR | camera.clearFlag & SKYBOX_FLAG;
          Vec4.set(passContext.clearColor, camera.clearColor.x, camera.clearColor.y, camera.clearColor.z, camera.clearColor.w);
          passContext.material = this.material;
          var cameraID = getCameraUniqueID(camera);
          var input0 = this.lastPass.slotName(camera, 0);
          var slot0 = this.slotName(camera, 0);
          var isOffScreen = false; //director.root!.mainWindow !== camera.window;

          var fb = camera.window.framebuffer;
          var ct = fb && fb.colorTextures[0];
          var format = ct ? ct.format : Format.RGBA8;
          var shadingScale = passContext.shadingScale;
          passContext.updatePassViewPort(1 / shadingScale, 1 / shadingScale).addRenderPass('post-process', "" + this.name + cameraID).setPassInput(input0, 'inputTexture').addRasterView(slot0, format, isOffScreen).blitScreen(0);
          this.renderProfiler(camera);
        };
        return ForwardFinalPass;
      }(BasePass));
    }
  };
});