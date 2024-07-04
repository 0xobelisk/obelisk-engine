System.register("q-bundled:///fs/cocos/render-scene/core/program-lib.js", ["../../../../virtual/internal%253Aconstants.js", "../../rendering/define.js", "../../gfx/index.js", "./program-utils.js", "../../core/index.js"], function (_export, _context) {
  "use strict";

  var env, SetIndex, globalDescriptorSetLayout, localDescriptorSetLayout, PipelineLayoutInfo, Attribute, UniformBlock, ShaderInfo, Uniform, ShaderStage, DESCRIPTOR_SAMPLER_TYPE, DESCRIPTOR_BUFFER_TYPE, DescriptorSetLayoutBinding, DescriptorSetLayoutInfo, DescriptorType, ShaderStageFlagBit, API, UniformSamplerTexture, UniformStorageBuffer, UniformStorageImage, UniformSampler, UniformTexture, UniformInputAttachment, genHandles, getActiveAttributes, getShaderInstanceName, getSize, getVariantKey, populateMacros, prepareDefines, debug, cclegacy, _dsLayoutInfo, ProgramLib, programLib;
  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
  function insertBuiltinBindings(tmpl, tmplInfo, source, type, outBindings) {
    var target = tmpl.builtins[type];
    var tempBlocks = [];
    var _loop = function _loop() {
      var b = target.blocks[i];
      var info = source.layouts[b.name];
      var binding = info && source.bindings.find(function (bd) {
        return bd.binding === info.binding;
      });
      if (!info || !binding || !(binding.descriptorType & DESCRIPTOR_BUFFER_TYPE)) {
        console.warn("builtin UBO '" + b.name + "' not available!");
        return 1; // continue
      }
      tempBlocks.push(info);
      if (outBindings && !outBindings.includes(binding)) outBindings.push(binding);
    };
    for (var i = 0; i < target.blocks.length; i++) {
      if (_loop()) continue;
    }
    Array.prototype.unshift.apply(tmplInfo.shaderInfo.blocks, tempBlocks);
    var tempSamplerTextures = [];
    var _loop2 = function _loop2() {
      var s = target.samplerTextures[_i];
      var info = source.layouts[s.name];
      var binding = info && source.bindings.find(function (bd) {
        return bd.binding === info.binding;
      });
      if (!info || !binding || !(binding.descriptorType & DESCRIPTOR_SAMPLER_TYPE)) {
        console.warn("builtin samplerTexture '" + s.name + "' not available!");
        return 1; // continue
      }
      tempSamplerTextures.push(info);
      if (outBindings && !outBindings.includes(binding)) outBindings.push(binding);
    };
    for (var _i = 0; _i < target.samplerTextures.length; _i++) {
      if (_loop2()) continue;
    }
    Array.prototype.unshift.apply(tmplInfo.shaderInfo.samplerTextures, tempSamplerTextures);
    if (outBindings) outBindings.sort(function (a, b) {
      return a.binding - b.binding;
    });
  }

  // find those location which won't be affected by defines, and replace by ascending order of existing slot if location > 15
  function findDefineIndependent(source, tmpl, attrMap, locSet) {
    var locExistingRegStr = "layout\\(location = (\\d+)\\)\\s+in.*?\\s(\\w+)[;,\\)]";
    var locExistingReg = new RegExp(locExistingRegStr, 'g');
    var locExistingRes = locExistingReg.exec(source);
    var code = source;
    // layout(location = 3) in mediump vec3 v_normal;
    // 3
    // v_normal
    var _loop3 = function _loop3() {
      var attrName = locExistingRes[2];
      var attrInfo = tmpl.attributes.find(function (ele) {
        return ele.name === attrName;
      });
      // no define required.
      var preExisted = (attrInfo === null || attrInfo === void 0 ? void 0 : attrInfo.defines.length) === 0 || (attrInfo === null || attrInfo === void 0 ? void 0 : attrInfo.defines.every(function (ele) {
        return ele === '';
      }));
      if (preExisted) {
        var loc = parseInt(locExistingRes[1]);
        if (loc > 15) {
          // fill hole by ascending order if location > 15
          var n = 0;
          while (locSet.has(n)) {
            n++;
          }
          loc = n;
          // flatten location index
          var locDefStr = locExistingRes[0].replace(locExistingRes[1], "" + loc);
          code = source.replace(locExistingRes[0], locDefStr);
        }
        locSet.add(loc);
        attrMap.set(locExistingRes[2], loc);
      }
      locExistingRes = locExistingReg.exec(source);
    };
    while (locExistingRes) {
      _loop3();
    }
    return code;
  }

  // replace those which could be affected by defines
  function replaceVertexMutableLocation(source, tmpl, macroInfo, inOrOut, attrMap, locSet) {
    if (locSet === void 0) {
      locSet = new Set();
    }
    var locHolderRegStr = "layout\\(location = ([^\\)]+)\\)\\s+" + inOrOut + ".*?\\s(\\w+)[;,\\)]";
    var locHolderReg = new RegExp(locHolderRegStr, 'g');
    var code = source;
    // layout(location = 3) in mediump vec3 v_normal;
    // 3
    // v_normal
    var locHolder = locHolderReg.exec(source);
    var _loop4 = function _loop4() {
      var attrName = locHolder[2];
      if (!attrMap.has(attrName)) {
        var attrInfo = tmpl.attributes.find(function (ele) {
          return ele.name === attrName;
        });
        var active = true;
        var location = 0;
        // only vertexshader input is checked
        if (inOrOut === 'in') {
          var targetStr = source.slice(0, locHolder.index);
          // attrInfo?.defines store defines need to be satisfied
          // macroInfo stores value of defines
          // '!CC_USE_XXX' starts with a '!' is inverse condition.
          // all defines satisfied?
          active = !!(attrInfo !== null && attrInfo !== void 0 && attrInfo.defines.every(function (defStrIn) {
            var inverseCond = defStrIn.startsWith('!');
            var defStr = inverseCond ? defStrIn.slice(1) : defStrIn;
            var v = macroInfo.find(function (ele) {
              return ele.name === defStr;
            });
            var res = !!v;
            if (v) {
              res = !(v.value === '0' || v.value === 'false' || v.value === 'FALSE');
            }
            res = inverseCond ? !res : res;
            if (res) {
              // #if CC_RENDER_MODE == xx ......
              // 'CC_RENDER_MODE == 1' or ' CC_RENDER_MODE == 1 ||  CC_RENDER_MODE == 4'
              var lastIfRegStr = "[\\n|\\s]+#(?:if|elif)(.*?" + defStr + ".*?(?:(?!#if|#elif).)*)[\\n|\\s]+$";
              var lastIfReg = new RegExp(lastIfRegStr, 'g');
              var lastIfRes = lastIfReg.exec(targetStr);
              if (lastIfRes) {
                var evalStr = lastIfRes[1];
                var evalORElements = evalStr.split('||');
                // simple grammar, no parenthesses support yet.
                var evalRes = evalORElements.some(function (eleOrTestStr) {
                  var evalANDElements = eleOrTestStr.split('&&');
                  return evalANDElements.every(function (eleAndTestStr) {
                    var evalEleRes = true;
                    if (eleAndTestStr.includes('==')) {
                      var opVars = eleAndTestStr.split('==');
                      if (opVars[0].replaceAll(' ', '') === defStr) {
                        evalEleRes = opVars[1].replaceAll(' ', '') === v.value;
                      }
                    } else if (eleAndTestStr.includes('!=')) {
                      var _opVars = eleAndTestStr.split('!=');
                      if (_opVars[0].replaceAll(' ', '') === defStr) {
                        evalEleRes = _opVars[1].replaceAll(' ', '') !== v.value;
                      }
                    } else {
                      // no compare just define or not
                      // expect to be true
                    }
                    return evalEleRes;
                  });
                });
                res = res && evalRes;
              }
            }
            return res;
          }));
        }

        // those didn't pass the check above are deactive, ignore
        if (active) {
          while (locSet.has(location)) {
            location++;
          }
          locSet.add(location);
          // const attrInfo = tmpl.attributes.find((ele) => ele.name === attrName);
          if (attrInfo) {
            attrInfo.location = location;
          }
          attrMap.set(attrName, location);
        }
        var locInstStr = locHolder[0].replace(locHolder[1], "" + location);
        code = code.replace(locHolder[0], locInstStr);
      }
      locHolder = locHolderReg.exec(source);
    };
    while (locHolder) {
      _loop4();
    }
    return code;
  }
  function replaceFragmentLocation(source, inOrOut, attrMap) {
    var code = source;
    var locHolderRegStr = "layout\\(location = ([^\\)]+)\\)\\s+" + inOrOut + ".*?\\s(\\w+)[;,\\)]";
    var locHolderReg = new RegExp(locHolderRegStr, 'g');

    // layout(location = 3) in mediump vec3 v_normal;
    // 3
    // v_normal
    var locHolder = locHolderReg.exec(source);
    while (locHolder) {
      var attrName = locHolder[2];
      if (!attrMap.has(attrName)) {
        var location = 0;
        if (inOrOut === 'in') {
          // {...fragment_in} === {...vertex_out}
          location = attrMap.get(attrName) || 0;
          var locInstStr = locHolder[0].replace(locHolder[1], "" + location);
          code = code.replace(locHolder[0], locInstStr);
        }
      }
      locHolder = locHolderReg.exec(source);
    }
    return code;
  }

  // eslint-disable-next-line max-len
  function flattenShaderLocation(source, tmpl, macroInfo, shaderStage, attrMap) {
    var code = source;
    if (shaderStage === 'vert') {
      var locSet = new Set();
      code = findDefineIndependent(source, tmpl, attrMap, locSet);
      code = replaceVertexMutableLocation(code, tmpl, macroInfo, 'in', attrMap, locSet);
      code = replaceVertexMutableLocation(code, tmpl, macroInfo, 'out', attrMap);
    } else if (shaderStage === 'frag') {
      code = replaceFragmentLocation(code, 'in', attrMap);
    } else {
      // error
    }
    return code;
  }
  function processShaderInfo(tmpl, macroInfo, shaderInfo) {
    // during configuring vertex state when make a pipelinestate
    // webgpu request max location of vertex attribute should not be greater than 15
    // shader source comes from offline effect-compiler can't have sense what macro is activate
    // so here we flatten attribute location in runtime
    var attrMap = new Map();
    shaderInfo.stages[0].source = flattenShaderLocation(shaderInfo.stages[0].source, tmpl, macroInfo, 'vert', attrMap);
    shaderInfo.stages[1].source = flattenShaderLocation(shaderInfo.stages[1].source, tmpl, macroInfo, 'frag', attrMap);
    // don't forget to change location 'shaderInfo.attributes' which comes from serialization
    // to keep consistency with shader source
    for (var i = 0; i < shaderInfo.attributes.length; ++i) {
      var name = shaderInfo.attributes[i].name;
      var loc = 0;
      if (attrMap.has(name)) {
        loc = attrMap.get(name);
        shaderInfo.attributes[i].location = loc;
      }
    }
  }

  /**
   * @en The global maintainer of all shader resources.
   * @zh 维护 shader 资源实例的全局管理器。
   */

  function getDeviceShaderVersion(device) {
    switch (device.gfxAPI) {
      case API.GLES2:
      case API.WEBGL:
        return 'glsl1';
      case API.GLES3:
      case API.WEBGL2:
        return 'glsl3';
      default:
        return 'glsl4';
    }
  }
  _export({
    flattenShaderLocation: flattenShaderLocation,
    getDeviceShaderVersion: getDeviceShaderVersion
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      env = _virtualInternal253AconstantsJs;
    }, function (_renderingDefineJs) {
      SetIndex = _renderingDefineJs.SetIndex;
      globalDescriptorSetLayout = _renderingDefineJs.globalDescriptorSetLayout;
      localDescriptorSetLayout = _renderingDefineJs.localDescriptorSetLayout;
    }, function (_gfxIndexJs) {
      PipelineLayoutInfo = _gfxIndexJs.PipelineLayoutInfo;
      Attribute = _gfxIndexJs.Attribute;
      UniformBlock = _gfxIndexJs.UniformBlock;
      ShaderInfo = _gfxIndexJs.ShaderInfo;
      Uniform = _gfxIndexJs.Uniform;
      ShaderStage = _gfxIndexJs.ShaderStage;
      DESCRIPTOR_SAMPLER_TYPE = _gfxIndexJs.DESCRIPTOR_SAMPLER_TYPE;
      DESCRIPTOR_BUFFER_TYPE = _gfxIndexJs.DESCRIPTOR_BUFFER_TYPE;
      DescriptorSetLayoutBinding = _gfxIndexJs.DescriptorSetLayoutBinding;
      DescriptorSetLayoutInfo = _gfxIndexJs.DescriptorSetLayoutInfo;
      DescriptorType = _gfxIndexJs.DescriptorType;
      ShaderStageFlagBit = _gfxIndexJs.ShaderStageFlagBit;
      API = _gfxIndexJs.API;
      UniformSamplerTexture = _gfxIndexJs.UniformSamplerTexture;
      UniformStorageBuffer = _gfxIndexJs.UniformStorageBuffer;
      UniformStorageImage = _gfxIndexJs.UniformStorageImage;
      UniformSampler = _gfxIndexJs.UniformSampler;
      UniformTexture = _gfxIndexJs.UniformTexture;
      UniformInputAttachment = _gfxIndexJs.UniformInputAttachment;
    }, function (_programUtilsJs) {
      genHandles = _programUtilsJs.genHandles;
      getActiveAttributes = _programUtilsJs.getActiveAttributes;
      getShaderInstanceName = _programUtilsJs.getShaderInstanceName;
      getSize = _programUtilsJs.getSize;
      getVariantKey = _programUtilsJs.getVariantKey;
      populateMacros = _programUtilsJs.populateMacros;
      prepareDefines = _programUtilsJs.prepareDefines;
    }, function (_coreIndexJs) {
      debug = _coreIndexJs.debug;
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      _dsLayoutInfo = new DescriptorSetLayoutInfo();
      _export("ProgramLib", ProgramLib = /*#__PURE__*/function () {
        function ProgramLib() {
          this._templates = {};
          // per shader
          this._cache = {};
          this._templateInfos = {};
        }
        var _proto = ProgramLib.prototype;
        _proto.register = function register(effect) {
          for (var i = 0; i < effect.shaders.length; i++) {
            var tmpl = this.define(effect.shaders[i]);
            tmpl.effectName = effect.name;
          }
          for (var _i2 = 0; _i2 < effect.techniques.length; _i2++) {
            var tech = effect.techniques[_i2];
            for (var j = 0; j < tech.passes.length; j++) {
              var pass = tech.passes[j];
              // grab default property declaration if there is none
              if (pass.propertyIndex !== undefined && pass.properties === undefined) {
                pass.properties = tech.passes[pass.propertyIndex].properties;
              }
            }
          }
        }

        /**
         * @en Register the shader template with the given info
         * @zh 注册 shader 模板。
         */;
        _proto.define = function define(shader) {
          var curTmpl = this._templates[shader.name];
          if (curTmpl && curTmpl.hash === shader.hash) {
            return curTmpl;
          }
          var tmpl = _extends({}, shader);

          // update defines and constant macros
          populateMacros(tmpl);

          // store it
          this._templates[shader.name] = tmpl;
          if (!this._templateInfos[tmpl.hash]) {
            var tmplInfo = {};
            // cache material-specific descriptor set layout
            tmplInfo.samplerStartBinding = tmpl.blocks.length;
            tmplInfo.shaderInfo = new ShaderInfo();
            tmplInfo.blockSizes = [];
            tmplInfo.bindings = [];
            for (var i = 0; i < tmpl.blocks.length; i++) {
              var block = tmpl.blocks[i];
              tmplInfo.blockSizes.push(getSize(block.members));
              tmplInfo.bindings.push(new DescriptorSetLayoutBinding(block.binding, DescriptorType.UNIFORM_BUFFER, 1, block.stageFlags));
              tmplInfo.shaderInfo.blocks.push(new UniformBlock(SetIndex.MATERIAL, block.binding, block.name, block.members.map(function (m) {
                return new Uniform(m.name, m.type, m.count);
              }), 1)); // effect compiler guarantees block count = 1
            }

            for (var _i3 = 0; _i3 < tmpl.samplerTextures.length; _i3++) {
              var samplerTexture = tmpl.samplerTextures[_i3];
              tmplInfo.bindings.push(new DescriptorSetLayoutBinding(samplerTexture.binding, DescriptorType.SAMPLER_TEXTURE, samplerTexture.count, samplerTexture.stageFlags));
              tmplInfo.shaderInfo.samplerTextures.push(new UniformSamplerTexture(SetIndex.MATERIAL, samplerTexture.binding, samplerTexture.name, samplerTexture.type, samplerTexture.count));
            }
            for (var _i4 = 0; _i4 < tmpl.samplers.length; _i4++) {
              var sampler = tmpl.samplers[_i4];
              tmplInfo.bindings.push(new DescriptorSetLayoutBinding(sampler.binding, DescriptorType.SAMPLER, sampler.count, sampler.stageFlags));
              tmplInfo.shaderInfo.samplers.push(new UniformSampler(SetIndex.MATERIAL, sampler.binding, sampler.name, sampler.count));
            }
            for (var _i5 = 0; _i5 < tmpl.textures.length; _i5++) {
              var texture = tmpl.textures[_i5];
              tmplInfo.bindings.push(new DescriptorSetLayoutBinding(texture.binding, DescriptorType.TEXTURE, texture.count, texture.stageFlags));
              tmplInfo.shaderInfo.textures.push(new UniformTexture(SetIndex.MATERIAL, texture.binding, texture.name, texture.type, texture.count));
            }
            for (var _i6 = 0; _i6 < tmpl.buffers.length; _i6++) {
              var buffer = tmpl.buffers[_i6];
              tmplInfo.bindings.push(new DescriptorSetLayoutBinding(buffer.binding, DescriptorType.STORAGE_BUFFER, 1, buffer.stageFlags));
              tmplInfo.shaderInfo.buffers.push(new UniformStorageBuffer(SetIndex.MATERIAL, buffer.binding, buffer.name, 1, buffer.memoryAccess)); // effect compiler guarantees buffer count = 1
            }

            for (var _i7 = 0; _i7 < tmpl.images.length; _i7++) {
              var image = tmpl.images[_i7];
              tmplInfo.bindings.push(new DescriptorSetLayoutBinding(image.binding, DescriptorType.STORAGE_IMAGE, image.count, image.stageFlags));
              tmplInfo.shaderInfo.images.push(new UniformStorageImage(SetIndex.MATERIAL, image.binding, image.name, image.type, image.count, image.memoryAccess));
            }
            for (var _i8 = 0; _i8 < tmpl.subpassInputs.length; _i8++) {
              var subpassInput = tmpl.subpassInputs[_i8];
              tmplInfo.bindings.push(new DescriptorSetLayoutBinding(subpassInput.binding, DescriptorType.INPUT_ATTACHMENT, subpassInput.count, subpassInput.stageFlags));
              tmplInfo.shaderInfo.subpassInputs.push(new UniformInputAttachment(SetIndex.MATERIAL, subpassInput.binding, subpassInput.name, subpassInput.count));
            }
            tmplInfo.gfxAttributes = [];
            for (var _i9 = 0; _i9 < tmpl.attributes.length; _i9++) {
              var attr = tmpl.attributes[_i9];
              tmplInfo.gfxAttributes.push(new Attribute(attr.name, attr.format, attr.isNormalized, 0, attr.isInstanced, attr.location));
            }
            insertBuiltinBindings(tmpl, tmplInfo, localDescriptorSetLayout, 'locals');
            tmplInfo.shaderInfo.stages.push(new ShaderStage(ShaderStageFlagBit.VERTEX, ''));
            tmplInfo.shaderInfo.stages.push(new ShaderStage(ShaderStageFlagBit.FRAGMENT, ''));
            tmplInfo.handleMap = genHandles(tmpl);
            tmplInfo.setLayouts = [];
            this._templateInfos[tmpl.hash] = tmplInfo;
          }
          return tmpl;
        }

        /**
         * @en Gets the shader template with its name
         * @zh 通过名字获取 Shader 模板
         * @param name Target shader name
         */;
        _proto.getTemplate = function getTemplate(name) {
          return this._templates[name];
        }

        /**
         * @en Gets the shader template info with its name
         * @zh 通过名字获取 Shader 模版信息
         * @param name Target shader name
         */;
        _proto.getTemplateInfo = function getTemplateInfo(name) {
          var hash = this._templates[name].hash;
          return this._templateInfos[hash];
        }

        /**
         * @en Gets the pipeline layout of the shader template given its name
         * @zh 通过名字获取 Shader 模板相关联的管线布局
         * @param name Target shader name
         */;
        _proto.getDescriptorSetLayout = function getDescriptorSetLayout(device, name, isLocal) {
          if (isLocal === void 0) {
            isLocal = false;
          }
          var tmpl = this._templates[name];
          var tmplInfo = this._templateInfos[tmpl.hash];
          if (!tmplInfo.setLayouts.length) {
            _dsLayoutInfo.bindings = tmplInfo.bindings;
            tmplInfo.setLayouts[SetIndex.MATERIAL] = device.createDescriptorSetLayout(_dsLayoutInfo);
            _dsLayoutInfo.bindings = localDescriptorSetLayout.bindings;
            tmplInfo.setLayouts[SetIndex.LOCAL] = device.createDescriptorSetLayout(_dsLayoutInfo);
          }
          return tmplInfo.setLayouts[isLocal ? SetIndex.LOCAL : SetIndex.MATERIAL];
        }

        /**
         * @en
         * Does this library has the specified program
         * @zh
         * 当前是否有已注册的指定名字的 shader
         * @param name Target shader name
         */;
        _proto.hasProgram = function hasProgram(name) {
          return this._templates[name] !== undefined;
        }

        /**
         * @en Gets the shader key with the name and a macro combination
         * @zh 根据 shader 名和预处理宏列表获取 shader key。
         * @param name Target shader name
         * @param defines The combination of preprocess macros
         */;
        _proto.getKey = function getKey(name, defines) {
          var tmpl = this._templates[name];
          return getVariantKey(tmpl, defines);
        }

        /**
         * @en Destroy all shader instance match the preprocess macros
         * @zh 销毁所有完全满足指定预处理宏特征的 shader 实例。
         * @param defines The preprocess macros as filter
         */;
        _proto.destroyShaderByDefines = function destroyShaderByDefines(defines) {
          var _this = this;
          var names = Object.keys(defines);
          if (!names.length) {
            return;
          }
          var regexes = names.map(function (cur) {
            var val = defines[cur];
            if (typeof val === 'boolean') {
              val = val ? '1' : '0';
            }
            return new RegExp("" + cur + val);
          });
          var keys = Object.keys(this._cache).filter(function (k) {
            return regexes.every(function (re) {
              return re.test(_this._cache[k].name);
            });
          });
          for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var prog = this._cache[k];
            debug("destroyed shader " + prog.name);
            prog.destroy();
            delete this._cache[k];
          }
        }

        /**
         * @en Gets the shader resource instance with given information
         * @zh 获取指定 shader 的渲染资源实例
         * @param name Shader name
         * @param defines Preprocess macros
         * @param pipeline The [[RenderPipeline]] which owns the render command
         * @param key The shader cache key, if already known
         */;
        _proto.getGFXShader = function getGFXShader(device, name, defines, pipeline, key) {
          Object.assign(defines, pipeline.macros);
          if (!key) key = this.getKey(name, defines);
          var res = this._cache[key];
          if (res) {
            return res;
          }
          var tmpl = this._templates[name];
          var tmplInfo = this._templateInfos[tmpl.hash];
          if (!tmplInfo.pipelineLayout) {
            this.getDescriptorSetLayout(device, name); // ensure set layouts have been created
            insertBuiltinBindings(tmpl, tmplInfo, globalDescriptorSetLayout, 'globals');
            tmplInfo.setLayouts[SetIndex.GLOBAL] = pipeline.descriptorSetLayout;
            tmplInfo.pipelineLayout = device.createPipelineLayout(new PipelineLayoutInfo(tmplInfo.setLayouts));
          }
          var macroArray = prepareDefines(defines, tmpl.defines);
          var prefix = pipeline.constantMacros + tmpl.constantMacros + macroArray.reduce(function (acc, cur) {
            return acc + "#define " + cur.name + " " + cur.value + "\n";
          }, '');
          var src = tmpl.glsl3;
          var deviceShaderVersion = getDeviceShaderVersion(device);
          if (deviceShaderVersion) {
            src = tmpl[deviceShaderVersion];
          } else {
            console.error('Invalid GFX API!');
          }
          tmplInfo.shaderInfo.stages[0].source = prefix + src.vert;
          tmplInfo.shaderInfo.stages[1].source = prefix + src.frag;

          // strip out the active attributes only, instancing depend on this
          tmplInfo.shaderInfo.attributes = getActiveAttributes(tmpl, tmplInfo.gfxAttributes, defines);
          tmplInfo.shaderInfo.name = getShaderInstanceName(name, macroArray);
          var shaderInfo = tmplInfo.shaderInfo;
          if (env.WEBGPU) {
            // keep 'tmplInfo.shaderInfo' originally
            shaderInfo = new ShaderInfo();
            shaderInfo.copy(tmplInfo.shaderInfo);
            processShaderInfo(tmpl, macroArray, shaderInfo);
          }
          return this._cache[key] = device.createShader(shaderInfo);
        };
        return ProgramLib;
      }());
      _export("programLib", programLib = new ProgramLib());
      cclegacy.programLib = programLib;
    }
  };
});