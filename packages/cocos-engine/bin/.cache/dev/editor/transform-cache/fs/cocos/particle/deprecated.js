System.register("q-bundled:///fs/cocos/particle/deprecated.js", ["../core/index.js", "./burst.js", "./particle-system.js", "./billboard.js", "./line.js"], function (_export, _context) {
  "use strict";

  var removeProperty, replaceProperty, js, cclegacy, Burst, ParticleSystem, Billboard, Line;
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
  return {
    setters: [function (_coreIndexJs) {
      removeProperty = _coreIndexJs.removeProperty;
      replaceProperty = _coreIndexJs.replaceProperty;
      js = _coreIndexJs.js;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_burstJs) {
      Burst = _burstJs.default;
    }, function (_particleSystemJs) {
      ParticleSystem = _particleSystemJs.ParticleSystem;
    }, function (_billboardJs) {
      Billboard = _billboardJs.Billboard;
    }, function (_lineJs) {
      Line = _lineJs.Line;
    }],
    execute: function () {
      removeProperty(Burst.prototype, 'Burst.prototype', [{
        name: 'minCount'
      }, {
        name: 'maxCount'
      }]);
      replaceProperty(ParticleSystem.prototype, 'ParticleSystem.prototype', [{
        name: 'enableCulling',
        newName: 'dataCulling'
      }]);

      /**
       * Alias of [[ParticleSystem]]
       * @deprecated Since v1.2
       */
      _export("ParticleSystemComponent", ParticleSystem);
      cclegacy.ParticleSystemComponent = ParticleSystem;
      js.setClassAlias(ParticleSystem, 'cc.ParticleSystemComponent');
      /**
       * Alias of [[Billboard]]
       * @deprecated Since v1.2
       */
      _export("BillboardComponent", Billboard);
      cclegacy.BillboardComponent = Billboard;
      js.setClassAlias(Billboard, 'cc.BillboardComponent');
      /**
       * Alias of [[Line]]
       * @deprecated Since v1.2
       */
      _export("LineComponent", Line);
      cclegacy.LineComponent = Line;
      js.setClassAlias(Line, 'cc.LineComponent');
    }
  };
});