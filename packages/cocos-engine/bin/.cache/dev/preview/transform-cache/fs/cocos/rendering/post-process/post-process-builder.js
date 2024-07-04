System.register("q-bundled:///fs/cocos/rendering/post-process/post-process-builder.js", ["../../../../virtual/internal%253Aconstants.js", "../../render-scene/scene/index.js", "./utils/pass-context.js", "./passes/forward-final-pass.js", "../custom/define.js", "./passes/forward-pass.js", "./passes/taa-pass.js", "./passes/fsr-pass.js", "./passes/blit-screen-pass.js", "./passes/shadow-pass.js", "./passes/hbao-pass.js", "./components/post-process.js", "../../game/index.js", "../../misc/index.js", "./passes/index.js", "../pipeline-event.js"], function (_export, _context) {
  "use strict";

  var EDITOR, CameraProjection, CameraUsage, passContext, ForwardFinalPass, getCameraUniqueID, ForwardPass, TAAPass, FSRPass, BlitScreenPass, ShadowPass, HBAOPass, PostProcess, director, CameraComponent, BloomPass, ColorGradingPass, DofPass, FloatOutputProcessPass, ForwardTransparencyPass, ForwardTransparencySimplePass, FxaaPass, PostFinalPass, SkinPass, PipelineEventType, PostProcessBuilder;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_renderSceneSceneIndexJs) {
      CameraProjection = _renderSceneSceneIndexJs.CameraProjection;
      CameraUsage = _renderSceneSceneIndexJs.CameraUsage;
    }, function (_utilsPassContextJs) {
      passContext = _utilsPassContextJs.passContext;
    }, function (_passesForwardFinalPassJs) {
      ForwardFinalPass = _passesForwardFinalPassJs.ForwardFinalPass;
    }, function (_customDefineJs) {
      getCameraUniqueID = _customDefineJs.getCameraUniqueID;
    }, function (_passesForwardPassJs) {
      ForwardPass = _passesForwardPassJs.ForwardPass;
    }, function (_passesTaaPassJs) {
      TAAPass = _passesTaaPassJs.TAAPass;
    }, function (_passesFsrPassJs) {
      FSRPass = _passesFsrPassJs.FSRPass;
    }, function (_passesBlitScreenPassJs) {
      BlitScreenPass = _passesBlitScreenPassJs.BlitScreenPass;
    }, function (_passesShadowPassJs) {
      ShadowPass = _passesShadowPassJs.ShadowPass;
    }, function (_passesHbaoPassJs) {
      HBAOPass = _passesHbaoPassJs.HBAOPass;
    }, function (_componentsPostProcessJs) {
      PostProcess = _componentsPostProcessJs.PostProcess;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
    }, function (_miscIndexJs) {
      CameraComponent = _miscIndexJs.Camera;
    }, function (_passesIndexJs) {
      BloomPass = _passesIndexJs.BloomPass;
      ColorGradingPass = _passesIndexJs.ColorGradingPass;
      DofPass = _passesIndexJs.DofPass;
      FloatOutputProcessPass = _passesIndexJs.FloatOutputProcessPass;
      ForwardTransparencyPass = _passesIndexJs.ForwardTransparencyPass;
      ForwardTransparencySimplePass = _passesIndexJs.ForwardTransparencySimplePass;
      FxaaPass = _passesIndexJs.FxaaPass;
      PostFinalPass = _passesIndexJs.PostFinalPass;
      SkinPass = _passesIndexJs.SkinPass;
    }, function (_pipelineEventJs) {
      PipelineEventType = _pipelineEventJs.PipelineEventType;
    }],
    execute: function () {
      _export("PostProcessBuilder", PostProcessBuilder = /*#__PURE__*/function () {
        function PostProcessBuilder() {
          this.pipelines = new Map();
          this.init();
        }
        var _proto = PostProcessBuilder.prototype;
        _proto.onGlobalPipelineStateChanged = function onGlobalPipelineStateChanged() {
          var passes = this.pipelines.get('forward');
          if (passes !== undefined) {
            for (var i = 0; i < passes.length; i++) {
              var pass = passes[i];
              if (typeof pass.onGlobalPipelineStateChanged === 'function') {
                pass.onGlobalPipelineStateChanged();
              }
            }
          }
        };
        _proto.init = function init() {
          var forward = new ForwardPass();
          var forwardFinal = new ForwardFinalPass();
          var shadowPass = new ShadowPass();

          // default pipeline
          this.addPass(shadowPass, 'default');
          this.addPass(forward, 'default');
          this.addPass(new ForwardTransparencySimplePass(), 'default');
          this.addPass(forwardFinal, 'default');

          // rendering dependent data generation
          this.addPass(shadowPass);

          // opaque objects forward lighting
          this.addPass(forward);
          this.addPass(new SkinPass());

          // depth-based shading
          this.addPass(new HBAOPass());

          // float output related deferred processing: hdr + fog
          this.addPass(new FloatOutputProcessPass());

          // transparency should after hdr and depth-based shading
          // temporary ignore CC_USE_FLOAT_OUTPUT
          this.addPass(new ForwardTransparencyPass());

          // user post-processing
          this.addPass(new DofPass());
          this.addPass(new TAAPass());
          this.addPass(new FxaaPass());
          this.addPass(new ColorGradingPass());
          this.addPass(new BlitScreenPass());
          this.addPass(new BloomPass());

          // final output
          this.addPass(new FSRPass()); // fsr should be final
          this.addPass(new PostFinalPass());
        };
        _proto.getPass = function getPass(passClass, pipelineName) {
          if (pipelineName === void 0) {
            pipelineName = 'forward';
          }
          var pp = this.pipelines.get(pipelineName);
          return pp && pp.find(function (p) {
            return p instanceof passClass;
          });
        };
        _proto.addPass = function addPass(pass, pipelineName) {
          if (pipelineName === void 0) {
            pipelineName = 'forward';
          }
          var pp = this.pipelines.get(pipelineName);
          if (!pp) {
            pp = [];
            this.pipelines.set(pipelineName, pp);
          }
          var oldIdx = pp.findIndex(function (p) {
            return p.name === pass.name;
          });
          if (oldIdx !== -1) {
            pp.splice(oldIdx, 1);
          }
          pp.push(pass);
        };
        _proto.insertPass = function insertPass(pass, passClass, pipelineName) {
          if (pipelineName === void 0) {
            pipelineName = 'forward';
          }
          var pp = this.pipelines.get(pipelineName);
          if (pp) {
            var oldIdx = pp.findIndex(function (p) {
              return p.name === pass.name;
            });
            if (oldIdx !== -1) {
              pp.splice(oldIdx, 1);
            }
            var idx = pp.findIndex(function (p) {
              return p instanceof passClass;
            });
            if (idx !== -1) {
              pp.splice(idx + 1, 0, pass);
            }
          }
        };
        _proto.initEditor = function initEditor() {
          director.root.cameraList.forEach(function (cam) {
            if (cam.name === 'Editor Camera') {
              cam.usePostProcess = cam.projectionType === CameraProjection.PERSPECTIVE;
            }
          });
        };
        _proto.applyPreviewCamera = function applyPreviewCamera(camera) {
          if (!camera.node.parent) return;
          var camComp = camera.node.parent.getComponent(CameraComponent);
          var oriCamera = camComp && camComp.camera;
          if (oriCamera) {
            camera.postProcess = oriCamera.postProcess;
            camera.usePostProcess = oriCamera.usePostProcess;
          }
        };
        _proto.resortEditorCameras = function resortEditorCameras(cameras) {
          var newCameras = [];
          for (var i = 0; i < cameras.length; i++) {
            var c = cameras[i];
            if (c.name === 'Editor Camera' || c.name === 'Editor UIGizmoCamera' || c.name === 'Scene Gizmo Camera') {
              newCameras.push(c);
            }
          }
          for (var _i = 0; _i < cameras.length; _i++) {
            var _c = cameras[_i];
            if (newCameras.indexOf(_c) === -1) {
              newCameras.push(_c);
            }
          }
          return newCameras;
        };
        _proto.setup = function setup(cameras, ppl) {
          if (EDITOR) {
            this.initEditor();
            cameras = this.resortEditorCameras(cameras);
          }
          passContext.ppl = ppl;
          passContext.shadowPass = undefined;
          passContext.forwardPass = undefined;
          passContext.depthSlotName = '';
          passContext.isFinalCamera = false;
          passContext.isFinalPass = false;
          var globalPP;
          for (var i = 0; i < PostProcess.all.length; i++) {
            var pp = PostProcess.all[i];
            if (pp.global) {
              globalPP = pp;
            }
          }
          for (var _i2 = 0; _i2 < cameras.length; _i2++) {
            var camera = cameras[_i2];
            if (!camera.scene) {
              continue;
            }
            ppl.update(camera);
            if (_i2 === cameras.length - 1) {
              passContext.isFinalCamera = true;
            }
            if (EDITOR && camera.cameraUsage === CameraUsage.PREVIEW) {
              this.applyPreviewCamera(camera);
            }
            ppl.addBuiltinReflectionProbePass(camera);
            passContext.postProcess = camera.postProcess || globalPP;
            director.root.pipelineEvent.emit(PipelineEventType.RENDER_CAMERA_BEGIN, camera);
            this.renderCamera(camera, ppl);
          }
        };
        _proto.getCameraPipelineName = function getCameraPipelineName(camera) {
          var pipelineName = camera.pipeline;
          if (!pipelineName && camera.usePostProcess) {
            pipelineName = 'forward';
          } else {
            pipelineName = 'default';
          }
          return pipelineName;
        };
        _proto.getCameraPasses = function getCameraPasses(camera) {
          var pipelineName = this.getCameraPipelineName(camera);
          return this.pipelines.get(pipelineName) || [];
        };
        _proto.renderCamera = function renderCamera(camera, ppl) {
          passContext.passPathName = "" + getCameraUniqueID(camera);
          passContext.camera = camera;
          passContext.updateViewPort();
          var passes = this.getCameraPasses(camera);
          var taaPass = passes.find(function (p) {
            return p instanceof TAAPass;
          });
          if (taaPass && taaPass.checkEnable(camera)) {
            taaPass.applyCameraJitter(camera);
            taaPass.updateSample();
          }
          var floatOutputPass = passes.find(function (p) {
            return p instanceof FloatOutputProcessPass;
          });
          var lastPass;
          for (var i = 0; i < passes.length; i++) {
            var pass = passes[i];
            if (!pass.checkEnable(camera)) {
              continue;
            }
            if (i === passes.length - 1) {
              passContext.isFinalPass = true;
            }
            if (pass.name === 'BloomPass') {
              // for override post-process builder
              pass.hdrInputName = floatOutputPass === undefined || floatOutputPass === null ? '' : floatOutputPass.getHDRInputName();
            }
            pass.lastPass = lastPass;
            pass.render(camera, ppl);
            lastPass = pass;
          }
        };
        return PostProcessBuilder;
      }());
    }
  };
});