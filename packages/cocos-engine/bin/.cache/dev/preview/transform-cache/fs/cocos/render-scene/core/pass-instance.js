System.register("q-bundled:///fs/cocos/render-scene/core/pass-instance.js", ["./pass.js", "./pass-utils.js"], function (_export, _context) {
  "use strict";

  var BatchingSchemes, Pass, overrideMacros, PassInstance;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
      _export("PassInstance", PassInstance = /*#__PURE__*/function (_Pass) {
        _inheritsLoose(PassInstance, _Pass);
        function PassInstance(parent, owner) {
          var _this;
          _this = _Pass.call(this, parent.root) || this;
          _this._parent = void 0;
          _this._owner = void 0;
          _this._dontNotify = false;
          _this._parent = parent;
          _this._owner = owner;
          _this._doInit(_this._parent, true); // defines may change now
          for (var i = 0; i < _this._shaderInfo.blocks.length; i++) {
            var u = _this._shaderInfo.blocks[i];
            var block = _this._blocks[u.binding];
            var parentBlock = _this._parent.blocks[u.binding];
            block.set(parentBlock);
          }
          _this._rootBufferDirty = true;
          var paren = _this._parent;
          for (var _i = 0; _i < _this._shaderInfo.samplerTextures.length; _i++) {
            var _u = _this._shaderInfo.samplerTextures[_i];
            for (var j = 0; j < _u.count; j++) {
              var sampler = paren._descriptorSet.getSampler(_u.binding, j);
              var texture = paren._descriptorSet.getTexture(_u.binding, j);
              _this._descriptorSet.bindSampler(_u.binding, sampler, j);
              _this._descriptorSet.bindTexture(_u.binding, texture, j);
            }
          }
          _Pass.prototype.tryCompile.call(_assertThisInitialized(_this));
          return _this;
        }

        /**
         * @en Override pipeline states with the given pass override info.
         * This won't affect the original pass
         * @zh 重载当前 Pass 的管线状态。这不会影响原始 Pass
         * @param original The original pass info
         * @param value The override pipeline state info
         */
        var _proto = PassInstance.prototype;
        _proto.overridePipelineStates = function overridePipelineStates(original, overrides) {
          this._bs.reset();
          this._rs.reset();
          this._dss.reset();
          Pass.fillPipelineInfo(this, original);
          Pass.fillPipelineInfo(this, overrides);
          this._onStateChange();
        };
        _proto.tryCompile = function tryCompile(defineOverrides) {
          if (defineOverrides) {
            if (!overrideMacros(this._defines, defineOverrides)) {
              return false;
            }
          }
          var res = _Pass.prototype.tryCompile.call(this);
          this._onStateChange();
          return res;
        }

        /**
         * @en Prepare to change states of the pass and do not notify the material to rebuild the pipeline state object
         * @zh 开始静默修改 Pass 相关状态，不会通知材质去重新构建管线状态对象。
         */;
        _proto.beginChangeStatesSilently = function beginChangeStatesSilently() {
          this._dontNotify = true;
        }

        /**
         * @en End the silent states changing process, all state changes will be notified.
         * @zh 结束静默状态修改，所有修改将会开始通知材质。
         */;
        _proto.endChangeStatesSilently = function endChangeStatesSilently() {
          this._dontNotify = false;
        };
        _proto._syncBatchingScheme = function _syncBatchingScheme() {
          this._defines.USE_INSTANCING = false;
          this._batchingScheme = BatchingSchemes.NONE;
        };
        _proto._onStateChange = function _onStateChange() {
          this._hash = Pass.getPassHash(this);
          this._owner.onPassStateChange(this._dontNotify);
        };
        _createClass(PassInstance, [{
          key: "parent",
          get:
          /**
           * @en The parent pass
           * @zh 相关联的原始 Pass
           */
          function get() {
            return this._parent;
          }
        }]);
        return PassInstance;
      }(Pass));
    }
  };
});