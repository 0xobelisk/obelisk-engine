System.register("q-bundled:///fs/cocos/particle/particle-utils.js", ["../serialization/index.js", "../core/index.js", "../game/director.js", "../scene-graph/index.js", "./particle-system.js"], function (_export, _context) {
  "use strict";

  var _instantiate, Pool, Director, director, Node, ParticleSystem, ParticleUtils;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
    setters: [function (_serializationIndexJs) {
      _instantiate = _serializationIndexJs.instantiate;
    }, function (_coreIndexJs) {
      Pool = _coreIndexJs.Pool;
    }, function (_gameDirectorJs) {
      Director = _gameDirectorJs.Director;
      director = _gameDirectorJs.director;
    }, function (_sceneGraphIndexJs) {
      Node = _sceneGraphIndexJs.Node;
    }, function (_particleSystemJs) {
      ParticleSystem = _particleSystemJs.ParticleSystem;
    }],
    execute: function () {
      /**
       * @en Contains some util functions for particle system. Such as create and destroy particle system.
       * @zh 该类包含一些粒子系统的工具函数，例如创建和销毁粒子系统。
       */
      _export("ParticleUtils", ParticleUtils = /*#__PURE__*/function () {
        function ParticleUtils() {}
        /**
         * @en Instantiate particle system from prefab.
         * @zh 从 prefab 实例化粒子系统。
         */
        ParticleUtils.instantiate = function instantiate(prefab) {
          if (!this.registeredSceneEvent) {
            director.on(Director.EVENT_BEFORE_SCENE_LAUNCH, this.onSceneUnload, this);
            this.registeredSceneEvent = true;
          }
          if (!this.particleSystemPool.has(prefab._uuid)) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            this.particleSystemPool.set(prefab._uuid, new Pool(function () {
              return _instantiate(prefab) || new Node();
            }, 1, function (prefab) {
              return prefab.destroy();
            }));
          }
          return this.particleSystemPool.get(prefab._uuid).alloc();
        }

        /**
         * @en Destroy particle system prefab.
         * @zh 销毁创建出来的粒子系统prefab。
         * @param prefab @en Particle system prefab to destroy. @zh 要销毁的粒子系统prefab。
         */;
        ParticleUtils.destroy = function destroy(prefab) {
          if (this.particleSystemPool.has(prefab._prefab.asset._uuid)) {
            this.stop(prefab);
            this.particleSystemPool.get(prefab._prefab.asset._uuid).free(prefab);
          }
        }

        /**
         * @en Play particle system.
         * @zh 播放粒子系统。
         * @param rootNode @en Root node contains the particle system. @zh 包含粒子系统的根节点。
         */;
        ParticleUtils.play = function play(rootNode) {
          for (var _iterator = _createForOfIteratorHelperLoose(rootNode.getComponentsInChildren(ParticleSystem)), _step; !(_step = _iterator()).done;) {
            var ps = _step.value;
            ps.play();
          }
        }

        /**
         * @en Stop particle system.
         * @zh 停止播放粒子系统。
         * @param rootNode @en Root node contains the particle system. @zh 包含粒子系统的根节点。
         */;
        ParticleUtils.stop = function stop(rootNode) {
          for (var _iterator2 = _createForOfIteratorHelperLoose(rootNode.getComponentsInChildren(ParticleSystem)), _step2; !(_step2 = _iterator2()).done;) {
            var ps = _step2.value;
            ps.stop();
          }
        };
        ParticleUtils.onSceneUnload = function onSceneUnload() {
          this.particleSystemPool.forEach(function (value) {
            return value.destroy();
          });
          this.particleSystemPool.clear();
        };
        return ParticleUtils;
      }());
      ParticleUtils.particleSystemPool = new Map();
      ParticleUtils.registeredSceneEvent = false;
    }
  };
});