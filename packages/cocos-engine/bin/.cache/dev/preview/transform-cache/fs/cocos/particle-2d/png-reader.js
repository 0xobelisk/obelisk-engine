System.register("q-bundled:///fs/cocos/particle-2d/png-reader.js", ["../core/index.js", "../../external/compression/zlib.min.js"], function (_export, _context) {
  "use strict";

  var getError, zlib, PNGReader;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2011 Devon Govett
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2008-2010 Ricardo Quesada
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2011-2012 cocos2d-x.org
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2013-2016 Chukong Technologies Inc.
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             http://www.cocos2d-x.org
                                                                                                                                                                                                                                                                                                                                                                                            
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
      getError = _coreIndexJs.getError;
    }, function (_externalCompressionZlibMinJs) {
      zlib = _externalCompressionZlibMinJs.default;
    }],
    execute: function () {
      /**
       * A png file reader
       * @name PNGReader
       */
      _export("PNGReader", PNGReader = /*#__PURE__*/function () {
        function PNGReader(data) {
          var _this = this;
          this.pos = 8;
          this.palette = [];
          this.imgData = [];
          this.text = {};
          this.width = 0;
          this.height = 0;
          this.bits = 0;
          this.colorType = 0;
          this.compressionMethod = 0;
          this.filterMethod = 0;
          this.interlaceMethod = 0;
          this.colors = 0;
          this.hasAlphaChannel = false;
          this.pixelBitlength = 0;
          this.data = data;
          this.transparency = {
            indexed: [],
            rgb: 0,
            grayscale: 0
          };
          var frame;
          var i = 0;
          var _i = 0;
          var _j = 0;
          var chunkSize = 0;
          while (true) {
            chunkSize = this.readUInt32();
            var section = function () {
              var _results = [];
              for (i = _i = 0; _i < 4; i = ++_i) {
                _results.push(String.fromCharCode(_this.data[_this.pos++]));
              }
              return _results;
            }.call(this).join('');
            switch (section) {
              case 'IHDR':
                this.width = this.readUInt32();
                this.height = this.readUInt32();
                this.bits = this.data[this.pos++];
                this.colorType = this.data[this.pos++];
                this.compressionMethod = this.data[this.pos++];
                this.filterMethod = this.data[this.pos++];
                this.interlaceMethod = this.data[this.pos++];
                break;
              case 'acTL':
                this.animation = {
                  numFrames: this.readUInt32(),
                  numPlays: this.readUInt32() || Infinity,
                  frames: []
                };
                break;
              case 'PLTE':
                this.palette = this.read(chunkSize);
                break;
              case 'fcTL':
                if (frame) {
                  this.animation.frames.push(frame);
                }
                this.pos += 4;
                frame = {
                  width: this.readUInt32(),
                  height: this.readUInt32(),
                  xOffset: this.readUInt32(),
                  yOffset: this.readUInt32()
                };
                var delayNum = this.readUInt16();
                var delayDen = this.readUInt16() || 100;
                frame.delay = 1000 * delayNum / delayDen;
                frame.disposeOp = this.data[this.pos++];
                frame.blendOp = this.data[this.pos++];
                frame.data = [];
                break;
              case 'IDAT':
              case 'fdAT':
                if (section === 'fdAT') {
                  this.pos += 4;
                  chunkSize -= 4;
                }
                data = (frame != null ? frame.data : void 0) || this.imgData;
                for (i = _i = 0; chunkSize >= 0 ? _i < chunkSize : _i > chunkSize; i = chunkSize >= 0 ? ++_i : --_i) {
                  data.push(this.data[this.pos++]);
                }
                break;
              case 'tRNS':
                this.transparency = {};
                switch (this.colorType) {
                  case 3:
                    this.transparency.indexed = this.read(chunkSize);
                    var ccshort = 255 - this.transparency.indexed.length;
                    if (ccshort > 0) {
                      for (i = _j = 0; ccshort >= 0 ? _j < ccshort : _j > ccshort; i = ccshort >= 0 ? ++_j : --_j) {
                        this.transparency.indexed.push(255);
                      }
                    }
                    break;
                  case 0:
                    this.transparency.grayscale = this.read(chunkSize)[0];
                    break;
                  case 2:
                    this.transparency.rgb = this.read(chunkSize);
                }
                break;
              case 'tEXt':
                var text = this.read(chunkSize);
                var index = text.indexOf(0);
                var key = String.fromCharCode.apply(String, text.slice(0, index));
                this.text[key] = String.fromCharCode.apply(String, text.slice(index + 1));
                break;
              case 'IEND':
                if (frame) {
                  this.animation.frames.push(frame);
                }
                this.colors = function () {
                  switch (_this.colorType) {
                    case 0:
                    case 3:
                    case 4:
                      return 1;
                    case 2:
                    case 6:
                      return 3;
                  }
                }.call(this);
                var _ref = this.colorType;
                this.hasAlphaChannel = _ref === 4 || _ref === 6;
                var colors = this.colors + (this.hasAlphaChannel ? 1 : 0);
                this.pixelBitlength = this.bits * colors;
                this.colorSpace = function () {
                  switch (_this.colors) {
                    case 1:
                      return 'DeviceGray';
                    case 3:
                      return 'DeviceRGB';
                  }
                }.call(this);
                if (!(this.imgData instanceof Uint8Array)) {
                  this.imgData = new Uint8Array(this.imgData);
                }
                return;
              default:
                this.pos += chunkSize;
            }
            this.pos += 4;
            if (this.pos > this.data.length) {
              throw new Error(getError(6017));
            }
          }
        }
        var _proto = PNGReader.prototype;
        _proto.read = function read(bytes) {
          var i = 0;
          var _i = 0;
          var _results = [];
          for (i = _i = 0; bytes >= 0 ? _i < bytes : _i > bytes; i = bytes >= 0 ? ++_i : --_i) {
            _results.push(this.data[this.pos++]);
          }
          return _results;
        };
        _proto.readUInt32 = function readUInt32() {
          var b1 = this.data[this.pos++] << 24;
          var b2 = this.data[this.pos++] << 16;
          var b3 = this.data[this.pos++] << 8;
          var b4 = this.data[this.pos++];
          return b1 | b2 | b3 | b4;
        };
        _proto.readUInt16 = function readUInt16() {
          var b1 = this.data[this.pos++] << 8;
          var b2 = this.data[this.pos++];
          return b1 | b2;
        };
        _proto.decodePixels = function decodePixels(data) {
          if (data == null) {
            data = this.imgData;
          }
          if (data.length === 0) {
            return new Uint8Array(0);
          }
          var inflate = new zlib.Inflate(data, {
            index: 0,
            verify: false
          });
          data = inflate.decompress();
          var pixelBytes = this.pixelBitlength / 8;
          var scanlineLength = pixelBytes * this.width;
          var pixels = new Uint8Array(scanlineLength * this.height);
          var length = data.length;
          var row = 0;
          var pos = 0;
          var c = 0;
          var ccbyte = 0;
          var col = 0;
          var i = 0;
          var _i = 0;
          var _j = 0;
          var _k = 0;
          var _l = 0;
          var _m = 0;
          var left = 0;
          var p = 0;
          var pa = 0;
          var paeth = 0;
          var pb = 0;
          var pc = 0;
          var upper = 0;
          var upperLeft = 0;
          while (pos < length) {
            switch (data[pos++]) {
              case 0:
                for (i = _i = 0; _i < scanlineLength; i = _i += 1) {
                  pixels[c++] = data[pos++];
                }
                break;
              case 1:
                for (i = _j = 0; _j < scanlineLength; i = _j += 1) {
                  ccbyte = data[pos++];
                  left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
                  pixels[c++] = (ccbyte + left) % 256;
                }
                break;
              case 2:
                for (i = _k = 0; _k < scanlineLength; i = _k += 1) {
                  ccbyte = data[pos++];
                  col = (i - i % pixelBytes) / pixelBytes;
                  upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + i % pixelBytes];
                  pixels[c++] = (upper + ccbyte) % 256;
                }
                break;
              case 3:
                for (i = _l = 0; _l < scanlineLength; i = _l += 1) {
                  ccbyte = data[pos++];
                  col = (i - i % pixelBytes) / pixelBytes;
                  left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
                  upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + i % pixelBytes];
                  pixels[c++] = (ccbyte + Math.floor((left + upper) / 2)) % 256;
                }
                break;
              case 4:
                for (i = _m = 0; _m < scanlineLength; i = _m += 1) {
                  ccbyte = data[pos++];
                  col = (i - i % pixelBytes) / pixelBytes;
                  left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
                  if (row === 0) {
                    upper = upperLeft = 0;
                  } else {
                    upper = pixels[(row - 1) * scanlineLength + col * pixelBytes + i % pixelBytes];
                    upperLeft = col && pixels[(row - 1) * scanlineLength + (col - 1) * pixelBytes + i % pixelBytes];
                  }
                  p = left + upper - upperLeft;
                  pa = Math.abs(p - left);
                  pb = Math.abs(p - upper);
                  pc = Math.abs(p - upperLeft);
                  if (pa <= pb && pa <= pc) {
                    paeth = left;
                  } else if (pb <= pc) {
                    paeth = upper;
                  } else {
                    paeth = upperLeft;
                  }
                  pixels[c++] = (ccbyte + paeth) % 256;
                }
                break;
              default:
                throw new Error(getError(6018, data[pos - 1]));
            }
            row++;
          }
          return pixels;
        };
        _proto.copyToImageData = function copyToImageData(imageData, pixels) {
          var alpha = this.hasAlphaChannel;
          var palette;
          var colors = this.colors;
          if (this.palette.length) {
            palette = this._decodedPalette != null ? this._decodedPalette : this._decodedPalette = this.decodePalette();
            colors = 4;
            alpha = true;
          }
          var data = imageData.data || imageData;
          var length = data.length;
          var input = palette || pixels;
          var i = 0;
          var j = 0;
          var k = 0;
          var v = 0;
          if (colors === 1) {
            while (i < length) {
              k = palette ? pixels[i / 4] * 4 : j;
              v = input[k++];
              data[i++] = v;
              data[i++] = v;
              data[i++] = v;
              data[i++] = alpha ? input[k++] : 255;
              j = k;
            }
          } else {
            while (i < length) {
              k = palette ? pixels[i / 4] * 4 : j;
              data[i++] = input[k++];
              data[i++] = input[k++];
              data[i++] = input[k++];
              data[i++] = alpha ? input[k++] : 255;
              j = k;
            }
          }
        };
        _proto.decodePalette = function decodePalette() {
          var palette = this.palette;
          var transparency = this.transparency.indexed || [];
          var ret = new Uint8Array((transparency.length || 0) + palette.length);
          var pos = 0;
          var c = 0;
          var _ref1 = 0;
          for (var i = 0, _i = 0, _ref = palette.length; _i < _ref; i = _i += 3) {
            ret[pos++] = palette[i];
            ret[pos++] = palette[i + 1];
            ret[pos++] = palette[i + 2];
            _ref1 = transparency[c++];
            ret[pos++] = _ref1 != null ? _ref1 : 255;
          }
          return ret;
        };
        _proto.render = function render(canvas) {
          canvas.width = this.width;
          canvas.height = this.height;
          var ctx = canvas.getContext('2d');
          var data = ctx.createImageData(this.width, this.height);
          this.copyToImageData(data, this.decodePixels(null));
          return ctx.putImageData(data, 0, 0);
        };
        return PNGReader;
      }());
    }
  };
});