System.register("q-bundled:///fs/cocos/rendering/reflection-probe/reflection-probe-stage.js", ["../../core/data/decorators/index.js", "../../gfx/index.js", "../render-stage.js", "../enum.js", "../define.js", "../render-reflection-probe-queue.js", "../../core/index.js", "../../core/math/color.js"], function (_export, _context) {
  "use strict";

  var ccclass, Color, Rect, ClearFlagBit, RenderStage, ForwardStagePriority, SetIndex, RenderReflectionProbeQueue, Vec3, packRGBE, _dec, _class, _class2, colors, ReflectionProbeStage;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_gfxIndexJs) {
      Color = _gfxIndexJs.Color;
      Rect = _gfxIndexJs.Rect;
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
    }, function (_renderStageJs) {
      RenderStage = _renderStageJs.RenderStage;
    }, function (_enumJs) {
      ForwardStagePriority = _enumJs.ForwardStagePriority;
    }, function (_defineJs) {
      SetIndex = _defineJs.SetIndex;
    }, function (_renderReflectionProbeQueueJs) {
      RenderReflectionProbeQueue = _renderReflectionProbeQueueJs.RenderReflectionProbeQueue;
    }, function (_coreIndexJs) {
      Vec3 = _coreIndexJs.Vec3;
    }, function (_coreMathColorJs) {
      packRGBE = _coreMathColorJs.packRGBE;
    }],
    execute: function () {
      colors = [new Color(1, 1, 1, 1)];
      /**
       * @en reflection probe render stage
       * @zh 反射探针渲染阶段。
       */
      _export("ReflectionProbeStage", ReflectionProbeStage = (_dec = ccclass('ReflectionProbeStage'), _dec(_class = (_class2 = /*#__PURE__*/function (_RenderStage) {
        _inheritsLoose(ReflectionProbeStage, _RenderStage);
        function ReflectionProbeStage() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _RenderStage.call.apply(_RenderStage, [this].concat(args)) || this;
          _this._frameBuffer = null;
          _this._renderArea = new Rect();
          _this._probe = null;
          _this._probeRenderQueue = void 0;
          _this._rgbeColor = new Vec3();
          return _this;
        }
        var _proto = ReflectionProbeStage.prototype;
        /**
         * @en Sets the probe info
         * @zh 设置probe信息
         * @param probe
         * @param frameBuffer
         */
        _proto.setUsageInfo = function setUsageInfo(probe, frameBuffer) {
          this._probe = probe;
          this._frameBuffer = frameBuffer;
        };
        _proto.destroy = function destroy() {
          var _this$_probeRenderQue;
          this._frameBuffer = null;
          (_this$_probeRenderQue = this._probeRenderQueue) === null || _this$_probeRenderQue === void 0 ? void 0 : _this$_probeRenderQue.clear();
        };
        _proto.clearFramebuffer = function clearFramebuffer(camera) {
          if (!this._frameBuffer) {
            return;
          }
          colors[0].w = camera.clearColor.w;
          var pipeline = this._pipeline;
          var pipelineSceneData = pipeline.pipelineSceneData;
          var shadingScale = pipelineSceneData.shadingScale;
          var vp = camera.viewport;
          var size = this._probe.resolution;
          this._renderArea.x = vp.x * size;
          this._renderArea.y = vp.y * size;
          this._renderArea.width = vp.width * size * shadingScale;
          this._renderArea.height = vp.height * size * shadingScale;
          var cmdBuff = pipeline.commandBuffers[0];
          var renderPass = this._frameBuffer.renderPass;
          cmdBuff.beginRenderPass(renderPass, this._frameBuffer, this._renderArea, colors, camera.clearDepth, camera.clearStencil);
          cmdBuff.endRenderPass();
        };
        _proto.render = function render(camera) {
          var pipeline = this._pipeline;
          var cmdBuff = pipeline.commandBuffers[0];
          this._probeRenderQueue.gatherRenderObjects(this._probe, camera, cmdBuff);
          pipeline.pipelineUBO.updateCameraUBO(this._probe.camera);
          this._renderArea.x = 0;
          this._renderArea.y = 0;
          this._renderArea.width = this._probe.renderArea().x;
          this._renderArea.height = this._probe.renderArea().y;
          var renderPass = this._frameBuffer.renderPass;
          if (this._probe.camera.clearFlag & ClearFlagBit.COLOR) {
            this._rgbeColor.x = this._probe.camera.clearColor.x;
            this._rgbeColor.y = this._probe.camera.clearColor.y;
            this._rgbeColor.z = this._probe.camera.clearColor.z;
            var rgbe = packRGBE(this._rgbeColor);
            colors[0].x = rgbe.x;
            colors[0].y = rgbe.y;
            colors[0].z = rgbe.z;
            colors[0].w = rgbe.w;
          }
          var device = pipeline.device;
          cmdBuff.beginRenderPass(renderPass, this._frameBuffer, this._renderArea, colors, this._probe.camera.clearDepth, this._probe.camera.clearStencil);
          cmdBuff.bindDescriptorSet(SetIndex.GLOBAL, pipeline.descriptorSet);
          this._probeRenderQueue.recordCommandBuffer(device, renderPass, cmdBuff);
          cmdBuff.endRenderPass();
          pipeline.pipelineUBO.updateCameraUBO(camera);
        };
        _proto.activate = function activate(pipeline, flow) {
          _RenderStage.prototype.activate.call(this, pipeline, flow);
          this._probeRenderQueue = new RenderReflectionProbeQueue(pipeline);
        };
        return ReflectionProbeStage;
      }(RenderStage), _class2.initInfo = {
        name: 'ReflectionProbeStage',
        priority: ForwardStagePriority.FORWARD,
        tag: 0
      }, _class2)) || _class));
    }
  };
});