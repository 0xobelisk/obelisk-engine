System.register(['./index-ce98320e.js', './mesh-renderer-ea94cc01.js', './find-7a03d1cc.js', './create-mesh.jsb-8af9d27e.js', './buffer-9511d9f4.js', './builtin-res-mgr.jsb-c9e8e53a.js', './node-event-18d96a1b.js', './deprecated-f8df8d32.js', './director-dc238483.js', './device-90bc7390.js', './mesh.jsb-cea8fe4b.js', './decorators-b63b63a2.js', './deprecated-80961f27.js', './renderer-3bf7a012.js', './model-renderer-f8d2f66d.js', './pipeline-sub-state.jsb-f3a5cc2c.js', './touch-af62e326.js', './scene-asset.jsb-0d4c6201.js'], (function (exports) {
    'use strict';
    var ccclass, legacyCC, System, ccwindow, settings, Settings, warn, preTransforms, sys, MeshRenderer, deviceManager, createMesh, Node, Material, Layers, director, BufferTextureCopy, TextureInfo, TextureType, TextureUsageBit, Format;
    return {
        setters: [function (module) {
            ccclass = module.by;
            legacyCC = module.l;
            System = module.a$;
            ccwindow = module.c6;
            settings = module.a_;
            Settings = module.aZ;
            warn = module.w;
            preTransforms = module.z;
            sys = module.aL;
        }, function (module) {
            MeshRenderer = module.M;
        }, function (module) {
            deviceManager = module.d;
        }, function (module) {
            createMesh = module.c;
        }, function () {}, function (module) {
            Node = module.Q;
            Material = module.ap;
            Layers = module.V;
        }, function () {}, function () {}, function (module) {
            director = module.n;
        }, function (module) {
            BufferTextureCopy = module.a1;
            TextureInfo = module.ac;
            TextureType = module.f;
            TextureUsageBit = module.g;
            Format = module.b;
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            class Counter {
              get value() {
                return this._value;
              }
              set value(val) {
                this._value = val;
              }
              constructor(id, opts, now) {
                this._opts = void 0;
                this._total = 0;
                this._value = 0;
                this._averageValue = 0;
                this._accumValue = 0;
                this._accumSamples = 0;
                this._id = id;
                this._opts = opts;
                this._accumStart = now;
              }
              sample(now) {
                this._average(this._value, now);
              }
              human() {
                const {
                  average,
                  isInteger
                } = this._opts;
                const v = average ? this._averageValue : this._value;
                return isInteger ? Math.round(v) : Math.round(v * 100) / 100;
              }
              alarm() {
                if (this._opts.below !== undefined && this._value < this._opts.below) {
                  return true;
                }
                if (this._opts.over !== undefined && this._value > this._opts.over) {
                  return true;
                }
                return false;
              }
              _average(v, now = 0) {
                if (this._opts.average) {
                  this._accumValue += v;
                  ++this._accumSamples;
                  const t = now;
                  if (t - this._accumStart >= this._opts.average) {
                    this._averageValue = this._accumValue / this._accumSamples;
                    this._accumValue = 0;
                    this._accumStart = t;
                    this._accumSamples = 0;
                  }
                }
              }
            }

            var _dec, _class;
            let PerfCounter = (_dec = ccclass('cc.PerfCounter'), _dec(_class = class PerfCounter extends Counter {
              constructor(id, opts, now) {
                super(id, opts, now);
                this._time = now;
              }
              start(now = 0) {
                this._time = now;
              }
              end(now = 0) {
                this._value = now - this._time;
                this._average(this._value);
              }
              tick() {
                this.end();
                this.start();
              }
              frame(now) {
                const t = now;
                const e = t - this._time;
                this._total++;
                const avg = this._opts.average || 1000;
                if (e > avg) {
                  this._value = this._total * 1000 / e;
                  this._total = 0;
                  this._time = t;
                  this._average(this._value);
                }
              }
            }) || _class);

            const _characters = '0123456789. ';
            const _average = 500;
            const _string2offset = {
              0: 0,
              1: 1,
              2: 2,
              3: 3,
              4: 4,
              5: 5,
              6: 6,
              7: 7,
              8: 8,
              9: 9,
              '.': 10
            };
            const _profileInfo = {
              fps: {
                desc: `Framerate (FPS)`,
                below: 30,
                average: _average,
                isInteger: true
              },
              draws: {
                desc: 'Draw call',
                isInteger: true
              },
              frame: {
                desc: 'Frame time (ms)',
                min: 0,
                max: 50,
                average: _average
              },
              instances: {
                desc: 'Instance Count',
                isInteger: true
              },
              tricount: {
                desc: 'Triangle',
                isInteger: true
              },
              logic: {
                desc: 'Game Logic (ms)',
                min: 0,
                max: 50,
                average: _average,
                color: '#080'
              },
              physics: {
                desc: 'Physics (ms)',
                min: 0,
                max: 50,
                average: _average
              },
              render: {
                desc: 'Renderer (ms)',
                min: 0,
                max: 50,
                average: _average,
                color: '#f90'
              },
              present: {
                desc: 'Present (ms)',
                min: 0,
                max: 50,
                average: _average,
                color: '#f90'
              },
              textureMemory: {
                desc: 'GFX Texture Mem(M)'
              },
              bufferMemory: {
                desc: 'GFX Buffer Mem(M)'
              }
            };
            const _constants = {
              fontSize: 23,
              quadHeight: 0.4,
              segmentsPerLine: 8,
              textureWidth: 280,
              textureHeight: 280
            };
            class Profiler extends System {
              constructor() {
                super();
                this._profilerStats = null;
                this._showFPS = false;
                this._rootNode = null;
                this._device = null;
                this._swapchain = null;
                this._meshRenderer = null;
                this._canvas = null;
                this._ctx = null;
                this._texture = null;
                this._region = new BufferTextureCopy();
                this._canvasArr = [];
                this._regionArr = [this._region];
                this.digitsData = null;
                this.offsetData = null;
                this.pass = null;
                this._canvasDone = false;
                this._statsDone = false;
                this._inited = false;
                this._lineHeight = _constants.textureHeight / (Object.keys(_profileInfo).length + 1);
                this._wordHeight = 0;
                this._eachNumWidth = 0;
                this._totalLines = 0;
                this.lastTime = 0;
                {
                  this._canvas = ccwindow.document.createElement('canvas');
                  this._ctx = this._canvas.getContext('2d');
                  this._canvasArr.push(this._canvas);
                }
              }
              init() {
                const showFPS = !!settings.querySettings(Settings.Category.PROFILING, 'showFPS');
                if (showFPS) {
                  this.showStats();
                } else {
                  this.hideStats();
                }
              }
              get _stats() {
                warn('Profiler._stats is deprecated, please use Profiler.stats instead.');
                return this._profilerStats;
              }
              get stats() {
                return this._profilerStats;
              }
              isShowingStats() {
                return this._showFPS;
              }
              hideStats() {
                if (this._showFPS) {
                  if (this._rootNode) {
                    this._rootNode.active = false;
                  }
                  legacyCC.director.off(legacyCC.Director.EVENT_BEFORE_UPDATE, this.beforeUpdate, this);
                  legacyCC.director.off(legacyCC.Director.EVENT_AFTER_UPDATE, this.afterUpdate, this);
                  legacyCC.director.off(legacyCC.Director.EVENT_BEFORE_PHYSICS, this.beforePhysics, this);
                  legacyCC.director.off(legacyCC.Director.EVENT_AFTER_PHYSICS, this.afterPhysics, this);
                  legacyCC.director.off(legacyCC.Director.EVENT_BEFORE_DRAW, this.beforeDraw, this);
                  legacyCC.director.off(legacyCC.Director.EVENT_AFTER_RENDER, this.afterRender, this);
                  legacyCC.director.off(legacyCC.Director.EVENT_AFTER_DRAW, this.afterPresent, this);
                  this._showFPS = false;
                  director.root.pipeline.profiler = null;
                  legacyCC.game.config.showFPS = false;
                }
              }
              showStats() {
                if (!this._showFPS) {
                  if (!this._device) {
                    const root = legacyCC.director.root;
                    this._device = deviceManager.gfxDevice;
                    this._swapchain = root.mainWindow.swapchain;
                  }
                  this.generateCanvas();
                  this.generateStats();
                  legacyCC.game.once(legacyCC.Game.EVENT_ENGINE_INITED, this.generateNode, this);
                  legacyCC.game.on(legacyCC.Game.EVENT_RESTART, this.generateNode, this);
                  if (this._rootNode) {
                    this._rootNode.active = true;
                  }
                  legacyCC.director.on(legacyCC.Director.EVENT_BEFORE_UPDATE, this.beforeUpdate, this);
                  legacyCC.director.on(legacyCC.Director.EVENT_AFTER_UPDATE, this.afterUpdate, this);
                  legacyCC.director.on(legacyCC.Director.EVENT_BEFORE_PHYSICS, this.beforePhysics, this);
                  legacyCC.director.on(legacyCC.Director.EVENT_AFTER_PHYSICS, this.afterPhysics, this);
                  legacyCC.director.on(legacyCC.Director.EVENT_BEFORE_DRAW, this.beforeDraw, this);
                  legacyCC.director.on(legacyCC.Director.EVENT_AFTER_RENDER, this.afterRender, this);
                  legacyCC.director.on(legacyCC.Director.EVENT_AFTER_DRAW, this.afterPresent, this);
                  this._showFPS = true;
                  this._canvasDone = true;
                  this._statsDone = true;
                  legacyCC.game.config.showFPS = true;
                }
              }
              generateCanvas() {
                if (this._canvasDone) {
                  return;
                }
                const {
                  textureWidth,
                  textureHeight
                } = _constants;
                if (!this._ctx || !this._canvas) {
                  return;
                }
                this._canvas.width = textureWidth;
                this._canvas.height = textureHeight;
                this._canvas.style.width = `${this._canvas.width}`;
                this._canvas.style.height = `${this._canvas.height}`;
                this._ctx.font = `${_constants.fontSize}px Arial`;
                this._ctx.textBaseline = 'top';
                this._ctx.fillStyle = '#fff';
                this._texture = this._device.createTexture(new TextureInfo(TextureType.TEX2D, TextureUsageBit.SAMPLED | TextureUsageBit.TRANSFER_DST, Format.RGBA8, textureWidth, textureHeight));
                this._region.texExtent.width = textureWidth;
                this._region.texExtent.height = textureHeight;
              }
              generateStats() {
                if (this._statsDone || !this._ctx || !this._canvas) {
                  return;
                }
                this._profilerStats = null;
                const now = performance.now();
                this._ctx.textAlign = 'left';
                let i = 0;
                for (const id in _profileInfo) {
                  const element = _profileInfo[id];
                  this._ctx.fillText(element.desc, 0, i * this._lineHeight);
                  element.counter = new PerfCounter(id, element, now);
                  i++;
                }
                this._totalLines = i;
                this._wordHeight = this._totalLines * this._lineHeight / this._canvas.height;
                for (let j = 0; j < _characters.length; ++j) {
                  const offset = this._ctx.measureText(_characters[j]).width;
                  this._eachNumWidth = Math.max(this._eachNumWidth, offset);
                }
                for (let j = 0; j < _characters.length; ++j) {
                  this._ctx.fillText(_characters[j], j * this._eachNumWidth, this._totalLines * this._lineHeight);
                }
                this._eachNumWidth /= this._canvas.width;
                this._profilerStats = _profileInfo;
                this._canvasArr[0] = this._canvas;
                this._device.copyTexImagesToTexture(this._canvasArr, this._texture, this._regionArr);
              }
              generateNode() {
                if (this._rootNode && this._rootNode.isValid) {
                  return;
                }
                this._rootNode = new Node('PROFILER_NODE');
                this._rootNode._objFlags = legacyCC.Object.Flags.DontSave | legacyCC.Object.Flags.HideInHierarchy;
                legacyCC.game.addPersistRootNode(this._rootNode);
                const managerNode = new Node('Profiler_Root');
                managerNode.parent = this._rootNode;
                const height = _constants.quadHeight;
                const rowHeight = height / this._totalLines;
                const lWidth = height / this._wordHeight;
                const scale = rowHeight / _constants.fontSize;
                const columnWidth = this._eachNumWidth * this._canvas.width * scale;
                const vertexPos = [0, height, 0, lWidth, height, 0, lWidth, 0, 0, 0, 0, 0];
                const vertexindices = [0, 2, 1, 0, 3, 2];
                const vertexUV = [0, 0, -1, 0, 1, 0, -1, 0, 1, this._wordHeight, -1, 0, 0, this._wordHeight, -1, 0];
                let offset = 0;
                for (let i = 0; i < this._totalLines; i++) {
                  for (let j = 0; j < _constants.segmentsPerLine; j++) {
                    vertexPos.push(lWidth + j * columnWidth, height - i * rowHeight, 0);
                    vertexPos.push(lWidth + (j + 1) * columnWidth, height - i * rowHeight, 0);
                    vertexPos.push(lWidth + (j + 1) * columnWidth, height - (i + 1) * rowHeight, 0);
                    vertexPos.push(lWidth + j * columnWidth, height - (i + 1) * rowHeight, 0);
                    offset = (i * _constants.segmentsPerLine + j + 1) * 4;
                    vertexindices.push(0 + offset, 2 + offset, 1 + offset, 0 + offset, 3 + offset, 2 + offset);
                    const idx = i * _constants.segmentsPerLine + j;
                    const z = Math.floor(idx / 4);
                    const w = idx - z * 4;
                    vertexUV.push(0, this._wordHeight, z, w);
                    vertexUV.push(this._eachNumWidth, this._wordHeight, z, w);
                    vertexUV.push(this._eachNumWidth, 1, z, w);
                    vertexUV.push(0, 1, z, w);
                  }
                }
                this._meshRenderer = managerNode.addComponent(MeshRenderer);
                this._meshRenderer.mesh = createMesh({
                  positions: vertexPos,
                  indices: vertexindices,
                  colors: vertexUV
                });
                const _material = new Material();
                _material.initialize({
                  effectName: 'util/profiler'
                });
                const pass = this.pass = _material.passes[0];
                const hTexture = pass.getBinding('mainTexture');
                const bDigits = pass.getBinding('digits');
                const bOffset = pass.getBinding('offset');
                pass.bindTexture(hTexture, this._texture);
                this.digitsData = pass.blocks[bDigits];
                this.offsetData = pass.blocks[bOffset];
                this.offsetData[3] = -1;
                this._meshRenderer.material = _material;
                this._meshRenderer.node.layer = Layers.Enum.PROFILER;
                this._inited = true;
              }
              beforeUpdate() {
                if (!this._profilerStats) {
                  return;
                }
                const now = performance.now();
                this._profilerStats.frame.counter.start(now);
                this._profilerStats.logic.counter.start(now);
              }
              afterUpdate() {
                if (!this._profilerStats) {
                  return;
                }
                const now = performance.now();
                if (legacyCC.director.isPaused()) {
                  this._profilerStats.frame.counter.start(now);
                } else {
                  this._profilerStats.logic.counter.end(now);
                }
              }
              beforePhysics() {
                if (!this._profilerStats) {
                  return;
                }
                const now = performance.now();
                this._profilerStats.physics.counter.start(now);
              }
              afterPhysics() {
                if (!this._profilerStats) {
                  return;
                }
                const now = performance.now();
                this._profilerStats.physics.counter.end(now);
              }
              beforeDraw() {
                if (!this._profilerStats || !this._inited) {
                  return;
                }
                const surfaceTransform = this._swapchain.surfaceTransform;
                const clipSpaceSignY = this._device.capabilities.clipSpaceSignY;
                if (surfaceTransform !== this.offsetData[3]) {
                  const preTransform = preTransforms[surfaceTransform];
                  let x = -0.9;
                  let y = -0.9 * clipSpaceSignY;
                  if (sys.isXR) {
                    x = -0.5;
                    y = -0.5 * clipSpaceSignY;
                  }
                  this.offsetData[0] = x * preTransform[0] + y * preTransform[2];
                  this.offsetData[1] = x * preTransform[1] + y * preTransform[3];
                  this.offsetData[2] = this._eachNumWidth;
                  this.offsetData[3] = surfaceTransform;
                }
                this.pass.setRootBufferDirty(true);
                if (this._meshRenderer.model) {
                  director.root.pipeline.profiler = this._meshRenderer.model;
                } else {
                  director.root.pipeline.profiler = null;
                }
                const now = performance.now();
                this._profilerStats.render.counter.start(now);
              }
              afterRender() {
                if (!this._profilerStats || !this._inited) {
                  return;
                }
                const now = performance.now();
                this._profilerStats.render.counter.end(now);
                this._profilerStats.present.counter.start(now);
              }
              afterPresent() {
                if (!this._profilerStats || !this._inited) {
                  return;
                }
                const now = performance.now();
                this._profilerStats.frame.counter.end(now);
                this._profilerStats.fps.counter.frame(now);
                this._profilerStats.present.counter.end(now);
                if (now - this.lastTime < _average) {
                  return;
                }
                this.lastTime = now;
                const device = this._device;
                this._profilerStats.draws.counter.value = device.numDrawCalls;
                this._profilerStats.instances.counter.value = device.numInstances;
                this._profilerStats.bufferMemory.counter.value = device.memoryStatus.bufferSize / (1024 * 1024);
                this._profilerStats.textureMemory.counter.value = device.memoryStatus.textureSize / (1024 * 1024);
                this._profilerStats.tricount.counter.value = device.numTris;
                let i = 0;
                const view = this.digitsData;
                for (const id in this._profilerStats) {
                  const stat = this._profilerStats[id];
                  stat.counter.sample(now);
                  const result = stat.counter.human().toString();
                  for (let j = _constants.segmentsPerLine - 1; j >= 0; j--) {
                    const index = i * _constants.segmentsPerLine + j;
                    const character = result[result.length - (_constants.segmentsPerLine - j)];
                    let offset = _string2offset[character];
                    if (offset === undefined) {
                      offset = 11;
                    }
                    view[index] = offset;
                  }
                  i++;
                }
              }
            } exports('Profiler', Profiler);
            const profiler = exports('profiler', new Profiler());
            director.registerSystem('profiler', profiler, 0);
            legacyCC.profiler = profiler;

        })
    };
}));
