System.register("q-bundled:///fs/cocos/animation/tracks/track.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "../../core/data/utils/asserts.js", "../../scene-graph/index.js", "../define.js", "../target-path.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, uniquelyReferenced, SUPPORT_JIT, errorID, warnID, js, assertIsTrue, Node, CLASS_NAME_PREFIX_ANIM, createEvalSymbol, ComponentPath, HierarchyPath, isPropertyPath, _dec, _class, _class2, _initializer, _dec2, _class4, _class5, _initializer2, _initializer3, _class6, _dec3, _class7, _class8, _initializer4, _dec4, _class10, _class11, _initializer5, _dec5, _class13, _class14, _initializer6, normalizedFollowTag, parseTrsPathTag, trackBindingTag, TrackPath, TrackBinding, Track, Channel, SingleChannelTrack, SingleChannelTrackEval;
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function isTrsPropertyName(name) {
    return name === 'position' || name === 'rotation' || name === 'scale' || name === 'eulerAngles';
  }
  _export("isTrsPropertyName", isTrsPropertyName);
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      uniquelyReferenced = _coreDataDecoratorsIndexJs.uniquelyReferenced;
    }, function (_virtualInternal253AconstantsJs) {
      SUPPORT_JIT = _virtualInternal253AconstantsJs.SUPPORT_JIT;
    }, function (_coreIndexJs) {
      errorID = _coreIndexJs.errorID;
      warnID = _coreIndexJs.warnID;
      js = _coreIndexJs.js;
    }, function (_coreDataUtilsAssertsJs) {
      assertIsTrue = _coreDataUtilsAssertsJs.assertIsTrue;
    }, function (_sceneGraphIndexJs) {
      Node = _sceneGraphIndexJs.Node;
    }, function (_defineJs) {
      CLASS_NAME_PREFIX_ANIM = _defineJs.CLASS_NAME_PREFIX_ANIM;
      createEvalSymbol = _defineJs.createEvalSymbol;
    }, function (_targetPathJs) {
      ComponentPath = _targetPathJs.ComponentPath;
      HierarchyPath = _targetPathJs.HierarchyPath;
      isPropertyPath = _targetPathJs.isPropertyPath;
    }],
    execute: function () {
      _export("normalizedFollowTag", normalizedFollowTag = Symbol('NormalizedFollow'));
      parseTrsPathTag = Symbol('ConvertAsTrsPath');
      _export("trackBindingTag", trackBindingTag = Symbol('TrackBinding'));
      /**
       * @en Describes how to find the animation target.
       * @zh 描述怎样寻址动画目标。
       */
      _export("TrackPath", TrackPath = (_dec = ccclass(CLASS_NAME_PREFIX_ANIM + "TrackPath"), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function TrackPath() {
          this._paths = _initializer && _initializer();
        }
        var _proto = TrackPath.prototype;
        /**
         * @en Appends a property path.
         * @zh 附加一段属性路径。
         * @param name The property's name.
         * @returns `this`
         */
        _proto.toProperty = function toProperty(name) {
          this._paths.push(name);
          return this;
        }

        /**
         * @en Appends an array element path.
         * @zh 附加一段数组元素路径。
         * @param index The element's index.
         * @returns `this`
         */;
        _proto.toElement = function toElement(index) {
          this._paths.push(index);
          return this;
        }

        /**
         * @en Appends a hierarchy path.
         * @zh 附加一段层级路径。
         * @param nodePath Path to the children.
         * @returns `this`
         */;
        _proto.toHierarchy = function toHierarchy(nodePath) {
          this._paths.push(new HierarchyPath(nodePath));
          return this;
        }

        /**
         * @en Appends a component path.
         * @zh 附加一段组件路径。
         * @param constructor @en The constructor of the component. @zh 组件的构造函数。
         * @returns `this`
         */;
        _proto.toComponent = function toComponent(constructor) {
          var path = new ComponentPath(typeof constructor === 'string' ? constructor : js.getClassName(constructor));
          this._paths.push(path);
          return this;
        }

        /**
         * @internal Reserved for backward compatibility. DO NOT USE IT IN YOUR CODE.
         */;
        _proto.toCustomized = function toCustomized(resolver) {
          this._paths.push(resolver);
          return this;
        }

        /**
         * @en Appends paths to this path.
         * @zh 附加指定路径到此路径后。
         * @param trackPaths Paths to append.
         * @returns `this`.
         */;
        _proto.append = function append() {
          var _this$_paths;
          for (var _len = arguments.length, trackPaths = new Array(_len), _key = 0; _key < _len; _key++) {
            trackPaths[_key] = arguments[_key];
          }
          var paths = (_this$_paths = this._paths).concat.apply(_this$_paths, trackPaths.map(function (trackPath) {
            return trackPath._paths;
          }));
          this._paths = paths;
          return this;
        }

        /**
         * @zh 判断指定路径段是否是属性路径。
         * @en Decides if the specific path segment is property path.
         * @param index Index to the segment。
         * @returns The judgement result.
         */;
        _proto.isPropertyAt = function isPropertyAt(index) {
          return typeof this._paths[index] === 'string';
        }

        /**
         * @zh 将指定路径段视为属性路径，获取其描述的属性。
         * @en Treats the path segment as a property path. Obtains the property it describes.
         * @param index Index to the segment。
         * @returns The property.
         */;
        _proto.parsePropertyAt = function parsePropertyAt(index) {
          return this._paths[index];
        }

        /**
         * @zh 判断指定路径段是否是数组元素路径。
         * @en Decides if the specific path segment is an array element path.
         * @param index Index to the segment。
         * @returns The judgement result.
         */;
        _proto.isElementAt = function isElementAt(index) {
          return typeof this._paths[index] === 'number';
        }

        /**
         * @zh 将指定路径段视为数组元素路径，获取其描述的数组元素。
         * @en Treats the path segment as an array element path. Obtains the element index it describes.
         * @param index Index to the segment。
         * @returns The element index.
         */;
        _proto.parseElementAt = function parseElementAt(index) {
          return this._paths[index];
        }

        /**
         * @zh 判断指定路径段是否是层级路径。
         * @en Decides if the specific path segment is a hierarchy path.
         * @param index Index to the segment。
         * @returns The judgement result.
         */;
        _proto.isHierarchyAt = function isHierarchyAt(index) {
          return this._paths[index] instanceof HierarchyPath;
        }

        /**
         * @zh 将指定路径段视为层级路径，获取其描述的层级路径。
         * @en Treats the path segment as a hierarchy path. Obtains the hierarchy path it describes.
         * @param index Index to the segment。
         * @returns The hierarchy path.
         */;
        _proto.parseHierarchyAt = function parseHierarchyAt(index) {
          assertIsTrue(this.isHierarchyAt(index));
          return this._paths[index].path;
        }

        /**
         * @zh 判断指定路径段是否是组件路径。
         * @en Decides if the specific path segment is a component path.
         * @param index Index to the segment。
         * @returns The judgement result.
         */;
        _proto.isComponentAt = function isComponentAt(index) {
          return this._paths[index] instanceof ComponentPath;
        }

        /**
         * @zh 将指定路径段视为组件路径，获取其描述的组件路径。
         * @en Treats the path segment as a hierarchy path. Obtains the component path it describes.
         * @param index Index to the segment。
         * @returns The component path.
         */;
        _proto.parseComponentAt = function parseComponentAt(index) {
          assertIsTrue(this.isComponentAt(index));
          return this._paths[index].component;
        }

        /**
         * @en Slices a interval of the path.
         * @zh 分割指定区段上的路径。
         * @param beginIndex Begin index to the segment. Default to 0.
         * @param endIndex End index to the segment. Default to the last segment.
         * @returns The new path.
         */;
        _proto.slice = function slice(beginIndex, endIndex) {
          var trackPath = new TrackPath();
          trackPath._paths = this._paths.slice(beginIndex, endIndex);
          return trackPath;
        }

        /**
         * @internal
         */;
        _proto.trace = function trace(object, beginIndex, endIndex) {
          var _beginIndex, _endIndex;
          (_beginIndex = beginIndex) !== null && _beginIndex !== void 0 ? _beginIndex : beginIndex = 0;
          (_endIndex = endIndex) !== null && _endIndex !== void 0 ? _endIndex : endIndex = this._paths.length;
          return this[normalizedFollowTag](object, beginIndex, endIndex);
        }

        /**
         * @internal
         */;
        _proto[parseTrsPathTag] = function () {
          var paths = this._paths;
          var nPaths = paths.length;
          var iPath = 0;
          var nodePath = '';
          for (; iPath < nPaths; ++iPath) {
            var path = paths[iPath];
            if (!(path instanceof HierarchyPath)) {
              break;
            } else if (!path.path) {
              continue;
            } else if (nodePath) {
              nodePath += "/" + path.path;
            } else {
              nodePath = path.path;
            }
          }
          if (iPath === nPaths) {
            return null;
          }
          var prs;
          if (iPath !== nPaths - 1) {
            return null;
          }
          switch (paths[iPath]) {
            case 'position':
            case 'scale':
            case 'rotation':
            case 'eulerAngles':
              prs = paths[iPath];
              break;
            default:
              return null;
          }
          return {
            node: nodePath,
            property: prs
          };
        }

        /**
         * @internal
         */;
        _proto[normalizedFollowTag] = function (root, beginIndex, endIndex) {
          var paths = this._paths;
          var result = root;
          for (var iPath = beginIndex; iPath < endIndex; ++iPath) {
            var path = paths[iPath];
            if (isPropertyPath(path)) {
              if (!(path in result)) {
                warnID(3929, path);
                return null;
              } else {
                result = result[path];
              }
            } else {
              result = path.get(result);
            }
            if (result === null) {
              break;
            }
          }
          return result;
        };
        _createClass(TrackPath, [{
          key: "length",
          get:
          /**
           * @en The length of the path.
           * @zh 此路径的段数。
           */
          function get() {
            return this._paths.length;
          }
        }]);
        return TrackPath;
      }(), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_paths", [serializable], function () {
        return [];
      })), _class2)) || _class));
      /**
       * Composite of track path and value proxy.
       * Not exposed to external. If there is any reason it should be exposed,
       * please redesign the public interfaces.
       */
      _export("TrackBinding", TrackBinding = (_dec2 = ccclass(CLASS_NAME_PREFIX_ANIM + "TrackBinding"), _dec2(_class4 = uniquelyReferenced(_class4 = (_class5 = (_class6 = /*#__PURE__*/function () {
        function TrackBinding() {
          this.path = _initializer2 && _initializer2();
          this.proxy = _initializer3 && _initializer3();
        }
        var _proto2 = TrackBinding.prototype;
        _proto2.parseTrsPath = function parseTrsPath() {
          if (this.proxy) {
            return null;
          } else {
            return this.path[parseTrsPathTag]();
          }
        };
        _proto2.createRuntimeBinding = function createRuntimeBinding(target, poseOutput, isConstant) {
          var path = this.path,
            proxy = this.proxy;
          var nPaths = path.length;
          var iLastPath = nPaths - 1;
          if (nPaths !== 0 && (path.isPropertyAt(iLastPath) || path.isElementAt(iLastPath)) && !proxy) {
            var lastPropertyKey = path.isPropertyAt(iLastPath) ? path.parsePropertyAt(iLastPath) : path.parseElementAt(iLastPath);
            var resultTarget = path[normalizedFollowTag](target, 0, nPaths - 1);
            if (resultTarget === null) {
              return null;
            }
            if (poseOutput && resultTarget instanceof Node && isTrsPropertyName(lastPropertyKey)) {
              var blendStateWriter = poseOutput.createPoseWriter(resultTarget, lastPropertyKey, isConstant);
              return blendStateWriter;
            }
            var _setValue;
            var _getValue;
            if (SUPPORT_JIT) {
              var animationFunction = TrackBinding._animationFunctions.get(resultTarget.constructor);
              if (!animationFunction) {
                animationFunction = new Map();
                TrackBinding._animationFunctions.set(resultTarget.constructor, animationFunction);
              }
              var accessor = animationFunction.get(lastPropertyKey);
              if (!accessor) {
                accessor = {
                  // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
                  setValue: Function('value', "this.target." + lastPropertyKey + " = value;"),
                  // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
                  getValue: Function("return this.target." + lastPropertyKey + ";")
                };
                animationFunction.set(lastPropertyKey, accessor);
              }
              _setValue = accessor.setValue;
              _getValue = accessor.getValue;
            } else {
              _setValue = function _setValue(value) {
                resultTarget[lastPropertyKey] = value;
              };
              _getValue = function _getValue() {
                return resultTarget[lastPropertyKey];
              };
            }
            return {
              target: resultTarget,
              setValue: _setValue,
              getValue: _getValue
            };
          } else if (!proxy) {
            errorID(3921);
            return null;
          } else {
            var _resultTarget = path[normalizedFollowTag](target, 0, nPaths);
            if (_resultTarget === null) {
              return null;
            }
            var runtimeProxy = proxy.forTarget(_resultTarget);
            if (!runtimeProxy) {
              return null;
            }
            var _binding = {
              setValue: function setValue(value) {
                runtimeProxy.set(value);
              }
            };
            var proxyGet = runtimeProxy.get;
            if (proxyGet) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              _binding.getValue = function () {
                return proxyGet.call(runtimeProxy);
              };
            }
            return _binding;
          }
        };
        _proto2.isMaskedOff = function isMaskedOff(mask) {
          var trsPath = this.parseTrsPath();
          if (!trsPath) {
            return false;
          }
          var joints = mask.joints[Symbol.iterator]();
          for (var jointMaskInfoIter = joints.next(); !jointMaskInfoIter.done; jointMaskInfoIter = joints.next()) {
            var _jointMaskInfoIter = jointMaskInfoIter,
              jointMaskInfo = _jointMaskInfoIter.value;
            if (jointMaskInfo.path !== trsPath.node) {
              continue;
            }
            return !jointMaskInfo.enabled;
          }
          return false;
        };
        return TrackBinding;
      }(), _class6._animationFunctions = new WeakMap(), _class6), (_initializer2 = _applyDecoratedInitializer(_class5.prototype, "path", [serializable], function () {
        return new TrackPath();
      }), _initializer3 = _applyDecoratedInitializer(_class5.prototype, "proxy", [serializable], null)), _class5)) || _class4) || _class4));
      /**
       * @en
       * A track describes how to trace the target and how to animate it.
       * It's the basic unit of animation clip.
       * @zh
       * 轨道描述了动画目标的路径和动画的方式。它是动画剪辑的基础单元。
       */
      _export("Track", Track = (_dec3 = ccclass(CLASS_NAME_PREFIX_ANIM + "Track"), _dec3(_class7 = (_class8 = /*#__PURE__*/function () {
        function Track() {
          this._binding = _initializer4 && _initializer4();
        }
        var _proto3 = Track.prototype;
        /**
         * @en Channels on this track.
         * @zh 此轨道上的通道。
         * @returns Iterator to the channels.
         */
        _proto3.channels = function channels() {
          return [];
        }

        /**
         * @en Time range of this track.
         * @zh 此轨道的时间范围。
         * @returns The time range.
         */;
        _proto3.range = function range() {
          var range = {
            min: Infinity,
            max: -Infinity
          };
          for (var _iterator = _createForOfIteratorHelperLoose(this.channels()), _step; !(_step = _iterator()).done;) {
            var channel = _step.value;
            range.min = Math.min(range.min, channel.curve.rangeMin);
            range.max = Math.max(range.max, channel.curve.rangeMax);
          }
          return range;
        }

        /**
         * @internal
         */;
        _createClass(Track, [{
          key: "path",
          get:
          /**
           * @en Track path.
           * @zh 轨道路径。
           */
          function get() {
            return this._binding.path;
          },
          set: function set(value) {
            this._binding.path = value;
          }

          /**
           * @en Value proxy for the target.
           * @zh 目标的值代理。
           */
        }, {
          key: "proxy",
          get: function get() {
            return this._binding.proxy;
          },
          set: function set(value) {
            this._binding.proxy = value;
          }

          /**
           * @internal
           */
        }, {
          key: trackBindingTag,
          get: function get() {
            return this._binding;
          }
        }]);
        return Track;
      }(), (_initializer4 = _applyDecoratedInitializer(_class8.prototype, "_binding", [serializable], function () {
        return new TrackBinding();
      })), _class8)) || _class7));
      /**
       * @en
       * Channel contains a curve.
       * @zh
       * 通道包含了一条曲线。
       */
      _export("Channel", Channel = (_dec4 = ccclass(CLASS_NAME_PREFIX_ANIM + "Channel"), _dec4(_class10 = (_class11 = /*#__PURE__*/function () {
        function Channel(curve) {
          /**
           * @internal Not used for now.
           */
          this.name = '';
          this._curve = _initializer5 && _initializer5();
          this._curve = curve;
        }
        _createClass(Channel, [{
          key: "curve",
          get:
          /**
           * @en The curve within the channel.
           * @zh 通道中的曲线。
           */
          function get() {
            return this._curve;
          }
        }]);
        return Channel;
      }(), (_initializer5 = _applyDecoratedInitializer(_class11.prototype, "_curve", [serializable], null)), _class11)) || _class10));
      /**
       * @en 表示一个包含了单条通道的轨道。
       * @zh Describes a track which contains only single channel.
       */
      _export("SingleChannelTrack", SingleChannelTrack = (_dec5 = ccclass(CLASS_NAME_PREFIX_ANIM + "SingleChannelTrack"), _dec5(_class13 = (_class14 = /*#__PURE__*/function (_Track) {
        _inheritsLoose(SingleChannelTrack, _Track);
        function SingleChannelTrack() {
          var _this;
          _this = _Track.call(this) || this;
          _this._channel = _initializer6 && _initializer6();
          _this._channel = new Channel(_this.createCurve());
          return _this;
        }

        /**
         * @en The channel within the track.
         * @zh 轨道包含的通道。
         */
        var _proto4 = SingleChannelTrack.prototype;
        _proto4.channels = function channels() {
          return [this._channel];
        }

        /**
         * @internal
         */;
        _proto4.createCurve = function createCurve() {
          throw new Error("Not impl");
        }

        /**
         * @internal
         */;
        _proto4[createEvalSymbol] = function () {
          var curve = this._channel.curve;
          return new SingleChannelTrackEval(curve);
        };
        _createClass(SingleChannelTrack, [{
          key: "channel",
          get: function get() {
            return this._channel;
          }
        }]);
        return SingleChannelTrack;
      }(Track), (_initializer6 = _applyDecoratedInitializer(_class14.prototype, "_channel", [serializable], null)), _class14)) || _class13));
      SingleChannelTrackEval = /*#__PURE__*/function () {
        function SingleChannelTrackEval(_curve) {
          this._curve = _curve;
        }
        var _proto5 = SingleChannelTrackEval.prototype;
        _proto5.evaluate = function evaluate(time) {
          return this._curve.evaluate(time);
        };
        _createClass(SingleChannelTrackEval, [{
          key: "requiresDefault",
          get: function get() {
            return false;
          }
        }]);
        return SingleChannelTrackEval;
      }();
    }
  };
});