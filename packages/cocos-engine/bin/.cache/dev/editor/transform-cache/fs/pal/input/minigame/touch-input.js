System.register("q-bundled:///fs/pal/input/minigame/touch-input.js", ["pal/minigame", "pal/screen-adapter", "pal/system-info", "../../../cocos/core/math/index.js", "../../../cocos/core/event/index.js", "../../../cocos/input/types/index.js", "../touch-manager.js", "../../../cocos/core/platform/macro.js", "../../../cocos/input/types/event-enum.js", "../../system-info/enum-type/index.js"], function (_export, _context) {
  "use strict";

  var minigame, screenAdapter, systemInfo, Vec2, EventTarget, EventTouch, touchManager, macro, InputEventType, Feature, TouchInputSource;
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
  _export("TouchInputSource", void 0);
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
      EventTouch = _cocosInputTypesIndexJs.EventTouch;
    }, function (_touchManagerJs) {
      touchManager = _touchManagerJs.touchManager;
    }, function (_cocosCorePlatformMacroJs) {
      macro = _cocosCorePlatformMacroJs.macro;
    }, function (_cocosInputTypesEventEnumJs) {
      InputEventType = _cocosInputTypesEventEnumJs.InputEventType;
    }, function (_systemInfoEnumTypeIndexJs) {
      Feature = _systemInfoEnumTypeIndexJs.Feature;
    }],
    execute: function () {
      _export("TouchInputSource", TouchInputSource = class TouchInputSource {
        constructor() {
          this._eventTarget = new EventTarget();
          if (systemInfo.hasFeature(Feature.INPUT_TOUCH)) {
            this._registerEvent();
          }
        }
        _registerEvent() {
          minigame.onTouchStart(this._createCallback(InputEventType.TOUCH_START));
          minigame.onTouchMove(this._createCallback(InputEventType.TOUCH_MOVE));
          minigame.onTouchEnd(this._createCallback(InputEventType.TOUCH_END));
          minigame.onTouchCancel(this._createCallback(InputEventType.TOUCH_CANCEL));
        }
        _createCallback(eventType) {
          return event => {
            const handleTouches = [];
            const windowSize = screenAdapter.windowSize;
            const dpr = screenAdapter.devicePixelRatio;
            const length = event.changedTouches.length;
            for (let i = 0; i < length; ++i) {
              const changedTouch = event.changedTouches[i];
              const touchID = changedTouch.identifier;
              if (touchID === null) {
                continue;
              }
              const location = this._getLocation(changedTouch, windowSize, dpr);
              const touch = touchManager.getOrCreateTouch(touchID, location.x, location.y);
              if (!touch) {
                continue;
              }
              if (eventType === InputEventType.TOUCH_END || eventType === InputEventType.TOUCH_CANCEL) {
                touchManager.releaseTouch(touchID);
              }
              handleTouches.push(touch);
            }
            if (handleTouches.length > 0) {
              const eventTouch = new EventTouch(handleTouches, false, eventType, macro.ENABLE_MULTI_TOUCH ? touchManager.getAllTouches() : handleTouches);
              this._eventTarget.emit(eventType, eventTouch);
            }
          };
        }
        _getLocation(touch, windowSize, dpr) {
          const x = touch.clientX * dpr;
          const y = windowSize.height - touch.clientY * dpr;
          return new Vec2(x, y);
        }
        on(eventType, callback, target) {
          this._eventTarget.on(eventType, callback, target);
        }
      });
    }
  };
});