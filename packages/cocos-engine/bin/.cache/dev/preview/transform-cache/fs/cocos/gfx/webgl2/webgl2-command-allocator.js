System.register("q-bundled:///fs/cocos/gfx/webgl2/webgl2-command-allocator.js", ["../../core/index.js", "./webgl2-commands.js"], function (_export, _context) {
  "use strict";

  var CachedArray, WebGL2CmdBeginRenderPass, WebGL2CmdBindStates, WebGL2CmdBlitTexture, WebGL2CmdCopyBufferToTexture, WebGL2CmdDraw, WebGL2CmdUpdateBuffer, WebGL2CommandPool, WebGL2CommandAllocator;
  return {
    setters: [function (_coreIndexJs) {
      CachedArray = _coreIndexJs.CachedArray;
    }, function (_webgl2CommandsJs) {
      WebGL2CmdBeginRenderPass = _webgl2CommandsJs.WebGL2CmdBeginRenderPass;
      WebGL2CmdBindStates = _webgl2CommandsJs.WebGL2CmdBindStates;
      WebGL2CmdBlitTexture = _webgl2CommandsJs.WebGL2CmdBlitTexture;
      WebGL2CmdCopyBufferToTexture = _webgl2CommandsJs.WebGL2CmdCopyBufferToTexture;
      WebGL2CmdDraw = _webgl2CommandsJs.WebGL2CmdDraw;
      WebGL2CmdUpdateBuffer = _webgl2CommandsJs.WebGL2CmdUpdateBuffer;
    }],
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
      _export("WebGL2CommandPool", WebGL2CommandPool = /*#__PURE__*/function () {
        function WebGL2CommandPool(Clazz, count) {
          this._frees = void 0;
          this._freeIdx = 0;
          this._freeCmds = void 0;
          this._frees = new Array(count);
          this._freeCmds = new CachedArray(count);
          for (var i = 0; i < count; ++i) {
            this._frees[i] = new Clazz();
          }
          this._freeIdx = count - 1;
        }

        /*
        public alloc (clazz: new() => T): T {
            return new clazz();
        }
        */
        var _proto = WebGL2CommandPool.prototype;
        _proto.alloc = function alloc(Clazz) {
          if (this._freeIdx < 0) {
            var size = this._frees.length * 2;
            var temp = this._frees;
            this._frees = new Array(size);
            var increase = size - temp.length;
            for (var i = 0; i < increase; ++i) {
              this._frees[i] = new Clazz();
            }
            for (var _i = increase, j = 0; _i < size; ++_i, ++j) {
              this._frees[_i] = temp[j];
            }
            this._freeIdx += increase;
          }
          var cmd = this._frees[this._freeIdx];
          this._frees[this._freeIdx--] = null;
          ++cmd.refCount;
          return cmd;
        };
        _proto.free = function free(cmd) {
          if (--cmd.refCount === 0) {
            this._freeCmds.push(cmd);
          }
        };
        _proto.freeCmds = function freeCmds(cmds) {
          // return ;
          for (var i = 0; i < cmds.length; ++i) {
            if (--cmds.array[i].refCount === 0) {
              this._freeCmds.push(cmds.array[i]);
            }
          }
        };
        _proto.release = function release() {
          for (var i = 0; i < this._freeCmds.length; ++i) {
            var cmd = this._freeCmds.array[i];
            cmd.clear();
            this._frees[++this._freeIdx] = cmd;
          }
          this._freeCmds.clear();
        };
        return WebGL2CommandPool;
      }());
      _export("WebGL2CommandAllocator", WebGL2CommandAllocator = /*#__PURE__*/function () {
        function WebGL2CommandAllocator() {
          this.beginRenderPassCmdPool = void 0;
          this.bindStatesCmdPool = void 0;
          this.drawCmdPool = void 0;
          this.updateBufferCmdPool = void 0;
          this.copyBufferToTextureCmdPool = void 0;
          this.blitTextureCmdPool = void 0;
          this.beginRenderPassCmdPool = new WebGL2CommandPool(WebGL2CmdBeginRenderPass, 1);
          this.bindStatesCmdPool = new WebGL2CommandPool(WebGL2CmdBindStates, 1);
          this.drawCmdPool = new WebGL2CommandPool(WebGL2CmdDraw, 1);
          this.updateBufferCmdPool = new WebGL2CommandPool(WebGL2CmdUpdateBuffer, 1);
          this.copyBufferToTextureCmdPool = new WebGL2CommandPool(WebGL2CmdCopyBufferToTexture, 1);
          this.blitTextureCmdPool = new WebGL2CommandPool(WebGL2CmdBlitTexture, 1);
        }
        var _proto2 = WebGL2CommandAllocator.prototype;
        _proto2.clearCmds = function clearCmds(cmdPackage) {
          if (cmdPackage.beginRenderPassCmds.length) {
            this.beginRenderPassCmdPool.freeCmds(cmdPackage.beginRenderPassCmds);
            cmdPackage.beginRenderPassCmds.clear();
          }
          if (cmdPackage.bindStatesCmds.length) {
            this.bindStatesCmdPool.freeCmds(cmdPackage.bindStatesCmds);
            cmdPackage.bindStatesCmds.clear();
          }
          if (cmdPackage.drawCmds.length) {
            this.drawCmdPool.freeCmds(cmdPackage.drawCmds);
            cmdPackage.drawCmds.clear();
          }
          if (cmdPackage.updateBufferCmds.length) {
            this.updateBufferCmdPool.freeCmds(cmdPackage.updateBufferCmds);
            cmdPackage.updateBufferCmds.clear();
          }
          if (cmdPackage.copyBufferToTextureCmds.length) {
            this.copyBufferToTextureCmdPool.freeCmds(cmdPackage.copyBufferToTextureCmds);
            cmdPackage.copyBufferToTextureCmds.clear();
          }
          if (cmdPackage.blitTextureCmds.length) {
            this.blitTextureCmdPool.freeCmds(cmdPackage.blitTextureCmds);
            cmdPackage.blitTextureCmds.clear();
          }
          cmdPackage.cmds.clear();
        };
        _proto2.releaseCmds = function releaseCmds() {
          this.beginRenderPassCmdPool.release();
          this.bindStatesCmdPool.release();
          this.drawCmdPool.release();
          this.updateBufferCmdPool.release();
          this.copyBufferToTextureCmdPool.release();
          this.blitTextureCmdPool.release();
        };
        return WebGL2CommandAllocator;
      }());
    }
  };
});