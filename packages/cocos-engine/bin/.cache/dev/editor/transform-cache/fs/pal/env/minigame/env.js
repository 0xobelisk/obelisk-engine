System.register("q-bundled:///fs/pal/env/minigame/env.js", ["../../../../virtual/internal%253Aconstants.js", "../../integrity-check.js"], function (_export, _context) {
  "use strict";

  var BAIDU, TAOBAO, TAOBAO_MINIGAME, WECHAT, WECHAT_MINI_PROGRAM, XIAOMI, checkPalIntegrity, withImpl;
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

  /* eslint-disable import/no-dynamic-require */

  function findCanvas() {
    const container = document.createElement('div');
    return {
      frame: container,
      canvas: window.canvas,
      container
    };
  }
  function loadJsFile(path) {
    if (XIAOMI) {
      return require(`../../${path}`);
    }
    if (BAIDU) {
      return __baiduRequire(`./${path}`);
    }
    if (WECHAT || WECHAT_MINI_PROGRAM) {
      return __wxRequire(path);
    }
    if (TAOBAO_MINIGAME) {
      return globalThis.__taobaoRequire(path);
    }
    if (TAOBAO) {
      // NOTE: Taobao doesn't support dynamic require
      return undefined;
    }
    return require(`../${path}`);
  }
  _export({
    findCanvas: findCanvas,
    loadJsFile: loadJsFile
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      BAIDU = _virtualInternal253AconstantsJs.BAIDU;
      TAOBAO = _virtualInternal253AconstantsJs.TAOBAO;
      TAOBAO_MINIGAME = _virtualInternal253AconstantsJs.TAOBAO_MINIGAME;
      WECHAT = _virtualInternal253AconstantsJs.WECHAT;
      WECHAT_MINI_PROGRAM = _virtualInternal253AconstantsJs.WECHAT_MINI_PROGRAM;
      XIAOMI = _virtualInternal253AconstantsJs.XIAOMI;
    }, function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }],
    execute: function () {
      checkPalIntegrity(withImpl());
    }
  };
});