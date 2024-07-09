System.register("q-bundled:///fs/cocos/gfx/webgl/webgl-queue.js", ["../base/queue.js"], function (_export, _context) {
  "use strict";

  var Queue, WebGLQueue;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
  return {
    setters: [function (_baseQueueJs) {
      Queue = _baseQueueJs.Queue;
    }],
    execute: function () {
      _export("WebGLQueue", WebGLQueue = /*#__PURE__*/function (_Queue) {
        _inheritsLoose(WebGLQueue, _Queue);
        function WebGLQueue() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Queue.call.apply(_Queue, [this].concat(args)) || this;
          _this.numDrawCalls = 0;
          _this.numInstances = 0;
          _this.numTris = 0;
          return _this;
        }
        var _proto = WebGLQueue.prototype;
        _proto.initialize = function initialize(info) {
          this._type = info.type;
        };
        _proto.destroy = function destroy() {};
        _proto.submit = function submit(cmdBuffs) {
          var len = cmdBuffs.length;
          for (var i = 0; i < len; i++) {
            var cmdBuff = cmdBuffs[i];
            // WebGLCmdFuncExecuteCmds( this._device as WebGLDevice, (cmdBuff as WebGLCommandBuffer).cmdPackage); // opted out
            this.numDrawCalls += cmdBuff.numDrawCalls;
            this.numInstances += cmdBuff.numInstances;
            this.numTris += cmdBuff.numTris;
          }
        };
        _proto.clear = function clear() {
          this.numDrawCalls = 0;
          this.numInstances = 0;
          this.numTris = 0;
        };
        return WebGLQueue;
      }(Queue));
    }
  };
});