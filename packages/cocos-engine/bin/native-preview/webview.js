System.register(['./index-ce98320e.js', './sprite-renderer-9a6a919d.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js', './node-event-18d96a1b.js', './director-dc238483.js', './deprecated-f8df8d32.js', './device-90bc7390.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './rendering-sub-mesh.jsb-25043997.js', './scene-asset.jsb-0d4c6201.js', './decorators-b63b63a2.js', './murmurhash2_gc-2108d723.js', './deprecated-fcfb90f6.js', './camera-component-b329f870.js', './model-renderer-f8d2f66d.js', './renderer-3bf7a012.js', './create-mesh.jsb-8af9d27e.js', './buffer-9511d9f4.js', './touch-af62e326.js'], (function (exports) {
    'use strict';
    var legacyCC, ccwindow, mat4, contains, error, warn, screenAdapter, ccclass, type, applyDecoratedInitializer, requireComponent, serializable, UITransform, EventHandler, Component, director, game;
    return {
        setters: [function (module) {
            legacyCC = module.l;
            ccwindow = module.c6;
            mat4 = module.t;
            contains = module.cE;
            error = module.e;
            warn = module.w;
            screenAdapter = module.bW;
            ccclass = module.by;
            type = module.bw;
            applyDecoratedInitializer = module.bx;
            requireComponent = module.cC;
            serializable = module.bf;
        }, function (module) {
            UITransform = module.c;
        }, function () {}, function () {}, function (module) {
            EventHandler = module.E;
            Component = module.C;
        }, function (module) {
            director = module.n;
        }, function (module) {
            game = module.g;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            let EventType;
            (function (EventType) {
              EventType["NONE"] = "none";
              EventType["LOADING"] = "loading";
              EventType["LOADED"] = "loaded";
              EventType["ERROR"] = "error";
            })(EventType || (EventType = {}));

            class WebViewImpl {
              constructor(component) {
                this._componentEventList = new Map();
                this._state = EventType.NONE;
                this._wrapper = void 0;
                this._webview = null;
                this._loaded = false;
                this._forceUpdate = false;
                this._component = null;
                this._uiTrans = null;
                this._node = null;
                this._w = 0;
                this._h = 0;
                this._m00 = 0;
                this._m01 = 0;
                this._m04 = 0;
                this._m05 = 0;
                this._m12 = 0;
                this._m13 = 0;
                this._component = component;
                this._node = component.node;
                this._uiTrans = component.node.getComponent(UITransform);
                this.reset();
                this.createWebView();
              }
              reset() {
                this._wrapper = null;
                this._webview = null;
                this._loaded = false;
                this._w = 0;
                this._h = 0;
                this._m00 = 0;
                this._m01 = 0;
                this._m04 = 0;
                this._m05 = 0;
                this._m12 = 0;
                this._m13 = 0;
                this._state = EventType.NONE;
                this._forceUpdate = false;
              }
              get loaded() {
                return this._loaded;
              }
              get componentEventList() {
                return this._componentEventList;
              }
              get webview() {
                return this._webview;
              }
              get state() {
                return this._state;
              }
              get UICamera() {
                return director.root.batcher2D.getFirstRenderCamera(this._node);
              }
              dispatchEvent(key, ...args) {
                const callback = this._componentEventList.get(key);
                if (callback) {
                  this._state = key;
                  callback.call(this, args);
                }
              }
              destroy() {
                this.removeWebView();
                this._wrapper = null;
                this._webview = null;
                this._loaded = false;
                this._component = null;
                this._uiTrans = null;
                this._forceUpdate = false;
                this._componentEventList.clear();
              }
            }
            legacyCC.internal.WebViewImpl = WebViewImpl;

            const ccdocument = ccwindow.document;
            const _mat4_temp = mat4();
            class WebViewImplWeb extends WebViewImpl {
              constructor(component) {
                super(component);
              }
              _bindDomEvent() {
                if (!this.webview) {
                  return;
                }
                const onLoaded = e => {
                  this._forceUpdate = true;
                  this.dispatchEvent(EventType.LOADED);
                  const iframe = e.target;
                  const body = iframe.contentDocument && iframe.contentDocument.body;
                  if (body && body.innerHTML.includes('404')) {
                    this.dispatchEvent(EventType.ERROR, body.innerHTML);
                  }
                };
                this.webview.addEventListener('load', onLoaded);
              }
              loadURL(url) {
                if (this.webview) {
                  this.webview.src = url;
                  this.dispatchEvent(EventType.LOADING);
                }
              }
              createWebView() {
                const wrapper = ccdocument.createElement('div');
                this._wrapper = wrapper;
                wrapper.id = 'webview-wrapper';
                wrapper.style['-webkit-overflow'] = 'auto';
                wrapper.style['-webkit-overflow-scrolling'] = 'touch';
                wrapper.style.position = 'absolute';
                wrapper.style.bottom = '0px';
                wrapper.style.left = '0px';
                wrapper.style.transformOrigin = '0px 100% 0px';
                wrapper.style['-webkit-transform-origin'] = '0px 100% 0px';
                game.container.appendChild(wrapper);
                const webview = ccdocument.createElement('iframe');
                this._webview = webview;
                webview.id = 'webview';
                webview.style.border = 'none';
                webview.style.width = '100%';
                webview.style.height = '100%';
                wrapper.appendChild(webview);
                this._bindDomEvent();
              }
              removeWebView() {
                const wrapper = this._wrapper;
                if (contains(game.container, wrapper)) {
                  game.container.removeChild(wrapper);
                }
                this.reset();
              }
              enable() {
                if (this._wrapper) {
                  this._wrapper.style.visibility = 'visible';
                }
              }
              disable() {
                if (this._wrapper) {
                  this._wrapper.style.visibility = 'hidden';
                }
              }
              evaluateJS(str) {
                if (this.webview) {
                  const win = this.webview.contentWindow;
                  if (win) {
                    try {
                      win.eval(str);
                    } catch (e) {
                      this.dispatchEvent(EventType.ERROR, e);
                      error(e);
                    }
                  }
                }
              }
              setOnJSCallback(callback) {
                warn('The platform does not support');
              }
              setJavascriptInterfaceScheme(scheme) {
                warn('The platform does not support');
              }
              syncMatrix() {
                if (!this._wrapper || !this._uiTrans || !this._component || this._wrapper.style.visibility === 'hidden') return;
                const camera = this.UICamera;
                if (!camera) {
                  return;
                }
                this._component.node.getWorldMatrix(_mat4_temp);
                camera.update(true);
                camera.worldMatrixToScreen(_mat4_temp, _mat4_temp, game.canvas.width, game.canvas.height);
                const {
                  width,
                  height
                } = this._uiTrans.contentSize;
                if (!this._forceUpdate && this._m00 === _mat4_temp.m00 && this._m01 === _mat4_temp.m01 && this._m04 === _mat4_temp.m04 && this._m05 === _mat4_temp.m05 && this._m12 === _mat4_temp.m12 && this._m13 === _mat4_temp.m13 && this._w === width && this._h === height) {
                  return;
                }
                this._m00 = _mat4_temp.m00;
                this._m01 = _mat4_temp.m01;
                this._m04 = _mat4_temp.m04;
                this._m05 = _mat4_temp.m05;
                this._m12 = _mat4_temp.m12;
                this._m13 = _mat4_temp.m13;
                this._w = width;
                this._h = height;
                const dpr = screenAdapter.devicePixelRatio;
                const scaleX = 1 / dpr;
                const scaleY = 1 / dpr;
                const container = game.container;
                const sx = _mat4_temp.m00 * scaleX;
                const b = _mat4_temp.m01;
                const c = _mat4_temp.m04;
                const sy = _mat4_temp.m05 * scaleY;
                this._wrapper.style.width = `${width}px`;
                this._wrapper.style.height = `${height}px`;
                const w = this._w * scaleX;
                const h = this._h * scaleY;
                const appx = w * _mat4_temp.m00 * this._uiTrans.anchorX;
                const appy = h * _mat4_temp.m05 * this._uiTrans.anchorY;
                const offsetX = container && container.style.paddingLeft ? parseInt(container.style.paddingLeft) : 0;
                const offsetY = container && container.style.paddingBottom ? parseInt(container.style.paddingBottom) : 0;
                const tx = _mat4_temp.m12 * scaleX - appx + offsetX;
                const ty = _mat4_temp.m13 * scaleY - appy + offsetY;
                const matrix = `matrix(${sx},${-b},${-c},${sy},${tx},${-ty})`;
                this._wrapper.style.transform = matrix;
                this._wrapper.style['-webkit-transform'] = matrix;
                this._forceUpdate = false;
              }
            }

            class WebViewImplManager {
              static getImpl(component) {
                return new WebViewImplWeb(component);
              }
            }
            legacyCC.internal.WebViewImplManager = WebViewImplManager;

            var _dec, _dec2, _dec3, _class, _class2, _initializer, _initializer2, _class3;
            let WebView = exports('WebView', (_dec = ccclass('cc.WebView'), _dec2 = requireComponent(UITransform), _dec3 = type([EventHandler]), _dec(_class = _dec2(_class = (_class2 = (_class3 = class WebView extends Component {
              constructor(...args) {
                super(...args);
                this._url = _initializer && _initializer();
                this._impl = null;
                this.webviewEvents = _initializer2 && _initializer2();
              }
              get url() {
                return this._url;
              }
              set url(val) {
                this._url = val;
                if (this._impl) {
                  this._impl.loadURL(val);
                }
              }
              get nativeWebView() {
                return this._impl && this._impl.webview || null;
              }
              get state() {
                if (!this._impl) {
                  return EventType.NONE;
                }
                return this._impl.state;
              }
              setJavascriptInterfaceScheme(scheme) {
                if (this._impl) {
                  this._impl.setJavascriptInterfaceScheme(scheme);
                }
              }
              setOnJSCallback(callback) {
                if (this._impl) {
                  this._impl.setOnJSCallback(callback);
                }
              }
              evaluateJS(str) {
                if (this._impl) {
                  this._impl.evaluateJS(str);
                }
              }
              __preload() {
                this._impl = WebViewImplManager.getImpl(this);
                this._impl.componentEventList.set(EventType.LOADING, this.onLoading.bind(this));
                this._impl.componentEventList.set(EventType.LOADED, this.onLoaded.bind(this));
                this._impl.componentEventList.set(EventType.ERROR, this.onError.bind(this));
                this._impl.loadURL(this._url);
              }
              onLoading() {
                EventHandler.emitEvents(this.webviewEvents, this, EventType.LOADING);
                this.node.emit(EventType.LOADING, this);
              }
              onLoaded() {
                EventHandler.emitEvents(this.webviewEvents, this, EventType.LOADED);
                this.node.emit(EventType.LOADED, this);
              }
              onError(...args) {
                EventHandler.emitEvents(this.webviewEvents, this, EventType.ERROR, args);
                this.node.emit(EventType.ERROR, this, args);
              }
              onEnable() {
                if (this._impl) {
                  this._impl.enable();
                }
              }
              onDisable() {
                if (this._impl) {
                  this._impl.disable();
                }
              }
              onDestroy() {
                if (this._impl) {
                  this._impl.destroy();
                  this._impl = null;
                }
              }
              update(dt) {
                if (this._impl) {
                  this._impl.syncMatrix();
                }
              }
            }, _class3.EventType = EventType, _class3), (_initializer = applyDecoratedInitializer(_class2.prototype, "_url", [serializable], function () {
              return 'https://cocos.com';
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "webviewEvents", [serializable, _dec3], function () {
              return [];
            })), _class2)) || _class) || _class));
            legacyCC.internal.WebView = WebView;

        })
    };
}));
