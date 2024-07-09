System.register("q-bundled:///fs/pal/input/web/index.js", ["../../integrity-check.js", "./accelerometer-input.js", "./gamepad-input.js", "./handle-input.js", "./hmd-input.js", "./handheld-input.js", "./keyboard-input.js", "./mouse-input.js", "./touch-input.js"], function (_export, _context) {
  "use strict";

  var checkPalIntegrity, withImpl;
  return {
    setters: [function (_integrityCheckJs) {
      checkPalIntegrity = _integrityCheckJs.checkPalIntegrity;
      withImpl = _integrityCheckJs.withImpl;
    }, function (_accelerometerInputJs) {
      var _exportObj = {};
      for (var _key in _accelerometerInputJs) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _accelerometerInputJs[_key];
      }
      _export(_exportObj);
    }, function (_gamepadInputJs) {
      var _exportObj2 = {};
      for (var _key2 in _gamepadInputJs) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _gamepadInputJs[_key2];
      }
      _export(_exportObj2);
    }, function (_handleInputJs) {
      var _exportObj3 = {};
      for (var _key3 in _handleInputJs) {
        if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _handleInputJs[_key3];
      }
      _export(_exportObj3);
    }, function (_hmdInputJs) {
      var _exportObj4 = {};
      for (var _key4 in _hmdInputJs) {
        if (_key4 !== "default" && _key4 !== "__esModule") _exportObj4[_key4] = _hmdInputJs[_key4];
      }
      _export(_exportObj4);
    }, function (_handheldInputJs) {
      var _exportObj5 = {};
      for (var _key5 in _handheldInputJs) {
        if (_key5 !== "default" && _key5 !== "__esModule") _exportObj5[_key5] = _handheldInputJs[_key5];
      }
      _export(_exportObj5);
    }, function (_keyboardInputJs) {
      var _exportObj6 = {};
      for (var _key6 in _keyboardInputJs) {
        if (_key6 !== "default" && _key6 !== "__esModule") _exportObj6[_key6] = _keyboardInputJs[_key6];
      }
      _export(_exportObj6);
    }, function (_mouseInputJs) {
      var _exportObj7 = {};
      for (var _key7 in _mouseInputJs) {
        if (_key7 !== "default" && _key7 !== "__esModule") _exportObj7[_key7] = _mouseInputJs[_key7];
      }
      _export(_exportObj7);
    }, function (_touchInputJs) {
      var _exportObj8 = {};
      for (var _key8 in _touchInputJs) {
        if (_key8 !== "default" && _key8 !== "__esModule") _exportObj8[_key8] = _touchInputJs[_key8];
      }
      _export(_exportObj8);
    }],
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

      checkPalIntegrity(withImpl());
    }
  };
});