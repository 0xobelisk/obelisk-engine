System.register(['./index-ce98320e.js', './decorators-b63b63a2.js'], (function (exports) {
  'use strict';
  var systemInfo, OS, createMap, warnID, BASE64_VALUES, error, legacyCC, CallbacksInvoker, ExtraEventMethods, ccclass, applyDecoratedInitializer, serializable, CCObject, type, value, IDGenerator, getClassName, assertID, patch_cc_Asset;
  return {
    setters: [function (module) {
      systemInfo = module.bY;
      OS = module.bZ;
      createMap = module.c2;
      warnID = module.d;
      BASE64_VALUES = module.cc;
      error = module.e;
      legacyCC = module.l;
      CallbacksInvoker = module.bo;
      ExtraEventMethods = module.cd;
      ccclass = module.by;
      applyDecoratedInitializer = module.bx;
      serializable = module.bf;
      CCObject = module.as;
      type = module.bw;
      value = module.bH;
      IDGenerator = module.ce;
      getClassName = module.bL;
      assertID = module.g;
    }, function (module) {
      patch_cc_Asset = module.K;
    }],
    execute: (function () {

      exports({
        H: _applyDecoratedDescriptor,
        I: _initializerDefineProperty,
        _: _normalize,
        a: changeBasename,
        b: basename,
        c: changeExtname,
        d: dirname,
        e: extname,
        f: applyMixins,
        g: getSeperator,
        j: join,
        m: mainFileName,
        n: getUuidFromURL,
        q: decodeUuid,
        s: stripSep,
        t: transform,
        v: normalize,
        w: isScene
      });

      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }
      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }
        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);
        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }
        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }
        return desc;
      }

      const EXTNAME_RE = /(\.[^\.\/\?\\]*)(\?.*)?$/;
      const DIRNAME_RE = /((.*)(\/|\\|\\\\))?(.*?\..*$)?/;
      const NORMALIZE_RE = /[^\.\/]+\/\.\.\//;
      function join(...segments) {
        let result = '';
        for (const segment of segments) {
          result = (result + (result === '' ? '' : '/') + segment).replace(/(\/|\\\\)$/, '');
        }
        return result;
      }
      function extname(path) {
        const temp = EXTNAME_RE.exec(path);
        return temp ? temp[1] : '';
      }
      function mainFileName(fileName) {
        if (fileName) {
          const idx = fileName.lastIndexOf('.');
          if (idx !== -1) {
            return fileName.substring(0, idx);
          }
        }
        return fileName;
      }
      function basename(path, extName) {
        const index = path.indexOf('?');
        if (index > 0) {
          path = path.substring(0, index);
        }
        const reg = /(\/|\\)([^\/\\]+)$/g;
        const result = reg.exec(path.replace(/(\/|\\)$/, ''));
        if (!result) {
          return path;
        }
        const baseName = result[2];
        if (extName && path.substring(path.length - extName.length).toLowerCase() === extName.toLowerCase()) {
          return baseName.substring(0, baseName.length - extName.length);
        }
        return baseName;
      }
      function dirname(path) {
        const temp = DIRNAME_RE.exec(path);
        return temp ? temp[2] : '';
      }
      function changeExtname(path, extName) {
        extName = extName || '';
        let index = path.indexOf('?');
        let tempStr = '';
        if (index > 0) {
          tempStr = path.substring(index);
          path = path.substring(0, index);
        }
        index = path.lastIndexOf('.');
        if (index < 0) {
          return path + extName + tempStr;
        }
        return path.substring(0, index) + extName + tempStr;
      }
      function changeBasename(path, newBaseName, keepExt) {
        if (newBaseName.indexOf('.') === 0) {
          return changeExtname(path, newBaseName);
        }
        let index = path.indexOf('?');
        let tempStr = '';
        const ext = keepExt ? extname(path) : '';
        if (index > 0) {
          tempStr = path.substring(index);
          path = path.substring(0, index);
        }
        index = path.lastIndexOf('/');
        index = index <= 0 ? 0 : index + 1;
        return path.substring(0, index) + newBaseName + ext + tempStr;
      }
      function _normalize(url) {
        let oldUrl = url = String(url);
        do {
          oldUrl = url;
          url = url.replace(NORMALIZE_RE, '');
        } while (oldUrl.length !== url.length);
        return url;
      }
      function stripSep(path) {
        return path.replace(/[\/\\]$/, '');
      }
      function getSeperator() {
        return systemInfo.os === OS.WINDOWS ? '\\' : '/';
      }

      var path = /*#__PURE__*/Object.freeze({
        __proto__: null,
        join: join,
        extname: extname,
        mainFileName: mainFileName,
        basename: basename,
        dirname: dirname,
        changeExtname: changeExtname,
        changeBasename: changeBasename,
        _normalize: _normalize,
        stripSep: stripSep,
        getSeperator: getSeperator
      });
      exports('p', path);

      function applyMixins(derivedCtor, baseCtors) {
        baseCtors.forEach(baseCtor => {
          Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (name !== 'constructor') {
              Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
            }
          });
        });
      }

      class Cache {
        get map() {
          return this._map;
        }
        constructor(map) {
          this._map = null;
          this._count = 0;
          if (map) {
            this._map = map;
            this._count = Object.keys(map).length;
          } else {
            this._map = createMap(true);
            this._count = 0;
          }
        }
        add(key, val) {
          if (!(key in this._map)) {
            this._count++;
          }
          return this._map[key] = val;
        }
        get(key) {
          return this._map[key];
        }
        has(key) {
          return key in this._map;
        }
        remove(key) {
          const out = this._map[key];
          if (key in this._map) {
            delete this._map[key];
            this._count--;
          }
          return out;
        }
        clear() {
          if (this._count !== 0) {
            this._map = createMap(true);
            this._count = 0;
          }
        }
        forEach(func) {
          for (const key in this._map) {
            func(this._map[key], key);
          }
        }
        find(predicate) {
          for (const key in this._map) {
            if (predicate(this._map[key], key)) {
              return this._map[key];
            }
          }
          return null;
        }
        get count() {
          return this._count;
        }
        destroy() {
          this._map = null;
        }
      } exports('l', Cache);

      class Pipeline {
        constructor(name, funcs) {
          this.id = Pipeline._pipelineId++;
          this.name = '';
          this.pipes = [];
          this.name = name;
          for (let i = 0, l = funcs.length; i < l; i++) {
            this.pipes.push(funcs[i]);
          }
        }
        insert(func, index) {
          if (index > this.pipes.length) {
            warnID(4921);
            return this;
          }
          this.pipes.splice(index, 0, func);
          return this;
        }
        append(func) {
          this.pipes.push(func);
          return this;
        }
        remove(index) {
          this.pipes.splice(index, 1);
          return this;
        }
        sync(task) {
          const pipes = this.pipes;
          if (pipes.length === 0) {
            return null;
          }
          task.isFinished = false;
          for (let i = 0, l = pipes.length; i < l;) {
            const pipe = pipes[i];
            const result = pipe(task);
            if (result) {
              task.isFinished = true;
              return result;
            }
            i++;
            if (i !== l) {
              task.input = task.output;
              task.output = null;
            }
          }
          task.isFinished = true;
          return task.output;
        }
        async(task) {
          const pipes = this.pipes;
          if (pipes.length === 0) {
            return;
          }
          task.isFinished = false;
          this._flow(0, task);
        }
        _flow(index, task) {
          const pipe = this.pipes[index];
          pipe(task, result => {
            if (result) {
              task.isFinished = true;
              task.dispatch('complete', result);
            } else {
              index++;
              if (index < this.pipes.length) {
                task.input = task.output;
                task.output = null;
                this._flow(index, task);
              } else {
                task.isFinished = true;
                task.dispatch('complete', result, task.output);
              }
            }
          });
        }
      } exports('P', Pipeline);
      Pipeline._pipelineId = 0;

      const assets = exports('k', new Cache());
      const files = exports('u', new Cache());
      const parsed = exports('r', new Cache());
      const bundles = exports('o', new Cache());
      const pipeline = exports('h', new Pipeline('normal load', []));
      const fetchPipeline = exports('i', new Pipeline('fetch', []));
      const transformPipeline = exports('y', new Pipeline('transform url', []));
      const references = exports('G', null);
      const assetsOverrideMap = exports('D', new Map());
      let RequestType; exports('R', RequestType);
      (function (RequestType) {
        RequestType["UUID"] = "uuid";
        RequestType["PATH"] = "path";
        RequestType["DIR"] = "dir";
        RequestType["URL"] = "url";
        RequestType["SCENE"] = "scene";
      })(RequestType || (exports('R', RequestType = {})));
      const presets = exports('z', {
        default: {
          priority: 0
        },
        preload: {
          maxConcurrency: 6,
          maxRequestsPerFrame: 2,
          priority: -1
        },
        scene: {
          maxConcurrency: 20,
          maxRequestsPerFrame: 20,
          priority: 1
        },
        bundle: {
          maxConcurrency: 20,
          maxRequestsPerFrame: 20,
          priority: 2
        },
        remote: {
          maxRetryCount: 4
        }
      });
      let BuiltinBundleName; exports('B', BuiltinBundleName);
      (function (BuiltinBundleName) {
        BuiltinBundleName["INTERNAL"] = "internal";
        BuiltinBundleName["RESOURCES"] = "resources";
        BuiltinBundleName["MAIN"] = "main";
        BuiltinBundleName["START_SCENE"] = "start-scene";
      })(BuiltinBundleName || (exports('B', BuiltinBundleName = {})));

      class Task {
        static create(options) {
          let out;
          if (Task._deadPool.length !== 0) {
            out = Task._deadPool.pop();
            out.set(options);
          } else {
            out = new Task(options);
          }
          return out;
        }
        get isFinish() {
          return this.isFinished;
        }
        set isFinish(val) {
          this.isFinished = val;
        }
        constructor(options) {
          this.id = Task._taskId++;
          this.onComplete = null;
          this.onProgress = null;
          this.onError = null;
          this.source = null;
          this.output = null;
          this.input = null;
          this.progress = null;
          this.options = null;
          this.isFinished = true;
          this.set(options);
        }
        set(options = Object.create(null)) {
          this.onComplete = options.onComplete || null;
          this.onProgress = options.onProgress || null;
          this.onError = options.onError || null;
          this.source = this.input = options.input;
          this.output = null;
          this.progress = options.progress;
          this.options = options.options || Object.create(null);
        }
        dispatch(event, param1, param2, param3, param4) {
          switch (event) {
            case 'complete':
              if (this.onComplete) {
                this.onComplete(param1, param2);
              }
              break;
            case 'progress':
              if (this.onProgress) {
                this.onProgress(param1, param2, param3, param4);
              }
              break;
            case 'error':
              if (this.onError) {
                this.onError(param1, param2, param3, param4);
              }
              break;
            default:
              {
                const str = `on${event[0].toUpperCase()}${event.substr(1)}`;
                if (typeof this[str] === 'function') {
                  this[str](param1, param2, param3, param4);
                }
                break;
              }
          }
        }
        recycle() {
          if (Task._deadPool.length === Task.MAX_DEAD_NUM) {
            return;
          }
          this.onComplete = null;
          this.onProgress = null;
          this.onError = null;
          this.source = this.output = this.input = null;
          this.progress = null;
          this.options = null;
          Task._deadPool.push(this);
        }
      } exports('x', Task);
      Task.MAX_DEAD_NUM = 500;
      Task._taskId = 0;
      Task._deadPool = [];

      const separator = '@';
      const HexChars = '0123456789abcdef'.split('');
      const _t = ['', '', '', ''];
      const UuidTemplate = _t.concat(_t, '-', _t, '-', _t, '-', _t, '-', _t, _t, _t);
      const Indices = UuidTemplate.map((x, i) => x === '-' ? NaN : i).filter(Number.isFinite);
      function decodeUuid(base64) {
        const strs = base64.split(separator);
        const uuid = strs[0];
        if (uuid.length !== 22) {
          return base64;
        }
        UuidTemplate[0] = base64[0];
        UuidTemplate[1] = base64[1];
        for (let i = 2, j = 2; i < 22; i += 2) {
          const lhs = BASE64_VALUES[base64.charCodeAt(i)];
          const rhs = BASE64_VALUES[base64.charCodeAt(i + 1)];
          UuidTemplate[Indices[j++]] = HexChars[lhs >> 2];
          UuidTemplate[Indices[j++]] = HexChars[(lhs & 3) << 2 | rhs >> 4];
          UuidTemplate[Indices[j++]] = HexChars[rhs & 0xF];
        }
        return base64.replace(uuid, UuidTemplate.join(''));
      }

      const _uuidRegex = /.*[/\\][0-9a-fA-F]{2}[/\\]([0-9a-fA-F-@]{8,}).*/;
      function getUuidFromURL(url) {
        const matches = _uuidRegex.exec(url);
        if (matches) {
          return matches[1];
        }
        return '';
      }
      function getUrlWithUuid(uuid, options) {
        options = options || Object.create(null);
        options.__isNative__ = options.isNative;
        if (options.nativeExt) {
          options.ext = options.nativeExt;
        }
        const bundle = bundles.find(b => !!b.getAssetInfo(uuid));
        if (bundle) {
          options.bundle = bundle.name;
        }
        return transform(uuid, options);
      }
      function isScene(asset) {
        return !!asset && (asset instanceof legacyCC.SceneAsset || asset instanceof legacyCC.Scene);
      }
      function normalize(url) {
        if (url) {
          if (url.charCodeAt(0) === 46 && url.charCodeAt(1) === 47) {
            url = url.slice(2);
          } else if (url.charCodeAt(0) === 47) {
            url = url.slice(1);
          }
        }
        return url;
      }
      function transform(input, options) {
        const subTask = Task.create({
          input,
          options
        });
        const urls = [];
        try {
          const result = transformPipeline.sync(subTask);
          for (const requestItem of result) {
            const url = requestItem.url;
            requestItem.recycle();
            urls.push(url);
          }
        } catch (e) {
          for (const item of subTask.output) {
            item.recycle();
          }
          error(e.message, e.stack);
        }
        subTask.recycle();
        return urls.length > 1 ? urls : urls[0];
      }

      var helper = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getUuidFromURL: getUuidFromURL,
        getUrlWithUuid: getUrlWithUuid,
        isScene: isScene,
        normalize: normalize,
        transform: transform,
        decodeUuid: decodeUuid
      });
      exports('F', helper);

      applyMixins(jsb.Asset, [CallbacksInvoker, ExtraEventMethods]);
      const assetProto = jsb.Asset.prototype;
      assetProto._ctor = function () {
        this.loaded = true;
        this._ref = 0;
        this.__nativeRefs = {};
        this.__jsb_ref_id = undefined;
        this._iN$t = null;
        this.__editorExtras__ = {
          editorOnly: true
        };
        this._callbackTable = createMap(true);
        this._file = null;
      };
      Object.defineProperty(assetProto, '_nativeAsset', {
        get() {
          return this._file;
        },
        set(obj) {
          this._file = obj;
        }
      });
      Object.defineProperty(assetProto, 'nativeUrl', {
        get() {
          if (!this._nativeUrl) {
            if (!this._native) return '';
            const name = this._native;
            if (name.charCodeAt(0) === 47) {
              return name.slice(1);
            }
            if (name.charCodeAt(0) === 46) {
              this._nativeUrl = getUrlWithUuid(this._uuid, {
                nativeExt: name,
                isNative: true
              });
            } else {
              this._nativeUrl = getUrlWithUuid(this._uuid, {
                __nativeName__: name,
                nativeExt: extname(name),
                isNative: true
              });
            }
          }
          return this._nativeUrl;
        }
      });
      Object.defineProperty(assetProto, 'refCount', {
        configurable: true,
        enumerable: true,
        get() {
          return this._ref;
        }
      });
      assetProto.addRef = function () {
        this._ref++;
        this.addAssetRef();
        return this;
      };
      assetProto.decRef = function (autoRelease = true) {
        this.decAssetRef();
        if (this._ref > 0) {
          this._ref--;
        }
        if (autoRelease) {
          legacyCC.assetManager._releaseManager.tryRelease(this);
        }
        return this;
      };
      assetProto.toString = function () {
        return this.nativeUrl;
      };
      assetProto.createNode = null;
      const Asset = exports('A', jsb.Asset);
      legacyCC.Asset = jsb.Asset;
      patch_cc_Asset({
        Asset
      });

      var _dec$2, _class$2, _dec2$1, _class2$2, _dec3, _class3$1;
      let Script = exports('S', (_dec$2 = ccclass('cc.Script'), _dec$2(_class$2 = class Script extends Asset {}) || _class$2));
      legacyCC._Script = Script;
      let JavaScript = exports('J', (_dec2$1 = ccclass('cc.JavaScript'), _dec2$1(_class2$2 = class JavaScript extends Script {}) || _class2$2));
      legacyCC._JavaScript = JavaScript;
      let TypeScript = exports('T', (_dec3 = ccclass('cc.TypeScript'), _dec3(_class3$1 = class TypeScript extends Script {}) || _class3$1));
      legacyCC._TypeScript = TypeScript;

      var _dec$1, _class$1, _class2$1, _initializer$1, _initializer2$1, _initializer3$1, _initializer4, _initializer5;
      let EventHandler = exports('E', (_dec$1 = ccclass('cc.ClickEvent'), _dec$1(_class$1 = (_class2$1 = class EventHandler {
        constructor() {
          this.target = _initializer$1 && _initializer$1();
          this.component = _initializer2$1 && _initializer2$1();
          this._componentId = _initializer3$1 && _initializer3$1();
          this.handler = _initializer4 && _initializer4();
          this.customEventData = _initializer5 && _initializer5();
        }
        get _componentName() {
          this._genCompIdIfNeeded();
          return this._compId2Name(this._componentId);
        }
        set _componentName(value) {
          this._componentId = this._compName2Id(value);
        }
        static emitEvents(events, ...args) {
          for (let i = 0, l = events.length; i < l; i++) {
            const event = events[i];
            if (!(event instanceof EventHandler)) {
              continue;
            }
            event.emit(args);
          }
        }
        emit(params) {
          const target = this.target;
          if (!legacyCC.isValid(target)) {
            return;
          }
          this._genCompIdIfNeeded();
          const compType = legacyCC.js.getClassById(this._componentId);
          const comp = target.getComponent(compType);
          if (!legacyCC.isValid(comp)) {
            return;
          }
          const handler = comp[this.handler];
          if (typeof handler !== 'function') {
            return;
          }
          if (this.customEventData != null && this.customEventData !== '') {
            params = params.slice();
            params.push(this.customEventData);
          }
          handler.apply(comp, params);
        }
        _compName2Id(compName) {
          const comp = legacyCC.js.getClassByName(compName);
          return legacyCC.js.getClassId(comp);
        }
        _compId2Name(compId) {
          const comp = legacyCC.js.getClassById(compId);
          return legacyCC.js.getClassName(comp);
        }
        _genCompIdIfNeeded() {
          if (!this._componentId) {
            this._componentName = this.component;
            this.component = '';
          }
        }
      }, (_initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "target", [serializable], function () {
        return null;
      }), _initializer2$1 = applyDecoratedInitializer(_class2$1.prototype, "component", [serializable], function () {
        return '';
      }), _initializer3$1 = applyDecoratedInitializer(_class2$1.prototype, "_componentId", [serializable], function () {
        return '';
      }), _initializer4 = applyDecoratedInitializer(_class2$1.prototype, "handler", [serializable], function () {
        return '';
      }), _initializer5 = applyDecoratedInitializer(_class2$1.prototype, "customEventData", [serializable], function () {
        return '';
      })), _class2$1)) || _class$1));

      var _dec, _dec2, _class, _class2, _initializer, _initializer2, _initializer3, _class3;
      const idGenerator = new IDGenerator('Comp');
      const IsOnLoadCalled = CCObject.Flags.IsOnLoadCalled;
      const NullNode = null;
      let Component = exports('C', (_dec = ccclass('cc.Component'), _dec2 = type(Script), _dec(_class = (_class2 = (_class3 = class Component extends CCObject {
        constructor(...args) {
          super(...args);
          this.node = _initializer && _initializer();
          this._enabled = _initializer2 && _initializer2();
          this.__prefab = _initializer3 && _initializer3();
          this._sceneGetter = null;
          this._id = idGenerator.getNewId();
        }
        get name() {
          if (this._name) {
            return this._name;
          }
          let className = getClassName(this);
          const trimLeft = className.lastIndexOf('.');
          if (trimLeft >= 0) {
            className = className.slice(trimLeft + 1);
          }
          if (this.node) {
            return `${this.node.name}<${className}>`;
          } else {
            return className;
          }
        }
        set name(value) {
          this._name = value;
        }
        get uuid() {
          return this._id;
        }
        get __scriptAsset() {
          return null;
        }
        get enabled() {
          return this._enabled;
        }
        set enabled(value) {
          if (this._enabled !== value) {
            this._enabled = value;
            if (this.node.activeInHierarchy) {
              const compScheduler = legacyCC.director._compScheduler;
              if (value) {
                compScheduler.enableComp(this);
              } else {
                compScheduler.disableComp(this);
              }
            }
          }
        }
        get enabledInHierarchy() {
          return this._enabled && this.node && this.node.activeInHierarchy;
        }
        get _isOnLoadCalled() {
          return this._objFlags & IsOnLoadCalled;
        }
        _getRenderScene() {
          if (this._sceneGetter) {
            return this._sceneGetter();
          }
          return this.node.scene.renderScene;
        }
        addComponent(typeOrClassName) {
          return this.node.addComponent(typeOrClassName);
        }
        getComponent(typeOrClassName) {
          return this.node.getComponent(typeOrClassName);
        }
        getComponents(typeOrClassName) {
          return this.node.getComponents(typeOrClassName);
        }
        getComponentInChildren(typeOrClassName) {
          return this.node.getComponentInChildren(typeOrClassName);
        }
        getComponentsInChildren(typeOrClassName) {
          return this.node.getComponentsInChildren(typeOrClassName);
        }
        destroy() {
          if (super.destroy()) {
            if (this._enabled && this.node.activeInHierarchy) {
              legacyCC.director._compScheduler.disableComp(this);
            }
            return true;
          }
          return false;
        }
        _onPreDestroy() {
          this.unscheduleAllCallbacks();
          legacyCC.director._nodeActivator.destroyComp(this);
          this.node._removeComponent(this);
        }
        _instantiate(cloned) {
          if (!cloned) {
            cloned = legacyCC.instantiate._clone(this, this);
          }
          if (cloned) {
            cloned.node = NullNode;
          }
          return cloned;
        }
        schedule(callback, interval = 0, repeat = legacyCC.macro.REPEAT_FOREVER, delay = 0) {
          assertID(Boolean(callback), 1619);
          interval = interval || 0;
          assertID(interval >= 0, 1620);
          repeat = Number.isNaN(repeat) ? legacyCC.macro.REPEAT_FOREVER : repeat;
          delay = delay || 0;
          const scheduler = legacyCC.director.getScheduler();
          const paused = scheduler.isTargetPaused(this);
          scheduler.schedule(callback, this, interval, repeat, delay, paused);
        }
        scheduleOnce(callback, delay = 0) {
          this.schedule(callback, 0, 0, delay);
        }
        unschedule(callback_fn) {
          if (!callback_fn) {
            return;
          }
          legacyCC.director.getScheduler().unschedule(callback_fn, this);
        }
        unscheduleAllCallbacks() {
          legacyCC.director.getScheduler().unscheduleAllForTarget(this);
        }
        get internalUpdate() {
          return this.update;
        }
        get internalLateUpdate() {
          return this.lateUpdate;
        }
        get internalPreload() {
          return this.__preload;
        }
        get internalOnLoad() {
          return this.onLoad;
        }
        get internalStart() {
          return this.start;
        }
        get internalOnEnable() {
          return this.onEnable;
        }
        get internalOnDisable() {
          return this.onDisable;
        }
        get internalOnDestroy() {
          return this.onDestroy;
        }
      }, _class3.EventHandler = EventHandler, _class3._executionOrder = 0, _class3._requireComponent = null, _class3.system = null, _class3), (_applyDecoratedDescriptor(_class2.prototype, "__scriptAsset", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "__scriptAsset"), _class2.prototype), _initializer = applyDecoratedInitializer(_class2.prototype, "node", [serializable], function () {
        return NullNode;
      }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "_enabled", [serializable], function () {
        return true;
      }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "__prefab", [serializable], function () {
        return null;
      })), _class2)) || _class));
      value(Component, '_registerEditorProps', (cls, props) => {
        let reqComp = props.requireComponent;
        if (reqComp) {
          if (Array.isArray(reqComp)) {
            reqComp = reqComp.filter(Boolean);
          }
          cls._requireComponent = reqComp;
        }
        const order = props.executionOrder;
        if (order && typeof order === 'number') {
          cls._executionOrder = order;
        }
      });
      legacyCC.Component = Component;

      let NodeEventType; exports('N', NodeEventType);
      (function (NodeEventType) {
        NodeEventType["TOUCH_START"] = "touch-start";
        NodeEventType["TOUCH_MOVE"] = "touch-move";
        NodeEventType["TOUCH_END"] = "touch-end";
        NodeEventType["TOUCH_CANCEL"] = "touch-cancel";
        NodeEventType["MOUSE_DOWN"] = "mouse-down";
        NodeEventType["MOUSE_MOVE"] = "mouse-move";
        NodeEventType["MOUSE_UP"] = "mouse-up";
        NodeEventType["MOUSE_WHEEL"] = "mouse-wheel";
        NodeEventType["MOUSE_ENTER"] = "mouse-enter";
        NodeEventType["MOUSE_LEAVE"] = "mouse-leave";
        NodeEventType["KEY_DOWN"] = "keydown";
        NodeEventType["KEY_UP"] = "keyup";
        NodeEventType["DEVICEMOTION"] = "devicemotion";
        NodeEventType["TRANSFORM_CHANGED"] = "transform-changed";
        NodeEventType["MOBILITY_CHANGED"] = "mobility-changed";
        NodeEventType["SCENE_CHANGED_FOR_PERSISTS"] = "scene-changed-for-persists";
        NodeEventType["SIZE_CHANGED"] = "size-changed";
        NodeEventType["ANCHOR_CHANGED"] = "anchor-changed";
        NodeEventType["COLOR_CHANGED"] = "color-changed";
        NodeEventType["CHILD_ADDED"] = "child-added";
        NodeEventType["CHILD_REMOVED"] = "child-removed";
        NodeEventType["PARENT_CHANGED"] = "parent-changed";
        NodeEventType["NODE_DESTROYED"] = "node-destroyed";
        NodeEventType["LAYER_CHANGED"] = "layer-changed";
        NodeEventType["SIBLING_ORDER_CHANGED"] = "sibling-order-changed";
        NodeEventType["CHILDREN_ORDER_CHANGED"] = "sibling-order-changed";
        NodeEventType["ACTIVE_IN_HIERARCHY_CHANGED"] = "active-in-hierarchy-changed";
        NodeEventType["COMPONENT_ADDED"] = "component-added";
        NodeEventType["COMPONENT_REMOVED"] = "component-removed";
        NodeEventType["LIGHT_PROBE_CHANGED"] = "light-probe-changed";
        NodeEventType["LIGHT_PROBE_BAKING_CHANGED"] = "light-probe-baking-changed";
      })(NodeEventType || (exports('N', NodeEventType = {})));

    })
  };
}));
