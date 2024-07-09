System.register("q-bundled:///fs/cocos/2d/renderer/deprecated.js", ["./vertex-format.js", "./batcher-2d.js", "./draw-batch.js", "../../core/index.js", "./mesh-buffer.js", "./render-data.js"], function (_export, _context) {
  "use strict";

  var VertexFormat, Batcher2D, DrawBatch2D, markAsWarning, replaceProperty, removeProperty, warnID, MeshBuffer, MeshRenderData, UIDrawBatch, QuadRenderData;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2021-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
  _export("QuadRenderData", void 0);
  return {
    setters: [function (_vertexFormatJs) {
      VertexFormat = _vertexFormatJs;
    }, function (_batcher2dJs) {
      Batcher2D = _batcher2dJs.Batcher2D;
    }, function (_drawBatchJs) {
      DrawBatch2D = _drawBatchJs.DrawBatch2D;
    }, function (_coreIndexJs) {
      markAsWarning = _coreIndexJs.markAsWarning;
      replaceProperty = _coreIndexJs.replaceProperty;
      removeProperty = _coreIndexJs.removeProperty;
      warnID = _coreIndexJs.warnID;
    }, function (_meshBufferJs) {
      MeshBuffer = _meshBufferJs.MeshBuffer;
    }, function (_renderDataJs) {
      MeshRenderData = _renderDataJs.MeshRenderData;
    }],
    execute: function () {
      _export("UIVertexFormat", VertexFormat);
      _export("UI", Batcher2D);
      /**
       * @deprecated since v3.6.0, this is an engine private interface that will be removed in the future.
       * @internal
       */
      _export("UIDrawBatch", UIDrawBatch = class UIDrawBatch extends DrawBatch2D {});
      markAsWarning(MeshBuffer.prototype, 'MeshBuffer', ['byteStart', 'vertexStart', 'indicesStart', 'request'].map(item => ({
        name: item,
        suggest: `please use meshBuffer.accessor.${item} instead`
      })));
      replaceProperty(MeshBuffer.prototype, 'MeshBuffer', [{
        name: 'indicesOffset',
        newName: 'indexOffset'
      }]);
      removeProperty(MeshBuffer.prototype, 'MeshBuffer', [{
        name: 'vertexBuffers'
      }, {
        name: 'indexBuffer'
      }]);
      replaceProperty(Batcher2D.prototype, 'Batcher2D', [{
        name: 'currBufferBatch',
        newName: 'currBufferAccessor'
      }, {
        name: 'acquireBufferBatch',
        newName: 'switchBufferAccessor'
      }]);
      removeProperty(MeshRenderData.prototype, 'MeshRenderData', [{
        name: 'formatByte'
      }, {
        name: 'byteStart'
      }, {
        name: 'byteCount'
      }]);
      replaceProperty(MeshRenderData.prototype, 'MeshRenderData', [{
        name: 'indicesStart',
        newName: 'indexStart'
      }]);
      _export("QuadRenderData", QuadRenderData = class QuadRenderData extends MeshRenderData {
        constructor(vertexFormat) {
          super(vertexFormat);
          warnID(9006);
        }
      });
    }
  };
});