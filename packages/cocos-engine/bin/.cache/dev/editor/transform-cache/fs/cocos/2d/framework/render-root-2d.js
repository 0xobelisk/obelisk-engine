System.register("q-bundled:///fs/cocos/2d/framework/render-root-2d.js", ["../../core/data/decorators/index.js", "../../scene-graph/component.js", "../../core/index.js", "./ui-transform.js"], function (_export, _context) {
  "use strict";

  var ccclass, disallowMultiple, executeInEditMode, executionOrder, help, menu, requireComponent, Component, cclegacy, UITransform, _dec, _dec2, _dec3, _dec4, _dec5, _class, RenderRoot2D;
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      requireComponent = _coreDataDecoratorsIndexJs.requireComponent;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_uiTransformJs) {
      UITransform = _uiTransformJs.UITransform;
    }],
    execute: function () {
      /**
       * @en The entry node for 2D object data collection, all 2D rendering objects need to be rendered under the RenderRoot node.
       * @zh 2D 对象数据收集的入口节点，所有的 2D渲染对象需在 RenderRoot 节点下才可以被渲染。
       */
      _export("RenderRoot2D", RenderRoot2D = (_dec = ccclass('cc.RenderRoot2D'), _dec2 = help('i18n:cc.RenderRoot2D'), _dec3 = executionOrder(100), _dec4 = menu('2D/RenderRoot2D'), _dec5 = requireComponent(UITransform), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = disallowMultiple(_class = executeInEditMode(_class = class RenderRoot2D extends Component {
        onEnable() {
          cclegacy.director.root.batcher2D.addScreen(this);
        }
        onDisable() {
          cclegacy.director.root.batcher2D.removeScreen(this);
        }
        onDestroy() {
          cclegacy.director.root.batcher2D.removeScreen(this);
        }
      }) || _class) || _class) || _class) || _class) || _class) || _class) || _class));
    }
  };
});