System.register("q-bundled:///fs/cocos/animation/target-path.js", ["../core/data/decorators/index.js", "../scene-graph/node.js", "../core/index.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, Node, warnID, _dec, _class, _class2, _initializer, _dec2, _class4, _class5, _initializer2, HierarchyPath, ComponentPath;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  /**
   * @deprecated Since V3.3, use [[TrackPath]] instead.
   */

  /**
   * @deprecated Since V3.3, use [[TrackPath]] instead.
   */

  /**
   * @deprecated Since V3.3, use [[TrackPath]] instead.
   */

  /**
   * @deprecated Since V3.3, use [[TrackPath]] instead.
   */
  function isPropertyPath(path) {
    return typeof path === 'string' || typeof path === 'number';
  }

  /**
   * @deprecated Since V3.3, use [[TrackPath]] instead.
   */
  function isCustomPath(path, constructor) {
    return path instanceof constructor;
  }

  /**
   * @deprecated Since V3.3, use [[TrackPath]] instead.
   */
  _export({
    isPropertyPath: isPropertyPath,
    isCustomPath: isCustomPath
  });
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_sceneGraphNodeJs) {
      Node = _sceneGraphNodeJs.Node;
    }, function (_coreIndexJs) {
      warnID = _coreIndexJs.warnID;
    }],
    execute: function () {
      _export("HierarchyPath", HierarchyPath = (_dec = ccclass('cc.animation.HierarchyPath'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function HierarchyPath(path) {
          this.path = _initializer && _initializer();
          this.path = path || '';
        }
        var _proto = HierarchyPath.prototype;
        _proto.get = function get(target) {
          if (!(target instanceof Node)) {
            warnID(3925);
            return null;
          }
          var result = target.getChildByPath(this.path);
          if (!result) {
            warnID(3926, target.name, this.path);
            return null;
          }
          return result;
        };
        return HierarchyPath;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "path", [serializable], function () {
        return '';
      })), _class2)) || _class));
      /**
       * @deprecated Since V3.3, use [[TrackPath]] instead.
       */
      _export("ComponentPath", ComponentPath = (_dec2 = ccclass('cc.animation.ComponentPath'), _dec2(_class4 = (_class5 = /*#__PURE__*/function () {
        function ComponentPath(component) {
          this.component = _initializer2 && _initializer2();
          this.component = component || '';
        }
        var _proto2 = ComponentPath.prototype;
        _proto2.get = function get(target) {
          if (!(target instanceof Node)) {
            warnID(3927);
            return null;
          }
          var result = target.getComponent(this.component);
          if (!result) {
            warnID(3928, target.name, this.component);
            return null;
          }
          return result;
        };
        return ComponentPath;
      }(), (_initializer2 = _applyDecoratedInitializer(_class5.prototype, "component", [serializable], function () {
        return '';
      })), _class5)) || _class4));
    }
  };
});