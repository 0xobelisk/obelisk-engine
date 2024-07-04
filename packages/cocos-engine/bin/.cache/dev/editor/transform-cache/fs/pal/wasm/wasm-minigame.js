System.register("q-bundled:///fs/pal/wasm/wasm-minigame.js", ["../../../virtual/internal%253Aconstants.js", "pal/minigame", "../../cocos/core/utils/path.js", "../integrity-check.js", "../../cocos/core/platform/debug.js"], function (_export, _context) {
  "use strict";

  var HUAWEI, TAOBAO_MINIGAME, WASM_SUBPACKAGE, XIAOMI, minigame, basename, checkPalIntegrity, withImpl, log, promiseToLoadWasmModule;
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

  // NOTE: The global variable `CCWebAssembly` is assigned in platforms/(bytedance|wechat)/wrapper/builtin/index.js

  function instantiateWasm(wasmUrl, importObject) {
    return getPlatformBinaryUrl(wasmUrl).then(url => CCWebAssembly.instantiate(url, importObject));
  }
  function fetchBuffer(binaryUrl) {
    return new Promise((resolve, reject) => {
      getPlatformBinaryUrl(binaryUrl).then(url => {
        // NOTE: fsUtils is defined in engine-adapter, we need to access globalThis explicitly for Taobao platform
        globalThis.fsUtils.readArrayBuffer(url, (err, arrayBuffer) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(arrayBuffer);
        });
        // eslint-disable-next-line @typescript-eslint/no-empty-function
      }).catch(e => {});
    });
  }
  function loadSubpackage(name) {
    return new Promise((resolve, reject) => {
      if (minigame.loadSubpackage) {
        minigame.loadSubpackage({
          name,
          success() {
            resolve();
          },
          fail(err) {
            log(`Load subpacakge '${name}' failed, maybe we don't need this subpacakge or it's an engine build issue, for detailed: `, err);
            resolve();
          }
        });
      } else {
        reject(new Error(`Subpackage is not supported on this platform`));
      }
    });
  }
  function ensureWasmModuleReady() {
    if (promiseToLoadWasmModule) {
      return promiseToLoadWasmModule;
    }
    return promiseToLoadWasmModule = new Promise((resolve, reject) => {
      if (WASM_SUBPACKAGE) {
        if (HUAWEI) {
          // NOTE: huawei quick game doesn't support concurrent loading subpackage.
          loadSubpackage('__ccWasmAssetSubpkg__').then(() => loadSubpackage('__ccWasmChunkSubpkg__')).then(() => {
            resolve();
          }).catch(reject);
        } else {
          Promise.all(['__ccWasmAssetSubpkg__', '__ccWasmChunkSubpkg__'].map(pkgName => loadSubpackage(pkgName))).then(() => {
            resolve();
          }).catch(reject);
        }
      } else {
        resolve();
      }
    });
  }

  /**
   * The binary url can be different on different platforms.
   * @param binaryUrl the basic build output binary url
   * @returns the real binary url on the exact platform
   */
  function getPlatformBinaryUrl(binaryUrl) {
    return new Promise(resolve => {
      if (XIAOMI) {
        resolve(`src/cocos-js/${binaryUrl}`);
      }
      if (TAOBAO_MINIGAME && WASM_SUBPACKAGE) {
        if (minigame.isDevTool) {
          resolve(`cocos-js/${binaryUrl}`);
        } else {
          resolve(`__ccWasmAssetSubpkg__/${basename(binaryUrl)}`);
        }
      } else {
        resolve(`cocos-js/${binaryUrl}`);
      }
    });
  }
  _export({
    instantiateWasm: instantiateWasm,
    fetchBuffer: fetchBuffer,
    ensureWasmModuleReady: ensureWasmModuleReady
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      HUAWEI = _virtualInternal253AconstantsJs.HUAWEI;
      TAOBAO_MINIGAME = _virtualInternal253AconstantsJs.TAOBAO_MINIGAME;
      WASM_SUBPACKAGE = _virtualInternal253AconstantsJs.WASM_SUBPACKAGE;
      XIAOMI = _virtualInternal253AconstantsJs.XIAOMI;
    }, function (_palMinigame) {
      minigame = _palMinigame.minigame;
    }, function (_cocosCoreUtilsPathJs) {
      basename = _cocosCoreUtilsPathJs.basename;
    }, function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }, function (_cocosCorePlatformDebugJs) {
      log = _cocosCorePlatformDebugJs.log;
    }],
    execute: function () {
      checkPalIntegrity(withImpl());
    }
  };
});