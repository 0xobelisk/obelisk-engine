System.register("q-bundled:///fs/cocos/native-binding/impl.js", ["../core/index.js", "../../../virtual/internal%253Aconstants.js"], function (_export, _context) {
  "use strict";

  var sys, NATIVE, _globalThis$jsb, _globalJsb$copyTextTo, globalJsb, JsbBridgeWrapper, originSaveImageData, _native;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [function (_coreIndexJs) {
      sys = _coreIndexJs.sys;
    }, function (_virtualInternal253AconstantsJs) {
      NATIVE = _virtualInternal253AconstantsJs.NATIVE;
    }],
    execute: function () {
      globalJsb = (_globalThis$jsb = globalThis.jsb) !== null && _globalThis$jsb !== void 0 ? _globalThis$jsb : {};
      if (NATIVE) {
        Object.defineProperty(globalJsb, 'reflection', {
          get: function get() {
            if (globalJsb.__bridge !== undefined) return globalJsb.__bridge;
            if (globalThis.JavascriptJavaBridge && (sys.os === sys.OS.ANDROID || sys.os === sys.OS.OHOS)) {
              globalJsb.__bridge = new globalThis.JavascriptJavaBridge();
            } else if (globalThis.JavaScriptObjCBridge && (sys.os === sys.OS.IOS || sys.os === sys.OS.OSX)) {
              globalJsb.__bridge = new globalThis.JavaScriptObjCBridge();
            } else {
              globalJsb.__bridge = null;
            }
            return globalJsb.__bridge;
          },
          enumerable: true,
          configurable: true,
          set: function set(value) {
            globalJsb.__bridge = value;
          }
        });
        Object.defineProperty(globalJsb, 'bridge', {
          get: function get() {
            if (globalJsb.__ccbridge !== undefined) return globalJsb.__ccbridge;
            if (globalThis.ScriptNativeBridge && sys.os === sys.OS.ANDROID || sys.os === sys.OS.IOS || sys.os === sys.OS.OSX || sys.os === sys.OS.OHOS) {
              globalJsb.__ccbridge = new ScriptNativeBridge();
            } else {
              globalJsb.__ccbridge = null;
            }
            return globalJsb.__ccbridge;
          },
          enumerable: true,
          configurable: true,
          set: function set(value) {
            globalJsb.__ccbridge = value;
          }
        });
        JsbBridgeWrapper = {
          eventMap: new Map(),
          addNativeEventListener: function addNativeEventListener(eventName, listener) {
            if (!this.eventMap.get(eventName)) {
              this.eventMap.set(eventName, []);
            }
            var arr = this.eventMap.get(eventName);
            if (!arr.find(listener)) {
              arr.push(listener);
            }
          },
          dispatchEventToNative: function dispatchEventToNative(eventName, arg) {
            globalJsb.bridge.sendToNative(eventName, arg);
          },
          removeAllListenersForEvent: function removeAllListenersForEvent(eventName) {
            return this.eventMap["delete"](eventName);
          },
          removeNativeEventListener: function removeNativeEventListener(eventName, listener) {
            var arr = this.eventMap.get(eventName);
            if (!arr) {
              return false;
            }
            for (var i = 0, l = arr.length; i < l; i++) {
              if (arr[i] === listener) {
                arr.splice(i, 1);
                return true;
              }
            }
            return true;
          },
          removeAllListeners: function removeAllListeners() {
            this.eventMap.clear();
          },
          triggerEvent: function triggerEvent(eventName, arg) {
            var arr = this.eventMap.get(eventName);
            if (!arr) {
              console.error(eventName + " does not exist");
              return;
            }
            arr.map(function (listener) {
              return listener.call(null, arg);
            });
          }
        };
        Object.defineProperty(globalJsb, 'jsbBridgeWrapper', {
          get: function get() {
            if (globalJsb.__JsbBridgeWrapper !== undefined) return globalJsb.__JsbBridgeWrapper;
            if (globalThis.ScriptNativeBridge && sys.os === sys.OS.ANDROID || sys.os === sys.OS.IOS || sys.os === sys.OS.OSX || sys.os === sys.OS.OHOS) {
              globalJsb.__JsbBridgeWrapper = JsbBridgeWrapper;
              globalJsb.bridge.onNative = function (methodName, arg1) {
                // console.log(`Trigger event: ${methodName} with argeter: ${arg1}`);
                globalJsb.__JsbBridgeWrapper.triggerEvent(methodName, arg1);
              };
            } else {
              globalJsb.__JsbBridgeWrapper = null;
            }
            return globalJsb.__JsbBridgeWrapper;
          },
          enumerable: true,
          configurable: true,
          set: function set(value) {
            globalJsb.__JsbBridgeWrapper = value;
          }
        });
        originSaveImageData = globalJsb.saveImageData;
        globalJsb.saveImageData = function (data, width, height, filePath) {
          return new Promise(function (resolve, reject) {
            originSaveImageData(data, width, height, filePath, function (isSuccess) {
              if (isSuccess) {
                resolve();
              } else {
                reject();
              }
            });
          });
        };
      }
      _export("native", _native = {
        DownloaderHints: globalJsb.DownloaderHints,
        Downloader: globalJsb.Downloader,
        zipUtils: globalJsb.zipUtils,
        fileUtils: globalJsb.fileUtils,
        DebugRenderer: globalJsb.DebugRenderer,
        copyTextToClipboard: (_globalJsb$copyTextTo = globalJsb.copyTextToClipboard) === null || _globalJsb$copyTextTo === void 0 ? void 0 : _globalJsb$copyTextTo.bind(globalJsb),
        garbageCollect: globalJsb.garbageCollect,
        reflection: globalJsb.reflection,
        bridge: globalJsb.bridge,
        jsbBridgeWrapper: globalJsb.jsbBridgeWrapper,
        AssetsManager: globalJsb.AssetsManager,
        EventAssetsManager: globalJsb.EventAssetsManager,
        Manifest: globalJsb.Manifest,
        saveImageData: globalJsb.saveImageData,
        process: globalJsb.process,
        adpf: globalJsb.adpf
      });
    }
  };
});