System.register(['./find-7a03d1cc.js', './index-ce98320e.js', './device-90bc7390.js'], (function (exports) {
    'use strict';
    var sys, FormatType, FormatInfos, Format;
    return {
        setters: [function () {}, function (module) {
            sys = module.aL;
        }, function (module) {
            FormatType = module.c;
            FormatInfos = module.aO;
            Format = module.b;
        }],
        execute: (function () {

            exports({
                m: mapBuffer,
                r: readBuffer,
                w: writeBuffer
            });

            const _typeMap = {
              [FormatType.UNORM]: 'Uint',
              [FormatType.SNORM]: 'Int',
              [FormatType.UINT]: 'Uint',
              [FormatType.INT]: 'Int',
              [FormatType.UFLOAT]: 'Float',
              [FormatType.FLOAT]: 'Float',
              default: 'Uint'
            };
            function _getDataViewType(info) {
              const type = _typeMap[info.type] || _typeMap.default;
              const bytes = info.size / info.count * 8;
              return `${type}${bytes}`;
            }
            function writeBuffer(target, data, format = Format.R32F, offset = 0, stride = 0) {
              const info = FormatInfos[format];
              if (!stride) {
                stride = info.size;
              }
              const writer = `set${_getDataViewType(info)}`;
              const componentBytesLength = info.size / info.count;
              const nSeg = Math.floor(data.length / info.count);
              const isLittleEndian = sys.isLittleEndian;
              for (let iSeg = 0; iSeg < nSeg; ++iSeg) {
                const x = offset + stride * iSeg;
                for (let iComponent = 0; iComponent < info.count; ++iComponent) {
                  const y = x + componentBytesLength * iComponent;
                  target[writer](y, data[info.count * iSeg + iComponent], isLittleEndian);
                }
              }
            }
            function readBuffer(target, format = Format.R32F, offset = 0, length = target.byteLength - offset, stride = 0, out = []) {
              const info = FormatInfos[format];
              if (!stride) {
                stride = info.size;
              }
              const reader = `get${_getDataViewType(info)}`;
              const componentBytesLength = info.size / info.count;
              const nSeg = Math.floor(length / stride);
              const isLittleEndian = sys.isLittleEndian;
              for (let iSeg = 0; iSeg < nSeg; ++iSeg) {
                const x = offset + stride * iSeg;
                for (let iComponent = 0; iComponent < info.count; ++iComponent) {
                  const y = x + componentBytesLength * iComponent;
                  out[info.count * iSeg + iComponent] = target[reader](y, isLittleEndian);
                }
              }
              return out;
            }
            function mapBuffer(target, callback, format = Format.R32F, offset = 0, length = target.byteLength - offset, stride = 0, out) {
              if (!out) {
                out = new DataView(target.buffer.slice(target.byteOffset, target.byteOffset + target.byteLength));
              }
              const info = FormatInfos[format];
              if (!stride) {
                stride = info.size;
              }
              const writer = `set${_getDataViewType(info)}`;
              const reader = `get${_getDataViewType(info)}`;
              const componentBytesLength = info.size / info.count;
              const nSeg = Math.floor(length / stride);
              const isLittleEndian = sys.isLittleEndian;
              for (let iSeg = 0; iSeg < nSeg; ++iSeg) {
                const x = offset + stride * iSeg;
                for (let iComponent = 0; iComponent < info.count; ++iComponent) {
                  const y = x + componentBytesLength * iComponent;
                  const cur = target[reader](y, isLittleEndian);
                  out[writer](y, callback(cur, iComponent, target), isLittleEndian);
                }
              }
              return out;
            }

        })
    };
}));
