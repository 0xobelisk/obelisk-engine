System.register("q-bundled:///fs/cocos/2d/components/label-outline.js", ["../../core/data/decorators/index.js", "../../scene-graph/component.js", "../../core/index.js", "./label.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executionOrder, menu, tooltip, requireComponent, executeInEditMode, Component, assertIsTrue, cclegacy, Label, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, LabelOutline;
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
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      menu = _coreDataDecoratorsIndexJs.menu;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      requireComponent = _coreDataDecoratorsIndexJs.requireComponent;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_coreIndexJs) {
      assertIsTrue = _coreIndexJs.assertIsTrue;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_labelJs) {
      Label = _labelJs.Label;
    }],
    execute: function () {
      /**
       * @en
       * Outline effect used to change the display, only for system fonts or TTF fonts.
       *
       * @zh
       * 描边效果组件,用于字体描边,只能用于系统字体。
       *
       * @deprecated since v3.8.2, please use [[Label.enableOutline]] instead.
       */
      _export("LabelOutline", LabelOutline = (_dec = ccclass('cc.LabelOutline'), _dec2 = help('i18n:cc.LabelOutline'), _dec3 = executionOrder(110), _dec4 = menu('UI/LabelOutline'), _dec5 = requireComponent(Label), _dec6 = tooltip('i18n:labelOutline.color'), _dec7 = tooltip('i18n:labelOutline.width'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LabelOutline, _Component);
        function LabelOutline() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = LabelOutline.prototype;
        /**
         * @deprecated since v3.8.2, please use [[Label.enableOutline]] instead.
         */
        _proto.onEnable = function onEnable() {
          var label = this.node.getComponent(Label);
          assertIsTrue(label);
          label.enableOutline = true;
        }

        /**
         * @deprecated since v3.8.2, please use [[Label.enableOutline]] instead.
         */;
        _proto.onDisable = function onDisable() {
          var label = this.node.getComponent(Label);
          assertIsTrue(label);
          label.enableOutline = false;
        };
        _createClass(LabelOutline, [{
          key: "color",
          get:
          /**
           * @en
           * Outline color.
           *
           * @zh
           * 改变描边的颜色。
           *
           * @deprecated since v3.8.2, please use [[Label.outlineColor]] instead.
           */
          function get() {
            var label = this.node.getComponent(Label);
            assertIsTrue(label);
            return label.outlineColor;
          },
          set: function set(value) {
            var label = this.node.getComponent(Label);
            assertIsTrue(label);
            label.outlineColor = value;
          }

          /**
           * @en
           * Change the outline width.
           *
           * @zh
           * 改变描边的宽度。
           *
           * @deprecated since v3.8.2, please use [[Label.outlineWidth]] instead.
           */
        }, {
          key: "width",
          get: function get() {
            var label = this.node.getComponent(Label);
            assertIsTrue(label);
            return label.outlineWidth;
          },
          set: function set(value) {
            var label = this.node.getComponent(Label);
            assertIsTrue(label);
            label.outlineWidth = value;
          }
        }]);
        return LabelOutline;
      }(Component), (_applyDecoratedDescriptor(_class2.prototype, "color", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "color"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "width", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "width"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class) || _class));
      cclegacy.LabelOutline = LabelOutline;
    }
  };
});