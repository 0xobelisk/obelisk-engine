System.register("q-bundled:///fs/cocos/input/input.js", ["../../../virtual/internal%253Aconstants.js", "pal/input", "../../pal/input/touch-manager.js", "../core/index.js", "./types/index.js", "./types/event-enum.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, NATIVE, AccelerometerInputSource, GamepadInputDevice, HMDInputDevice, HandheldInputDevice, HandleInputDevice, KeyboardInputSource, MouseInputSource, TouchInputSource, touchManager, EventTarget, sys, EventTouch, InputEventType, _pointerEventTypeMap, EventDispatcherPriority, InputEventDispatcher, pointerEventTypeMap, Input, input;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  _export("EventDispatcherPriority", void 0);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
      NATIVE = _virtualInternal253AconstantsJs.NATIVE;
    }, function (_palInput) {
      AccelerometerInputSource = _palInput.AccelerometerInputSource;
      GamepadInputDevice = _palInput.GamepadInputDevice;
      HMDInputDevice = _palInput.HMDInputDevice;
      HandheldInputDevice = _palInput.HandheldInputDevice;
      HandleInputDevice = _palInput.HandleInputDevice;
      KeyboardInputSource = _palInput.KeyboardInputSource;
      MouseInputSource = _palInput.MouseInputSource;
      TouchInputSource = _palInput.TouchInputSource;
    }, function (_palInputTouchManagerJs) {
      touchManager = _palInputTouchManagerJs.touchManager;
    }, function (_coreIndexJs) {
      EventTarget = _coreIndexJs.EventTarget;
      sys = _coreIndexJs.sys;
    }, function (_typesIndexJs) {
      EventTouch = _typesIndexJs.EventTouch;
    }, function (_typesEventEnumJs) {
      InputEventType = _typesEventEnumJs.InputEventType;
    }],
    execute: function () {
      (function (EventDispatcherPriority) {
        EventDispatcherPriority[EventDispatcherPriority["GLOBAL"] = 0] = "GLOBAL";
        EventDispatcherPriority[EventDispatcherPriority["UI"] = 1] = "UI";
      })(EventDispatcherPriority || _export("EventDispatcherPriority", EventDispatcherPriority = {}));
      InputEventDispatcher = /*#__PURE__*/function () {
        function InputEventDispatcher(inputEventTarget) {
          this.priority = EventDispatcherPriority.GLOBAL;
          this._inputEventTarget = void 0;
          this._inputEventTarget = inputEventTarget;
        }
        var _proto = InputEventDispatcher.prototype;
        _proto.dispatchEvent = function dispatchEvent(event) {
          this._inputEventTarget.emit(event.type, event);
          return true;
        };
        return InputEventDispatcher;
      }();
      pointerEventTypeMap = (_pointerEventTypeMap = {}, _pointerEventTypeMap[InputEventType.MOUSE_DOWN] = InputEventType.TOUCH_START, _pointerEventTypeMap[InputEventType.MOUSE_MOVE] = InputEventType.TOUCH_MOVE, _pointerEventTypeMap[InputEventType.MOUSE_UP] = InputEventType.TOUCH_END, _pointerEventTypeMap);
      /**
       * @en
       * This Input class manages all events of input. include: touch, mouse, accelerometer, gamepad, handle, hmd and keyboard.
       * You can get the `Input` instance with `input`.
       *
       * @zh
       * 该输入类管理所有的输入事件，包括：触摸、鼠标、加速计、游戏手柄、6DOF手柄、头戴显示器 和 键盘。
       * 你可以通过 `input` 获取到 `Input` 的实例。
       *
       * @example
       * ```
       * input.on(Input.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
       * input.off(Input.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
       * ```
       */
      _export("Input", Input = /*#__PURE__*/function () {
        function Input() {
          /**
           * @en Dispatch input event immediately.
           * The input events are collocted to be dispatched in each main loop by default.
           * If you need to recieve the input event immediately, please set this to true.
           * NOTE: if set this to true, the input events are dispatched between each tick, the input event can't be optimized by engine.
           *
           * @zh 立即派发输入事件。
           * 输入事件默认会被收集到每一帧主循环里派发，如果你需要立即接收到输入事件，请把该属性设为 true。
           * 注意：如果设置为 true，则输入事件可能会在帧间触发，这样的输入事件是没办法被引擎优化的。
           */
          this._dispatchImmediately = !NATIVE;
          this._eventTarget = new EventTarget();
          this._touchInput = new TouchInputSource();
          this._mouseInput = new MouseInputSource();
          this._keyboardInput = new KeyboardInputSource();
          this._accelerometerInput = new AccelerometerInputSource();
          this._handleInput = new HandleInputDevice();
          this._hmdInput = new HMDInputDevice();
          this._handheldInput = new HandheldInputDevice();
          this._eventTouchList = [];
          this._eventMouseList = [];
          this._eventKeyboardList = [];
          this._eventAccelerationList = [];
          this._eventGamepadList = [];
          this._eventHandleList = [];
          this._eventHMDList = [];
          this._eventHandheldList = [];
          this._needSimulateTouchMoveEvent = false;
          this._inputEventDispatcher = void 0;
          this._eventDispatcherList = [];
          this._registerEvent();
          this._inputEventDispatcher = new InputEventDispatcher(this._eventTarget);
          this._registerEventDispatcher(this._inputEventDispatcher);
          GamepadInputDevice._init();
        }

        /**
         * This should be a private method, but it's exposed for Editor Only.
         */
        var _proto2 = Input.prototype;
        _proto2._dispatchMouseDownEvent = function _dispatchMouseDownEvent(nativeMouseEvent) {
          var _this$_mouseInput$dis, _this$_mouseInput;
          (_this$_mouseInput$dis = (_this$_mouseInput = this._mouseInput).dispatchMouseDownEvent) === null || _this$_mouseInput$dis === void 0 ? void 0 : _this$_mouseInput$dis.call(_this$_mouseInput, nativeMouseEvent);
        }
        /**
         * This should be a private method, but it's exposed for Editor Only.
         */;
        _proto2._dispatchMouseMoveEvent = function _dispatchMouseMoveEvent(nativeMouseEvent) {
          var _this$_mouseInput$dis2, _this$_mouseInput2;
          (_this$_mouseInput$dis2 = (_this$_mouseInput2 = this._mouseInput).dispatchMouseMoveEvent) === null || _this$_mouseInput$dis2 === void 0 ? void 0 : _this$_mouseInput$dis2.call(_this$_mouseInput2, nativeMouseEvent);
        }
        /**
         * This should be a private method, but it's exposed for Editor Only.
         */;
        _proto2._dispatchMouseUpEvent = function _dispatchMouseUpEvent(nativeMouseEvent) {
          var _this$_mouseInput$dis3, _this$_mouseInput3;
          (_this$_mouseInput$dis3 = (_this$_mouseInput3 = this._mouseInput).dispatchMouseUpEvent) === null || _this$_mouseInput$dis3 === void 0 ? void 0 : _this$_mouseInput$dis3.call(_this$_mouseInput3, nativeMouseEvent);
        }
        /**
         * This should be a private method, but it's exposed for Editor Only.
         */;
        _proto2._dispatchMouseScrollEvent = function _dispatchMouseScrollEvent(nativeMouseEvent) {
          var _this$_mouseInput$dis4, _this$_mouseInput4;
          (_this$_mouseInput$dis4 = (_this$_mouseInput4 = this._mouseInput).dispatchScrollEvent) === null || _this$_mouseInput$dis4 === void 0 ? void 0 : _this$_mouseInput$dis4.call(_this$_mouseInput4, nativeMouseEvent);
        }

        /**
         * This should be a private method, but it's exposed for Editor Only.
         */;
        _proto2._dispatchKeyboardDownEvent = function _dispatchKeyboardDownEvent(nativeKeyboardEvent) {
          var _this$_keyboardInput$, _this$_keyboardInput;
          (_this$_keyboardInput$ = (_this$_keyboardInput = this._keyboardInput).dispatchKeyboardDownEvent) === null || _this$_keyboardInput$ === void 0 ? void 0 : _this$_keyboardInput$.call(_this$_keyboardInput, nativeKeyboardEvent);
        }
        /**
         * This should be a private method, but it's exposed for Editor Only.
         */;
        _proto2._dispatchKeyboardUpEvent = function _dispatchKeyboardUpEvent(nativeKeyboardEvent) {
          var _this$_keyboardInput$2, _this$_keyboardInput2;
          (_this$_keyboardInput$2 = (_this$_keyboardInput2 = this._keyboardInput).dispatchKeyboardUpEvent) === null || _this$_keyboardInput$2 === void 0 ? void 0 : _this$_keyboardInput$2.call(_this$_keyboardInput2, nativeKeyboardEvent);
        }

        /**
         * @en
         * Register a callback of a specific input event type.
         * @zh
         * 注册特定的输入事件回调。
         *
         * @param eventType - The event type
         * @param callback - The event listener's callback
         * @param target - The event listener's target and callee
         */;
        _proto2.on = function on(eventType, callback, target) {
          this._eventTarget.on(eventType, callback, target);
          return callback;
        }

        /**
         * @en
         * Register a callback of a specific input event type once.
         * @zh
         * 注册单次的输入事件回调。
         *
         * @param eventType - The event type
         * @param callback - The event listener's callback
         * @param target - The event listener's target and callee
         */;
        _proto2.once = function once(eventType, callback, target) {
          this._eventTarget.once(eventType, callback, target);
          return callback;
        }

        /**
         * @en
         * Unregister a callback of a specific input event type.
         * @zh
         * 取消注册特定的输入事件回调。
         *
         * @param eventType - The event type
         * @param callback - The event listener's callback
         * @param target - The event listener's target and callee
         */;
        _proto2.off = function off(eventType, callback, target) {
          if (EDITOR_NOT_IN_PREVIEW) {
            return;
          }
          this._eventTarget.off(eventType, callback, target);
        }

        /**
         * @en
         * Get touch object by touch ID.
         * @zh
         * 通过 touch ID 获取 touch对象。
         */;
        _proto2.getTouch = function getTouch(touchID) {
          return touchManager.getTouch(touchID);
        }

        /**
         * @en
         * Get all the current touches objects as array.
         * @zh
         * 获取当前 所有touch对象 的数组。
         */;
        _proto2.getAllTouches = function getAllTouches() {
          return touchManager.getAllTouches();
        }

        /**
         * @en
         * Get the number of touches.
         * @zh
         * 获取当前 touch 对象的数量。
         */;
        _proto2.getTouchCount = function getTouchCount() {
          return touchManager.getTouchCount();
        }

        /**
         * @en
         * Sets whether to enable the accelerometer event listener or not.
         *
         * @zh
         * 是否启用加速度计事件。
         */;
        _proto2.setAccelerometerEnabled = function setAccelerometerEnabled(isEnable) {
          if (EDITOR_NOT_IN_PREVIEW) {
            return;
          }
          if (isEnable) {
            this._accelerometerInput.start();
          } else {
            this._accelerometerInput.stop();
          }
        }

        /**
         * @en
         * Sets the accelerometer interval value.
         *
         * @zh
         * 设置加速度计间隔值。
         */;
        _proto2.setAccelerometerInterval = function setAccelerometerInterval(intervalInMileSeconds) {
          if (EDITOR_NOT_IN_PREVIEW) {
            return;
          }
          this._accelerometerInput.setInterval(intervalInMileSeconds);
        };
        _proto2._simulateEventTouch = function _simulateEventTouch(eventMouse) {
          var eventType = pointerEventTypeMap[eventMouse.type];
          var touchID = 0;
          var touch = touchManager.getOrCreateTouch(touchID, eventMouse.getLocationX(), eventMouse.getLocationY());
          if (!touch) {
            return;
          }
          var changedTouches = [touch];
          var eventTouch = new EventTouch(changedTouches, false, eventType, eventType === InputEventType.TOUCH_END ? [] : changedTouches);
          eventTouch.windowId = eventMouse.windowId;
          if (eventType === InputEventType.TOUCH_END) {
            touchManager.releaseTouch(touchID);
          }
          this._dispatchOrPushEventTouch(eventTouch, this._eventTouchList);
        }

        /**
         * @engineInternal
         */;
        _proto2._registerEventDispatcher = function _registerEventDispatcher(eventDispatcher) {
          this._eventDispatcherList.push(eventDispatcher);
          this._eventDispatcherList.sort(function (a, b) {
            return b.priority - a.priority;
          });
        };
        _proto2._emitEvent = function _emitEvent(event) {
          var length = this._eventDispatcherList.length;
          for (var i = 0; i < length; ++i) {
            var dispatcher = this._eventDispatcherList[i];
            try {
              if (!dispatcher.dispatchEvent(event)) {
                break;
              }
            } catch (e) {
              this._clearEvents();
              throw e;
            }
          }
        };
        _proto2._registerEvent = function _registerEvent() {
          var _this = this;
          if (sys.hasFeature(sys.Feature.INPUT_TOUCH)) {
            var eventTouchList = this._eventTouchList;
            this._touchInput.on(InputEventType.TOUCH_START, function (event) {
              _this._dispatchOrPushEventTouch(event, eventTouchList);
            });
            this._touchInput.on(InputEventType.TOUCH_MOVE, function (event) {
              _this._dispatchOrPushEventTouch(event, eventTouchList);
            });
            this._touchInput.on(InputEventType.TOUCH_END, function (event) {
              _this._dispatchOrPushEventTouch(event, eventTouchList);
            });
            this._touchInput.on(InputEventType.TOUCH_CANCEL, function (event) {
              _this._dispatchOrPushEventTouch(event, eventTouchList);
            });
          }
          if (sys.hasFeature(sys.Feature.EVENT_MOUSE)) {
            var eventMouseList = this._eventMouseList;
            this._mouseInput.on(InputEventType.MOUSE_DOWN, function (event) {
              _this._needSimulateTouchMoveEvent = true;
              _this._simulateEventTouch(event);
              _this._dispatchOrPushEvent(event, eventMouseList);
            });
            this._mouseInput.on(InputEventType.MOUSE_MOVE, function (event) {
              if (_this._needSimulateTouchMoveEvent) {
                _this._simulateEventTouch(event);
              }
              _this._dispatchOrPushEvent(event, eventMouseList);
            });
            this._mouseInput.on(InputEventType.MOUSE_UP, function (event) {
              _this._needSimulateTouchMoveEvent = false;
              _this._simulateEventTouch(event);
              _this._dispatchOrPushEvent(event, eventMouseList);
            });
            this._mouseInput.on(InputEventType.MOUSE_WHEEL, function (event) {
              _this._dispatchOrPushEvent(event, eventMouseList);
            });
          }
          if (sys.hasFeature(sys.Feature.EVENT_KEYBOARD)) {
            var eventKeyboardList = this._eventKeyboardList;
            this._keyboardInput.on(InputEventType.KEY_DOWN, function (event) {
              _this._dispatchOrPushEvent(event, eventKeyboardList);
            });
            this._keyboardInput.on(InputEventType.KEY_PRESSING, function (event) {
              _this._dispatchOrPushEvent(event, eventKeyboardList);
            });
            this._keyboardInput.on(InputEventType.KEY_UP, function (event) {
              _this._dispatchOrPushEvent(event, eventKeyboardList);
            });
          }
          if (sys.hasFeature(sys.Feature.EVENT_ACCELEROMETER)) {
            var eventAccelerationList = this._eventAccelerationList;
            this._accelerometerInput.on(InputEventType.DEVICEMOTION, function (event) {
              _this._dispatchOrPushEvent(event, eventAccelerationList);
            });
          }
          if (sys.hasFeature(sys.Feature.EVENT_GAMEPAD)) {
            var eventGamepadList = this._eventGamepadList;
            GamepadInputDevice._on(InputEventType.GAMEPAD_CHANGE, function (event) {
              _this._dispatchOrPushEvent(event, eventGamepadList);
            });
            GamepadInputDevice._on(InputEventType.GAMEPAD_INPUT, function (event) {
              _this._dispatchOrPushEvent(event, eventGamepadList);
            });
            GamepadInputDevice._on(InputEventType.HANDLE_POSE_INPUT, function (event) {
              _this._dispatchOrPushEvent(event, eventGamepadList);
            });
          }
          if (sys.hasFeature(sys.Feature.EVENT_HANDLE)) {
            var eventHandleList = this._eventHandleList;
            this._handleInput._on(InputEventType.HANDLE_INPUT, function (event) {
              _this._dispatchOrPushEvent(event, eventHandleList);
            });
            this._handleInput._on(InputEventType.HANDLE_POSE_INPUT, function (event) {
              _this._dispatchOrPushEvent(event, eventHandleList);
            });
          }
          if (sys.hasFeature(sys.Feature.EVENT_HMD)) {
            var eventHMDList = this._eventHMDList;
            this._hmdInput._on(InputEventType.HMD_POSE_INPUT, function (event) {
              _this._dispatchOrPushEvent(event, eventHMDList);
            });
          }
          if (sys.hasFeature(sys.Feature.EVENT_HANDHELD)) {
            var eventHandheldList = this._eventHandheldList;
            this._handheldInput._on(InputEventType.HANDHELD_POSE_INPUT, function (event) {
              _this._dispatchOrPushEvent(event, eventHandheldList);
            });
          }
        }

        /**
         * @engineInternal
         */;
        _proto2._clearEvents = function _clearEvents() {
          this._eventMouseList.length = 0;
          this._eventTouchList.length = 0;
          this._eventKeyboardList.length = 0;
          this._eventAccelerationList.length = 0;
          this._eventGamepadList.length = 0;
          this._eventHandleList.length = 0;
          this._eventHMDList.length = 0;
        };
        _proto2._dispatchOrPushEvent = function _dispatchOrPushEvent(event, eventList) {
          if (this._dispatchImmediately) {
            this._emitEvent(event);
          } else {
            eventList.push(event);
          }
        };
        _proto2._dispatchOrPushEventTouch = function _dispatchOrPushEventTouch(eventTouch, touchEventList) {
          if (this._dispatchImmediately) {
            var touches = eventTouch.getTouches();
            var touchesLength = touches.length;
            for (var i = 0; i < touchesLength; ++i) {
              eventTouch.touch = touches[i];
              eventTouch.propagationStopped = eventTouch.propagationImmediateStopped = false;
              this._emitEvent(eventTouch);
            }
          } else {
            touchEventList.push(eventTouch);
          }
        }

        /**
         * @engineInternal
         */;
        _proto2._frameDispatchEvents = function _frameDispatchEvents() {
          var eventHMDList = this._eventHMDList;
          // TODO: culling event queue
          for (var i = 0, length = eventHMDList.length; i < length; ++i) {
            var eventHMD = eventHMDList[i];
            this._emitEvent(eventHMD);
          }
          var eventHandheldList = this._eventHandheldList;
          // TODO: culling event queue
          for (var _i = 0, _length = eventHandheldList.length; _i < _length; ++_i) {
            var eventHandheld = eventHandheldList[_i];
            this._emitEvent(eventHandheld);
          }
          var eventMouseList = this._eventMouseList;
          // TODO: culling event queue
          for (var _i2 = 0, _length2 = eventMouseList.length; _i2 < _length2; ++_i2) {
            var eventMouse = eventMouseList[_i2];
            this._emitEvent(eventMouse);
          }
          var eventTouchList = this._eventTouchList;
          // TODO: culling event queue
          for (var _i3 = 0, _length3 = eventTouchList.length; _i3 < _length3; ++_i3) {
            var eventTouch = eventTouchList[_i3];
            var touches = eventTouch.getTouches();
            var touchesLength = touches.length;
            for (var j = 0; j < touchesLength; ++j) {
              eventTouch.touch = touches[j];
              eventTouch.propagationStopped = eventTouch.propagationImmediateStopped = false;
              this._emitEvent(eventTouch);
            }
          }
          var eventKeyboardList = this._eventKeyboardList;
          // TODO: culling event queue
          for (var _i4 = 0, _length4 = eventKeyboardList.length; _i4 < _length4; ++_i4) {
            var eventKeyboard = eventKeyboardList[_i4];
            this._emitEvent(eventKeyboard);
          }
          var eventAccelerationList = this._eventAccelerationList;
          // TODO: culling event queue
          for (var _i5 = 0, _length5 = eventAccelerationList.length; _i5 < _length5; ++_i5) {
            var eventAcceleration = eventAccelerationList[_i5];
            this._emitEvent(eventAcceleration);
          }
          var eventGamepadList = this._eventGamepadList;
          // TODO: culling event queue
          for (var _i6 = 0, _length6 = eventGamepadList.length; _i6 < _length6; ++_i6) {
            var eventGamepad = eventGamepadList[_i6];
            this._emitEvent(eventGamepad);
          }
          var eventHandleList = this._eventHandleList;
          // TODO: culling event queue
          for (var _i7 = 0, _length7 = eventHandleList.length; _i7 < _length7; ++_i7) {
            var eventHandle = eventHandleList[_i7];
            this._emitEvent(eventHandle);
          }
          this._clearEvents();
        };
        return Input;
      }());
      /**
       * @en
       * The singleton of the Input class, this singleton manages all events of input. include: touch, mouse, accelerometer, gamepad, handle, hmd and keyboard.
       *
       * @zh
       * 输入类单例，该单例管理所有的输入事件，包括：触摸、鼠标、加速计、游戏手柄、6DOF手柄、头戴显示器 和 键盘。
       *
       * @example
       * ```
       * input.on(Input.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
       * input.off(Input.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
       * ```
       */
      /**
       * @en The input event type
       * @zh 输入事件类型
       */
      Input.EventType = InputEventType;
      _export("input", input = new Input());
    }
  };
});