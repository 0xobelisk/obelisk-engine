System.register("q-bundled:///fs/cocos/rendering/deferred/main-flow.js", ["../../core/data/decorators/index.js", "../define.js", "../render-flow.js", "../enum.js", "./gbuffer-stage.js", "./lighting-stage.js", "./postprocess-stage.js", "./bloom-stage.js"], function (_export, _context) {
  "use strict";

  var ccclass, PIPELINE_FLOW_MAIN, RenderFlow, DeferredFlowPriority, GbufferStage, LightingStage, PostProcessStage, BloomStage, _dec, _class, _class2, MainFlow;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_defineJs) {
      PIPELINE_FLOW_MAIN = _defineJs.PIPELINE_FLOW_MAIN;
    }, function (_renderFlowJs) {
      RenderFlow = _renderFlowJs.RenderFlow;
    }, function (_enumJs) {
      DeferredFlowPriority = _enumJs.DeferredFlowPriority;
    }, function (_gbufferStageJs) {
      GbufferStage = _gbufferStageJs.GbufferStage;
    }, function (_lightingStageJs) {
      LightingStage = _lightingStageJs.LightingStage;
    }, function (_postprocessStageJs) {
      PostProcessStage = _postprocessStageJs.PostProcessStage;
    }, function (_bloomStageJs) {
      BloomStage = _bloomStageJs.BloomStage;
    }],
    execute: function () {
      /**
       * @en The main flow in deferred render pipeline
       * @zh 延迟渲染流程。
       */
      _export("MainFlow", MainFlow = (_dec = ccclass('MainFlow'), _dec(_class = (_class2 = /*#__PURE__*/function (_RenderFlow) {
        _inheritsLoose(MainFlow, _RenderFlow);
        function MainFlow() {
          return _RenderFlow.apply(this, arguments) || this;
        }
        var _proto = MainFlow.prototype;
        _proto.initialize = function initialize(info) {
          _RenderFlow.prototype.initialize.call(this, info);
          if (this._stages.length === 0) {
            var gbufferStage = new GbufferStage();
            gbufferStage.initialize(GbufferStage.initInfo);
            this._stages.push(gbufferStage);
            var lightingStage = new LightingStage();
            lightingStage.initialize(LightingStage.initInfo);
            this._stages.push(lightingStage);
            var bloomStage = new BloomStage();
            bloomStage.initialize(BloomStage.initInfo);
            this._stages.push(bloomStage);
            var postProcessStage = new PostProcessStage();
            postProcessStage.initialize(PostProcessStage.initInfo);
            this._stages.push(postProcessStage);
          }
          return true;
        };
        _proto.activate = function activate(pipeline) {
          _RenderFlow.prototype.activate.call(this, pipeline);
        };
        _proto.render = function render(camera) {
          _RenderFlow.prototype.render.call(this, camera);
        };
        _proto.destroy = function destroy() {
          _RenderFlow.prototype.destroy.call(this);
        };
        return MainFlow;
      }(RenderFlow), _class2.initInfo = {
        name: PIPELINE_FLOW_MAIN,
        priority: DeferredFlowPriority.MAIN,
        stages: []
      }, _class2)) || _class));
    }
  };
});