System.register("q-bundled:///fs/cocos/misc/deprecated.js", ["./camera-component.js", "../core/index.js", "./model-renderer.js", "./renderer.js"], function (_export, _context) {
  "use strict";

  var Camera, replaceProperty, cclegacy, js, markAsWarning, ModelRenderer, Renderer;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2013-2016 Chukong Technologies Inc.
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
                                                                                                                                                                                                                                                                                                                                                                                            */ /* eslint-disable @typescript-eslint/no-unsafe-return */
  return {
    setters: [function (_cameraComponentJs) {
      Camera = _cameraComponentJs.Camera;
    }, function (_coreIndexJs) {
      replaceProperty = _coreIndexJs.replaceProperty;
      cclegacy = _coreIndexJs.cclegacy;
      js = _coreIndexJs.js;
      markAsWarning = _coreIndexJs.markAsWarning;
    }, function (_modelRendererJs) {
      ModelRenderer = _modelRendererJs.ModelRenderer;
    }, function (_rendererJs) {
      Renderer = _rendererJs.Renderer;
    }],
    execute: function () {
      replaceProperty(Camera, 'Camera', [{
        name: 'CameraClearFlag',
        newName: 'ClearFlag'
      }]);
      replaceProperty(Camera.prototype, 'Camera.prototype', [{
        name: 'color',
        newName: 'clearColor'
      }, {
        name: 'depth',
        newName: 'clearDepth'
      }, {
        name: 'stencil',
        newName: 'clearStencil'
      }]);

      // deprecate Renderer API
      markAsWarning(Renderer.prototype, 'Renderer.prototype', [{
        name: 'getMaterial',
        suggest: 'please use renderer.getSharedMaterial instead.'
      }]);

      /**
       * Alias of [[Camera]]
       * @deprecated Since v1.2
       */
      _export("CameraComponent", Camera);
      cclegacy.CameraComponent = Camera;
      js.setClassAlias(Camera, 'cc.CameraComponent');

      /**
       * Alias of [[Renderer]]
       * @deprecated Since v3.6
       */
      _export("RenderableComponent", ModelRenderer);
      cclegacy.RenderableComponent = ModelRenderer;
      js.setClassAlias(ModelRenderer, 'cc.RenderableComponent');
    }
  };
});