System.register("q-bundled:///fs/cocos/asset/asset-manager/editor-path-replace.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "./shared.js"], function (_export, _context) {
  "use strict";

  var EDITOR, NATIVE, PREVIEW, TEST, assert, Settings, settings, fetchPipeline, pipeline, cache, resolveMap, replaceExtension, fetchText, queryExtension;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      NATIVE = _virtualInternal253AconstantsJs.NATIVE;
      PREVIEW = _virtualInternal253AconstantsJs.PREVIEW;
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_coreIndexJs) {
      assert = _coreIndexJs.assert;
      Settings = _coreIndexJs.Settings;
      settings = _coreIndexJs.settings;
    }, function (_sharedJs) {
      fetchPipeline = _sharedJs.fetchPipeline;
      pipeline = _sharedJs.pipeline;
    }],
    execute: function () {
      if ((EDITOR || PREVIEW) && !TEST) {
        cache = {};
        resolveMap = {};
        replaceExtension = (task, done) => {
          task.output = task.input;
          (async () => {
            for (let i = 0; i < task.input.length; i++) {
              const item = task.input[i];
              if (!item.uuid || item.isNative) {
                continue;
              }
              try {
                const extension = await queryExtension(item.overrideUuid || item.uuid);
                if (extension) {
                  item.ext = extension;
                  item.url = item.url.replace('.json', extension);
                }
              } catch (err) {
                continue;
              }
            }
          })().then(() => {
            done(null, null);
          }).catch(reason => {
            done(reason, null);
          });
        };
        fetchText = url => new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onload = () => {
            if (xhr.status !== 200) {
              reject();
              return;
            }
            resolve(xhr.response);
          };
          xhr.send(null);
        });
        queryExtension = async uuid => {
          if (uuid in cache) {
            if (cache[uuid] !== null) {
              return cache[uuid];
            }
            return new Promise(resolve => {
              resolveMap[uuid] = resolveMap[uuid] || [];
              resolveMap[uuid].push(resolve);
            });
          }
          cache[uuid] = null;
          try {
            let text = '';
            if (EDITOR) {
              const info = await Editor.Message.request('asset-db', 'query-asset-info', uuid);
              if (info && info.library['.cconb']) {
                text = '.cconb';
              }
            } else {
              let previewServer = '';
              if (NATIVE) {
                previewServer = settings.querySettings(Settings.Category.PATH, 'previewServer') || '';
                assert(Boolean(previewServer));
              }
              text = await fetchText(`${previewServer}/query-extname/${uuid}`);
            }
            cache[uuid] = text;
            if (resolveMap[uuid]) {
              resolveMap[uuid].forEach(func => func(text));
              resolveMap[uuid] = [];
            }
            return text;
          } catch (error) {
            console.error(error);
            cache[uuid] = '';
            return '';
          }
        };
        pipeline.insert(replaceExtension, 1);
        fetchPipeline.insert(replaceExtension, 1);
      }
    }
  };
});