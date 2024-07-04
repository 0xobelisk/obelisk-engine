System.register("q-bundled:///fs/cocos/gfx/base/states/sampler.js", ["../define.js"], function (_export, _context) {
  "use strict";

  var GFXObject, ObjectType, SamplerInfo, Sampler;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
    setters: [function (_defineJs) {
      GFXObject = _defineJs.GFXObject;
      ObjectType = _defineJs.ObjectType;
      SamplerInfo = _defineJs.SamplerInfo;
    }],
    execute: function () {
      /**
       * @en GFX sampler.
       * @zh GFX 采样器。
       */
      _export("Sampler", Sampler = /*#__PURE__*/function (_GFXObject) {
        _inheritsLoose(Sampler, _GFXObject);
        function Sampler(info, hash) {
          var _this;
          _this = _GFXObject.call(this, ObjectType.SAMPLER) || this;
          _this._info = new SamplerInfo();
          _this._hash = 0;
          _this._info.copy(info);
          _this._hash = hash;
          return _this;
        }
        Sampler.computeHash = function computeHash(info) {
          var hash = info.minFilter;
          hash |= info.magFilter << 2;
          hash |= info.mipFilter << 4;
          hash |= info.addressU << 6;
          hash |= info.addressV << 8;
          hash |= info.addressW << 10;
          hash |= info.maxAnisotropy << 12;
          hash |= info.cmpFunc << 16;
          return hash;
        };
        Sampler.unpackFromHash = function unpackFromHash(hash) {
          var info = new SamplerInfo();
          info.minFilter = (hash & (1 << 2) - 1) >> 0;
          info.magFilter = (hash & (1 << 2) - 1) >> 2;
          info.mipFilter = (hash & (1 << 2) - 1) >> 4;
          info.addressU = (hash & (1 << 2) - 1) >> 6;
          info.addressV = (hash & (1 << 2) - 1) >> 8;
          info.addressW = (hash & (1 << 2) - 1) >> 10;
          info.maxAnisotropy = (hash & (1 << 4) - 1) >> 12;
          info.cmpFunc = (hash & (1 << 3) - 1) >> 16;
          return info;
        };
        _createClass(Sampler, [{
          key: "info",
          get: function get() {
            return this._info;
          }
        }, {
          key: "hash",
          get: function get() {
            return this._hash;
          }
        }]);
        return Sampler;
      }(GFXObject));
    }
  };
});