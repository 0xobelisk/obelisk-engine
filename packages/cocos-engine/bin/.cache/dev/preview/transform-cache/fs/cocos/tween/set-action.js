System.register("q-bundled:///fs/cocos/tween/set-action.js", ["./actions/action-instant.js"], function (_export, _context) {
  "use strict";

  var ActionInstant, SetAction;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /*
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
    setters: [function (_actionsActionInstantJs) {
      ActionInstant = _actionsActionInstantJs.ActionInstant;
    }],
    execute: function () {
      _export("SetAction", SetAction = /*#__PURE__*/function (_ActionInstant) {
        _inheritsLoose(SetAction, _ActionInstant);
        function SetAction(props) {
          var _this;
          _this = _ActionInstant.call(this) || this;
          _this._props = void 0;
          _this._props = {};
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          props !== undefined && _this.init(props);
          return _this;
        }
        var _proto = SetAction.prototype;
        _proto.init = function init(props) {
          for (var name in props) {
            this._props[name] = props[name];
          }
          return true;
        };
        _proto.update = function update() {
          var props = this._props;
          var target = this.target;
          for (var name in props) {
            target[name] = props[name];
          }
        };
        _proto.clone = function clone() {
          var action = new SetAction();
          action.init(this._props);
          return action;
        };
        return SetAction;
      }(ActionInstant));
    }
  };
});