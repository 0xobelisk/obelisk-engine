System.register("q-bundled:///fs/cocos/animation/marionette/state-machine/state.js", ["../ownership.js", "../../../core/index.js", "../../define.js", "../../../serialization/instantiate.js", "../animation-graph-editor-extras-clone-helper.js"], function (_export, _context) {
  "use strict";

  var ownerSymbol, EditorExtendable, js, editorExtrasTag, _decorator, CLASS_NAME_PREFIX_ANIM, instantiate, cloneAnimationGraphEditorExtrasFrom, _dec, _class, _class2, _initializer, _dec2, _class4, _class5, _initializer2, outgoingsSymbol, incomingsSymbol, ccclass, serializable, State, InteractiveState;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_ownershipJs) {
      ownerSymbol = _ownershipJs.ownerSymbol;
    }, function (_coreIndexJs) {
      EditorExtendable = _coreIndexJs.EditorExtendable;
      js = _coreIndexJs.js;
      editorExtrasTag = _coreIndexJs.editorExtrasTag;
      _decorator = _coreIndexJs._decorator;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }, function (_serializationInstantiateJs) {
      instantiate = _serializationInstantiateJs.instantiate;
    }, function (_animationGraphEditorExtrasCloneHelperJs) {
      cloneAnimationGraphEditorExtrasFrom = _animationGraphEditorExtrasCloneHelperJs.cloneAnimationGraphEditorExtrasFrom;
    }],
    execute: function () {
      _export("outgoingsSymbol", outgoingsSymbol = Symbol('[[Outgoing transitions]]'));
      _export("incomingsSymbol", incomingsSymbol = Symbol('[[Incoming transitions]]'));
      ccclass = _decorator.ccclass;
      serializable = _decorator.serializable;
      _export("State", State = (_dec = ccclass('cc.animation.State'), _dec(_class = (_class2 = /*#__PURE__*/function (_EditorExtendable) {
        _inheritsLoose(State, _EditorExtendable);
        function State() {
          var _this;
          _this = _EditorExtendable.call(this) || this;
          _this.name = _initializer && _initializer();
          _this[outgoingsSymbol] = [];
          _this[incomingsSymbol] = [];
          return _this;
        }
        var _proto = State.prototype;
        _proto.copyTo = function copyTo(that) {
          that.name = this.name;
          that[editorExtrasTag] = cloneAnimationGraphEditorExtrasFrom(this);
        };
        return State;
      }(EditorExtendable), (_initializer = _applyDecoratedInitializer(_class2.prototype, "name", [serializable], function () {
        return '';
      })), _class2)) || _class));
      _export("InteractiveState", InteractiveState = (_dec2 = ccclass(CLASS_NAME_PREFIX_ANIM + "InteractiveState"), _dec2(_class4 = (_class5 = /*#__PURE__*/function (_State) {
        _inheritsLoose(InteractiveState, _State);
        function InteractiveState() {
          var _this2;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this2 = _State.call.apply(_State, [this].concat(args)) || this;
          _this2._components = _initializer2 && _initializer2();
          return _this2;
        }
        var _proto2 = InteractiveState.prototype;
        _proto2.addComponent = function addComponent(constructor) {
          var component = new constructor();
          this._components.push(component);
          return component;
        };
        _proto2.removeComponent = function removeComponent(component) {
          js.array.remove(this._components, component);
        };
        _proto2.instantiateComponents = function instantiateComponents() {
          var instantiatedComponents = this._components.map(function (component) {
            var instantiated = instantiate(component);
            return instantiated;
          });
          return instantiatedComponents;
        };
        _proto2.copyTo = function copyTo(that) {
          _State.prototype.copyTo.call(this, that);
          that._components = this.instantiateComponents();
        };
        _createClass(InteractiveState, [{
          key: "components",
          get: function get() {
            return this._components;
          }
        }]);
        return InteractiveState;
      }(State), (_initializer2 = _applyDecoratedInitializer(_class5.prototype, "_components", [serializable], function () {
        return [];
      })), _class5)) || _class4));
    }
  };
});