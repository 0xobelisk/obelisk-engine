System.register("q-bundled:///fs/cocos/render-scene/scene/skin.js", [], function (_export, _context) {
  "use strict";

  var Skin;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [],
    execute: function () {
      /*
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
      /**
       * @en Global skin in the render scene.
       * The initial data is setup in [[SceneGlobals.skip]].
       * @zh 渲染场景中的全局皮肤后处理设置。
       * 初始值是由 [[SceneGlobals.skin]] 设置的。
       */
      _export("Skin", Skin = /*#__PURE__*/function () {
        function Skin() {
          this._enabled = true;
          this._blurRadius = 0.01;
          this._sssIntensity = 3.0;
        }
        var _proto = Skin.prototype;
        _proto.initialize = function initialize(skinInfo) {
          this._enabled = skinInfo.enabled;
          this._blurRadius = skinInfo.blurRadius;
          this._sssIntensity = skinInfo.sssIntensity;
        };
        _createClass(Skin, [{
          key: "enabled",
          get: function get() {
            return this._enabled;
          }

          /**
           * @en Getter/Setter sampler width.
           * @zh 设置或者获取采样宽度。
           */,
          set:
          /**
           * @en Enable skip.
           * @zh 是否开启皮肤后效。
           */
          function set(val) {
            this._enabled = val;
          }
        }, {
          key: "blurRadius",
          get: function get() {
            return this._blurRadius;
          }

          /**
           * @en Getter/Setter depth unit scale.
           * @zh 设置或者获取深度单位比例。
           */,
          set: function set(val) {
            this._blurRadius = val;
          }
        }, {
          key: "sssIntensity",
          get: function get() {
            return this._sssIntensity;
          },
          set: function set(val) {
            this._sssIntensity = val;
          }
        }]);
        return Skin;
      }());
    }
  };
});