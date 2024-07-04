System.register("q-bundled:///fs/cocos/2d/renderer/render-draw-info.js", ["../../../../virtual/internal%253Aconstants.js", "./native-2d.js"], function (_export, _context) {
  "use strict";

  var JSB, NativeRenderDrawInfo, RenderDrawInfo, AttrUInt8ArrayView, AttrUInt16ArrayView, AttrUInt32ArrayView, RenderDrawInfoType;
  _export({
    RenderDrawInfo: void 0,
    AttrUInt8ArrayView: void 0,
    AttrUInt16ArrayView: void 0,
    AttrUInt32ArrayView: void 0,
    RenderDrawInfoType: void 0
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      JSB = _virtualInternal253AconstantsJs.JSB;
    }, function (_native2dJs) {
      NativeRenderDrawInfo = _native2dJs.NativeRenderDrawInfo;
    }],
    execute: function () {
      (function (AttrUInt8ArrayView) {
        AttrUInt8ArrayView[AttrUInt8ArrayView["DrawInfoType"] = 0] = "DrawInfoType";
        AttrUInt8ArrayView[AttrUInt8ArrayView["VertDirty"] = 1] = "VertDirty";
        AttrUInt8ArrayView[AttrUInt8ArrayView["IsMeshBuffer"] = 2] = "IsMeshBuffer";
        AttrUInt8ArrayView[AttrUInt8ArrayView["Stride"] = 3] = "Stride";
        AttrUInt8ArrayView[AttrUInt8ArrayView["Count"] = 4] = "Count";
      })(AttrUInt8ArrayView || _export("AttrUInt8ArrayView", AttrUInt8ArrayView = {}));
      (function (AttrUInt16ArrayView) {
        AttrUInt16ArrayView[AttrUInt16ArrayView["BufferID"] = 0] = "BufferID";
        AttrUInt16ArrayView[AttrUInt16ArrayView["AccessorID"] = 1] = "AccessorID";
        AttrUInt16ArrayView[AttrUInt16ArrayView["Count"] = 2] = "Count";
      })(AttrUInt16ArrayView || _export("AttrUInt16ArrayView", AttrUInt16ArrayView = {}));
      (function (AttrUInt32ArrayView) {
        AttrUInt32ArrayView[AttrUInt32ArrayView["VertexOffset"] = 0] = "VertexOffset";
        AttrUInt32ArrayView[AttrUInt32ArrayView["IndexOffset"] = 1] = "IndexOffset";
        AttrUInt32ArrayView[AttrUInt32ArrayView["VBCount"] = 2] = "VBCount";
        AttrUInt32ArrayView[AttrUInt32ArrayView["IBCount"] = 3] = "IBCount";
        AttrUInt32ArrayView[AttrUInt32ArrayView["DataHash"] = 4] = "DataHash";
        AttrUInt32ArrayView[AttrUInt32ArrayView["Count"] = 5] = "Count";
      })(AttrUInt32ArrayView || _export("AttrUInt32ArrayView", AttrUInt32ArrayView = {}));
      (function (RenderDrawInfoType) {
        RenderDrawInfoType[RenderDrawInfoType["COMP"] = 0] = "COMP";
        RenderDrawInfoType[RenderDrawInfoType["MODEL"] = 1] = "MODEL";
        RenderDrawInfoType[RenderDrawInfoType["MIDDLEWARE"] = 2] = "MIDDLEWARE";
        RenderDrawInfoType[RenderDrawInfoType["SUB_NODE"] = 3] = "SUB_NODE";
      })(RenderDrawInfoType || _export("RenderDrawInfoType", RenderDrawInfoType = {}));
      _export("RenderDrawInfo", RenderDrawInfo = class RenderDrawInfo {
        // SharedBuffer of pos/uv/color

        constructor(nativeDrawInfo) {
          this._accId = -1;
          this._bufferId = -1;
          this._vertexOffset = 0;
          this._indexOffset = 0;
          this._vb = null;
          this._ib = null;
          this._vData = null;
          this._iData = null;
          this._vertDirty = false;
          this._vbCount = 0;
          this._ibCount = 0;
          this._dataHash = 0;
          this._isMeshBuffer = false;
          this._material = null;
          this._texture = null;
          this._sampler = null;
          this._stride = 0;
          this._useLocal = false;
          this._model = null;
          this._drawInfoType = RenderDrawInfoType.COMP;
          this._subNode = null;
          this._uint8SharedBuffer = void 0;
          this._uint16SharedBuffer = void 0;
          this._uint32SharedBuffer = void 0;
          this.init(nativeDrawInfo);
          const attrSharedBuffer = this._nativeObj.getAttrSharedBufferForJS();
          let offset = 0;
          this._uint8SharedBuffer = new Uint8Array(attrSharedBuffer, offset, AttrUInt8ArrayView.Count);
          offset += AttrUInt8ArrayView.Count * Uint8Array.BYTES_PER_ELEMENT;
          this._uint16SharedBuffer = new Uint16Array(attrSharedBuffer, offset, AttrUInt16ArrayView.Count);
          offset += AttrUInt16ArrayView.Count * Uint16Array.BYTES_PER_ELEMENT;
          this._uint32SharedBuffer = new Uint32Array(attrSharedBuffer, offset, AttrUInt32ArrayView.Count);
        }
        get nativeObj() {
          return this._nativeObj;
        }
        get render2dBuffer() {
          return this._render2dBuffer;
        }
        init(nativeDrawInfo) {
          if (JSB) {
            if (nativeDrawInfo) {
              this._nativeObj = nativeDrawInfo;
            }
            if (!this._nativeObj) {
              this._nativeObj = new NativeRenderDrawInfo();
            }
          }
        }
        clear() {
          this._bufferId = 0;
          this._vertexOffset = 0;
          this._indexOffset = 0;
          this._vertDirty = false;
        }
        setAccId(accId) {
          if (JSB) {
            if (this._accId !== accId) {
              this._uint16SharedBuffer[AttrUInt16ArrayView.AccessorID] = accId;
            }
          }
          this._accId = accId;
        }
        setBufferId(bufferId) {
          if (JSB) {
            if (this._bufferId !== bufferId) {
              this._uint16SharedBuffer[AttrUInt16ArrayView.BufferID] = bufferId;
              this._nativeObj.changeMeshBuffer();
            }
          }
          this._bufferId = bufferId;
        }
        setAccAndBuffer(accId, bufferId) {
          if (JSB) {
            if (this._accId !== accId || this._bufferId !== bufferId) {
              this._uint16SharedBuffer[AttrUInt16ArrayView.AccessorID] = accId;
              this._uint16SharedBuffer[AttrUInt16ArrayView.BufferID] = bufferId;
              this._nativeObj.changeMeshBuffer();
            }
          }
          this._bufferId = bufferId;
          this._accId = accId;
        }
        setVertexOffset(vertexOffset) {
          this._vertexOffset = vertexOffset;
          if (JSB) {
            this._uint32SharedBuffer[AttrUInt32ArrayView.VertexOffset] = vertexOffset;
          }
        }
        setIndexOffset(indexOffset) {
          this._indexOffset = indexOffset;
          if (JSB) {
            this._uint32SharedBuffer[AttrUInt32ArrayView.IndexOffset] = indexOffset;
          }
        }
        setVB(vbBuffer) {
          if (JSB) {
            this._nativeObj.vbBuffer = vbBuffer;
          }
        }
        setIB(ibBuffer) {
          if (JSB) {
            this._nativeObj.ibBuffer = ibBuffer;
          }
        }
        setVData(vDataBuffer) {
          if (JSB) {
            this._nativeObj.vDataBuffer = vDataBuffer;
          }
        }
        setIData(iDataBuffer) {
          if (JSB) {
            this._nativeObj.iDataBuffer = iDataBuffer;
          }
        }
        setVBCount(vbCount) {
          if (JSB) {
            this._uint32SharedBuffer[AttrUInt32ArrayView.VBCount] = vbCount;
          }
          this._vbCount = vbCount;
        }
        setIBCount(ibCount) {
          if (JSB) {
            this._uint32SharedBuffer[AttrUInt32ArrayView.IBCount] = ibCount;
          }
        }
        setVertDirty(val) {
          if (JSB) {
            this._uint8SharedBuffer[AttrUInt8ArrayView.VertDirty] = val ? 1 : 0;
          }
          this._vertDirty = val;
        }
        setDataHash(dataHash) {
          if (JSB) {
            this._uint32SharedBuffer[AttrUInt32ArrayView.DataHash] = dataHash;
          }
          this._dataHash = dataHash;
        }
        setIsMeshBuffer(isMeshBuffer) {
          if (JSB) {
            this._uint8SharedBuffer[AttrUInt8ArrayView.IsMeshBuffer] = isMeshBuffer ? 1 : 0;
          }
          this._isMeshBuffer = isMeshBuffer;
        }
        setMaterial(material) {
          if (JSB) {
            if (this._material !== material) {
              this._nativeObj.material = material;
            }
          }
          this._material = material;
        }
        setTexture(texture) {
          if (JSB) {
            if (this._texture !== texture) {
              this._nativeObj.texture = texture;
            }
          }
          this._texture = texture;
        }
        setSampler(sampler) {
          if (JSB) {
            if (this._sampler !== sampler) {
              this._nativeObj.sampler = sampler;
            }
          }
          this._sampler = sampler;
        }
        setModel(model) {
          if (JSB) {
            if (this._model !== model) {
              this._nativeObj.model = model;
            }
          }
        }
        setDrawInfoType(drawInfoType) {
          if (JSB) {
            if (this._drawInfoType !== drawInfoType) {
              this._uint8SharedBuffer[AttrUInt8ArrayView.DrawInfoType] = drawInfoType;
            }
          }
          this._drawInfoType = drawInfoType;
        }
        setSubNode(node) {
          if (JSB) {
            if (this._subNode !== node) {
              this._nativeObj.subNode = node;
            }
          }
          this._subNode = node;
        }
        setStride(stride) {
          if (JSB) {
            this._uint8SharedBuffer[AttrUInt8ArrayView.Stride] = stride;
          }
          this._stride = stride;
        }
        initRender2dBuffer() {
          if (JSB) {
            this._render2dBuffer = new Float32Array(this._vbCount * this._stride);
            this._nativeObj.setRender2dBufferToNative(this._render2dBuffer);
          }
        }
        fillRender2dBuffer(vertexDataArr) {
          if (JSB) {
            const fillLength = Math.min(this._vbCount, vertexDataArr.length);
            let bufferOffset = 0;
            for (let i = 0; i < fillLength; i++) {
              const temp = vertexDataArr[i];
              this._render2dBuffer[bufferOffset] = temp.x;
              this._render2dBuffer[bufferOffset + 1] = temp.y;
              this._render2dBuffer[bufferOffset + 2] = temp.z;
              bufferOffset += this._stride;
            }
          }
        }
      });
    }
  };
});