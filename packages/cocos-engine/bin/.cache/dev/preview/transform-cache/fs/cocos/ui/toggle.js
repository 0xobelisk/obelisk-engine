System.register("q-bundled:///fs/cocos/ui/toggle.js", ["../core/data/decorators/index.js", "../../../virtual/internal%253Aconstants.js", "../scene-graph/component-event-handler.js", "../2d/framework/index.js", "../2d/components/sprite.js", "../core/data/utils/extends-enum.js", "./button.js", "../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, requireComponent, executionOrder, menu, tooltip, displayOrder, type, serializable, EDITOR_NOT_IN_PREVIEW, ComponentEventHandler, UITransform, Sprite, extendsEnum, ButtonEventType, Button, legacyCC, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _initializer, _initializer2, _initializer3, _class3, EventType, Toggle;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
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
      requireComponent = _coreDataDecoratorsIndexJs.requireComponent;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      menu = _coreDataDecoratorsIndexJs.menu;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_sceneGraphComponentEventHandlerJs) {
      ComponentEventHandler = _sceneGraphComponentEventHandlerJs.EventHandler;
    }, function (_dFrameworkIndexJs) {
      UITransform = _dFrameworkIndexJs.UITransform;
    }, function (_dComponentsSpriteJs) {
      Sprite = _dComponentsSpriteJs.Sprite;
    }, function (_coreDataUtilsExtendsEnumJs) {
      extendsEnum = _coreDataUtilsExtendsEnumJs.extendsEnum;
    }, function (_buttonJs) {
      ButtonEventType = _buttonJs.EventType;
      Button = _buttonJs.Button;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }],
    execute: function () {
      (function (EventType) {
        EventType["TOGGLE"] = "toggle";
      })(EventType || (EventType = {}));
      /**
       * @en
       * The toggle component is a CheckBox, when it used together with a ToggleGroup,
       * it could be treated as a RadioButton.
       *
       * @zh
       * Toggle 是一个 CheckBox，当它和 ToggleGroup 一起使用的时候，可以变成 RadioButton。
       */
      _export("Toggle", Toggle = (_dec = ccclass('cc.Toggle'), _dec2 = help('i18n:cc.Toggle'), _dec3 = executionOrder(110), _dec4 = menu('UI/Toggle'), _dec5 = requireComponent(UITransform), _dec6 = displayOrder(1), _dec7 = tooltip('i18n:toggle.isChecked'), _dec8 = type(Sprite), _dec9 = displayOrder(1), _dec10 = tooltip('i18n:toggle.checkMark'), _dec11 = type([ComponentEventHandler]), _dec12 = tooltip('i18n:toggle.check_events'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Button) {
        _inheritsLoose(Toggle, _Button);
        function Toggle() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Button.call.apply(_Button, [this].concat(args)) || this;
          /**
           * @en
           * If Toggle is clicked, it will trigger event's handler.
           *
           * @zh
           * Toggle 按钮的点击事件列表。
           */
          _this.checkEvents = _initializer && _initializer();
          _this._isChecked = _initializer2 && _initializer2();
          _this._checkMark = _initializer3 && _initializer3();
          return _this;
        }
        var _proto = Toggle.prototype;
        _proto._internalToggle = function _internalToggle() {
          this.isChecked = !this.isChecked;
        };
        _proto._set = function _set(value, emitEvent) {
          if (emitEvent === void 0) {
            emitEvent = true;
          }
          if (this._isChecked == value) return;
          this._isChecked = value;
          var group = this._toggleContainer;
          if (group && group.enabled && this.enabled) {
            if (value || !group.anyTogglesChecked() && !group.allowSwitchOff) {
              this._isChecked = true;
              group.notifyToggleCheck(this, emitEvent);
            }
          }
          this.playEffect();
          if (emitEvent) {
            this._emitToggleEvents();
          }
        }

        /**
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.playEffect = function playEffect() {
          if (this._checkMark) {
            this._checkMark.node.active = this._isChecked;
          }
        }

        /**
         * @en
         * Set isChecked without invoking checkEvents.
         *
         * @zh
         * 设置 isChecked 而不调用 checkEvents 回调。
         *
         * @param value @en Whether this toggle is pressed. @zh 是否被按下。
         */;
        _proto.setIsCheckedWithoutNotify = function setIsCheckedWithoutNotify(value) {
          this._set(value, false);
        };
        _proto.onEnable = function onEnable() {
          _Button.prototype.onEnable.call(this);
          this.playEffect();
          if (!EDITOR_NOT_IN_PREVIEW) {
            this.node.on(Toggle.EventType.CLICK, this._internalToggle, this);
          }
        };
        _proto.onDisable = function onDisable() {
          _Button.prototype.onDisable.call(this);
          if (!EDITOR_NOT_IN_PREVIEW) {
            this.node.off(Toggle.EventType.CLICK, this._internalToggle, this);
          }
        };
        _proto._emitToggleEvents = function _emitToggleEvents() {
          this.node.emit(Toggle.EventType.TOGGLE, this);
          if (this.checkEvents) {
            ComponentEventHandler.emitEvents(this.checkEvents, this);
          }
        };
        _createClass(Toggle, [{
          key: "isChecked",
          get:
          /**
           * @en
           * When this value is true, the check mark component will be enabled,
           * otherwise the check mark component will be disabled.
           *
           * @zh
           * 如果这个设置为 true，则 check mark 组件会处于 enabled 状态，否则处于 disabled 状态。
           */
          function get() {
            return this._isChecked;
          },
          set: function set(value) {
            this._set(value);
          }

          /**
           * @en
           * The image used for the checkmark.
           *
           * @zh
           * Toggle 处于选中状态时显示的图片。
           */
        }, {
          key: "checkMark",
          get: function get() {
            return this._checkMark;
          },
          set: function set(value) {
            if (this._checkMark === value) {
              return;
            }
            this._checkMark = value;
          }

          /**
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
        }, {
          key: "_resizeToTarget",
          set: function set(value) {
            if (value) {
              this._resizeNodeToTargetNode();
            }
          }

          /**
           * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
           */
        }, {
          key: "_toggleContainer",
          get: function get() {
            var parent = this.node.parent;
            if (legacyCC.Node.isNode(parent)) {
              return parent.getComponent('cc.ToggleContainer');
            }
            return null;
          }

          /**
           * @en Enum for toggle event.
           * @zh toggle 事件枚举。
           */
        }]);
        return Toggle;
      }(Button), _class3.EventType = extendsEnum(EventType, ButtonEventType), _class3), (_applyDecoratedDescriptor(_class2.prototype, "isChecked", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "isChecked"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "checkMark", [_dec8, _dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "checkMark"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "checkEvents", [_dec11, serializable, _dec12], function () {
        return [];
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_isChecked", [serializable], function () {
        return true;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_checkMark", [serializable], function () {
        return null;
      })), _class2)) || _class) || _class) || _class) || _class) || _class));
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       *
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event toggle
       * @param event @en The event when toggle is pressed up or down. @zh 切换键被按下或抬起时发送的事件。
       * @param toggle @en The Toggle component. @zh 切换键组件。
       */
      legacyCC.Toggle = Toggle;
    }
  };
});