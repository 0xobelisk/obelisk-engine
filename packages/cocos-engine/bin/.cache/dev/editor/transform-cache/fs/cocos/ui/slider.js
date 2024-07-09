System.register("q-bundled:///fs/cocos/ui/slider.js", ["../core/data/decorators/index.js", "../../../virtual/internal%253Aconstants.js", "../scene-graph/index.js", "../2d/framework/index.js", "../core/math/index.js", "../core/value-types/enum.js", "../core/math/utils.js", "../2d/components/sprite.js", "../core/global-exports.js", "../scene-graph/node-event.js", "../xr/event/xr-event-handle.js"], function (_export, _context) {
  "use strict";

  var ccclass, help, executionOrder, menu, requireComponent, tooltip, type, slide, range, serializable, EDITOR, Component, EventHandler, UITransform, Vec3, ccenum, clamp01, Sprite, legacyCC, NodeEventType, XrUIPressEventType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _class3, _tempPos, Direction, Slider;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
      requireComponent = _coreDataDecoratorsIndexJs.requireComponent;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      slide = _coreDataDecoratorsIndexJs.slide;
      range = _coreDataDecoratorsIndexJs.range;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_sceneGraphIndexJs) {
      Component = _sceneGraphIndexJs.Component;
      EventHandler = _sceneGraphIndexJs.EventHandler;
    }, function (_dFrameworkIndexJs) {
      UITransform = _dFrameworkIndexJs.UITransform;
    }, function (_coreMathIndexJs) {
      Vec3 = _coreMathIndexJs.Vec3;
    }, function (_coreValueTypesEnumJs) {
      ccenum = _coreValueTypesEnumJs.ccenum;
    }, function (_coreMathUtilsJs) {
      clamp01 = _coreMathUtilsJs.clamp01;
    }, function (_dComponentsSpriteJs) {
      Sprite = _dComponentsSpriteJs.Sprite;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_sceneGraphNodeEventJs) {
      NodeEventType = _sceneGraphNodeEventJs.NodeEventType;
    }, function (_xrEventXrEventHandleJs) {
      XrUIPressEventType = _xrEventXrEventHandleJs.XrUIPressEventType;
    }],
    execute: function () {
      _tempPos = new Vec3();
      /**
       * @en
       * The Slider Direction.
       *
       * @zh
       * 滑动器方向。
       */
      (function (Direction) {
        Direction[Direction["Horizontal"] = 0] = "Horizontal";
        Direction[Direction["Vertical"] = 1] = "Vertical";
      })(Direction || (Direction = {}));
      ccenum(Direction);

      /**
       * @en
       * The Slider Control.
       *
       * @zh
       * 滑动器组件。
       */
      _export("Slider", Slider = (_dec = ccclass('cc.Slider'), _dec2 = help('i18n:cc.Slider'), _dec3 = executionOrder(110), _dec4 = menu('UI/Slider'), _dec5 = requireComponent(UITransform), _dec6 = type(Sprite), _dec7 = tooltip('i18n:slider.handle'), _dec8 = type(Direction), _dec9 = tooltip('i18n:slider.direction'), _dec10 = range([0, 1, 0.01]), _dec11 = tooltip('i18n:slider.progress'), _dec12 = type([EventHandler]), _dec13 = tooltip('i18n:slider.slideEvents'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = (_class3 = class Slider extends Component {
        constructor(...args) {
          super(...args);
          /**
           * @en
           * The slider slide events' callback array.
           *
           * @zh
           * 滑动器组件滑动事件回调函数数组。
           */
          this.slideEvents = _initializer && _initializer();
          this._handle = _initializer2 && _initializer2();
          this._direction = _initializer3 && _initializer3();
          this._progress = _initializer4 && _initializer4();
          this._offset = new Vec3();
          this._dragging = false;
          this._touchHandle = false;
          this._handleLocalPos = new Vec3();
          this._touchPos = new Vec3();
        }
        /**
         * @en
         * The "handle" part of the slider.
         *
         * @zh
         * 滑动器滑块按钮部件。
         */
        get handle() {
          return this._handle;
        }
        set handle(value) {
          if (this._handle === value) {
            return;
          }
          this._handle = value;
          if (EDITOR && this._handle) {
            this._updateHandlePosition();
          }
        }

        /**
         * @en
         * The slider direction.
         *
         * @zh
         * 滑动器方向。
         */
        get direction() {
          return this._direction;
        }
        set direction(value) {
          if (this._direction === value) {
            return;
          }
          this._direction = value;
          this._changeLayout();
        }

        /**
         * @en
         * The current progress of the slider. The valid value is between 0-1.
         *
         * @zh
         * 当前进度值，该数值的区间是 0-1 之间。
         */
        get progress() {
          return this._progress;
        }
        set progress(value) {
          if (this._progress === value) {
            return;
          }
          this._progress = value;
          this._updateHandlePosition();
        }
        __preload() {
          this._updateHandlePosition();
        }

        // 注册事件

        onEnable() {
          this._updateHandlePosition();
          this.node.on(NodeEventType.TOUCH_START, this._onTouchBegan, this);
          this.node.on(NodeEventType.TOUCH_MOVE, this._onTouchMoved, this);
          this.node.on(NodeEventType.TOUCH_END, this._onTouchEnded, this);
          this.node.on(NodeEventType.TOUCH_CANCEL, this._onTouchCancelled, this);
          this.node.on(XrUIPressEventType.XRUI_HOVER_STAY, this._xrHoverStay, this);
          this.node.on(XrUIPressEventType.XRUI_CLICK, this._xrClick, this);
          this.node.on(XrUIPressEventType.XRUI_UNCLICK, this._xrUnClick, this);
          if (this._handle && this._handle.isValid) {
            this._handle.node.on(NodeEventType.TOUCH_START, this._onHandleDragStart, this);
            this._handle.node.on(NodeEventType.TOUCH_MOVE, this._onTouchMoved, this);
            this._handle.node.on(NodeEventType.TOUCH_END, this._onTouchEnded, this);
          }
        }
        onDisable() {
          this.node.off(NodeEventType.TOUCH_START, this._onTouchBegan, this);
          this.node.off(NodeEventType.TOUCH_MOVE, this._onTouchMoved, this);
          this.node.off(NodeEventType.TOUCH_END, this._onTouchEnded, this);
          this.node.off(NodeEventType.TOUCH_CANCEL, this._onTouchCancelled, this);
          this.node.off(XrUIPressEventType.XRUI_HOVER_STAY, this._xrHoverStay, this);
          this.node.off(XrUIPressEventType.XRUI_CLICK, this._xrClick, this);
          this.node.off(XrUIPressEventType.XRUI_UNCLICK, this._xrUnClick, this);
          if (this._handle && this._handle.isValid) {
            this._handle.node.off(NodeEventType.TOUCH_START, this._onHandleDragStart, this);
            this._handle.node.off(NodeEventType.TOUCH_MOVE, this._onTouchMoved, this);
            this._handle.node.off(NodeEventType.TOUCH_END, this._onTouchEnded, this);
          }
        }
        _onHandleDragStart(event) {
          if (!event || !this._handle || !this._handle.node._uiProps.uiTransformComp) {
            return;
          }
          this._dragging = true;
          this._touchHandle = true;
          const touhPos = event.touch.getUILocation();
          Vec3.set(this._touchPos, touhPos.x, touhPos.y, 0);
          this._handle.node._uiProps.uiTransformComp.convertToNodeSpaceAR(this._touchPos, this._offset);
          event.propagationStopped = true;
        }
        _onTouchBegan(event) {
          if (!this._handle || !event) {
            return;
          }
          this._dragging = true;
          if (!this._touchHandle) {
            this._handleSliderLogic(event.touch);
          }
          event.propagationStopped = true;
        }
        _onTouchMoved(event) {
          if (!this._dragging || !event) {
            return;
          }
          this._handleSliderLogic(event.touch);
          event.propagationStopped = true;
        }
        _onTouchEnded(event) {
          this._dragging = false;
          this._touchHandle = false;
          this._offset = new Vec3();
          if (event) {
            event.propagationStopped = true;
          }
        }
        _onTouchCancelled(event) {
          this._dragging = false;
          if (event) {
            event.propagationStopped = true;
          }
        }
        _handleSliderLogic(touch) {
          this._updateProgress(touch);
          this._emitSlideEvent();
        }
        _emitSlideEvent() {
          EventHandler.emitEvents(this.slideEvents, this);
          this.node.emit('slide', this);
        }
        _updateProgress(touch) {
          if (!this._handle || !touch) {
            return;
          }
          const touchPos = touch.getUILocation();
          Vec3.set(this._touchPos, touchPos.x, touchPos.y, 0);
          const uiTrans = this.node._uiProps.uiTransformComp;
          const localTouchPos = uiTrans.convertToNodeSpaceAR(this._touchPos, _tempPos);
          if (this.direction === Direction.Horizontal) {
            this.progress = clamp01(0.5 + (localTouchPos.x - this._offset.x) / uiTrans.width);
          } else {
            this.progress = clamp01(0.5 + (localTouchPos.y - this._offset.y) / uiTrans.height);
          }
        }
        _updateHandlePosition() {
          if (!this._handle) {
            return;
          }
          this._handleLocalPos.set(this._handle.node.getPosition());
          const uiTrans = this.node._uiProps.uiTransformComp;
          if (this._direction === Direction.Horizontal) {
            this._handleLocalPos.x = -uiTrans.width * uiTrans.anchorX + this.progress * uiTrans.width;
          } else {
            this._handleLocalPos.y = -uiTrans.height * uiTrans.anchorY + this.progress * uiTrans.height;
          }
          this._handle.node.setPosition(this._handleLocalPos);
        }
        _changeLayout() {
          const uiTrans = this.node._uiProps.uiTransformComp;
          const contentSize = uiTrans.contentSize;
          uiTrans.setContentSize(contentSize.height, contentSize.width);
          if (this._handle) {
            const pos = this._handle.node.position;
            if (this._direction === Direction.Horizontal) {
              this._handle.node.setPosition(pos.x, 0, pos.z);
            } else {
              this._handle.node.setPosition(0, pos.y, pos.z);
            }
            this._updateHandlePosition();
          }
        }
        _xrHandleProgress(point) {
          if (!this._touchHandle) {
            const uiTrans = this.node._uiProps.uiTransformComp;
            uiTrans.convertToNodeSpaceAR(point, _tempPos);
            if (this.direction === Direction.Horizontal) {
              this.progress = clamp01(0.5 + (_tempPos.x - this.node.position.x) / uiTrans.width);
            } else {
              this.progress = clamp01(0.5 + (_tempPos.y - this.node.position.y) / uiTrans.height);
            }
          }
        }
        _xrClick(event) {
          if (!this._handle) {
            return;
          }
          this._dragging = true;
          this._xrHandleProgress(event.hitPoint);
          this._emitSlideEvent();
        }
        _xrUnClick() {
          this._dragging = false;
          this._touchHandle = false;
        }
        _xrHoverStay(event) {
          if (!this._dragging) {
            return;
          }
          this._xrHandleProgress(event.hitPoint);
          this._emitSlideEvent();
        }
      }, _class3.Direction = Direction, _class3), (_applyDecoratedDescriptor(_class2.prototype, "handle", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "handle"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "direction"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "progress", [slide, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "progress"), _class2.prototype), _initializer = _applyDecoratedInitializer(_class2.prototype, "slideEvents", [_dec12, serializable, _dec13], function () {
        return [];
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_handle", [serializable], function () {
        return null;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_direction", [serializable], function () {
        return Direction.Horizontal;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_progress", [serializable], function () {
        return 0.1;
      })), _class2)) || _class) || _class) || _class) || _class) || _class));
      /**
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event slide
       * @param {Event.EventCustom} event
       * @param {Slider} slider - The slider component.
       */
      legacyCC.Slider = Slider;
    }
  };
});