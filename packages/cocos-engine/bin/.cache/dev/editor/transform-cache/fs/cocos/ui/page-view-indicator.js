System.register("q-bundled:///fs/cocos/ui/page-view-indicator.js", ["../core/data/decorators/index.js", "../2d/assets/index.js", "../scene-graph/component.js", "../core/math/index.js", "../core/value-types/enum.js", "../scene-graph/index.js", "./layout.js", "../2d/components/sprite.js", "../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executionOrder, menu, tooltip, type, serializable, SpriteFrame, Component, Color, Size, ccenum, Node, Layout, Sprite, legacyCC, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _class3, _color, Direction, PageViewIndicator;
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      menu = _coreDataDecoratorsIndexJs.menu;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_dAssetsIndexJs) {
      SpriteFrame = _dAssetsIndexJs.SpriteFrame;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_coreMathIndexJs) {
      Color = _coreMathIndexJs.Color;
      Size = _coreMathIndexJs.Size;
    }, function (_coreValueTypesEnumJs) {
      ccenum = _coreValueTypesEnumJs.ccenum;
    }, function (_sceneGraphIndexJs) {
      Node = _sceneGraphIndexJs.Node;
    }, function (_layoutJs) {
      Layout = _layoutJs.Layout;
    }, function (_dComponentsSpriteJs) {
      Sprite = _dComponentsSpriteJs.Sprite;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }],
    execute: function () {
      _color = new Color();
      /**
       * @en Enum for PageView Indicator direction.
       *
       * @zh 页面视图指示器的摆放方向。
       *
       * @enum PageViewIndicator.Direction
       */
      (function (Direction) {
        Direction[Direction["HORIZONTAL"] = 0] = "HORIZONTAL";
        Direction[Direction["VERTICAL"] = 1] = "VERTICAL";
      })(Direction || (Direction = {}));
      ccenum(Direction);

      /**
       * @en
       * The Page View Indicator Component.
       *
       * @zh
       * 页面视图每页标记组件。
       */
      _export("PageViewIndicator", PageViewIndicator = (_dec = ccclass('cc.PageViewIndicator'), _dec2 = help('i18n:cc.PageViewIndicator'), _dec3 = executionOrder(110), _dec4 = menu('UI/PageViewIndicator'), _dec5 = type(SpriteFrame), _dec6 = tooltip('i18n:pageview_indicator.spriteFrame'), _dec7 = type(Direction), _dec8 = tooltip('i18n:pageview_indicator.direction'), _dec9 = type(Size), _dec10 = tooltip('i18n:pageview_indicator.cell_size'), _dec11 = tooltip('i18n:pageview_indicator.spacing'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = (_class3 = class PageViewIndicator extends Component {
        constructor(...args) {
          super(...args);
          /**
           * @en
           * The distance between each element.
           *
           * @zh
           * 每个页面标记之间的边距。
           */
          this.spacing = _initializer && _initializer();
          this._spriteFrame = _initializer2 && _initializer2();
          this._direction = _initializer3 && _initializer3();
          this._cellSize = _initializer4 && _initializer4();
          this._layout = null;
          this._pageView = null;
          this._indicators = [];
        }
        /**
         * @en
         * The spriteFrame for each element.
         *
         * @zh
         * 每个页面标记显示的图片。
         */
        get spriteFrame() {
          return this._spriteFrame;
        }
        set spriteFrame(value) {
          if (this._spriteFrame === value) {
            return;
          }
          this._spriteFrame = value;
        }

        /**
         * @en
         * The location direction of PageViewIndicator.
         *
         * @zh
         * 页面标记摆放方向。
         *
         * @param direction @en The direction of the PageViewIndicator. @zh 页面标记的摆放方向。
         */
        get direction() {
          return this._direction;
        }
        set direction(value) {
          if (this._direction === value) {
            return;
          }
          this._direction = value;
        }

        /**
         * @en
         * The cellSize for each element.
         *
         * @zh
         * 每个页面标记的大小。
         */
        get cellSize() {
          return this._cellSize;
        }
        set cellSize(value) {
          if (this._cellSize === value) {
            return;
          }
          this._cellSize = value;
        }

        /**
         * @en Enum for PageView Indicator direction.
         * @zh 页面视图指示器的摆放方向。
         * @enum PageViewIndicator.Direction
         */

        onLoad() {
          this._updateLayout();
        }

        /**
         * @en
         * Set Page View.
         *
         * @zh
         * 设置页面视图。
         *
         * @param target @en The page view which is attached with this indicator.  @zh 当前标记对象附着到的页面视图对象。
         */
        setPageView(target) {
          this._pageView = target;
          this._refresh();
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _updateLayout() {
          this._layout = this.getComponent(Layout);
          if (!this._layout) {
            this._layout = this.addComponent(Layout);
          }
          const layout = this._layout;
          if (this.direction === Direction.HORIZONTAL) {
            layout.type = Layout.Type.HORIZONTAL;
            layout.spacingX = this.spacing;
          } else if (this.direction === Direction.VERTICAL) {
            layout.type = Layout.Type.VERTICAL;
            layout.spacingY = this.spacing;
          }
          layout.resizeMode = Layout.ResizeMode.CONTAINER;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _createIndicator() {
          const node = new Node();
          node.layer = this.node.layer;
          const sprite = node.addComponent(Sprite);
          sprite.spriteFrame = this.spriteFrame;
          sprite.sizeMode = Sprite.SizeMode.CUSTOM;
          node.parent = this.node;
          node._uiProps.uiTransformComp.setContentSize(this._cellSize);
          return node;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _changedState() {
          const indicators = this._indicators;
          if (indicators.length === 0 || !this._pageView) {
            return;
          }
          const idx = this._pageView.curPageIdx;
          if (idx >= indicators.length) {
            return;
          }
          for (let i = 0; i < indicators.length; ++i) {
            const node = indicators[i];
            if (!node._uiProps.uiComp) {
              continue;
            }
            const uiComp = node._uiProps.uiComp;
            _color.set(uiComp.color);
            _color.a = 255 / 2;
            uiComp.color = _color;
          }
          if (indicators[idx]._uiProps.uiComp) {
            const comp = indicators[idx]._uiProps.uiComp;
            _color.set(comp.color);
            _color.a = 255;
            comp.color = _color;
          }
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _refresh() {
          if (!this._pageView) {
            return;
          }
          const indicators = this._indicators;
          const pages = this._pageView.getPages();
          if (pages.length === indicators.length) {
            return;
          }
          let i = 0;
          if (pages.length > indicators.length) {
            for (i = 0; i < pages.length; ++i) {
              if (!indicators[i]) {
                indicators[i] = this._createIndicator();
              }
            }
          } else {
            const count = indicators.length - pages.length;
            for (i = count; i > 0; --i) {
              const node = indicators[i - 1];
              this.node.removeChild(node);
              indicators.splice(i - 1, 1);
            }
          }
          if (this._layout && this._layout.enabledInHierarchy) {
            this._layout.updateLayout();
          }
          this._changedState();
        }
      }, _class3.Direction = Direction, _class3), (_applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "spriteFrame"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "direction"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "cellSize", [_dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "cellSize"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "spacing", [serializable, _dec11], function () {
        return 0;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_spriteFrame", [serializable], function () {
        return null;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_direction", [serializable], function () {
        return Direction.HORIZONTAL;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_cellSize", [serializable], function () {
        return new Size(20, 20);
      })), _class2)) || _class) || _class) || _class) || _class));
      legacyCC.PageViewIndicator = PageViewIndicator;
    }
  };
});