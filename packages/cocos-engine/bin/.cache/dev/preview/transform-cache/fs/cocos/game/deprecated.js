System.register("q-bundled:///fs/cocos/game/deprecated.js", ["../core/utils/x-deprecated.js", "./director.js", "./game.js", "../asset/asset-manager/index.js"], function (_export, _context) {
  "use strict";

  var removeProperty, markAsWarning, replaceProperty, Director, director, game, assetManager;
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
    setters: [function (_coreUtilsXDeprecatedJs) {
      removeProperty = _coreUtilsXDeprecatedJs.removeProperty;
      markAsWarning = _coreUtilsXDeprecatedJs.markAsWarning;
      replaceProperty = _coreUtilsXDeprecatedJs.replaceProperty;
    }, function (_directorJs) {
      Director = _directorJs.Director;
      director = _directorJs.director;
    }, function (_gameJs) {
      game = _gameJs.game;
    }, function (_assetAssetManagerIndexJs) {
      assetManager = _assetAssetManagerIndexJs.assetManager;
    }],
    execute: function () {
      // Director
      markAsWarning(Director.prototype, 'director', [{
        name: 'calculateDeltaTime'
      }, {
        name: 'getDeltaTime',
        suggest: 'Use game.deltaTime instead'
      }, {
        name: 'getTotalTime',
        suggest: 'Use game.totalTime instead'
      }, {
        name: 'getCurrentTime',
        suggest: 'Use game.frameStartTime instead'
      }]);
      removeProperty(Director.prototype, 'director', [{
        name: 'setAnimationInterval',
        suggest: 'please use game.frameRate instead'
      }, {
        name: 'getAnimationInterval',
        suggest: 'please use game.frameRate instead'
      }, {
        name: 'getRunningScene',
        suggest: 'please use getScene instead'
      }, {
        name: 'setDepthTest',
        suggest: 'please use camera API instead'
      }, {
        name: 'setClearColor',
        suggest: 'please use camera API instead'
      }, {
        name: 'getWinSize',
        suggest: 'please use view.getVisibleSize instead'
      }, {
        name: 'getWinSizeInPixels'
      }, {
        name: 'purgeCachedData',
        suggest: 'please use assetManager.releaseAll instead'
      }, {
        name: 'convertToGL'
      }, {
        name: 'convertToUI'
      }]);
      replaceProperty(director, 'director', [{
        name: '_getSceneUuid',
        targetName: 'assetManager.main',
        newName: 'getSceneInfo',
        customFunction: function customFunction(sceneName) {
          if (assetManager.main) {
            var _assetManager$main$ge;
            return (_assetManager$main$ge = assetManager.main.getSceneInfo(sceneName)) === null || _assetManager$main$ge === void 0 ? void 0 : _assetManager$main$ge.uuid;
          }
          return '';
        }
      }]);

      // game

      markAsWarning(game, 'game', [{
        name: 'collisionMatrix'
      }, {
        name: 'groupList'
      }]);
      replaceProperty(game, 'game', [{
        name: '_sceneInfos',
        targetName: 'assetManager.main',
        newName: 'getSceneInfo',
        customGetter: function customGetter() {
          var scenes = [];
          if (assetManager.main) {
            assetManager.main.config.scenes.forEach(function (val) {
              scenes.push(val);
            });
          }
          return scenes;
        }
      }]);
    }
  };
});