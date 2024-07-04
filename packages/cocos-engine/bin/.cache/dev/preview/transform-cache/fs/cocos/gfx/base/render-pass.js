System.register("q-bundled:///fs/cocos/gfx/base/render-pass.js", ["../../core/index.js", "./define.js"], function (_export, _context) {
  "use strict";

  var murmurhash2_32_gc, GFXObject, ObjectType, RenderPass;
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
    setters: [function (_coreIndexJs) {
      murmurhash2_32_gc = _coreIndexJs.murmurhash2_32_gc;
    }, function (_defineJs) {
      GFXObject = _defineJs.GFXObject;
      ObjectType = _defineJs.ObjectType;
    }],
    execute: function () {
      /**
       * @en GFX render pass.
       * @zh GFX 渲染过程。
       */
      _export("RenderPass", RenderPass = /*#__PURE__*/function (_GFXObject) {
        _inheritsLoose(RenderPass, _GFXObject);
        function RenderPass() {
          var _this;
          _this = _GFXObject.call(this, ObjectType.RENDER_PASS) || this;
          _this._colorInfos = [];
          _this._depthStencilInfo = null;
          _this._subpasses = [];
          _this._hash = 0;
          return _this;
        }

        // Based on render pass compatibility
        var _proto = RenderPass.prototype;
        _proto.computeHash = function computeHash() {
          var res = '';
          if (this._subpasses.length) {
            for (var i = 0; i < this._subpasses.length; ++i) {
              var subpass = this._subpasses[i];
              if (subpass.inputs.length) {
                res += 'ia';
                for (var j = 0; j < subpass.inputs.length; ++j) {
                  var ia = this._colorInfos[subpass.inputs[j]];
                  res += "," + ia.format + "," + ia.sampleCount;
                }
              }
              if (subpass.colors.length) {
                res += 'ca';
                for (var _j = 0; _j < subpass.inputs.length; ++_j) {
                  var ca = this._colorInfos[subpass.inputs[_j]];
                  res += "," + ca.format + "," + ca.sampleCount;
                }
              }
              if (subpass.depthStencil >= 0) {
                var ds = this._colorInfos[subpass.depthStencil];
                res += "ds," + ds.format + "," + ds.sampleCount;
              }
            }
          } else {
            res += 'ca';
            for (var _i = 0; _i < this._colorInfos.length; ++_i) {
              var _ca = this._colorInfos[_i];
              res += "," + _ca.format + "," + _ca.sampleCount;
            }
            var _ds = this._depthStencilInfo;
            if (_ds) {
              res += "ds," + _ds.format + "," + _ds.sampleCount;
            }
          }
          return murmurhash2_32_gc(res, 666);
        };
        _createClass(RenderPass, [{
          key: "colorAttachments",
          get: function get() {
            return this._colorInfos;
          }
        }, {
          key: "depthStencilAttachment",
          get: function get() {
            return this._depthStencilInfo;
          }
        }, {
          key: "subPasses",
          get: function get() {
            return this._subpasses;
          }
        }, {
          key: "hash",
          get: function get() {
            return this._hash;
          }
        }]);
        return RenderPass;
      }(GFXObject));
    }
  };
});