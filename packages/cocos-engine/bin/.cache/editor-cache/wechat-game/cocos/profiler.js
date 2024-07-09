System.register(["./index-92d00b49.js","./mesh-renderer-91d2bae2.js","./director-44a98d9f.js","./create-mesh-b322554e.js","./pipeline-state-manager-45d8faaf.js","./buffer-barrier-a7de2d9a.js","./node-event-c62a1caf.js","./deprecated-8cbcc834.js","./mesh-4be1d55f.js","./wasm-minigame-c1b4b430.js","./deprecated-c8756aed.js","./model-renderer-05cff7aa.js","./renderer-2125723a.js","./touch-df137fff.js"],(function(t){"use strict";var e,i,s,r,a,o,n,h,c,_,f,u,l,d,m,p,v,g,S,E,w,D,T;return{setters:[function(t){e=t.bC,i=t.bE,s=t.bF,r=t.b2,a=t.b1,o=t.l,n=t.E,h=t.aP,c=t.bG,_=t.w,f=t.b3},function(t){u=t.M},function(t){l=t.aU,d=t.ax,m=t.b4},function(t){p=t._},function(t){v=t.d,g=t.b},function(t){S=t.ae,E=t.g,w=t.h,D=t.b,T=t.a3},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var N,R=function(){function t(t,e,i){this._opts=void 0,this._total=0,this._value=0,this._averageValue=0,this._accumValue=0,this._accumSamples=0,this._id=t,this._opts=e,this._accumStart=i}var i=t.prototype;return i.sample=function(t){this._average(this._value,t)},i.human=function(){var t=this._opts,e=t.average,i=t.isInteger,s=e?this._averageValue:this._value;return i?Math.round(s):Math.round(100*s)/100},i.alarm=function(){return void 0!==this._opts.below&&this._value<this._opts.below||void 0!==this._opts.over&&this._value>this._opts.over},i._average=function(t,e){if(void 0===e&&(e=0),this._opts.average){this._accumValue+=t,++this._accumSamples;var i=e;i-this._accumStart>=this._opts.average&&(this._averageValue=this._accumValue/this._accumSamples,this._accumValue=0,this._accumStart=i,this._accumSamples=0)}},e(t,[{key:"value",get:function(){return this._value},set:function(t){this._value=t}}]),t}(),x=i("cc.PerfCounter")(N=function(t){function e(e,i,s){var r;return(r=t.call(this,e,i,s)||this)._time=s,r}s(e,t);var i=e.prototype;return i.start=function(t){void 0===t&&(t=0),this._time=t},i.end=function(t){void 0===t&&(t=0),this._value=t-this._time,this._average(this._value)},i.tick=function(){this.end(),this.start()},i.frame=function(t){var e=t,i=e-this._time;this._total++,i>(this._opts.average||1e3)&&(this._value=1e3*this._total/i,this._total=0,this._time=e,this._average(this._value))},e}(R))||N,b="0123456789. ",P=500,F={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,".":10},y={fps:{desc:"Framerate (FPS)",below:30,average:P,isInteger:!0},draws:{desc:"Draw call",isInteger:!0},frame:{desc:"Frame time (ms)",min:0,max:50,average:P},instances:{desc:"Instance Count",isInteger:!0},tricount:{desc:"Triangle",isInteger:!0},logic:{desc:"Game Logic (ms)",min:0,max:50,average:P,color:"#080"},physics:{desc:"Physics (ms)",min:0,max:50,average:P},render:{desc:"Renderer (ms)",min:0,max:50,average:P,color:"#f90"},present:{desc:"Present (ms)",min:0,max:50,average:P,color:"#f90"},textureMemory:{desc:"GFX Texture Mem(M)"},bufferMemory:{desc:"GFX Buffer Mem(M)"}},A=t("Profiler",function(t){function i(){var e;return(e=t.call(this)||this)._profilerStats=null,e._showFPS=!1,e._rootNode=null,e._device=null,e._swapchain=null,e._meshRenderer=null,e._canvas=null,e._ctx=null,e._texture=null,e._region=new T,e._canvasArr=[],e._regionArr=[e._region],e.digitsData=null,e.offsetData=null,e.pass=null,e._canvasDone=!1,e._statsDone=!1,e._inited=!1,e._lineHeight=280/(Object.keys(y).length+1),e._wordHeight=0,e._eachNumWidth=0,e._totalLines=0,e.lastTime=0,e._canvas=c.document.createElement("canvas"),e._ctx=e._canvas.getContext("2d"),e._canvasArr.push(e._canvas),e}s(i,t);var f=i.prototype;return f.init=function(){r.querySettings(a.Category.PROFILING,"showFPS")?this.showStats():this.hideStats()},f.isShowingStats=function(){return this._showFPS},f.hideStats=function(){this._showFPS&&(this._rootNode&&(this._rootNode.active=!1),o.director.off(o.Director.EVENT_BEFORE_UPDATE,this.beforeUpdate,this),o.director.off(o.Director.EVENT_AFTER_UPDATE,this.afterUpdate,this),o.director.off(o.Director.EVENT_BEFORE_PHYSICS,this.beforePhysics,this),o.director.off(o.Director.EVENT_AFTER_PHYSICS,this.afterPhysics,this),o.director.off(o.Director.EVENT_BEFORE_DRAW,this.beforeDraw,this),o.director.off(o.Director.EVENT_AFTER_RENDER,this.afterRender,this),o.director.off(o.Director.EVENT_AFTER_DRAW,this.afterPresent,this),this._showFPS=!1,l.root.pipeline.profiler=null,o.game.config.showFPS=!1)},f.showStats=function(){if(!this._showFPS){if(!this._device){var t=o.director.root;this._device=v.gfxDevice,this._swapchain=t.mainWindow.swapchain}this.generateCanvas(),this.generateStats(),o.game.once(o.Game.EVENT_ENGINE_INITED,this.generateNode,this),o.game.on(o.Game.EVENT_RESTART,this.generateNode,this),this._rootNode&&(this._rootNode.active=!0),o.director.on(o.Director.EVENT_BEFORE_UPDATE,this.beforeUpdate,this),o.director.on(o.Director.EVENT_AFTER_UPDATE,this.afterUpdate,this),o.director.on(o.Director.EVENT_BEFORE_PHYSICS,this.beforePhysics,this),o.director.on(o.Director.EVENT_AFTER_PHYSICS,this.afterPhysics,this),o.director.on(o.Director.EVENT_BEFORE_DRAW,this.beforeDraw,this),o.director.on(o.Director.EVENT_AFTER_RENDER,this.afterRender,this),o.director.on(o.Director.EVENT_AFTER_DRAW,this.afterPresent,this),this._showFPS=!0,this._canvasDone=!0,this._statsDone=!0,o.game.config.showFPS=!0}},f.generateCanvas=function(){if(!this._canvasDone){this._ctx&&this._canvas&&(this._canvas.width=280,this._canvas.height=280,this._canvas.style.width=""+this._canvas.width,this._canvas.style.height=""+this._canvas.height,this._ctx.font="23px Arial",this._ctx.textBaseline="top",this._ctx.fillStyle="#fff",this._texture=this._device.createTexture(new S(E.TEX2D,w.SAMPLED|w.TRANSFER_DST,D.RGBA8,280,280)),this._region.texExtent.width=280,this._region.texExtent.height=280)}},f.generateStats=function(){if(!this._statsDone&&this._ctx&&this._canvas){this._profilerStats=null;var t=performance.now();this._ctx.textAlign="left";var e=0;for(var i in y){var s=y[i];this._ctx.fillText(s.desc,0,e*this._lineHeight),s.counter=new x(i,s,t),e++}this._totalLines=e,this._wordHeight=this._totalLines*this._lineHeight/this._canvas.height;for(var r=0;r<b.length;++r){var a=this._ctx.measureText(b[r]).width;this._eachNumWidth=Math.max(this._eachNumWidth,a)}for(var o=0;o<b.length;++o)this._ctx.fillText(b[o],o*this._eachNumWidth,this._totalLines*this._lineHeight);this._eachNumWidth/=this._canvas.width,this._profilerStats=y,this._canvasArr[0]=this._canvas,this._device.copyTexImagesToTexture(this._canvasArr,this._texture,this._regionArr)}},f.generateNode=function(){if(!this._rootNode||!this._rootNode.isValid){this._rootNode=new d("PROFILER_NODE"),this._rootNode._objFlags=o.Object.Flags.DontSave|o.Object.Flags.HideInHierarchy,o.game.addPersistRootNode(this._rootNode);var t=new d("Profiler_Root");t.parent=this._rootNode;for(var e=.4,i=e/this._totalLines,s=e/this._wordHeight,r=i/23,a=this._eachNumWidth*this._canvas.width*r,n=[0,e,0,s,e,0,s,0,0,0,0,0],h=[0,2,1,0,3,2],c=[0,0,-1,0,1,0,-1,0,1,this._wordHeight,-1,0,0,this._wordHeight,-1,0],_=0,f=0;f<this._totalLines;f++)for(var l=0;l<8;l++){n.push(s+l*a,e-f*i,0),n.push(s+(l+1)*a,e-f*i,0),n.push(s+(l+1)*a,e-(f+1)*i,0),n.push(s+l*a,e-(f+1)*i,0),_=4*(8*f+l+1),h.push(0+_,2+_,1+_,0+_,3+_,2+_);var v=8*f+l,S=Math.floor(v/4),E=v-4*S;c.push(0,this._wordHeight,S,E),c.push(this._eachNumWidth,this._wordHeight,S,E),c.push(this._eachNumWidth,1,S,E),c.push(0,1,S,E)}this._meshRenderer=t.addComponent(u),this._meshRenderer.mesh=p({positions:n,indices:h,colors:c});var w=new m;w.initialize({effectName:"util/profiler"});var D=this.pass=w.passes[0],T=D.getBinding("mainTexture"),N=D.getBinding("digits"),R=D.getBinding("offset");D.bindTexture(T,this._texture),this.digitsData=D.blocks[N],this.offsetData=D.blocks[R],this.offsetData[3]=-1,this._meshRenderer.material=w,this._meshRenderer.node.layer=g.Enum.PROFILER,this._inited=!0}},f.beforeUpdate=function(){if(this._profilerStats){var t=performance.now();this._profilerStats.frame.counter.start(t),this._profilerStats.logic.counter.start(t)}},f.afterUpdate=function(){if(this._profilerStats){var t=performance.now();o.director.isPaused()?this._profilerStats.frame.counter.start(t):this._profilerStats.logic.counter.end(t)}},f.beforePhysics=function(){if(this._profilerStats){var t=performance.now();this._profilerStats.physics.counter.start(t)}},f.afterPhysics=function(){if(this._profilerStats){var t=performance.now();this._profilerStats.physics.counter.end(t)}},f.beforeDraw=function(){if(this._profilerStats&&this._inited){var t=this._swapchain.surfaceTransform,e=this._device.capabilities.clipSpaceSignY;if(t!==this.offsetData[3]){var i=n[t],s=-.9,r=-.9*e;h.isXR&&(s=-.5,r=-.5*e),this.offsetData[0]=s*i[0]+r*i[2],this.offsetData[1]=s*i[1]+r*i[3],this.offsetData[2]=this._eachNumWidth,this.offsetData[3]=t}this.pass.setRootBufferDirty(!0),this._meshRenderer.model?l.root.pipeline.profiler=this._meshRenderer.model:l.root.pipeline.profiler=null;var a=performance.now();this._profilerStats.render.counter.start(a)}},f.afterRender=function(){if(this._profilerStats&&this._inited){var t=performance.now();this._profilerStats.render.counter.end(t),this._profilerStats.present.counter.start(t)}},f.afterPresent=function(){if(this._profilerStats&&this._inited){var t=performance.now();if(this._profilerStats.frame.counter.end(t),this._profilerStats.fps.counter.frame(t),this._profilerStats.present.counter.end(t),!(t-this.lastTime<P)){this.lastTime=t;var e=this._device;this._profilerStats.draws.counter.value=e.numDrawCalls,this._profilerStats.instances.counter.value=e.numInstances,this._profilerStats.bufferMemory.counter.value=e.memoryStatus.bufferSize/1048576,this._profilerStats.textureMemory.counter.value=e.memoryStatus.textureSize/1048576,this._profilerStats.tricount.counter.value=e.numTris;var i=0,s=this.digitsData;for(var r in this._profilerStats){var a=this._profilerStats[r];a.counter.sample(t);for(var o=a.counter.human().toString(),n=7;n>=0;n--){var h=8*i+n,c=o[o.length-(8-n)],_=F[c];void 0===_&&(_=11),s[h]=_}i++}}}},e(i,[{key:"_stats",get:function(){return _("Profiler._stats is deprecated, please use Profiler.stats instead."),this._profilerStats}},{key:"stats",get:function(){return this._profilerStats}}]),i}(f)),V=t("profiler",new A);l.registerSystem("profiler",V,0),o.profiler=V}}}));
