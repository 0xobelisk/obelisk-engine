System.register("q-bundled:///fs/cocos/spine/attach-util.js", ["../core/index.js"], function (_export, _context) {
  "use strict";

  var Mat4, tempMat4, AttachUtil;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /*
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
    setters: [function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
    }],
    execute: function () {
      tempMat4 = new Mat4();
      /**
       * @en Attach node tool
       * @zh 挂点工具类
       * @class sp.AttachUtil
       */
      _export("AttachUtil", AttachUtil = /*#__PURE__*/function () {
        function AttachUtil() {
          this._isInitialized = false;
          this._skeletonBones = null;
          this._socketNodes = null;
          this._keysToDelete = [];
          this._isInitialized = false;
        }
        var _proto = AttachUtil.prototype;
        _proto.init = function init(skeletonComp) {
          var _skeletonComp$socketN;
          this._isInitialized = false;
          if (!skeletonComp || ((_skeletonComp$socketN = skeletonComp.socketNodes) === null || _skeletonComp$socketN === void 0 ? void 0 : _skeletonComp$socketN.size) === 0) return;
          this._skeletonBones = skeletonComp._skeleton.bones;
          if (!this._skeletonBones || this._skeletonBones.length < 1) return;
          this._socketNodes = skeletonComp.socketNodes;
          if (!this._socketNodes || this._socketNodes.size <= 0) return;
          this._isInitialized = true;
          this._syncAttachedNode();
        };
        _proto.updateSkeletonBones = function updateSkeletonBones(bones) {
          this._skeletonBones = bones;
        };
        _proto.reset = function reset() {
          this._isInitialized = false;
          this._skeletonBones = null;
          this._socketNodes = null;
          this._keysToDelete.length = 0;
        };
        _proto._syncAttachedNode = function _syncAttachedNode() {
          if (!this._isInitialized) return;
          var socketNodes = this._socketNodes;
          for (var _iterator = _createForOfIteratorHelperLoose(socketNodes), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              boneIdx = _step$value[0],
              boneNode = _step$value[1];
            if (!boneNode || !boneNode.isValid) {
              this._keysToDelete.push(boneIdx);
              continue;
            }
            var bone = this._skeletonBones[boneIdx];
            if (bone) this.matrixHandle(boneNode, bone);
          }
          if (this._keysToDelete.length <= 0) return;
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._keysToDelete), _step2; !(_step2 = _iterator2()).done;) {
            var _boneIdx = _step2.value;
            socketNodes["delete"](_boneIdx);
          }
          this._keysToDelete.length = 0;
        };
        _proto.matrixHandle = function matrixHandle(node, bone) {
          var tm = tempMat4;
          tm.m00 = bone.a;
          tm.m01 = bone.c;
          tm.m04 = bone.b;
          tm.m05 = bone.d;
          tm.m12 = bone.worldX;
          tm.m13 = bone.worldY;
          node.matrix = tempMat4;
        };
        return AttachUtil;
      }());
    }
  };
});