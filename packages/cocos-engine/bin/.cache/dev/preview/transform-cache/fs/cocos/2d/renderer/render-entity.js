System.register("q-bundled:///fs/cocos/2d/renderer/render-entity.js", ["../../../../virtual/internal%253Aconstants.js", "./native-2d.js", "./render-draw-info.js", "../../core/index.js", "./stencil-manager.js"], function (_export, _context) {
  "use strict";

  var JSB, NativeRenderEntity, RenderDrawInfo, Color, Stage, RenderEntityType, RenderEntityFloatSharedBufferView, RenderEntityUInt8SharedBufferView, RenderEntityBoolSharedBufferView, MaskMode, RenderEntity;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
  _export({
    RenderEntityType: void 0,
    RenderEntityFloatSharedBufferView: void 0,
    RenderEntityUInt8SharedBufferView: void 0,
    RenderEntityBoolSharedBufferView: void 0,
    MaskMode: void 0
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_native2dJs) {
      NativeRenderEntity = _native2dJs.NativeRenderEntity;
    }, function (_renderDrawInfoJs) {
      RenderDrawInfo = _renderDrawInfoJs.RenderDrawInfo;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
    }, function (_stencilManagerJs) {
      Stage = _stencilManagerJs.Stage;
    }],
    execute: function () {
      (function (RenderEntityType) {
        RenderEntityType[RenderEntityType["STATIC"] = 0] = "STATIC";
        RenderEntityType[RenderEntityType["DYNAMIC"] = 1] = "DYNAMIC";
        RenderEntityType[RenderEntityType["CROSSED"] = 2] = "CROSSED";
      })(RenderEntityType || _export("RenderEntityType", RenderEntityType = {}));
      (function (RenderEntityFloatSharedBufferView) {
        RenderEntityFloatSharedBufferView[RenderEntityFloatSharedBufferView["localOpacity"] = 0] = "localOpacity";
        RenderEntityFloatSharedBufferView[RenderEntityFloatSharedBufferView["count"] = 1] = "count";
      })(RenderEntityFloatSharedBufferView || _export("RenderEntityFloatSharedBufferView", RenderEntityFloatSharedBufferView = {}));
      (function (RenderEntityUInt8SharedBufferView) {
        RenderEntityUInt8SharedBufferView[RenderEntityUInt8SharedBufferView["colorR"] = 0] = "colorR";
        RenderEntityUInt8SharedBufferView[RenderEntityUInt8SharedBufferView["colorG"] = 1] = "colorG";
        RenderEntityUInt8SharedBufferView[RenderEntityUInt8SharedBufferView["colorB"] = 2] = "colorB";
        RenderEntityUInt8SharedBufferView[RenderEntityUInt8SharedBufferView["colorA"] = 3] = "colorA";
        RenderEntityUInt8SharedBufferView[RenderEntityUInt8SharedBufferView["maskMode"] = 4] = "maskMode";
        RenderEntityUInt8SharedBufferView[RenderEntityUInt8SharedBufferView["count"] = 5] = "count";
      })(RenderEntityUInt8SharedBufferView || _export("RenderEntityUInt8SharedBufferView", RenderEntityUInt8SharedBufferView = {}));
      (function (RenderEntityBoolSharedBufferView) {
        RenderEntityBoolSharedBufferView[RenderEntityBoolSharedBufferView["colorDirty"] = 0] = "colorDirty";
        RenderEntityBoolSharedBufferView[RenderEntityBoolSharedBufferView["enabled"] = 1] = "enabled";
        RenderEntityBoolSharedBufferView[RenderEntityBoolSharedBufferView["useLocal"] = 2] = "useLocal";
        RenderEntityBoolSharedBufferView[RenderEntityBoolSharedBufferView["count"] = 3] = "count";
      })(RenderEntityBoolSharedBufferView || _export("RenderEntityBoolSharedBufferView", RenderEntityBoolSharedBufferView = {}));
      (function (MaskMode) {
        MaskMode[MaskMode["NONE"] = 0] = "NONE";
        MaskMode[MaskMode["MASK"] = 1] = "MASK";
        MaskMode[MaskMode["MASK_INVERTED"] = 2] = "MASK_INVERTED";
        MaskMode[MaskMode["MASK_NODE"] = 3] = "MASK_NODE";
        MaskMode[MaskMode["MASK_NODE_INVERTED"] = 4] = "MASK_NODE_INVERTED";
      })(MaskMode || _export("MaskMode", MaskMode = {}));
      _export("RenderEntity", RenderEntity = /*#__PURE__*/function () {
        function RenderEntity(entityType) {
          this._renderEntityType = RenderEntityType.STATIC;
          this._dynamicDrawInfoArr = [];
          this._node = null;
          this._renderTransform = null;
          this._stencilStage = Stage.DISABLED;
          this._useLocal = false;
          this._maskMode = MaskMode.NONE;
          // set renderEntityType (val:RenderEntityType) {
          //     this._renderEntityType = val;
          // }
          this._color = Color.WHITE;
          this._localOpacity = 255;
          this._colorDirty = true;
          this._enabled = false;
          if (JSB) {
            if (!this._nativeObj) {
              this._nativeObj = new NativeRenderEntity(entityType);
            }
            this._renderEntityType = entityType;
            this.initSharedBuffer();
          }
        }
        var _proto = RenderEntity.prototype;
        _proto.addDynamicRenderDrawInfo = function addDynamicRenderDrawInfo(renderDrawInfo) {
          if (JSB) {
            if (renderDrawInfo) {
              this._dynamicDrawInfoArr.push(renderDrawInfo);
              this._nativeObj.addDynamicRenderDrawInfo(renderDrawInfo.nativeObj);
            }
          }
        };
        _proto.removeDynamicRenderDrawInfo = function removeDynamicRenderDrawInfo() {
          if (JSB) {
            this._dynamicDrawInfoArr.pop();
            this._nativeObj.removeDynamicRenderDrawInfo();
          }
        };
        _proto.clearDynamicRenderDrawInfos = function clearDynamicRenderDrawInfos() {
          if (JSB) {
            this._dynamicDrawInfoArr.length = 0;
            this._nativeObj.clearDynamicRenderDrawInfos();
          }
        };
        _proto.clearStaticRenderDrawInfos = function clearStaticRenderDrawInfos() {
          if (JSB) {
            this._nativeObj.clearStaticRenderDrawInfos();
          }
        };
        _proto.setDynamicRenderDrawInfo = function setDynamicRenderDrawInfo(renderDrawInfo, index) {
          if (JSB) {
            if (renderDrawInfo) {
              if (this._dynamicDrawInfoArr.length < index + 1) {
                this._dynamicDrawInfoArr.push(renderDrawInfo);
                this._nativeObj.addDynamicRenderDrawInfo(renderDrawInfo.nativeObj);
              } else {
                this._dynamicDrawInfoArr[index] = renderDrawInfo;
                this._nativeObj.setDynamicRenderDrawInfo(renderDrawInfo.nativeObj, index);
              }
            }
          }
        };
        _proto.setMaskMode = function setMaskMode(mode) {
          if (JSB) {
            this._uint8SharedBuffer[RenderEntityUInt8SharedBufferView.maskMode] = mode;
          }
          this._maskMode = mode;
        };
        _proto.getStaticRenderDrawInfo = function getStaticRenderDrawInfo() {
          if (JSB) {
            var nativeDrawInfo = this._nativeObj.getStaticRenderDrawInfo(this._nativeObj.staticDrawInfoSize++);
            var drawInfo = new RenderDrawInfo(nativeDrawInfo);
            return drawInfo;
          }
          return null;
        };
        _proto.setNode = function setNode(node) {
          if (JSB) {
            if (this._node !== node) {
              this._nativeObj.node = node;
            }
          }
          this._node = node;
        };
        _proto.setRenderTransform = function setRenderTransform(renderTransform) {
          if (JSB) {
            if (this._renderTransform !== renderTransform) {
              this._nativeObj.renderTransform = renderTransform;
            }
          }
          this._renderTransform = renderTransform;
        };
        _proto.setStencilStage = function setStencilStage(stage) {
          if (JSB) {
            if (this._stencilStage !== stage) {
              this._nativeObj.stencilStage = stage;
            }
          }
          this._stencilStage = stage;
        };
        _proto.setUseLocal = function setUseLocal(useLocal) {
          if (JSB) {
            this._boolSharedBuffer[RenderEntityBoolSharedBufferView.useLocal] = useLocal ? 1 : 0;
          }
          this._useLocal = useLocal;
        };
        _proto.initSharedBuffer = function initSharedBuffer() {
          if (JSB) {
            //this._sharedBuffer = new Float32Array(RenderEntitySharedBufferView.count);
            var buffer = this._nativeObj.getEntitySharedBufferForJS();
            var offset = 0;
            this._floatSharedBuffer = new Float32Array(buffer, offset, RenderEntityFloatSharedBufferView.count);
            offset += RenderEntityFloatSharedBufferView.count * 4;
            this._uint8SharedBuffer = new Uint8Array(buffer, offset, RenderEntityUInt8SharedBufferView.count);
            offset += RenderEntityUInt8SharedBufferView.count * 1;
            this._boolSharedBuffer = new Uint8Array(buffer, offset, RenderEntityBoolSharedBufferView.count);
          }
        };
        _createClass(RenderEntity, [{
          key: "nativeObj",
          get: function get() {
            return this._nativeObj;
          }
        }, {
          key: "renderDrawInfoArr",
          get: function get() {
            return this._dynamicDrawInfoArr;
          }
        }, {
          key: "renderEntityType",
          get: function get() {
            return this._renderEntityType;
          }
        }, {
          key: "color",
          get: function get() {
            return this._color;
          },
          set: function set(val) {
            this._color = val;
            if (JSB) {
              this._uint8SharedBuffer[RenderEntityUInt8SharedBufferView.colorR] = val.r;
              this._uint8SharedBuffer[RenderEntityUInt8SharedBufferView.colorG] = val.g;
              this._uint8SharedBuffer[RenderEntityUInt8SharedBufferView.colorB] = val.b;
              this._uint8SharedBuffer[RenderEntityUInt8SharedBufferView.colorA] = val.a;
            }
          }
        }, {
          key: "localOpacity",
          get: function get() {
            return this._localOpacity;
          },
          set: function set(val) {
            this._localOpacity = val;
            if (JSB) {
              this._floatSharedBuffer[RenderEntityFloatSharedBufferView.localOpacity] = val;
            }
          }
        }, {
          key: "colorDirty",
          get: function get() {
            if (JSB) {
              // Synchronize values set from native to JS
              this._colorDirty = !!this._boolSharedBuffer[RenderEntityBoolSharedBufferView.colorDirty];
            }
            return this._colorDirty;
          },
          set: function set(val) {
            this._colorDirty = val;
            if (JSB) {
              this._boolSharedBuffer[RenderEntityBoolSharedBufferView.colorDirty] = val ? 1 : 0;
            }
          }
        }, {
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(val) {
            this._enabled = val;
            if (JSB) {
              this._boolSharedBuffer[RenderEntityBoolSharedBufferView.enabled] = val ? 1 : 0;
            }
          }
        }]);
        return RenderEntity;
      }());
    }
  };
});