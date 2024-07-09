System.register("q-bundled:///fs/cocos/gfx/webgpu/webgpu-define.js", ["../../../../virtual/internal%253Aconstants.js", "../../webgpu/instantiated.js", "./override.js", "../base/define.js", "../../core/global-exports.js"], function (_export, _context) {
  "use strict";

  var WEBGPU, gfx, webgpuAdapter, glslangWasmModule, promiseForWebGPUInstantiation, twgslModule, CommandBuffer, Device, Buffer, ShaderStageFlagBit, BufferUsageBit, ccwindow;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable @typescript-eslint/no-unused-expressions */ /* eslint-disable max-len */ /* eslint-disable @typescript-eslint/no-unsafe-return */ /* eslint-disable func-names */ /*
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
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      WEBGPU = _virtualInternal253AconstantsJs.WEBGPU;
    }, function (_webgpuInstantiatedJs) {
      gfx = _webgpuInstantiatedJs.gfx;
      webgpuAdapter = _webgpuInstantiatedJs.webgpuAdapter;
      glslangWasmModule = _webgpuInstantiatedJs.glslangWasmModule;
      promiseForWebGPUInstantiation = _webgpuInstantiatedJs.promiseForWebGPUInstantiation;
      twgslModule = _webgpuInstantiatedJs.twgslModule;
    }, function (_overrideJs) {
      CommandBuffer = _overrideJs.CommandBuffer;
      Device = _overrideJs.Device;
      Buffer = _overrideJs.Buffer;
    }, function (_baseDefineJs) {
      ShaderStageFlagBit = _baseDefineJs.ShaderStageFlagBit;
      BufferUsageBit = _baseDefineJs.BufferUsageBit;
    }, function (_coreGlobalExportsJs) {
      ccwindow = _coreGlobalExportsJs.ccwindow;
    }],
    execute: function () {
      WEBGPU && promiseForWebGPUInstantiation.then(function () {
        var originDeviceInitializeFunc = Device.prototype.initialize;
        Device.prototype.initialize = function (info) {
          var adapter = webgpuAdapter.adapter;
          var device = webgpuAdapter.device;
          gfx.preinitializedWebGPUDevice = device;
          device.lost.then(function (info) {
            console.error('Device was lost.', info);
            throw new Error('Something bad happened');
          });
          console.log(adapter);
          originDeviceInitializeFunc.call(this, info);
          return true;
        };
        Device.prototype.flushCommands = function () {};
        var oldCreateTexture = Device.prototype.createTexture;
        Device.prototype.createTexture = function (info) {
          if ('texture' in info) {
            return this.createTextureView(info);
          } else {
            return oldCreateTexture.call(this, info);
          }
        };
        var oldCreateBuffer = Device.prototype.createBuffer;
        Device.prototype.createBuffer = function (info) {
          if ('buffer' in info) {
            return this.createBufferView(info);
          } else {
            return oldCreateBuffer.call(this, info);
          }
        };
        var oldDraw = CommandBuffer.prototype.draw;
        CommandBuffer.prototype.draw = function (info) {
          if ('attributesHash' in info) {
            return this.draw(info.drawInfo);
          } else {
            return this.drawByInfo(info);
          }
        };
        var oldUpdateBuffer = Buffer.prototype.update;
        Buffer.prototype.update = function (data, size) {
          if (this.usage & BufferUsageBit.INDIRECT) {
            this.updateIndirect(data.drawInfos);
          } else {
            var updateSize = size === undefined ? data.byteLength : size;
            if ('buffer' in data) {
              oldUpdateBuffer.call(this, new Uint8Array(data.buffer, data.byteOffset, data.byteLength), updateSize);
            } else {
              oldUpdateBuffer.call(this, new Uint8Array(data), updateSize);
            }
          }
        };
        var oldCmdUpdateBuffer = CommandBuffer.prototype.updateBuffer;
        CommandBuffer.prototype.updateBuffer = function (buffer, data, size) {
          if (this.usage & BufferUsageBit.INDIRECT) {
            this.updateIndirect(buffer, data.drawInfos);
          } else {
            var updateSize = size === undefined ? data.byteLength : size;
            if ('buffer' in data) {
              oldCmdUpdateBuffer.call(this, buffer, new Uint8Array(data.buffer, data.byteOffset, data.byteLength), updateSize);
            } else {
              oldCmdUpdateBuffer.call(this, buffer, new Uint8Array(data), updateSize);
            }
          }
        };
        var oldBindDescriptorSet = CommandBuffer.prototype.bindDescriptorSet;
        CommandBuffer.prototype.bindDescriptorSet = function (set, descriptorSet, dynamicOffsets) {
          if (dynamicOffsets === undefined) {
            oldBindDescriptorSet.call(this, set, descriptorSet, []);
          } else if ('buffer' in dynamicOffsets) {
            oldBindDescriptorSet.call(this, set, descriptorSet, new Uint32Array(dynamicOffsets.buffer, dynamicOffsets.byteOffset, dynamicOffsets.byteLength));
          } else {
            oldBindDescriptorSet.call(this, set, descriptorSet, new Uint32Array(dynamicOffsets));
          }
        };
        var oldCmdCopyBuffersToTexture = CommandBuffer.prototype.copyBuffersToTexture;
        CommandBuffer.prototype.copyBuffersToTexture = function (buffers, texture, regions) {
          var ucharBuffers = [];
          for (var i = 0; i < buffers.length; ++i) {
            var buffer = buffers[i];
            if ('buffer' in buffer) {
              ucharBuffers.push(new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength));
            } else {
              ucharBuffers.push(new Uint8Array(buffer));
            }
          }
          oldCmdCopyBuffersToTexture.call(this, ucharBuffers, texture, regions);
        };
        var oldDeviceCopyBuffersToTexture = Device.prototype.copyBuffersToTexture;
        Device.prototype.copyBuffersToTexture = function (buffers, texture, regions) {
          var ucharBuffers = [];
          for (var i = 0; i < buffers.length; ++i) {
            var buffer = buffers[i];
            if ('buffer' in buffer) {
              ucharBuffers.push(new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength));
            } else {
              ucharBuffers.push(new Uint8Array(buffer));
            }
          }
          oldDeviceCopyBuffersToTexture.call(this, ucharBuffers, texture, regions);
        };
        Device.prototype.copyTexImagesToTexture = function (texImages, texture, regions) {
          var buffers = [];
          for (var i = 0; i < regions.length; i++) {
            if ('getContext' in texImages[i]) {
              var _canvasElem$getContex;
              var canvasElem = texImages[i];
              var imageData = (_canvasElem$getContex = canvasElem.getContext('2d')) === null || _canvasElem$getContex === void 0 ? void 0 : _canvasElem$getContex.getImageData(0, 0, texImages[i].width, texImages[i].height);
              var buff = imageData.data.buffer;
              var data = void 0;
              var rawBuffer = void 0;
              if ('buffer' in buff) {
                // es-lint as any
                data = new Uint8Array(buff.buffer, buff.byteOffset, buff.byteLength);
              } else {
                rawBuffer = buff;
                data = new Uint8Array(rawBuffer);
              }
              buffers[i] = data;
            } else if (texImages[i] instanceof HTMLImageElement || texImages[i] instanceof ImageBitmap) {
              var img = texImages[i];
              var canvas = ccwindow.document.createElement('canvas');
              canvas.width = img.width;
              canvas.height = img.height;
              var ctx = canvas.getContext('2d');
              ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(img, 0, 0);
              var _imageData = ctx === null || ctx === void 0 ? void 0 : ctx.getImageData(0, 0, img.width, img.height);
              var _buff = _imageData.data.buffer;
              var _data = void 0;
              var _rawBuffer = void 0;
              if ('buffer' in _buff) {
                // es-lint as any
                _data = new Uint8Array(_buff.buffer, _buff.byteOffset, _buff.byteLength);
              } else {
                _rawBuffer = _buff;
                _data = new Uint8Array(_rawBuffer);
              }
              buffers[i] = _data;
            } else {
              console.log('imageBmp copy not impled!');
            }
          }
          oldDeviceCopyBuffersToTexture.call(this, buffers, texture, regions);
        };
        var SEPARATE_SAMPLER_BINDING_OFFSET = 16;
        function seperateCombinedSamplerTexture(shaderSource) {
          // gather
          var samplerReg = /.*?(\(set = \d+, binding = )(\d+)\) uniform[^;]+sampler(\w*) (\w+);/g;
          var iter = samplerReg.exec(shaderSource);
          // samplerName, samplerType
          var referredMap = new Map();
          while (iter) {
            var samplerName = iter[4];
            var samplerType = iter[3];
            referredMap.set(samplerName, samplerType);
            iter = samplerReg.exec(shaderSource);
          }

          // replaceAll --> es 2021 required
          var code = shaderSource;
          // referredMap.forEach((value, key)=> {
          //     const samplerName = key;
          //     const samplerType = value;
          //     const exp = new RegExp(`\\b${samplerName}\\b([^;])`);
          //     let it = exp.exec(code);
          //     while (it) {
          //         code = code.replace(exp, `sampler${samplerType}(_${samplerName}, _${samplerName}_sampler)${it[1]}`);
          //         it = exp.exec(code);
          //     }
          // });
          var sampReg = /.*?(\(set = \d+, binding = )(\d+)\) uniform[^;]+sampler(\w*) (\w+);/g;
          var it = sampReg.exec(code);
          while (it) {
            code = code.replace(sampReg, "layout$1 $2) uniform texture$3 $4;\nlayout$1 $2 + " + SEPARATE_SAMPLER_BINDING_OFFSET + ") uniform sampler $4_sampler;\n");
            it = sampReg.exec(code);
          }
          var builtinSample = ['texture', 'textureSize', 'texelFetch', 'textureLod'];
          var replaceBultin = function replaceBultin(samplerName, samplerType, target) {
            builtinSample.forEach(function (sampleFunc) {
              var builtinSampleReg = new RegExp(sampleFunc + "\\s*\\(\\s*" + samplerName + "\\s*,");
              var builtinFuncIter = builtinSampleReg.exec(target);
              while (builtinFuncIter) {
                target = target.replace(builtinFuncIter[0], sampleFunc + "(sampler" + samplerType + "(" + samplerName + ", " + samplerName + "_sampler),");
                builtinFuncIter = builtinSampleReg.exec(target);
              }
            });
            return target;
          };
          var funcReg = /\s([\S]+)\s*\(([\w\s,]+)\)[\s|\\|n]*{/g;
          var funcIter = funcReg.exec(code);
          var funcSet = new Set();
          var paramTypeMap = new Map();
          var _loop = function _loop() {
            paramTypeMap.clear();
            var params = funcIter[2];
            var paramsRes = params.slice();
            if (params.includes('sampler')) {
              var paramIndexSet = new Set();
              var paramArr = params.split(',');
              for (var i = 0; i < paramArr.length; ++i) {
                var paramDecl = paramArr[i].split(' ');
                // assert(paramDecl.length >= 2)
                var typeDecl = paramDecl[paramDecl.length - 2];
                if (typeDecl.includes('sampler') && typeDecl !== 'sampler') {
                  var _samplerType = typeDecl.replace('sampler', '');
                  var paramName = paramDecl[paramDecl.length - 1];
                  paramsRes = paramsRes.replace(paramArr[i], " texture" + _samplerType + " " + paramName + ", sampler " + paramName + "_sampler");
                  paramIndexSet.add(i);
                  paramTypeMap.set(paramName, _samplerType);
                }
              }
              // let singleParamReg = new RegExp(`(\\W?)(\\w+)\\s+\\b([^,)]+)\\b`);

              code = code.replace(params, paramsRes);
              var funcName = funcIter[1];
              // function may overload
              if (!funcSet.has(funcName)) {
                // const samplerTypePrefix = '1D|2D|3D|Cube|Buffer';
                var funcSamplerReg = new RegExp(funcName + "\\s*?\\((\\s*[^;\\{]+)", 'g');
                var matches = code.matchAll(funcSamplerReg);
                for (var _iterator = _createForOfIteratorHelperLoose(matches), _step; !(_step = _iterator()).done;) {
                  var matched = _step.value;
                  if (!matched[1].match(/\b\w+\b\s*\b\w+\b/g)) {
                    var stripStr = matched[1][matched[1].length - 1] === ')' ? matched[1].slice(0, -1) : matched[1];
                    var _params = stripStr.split(',');
                    var queued = 0; // '('
                    var paramIndex = 0;
                    for (var _i = 0; _i < _params.length; ++_i) {
                      if (_params[_i].includes('(')) {
                        ++queued;
                      }
                      if (_params[_i].includes(')')) {
                        --queued;
                      }
                      if (!queued || _i === _params.length - 1) {
                        if (paramIndexSet.has(paramIndex)) {
                          _params[_i] += ", " + _params[_i] + "_sampler";
                        }
                        ++paramIndex;
                      }
                    }
                    var newParams = _params.join(',');
                    var newInvokeStr = matched[0].replace(stripStr, newParams);
                    code = code.replace(matched[0], newInvokeStr);
                  }
                  // else: function declare
                }
              }

              var count = 1;
              var startIndex = code.indexOf(funcIter[1], funcIter.index);
              startIndex = code.indexOf('{', startIndex) + 1;
              var endIndex = 0;
              while (count) {
                if (code.at(startIndex) === '{') {
                  ++count;
                } else if (code.at(startIndex) === '}') {
                  --count;
                }
                if (count === 0) {
                  endIndex = startIndex;
                  break;
                }
                var nextLeft = code.indexOf('{', startIndex + 1);
                var nextRight = code.indexOf('}', startIndex + 1);
                startIndex = nextLeft === -1 ? nextRight : Math.min(nextLeft, nextRight);
              }
              var funcBody = code.slice(funcIter.index, endIndex);
              var newFunc = funcBody;
              paramTypeMap.forEach(function (type, name) {
                newFunc = replaceBultin(name, type, newFunc);
              });
              code = code.replace(funcBody, newFunc);
              funcSet.add(funcIter[1]);
            }
            funcIter = funcReg.exec(code);
          };
          while (funcIter) {
            _loop();
          }
          referredMap.forEach(function (type, name) {
            code = replaceBultin(name, type, code);
          });

          ///////////////////////////////////////////////////////////
          // isNan, isInf has been removed in dawn:tint

          var functionDefs = '';
          var precisionKeyWord = 'highp';
          var isNanIndex = code.indexOf('isnan');
          if (isNanIndex !== -1) {
            // getPrecision(isNanIndex);
            functionDefs += "\n\n             bool isNan(" + precisionKeyWord + " float val) {\n                 return (val < 0.0 || 0.0 < val || val == 0.0) ? false : true;\n             }\n             \n";
            code = code.replace(/isnan\(/gi, 'isNan(');
          }
          var isInfIndex = code.indexOf('isinf');
          if (isInfIndex !== -1) {
            // getPrecision(isInfIndex);
            functionDefs += "\n\n             bool isInf(" + precisionKeyWord + " float x) {\n                 return x == x * 2.0 && x != 0.0;\n             }\n             \n";
            code = code.replace(/isinf\(/gi, 'isInf(');
          }

          ///////////////////////////////////////////////////////////

          var firstPrecisionIdx = code.indexOf('precision');
          firstPrecisionIdx = code.indexOf(';', firstPrecisionIdx);
          firstPrecisionIdx += 1;
          code = code.slice(0, firstPrecisionIdx) + "\n" + functionDefs + "\n" + code.slice(firstPrecisionIdx);
          return code;
        }
        function reflect(wgsl) {
          var bindingList = [];
          for (var _iterator2 = _createForOfIteratorHelperLoose(wgsl), _step2; !(_step2 = _iterator2()).done;) {
            var wgslStr = _step2.value;
            // @group(1) @binding(0) var<uniform> x_78 : Constants;
            // @group(1) @binding(1) var albedoMap : texture_2d<f32>;
            var reg = new RegExp(/@group\((\d)\)\s+@binding\((\d+)\)/g);
            var iter = reg.exec(wgslStr);
            while (iter) {
              var set = +iter[1];
              var binding = +iter[2];
              while (bindingList.length <= set) {
                bindingList.push([]);
              }
              bindingList[set][bindingList[set].length] = binding;
              iter = reg.exec(wgslStr);
            }
          }
          return bindingList;
        }
        function overwriteBlock(info, code) {
          var regexp = new RegExp(/layout\(([^\)]+)\)\s+uniform\s+\b(\w+)\b/g);
          var src = code;
          var iter = regexp.exec(src);
          if (iter) {
            var blockName = iter[2];
            var block = info.blocks.find(function (ele) {
              return ele.name === blockName;
            });
            var binding = block === null || block === void 0 ? void 0 : block.binding;
            var overwriteStr = iter[0].replace(iter[1], iter[1] + ", set = 0, binding = " + binding);
            src = src.replace(iter[0], overwriteStr);
            iter = regexp.exec(src);
          }
          return src;
        }
        var createShader = Device.prototype.createShader;
        Device.prototype.createShader = function (shaderInfo) {
          var wgslStages = [];
          for (var i = 0; i < shaderInfo.stages.length; ++i) {
            var glslSource = seperateCombinedSamplerTexture(shaderInfo.stages[i].source);
            var stageStr = shaderInfo.stages[i].stage === ShaderStageFlagBit.VERTEX ? 'vertex' : shaderInfo.stages[i].stage === ShaderStageFlagBit.FRAGMENT ? 'fragment' : 'compute';
            // if (stageStr === 'compute') {
            //     glslSource = overwriteBlock(shaderInfo, glslSource);
            // }
            var sourceCode = "#version 450\n#define CC_USE_WGPU 1\n" + glslSource;
            var spv = glslangWasmModule.glslang.compileGLSL(sourceCode, stageStr, false, '1.3');
            var twgsl = twgslModule.twgsl;
            var wgsl = twgsl.convertSpirV2WGSL(spv);
            if (wgsl === '') {
              console.error("empty wgsl");
            }
            shaderInfo.stages[i].source = wgsl;
            wgslStages.push(wgsl);
          }
          var shader = this.createShaderNative(shaderInfo);
          // optioanl : reflect bindings in shader
          {
            var bindingList = reflect(wgslStages);
            for (var _iterator3 = _createForOfIteratorHelperLoose(bindingList), _step3; !(_step3 = _iterator3()).done;) {
              var bindings = _step3.value;
              var u8Array = new Uint8Array(bindings);
              shader.reflectBinding(u8Array);
            }
          }
          return shader;
        };

        // if property being frequently get in TS, try cache it
        // attention: invalid if got this object from a native object,
        // eg. inputAssembler.indexBuffer.objectID
        function cacheReadOnlyWGPUProperties(type, props) {
          var descriptor = {
            writable: true
          };
          props.map(function (prop) {
            return Object.defineProperty(type['prototype'], "_" + prop, descriptor);
          });

          // trick for emscripten object only, which contains a `name` indicates what type it is.
          var typename = type['name'].replace('CCWGPU', '');
          var oldCreate = Device.prototype["create" + typename];
          Device.prototype["create" + typename] = function (info) {
            var res = oldCreate.call(this, info);
            var _loop2 = function _loop2() {
              var prop = _step4.value;
              res["_" + prop] = res["" + prop];
              Object.defineProperty(res, "" + prop, {
                get: function get() {
                  return this["_" + prop];
                }
              });
            };
            for (var _iterator4 = _createForOfIteratorHelperLoose(props), _step4; !(_step4 = _iterator4()).done;) {
              _loop2();
            }
            return res;
          };
          var oldInit = type['prototype']['initialize'];
          type['prototype']['initialize'] = function (info) {
            oldInit.call(this, info);
            for (var _iterator5 = _createForOfIteratorHelperLoose(props), _step5; !(_step5 = _iterator5()).done;) {
              var prop = _step5.value;
              this["_" + prop] = this["" + prop];
            }
          };
        }
        ;
        cacheReadOnlyWGPUProperties(Buffer, ['objectID']);
      });
    }
  };
});