System.register("q-bundled:///fs/cocos/core/platform/screen.js", ["pal/screen-adapter", "../global-exports.js", "../settings.js", "./debug.js"], function (_export, _context) {
  "use strict";

  var screenAdapter, legacyCC, Settings, settings, error, warn, warnID, Screen, screen;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2008-2010 Ricardo Quesada
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
  return {
    setters: [function (_palScreenAdapter) {
      screenAdapter = _palScreenAdapter.screenAdapter;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }, function (_settingsJs) {
      Settings = _settingsJs.Settings;
      settings = _settingsJs.settings;
    }, function (_debugJs) {
      error = _debugJs.error;
      warn = _debugJs.warn;
      warnID = _debugJs.warnID;
    }],
    execute: function () {
      /**
       * @en The screen API provides an easy way to do some screen managing stuff.
       * @zh screen 单例对象提供简单的方法来做屏幕管理相关的工作。
       */
      _export("Screen", Screen = /*#__PURE__*/function () {
        function Screen() {}
        var _proto = Screen.prototype;
        /**
         * @internal
         */
        _proto.init = function init() {
          var _settings$querySettin, _settings$querySettin2;
          var exactFitScreen = (_settings$querySettin = settings.querySettings(Settings.Category.SCREEN, 'exactFitScreen')) !== null && _settings$querySettin !== void 0 ? _settings$querySettin : true;
          var orientation = (_settings$querySettin2 = settings.querySettings(Settings.Category.SCREEN, 'orientation')) !== null && _settings$querySettin2 !== void 0 ? _settings$querySettin2 : 'auto';
          var isHeadlessMode = settings.querySettings(Settings.Category.RENDERING, 'renderMode') === 3;
          screenAdapter.init({
            exactFitScreen: exactFitScreen,
            configOrientation: orientation,
            isHeadlessMode: isHeadlessMode
          }, function () {
            var _director$root;
            var director = legacyCC.director;
            if (!((_director$root = director.root) !== null && _director$root !== void 0 && _director$root.pipeline)) {
              warnID(1220);
              return;
            }
            director.root.pipeline.shadingScale = screenAdapter.resolutionScale;
          });
        }

        /**
         * @en the ratio of the resolution in physical pixels to the resolution in CSS pixels for the current display device
         * NOTE: For performance reasons, the engine will limit the maximum value of DPR on some platforms.
         * This property returns the DPR after the engine limit.
         * @zh 当前显示设备的物理像素分辨率与 CSS 像素分辨率之比。
         * 注意：出于性能考虑，引擎在一些平台会限制 DPR 的最高值，这个属性返回的是引擎限制后的 DPR。
         */;
        /**
         * @en Return true if it's in full screen state now.
         * @zh 当前是否处在全屏状态下。
         * @returns {boolean}
         */
        _proto.fullScreen = function fullScreen() {
          return screenAdapter.isFullScreen;
        }

        /**
         * @en Request to enter full screen mode with the given element.
         * Many browsers forbid to enter full screen mode without an user intended interaction.
         * If failed to request fullscreen, another attempt will be made to request fullscreen the next time a user interaction occurs.
         * @zh 尝试使当前节点进入全屏模式，很多浏览器不允许程序触发这样的行为，必须在一个用户交互回调中才会生效。
         * 如果进入全屏失败，会在下一次用户发生交互时，再次尝试进入全屏。
         * @param element @zh 请求全屏状态的html元素。 @en The element to request full screen state.
         * @param onFullScreenChange @zh 全屏状态改变的回调函数。 @en callback function when full screen state changed.
         * @param onFullScreenError @zh 全屏错误的回调函数。 @en callback function when full screen error.
         * @return {Promise|undefined}
         * @deprecated since v3.3, please use `screen.requestFullScreen(): Promise<void>` instead.
         */;
        _proto.requestFullScreen = function requestFullScreen(element, onFullScreenChange, onFullScreenError) {
          if (arguments.length > 0) {
            warnID(1400, 'screen.requestFullScreen(element, onFullScreenChange?, onFullScreenError?)', 'screen.requestFullScreen(): Promise');
          }
          return screenAdapter.requestFullScreen().then(function () {
            onFullScreenChange === null || onFullScreenChange === void 0 ? void 0 : onFullScreenChange.call(document); // this case is only used on Web platforms, which is deprecated since v3.3.0
          })["catch"](function (err) {
            error(err);
            onFullScreenError === null || onFullScreenError === void 0 ? void 0 : onFullScreenError.call(document); // this case is only used on Web platforms, which is deprecated since v3.3.0
          });
        }

        /**
         * @en Exit the full mode.
         * @zh 退出全屏模式。
         * @return {Promise}
         */;
        _proto.exitFullScreen = function exitFullScreen() {
          return screenAdapter.exitFullScreen();
        }

        /**
         * @en Automatically request full screen during the next touch/click event.
         * @zh 自动监听触摸、鼠标事件并在下一次事件触发时尝试进入全屏模式。
         * @param element @zh 请求全屏状态的html元素。 @en The element to request full screen state.
         * @param onFullScreenChange @zh 全屏状态改变的回调函数。 @en callback function when full screen state changed.
         *
         * @deprecated since v3.3, please use screen.requestFullScreen() instead.
         */;
        _proto.autoFullScreen = function autoFullScreen(element, onFullScreenChange) {
          var _this$requestFullScre;
          (_this$requestFullScre = this.requestFullScreen(element, onFullScreenChange)) === null || _this$requestFullScre === void 0 ? void 0 : _this$requestFullScre["catch"](function (e) {
            warn(e);
          });
        }

        /**
         * @param element
         * @deprecated since v3.3
         */;
        _proto.disableAutoFullScreen = function disableAutoFullScreen(element) {
          // DO NOTHING
        }

        // TODO: to support registering fullscreen change
        /**
         * @en
         * Register screen event callback.
         * @zh
         * 注册screen事件回调。
         */;
        _proto.on = function on(type, callback, target) {
          screenAdapter.on(type, callback, target);
        }

        /**
         * @en
         * Register a callback of a specific screen event type once.
         * @zh
         * 注册单次的screen事件回调。
         */;
        _proto.once = function once(type, callback, target) {
          screenAdapter.once(type, callback, target);
        }

        /**
         * @en
         * Unregister screen event callback.
         * @zh
         * 取消注册screen事件回调。
         */;
        _proto.off = function off(type, callback, target) {
          screenAdapter.off(type, callback, target);
        };
        _createClass(Screen, [{
          key: "devicePixelRatio",
          get: function get() {
            return screenAdapter.devicePixelRatio;
          }

          /**
           * @en Get and set the size of current window in physical pixels.
           * NOTE:
           * - Setting window size is only supported on Web platform for now.
           * - On Web platform, if the ContainerStrategy is PROPORTIONAL_TO_FRAME, we set windowSize on game frame,
           *    and get windowSize from the game container after adaptation.
           * @zh 获取和设置当前窗口的物理像素尺寸。
           * 注意
           * - 设置窗口尺寸目前只在 Web 平台上支持。
           * - Web 平台上，如果 ContainerStrategy 为 PROPORTIONAL_TO_FRAME, 则设置 windowSize 作用于 game frame, 而从适配之后 game container 尺寸获取 windowSize.
           */
        }, {
          key: "windowSize",
          get: function get() {
            return screenAdapter.windowSize;
          },
          set: function set(size) {
            screenAdapter.windowSize = size;
          }

          /**
           * @en Get the current resolution of game.
           * This is a readonly property.
           * @zh 获取当前游戏的分辨率。
           * 这是一个只读属性。
           *
           * @readonly
           */
        }, {
          key: "resolution",
          get: function get() {
            return screenAdapter.resolution;
          }

          // /**
          //  * @en Get and set the resolution scale of screen, which will affect the quality of the rendering.
          //  * Note: if this value is set too high, the rendering performance of GPU will be reduced, this value is 1 by default.
          //  * @zh 获取和设置屏幕的分辨率缩放比，这将会影响最终渲染的质量。
          //  * 注意：如果这个值设置的太高，会降低 GPU 的渲染性能，该值默认为 1。
          //  */
          // public get resolutionScale () {
          //     return screenAdapter.resolutionScale;
          // }
          // public set resolutionScale (v: number) {
          //     screenAdapter.resolutionScale = v;
          // }

          /**
           * @en Whether it supports full screen.
           * @zh 是否支持全屏。
           * @returns {Boolean}
           */
        }, {
          key: "supportsFullScreen",
          get: function get() {
            return screenAdapter.supportFullScreen;
          }
        }]);
        return Screen;
      }());
      _export("screen", screen = new Screen());
      legacyCC.screen = screen;
    }
  };
});