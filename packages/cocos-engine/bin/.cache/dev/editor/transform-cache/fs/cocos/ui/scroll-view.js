System.register("q-bundled:///fs/cocos/ui/scroll-view.js", ["../core/data/decorators/index.js", "../../../virtual/internal%253Aconstants.js", "../2d/framework/index.js", "../core/global-exports.js", "../core/math/index.js", "../core/platform/debug.js", "../game/director.js", "../input/input.js", "../input/types/index.js", "../scene-graph/component-event-handler.js", "../scene-graph/node.js", "../scene-graph/node-enum.js", "../scene-graph/node-event.js", "../xr/event/xr-event-handle.js", "./layout.js", "./scroll-bar.js", "./view-group.js"], function (_export, _context) {
  "use strict";

  var ccclass, displayOrder, executionOrder, help, menu, range, requireComponent, serializable, tooltip, type, EDITOR_NOT_IN_PREVIEW, UITransform, legacyCC, Vec2, Vec3, approx, errorID, logID, Director, director, Input, input, Event, EventGamepad, EventHandle, EventTouch, SystemEventType, ComponentEventHandler, Node, TransformBit, NodeEventType, DeviceType, XrUIPressEventType, Layout, ScrollBar, ViewGroup, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _class3, NUMBER_OF_GATHERED_TOUCHES_FOR_MOVE_SPEED, OUT_OF_BOUNDARY_BREAKING_FACTOR, EPSILON, TOLERANCE, MOVEMENT_FACTOR, _tempVec3, _tempVec3_1, _tempVec2, _tempVec2_1, quintEaseOut, getTimeInMilliseconds, eventMap, EventType, XrhoverType, ScrollView;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  _export("EventType", void 0);
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      range = _coreDataDecoratorsIndexJs.range;
      requireComponent = _coreDataDecoratorsIndexJs.requireComponent;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_dFrameworkIndexJs) {
      UITransform = _dFrameworkIndexJs.UITransform;
    }, function (_coreGlobalExportsJs) {
      legacyCC = _coreGlobalExportsJs.legacyCC;
    }, function (_coreMathIndexJs) {
      Vec2 = _coreMathIndexJs.Vec2;
      Vec3 = _coreMathIndexJs.Vec3;
      approx = _coreMathIndexJs.approx;
    }, function (_corePlatformDebugJs) {
      errorID = _corePlatformDebugJs.errorID;
      logID = _corePlatformDebugJs.logID;
    }, function (_gameDirectorJs) {
      Director = _gameDirectorJs.Director;
      director = _gameDirectorJs.director;
    }, function (_inputInputJs) {
      Input = _inputInputJs.Input;
      input = _inputInputJs.input;
    }, function (_inputTypesIndexJs) {
      Event = _inputTypesIndexJs.Event;
      EventGamepad = _inputTypesIndexJs.EventGamepad;
      EventHandle = _inputTypesIndexJs.EventHandle;
      EventTouch = _inputTypesIndexJs.EventTouch;
      SystemEventType = _inputTypesIndexJs.SystemEventType;
    }, function (_sceneGraphComponentEventHandlerJs) {
      ComponentEventHandler = _sceneGraphComponentEventHandlerJs.EventHandler;
    }, function (_sceneGraphNodeJs) {
      Node = _sceneGraphNodeJs.Node;
    }, function (_sceneGraphNodeEnumJs) {
      TransformBit = _sceneGraphNodeEnumJs.TransformBit;
    }, function (_sceneGraphNodeEventJs) {
      NodeEventType = _sceneGraphNodeEventJs.NodeEventType;
    }, function (_xrEventXrEventHandleJs) {
      DeviceType = _xrEventXrEventHandleJs.DeviceType;
      XrUIPressEventType = _xrEventXrEventHandleJs.XrUIPressEventType;
    }, function (_layoutJs) {
      Layout = _layoutJs.Layout;
    }, function (_scrollBarJs) {
      ScrollBar = _scrollBarJs.ScrollBar;
    }, function (_viewGroupJs) {
      ViewGroup = _viewGroupJs.ViewGroup;
    }],
    execute: function () {
      NUMBER_OF_GATHERED_TOUCHES_FOR_MOVE_SPEED = 5;
      OUT_OF_BOUNDARY_BREAKING_FACTOR = 0.05;
      EPSILON = 1e-4;
      TOLERANCE = 1e4;
      MOVEMENT_FACTOR = 0.7;
      _tempVec3 = new Vec3();
      _tempVec3_1 = new Vec3();
      _tempVec2 = new Vec2();
      _tempVec2_1 = new Vec2();
      quintEaseOut = time => {
        time -= 1;
        return time * time * time * time * time + 1;
      };
      getTimeInMilliseconds = () => {
        const currentTime = new Date();
        return currentTime.getMilliseconds();
      };
      eventMap = {
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
      /**
       * @en
       * Enum for ScrollView event type.
       *
       * @zh
       * 滚动视图事件类型。
       */
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
      })(EventType || _export("EventType", EventType = {}));
      (function (XrhoverType) {
        XrhoverType[XrhoverType["NONE"] = 0] = "NONE";
        XrhoverType[XrhoverType["LEFT"] = 1] = "LEFT";
        XrhoverType[XrhoverType["RIGHT"] = 2] = "RIGHT";
      })(XrhoverType || (XrhoverType = {}));
      /**
       * @en
       * Layout container for a view hierarchy that can be scrolled by the user,
       * allowing it to be larger than the physical display.
       *
       * @zh
       * 滚动视图组件。
       */
      _export("ScrollView", ScrollView = (_dec = ccclass('cc.ScrollView'), _dec2 = help('i18n:cc.ScrollView'), _dec3 = executionOrder(110), _dec4 = menu('UI/ScrollView'), _dec5 = requireComponent(UITransform), _dec6 = range([0, 10]), _dec7 = displayOrder(5), _dec8 = tooltip('i18n:scrollview.bounceDuration'), _dec9 = range([0, 1, 0.1]), _dec10 = displayOrder(3), _dec11 = tooltip('i18n:scrollview.brake'), _dec12 = displayOrder(3), _dec13 = tooltip('i18n:scrollview.elastic'), _dec14 = displayOrder(2), _dec15 = tooltip('i18n:scrollview.inertia'), _dec16 = type(Node), _dec17 = displayOrder(5), _dec18 = tooltip('i18n:scrollview.content'), _dec19 = displayOrder(0), _dec20 = tooltip('i18n:scrollview.horizontal'), _dec21 = type(ScrollBar), _dec22 = displayOrder(0), _dec23 = tooltip('i18n:scrollview.horizontal_bar'), _dec24 = displayOrder(1), _dec25 = tooltip('i18n:scrollview.vertical'), _dec26 = type(ScrollBar), _dec27 = displayOrder(1), _dec28 = tooltip('i18n:scrollview.vertical_bar'), _dec29 = displayOrder(9), _dec30 = tooltip('i18n:scrollview.cancelInnerEvents'), _dec31 = type([ComponentEventHandler]), _dec32 = displayOrder(10), _dec33 = tooltip('i18n:scrollview.scrollEvents'), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = (_class3 = class ScrollView extends ViewGroup {
        constructor(...args) {
          super(...args);
          /**
           * @en
           * The elapse time of bouncing back. A value of 0 will bounce back immediately.
           *
           * @zh
           * 回弹持续的时间，0 表示将立即反弹。
           */
          this.bounceDuration = _initializer && _initializer();
          /**
           * @en
           * It determines how quickly the content stop moving. A value of 1 will stop the movement immediately.
           * A value of 0 will never stop the movement until it reaches to the boundary of scrollview.
           *
           * @zh
           * 开启惯性后，在用户停止触摸后滚动多快停止，0表示永不停止，1表示立刻停止。
           */
          this.brake = _initializer2 && _initializer2();
          /**
           * @en
           * When elastic is set, the content will be bounce back when move out of boundary.
           *
           * @zh
           * 是否允许滚动内容超过边界，并在停止触摸后回弹。
           */
          this.elastic = _initializer3 && _initializer3();
          /**
           * @en
           * When inertia is set, the content will continue to move when touch ended.
           *
           * @zh
           * 是否开启滚动惯性。
           */
          this.inertia = _initializer4 && _initializer4();
          /**
           * @en
           * Enable horizontal scroll.
           *
           * @zh
           * 是否开启水平滚动。
           */
          this.horizontal = _initializer5 && _initializer5();
          /**
           * @en
           * Enable vertical scroll.
           *
           * @zh
           * 是否开启垂直滚动。
           */
          this.vertical = _initializer6 && _initializer6();
          /**
           * @en
           * If cancelInnerEvents is set to true, the scroll behavior will cancel touch events on inner content nodes
           * It's set to true by default.
           *
           * @zh
           * 如果这个属性被设置为 true，那么滚动行为会取消子节点上注册的触摸事件，默认被设置为 true。<br/>
           * 注意，子节点上的 touchstart 事件仍然会触发，触点移动距离非常短的情况下 touchmove 和 touchend 也不会受影响。
           */
          this.cancelInnerEvents = _initializer7 && _initializer7();
          /**
           * @en
           * ScrollView events callback.
           *
           * @zh
           * 滚动视图的事件回调函数。
           */
          this.scrollEvents = _initializer8 && _initializer8();
          this._autoScrolling = false;
          this._scrolling = false;
          this._content = _initializer9 && _initializer9();
          this._horizontalScrollBar = _initializer10 && _initializer10();
          this._verticalScrollBar = _initializer11 && _initializer11();
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
          // use bit wise operations to indicate the direction
          this._scrollEventEmitMask = 0;
          this._isBouncing = false;
          this._contentPos = new Vec3();
          this._deltaPos = new Vec3();
          this._deltaAmount = new Vec3();
          this._hoverIn = XrhoverType.NONE;
        }
        /**
         * @en
         * This is a reference to the UI element to be scrolled.
         *
         * @zh
         * 可滚动展示内容的节点。
         */
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
        /**
         * @en
         * The horizontal scrollbar reference.
         * @zh
         * 水平滚动的 ScrollBar。
         */
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
        /**
         * @en
         * The vertical scrollbar reference.
         *
         * @zh
         * 垂直滚动的 ScrollBar。
         */
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
        /**
         * @en The display view in the scroll view component.
         * @zh scroll view 组件中的显示区域。
         */
        get view() {
          const parent = this._content && this._content.parent;
          if (!parent) {
            return null;
          }
          return parent._uiProps.uiTransformComp;
        }
        /**
         * @en
         * Scroll the content to the bottom boundary of ScrollView.
         *
         * @zh
         * 视图内容将在规定时间内滚动到视图底部。
         *
         * @param timeInSecond
         * @en The rolling time(in seconds). If time is up, the content will slide to the bottom border. @zh 滚动时间（s）。 如果超时，内容将立即跳到底部边界。
         * @param attenuated @en Whether the rolling acceleration is attenuated(The default is true) @zh 滚动加速是否衰减，默认为 true
         * @example
         * ```ts
         * // Scroll to the bottom of the view.
         * scrollView.scrollToBottom(0.1);
         * ```
         */
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

        /**
         * @en
         * Scroll the content to the top boundary of ScrollView.
         *
         * @zh
         * 视图内容将在规定时间内滚动到视图顶部。
         *
         * @param timeInSecond
         * @en The rolling time(in seconds). If time is up, the content will slide to the bottom border. @zh 滚动时间（s）。 如果超时，内容将立即跳到底部边界。
         * @param attenuated @en Whether the rolling acceleration is attenuated(The default is true). @zh 滚动加速是否衰减，默认为 true
         * @example
         * ```ts
         * // Scroll to the top of the view.
         * scrollView.scrollToTop(0.1);
         * ```
         */
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

        /**
         * @en
         * Scroll the content to the left boundary of ScrollView.
         *
         * @zh
         * 视图内容将在规定时间内滚动到视图左边。
         *
         * @param timeInSecond
         * @en The rolling time(in seconds). If time is up, the content will slide to the bottom border. @zh 滚动时间（s）。 如果超时，内容将立即跳到底部边界。
         * @param attenuated @en Whether the rolling acceleration is attenuated(The default is true). @zh 滚动加速是否衰减，默认为 true。
         * @example
         * ```ts
         * // Scroll to the left of the view.
         * scrollView.scrollToLeft(0.1);
         * ```
         */
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

        /**
         * @en
         * Scroll the content to the right boundary of ScrollView.
         *
         * @zh
         * 视图内容将在规定时间内滚动到视图右边。
         *
         * @param timeInSecond
         * @en The rolling time(in seconds). If time is up, the content will slide to the bottom border. @zh 滚动时间（s）。 如果超时，内容将立即跳到底部边界。
         * @param attenuated @en Whether the rolling acceleration is attenuated(The default is true). @zh 滚动加速是否衰减，默认为 true。
         * @example
         * ```ts
         * // Scroll to the right of the view.
         * scrollView.scrollToRight(0.1);
         * ```
         */
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

        /**
         * @en
         * Scroll the content to the top left boundary of ScrollView.
         *
         * @zh
         * 视图内容将在规定时间内滚动到视图左上角。
         *
         * @param timeInSecond
         * @en The rolling time(in seconds). If time is up, the content will slide to the bottom border. @zh 滚动时间（s）。 如果超时，内容将立即跳到底部边界。
         * @param attenuated @en Whether the rolling acceleration is attenuated(The default is true). @zh 滚动加速是否衰减，默认为 true。
         * @example
         * ```ts
         * // Scroll to the upper left corner of the view.
         * scrollView.scrollToTopLeft(0.1);
         * ```
         */
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

        /**
         * @en
         * Scroll the content to the top right boundary of ScrollView.
         *
         * @zh
         * 视图内容将在规定时间内滚动到视图右上角。
         *
         * @param timeInSecond
         * @en The rolling time(in seconds). If time is up, the content will slide to the bottom border. @zh 滚动时间（s）。 如果超时，内容将立即跳到底部边界。
         * @param attenuated @en Whether the rolling acceleration is attenuated(The default is true). @zh 滚动加速是否衰减，默认为 true。
         * @example
         * ```ts
         * // Scroll to the top right corner of the view.
         * scrollView.scrollToTopRight(0.1);
         * ```
         */
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

        /**
         * @en
         * Scroll the content to the bottom left boundary of ScrollView.
         *
         * @zh
         * 视图内容将在规定时间内滚动到视图左下角。
         *
         * @param timeInSecond
         * @en The rolling time(in seconds). If time is up, the content will slide to the bottom border. @zh 滚动时间（s）。 如果超时，内容将立即跳到底部边界。
         * @param attenuated @en Whether the rolling acceleration is attenuated(The default is true). @zh 滚动加速是否衰减，默认为 true。
         * @example
         * ```ts
         * // Scroll to the lower left corner of the view.
         * scrollView.scrollToBottomLeft(0.1);
         * ```
         */
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

        /**
         * @en
         * Scroll the content to the bottom right boundary of ScrollView.
         *
         * @zh
         * 视图内容将在规定时间内滚动到视图右下角。
         *
         * @param timeInSecond
         * @en The rolling time(in seconds). If time is up, the content will slide to the bottom border. @zh 滚动时间（s）。 如果超时，内容将立即跳到底部边界。
         * @param attenuated @en Whether the rolling acceleration is attenuated(The default is true). @zh 滚动加速是否衰减，默认为 true。
         * @example
         * ```ts
         * // Scroll to the lower right corner of the view.
         * scrollView.scrollToBottomRight(0.1);
         * ```
         */
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

        /**
         * @en
         * Scroll with an offset related to the ScrollView's top left origin, if timeInSecond is omitted,
         * then it will jump to the specific offset immediately.
         *
         * @zh
         * 视图内容在规定时间内将滚动到 ScrollView 相对左上角原点的偏移位置, 如果 timeInSecond 参数不传，则立即滚动到指定偏移位置。
         *
         * @param offset
         * @en After scrolling the view, the position of the view content relative to the view window. @zh 滚动视图后，视图内容（content）相对于视图窗口（viewport）的位置。
         * @param timeInSecond
         * @en Scroll time (s). If it times out, the content immediately jumps to the specified offset. @zh 滚动时间（s）。 如果超时，内容将立即跳到指定偏移量处。
         * @param attenuated @en Whether the rolling acceleration is attenuated(The default is true). @zh 滚动加速是否衰减，默认为 true。
         * @example
         * ```ts
         * // Scroll to middle position in 0.1 second in x-axis
         * let maxScrollOffset = this.getMaxScrollOffset();
         * scrollView.scrollToOffset(new Vec2(maxScrollOffset.x / 2, 0), 0.1);
         * ```
         */
        scrollToOffset(offset, timeInSecond, attenuated = true) {
          const maxScrollOffset = this.getMaxScrollOffset();
          const anchor = new Vec2(0, 0);
          // if maxScrollOffset is 0, then always align the content's top left origin to the top left corner of its parent
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

        /**
         * @en
         * Get the position of the scrolling view relative to the origin in the upper-left corner of the viewport.
         *
         * @zh
         * 获取滚动视图相对于视图窗口左上角原点的位置。
         *
         * @return @en Current rolling offset. @zh 当前滚动偏移量。
         */
        getScrollOffset() {
          const topDelta = this._getContentTopBoundary() - this._topBoundary;
          const leftDelta = this._getContentLeftBoundary() - this._leftBoundary;
          return new Vec2(leftDelta, topDelta);
        }

        /**
         * @en
         * Get the maximize available  scroll offset.
         *
         * @zh
         * 获取滚动视图最大可以滚动的偏移量。
         *
         * @return @en Maximum scrollable offset. @zh 最大可滚动偏移量。
         */
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

        /**
         * @en
         * Scroll the content to the horizontal percent position of ScrollView.
         *
         * @zh
         * 视图内容在规定时间内将滚动到 ScrollView 水平方向的百分比位置上。
         *
         * @param percent
         * @en Scroll to the destination which is located at the percent interpolation from left border to the right border @zh 滚动到从左到右指定百分比插值的位置
         * @param timeInSecond
         * @en Scroll time (s). If it times out, the content immediately jumps to the specified offset. @zh 滚动时间（s）。 如果超时，内容将立即跳到指定偏移量处。
         * @param attenuated @en Whether the rolling acceleration is attenuated(The default is true). @zh 滚动加速是否衰减，默认为 true。
         * @example
         * ```ts
         * // Scroll to middle position.
         * scrollView.scrollToBottomRight(0.5, 0.1);
         * ```
         */
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

        /**
         * @en
         * Scroll the content to the percent position of ScrollView in any direction.
         *
         * @zh
         * 视图内容在规定时间内进行垂直方向和水平方向的滚动，并且滚动到指定百分比位置上。
         *
         * @param anchor
         * @en Scroll to the destination which is located at the anchor interpolation from left/top border to the right/bottom border.
         * @zh 滚动到从左/上到右/下指定锚点对应分量插值的位置。
         * @param timeInSecond
         * @en Scroll time (s). If it times out, the content immediately jumps to the specified offset. @zh 滚动时间（s）。 如果超时，内容将立即跳到指定偏移量处。
         * @param attenuated @en Whether the rolling acceleration is attenuated(The default is true). @zh 滚动加速是否衰减，默认为 true。
         * @example
         * ```ts
         * // Vertical scroll to the bottom of the view.
         * scrollView.scrollTo(new Vec2(0, 1), 0.1);
         *
         * // Horizontal scroll to view right.
         * scrollView.scrollTo(new Vec2(1, 0), 0.1);
         * ```
         */
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

        /**
         * @en
         * Scroll the content to the vertical percent position of ScrollView.
         *
         * @zh
         * 视图内容在规定时间内滚动到 ScrollView 垂直方向的百分比位置上。
         *
         * @param percent
         * @en Scroll to the destination which is located at the percent interpolation from top border to the bottom border. @zh 滚动到从上到下指定百分比插值的位置。
         * @param timeInSecond
         * @en Scroll time (s). If it times out, the content immediately jumps to the specified offset. @zh 滚动时间（s）。 如果超时，内容将立即跳到指定偏移量处。
         * @param attenuated @en Whether the rolling acceleration is attenuated(The default is true). @zh 滚动加速是否衰减，默认为 true。
         * @example
         * ```ts
         * scrollView.scrollToPercentVertical(0.5, 0.1);
         * ```
         */
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

        /**
         * @en
         * Stop auto scroll immediately.
         *
         * @zh
         * 停止自动滚动, 调用此 API 可以让 ScrollView 立即停止滚动。
         */
        stopAutoScroll() {
          this._autoScrolling = false;
          this._autoScrollAccumulatedTime = this._autoScrollTotalTime;
        }

        /**
         * @en
         * Modify the content position.
         *
         * @zh
         * 设置当前视图内容的坐标点。
         *
         * @param position @en Current content position. @zh 希望设置内容框体的位置。
         * @deprecated Since 3.1.0, setContentPosition is deprecated, please use scrollToOffset instead.
         */
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

        /**
         * @en
         * Query the content's position in its parent space.
         *
         * @zh
         * 获取当前视图内容的坐标点。
         *
         * @returns @en current content position. @zh 当前视图内容的坐标点。
         * @deprecated Since 3.1.0, getContentPosition is deprecated.
         */
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

        /**
         * @en
         * Query whether the user is currently dragging the ScrollView to scroll it.
         *
         * @zh
         * 用户是否在拖拽当前滚动视图。
         *
         * @returns @en If or not the current scrolling view is being dragged.  @zh 是否在拖拽当前滚动视图。
         */
        isScrolling() {
          return this._scrolling;
        }

        /**
         * @en
         * Query whether the ScrollView is currently scrolling because of a bounceback or inertia slowdown.
         *
         * @zh
         * 当前滚动视图是否在惯性滚动。
         *
         * @returns @en Whether the scrolling view is scrolling inertially.  @zh 滚动视图是否在惯性滚动。
         */
        isAutoScrolling() {
          return this._autoScrolling;
        }

        /**
         * @en Get the minimum precision time of the end-of-scroll event.
         * @zh 获得滚动结束的事件的最小精度时间。
         * @returns @en Minimum time. @zh 最小时间。
         */
        getScrollEndedEventTiming() {
          return EPSILON;
        }
        start() {
          this._calculateBoundary();
          // Because widget component will adjust content position and scrollView position is correct after visit
          // So this event could make sure the content is on the correct position after loading.
          if (this._content) {
            director.once(Director.EVENT_BEFORE_DRAW, this._adjustContentOutOfBoundary, this);
          }
        }
        onEnable() {
          if (!EDITOR_NOT_IN_PREVIEW) {
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
          if (!EDITOR_NOT_IN_PREVIEW) {
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

        // private methods
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

          // Do not prevent touch events in inner nodes
          if (!this.cancelInnerEvents) {
            return;
          }
          const deltaMove = touch.getUILocation(_tempVec2);
          deltaMove.subtract(touch.getUIStartLocation(_tempVec2_1));
          // FIXME: touch move delta should be calculated by DPI.
          if (deltaMove.length() > 7) {
            if (!this._touchMoved && event.target !== this.node) {
              // Simulate touch cancel for target node
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
          this._dispatchEvent(EventType.TOUCH_UP);
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

          // Filter touch cancel event send from self
          if (event && !event.simulate) {
            const touch = event.touch;
            this._handleReleaseLogic(touch);
          }
          this._stopPropagationIfTargetIsMe(event);
        }
        _calculateBoundary() {
          if (this._content && this.view) {
            // refresh content size
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
            // captureListeners are arranged from child to parent
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

          // attenuate formula from: http://learnopengl.com/#!Lighting/Light-casters
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

            // eslint-disable-next-line function-paren-newline
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
          _tempVec2.set(outOfBoundary.x, outOfBoundary.y);
          this._updateScrollBar(_tempVec2);
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
          if (event === EventType.SCROLL_ENDED) {
            this._scrollEventEmitMask = 0;
          } else if (event === EventType.SCROLL_TO_TOP || event === EventType.SCROLL_TO_BOTTOM || event === EventType.SCROLL_TO_LEFT || event === EventType.SCROLL_TO_RIGHT) {
            const flag = 1 << eventMap[event];
            if (this._scrollEventEmitMask & flag) {
              return;
            } else {
              this._scrollEventEmitMask |= flag;
            }
          }
          ComponentEventHandler.emitEvents(this.scrollEvents, this, eventMap[event]);
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

        // This is for ScrollView as children of a Button
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
              this._dispatchEvent(EventType.SCROLL_ENDED);
            }
          }
        }
        _getLocalAxisAlignDelta(out, touch) {
          const uiTransformComp = this.node._uiProps.uiTransformComp;
          const vec = new Vec3();
          if (uiTransformComp) {
            touch.getUILocation(_tempVec2);
            touch.getUIPreviousLocation(_tempVec2_1);
            _tempVec3.set(_tempVec2.x, _tempVec2.y, 0);
            _tempVec3_1.set(_tempVec2_1.x, _tempVec2_1.y, 0);
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
          let verticalScrollEventType = EventType.NONE;
          let horizontalScrollEventType = EventType.NONE;
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
                // up
                const icBottomPos = pos.y - anchorY * height;
                if (icBottomPos + realMove.y >= this._bottomBoundary) {
                  verticalScrollEventType = EventType.SCROLL_TO_BOTTOM;
                }
              } else if (realMove.y < 0) {
                // down
                const icTopPos = pos.y - anchorY * height + height;
                if (icTopPos + realMove.y <= this._topBoundary) {
                  verticalScrollEventType = EventType.SCROLL_TO_TOP;
                }
              }
            }
            if (this.horizontal) {
              if (realMove.x < 0) {
                // left
                const icRightPos = pos.x - anchorX * width + width;
                if (icRightPos + realMove.x <= this._rightBoundary) {
                  horizontalScrollEventType = EventType.SCROLL_TO_RIGHT;
                }
              } else if (realMove.x > 0) {
                // right
                const icLeftPos = pos.x - anchorX * width;
                if (icLeftPos + realMove.x >= this._leftBoundary) {
                  horizontalScrollEventType = EventType.SCROLL_TO_LEFT;
                }
              }
            }
          }
          this._moveContent(realMove, false);
          if (this.horizontal && realMove.x !== 0 || this.vertical && realMove.y !== 0) {
            if (!this._scrolling) {
              this._scrolling = true;
              this._dispatchEvent(EventType.SCROLL_BEGAN);
            }
            this._dispatchEvent(EventType.SCROLLING);
          }
          if (verticalScrollEventType !== EventType.NONE) {
            this._dispatchEvent(verticalScrollEventType);
          }
          if (horizontalScrollEventType !== EventType.NONE) {
            this._dispatchEvent(horizontalScrollEventType);
          }
        }
        _handlePressLogic() {
          if (this._autoScrolling) {
            this._dispatchEvent(EventType.SCROLL_ENDED);
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
              this._dispatchEvent(EventType.BOUNCE_TOP);
            }
            if (bounceBackAmount.y < 0) {
              this._dispatchEvent(EventType.BOUNCE_BOTTOM);
            }
            if (bounceBackAmount.x > 0) {
              this._dispatchEvent(EventType.BOUNCE_RIGHT);
            }
            if (bounceBackAmount.x < 0) {
              this._dispatchEvent(EventType.BOUNCE_LEFT);
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
            this._dispatchEvent(EventType.SCROLL_ENG_WITH_THRESHOLD);
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
          this._dispatchEvent(EventType.SCROLLING);
          if (!this._autoScrolling) {
            this._isBouncing = false;
            this._scrolling = false;
            this._dispatchEvent(EventType.SCROLL_ENDED);
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
                this._dispatchEvent(EventType.SCROLL_ENDED);
              }
            }
            this.unschedule(this._checkMouseWheel);
            this._stopMouseWheel = false;
            return;
          }
          this._mouseWheelEventElapsedTime += dt;

          // mouse wheel event is ended
          if (this._mouseWheelEventElapsedTime > maxElapsedTime) {
            this._onScrollBarTouchEnded();
            if (this._scrolling) {
              this._scrolling = false;
              if (!this._autoScrolling) {
                this._dispatchEvent(EventType.SCROLL_ENDED);
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

          // 是否限制在上视区上边
          if (this._content) {
            const uiTrans = this._content._uiProps.uiTransformComp;
            const contentSize = uiTrans.contentSize;
            if (contentSize.height < scrollViewSize.height) {
              totalScrollDelta = contentSize.height - scrollViewSize.height;
              moveDelta.y = bottomDelta - totalScrollDelta;
            }

            // 是否限制在上视区左边
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
      }, _class3.EventType = EventType, _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "bounceDuration", [serializable, _dec6, _dec7, _dec8], function () {
        return 1;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "brake", [serializable, _dec9, _dec10, _dec11], function () {
        return 0.5;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "elastic", [serializable, _dec12, _dec13], function () {
        return true;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "inertia", [serializable, _dec14, _dec15], function () {
        return true;
      }), _applyDecoratedDescriptor(_class2.prototype, "content", [_dec16, _dec17, _dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "content"), _class2.prototype), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "horizontal", [serializable, _dec19, _dec20], function () {
        return true;
      }), _applyDecoratedDescriptor(_class2.prototype, "horizontalScrollBar", [_dec21, _dec22, _dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "horizontalScrollBar"), _class2.prototype), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "vertical", [serializable, _dec24, _dec25], function () {
        return true;
      }), _applyDecoratedDescriptor(_class2.prototype, "verticalScrollBar", [_dec26, _dec27, _dec28], Object.getOwnPropertyDescriptor(_class2.prototype, "verticalScrollBar"), _class2.prototype), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "cancelInnerEvents", [serializable, _dec29, _dec30], function () {
        return true;
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "scrollEvents", [_dec31, serializable, _dec32, _dec33], function () {
        return [];
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "_content", [serializable], function () {
        return null;
      }), _initializer10 = _applyDecoratedInitializer(_class2.prototype, "_horizontalScrollBar", [serializable], function () {
        return null;
      }), _initializer11 = _applyDecoratedInitializer(_class2.prototype, "_verticalScrollBar", [serializable], function () {
        return null;
      })), _class2)) || _class) || _class) || _class) || _class) || _class));
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event scroll-to-top
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event scroll-to-bottom
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event scroll-to-left
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event scroll-to-right
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event scrolling
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event bounce-bottom
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event bounce-top
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event bounce-left
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event bounce-right
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event scroll-ended
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event touch-up
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */
      /**
       * @en
       * Note: This event is emitted from the node to which the component belongs.
       * @zh
       * 注意：此事件是从该组件所属的 Node 上面派发出来的，需要用 node.on 来监听。
       * @event scroll-began
       * @param {Event.EventCustom} event
       * @param {ScrollView} scrollView - The ScrollView component.
       */
      legacyCC.ScrollView = ScrollView;
    }
  };
});