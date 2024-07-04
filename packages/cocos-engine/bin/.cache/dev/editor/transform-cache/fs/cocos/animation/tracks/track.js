System.register("q-bundled:///fs/cocos/animation/tracks/track.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "../../core/data/utils/asserts.js", "../../scene-graph/index.js", "../define.js", "../target-path.js"], function (_export, _context) {
  "use strict";

  var ccclass, serializable, uniquelyReferenced, SUPPORT_JIT, errorID, warnID, js, assertIsTrue, Node, CLASS_NAME_PREFIX_ANIM, createEvalSymbol, ComponentPath, HierarchyPath, isPropertyPath, SingleChannelTrackEval, _dec, _class, _class2, _initializer, _dec2, _class4, _class5, _initializer2, _initializer3, _class6, _dec3, _class7, _class8, _initializer4, _dec4, _class10, _class11, _initializer5, _dec5, _class13, _class14, _initializer6, normalizedFollowTag, parseTrsPathTag, trackBindingTag, TrackPath, TrackBinding, Track, Channel, SingleChannelTrack;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
      _export("TrackPath", TrackPath = (_dec = ccclass(`${CLASS_NAME_PREFIX_ANIM}TrackPath`), _dec(_class = (_class2 = class TrackPath {
        constructor() {
          this._paths = _initializer && _initializer();
        }
        /**
         * @en The length of the path.
         * @zh 此路径的段数。
         */
        get length() {
          return this._paths.length;
        }

        /**
         * @en Appends a property path.
         * @zh 附加一段属性路径。
         * @param name The property's name.
         * @returns `this`
         */
        toProperty(name) {
          this._paths.push(name);
          return this;
        }

        /**
         * @en Appends an array element path.
         * @zh 附加一段数组元素路径。
         * @param index The element's index.
         * @returns `this`
         */
        toElement(index) {
          this._paths.push(index);
          return this;
        }

        /**
         * @en Appends a hierarchy path.
         * @zh 附加一段层级路径。
         * @param nodePath Path to the children.
         * @returns `this`
         */
        toHierarchy(nodePath) {
          this._paths.push(new HierarchyPath(nodePath));
          return this;
        }

        /**
         * @en Appends a component path.
         * @zh 附加一段组件路径。
         * @param constructor @en The constructor of the component. @zh 组件的构造函数。
         * @returns `this`
         */
        toComponent(constructor) {
          const path = new ComponentPath(typeof constructor === 'string' ? constructor : js.getClassName(constructor));
          this._paths.push(path);
          return this;
        }

        /**
         * @internal Reserved for backward compatibility. DO NOT USE IT IN YOUR CODE.
         */
        toCustomized(resolver) {
          this._paths.push(resolver);
          return this;
        }

        /**
         * @en Appends paths to this path.
         * @zh 附加指定路径到此路径后。
         * @param trackPaths Paths to append.
         * @returns `this`.
         */
        append(...trackPaths) {
          const paths = this._paths.concat(...trackPaths.map(trackPath => trackPath._paths));
          this._paths = paths;
          return this;
        }

        /**
         * @zh 判断指定路径段是否是属性路径。
         * @en Decides if the specific path segment is property path.
         * @param index Index to the segment。
         * @returns The judgement result.
         */
        isPropertyAt(index) {
          return typeof this._paths[index] === 'string';
        }

        /**
         * @zh 将指定路径段视为属性路径，获取其描述的属性。
         * @en Treats the path segment as a property path. Obtains the property it describes.
         * @param index Index to the segment。
         * @returns The property.
         */
        parsePropertyAt(index) {
          return this._paths[index];
        }

        /**
         * @zh 判断指定路径段是否是数组元素路径。
         * @en Decides if the specific path segment is an array element path.
         * @param index Index to the segment。
         * @returns The judgement result.
         */
        isElementAt(index) {
          return typeof this._paths[index] === 'number';
        }

        /**
         * @zh 将指定路径段视为数组元素路径，获取其描述的数组元素。
         * @en Treats the path segment as an array element path. Obtains the element index it describes.
         * @param index Index to the segment。
         * @returns The element index.
         */
        parseElementAt(index) {
          return this._paths[index];
        }

        /**
         * @zh 判断指定路径段是否是层级路径。
         * @en Decides if the specific path segment is a hierarchy path.
         * @param index Index to the segment。
         * @returns The judgement result.
         */
        isHierarchyAt(index) {
          return this._paths[index] instanceof HierarchyPath;
        }

        /**
         * @zh 将指定路径段视为层级路径，获取其描述的层级路径。
         * @en Treats the path segment as a hierarchy path. Obtains the hierarchy path it describes.
         * @param index Index to the segment。
         * @returns The hierarchy path.
         */
        parseHierarchyAt(index) {
          assertIsTrue(this.isHierarchyAt(index));
          return this._paths[index].path;
        }

        /**
         * @zh 判断指定路径段是否是组件路径。
         * @en Decides if the specific path segment is a component path.
         * @param index Index to the segment。
         * @returns The judgement result.
         */
        isComponentAt(index) {
          return this._paths[index] instanceof ComponentPath;
        }

        /**
         * @zh 将指定路径段视为组件路径，获取其描述的组件路径。
         * @en Treats the path segment as a hierarchy path. Obtains the component path it describes.
         * @param index Index to the segment。
         * @returns The component path.
         */
        parseComponentAt(index) {
          assertIsTrue(this.isComponentAt(index));
          return this._paths[index].component;
        }

        /**
         * @en Slices a interval of the path.
         * @zh 分割指定区段上的路径。
         * @param beginIndex Begin index to the segment. Default to 0.
         * @param endIndex End index to the segment. Default to the last segment.
         * @returns The new path.
         */
        slice(beginIndex, endIndex) {
          const trackPath = new TrackPath();
          trackPath._paths = this._paths.slice(beginIndex, endIndex);
          return trackPath;
        }

        /**
         * @internal
         */
        trace(object, beginIndex, endIndex) {
          var _beginIndex, _endIndex;
          (_beginIndex = beginIndex) !== null && _beginIndex !== void 0 ? _beginIndex : beginIndex = 0;
          (_endIndex = endIndex) !== null && _endIndex !== void 0 ? _endIndex : endIndex = this._paths.length;
          return this[normalizedFollowTag](object, beginIndex, endIndex);
        }

        /**
         * @internal
         */
        [parseTrsPathTag]() {
          const {
            _paths: paths
          } = this;
          const nPaths = paths.length;
          let iPath = 0;
          let nodePath = '';
          for (; iPath < nPaths; ++iPath) {
            const path = paths[iPath];
            if (!(path instanceof HierarchyPath)) {
              break;
            } else if (!path.path) {
              continue;
            } else if (nodePath) {
              nodePath += `/${path.path}`;
            } else {
              nodePath = path.path;
            }
          }
          if (iPath === nPaths) {
            return null;
          }
          let prs;
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
         */
        [normalizedFollowTag](root, beginIndex, endIndex) {
          const {
            _paths: paths
          } = this;
          let result = root;
          for (let iPath = beginIndex; iPath < endIndex; ++iPath) {
            const path = paths[iPath];
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
        }
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "_paths", [serializable], function () {
        return [];
      })), _class2)) || _class));
      /**
       * Composite of track path and value proxy.
       * Not exposed to external. If there is any reason it should be exposed,
       * please redesign the public interfaces.
       */
      _export("TrackBinding", TrackBinding = (_dec2 = ccclass(`${CLASS_NAME_PREFIX_ANIM}TrackBinding`), _dec2(_class4 = uniquelyReferenced(_class4 = (_class5 = (_class6 = class TrackBinding {
        constructor() {
          this.path = _initializer2 && _initializer2();
          this.proxy = _initializer3 && _initializer3();
        }
        parseTrsPath() {
          if (this.proxy) {
            return null;
          } else {
            return this.path[parseTrsPathTag]();
          }
        }
        createRuntimeBinding(target, poseOutput, isConstant) {
          const {
            path,
            proxy
          } = this;
          const nPaths = path.length;
          const iLastPath = nPaths - 1;
          if (nPaths !== 0 && (path.isPropertyAt(iLastPath) || path.isElementAt(iLastPath)) && !proxy) {
            const lastPropertyKey = path.isPropertyAt(iLastPath) ? path.parsePropertyAt(iLastPath) : path.parseElementAt(iLastPath);
            const resultTarget = path[normalizedFollowTag](target, 0, nPaths - 1);
            if (resultTarget === null) {
              return null;
            }
            if (poseOutput && resultTarget instanceof Node && isTrsPropertyName(lastPropertyKey)) {
              const blendStateWriter = poseOutput.createPoseWriter(resultTarget, lastPropertyKey, isConstant);
              return blendStateWriter;
            }
            let setValue;
            let getValue;
            if (SUPPORT_JIT) {
              let animationFunction = TrackBinding._animationFunctions.get(resultTarget.constructor);
              if (!animationFunction) {
                animationFunction = new Map();
                TrackBinding._animationFunctions.set(resultTarget.constructor, animationFunction);
              }
              let accessor = animationFunction.get(lastPropertyKey);
              if (!accessor) {
                accessor = {
                  // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
                  setValue: Function('value', `this.target.${lastPropertyKey} = value;`),
                  // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
                  getValue: Function(`return this.target.${lastPropertyKey};`)
                };
                animationFunction.set(lastPropertyKey, accessor);
              }
              setValue = accessor.setValue;
              getValue = accessor.getValue;
            } else {
              setValue = value => {
                resultTarget[lastPropertyKey] = value;
              };
              getValue = () => resultTarget[lastPropertyKey];
            }
            return {
              target: resultTarget,
              setValue,
              getValue
            };
          } else if (!proxy) {
            errorID(3921);
            return null;
          } else {
            const resultTarget = path[normalizedFollowTag](target, 0, nPaths);
            if (resultTarget === null) {
              return null;
            }
            const runtimeProxy = proxy.forTarget(resultTarget);
            if (!runtimeProxy) {
              return null;
            }
            const binding = {
              setValue: value => {
                runtimeProxy.set(value);
              }
            };
            const proxyGet = runtimeProxy.get;
            if (proxyGet) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              binding.getValue = () => proxyGet.call(runtimeProxy);
            }
            return binding;
          }
        }
        isMaskedOff(mask) {
          const trsPath = this.parseTrsPath();
          if (!trsPath) {
            return false;
          }
          const joints = mask.joints[Symbol.iterator]();
          for (let jointMaskInfoIter = joints.next(); !jointMaskInfoIter.done; jointMaskInfoIter = joints.next()) {
            const {
              value: jointMaskInfo
            } = jointMaskInfoIter;
            if (jointMaskInfo.path !== trsPath.node) {
              continue;
            }
            return !jointMaskInfo.enabled;
          }
          return false;
        }
      }, _class6._animationFunctions = new WeakMap(), _class6), (_initializer2 = _applyDecoratedInitializer(_class5.prototype, "path", [serializable], function () {
        return new TrackPath();
      }), _initializer3 = _applyDecoratedInitializer(_class5.prototype, "proxy", [serializable], null)), _class5)) || _class4) || _class4));
      /**
       * @en
       * A track describes how to trace the target and how to animate it.
       * It's the basic unit of animation clip.
       * @zh
       * 轨道描述了动画目标的路径和动画的方式。它是动画剪辑的基础单元。
       */
      _export("Track", Track = (_dec3 = ccclass(`${CLASS_NAME_PREFIX_ANIM}Track`), _dec3(_class7 = (_class8 = class Track {
        constructor() {
          this._binding = _initializer4 && _initializer4();
        }
        /**
         * @en Track path.
         * @zh 轨道路径。
         */
        get path() {
          return this._binding.path;
        }
        set path(value) {
          this._binding.path = value;
        }

        /**
         * @en Value proxy for the target.
         * @zh 目标的值代理。
         */
        get proxy() {
          return this._binding.proxy;
        }
        set proxy(value) {
          this._binding.proxy = value;
        }

        /**
         * @internal
         */
        get [trackBindingTag]() {
          return this._binding;
        }

        /**
         * @en Channels on this track.
         * @zh 此轨道上的通道。
         * @returns Iterator to the channels.
         */
        channels() {
          return [];
        }

        /**
         * @en Time range of this track.
         * @zh 此轨道的时间范围。
         * @returns The time range.
         */
        range() {
          const range = {
            min: Infinity,
            max: -Infinity
          };
          for (const channel of this.channels()) {
            range.min = Math.min(range.min, channel.curve.rangeMin);
            range.max = Math.max(range.max, channel.curve.rangeMax);
          }
          return range;
        }

        /**
         * @internal
         */
      }, (_initializer4 = _applyDecoratedInitializer(_class8.prototype, "_binding", [serializable], function () {
        return new TrackBinding();
      })), _class8)) || _class7));
      /**
       * @en
       * Channel contains a curve.
       * @zh
       * 通道包含了一条曲线。
       */
      _export("Channel", Channel = (_dec4 = ccclass(`${CLASS_NAME_PREFIX_ANIM}Channel`), _dec4(_class10 = (_class11 = class Channel {
        constructor(curve) {
          /**
           * @internal Not used for now.
           */
          this.name = '';
          this._curve = _initializer5 && _initializer5();
          this._curve = curve;
        }
        /**
         * @en The curve within the channel.
         * @zh 通道中的曲线。
         */
        get curve() {
          return this._curve;
        }
      }, (_initializer5 = _applyDecoratedInitializer(_class11.prototype, "_curve", [serializable], null)), _class11)) || _class10));
      /**
       * @en 表示一个包含了单条通道的轨道。
       * @zh Describes a track which contains only single channel.
       */
      _export("SingleChannelTrack", SingleChannelTrack = (_dec5 = ccclass(`${CLASS_NAME_PREFIX_ANIM}SingleChannelTrack`), _dec5(_class13 = (_class14 = class SingleChannelTrack extends Track {
        constructor() {
          super();
          this._channel = _initializer6 && _initializer6();
          this._channel = new Channel(this.createCurve());
        }

        /**
         * @en The channel within the track.
         * @zh 轨道包含的通道。
         */
        get channel() {
          return this._channel;
        }
        channels() {
          return [this._channel];
        }

        /**
         * @internal
         */
        createCurve() {
          throw new Error(`Not impl`);
        }

        /**
         * @internal
         */
        [createEvalSymbol]() {
          const {
            curve
          } = this._channel;
          return new SingleChannelTrackEval(curve);
        }
      }, (_initializer6 = _applyDecoratedInitializer(_class14.prototype, "_channel", [serializable], null)), _class14)) || _class13));
      SingleChannelTrackEval = class SingleChannelTrackEval {
        constructor(_curve) {
          this._curve = _curve;
        }
        get requiresDefault() {
          return false;
        }
        evaluate(time) {
          return this._curve.evaluate(time);
        }
      };
    }
  };
});