System.register("q-bundled:///fs/cocos/gfx/base/device.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var API, Feature, MemoryStatus, TextureInfo, BufferTextureCopy, DeviceCaps, BindingMappingInfo, Format, TextureType, TextureUsageBit, TextureFlagBit, Offset, Extent, SampleCount, TextureSubresLayers, Device, DefaultResource;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
    setters: [function (_defineJs) {
      API = _defineJs.API;
      Feature = _defineJs.Feature;
      MemoryStatus = _defineJs.MemoryStatus;
      TextureInfo = _defineJs.TextureInfo;
      BufferTextureCopy = _defineJs.BufferTextureCopy;
      DeviceCaps = _defineJs.DeviceCaps;
      BindingMappingInfo = _defineJs.BindingMappingInfo;
      Format = _defineJs.Format;
      TextureType = _defineJs.TextureType;
      TextureUsageBit = _defineJs.TextureUsageBit;
      TextureFlagBit = _defineJs.TextureFlagBit;
      Offset = _defineJs.Offset;
      Extent = _defineJs.Extent;
      SampleCount = _defineJs.SampleCount;
      TextureSubresLayers = _defineJs.TextureSubresLayers;
    }],
    execute: function () {
      /**
       * @en GFX Device.
       * @zh GFX 设备。
       */
      _export("Device", Device = /*#__PURE__*/function () {
        function Device() {
          this._gfxAPI = API.UNKNOWN;
          this._renderer = '';
          this._vendor = '';
          this._features = new Array(Feature.COUNT);
          this._formatFeatures = new Array(Format.COUNT);
          this._queue = null;
          this._cmdBuff = null;
          this._numDrawCalls = 0;
          this._numInstances = 0;
          this._numTris = 0;
          this._memoryStatus = new MemoryStatus();
          this._caps = new DeviceCaps();
          this._bindingMappingInfo = new BindingMappingInfo();
          this._samplers = new Map();
          this._generalBarrierss = new Map();
          this._textureBarriers = new Map();
          this._bufferBarriers = new Map();
        }
        var _proto = Device.prototype;
        /**
         * @en Whether the device has specific feature.
         * @zh 是否具备特性。
         * @param feature The GFX feature to be queried.
         */
        _proto.hasFeature = function hasFeature(feature) {
          return this._features[feature];
        }

        /**
         * @en The extent a specific format is supported by the backend.
         * @zh 后端对特定格式的支持程度。
         * @param format The GFX format to be queried.
         */;
        _proto.getFormatFeatures = function getFormatFeatures(format) {
          return this._formatFeatures[format];
        }

        /**
         * @en Enable automatically barrier deduction GFX inside, no effect on web.
         * @zh 是否开启自动GFX内部barrier推导，web无影响。
         * @param format The GFX format to be queried.
         */;
        _proto.enableAutoBarrier = function enableAutoBarrier(en) {}

        /**
         * @en Get maximum supported sample count.
         * @zh 获取最大可支持的 Samples 参数
         * @param format The GFX texture format.
         * @param usage The GFX texture usage.
         * @param flags The GFX texture create flags.
         */;
        _proto.getMaxSampleCount = function getMaxSampleCount(format, usage, flags) {
          return SampleCount.X1;
        };
        _createClass(Device, [{
          key: "gfxAPI",
          get:
          /**
           * @en Current rendering API.
           * @zh 当前 GFX 使用的渲染 API。
           */
          function get() {
            return this._gfxAPI;
          }

          /**
           * @en GFX default queue.
           * @zh GFX 默认队列。
           */
        }, {
          key: "queue",
          get: function get() {
            return this._queue;
          }

          /**
           * @en GFX default command buffer.
           * @zh GFX 默认命令缓冲。
           */
        }, {
          key: "commandBuffer",
          get: function get() {
            return this._cmdBuff;
          }

          /**
           * @en Renderer description.
           * @zh 渲染器描述。
           */
        }, {
          key: "renderer",
          get: function get() {
            return this._renderer;
          }

          /**
           * @en Vendor description.
           * @zh 厂商描述。
           */
        }, {
          key: "vendor",
          get: function get() {
            return this._vendor;
          }

          /**
           * @en Number of draw calls currently recorded.
           * @zh 绘制调用次数。
           */
        }, {
          key: "numDrawCalls",
          get: function get() {
            return this._numDrawCalls;
          }

          /**
           * @en Number of instances currently recorded.
           * @zh 绘制 Instance 数量。
           */
        }, {
          key: "numInstances",
          get: function get() {
            return this._numInstances;
          }

          /**
           * @en Number of triangles currently recorded.
           * @zh 渲染三角形数量。
           */
        }, {
          key: "numTris",
          get: function get() {
            return this._numTris;
          }

          /**
           * @en Total memory size currently allocated.
           * @zh 内存状态。
           */
        }, {
          key: "memoryStatus",
          get: function get() {
            return this._memoryStatus;
          }

          /**
           * @en Current device capabilities.
           * @zh 当前设备能力数据。
           */
        }, {
          key: "capabilities",
          get: function get() {
            return this._caps;
          }

          /**
           * @en Current device binding mappings.
           * @zh 当前设备的绑定槽位映射关系。
           */
        }, {
          key: "bindingMappingInfo",
          get: function get() {
            return this._bindingMappingInfo;
          }
        }]);
        return Device;
      }());
      Device.canvas = void 0;
      _export("DefaultResource", DefaultResource = /*#__PURE__*/function () {
        function DefaultResource(device) {
          this._texture2D = null;
          this._texture3D = null;
          this._textureCube = null;
          this._texture2DArray = null;
          var bufferSize = 64;
          // create a new buffer and fill it with a white pixel
          var buffer = new Uint8Array(bufferSize);
          buffer.fill(255);
          if (device.capabilities.maxTextureSize >= 2) {
            this._texture2D = device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.STORAGE | TextureUsageBit.SAMPLED, Format.RGBA8, 2, 2, TextureFlagBit.NONE));
            var copyRegion = new BufferTextureCopy(0, 0, 0, new Offset(0, 0, 0), new Extent(2, 2, 1));
            device.copyBuffersToTexture([buffer], this._texture2D, [copyRegion]);
          }
          if (device.capabilities.maxTextureSize >= 2) {
            this._textureCube = device.createTexture(new TextureInfo(TextureType.CUBE, TextureUsageBit.STORAGE | TextureUsageBit.SAMPLED, Format.RGBA8, 2, 2, TextureFlagBit.NONE, 6));
            var _copyRegion = new BufferTextureCopy(0, 0, 0, new Offset(0, 0, 0), new Extent(2, 2, 1));
            device.copyBuffersToTexture([buffer], this._textureCube, [_copyRegion]);
            _copyRegion.texSubres.baseArrayLayer = 1;
            device.copyBuffersToTexture([buffer], this._textureCube, [_copyRegion]);
            _copyRegion.texSubres.baseArrayLayer = 2;
            device.copyBuffersToTexture([buffer], this._textureCube, [_copyRegion]);
            _copyRegion.texSubres.baseArrayLayer = 3;
            device.copyBuffersToTexture([buffer], this._textureCube, [_copyRegion]);
            _copyRegion.texSubres.baseArrayLayer = 4;
            device.copyBuffersToTexture([buffer], this._textureCube, [_copyRegion]);
            _copyRegion.texSubres.baseArrayLayer = 5;
            device.copyBuffersToTexture([buffer], this._textureCube, [_copyRegion]);
          }
          if (device.capabilities.max3DTextureSize >= 2) {
            this._texture3D = device.createTexture(new TextureInfo(TextureType.TEX3D, TextureUsageBit.STORAGE | TextureUsageBit.SAMPLED, Format.RGBA8, 2, 2, TextureFlagBit.NONE, 1, 1, SampleCount.X1, 2));
            var _copyRegion2 = new BufferTextureCopy(0, 0, 0, new Offset(0, 0, 0), new Extent(2, 2, 2), new TextureSubresLayers(0, 0, 1));
            device.copyBuffersToTexture([buffer], this._texture3D, [_copyRegion2]);
          }
          if (device.capabilities.maxArrayTextureLayers >= 2) {
            this._texture2DArray = device.createTexture(new TextureInfo(TextureType.TEX2D_ARRAY, TextureUsageBit.STORAGE | TextureUsageBit.SAMPLED, Format.RGBA8, 2, 2, TextureFlagBit.NONE, 2));
            var _copyRegion3 = new BufferTextureCopy(0, 0, 0, new Offset(0, 0, 0), new Extent(2, 2, 1), new TextureSubresLayers(0, 0, 1));
            device.copyBuffersToTexture([buffer], this._texture2DArray, [_copyRegion3]);
            _copyRegion3.texSubres.baseArrayLayer = 1;
            device.copyBuffersToTexture([buffer], this._texture2DArray, [_copyRegion3]);
          }
        }
        var _proto2 = DefaultResource.prototype;
        _proto2.getTexture = function getTexture(type) {
          switch (type) {
            case TextureType.TEX2D:
              return this._texture2D;
            case TextureType.TEX3D:
              return this._texture3D;
            case TextureType.CUBE:
              return this._textureCube;
            case TextureType.TEX2D_ARRAY:
              return this._texture2DArray;
            default:
              return null;
          }
        };
        return DefaultResource;
      }());
    }
  };
});