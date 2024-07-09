System.register("q-bundled:///fs/cocos/input/input.js", ["../../../virtual/internal%253Aconstants.js", "pal/input", "../../pal/input/touch-manager.js", "../core/index.js", "./types/index.js", "./types/event-enum.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, NATIVE, AccelerometerInputSource, GamepadInputDevice, HMDInputDevice, HandheldInputDevice, HandleInputDevice, KeyboardInputSource, MouseInputSource, TouchInputSource, touchManager, EventTarget, sys, EventTouch, InputEventType, InputEventDispatcher, Input, EventDispatcherPriority, pointerEventTypeMap, input;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2011-2012 cocos2d-x.org
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2013-2016 Chukong Technologies Inc.
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             http://www.cocos2d-x.org
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                             of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                             in the Software without restriction, including without limitation the rights to
                                                                                                                                                                                                                                                                                                                                                                                             use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
                                                                                                                                                                                                                                                                                                                                                                                             of the Software, and to permit persons to whom the Software is furnished to do so,
                                                                                                                                                                                                                                                                                                                                                                                             subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                             all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                             IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                             FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                             AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                             LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                             OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                            */
  _export({
    Input: void 0,
    EventDispatcherPriority: void 0
  });
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
      InputEventDispatcher = class InputEventDispatcher {
        constructor(inputEventTarget) {
          this.priority = EventDispatcherPriority.GLOBAL;
          this._inputEventTarget = void 0;
          this._inputEventTarget = inputEventTarget;
        }
        dispatchEvent(event) {
          this._inputEventTarget.emit(event.type, event);
          return true;
        }
      };
      pointerEventTypeMap = {
        [InputEventType.MOUSE_DOWN]: InputEventType.TOUCH_START,
        [InputEventType.MOUSE_MOVE]: InputEventType.TOUCH_MOVE,
        [InputEventType.MOUSE_UP]: InputEventType.TOUCH_END
      };
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
      _export("Input", Input = class Input {
        constructor() {
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
        _dispatchMouseDownEvent(nativeMouseEvent) {
          var _this$_mouseInput$dis, _this$_mouseInput;
          (_this$_mouseInput$dis = (_this$_mouseInput = this._mouseInput).dispatchMouseDownEvent) === null || _this$_mouseInput$dis === void 0 ? void 0 : _this$_mouseInput$dis.call(_this$_mouseInput, nativeMouseEvent);
        }
        /**
         * This should be a private method, but it's exposed for Editor Only.
         */
        _dispatchMouseMoveEvent(nativeMouseEvent) {
          var _this$_mouseInput$dis2, _this$_mouseInput2;
          (_this$_mouseInput$dis2 = (_this$_mouseInput2 = this._mouseInput).dispatchMouseMoveEvent) === null || _this$_mouseInput$dis2 === void 0 ? void 0 : _this$_mouseInput$dis2.call(_this$_mouseInput2, nativeMouseEvent);
        }
        /**
         * This should be a private method, but it's exposed for Editor Only.
         */
        _dispatchMouseUpEvent(nativeMouseEvent) {
          var _this$_mouseInput$dis3, _this$_mouseInput3;
          (_this$_mouseInput$dis3 = (_this$_mouseInput3 = this._mouseInput).dispatchMouseUpEvent) === null || _this$_mouseInput$dis3 === void 0 ? void 0 : _this$_mouseInput$dis3.call(_this$_mouseInput3, nativeMouseEvent);
        }
        /**
         * This should be a private method, but it's exposed for Editor Only.
         */
        _dispatchMouseScrollEvent(nativeMouseEvent) {
          var _this$_mouseInput$dis4, _this$_mouseInput4;
          (_this$_mouseInput$dis4 = (_this$_mouseInput4 = this._mouseInput).dispatchScrollEvent) === null || _this$_mouseInput$dis4 === void 0 ? void 0 : _this$_mouseInput$dis4.call(_this$_mouseInput4, nativeMouseEvent);
        }

        /**
         * This should be a private method, but it's exposed for Editor Only.
         */
        _dispatchKeyboardDownEvent(nativeKeyboardEvent) {
          var _this$_keyboardInput$, _this$_keyboardInput;
          (_this$_keyboardInput$ = (_this$_keyboardInput = this._keyboardInput).dispatchKeyboardDownEvent) === null || _this$_keyboardInput$ === void 0 ? void 0 : _this$_keyboardInput$.call(_this$_keyboardInput, nativeKeyboardEvent);
        }
        /**
         * This should be a private method, but it's exposed for Editor Only.
         */
        _dispatchKeyboardUpEvent(nativeKeyboardEvent) {
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
         */
        on(eventType, callback, target) {
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
         */
        once(eventType, callback, target) {
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
         */
        off(eventType, callback, target) {
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
         */
        getTouch(touchID) {
          return touchManager.getTouch(touchID);
        }

        /**
         * @en
         * Get all the current touches objects as array.
         * @zh
         * 获取当前 所有touch对象 的数组。
         */
        getAllTouches() {
          return touchManager.getAllTouches();
        }

        /**
         * @en
         * Get the number of touches.
         * @zh
         * 获取当前 touch 对象的数量。
         */
        getTouchCount() {
          return touchManager.getTouchCount();
        }

        /**
         * @en
         * Sets whether to enable the accelerometer event listener or not.
         *
         * @zh
         * 是否启用加速度计事件。
         */
        setAccelerometerEnabled(isEnable) {
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
         */
        setAccelerometerInterval(intervalInMileSeconds) {
          if (EDITOR_NOT_IN_PREVIEW) {
            return;
          }
          this._accelerometerInput.setInterval(intervalInMileSeconds);
        }
        _simulateEventTouch(eventMouse) {
          const eventType = pointerEventTypeMap[eventMouse.type];
          const touchID = 0;
          const touch = touchManager.getOrCreateTouch(touchID, eventMouse.getLocationX(), eventMouse.getLocationY());
          if (!touch) {
            return;
          }
          const changedTouches = [touch];
          const eventTouch = new EventTouch(changedTouches, false, eventType, eventType === InputEventType.TOUCH_END ? [] : changedTouches);
          eventTouch.windowId = eventMouse.windowId;
          if (eventType === InputEventType.TOUCH_END) {
            touchManager.releaseTouch(touchID);
          }
          this._dispatchOrPushEventTouch(eventTouch, this._eventTouchList);
        }

        /**
         * @engineInternal
         */
        _registerEventDispatcher(eventDispatcher) {
          this._eventDispatcherList.push(eventDispatcher);
          this._eventDispatcherList.sort((a, b) => b.priority - a.priority);
        }
        _emitEvent(event) {
          const length = this._eventDispatcherList.length;
          for (let i = 0; i < length; ++i) {
            const dispatcher = this._eventDispatcherList[i];
            try {
              if (!dispatcher.dispatchEvent(event)) {
                break;
              }
            } catch (e) {
              this._clearEvents();
              throw e;
            }
          }
        }
        _registerEvent() {
          if (sys.hasFeature(sys.Feature.INPUT_TOUCH)) {
            const eventTouchList = this._eventTouchList;
            this._touchInput.on(InputEventType.TOUCH_START, event => {
              this._dispatchOrPushEventTouch(event, eventTouchList);
            });
            this._touchInput.on(InputEventType.TOUCH_MOVE, event => {
              this._dispatchOrPushEventTouch(event, eventTouchList);
            });
            this._touchInput.on(InputEventType.TOUCH_END, event => {
              this._dispatchOrPushEventTouch(event, eventTouchList);
            });
            this._touchInput.on(InputEventType.TOUCH_CANCEL, event => {
              this._dispatchOrPushEventTouch(event, eventTouchList);
            });
          }
          if (sys.hasFeature(sys.Feature.EVENT_MOUSE)) {
            const eventMouseList = this._eventMouseList;
            this._mouseInput.on(InputEventType.MOUSE_DOWN, event => {
              this._needSimulateTouchMoveEvent = true;
              this._simulateEventTouch(event);
              this._dispatchOrPushEvent(event, eventMouseList);
            });
            this._mouseInput.on(InputEventType.MOUSE_MOVE, event => {
              if (this._needSimulateTouchMoveEvent) {
                this._simulateEventTouch(event);
              }
              this._dispatchOrPushEvent(event, eventMouseList);
            });
            this._mouseInput.on(InputEventType.MOUSE_UP, event => {
              this._needSimulateTouchMoveEvent = false;
              this._simulateEventTouch(event);
              this._dispatchOrPushEvent(event, eventMouseList);
            });
            this._mouseInput.on(InputEventType.MOUSE_WHEEL, event => {
              this._dispatchOrPushEvent(event, eventMouseList);
            });
          }
          if (sys.hasFeature(sys.Feature.EVENT_KEYBOARD)) {
            const eventKeyboardList = this._eventKeyboardList;
            this._keyboardInput.on(InputEventType.KEY_DOWN, event => {
              this._dispatchOrPushEvent(event, eventKeyboardList);
            });
            this._keyboardInput.on(InputEventType.KEY_PRESSING, event => {
              this._dispatchOrPushEvent(event, eventKeyboardList);
            });
            this._keyboardInput.on(InputEventType.KEY_UP, event => {
              this._dispatchOrPushEvent(event, eventKeyboardList);
            });
          }
          if (sys.hasFeature(sys.Feature.EVENT_ACCELEROMETER)) {
            const eventAccelerationList = this._eventAccelerationList;
            this._accelerometerInput.on(InputEventType.DEVICEMOTION, event => {
              this._dispatchOrPushEvent(event, eventAccelerationList);
            });
          }
          if (sys.hasFeature(sys.Feature.EVENT_GAMEPAD)) {
            const eventGamepadList = this._eventGamepadList;
            GamepadInputDevice._on(InputEventType.GAMEPAD_CHANGE, event => {
              this._dispatchOrPushEvent(event, eventGamepadList);
            });
            GamepadInputDevice._on(InputEventType.GAMEPAD_INPUT, event => {
              this._dispatchOrPushEvent(event, eventGamepadList);
            });
            GamepadInputDevice._on(InputEventType.HANDLE_POSE_INPUT, event => {
              this._dispatchOrPushEvent(event, eventGamepadList);
            });
          }
          if (sys.hasFeature(sys.Feature.EVENT_HANDLE)) {
            const eventHandleList = this._eventHandleList;
            this._handleInput._on(InputEventType.HANDLE_INPUT, event => {
              this._dispatchOrPushEvent(event, eventHandleList);
            });
            this._handleInput._on(InputEventType.HANDLE_POSE_INPUT, event => {
              this._dispatchOrPushEvent(event, eventHandleList);
            });
          }
          if (sys.hasFeature(sys.Feature.EVENT_HMD)) {
            const eventHMDList = this._eventHMDList;
            this._hmdInput._on(InputEventType.HMD_POSE_INPUT, event => {
              this._dispatchOrPushEvent(event, eventHMDList);
            });
          }
          if (sys.hasFeature(sys.Feature.EVENT_HANDHELD)) {
            const eventHandheldList = this._eventHandheldList;
            this._handheldInput._on(InputEventType.HANDHELD_POSE_INPUT, event => {
              this._dispatchOrPushEvent(event, eventHandheldList);
            });
          }
        }

        /**
         * @engineInternal
         */
        _clearEvents() {
          this._eventMouseList.length = 0;
          this._eventTouchList.length = 0;
          this._eventKeyboardList.length = 0;
          this._eventAccelerationList.length = 0;
          this._eventGamepadList.length = 0;
          this._eventHandleList.length = 0;
          this._eventHMDList.length = 0;
        }
        _dispatchOrPushEvent(event, eventList) {
          if (this._dispatchImmediately) {
            this._emitEvent(event);
          } else {
            eventList.push(event);
          }
        }
        _dispatchOrPushEventTouch(eventTouch, touchEventList) {
          if (this._dispatchImmediately) {
            const touches = eventTouch.getTouches();
            const touchesLength = touches.length;
            for (let i = 0; i < touchesLength; ++i) {
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
         */
        _frameDispatchEvents() {
          const eventHMDList = this._eventHMDList;
          // TODO: culling event queue
          for (let i = 0, length = eventHMDList.length; i < length; ++i) {
            const eventHMD = eventHMDList[i];
            this._emitEvent(eventHMD);
          }
          const eventHandheldList = this._eventHandheldList;
          // TODO: culling event queue
          for (let i = 0, length = eventHandheldList.length; i < length; ++i) {
            const eventHandheld = eventHandheldList[i];
            this._emitEvent(eventHandheld);
          }
          const eventMouseList = this._eventMouseList;
          // TODO: culling event queue
          for (let i = 0, length = eventMouseList.length; i < length; ++i) {
            const eventMouse = eventMouseList[i];
            this._emitEvent(eventMouse);
          }
          const eventTouchList = this._eventTouchList;
          // TODO: culling event queue
          for (let i = 0, length = eventTouchList.length; i < length; ++i) {
            const eventTouch = eventTouchList[i];
            const touches = eventTouch.getTouches();
            const touchesLength = touches.length;
            for (let j = 0; j < touchesLength; ++j) {
              eventTouch.touch = touches[j];
              eventTouch.propagationStopped = eventTouch.propagationImmediateStopped = false;
              this._emitEvent(eventTouch);
            }
          }
          const eventKeyboardList = this._eventKeyboardList;
          // TODO: culling event queue
          for (let i = 0, length = eventKeyboardList.length; i < length; ++i) {
            const eventKeyboard = eventKeyboardList[i];
            this._emitEvent(eventKeyboard);
          }
          const eventAccelerationList = this._eventAccelerationList;
          // TODO: culling event queue
          for (let i = 0, length = eventAccelerationList.length; i < length; ++i) {
            const eventAcceleration = eventAccelerationList[i];
            this._emitEvent(eventAcceleration);
          }
          const eventGamepadList = this._eventGamepadList;
          // TODO: culling event queue
          for (let i = 0, length = eventGamepadList.length; i < length; ++i) {
            const eventGamepad = eventGamepadList[i];
            this._emitEvent(eventGamepad);
          }
          const eventHandleList = this._eventHandleList;
          // TODO: culling event queue
          for (let i = 0, length = eventHandleList.length; i < length; ++i) {
            const eventHandle = eventHandleList[i];
            this._emitEvent(eventHandle);
          }
          this._clearEvents();
        }
      });
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