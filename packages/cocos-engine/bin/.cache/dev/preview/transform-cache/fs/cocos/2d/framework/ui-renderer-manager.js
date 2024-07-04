System.register("q-bundled:///fs/cocos/2d/framework/ui-renderer-manager.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var DEBUG, assert, js, UIRendererManager, uiRendererManager;
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      DEBUG = _virtualInternal253AconstantsJs.DEBUG;
    }, function (_coreIndexJs) {
      assert = _coreIndexJs.assert;
      js = _coreIndexJs.js;
    }],
    execute: function () {
      /*
       Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
      
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
      _export("UIRendererManager", UIRendererManager = /*#__PURE__*/function () {
        function UIRendererManager() {
          this._allRenderers = [];
          this._dirtyRenderers = [];
          this._dirtyVersion = 0;
        }
        var _proto = UIRendererManager.prototype;
        _proto.addRenderer = function addRenderer(uiRenderer) {
          if (uiRenderer._internalId === -1) {
            uiRenderer._internalId = this._allRenderers.length;
            this._allRenderers.push(uiRenderer);
          }
        };
        _proto.removeRenderer = function removeRenderer(uiRenderer) {
          if (uiRenderer._internalId !== -1) {
            if (DEBUG) {
              assert(this._allRenderers[uiRenderer._internalId] === uiRenderer);
            }
            var id = uiRenderer._internalId;
            this._allRenderers[this._allRenderers.length - 1]._internalId = id;
            js.array.fastRemoveAt(this._allRenderers, id);
            uiRenderer._internalId = -1;
            if (uiRenderer._dirtyVersion === this._dirtyVersion) {
              js.array.fastRemove(this._dirtyRenderers, uiRenderer);
              uiRenderer._dirtyVersion = -1;
            }
          }
        };
        _proto.markDirtyRenderer = function markDirtyRenderer(uiRenderer) {
          if (uiRenderer._dirtyVersion !== this._dirtyVersion && uiRenderer._internalId !== -1) {
            this._dirtyRenderers.push(uiRenderer);
            uiRenderer._dirtyVersion = this._dirtyVersion;
          }
        };
        _proto.updateAllDirtyRenderers = function updateAllDirtyRenderers() {
          var length = this._dirtyRenderers.length;
          var dirtyRenderers = this._dirtyRenderers;
          for (var i = 0; i < length; i++) {
            if (DEBUG) {
              assert(dirtyRenderers[i]._internalId !== -1);
            }
            dirtyRenderers[i].updateRenderer();
          }
          this._dirtyRenderers.length = 0;
          this._dirtyVersion++;
        };
        return UIRendererManager;
      }());
      _export("uiRendererManager", uiRendererManager = new UIRendererManager());
    }
  };
});