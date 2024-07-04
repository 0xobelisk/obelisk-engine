System.register("q-bundled:///fs/cocos/asset/asset-manager/pack-manager.js", ["../assets/image-asset.js", "../assets/texture-2d.js", "../../serialization/deserialize.js", "../../core/index.js", "./cache.js", "./downloader.js", "./helper.js", "./shared.js"], function (_export, _context) {
  "use strict";

  var ImageAsset, Texture2D, packCustomObjData, unpackJSONs, assertIsTrue, error, errorID, js, Cache, downloader, transform, files, PackManager;
  return {
    setters: [function (_assetsImageAssetJs) {
      ImageAsset = _assetsImageAssetJs.ImageAsset;
    }, function (_assetsTexture2dJs) {
      Texture2D = _assetsTexture2dJs.Texture2D;
    }, function (_serializationDeserializeJs) {
      packCustomObjData = _serializationDeserializeJs.packCustomObjData;
      unpackJSONs = _serializationDeserializeJs.unpackJSONs;
    }, function (_coreIndexJs) {
      assertIsTrue = _coreIndexJs.assertIsTrue;
      error = _coreIndexJs.error;
      errorID = _coreIndexJs.errorID;
      js = _coreIndexJs.js;
    }, function (_cacheJs) {
      Cache = _cacheJs.default;
    }, function (_downloaderJs) {
      downloader = _downloaderJs.default;
    }, function (_helperJs) {
      transform = _helperJs.transform;
    }, function (_sharedJs) {
      files = _sharedJs.files;
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
       * @en
       * Handle the packed asset, include unpacking, loading, cache and so on. It is a singleton. All member can be accessed with `assetManager.packManager`
       *
       * @zh
       * 处理打包资源，包括拆包，加载，缓存等等，这是一个单例, 所有成员能通过 `assetManager.packManager` 访问
       *
       */
      _export("PackManager", PackManager = /*#__PURE__*/function () {
        function PackManager() {
          this._loading = new Cache();
          this._unpackers = {
            '.json': this.unpackJson
          };
        }
        var _proto = PackManager.prototype;
        /**
         * @en
         * Unpack the json, revert to what it was before packing
         *
         * @zh
         * 拆解 json 包，恢复为打包之前的内容
         *
         * @param pack - The pack
         * @param json - The content of pack
         * @param options - Some optional parameters
         * @param onComplete - Callback when finish unpacking
         * @param onComplete.err - The occurred error, null indicates success
         * @param onComplete.content - The unpacked assets
         *
         * @example
         * downloader.downloadFile('pack.json', { xhrResponseType: 'json'}, null, (err, file) => {
         *      packManager.unpackJson(['a', 'b'], file, null, (err, data) => console.log(err));
         * });
         *
         */
        _proto.unpackJson = function unpackJson(pack, json, options, onComplete) {
          var out = js.createMap(true);
          var err = null;
          if (Array.isArray(json)) {
            json = unpackJSONs(json);
            if (json.length !== pack.length) {
              errorID(4915);
            }
            for (var i = 0; i < pack.length; i++) {
              out[pack[i] + "@import"] = json[i];
            }
          } else {
            var textureType = js.getClassId(Texture2D);
            var imageAssetType = js.getClassId(ImageAsset);
            if (json.type === textureType && json.data) {
              var datas = json.data;
              if (datas.length !== pack.length) {
                errorID(4915);
              }
              for (var _i = 0; _i < pack.length; _i++) {
                out[pack[_i] + "@import"] = packCustomObjData(textureType, {
                  base: datas[_i][0],
                  mipmaps: datas[_i][1]
                });
              }
            } else if (json.type === imageAssetType && json.data) {
              var _datas = json.data;
              if (_datas.length !== pack.length) {
                errorID(4915);
              }
              for (var _i2 = 0; _i2 < pack.length; _i2++) {
                out[pack[_i2] + "@import"] = _datas[_i2];
              }
            } else {
              err = new Error('unmatched type pack!');
              onComplete(err, null);
              return;
            }
          }
          onComplete(err, out);
        };
        _proto.init = function init() {
          this._loading.clear();
        }

        /**
         * @en
         * Register custom handler if you want to change default behavior or extend packManager to unpack other format pack
         *
         * @zh
         * 当你想修改默认行为或者拓展 packManager 来拆分其他格式的包时可以注册自定义的 handler
         *
         * @param type - Extension likes '.bin' or map likes {'.bin': binHandler, '.ab': abHandler}
         * @param handler - handler
         * @param handler.packUuid - The uuid of pack
         * @param handler.data - The content of pack
         * @param handler.options - Some optional parameters
         * @param handler.onComplete - Callback when finishing unpacking
         *
         * @example
         * packManager.register('.bin', (packUuid, file, options, onComplete) => onComplete(null, null));
         * packManager.register({
         *  '.bin': (packUuid, file, options, onComplete) => onComplete(null, null),
         *  '.ab': (packUuid, file, options, onComplete) => onComplete(null, null),
         * });
         */;
        _proto.register = function register(type, handler) {
          if (typeof type === 'object') {
            js.mixin(this._unpackers, type);
          } else {
            this._unpackers[type] = handler;
          }
        }

        /**
         * @en
         * Use corresponding handler to unpack package
         *
         * @zh
         * 用对应的 handler 来进行解包
         *
         * @method unpack
         * @param pack - The uuid of packed assets
         * @param data - The packed data
         * @param type - The type indicates that which handler should be used to download, such as '.jpg'
         * @param options - Some optional parameter
         * @param onComplete - callback when finishing unpacking
         * @param onComplete.err -  The occurred error, null indicates success
         * @param onComplete.data - Original assets
         *
         * @example
         * downloader.downloadFile('pack.json', {xhrResponseType: 'json'}, null, (err, file) => {
         *      packManager.unpack(['2fawq123d', '1zsweq23f'], file, '.json', null, (err, data) => console.log(err));
         * });
         *
         */;
        _proto.unpack = function unpack(pack, data, type, options, onComplete) {
          if (!data) {
            onComplete(new Error('package data is wrong!'));
            return;
          }
          var unpacker = this._unpackers[type];
          unpacker(pack, data, options, onComplete);
        }

        /**
         * @en
         * Download request item, If item is not in any package, download as usual. Otherwise, download the corresponding package and unpack it.
         * And then retrieve the corresponding content form it.
         *
         * @zh
         * 下载请求对象，如果请求对象不在任何包内，则正常下载，否则下载对应的 package 并进行拆解，并取回包内对应的内容
         *
         * @param item - Some item you want to download
         * @param options - Some optional parameters
         * @param onComplete - Callback when finished
         * @param onComplete.err - The occurred error, null indicates success
         * @param onComplete.data - The unpacked data retrieved from package
         *
         * @example
         * var requestItem = AssetManager.RequestItem.create();
         * requestItem.uuid = 'fcmR3XADNLgJ1ByKhqcC5Z';
         * requestItem.info = config.getAssetInfo('fcmR3XADNLgJ1ByKhqcC5Z');
         * packManager.load(requestItem, null, (err, data) => console.log(err));
         *
         */;
        _proto.load = function load(item, options, onComplete) {
          var _this = this;
          // if not in any package, download as uausl
          if (item.isNative || !item.info || !item.info.packs) {
            downloader.download(item.id, item.url, item.ext, item.options, onComplete);
            return;
          }
          if (files.has(item.id)) {
            onComplete(null, files.get(item.id));
            return;
          }
          var packs = item.info.packs;

          // find a loading package
          var loadingPack = packs.find(function (val) {
            return _this._loading.has(val.uuid);
          });
          if (loadingPack) {
            var req = this._loading.get(loadingPack.uuid);
            assertIsTrue(req);
            req.push({
              onComplete: onComplete,
              id: item.id
            });
            return;
          }

          // download a new package
          var pack = packs[0];
          this._loading.add(pack.uuid, [{
            onComplete: onComplete,
            id: item.id
          }]);

          // find the url of pack
          assertIsTrue(item.config);
          var url = transform(pack.uuid, {
            ext: pack.ext,
            bundle: item.config.name
          });
          downloader.download(pack.uuid, url, pack.ext, item.options, function (err, data) {
            files.remove(pack.uuid);
            if (err) {
              error(err.message, err.stack);
            }
            // unpack package
            _this.unpack(pack.packedUuids, data, pack.ext, item.options, function (err2, result) {
              if (!err2) {
                for (var id in result) {
                  files.add(id, result[id]);
                }
              }
              var callbacks = _this._loading.remove(pack.uuid);
              assertIsTrue(callbacks);
              for (var i = 0, l = callbacks.length; i < l; i++) {
                var cb = callbacks[i];
                if (err || err2) {
                  cb.onComplete(err || err2);
                  continue;
                }
                var unpackedData = result[cb.id];
                if (!unpackedData) {
                  cb.onComplete(new Error('can not retrieve data from package'));
                } else {
                  cb.onComplete(null, unpackedData);
                }
              }
            });
          });
        };
        return PackManager;
      }());
      _export("default", new PackManager());
    }
  };
});