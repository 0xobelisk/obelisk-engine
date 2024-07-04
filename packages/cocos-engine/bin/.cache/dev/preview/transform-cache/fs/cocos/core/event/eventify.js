System.register("q-bundled:///fs/cocos/core/event/eventify.js", ["./callbacks-invoker.js", "../utils/js.js"], function (_export, _context) {
  "use strict";

  var CallbacksInvoker, createMap;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
  /**
   * @zh
   * 实现该接口的对象具有处理事件的能力。
   * @en
   * Objects those implement this interface have essentially the capability to process events.
   */
  /**
   * @en Generate a new class from the given base class, after polyfill all functionalities in [[IEventified]] as if it's extended from [[EventTarget]]
   * @zh 生成一个类，该类继承自指定的基类，并以和 [[EventTarget]] 等同的方式实现了 [[IEventified]] 的所有接口。
   * @param base The base class
   * @example
   * ```ts
   * class Base { say() { console.log('Hello!'); } }
   * class MyClass extends Eventify(Base) { }
   * function (o: MyClass) {
   *     o.say(); // Ok: Extend from `Base`
   *     o.emit('sing', 'The ghost'); // Ok: `MyClass` implements IEventified
   * }
   * ```
   */
  function Eventify(base) {
    var Eventified = /*#__PURE__*/function (_ref) {
      _inheritsLoose(Eventified, _ref);
      function Eventified() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _ref.call.apply(_ref, [this].concat(args)) || this;
        _this._callbackTable = createMap(true);
        return _this;
      }
      var _proto = Eventified.prototype;
      _proto.once = function once(type, callback, target) {
        return this.on(type, callback, target, true);
      };
      _proto.targetOff = function targetOff(typeOrTarget) {
        this.removeAll(typeOrTarget);
      };
      return Eventified;
    }(base); // Mixin with `CallbacksInvokers`'s prototype
    var callbacksInvokerPrototype = CallbacksInvoker.prototype;
    var propertyKeys = Object.getOwnPropertyNames(callbacksInvokerPrototype).concat(Object.getOwnPropertySymbols(callbacksInvokerPrototype));
    for (var iPropertyKey = 0; iPropertyKey < propertyKeys.length; ++iPropertyKey) {
      var propertyKey = propertyKeys[iPropertyKey];
      if (!(propertyKey in Eventified.prototype)) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(callbacksInvokerPrototype, propertyKey);
        if (propertyDescriptor) {
          Object.defineProperty(Eventified.prototype, propertyKey, propertyDescriptor);
        }
      }
    }
    return Eventified;
  }
  _export("Eventify", Eventify);
  return {
    setters: [function (_callbacksInvokerJs) {
      CallbacksInvoker = _callbacksInvokerJs.CallbacksInvoker;
    }, function (_utilsJsJs) {
      createMap = _utilsJsJs.createMap;
    }],
    execute: function () {}
  };
});