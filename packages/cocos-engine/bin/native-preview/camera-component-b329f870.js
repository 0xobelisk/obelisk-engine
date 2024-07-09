System.register(['./node-event-18d96a1b.js', './index-ce98320e.js', './scene-asset.jsb-0d4c6201.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js', './device-90bc7390.js'], (function (exports) {
    'use strict';
    var _applyDecoratedDescriptor, Component, ccclass, disallowMultiple, applyDecoratedInitializer, property, serializable, Vec3, Enum, type, legacyCC, toRadian, Ray, Color, Rect, RenderTexture, CameraProjection, CameraFOVAxis, CameraAperture, CameraShutter, CameraISO, SKYBOX_FLAG, Layers, TransformBit, CAMERA_DEFAULT_MASK, CameraType, TrackingType, ClearFlagBit;
    return {
        setters: [function (module) {
            _applyDecoratedDescriptor = module.H;
            Component = module.C;
        }, function (module) {
            ccclass = module.by;
            disallowMultiple = module.ck;
            applyDecoratedInitializer = module.bx;
            property = module.cl;
            serializable = module.bf;
            Vec3 = module.n;
            Enum = module.aa;
            type = module.bw;
            legacyCC = module.l;
            toRadian = module.J;
            Ray = module.ci;
            Color = module.C;
            Rect = module.R;
        }, function (module) {
            RenderTexture = module.R;
        }, function (module) {
            CameraProjection = module.b;
            CameraFOVAxis = module.C;
            CameraAperture = module.c;
            CameraShutter = module.e;
            CameraISO = module.d;
            SKYBOX_FLAG = module.h;
            Layers = module.V;
            TransformBit = module.Z;
            CAMERA_DEFAULT_MASK = module.aN;
            CameraType = module.f;
            TrackingType = module.T;
        }, function () {}, function (module) {
            ClearFlagBit = module.H;
        }],
        execute: (function () {

            var _dec$1, _class$1, _class2$1, _initializer$1, _initializer2$1, _initializer3$1, _class3$1;
            let PostProcess = exports('P', (_dec$1 = ccclass('cc.PostProcess'), _dec$1(_class$1 = disallowMultiple(_class$1 = (_class2$1 = (_class3$1 = class PostProcess extends Component {
              constructor(...args) {
                super(...args);
                this.global = _initializer$1 && _initializer$1();
                this._shadingScale = _initializer2$1 && _initializer2$1();
                this.enableShadingScaleInEditor = _initializer3$1 && _initializer3$1();
                this.settings = new Map();
              }
              get shadingScale() {
                return this._shadingScale;
              }
              set shadingScale(v) {
                this._shadingScale = v;
              }
              addSetting(setting) {
                this.settings.set(setting.constructor, setting);
              }
              removeSetting(setting) {
                this.settings.delete(setting.constructor);
              }
              getSetting(ctor) {
                return this.settings.get(ctor);
              }
              onEnable() {
                PostProcess.all.push(this);
              }
              onDisable() {
                const idx = PostProcess.all.indexOf(this);
                if (idx !== -1) {
                  PostProcess.all.splice(idx, 1);
                }
              }
            }, _class3$1.all = [], _class3$1), (_initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "global", [property, serializable], function () {
              return true;
            }), _initializer2$1 = applyDecoratedInitializer(_class2$1.prototype, "_shadingScale", [serializable], function () {
              return 1;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "shadingScale", [property], Object.getOwnPropertyDescriptor(_class2$1.prototype, "shadingScale"), _class2$1.prototype), _initializer3$1 = applyDecoratedInitializer(_class2$1.prototype, "enableShadingScaleInEditor", [property, serializable], function () {
              return false;
            })), _class2$1)) || _class$1) || _class$1));

            var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _initializer22, _class3;
            const _temp_vec3_1 = new Vec3();
            const ProjectionType = Enum(CameraProjection);
            const FOVAxis = Enum(CameraFOVAxis);
            const Aperture = Enum(CameraAperture);
            const Shutter = Enum(CameraShutter);
            const ISO = Enum(CameraISO);
            const ClearFlag = Enum({
              SKYBOX: SKYBOX_FLAG | ClearFlagBit.DEPTH_STENCIL,
              SOLID_COLOR: ClearFlagBit.ALL,
              DEPTH_ONLY: ClearFlagBit.DEPTH_STENCIL,
              DONT_CLEAR: ClearFlagBit.NONE
            });
            let Camera = exports('C', (_dec = ccclass('cc.Camera'), _dec2 = type(Layers.BitMask), _dec3 = type(ClearFlag), _dec4 = type(ProjectionType), _dec5 = type(FOVAxis), _dec6 = type(Aperture), _dec7 = type(Shutter), _dec8 = type(ISO), _dec9 = type(RenderTexture), _dec10 = type(PostProcess), _dec(_class = (_class2 = (_class3 = class Camera extends Component {
              constructor(...args) {
                super(...args);
                this._projection = _initializer && _initializer();
                this._priority = _initializer2 && _initializer2();
                this._fov = _initializer3 && _initializer3();
                this._fovAxis = _initializer4 && _initializer4();
                this._orthoHeight = _initializer5 && _initializer5();
                this._near = _initializer6 && _initializer6();
                this._far = _initializer7 && _initializer7();
                this._color = _initializer8 && _initializer8();
                this._depth = _initializer9 && _initializer9();
                this._stencil = _initializer10 && _initializer10();
                this._clearFlags = _initializer11 && _initializer11();
                this._rect = _initializer12 && _initializer12();
                this._aperture = _initializer13 && _initializer13();
                this._shutter = _initializer14 && _initializer14();
                this._iso = _initializer15 && _initializer15();
                this._screenScale = _initializer16 && _initializer16();
                this._visibility = _initializer17 && _initializer17();
                this._targetTexture = _initializer18 && _initializer18();
                this._postProcess = _initializer19 && _initializer19();
                this._usePostProcess = _initializer20 && _initializer20();
                this._camera = null;
                this._inEditorMode = false;
                this._flows = undefined;
                this._cameraType = _initializer21 && _initializer21();
                this._trackingType = _initializer22 && _initializer22();
              }
              get camera() {
                return this._camera;
              }
              get priority() {
                return this._priority;
              }
              set priority(val) {
                this._priority = val;
                if (this._camera) {
                  this._camera.priority = val;
                }
              }
              get visibility() {
                return this._visibility;
              }
              set visibility(val) {
                this._visibility = val;
                if (this._camera) {
                  this._camera.visibility = val;
                }
              }
              get clearFlags() {
                return this._clearFlags;
              }
              set clearFlags(val) {
                this._clearFlags = val;
                if (this._camera) {
                  this._camera.clearFlag = val;
                }
              }
              get clearColor() {
                return this._color;
              }
              set clearColor(val) {
                this._color.set(val);
                if (this._camera) {
                  this._camera.clearColor = this._color;
                }
              }
              get clearDepth() {
                return this._depth;
              }
              set clearDepth(val) {
                this._depth = val;
                if (this._camera) {
                  this._camera.clearDepth = val;
                }
              }
              get clearStencil() {
                return this._stencil;
              }
              set clearStencil(val) {
                this._stencil = val;
                if (this._camera) {
                  this._camera.clearStencil = val;
                }
              }
              get projection() {
                return this._projection;
              }
              set projection(val) {
                this._projection = val;
                if (this._camera) {
                  this._camera.projectionType = val;
                }
              }
              get fovAxis() {
                return this._fovAxis;
              }
              set fovAxis(val) {
                if (val === this._fovAxis) {
                  return;
                }
                this._fovAxis = val;
                if (this._camera) {
                  this._camera.fovAxis = val;
                  if (val === CameraFOVAxis.VERTICAL) {
                    this.fov = this._fov * this._camera.aspect;
                  } else {
                    this.fov = this._fov / this._camera.aspect;
                  }
                }
              }
              get fov() {
                return this._fov;
              }
              set fov(val) {
                this._fov = val;
                if (this._camera) {
                  this._camera.fov = toRadian(val);
                }
              }
              get orthoHeight() {
                return this._orthoHeight;
              }
              set orthoHeight(val) {
                this._orthoHeight = val;
                if (this._camera) {
                  this._camera.orthoHeight = val;
                }
              }
              get near() {
                return this._near;
              }
              set near(val) {
                this._near = val;
                if (this._camera) {
                  this._camera.nearClip = val;
                }
              }
              get far() {
                return this._far;
              }
              set far(val) {
                this._far = val;
                if (this._camera) {
                  this._camera.farClip = val;
                }
              }
              get aperture() {
                return this._aperture;
              }
              set aperture(val) {
                this._aperture = val;
                if (this._camera) {
                  this._camera.aperture = val;
                }
              }
              get shutter() {
                return this._shutter;
              }
              set shutter(val) {
                this._shutter = val;
                if (this._camera) {
                  this._camera.shutter = val;
                }
              }
              get iso() {
                return this._iso;
              }
              set iso(val) {
                this._iso = val;
                if (this._camera) {
                  this._camera.iso = val;
                }
              }
              get rect() {
                return this._rect;
              }
              set rect(val) {
                this._rect = val;
                if (this._camera) {
                  this._camera.setViewportInOrientedSpace(val);
                }
              }
              get targetTexture() {
                return this._targetTexture;
              }
              set targetTexture(value) {
                if (this._targetTexture === value) {
                  return;
                }
                const old = this._targetTexture;
                this._targetTexture = value;
                this._checkTargetTextureEvent(old);
                this._updateTargetTexture();
                if (!value && this._camera) {
                  this._camera.changeTargetWindow(null);
                  this._camera.isWindowSize = true;
                }
                this.node.emit(Camera.TARGET_TEXTURE_CHANGE, this);
              }
              get usePostProcess() {
                return this._usePostProcess;
              }
              set usePostProcess(v) {
                this._usePostProcess = v;
                if (this._camera) {
                  this._camera.usePostProcess = v;
                }
              }
              get postProcess() {
                return this._postProcess;
              }
              set postProcess(v) {
                this._postProcess = v;
                if (this._camera) {
                  this._camera.postProcess = v;
                }
              }
              get screenScale() {
                return this._screenScale;
              }
              set screenScale(val) {
                this._screenScale = val;
                if (this._camera) {
                  this._camera.screenScale = val;
                }
              }
              get inEditorMode() {
                return this._inEditorMode;
              }
              set inEditorMode(value) {
                this._inEditorMode = value;
                if (this._camera) {
                  this._camera.changeTargetWindow(value ? legacyCC.director.root && legacyCC.director.root.mainWindow : legacyCC.director.root && legacyCC.director.root.tempWindow);
                }
              }
              get cameraType() {
                return this._cameraType;
              }
              set cameraType(val) {
                if (this._cameraType === val) {
                  return;
                }
                this._cameraType = val;
                if (this.camera) {
                  this.camera.cameraType = val;
                }
              }
              get trackingType() {
                return this._trackingType;
              }
              set trackingType(val) {
                if (this._trackingType === val) {
                  return;
                }
                this._trackingType = val;
                if (this.camera) {
                  this.camera.trackingType = val;
                }
              }
              onLoad() {
                this._createCamera();
              }
              onEnable() {
                this.node.hasChangedFlags |= TransformBit.POSITION;
                if (this._camera) {
                  this._attachToScene();
                }
              }
              onDisable() {
                if (this._camera) {
                  this._detachFromScene();
                }
              }
              onDestroy() {
                if (this._camera) {
                  this._camera.destroy();
                  this._camera = null;
                }
                if (this._targetTexture) {
                  this._targetTexture.off('resize');
                }
              }
              screenPointToRay(x, y, out) {
                if (!out) {
                  out = Ray.create();
                }
                if (this._camera) {
                  this._camera.screenPointToRay(out, x, y);
                }
                return out;
              }
              worldToScreen(worldPos, out) {
                if (!out) {
                  out = new Vec3();
                }
                if (this._camera) {
                  this._camera.worldToScreen(out, worldPos);
                }
                return out;
              }
              screenToWorld(screenPos, out) {
                if (!out) {
                  out = this.node.getWorldPosition();
                }
                if (this._camera) {
                  this._camera.screenToWorld(out, screenPos);
                }
                return out;
              }
              convertToUINode(wpos, uiNode, out) {
                if (!out) {
                  out = new Vec3();
                }
                if (!this._camera) {
                  return out;
                }
                this.worldToScreen(wpos, _temp_vec3_1);
                const cmp = uiNode.getComponent('cc.UITransform');
                const designSize = legacyCC.view.getVisibleSize();
                const xoffset = _temp_vec3_1.x - this._camera.width * 0.5;
                const yoffset = _temp_vec3_1.y - this._camera.height * 0.5;
                _temp_vec3_1.x = xoffset / legacyCC.view.getScaleX() + designSize.width * 0.5;
                _temp_vec3_1.y = yoffset / legacyCC.view.getScaleY() + designSize.height * 0.5;
                if (cmp) {
                  cmp.convertToNodeSpaceAR(_temp_vec3_1, out);
                }
                return out;
              }
              _createCamera() {
                if (!this._camera) {
                  this._camera = legacyCC.director.root.createCamera();
                  this._camera.initialize({
                    name: this.node.name,
                    node: this.node,
                    projection: this._projection,
                    window: this._inEditorMode ? legacyCC.director.root && legacyCC.director.root.mainWindow : legacyCC.director.root && legacyCC.director.root.tempWindow,
                    priority: this._priority,
                    cameraType: this.cameraType,
                    trackingType: this.trackingType
                  });
                  this._camera.setViewportInOrientedSpace(this._rect);
                  this._camera.fovAxis = this._fovAxis;
                  this._camera.fov = toRadian(this._fov);
                  this._camera.orthoHeight = this._orthoHeight;
                  this._camera.nearClip = this._near;
                  this._camera.farClip = this._far;
                  this._camera.clearColor = this._color;
                  this._camera.clearDepth = this._depth;
                  this._camera.clearStencil = this._stencil;
                  this._camera.clearFlag = this._clearFlags;
                  this._camera.visibility = this._visibility;
                  this._camera.aperture = this._aperture;
                  this._camera.shutter = this._shutter;
                  this._camera.iso = this._iso;
                  this._camera.postProcess = this._postProcess;
                  this._camera.usePostProcess = this._usePostProcess;
                }
                this._updateTargetTexture();
              }
              _attachToScene() {
                if (!this.node.scene || !this._camera) {
                  return;
                }
                if (this._camera && this._camera.scene) {
                  this._camera.scene.removeCamera(this._camera);
                }
                const rs = this._getRenderScene();
                rs.addCamera(this._camera);
              }
              _detachFromScene() {
                if (this._camera && this._camera.scene) {
                  this._camera.scene.removeCamera(this._camera);
                }
              }
              _checkTargetTextureEvent(old) {
                if (old) {
                  old.off('resize');
                }
                if (this._targetTexture) {
                  this._targetTexture.on('resize', window => {
                    if (this._camera) {
                      this._camera.setFixedSize(window.width, window.height);
                    }
                  }, this);
                }
              }
              _updateTargetTexture() {
                if (!this._camera) {
                  return;
                }
                if (this._targetTexture) {
                  const window = this._targetTexture.window;
                  this._camera.changeTargetWindow(window);
                  this._camera.setFixedSize(window.width, window.height);
                }
              }
            }, _class3.ProjectionType = ProjectionType, _class3.FOVAxis = FOVAxis, _class3.ClearFlag = ClearFlag, _class3.Aperture = Aperture, _class3.Shutter = Shutter, _class3.ISO = ISO, _class3.TARGET_TEXTURE_CHANGE = 'tex-change', _class3), (_initializer = applyDecoratedInitializer(_class2.prototype, "_projection", [serializable], function () {
              return ProjectionType.PERSPECTIVE;
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "_priority", [serializable], function () {
              return 0;
            }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "_fov", [serializable], function () {
              return 45;
            }), _initializer4 = applyDecoratedInitializer(_class2.prototype, "_fovAxis", [serializable], function () {
              return FOVAxis.VERTICAL;
            }), _initializer5 = applyDecoratedInitializer(_class2.prototype, "_orthoHeight", [serializable], function () {
              return 10;
            }), _initializer6 = applyDecoratedInitializer(_class2.prototype, "_near", [serializable], function () {
              return 1;
            }), _initializer7 = applyDecoratedInitializer(_class2.prototype, "_far", [serializable], function () {
              return 1000;
            }), _initializer8 = applyDecoratedInitializer(_class2.prototype, "_color", [serializable], function () {
              return new Color('#333333');
            }), _initializer9 = applyDecoratedInitializer(_class2.prototype, "_depth", [serializable], function () {
              return 1;
            }), _initializer10 = applyDecoratedInitializer(_class2.prototype, "_stencil", [serializable], function () {
              return 0;
            }), _initializer11 = applyDecoratedInitializer(_class2.prototype, "_clearFlags", [serializable], function () {
              return ClearFlag.SOLID_COLOR;
            }), _initializer12 = applyDecoratedInitializer(_class2.prototype, "_rect", [serializable], function () {
              return new Rect(0, 0, 1, 1);
            }), _initializer13 = applyDecoratedInitializer(_class2.prototype, "_aperture", [serializable], function () {
              return Aperture.F16_0;
            }), _initializer14 = applyDecoratedInitializer(_class2.prototype, "_shutter", [serializable], function () {
              return Shutter.D125;
            }), _initializer15 = applyDecoratedInitializer(_class2.prototype, "_iso", [serializable], function () {
              return ISO.ISO100;
            }), _initializer16 = applyDecoratedInitializer(_class2.prototype, "_screenScale", [serializable], function () {
              return 1;
            }), _initializer17 = applyDecoratedInitializer(_class2.prototype, "_visibility", [serializable], function () {
              return CAMERA_DEFAULT_MASK;
            }), _initializer18 = applyDecoratedInitializer(_class2.prototype, "_targetTexture", [serializable], function () {
              return null;
            }), _initializer19 = applyDecoratedInitializer(_class2.prototype, "_postProcess", [serializable], function () {
              return null;
            }), _initializer20 = applyDecoratedInitializer(_class2.prototype, "_usePostProcess", [serializable], function () {
              return false;
            }), _initializer21 = applyDecoratedInitializer(_class2.prototype, "_cameraType", [serializable], function () {
              return CameraType.DEFAULT;
            }), _initializer22 = applyDecoratedInitializer(_class2.prototype, "_trackingType", [serializable], function () {
              return TrackingType.NO_TRACKING;
            }), _applyDecoratedDescriptor(_class2.prototype, "visibility", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "visibility"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "clearFlags", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "clearFlags"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "projection", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "projection"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fovAxis", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "fovAxis"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "aperture", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "aperture"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shutter", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "shutter"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "iso", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "iso"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "targetTexture", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "targetTexture"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "usePostProcess", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "usePostProcess"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "postProcess", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "postProcess"), _class2.prototype)), _class2)) || _class));
            legacyCC.Camera = Camera;

        })
    };
}));
