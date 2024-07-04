System.register(['./index-ce98320e.js', './node-event-18d96a1b.js', './sprite-renderer-9a6a919d.js', './builtin-res-mgr.jsb-c9e8e53a.js', './find-7a03d1cc.js', './ZipUtils-79879a2c.js', './director-dc238483.js', './device-90bc7390.js', './decorators-b63b63a2.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './rendering-sub-mesh.jsb-25043997.js', './scene-asset.jsb-0d4c6201.js', './deprecated-f8df8d32.js', './murmurhash2_gc-2108d723.js', './deprecated-fcfb90f6.js', './camera-component-b329f870.js', './model-renderer-f8d2f66d.js', './renderer-3bf7a012.js', './create-mesh.jsb-8af9d27e.js', './buffer-9511d9f4.js', './touch-af62e326.js'], (function (exports) {
    'use strict';
    var Enum, Vec2, Pool, Color, random, clampf, degreesToRadians, radiansToDegrees, applyDecoratedInitializer, legacyCC, _decorator, getError, logID, ccwindow, ccclass$1, type, override, errorID, error, warnID, serializable$1, formerlySerializedAs, Asset, _applyDecoratedDescriptor, changeBasename, getComponentPerVertex, vfmtPosUvColor, SpriteFrame, UIRenderer, MeshRenderData, assetManager, builtinResMgr, ImageAsset, Texture2D, _p, codec, BlendFactor;
    return {
        setters: [function (module) {
            Enum = module.aa;
            Vec2 = module.V;
            Pool = module.bP;
            Color = module.C;
            random = module.L;
            clampf = module.cD;
            degreesToRadians = module.cM;
            radiansToDegrees = module.cN;
            applyDecoratedInitializer = module.bx;
            legacyCC = module.l;
            _decorator = module.ap;
            getError = module.aI;
            logID = module.c;
            ccwindow = module.c6;
            ccclass$1 = module.by;
            type = module.bw;
            override = module.bd;
            errorID = module.f;
            error = module.e;
            warnID = module.d;
            serializable$1 = module.bf;
            formerlySerializedAs = module.be;
        }, function (module) {
            Asset = module.A;
            _applyDecoratedDescriptor = module.H;
            changeBasename = module.a;
        }, function (module) {
            getComponentPerVertex = module.p;
            vfmtPosUvColor = module.i;
            SpriteFrame = module.a;
            UIRenderer = module.b;
            MeshRenderData = module.f;
        }, function (module) {
            assetManager = module.aq;
            builtinResMgr = module.at;
            ImageAsset = module.al;
            Texture2D = module.am;
        }, function () {}, function (module) {
            _p = module._;
            codec = module.c;
        }, function () {}, function (module) {
            BlendFactor = module.n;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            const DURATION_INFINITY = -1;
            const START_SIZE_EQUAL_TO_END_SIZE = -1;
            const START_RADIUS_EQUAL_TO_END_RADIUS = -1;
            const EmitterMode = Enum({
              GRAVITY: 0,
              RADIUS: 1
            });
            const PositionType = Enum({
              FREE: 0,
              RELATIVE: 1,
              GROUPED: 2
            });

            const ZERO_VEC2 = new Vec2(0, 0);
            const _pos = new Vec2();
            const _tpa = new Vec2();
            const _tpb = new Vec2();
            const _tpc = new Vec2();
            const formatBytes = getComponentPerVertex(vfmtPosUvColor);
            function getWorldRotation(node) {
              let rotation = 0;
              let tempNode = node;
              while (tempNode) {
                rotation += tempNode.eulerAngles.z;
                tempNode = tempNode.parent;
              }
              return rotation;
            }
            class Particle {
              constructor() {
                this.pos = new Vec2(0, 0);
                this.startPos = new Vec2(0, 0);
                this.color = new Color(0, 0, 0, 255);
                this.deltaColor = {
                  r: 0,
                  g: 0,
                  b: 0,
                  a: 255
                };
                this.size = 0;
                this.deltaSize = 0;
                this.rotation = 0;
                this.deltaRotation = 0;
                this.timeToLive = 0;
                this.drawPos = new Vec2(0, 0);
                this.aspectRatio = 1;
                this.dir = new Vec2(0, 0);
                this.radialAccel = 0;
                this.tangentialAccel = 0;
                this.angle = 0;
                this.degreesPerSecond = 0;
                this.radius = 0;
                this.deltaRadius = 0;
              }
            }
            class ParticlePool extends Pool {
              get() {
                return this._get() || new Particle();
              }
            }
            const pool = new ParticlePool(par => {
              par.pos.set(ZERO_VEC2);
              par.startPos.set(ZERO_VEC2);
              par.color._val = 0xFF000000;
              par.deltaColor.r = par.deltaColor.g = par.deltaColor.b = 0;
              par.deltaColor.a = 255;
              par.size = 0;
              par.deltaSize = 0;
              par.rotation = 0;
              par.deltaRotation = 0;
              par.timeToLive = 0;
              par.drawPos.set(ZERO_VEC2);
              par.aspectRatio = 1;
              par.dir.set(ZERO_VEC2);
              par.radialAccel = 0;
              par.tangentialAccel = 0;
              par.angle = 0;
              par.degreesPerSecond = 0;
              par.radius = 0;
              par.deltaRadius = 0;
            }, 1024);
            class Simulator {
              constructor(system) {
                this.particles = [];
                this.active = false;
                this.uvFilled = 0;
                this.finished = false;
                this.readyToPlay = true;
                this.elapsed = 0;
                this.emitCounter = 0;
                this._worldRotation = 0;
                this.sys = system;
                this.particles = [];
                this.active = false;
                this.readyToPlay = true;
                this.finished = false;
                this.elapsed = 0;
                this.emitCounter = 0;
                this.uvFilled = 0;
                this._worldRotation = 0;
              }
              stop() {
                this.active = false;
                this.readyToPlay = false;
                this.elapsed = this.sys.duration;
                this.emitCounter = 0;
              }
              reset() {
                this.active = true;
                this.readyToPlay = true;
                this.elapsed = 0;
                this.emitCounter = 0;
                this.finished = false;
                const particles = this.particles;
                for (let id = 0; id < particles.length; ++id) pool.put(particles[id]);
                particles.length = 0;
                this.renderData.resize(0, 0);
              }
              emitParticle(pos) {
                const psys = this.sys;
                const particle = pool.get();
                this.particles.push(particle);
                particle.timeToLive = psys.life + psys.lifeVar * (random() - 0.5) * 2;
                const timeToLive = particle.timeToLive = Math.max(0, particle.timeToLive);
                particle.pos.x = psys.sourcePos.x + psys.posVar.x * (random() - 0.5) * 2;
                particle.pos.y = psys.sourcePos.y + psys.posVar.y * (random() - 0.5) * 2;
                let sr = 0;
                let sg = 0;
                let sb = 0;
                let sa = 0;
                const startColor = psys.startColor;
                const startColorVar = psys.startColorVar;
                const endColor = psys.endColor;
                const endColorVar = psys.endColorVar;
                particle.color.r = sr = clampf(startColor.r + startColorVar.r * (random() - 0.5) * 2, 0, 255);
                particle.color.g = sg = clampf(startColor.g + startColorVar.g * (random() - 0.5) * 2, 0, 255);
                particle.color.b = sb = clampf(startColor.b + startColorVar.b * (random() - 0.5) * 2, 0, 255);
                particle.color.a = sa = clampf(startColor.a + startColorVar.a * (random() - 0.5) * 2, 0, 255);
                particle.deltaColor.r = (clampf(endColor.r + endColorVar.r * (random() - 0.5) * 2, 0, 255) - sr) / timeToLive;
                particle.deltaColor.g = (clampf(endColor.g + endColorVar.g * (random() - 0.5) * 2, 0, 255) - sg) / timeToLive;
                particle.deltaColor.b = (clampf(endColor.b + endColorVar.b * (random() - 0.5) * 2, 0, 255) - sb) / timeToLive;
                particle.deltaColor.a = (clampf(endColor.a + endColorVar.a * (random() - 0.5) * 2, 0, 255) - sa) / timeToLive;
                let startS = psys.startSize + psys.startSizeVar * (random() - 0.5) * 2;
                startS = Math.max(0, startS);
                particle.size = startS;
                if (psys.endSize === START_SIZE_EQUAL_TO_END_SIZE) {
                  particle.deltaSize = 0;
                } else {
                  let endS = psys.endSize + psys.endSizeVar * (random() - 0.5) * 2;
                  endS = Math.max(0, endS);
                  particle.deltaSize = (endS - startS) / timeToLive;
                }
                const startA = psys.startSpin + psys.startSpinVar * (random() - 0.5) * 2;
                const endA = psys.endSpin + psys.endSpinVar * (random() - 0.5) * 2;
                particle.rotation = startA;
                particle.deltaRotation = (endA - startA) / timeToLive;
                particle.startPos.x = pos.x;
                particle.startPos.y = pos.y;
                particle.aspectRatio = psys.aspectRatio || 1;
                const a = degreesToRadians(psys.angle + this._worldRotation + psys.angleVar * (random() - 0.5) * 2);
                if (psys.emitterMode === EmitterMode.GRAVITY) {
                  const s = psys.speed + psys.speedVar * (random() - 0.5) * 2;
                  particle.dir.x = Math.cos(a);
                  particle.dir.y = Math.sin(a);
                  particle.dir.multiplyScalar(s);
                  particle.radialAccel = psys.radialAccel + psys.radialAccelVar * (random() - 0.5) * 2;
                  particle.tangentialAccel = psys.tangentialAccel + psys.tangentialAccelVar * (random() - 0.5) * 2;
                  if (psys.rotationIsDir) {
                    particle.rotation = -radiansToDegrees(Math.atan2(particle.dir.y, particle.dir.x));
                  }
                } else {
                  const startRadius = psys.startRadius + psys.startRadiusVar * (random() - 0.5) * 2;
                  const endRadius = psys.endRadius + psys.endRadiusVar * (random() - 0.5) * 2;
                  particle.radius = startRadius;
                  particle.deltaRadius = psys.endRadius === START_RADIUS_EQUAL_TO_END_RADIUS ? 0 : (endRadius - startRadius) / timeToLive;
                  particle.angle = a;
                  particle.degreesPerSecond = degreesToRadians(psys.rotatePerS + psys.rotatePerSVar * (random() - 0.5) * 2);
                }
              }
              updateUVs(force) {
                const renderData = this.renderData;
                if (renderData && this.sys._renderSpriteFrame) {
                  const vbuf = renderData.vData;
                  const uv = this.sys._renderSpriteFrame.uv;
                  const start = force ? 0 : this.uvFilled;
                  const particleCount = this.particles.length;
                  for (let i = start; i < particleCount; i++) {
                    const offset = i * formatBytes * 4;
                    vbuf[offset + 3] = uv[0];
                    vbuf[offset + 4] = uv[1];
                    vbuf[offset + 12] = uv[2];
                    vbuf[offset + 13] = uv[3];
                    vbuf[offset + 21] = uv[4];
                    vbuf[offset + 22] = uv[5];
                    vbuf[offset + 30] = uv[6];
                    vbuf[offset + 31] = uv[7];
                  }
                  this.uvFilled = particleCount;
                }
              }
              updateParticleBuffer(particle, pos, buffer, offset) {
                const vbuf = buffer.vData;
                const x = pos.x;
                const y = pos.y;
                let width = particle.size;
                let height = width;
                const aspectRatio = particle.aspectRatio;
                if (aspectRatio > 1) {
                  height = width / aspectRatio;
                } else {
                  width = height * aspectRatio;
                }
                const halfWidth = width / 2;
                const halfHeight = height / 2;
                if (particle.rotation) {
                  const x1 = -halfWidth;
                  const y1 = -halfHeight;
                  const x2 = halfWidth;
                  const y2 = halfHeight;
                  const rad = -degreesToRadians(particle.rotation);
                  const cr = Math.cos(rad);
                  const sr = Math.sin(rad);
                  vbuf[offset] = x1 * cr - y1 * sr + x;
                  vbuf[offset + 1] = x1 * sr + y1 * cr + y;
                  vbuf[offset + 2] = 0;
                  vbuf[offset + 9] = x2 * cr - y1 * sr + x;
                  vbuf[offset + 10] = x2 * sr + y1 * cr + y;
                  vbuf[offset + 11] = 0;
                  vbuf[offset + 18] = x1 * cr - y2 * sr + x;
                  vbuf[offset + 19] = x1 * sr + y2 * cr + y;
                  vbuf[offset + 20] = 0;
                  vbuf[offset + 27] = x2 * cr - y2 * sr + x;
                  vbuf[offset + 28] = x2 * sr + y2 * cr + y;
                  vbuf[offset + 29] = 0;
                } else {
                  vbuf[offset] = x - halfWidth;
                  vbuf[offset + 1] = y - halfHeight;
                  vbuf[offset + 2] = 0;
                  vbuf[offset + 9] = x + halfWidth;
                  vbuf[offset + 10] = y - halfHeight;
                  vbuf[offset + 11] = 0;
                  vbuf[offset + 18] = x - halfWidth;
                  vbuf[offset + 19] = y + halfHeight;
                  vbuf[offset + 20] = 0;
                  vbuf[offset + 27] = x + halfWidth;
                  vbuf[offset + 28] = y + halfHeight;
                  vbuf[offset + 29] = 0;
                }
                Color.toArray(vbuf, particle.color, offset + 5);
                Color.toArray(vbuf, particle.color, offset + 14);
                Color.toArray(vbuf, particle.color, offset + 23);
                Color.toArray(vbuf, particle.color, offset + 32);
              }
              step(dt) {
                const assembler = this.sys.assembler;
                const psys = this.sys;
                const node = psys.node;
                const particles = this.particles;
                dt = dt > assembler.maxParticleDeltaTime ? assembler.maxParticleDeltaTime : dt;
                node.updateWorldTransform();
                if (psys.positionType === PositionType.FREE) {
                  this._worldRotation = getWorldRotation(node);
                  const m = node.worldMatrix;
                  _pos.x = m.m12;
                  _pos.y = m.m13;
                } else if (psys.positionType === PositionType.RELATIVE) {
                  this._worldRotation = node.eulerAngles.z;
                  _pos.x = node.position.x;
                  _pos.y = node.position.y;
                } else {
                  this._worldRotation = 0;
                }
                if (this.active && psys.emissionRate) {
                  const rate = 1.0 / psys.emissionRate;
                  if (particles.length < psys.totalParticles) this.emitCounter += dt;
                  while (particles.length < psys.totalParticles && this.emitCounter > rate) {
                    this.emitParticle(_pos);
                    this.emitCounter -= rate;
                  }
                  this.elapsed += dt;
                  if (psys.duration !== -1 && psys.duration < this.elapsed) {
                    psys.stopSystem();
                  }
                }
                const renderData = this.renderData;
                const particleCount = particles.length;
                renderData.reset();
                this.requestData(particleCount * 4, particleCount * 6);
                if (particleCount > this.uvFilled) {
                  this.updateUVs();
                }
                let particleIdx = 0;
                while (particleIdx < particles.length) {
                  _tpa.x = _tpa.y = _tpb.x = _tpb.y = _tpc.x = _tpc.y = 0;
                  const particle = particles[particleIdx];
                  particle.timeToLive -= dt;
                  if (particle.timeToLive > 0) {
                    if (psys.emitterMode === EmitterMode.GRAVITY) {
                      const tmp = _tpc;
                      const radial = _tpa;
                      const tangential = _tpb;
                      if (particle.pos.x || particle.pos.y) {
                        radial.set(particle.pos);
                        radial.normalize();
                      }
                      tangential.set(radial);
                      radial.multiplyScalar(particle.radialAccel);
                      const newy = tangential.x;
                      tangential.x = -tangential.y;
                      tangential.y = newy;
                      tangential.multiplyScalar(particle.tangentialAccel);
                      tmp.set(radial);
                      tmp.add(tangential);
                      tmp.add(psys.gravity);
                      tmp.multiplyScalar(dt);
                      particle.dir.add(tmp);
                      tmp.set(particle.dir);
                      tmp.multiplyScalar(dt);
                      particle.pos.add(tmp);
                    } else {
                      particle.angle += particle.degreesPerSecond * dt;
                      particle.radius += particle.deltaRadius * dt;
                      particle.pos.x = -Math.cos(particle.angle) * particle.radius;
                      particle.pos.y = -Math.sin(particle.angle) * particle.radius;
                    }
                    particle.color.r += particle.deltaColor.r * dt;
                    particle.color.g += particle.deltaColor.g * dt;
                    particle.color.b += particle.deltaColor.b * dt;
                    particle.color.a += particle.deltaColor.a * dt;
                    particle.size += particle.deltaSize * dt;
                    if (particle.size < 0) {
                      particle.size = 0;
                    }
                    particle.rotation += particle.deltaRotation * dt;
                    const newPos = _tpa;
                    newPos.set(particle.pos);
                    if (psys.positionType !== PositionType.GROUPED) {
                      newPos.add(particle.startPos);
                    }
                    const offset = formatBytes * particleIdx * 4;
                    this.updateParticleBuffer(particle, newPos, renderData, offset);
                    ++particleIdx;
                  } else {
                    const deadParticle = particles[particleIdx];
                    if (particleIdx !== particles.length - 1) {
                      particles[particleIdx] = particles[particles.length - 1];
                    }
                    pool.put(deadParticle);
                    particles.length--;
                    renderData.resize(renderData.vertexCount - 4, renderData.indexCount - 6);
                  }
                }
                this.renderData.material = this.sys.getRenderMaterial(0);
                this.renderData.frame = this.sys._renderSpriteFrame;
                renderData.setRenderDrawInfoAttributes();
                if (particles.length === 0 && !this.active && !this.readyToPlay) {
                  this.finished = true;
                  psys._finishedSimulation();
                }
              }
              requestData(vertexCount, indexCount) {
                let offset = this.renderData.indexCount;
                this.renderData.request(vertexCount, indexCount);
                const count = this.renderData.indexCount / 6;
                const buffer = this.renderData.iData;
                for (let i = offset; i < count; i++) {
                  const vId = i * 4;
                  buffer[offset++] = vId;
                  buffer[offset++] = vId + 1;
                  buffer[offset++] = vId + 2;
                  buffer[offset++] = vId + 1;
                  buffer[offset++] = vId + 3;
                  buffer[offset++] = vId + 2;
                }
              }
              initDrawInfo() {
                const renderData = this.renderData;
                renderData.setRenderDrawInfoAttributes();
              }
            }

            var _dec$2, _class$1, _class2$2, _initializer$2;
            const {
              ccclass,
              serializable,
              editable
            } = _decorator;
            let ParticleAsset = exports('ParticleAsset', (_dec$2 = ccclass('cc.ParticleAsset'), _dec$2(_class$1 = (_class2$2 = class ParticleAsset extends Asset {
              constructor(...args) {
                super(...args);
                this.spriteFrame = _initializer$2 && _initializer$2();
              }
            }, (_initializer$2 = applyDecoratedInitializer(_class2$2.prototype, "spriteFrame", [serializable], function () {
              return null;
            })), _class2$2)) || _class$1));
            legacyCC.ParticleAsset = ParticleAsset;

            class PNGReader {
              constructor(data) {
                this.pos = 8;
                this.palette = [];
                this.imgData = [];
                this.text = {};
                this.width = 0;
                this.height = 0;
                this.bits = 0;
                this.colorType = 0;
                this.compressionMethod = 0;
                this.filterMethod = 0;
                this.interlaceMethod = 0;
                this.colors = 0;
                this.hasAlphaChannel = false;
                this.pixelBitlength = 0;
                this.data = data;
                this.transparency = {
                  indexed: [],
                  rgb: 0,
                  grayscale: 0
                };
                let frame;
                let _i = 0;
                let _j = 0;
                let chunkSize = 0;
                while (true) {
                  chunkSize = this.readUInt32();
                  const section = (() => {
                    const _results = [];
                    for (_i = 0; _i < 4; ++_i) {
                      _results.push(String.fromCharCode(this.data[this.pos++]));
                    }
                    return _results;
                  }).call(this).join('');
                  switch (section) {
                    case 'IHDR':
                      this.width = this.readUInt32();
                      this.height = this.readUInt32();
                      this.bits = this.data[this.pos++];
                      this.colorType = this.data[this.pos++];
                      this.compressionMethod = this.data[this.pos++];
                      this.filterMethod = this.data[this.pos++];
                      this.interlaceMethod = this.data[this.pos++];
                      break;
                    case 'acTL':
                      this.animation = {
                        numFrames: this.readUInt32(),
                        numPlays: this.readUInt32() || Infinity,
                        frames: []
                      };
                      break;
                    case 'PLTE':
                      this.palette = this.read(chunkSize);
                      break;
                    case 'fcTL':
                      if (frame) {
                        this.animation.frames.push(frame);
                      }
                      this.pos += 4;
                      frame = {
                        width: this.readUInt32(),
                        height: this.readUInt32(),
                        xOffset: this.readUInt32(),
                        yOffset: this.readUInt32()
                      };
                      const delayNum = this.readUInt16();
                      const delayDen = this.readUInt16() || 100;
                      frame.delay = 1000 * delayNum / delayDen;
                      frame.disposeOp = this.data[this.pos++];
                      frame.blendOp = this.data[this.pos++];
                      frame.data = [];
                      break;
                    case 'IDAT':
                    case 'fdAT':
                      if (section === 'fdAT') {
                        this.pos += 4;
                        chunkSize -= 4;
                      }
                      data = (frame != null ? frame.data : void 0) || this.imgData;
                      for (_i = 0; chunkSize >= 0 ? _i < chunkSize : _i > chunkSize; chunkSize >= 0 ? ++_i : --_i) {
                        data.push(this.data[this.pos++]);
                      }
                      break;
                    case 'tRNS':
                      this.transparency = {};
                      switch (this.colorType) {
                        case 3:
                          this.transparency.indexed = this.read(chunkSize);
                          const ccshort = 255 - this.transparency.indexed.length;
                          if (ccshort > 0) {
                            for (_j = 0; ccshort >= 0 ? _j < ccshort : _j > ccshort; ccshort >= 0 ? ++_j : --_j) {
                              this.transparency.indexed.push(255);
                            }
                          }
                          break;
                        case 0:
                          this.transparency.grayscale = this.read(chunkSize)[0];
                          break;
                        case 2:
                          this.transparency.rgb = this.read(chunkSize);
                      }
                      break;
                    case 'tEXt':
                      const text = this.read(chunkSize);
                      const index = text.indexOf(0);
                      const key = String.fromCharCode.apply(String, text.slice(0, index));
                      this.text[key] = String.fromCharCode.apply(String, text.slice(index + 1));
                      break;
                    case 'IEND':
                      if (frame) {
                        this.animation.frames.push(frame);
                      }
                      this.colors = (() => {
                        switch (this.colorType) {
                          case 0:
                          case 3:
                          case 4:
                            return 1;
                          case 2:
                          case 6:
                            return 3;
                        }
                      }).call(this);
                      const _ref = this.colorType;
                      this.hasAlphaChannel = _ref === 4 || _ref === 6;
                      const colors = this.colors + (this.hasAlphaChannel ? 1 : 0);
                      this.pixelBitlength = this.bits * colors;
                      this.colorSpace = (() => {
                        switch (this.colors) {
                          case 1:
                            return 'DeviceGray';
                          case 3:
                            return 'DeviceRGB';
                        }
                      }).call(this);
                      if (!(this.imgData instanceof Uint8Array)) {
                        this.imgData = new Uint8Array(this.imgData);
                      }
                      return;
                    default:
                      this.pos += chunkSize;
                  }
                  this.pos += 4;
                  if (this.pos > this.data.length) {
                    throw new Error(getError(6017));
                  }
                }
              }
              read(bytes) {
                let _i = 0;
                const _results = [];
                for (_i = 0; bytes >= 0 ? _i < bytes : _i > bytes; bytes >= 0 ? ++_i : --_i) {
                  _results.push(this.data[this.pos++]);
                }
                return _results;
              }
              readUInt32() {
                const b1 = this.data[this.pos++] << 24;
                const b2 = this.data[this.pos++] << 16;
                const b3 = this.data[this.pos++] << 8;
                const b4 = this.data[this.pos++];
                return b1 | b2 | b3 | b4;
              }
              readUInt16() {
                const b1 = this.data[this.pos++] << 8;
                const b2 = this.data[this.pos++];
                return b1 | b2;
              }
              decodePixels(data) {
                if (data == null) {
                  data = this.imgData;
                }
                if (data.length === 0) {
                  return new Uint8Array(0);
                }
                const inflate = new _p.Inflate(data, {
                  index: 0,
                  verify: false
                });
                data = inflate.decompress();
                const pixelBytes = this.pixelBitlength / 8;
                const scanlineLength = pixelBytes * this.width;
                const pixels = new Uint8Array(scanlineLength * this.height);
                const length = data.length;
                let row = 0;
                let pos = 0;
                let c = 0;
                let ccbyte = 0;
                let col = 0;
                let i = 0;
                let _i = 0;
                let _j = 0;
                let _k = 0;
                let _l = 0;
                let _m = 0;
                let left = 0;
                let p = 0;
                let pa = 0;
                let paeth = 0;
                let pb = 0;
                let pc = 0;
                let upper = 0;
                let upperLeft = 0;
                while (pos < length) {
                  switch (data[pos++]) {
                    case 0:
                      for (i = _i = 0; _i < scanlineLength; i = _i += 1) {
                        pixels[c++] = data[pos++];
                      }
                      break;
                    case 1:
                      for (i = _j = 0; _j < scanlineLength; i = _j += 1) {
                        ccbyte = data[pos++];
                        left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
                        pixels[c++] = (ccbyte + left) % 256;
                      }
                      break;
                    case 2:
                      for (i = _k = 0; _k < scanlineLength; i = _k += 1) {
                        ccbyte = data[pos++];
                        col = (i - i % pixelBytes) / pixelBytes;
                        upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + i % pixelBytes];
                        pixels[c++] = (upper + ccbyte) % 256;
                      }
                      break;
                    case 3:
                      for (i = _l = 0; _l < scanlineLength; i = _l += 1) {
                        ccbyte = data[pos++];
                        col = (i - i % pixelBytes) / pixelBytes;
                        left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
                        upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + i % pixelBytes];
                        pixels[c++] = (ccbyte + Math.floor((left + upper) / 2)) % 256;
                      }
                      break;
                    case 4:
                      for (i = _m = 0; _m < scanlineLength; i = _m += 1) {
                        ccbyte = data[pos++];
                        col = (i - i % pixelBytes) / pixelBytes;
                        left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
                        if (row === 0) {
                          upper = upperLeft = 0;
                        } else {
                          upper = pixels[(row - 1) * scanlineLength + col * pixelBytes + i % pixelBytes];
                          upperLeft = col && pixels[(row - 1) * scanlineLength + (col - 1) * pixelBytes + i % pixelBytes];
                        }
                        p = left + upper - upperLeft;
                        pa = Math.abs(p - left);
                        pb = Math.abs(p - upper);
                        pc = Math.abs(p - upperLeft);
                        if (pa <= pb && pa <= pc) {
                          paeth = left;
                        } else if (pb <= pc) {
                          paeth = upper;
                        } else {
                          paeth = upperLeft;
                        }
                        pixels[c++] = (ccbyte + paeth) % 256;
                      }
                      break;
                    default:
                      throw new Error(getError(6018, data[pos - 1]));
                  }
                  row++;
                }
                return pixels;
              }
              copyToImageData(imageData, pixels) {
                let alpha = this.hasAlphaChannel;
                let palette;
                let colors = this.colors;
                if (this.palette.length) {
                  palette = this._decodedPalette != null ? this._decodedPalette : this._decodedPalette = this.decodePalette();
                  colors = 4;
                  alpha = true;
                }
                const data = imageData.data || imageData;
                const length = data.length;
                const input = palette || pixels;
                let i = 0;
                let j = 0;
                let k = 0;
                let v = 0;
                if (colors === 1) {
                  while (i < length) {
                    k = palette ? pixels[i / 4] * 4 : j;
                    v = input[k++];
                    data[i++] = v;
                    data[i++] = v;
                    data[i++] = v;
                    data[i++] = alpha ? input[k++] : 255;
                    j = k;
                  }
                } else {
                  while (i < length) {
                    k = palette ? pixels[i / 4] * 4 : j;
                    data[i++] = input[k++];
                    data[i++] = input[k++];
                    data[i++] = input[k++];
                    data[i++] = alpha ? input[k++] : 255;
                    j = k;
                  }
                }
              }
              decodePalette() {
                const palette = this.palette;
                const transparency = this.transparency.indexed || [];
                const ret = new Uint8Array((transparency.length || 0) + palette.length);
                let pos = 0;
                let c = 0;
                let _ref1 = 0;
                for (let i = 0, _i = 0, _ref = palette.length; _i < _ref; i = _i += 3) {
                  ret[pos++] = palette[i];
                  ret[pos++] = palette[i + 1];
                  ret[pos++] = palette[i + 2];
                  _ref1 = transparency[c++];
                  ret[pos++] = _ref1 != null ? _ref1 : 255;
                }
                return ret;
              }
              render(canvas) {
                canvas.width = this.width;
                canvas.height = this.height;
                const ctx = canvas.getContext('2d');
                const data = ctx.createImageData(this.width, this.height);
                this.copyToImageData(data, this.decodePixels(null));
                return ctx.putImageData(data, 0, 0);
              }
            }

            class TiffReader {
              constructor() {
                this._littleEndian = false;
                this._tiffData = [];
                this._fileDirectories = [];
              }
              getUint8(offset) {
                return this._tiffData[offset];
              }
              getUint16(offset) {
                if (this._littleEndian) return this._tiffData[offset + 1] << 8 | this._tiffData[offset];else return this._tiffData[offset] << 8 | this._tiffData[offset + 1];
              }
              getUint32(offset) {
                const a = this._tiffData;
                if (this._littleEndian) return a[offset + 3] << 24 | a[offset + 2] << 16 | a[offset + 1] << 8 | a[offset];else return a[offset] << 24 | a[offset + 1] << 16 | a[offset + 2] << 8 | a[offset + 3];
              }
              checkLittleEndian() {
                const BOM = this.getUint16(0);
                if (BOM === 0x4949) {
                  this._littleEndian = true;
                } else if (BOM === 0x4D4D) {
                  this._littleEndian = false;
                } else {
                  console.log(BOM);
                  throw TypeError(getError(6019));
                }
                return this._littleEndian;
              }
              hasTowel() {
                if (this.getUint16(2) !== 42) {
                  throw RangeError(getError(6020));
                }
                return true;
              }
              getFieldTypeName(fieldType) {
                const typeNames = fieldTypeNames;
                if (fieldType in typeNames) {
                  return typeNames[fieldType];
                }
                return null;
              }
              getFieldTagName(fieldTag) {
                const tagNames = fieldTagNames;
                if (fieldTag in tagNames) {
                  return tagNames[fieldTag];
                } else {
                  logID(6021, fieldTag);
                  return `Tag${fieldTag}`;
                }
              }
              getFieldTypeLength(fieldTypeName) {
                if (['BYTE', 'ASCII', 'SBYTE', 'UNDEFINED'].indexOf(fieldTypeName) !== -1) {
                  return 1;
                } else if (['SHORT', 'SSHORT'].indexOf(fieldTypeName) !== -1) {
                  return 2;
                } else if (['LONG', 'SLONG', 'FLOAT'].indexOf(fieldTypeName) !== -1) {
                  return 4;
                } else if (['RATIONAL', 'SRATIONAL', 'DOUBLE'].indexOf(fieldTypeName) !== -1) {
                  return 8;
                }
                return 0;
              }
              getFieldValues(fieldTagName, fieldTypeName, typeCount, valueOffset) {
                const fieldValues = [];
                const fieldTypeLength = this.getFieldTypeLength(fieldTypeName);
                const fieldValueSize = fieldTypeLength * typeCount;
                if (fieldValueSize <= 4) {
                  if (this._littleEndian === false) fieldValues.push(valueOffset >>> (4 - fieldTypeLength) * 8);else fieldValues.push(valueOffset);
                } else {
                  for (let i = 0; i < typeCount; i++) {
                    const indexOffset = fieldTypeLength * i;
                    if (fieldTypeLength >= 8) {
                      if (['RATIONAL', 'SRATIONAL'].indexOf(fieldTypeName) !== -1) {
                        fieldValues.push(this.getUint32(valueOffset + indexOffset));
                        fieldValues.push(this.getUint32(valueOffset + indexOffset + 4));
                      } else {
                        logID(8000);
                      }
                    } else {
                      fieldValues.push(this.getBytes(fieldTypeLength, valueOffset + indexOffset));
                    }
                  }
                }
                if (fieldTypeName === 'ASCII') {
                  fieldValues.forEach((e, i, a) => {
                    a[i] = String.fromCharCode(e);
                  });
                }
                return fieldValues;
              }
              getBytes(numBytes, offset) {
                if (numBytes <= 0) {
                  logID(8001);
                } else if (numBytes <= 1) {
                  return this.getUint8(offset);
                } else if (numBytes <= 2) {
                  return this.getUint16(offset);
                } else if (numBytes <= 3) {
                  return this.getUint32(offset) >>> 8;
                } else if (numBytes <= 4) {
                  return this.getUint32(offset);
                } else {
                  logID(8002);
                }
                return 0;
              }
              getBits(numBits, byteOffset, bitOffset) {
                bitOffset = bitOffset || 0;
                const extraBytes = Math.floor(bitOffset / 8);
                const newByteOffset = byteOffset + extraBytes;
                const totalBits = bitOffset + numBits;
                const shiftRight = 32 - numBits;
                let shiftLeft = 0;
                let rawBits = 0;
                if (totalBits <= 0) {
                  logID(6023);
                } else if (totalBits <= 8) {
                  shiftLeft = 24 + bitOffset;
                  rawBits = this.getUint8(newByteOffset);
                } else if (totalBits <= 16) {
                  shiftLeft = 16 + bitOffset;
                  rawBits = this.getUint16(newByteOffset);
                } else if (totalBits <= 32) {
                  shiftLeft = bitOffset;
                  rawBits = this.getUint32(newByteOffset);
                } else {
                  logID(6022);
                }
                return {
                  bits: rawBits << shiftLeft >>> shiftRight,
                  byteOffset: newByteOffset + Math.floor(totalBits / 8),
                  bitOffset: totalBits % 8
                };
              }
              parseFileDirectory(offset) {
                const numDirEntries = this.getUint16(offset);
                const tiffFields = [];
                let i = 0;
                let entryCount = 0;
                for (i = offset + 2, entryCount = 0; entryCount < numDirEntries; i += 12, entryCount++) {
                  const fieldTag = this.getUint16(i);
                  const fieldType = this.getUint16(i + 2);
                  const typeCount = this.getUint32(i + 4);
                  const valueOffset = this.getUint32(i + 8);
                  const fieldTagName = this.getFieldTagName(fieldTag);
                  const fieldTypeName = this.getFieldTypeName(fieldType);
                  const fieldValues = this.getFieldValues(fieldTagName, fieldTypeName, typeCount, valueOffset);
                  tiffFields[fieldTagName] = {
                    type: fieldTypeName,
                    values: fieldValues
                  };
                }
                this._fileDirectories.push(tiffFields);
                const nextIFDByteOffset = this.getUint32(i);
                if (nextIFDByteOffset !== 0x00000000) {
                  this.parseFileDirectory(nextIFDByteOffset);
                }
              }
              clampColorSample(colorSample, bitsPerSample) {
                const multiplier = Math.pow(2, 8 - bitsPerSample);
                return Math.floor(colorSample * multiplier + (multiplier - 1));
              }
              parseTIFF(tiffData, canvas) {
                canvas = canvas || ccwindow.document.createElement('canvas');
                this._tiffData = tiffData;
                this._canvas = canvas;
                this.checkLittleEndian();
                if (!this.hasTowel()) {
                  return;
                }
                const firstIFDByteOffset = this.getUint32(4);
                this._fileDirectories.length = 0;
                this.parseFileDirectory(firstIFDByteOffset);
                const fileDirectory = this._fileDirectories[0];
                const imageWidth = fileDirectory.ImageWidth.values[0];
                const imageLength = fileDirectory.ImageLength.values[0];
                this._canvas.width = imageWidth;
                this._canvas.height = imageLength;
                const strips = [];
                const compression = fileDirectory.Compression ? fileDirectory.Compression.values[0] : 1;
                const samplesPerPixel = fileDirectory.SamplesPerPixel.values[0];
                const sampleProperties = [];
                let bitsPerPixel = 0;
                let hasBytesPerPixel = false;
                fileDirectory.BitsPerSample.values.forEach((bitsPerSample, i, bitsPerSampleValues) => {
                  sampleProperties[i] = {
                    bitsPerSample,
                    hasBytesPerSample: false,
                    bytesPerSample: undefined
                  };
                  if (bitsPerSample % 8 === 0) {
                    sampleProperties[i].hasBytesPerSample = true;
                    sampleProperties[i].bytesPerSample = bitsPerSample / 8;
                  }
                  bitsPerPixel += bitsPerSample;
                }, this);
                let bytesPerPixel = 0;
                if (bitsPerPixel % 8 === 0) {
                  hasBytesPerPixel = true;
                  bytesPerPixel = bitsPerPixel / 8;
                }
                const stripOffsetValues = fileDirectory.StripOffsets.values;
                const numStripOffsetValues = stripOffsetValues.length;
                let stripByteCountValues;
                if (fileDirectory.StripByteCounts) {
                  stripByteCountValues = fileDirectory.StripByteCounts.values;
                } else {
                  logID(8003);
                  if (numStripOffsetValues === 1) {
                    stripByteCountValues = [Math.ceil(imageWidth * imageLength * bitsPerPixel / 8)];
                  } else {
                    throw Error(getError(6024));
                  }
                }
                let blockLength = 1;
                let iterations = 1;
                for (let i = 0; i < numStripOffsetValues; i++) {
                  const stripOffset = stripOffsetValues[i];
                  strips[i] = [];
                  const stripByteCount = stripByteCountValues[i];
                  for (let byteOffset = 0, bitOffset = 0, jIncrement = 1, getHeader = true, pixel = [], numBytes = 0, sample = 0, currentSample = 0; byteOffset < stripByteCount; byteOffset += jIncrement) {
                    switch (compression) {
                      case 1:
                        pixel = [];
                        for (let m = 0; m < samplesPerPixel; m++) {
                          const s = sampleProperties[m];
                          if (s.hasBytesPerSample) {
                            const sampleOffset = s.bytesPerSample * m;
                            pixel.push(this.getBytes(s.bytesPerSample, stripOffset + byteOffset + sampleOffset));
                          } else {
                            const sampleInfo = this.getBits(s.bitsPerSample, stripOffset + byteOffset, bitOffset);
                            pixel.push(sampleInfo.bits);
                            byteOffset = sampleInfo.byteOffset - stripOffset;
                            bitOffset = sampleInfo.bitOffset;
                            throw RangeError(getError(6025));
                          }
                        }
                        strips[i].push(pixel);
                        if (hasBytesPerPixel) {
                          jIncrement = bytesPerPixel;
                        } else {
                          jIncrement = 0;
                          throw RangeError(getError(6026));
                        }
                        break;
                      case 2:
                        break;
                      case 3:
                        break;
                      case 4:
                        break;
                      case 5:
                        break;
                      case 6:
                        break;
                      case 7:
                        break;
                      case 32773:
                        if (getHeader) {
                          getHeader = false;
                          const header = this.getUint8(stripOffset + byteOffset);
                          if (header >= 0 && header <= 127) {
                            blockLength = header + 1;
                          } else if (header >= -127 && header <= -1) {
                            iterations = -header + 1;
                          } else {
                              getHeader = true;
                            }
                        } else {
                          const currentByte = this.getUint8(stripOffset + byteOffset);
                          for (let m = 0; m < iterations; m++) {
                            const s = sampleProperties[sample];
                            if (s.hasBytesPerSample) {
                              currentSample = currentSample << 8 * numBytes | currentByte;
                              numBytes++;
                              if (numBytes === s.bytesPerSample) {
                                pixel.push(currentSample);
                                currentSample = numBytes = 0;
                                sample++;
                              }
                            } else {
                              throw RangeError(getError(6025));
                            }
                            if (sample === samplesPerPixel) {
                              strips[i].push(pixel);
                              pixel = [];
                              sample = 0;
                            }
                          }
                          blockLength--;
                          if (blockLength === 0) {
                            getHeader = true;
                          }
                        }
                        jIncrement = 1;
                        break;
                    }
                  }
                }
                if (canvas.getContext) {
                  const ctx = this._canvas.getContext('2d');
                  ctx.fillStyle = 'rgba(255, 255, 255, 0)';
                  const rowsPerStrip = fileDirectory.RowsPerStrip ? fileDirectory.RowsPerStrip.values[0] : imageLength;
                  const numStrips = strips.length;
                  const imageLengthModRowsPerStrip = imageLength % rowsPerStrip;
                  const rowsInLastStrip = imageLengthModRowsPerStrip === 0 ? rowsPerStrip : imageLengthModRowsPerStrip;
                  let numRowsInStrip = rowsPerStrip;
                  let numRowsInPreviousStrip = 0;
                  const photometricInterpretation = fileDirectory.PhotometricInterpretation.values[0];
                  let extraSamplesValues = [];
                  let numExtraSamples = 0;
                  if (fileDirectory.ExtraSamples) {
                    extraSamplesValues = fileDirectory.ExtraSamples.values;
                    numExtraSamples = extraSamplesValues.length;
                  }
                  let colorMapValues = [];
                  let colorMapSampleSize = 0;
                  if (fileDirectory.ColorMap) {
                    colorMapValues = fileDirectory.ColorMap.values;
                    colorMapSampleSize = Math.pow(2, sampleProperties[0].bitsPerSample);
                  }
                  for (let i = 0; i < numStrips; i++) {
                    if (i + 1 === numStrips) {
                      numRowsInStrip = rowsInLastStrip;
                    }
                    const numPixels = strips[i].length;
                    const yPadding = numRowsInPreviousStrip * i;
                    for (let y = 0, j = 0; y < numRowsInStrip && j < numPixels; y++) {
                      for (let x = 0; x < imageWidth; x++, j++) {
                        const pixelSamples = strips[i][j];
                        let red = 0;
                        let green = 0;
                        let blue = 0;
                        let opacity = 1.0;
                        if (numExtraSamples > 0) {
                          for (let k = 0; k < numExtraSamples; k++) {
                            if (extraSamplesValues[k] === 1 || extraSamplesValues[k] === 2) {
                              opacity = pixelSamples[3 + k] / 256;
                              break;
                            }
                          }
                        }
                        switch (photometricInterpretation) {
                          case 0:
                            let invertValue = 0;
                            if (sampleProperties[0].hasBytesPerSample) {
                              invertValue = Math.pow(0x10, sampleProperties[0].bytesPerSample * 2);
                            }
                            pixelSamples.forEach((sample, index, samples) => {
                              samples[index] = invertValue - sample;
                            });
                          case 1:
                            red = green = blue = this.clampColorSample(pixelSamples[0], sampleProperties[0].bitsPerSample);
                            break;
                          case 2:
                            red = this.clampColorSample(pixelSamples[0], sampleProperties[0].bitsPerSample);
                            green = this.clampColorSample(pixelSamples[1], sampleProperties[1].bitsPerSample);
                            blue = this.clampColorSample(pixelSamples[2], sampleProperties[2].bitsPerSample);
                            break;
                          case 3:
                            if (colorMapValues === undefined) {
                              throw Error(getError(6027));
                            }
                            const colorMapIndex = pixelSamples[0];
                            red = this.clampColorSample(colorMapValues[colorMapIndex], 16);
                            green = this.clampColorSample(colorMapValues[colorMapSampleSize + colorMapIndex], 16);
                            blue = this.clampColorSample(colorMapValues[2 * colorMapSampleSize + colorMapIndex], 16);
                            break;
                          default:
                            throw RangeError(getError(6028, photometricInterpretation));
                        }
                        ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
                        ctx.fillRect(x, yPadding + y, 1, 1);
                      }
                    }
                    numRowsInPreviousStrip = numRowsInStrip;
                  }
                }
                return this._canvas;
              }
            }
            const fieldTagNames = {
              0x013B: 'Artist',
              0x0102: 'BitsPerSample',
              0x0109: 'CellLength',
              0x0108: 'CellWidth',
              0x0140: 'ColorMap',
              0x0103: 'Compression',
              0x8298: 'Copyright',
              0x0132: 'DateTime',
              0x0152: 'ExtraSamples',
              0x010A: 'FillOrder',
              0x0121: 'FreeByteCounts',
              0x0120: 'FreeOffsets',
              0x0123: 'GrayResponseCurve',
              0x0122: 'GrayResponseUnit',
              0x013C: 'HostComputer',
              0x010E: 'ImageDescription',
              0x0101: 'ImageLength',
              0x0100: 'ImageWidth',
              0x010F: 'Make',
              0x0119: 'MaxSampleValue',
              0x0118: 'MinSampleValue',
              0x0110: 'Model',
              0x00FE: 'NewSubfileType',
              0x0112: 'Orientation',
              0x0106: 'PhotometricInterpretation',
              0x011C: 'PlanarConfiguration',
              0x0128: 'ResolutionUnit',
              0x0116: 'RowsPerStrip',
              0x0115: 'SamplesPerPixel',
              0x0131: 'Software',
              0x0117: 'StripByteCounts',
              0x0111: 'StripOffsets',
              0x00FF: 'SubfileType',
              0x0107: 'Threshholding',
              0x011A: 'XResolution',
              0x011B: 'YResolution',
              0x0146: 'BadFaxLines',
              0x0147: 'CleanFaxData',
              0x0157: 'ClipPath',
              0x0148: 'ConsecutiveBadFaxLines',
              0x01B1: 'Decode',
              0x01B2: 'DefaultImageColor',
              0x010D: 'DocumentName',
              0x0150: 'DotRange',
              0x0141: 'HalftoneHints',
              0x015A: 'Indexed',
              0x015B: 'JPEGTables',
              0x011D: 'PageName',
              0x0129: 'PageNumber',
              0x013D: 'Predictor',
              0x013F: 'PrimaryChromaticities',
              0x0214: 'ReferenceBlackWhite',
              0x0153: 'SampleFormat',
              0x022F: 'StripRowCounts',
              0x014A: 'SubIFDs',
              0x0124: 'T4Options',
              0x0125: 'T6Options',
              0x0145: 'TileByteCounts',
              0x0143: 'TileLength',
              0x0144: 'TileOffsets',
              0x0142: 'TileWidth',
              0x012D: 'TransferFunction',
              0x013E: 'WhitePoint',
              0x0158: 'XClipPathUnits',
              0x011E: 'XPosition',
              0x0211: 'YCbCrCoefficients',
              0x0213: 'YCbCrPositioning',
              0x0212: 'YCbCrSubSampling',
              0x0159: 'YClipPathUnits',
              0x011F: 'YPosition',
              0x9202: 'ApertureValue',
              0xA001: 'ColorSpace',
              0x9004: 'DateTimeDigitized',
              0x9003: 'DateTimeOriginal',
              0x8769: 'Exif IFD',
              0x9000: 'ExifVersion',
              0x829A: 'ExposureTime',
              0xA300: 'FileSource',
              0x9209: 'Flash',
              0xA000: 'FlashpixVersion',
              0x829D: 'FNumber',
              0xA420: 'ImageUniqueID',
              0x9208: 'LightSource',
              0x927C: 'MakerNote',
              0x9201: 'ShutterSpeedValue',
              0x9286: 'UserComment',
              0x83BB: 'IPTC',
              0x8773: 'ICC Profile',
              0x02BC: 'XMP',
              0xA480: 'GDAL_METADATA',
              0xA481: 'GDAL_NODATA',
              0x8649: 'Photoshop'
            };
            const fieldTypeNames = {
              0x0001: 'BYTE',
              0x0002: 'ASCII',
              0x0003: 'SHORT',
              0x0004: 'LONG',
              0x0005: 'RATIONAL',
              0x0006: 'SBYTE',
              0x0007: 'UNDEFINED',
              0x0008: 'SSHORT',
              0x0009: 'SLONG',
              0x000A: 'SRATIONAL',
              0x000B: 'FLOAT',
              0x000C: 'DOUBLE'
            };

            var _dec$1, _dec2$1, _dec3, _dec4, _dec5, _dec6, _class, _class2$1, _initializer$1, _initializer2$1, _initializer3$1, _initializer4$1, _initializer5$1, _initializer6$1, _initializer7, _initializer8, _initializer9, _initializer10, _initializer11, _initializer12, _initializer13, _initializer14, _initializer15, _initializer16, _initializer17, _initializer18, _initializer19, _initializer20, _initializer21, _initializer22, _initializer23, _initializer24, _initializer25, _initializer26, _initializer27, _initializer28, _initializer29, _initializer30, _initializer31, _initializer32, _initializer33, _initializer34, _initializer35, _initializer36, _initializer37, _initializer38, _initializer39, _initializer40, _initializer41, _initializer42, _initializer43, _class3$1;
            let ImageFormat;
            (function (ImageFormat) {
              ImageFormat[ImageFormat["JPG"] = 0] = "JPG";
              ImageFormat[ImageFormat["PNG"] = 1] = "PNG";
              ImageFormat[ImageFormat["TIFF"] = 2] = "TIFF";
              ImageFormat[ImageFormat["WEBP"] = 3] = "WEBP";
              ImageFormat[ImageFormat["PVR"] = 4] = "PVR";
              ImageFormat[ImageFormat["ETC"] = 5] = "ETC";
              ImageFormat[ImageFormat["S3TC"] = 6] = "S3TC";
              ImageFormat[ImageFormat["ATITC"] = 7] = "ATITC";
              ImageFormat[ImageFormat["TGA"] = 8] = "TGA";
              ImageFormat[ImageFormat["RAWDATA"] = 9] = "RAWDATA";
              ImageFormat[ImageFormat["UNKNOWN"] = 10] = "UNKNOWN";
            })(ImageFormat || (ImageFormat = {}));
            function getImageFormatByData(imgData) {
              if (imgData.length > 8 && imgData[0] === 0x89 && imgData[1] === 0x50 && imgData[2] === 0x4E && imgData[3] === 0x47 && imgData[4] === 0x0D && imgData[5] === 0x0A && imgData[6] === 0x1A && imgData[7] === 0x0A) {
                return ImageFormat.PNG;
              }
              if (imgData.length > 2 && (imgData[0] === 0x49 && imgData[1] === 0x49 || imgData[0] === 0x4d && imgData[1] === 0x4d || imgData[0] === 0xff && imgData[1] === 0xd8)) {
                return ImageFormat.TIFF;
              }
              return ImageFormat.UNKNOWN;
            }
            function getParticleComponents(node) {
              const parent = node.parent;
              const comp = node.getComponent(ParticleSystem2D);
              if (!parent || !comp) {
                return node.getComponentsInChildren(ParticleSystem2D);
              }
              return getParticleComponents(parent);
            }
            let ParticleSystem2D = exports('ParticleSystem2D', (_dec$1 = ccclass$1('cc.ParticleSystem2D'), _dec2$1 = type(ParticleAsset), _dec3 = type(SpriteFrame), _dec4 = type(PositionType), _dec5 = type(EmitterMode), _dec6 = formerlySerializedAs('preview'), _dec$1(_class = (_class2$1 = (_class3$1 = class ParticleSystem2D extends UIRenderer {
              get custom() {
                return this._custom;
              }
              set custom(value) {
                if (this._custom !== value) {
                  this._custom = value;
                  this._applyFile();
                  this._updateMaterial();
                }
              }
              get file() {
                return this._file;
              }
              set file(value) {
                if (this._file !== value) {
                  this._file = value;
                  if (value) {
                    this._applyFile();
                  } else {
                    this.custom = true;
                  }
                }
              }
              get spriteFrame() {
                return this._spriteFrame;
              }
              set spriteFrame(value) {
                const lastSprite = this._renderSpriteFrame;
                if (lastSprite === value) {
                  return;
                }
                this._renderSpriteFrame = value;
                if (!value || value._uuid) {
                  this._spriteFrame = value;
                }
                this._applySpriteFrame();
              }
              get particleCount() {
                return this._simulator.particles.length;
              }
              get totalParticles() {
                return this._totalParticles;
              }
              set totalParticles(value) {
                if (this._totalParticles === value) return;
                this._totalParticles = value;
              }
              get startColor() {
                return this._startColor;
              }
              set startColor(val) {
                this._startColor.r = val.r;
                this._startColor.g = val.g;
                this._startColor.b = val.b;
                this._startColor.a = val.a;
              }
              get startColorVar() {
                return this._startColorVar;
              }
              set startColorVar(val) {
                this._startColorVar.r = val.r;
                this._startColorVar.g = val.g;
                this._startColorVar.b = val.b;
                this._startColorVar.a = val.a;
              }
              set color(value) {}
              get color() {
                return this._color;
              }
              get endColor() {
                return this._endColor;
              }
              set endColor(val) {
                this._endColor.r = val.r;
                this._endColor.g = val.g;
                this._endColor.b = val.b;
                this._endColor.a = val.a;
              }
              get endColorVar() {
                return this._endColorVar;
              }
              set endColorVar(val) {
                this._endColorVar.r = val.r;
                this._endColorVar.g = val.g;
                this._endColorVar.b = val.b;
                this._endColorVar.a = val.a;
              }
              get positionType() {
                return this._positionType;
              }
              set positionType(val) {
                this._positionType = val;
                this._updateMaterial();
                this._updatePositionType();
              }
              get preview() {
                return this._preview;
              }
              set preview(val) {
                if (val) {
                  this._startPreview();
                } else {
                  this._stopPreview();
                }
                this._preview = val;
              }
              get stopped() {
                return this._stopped;
              }
              get active() {
                return this._simulator.active;
              }
              get assembler() {
                return this._assembler;
              }
              constructor() {
                super();
                this.duration = _initializer$1 && _initializer$1();
                this.emissionRate = _initializer2$1 && _initializer2$1();
                this.life = _initializer3$1 && _initializer3$1();
                this.lifeVar = _initializer4$1 && _initializer4$1();
                this.angle = _initializer5$1 && _initializer5$1();
                this.angleVar = _initializer6$1 && _initializer6$1();
                this.startSize = _initializer7 && _initializer7();
                this.startSizeVar = _initializer8 && _initializer8();
                this.endSize = _initializer9 && _initializer9();
                this.endSizeVar = _initializer10 && _initializer10();
                this.startSpin = _initializer11 && _initializer11();
                this.startSpinVar = _initializer12 && _initializer12();
                this.endSpin = _initializer13 && _initializer13();
                this.endSpinVar = _initializer14 && _initializer14();
                this.sourcePos = _initializer15 && _initializer15();
                this.posVar = _initializer16 && _initializer16();
                this.emitterMode = _initializer17 && _initializer17();
                this.gravity = _initializer18 && _initializer18();
                this.speed = _initializer19 && _initializer19();
                this.speedVar = _initializer20 && _initializer20();
                this.tangentialAccel = _initializer21 && _initializer21();
                this.tangentialAccelVar = _initializer22 && _initializer22();
                this.radialAccel = _initializer23 && _initializer23();
                this.radialAccelVar = _initializer24 && _initializer24();
                this.rotationIsDir = _initializer25 && _initializer25();
                this.startRadius = _initializer26 && _initializer26();
                this.startRadiusVar = _initializer27 && _initializer27();
                this.endRadius = _initializer28 && _initializer28();
                this.endRadiusVar = _initializer29 && _initializer29();
                this.rotatePerS = _initializer30 && _initializer30();
                this.rotatePerSVar = _initializer31 && _initializer31();
                this.aspectRatio = 1;
                this.playOnLoad = _initializer32 && _initializer32();
                this.autoRemoveOnFinish = _initializer33 && _initializer33();
                this._preview = _initializer34 && _initializer34();
                this._custom = _initializer35 && _initializer35();
                this._file = _initializer36 && _initializer36();
                this._spriteFrame = _initializer37 && _initializer37();
                this._totalParticles = _initializer38 && _initializer38();
                this._startColor = _initializer39 && _initializer39();
                this._startColorVar = _initializer40 && _initializer40();
                this._endColor = _initializer41 && _initializer41();
                this._endColorVar = _initializer42 && _initializer42();
                this._positionType = _initializer43 && _initializer43();
                this._stopped = true;
                this._useFile = void 0;
                this.initProperties();
                this._useFile = false;
              }
              onEnable() {
                super.onEnable();
                this._updateMaterial();
                this._updatePositionType();
              }
              onDestroy() {
                super.onDestroy();
                if (this.autoRemoveOnFinish) {
                  this.autoRemoveOnFinish = false;
                }
                this._simulator.uvFilled = 0;
                if (this._simulator.renderData && this._assembler) {
                  this._assembler.removeData(this._simulator.renderData);
                }
              }
              initProperties() {
                this._previewTimer = null;
                this._focused = false;
                this.aspectRatio = 1;
                this._simulator = new Simulator(this);
              }
              onFocusInEditor() {
                this._focused = true;
                const components = getParticleComponents(this.node);
                for (let i = 0; i < components.length; ++i) {
                  components[i]._startPreview();
                }
              }
              onLostFocusInEditor() {
                this._focused = false;
                const components = getParticleComponents(this.node);
                for (let i = 0; i < components.length; ++i) {
                  components[i]._stopPreview();
                }
              }
              _startPreview() {
                if (this._preview) {
                  this.resetSystem();
                }
              }
              _stopPreview() {
                if (this._preview) {
                  this.resetSystem();
                  this.stopSystem();
                }
                if (this._previewTimer) {
                  clearInterval(this._previewTimer);
                }
              }
              __preload() {
                super.__preload();
                if (this._custom && this.spriteFrame && !this._renderSpriteFrame) {
                  this._applySpriteFrame();
                } else if (this._file) {
                  if (this._custom) {
                    const missCustomTexture = !this._getTexture();
                    if (missCustomTexture) {
                      this._applyFile();
                    }
                  } else {
                    this._applyFile();
                  }
                }
                {
                  if (this.playOnLoad) {
                    this.resetSystem();
                  }
                }
              }
              _flushAssembler() {
                const assembler = ParticleSystem2D.Assembler.getAssembler(this);
                if (this._assembler !== assembler) {
                  this._assembler = assembler;
                }
                if (this._assembler && this._assembler.createData) {
                  this._simulator.renderData = this._assembler.createData(this);
                  this._simulator.renderData.particleInitRenderDrawInfo(this.renderEntity);
                  this._simulator.initDrawInfo();
                }
              }
              lateUpdate(dt) {
                if (!this._simulator.finished) {
                  this._simulator.step(dt);
                }
              }
              addParticle() {}
              stopSystem() {
                this._stopped = true;
                this._simulator.stop();
              }
              resetSystem() {
                this._stopped = false;
                this._simulator.reset();
                this.markForUpdateRenderData();
              }
              isFull() {
                return this.particleCount >= this.totalParticles;
              }
              _applyFile() {
                const file = this._file;
                if (file) {
                  if (!file) {
                    errorID(6029);
                    return;
                  }
                  if (!this.isValid) {
                    return;
                  }
                  this._plistFile = file.nativeUrl;
                  if (!this._custom) {
                    const isDiffFrame = this._spriteFrame !== file.spriteFrame;
                    if (isDiffFrame) this.spriteFrame = file.spriteFrame;
                    this._initWithDictionary(file._nativeAsset);
                  }
                  if (!this._spriteFrame) {
                    if (file.spriteFrame) {
                      this.spriteFrame = file.spriteFrame;
                    } else if (this._custom) {
                      this._initTextureWithDictionary(file._nativeAsset);
                    }
                  } else if (!this._renderSpriteFrame && this._spriteFrame) {
                    this._applySpriteFrame();
                  }
                }
              }
              _initTextureWithDictionary(dict) {
                if (dict.spriteFrameUuid) {
                  const spriteFrameUuid = dict.spriteFrameUuid;
                  assetManager.loadAny(spriteFrameUuid, (err, spriteFrame) => {
                    if (err) {
                      dict.spriteFrameUuid = undefined;
                      this._initTextureWithDictionary(dict);
                      error(err);
                    } else {
                      this.spriteFrame = spriteFrame;
                    }
                  });
                } else {
                  const imgPath = changeBasename(this._plistFile, dict.textureFileName || '');
                  if (dict.textureFileName) {
                    assetManager.loadRemote(imgPath, (err, imageAsset) => {
                      if (err) {
                        dict.textureFileName = undefined;
                        this._initTextureWithDictionary(dict);
                        error(err);
                      } else {
                        if (imageAsset) {
                          this.spriteFrame = SpriteFrame.createWithImage(imageAsset);
                        } else {
                          this.spriteFrame = SpriteFrame.createWithImage(builtinResMgr.get('white-texture'));
                        }
                      }
                    });
                  } else if (dict.textureImageData) {
                    const textureData = dict.textureImageData;
                    if (textureData && textureData.length > 0) {
                      let imgPathName = imgPath;
                      if (this.file) {
                        imgPathName += `-${this.file.uuid}`;
                      }
                      let imageAsset = assetManager.assets.get(imgPathName);
                      if (!imageAsset) {
                        const buffer = codec.unzipBase64AsArray(textureData, 1);
                        if (!buffer) {
                          warnID(6030, this._file.name);
                          return false;
                        }
                        const imageFormat = getImageFormatByData(buffer);
                        if (imageFormat !== ImageFormat.TIFF && imageFormat !== ImageFormat.PNG) {
                          warnID(6031, this._file.name);
                          return false;
                        }
                        const canvasObj = ccwindow.document.createElement('canvas');
                        if (imageFormat === ImageFormat.PNG) {
                          const myPngObj = new PNGReader(buffer);
                          myPngObj.render(canvasObj);
                        } else {
                          if (!this._tiffReader) {
                            this._tiffReader = new TiffReader();
                          }
                          this._tiffReader.parseTIFF(buffer, canvasObj);
                        }
                        imageAsset = new ImageAsset(canvasObj);
                        assetManager.assets.add(imgPathName, imageAsset);
                      }
                      if (!imageAsset) {
                        warnID(6032, this._file.name);
                      }
                      if (imageAsset) {
                        this.spriteFrame = SpriteFrame.createWithImage(imageAsset);
                      } else {
                        this.spriteFrame = SpriteFrame.createWithImage(builtinResMgr.get('white-texture'));
                      }
                    } else {
                      return false;
                    }
                  }
                }
                return true;
              }
              _initWithDictionary(dict) {
                this._useFile = true;
                this.totalParticles = parseInt(dict.maxParticles || 0);
                this.life = parseFloat(dict.particleLifespan || 0);
                this.lifeVar = parseFloat(dict.particleLifespanVariance || 0);
                const _tempEmissionRate = dict.emissionRate;
                if (_tempEmissionRate) {
                  this.emissionRate = _tempEmissionRate;
                } else {
                  this.emissionRate = Math.min(this.totalParticles / this.life, Number.MAX_VALUE);
                }
                this.duration = parseFloat(dict.duration || 0);
                this._srcBlendFactor = parseInt(dict.blendFuncSource || BlendFactor.SRC_ALPHA);
                this._dstBlendFactor = parseInt(dict.blendFuncDestination || BlendFactor.ONE_MINUS_SRC_ALPHA);
                const locStartColor = this._startColor;
                locStartColor.r = parseFloat(dict.startColorRed || 0) * 255;
                locStartColor.g = parseFloat(dict.startColorGreen || 0) * 255;
                locStartColor.b = parseFloat(dict.startColorBlue || 0) * 255;
                locStartColor.a = parseFloat(dict.startColorAlpha || 0) * 255;
                const locStartColorVar = this._startColorVar;
                locStartColorVar.r = parseFloat(dict.startColorVarianceRed || 0) * 255;
                locStartColorVar.g = parseFloat(dict.startColorVarianceGreen || 0) * 255;
                locStartColorVar.b = parseFloat(dict.startColorVarianceBlue || 0) * 255;
                locStartColorVar.a = parseFloat(dict.startColorVarianceAlpha || 0) * 255;
                const locEndColor = this._endColor;
                locEndColor.r = parseFloat(dict.finishColorRed || 0) * 255;
                locEndColor.g = parseFloat(dict.finishColorGreen || 0) * 255;
                locEndColor.b = parseFloat(dict.finishColorBlue || 0) * 255;
                locEndColor.a = parseFloat(dict.finishColorAlpha || 0) * 255;
                const locEndColorVar = this._endColorVar;
                locEndColorVar.r = parseFloat(dict.finishColorVarianceRed || 0) * 255;
                locEndColorVar.g = parseFloat(dict.finishColorVarianceGreen || 0) * 255;
                locEndColorVar.b = parseFloat(dict.finishColorVarianceBlue || 0) * 255;
                locEndColorVar.a = parseFloat(dict.finishColorVarianceAlpha || 0) * 255;
                this.startSize = parseFloat(dict.startParticleSize || 0);
                this.startSizeVar = parseFloat(dict.startParticleSizeVariance || 0);
                this.endSize = parseFloat(dict.finishParticleSize || 0);
                this.endSizeVar = parseFloat(dict.finishParticleSizeVariance || 0);
                this.positionType = parseFloat(dict.positionType !== undefined ? dict.positionType : PositionType.FREE);
                this.sourcePos.set(0, 0);
                this.posVar.set(parseFloat(dict.sourcePositionVariancex || 0), parseFloat(dict.sourcePositionVariancey || 0));
                this.angle = parseFloat(dict.angle || 0);
                this.angleVar = parseFloat(dict.angleVariance || 0);
                this.startSpin = parseFloat(dict.rotationStart || 0);
                this.startSpinVar = parseFloat(dict.rotationStartVariance || 0);
                this.endSpin = parseFloat(dict.rotationEnd || 0);
                this.endSpinVar = parseFloat(dict.rotationEndVariance || 0);
                this.emitterMode = parseInt(dict.emitterType || EmitterMode.GRAVITY);
                if (this.emitterMode === EmitterMode.GRAVITY) {
                  this.gravity.set(parseFloat(dict.gravityx || 0), parseFloat(dict.gravityy || 0));
                  this.speed = parseFloat(dict.speed || 0);
                  this.speedVar = parseFloat(dict.speedVariance || 0);
                  this.radialAccel = parseFloat(dict.radialAcceleration || 0);
                  this.radialAccelVar = parseFloat(dict.radialAccelVariance || 0);
                  this.tangentialAccel = parseFloat(dict.tangentialAcceleration || 0);
                  this.tangentialAccelVar = parseFloat(dict.tangentialAccelVariance || 0);
                  let locRotationIsDir = dict.rotationIsDir || '';
                  if (locRotationIsDir !== null) {
                    locRotationIsDir = locRotationIsDir.toString().toLowerCase();
                    this.rotationIsDir = locRotationIsDir === 'true' || locRotationIsDir === '1';
                  } else {
                    this.rotationIsDir = false;
                  }
                } else if (this.emitterMode === EmitterMode.RADIUS) {
                  this.startRadius = parseFloat(dict.maxRadius || 0);
                  this.startRadiusVar = parseFloat(dict.maxRadiusVariance || 0);
                  this.endRadius = parseFloat(dict.minRadius || 0);
                  this.endRadiusVar = parseFloat(dict.minRadiusVariance || 0);
                  this.rotatePerS = parseFloat(dict.rotatePerSecond || 0);
                  this.rotatePerSVar = parseFloat(dict.rotatePerSecondVariance || 0);
                } else {
                  warnID(6009);
                  return false;
                }
                this._initTextureWithDictionary(dict);
                return true;
              }
              _syncAspect() {
                if (this._renderSpriteFrame) {
                  const frameRect = this._renderSpriteFrame.rect;
                  this.aspectRatio = frameRect.width / frameRect.height;
                }
              }
              _applySpriteFrame() {
                this._renderSpriteFrame = this._renderSpriteFrame || this._spriteFrame;
                if (this._renderSpriteFrame) {
                  if (this._renderSpriteFrame.texture) {
                    if (this._simulator) {
                      this._simulator.updateUVs(true);
                    }
                    this._syncAspect();
                    this._updateMaterial();
                    this._stopped = false;
                    this.markForUpdateRenderData();
                  }
                } else {
                  this.resetSystem();
                }
              }
              _getTexture() {
                return this._renderSpriteFrame && this._renderSpriteFrame.texture;
              }
              _updateMaterial() {
                if (this._customMaterial) {
                  this.setSharedMaterial(this._customMaterial, 0);
                  const target = this.getRenderMaterial(0).passes[0].blendState.targets[0];
                  this._dstBlendFactor = target.blendDst;
                  this._srcBlendFactor = target.blendSrc;
                }
                const mat = this.getMaterialInstance(0);
                if (mat) mat.recompileShaders({
                  USE_LOCAL: this._positionType !== PositionType.FREE
                });
                if (mat && mat.passes.length > 0) {
                  this._updateBlendFunc();
                }
              }
              _finishedSimulation() {
                this.resetSystem();
                this.stopSystem();
                this.markForUpdateRenderData();
                if (this.autoRemoveOnFinish && this._stopped) {
                  this.node.destroy();
                }
              }
              _canRender() {
                return super._canRender() && !this._stopped && this._renderSpriteFrame !== null && this._renderSpriteFrame !== undefined;
              }
              _render(render) {
                if (this._positionType === PositionType.RELATIVE) {
                  render.commitComp(this, this._simulator.renderData, this._renderSpriteFrame, this._assembler, this.node.parent);
                } else if (this.positionType === PositionType.GROUPED) {
                  render.commitComp(this, this._simulator.renderData, this._renderSpriteFrame, this._assembler, this.node);
                } else {
                  render.commitComp(this, this._simulator.renderData, this._renderSpriteFrame, this._assembler, null);
                }
              }
              _updatePositionType() {
                if (this._positionType === PositionType.RELATIVE) {
                  this._renderEntity.setRenderTransform(this.node.parent);
                  this._renderEntity.setUseLocal(true);
                } else if (this.positionType === PositionType.GROUPED) {
                  this._renderEntity.setRenderTransform(this.node);
                  this._renderEntity.setUseLocal(true);
                } else {
                  this._renderEntity.setRenderTransform(null);
                  this._renderEntity.setUseLocal(false);
                }
              }
            }, _class3$1.EmitterMode = EmitterMode, _class3$1.PositionType = PositionType, _class3$1.DURATION_INFINITY = DURATION_INFINITY, _class3$1.START_SIZE_EQUAL_TO_END_SIZE = START_SIZE_EQUAL_TO_END_SIZE, _class3$1.START_RADIUS_EQUAL_TO_END_RADIUS = START_RADIUS_EQUAL_TO_END_RADIUS, _class3$1), (_applyDecoratedDescriptor(_class2$1.prototype, "file", [_dec2$1], Object.getOwnPropertyDescriptor(_class2$1.prototype, "file"), _class2$1.prototype), _applyDecoratedDescriptor(_class2$1.prototype, "spriteFrame", [_dec3], Object.getOwnPropertyDescriptor(_class2$1.prototype, "spriteFrame"), _class2$1.prototype), _initializer$1 = applyDecoratedInitializer(_class2$1.prototype, "duration", [serializable$1], function () {
              return -1;
            }), _initializer2$1 = applyDecoratedInitializer(_class2$1.prototype, "emissionRate", [serializable$1], function () {
              return 10;
            }), _initializer3$1 = applyDecoratedInitializer(_class2$1.prototype, "life", [serializable$1], function () {
              return 1;
            }), _initializer4$1 = applyDecoratedInitializer(_class2$1.prototype, "lifeVar", [serializable$1], function () {
              return 0;
            }), _applyDecoratedDescriptor(_class2$1.prototype, "color", [override], Object.getOwnPropertyDescriptor(_class2$1.prototype, "color"), _class2$1.prototype), _initializer5$1 = applyDecoratedInitializer(_class2$1.prototype, "angle", [serializable$1], function () {
              return 90;
            }), _initializer6$1 = applyDecoratedInitializer(_class2$1.prototype, "angleVar", [serializable$1], function () {
              return 20;
            }), _initializer7 = applyDecoratedInitializer(_class2$1.prototype, "startSize", [serializable$1], function () {
              return 50;
            }), _initializer8 = applyDecoratedInitializer(_class2$1.prototype, "startSizeVar", [serializable$1], function () {
              return 0;
            }), _initializer9 = applyDecoratedInitializer(_class2$1.prototype, "endSize", [serializable$1], function () {
              return 0;
            }), _initializer10 = applyDecoratedInitializer(_class2$1.prototype, "endSizeVar", [serializable$1], function () {
              return 0;
            }), _initializer11 = applyDecoratedInitializer(_class2$1.prototype, "startSpin", [serializable$1], function () {
              return 0;
            }), _initializer12 = applyDecoratedInitializer(_class2$1.prototype, "startSpinVar", [serializable$1], function () {
              return 0;
            }), _initializer13 = applyDecoratedInitializer(_class2$1.prototype, "endSpin", [serializable$1], function () {
              return 0;
            }), _initializer14 = applyDecoratedInitializer(_class2$1.prototype, "endSpinVar", [serializable$1], function () {
              return 0;
            }), _initializer15 = applyDecoratedInitializer(_class2$1.prototype, "sourcePos", [serializable$1], function () {
              return Vec2.ZERO.clone();
            }), _initializer16 = applyDecoratedInitializer(_class2$1.prototype, "posVar", [serializable$1], function () {
              return Vec2.ZERO.clone();
            }), _applyDecoratedDescriptor(_class2$1.prototype, "positionType", [_dec4], Object.getOwnPropertyDescriptor(_class2$1.prototype, "positionType"), _class2$1.prototype), _initializer17 = applyDecoratedInitializer(_class2$1.prototype, "emitterMode", [serializable$1, _dec5], function () {
              return EmitterMode.GRAVITY;
            }), _initializer18 = applyDecoratedInitializer(_class2$1.prototype, "gravity", [serializable$1], function () {
              return Vec2.ZERO.clone();
            }), _initializer19 = applyDecoratedInitializer(_class2$1.prototype, "speed", [serializable$1], function () {
              return 180;
            }), _initializer20 = applyDecoratedInitializer(_class2$1.prototype, "speedVar", [serializable$1], function () {
              return 50;
            }), _initializer21 = applyDecoratedInitializer(_class2$1.prototype, "tangentialAccel", [serializable$1], function () {
              return 80;
            }), _initializer22 = applyDecoratedInitializer(_class2$1.prototype, "tangentialAccelVar", [serializable$1], function () {
              return 0;
            }), _initializer23 = applyDecoratedInitializer(_class2$1.prototype, "radialAccel", [serializable$1], function () {
              return 0;
            }), _initializer24 = applyDecoratedInitializer(_class2$1.prototype, "radialAccelVar", [serializable$1], function () {
              return 0;
            }), _initializer25 = applyDecoratedInitializer(_class2$1.prototype, "rotationIsDir", [serializable$1], function () {
              return false;
            }), _initializer26 = applyDecoratedInitializer(_class2$1.prototype, "startRadius", [serializable$1], function () {
              return 0;
            }), _initializer27 = applyDecoratedInitializer(_class2$1.prototype, "startRadiusVar", [serializable$1], function () {
              return 0;
            }), _initializer28 = applyDecoratedInitializer(_class2$1.prototype, "endRadius", [serializable$1], function () {
              return 0;
            }), _initializer29 = applyDecoratedInitializer(_class2$1.prototype, "endRadiusVar", [serializable$1], function () {
              return 0;
            }), _initializer30 = applyDecoratedInitializer(_class2$1.prototype, "rotatePerS", [serializable$1], function () {
              return 0;
            }), _initializer31 = applyDecoratedInitializer(_class2$1.prototype, "rotatePerSVar", [serializable$1], function () {
              return 0;
            }), _initializer32 = applyDecoratedInitializer(_class2$1.prototype, "playOnLoad", [serializable$1], function () {
              return true;
            }), _initializer33 = applyDecoratedInitializer(_class2$1.prototype, "autoRemoveOnFinish", [serializable$1], function () {
              return false;
            }), _initializer34 = applyDecoratedInitializer(_class2$1.prototype, "_preview", [_dec6], function () {
              return true;
            }), _initializer35 = applyDecoratedInitializer(_class2$1.prototype, "_custom", [serializable$1], function () {
              return false;
            }), _initializer36 = applyDecoratedInitializer(_class2$1.prototype, "_file", [serializable$1], function () {
              return null;
            }), _initializer37 = applyDecoratedInitializer(_class2$1.prototype, "_spriteFrame", [serializable$1], function () {
              return null;
            }), _initializer38 = applyDecoratedInitializer(_class2$1.prototype, "_totalParticles", [serializable$1], function () {
              return 150;
            }), _initializer39 = applyDecoratedInitializer(_class2$1.prototype, "_startColor", [serializable$1], function () {
              return new Color(255, 255, 255, 255);
            }), _initializer40 = applyDecoratedInitializer(_class2$1.prototype, "_startColorVar", [serializable$1], function () {
              return new Color(0, 0, 0, 0);
            }), _initializer41 = applyDecoratedInitializer(_class2$1.prototype, "_endColor", [serializable$1], function () {
              return new Color(255, 255, 255, 0);
            }), _initializer42 = applyDecoratedInitializer(_class2$1.prototype, "_endColorVar", [serializable$1], function () {
              return new Color(0, 0, 0, 0);
            }), _initializer43 = applyDecoratedInitializer(_class2$1.prototype, "_positionType", [serializable$1], function () {
              return PositionType.FREE;
            })), _class2$1)) || _class));

            var _dec, _dec2, _class2, _class3, _initializer, _initializer2, _initializer3, _initializer4, _initializer5, _initializer6, _class4;
            class Point {
              constructor(point, dir) {
                this.point = new Vec2();
                this.dir = new Vec2();
                this.distance = 0;
                this.time = 0;
                if (point) this.point.set(point);
                if (dir) this.dir.set(dir);
              }
              setPoint(x, y) {
                this.point.x = x;
                this.point.y = y;
              }
              setDir(x, y) {
                this.dir.x = x;
                this.dir.y = y;
              }
            }
            let MotionStreak = exports('MotionStreak', (_dec = ccclass$1('cc.MotionStreak'), _dec2 = type(Texture2D), _dec(_class2 = (_class3 = (_class4 = class MotionStreak extends UIRenderer {
              constructor(...args) {
                super(...args);
                this._preview = _initializer && _initializer();
                this._fadeTime = _initializer2 && _initializer2();
                this._minSeg = _initializer3 && _initializer3();
                this._stroke = _initializer4 && _initializer4();
                this._texture = _initializer5 && _initializer5();
                this._fastMode = _initializer6 && _initializer6();
                this._points = [];
              }
              get preview() {
                return this._preview;
              }
              set preview(val) {
                this._preview = val;
                this.reset();
              }
              get fadeTime() {
                return this._fadeTime;
              }
              set fadeTime(val) {
                this._fadeTime = val;
                this.reset();
              }
              get minSeg() {
                return this._minSeg;
              }
              set minSeg(val) {
                this._minSeg = val;
              }
              get stroke() {
                return this._stroke;
              }
              set stroke(val) {
                this._stroke = val;
              }
              get texture() {
                return this._texture;
              }
              set texture(val) {
                if (this._texture === val) return;
                this._texture = val;
              }
              get fastMode() {
                return this._fastMode;
              }
              set fastMode(val) {
                this._fastMode = val;
              }
              get points() {
                return this._points;
              }
              onEnable() {
                super.onEnable();
                this.reset();
              }
              _flushAssembler() {
                const assembler = MotionStreak.Assembler.getAssembler(this);
                if (this._assembler !== assembler) {
                  this._assembler = assembler;
                }
                if (!this._renderData) {
                  if (this._assembler && this._assembler.createData) {
                    this._renderData = this._assembler.createData(this);
                    this._renderData.material = this.material;
                    this._updateColor();
                  }
                }
              }
              onFocusInEditor() {
                if (this._preview) {
                  this.reset();
                }
              }
              onLostFocusInEditor() {
                if (this._preview) {
                  this.reset();
                }
              }
              reset() {
                this._points.length = 0;
                if (this._renderData) this._renderData.clear();
              }
              lateUpdate(dt) {
                if (this._assembler) this._assembler.update(this, dt);
              }
              _render(render) {
                render.commitComp(this, this._renderData, this._texture, this._assembler, null);
              }
            }, _class4.Point = Point, _class4), (_applyDecoratedDescriptor(_class3.prototype, "texture", [_dec2], Object.getOwnPropertyDescriptor(_class3.prototype, "texture"), _class3.prototype), _initializer = applyDecoratedInitializer(_class3.prototype, "_preview", [serializable$1], function () {
              return false;
            }), _initializer2 = applyDecoratedInitializer(_class3.prototype, "_fadeTime", [serializable$1], function () {
              return 1;
            }), _initializer3 = applyDecoratedInitializer(_class3.prototype, "_minSeg", [serializable$1], function () {
              return 1;
            }), _initializer4 = applyDecoratedInitializer(_class3.prototype, "_stroke", [serializable$1], function () {
              return 64;
            }), _initializer5 = applyDecoratedInitializer(_class3.prototype, "_texture", [serializable$1], function () {
              return null;
            }), _initializer6 = applyDecoratedInitializer(_class3.prototype, "_fastMode", [serializable$1], function () {
              return false;
            })), _class3)) || _class2));

            new Vec2();
            const _normal = new Vec2();
            const _vec2 = new Vec2();
            let QUAD_INDICES;
            function normal(out, dir) {
              out.x = -dir.y;
              out.y = dir.x;
              return out;
            }
            const MotionStreakAssembler = {
              createData(comp) {
                const renderData = comp.requestRenderData();
                renderData.dataLength = 4;
                renderData.resize(16, (16 - 2) * 3);
                return renderData;
              },
              update(comp, dt) {
                const stroke = comp.stroke / 2;
                const node = comp.node;
                const matrix = node.worldMatrix;
                const tx = matrix.m12;
                const ty = matrix.m13;
                const points = comp.points;
                let cur;
                if (points.length > 1) {
                  const point = points[0];
                  const difx = point.point.x - tx;
                  const dify = point.point.y - ty;
                  if (difx * difx + dify * dify < comp.minSeg) {
                    cur = point;
                  }
                }
                if (!cur) {
                  cur = new MotionStreak.Point();
                  points.unshift(cur);
                }
                cur.setPoint(tx, ty);
                cur.time = comp.fadeTime + dt;
                let vertexCount = 0;
                let indexCount = 0;
                if (points.length < 2) {
                  return;
                }
                const renderData = comp.renderData;
                this.updateRenderDataCache(comp, renderData);
                const color = comp.color;
                const cr = color.r;
                const cg = color.g;
                const cb = color.b;
                const ca = color.a;
                const prev = points[1];
                prev.distance = Vec2.subtract(_vec2, cur.point, prev.point).length();
                _vec2.normalize();
                prev.setDir(_vec2.x, _vec2.y);
                cur.setDir(_vec2.x, _vec2.y);
                renderData.dataLength = points.length * 2;
                const data = renderData.data;
                const fadeTime = comp.fadeTime;
                let findLast = false;
                for (let i = points.length - 1; i >= 0; i--) {
                  const p = points[i];
                  const point = p.point;
                  const dir = p.dir;
                  p.time -= dt;
                  if (p.time < 0) {
                    points.splice(i, 1);
                    continue;
                  }
                  const progress = p.time / fadeTime;
                  const next = points[i - 1];
                  if (!findLast) {
                    if (!next) {
                      points.splice(i, 1);
                      continue;
                    }
                    point.x = next.point.x - dir.x * progress;
                    point.y = next.point.y - dir.y * progress;
                  }
                  findLast = true;
                  normal(_normal, dir);
                  const da = progress * ca;
                  const c = (da << 24 >>> 0) + (cb << 16) + (cg << 8) + cr;
                  let offset = vertexCount;
                  data[offset].x = point.x + _normal.x * stroke;
                  data[offset].y = point.y + _normal.y * stroke;
                  data[offset].u = 1;
                  data[offset].v = progress;
                  data[offset].color._val = c;
                  offset += 1;
                  data[offset].x = point.x - _normal.x * stroke;
                  data[offset].y = point.y - _normal.y * stroke;
                  data[offset].u = 0;
                  data[offset].v = progress;
                  data[offset].color._val = c;
                  vertexCount += 2;
                }
                indexCount = vertexCount <= 2 ? 0 : (vertexCount - 2) * 3;
                renderData.resize(vertexCount, indexCount);
                {
                  const indexCount = renderData.indexCount;
                  this.createQuadIndices(comp, indexCount);
                  renderData.chunk.setIndexBuffer(QUAD_INDICES);
                  this.updateWorldVertexAllData(comp);
                  renderData.updateRenderData(comp, comp.texture);
                  comp.markForUpdateRenderData();
                }
              },
              updateWorldVertexAllData(comp) {
                const renderData = comp.renderData;
                const stride = renderData.floatStride;
                const dataList = renderData.data;
                const vData = renderData.chunk.vb;
                for (let i = 0; i < dataList.length; i++) {
                  const offset = i * stride;
                  vData[offset + 0] = dataList[i].x;
                  vData[offset + 1] = dataList[i].y;
                  vData[offset + 2] = dataList[i].z;
                  vData[offset + 3] = dataList[i].u;
                  vData[offset + 4] = dataList[i].v;
                  Color.toArray(vData, dataList[i].color, offset + 5);
                }
              },
              createQuadIndices(comp, indexCount) {
                const renderData = comp.renderData;
                const chunk = renderData.chunk;
                const vid = 0;
                const meshBuffer = chunk.meshBuffer;
                let indexOffset = meshBuffer.indexOffset;
                QUAD_INDICES = null;
                QUAD_INDICES = new Uint16Array(indexCount);
                for (let i = 0, l = indexCount; i < l; i += 2) {
                  const start = vid + i;
                  QUAD_INDICES[indexOffset++] = start;
                  QUAD_INDICES[indexOffset++] = start + 2;
                  QUAD_INDICES[indexOffset++] = start + 1;
                  QUAD_INDICES[indexOffset++] = start + 1;
                  QUAD_INDICES[indexOffset++] = start + 2;
                  QUAD_INDICES[indexOffset++] = start + 3;
                }
              },
              updateRenderDataCache(comp, renderData) {
                if (renderData.passDirty) {
                  renderData.updatePass(comp);
                }
                if (renderData.nodeDirty) {
                  renderData.updateNode(comp);
                }
                if (renderData.textureDirty && comp.texture) {
                  renderData.updateTexture(comp.texture);
                  renderData.material = comp.getRenderMaterial(0);
                }
                if (renderData.hashDirty) {
                  renderData.updateHash();
                }
              },
              updateRenderData(comp) {
                {
                  comp.renderData.renderDrawInfo.setVertDirty(false);
                  comp.node.hasChangedFlags = 0;
                }
              },
              updateColor(comp) {},
              fillBuffers(comp, renderer) {
                const renderData = comp.renderData;
                const chunk = renderData.chunk;
                const dataList = renderData.data;
                const vertexCount = renderData.vertexCount;
                const indexCount = renderData.indexCount;
                const vData = chunk.vb;
                let vertexOffset = 0;
                for (let i = 0; i < vertexCount; i++) {
                  const vert = dataList[i];
                  vData[vertexOffset++] = vert.x;
                  vData[vertexOffset++] = vert.y;
                  vData[vertexOffset++] = vert.z;
                  vData[vertexOffset++] = vert.u;
                  vData[vertexOffset++] = vert.v;
                  Color.toArray(vData, vert.color, vertexOffset);
                  vertexOffset += 4;
                }
                chunk.bufferId;
                const vid = chunk.vertexOffset;
                const meshBuffer = chunk.meshBuffer;
                const ib = chunk.meshBuffer.iData;
                let indexOffset = meshBuffer.indexOffset;
                for (let i = 0, l = indexCount; i < l; i += 2) {
                  const start = vid + i;
                  ib[indexOffset++] = start;
                  ib[indexOffset++] = start + 2;
                  ib[indexOffset++] = start + 1;
                  ib[indexOffset++] = start + 1;
                  ib[indexOffset++] = start + 2;
                  ib[indexOffset++] = start + 3;
                }
                meshBuffer.indexOffset += renderData.indexCount;
                meshBuffer.setDirty();
              }
            };
            const MotionStreakAssemblerManager = exports('MotionStreakAssemblerManager', {
              getAssembler(comp) {
                return MotionStreakAssembler;
              }
            });
            MotionStreak.Assembler = MotionStreakAssemblerManager;

            const ParticleAssembler = {
              maxParticleDeltaTime: 0,
              createData(comp) {
                return MeshRenderData.add();
              },
              removeData(data) {
                MeshRenderData.remove(data);
              },
              updateRenderData() {},
              fillBuffers(comp, renderer) {}
            };
            const ParticleSystem2DAssembler = exports('ParticleSystem2DAssembler', {
              getAssembler(comp) {
                if (!ParticleAssembler.maxParticleDeltaTime) {
                  ParticleAssembler.maxParticleDeltaTime = legacyCC.game.frameTime / 1000 * 2;
                }
                return ParticleAssembler;
              }
            });
            ParticleSystem2D.Assembler = ParticleSystem2DAssembler;

        })
    };
}));
