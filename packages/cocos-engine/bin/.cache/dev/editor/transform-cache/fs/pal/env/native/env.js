System.register("q-bundled:///fs/pal/env/native/env.js", ["../../../../virtual/internal%253Aconstants.js", "../../integrity-check.js"], function (_export, _context) {
  "use strict";

  var NATIVE, PREVIEW, checkPalIntegrity, withImpl, ccwindow, ccdocument;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
  function findCanvas() {
    const container = ccdocument.createElement('div');
    const frame = ccdocument.documentElement;
    const canvas = ccwindow.__canvas;
    return {
      frame,
      canvas,
      container
    };
  }
  function loadJsFile(path) {
    if (NATIVE && window.oh && window.scriptEngineType === 'napi') {
      // TODO(qgh):OpenHarmony does not currently support dynamic require expressions
      window.oh.loadModule(path);
      return Promise.resolve();
    } else {
      if (PREVIEW) {
        // NOTE: in native preview (simulator), we need to request script with url http://x.x.x.x:xxxx/plugins/xxx.js
        // so that the editor preview server would resolve the plugin script and return the code.
        // here we use window.eval() function to execute the code of plugin script.
        return new Promise((resolve, reject) => {
          const sourceURL = window.location.href + path;
          const xhr = new XMLHttpRequest();
          xhr.onload = () => {
            if (xhr.status !== 200) {
              reject(new Error(`load js file failed: ${sourceURL}, error status: ${xhr.status}`));
              return;
            }
            // eslint-disable-next-line no-eval
            window.eval(`${xhr.response}\n//# sourceURL=${sourceURL}`);
            resolve();
          };
          xhr.onerror = () => {
            reject(new Error(`load js file failed: ${sourceURL}`));
          };
          xhr.open('GET', sourceURL, true);
          xhr.send(null);
        });
      }
      // eslint-disable-next-line import/no-dynamic-require
      return require(`${path}`);
    }
  }
  _export({
    findCanvas: findCanvas,
    loadJsFile: loadJsFile
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      NATIVE = _virtualInternal253AconstantsJs.NATIVE;
      PREVIEW = _virtualInternal253AconstantsJs.PREVIEW;
    }, function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }],
    execute: function () {
      ccwindow = typeof globalThis.jsb !== 'undefined' ? typeof jsb.window !== 'undefined' ? jsb.window : window : window;
      ccdocument = ccwindow.document;
      checkPalIntegrity(withImpl());
    }
  };
});