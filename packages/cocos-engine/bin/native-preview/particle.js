System.register(['./node-event-18d96a1b.js', './index-ce98320e.js', './builtin-res-mgr.jsb-c9e8e53a.js', './director-dc238483.js', './find-7a03d1cc.js', './create-mesh.jsb-8af9d27e.js', './buffer-9511d9f4.js', './rendering-sub-mesh.jsb-25043997.js', './scene-asset.jsb-0d4c6201.js', './deprecated-80961f27.js', './renderer-3bf7a012.js', './device-90bc7390.js', './deprecated-fcfb90f6.js', './camera-component-b329f870.js', './model-renderer-f8d2f66d.js', './index-cec07db1.js', './mesh.jsb-cea8fe4b.js', './instantiate-a87ac743.js', './decorators-b63b63a2.js', './touch-af62e326.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './mesh-renderer-ea94cc01.js', './util-9da0b4a2.js', './capsule-3c7095c4.js', './murmurhash2_gc-2108d723.js', './skeleton.jsb-04631524.js', './deprecated-15f68f3e.js'], (function (exports) {
    'use strict';
    var _applyDecoratedDescriptor, Component, ccclass$1, type$1, applyDecoratedInitializer, toDegree, toRadian, Vec4, Color, legacyCC, serializable$1, Vec3, CCClass, Enum, constructLegacyCurveAndConvert, setPropertyEnumType, RealCurve, AnimationCurve, lerp, approx, EPSILON, Gradient, EDITOR, override, Vec2, Quat, Mat4, randomRange, random, randomRangeInt, sign, pseudoRandom, error, repeat, formerlySerializedAs, pingPong, clamp, warn, warnID, errorID, Pool, INT_MAX, AABB, CCFloat, CCInteger, _decorator, executionOrder, CCBoolean, EDITOR_NOT_IN_PREVIEW, intersect, removeProperty, replaceProperty, setClassAlias, Texture2D, Model, Material, builtinResMgr, ModelType, ImageAsset, PixelFormat, Filter, WrapMode, TransformBit, Node, director, Director, deviceManager, createMesh, RenderingSubMesh, Pass, MaterialInstance, Renderer, PrimitiveMode, Attribute, AttributeName, Format, FormatInfos, BufferInfo, BufferUsageBit, MemoryUsageBit, Feature, API, FormatFeatureBit, RecyclePool, ModelRenderer, Mesh, instantiate;
    return {
        setters: [function (module) {
            _applyDecoratedDescriptor = module.H;
            Component = module.C;
        }, function (module) {
            ccclass$1 = module.by;
            type$1 = module.bw;
            applyDecoratedInitializer = module.bx;
            toDegree = module.K;
            toRadian = module.J;
            Vec4 = module.p;
            Color = module.C;
            legacyCC = module.l;
            serializable$1 = module.bf;
            Vec3 = module.n;
            CCClass = module.aq;
            Enum = module.aa;
            constructLegacyCurveAndConvert = module.cI;
            setPropertyEnumType = module.bh;
            RealCurve = module.aP;
            AnimationCurve = module.cJ;
            lerp = module.I;
            approx = module.D;
            EPSILON = module.E;
            Gradient = module.aY;
            EDITOR = module.bB;
            override = module.bd;
            Vec2 = module.V;
            Quat = module.Q;
            Mat4 = module.s;
            randomRange = module.O;
            random = module.L;
            randomRangeInt = module.U;
            sign = module.cK;
            pseudoRandom = module.W;
            error = module.e;
            repeat = module.$;
            formerlySerializedAs = module.be;
            pingPong = module.a0;
            clamp = module.F;
            warn = module.w;
            warnID = module.d;
            errorID = module.f;
            Pool = module.P;
            INT_MAX = module.cL;
            AABB = module.bE;
            CCFloat = module.au;
            CCInteger = module.at;
            _decorator = module.ap;
            executionOrder = module.cs;
            CCBoolean = module.av;
            EDITOR_NOT_IN_PREVIEW = module.c8;
            intersect = module.bG;
            removeProperty = module.ah;
            replaceProperty = module.ag;
            setClassAlias = module.cj;
        }, function (module) {
            Texture2D = module.am;
            Model = module.a;
            Material = module.ap;
            builtinResMgr = module.at;
            ModelType = module.M;
            ImageAsset = module.al;
            PixelFormat = module.aS;
            Filter = module.aR;
            WrapMode = module.aT;
            TransformBit = module.Z;
            Node = module.Q;
        }, function (module) {
            director = module.n;
            Director = module.m;
        }, function (module) {
            deviceManager = module.d;
        }, function (module) {
            createMesh = module.c;
        }, function () {}, function (module) {
            RenderingSubMesh = module.R;
        }, function () {}, function (module) {
            Pass = module.P;
        }, function (module) {
            MaterialInstance = module.M;
            Renderer = module.R;
        }, function (module) {
            PrimitiveMode = module.u;
            Attribute = module.ao;
            AttributeName = module.aN;
            Format = module.b;
            FormatInfos = module.aO;
            BufferInfo = module.a7;
            BufferUsageBit = module.B;
            MemoryUsageBit = module.e;
            Feature = module.F;
            API = module.A;
            FormatFeatureBit = module.i;
        }, function (module) {
            RecyclePool = module.R;
        }, function () {}, function (module) {
            ModelRenderer = module.M;
        }, function () {}, function (module) {
            Mesh = module.M;
        }, function (module) {
            instantiate = module.i;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            var _dec$g, _dec2$f, _dec3$d, _class$f, _class2$g, _initializer$f, _initializer2$f, _initializer3$e, _initializer4$e, _initializer5$d;
            let Billboard = (_dec$g = ccclass$1('cc.Billboard'), _dec2$f = type$1(Texture2D), _dec3$d = type$1(Texture2D), _dec$g(_class$f = (_class2$g = class Billboard extends Component {
              get texture() {
                return this._texture;
              }
              set texture(val) {
                this._texture = val;
                this.updateTexture();
              }
              updateTexture() {
                if (this._material) {
                  this._material.setProperty('mainTexture', this._texture);
                }
              }
              get height() {
                return this._height;
              }
              set height(val) {
                this._height = val;
                this.updateHeight();
              }
              updateHeight() {
                if (this._material) {
                  this._uniform.y = this._height;
                  this._material.setProperty('cc_size_rotation', this._uniform);
                }
              }
              get width() {
                return this._width;
              }
              set width(val) {
                this._width = val;
                this.updateWidth();
              }
              updateWidth() {
                if (this._material) {
                  this._uniform.x = this._width;
                  this._material.setProperty('cc_size_rotation', this._uniform);
                }
              }
              get rotation() {
                return Math.round(toDegree(this._rotation) * 100) / 100;
              }
              set rotation(val) {
                this._rotation = toRadian(val);
                this.updateRotation();
              }
              updateRotation() {
                if (this._material) {
                  this._uniform.z = this._rotation;
                  this._material.setProperty('cc_size_rotation', this._uniform);
                }
              }
              get technique() {
                return this._techIndex;
              }
              set technique(val) {
                var _this$_material, _this$_material$effec;
                val = Math.floor(val);
                const techs = (_this$_material = this._material) === null || _this$_material === void 0 ? void 0 : (_this$_material$effec = _this$_material.effectAsset) === null || _this$_material$effec === void 0 ? void 0 : _this$_material$effec.techniques;
                if (techs && val >= techs.length) {
                  val = techs.length - 1;
                }
                if (val < 0) {
                  val = 0;
                }
                this._techIndex = val;
                this.updateTechnique();
              }
              updateTechnique() {
                if (this._model && this._mesh && this._material && this._material.technique !== this._techIndex) {
                  this.detachFromScene();
                  this._model.destroy();
                  this._model = null;
                  this._material.destroy();
                  this._material = null;
                  this._mesh.destroy();
                  this._mesh = null;
                  this.createModel();
                  this.updateWidth();
                  this.updateHeight();
                  this.updateRotation();
                  this.updateTexture();
                  if (this.enabled) {
                    this.attachToScene();
                    this._model.enabled = true;
                  } else {
                    this._model.enabled = false;
                  }
                }
              }
              constructor() {
                super();
                this._texture = _initializer$f && _initializer$f();
                this._height = _initializer2$f && _initializer2$f();
                this._width = _initializer3$e && _initializer3$e();
                this._rotation = _initializer4$e && _initializer4$e();
                this._techIndex = _initializer5$d && _initializer5$d();
                this._model = null;
                this._mesh = null;
                this._material = null;
                this._uniform = new Vec4(1, 1, 0, 0);
              }
              onLoad() {
                this.createModel();
              }
              onEnable() {
                this.attachToScene();
                this._model.enabled = true;
                this.updateWidth();
                this.updateHeight();
                this.updateRotation();
                this.updateTexture();
                this.updateTechnique();
              }
              onDisable() {
                this.detachFromScene();
              }
              attachToScene() {
                if (this._model && this.node && this.node.scene) {
                  if (this._model.scene) {
                    this.detachFromScene();
                  }
                  this._getRenderScene().addModel(this._model);
                }
              }
              detachFromScene() {
                if (this._model && this._model.scene) {
                  this._model.scene.removeModel(this._model);
                }
              }
              createModel() {
                this._mesh = createMesh({
                  primitiveMode: PrimitiveMode.TRIANGLE_LIST,
                  positions: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  uvs: [0, 0, 1, 0, 0, 1, 1, 1],
                  colors: [Color.WHITE.r, Color.WHITE.g, Color.WHITE.b, Color.WHITE.a, Color.WHITE.r, Color.WHITE.g, Color.WHITE.b, Color.WHITE.a, Color.WHITE.r, Color.WHITE.g, Color.WHITE.b, Color.WHITE.a, Color.WHITE.r, Color.WHITE.g, Color.WHITE.b, Color.WHITE.a],
                  attributes: [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RG32F), new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8UI, true)],
                  indices: [0, 1, 2, 1, 2, 3]
                }, undefined, {
                  calculateBounds: false
                });
                const model = this._model = legacyCC.director.root.createModel(Model, this.node);
                model.node = model.transform = this.node;
                if (this._material == null) {
                  this._material = new Material();
                  this._material.copy(builtinResMgr.get('default-billboard-material'), {
                    technique: this._techIndex
                  });
                }
                model.initSubModel(0, this._mesh.renderingSubMeshes[0], this._material);
              }
            }, (_initializer$f = applyDecoratedInitializer(_class2$g.prototype, "_texture", [_dec2$f], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2$g.prototype, "texture", [_dec3$d], Object.getOwnPropertyDescriptor(_class2$g.prototype, "texture"), _class2$g.prototype), _initializer2$f = applyDecoratedInitializer(_class2$g.prototype, "_height", [serializable$1], function () {
              return 0;
            }), _initializer3$e = applyDecoratedInitializer(_class2$g.prototype, "_width", [serializable$1], function () {
              return 0;
            }), _initializer4$e = applyDecoratedInitializer(_class2$g.prototype, "_rotation", [serializable$1], function () {
              return 0;
            }), _initializer5$d = applyDecoratedInitializer(_class2$g.prototype, "_techIndex", [serializable$1], function () {
              return 0;
            })), _class2$g)) || _class$f); exports({ Billboard: Billboard, BillboardComponent: Billboard });

            const _vertex_attrs$1 = [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGBA32F), new Attribute(AttributeName.ATTR_TEX_COORD1, Format.RGB32F), new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true)];
            const _temp_v1 = new Vec3();
            const _temp_v2 = new Vec3();
            class LineModel extends Model {
              constructor() {
                super();
                this._capacity = void 0;
                this._vertSize = 0;
                this._vBuffer = null;
                this._vertAttrsFloatCount = 0;
                this._vdataF32 = null;
                this._vdataUint32 = null;
                this._subMeshData = null;
                this._vertCount = 0;
                this._indexCount = 0;
                this._material = null;
                this._iaVertCount = 0;
                this._iaIndexCount = 0;
                {
                  this._registerListeners();
                }
                this.type = ModelType.LINE;
                this._capacity = 100;
              }
              setCapacity(capacity) {
                this._capacity = capacity;
                this.createBuffer();
              }
              createBuffer() {
                this._vertSize = 0;
                for (const a of _vertex_attrs$1) {
                  a.offset = this._vertSize;
                  this._vertSize += FormatInfos[a.format].size;
                }
                this._vertAttrsFloatCount = this._vertSize / 4;
                this._vBuffer = this.createSubMeshData();
                this._vdataF32 = new Float32Array(this._vBuffer);
                this._vdataUint32 = new Uint32Array(this._vBuffer);
              }
              updateMaterial(mat) {
                this._material = mat;
                super.setSubModelMaterial(0, mat);
              }
              createSubMeshData() {
                if (this._subMeshData) {
                  this.destroySubMeshData();
                }
                this._vertCount = 2;
                this._indexCount = 6;
                const vertexBuffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, this._vertSize * this._capacity * this._vertCount, this._vertSize));
                const vBuffer = new ArrayBuffer(this._vertSize * this._capacity * this._vertCount);
                vertexBuffer.update(vBuffer);
                const indices = new Uint16Array((this._capacity - 1) * this._indexCount);
                let dst = 0;
                for (let i = 0; i < this._capacity - 1; ++i) {
                  const baseIdx = 2 * i;
                  indices[dst++] = baseIdx;
                  indices[dst++] = baseIdx + 1;
                  indices[dst++] = baseIdx + 2;
                  indices[dst++] = baseIdx + 3;
                  indices[dst++] = baseIdx + 2;
                  indices[dst++] = baseIdx + 1;
                }
                const indexBuffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, (this._capacity - 1) * this._indexCount * Uint16Array.BYTES_PER_ELEMENT, Uint16Array.BYTES_PER_ELEMENT));
                indexBuffer.update(indices);
                this._iaVertCount = this._capacity * this._vertCount;
                this._iaIndexCount = (this._capacity - 1) * this._indexCount;
                this._subMeshData = new RenderingSubMesh([vertexBuffer], _vertex_attrs$1, PrimitiveMode.TRIANGLE_LIST, indexBuffer);
                this.initSubModel(0, this._subMeshData, this._material);
                return vBuffer;
              }
              addLineVertexData(positions, width, color) {
                if (positions.length > 1) {
                  let offset = 0;
                  Vec3.subtract(_temp_v1, positions[1], positions[0]);
                  this._vdataF32[offset++] = positions[0].x;
                  this._vdataF32[offset++] = positions[0].y;
                  this._vdataF32[offset++] = positions[0].z;
                  this._vdataF32[offset++] = 0;
                  this._vdataF32[offset++] = width.evaluate(0, 1);
                  this._vdataF32[offset++] = 0;
                  this._vdataF32[offset++] = 0;
                  this._vdataF32[offset++] = _temp_v1.x;
                  this._vdataF32[offset++] = _temp_v1.y;
                  this._vdataF32[offset++] = _temp_v1.z;
                  this._vdataUint32[offset++] = color.evaluate(0, 1)._val;
                  this._vdataF32[offset++] = positions[0].x;
                  this._vdataF32[offset++] = positions[0].y;
                  this._vdataF32[offset++] = positions[0].z;
                  this._vdataF32[offset++] = 1;
                  this._vdataF32[offset++] = width.evaluate(0, 1);
                  this._vdataF32[offset++] = 0;
                  this._vdataF32[offset++] = 1;
                  this._vdataF32[offset++] = _temp_v1.x;
                  this._vdataF32[offset++] = _temp_v1.y;
                  this._vdataF32[offset++] = _temp_v1.z;
                  this._vdataUint32[offset++] = color.evaluate(0, 1)._val;
                  for (let i = 1; i < positions.length - 1; i++) {
                    Vec3.subtract(_temp_v1, positions[i - 1], positions[i]);
                    Vec3.subtract(_temp_v2, positions[i + 1], positions[i]);
                    Vec3.subtract(_temp_v2, _temp_v2, _temp_v1);
                    const seg = i / positions.length;
                    this._vdataF32[offset++] = positions[i].x;
                    this._vdataF32[offset++] = positions[i].y;
                    this._vdataF32[offset++] = positions[i].z;
                    this._vdataF32[offset++] = 0;
                    this._vdataF32[offset++] = width.evaluate(seg, 1);
                    this._vdataF32[offset++] = seg;
                    this._vdataF32[offset++] = 0;
                    this._vdataF32[offset++] = _temp_v2.x;
                    this._vdataF32[offset++] = _temp_v2.y;
                    this._vdataF32[offset++] = _temp_v2.z;
                    this._vdataUint32[offset++] = color.evaluate(seg, 1)._val;
                    this._vdataF32[offset++] = positions[i].x;
                    this._vdataF32[offset++] = positions[i].y;
                    this._vdataF32[offset++] = positions[i].z;
                    this._vdataF32[offset++] = 1;
                    this._vdataF32[offset++] = width.evaluate(seg, 1);
                    this._vdataF32[offset++] = seg;
                    this._vdataF32[offset++] = 1;
                    this._vdataF32[offset++] = _temp_v2.x;
                    this._vdataF32[offset++] = _temp_v2.y;
                    this._vdataF32[offset++] = _temp_v2.z;
                    this._vdataUint32[offset++] = color.evaluate(seg, 1)._val;
                  }
                  Vec3.subtract(_temp_v1, positions[positions.length - 1], positions[positions.length - 2]);
                  this._vdataF32[offset++] = positions[positions.length - 1].x;
                  this._vdataF32[offset++] = positions[positions.length - 1].y;
                  this._vdataF32[offset++] = positions[positions.length - 1].z;
                  this._vdataF32[offset++] = 0;
                  this._vdataF32[offset++] = width.evaluate(1, 1);
                  this._vdataF32[offset++] = 1;
                  this._vdataF32[offset++] = 0;
                  this._vdataF32[offset++] = _temp_v1.x;
                  this._vdataF32[offset++] = _temp_v1.y;
                  this._vdataF32[offset++] = _temp_v1.z;
                  this._vdataUint32[offset++] = color.evaluate(1, 1)._val;
                  this._vdataF32[offset++] = positions[positions.length - 1].x;
                  this._vdataF32[offset++] = positions[positions.length - 1].y;
                  this._vdataF32[offset++] = positions[positions.length - 1].z;
                  this._vdataF32[offset++] = 1;
                  this._vdataF32[offset++] = width.evaluate(1, 1);
                  this._vdataF32[offset++] = 1;
                  this._vdataF32[offset++] = 1;
                  this._vdataF32[offset++] = _temp_v1.x;
                  this._vdataF32[offset++] = _temp_v1.y;
                  this._vdataF32[offset++] = _temp_v1.z;
                  this._vdataUint32[offset++] = color.evaluate(1, 1)._val;
                }
                this.updateIA(Math.max(0, positions.length - 1));
              }
              updateIA(count) {
                const ia = this._subModels[0].inputAssembler;
                ia.vertexBuffers[0].update(this._vdataF32);
                ia.firstIndex = 0;
                ia.indexCount = this._indexCount * count;
                ia.vertexCount = this._iaVertCount;
              }
              destroySubMeshData() {
                if (this._subMeshData) {
                  this._subMeshData.destroy();
                  this._subMeshData = null;
                }
              }
            }

            var _dec$f, _class$e, _class2$f;
            const setClassAttr = CCClass.Attr.setClassAttr;
            const SerializableTable$1 = [['mode', 'constant', 'multiplier'], ['mode', 'spline', 'multiplier'], ['mode', 'splineMin', 'splineMax', 'multiplier'], ['mode', 'constantMin', 'constantMax', 'multiplier']];
            const Mode$2 = Enum({
              Constant: 0,
              Curve: 1,
              TwoCurves: 2,
              TwoConstants: 3
            });
            let CurveRange = exports('CurveRange', (_dec$f = ccclass$1('cc.CurveRange'), _dec$f(_class$e = (_class2$f = class CurveRange {
              set mode(mode) {
                this._mode = mode;
                switch (mode) {
                  case Mode$2.Constant:
                    break;
                  case Mode$2.TwoConstants:
                    break;
                  case Mode$2.Curve:
                    if (!this.spline) this.spline = constructLegacyCurveAndConvert();
                    break;
                  case Mode$2.TwoCurves:
                    if (!this.splineMax) this.splineMax = constructLegacyCurveAndConvert();
                    if (!this.splineMin) this.splineMin = constructLegacyCurveAndConvert();
                    break;
                }
              }
              get mode() {
                return this._mode;
              }
              get curve() {
                var _this$_curve;
                return (_this$_curve = this._curve) !== null && _this$_curve !== void 0 ? _this$_curve : this._curve = new AnimationCurve(this.spline);
              }
              set curve(value) {
                this._curve = value;
                this.spline = value._internalCurve;
              }
              get curveMin() {
                var _this$_curveMin;
                return (_this$_curveMin = this._curveMin) !== null && _this$_curveMin !== void 0 ? _this$_curveMin : this._curveMin = new AnimationCurve(this.splineMin);
              }
              set curveMin(value) {
                this._curveMin = value;
                this.splineMin = value._internalCurve;
              }
              get curveMax() {
                var _this$_curveMax;
                return (_this$_curveMax = this._curveMax) !== null && _this$_curveMax !== void 0 ? _this$_curveMax : this._curveMax = new AnimationCurve(this.splineMax);
              }
              set curveMax(value) {
                this._curveMax = value;
                this.splineMax = value._internalCurve;
              }
              constructor() {
                this.constant = 0;
                this.constantMin = 0;
                this.constantMax = 0;
                this.multiplier = 1;
                this._mode = Mode$2.Constant;
              }
              evaluate(time, rndRatio) {
                switch (this._mode) {
                  default:
                  case Mode$2.Constant:
                    return this.constant;
                  case Mode$2.Curve:
                    return this.spline.evaluate(time) * this.multiplier;
                  case Mode$2.TwoCurves:
                    return lerp(this.splineMin.evaluate(time), this.splineMax.evaluate(time), rndRatio) * this.multiplier;
                  case Mode$2.TwoConstants:
                    return lerp(this.constantMin, this.constantMax, rndRatio);
                }
              }
              getMax() {
                switch (this._mode) {
                  default:
                  case Mode$2.Constant:
                    return this.constant;
                  case Mode$2.Curve:
                    return this.multiplier;
                  case Mode$2.TwoConstants:
                    return this.constantMax;
                  case Mode$2.TwoCurves:
                    return this.multiplier;
                }
              }
              isZero() {
                switch (this._mode) {
                  default:
                  case Mode$2.Constant:
                    return approx(this.constant, 0.0, EPSILON);
                  case Mode$2.Curve:
                    return approx(this.multiplier, 0.0, EPSILON);
                  case Mode$2.TwoConstants:
                    return approx(Math.max(Math.abs(this.constantMax), Math.abs(this.constantMin)), 0.0, EPSILON);
                  case Mode$2.TwoCurves:
                    return approx(this.multiplier, 0.0, EPSILON);
                }
              }
              _onBeforeSerialize(props) {
                return SerializableTable$1[this._mode];
              }
            }, _class2$f.Mode = Mode$2, _class2$f)) || _class$e));
            CCClass.fastDefine('cc.CurveRange', CurveRange, {
              multiplier: 1,
              constantMax: 0,
              constantMin: 0,
              constant: 0,
              mode: Mode$2.Constant,
              splineMax: Object.freeze(constructLegacyCurveAndConvert()),
              splineMin: Object.freeze(constructLegacyCurveAndConvert()),
              spline: Object.freeze(constructLegacyCurveAndConvert())
            });
            setClassAttr(CurveRange, 'multiplier', 'visible', true);
            setClassAttr(CurveRange, 'constantMax', 'visible', true);
            setClassAttr(CurveRange, 'constantMin', 'visible', true);
            setClassAttr(CurveRange, 'constant', 'visible', true);
            setPropertyEnumType(CurveRange, 'mode', Mode$2);
            setClassAttr(CurveRange, 'mode', 'visible', true);
            setClassAttr(CurveRange, 'splineMax', 'type', 'Object');
            setClassAttr(CurveRange, 'splineMax', 'ctor', RealCurve);
            setClassAttr(CurveRange, 'splineMax', 'visible', true);
            setClassAttr(CurveRange, 'splineMin', 'type', 'Object');
            setClassAttr(CurveRange, 'splineMin', 'ctor', RealCurve);
            setClassAttr(CurveRange, 'splineMin', 'visible', true);
            setClassAttr(CurveRange, 'spline', 'type', 'Object');
            setClassAttr(CurveRange, 'spline', 'ctor', RealCurve);
            setClassAttr(CurveRange, 'spline', 'visible', true);
            function evaluateCurve(cr, time, index) {
              switch (cr.mode) {
                case Mode$2.Constant:
                  return cr.constant;
                case Mode$2.Curve:
                  return cr.spline.evaluate(time) * cr.multiplier;
                case Mode$2.TwoCurves:
                  return index === 0 ? cr.splineMin.evaluate(time) * cr.multiplier : cr.splineMax.evaluate(time) * cr.multiplier;
                case Mode$2.TwoConstants:
                  return index === 0 ? cr.constantMin : cr.constantMax;
                default:
                  return 0;
              }
            }
            function evaluateHeight$1(cr) {
              switch (cr.mode) {
                case Mode$2.TwoConstants:
                  return 2;
                case Mode$2.TwoCurves:
                  return 2;
                default:
                  return 1;
              }
            }
            function packTexture(data, width, height) {
              const image = new ImageAsset({
                width,
                height,
                _data: data,
                _compressed: false,
                format: PixelFormat.RGBA32F
              });
              const texture = new Texture2D();
              texture.setFilters(Filter.NEAREST, Filter.NEAREST);
              texture.setMipFilter(Filter.NONE);
              texture.setWrapMode(WrapMode.CLAMP_TO_EDGE, WrapMode.CLAMP_TO_EDGE, WrapMode.CLAMP_TO_EDGE);
              texture.image = image;
              return texture;
            }
            function updateTexture(tex, data, width, height) {
              if (tex === null || width !== tex.width || height !== tex.height) {
                if (tex) {
                  tex.destroy();
                }
                tex = packTexture(data, width, height);
              } else {
                tex.uploadData(data);
              }
              return tex;
            }
            function packCurveRangeZ(tex, data, samples, cr, discrete) {
              const height = evaluateHeight$1(cr);
              const len = samples * height * 4;
              if (data === null || data.length !== len) {
                data = new Float32Array(samples * height * 4);
              }
              const interval = 1.0 / (samples - 1);
              let offset = 0;
              for (let h = 0; h < height; h++) {
                for (let j = 0; j < samples; j++) {
                  const value = evaluateCurve(cr, interval * j, h);
                  data[offset + 2] = value;
                  offset += 4;
                }
              }
              return {
                texture: updateTexture(tex, data, samples, height),
                texdata: data
              };
            }
            function packCurveRangeN(tex, data, samples, cr, discrete) {
              const height = evaluateHeight$1(cr);
              const len = samples * height * 4;
              if (data === null || data.length !== len) {
                data = new Float32Array(samples * height * 4);
              }
              const interval = 1.0 / (samples - 1);
              let sum = 0;
              let average = 0;
              let offset = 0;
              for (let h = 0; h < height; h++) {
                sum = 0;
                for (let j = 0; j < samples; j++) {
                  const value = evaluateCurve(cr, interval * j, h);
                  if (discrete) {
                    average = value;
                  } else {
                    sum += value;
                    average = sum / (j + 1);
                  }
                  data[offset] = average;
                  data[offset + 1] = average;
                  data[offset + 2] = average;
                  offset += 4;
                }
              }
              return {
                texture: updateTexture(tex, data, samples, height),
                texdata: data
              };
            }
            function packCurveRangeXY(tex, data, samples, x, y, discrete) {
              const height = Math.max(evaluateHeight$1(x), evaluateHeight$1(y));
              const len = samples * height * 4;
              if (data === null || data.length !== len) {
                data = new Float32Array(samples * height * 4);
              }
              const curves = [x, y];
              const interval = 1.0 / (samples - 1);
              for (let h = 0; h < height; h++) {
                for (let i = 0; i < 2; i++) {
                  const cr = curves[i];
                  let sum = 0;
                  let average = 0;
                  for (let j = 0; j < samples; j++) {
                    const value = evaluateCurve(cr, interval * j, h);
                    if (discrete) {
                      average = value;
                    } else {
                      sum += value;
                      average = sum / (j + 1);
                    }
                    data[(h * samples + j) * 4 + i] = average;
                  }
                }
              }
              return {
                texture: updateTexture(tex, data, samples, height),
                texdata: data
              };
            }
            function packCurveRangeXYZ(tex, data, samples, x, y, z, discrete) {
              const height = Math.max(evaluateHeight$1(x), evaluateHeight$1(y), evaluateHeight$1(z));
              const len = samples * height * 4;
              if (data === null || data.length !== len) {
                data = new Float32Array(samples * height * 4);
              }
              const curves = [x, y, z];
              const interval = 1.0 / (samples - 1);
              for (let h = 0; h < height; h++) {
                for (let i = 0; i < 3; i++) {
                  const cr = curves[i];
                  let sum = 0;
                  let average = 0;
                  for (let j = 0; j < samples; j++) {
                    const value = evaluateCurve(cr, interval * j, h);
                    if (discrete) {
                      average = value;
                    } else {
                      sum += value;
                      average = sum / (j + 1);
                    }
                    data[(h * samples + j) * 4 + i] = average;
                  }
                }
              }
              return {
                texture: updateTexture(tex, data, samples, height),
                texdata: data
              };
            }
            function packCurveRangeXYZW(tex, data, samples, x, y, z, w, discrete) {
              const height = Math.max(evaluateHeight$1(x), evaluateHeight$1(y), evaluateHeight$1(z), evaluateHeight$1(w));
              const len = samples * height * 4;
              if (data === null || data.length !== len) {
                data = new Float32Array(samples * height * 4);
              }
              const curves = [x, y, z, w];
              const interval = 1.0 / (samples - 1);
              for (let h = 0; h < height; h++) {
                for (let i = 0; i < 4; i++) {
                  const cr = curves[i];
                  let sum = 0;
                  let average = 0;
                  for (let j = 0; j < samples; j++) {
                    const value = evaluateCurve(cr, interval * j, h);
                    if (discrete) {
                      average = value;
                    } else {
                      sum += value;
                      average = sum / (j + 1);
                    }
                    data[(h * samples + j) * 4 + i] = average;
                  }
                }
              }
              return {
                texture: updateTexture(tex, data, samples, height),
                texdata: data
              };
            }

            var _dec$e, _dec2$e, _dec3$c, _dec4$c, _dec5$b, _dec6$9, _class$d, _class2$e, _initializer$e, _initializer2$e, _initializer3$d, _initializer4$d, _initializer5$c, _initializer6$a, _initializer7$8, _class3$3;
            const SerializableTable = EDITOR ;
            const Mode$1 = Enum({
              Color: 0,
              Gradient: 1,
              TwoColors: 2,
              TwoGradients: 3,
              RandomColor: 4
            });
            const tempColor = new Color();
            const tempColor2 = new Color();
            let GradientRange = exports('GradientRange', (_dec$e = ccclass$1('cc.GradientRange'), _dec2$e = type$1(Mode$1), _dec3$c = type$1(Gradient), _dec4$c = type$1(Gradient), _dec5$b = type$1(Gradient), _dec6$9 = type$1(Mode$1), _dec$e(_class$d = (_class2$e = (_class3$3 = class GradientRange {
              constructor() {
                this.color = _initializer$e && _initializer$e();
                this.colorMin = _initializer2$e && _initializer2$e();
                this.colorMax = _initializer3$d && _initializer3$d();
                this.gradient = _initializer4$d && _initializer4$d();
                this.gradientMin = _initializer5$c && _initializer5$c();
                this.gradientMax = _initializer6$a && _initializer6$a();
                this._mode = _initializer7$8 && _initializer7$8();
                this._color = Color.WHITE.clone();
              }
              get mode() {
                return this._mode;
              }
              set mode(m) {
                this._mode = m;
              }
              evaluate(time, rndRatio) {
                switch (this._mode) {
                  case Mode$1.Color:
                    return this.color;
                  case Mode$1.TwoColors:
                    Color.lerp(this._color, this.colorMin, this.colorMax, rndRatio);
                    return this._color;
                  case Mode$1.RandomColor:
                    return this.gradient.getRandomColor(this._color);
                  case Mode$1.Gradient:
                    return this.gradient.evaluateFast(this._color, time);
                  case Mode$1.TwoGradients:
                    Color.lerp(this._color, this.gradientMin.evaluateFast(tempColor, time), this.gradientMax.evaluateFast(tempColor2, time), rndRatio);
                    return this._color;
                  default:
                    return this.color;
                }
              }
              _onBeforeSerialize(props) {
                return SerializableTable[this._mode];
              }
            }, _class3$3.Mode = Mode$1, _class3$3), (_applyDecoratedDescriptor(_class2$e.prototype, "mode", [_dec2$e], Object.getOwnPropertyDescriptor(_class2$e.prototype, "mode"), _class2$e.prototype), _initializer$e = applyDecoratedInitializer(_class2$e.prototype, "color", [serializable$1], function () {
              return Color.WHITE.clone();
            }), _initializer2$e = applyDecoratedInitializer(_class2$e.prototype, "colorMin", [serializable$1], function () {
              return Color.WHITE.clone();
            }), _initializer3$d = applyDecoratedInitializer(_class2$e.prototype, "colorMax", [serializable$1], function () {
              return Color.WHITE.clone();
            }), _initializer4$d = applyDecoratedInitializer(_class2$e.prototype, "gradient", [_dec3$c], function () {
              return new Gradient();
            }), _initializer5$c = applyDecoratedInitializer(_class2$e.prototype, "gradientMin", [_dec4$c], function () {
              return new Gradient();
            }), _initializer6$a = applyDecoratedInitializer(_class2$e.prototype, "gradientMax", [_dec5$b], function () {
              return new Gradient();
            }), _initializer7$8 = applyDecoratedInitializer(_class2$e.prototype, "_mode", [_dec6$9], function () {
              return Mode$1.Color;
            })), _class2$e)) || _class$d));
            function evaluateGradient(gr, time, index) {
              switch (gr.mode) {
                case Mode$1.Color:
                  return gr.color;
                case Mode$1.TwoColors:
                  return index === 0 ? gr.colorMin : gr.colorMax;
                case Mode$1.RandomColor:
                  return gr.gradient.getRandomColor(tempColor);
                case Mode$1.Gradient:
                  return gr.gradient.evaluateFast(tempColor, time);
                case Mode$1.TwoGradients:
                  return index === 0 ? gr.gradientMin.evaluateFast(tempColor, time) : gr.gradientMax.evaluateFast(tempColor, time);
                default:
                  return gr.color;
              }
            }
            function evaluateHeight(gr) {
              switch (gr.mode) {
                case Mode$1.TwoColors:
                  return 2;
                case Mode$1.TwoGradients:
                  return 2;
                default:
                  return 1;
              }
            }
            function packGradientRange(tex, data, samples, gr) {
              const height = evaluateHeight(gr);
              const len = samples * height * 4;
              if (data === null || data.length !== len) {
                data = new Uint8Array(samples * height * 4);
              }
              const interval = 1.0 / (samples - 1);
              let offset = 0;
              for (let h = 0; h < height; h++) {
                for (let j = 0; j < samples; j++) {
                  const color = evaluateGradient(gr, interval * j, h);
                  data[offset] = color.r;
                  data[offset + 1] = color.g;
                  data[offset + 2] = color.b;
                  data[offset + 3] = color.a;
                  offset += 4;
                }
              }
              if (tex === null || samples !== tex.width || height !== tex.height) {
                if (tex) {
                  tex.destroy();
                }
                tex = new Texture2D();
                tex.create(samples, height, PixelFormat.RGBA8888);
                tex.setFilters(Filter.LINEAR, Filter.LINEAR);
                tex.setWrapMode(WrapMode.CLAMP_TO_EDGE, WrapMode.CLAMP_TO_EDGE);
              }
              tex.uploadData(data);
              return {
                texture: tex,
                texdata: data
              };
            }

            var _dec$d, _dec2$d, _dec3$b, _dec4$b, _dec5$a, _dec6$8, _dec7$6, _dec8$5, _dec9$4, _dec10$2, _class$c, _class2$d, _initializer$d, _initializer2$d, _initializer3$c, _initializer4$c, _initializer5$b, _initializer6$9, _initializer7$7, _initializer8$7;
            const CC_USE_WORLD_SPACE$2 = 'CC_USE_WORLD_SPACE';
            const define = {
              CC_USE_WORLD_SPACE: false,
              CC_USE_WORLD_SCALE: true
            };
            let Line = (_dec$d = ccclass$1('cc.Line'), _dec2$d = type$1(Texture2D), _dec3$b = type$1(Texture2D), _dec4$b = type$1(Material), _dec5$a = type$1([Vec3]), _dec6$8 = type$1([Vec3]), _dec7$6 = type$1(CurveRange), _dec8$5 = type$1(GradientRange), _dec9$4 = type$1(Vec2), _dec10$2 = type$1(Vec2), _dec$d(_class$c = (_class2$d = class Line extends ModelRenderer {
              get texture() {
                return this._texture;
              }
              set texture(val) {
                this._texture = val;
                if (this.material) {
                  this.material.setProperty('mainTexture', val);
                }
              }
              get lineMaterial() {
                return this.getSharedMaterial(0);
              }
              set lineMaterial(val) {
                this.setSharedMaterial(val, 0);
              }
              get sharedMaterials() {
                return super.sharedMaterials;
              }
              set sharedMaterials(val) {
                super.sharedMaterials = val;
              }
              get worldSpace() {
                return this._worldSpace;
              }
              set worldSpace(val) {
                this._worldSpace = val;
                const matIns = this.getMaterialInstance(0);
                if (matIns) {
                  define[CC_USE_WORLD_SPACE$2] = this.worldSpace;
                  matIns.recompileShaders(define);
                  if (this._models[0]) {
                    this._models[0].setSubModelMaterial(0, matIns);
                  }
                }
              }
              get positions() {
                return this._positions;
              }
              set positions(val) {
                this._positions = val;
                if (this._models[0]) {
                  const lineModel = this._models[0];
                  lineModel.addLineVertexData(this._positions, this.width, this.color);
                }
              }
              get width() {
                return this._width;
              }
              set width(val) {
                this._width = val;
                if (this._models[0]) {
                  const lineModel = this._models[0];
                  lineModel.addLineVertexData(this._positions, this._width, this._color);
                }
              }
              get color() {
                return this._color;
              }
              set color(val) {
                this._color = val;
                if (this._models[0]) {
                  const lineModel = this._models[0];
                  lineModel.addLineVertexData(this._positions, this._width, this._color);
                }
              }
              get tile() {
                return this._tile;
              }
              set tile(val) {
                this._tile.set(val);
                if (this.material) {
                  this._tile_offset.x = this._tile.x;
                  this._tile_offset.y = this._tile.y;
                  this.material.setProperty('mainTiling_Offset', this._tile_offset);
                }
              }
              get offset() {
                return this._offset;
              }
              set offset(val) {
                this._offset.set(val);
                if (this.material) {
                  this._tile_offset.z = this._offset.x;
                  this._tile_offset.w = this._offset.y;
                  this.material.setProperty('mainTiling_Offset', this._tile_offset);
                }
              }
              constructor() {
                super();
                this._texture = _initializer$d && _initializer$d();
                this._material = _initializer2$d && _initializer2$d();
                this._worldSpace = _initializer3$c && _initializer3$c();
                this._positions = _initializer4$c && _initializer4$c();
                this._width = _initializer5$b && _initializer5$b();
                this._color = _initializer6$9 && _initializer6$9();
                this._tile = _initializer7$7 && _initializer7$7();
                this._tile_offset = new Vec4();
                this._offset = _initializer8$7 && _initializer8$7();
              }
              onLoad() {
                const model = legacyCC.director.root.createModel(LineModel);
                if (this._models.length === 0) {
                  this._models.push(model);
                } else {
                  this._models[0] = model;
                }
                model.node = model.transform = this.node;
                if (this._material) {
                  this.lineMaterial = this._material;
                  this._material = null;
                }
                if (this.lineMaterial === null) {
                  const mat = builtinResMgr.get('default-trail-material');
                  this.material = mat;
                }
                const matIns = this.getMaterialInstance(0);
                if (matIns) {
                  define[CC_USE_WORLD_SPACE$2] = this.worldSpace;
                  matIns.recompileShaders(define);
                  model.updateMaterial(matIns);
                }
                model.setCapacity(100);
              }
              onEnable() {
                super.onEnable();
                if (this._models.length === 0 || !this._models[0]) {
                  return;
                }
                this._attachToScene();
                this.texture = this._texture;
                this.tile = this._tile;
                this.offset = this._offset;
                const lineModel = this._models[0];
                lineModel.addLineVertexData(this._positions, this.width, this.color);
              }
              onDisable() {
                if (this._models.length > 0 && this._models[0]) {
                  this._detachFromScene();
                }
              }
              _attachToScene() {
                super._attachToScene();
                if (this._models.length > 0 && this._models[0] && this.node && this.node.scene) {
                  const lineModel = this._models[0];
                  if (lineModel.scene) {
                    this._detachFromScene();
                  }
                  this._getRenderScene().addModel(lineModel);
                }
              }
              _detachFromScene() {
                super._detachFromScene();
                if (this._models.length > 0 && this._models[0]) {
                  const lineModel = this._models[0];
                  if (lineModel.scene) {
                    lineModel.scene.removeModel(lineModel);
                  }
                }
              }
              _onMaterialModified(index, material) {
                super._onMaterialModified(index, material);
                const matIns = this.getMaterialInstance(0);
                if (matIns) {
                  define[CC_USE_WORLD_SPACE$2] = this.worldSpace;
                  matIns.recompileShaders(define);
                  if (this._models[0]) {
                    const lineModel = this._models[0];
                    lineModel.updateMaterial(matIns);
                  }
                }
              }
            }, (_initializer$d = applyDecoratedInitializer(_class2$d.prototype, "_texture", [_dec2$d], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2$d.prototype, "texture", [_dec3$b], Object.getOwnPropertyDescriptor(_class2$d.prototype, "texture"), _class2$d.prototype), _initializer2$d = applyDecoratedInitializer(_class2$d.prototype, "_material", [serializable$1], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2$d.prototype, "lineMaterial", [_dec4$b], Object.getOwnPropertyDescriptor(_class2$d.prototype, "lineMaterial"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "sharedMaterials", [override, serializable$1], Object.getOwnPropertyDescriptor(_class2$d.prototype, "sharedMaterials"), _class2$d.prototype), _initializer3$c = applyDecoratedInitializer(_class2$d.prototype, "_worldSpace", [serializable$1], function () {
              return false;
            }), _initializer4$c = applyDecoratedInitializer(_class2$d.prototype, "_positions", [_dec5$a], function () {
              return [];
            }), _applyDecoratedDescriptor(_class2$d.prototype, "positions", [_dec6$8], Object.getOwnPropertyDescriptor(_class2$d.prototype, "positions"), _class2$d.prototype), _applyDecoratedDescriptor(_class2$d.prototype, "width", [_dec7$6], Object.getOwnPropertyDescriptor(_class2$d.prototype, "width"), _class2$d.prototype), _initializer5$b = applyDecoratedInitializer(_class2$d.prototype, "_width", [serializable$1], function () {
              return new CurveRange();
            }), _applyDecoratedDescriptor(_class2$d.prototype, "color", [_dec8$5], Object.getOwnPropertyDescriptor(_class2$d.prototype, "color"), _class2$d.prototype), _initializer6$9 = applyDecoratedInitializer(_class2$d.prototype, "_color", [serializable$1], function () {
              return new GradientRange();
            }), _initializer7$7 = applyDecoratedInitializer(_class2$d.prototype, "_tile", [serializable$1], function () {
              return new Vec2(1, 1);
            }), _applyDecoratedDescriptor(_class2$d.prototype, "tile", [_dec9$4], Object.getOwnPropertyDescriptor(_class2$d.prototype, "tile"), _class2$d.prototype), _initializer8$7 = applyDecoratedInitializer(_class2$d.prototype, "_offset", [serializable$1], function () {
              return new Vec2(0, 0);
            }), _applyDecoratedDescriptor(_class2$d.prototype, "offset", [_dec10$2], Object.getOwnPropertyDescriptor(_class2$d.prototype, "offset"), _class2$d.prototype)), _class2$d)) || _class$c); exports({ Line: Line, LineComponent: Line });

            class Particle {
              constructor(particleSystem) {
                this.particleSystem = void 0;
                this.position = void 0;
                this.velocity = void 0;
                this.animatedVelocity = void 0;
                this.ultimateVelocity = void 0;
                this.angularVelocity = void 0;
                this.axisOfRotation = void 0;
                this.rotation = void 0;
                this.startEuler = void 0;
                this.startRotation = void 0;
                this.startRotated = void 0;
                this.deltaQuat = void 0;
                this.deltaMat = void 0;
                this.localMat = void 0;
                this.startSize = void 0;
                this.size = void 0;
                this.startColor = void 0;
                this.color = void 0;
                this.randomSeed = void 0;
                this.remainingLifetime = void 0;
                this.loopCount = void 0;
                this.lastLoop = void 0;
                this.trailDelay = void 0;
                this.startLifetime = void 0;
                this.emitAccumulator0 = void 0;
                this.emitAccumulator1 = void 0;
                this.frameIndex = void 0;
                this.startRow = void 0;
                this.particleSystem = particleSystem;
                this.position = new Vec3(0, 0, 0);
                this.velocity = new Vec3(0, 0, 0);
                this.animatedVelocity = new Vec3(0, 0, 0);
                this.ultimateVelocity = new Vec3(0, 0, 0);
                this.angularVelocity = new Vec3(0, 0, 0);
                this.axisOfRotation = new Vec3(0, 0, 0);
                this.rotation = new Vec3(0, 0, 0);
                this.startEuler = new Vec3(0, 0, 0);
                this.startRotation = new Quat();
                this.startRotated = false;
                this.deltaQuat = new Quat();
                this.deltaMat = new Mat4();
                this.localMat = new Mat4();
                this.startSize = new Vec3(0, 0, 0);
                this.size = new Vec3(0, 0, 0);
                this.startColor = Color.WHITE.clone();
                this.color = Color.WHITE.clone();
                this.randomSeed = 0;
                this.remainingLifetime = 0.0;
                this.loopCount = 0;
                this.lastLoop = 0;
                this.trailDelay = 0;
                this.startLifetime = 0.0;
                this.emitAccumulator0 = 0.0;
                this.emitAccumulator1 = 0.0;
                this.frameIndex = 0.0;
                this.startRow = 0;
              }
              reset() {
                this.rotation.set(0, 0, 0);
                this.startEuler.set(0, 0, 0);
                this.startRotation.set(0, 0, 0, 1);
                this.startRotated = false;
                this.deltaQuat.set(0, 0, 0, 1);
                this.deltaMat.identity();
                this.localMat.identity();
              }
            }
            Particle.INDENTIFY_NEG_QUAT = 10;
            Particle.R2D = 180.0 / Math.PI;
            const PARTICLE_MODULE_NAME = {
              COLOR: 'colorModule',
              FORCE: 'forceModule',
              LIMIT: 'limitModule',
              ROTATION: 'rotationModule',
              SIZE: 'sizeModule',
              VELOCITY: 'velocityModule',
              TEXTURE: 'textureModule',
              NOISE: 'noiseModule'
            };
            const PARTICLE_MODULE_ORDER = ['sizeModule', 'colorModule', 'forceModule', 'velocityModule', 'limitModule', 'rotationModule', 'textureModule', 'noiseModule'];
            const PARTICLE_MODULE_PROPERTY = ['_colorOverLifetimeModule', '_shapeModule', '_sizeOvertimeModule', '_velocityOvertimeModule', '_forceOvertimeModule', '_limitVelocityOvertimeModule', '_rotationOvertimeModule', '_textureAnimationModule', '_noiseModule', '_trailModule'];
            class ParticleModuleBase {
              constructor() {
                this.target = null;
                this.needUpdate = false;
                this.needAnimate = true;
                this.name = void 0;
              }
              bindTarget(target) {
                this.target = target;
              }
              update(space, trans) {}
            }

            const Space = Enum({
              World: 0,
              Local: 1,
              Custom: 2
            });
            const CullingMode = Enum({
              Pause: 0,
              PauseAndCatchup: 1,
              AlwaysSimulate: 2
            });
            const AlignmentSpace = Enum({
              World: 0,
              Local: 1,
              View: 2
            });
            const RenderMode = Enum({
              Billboard: 0,
              StrecthedBillboard: 1,
              HorizontalBillboard: 2,
              VerticalBillboard: 3,
              Mesh: 4
            });
            const ShapeType = Enum({
              Box: 0,
              Circle: 1,
              Cone: 2,
              Sphere: 3,
              Hemisphere: 4
            });
            const EmitLocation = Enum({
              Base: 0,
              Edge: 1,
              Shell: 2,
              Volume: 3
            });
            const ArcMode = Enum({
              Random: 0,
              Loop: 1,
              PingPong: 2
            });
            const TrailMode = Enum({
              Particles: 0
            });
            const TextureMode = Enum({
              Stretch: 0
            });
            const ModuleRandSeed = {
              LIMIT: 23541,
              SIZE: 39825,
              TEXTURE: 90794,
              COLOR: 91041,
              FORCE: 212165,
              ROTATION: 125292,
              VELOCITY_X: 197866,
              VELOCITY_Y: 156497,
              VELOCITY_Z: 984136
            };

            const particleEmitZAxis = new Vec3(0, 0, -1);
            function calculateTransform(systemSpace, moduleSpace, worldTransform, outQuat) {
              if (moduleSpace !== systemSpace) {
                if (systemSpace === Space.World) {
                  Mat4.getRotation(outQuat, worldTransform);
                } else {
                  Mat4.invert(worldTransform, worldTransform);
                  Mat4.getRotation(outQuat, worldTransform);
                }
                return true;
              } else {
                Quat.set(outQuat, 0, 0, 0, 1);
                return false;
              }
            }
            function fixedAngleUnitVector2(out, theta) {
              Vec2.set(out, Math.cos(theta), Math.sin(theta));
            }
            function randomUnitVector(out) {
              const z = randomRange(-1, 1);
              const a = randomRange(0, 2 * Math.PI);
              const r = Math.sqrt(1 - z * z);
              const x = r * Math.cos(a);
              const y = r * Math.sin(a);
              Vec3.set(out, x, y, z);
            }
            function randomPointBetweenSphere(out, minRadius, maxRadius) {
              randomUnitVector(out);
              Vec3.multiplyScalar(out, out, minRadius + (maxRadius - minRadius) * random());
            }
            function randomPointBetweenCircleAtFixedAngle(out, minRadius, maxRadius, theta) {
              fixedAngleUnitVector2(out, theta);
              out.z = 0;
              Vec3.multiplyScalar(out, out, minRadius + (maxRadius - minRadius) * random());
            }
            function randomPointInCube(out, extents) {
              Vec3.set(out, randomRange(-extents.x, extents.x), randomRange(-extents.y, extents.y), randomRange(-extents.z, extents.z));
            }
            function randomSortArray(arr) {
              for (let i = 0; i < arr.length; i++) {
                const transpose = i + randomRangeInt(0, arr.length - i);
                const val = arr[transpose];
                arr[transpose] = arr[i];
                arr[i] = val;
              }
            }
            function randomSign() {
              let sgn = randomRange(-1, 1);
              if (sgn === 0) {
                sgn++;
              }
              return sign(sgn);
            }
            function isCurveTwoValues(curve) {
              const Mode = CurveRange.Mode;
              switch (curve.mode) {
                case Mode.TwoCurves:
                case Mode.TwoConstants:
                  return true;
                default:
                  return false;
              }
            }
            function isGradientTwoValues(color) {
              const Mode = GradientRange.Mode;
              switch (color.mode) {
                case Mode.TwoGradients:
                case Mode.TwoColors:
                  return true;
                default:
                  return false;
              }
            }

            var _dec$c, _dec2$c, _class$b, _class2$c, _initializer$c, _initializer2$c;
            const COLOR_OVERTIME_RAND_OFFSET = ModuleRandSeed.COLOR;
            let ColorOvertimeModule = (_dec$c = ccclass$1('cc.ColorOvertimeModule'), _dec2$c = type$1(GradientRange), _dec$c(_class$b = (_class2$c = class ColorOvertimeModule extends ParticleModuleBase {
              constructor(...args) {
                super(...args);
                this._enable = _initializer$c && _initializer$c();
                this.color = _initializer2$c && _initializer2$c();
                this.name = PARTICLE_MODULE_NAME.COLOR;
              }
              get enable() {
                return this._enable;
              }
              set enable(val) {
                if (this._enable === val) return;
                this._enable = val;
                if (!this.target) return;
                this.target.enableModule(this.name, val, this);
              }
              animate(particle) {
                particle.color.set(particle.startColor);
                const rand = isGradientTwoValues(this.color) ? pseudoRandom(particle.randomSeed + COLOR_OVERTIME_RAND_OFFSET) : 0;
                particle.color.multiply(this.color.evaluate(1.0 - particle.remainingLifetime / particle.startLifetime, rand));
              }
            }, (_initializer$c = applyDecoratedInitializer(_class2$c.prototype, "_enable", [serializable$1], function () {
              return false;
            }), _initializer2$c = applyDecoratedInitializer(_class2$c.prototype, "color", [_dec2$c, serializable$1], function () {
              return new GradientRange();
            })), _class2$c)) || _class$b);

            var _dec$b, _dec2$b, _dec3$a, _dec4$a, _dec5$9, _class$a, _class2$b, _initializer$b, _initializer2$b, _initializer3$b, _initializer4$b, _initializer5$a;
            const FORCE_OVERTIME_RAND_OFFSET = ModuleRandSeed.FORCE;
            const _temp_v3$2 = new Vec3();
            let ForceOvertimeModule = (_dec$b = ccclass$1('cc.ForceOvertimeModule'), _dec2$b = type$1(CurveRange), _dec3$a = type$1(CurveRange), _dec4$a = type$1(CurveRange), _dec5$9 = type$1(Space), _dec$b(_class$a = (_class2$b = class ForceOvertimeModule extends ParticleModuleBase {
              get enable() {
                return this._enable;
              }
              set enable(val) {
                if (this._enable === val) return;
                this._enable = val;
                if (!this.target) return;
                this.target.enableModule(this.name, val, this);
              }
              constructor() {
                super();
                this._enable = _initializer$b && _initializer$b();
                this.x = _initializer2$b && _initializer2$b();
                this.y = _initializer3$b && _initializer3$b();
                this.z = _initializer4$b && _initializer4$b();
                this.space = _initializer5$a && _initializer5$a();
                this.randomized = false;
                this.rotation = void 0;
                this.needTransform = void 0;
                this.name = PARTICLE_MODULE_NAME.FORCE;
                this.rotation = new Quat();
                this.needTransform = false;
                this.needUpdate = true;
              }
              update(space, worldTransform) {
                this.needTransform = calculateTransform(space, this.space, worldTransform, this.rotation);
              }
              animate(p, dt) {
                const normalizedTime = 1 - p.remainingLifetime / p.startLifetime;
                const randX = isCurveTwoValues(this.x) ? pseudoRandom(p.randomSeed + FORCE_OVERTIME_RAND_OFFSET) : 0;
                const randY = isCurveTwoValues(this.y) ? pseudoRandom(p.randomSeed + FORCE_OVERTIME_RAND_OFFSET) : 0;
                const randZ = isCurveTwoValues(this.z) ? pseudoRandom(p.randomSeed + FORCE_OVERTIME_RAND_OFFSET) : 0;
                const force = Vec3.set(_temp_v3$2, this.x.evaluate(normalizedTime, randX), this.y.evaluate(normalizedTime, randY), this.z.evaluate(normalizedTime, randZ));
                if (this.needTransform) {
                  Vec3.transformQuat(force, force, this.rotation);
                }
                Vec3.scaleAndAdd(p.velocity, p.velocity, force, dt);
                Vec3.copy(p.ultimateVelocity, p.velocity);
              }
            }, (_initializer$b = applyDecoratedInitializer(_class2$b.prototype, "_enable", [serializable$1], function () {
              return false;
            }), _initializer2$b = applyDecoratedInitializer(_class2$b.prototype, "x", [_dec2$b, serializable$1], function () {
              return new CurveRange();
            }), _initializer3$b = applyDecoratedInitializer(_class2$b.prototype, "y", [_dec3$a, serializable$1], function () {
              return new CurveRange();
            }), _initializer4$b = applyDecoratedInitializer(_class2$b.prototype, "z", [_dec4$a, serializable$1], function () {
              return new CurveRange();
            }), _initializer5$a = applyDecoratedInitializer(_class2$b.prototype, "space", [_dec5$9, serializable$1], function () {
              return Space.Local;
            })), _class2$b)) || _class$a);

            var _dec$a, _dec2$a, _dec3$9, _dec4$9, _dec5$8, _dec6$7, _class$9, _class2$a, _initializer$a, _initializer2$a, _initializer3$a, _initializer4$a, _initializer5$9, _initializer6$8, _initializer7$6, _initializer8$6;
            const LIMIT_VELOCITY_RAND_OFFSET = ModuleRandSeed.LIMIT;
            const _temp_v3$1 = new Vec3();
            const _temp_v3_1 = new Vec3();
            let LimitVelocityOvertimeModule = (_dec$a = ccclass$1('cc.LimitVelocityOvertimeModule'), _dec2$a = type$1(CurveRange), _dec3$9 = type$1(CurveRange), _dec4$9 = type$1(CurveRange), _dec5$8 = type$1(CurveRange), _dec6$7 = type$1(Space), _dec$a(_class$9 = (_class2$a = class LimitVelocityOvertimeModule extends ParticleModuleBase {
              get enable() {
                return this._enable;
              }
              set enable(val) {
                if (this._enable === val) return;
                this._enable = val;
                if (!this.target) return;
                this.target.enableModule(this.name, val, this);
              }
              constructor() {
                super();
                this._enable = _initializer$a && _initializer$a();
                this.limitX = _initializer2$a && _initializer2$a();
                this.limitY = _initializer3$a && _initializer3$a();
                this.limitZ = _initializer4$a && _initializer4$a();
                this.limit = _initializer5$9 && _initializer5$9();
                this.dampen = _initializer6$8 && _initializer6$8();
                this.separateAxes = _initializer7$6 && _initializer7$6();
                this.space = _initializer8$6 && _initializer8$6();
                this.drag = null;
                this.multiplyDragByParticleSize = false;
                this.multiplyDragByParticleVelocity = false;
                this.name = PARTICLE_MODULE_NAME.LIMIT;
                this.rotation = void 0;
                this.needTransform = void 0;
                this.rotation = new Quat();
                this.needTransform = false;
                this.needUpdate = true;
              }
              update(space, worldTransform) {
                this.needTransform = calculateTransform(space, this.space, worldTransform, this.rotation);
              }
              animate(p, dt) {
                const normalizedTime = 1 - p.remainingLifetime / p.startLifetime;
                const dampedVel = _temp_v3$1;
                if (this.separateAxes) {
                  const randX = isCurveTwoValues(this.limitX) ? pseudoRandom(p.randomSeed + LIMIT_VELOCITY_RAND_OFFSET) : 0;
                  const randY = isCurveTwoValues(this.limitY) ? pseudoRandom(p.randomSeed + LIMIT_VELOCITY_RAND_OFFSET) : 0;
                  const randZ = isCurveTwoValues(this.limitZ) ? pseudoRandom(p.randomSeed + LIMIT_VELOCITY_RAND_OFFSET) : 0;
                  Vec3.set(_temp_v3_1, this.limitX.evaluate(normalizedTime, randX), this.limitY.evaluate(normalizedTime, randY), this.limitZ.evaluate(normalizedTime, randZ));
                  if (this.needTransform) {
                    Vec3.transformQuat(_temp_v3_1, _temp_v3_1, this.rotation);
                  }
                  Vec3.set(dampedVel, dampenBeyondLimit(p.ultimateVelocity.x, _temp_v3_1.x, this.dampen), dampenBeyondLimit(p.ultimateVelocity.y, _temp_v3_1.y, this.dampen), dampenBeyondLimit(p.ultimateVelocity.z, _temp_v3_1.z, this.dampen));
                } else {
                  Vec3.normalize(dampedVel, p.ultimateVelocity);
                  const rand = isCurveTwoValues(this.limit) ? pseudoRandom(p.randomSeed + LIMIT_VELOCITY_RAND_OFFSET) : 0;
                  Vec3.multiplyScalar(dampedVel, dampedVel, dampenBeyondLimit(p.ultimateVelocity.length(), this.limit.evaluate(normalizedTime, rand), this.dampen));
                }
                Vec3.copy(p.ultimateVelocity, dampedVel);
                Vec3.copy(p.velocity, p.ultimateVelocity);
              }
            }, (_initializer$a = applyDecoratedInitializer(_class2$a.prototype, "_enable", [serializable$1], function () {
              return false;
            }), _initializer2$a = applyDecoratedInitializer(_class2$a.prototype, "limitX", [_dec2$a, serializable$1], function () {
              return new CurveRange();
            }), _initializer3$a = applyDecoratedInitializer(_class2$a.prototype, "limitY", [_dec3$9, serializable$1], function () {
              return new CurveRange();
            }), _initializer4$a = applyDecoratedInitializer(_class2$a.prototype, "limitZ", [_dec4$9, serializable$1], function () {
              return new CurveRange();
            }), _initializer5$9 = applyDecoratedInitializer(_class2$a.prototype, "limit", [_dec5$8, serializable$1], function () {
              return new CurveRange();
            }), _initializer6$8 = applyDecoratedInitializer(_class2$a.prototype, "dampen", [serializable$1], function () {
              return 3;
            }), _initializer7$6 = applyDecoratedInitializer(_class2$a.prototype, "separateAxes", [serializable$1], function () {
              return false;
            }), _initializer8$6 = applyDecoratedInitializer(_class2$a.prototype, "space", [_dec6$7, serializable$1], function () {
              return Space.Local;
            })), _class2$a)) || _class$9);
            function dampenBeyondLimit(vel, limit, dampen) {
              const sgn = Math.sign(vel);
              let abs = Math.abs(vel);
              if (abs > limit) {
                const absToGive = abs - abs * dampen;
                if (absToGive > limit) {
                  abs = absToGive;
                } else {
                  abs = limit;
                }
              }
              return abs * sgn;
            }

            var _dec$9, _dec2$9, _dec3$8, _dec4$8, _class$8, _class2$9, _initializer$9, _initializer2$9, _initializer3$9, _initializer4$9, _initializer5$8;
            const ROTATION_OVERTIME_RAND_OFFSET = ModuleRandSeed.ROTATION;
            let RotationOvertimeModule = (_dec$9 = ccclass$1('cc.RotationOvertimeModule'), _dec2$9 = type$1(CurveRange), _dec3$8 = type$1(CurveRange), _dec4$8 = type$1(CurveRange), _dec$9(_class$8 = (_class2$9 = class RotationOvertimeModule extends ParticleModuleBase {
              constructor(...args) {
                super(...args);
                this._enable = _initializer$9 && _initializer$9();
                this._separateAxes = _initializer2$9 && _initializer2$9();
                this.x = _initializer3$9 && _initializer3$9();
                this.y = _initializer4$9 && _initializer4$9();
                this.z = _initializer5$8 && _initializer5$8();
                this.name = PARTICLE_MODULE_NAME.ROTATION;
                this._startMat = new Mat4();
                this._matRot = new Mat4();
                this._quatRot = new Quat();
                this._otherEuler = new Vec3();
              }
              get enable() {
                return this._enable;
              }
              set enable(val) {
                if (this._enable === val) return;
                this._enable = val;
                if (!this.target) return;
                this.target.enableModule(this.name, val, this);
              }
              get separateAxes() {
                return this._separateAxes;
              }
              set separateAxes(val) {
                this._separateAxes = val;
              }
              _processRotation(p, r2d) {
                const renderMode = p.particleSystem.processor.getInfo().renderMode;
                if (renderMode !== RenderMode.Mesh) {
                  if (renderMode === RenderMode.StrecthedBillboard) {
                    this._quatRot.set(0, 0, 0, 1);
                  }
                }
                Quat.normalize(this._quatRot, this._quatRot);
                if (this._quatRot.w < 0.0) {
                  this._quatRot.x += Particle.INDENTIFY_NEG_QUAT;
                }
              }
              animate(p, dt) {
                const normalizedTime = 1 - p.remainingLifetime / p.startLifetime;
                const randZ = isCurveTwoValues(this.z) ? pseudoRandom(p.randomSeed + ROTATION_OVERTIME_RAND_OFFSET) : 0;
                const renderMode = p.particleSystem.processor.getInfo().renderMode;
                if (!this._separateAxes || renderMode === RenderMode.VerticalBillboard || renderMode === RenderMode.HorizontalBillboard) {
                  Quat.fromEuler(p.deltaQuat, 0, 0, this.z.evaluate(normalizedTime, randZ) * dt * Particle.R2D);
                } else {
                  const randX = isCurveTwoValues(this.x) ? pseudoRandom(p.randomSeed + ROTATION_OVERTIME_RAND_OFFSET) : 0;
                  const randY = isCurveTwoValues(this.y) ? pseudoRandom(p.randomSeed + ROTATION_OVERTIME_RAND_OFFSET) : 0;
                  Quat.fromEuler(p.deltaQuat, this.x.evaluate(normalizedTime, randX) * dt * Particle.R2D, this.y.evaluate(normalizedTime, randY) * dt * Particle.R2D, this.z.evaluate(normalizedTime, randZ) * dt * Particle.R2D);
                }
                p.deltaMat = Mat4.fromQuat(p.deltaMat, p.deltaQuat);
                p.localMat = p.localMat.multiply(p.deltaMat);
                if (!p.startRotated) {
                  if (renderMode !== RenderMode.Mesh) {
                    if (renderMode === RenderMode.StrecthedBillboard) {
                      p.startEuler.set(0, 0, 0);
                    } else if (renderMode !== RenderMode.Billboard) {
                      p.startEuler.set(0, 0, p.startEuler.z);
                    }
                  }
                  Quat.fromEuler(p.startRotation, p.startEuler.x * Particle.R2D, p.startEuler.y * Particle.R2D, p.startEuler.z * Particle.R2D);
                  p.startRotated = true;
                }
                this._startMat = Mat4.fromQuat(this._startMat, p.startRotation);
                this._matRot = this._startMat.multiply(p.localMat);
                Mat4.getRotation(this._quatRot, this._matRot);
                this._processRotation(p, Particle.R2D);
                p.rotation.set(this._quatRot.x, this._quatRot.y, this._quatRot.z);
              }
            }, (_initializer$9 = applyDecoratedInitializer(_class2$9.prototype, "_enable", [serializable$1], function () {
              return false;
            }), _initializer2$9 = applyDecoratedInitializer(_class2$9.prototype, "_separateAxes", [serializable$1], function () {
              return false;
            }), _initializer3$9 = applyDecoratedInitializer(_class2$9.prototype, "x", [_dec2$9, serializable$1], function () {
              return new CurveRange();
            }), _initializer4$9 = applyDecoratedInitializer(_class2$9.prototype, "y", [_dec3$8, serializable$1], function () {
              return new CurveRange();
            }), _initializer5$8 = applyDecoratedInitializer(_class2$9.prototype, "z", [_dec4$8, serializable$1], function () {
              return new CurveRange();
            })), _class2$9)) || _class$8);

            var _dec$8, _dec2$8, _dec3$7, _dec4$7, _dec5$7, _class$7, _class2$8, _initializer$8, _initializer2$8, _initializer3$8, _initializer4$8, _initializer5$7, _initializer6$7;
            const SIZE_OVERTIME_RAND_OFFSET = ModuleRandSeed.SIZE;
            let SizeOvertimeModule = (_dec$8 = ccclass$1('cc.SizeOvertimeModule'), _dec2$8 = type$1(CurveRange), _dec3$7 = type$1(CurveRange), _dec4$7 = type$1(CurveRange), _dec5$7 = type$1(CurveRange), _dec$8(_class$7 = (_class2$8 = class SizeOvertimeModule extends ParticleModuleBase {
              constructor(...args) {
                super(...args);
                this._enable = _initializer$8 && _initializer$8();
                this.separateAxes = _initializer2$8 && _initializer2$8();
                this.size = _initializer3$8 && _initializer3$8();
                this.x = _initializer4$8 && _initializer4$8();
                this.y = _initializer5$7 && _initializer5$7();
                this.z = _initializer6$7 && _initializer6$7();
                this.name = PARTICLE_MODULE_NAME.SIZE;
              }
              get enable() {
                return this._enable;
              }
              set enable(val) {
                if (this._enable === val) return;
                this._enable = val;
                if (!this.target) return;
                this.target.enableModule(this.name, val, this);
              }
              animate(particle, dt) {
                if (!this.separateAxes) {
                  const rand = isCurveTwoValues(this.size) ? pseudoRandom(particle.randomSeed + SIZE_OVERTIME_RAND_OFFSET) : 0;
                  Vec3.multiplyScalar(particle.size, particle.startSize, this.size.evaluate(1 - particle.remainingLifetime / particle.startLifetime, rand));
                } else {
                  const currLifetime = 1 - particle.remainingLifetime / particle.startLifetime;
                  const randX = isCurveTwoValues(this.x) ? pseudoRandom(particle.randomSeed + SIZE_OVERTIME_RAND_OFFSET) : 0;
                  const randY = isCurveTwoValues(this.y) ? pseudoRandom(particle.randomSeed + SIZE_OVERTIME_RAND_OFFSET) : 0;
                  const randZ = isCurveTwoValues(this.z) ? pseudoRandom(particle.randomSeed + SIZE_OVERTIME_RAND_OFFSET) : 0;
                  particle.size.x = particle.startSize.x * this.x.evaluate(currLifetime, randX);
                  particle.size.y = particle.startSize.y * this.y.evaluate(currLifetime, randY);
                  particle.size.z = particle.startSize.z * this.z.evaluate(currLifetime, randZ);
                }
              }
            }, (_initializer$8 = applyDecoratedInitializer(_class2$8.prototype, "_enable", [serializable$1], function () {
              return false;
            }), _initializer2$8 = applyDecoratedInitializer(_class2$8.prototype, "separateAxes", [serializable$1], function () {
              return false;
            }), _initializer3$8 = applyDecoratedInitializer(_class2$8.prototype, "size", [_dec2$8, serializable$1], function () {
              return new CurveRange();
            }), _initializer4$8 = applyDecoratedInitializer(_class2$8.prototype, "x", [_dec3$7, serializable$1], function () {
              return new CurveRange();
            }), _initializer5$7 = applyDecoratedInitializer(_class2$8.prototype, "y", [_dec4$7, serializable$1], function () {
              return new CurveRange();
            }), _initializer6$7 = applyDecoratedInitializer(_class2$8.prototype, "z", [_dec5$7, serializable$1], function () {
              return new CurveRange();
            })), _class2$8)) || _class$7);

            var _dec$7, _dec2$7, _dec3$6, _dec4$6, _dec5$6, _dec6$6, _dec7$5, _dec8$4, _class$6, _class2$7, _initializer$7, _initializer2$7, _initializer3$7, _initializer4$7, _initializer5$6, _initializer6$6, _initializer7$5, _initializer8$5, _initializer9$5, _initializer10$4, _initializer11$4, _initializer12$4, _initializer13$4;
            const TEXTURE_ANIMATION_RAND_OFFSET = ModuleRandSeed.TEXTURE;
            const Mode = Enum({
              Grid: 0
            });
            const Animation = Enum({
              WholeSheet: 0,
              SingleRow: 1
            });
            let TextureAnimationModule = (_dec$7 = ccclass$1('cc.TextureAnimationModule'), _dec2$7 = formerlySerializedAs('numTilesX'), _dec3$6 = formerlySerializedAs('numTilesY'), _dec4$6 = type$1(Mode), _dec5$6 = type$1(Mode), _dec6$6 = type$1(Animation), _dec7$5 = type$1(CurveRange), _dec8$4 = type$1(CurveRange), _dec$7(_class$6 = (_class2$7 = class TextureAnimationModule extends ParticleModuleBase {
              constructor(...args) {
                super(...args);
                this._enable = _initializer$7 && _initializer$7();
                this._numTilesX = _initializer2$7 && _initializer2$7();
                this._numTilesY = _initializer3$7 && _initializer3$7();
                this._mode = _initializer4$7 && _initializer4$7();
                this.animation = _initializer5$6 && _initializer5$6();
                this.frameOverTime = _initializer6$6 && _initializer6$6();
                this.startFrame = _initializer7$5 && _initializer7$5();
                this.cycleCount = _initializer8$5 && _initializer8$5();
                this._flipU = _initializer9$5 && _initializer9$5();
                this._flipV = _initializer10$4 && _initializer10$4();
                this._uvChannelMask = _initializer11$4 && _initializer11$4();
                this.randomRow = _initializer12$4 && _initializer12$4();
                this.rowIndex = _initializer13$4 && _initializer13$4();
                this.name = PARTICLE_MODULE_NAME.TEXTURE;
              }
              get enable() {
                return this._enable;
              }
              set enable(val) {
                if (this._enable === val) return;
                this._enable = val;
                if (!this.target) return;
                this.target.updateMaterialParams();
                this.target.enableModule(this.name, val, this);
              }
              get mode() {
                return this._mode;
              }
              set mode(val) {
                if (val !== Mode.Grid) {
                  error('particle texture animation\'s sprites is not supported!');
                }
              }
              get numTilesX() {
                return this._numTilesX;
              }
              set numTilesX(val) {
                if (this._numTilesX !== val) {
                  this._numTilesX = val;
                  this.target.updateMaterialParams();
                }
              }
              get numTilesY() {
                return this._numTilesY;
              }
              set numTilesY(val) {
                if (this._numTilesY !== val) {
                  this._numTilesY = val;
                  this.target.updateMaterialParams();
                }
              }
              get flipU() {
                return this._flipU;
              }
              set flipU(val) {
                error('particle texture animation\'s flipU is not supported!');
              }
              get flipV() {
                return this._flipV;
              }
              set flipV(val) {
                error('particle texture animation\'s flipV is not supported!');
              }
              get uvChannelMask() {
                return this._uvChannelMask;
              }
              set uvChannelMask(val) {
                error('particle texture animation\'s uvChannelMask is not supported!');
              }
              init(p) {
                p.startRow = Math.floor(random() * this.numTilesY);
              }
              animate(p, dt) {
                const normalizedTime = 1 - p.remainingLifetime / p.startLifetime;
                const randStart = isCurveTwoValues(this.startFrame) ? pseudoRandom(p.randomSeed + TEXTURE_ANIMATION_RAND_OFFSET) : 0;
                const randFrame = isCurveTwoValues(this.frameOverTime) ? pseudoRandom(p.randomSeed + TEXTURE_ANIMATION_RAND_OFFSET) : 0;
                const startFrame = this.startFrame.evaluate(normalizedTime, randStart) / (this.numTilesX * this.numTilesY);
                if (this.animation === Animation.WholeSheet) {
                  p.frameIndex = repeat(this.cycleCount * (this.frameOverTime.evaluate(normalizedTime, randFrame) + startFrame), 1);
                } else if (this.animation === Animation.SingleRow) {
                  const rowLength = 1 / this.numTilesY;
                  if (this.randomRow) {
                    const f = repeat(this.cycleCount * (this.frameOverTime.evaluate(normalizedTime, randFrame) + startFrame), 1);
                    const from = p.startRow * rowLength;
                    const to = from + rowLength;
                    p.frameIndex = lerp(from, to, f);
                  } else {
                    const from = this.rowIndex * rowLength;
                    const to = from + rowLength;
                    p.frameIndex = lerp(from, to, repeat(this.cycleCount * (this.frameOverTime.evaluate(normalizedTime, randFrame) + startFrame), 1));
                  }
                }
              }
            }, (_initializer$7 = applyDecoratedInitializer(_class2$7.prototype, "_enable", [serializable$1], function () {
              return false;
            }), _initializer2$7 = applyDecoratedInitializer(_class2$7.prototype, "_numTilesX", [_dec2$7], function () {
              return 0;
            }), _initializer3$7 = applyDecoratedInitializer(_class2$7.prototype, "_numTilesY", [_dec3$6], function () {
              return 0;
            }), _initializer4$7 = applyDecoratedInitializer(_class2$7.prototype, "_mode", [_dec4$6], function () {
              return Mode.Grid;
            }), _applyDecoratedDescriptor(_class2$7.prototype, "mode", [_dec5$6], Object.getOwnPropertyDescriptor(_class2$7.prototype, "mode"), _class2$7.prototype), _initializer5$6 = applyDecoratedInitializer(_class2$7.prototype, "animation", [_dec6$6, serializable$1], function () {
              return Animation.WholeSheet;
            }), _initializer6$6 = applyDecoratedInitializer(_class2$7.prototype, "frameOverTime", [_dec7$5, serializable$1], function () {
              return new CurveRange();
            }), _initializer7$5 = applyDecoratedInitializer(_class2$7.prototype, "startFrame", [_dec8$4, serializable$1], function () {
              return new CurveRange();
            }), _initializer8$5 = applyDecoratedInitializer(_class2$7.prototype, "cycleCount", [serializable$1], function () {
              return 0;
            }), _initializer9$5 = applyDecoratedInitializer(_class2$7.prototype, "_flipU", [serializable$1], function () {
              return 0;
            }), _initializer10$4 = applyDecoratedInitializer(_class2$7.prototype, "_flipV", [serializable$1], function () {
              return 0;
            }), _initializer11$4 = applyDecoratedInitializer(_class2$7.prototype, "_uvChannelMask", [serializable$1], function () {
              return -1;
            }), _initializer12$4 = applyDecoratedInitializer(_class2$7.prototype, "randomRow", [serializable$1], function () {
              return false;
            }), _initializer13$4 = applyDecoratedInitializer(_class2$7.prototype, "rowIndex", [serializable$1], function () {
              return 0;
            })), _class2$7)) || _class$6);

            var _dec$6, _dec2$6, _dec3$5, _dec4$5, _dec5$5, _dec6$5, _class$5, _class2$6, _initializer$6, _initializer2$6, _initializer3$6, _initializer4$6, _initializer5$5, _initializer6$5;
            const VELOCITY_X_OVERTIME_RAND_OFFSET = ModuleRandSeed.VELOCITY_X;
            const VELOCITY_Y_OVERTIME_RAND_OFFSET = ModuleRandSeed.VELOCITY_Y;
            const VELOCITY_Z_OVERTIME_RAND_OFFSET = ModuleRandSeed.VELOCITY_Z;
            const _temp_v3 = new Vec3();
            let VelocityOvertimeModule = (_dec$6 = ccclass$1('cc.VelocityOvertimeModule'), _dec2$6 = type$1(CurveRange), _dec3$5 = type$1(CurveRange), _dec4$5 = type$1(CurveRange), _dec5$5 = type$1(CurveRange), _dec6$5 = type$1(Space), _dec$6(_class$5 = (_class2$6 = class VelocityOvertimeModule extends ParticleModuleBase {
              get enable() {
                return this._enable;
              }
              set enable(val) {
                if (this._enable === val) return;
                this._enable = val;
                if (!this.target) return;
                this.target.enableModule(this.name, val, this);
              }
              constructor() {
                super();
                this._enable = _initializer$6 && _initializer$6();
                this.x = _initializer2$6 && _initializer2$6();
                this.y = _initializer3$6 && _initializer3$6();
                this.z = _initializer4$6 && _initializer4$6();
                this.speedModifier = _initializer5$5 && _initializer5$5();
                this.space = _initializer6$5 && _initializer6$5();
                this.rotation = void 0;
                this.needTransform = void 0;
                this.name = PARTICLE_MODULE_NAME.VELOCITY;
                this.rotation = new Quat();
                this.speedModifier.constant = 1;
                this.needTransform = false;
                this.needUpdate = true;
              }
              update(space, worldTransform) {
                this.needTransform = calculateTransform(space, this.space, worldTransform, this.rotation);
              }
              animate(p, dt) {
                const normalizedTime = 1 - p.remainingLifetime / p.startLifetime;
                const randX = isCurveTwoValues(this.x) ? pseudoRandom(p.randomSeed ^ VELOCITY_X_OVERTIME_RAND_OFFSET) : 0;
                const randY = isCurveTwoValues(this.y) ? pseudoRandom(p.randomSeed ^ VELOCITY_Y_OVERTIME_RAND_OFFSET) : 0;
                const randZ = isCurveTwoValues(this.z) ? pseudoRandom(p.randomSeed ^ VELOCITY_Z_OVERTIME_RAND_OFFSET) : 0;
                const randSpeed = isCurveTwoValues(this.speedModifier) ? pseudoRandom(p.randomSeed + VELOCITY_X_OVERTIME_RAND_OFFSET) : 0;
                const vel = Vec3.set(_temp_v3, this.x.evaluate(normalizedTime, randX), this.y.evaluate(normalizedTime, randY), this.z.evaluate(normalizedTime, randZ));
                if (this.needTransform) {
                  Vec3.transformQuat(vel, vel, this.rotation);
                }
                Vec3.add(p.animatedVelocity, p.animatedVelocity, vel);
                Vec3.add(p.ultimateVelocity, p.velocity, p.animatedVelocity);
                Vec3.multiplyScalar(p.ultimateVelocity, p.ultimateVelocity, this.speedModifier.evaluate(1 - p.remainingLifetime / p.startLifetime, randSpeed));
              }
            }, (_initializer$6 = applyDecoratedInitializer(_class2$6.prototype, "_enable", [serializable$1], function () {
              return false;
            }), _initializer2$6 = applyDecoratedInitializer(_class2$6.prototype, "x", [_dec2$6, serializable$1], function () {
              return new CurveRange();
            }), _initializer3$6 = applyDecoratedInitializer(_class2$6.prototype, "y", [_dec3$5, serializable$1], function () {
              return new CurveRange();
            }), _initializer4$6 = applyDecoratedInitializer(_class2$6.prototype, "z", [_dec4$5, serializable$1], function () {
              return new CurveRange();
            }), _initializer5$5 = applyDecoratedInitializer(_class2$6.prototype, "speedModifier", [_dec5$5, serializable$1], function () {
              return new CurveRange();
            }), _initializer6$5 = applyDecoratedInitializer(_class2$6.prototype, "space", [_dec6$5, serializable$1], function () {
              return Space.Local;
            })), _class2$6)) || _class$5);

            var _dec$5, _dec2$5, _class$4, _class2$5, _initializer$5, _initializer2$5, _initializer3$5, _initializer4$5;
            let Burst = exports('Burst', (_dec$5 = ccclass$1('cc.Burst'), _dec2$5 = type$1(CurveRange), _dec$5(_class$4 = (_class2$5 = class Burst {
              get time() {
                return this._time;
              }
              set time(val) {
                this._time = val;
                this._curTime = val;
              }
              get repeatCount() {
                return this._repeatCount;
              }
              set repeatCount(val) {
                this._repeatCount = val;
                this._remainingCount = val;
              }
              constructor() {
                this._time = _initializer$5 && _initializer$5();
                this._repeatCount = _initializer2$5 && _initializer2$5();
                this.repeatInterval = _initializer3$5 && _initializer3$5();
                this.count = _initializer4$5 && _initializer4$5();
                this._remainingCount = void 0;
                this._curTime = void 0;
                this._remainingCount = 0;
                this._curTime = 0.0;
              }
              update(psys, dt) {
                if (this._remainingCount === 0) {
                  this._remainingCount = this._repeatCount;
                  this._curTime = this._time;
                }
                if (this._remainingCount > 0) {
                  let preFrameTime = repeat(psys._time - psys.startDelay.evaluate(0, 1), psys.duration) - dt;
                  preFrameTime = preFrameTime > 0.0 ? preFrameTime : 0.0;
                  const curFrameTime = repeat(psys.time - psys.startDelay.evaluate(0, 1), psys.duration);
                  if (this._curTime >= preFrameTime && this._curTime < curFrameTime) {
                    psys.emit(this.count.evaluate(this._curTime / psys.duration, 1), dt - (curFrameTime - this._curTime));
                    this._curTime += this.repeatInterval;
                    --this._remainingCount;
                  }
                }
              }
              reset() {
                this._remainingCount = 0;
                this._curTime = 0.0;
              }
              getMaxCount(psys) {
                return this.count.getMax() * Math.min(Math.ceil(psys.duration / this.repeatInterval), this.repeatCount);
              }
            }, (_initializer$5 = applyDecoratedInitializer(_class2$5.prototype, "_time", [serializable$1], function () {
              return 0;
            }), _initializer2$5 = applyDecoratedInitializer(_class2$5.prototype, "_repeatCount", [serializable$1], function () {
              return 1;
            }), _initializer3$5 = applyDecoratedInitializer(_class2$5.prototype, "repeatInterval", [serializable$1], function () {
              return 1;
            }), _initializer4$5 = applyDecoratedInitializer(_class2$5.prototype, "count", [_dec2$5, serializable$1], function () {
              return new CurveRange();
            })), _class2$5)) || _class$4));

            var _dec$4, _dec2$4, _dec3$4, _dec4$4, _dec5$4, _dec6$4, _dec7$4, _class$3, _class2$4, _initializer$4, _initializer2$4, _initializer3$4, _initializer4$4, _initializer5$4, _initializer6$4, _initializer7$4, _initializer8$4, _initializer9$4, _initializer10$3, _initializer11$3, _initializer12$3, _initializer13$3, _initializer14$2, _initializer15$1, _initializer16$1, _initializer17$1, _initializer18$1, _initializer19$1;
            const _intermediVec = new Vec3(0, 0, 0);
            const _intermediArr = [];
            const _unitBoxExtent = new Vec3(0.5, 0.5, 0.5);
            let ShapeModule = (_dec$4 = ccclass$1('cc.ShapeModule'), _dec2$4 = type$1(ShapeType), _dec3$4 = formerlySerializedAs('shapeType'), _dec4$4 = type$1(ShapeType), _dec5$4 = type$1(EmitLocation), _dec6$4 = type$1(ArcMode), _dec7$4 = type$1(CurveRange), _dec$4(_class$3 = (_class2$4 = class ShapeModule {
              get position() {
                return this._position;
              }
              set position(val) {
                this._position = val;
                this.constructMat();
              }
              get rotation() {
                return this._rotation;
              }
              set rotation(val) {
                this._rotation = val;
                this.constructMat();
              }
              get scale() {
                return this._scale;
              }
              set scale(val) {
                this._scale = val;
                this.constructMat();
              }
              get arc() {
                return toDegree(this._arc);
              }
              set arc(val) {
                this._arc = toRadian(val);
              }
              get angle() {
                return Math.round(toDegree(this._angle) * 100) / 100;
              }
              set angle(val) {
                this._angle = toRadian(val);
              }
              get enable() {
                return this._enable;
              }
              set enable(val) {
                this._enable = val;
              }
              get shapeType() {
                return this._shapeType;
              }
              set shapeType(val) {
                this._shapeType = val;
                switch (this._shapeType) {
                  case ShapeType.Box:
                    if (this.emitFrom === EmitLocation.Base) {
                      this.emitFrom = EmitLocation.Volume;
                    }
                    break;
                  case ShapeType.Cone:
                    if (this.emitFrom === EmitLocation.Edge) {
                      this.emitFrom = EmitLocation.Base;
                    }
                    break;
                  case ShapeType.Sphere:
                  case ShapeType.Hemisphere:
                    if (this.emitFrom === EmitLocation.Base || this.emitFrom === EmitLocation.Edge) {
                      this.emitFrom = EmitLocation.Volume;
                    }
                    break;
                }
              }
              constructor() {
                this._enable = _initializer$4 && _initializer$4();
                this._shapeType = _initializer2$4 && _initializer2$4();
                this.emitFrom = _initializer3$4 && _initializer3$4();
                this.alignToDirection = _initializer4$4 && _initializer4$4();
                this.randomDirectionAmount = _initializer5$4 && _initializer5$4();
                this.sphericalDirectionAmount = _initializer6$4 && _initializer6$4();
                this.randomPositionAmount = _initializer7$4 && _initializer7$4();
                this.radius = _initializer8$4 && _initializer8$4();
                this.radiusThickness = _initializer9$4 && _initializer9$4();
                this.arcMode = _initializer10$3 && _initializer10$3();
                this.arcSpread = _initializer11$3 && _initializer11$3();
                this.arcSpeed = _initializer12$3 && _initializer12$3();
                this.length = _initializer13$3 && _initializer13$3();
                this.boxThickness = _initializer14$2 && _initializer14$2();
                this._position = _initializer15$1 && _initializer15$1();
                this._rotation = _initializer16$1 && _initializer16$1();
                this._scale = _initializer17$1 && _initializer17$1();
                this._arc = _initializer18$1 && _initializer18$1();
                this._angle = _initializer19$1 && _initializer19$1();
                this.mat = void 0;
                this.quat = void 0;
                this.particleSystem = void 0;
                this.lastTime = void 0;
                this.totalAngle = void 0;
                this.mat = new Mat4();
                this.quat = new Quat();
                this.particleSystem = null;
                this.lastTime = 0;
                this.totalAngle = 0;
              }
              onInit(ps) {
                this.particleSystem = ps;
                this.constructMat();
                this.lastTime = this.particleSystem._time;
              }
              emit(p) {
                switch (this.shapeType) {
                  case ShapeType.Box:
                    boxEmit(this.emitFrom, this.boxThickness, p.position, p.velocity);
                    break;
                  case ShapeType.Circle:
                    circleEmit(this.radius, this.radiusThickness, this.generateArcAngle(), p.position, p.velocity);
                    break;
                  case ShapeType.Cone:
                    coneEmit(this.emitFrom, this.radius, this.radiusThickness, this.generateArcAngle(), this._angle, this.length, p.position, p.velocity);
                    break;
                  case ShapeType.Sphere:
                    sphereEmit(this.emitFrom, this.radius, this.radiusThickness, p.position, p.velocity);
                    break;
                  case ShapeType.Hemisphere:
                    hemisphereEmit(this.emitFrom, this.radius, this.radiusThickness, p.position, p.velocity);
                    break;
                  default:
                    console.warn(`${this.shapeType} shapeType is not supported by ShapeModule.`);
                }
                if (this.randomPositionAmount > 0) {
                  p.position.x += randomRange(-this.randomPositionAmount, this.randomPositionAmount);
                  p.position.y += randomRange(-this.randomPositionAmount, this.randomPositionAmount);
                  p.position.z += randomRange(-this.randomPositionAmount, this.randomPositionAmount);
                }
                Vec3.transformQuat(p.velocity, p.velocity, this.quat);
                Vec3.transformMat4(p.position, p.position, this.mat);
                if (this.sphericalDirectionAmount > 0) {
                  const sphericalVel = Vec3.normalize(_intermediVec, p.position);
                  Vec3.lerp(p.velocity, p.velocity, sphericalVel, this.sphericalDirectionAmount);
                }
                this.lastTime = this.particleSystem._time;
              }
              constructMat() {
                Quat.fromEuler(this.quat, this._rotation.x, this._rotation.y, this._rotation.z);
                Mat4.fromRTS(this.mat, this.quat, this._position, this._scale);
              }
              generateArcAngle() {
                if (this.arcMode === ArcMode.Random) {
                  return randomRange(0, this._arc);
                }
                let angle = this.totalAngle + 2 * Math.PI * this.arcSpeed.evaluate(this.particleSystem._time, 1) * (this.particleSystem._time - this.lastTime);
                this.totalAngle = angle;
                if (this.arcSpread !== 0) {
                  angle = Math.floor(angle / (this._arc * this.arcSpread)) * this._arc * this.arcSpread;
                }
                switch (this.arcMode) {
                  case ArcMode.Loop:
                    return repeat(angle, this._arc);
                  case ArcMode.PingPong:
                    return pingPong(angle, this._arc);
                  default:
                    return repeat(angle, this._arc);
                }
              }
            }, (_initializer$4 = applyDecoratedInitializer(_class2$4.prototype, "_enable", [serializable$1], function () {
              return false;
            }), _initializer2$4 = applyDecoratedInitializer(_class2$4.prototype, "_shapeType", [_dec2$4, _dec3$4], function () {
              return ShapeType.Cone;
            }), _applyDecoratedDescriptor(_class2$4.prototype, "shapeType", [_dec4$4], Object.getOwnPropertyDescriptor(_class2$4.prototype, "shapeType"), _class2$4.prototype), _initializer3$4 = applyDecoratedInitializer(_class2$4.prototype, "emitFrom", [_dec5$4, serializable$1], function () {
              return EmitLocation.Volume;
            }), _initializer4$4 = applyDecoratedInitializer(_class2$4.prototype, "alignToDirection", [serializable$1], function () {
              return false;
            }), _initializer5$4 = applyDecoratedInitializer(_class2$4.prototype, "randomDirectionAmount", [serializable$1], function () {
              return 0;
            }), _initializer6$4 = applyDecoratedInitializer(_class2$4.prototype, "sphericalDirectionAmount", [serializable$1], function () {
              return 0;
            }), _initializer7$4 = applyDecoratedInitializer(_class2$4.prototype, "randomPositionAmount", [serializable$1], function () {
              return 0;
            }), _initializer8$4 = applyDecoratedInitializer(_class2$4.prototype, "radius", [serializable$1], function () {
              return 1;
            }), _initializer9$4 = applyDecoratedInitializer(_class2$4.prototype, "radiusThickness", [serializable$1], function () {
              return 1;
            }), _initializer10$3 = applyDecoratedInitializer(_class2$4.prototype, "arcMode", [_dec6$4, serializable$1], function () {
              return ArcMode.Random;
            }), _initializer11$3 = applyDecoratedInitializer(_class2$4.prototype, "arcSpread", [serializable$1], function () {
              return 0;
            }), _initializer12$3 = applyDecoratedInitializer(_class2$4.prototype, "arcSpeed", [_dec7$4, serializable$1], function () {
              return new CurveRange();
            }), _initializer13$3 = applyDecoratedInitializer(_class2$4.prototype, "length", [serializable$1], function () {
              return 5;
            }), _initializer14$2 = applyDecoratedInitializer(_class2$4.prototype, "boxThickness", [serializable$1], function () {
              return new Vec3(0, 0, 0);
            }), _initializer15$1 = applyDecoratedInitializer(_class2$4.prototype, "_position", [serializable$1], function () {
              return new Vec3(0, 0, 0);
            }), _initializer16$1 = applyDecoratedInitializer(_class2$4.prototype, "_rotation", [serializable$1], function () {
              return new Vec3(0, 0, 0);
            }), _initializer17$1 = applyDecoratedInitializer(_class2$4.prototype, "_scale", [serializable$1], function () {
              return new Vec3(1, 1, 1);
            }), _initializer18$1 = applyDecoratedInitializer(_class2$4.prototype, "_arc", [serializable$1], function () {
              return toRadian(360);
            }), _initializer19$1 = applyDecoratedInitializer(_class2$4.prototype, "_angle", [serializable$1], function () {
              return toRadian(25);
            })), _class2$4)) || _class$3);
            function sphereEmit(emitFrom, radius, radiusThickness, pos, dir) {
              switch (emitFrom) {
                case EmitLocation.Volume:
                  randomPointBetweenSphere(pos, radius * (1 - radiusThickness), radius);
                  Vec3.normalize(dir, pos);
                  break;
                case EmitLocation.Shell:
                  randomUnitVector(pos);
                  Vec3.multiplyScalar(pos, pos, radius);
                  Vec3.normalize(dir, pos);
                  break;
                default:
                  console.warn(`${emitFrom} is not supported for sphere emitter.`);
              }
            }
            function hemisphereEmit(emitFrom, radius, radiusThickness, pos, dir) {
              switch (emitFrom) {
                case EmitLocation.Volume:
                  randomPointBetweenSphere(pos, radius * (1 - radiusThickness), radius);
                  if (pos.z > 0) {
                    pos.z *= -1;
                  }
                  Vec3.normalize(dir, pos);
                  break;
                case EmitLocation.Shell:
                  randomUnitVector(pos);
                  Vec3.multiplyScalar(pos, pos, radius);
                  if (pos.z > 0) {
                    pos.z *= -1;
                  }
                  Vec3.normalize(dir, pos);
                  break;
                default:
                  console.warn(`${emitFrom} is not supported for hemisphere emitter.`);
              }
            }
            function coneEmit(emitFrom, radius, radiusThickness, theta, angle, length, pos, dir) {
              switch (emitFrom) {
                case EmitLocation.Base:
                  randomPointBetweenCircleAtFixedAngle(pos, radius * (1 - radiusThickness), radius, theta);
                  Vec2.multiplyScalar(dir, pos, Math.sin(angle));
                  dir.z = -Math.cos(angle) * radius;
                  Vec3.normalize(dir, dir);
                  pos.z = 0;
                  break;
                case EmitLocation.Shell:
                  fixedAngleUnitVector2(pos, theta);
                  Vec2.multiplyScalar(dir, pos, Math.sin(angle));
                  dir.z = -Math.cos(angle);
                  Vec3.normalize(dir, dir);
                  Vec2.multiplyScalar(pos, pos, radius);
                  pos.z = 0;
                  break;
                case EmitLocation.Volume:
                  randomPointBetweenCircleAtFixedAngle(pos, radius * (1 - radiusThickness), radius, theta);
                  Vec2.multiplyScalar(dir, pos, Math.sin(angle));
                  dir.z = -Math.cos(angle) * radius;
                  Vec3.normalize(dir, dir);
                  pos.z = 0;
                  Vec3.add(pos, pos, Vec3.multiplyScalar(_intermediVec, dir, length * random() / -dir.z));
                  break;
                default:
                  console.warn(`${emitFrom} is not supported for cone emitter.`);
              }
            }
            function boxEmit(emitFrom, boxThickness, pos, dir) {
              switch (emitFrom) {
                case EmitLocation.Volume:
                  randomPointInCube(pos, _unitBoxExtent);
                  break;
                case EmitLocation.Shell:
                  _intermediArr.splice(0, _intermediArr.length);
                  _intermediArr.push(randomRange(-0.5, 0.5));
                  _intermediArr.push(randomRange(-0.5, 0.5));
                  _intermediArr.push(randomSign() * 0.5);
                  randomSortArray(_intermediArr);
                  applyBoxThickness(_intermediArr, boxThickness);
                  Vec3.set(pos, _intermediArr[0], _intermediArr[1], _intermediArr[2]);
                  break;
                case EmitLocation.Edge:
                  _intermediArr.splice(0, _intermediArr.length);
                  _intermediArr.push(randomRange(-0.5, 0.5));
                  _intermediArr.push(randomSign() * 0.5);
                  _intermediArr.push(randomSign() * 0.5);
                  randomSortArray(_intermediArr);
                  applyBoxThickness(_intermediArr, boxThickness);
                  Vec3.set(pos, _intermediArr[0], _intermediArr[1], _intermediArr[2]);
                  break;
                default:
                  console.warn(`${emitFrom} is not supported for box emitter.`);
              }
              Vec3.copy(dir, particleEmitZAxis);
            }
            function circleEmit(radius, radiusThickness, theta, pos, dir) {
              randomPointBetweenCircleAtFixedAngle(pos, radius * (1 - radiusThickness), radius, theta);
              Vec3.normalize(dir, pos);
            }
            function applyBoxThickness(pos, thickness) {
              if (thickness.x > 0) {
                pos[0] += 0.5 * randomRange(-thickness.x, thickness.x);
                pos[0] = clamp(pos[0], -0.5, 0.5);
              }
              if (thickness.y > 0) {
                pos[1] += 0.5 * randomRange(-thickness.y, thickness.y);
                pos[1] = clamp(pos[1], -0.5, 0.5);
              }
              if (thickness.z > 0) {
                pos[2] += 0.5 * randomRange(-thickness.z, thickness.z);
                pos[2] = clamp(pos[2], -0.5, 0.5);
              }
            }

            const _uvs$1 = [0, 0, 1, 0, 0, 1, 1, 1];
            const _uvs_ins = [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0];
            class ParticleBatchModel extends Model {
              constructor() {
                super();
                this._capacity = void 0;
                this._bufferSize = void 0;
                this._vertAttrs = void 0;
                this._vertAttribSize = void 0;
                this._vBuffer = void 0;
                this._vertAttrsFloatCount = void 0;
                this._vdataF32 = void 0;
                this._vdataUint32 = void 0;
                this._subMeshData = void 0;
                this._mesh = void 0;
                this._vertCount = 0;
                this._indexCount = 0;
                this._startTimeOffset = 0;
                this._lifeTimeOffset = 0;
                this._material = null;
                this._vertAttribSizeStatic = void 0;
                this._vertStaticAttrsFloatCount = void 0;
                this._insBuffers = void 0;
                this._insIndices = void 0;
                this._useInstance = void 0;
                this._iaVertCount = 0;
                this._iaIndexCount = 0;
                {
                  this._registerListeners();
                }
                this.type = ModelType.PARTICLE_BATCH;
                this._capacity = 0;
                this._bufferSize = 16;
                this._vertAttrs = null;
                this._vertAttribSize = 0;
                this._vBuffer = null;
                this._vertAttrsFloatCount = 0;
                this._vdataF32 = null;
                this._vdataUint32 = null;
                this._vertAttribSizeStatic = 0;
                this._vertStaticAttrsFloatCount = 0;
                this._insBuffers = [];
                this._insIndices = null;
                if (!deviceManager.gfxDevice.hasFeature(Feature.INSTANCED_ARRAYS)) {
                  this._useInstance = false;
                } else {
                  this._useInstance = true;
                }
                this._subMeshData = null;
                this._mesh = null;
              }
              setCapacity(capacity) {
                const capChanged = this._capacity !== capacity;
                this._capacity = capacity;
                this._bufferSize = Math.max(this._capacity, 16);
                if (this._subMeshData && capChanged) {
                  this.rebuild();
                }
              }
              setVertexAttributes(mesh, attrs) {
                if (!this._useInstance) {
                  if (this._mesh === mesh && this._vertAttrs === attrs) {
                    return;
                  }
                  this._mesh = mesh;
                  this._vertAttrs = attrs;
                  this._vertAttribSize = 0;
                  for (const a of this._vertAttrs) {
                    a.offset = this._vertAttribSize;
                    this._vertAttribSize += FormatInfos[a.format].size;
                  }
                  this._vertAttrsFloatCount = this._vertAttribSize / 4;
                  this.rebuild();
                } else {
                  this.setVertexAttributesIns(mesh, attrs);
                }
              }
              setVertexAttributesIns(mesh, attrs) {
                if (this._mesh === mesh && this._vertAttrs === attrs) {
                  return;
                }
                this._mesh = mesh;
                this._vertAttrs = attrs;
                this._vertAttribSize = 0;
                this._vertAttribSizeStatic = 0;
                for (const a of this._vertAttrs) {
                  if (a.stream === 0) {
                    a.offset = this._vertAttribSize;
                    this._vertAttribSize += FormatInfos[a.format].size;
                  } else if (a.stream === 1) {
                    a.offset = this._vertAttribSizeStatic;
                    this._vertAttribSizeStatic += FormatInfos[a.format].size;
                  }
                }
                this._vertAttrsFloatCount = this._vertAttribSize / 4;
                this._vertStaticAttrsFloatCount = this._vertAttribSizeStatic / 4;
                this.rebuild();
              }
              createSubMeshData() {
                this.destroySubMeshData();
                this._vertCount = 4;
                this._indexCount = 6;
                if (this._mesh) {
                  this._vertCount = this._mesh.struct.vertexBundles[this._mesh.struct.primitives[0].vertexBundelIndices[0]].view.count;
                  this._indexCount = this._mesh.struct.primitives[0].indexView.count;
                }
                const vertexBuffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, this._vertAttribSize * this._bufferSize * this._vertCount, this._vertAttribSize));
                const vBuffer = new ArrayBuffer(this._vertAttribSize * this._bufferSize * this._vertCount);
                if (this._mesh && this._capacity > 0) {
                  let vOffset = this._vertAttrs[this._vertAttrs.findIndex(val => val.name === AttributeName.ATTR_TEX_COORD)].offset;
                  this._mesh.copyAttribute(0, AttributeName.ATTR_TEX_COORD, vBuffer, this._vertAttribSize, vOffset);
                  let vIdx = this._vertAttrs.findIndex(val => val.name === AttributeName.ATTR_TEX_COORD3);
                  vOffset = this._vertAttrs[vIdx++].offset;
                  this._mesh.copyAttribute(0, AttributeName.ATTR_POSITION, vBuffer, this._vertAttribSize, vOffset);
                  vOffset = this._vertAttrs[vIdx++].offset;
                  this._mesh.copyAttribute(0, AttributeName.ATTR_NORMAL, vBuffer, this._vertAttribSize, vOffset);
                  vOffset = this._vertAttrs[vIdx++].offset;
                  if (!this._mesh.copyAttribute(0, AttributeName.ATTR_COLOR, vBuffer, this._vertAttribSize, vOffset)) {
                    const vb = new Uint32Array(vBuffer);
                    for (let iVertex = 0; iVertex < this._vertCount; ++iVertex) {
                      vb[iVertex * this._vertAttrsFloatCount + vOffset / 4] = Color.WHITE._val;
                    }
                  }
                  const vbFloatArray = new Float32Array(vBuffer);
                  for (let i = 1; i < this._capacity; i++) {
                    vbFloatArray.copyWithin(i * this._vertAttribSize * this._vertCount / 4, 0, this._vertAttribSize * this._vertCount / 4);
                  }
                }
                vertexBuffer.update(vBuffer);
                const indices = new Uint16Array(this._bufferSize * this._indexCount);
                if (this._mesh && this._capacity > 0) {
                  this._mesh.copyIndices(0, indices);
                  for (let i = 1; i < this._capacity; i++) {
                    for (let j = 0; j < this._indexCount; j++) {
                      indices[i * this._indexCount + j] = indices[j] + i * this._vertCount;
                    }
                  }
                } else {
                  let dst = 0;
                  for (let i = 0; i < this._capacity; ++i) {
                    const baseIdx = 4 * i;
                    indices[dst++] = baseIdx;
                    indices[dst++] = baseIdx + 1;
                    indices[dst++] = baseIdx + 2;
                    indices[dst++] = baseIdx + 3;
                    indices[dst++] = baseIdx + 2;
                    indices[dst++] = baseIdx + 1;
                  }
                }
                const indexBuffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, this._bufferSize * this._indexCount * Uint16Array.BYTES_PER_ELEMENT, Uint16Array.BYTES_PER_ELEMENT));
                indexBuffer.update(indices);
                this._iaVertCount = this._capacity * this._vertCount;
                this._iaIndexCount = this._capacity * this._indexCount;
                this._subMeshData = new RenderingSubMesh([vertexBuffer], this._vertAttrs, PrimitiveMode.TRIANGLE_LIST, indexBuffer);
                this.initSubModel(0, this._subMeshData, this._material);
                return vBuffer;
              }
              createSubMeshDataInsDynamic() {
                this._insBuffers.length = 0;
                this.destroySubMeshData();
                const vertexBuffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, this._vertAttribSize * this._bufferSize, this._vertAttribSize));
                const vBuffer = new ArrayBuffer(this._vertAttribSize * this._bufferSize);
                vertexBuffer.update(vBuffer);
                this._insBuffers.push(vertexBuffer);
                return vBuffer;
              }
              createSubMeshDataInsStatic() {
                this._vertCount = 4;
                this._indexCount = 6;
                if (this._mesh) {
                  this._vertCount = this._mesh.struct.vertexBundles[this._mesh.struct.primitives[0].vertexBundelIndices[0]].view.count;
                  this._indexCount = this._mesh.struct.primitives[0].indexView.count;
                }
                const vertexBuffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, this._vertAttribSizeStatic * this._vertCount, this._vertAttribSizeStatic));
                const vBuffer = new ArrayBuffer(this._vertAttribSizeStatic * this._vertCount);
                if (this._mesh) {
                  let vIdx = this._vertAttrs.findIndex(val => val.name === AttributeName.ATTR_TEX_COORD);
                  let vOffset = this._vertAttrs[vIdx].offset;
                  this._mesh.copyAttribute(0, AttributeName.ATTR_TEX_COORD, vBuffer, this._vertAttribSizeStatic, vOffset);
                  vIdx = this._vertAttrs.findIndex(val => val.name === AttributeName.ATTR_TEX_COORD3);
                  vOffset = this._vertAttrs[vIdx++].offset;
                  this._mesh.copyAttribute(0, AttributeName.ATTR_POSITION, vBuffer, this._vertAttribSizeStatic, vOffset);
                  vOffset = this._vertAttrs[vIdx++].offset;
                  this._mesh.copyAttribute(0, AttributeName.ATTR_NORMAL, vBuffer, this._vertAttribSizeStatic, vOffset);
                  vOffset = this._vertAttrs[vIdx++].offset;
                  if (!this._mesh.copyAttribute(0, AttributeName.ATTR_COLOR, vBuffer, this._vertAttribSizeStatic, vOffset)) {
                    const vb = new Uint32Array(vBuffer);
                    for (let iVertex = 0; iVertex < this._vertCount; ++iVertex) {
                      vb[iVertex * this._vertStaticAttrsFloatCount + vOffset / 4] = Color.WHITE._val;
                    }
                  }
                } else {
                  const vbFloatArray = new Float32Array(vBuffer);
                  for (let i = 0; i < _uvs_ins.length; ++i) {
                    vbFloatArray[i] = _uvs_ins[i];
                  }
                }
                vertexBuffer.update(vBuffer);
                const indices = new Uint16Array(this._indexCount);
                if (this._mesh) {
                  this._mesh.copyIndices(0, indices);
                } else {
                  indices[0] = 0;
                  indices[1] = 1;
                  indices[2] = 2;
                  indices[3] = 3;
                  indices[4] = 2;
                  indices[5] = 1;
                }
                const indexBuffer = this._device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.DEVICE, this._indexCount * Uint16Array.BYTES_PER_ELEMENT, Uint16Array.BYTES_PER_ELEMENT));
                indexBuffer.update(indices);
                this._insIndices = indexBuffer;
                this._iaVertCount = this._vertCount;
                this._iaIndexCount = this._indexCount;
                this._insBuffers.push(vertexBuffer);
              }
              createInsSubmesh() {
                this._subMeshData = new RenderingSubMesh(this._insBuffers, this._vertAttrs, PrimitiveMode.TRIANGLE_LIST, this._insIndices);
                this.initSubModel(0, this._subMeshData, this._material);
              }
              updateMaterial(mat) {
                this._material = mat;
                this.setSubModelMaterial(0, mat);
              }
              addParticleVertexData(index, pvdata) {
                if (!this._useInstance) {
                  if (!this._mesh) {
                    let offset = index * this._vertAttrsFloatCount;
                    this._vdataF32[offset++] = pvdata.position.x;
                    this._vdataF32[offset++] = pvdata.position.y;
                    this._vdataF32[offset++] = pvdata.position.z;
                    this._vdataF32[offset++] = pvdata.texcoord.x;
                    this._vdataF32[offset++] = pvdata.texcoord.y;
                    this._vdataF32[offset++] = pvdata.texcoord.z;
                    this._vdataF32[offset++] = pvdata.size.x;
                    this._vdataF32[offset++] = pvdata.size.y;
                    this._vdataF32[offset++] = pvdata.size.z;
                    this._vdataF32[offset++] = pvdata.rotation.x;
                    this._vdataF32[offset++] = pvdata.rotation.y;
                    this._vdataF32[offset++] = pvdata.rotation.z;
                    this._vdataUint32[offset++] = pvdata.color;
                    if (pvdata.velocity) {
                      this._vdataF32[offset++] = pvdata.velocity.x;
                      this._vdataF32[offset++] = pvdata.velocity.y;
                      this._vdataF32[offset++] = pvdata.velocity.z;
                    }
                  } else {
                    for (let i = 0; i < this._vertCount; i++) {
                      let offset = (index * this._vertCount + i) * this._vertAttrsFloatCount;
                      this._vdataF32[offset++] = pvdata.position.x;
                      this._vdataF32[offset++] = pvdata.position.y;
                      this._vdataF32[offset++] = pvdata.position.z;
                      offset += 2;
                      this._vdataF32[offset++] = pvdata.texcoord.z;
                      this._vdataF32[offset++] = pvdata.size.x;
                      this._vdataF32[offset++] = pvdata.size.y;
                      this._vdataF32[offset++] = pvdata.size.z;
                      this._vdataF32[offset++] = pvdata.rotation.x;
                      this._vdataF32[offset++] = pvdata.rotation.y;
                      this._vdataF32[offset++] = pvdata.rotation.z;
                      this._vdataUint32[offset++] = pvdata.color;
                    }
                  }
                } else {
                  this.addParticleVertexDataIns(index, pvdata);
                }
              }
              addParticleVertexDataIns(index, pvdata) {
                let offset = index * this._vertAttrsFloatCount;
                if (!this._mesh) {
                  this._vdataF32[offset++] = pvdata.position.x;
                  this._vdataF32[offset++] = pvdata.position.y;
                  this._vdataF32[offset++] = pvdata.position.z;
                  this._vdataF32[offset++] = pvdata.texcoord.z;
                  this._vdataF32[offset++] = pvdata.size.x;
                  this._vdataF32[offset++] = pvdata.size.y;
                  this._vdataF32[offset++] = pvdata.size.z;
                  this._vdataF32[offset++] = pvdata.rotation.x;
                  this._vdataF32[offset++] = pvdata.rotation.y;
                  this._vdataF32[offset++] = pvdata.rotation.z;
                  this._vdataUint32[offset++] = pvdata.color;
                  if (pvdata.velocity) {
                    this._vdataF32[offset++] = pvdata.velocity.x;
                    this._vdataF32[offset++] = pvdata.velocity.y;
                    this._vdataF32[offset++] = pvdata.velocity.z;
                  }
                } else {
                  this._vdataF32[offset++] = pvdata.position.x;
                  this._vdataF32[offset++] = pvdata.position.y;
                  this._vdataF32[offset++] = pvdata.position.z;
                  this._vdataF32[offset++] = pvdata.texcoord.z;
                  this._vdataF32[offset++] = pvdata.size.x;
                  this._vdataF32[offset++] = pvdata.size.y;
                  this._vdataF32[offset++] = pvdata.size.z;
                  this._vdataF32[offset++] = pvdata.rotation.x;
                  this._vdataF32[offset++] = pvdata.rotation.y;
                  this._vdataF32[offset++] = pvdata.rotation.z;
                  this._vdataUint32[offset++] = pvdata.color;
                }
              }
              addGPUParticleVertexData(p, num, time) {
                if (!this._useInstance) {
                  let offset = num * this._vertAttrsFloatCount * this._vertCount;
                  for (let i = 0; i < this._vertCount; i++) {
                    let idx = offset;
                    this._vdataF32[idx++] = p.position.x;
                    this._vdataF32[idx++] = p.position.y;
                    this._vdataF32[idx++] = p.position.z;
                    this._vdataF32[idx++] = time;
                    this._vdataF32[idx++] = p.startSize.x;
                    this._vdataF32[idx++] = p.startSize.y;
                    this._vdataF32[idx++] = p.startSize.z;
                    this._vdataF32[idx++] = _uvs$1[2 * i];
                    this._vdataF32[idx++] = p.rotation.x;
                    this._vdataF32[idx++] = p.rotation.y;
                    this._vdataF32[idx++] = p.rotation.z;
                    this._vdataF32[idx++] = _uvs$1[2 * i + 1];
                    this._vdataF32[idx++] = p.startColor.r / 255.0;
                    this._vdataF32[idx++] = p.startColor.g / 255.0;
                    this._vdataF32[idx++] = p.startColor.b / 255.0;
                    this._vdataF32[idx++] = p.startColor.a / 255.0;
                    this._vdataF32[idx++] = p.velocity.x;
                    this._vdataF32[idx++] = p.velocity.y;
                    this._vdataF32[idx++] = p.velocity.z;
                    this._vdataF32[idx++] = p.startLifetime;
                    this._vdataF32[idx++] = p.randomSeed;
                    offset += this._vertAttrsFloatCount;
                  }
                } else {
                  this.addGPUParticleVertexDataIns(p, num, time);
                }
              }
              addGPUParticleVertexDataIns(p, num, time) {
                let offset = num * this._vertAttrsFloatCount;
                let idx = offset;
                this._vdataF32[idx++] = p.position.x;
                this._vdataF32[idx++] = p.position.y;
                this._vdataF32[idx++] = p.position.z;
                this._vdataF32[idx++] = time;
                this._vdataF32[idx++] = p.startSize.x;
                this._vdataF32[idx++] = p.startSize.y;
                this._vdataF32[idx++] = p.startSize.z;
                this._vdataF32[idx++] = p.frameIndex;
                this._vdataF32[idx++] = p.rotation.x;
                this._vdataF32[idx++] = p.rotation.y;
                this._vdataF32[idx++] = p.rotation.z;
                this._vdataF32[idx++] = p.startColor.r / 255.0;
                this._vdataF32[idx++] = p.startColor.g / 255.0;
                this._vdataF32[idx++] = p.startColor.b / 255.0;
                this._vdataF32[idx++] = p.startColor.a / 255.0;
                this._vdataF32[idx++] = p.velocity.x;
                this._vdataF32[idx++] = p.velocity.y;
                this._vdataF32[idx++] = p.velocity.z;
                this._vdataF32[idx++] = p.startLifetime;
                this._vdataF32[idx++] = p.randomSeed;
                offset += this._vertAttrsFloatCount;
              }
              updateGPUParticles(num, time, dt) {
                if (!this._useInstance) {
                  const pSize = this._vertAttrsFloatCount * this._vertCount;
                  let pBaseIndex = 0;
                  let startTime = 0;
                  let lifeTime = 0;
                  let lastBaseIndex = 0;
                  let interval = 0;
                  for (let i = 0; i < num; ++i) {
                    pBaseIndex = i * pSize;
                    startTime = this._vdataF32[pBaseIndex + this._startTimeOffset];
                    lifeTime = this._vdataF32[pBaseIndex + this._lifeTimeOffset];
                    interval = time - startTime;
                    if (lifeTime - interval < dt) {
                      lastBaseIndex = --num * pSize;
                      this._vdataF32.copyWithin(pBaseIndex, lastBaseIndex, lastBaseIndex + pSize);
                      i--;
                    }
                  }
                  return num;
                } else {
                  return this.updateGPUParticlesIns(num, time, dt);
                }
              }
              updateGPUParticlesIns(num, time, dt) {
                const pSize = this._vertAttrsFloatCount;
                let pBaseIndex = 0;
                let startTime = 0;
                let lifeTime = 0;
                let lastBaseIndex = 0;
                let interval = 0;
                for (let i = 0; i < num; ++i) {
                  pBaseIndex = i * pSize;
                  startTime = this._vdataF32[pBaseIndex + this._startTimeOffset];
                  lifeTime = this._vdataF32[pBaseIndex + this._lifeTimeOffset];
                  interval = time - startTime;
                  if (lifeTime - interval < dt) {
                    lastBaseIndex = --num * pSize;
                    this._vdataF32.copyWithin(pBaseIndex, lastBaseIndex, lastBaseIndex + pSize);
                    i--;
                  }
                }
                return num;
              }
              constructAttributeIndex() {
                if (!this._vertAttrs) {
                  return;
                }
                let vIdx = this._vertAttrs.findIndex(val => val.name === 'a_position_starttime');
                let vOffset = this._vertAttrs[vIdx].offset;
                this._startTimeOffset = vOffset / 4 + 3;
                vIdx = this._vertAttrs.findIndex(val => val.name === 'a_dir_life');
                vOffset = this._vertAttrs[vIdx].offset;
                this._lifeTimeOffset = vOffset / 4 + 3;
              }
              updateIA(count) {
                if (!this._useInstance) {
                  if (count <= 0) {
                    return;
                  }
                  const ia = this._subModels[0].inputAssembler;
                  ia.vertexBuffers[0].update(this._vdataF32);
                  ia.firstIndex = 0;
                  ia.indexCount = this._indexCount * count;
                  ia.vertexCount = this._iaVertCount;
                } else {
                  this.updateIAIns(count);
                }
              }
              updateIAIns(count) {
                if (count <= 0) {
                  return;
                }
                const ia = this._subModels[0].inputAssembler;
                ia.vertexBuffers[0].update(this._vdataF32);
                ia.instanceCount = count;
                ia.firstIndex = 0;
                ia.indexCount = this._indexCount;
                ia.instanceCount = count;
                ia.vertexCount = this._iaVertCount;
              }
              clear() {
                if (!this._useInstance) {
                  this._subModels[0].inputAssembler.indexCount = 0;
                } else {
                  this.clearIns();
                }
              }
              clearIns() {
                this._subModels[0].inputAssembler.instanceCount = 0;
              }
              destroy() {
                super.destroy();
                this.doDestroy();
              }
              doDestroy() {
                this._vBuffer = null;
                this._vdataF32 = null;
                this._vdataUint32 = null;
                this._insBuffers = [];
                this._insIndices = null;
                this._vertAttrs = null;
                this._material = null;
                this._mesh = null;
                this.destroySubMeshData();
              }
              rebuild() {
                if (!this._useInstance) {
                  this._vBuffer = this.createSubMeshData();
                  this._vdataF32 = new Float32Array(this._vBuffer);
                  this._vdataUint32 = new Uint32Array(this._vBuffer);
                } else {
                  this.rebuildIns();
                }
              }
              rebuildIns() {
                this._vBuffer = this.createSubMeshDataInsDynamic();
                this._vdataF32 = new Float32Array(this._vBuffer);
                this._vdataUint32 = new Uint32Array(this._vBuffer);
                this.createSubMeshDataInsStatic();
                this.createInsSubmesh();
              }
              destroySubMeshData() {
                if (this._subMeshData) {
                  this._subMeshData.destroy();
                  this._subMeshData = null;
                }
              }
              set useInstance(value) {
                if (this._useInstance !== value) {
                  this._useInstance = value;
                }
              }
              get useInstance() {
                return this._useInstance;
              }
            }

            class ParticleSystemRendererBase {
              get model() {
                return this._model;
              }
              constructor(info) {
                this._particleSystem = null;
                this._model = null;
                this._renderInfo = null;
                this._vertAttrs = [];
                this._useInstance = void 0;
                this._renderInfo = info;
                if (!deviceManager.gfxDevice.hasFeature(Feature.INSTANCED_ARRAYS)) {
                  this._useInstance = false;
                } else {
                  this._useInstance = true;
                }
              }
              getUseInstance() {
                return this._useInstance;
              }
              getInfo() {
                return this._renderInfo;
              }
              onInit(ps) {
                this._particleSystem = ps;
              }
              onEnable() {
                if (!this._particleSystem) {
                  return;
                }
                this.attachToScene();
                const model = this._model;
                if (model) {
                  model.node = model.transform = this._particleSystem.node;
                }
              }
              onDisable() {
                this.detachFromScene();
              }
              onDestroy() {
                if (this._model) {
                  legacyCC.director.root.destroyModel(this._model);
                  this._model = null;
                }
              }
              attachToScene() {
                if (this._model) {
                  var _this$_particleSystem;
                  if (this._model.scene) {
                    this.detachFromScene();
                  }
                  (_this$_particleSystem = this._particleSystem) === null || _this$_particleSystem === void 0 ? void 0 : _this$_particleSystem._getRenderScene().addModel(this._model);
                }
              }
              detachFromScene() {
                if (this._model && this._model.scene) {
                  this._model.scene.removeModel(this._model);
                }
              }
              setVertexAttributes() {
                if (this._model) {
                  this.updateVertexAttrib();
                  this._model.setVertexAttributes(this._renderInfo.renderMode === RenderMode.Mesh ? this._renderInfo.mesh : null, this._vertAttrs);
                }
              }
              clear() {
                if (this._model) this._model.enabled = false;
              }
              getModel() {
                return this._model;
              }
              _initModel() {
                if (!this._model && this._particleSystem) {
                  this._model = legacyCC.director.root.createModel(ParticleBatchModel);
                  this._model.setCapacity(this._particleSystem.capacity);
                  this._model.visFlags = this._particleSystem.visibility;
                }
              }
              updateTrailMaterial() {}
              getDefaultTrailMaterial() {
                return null;
              }
            }

            class ParticleNoise {
              constructor(permutation) {
                this.permutation = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
                this.accSpeed = new Vec3();
                this.noiseSpeed = new Vec3();
                this.noiseFrequency = 0.0;
                this.noiseAbs = new Vec3();
                this.noiseAmplitude = new Vec3();
                this.octaves = new Vec3();
                this.dt = 0.0;
                this.point = new Vec3();
                this.result = new Vec3();
                this.mixOut = new Vec2();
                if (permutation) {
                  this.permutation = permutation;
                }
              }
              noise(x, y, z, min = 0, max = 1) {
                const p = new Array(512);
                for (let i = 0; i < 256; i++) {
                  p[256 + i] = p[i] = this.permutation[i];
                }
                const X = Math.floor(x) & 255;
                const Y = Math.floor(y) & 255;
                const Z = Math.floor(z) & 255;
                x -= Math.floor(x);
                y -= Math.floor(y);
                z -= Math.floor(z);
                const u = this.fade(x);
                const v = this.fade(y);
                const w = this.fade(z);
                const A = p[X] + Y;
                const AA = p[A] + Z;
                const AB = p[A + 1] + Z;
                const B = p[X + 1] + Y;
                const BA = p[B] + Z;
                const BB = p[B + 1] + Z;
                const val = this.scale(this.lerp(w, this.lerp(v, this.lerp(u, this.grad(p[AA], x, y, z), this.grad(p[BA], x - 1, y, z)), this.lerp(u, this.grad(p[AB], x, y - 1, z), this.grad(p[BB], x - 1, y - 1, z))), this.lerp(v, this.lerp(u, this.grad(p[AA + 1], x, y, z - 1), this.grad(p[BA + 1], x - 1, y, z - 1)), this.lerp(u, this.grad(p[AB + 1], x, y - 1, z - 1), this.grad(p[BB + 1], x - 1, y - 1, z - 1)))));
                return min + val * (max - min);
              }
              fade(t) {
                return t * t * t * (t * (t * 6 - 15) + 10);
              }
              lerp(t, a, b) {
                return a + t * (b - a);
              }
              grad(hash, x, y, z) {
                const h = hash & 15;
                const u = h < 8 ? x : y;
                const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
                return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
              }
              scale(n) {
                return (1 + n) / 2;
              }
              setSpeed(x, y, z) {
                this.noiseSpeed.set(x, y, z);
              }
              setFrequency(f) {
                this.noiseFrequency = f;
              }
              setAbs(x, y, z) {
                this.noiseAbs.set(x, y, z);
              }
              setAmplititude(x, y, z) {
                this.noiseAmplitude.set(x, y, z);
              }
              setOctaves(x, y, z) {
                this.octaves.set(x, y, z);
              }
              setTime(t) {
                this.dt = t;
              }
              setSamplePoint(p) {
                this.point.set(p);
              }
              getResult() {
                return this.result;
              }
              getNoise(sx, sy, sz, time, offset, noiseFrequency, octaves) {
                let frequency = noiseFrequency;
                let sum = 0.0;
                sum += this.noise(sx * frequency, sy * frequency, sz * frequency, -1.0, 1.0);
                if (octaves.x === 1) {
                  return sum;
                }
                let amplitude = 1.0;
                let range = 1.0;
                for (let i = 1; i < octaves.x; ++i) {
                  amplitude *= octaves.y;
                  frequency *= octaves.z;
                  range += amplitude;
                  sum += this.noise(sx * frequency, sy * frequency, sz * frequency, -1.0, 1.0) * amplitude;
                }
                return sum / range;
              }
              getNoiseMix(out, point, time, offSpeed, noiseFrequency, octaves) {
                out.x = this.getNoise(point.x, point.y, point.z, time, offSpeed, noiseFrequency, octaves);
                out.y = this.getNoise(point.y, point.z, point.x, time, offSpeed, noiseFrequency, octaves);
              }
              getNoiseParticle() {
                this.accSpeed.set(this.noiseSpeed.x * this.dt, this.noiseSpeed.y * this.dt, this.noiseSpeed.z * this.dt);
                const axisOffset = 1000.0;
                const sampX = this.getNoise(this.point.z + this.accSpeed.x, this.point.y, this.point.x, this.dt, this.accSpeed, this.noiseFrequency, this.octaves);
                const sampY = this.getNoise(this.point.x + axisOffset, this.point.z + this.accSpeed.y, this.point.y, this.dt, this.accSpeed, this.noiseFrequency, this.octaves);
                const sampZ = this.getNoise(this.point.y, this.point.x + axisOffset, this.point.z + this.accSpeed.z, this.dt, this.accSpeed, this.noiseFrequency, this.octaves);
                this.result.set(sampX * this.noiseAmplitude.x, sampY * this.noiseAmplitude.y, sampZ * this.noiseAmplitude.z);
              }
              getPreview(out, width, height) {
                for (let h = 0; h < height; ++h) {
                  for (let w = 0; w < width; ++w) {
                    const sampx = (w - width * 0.5) / width + this.noiseSpeed.x * this.dt;
                    const sampy = (h - height * 0.5) / height + this.noiseSpeed.y * this.dt;
                    const pix = this.getNoise(sampx, sampy, 0.0, this.dt, this.accSpeed, this.noiseFrequency, this.octaves);
                    out[h * width + w] = (pix + 1.0) * 0.5;
                  }
                }
              }
            }

            const _tempNodeScale$1 = new Vec4();
            const _tempAttribUV = new Vec3();
            const _tempWorldTrans$1 = new Mat4();
            const _tempParentInverse = new Mat4();
            const _node_rot$1 = new Quat();
            new Vec3();
            const _anim_module$1 = ['_colorOverLifetimeModule', '_sizeOvertimeModule', '_velocityOvertimeModule', '_forceOvertimeModule', '_limitVelocityOvertimeModule', '_rotationOvertimeModule', '_textureAnimationModule', '_noiseModule'];
            const _uvs = [0, 0, 1, 0, 0, 1, 1, 1];
            const CC_USE_WORLD_SPACE$1 = 'CC_USE_WORLD_SPACE';
            const CC_RENDER_MODE$1 = 'CC_RENDER_MODE';
            const ROTATION_OVER_TIME_MODULE_ENABLE$1 = 'ROTATION_OVER_TIME_MODULE_ENABLE';
            const INSTANCE_PARTICLE$1 = 'CC_INSTANCE_PARTICLE';
            const RENDER_MODE_BILLBOARD$1 = 0;
            const RENDER_MODE_STRETCHED_BILLBOARD$1 = 1;
            const RENDER_MODE_HORIZONTAL_BILLBOARD$1 = 2;
            const RENDER_MODE_VERTICAL_BILLBOARD$1 = 3;
            const RENDER_MODE_MESH$1 = 4;
            const _vertex_attrs = [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD1, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD2, Format.RGB32F), new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true)];
            const _vertex_attrs_stretch = [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD1, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD2, Format.RGB32F), new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true), new Attribute(AttributeName.ATTR_COLOR1, Format.RGB32F)];
            const _vertex_attrs_mesh = [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD1, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD2, Format.RGB32F), new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true), new Attribute(AttributeName.ATTR_TEX_COORD3, Format.RGB32F), new Attribute(AttributeName.ATTR_NORMAL, Format.RGB32F), new Attribute(AttributeName.ATTR_COLOR1, Format.RGBA8, true)];
            const _vertex_attrs_ins = [new Attribute(AttributeName.ATTR_TEX_COORD4, Format.RGBA32F, false, 0, true), new Attribute(AttributeName.ATTR_TEX_COORD1, Format.RGB32F, false, 0, true), new Attribute(AttributeName.ATTR_TEX_COORD2, Format.RGB32F, false, 0, true), new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true, 0, true), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGB32F, false, 1)];
            const _vertex_attrs_stretch_ins = [new Attribute(AttributeName.ATTR_TEX_COORD4, Format.RGBA32F, false, 0, true), new Attribute(AttributeName.ATTR_TEX_COORD1, Format.RGB32F, false, 0, true), new Attribute(AttributeName.ATTR_TEX_COORD2, Format.RGB32F, false, 0, true), new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true, 0, true), new Attribute(AttributeName.ATTR_COLOR1, Format.RGB32F, false, 0, true), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGB32F, false, 1)];
            const _vertex_attrs_mesh_ins = [new Attribute(AttributeName.ATTR_TEX_COORD4, Format.RGBA32F, false, 0, true), new Attribute(AttributeName.ATTR_TEX_COORD1, Format.RGB32F, false, 0, true), new Attribute(AttributeName.ATTR_TEX_COORD2, Format.RGB32F, false, 0, true), new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true, 0, true), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGB32F, false, 1), new Attribute(AttributeName.ATTR_TEX_COORD3, Format.RGB32F, false, 1), new Attribute(AttributeName.ATTR_NORMAL, Format.RGB32F, false, 1), new Attribute(AttributeName.ATTR_COLOR1, Format.RGBA8, true, 1)];
            const _matInsInfo$1 = {
              parent: null,
              owner: null,
              subModelIdx: 0
            };
            class PVData {
              constructor() {
                this.position = void 0;
                this.texcoord = void 0;
                this.size = void 0;
                this.rotation = void 0;
                this.color = void 0;
                this.velocity = void 0;
                this.position = new Vec3();
                this.texcoord = new Vec3();
                this.size = new Vec3();
                this.rotation = new Vec3();
                this.color = 0;
                this.velocity = null;
              }
            }
            class ParticleSystemRendererCPU extends ParticleSystemRendererBase {
              constructor(info) {
                super(info);
                this._defines = void 0;
                this._trailDefines = void 0;
                this._frameTile_velLenScale = void 0;
                this._tmp_velLenScale = void 0;
                this._defaultMat = null;
                this._node_scale = void 0;
                this._particleVertexData = void 0;
                this._particles = null;
                this._defaultTrailMat = null;
                this._updateList = new Map();
                this._animateList = new Map();
                this._runAnimateList = new Array();
                this._fillDataFunc = null;
                this._uScaleHandle = 0;
                this._uLenHandle = 0;
                this._uNodeRotHandle = 0;
                this._alignSpace = AlignmentSpace.View;
                this._inited = false;
                this._localMat = new Mat4();
                this._gravity = new Vec4();
                this.noise = new ParticleNoise();
                this._model = null;
                this._frameTile_velLenScale = new Vec4(1, 1, 0, 0);
                this._tmp_velLenScale = this._frameTile_velLenScale.clone();
                this._node_scale = new Vec3();
                this._particleVertexData = new PVData();
                this._defines = {
                  CC_USE_WORLD_SPACE: true,
                  CC_USE_BILLBOARD: true,
                  CC_USE_STRETCHED_BILLBOARD: false,
                  CC_USE_HORIZONTAL_BILLBOARD: false,
                  CC_USE_VERTICAL_BILLBOARD: false
                };
                this._trailDefines = {
                  CC_USE_WORLD_SPACE: true
                };
              }
              onInit(ps) {
                super.onInit(ps);
                this._particles = new RecyclePool(() => new Particle(this), 16);
                this._setVertexAttrib();
                this._setFillFunc();
                this._initModuleList();
                this._initModel();
                this.updateMaterialParams();
                this.updateTrailMaterial();
                this.setVertexAttributes();
                this._inited = true;
              }
              clear() {
                super.clear();
                this._particles.reset();
                if (this._particleSystem && this._particleSystem._trailModule) {
                  this._particleSystem._trailModule.clear();
                }
                this.updateRenderData();
                this._model.enabled = false;
              }
              updateRenderMode() {
                this._setVertexAttrib();
                this._setFillFunc();
                this.updateMaterialParams();
                this.setVertexAttributes();
              }
              onDestroy() {
                var _this$_particles;
                (_this$_particles = this._particles) === null || _this$_particles === void 0 ? void 0 : _this$_particles.destroy();
                super.onDestroy();
              }
              getFreeParticle() {
                if (this._particleSystem && this._particles.length >= this._particleSystem.capacity) {
                  return null;
                }
                return this._particles.add();
              }
              getDefaultTrailMaterial() {
                return this._defaultTrailMat;
              }
              setNewParticle(p) {}
              _initModuleList() {
                _anim_module$1.forEach(val => {
                  if (!this._particleSystem) {
                    return;
                  }
                  const pm = this._particleSystem[val];
                  if (pm && pm.enable) {
                    if (pm.needUpdate) {
                      this._updateList[pm.name] = pm;
                    }
                    if (pm.needAnimate) {
                      this._animateList[pm.name] = pm;
                    }
                  }
                });
                this._runAnimateList.length = 0;
                for (let i = 0, len = PARTICLE_MODULE_ORDER.length; i < len; i++) {
                  const p = this._animateList[PARTICLE_MODULE_ORDER[i]];
                  if (p) {
                    this._runAnimateList.push(p);
                  }
                }
              }
              enableModule(name, val, pm) {
                if (val) {
                  if (pm.needUpdate) {
                    this._updateList[pm.name] = pm;
                  }
                  if (pm.needAnimate) {
                    this._animateList[pm.name] = pm;
                  }
                } else {
                  delete this._animateList[name];
                  delete this._updateList[name];
                }
                this._runAnimateList.length = 0;
                for (let i = 0, len = PARTICLE_MODULE_ORDER.length; i < len; i++) {
                  const p = this._animateList[PARTICLE_MODULE_ORDER[i]];
                  if (p) {
                    this._runAnimateList.push(p);
                  }
                }
                this.updateMaterialParams();
              }
              updateAlignSpace(space) {
                this._alignSpace = space;
              }
              getDefaultMaterial() {
                return this._defaultMat;
              }
              updateRotation(pass) {
                if (pass) {
                  this.doUpdateRotation(pass);
                }
              }
              doUpdateRotation(pass) {
                const mode = this._renderInfo.renderMode;
                if (mode !== RenderMode.Mesh && this._alignSpace === AlignmentSpace.View) {
                  return;
                }
                if (this._alignSpace === AlignmentSpace.Local) {
                  var _this$_particleSystem;
                  (_this$_particleSystem = this._particleSystem) === null || _this$_particleSystem === void 0 ? void 0 : _this$_particleSystem.node.getRotation(_node_rot$1);
                } else if (this._alignSpace === AlignmentSpace.World) {
                  var _this$_particleSystem2;
                  (_this$_particleSystem2 = this._particleSystem) === null || _this$_particleSystem2 === void 0 ? void 0 : _this$_particleSystem2.node.getWorldRotation(_node_rot$1);
                } else if (this._alignSpace === AlignmentSpace.View) {
                  var _this$_particleSystem3, _this$_particleSystem4;
                  _node_rot$1.set(0.0, 0.0, 0.0, 1.0);
                  const cameraLst = (_this$_particleSystem3 = this._particleSystem) === null || _this$_particleSystem3 === void 0 ? void 0 : (_this$_particleSystem4 = _this$_particleSystem3.node.scene.renderScene) === null || _this$_particleSystem4 === void 0 ? void 0 : _this$_particleSystem4.cameras;
                  if (cameraLst !== undefined) {
                    for (let i = 0; i < (cameraLst === null || cameraLst === void 0 ? void 0 : cameraLst.length); ++i) {
                      const camera = cameraLst[i];
                      const checkCamera = (camera.visibility & this._particleSystem.node.layer) === this._particleSystem.node.layer ;
                      if (checkCamera) {
                        Quat.fromViewUp(_node_rot$1, camera.forward);
                        break;
                      }
                    }
                  }
                } else {
                  _node_rot$1.set(0.0, 0.0, 0.0, 1.0);
                }
                pass.setUniform(this._uNodeRotHandle, _node_rot$1);
              }
              updateScale(pass) {
                if (pass) {
                  this.doUpdateScale(pass);
                }
              }
              doUpdateScale(pass) {
                var _this$_particleSystem5, _this$_particleSystem6, _this$_particleSystem7;
                const nodeScale = this._node_scale;
                switch ((_this$_particleSystem5 = this._particleSystem) === null || _this$_particleSystem5 === void 0 ? void 0 : _this$_particleSystem5.scaleSpace) {
                  case Space.Local:
                    (_this$_particleSystem6 = this._particleSystem) === null || _this$_particleSystem6 === void 0 ? void 0 : _this$_particleSystem6.node.getScale(nodeScale);
                    break;
                  case Space.World:
                    (_this$_particleSystem7 = this._particleSystem) === null || _this$_particleSystem7 === void 0 ? void 0 : _this$_particleSystem7.node.getWorldScale(nodeScale);
                    break;
                }
                pass.setUniform(this._uScaleHandle, _tempNodeScale$1.set(nodeScale.x, nodeScale.y, nodeScale.z));
              }
              updateParticles(dt) {
                const ps = this._particleSystem;
                if (!ps) {
                  return this._particles.length;
                }
                ps.node.getWorldMatrix(_tempWorldTrans$1);
                const mat = ps.getMaterialInstance(0) || this._defaultMat;
                const pass = mat.passes[0];
                this.doUpdateScale(pass);
                this.doUpdateRotation(pass);
                this._updateList.forEach((value, key) => {
                  value.update(ps.simulationSpace, _tempWorldTrans$1);
                });
                const trailModule = ps._trailModule;
                const trailEnable = trailModule && trailModule.enable;
                if (trailEnable) {
                  trailModule.update();
                }
                const useGravity = !ps.gravityModifier.isZero();
                if (useGravity) {
                  if (ps.simulationSpace === Space.Local) {
                    const r = ps.node.getRotation();
                    Mat4.fromQuat(this._localMat, r);
                    this._localMat.transpose();
                  }
                  if (ps.node.parent) {
                    const r = ps.node.parent.getWorldRotation();
                    Mat4.fromQuat(_tempParentInverse, r);
                    _tempParentInverse.transpose();
                  }
                }
                for (let i = 0; i < this._particles.length; ++i) {
                  const p = this._particles.data[i];
                  p.remainingLifetime -= dt;
                  Vec3.set(p.animatedVelocity, 0, 0, 0);
                  if (p.remainingLifetime < 0.0) {
                    if (trailEnable) {
                      trailModule.removeParticle(p);
                    }
                    this._particles.removeAt(i);
                    --i;
                    continue;
                  }
                  if (useGravity) {
                    const rand = isCurveTwoValues(ps.gravityModifier) ? pseudoRandom(p.randomSeed) : 0;
                    if (ps.simulationSpace === Space.Local) {
                      const time = 1 - p.remainingLifetime / p.startLifetime;
                      const gravityFactor = -ps.gravityModifier.evaluate(time, rand) * 9.8 * dt;
                      this._gravity.x = 0.0;
                      this._gravity.y = gravityFactor;
                      this._gravity.z = 0.0;
                      this._gravity.w = 1.0;
                      if (!approx(gravityFactor, 0.0, EPSILON)) {
                        if (ps.node.parent) {
                          this._gravity = this._gravity.transformMat4(_tempParentInverse);
                        }
                        this._gravity = this._gravity.transformMat4(this._localMat);
                        p.velocity.x += this._gravity.x;
                        p.velocity.y += this._gravity.y;
                        p.velocity.z += this._gravity.z;
                      }
                    } else {
                      p.velocity.y -= ps.gravityModifier.evaluate(1 - p.remainingLifetime / p.startLifetime, rand) * 9.8 * dt;
                    }
                  }
                  Vec3.copy(p.ultimateVelocity, p.velocity);
                  this._runAnimateList.forEach(value => {
                    value.animate(p, dt);
                  });
                  Vec3.scaleAndAdd(p.position, p.position, p.ultimateVelocity, dt);
                  if (trailEnable) {
                    trailModule.animate(p, dt);
                  }
                }
                this._model.enabled = this._particles.length > 0;
                return this._particles.length;
              }
              getNoisePreview(out, width, height) {
                this._runAnimateList.forEach(value => {
                  if (value.name === PARTICLE_MODULE_NAME.NOISE) {
                    const m = value;
                    m.getNoisePreview(out, this._particleSystem, width, height);
                  }
                });
              }
              updateRenderData() {
                let idx = 0;
                for (let i = 0; i < this._particles.length; ++i) {
                  const p = this._particles.data[i];
                  let fi = 0;
                  const textureModule = this._particleSystem._textureAnimationModule;
                  if (textureModule && textureModule.enable) {
                    fi = p.frameIndex;
                  }
                  idx = i * 4;
                  this._fillDataFunc(p, idx, fi);
                }
              }
              beforeRender() {
                this._model.updateIA(this._particles.length);
              }
              getParticleCount() {
                return this._particles.length;
              }
              onMaterialModified(index, material) {
                if (!this._inited) {
                  return;
                }
                if (index === 0) {
                  this.updateMaterialParams();
                } else {
                  this.updateTrailMaterial();
                }
              }
              onRebuildPSO(index, material) {
                if (this._model && index === 0) {
                  this._model.setSubModelMaterial(0, material);
                }
                const trailModule = this._particleSystem._trailModule;
                const trailModel = trailModule === null || trailModule === void 0 ? void 0 : trailModule.getModel();
                if (trailModel && index === 1) {
                  trailModel.setSubModelMaterial(0, material);
                }
              }
              _setFillFunc() {
                if (this._renderInfo.renderMode === RenderMode.Mesh) {
                  this._fillDataFunc = this._fillMeshData;
                } else if (this._renderInfo.renderMode === RenderMode.StrecthedBillboard) {
                  this._fillDataFunc = this._fillStrecthedData;
                } else {
                  this._fillDataFunc = this._fillNormalData;
                }
              }
              _fillMeshData(p, idx, fi) {
                const i = idx / 4;
                Vec3.copy(this._particleVertexData.position, p.position);
                _tempAttribUV.z = fi;
                Vec3.copy(this._particleVertexData.texcoord, _tempAttribUV);
                Vec3.copy(this._particleVertexData.size, p.size);
                Vec3.copy(this._particleVertexData.rotation, p.rotation);
                this._particleVertexData.color = p.color._val;
                this._model.addParticleVertexData(i, this._particleVertexData);
              }
              _fillStrecthedData(p, idx, fi) {
                if (!this._useInstance) {
                  for (let j = 0; j < 4; ++j) {
                    Vec3.copy(this._particleVertexData.position, p.position);
                    _tempAttribUV.x = _uvs[2 * j];
                    _tempAttribUV.y = _uvs[2 * j + 1];
                    _tempAttribUV.z = fi;
                    Vec3.copy(this._particleVertexData.texcoord, _tempAttribUV);
                    Vec3.copy(this._particleVertexData.size, p.size);
                    Vec3.copy(this._particleVertexData.rotation, p.rotation);
                    this._particleVertexData.color = p.color._val;
                    this._particleVertexData.velocity = p.ultimateVelocity;
                    this._model.addParticleVertexData(idx++, this._particleVertexData);
                  }
                } else {
                  this._fillStrecthedDataIns(p, idx, fi);
                }
              }
              _fillStrecthedDataIns(p, idx, fi) {
                const i = idx / 4;
                Vec3.copy(this._particleVertexData.position, p.position);
                _tempAttribUV.z = fi;
                Vec3.copy(this._particleVertexData.texcoord, _tempAttribUV);
                Vec3.copy(this._particleVertexData.size, p.size);
                Vec3.copy(this._particleVertexData.rotation, p.rotation);
                this._particleVertexData.color = p.color._val;
                this._particleVertexData.velocity = p.ultimateVelocity;
                this._model.addParticleVertexData(i, this._particleVertexData);
              }
              _fillNormalData(p, idx, fi) {
                if (!this._useInstance) {
                  for (let j = 0; j < 4; ++j) {
                    Vec3.copy(this._particleVertexData.position, p.position);
                    _tempAttribUV.x = _uvs[2 * j];
                    _tempAttribUV.y = _uvs[2 * j + 1];
                    _tempAttribUV.z = fi;
                    Vec3.copy(this._particleVertexData.texcoord, _tempAttribUV);
                    Vec3.copy(this._particleVertexData.size, p.size);
                    Vec3.copy(this._particleVertexData.rotation, p.rotation);
                    this._particleVertexData.color = p.color._val;
                    this._model.addParticleVertexData(idx++, this._particleVertexData);
                  }
                } else {
                  this._fillNormalDataIns(p, idx, fi);
                }
              }
              _fillNormalDataIns(p, idx, fi) {
                const i = idx / 4;
                Vec3.copy(this._particleVertexData.position, p.position);
                _tempAttribUV.z = fi;
                Vec3.copy(this._particleVertexData.texcoord, _tempAttribUV);
                Vec3.copy(this._particleVertexData.size, p.size);
                Vec3.copy(this._particleVertexData.rotation, p.rotation);
                this._particleVertexData.color = p.color._val;
                this._model.addParticleVertexData(i, this._particleVertexData);
              }
              updateVertexAttrib() {
                if (this._renderInfo.renderMode !== RenderMode.Mesh) {
                  return;
                }
                if (this._renderInfo.mesh) {
                  const format = this._renderInfo.mesh.readAttributeFormat(0, AttributeName.ATTR_COLOR);
                  if (format) {
                    let type = Format.RGBA8;
                    for (let i = 0; i < FormatInfos.length; ++i) {
                      if (FormatInfos[i].name === format.name) {
                        type = i;
                        break;
                      }
                    }
                    this._vertAttrs[7] = new Attribute(AttributeName.ATTR_COLOR1, type, true, !this._useInstance ? 0 : 1);
                  } else {
                    const type = Format.RGBA8;
                    this._vertAttrs[7] = new Attribute(AttributeName.ATTR_COLOR1, type, true, !this._useInstance ? 0 : 1);
                  }
                }
              }
              _setVertexAttrib() {
                if (!this._useInstance) {
                  switch (this._renderInfo.renderMode) {
                    case RenderMode.StrecthedBillboard:
                      this._vertAttrs = _vertex_attrs_stretch.slice();
                      break;
                    case RenderMode.Mesh:
                      this._vertAttrs = _vertex_attrs_mesh.slice();
                      break;
                    default:
                      this._vertAttrs = _vertex_attrs.slice();
                  }
                } else {
                  this._setVertexAttribIns();
                }
              }
              _setVertexAttribIns() {
                switch (this._renderInfo.renderMode) {
                  case RenderMode.StrecthedBillboard:
                    this._vertAttrs = _vertex_attrs_stretch_ins.slice();
                    break;
                  case RenderMode.Mesh:
                    this._vertAttrs = _vertex_attrs_mesh_ins.slice();
                    break;
                  default:
                    this._vertAttrs = _vertex_attrs_ins.slice();
                }
              }
              updateMaterialParams() {
                if (!this._particleSystem) {
                  return;
                }
                const ps = this._particleSystem;
                const shareMaterial = ps.sharedMaterial;
                if (shareMaterial != null) {
                  this._renderInfo.mainTexture = shareMaterial.getProperty('mainTexture', 0);
                }
                if (ps.sharedMaterial == null && this._defaultMat == null) {
                  _matInsInfo$1.parent = builtinResMgr.get('default-particle-material');
                  _matInsInfo$1.owner = this._particleSystem;
                  _matInsInfo$1.subModelIdx = 0;
                  this._defaultMat = new MaterialInstance(_matInsInfo$1);
                  _matInsInfo$1.parent = null;
                  _matInsInfo$1.owner = null;
                  _matInsInfo$1.subModelIdx = 0;
                  if (this._renderInfo.mainTexture !== null) {
                    this._defaultMat.setProperty('mainTexture', this._renderInfo.mainTexture);
                  }
                }
                const mat = ps.getMaterialInstance(0) || this._defaultMat;
                if (ps.simulationSpace === Space.World) {
                  this._defines[CC_USE_WORLD_SPACE$1] = true;
                } else {
                  this._defines[CC_USE_WORLD_SPACE$1] = false;
                }
                const pass = mat.passes[0];
                this._uScaleHandle = pass.getHandle('scale');
                this._uLenHandle = pass.getHandle('frameTile_velLenScale');
                this._uNodeRotHandle = pass.getHandle('nodeRotation');
                const renderMode = this._renderInfo.renderMode;
                const vlenScale = this._frameTile_velLenScale;
                if (renderMode === RenderMode.Billboard) {
                  this._defines[CC_RENDER_MODE$1] = RENDER_MODE_BILLBOARD$1;
                } else if (renderMode === RenderMode.StrecthedBillboard) {
                  this._defines[CC_RENDER_MODE$1] = RENDER_MODE_STRETCHED_BILLBOARD$1;
                  vlenScale.z = this._renderInfo.velocityScale;
                  vlenScale.w = this._renderInfo.lengthScale;
                } else if (renderMode === RenderMode.HorizontalBillboard) {
                  this._defines[CC_RENDER_MODE$1] = RENDER_MODE_HORIZONTAL_BILLBOARD$1;
                } else if (renderMode === RenderMode.VerticalBillboard) {
                  this._defines[CC_RENDER_MODE$1] = RENDER_MODE_VERTICAL_BILLBOARD$1;
                } else if (renderMode === RenderMode.Mesh) {
                  this._defines[CC_RENDER_MODE$1] = RENDER_MODE_MESH$1;
                } else {
                  warn(`particle system renderMode ${renderMode} not support.`);
                }
                const textureModule = ps._textureAnimationModule;
                if (textureModule && textureModule.enable) {
                  Vec4.copy(this._tmp_velLenScale, vlenScale);
                  Vec2.set(this._tmp_velLenScale, textureModule.numTilesX, textureModule.numTilesY);
                  pass.setUniform(this._uLenHandle, this._tmp_velLenScale);
                } else {
                  pass.setUniform(this._uLenHandle, vlenScale);
                }
                let enable = false;
                const roationModule = this._particleSystem._rotationOvertimeModule;
                enable = roationModule ? roationModule.enable : false;
                this._defines[ROTATION_OVER_TIME_MODULE_ENABLE$1] = enable;
                this._defines[INSTANCE_PARTICLE$1] = this._useInstance;
                mat.recompileShaders(this._defines);
                if (this._model) {
                  this._model.updateMaterial(mat);
                }
              }
              updateTrailMaterial() {
                if (!this._particleSystem) {
                  return;
                }
                const ps = this._particleSystem;
                const trailModule = ps._trailModule;
                if (trailModule && trailModule.enable) {
                  if (ps.simulationSpace === Space.World || trailModule.space === Space.World) {
                    this._trailDefines[CC_USE_WORLD_SPACE$1] = true;
                  } else {
                    this._trailDefines[CC_USE_WORLD_SPACE$1] = false;
                  }
                  let mat = ps.getMaterialInstance(1);
                  if (mat === null && this._defaultTrailMat === null) {
                    _matInsInfo$1.parent = builtinResMgr.get('default-trail-material');
                    _matInsInfo$1.owner = this._particleSystem;
                    _matInsInfo$1.subModelIdx = 1;
                    this._defaultTrailMat = new MaterialInstance(_matInsInfo$1);
                    _matInsInfo$1.parent = null;
                    _matInsInfo$1.owner = null;
                    _matInsInfo$1.subModelIdx = 0;
                  }
                  mat = mat || this._defaultTrailMat;
                  mat.recompileShaders(this._trailDefines);
                  trailModule.updateMaterial();
                }
              }
              setUseInstance(value) {
                if (this._useInstance === value) {
                  return;
                }
                this._useInstance = value;
                if (this._model) {
                  this._model.useInstance = value;
                  this._model.doDestroy();
                }
                this.updateRenderMode();
              }
            }

            const _tempNodeScale = new Vec4();
            const _tempWorldTrans = new Mat4();
            const _tempVec4 = new Vec4();
            const _world_rot = new Quat();
            const _node_rot = new Quat();
            new Vec3();
            const _sample_num = 32;
            const _sample_interval = 1.0 / _sample_num;
            const CC_USE_WORLD_SPACE = 'CC_USE_WORLD_SPACE';
            const CC_RENDER_MODE = 'CC_RENDER_MODE';
            const RENDER_MODE_BILLBOARD = 0;
            const RENDER_MODE_STRETCHED_BILLBOARD = 1;
            const RENDER_MODE_HORIZONTAL_BILLBOARD = 2;
            const RENDER_MODE_VERTICAL_BILLBOARD = 3;
            const RENDER_MODE_MESH = 4;
            const COLOR_OVER_TIME_MODULE_ENABLE = 'COLOR_OVER_TIME_MODULE_ENABLE';
            const ROTATION_OVER_TIME_MODULE_ENABLE = 'ROTATION_OVER_TIME_MODULE_ENABLE';
            const SIZE_OVER_TIME_MODULE_ENABLE = 'SIZE_OVER_TIME_MODULE_ENABLE';
            const VELOCITY_OVER_TIME_MODULE_ENABLE = 'VELOCITY_OVER_TIME_MODULE_ENABLE';
            const FORCE_OVER_TIME_MODULE_ENABLE = 'FORCE_OVER_TIME_MODULE_ENABLE';
            const TEXTURE_ANIMATION_MODULE_ENABLE = 'TEXTURE_ANIMATION_MODULE_ENABLE';
            const USE_VK_SHADER = 'USE_VK_SHADER';
            const INSTANCE_PARTICLE = 'CC_INSTANCE_PARTICLE';
            const _vert_attr_name = {
              POSITION_STARTTIME: 'a_position_starttime',
              VERT_SIZE_UV: 'a_size_uv',
              VERT_ROTATION_UV: 'a_rotation_uv',
              COLOR: 'a_color',
              DIR_LIFE: 'a_dir_life',
              RANDOM_SEED: 'a_rndSeed',
              VERT_SIZE_FID: 'a_size_fid',
              VERT_ROTATION: 'a_rotation',
              VERT_UV: 'a_uv'
            };
            const _gpu_vert_attr = [new Attribute(_vert_attr_name.POSITION_STARTTIME, Format.RGBA32F), new Attribute(_vert_attr_name.VERT_SIZE_UV, Format.RGBA32F), new Attribute(_vert_attr_name.VERT_ROTATION_UV, Format.RGBA32F), new Attribute(_vert_attr_name.COLOR, Format.RGBA32F), new Attribute(_vert_attr_name.DIR_LIFE, Format.RGBA32F), new Attribute(_vert_attr_name.RANDOM_SEED, Format.R32F)];
            const _gpu_vert_attr_mesh = [new Attribute(_vert_attr_name.POSITION_STARTTIME, Format.RGBA32F), new Attribute(_vert_attr_name.VERT_SIZE_UV, Format.RGBA32F), new Attribute(_vert_attr_name.VERT_ROTATION_UV, Format.RGBA32F), new Attribute(_vert_attr_name.COLOR, Format.RGBA32F), new Attribute(_vert_attr_name.DIR_LIFE, Format.RGBA32F), new Attribute(_vert_attr_name.RANDOM_SEED, Format.R32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD3, Format.RGB32F), new Attribute(AttributeName.ATTR_NORMAL, Format.RGB32F), new Attribute(AttributeName.ATTR_COLOR1, Format.RGBA8, true)];
            const _gpu_vert_attr_ins = [new Attribute(_vert_attr_name.POSITION_STARTTIME, Format.RGBA32F, false, 0, true), new Attribute(_vert_attr_name.VERT_SIZE_FID, Format.RGBA32F, false, 0, true), new Attribute(_vert_attr_name.VERT_ROTATION, Format.RGB32F, false, 0, true), new Attribute(_vert_attr_name.COLOR, Format.RGBA32F, false, 0, true), new Attribute(_vert_attr_name.DIR_LIFE, Format.RGBA32F, false, 0, true), new Attribute(_vert_attr_name.RANDOM_SEED, Format.R32F, false, 0, true), new Attribute(_vert_attr_name.VERT_UV, Format.RGB32F, false, 1)];
            const _gpu_vert_attr_mesh_ins = [new Attribute(_vert_attr_name.POSITION_STARTTIME, Format.RGBA32F, false, 0, true), new Attribute(_vert_attr_name.VERT_SIZE_FID, Format.RGBA32F, false, 0, true), new Attribute(_vert_attr_name.VERT_ROTATION, Format.RGB32F, false, 0, true), new Attribute(_vert_attr_name.COLOR, Format.RGBA32F, false, 0, true), new Attribute(_vert_attr_name.DIR_LIFE, Format.RGBA32F, false, 0, true), new Attribute(_vert_attr_name.RANDOM_SEED, Format.R32F, false, 0, true), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGB32F, false, 1), new Attribute(AttributeName.ATTR_TEX_COORD3, Format.RGB32F, false, 1), new Attribute(AttributeName.ATTR_NORMAL, Format.RGB32F, false, 1), new Attribute(AttributeName.ATTR_COLOR1, Format.RGBA8, true, 1)];
            const _matInsInfo = {
              parent: null,
              owner: null,
              subModelIdx: 0
            };
            class ParticleSystemRendererGPU extends ParticleSystemRendererBase {
              constructor(info) {
                super(info);
                this._defines = void 0;
                this._frameTile_velLenScale = void 0;
                this._unifrom_velLenScale = void 0;
                this._tmp_velLenScale = void 0;
                this._node_scale = void 0;
                this._vertAttrs = [];
                this._defaultMat = null;
                this._particleNum = 0;
                this._tempParticle = null;
                this._colorTexture = null;
                this._forceTexture = null;
                this._velocityTexture = null;
                this._rotationTexture = null;
                this._sizeTexture = null;
                this._animTexture = null;
                this._colorData = null;
                this._forceData = null;
                this._velocityData = null;
                this._rotationData = null;
                this._sizeData = null;
                this._animData = null;
                this._uTimeHandle = 0;
                this._uRotHandle = 0;
                this._uNodeRotHandle = 0;
                this._alignSpace = AlignmentSpace.View;
                this._inited = false;
                this._frameTile_velLenScale = new Vec4(1, 1, 0, 0);
                this._unifrom_velLenScale = this._frameTile_velLenScale.clone();
                this._tmp_velLenScale = this._frameTile_velLenScale.clone();
                this._node_scale = new Vec3();
                this._defines = {
                  CC_USE_WORLD_SPACE: true,
                  CC_USE_BILLBOARD: true,
                  CC_USE_STRETCHED_BILLBOARD: false,
                  CC_USE_HORIZONTAL_BILLBOARD: false,
                  CC_USE_VERTICAL_BILLBOARD: false,
                  COLOR_OVER_TIME_MODULE_ENABLE: false
                };
                this._tempParticle = new Particle(null);
                this._particleNum = 0;
              }
              onInit(ps) {
                super.onInit(ps);
                this._setVertexAttrib();
                this._initModel();
                this.updateMaterialParams();
                this.setVertexAttributes();
                this._inited = true;
              }
              updateRenderMode() {
                this._setVertexAttrib();
                this.updateMaterialParams();
                this.setVertexAttributes();
              }
              setVertexAttributes() {
                super.setVertexAttributes();
                this._model.constructAttributeIndex();
              }
              clear() {
                super.clear();
                this._particleNum = 0;
                this.updateRenderData();
              }
              onDestroy() {
                super.onDestroy();
                if (this._forceTexture) this._forceTexture.destroy();
                if (this._velocityTexture) this._velocityTexture.destroy();
                if (this._colorTexture) this._colorTexture.destroy();
                if (this._sizeTexture) this._sizeTexture.destroy();
                if (this._rotationTexture) this._rotationTexture.destroy();
                if (this._animTexture) this._animTexture.destroy();
                this._forceData = null;
                this._velocityData = null;
                this._colorData = null;
                this._sizeData = null;
                this._rotationData = null;
                this._animData = null;
              }
              enableModule(name, val, pm) {
                var _this$_particleSystem;
                const mat = ((_this$_particleSystem = this._particleSystem) === null || _this$_particleSystem === void 0 ? void 0 : _this$_particleSystem.getMaterialInstance(0)) || this._defaultMat;
                if (!mat) {
                  return;
                }
                this.initShaderUniform(mat);
                mat.recompileShaders(this._defines);
                if (this._model) {
                  this._model.setSubModelMaterial(0, mat);
                }
              }
              getFreeParticle() {
                var _this$_particleSystem2;
                if (this._particleSystem && this._particleNum >= ((_this$_particleSystem2 = this._particleSystem) === null || _this$_particleSystem2 === void 0 ? void 0 : _this$_particleSystem2.capacity)) {
                  return null;
                }
                return this._tempParticle;
              }
              setNewParticle(p) {
                if (!this._particleSystem) {
                  return;
                }
                this._model.addGPUParticleVertexData(p, this._particleNum, this._particleSystem.time);
                this._particleNum++;
              }
              getDefaultMaterial() {
                return this._defaultMat;
              }
              updateRotation(pass) {
                if (pass) {
                  this.doUpdateRotation(pass);
                }
              }
              doUpdateRotation(pass) {
                const mode = this._renderInfo.renderMode;
                if (mode !== RenderMode.Mesh && this._alignSpace === AlignmentSpace.View) {
                  return;
                }
                if (this._alignSpace === AlignmentSpace.Local) {
                  var _this$_particleSystem3;
                  (_this$_particleSystem3 = this._particleSystem) === null || _this$_particleSystem3 === void 0 ? void 0 : _this$_particleSystem3.node.getRotation(_node_rot);
                } else if (this._alignSpace === AlignmentSpace.World) {
                  var _this$_particleSystem4;
                  (_this$_particleSystem4 = this._particleSystem) === null || _this$_particleSystem4 === void 0 ? void 0 : _this$_particleSystem4.node.getWorldRotation(_node_rot);
                } else if (this._alignSpace === AlignmentSpace.View) {
                  var _this$_particleSystem5, _this$_particleSystem6;
                  _node_rot.set(0.0, 0.0, 0.0, 1.0);
                  const cameraLst = (_this$_particleSystem5 = this._particleSystem) === null || _this$_particleSystem5 === void 0 ? void 0 : (_this$_particleSystem6 = _this$_particleSystem5.node.scene.renderScene) === null || _this$_particleSystem6 === void 0 ? void 0 : _this$_particleSystem6.cameras;
                  if (cameraLst !== undefined && this._particleSystem) {
                    for (let i = 0; i < (cameraLst === null || cameraLst === void 0 ? void 0 : cameraLst.length); ++i) {
                      const camera = cameraLst[i];
                      const checkCamera = (camera.visibility & this._particleSystem.node.layer) === this._particleSystem.node.layer ;
                      if (checkCamera) {
                        Quat.fromViewUp(_node_rot, camera.forward);
                        break;
                      }
                    }
                  }
                } else {
                  _node_rot.set(0.0, 0.0, 0.0, 1.0);
                }
                pass.setUniform(this._uNodeRotHandle, _node_rot);
              }
              updateScale(pass) {
                if (pass) {
                  this.doUpdateScale(pass);
                }
              }
              doUpdateScale(pass) {
                var _this$_particleSystem7;
                const nodeScale = this._node_scale;
                switch ((_this$_particleSystem7 = this._particleSystem) === null || _this$_particleSystem7 === void 0 ? void 0 : _this$_particleSystem7.scaleSpace) {
                  case Space.Local:
                    this._particleSystem.node.getScale(nodeScale);
                    break;
                  case Space.World:
                    this._particleSystem.node.getWorldScale(nodeScale);
                    break;
                }
                pass.setUniform(pass.getHandle('scale'), _tempNodeScale.set(nodeScale.x, nodeScale.y, nodeScale.z));
              }
              updateParticles(dt) {
                if (!this._particleSystem) {
                  return this._particleNum;
                }
                this._particleNum = this._model.updateGPUParticles(this._particleNum, this._particleSystem.time, dt);
                this.updateShaderUniform(dt);
                this._model.enabled = this._particleNum > 0;
                return this._particleNum;
              }
              updateRenderData() {}
              beforeRender() {
                this._model.updateIA(this._particleNum);
              }
              updateAlignSpace(space) {
                this._alignSpace = space;
              }
              updateShaderUniform(dt) {
                if (!this._particleSystem) {
                  return;
                }
                const mat = this._particleSystem.getMaterialInstance(0) || this._defaultMat;
                if (!mat) {
                  return;
                }
                const pass = mat.passes[0];
                _tempVec4.x = this._particleSystem.time;
                _tempVec4.y = dt;
                pass.setUniform(this._uTimeHandle, _tempVec4);
                this._particleSystem.node.getWorldRotation(_world_rot);
                pass.setUniform(this._uRotHandle, _world_rot);
                this.doUpdateRotation(pass);
              }
              initShaderUniform(mat) {
                var _this$_particleSystem8, _this$_particleSystem9, _this$_particleSystem10, _this$_particleSystem11, _this$_particleSystem12, _this$_particleSystem13;
                const pass = mat.passes[0];
                this._uTimeHandle = pass.getHandle('u_timeDelta');
                this._uRotHandle = pass.getHandle('u_worldRot');
                this._uNodeRotHandle = pass.getHandle('nodeRotation');
                this.doUpdateScale(pass);
                pass.setUniform(pass.getHandle('frameTile_velLenScale'), this._unifrom_velLenScale);
                _tempVec4.x = _sample_num;
                _tempVec4.y = _sample_interval;
                pass.setUniform(pass.getHandle('u_sampleInfo'), _tempVec4);
                let enable = false;
                const forceModule = (_this$_particleSystem8 = this._particleSystem) === null || _this$_particleSystem8 === void 0 ? void 0 : _this$_particleSystem8._forceOvertimeModule;
                enable = forceModule ? forceModule.enable : false;
                this._defines[FORCE_OVER_TIME_MODULE_ENABLE] = enable;
                if (enable) {
                  const packed = packCurveRangeXYZ(this._forceTexture, this._forceData, _sample_num, forceModule.x, forceModule.y, forceModule.z);
                  this._forceTexture = packed.texture;
                  this._forceData = packed.texdata;
                  const handle = pass.getHandle('force_over_time_tex0');
                  const binding = Pass.getBindingFromHandle(handle);
                  pass.bindSampler(binding, this._forceTexture.getGFXSampler());
                  pass.bindTexture(binding, this._forceTexture.getGFXTexture());
                  const spaceHandle = pass.getHandle('u_force_space');
                  pass.setUniform(spaceHandle, forceModule.space);
                  const modeHandle = pass.getHandle('u_force_mode');
                  pass.setUniform(modeHandle, this._forceTexture.height);
                }
                const velocityModule = (_this$_particleSystem9 = this._particleSystem) === null || _this$_particleSystem9 === void 0 ? void 0 : _this$_particleSystem9._velocityOvertimeModule;
                enable = velocityModule ? velocityModule.enable : false;
                this._defines[VELOCITY_OVER_TIME_MODULE_ENABLE] = enable;
                if (enable) {
                  const packed = packCurveRangeXYZW(this._velocityTexture, this._velocityData, _sample_num, velocityModule.x, velocityModule.y, velocityModule.z, velocityModule.speedModifier);
                  this._velocityTexture = packed.texture;
                  this._velocityData = packed.texdata;
                  const handle = pass.getHandle('velocity_over_time_tex0');
                  const binding = Pass.getBindingFromHandle(handle);
                  pass.bindSampler(binding, this._velocityTexture.getGFXSampler());
                  pass.bindTexture(binding, this._velocityTexture.getGFXTexture());
                  const spaceHandle = pass.getHandle('u_velocity_space');
                  pass.setUniform(spaceHandle, velocityModule.space);
                  const modeHandle = pass.getHandle('u_velocity_mode');
                  pass.setUniform(modeHandle, this._velocityTexture.height);
                }
                const colorModule = (_this$_particleSystem10 = this._particleSystem) === null || _this$_particleSystem10 === void 0 ? void 0 : _this$_particleSystem10._colorOverLifetimeModule;
                enable = colorModule ? colorModule.enable : false;
                this._defines[COLOR_OVER_TIME_MODULE_ENABLE] = enable;
                if (enable) {
                  const packed = packGradientRange(this._colorTexture, this._colorData, _sample_num, colorModule.color);
                  this._colorTexture = packed.texture;
                  this._colorData = packed.texdata;
                  const handle = pass.getHandle('color_over_time_tex0');
                  const binding = Pass.getBindingFromHandle(handle);
                  pass.bindSampler(binding, this._colorTexture.getGFXSampler());
                  pass.bindTexture(binding, this._colorTexture.getGFXTexture());
                  const modeHandle = pass.getHandle('u_color_mode');
                  pass.setUniform(modeHandle, this._colorTexture.height);
                }
                const roationModule = (_this$_particleSystem11 = this._particleSystem) === null || _this$_particleSystem11 === void 0 ? void 0 : _this$_particleSystem11._rotationOvertimeModule;
                enable = roationModule ? roationModule.enable : false;
                this._defines[ROTATION_OVER_TIME_MODULE_ENABLE] = enable;
                if (enable) {
                  let packed;
                  if (roationModule.separateAxes) {
                    packed = packCurveRangeXYZ(this._rotationTexture, this._rotationData, _sample_num, roationModule.x, roationModule.y, roationModule.z);
                  } else {
                    packed = packCurveRangeZ(this._rotationTexture, this._rotationData, _sample_num, roationModule.z);
                  }
                  this._rotationTexture = packed.texture;
                  this._rotationData = packed.texdata;
                  if (this._rotationTexture) {
                    const handle = pass.getHandle('rotation_over_time_tex0');
                    const binding = Pass.getBindingFromHandle(handle);
                    pass.bindSampler(binding, this._rotationTexture.getGFXSampler());
                    pass.bindTexture(binding, this._rotationTexture.getGFXTexture());
                    const modeHandle = pass.getHandle('u_rotation_mode');
                    pass.setUniform(modeHandle, this._rotationTexture.height);
                  }
                }
                const sizeModule = (_this$_particleSystem12 = this._particleSystem) === null || _this$_particleSystem12 === void 0 ? void 0 : _this$_particleSystem12._sizeOvertimeModule;
                enable = sizeModule ? sizeModule.enable : false;
                this._defines[SIZE_OVER_TIME_MODULE_ENABLE] = enable;
                if (enable) {
                  let packed;
                  if (sizeModule.separateAxes) {
                    packed = packCurveRangeXYZ(this._sizeTexture, this._sizeData, _sample_num, sizeModule.x, sizeModule.y, sizeModule.z, true);
                  } else {
                    packed = packCurveRangeN(this._sizeTexture, this._sizeData, _sample_num, sizeModule.size, true);
                  }
                  this._sizeTexture = packed.texture;
                  this._sizeData = packed.texdata;
                  if (this._sizeTexture) {
                    const handle = pass.getHandle('size_over_time_tex0');
                    const binding = Pass.getBindingFromHandle(handle);
                    pass.bindSampler(binding, this._sizeTexture.getGFXSampler());
                    pass.bindTexture(binding, this._sizeTexture.getGFXTexture());
                    const modeHandle = pass.getHandle('u_size_mode');
                    pass.setUniform(modeHandle, this._sizeTexture.height);
                  }
                }
                const textureModule = (_this$_particleSystem13 = this._particleSystem) === null || _this$_particleSystem13 === void 0 ? void 0 : _this$_particleSystem13._textureAnimationModule;
                enable = textureModule ? textureModule.enable : false;
                this._defines[TEXTURE_ANIMATION_MODULE_ENABLE] = enable;
                if (enable) {
                  const packed = packCurveRangeXY(this._animTexture, this._animData, _sample_num, textureModule.startFrame, textureModule.frameOverTime, true);
                  this._animTexture = packed.texture;
                  this._animData = packed.texdata;
                  const handle = pass.getHandle('texture_animation_tex0');
                  const binding = Pass.getBindingFromHandle(handle);
                  pass.bindSampler(binding, this._animTexture.getGFXSampler());
                  pass.bindTexture(binding, this._animTexture.getGFXTexture());
                  const infoHandle = pass.getHandle('u_anim_info');
                  _tempVec4.x = this._animTexture.height;
                  _tempVec4.y = textureModule.numTilesX * textureModule.numTilesY;
                  _tempVec4.z = textureModule.cycleCount;
                  pass.setUniform(infoHandle, _tempVec4);
                }
                this._defines[USE_VK_SHADER] = deviceManager.gfxDevice.gfxAPI === API.VULKAN;
                this._defines[INSTANCE_PARTICLE] = this._useInstance;
              }
              getParticleCount() {
                return this._particleNum;
              }
              onMaterialModified(index, material) {
                if (!this._inited) {
                  return;
                }
                this.updateMaterialParams();
              }
              onRebuildPSO(index, material) {
                if (this._model && index === 0) {
                  this._model.setSubModelMaterial(0, material);
                }
              }
              updateVertexAttrib() {
                if (this._renderInfo.renderMode !== RenderMode.Mesh) {
                  return;
                }
                if (this._renderInfo.mesh) {
                  const format = this._renderInfo.mesh.readAttributeFormat(0, AttributeName.ATTR_COLOR);
                  if (format) {
                    let type = Format.RGBA8;
                    for (let i = 0; i < FormatInfos.length; ++i) {
                      if (FormatInfos[i].name === format.name) {
                        type = i;
                        break;
                      }
                    }
                    this._vertAttrs[9] = new Attribute(AttributeName.ATTR_COLOR1, type, true, !this._useInstance ? 0 : 1);
                  } else {
                    const type = Format.RGBA8;
                    this._vertAttrs[9] = new Attribute(AttributeName.ATTR_COLOR1, type, true, !this._useInstance ? 0 : 1);
                  }
                }
              }
              _setVertexAttrib() {
                if (!this._useInstance) {
                  switch (this._renderInfo.renderMode) {
                    case RenderMode.StrecthedBillboard:
                      this._vertAttrs = _gpu_vert_attr.slice();
                      break;
                    case RenderMode.Mesh:
                      this._vertAttrs = _gpu_vert_attr_mesh.slice();
                      break;
                    default:
                      this._vertAttrs = _gpu_vert_attr.slice();
                  }
                } else {
                  this._setVertexAttribIns();
                }
              }
              _setVertexAttribIns() {
                switch (this._renderInfo.renderMode) {
                  case RenderMode.StrecthedBillboard:
                    this._vertAttrs = _gpu_vert_attr_ins.slice();
                    break;
                  case RenderMode.Mesh:
                    this._vertAttrs = _gpu_vert_attr_mesh_ins.slice();
                    break;
                  default:
                    this._vertAttrs = _gpu_vert_attr_ins.slice();
                }
              }
              updateMaterialParams() {
                if (!this._particleSystem) {
                  return;
                }
                const ps = this._particleSystem;
                const shareMaterial = ps.sharedMaterial;
                if (shareMaterial !== null) {
                  this._renderInfo.mainTexture = shareMaterial.getProperty('mainTexture', 0);
                }
                if (ps.sharedMaterial == null && this._defaultMat == null) {
                  _matInsInfo.parent = builtinResMgr.get('default-particle-gpu-material');
                  _matInsInfo.owner = ps;
                  _matInsInfo.subModelIdx = 0;
                  this._defaultMat = new MaterialInstance(_matInsInfo);
                  _matInsInfo.parent = null;
                  _matInsInfo.owner = null;
                  _matInsInfo.subModelIdx = 0;
                  if (this._renderInfo.mainTexture !== null) {
                    this._defaultMat.setProperty('mainTexture', this._renderInfo.mainTexture);
                  }
                }
                const mat = ps.getMaterialInstance(0) || this._defaultMat;
                ps.node.getWorldMatrix(_tempWorldTrans);
                if (ps.simulationSpace === Space.World) {
                  this._defines[CC_USE_WORLD_SPACE] = true;
                } else {
                  this._defines[CC_USE_WORLD_SPACE] = false;
                }
                const renderMode = this._renderInfo.renderMode;
                if (renderMode === RenderMode.Billboard) {
                  this._defines[CC_RENDER_MODE] = RENDER_MODE_BILLBOARD;
                } else if (renderMode === RenderMode.StrecthedBillboard) {
                  this._defines[CC_RENDER_MODE] = RENDER_MODE_STRETCHED_BILLBOARD;
                  this._frameTile_velLenScale.z = this._renderInfo.velocityScale;
                  this._frameTile_velLenScale.w = this._renderInfo.lengthScale;
                } else if (renderMode === RenderMode.HorizontalBillboard) {
                  this._defines[CC_RENDER_MODE] = RENDER_MODE_HORIZONTAL_BILLBOARD;
                } else if (renderMode === RenderMode.VerticalBillboard) {
                  this._defines[CC_RENDER_MODE] = RENDER_MODE_VERTICAL_BILLBOARD;
                } else if (renderMode === RenderMode.Mesh) {
                  this._defines[CC_RENDER_MODE] = RENDER_MODE_MESH;
                } else {
                  warn(`particle system renderMode ${renderMode} not support.`);
                }
                const textureModule = ps._textureAnimationModule;
                if (textureModule && textureModule.enable) {
                  Vec2.set(this._frameTile_velLenScale, textureModule.numTilesX, textureModule.numTilesY);
                  Vec4.copy(this._unifrom_velLenScale, this._frameTile_velLenScale);
                } else {
                  this._tmp_velLenScale.z = this._frameTile_velLenScale.z;
                  this._tmp_velLenScale.w = this._frameTile_velLenScale.w;
                  Vec4.copy(this._unifrom_velLenScale, this._tmp_velLenScale);
                }
                this.initShaderUniform(mat);
                mat.recompileShaders(this._defines);
                if (this._model) {
                  this._model.updateMaterial(mat);
                }
              }
              setUseInstance(value) {
                if (this._useInstance === value) {
                  return;
                }
                this._useInstance = value;
                if (this._model) {
                  this._model.useInstance = value;
                  this._model.doDestroy();
                }
                this.updateRenderMode();
              }
              getNoisePreview(out, width, height) {}
            }

            var _dec$3, _dec2$3, _dec3$3, _dec4$3, _dec5$3, _dec6$3, _dec7$3, _dec8$3, _dec9$3, _class$2, _class2$3, _initializer$3, _initializer2$3, _initializer3$3, _initializer4$3, _initializer5$3, _initializer6$3, _initializer7$3, _initializer8$3, _initializer9$3, _class3$2;
            function isSupportGPUParticle() {
              const device = director.root.device;
              if (device.capabilities.maxVertexTextureUnits >= 8 && device.getFormatFeatures(Format.RGBA32F) & (FormatFeatureBit.RENDER_TARGET | FormatFeatureBit.SAMPLED_TEXTURE)) {
                return true;
              }
              legacyCC.warn('Maybe the device has restrictions on vertex textures or does not support float textures.');
              return false;
            }
            let ParticleSystemRenderer = (_dec$3 = ccclass$1('cc.ParticleSystemRenderer'), _dec2$3 = type$1(RenderMode), _dec3$3 = type$1(RenderMode), _dec4$3 = type$1(Mesh), _dec5$3 = type$1(Material), _dec6$3 = type$1(Material), _dec7$3 = type$1(Material), _dec8$3 = type$1(Material), _dec9$3 = type$1(AlignmentSpace), _dec$3(_class$2 = (_class2$3 = (_class3$2 = class ParticleSystemRenderer {
              constructor() {
                this._renderMode = _initializer$3 && _initializer$3();
                this._velocityScale = _initializer2$3 && _initializer2$3();
                this._lengthScale = _initializer3$3 && _initializer3$3();
                this._mesh = _initializer4$3 && _initializer4$3();
                this._cpuMaterial = _initializer5$3 && _initializer5$3();
                this._gpuMaterial = _initializer6$3 && _initializer6$3();
                this._mainTexture = _initializer7$3 && _initializer7$3();
                this._useGPU = _initializer8$3 && _initializer8$3();
                this._alignSpace = _initializer9$3 && _initializer9$3();
                this._particleSystem = null;
              }
              get renderMode() {
                return this._renderMode;
              }
              set renderMode(val) {
                if (this._renderMode === val) {
                  return;
                }
                this._renderMode = val;
                if (this._particleSystem) {
                  this._particleSystem.processor.updateRenderMode();
                }
              }
              get velocityScale() {
                return this._velocityScale;
              }
              set velocityScale(val) {
                this._velocityScale = val;
                if (this._particleSystem) {
                  this._particleSystem.processor.updateMaterialParams();
                }
              }
              get lengthScale() {
                return this._lengthScale;
              }
              set lengthScale(val) {
                this._lengthScale = val;
                if (this._particleSystem) {
                  this._particleSystem.processor.updateMaterialParams();
                }
              }
              get mesh() {
                return this._mesh;
              }
              set mesh(val) {
                this._mesh = val;
                if (this._particleSystem) {
                  this._particleSystem.processor.setVertexAttributes();
                }
              }
              get particleMaterial() {
                if (!this._particleSystem) {
                  return null;
                }
                return this._particleSystem.getSharedMaterial(0);
              }
              set particleMaterial(val) {
                if (this._particleSystem) {
                  this._particleSystem.setSharedMaterial(val, 0);
                }
              }
              get cpuMaterial() {
                return this._cpuMaterial;
              }
              set cpuMaterial(val) {
                if (val === null) {
                  return;
                } else {
                  const effectName = val.effectName;
                  if (effectName.indexOf('particle') === -1 || effectName.indexOf('particle-gpu') !== -1) {
                    warnID(6035);
                    return;
                  }
                }
                this._cpuMaterial = val;
                this.particleMaterial = this._cpuMaterial;
              }
              get gpuMaterial() {
                return this._gpuMaterial;
              }
              set gpuMaterial(val) {
                if (val === null) {
                  return;
                } else {
                  const effectName = val.effectName;
                  if (effectName.indexOf('particle-gpu') === -1) {
                    warnID(6035);
                    return;
                  }
                }
                this._gpuMaterial = val;
                this.particleMaterial = this._gpuMaterial;
              }
              get trailMaterial() {
                if (!this._particleSystem) {
                  return null;
                }
                return this._particleSystem.getSharedMaterial(1);
              }
              set trailMaterial(val) {
                if (this._particleSystem) {
                  this._particleSystem.setSharedMaterial(val, 1);
                }
              }
              get mainTexture() {
                return this._mainTexture;
              }
              set mainTexture(val) {
                this._mainTexture = val;
              }
              get useGPU() {
                return this._useGPU;
              }
              set useGPU(val) {
                if (this._useGPU === val) {
                  return;
                }
                if (!isSupportGPUParticle()) {
                  this._useGPU = false;
                } else {
                  this._useGPU = val;
                }
                this._switchProcessor();
              }
              get alignSpace() {
                return this._alignSpace;
              }
              set alignSpace(val) {
                this._alignSpace = val;
                this._particleSystem.processor.updateAlignSpace(this._alignSpace);
              }
              create(ps) {
                if (this._particleSystem === null) {
                  this._particleSystem = ps;
                } else if (this._particleSystem !== ps) {
                  errorID(6033);
                }
              }
              onInit(ps) {
                this.create(ps);
                const useGPU = this._useGPU && isSupportGPUParticle();
                if (!this._particleSystem.processor) {
                  this._particleSystem.processor = useGPU ? new ParticleSystemRendererGPU(this) : new ParticleSystemRendererCPU(this);
                  this._particleSystem.processor.updateAlignSpace(this.alignSpace);
                  this._particleSystem.processor.onInit(ps);
                } else {
                  errorID(6034);
                }
                if (!useGPU) {
                  if (this.particleMaterial && this.particleMaterial.effectName.indexOf('particle-gpu') !== -1) {
                    this.particleMaterial = null;
                    warnID(6035);
                  }
                  this.cpuMaterial = this.particleMaterial;
                } else {
                  this.gpuMaterial = this.particleMaterial;
                }
              }
              _switchProcessor() {
                if (!this._particleSystem) {
                  return;
                }
                if (this._particleSystem.processor) {
                  this._particleSystem.processor.detachFromScene();
                  this._particleSystem.processor.clear();
                  this._particleSystem.processor = null;
                }
                const useGPU = this._useGPU && isSupportGPUParticle();
                if (!useGPU && this.cpuMaterial) {
                  this.particleMaterial = this.cpuMaterial;
                }
                if (useGPU && this.gpuMaterial) {
                  this.particleMaterial = this.gpuMaterial;
                }
                this._particleSystem.processor = useGPU ? new ParticleSystemRendererGPU(this) : new ParticleSystemRendererCPU(this);
                this._particleSystem.processor.updateAlignSpace(this.alignSpace);
                this._particleSystem.processor.onInit(this._particleSystem);
                this._particleSystem.processor.onEnable();
                this._particleSystem.bindModule();
              }
            }, _class3$2.AlignmentSpace = AlignmentSpace, _class3$2), (_applyDecoratedDescriptor(_class2$3.prototype, "renderMode", [_dec2$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "renderMode"), _class2$3.prototype), _initializer$3 = applyDecoratedInitializer(_class2$3.prototype, "_renderMode", [_dec3$3, serializable$1], function () {
              return RenderMode.Billboard;
            }), _initializer2$3 = applyDecoratedInitializer(_class2$3.prototype, "_velocityScale", [serializable$1], function () {
              return 1;
            }), _initializer3$3 = applyDecoratedInitializer(_class2$3.prototype, "_lengthScale", [serializable$1], function () {
              return 1;
            }), _initializer4$3 = applyDecoratedInitializer(_class2$3.prototype, "_mesh", [serializable$1], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2$3.prototype, "mesh", [_dec4$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "mesh"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "particleMaterial", [_dec5$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "particleMaterial"), _class2$3.prototype), _applyDecoratedDescriptor(_class2$3.prototype, "cpuMaterial", [_dec6$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "cpuMaterial"), _class2$3.prototype), _initializer5$3 = applyDecoratedInitializer(_class2$3.prototype, "_cpuMaterial", [serializable$1], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2$3.prototype, "gpuMaterial", [_dec7$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "gpuMaterial"), _class2$3.prototype), _initializer6$3 = applyDecoratedInitializer(_class2$3.prototype, "_gpuMaterial", [serializable$1], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2$3.prototype, "trailMaterial", [_dec8$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "trailMaterial"), _class2$3.prototype), _initializer7$3 = applyDecoratedInitializer(_class2$3.prototype, "_mainTexture", [serializable$1], function () {
              return null;
            }), _initializer8$3 = applyDecoratedInitializer(_class2$3.prototype, "_useGPU", [serializable$1], function () {
              return false;
            }), _applyDecoratedDescriptor(_class2$3.prototype, "alignSpace", [_dec9$3], Object.getOwnPropertyDescriptor(_class2$3.prototype, "alignSpace"), _class2$3.prototype), _initializer9$3 = applyDecoratedInitializer(_class2$3.prototype, "_alignSpace", [serializable$1], function () {
              return AlignmentSpace.View;
            })), _class2$3)) || _class$2);

            var _dec$2, _dec2$2, _dec3$2, _dec4$2, _dec5$2, _dec6$2, _dec7$2, _dec8$2, _dec9$2, _class2$2, _class3$1, _initializer$2, _initializer2$2, _initializer3$2, _initializer4$2, _initializer5$2, _initializer6$2, _initializer7$2, _initializer8$2, _initializer9$2, _initializer10$2, _initializer11$2, _initializer12$2, _initializer13$2;
            const PRE_TRIANGLE_INDEX = 1;
            const NEXT_TRIANGLE_INDEX = 1 << 2;
            const DIRECTION_THRESHOLD = Math.cos(toRadian(100));
            const _temp_trailEle = {
              position: new Vec3(),
              velocity: new Vec3()
            };
            const _temp_quat = new Quat();
            const _temp_vec3 = new Vec3();
            const _temp_vec3_1 = new Vec3();
            const _temp_color = new Color();
            class TrailSegment {
              constructor(maxTrailElementNum) {
                this.start = void 0;
                this.end = void 0;
                this.trailElements = void 0;
                this.start = -1;
                this.end = -1;
                this.trailElements = [];
                while (maxTrailElementNum--) {
                  this.trailElements.push({
                    position: new Vec3(),
                    lifetime: 0,
                    width: 0,
                    velocity: new Vec3(),
                    direction: 0,
                    color: new Color()
                  });
                }
              }
              getElement(idx) {
                if (this.start === -1) {
                  return null;
                }
                if (idx < 0) {
                  idx = (idx + this.trailElements.length) % this.trailElements.length;
                }
                if (idx >= this.trailElements.length) {
                  idx %= this.trailElements.length;
                }
                return this.trailElements[idx];
              }
              addElement() {
                if (this.trailElements.length === 0) {
                  return null;
                }
                if (this.start === -1) {
                  this.start = 0;
                  this.end = 1;
                  return this.trailElements[0];
                }
                if (this.start === this.end) {
                  this.trailElements.splice(this.end, 0, {
                    position: new Vec3(),
                    lifetime: 0,
                    width: 0,
                    velocity: new Vec3(),
                    direction: 0,
                    color: new Color()
                  });
                  this.start++;
                  this.start %= this.trailElements.length;
                }
                const newEleLoc = this.end++;
                this.end %= this.trailElements.length;
                return this.trailElements[newEleLoc];
              }
              iterateElement(target, f, p, dt) {
                const end = this.start >= this.end ? this.end + this.trailElements.length : this.end;
                for (let i = this.start; i < end; i++) {
                  if (f(target, this.trailElements[i % this.trailElements.length], p, dt)) {
                    this.start++;
                    this.start %= this.trailElements.length;
                  }
                }
                if (this.start === end) {
                  this.start = -1;
                  this.end = -1;
                }
              }
              count() {
                if (this.start < this.end) {
                  return this.end - this.start;
                } else {
                  return this.trailElements.length + this.end - this.start;
                }
              }
              clear() {
                this.start = -1;
                this.end = -1;
              }
            }
            let TrailModule = (_dec$2 = ccclass$1('cc.TrailModule'), _dec2$2 = type$1(TrailMode), _dec3$2 = type$1(CurveRange), _dec4$2 = type$1(Space), _dec5$2 = type$1(TextureMode), _dec6$2 = type$1(CurveRange), _dec7$2 = type$1(GradientRange), _dec8$2 = type$1(GradientRange), _dec9$2 = type$1(Space), _dec$2(_class2$2 = (_class3$1 = class TrailModule {
              get enable() {
                return this._enable;
              }
              set enable(val) {
                if (val === this._enable && this._trailModel) {
                  return;
                }
                if (val && !this._enable) {
                  this._enable = val;
                  if (this._particleSystem.processor) this._particleSystem.processor.updateTrailMaterial();
                }
                if (val && !this._trailModel) {
                  this._createModel();
                  this.rebuild();
                }
                this._enable = val;
                if (this._trailModel) {
                  this._trailModel.enabled = val;
                }
                if (val) this.onEnable();else this.onDisable();
              }
              get minParticleDistance() {
                return this._minParticleDistance;
              }
              set minParticleDistance(val) {
                this._minParticleDistance = val;
                this._minSquaredDistance = val * val;
              }
              get space() {
                return this._space;
              }
              set space(val) {
                this._space = val;
                const ps = this._particleSystem;
                if (ps && ps.processor) {
                  ps.processor.updateTrailMaterial();
                }
              }
              getModel() {
                return this._trailModel;
              }
              get inited() {
                return this._inited;
              }
              constructor() {
                this._enable = _initializer$2 && _initializer$2();
                this.mode = _initializer2$2 && _initializer2$2();
                this.lifeTime = _initializer3$2 && _initializer3$2();
                this._minParticleDistance = _initializer4$2 && _initializer4$2();
                this.existWithParticles = _initializer5$2 && _initializer5$2();
                this.textureMode = _initializer6$2 && _initializer6$2();
                this.widthFromParticle = _initializer7$2 && _initializer7$2();
                this.widthRatio = _initializer8$2 && _initializer8$2();
                this.colorFromParticle = _initializer9$2 && _initializer9$2();
                this.colorOverTrail = _initializer10$2 && _initializer10$2();
                this.colorOvertime = _initializer11$2 && _initializer11$2();
                this._space = _initializer12$2 && _initializer12$2();
                this._particleSystem = _initializer13$2 && _initializer13$2();
                this._minSquaredDistance = 0;
                this._vertSize = void 0;
                this._trailNum = 0;
                this._trailLifetime = 0;
                this.vbOffset = 0;
                this.ibOffset = 0;
                this._trailSegments = null;
                this._particleTrail = void 0;
                this._trailModel = null;
                this._subMeshData = null;
                this._vertAttrs = void 0;
                this._vbF32 = null;
                this._vbUint32 = null;
                this._iBuffer = null;
                this._needTransform = false;
                this._material = null;
                this._psTransform = new Mat4();
                this._iaVertCount = 0;
                this._iaIndexCount = 0;
                this._inited = void 0;
                this._vertAttrs = [new Attribute(AttributeName.ATTR_POSITION, Format.RGB32F), new Attribute(AttributeName.ATTR_TEX_COORD, Format.RGBA32F), new Attribute(AttributeName.ATTR_TEX_COORD1, Format.RGB32F), new Attribute(AttributeName.ATTR_COLOR, Format.RGBA8, true)];
                this._vertSize = 0;
                for (const a of this._vertAttrs) {
                  this._vertSize += FormatInfos[a.format].size;
                }
                this._particleTrail = new Map();
                this._inited = false;
              }
              onInit(ps) {
                this._particleSystem = ps;
                this.minParticleDistance = this._minParticleDistance;
                let burstCount = 0;
                const psTime = ps.startLifetime.getMax();
                const psRate = ps.rateOverTime.getMax();
                const duration = ps.duration;
                for (let i = 0, len = ps.bursts.length; i < len; i++) {
                  const b = ps.bursts[i];
                  burstCount += b.getMaxCount(ps) * Math.ceil(psTime / duration);
                }
                if (this.lifeTime.getMax() < 1.0) {
                  warnID(6036);
                }
                this._trailNum = Math.ceil(psTime * Math.ceil(this.lifeTime.getMax()) * 60 * (psRate * duration + burstCount));
                this._trailSegments = new Pool(() => new TrailSegment(10), Math.ceil(psRate * duration), obj => obj.trailElements.length = 0);
                if (this._enable) {
                  this.enable = this._enable;
                }
                this._inited = true;
              }
              onEnable() {
                this._attachToScene();
              }
              onDisable() {
                this._particleTrail.clear();
                this._detachFromScene();
              }
              _attachToScene() {
                if (this._trailModel) {
                  if (this._trailModel.scene) {
                    this._detachFromScene();
                  }
                  this._particleSystem._getRenderScene().addModel(this._trailModel);
                }
              }
              _detachFromScene() {
                if (this._trailModel && this._trailModel.scene) {
                  this._trailModel.scene.removeModel(this._trailModel);
                }
              }
              destroy() {
                this.destroySubMeshData();
                if (this._trailModel) {
                  director.root.destroyModel(this._trailModel);
                  this._trailModel = null;
                }
                if (this._trailSegments) {
                  this._trailSegments.destroy();
                  this._trailSegments = null;
                }
              }
              play() {
                if (this._trailModel && this._enable) {
                  this._trailModel.enabled = true;
                }
              }
              clear() {
                if (this.enable) {
                  const trailIter = this._particleTrail.values();
                  let trail = trailIter.next();
                  while (!trail.done) {
                    trail.value.clear();
                    trail = trailIter.next();
                  }
                  this._particleTrail.clear();
                  this.updateRenderData();
                  if (this._trailModel) this._trailModel.enabled = false;
                }
              }
              updateMaterial() {
                if (this._particleSystem) {
                  this._material = this._particleSystem.getMaterialInstance(1) || this._particleSystem.processor._defaultTrailMat;
                  if (this._trailModel) {
                    this._trailModel.setSubModelMaterial(0, this._material);
                  }
                }
              }
              update() {
                this._trailLifetime = this.lifeTime.evaluate(this._particleSystem._time, 1);
                if (this.space === Space.World && this._particleSystem._simulationSpace === Space.Local) {
                  this._needTransform = true;
                  this._particleSystem.node.getWorldMatrix(this._psTransform);
                  this._particleSystem.node.getWorldRotation(_temp_quat);
                } else {
                  this._needTransform = false;
                }
              }
              animate(p, scaledDt) {
                if (!this._trailSegments) {
                  return;
                }
                if (p.loopCount > p.lastLoop) {
                  if (p.trailDelay > 1) {
                    p.lastLoop = p.loopCount;
                    p.trailDelay = 0;
                  } else {
                    p.trailDelay++;
                  }
                  return;
                }
                let trail = this._particleTrail.get(p);
                if (!trail) {
                  trail = this._trailSegments.alloc();
                  this._particleTrail.set(p, trail);
                  return;
                }
                let lastSeg = trail.getElement(trail.end - 1);
                if (this._needTransform) {
                  Vec3.transformMat4(_temp_vec3, p.position, this._psTransform);
                } else {
                  Vec3.copy(_temp_vec3, p.position);
                }
                if (lastSeg) {
                  trail.iterateElement(this, this._updateTrailElement, p, scaledDt);
                  if (Vec3.squaredDistance(lastSeg.position, _temp_vec3) < this._minSquaredDistance) {
                    return;
                  }
                }
                lastSeg = trail.addElement();
                if (!lastSeg) {
                  return;
                }
                Vec3.copy(lastSeg.position, _temp_vec3);
                lastSeg.lifetime = 0;
                if (this.widthFromParticle) {
                  lastSeg.width = p.size.x * this.widthRatio.evaluate(0, 1);
                } else {
                  lastSeg.width = this.widthRatio.evaluate(0, 1);
                }
                const trailNum = trail.count();
                if (trailNum === 2) {
                  const lastSecondTrail = trail.getElement(trail.end - 2);
                  Vec3.subtract(lastSecondTrail.velocity, lastSeg.position, lastSecondTrail.position);
                } else if (trailNum > 2) {
                  const lastSecondTrail = trail.getElement(trail.end - 2);
                  const lastThirdTrail = trail.getElement(trail.end - 3);
                  Vec3.subtract(_temp_vec3, lastThirdTrail.position, lastSecondTrail.position);
                  Vec3.subtract(_temp_vec3_1, lastSeg.position, lastSecondTrail.position);
                  Vec3.subtract(lastSecondTrail.velocity, _temp_vec3_1, _temp_vec3);
                  if (Vec3.equals(Vec3.ZERO, lastSecondTrail.velocity)) {
                    Vec3.copy(lastSecondTrail.velocity, _temp_vec3);
                  }
                  Vec3.normalize(lastSecondTrail.velocity, lastSecondTrail.velocity);
                  this._checkDirectionReverse(lastSecondTrail, lastThirdTrail);
                }
                if (this.colorFromParticle) {
                  lastSeg.color.set(p.color);
                } else {
                  lastSeg.color.set(this.colorOvertime.evaluate(0, 1));
                }
              }
              removeParticle(p) {
                const trail = this._particleTrail.get(p);
                if (trail && this._trailSegments) {
                  trail.clear();
                  this._trailSegments.free(trail);
                  this._particleTrail.delete(p);
                }
              }
              updateRenderData() {
                this.vbOffset = 0;
                this.ibOffset = 0;
                for (const p of this._particleTrail.keys()) {
                  const trailSeg = this._particleTrail.get(p);
                  if (trailSeg.start === -1) {
                    continue;
                  }
                  const indexOffset = this.vbOffset * 4 / this._vertSize;
                  const end = trailSeg.start >= trailSeg.end ? trailSeg.end + trailSeg.trailElements.length : trailSeg.end;
                  const trailNum = end - trailSeg.start;
                  const textCoordSeg = 1 / trailNum;
                  const startSegEle = trailSeg.trailElements[trailSeg.start];
                  this._fillVertexBuffer(startSegEle, this.colorOverTrail.evaluate(1, 1), indexOffset, 1, 0, NEXT_TRIANGLE_INDEX);
                  for (let i = trailSeg.start + 1; i < end; i++) {
                    const segEle = trailSeg.trailElements[i % trailSeg.trailElements.length];
                    const j = i - trailSeg.start;
                    this._fillVertexBuffer(segEle, this.colorOverTrail.evaluate(1 - j / trailNum, 1), indexOffset, 1 - j * textCoordSeg, j, PRE_TRIANGLE_INDEX | NEXT_TRIANGLE_INDEX);
                  }
                  if (this._needTransform) {
                    Vec3.transformMat4(_temp_trailEle.position, p.position, this._psTransform);
                  } else {
                    Vec3.copy(_temp_trailEle.position, p.position);
                  }
                  const trailModel = this._trailModel;
                  if (trailModel) {
                    trailModel.node.invalidateChildren(TransformBit.POSITION);
                  }
                  if (trailNum === 1 || trailNum === 2) {
                    const lastSecondTrail = trailSeg.getElement(trailSeg.end - 1);
                    Vec3.subtract(lastSecondTrail.velocity, _temp_trailEle.position, lastSecondTrail.position);
                    this._vbF32[this.vbOffset - this._vertSize / 4 - 4] = lastSecondTrail.velocity.x;
                    this._vbF32[this.vbOffset - this._vertSize / 4 - 3] = lastSecondTrail.velocity.y;
                    this._vbF32[this.vbOffset - this._vertSize / 4 - 2] = lastSecondTrail.velocity.z;
                    this._vbF32[this.vbOffset - 4] = lastSecondTrail.velocity.x;
                    this._vbF32[this.vbOffset - 3] = lastSecondTrail.velocity.y;
                    this._vbF32[this.vbOffset - 2] = lastSecondTrail.velocity.z;
                    Vec3.subtract(_temp_trailEle.velocity, _temp_trailEle.position, lastSecondTrail.position);
                    this._checkDirectionReverse(_temp_trailEle, lastSecondTrail);
                  } else if (trailNum > 2) {
                    const lastSecondTrail = trailSeg.getElement(trailSeg.end - 1);
                    const lastThirdTrail = trailSeg.getElement(trailSeg.end - 2);
                    Vec3.subtract(_temp_vec3, lastThirdTrail.position, lastSecondTrail.position);
                    Vec3.subtract(_temp_vec3_1, _temp_trailEle.position, lastSecondTrail.position);
                    Vec3.normalize(_temp_vec3, _temp_vec3);
                    Vec3.normalize(_temp_vec3_1, _temp_vec3_1);
                    Vec3.subtract(lastSecondTrail.velocity, _temp_vec3_1, _temp_vec3);
                    Vec3.normalize(lastSecondTrail.velocity, lastSecondTrail.velocity);
                    this._checkDirectionReverse(lastSecondTrail, lastThirdTrail);
                    this.vbOffset -= this._vertSize / 4 * 2;
                    this.ibOffset -= 6;
                    this._fillVertexBuffer(lastSecondTrail, this.colorOverTrail.evaluate(textCoordSeg, 1), indexOffset, textCoordSeg, trailNum - 1, PRE_TRIANGLE_INDEX | NEXT_TRIANGLE_INDEX);
                    Vec3.subtract(_temp_trailEle.velocity, _temp_trailEle.position, lastSecondTrail.position);
                    Vec3.normalize(_temp_trailEle.velocity, _temp_trailEle.velocity);
                    this._checkDirectionReverse(_temp_trailEle, lastSecondTrail);
                  }
                  if (this.widthFromParticle) {
                    _temp_trailEle.width = p.size.x * this.widthRatio.evaluate(0, 1);
                  } else {
                    _temp_trailEle.width = this.widthRatio.evaluate(0, 1);
                  }
                  _temp_trailEle.color = p.color;
                  if (Vec3.equals(_temp_trailEle.velocity, Vec3.ZERO)) {
                    this.ibOffset -= 3;
                  } else {
                    this._fillVertexBuffer(_temp_trailEle, this.colorOverTrail.evaluate(0, 1), indexOffset, 0, trailNum, PRE_TRIANGLE_INDEX);
                  }
                }
                if (this._trailModel) {
                  this._trailModel.enabled = this.ibOffset > 0;
                }
              }
              updateIA(count) {
                const subModels = this._trailModel && this._trailModel.subModels;
                if (subModels && subModels.length > 0) {
                  const subModel = subModels[0];
                  subModel.inputAssembler.vertexBuffers[0].update(this._vbF32);
                  subModel.inputAssembler.indexBuffer.update(this._iBuffer);
                  subModel.inputAssembler.firstIndex = 0;
                  subModel.inputAssembler.indexCount = count;
                  subModel.inputAssembler.vertexCount = this._iaVertCount;
                }
              }
              beforeRender() {
                this.updateIA(this.ibOffset);
              }
              _createModel() {
                if (this._trailModel) {
                  return;
                }
                this._trailModel = legacyCC.director.root.createModel(Model);
              }
              rebuild() {
                const device = director.root.device;
                const vertexBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.VERTEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, this._vertSize * (this._trailNum + 1) * 2, this._vertSize));
                const vBuffer = new ArrayBuffer(this._vertSize * (this._trailNum + 1) * 2);
                this._vbF32 = new Float32Array(vBuffer);
                this._vbUint32 = new Uint32Array(vBuffer);
                vertexBuffer.update(vBuffer);
                const indexBuffer = device.createBuffer(new BufferInfo(BufferUsageBit.INDEX | BufferUsageBit.TRANSFER_DST, MemoryUsageBit.HOST | MemoryUsageBit.DEVICE, Math.max(1, this._trailNum) * 6 * Uint16Array.BYTES_PER_ELEMENT, Uint16Array.BYTES_PER_ELEMENT));
                this._iBuffer = new Uint16Array(Math.max(1, this._trailNum) * 6);
                indexBuffer.update(this._iBuffer);
                this._iaVertCount = (this._trailNum + 1) * 2;
                this._iaIndexCount = this._trailNum * 6;
                this._subMeshData = new RenderingSubMesh([vertexBuffer], this._vertAttrs, PrimitiveMode.TRIANGLE_LIST, indexBuffer);
                const trailModel = this._trailModel;
                if (trailModel && this._material) {
                  trailModel.node = trailModel.transform = this._particleSystem.node;
                  trailModel.visFlags = this._particleSystem.visibility;
                  trailModel.initSubModel(0, this._subMeshData, this._material);
                  trailModel.enabled = true;
                }
              }
              _updateTrailElement(module, trailEle, p, dt) {
                trailEle.lifetime += dt;
                if (module.colorFromParticle) {
                  trailEle.color.set(p.color);
                  trailEle.color.multiply(module.colorOvertime.evaluate(1.0 - p.remainingLifetime / p.startLifetime, 1));
                } else {
                  trailEle.color.set(module.colorOvertime.evaluate(1.0 - p.remainingLifetime / p.startLifetime, 1));
                }
                if (module.widthFromParticle) {
                  trailEle.width = p.size.x * module.widthRatio.evaluate(trailEle.lifetime / module._trailLifetime, 1);
                } else {
                  trailEle.width = module.widthRatio.evaluate(trailEle.lifetime / module._trailLifetime, 1);
                }
                return trailEle.lifetime > module._trailLifetime;
              }
              _fillVertexBuffer(trailSeg, colorModifer, indexOffset, xTexCoord, trailEleIdx, indexSet) {
                this._vbF32[this.vbOffset++] = trailSeg.position.x;
                this._vbF32[this.vbOffset++] = trailSeg.position.y;
                this._vbF32[this.vbOffset++] = trailSeg.position.z;
                this._vbF32[this.vbOffset++] = trailSeg.direction;
                this._vbF32[this.vbOffset++] = trailSeg.width;
                this._vbF32[this.vbOffset++] = xTexCoord;
                this._vbF32[this.vbOffset++] = 0;
                this._vbF32[this.vbOffset++] = trailSeg.velocity.x;
                this._vbF32[this.vbOffset++] = trailSeg.velocity.y;
                this._vbF32[this.vbOffset++] = trailSeg.velocity.z;
                _temp_color.set(trailSeg.color);
                _temp_color.multiply(colorModifer);
                this._vbUint32[this.vbOffset++] = _temp_color._val;
                this._vbF32[this.vbOffset++] = trailSeg.position.x;
                this._vbF32[this.vbOffset++] = trailSeg.position.y;
                this._vbF32[this.vbOffset++] = trailSeg.position.z;
                this._vbF32[this.vbOffset++] = 1 - trailSeg.direction;
                this._vbF32[this.vbOffset++] = trailSeg.width;
                this._vbF32[this.vbOffset++] = xTexCoord;
                this._vbF32[this.vbOffset++] = 1;
                this._vbF32[this.vbOffset++] = trailSeg.velocity.x;
                this._vbF32[this.vbOffset++] = trailSeg.velocity.y;
                this._vbF32[this.vbOffset++] = trailSeg.velocity.z;
                this._vbUint32[this.vbOffset++] = _temp_color._val;
                if (indexSet & PRE_TRIANGLE_INDEX) {
                  this._iBuffer[this.ibOffset++] = indexOffset + 2 * trailEleIdx;
                  this._iBuffer[this.ibOffset++] = indexOffset + 2 * trailEleIdx - 1;
                  this._iBuffer[this.ibOffset++] = indexOffset + 2 * trailEleIdx + 1;
                }
                if (indexSet & NEXT_TRIANGLE_INDEX) {
                  this._iBuffer[this.ibOffset++] = indexOffset + 2 * trailEleIdx;
                  this._iBuffer[this.ibOffset++] = indexOffset + 2 * trailEleIdx + 1;
                  this._iBuffer[this.ibOffset++] = indexOffset + 2 * trailEleIdx + 2;
                }
              }
              _checkDirectionReverse(currElement, prevElement) {
                if (Vec3.dot(currElement.velocity, prevElement.velocity) < DIRECTION_THRESHOLD) {
                  currElement.direction = 1 - prevElement.direction;
                } else {
                  currElement.direction = prevElement.direction;
                }
              }
              destroySubMeshData() {
                if (this._subMeshData) {
                  this._subMeshData.destroy();
                  this._subMeshData = null;
                }
              }
            }, (_initializer$2 = applyDecoratedInitializer(_class3$1.prototype, "_enable", [serializable$1], function () {
              return false;
            }), _initializer2$2 = applyDecoratedInitializer(_class3$1.prototype, "mode", [_dec2$2, serializable$1], function () {
              return TrailMode.Particles;
            }), _initializer3$2 = applyDecoratedInitializer(_class3$1.prototype, "lifeTime", [_dec3$2, serializable$1], function () {
              return new CurveRange();
            }), _initializer4$2 = applyDecoratedInitializer(_class3$1.prototype, "_minParticleDistance", [serializable$1], function () {
              return 0.1;
            }), _applyDecoratedDescriptor(_class3$1.prototype, "space", [_dec4$2], Object.getOwnPropertyDescriptor(_class3$1.prototype, "space"), _class3$1.prototype), _initializer5$2 = applyDecoratedInitializer(_class3$1.prototype, "existWithParticles", [serializable$1], function () {
              return true;
            }), _initializer6$2 = applyDecoratedInitializer(_class3$1.prototype, "textureMode", [_dec5$2, serializable$1], function () {
              return TextureMode.Stretch;
            }), _initializer7$2 = applyDecoratedInitializer(_class3$1.prototype, "widthFromParticle", [serializable$1], function () {
              return true;
            }), _initializer8$2 = applyDecoratedInitializer(_class3$1.prototype, "widthRatio", [_dec6$2, serializable$1], function () {
              return new CurveRange();
            }), _initializer9$2 = applyDecoratedInitializer(_class3$1.prototype, "colorFromParticle", [serializable$1], function () {
              return false;
            }), _initializer10$2 = applyDecoratedInitializer(_class3$1.prototype, "colorOverTrail", [_dec7$2, serializable$1], function () {
              return new GradientRange();
            }), _initializer11$2 = applyDecoratedInitializer(_class3$1.prototype, "colorOvertime", [_dec8$2, serializable$1], function () {
              return new GradientRange();
            }), _initializer12$2 = applyDecoratedInitializer(_class3$1.prototype, "_space", [_dec9$2], function () {
              return Space.World;
            }), _initializer13$2 = applyDecoratedInitializer(_class3$1.prototype, "_particleSystem", [serializable$1], function () {
              return null;
            })), _class3$1)) || _class2$2);

            const _node_mat = new Mat4();
            const _node_parent_inv = new Mat4();
            const _node_rol = new Quat();
            const _node_scale = new Vec3();
            const _anim_module = ['_colorOverLifetimeModule', '_sizeOvertimeModule', '_velocityOvertimeModule', '_forceOvertimeModule', '_limitVelocityOvertimeModule', '_rotationOvertimeModule', '_textureAnimationModule'];
            class ParticleCuller {
              constructor(ps) {
                this._particleSystem = void 0;
                this._processor = void 0;
                this._node = void 0;
                this._particlesAll = void 0;
                this._updateList = new Map();
                this._animateList = new Map();
                this._runAnimateList = new Array();
                this._localMat = new Mat4();
                this._gravity = new Vec4();
                this.minPos = new Vec3();
                this.maxPos = new Vec3();
                this._nodePos = new Vec3();
                this._nodeSize = new Vec3();
                this._particleSystem = ps;
                this._processor = this._particleSystem.processor;
                this._node = ps.node;
                this._particlesAll = [];
                this._initModuleList();
              }
              _updateBoundingNode() {
                this._nodeSize.set(this.maxPos.x - this.minPos.x, this.maxPos.y - this.minPos.y, this.maxPos.z - this.minPos.z);
                this._nodePos.set(this.minPos.x + this._nodeSize.x * 0.5, this.minPos.y + this._nodeSize.y * 0.5, this.minPos.z + this._nodeSize.z * 0.5);
              }
              setBoundingBoxSize(halfExt) {
                this.maxPos.x = this._nodePos.x + halfExt.x;
                this.maxPos.y = this._nodePos.y + halfExt.y;
                this.maxPos.z = this._nodePos.z + halfExt.z;
                this.minPos.x = this._nodePos.x - halfExt.x;
                this.minPos.y = this._nodePos.y - halfExt.y;
                this.minPos.z = this._nodePos.z - halfExt.z;
                this._updateBoundingNode();
              }
              setBoundingBoxCenter(px, py, pz) {
                this.maxPos.x = px + this._nodeSize.x * 0.5;
                this.maxPos.y = py + this._nodeSize.y * 0.5;
                this.maxPos.z = pz + this._nodeSize.z * 0.5;
                this.minPos.x = px - this._nodeSize.x * 0.5;
                this.minPos.y = py - this._nodeSize.y * 0.5;
                this.minPos.z = pz - this._nodeSize.z * 0.5;
                this._updateBoundingNode();
              }
              _initModuleList() {
                _anim_module.forEach(val => {
                  const pm = this._particleSystem[val];
                  if (pm && pm.enable) {
                    if (pm.needUpdate) {
                      this._updateList[pm.name] = pm;
                    }
                    if (pm.needAnimate) {
                      this._animateList[pm.name] = pm;
                    }
                  }
                });
                this._runAnimateList.length = 0;
                for (let i = 0, len = PARTICLE_MODULE_ORDER.length; i < len; i++) {
                  const p = this._animateList[PARTICLE_MODULE_ORDER[i]];
                  if (p) {
                    this._runAnimateList.push(p);
                  }
                }
              }
              _emit(count, dt, particleLst) {
                const ps = this._particleSystem;
                const node = this._node;
                const loopDelta = ps.time % ps.duration / ps.duration;
                node.invalidateChildren(TransformBit.POSITION);
                if (ps.simulationSpace === Space.World) {
                  node.getWorldMatrix(_node_mat);
                  node.getWorldRotation(_node_rol);
                }
                for (let i = 0; i < count; ++i) {
                  const particle = new Particle(ps);
                  particle.particleSystem = ps;
                  particle.reset();
                  const rand = pseudoRandom(randomRangeInt(0, INT_MAX));
                  if (ps._shapeModule && ps._shapeModule.enable) {
                    ps._shapeModule.emit(particle);
                  } else {
                    Vec3.set(particle.position, 0, 0, 0);
                    Vec3.copy(particle.velocity, particleEmitZAxis);
                  }
                  if (ps._textureAnimationModule && ps._textureAnimationModule.enable) {
                    ps._textureAnimationModule.init(particle);
                  }
                  const curveStartSpeed = ps.startSpeed.evaluate(loopDelta, rand);
                  Vec3.multiplyScalar(particle.velocity, particle.velocity, curveStartSpeed);
                  if (ps.simulationSpace === Space.World) {
                    Vec3.transformMat4(particle.position, particle.position, _node_mat);
                    Vec3.transformQuat(particle.velocity, particle.velocity, _node_rol);
                  }
                  Vec3.copy(particle.ultimateVelocity, particle.velocity);
                  Vec3.set(particle.rotation, 0, 0, 0);
                  if (ps.startSize3D) {
                    Vec3.set(particle.startSize, ps.startSizeX.evaluate(loopDelta, rand), ps.startSizeY.evaluate(loopDelta, rand), ps.startSizeZ.evaluate(loopDelta, rand));
                  } else {
                    Vec3.set(particle.startSize, ps.startSizeX.evaluate(loopDelta, rand), 1, 1);
                    particle.startSize.y = particle.startSize.x;
                  }
                  Vec3.copy(particle.size, particle.startSize);
                  particle.startLifetime = ps.startLifetime.evaluate(loopDelta, rand) + dt;
                  particle.remainingLifetime = particle.startLifetime;
                  particleLst.push(particle);
                }
              }
              _updateParticles(dt, particleLst) {
                const ps = this._particleSystem;
                ps.node.getWorldMatrix(_node_mat);
                switch (ps.scaleSpace) {
                  case Space.Local:
                    ps.node.getScale(_node_scale);
                    break;
                  case Space.World:
                    ps.node.getWorldScale(_node_scale);
                    break;
                }
                this._updateList.forEach((value, key) => {
                  value.update(ps.simulationSpace, _node_mat);
                });
                if (ps.simulationSpace === Space.Local) {
                  const r = ps.node.getRotation();
                  Mat4.fromQuat(this._localMat, r);
                  this._localMat.transpose();
                }
                if (ps.node.parent) {
                  ps.node.parent.getWorldMatrix(_node_parent_inv);
                  _node_parent_inv.invert();
                }
                for (let i = 0; i < particleLst.length; ++i) {
                  const p = particleLst[i];
                  p.remainingLifetime -= dt;
                  Vec3.set(p.animatedVelocity, 0, 0, 0);
                  const useGravity = ps.gravityModifier.mode !== Mode$2.Constant || ps.gravityModifier.constant !== 0;
                  if (useGravity) {
                    const rand = isCurveTwoValues(ps.gravityModifier) ? pseudoRandom(p.randomSeed) : 0;
                    if (ps.simulationSpace === Space.Local) {
                      const gravityFactor = -ps.gravityModifier.evaluate(1 - p.remainingLifetime / p.startLifetime, rand) * 9.8 * dt;
                      this._gravity.x = 0.0;
                      this._gravity.y = gravityFactor;
                      this._gravity.z = 0.0;
                      this._gravity.w = 1.0;
                      if (!approx(gravityFactor, 0.0, EPSILON)) {
                        if (ps.node.parent) {
                          this._gravity = this._gravity.transformMat4(_node_parent_inv);
                        }
                        this._gravity = this._gravity.transformMat4(this._localMat);
                        p.velocity.x += this._gravity.x;
                        p.velocity.y += this._gravity.y;
                        p.velocity.z += this._gravity.z;
                      }
                    } else {
                      p.velocity.y -= ps.gravityModifier.evaluate(1 - p.remainingLifetime / p.startLifetime, rand) * 9.8 * dt;
                    }
                  }
                  Vec3.copy(p.ultimateVelocity, p.velocity);
                  this._runAnimateList.forEach(value => {
                    value.animate(p, dt);
                  });
                  Vec3.scaleAndAdd(p.position, p.position, p.ultimateVelocity, dt);
                }
              }
              _calculateBounding(isInit) {
                const size = new Vec3();
                const position = new Vec3();
                const subPos = new Vec3();
                const addPos = new Vec3();
                const meshSize = new Vec3(1.0, 1.0, 1.0);
                if (this._processor.getInfo().renderMode === RenderMode.Mesh) {
                  const mesh = this._processor.getInfo().mesh;
                  if (mesh && mesh.struct.minPosition && mesh.struct.maxPosition) {
                    const meshAABB = new AABB();
                    AABB.fromPoints(meshAABB, mesh.struct.minPosition, mesh.struct.maxPosition);
                    const meshMax = Math.max(meshAABB.halfExtents.x, meshAABB.halfExtents.y, meshAABB.halfExtents.z);
                    meshSize.set(meshMax, meshMax, meshMax);
                  }
                }
                const worldMat = this._particleSystem.node.worldMatrix;
                for (let i = 0; i < this._particlesAll.length; ++i) {
                  const p = this._particlesAll[i];
                  Vec3.multiply(size, _node_scale, p.size);
                  Vec3.multiply(size, size, meshSize);
                  position.set(p.position);
                  if (this._particleSystem.simulationSpace !== Space.World) {
                    Vec3.transformMat4(position, position, worldMat);
                  }
                  if (isInit && i === 0) {
                    Vec3.subtract(this.minPos, position, size);
                    Vec3.add(this.maxPos, position, size);
                  } else {
                    Vec3.subtract(subPos, position, size);
                    Vec3.add(addPos, position, size);
                    Vec3.min(this.minPos, this.minPos, subPos);
                    Vec3.max(this.maxPos, this.maxPos, addPos);
                  }
                }
              }
              calculatePositions() {
                this._emit(this._particleSystem.capacity, 0, this._particlesAll);
                const rand = isCurveTwoValues(this._particleSystem.startLifetime) ? pseudoRandom(randomRangeInt(0, INT_MAX)) : 0;
                this._updateParticles(0, this._particlesAll);
                this._calculateBounding(true);
                this._updateParticles(this._particleSystem.startLifetime.evaluate(0, rand), this._particlesAll);
                this._calculateBounding(false);
                this._updateBoundingNode();
              }
              clear() {
                this._particlesAll.length = 0;
              }
              destroy() {}
            }

            var _dec$1, _dec2$1, _dec3$1, _dec4$1, _dec5$1, _dec6$1, _dec7$1, _dec8$1, _dec9$1, _dec10$1, _dec11$1, _dec12$1, _dec13$1, _dec14$1, _class$1, _class2$1, _initializer$1, _initializer2$1, _initializer3$1, _initializer4$1, _initializer5$1, _initializer6$1, _initializer7$1, _initializer8$1, _initializer9$1, _initializer10$1, _initializer11$1, _initializer12$1, _initializer13$1, _initializer14$1;
            const {
              ccclass,
              serializable,
              displayOrder,
              type,
              range,
              slide,
              visible
            } = _decorator;
            let NoiseModule = (_dec$1 = ccclass('cc.NoiseModule'), _dec2$1 = type(CCFloat), _dec3$1 = type(CCFloat), _dec4$1 = type(CCFloat), _dec5$1 = type(CCFloat), _dec6$1 = type(CCFloat), _dec7$1 = type(CCFloat), _dec8$1 = type(CCFloat), _dec9$1 = type(CCFloat), _dec10$1 = type(CCFloat), _dec11$1 = type(CCFloat), _dec12$1 = type(CCInteger), _dec13$1 = type(CCFloat), _dec14$1 = type(CCFloat), _dec$1(_class$1 = (_class2$1 = class NoiseModule extends ParticleModuleBase {
              constructor(...args) {
                super(...args);
                this._enable = _initializer$1 && _initializer$1();
                this._strengthX = _initializer2$1 && _initializer2$1();
                this._strengthY = _initializer3$1 && _initializer3$1();
                this._strengthZ = _initializer4$1 && _initializer4$1();
                this._noiseSpeedX = _initializer5$1 && _initializer5$1();
                this._noiseSpeedY = _initializer6$1 && _initializer6$1();
                this._noiseSpeedZ = _initializer7$1 && _initializer7$1();
                this._noiseFrequency = _initializer8$1 && _initializer8$1();
                this._remapX = _initializer9$1 && _initializer9$1();
                this._remapY = _initializer10$1 && _initializer10$1();
                this._remapZ = _initializer11$1 && _initializer11$1();
                this._octaves = _initializer12$1 && _initializer12$1();
                this._octaveMultiplier = _initializer13$1 && _initializer13$1();
                this._octaveScale = _initializer14$1 && _initializer14$1();
                this.name = PARTICLE_MODULE_NAME.NOISE;
                this.noise = new ParticleNoise();
                this.samplePosition = new Vec3();
              }
              get enable() {
                return this._enable;
              }
              set enable(val) {
                if (this._enable === val) return;
                this._enable = val;
                if (!this.target) return;
                this.target.enableModule(this.name, val, this);
              }
              get strengthX() {
                return this._strengthX;
              }
              set strengthX(value) {
                this._strengthX = value;
              }
              get strengthY() {
                return this._strengthY;
              }
              set strengthY(value) {
                this._strengthY = value;
              }
              get strengthZ() {
                return this._strengthZ;
              }
              set strengthZ(value) {
                this._strengthZ = value;
              }
              get noiseSpeedX() {
                return this._noiseSpeedX;
              }
              set noiseSpeedX(value) {
                this._noiseSpeedX = value;
              }
              get noiseSpeedY() {
                return this._noiseSpeedY;
              }
              set noiseSpeedY(value) {
                this._noiseSpeedY = value;
              }
              get noiseSpeedZ() {
                return this._noiseSpeedZ;
              }
              set noiseSpeedZ(value) {
                this._noiseSpeedZ = value;
              }
              get noiseFrequency() {
                return this._noiseFrequency;
              }
              set noiseFrequency(value) {
                this._noiseFrequency = value;
              }
              get remapX() {
                return this._remapX;
              }
              set remapX(value) {
                this._remapX = value;
              }
              get remapY() {
                return this._remapY;
              }
              set remapY(value) {
                this._remapY = value;
              }
              get remapZ() {
                return this._remapZ;
              }
              set remapZ(value) {
                this._remapZ = value;
              }
              get octaves() {
                return this._octaves;
              }
              set octaves(value) {
                this._octaves = value;
              }
              get octaveMultiplier() {
                return this._octaveMultiplier;
              }
              set octaveMultiplier(value) {
                this._octaveMultiplier = value;
              }
              get octaveScale() {
                return this._octaveScale;
              }
              set octaveScale(value) {
                this._octaveScale = value;
              }
              animate(particle, dt) {
                this.noise.setTime(particle.particleSystem.time);
                this.noise.setSpeed(this.noiseSpeedX, this.noiseSpeedY, this.noiseSpeedZ);
                this.noise.setFrequency(this.noiseFrequency);
                this.noise.setAbs(this.remapX, this.remapY, this.remapZ);
                this.noise.setAmplititude(this.strengthX, this.strengthY, this.strengthZ);
                this.noise.setOctaves(this.octaves, this.octaveMultiplier, this.octaveScale);
                this.samplePosition.set(particle.position);
                this.samplePosition.add3f(random() * 1.0, random() * 1.0, random() * 1.0);
                this.noise.setSamplePoint(this.samplePosition);
                this.noise.getNoiseParticle();
                const noisePosition = this.noise.getResult();
                noisePosition.multiply3f(random(), random(), random());
                Vec3.add(particle.position, particle.position, noisePosition.multiplyScalar(dt));
              }
              getNoisePreview(out, ps, width, height) {
                this.noise.setTime(ps.time);
                this.noise.setSpeed(this.noiseSpeedX, this.noiseSpeedY, this.noiseSpeedZ);
                this.noise.setFrequency(this.noiseFrequency);
                this.noise.setAbs(this.remapX, this.remapY, this.remapZ);
                this.noise.setAmplititude(this.strengthX, this.strengthY, this.strengthZ);
                this.noise.setOctaves(this.octaves, this.octaveMultiplier, this.octaveScale);
                this.noise.getNoiseParticle();
                this.noise.getPreview(out, width, height);
              }
            }, (_initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "_enable", [serializable], function () {
              return false;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "strengthX", [_dec2$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "strengthX"), _class2$1.prototype), _initializer2$1 = applyDecoratedInitializer(_class2$1.prototype, "_strengthX", [serializable], function () {
              return 10;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "strengthY", [_dec3$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "strengthY"), _class2$1.prototype), _initializer3$1 = applyDecoratedInitializer(_class2$1.prototype, "_strengthY", [serializable], function () {
              return 10;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "strengthZ", [_dec4$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "strengthZ"), _class2$1.prototype), _initializer4$1 = applyDecoratedInitializer(_class2$1.prototype, "_strengthZ", [serializable], function () {
              return 10;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "noiseSpeedX", [_dec5$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "noiseSpeedX"), _class2$1.prototype), _initializer5$1 = applyDecoratedInitializer(_class2$1.prototype, "_noiseSpeedX", [serializable], function () {
              return 0;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "noiseSpeedY", [_dec6$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "noiseSpeedY"), _class2$1.prototype), _initializer6$1 = applyDecoratedInitializer(_class2$1.prototype, "_noiseSpeedY", [serializable], function () {
              return 0;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "noiseSpeedZ", [_dec7$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "noiseSpeedZ"), _class2$1.prototype), _initializer7$1 = applyDecoratedInitializer(_class2$1.prototype, "_noiseSpeedZ", [serializable], function () {
              return 0;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "noiseFrequency", [_dec8$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "noiseFrequency"), _class2$1.prototype), _initializer8$1 = applyDecoratedInitializer(_class2$1.prototype, "_noiseFrequency", [serializable], function () {
              return 1;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "remapX", [_dec9$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "remapX"), _class2$1.prototype), _initializer9$1 = applyDecoratedInitializer(_class2$1.prototype, "_remapX", [serializable], function () {
              return 0;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "remapY", [_dec10$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "remapY"), _class2$1.prototype), _initializer10$1 = applyDecoratedInitializer(_class2$1.prototype, "_remapY", [serializable], function () {
              return 0;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "remapZ", [_dec11$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "remapZ"), _class2$1.prototype), _initializer11$1 = applyDecoratedInitializer(_class2$1.prototype, "_remapZ", [serializable], function () {
              return 0;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "octaves", [_dec12$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "octaves"), _class2$1.prototype), _initializer12$1 = applyDecoratedInitializer(_class2$1.prototype, "_octaves", [serializable], function () {
              return 1;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "octaveMultiplier", [_dec13$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "octaveMultiplier"), _class2$1.prototype), _initializer13$1 = applyDecoratedInitializer(_class2$1.prototype, "_octaveMultiplier", [serializable], function () {
              return 0.5;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "octaveScale", [_dec14$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "octaveScale"), _class2$1.prototype), _initializer14$1 = applyDecoratedInitializer(_class2$1.prototype, "_octaveScale", [serializable], function () {
              return 2;
            })), _class2$1)) || _class$1);

            var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _initializer22, _initializer23, _initializer24, _initializer25, _initializer26, _initializer27, _initializer28, _initializer29, _initializer30, _initializer31, _initializer32, _initializer33, _initializer34, _initializer35, _initializer36, _initializer37, _initializer38, _initializer39, _initializer40, _initializer41, _class3;
            const _world_mat = new Mat4();
            const _world_rol = new Quat();
            const superMaterials = Object.getOwnPropertyDescriptor(Renderer.prototype, 'sharedMaterials');
            let ParticleSystem = (_dec = ccclass$1('cc.ParticleSystem'), _dec2 = executionOrder(99), _dec3 = type$1(GradientRange), _dec4 = type$1(Space), _dec5 = formerlySerializedAs('startSize'), _dec6 = type$1(CurveRange), _dec7 = type$1(CurveRange), _dec8 = type$1(CurveRange), _dec9 = type$1(CurveRange), _dec10 = type$1(CurveRange), _dec11 = type$1(CurveRange), _dec12 = type$1(CurveRange), _dec13 = formerlySerializedAs('startRotation'), _dec14 = type$1(CurveRange), _dec15 = type$1(CurveRange), _dec16 = type$1(Space), _dec17 = type$1(CurveRange), _dec18 = type$1(CurveRange), _dec19 = type$1(CurveRange), _dec20 = type$1([Burst]), _dec21 = type$1(CCBoolean), _dec22 = type$1(CullingMode), _dec23 = type$1(CCFloat), _dec24 = type$1(CCFloat), _dec25 = type$1(CCFloat), _dec26 = formerlySerializedAs('enableCulling'), _dec27 = type$1(ColorOvertimeModule), _dec28 = type$1(ColorOvertimeModule), _dec29 = type$1(ShapeModule), _dec30 = type$1(ShapeModule), _dec31 = type$1(SizeOvertimeModule), _dec32 = type$1(SizeOvertimeModule), _dec33 = type$1(VelocityOvertimeModule), _dec34 = type$1(VelocityOvertimeModule), _dec35 = type$1(ForceOvertimeModule), _dec36 = type$1(ForceOvertimeModule), _dec37 = type$1(LimitVelocityOvertimeModule), _dec38 = type$1(LimitVelocityOvertimeModule), _dec39 = type$1(RotationOvertimeModule), _dec40 = type$1(RotationOvertimeModule), _dec41 = type$1(TextureAnimationModule), _dec42 = type$1(TextureAnimationModule), _dec43 = type$1(NoiseModule), _dec44 = type$1(NoiseModule), _dec45 = type$1(TrailModule), _dec46 = type$1(TrailModule), _dec47 = type$1(ParticleSystemRenderer), _dec(_class = _dec2(_class = (_class2 = (_class3 = class ParticleSystem extends ModelRenderer {
              get capacity() {
                return this._capacity;
              }
              set capacity(val) {
                this._capacity = Math.floor(val > 0 ? val : 0);
                if (this.processor && this.processor.model) {
                  this.processor.model.setCapacity(this._capacity);
                }
              }
              get prewarm() {
                return this._prewarm;
              }
              set prewarm(val) {
                if (val === true && this.loop === false) ;
                this._prewarm = val;
              }
              get simulationSpace() {
                return this._simulationSpace;
              }
              set simulationSpace(val) {
                if (val !== this._simulationSpace) {
                  this._simulationSpace = val;
                  if (this.processor) {
                    this.processor.updateMaterialParams();
                    this.processor.updateTrailMaterial();
                  }
                }
              }
              set renderCulling(value) {
                this._renderCulling = value;
                if (value) {
                  if (!this._boundingBox) {
                    this._boundingBox = new AABB();
                    this._calculateBounding(false);
                  }
                }
              }
              get renderCulling() {
                return this._renderCulling;
              }
              get cullingMode() {
                return this._cullingMode;
              }
              set cullingMode(value) {
                this._cullingMode = value;
              }
              get aabbHalfX() {
                const res = this.getBoundingX();
                if (res) {
                  return res;
                } else {
                  return 0;
                }
              }
              set aabbHalfX(value) {
                this.setBoundingX(value);
              }
              get aabbHalfY() {
                const res = this.getBoundingY();
                if (res) {
                  return res;
                } else {
                  return 0;
                }
              }
              set aabbHalfY(value) {
                this.setBoundingY(value);
              }
              get aabbHalfZ() {
                const res = this.getBoundingZ();
                if (res) {
                  return res;
                } else {
                  return 0;
                }
              }
              set aabbHalfZ(value) {
                this.setBoundingZ(value);
              }
              get dataCulling() {
                return this._dataCulling;
              }
              set dataCulling(value) {
                this._dataCulling = value;
              }
              get sharedMaterials() {
                return superMaterials.get.call(this);
              }
              set sharedMaterials(val) {
                superMaterials.set.call(this, val);
              }
              get colorOverLifetimeModule() {
                return this._colorOverLifetimeModule;
              }
              set colorOverLifetimeModule(val) {
                if (!val) return;
                this._colorOverLifetimeModule = val;
              }
              get shapeModule() {
                return this._shapeModule;
              }
              set shapeModule(val) {
                if (!val) return;
                this._shapeModule = val;
              }
              get sizeOvertimeModule() {
                return this._sizeOvertimeModule;
              }
              set sizeOvertimeModule(val) {
                if (!val) return;
                this._sizeOvertimeModule = val;
              }
              get velocityOvertimeModule() {
                return this._velocityOvertimeModule;
              }
              set velocityOvertimeModule(val) {
                if (!val) return;
                this._velocityOvertimeModule = val;
              }
              get forceOvertimeModule() {
                return this._forceOvertimeModule;
              }
              set forceOvertimeModule(val) {
                if (!val) return;
                this._forceOvertimeModule = val;
              }
              get limitVelocityOvertimeModule() {
                return this._limitVelocityOvertimeModule;
              }
              set limitVelocityOvertimeModule(val) {
                if (!val) return;
                this._limitVelocityOvertimeModule = val;
              }
              get rotationOvertimeModule() {
                return this._rotationOvertimeModule;
              }
              set rotationOvertimeModule(val) {
                if (!val) return;
                this._rotationOvertimeModule = val;
              }
              get textureAnimationModule() {
                return this._textureAnimationModule;
              }
              set textureAnimationModule(val) {
                if (!val) return;
                this._textureAnimationModule = val;
              }
              get noiseModule() {
                return this._noiseModule;
              }
              set noiseModule(val) {
                if (!val) return;
                this._noiseModule = val;
              }
              get trailModule() {
                return this._trailModule;
              }
              set trailModule(val) {
                if (!val) return;
                this._trailModule = val;
              }
              constructor() {
                super();
                this.startColor = _initializer && _initializer();
                this.scaleSpace = _initializer2 && _initializer2();
                this.startSize3D = _initializer3 && _initializer3();
                this.startSizeX = _initializer4 && _initializer4();
                this.startSizeY = _initializer5 && _initializer5();
                this.startSizeZ = _initializer6 && _initializer6();
                this.startSpeed = _initializer7 && _initializer7();
                this.startRotation3D = _initializer8 && _initializer8();
                this.startRotationX = _initializer9 && _initializer9();
                this.startRotationY = _initializer10 && _initializer10();
                this.startRotationZ = _initializer11 && _initializer11();
                this.startDelay = _initializer12 && _initializer12();
                this.startLifetime = _initializer13 && _initializer13();
                this.duration = _initializer14 && _initializer14();
                this.loop = _initializer15 && _initializer15();
                this.simulationSpeed = _initializer16 && _initializer16();
                this.playOnAwake = _initializer17 && _initializer17();
                this.gravityModifier = _initializer18 && _initializer18();
                this.rateOverTime = _initializer19 && _initializer19();
                this.rateOverDistance = _initializer20 && _initializer20();
                this.bursts = _initializer21 && _initializer21();
                this._renderCulling = _initializer22 && _initializer22();
                this._cullingMode = _initializer23 && _initializer23();
                this._aabbHalfX = _initializer24 && _initializer24();
                this._aabbHalfY = _initializer25 && _initializer25();
                this._aabbHalfZ = _initializer26 && _initializer26();
                this._dataCulling = _initializer27 && _initializer27();
                this._colorOverLifetimeModule = _initializer28 && _initializer28();
                this._shapeModule = _initializer29 && _initializer29();
                this._sizeOvertimeModule = _initializer30 && _initializer30();
                this._velocityOvertimeModule = _initializer31 && _initializer31();
                this._forceOvertimeModule = _initializer32 && _initializer32();
                this._limitVelocityOvertimeModule = _initializer33 && _initializer33();
                this._rotationOvertimeModule = _initializer34 && _initializer34();
                this._textureAnimationModule = _initializer35 && _initializer35();
                this._noiseModule = _initializer36 && _initializer36();
                this._trailModule = _initializer37 && _initializer37();
                this.renderer = _initializer38 && _initializer38();
                this._isPlaying = void 0;
                this._isPaused = void 0;
                this._isStopped = void 0;
                this._isEmitting = void 0;
                this._needToRestart = void 0;
                this._needRefresh = void 0;
                this._time = void 0;
                this._emitRateTimeCounter = void 0;
                this._emitRateDistanceCounter = void 0;
                this._oldWPos = void 0;
                this._curWPos = void 0;
                this._boundingBox = void 0;
                this._culler = void 0;
                this._oldPos = void 0;
                this._curPos = void 0;
                this._isCulled = void 0;
                this._isSimulating = void 0;
                this._customData1 = void 0;
                this._customData2 = void 0;
                this._subEmitters = void 0;
                this._needAttach = void 0;
                this._prewarm = _initializer39 && _initializer39();
                this._capacity = _initializer40 && _initializer40();
                this._simulationSpace = _initializer41 && _initializer41();
                this.processor = null;
                this.rateOverTime.constant = 10;
                this.startLifetime.constant = 5;
                this.startSizeX.constant = 1;
                this.startSpeed.constant = 5;
                this._isPlaying = false;
                this._isPaused = false;
                this._isStopped = true;
                this._isEmitting = false;
                this._needToRestart = false;
                this._needRefresh = true;
                this._needAttach = false;
                this._time = 0.0;
                this._emitRateTimeCounter = 0.0;
                this._emitRateDistanceCounter = 0.0;
                this._oldWPos = new Vec3();
                this._curWPos = new Vec3();
                this._boundingBox = null;
                this._culler = null;
                this._oldPos = null;
                this._curPos = null;
                this._isCulled = false;
                this._isSimulating = true;
                this._customData1 = new Vec2();
                this._customData2 = new Vec2();
                this._subEmitters = [];
              }
              onFocusInEditor() {
                this.renderer.create(this);
              }
              onLoad() {
                this.renderer.onInit(this);
                if (this._shapeModule) this._shapeModule.onInit(this);
                if (this._trailModule && !this.renderer.useGPU && this._trailModule.enable) {
                  this._trailModule.onInit(this);
                }
                this.bindModule();
                this._resetPosition();
              }
              _onMaterialModified(index, material) {
                if (this.processor !== null) {
                  this.processor.onMaterialModified(index, material);
                }
              }
              _onRebuildPSO(index, material) {
                this.processor.onRebuildPSO(index, material);
              }
              _collectModels() {
                this._models.length = 0;
                this._models.push(this.processor._model);
                if (this._trailModule && this._trailModule.enable && this._trailModule._trailModel) {
                  this._models.push(this._trailModule._trailModel);
                }
                return this._models;
              }
              _attachToScene() {
                this.processor.attachToScene();
                if (this._trailModule && this._trailModule.enable) {
                  this._trailModule._attachToScene();
                }
              }
              _detachFromScene() {
                this.processor.detachFromScene();
                if (this._trailModule && this._trailModule.enable) {
                  this._trailModule._detachFromScene();
                }
                if (this._boundingBox) {
                  this._boundingBox = null;
                }
                if (this._culler) {
                  this._culler.clear();
                  this._culler.destroy();
                  this._culler = null;
                }
              }
              bindModule() {
                if (this._colorOverLifetimeModule) this._colorOverLifetimeModule.bindTarget(this.processor);
                if (this._sizeOvertimeModule) this._sizeOvertimeModule.bindTarget(this.processor);
                if (this._rotationOvertimeModule) this._rotationOvertimeModule.bindTarget(this.processor);
                if (this._forceOvertimeModule) this._forceOvertimeModule.bindTarget(this.processor);
                if (this._limitVelocityOvertimeModule) this._limitVelocityOvertimeModule.bindTarget(this.processor);
                if (this._velocityOvertimeModule) this._velocityOvertimeModule.bindTarget(this.processor);
                if (this._textureAnimationModule) this._textureAnimationModule.bindTarget(this.processor);
                if (this._noiseModule) this._noiseModule.bindTarget(this.processor);
              }
              play() {
                if (this._needToRestart) {
                  this.reset();
                  this._needToRestart = false;
                }
                if (this._isPaused) {
                  this._isPaused = false;
                }
                if (this._isStopped) {
                  this._isStopped = false;
                }
                this._isPlaying = true;
                this._isEmitting = true;
                this._resetPosition();
                if (this._prewarm) {
                  this._prewarmSystem();
                }
                if (this._trailModule) {
                  this._trailModule.play();
                }
                if (this.processor) {
                  const model = this.processor.getModel();
                  if (model) {
                    model.enabled = this.enabledInHierarchy;
                  }
                }
              }
              pause() {
                if (this._isStopped) {
                  warn('pause(): particle system is already stopped.');
                  return;
                }
                if (this._isPlaying) {
                  this._isPlaying = false;
                }
                this._isPaused = true;
              }
              stopEmitting() {
                this._isEmitting = false;
                this._needToRestart = true;
              }
              stop() {
                if (this._isPlaying || this._isPaused) {
                  this.clear();
                }
                if (this._isPlaying) {
                  this._isPlaying = false;
                }
                if (this._isPaused) {
                  this._isPaused = false;
                }
                if (this._isEmitting) {
                  this._isEmitting = false;
                }
                this._isStopped = true;
                this._needRefresh = true;
                this.reset();
              }
              reset() {
                this._time = 0.0;
                this._emitRateTimeCounter = 0.0;
                this._emitRateDistanceCounter = 0.0;
                this._resetPosition();
                for (const burst of this.bursts) {
                  burst.reset();
                }
              }
              clear() {
                if (this.enabledInHierarchy) {
                  this.processor.clear();
                  if (this._trailModule) this._trailModule.clear();
                }
                this._calculateBounding(false);
              }
              getParticleCount() {
                if (this.processor) {
                  return this.processor.getParticleCount();
                } else {
                  return 0;
                }
              }
              setCustomData1(x, y) {
                Vec2.set(this._customData1, x, y);
              }
              setCustomData2(x, y) {
                Vec2.set(this._customData2, x, y);
              }
              onDestroy() {
                var _this$processor$getMo;
                this.stop();
                if ((_this$processor$getMo = this.processor.getModel()) !== null && _this$processor$getMo !== void 0 && _this$processor$getMo.scene) {
                  this.processor.detachFromScene();
                  if (this._trailModule && this._trailModule.enable) {
                    this._trailModule._detachFromScene();
                  }
                }
                legacyCC.director.off(legacyCC.Director.EVENT_BEFORE_COMMIT, this.beforeRender, this);
                this.processor.onDestroy();
                if (this._trailModule) this._trailModule.destroy();
                if (this._culler) {
                  this._culler.clear();
                  this._culler.destroy();
                  this._culler = null;
                }
              }
              onEnable() {
                super.onEnable();
                legacyCC.director.on(legacyCC.Director.EVENT_BEFORE_COMMIT, this.beforeRender, this);
                if (this.playOnAwake && !EDITOR_NOT_IN_PREVIEW) {
                  this.play();
                }
                this.processor.onEnable();
                if (this._trailModule) this._trailModule.onEnable();
              }
              onDisable() {
                legacyCC.director.off(legacyCC.Director.EVENT_BEFORE_COMMIT, this.beforeRender, this);
                this.processor.onDisable();
                if (this._trailModule) this._trailModule.onDisable();
                if (this._boundingBox) {
                  this._boundingBox = null;
                }
                if (this._culler) {
                  this._culler.clear();
                  this._culler.destroy();
                  this._culler = null;
                }
              }
              _calculateBounding(forceRefresh) {
                if (this._boundingBox) {
                  if (!this._culler) {
                    this._culler = new ParticleCuller(this);
                  }
                  this._culler.calculatePositions();
                  AABB.fromPoints(this._boundingBox, this._culler.minPos, this._culler.maxPos);
                  if (forceRefresh) {
                    this.aabbHalfX = this._boundingBox.halfExtents.x;
                    this.aabbHalfY = this._boundingBox.halfExtents.y;
                    this.aabbHalfZ = this._boundingBox.halfExtents.z;
                  } else {
                    if (this.aabbHalfX) {
                      this.setBoundingX(this.aabbHalfX);
                    } else {
                      this.aabbHalfX = this._boundingBox.halfExtents.x;
                    }
                    if (this.aabbHalfY) {
                      this.setBoundingY(this.aabbHalfY);
                    } else {
                      this.aabbHalfY = this._boundingBox.halfExtents.y;
                    }
                    if (this.aabbHalfZ) {
                      this.setBoundingZ(this.aabbHalfZ);
                    } else {
                      this.aabbHalfZ = this._boundingBox.halfExtents.z;
                    }
                  }
                  this._culler.clear();
                }
              }
              update(dt) {
                const scaledDeltaTime = dt * this.simulationSpeed;
                if (!this.renderCulling) {
                  if (this._boundingBox) {
                    this._boundingBox = null;
                  }
                  if (this._culler) {
                    this._culler.clear();
                    this._culler.destroy();
                    this._culler = null;
                  }
                  this._isSimulating = true;
                } else {
                  var _this$node$scene$rend;
                  if (!this._boundingBox) {
                    this._boundingBox = new AABB();
                    this._calculateBounding(false);
                  }
                  if (!this._curPos) {
                    this._curPos = new Vec3();
                  }
                  this.node.getWorldPosition(this._curPos);
                  if (!this._oldPos) {
                    this._oldPos = new Vec3();
                    this._oldPos.set(this._curPos);
                  }
                  if (!this._curPos.equals(this._oldPos) && this._boundingBox && this._culler) {
                    const dx = this._curPos.x - this._oldPos.x;
                    const dy = this._curPos.y - this._oldPos.y;
                    const dz = this._curPos.z - this._oldPos.z;
                    const center = this._boundingBox.center;
                    center.x += dx;
                    center.y += dy;
                    center.z += dz;
                    this._culler.setBoundingBoxCenter(center.x, center.y, center.z);
                    this._oldPos.set(this._curPos);
                  }
                  const cameraLst = (_this$node$scene$rend = this.node.scene.renderScene) === null || _this$node$scene$rend === void 0 ? void 0 : _this$node$scene$rend.cameras;
                  let culled = true;
                  if (cameraLst !== undefined && this._boundingBox) {
                    for (let i = 0; i < cameraLst.length; ++i) {
                      const camera = cameraLst[i];
                      const visibility = camera.visibility;
                      if ((visibility & this.node.layer) === this.node.layer) {
                        if (intersect.aabbFrustum(this._boundingBox, camera.frustum)) {
                          culled = false;
                          break;
                        }
                      }
                    }
                  }
                  if (culled) {
                    if (this._cullingMode !== CullingMode.AlwaysSimulate) {
                      this._isSimulating = false;
                    }
                    if (!this._isCulled) {
                      this.processor.detachFromScene();
                      this._isCulled = true;
                    }
                    if (this._trailModule && this._trailModule.enable) {
                      this._trailModule._detachFromScene();
                    }
                    if (this._cullingMode === CullingMode.PauseAndCatchup) {
                      this._time += scaledDeltaTime;
                    }
                    if (this._cullingMode !== CullingMode.AlwaysSimulate) {
                      return;
                    }
                  } else {
                    if (this._isCulled) {
                      this._attachToScene();
                      this._isCulled = false;
                    }
                    if (!this._isSimulating) {
                      this._isSimulating = true;
                    }
                  }
                  if (!this._isSimulating) {
                    return;
                  }
                }
                if (this._isPlaying) {
                  this._time += scaledDeltaTime;
                  this._emit(scaledDeltaTime);
                  if (this.processor.updateParticles(scaledDeltaTime) === 0 && !this._isEmitting) {
                    this.stop();
                  }
                } else {
                  const mat = this.getMaterialInstance(0) || this.processor.getDefaultMaterial();
                  const pass = mat.passes[0];
                  this.processor.updateRotation(pass);
                  this.processor.updateScale(pass);
                }
                if (this._needAttach) {
                  if (this.getParticleCount() > 0) {
                    if (!this._isCulled) {
                      var _this$processor$getMo2;
                      if (!((_this$processor$getMo2 = this.processor.getModel()) !== null && _this$processor$getMo2 !== void 0 && _this$processor$getMo2.scene)) {
                        this.processor.attachToScene();
                      }
                      if (this._trailModule && this._trailModule.enable) {
                        var _this$_trailModule$ge;
                        if (!((_this$_trailModule$ge = this._trailModule.getModel()) !== null && _this$_trailModule$ge !== void 0 && _this$_trailModule$ge.scene)) {
                          this._trailModule._attachToScene();
                        }
                      }
                      this._needAttach = false;
                    }
                  }
                }
                if (!this.renderer.useGPU && this._trailModule && this._trailModule.enable) {
                  if (!this._trailModule.inited) {
                    this._trailModule.clear();
                    this._trailModule.destroy();
                    this._trailModule.onInit(this);
                    this._trailModule.enable = false;
                    this._trailModule.enable = true;
                  }
                }
              }
              beforeRender() {
                var _this$processor$getMo4;
                if (this.getParticleCount() <= 0) {
                  var _this$processor$getMo3;
                  if ((_this$processor$getMo3 = this.processor.getModel()) !== null && _this$processor$getMo3 !== void 0 && _this$processor$getMo3.scene) {
                    this.processor.detachFromScene();
                    if (this._trailModule && this._trailModule.enable) {
                      this._trailModule._detachFromScene();
                    }
                    this._needAttach = false;
                  }
                } else if (!((_this$processor$getMo4 = this.processor.getModel()) !== null && _this$processor$getMo4 !== void 0 && _this$processor$getMo4.scene)) {
                  this._needAttach = true;
                }
                if (!this._isPlaying) return;
                this.processor.updateRenderData();
                this.processor.beforeRender();
                if (this._trailModule && this._trailModule.enable) {
                  this._trailModule.updateRenderData();
                  this._trailModule.beforeRender();
                }
              }
              _onVisibilityChange(val) {
                if (this.processor.model) {
                  this.processor.model.visFlags = val;
                }
              }
              emit(count, dt) {
                const loopDelta = this._time % this.duration / this.duration;
                if (this._needRefresh) {
                  this.node.invalidateChildren(TransformBit.POSITION);
                  this._needRefresh = false;
                }
                if (this._simulationSpace === Space.World) {
                  this.node.getWorldMatrix(_world_mat);
                  this.node.getWorldRotation(_world_rol);
                }
                for (let i = 0; i < count; ++i) {
                  const particle = this.processor.getFreeParticle();
                  if (particle === null) {
                    return;
                  }
                  particle.particleSystem = this;
                  particle.reset();
                  const rand = pseudoRandom(randomRangeInt(0, INT_MAX));
                  if (this._shapeModule && this._shapeModule.enable) {
                    this._shapeModule.emit(particle);
                  } else {
                    Vec3.set(particle.position, 0, 0, 0);
                    Vec3.copy(particle.velocity, particleEmitZAxis);
                  }
                  if (this._textureAnimationModule && this._textureAnimationModule.enable) {
                    this._textureAnimationModule.init(particle);
                  }
                  const curveStartSpeed = this.startSpeed.evaluate(loopDelta, rand);
                  Vec3.multiplyScalar(particle.velocity, particle.velocity, curveStartSpeed);
                  if (this._simulationSpace === Space.World) {
                    Vec3.transformMat4(particle.position, particle.position, _world_mat);
                    Vec3.transformQuat(particle.velocity, particle.velocity, _world_rol);
                  }
                  Vec3.copy(particle.ultimateVelocity, particle.velocity);
                  if (this.startRotation3D) {
                    particle.startEuler.set(this.startRotationX.evaluate(loopDelta, rand), this.startRotationY.evaluate(loopDelta, rand), this.startRotationZ.evaluate(loopDelta, rand));
                  } else {
                    particle.startEuler.set(0, 0, this.startRotationZ.evaluate(loopDelta, rand));
                  }
                  particle.rotation.set(particle.startEuler);
                  if (this.startSize3D) {
                    Vec3.set(particle.startSize, this.startSizeX.evaluate(loopDelta, rand), this.startSizeY.evaluate(loopDelta, rand), this.startSizeZ.evaluate(loopDelta, rand));
                  } else {
                    Vec3.set(particle.startSize, this.startSizeX.evaluate(loopDelta, rand), 1, 1);
                    particle.startSize.y = particle.startSize.x;
                  }
                  Vec3.copy(particle.size, particle.startSize);
                  particle.startColor.set(this.startColor.evaluate(loopDelta, rand));
                  particle.color.set(particle.startColor);
                  particle.startLifetime = this.startLifetime.evaluate(loopDelta, rand) + dt;
                  particle.remainingLifetime = particle.startLifetime;
                  particle.randomSeed = randomRangeInt(0, 233280);
                  particle.loopCount++;
                  this.processor.setNewParticle(particle);
                }
              }
              _prewarmSystem() {
                this.startDelay.mode = Mode$2.Constant;
                this.startDelay.constant = 0;
                const dt = 1.0;
                const cnt = this.duration / dt;
                for (let i = 0; i < cnt; ++i) {
                  this._time += dt;
                  this._emit(dt);
                  this.processor.updateParticles(dt);
                }
              }
              _emit(dt) {
                const startDelay = this.startDelay.evaluate(0, 1);
                if (this._time > startDelay) {
                  if (this._time > this.duration + startDelay) {
                    if (!this.loop) {
                      this._isEmitting = false;
                    }
                  }
                  if (!this._isEmitting) return;
                  this._emitRateTimeCounter += this.rateOverTime.evaluate(this._time / this.duration, 1) * dt;
                  if (this._emitRateTimeCounter > 1) {
                    const emitNum = Math.floor(this._emitRateTimeCounter);
                    this._emitRateTimeCounter -= emitNum;
                    this.emit(emitNum, dt);
                  }
                  const rateOverDistance = this.rateOverDistance.evaluate(this._time / this.duration, 1);
                  if (rateOverDistance > 0) {
                    Vec3.copy(this._oldWPos, this._curWPos);
                    this.node.getWorldPosition(this._curWPos);
                    const distance = Vec3.distance(this._curWPos, this._oldWPos);
                    this._emitRateDistanceCounter += distance * rateOverDistance;
                  }
                  if (this._emitRateDistanceCounter > 1) {
                    const emitNum = Math.floor(this._emitRateDistanceCounter);
                    this._emitRateDistanceCounter -= emitNum;
                    this.emit(emitNum, dt);
                  }
                  for (const burst of this.bursts) {
                    burst.update(this, dt);
                  }
                }
              }
              _resetPosition() {
                this.node.getWorldPosition(this._oldWPos);
                Vec3.copy(this._curWPos, this._oldWPos);
              }
              addSubEmitter(subEmitter) {
                this._subEmitters.push(subEmitter);
              }
              removeSubEmitter(idx) {
                this._subEmitters.splice(this._subEmitters.indexOf(idx), 1);
              }
              addBurst(burst) {
                this.bursts.push(burst);
              }
              removeBurst(idx) {
                this.bursts.splice(this.bursts.indexOf(idx), 1);
              }
              getBoundingX() {
                return this._aabbHalfX;
              }
              getBoundingY() {
                return this._aabbHalfY;
              }
              getBoundingZ() {
                return this._aabbHalfZ;
              }
              setBoundingX(value) {
                if (this._boundingBox && this._culler) {
                  this._boundingBox.halfExtents.x = value;
                  this._culler.setBoundingBoxSize(this._boundingBox.halfExtents);
                  this._aabbHalfX = value;
                }
              }
              setBoundingY(value) {
                if (this._boundingBox && this._culler) {
                  this._boundingBox.halfExtents.y = value;
                  this._culler.setBoundingBoxSize(this._boundingBox.halfExtents);
                  this._aabbHalfY = value;
                }
              }
              setBoundingZ(value) {
                if (this._boundingBox && this._culler) {
                  this._boundingBox.halfExtents.z = value;
                  this._culler.setBoundingBoxSize(this._boundingBox.halfExtents);
                  this._aabbHalfZ = value;
                }
              }
              get isPlaying() {
                return this._isPlaying;
              }
              get isPaused() {
                return this._isPaused;
              }
              get isStopped() {
                return this._isStopped;
              }
              get isEmitting() {
                return this._isEmitting;
              }
              get time() {
                return this._time;
              }
              _onBeforeSerialize(props) {
                return this.dataCulling ? props.filter(p => !PARTICLE_MODULE_PROPERTY.includes(p) || this[p] && this[p].enable) : props;
              }
              getNoisePreview(width, height) {
                const out = [];
                if (this.processor) {
                  this.processor.getNoisePreview(out, width, height);
                }
                return out;
              }
            }, _class3.CullingMode = CullingMode, _class3), (_initializer = applyDecoratedInitializer(_class2.prototype, "startColor", [_dec3, serializable$1], function () {
              return new GradientRange();
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "scaleSpace", [_dec4, serializable$1], function () {
              return Space.Local;
            }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "startSize3D", [serializable$1], function () {
              return false;
            }), _initializer4 = applyDecoratedInitializer(_class2.prototype, "startSizeX", [_dec5, _dec6], function () {
              return new CurveRange();
            }), _initializer5 = applyDecoratedInitializer(_class2.prototype, "startSizeY", [_dec7, serializable$1], function () {
              return new CurveRange();
            }), _initializer6 = applyDecoratedInitializer(_class2.prototype, "startSizeZ", [_dec8, serializable$1], function () {
              return new CurveRange();
            }), _initializer7 = applyDecoratedInitializer(_class2.prototype, "startSpeed", [_dec9, serializable$1], function () {
              return new CurveRange();
            }), _initializer8 = applyDecoratedInitializer(_class2.prototype, "startRotation3D", [serializable$1], function () {
              return false;
            }), _initializer9 = applyDecoratedInitializer(_class2.prototype, "startRotationX", [_dec10, serializable$1], function () {
              return new CurveRange();
            }), _initializer10 = applyDecoratedInitializer(_class2.prototype, "startRotationY", [_dec11, serializable$1], function () {
              return new CurveRange();
            }), _initializer11 = applyDecoratedInitializer(_class2.prototype, "startRotationZ", [_dec12, _dec13], function () {
              return new CurveRange();
            }), _initializer12 = applyDecoratedInitializer(_class2.prototype, "startDelay", [_dec14, serializable$1], function () {
              return new CurveRange();
            }), _initializer13 = applyDecoratedInitializer(_class2.prototype, "startLifetime", [_dec15, serializable$1], function () {
              return new CurveRange();
            }), _initializer14 = applyDecoratedInitializer(_class2.prototype, "duration", [serializable$1], function () {
              return 5.0;
            }), _initializer15 = applyDecoratedInitializer(_class2.prototype, "loop", [serializable$1], function () {
              return true;
            }), _applyDecoratedDescriptor(_class2.prototype, "simulationSpace", [_dec16, serializable$1], Object.getOwnPropertyDescriptor(_class2.prototype, "simulationSpace"), _class2.prototype), _initializer16 = applyDecoratedInitializer(_class2.prototype, "simulationSpeed", [serializable$1], function () {
              return 1.0;
            }), _initializer17 = applyDecoratedInitializer(_class2.prototype, "playOnAwake", [serializable$1], function () {
              return true;
            }), _initializer18 = applyDecoratedInitializer(_class2.prototype, "gravityModifier", [_dec17, serializable$1], function () {
              return new CurveRange();
            }), _initializer19 = applyDecoratedInitializer(_class2.prototype, "rateOverTime", [_dec18, serializable$1], function () {
              return new CurveRange();
            }), _initializer20 = applyDecoratedInitializer(_class2.prototype, "rateOverDistance", [_dec19, serializable$1], function () {
              return new CurveRange();
            }), _initializer21 = applyDecoratedInitializer(_class2.prototype, "bursts", [_dec20, serializable$1], function () {
              return [];
            }), _applyDecoratedDescriptor(_class2.prototype, "renderCulling", [_dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "renderCulling"), _class2.prototype), _initializer22 = applyDecoratedInitializer(_class2.prototype, "_renderCulling", [serializable$1], function () {
              return false;
            }), _applyDecoratedDescriptor(_class2.prototype, "cullingMode", [_dec22], Object.getOwnPropertyDescriptor(_class2.prototype, "cullingMode"), _class2.prototype), _initializer23 = applyDecoratedInitializer(_class2.prototype, "_cullingMode", [serializable$1], function () {
              return CullingMode.Pause;
            }), _applyDecoratedDescriptor(_class2.prototype, "aabbHalfX", [_dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "aabbHalfX"), _class2.prototype), _initializer24 = applyDecoratedInitializer(_class2.prototype, "_aabbHalfX", [serializable$1], function () {
              return 0;
            }), _applyDecoratedDescriptor(_class2.prototype, "aabbHalfY", [_dec24], Object.getOwnPropertyDescriptor(_class2.prototype, "aabbHalfY"), _class2.prototype), _initializer25 = applyDecoratedInitializer(_class2.prototype, "_aabbHalfY", [serializable$1], function () {
              return 0;
            }), _applyDecoratedDescriptor(_class2.prototype, "aabbHalfZ", [_dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "aabbHalfZ"), _class2.prototype), _initializer26 = applyDecoratedInitializer(_class2.prototype, "_aabbHalfZ", [serializable$1], function () {
              return 0;
            }), _initializer27 = applyDecoratedInitializer(_class2.prototype, "_dataCulling", [serializable$1, _dec26], function () {
              return false;
            }), _applyDecoratedDescriptor(_class2.prototype, "sharedMaterials", [override, serializable$1], Object.getOwnPropertyDescriptor(_class2.prototype, "sharedMaterials"), _class2.prototype), _initializer28 = applyDecoratedInitializer(_class2.prototype, "_colorOverLifetimeModule", [_dec27], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2.prototype, "colorOverLifetimeModule", [_dec28], Object.getOwnPropertyDescriptor(_class2.prototype, "colorOverLifetimeModule"), _class2.prototype), _initializer29 = applyDecoratedInitializer(_class2.prototype, "_shapeModule", [_dec29], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2.prototype, "shapeModule", [_dec30], Object.getOwnPropertyDescriptor(_class2.prototype, "shapeModule"), _class2.prototype), _initializer30 = applyDecoratedInitializer(_class2.prototype, "_sizeOvertimeModule", [_dec31], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2.prototype, "sizeOvertimeModule", [_dec32], Object.getOwnPropertyDescriptor(_class2.prototype, "sizeOvertimeModule"), _class2.prototype), _initializer31 = applyDecoratedInitializer(_class2.prototype, "_velocityOvertimeModule", [_dec33], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2.prototype, "velocityOvertimeModule", [_dec34], Object.getOwnPropertyDescriptor(_class2.prototype, "velocityOvertimeModule"), _class2.prototype), _initializer32 = applyDecoratedInitializer(_class2.prototype, "_forceOvertimeModule", [_dec35], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2.prototype, "forceOvertimeModule", [_dec36], Object.getOwnPropertyDescriptor(_class2.prototype, "forceOvertimeModule"), _class2.prototype), _initializer33 = applyDecoratedInitializer(_class2.prototype, "_limitVelocityOvertimeModule", [_dec37], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2.prototype, "limitVelocityOvertimeModule", [_dec38], Object.getOwnPropertyDescriptor(_class2.prototype, "limitVelocityOvertimeModule"), _class2.prototype), _initializer34 = applyDecoratedInitializer(_class2.prototype, "_rotationOvertimeModule", [_dec39], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2.prototype, "rotationOvertimeModule", [_dec40], Object.getOwnPropertyDescriptor(_class2.prototype, "rotationOvertimeModule"), _class2.prototype), _initializer35 = applyDecoratedInitializer(_class2.prototype, "_textureAnimationModule", [_dec41], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2.prototype, "textureAnimationModule", [_dec42], Object.getOwnPropertyDescriptor(_class2.prototype, "textureAnimationModule"), _class2.prototype), _initializer36 = applyDecoratedInitializer(_class2.prototype, "_noiseModule", [_dec43], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2.prototype, "noiseModule", [_dec44], Object.getOwnPropertyDescriptor(_class2.prototype, "noiseModule"), _class2.prototype), _initializer37 = applyDecoratedInitializer(_class2.prototype, "_trailModule", [_dec45], function () {
              return null;
            }), _applyDecoratedDescriptor(_class2.prototype, "trailModule", [_dec46], Object.getOwnPropertyDescriptor(_class2.prototype, "trailModule"), _class2.prototype), _initializer38 = applyDecoratedInitializer(_class2.prototype, "renderer", [_dec47, serializable$1], function () {
              return new ParticleSystemRenderer();
            }), _initializer39 = applyDecoratedInitializer(_class2.prototype, "_prewarm", [serializable$1], function () {
              return false;
            }), _initializer40 = applyDecoratedInitializer(_class2.prototype, "_capacity", [serializable$1], function () {
              return 100;
            }), _initializer41 = applyDecoratedInitializer(_class2.prototype, "_simulationSpace", [serializable$1], function () {
              return Space.Local;
            })), _class2)) || _class) || _class); exports({ ParticleSystem: ParticleSystem, ParticleSystemComponent: ParticleSystem });

            class ParticleUtils {
              static instantiate(prefab) {
                if (!this.registeredSceneEvent) {
                  director.on(Director.EVENT_BEFORE_SCENE_LAUNCH, this.onSceneUnload, this);
                  this.registeredSceneEvent = true;
                }
                if (!this.particleSystemPool.has(prefab._uuid)) {
                  this.particleSystemPool.set(prefab._uuid, new Pool(() => instantiate(prefab) || new Node(), 1, prefab => prefab.destroy()));
                }
                return this.particleSystemPool.get(prefab._uuid).alloc();
              }
              static destroy(prefab) {
                if (this.particleSystemPool.has(prefab._prefab.asset._uuid)) {
                  this.stop(prefab);
                  this.particleSystemPool.get(prefab._prefab.asset._uuid).free(prefab);
                }
              }
              static play(rootNode) {
                for (const ps of rootNode.getComponentsInChildren(ParticleSystem)) {
                  ps.play();
                }
              }
              static stop(rootNode) {
                for (const ps of rootNode.getComponentsInChildren(ParticleSystem)) {
                  ps.stop();
                }
              }
              static onSceneUnload() {
                this.particleSystemPool.forEach(value => value.destroy());
                this.particleSystemPool.clear();
              }
            } exports('ParticleUtils', ParticleUtils);
            ParticleUtils.particleSystemPool = new Map();
            ParticleUtils.registeredSceneEvent = false;

            removeProperty(Burst.prototype, 'Burst.prototype', [{
              name: 'minCount'
            }, {
              name: 'maxCount'
            }]);
            replaceProperty(ParticleSystem.prototype, 'ParticleSystem.prototype', [{
              name: 'enableCulling',
              newName: 'dataCulling'
            }]);
            legacyCC.ParticleSystemComponent = ParticleSystem;
            setClassAlias(ParticleSystem, 'cc.ParticleSystemComponent');
            legacyCC.BillboardComponent = Billboard;
            setClassAlias(Billboard, 'cc.BillboardComponent');
            legacyCC.LineComponent = Line;
            setClassAlias(Line, 'cc.LineComponent');

            legacyCC.ParticleUtils = ParticleUtils;

        })
    };
}));
