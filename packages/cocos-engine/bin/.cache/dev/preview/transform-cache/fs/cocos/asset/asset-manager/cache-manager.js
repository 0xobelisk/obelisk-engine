System.register("q-bundled:///fs/cocos/asset/asset-manager/cache-manager.js", [], function (_export, _context) {
  "use strict";

  var CacheManager;
  return {
    setters: [],
    execute: function () {
      /*
       Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
      
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
       * Cache manager is a module which controls all caches downloaded from server in non-web platform, it is a singleton
       * You can access it via [[AssetManager.cacheManager]].
       *
       * @zh
       * 缓存管理器是一个模块，在非 WEB 平台上，用于管理所有从服务器上下载下来的缓存，这是一个单例，你能通过 [[AssetManager.cacheManager]] 访问它。
       *
       */
      _export("default", CacheManager = function CacheManager() {
        /**
         * @en
         * The name of cache directory.
         *
         * @zh
         * 缓存目录的名称。
         */
        this.cacheDir = void 0;
        /**
         * @en
         * Whether to cache file into user's storage space, this property only works on mini-game platforms.
         *
         * @zh
         * 是否缓存文件到用户存储空间，此属性只在小游戏平台有效。
         *
         */
        this.cacheEnabled = void 0;
        /**
         * @en
         * Whether to clear cache automatically when storage ran out, this property only works on mini-game platforms.
         *
         * @zh
         * 是否在存储空间满了后自动清理缓存，此属性只在小游戏平台有效。
         *
         */
        this.autoClear = void 0;
        /**
         * @en
         * The interval between caching file, this property only works on mini-game platforms, unit: ms.
         *
         * @zh
         * 缓存文件的间隔时间，此属性只在小游戏平台有效，单位：毫秒。
         *
         */
        this.cacheInterval = void 0;
        /**
         * @en
         * The interval between deleting file, when you use `cleanLRU`, the file will be deleted as this interval, unit: ms.
         *
         * @zh
         * 清理资源的间隔时间，当你使用 `cleanLRU` 时，资源将以此间隔被删除，单位：毫秒。
         *
         */
        this.deleteInterval = void 0;
        /**
         * @en
         * List of all cached files.
         *
         * @zh
         * 所有缓存文件列表。
         *
         */
        this.cachedFiles = void 0;
      });
    }
  };
});