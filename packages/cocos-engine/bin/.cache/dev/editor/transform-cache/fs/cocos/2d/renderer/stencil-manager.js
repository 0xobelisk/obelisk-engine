System.register("q-bundled:///fs/cocos/2d/renderer/stencil-manager.js", ["../../gfx/index.js"], function (_export, _context) {
  "use strict";

  var ComparisonFunc, StencilOp, DepthStencilState, StencilManager, Stage, StencilSharedBufferView;
  _export({
    StencilManager: void 0,
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
      _export("StencilManager", StencilManager = class StencilManager {
        constructor() {
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
        /**
         * @en Stencil stage.
         * @zh 模板缓冲阶段。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        get stage() {
          return this._stage;
        }
        set stage(val) {
          this._stage = val;
        }

        /**
         * @en Stencil pattern.
         * @zh 模板缓冲样式。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        get pattern() {
          return this._stencilPattern;
        }

        /**
         * @en Add mask nesting.
         * @zh 添加mask嵌套。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        pushMask(mask) {
          this._maskStack.push(mask);
        }

        /**
         * @en clear stencil stage.
         * @zh 清空模板状态。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        clear(comp) {
          const isInverted = comp.stencilStage !== Stage.ENTER_LEVEL;
          return isInverted ? Stage.CLEAR_INVERTED : Stage.CLEAR;
        }

        /**
         * @en Open stencil stage to enabled.
         * @zh 开启模板状态。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        enableMask() {
          this.stage = Stage.ENABLED;
        }

        /**
         * @en exit stencil.
         * @zh 退出模板状态。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        exitMask() {
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
         */
        getWriteMask() {
          return 1 << this._maskStack.length - 1;
        }

        /**
         * @en Get write mask count when exit.
         * @zh 获取退出时模板缓冲的位数。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        getExitWriteMask() {
          return 1 << this._maskStack.length;
        }
        getStencilRef() {
          let result = 0;
          for (let i = 0; i < this._maskStack.length; ++i) {
            result += 0x00000001 << i;
          }
          return result;
        }

        /**
         * @en Get mask nesting count.
         * @zh 获取mask嵌套数量。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        getMaskStackSize() {
          return this._maskStack.length;
        }

        /**
         * @en Reset stencil stage.
         * @zh 重置模板状态。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        reset() {
          // reset stack and stage
          this._maskStack.length = 0;
          this.stage = Stage.DISABLED;
        }
        destroy() {
          this.stencilStateMap.forEach((value, key) => {
            value.destroy();
          });
          this.stencilStateMap.clear();
        }
        /**
         * @en Get stencil stage.
         * @zh 获取模板状态。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        getStencilStage(stage, mat) {
          let key = 0;
          let depthTest = false;
          let depthWrite = false;
          let depthFunc = ComparisonFunc.LESS;
          let cacheMap = this.stencilStateMap;
          if (mat && mat.passes[0]) {
            const pass = mat.passes[0];
            const dss = pass.depthStencilState;
            let depthTestValue = 0;
            let depthWriteValue = 0;
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
          const depthStencilState = new DepthStencilState(depthTest, depthWrite, depthFunc, this._stencilPattern.stencilTest, this._stencilPattern.func, this._stencilPattern.stencilMask, this._stencilPattern.writeMask, this._stencilPattern.failOp, this._stencilPattern.zFailOp, this._stencilPattern.passOp, this._stencilPattern.ref, this._stencilPattern.stencilTest, this._stencilPattern.func, this._stencilPattern.stencilMask, this._stencilPattern.writeMask, this._stencilPattern.failOp, this._stencilPattern.zFailOp, this._stencilPattern.passOp, this._stencilPattern.ref);
          cacheMap.set(key, depthStencilState);
          return depthStencilState;
        }

        /**
         * @en Get stencil hash.
         * @zh 获取模板状态的哈希值。
         * @deprecated since v3.7.0, this is an engine private interface that will be removed in the future.
         */
        getStencilHash(stage) {
          return stage << 8 | this._maskStack.length;
        }

        // Notice: Only children node in Mask need use this.stage
        setStateFromStage(stage) {
          const pattern = this._stencilPattern;
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
        }
      });
      StencilManager.sharedManager = null;
      StencilManager.sharedManager = new StencilManager();
    }
  };
});