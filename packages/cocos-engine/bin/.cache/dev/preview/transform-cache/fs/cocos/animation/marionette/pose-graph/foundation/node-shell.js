System.register("q-bundled:///fs/cocos/animation/marionette/pose-graph/foundation/node-shell.js", ["../../../../core/index.js", "../../../../core/data/decorators/index.js", "../../../define.js"], function (_export, _context) {
  "use strict";

  var EditorExtendable, ccclass, serializable, CLASS_NAME_PREFIX_ANIM, _dec, _class, _class2, _initializer, _dec2, _class4, _class5, _initializer2, _initializer3, _initializer4, PoseGraphNodeShell, PoseGraphNodeInputBinding;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
  function isEqualNodeInputPath(lhs, rhs) {
    var lhsPropertyKey = lhs[0],
      lhsElementIndex = lhs[1];
    var rhsPropertyKey = rhs[0],
      rhsElementIndex = rhs[1];
    return lhsPropertyKey === rhsPropertyKey && lhsElementIndex === rhsElementIndex;
  }

  /**
   * @zh 描述既定结点（作为消费方）和另一结点（作为生产方）之间的绑定信息。
   * @en Describes the binding information between a given node(as consumer) and another node(as producer).
   */
  return {
    setters: [function (_coreIndexJs) {
      EditorExtendable = _coreIndexJs.EditorExtendable;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
    }],
    execute: function () {
      /**
       * @zh
       * 描述姿势图结点上的某项输入的路径。
       * @en
       * Describes the path to a input of a pose graph node.
       *
       * @internal Internally, the path is stored as an tuple.
       * The first element of tuple is always the input's property key.
       * There can be an optional second tuple element,
       * which represents the input's property's element, if it's an array property.
       */
      /**
       * @zh 表示姿势图结点的外壳。
       *
       * 结点外壳是附着在结点上的、对结点之间的连接（称之为绑定）的描述。
       * 外壳由姿势图以及绑定系统操纵，结点对于其外壳是无感知的。
       *
       * @en Represents the shell of a pose graph node.
       *
       * The node shell is attached to a node,
       * and describes the connections(so called binding) between nodes.
       * Shells are manipulated by pose graph and binding system.
       * Nodes are imperceptible to their shells.
       */
      _export("PoseGraphNodeShell", PoseGraphNodeShell = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "PoseGraphNodeShell"), _dec(_class = (_class2 = /*#__PURE__*/function (_EditorExtendable) {
        _inheritsLoose(PoseGraphNodeShell, _EditorExtendable);
        function PoseGraphNodeShell() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _EditorExtendable.call.apply(_EditorExtendable, [this].concat(args)) || this;
          _this._bindings = _initializer && _initializer();
          return _this;
        }
        var _proto = PoseGraphNodeShell.prototype;
        /**
         * @zh
         * 获取此结点上的所有的绑定。
         * @en
         * Gets all bindings on this node.
         * @returns @zh 绑定对象数组。 @en The binding objects array.
         */
        _proto.getBindings = function getBindings() {
          return this._bindings;
        }

        /**
         * @zh
         * 添加一项绑定。
         * @en
         * Adds a binding.
         * @param inputPath @zh 要绑定的输入的路径。 @en Path of the input to bind.
         * @param producer @zh 生产方结点。 @en The producer node.
         * @param outputIndex @zh 要绑定的生产方的输出索引。 @en Index of the output to bind.
         * @note
         * @zh 绑定是由三元组输入路径、生产方结点和生产方索引唯一键定的。重复的添加相同绑定没有效果。
         * @en A binding is keyed by the 3-element tuple: input path, producer node and producer output index.
         * Redundantly adding a binding takes no effect.
         */;
        _proto.addBinding = function addBinding(inputPath, producer, outputIndex) {
          this._emplaceBinding(new PoseGraphNodeInputBinding(inputPath, producer, outputIndex));
        }

        /**
         * @zh
         * 删除指定输入上的绑定。
         * @en
         * Deletes the binding on specified input.
         * @param inputPath @zh 要解绑的输入的路径。 @en Path of the input to unbind.
         */;
        _proto.deleteBinding = function deleteBinding(inputPath) {
          var index = this._findBindingIndex(inputPath);
          if (index >= 0) {
            this._bindings.splice(index, 1);
          }
        }

        /**
         * @zh
         * 更新绑定，
         * 对于具有相同属性键的、索引小于（或大于） `firstIndex` 的输入的绑定，
         * 将它们替换为上一个（或下一个）索引上的绑定。
         * @en
         * Update bindings so that
         * for the input bindings having specified property key but having element index less than the specified index,
         * substitute them as previous(or next) index's binding.
         * @param propertyKey @zh 输入的属性键。 @en The input's property key.
         * @param firstIndex @zh 见描述。 @en See description.
         * @param forward @en 替换的方向。`true` 表示向前替换，反之向后。
         *              @en Substitution direction. `true` means substitute in forward, backward otherwise.
         */;
        _proto.moveArrayElementBindingForward = function moveArrayElementBindingForward(propertyKey, firstIndex, forward) {
          // TODO: this method has worse performance!
          var bindings = this._bindings;
          var oldBindings = [];
          for (var iBinding = 0; iBinding < bindings.length;
          // Note: array length may be varied.
          ++iBinding) {
            var binding = bindings[iBinding];
            var _binding$inputPath = binding.inputPath,
              consumerPropertyKey = _binding$inputPath[0],
              _binding$inputPath$ = _binding$inputPath[1],
              consumerElementIndex = _binding$inputPath$ === void 0 ? -1 : _binding$inputPath$;
            if (consumerPropertyKey === propertyKey && consumerElementIndex >= firstIndex) {
              oldBindings.push(binding);
              bindings.splice(iBinding, 1);
            }
          }
          for (var _i = 0, _oldBindings = oldBindings; _i < _oldBindings.length; _i++) {
            var oldBinding = _oldBindings[_i];
            var _oldBinding$inputPath = oldBinding.inputPath,
              _consumerPropertyKey = _oldBinding$inputPath[0],
              _oldBinding$inputPath2 = _oldBinding$inputPath[1],
              _consumerElementIndex = _oldBinding$inputPath2 === void 0 ? -1 : _oldBinding$inputPath2;
            this.addBinding([_consumerPropertyKey, _consumerElementIndex + (forward ? -1 : 1)], oldBinding.producer, oldBinding.outputIndex);
          }
        }

        /**
         * @zh
         * 删除绑定到指定生产方结点的所有绑定。
         * @en
         * Deletes all the bindings bound to specified producer.
         * @param producer @zh 生产方结点。 @en The producer node.
         */;
        _proto.deleteBindingTo = function deleteBindingTo(producer) {
          var bindings = this._bindings;
          for (var iBinding = 0; iBinding < bindings.length;
          // Note: array length might vary
          ++iBinding) {
            var binding = bindings[iBinding];
            if (binding.producer === producer) {
              bindings.splice(iBinding, 1);
            }
          }
        }

        /**
         * @zh
         * 查找指定输入上的绑定。
         * @en
         * Finds the binding on specified input.
         * @param inputPath @zh 要查找的输入的路径。 @en Path of the input to find.
         */;
        _proto.findBinding = function findBinding(inputPath) {
          var bindingIndex = this._findBindingIndex(inputPath);
          return bindingIndex >= 0 ? this._bindings[bindingIndex] : undefined;
        };
        _proto._findBindingIndex = function _findBindingIndex(inputPath) {
          return this._bindings.findIndex(function (searchElement) {
            return isEqualNodeInputPath(searchElement.inputPath, inputPath);
          });
        };
        _proto._emplaceBinding = function _emplaceBinding(binding) {
          var index = this._bindings.findIndex(function (searchElement) {
            return isEqualNodeInputPath(searchElement.inputPath, binding.inputPath);
          });
          if (index >= 0) {
            this._bindings[index] = binding;
          } else {
            this._bindings.push(binding);
          }
        };
        return PoseGraphNodeShell;
      }(EditorExtendable), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_bindings", [serializable], function () {
        return [];
      })), _class2)) || _class));
      PoseGraphNodeInputBinding = (_dec2 = ccclass(CLASS_NAME_PREFIX_ANIM + "PoseGraphNodeInputBinding"), _dec2(_class4 = (_class5 = /*#__PURE__*/function () {
        function PoseGraphNodeInputBinding(inputPath, producer, outputIndex) {
          this._inputPath = _initializer2 && _initializer2();
          this._producer = _initializer3 && _initializer3();
          this._outputIndex = _initializer4 && _initializer4();
          this._inputPath = inputPath;
          this._producer = producer;
          if (typeof outputIndex !== 'undefined') {
            this._outputIndex = outputIndex;
          }
        }

        /**
         * @zh 消费方结点的输入路径。
         * @en Input path of consumer node.
         */
        _createClass(PoseGraphNodeInputBinding, [{
          key: "inputPath",
          get: function get() {
            return this._inputPath;
          }

          /**
           * @zh 生产方结点。
           * @en The producer node.
           */
        }, {
          key: "producer",
          get: function get() {
            return this._producer;
          }

          /**
           * @zh 生产方结点的输出索引。
           * @en The producer node's output index.
           */
        }, {
          key: "outputIndex",
          get: function get() {
            return this._outputIndex;
          }
        }]);
        return PoseGraphNodeInputBinding;
      }(), (_initializer2 = _applyDecoratedInitializer(_class5.prototype, "_inputPath", [serializable], null), _initializer3 = _applyDecoratedInitializer(_class5.prototype, "_producer", [serializable], null), _initializer4 = _applyDecoratedInitializer(_class5.prototype, "_outputIndex", [serializable], function () {
        return 0;
      })), _class5)) || _class4);
    }
  };
});