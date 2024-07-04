System.register("q-bundled:///fs/pal/screen-adapter/minigame/screen-adapter.js", ["../../../../virtual/internal%253Aconstants.js", "pal/minigame", "pal/system-info", "../../../cocos/core/platform/debug.js", "../../../cocos/core/event/event-target.js", "../../../cocos/core/math/index.js", "../../system-info/enum-type/index.js", "../enum-type/index.js", "../../integrity-check.js"], function (_export, _context) {
  "use strict";

  var ALIPAY, BYTEDANCE, VIVO, minigame, systemInfo, warnID, EventTarget, Size, OS, Orientation, checkPalIntegrity, withImpl, rotateLandscape, fs, screenOrientation, ScreenAdapter, screenAdapter;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
      ALIPAY = _virtualInternal253AconstantsJs.ALIPAY;
      BYTEDANCE = _virtualInternal253AconstantsJs.BYTEDANCE;
      VIVO = _virtualInternal253AconstantsJs.VIVO;
    }, function (_palMinigame) {
      minigame = _palMinigame.minigame;
    }, function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_cocosCorePlatformDebugJs) {
      warnID = _cocosCorePlatformDebugJs.warnID;
    }, function (_cocosCoreEventEventTargetJs) {
      EventTarget = _cocosCoreEventEventTargetJs.EventTarget;
    }, function (_cocosCoreMathIndexJs) {
      Size = _cocosCoreMathIndexJs.Size;
    }, function (_systemInfoEnumTypeIndexJs) {
      OS = _systemInfoEnumTypeIndexJs.OS;
    }, function (_enumTypeIndexJs) {
      Orientation = _enumTypeIndexJs.Orientation;
    }, function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }],
    execute: function () {
      // HACK: In some platform like CocosPlay or Alipay iOS end
      // the windowSize need to rotate when init screenAdapter if it's landscape
      rotateLandscape = false;
      try {
        if (ALIPAY) {
          if (systemInfo.os === OS.IOS && !minigame.isDevTool) {
            // TODO: use pal/fs
            // issue: https://github.com/cocos/cocos-engine/issues/14647
            fs = my.getFileSystemManager();
            screenOrientation = JSON.parse(fs.readFileSync({
              filePath: 'game.json',
              encoding: 'utf8'
            }).data).screenOrientation;
            rotateLandscape = screenOrientation === 'landscape';
          }
        }
      } catch (e) {
        console.error(e);
      }
      ScreenAdapter = /*#__PURE__*/function (_EventTarget) {
        _inheritsLoose(ScreenAdapter, _EventTarget);
        function ScreenAdapter() {
          var _minigame$onWindowRes;
          var _this;
          _this = _EventTarget.call(this) || this;
          _this.isFrameRotated = false;
          _this.handleResizeEvent = true;
          _this._cbToUpdateFrameBuffer = void 0;
          _this._resolutionScale = 1;
          _this._isProportionalToFrame = false;
          (_minigame$onWindowRes = minigame.onWindowResize) === null || _minigame$onWindowRes === void 0 ? void 0 : _minigame$onWindowRes.call(minigame, function () {
            _this.emit('window-resize', _this.windowSize.width, _this.windowSize.height);
          });
          return _this;
        }
        var _proto = ScreenAdapter.prototype;
        _proto.init = function init(options, cbToRebuildFrameBuffer) {
          this._cbToUpdateFrameBuffer = cbToRebuildFrameBuffer;
          this._cbToUpdateFrameBuffer();
        };
        _proto.requestFullScreen = function requestFullScreen() {
          return Promise.reject(new Error('request fullscreen is not supported on this platform.'));
        };
        _proto.exitFullScreen = function exitFullScreen() {
          return Promise.reject(new Error('exit fullscreen is not supported on this platform.'));
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
            var sysInfo = minigame.getSystemInfoSync();
            return sysInfo.pixelRatio;
          }
        }, {
          key: "windowSize",
          get: function get() {
            var sysInfo = minigame.getSystemInfoSync();
            var dpr = this.devicePixelRatio;
            var screenWidth = sysInfo.windowWidth;
            var screenHeight = sysInfo.windowHeight;
            if (BYTEDANCE) {
              screenWidth = sysInfo.screenWidth;
              screenHeight = sysInfo.screenHeight;
            }
            if (ALIPAY && rotateLandscape && screenWidth < screenHeight) {
              var temp = screenWidth;
              screenWidth = screenHeight;
              screenHeight = temp;
            }
            return new Size(screenWidth * dpr, screenHeight * dpr);
          },
          set: function set(size) {
            warnID(1221);
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
          set: function set(value) {
            var _this$_cbToUpdateFram;
            if (value === this._resolutionScale) {
              return;
            }
            this._resolutionScale = value;
            (_this$_cbToUpdateFram = this._cbToUpdateFrameBuffer) === null || _this$_cbToUpdateFram === void 0 ? void 0 : _this$_cbToUpdateFram.call(this);
          }
        }, {
          key: "orientation",
          get: function get() {
            return minigame.orientation;
          },
          set: function set(value) {
            console.warn('Setting orientation is not supported yet.');
          }
        }, {
          key: "safeAreaEdge",
          get: function get() {
            var minigameSafeArea = minigame.getSafeArea();
            var windowSize = this.windowSize;
            // NOTE: safe area info on vivo platform is in physical pixel.
            // No need to multiply with DPR.
            var dpr = VIVO ? 1 : this.devicePixelRatio;
            var topEdge = minigameSafeArea.top * dpr;
            var bottomEdge = windowSize.height - minigameSafeArea.bottom * dpr;
            var leftEdge = minigameSafeArea.left * dpr;
            var rightEdge = windowSize.width - minigameSafeArea.right * dpr;
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