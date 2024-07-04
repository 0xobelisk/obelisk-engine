System.register("q-bundled:///fs/cocos/gfx/webgl/webgl-swapchain.js", ["../../../../virtual/internal%253Aconstants.js", "pal/system-info", "./webgl-command-allocator.js", "./webgl-state-cache.js", "./webgl-texture.js", "../base/define.js", "../base/swapchain.js", "./webgl-define.js", "../../core/index.js", "../../../pal/system-info/enum-type/index.js", "./webgl-gpu-objects.js"], function (_export, _context) {
  "use strict";

  var ALIPAY, RUNTIME_BASED, BYTEDANCE, WECHAT, LINKSURE, QTT, COCOSPLAY, HUAWEI, EDITOR, TAOBAO, TAOBAO_MINIGAME, WECHAT_MINI_PROGRAM, systemInfo, WebGLCommandAllocator, WebGLStateCache, WebGLTexture, Format, TextureInfo, TextureFlagBit, TextureType, TextureUsageBit, BufferTextureCopy, Swapchain, WebGLDeviceManager, macro, warnID, warn, debug, BrowserType, OS, IWebGLBlitManager, WebGLSwapchain, eventWebGLContextLost;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
  function initStates(gl) {
    gl.activeTexture(gl.TEXTURE0);
    gl.pixelStorei(gl.PACK_ALIGNMENT, 1);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    // rasterizer state
    gl.enable(gl.SCISSOR_TEST);
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);
    gl.frontFace(gl.CCW);
    gl.disable(gl.POLYGON_OFFSET_FILL);
    gl.polygonOffset(0.0, 0.0);

    // depth stencil state
    gl.enable(gl.DEPTH_TEST);
    gl.depthMask(true);
    gl.depthFunc(gl.LESS);
    gl.depthRange(0.0, 1.0);
    gl.stencilFuncSeparate(gl.FRONT, gl.ALWAYS, 1, 0xffff);
    gl.stencilOpSeparate(gl.FRONT, gl.KEEP, gl.KEEP, gl.KEEP);
    gl.stencilMaskSeparate(gl.FRONT, 0xffff);
    gl.stencilFuncSeparate(gl.BACK, gl.ALWAYS, 1, 0xffff);
    gl.stencilOpSeparate(gl.BACK, gl.KEEP, gl.KEEP, gl.KEEP);
    gl.stencilMaskSeparate(gl.BACK, 0xffff);
    gl.disable(gl.STENCIL_TEST);

    // blend state
    gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE);
    gl.disable(gl.BLEND);
    gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
    gl.blendFuncSeparate(gl.ONE, gl.ZERO, gl.ONE, gl.ZERO);
    gl.colorMask(true, true, true, true);
    gl.blendColor(0.0, 0.0, 0.0, 0.0);
  }
  function getExtension(gl, ext) {
    const prefixes = ['', 'WEBKIT_', 'MOZ_'];
    for (let i = 0; i < prefixes.length; ++i) {
      const _ext = gl.getExtension(prefixes[i] + ext);
      if (_ext) {
        return _ext;
      }
    }
    return null;
  }
  function getExtensions(gl) {
    const res = {
      EXT_texture_filter_anisotropic: getExtension(gl, 'EXT_texture_filter_anisotropic'),
      EXT_blend_minmax: getExtension(gl, 'EXT_blend_minmax'),
      EXT_frag_depth: getExtension(gl, 'EXT_frag_depth'),
      EXT_shader_texture_lod: getExtension(gl, 'EXT_shader_texture_lod'),
      EXT_sRGB: getExtension(gl, 'EXT_sRGB'),
      OES_vertex_array_object: getExtension(gl, 'OES_vertex_array_object'),
      EXT_color_buffer_half_float: getExtension(gl, 'EXT_color_buffer_half_float'),
      WEBGL_color_buffer_float: getExtension(gl, 'WEBGL_color_buffer_float'),
      WEBGL_compressed_texture_etc1: getExtension(gl, 'WEBGL_compressed_texture_etc1'),
      WEBGL_compressed_texture_etc: getExtension(gl, 'WEBGL_compressed_texture_etc'),
      WEBGL_compressed_texture_pvrtc: getExtension(gl, 'WEBGL_compressed_texture_pvrtc'),
      WEBGL_compressed_texture_s3tc: getExtension(gl, 'WEBGL_compressed_texture_s3tc'),
      WEBGL_compressed_texture_s3tc_srgb: getExtension(gl, 'WEBGL_compressed_texture_s3tc_srgb'),
      WEBGL_debug_shaders: getExtension(gl, 'WEBGL_debug_shaders'),
      WEBGL_draw_buffers: getExtension(gl, 'WEBGL_draw_buffers'),
      WEBGL_lose_context: getExtension(gl, 'WEBGL_lose_context'),
      WEBGL_depth_texture: getExtension(gl, 'WEBGL_depth_texture'),
      OES_texture_half_float: getExtension(gl, 'OES_texture_half_float'),
      OES_texture_half_float_linear: getExtension(gl, 'OES_texture_half_float_linear'),
      OES_texture_float: getExtension(gl, 'OES_texture_float'),
      OES_texture_float_linear: getExtension(gl, 'OES_texture_float_linear'),
      OES_standard_derivatives: getExtension(gl, 'OES_standard_derivatives'),
      OES_element_index_uint: getExtension(gl, 'OES_element_index_uint'),
      ANGLE_instanced_arrays: getExtension(gl, 'ANGLE_instanced_arrays'),
      WEBGL_debug_renderer_info: getExtension(gl, 'WEBGL_debug_renderer_info'),
      WEBGL_multi_draw: null,
      WEBGL_compressed_texture_astc: null,
      destroyShadersImmediately: true,
      noCompressedTexSubImage2D: false,
      isLocationActive: glLoc => !!glLoc,
      useVAO: false
    };

    // platform-specific extension hacks
    // eslint-disable-next-line no-lone-blocks
    {
      // iOS 14 browsers crash on getExtension('WEBGL_compressed_texture_astc')
      if (systemInfo.os !== OS.IOS || systemInfo.osMainVersion !== 14 || !systemInfo.isBrowser) {
        res.WEBGL_compressed_texture_astc = getExtension(gl, 'WEBGL_compressed_texture_astc');
      }

      // Mobile implementation seems to have performance issues
      if (systemInfo.os !== OS.ANDROID && systemInfo.os !== OS.IOS) {
        res.WEBGL_multi_draw = getExtension(gl, 'WEBGL_multi_draw');
      }

      // UC browser instancing implementation doesn't work
      if (systemInfo.browserType === BrowserType.UC) {
        res.ANGLE_instanced_arrays = null;
      }

      // bytedance ios depth texture implementation doesn't work
      if (BYTEDANCE && systemInfo.os === OS.IOS) {
        res.WEBGL_depth_texture = null;
      }
      if (RUNTIME_BASED) {
        // VAO implementations doesn't work well on some runtime platforms
        if (LINKSURE || QTT || COCOSPLAY || HUAWEI) {
          res.OES_vertex_array_object = null;
        }
      }

      // some earlier version of iOS and android wechat implement gl.detachShader incorrectly
      if (systemInfo.os === OS.IOS && systemInfo.osMainVersion <= 10 || (WECHAT || WECHAT_MINI_PROGRAM) && systemInfo.os === OS.ANDROID) {
        res.destroyShadersImmediately = false;
      }

      // getUniformLocation has always been problematic because the
      // paradigm differs from GLES, and many platforms get it wrong [eyerolling]
      if (WECHAT || WECHAT_MINI_PROGRAM) {
        // wEcHaT just returns { id: -1 } for inactive names
        res.isLocationActive = glLoc => !!glLoc && glLoc.id !== -1;
      }
      if (ALIPAY) {
        // aLiPaY just returns the location number directly on actual devices, and WebGLUniformLocation objects in simulators
        res.isLocationActive = glLoc => !!glLoc && glLoc !== -1 || glLoc === 0;
      }

      // compressedTexSubImage2D too
      if (WECHAT || WECHAT_MINI_PROGRAM) {
        res.noCompressedTexSubImage2D = true;
      }

      // HACK: on Taobao Android, some devices can't query texture float extension correctly, especially Huawei devices
      // the query interface returns null.
      if ((TAOBAO || TAOBAO_MINIGAME) && systemInfo.os === OS.ANDROID) {
        res.OES_texture_half_float = {
          HALF_FLOAT_OES: 36193
        };
        res.OES_texture_half_float_linear = {};
        res.OES_texture_float = {};
        res.OES_texture_float_linear = {};
      }
    }
    if (res.OES_vertex_array_object) {
      res.useVAO = true;
    }
    return res;
  }
  function getContext(canvas) {
    let context = null;
    try {
      const webGLCtxAttribs = {
        alpha: macro.ENABLE_TRANSPARENT_CANVAS,
        antialias: EDITOR || macro.ENABLE_WEBGL_ANTIALIAS,
        depth: true,
        stencil: true,
        premultipliedAlpha: false,
        preserveDrawingBuffer: false,
        powerPreference: 'default',
        failIfMajorPerformanceCaveat: false
      };
      context = canvas.getContext('webgl', webGLCtxAttribs);
    } catch (err) {
      return null;
    }
    return context;
  }
  _export({
    getExtensions: getExtensions,
    getContext: getContext,
    WebGLSwapchain: void 0
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      ALIPAY = _virtualInternal253AconstantsJs.ALIPAY;
      RUNTIME_BASED = _virtualInternal253AconstantsJs.RUNTIME_BASED;
      BYTEDANCE = _virtualInternal253AconstantsJs.BYTEDANCE;
      WECHAT = _virtualInternal253AconstantsJs.WECHAT;
      LINKSURE = _virtualInternal253AconstantsJs.LINKSURE;
      QTT = _virtualInternal253AconstantsJs.QTT;
      COCOSPLAY = _virtualInternal253AconstantsJs.COCOSPLAY;
      HUAWEI = _virtualInternal253AconstantsJs.HUAWEI;
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      TAOBAO = _virtualInternal253AconstantsJs.TAOBAO;
      TAOBAO_MINIGAME = _virtualInternal253AconstantsJs.TAOBAO_MINIGAME;
      WECHAT_MINI_PROGRAM = _virtualInternal253AconstantsJs.WECHAT_MINI_PROGRAM;
    }, function (_palSystemInfo) {
      systemInfo = _palSystemInfo.systemInfo;
    }, function (_webglCommandAllocatorJs) {
      WebGLCommandAllocator = _webglCommandAllocatorJs.WebGLCommandAllocator;
    }, function (_webglStateCacheJs) {
      WebGLStateCache = _webglStateCacheJs.WebGLStateCache;
    }, function (_webglTextureJs) {
      WebGLTexture = _webglTextureJs.WebGLTexture;
    }, function (_baseDefineJs) {
      Format = _baseDefineJs.Format;
      TextureInfo = _baseDefineJs.TextureInfo;
      TextureFlagBit = _baseDefineJs.TextureFlagBit;
      TextureType = _baseDefineJs.TextureType;
      TextureUsageBit = _baseDefineJs.TextureUsageBit;
      BufferTextureCopy = _baseDefineJs.BufferTextureCopy;
    }, function (_baseSwapchainJs) {
      Swapchain = _baseSwapchainJs.Swapchain;
    }, function (_webglDefineJs) {
      WebGLDeviceManager = _webglDefineJs.WebGLDeviceManager;
    }, function (_coreIndexJs) {
      macro = _coreIndexJs.macro;
      warnID = _coreIndexJs.warnID;
      warn = _coreIndexJs.warn;
      debug = _coreIndexJs.debug;
    }, function (_palSystemInfoEnumTypeIndexJs) {
      BrowserType = _palSystemInfoEnumTypeIndexJs.BrowserType;
      OS = _palSystemInfoEnumTypeIndexJs.OS;
    }, function (_webglGpuObjectsJs) {
      IWebGLBlitManager = _webglGpuObjectsJs.IWebGLBlitManager;
    }],
    execute: function () {
      eventWebGLContextLost = 'webglcontextlost';
      _export("WebGLSwapchain", WebGLSwapchain = class WebGLSwapchain extends Swapchain {
        constructor(...args) {
          super(...args);
          this.stateCache = new WebGLStateCache();
          this.cmdAllocator = new WebGLCommandAllocator();
          this.nullTex2D = null;
          this.nullTexCube = null;
          this._canvas = null;
          this._webGLContextLostHandler = null;
          this._extensions = null;
          this._blitManager = null;
        }
        get extensions() {
          return this._extensions;
        }
        get blitManager() {
          return this._blitManager;
        }
        initialize(info) {
          this._canvas = info.windowHandle;
          this._webGLContextLostHandler = this._onWebGLContextLost.bind(this);
          this._canvas.addEventListener(eventWebGLContextLost, this._onWebGLContextLost);
          const gl = WebGLDeviceManager.instance.gl;
          this.stateCache.initialize(WebGLDeviceManager.instance.capabilities.maxTextureUnits, WebGLDeviceManager.instance.capabilities.maxVertexAttributes);
          this._extensions = getExtensions(gl);

          // init states
          initStates(gl);
          const colorFmt = Format.RGBA8;
          let depthStencilFmt = Format.DEPTH_STENCIL;
          let depthBits = gl.getParameter(gl.DEPTH_BITS);
          const stencilBits = gl.getParameter(gl.STENCIL_BITS);
          if (ALIPAY) {
            depthBits = 24;
          }
          if (depthBits && stencilBits) depthStencilFmt = Format.DEPTH_STENCIL;else if (depthBits) depthStencilFmt = Format.DEPTH;
          this._colorTexture = new WebGLTexture();
          this._colorTexture.initAsSwapchainTexture({
            swapchain: this,
            format: colorFmt,
            width: info.width,
            height: info.height
          });
          this._depthStencilTexture = new WebGLTexture();
          this._depthStencilTexture.initAsSwapchainTexture({
            swapchain: this,
            format: depthStencilFmt,
            width: info.width,
            height: info.height
          });

          // create default null texture
          this.nullTex2D = WebGLDeviceManager.instance.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.SAMPLED, Format.RGBA8, 2, 2, TextureFlagBit.GEN_MIPMAP));
          this.nullTexCube = WebGLDeviceManager.instance.createTexture(new TextureInfo(TextureType.CUBE, TextureUsageBit.SAMPLED, Format.RGBA8, 2, 2, TextureFlagBit.GEN_MIPMAP, 6));
          const nullTexRegion = new BufferTextureCopy();
          nullTexRegion.texExtent.width = 2;
          nullTexRegion.texExtent.height = 2;
          const nullTexBuff = new Uint8Array(this.nullTex2D.size);
          nullTexBuff.fill(0);
          WebGLDeviceManager.instance.copyBuffersToTexture([nullTexBuff], this.nullTex2D, [nullTexRegion]);
          nullTexRegion.texSubres.layerCount = 6;
          WebGLDeviceManager.instance.copyBuffersToTexture([nullTexBuff, nullTexBuff, nullTexBuff, nullTexBuff, nullTexBuff, nullTexBuff], this.nullTexCube, [nullTexRegion]);
          this._blitManager = new IWebGLBlitManager();
        }
        destroy() {
          if (this._canvas && this._webGLContextLostHandler) {
            this._canvas.removeEventListener(eventWebGLContextLost, this._webGLContextLostHandler);
            this._webGLContextLostHandler = null;
          }
          if (this.nullTex2D) {
            this.nullTex2D.destroy();
            this.nullTex2D = null;
          }
          if (this.nullTexCube) {
            this.nullTexCube.destroy();
            this.nullTexCube = null;
          }
          if (this._blitManager) {
            this._blitManager.destroy();
            this._blitManager = null;
          }
          this._extensions = null;
          this._canvas = null;
        }
        resize(width, height, surfaceTransform) {
          if (this._colorTexture.width !== width || this._colorTexture.height !== height) {
            debug(`Resizing swapchain: ${width}x${height}`);
            this._canvas.width = width;
            this._canvas.height = height;
            this._colorTexture.resize(width, height);
            this._depthStencilTexture.resize(width, height);
          }
        }
        _onWebGLContextLost(event) {
          warnID(11000);
          warn(event);
          // 2020.9.3: `preventDefault` is not available on some platforms
          // event.preventDefault();
        }
      });
    }
  };
});