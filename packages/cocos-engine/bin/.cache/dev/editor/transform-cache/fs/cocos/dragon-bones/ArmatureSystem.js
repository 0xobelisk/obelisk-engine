System.register("q-bundled:///fs/cocos/dragon-bones/ArmatureSystem.js", ["../game/director.js", "../core/index.js"], function (_export, _context) {
  "use strict";

  var director, System, cclegacy, ArmatureSystem;
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
  _export("ArmatureSystem", void 0);
  return {
    setters: [function (_gameDirectorJs) {
      director = _gameDirectorJs.director;
    }, function (_coreIndexJs) {
      System = _coreIndexJs.System;
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      /**
       * @en The ArmatureSystem is mainly responsible for triggering and updating the animation uniformly.
       * @zh 骨架系统，主要负责统一触发更新骨骼动画。
       */
      _export("ArmatureSystem", ArmatureSystem = class ArmatureSystem extends System {
        constructor() {
          super();
          this._armatures = new Set();
        }

        /**
         * @en Gets the instance of the ArmatureSystem system.
         * @zh 获取 Dragonbones Armature 系统的单例。
         */
        static getInstance() {
          if (!ArmatureSystem._instance) {
            ArmatureSystem._instance = new ArmatureSystem();
            director.registerSystem(ArmatureSystem.ID, ArmatureSystem._instance, System.Priority.HIGH);
          }
          return ArmatureSystem._instance;
        }
        /**
         * @en Add the ArmatureDisplay components into ArmatureSystem system.
         * @zh 将龙骨组件添加到系统中。
         */
        add(armature) {
          if (!armature) return;
          if (!this._armatures.has(armature)) {
            this._armatures.add(armature);
          }
        }
        /**
         * @en Remove the ArmatureDisplay components from ArmatureSystem system.
         * @zh 将龙骨组件从系统移除。
         */
        remove(armature) {
          if (!armature) return;
          if (this._armatures.has(armature)) {
            this._armatures.delete(armature);
          }
        }
        /**
         * @en Trigger animation update of Armature objects.
         * @zh 触发更新龙骨动画。
         */
        postUpdate(dt) {
          if (!this._armatures) {
            return;
          }
          this._armatures.forEach(armature => {
            armature.updateAnimation(dt);
            armature.syncAttachedNode();
          });
        }
        /**
         * @en
         * Trigger update of rendering data for all Dragonbone components.
         * @zh
         * 触发标记更新所有龙骨组件的渲染数据。
         */
        prepareRenderData() {
          if (!this._armatures) {
            return;
          }
          this._armatures.forEach(armature => {
            armature.markForUpdateRenderData();
          });
        }
      });
      /**
       * @en The ID flag of the system.
       * @zh 此系统的 ID 标记。
       */
      ArmatureSystem.ID = 'ARMATURE';
      ArmatureSystem._instance = void 0;
      cclegacy.internal.ArmatureSystem = ArmatureSystem;
    }
  };
});