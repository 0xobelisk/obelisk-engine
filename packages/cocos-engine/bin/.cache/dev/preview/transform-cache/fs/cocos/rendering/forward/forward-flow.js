System.register("q-bundled:///fs/cocos/rendering/forward/forward-flow.js", ["../../core/data/decorators/index.js", "../define.js", "../render-flow.js", "../enum.js", "./forward-stage.js"], function (_export, _context) {
  "use strict";

  var ccclass, PIPELINE_FLOW_FORWARD, RenderFlow, ForwardFlowPriority, ForwardStage, _dec, _class, _class2, ForwardFlow;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
    }, function (_defineJs) {
      PIPELINE_FLOW_FORWARD = _defineJs.PIPELINE_FLOW_FORWARD;
    }, function (_renderFlowJs) {
      RenderFlow = _renderFlowJs.RenderFlow;
    }, function (_enumJs) {
      ForwardFlowPriority = _enumJs.ForwardFlowPriority;
    }, function (_forwardStageJs) {
      ForwardStage = _forwardStageJs.ForwardStage;
    }],
    execute: function () {
      /**
       * @en The forward flow in forward render pipeline
       * @zh 前向渲染流程。
       */
      _export("ForwardFlow", ForwardFlow = (_dec = ccclass('ForwardFlow'), _dec(_class = (_class2 = /*#__PURE__*/function (_RenderFlow) {
        _inheritsLoose(ForwardFlow, _RenderFlow);
        function ForwardFlow() {
          return _RenderFlow.apply(this, arguments) || this;
        }
        var _proto = ForwardFlow.prototype;
        _proto.initialize = function initialize(info) {
          _RenderFlow.prototype.initialize.call(this, info);
          if (this._stages.length === 0) {
            var forwardStage = new ForwardStage();
            forwardStage.initialize(ForwardStage.initInfo);
            this._stages.push(forwardStage);
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
        return ForwardFlow;
      }(RenderFlow), _class2.initInfo = {
        name: PIPELINE_FLOW_FORWARD,
        priority: ForwardFlowPriority.FORWARD,
        stages: []
      }, _class2)) || _class));
    }
  };
});