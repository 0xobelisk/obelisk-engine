System.register(['./index-ce98320e.js'], (function (exports) {
    'use strict';
    var sys;
    return {
        setters: [function (module) {
            sys = module.aL;
        }],
        execute: (function () {

            var _globalThis$jsb, _globalJsb$copyTextTo;
            const globalJsb = (_globalThis$jsb = globalThis.jsb) !== null && _globalThis$jsb !== void 0 ? _globalThis$jsb : {};
            {
              Object.defineProperty(globalJsb, 'reflection', {
                get() {
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
                set(value) {
                  globalJsb.__bridge = value;
                }
              });
              Object.defineProperty(globalJsb, 'bridge', {
                get() {
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
                set(value) {
                  globalJsb.__ccbridge = value;
                }
              });
              const JsbBridgeWrapper = {
                eventMap: new Map(),
                addNativeEventListener(eventName, listener) {
                  if (!this.eventMap.get(eventName)) {
                    this.eventMap.set(eventName, []);
                  }
                  const arr = this.eventMap.get(eventName);
                  if (!arr.find(listener)) {
                    arr.push(listener);
                  }
                },
                dispatchEventToNative(eventName, arg) {
                  globalJsb.bridge.sendToNative(eventName, arg);
                },
                removeAllListenersForEvent(eventName) {
                  return this.eventMap.delete(eventName);
                },
                removeNativeEventListener(eventName, listener) {
                  const arr = this.eventMap.get(eventName);
                  if (!arr) {
                    return false;
                  }
                  for (let i = 0, l = arr.length; i < l; i++) {
                    if (arr[i] === listener) {
                      arr.splice(i, 1);
                      return true;
                    }
                  }
                  return true;
                },
                removeAllListeners() {
                  this.eventMap.clear();
                },
                triggerEvent(eventName, arg) {
                  const arr = this.eventMap.get(eventName);
                  if (!arr) {
                    console.error(`${eventName} does not exist`);
                    return;
                  }
                  arr.map(listener => listener.call(null, arg));
                }
              };
              Object.defineProperty(globalJsb, 'jsbBridgeWrapper', {
                get() {
                  if (globalJsb.__JsbBridgeWrapper !== undefined) return globalJsb.__JsbBridgeWrapper;
                  if (globalThis.ScriptNativeBridge && sys.os === sys.OS.ANDROID || sys.os === sys.OS.IOS || sys.os === sys.OS.OSX || sys.os === sys.OS.OHOS) {
                    globalJsb.__JsbBridgeWrapper = JsbBridgeWrapper;
                    globalJsb.bridge.onNative = (methodName, arg1) => {
                      globalJsb.__JsbBridgeWrapper.triggerEvent(methodName, arg1);
                    };
                  } else {
                    globalJsb.__JsbBridgeWrapper = null;
                  }
                  return globalJsb.__JsbBridgeWrapper;
                },
                enumerable: true,
                configurable: true,
                set(value) {
                  globalJsb.__JsbBridgeWrapper = value;
                }
              });
              const originSaveImageData = globalJsb.saveImageData;
              globalJsb.saveImageData = (data, width, height, filePath) => {
                return new Promise((resolve, reject) => {
                  originSaveImageData(data, width, height, filePath, isSuccess => {
                    if (isSuccess) {
                      resolve();
                    } else {
                      reject();
                    }
                  });
                });
              };
            }
            const native = exports('n', {
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

        })
    };
}));
