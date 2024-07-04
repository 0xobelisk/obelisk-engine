System.register("q-bundled:///fs/pal/env/runtime/env.js", ["../../../../virtual/internal%253Aconstants.js", "../../integrity-check.js"], function (_export, _context) {
  "use strict";

  var COCOSPLAY, VIVO, checkPalIntegrity, withImpl;
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
    const container = document.createElement('div');
    let frame;
    if (COCOSPLAY) {
      frame = {
        clientWidth: window.innerWidth,
        clientHeight: window.innerHeight
      };
    } else {
      frame = container.parentNode === document.body ? document.documentElement : container.parentNode;
    }
    let canvas;
    if (VIVO) {
      canvas = window.mainCanvas;
      window.mainCanvas = undefined;
    } else {
      canvas = ral.createCanvas();
    }
    return {
      frame,
      canvas,
      container
    };
  }
  function loadJsFile(path) {
    // eslint-disable-next-line import/no-dynamic-require
    return require(`${path}`);
  }
  _export({
    findCanvas: findCanvas,
    loadJsFile: loadJsFile
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      COCOSPLAY = _virtualInternal253AconstantsJs.COCOSPLAY;
      VIVO = _virtualInternal253AconstantsJs.VIVO;
    }, function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }],
    execute: function () {
      checkPalIntegrity(withImpl());
    }
  };
});