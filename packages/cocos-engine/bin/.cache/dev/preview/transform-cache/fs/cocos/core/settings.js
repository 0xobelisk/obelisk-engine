System.register("q-bundled:///fs/cocos/core/settings.js", ["../../../virtual/internal%253Aconstants.js", "./global-exports.js"], function (_export, _context) {
  "use strict";

  var HTML5, NATIVE, TAOBAO, TAOBAO_MINIGAME, legacyCC, Category, Settings, settings;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             http://www.cocos.com
                                                                                                                                                                                                                                                                                                                                                                                            
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
      HTML5 = _virtualInternal253AconstantsJs.HTML5;
      NATIVE = _virtualInternal253AconstantsJs.NATIVE;
      TAOBAO = _virtualInternal253AconstantsJs.TAOBAO;
      TAOBAO_MINIGAME = _virtualInternal253AconstantsJs.TAOBAO_MINIGAME;
    }, function (_globalExportsJs) {
      legacyCC = _globalExportsJs.legacyCC;
    }],
    execute: function () {
      (function (Category) {
        Category["PATH"] = "path";
        Category["ENGINE"] = "engine";
        Category["ASSETS"] = "assets";
        Category["SCRIPTING"] = "scripting";
        Category["PHYSICS"] = "physics";
        Category["RENDERING"] = "rendering";
        Category["LAUNCH"] = "launch";
        Category["SCREEN"] = "screen";
        Category["SPLASH_SCREEN"] = "splashScreen";
        Category["ANIMATION"] = "animation";
        Category["PROFILING"] = "profiling";
        Category["PLUGINS"] = "plugins";
        Category["XR"] = "xr";
      })(Category || (Category = {}));
      /**
       * @zh
       * 配置模块用于获取 settings.json 配置文件中的配置信息，同时你可以覆盖一些配置从而影响引擎的启动和运行，可参考 [game.init] 的参数选项说明。你可以通过 [settings] 访问此模块单例。
       * @en
       * The Settings module is used to get the configuration information in the settings.json configuration file,
       * and you can override some of the configuration to affect the launch and running of the engine, as described in the [game.init] parameter options.
       * You can access this single instance of the module via [settings].
       */
      _export("Settings", Settings = /*#__PURE__*/function () {
        function Settings() {
          this._settings = {};
          this._override = {};
        }
        var _proto = Settings.prototype;
        /**
         * Initialization
         * @internal
         */
        _proto.init = function init(path, overrides) {
          var _this = this;
          if (path === void 0) {
            path = '';
          }
          if (overrides === void 0) {
            overrides = {};
          }
          for (var categoryName in overrides) {
            var category = overrides[categoryName];
            if (category) {
              for (var name in category) {
                this.overrideSettings(categoryName, name, category[name]);
              }
            }
          }
          if (!path) return Promise.resolve();
          if (NATIVE) {
            if (window.oh && window.scriptEngineType === 'napi') {
              return new Promise(function (resolve, reject) {
                // TODO: to support a virtual module of settings.
                // For now, we use a system module context to dynamically import the relative path of module.
                var settingsModule = '../settings.js';
                _context["import"]("" + settingsModule).then(function (res) {
                  _this._settings = res["default"];
                  resolve();
                })["catch"](function (e) {
                  return reject(e);
                });
              });
            }
          }
          return new Promise(function (resolve, reject) {
            if (!HTML5 && !path.startsWith('http')) {
              // TODO: readJsonSync not working on Taobao IDE
              if (TAOBAO || TAOBAO_MINIGAME) {
                globalThis.fsUtils.readJson(path, function (err, result) {
                  if (err) {
                    reject(err);
                    return;
                  }
                  _this._settings = result;
                  resolve();
                });
              } else {
                var result = fsUtils.readJsonSync(path);
                if (result instanceof Error) {
                  reject(result);
                } else {
                  _this._settings = result;
                  resolve();
                }
              }
            } else {
              var xhr = new XMLHttpRequest();
              xhr.open('GET', path);
              xhr.responseType = 'text';
              xhr.onload = function () {
                _this._settings = JSON.parse(xhr.response);
                resolve();
              };
              xhr.onerror = function () {
                reject(new Error('request settings failed!'));
              };
              xhr.send(null);
            }
          });
        }

        /**
         * @zh
         * 覆盖一部分配置数据。
         *
         * @en
         * Override some configuration info in Settings module.
         *
         * @param category @en The category you want to override. @zh 想要覆盖的分组。
         * @param name @en The name of the configuration in the category you want to override. @zh 分组中想要覆盖的具体配置名称。
         * @param value @en The value of the configuration you want to override. @zh 想要覆盖的具体值。
         *
         * @example
         * ```ts
         * console.log(settings.querySettings(Settings.Category.ASSETS, 'server')); // print https://www.cocos.com
         * settings.overrideSettings(Settings.Category.ASSETS, 'server', 'http://www.test.com');
         * console.log(settings.querySettings(Settings.Category.ASSETS, 'server')); // print http://www.test.com
         * ```
         */;
        _proto.overrideSettings = function overrideSettings(category, name, value) {
          if (!(category in this._override)) {
            this._override[category] = {};
          }
          this._override[category][name] = value;
        }

        /**
         * @zh
         * 查询配置模块中具体分组中的具体配置值。
         *
         * @en
         * Query specific configuration values in specific category in the settings module.
         *
         * @param category @en The name of category to query. @zh 想要查询的分组名称。
         * @param name @en The name of configuration in category to query. @zh 分组中想要查询的具体的配置名称。
         * @returns @en The value of configuration to query. @zh 想要查询的具体配置值。
         *
         * @example
         * ```ts
         * console.log(settings.querySettings(Settings.Category.ENGINE, 'debug')); // print false
         * ```
         */;
        _proto.querySettings = function querySettings(category, name) {
          if (category in this._override) {
            var categorySettings = this._override[category];
            if (categorySettings && name in categorySettings) {
              return categorySettings[name];
            }
          }
          if (category in this._settings) {
            var _categorySettings = this._settings[category];
            if (_categorySettings && name in _categorySettings) {
              return _categorySettings[name];
            }
          }
          return null;
        };
        return Settings;
      }());
      Settings.Category = Category;
      /**
       * @zh
       * Settings 模块单例，你能通过此单例访问 settings.json 中的配置数据。
       * @en
       * Settings module singleton, through this you can access the configuration data in settings.json.
       */
      _export("settings", settings = new Settings());
      legacyCC.settings = settings;
    }
  };
});