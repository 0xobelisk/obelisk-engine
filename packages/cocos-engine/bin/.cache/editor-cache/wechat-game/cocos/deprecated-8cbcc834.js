System.register(["./index-92d00b49.js","./director-44a98d9f.js","./pipeline-state-manager-45d8faaf.js","./buffer-barrier-a7de2d9a.js","./node-event-c62a1caf.js"],(function(e,t){"use strict";var i,n,s,r,a,o,h,u,l,c,d,g,m,p,f,_,E,T,S,v,y,P,b,I,R,w,N,x,M,A,C,D,k,B,L,V,F,H,O,q,j,U,G,z,W,X,Y,J,Z,K,Q,$,ee,te,ie,ne,se,re,ae;return{setters:[function(e){i=e.bC,n=e.cf,s=e.V,r=e.b2,a=e.b1,o=e.l,h=e.bG,u=e.t,l=e.aP,c=e.K,d=e.E,g=e.cx,m=e.bF,p=e.cd,f=e.aN,_=e.bu,E=e.aQ,T=e.aO,S=e.bk,v=e.f,y=e.a,P=e.c2,b=e.c,I=e.b,R=e.w,w=e.aI,N=e.k,x=e.aG,M=e.al,A=e.ak,C=e.aj},function(e){D=e.b4,k=e.bC,B=e.aU,L=e.bg,V=e.aT,F=e.b6,H=e.be,O=e.aa},function(e){q=e.P,j=e.S,U=e.d,G=e.O,z=e.b,W=e.L},function(e){X=e.a5,Y=e.Z,J=e.a9,Z=e.d,K=e.f,Q=e.aq,$=e.b,ee=e.as,te=e.ag,ie=e.m,ne=e.ae,se=e.g,re=e.h,ae=e.a3},function(){}],execute:function(){var oe=function(){function e(){var e=this;this._rafHandle=0,this._onTick=null,this._updateCallback=void 0,this._targetFrameRate=60,this._isPlaying=!1,this._updateCallback=function(){e._isPlaying&&(e._rafHandle=requestAnimationFrame(e._updateCallback)),e._onTick&&e._onTick()}}var t=e.prototype;return t.start=function(){this._isPlaying||(this._rafHandle=requestAnimationFrame(this._updateCallback),this._isPlaying=!0)},t.stop=function(){this._isPlaying&&(cancelAnimationFrame(this._rafHandle),this._rafHandle=0,this._isPlaying=!1)},i(e,[{key:"targetFrameRate",get:function(){return this._targetFrameRate},set:function(e){this._targetFrameRate!==e&&(this._targetFrameRate=e,n.setPreferredFramesPerSecond(this._targetFrameRate),this._isPlaying&&(this.stop(),this.start()))}},{key:"onTick",get:function(){return this._onTick},set:function(e){this._onTick=e}}]),e}(),he=new s,ue=function(){var e=t.prototype;function t(){this.settings=void 0,this._curTime=0,this.device=void 0,this.swapchain=void 0,this.shader=void 0,this.sampler=void 0,this.cmdBuff=void 0,this.quadAssmebler=void 0,this.vertexBuffers=void 0,this.indicesBuffers=void 0,this.renderArea=void 0,this.clearColors=void 0,this.projection=void 0,this.isMobile=!1,this.bgMat=void 0,this.bgImage=void 0,this.bgTexture=void 0,this.logoMat=void 0,this.logoImage=void 0,this.logoTexture=void 0,this.watermarkMat=void 0,this.watermarkTexture=void 0,this.bgWidth=1920,this.bgHeight=1080,this.bgRatio=16/9,this.logoWidthTemp=140,this.logoHeightTemp=200,this.logoWidth=0,this.logoHeight=0,this.logoXTrans=.5,this.logoYTrans=1/6+2.5/6,this.textSize=24,this.textHeight=24,this.textXTrans=.5,this.textYExtraTrans=32,this.textExpandSize=4,this.scaleSize=1}return e.init=function(){var e,t,i,n,s,u,l=this;if(this.settings={displayRatio:null!==(e=r.querySettings(a.Category.SPLASH_SCREEN,"displayRatio"))&&void 0!==e?e:.4,totalTime:null!==(t=r.querySettings(a.Category.SPLASH_SCREEN,"totalTime"))&&void 0!==t?t:3e3,watermarkLocation:null!==(i=r.querySettings(a.Category.SPLASH_SCREEN,"watermarkLocation"))&&void 0!==i?i:"default",autoFit:null===(n=r.querySettings(a.Category.SPLASH_SCREEN,"autoFit"))||void 0===n||n,logo:null!==(s=r.querySettings(a.Category.SPLASH_SCREEN,"logo"))&&void 0!==s?s:void 0,background:null!==(u=r.querySettings(a.Category.SPLASH_SCREEN,"background"))&&void 0!==u?u:void 0},this._curTime=0,!(this.settings.totalTime<=0||void 0===this.settings.logo||void 0===this.settings.background)){this.device=o.director.root.device,this.swapchain=o.director.root.mainWindow.swapchain,this.preInit(),this.initLayout(),"default"===this.settings.logo.type&&this.initWaterMark();var c=Promise.resolve(),d=Promise.resolve();return"custom"===this.settings.background.type&&(c=new Promise((function(e,t){l.bgImage=new h.Image,l.bgImage.onload=function(){l.initBG(),e()},l.bgImage.onerror=function(){t()},l.bgImage.src=l.settings.background.base64}))),"none"!==this.settings.logo.type&&(d=new Promise((function(e,t){l.logoImage=new h.Image,l.logoImage.onload=function(){l.initLogo(),e()},l.logoImage.onerror=function(){t()},l.logoImage.src=l.settings.logo.base64}))),Promise.all([c,d])}return this.settings.totalTime=0,Promise.resolve([])},e.preInit=function(){var e,t=null===(e=this.settings.background)||void 0===e?void 0:e.color;this.clearColors=t?[new X(t.x,t.y,t.z,t.w)]:[new X(0,0,0,1)];var i=this.device,n=this.swapchain;this.renderArea=new Y(0,0,n.width,n.height),this.cmdBuff=i.commandBuffer;var s=new Float32Array([.5,.5,1,0,-.5,.5,0,0,.5,-.5,1,1,-.5,-.5,0,1]),r=4*Float32Array.BYTES_PER_ELEMENT,a=4*r;this.vertexBuffers=i.createBuffer(new J(Z.VERTEX|Z.TRANSFER_DST,K.DEVICE,a,r)),this.vertexBuffers.update(s);var o=new Uint16Array([0,1,2,1,3,2]),h=Uint16Array.BYTES_PER_ELEMENT,c=6*h;this.indicesBuffers=i.createBuffer(new J(Z.INDEX|Z.TRANSFER_DST,K.DEVICE,c,h)),this.indicesBuffers.update(o);var d=[new Q("a_position",$.RG32F),new Q("a_texCoord",$.RG32F)],g=new ee(d,[this.vertexBuffers],this.indicesBuffers);this.quadAssmebler=i.createInputAssembler(g),this.projection=new u,u.ortho(this.projection,-1,1,-1,1,-1,1,i.capabilities.clipSpaceMinZ,i.capabilities.clipSpaceSignY,n.surfaceTransform),this.isMobile=l.isMobile},e.initLayout=function(){this.isMobile?(this.bgWidth=812,this.bgHeight=375,this.logoWidthTemp=70,this.logoHeightTemp=100,this.textSize=12,this.textHeight=this.textSize+this.textExpandSize,this.textXTrans=.5,this.textYExtraTrans=16):(this.bgWidth=1920,this.bgHeight=1080,this.logoWidthTemp=140,this.logoHeightTemp=200,this.textSize=24,this.textHeight=this.textSize+this.textExpandSize,this.textXTrans=.5,this.textYExtraTrans=32),this.logoXTrans=.5,this.logoYTrans=1/6+2.5/6,this.initScale()},e.initScale=function(){var e=this.swapchain.width,t=this.swapchain.height,i=this.isMobile?375:1080,n=this.isMobile?812:1920;if(e>t){var s=n;n=i,i=s}this.scaleSize=e/t>16/9?t/n:e/i},e.update=function(e){var t=this.settings,i=this.device,n=this.swapchain;u.ortho(this.projection,-1,1,-1,1,-1,1,i.capabilities.clipSpaceMinZ,i.capabilities.clipSpaceSignY,n.surfaceTransform);var s=n.width,r=n.height;this.initScale(),this._curTime+=1e3*e;var a=c(this._curTime/t.totalTime),o=g(a),h=1,l=1;"custom"===this.settings.background.type&&(s<r?(h=r*this.bgRatio,l=r):(h=s,l=s*this.bgRatio),this.bgMat.setProperty("resolution",he.set(s,r),0),this.bgMat.setProperty("scale",he.set(h,l),0),this.bgMat.setProperty("translate",he.set(.5*s,.5*r),0),this.bgMat.setProperty("percent",1),this.bgMat.setProperty("u_projection",this.projection),this.bgMat.passes[0].update());var d=r*this.logoYTrans;if("none"!==this.settings.logo.type&&(h=this.logoWidth*this.scaleSize*t.displayRatio,l=this.logoHeight*this.scaleSize*t.displayRatio,this.logoMat.setProperty("resolution",he.set(s,r),0),this.logoMat.setProperty("scale",he.set(h,l),0),this.logoMat.setProperty("translate",he.set(s*this.logoXTrans,d),0),this.logoMat.setProperty("percent",o),this.logoMat.setProperty("u_projection",this.projection),this.logoMat.passes[0].update()),"default"===this.settings.logo.type&&this.watermarkMat){var m=this.watermarkTexture.width,p=this.watermarkTexture.height;h=m,l=p;var f=d-(.5*this.logoHeight*t.displayRatio+this.textYExtraTrans)*this.scaleSize-.5*p;this.watermarkMat.setProperty("resolution",he.set(s,r),0),this.watermarkMat.setProperty("scale",he.set(h,l),0),this.watermarkMat.setProperty("translate",he.set(s*this.textXTrans,f),0),this.watermarkMat.setProperty("percent",o),this.watermarkMat.setProperty("u_projection",this.projection),this.watermarkMat.passes[0].update()}this.frame()},e.initBG=function(){var e=this.device;this.bgMat=new D,this.bgMat.initialize({effectName:"util/splash-screen"});var t=new te;t.addressU=ie.CLAMP,t.addressV=ie.CLAMP,t.addressW=ie.CLAMP,this.sampler=e.getSampler(t),this.bgTexture=e.createTexture(new ne(se.TEX2D,re.SAMPLED|re.TRANSFER_DST,$.RGBA8,this.bgImage.width,this.bgImage.height));var i=this.bgMat.passes[0],n=i.getBinding("mainTexture");i.bindTexture(n,this.bgTexture),this.shader=i.getShaderVariant();var s=i.descriptorSet;s.bindSampler(n,this.sampler),s.update();var r=new ae;r.texExtent.width=this.bgImage.width,r.texExtent.height=this.bgImage.height,r.texExtent.depth=1,e.copyTexImagesToTexture([this.bgImage],this.bgTexture,[r])},e.initLogo=function(){var e=this.device;this.logoMat=new D,this.logoMat.initialize({effectName:"util/splash-screen"});var t=new te;t.addressU=ie.CLAMP,t.addressV=ie.CLAMP,t.addressW=ie.CLAMP,this.sampler=e.getSampler(t),this.logoTexture=e.createTexture(new ne(se.TEX2D,re.SAMPLED|re.TRANSFER_DST,$.RGBA8,this.logoImage.width,this.logoImage.height));var i=this.logoMat.passes[0],n=i.getBinding("mainTexture");i.bindTexture(n,this.logoTexture),this.shader=i.getShaderVariant();var s=i.descriptorSet;s.bindSampler(n,this.sampler),s.update();var r=new ae;r.texExtent.width=this.logoImage.width,r.texExtent.height=this.logoImage.height,r.texExtent.depth=1,e.copyTexImagesToTexture([this.logoImage],this.logoTexture,[r]);var a=this.logoImage.width/this.logoImage.height;a<1?(this.logoWidth=this.logoWidthTemp,this.logoHeight=this.logoWidthTemp/a):(this.logoWidth=this.logoHeightTemp*a,this.logoHeight=this.logoHeightTemp)},e.initWaterMark=function(){var e=h.document.createElement("canvas");e.height=this.textHeight*this.scaleSize,e.style.width=""+e.width,e.style.height=""+e.height;var t="Created with Cocos",i=e.getContext("2d");i.font=this.textSize*this.scaleSize+"px Arial",i.textBaseline="top",i.textAlign="center",i.fillStyle="#707070";var n=i.measureText(t).width+10;e.width=n,i.font=this.textSize*this.scaleSize+"px Arial",i.textBaseline="top",i.textAlign="center",i.fillStyle="#707070",i.fillText(t,e.width/2,0);var s=new ae;s.texExtent.width=e.width,s.texExtent.height=e.height,s.texExtent.depth=1,this.watermarkTexture=this.device.createTexture(new ne(se.TEX2D,re.SAMPLED|re.TRANSFER_DST,$.RGBA8,e.width,e.height)),this.device.copyTexImagesToTexture([e],this.watermarkTexture,[s]),this.watermarkMat=new D,this.watermarkMat.initialize({effectName:"util/splash-screen"});var r=this.watermarkMat.passes[0],a=r.getBinding("mainTexture");r.bindTexture(a,this.watermarkTexture),r.descriptorSet.update()},e.frame=function(){var e=this.device,t=this.swapchain;if(!l.isXR||xr.entry.isRenderAllowable())for(var i=l.isXR?2:1,n=0;n<i;n++){if(l.isXR){xr.entry.renderLoopStart(n);var s=xr.entry.getEyeFov(n),r=1,a=1;n===k.LEFT?r=Math.abs(Math.tan(s[0]))/Math.abs(Math.tan(s[1])):n===k.RIGHT&&(a=Math.abs(Math.tan(s[1]))/Math.abs(Math.tan(s[0]))),u.ortho(this.projection,-r,a,-1,1,-1,1,e.capabilities.clipSpaceMinZ,e.capabilities.clipSpaceSignY,t.surfaceTransform),this.projection.m00=d[t.surfaceTransform][0],this.projection.m05=d[t.surfaceTransform][3]*e.capabilities.clipSpaceSignY,"custom"===this.settings.background.type&&(this.bgMat.setProperty("u_projection",this.projection),this.bgMat.passes[0].update()),"none"!==this.settings.logo.type&&(this.logoMat.setProperty("u_projection",this.projection),this.logoMat.passes[0].update()),"default"===this.settings.logo.type&&this.watermarkMat&&(this.watermarkMat.setProperty("u_projection",this.projection),this.watermarkMat.passes[0].update())}e.enableAutoBarrier(!0),e.acquire([t]);var h=this.cmdBuff,c=o.director.root.mainWindow.framebuffer,g=this.renderArea;if(g.width=t.width,g.height=t.height,h.begin(),h.beginRenderPass(c.renderPass,c,g,this.clearColors,1,0),"custom"===this.settings.background.type){var m=this.bgMat.passes[0],p=q.getOrCreatePipelineState(e,m,this.shader,c.renderPass,this.quadAssmebler);h.bindPipelineState(p),h.bindDescriptorSet(j.MATERIAL,m.descriptorSet),h.bindInputAssembler(this.quadAssmebler),h.draw(this.quadAssmebler)}if("none"!==this.settings.logo.type){var f=this.logoMat.passes[0],_=q.getOrCreatePipelineState(e,f,this.shader,c.renderPass,this.quadAssmebler);h.bindPipelineState(_),h.bindDescriptorSet(j.MATERIAL,f.descriptorSet),h.bindInputAssembler(this.quadAssmebler),h.draw(this.quadAssmebler)}if("default"===this.settings.logo.type&&this.watermarkMat){var E=this.watermarkMat.passes[0],T=q.getOrCreatePipelineState(e,E,this.shader,c.renderPass,this.quadAssmebler);h.bindPipelineState(T),h.bindDescriptorSet(j.MATERIAL,E.descriptorSet),h.bindInputAssembler(this.quadAssmebler),h.draw(this.quadAssmebler)}h.endRenderPass(),h.end(),e.flushCommands([h]),e.queue.submit([h]),e.present(),e.enableAutoBarrier(!o.rendering),l.isXR&&xr.entry.renderLoopEnd(n)}},e.destroy=function(){this.device=null,this.swapchain=null,this.clearColors=null,"custom"===this.settings.background.type&&(this.bgImage.destroy&&this.bgImage.destroy(),this.bgImage=null,this.bgMat.destroy(),this.bgMat=null,this.bgTexture.destroy(),this.bgTexture=null),"none"!==this.settings.logo.type&&(this.logoImage.destroy&&this.logoImage.destroy(),this.logoImage=null,this.logoMat.destroy(),this.logoMat=null,this.logoTexture.destroy(),this.logoTexture=null),this.renderArea=null,this.cmdBuff=null,this.shader=null,this.quadAssmebler.destroy(),this.quadAssmebler=null,this.vertexBuffers.destroy(),this.vertexBuffers=null,this.indicesBuffers.destroy(),this.indicesBuffers=null,this.sampler=null,"default"===this.settings.logo.type&&this.watermarkTexture&&(this.watermarkMat.destroy(),this.watermarkMat=null,this.watermarkTexture.destroy(),this.watermarkTexture=null),this.settings=null},i(t,[{key:"isFinished",get:function(){return this._curTime>=this.settings.totalTime}},{key:"curTime",get:function(){return this._curTime},set:function(e){this._curTime=e}}],[{key:"instance",get:function(){return t._ins||(t._ins=new t),t._ins}}]),t}();ue._ins=void 0,o.internal.SplashScreen=ue;var le=new(function(){function e(){this._data=null}return e.prototype.init=function(e){var t=this;return void 0===e&&(e=""),o.rendering&&o.rendering.enableEffectImport&&e?new Promise((function(i,n){if(e.startsWith("http")){var s=new XMLHttpRequest;s.open("GET",e),s.responseType="arraybuffer",s.onload=function(){t._data=s.response,i()},s.onerror=function(){n(new Error("request effect settings failed!"))},s.send(null)}else fsUtils.readArrayBuffer(e,(function(e,s){e?n(e):(t._data=s,i())}))})):Promise.resolve()},i(e,[{key:"data",get:function(){return this._data}}]),e}());o.effectSettings=le;var ce=e("G",function(e){function n(){for(var t,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).frame=null,t.container=null,t.canvas=null,t.renderType=-1,t.eventTargetOn=e.prototype.on,t.eventTargetOnce=e.prototype.once,t.config={},t.onStart=null,t.frameTime=1e3/60,t._isCloning=!1,t._inited=!1,t._engineInited=!1,t._rendererInitialized=!1,t._paused=!0,t._pausedByEngine=!1,t._frameRate=60,t._pacer=null,t._initTime=0,t._startTime=0,t._deltaTime=0,t._useFixedDeltaTime=!1,t._shouldLoadLaunchScene=!0,t.onPreBaseInitDelegate=new w,t.onPostBaseInitDelegate=new w,t.onPreInfrastructureInitDelegate=new w,t.onPostInfrastructureInitDelegate=new w,t.onPreSubsystemInitDelegate=new w,t.onPostSubsystemInitDelegate=new w,t.onPreProjectInitDelegate=new w,t.onPostProjectInitDelegate=new w,t}m(n,e);var s=n.prototype;return s.setFrameRate=function(e){this.frameRate=e},s.getFrameRate=function(){return this.frameRate},s.step=function(){B.tick(this._calculateDT(!0))},s.pauseByEngine=function(){this._paused||(this._pausedByEngine=!0,this.pause())},s.resumeByEngine=function(){this._pausedByEngine&&(this.resume(),this._pausedByEngine=!1)},s.pause=function(){var e;this._paused||(this._paused=!0,null===(e=this._pacer)||void 0===e||e.stop(),this.emit(n.EVENT_PAUSE))},s.resume=function(){var e;this._paused&&(L._clearEvents(),this._paused=!1,null===(e=this._pacer)||void 0===e||e.start(),this.emit(n.EVENT_RESUME))},s.isPaused=function(){return this._paused},s.restart=function(){var e=this;return new Promise((function(e){B.once(V.EVENT_END_FRAME,(function(){return e()}))})).then((function(){B.reset(),o.Object._deferredDestroy(),e.pause(),e.resume(),e._shouldLoadLaunchScene=!0,ue.instance.curTime=0,e._safeEmit(n.EVENT_RESTART)}))},s.end=function(){p.close()},s.on=function(e,t,i,n){return this.canRegisterEvent(e)&&t.call(i),this.eventTargetOn(e,t,i,n)},s.once=function(e,t,i){return this.canRegisterEvent(e)?t.call(i):this.eventTargetOnce(e,t,i)},s.canRegisterEvent=function(e){return this._engineInited&&e===n.EVENT_ENGINE_INITED||this._inited&&e===n.EVENT_GAME_INITED||this._rendererInitialized&&e===n.EVENT_RENDERER_INITED},s.init=function(e){var i=this;return this._compatibleWithOldParams(e),Promise.resolve().then((function(){return i.emit(n.EVENT_PRE_BASE_INIT),i.onPreBaseInitDelegate.dispatch()})).then((function(){var t=e.debugMode||f.NONE;_(t)})).then((function(){return l.init()})).then((function(){i._initEvents()})).then((function(){return r.init(e.settingsPath,e.overrideSettings)})).then((function(){return i.emit(n.EVENT_POST_BASE_INIT),i.onPostBaseInitDelegate.dispatch()})).then((function(){return i.emit(n.EVENT_PRE_INFRASTRUCTURE_INIT),i.onPreInfrastructureInitDelegate.dispatch()})).then((function(){E.init(),i._initXR();var e,t={frame:e=document.createElement("div"),canvas:window.canvas,container:e};t&&(i.canvas=t.canvas,i.frame=t.frame,i.container=t.container),T.init(),S.init(),U.init(i.canvas,G),"ca127c79-69d6-4afd-8183-d712d7b80e14"===r.querySettings(a.Category.RENDERING,"renderPipeline")&&(E.CUSTOM_PIPELINE_NAME||(E.CUSTOM_PIPELINE_NAME="Forward")),""===E.CUSTOM_PIPELINE_NAME&&(o.rendering=void 0),F.init(),H.init(),z.init(),i.initPacer()})).then((function(){return i.emit(n.EVENT_POST_INFRASTRUCTURE_INIT),i.onPostInfrastructureInitDelegate.dispatch()})).then((function(){return i.emit(n.EVENT_PRE_SUBSYSTEM_INIT),i.onPreSubsystemInitDelegate.dispatch()})).then((function(){return le.init(r.querySettings(a.Category.RENDERING,"effectSettingsPath"))})).then((function(){if(o.rendering&&o.rendering.enableEffectImport)if(r.querySettings(a.Category.RENDERING,"renderMode")!==W.HEADLESS){var e=le.data;null!==e?o.rendering.init(U.gfxDevice,e):v(1102)}else o.rendering.init(U.gfxDevice,null)})).then((function(){var e=r.querySettings(a.Category.SCRIPTING,"scriptPackages");return e?Promise.all(e.map((function(e){return t.import(e)}))):Promise.resolve([])})).then((function(){return B.init(),H.loadBuiltinAssets()})).then((function(){return i.emit(n.EVENT_POST_SUBSYSTEM_INIT),i.onPostSubsystemInitDelegate.dispatch()})).then((function(){y("Cocos Creator v"+N),i.emit(n.EVENT_ENGINE_INITED),i._engineInited=!0})).then((function(){return i.emit(n.EVENT_PRE_PROJECT_INIT),i.onPreProjectInitDelegate.dispatch()})).then((function(){var e=r.querySettings(a.Category.PLUGINS,"jsList"),t=Promise.resolve();return e&&e.forEach((function(e){t=t.then((function(){return __wxRequire("src/"+e)}))})),t})).then((function(){return i._loadProjectBundles()})).then((function(){return i._loadCCEScripts()})).then((function(){return i._setupRenderPipeline()})).then((function(){return i._loadPreloadAssets()})).then((function(){return H.compileBuiltinMaterial(),ue.instance.init()})).then((function(){return i.emit(n.EVENT_POST_PROJECT_INIT),i.onPostProjectInitDelegate.dispatch()})).then((function(){i._inited=!0,i._safeEmit(n.EVENT_GAME_INITED)}))},s._initXR=function(){var e;if(void 0===globalThis.__globalXR&&(globalThis.__globalXR={}),globalThis.__globalXR.webxrCompatible=null!==(e=r.querySettings(a.Category.XR,"webxrCompatible"))&&void 0!==e&&e,l.isXR){var t,i;xr.entry=xr.XrEntry.getInstance();var n=null!==(t=r.querySettings(a.Category.RENDERING,"msaa"))&&void 0!==t?t:1,s=null!==(i=r.querySettings(a.Category.RENDERING,"renderingScale"))&&void 0!==i?i:1;xr.entry.setMultisamplesRTT(n),xr.entry.setRenderingScale(s)}},s._compatibleWithOldParams=function(e){var t=e.overrideSettings=e.overrideSettings||{};"showFPS"in e&&(t.profiling=t.profiling||{},t.profiling.showFPS=e.showFPS),"frameRate"in e&&(t.screen=t.screen||{},t.screen.frameRate=e.frameRate),"renderMode"in e&&(t.rendering=t.rendering||{},t.rendering.renderMode=e.renderMode),"renderPipeline"in e&&(t.rendering=t.rendering||{},t.rendering.renderPipeline=e.renderPipeline),"assetOptions"in e&&(t.assets=t.assets||{},Object.assign(t.assets,e.assetOptions)),"customJointTextureLayouts"in e&&(t.animation=t.animation||{},t.animation.customJointTextureLayouts=e.customJointTextureLayouts),"physics"in e&&(t.physics=t.physics||{},Object.assign(t.physics,e.physics)),"orientation"in e&&(t.screen=t.screen||{},t.screen.orientation=e.orientation),"exactFitScreen"in e&&(t.screen=t.screen||{},t.screen.exactFitScreen=e.exactFitScreen)},s._loadPreloadAssets=function(){var e=r.querySettings(a.Category.ASSETS,"preloadAssets");return e?Promise.all(e.map((function(e){return new Promise((function(t,i){F.loadAny(e,(function(e){e?i(e):t()}))}))}))):Promise.resolve([])},s._loadCCEScripts=function(){return new Promise((function(e){e()}))},s._loadProjectBundles=function(){var e=r.querySettings(a.Category.ASSETS,"preloadBundles");return e?Promise.all(e.map((function(e){var t=e.bundle,i=e.version;return new Promise((function(e,n){var s={};i&&(s.version=i),F.loadBundle(t,s,(function(t){t?n(t):e()}))}))}))):Promise.resolve([])},s.run=function(e){e&&(this.onStart=e),this._inited&&!P&&this.resume()},s._calculateDT=function(e){if(this._useFixedDeltaTime=e,e)return this._startTime=performance.now(),this.frameTime/1e3;var t=performance.now();return this._deltaTime=t>this._startTime?(t-this._startTime)/1e3:0,this._deltaTime>n.DEBUG_DT_THRESHOLD&&(this._deltaTime=this.frameTime/1e3),this._startTime=t,this._deltaTime},s._updateCallback=function(){var e=this;if(this._inited)if(ue.instance.isFinished)if(this._shouldLoadLaunchScene){this._shouldLoadLaunchScene=!1;var t,i=r.querySettings(a.Category.LAUNCH,"launchScene");i?B.loadScene(i,(function(){var t;b(1103,i),e._initTime=performance.now(),B.startAnimation(),null===(t=e.onStart)||void 0===t||t.call(e)})):(this._initTime=performance.now(),B.startAnimation(),null===(t=this.onStart)||void 0===t||t.call(this))}else B.tick(this._calculateDT(!1));else ue.instance.update(this._calculateDT(!1))},s.initPacer=function(){var e,t=null!==(e=r.querySettings(a.Category.SCREEN,"frameRate"))&&void 0!==e?e:60;I("number"==typeof t),this._pacer=new oe,this._pacer.onTick=this._updateCallback.bind(this),this.frameRate=t},s._initEvents=function(){p.on("show",this._onShow,this),p.on("hide",this._onHide,this),p.on("close",this._onClose,this)},s._onHide=function(){this.emit(n.EVENT_HIDE),this.pauseByEngine()},s._onShow=function(){this.emit(n.EVENT_SHOW),this.resumeByEngine()},s._onClose=function(){this.emit(n.EVENT_CLOSE),p.exit()},s.addPersistRootNode=function(e){B.addPersistRootNode(e)},s.removePersistRootNode=function(e){B.removePersistRootNode(e)},s.isPersistRootNode=function(e){return B.isPersistRootNode(e)},s._setupRenderPipeline=function(){var e=this,t=r.querySettings(a.Category.RENDERING,"renderPipeline");return t&&"ca127c79-69d6-4afd-8183-d712d7b80e14"!==t?new Promise((function(e,i){F.loadAny(t,(function(t,n){return!t&&n instanceof O?e(n):i(t)}))})).then((function(t){e._setRenderPipeline(t)})).catch((function(i){R(i),R("Failed load render pipeline: "+t+", engine failed to initialize, will fallback to default pipeline"),e._setRenderPipeline()})):this._setRenderPipeline()},s._setRenderPipeline=function(e){B.root.setRenderPipeline(e)||this._setRenderPipeline(),this._rendererInitialized=!0,this._safeEmit(n.EVENT_RENDERER_INITED)},s._safeEmit=function(e){this.emit(e)},i(n,[{key:"inited",get:function(){return this._inited}},{key:"frameRate",get:function(){return this._frameRate},set:function(e){"number"!=typeof e&&(e=parseInt(e,10),Number.isNaN(e)&&(e=60)),this._frameRate=e,this.frameTime=1e3/e,this._pacer&&(this._pacer.targetFrameRate=this._frameRate)}},{key:"deltaTime",get:function(){return this._useFixedDeltaTime?this.frameTime/1e3:this._deltaTime}},{key:"totalTime",get:function(){return performance.now()-this._initTime}},{key:"frameStartTime",get:function(){return this._startTime}}]),n}(x));ce.EVENT_HIDE="game_on_hide",ce.EVENT_SHOW="game_on_show",ce.EVENT_LOW_MEMORY="game_on_low_memory",ce.EVENT_GAME_INITED="game_inited",ce.EVENT_ENGINE_INITED="engine_inited",ce.EVENT_RENDERER_INITED="renderer_inited",ce.EVENT_PRE_BASE_INIT="pre_base_init",ce.EVENT_POST_BASE_INIT="post_base_init",ce.EVENT_PRE_INFRASTRUCTURE_INIT="pre_infrastructure_init",ce.EVENT_POST_INFRASTRUCTURE_INIT="post_infrastructure_init",ce.EVENT_PRE_SUBSYSTEM_INIT="pre_subsystem_init",ce.EVENT_POST_SUBSYSTEM_INIT="post_subsystem_init",ce.EVENT_PRE_PROJECT_INIT="pre_project_init",ce.EVENT_POST_PROJECT_INIT="post_project_init",ce.EVENT_RESTART="game_on_restart",ce.EVENT_PAUSE="game_on_pause",ce.EVENT_RESUME="game_on_resume",ce.EVENT_CLOSE="game_on_close",ce.RENDER_TYPE_CANVAS=0,ce.RENDER_TYPE_WEBGL=1,ce.RENDER_TYPE_OPENGL=2,ce.RENDER_TYPE_HEADLESS=3,ce.DEBUG_DT_THRESHOLD=1,o.Game=ce;var de=e("g",o.game=new ce);M(V.prototype,"director",[{name:"calculateDeltaTime"},{name:"getDeltaTime",suggest:"Use game.deltaTime instead"},{name:"getTotalTime",suggest:"Use game.totalTime instead"},{name:"getCurrentTime",suggest:"Use game.frameStartTime instead"}]),A(V.prototype,"director",[{name:"setAnimationInterval",suggest:"please use game.frameRate instead"},{name:"getAnimationInterval",suggest:"please use game.frameRate instead"},{name:"getRunningScene",suggest:"please use getScene instead"},{name:"setDepthTest",suggest:"please use camera API instead"},{name:"setClearColor",suggest:"please use camera API instead"},{name:"getWinSize",suggest:"please use view.getVisibleSize instead"},{name:"getWinSizeInPixels"},{name:"purgeCachedData",suggest:"please use assetManager.releaseAll instead"},{name:"convertToGL"},{name:"convertToUI"}]),C(B,"director",[{name:"_getSceneUuid",targetName:"assetManager.main",newName:"getSceneInfo",customFunction:function(e){var t;return F.main?null===(t=F.main.getSceneInfo(e))||void 0===t?void 0:t.uuid:""}}]),M(de,"game",[{name:"collisionMatrix"},{name:"groupList"}]),C(de,"game",[{name:"_sceneInfos",targetName:"assetManager.main",newName:"getSceneInfo",customGetter:function(){var e=[];return F.main&&F.main.config.scenes.forEach((function(t){e.push(t)})),e}}])}}}));
