System.register("q-bundled:///fs/cocos/rendering/pipeline-event.js", ["../core/index.js"], function (_export, _context) {
  "use strict";

  var EventTarget, PipelineEventType, PipelineEventProcessor;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
  _export("PipelineEventType", void 0);
  return {
    setters: [function (_coreIndexJs) {
      EventTarget = _coreIndexJs.EventTarget;
    }],
    execute: function () {
      (function (PipelineEventType) {
        PipelineEventType["RENDER_FRAME_BEGIN"] = "render-frame-begin";
        PipelineEventType["RENDER_FRAME_END"] = "render-frame-end";
        PipelineEventType["RENDER_CAMERA_BEGIN"] = "render-camera-begin";
        PipelineEventType["RENDER_CAMERA_END"] = "render-camera-end";
        PipelineEventType["ATTACHMENT_SCALE_CAHNGED"] = "attachment-scale-changed";
      })(PipelineEventType || _export("PipelineEventType", PipelineEventType = {}));
      _export("PipelineEventProcessor", PipelineEventProcessor = /*#__PURE__*/function (_EventTarget) {
        _inheritsLoose(PipelineEventProcessor, _EventTarget);
        function PipelineEventProcessor() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _EventTarget.call.apply(_EventTarget, [this].concat(args)) || this;
          _this.eventTargetOn = _EventTarget.prototype.on;
          _this.eventTargetOnce = _EventTarget.prototype.once;
          return _this;
        }
        var _proto = PipelineEventProcessor.prototype;
        _proto.on = function on(type, callback, target, once) {
          return this.eventTargetOn(type, callback, target, once);
        };
        _proto.once = function once(type, callback, target) {
          return this.eventTargetOnce(type, callback, target);
        };
        return PipelineEventProcessor;
      }(EventTarget));
    }
  };
});