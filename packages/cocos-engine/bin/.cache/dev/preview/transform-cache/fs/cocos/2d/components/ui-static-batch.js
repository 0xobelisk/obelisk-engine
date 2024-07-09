System.register("q-bundled:///fs/cocos/2d/components/ui-static-batch.js", ["../../core/data/decorators/index.js", "../framework/ui-renderer.js", "../renderer/draw-batch.js", "../../core/index.js", "../../game/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, menu, executionOrder, visible, override, UIRenderer, DrawBatch2D, warnID, director, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, UIStaticBatch;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      visible = _coreDataDecoratorsIndexJs.visible;
      override = _coreDataDecoratorsIndexJs.override;
    }, function (_frameworkUiRendererJs) {
      UIRenderer = _frameworkUiRendererJs.UIRenderer;
    }, function (_rendererDrawBatchJs) {
      DrawBatch2D = _rendererDrawBatchJs.DrawBatch2D;
    }, function (_coreIndexJs) {
      warnID = _coreIndexJs.warnID;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
    }],
    execute: function () {
      /**
       * @en
       * Static batch component of UI.
       * This component is placed on the root node of all node objects that need to be batch.
       * Only sprites and label participate in the batch.
       * Static batch must be enabled manually, otherwise dynamic batch is still used.
       * Note: Do not place mask, Graphics, and objects such as UI models or particles under child nodes,
       * otherwise rendering will be skipped after static batching is enabled.
       *
       * @zh
       * UI 静态合批组件。
       * 该组件放在所有需要被静态合批的节点对象的根节点上，子节点放置对象必须是精灵和文本，其余对象不参与静态合批。
       * 用户必须通过手动方式启用收集静态合批数据[[markAsDirty]]，否则合批方式仍然采用动态合批（采集数据的流程相同）。此后渲染的内容是采用收集到的合批渲染数据，子节点的任何修改将不再有效。
       * 注意：子节点下不要放置 Mask，Graphics，以及 UI 模型或者粒子之类对象，否则会在启用完静态合批后跳过渲染。
       *
       * @deprecated Since v3.4.1, We have adopted a new rendering batching policy in v3.4.1,
       * which will result in an effective performance improvement for normal dynamic batching components,
       * so manual management with the UIStaticBatch component is no longer recommended and will be removed in the future
       */
      _export("UIStaticBatch", UIStaticBatch = (_dec = ccclass('cc.UIStaticBatch'), _dec2 = help('i18n:cc.UIStaticBatch'), _dec3 = menu('2D/UIStaticBatch'), _dec4 = executionOrder(110), _dec5 = visible(false), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = /*#__PURE__*/function (_UIRenderer) {
        _inheritsLoose(UIStaticBatch, _UIRenderer);
        function UIStaticBatch() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _UIRenderer.call.apply(_UIRenderer, [this].concat(args)) || this;
          _this._init = false;
          _this._bufferAccessor = null;
          _this._dirty = true;
          _this._uiDrawBatchList = [];
          return _this;
        }
        var _proto = UIStaticBatch.prototype;
        _proto.postUpdateAssembler = function postUpdateAssembler(render) {
          // if (this._dirty) {
          //     this._dirty = false;
          //     this._init = true;
          //     this.node._static = true;
          //     render.endStaticBatch();
          //     this._bufferAccessor!.uploadBuffers();
          // }
          // render.currIsStatic = false;
        }

        /**
         * @en
         * Recollect data tags.
         * The render data will be recollected during the render phase of the current frame, and the next frame will be rendered using fixed data.
         * Note: 尽量不要频繁调用此接口, 会有一定内存损耗.
         *
         * @zh
         * 重新采集数据标记，会在当前帧的渲染阶段重新采集渲染数据，下一帧开始将会使用固定数据进行渲染。
         * 注意：尽量不要频繁调用此接口，因为会清空原先存储的 ia 数据重新采集，会有一定内存损耗。
         */;
        _proto.markAsDirty = function markAsDirty() {

          // this.node._static = false;
          // this._dirty = true;
          // this._init = false;
          // this._clearData();
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;
        _proto._requireDrawBatch = function _requireDrawBatch() {
          var batch = new DrawBatch2D();
          batch.isStatic = true;
          this._uiDrawBatchList.push(batch);
          return batch;
        };
        _proto._clearData = function _clearData() {
          if (this._bufferAccessor) {
            this._bufferAccessor.reset();
            var ui = this._getBatcher();
            for (var i = 0; i < this._uiDrawBatchList.length; i++) {
              var element = this._uiDrawBatchList[i];
              element.destroy(ui);
            }
          }
          this._uiDrawBatchList.length = 0;
          this._init = false;
        };
        _proto._getBatcher = function _getBatcher() {
          if (director.root && director.root.batcher2D) {
            return director.root.batcher2D;
          }
          warnID(9301);
          return null;
        };
        _createClass(UIStaticBatch, [{
          key: "color",
          get: function get() {
            return this._color;
          },
          set: function set(value) {
            if (this._color === value) {
              return;
            }
            this._color.set(value);
          }
        }, {
          key: "drawBatchList",
          get: function get() {
            return this._uiDrawBatchList;
          }
        }]);
        return UIStaticBatch;
      }(UIRenderer), (_applyDecoratedDescriptor(_class2.prototype, "color", [override, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "color"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});