System.register("q-bundled:///fs/cocos/misc/camera-component.js", ["../../../virtual/internal%253Aconstants.js", "../core/data/decorators/index.js", "../asset/assets/render-texture.js", "../scene-graph/index.js", "../core/index.js", "../rendering/define.js", "../render-scene/scene/camera.js", "../scene-graph/layers.js", "../scene-graph/node-enum.js", "../gfx/index.js", "../rendering/post-process/components/post-process.js", "../core/data/class-decorator.js"], function (_export, _context) {
  "use strict";

  var EDITOR, ccclass, help, executeInEditMode, menu, tooltip, displayOrder, type, serializable, visible, range, rangeMin, RenderTexture, Component, Color, Rect, toRadian, Vec3, cclegacy, geometry, Enum, CAMERA_DEFAULT_MASK, SKYBOX_FLAG, CameraProjection, CameraFOVAxis, CameraAperture, CameraISO, CameraShutter, CameraType, TrackingType, Layers, TransformBit, ClearFlagBit, PostProcess, property, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _initializer22, _class3, _temp_vec3_1, ProjectionType, FOVAxis, Aperture, Shutter, ISO, ClearFlag, Camera;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      help = _coreDataDecoratorsIndexJs.help;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      menu = _coreDataDecoratorsIndexJs.menu;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
      displayOrder = _coreDataDecoratorsIndexJs.displayOrder;
      type = _coreDataDecoratorsIndexJs.type;
      serializable = _coreDataDecoratorsIndexJs.serializable;
      visible = _coreDataDecoratorsIndexJs.visible;
      range = _coreDataDecoratorsIndexJs.range;
      rangeMin = _coreDataDecoratorsIndexJs.rangeMin;
    }, function (_assetAssetsRenderTextureJs) {
      RenderTexture = _assetAssetsRenderTextureJs.RenderTexture;
    }, function (_sceneGraphIndexJs) {
      Component = _sceneGraphIndexJs.Component;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      Rect = _coreIndexJs.Rect;
      toRadian = _coreIndexJs.toRadian;
      Vec3 = _coreIndexJs.Vec3;
      cclegacy = _coreIndexJs.cclegacy;
      geometry = _coreIndexJs.geometry;
      Enum = _coreIndexJs.Enum;
    }, function (_renderingDefineJs) {
      CAMERA_DEFAULT_MASK = _renderingDefineJs.CAMERA_DEFAULT_MASK;
    }, function (_renderSceneSceneCameraJs) {
      SKYBOX_FLAG = _renderSceneSceneCameraJs.SKYBOX_FLAG;
      CameraProjection = _renderSceneSceneCameraJs.CameraProjection;
      CameraFOVAxis = _renderSceneSceneCameraJs.CameraFOVAxis;
      CameraAperture = _renderSceneSceneCameraJs.CameraAperture;
      CameraISO = _renderSceneSceneCameraJs.CameraISO;
      CameraShutter = _renderSceneSceneCameraJs.CameraShutter;
      CameraType = _renderSceneSceneCameraJs.CameraType;
      TrackingType = _renderSceneSceneCameraJs.TrackingType;
    }, function (_sceneGraphLayersJs) {
      Layers = _sceneGraphLayersJs.Layers;
    }, function (_sceneGraphNodeEnumJs) {
      TransformBit = _sceneGraphNodeEnumJs.TransformBit;
    }, function (_gfxIndexJs) {
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
    }, function (_renderingPostProcessComponentsPostProcessJs) {
      PostProcess = _renderingPostProcessComponentsPostProcessJs.PostProcess;
    }, function (_coreDataClassDecoratorJs) {
      property = _coreDataClassDecoratorJs.property;
    }],
    execute: function () {
      _temp_vec3_1 = new Vec3();
      ProjectionType = Enum(CameraProjection);
      FOVAxis = Enum(CameraFOVAxis);
      Aperture = Enum(CameraAperture);
      Shutter = Enum(CameraShutter);
      ISO = Enum(CameraISO);
      /**
       * @en Clear screen flag enumeration of the camera.
       * @zh 相机的清屏标记枚举。
       */
      _export("ClearFlag", ClearFlag = Enum({
        /**
         * @en Clear the screen with [[SceneGlobals.skybox]], will clear the depth and stencil buffer at the same time.
         * @zh 使用指定天空盒 [[SceneGlobals.skybox]] 清屏，会同时清理深度和蒙版缓冲。
         */
        SKYBOX: SKYBOX_FLAG | ClearFlagBit.DEPTH_STENCIL,
        /**
         * @en Clear the screen with the given [[Camera.clearColor]], will clear the depth and stencil buffer at the same time.
         * @zh 使用指定的相机清屏颜色 [[Camera.clearColor]] 来清屏，会同时清理将深度和蒙版缓冲。
         */
        SOLID_COLOR: ClearFlagBit.ALL,
        /**
         * @en Only clear the depth and stencil buffer while keeping the color buffer intact. Often used in UI camera.
         * @zh 只清理深度和蒙版缓冲，同时保留颜色缓冲不变。常用于 UI 相机。
         */
        DEPTH_ONLY: ClearFlagBit.DEPTH_STENCIL,
        /**
         * @en Don't clear anything and continue rendering.
         * @zh 不清理任何内容就开始渲染，适合多 Camera 叠加渲染。
         */
        DONT_CLEAR: ClearFlagBit.NONE
      }));
      /**
       * @internal
       */
      /**
       * @en The Camera Component.
       * @zh 相机组件。
       */
      _export("Camera", Camera = (_dec = ccclass('cc.Camera'), _dec2 = help('i18n:cc.Camera'), _dec3 = menu('Rendering/Camera'), _dec4 = displayOrder(0), _dec5 = range([0, 65535, 1]), _dec6 = tooltip('i18n:camera.priority'), _dec7 = type(Layers.BitMask), _dec8 = displayOrder(1), _dec9 = tooltip('i18n:camera.visibility'), _dec10 = type(ClearFlag), _dec11 = displayOrder(2), _dec12 = tooltip('i18n:camera.clear_flags'), _dec13 = displayOrder(3), _dec14 = tooltip('i18n:camera.color'), _dec15 = displayOrder(4), _dec16 = tooltip('i18n:camera.depth'), _dec17 = displayOrder(5), _dec18 = tooltip('i18n:camera.stencil'), _dec19 = type(ProjectionType), _dec20 = displayOrder(6), _dec21 = tooltip('i18n:camera.projection'), _dec22 = type(FOVAxis), _dec23 = displayOrder(7), _dec24 = visible(function visible() {
        return this._projection === ProjectionType.PERSPECTIVE;
      }), _dec25 = tooltip('i18n:camera.fov_axis'), _dec26 = displayOrder(8), _dec27 = visible(function () {
        return this._projection === ProjectionType.PERSPECTIVE;
      }), _dec28 = range([1, 180, 1]), _dec29 = tooltip('i18n:camera.fov'), _dec30 = displayOrder(9), _dec31 = visible(function visible() {
        return this._projection === ProjectionType.ORTHO;
      }), _dec32 = rangeMin(1e-6), _dec33 = tooltip('i18n:camera.ortho_height'), _dec34 = displayOrder(10), _dec35 = rangeMin(0), _dec36 = tooltip('i18n:camera.near'), _dec37 = displayOrder(11), _dec38 = rangeMin(0), _dec39 = tooltip('i18n:camera.far'), _dec40 = type(Aperture), _dec41 = displayOrder(12), _dec42 = tooltip('i18n:camera.aperture'), _dec43 = type(Shutter), _dec44 = displayOrder(13), _dec45 = tooltip('i18n:camera.shutter'), _dec46 = type(ISO), _dec47 = displayOrder(14), _dec48 = tooltip('i18n:camera.ISO'), _dec49 = displayOrder(15), _dec50 = tooltip('i18n:camera.rect'), _dec51 = type(RenderTexture), _dec52 = displayOrder(16), _dec53 = tooltip('i18n:camera.target_texture'), _dec54 = tooltip('i18n:camera.use_postprocess'), _dec55 = tooltip('i18n:camera.postprocess'), _dec56 = type(PostProcess), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = (_class3 = class Camera extends Component {
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
        /**
         * @en The render camera representation.
         * @zh 渲染场景中的相机对象。
         */
        get camera() {
          return this._camera;
        }

        /**
         * @en Render priority of the camera. Cameras with higher depth are rendered after cameras with lower depth.
         * @zh 相机的渲染优先级，值越小越优先渲染。
         */
        get priority() {
          return this._priority;
        }
        set priority(val) {
          this._priority = val;
          if (this._camera) {
            this._camera.priority = val;
          }
        }

        /**
         * @en Visibility mask, declaring a set of node layers that will be visible to this camera.
         * @zh 可见性掩码，声明在当前相机中可见的节点层级集合。
         */
        get visibility() {
          return this._visibility;
        }
        set visibility(val) {
          this._visibility = val;
          if (this._camera) {
            this._camera.visibility = val;
          }
        }

        /**
         * @en Clearing flags of the camera, specifies which part of the framebuffer will be actually cleared every frame.
         * @zh 相机的缓冲清除标志位，指定帧缓冲的哪部分要每帧清除。
         */
        get clearFlags() {
          return this._clearFlags;
        }
        set clearFlags(val) {
          this._clearFlags = val;
          if (this._camera) {
            this._camera.clearFlag = val;
          }
        }

        /**
         * @en Clearing color of the camera.
         * @zh 相机的颜色缓冲默认值。
         */
        get clearColor() {
          return this._color;
        }
        set clearColor(val) {
          this._color.set(val);
          if (this._camera) {
            this._camera.clearColor = this._color;
          }
        }

        /**
         * @en Clearing depth of the camera.
         * @zh 相机的深度缓冲默认值。
         */
        get clearDepth() {
          return this._depth;
        }
        set clearDepth(val) {
          this._depth = val;
          if (this._camera) {
            this._camera.clearDepth = val;
          }
        }

        /**
         * @en Clearing stencil of the camera.
         * @zh 相机的模板缓冲默认值。
         */
        get clearStencil() {
          return this._stencil;
        }
        set clearStencil(val) {
          this._stencil = val;
          if (this._camera) {
            this._camera.clearStencil = val;
          }
        }

        /**
         * @en Projection type of the camera.
         * @zh 相机的投影类型。
         */
        get projection() {
          return this._projection;
        }
        set projection(val) {
          this._projection = val;
          if (this._camera) {
            this._camera.projectionType = val;
          }
        }

        /**
         * @en The axis on which the FOV would be fixed regardless of screen aspect changes.
         * @zh 指定视角的固定轴向，在此轴上不会跟随屏幕长宽比例变化。
         */
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

        /**
         * @en Field of view of the camera.
         * @zh 相机的视角大小。
         */
        get fov() {
          return this._fov;
        }
        set fov(val) {
          this._fov = val;
          if (this._camera) {
            this._camera.fov = toRadian(val);
          }
        }

        /**
         * @en Viewport height in orthographic mode.
         * @zh 正交模式下的相机视角高度。
         */
        get orthoHeight() {
          return this._orthoHeight;
        }
        set orthoHeight(val) {
          this._orthoHeight = val;
          if (this._camera) {
            this._camera.orthoHeight = val;
          }
        }

        /**
         * @en Near clipping distance of the camera, should be as large as possible within acceptable range.
         * @zh 相机的近裁剪距离，应在可接受范围内尽量取最大。
         */
        get near() {
          return this._near;
        }
        set near(val) {
          this._near = val;
          if (this._camera) {
            this._camera.nearClip = val;
          }
        }

        /**
         * @en Far clipping distance of the camera, should be as small as possible within acceptable range.
         * @zh 相机的远裁剪距离，应在可接受范围内尽量取最小。
         */
        get far() {
          return this._far;
        }
        set far(val) {
          this._far = val;
          if (this._camera) {
            this._camera.farClip = val;
          }
        }

        /**
         * @en Camera aperture, controls the exposure parameter.
         * @zh 相机光圈，影响相机的曝光参数。
         */
        get aperture() {
          return this._aperture;
        }
        set aperture(val) {
          this._aperture = val;
          if (this._camera) {
            this._camera.aperture = val;
          }
        }

        /**
         * @en Camera shutter, controls the exposure parameter.
         * @zh 相机快门，影响相机的曝光参数。
         */
        get shutter() {
          return this._shutter;
        }
        set shutter(val) {
          this._shutter = val;
          if (this._camera) {
            this._camera.shutter = val;
          }
        }

        /**
         * @en Camera ISO, controls the exposure parameter.
         * @zh 相机感光度，影响相机的曝光参数。
         */
        get iso() {
          return this._iso;
        }
        set iso(val) {
          this._iso = val;
          if (this._camera) {
            this._camera.iso = val;
          }
        }

        /**
         * @en Screen viewport of the camera wrt. the sceen size.
         * @zh 此相机最终渲染到屏幕上的视口位置和大小。
         */
        get rect() {
          return this._rect;
        }
        set rect(val) {
          this._rect = val;
          if (this._camera) {
            this._camera.setViewportInOrientedSpace(val);
          }
        }

        /**
         * @en Output render texture of the camera. Default to null, which outputs directly to screen.
         * @zh 指定此相机的渲染输出目标贴图，默认为空，直接渲染到屏幕。
         */
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
            this._camera.changeTargetWindow(EDITOR ? cclegacy.director.root.tempWindow : null);
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

        /**
         * @en Scale of the internal buffer size,
         * set to 1 to keep the same with the canvas size.
         * @zh 相机内部缓冲尺寸的缩放值, 1 为与 canvas 尺寸相同。
         */
        get screenScale() {
          return this._screenScale;
        }
        set screenScale(val) {
          this._screenScale = val;
          if (this._camera) {
            this._camera.screenScale = val;
          }
        }

        /**
         * @internal
         */
        get inEditorMode() {
          return this._inEditorMode;
        }
        set inEditorMode(value) {
          this._inEditorMode = value;
          if (this._camera) {
            this._camera.changeTargetWindow(value ? cclegacy.director.root && cclegacy.director.root.mainWindow : cclegacy.director.root && cclegacy.director.root.tempWindow);
          }
        }

        /**
         * @internal
         */
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

        /**
         * @internal
         */
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
          this.node.hasChangedFlags |= TransformBit.POSITION; // trigger camera matrix update
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

        /**
         * @en Convert a screen space (left-top origin) point to a ray.
         * @zh 将一个屏幕空间（左上角为原点）坐标转换为射线。
         * @param x The x axis position on screen.
         * @param y The y axis position on screen.
         * @param out The output ray object.
         * @returns Return the output ray object.
         */
        screenPointToRay(x, y, out) {
          if (!out) {
            out = geometry.Ray.create();
          }
          if (this._camera) {
            this._camera.screenPointToRay(out, x, y);
          }
          return out;
        }

        /**
         * @en Convert a world position to a screen space (left-top origin) position.
         * @zh 将一个世界空间坐标转换为屏幕空间（左上角为原点）坐标。
         * @param worldPos The position in world space coordinates
         * @param out The output position in screen space coordinates.
         * @returns Return the output position object.
         */
        worldToScreen(worldPos, out) {
          if (!out) {
            out = new Vec3();
          }
          if (this._camera) {
            this._camera.worldToScreen(out, worldPos);
          }
          return out;
        }

        /**
         * @en Convert a screen space (left-top origin) position to a world space position.
         * @zh 将一个屏幕空间（左上角为原点）转换为世界空间坐标。
         * @param screenPos The position in screen space coordinates
         * @param out The output position in world space coordinates
         * @returns Return the output position object.
         */
        screenToWorld(screenPos, out) {
          if (!out) {
            out = this.node.getWorldPosition();
          }
          if (this._camera) {
            this._camera.screenToWorld(out, screenPos);
          }
          return out;
        }

        /**
         * @en Convert a 3D world position to the local coordinates system of the given UI node.
         * The converted position will be related to the given UI node under local space.
         * @zh 将一个 3D 空间世界坐标转换到指定的 UI 本地节点坐标系下。转换后的位置是指定 UI 节点坐标系下的局部偏移。
         * @param wpos @en The world position to convert @zh 需要转换的世界坐标
         * @param uiNode @en The UI node coordinates in which the world position will be convert to @zh 用于同步位置的 UI 节点
         * @param out @en Return the corresponding position of the given world position in the UI node's local coordinates @zh 返回传入的世界坐标在 UI 节点本地坐标系下的局部坐标
         *
         * @example
         * ```ts
         * this.convertToUINode(target.worldPosition, uiNode.parent, out);
         * uiNode.position = out;
         * ```
         */
        convertToUINode(wpos, uiNode, out) {
          if (!out) {
            out = new Vec3();
          }
          if (!this._camera) {
            return out;
          }
          this.worldToScreen(wpos, _temp_vec3_1);
          const cmp = uiNode.getComponent('cc.UITransform');
          const designSize = cclegacy.view.getVisibleSize();
          const xoffset = _temp_vec3_1.x - this._camera.width * 0.5;
          const yoffset = _temp_vec3_1.y - this._camera.height * 0.5;
          _temp_vec3_1.x = xoffset / cclegacy.view.getScaleX() + designSize.width * 0.5;
          _temp_vec3_1.y = yoffset / cclegacy.view.getScaleY() + designSize.height * 0.5;
          if (cmp) {
            cmp.convertToNodeSpaceAR(_temp_vec3_1, out);
          }
          return out;
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        _createCamera() {
          if (!this._camera) {
            this._camera = cclegacy.director.root.createCamera();
            this._camera.initialize({
              name: this.node.name,
              node: this.node,
              projection: this._projection,
              window: this._inEditorMode ? cclegacy.director.root && cclegacy.director.root.mainWindow : cclegacy.director.root && cclegacy.director.root.tempWindow,
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
      }, _class3.ProjectionType = ProjectionType, _class3.FOVAxis = FOVAxis, _class3.ClearFlag = ClearFlag, _class3.Aperture = Aperture, _class3.Shutter = Shutter, _class3.ISO = ISO, _class3.TARGET_TEXTURE_CHANGE = 'tex-change', _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "_projection", [serializable], function () {
        return ProjectionType.PERSPECTIVE;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_priority", [serializable], function () {
        return 0;
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "_fov", [serializable], function () {
        return 45;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "_fovAxis", [serializable], function () {
        return FOVAxis.VERTICAL;
      }), _initializer5 = _applyDecoratedInitializer(_class2.prototype, "_orthoHeight", [serializable], function () {
        return 10;
      }), _initializer6 = _applyDecoratedInitializer(_class2.prototype, "_near", [serializable], function () {
        return 1;
      }), _initializer7 = _applyDecoratedInitializer(_class2.prototype, "_far", [serializable], function () {
        return 1000;
      }), _initializer8 = _applyDecoratedInitializer(_class2.prototype, "_color", [serializable], function () {
        return new Color('#333333');
      }), _initializer9 = _applyDecoratedInitializer(_class2.prototype, "_depth", [serializable], function () {
        return 1;
      }), _initializer10 = _applyDecoratedInitializer(_class2.prototype, "_stencil", [serializable], function () {
        return 0;
      }), _initializer11 = _applyDecoratedInitializer(_class2.prototype, "_clearFlags", [serializable], function () {
        return ClearFlag.SOLID_COLOR;
      }), _initializer12 = _applyDecoratedInitializer(_class2.prototype, "_rect", [serializable], function () {
        return new Rect(0, 0, 1, 1);
      }), _initializer13 = _applyDecoratedInitializer(_class2.prototype, "_aperture", [serializable], function () {
        return Aperture.F16_0;
      }), _initializer14 = _applyDecoratedInitializer(_class2.prototype, "_shutter", [serializable], function () {
        return Shutter.D125;
      }), _initializer15 = _applyDecoratedInitializer(_class2.prototype, "_iso", [serializable], function () {
        return ISO.ISO100;
      }), _initializer16 = _applyDecoratedInitializer(_class2.prototype, "_screenScale", [serializable], function () {
        return 1;
      }), _initializer17 = _applyDecoratedInitializer(_class2.prototype, "_visibility", [serializable], function () {
        return CAMERA_DEFAULT_MASK;
      }), _initializer18 = _applyDecoratedInitializer(_class2.prototype, "_targetTexture", [serializable], function () {
        return null;
      }), _initializer19 = _applyDecoratedInitializer(_class2.prototype, "_postProcess", [serializable], function () {
        return null;
      }), _initializer20 = _applyDecoratedInitializer(_class2.prototype, "_usePostProcess", [serializable], function () {
        return false;
      }), _initializer21 = _applyDecoratedInitializer(_class2.prototype, "_cameraType", [serializable], function () {
        return CameraType.DEFAULT;
      }), _initializer22 = _applyDecoratedInitializer(_class2.prototype, "_trackingType", [serializable], function () {
        return TrackingType.NO_TRACKING;
      }), _applyDecoratedDescriptor(_class2.prototype, "priority", [_dec4, _dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "priority"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "visibility", [_dec7, _dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "visibility"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "clearFlags", [_dec10, _dec11, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "clearFlags"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "clearColor", [_dec13, _dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "clearColor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "clearDepth", [_dec15, _dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "clearDepth"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "clearStencil", [_dec17, _dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "clearStencil"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "projection", [_dec19, _dec20, _dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "projection"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fovAxis", [_dec22, _dec23, _dec24, _dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "fovAxis"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fov", [_dec26, _dec27, _dec28, _dec29], Object.getOwnPropertyDescriptor(_class2.prototype, "fov"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "orthoHeight", [_dec30, _dec31, _dec32, _dec33], Object.getOwnPropertyDescriptor(_class2.prototype, "orthoHeight"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "near", [_dec34, _dec35, _dec36], Object.getOwnPropertyDescriptor(_class2.prototype, "near"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "far", [_dec37, _dec38, _dec39], Object.getOwnPropertyDescriptor(_class2.prototype, "far"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "aperture", [_dec40, _dec41, _dec42], Object.getOwnPropertyDescriptor(_class2.prototype, "aperture"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shutter", [_dec43, _dec44, _dec45], Object.getOwnPropertyDescriptor(_class2.prototype, "shutter"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "iso", [_dec46, _dec47, _dec48], Object.getOwnPropertyDescriptor(_class2.prototype, "iso"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "rect", [_dec49, _dec50], Object.getOwnPropertyDescriptor(_class2.prototype, "rect"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "targetTexture", [_dec51, _dec52, _dec53], Object.getOwnPropertyDescriptor(_class2.prototype, "targetTexture"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "usePostProcess", [_dec54, property], Object.getOwnPropertyDescriptor(_class2.prototype, "usePostProcess"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "postProcess", [_dec55, _dec56], Object.getOwnPropertyDescriptor(_class2.prototype, "postProcess"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class));
      cclegacy.Camera = Camera;
    }
  };
});