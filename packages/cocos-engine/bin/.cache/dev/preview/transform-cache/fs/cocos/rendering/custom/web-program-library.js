System.register("q-bundled:///fs/cocos/rendering/custom/web-program-library.js", ["../../gfx/index.js", "../../render-scene/core/program-utils.js", "../../render-scene/index.js", "./layout-graph.js", "./types.js", "./web-types.js", "./layout-graph-utils.js", "../../core/platform/debug.js", "../define.js"], function (_export, _context) {
  "use strict";

  var Attribute, DescriptorType, DESCRIPTOR_BUFFER_TYPE, DESCRIPTOR_SAMPLER_TYPE, MemoryAccessBit, PipelineLayoutInfo, ShaderInfo, ShaderStage, ShaderStageFlagBit, Type, Uniform, UniformBlock, UniformInputAttachment, UniformSampler, UniformSamplerTexture, UniformStorageBuffer, UniformStorageImage, UniformTexture, deviceManager, DescriptorSetLayoutInfo, DescriptorSetInfo, genHandles, getActiveAttributes, getCombinationDefines, getShaderInstanceName, getSize, getVariantKey, populateMacros, prepareDefines, getDeviceShaderVersion, DescriptorBlockData, DescriptorData, DescriptorSetData, DescriptorSetLayoutData, LayoutGraphDataValue, ShaderProgramData, DescriptorTypeOrder, UpdateFrequency, ProgramGroup, ProgramInfo, getCustomPassID, getCustomPhaseID, getOrCreateDescriptorSetLayout, getEmptyDescriptorSetLayout, getEmptyPipelineLayout, initializeDescriptorSetLayoutInfo, makeDescriptorSetLayoutData, getDescriptorSetLayout, getOrCreateDescriptorID, getDescriptorTypeOrder, _getProgramID, _getDescriptorNameID, _getDescriptorName, INVALID_ID, ENABLE_SUBPASS, getCustomSubpassID, generateConstantMacros, populatePipelineLayoutInfo, assert, error, UBOSkinning, localDescriptorSetLayout, _setIndex, WebProgramProxy, WebProgramLibrary;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable no-console */ /****************************************************************************
                                                                                                                                                                                                                                                                                                                                                                                       Copyright (c) 2021-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                       http://www.cocos.com
                                                                                                                                                                                                                                                                                                                                                                                      
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
                                                                                                                                                                                                                                                                                                                                                                                      ****************************************************************************/ /* eslint-disable max-len */
  // make IProgramInfo from IShaderInfo
  function makeProgramInfo(effectName, shader) {
    var programInfo = _extends({}, shader);
    programInfo.effectName = effectName;
    populateMacros(programInfo);
    return programInfo;
  }
  function findBinding(shaderInfo, name) {
    for (var _iterator = _createForOfIteratorHelperLoose(shaderInfo.blocks), _step; !(_step = _iterator()).done;) {
      var v = _step.value;
      if (v.name === name) {
        return {
          set: v.set,
          binding: v.binding
        };
      }
    }
    for (var _iterator2 = _createForOfIteratorHelperLoose(shaderInfo.buffers), _step2; !(_step2 = _iterator2()).done;) {
      var _v = _step2.value;
      if (_v.name === name) {
        return {
          set: _v.set,
          binding: _v.binding
        };
      }
    }
    for (var _iterator3 = _createForOfIteratorHelperLoose(shaderInfo.samplerTextures), _step3; !(_step3 = _iterator3()).done;) {
      var _v2 = _step3.value;
      if (_v2.name === name) {
        return {
          set: _v2.set,
          binding: _v2.binding
        };
      }
    }
    for (var _iterator4 = _createForOfIteratorHelperLoose(shaderInfo.samplers), _step4; !(_step4 = _iterator4()).done;) {
      var _v3 = _step4.value;
      if (_v3.name === name) {
        return {
          set: _v3.set,
          binding: _v3.binding
        };
      }
    }
    for (var _iterator5 = _createForOfIteratorHelperLoose(shaderInfo.textures), _step5; !(_step5 = _iterator5()).done;) {
      var _v4 = _step5.value;
      if (_v4.name === name) {
        return {
          set: _v4.set,
          binding: _v4.binding
        };
      }
    }
    for (var _iterator6 = _createForOfIteratorHelperLoose(shaderInfo.images), _step6; !(_step6 = _iterator6()).done;) {
      var _v5 = _step6.value;
      if (_v5.name === name) {
        return {
          set: _v5.set,
          binding: _v5.binding
        };
      }
    }
    for (var _iterator7 = _createForOfIteratorHelperLoose(shaderInfo.subpassInputs), _step7; !(_step7 = _iterator7()).done;) {
      var _v6 = _step7.value;
      if (_v6.name === name) {
        return {
          set: _v6.set,
          binding: _v6.binding
        };
      }
    }
    // eslint-disable-next-line no-console
    throw error('binding not found in shaderInfo!');
  }
  function overwriteShaderSourceBinding(shaderInfo, source) {
    var code = source;
    var samplerExp = /layout\s*\(([^)])+\)\s+uniform\s+(\b\w+\b\s+)?sampler(\w+)\s+(\b\w+\b)/g;
    var samplerIter = samplerExp.exec(code);
    while (samplerIter) {
      var name = samplerIter[4];
      var _findBinding = findBinding(shaderInfo, name),
        set = _findBinding.set,
        binding = _findBinding.binding;
      var precStr = samplerIter[2] ? samplerIter[2] : '';
      var replaceStr = "layout(set = " + set + ", binding = " + binding + ") uniform " + precStr + " sampler" + samplerIter[3] + " " + samplerIter[4];
      code = code.replace(samplerIter[0], replaceStr);
      samplerIter = samplerExp.exec(code);
    }
    var blockExp = /layout\s*\(([^)]+)\)\s*(readonly|writeonly)?\s*\b((uniform\s*|buffer\s*|image2D\s*){1,2})\b\s*(\b\w+\b)\s*[{;]/g;
    var blockIter = blockExp.exec(code);
    while (blockIter) {
      var _name = blockIter[5];
      var _findBinding2 = findBinding(shaderInfo, _name),
        _set = _findBinding2.set,
        _binding = _findBinding2.binding;
      var accessStr = blockIter[2] ? blockIter[2] : '';
      var endStr = ' {';
      if (blockIter[3].includes('image')) {
        endStr = ";";
      }
      var desc = blockIter[1];
      desc = desc.replace(/set\s*=\s*\d+/g, "set = " + _set);
      desc = desc.replace(/binding\s*=\s*\d+/g, "binding = " + _binding);
      var _replaceStr = "layout(" + desc + ") " + accessStr + " " + blockIter[3] + " " + blockIter[5] + endStr;
      code = code.replace(blockIter[0], _replaceStr);
      blockIter = blockExp.exec(code);
    }
    return code;
  }
  function overwriteShaderProgramBinding(shaderInfo, programInfo) {
    var version = getDeviceShaderVersion(deviceManager.gfxDevice);
    if (version !== 'glsl4') {
      return;
    }
    if (programInfo.glsl4.vert) {
      programInfo.glsl4.vert = overwriteShaderSourceBinding(shaderInfo, programInfo.glsl4.vert);
    }
    if (programInfo.glsl4.frag) {
      programInfo.glsl4.frag = overwriteShaderSourceBinding(shaderInfo, programInfo.glsl4.frag);
    }
    if (programInfo.glsl4.compute) {
      programInfo.glsl4.compute = overwriteShaderSourceBinding(shaderInfo, programInfo.glsl4.compute);
    }
  }

  // overwrite IProgramInfo using gfx.ShaderInfo
  function overwriteProgramBlockInfo(shaderInfo, programInfo) {
    overwriteShaderProgramBinding(shaderInfo, programInfo);
    var set = _setIndex[UpdateFrequency.PER_BATCH];
    for (var _iterator8 = _createForOfIteratorHelperLoose(programInfo.blocks), _step8; !(_step8 = _iterator8()).done;) {
      var block = _step8.value;
      var found = false;
      for (var _iterator9 = _createForOfIteratorHelperLoose(shaderInfo.blocks), _step9; !(_step9 = _iterator9()).done;) {
        var src = _step9.value;
        if (src.set !== set) {
          continue;
        }
        if (src.name === block.name) {
          block.binding = src.binding;
          found = true;
          break;
        }
      }
      if (!found) {
        error("Block " + block.name + " not found in shader " + shaderInfo.name);
      }
    }
  }

  // add descriptor to size-reserved descriptor set
  function populateGroupedShaderInfo(layout, descriptorInfo, set, shaderInfo, blockSizes) {
    for (var _iterator10 = _createForOfIteratorHelperLoose(layout.descriptorBlocks), _step10; !(_step10 = _iterator10()).done;) {
      var descriptorBlock = _step10.value;
      var visibility = descriptorBlock.visibility;
      var binding = descriptorBlock.offset;
      switch (descriptorBlock.type) {
        case DescriptorTypeOrder.UNIFORM_BUFFER:
          for (var _iterator11 = _createForOfIteratorHelperLoose(descriptorInfo.blocks), _step11; !(_step11 = _iterator11()).done;) {
            var block = _step11.value;
            if (block.stageFlags !== visibility) {
              continue;
            }
            blockSizes.push(getSize(block.members));
            shaderInfo.blocks.push(new UniformBlock(set, binding, block.name, block.members.map(function (m) {
              return new Uniform(m.name, m.type, m.count);
            }), 1) // count is always 1 for UniformBlock
            );

            ++binding;
          }
          break;
        case DescriptorTypeOrder.DYNAMIC_UNIFORM_BUFFER:
          // not implemented yet
          break;
        case DescriptorTypeOrder.SAMPLER_TEXTURE:
          for (var _iterator12 = _createForOfIteratorHelperLoose(descriptorInfo.samplerTextures), _step12; !(_step12 = _iterator12()).done;) {
            var tex = _step12.value;
            if (tex.stageFlags !== visibility) {
              continue;
            }
            shaderInfo.samplerTextures.push(new UniformSamplerTexture(set, binding, tex.name, tex.type, tex.count));
            ++binding;
          }
          break;
        case DescriptorTypeOrder.SAMPLER:
          for (var _iterator13 = _createForOfIteratorHelperLoose(descriptorInfo.samplers), _step13; !(_step13 = _iterator13()).done;) {
            var sampler = _step13.value;
            if (sampler.stageFlags !== visibility) {
              continue;
            }
            shaderInfo.samplers.push(new UniformSampler(set, binding, sampler.name, sampler.count));
            ++binding;
          }
          break;
        case DescriptorTypeOrder.TEXTURE:
          for (var _iterator14 = _createForOfIteratorHelperLoose(descriptorInfo.textures), _step14; !(_step14 = _iterator14()).done;) {
            var texture = _step14.value;
            if (texture.stageFlags !== visibility) {
              continue;
            }
            shaderInfo.textures.push(new UniformTexture(set, binding, texture.name, texture.type, texture.count));
            ++binding;
          }
          break;
        case DescriptorTypeOrder.STORAGE_BUFFER:
          for (var _iterator15 = _createForOfIteratorHelperLoose(descriptorInfo.buffers), _step15; !(_step15 = _iterator15()).done;) {
            var buffer = _step15.value;
            if (buffer.stageFlags !== visibility) {
              continue;
            }
            shaderInfo.buffers.push(new UniformStorageBuffer(set, binding, buffer.name, 1, buffer.memoryAccess)); // effect compiler guarantees buffer count = 1
            ++binding;
          }
          break;
        case DescriptorTypeOrder.DYNAMIC_STORAGE_BUFFER:
          // not implemented yet
          break;
        case DescriptorTypeOrder.STORAGE_IMAGE:
          for (var _iterator16 = _createForOfIteratorHelperLoose(descriptorInfo.images), _step16; !(_step16 = _iterator16()).done;) {
            var image = _step16.value;
            if (image.stageFlags !== visibility) {
              continue;
            }
            shaderInfo.images.push(new UniformStorageImage(set, binding, image.name, image.type, image.count, image.memoryAccess));
            ++binding;
          }
          break;
        case DescriptorTypeOrder.INPUT_ATTACHMENT:
          for (var _iterator17 = _createForOfIteratorHelperLoose(descriptorInfo.subpassInputs), _step17; !(_step17 = _iterator17()).done;) {
            var subpassInput = _step17.value;
            if (subpassInput.stageFlags !== visibility) {
              continue;
            }
            shaderInfo.subpassInputs.push(new UniformInputAttachment(set, subpassInput.binding, subpassInput.name, subpassInput.count));
            ++binding;
          }
          break;
        default:
      }
    }
  }

  // add merged descriptor to gfx.ShaderInfo
  function populateMergedShaderInfo(valueNames, layout, set, shaderInfo, blockSizes) {
    for (var _iterator18 = _createForOfIteratorHelperLoose(layout.descriptorBlocks), _step18; !(_step18 = _iterator18()).done;) {
      var descriptorBlock = _step18.value;
      var binding = descriptorBlock.offset;
      switch (descriptorBlock.type) {
        case DescriptorTypeOrder.UNIFORM_BUFFER:
          for (var _iterator19 = _createForOfIteratorHelperLoose(descriptorBlock.descriptors), _step19; !(_step19 = _iterator19()).done;) {
            var block = _step19.value;
            var uniformBlock = layout.uniformBlocks.get(block.descriptorID);
            if (uniformBlock === undefined) {
              error("Failed to find uniform block " + block.descriptorID + " in layout");
              continue;
            }
            blockSizes.push(getSize(uniformBlock.members));
            shaderInfo.blocks.push(new UniformBlock(set, binding, valueNames[block.descriptorID], uniformBlock.members.map(function (m) {
              return new Uniform(m.name, m.type, m.count);
            }), 1) // count is always 1 for UniformBlock
            );

            ++binding;
          }
          if (binding !== descriptorBlock.offset + descriptorBlock.capacity) {
            error("Uniform buffer binding mismatch for set " + set);
          }
          break;
        case DescriptorTypeOrder.DYNAMIC_UNIFORM_BUFFER:
          // not implemented yet
          break;
        case DescriptorTypeOrder.SAMPLER_TEXTURE:
          for (var _iterator20 = _createForOfIteratorHelperLoose(descriptorBlock.descriptors), _step20; !(_step20 = _iterator20()).done;) {
            var tex = _step20.value;
            shaderInfo.samplerTextures.push(new UniformSamplerTexture(set, binding, valueNames[tex.descriptorID], tex.type, tex.count));
            ++binding;
          }
          break;
        case DescriptorTypeOrder.SAMPLER:
          for (var _iterator21 = _createForOfIteratorHelperLoose(descriptorBlock.descriptors), _step21; !(_step21 = _iterator21()).done;) {
            var sampler = _step21.value;
            shaderInfo.samplers.push(new UniformSampler(set, binding, valueNames[sampler.descriptorID], sampler.count));
            ++binding;
          }
          break;
        case DescriptorTypeOrder.TEXTURE:
          for (var _iterator22 = _createForOfIteratorHelperLoose(descriptorBlock.descriptors), _step22; !(_step22 = _iterator22()).done;) {
            var texture = _step22.value;
            shaderInfo.textures.push(new UniformTexture(set, binding, valueNames[texture.descriptorID], texture.type, texture.count));
            ++binding;
          }
          break;
        case DescriptorTypeOrder.STORAGE_BUFFER:
          for (var _iterator23 = _createForOfIteratorHelperLoose(descriptorBlock.descriptors), _step23; !(_step23 = _iterator23()).done;) {
            var buffer = _step23.value;
            shaderInfo.buffers.push(new UniformStorageBuffer(set, binding, valueNames[buffer.descriptorID], 1, MemoryAccessBit.READ_WRITE /*buffer.memoryAccess*/)); // effect compiler guarantees buffer count = 1
            ++binding;
          }
          break;
        case DescriptorTypeOrder.DYNAMIC_STORAGE_BUFFER:
          // not implemented yet
          break;
        case DescriptorTypeOrder.STORAGE_IMAGE:
          for (var _iterator24 = _createForOfIteratorHelperLoose(descriptorBlock.descriptors), _step24; !(_step24 = _iterator24()).done;) {
            var image = _step24.value;
            shaderInfo.images.push(new UniformStorageImage(set, binding, valueNames[image.descriptorID], image.type, image.count, MemoryAccessBit.READ_WRITE /*image.memoryAccess*/));

            ++binding;
          }
          break;
        case DescriptorTypeOrder.INPUT_ATTACHMENT:
          for (var _iterator25 = _createForOfIteratorHelperLoose(descriptorBlock.descriptors), _step25; !(_step25 = _iterator25()).done;) {
            var subpassInput = _step25.value;
            shaderInfo.subpassInputs.push(new UniformInputAttachment(set, binding, valueNames[subpassInput.descriptorID], subpassInput.count));
            ++binding;
          }
          break;
        default:
      }
    }
  }

  // add descriptor from effect to gfx.ShaderInfo
  function populateShaderInfo(descriptorInfo, set, shaderInfo, blockSizes) {
    for (var i = 0; i < descriptorInfo.blocks.length; i++) {
      var block = descriptorInfo.blocks[i];
      blockSizes.push(getSize(block.members));
      shaderInfo.blocks.push(new UniformBlock(set, block.binding, block.name, block.members.map(function (m) {
        return new Uniform(m.name, m.type, m.count);
      }), 1)); // effect compiler guarantees block count = 1
    }

    for (var _i = 0; _i < descriptorInfo.samplerTextures.length; _i++) {
      var samplerTexture = descriptorInfo.samplerTextures[_i];
      shaderInfo.samplerTextures.push(new UniformSamplerTexture(set, samplerTexture.binding, samplerTexture.name, samplerTexture.type, samplerTexture.count));
    }
    for (var _i2 = 0; _i2 < descriptorInfo.samplers.length; _i2++) {
      var sampler = descriptorInfo.samplers[_i2];
      shaderInfo.samplers.push(new UniformSampler(set, sampler.binding, sampler.name, sampler.count));
    }
    for (var _i3 = 0; _i3 < descriptorInfo.textures.length; _i3++) {
      var texture = descriptorInfo.textures[_i3];
      shaderInfo.textures.push(new UniformTexture(set, texture.binding, texture.name, texture.type, texture.count));
    }
    for (var _i4 = 0; _i4 < descriptorInfo.buffers.length; _i4++) {
      var buffer = descriptorInfo.buffers[_i4];
      shaderInfo.buffers.push(new UniformStorageBuffer(set, buffer.binding, buffer.name, 1, buffer.memoryAccess)); // effect compiler guarantees buffer count = 1
    }

    for (var _i5 = 0; _i5 < descriptorInfo.images.length; _i5++) {
      var image = descriptorInfo.images[_i5];
      shaderInfo.images.push(new UniformStorageImage(set, image.binding, image.name, image.type, image.count, image.memoryAccess));
    }
    for (var _i6 = 0; _i6 < descriptorInfo.subpassInputs.length; _i6++) {
      var subpassInput = descriptorInfo.subpassInputs[_i6];
      shaderInfo.subpassInputs.push(new UniformInputAttachment(set, subpassInput.binding, subpassInput.name, subpassInput.count));
    }
  }

  // add fixed local descriptors to gfx.ShaderInfo
  function populateLocalShaderInfo(target, source, shaderInfo, blockSizes) {
    var set = _setIndex[UpdateFrequency.PER_INSTANCE];
    var _loop = function _loop() {
      var block = target.blocks[i];
      var info = source.layouts[block.name];
      var binding = info && source.bindings.find(function (bd) {
        return bd.binding === info.binding;
      });
      if (!info || !binding || !(binding.descriptorType & DESCRIPTOR_BUFFER_TYPE)) {
        console.warn("builtin UBO '" + block.name + "' not available!");
        return 1; // continue
      }
      blockSizes.push(getSize(block.members));
      shaderInfo.blocks.push(new UniformBlock(set, binding.binding, block.name, block.members.map(function (m) {
        return new Uniform(m.name, m.type, m.count);
      }), 1)); // effect compiler guarantees block count = 1
    };
    for (var i = 0; i < target.blocks.length; i++) {
      if (_loop()) continue;
    }
    var _loop2 = function _loop2() {
      var samplerTexture = target.samplerTextures[_i7];
      var info = source.layouts[samplerTexture.name];
      var binding = info && source.bindings.find(function (bd) {
        return bd.binding === info.binding;
      });
      if (!info || !binding || !(binding.descriptorType & DESCRIPTOR_SAMPLER_TYPE)) {
        console.warn("builtin samplerTexture '" + samplerTexture.name + "' not available!");
        return 1; // continue
      }
      shaderInfo.samplerTextures.push(new UniformSamplerTexture(set, binding.binding, samplerTexture.name, samplerTexture.type, samplerTexture.count));
    };
    for (var _i7 = 0; _i7 < target.samplerTextures.length; _i7++) {
      if (_loop2()) continue;
    }
  }
  function getIDescriptorSetLayoutInfoUniformBlockCapacity(info) {
    var capacity = 0;
    for (var _iterator26 = _createForOfIteratorHelperLoose(info.bindings), _step26; !(_step26 = _iterator26()).done;) {
      var binding = _step26.value;
      if (binding.descriptorType === DescriptorType.UNIFORM_BUFFER || binding.descriptorType === DescriptorType.DYNAMIC_UNIFORM_BUFFER) {
        capacity += binding.count;
      }
    }
    return capacity;
  }
  function getIDescriptorSetLayoutInfoSamplerTextureCapacity(info) {
    var capacity = 0;
    for (var _iterator27 = _createForOfIteratorHelperLoose(info.bindings), _step27; !(_step27 = _iterator27()).done;) {
      var binding = _step27.value;
      if (binding.descriptorType !== DescriptorType.UNIFORM_BUFFER && binding.descriptorType !== DescriptorType.DYNAMIC_UNIFORM_BUFFER) {
        capacity += binding.count;
      }
    }
    return capacity;
  }
  function setFlattenedUniformBlockBinding(setOffsets, descriptors) {
    for (var _iterator28 = _createForOfIteratorHelperLoose(descriptors), _step28; !(_step28 = _iterator28()).done;) {
      var d = _step28.value;
      d.flattened = setOffsets[d.set] + d.binding;
    }
  }
  function setFlattenedSamplerTextureBinding(setOffsets, uniformBlockCapacities, descriptors) {
    for (var _iterator29 = _createForOfIteratorHelperLoose(descriptors), _step29; !(_step29 = _iterator29()).done;) {
      var d = _step29.value;
      d.flattened = setOffsets[d.set] + d.binding - uniformBlockCapacities[d.set];
    }
  }
  function calculateFlattenedBinding(descriptorSets, fixedInstanceDescriptorSetLayout, shaderInfo) {
    // Descriptors of UniformBlock starts from 0, and Descriptors of SamplerTexture starts from the end of UniformBlock.
    var uniformBlockCapacities = new Array(4);
    {
      var _descriptorSets$Updat, _descriptorSets$Updat2, _descriptorSets$Updat3, _descriptorSets$Updat4;
      var passCapacity = ((_descriptorSets$Updat = descriptorSets[UpdateFrequency.PER_PASS]) === null || _descriptorSets$Updat === void 0 ? void 0 : _descriptorSets$Updat.uniformBlockCapacity) || 0;
      var phaseCapacity = ((_descriptorSets$Updat2 = descriptorSets[UpdateFrequency.PER_PHASE]) === null || _descriptorSets$Updat2 === void 0 ? void 0 : _descriptorSets$Updat2.uniformBlockCapacity) || 0;
      var batchCapacity = ((_descriptorSets$Updat3 = descriptorSets[UpdateFrequency.PER_BATCH]) === null || _descriptorSets$Updat3 === void 0 ? void 0 : _descriptorSets$Updat3.uniformBlockCapacity) || 0; // dynamic size
      var instanceCapacity = fixedInstanceDescriptorSetLayout ? getIDescriptorSetLayoutInfoUniformBlockCapacity(fixedInstanceDescriptorSetLayout) : ((_descriptorSets$Updat4 = descriptorSets[UpdateFrequency.PER_INSTANCE]) === null || _descriptorSets$Updat4 === void 0 ? void 0 : _descriptorSets$Updat4.uniformBlockCapacity) || 0;

      // update uniform block capacities
      uniformBlockCapacities[_setIndex[UpdateFrequency.PER_PASS]] = passCapacity;
      uniformBlockCapacities[_setIndex[UpdateFrequency.PER_PHASE]] = phaseCapacity;
      uniformBlockCapacities[_setIndex[UpdateFrequency.PER_BATCH]] = batchCapacity;
      uniformBlockCapacities[_setIndex[UpdateFrequency.PER_INSTANCE]] = instanceCapacity;

      // calculate uniform block offsets
      var passOffset = 0;
      var phaseOffset = passOffset + passCapacity;
      var instanceOffset = phaseOffset + phaseCapacity;
      var batchOffset = instanceOffset + instanceCapacity;

      // save uniform block offsets by set index
      var uniformBlockOffsets = new Array(4);
      uniformBlockOffsets[_setIndex[UpdateFrequency.PER_PASS]] = passOffset;
      uniformBlockOffsets[_setIndex[UpdateFrequency.PER_PHASE]] = phaseOffset;
      uniformBlockOffsets[_setIndex[UpdateFrequency.PER_BATCH]] = batchOffset;
      uniformBlockOffsets[_setIndex[UpdateFrequency.PER_INSTANCE]] = instanceOffset;

      // update flattened uniform block binding
      setFlattenedUniformBlockBinding(uniformBlockOffsets, shaderInfo.blocks);
    }
    {
      var _descriptorSets$Updat5, _descriptorSets$Updat6, _descriptorSets$Updat7;
      // calculate sampler texture capacities
      var _passCapacity = ((_descriptorSets$Updat5 = descriptorSets[UpdateFrequency.PER_PASS]) === null || _descriptorSets$Updat5 === void 0 ? void 0 : _descriptorSets$Updat5.samplerTextureCapacity) || 0;
      var _phaseCapacity = ((_descriptorSets$Updat6 = descriptorSets[UpdateFrequency.PER_PHASE]) === null || _descriptorSets$Updat6 === void 0 ? void 0 : _descriptorSets$Updat6.samplerTextureCapacity) || 0;
      // const batchCapacity = descriptorSets[UpdateFrequency.PER_BATCH]?.capacity || 0; // dynamic size
      var _instanceCapacity = fixedInstanceDescriptorSetLayout ? getIDescriptorSetLayoutInfoSamplerTextureCapacity(fixedInstanceDescriptorSetLayout) : ((_descriptorSets$Updat7 = descriptorSets[UpdateFrequency.PER_INSTANCE]) === null || _descriptorSets$Updat7 === void 0 ? void 0 : _descriptorSets$Updat7.samplerTextureCapacity) || 0;

      // calculate sampler texture offsets
      var _passOffset = 0;
      var _phaseOffset = _passOffset + _passCapacity;
      var _instanceOffset = _phaseOffset + _phaseCapacity;
      var _batchOffset = _instanceOffset + _instanceCapacity;

      // save sampler texture offsets by set index
      var samplerTextureOffsets = new Array(4);
      samplerTextureOffsets[_setIndex[UpdateFrequency.PER_PASS]] = _passOffset;
      samplerTextureOffsets[_setIndex[UpdateFrequency.PER_PHASE]] = _phaseOffset;
      samplerTextureOffsets[_setIndex[UpdateFrequency.PER_BATCH]] = _batchOffset;
      samplerTextureOffsets[_setIndex[UpdateFrequency.PER_INSTANCE]] = _instanceOffset;

      // update flattened sampler texture binding
      setFlattenedSamplerTextureBinding(samplerTextureOffsets, uniformBlockCapacities, shaderInfo.samplerTextures);
    }
  }

  // make gfx.ShaderInfo
  function makeShaderInfo(lg, passLayouts, phaseLayouts, srcShaderInfo, programData, fixedLocal) {
    var descriptorSets = [null, null, null, null];
    var fixedInstanceDescriptorSetLayout = null;
    var shaderInfo = new ShaderInfo();
    var blockSizes = new Array();
    {
      // pass
      var passLayout = passLayouts.descriptorSets.get(UpdateFrequency.PER_PASS);
      if (passLayout) {
        descriptorSets[UpdateFrequency.PER_PASS] = passLayout.descriptorSetLayoutData;
        populateMergedShaderInfo(lg.valueNames, passLayout.descriptorSetLayoutData, _setIndex[UpdateFrequency.PER_PASS], shaderInfo, blockSizes);
      }
    }
    {
      // phase
      var phaseLayout = phaseLayouts.descriptorSets.get(UpdateFrequency.PER_PHASE);
      if (phaseLayout) {
        descriptorSets[UpdateFrequency.PER_PHASE] = phaseLayout.descriptorSetLayoutData;
        populateMergedShaderInfo(lg.valueNames, phaseLayout.descriptorSetLayoutData, _setIndex[UpdateFrequency.PER_PHASE], shaderInfo, blockSizes);
      }
    }
    {
      // batch
      var batchInfo = srcShaderInfo.descriptors[UpdateFrequency.PER_BATCH];
      if (programData) {
        var perBatch = programData.layout.descriptorSets.get(UpdateFrequency.PER_BATCH);
        if (perBatch) {
          descriptorSets[UpdateFrequency.PER_BATCH] = perBatch.descriptorSetLayoutData;
          populateMergedShaderInfo(lg.valueNames, perBatch.descriptorSetLayoutData, _setIndex[UpdateFrequency.PER_BATCH], shaderInfo, blockSizes);
        }
      } else {
        var batchLayout = phaseLayouts.descriptorSets.get(UpdateFrequency.PER_BATCH);
        if (batchLayout) {
          descriptorSets[UpdateFrequency.PER_BATCH] = batchLayout.descriptorSetLayoutData;
          populateGroupedShaderInfo(batchLayout.descriptorSetLayoutData, batchInfo, _setIndex[UpdateFrequency.PER_BATCH], shaderInfo, blockSizes);
        }
      }
    }
    {
      // instance
      var instanceInfo = srcShaderInfo.descriptors[UpdateFrequency.PER_INSTANCE];
      if (programData) {
        if (fixedLocal) {
          fixedInstanceDescriptorSetLayout = localDescriptorSetLayout;
          populateLocalShaderInfo(instanceInfo, localDescriptorSetLayout, shaderInfo, blockSizes);
        } else {
          var perInstance = programData.layout.descriptorSets.get(UpdateFrequency.PER_INSTANCE);
          if (perInstance) {
            descriptorSets[UpdateFrequency.PER_INSTANCE] = perInstance.descriptorSetLayoutData;
            populateMergedShaderInfo(lg.valueNames, perInstance.descriptorSetLayoutData, _setIndex[UpdateFrequency.PER_INSTANCE], shaderInfo, blockSizes);
          }
        }
      } else {
        var instanceLayout = phaseLayouts.descriptorSets.get(UpdateFrequency.PER_INSTANCE);
        if (instanceLayout) {
          descriptorSets[UpdateFrequency.PER_INSTANCE] = instanceLayout.descriptorSetLayoutData;
          populateGroupedShaderInfo(instanceLayout.descriptorSetLayoutData, instanceInfo, _setIndex[UpdateFrequency.PER_INSTANCE], shaderInfo, blockSizes);
        }
      }
    }
    calculateFlattenedBinding(descriptorSets, fixedInstanceDescriptorSetLayout, shaderInfo);
    shaderInfo.stages.push(new ShaderStage(ShaderStageFlagBit.VERTEX, ''));
    shaderInfo.stages.push(new ShaderStage(ShaderStageFlagBit.FRAGMENT, ''));
    return [shaderInfo, blockSizes];
  }
  function getGLSLSource(info, version) {
    if (version === 'glsl1') return info.glsl1;
    if (version === 'glsl3') return info.glsl3;
    if (version === 'glsl4') return info.glsl4;
    return {
      vert: '',
      frag: ''
    };
  }
  // find name and type from local descriptor set info
  function getDescriptorNameAndType(source, binding) {
    for (var name in source.layouts) {
      var v = source.layouts[name];
      if (v.binding === binding) {
        assert(v.name === name);
        var type = Type.UNKNOWN;
        if (v instanceof UniformSamplerTexture) {
          type = v.type;
        } else if (v instanceof UniformStorageImage) {
          type = v.type;
        }
        return [v.name, type];
      }
    }
    error('descriptor not found');
    return ['', Type.UNKNOWN];
  }

  // make DescriptorSetLayoutData from local descriptor set info
  function makeLocalDescriptorSetLayoutData(lg, source) {
    var data = new DescriptorSetLayoutData();
    for (var _iterator30 = _createForOfIteratorHelperLoose(source.bindings), _step30; !(_step30 = _iterator30()).done;) {
      var b = _step30.value;
      var _getDescriptorNameAnd = getDescriptorNameAndType(source, b.binding),
        name = _getDescriptorNameAnd[0],
        type = _getDescriptorNameAnd[1];
      var nameID = getOrCreateDescriptorID(lg, name);
      var order = getDescriptorTypeOrder(b.descriptorType);
      var block = new DescriptorBlockData(order, b.stageFlags, b.count);
      block.offset = b.binding;
      block.descriptors.push(new DescriptorData(nameID, type, b.count));
      data.descriptorBlocks.push(block);
      var binding = data.bindingMap.get(nameID);
      if (binding !== undefined) {
        error("duplicate descriptor name '" + name + "'");
      }
      data.bindingMap.set(nameID, b.binding);
      var v = source.layouts[name];
      if (v instanceof UniformBlock) {
        data.uniformBlocks.set(nameID, v);
      }
    }
    return data;
  }

  // make descriptor sets for ShaderProgramData (PerBatch, PerInstance)
  function buildProgramData(programName, srcShaderInfo, lg, phase, programData, fixedLocal) {
    {
      var perBatch = makeDescriptorSetLayoutData(lg, UpdateFrequency.PER_BATCH, _setIndex[UpdateFrequency.PER_BATCH], srcShaderInfo.descriptors[UpdateFrequency.PER_BATCH]);
      var setData = new DescriptorSetData(perBatch);
      initializeDescriptorSetLayoutInfo(setData.descriptorSetLayoutData, setData.descriptorSetLayoutInfo);
      programData.layout.descriptorSets.set(UpdateFrequency.PER_BATCH, setData);
    }
    if (fixedLocal) {
      var perInstance = makeLocalDescriptorSetLayoutData(lg, localDescriptorSetLayout);
      var _setData = new DescriptorSetData(perInstance);
      initializeDescriptorSetLayoutInfo(_setData.descriptorSetLayoutData, _setData.descriptorSetLayoutInfo);
      if (localDescriptorSetLayout.bindings.length !== _setData.descriptorSetLayoutInfo.bindings.length) {
        error('local descriptor set layout inconsistent');
      } else {
        for (var k = 0; k !== localDescriptorSetLayout.bindings.length; ++k) {
          var b = localDescriptorSetLayout.bindings[k];
          var b2 = _setData.descriptorSetLayoutInfo.bindings[k];
          if (b.binding !== b2.binding || b.descriptorType !== b2.descriptorType || b.count !== b2.count || b.stageFlags !== b2.stageFlags) {
            error('local descriptor set layout inconsistent');
          }
        }
      }
      programData.layout.descriptorSets.set(UpdateFrequency.PER_INSTANCE, _setData);
    } else {
      var _perInstance = makeDescriptorSetLayoutData(lg, UpdateFrequency.PER_INSTANCE, _setIndex[UpdateFrequency.PER_INSTANCE], srcShaderInfo.descriptors[UpdateFrequency.PER_INSTANCE]);
      var _setData2 = new DescriptorSetData(_perInstance);
      initializeDescriptorSetLayoutInfo(_setData2.descriptorSetLayoutData, _setData2.descriptorSetLayoutInfo);
      programData.layout.descriptorSets.set(UpdateFrequency.PER_INSTANCE, _setData2);
    }
    var shaderID = phase.shaderPrograms.length;
    phase.shaderIndex.set(programName, shaderID);
    phase.shaderPrograms.push(programData);
  }

  // get or create PerProgram gfx.DescriptorSetLayout
  function getOrCreateProgramDescriptorSetLayout(device, lg, phaseID, programName, rate) {
    assert(rate < UpdateFrequency.PER_PHASE);
    var phase = lg.getRenderPhase(phaseID);
    var programID = phase.shaderIndex.get(programName);
    if (programID === undefined) {
      return getEmptyDescriptorSetLayout();
    }
    var programData = phase.shaderPrograms[programID];
    var layout = programData.layout.descriptorSets.get(rate);
    if (layout === undefined) {
      return getEmptyDescriptorSetLayout();
    }
    if (layout.descriptorSetLayout) {
      return layout.descriptorSetLayout;
    }
    layout.descriptorSetLayout = device.createDescriptorSetLayout(layout.descriptorSetLayoutInfo);
    return layout.descriptorSetLayout;
  }

  // get PerProgram gfx.DescriptorSetLayout
  function getProgramDescriptorSetLayout(device, lg, phaseID, programName, rate) {
    assert(rate < UpdateFrequency.PER_PHASE);
    var phase = lg.getRenderPhase(phaseID);
    var programID = phase.shaderIndex.get(programName);
    if (programID === undefined) {
      return null;
    }
    var programData = phase.shaderPrograms[programID];
    var layout = programData.layout.descriptorSets.get(rate);
    if (layout === undefined) {
      return null;
    }
    if (layout.descriptorSetLayout) {
      return layout.descriptorSetLayout;
    }
    layout.descriptorSetLayout = device.createDescriptorSetLayout(layout.descriptorSetLayoutInfo);
    return layout.descriptorSetLayout;
  }

  // find shader program in LayoutGraphData
  function getEffectShader(lg, effect, pass) {
    var programName = pass.program;
    var passID = getCustomPassID(lg, pass.pass);
    if (passID === INVALID_ID) {
      error("Invalid render pass, program: " + programName);
      return [INVALID_ID, INVALID_ID, INVALID_ID, null, INVALID_ID];
    }
    var enableSubpass = pass.subpass && pass.subpass !== '' && ENABLE_SUBPASS;
    var subpassID = enableSubpass ? getCustomSubpassID(lg, passID, pass.subpass) : INVALID_ID;
    if (enableSubpass && subpassID === INVALID_ID) {
      error("Invalid render subpass, program: " + programName);
      return [INVALID_ID, INVALID_ID, INVALID_ID, null, INVALID_ID];
    }
    var phaseID = getCustomPhaseID(lg, subpassID === INVALID_ID ? passID : subpassID, pass.phase);
    if (phaseID === INVALID_ID) {
      error("Invalid render phase, program: " + programName);
      return [INVALID_ID, INVALID_ID, INVALID_ID, null, INVALID_ID];
    }
    var srcShaderInfo = null;
    var shaderID = INVALID_ID;
    for (var i = 0; i < effect.shaders.length; ++i) {
      var shaderInfo = effect.shaders[i];
      if (shaderInfo.name === programName) {
        srcShaderInfo = shaderInfo;
        shaderID = i;
        break;
      }
    }
    return [passID, subpassID, phaseID, srcShaderInfo, shaderID];
  }

  // valid IShaderInfo is compatible
  function validateShaderInfo(srcShaderInfo) {
    // source shader info
    if (srcShaderInfo.descriptors === undefined) {
      error("No descriptors in shader: " + srcShaderInfo.name + ", please reimport ALL effects");
      return 1;
    }
    return 0;
  }
  _export({
    makeProgramInfo: makeProgramInfo,
    overwriteProgramBlockInfo: overwriteProgramBlockInfo,
    makeShaderInfo: makeShaderInfo,
    getGLSLSource: getGLSLSource,
    makeLocalDescriptorSetLayoutData: makeLocalDescriptorSetLayoutData,
    buildProgramData: buildProgramData,
    getOrCreateProgramDescriptorSetLayout: getOrCreateProgramDescriptorSetLayout,
    getProgramDescriptorSetLayout: getProgramDescriptorSetLayout,
    getEffectShader: getEffectShader,
    validateShaderInfo: validateShaderInfo
  });
  return {
    setters: [function (_gfxIndexJs) {
      Attribute = _gfxIndexJs.Attribute;
      DescriptorType = _gfxIndexJs.DescriptorType;
      DESCRIPTOR_BUFFER_TYPE = _gfxIndexJs.DESCRIPTOR_BUFFER_TYPE;
      DESCRIPTOR_SAMPLER_TYPE = _gfxIndexJs.DESCRIPTOR_SAMPLER_TYPE;
      MemoryAccessBit = _gfxIndexJs.MemoryAccessBit;
      PipelineLayoutInfo = _gfxIndexJs.PipelineLayoutInfo;
      ShaderInfo = _gfxIndexJs.ShaderInfo;
      ShaderStage = _gfxIndexJs.ShaderStage;
      ShaderStageFlagBit = _gfxIndexJs.ShaderStageFlagBit;
      Type = _gfxIndexJs.Type;
      Uniform = _gfxIndexJs.Uniform;
      UniformBlock = _gfxIndexJs.UniformBlock;
      UniformInputAttachment = _gfxIndexJs.UniformInputAttachment;
      UniformSampler = _gfxIndexJs.UniformSampler;
      UniformSamplerTexture = _gfxIndexJs.UniformSamplerTexture;
      UniformStorageBuffer = _gfxIndexJs.UniformStorageBuffer;
      UniformStorageImage = _gfxIndexJs.UniformStorageImage;
      UniformTexture = _gfxIndexJs.UniformTexture;
      deviceManager = _gfxIndexJs.deviceManager;
      DescriptorSetLayoutInfo = _gfxIndexJs.DescriptorSetLayoutInfo;
      DescriptorSetInfo = _gfxIndexJs.DescriptorSetInfo;
    }, function (_renderSceneCoreProgramUtilsJs) {
      genHandles = _renderSceneCoreProgramUtilsJs.genHandles;
      getActiveAttributes = _renderSceneCoreProgramUtilsJs.getActiveAttributes;
      getCombinationDefines = _renderSceneCoreProgramUtilsJs.getCombinationDefines;
      getShaderInstanceName = _renderSceneCoreProgramUtilsJs.getShaderInstanceName;
      getSize = _renderSceneCoreProgramUtilsJs.getSize;
      getVariantKey = _renderSceneCoreProgramUtilsJs.getVariantKey;
      populateMacros = _renderSceneCoreProgramUtilsJs.populateMacros;
      prepareDefines = _renderSceneCoreProgramUtilsJs.prepareDefines;
    }, function (_renderSceneIndexJs) {
      getDeviceShaderVersion = _renderSceneIndexJs.getDeviceShaderVersion;
    }, function (_layoutGraphJs) {
      DescriptorBlockData = _layoutGraphJs.DescriptorBlockData;
      DescriptorData = _layoutGraphJs.DescriptorData;
      DescriptorSetData = _layoutGraphJs.DescriptorSetData;
      DescriptorSetLayoutData = _layoutGraphJs.DescriptorSetLayoutData;
      LayoutGraphDataValue = _layoutGraphJs.LayoutGraphDataValue;
      ShaderProgramData = _layoutGraphJs.ShaderProgramData;
    }, function (_typesJs) {
      DescriptorTypeOrder = _typesJs.DescriptorTypeOrder;
      UpdateFrequency = _typesJs.UpdateFrequency;
    }, function (_webTypesJs) {
      ProgramGroup = _webTypesJs.ProgramGroup;
      ProgramInfo = _webTypesJs.ProgramInfo;
    }, function (_layoutGraphUtilsJs) {
      getCustomPassID = _layoutGraphUtilsJs.getCustomPassID;
      getCustomPhaseID = _layoutGraphUtilsJs.getCustomPhaseID;
      getOrCreateDescriptorSetLayout = _layoutGraphUtilsJs.getOrCreateDescriptorSetLayout;
      getEmptyDescriptorSetLayout = _layoutGraphUtilsJs.getEmptyDescriptorSetLayout;
      getEmptyPipelineLayout = _layoutGraphUtilsJs.getEmptyPipelineLayout;
      initializeDescriptorSetLayoutInfo = _layoutGraphUtilsJs.initializeDescriptorSetLayoutInfo;
      makeDescriptorSetLayoutData = _layoutGraphUtilsJs.makeDescriptorSetLayoutData;
      getDescriptorSetLayout = _layoutGraphUtilsJs.getDescriptorSetLayout;
      getOrCreateDescriptorID = _layoutGraphUtilsJs.getOrCreateDescriptorID;
      getDescriptorTypeOrder = _layoutGraphUtilsJs.getDescriptorTypeOrder;
      _getProgramID = _layoutGraphUtilsJs.getProgramID;
      _getDescriptorNameID = _layoutGraphUtilsJs.getDescriptorNameID;
      _getDescriptorName = _layoutGraphUtilsJs.getDescriptorName;
      INVALID_ID = _layoutGraphUtilsJs.INVALID_ID;
      ENABLE_SUBPASS = _layoutGraphUtilsJs.ENABLE_SUBPASS;
      getCustomSubpassID = _layoutGraphUtilsJs.getCustomSubpassID;
      generateConstantMacros = _layoutGraphUtilsJs.generateConstantMacros;
      populatePipelineLayoutInfo = _layoutGraphUtilsJs.populatePipelineLayoutInfo;
    }, function (_corePlatformDebugJs) {
      assert = _corePlatformDebugJs.assert;
      error = _corePlatformDebugJs.error;
    }, function (_defineJs) {
      UBOSkinning = _defineJs.UBOSkinning;
      localDescriptorSetLayout = _defineJs.localDescriptorSetLayout;
    }],
    execute: function () {
      _setIndex = [2, 1, 3, 0];
      _export("WebProgramProxy", WebProgramProxy = /*#__PURE__*/function () {
        function WebProgramProxy(shader, pipelineStateIn) {
          if (pipelineStateIn === void 0) {
            pipelineStateIn = null;
          }
          this.shader = void 0;
          this.pipelineState = null;
          this.shader = shader;
          this.pipelineState = pipelineStateIn;
        }
        _createClass(WebProgramProxy, [{
          key: "name",
          get: function get() {
            return this.shader.name;
          }
        }]);
        return WebProgramProxy;
      }());
      _export("WebProgramLibrary", WebProgramLibrary = /*#__PURE__*/function () {
        function WebProgramLibrary(lg) {
          this.layoutGraph = void 0;
          this.phases = new Map();
          this.mergeHighFrequency = false;
          this.fixedLocal = true;
          this.localLayoutData = new DescriptorSetLayoutData();
          this.localDescriptorSetLayout = null;
          this.emptyDescriptorSetLayout = null;
          this.emptyPipelineLayout = null;
          this.pipeline = null;
          this.device = null;
          this.layoutGraph = lg;
          for (var _iterator31 = _createForOfIteratorHelperLoose(lg.vertices()), _step31; !(_step31 = _iterator31()).done;) {
            var v = _step31.value;
            if (lg.holds(LayoutGraphDataValue.RenderPhase, v)) {
              this.phases.set(v, new ProgramGroup());
            }
          }
        }
        var _proto = WebProgramLibrary.prototype;
        _proto.init = function init(deviceIn) {
          if (this.device === deviceIn) {
            return;
          }
          this.device = deviceIn;
          this.emptyDescriptorSetLayout = this.device.createDescriptorSetLayout(new DescriptorSetLayoutInfo());
          this.emptyPipelineLayout = this.device.createPipelineLayout(new PipelineLayoutInfo());

          // update ubo
          // tips: for compatibility with old version, when maxVertexUniformVectors is 128, maxJoints = 30
          var maxJoints = (this.device.capabilities.maxVertexUniformVectors - 38) / 3;
          maxJoints = maxJoints < 256 ? maxJoints : 256;
          UBOSkinning.initLayout(maxJoints);

          // init layout graph
          var lg = this.layoutGraph;
          for (var _iterator32 = _createForOfIteratorHelperLoose(lg.vertices()), _step32; !(_step32 = _iterator32()).done;) {
            var v = _step32.value;
            var layout = lg.get('Layout').get(v);
            for (var _iterator36 = _createForOfIteratorHelperLoose(layout.descriptorSets), _step36; !(_step36 = _iterator36()).done;) {
              var _step36$value = _step36.value,
                update = _step36$value[0],
                set = _step36$value[1];
              initializeDescriptorSetLayoutInfo(set.descriptorSetLayoutData, set.descriptorSetLayoutInfo);
              set.descriptorSetLayout = this.device.createDescriptorSetLayout(set.descriptorSetLayoutInfo);
              assert(!!set.descriptorSetLayout);
              set.descriptorSet = this.device.createDescriptorSet(new DescriptorSetInfo(set.descriptorSetLayout));
              assert(!!set.descriptorSet);
            }
          }
          for (var _iterator33 = _createForOfIteratorHelperLoose(lg.vertices()), _step33; !(_step33 = _iterator33()).done;) {
            var _v7 = _step33.value;
            if (!lg.holds(LayoutGraphDataValue.RenderPhase, _v7)) {
              continue;
            }
            var phaseID = _v7;
            var subpassOrPassID = lg.getParent(phaseID);
            var passLayout = lg.getLayout(subpassOrPassID);
            var phaseLayout = lg.getLayout(phaseID);
            var _info = new PipelineLayoutInfo();
            populatePipelineLayoutInfo(passLayout, UpdateFrequency.PER_PASS, _info);
            populatePipelineLayoutInfo(phaseLayout, UpdateFrequency.PER_PHASE, _info);
            populatePipelineLayoutInfo(phaseLayout, UpdateFrequency.PER_BATCH, _info);
            populatePipelineLayoutInfo(phaseLayout, UpdateFrequency.PER_INSTANCE, _info);
            var phase = lg.getRenderPhase(phaseID);
            phase.pipelineLayout = this.device.createPipelineLayout(_info);
          }

          // init local descriptor set
          {
            var localSetLayout = localDescriptorSetLayout;
            this.localLayoutData = makeLocalDescriptorSetLayoutData(lg, localSetLayout);
            var info = new DescriptorSetLayoutInfo();
            initializeDescriptorSetLayoutInfo(this.localLayoutData, info);
            this.localDescriptorSetLayout = this.device.createDescriptorSetLayout(info);
            assert(!!this.localDescriptorSetLayout);
            var numUniformBuffers = 0;
            for (var _iterator34 = _createForOfIteratorHelperLoose(this.localLayoutData.descriptorBlocks), _step34; !(_step34 = _iterator34()).done;) {
              var block = _step34.value;
              if (block.type !== DescriptorTypeOrder.UNIFORM_BUFFER && block.type !== DescriptorTypeOrder.DYNAMIC_UNIFORM_BUFFER) {
                continue;
              }
              for (var _iterator35 = _createForOfIteratorHelperLoose(block.descriptors), _step35; !(_step35 = _iterator35()).done;) {
                var d = _step35.value;
                numUniformBuffers += d.count;
              }
            }
            assert(numUniformBuffers === 7); // 7 is currently max uniform binding
          }

          // generate constant macros string
          generateConstantMacros(this.device, this.layoutGraph.constantMacros);
        }
        // add effect to database
        ;
        _proto.addEffect = function addEffect(effect) {
          var lg = this.layoutGraph;
          for (var _iterator37 = _createForOfIteratorHelperLoose(effect.techniques), _step37; !(_step37 = _iterator37()).done;) {
            var tech = _step37.value;
            for (var _iterator38 = _createForOfIteratorHelperLoose(tech.passes), _step38; !(_step38 = _iterator38()).done;) {
              var pass = _step38.value;
              var programName = pass.program;
              var _getEffectShader = getEffectShader(lg, effect, pass),
                passID = _getEffectShader[0],
                subpassID = _getEffectShader[1],
                phaseID = _getEffectShader[2],
                srcShaderInfo = _getEffectShader[3];
              if (srcShaderInfo === null || validateShaderInfo(srcShaderInfo)) {
                error("program: " + programName + " not found");
                continue;
              }
              assert(passID !== INVALID_ID && phaseID !== INVALID_ID);
              var subpassOrPassID = subpassID === INVALID_ID ? passID : subpassID;
              var passLayout = lg.getLayout(subpassOrPassID);
              var phaseLayout = lg.getLayout(phaseID);

              // programs
              var group = this.phases.get(phaseID);
              if (group === undefined) {
                group = new ProgramGroup();
                this.phases.set(phaseID, group);
              }
              var phasePrograms = group.programInfos;

              // build program
              var programInfo = makeProgramInfo(effect.name, srcShaderInfo);

              // collect program descriptors
              var programData = null;
              if (!this.mergeHighFrequency) {
                var phase = lg.getRenderPhase(phaseID);
                programData = new ShaderProgramData();
                buildProgramData(programName, srcShaderInfo, lg, phase, programData, this.fixedLocal);
              }

              // shaderInfo and blockSizes
              var _makeShaderInfo = makeShaderInfo(lg, passLayout, phaseLayout, srcShaderInfo, programData, this.fixedLocal),
                shaderInfo = _makeShaderInfo[0],
                blockSizes = _makeShaderInfo[1];

              // overwrite programInfo
              overwriteProgramBlockInfo(shaderInfo, programInfo);

              // handle map
              var handleMap = genHandles(shaderInfo);
              // attributes
              var attributes = new Array();
              for (var _iterator39 = _createForOfIteratorHelperLoose(programInfo.attributes), _step39; !(_step39 = _iterator39()).done;) {
                var attr = _step39.value;
                attributes.push(new Attribute(attr.name, attr.format, attr.isNormalized, 0, attr.isInstanced, attr.location));
              }
              // create programInfo
              var info = new ProgramInfo(programInfo, shaderInfo, attributes, blockSizes, handleMap);
              phasePrograms.set(srcShaderInfo.name, info);
            }
          }
        }
        // precompile effect
        ;
        _proto.precompileEffect = function precompileEffect(device, effect) {
          var _this = this;
          var lg = this.layoutGraph;
          for (var _iterator40 = _createForOfIteratorHelperLoose(effect.techniques), _step40; !(_step40 = _iterator40()).done;) {
            var tech = _step40.value;
            var _loop3 = function _loop3() {
                var pass = _step41.value;
                var programName = pass.program;
                var _getEffectShader2 = getEffectShader(lg, effect, pass),
                  passID = _getEffectShader2[0],
                  subpassID = _getEffectShader2[1],
                  phaseID = _getEffectShader2[2],
                  srcShaderInfo = _getEffectShader2[3],
                  shaderID = _getEffectShader2[4];
                if (srcShaderInfo === null || validateShaderInfo(srcShaderInfo)) {
                  error("program: " + programName + " not valid");
                  return 0; // continue
                }
                assert(passID !== INVALID_ID && phaseID !== INVALID_ID && shaderID !== INVALID_ID);
                var combination = effect.combinations[shaderID];
                if (!combination) {
                  return 0; // continue
                }
                var defines = getCombinationDefines(combination);
                defines.forEach(function (defines) {
                  return _this.getProgramVariant(device, phaseID, programName, defines);
                });
              },
              _ret;
            for (var _iterator41 = _createForOfIteratorHelperLoose(tech.passes), _step41; !(_step41 = _iterator41()).done;) {
              _ret = _loop3();
              if (_ret === 0) continue;
            }
          }
        }
        // get IProgramInfo
        ;
        _proto.getProgramInfo = function getProgramInfo(phaseID, programName) {
          assert(phaseID !== INVALID_ID);
          var group = this.phases.get(phaseID);
          var info = group.programInfos.get(programName);
          return info.programInfo;
        }

        // get gfx.ShaderInfo
        ;
        _proto.getShaderInfo = function getShaderInfo(phaseID, programName) {
          assert(phaseID !== INVALID_ID);
          var group = this.phases.get(phaseID);
          var info = group.programInfos.get(programName);
          return info.shaderInfo;
        }
        // get shader key
        ;
        _proto.getKey = function getKey(phaseID, programName, defines) {
          assert(phaseID !== INVALID_ID);
          // get phase
          var group = this.phases.get(phaseID);
          if (group === undefined) {
            error("Invalid render phase, program: " + programName);
            return '';
          }
          // get info
          var info = group.programInfos.get(programName);
          if (info === undefined) {
            error("Invalid program, program: " + programName);
            return '';
          }
          return getVariantKey(info.programInfo, defines);
        }
        // get program variant
        ;
        _proto.getProgramVariant = function getProgramVariant(device, phaseID, name, defines, key) {
          var _this$pipeline;
          if (key === void 0) {
            key = null;
          }
          Object.assign(defines, (_this$pipeline = this.pipeline) === null || _this$pipeline === void 0 ? void 0 : _this$pipeline.macros);
          assert(phaseID !== INVALID_ID);
          // get phase
          var group = this.phases.get(phaseID);
          if (group === undefined) {
            error("Invalid render phase, program: " + name);
            return null;
          }
          // get info
          var info = group.programInfos.get(name);
          if (info === undefined) {
            error("Invalid program, program: " + name);
            return null;
          }
          var programInfo = info.programInfo;
          if (key === null) {
            key = getVariantKey(programInfo, defines);
          }

          // try get program
          var programHosts = group.programProxies;
          var programHost = programHosts.get(key);
          if (programHost !== undefined) {
            return programHost;
          }

          // prepare variant
          var macroArray = prepareDefines(defines, programInfo.defines);
          var prefix = this.layoutGraph.constantMacros + programInfo.constantMacros + macroArray.reduce(function (acc, cur) {
            return acc + "#define " + cur.name + " " + cur.value + "\n";
          }, '');
          var src = programInfo.glsl3;
          var deviceShaderVersion = getDeviceShaderVersion(device);
          if (deviceShaderVersion) {
            src = programInfo[deviceShaderVersion];
          } else {
            error('Invalid GFX API!');
          }

          // prepare shader info
          var shaderInfo = info.shaderInfo;
          if (src.compute) {
            shaderInfo.stages[0].source = prefix + src.compute;
            shaderInfo.stages[0].stage = ShaderStageFlagBit.COMPUTE;
            shaderInfo.stages.length = 1;
          } else {
            shaderInfo.stages[0].source = prefix + src.vert;
            shaderInfo.stages[1].source = prefix + src.frag;
          }
          shaderInfo.attributes = getActiveAttributes(programInfo, info.attributes, defines);
          shaderInfo.name = getShaderInstanceName(name, macroArray);

          // create shader
          var shader = device.createShader(shaderInfo);

          // create program host and register
          var host = new WebProgramProxy(shader);
          programHosts.set(key, host);

          // create
          return host;
        }
        // get material descriptor set layout
        ;
        _proto.getMaterialDescriptorSetLayout = function getMaterialDescriptorSetLayout(device, phaseID, programName) {
          if (this.mergeHighFrequency) {
            assert(phaseID !== INVALID_ID);
            var subpassOrPassID = this.layoutGraph.getParent(phaseID);
            return getOrCreateDescriptorSetLayout(this.layoutGraph, subpassOrPassID, phaseID, UpdateFrequency.PER_BATCH);
          }
          return getOrCreateProgramDescriptorSetLayout(device, this.layoutGraph, phaseID, programName, UpdateFrequency.PER_BATCH);
        }
        // get local descriptor set layout
        ;
        _proto.getLocalDescriptorSetLayout = function getLocalDescriptorSetLayout(device, phaseID, programName) {
          if (this.mergeHighFrequency) {
            assert(phaseID !== INVALID_ID);
            var subpassOrPassID = this.layoutGraph.getParent(phaseID);
            return getOrCreateDescriptorSetLayout(this.layoutGraph, subpassOrPassID, phaseID, UpdateFrequency.PER_INSTANCE);
          }
          return getOrCreateProgramDescriptorSetLayout(device, this.layoutGraph, phaseID, programName, UpdateFrequency.PER_INSTANCE);
        }
        // get related uniform block sizes
        ;
        _proto.getBlockSizes = function getBlockSizes(phaseID, programName) {
          assert(phaseID !== INVALID_ID);
          var group = this.phases.get(phaseID);
          if (!group) {
            error("Invalid render phase, program: " + programName);
            return [];
          }
          var info = group.programInfos.get(programName);
          if (!info) {
            error("Invalid program, program: " + programName);
            return [];
          }
          return info.blockSizes;
        }
        // get property handle map
        ;
        _proto.getHandleMap = function getHandleMap(phaseID, programName) {
          assert(phaseID !== INVALID_ID);
          var group = this.phases.get(phaseID);
          if (!group) {
            error("Invalid render phase, program: " + programName);
            return {};
          }
          var info = group.programInfos.get(programName);
          if (!info) {
            error("Invalid program, program: " + programName);
            return {};
          }
          return info.handleMap;
        }
        // get shader pipeline layout
        ;
        _proto.getPipelineLayout = function getPipelineLayout(device, phaseID, programName) {
          if (this.mergeHighFrequency) {
            assert(phaseID !== INVALID_ID);
            var layout = this.layoutGraph.getRenderPhase(phaseID);
            return layout.pipelineLayout;
          }
          var lg = this.layoutGraph;
          var phase = lg.getRenderPhase(phaseID);
          var programID = phase.shaderIndex.get(programName);
          if (programID === undefined) {
            return getEmptyPipelineLayout();
          }
          var programData = phase.shaderPrograms[programID];
          if (programData.pipelineLayout) {
            return programData.pipelineLayout;
          }

          // get pass
          var subpassOrPassID = lg.getParent(phaseID);
          if (subpassOrPassID === INVALID_ID) {
            return getEmptyPipelineLayout();
          }

          // craete pipeline layout
          var info = new PipelineLayoutInfo();
          var passSet = getDescriptorSetLayout(this.layoutGraph, subpassOrPassID, phaseID, UpdateFrequency.PER_PASS);
          if (passSet) {
            info.setLayouts.push(passSet);
          }
          var phaseSet = getDescriptorSetLayout(this.layoutGraph, subpassOrPassID, phaseID, UpdateFrequency.PER_PHASE);
          if (phaseSet) {
            info.setLayouts.push(phaseSet);
          }
          var batchSet = getProgramDescriptorSetLayout(device, lg, phaseID, programName, UpdateFrequency.PER_BATCH);
          if (batchSet) {
            info.setLayouts.push(batchSet);
          }
          var instanceSet = getProgramDescriptorSetLayout(device, lg, phaseID, programName, UpdateFrequency.PER_INSTANCE);
          if (instanceSet) {
            info.setLayouts.push(instanceSet);
          }
          programData.pipelineLayout = device.createPipelineLayout(info);
          return programData.pipelineLayout;
        };
        _proto.getProgramID = function getProgramID(phaseID, programName) {
          return _getProgramID(this.layoutGraph, phaseID, programName);
        };
        _proto.getDescriptorNameID = function getDescriptorNameID(name) {
          return _getDescriptorNameID(this.layoutGraph, name);
        };
        _proto.getDescriptorName = function getDescriptorName(nameID) {
          return _getDescriptorName(this.layoutGraph, nameID);
        };
        return WebProgramLibrary;
      }());
    }
  };
});