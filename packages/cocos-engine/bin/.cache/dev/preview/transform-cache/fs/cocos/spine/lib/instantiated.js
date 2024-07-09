System.register("q-bundled:///fs/cocos/spine/lib/instantiated.js", ["pal/wasm", "../../../../virtual/internal%253Aconstants.js", "../../game/index.js", "../../core/index.js", "../../misc/webassembly-support.js", "./spine-define.js"], function (_export, _context) {
  "use strict";

  var _instantiateWasm, fetchBuffer, ensureWasmModuleReady, JSB, NATIVE_CODE_BUNDLE_MODE, game, error, sys, NativeCodeBundleMode, overrideSpineDefine, PAGESIZE, PAGECOUNT, MEMORYSIZE, wasmInstance, registerList, SPINE_WASM;
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  function initWasm(wasmFactory, wasmUrl) {
    return new Promise(function (resolve, reject) {
      var errorMessage = function errorMessage(err) {
        return "[Spine]: Spine wasm load failed: " + err;
      };
      wasmFactory({
        instantiateWasm: function instantiateWasm(importObject, receiveInstance) {
          // NOTE: the Promise return by instantiateWasm hook can't be caught.
          _instantiateWasm(wasmUrl, importObject).then(function (result) {
            receiveInstance(result.instance, result.module);
          })["catch"](function (err) {
            return reject(errorMessage(err));
          });
        }
      }).then(function (Instance) {
        wasmInstance = Instance;
        registerList.forEach(function (cb) {
          cb(wasmInstance);
        });
      }).then(resolve)["catch"](function (err) {
        return reject(errorMessage(err));
      });
    });
  }
  function initAsmJS(asmFactory, asmJsMemUrl) {
    return new Promise(function (resolve, reject) {
      fetchBuffer(asmJsMemUrl).then(function (arrayBuffer) {
        var wasmMemory = {};
        wasmMemory.buffer = new ArrayBuffer(MEMORYSIZE);
        var module = {
          wasmMemory: wasmMemory,
          memoryInitializerRequest: {
            response: arrayBuffer,
            status: 200
          }
        };
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return asmFactory(module).then(function (instance) {
          wasmInstance = instance;
          registerList.forEach(function (cb) {
            cb(wasmInstance);
          });
        });
      }).then(resolve)["catch"](reject);
    });
  }
  function shouldUseWasmModule() {
    if (NATIVE_CODE_BUNDLE_MODE === NativeCodeBundleMode.BOTH) {
      return sys.hasFeature(sys.Feature.WASM);
    } else if (NATIVE_CODE_BUNDLE_MODE === NativeCodeBundleMode.WASM) {
      return true;
    } else {
      return false;
    }
  }
  function waitForSpineWasmInstantiation() {
    var errorReport = function errorReport(msg) {
      error(msg);
    };
    return ensureWasmModuleReady().then(function () {
      if (shouldUseWasmModule()) {
        return Promise.all([_context["import"]('external:emscripten/spine/spine.wasm.js'), _context["import"]("../../../../virtual/external%253Aemscripten%252Fspine%252Fspine.wasm.js")]).then(function (_ref) {
          var wasmFactory = _ref[0]["default"],
            spineWasmUrl = _ref[1]["default"];
          return initWasm(wasmFactory, spineWasmUrl);
        });
      } else {
        return Promise.all([_context["import"]('external:emscripten/spine/spine.asm.js'), _context["import"]("../../../../virtual/external%253Aemscripten%252Fspine%252Fspine.js.mem.js")]).then(function (_ref2) {
          var asmFactory = _ref2[0]["default"],
            asmJsMemUrl = _ref2[1]["default"];
          return initAsmJS(asmFactory, asmJsMemUrl);
        });
      }
    })["catch"](errorReport);
  }
  _export("waitForSpineWasmInstantiation", waitForSpineWasmInstantiation);
  return {
    setters: [function (_palWasm) {
      _instantiateWasm = _palWasm.instantiateWasm;
      fetchBuffer = _palWasm.fetchBuffer;
      ensureWasmModuleReady = _palWasm.ensureWasmModuleReady;
    }, function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
      NATIVE_CODE_BUNDLE_MODE = _virtualInternal253AconstantsJs.NATIVE_CODE_BUNDLE_MODE;
    }, function (_gameIndexJs) {
      game = _gameIndexJs.game;
    }, function (_coreIndexJs) {
      error = _coreIndexJs.error;
      sys = _coreIndexJs.sys;
    }, function (_miscWebassemblySupportJs) {
      NativeCodeBundleMode = _miscWebassemblySupportJs.NativeCodeBundleMode;
    }, function (_spineDefineJs) {
      overrideSpineDefine = _spineDefineJs.overrideSpineDefine;
    }],
    execute: function () {
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
      PAGESIZE = 65536; // 64KiB
      // How many pages of the wasm memory
      // TODO: let this can be canfiguable by user.
      PAGECOUNT = 32 * 16; // How mush memory size of the wasm memory
      MEMORYSIZE = PAGESIZE * PAGECOUNT; // 32 MiB
      wasmInstance = null;
      registerList = [];
      if (!JSB) {
        game.onPostInfrastructureInitDelegate.add(waitForSpineWasmInstantiation);
        registerList.push(overrideSpineDefine);
      }
      _export("SPINE_WASM", SPINE_WASM = 1);
    }
  };
});