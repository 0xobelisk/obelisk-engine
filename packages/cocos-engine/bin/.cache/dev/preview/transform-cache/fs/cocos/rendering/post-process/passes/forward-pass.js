System.register("q-bundled:///fs/cocos/rendering/post-process/passes/forward-pass.js", ["../../../core/index.js", "../../../gfx/index.js", "../../../render-scene/scene/index.js", "../../custom/types.js", "../../custom/define.js", "../utils/pass-context.js", "./base-pass.js"], function (_export, _context) {
  "use strict";

  var Vec4, ClearFlagBit, Format, ShadowType, SKYBOX_FLAG, LightInfo, QueueHint, SceneFlags, getCameraUniqueID, passContext, BasePass, getRTFormatBeforeToneMapping, getShadowMapSampler, ForwardPass;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
      ShadowType = _renderSceneSceneIndexJs.ShadowType;
      SKYBOX_FLAG = _renderSceneSceneIndexJs.SKYBOX_FLAG;
    }, function (_customTypesJs) {
      LightInfo = _customTypesJs.LightInfo;
      QueueHint = _customTypesJs.QueueHint;
      SceneFlags = _customTypesJs.SceneFlags;
    }, function (_customDefineJs) {
      getCameraUniqueID = _customDefineJs.getCameraUniqueID;
    }, function (_utilsPassContextJs) {
      passContext = _utilsPassContextJs.passContext;
    }, function (_basePassJs) {
      BasePass = _basePassJs.BasePass;
      getRTFormatBeforeToneMapping = _basePassJs.getRTFormatBeforeToneMapping;
      getShadowMapSampler = _basePassJs.getShadowMapSampler;
    }],
    execute: function () {
      _export("ForwardPass", ForwardPass = /*#__PURE__*/function (_BasePass) {
        _inheritsLoose(ForwardPass, _BasePass);
        function ForwardPass() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BasePass.call.apply(_BasePass, [this].concat(args)) || this;
          _this.name = 'ForwardPass';
          _this.outputNames = ['ForwardColor', 'ForwardDS'];
          _this.enableInAllEditorCamera = true;
          _this.depthBufferShadingScale = 1;
          return _this;
        }
        var _proto = ForwardPass.prototype;
        _proto.calcDepthSlot = function calcDepthSlot(camera) {
          var depthSlotName = !!passContext.depthSlotName;
          var canUsePrevDepth = !(camera.clearFlag & ClearFlagBit.DEPTH_STENCIL);
          canUsePrevDepth = canUsePrevDepth && passContext.shadingScale === this.depthBufferShadingScale;
          if (canUsePrevDepth) {
            if (!depthSlotName) passContext.depthSlotName = _BasePass.prototype.slotName.call(this, camera, 1);
            return;
          }
          this.depthBufferShadingScale = passContext.shadingScale;
          passContext.depthSlotName = _BasePass.prototype.slotName.call(this, camera, 1);
        };
        _proto.slotName = function slotName(camera, index) {
          if (index === void 0) {
            index = 0;
          }
          if (index === 1) {
            return passContext.depthSlotName;
          }
          return _BasePass.prototype.slotName.call(this, camera, index);
        };
        _proto.render = function render(camera, ppl) {
          var _camera$scene;
          passContext.clearFlag = ClearFlagBit.COLOR | camera.clearFlag & ClearFlagBit.DEPTH_STENCIL | camera.clearFlag & SKYBOX_FLAG;
          Vec4.set(passContext.clearColor, 0, 0, 0, 0);
          Vec4.set(passContext.clearDepthColor, camera.clearDepth, camera.clearStencil, 0, 0);
          this.calcDepthSlot(camera);
          var slot0 = this.slotName(camera, 0);
          var slot1 = this.slotName(camera, 1);
          var cameraID = getCameraUniqueID(camera);
          var isOffScreen = true;
          passContext.updatePassViewPort().addRenderPass('default', this.name + "_" + cameraID).addRasterView(slot0, getRTFormatBeforeToneMapping(ppl), isOffScreen).addRasterView(slot1, Format.DEPTH_STENCIL, isOffScreen).version();
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
          var forwardQueue = pass.addQueue(QueueHint.RENDER_OPAQUE);
          forwardQueue.addSceneOfCamera(camera, new LightInfo(), SceneFlags.OPAQUE_OBJECT | SceneFlags.CUTOUT_OBJECT | SceneFlags.GEOMETRY);
          var forwardAddQueue = pass.addQueue(QueueHint.RENDER_TRANSPARENT, 'forward-add');
          passContext.addSceneLights(forwardAddQueue, camera);
          var shadowInfo = ppl.pipelineSceneData.shadows;
          if ((_camera$scene = camera.scene) !== null && _camera$scene !== void 0 && _camera$scene.mainLight && shadowInfo.enabled && shadowInfo.type === ShadowType.Planar) {
            var _camera$scene2;
            pass.addQueue(QueueHint.RENDER_TRANSPARENT, 'planar-shadow').addSceneOfCamera(camera, new LightInfo((_camera$scene2 = camera.scene) === null || _camera$scene2 === void 0 ? void 0 : _camera$scene2.mainLight), SceneFlags.TRANSPARENT_OBJECT | SceneFlags.SHADOW_CASTER | SceneFlags.GEOMETRY);
          }
          passContext.forwardPass = this;
        };
        return ForwardPass;
      }(BasePass));
    }
  };
});