System.register("q-bundled:///fs/cocos/rendering/render-flow.js", ["../core/data/decorators/index.js", "./render-stage.js", "../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, displayOrder, serializable, type, RenderStage, cclegacy, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, RenderFlow;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      type = _coreDataDecoratorsIndexJs.type;
    }, function (_renderStageJs) {
      RenderStage = _renderStageJs.RenderStage;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      /**
       * @en Render flow information descriptor
       * @zh 渲染流程描述信息。
       */
      /**
       * @en Render flow is a sub process of the [[RenderPipeline]], it dispatch the render task to all the [[RenderStage]]s.
       * @zh 渲染流程是渲染管线（[[RenderPipeline]]）的一个子过程，它将渲染任务派发到它的所有渲染阶段（[[RenderStage]]）中执行。
       */
      _export("RenderFlow", RenderFlow = (_dec = ccclass('RenderFlow'), _dec2 = displayOrder(0), _dec3 = displayOrder(1), _dec4 = displayOrder(2), _dec5 = displayOrder(3), _dec6 = type([RenderStage]), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function RenderFlow() {
          this._name = _initializer && _initializer();
          this._priority = _initializer2 && _initializer2();
          this._tag = _initializer3 && _initializer3();
          this._stages = _initializer4 && _initializer4();
          this._pipeline = void 0;
        }
        var _proto = RenderFlow.prototype;
        /**
         * @en The initialization process, user shouldn't use it in most case, only useful when need to generate render pipeline programmatically.
         * @zh 初始化函数，正常情况下不会用到，仅用于程序化生成渲染管线的情况。
         * @param info The render flow information
         */
        _proto.initialize = function initialize(info) {
          this._name = info.name;
          this._priority = info.priority;
          this._stages = info.stages;
          if (info.tag) {
            this._tag = info.tag;
          }
          return true;
        }

        /**
         * @en Activate the current render flow in the given pipeline
         * @zh 为指定的渲染管线开启当前渲染流程
         * @param pipeline The render pipeline to activate this render flow
         */;
        _proto.activate = function activate(pipeline) {
          this._pipeline = pipeline;
          this._stages.sort(function (a, b) {
            return a.priority - b.priority;
          });
          for (var i = 0, len = this._stages.length; i < len; i++) {
            this._stages[i].activate(pipeline, this);
          }
        }

        /**
         * @en Render function, it basically run all render stages in sequence for the given view.
         * @zh 渲染函数，对指定的渲染视图按顺序执行所有渲染阶段。
         * @param view Render view。
         */;
        _proto.render = function render(camera) {
          for (var i = 0, len = this._stages.length; i < len; i++) {
            if (this._stages[i].enabled) this._stages[i].render(camera);
          }
        }

        /**
         * @en Destroy function.
         * @zh 销毁函数。
         */;
        _proto.destroy = function destroy() {
          for (var i = 0, len = this._stages.length; i < len; i++) {
            this._stages[i].destroy();
          }
          this._stages.length = 0;
        };
        _createClass(RenderFlow, [{
          key: "name",
          get:
          /**
           * @en The name of the render flow
           * @zh 渲染流程的名字
           */
          function get() {
            return this._name;
          }

          /**
           * @en Priority of the current flow
           * @zh 当前渲染流程的优先级。
           */
        }, {
          key: "priority",
          get: function get() {
            return this._priority;
          }

          /**
           * @en Tag of the current flow
           * @zh 当前渲染流程的标签。
           */
        }, {
          key: "tag",
          get: function get() {
            return this._tag;
          }

          /**
           * @en The stages of flow.
           * @zh 渲染流程 stage 列表。
           * @readonly
           */
        }, {
          key: "stages",
          get: function get() {
            return this._stages;
          }
        }, {
          key: "pipeline",
          get:
          /**
           * @en Get pipeline
           * @zh 获取pipeline
           */
          function get() {
            return this._pipeline;
          }
        }]);
        return RenderFlow;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_name", [_dec2, serializable], function () {
        return '';
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_priority", [_dec3, serializable], function () {
        return 0;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_tag", [_dec4, serializable], function () {
        return 0;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_stages", [_dec5, _dec6, serializable], function () {
        return [];
      })), _class2)) || _class));
      cclegacy.RenderFlow = RenderFlow;
    }
  };
});