System.register("q-bundled:///fs/pal/audio/operation-queue.js", [], function (_export, _context) {
  "use strict";

  var operationId;
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

  function removeUnneededCalls(instance) {
    var size = instance._operationQueue.length;
    var tmpQueue = instance._operationQueue.slice();
    var reserveOps = [];
    var seekSearched = false;
    for (var i = size - 1; i >= 0; i--) {
      var opInfo = tmpQueue[i];
      if (opInfo.op === 'stop') {
        reserveOps.push(opInfo);
        break;
      } else if (opInfo.op === 'seek') {
        if (!seekSearched) {
          reserveOps.push(opInfo);
          seekSearched = true;
        }
      } else if (seekSearched) {
        reserveOps.push(opInfo);
        break;
      } else if (reserveOps.length === 0) {
        reserveOps.push(opInfo);
      }
    }
    instance._operationQueue = reserveOps.reverse();
  }
  function _tryCallingRecursively(target, opInfo) {
    var _opInfo$func;
    if (opInfo.invoking) {
      return;
    }
    opInfo.invoking = true;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    (_opInfo$func = opInfo.func).call.apply(_opInfo$func, [target].concat(opInfo.args)).then(function () {
      opInfo.invoking = false;
      target._operationQueue.shift();
      target._eventTarget.emit(opInfo.id.toString());
      removeUnneededCalls(target);
      var nextOpInfo = target._operationQueue[0];
      if (nextOpInfo) {
        _tryCallingRecursively(target, nextOpInfo);
      }
      // eslint-disable-next-line @typescript-eslint/no-empty-function
    })["catch"](function (e) {});
  }

  /**
   * This is a method decorator for media player class such as Audio or Video.
   * Most of the operations in media player are asynchronous.
   * When all these asynchronous operations are called concurrently, they need to be queued.
   *
   * Note: the decorated class need to implement the interface `OperationQueueable`
   * and the decorated method should be declared as `(...args: any[]): Promise<void>`.
   *
   * When you apply `enqueueOperation` on a method, remember to provide a pure operation implementation.
   * It means that, for example, you can't call stop in the implementation of play operation,
   * because that would cause the operation deadlock.
   */
  // eslint-disable-next-line max-len
  function enqueueOperation(target, propertyKey, descriptor) {
    var originalOperation = descriptor.value;
    // eslint-disable-next-line func-names
    descriptor.value = function () {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return new Promise(function (resolve) {
        var id = operationId++;
        var instance = _this;
        // enqueue operation
        instance._operationQueue.push({
          op: propertyKey,
          id: id,
          func: originalOperation,
          args: args,
          invoking: false
        });
        // call resolve when this operation id is finishied
        instance._eventTarget.once(id.toString(), resolve);
        var opInfo = instance._operationQueue[0];
        _tryCallingRecursively(instance, opInfo);
      });
    };
  }
  _export("enqueueOperation", enqueueOperation);
  return {
    setters: [],
    execute: function () {
      operationId = 0;
    }
  };
});