System.register("q-bundled:///fs/cocos/2d/assembler/label/text-output-data.js", ["../../../core/index.js"], function (_export, _context) {
  "use strict";

  var Rect, Size, Vec2, TextOutputLayoutData, TextOutputRenderData;
  return {
    setters: [function (_coreIndexJs) {
      Rect = _coreIndexJs.Rect;
      Size = _coreIndexJs.Size;
      Vec2 = _coreIndexJs.Vec2;
    }],
    execute: function () {
      /*
       Copyright (c) 2023 Xiamen Yaji Software Co., Ltd.
      
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
      _export("TextOutputLayoutData", TextOutputLayoutData = /*#__PURE__*/function () {
        function TextOutputLayoutData() {
          // public parsedStringStyle; // Prepare for merging richtext
          // string after process
          this.parsedString = [];
          // node part
          this.nodeContentSize = Size.ZERO.clone();
          // both
          // Node info
          this.canvasSize = new Size();
          // ttf
          this.canvasPadding = new Rect();
          // ttf
          this.contentSizeExtend = Size.ZERO.clone();
          // ttf
          this.startPosition = Vec2.ZERO.clone();
        }
        var _proto = TextOutputLayoutData.prototype;
        // ttf
        _proto.reset = function reset() {
          this.parsedString.length = 0;
          this.nodeContentSize.set(0, 0);
          this.canvasSize.set();
          this.canvasPadding.set();
          this.contentSizeExtend.set();
          this.startPosition.set();
        };
        return TextOutputLayoutData;
      }());
      _export("TextOutputRenderData", TextOutputRenderData = /*#__PURE__*/function () {
        function TextOutputRenderData() {
          // Process Output
          this.quadCount = 0;
          // both
          this.vertexBuffer = [];
          // both
          this.texture = null;
          // both
          // anchor
          this.uiTransAnchorX = 0.5;
          // both
          this.uiTransAnchorY = 0.5;
        }
        var _proto2 = TextOutputRenderData.prototype;
        // both
        _proto2.reset = function reset() {
          this.quadCount = 0;
          this.vertexBuffer.length = 0;
          this.texture = null;
          this.uiTransAnchorX = 0.5;
          this.uiTransAnchorY = 0.5;
        };
        return TextOutputRenderData;
      }());
    }
  };
});