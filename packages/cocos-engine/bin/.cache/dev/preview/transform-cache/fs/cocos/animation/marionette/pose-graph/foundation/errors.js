System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/foundation/errors.js", [], function (_export, _context) {
  "use strict";

  var AddNonFreestandingNodeError, OperationOnFreestandingNodeError;
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
  return {
    setters: [],
    execute: function () {
      _export("AddNonFreestandingNodeError", AddNonFreestandingNodeError = /*#__PURE__*/function (_Error) {
        _inheritsLoose(AddNonFreestandingNodeError, _Error);
        function AddNonFreestandingNodeError(node) {
          return _Error.call(this, "Can not add the specified " + node.toString() + " since it has already been added into another graph.") || this;
        }
        return AddNonFreestandingNodeError;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));
      _export("OperationOnFreestandingNodeError", OperationOnFreestandingNodeError = /*#__PURE__*/function (_Error2) {
        _inheritsLoose(OperationOnFreestandingNodeError, _Error2);
        function OperationOnFreestandingNodeError(node) {
          return _Error2.call(this, "Can not perform specified operation on " + node.toString() + " since it has not been added in to graph.") || this;
        }
        return OperationOnFreestandingNodeError;
      }( /*#__PURE__*/_wrapNativeSuper(Error)));
    }
  };
});