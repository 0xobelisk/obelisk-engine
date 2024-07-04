System.register("q-bundled:///fs/pal/input/minigame/mouse-input.js", ["pal/minigame", "pal/screen-adapter", "pal/system-info", "../../../cocos/core/math/index.js", "../../../cocos/core/event/index.js", "../../../cocos/input/types/index.js", "../../../cocos/input/types/event-enum.js", "../../system-info/enum-type/index.js"], function (_export, _context) {
  "use strict";

  var minigame, screenAdapter, systemInfo, Vec2, EventTarget, EventMouse, InputEventType, Feature, MouseInputSource;
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
    setters: [function (_palMinigame) {
      minigame = _palMinigame.minigame;
    }, function (_palScreenAdapter) {
      screenAdapter = _palScreenAdapter.screenAdapter;
    }, function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_cocosCoreMathIndexJs) {
      Vec2 = _cocosCoreMathIndexJs.Vec2;
    }, function (_cocosCoreEventIndexJs) {
      EventTarget = _cocosCoreEventIndexJs.EventTarget;
    }, function (_cocosInputTypesIndexJs) {
      EventMouse = _cocosInputTypesIndexJs.EventMouse;
    }, function (_cocosInputTypesEventEnumJs) {
      InputEventType = _cocosInputTypesEventEnumJs.InputEventType;
    }, function (_systemInfoEnumTypeIndexJs) {
      Feature = _systemInfoEnumTypeIndexJs.Feature;
    }],
    execute: function () {
      _export("MouseInputSource", MouseInputSource = /*#__PURE__*/function () {
        function MouseInputSource() {
          this._eventTarget = new EventTarget();
          this._isPressed = false;
          this._preMousePos = new Vec2();
          if (systemInfo.hasFeature(Feature.EVENT_MOUSE)) {
            this._registerEvent();
          }
        }
        var _proto = MouseInputSource.prototype;
        _proto._getLocation = function _getLocation(event) {
          var windowSize = screenAdapter.windowSize;
          var dpr = screenAdapter.devicePixelRatio;
          var x = event.x * dpr;
          var y = windowSize.height - event.y * dpr;
          return new Vec2(x, y);
        };
        _proto._registerEvent = function _registerEvent() {
          var _minigame$wx, _minigame$wx$onMouseD, _minigame$wx2, _minigame$wx2$onMouse, _minigame$wx3, _minigame$wx3$onMouse, _minigame$wx4, _minigame$wx4$onWheel;
          (_minigame$wx = minigame.wx) === null || _minigame$wx === void 0 ? void 0 : (_minigame$wx$onMouseD = _minigame$wx.onMouseDown) === null || _minigame$wx$onMouseD === void 0 ? void 0 : _minigame$wx$onMouseD.call(_minigame$wx, this._createCallback(InputEventType.MOUSE_DOWN));
          (_minigame$wx2 = minigame.wx) === null || _minigame$wx2 === void 0 ? void 0 : (_minigame$wx2$onMouse = _minigame$wx2.onMouseMove) === null || _minigame$wx2$onMouse === void 0 ? void 0 : _minigame$wx2$onMouse.call(_minigame$wx2, this._createCallback(InputEventType.MOUSE_MOVE));
          (_minigame$wx3 = minigame.wx) === null || _minigame$wx3 === void 0 ? void 0 : (_minigame$wx3$onMouse = _minigame$wx3.onMouseUp) === null || _minigame$wx3$onMouse === void 0 ? void 0 : _minigame$wx3$onMouse.call(_minigame$wx3, this._createCallback(InputEventType.MOUSE_UP));
          (_minigame$wx4 = minigame.wx) === null || _minigame$wx4 === void 0 ? void 0 : (_minigame$wx4$onWheel = _minigame$wx4.onWheel) === null || _minigame$wx4$onWheel === void 0 ? void 0 : _minigame$wx4$onWheel.call(_minigame$wx4, this._handleMouseWheel.bind(this));
        };
        _proto._createCallback = function _createCallback(eventType) {
          var _this = this;
          return function (event) {
            var location = _this._getLocation(event);
            var button = event.button;
            switch (eventType) {
              case InputEventType.MOUSE_DOWN:
                _this._isPressed = true;
                break;
              case InputEventType.MOUSE_UP:
                _this._isPressed = false;
                break;
              case InputEventType.MOUSE_MOVE:
                if (!_this._isPressed) {
                  button = EventMouse.BUTTON_MISSING;
                }
                break;
              default:
                break;
            }
            var eventMouse = new EventMouse(eventType, false, _this._preMousePos);
            eventMouse.setLocation(location.x, location.y);
            eventMouse.setButton(button);
            eventMouse.movementX = location.x - _this._preMousePos.x;
            eventMouse.movementY = _this._preMousePos.y - location.y;

            // update previous mouse position.
            _this._preMousePos.set(location.x, location.y);
            _this._eventTarget.emit(eventType, eventMouse);
          };
        };
        _proto._handleMouseWheel = function _handleMouseWheel(event) {
          var eventType = InputEventType.MOUSE_WHEEL;
          var location = this._getLocation(event);
          var button = event.button;
          var eventMouse = new EventMouse(eventType, false, this._preMousePos);
          eventMouse.setLocation(location.x, location.y);
          eventMouse.setButton(button);
          eventMouse.movementX = location.x - this._preMousePos.x;
          eventMouse.movementY = this._preMousePos.y - location.y;
          eventMouse.setScrollData(event.deltaX, -event.deltaY);
          // update previous mouse position.
          this._preMousePos.set(location.x, location.y);
          this._eventTarget.emit(InputEventType.MOUSE_WHEEL, eventMouse);
        };
        _proto.on = function on(eventType, callback, target) {
          this._eventTarget.on(eventType, callback, target);
        };
        return MouseInputSource;
      }());
    }
  };
});