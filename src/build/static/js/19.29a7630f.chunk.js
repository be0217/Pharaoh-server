(this["webpackJsonppharao-frontend"]=this["webpackJsonppharao-frontend"]||[]).push([[19],{690:function(e,t,n){"use strict";n.r(t);var i=n(22),r=n(0),o=n(354),a=n(87),l=n(86),s=n(88),u=function(e,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var h=function(e){function t(t,n,i){void 0===t&&(t=4),void 0===n&&(n=3),void 0===i&&(i=!1);var r=e.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",i?"\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n":"\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}")||this;return r._kernels=[],r._blur=4,r._quality=3,r.uniforms.uOffset=new Float32Array(2),r._pixelSize=new s.g,r.pixelSize=1,r._clamp=i,Array.isArray(t)?r.kernels=t:(r._blur=t,r.quality=n),r}return function(e,t){function n(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.apply=function(e,t,n,i){var r,o=this._pixelSize.x/t._frame.width,a=this._pixelSize.y/t._frame.height;if(1===this._quality||0===this._blur)r=this._kernels[0]+.5,this.uniforms.uOffset[0]=r*o,this.uniforms.uOffset[1]=r*a,e.applyFilter(this,t,n,i);else{for(var l=e.getFilterTexture(),s=t,u=l,h=void 0,c=this._quality-1,d=0;d<c;d++)r=this._kernels[d]+.5,this.uniforms.uOffset[0]=r*o,this.uniforms.uOffset[1]=r*a,e.applyFilter(this,s,u,1),h=s,s=u,u=h;r=this._kernels[c]+.5,this.uniforms.uOffset[0]=r*o,this.uniforms.uOffset[1]=r*a,e.applyFilter(this,s,n,i),e.returnFilterTexture(l)}},t.prototype._updatePadding=function(){this.padding=Math.ceil(this._kernels.reduce((function(e,t){return e+t+.5}),0))},t.prototype._generateKernels=function(){var e=this._blur,t=this._quality,n=[e];if(e>0)for(var i=e,r=e/t,o=1;o<t;o++)i-=r,n.push(i);this._kernels=n,this._updatePadding()},Object.defineProperty(t.prototype,"kernels",{get:function(){return this._kernels},set:function(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max.apply(Math,e)):(this._kernels=[0],this._quality=1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"clamp",{get:function(){return this._clamp},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"pixelSize",{get:function(){return this._pixelSize},set:function(e){"number"===typeof e?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof s.g?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"quality",{get:function(){return this._quality},set:function(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blur",{get:function(){return this._blur},set:function(e){this._blur=e,this._generateKernels()},enumerable:!1,configurable:!0}),t}(l.h),c=n(90),d=n(89),p=function(e,t){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var f=function(e){function t(n){var i=e.call(this)||this;i.angle=45,i._distance=5,i._resolution=c.b.FILTER_RESOLUTION;var r=Object.assign(t.defaults,n),o=r.kernels,a=r.blur,u=r.quality,d=r.pixelSize,p=r.resolution;i._tintFilter=new l.h("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\n\nuniform vec2 shift;\nuniform vec4 inputSize;\n\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);\n\n    // Premultiply alpha\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}"),i._tintFilter.uniforms.color=new Float32Array(4),i._tintFilter.uniforms.shift=new s.g,i._tintFilter.resolution=p,i._blurFilter=o?new h(o):new h(a,u),i.pixelSize=d,i.resolution=p;var f=r.shadowOnly,x=r.rotation,g=r.distance,m=r.alpha,v=r.color;return i.shadowOnly=f,i.rotation=x,i.distance=g,i.alpha=m,i.color=v,i._updatePadding(),i}return function(e,t){function n(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.apply=function(e,t,n,i){var r=e.getFilterTexture();this._tintFilter.apply(e,t,r,1),this._blurFilter.apply(e,r,n,i),!0!==this.shadowOnly&&e.applyFilter(this,t,n,0),e.returnFilterTexture(r)},t.prototype._updatePadding=function(){this.padding=this.distance+2*this.blur},t.prototype._updateShift=function(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))},Object.defineProperty(t.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._resolution=e,this._tintFilter&&(this._tintFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"distance",{get:function(){return this._distance},set:function(e){this._distance=e,this._updatePadding(),this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rotation",{get:function(){return this.angle/s.b},set:function(e){this.angle=e*s.b,this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"alpha",{get:function(){return this._tintFilter.uniforms.alpha},set:function(e){this._tintFilter.uniforms.alpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){return Object(d.rgb2hex)(this._tintFilter.uniforms.color)},set:function(e){Object(d.hex2rgb)(e,this._tintFilter.uniforms.color)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(e){this._blurFilter.kernels=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(e){this._blurFilter.blur=e,this._updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(e){this._blurFilter.quality=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(e){this._blurFilter.pixelSize=e},enumerable:!1,configurable:!0}),t.defaults={rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:c.b.FILTER_RESOLUTION},t}(l.h),x=n(13),g=n(4),m={current:{level:"1",missions:[]},friends:[],wheel:null,config:{wheel:{sequence:{repeat_level:2,parity:"odd"}}}};t.default=function(){var e=Object(r.useState)({counter:"",missions:[],isWheelActive:!1,expired:!1,canvas:null,destroyApp:!1,unsubscribeEvents:[],testGoRight:!1,testShowOvertake:!1,overviewData:m,intervalId:null,currentFriendsData:null}),t=Object(i.a)(e,2),n=t[0];t[1];return Object(r.useEffect)((function(){var e=document.getElementById("pixi-container");if(e)if(e.getElementsByTagName("canvas")[0])console.log("map already created. close");else{o.f.DEFAULT=o.f.NEAREST;var t,i,r,l,s,u,h,c=[{id:43618,user_id:16516,mission_id:9,game_id:67,modifier_id:1,value:0,target:32e5,status:"ACTIVE",timeout_at:"2021-04-30T10:36:13.000000Z",created_at:"2021-04-27T10:36:14.000000Z",progress:{value:0,target:32e5,percentage:50},difficulty:"NORMAL",game_details:{id:67,title:"Coins of Egypt",thumbnail:"http://h2931731.stratoserver.net/game-6.jpg"},mission:{id:9,level:3,type:"WIN_TOTAL",value:4e6,game_id:null,created_at:"2021-01-05T11:57:47.000000Z"}}],d=[],p=[],g=[],m=[],v=300,y=650,w=!1,b=[],_="".concat(x.a.Domain,"/path/kleinekrone-kp-scrolls-sides.png"),C="".concat(x.a.Domain,"/path/left.png"),k="".concat(x.a.Domain,"/path/kleinekrone-kp-main-bg-web.png"),O="".concat(x.a.Domain,"/path/element-24-6-x@3x.png"),T="".concat(x.a.Domain,"/path/element-25-6-x@3x.png"),S="".concat(x.a.Domain,"/path/element-26-6-x@3x.png"),z="".concat(x.a.Domain,"/path/element-27-6-x@3x.png"),I="".concat(x.a.Domain,"/path/element-28-6-x@3x.png"),D="".concat(x.a.Domain,"/path/element-29-6-x@3x.png"),F="".concat(x.a.Domain,"/path/element-30-6-x@3x.png"),E="".concat(x.a.Domain,"/path/element-31-6-x@3x.png"),M="".concat(x.a.Domain,"/path/element-32-6-x@3x.png"),P="".concat(x.a.Domain,"/path/element-33-6-x@3x.png"),A="".concat(x.a.Domain,"/path/element-34-6-x@3x.png"),j="".concat(x.a.Domain,"/path/element-35-6-x@3x.png"),R="".concat(x.a.Domain,"/path/element-36-6-x@3x.png"),W="".concat(x.a.Domain,"/path/element-37-6-x@3x.png"),q="".concat(x.a.Domain,"/path/element-38-6-x@3x.png"),L="".concat(x.a.Domain,"/path/element-39-6-x@3x.png"),B="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-slotstation-progress-outer.png"),N="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-lvl-complete@2x.png"),U="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-lvl-locked@2x.png"),X="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-wheel-locked@2x.png"),H="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-wheel-unlocked@2x.png"),G="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-ownstate-and-cards-main-back@2x.png"),V="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-slotstation-mainframe@2x.png"),K="".concat(x.a.Domain,"/path/btn-own-position-out.png"),J="".concat(x.a.Domain,"/path/btn-own-position-hover.png"),Y="".concat(x.a.Domain,"/path/kleinekrone-kp-hl-background.png"),Z="".concat(x.a.Domain,"/path/kleinekrone-kp-hl-en.png"),Q="".concat(x.a.Domain,"/path/kleinekrone-kp-small-parchement.png"),$="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-ownstate-friends.png"),ee="".concat(x.a.Domain,"/path/kleinekrone-kingspath-ic-ownstate-counterfriends.png"),te=[_,C,k,O,T,R,W,q,B,E,A,F,S,z,j,I,D,L,P,M,N,U,X,H,G,V,K,J,Y,Z,Q,$,ee],ne=[300,150,320,100,320,430,450,250,150,220,70,380,260,250,170,320,400,380,150,350],ie=[A,E,R,D,R,F,L,E,W,S,P,W,E,q,z,R,I,T,q,z,T,M,j,W,L,E,R],re=new o.b;re.x=0,re.y=0,re.vx=0,re.vy=0;var oe=new o.b;oe.x=0,oe.y=0,oe.vx=0,oe.vy=0;var ae=1279,le=o.d.shared;le.reset(),o.i.clearTextureCache();var se=o.a,ue=le.resources,he=o.g,ce=new se({width:ae,height:710,antialias:!0,transparent:!0,autoResize:!0});ce.view.id="pixi-kingspath-canvas",document.getElementById("pixi-container").appendChild(ce.view);for(var de={loadType:o.e.LOAD_TYPE.IMAGE,xhrType:o.e.XHR_RESPONSE_TYPE.BLOB},pe=0;pe<te.length;pe++)le.add(te[pe],te[pe],de);le.load((function(){fe()}));var fe=function(){ve(),De(),Fe(),window.addEventListener("resize",Fe),n.unsubscribeEvents.push((function(){window.removeEventListener("resize",Fe)})),ce.ticker.fps=60,ce.ticker.add((function(e){return xe(e)}))},xe=function(){!0===n.destroyApp&&function(){for(n.destroyApp=!1;ce.stage.children[0];)ce.stage.children[0].destroy(!0);for(;re.children[0];)re.children[0].destroy(!0);ce.loader.reset(),ce.loader.destroy(!0),le.reset(),le.destroy(!0);for(var e=["bitmaprenderer","2d","webgl","webg2"],t=0;t<e.length;t++){var i=ce.view.getContext(e[t]);if(i){var r=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,r);for(var a=i.getParameter(i.MAX_VERTEX_ATTRIBS),l=0;l<a;++l)i.vertexAttribPointer(l,1,i.FLOAT,!1,0,0);for(var s=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=0;u<s;++u)i.activeTexture(i.TEXTURE0+u),i.bindTexture(i.TEXTURE_2D,null),i.bindTexture(i.TEXTURE_CUBE_MAP,null);i.canvas.width=1,i.canvas.height=1;var h=i.getExtension("WEBGL_lose_context");h&&h.loseContext()}}ce.destroy(!0),o.i.clearTextureCache(),o.i.destroyTextureCache();for(var c=0;c<unsubscribeEvents.length;c++)unsubscribeEvents[c]()}(),w&&null!=re&&(re.x+re.vx>-100||Math.abs(re.x+re.vx+-1279/3)>re.width||(oe.x+=re.vx,oe.vx+=re.vx,(oe.vx<=-2312||oe.vx>=0)&&(oe.x=-1156-oe.vx%1156,oe.vx=-1156),re.x+=re.vx)),n.testGoRight&&(re.x=-re.width+ae/3,n.testGoRight=!1),n.testShowOvertake&&(n.testShowOvertake=!1,ge())},ge=function(){n.mapApiJsonKingspathComplete(n.completedRewards)},me=function(e){(l=new a.d).fromTo(e.scale,.2,{x:1.2,y:1.2},{x:1.4,y:1.4,onComplete:function(){l.reversed(!l.reversed())},onReverseComplete:function(){l.restart()}},1);for(var t=0;t<b.length;t++)l.fromTo(b[t],.2,{alpha:0},{alpha:.5},1)},ve=function(){!0,ye()},ye=function(){!function(){var e;(e=new he(ue[O].texture)).name="land_begin",e.height=680,e.width=430,e.height*=1.2,e.width*=1.2,e.x=350,e.y=100,e.zIndex=20,e.keep=!0,re.addChild(e)}();var e,t=(e=100)+Math.round(e/10)-Math.round(.1);for(var n=Math.round(2+t),i=1,r=0;r<n&&!(i>100);r++)r<1?(be(r,i),i++):1!==r?r<t&&((i-1)%10===0?(ke(r,i),r++,we(r,i+1),i++):(ke(r,i),i++)):(Te(r),Se(),(i-1)%10===0&&(r++,we(r,i+1)),i++);Ie(),je()},we=function(e,t,n){var a=H;n||(a=X);var l=ne[e%ne.length],s=new he(ue[a].texture);s.x=y+v*e+50,s.y=l+70,s.zIndex=20,s.width=95,s.height=102,s.anchor.set(.5,.5);var c=new o.h("SPIN",{fontSize:15,fill:"#ffffff",align:"center",fontWeight:"bold"});return c.resolution=10,c.anchor.set(.5,.5),c.x=0,c.y=5,s.addChild(c),n&&(s.interactive=!0,s.buttonMode=!0,s.on("mousedown",(function(){return console.log('state.handleOpenModal("modal-kingswheel")')})),s.on("touchstart",(function(){return console.log('state.handleOpenModal("modal-kingswheel")')})),s.filters=b,me(s),s.x+10,s.y+10,u.text="kingspath.info.spin_kingswheel.title",u.y=110,u.style.wordWrapWidth=230,h.text="kingspath.info.spin_kingswheel.message",h.y=210,h.style.wordWrapWidth=230),d.push(s),_e(e,s),Ce(e,s.x,s.y),i=s.x,r=s.y,s},be=function(e,t){var n=ne[e%ne.length],a=new he(ue[N].texture);a.x=y+v*e,a.y=n,a.width=102,a.height=137,a.zIndex=20;var l=new o.h(t,{fill:"#fff",fontSize:20,align:"center"});return l.anchor.set(.5),l.x=50,l.y=88,a.addChild(l),_e(e,a),Ce(e,a.x+50,a.y+100),i=a.x,r=a.y+100,d.push(a),Oe(y+v*e,n+50,t),1===t&&(a.x-50,a.y+10),a},_e=function(e,t){function n(e){return e.y+e.height<600&&e.y+e.height>200}var i,r;i=y+v*e,r=t.y-150;var o=ie[e%ie.length],a=new he(ue[o].texture);a.width*=1.2,a.height*=1.2,a.x=i,a.y=r,a.zIndex=21,n(a)&&g.push(a),i=y+v*e,r=t.y+200,(a=new he(ue[o=ie[(e+1)%ie.length]].texture)).width*=1.2,a.height*=1.2,a.x=i,a.y=r,a.zIndex=21,n(a)&&g.push(a),i=y+v*e,r=t.y+250,(a=new he(ue[o=ie[(e+2)%ie.length]].texture)).width*=1.2,a.height*=1.2,a.x=i,a.y=r,a.zIndex=21,n(a)&&g.push(a),i=y+v*e,r=t.y-250,(a=new he(ue[o=ie[(e+3)%ie.length]].texture)).width*=1.2,a.height*=1.2,a.x=i,a.y=r,a.zIndex=21,n(a)&&g.push(a)},Ce=function(e,t,n){if(0!==e){var i=r-n,a=new o.c;a.x=t,a.y=n,a.zIndex=10,a.lineStyle(5,63724);for(var l=1;l<20;l++){var s=.05*l,u=.05*l+.02,h=Math.PI/20*l;n<r&&(h*=-1);var c=50*Math.sin(h);a.lineTo(-300*s,i*s+c).moveTo(-300*u,i*u+c)}p.push(a)}},ke=function(e,t){var n=ne[e%ne.length],a=new he(ue[U].texture);a.x=y+v*e,a.y=n,a.width=95,a.height=102,a.zIndex=20;var l=new o.h(t,{fontSize:20,fill:"#fff",align:"center"});return l.anchor.set(.5),l.x=48,l.y=53,a.addChild(l),d.push(a),Oe(y+v*e,n,t),_e(e,a),Ce(e,a.x+50,a.y+50),i=a.x,r=a.y+20,a.x,a},Oe=function(e,t,i){var r=new he(ue[$].texture);r.height=58,r.width=58,r.x=e+120,r.y=t-20,r.anchor.set(.5,.5),r.zIndex=50,r.interactive=!0,r.buttonMode=!0,r.on("mousedown",(function(){n.currentFriendsData=friendArr,n.handleOpenModal("modal-kingspath-friends")})),r.on("touchstart",(function(){n.currentFriendsData=friendArr,n.handleOpenModal("modal-kingspath-friends")}));var a=new he(ue[ee].texture);a.height=29,a.width=29,a.x=-25,a.y=-20,a.anchor.set(.5,.5),a.zIndex=50,r.addChild(a);var l=new o.h("friendArr.length.toString()",{fontSize:14,align:"center"});l.anchor.set(.5),l.zIndex=16,l.x=-1,l.y=0,a.addChild(l)},Te=function(e){!function(e,t){var n=ne[e%ne.length],a=new o.b;a.x=y+v*e+60,a.y=n+100,a.filters=b,me(a);var l=o.g.from("http://h2931731.stratoserver.net/game-6.jpg");l.width=140,l.height=90,l.x=0,l.y=-10,l.zIndex=12,l.anchor.set(.5,.5),a.addChild(l);var s=new he(ue[V].texture);s.x=0,s.y=0,s.zIndex=20,s.width=146,s.height=112,s.interactive=!0,s.buttonMode=!0,s.anchor.set(.5,.5),s.on("mousedown",(function(){return console.log('state.handleOpenModal("modal-kingspath-choose-mission")')})),s.on("touchstart",(function(){return console.log('state.handleOpenModal("modal-kingspath-choose-mission")')})),a.addChild(s);var u=new o.h(10,{fontSize:11,fill:"#fff",align:"center"});u.anchor.set(.5,.5),u.resolution=4,u.x=0,u.y=17,s.addChild(u);var h=new o.h(2,{fontSize:21,fill:"#fff",align:"center"});h.anchor.set(.5,.5),h.resolution=4,h.x=0,h.y=39,s.addChild(h);var c=t.progress.percentage,p=new he(ue[B].texture);p.x=-73,p.y=-80,p.width=146,p.height=20,p.anchor.set(0,0),a.addChild(p);var f=new o.c;f.beginFill(16776960),f.drawRoundedRect(-69,-77,138,14,20),a.addChild(f);var x=1.38*c,g=new o.c;g.beginFill(5105151),g.drawRoundedRect(-69,-77,x,14,0),g.endFill(),g.mask=f,a.addChild(g);var m=new o.h(Math.round(c)+"%",{fontSize:14,fill:16777215,align:"center",dropShadow:!0,dropShadowColor:"#000000",dropShadowDistance:1,fontWeight:"bold",lineHeight:30});m.anchor.set(.5,.5),m.x=50,m.y=-70,m.resolution=3,a.addChild(m),Re(),d.push(a),Oe(y+v*e+25,n-15,e+1),_e(e,s),Ce(e,a.x,a.y),i=a.x,r=a.y;var w={};w.x=a.x,w.y=a.y,w.x-=50,w.y-=50}(e,c[0])},Se=function(){(!i||i<0)&&(i=-50),t=600-i,ze()},ze=function(){re.x=t},Ie=function(){for(var e=0;e<g.length;e++)re.addChild(g[e]);for(var t=0;t<p.length;t++)re.addChild(p[t]);for(var n=0;n<d.length;n++)d[n].width*=1.25,d[n].height*=1.25,re.addChild(d[n]);for(var i=0;i<m.length;i++)re.addChild(m[i])},De=function(){var e;re.zIndex=20,ce.stage.addChild(re),ce.stage.y=50;var t=new o.c;t.beginFill(16776960),t.drawRoundedRect(50,-10,1156,676,20),t.zIndex=50,ce.stage.addChild(t),re.mask=t,oe.x=-1156,oe.vx=-1156,oe.y=10,oe.zIndex=10,oe.mask=t,ce.stage.addChild(oe);for(var n=0;n<3;n++)(e=new he(ue[k].texture)).name="",e.height=626,e.width=1156,e.x=1156*n,e.y=0,e.zIndex=10,oe.addChild(e);(e=new he(ue[_].texture)).name="map_left",e.height=653,e.width=292,e.x=10,e.y=0,e.vx=0,e.vy=0,e.zIndex=30,ce.stage.addChild(e),(e=new he(ue[C].texture)).name="map_arrow_left",e.interactive=!0,e.buttonMode=!0,e.on("mousedown",(function(){return Ee()})),e.on("touchstart",(function(){return Ee()})),e.on("mouseup",(function(){return Me()})),e.on("touchend",(function(){return Me()})),e.height=104,e.width=50,e.x=45,e.y=270,e.vx=0,e.vy=0,e.zIndex=35,ce.stage.addChild(e),(e=new he(ue[_].texture)).name="map_right",e.height=653,e.width=292,e.x=1269,e.y=0,e.scale.x*=-1,e.zIndex=30,ce.stage.addChild(e),(e=new he(ue[C].texture)).name="map_arrow_right",e.interactive=!0,e.buttonMode=!0,e.on("mousedown",(function(){return Pe()})),e.on("touchstart",(function(){return Pe()})),e.on("mouseup",(function(){return Ae()})),e.on("touchend",(function(){return Ae()})),e.height=104,e.width=50,e.x=1234,e.y=270,e.scale.x*=-1,e.zIndex=35,ce.stage.addChild(e),(e=new he(ue[Q].texture)).name="parchment",e.height=260,e.width=350,e.x=90,e.y=400,e.zIndex=30,s=e,ce.stage.addChild(e),(u=new o.h("SELETE MISSION",{fontSize:31,fill:"#a73000",align:"center",lineHeight:40,wordWrap:!0,wordWrapWidth:150})).x=110,u.y=130,u.angle=6,u.anchor.set(.5,.5),u.resolution=2,s.addChild(u),(h=new o.h("Turn over a card & takes on another mission on the pyramid path",{fontSize:22,fill:"#720d02",align:"center",lineHeight:25,wordWrapWidth:150,wordWrap:!0})).x=295,h.y=150,h.angle=6,h.anchor.set(.5,.5),h.resolution=2,s.addChild(h);for(var i=0;i<4;i++){var r=new f;r.blur=4,r.alpha=.5,r.rotation=90*i,r.color=16777215,r.distance=20,r.alpha=0,b.push(r)}var a=new he(ue[K].texture);a.name="button-position",a.height=32,a.width=221,a.x=515,a.y=610,a.zIndex=55,a.interactive=!0,a.buttonMode=!0,a.on("mousedown",(function(){return ze()})),a.on("touchstart",(function(){return ze()})),a.mouseover=function(){this.alpha=0},a.mouseout=function(){this.alpha=1},ce.stage.addChild(a);var l=new he(ue[J].texture);l.name="button-position",l.height=32,l.width=221,l.x=515,l.y=610,l.zIndex=50,l.interactive=!0,l.buttonMode=!0,l.on("mousedown",(function(){return ze()})),l.on("touchstart",(function(){return ze()})),ce.stage.addChild(l);var c=new o.h("POSITION",{fontSize:18,align:"center"});c.anchor.set(.5),c.zIndex=56,c.x=624,c.y=626,ce.stage.addChild(c);var d=new he(ue[Y].texture);d.name="",d.height=276,d.width=676,d.x=5,d.y=-35,d.zIndex=50,ce.stage.addChild(d);var p=new he(ue[Z].texture);p.name="",p.height=145,p.width=334,p.x=210,p.y=50,p.zIndex=50,ce.stage.addChild(p);ce.stage.children.sort((function(e,t){return e.zIndex=e.zIndex||0,t.zIndex=t.zIndex||0,e.zIndex-t.zIndex}))},Fe=function(){var e=document.getElementById("kingspath");if(e){var t,n,i=[ae,710],r=i[0]/i[1],o=ce.view.parentNode;o.clientWidth/o.clientHeight>=r?(t=o.clientHeight*r,n=o.clientHeight):(t=o.clientWidth,n=o.clientWidth/r),ce.view.style.width=t+"px",ce.view.style.height=n+"px";var a=e.getElementsByClassName("timer-container")[0];a&&(a.style.width=t+"px")}},Ee=function(){w=!0,re.vx=80,re.vy=0},Me=function(){w=!1,re.vx=0},Pe=function(){w=!0,re.vx=-80,re.vy=0},Ae=function(){w=!1,re.vx=0},je=function(){try{ce.view.style.display="inline-table",!0,n.completedRewards&&(n.overtake?ge():n.mapApiJsonKingspathComplete(n.completedRewards))}catch(e){console.log("lost context...")}},Re=function(){n.intervalId=setInterval((function(){if(!(n.missions.length<=0)){var e=(new Date).getTime(),t=n.endDate-e;if(t<0)return n.expired=!0,void clearInterval(n.intervalId);n.expired=!1;var i=Math.floor(t%31536e6/864e5),r=Math.floor(t%864e5/36e5)+24*i,o=Math.floor(t%36e5/6e4),a=Math.floor(t%6e4/1e3);r=("0"+r).substr(-2,2),o=("0"+o).substr(-2,2),a=("0"+a).substr(-2,2),undefined.text=r+":"+o+":"+a}}),1e3)}}else console.log("no container. close")}),[]),Object(g.jsx)("div",{id:"pixi-container",style:{marginTop:"-70px"}})}}}]);
//# sourceMappingURL=19.29a7630f.chunk.js.map