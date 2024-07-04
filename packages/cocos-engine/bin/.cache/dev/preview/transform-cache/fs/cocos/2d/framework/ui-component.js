System.register("q-bundled:///fs/cocos/2d/framework/ui-component.js", ["../../core/data/decorators/index.js", "../../scene-graph/component.js", "./ui-transform.js", "../renderer/stencil-manager.js"], function (_export, _context) {
  "use strict";

  var ccclass, disallowMultiple, executeInEditMode, executionOrder, requireComponent, Component, UITransform, Stage, _dec, _dec2, _dec3, _class, UIComponent;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      requireComponent = _coreDataDecoratorsIndexJs.requireComponent;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_uiTransformJs) {
      UITransform = _uiTransformJs.UITransform;
    }, function (_rendererStencilManagerJs) {
      Stage = _rendererStencilManagerJs.Stage;
    }],
    execute: function () {
      /**
       * @en Legacy 2D base class for rendering component, please use [[UIRenderer]] instead.
       * This component will setup NodeUIProperties.uiComp in its owner [[Node]].
       * @zh 旧的 2D 渲染组件基类，请使用 [[UIRenderer]] 替代。
       * 这个组件会设置 [[Node]] 上的 NodeUIProperties.uiComp。
       * @deprecated since v3.4.1, please use [[UIRenderer]] instead.
       */
      _export("UIComponent", UIComponent = (_dec = ccclass('cc.UIComponent'), _dec2 = requireComponent(UITransform), _dec3 = executionOrder(110), _dec(_class = _dec2(_class = _dec3(_class = disallowMultiple(_class = executeInEditMode(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIComponent, _Component);
        function UIComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._lastParent = null;
          /**
           * @deprecated since v3.4.1, please use [[UIRenderer]] instead.
           */
          _this.stencilStage = Stage.DISABLED;
          return _this;
        }
        var _proto = UIComponent.prototype;
        _proto.__preload = function __preload() {
          // TODO: UIComponent should not be assigned to UIMeshRenderer | UIRenderer @holycanvas
          // workaround: mark this as any
          // issue: https://github.com/cocos/cocos-engine/issues/14637
          this.node._uiProps.uiComp = this;
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.onDestroy = function onDestroy() {
          // TODO: UIComponent should not be assigned to UIMeshRenderer | UIRenderer @holycanvas
          // workaround: mark this as any
          // issue: https://github.com/cocos/cocos-engine/issues/14637
          if (this.node._uiProps.uiComp === this) {
            this.node._uiProps.uiComp = null;
          }
        }

        /**
         * @en Post render data submission procedure, it's executed after assembler updated for all children.
         * It may assemble some extra render data to the geometry buffers, or it may only change some render states.
         * Don't call it unless you know what you are doing.
         * @zh 后置渲染数据组装程序，它会在所有子节点的渲染数据组装完成后被调用。
         * 它可能会组装额外的渲染数据到顶点数据缓冲区，也可能只是重置一些渲染状态。
         * 注意：不要手动调用该函数，除非你理解整个流程。
         * @deprecated since v3.4.1, please use [[UIRenderer]] instead.
         */;
        _proto.postUpdateAssembler = function postUpdateAssembler(render) {}

        /**
         * @deprecated since v3.4.1, please use [[UIRenderer]] instead.
         */;
        _proto.markForUpdateRenderData = function markForUpdateRenderData(enable) {
          if (enable === void 0) {
            enable = true;
          }
        };
        /**
         * @deprecated since v3.4.1, please use [[UIRenderer]] instead.
         */
        _proto.setNodeDirty = function setNodeDirty() {}

        /**
         * @deprecated since v3.4.1, please use [[UIRenderer]] instead.
         */;
        _proto.setTextureDirty = function setTextureDirty() {};
        return UIComponent;
      }(Component)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});