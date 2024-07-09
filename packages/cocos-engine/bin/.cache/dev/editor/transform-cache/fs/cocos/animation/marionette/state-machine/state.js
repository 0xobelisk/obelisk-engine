System.register("q-bundled:///fs/cocos/animation/marionette/state-machine/state.js", ["../ownership.js", "../../../core/index.js", "../../define.js", "../../../serialization/instantiate.js", "../animation-graph-editor-extras-clone-helper.js"], function (_export, _context) {
  "use strict";

  var ownerSymbol, EditorExtendable, js, editorExtrasTag, _decorator, CLASS_NAME_PREFIX_ANIM, instantiate, cloneAnimationGraphEditorExtrasFrom, _dec, _class, _class2, _initializer, _dec2, _class4, _class5, _initializer2, outgoingsSymbol, incomingsSymbol, ccclass, serializable, State, InteractiveState;
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
      ({
        ccclass,
        serializable
      } = _decorator);
      _export("State", State = (_dec = ccclass('cc.animation.State'), _dec(_class = (_class2 = class State extends EditorExtendable {
        constructor() {
          super();
          this.name = _initializer && _initializer();
          this[outgoingsSymbol] = [];
          this[incomingsSymbol] = [];
        }
        copyTo(that) {
          that.name = this.name;
          that[editorExtrasTag] = cloneAnimationGraphEditorExtrasFrom(this);
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "name", [serializable], function () {
        return '';
      })), _class2)) || _class));
      _export("InteractiveState", InteractiveState = (_dec2 = ccclass(`${CLASS_NAME_PREFIX_ANIM}InteractiveState`), _dec2(_class4 = (_class5 = class InteractiveState extends State {
        constructor(...args) {
          super(...args);
          this._components = _initializer2 && _initializer2();
        }
        get components() {
          return this._components;
        }
        addComponent(constructor) {
          const component = new constructor();
          this._components.push(component);
          return component;
        }
        removeComponent(component) {
          js.array.remove(this._components, component);
        }
        instantiateComponents() {
          const instantiatedComponents = this._components.map(component => {
            const instantiated = instantiate(component);
            return instantiated;
          });
          return instantiatedComponents;
        }
        copyTo(that) {
          super.copyTo(that);
          that._components = this.instantiateComponents();
        }
      }, (_initializer2 = _applyDecoratedInitializer(_class5.prototype, "_components", [serializable], function () {
        return [];
      })), _class5)) || _class4));
    }
  };
});