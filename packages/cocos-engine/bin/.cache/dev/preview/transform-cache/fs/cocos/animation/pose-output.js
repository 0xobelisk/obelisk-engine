System.register("q-bundled:///fs/cocos/animation/pose-output.js", [], function (_export, _context) {
  "use strict";

  var PoseOutput;
  return {
    setters: [],
    execute: function () {
      /*
       Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
      
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
      _export("PoseOutput", PoseOutput = /*#__PURE__*/function () {
        function PoseOutput(pose) {
          this.weight = 0.0;
          this._pose = void 0;
          this._blendStateWriters = [];
          this._pose = pose;
        }
        var _proto = PoseOutput.prototype;
        _proto.destroy = function destroy() {
          for (var iBlendStateWriter = 0; iBlendStateWriter < this._blendStateWriters.length; ++iBlendStateWriter) {
            this._pose.destroyWriter(this._blendStateWriters[iBlendStateWriter]);
          }
          this._blendStateWriters.length = 0;
        };
        _proto.createPoseWriter = function createPoseWriter(node, property, constants) {
          var writer = this._pose.createWriter(node, property, this, constants);
          this._blendStateWriters.push(writer);
          return writer;
        };
        return PoseOutput;
      }());
    }
  };
});