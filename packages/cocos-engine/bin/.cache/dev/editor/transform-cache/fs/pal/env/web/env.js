System.register("q-bundled:///fs/pal/env/web/env.js", ["../../integrity-check.js"], function (_export, _context) {
  "use strict";

  var checkPalIntegrity, withImpl;
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

  function findCanvas() {
    const frame = document.querySelector('#GameDiv');
    const container = document.querySelector('#Cocos3dGameContainer');
    const canvas = document.querySelector('#GameCanvas');
    return {
      frame,
      container,
      canvas
    };
  }
  function loadJsFile(path) {
    return new Promise((resolve, reject) => {
      let err;
      function windowErrorListener(evt) {
        if (evt.filename === path) {
          err = evt.error;
        }
      }
      window.addEventListener('error', windowErrorListener);
      const script = document.createElement('script');
      script.charset = 'utf-8';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.addEventListener('error', () => {
        window.removeEventListener('error', windowErrorListener);
        reject(Error(`Error loading ${path}`));
      });
      script.addEventListener('load', () => {
        window.removeEventListener('error', windowErrorListener);
        document.head.removeChild(script);
        // Note that if an error occurs that isn't caught by this if statement,
        // that getRegister will return null and a "did not instantiate" error will be thrown.
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
      script.src = path.replace('#', '%23');
      document.head.appendChild(script);
    });
  }
  _export({
    findCanvas: findCanvas,
    loadJsFile: loadJsFile
  });
  return {
    setters: [function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }],
    execute: function () {
      checkPalIntegrity(withImpl());
    }
  };
});