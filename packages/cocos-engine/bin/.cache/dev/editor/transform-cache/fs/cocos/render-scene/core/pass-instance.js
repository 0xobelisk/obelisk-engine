System.register("q-bundled:///fs/cocos/render-scene/core/pass-instance.js", ["./pass.js", "./pass-utils.js"], function (_export, _context) {
  "use strict";

  var BatchingSchemes, Pass, overrideMacros, PassInstance;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
  _export("PassInstance", void 0);
  return {
    setters: [function (_passJs) {
      BatchingSchemes = _passJs.BatchingSchemes;
      Pass = _passJs.Pass;
    }, function (_passUtilsJs) {
      overrideMacros = _passUtilsJs.overrideMacros;
    }],
    execute: function () {
      /**
       * @en A pass instance defines an variant version of the [[renderer.Pass]]
       * @zh 表示 [[renderer.Pass]] 的一种特殊实例
       */
      _export("PassInstance", PassInstance = class PassInstance extends Pass {
        /**
         * @en The parent pass
         * @zh 相关联的原始 Pass
         */
        get parent() {
          return this._parent;
        }
        constructor(parent, owner) {
          super(parent.root);
          this._parent = void 0;
          this._owner = void 0;
          this._dontNotify = false;
          this._parent = parent;
          this._owner = owner;
          this._doInit(this._parent, true); // defines may change now
          for (let i = 0; i < this._shaderInfo.blocks.length; i++) {
            const u = this._shaderInfo.blocks[i];
            const block = this._blocks[u.binding];
            const parentBlock = this._parent.blocks[u.binding];
            block.set(parentBlock);
          }
          this._rootBufferDirty = true;
          const paren = this._parent;
          for (let i = 0; i < this._shaderInfo.samplerTextures.length; i++) {
            const u = this._shaderInfo.samplerTextures[i];
            for (let j = 0; j < u.count; j++) {
              const sampler = paren._descriptorSet.getSampler(u.binding, j);
              const texture = paren._descriptorSet.getTexture(u.binding, j);
              this._descriptorSet.bindSampler(u.binding, sampler, j);
              this._descriptorSet.bindTexture(u.binding, texture, j);
            }
          }
          super.tryCompile();
        }

        /**
         * @en Override pipeline states with the given pass override info.
         * This won't affect the original pass
         * @zh 重载当前 Pass 的管线状态。这不会影响原始 Pass
         * @param original The original pass info
         * @param value The override pipeline state info
         */
        overridePipelineStates(original, overrides) {
          this._bs.reset();
          this._rs.reset();
          this._dss.reset();
          Pass.fillPipelineInfo(this, original);
          Pass.fillPipelineInfo(this, overrides);
          this._onStateChange();
        }
        tryCompile(defineOverrides) {
          if (defineOverrides) {
            if (!overrideMacros(this._defines, defineOverrides)) {
              return false;
            }
          }
          const res = super.tryCompile();
          this._onStateChange();
          return res;
        }

        /**
         * @en Prepare to change states of the pass and do not notify the material to rebuild the pipeline state object
         * @zh 开始静默修改 Pass 相关状态，不会通知材质去重新构建管线状态对象。
         */
        beginChangeStatesSilently() {
          this._dontNotify = true;
        }

        /**
         * @en End the silent states changing process, all state changes will be notified.
         * @zh 结束静默状态修改，所有修改将会开始通知材质。
         */
        endChangeStatesSilently() {
          this._dontNotify = false;
        }
        _syncBatchingScheme() {
          this._defines.USE_INSTANCING = false;
          this._batchingScheme = BatchingSchemes.NONE;
        }
        _onStateChange() {
          this._hash = Pass.getPassHash(this);
          this._owner.onPassStateChange(this._dontNotify);
        }
      });
    }
  };
});