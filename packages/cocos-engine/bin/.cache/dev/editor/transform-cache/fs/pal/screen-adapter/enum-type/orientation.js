System.register("q-bundled:///fs/pal/screen-adapter/enum-type/orientation.js", [], function (_export, _context) {
  "use strict";

  var _PORTRAIT, _PORTRAIT_UPSIDE_DOWN, _LEFT, _RIGHT, _LANDSCAPE, _AUTO, Orientation;
  _export("Orientation", void 0);
  return {
    setters: [],
    execute: function () {
      /*
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
      _PORTRAIT = 1;
      _PORTRAIT_UPSIDE_DOWN = _PORTRAIT << 1;
      _LEFT = _PORTRAIT << 2;
      _RIGHT = _PORTRAIT << 3;
      _LANDSCAPE = _LEFT | _RIGHT;
      _AUTO = _PORTRAIT | _LANDSCAPE;
      (function (Orientation) {
        Orientation[Orientation["PORTRAIT"] = _PORTRAIT] = "PORTRAIT";
        Orientation[Orientation["PORTRAIT_UPSIDE_DOWN"] = _PORTRAIT_UPSIDE_DOWN] = "PORTRAIT_UPSIDE_DOWN";
        Orientation[Orientation["LANDSCAPE_LEFT"] = _LEFT] = "LANDSCAPE_LEFT";
        Orientation[Orientation["LANDSCAPE_RIGHT"] = _RIGHT] = "LANDSCAPE_RIGHT";
        Orientation[Orientation["LANDSCAPE"] = _LANDSCAPE] = "LANDSCAPE";
        Orientation[Orientation["AUTO"] = _AUTO] = "AUTO";
      })(Orientation || _export("Orientation", Orientation = {}));
    }
  };
});