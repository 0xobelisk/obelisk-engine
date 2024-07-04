System.register("q-bundled:///fs/cocos/render-scene/core/material-instance.js", ["../../asset/assets/material.js", "./pass-instance.js"], function (_export, _context) {
  "use strict";

  var Material, PassInstance, MaterialInstance;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
                                                                                                                                                                                                            Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                           
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
    setters: [function (_assetAssetsMaterialJs) {
      Material = _assetAssetsMaterialJs.Material;
    }, function (_passInstanceJs) {
      PassInstance = _passInstanceJs.PassInstance;
    }],
    execute: function () {
      /**
       * @zh
       * 材质实例，当有材质修改需求时，根据材质资源创建的，可任意定制的实例。
       */
      _export("MaterialInstance", MaterialInstance = /*#__PURE__*/function (_Material) {
        _inheritsLoose(MaterialInstance, _Material);
        function MaterialInstance(info) {
          var _this;
          _this = _Material.call(this) || this;
          _this._passes = [];
          _this._parent = void 0;
          _this._owner = void 0;
          _this._subModelIdx = 0;
          _this._parent = info.parent;
          _this._owner = info.owner || null;
          _this._subModelIdx = info.subModelIdx || 0;
          _this.copy(_this._parent);
          return _this;
        }
        var _proto = MaterialInstance.prototype;
        _proto.recompileShaders = function recompileShaders(overrides, passIdx) {
          if (!this._passes || !this.effectAsset) {
            return;
          }
          if (passIdx === undefined) {
            for (var _iterator = _createForOfIteratorHelperLoose(this._passes), _step; !(_step = _iterator()).done;) {
              var pass = _step.value;
              pass.tryCompile(overrides);
            }
          } else {
            this._passes[passIdx].tryCompile(overrides);
          }
        };
        _proto.overridePipelineStates = function overridePipelineStates(overrides, passIdx) {
          if (!this._passes || !this.effectAsset) {
            return;
          }
          var passInfos = this.effectAsset.techniques[this.technique].passes;
          if (passIdx === undefined) {
            for (var i = 0; i < this._passes.length; i++) {
              var pass = this._passes[i];
              var state = this._states[i] || (this._states[i] = {});
              for (var key in overrides) {
                state[key] = overrides[key];
              }
              pass.overridePipelineStates(passInfos[pass.passIndex], state);
            }
          } else {
            var _state = this._states[passIdx] || (this._states[passIdx] = {});
            for (var _key in overrides) {
              _state[_key] = overrides[_key];
            }
            this._passes[passIdx].overridePipelineStates(passInfos[passIdx], _state);
          }
        };
        _proto.destroy = function destroy() {
          this._doDestroy();
          return true;
        };
        _proto.onPassStateChange = function onPassStateChange(dontNotify) {
          this._hash = Material.getHash(this);
          if (!dontNotify && this._owner) {
            this._owner._onRebuildPSO(this._subModelIdx, this);
          }
        };
        _proto._createPasses = function _createPasses() {
          var passes = [];
          var parentPasses = this._parent.passes;
          if (!parentPasses) {
            return passes;
          }
          for (var k = 0; k < parentPasses.length; ++k) {
            passes.push(new PassInstance(parentPasses[k], this));
          }
          return passes;
        };
        _createClass(MaterialInstance, [{
          key: "parent",
          get: function get() {
            return this._parent;
          }
        }, {
          key: "owner",
          get: function get() {
            return this._owner;
          }
        }]);
        return MaterialInstance;
      }(Material));
    }
  };
});