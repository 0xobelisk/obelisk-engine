System.register("q-bundled:///fs/cocos/asset/asset-manager/utilities.js", ["../../../../virtual/internal%253Aconstants.js", "../assets/asset.js", "../../core/index.js", "./depend-maps.js", "./depend-util.js", "./helper.js", "./shared.js"], function (_export, _context) {
  "use strict";

  var EDITOR, Asset, cclegacy, error, js, misc, dependMap, nativeDependMap, dependUtil, isScene, assets, references, defaultProgressCallback;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /*
                                                                                                                                                                                                                                                                                                                                                       Copyright (c) 2019-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                      
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
  function setDefaultProgressCallback(onProgress) {
    defaultProgressCallback = onProgress;
  }
  function clear(task, clearRef) {
    for (var i = 0, l = task.input.length; i < l; i++) {
      var _item = task.input[i];
      if (clearRef) {
        if (!_item.isNative && _item.content instanceof Asset) {
          _item.content.decRef(false);
        }
      }
      _item.recycle();
    }
    task.input = null;
  }
  function urlAppendTimestamp(url, append) {
    if (append) {
      if (/\?/.test(url)) {
        return url + "&_t=" + Date.now();
      }
      return url + "?_t=" + Date.now();
    }
    return url;
  }
  function retry(process, times, wait, onComplete, index) {
    if (index === void 0) {
      index = 0;
    }
    process(index, function (err, result) {
      index++;
      if (!err || index > times) {
        if (onComplete) {
          onComplete(err, result);
        }
      } else {
        setTimeout(function () {
          retry(process, times, wait, onComplete, index);
        }, wait);
      }
    });
  }
  function getDepends(uuid, data, exclude, depends, config) {
    try {
      var info = dependUtil.parse(uuid, data);
      for (var i = 0, l = info.deps.length; i < l; i++) {
        var dep = info.deps[i];
        if (!(dep in exclude)) {
          exclude[dep] = true;
          depends.push({
            uuid: dep,
            bundle: config && config.name
          });
        }
      }
      if (info.nativeDep) {
        if (config) {
          info.nativeDep.bundle = config.name;
        }
        depends.push(_extends({}, info.nativeDep));
      }
    } catch (e) {
      error(e.message, e.stack);
    }
  }
  function cache(id, asset, cacheAsset) {
    if (!asset) {
      return;
    }
    cacheAsset = cacheAsset !== undefined ? cacheAsset : cclegacy.assetManager.cacheAsset;
    if (!isScene(asset) && cacheAsset && !asset.isDefault) {
      assets.add(id, asset);
    }
  }
  function setProperties(uuid, asset, assetsMap) {
    var missingAsset = false;
    var depends = dependMap.get(asset);
    if (depends) {
      var missingAssetReporter = null;
      for (var i = 0, l = depends.length; i < l; i++) {
        var depend = depends[i];
        var dependAsset = assetsMap[depend.uuid + "@import"];
        if (!dependAsset) {
          if (EDITOR) {
            if (!missingAssetReporter) {
              // eslint-disable-next-line new-cap
              missingAssetReporter = new EditorExtends.MissingReporter.object(asset);
            }
            missingAssetReporter.stashByOwner(depend.owner, depend.prop, EditorExtends.serialize.asAsset(depend.uuid));
          } else {
            error("The asset " + depend.uuid + " is missing!");
          }
          cclegacy.assetManager.dispatchAssetMissing(asset, depend.owner, depend.prop, depend.uuid);
          if (depend.type && depend.type !== Asset) {
            // eslint-disable-next-line new-cap
            var placeHolder = new depend.type();
            placeHolder.initDefault(depend.uuid);
            depend.owner[depend.prop] = placeHolder;
          }
          missingAsset = true;
        } else {
          depend.owner[depend.prop] = dependAsset.addRef();
          if (EDITOR) {
            var reference = references.get(dependAsset);
            if (!reference || isScene(asset)) {
              reference = [];
              references.add(depend.uuid, reference);
            }
            reference.push([new WeakRef(asset), new WeakRef(depend.owner), depend.prop]);
          }
        }
      }
      if (missingAssetReporter) {
        missingAssetReporter.reportByOwner();
      }
      dependMap["delete"](asset);
    }
    if (nativeDependMap.has(asset)) {
      if (assetsMap[uuid + "@native"]) {
        asset._nativeAsset = assetsMap[uuid + "@native"];
      } else {
        missingAsset = true;
        console.error("the native asset of " + uuid + " is missing!");
      }
      nativeDependMap["delete"](asset);
    }
    return missingAsset;
  }
  function gatherAsset(task) {
    var source = task.source;
    if (!task.options.__outputAsArray__ && source.length === 1) {
      task.output = source[0].content;
    } else {
      var output = task.output = [];
      for (var i = 0, l = source.length; i < l; i++) {
        output.push(source[i].content);
      }
    }
  }
  function forEach(array, process, onComplete) {
    var count = 0;
    var errs = [];
    var length = array.length;
    if (length === 0 && onComplete) {
      onComplete(errs);
    }
    var cb = function cb(err) {
      if (err) {
        errs.push(err);
      }
      count++;
      if (count === length) {
        if (onComplete) {
          onComplete(errs);
        }
      }
    };
    for (var i = 0; i < length; i++) {
      process(array[i], cb);
    }
  }
  function parseParameters(options, onProgress, onComplete) {
    var optionsOut = options;
    var onProgressOut = onProgress;
    var onCompleteOut = onComplete;
    if (onComplete === undefined) {
      var isCallback = typeof options === 'function';
      if (onProgress) {
        onCompleteOut = onProgress;
        if (!isCallback) {
          onProgressOut = null;
        }
      } else if (onProgress === undefined && isCallback) {
        onCompleteOut = options;
        optionsOut = null;
        onProgressOut = null;
      }
      if (onProgress !== undefined && isCallback) {
        onProgressOut = options;
        optionsOut = null;
      }
    }
    return {
      options: optionsOut || Object.create(null),
      onProgress: onProgressOut,
      onComplete: onCompleteOut
    };
  }
  function parseLoadResArgs(type, onProgress, onComplete) {
    var typeOut = type;
    var onProgressOut = onProgress;
    var onCompleteOut = onComplete;
    if (onComplete === undefined) {
      var isValidType = js.isChildClassOf(type, Asset);
      if (onProgress) {
        onCompleteOut = onProgress;
        if (isValidType) {
          onProgressOut = null;
        }
      } else if (onProgress === undefined && !isValidType) {
        onCompleteOut = type;
        onProgressOut = null;
        typeOut = null;
      }
      if (onProgress !== undefined && !isValidType) {
        onProgressOut = type;
        typeOut = null;
      }
    }
    return {
      type: typeOut,
      onProgress: onProgressOut || defaultProgressCallback,
      onComplete: onCompleteOut
    };
  }
  function checkCircleReference(owner, uuid, map, checked) {
    if (checked === void 0) {
      checked = {};
    }
    var item = map[uuid];
    if (!item || checked[uuid]) {
      return false;
    }
    checked[uuid] = true;
    var result = false;
    var deps = dependUtil.getDeps(uuid);
    if (deps) {
      for (var i = 0, l = deps.length; i < l; i++) {
        var dep = deps[i];
        if (dep === owner || checkCircleReference(owner, dep, map, checked)) {
          result = true;
          break;
        }
      }
    }
    return result;
  }
  function asyncify(cb) {
    return function (p1, p2) {
      if (!cb) {
        return;
      }
      var refs = [];
      if (Array.isArray(p2)) {
        p2.forEach(function (x) {
          return x instanceof Asset && refs.push(x.addRef());
        });
      } else if (p2 instanceof Asset) {
        refs.push(p2.addRef());
      }
      misc.callInNextTick(function () {
        refs.forEach(function (x) {
          return x.decRef(false);
        });
        cb(p1, p2);
      });
    };
  }
  _export({
    setDefaultProgressCallback: setDefaultProgressCallback,
    clear: clear,
    urlAppendTimestamp: urlAppendTimestamp,
    retry: retry,
    getDepends: getDepends,
    cache: cache,
    setProperties: setProperties,
    gatherAsset: gatherAsset,
    forEach: forEach,
    parseParameters: parseParameters,
    parseLoadResArgs: parseLoadResArgs,
    checkCircleReference: checkCircleReference,
    asyncify: asyncify
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_assetsAssetJs) {
      Asset = _assetsAssetJs.Asset;
    }, function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
      error = _coreIndexJs.error;
      js = _coreIndexJs.js;
      misc = _coreIndexJs.misc;
    }, function (_dependMapsJs) {
      dependMap = _dependMapsJs.dependMap;
      nativeDependMap = _dependMapsJs.nativeDependMap;
    }, function (_dependUtilJs) {
      dependUtil = _dependUtilJs.default;
    }, function (_helperJs) {
      isScene = _helperJs.isScene;
    }, function (_sharedJs) {
      assets = _sharedJs.assets;
      references = _sharedJs.references;
    }],
    execute: function () {
      defaultProgressCallback = null;
    }
  };
});