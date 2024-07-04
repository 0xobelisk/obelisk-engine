System.register("q-bundled:///fs/cocos/asset/asset-manager/config.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "./cache.js", "./helper.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, TEST, js, cclegacy, Cache, decodeUuid, normalize, isMatchByWord, processOptions, Config;
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_coreIndexJs) {
      js = _coreIndexJs.js;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_cacheJs) {
      Cache = _cacheJs.default;
    }, function (_helperJs) {
      decodeUuid = _helperJs.decodeUuid;
      normalize = _helperJs.normalize;
    }],
    execute: function () {
      /*
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
      /**
       * @en Th asset's meta information. Used to obtain information about the asset.
       * @zh 资源的元信息。用于获取资源的相关信息。
       */
      /**
       * @en Information about the merged files.
       * @zh 合并文件的信息。
       */
      /**
       * @en Addressable asset information, you can look up the path of the asset in the project and the type of the asset.
       * @zh 可寻址资源的信息，你可以查询到该资源在项目中的路径与资源的类型。
       */
      /**
       * @en Information about the scene asset.
       * @zh 场景资源的相关信息。
       */
      isMatchByWord = function isMatchByWord(path, test) {
        if (path.length > test.length) {
          var nextAscii = path.charCodeAt(test.length);
          return nextAscii === 47; // '/'
        }

        return true;
      };
      processOptions = function processOptions(options) {
        if (EDITOR_NOT_IN_PREVIEW || TEST) {
          return;
        }
        var uuids = options.uuids;
        var paths = options.paths;
        var types = options.types;
        var bundles = options.deps;
        var realEntries = options.paths = Object.create(null);
        if (options.debug === false) {
          for (var i = 0, l = uuids.length; i < l; i++) {
            uuids[i] = decodeUuid(uuids[i]);
          }
          for (var id in paths) {
            var entry = paths[id];
            var type = entry[1];
            entry[1] = types[type];
          }
        } else {
          var out = Object.create(null);
          for (var _i = 0, _l = uuids.length; _i < _l; _i++) {
            var uuid = uuids[_i];
            uuids[_i] = out[uuid] = decodeUuid(uuid);
          }
          uuids = out;
        }
        for (var _id in paths) {
          var _entry = paths[_id];
          realEntries[uuids[_id]] = _entry;
        }
        var scenes = options.scenes;
        for (var name in scenes) {
          var _uuid = scenes[name];
          scenes[name] = uuids[_uuid];
        }
        var packs = options.packs;
        for (var packId in packs) {
          var packedIds = packs[packId];
          for (var j = 0; j < packedIds.length; ++j) {
            packedIds[j] = uuids[packedIds[j]];
          }
        }
        var versions = options.versions;
        if (versions) {
          for (var folder in versions) {
            var entries = versions[folder];
            for (var _i2 = 0; _i2 < entries.length; _i2 += 2) {
              var _uuid2 = entries[_i2];
              entries[_i2] = uuids[_uuid2] || _uuid2;
            }
          }
        }
        var redirect = options.redirect;
        if (redirect) {
          for (var _i3 = 0; _i3 < redirect.length; _i3 += 2) {
            redirect[_i3] = uuids[redirect[_i3]];
            redirect[_i3 + 1] = bundles[redirect[_i3 + 1]];
          }
        }
        var extensionMap = options.extensionMap;
        if (extensionMap) {
          var _loop = function _loop(ext) {
            if (!Object.prototype.hasOwnProperty.call(options.extensionMap, ext)) {
              return 1; // continue
            }
            options.extensionMap[ext].forEach(function (uuid, index) {
              options.extensionMap[ext][index] = uuids[uuid] || uuid;
            });
          };
          for (var ext in options.extensionMap) {
            if (_loop(ext)) continue;
          }
        }
      };
      _export("default", Config = /*#__PURE__*/function () {
        function Config() {
          this.name = '';
          this.base = '';
          this.importBase = '';
          this.nativeBase = '';
          this.deps = null;
          this.assetInfos = new Cache();
          this.scenes = new Cache();
          this.paths = new Cache();
        }
        var _proto = Config.prototype;
        _proto.init = function init(options) {
          var _this = this;
          processOptions(options);
          this.importBase = options.importBase || '';
          this.nativeBase = options.nativeBase || '';
          this.base = options.base || '';
          this.name = options.name || '';
          this.deps = options.deps || [];
          // init
          this._initUuid(options.uuids);
          this._initPath(options.paths);
          this._initScene(options.scenes);
          this._initPackage(options.packs);
          this._initVersion(options.versions);
          this._initRedirect(options.redirect);
          var _loop2 = function _loop2(ext) {
            if (!Object.prototype.hasOwnProperty.call(options.extensionMap, ext)) {
              return 1; // continue
            }
            options.extensionMap[ext].forEach(function (uuid) {
              var assetInfo = _this.assetInfos.get(uuid);
              if (assetInfo) {
                assetInfo.extension = ext;
              }
            });
          };
          for (var ext in options.extensionMap) {
            if (_loop2(ext)) continue;
          }
        };
        _proto.getInfoWithPath = function getInfoWithPath(path, type) {
          if (!path) {
            return null;
          }
          path = normalize(path);
          var items = this.paths.get(path);
          if (items) {
            if (type) {
              for (var i = 0, l = items.length; i < l; i++) {
                var assetInfo = items[i];
                if (js.isChildClassOf(assetInfo.ctor, type)) {
                  return assetInfo;
                }
              }
            } else {
              return items[0];
            }
          }
          return null;
        };
        _proto.getDirWithPath = function getDirWithPath(path, type, out) {
          path = normalize(path);
          if (path[path.length - 1] === '/') {
            path = path.slice(0, -1);
          }
          var infos = out || [];
          this.paths.forEach(function (items, p) {
            if (p.startsWith(path) && isMatchByWord(p, path) || !path) {
              for (var i = 0, l = items.length; i < l; i++) {
                var entry = items[i];
                if (!type || js.isChildClassOf(entry.ctor, type)) {
                  infos.push(entry);
                }
              }
            }
          });
          return infos;
        };
        _proto.getAssetInfo = function getAssetInfo(uuid) {
          return this.assetInfos.get(uuid) || null;
        };
        _proto.getSceneInfo = function getSceneInfo(name) {
          if (!name.endsWith('.scene')) {
            name += '.scene';
          }
          if (name[0] !== '/' && !name.startsWith('db://')) {
            name = "/" + name;
          }
          // search scene
          var info = this.scenes.find(function (val, key) {
            return key.endsWith(name);
          });
          return info;
        };
        _proto.destroy = function destroy() {
          this.paths.destroy();
          this.scenes.destroy();
          this.assetInfos.destroy();
        };
        _proto._initUuid = function _initUuid(uuidList) {
          if (!uuidList) {
            return;
          }
          this.assetInfos.clear();
          for (var i = 0, l = uuidList.length; i < l; i++) {
            var uuid = uuidList[i];
            this.assetInfos.add(uuid, {
              uuid: uuid
            });
          }
        };
        _proto._initPath = function _initPath(pathList) {
          if (!pathList) {
            return;
          }
          var paths = this.paths;
          paths.clear();
          for (var uuid in pathList) {
            var info = pathList[uuid];
            var path = info[0];
            var type = info[1];
            var isSubAsset = info.length === 3;
            var assetInfo = this.assetInfos.get(uuid);
            assetInfo.path = path;
            assetInfo.ctor = js.getClassById(type);
            if (paths.has(path)) {
              if (isSubAsset) {
                paths.get(path).push(assetInfo);
              } else {
                paths.get(path).unshift(assetInfo);
              }
            } else {
              paths.add(path, [assetInfo]);
            }
          }
        };
        _proto._initScene = function _initScene(sceneList) {
          if (!sceneList) {
            return;
          }
          var scenes = this.scenes;
          scenes.clear();
          var assetInfos = this.assetInfos;
          for (var sceneName in sceneList) {
            var uuid = sceneList[sceneName];
            var assetInfo = assetInfos.get(uuid);
            assetInfo.url = sceneName;
            scenes.add(sceneName, assetInfo);
          }
        };
        _proto._initPackage = function _initPackage(packageList) {
          if (!packageList) {
            return;
          }
          var assetInfos = this.assetInfos;
          for (var packUuid in packageList) {
            var uuids = packageList[packUuid];
            var pack = {
              uuid: packUuid,
              packedUuids: uuids,
              ext: '.json'
            };
            assetInfos.add(packUuid, pack);
            for (var i = 0, l = uuids.length; i < l; i++) {
              var uuid = uuids[i];
              var assetInfo = assetInfos.get(uuid);
              var assetPacks = assetInfo.packs;
              if (assetPacks) {
                if (l === 1) {
                  assetPacks.unshift(pack);
                } else {
                  assetPacks.push(pack);
                }
              } else {
                assetInfo.packs = [pack];
              }
            }
          }
        };
        _proto._initVersion = function _initVersion(versions) {
          if (!versions) {
            return;
          }
          var assetInfos = this.assetInfos;
          var entries = versions["import"];
          if (entries) {
            for (var i = 0, l = entries.length; i < l; i += 2) {
              var uuid = entries[i];
              var assetInfo = assetInfos.get(uuid);
              assetInfo.ver = entries[i + 1];
            }
          }
          entries = versions["native"];
          if (entries) {
            for (var _i4 = 0, _l2 = entries.length; _i4 < _l2; _i4 += 2) {
              var _uuid3 = entries[_i4];
              var _assetInfo = assetInfos.get(_uuid3);
              _assetInfo.nativeVer = entries[_i4 + 1];
            }
          }
        };
        _proto._initRedirect = function _initRedirect(redirect) {
          if (!redirect) {
            return;
          }
          var assetInfos = this.assetInfos;
          for (var i = 0, l = redirect.length; i < l; i += 2) {
            var uuid = redirect[i];
            var assetInfo = assetInfos.get(uuid);
            assetInfo.redirect = redirect[i + 1];
          }
        };
        return Config;
      }());
      if (TEST) {
        cclegacy._Test.Config = Config;
      }
    }
  };
});