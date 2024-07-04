System.register("q-bundled:///fs/cocos/3d/reflection-probe/reflection-probe-component.js", ["../../core/data/decorators/index.js", "../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "../../asset/assets/index.js", "../../render-scene/index.js", "../../rendering/define.js", "./reflection-probe-manager.js", "../../scene-graph/component.js", "../../scene-graph/layers.js", "../../misc/camera-component.js", "../../scene-graph/index.js", "../../render-scene/scene/reflection-probe.js", "../../physics/utils/util.js"], function (_export, _context) {
  "use strict";

  var ccclass, executeInEditMode, help, menu, playOnFocus, serializable, tooltip, type, visible, EDITOR, EDITOR_NOT_IN_PREVIEW, CCBoolean, CCObject, Color, Enum, Vec3, warn, TextureCube, scene, CAMERA_DEFAULT_MASK, ReflectionProbeManager, Component, Layers, Camera, Node, TransformBit, ProbeClearFlag, ProbeType, absolute, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _class3, ProbeResolution, ReflectionProbe;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  _export("ProbeResolution", void 0);
  return {
    setters: [function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      help = _coreDataDecoratorsIndexJs.help;
      menu = _coreDataDecoratorsIndexJs.menu;
      playOnFocus = _coreDataDecoratorsIndexJs.playOnFocus;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      type = _coreDataDecoratorsIndexJs.type;
      visible = _coreDataDecoratorsIndexJs.visible;
    }, function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_coreIndexJs) {
      CCBoolean = _coreIndexJs.CCBoolean;
      CCObject = _coreIndexJs.CCObject;
      Color = _coreIndexJs.Color;
      Enum = _coreIndexJs.Enum;
      Vec3 = _coreIndexJs.Vec3;
      warn = _coreIndexJs.warn;
    }, function (_assetAssetsIndexJs) {
      TextureCube = _assetAssetsIndexJs.TextureCube;
    }, function (_renderSceneIndexJs) {
      scene = _renderSceneIndexJs.scene;
    }, function (_renderingDefineJs) {
      CAMERA_DEFAULT_MASK = _renderingDefineJs.CAMERA_DEFAULT_MASK;
    }, function (_reflectionProbeManagerJs) {
      ReflectionProbeManager = _reflectionProbeManagerJs.ReflectionProbeManager;
    }, function (_sceneGraphComponentJs) {
      Component = _sceneGraphComponentJs.Component;
    }, function (_sceneGraphLayersJs) {
      Layers = _sceneGraphLayersJs.Layers;
    }, function (_miscCameraComponentJs) {
      Camera = _miscCameraComponentJs.Camera;
    }, function (_sceneGraphIndexJs) {
      Node = _sceneGraphIndexJs.Node;
      TransformBit = _sceneGraphIndexJs.TransformBit;
    }, function (_renderSceneSceneReflectionProbeJs) {
      ProbeClearFlag = _renderSceneSceneReflectionProbeJs.ProbeClearFlag;
      ProbeType = _renderSceneSceneReflectionProbeJs.ProbeType;
    }, function (_physicsUtilsUtilJs) {
      absolute = _physicsUtilsUtilJs.absolute;
    }],
    execute: function () {
      (function (ProbeResolution) {
        ProbeResolution[ProbeResolution["Low_256x256"] = 256] = "Low_256x256";
        ProbeResolution[ProbeResolution["Medium_512x512"] = 512] = "Medium_512x512";
        ProbeResolution[ProbeResolution["High_768x768"] = 768] = "High_768x768";
      })(ProbeResolution || _export("ProbeResolution", ProbeResolution = {}));
      _export("ReflectionProbe", ReflectionProbe = (_dec = ccclass('cc.ReflectionProbe'), _dec2 = menu('Rendering/ReflectionProbe'), _dec3 = help('i18n:cc.ReflectionProbe'), _dec4 = type(Vec3), _dec5 = type(Enum(ProbeType)), _dec6 = visible(function () {
        return this.probeType === ProbeType.CUBE;
      }), _dec7 = type(Enum(ProbeResolution)), _dec8 = type(Enum(ProbeClearFlag)), _dec9 = visible(function () {
        return this.probeType === ProbeType.CUBE;
      }), _dec10 = visible(function () {
        return this._clearFlag === ProbeClearFlag.SOLID_COLOR && this.probeType === ProbeType.CUBE;
      }), _dec11 = type(Color), _dec12 = type(Layers.BitMask), _dec13 = tooltip('i18n:camera.visibility'), _dec14 = visible(function () {
        return this.probeType === ProbeType.PLANAR;
      }), _dec15 = type(Camera), _dec16 = visible(function () {
        return this.probeType === ProbeType.CUBE;
      }), _dec17 = type(CCBoolean), _dec18 = tooltip('i18n:reflection_probe.fastBake'), _dec19 = type(TextureCube), _dec20 = visible(false), _dec(_class = _dec2(_class = executeInEditMode(_class = playOnFocus(_class = _dec3(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ReflectionProbe, _Component);
        function ReflectionProbe() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._lastSize = new Vec3();
          _this._resolution = _initializer && _initializer();
          _this._clearFlag = _initializer2 && _initializer2();
          _this._backgroundColor = _initializer3 && _initializer3();
          _this._visibility = _initializer4 && _initializer4();
          _this._probeType = _initializer5 && _initializer5();
          _this._cubemap = _initializer6 && _initializer6();
          _this._size = _initializer7 && _initializer7();
          _this._sourceCamera = _initializer8 && _initializer8();
          _this._probeId = _initializer9 && _initializer9();
          _this._fastBake = _initializer10 && _initializer10();
          _this._probe = null;
          _this._previewSphere = null;
          _this._previewPlane = null;
          _this._sourceCameraPos = new Vec3(0, 0, 0);
          _this._position = new Vec3(0, 0, 0);
          return _this;
        }
        var _proto = ReflectionProbe.prototype;
        _proto.onLoad = function onLoad() {
          this._createProbe();
          if (EDITOR) {
            ReflectionProbeManager.probeManager.registerEvent();
          }
        };
        _proto.onEnable = function onEnable() {
          if (this._probe) {
            var probe = ReflectionProbeManager.probeManager.getProbeById(this._probeId);
            if (probe !== null && probe !== this._probe) {
              this._probeId = ReflectionProbeManager.probeManager.getNewReflectionProbeId();
              this._probe.updateProbeId(this._probeId);
            }
            ReflectionProbeManager.probeManager.register(this._probe);
            ReflectionProbeManager.probeManager.onUpdateProbes();
            this._probe.enable();
          }
        };
        _proto.onDisable = function onDisable() {
          if (this._probe) {
            ReflectionProbeManager.probeManager.unregister(this._probe);
            this._probe.disable();
          }
        };
        _proto.start = function start() {
          if (this._sourceCamera && this.probeType === ProbeType.PLANAR) {
            this.probe.renderPlanarReflection(this.sourceCamera.camera);
            ReflectionProbeManager.probeManager.filterModelsForPlanarReflection();
          }
          ReflectionProbeManager.probeManager.updateProbeData();
          this._position = this.node.getWorldPosition().clone();
        };
        _proto.onDestroy = function onDestroy() {
          if (this.probe) {
            this.probe.destroy();
          }
        };
        _proto.update = function update(dt) {
          if (!this.probe) return;
          if (EDITOR_NOT_IN_PREVIEW) {
            if (this.probeType === ProbeType.PLANAR) {
              var _this$node$scene$rend;
              var cameraLst = (_this$node$scene$rend = this.node.scene.renderScene) === null || _this$node$scene$rend === void 0 ? void 0 : _this$node$scene$rend.cameras;
              if (cameraLst !== undefined) {
                for (var i = 0; i < cameraLst.length; ++i) {
                  var camera = cameraLst[i];
                  if (camera.name === 'Editor Camera') {
                    this.probe.renderPlanarReflection(camera);
                    break;
                  }
                }
              }
            }
          }
          if (this.probeType === ProbeType.PLANAR && this.sourceCamera) {
            if (this.sourceCamera.node.hasChangedFlags & TransformBit.TRS || !this._sourceCameraPos.equals(this.sourceCamera.node.getWorldPosition())) {
              this._sourceCameraPos = this.sourceCamera.node.getWorldPosition();
              this.probe.renderPlanarReflection(this.sourceCamera.camera);
            }
          }
          if (this.node.hasChangedFlags & TransformBit.POSITION) {
            this.probe.updateBoundingBox();
            ReflectionProbeManager.probeManager.onUpdateProbes();
            ReflectionProbeManager.probeManager.updateProbeData();
          }

          //update probe info for realtime
          if (!EDITOR) {
            var worldPos = this.node.getWorldPosition();
            if (!this._position.equals(worldPos)) {
              this._position = worldPos;
              this.probe.updateBoundingBox();
              ReflectionProbeManager.probeManager.updateProbeData();
              ReflectionProbeManager.probeManager.updateProbeOfModels();
            }
          }
        }

        /**
         * @en Clear the baked cubemap.
         * @zh 清除烘焙的cubemap
         */;
        _proto.clearBakedCubemap = function clearBakedCubemap() {
          this.cubemap = null;
          ReflectionProbeManager.probeManager.updateBakedCubemap(this.probe);
          ReflectionProbeManager.probeManager.updatePreviewSphere(this.probe);
        };
        _proto._createProbe = function _createProbe() {
          if (this._probeId === -1 || ReflectionProbeManager.probeManager.exists(this._probeId)) {
            this._probeId = ReflectionProbeManager.probeManager.getNewReflectionProbeId();
          }
          this._probe = new scene.ReflectionProbe(this._probeId);
          if (this._probe) {
            var cameraNode = new Node('ReflectionProbeCamera');
            cameraNode.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
            this.node.scene.addChild(cameraNode);
            this._probe.initialize(this.node, cameraNode);
            if (this.enabled) {
              ReflectionProbeManager.probeManager.register(this._probe);
            }
            this._probe.resolution = this._resolution;
            this._probe.clearFlag = this._clearFlag;
            this._probe.backgroundColor = this._backgroundColor;
            this._probe.visibility = this._visibility;
            this._probe.probeType = this._probeType;
            this._probe.size = this._size;
            this._probe.cubemap = this._cubemap;
          }
        };
        _createClass(ReflectionProbe, [{
          key: "size",
          get: function get() {
            return this._size;
          }

          /**
           * @en Environment reflection or plane reflection.
           * @zh 设置探针类型，环境反射或者平面反射
           */,
          set:
          /**
           * @en
           * Gets or sets the size of the box
           * @zh
           * 获取或设置包围盒的大小。
           */
          function set(value) {
            this._size.set(value);
            absolute(this._size);
            this.probe.size = this._size;
            if (this.probe) {
              this.probe.updateBoundingBox();
              ReflectionProbeManager.probeManager.onUpdateProbes();
              ReflectionProbeManager.probeManager.updateProbeData();
              ReflectionProbeManager.probeManager.updateProbeOfModels();
            }
          }
        }, {
          key: "probeType",
          get: function get() {
            return this._probeType;
          }

          /**
           * @en set render texture size
           * @zh 设置渲染纹理大小
           */,
          set: function set(value) {
            this.probe.probeType = value;
            if (value !== this._probeType) {
              var lastSize = this._size.clone();
              var lastSizeIsNoExist = Vec3.equals(this._lastSize, Vec3.ZERO);
              this._probeType = value;
              if (this._probeType === ProbeType.CUBE) {
                if (lastSizeIsNoExist) {
                  this._size.set(ReflectionProbe.DEFAULT_CUBE_SIZE);
                }
                this.probe.switchProbeType(value, null);
                if (EDITOR) {
                  this._objFlags |= CCObject.Flags.IsRotationLocked;
                }
                ReflectionProbeManager.probeManager.clearPlanarReflectionMap(this.probe);
              } else {
                if (lastSizeIsNoExist) {
                  this._size.set(ReflectionProbe.DEFAULT_PLANER_SIZE);
                }
                if (EDITOR && this._objFlags & CCObject.Flags.IsRotationLocked) {
                  this._objFlags ^= CCObject.Flags.IsRotationLocked;
                }
                if (!this._sourceCamera) {
                  warn('the reflection camera is invalid, please set the reflection camera');
                } else {
                  this.probe.switchProbeType(value, this._sourceCamera.camera);
                }
              }
              if (!lastSizeIsNoExist) {
                this._size.set(this._lastSize);
              }
              this._lastSize.set(lastSize);
              this.size = this._size;
            }
          }
        }, {
          key: "resolution",
          get: function get() {
            return this._resolution;
          }

          /**
           * @en Clearing flags of the camera, specifies which part of the framebuffer will be actually cleared every frame.
           * @zh 相机的缓冲清除标志位，指定帧缓冲的哪部分要每帧清除。
           */,
          set: function set(value) {
            this._resolution = value;
            this.probe.resolution = value;
          }
        }, {
          key: "clearFlag",
          get: function get() {
            return this._clearFlag;
          }

          /**
           * @en Clearing color of the camera.
           * @zh 相机的颜色缓冲默认值。
           */,
          set: function set(value) {
            this._clearFlag = value;
            this.probe.clearFlag = this._clearFlag;
          }
        }, {
          key: "backgroundColor",
          get: function get() {
            return this._backgroundColor;
          }

          /**
           * @en Visibility mask, declaring a set of node layers that will be visible to this camera.
           * @zh 可见性掩码，声明在当前相机中可见的节点层级集合。
           */,
          set: function set(val) {
            this._backgroundColor = val;
            this.probe.backgroundColor = this._backgroundColor;
          }
        }, {
          key: "visibility",
          get: function get() {
            return this._visibility;
          },
          set: function set(val) {
            this._visibility = val;
            this.probe.visibility = this._visibility;
          }

          /**
           * @en The camera to render planar reflections, specified by the user
           * @zh 需要渲染平面反射的相机，由用户指定
           */
        }, {
          key: "sourceCamera",
          get: function get() {
            return this._sourceCamera;
          }

          /**
           * @en fast bake no convolution.
           * @zh 快速烘焙不会进行卷积。
           */,
          set: function set(camera) {
            this._sourceCamera = camera;
            if (camera) {
              this.visibility = camera.visibility;
              this.clearFlag = camera.clearFlags;
              this.backgroundColor = camera.clearColor;
              if (this.probeType === ProbeType.PLANAR) {
                this.probe.switchProbeType(this.probeType, camera.camera);
              }
            }
          }
        }, {
          key: "fastBake",
          get: function get() {
            return this._fastBake;
          },
          set: function set(val) {
            this._fastBake = val;
          }
        }, {
          key: "cubemap",
          get: function get() {
            return this._cubemap;
          },
          set: function set(val) {
            this._cubemap = val;
            this.probe.cubemap = val;
            ReflectionProbeManager.probeManager.onUpdateProbes();
          }
        }, {
          key: "probe",
          get: function get() {
            return this._probe;
          }

          /**
           * @en Reflection probe cube mode preview sphere
           * @zh 反射探针cube模式的预览小球
           */
        }, {
          key: "previewSphere",
          get: function get() {
            return this._previewSphere;
          }

          /**
           * @en Reflection probe planar mode preview plane
           * @zh 反射探针Planar模式的预览平面
           */,
          set: function set(val) {
            this._previewSphere = val;
            if (this.probe) {
              this.probe.previewSphere = val;
              if (this._previewSphere) {
                ReflectionProbeManager.probeManager.updatePreviewSphere(this.probe);
              }
            }
          }
        }, {
          key: "previewPlane",
          get: function get() {
            return this._previewPlane;
          },
          set: function set(val) {
            this._previewPlane = val;
            if (this.probe) {
              this.probe.previewPlane = val;
              if (this._previewPlane) {
                ReflectionProbeManager.probeManager.updatePreviewPlane(this.probe);
              }
            }
          }
        }]);
        return ReflectionProbe;
      }(Component), _class3.DEFAULT_CUBE_SIZE = new Vec3(1, 1, 1), _class3.DEFAULT_PLANER_SIZE = new Vec3(5, 0.5, 5), _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_resolution", [serializable], function () {
        return 256;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_clearFlag", [serializable], function () {
        return ProbeClearFlag.SKYBOX;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_backgroundColor", [serializable], function () {
        return new Color(0, 0, 0, 255);
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_visibility", [serializable], function () {
        return CAMERA_DEFAULT_MASK;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_probeType", [serializable], function () {
        return ProbeType.CUBE;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_cubemap", [serializable], function () {
        return null;
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "_size", [serializable], function () {
        return new Vec3(1, 1, 1);
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "_sourceCamera", [serializable], function () {
        return null;
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "_probeId", [serializable], function () {
        return -1;
      }), _initializer10 = _applyDecoratedInitializer(_class2.prototype, "_fastBake", [serializable], function () {
        return false;
      }), _applyDecoratedDescriptor(_class2.prototype, "size", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "size"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "probeType", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "probeType"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "resolution", [_dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "resolution"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "clearFlag", [_dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "clearFlag"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "backgroundColor", [_dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "backgroundColor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "visibility", [_dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "visibility"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "sourceCamera", [_dec14, _dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "sourceCamera"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fastBake", [_dec16, _dec17, _dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "fastBake"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "cubemap", [_dec19, _dec20], Object.getOwnPropertyDescriptor(_class2.prototype, "cubemap"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class));
    }
  };
});