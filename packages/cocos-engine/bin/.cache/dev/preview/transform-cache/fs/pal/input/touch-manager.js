System.register("q-bundled:///fs/pal/input/touch-manager.js", ["../../cocos/core/math/vec2.js", "../../cocos/core/platform/debug.js", "../../cocos/core/platform/macro.js", "../../cocos/input/types/index.js"], function (_export, _context) {
  "use strict";

  var Vec2, log, macro, Touch, tempVec2, TouchManager, touchManager;
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
    setters: [function (_cocosCoreMathVec2Js) {
      Vec2 = _cocosCoreMathVec2Js.Vec2;
    }, function (_cocosCorePlatformDebugJs) {
      log = _cocosCorePlatformDebugJs.log;
    }, function (_cocosCorePlatformMacroJs) {
      macro = _cocosCorePlatformMacroJs.macro;
    }, function (_cocosInputTypesIndexJs) {
      Touch = _cocosInputTypesIndexJs.Touch;
    }],
    execute: function () {
      tempVec2 = new Vec2();
      TouchManager = /*#__PURE__*/function () {
        function TouchManager() {
          /**
           * A map from touch ID to touch object.
           */
          this._touchMap = void 0;
          this._maxTouches = 8;
          this._touchMap = new Map();
        }

        /**
         * Create the touch object at the touch start event callback.
         * we have some policy to create the touch object:
         * - If the number of touches doesn't exceed the max count, we create a touch object.
         * - If the number of touches exceeds the max count, we discard the timeout touch to create a new one.
         * - If the number of touches exceeds the max count and there is no timeout touch, we can't create any touch object.
         * @param touchID
         * @param x
         * @param y
         * @returns
         */
        var _proto = TouchManager.prototype;
        _proto._createTouch = function _createTouch(touchID, x, y) {
          if (this._touchMap.has(touchID)) {
            log('Cannot create the same touch object.');
            return undefined;
          }
          var checkResult = this._checkTouchMapSizeMoreThanMax(touchID);
          if (checkResult) {
            log('The touches is more than MAX_TOUCHES.'); // TODO: logID 2300
            return undefined;
          }
          var touch = new Touch(x, y, touchID);
          this._touchMap.set(touchID, touch);
          this._updateTouch(touch, x, y);
          return touch;
        }

        /**
         * Release the touch object at the touch end or touch cancel event callback.
         * @param touchID
         * @returns
         */;
        _proto.releaseTouch = function releaseTouch(touchID) {
          if (!this._touchMap.has(touchID)) {
            return;
          }
          this._touchMap["delete"](touchID);
        }

        /**
         * Get touch object by touch ID.
         * @param touchID
         * @returns
         */;
        _proto.getTouch = function getTouch(touchID) {
          return this._touchMap.get(touchID);
        }

        /**
         * Get or create touch object by touch ID.
         * @param touchID
         * @returns
         */;
        _proto.getOrCreateTouch = function getOrCreateTouch(touchID, x, y) {
          var touch = this.getTouch(touchID);
          if (!touch) {
            touch = this._createTouch(touchID, x, y);
          } else {
            this._updateTouch(touch, x, y);
          }
          return touch;
        }

        /**
         * Get all the current touches objects.
         * @returns
         */;
        _proto.getAllTouches = function getAllTouches() {
          var touches = [];
          this._touchMap.forEach(function (touch) {
            if (touch) {
              touches.push(touch);
            }
          });
          return touches;
        }

        /**
         * Get the number of touches.
         */;
        _proto.getTouchCount = function getTouchCount() {
          return touchManager._touchMap.size;
        }

        /**
         * Update the location and previous location of current touch ID.
         * @param touchID
         * @param x The current location X
         * @param y The current location Y
         */;
        _proto._updateTouch = function _updateTouch(touch, x, y) {
          touch.getLocation(tempVec2);
          touch.setPrevPoint(tempVec2);
          touch.setPoint(x, y);
        };
        _proto._checkTouchMapSizeMoreThanMax = function _checkTouchMapSizeMoreThanMax(touchID) {
          var _this = this;
          if (this._touchMap.has(touchID)) {
            return false;
          }
          var maxSize = macro.ENABLE_MULTI_TOUCH ? this._maxTouches : 1;
          if (this._touchMap.size < maxSize) {
            return false;
          }
          // Handle when exceed the max number of touches
          var now = performance.now();
          this._touchMap.forEach(function (touch) {
            if (now - touch.lastModified > macro.TOUCH_TIMEOUT) {
              log("The touches is more than MAX_TOUCHES, release touch id " + touch.getID() + ".");
              // TODO: need to handle touch cancel event when exceed the max number of touches ?
              _this.releaseTouch(touch.getID());
            }
          });
          return maxSize >= this._touchMap.size;
        };
        return TouchManager;
      }();
      _export("touchManager", touchManager = new TouchManager());
    }
  };
});