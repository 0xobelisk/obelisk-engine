System.register("q-bundled:///fs/cocos/3d/skeletal-animation/skeletal-animation.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../skinned-mesh-renderer/index.js", "../../core/index.js", "../../scene-graph/node.js", "../../animation/animation-component.js", "./skeletal-animation-data-hub.js", "./skeletal-animation-state.js", "../../animation/transform-utils.js", "../../animation/global-animation-manager.js"], function (_export, _context) {
  "use strict";

  var ccclass, executeInEditMode, executionOrder, help, menu, type, serializable, editable, EDITOR_NOT_IN_PREVIEW, SkinnedMeshRenderer, Mat4, cclegacy, js, assertIsTrue, warn, Node, Animation, SkelAnimDataHub, SkeletalAnimationState, getWorldTransformUntilRoot, getGlobalAnimationManager, _dec, _dec2, _class, _class2, _initializer, _initializer2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class4, _class5, _initializer3, _initializer4, _class6, FORCE_BAN_BAKED_ANIMATION, Socket, m4_1, m4_2, SkeletalAnimation;
  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  function collectRecursively(node, prefix, out) {
    if (prefix === void 0) {
      prefix = '';
    }
    if (out === void 0) {
      out = [];
    }
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      if (!child) {
        continue;
      }
      var path = prefix ? prefix + "/" + child.name : child.name;
      out.push(path);
      collectRecursively(child, path, out);
    }
    return out;
  }

  /**
   * @en
   * Skeletal animation component, offers the following features on top of [[Animation]]:
   * * Choice between baked animation and real-time calculation, to leverage efficiency and expressiveness.
   * * Joint socket system: Create any socket node directly under the animation component root node,
   *   find your target joint and register both to the socket list, so that the socket node would be in-sync with the joint.
   * @zh
   * 骨骼动画组件，在普通动画组件基础上额外提供以下功能：
   * * 可选预烘焙动画模式或实时计算模式，用以权衡运行时效率与效果；
   * * 提供骨骼挂点功能：通过在动画根节点下创建挂点节点，并在骨骼动画组件上配置 socket 列表，挂点节点的 Transform 就能与骨骼保持同步。
   */
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      executionOrder = _coreDataDecoratorsIndexJs.executionOrder;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      editable = _coreDataDecoratorsIndexJs.editable;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_skinnedMeshRendererIndexJs) {
      SkinnedMeshRenderer = _skinnedMeshRendererIndexJs.SkinnedMeshRenderer;
    }, function (_coreIndexJs) {
      Mat4 = _coreIndexJs.Mat4;
      cclegacy = _coreIndexJs.cclegacy;
      js = _coreIndexJs.js;
      assertIsTrue = _coreIndexJs.assertIsTrue;
      warn = _coreIndexJs.warn;
    }, function (_sceneGraphNodeJs) {
      Node = _sceneGraphNodeJs.Node;
    }, function (_animationAnimationComponentJs) {
      Animation = _animationAnimationComponentJs.Animation;
    }, function (_skeletalAnimationDataHubJs) {
      SkelAnimDataHub = _skeletalAnimationDataHubJs.SkelAnimDataHub;
    }, function (_skeletalAnimationStateJs) {
      SkeletalAnimationState = _skeletalAnimationStateJs.SkeletalAnimationState;
    }, function (_animationTransformUtilsJs) {
      getWorldTransformUntilRoot = _animationTransformUtilsJs.getWorldTransformUntilRoot;
    }, function (_animationGlobalAnimationManagerJs) {
      getGlobalAnimationManager = _animationGlobalAnimationManagerJs.getGlobalAnimationManager;
    }],
    execute: function () {
      FORCE_BAN_BAKED_ANIMATION = EDITOR_NOT_IN_PREVIEW;
      /**
       * @en The socket to synchronize transform from skeletal joint to target node.
       * @zh 骨骼动画的挂点，用于将骨骼树的挂点节点变化矩阵同步到目标节点上
       */
      _export("Socket", Socket = (_dec = ccclass('cc.SkeletalAnimation.Socket'), _dec2 = type(Node), _dec(_class = (_class2 = function Socket(path, target) {
        if (path === void 0) {
          path = '';
        }
        if (target === void 0) {
          target = null;
        }
        /**
         * @en Path of the target joint.
         * @zh 此挂点的目标骨骼路径。
         */
        this.path = _initializer && _initializer();
        /**
         * @en Transform output node.
         * @zh 此挂点的变换信息输出节点。
         */
        this.target = _initializer2 && _initializer2();
        this.path = path;
        this.target = target;
      }, (_initializer = _applyDecoratedInitializer(_class2.prototype, "path", [serializable, editable], function () {
        return '';
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "target", [_dec2], function () {
        return null;
      })), _class2)) || _class));
      js.setClassAlias(Socket, 'cc.SkeletalAnimationComponent.Socket');
      m4_1 = new Mat4();
      m4_2 = new Mat4();
      _export("SkeletalAnimation", SkeletalAnimation = (_dec3 = ccclass('cc.SkeletalAnimation'), _dec4 = help('i18n:cc.SkeletalAnimation'), _dec5 = executionOrder(99), _dec6 = menu('Animation/SkeletalAnimation'), _dec7 = type([Socket]), _dec8 = type([Socket]), _dec3(_class4 = _dec4(_class4 = _dec5(_class4 = executeInEditMode(_class4 = _dec6(_class4 = (_class5 = (_class6 = /*#__PURE__*/function (_Animation) {
        _inheritsLoose(SkeletalAnimation, _Animation);
        function SkeletalAnimation() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Animation.call.apply(_Animation, [this].concat(args)) || this;
          _this._useBakedAnimation = _initializer3 && _initializer3();
          _this._sockets = _initializer4 && _initializer4();
          _this._users = new Set();
          _this._currentBakedState = null;
          return _this;
        }
        var _proto = SkeletalAnimation.prototype;
        _proto.onLoad = function onLoad() {
          _Animation.prototype.onLoad.call(this);
          // Actively search for potential users and notify them that an animation is usable.
          var comps = this.node.getComponentsInChildren(SkinnedMeshRenderer);
          for (var i = 0; i < comps.length; ++i) {
            var comp = comps[i];
            if (comp.skinningRoot === this.node) {
              this.notifySkinnedMeshAdded(comp);
            }
          }
        };
        _proto.onDestroy = function onDestroy() {
          _Animation.prototype.onDestroy.call(this);
          cclegacy.director.root.dataPoolManager.jointAnimationInfo.destroy(this.node.uuid);
          getGlobalAnimationManager().removeSockets(this.node, this._sockets);
          this._removeAllUsers();
        };
        _proto.onEnable = function onEnable() {
          var _this$_currentBakedSt;
          _Animation.prototype.onEnable.call(this);
          (_this$_currentBakedSt = this._currentBakedState) === null || _this$_currentBakedSt === void 0 ? void 0 : _this$_currentBakedSt.resume();
        };
        _proto.onDisable = function onDisable() {
          var _this$_currentBakedSt2;
          _Animation.prototype.onDisable.call(this);
          (_this$_currentBakedSt2 = this._currentBakedState) === null || _this$_currentBakedSt2 === void 0 ? void 0 : _this$_currentBakedSt2.pause();
        };
        _proto.start = function start() {
          this.sockets = this._sockets;
          this._applyBakeFlagChange();
          _Animation.prototype.start.call(this);
        };
        _proto.pause = function pause() {
          if (!this._useBakedEffectively) {
            _Animation.prototype.pause.call(this);
          } else {
            var _this$_currentBakedSt3;
            (_this$_currentBakedSt3 = this._currentBakedState) === null || _this$_currentBakedSt3 === void 0 ? void 0 : _this$_currentBakedSt3.pause();
          }
        };
        _proto.resume = function resume() {
          if (!this._useBakedEffectively) {
            _Animation.prototype.resume.call(this);
          } else {
            var _this$_currentBakedSt4;
            (_this$_currentBakedSt4 = this._currentBakedState) === null || _this$_currentBakedSt4 === void 0 ? void 0 : _this$_currentBakedSt4.resume();
          }
        };
        _proto.stop = function stop() {
          if (!this._useBakedEffectively) {
            _Animation.prototype.stop.call(this);
          } else if (this._currentBakedState) {
            this._currentBakedState.stop();
            this._currentBakedState = null;
          }
        }

        /**
         * @en Query all socket paths
         * @zh 获取所有挂点的骨骼路径
         * @returns @en All socket paths @zh 所有挂点的骨骼路径
         */;
        _proto.querySockets = function querySockets() {
          var animPaths = this._defaultClip && Object.keys(SkelAnimDataHub.getOrExtract(this._defaultClip).joints).sort().reduce(function (acc, cur) {
            return cur.startsWith(acc[acc.length - 1] + "/") ? acc : (acc.push(cur), acc);
          }, []) || [];
          if (!animPaths.length) {
            return ['please specify a valid default animation clip first'];
          }
          var out = [];
          for (var i = 0; i < animPaths.length; i++) {
            var path = animPaths[i];
            var node = this.node.getChildByPath(path);
            if (!node) {
              continue;
            }
            out.push(path);
            collectRecursively(node, path, out);
          }
          return out;
        }

        /**
         * @en Rebuild animations to synchronize immediately all sockets to their target node.
         * @zh 重建动画并立即同步所有挂点的转换矩阵到它们的目标节点上。
         */;
        _proto.rebuildSocketAnimations = function rebuildSocketAnimations() {
          for (var _iterator = _createForOfIteratorHelperLoose(this._sockets), _step; !(_step = _iterator()).done;) {
            var socket = _step.value;
            var joint = this.node.getChildByPath(socket.path);
            var target = socket.target;
            if (joint && target) {
              target.name = socket.path.substring(socket.path.lastIndexOf('/') + 1) + " Socket";
              target.parent = this.node;
              getWorldTransformUntilRoot(joint, this.node, m4_1);
              Mat4.fromRTS(m4_2, target.rotation, target.position, target.scale);
              if (!Mat4.equals(m4_2, m4_1)) {
                target.matrix = m4_1;
              }
            }
          }
          for (var _i = 0, _Object$keys = Object.keys(this._nameToState); _i < _Object$keys.length; _i++) {
            var stateName = _Object$keys[_i];
            var state = this._nameToState[stateName];
            state.rebuildSocketCurves(this._sockets);
          }
        }

        /**
         * @en Create or get the target node from a socket.
         * If a socket haven't been created for the corresponding path, this function will register a new socket.
         * @zh 创建或获取一个挂点的同步目标节点。
         * 如果对应路径还没有创建挂点，这个函数会创建一个新的挂点。
         * @param path @en Path of the target joint. @zh 此挂点的骨骼路径。
         * @returns @en The target node of the socket. @zh 挂点的目标节点
         */;
        _proto.createSocket = function createSocket(path) {
          var socket = this._sockets.find(function (s) {
            return s.path === path;
          });
          if (socket) {
            return socket.target;
          }
          var joint = this.node.getChildByPath(path);
          if (!joint) {
            warn('illegal socket path');
            return null;
          }
          var target = new Node();
          target.parent = this.node;
          this._sockets.push(new Socket(path, target));
          this.rebuildSocketAnimations();
          return target;
        }

        /**
         * @internal This method only friends to skinned mesh renderer.
         */;
        _proto.notifySkinnedMeshAdded = function notifySkinnedMeshAdded(skinnedMeshRenderer) {
          var _useBakedEffectively = this._useBakedEffectively;
          var formerBound = skinnedMeshRenderer.associatedAnimation;
          if (formerBound) {
            formerBound._users["delete"](skinnedMeshRenderer);
          }
          skinnedMeshRenderer.associatedAnimation = this;
          skinnedMeshRenderer.setUseBakedAnimation(_useBakedEffectively, true);
          if (_useBakedEffectively) {
            var playingState = this._currentBakedState;
            if (playingState) {
              skinnedMeshRenderer.uploadAnimation(playingState.clip);
            }
          }
          this._users.add(skinnedMeshRenderer);
        }

        /**
         * @internal This method only friends to skinned mesh renderer.
         */;
        _proto.notifySkinnedMeshRemoved = function notifySkinnedMeshRemoved(skinnedMeshRenderer) {
          assertIsTrue(skinnedMeshRenderer.associatedAnimation === this || skinnedMeshRenderer.associatedAnimation === null);
          skinnedMeshRenderer.setUseBakedAnimation(false);
          skinnedMeshRenderer.associatedAnimation = null;
          this._users["delete"](skinnedMeshRenderer);
        }

        /**
         * Get all users.
         * @internal This method only friends to the skeleton animation state.
         */;
        _proto.getUsers = function getUsers() {
          return this._users;
        };
        _proto._createState = function _createState(clip, name) {
          return new SkeletalAnimationState(clip, name);
        };
        _proto._doCreateState = function _doCreateState(clip, name) {
          var state = _Animation.prototype._doCreateState.call(this, clip, name);
          state.rebuildSocketCurves(this._sockets);
          return state;
        };
        _proto.doPlayOrCrossFade = function doPlayOrCrossFade(state, duration) {
          if (this._useBakedEffectively) {
            if (this._currentBakedState) {
              this._currentBakedState.stop();
            }
            var skeletalAnimationState = state;
            this._currentBakedState = skeletalAnimationState;
            skeletalAnimationState.play();
          } else {
            _Animation.prototype.doPlayOrCrossFade.call(this, state, duration);
          }
        };
        _proto._removeAllUsers = function _removeAllUsers() {
          var _this2 = this;
          Array.from(this._users).forEach(function (user) {
            _this2.notifySkinnedMeshRemoved(user);
          });
        };
        _proto._applyBakeFlagChange = function _applyBakeFlagChange() {
          var useBakedEffectively = this._useBakedEffectively;
          for (var stateName in this._nameToState) {
            var state = this._nameToState[stateName];
            state.setUseBaked(useBakedEffectively);
          }
          this._users.forEach(function (user) {
            user.setUseBakedAnimation(useBakedEffectively);
          });
          if (useBakedEffectively) {
            getGlobalAnimationManager().removeSockets(this.node, this._sockets);
          } else {
            getGlobalAnimationManager().addSockets(this.node, this._sockets);
            this._currentBakedState = null;
          }
        };
        _createClass(SkeletalAnimation, [{
          key: "sockets",
          get:
          /**
           * @en
           * The joint sockets this animation component maintains.<br>
           * Sockets have to be registered here before attaching custom nodes to animated joints.
           * @zh
           * 当前动画组件维护的挂点数组。要挂载自定义节点到受动画驱动的骨骼上，必须先在此注册挂点。
           */
          function get() {
            return this._sockets;
          },
          set: function set(val) {
            if (!this._useBakedEffectively) {
              var animMgr = getGlobalAnimationManager();
              animMgr.removeSockets(this.node, this._sockets);
              animMgr.addSockets(this.node, val);
            }
            this._sockets = val;
            this.rebuildSocketAnimations();
          }

          /**
           * @en
           * Whether to bake animations. Default to true,<br>
           * which substantially increases performance while making all animations completely fixed.<br>
           * Dynamically changing this property will take effect when playing the next animation clip.
           * Note, in editor(not in preview) mode, this option takes no effect: animation is always non-baked.
           * @zh
           * 是否使用预烘焙动画，默认启用，可以大幅提高运行效时率，但所有动画效果会被彻底固定，不支持任何形式的编辑和混合。<br>
           * 运行时动态修改此选项会在播放下一条动画片段时生效。
           * 注意，在编辑器（非预览）模式下，此选项不起作用：动画总是非预烘焙的。
           */
        }, {
          key: "useBakedAnimation",
          get: function get() {
            return this._useBakedAnimation;
          },
          set: function set(value) {
            this._useBakedAnimation = value;
            this._applyBakeFlagChange();
          }
        }, {
          key: "_useBakedEffectively",
          get: function get() {
            if (FORCE_BAN_BAKED_ANIMATION) {
              return false;
            } else {
              return this._useBakedAnimation;
            }
          }
        }]);
        return SkeletalAnimation;
      }(Animation), _class6.Socket = Socket, _class6), (_applyDecoratedDescriptor(_class5.prototype, "sockets", [_dec7, editable], Object.getOwnPropertyDescriptor(_class5.prototype, "sockets"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "useBakedAnimation", [editable], Object.getOwnPropertyDescriptor(_class5.prototype, "useBakedAnimation"), _class5.prototype), _initializer3 = _applyDecoratedInitializer(_class5.prototype, "_useBakedAnimation", [serializable], function () {
        return true;
      }), _initializer4 = _applyDecoratedInitializer(_class5.prototype, "_sockets", [_dec8], function () {
        return [];
      })), _class5)) || _class4) || _class4) || _class4) || _class4) || _class4));
    }
  };
});