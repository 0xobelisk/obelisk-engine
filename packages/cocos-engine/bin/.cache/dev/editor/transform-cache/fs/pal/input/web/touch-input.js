System.register("q-bundled:///fs/pal/input/web/touch-input.js", ["../../../../virtual/internal%253Aconstants.js", "pal/system-info", "pal/screen-adapter", "../../../cocos/core/math/index.js", "../../../cocos/core/event/index.js", "../../../cocos/input/types/index.js", "../touch-manager.js", "../../../cocos/core/platform/macro.js", "../../../cocos/input/types/event-enum.js", "../../system-info/enum-type/index.js", "../../../cocos/core/platform/debug.js"], function (_export, _context) {
  "use strict";

  var EDITOR, TEST, systemInfo, screenAdapter, Rect, Vec2, EventTarget, EventTouch, touchManager, macro, InputEventType, Feature, warn, TouchInputSource;
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
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_palScreenAdapter) {
      screenAdapter = _palScreenAdapter.screenAdapter;
    }, function (_cocosCoreMathIndexJs) {
      Rect = _cocosCoreMathIndexJs.Rect;
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
    }, function (_cocosCorePlatformDebugJs) {
      warn = _cocosCorePlatformDebugJs.warn;
    }],
    execute: function () {
      _export("TouchInputSource", TouchInputSource = class TouchInputSource {
        constructor() {
          this._canvas = void 0;
          this._eventTarget = new EventTarget();
          if (systemInfo.hasFeature(Feature.INPUT_TOUCH)) {
            this._canvas = document.getElementById('GameCanvas');
            if (!this._canvas && !TEST && !EDITOR) {
              warn('failed to access canvas');
            }
            // In Editor, we don't receive touch event but maybe receive simulated touch event.
            if (!EDITOR) {
              this._registerEvent();
            }
          }
        }
        _registerEvent() {
          var _this$_canvas, _this$_canvas2, _this$_canvas3, _this$_canvas4;
          // IDEA: need to register on window ?
          (_this$_canvas = this._canvas) === null || _this$_canvas === void 0 ? void 0 : _this$_canvas.addEventListener('touchstart', this._createCallback(InputEventType.TOUCH_START));
          (_this$_canvas2 = this._canvas) === null || _this$_canvas2 === void 0 ? void 0 : _this$_canvas2.addEventListener('touchmove', this._createCallback(InputEventType.TOUCH_MOVE));
          (_this$_canvas3 = this._canvas) === null || _this$_canvas3 === void 0 ? void 0 : _this$_canvas3.addEventListener('touchend', this._createCallback(InputEventType.TOUCH_END));
          (_this$_canvas4 = this._canvas) === null || _this$_canvas4 === void 0 ? void 0 : _this$_canvas4.addEventListener('touchcancel', this._createCallback(InputEventType.TOUCH_CANCEL));
        }
        _createCallback(eventType) {
          return event => {
            const canvasRect = this._getCanvasRect();
            const handleTouches = [];
            const length = event.changedTouches.length;
            for (let i = 0; i < length; ++i) {
              const changedTouch = event.changedTouches[i];
              const touchID = changedTouch.identifier;
              if (touchID === null) {
                continue;
              }
              const location = this._getLocation(changedTouch, canvasRect);
              const touch = touchManager.getOrCreateTouch(touchID, location.x, location.y);
              if (!touch) {
                continue;
              }
              if (eventType === InputEventType.TOUCH_END || eventType === InputEventType.TOUCH_CANCEL) {
                touchManager.releaseTouch(touchID);
              }
              handleTouches.push(touch);
            }
            event.stopPropagation();
            if (event.target === this._canvas) {
              event.preventDefault();
            }
            if (eventType === InputEventType.TOUCH_START) {
              var _this$_canvas5;
              (_this$_canvas5 = this._canvas) === null || _this$_canvas5 === void 0 ? void 0 : _this$_canvas5.focus();
            }
            if (handleTouches.length > 0) {
              const eventTouch = new EventTouch(handleTouches, false, eventType, macro.ENABLE_MULTI_TOUCH ? touchManager.getAllTouches() : handleTouches);
              this._eventTarget.emit(eventType, eventTouch);
            }
          };
        }
        _getCanvasRect() {
          const canvas = this._canvas;
          const box = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();
          if (box) {
            return new Rect(box.x, box.y, box.width, box.height);
          }
          return new Rect(0, 0, 0, 0);
        }
        _getLocation(touch, canvasRect) {
          // webxr has been converted to screen coordinates via camera
          if (globalThis.__globalXR && globalThis.__globalXR.ar && globalThis.__globalXR.ar.isWebXR()) {
            return new Vec2(touch.clientX, touch.clientY);
          }
          let x = touch.clientX - canvasRect.x;
          let y = canvasRect.y + canvasRect.height - touch.clientY;
          if (screenAdapter.isFrameRotated) {
            const tmp = x;
            x = canvasRect.height - y;
            y = tmp;
          }
          const dpr = screenAdapter.devicePixelRatio;
          x *= dpr;
          y *= dpr;
          return new Vec2(x, y);
        }
        on(eventType, callback, target) {
          this._eventTarget.on(eventType, callback, target);
        }
      });
    }
  };
});