System.register("q-bundled:///fs/cocos/2d/renderer/stencil-manager.js", ["../../gfx/index.js"], function (_export, _context) {
  "use strict";

  var ComparisonFunc, StencilOp, DepthStencilState, Stage, StencilSharedBufferView, StencilManager;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2019-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
  _export({
    Stage: void 0,
    StencilSharedBufferView: void 0
  });
  return {
    setters: [function (_gfxIndexJs) {
      ComparisonFunc = _gfxIndexJs.ComparisonFunc;
      StencilOp = _gfxIndexJs.StencilOp;
      DepthStencilState = _gfxIndexJs.DepthStencilState;
    }],
    execute: function () {
      (function (Stage) {
        Stage[Stage["DISABLED"] = 0] = "DISABLED";
        Stage[Stage["CLEAR"] = 1] = "CLEAR";
        Stage[Stage["ENTER_LEVEL"] = 2] = "ENTER_LEVEL";
        Stage[Stage["ENABLED"] = 3] = "ENABLED";
        Stage[Stage["EXIT_LEVEL"] = 4] = "EXIT_LEVEL";
        Stage[Stage["CLEAR_INVERTED"] = 5] = "CLEAR_INVERTED";
        Stage[Stage["ENTER_LEVEL_INVERTED"] = 6] = "ENTER_LEVEL_INVERTED";
      })(Stage || _export("Stage", Stage = {}));
      (function (StencilSharedBufferView) {
        StencilSharedBufferView[StencilSharedBufferView["stencilTest"] = 0] = "stencilTest";
        StencilSharedBufferView[StencilSharedBufferView["func"] = 1] = "func";
        StencilSharedBufferView[StencilSharedBufferView["stencilMask"] = 2] = "stencilMask";
        StencilSharedBufferView[StencilSharedBufferView["writeMask"] = 3] = "writeMask";
        StencilSharedBufferView[StencilSharedBufferView["failOp"] = 4] = "failOp";
        StencilSharedBufferView[StencilSharedBufferView["zFailOp"] = 5] = "zFailOp";
        StencilSharedBufferView[StencilSharedBufferView["passOp"] = 6] = "passOp";
        StencilSharedBufferView[StencilSharedBufferView["ref"] = 7] = "ref";
        StencilSharedBufferView[StencilSharedBufferView["count"] = 8] = "count";
      })(StencilSharedBufferView || _export("StencilSharedBufferView", StencilSharedBufferView = {}));
      /**
       * @en Stencil state manager.
       * @zh 模板状态管理器。
       * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
       */
      _export("StencilManager", StencilManager = /*#__PURE__*/function () {
        function StencilManager() {
          this._maskStack = [];
          this._stencilPattern = {
            stencilTest: true,
            func: ComparisonFunc.ALWAYS,
            stencilMask: 0xffff,
            writeMask: 0xffff,
            failOp: StencilOp.KEEP,
            zFailOp: StencilOp.KEEP,
            passOp: StencilOp.KEEP,
            ref: 1
          };
          this._stage = Stage.DISABLED;
          this.stencilStateMap = new Map();
          this.stencilStateMapWithDepth = new Map();
        }
        var _proto = StencilManager.prototype;
        /**
         * @en Add mask nesting.
         * @zh 添加mask嵌套。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        _proto.pushMask = function pushMask(mask) {
          this._maskStack.push(mask);
        }

        /**
         * @en clear stencil stage.
         * @zh 清空模板状态。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.clear = function clear(comp) {
          var isInverted = comp.stencilStage !== Stage.ENTER_LEVEL;
          return isInverted ? Stage.CLEAR_INVERTED : Stage.CLEAR;
        }

        /**
         * @en Open stencil stage to enabled.
         * @zh 开启模板状态。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.enableMask = function enableMask() {
          this.stage = Stage.ENABLED;
        }

        /**
         * @en exit stencil.
         * @zh 退出模板状态。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.exitMask = function exitMask() {
          if (this._maskStack.length === 0) {
            // cc.errorID(9001);
            return;
          }
          this._maskStack.pop();
          if (this._maskStack.length === 0) {
            this.stage = Stage.DISABLED;
          } else {
            this.stage = Stage.ENABLED;
          }
        }

        /**
         * @en Get write mask count.
         * @zh 获取写入模板缓冲的位数。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.getWriteMask = function getWriteMask() {
          return 1 << this._maskStack.length - 1;
        }

        /**
         * @en Get write mask count when exit.
         * @zh 获取退出时模板缓冲的位数。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.getExitWriteMask = function getExitWriteMask() {
          return 1 << this._maskStack.length;
        };
        _proto.getStencilRef = function getStencilRef() {
          var result = 0;
          for (var i = 0; i < this._maskStack.length; ++i) {
            result += 0x00000001 << i;
          }
          return result;
        }

        /**
         * @en Get mask nesting count.
         * @zh 获取mask嵌套数量。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.getMaskStackSize = function getMaskStackSize() {
          return this._maskStack.length;
        }

        /**
         * @en Reset stencil stage.
         * @zh 重置模板状态。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.reset = function reset() {
          // reset stack and stage
          this._maskStack.length = 0;
          this.stage = Stage.DISABLED;
        };
        _proto.destroy = function destroy() {
          this.stencilStateMap.forEach(function (value, key) {
            value.destroy();
          });
          this.stencilStateMap.clear();
        };
        /**
         * @en Get stencil stage.
         * @zh 获取模板状态。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        _proto.getStencilStage = function getStencilStage(stage, mat) {
          var key = 0;
          var depthTest = false;
          var depthWrite = false;
          var depthFunc = ComparisonFunc.LESS;
          var cacheMap = this.stencilStateMap;
          if (mat && mat.passes[0]) {
            var pass = mat.passes[0];
            var dss = pass.depthStencilState;
            var depthTestValue = 0;
            var depthWriteValue = 0;
            if (dss.depthTest) depthTestValue = 1;
            if (dss.depthWrite) depthWriteValue = 1;
            key = depthTestValue | depthWriteValue << 1 | dss.depthFunc << 2 | stage << 6 | this._maskStack.length << 9;
            depthTest = dss.depthTest;
            depthWrite = dss.depthWrite;
            depthFunc = dss.depthFunc;
            cacheMap = this.stencilStateMapWithDepth;
          } else {
            key = stage << 16 | this._maskStack.length;
          }
          if (cacheMap && cacheMap.has(key)) {
            return cacheMap.get(key);
          }
          this.setStateFromStage(stage);
          var depthStencilState = new DepthStencilState(depthTest, depthWrite, depthFunc, this._stencilPattern.stencilTest, this._stencilPattern.func, this._stencilPattern.stencilMask, this._stencilPattern.writeMask, this._stencilPattern.failOp, this._stencilPattern.zFailOp, this._stencilPattern.passOp, this._stencilPattern.ref, this._stencilPattern.stencilTest, this._stencilPattern.func, this._stencilPattern.stencilMask, this._stencilPattern.writeMask, this._stencilPattern.failOp, this._stencilPattern.zFailOp, this._stencilPattern.passOp, this._stencilPattern.ref);
          cacheMap.set(key, depthStencilState);
          return depthStencilState;
        }

        /**
         * @en Get stencil hash.
         * @zh 获取模板状态的哈希值。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.getStencilHash = function getStencilHash(stage) {
          return stage << 8 | this._maskStack.length;
        }

        // Notice: Only children node in Mask need use this.stage
        ;
        _proto.setStateFromStage = function setStateFromStage(stage) {
          var pattern = this._stencilPattern;
          if (stage === Stage.DISABLED) {
            pattern.stencilTest = false;
            pattern.func = ComparisonFunc.ALWAYS;
            pattern.failOp = StencilOp.KEEP;
            pattern.stencilMask = pattern.writeMask = 0xffff;
            pattern.ref = 1;
          } else {
            pattern.stencilTest = true;
            if (stage === Stage.ENABLED) {
              pattern.func = ComparisonFunc.EQUAL;
              pattern.failOp = StencilOp.KEEP;
              pattern.stencilMask = pattern.ref = this.getStencilRef();
              pattern.writeMask = this.getWriteMask();
            } else if (stage === Stage.CLEAR) {
              pattern.func = ComparisonFunc.NEVER;
              pattern.failOp = StencilOp.ZERO;
              pattern.writeMask = pattern.stencilMask = pattern.ref = this.getWriteMask();
            } else if (stage === Stage.CLEAR_INVERTED) {
              pattern.func = ComparisonFunc.NEVER;
              pattern.failOp = StencilOp.REPLACE;
              pattern.writeMask = pattern.stencilMask = pattern.ref = this.getWriteMask();
            } else if (stage === Stage.ENTER_LEVEL) {
              pattern.func = ComparisonFunc.NEVER;
              pattern.failOp = StencilOp.REPLACE;
              pattern.writeMask = pattern.stencilMask = pattern.ref = this.getWriteMask();
            } else if (stage === Stage.ENTER_LEVEL_INVERTED) {
              pattern.func = ComparisonFunc.NEVER;
              pattern.failOp = StencilOp.ZERO;
              pattern.writeMask = pattern.stencilMask = pattern.ref = this.getWriteMask();
            }
          }
        };
        _createClass(StencilManager, [{
          key: "stage",
          get:
          /**
           * @en Stencil stage.
           * @zh 模板缓冲阶段。
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
          function get() {
            return this._stage;
          },
          set: function set(val) {
            this._stage = val;
          }

          /**
           * @en Stencil pattern.
           * @zh 模板缓冲样式。
           * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
           */
        }, {
          key: "pattern",
          get: function get() {
            return this._stencilPattern;
          }
        }]);
        return StencilManager;
      }());
      StencilManager.sharedManager = null;
      StencilManager.sharedManager = new StencilManager();
    }
  };
});