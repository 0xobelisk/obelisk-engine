System.register(['./index-ce98320e.js', './decorators-b63b63a2.js', './node-event-18d96a1b.js'], (function (exports) {
    'use strict';
    var Enum, Vec3, Mat3, legacyCC, assertIsTrue, Vec4, ccclass, type, disallowMultiple, applyDecoratedInitializer, CCInteger, serializable, patch_cc_Vertex, patch_cc_CircumSphere, patch_cc_Tetrahedron, patch_cc_LightProbesData, _applyDecoratedDescriptor, Component, NodeEventType;
    return {
        setters: [function (module) {
            Enum = module.aa;
            Vec3 = module.n;
            Mat3 = module.M;
            legacyCC = module.l;
            assertIsTrue = module.bu;
            Vec4 = module.p;
            ccclass = module.by;
            type = module.bw;
            disallowMultiple = module.ck;
            applyDecoratedInitializer = module.bx;
            CCInteger = module.at;
            serializable = module.bf;
        }, function (module) {
            patch_cc_Vertex = module.P;
            patch_cc_CircumSphere = module.Q;
            patch_cc_Tetrahedron = module.R;
            patch_cc_LightProbesData = module.S;
        }, function (module) {
            _applyDecoratedDescriptor = module.H;
            Component = module.C;
            NodeEventType = module.N;
        }],
        execute: (function () {

            const PlaceMethod = exports('PlaceMethod', Enum({
              UNIFORM: 0,
              ADAPTIVE: 1
            }));
            class AutoPlacement {
              static generate(info) {
                switch (info.method) {
                  case PlaceMethod.UNIFORM:
                    return this.doGenerateUniform(info);
                  case PlaceMethod.ADAPTIVE:
                    return this.doGenerateAdaptive(info);
                  default:
                    return [];
                }
              }
              static doGenerateUniform(info) {
                if (info.nProbesX < 2 || info.nProbesY < 2 || info.nProbesZ < 2) {
                  return [];
                }
                const probes = [];
                const position = new Vec3(0.0, 0.0, 0.0);
                const gridSize = new Vec3((info.maxPos.x - info.minPos.x) / (info.nProbesX - 1), (info.maxPos.y - info.minPos.y) / (info.nProbesY - 1), (info.maxPos.z - info.minPos.z) / (info.nProbesZ - 1));
                for (let x = 0; x < info.nProbesX; x++) {
                  position.x = x * gridSize.x + info.minPos.x;
                  for (let y = 0; y < info.nProbesY; y++) {
                    position.y = y * gridSize.y + info.minPos.y;
                    for (let z = 0; z < info.nProbesZ; z++) {
                      position.z = z * gridSize.z + info.minPos.z;
                      probes.push(new Vec3(position));
                    }
                  }
                }
                return probes;
              }
              static doGenerateAdaptive(info) {
                return this.doGenerateUniform(info);
              }
            } exports('AutoPlacement', AutoPlacement);

            const Vertex = exports('Vertex', jsb.Vertex);
            patch_cc_Vertex({
              Vertex,
              Vec3
            });
            const CircumSphere = exports('CircumSphere', jsb.CircumSphere);
            patch_cc_CircumSphere({
              CircumSphere,
              Vec3
            });
            const Tetrahedron = exports('Tetrahedron', jsb.Tetrahedron);
            patch_cc_Tetrahedron({
              Tetrahedron,
              Mat3,
              Vec3,
              CircumSphere
            });

            const SH_BASIS_COUNT = 9;
            class LightProbeSampler {
              static uniformSampleSphere(u1, u2) {
                const z = 1.0 - 2.0 * u1;
                const r = Math.sqrt(Math.max(0.0, 1.0 - z * z));
                const phi = 2.0 * Math.PI * u2;
                const x = r * Math.cos(phi);
                const y = r * Math.sin(phi);
                return new Vec3(x, y, z);
              }
              static uniformSampleSphereAll(sampleCount) {
                assertIsTrue(sampleCount > 0);
                const uCount1 = Math.floor(Math.sqrt(sampleCount));
                const uCount2 = uCount1;
                const samples = [];
                const uDelta1 = 1.0 / uCount1;
                const uDelta2 = 1.0 / uCount2;
                for (let i = 0; i < uCount1; i++) {
                  const u1 = (i + 0.5) * uDelta1;
                  for (let j = 0; j < uCount2; j++) {
                    const u2 = (j + 0.5) * uDelta2;
                    const sample = this.uniformSampleSphere(u1, u2);
                    samples.push(sample);
                  }
                }
                return samples;
              }
              static uniformSpherePdf() {
                return 1.0 / (4.0 * Math.PI);
              }
            } exports('LightProbeSampler', LightProbeSampler);
            class SH {
              static updateUBOData(data, offset, coefficients) {
                data[offset++] = coefficients[3].x * this.basisOverPI[3];
                data[offset++] = coefficients[1].x * this.basisOverPI[1];
                data[offset++] = coefficients[2].x * this.basisOverPI[2];
                data[offset++] = coefficients[0].x * this.basisOverPI[0] - coefficients[6].x * this.basisOverPI[6] / 3.0;
                data[offset++] = coefficients[3].y * this.basisOverPI[3];
                data[offset++] = coefficients[1].y * this.basisOverPI[1];
                data[offset++] = coefficients[2].y * this.basisOverPI[2];
                data[offset++] = coefficients[0].y * this.basisOverPI[0] - coefficients[6].y * this.basisOverPI[6] / 3.0;
                data[offset++] = coefficients[3].z * this.basisOverPI[3];
                data[offset++] = coefficients[1].z * this.basisOverPI[1];
                data[offset++] = coefficients[2].z * this.basisOverPI[2];
                data[offset++] = coefficients[0].z * this.basisOverPI[0] - coefficients[6].z * this.basisOverPI[6] / 3.0;
                data[offset++] = coefficients[4].x * this.basisOverPI[4];
                data[offset++] = coefficients[5].x * this.basisOverPI[5];
                data[offset++] = coefficients[6].x * this.basisOverPI[6];
                data[offset++] = coefficients[7].x * this.basisOverPI[7];
                data[offset++] = coefficients[4].y * this.basisOverPI[4];
                data[offset++] = coefficients[5].y * this.basisOverPI[5];
                data[offset++] = coefficients[6].y * this.basisOverPI[6];
                data[offset++] = coefficients[7].y * this.basisOverPI[7];
                data[offset++] = coefficients[4].z * this.basisOverPI[4];
                data[offset++] = coefficients[5].z * this.basisOverPI[5];
                data[offset++] = coefficients[6].z * this.basisOverPI[6];
                data[offset++] = coefficients[7].z * this.basisOverPI[7];
                data[offset++] = coefficients[8].x * this.basisOverPI[8];
                data[offset++] = coefficients[8].y * this.basisOverPI[8];
                data[offset++] = coefficients[8].z * this.basisOverPI[8];
                data[offset++] = 0.0;
              }
              static shaderEvaluate(normal, coefficients) {
                const linearConstR = new Vec4(coefficients[3].x * this.basisOverPI[3], coefficients[1].x * this.basisOverPI[1], coefficients[2].x * this.basisOverPI[2], coefficients[0].x * this.basisOverPI[0] - coefficients[6].x * this.basisOverPI[6] / 3.0);
                const linearConstG = new Vec4(coefficients[3].y * this.basisOverPI[3], coefficients[1].y * this.basisOverPI[1], coefficients[2].y * this.basisOverPI[2], coefficients[0].y * this.basisOverPI[0] - coefficients[6].y * this.basisOverPI[6] / 3.0);
                const linearConstB = new Vec4(coefficients[3].z * this.basisOverPI[3], coefficients[1].z * this.basisOverPI[1], coefficients[2].z * this.basisOverPI[2], coefficients[0].z * this.basisOverPI[0] - coefficients[6].z * this.basisOverPI[6] / 3.0);
                const quadraticR = new Vec4(coefficients[4].x * this.basisOverPI[4], coefficients[5].x * this.basisOverPI[5], coefficients[6].x * this.basisOverPI[6], coefficients[7].x * this.basisOverPI[7]);
                const quadraticG = new Vec4(coefficients[4].y * this.basisOverPI[4], coefficients[5].y * this.basisOverPI[5], coefficients[6].y * this.basisOverPI[6], coefficients[7].y * this.basisOverPI[7]);
                const quadraticB = new Vec4(coefficients[4].z * this.basisOverPI[4], coefficients[5].z * this.basisOverPI[5], coefficients[6].z * this.basisOverPI[6], coefficients[7].z * this.basisOverPI[7]);
                const quadraticA = new Vec3(coefficients[8].x * this.basisOverPI[8], coefficients[8].y * this.basisOverPI[8], coefficients[8].z * this.basisOverPI[8]);
                const result = new Vec3(0.0, 0.0, 0.0);
                const normal4 = new Vec4(normal.x, normal.y, normal.z, 1.0);
                result.x = Vec4.dot(linearConstR, normal4);
                result.y = Vec4.dot(linearConstG, normal4);
                result.z = Vec4.dot(linearConstB, normal4);
                const n14 = new Vec4(normal.x * normal.y, normal.y * normal.z, normal.z * normal.z, normal.z * normal.x);
                const n5 = normal.x * normal.x - normal.y * normal.y;
                result.x += Vec4.dot(quadraticR, n14);
                result.y += Vec4.dot(quadraticG, n14);
                result.z += Vec4.dot(quadraticB, n14);
                Vec3.scaleAndAdd(result, result, quadraticA, n5);
                return result;
              }
              static evaluate(sample, coefficients) {
                const result = new Vec3(0.0, 0.0, 0.0);
                const size = coefficients.length;
                for (let i = 0; i < size; i++) {
                  const c = coefficients[i];
                  Vec3.scaleAndAdd(result, result, c, this.evaluateBasis(i, sample));
                }
                return result;
              }
              static project(samples, values) {
                assertIsTrue(samples.length > 0 && samples.length === values.length);
                const basisCount = this.getBasisCount();
                const sampleCount = samples.length;
                const scale = 1.0 / (LightProbeSampler.uniformSpherePdf() * sampleCount);
                const coefficients = [];
                for (let i = 0; i < basisCount; i++) {
                  const coefficient = new Vec3(0.0, 0.0, 0.0);
                  for (let k = 0; k < sampleCount; k++) {
                    Vec3.scaleAndAdd(coefficient, coefficient, values[k], this.evaluateBasis(i, samples[k]));
                  }
                  Vec3.multiplyScalar(coefficient, coefficient, scale);
                  coefficients.push(coefficient);
                }
                return coefficients;
              }
              static convolveCosine(radianceCoefficients) {
                const cosTheta = [0.8862268925, 1.0233267546, 0.4954159260];
                const irradianceCoefficients = [];
                for (let l = 0; l <= this.LMAX; l++) {
                  for (let m = -l; m <= l; m++) {
                    const i = this.toIndex(l, m);
                    const coefficient = new Vec3(0.0, 0.0, 0.0);
                    Vec3.multiplyScalar(coefficient, radianceCoefficients[i], this.lambda(l) * cosTheta[l]);
                    irradianceCoefficients.push(coefficient);
                  }
                }
                return irradianceCoefficients;
              }
              static getBasisCount() {
                return SH_BASIS_COUNT;
              }
              static evaluateBasis(index, sample) {
                assertIsTrue(index < this.getBasisCount());
                const func = this.basisFunctions[index];
                return func(sample);
              }
              static reduceRinging(coefficients, lambda) {
                if (lambda === 0.0) {
                  return;
                }
                for (let l = 0; l <= this.LMAX; ++l) {
                  const scale = 1.0 / (1.0 + lambda * l * l * (l + 1) * (l + 1));
                  for (let m = -l; m <= l; ++m) {
                    const i = this.toIndex(l, m);
                    Vec3.multiplyScalar(coefficients[i], coefficients[i], scale);
                  }
                }
              }
              static lambda(l) {
                return Math.sqrt(4.0 * Math.PI / (2.0 * l + 1.0));
              }
              static toIndex(l, m) {
                return l * l + l + m;
              }
            } exports('SH', SH);
            SH.LMAX = 2;
            SH.basisFunctions = [v => 0.282095, v => 0.488603 * v.y, v => 0.488603 * v.z, v => 0.488603 * v.x, v => 1.09255 * v.y * v.x, v => 1.09255 * v.y * v.z, v => 0.946175 * (v.z * v.z - 1.0 / 3.0), v => 1.09255 * v.z * v.x, v => 0.546274 * (v.x * v.x - v.y * v.y)];
            SH.basisOverPI = [0.0897936, 0.155527, 0.155527, 0.155527, 0.347769, 0.347769, 0.301177, 0.347769, 0.173884];
            legacyCC.internal.SH = SH;

            const LightProbes = exports('LightProbes', jsb.LightProbes);
            ccclass('cc.LightProbes')(LightProbes);
            const LightProbesData = exports('LightProbesData', jsb.LightProbesData);
            patch_cc_LightProbesData({
              LightProbesData,
              Vertex,
              Tetrahedron
            });

            var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _initializer7;
            let LightProbeGroup = exports('LightProbeGroup', (_dec = ccclass('cc.LightProbeGroup'), _dec2 = type([Vec3]), _dec3 = type(PlaceMethod), _dec4 = type(CCInteger), _dec5 = type(CCInteger), _dec6 = type(CCInteger), _dec(_class = disallowMultiple(_class = (_class2 = class LightProbeGroup extends Component {
              constructor(...args) {
                super(...args);
                this._probes = _initializer && _initializer();
                this._method = _initializer2 && _initializer2();
                this._minPos = _initializer3 && _initializer3();
                this._maxPos = _initializer4 && _initializer4();
                this._nProbesX = _initializer5 && _initializer5();
                this._nProbesY = _initializer6 && _initializer6();
                this._nProbesZ = _initializer7 && _initializer7();
              }
              get probes() {
                return this._probes;
              }
              set probes(val) {
                this._probes = val;
              }
              get method() {
                return this._method;
              }
              get minPos() {
                return this._minPos;
              }
              set minPos(val) {
                this._minPos = val;
              }
              get maxPos() {
                return this._maxPos;
              }
              set maxPos(val) {
                this._maxPos = val;
              }
              get nProbesX() {
                return this._nProbesX;
              }
              set nProbesX(val) {
                this._nProbesX = val;
              }
              get nProbesY() {
                return this._nProbesY;
              }
              set nProbesY(val) {
                this._nProbesY = val;
              }
              get nProbesZ() {
                return this._nProbesZ;
              }
              set nProbesZ(val) {
                this._nProbesZ = val;
              }
              onLoad() {
                {
                  return;
                }
              }
              onEnable() {
                {
                  return;
                }
              }
              onDisable() {
                {
                  return;
                }
              }
              generateLightProbes() {
                if (!this.node) {
                  return;
                }
                this._probes = AutoPlacement.generate({
                  method: this._method,
                  nProbesX: this._nProbesX,
                  nProbesY: this._nProbesY,
                  nProbesZ: this._nProbesZ,
                  minPos: this._minPos,
                  maxPos: this._maxPos
                });
                this.onProbeChanged();
              }
              onProbeChanged(updateTet = true, emitEvent = true) {
                this.node.scene.globals.lightProbeInfo.syncData(this.node, this.probes);
                this.node.scene.globals.lightProbeInfo.update(updateTet);
                if (emitEvent) {
                  this.node.emit(NodeEventType.LIGHT_PROBE_CHANGED);
                }
              }
            }, (_initializer = applyDecoratedInitializer(_class2.prototype, "_probes", [serializable], function () {
              return [];
            }), _initializer2 = applyDecoratedInitializer(_class2.prototype, "_method", [serializable], function () {
              return PlaceMethod.UNIFORM;
            }), _initializer3 = applyDecoratedInitializer(_class2.prototype, "_minPos", [serializable], function () {
              return new Vec3(-5, -5, -5);
            }), _initializer4 = applyDecoratedInitializer(_class2.prototype, "_maxPos", [serializable], function () {
              return new Vec3(5, 5, 5);
            }), _initializer5 = applyDecoratedInitializer(_class2.prototype, "_nProbesX", [serializable], function () {
              return 3;
            }), _initializer6 = applyDecoratedInitializer(_class2.prototype, "_nProbesY", [serializable], function () {
              return 3;
            }), _initializer7 = applyDecoratedInitializer(_class2.prototype, "_nProbesZ", [serializable], function () {
              return 3;
            }), _applyDecoratedDescriptor(_class2.prototype, "probes", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "probes"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "method", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "method"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "nProbesX", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "nProbesX"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "nProbesY", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "nProbesY"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "nProbesZ", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "nProbesZ"), _class2.prototype)), _class2)) || _class) || _class));

        })
    };
}));
