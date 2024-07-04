System.register("q-bundled:///fs/pal/screen-adapter/native/screen-adapter.js", ["../../../../virtual/internal%253Aconstants.js", "../../../cocos/core/event/event-target.js", "../../../cocos/core/math/index.js", "../../integrity-check.js", "../enum-type/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, EventTarget, Size, checkPalIntegrity, withImpl, Orientation, orientationMap, ScreenAdapter, screenAdapter;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
    }, function (_cocosCoreEventEventTargetJs) {
      EventTarget = _cocosCoreEventEventTargetJs.EventTarget;
    }, function (_cocosCoreMathIndexJs) {
      Size = _cocosCoreMathIndexJs.Size;
    }, function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }, function (_enumTypeIndexJs) {
      Orientation = _enumTypeIndexJs.Orientation;
    }],
    execute: function () {
      // these value is defined in the native layer
      orientationMap = {
        0: Orientation.PORTRAIT,
        '-90': Orientation.LANDSCAPE_LEFT,
        90: Orientation.LANDSCAPE_RIGHT,
        180: Orientation.PORTRAIT_UPSIDE_DOWN
      };
      ScreenAdapter = /*#__PURE__*/function (_EventTarget) {
        _inheritsLoose(ScreenAdapter, _EventTarget);
        function ScreenAdapter() {
          var _this;
          _this = _EventTarget.call(this) || this;
          _this.isFrameRotated = false;
          _this.handleResizeEvent = true;
          _this._cbToUpdateFrameBuffer = void 0;
          _this._resolutionScale = 1;
          _this._isProportionalToFrame = false;
          _this._registerEvent();
          return _this;
        }
        var _proto = ScreenAdapter.prototype;
        _proto.init = function init(options, cbToRebuildFrameBuffer) {
          this._cbToUpdateFrameBuffer = cbToRebuildFrameBuffer;
          if (!EDITOR) {
            this._cbToUpdateFrameBuffer();
          }
        };
        _proto.requestFullScreen = function requestFullScreen() {
          return Promise.reject(new Error('request fullscreen has not been supported yet on this platform.'));
        };
        _proto.exitFullScreen = function exitFullScreen() {
          return Promise.reject(new Error('exit fullscreen has not been supported yet on this platform.'));
        };
        _proto._registerEvent = function _registerEvent() {
          var _this2 = this;
          jsb.onResize = function (event) {
            if (event.width === 0 || event.height === 0) return;
            // TODO: remove this function calling
            window.resize(event.width / _this2.devicePixelRatio, event.height / _this2.devicePixelRatio);
            _this2.emit('window-resize', event.width, event.height, event.windowId);
          };
          jsb.onOrientationChanged = function (event) {
            _this2.emit('orientation-change', _this2.orientation);
          };
        };
        _createClass(ScreenAdapter, [{
          key: "supportFullScreen",
          get: function get() {
            return false;
          }
        }, {
          key: "isFullScreen",
          get: function get() {
            return false;
          }
        }, {
          key: "devicePixelRatio",
          get: function get() {
            return jsb.device.getDevicePixelRatio() || 1;
          }
        }, {
          key: "windowSize",
          get: function get() {
            var dpr = this.devicePixelRatio;
            // NOTE: fix precision issue on Metal render end.
            var width = jsb.window.innerWidth;
            var height = jsb.window.innerHeight;
            // NOTE: fix precision issue on Metal render end.
            var roundWidth = Math.round(width);
            var roundHeight = Math.round(height);
            return new Size(roundWidth * dpr, roundHeight * dpr);
          },
          set: function set(size) {
            console.warn('Setting window size is not supported yet.');
          }
        }, {
          key: "resolution",
          get: function get() {
            var windowSize = this.windowSize;
            var resolutionScale = this.resolutionScale;
            return new Size(windowSize.width * resolutionScale, windowSize.height * resolutionScale);
          }
        }, {
          key: "resolutionScale",
          get: function get() {
            return this._resolutionScale;
          },
          set: function set(v) {
            var _this$_cbToUpdateFram;
            if (v === this._resolutionScale) {
              return;
            }
            this._resolutionScale = v;
            (_this$_cbToUpdateFram = this._cbToUpdateFrameBuffer) === null || _this$_cbToUpdateFram === void 0 ? void 0 : _this$_cbToUpdateFram.call(this);
          }
        }, {
          key: "orientation",
          get: function get() {
            return orientationMap[jsb.device.getDeviceOrientation()];
          },
          set: function set(value) {
            console.warn('Setting orientation is not supported yet.');
          }
        }, {
          key: "safeAreaEdge",
          get: function get() {
            var nativeSafeArea = jsb.device.getSafeAreaEdge();
            var dpr = this.devicePixelRatio;
            var topEdge = nativeSafeArea.x * dpr;
            var bottomEdge = nativeSafeArea.z * dpr;
            var leftEdge = nativeSafeArea.y * dpr;
            var rightEdge = nativeSafeArea.w * dpr;
            var orientation = this.orientation;
            // Make it symmetrical.
            if (orientation === Orientation.PORTRAIT) {
              if (topEdge < bottomEdge) {
                topEdge = bottomEdge;
              } else {
                bottomEdge = topEdge;
              }
            } else if (leftEdge < rightEdge) {
              leftEdge = rightEdge;
            } else {
              rightEdge = leftEdge;
            }
            return {
              top: topEdge,
              bottom: bottomEdge,
              left: leftEdge,
              right: rightEdge
            };
          }
        }, {
          key: "isProportionalToFrame",
          get: function get() {
            return this._isProportionalToFrame;
          },
          set: function set(v) {}
        }]);
        return ScreenAdapter;
      }(EventTarget);
      _export("screenAdapter", screenAdapter = new ScreenAdapter());
      checkPalIntegrity(withImpl());
    }
  };
});