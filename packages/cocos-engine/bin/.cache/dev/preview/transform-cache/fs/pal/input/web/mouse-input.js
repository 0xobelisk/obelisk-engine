System.register("q-bundled:///fs/pal/input/web/mouse-input.js", ["../../../../virtual/internal%253Aconstants.js", "pal/system-info", "pal/screen-adapter", "../../../cocos/input/types/index.js", "../../../cocos/core/event/index.js", "../../../cocos/core/math/index.js", "../../../cocos/input/types/event-enum.js", "../../system-info/enum-type/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, TEST, systemInfo, screenAdapter, EventMouse, EventTarget, Rect, Vec2, InputEventType, Feature, MouseInputSource;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             https://www.cocos.com/
                                                                                                                                                                                                                                                                                                                                                                                            
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
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_palScreenAdapter) {
      screenAdapter = _palScreenAdapter.screenAdapter;
    }, function (_cocosInputTypesIndexJs) {
      EventMouse = _cocosInputTypesIndexJs.EventMouse;
    }, function (_cocosCoreEventIndexJs) {
      EventTarget = _cocosCoreEventIndexJs.EventTarget;
    }, function (_cocosCoreMathIndexJs) {
      Rect = _cocosCoreMathIndexJs.Rect;
      Vec2 = _cocosCoreMathIndexJs.Vec2;
    }, function (_cocosInputTypesEventEnumJs) {
      InputEventType = _cocosInputTypesEventEnumJs.InputEventType;
    }, function (_systemInfoEnumTypeIndexJs) {
      Feature = _systemInfoEnumTypeIndexJs.Feature;
    }],
    execute: function () {
      _export("MouseInputSource", MouseInputSource = /*#__PURE__*/function () {
        function MouseInputSource() {
          this._canvas = void 0;
          this._eventTarget = new EventTarget();
          this._pointLocked = false;
          this._isPressed = false;
          this._preMousePos = new Vec2();
          this._handleMouseDown = void 0;
          this._handleMouseMove = void 0;
          this._handleMouseUp = void 0;
          if (systemInfo.hasFeature(Feature.EVENT_MOUSE)) {
            this._canvas = document.getElementById('GameCanvas');
            if (!this._canvas && !TEST && !EDITOR) {
              console.warn('failed to access canvas');
            }
            this._handleMouseDown = this._createCallback(InputEventType.MOUSE_DOWN);
            this._handleMouseMove = this._createCallback(InputEventType.MOUSE_MOVE);
            this._handleMouseUp = this._createCallback(InputEventType.MOUSE_UP);
            // In Editor, we receive mouse event from manually event dispatching.
            if (!EDITOR) {
              this._registerEvent();
            }
          }
        }
        var _proto = MouseInputSource.prototype;
        _proto.dispatchMouseDownEvent = function dispatchMouseDownEvent(nativeMouseEvent) {
          this._handleMouseDown(nativeMouseEvent);
        };
        _proto.dispatchMouseMoveEvent = function dispatchMouseMoveEvent(nativeMouseEvent) {
          this._handleMouseMove(nativeMouseEvent);
        };
        _proto.dispatchMouseUpEvent = function dispatchMouseUpEvent(nativeMouseEvent) {
          this._handleMouseUp(nativeMouseEvent);
        };
        _proto.dispatchScrollEvent = function dispatchScrollEvent(nativeMouseEvent) {
          this._handleMouseWheel(nativeMouseEvent);
        };
        _proto.on = function on(eventType, callback, target) {
          this._eventTarget.on(eventType, callback, target);
        };
        _proto._getCanvasRect = function _getCanvasRect() {
          var canvas = this._canvas;
          var box = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();
          if (box) {
            return new Rect(box.x, box.y, box.width, box.height);
          }
          return new Rect(0, 0, 0, 0);
        };
        _proto._getLocation = function _getLocation(mouseEvent) {
          var canvasRect = this._getCanvasRect();
          var dpr = screenAdapter.devicePixelRatio;
          var x = this._pointLocked ? this._preMousePos.x / dpr + mouseEvent.movementX : mouseEvent.clientX - canvasRect.x;
          var y = this._pointLocked ? this._preMousePos.y / dpr - mouseEvent.movementY : canvasRect.y + canvasRect.height - mouseEvent.clientY;
          x *= dpr;
          y *= dpr;
          return new Vec2(x, y);
        };
        _proto._registerEvent = function _registerEvent() {
          var _this = this,
            _this$_canvas,
            _this$_canvas2,
            _this$_canvas3,
            _this$_canvas4;
          // register mouse down event
          window.addEventListener('mousedown', function () {
            _this._isPressed = true;
          });
          (_this$_canvas = this._canvas) === null || _this$_canvas === void 0 ? void 0 : _this$_canvas.addEventListener('mousedown', this._handleMouseDown);

          // register mouse move event
          (_this$_canvas2 = this._canvas) === null || _this$_canvas2 === void 0 ? void 0 : _this$_canvas2.addEventListener('mousemove', this._handleMouseMove);

          // register mouse up event
          window.addEventListener('mouseup', this._handleMouseUp);
          (_this$_canvas3 = this._canvas) === null || _this$_canvas3 === void 0 ? void 0 : _this$_canvas3.addEventListener('mouseup', this._handleMouseUp);

          // register wheel event
          (_this$_canvas4 = this._canvas) === null || _this$_canvas4 === void 0 ? void 0 : _this$_canvas4.addEventListener('wheel', this._handleMouseWheel.bind(this));
          this._registerPointerLockEvent();
        }

        // To be removed in the future.
        ;
        _proto._registerPointerLockEvent = function _registerPointerLockEvent() {
          var _this2 = this;
          var lockChangeAlert = function lockChangeAlert() {
            var canvas = _this2._canvas;
            // NOTE: mozPointerLockElement is not a standard web interface
            if (document.pointerLockElement === canvas || document.mozPointerLockElement === canvas) {
              _this2._pointLocked = true;
            } else {
              _this2._pointLocked = false;
            }
          };
          if ('onpointerlockchange' in document) {
            document.addEventListener('pointerlockchange', lockChangeAlert, false);
          } else if ('onmozpointerlockchange' in document) {
            // NOTE: handle event compatibility
            document.addEventListener('mozpointerlockchange', lockChangeAlert, false);
          }
        };
        _proto._createCallback = function _createCallback(eventType) {
          var _this3 = this;
          return function (mouseEvent) {
            var _this3$_canvas;
            var location = _this3._getLocation(mouseEvent);
            var button = mouseEvent.button,
              buttons = mouseEvent.buttons;
            var targetButton = button;
            switch (eventType) {
              case InputEventType.MOUSE_DOWN:
                (_this3$_canvas = _this3._canvas) === null || _this3$_canvas === void 0 ? void 0 : _this3$_canvas.focus();
                _this3._isPressed = true;
                break;
              case InputEventType.MOUSE_UP:
                _this3._isPressed = false;
                break;
              case InputEventType.MOUSE_MOVE:
                // mouseEvent.button doesn't work well in mouse move event
                // now we don't support multiple buttons in one mouse event
                if (1 & buttons) {
                  targetButton = EventMouse.BUTTON_LEFT;
                } else if (2 & buttons) {
                  targetButton = EventMouse.BUTTON_RIGHT;
                } else if (4 & buttons) {
                  targetButton = EventMouse.BUTTON_MIDDLE;
                } else {
                  targetButton = EventMouse.BUTTON_MISSING;
                }
                break;
              default:
                break;
            }
            var eventMouse = new EventMouse(eventType, false, _this3._preMousePos);
            eventMouse.setLocation(location.x, location.y);
            eventMouse.setButton(targetButton);
            eventMouse.movementX = mouseEvent.movementX;
            eventMouse.movementY = mouseEvent.movementY;

            // update previous mouse position.
            _this3._preMousePos.set(location.x, location.y);
            mouseEvent.stopPropagation();
            if (mouseEvent.target === _this3._canvas) {
              mouseEvent.preventDefault();
            }
            _this3._eventTarget.emit(eventType, eventMouse);
          };
        };
        _proto._handleMouseWheel = function _handleMouseWheel(mouseEvent) {
          var eventType = InputEventType.MOUSE_WHEEL;
          var location = this._getLocation(mouseEvent);
          var button = mouseEvent.button;
          var eventMouse = new EventMouse(eventType, false, this._preMousePos);
          eventMouse.setLocation(location.x, location.y);
          eventMouse.setButton(button);
          eventMouse.movementX = mouseEvent.movementX;
          eventMouse.movementY = mouseEvent.movementY;
          var wheelSensitivityFactor = 5;
          eventMouse.setScrollData(mouseEvent.deltaX * wheelSensitivityFactor, -mouseEvent.deltaY * wheelSensitivityFactor);
          // update previous mouse position.
          this._preMousePos.set(location.x, location.y);
          mouseEvent.stopPropagation();
          if (mouseEvent.target === this._canvas) {
            mouseEvent.preventDefault();
          }
          this._eventTarget.emit(eventType, eventMouse);
        };
        return MouseInputSource;
      }());
    }
  };
});