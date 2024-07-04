System.register(['./node-event-18d96a1b.js', './index-ce98320e.js', './sprite-renderer-9a6a919d.js', './sprite-5c924512.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js', './xr-event-handle-01bf95f5.js', './director-dc238483.js', './deprecated-f8df8d32.js', './touch-af62e326.js', './camera-component-b329f870.js', './rendering-sub-mesh.jsb-25043997.js', './scene-asset.jsb-0d4c6201.js', './decorators-b63b63a2.js', './device-90bc7390.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './murmurhash2_gc-2108d723.js', './deprecated-fcfb90f6.js', './model-renderer-f8d2f66d.js', './renderer-3bf7a012.js', './create-mesh.jsb-8af9d27e.js', './buffer-9511d9f4.js'], (function (exports) {
    'use strict';
    var _applyDecoratedDescriptor, EventHandler, Component, NodeEventType, Color, ccenum, ccclass, type, applyDecoratedInitializer, legacyCC, executionOrder, requireComponent, Vec3, lerp, serializable, Enum, ccwindow, Mat4, screenAdapter, contains, sys, OS, BrowserType, visibleRect, MINIGAME, JSB, RUNTIME_BASED, Size, warn, Vec2, clamp01, logID, errorID, approx, EDITOR_NOT_IN_PREVIEW, editorOnly, override, warnID, MutableForwardIterator, EPSILON$1, CCObject, deprecateModuleExportedName, setClassAlias, removeProperty, markAsWarning, UITransform, SpriteFrame, UIRenderer, View, view, Sprite, BitmapFont, Label, VerticalTextAlignment, Node, TransformBit, input, Input, EventGamepad, EventHandle, Scene, ImageAsset, Texture2D, XrUIPressEventType, XrKeyboardEventType, DeviceType, director, Director, game, KeyCode, EventTouch, SystemEventType, Event, Camera;
    return {
        setters: [function (module) {
            _applyDecoratedDescriptor = module.H;
            EventHandler = module.E;
            Component = module.C;
            NodeEventType = module.N;
        }, function (module) {
            Color = module.C;
            ccenum = module.ab;
            ccclass = module.by;
            type = module.bw;
            applyDecoratedInitializer = module.bx;
            legacyCC = module.l;
            executionOrder = module.cs;
            requireComponent = module.cC;
            Vec3 = module.n;
            lerp = module.I;
            serializable = module.bf;
            Enum = module.aa;
            ccwindow = module.c6;
            Mat4 = module.s;
            screenAdapter = module.bW;
            contains = module.cE;
            sys = module.aL;
            OS = module.bZ;
            BrowserType = module.cb;
            visibleRect = module.aN;
            MINIGAME = module.cF;
            JSB = module.cG;
            RUNTIME_BASED = module.cH;
            Size = module.S;
            warn = module.w;
            Vec2 = module.V;
            clamp01 = module.G;
            logID = module.c;
            errorID = module.f;
            approx = module.D;
            EDITOR_NOT_IN_PREVIEW = module.c8;
            editorOnly = module.bK;
            override = module.bd;
            warnID = module.d;
            MutableForwardIterator = module.c0;
            EPSILON$1 = module.E;
            CCObject = module.as;
            deprecateModuleExportedName = module.aj;
            setClassAlias = module.cj;
            removeProperty = module.ah;
            markAsWarning = module.ai;
        }, function (module) {
            UITransform = module.c;
            SpriteFrame = module.a;
            UIRenderer = module.b;
            View = module.V;
            view = module.h;
            exports({ ResolutionPolicy: module.t, View: module.V, view: module.h });
        }, function (module) {
            Sprite = module.a;
            BitmapFont = module.B;
            Label = module.b;
            VerticalTextAlignment = module.V;
        }, function (module) {
            Node = module.Q;
            TransformBit = module.Z;
            input = module.az;
            Input = module.aA;
            EventGamepad = module.au;
            EventHandle = module.av;
            Scene = module.U;
            ImageAsset = module.al;
            Texture2D = module.am;
        }, function () {}, function (module) {
            XrUIPressEventType = module.X;
            XrKeyboardEventType = module.a;
            DeviceType = module.D;
        }, function (module) {
            director = module.n;
            Director = module.m;
        }, function (module) {
            game = module.g;
        }, function (module) {
            KeyCode = module.K;
            EventTouch = module.d;
            SystemEventType = module.S;
            Event = module.E;
        }, function (module) {
            Camera = module.C;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            const minigame = {};

            var _dec$h, _dec2$f, _dec3$e, _dec4$b, _dec5$b, _dec6$5, _dec7$4, _dec8$3, _dec9$3, _dec10$1, _class$h, _class2$d, _initializer$d, _initializer2$d, _initializer3$b, _initializer4$a, _initializer5$8, _initializer6$5, _initializer7$5, _initializer8$5, _initializer9$5, _initializer10$5, _initializer11$5, _initializer12$4, _initializer13$3, _initializer14$2, _class3$a;
            const _tempColor$1 = new Color();
            var Transition;
            (function (Transition) {
              Transition[Transition["NONE"] = 0] = "NONE";
              Transition[Transition["COLOR"] = 1] = "COLOR";
              Transition[Transition["SPRITE"] = 2] = "SPRITE";
              Transition[Transition["SCALE"] = 3] = "SCALE";
            })(Transition || (Transition = {}));
            ccenum(Transition);
            var State;
            (function (State) {
              State["NORMAL"] = "normal";
              State["HOVER"] = "hover";
              State["PRESSED"] = "pressed";
              State["DISABLED"] = "disabled";
            })(State || (State = {}));
            let EventType$4;
            (function (EventType) {
              EventType["CLICK"] = "click";
            })(EventType$4 || (EventType$4 = {}));
            let Button = (_dec$h = ccclass('cc.Button'), _dec2$f = executionOrder(110), _dec3$e = requireComponent(UITransform), _dec4$b = type(Node), _dec5$b = type(Transition), _dec6$5 = type(SpriteFrame), _dec7$4 = type(SpriteFrame), _dec8$3 = type(SpriteFrame), _dec9$3 = type(SpriteFrame), _dec10$1 = type([EventHandler]), _dec$h(_class$h = _dec2$f(_class$h = _dec3$e(_class$h = (_class2$d = (_class3$a = class Button extends Component {
              constructor(...args) {
                super(...args);
                this.clickEvents = _initializer$d && _initializer$d();
                this._interactable = _initializer2$d && _initializer2$d();
                this._transition = _initializer3$b && _initializer3$b();
                this._normalColor = _initializer4$a && _initializer4$a();
                this._hoverColor = _initializer5$8 && _initializer5$8();
                this._pressedColor = _initializer6$5 && _initializer6$5();
                this._disabledColor = _initializer7$5 && _initializer7$5();
                this._normalSprite = _initializer8$5 && _initializer8$5();
                this._hoverSprite = _initializer9$5 && _initializer9$5();
                this._pressedSprite = _initializer10$5 && _initializer10$5();
                this._disabledSprite = _initializer11$5 && _initializer11$5();
                this._duration = _initializer12$4 && _initializer12$4();
                this._zoomScale = _initializer13$3 && _initializer13$3();
                this._target = _initializer14$2 && _initializer14$2();
                this._pressed = false;
                this._hovered = false;
                this._fromColor = new Color();
                this._toColor = new Color();
                this._time = 0;
                this._transitionFinished = true;
                this._fromScale = new Vec3();
                this._toScale = new Vec3();
                this._originalScale = null;
                this._sprite = null;
                this._targetScale = new Vec3();
              }
              get target() {
                return this._target || this.node;
              }
              set target(value) {
                if (this._target === value) {
                  return;
                }
                if (this._target) {
                  this._unregisterTargetEvent(this._target);
                }
                this._target = value;
                this._applyTarget();
              }
              get interactable() {
                return this._interactable;
              }
              set interactable(value) {
                if (this._interactable === value) {
                  return;
                }
                this._interactable = value;
                this._updateState();
                if (!this._interactable) {
                  this._resetState();
                }
              }
              set _resizeToTarget(value) {
                if (value) {
                  this._resizeNodeToTargetNode();
                }
              }
              get transition() {
                return this._transition;
              }
              set transition(value) {
                if (this._transition === value) {
                  return;
                }
                if (this._transition === Transition.COLOR) {
                  this._updateColorTransition(State.NORMAL);
                } else if (this._transition === Transition.SPRITE) {
                  this._updateSpriteTransition(State.NORMAL);
                }
                this._transition = value;
                this._updateState();
              }
              get normalColor() {
                return this._normalColor;
              }
              set normalColor(value) {
                if (this._normalColor === value) {
                  return;
                }
                this._normalColor.set(value);
                this._updateState();
              }
              get pressedColor() {
                return this._pressedColor;
              }
              set pressedColor(value) {
                if (this._pressedColor === value) {
                  return;
                }
                this._pressedColor.set(value);
              }
              get hoverColor() {
                return this._hoverColor;
              }
              set hoverColor(value) {
                if (this._hoverColor === value) {
                  return;
                }
                this._hoverColor.set(value);
              }
              get disabledColor() {
                return this._disabledColor;
              }
              set disabledColor(value) {
                if (this._disabledColor === value) {
                  return;
                }
                this._disabledColor.set(value);
                this._updateState();
              }
              get duration() {
                return this._duration;
              }
              set duration(value) {
                if (this._duration === value) {
                  return;
                }
                this._duration = value;
              }
              get zoomScale() {
                return this._zoomScale;
              }
              set zoomScale(value) {
                if (this._zoomScale === value) {
                  return;
                }
                this._zoomScale = value;
              }
              get normalSprite() {
                return this._normalSprite;
              }
              set normalSprite(value) {
                if (this._normalSprite === value) {
                  return;
                }
                this._normalSprite = value;
                const sprite = this.node.getComponent(Sprite);
                if (sprite) {
                  sprite.spriteFrame = value;
                }
                this._updateState();
              }
              get pressedSprite() {
                return this._pressedSprite;
              }
              set pressedSprite(value) {
                if (this._pressedSprite === value) {
                  return;
                }
                this._pressedSprite = value;
                this._updateState();
              }
              get hoverSprite() {
                return this._hoverSprite;
              }
              set hoverSprite(value) {
                if (this._hoverSprite === value) {
                  return;
                }
                this._hoverSprite = value;
                this._updateState();
              }
              get disabledSprite() {
                return this._disabledSprite;
              }
              set disabledSprite(value) {
                if (this._disabledSprite === value) {
                  return;
                }
                this._disabledSprite = value;
                this._updateState();
              }
              __preload() {
                if (!this.target) {
                  this.target = this.node;
                }
                this._applyTarget();
                this._resetState();
              }
              onEnable() {
                {
                  this._registerNodeEvent();
                }
              }
              onDisable() {
                this._resetState();
                {
                  this._unregisterNodeEvent();
                }
              }
              onDestroy() {
                if (this.target.isValid) {
                  this._unregisterTargetEvent(this.target);
                }
              }
              update(dt) {
                const target = this.target;
                if (this._transitionFinished || !target) {
                  return;
                }
                if (this._transition !== Transition.COLOR && this._transition !== Transition.SCALE) {
                  return;
                }
                this._time += dt;
                let ratio = 1.0;
                if (this._duration > 0) {
                  ratio = this._time / this._duration;
                }
                if (ratio >= 1) {
                  ratio = 1;
                }
                if (this._transition === Transition.COLOR) {
                  const renderComp = target._uiProps.uiComp;
                  Color.lerp(_tempColor$1, this._fromColor, this._toColor, ratio);
                  if (renderComp) {
                    renderComp.color = _tempColor$1;
                  }
                } else if (this.transition === Transition.SCALE) {
                  target.getScale(this._targetScale);
                  this._targetScale.x = lerp(this._fromScale.x, this._toScale.x, ratio);
                  this._targetScale.y = lerp(this._fromScale.y, this._toScale.y, ratio);
                  target.setScale(this._targetScale);
                }
                if (ratio === 1) {
                  this._transitionFinished = true;
                }
              }
              _resizeNodeToTargetNode() {
                if (!this.target) {
                  return;
                }
                this.target._uiProps.uiTransformComp;
              }
              _resetState() {
                this._pressed = false;
                this._hovered = false;
                const target = this.target;
                if (!target) {
                  return;
                }
                const transition = this._transition;
                if (transition === Transition.COLOR && this._interactable) {
                  const renderComp = target.getComponent(UIRenderer);
                  if (renderComp) {
                    renderComp.color = this._normalColor;
                  }
                } else if (transition === Transition.SCALE && this._originalScale) {
                  target.setScale(this._originalScale);
                }
                this._transitionFinished = true;
              }
              _registerNodeEvent() {
                this.node.on(NodeEventType.TOUCH_START, this._onTouchBegan, this);
                this.node.on(NodeEventType.TOUCH_MOVE, this._onTouchMove, this);
                this.node.on(NodeEventType.TOUCH_END, this._onTouchEnded, this);
                this.node.on(NodeEventType.TOUCH_CANCEL, this._onTouchCancel, this);
                this.node.on(NodeEventType.MOUSE_ENTER, this._onMouseMoveIn, this);
                this.node.on(NodeEventType.MOUSE_LEAVE, this._onMouseMoveOut, this);
                this.node.on(XrUIPressEventType.XRUI_HOVER_ENTERED, this._xrHoverEnter, this);
                this.node.on(XrUIPressEventType.XRUI_HOVER_EXITED, this._xrHoverExit, this);
                this.node.on(XrUIPressEventType.XRUI_CLICK, this._xrClick, this);
                this.node.on(XrUIPressEventType.XRUI_UNCLICK, this._xrUnClick, this);
              }
              _registerTargetEvent(target) {
                target.on(NodeEventType.TRANSFORM_CHANGED, this._onTargetTransformChanged, this);
              }
              _unregisterNodeEvent() {
                this.node.off(NodeEventType.TOUCH_START, this._onTouchBegan, this);
                this.node.off(NodeEventType.TOUCH_MOVE, this._onTouchMove, this);
                this.node.off(NodeEventType.TOUCH_END, this._onTouchEnded, this);
                this.node.off(NodeEventType.TOUCH_CANCEL, this._onTouchCancel, this);
                this.node.off(NodeEventType.MOUSE_ENTER, this._onMouseMoveIn, this);
                this.node.off(NodeEventType.MOUSE_LEAVE, this._onMouseMoveOut, this);
                this.node.off(XrUIPressEventType.XRUI_HOVER_ENTERED, this._xrHoverEnter, this);
                this.node.off(XrUIPressEventType.XRUI_HOVER_EXITED, this._xrHoverExit, this);
                this.node.off(XrUIPressEventType.XRUI_CLICK, this._xrClick, this);
                this.node.off(XrUIPressEventType.XRUI_UNCLICK, this._xrUnClick, this);
              }
              _unregisterTargetEvent(target) {
                target.off(NodeEventType.TRANSFORM_CHANGED);
              }
              _getTargetSprite(target) {
                let sprite = null;
                if (target) {
                  sprite = target.getComponent(Sprite);
                }
                return sprite;
              }
              _applyTarget() {
                if (this.target) {
                  this._sprite = this._getTargetSprite(this.target);
                  if (!this._originalScale) {
                    this._originalScale = new Vec3();
                  }
                  Vec3.copy(this._originalScale, this.target.getScale());
                  this._registerTargetEvent(this.target);
                }
              }
              _onTargetSpriteFrameChanged(comp) {
                if (this._transition === Transition.SPRITE) {
                  this._setCurrentStateSpriteFrame(comp.spriteFrame);
                }
              }
              _setCurrentStateSpriteFrame(spriteFrame) {
                if (!spriteFrame) {
                  return;
                }
                switch (this._getButtonState()) {
                  case State.NORMAL:
                    this._normalSprite = spriteFrame;
                    break;
                  case State.HOVER:
                    this._hoverSprite = spriteFrame;
                    break;
                  case State.PRESSED:
                    this._pressedSprite = spriteFrame;
                    break;
                  case State.DISABLED:
                    this._disabledSprite = spriteFrame;
                    break;
                }
              }
              _onTargetColorChanged(color) {
                if (this._transition === Transition.COLOR) {
                  this._setCurrentStateColor(color);
                }
              }
              _setCurrentStateColor(color) {
                switch (this._getButtonState()) {
                  case State.NORMAL:
                    this._normalColor = color;
                    break;
                  case State.HOVER:
                    this._hoverColor = color;
                    break;
                  case State.PRESSED:
                    this._pressedColor = color;
                    break;
                  case State.DISABLED:
                    this._disabledColor = color;
                    break;
                }
              }
              _onTargetTransformChanged(transformBit) {
                if (transformBit & TransformBit.SCALE && this._originalScale && this._transition === Transition.SCALE && this._transitionFinished) {
                  Vec3.copy(this._originalScale, this.target.getScale());
                }
              }
              _onTouchBegan(event) {
                if (!this._interactable || !this.enabledInHierarchy) {
                  return;
                }
                this._pressed = true;
                this._updateState();
                if (event) {
                  event.propagationStopped = true;
                }
              }
              _onTouchMove(event) {
                if (!this._interactable || !this.enabledInHierarchy || !this._pressed) {
                  return;
                }
                if (!event) {
                  return;
                }
                const touch = event.touch;
                if (!touch) {
                  return;
                }
                const hit = this.node._uiProps.uiTransformComp.hitTest(touch.getLocation(), event.windowId);
                if (this._transition === Transition.SCALE && this.target && this._originalScale) {
                  if (hit) {
                    Vec3.copy(this._fromScale, this._originalScale);
                    Vec3.multiplyScalar(this._toScale, this._originalScale, this._zoomScale);
                    this._transitionFinished = false;
                  } else {
                    this._time = 0;
                    this._transitionFinished = true;
                    this.target.setScale(this._originalScale);
                  }
                } else {
                  let state;
                  if (hit) {
                    state = State.PRESSED;
                  } else {
                    state = State.NORMAL;
                  }
                  this._applyTransition(state);
                }
                if (event) {
                  event.propagationStopped = true;
                }
              }
              _onTouchEnded(event) {
                if (!this._interactable || !this.enabledInHierarchy) {
                  return;
                }
                if (this._pressed) {
                  EventHandler.emitEvents(this.clickEvents, event);
                  this.node.emit(EventType$4.CLICK, this);
                }
                this._pressed = false;
                this._updateState();
                if (event) {
                  event.propagationStopped = true;
                }
              }
              _onTouchCancel(event) {
                if (!this._interactable || !this.enabledInHierarchy) {
                  return;
                }
                this._pressed = false;
                this._updateState();
              }
              _onMouseMoveIn(event) {
                if (this._pressed || !this.interactable || !this.enabledInHierarchy) {
                  return;
                }
                if (this._transition === Transition.SPRITE && !this._hoverSprite) {
                  return;
                }
                if (!this._hovered) {
                  this._hovered = true;
                  this._updateState();
                }
              }
              _onMouseMoveOut(event) {
                if (this._hovered) {
                  this._hovered = false;
                  this._updateState();
                }
              }
              _updateState() {
                const state = this._getButtonState();
                this._applyTransition(state);
              }
              _getButtonState() {
                let state = State.NORMAL;
                if (!this._interactable) {
                  state = State.DISABLED;
                } else if (this._pressed) {
                  state = State.PRESSED;
                } else if (this._hovered) {
                  state = State.HOVER;
                }
                return state.toString();
              }
              _updateColorTransition(state) {
                var _this$target;
                const color = this[`${state}Color`];
                const renderComp = (_this$target = this.target) === null || _this$target === void 0 ? void 0 : _this$target.getComponent(UIRenderer);
                if (!renderComp) {
                  return;
                }
                if (state === State.DISABLED.toString()) {
                  renderComp.color = color;
                } else {
                  this._fromColor = renderComp.color.clone();
                  this._toColor = color;
                  this._time = 0;
                  this._transitionFinished = false;
                }
              }
              _updateSpriteTransition(state) {
                const sprite = this[`${state}Sprite`];
                if (this._sprite && sprite) {
                  this._sprite.spriteFrame = sprite;
                }
              }
              _updateScaleTransition(state) {
                if (!this._interactable) {
                  return;
                }
                if (state === State.PRESSED.toString()) {
                  this._zoomUp();
                } else {
                  this._zoomBack();
                }
              }
              _zoomUp() {
                if (!this._originalScale) {
                  return;
                }
                Vec3.copy(this._fromScale, this._originalScale);
                Vec3.multiplyScalar(this._toScale, this._originalScale, this._zoomScale);
                this._time = 0;
                this._transitionFinished = false;
              }
              _zoomBack() {
                if (!this.target || !this._originalScale) {
                  return;
                }
                Vec3.copy(this._fromScale, this.target.getScale());
                Vec3.copy(this._toScale, this._originalScale);
                this._time = 0;
                this._transitionFinished = false;
              }
              _applyTransition(state) {
                const transition = this._transition;
                if (transition === Transition.COLOR) {
                  this._updateColorTransition(state);
                } else if (transition === Transition.SPRITE) {
                  this._updateSpriteTransition(state);
                } else if (transition === Transition.SCALE) {
                  this._updateScaleTransition(state);
                }
              }
              _xrHoverEnter() {
                this._onMouseMoveIn();
                this._updateState();
              }
              _xrHoverExit() {
                this._onMouseMoveOut();
                if (this._pressed) {
                  this._pressed = false;
                  this._updateState();
                }
              }
              _xrClick() {
                if (!this._interactable || !this.enabledInHierarchy) {
                  return;
                }
                this._pressed = true;
                this._updateState();
              }
              _xrUnClick() {
                if (!this._interactable || !this.enabledInHierarchy) {
                  return;
                }
                if (this._pressed) {
                  EventHandler.emitEvents(this.clickEvents, this);
                  this.node.emit(EventType$4.CLICK, this);
                }
                this._pressed = false;
                this._updateState();
              }
            }, _class3$a.Transition = Transition, _class3$a.EventType = EventType$4, _class3$a), (_applyDecoratedDescriptor(_class2$d.prototype, "target", [_dec4$b], Object.getOwnPropertyDescriptor(_class2$d.prototype, "target"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "transition", [_dec5$b], Object.getOwnPropertyDescriptor(_class2$d.prototype, "transition"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "normalSprite", [_dec6$5], Object.getOwnPropertyDescriptor(_class2$d.prototype, "normalSprite"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "pressedSprite", [_dec7$4], Object.getOwnPropertyDescriptor(_class2$d.prototype, "pressedSprite"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "hoverSprite", [_dec8$3], Object.getOwnPropertyDescriptor(_class2$d.prototype, "hoverSprite"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "disabledSprite", [_dec9$3], Object.getOwnPropertyDescriptor(_class2$d.prototype, "disabledSprite"), _class2$d.prototype), _initializer$d = applyDecoratedInitializer(_class2$d.prototype, "clickEvents", [_dec10$1, serializable], function () {
              return [];
            }), _initializer2$d = applyDecoratedInitializer(_class2$d.prototype, "_interactable", [serializable], function () {
              return true;
            }), _initializer3$b = applyDecoratedInitializer(_class2$d.prototype, "_transition", [serializable], function () {
              return Transition.NONE;
            }), _initializer4$a = applyDecoratedInitializer(_class2$d.prototype, "_normalColor", [serializable], function () {
              return Color.WHITE.clone();
            }), _initializer5$8 = applyDecoratedInitializer(_class2$d.prototype, "_hoverColor", [serializable], function () {
              return new Color(211, 211, 211, 255);
            }), _initializer6$5 = applyDecoratedInitializer(_class2$d.prototype, "_pressedColor", [serializable], function () {
              return Color.WHITE.clone();
            }), _initializer7$5 = applyDecoratedInitializer(_class2$d.prototype, "_disabledColor", [serializable], function () {
              return new Color(124, 124, 124, 255);
            }), _initializer8$5 = applyDecoratedInitializer(_class2$d.prototype, "_normalSprite", [serializable], function () {
              return null;
            }), _initializer9$5 = applyDecoratedInitializer(_class2$d.prototype, "_hoverSprite", [serializable], function () {
              return null;
            }), _initializer10$5 = applyDecoratedInitializer(_class2$d.prototype, "_pressedSprite", [serializable], function () {
              return null;
            }), _initializer11$5 = applyDecoratedInitializer(_class2$d.prototype, "_disabledSprite", [serializable], function () {
              return null;
            }), _initializer12$4 = applyDecoratedInitializer(_class2$d.prototype, "_duration", [serializable], function () {
              return 0.1;
            }), _initializer13$3 = applyDecoratedInitializer(_class2$d.prototype, "_zoomScale", [serializable], function () {
              return 1.2;
            }), _initializer14$2 = applyDecoratedInitializer(_class2$d.prototype, "_target", [serializable], function () {
              return null;
            })), _class2$d)) || _class$h) || _class$h) || _class$h); exports({ Button: Button, ButtonComponent: Button });
            legacyCC.Button = Button;

            class tabIndexUtil {
              static add(editBoxImpl) {
                const list = this._tabIndexList;
                const index = list.indexOf(editBoxImpl);
                if (index === -1) {
                  list.push(editBoxImpl);
                }
              }
              static remove(editBoxImpl) {
                const list = this._tabIndexList;
                const index = list.indexOf(editBoxImpl);
                if (index !== -1) {
                  list.splice(index, 1);
                }
              }
              static resort() {
                this._tabIndexList.sort((a, b) => a._delegate.tabIndex - b._delegate.tabIndex);
              }
              static next(editBoxImpl) {
                const list = this._tabIndexList;
                const index = list.indexOf(editBoxImpl);
                editBoxImpl.setFocus(false);
                if (index !== -1) {
                  const nextImpl = list[index + 1];
                  if (nextImpl && nextImpl._delegate.tabIndex >= 0) {
                    nextImpl.setFocus(true);
                  }
                }
              }
            }
            tabIndexUtil._tabIndexList = [];

            let KeyboardReturnType;
            (function (KeyboardReturnType) {
              KeyboardReturnType[KeyboardReturnType["DEFAULT"] = 0] = "DEFAULT";
              KeyboardReturnType[KeyboardReturnType["DONE"] = 1] = "DONE";
              KeyboardReturnType[KeyboardReturnType["SEND"] = 2] = "SEND";
              KeyboardReturnType[KeyboardReturnType["SEARCH"] = 3] = "SEARCH";
              KeyboardReturnType[KeyboardReturnType["GO"] = 4] = "GO";
              KeyboardReturnType[KeyboardReturnType["NEXT"] = 5] = "NEXT";
            })(KeyboardReturnType || (KeyboardReturnType = {}));
            Enum(KeyboardReturnType);
            let InputMode;
            (function (InputMode) {
              InputMode[InputMode["ANY"] = 0] = "ANY";
              InputMode[InputMode["EMAIL_ADDR"] = 1] = "EMAIL_ADDR";
              InputMode[InputMode["NUMERIC"] = 2] = "NUMERIC";
              InputMode[InputMode["PHONE_NUMBER"] = 3] = "PHONE_NUMBER";
              InputMode[InputMode["URL"] = 4] = "URL";
              InputMode[InputMode["DECIMAL"] = 5] = "DECIMAL";
              InputMode[InputMode["SINGLE_LINE"] = 6] = "SINGLE_LINE";
            })(InputMode || (InputMode = {}));
            Enum(InputMode);
            let InputFlag;
            (function (InputFlag) {
              InputFlag[InputFlag["PASSWORD"] = 0] = "PASSWORD";
              InputFlag[InputFlag["SENSITIVE"] = 1] = "SENSITIVE";
              InputFlag[InputFlag["INITIAL_CAPS_WORD"] = 2] = "INITIAL_CAPS_WORD";
              InputFlag[InputFlag["INITIAL_CAPS_SENTENCE"] = 3] = "INITIAL_CAPS_SENTENCE";
              InputFlag[InputFlag["INITIAL_CAPS_ALL_CHARACTERS"] = 4] = "INITIAL_CAPS_ALL_CHARACTERS";
              InputFlag[InputFlag["DEFAULT"] = 5] = "DEFAULT";
            })(InputFlag || (InputFlag = {}));
            Enum(InputFlag);

            class EditBoxImplBase {
              constructor() {
                this._editing = false;
                this._delegate = null;
              }
              init(delegate) {}
              onEnable() {}
              beforeDraw() {}
              onDisable() {
                if (this._editing) {
                  this.endEditing();
                }
              }
              clear() {
                this._delegate = null;
              }
              setTabIndex(index) {}
              setSize(width, height) {}
              setFocus(value) {
                if (value) {
                  this.beginEditing();
                } else {
                  this.endEditing();
                }
              }
              isFocused() {
                return this._editing;
              }
              beginEditing() {}
              endEditing() {}
            }

            const ccdocument = ccwindow.document;
            const SCROLLY = 40;
            const LEFT_PADDING$1 = 2;
            const DELAY_TIME = 400;
            const _matrix = new Mat4();
            const _matrix_temp = new Mat4();
            const _vec3 = new Vec3();
            let _currentEditBoxImpl = null;
            let _domCount = 0;
            class EditBoxImpl extends EditBoxImplBase {
              constructor(...args) {
                super(...args);
                this._delegate = null;
                this._inputMode = -1;
                this._inputFlag = -1;
                this._returnType = -1;
                this.__eventListeners = {};
                this.__autoResize = false;
                this.__orientationChanged = void 0;
                this._edTxt = null;
                this._isTextArea = false;
                this._textLabelFont = null;
                this._textLabelFontSize = null;
                this._textLabelFontColor = null;
                this._textLabelAlign = null;
                this._placeholderLabelFont = null;
                this._placeholderLabelFontSize = null;
                this._placeholderLabelFontColor = null;
                this._placeholderLabelAlign = null;
                this._placeholderLineHeight = null;
                this._placeholderStyleSheet = null;
                this._domId = `EditBoxId_${++_domCount}`;
                this._forceUpdate = false;
              }
              init(delegate) {
                if (!delegate) {
                  return;
                }
                this._delegate = delegate;
                if (delegate.inputMode === InputMode.ANY) {
                  this._createTextArea();
                } else {
                  this._createInput();
                }
                tabIndexUtil.add(this);
                this.setTabIndex(delegate.tabIndex);
                this._initStyleSheet();
                this._registerEventListeners();
                this._addDomToGameContainer();
                View.instance.on('canvas-resize', this._resize, this);
                screenAdapter.on('window-resize', this._resize, this);
              }
              clear() {
                View.instance.off('canvas-resize', this._resize, this);
                screenAdapter.off('window-resize', this._resize, this);
                this._removeEventListeners();
                this._removeDomFromGameContainer();
                tabIndexUtil.remove(this);
                if (_currentEditBoxImpl === this) {
                  _currentEditBoxImpl = null;
                }
                this._delegate = null;
              }
              _resize() {
                this._forceUpdate = true;
              }
              beforeDraw() {
                const node = this._delegate.node;
                if (!node.hasChangedFlags && !this._forceUpdate) {
                  return;
                }
                this._forceUpdate = false;
                this._updateMatrix();
              }
              setTabIndex(index) {
                this._edTxt.tabIndex = index;
                tabIndexUtil.resort();
              }
              setSize(width, height) {
                const elem = this._edTxt;
                if (elem) {
                  elem.style.width = `${width}px`;
                  elem.style.height = `${height}px`;
                }
              }
              beginEditing() {
                if (_currentEditBoxImpl && _currentEditBoxImpl !== this) {
                  _currentEditBoxImpl.setFocus(false);
                }
                this._editing = true;
                _currentEditBoxImpl = this;
                this._delegate._editBoxEditingDidBegan();
                this._showDom();
                this._edTxt.focus();
              }
              endEditing() {
                this._edTxt.blur();
              }
              _createInput() {
                this._isTextArea = false;
                this._edTxt = ccdocument.createElement('input');
              }
              _createTextArea() {
                this._isTextArea = true;
                this._edTxt = ccdocument.createElement('textarea');
              }
              _addDomToGameContainer() {
                if (game.container && this._edTxt) {
                  game.container.appendChild(this._edTxt);
                  ccdocument.head.appendChild(this._placeholderStyleSheet);
                }
              }
              _removeDomFromGameContainer() {
                const hasElem = contains(game.container, this._edTxt);
                if (hasElem && this._edTxt) {
                  game.container.removeChild(this._edTxt);
                }
                const hasStyleSheet = contains(ccdocument.head, this._placeholderStyleSheet);
                if (hasStyleSheet) {
                  ccdocument.head.removeChild(this._placeholderStyleSheet);
                }
                this._edTxt = null;
                this._placeholderStyleSheet = null;
              }
              _showDom() {
                this._updateMaxLength();
                this._updateInputType();
                this._updateStyleSheet();
                if (this._edTxt && this._delegate) {
                  this._edTxt.style.display = '';
                  this._delegate._hideLabels();
                }
                if (sys.isMobile) {
                  this._showDomOnMobile();
                }
              }
              _hideDom() {
                const elem = this._edTxt;
                if (elem && this._delegate) {
                  elem.style.display = 'none';
                  this._delegate._showLabels();
                }
                if (sys.isMobile) {
                  this._hideDomOnMobile();
                }
              }
              _showDomOnMobile() {
                if (sys.os !== OS.ANDROID && sys.os !== OS.OHOS) {
                  return;
                }
                screenAdapter.handleResizeEvent = false;
                this._adjustWindowScroll();
              }
              _hideDomOnMobile() {
                if (sys.os === OS.ANDROID || sys.os === OS.OHOS) {
                  screenAdapter.handleResizeEvent = true;
                }
                this._scrollBackWindow();
              }
              _isElementInViewport() {
                if (this._edTxt) {
                  const rect = this._edTxt.getBoundingClientRect();
                  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (ccwindow.innerHeight || ccdocument.documentElement.clientHeight) && rect.right <= (ccwindow.innerWidth || ccdocument.documentElement.clientWidth);
                }
                return false;
              }
              _adjustWindowScroll() {
                setTimeout(() => {
                  if (ccwindow.scrollY < SCROLLY && !this._isElementInViewport()) {
                    this._edTxt.scrollIntoView({
                      block: 'start',
                      inline: 'nearest',
                      behavior: 'smooth'
                    });
                  }
                }, DELAY_TIME);
              }
              _scrollBackWindow() {
                setTimeout(() => {
                  if (sys.browserType === BrowserType.WECHAT && sys.os === OS.IOS) {
                    if (ccwindow.top) {
                      ccwindow.top.scrollTo(0, 0);
                    }
                    return;
                  }
                  ccwindow.scrollTo(0, 0);
                }, DELAY_TIME);
              }
              _updateMatrix() {
                if (!this._edTxt) {
                  return;
                }
                const node = this._delegate.node;
                let scaleX = view.getScaleX();
                let scaleY = view.getScaleY();
                const viewport = view.getViewportRect();
                const dpr = screenAdapter.devicePixelRatio;
                node.getWorldMatrix(_matrix);
                const transform = node._uiProps.uiTransformComp;
                if (transform) {
                  Vec3.set(_vec3, -transform.anchorX * transform.width, -transform.anchorY * transform.height, _vec3.z);
                  Mat4.transform(_matrix, _matrix, _vec3);
                }
                if (!node._uiProps.uiTransformComp) {
                  return;
                }
                const camera = director.root.batcher2D.getFirstRenderCamera(node);
                if (!camera) return;
                camera.node.getWorldRT(_matrix_temp);
                const m12 = _matrix_temp.m12;
                const m13 = _matrix_temp.m13;
                const center = visibleRect.center;
                _matrix_temp.m12 = center.x - (_matrix_temp.m00 * m12 + _matrix_temp.m04 * m13);
                _matrix_temp.m13 = center.y - (_matrix_temp.m01 * m12 + _matrix_temp.m05 * m13);
                scaleX /= dpr;
                scaleY /= dpr;
                Vec3.set(_vec3, scaleX, scaleY, 1);
                Mat4.scale(_matrix_temp, _matrix_temp, _vec3);
                const container = game.container;
                let offsetX = parseInt(container && container.style.paddingLeft || '0');
                offsetX += viewport.x / dpr;
                let offsetY = parseInt(container && container.style.paddingBottom || '0');
                offsetY += viewport.y / dpr;
                _matrix_temp.m12 += offsetX;
                _matrix_temp.m13 += offsetY;
                Mat4.multiply(_matrix_temp, _matrix_temp, _matrix);
                const a = _matrix_temp.m00;
                const b = _matrix_temp.m01;
                const c = _matrix_temp.m04;
                const d = _matrix_temp.m05;
                const tx = _matrix_temp.m12;
                const ty = _matrix_temp.m13;
                const matrix = `matrix(${a},${-b},${-c},${d},${tx},${-ty})`;
                this._edTxt.style.transform = matrix;
                this._edTxt.style['-webkit-transform'] = matrix;
                this._edTxt.style['transform-origin'] = '0px 100% 0px';
                this._edTxt.style['-webkit-transform-origin'] = '0px 100% 0px';
              }
              _updateInputType() {
                const delegate = this._delegate;
                const inputMode = delegate.inputMode;
                const inputFlag = delegate.inputFlag;
                const returnType = delegate.returnType;
                let elem = this._edTxt;
                if (this._inputMode === inputMode && this._inputFlag === inputFlag && this._returnType === returnType) {
                  return;
                }
                this._inputMode = inputMode;
                this._inputFlag = inputFlag;
                this._returnType = returnType;
                if (this._isTextArea) {
                  let transform = 'none';
                  if (inputFlag === InputFlag.INITIAL_CAPS_ALL_CHARACTERS) {
                    transform = 'uppercase';
                  } else if (inputFlag === InputFlag.INITIAL_CAPS_WORD) {
                    transform = 'capitalize';
                  }
                  elem.style.textTransform = transform;
                  return;
                }
                elem = elem;
                if (inputFlag === InputFlag.PASSWORD) {
                  elem.type = 'password';
                  elem.style.textTransform = 'none';
                  return;
                }
                let type = elem.type;
                if (inputMode === InputMode.EMAIL_ADDR) {
                  type = 'email';
                } else if (inputMode === InputMode.NUMERIC) {
                  type = 'number';
                } else if (inputMode === InputMode.DECIMAL) {
                  type = 'digit';
                } else if (inputMode === InputMode.PHONE_NUMBER) {
                  type = 'tel';
                  elem.addEventListener('wheel', () => false);
                } else if (inputMode === InputMode.URL) {
                  type = 'url';
                } else {
                  type = 'text';
                  if (returnType === KeyboardReturnType.SEARCH) {
                    type = 'search';
                  }
                }
                elem.type = type;
                let textTransform = 'none';
                if (inputFlag === InputFlag.INITIAL_CAPS_ALL_CHARACTERS) {
                  textTransform = 'uppercase';
                } else if (inputFlag === InputFlag.INITIAL_CAPS_WORD) {
                  textTransform = 'capitalize';
                }
                elem.style.textTransform = textTransform;
              }
              _updateMaxLength() {
                let maxLength = this._delegate.maxLength;
                if (maxLength < 0) {
                  maxLength = 65535;
                }
                this._edTxt.maxLength = maxLength;
              }
              _initStyleSheet() {
                if (!this._edTxt) {
                  return;
                }
                let elem = this._edTxt;
                elem.style.color = '#000000';
                elem.style.border = '0px';
                elem.style.background = 'transparent';
                elem.style.width = '100%';
                elem.style.height = '100%';
                elem.style.outline = 'medium';
                elem.style.padding = '0';
                elem.style.textTransform = 'none';
                elem.style.display = 'none';
                elem.style.position = 'absolute';
                elem.style.bottom = '0px';
                elem.style.left = `${LEFT_PADDING$1}px`;
                elem.className = 'cocosEditBox';
                elem.style.fontFamily = 'Arial';
                elem.id = this._domId;
                if (!this._isTextArea) {
                  elem = elem;
                  elem.type = 'text';
                  elem.style['-moz-appearance'] = 'textfield';
                } else {
                  elem.style.resize = 'none';
                  elem.style.overflowY = 'scroll';
                }
                this._placeholderStyleSheet = ccdocument.createElement('style');
              }
              _updateStyleSheet() {
                const delegate = this._delegate;
                const elem = this._edTxt;
                if (elem && delegate) {
                  elem.value = delegate.string;
                  this._updateTextLabel(delegate.textLabel);
                }
              }
              _updateTextLabel(textLabel) {
                if (!textLabel) {
                  return;
                }
                let font = textLabel.font;
                if (font && !(font instanceof BitmapFont)) {
                  font = font._fontFamily;
                } else {
                  font = textLabel.fontFamily;
                }
                const fontSize = textLabel.fontSize * textLabel.node.scale.y;
                if (this._textLabelFont === font && this._textLabelFontSize === fontSize && this._textLabelFontColor === textLabel.fontColor && this._textLabelAlign === textLabel.horizontalAlign) {
                  return;
                }
                this._textLabelFont = font;
                this._textLabelFontSize = fontSize;
                this._textLabelFontColor = textLabel.fontColor;
                this._textLabelAlign = textLabel.horizontalAlign;
                if (!this._edTxt) {
                  return;
                }
                const elem = this._edTxt;
                elem.style.fontSize = `${fontSize}px`;
                elem.style.color = textLabel.color.toCSS();
                elem.style.fontFamily = font;
                switch (textLabel.horizontalAlign) {
                  case Label.HorizontalAlign.LEFT:
                    elem.style.textAlign = 'left';
                    break;
                  case Label.HorizontalAlign.CENTER:
                    elem.style.textAlign = 'center';
                    break;
                  case Label.HorizontalAlign.RIGHT:
                    elem.style.textAlign = 'right';
                    break;
                }
              }
              _updatePlaceholderLabel(placeholderLabel) {
                if (!placeholderLabel) {
                  return;
                }
                let font = placeholderLabel.font;
                if (font && !(font instanceof BitmapFont)) {
                  font = placeholderLabel.font._fontFamily;
                } else {
                  font = placeholderLabel.fontFamily;
                }
                const fontSize = placeholderLabel.fontSize * placeholderLabel.node.scale.y;
                if (this._placeholderLabelFont === font && this._placeholderLabelFontSize === fontSize && this._placeholderLabelFontColor === placeholderLabel.fontColor && this._placeholderLabelAlign === placeholderLabel.horizontalAlign && this._placeholderLineHeight === placeholderLabel.fontSize) {
                  return;
                }
                this._placeholderLabelFont = font;
                this._placeholderLabelFontSize = fontSize;
                this._placeholderLabelFontColor = placeholderLabel.fontColor;
                this._placeholderLabelAlign = placeholderLabel.horizontalAlign;
                this._placeholderLineHeight = placeholderLabel.fontSize;
                const styleEl = this._placeholderStyleSheet;
                const fontColor = placeholderLabel.color.toCSS();
                const lineHeight = placeholderLabel.fontSize;
                let horizontalAlign = '';
                switch (placeholderLabel.horizontalAlign) {
                  case Label.HorizontalAlign.LEFT:
                    horizontalAlign = 'left';
                    break;
                  case Label.HorizontalAlign.CENTER:
                    horizontalAlign = 'center';
                    break;
                  case Label.HorizontalAlign.RIGHT:
                    horizontalAlign = 'right';
                    break;
                }
                styleEl.innerHTML = `#${this._domId}::-webkit-input-placeholder{text-transform: initial;-family: ${font};font-size: ${fontSize}px;color: ${fontColor};line-height: ${lineHeight}px;text-align: ${horizontalAlign};}` + `#${this._domId}::-moz-placeholder{text-transform: initial;-family: ${font};font-size: ${fontSize}px;color: ${fontColor};line-height: ${lineHeight}px;text-align: ${horizontalAlign};}` + `#${this._domId}::-ms-input-placeholder{text-transform: initial;-family: ${font};font-size: ${fontSize}px;color: ${fontColor};line-height: ${lineHeight}px;text-align: ${horizontalAlign};}`;
                if (sys.browserType === BrowserType.EDGE) {
                  styleEl.innerHTML += `#${this._domId}::-ms-clear{display: none;}`;
                }
              }
              _registerEventListeners() {
                if (!this._edTxt) {
                  return;
                }
                const elem = this._edTxt;
                let inputLock = false;
                const cbs = this.__eventListeners;
                cbs.compositionStart = () => {
                  inputLock = true;
                };
                cbs.compositionEnd = () => {
                  inputLock = false;
                  this._delegate._editBoxTextChanged(elem.value);
                };
                cbs.onInput = () => {
                  if (inputLock) {
                    return;
                  }
                  const delegate = this._delegate;
                  const maxLength = delegate.maxLength;
                  if (maxLength >= 0) {
                    elem.value = elem.value.slice(0, maxLength);
                  }
                  delegate._editBoxTextChanged(elem.value);
                };
                cbs.onClick = () => {
                  if (this._editing) {
                    if (sys.isMobile) {
                      this._adjustWindowScroll();
                    }
                  }
                };
                cbs.onKeydown = e => {
                  if (e.keyCode === KeyCode.ENTER) {
                    e.propagationStopped = true;
                    this._delegate._editBoxEditingReturn();
                    if (!this._isTextArea) {
                      elem.blur();
                    }
                  } else if (e.keyCode === KeyCode.TAB) {
                    e.propagationStopped = true;
                    e.preventDefault();
                    tabIndexUtil.next(this);
                  }
                };
                cbs.onBlur = () => {
                  if (sys.isMobile && inputLock) {
                    cbs.compositionEnd();
                  }
                  this._editing = false;
                  _currentEditBoxImpl = null;
                  this._hideDom();
                  this._delegate._editBoxEditingDidEnded();
                };
                elem.addEventListener('compositionstart', cbs.compositionStart);
                elem.addEventListener('compositionend', cbs.compositionEnd);
                elem.addEventListener('input', cbs.onInput);
                elem.addEventListener('keydown', cbs.onKeydown);
                elem.addEventListener('blur', cbs.onBlur);
                elem.addEventListener('touchstart', cbs.onClick);
              }
              _removeEventListeners() {
                if (!this._edTxt) {
                  return;
                }
                const elem = this._edTxt;
                const cbs = this.__eventListeners;
                elem.removeEventListener('compositionstart', cbs.compositionStart);
                elem.removeEventListener('compositionend', cbs.compositionEnd);
                elem.removeEventListener('input', cbs.onInput);
                elem.removeEventListener('keydown', cbs.onKeydown);
                elem.removeEventListener('blur', cbs.onBlur);
                elem.removeEventListener('touchstart', cbs.onClick);
                cbs.compositionStart = null;
                cbs.compositionEnd = null;
                cbs.onInput = null;
                cbs.onKeydown = null;
                cbs.onBlur = null;
                cbs.onClick = null;
              }
            }

            var _dec$g, _dec2$e, _dec3$d, _dec4$a, _dec5$a, _dec6$4, _dec7$3, _dec8$2, _dec9$2, _dec10, _dec11, _dec12, _dec13, _class$g, _class2$c, _initializer$c, _initializer2$c, _initializer3$a, _initializer4$9, _initializer5$7, _initializer6$4, _initializer7$4, _initializer8$4, _initializer9$4, _initializer10$4, _initializer11$4, _initializer12$3, _initializer13$2, _class3$9;
            const LEFT_PADDING = 2;
            function capitalize(str) {
              return str.replace(/(?:^|\s)\S/g, a => a.toUpperCase());
            }
            function capitalizeFirstLetter(str) {
              return str.charAt(0).toUpperCase() + str.slice(1);
            }
            var EventType$3;
            (function (EventType) {
              EventType["EDITING_DID_BEGAN"] = "editing-did-began";
              EventType["EDITING_DID_ENDED"] = "editing-did-ended";
              EventType["TEXT_CHANGED"] = "text-changed";
              EventType["EDITING_RETURN"] = "editing-return";
              EventType["XR_EDITING_DID_BEGAN"] = "xr-editing-did-began";
              EventType["XR_EDITING_DID_ENDED"] = "xr-editing-did-ended";
            })(EventType$3 || (EventType$3 = {}));
            let EditBox = (_dec$g = ccclass('cc.EditBox'), _dec2$e = executionOrder(110), _dec3$d = requireComponent(UITransform), _dec4$a = type(Label), _dec5$a = type(Label), _dec6$4 = type(SpriteFrame), _dec7$3 = type(InputFlag), _dec8$2 = type(InputMode), _dec9$2 = type(KeyboardReturnType), _dec10 = type([EventHandler]), _dec11 = type([EventHandler]), _dec12 = type([EventHandler]), _dec13 = type([EventHandler]), _dec$g(_class$g = _dec2$e(_class$g = _dec3$d(_class$g = (_class2$c = (_class3$9 = class EditBox extends Component {
              constructor(...args) {
                super(...args);
                this.editingDidBegan = _initializer$c && _initializer$c();
                this.textChanged = _initializer2$c && _initializer2$c();
                this.editingDidEnded = _initializer3$a && _initializer3$a();
                this.editingReturn = _initializer4$9 && _initializer4$9();
                this._impl = null;
                this._background = null;
                this._textLabel = _initializer5$7 && _initializer5$7();
                this._placeholderLabel = _initializer6$4 && _initializer6$4();
                this._returnType = _initializer7$4 && _initializer7$4();
                this._string = _initializer8$4 && _initializer8$4();
                this._tabIndex = _initializer9$4 && _initializer9$4();
                this._backgroundImage = _initializer10$4 && _initializer10$4();
                this._inputFlag = _initializer11$4 && _initializer11$4();
                this._inputMode = _initializer12$3 && _initializer12$3();
                this._maxLength = _initializer13$2 && _initializer13$2();
                this._isLabelVisible = false;
              }
              get string() {
                return this._string;
              }
              set string(value) {
                if (this._maxLength >= 0 && value.length >= this._maxLength) {
                  value = value.slice(0, this._maxLength);
                }
                if (this._string === value) {
                  return;
                }
                this._string = value;
                this._updateString(value);
              }
              get placeholder() {
                if (!this._placeholderLabel) {
                  return '';
                }
                return this._placeholderLabel.string;
              }
              set placeholder(value) {
                if (this._placeholderLabel) {
                  this._placeholderLabel.string = value;
                }
              }
              get textLabel() {
                return this._textLabel;
              }
              set textLabel(oldValue) {
                if (this._textLabel !== oldValue) {
                  this._textLabel = oldValue;
                  if (this._textLabel) {
                    this._updateTextLabel();
                    this._updateLabels();
                  }
                }
              }
              get placeholderLabel() {
                return this._placeholderLabel;
              }
              set placeholderLabel(oldValue) {
                if (this._placeholderLabel !== oldValue) {
                  this._placeholderLabel = oldValue;
                  if (this._placeholderLabel) {
                    this._updatePlaceholderLabel();
                    this._updateLabels();
                  }
                }
              }
              get backgroundImage() {
                return this._backgroundImage;
              }
              set backgroundImage(value) {
                if (this._backgroundImage === value) {
                  return;
                }
                this._backgroundImage = value;
                this._ensureBackgroundSprite();
                this._background.spriteFrame = value;
              }
              get inputFlag() {
                return this._inputFlag;
              }
              set inputFlag(value) {
                if (this._inputFlag === value) {
                  return;
                }
                this._inputFlag = value;
                this._updateString(this._string);
              }
              get inputMode() {
                return this._inputMode;
              }
              set inputMode(oldValue) {
                if (this._inputMode !== oldValue) {
                  this._inputMode = oldValue;
                  this._updateTextLabel();
                  this._updatePlaceholderLabel();
                }
              }
              get returnType() {
                return this._returnType;
              }
              set returnType(value) {
                this._returnType = value;
              }
              get maxLength() {
                return this._maxLength;
              }
              set maxLength(value) {
                this._maxLength = value;
              }
              get tabIndex() {
                return this._tabIndex;
              }
              set tabIndex(value) {
                if (this._tabIndex !== value) {
                  this._tabIndex = value;
                  if (this._impl) {
                    this._impl.setTabIndex(value);
                  }
                }
              }
              __preload() {
                this._init();
              }
              onEnable() {
                {
                  this._registerEvent();
                }
                this._ensureBackgroundSprite();
                if (this._impl) {
                  this._impl.onEnable();
                }
              }
              _beforeDraw() {
                if (this._impl) {
                  this._impl.beforeDraw();
                }
              }
              onDisable() {
                {
                  this._unregisterEvent();
                }
                this._unregisterBackgroundEvent();
                if (this._impl) {
                  this._impl.onDisable();
                }
              }
              onDestroy() {
                director.off(Director.EVENT_BEFORE_DRAW, this._beforeDraw, this);
                if (this._impl) {
                  this._impl.clear();
                }
              }
              setFocus() {
                if (this._impl) {
                  this._impl.setFocus(true);
                }
              }
              focus() {
                if (this._impl) {
                  this._impl.setFocus(true);
                }
              }
              blur() {
                if (this._impl) {
                  this._impl.setFocus(false);
                }
              }
              isFocused() {
                if (this._impl) {
                  return this._impl.isFocused();
                }
                return false;
              }
              _editBoxEditingDidBegan() {
                EventHandler.emitEvents(this.editingDidBegan, this);
                this.node.emit(EventType$3.EDITING_DID_BEGAN, this);
              }
              _editBoxEditingDidEnded(text) {
                EventHandler.emitEvents(this.editingDidEnded, this);
                this.node.emit(EventType$3.EDITING_DID_ENDED, this, text);
              }
              _editBoxTextChanged(text) {
                text = this._updateLabelStringStyle(text, true);
                this.string = text;
                EventHandler.emitEvents(this.textChanged, text, this);
                this.node.emit(EventType$3.TEXT_CHANGED, this);
              }
              _editBoxEditingReturn(text) {
                EventHandler.emitEvents(this.editingReturn, this);
                this.node.emit(EventType$3.EDITING_RETURN, this, text);
              }
              _showLabels() {
                this._isLabelVisible = true;
                this._updateLabels();
              }
              _hideLabels() {
                this._isLabelVisible = false;
                if (this._textLabel) {
                  this._textLabel.node.active = false;
                }
                if (this._placeholderLabel) {
                  this._placeholderLabel.node.active = false;
                }
              }
              _onTouchBegan(event) {
                event.propagationStopped = true;
              }
              _onTouchCancel(event) {
                event.propagationStopped = true;
              }
              _onTouchEnded(event) {
                if (this._impl) {
                  this._impl.beginEditing();
                }
                event.propagationStopped = true;
              }
              _init() {
                this._updatePlaceholderLabel();
                this._updateTextLabel();
                this._isLabelVisible = true;
                this.node.on(NodeEventType.SIZE_CHANGED, this._resizeChildNodes, this);
                director.on(Director.EVENT_BEFORE_DRAW, this._beforeDraw, this);
                const impl = this._impl = new EditBox._EditBoxImpl();
                impl.init(this);
                this._updateString(this._string);
                this._syncSize();
              }
              _ensureBackgroundSprite() {
                if (!this._background) {
                  let background = this.node.getComponent(Sprite);
                  if (!background) {
                    background = this.node.addComponent(Sprite);
                  }
                  if (background !== this._background) {
                    background.type = Sprite.Type.SLICED;
                    background.spriteFrame = this._backgroundImage;
                    this._background = background;
                    this._registerBackgroundEvent();
                  }
                }
              }
              _updateTextLabel() {
                let textLabel = this._textLabel;
                if (!textLabel) {
                  let node = this.node.getChildByName('TEXT_LABEL');
                  if (!node) {
                    node = new Node('TEXT_LABEL');
                    node.layer = this.node.layer;
                  }
                  textLabel = node.getComponent(Label);
                  if (!textLabel) {
                    textLabel = node.addComponent(Label);
                  }
                  node.parent = this.node;
                  this._textLabel = textLabel;
                }
                if (this._inputMode === InputMode.ANY) {
                  textLabel.verticalAlign = VerticalTextAlignment.TOP;
                  textLabel.enableWrapText = true;
                } else {
                  textLabel.enableWrapText = false;
                }
                textLabel.string = this._updateLabelStringStyle(this._string);
              }
              _updatePlaceholderLabel() {
                let placeholderLabel = this._placeholderLabel;
                if (!placeholderLabel) {
                  let node = this.node.getChildByName('PLACEHOLDER_LABEL');
                  if (!node) {
                    node = new Node('PLACEHOLDER_LABEL');
                    node.layer = this.node.layer;
                  }
                  placeholderLabel = node.getComponent(Label);
                  if (!placeholderLabel) {
                    placeholderLabel = node.addComponent(Label);
                  }
                  node.parent = this.node;
                  this._placeholderLabel = placeholderLabel;
                }
                if (this._inputMode === InputMode.ANY) {
                  placeholderLabel.enableWrapText = true;
                } else {
                  placeholderLabel.enableWrapText = false;
                }
                placeholderLabel.string = this.placeholder;
              }
              _syncSize() {
                const trans = this.node._uiProps.uiTransformComp;
                const size = trans.contentSize;
                if (this._background) {
                  const bgTrans = this._background.node._uiProps.uiTransformComp;
                  bgTrans.anchorPoint = trans.anchorPoint;
                  bgTrans.setContentSize(size);
                }
                this._updateLabelPosition(size);
                if (this._impl) {
                  this._impl.setSize(size.width, size.height);
                }
              }
              _updateLabels() {
                if (this._isLabelVisible) {
                  const content = this._string;
                  if (this._textLabel) {
                    this._textLabel.node.active = content !== '';
                  }
                  if (this._placeholderLabel) {
                    this._placeholderLabel.node.active = content === '';
                  }
                }
              }
              _updateString(text) {
                const textLabel = this._textLabel;
                if (!textLabel) {
                  return;
                }
                let displayText = text;
                if (displayText) {
                  displayText = this._updateLabelStringStyle(displayText);
                }
                textLabel.string = displayText;
                this._updateLabels();
              }
              _updateLabelStringStyle(text, ignorePassword = false) {
                const inputFlag = this._inputFlag;
                if (!ignorePassword && inputFlag === InputFlag.PASSWORD) {
                  let passwordString = '';
                  const len = text.length;
                  for (let i = 0; i < len; ++i) {
                    passwordString += '\u25CF';
                  }
                  text = passwordString;
                } else if (inputFlag === InputFlag.INITIAL_CAPS_ALL_CHARACTERS) {
                  text = text.toUpperCase();
                } else if (inputFlag === InputFlag.INITIAL_CAPS_WORD) {
                  text = capitalize(text);
                } else if (inputFlag === InputFlag.INITIAL_CAPS_SENTENCE) {
                  text = capitalizeFirstLetter(text);
                }
                return text;
              }
              _registerEvent() {
                this.node.on(NodeEventType.TOUCH_START, this._onTouchBegan, this);
                this.node.on(NodeEventType.TOUCH_END, this._onTouchEnded, this);
                this.node.on(XrUIPressEventType.XRUI_UNCLICK, this._xrUnClick, this);
                this.node.on(XrKeyboardEventType.XR_KEYBOARD_INPUT, this._xrKeyBoardInput, this);
              }
              _unregisterEvent() {
                this.node.off(NodeEventType.TOUCH_START, this._onTouchBegan, this);
                this.node.off(NodeEventType.TOUCH_END, this._onTouchEnded, this);
                this.node.off(XrUIPressEventType.XRUI_UNCLICK, this._xrUnClick, this);
                this.node.off(XrKeyboardEventType.XR_KEYBOARD_INPUT, this._xrKeyBoardInput, this);
              }
              _onBackgroundSpriteFrameChanged() {
                if (!this._background) {
                  return;
                }
                this.backgroundImage = this._background.spriteFrame;
              }
              _registerBackgroundEvent() {
                const node = this._background && this._background.node;
                node === null || node === void 0 ? void 0 : node.on(Sprite.EventType.SPRITE_FRAME_CHANGED, this._onBackgroundSpriteFrameChanged, this);
              }
              _unregisterBackgroundEvent() {
                const node = this._background && this._background.node;
                node === null || node === void 0 ? void 0 : node.off(Sprite.EventType.SPRITE_FRAME_CHANGED, this._onBackgroundSpriteFrameChanged, this);
              }
              _updateLabelPosition(size) {
                const trans = this.node._uiProps.uiTransformComp;
                const offX = -trans.anchorX * trans.width;
                const offY = -trans.anchorY * trans.height;
                const placeholderLabel = this._placeholderLabel;
                const textLabel = this._textLabel;
                if (textLabel) {
                  textLabel.node._uiProps.uiTransformComp.setContentSize(size.width - LEFT_PADDING, size.height);
                  textLabel.node.setPosition(offX + LEFT_PADDING, offY + size.height, textLabel.node.position.z);
                  if (this._inputMode === InputMode.ANY) {
                    textLabel.verticalAlign = VerticalTextAlignment.TOP;
                  }
                  textLabel.enableWrapText = this._inputMode === InputMode.ANY;
                }
                if (placeholderLabel) {
                  placeholderLabel.node._uiProps.uiTransformComp.setContentSize(size.width - LEFT_PADDING, size.height);
                  placeholderLabel.node.setPosition(offX + LEFT_PADDING, offY + size.height, placeholderLabel.node.position.z);
                  placeholderLabel.enableWrapText = this._inputMode === InputMode.ANY;
                }
              }
              _resizeChildNodes() {
                const trans = this.node._uiProps.uiTransformComp;
                const textLabelNode = this._textLabel && this._textLabel.node;
                if (textLabelNode) {
                  textLabelNode.setPosition(-trans.width / 2, trans.height / 2, textLabelNode.position.z);
                  textLabelNode._uiProps.uiTransformComp.setContentSize(trans.contentSize);
                }
                const placeholderLabelNode = this._placeholderLabel && this._placeholderLabel.node;
                if (placeholderLabelNode) {
                  placeholderLabelNode.setPosition(-trans.width / 2, trans.height / 2, placeholderLabelNode.position.z);
                  placeholderLabelNode._uiProps.uiTransformComp.setContentSize(trans.contentSize);
                }
                const backgroundNode = this._background && this._background.node;
                if (backgroundNode) {
                  backgroundNode._uiProps.uiTransformComp.setContentSize(trans.contentSize);
                }
                this._syncSize();
              }
              _xrUnClick() {
                this.node.emit(EventType$3.XR_EDITING_DID_BEGAN, this._maxLength, this.string);
              }
              _xrKeyBoardInput(str) {
                this.string = str;
              }
            }, _class3$9._EditBoxImpl = EditBoxImplBase, _class3$9.KeyboardReturnType = KeyboardReturnType, _class3$9.InputFlag = InputFlag, _class3$9.InputMode = InputMode, _class3$9.EventType = EventType$3, _class3$9), (_applyDecoratedDescriptor(_class2$c.prototype, "textLabel", [_dec4$a], Object.getOwnPropertyDescriptor(_class2$c.prototype, "textLabel"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "placeholderLabel", [_dec5$a], Object.getOwnPropertyDescriptor(_class2$c.prototype, "placeholderLabel"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "backgroundImage", [_dec6$4], Object.getOwnPropertyDescriptor(_class2$c.prototype, "backgroundImage"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "inputFlag", [_dec7$3], Object.getOwnPropertyDescriptor(_class2$c.prototype, "inputFlag"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "inputMode", [_dec8$2], Object.getOwnPropertyDescriptor(_class2$c.prototype, "inputMode"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "returnType", [_dec9$2], Object.getOwnPropertyDescriptor(_class2$c.prototype, "returnType"), _class2$c.prototype), _initializer$c = applyDecoratedInitializer(_class2$c.prototype, "editingDidBegan", [_dec10, serializable], function () {
              return [];
            }), _initializer2$c = applyDecoratedInitializer(_class2$c.prototype, "textChanged", [_dec11, serializable], function () {
              return [];
            }), _initializer3$a = applyDecoratedInitializer(_class2$c.prototype, "editingDidEnded", [_dec12, serializable], function () {
              return [];
            }), _initializer4$9 = applyDecoratedInitializer(_class2$c.prototype, "editingReturn", [_dec13, serializable], function () {
              return [];
            }), _initializer5$7 = applyDecoratedInitializer(_class2$c.prototype, "_textLabel", [serializable], function () {
              return null;
            }), _initializer6$4 = applyDecoratedInitializer(_class2$c.prototype, "_placeholderLabel", [serializable], function () {
              return null;
            }), _initializer7$4 = applyDecoratedInitializer(_class2$c.prototype, "_returnType", [serializable], function () {
              return KeyboardReturnType.DEFAULT;
            }), _initializer8$4 = applyDecoratedInitializer(_class2$c.prototype, "_string", [serializable], function () {
              return '';
            }), _initializer9$4 = applyDecoratedInitializer(_class2$c.prototype, "_tabIndex", [serializable], function () {
              return 0;
            }), _initializer10$4 = applyDecoratedInitializer(_class2$c.prototype, "_backgroundImage", [serializable], function () {
              return null;
            }), _initializer11$4 = applyDecoratedInitializer(_class2$c.prototype, "_inputFlag", [serializable], function () {
              return InputFlag.DEFAULT;
            }), _initializer12$3 = applyDecoratedInitializer(_class2$c.prototype, "_inputMode", [serializable], function () {
              return InputMode.ANY;
            }), _initializer13$2 = applyDecoratedInitializer(_class2$c.prototype, "_maxLength", [serializable], function () {
              return 20;
            })), _class2$c)) || _class$g) || _class$g) || _class$g); exports({ EditBox: EditBox, EditBoxComponent: EditBox });
            if (typeof window === 'object' && typeof document === 'object' && !MINIGAME && !JSB && !RUNTIME_BASED) {
              EditBox._EditBoxImpl = EditBoxImpl;
            }
            legacyCC.internal.EditBox = EditBox;

            var _dec$f, _dec2$d, _dec3$c, _dec4$9, _dec5$9, _dec6$3, _dec7$2, _dec8$1, _dec9$1, _class$f, _class2$b, _initializer$b, _initializer2$b, _initializer3$9, _initializer4$8, _initializer5$6, _initializer6$3, _initializer7$3, _initializer8$3, _initializer9$3, _initializer10$3, _initializer11$3, _initializer12$2, _initializer13$1, _initializer14$1, _initializer15$1, _initializer16$1, _class3$8;
            var Type;
            (function (Type) {
              Type[Type["NONE"] = 0] = "NONE";
              Type[Type["HORIZONTAL"] = 1] = "HORIZONTAL";
              Type[Type["VERTICAL"] = 2] = "VERTICAL";
              Type[Type["GRID"] = 3] = "GRID";
            })(Type || (Type = {}));
            ccenum(Type);
            var ResizeMode;
            (function (ResizeMode) {
              ResizeMode[ResizeMode["NONE"] = 0] = "NONE";
              ResizeMode[ResizeMode["CONTAINER"] = 1] = "CONTAINER";
              ResizeMode[ResizeMode["CHILDREN"] = 2] = "CHILDREN";
            })(ResizeMode || (ResizeMode = {}));
            ccenum(ResizeMode);
            var AxisDirection;
            (function (AxisDirection) {
              AxisDirection[AxisDirection["HORIZONTAL"] = 0] = "HORIZONTAL";
              AxisDirection[AxisDirection["VERTICAL"] = 1] = "VERTICAL";
            })(AxisDirection || (AxisDirection = {}));
            ccenum(AxisDirection);
            var VerticalDirection;
            (function (VerticalDirection) {
              VerticalDirection[VerticalDirection["BOTTOM_TO_TOP"] = 0] = "BOTTOM_TO_TOP";
              VerticalDirection[VerticalDirection["TOP_TO_BOTTOM"] = 1] = "TOP_TO_BOTTOM";
            })(VerticalDirection || (VerticalDirection = {}));
            ccenum(VerticalDirection);
            var HorizontalDirection;
            (function (HorizontalDirection) {
              HorizontalDirection[HorizontalDirection["LEFT_TO_RIGHT"] = 0] = "LEFT_TO_RIGHT";
              HorizontalDirection[HorizontalDirection["RIGHT_TO_LEFT"] = 1] = "RIGHT_TO_LEFT";
            })(HorizontalDirection || (HorizontalDirection = {}));
            ccenum(HorizontalDirection);
            var Constraint;
            (function (Constraint) {
              Constraint[Constraint["NONE"] = 0] = "NONE";
              Constraint[Constraint["FIXED_ROW"] = 1] = "FIXED_ROW";
              Constraint[Constraint["FIXED_COL"] = 2] = "FIXED_COL";
            })(Constraint || (Constraint = {}));
            ccenum(Constraint);
            const _tempVec3$2 = new Vec3();
            let Layout = (_dec$f = ccclass('cc.Layout'), _dec2$d = executionOrder(110), _dec3$c = requireComponent(UITransform), _dec4$9 = type(Type), _dec5$9 = type(ResizeMode), _dec6$3 = type(AxisDirection), _dec7$2 = type(VerticalDirection), _dec8$1 = type(HorizontalDirection), _dec9$1 = type(Constraint), _dec$f(_class$f = _dec2$d(_class$f = _dec3$c(_class$f = (_class2$b = (_class3$8 = class Layout extends Component {
              constructor(...args) {
                super(...args);
                this._resizeMode = _initializer$b && _initializer$b();
                this._layoutType = _initializer2$b && _initializer2$b();
                this._cellSize = _initializer3$9 && _initializer3$9();
                this._startAxis = _initializer4$8 && _initializer4$8();
                this._paddingLeft = _initializer5$6 && _initializer5$6();
                this._paddingRight = _initializer6$3 && _initializer6$3();
                this._paddingTop = _initializer7$3 && _initializer7$3();
                this._paddingBottom = _initializer8$3 && _initializer8$3();
                this._spacingX = _initializer9$3 && _initializer9$3();
                this._spacingY = _initializer10$3 && _initializer10$3();
                this._verticalDirection = _initializer11$3 && _initializer11$3();
                this._horizontalDirection = _initializer12$2 && _initializer12$2();
                this._constraint = _initializer13$1 && _initializer13$1();
                this._constraintNum = _initializer14$1 && _initializer14$1();
                this._affectedByScale = _initializer15$1 && _initializer15$1();
                this._isAlign = _initializer16$1 && _initializer16$1();
                this._layoutSize = new Size(300, 200);
                this._layoutDirty = true;
                this._childrenDirty = false;
                this._usefulLayoutObj = [];
                this._init = false;
              }
              get alignHorizontal() {
                return this._isAlign;
              }
              set alignHorizontal(value) {
                if (this._layoutType !== Type.HORIZONTAL) {
                  return;
                }
                this._isAlign = value;
                this._doLayoutDirty();
              }
              get alignVertical() {
                return this._isAlign;
              }
              set alignVertical(value) {
                if (this._layoutType !== Type.VERTICAL) {
                  return;
                }
                this._isAlign = value;
                this._doLayoutDirty();
              }
              get type() {
                return this._layoutType;
              }
              set type(value) {
                this._layoutType = value;
                this._doLayoutDirty();
              }
              get resizeMode() {
                return this._resizeMode;
              }
              set resizeMode(value) {
                if (this._layoutType === Type.NONE) {
                  return;
                }
                this._resizeMode = value;
                this._doLayoutDirty();
              }
              get cellSize() {
                return this._cellSize;
              }
              set cellSize(value) {
                if (this._cellSize === value) {
                  return;
                }
                this._cellSize.set(value);
                this._doLayoutDirty();
              }
              get startAxis() {
                return this._startAxis;
              }
              set startAxis(value) {
                if (this._startAxis === value) {
                  return;
                }
                this._startAxis = value;
                this._doLayoutDirty();
              }
              get paddingLeft() {
                return this._paddingLeft;
              }
              set paddingLeft(value) {
                if (this._paddingLeft === value) {
                  return;
                }
                this._paddingLeft = value;
                this._doLayoutDirty();
              }
              get paddingRight() {
                return this._paddingRight;
              }
              set paddingRight(value) {
                if (this._paddingRight === value) {
                  return;
                }
                this._paddingRight = value;
                this._doLayoutDirty();
              }
              get paddingTop() {
                return this._paddingTop;
              }
              set paddingTop(value) {
                if (this._paddingTop === value) {
                  return;
                }
                this._paddingTop = value;
                this._doLayoutDirty();
              }
              get paddingBottom() {
                return this._paddingBottom;
              }
              set paddingBottom(value) {
                if (this._paddingBottom === value) {
                  return;
                }
                this._paddingBottom = value;
                this._doLayoutDirty();
              }
              get spacingX() {
                return this._spacingX;
              }
              set spacingX(value) {
                if (this._spacingX === value) {
                  return;
                }
                this._spacingX = value;
                this._doLayoutDirty();
              }
              get spacingY() {
                return this._spacingY;
              }
              set spacingY(value) {
                if (this._spacingY === value) {
                  return;
                }
                this._spacingY = value;
                this._doLayoutDirty();
              }
              get verticalDirection() {
                return this._verticalDirection;
              }
              set verticalDirection(value) {
                if (this._verticalDirection === value) {
                  return;
                }
                this._verticalDirection = value;
                this._doLayoutDirty();
              }
              get horizontalDirection() {
                return this._horizontalDirection;
              }
              set horizontalDirection(value) {
                if (this._horizontalDirection === value) {
                  return;
                }
                this._horizontalDirection = value;
                this._doLayoutDirty();
              }
              get padding() {
                return this._paddingLeft;
              }
              set padding(value) {
                if (this.paddingLeft !== value || this._paddingRight !== value || this._paddingTop !== value || this._paddingBottom !== value) {
                  this._paddingLeft = this._paddingRight = this._paddingTop = this._paddingBottom = value;
                  this._doLayoutDirty();
                }
              }
              get constraint() {
                return this._constraint;
              }
              set constraint(value) {
                if (this._layoutType === Type.NONE || this._constraint === value) {
                  return;
                }
                this._constraint = value;
                this._doLayoutDirty();
              }
              get constraintNum() {
                return this._constraintNum;
              }
              set constraintNum(value) {
                if (this._constraint === Constraint.NONE || this._constraintNum === value) {
                  return;
                }
                if (value <= 0) {
                  warn('Limit values to be greater than 0');
                }
                this._constraintNum = value;
                this._doLayoutDirty();
              }
              get affectedByScale() {
                return this._affectedByScale;
              }
              set affectedByScale(value) {
                this._affectedByScale = value;
                this._doLayoutDirty();
              }
              updateLayout(force = false) {
                if (this._layoutDirty || force) {
                  this._doLayout();
                  this._layoutDirty = false;
                }
              }
              onEnable() {
                this._addEventListeners();
                const trans = this.node._uiProps.uiTransformComp;
                if (trans.contentSize.equals(Size.ZERO)) {
                  trans.setContentSize(this._layoutSize);
                }
                this._childrenChanged();
              }
              onDisable() {
                this._usefulLayoutObj.length = 0;
                this._removeEventListeners();
              }
              _checkUsefulObj() {
                this._usefulLayoutObj.length = 0;
                const children = this.node.children;
                for (let i = 0; i < children.length; ++i) {
                  const child = children[i];
                  const uiTrans = child._uiProps.uiTransformComp;
                  if (child.activeInHierarchy && uiTrans) {
                    this._usefulLayoutObj.push(uiTrans);
                  }
                }
              }
              _addEventListeners() {
                director.on(Director.EVENT_AFTER_UPDATE, this.updateLayout, this);
                this.node.on(NodeEventType.SIZE_CHANGED, this._resized, this);
                this.node.on(NodeEventType.ANCHOR_CHANGED, this._doLayoutDirty, this);
                this.node.on(NodeEventType.CHILD_ADDED, this._childAdded, this);
                this.node.on(NodeEventType.CHILD_REMOVED, this._childRemoved, this);
                this.node.on(NodeEventType.CHILDREN_ORDER_CHANGED, this._childrenChanged, this);
                this.node.on('childrenSiblingOrderChanged', this.updateLayout, this);
                this._addChildrenEventListeners();
              }
              _removeEventListeners() {
                director.off(Director.EVENT_AFTER_UPDATE, this.updateLayout, this);
                this.node.off(NodeEventType.SIZE_CHANGED, this._resized, this);
                this.node.off(NodeEventType.ANCHOR_CHANGED, this._doLayoutDirty, this);
                this.node.off(NodeEventType.CHILD_ADDED, this._childAdded, this);
                this.node.off(NodeEventType.CHILD_REMOVED, this._childRemoved, this);
                this.node.off(NodeEventType.CHILDREN_ORDER_CHANGED, this._childrenChanged, this);
                this.node.off('childrenSiblingOrderChanged', this.updateLayout, this);
                this._removeChildrenEventListeners();
              }
              _addChildrenEventListeners() {
                const children = this.node.children;
                for (let i = 0; i < children.length; ++i) {
                  const child = children[i];
                  child.on(NodeEventType.SIZE_CHANGED, this._doLayoutDirty, this);
                  child.on(NodeEventType.TRANSFORM_CHANGED, this._transformDirty, this);
                  child.on(NodeEventType.ANCHOR_CHANGED, this._doLayoutDirty, this);
                  child.on(NodeEventType.ACTIVE_IN_HIERARCHY_CHANGED, this._childrenChanged, this);
                }
              }
              _removeChildrenEventListeners() {
                const children = this.node.children;
                for (let i = 0; i < children.length; ++i) {
                  const child = children[i];
                  child.off(NodeEventType.SIZE_CHANGED, this._doLayoutDirty, this);
                  child.off(NodeEventType.TRANSFORM_CHANGED, this._transformDirty, this);
                  child.off(NodeEventType.ANCHOR_CHANGED, this._doLayoutDirty, this);
                  child.off(NodeEventType.ACTIVE_IN_HIERARCHY_CHANGED, this._childrenChanged, this);
                }
              }
              _childAdded(child) {
                child.on(NodeEventType.SIZE_CHANGED, this._doLayoutDirty, this);
                child.on(NodeEventType.TRANSFORM_CHANGED, this._transformDirty, this);
                child.on(NodeEventType.ANCHOR_CHANGED, this._doLayoutDirty, this);
                child.on(NodeEventType.ACTIVE_IN_HIERARCHY_CHANGED, this._childrenChanged, this);
                this._childrenChanged();
              }
              _childRemoved(child) {
                child.off(NodeEventType.SIZE_CHANGED, this._doLayoutDirty, this);
                child.off(NodeEventType.TRANSFORM_CHANGED, this._transformDirty, this);
                child.off(NodeEventType.ANCHOR_CHANGED, this._doLayoutDirty, this);
                child.off(NodeEventType.ACTIVE_IN_HIERARCHY_CHANGED, this._childrenChanged, this);
                this._childrenChanged();
              }
              _resized() {
                this._layoutSize.set(this.node._uiProps.uiTransformComp.contentSize);
                this._doLayoutDirty();
              }
              _doLayoutHorizontally(baseWidth, rowBreak, fnPositionY, applyChildren) {
                const trans = this.node._uiProps.uiTransformComp;
                const layoutAnchor = trans.anchorPoint;
                const limit = this._getFixedBreakingNum();
                let sign = 1;
                let paddingX = this._paddingLeft;
                if (this._horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
                  sign = -1;
                  paddingX = this._paddingRight;
                }
                const startPos = (this._horizontalDirection - layoutAnchor.x) * baseWidth + sign * paddingX;
                let nextX = startPos - sign * this._spacingX;
                let totalHeight = 0;
                let rowMaxHeight = 0;
                let tempMaxHeight = 0;
                let maxHeight = 0;
                let isBreak = false;
                const activeChildCount = this._usefulLayoutObj.length;
                let newChildWidth = this._cellSize.width;
                const paddingH = this._getPaddingH();
                if (this._layoutType !== Type.GRID && this._resizeMode === ResizeMode.CHILDREN) {
                  newChildWidth = (baseWidth - paddingH - (activeChildCount - 1) * this._spacingX) / activeChildCount;
                }
                const children = this._usefulLayoutObj;
                for (let i = 0; i < children.length; ++i) {
                  const childTrans = children[i];
                  const child = childTrans.node;
                  const scale = child.scale;
                  const childScaleX = this._getUsedScaleValue(scale.x);
                  const childScaleY = this._getUsedScaleValue(scale.y);
                  if (this._resizeMode === ResizeMode.CHILDREN) {
                    childTrans.width = newChildWidth / childScaleX;
                    if (this._layoutType === Type.GRID) {
                      childTrans.height = this._cellSize.height / childScaleY;
                    }
                  }
                  const anchorX = Math.abs(this._horizontalDirection - childTrans.anchorX);
                  const childBoundingBoxWidth = childTrans.width * childScaleX;
                  const childBoundingBoxHeight = childTrans.height * childScaleY;
                  if (childBoundingBoxHeight > tempMaxHeight) {
                    maxHeight = Math.max(tempMaxHeight, maxHeight);
                    rowMaxHeight = tempMaxHeight || childBoundingBoxHeight;
                    tempMaxHeight = childBoundingBoxHeight;
                  }
                  nextX += sign * (anchorX * childBoundingBoxWidth + this._spacingX);
                  const rightBoundaryOfChild = sign * (1 - anchorX) * childBoundingBoxWidth;
                  if (rowBreak) {
                    if (limit > 0) {
                      isBreak = i / limit > 0 && i % limit === 0;
                      if (isBreak) {
                        rowMaxHeight = tempMaxHeight > childBoundingBoxHeight ? tempMaxHeight : rowMaxHeight;
                      }
                    } else if (childBoundingBoxWidth > baseWidth - paddingH) {
                      if (nextX > startPos + sign * (anchorX * childBoundingBoxWidth)) {
                        isBreak = true;
                      }
                    } else {
                      const boundary = (1 - this._horizontalDirection - layoutAnchor.x) * baseWidth;
                      const rowBreakBoundary = nextX + rightBoundaryOfChild + sign * (sign > 0 ? this._paddingRight : this._paddingLeft);
                      isBreak = Math.abs(rowBreakBoundary) > Math.abs(boundary);
                    }
                    if (isBreak) {
                      nextX = startPos + sign * (anchorX * childBoundingBoxWidth);
                      if (childBoundingBoxHeight !== tempMaxHeight) {
                        rowMaxHeight = tempMaxHeight;
                      }
                      totalHeight += rowMaxHeight + this._spacingY;
                      rowMaxHeight = tempMaxHeight = childBoundingBoxHeight;
                    }
                  }
                  const finalPositionY = fnPositionY(child, childTrans, totalHeight);
                  if (applyChildren) {
                    child.setPosition(nextX, finalPositionY);
                  }
                  nextX += rightBoundaryOfChild;
                }
                rowMaxHeight = Math.max(rowMaxHeight, tempMaxHeight);
                const containerResizeBoundary = Math.max(maxHeight, totalHeight + rowMaxHeight) + this._getPaddingV();
                return containerResizeBoundary;
              }
              _doLayoutVertically(baseHeight, columnBreak, fnPositionX, applyChildren) {
                const trans = this.node._uiProps.uiTransformComp;
                const layoutAnchor = trans.anchorPoint;
                const limit = this._getFixedBreakingNum();
                let sign = 1;
                let paddingY = this._paddingBottom;
                if (this._verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
                  sign = -1;
                  paddingY = this._paddingTop;
                }
                const startPos = (this._verticalDirection - layoutAnchor.y) * baseHeight + sign * paddingY;
                let nextY = startPos - sign * this._spacingY;
                let tempMaxWidth = 0;
                let maxWidth = 0;
                let colMaxWidth = 0;
                let totalWidth = 0;
                let isBreak = false;
                const activeChildCount = this._usefulLayoutObj.length;
                let newChildHeight = this._cellSize.height;
                const paddingV = this._getPaddingV();
                if (this._layoutType !== Type.GRID && this._resizeMode === ResizeMode.CHILDREN) {
                  newChildHeight = (baseHeight - paddingV - (activeChildCount - 1) * this._spacingY) / activeChildCount;
                }
                const children = this._usefulLayoutObj;
                for (let i = 0; i < children.length; ++i) {
                  const childTrans = children[i];
                  const child = childTrans.node;
                  const scale = child.scale;
                  const childScaleX = this._getUsedScaleValue(scale.x);
                  const childScaleY = this._getUsedScaleValue(scale.y);
                  if (this._resizeMode === ResizeMode.CHILDREN) {
                    childTrans.height = newChildHeight / childScaleY;
                    if (this._layoutType === Type.GRID) {
                      childTrans.width = this._cellSize.width / childScaleX;
                    }
                  }
                  const anchorY = Math.abs(this._verticalDirection - childTrans.anchorY);
                  const childBoundingBoxWidth = childTrans.width * childScaleX;
                  const childBoundingBoxHeight = childTrans.height * childScaleY;
                  if (childBoundingBoxWidth > tempMaxWidth) {
                    maxWidth = Math.max(tempMaxWidth, maxWidth);
                    colMaxWidth = tempMaxWidth || childBoundingBoxWidth;
                    tempMaxWidth = childBoundingBoxWidth;
                  }
                  nextY += sign * (anchorY * childBoundingBoxHeight + this._spacingY);
                  const topBoundaryOfChild = sign * (1 - anchorY) * childBoundingBoxHeight;
                  if (columnBreak) {
                    if (limit > 0) {
                      isBreak = i / limit > 0 && i % limit === 0;
                      if (isBreak) {
                        colMaxWidth = tempMaxWidth > childBoundingBoxHeight ? tempMaxWidth : colMaxWidth;
                      }
                    } else if (childBoundingBoxHeight > baseHeight - paddingV) {
                      if (nextY > startPos + sign * (anchorY * childBoundingBoxHeight)) {
                        isBreak = true;
                      }
                    } else {
                      const boundary = (1 - this._verticalDirection - layoutAnchor.y) * baseHeight;
                      const columnBreakBoundary = nextY + topBoundaryOfChild + sign * (sign > 0 ? this._paddingTop : this._paddingBottom);
                      isBreak = Math.abs(columnBreakBoundary) > Math.abs(boundary);
                    }
                    if (isBreak) {
                      nextY = startPos + sign * (anchorY * childBoundingBoxHeight);
                      if (childBoundingBoxWidth !== tempMaxWidth) {
                        colMaxWidth = tempMaxWidth;
                      }
                      totalWidth += colMaxWidth + this._spacingX;
                      colMaxWidth = tempMaxWidth = childBoundingBoxWidth;
                    }
                  }
                  const finalPositionX = fnPositionX(child, childTrans, totalWidth);
                  if (applyChildren) {
                    child.getPosition(_tempVec3$2);
                    child.setPosition(finalPositionX, nextY, _tempVec3$2.z);
                  }
                  nextY += topBoundaryOfChild;
                }
                colMaxWidth = Math.max(colMaxWidth, tempMaxWidth);
                const containerResizeBoundary = Math.max(maxWidth, totalWidth + colMaxWidth) + this._getPaddingH();
                return containerResizeBoundary;
              }
              _doLayoutGridAxisHorizontal(layoutAnchor, layoutSize) {
                const baseWidth = layoutSize.width;
                let sign = 1;
                let bottomBoundaryOfLayout = -layoutAnchor.y * layoutSize.height;
                let paddingY = this._paddingBottom;
                if (this._verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
                  sign = -1;
                  bottomBoundaryOfLayout = (1 - layoutAnchor.y) * layoutSize.height;
                  paddingY = this._paddingTop;
                }
                const fnPositionY = (child, childTrans, topOffset) => bottomBoundaryOfLayout + sign * (topOffset + (1 - childTrans.anchorY) * childTrans.height * this._getUsedScaleValue(child.scale.y) + paddingY);
                let newHeight = 0;
                if (this._resizeMode === ResizeMode.CONTAINER) {
                  newHeight = this._doLayoutHorizontally(baseWidth, true, fnPositionY, false);
                  bottomBoundaryOfLayout = -layoutAnchor.y * newHeight;
                  if (this._verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
                    sign = -1;
                    bottomBoundaryOfLayout = (1 - layoutAnchor.y) * newHeight;
                  }
                }
                this._doLayoutHorizontally(baseWidth, true, fnPositionY, true);
                if (this._resizeMode === ResizeMode.CONTAINER) {
                  this.node._uiProps.uiTransformComp.setContentSize(baseWidth, newHeight);
                }
              }
              _doLayoutGridAxisVertical(layoutAnchor, layoutSize) {
                const baseHeight = layoutSize.height;
                let sign = 1;
                let leftBoundaryOfLayout = -layoutAnchor.x * layoutSize.width;
                let paddingX = this._paddingLeft;
                if (this._horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
                  sign = -1;
                  leftBoundaryOfLayout = (1 - layoutAnchor.x) * layoutSize.width;
                  paddingX = this._paddingRight;
                }
                const fnPositionX = (child, childTrans, leftOffset) => leftBoundaryOfLayout + sign * (leftOffset + (1 - childTrans.anchorX) * childTrans.width * this._getUsedScaleValue(child.scale.x) + paddingX);
                let newWidth = 0;
                if (this._resizeMode === ResizeMode.CONTAINER) {
                  newWidth = this._doLayoutVertically(baseHeight, true, fnPositionX, false);
                  leftBoundaryOfLayout = -layoutAnchor.x * newWidth;
                  if (this._horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
                    sign = -1;
                    leftBoundaryOfLayout = (1 - layoutAnchor.x) * newWidth;
                  }
                }
                this._doLayoutVertically(baseHeight, true, fnPositionX, true);
                if (this._resizeMode === ResizeMode.CONTAINER) {
                  this.node._uiProps.uiTransformComp.setContentSize(newWidth, baseHeight);
                }
              }
              _doLayoutGrid() {
                const trans = this.node._uiProps.uiTransformComp;
                const layoutAnchor = trans.anchorPoint;
                const layoutSize = trans.contentSize;
                if (this.startAxis === AxisDirection.HORIZONTAL) {
                  this._doLayoutGridAxisHorizontal(layoutAnchor, layoutSize);
                } else if (this.startAxis === AxisDirection.VERTICAL) {
                  this._doLayoutGridAxisVertical(layoutAnchor, layoutSize);
                }
              }
              _getHorizontalBaseWidth(horizontal = true) {
                const children = this._usefulLayoutObj;
                let baseSize = 0;
                const activeChildCount = children.length;
                if (this._resizeMode === ResizeMode.CONTAINER) {
                  for (let i = 0; i < children.length; ++i) {
                    const childTrans = children[i];
                    const child = childTrans.node;
                    const scale = child.scale;
                    baseSize += childTrans.width * this._getUsedScaleValue(scale.x);
                  }
                  baseSize += (activeChildCount - 1) * this._spacingX + this._getPaddingH();
                } else {
                  baseSize = this.node._uiProps.uiTransformComp.width;
                }
                return baseSize;
              }
              _getVerticalBaseHeight() {
                const children = this._usefulLayoutObj;
                let baseSize = 0;
                const activeChildCount = children.length;
                if (this._resizeMode === ResizeMode.CONTAINER) {
                  for (let i = 0; i < children.length; ++i) {
                    const childTrans = children[i];
                    const child = childTrans.node;
                    const scale = child.scale;
                    baseSize += childTrans.height * this._getUsedScaleValue(scale.y);
                  }
                  baseSize += (activeChildCount - 1) * this._spacingY + this._getPaddingV();
                } else {
                  baseSize = this.node._uiProps.uiTransformComp.height;
                }
                return baseSize;
              }
              _doLayout() {
                if (!this._init || this._childrenDirty) {
                  this._checkUsefulObj();
                  this._init = true;
                  this._childrenDirty = false;
                }
                if (this._layoutType === Type.HORIZONTAL) {
                  const newWidth = this._getHorizontalBaseWidth();
                  const fnPositionY = child => {
                    const pos = this._isAlign ? Vec3.ZERO : child.position;
                    return pos.y;
                  };
                  this._doLayoutHorizontally(newWidth, false, fnPositionY, true);
                  this.node._uiProps.uiTransformComp.width = newWidth;
                } else if (this._layoutType === Type.VERTICAL) {
                  const newHeight = this._getVerticalBaseHeight();
                  const fnPositionX = child => {
                    const pos = this._isAlign ? Vec3.ZERO : child.position;
                    return pos.x;
                  };
                  this._doLayoutVertically(newHeight, false, fnPositionX, true);
                  this.node._uiProps.uiTransformComp.height = newHeight;
                } else if (this._layoutType === Type.GRID) {
                  this._doLayoutGrid();
                }
              }
              _getUsedScaleValue(value) {
                return this._affectedByScale ? Math.abs(value) : 1;
              }
              _transformDirty(type) {
                if (!(type & TransformBit.SCALE) || !(type & TransformBit.POSITION) || !this._affectedByScale) {
                  return;
                }
                this._doLayoutDirty();
              }
              _doLayoutDirty() {
                this._layoutDirty = true;
              }
              _childrenChanged() {
                this._childrenDirty = true;
                this._doLayoutDirty();
              }
              _getPaddingH() {
                return this._paddingLeft + this._paddingRight;
              }
              _getPaddingV() {
                return this._paddingTop + this._paddingBottom;
              }
              _getFixedBreakingNum() {
                if (this._layoutType !== Type.GRID || this._constraint === Constraint.NONE || this._constraintNum <= 0) {
                  return 0;
                }
                let num = this._constraint === Constraint.FIXED_ROW ? Math.ceil(this._usefulLayoutObj.length / this._constraintNum) : this._constraintNum;
                if (this._startAxis === AxisDirection.VERTICAL) {
                  num = this._constraint === Constraint.FIXED_COL ? Math.ceil(this._usefulLayoutObj.length / this._constraintNum) : this._constraintNum;
                }
                return num;
              }
            }, _class3$8.Type = Type, _class3$8.VerticalDirection = VerticalDirection, _class3$8.HorizontalDirection = HorizontalDirection, _class3$8.ResizeMode = ResizeMode, _class3$8.AxisDirection = AxisDirection, _class3$8.Constraint = Constraint, _class3$8), (_applyDecoratedDescriptor(_class2$b.prototype, "type", [_dec4$9], Object.getOwnPropertyDescriptor(_class2$b.prototype, "type"), _class2$b.prototype), _applyDecoratedDescriptor(_class2$b.prototype, "resizeMode", [_dec5$9], Object.getOwnPropertyDescriptor(_class2$b.prototype, "resizeMode"), _class2$b.prototype), _applyDecoratedDescriptor(_class2$b.prototype, "startAxis", [_dec6$3], Object.getOwnPropertyDescriptor(_class2$b.prototype, "startAxis"), _class2$b.prototype), _applyDecoratedDescriptor(_class2$b.prototype, "verticalDirection", [_dec7$2], Object.getOwnPropertyDescriptor(_class2$b.prototype, "verticalDirection"), _class2$b.prototype), _applyDecoratedDescriptor(_class2$b.prototype, "horizontalDirection", [_dec8$1], Object.getOwnPropertyDescriptor(_class2$b.prototype, "horizontalDirection"), _class2$b.prototype), _applyDecoratedDescriptor(_class2$b.prototype, "constraint", [_dec9$1], Object.getOwnPropertyDescriptor(_class2$b.prototype, "constraint"), _class2$b.prototype), _initializer$b = applyDecoratedInitializer(_class2$b.prototype, "_resizeMode", [serializable], function () {
              return ResizeMode.NONE;
            }), _initializer2$b = applyDecoratedInitializer(_class2$b.prototype, "_layoutType", [serializable], function () {
              return Type.NONE;
            }), _initializer3$9 = applyDecoratedInitializer(_class2$b.prototype, "_cellSize", [serializable], function () {
              return new Size(40, 40);
            }), _initializer4$8 = applyDecoratedInitializer(_class2$b.prototype, "_startAxis", [serializable], function () {
              return AxisDirection.HORIZONTAL;
            }), _initializer5$6 = applyDecoratedInitializer(_class2$b.prototype, "_paddingLeft", [serializable], function () {
              return 0;
            }), _initializer6$3 = applyDecoratedInitializer(_class2$b.prototype, "_paddingRight", [serializable], function () {
              return 0;
            }), _initializer7$3 = applyDecoratedInitializer(_class2$b.prototype, "_paddingTop", [serializable], function () {
              return 0;
            }), _initializer8$3 = applyDecoratedInitializer(_class2$b.prototype, "_paddingBottom", [serializable], function () {
              return 0;
            }), _initializer9$3 = applyDecoratedInitializer(_class2$b.prototype, "_spacingX", [serializable], function () {
              return 0;
            }), _initializer10$3 = applyDecoratedInitializer(_class2$b.prototype, "_spacingY", [serializable], function () {
              return 0;
            }), _initializer11$3 = applyDecoratedInitializer(_class2$b.prototype, "_verticalDirection", [serializable], function () {
              return VerticalDirection.TOP_TO_BOTTOM;
            }), _initializer12$2 = applyDecoratedInitializer(_class2$b.prototype, "_horizontalDirection", [serializable], function () {
              return HorizontalDirection.LEFT_TO_RIGHT;
            }), _initializer13$1 = applyDecoratedInitializer(_class2$b.prototype, "_constraint", [serializable], function () {
              return Constraint.NONE;
            }), _initializer14$1 = applyDecoratedInitializer(_class2$b.prototype, "_constraintNum", [serializable], function () {
              return 2;
            }), _initializer15$1 = applyDecoratedInitializer(_class2$b.prototype, "_affectedByScale", [serializable], function () {
              return false;
            }), _initializer16$1 = applyDecoratedInitializer(_class2$b.prototype, "_isAlign", [serializable], function () {
              return false;
            })), _class2$b)) || _class$f) || _class$f) || _class$f); exports({ Layout: Layout, LayoutComponent: Layout });
            legacyCC.Layout = Layout;

            var _dec$e, _dec2$c, _dec3$b, _dec4$8, _dec5$8, _class$e, _class2$a, _initializer$a, _initializer2$a, _initializer3$8, _initializer4$7, _initializer5$5, _class3$7;
            var Mode;
            (function (Mode) {
              Mode[Mode["HORIZONTAL"] = 0] = "HORIZONTAL";
              Mode[Mode["VERTICAL"] = 1] = "VERTICAL";
              Mode[Mode["FILLED"] = 2] = "FILLED";
            })(Mode || (Mode = {}));
            Enum(Mode);
            let ProgressBar = (_dec$e = ccclass('cc.ProgressBar'), _dec2$c = executionOrder(110), _dec3$b = requireComponent(UITransform), _dec4$8 = type(Sprite), _dec5$8 = type(Mode), _dec$e(_class$e = _dec2$c(_class$e = _dec3$b(_class$e = (_class2$a = (_class3$7 = class ProgressBar extends Component {
              constructor(...args) {
                super(...args);
                this._barSprite = _initializer$a && _initializer$a();
                this._mode = _initializer2$a && _initializer2$a();
                this._totalLength = _initializer3$8 && _initializer3$8();
                this._progress = _initializer4$7 && _initializer4$7();
                this._reverse = _initializer5$5 && _initializer5$5();
              }
              get barSprite() {
                return this._barSprite;
              }
              set barSprite(value) {
                if (this._barSprite === value) {
                  return;
                }
                this._barSprite = value;
                this._initBarSprite();
              }
              get mode() {
                return this._mode;
              }
              set mode(value) {
                if (this._mode === value) {
                  return;
                }
                this._mode = value;
                if (this._barSprite) {
                  const entity = this._barSprite.node;
                  if (!entity) {
                    return;
                  }
                  const entitySize = entity._uiProps.uiTransformComp.contentSize;
                  if (this._mode === Mode.HORIZONTAL) {
                    this.totalLength = entitySize.width;
                  } else if (this._mode === Mode.VERTICAL) {
                    this.totalLength = entitySize.height;
                  } else if (this._mode === Mode.FILLED) {
                    this.totalLength = this._barSprite.fillRange;
                  }
                }
              }
              get totalLength() {
                return this._totalLength;
              }
              set totalLength(value) {
                if (this._mode === Mode.FILLED) {
                  value = clamp01(value);
                }
                if (this._totalLength === value) {
                  return;
                }
                this._totalLength = value;
                this._updateBarStatus();
              }
              get progress() {
                return this._progress;
              }
              set progress(value) {
                if (this._progress === value) {
                  return;
                }
                this._progress = value;
                this._updateBarStatus();
              }
              get reverse() {
                return this._reverse;
              }
              set reverse(value) {
                if (this._reverse === value) {
                  return;
                }
                this._reverse = value;
                if (this._barSprite) {
                  this._barSprite.fillStart = 1 - this._barSprite.fillStart;
                }
                this._updateBarStatus();
              }
              onLoad() {
                this._updateBarStatus();
              }
              _initBarSprite() {
                if (this._barSprite) {
                  const entity = this._barSprite.node;
                  if (!entity) {
                    return;
                  }
                  const trans = this.node._uiProps.uiTransformComp;
                  const nodeSize = trans.contentSize;
                  const nodeAnchor = trans.anchorPoint;
                  const barSpriteSize = entity._uiProps.uiTransformComp.contentSize;
                  if (this._barSprite.fillType === Sprite.FillType.RADIAL) {
                    this._mode = Mode.FILLED;
                  }
                  if (this._mode === Mode.HORIZONTAL) {
                    this.totalLength = barSpriteSize.width;
                  } else if (this._mode === Mode.VERTICAL) {
                    this.totalLength = barSpriteSize.height;
                  } else {
                    this.totalLength = this._barSprite.fillRange;
                  }
                  if (entity.parent === this.node) {
                    const x = -nodeSize.width * nodeAnchor.x;
                    entity.setPosition(x, 0, 0);
                  }
                }
              }
              _updateBarStatus() {
                if (this._barSprite) {
                  const entity = this._barSprite.node;
                  if (!entity) {
                    return;
                  }
                  const entTrans = entity._uiProps.uiTransformComp;
                  const entityAnchorPoint = entTrans.anchorPoint;
                  const entitySize = entTrans.contentSize;
                  const entityPosition = entity.getPosition();
                  let anchorPoint = new Vec2(0, 0.5);
                  const progress = clamp01(this._progress);
                  let actualLenth = this._totalLength * progress;
                  let finalContentSize = entitySize;
                  let totalWidth = 0;
                  let totalHeight = 0;
                  switch (this._mode) {
                    case Mode.HORIZONTAL:
                      if (this._reverse) {
                        anchorPoint = new Vec2(1, 0.5);
                      }
                      finalContentSize = new Size(actualLenth, entitySize.height);
                      totalWidth = this._totalLength;
                      totalHeight = entitySize.height;
                      break;
                    case Mode.VERTICAL:
                      if (this._reverse) {
                        anchorPoint = new Vec2(0.5, 1);
                      } else {
                        anchorPoint = new Vec2(0.5, 0);
                      }
                      finalContentSize = new Size(entitySize.width, actualLenth);
                      totalWidth = entitySize.width;
                      totalHeight = this._totalLength;
                      break;
                  }
                  if (this._mode === Mode.FILLED) {
                    if (this._barSprite.type !== Sprite.Type.FILLED) {
                      warn('ProgressBar FILLED mode only works when barSprite\'s Type is FILLED!');
                    } else {
                      if (this._reverse) {
                        actualLenth *= -1;
                      }
                      this._barSprite.fillRange = actualLenth;
                    }
                  } else if (this._barSprite.type !== Sprite.Type.FILLED) {
                    const anchorOffsetX = anchorPoint.x - entityAnchorPoint.x;
                    const anchorOffsetY = anchorPoint.y - entityAnchorPoint.y;
                    const finalPosition = new Vec3(totalWidth * anchorOffsetX, totalHeight * anchorOffsetY, 0);
                    entity.setPosition(entityPosition.x + finalPosition.x, entityPosition.y + finalPosition.y, entityPosition.z);
                    entTrans.setAnchorPoint(anchorPoint);
                    entTrans.setContentSize(finalContentSize);
                  } else {
                    warn('ProgressBar non-FILLED mode only works when barSprite\'s Type is non-FILLED!');
                  }
                }
              }
            }, _class3$7.Mode = Mode, _class3$7), (_applyDecoratedDescriptor(_class2$a.prototype, "barSprite", [_dec4$8], Object.getOwnPropertyDescriptor(_class2$a.prototype, "barSprite"), _class2$a.prototype), _applyDecoratedDescriptor(_class2$a.prototype, "mode", [_dec5$8], Object.getOwnPropertyDescriptor(_class2$a.prototype, "mode"), _class2$a.prototype), _initializer$a = applyDecoratedInitializer(_class2$a.prototype, "_barSprite", [serializable], function () {
              return null;
            }), _initializer2$a = applyDecoratedInitializer(_class2$a.prototype, "_mode", [serializable], function () {
              return Mode.HORIZONTAL;
            }), _initializer3$8 = applyDecoratedInitializer(_class2$a.prototype, "_totalLength", [serializable], function () {
              return 1;
            }), _initializer4$7 = applyDecoratedInitializer(_class2$a.prototype, "_progress", [serializable], function () {
              return 0.1;
            }), _initializer5$5 = applyDecoratedInitializer(_class2$a.prototype, "_reverse", [serializable], function () {
              return false;
            })), _class2$a)) || _class$e) || _class$e) || _class$e); exports({ ProgressBar: ProgressBar, ProgressBarComponent: ProgressBar });
            legacyCC.ProgressBar = ProgressBar;

            var _dec$d, _dec2$b, _dec3$a, _dec4$7, _dec5$7, _class$d, _class2$9, _initializer$9, _initializer2$9, _initializer3$7, _initializer4$6, _initializer5$4, _class3$6;
            const GETTING_SHORTER_FACTOR = 20;
            const _tempPos_1 = new Vec3();
            const _tempPos_2 = new Vec3();
            const _tempVec3$1 = new Vec3();
            const defaultAnchor = new Vec2();
            const _tempColor = new Color();
            const _tempVec2$2 = new Vec2();
            var Direction$3;
            (function (Direction) {
              Direction[Direction["HORIZONTAL"] = 0] = "HORIZONTAL";
              Direction[Direction["VERTICAL"] = 1] = "VERTICAL";
            })(Direction$3 || (Direction$3 = {}));
            ccenum(Direction$3);
            let ScrollBar = (_dec$d = ccclass('cc.ScrollBar'), _dec2$b = executionOrder(110), _dec3$a = requireComponent(UITransform), _dec4$7 = type(Sprite), _dec5$7 = type(Direction$3), _dec$d(_class$d = _dec2$b(_class$d = _dec3$a(_class$d = (_class2$9 = (_class3$6 = class ScrollBar extends Component {
              constructor(...args) {
                super(...args);
                this._scrollView = _initializer$9 && _initializer$9();
                this._handle = _initializer2$9 && _initializer2$9();
                this._direction = _initializer3$7 && _initializer3$7();
                this._enableAutoHide = _initializer4$6 && _initializer4$6();
                this._autoHideTime = _initializer5$4 && _initializer5$4();
                this._touching = false;
                this._opacity = 255;
                this._autoHideRemainingTime = 0;
              }
              get handle() {
                return this._handle;
              }
              set handle(value) {
                if (this._handle === value) {
                  return;
                }
                this._handle = value;
                this.onScroll(Vec2.ZERO);
              }
              get direction() {
                return this._direction;
              }
              set direction(value) {
                if (this._direction === value) {
                  return;
                }
                this._direction = value;
                this.onScroll(Vec2.ZERO);
              }
              get enableAutoHide() {
                return this._enableAutoHide;
              }
              set enableAutoHide(value) {
                if (this._enableAutoHide === value) {
                  return;
                }
                this._enableAutoHide = value;
                if (this._enableAutoHide) {
                  this._setOpacity(0);
                }
              }
              get autoHideTime() {
                return this._autoHideTime;
              }
              set autoHideTime(value) {
                if (this._autoHideTime === value) {
                  return;
                }
                this._autoHideTime = value;
              }
              hide() {
                this._autoHideRemainingTime = 0;
                this._setOpacity(0);
              }
              show() {
                this._autoHideRemainingTime = this._autoHideTime;
                this._opacity = 255;
                this._setOpacity(this._opacity);
              }
              onScroll(outOfBoundary) {
                if (!this._scrollView) {
                  return;
                }
                const content = this._scrollView.content;
                if (!content) {
                  return;
                }
                const contentSize = content._uiProps.uiTransformComp.contentSize;
                const scrollViewSize = this._scrollView.node._uiProps.uiTransformComp.contentSize;
                const barSize = this.node._uiProps.uiTransformComp.contentSize;
                if (this._conditionalDisableScrollBar(contentSize, scrollViewSize)) {
                  return;
                }
                if (this._enableAutoHide) {
                  this._autoHideRemainingTime = this._autoHideTime;
                  this._setOpacity(this._opacity);
                }
                let contentMeasure = 0;
                let scrollViewMeasure = 0;
                let outOfBoundaryValue = 0;
                let contentPosition = 0;
                let handleNodeMeasure = 0;
                const outOfContentPosition = _tempVec2$2;
                outOfContentPosition.set(0, 0);
                if (this._direction === Direction$3.HORIZONTAL) {
                  contentMeasure = contentSize.width;
                  scrollViewMeasure = scrollViewSize.width;
                  handleNodeMeasure = barSize.width;
                  outOfBoundaryValue = outOfBoundary.x;
                  this._convertToScrollViewSpace(outOfContentPosition, content);
                  contentPosition = -outOfContentPosition.x;
                } else if (this._direction === Direction$3.VERTICAL) {
                  contentMeasure = contentSize.height;
                  scrollViewMeasure = scrollViewSize.height;
                  handleNodeMeasure = barSize.height;
                  outOfBoundaryValue = outOfBoundary.y;
                  this._convertToScrollViewSpace(outOfContentPosition, content);
                  contentPosition = -outOfContentPosition.y;
                }
                const length = this._calculateLength(contentMeasure, scrollViewMeasure, handleNodeMeasure, outOfBoundaryValue);
                const position = _tempVec2$2;
                this._calculatePosition(position, contentMeasure, scrollViewMeasure, handleNodeMeasure, contentPosition, outOfBoundaryValue, length);
                this._updateLength(length);
                this._updateHandlerPosition(position);
              }
              setScrollView(scrollView) {
                this._scrollView = scrollView;
              }
              onTouchBegan() {
                if (!this._enableAutoHide) {
                  return;
                }
                this._touching = true;
              }
              onTouchEnded() {
                if (!this._enableAutoHide) {
                  return;
                }
                this._touching = false;
                if (this._autoHideTime <= 0) {
                  return;
                }
                if (this._scrollView) {
                  const content = this._scrollView.content;
                  if (content) {
                    const contentSize = content._uiProps.uiTransformComp.contentSize;
                    const scrollViewSize = this._scrollView.node._uiProps.uiTransformComp.contentSize;
                    if (this._conditionalDisableScrollBar(contentSize, scrollViewSize)) {
                      return;
                    }
                  }
                }
                this._autoHideRemainingTime = this._autoHideTime;
              }
              onEnable() {
                const renderComp = this.node.getComponent(Sprite);
                if (renderComp) {
                  this._opacity = renderComp.color.a;
                }
              }
              start() {
                if (this._enableAutoHide) {
                  this._setOpacity(0);
                }
              }
              update(dt) {
                this._processAutoHide(dt);
              }
              _convertToScrollViewSpace(out, content) {
                const scrollTrans = this._scrollView && this._scrollView.node._uiProps.uiTransformComp;
                const contentTrans = content._uiProps.uiTransformComp;
                if (!scrollTrans || !contentTrans) {
                  out.set(Vec2.ZERO);
                } else {
                  _tempPos_1.set(-contentTrans.anchorX * contentTrans.width, -contentTrans.anchorY * contentTrans.height, 0);
                  contentTrans.convertToWorldSpaceAR(_tempPos_1, _tempPos_2);
                  const scrollViewSpacePos = scrollTrans.convertToNodeSpaceAR(_tempPos_2);
                  scrollViewSpacePos.x += scrollTrans.anchorX * scrollTrans.width;
                  scrollViewSpacePos.y += scrollTrans.anchorY * scrollTrans.height;
                  out.set(scrollViewSpacePos.x, scrollViewSpacePos.y);
                }
              }
              _setOpacity(opacity) {
                if (this._handle) {
                  let renderComp = this.node.getComponent(Sprite);
                  if (renderComp) {
                    _tempColor.set(renderComp.color);
                    _tempColor.a = opacity;
                    renderComp.color = _tempColor;
                  }
                  renderComp = this._handle.getComponent(Sprite);
                  if (renderComp) {
                    _tempColor.set(renderComp.color);
                    _tempColor.a = opacity;
                    renderComp.color = _tempColor;
                  }
                }
              }
              _updateHandlerPosition(position) {
                if (this._handle) {
                  const oldPosition = _tempVec3$1;
                  this._fixupHandlerPosition(oldPosition);
                  this._handle.node.setPosition(position.x + oldPosition.x, position.y + oldPosition.y, oldPosition.z);
                }
              }
              _fixupHandlerPosition(out) {
                const uiTrans = this.node._uiProps.uiTransformComp;
                const barSize = uiTrans.contentSize;
                const barAnchor = uiTrans.anchorPoint;
                const handleSize = this.handle.node._uiProps.uiTransformComp.contentSize;
                const handleParent = this.handle.node.parent;
                Vec3.set(_tempPos_1, -barSize.width * barAnchor.x, -barSize.height * barAnchor.y, 0);
                const leftBottomWorldPosition = this.node._uiProps.uiTransformComp.convertToWorldSpaceAR(_tempPos_1, _tempPos_2);
                const fixupPosition = out;
                fixupPosition.set(0, 0, 0);
                handleParent._uiProps.uiTransformComp.convertToNodeSpaceAR(leftBottomWorldPosition, fixupPosition);
                if (this.direction === Direction$3.HORIZONTAL) {
                  fixupPosition.set(fixupPosition.x, fixupPosition.y + (barSize.height - handleSize.height) / 2, fixupPosition.z);
                } else if (this.direction === Direction$3.VERTICAL) {
                  fixupPosition.set(fixupPosition.x + (barSize.width - handleSize.width) / 2, fixupPosition.y, fixupPosition.z);
                }
                this.handle.node.setPosition(fixupPosition);
              }
              _conditionalDisableScrollBar(contentSize, scrollViewSize) {
                if (contentSize.width <= scrollViewSize.width && this._direction === Direction$3.HORIZONTAL) {
                  return true;
                }
                if (contentSize.height <= scrollViewSize.height && this._direction === Direction$3.VERTICAL) {
                  return true;
                }
                return false;
              }
              _calculateLength(contentMeasure, scrollViewMeasure, handleNodeMeasure, outOfBoundary) {
                let denominatorValue = contentMeasure;
                if (outOfBoundary) {
                  denominatorValue += (outOfBoundary > 0 ? outOfBoundary : -outOfBoundary) * GETTING_SHORTER_FACTOR;
                }
                const lengthRation = scrollViewMeasure / denominatorValue;
                return handleNodeMeasure * lengthRation;
              }
              _calculatePosition(out, contentMeasure, scrollViewMeasure, handleNodeMeasure, contentPosition, outOfBoundary, actualLenth) {
                let denominatorValue = contentMeasure - scrollViewMeasure;
                if (outOfBoundary) {
                  denominatorValue += Math.abs(outOfBoundary);
                }
                let positionRatio = 0;
                if (denominatorValue) {
                  positionRatio = contentPosition / denominatorValue;
                  positionRatio = clamp01(positionRatio);
                }
                const position = (handleNodeMeasure - actualLenth) * positionRatio;
                if (this._direction === Direction$3.VERTICAL) {
                  out.set(0, position);
                } else {
                  out.set(position, 0);
                }
              }
              _updateLength(length) {
                if (this._handle) {
                  const handleNode = this._handle.node;
                  const handleTrans = handleNode._uiProps.uiTransformComp;
                  const handleNodeSize = handleTrans.contentSize;
                  const anchor = handleTrans.anchorPoint;
                  if (anchor.x !== defaultAnchor.x || anchor.y !== defaultAnchor.y) {
                    handleTrans.setAnchorPoint(defaultAnchor);
                  }
                  if (this._direction === Direction$3.HORIZONTAL) {
                    handleTrans.setContentSize(length, handleNodeSize.height);
                  } else {
                    handleTrans.setContentSize(handleNodeSize.width, length);
                  }
                }
              }
              _processAutoHide(deltaTime) {
                if (!this._enableAutoHide || this._autoHideRemainingTime <= 0) {
                  return;
                } else if (this._touching) {
                  return;
                }
                this._autoHideRemainingTime -= deltaTime;
                if (this._autoHideRemainingTime <= this._autoHideTime) {
                  this._autoHideRemainingTime = Math.max(0, this._autoHideRemainingTime);
                  const opacity = this._opacity * (this._autoHideRemainingTime / this._autoHideTime);
                  this._setOpacity(opacity);
                }
              }
            }, _class3$6.Direction = Direction$3, _class3$6), (_applyDecoratedDescriptor(_class2$9.prototype, "handle", [_dec4$7], Object.getOwnPropertyDescriptor(_class2$9.prototype, "handle"), _class2$9.prototype), _applyDecoratedDescriptor(_class2$9.prototype, "direction", [_dec5$7], Object.getOwnPropertyDescriptor(_class2$9.prototype, "direction"), _class2$9.prototype), _initializer$9 = applyDecoratedInitializer(_class2$9.prototype, "_scrollView", [serializable], function () {
              return null;
            }), _initializer2$9 = applyDecoratedInitializer(_class2$9.prototype, "_handle", [serializable], function () {
              return null;
            }), _initializer3$7 = applyDecoratedInitializer(_class2$9.prototype, "_direction", [serializable], function () {
              return Direction$3.HORIZONTAL;
            }), _initializer4$6 = applyDecoratedInitializer(_class2$9.prototype, "_enableAutoHide", [serializable], function () {
              return false;
            }), _initializer5$4 = applyDecoratedInitializer(_class2$9.prototype, "_autoHideTime", [serializable], function () {
              return 1.0;
            })), _class2$9)) || _class$d) || _class$d) || _class$d); exports({ ScrollBar: ScrollBar, ScrollBarComponent: ScrollBar });
            legacyCC.ScrollBar = ScrollBar;

            var _dec$c, _dec2$a, _class$c;
            let ViewGroup = exports('ViewGroup', (_dec$c = ccclass('cc.ViewGroup'), _dec2$a = executionOrder(110), _dec$c(_class$c = _dec2$a(_class$c = class ViewGroup extends Component {}) || _class$c) || _class$c));
            legacyCC.ViewGroup = ViewGroup;

            var _dec$b, _dec2$9, _dec3$9, _dec4$6, _dec5$6, _dec6$2, _dec7$1, _class$b, _class2$8, _initializer$8, _initializer2$8, _initializer3$6, _initializer4$5, _initializer5$3, _initializer6$2, _initializer7$2, _initializer8$2, _initializer9$2, _initializer10$2, _initializer11$2, _class3$5;
            const NUMBER_OF_GATHERED_TOUCHES_FOR_MOVE_SPEED = 5;
            const OUT_OF_BOUNDARY_BREAKING_FACTOR = 0.05;
            const EPSILON = 1e-4;
            const TOLERANCE = 1e4;
            const MOVEMENT_FACTOR = 0.7;
            const _tempVec3 = new Vec3();
            const _tempVec3_1 = new Vec3();
            const _tempVec2$1 = new Vec2();
            const _tempVec2_1$1 = new Vec2();
            const quintEaseOut = time => {
              time -= 1;
              return time * time * time * time * time + 1;
            };
            const getTimeInMilliseconds = () => {
              const currentTime = new Date();
              return currentTime.getMilliseconds();
            };
            const eventMap = {
              'scroll-to-top': 0,
              'scroll-to-bottom': 1,
              'scroll-to-left': 2,
              'scroll-to-right': 3,
              'scrolling': 4,
              'bounce-bottom': 6,
              'bounce-left': 7,
              'bounce-right': 8,
              'bounce-top': 5,
              'scroll-ended': 9,
              'touch-up': 10,
              'scroll-ended-with-threshold': 11,
              'scroll-began': 12
            };
            let EventType$2;
            (function (EventType) {
              EventType["NONE"] = "";
              EventType["SCROLL_TO_TOP"] = "scroll-to-top";
              EventType["SCROLL_TO_BOTTOM"] = "scroll-to-bottom";
              EventType["SCROLL_TO_LEFT"] = "scroll-to-left";
              EventType["SCROLL_TO_RIGHT"] = "scroll-to-right";
              EventType["SCROLL_BEGAN"] = "scroll-began";
              EventType["SCROLL_ENDED"] = "scroll-ended";
              EventType["BOUNCE_TOP"] = "bounce-top";
              EventType["BOUNCE_BOTTOM"] = "bounce-bottom";
              EventType["BOUNCE_LEFT"] = "bounce-left";
              EventType["BOUNCE_RIGHT"] = "bounce-right";
              EventType["SCROLLING"] = "scrolling";
              EventType["SCROLL_ENG_WITH_THRESHOLD"] = "scroll-ended-with-threshold";
              EventType["TOUCH_UP"] = "touch-up";
            })(EventType$2 || (EventType$2 = {}));
            var XrhoverType;
            (function (XrhoverType) {
              XrhoverType[XrhoverType["NONE"] = 0] = "NONE";
              XrhoverType[XrhoverType["LEFT"] = 1] = "LEFT";
              XrhoverType[XrhoverType["RIGHT"] = 2] = "RIGHT";
            })(XrhoverType || (XrhoverType = {}));
            let ScrollView = (_dec$b = ccclass('cc.ScrollView'), _dec2$9 = executionOrder(110), _dec3$9 = requireComponent(UITransform), _dec4$6 = type(Node), _dec5$6 = type(ScrollBar), _dec6$2 = type(ScrollBar), _dec7$1 = type([EventHandler]), _dec$b(_class$b = _dec2$9(_class$b = _dec3$9(_class$b = (_class2$8 = (_class3$5 = class ScrollView extends ViewGroup {
              constructor(...args) {
                super(...args);
                this.bounceDuration = _initializer$8 && _initializer$8();
                this.brake = _initializer2$8 && _initializer2$8();
                this.elastic = _initializer3$6 && _initializer3$6();
                this.inertia = _initializer4$5 && _initializer4$5();
                this.horizontal = _initializer5$3 && _initializer5$3();
                this.vertical = _initializer6$2 && _initializer6$2();
                this.cancelInnerEvents = _initializer7$2 && _initializer7$2();
                this.scrollEvents = _initializer8$2 && _initializer8$2();
                this._autoScrolling = false;
                this._scrolling = false;
                this._content = _initializer9$2 && _initializer9$2();
                this._horizontalScrollBar = _initializer10$2 && _initializer10$2();
                this._verticalScrollBar = _initializer11$2 && _initializer11$2();
                this._topBoundary = 0;
                this._bottomBoundary = 0;
                this._leftBoundary = 0;
                this._rightBoundary = 0;
                this._touchMoveDisplacements = [];
                this._touchMoveTimeDeltas = [];
                this._touchMovePreviousTimestamp = 0;
                this._touchMoved = false;
                this._autoScrollAttenuate = false;
                this._autoScrollStartPosition = new Vec3();
                this._autoScrollTargetDelta = new Vec3();
                this._autoScrollTotalTime = 0;
                this._autoScrollAccumulatedTime = 0;
                this._autoScrollCurrentlyOutOfBoundary = false;
                this._autoScrollBraking = false;
                this._autoScrollBrakingStartPosition = new Vec3();
                this._outOfBoundaryAmount = new Vec3();
                this._outOfBoundaryAmountDirty = true;
                this._stopMouseWheel = false;
                this._mouseWheelEventElapsedTime = 0.0;
                this._isScrollEndedWithThresholdEventFired = false;
                this._scrollEventEmitMask = 0;
                this._isBouncing = false;
                this._contentPos = new Vec3();
                this._deltaPos = new Vec3();
                this._deltaAmount = new Vec3();
                this._hoverIn = XrhoverType.NONE;
              }
              get content() {
                return this._content;
              }
              set content(value) {
                if (this._content === value) {
                  return;
                }
                const viewTrans = value && value.parent && value.parent._uiProps.uiTransformComp;
                if (value && (!value || !viewTrans)) {
                  logID(4302);
                  return;
                }
                this._content = value;
                this._calculateBoundary();
              }
              get horizontalScrollBar() {
                if (this._horizontalScrollBar && !this._horizontalScrollBar.isValid) {
                  errorID(4303, 'horizontal', this.node.name);
                }
                return this._horizontalScrollBar;
              }
              set horizontalScrollBar(value) {
                if (this._horizontalScrollBar === value) {
                  return;
                }
                this._horizontalScrollBar = value;
                if (this._horizontalScrollBar) {
                  this._horizontalScrollBar.setScrollView(this);
                  this._updateScrollBar(Vec2.ZERO);
                }
              }
              get verticalScrollBar() {
                if (this._verticalScrollBar && !this._verticalScrollBar.isValid) {
                  errorID(4303, 'vertical', this.node.name);
                }
                return this._verticalScrollBar;
              }
              set verticalScrollBar(value) {
                if (this._verticalScrollBar === value) {
                  return;
                }
                this._verticalScrollBar = value;
                if (this._verticalScrollBar) {
                  this._verticalScrollBar.setScrollView(this);
                  this._updateScrollBar(Vec2.ZERO);
                }
              }
              get view() {
                const parent = this._content && this._content.parent;
                if (!parent) {
                  return null;
                }
                return parent._uiProps.uiTransformComp;
              }
              scrollToBottom(timeInSecond, attenuated = true) {
                const moveDelta = this._calculateMovePercentDelta({
                  anchor: new Vec2(0, 0),
                  applyToHorizontal: false,
                  applyToVertical: true
                });
                if (timeInSecond) {
                  this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
                } else {
                  this._moveContent(moveDelta, true);
                }
              }
              scrollToTop(timeInSecond, attenuated = true) {
                const moveDelta = this._calculateMovePercentDelta({
                  anchor: new Vec2(0, 1),
                  applyToHorizontal: false,
                  applyToVertical: true
                });
                if (timeInSecond) {
                  this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
                } else {
                  this._moveContent(moveDelta);
                }
              }
              scrollToLeft(timeInSecond, attenuated = true) {
                const moveDelta = this._calculateMovePercentDelta({
                  anchor: new Vec2(0, 0),
                  applyToHorizontal: true,
                  applyToVertical: false
                });
                if (timeInSecond) {
                  this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
                } else {
                  this._moveContent(moveDelta);
                }
              }
              scrollToRight(timeInSecond, attenuated = true) {
                const moveDelta = this._calculateMovePercentDelta({
                  anchor: new Vec2(1, 0),
                  applyToHorizontal: true,
                  applyToVertical: false
                });
                if (timeInSecond) {
                  this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
                } else {
                  this._moveContent(moveDelta);
                }
              }
              scrollToTopLeft(timeInSecond, attenuated = true) {
                const moveDelta = this._calculateMovePercentDelta({
                  anchor: new Vec2(0, 1),
                  applyToHorizontal: true,
                  applyToVertical: true
                });
                if (timeInSecond) {
                  this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
                } else {
                  this._moveContent(moveDelta);
                }
              }
              scrollToTopRight(timeInSecond, attenuated = true) {
                const moveDelta = this._calculateMovePercentDelta({
                  anchor: new Vec2(1, 1),
                  applyToHorizontal: true,
                  applyToVertical: true
                });
                if (timeInSecond) {
                  this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
                } else {
                  this._moveContent(moveDelta);
                }
              }
              scrollToBottomLeft(timeInSecond, attenuated = true) {
                const moveDelta = this._calculateMovePercentDelta({
                  anchor: new Vec2(0, 0),
                  applyToHorizontal: true,
                  applyToVertical: true
                });
                if (timeInSecond) {
                  this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
                } else {
                  this._moveContent(moveDelta);
                }
              }
              scrollToBottomRight(timeInSecond, attenuated = true) {
                const moveDelta = this._calculateMovePercentDelta({
                  anchor: new Vec2(1, 0),
                  applyToHorizontal: true,
                  applyToVertical: true
                });
                if (timeInSecond) {
                  this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
                } else {
                  this._moveContent(moveDelta);
                }
              }
              scrollToOffset(offset, timeInSecond, attenuated = true) {
                const maxScrollOffset = this.getMaxScrollOffset();
                const anchor = new Vec2(0, 0);
                if (maxScrollOffset.x === 0) {
                  anchor.x = 0;
                } else {
                  anchor.x = offset.x / maxScrollOffset.x;
                }
                if (maxScrollOffset.y === 0) {
                  anchor.y = 1;
                } else {
                  anchor.y = (maxScrollOffset.y - offset.y) / maxScrollOffset.y;
                }
                this.scrollTo(anchor, timeInSecond, attenuated);
              }
              getScrollOffset() {
                const topDelta = this._getContentTopBoundary() - this._topBoundary;
                const leftDelta = this._getContentLeftBoundary() - this._leftBoundary;
                return new Vec2(leftDelta, topDelta);
              }
              getMaxScrollOffset() {
                if (!this._content || !this.view) {
                  return Vec2.ZERO;
                }
                const contentSize = this._content._uiProps.uiTransformComp.contentSize;
                let horizontalMaximizeOffset = contentSize.width - this.view.width;
                let verticalMaximizeOffset = contentSize.height - this.view.height;
                horizontalMaximizeOffset = horizontalMaximizeOffset >= 0 ? horizontalMaximizeOffset : 0;
                verticalMaximizeOffset = verticalMaximizeOffset >= 0 ? verticalMaximizeOffset : 0;
                return new Vec2(horizontalMaximizeOffset, verticalMaximizeOffset);
              }
              scrollToPercentHorizontal(percent, timeInSecond, attenuated) {
                const moveDelta = this._calculateMovePercentDelta({
                  anchor: new Vec2(percent, 0),
                  applyToHorizontal: true,
                  applyToVertical: false
                });
                if (timeInSecond) {
                  this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
                } else {
                  this._moveContent(moveDelta);
                }
              }
              scrollTo(anchor, timeInSecond, attenuated) {
                const moveDelta = this._calculateMovePercentDelta({
                  anchor: new Vec2(anchor),
                  applyToHorizontal: true,
                  applyToVertical: true
                });
                if (timeInSecond) {
                  this._startAutoScroll(moveDelta, timeInSecond, attenuated);
                } else {
                  this._moveContent(moveDelta);
                }
              }
              scrollToPercentVertical(percent, timeInSecond, attenuated) {
                const moveDelta = this._calculateMovePercentDelta({
                  anchor: new Vec2(0, percent),
                  applyToHorizontal: false,
                  applyToVertical: true
                });
                if (timeInSecond) {
                  this._startAutoScroll(moveDelta, timeInSecond, attenuated);
                } else {
                  this._moveContent(moveDelta);
                }
              }
              stopAutoScroll() {
                this._autoScrolling = false;
                this._autoScrollAccumulatedTime = this._autoScrollTotalTime;
              }
              setContentPosition(position) {
                this._setContentPosition(position);
              }
              _setContentPosition(position) {
                if (!this._content) {
                  return;
                }
                const contentPos = this._getContentPosition();
                if (Math.abs(position.x - contentPos.x) < EPSILON && Math.abs(position.y - contentPos.y) < EPSILON) {
                  return;
                }
                this._content.setPosition(position);
                this._outOfBoundaryAmountDirty = true;
              }
              getContentPosition() {
                return this._getContentPosition();
              }
              _getContentPosition() {
                if (!this._content) {
                  return Vec3.ZERO.clone();
                }
                this._contentPos.set(this._content.position);
                return this._contentPos;
              }
              isScrolling() {
                return this._scrolling;
              }
              isAutoScrolling() {
                return this._autoScrolling;
              }
              getScrollEndedEventTiming() {
                return EPSILON;
              }
              start() {
                this._calculateBoundary();
                if (this._content) {
                  director.once(Director.EVENT_BEFORE_DRAW, this._adjustContentOutOfBoundary, this);
                }
              }
              onEnable() {
                {
                  this._registerEvent();
                  if (this._content) {
                    this._content.on(NodeEventType.SIZE_CHANGED, this._calculateBoundary, this);
                    this._content.on(NodeEventType.TRANSFORM_CHANGED, this._scaleChanged, this);
                    if (this.view) {
                      this.view.node.on(NodeEventType.TRANSFORM_CHANGED, this._scaleChanged, this);
                      this.view.node.on(NodeEventType.SIZE_CHANGED, this._calculateBoundary, this);
                    }
                  }
                  this._calculateBoundary();
                }
                this._updateScrollBarState();
              }
              update(dt) {
                const deltaAmount = this._deltaAmount;
                if (this._autoScrolling) {
                  this._processAutoScrolling(dt);
                  deltaAmount.x = 0;
                  deltaAmount.y = 0;
                } else if (deltaAmount.x !== 0 || deltaAmount.y !== 0) {
                  this._processDeltaMove(deltaAmount);
                  deltaAmount.x = 0;
                  deltaAmount.y = 0;
                }
              }
              onDisable() {
                {
                  this._unregisterEvent();
                  if (this._content) {
                    this._content.off(NodeEventType.SIZE_CHANGED, this._calculateBoundary, this);
                    this._content.off(NodeEventType.TRANSFORM_CHANGED, this._scaleChanged, this);
                    if (this.view) {
                      this.view.node.off(NodeEventType.TRANSFORM_CHANGED, this._scaleChanged, this);
                      this.view.node.off(NodeEventType.SIZE_CHANGED, this._calculateBoundary, this);
                    }
                  }
                }
                this._deltaAmount.set(0, 0);
                this._hideScrollBar();
                this.stopAutoScroll();
              }
              _registerEvent() {
                this.node.on(NodeEventType.TOUCH_START, this._onTouchBegan, this, true);
                this.node.on(NodeEventType.TOUCH_MOVE, this._onTouchMoved, this, true);
                this.node.on(NodeEventType.TOUCH_END, this._onTouchEnded, this, true);
                this.node.on(NodeEventType.TOUCH_CANCEL, this._onTouchCancelled, this, true);
                this.node.on(NodeEventType.MOUSE_WHEEL, this._onMouseWheel, this, true);
                this.node.on(XrUIPressEventType.XRUI_HOVER_ENTERED, this._xrHoverEnter, this);
                this.node.on(XrUIPressEventType.XRUI_HOVER_EXITED, this._xrHoverExit, this);
                input.on(Input.EventType.HANDLE_INPUT, this._dispatchEventHandleInput, this);
                input.on(Input.EventType.GAMEPAD_INPUT, this._dispatchEventHandleInput, this);
              }
              _unregisterEvent() {
                this.node.off(NodeEventType.TOUCH_START, this._onTouchBegan, this, true);
                this.node.off(NodeEventType.TOUCH_MOVE, this._onTouchMoved, this, true);
                this.node.off(NodeEventType.TOUCH_END, this._onTouchEnded, this, true);
                this.node.off(NodeEventType.TOUCH_CANCEL, this._onTouchCancelled, this, true);
                this.node.off(NodeEventType.MOUSE_WHEEL, this._onMouseWheel, this, true);
                this.node.off(XrUIPressEventType.XRUI_HOVER_ENTERED, this._xrHoverEnter, this);
                this.node.off(XrUIPressEventType.XRUI_HOVER_EXITED, this._xrHoverExit, this);
                input.off(Input.EventType.HANDLE_INPUT, this._dispatchEventHandleInput, this);
                input.off(Input.EventType.GAMEPAD_INPUT, this._dispatchEventHandleInput, this);
              }
              _onMouseWheel(event, captureListeners) {
                if (!this.enabledInHierarchy) {
                  return;
                }
                if (this._hasNestedViewGroup(event, captureListeners)) {
                  return;
                }
                const deltaMove = new Vec3();
                const wheelPrecision = -0.1;
                const scrollY = event.getScrollY();
                if (this.vertical) {
                  deltaMove.set(0, scrollY * wheelPrecision, 0);
                } else if (this.horizontal) {
                  deltaMove.set(scrollY * wheelPrecision, 0, 0);
                }
                this._mouseWheelEventElapsedTime = 0;
                this._deltaAmount.add(deltaMove);
                if (!this._stopMouseWheel) {
                  this._handlePressLogic();
                  this.schedule(this._checkMouseWheel, 1.0 / 60);
                  this._stopMouseWheel = true;
                }
                this._stopPropagationIfTargetIsMe(event);
              }
              _onTouchBegan(event, captureListeners) {
                if (!this.enabledInHierarchy || !this._content) {
                  return;
                }
                if (this._hasNestedViewGroup(event, captureListeners)) {
                  return;
                }
                this._handlePressLogic();
                this._touchMoved = false;
                this._stopPropagationIfTargetIsMe(event);
              }
              _onTouchMoved(event, captureListeners) {
                if (!this.enabledInHierarchy || !this._content) {
                  return;
                }
                if (this._hasNestedViewGroup(event, captureListeners)) {
                  return;
                }
                const touch = event.touch;
                this._handleMoveLogic(touch);
                if (!this.cancelInnerEvents) {
                  return;
                }
                const deltaMove = touch.getUILocation(_tempVec2$1);
                deltaMove.subtract(touch.getUIStartLocation(_tempVec2_1$1));
                if (deltaMove.length() > 7) {
                  if (!this._touchMoved && event.target !== this.node) {
                    const cancelEvent = new EventTouch(event.getTouches(), event.bubbles, SystemEventType.TOUCH_CANCEL);
                    cancelEvent.touch = event.touch;
                    cancelEvent.simulate = true;
                    event.target.dispatchEvent(cancelEvent);
                    this._touchMoved = true;
                  }
                }
                this._stopPropagationIfTargetIsMe(event);
              }
              _onTouchEnded(event, captureListeners) {
                if (!this.enabledInHierarchy || !this._content || !event) {
                  return;
                }
                if (this._hasNestedViewGroup(event, captureListeners)) {
                  return;
                }
                this._dispatchEvent(EventType$2.TOUCH_UP);
                const touch = event.touch;
                this._handleReleaseLogic(touch);
                if (this._touchMoved) {
                  event.propagationStopped = true;
                } else {
                  this._stopPropagationIfTargetIsMe(event);
                }
              }
              _onTouchCancelled(event, captureListeners) {
                if (!this.enabledInHierarchy || !this._content) {
                  return;
                }
                if (this._hasNestedViewGroup(event, captureListeners)) {
                  return;
                }
                if (event && !event.simulate) {
                  const touch = event.touch;
                  this._handleReleaseLogic(touch);
                }
                this._stopPropagationIfTargetIsMe(event);
              }
              _calculateBoundary() {
                if (this._content && this.view) {
                  const layout = this._content.getComponent(Layout);
                  if (layout && layout.enabledInHierarchy) {
                    layout.updateLayout();
                  }
                  const viewTrans = this.view;
                  const anchorX = viewTrans.width * viewTrans.anchorX;
                  const anchorY = viewTrans.height * viewTrans.anchorY;
                  this._leftBoundary = -anchorX;
                  this._bottomBoundary = -anchorY;
                  this._rightBoundary = this._leftBoundary + viewTrans.width;
                  this._topBoundary = this._bottomBoundary + viewTrans.height;
                  this._moveContentToTopLeft(viewTrans.contentSize);
                }
              }
              _hasNestedViewGroup(event, captureListeners) {
                if (!event || event.eventPhase !== Event.CAPTURING_PHASE) {
                  return false;
                }
                if (captureListeners) {
                  for (const listener of captureListeners) {
                    const item = listener;
                    if (this.node === item) {
                      if (event.target && event.target.getComponent(ViewGroup)) {
                        return true;
                      }
                      return false;
                    }
                    if (item.getComponent(ViewGroup)) {
                      return true;
                    }
                  }
                }
                return false;
              }
              _startInertiaScroll(touchMoveVelocity) {
                const inertiaTotalMovement = new Vec3(touchMoveVelocity);
                inertiaTotalMovement.multiplyScalar(MOVEMENT_FACTOR);
                this._startAttenuatingAutoScroll(inertiaTotalMovement, touchMoveVelocity);
              }
              _calculateAttenuatedFactor(distance) {
                if (this.brake <= 0) {
                  return 1 - this.brake;
                }
                return (1 - this.brake) * (1 / (1 + distance * 0.000014 + distance * distance * 0.000000008));
              }
              _startAttenuatingAutoScroll(deltaMove, initialVelocity) {
                const targetDelta = deltaMove.clone();
                targetDelta.normalize();
                if (this._content && this.view) {
                  const contentSize = this._content._uiProps.uiTransformComp.contentSize;
                  const scrollViewSize = this.view.contentSize;
                  const totalMoveWidth = contentSize.width - scrollViewSize.width;
                  const totalMoveHeight = contentSize.height - scrollViewSize.height;
                  const attenuatedFactorX = this._calculateAttenuatedFactor(totalMoveWidth);
                  const attenuatedFactorY = this._calculateAttenuatedFactor(totalMoveHeight);
                  targetDelta.x = targetDelta.x * totalMoveWidth * (1 - this.brake) * attenuatedFactorX;
                  targetDelta.y = targetDelta.y * totalMoveHeight * attenuatedFactorY * (1 - this.brake);
                  targetDelta.z = 0;
                }
                const originalMoveLength = deltaMove.length();
                let factor = targetDelta.length() / originalMoveLength;
                targetDelta.add(deltaMove);
                if (this.brake > 0 && factor > 7) {
                  factor = Math.sqrt(factor);
                  const clonedDeltaMove = deltaMove.clone();
                  clonedDeltaMove.multiplyScalar(factor);
                  targetDelta.set(clonedDeltaMove);
                  targetDelta.add(deltaMove);
                }
                let time = this._calculateAutoScrollTimeByInitialSpeed(initialVelocity.length());
                if (this.brake > 0 && factor > 3) {
                  factor = 3;
                  time *= factor;
                }
                if (this.brake === 0 && factor > 1) {
                  time *= factor;
                }
                this._startAutoScroll(targetDelta, time, true);
              }
              _calculateAutoScrollTimeByInitialSpeed(initialSpeed) {
                return Math.sqrt(Math.sqrt(initialSpeed / 5));
              }
              _startAutoScroll(deltaMove, timeInSecond, attenuated = false) {
                const adjustedDeltaMove = this._flattenVectorByDirection(deltaMove);
                this._autoScrolling = true;
                this._autoScrollTargetDelta = adjustedDeltaMove;
                this._autoScrollAttenuate = attenuated;
                Vec3.copy(this._autoScrollStartPosition, this._getContentPosition());
                this._autoScrollTotalTime = timeInSecond;
                this._autoScrollAccumulatedTime = 0;
                this._autoScrollBraking = false;
                this._isScrollEndedWithThresholdEventFired = false;
                this._autoScrollBrakingStartPosition.set(0, 0, 0);
                const currentOutOfBoundary = this._getHowMuchOutOfBoundary();
                if (!currentOutOfBoundary.equals(Vec3.ZERO, EPSILON)) {
                  this._autoScrollCurrentlyOutOfBoundary = true;
                }
              }
              _calculateTouchMoveVelocity() {
                const out = new Vec3();
                let totalTime = 0;
                totalTime = this._touchMoveTimeDeltas.reduce((a, b) => a + b, totalTime);
                if (totalTime <= 0 || totalTime >= 0.5) {
                  out.set(Vec3.ZERO);
                } else {
                  let totalMovement = new Vec3();
                  totalMovement = this._touchMoveDisplacements.reduce((a, b) => {
                    a.add(b);
                    return a;
                  }, totalMovement);
                  out.set(totalMovement.x * (1 - this.brake) / totalTime, totalMovement.y * (1 - this.brake) / totalTime, totalMovement.z);
                }
                return out;
              }
              _flattenVectorByDirection(vector) {
                const result = vector;
                result.x = this.horizontal ? result.x : 0;
                result.y = this.vertical ? result.y : 0;
                return result;
              }
              _moveContent(deltaMove, canStartBounceBack) {
                const adjustedMove = this._flattenVectorByDirection(deltaMove);
                _tempVec3.set(this._getContentPosition());
                _tempVec3.add(adjustedMove);
                _tempVec3.set(Math.round(_tempVec3.x * TOLERANCE) * EPSILON, Math.round(_tempVec3.y * TOLERANCE) * EPSILON, _tempVec3.z);
                this._setContentPosition(_tempVec3);
                const outOfBoundary = this._getHowMuchOutOfBoundary();
                _tempVec2$1.set(outOfBoundary.x, outOfBoundary.y);
                this._updateScrollBar(_tempVec2$1);
                if (this.elastic && canStartBounceBack) {
                  this._startBounceBackIfNeeded();
                }
              }
              _getContentLeftBoundary() {
                if (!this._content) {
                  return -1;
                }
                const contentPos = this._getContentPosition();
                const uiTrans = this._content._uiProps.uiTransformComp;
                return contentPos.x - uiTrans.anchorX * uiTrans.width;
              }
              _getContentRightBoundary() {
                if (!this._content) {
                  return -1;
                }
                const uiTrans = this._content._uiProps.uiTransformComp;
                return this._getContentLeftBoundary() + uiTrans.width;
              }
              _getContentTopBoundary() {
                if (!this._content) {
                  return -1;
                }
                const uiTrans = this._content._uiProps.uiTransformComp;
                return this._getContentBottomBoundary() + uiTrans.height;
              }
              _getContentBottomBoundary() {
                if (!this._content) {
                  return -1;
                }
                const contentPos = this._getContentPosition();
                const uiTrans = this._content._uiProps.uiTransformComp;
                return contentPos.y - uiTrans.anchorY * uiTrans.height;
              }
              _getHowMuchOutOfBoundary(addition) {
                addition = addition || new Vec3();
                if (addition.equals(Vec3.ZERO, EPSILON) && !this._outOfBoundaryAmountDirty) {
                  return this._outOfBoundaryAmount;
                }
                const outOfBoundaryAmount = new Vec3();
                const tempLeftBoundary = this._getContentLeftBoundary();
                const tempRightBoundary = this._getContentRightBoundary();
                if (tempLeftBoundary + addition.x > this._leftBoundary) {
                  outOfBoundaryAmount.x = this._leftBoundary - (tempLeftBoundary + addition.x);
                } else if (tempRightBoundary + addition.x < this._rightBoundary) {
                  outOfBoundaryAmount.x = this._rightBoundary - (tempRightBoundary + addition.x);
                }
                const tempTopBoundary = this._getContentTopBoundary();
                const tempBottomBoundary = this._getContentBottomBoundary();
                if (tempTopBoundary + addition.y < this._topBoundary) {
                  outOfBoundaryAmount.y = this._topBoundary - (tempTopBoundary + addition.y);
                } else if (tempBottomBoundary + addition.y > this._bottomBoundary) {
                  outOfBoundaryAmount.y = this._bottomBoundary - (tempBottomBoundary + addition.y);
                }
                if (addition.equals(Vec3.ZERO, EPSILON)) {
                  this._outOfBoundaryAmount = outOfBoundaryAmount;
                  this._outOfBoundaryAmountDirty = false;
                }
                this._clampDelta(outOfBoundaryAmount);
                return outOfBoundaryAmount;
              }
              _updateScrollBar(outOfBoundary) {
                if (this._horizontalScrollBar && this._horizontalScrollBar.isValid) {
                  this._horizontalScrollBar.onScroll(outOfBoundary);
                }
                if (this._verticalScrollBar && this._verticalScrollBar.isValid) {
                  this._verticalScrollBar.onScroll(outOfBoundary);
                }
              }
              _onScrollBarTouchBegan() {
                if (this._horizontalScrollBar && this._horizontalScrollBar.isValid) {
                  this._horizontalScrollBar.onTouchBegan();
                }
                if (this._verticalScrollBar && this._verticalScrollBar.isValid) {
                  this._verticalScrollBar.onTouchBegan();
                }
              }
              _onScrollBarTouchEnded() {
                if (this._horizontalScrollBar && this._horizontalScrollBar.isValid) {
                  this._horizontalScrollBar.onTouchEnded();
                }
                if (this._verticalScrollBar && this._verticalScrollBar.isValid) {
                  this._verticalScrollBar.onTouchEnded();
                }
              }
              _dispatchEvent(event) {
                if (event === EventType$2.SCROLL_ENDED) {
                  this._scrollEventEmitMask = 0;
                } else if (event === EventType$2.SCROLL_TO_TOP || event === EventType$2.SCROLL_TO_BOTTOM || event === EventType$2.SCROLL_TO_LEFT || event === EventType$2.SCROLL_TO_RIGHT) {
                  const flag = 1 << eventMap[event];
                  if (this._scrollEventEmitMask & flag) {
                    return;
                  } else {
                    this._scrollEventEmitMask |= flag;
                  }
                }
                EventHandler.emitEvents(this.scrollEvents, this, eventMap[event]);
                this.node.emit(event, this);
              }
              _adjustContentOutOfBoundary() {
                if (!this._content) {
                  return;
                }
                this._outOfBoundaryAmountDirty = true;
                const outOfBoundary = this._getHowMuchOutOfBoundary();
                const _isOutOfBoundary = !outOfBoundary.equals(Vec3.ZERO, EPSILON);
                if (_isOutOfBoundary) {
                  _tempVec3.set(this._getContentPosition());
                  _tempVec3.add(outOfBoundary);
                  this._setContentPosition(_tempVec3);
                  this._updateScrollBar(Vec2.ZERO);
                }
              }
              _hideScrollBar() {
                if (this._horizontalScrollBar && this._horizontalScrollBar.isValid) {
                  this._horizontalScrollBar.hide();
                }
                if (this._verticalScrollBar && this._verticalScrollBar.isValid) {
                  this._verticalScrollBar.hide();
                }
              }
              _updateScrollBarState() {
                if (!this._content || !this.view) {
                  return;
                }
                const viewTrans = this.view;
                const uiTrans = this._content._uiProps.uiTransformComp;
                if (this._verticalScrollBar && this._verticalScrollBar.isValid) {
                  if (uiTrans.height < viewTrans.height || approx(uiTrans.height, viewTrans.height)) {
                    this._verticalScrollBar.hide();
                  } else {
                    this._verticalScrollBar.show();
                  }
                }
                if (this._horizontalScrollBar && this._horizontalScrollBar.isValid) {
                  if (uiTrans.width < viewTrans.width || approx(uiTrans.width, viewTrans.width)) {
                    this._horizontalScrollBar.hide();
                  } else {
                    this._horizontalScrollBar.show();
                  }
                }
              }
              _stopPropagationIfTargetIsMe(event) {
                if (event.eventPhase === Event.AT_TARGET && event.target === this.node) {
                  event.propagationStopped = true;
                }
              }
              _processDeltaMove(deltaMove) {
                this._scrollChildren(deltaMove);
                this._gatherTouchMove(deltaMove);
              }
              _handleMoveLogic(touch) {
                this._getLocalAxisAlignDelta(this._deltaPos, touch);
                this._deltaAmount.add(this._deltaPos);
              }
              _handleReleaseLogic(touch) {
                this._getLocalAxisAlignDelta(this._deltaPos, touch);
                this._gatherTouchMove(this._deltaPos);
                this._processInertiaScroll();
                if (this._scrolling) {
                  this._scrolling = false;
                  if (!this._autoScrolling) {
                    this._dispatchEvent(EventType$2.SCROLL_ENDED);
                  }
                }
              }
              _getLocalAxisAlignDelta(out, touch) {
                const uiTransformComp = this.node._uiProps.uiTransformComp;
                const vec = new Vec3();
                if (uiTransformComp) {
                  touch.getUILocation(_tempVec2$1);
                  touch.getUIPreviousLocation(_tempVec2_1$1);
                  _tempVec3.set(_tempVec2$1.x, _tempVec2$1.y, 0);
                  _tempVec3_1.set(_tempVec2_1$1.x, _tempVec2_1$1.y, 0);
                  uiTransformComp.convertToNodeSpaceAR(_tempVec3, _tempVec3);
                  uiTransformComp.convertToNodeSpaceAR(_tempVec3_1, _tempVec3_1);
                  Vec3.subtract(vec, _tempVec3, _tempVec3_1);
                }
                out.set(vec);
              }
              _scrollChildren(deltaMove) {
                this._clampDelta(deltaMove);
                const realMove = deltaMove;
                let outOfBoundary;
                if (this.elastic) {
                  outOfBoundary = this._getHowMuchOutOfBoundary();
                  realMove.x *= outOfBoundary.x === 0 ? 1 : 0.5;
                  realMove.y *= outOfBoundary.y === 0 ? 1 : 0.5;
                }
                if (!this.elastic) {
                  outOfBoundary = this._getHowMuchOutOfBoundary(realMove);
                  realMove.add(outOfBoundary);
                }
                let verticalScrollEventType = EventType$2.NONE;
                let horizontalScrollEventType = EventType$2.NONE;
                if (this._content) {
                  const {
                    anchorX,
                    anchorY,
                    width,
                    height
                  } = this._content._uiProps.uiTransformComp;
                  const pos = this._content.position || Vec3.ZERO;
                  if (this.vertical) {
                    if (realMove.y > 0) {
                      const icBottomPos = pos.y - anchorY * height;
                      if (icBottomPos + realMove.y >= this._bottomBoundary) {
                        verticalScrollEventType = EventType$2.SCROLL_TO_BOTTOM;
                      }
                    } else if (realMove.y < 0) {
                      const icTopPos = pos.y - anchorY * height + height;
                      if (icTopPos + realMove.y <= this._topBoundary) {
                        verticalScrollEventType = EventType$2.SCROLL_TO_TOP;
                      }
                    }
                  }
                  if (this.horizontal) {
                    if (realMove.x < 0) {
                      const icRightPos = pos.x - anchorX * width + width;
                      if (icRightPos + realMove.x <= this._rightBoundary) {
                        horizontalScrollEventType = EventType$2.SCROLL_TO_RIGHT;
                      }
                    } else if (realMove.x > 0) {
                      const icLeftPos = pos.x - anchorX * width;
                      if (icLeftPos + realMove.x >= this._leftBoundary) {
                        horizontalScrollEventType = EventType$2.SCROLL_TO_LEFT;
                      }
                    }
                  }
                }
                this._moveContent(realMove, false);
                if (this.horizontal && realMove.x !== 0 || this.vertical && realMove.y !== 0) {
                  if (!this._scrolling) {
                    this._scrolling = true;
                    this._dispatchEvent(EventType$2.SCROLL_BEGAN);
                  }
                  this._dispatchEvent(EventType$2.SCROLLING);
                }
                if (verticalScrollEventType !== EventType$2.NONE) {
                  this._dispatchEvent(verticalScrollEventType);
                }
                if (horizontalScrollEventType !== EventType$2.NONE) {
                  this._dispatchEvent(horizontalScrollEventType);
                }
              }
              _handlePressLogic() {
                if (this._autoScrolling) {
                  this._dispatchEvent(EventType$2.SCROLL_ENDED);
                }
                this._autoScrolling = false;
                this._isBouncing = false;
                this._touchMovePreviousTimestamp = getTimeInMilliseconds();
                this._touchMoveDisplacements.length = 0;
                this._touchMoveTimeDeltas.length = 0;
                this._onScrollBarTouchBegan();
              }
              _clampDelta(out) {
                if (this._content && this.view) {
                  const scrollViewSize = this.view.contentSize;
                  const uiTrans = this._content._uiProps.uiTransformComp;
                  if (uiTrans.width < scrollViewSize.width) {
                    out.x = 0;
                  }
                  if (uiTrans.height < scrollViewSize.height) {
                    out.y = 0;
                  }
                }
              }
              _gatherTouchMove(delta) {
                const clampDt = delta.clone();
                this._clampDelta(clampDt);
                while (this._touchMoveDisplacements.length >= NUMBER_OF_GATHERED_TOUCHES_FOR_MOVE_SPEED) {
                  this._touchMoveDisplacements.shift();
                  this._touchMoveTimeDeltas.shift();
                }
                this._touchMoveDisplacements.push(clampDt);
                const timeStamp = getTimeInMilliseconds();
                this._touchMoveTimeDeltas.push((timeStamp - this._touchMovePreviousTimestamp) / 1000);
                this._touchMovePreviousTimestamp = timeStamp;
              }
              _startBounceBackIfNeeded() {
                if (!this.elastic) {
                  return false;
                }
                const bounceBackAmount = this._getHowMuchOutOfBoundary();
                this._clampDelta(bounceBackAmount);
                if (bounceBackAmount.equals(Vec3.ZERO, EPSILON)) {
                  return false;
                }
                const bounceBackTime = Math.max(this.bounceDuration, 0);
                this._startAutoScroll(bounceBackAmount, bounceBackTime, true);
                if (!this._isBouncing) {
                  if (bounceBackAmount.y > 0) {
                    this._dispatchEvent(EventType$2.BOUNCE_TOP);
                  }
                  if (bounceBackAmount.y < 0) {
                    this._dispatchEvent(EventType$2.BOUNCE_BOTTOM);
                  }
                  if (bounceBackAmount.x > 0) {
                    this._dispatchEvent(EventType$2.BOUNCE_RIGHT);
                  }
                  if (bounceBackAmount.x < 0) {
                    this._dispatchEvent(EventType$2.BOUNCE_LEFT);
                  }
                  this._isBouncing = true;
                }
                return true;
              }
              _processInertiaScroll() {
                const bounceBackStarted = this._startBounceBackIfNeeded();
                if (!bounceBackStarted && this.inertia) {
                  const touchMoveVelocity = this._calculateTouchMoveVelocity();
                  if (!touchMoveVelocity.equals(_tempVec3, EPSILON) && this.brake < 1) {
                    this._startInertiaScroll(touchMoveVelocity);
                  }
                }
                this._onScrollBarTouchEnded();
              }
              _isOutOfBoundary() {
                const outOfBoundary = this._getHowMuchOutOfBoundary();
                return !outOfBoundary.equals(Vec3.ZERO, EPSILON);
              }
              _isNecessaryAutoScrollBrake() {
                if (this._autoScrollBraking) {
                  return true;
                }
                if (this._isOutOfBoundary()) {
                  if (!this._autoScrollCurrentlyOutOfBoundary) {
                    this._autoScrollCurrentlyOutOfBoundary = true;
                    this._autoScrollBraking = true;
                    Vec3.copy(this._autoScrollBrakingStartPosition, this._getContentPosition());
                    return true;
                  }
                } else {
                  this._autoScrollCurrentlyOutOfBoundary = false;
                }
                return false;
              }
              _processAutoScrolling(dt) {
                const isAutoScrollBrake = this._isNecessaryAutoScrollBrake();
                const brakingFactor = isAutoScrollBrake ? OUT_OF_BOUNDARY_BREAKING_FACTOR : 1;
                this._autoScrollAccumulatedTime += dt * (1 / brakingFactor);
                let percentage = Math.min(1, this._autoScrollAccumulatedTime / this._autoScrollTotalTime);
                if (this._autoScrollAttenuate) {
                  percentage = quintEaseOut(percentage);
                }
                const clonedAutoScrollTargetDelta = this._autoScrollTargetDelta.clone();
                clonedAutoScrollTargetDelta.multiplyScalar(percentage);
                const clonedAutoScrollStartPosition = this._autoScrollStartPosition.clone();
                clonedAutoScrollStartPosition.add(clonedAutoScrollTargetDelta);
                let reachedEnd = Math.abs(percentage - 1) <= EPSILON;
                const fireEvent = Math.abs(percentage - 1) <= this.getScrollEndedEventTiming();
                if (fireEvent && !this._isScrollEndedWithThresholdEventFired) {
                  this._dispatchEvent(EventType$2.SCROLL_ENG_WITH_THRESHOLD);
                  this._isScrollEndedWithThresholdEventFired = true;
                }
                if (this.elastic) {
                  const brakeOffsetPosition = clonedAutoScrollStartPosition.clone();
                  brakeOffsetPosition.subtract(this._autoScrollBrakingStartPosition);
                  if (isAutoScrollBrake) {
                    brakeOffsetPosition.multiplyScalar(brakingFactor);
                  }
                  clonedAutoScrollStartPosition.set(this._autoScrollBrakingStartPosition);
                  clonedAutoScrollStartPosition.add(brakeOffsetPosition);
                } else {
                  const moveDelta = clonedAutoScrollStartPosition.clone();
                  moveDelta.subtract(this.getContentPosition());
                  const outOfBoundary = this._getHowMuchOutOfBoundary(moveDelta);
                  if (!outOfBoundary.equals(Vec3.ZERO, EPSILON)) {
                    clonedAutoScrollStartPosition.add(outOfBoundary);
                    reachedEnd = true;
                  }
                }
                if (reachedEnd) {
                  this._autoScrolling = false;
                }
                const deltaMove = clonedAutoScrollStartPosition.clone();
                deltaMove.subtract(this._getContentPosition());
                this._clampDelta(deltaMove);
                this._moveContent(deltaMove, reachedEnd);
                this._dispatchEvent(EventType$2.SCROLLING);
                if (!this._autoScrolling) {
                  this._isBouncing = false;
                  this._scrolling = false;
                  this._dispatchEvent(EventType$2.SCROLL_ENDED);
                }
              }
              _checkMouseWheel(dt) {
                const currentOutOfBoundary = this._getHowMuchOutOfBoundary();
                const maxElapsedTime = 0.1;
                if (!currentOutOfBoundary.equals(Vec3.ZERO, EPSILON)) {
                  this._processInertiaScroll();
                  if (this._scrolling) {
                    this._scrolling = false;
                    if (!this._autoScrolling) {
                      this._dispatchEvent(EventType$2.SCROLL_ENDED);
                    }
                  }
                  this.unschedule(this._checkMouseWheel);
                  this._stopMouseWheel = false;
                  return;
                }
                this._mouseWheelEventElapsedTime += dt;
                if (this._mouseWheelEventElapsedTime > maxElapsedTime) {
                  this._onScrollBarTouchEnded();
                  if (this._scrolling) {
                    this._scrolling = false;
                    if (!this._autoScrolling) {
                      this._dispatchEvent(EventType$2.SCROLL_ENDED);
                    }
                  }
                  this.unschedule(this._checkMouseWheel);
                  this._stopMouseWheel = false;
                }
              }
              _calculateMovePercentDelta(options) {
                const anchor = options.anchor;
                const applyToHorizontal = options.applyToHorizontal;
                const applyToVertical = options.applyToVertical;
                this._calculateBoundary();
                anchor.clampf(Vec2.ZERO, Vec2.ONE);
                let bottomDelta = this._getContentBottomBoundary() - this._bottomBoundary;
                bottomDelta = -bottomDelta;
                let leftDelta = this._getContentLeftBoundary() - this._leftBoundary;
                leftDelta = -leftDelta;
                const moveDelta = new Vec3();
                if (this._content && this.view) {
                  let totalScrollDelta = 0;
                  const uiTrans = this._content._uiProps.uiTransformComp;
                  const contentSize = uiTrans.contentSize;
                  const scrollSize = this.view.contentSize;
                  if (applyToHorizontal) {
                    totalScrollDelta = contentSize.width - scrollSize.width;
                    moveDelta.x = leftDelta - totalScrollDelta * anchor.x;
                  }
                  if (applyToVertical) {
                    totalScrollDelta = contentSize.height - scrollSize.height;
                    moveDelta.y = bottomDelta - totalScrollDelta * anchor.y;
                  }
                }
                return moveDelta;
              }
              _moveContentToTopLeft(scrollViewSize) {
                let bottomDelta = this._getContentBottomBoundary() - this._bottomBoundary;
                bottomDelta = -bottomDelta;
                const moveDelta = new Vec3();
                let totalScrollDelta = 0;
                let leftDelta = this._getContentLeftBoundary() - this._leftBoundary;
                leftDelta = -leftDelta;
                if (this._content) {
                  const uiTrans = this._content._uiProps.uiTransformComp;
                  const contentSize = uiTrans.contentSize;
                  if (contentSize.height < scrollViewSize.height) {
                    totalScrollDelta = contentSize.height - scrollViewSize.height;
                    moveDelta.y = bottomDelta - totalScrollDelta;
                  }
                  if (contentSize.width < scrollViewSize.width) {
                    totalScrollDelta = contentSize.width - scrollViewSize.width;
                    moveDelta.x = leftDelta;
                  }
                }
                this._updateScrollBarState();
                this._moveContent(moveDelta);
                this._adjustContentOutOfBoundary();
              }
              _scaleChanged(value) {
                if (value === TransformBit.SCALE) {
                  this._calculateBoundary();
                }
              }
              _xrHoverEnter(event) {
                if (event.deviceType === DeviceType.Left) {
                  this._hoverIn = XrhoverType.LEFT;
                } else if (event.deviceType === DeviceType.Right) {
                  this._hoverIn = XrhoverType.RIGHT;
                }
              }
              _xrHoverExit(event) {
                this._hoverIn = XrhoverType.NONE;
              }
              _dispatchEventHandleInput(event) {
                let handleInputDevice;
                if (event instanceof EventGamepad) {
                  handleInputDevice = event.gamepad;
                } else if (event instanceof EventHandle) {
                  handleInputDevice = event.handleInputDevice;
                }
                let value;
                if (!this.enabledInHierarchy || this._hoverIn === XrhoverType.NONE) {
                  return;
                }
                if (this._hoverIn === XrhoverType.LEFT) {
                  value = handleInputDevice.leftStick.getValue();
                  if (!value.equals(Vec2.ZERO)) {
                    this._xrThumbStickMove(value);
                  }
                } else if (this._hoverIn === XrhoverType.RIGHT) {
                  value = handleInputDevice.rightStick.getValue();
                  if (!value.equals(Vec2.ZERO)) {
                    this._xrThumbStickMove(value);
                  }
                }
              }
              _xrThumbStickMove(event) {
                if (!this.enabledInHierarchy) {
                  return;
                }
                const deltaMove = new Vec3();
                const wheelPrecision = -62.5;
                const scrollY = event.y;
                if (this.vertical) {
                  deltaMove.set(0, scrollY * wheelPrecision, 0);
                } else if (this.horizontal) {
                  deltaMove.set(scrollY * wheelPrecision, 0, 0);
                }
                this._mouseWheelEventElapsedTime = 0;
                this._deltaAmount.add(deltaMove);
                if (!this._stopMouseWheel) {
                  this._handlePressLogic();
                  this.schedule(this._checkMouseWheel, 1.0 / 60, NaN, 0);
                  this._stopMouseWheel = true;
                }
              }
            }, _class3$5.EventType = EventType$2, _class3$5), (_initializer$8 = applyDecoratedInitializer(_class2$8.prototype, "bounceDuration", [serializable], function () {
              return 1;
            }), _initializer2$8 = applyDecoratedInitializer(_class2$8.prototype, "brake", [serializable], function () {
              return 0.5;
            }), _initializer3$6 = applyDecoratedInitializer(_class2$8.prototype, "elastic", [serializable], function () {
              return true;
            }), _initializer4$5 = applyDecoratedInitializer(_class2$8.prototype, "inertia", [serializable], function () {
              return true;
            }), _applyDecoratedDescriptor(_class2$8.prototype, "content", [_dec4$6], Object.getOwnPropertyDescriptor(_class2$8.prototype, "content"), _class2$8.prototype), _initializer5$3 = applyDecoratedInitializer(_class2$8.prototype, "horizontal", [serializable], function () {
              return true;
            }), _applyDecoratedDescriptor(_class2$8.prototype, "horizontalScrollBar", [_dec5$6], Object.getOwnPropertyDescriptor(_class2$8.prototype, "horizontalScrollBar"), _class2$8.prototype), _initializer6$2 = applyDecoratedInitializer(_class2$8.prototype, "vertical", [serializable], function () {
              return true;
            }), _applyDecoratedDescriptor(_class2$8.prototype, "verticalScrollBar", [_dec6$2], Object.getOwnPropertyDescriptor(_class2$8.prototype, "verticalScrollBar"), _class2$8.prototype), _initializer7$2 = applyDecoratedInitializer(_class2$8.prototype, "cancelInnerEvents", [serializable], function () {
              return true;
            }), _initializer8$2 = applyDecoratedInitializer(_class2$8.prototype, "scrollEvents", [_dec7$1, serializable], function () {
              return [];
            }), _initializer9$2 = applyDecoratedInitializer(_class2$8.prototype, "_content", [serializable], function () {
              return null;
            }), _initializer10$2 = applyDecoratedInitializer(_class2$8.prototype, "_horizontalScrollBar", [serializable], function () {
              return null;
            }), _initializer11$2 = applyDecoratedInitializer(_class2$8.prototype, "_verticalScrollBar", [serializable], function () {
              return null;
            })), _class2$8)) || _class$b) || _class$b) || _class$b); exports({ ScrollView: ScrollView, ScrollViewComponent: ScrollView });
            legacyCC.ScrollView = ScrollView;

            var _dec$a, _dec2$8, _dec3$8, _dec4$5, _dec5$5, _dec6$1, _class$a, _class2$7, _initializer$7, _initializer2$7, _initializer3$5, _initializer4$4, _class3$4;
            const _tempPos$1 = new Vec3();
            var Direction$2;
            (function (Direction) {
              Direction[Direction["Horizontal"] = 0] = "Horizontal";
              Direction[Direction["Vertical"] = 1] = "Vertical";
            })(Direction$2 || (Direction$2 = {}));
            ccenum(Direction$2);
            let Slider = (_dec$a = ccclass('cc.Slider'), _dec2$8 = executionOrder(110), _dec3$8 = requireComponent(UITransform), _dec4$5 = type(Sprite), _dec5$5 = type(Direction$2), _dec6$1 = type([EventHandler]), _dec$a(_class$a = _dec2$8(_class$a = _dec3$8(_class$a = (_class2$7 = (_class3$4 = class Slider extends Component {
              constructor(...args) {
                super(...args);
                this.slideEvents = _initializer$7 && _initializer$7();
                this._handle = _initializer2$7 && _initializer2$7();
                this._direction = _initializer3$5 && _initializer3$5();
                this._progress = _initializer4$4 && _initializer4$4();
                this._offset = new Vec3();
                this._dragging = false;
                this._touchHandle = false;
                this._handleLocalPos = new Vec3();
                this._touchPos = new Vec3();
              }
              get handle() {
                return this._handle;
              }
              set handle(value) {
                if (this._handle === value) {
                  return;
                }
                this._handle = value;
              }
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
                const localTouchPos = uiTrans.convertToNodeSpaceAR(this._touchPos, _tempPos$1);
                if (this.direction === Direction$2.Horizontal) {
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
                if (this._direction === Direction$2.Horizontal) {
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
                  if (this._direction === Direction$2.Horizontal) {
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
                  uiTrans.convertToNodeSpaceAR(point, _tempPos$1);
                  if (this.direction === Direction$2.Horizontal) {
                    this.progress = clamp01(0.5 + (_tempPos$1.x - this.node.position.x) / uiTrans.width);
                  } else {
                    this.progress = clamp01(0.5 + (_tempPos$1.y - this.node.position.y) / uiTrans.height);
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
            }, _class3$4.Direction = Direction$2, _class3$4), (_applyDecoratedDescriptor(_class2$7.prototype, "handle", [_dec4$5], Object.getOwnPropertyDescriptor(_class2$7.prototype, "handle"), _class2$7.prototype), _applyDecoratedDescriptor(_class2$7.prototype, "direction", [_dec5$5], Object.getOwnPropertyDescriptor(_class2$7.prototype, "direction"), _class2$7.prototype), _initializer$7 = applyDecoratedInitializer(_class2$7.prototype, "slideEvents", [_dec6$1, serializable], function () {
              return [];
            }), _initializer2$7 = applyDecoratedInitializer(_class2$7.prototype, "_handle", [serializable], function () {
              return null;
            }), _initializer3$5 = applyDecoratedInitializer(_class2$7.prototype, "_direction", [serializable], function () {
              return Direction$2.Horizontal;
            }), _initializer4$4 = applyDecoratedInitializer(_class2$7.prototype, "_progress", [serializable], function () {
              return 0.1;
            })), _class2$7)) || _class$a) || _class$a) || _class$a); exports({ Slider: Slider, SliderComponent: Slider });
            legacyCC.Slider = Slider;

            function extendsEnum(...enums) {
              {
                const kvs = [];
                for (const e of enums) {
                  for (const kv of Object.keys(e)) {
                    if (kvs.indexOf(kv) >= 0) {
                      errorID(3659);
                    } else {
                      kvs.push(kv);
                    }
                  }
                }
              }
              return Object.assign({}, ...enums);
            }

            var _dec$9, _dec2$7, _dec3$7, _dec4$4, _dec5$4, _class$9, _class2$6, _initializer$6, _initializer2$6, _initializer3$4, _class3$3;
            var EventType$1;
            (function (EventType) {
              EventType["TOGGLE"] = "toggle";
            })(EventType$1 || (EventType$1 = {}));
            let Toggle = (_dec$9 = ccclass('cc.Toggle'), _dec2$7 = executionOrder(110), _dec3$7 = requireComponent(UITransform), _dec4$4 = type(Sprite), _dec5$4 = type([EventHandler]), _dec$9(_class$9 = _dec2$7(_class$9 = _dec3$7(_class$9 = (_class2$6 = (_class3$3 = class Toggle extends Button {
              constructor(...args) {
                super(...args);
                this.checkEvents = _initializer$6 && _initializer$6();
                this._isChecked = _initializer2$6 && _initializer2$6();
                this._checkMark = _initializer3$4 && _initializer3$4();
              }
              get isChecked() {
                return this._isChecked;
              }
              set isChecked(value) {
                this._set(value);
              }
              get checkMark() {
                return this._checkMark;
              }
              set checkMark(value) {
                if (this._checkMark === value) {
                  return;
                }
                this._checkMark = value;
              }
              set _resizeToTarget(value) {
                if (value) {
                  this._resizeNodeToTargetNode();
                }
              }
              get _toggleContainer() {
                const parent = this.node.parent;
                if (legacyCC.Node.isNode(parent)) {
                  return parent.getComponent('cc.ToggleContainer');
                }
                return null;
              }
              _internalToggle() {
                this.isChecked = !this.isChecked;
              }
              _set(value, emitEvent = true) {
                if (this._isChecked == value) return;
                this._isChecked = value;
                const group = this._toggleContainer;
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
              playEffect() {
                if (this._checkMark) {
                  this._checkMark.node.active = this._isChecked;
                }
              }
              setIsCheckedWithoutNotify(value) {
                this._set(value, false);
              }
              onEnable() {
                super.onEnable();
                this.playEffect();
                {
                  this.node.on(Toggle.EventType.CLICK, this._internalToggle, this);
                }
              }
              onDisable() {
                super.onDisable();
                {
                  this.node.off(Toggle.EventType.CLICK, this._internalToggle, this);
                }
              }
              _emitToggleEvents() {
                this.node.emit(Toggle.EventType.TOGGLE, this);
                if (this.checkEvents) {
                  EventHandler.emitEvents(this.checkEvents, this);
                }
              }
            }, _class3$3.EventType = extendsEnum(EventType$1, EventType$4), _class3$3), (_applyDecoratedDescriptor(_class2$6.prototype, "checkMark", [_dec4$4], Object.getOwnPropertyDescriptor(_class2$6.prototype, "checkMark"), _class2$6.prototype), _initializer$6 = applyDecoratedInitializer(_class2$6.prototype, "checkEvents", [_dec5$4, serializable], function () {
              return [];
            }), _initializer2$6 = applyDecoratedInitializer(_class2$6.prototype, "_isChecked", [serializable], function () {
              return true;
            }), _initializer3$4 = applyDecoratedInitializer(_class2$6.prototype, "_checkMark", [serializable], function () {
              return null;
            })), _class2$6)) || _class$9) || _class$9) || _class$9); exports({ Toggle: Toggle, ToggleComponent: Toggle });
            legacyCC.Toggle = Toggle;

            var _dec$8, _dec2$6, _dec3$6, _class$8, _class2$5, _initializer$5, _initializer2$5;
            let ToggleContainer = (_dec$8 = ccclass('cc.ToggleContainer'), _dec2$6 = executionOrder(110), _dec3$6 = type([EventHandler]), _dec$8(_class$8 = _dec2$6(_class$8 = (_class2$5 = class ToggleContainer extends Component {
              constructor(...args) {
                super(...args);
                this._allowSwitchOff = _initializer$5 && _initializer$5();
                this.checkEvents = _initializer2$5 && _initializer2$5();
              }
              get allowSwitchOff() {
                return this._allowSwitchOff;
              }
              set allowSwitchOff(value) {
                this._allowSwitchOff = value;
              }
              get toggleItems() {
                return this.node.children.map(item => {
                  const toggle = item.getComponent('cc.Toggle');
                  if (toggle && toggle.enabled) {
                    return toggle;
                  }
                  return null;
                }).filter(Boolean);
              }
              onEnable() {
                this.ensureValidState();
                this.node.on(NodeEventType.CHILD_ADDED, this.ensureValidState, this);
                this.node.on(NodeEventType.CHILD_REMOVED, this.ensureValidState, this);
              }
              onDisable() {
                this.node.off(NodeEventType.CHILD_ADDED, this.ensureValidState, this);
                this.node.off(NodeEventType.CHILD_REMOVED, this.ensureValidState, this);
              }
              activeToggles() {
                return this.toggleItems.filter(x => x.isChecked);
              }
              anyTogglesChecked() {
                return !!this.toggleItems.find(x => x.isChecked);
              }
              notifyToggleCheck(toggle, emitEvent = true) {
                if (!this.enabledInHierarchy) {
                  return;
                }
                for (let i = 0; i < this.toggleItems.length; i++) {
                  const item = this.toggleItems[i];
                  if (item === toggle) {
                    continue;
                  }
                  if (emitEvent) {
                    item.isChecked = false;
                  } else {
                    item.setIsCheckedWithoutNotify(false);
                  }
                }
                if (this.checkEvents) {
                  legacyCC.Component.EventHandler.emitEvents(this.checkEvents, toggle);
                }
              }
              ensureValidState() {
                const toggles = this.toggleItems;
                if (!this._allowSwitchOff && !this.anyTogglesChecked() && toggles.length !== 0) {
                  const toggle = toggles[0];
                  toggle.isChecked = true;
                  this.notifyToggleCheck(toggle);
                }
                const activeToggles = this.activeToggles();
                if (activeToggles.length > 1) {
                  const firstToggle = activeToggles[0];
                  for (let i = 0; i < activeToggles.length; ++i) {
                    const toggle = activeToggles[i];
                    if (toggle === firstToggle) {
                      continue;
                    }
                    toggle.isChecked = false;
                  }
                }
              }
            }, (_initializer$5 = applyDecoratedInitializer(_class2$5.prototype, "_allowSwitchOff", [serializable], function () {
              return false;
            }), _initializer2$5 = applyDecoratedInitializer(_class2$5.prototype, "checkEvents", [_dec3$6, serializable], function () {
              return [];
            })), _class2$5)) || _class$8) || _class$8); exports({ ToggleContainer: ToggleContainer, ToggleContainerComponent: ToggleContainer });
            legacyCC.ToggleContainer = ToggleContainer;

            var _dec$7, _dec2$5, _dec3$5, _dec4$3, _dec5$3, _class$7, _class2$4, _initializer$4, _initializer2$4, _initializer3$3, _initializer4$3, _initializer5$2, _initializer6$1, _initializer7$1, _initializer8$1, _initializer9$1, _initializer10$1, _initializer11$1, _initializer12$1, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _class3$2;
            const _tempScale = new Vec2();
            function getReadonlyNodeSize(parent) {
              if (parent instanceof Scene) {
                return visibleRect;
              } else if (parent._uiProps.uiTransformComp) {
                return parent._uiProps.uiTransformComp.contentSize;
              } else {
                return Size.ZERO;
              }
            }
            function computeInverseTransForTarget(widgetNode, target, out_inverseTranslate, out_inverseScale) {
              if (widgetNode.parent) {
                _tempScale.set(widgetNode.parent.getScale().x, widgetNode.parent.getScale().y);
              } else {
                _tempScale.set(0, 0);
              }
              let scaleX = _tempScale.x;
              let scaleY = _tempScale.y;
              let translateX = 0;
              let translateY = 0;
              for (let node = widgetNode.parent;;) {
                if (!node) {
                  out_inverseTranslate.x = out_inverseTranslate.y = 0;
                  out_inverseScale.x = out_inverseScale.y = 1;
                  return;
                }
                const pos = node.getPosition();
                translateX += pos.x;
                translateY += pos.y;
                node = node.parent;
                if (node !== target) {
                  if (node) {
                    _tempScale.set(node.getScale().x, node.getScale().y);
                  } else {
                    _tempScale.set(0, 0);
                  }
                  const sx = _tempScale.x;
                  const sy = _tempScale.y;
                  translateX *= sx;
                  translateY *= sy;
                  scaleX *= sx;
                  scaleY *= sy;
                } else {
                  break;
                }
              }
              out_inverseScale.x = scaleX !== 0 ? 1 / scaleX : 1;
              out_inverseScale.y = scaleY !== 0 ? 1 / scaleY : 1;
              out_inverseTranslate.x = -translateX;
              out_inverseTranslate.y = -translateY;
            }
            let AlignMode;
            (function (AlignMode) {
              AlignMode[AlignMode["ONCE"] = 0] = "ONCE";
              AlignMode[AlignMode["ALWAYS"] = 1] = "ALWAYS";
              AlignMode[AlignMode["ON_WINDOW_RESIZE"] = 2] = "ON_WINDOW_RESIZE";
            })(AlignMode || (AlignMode = {}));
            ccenum(AlignMode);
            let AlignFlags;
            (function (AlignFlags) {
              AlignFlags[AlignFlags["TOP"] = 1] = "TOP";
              AlignFlags[AlignFlags["MID"] = 2] = "MID";
              AlignFlags[AlignFlags["BOT"] = 4] = "BOT";
              AlignFlags[AlignFlags["LEFT"] = 8] = "LEFT";
              AlignFlags[AlignFlags["CENTER"] = 16] = "CENTER";
              AlignFlags[AlignFlags["RIGHT"] = 32] = "RIGHT";
              AlignFlags[AlignFlags["HORIZONTAL"] = 56] = "HORIZONTAL";
              AlignFlags[AlignFlags["VERTICAL"] = 7] = "VERTICAL";
            })(AlignFlags || (AlignFlags = {}));
            const TOP_BOT = AlignFlags.TOP | AlignFlags.BOT;
            const LEFT_RIGHT = AlignFlags.LEFT | AlignFlags.RIGHT;
            let Widget = (_dec$7 = ccclass('cc.Widget'), _dec2$5 = executionOrder(110), _dec3$5 = requireComponent(UITransform), _dec4$3 = type(Node), _dec5$3 = type(AlignMode), _dec$7(_class$7 = _dec2$5(_class$7 = _dec3$5(_class$7 = (_class2$4 = (_class3$2 = class Widget extends Component {
              constructor(...args) {
                super(...args);
                this._lastPos = new Vec3();
                this._lastSize = new Size();
                this._dirty = true;
                this._hadAlignOnce = false;
                this._alignFlags = _initializer$4 && _initializer$4();
                this._target = _initializer2$4 && _initializer2$4();
                this._left = _initializer3$3 && _initializer3$3();
                this._right = _initializer4$3 && _initializer4$3();
                this._top = _initializer5$2 && _initializer5$2();
                this._bottom = _initializer6$1 && _initializer6$1();
                this._horizontalCenter = _initializer7$1 && _initializer7$1();
                this._verticalCenter = _initializer8$1 && _initializer8$1();
                this._isAbsLeft = _initializer9$1 && _initializer9$1();
                this._isAbsRight = _initializer10$1 && _initializer10$1();
                this._isAbsTop = _initializer11$1 && _initializer11$1();
                this._isAbsBottom = _initializer12$1 && _initializer12$1();
                this._isAbsHorizontalCenter = _initializer13 && _initializer13();
                this._isAbsVerticalCenter = _initializer14 && _initializer14();
                this._originalWidth = _initializer15 && _initializer15();
                this._originalHeight = _initializer16 && _initializer16();
                this._alignMode = _initializer17 && _initializer17();
                this._lockFlags = _initializer18 && _initializer18();
              }
              get target() {
                return this._target;
              }
              set target(value) {
                if (this._target === value) {
                  return;
                }
                this._unregisterTargetEvents();
                this._target = value;
                this._registerTargetEvents();
                this._validateTargetInDEV();
                this._recursiveDirty();
              }
              get isAlignTop() {
                return (this._alignFlags & AlignFlags.TOP) > 0;
              }
              set isAlignTop(value) {
                this._setAlign(AlignFlags.TOP, value);
                this._recursiveDirty();
              }
              get isAlignBottom() {
                return (this._alignFlags & AlignFlags.BOT) > 0;
              }
              set isAlignBottom(value) {
                this._setAlign(AlignFlags.BOT, value);
                this._recursiveDirty();
              }
              get isAlignLeft() {
                return (this._alignFlags & AlignFlags.LEFT) > 0;
              }
              set isAlignLeft(value) {
                this._setAlign(AlignFlags.LEFT, value);
                this._recursiveDirty();
              }
              get isAlignRight() {
                return (this._alignFlags & AlignFlags.RIGHT) > 0;
              }
              set isAlignRight(value) {
                this._setAlign(AlignFlags.RIGHT, value);
                this._recursiveDirty();
              }
              get isAlignVerticalCenter() {
                return (this._alignFlags & AlignFlags.MID) > 0;
              }
              set isAlignVerticalCenter(value) {
                if (value) {
                  this.isAlignTop = false;
                  this.isAlignBottom = false;
                  this._alignFlags |= AlignFlags.MID;
                } else {
                  this._alignFlags &= ~AlignFlags.MID;
                }
                this._recursiveDirty();
              }
              get isAlignHorizontalCenter() {
                return (this._alignFlags & AlignFlags.CENTER) > 0;
              }
              set isAlignHorizontalCenter(value) {
                if (value) {
                  this.isAlignLeft = false;
                  this.isAlignRight = false;
                  this._alignFlags |= AlignFlags.CENTER;
                } else {
                  this._alignFlags &= ~AlignFlags.CENTER;
                }
                this._recursiveDirty();
              }
              get isStretchWidth() {
                return (this._alignFlags & LEFT_RIGHT) === LEFT_RIGHT;
              }
              get isStretchHeight() {
                return (this._alignFlags & TOP_BOT) === TOP_BOT;
              }
              get top() {
                return this._top;
              }
              set top(value) {
                this._top = value;
                this._recursiveDirty();
              }
              get editorTop() {
                return this._isAbsTop ? this._top : this._top * 100;
              }
              set editorTop(value) {
                this._top = this._isAbsTop ? value : value / 100;
                this._recursiveDirty();
              }
              get bottom() {
                return this._bottom;
              }
              set bottom(value) {
                this._bottom = value;
                this._recursiveDirty();
              }
              get editorBottom() {
                return this._isAbsBottom ? this._bottom : this._bottom * 100;
              }
              set editorBottom(value) {
                this._bottom = this._isAbsBottom ? value : value / 100;
                this._recursiveDirty();
              }
              get left() {
                return this._left;
              }
              set left(value) {
                this._left = value;
                this._recursiveDirty();
              }
              get editorLeft() {
                return this._isAbsLeft ? this._left : this._left * 100;
              }
              set editorLeft(value) {
                this._left = this._isAbsLeft ? value : value / 100;
                this._recursiveDirty();
              }
              get right() {
                return this._right;
              }
              set right(value) {
                this._right = value;
                this._recursiveDirty();
              }
              get editorRight() {
                return this._isAbsRight ? this._right : this._right * 100;
              }
              set editorRight(value) {
                this._right = this._isAbsRight ? value : value / 100;
                this._recursiveDirty();
              }
              get horizontalCenter() {
                return this._horizontalCenter;
              }
              set horizontalCenter(value) {
                this._horizontalCenter = value;
                this._recursiveDirty();
              }
              get editorHorizontalCenter() {
                return this._isAbsHorizontalCenter ? this._horizontalCenter : this._horizontalCenter * 100;
              }
              set editorHorizontalCenter(value) {
                this._horizontalCenter = this._isAbsHorizontalCenter ? value : value / 100;
                this._recursiveDirty();
              }
              get verticalCenter() {
                return this._verticalCenter;
              }
              set verticalCenter(value) {
                this._verticalCenter = value;
                this._recursiveDirty();
              }
              get editorVerticalCenter() {
                return this._isAbsVerticalCenter ? this._verticalCenter : this._verticalCenter * 100;
              }
              set editorVerticalCenter(value) {
                this._verticalCenter = this._isAbsVerticalCenter ? value : value / 100;
                this._recursiveDirty();
              }
              get isAbsoluteTop() {
                return this._isAbsTop;
              }
              set isAbsoluteTop(value) {
                if (this._isAbsTop === value) {
                  return;
                }
                this._isAbsTop = value;
                this._autoChangedValue(AlignFlags.TOP, this._isAbsTop);
              }
              get isAbsoluteBottom() {
                return this._isAbsBottom;
              }
              set isAbsoluteBottom(value) {
                if (this._isAbsBottom === value) {
                  return;
                }
                this._isAbsBottom = value;
                this._autoChangedValue(AlignFlags.BOT, this._isAbsBottom);
              }
              get isAbsoluteLeft() {
                return this._isAbsLeft;
              }
              set isAbsoluteLeft(value) {
                if (this._isAbsLeft === value) {
                  return;
                }
                this._isAbsLeft = value;
                this._autoChangedValue(AlignFlags.LEFT, this._isAbsLeft);
              }
              get isAbsoluteRight() {
                return this._isAbsRight;
              }
              set isAbsoluteRight(value) {
                if (this._isAbsRight === value) {
                  return;
                }
                this._isAbsRight = value;
                this._autoChangedValue(AlignFlags.RIGHT, this._isAbsRight);
              }
              get isAbsoluteHorizontalCenter() {
                return this._isAbsHorizontalCenter;
              }
              set isAbsoluteHorizontalCenter(value) {
                if (this._isAbsHorizontalCenter === value) {
                  return;
                }
                this._isAbsHorizontalCenter = value;
                this._autoChangedValue(AlignFlags.CENTER, this._isAbsHorizontalCenter);
              }
              get isAbsoluteVerticalCenter() {
                return this._isAbsVerticalCenter;
              }
              set isAbsoluteVerticalCenter(value) {
                if (this._isAbsVerticalCenter === value) {
                  return;
                }
                this._isAbsVerticalCenter = value;
                this._autoChangedValue(AlignFlags.MID, this._isAbsVerticalCenter);
              }
              get alignMode() {
                return this._alignMode;
              }
              set alignMode(value) {
                this._alignMode = value;
                this._recursiveDirty();
              }
              get alignFlags() {
                return this._alignFlags;
              }
              set alignFlags(value) {
                if (this._alignFlags === value) {
                  return;
                }
                this._alignFlags = value;
                this._recursiveDirty();
              }
              updateAlignment() {
                legacyCC._widgetManager.updateAlignment(this.node);
              }
              _validateTargetInDEV() {
                const target = this._target;
                if (target) {
                  const isParent = this.node !== target && this.node.isChildOf(target);
                  if (!isParent) {
                    errorID(6500);
                    this.target = null;
                  }
                }
              }
              setDirty() {
                this._recursiveDirty();
              }
              onEnable() {
                this.node.getPosition(this._lastPos);
                this._lastSize.set(this.node._uiProps.uiTransformComp.contentSize);
                legacyCC._widgetManager.add(this);
                this._hadAlignOnce = false;
                this._registerEvent();
                this._registerTargetEvents();
              }
              onDisable() {
                legacyCC._widgetManager.remove(this);
                this._unregisterEvent();
                this._unregisterTargetEvents();
              }
              onDestroy() {
                this._removeParentEvent();
              }
              _adjustWidgetToAllowMovingInEditor(eventType) {}
              _adjustWidgetToAllowResizingInEditor() {}
              _adjustWidgetToAnchorChanged() {
                this.setDirty();
              }
              _adjustTargetToParentChanged(oldParent) {
                if (oldParent) {
                  this._unregisterOldParentEvents(oldParent);
                }
                if (this.node.getParent()) {
                  this._registerTargetEvents();
                }
                this._setDirtyByMode();
              }
              _registerEvent() {
                {
                  this.node.on(NodeEventType.TRANSFORM_CHANGED, this._setDirtyByMode, this);
                  this.node.on(NodeEventType.SIZE_CHANGED, this._setDirtyByMode, this);
                }
                this.node.on(NodeEventType.ANCHOR_CHANGED, this._adjustWidgetToAnchorChanged, this);
                this.node.on(NodeEventType.PARENT_CHANGED, this._adjustTargetToParentChanged, this);
              }
              _unregisterEvent() {
                {
                  this.node.off(NodeEventType.TRANSFORM_CHANGED, this._setDirtyByMode, this);
                  this.node.off(NodeEventType.SIZE_CHANGED, this._setDirtyByMode, this);
                }
                this.node.off(NodeEventType.ANCHOR_CHANGED, this._adjustWidgetToAnchorChanged, this);
              }
              _removeParentEvent() {
                this.node.off(NodeEventType.PARENT_CHANGED, this._adjustTargetToParentChanged, this);
              }
              _autoChangedValue(flag, isAbs) {
                const current = (this._alignFlags & flag) > 0;
                if (!current) {
                  return;
                }
                const parentUiProps = this.node.parent && this.node.parent._uiProps;
                const parentTrans = parentUiProps && parentUiProps.uiTransformComp;
                const size = parentTrans ? parentTrans.contentSize : visibleRect;
                if (this.isAlignLeft && flag === AlignFlags.LEFT) {
                  this._left = isAbs ? this._left * size.width : this._left / size.width;
                } else if (this.isAlignRight && flag === AlignFlags.RIGHT) {
                  this._right = isAbs ? this._right * size.width : this._right / size.width;
                } else if (this.isAlignHorizontalCenter && flag === AlignFlags.CENTER) {
                  this._horizontalCenter = isAbs ? this._horizontalCenter * size.width : this._horizontalCenter / size.width;
                } else if (this.isAlignTop && flag === AlignFlags.TOP) {
                  this._top = isAbs ? this._top * size.height : this._top / size.height;
                } else if (this.isAlignBottom && flag === AlignFlags.BOT) {
                  this._bottom = isAbs ? this._bottom * size.height : this._bottom / size.height;
                } else if (this.isAbsoluteVerticalCenter && flag === AlignFlags.MID) {
                  this._verticalCenter = isAbs ? this._verticalCenter / size.height : this._verticalCenter / size.height;
                }
                this._recursiveDirty();
              }
              _registerTargetEvents() {
                const target = this._target || this.node.parent;
                if (target) {
                  if (target.getComponent(UITransform)) {
                    target.on(NodeEventType.TRANSFORM_CHANGED, this._setDirtyByMode, this);
                    target.on(NodeEventType.SIZE_CHANGED, this._setDirtyByMode, this);
                    target.on(NodeEventType.ANCHOR_CHANGED, this._setDirtyByMode, this);
                  }
                }
              }
              _unregisterTargetEvents() {
                const target = this._target || this.node.parent;
                if (target) {
                  target.off(NodeEventType.TRANSFORM_CHANGED, this._setDirtyByMode, this);
                  target.off(NodeEventType.SIZE_CHANGED, this._setDirtyByMode, this);
                  target.off(NodeEventType.ANCHOR_CHANGED, this._setDirtyByMode, this);
                }
              }
              _unregisterOldParentEvents(oldParent) {
                const target = this._target || oldParent;
                if (target) {
                  target.off(NodeEventType.TRANSFORM_CHANGED, this._setDirtyByMode, this);
                  target.off(NodeEventType.SIZE_CHANGED, this._setDirtyByMode, this);
                }
              }
              _setDirtyByMode() {
                if (this.alignMode === AlignMode.ALWAYS || EDITOR_NOT_IN_PREVIEW) {
                  this._recursiveDirty();
                }
              }
              _setAlign(flag, isAlign) {
                const current = (this._alignFlags & flag) > 0;
                if (isAlign === current) {
                  return;
                }
                const isHorizontal = (flag & LEFT_RIGHT) > 0;
                const trans = this.node._uiProps.uiTransformComp;
                if (isAlign) {
                  this._alignFlags |= flag;
                  if (isHorizontal) {
                    this.isAlignHorizontalCenter = false;
                    if (this.isStretchWidth) {
                      this._originalWidth = trans.width;
                    }
                  } else {
                    this.isAlignVerticalCenter = false;
                    if (this.isStretchHeight) {
                      this._originalHeight = trans.height;
                    }
                  }
                } else {
                  if (isHorizontal) {
                    if (this.isStretchWidth) {
                      trans.width = this._originalWidth;
                    }
                  } else if (this.isStretchHeight) {
                    trans.height = this._originalHeight;
                  }
                  this._alignFlags &= ~flag;
                }
              }
              _recursiveDirty() {
                if (this._dirty) {
                  return;
                }
                this._dirty = true;
              }
            }, _class3$2.AlignMode = AlignMode, _class3$2), (_applyDecoratedDescriptor(_class2$4.prototype, "target", [_dec4$3], Object.getOwnPropertyDescriptor(_class2$4.prototype, "target"), _class2$4.prototype), _applyDecoratedDescriptor(_class2$4.prototype, "alignMode", [_dec5$3], Object.getOwnPropertyDescriptor(_class2$4.prototype, "alignMode"), _class2$4.prototype), _initializer$4 = applyDecoratedInitializer(_class2$4.prototype, "_alignFlags", [serializable], function () {
              return 0;
            }), _initializer2$4 = applyDecoratedInitializer(_class2$4.prototype, "_target", [serializable], function () {
              return null;
            }), _initializer3$3 = applyDecoratedInitializer(_class2$4.prototype, "_left", [serializable], function () {
              return 0;
            }), _initializer4$3 = applyDecoratedInitializer(_class2$4.prototype, "_right", [serializable], function () {
              return 0;
            }), _initializer5$2 = applyDecoratedInitializer(_class2$4.prototype, "_top", [serializable], function () {
              return 0;
            }), _initializer6$1 = applyDecoratedInitializer(_class2$4.prototype, "_bottom", [serializable], function () {
              return 0;
            }), _initializer7$1 = applyDecoratedInitializer(_class2$4.prototype, "_horizontalCenter", [serializable], function () {
              return 0;
            }), _initializer8$1 = applyDecoratedInitializer(_class2$4.prototype, "_verticalCenter", [serializable], function () {
              return 0;
            }), _initializer9$1 = applyDecoratedInitializer(_class2$4.prototype, "_isAbsLeft", [serializable], function () {
              return true;
            }), _initializer10$1 = applyDecoratedInitializer(_class2$4.prototype, "_isAbsRight", [serializable], function () {
              return true;
            }), _initializer11$1 = applyDecoratedInitializer(_class2$4.prototype, "_isAbsTop", [serializable], function () {
              return true;
            }), _initializer12$1 = applyDecoratedInitializer(_class2$4.prototype, "_isAbsBottom", [serializable], function () {
              return true;
            }), _initializer13 = applyDecoratedInitializer(_class2$4.prototype, "_isAbsHorizontalCenter", [serializable], function () {
              return true;
            }), _initializer14 = applyDecoratedInitializer(_class2$4.prototype, "_isAbsVerticalCenter", [serializable], function () {
              return true;
            }), _initializer15 = applyDecoratedInitializer(_class2$4.prototype, "_originalWidth", [serializable], function () {
              return 0;
            }), _initializer16 = applyDecoratedInitializer(_class2$4.prototype, "_originalHeight", [serializable], function () {
              return 0;
            }), _initializer17 = applyDecoratedInitializer(_class2$4.prototype, "_alignMode", [serializable], function () {
              return AlignMode.ON_WINDOW_RESIZE;
            }), _initializer18 = applyDecoratedInitializer(_class2$4.prototype, "_lockFlags", [serializable, editorOnly], function () {
              return 0;
            })), _class2$4)) || _class$7) || _class$7) || _class$7); exports({ Widget: Widget, WidgetComponent: Widget });
            legacyCC.internal.computeInverseTransForTarget = computeInverseTransForTarget;
            legacyCC.internal.getReadonlyNodeSize = getReadonlyNodeSize;
            legacyCC.Widget = Widget;

            var _dec$6, _dec2$4, _dec3$4, _dec4$2, _dec5$2, _class$6, _class2$3, _initializer$3, _initializer2$3, _initializer3$2, _initializer4$2, _class3$1;
            const _color = new Color();
            var Direction$1;
            (function (Direction) {
              Direction[Direction["HORIZONTAL"] = 0] = "HORIZONTAL";
              Direction[Direction["VERTICAL"] = 1] = "VERTICAL";
            })(Direction$1 || (Direction$1 = {}));
            ccenum(Direction$1);
            let PageViewIndicator = (_dec$6 = ccclass('cc.PageViewIndicator'), _dec2$4 = executionOrder(110), _dec3$4 = type(SpriteFrame), _dec4$2 = type(Direction$1), _dec5$2 = type(Size), _dec$6(_class$6 = _dec2$4(_class$6 = (_class2$3 = (_class3$1 = class PageViewIndicator extends Component {
              constructor(...args) {
                super(...args);
                this.spacing = _initializer$3 && _initializer$3();
                this._spriteFrame = _initializer2$3 && _initializer2$3();
                this._direction = _initializer3$2 && _initializer3$2();
                this._cellSize = _initializer4$2 && _initializer4$2();
                this._layout = null;
                this._pageView = null;
                this._indicators = [];
              }
              get spriteFrame() {
                return this._spriteFrame;
              }
              set spriteFrame(value) {
                if (this._spriteFrame === value) {
                  return;
                }
                this._spriteFrame = value;
              }
              get direction() {
                return this._direction;
              }
              set direction(value) {
                if (this._direction === value) {
                  return;
                }
                this._direction = value;
              }
              get cellSize() {
                return this._cellSize;
              }
              set cellSize(value) {
                if (this._cellSize === value) {
                  return;
                }
                this._cellSize = value;
              }
              onLoad() {
                this._updateLayout();
              }
              setPageView(target) {
                this._pageView = target;
                this._refresh();
              }
              _updateLayout() {
                this._layout = this.getComponent(Layout);
                if (!this._layout) {
                  this._layout = this.addComponent(Layout);
                }
                const layout = this._layout;
                if (this.direction === Direction$1.HORIZONTAL) {
                  layout.type = Layout.Type.HORIZONTAL;
                  layout.spacingX = this.spacing;
                } else if (this.direction === Direction$1.VERTICAL) {
                  layout.type = Layout.Type.VERTICAL;
                  layout.spacingY = this.spacing;
                }
                layout.resizeMode = Layout.ResizeMode.CONTAINER;
              }
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
            }, _class3$1.Direction = Direction$1, _class3$1), (_applyDecoratedDescriptor(_class2$3.prototype, "spriteFrame", [_dec3$4], Object.getOwnPropertyDescriptor(_class2$3.prototype, "spriteFrame"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "direction", [_dec4$2], Object.getOwnPropertyDescriptor(_class2$3.prototype, "direction"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "cellSize", [_dec5$2], Object.getOwnPropertyDescriptor(_class2$3.prototype, "cellSize"), _class2$3.prototype), _initializer$3 = applyDecoratedInitializer(_class2$3.prototype, "spacing", [serializable], function () {
              return 0;
            }), _initializer2$3 = applyDecoratedInitializer(_class2$3.prototype, "_spriteFrame", [serializable], function () {
              return null;
            }), _initializer3$2 = applyDecoratedInitializer(_class2$3.prototype, "_direction", [serializable], function () {
              return Direction$1.HORIZONTAL;
            }), _initializer4$2 = applyDecoratedInitializer(_class2$3.prototype, "_cellSize", [serializable], function () {
              return new Size(20, 20);
            })), _class2$3)) || _class$6) || _class$6); exports({ PageViewIndicator: PageViewIndicator, PageViewIndicatorComponent: PageViewIndicator });
            legacyCC.PageViewIndicator = PageViewIndicator;

            var _dec$5, _dec2$3, _dec3$3, _dec4$1, _dec5$1, _dec6, _dec7, _dec8, _dec9, _class$5, _class2$2, _initializer$2, _initializer2$2, _initializer3$1, _initializer4$1, _initializer5$1, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _class3;
            const _tempVec2 = new Vec2();
            var SizeMode;
            (function (SizeMode) {
              SizeMode[SizeMode["Unified"] = 0] = "Unified";
              SizeMode[SizeMode["Free"] = 1] = "Free";
            })(SizeMode || (SizeMode = {}));
            ccenum(SizeMode);
            var Direction;
            (function (Direction) {
              Direction[Direction["Horizontal"] = 0] = "Horizontal";
              Direction[Direction["Vertical"] = 1] = "Vertical";
            })(Direction || (Direction = {}));
            ccenum(Direction);
            var EventType;
            (function (EventType) {
              EventType["PAGE_TURNING"] = "page-turning";
            })(EventType || (EventType = {}));
            let PageView = (_dec$5 = ccclass('cc.PageView'), _dec2$3 = executionOrder(110), _dec3$3 = type(SizeMode), _dec4$1 = type(Direction), _dec5$1 = type(PageViewIndicator), _dec6 = type(ScrollBar), _dec7 = type(ScrollBar), _dec8 = type([EventHandler]), _dec9 = type([EventHandler]), _dec$5(_class$5 = _dec2$3(_class$5 = (_class2$2 = (_class3 = class PageView extends ScrollView {
              constructor(...args) {
                super(...args);
                this.autoPageTurningThreshold = _initializer$2 && _initializer$2();
                this.horizontal = _initializer2$2 && _initializer2$2();
                this.vertical = _initializer3$1 && _initializer3$1();
                this.cancelInnerEvents = _initializer4$1 && _initializer4$1();
                this.scrollEvents = _initializer5$1 && _initializer5$1();
                this.pageTurningSpeed = _initializer6 && _initializer6();
                this.pageEvents = _initializer7 && _initializer7();
                this._sizeMode = _initializer8 && _initializer8();
                this._direction = _initializer9 && _initializer9();
                this._scrollThreshold = _initializer10 && _initializer10();
                this._pageTurningEventTiming = _initializer11 && _initializer11();
                this._indicator = _initializer12 && _initializer12();
                this._curPageIdx = 0;
                this._lastPageIdx = 0;
                this._pages = [];
                this._initContentPos = new Vec3();
                this._scrollCenterOffsetX = [];
                this._scrollCenterOffsetY = [];
                this._touchBeganPosition = new Vec2();
                this._touchEndPosition = new Vec2();
              }
              get sizeMode() {
                return this._sizeMode;
              }
              set sizeMode(value) {
                if (this._sizeMode === value) {
                  return;
                }
                this._sizeMode = value;
                this._syncSizeMode();
              }
              get direction() {
                return this._direction;
              }
              set direction(value) {
                if (this._direction === value) {
                  return;
                }
                this._direction = value;
                this._syncScrollDirection();
              }
              get scrollThreshold() {
                return this._scrollThreshold;
              }
              set scrollThreshold(value) {
                if (this._scrollThreshold === value) {
                  return;
                }
                this._scrollThreshold = value;
              }
              get pageTurningEventTiming() {
                return this._pageTurningEventTiming;
              }
              set pageTurningEventTiming(value) {
                if (this._pageTurningEventTiming === value) {
                  return;
                }
                this._pageTurningEventTiming = value;
              }
              get indicator() {
                return this._indicator;
              }
              set indicator(value) {
                if (this._indicator === value) {
                  return;
                }
                this._indicator = value;
                if (this.indicator) {
                  this.indicator.setPageView(this);
                }
              }
              get curPageIdx() {
                return this._curPageIdx;
              }
              get verticalScrollBar() {
                return super.verticalScrollBar;
              }
              set verticalScrollBar(value) {
                super.verticalScrollBar = value;
              }
              get horizontalScrollBar() {
                return super.horizontalScrollBar;
              }
              set horizontalScrollBar(value) {
                super.horizontalScrollBar = value;
              }
              onEnable() {
                super.onEnable();
                this.node.on(NodeEventType.SIZE_CHANGED, this._updateAllPagesSize, this);
                {
                  this.node.on(PageView.EventType.SCROLL_ENG_WITH_THRESHOLD, this._dispatchPageTurningEvent, this);
                }
              }
              onDisable() {
                super.onDisable();
                this.node.off(NodeEventType.SIZE_CHANGED, this._updateAllPagesSize, this);
                {
                  this.node.off(PageView.EventType.SCROLL_ENG_WITH_THRESHOLD, this._dispatchPageTurningEvent, this);
                }
              }
              onLoad() {
                this._initPages();
                if (this.indicator) {
                  this.indicator.setPageView(this);
                }
              }
              getCurrentPageIndex() {
                return this._curPageIdx;
              }
              setCurrentPageIndex(index) {
                this.scrollToPage(index, 1);
              }
              getPages() {
                return this._pages;
              }
              addPage(page) {
                if (!page || this._pages.indexOf(page) !== -1 || !this.content) {
                  return;
                }
                if (!page._uiProps.uiTransformComp) {
                  logID(4301);
                  return;
                }
                this.content.addChild(page);
                this._pages.push(page);
                this._updatePageView();
              }
              insertPage(page, index) {
                if (index < 0 || !page || this._pages.indexOf(page) !== -1 || !this.content) {
                  return;
                }
                const pageCount = this._pages.length;
                if (index >= pageCount) {
                  this.addPage(page);
                } else {
                  if (!page._uiProps.uiTransformComp) {
                    logID(4301);
                    return;
                  }
                  this._pages.splice(index, 0, page);
                  this.content.insertChild(page, index);
                  this._updatePageView();
                }
              }
              removePage(page) {
                if (!page || !this.content) {
                  return;
                }
                const index = this._pages.indexOf(page);
                if (index === -1) {
                  warnID(4300, page.name);
                  return;
                }
                this.removePageAtIndex(index);
              }
              removePageAtIndex(index) {
                const pageList = this._pages;
                if (index < 0 || index >= pageList.length) {
                  return;
                }
                const page = pageList[index];
                if (!page || !this.content) {
                  return;
                }
                this.content.removeChild(page);
                pageList.splice(index, 1);
                this._updatePageView();
              }
              removeAllPages() {
                if (!this.content) {
                  return;
                }
                const locPages = this._pages;
                for (let i = 0, len = locPages.length; i < len; i++) {
                  this.content.removeChild(locPages[i]);
                }
                this._pages.length = 0;
                this._updatePageView();
              }
              scrollToPage(idx, timeInSecond = 0.3) {
                if (idx < 0 || idx >= this._pages.length) {
                  return;
                }
                this._curPageIdx = idx;
                this.scrollToOffset(this._moveOffsetValue(idx), timeInSecond, true);
                if (this.indicator) {
                  this.indicator._changedState();
                }
              }
              getScrollEndedEventTiming() {
                return this.pageTurningEventTiming;
              }
              _updatePageView() {
                if (!this.content) {
                  return;
                }
                const layout = this.content.getComponent(Layout);
                if (layout && layout.enabled) {
                  layout.updateLayout();
                }
                const pageCount = this._pages.length;
                if (this._curPageIdx >= pageCount) {
                  this._curPageIdx = pageCount === 0 ? 0 : pageCount - 1;
                  this._lastPageIdx = this._curPageIdx;
                }
                const contentPos = this._initContentPos;
                for (let i = 0; i < pageCount; ++i) {
                  const page = this._pages[i];
                  const pos = page.position;
                  if (this.direction === Direction.Horizontal) {
                    this._scrollCenterOffsetX[i] = Math.abs(contentPos.x + pos.x);
                  } else {
                    this._scrollCenterOffsetY[i] = Math.abs(contentPos.y + pos.y);
                  }
                }
                if (this.indicator) {
                  this.indicator._refresh();
                }
              }
              _updateAllPagesSize() {
                const viewTrans = this.view;
                if (!this.content || !viewTrans) {
                  return;
                }
                if (this._sizeMode !== SizeMode.Unified) {
                  return;
                }
                const locPages = this._pages;
                const selfSize = viewTrans.contentSize;
                for (let i = 0, len = locPages.length; i < len; i++) {
                  locPages[i]._uiProps.uiTransformComp.setContentSize(selfSize);
                }
              }
              _handleReleaseLogic() {
                this._autoScrollToPage();
                if (this._scrolling) {
                  this._scrolling = false;
                  if (!this._autoScrolling) {
                    this._dispatchEvent(PageView.EventType.SCROLL_ENDED);
                  }
                }
              }
              _onTouchBegan(event, captureListeners) {
                event.touch.getUILocation(_tempVec2);
                Vec2.set(this._touchBeganPosition, _tempVec2.x, _tempVec2.y);
                super._onTouchBegan(event, captureListeners);
              }
              _onTouchMoved(event, captureListeners) {
                super._onTouchMoved(event, captureListeners);
              }
              _onTouchEnded(event, captureListeners) {
                event.touch.getUILocation(_tempVec2);
                Vec2.set(this._touchEndPosition, _tempVec2.x, _tempVec2.y);
                super._onTouchEnded(event, captureListeners);
              }
              _onTouchCancelled(event, captureListeners) {
                event.touch.getUILocation(_tempVec2);
                Vec2.set(this._touchEndPosition, _tempVec2.x, _tempVec2.y);
                super._onTouchCancelled(event, captureListeners);
              }
              _onMouseWheel() {}
              _syncScrollDirection() {
                this.horizontal = this.direction === Direction.Horizontal;
                this.vertical = this.direction === Direction.Vertical;
              }
              _syncSizeMode() {
                const viewTrans = this.view;
                if (!this.content || !viewTrans) {
                  return;
                }
                const layout = this.content.getComponent(Layout);
                if (layout) {
                  if (this._sizeMode === SizeMode.Free && this._pages.length > 0) {
                    const firstPageTrans = this._pages[0]._uiProps.uiTransformComp;
                    const lastPageTrans = this._pages[this._pages.length - 1]._uiProps.uiTransformComp;
                    if (this.direction === Direction.Horizontal) {
                      layout.paddingLeft = (viewTrans.width - firstPageTrans.width) / 2;
                      layout.paddingRight = (viewTrans.width - lastPageTrans.width) / 2;
                    } else if (this.direction === Direction.Vertical) {
                      layout.paddingTop = (viewTrans.height - firstPageTrans.height) / 2;
                      layout.paddingBottom = (viewTrans.height - lastPageTrans.height) / 2;
                    }
                  }
                  layout.updateLayout();
                }
              }
              _initPages() {
                if (!this.content) {
                  return;
                }
                this._initContentPos = this.content.position;
                const children = this.content.children;
                for (let i = 0; i < children.length; ++i) {
                  const page = children[i];
                  if (this._pages.indexOf(page) >= 0) {
                    continue;
                  }
                  this._pages.push(page);
                }
                this._syncScrollDirection();
                this._syncSizeMode();
                this._updatePageView();
              }
              _dispatchPageTurningEvent() {
                if (this._lastPageIdx === this._curPageIdx) {
                  return;
                }
                this._lastPageIdx = this._curPageIdx;
                EventHandler.emitEvents(this.pageEvents, this, EventType.PAGE_TURNING);
                this.node.emit(EventType.PAGE_TURNING, this);
              }
              _isQuicklyScrollable(touchMoveVelocity) {
                if (this.direction === Direction.Horizontal) {
                  if (Math.abs(touchMoveVelocity.x) > this.autoPageTurningThreshold) {
                    return true;
                  }
                } else if (this.direction === Direction.Vertical) {
                  if (Math.abs(touchMoveVelocity.y) > this.autoPageTurningThreshold) {
                    return true;
                  }
                }
                return false;
              }
              _moveOffsetValue(idx) {
                const offset = new Vec2();
                if (this._sizeMode === SizeMode.Free) {
                  if (this.direction === Direction.Horizontal) {
                    offset.x = this._scrollCenterOffsetX[idx];
                  } else if (this.direction === Direction.Vertical) {
                    offset.y = this._scrollCenterOffsetY[idx];
                  }
                } else {
                  const viewTrans = this.view;
                  if (!viewTrans) {
                    return offset;
                  }
                  if (this.direction === Direction.Horizontal) {
                    offset.x = idx * viewTrans.width;
                  } else if (this.direction === Direction.Vertical) {
                    offset.y = idx * viewTrans.height;
                  }
                }
                return offset;
              }
              _getDragDirection(moveOffset) {
                if (this._direction === Direction.Horizontal) {
                  if (moveOffset.x === 0) {
                    return 0;
                  }
                  return moveOffset.x > 0 ? 1 : -1;
                } else {
                  if (moveOffset.y === 0) {
                    return 0;
                  }
                  return moveOffset.y < 0 ? 1 : -1;
                }
              }
              _isScrollable(offset, index, nextIndex) {
                if (this._sizeMode === SizeMode.Free) {
                  let curPageCenter = 0;
                  let nextPageCenter = 0;
                  if (this.direction === Direction.Horizontal) {
                    curPageCenter = this._scrollCenterOffsetX[index];
                    nextPageCenter = this._scrollCenterOffsetX[nextIndex];
                    return Math.abs(offset.x) >= Math.abs(curPageCenter - nextPageCenter) * this.scrollThreshold;
                  } else if (this.direction === Direction.Vertical) {
                    curPageCenter = this._scrollCenterOffsetY[index];
                    nextPageCenter = this._scrollCenterOffsetY[nextIndex];
                    return Math.abs(offset.y) >= Math.abs(curPageCenter - nextPageCenter) * this.scrollThreshold;
                  }
                } else {
                  const viewTrans = this.view;
                  if (!viewTrans) {
                    return false;
                  }
                  if (this.direction === Direction.Horizontal) {
                    return Math.abs(offset.x) >= viewTrans.width * this.scrollThreshold;
                  } else if (this.direction === Direction.Vertical) {
                    return Math.abs(offset.y) >= viewTrans.height * this.scrollThreshold;
                  }
                }
                return false;
              }
              _autoScrollToPage() {
                const bounceBackStarted = this._startBounceBackIfNeeded();
                if (bounceBackStarted) {
                  const bounceBackAmount = this._getHowMuchOutOfBoundary();
                  this._clampDelta(bounceBackAmount);
                  if (bounceBackAmount.x > 0 || bounceBackAmount.y < 0) {
                    this._curPageIdx = this._pages.length === 0 ? 0 : this._pages.length - 1;
                  }
                  if (bounceBackAmount.x < 0 || bounceBackAmount.y > 0) {
                    this._curPageIdx = 0;
                  }
                  if (this.indicator) {
                    this.indicator._changedState();
                  }
                } else {
                  const moveOffset = new Vec2();
                  Vec2.subtract(moveOffset, this._touchBeganPosition, this._touchEndPosition);
                  const index = this._curPageIdx;
                  const nextIndex = index + this._getDragDirection(moveOffset);
                  const timeInSecond = this.pageTurningSpeed * Math.abs(index - nextIndex);
                  if (nextIndex < this._pages.length) {
                    if (this._isScrollable(moveOffset, index, nextIndex)) {
                      this.scrollToPage(nextIndex, timeInSecond);
                      return;
                    } else {
                      const touchMoveVelocity = this._calculateTouchMoveVelocity();
                      if (this._isQuicklyScrollable(touchMoveVelocity)) {
                        this.scrollToPage(nextIndex, timeInSecond);
                        return;
                      }
                    }
                  }
                  this.scrollToPage(index, timeInSecond);
                }
              }
            }, _class3.SizeMode = SizeMode, _class3.Direction = Direction, _class3.EventType = extendsEnum(EventType, EventType$2), _class3), (_applyDecoratedDescriptor(_class2$2.prototype, "sizeMode", [_dec3$3], Object.getOwnPropertyDescriptor(_class2$2.prototype, "sizeMode"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "direction", [_dec4$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "direction"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "indicator", [_dec5$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "indicator"), _class2$2.prototype), _initializer$2 = applyDecoratedInitializer(_class2$2.prototype, "autoPageTurningThreshold", [serializable], function () {
              return 100;
            }), _applyDecoratedDescriptor(_class2$2.prototype, "verticalScrollBar", [_dec6, override], Object.getOwnPropertyDescriptor(_class2$2.prototype, "verticalScrollBar"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "horizontalScrollBar", [_dec7, override], Object.getOwnPropertyDescriptor(_class2$2.prototype, "horizontalScrollBar"), _class2$2.prototype), _initializer2$2 = applyDecoratedInitializer(_class2$2.prototype, "horizontal", [override, serializable], function () {
              return true;
            }), _initializer3$1 = applyDecoratedInitializer(_class2$2.prototype, "vertical", [override, serializable], function () {
              return true;
            }), _initializer4$1 = applyDecoratedInitializer(_class2$2.prototype, "cancelInnerEvents", [override, serializable], function () {
              return true;
            }), _initializer5$1 = applyDecoratedInitializer(_class2$2.prototype, "scrollEvents", [_dec8, serializable, override], function () {
              return [];
            }), _initializer6 = applyDecoratedInitializer(_class2$2.prototype, "pageTurningSpeed", [serializable], function () {
              return 0.3;
            }), _initializer7 = applyDecoratedInitializer(_class2$2.prototype, "pageEvents", [_dec9, serializable], function () {
              return [];
            }), _initializer8 = applyDecoratedInitializer(_class2$2.prototype, "_sizeMode", [serializable], function () {
              return SizeMode.Unified;
            }), _initializer9 = applyDecoratedInitializer(_class2$2.prototype, "_direction", [serializable], function () {
              return Direction.Horizontal;
            }), _initializer10 = applyDecoratedInitializer(_class2$2.prototype, "_scrollThreshold", [serializable], function () {
              return 0.5;
            }), _initializer11 = applyDecoratedInitializer(_class2$2.prototype, "_pageTurningEventTiming", [serializable], function () {
              return 0.1;
            }), _initializer12 = applyDecoratedInitializer(_class2$2.prototype, "_indicator", [serializable], function () {
              return null;
            })), _class2$2)) || _class$5) || _class$5); exports({ PageView: PageView, PageViewComponent: PageView });
            legacyCC.PageView = PageView;

            const _tempPos = new Vec3();
            const _defaultAnchor = new Vec2();
            const tInverseTranslate = new Vec2();
            const tInverseScale = new Vec2(1, 1);
            const _tempVec2_1 = new Vec2();
            const _tempVec2_2 = new Vec2();
            function align(node, widget) {
              if (widget._hadAlignOnce) return;
              if (widget.alignMode === AlignMode.ONCE) {
                widget._hadAlignOnce = true;
              }
              const hasTarget = widget.target;
              let target;
              const inverseTranslate = tInverseTranslate;
              const inverseScale = tInverseScale;
              if (hasTarget) {
                target = hasTarget;
                computeInverseTransForTarget(node, target, inverseTranslate, inverseScale);
              } else {
                target = node.parent;
              }
              const targetSize = getReadonlyNodeSize(target);
              const useGlobal = target instanceof Scene || !target.getComponent(UITransform);
              const targetAnchor = useGlobal ? _defaultAnchor : target.getComponent(UITransform).anchorPoint;
              const isRoot = useGlobal;
              node.getPosition(_tempPos);
              const uiTrans = node._uiProps.uiTransformComp;
              let x = _tempPos.x;
              let y = _tempPos.y;
              const anchor = uiTrans.anchorPoint;
              const scale = node.getScale();
              if (widget.alignFlags & AlignFlags.HORIZONTAL) {
                let localLeft = 0;
                let localRight = 0;
                const targetWidth = targetSize.width;
                if (isRoot) {
                  localLeft = visibleRect.left.x;
                  localRight = visibleRect.right.x;
                } else {
                  localLeft = -targetAnchor.x * targetWidth;
                  localRight = localLeft + targetWidth;
                }
                localLeft += widget.isAbsoluteLeft ? widget.left : widget.left * targetWidth;
                localRight -= widget.isAbsoluteRight ? widget.right : widget.right * targetWidth;
                if (hasTarget) {
                  localLeft += inverseTranslate.x;
                  localLeft *= inverseScale.x;
                  localRight += inverseTranslate.x;
                  localRight *= inverseScale.x;
                }
                let width = 0;
                let anchorX = anchor.x;
                let scaleX = scale.x;
                if (scaleX < 0) {
                  anchorX = 1.0 - anchorX;
                  scaleX = -scaleX;
                }
                if (widget.isStretchWidth) {
                  width = localRight - localLeft;
                  if (scaleX !== 0) {
                    uiTrans.width = width / scaleX;
                  }
                  x = localLeft + anchorX * width;
                } else {
                  width = uiTrans.width * scaleX;
                  if (widget.isAlignHorizontalCenter) {
                    let localHorizontalCenter = widget.isAbsoluteHorizontalCenter ? widget.horizontalCenter : widget.horizontalCenter * targetWidth;
                    let targetCenter = (0.5 - targetAnchor.x) * targetSize.width;
                    if (hasTarget) {
                      localHorizontalCenter *= inverseScale.x;
                      targetCenter += inverseTranslate.x;
                      targetCenter *= inverseScale.x;
                    }
                    x = targetCenter + (anchorX - 0.5) * width + localHorizontalCenter;
                  } else if (widget.isAlignLeft) {
                    x = localLeft + anchorX * width;
                  } else {
                    x = localRight + (anchorX - 1) * width;
                  }
                  if (!approx(scaleX, 0, EPSILON$1)) {
                    width /= scaleX;
                  } else {
                    width = uiTrans.width;
                  }
                }
                widget._lastSize.width = width;
              }
              if (widget.alignFlags & AlignFlags.VERTICAL) {
                let localTop = 0;
                let localBottom = 0;
                const targetHeight = targetSize.height;
                if (isRoot) {
                  localBottom = visibleRect.bottom.y;
                  localTop = visibleRect.top.y;
                } else {
                  localBottom = -targetAnchor.y * targetHeight;
                  localTop = localBottom + targetHeight;
                }
                localBottom += widget.isAbsoluteBottom ? widget.bottom : widget.bottom * targetHeight;
                localTop -= widget.isAbsoluteTop ? widget.top : widget.top * targetHeight;
                if (hasTarget) {
                  localBottom += inverseTranslate.y;
                  localBottom *= inverseScale.y;
                  localTop += inverseTranslate.y;
                  localTop *= inverseScale.y;
                }
                let height = 0;
                let anchorY = anchor.y;
                let scaleY = scale.y;
                if (scaleY < 0) {
                  anchorY = 1.0 - anchorY;
                  scaleY = -scaleY;
                }
                if (widget.isStretchHeight) {
                  height = localTop - localBottom;
                  if (scaleY !== 0) {
                    uiTrans.height = height / scaleY;
                  }
                  y = localBottom + anchorY * height;
                } else {
                  height = uiTrans.height * scaleY;
                  if (widget.isAlignVerticalCenter) {
                    let localVerticalCenter = widget.isAbsoluteVerticalCenter ? widget.verticalCenter : widget.verticalCenter * targetHeight;
                    let targetMiddle = (0.5 - targetAnchor.y) * targetSize.height;
                    if (hasTarget) {
                      localVerticalCenter *= inverseScale.y;
                      targetMiddle += inverseTranslate.y;
                      targetMiddle *= inverseScale.y;
                    }
                    y = targetMiddle + (anchorY - 0.5) * height + localVerticalCenter;
                  } else if (widget.isAlignBottom) {
                    y = localBottom + anchorY * height;
                  } else {
                    y = localTop + (anchorY - 1) * height;
                  }
                  if (!approx(scaleY, 0, EPSILON$1)) {
                    height /= scaleY;
                  } else {
                    height = uiTrans.height;
                  }
                }
                widget._lastSize.height = height;
              }
              node.setPosition(x, y, _tempPos.z);
              Vec3.set(widget._lastPos, x, y, _tempPos.z);
            }
            function visitNode(node) {
              const widget = node.getComponent(Widget);
              if (widget && widget.enabled) {
                {
                  widget._validateTargetInDEV();
                }
                if (!legacyCC.isValid(node, true)) {
                  return;
                }
                activeWidgets.push(widget);
              }
              const children = node.children;
              for (const child of children) {
                if (child.active) {
                  visitNode(child);
                }
              }
            }
            function refreshScene() {
              const scene = director.getScene();
              if (scene) {
                widgetManager.isAligning = true;
                if (widgetManager._nodesOrderDirty) {
                  activeWidgets.length = 0;
                  visitNode(scene);
                  widgetManager._nodesOrderDirty = false;
                }
                let widget = null;
                const iterator = widgetManager._activeWidgetsIterator;
                for (iterator.i = 0; iterator.i < activeWidgets.length; ++iterator.i) {
                  widget = activeWidgets[iterator.i];
                  if (widget._dirty) {
                    align(widget.node, widget);
                    widget._dirty = false;
                  }
                }
                widgetManager.isAligning = false;
              }
            }
            const activeWidgets = [];
            function updateAlignment(node) {
              const parent = node.parent;
              if (parent && Node.isNode(parent)) {
                updateAlignment(parent);
              }
              const widget = node.getComponent(Widget);
              if (widget && parent) {
                align(node, widget);
              }
            }
            const widgetManager = exports('widgetManager', legacyCC._widgetManager = {
              isAligning: false,
              _nodesOrderDirty: false,
              _activeWidgetsIterator: new MutableForwardIterator(activeWidgets),
              animationState: null,
              init() {
                director.on(Director.EVENT_AFTER_SCENE_LAUNCH, refreshScene);
                director.on(Director.EVENT_AFTER_UPDATE, refreshScene);
                View.instance.on('design-resolution-changed', this.onResized, this);
                {
                  const thisOnResized = this.onResized.bind(this);
                  View.instance.on('canvas-resize', thisOnResized);
                  screenAdapter.on('window-resize', thisOnResized);
                }
              },
              add(widget) {
                this._nodesOrderDirty = true;
              },
              remove(widget) {
                this._activeWidgetsIterator.remove(widget);
              },
              onResized() {
                const scene = director.getScene();
                if (scene) {
                  this.refreshWidgetOnResized(scene);
                }
              },
              refreshWidgetOnResized(node) {
                const widget = Node.isNode(node) && node.getComponent(Widget);
                if (widget && widget.enabled && (widget.alignMode === AlignMode.ON_WINDOW_RESIZE || widget.alignMode === AlignMode.ALWAYS)) {
                  widget.setDirty();
                }
                const children = node.children;
                for (const child of children) {
                  this.refreshWidgetOnResized(child);
                }
              },
              updateOffsetsToStayPut(widget, e) {
                function i(t, c) {
                  return Math.abs(t - c) > 1e-10 ? c : t;
                }
                const widgetNode = widget.node;
                let widgetParent = widgetNode.parent;
                if (widgetParent) {
                  const zero = _tempVec2_1;
                  zero.set(0, 0);
                  const one = _tempVec2_2;
                  one.set(1, 1);
                  if (widget.target) {
                    widgetParent = widget.target;
                    computeInverseTransForTarget(widgetNode, widgetParent, zero, one);
                  }
                  if (!e) {
                    return;
                  }
                  const parentTrans = widgetParent._uiProps && widgetParent._uiProps.uiTransformComp;
                  const parentAP = parentTrans ? parentTrans.anchorPoint : _defaultAnchor;
                  const trans = widgetNode._uiProps.uiTransformComp;
                  const matchSize = getReadonlyNodeSize(widgetParent);
                  const myAP = trans.anchorPoint;
                  const pos = widgetNode.getPosition();
                  const alignFlags = AlignFlags;
                  const widgetNodeScale = widgetNode.getScale();
                  let temp = 0;
                  if (e & alignFlags.LEFT) {
                    let l = -parentAP.x * matchSize.width;
                    l += zero.x;
                    l *= one.x;
                    temp = pos.x - myAP.x * trans.width * Math.abs(widgetNodeScale.x) - l;
                    if (!widget.isAbsoluteLeft) {
                      temp /= matchSize.width;
                    }
                    temp /= one.x;
                    widget.left = i(widget.left, temp);
                  }
                  if (e & alignFlags.RIGHT) {
                    let r = (1 - parentAP.x) * matchSize.width;
                    r += zero.x;
                    temp = (r *= one.x) - (pos.x + (1 - myAP.x) * trans.width * Math.abs(widgetNodeScale.x));
                    if (!widget.isAbsoluteRight) {
                      temp /= matchSize.width;
                    }
                    temp /= one.x;
                    widget.right = i(widget.right, temp);
                  }
                  if (e & alignFlags.TOP) {
                    let t = (1 - parentAP.y) * matchSize.height;
                    t += zero.y;
                    temp = (t *= one.y) - (pos.y + (1 - myAP.y) * trans.height * Math.abs(widgetNodeScale.y));
                    if (!widget.isAbsoluteTop) {
                      temp /= matchSize.height;
                    }
                    temp /= one.y;
                    widget.top = i(widget.top, temp);
                  }
                  if (e & alignFlags.BOT) {
                    let b = -parentAP.y * matchSize.height;
                    b += zero.y;
                    b *= one.y;
                    temp = pos.y - myAP.y * trans.height * Math.abs(widgetNodeScale.y) - b;
                    if (!widget.isAbsoluteBottom) {
                      temp /= matchSize.height;
                    }
                    temp /= one.y;
                    widget.bottom = i(widget.bottom, temp);
                  }
                }
              },
              updateAlignment,
              AlignMode,
              AlignFlags
            });
            director.on(Director.EVENT_INIT, () => {
              widgetManager.init();
            });

            var _dec$4, _dec2$2, _dec3$2, _class$4;
            let SafeArea = (_dec$4 = ccclass('cc.SafeArea'), _dec2$2 = executionOrder(110), _dec3$2 = requireComponent(Widget), _dec$4(_class$4 = _dec2$2(_class$4 = _dec3$2(_class$4 = class SafeArea extends Component {
              onEnable() {
                this.updateArea();
                screenAdapter.on('window-resize', this.updateArea, this);
                screenAdapter.on('orientation-change', this.updateArea, this);
              }
              onDisable() {
                screenAdapter.off('window-resize', this.updateArea, this);
                screenAdapter.off('orientation-change', this.updateArea, this);
              }
              updateArea() {
                const widget = this.node.getComponent(Widget);
                const uiTransComp = this.node.getComponent(UITransform);
                if (!widget || !uiTransComp) {
                  return;
                }
                widget.updateAlignment();
                const lastPos = this.node.position.clone();
                const lastAnchorPoint = uiTransComp.anchorPoint.clone();
                widget.isAlignTop = widget.isAlignBottom = widget.isAlignLeft = widget.isAlignRight = true;
                const visibleSize = view.getVisibleSize();
                const screenWidth = visibleSize.width;
                const screenHeight = visibleSize.height;
                const safeArea = sys.getSafeAreaRect();
                widget.top = screenHeight - safeArea.y - safeArea.height;
                widget.bottom = safeArea.y;
                widget.left = safeArea.x;
                widget.right = screenWidth - safeArea.x - safeArea.width;
                widget.updateAlignment();
                const curPos = this.node.position.clone();
                const anchorX = lastAnchorPoint.x - (curPos.x - lastPos.x) / uiTransComp.width;
                const anchorY = lastAnchorPoint.y - (curPos.y - lastPos.y) / uiTransComp.height;
                uiTransComp.setAnchorPoint(anchorX, anchorY);
                widgetManager.add(widget);
              }
            }) || _class$4) || _class$4) || _class$4); exports({ SafeArea: SafeArea, SafeAreaComponent: SafeArea });
            legacyCC.SafeArea = SafeArea;

            var _dec$3, _dec2$1, _dec3$1, _dec4, _dec5, _class$3, _class2$1, _initializer$1, _initializer2$1, _initializer3, _initializer4, _initializer5;
            let UICoordinateTracker = (_dec$3 = ccclass('cc.UICoordinateTracker'), _dec2$1 = executionOrder(110), _dec3$1 = type(Node), _dec4 = type(Camera), _dec5 = type([EventHandler]), _dec$3(_class$3 = _dec2$1(_class$3 = (_class2$1 = class UICoordinateTracker extends Component {
              constructor(...args) {
                super(...args);
                this.syncEvents = _initializer$1 && _initializer$1();
                this._target = _initializer2$1 && _initializer2$1();
                this._camera = _initializer3 && _initializer3();
                this._useScale = _initializer4 && _initializer4();
                this._distance = _initializer5 && _initializer5();
                this._transformPos = new Vec3();
                this._viewPos = new Vec3();
                this._canMove = true;
                this._lastWPos = new Vec3();
                this._lastCameraPos = new Vec3();
              }
              get target() {
                return this._target;
              }
              set target(value) {
                if (this._target === value) {
                  return;
                }
                this._target = value;
                this._checkCanMove();
              }
              get camera() {
                return this._camera;
              }
              set camera(value) {
                if (this._camera === value) {
                  return;
                }
                this._camera = value;
                this._checkCanMove();
              }
              get useScale() {
                return this._useScale;
              }
              set useScale(value) {
                if (this._useScale === value) {
                  return;
                }
                this._useScale = value;
              }
              get distance() {
                return this._distance;
              }
              set distance(value) {
                if (this._distance === value) {
                  return;
                }
                this._distance = value;
              }
              onEnable() {
                this._checkCanMove();
              }
              update() {
                const wPos = this.node.worldPosition;
                const camera = this._camera;
                if (!this._canMove || !camera || !camera.camera || this._lastWPos.equals(wPos) && this._lastCameraPos.equals(camera.node.worldPosition)) {
                  return;
                }
                this._lastWPos.set(wPos);
                this._lastCameraPos.set(camera.node.worldPosition);
                camera.camera.update();
                camera.convertToUINode(wPos, this._target, this._transformPos);
                if (this._useScale) {
                  Vec3.transformMat4(this._viewPos, this.node.worldPosition, camera.camera.matView);
                }
                if (this.syncEvents.length > 0) {
                  const data = this._distance / Math.abs(this._viewPos.z);
                  EventHandler.emitEvents(this.syncEvents, this._transformPos, data);
                }
              }
              _checkCanMove() {
                this._canMove = !!(this._camera && this._target);
              }
            }, (_applyDecoratedDescriptor(_class2$1.prototype, "target", [_dec3$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "target"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "camera", [_dec4], Object.getOwnPropertyDescriptor(_class2$1.prototype, "camera"), _class2$1.prototype), _initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "syncEvents", [_dec5, serializable], function () {
              return [];
            }), _initializer2$1 = applyDecoratedInitializer(_class2$1.prototype, "_target", [serializable], function () {
              return null;
            }), _initializer3 = applyDecoratedInitializer(_class2$1.prototype, "_camera", [serializable], function () {
              return null;
            }), _initializer4 = applyDecoratedInitializer(_class2$1.prototype, "_useScale", [serializable], function () {
              return true;
            }), _initializer5 = applyDecoratedInitializer(_class2$1.prototype, "_distance", [serializable], function () {
              return 1;
            })), _class2$1)) || _class$3) || _class$3); exports({ UICoordinateTracker: UICoordinateTracker, UICoordinateTrackerComponent: UICoordinateTracker });

            var _dec$2, _class$2;
            const BlockEvents = [NodeEventType.TOUCH_START, NodeEventType.TOUCH_END, NodeEventType.TOUCH_MOVE, NodeEventType.MOUSE_DOWN, NodeEventType.MOUSE_MOVE, NodeEventType.MOUSE_UP, NodeEventType.MOUSE_ENTER, NodeEventType.MOUSE_LEAVE, NodeEventType.MOUSE_WHEEL];
            function stopPropagation(event) {
              event.propagationStopped = true;
            }
            let BlockInputEvents = (_dec$2 = ccclass('cc.BlockInputEvents'), _dec$2(_class$2 = class BlockInputEvents extends Component {
              onEnable() {
                for (let i = 0; i < BlockEvents.length; i++) {
                  this.node.on(BlockEvents[i], stopPropagation, this);
                }
              }
              onDisable() {
                for (let i = 0; i < BlockEvents.length; i++) {
                  this.node.off(BlockEvents[i], stopPropagation, this);
                }
              }
            }) || _class$2); exports({ BlockInputEvents: BlockInputEvents, BlockInputEventsComponent: BlockInputEvents });

            var _dec$1, _dec2, _dec3, _class$1, _class2, _initializer, _initializer2;
            let SubContextView = exports('SubContextView', (_dec$1 = ccclass('cc.SubContextView'), _dec2 = executionOrder(110), _dec3 = requireComponent(UITransform), _dec$1(_class$1 = _dec2(_class$1 = _dec3(_class$1 = (_class2 = class SubContextView extends Component {
              get designResolutionSize() {
                return this._designResolutionSize;
              }
              set designResolutionSize(value) {
                {
                  return;
                }
              }
              get fps() {
                return this._fps;
              }
              set fps(value) {
                if (this._fps === value) {
                  return;
                }
                this._fps = value;
                this._updateInterval = 1000 / value;
              }
              constructor() {
                super();
                this._fps = _initializer && _initializer();
                this._sprite = void 0;
                this._imageAsset = void 0;
                this._texture = void 0;
                this._updatedTime = 0;
                this._updateInterval = 0;
                this._openDataContext = void 0;
                this._content = void 0;
                this._designResolutionSize = _initializer2 && _initializer2();
                this._content = new Node('content');
                this._content.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
                this._sprite = null;
                this._imageAsset = new ImageAsset();
                this._openDataContext = null;
                this._updatedTime = performance.now();
                this._texture = new Texture2D();
              }
              onLoad() {
                if (minigame.getOpenDataContext) {
                  this._updateInterval = 1000 / this._fps;
                  this._openDataContext = minigame.getOpenDataContext();
                  this._initSharedCanvas();
                  this._initContentNode();
                  this._updateSubContextView();
                  this._updateContentLayer();
                } else {
                  this.enabled = false;
                }
              }
              onEnable() {
                this._registerNodeEvent();
              }
              onDisable() {
                this._unregisterNodeEvent();
              }
              _initSharedCanvas() {
                if (this._openDataContext) {
                  const sharedCanvas = this._openDataContext.canvas;
                  let designWidth = this._designResolutionSize.width;
                  let designHeight = this._designResolutionSize.height;
                  sharedCanvas.width = designWidth;
                  sharedCanvas.height = designHeight;
                }
              }
              _initContentNode() {
                if (this._openDataContext) {
                  const sharedCanvas = this._openDataContext.canvas;
                  const image = this._imageAsset;
                  image.reset(sharedCanvas);
                  this._texture.image = image;
                  this._texture.create(sharedCanvas.width, sharedCanvas.height);
                  this._sprite = this._content.getComponent(Sprite);
                  if (!this._sprite) {
                    this._sprite = this._content.addComponent(Sprite);
                  }
                  if (this._sprite.spriteFrame) {
                    this._sprite.spriteFrame.texture = this._texture;
                  } else {
                    const sp = new SpriteFrame();
                    sp.texture = this._texture;
                    this._sprite.spriteFrame = sp;
                  }
                  this._content.parent = this.node;
                }
              }
              _updateSubContextView() {
                if (!this._openDataContext) {
                  return;
                }
                const nodeTrans = this.node.getComponent(UITransform);
                const contentTrans = this._content.getComponent(UITransform);
                const scaleX = nodeTrans.width / contentTrans.width;
                const scaleY = nodeTrans.height / contentTrans.height;
                const scale = scaleX > scaleY ? scaleY : scaleX;
                contentTrans.width *= scale;
                contentTrans.height *= scale;
                const viewportRect = view.getViewportRect();
                const box = contentTrans.getBoundingBoxToWorld();
                const visibleSize = view.getVisibleSize();
                const dpr = screenAdapter.devicePixelRatio;
                const x = (viewportRect.width * (box.x / visibleSize.width) + viewportRect.x) / dpr;
                const y = (viewportRect.height * (box.y / visibleSize.height) + viewportRect.y) / dpr;
                const width = viewportRect.width * (box.width / visibleSize.width) / dpr;
                const height = viewportRect.height * (box.height / visibleSize.height) / dpr;
                this._openDataContext.postMessage({
                  fromEngine: true,
                  type: 'engine',
                  event: 'viewport',
                  x,
                  y,
                  width,
                  height
                });
              }
              _updateSubContextTexture() {
                const img = this._imageAsset;
                if (!img || !this._openDataContext) {
                  return;
                }
                if (img.width <= 0 || img.height <= 0) {
                  return;
                }
                const sharedCanvas = this._openDataContext.canvas;
                img.reset(sharedCanvas);
                if (sharedCanvas.width > img.width || sharedCanvas.height > img.height) {
                  this._texture.create(sharedCanvas.width, sharedCanvas.height);
                }
                this._texture.uploadData(sharedCanvas);
              }
              _registerNodeEvent() {
                this.node.on(NodeEventType.TRANSFORM_CHANGED, this._updateSubContextView, this);
                this.node.on(NodeEventType.SIZE_CHANGED, this._updateSubContextView, this);
                this.node.on(NodeEventType.LAYER_CHANGED, this._updateContentLayer, this);
              }
              _unregisterNodeEvent() {
                this.node.off(NodeEventType.TRANSFORM_CHANGED, this._updateSubContextView, this);
                this.node.off(NodeEventType.SIZE_CHANGED, this._updateSubContextView, this);
                this.node.off(NodeEventType.LAYER_CHANGED, this._updateContentLayer, this);
              }
              _updateContentLayer() {
                this._content.layer = this.node.layer;
              }
              update(dt) {
                const calledUpdateManually = dt === undefined;
                if (calledUpdateManually) {
                  this._updateSubContextTexture();
                  return;
                }
                const now = performance.now();
                const deltaTime = now - this._updatedTime;
                if (deltaTime >= this._updateInterval) {
                  this._updatedTime += this._updateInterval;
                  this._updateSubContextTexture();
                }
              }
              onDestroy() {
                this._content.destroy();
                this._texture.destroy();
                if (this._sprite) {
                  this._sprite.destroy();
                }
                this._imageAsset.destroy();
                this._openDataContext = null;
              }
            }, (_initializer = applyDecoratedInitializer(_class2.prototype, "_fps", [serializable], function () {
              return 60;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "_designResolutionSize", [serializable], function () {
              return new Size(640, 960);
            })), _class2)) || _class$1) || _class$1) || _class$1));
            legacyCC.SubContextView = SubContextView;

            deprecateModuleExportedName({
              ButtonComponent: {
                newName: 'Button',
                since: '1.2.0',
                removed: false
              },
              EditBoxComponent: {
                newName: 'EditBox',
                since: '1.2.0',
                removed: false
              },
              LayoutComponent: {
                newName: 'Layout',
                since: '1.2.0',
                removed: false
              },
              ProgressBarComponent: {
                newName: 'ProgressBar',
                since: '1.2.0',
                removed: false
              },
              ScrollViewComponent: {
                newName: 'ScrollView',
                since: '1.2.0',
                removed: false
              },
              ScrollBarComponent: {
                newName: 'ScrollBar',
                since: '1.2.0',
                removed: false
              },
              SliderComponent: {
                newName: 'Slider',
                since: '1.2.0',
                removed: false
              },
              ToggleComponent: {
                newName: 'Toggle',
                since: '1.2.0',
                removed: false
              },
              ToggleContainerComponent: {
                newName: 'ToggleContainer',
                since: '1.2.0',
                removed: false
              },
              WidgetComponent: {
                newName: 'Widget',
                since: '1.2.0',
                removed: false
              },
              PageViewComponent: {
                newName: 'PageView',
                since: '1.2.0',
                removed: false
              },
              PageViewIndicatorComponent: {
                newName: 'PageViewIndicator',
                since: '1.2.0',
                removed: false
              },
              SafeAreaComponent: {
                newName: 'SafeArea',
                since: '1.2.0',
                removed: false
              },
              UICoordinateTrackerComponent: {
                newName: 'UICoordinateTracker',
                since: '1.2.0',
                removed: false
              },
              BlockInputEventsComponent: {
                newName: 'BlockInputEvents',
                since: '1.2.0',
                removed: false
              }
            });

            var _dec, _class;
            let UIReorderComponent = exports('UIReorderComponent', (_dec = ccclass('cc.UIReorderComponent'), _dec(_class = class UIReorderComponent {
              constructor() {
                warnID(1408, 'UIReorderComponent');
              }
            }) || _class));
            legacyCC.UIReorderComponent = UIReorderComponent;
            legacyCC.ButtonComponent = Button;
            setClassAlias(Button, 'cc.ButtonComponent');
            legacyCC.EditBoxComponent = EditBox;
            setClassAlias(EditBox, 'cc.EditBoxComponent');
            legacyCC.LayoutComponent = Layout;
            setClassAlias(Layout, 'cc.LayoutComponent');
            legacyCC.ProgressBarComponent = ProgressBar;
            setClassAlias(ProgressBar, 'cc.ProgressBarComponent');
            legacyCC.ScrollViewComponent = ScrollView;
            setClassAlias(ScrollView, 'cc.ScrollViewComponent');
            legacyCC.ScrollBarComponent = ScrollBar;
            setClassAlias(ScrollBar, 'cc.ScrollBarComponent');
            legacyCC.SliderComponent = Slider;
            setClassAlias(Slider, 'cc.SliderComponent');
            legacyCC.ToggleComponent = Toggle;
            setClassAlias(Toggle, 'cc.ToggleComponent');
            legacyCC.ToggleContainerComponent = ToggleContainer;
            setClassAlias(ToggleContainer, 'cc.ToggleContainerComponent');
            legacyCC.WidgetComponent = Widget;
            setClassAlias(Widget, 'cc.WidgetComponent');
            legacyCC.PageViewComponent = PageView;
            setClassAlias(PageView, 'cc.PageViewComponent');
            legacyCC.PageViewIndicatorComponent = PageViewIndicator;
            setClassAlias(PageViewIndicator, 'cc.PageViewIndicatorComponent');
            legacyCC.SafeAreaComponent = SafeArea;
            setClassAlias(SafeArea, 'cc.SafeAreaComponent');
            setClassAlias(UICoordinateTracker, 'cc.UICoordinateTrackerComponent');
            legacyCC.BlockInputEventsComponent = BlockInputEvents;
            setClassAlias(BlockInputEvents, 'cc.BlockInputEventsComponent');
            removeProperty(View.prototype, 'View.prototype', [{
              name: 'isAntiAliasEnabled',
              suggest: 'The API of Texture2d have been largely modified, no alternative'
            }, {
              name: 'enableAntiAlias',
              suggest: 'The API of Texture2d have been largely modified, no alternative'
            }]);
            markAsWarning(View.prototype, 'View.prototype', [{
              name: 'adjustViewportMeta'
            }, {
              name: 'enableAutoFullScreen',
              suggest: 'use screen.requestFullScreen() instead.'
            }, {
              name: 'isAutoFullScreenEnabled'
            }, {
              name: 'setCanvasSize',
              suggest: 'setting size in CSS pixels is not recommended, please use screen.windowSize instead.'
            }, {
              name: 'getCanvasSize',
              suggest: 'please use screen.windowSize instead.'
            }, {
              name: 'getFrameSize',
              suggest: 'getting size in CSS pixels is not recommended, please use screen.windowSize instead.'
            }, {
              name: 'setFrameSize',
              suggest: 'setting size in CSS pixels is not recommended, please use screen.windowSize instead.'
            }, {
              name: 'getDevicePixelRatio',
              suggest: 'use screen.devicePixelRatio instead.'
            }, {
              name: 'convertToLocationInView'
            }, {
              name: 'enableRetina'
            }, {
              name: 'isRetinaEnabled'
            }, {
              name: 'setRealPixelResolution'
            }]);

        })
    };
}));
