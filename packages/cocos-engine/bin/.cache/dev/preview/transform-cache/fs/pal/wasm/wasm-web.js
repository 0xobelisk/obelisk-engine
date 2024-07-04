System.register("q-bundled:///fs/pal/wasm/wasm-web.js", ["../../../virtual/internal%253Aconstants.js", "../integrity-check.js"], function (_export, _context) {
  "use strict";

  var EDITOR, PREVIEW, checkPalIntegrity, withImpl;
  /*
   Copyright (c) 2023 Xiamen Yaji Software Co., Ltd.
  
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

  function instantiateWasm(wasmUrl, importObject) {
    return fetchBuffer(wasmUrl).then(function (arrayBuffer) {
      return WebAssembly.instantiate(arrayBuffer, importObject);
    });
  }
  function fetchBuffer(binaryUrl) {
    return new Promise(function (resolve, reject) {
      try {
        // NOTE: when it's in EDITOR or PREVIEW, binaryUrl is a url with `external:` protocol.
        if (EDITOR) {
          Editor.Message.request('engine', 'query-engine-info').then(function (info) {
            var externalRoot = info["native"].path + "/external/";
            binaryUrl = binaryUrl.replace('external:', externalRoot);
            // IDEA: it's better we implement another PAL for nodejs platform.
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            var fs = require('fs');
            var arrayBuffer = fs.readFileSync(binaryUrl);
            resolve(arrayBuffer);
          });
          return;
        } else if (PREVIEW) {
          // NOTE: we resolve '/engine_external/' in in editor preview server.
          fetch("/engine_external/?url=" + binaryUrl).then(function (response) {
            return response.arrayBuffer().then(resolve);
          })["catch"](function (e) {});
          return;
        }
        // here is in the BUILD mode
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore NOTE: we need to use 'import.meta' here, but the tsc won't allow this, so we need to force ignoring this error here.
        binaryUrl = new URL(binaryUrl, _context.meta.url).href;
        fetch(binaryUrl).then(function (response) {
          return response.arrayBuffer().then(resolve);
        })["catch"](function (e) {});
      } catch (e) {
        reject(e);
      }
    });
  }
  function ensureWasmModuleReady() {
    return Promise.resolve();
  }
  _export({
    instantiateWasm: instantiateWasm,
    fetchBuffer: fetchBuffer,
    ensureWasmModuleReady: ensureWasmModuleReady
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      PREVIEW = _virtualInternal253AconstantsJs.PREVIEW;
    }, function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }],
    execute: function () {
      checkPalIntegrity(withImpl());
    }
  };
});