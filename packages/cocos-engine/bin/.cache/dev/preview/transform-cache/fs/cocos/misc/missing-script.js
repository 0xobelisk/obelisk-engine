System.register("q-bundled:///fs/cocos/misc/missing-script.js", ["../core/data/decorators/index.js", "../scene-graph/component.js", "../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, inspector, editorOnly, serializable, Component, warnID, error, js, cclegacy, _dec, _dec2, _class, _class2, _initializer, MissingScript, props;
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
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      inspector = _coreDataDecoratorsIndexJs.inspector;
      editorOnly = _coreDataDecoratorsIndexJs.editorOnly;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_coreIndexJs) {
      warnID = _coreIndexJs.warnID;
      error = _coreIndexJs.error;
      js = _coreIndexJs.js;
      cclegacy = _coreIndexJs.cclegacy;
    }],
    execute: function () {
      /**
       * @en
       * A temp fallback to contain the original component which can not be loaded.
       * @zh
       * 包含无法加载的原始组件的临时回退。
       */
      _export("MissingScript", MissingScript = (_dec = ccclass('cc.MissingScript'), _dec2 = inspector('packages://inspector/inspectors/comps/missing-script.js'), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MissingScript, _Component);
        // _scriptUuid: {
        //    get: function () {
        //        var id = this._$erialized.__type__;
        //        if (EditorExtends.UuidUtils.isUuid(id)) {
        //            return EditorExtends.UuidUtils.decompressUuid(id);
        //        }
        //        return '';
        //    },
        // },
        /*
         * @param {string} id
         * @return {function} constructor
         */
        MissingScript.safeFindClass = function safeFindClass(id) {
          var cls = js.getClassById(id);
          if (cls) {
            return cls;
          }
          cclegacy.deserialize.reportMissingClass(id);
          return undefined;
        }

        // the serialized data for original script object
        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */;

        function MissingScript() {
          var _this;
          _this = _Component.call(this) || this;
          _this._$erialized = _initializer && _initializer();
          return _this;
        }
        var _proto = MissingScript.prototype;
        _proto.onLoad = function onLoad() {
          warnID(4600, this.node.name);
        };
        return MissingScript;
      }(Component), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_$erialized", [serializable, editorOnly], function () {
        return null;
      })), _class2)) || _class) || _class));
      cclegacy._MissingScript = MissingScript;

      // DEBUG: Check MissingScript class for issue 9878
      // import { error } from '../platform/debug';
      try {
        props = MissingScript.__values__;
        if (props.length === 0 || props[props.length - 1] !== '_$erialized') {
          error("The '_$erialized' prop in MissingScript is missing. Please contact jare.");
          error("    Error props: ['" + props + "']");
          // props.push('_$erialized');
        }
      } catch (e) {
        error("Error when checking MissingScript 5, " + e);
      }
    }
  };
});