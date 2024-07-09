System.register("q-bundled:///fs/cocos/2d/renderer/render-entity.js", ["../../../../virtual/internal%253Aconstants.js", "./native-2d.js", "./render-draw-info.js", "../../core/index.js", "./stencil-manager.js"], function (_export, _context) {
  "use strict";

  var JSB, NativeRenderEntity, RenderDrawInfo, Color, Stage, RenderEntity, RenderEntityType, RenderEntityFloatSharedBufferView, RenderEntityUInt8SharedBufferView, RenderEntityBoolSharedBufferView, MaskMode;
  _export({
    RenderEntity: void 0,
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
      _export("RenderEntity", RenderEntity = class RenderEntity {
        get nativeObj() {
          return this._nativeObj;
        }
        get renderDrawInfoArr() {
          return this._dynamicDrawInfoArr;
        }
        get renderEntityType() {
          return this._renderEntityType;
        }
        // set renderEntityType (val:RenderEntityType) {
        //     this._renderEntityType = val;
        // }

        get color() {
          return this._color;
        }
        set color(val) {
          this._color = val;
          if (JSB) {
            this._uint8SharedBuffer[RenderEntityUInt8SharedBufferView.colorR] = val.r;
            this._uint8SharedBuffer[RenderEntityUInt8SharedBufferView.colorG] = val.g;
            this._uint8SharedBuffer[RenderEntityUInt8SharedBufferView.colorB] = val.b;
            this._uint8SharedBuffer[RenderEntityUInt8SharedBufferView.colorA] = val.a;
          }
        }
        get localOpacity() {
          return this._localOpacity;
        }
        set localOpacity(val) {
          this._localOpacity = val;
          if (JSB) {
            this._floatSharedBuffer[RenderEntityFloatSharedBufferView.localOpacity] = val;
          }
        }
        get colorDirty() {
          if (JSB) {
            // Synchronize values set from native to JS
            this._colorDirty = !!this._boolSharedBuffer[RenderEntityBoolSharedBufferView.colorDirty];
          }
          return this._colorDirty;
        }
        set colorDirty(val) {
          this._colorDirty = val;
          if (JSB) {
            this._boolSharedBuffer[RenderEntityBoolSharedBufferView.colorDirty] = val ? 1 : 0;
          }
        }
        get enabled() {
          return this._enabled;
        }
        set enabled(val) {
          this._enabled = val;
          if (JSB) {
            this._boolSharedBuffer[RenderEntityBoolSharedBufferView.enabled] = val ? 1 : 0;
          }
        }
        constructor(entityType) {
          this._renderEntityType = RenderEntityType.STATIC;
          this._dynamicDrawInfoArr = [];
          this._node = null;
          this._renderTransform = null;
          this._stencilStage = Stage.DISABLED;
          this._useLocal = false;
          this._maskMode = MaskMode.NONE;
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
        addDynamicRenderDrawInfo(renderDrawInfo) {
          if (JSB) {
            if (renderDrawInfo) {
              this._dynamicDrawInfoArr.push(renderDrawInfo);
              this._nativeObj.addDynamicRenderDrawInfo(renderDrawInfo.nativeObj);
            }
          }
        }
        removeDynamicRenderDrawInfo() {
          if (JSB) {
            this._dynamicDrawInfoArr.pop();
            this._nativeObj.removeDynamicRenderDrawInfo();
          }
        }
        clearDynamicRenderDrawInfos() {
          if (JSB) {
            this._dynamicDrawInfoArr.length = 0;
            this._nativeObj.clearDynamicRenderDrawInfos();
          }
        }
        clearStaticRenderDrawInfos() {
          if (JSB) {
            this._nativeObj.clearStaticRenderDrawInfos();
          }
        }
        setDynamicRenderDrawInfo(renderDrawInfo, index) {
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
        }
        setMaskMode(mode) {
          if (JSB) {
            this._uint8SharedBuffer[RenderEntityUInt8SharedBufferView.maskMode] = mode;
          }
          this._maskMode = mode;
        }
        getStaticRenderDrawInfo() {
          if (JSB) {
            const nativeDrawInfo = this._nativeObj.getStaticRenderDrawInfo(this._nativeObj.staticDrawInfoSize++);
            const drawInfo = new RenderDrawInfo(nativeDrawInfo);
            return drawInfo;
          }
          return null;
        }
        setNode(node) {
          if (JSB) {
            if (this._node !== node) {
              this._nativeObj.node = node;
            }
          }
          this._node = node;
        }
        setRenderTransform(renderTransform) {
          if (JSB) {
            if (this._renderTransform !== renderTransform) {
              this._nativeObj.renderTransform = renderTransform;
            }
          }
          this._renderTransform = renderTransform;
        }
        setStencilStage(stage) {
          if (JSB) {
            if (this._stencilStage !== stage) {
              this._nativeObj.stencilStage = stage;
            }
          }
          this._stencilStage = stage;
        }
        setUseLocal(useLocal) {
          if (JSB) {
            this._boolSharedBuffer[RenderEntityBoolSharedBufferView.useLocal] = useLocal ? 1 : 0;
          }
          this._useLocal = useLocal;
        }
        initSharedBuffer() {
          if (JSB) {
            //this._sharedBuffer = new Float32Array(RenderEntitySharedBufferView.count);
            const buffer = this._nativeObj.getEntitySharedBufferForJS();
            let offset = 0;
            this._floatSharedBuffer = new Float32Array(buffer, offset, RenderEntityFloatSharedBufferView.count);
            offset += RenderEntityFloatSharedBufferView.count * 4;
            this._uint8SharedBuffer = new Uint8Array(buffer, offset, RenderEntityUInt8SharedBufferView.count);
            offset += RenderEntityUInt8SharedBufferView.count * 1;
            this._boolSharedBuffer = new Uint8Array(buffer, offset, RenderEntityBoolSharedBufferView.count);
          }
        }
      });
    }
  };
});