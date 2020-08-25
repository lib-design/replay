(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{123:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(145),o=n(140),s=Object(o.a)({render:function(){return[o.b.rectangle({width:50,height:40,color:"yellow"})]}}),c=Object(o.a)({init:function(){return{birdY:10,birdGravity:-12}},loop:function(e){var t=e.state,n=e.device.inputs,i=t.birdGravity,r=t.birdY;return r-=i+=.8,(n.pointer.justPressed||n.keysJustPressed[" "])&&(i=-12),{birdGravity:i,birdY:r}},render:function(e){var t=e.state;return[s({id:"bird",x:0,y:t.birdY})]}}),u=Object(o.a)({render:function(){return[c({id:"level"})]}}),d={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}},l=n(58);t.default=function(){return r.a.createElement(a.a,{part:9,MDXContent:l.default,codesTs:[{file:"level.ts",code:'import { makeSprite } from "@replay/core";\nimport { WebInputs } from "@replay/web";\nimport { iOSInputs } from "@replay/swift";\nimport { Bird } from "./bird";\n\nconst birdX = 0;\n\ntype LevelState = {\n  birdY: number;\n  birdGravity: number;\n};\n\nexport const Level = makeSprite<{}, LevelState, WebInputs | iOSInputs>({\n  init() {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n    };\n  },\n\n  loop({ state, device }) {\n    const { inputs } = device;\n\n    let { birdGravity, birdY } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (inputs.pointer.justPressed || inputs.keysJustPressed[" "]) {\n      birdGravity = -12;\n    }\n\n    return {\n      birdGravity,\n      birdY,\n    };\n  },\n\n  render({ state }) {\n    return [\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n      }),\n    ];\n  },\n});\n',highlight:[29]}],codesJs:[{file:"level.js",code:'import { makeSprite } from "@replay/core";\nimport { Bird } from "./bird";\n\nconst birdX = 0;\n\nexport const Level = makeSprite({\n  init() {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n    };\n  },\n\n  loop({ state, device }) {\n    const { inputs } = device;\n\n    let { birdGravity, birdY } = state;\n\n    birdGravity += 0.8;\n    birdY -= birdGravity;\n\n    if (inputs.pointer.justPressed || inputs.keysJustPressed[" "]) {\n      birdGravity = -12;\n    }\n\n    return {\n      birdGravity,\n      birdY,\n    };\n  },\n\n  render({ state }) {\n    return [\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n      }),\n    ];\n  },\n});\n',highlight:[22]}],Game:u,gameProps:d})}},140:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var i=n(142),r={text:function(e){return{type:"text",props:Object.assign({testId:e.testId},Object(i.a)(e),{font:e.font,text:e.text,align:e.align||"center",color:e.color})}},circle:function(e){return{type:"circle",props:Object.assign({testId:e.testId},Object(i.a)(e),{radius:e.radius,color:e.color})}},rectangle:function(e){return{type:"rectangle",props:Object.assign({testId:e.testId},Object(i.a)(e),{width:e.width,height:e.height,color:e.color})}},line:function(e){var t;return{type:"line",props:Object.assign({testId:e.testId},Object(i.a)(e),{color:e.color,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,path:e.path})}},image:function(e){return{type:"image",props:Object.assign({testId:e.testId},Object(i.a)(e),{fileName:e.fileName,width:e.width,height:e.height})}},spriteSheet:function(e){return{type:"spriteSheet",props:Object.assign({testId:e.testId},Object(i.a)(e),{fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height})}}};function a(e){return function(t){return{type:"custom",spriteObj:e,props:t}}}},142:function(e,t,n){"use strict";function i(e){var t,n,i;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(i=e.scaleY)&&void 0!==i?i:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0,mask:e.mask||null}}n.d(t,"a",(function(){return i}))},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return Z}));var i=n(0),r=n.n(i),a=n(149),o=n(146),s=n(153),c=n(2),u=n(152),d=n(151),l=n(147),p=n(148),h=n(150),f=n.n(h),m=n(48),v=n.n(m);function g(e){var t=e.codesTs,n=e.codesJs;return r.a.createElement(l.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},r.a.createElement(p.a,{value:"js"},r.a.createElement(b,{lang:"js",codes:n})),r.a.createElement(p.a,{value:"ts"},r.a.createElement(b,{lang:"ts",codes:t})))}function b(e){var t=e.lang,n=e.codes,a=n.map((function(e){return e.file})),o=Object(i.useState)(a[0]),s=o[0],c=o[1],u=n.find((function(e){return e.file===s}));return r.a.createElement("div",{style:{marginTop:-12}},r.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},a.map((function(e){return r.a.createElement("button",{className:v.a.fileButton+(s===e?" "+v.a.fileButtonSelected:""),key:e,onClick:function(){return c(e)}},e)}))),r.a.createElement(y,{key:u.file,lang:t,code:u.code,highlight:u.highlight}))}function y(e){var t=e.lang,n=e.code,i=e.highlight,a=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return r.a.createElement(u.a,Object(c.a)({},u.b,{theme:d.a,code:a,language:t}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,s=e.getTokenProps;return r.a.createElement("div",{className:v.a.codeBlockContent},r.a.createElement("div",{tabIndex:"0",className:f()(t,v.a.codeBlock)},r.a.createElement("div",{className:v.a.codeBlockLines,style:n},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t}),a=null==i?void 0:i.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],i=t[1];return Array.from({length:i-n+1}).map((function(e,t){return t+n}))}));return(null==a?void 0:a.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),r.a.createElement("div",n,r.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return r.a.createElement("span",s({token:e,key:t}))})))})))))}))}var w=n(143),E=n.n(w),x=n(144),j=n(142);function k(e,t,n,i,r,a,o,s,c,u){var d=Object(j.a)(t);d.opacity*=s;var l=u.nativeSpriteMap,p=u.nativeSpriteUtils,h=function(e){var t=i(e);return function(e){var t=Math.PI/180,n=-(e.rotation||0)*t;return function(t){var i=t.x,r=t.y,a=i-e.x,o=r-e.y,s=a*Math.cos(n)+o*Math.sin(n),c=-a*Math.sin(n)+o*Math.cos(n),u=s/e.scaleX,d=c/e.scaleY;return{x:u+e.anchorX,y:d+e.anchorY}}}(d)(t)},f=n(h),m=e.getSprites(t,f,r,a,o),v=[],g=m.map((function(t){if(!t)return t;if("native"===t.type){v.push(t.props.id);var i=l[t.name];if(!i)throw Error('Cannot find Native Sprite "'+t.name+'"');var r=e.childContainers[t.props.id];return r&&"native"===r.type||(r={type:"native",state:i.create({props:t.props,parentGlobalId:c,getState:function(){return r.state},updateState:function(e){r.state=Object.assign({},r.state,e)},utils:p}),cleanup:i.cleanup},e.childContainers[t.props.id]=r),r.state=i.loop({props:t.props,state:r.state,parentGlobalId:c,utils:p}),p.didResize=!1,null}if("custom"===t.type){v.push(t.props.id);var s=!1,m=e.childContainers[t.props.id];return m&&"custom"===m.type||(s=!0,m=M(t,f,e.prevTime),e.childContainers[t.props.id]=m),k(m,t.props,n,h,s,a,o,d.opacity,c+"--"+t.props.id,u)}return t})).filter(S);return function e(t){Object.keys(t).forEach((function(n){if(!v.includes(n)){var i=t[n];"native"===i.type?i.cleanup({state:i.state,parentGlobalId:c}):e(i.childContainers),delete t[n]}}))}(e.childContainers),{id:t.id,baseProps:d,textures:g}}var P=1/60*1e3;function M(e,t,n){var i,r=e.spriteObj,a=e.props,o=[],s=function(e){o.push(e)};return r.init&&(i=r.init({props:a,device:t,updateState:s})),{type:"custom",state:i,childContainers:{},prevTime:n,currentLag:0,getSprites:function(e,t,n,i,a){var c=this,u=function(){c.state=o.reduce((function(e,t){return t(e)}),c.state),o.length=0};u(),!n&&r.loop&&(this.state=r.loop({props:e,state:this.state,device:t,updateState:s})),u();var d=r[i];d||(d="renderPXL"===i&&r.renderXL?r.renderXL:r.render);var l=d({props:e,state:this.state,device:t,updateState:s,extrapolateFactor:a});return u(),l}}}function O(e,t){var n,i=e.deviceHeight>e.deviceWidth,r=!1;return"portrait"in t?(n=i?t.portrait:t.landscape,r=!0):n=t,n.minHeightXL&&e.deviceHeight>=n.minHeightXL||n.minWidthXL&&e.deviceWidth>=n.minWidthXL?r&&i?"renderPXL":"renderXL":r&&i?"renderP":"render"}function S(e){return null!==e}var T={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,numberPressed:0,justPressed:!1,justReleased:!1,x:0,y:0}},L=[];function I(e){return function(e,t){var n=e(t.pointer);return Object.assign({},t,{pointer:Object.assign({},t.pointer,{x:n.x,y:n.y})})}(e,T)}function C(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&!(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement)&&e.preventDefault(),T.keysDown[e.key]=!0,T.keysJustPressed[e.key]=!0}function X(e){delete T.keysDown[e.key]}function N(e){L=L.filter((function(t){return t!==e})),T.pointer.numberPressed=L.length,0===L.length&&(T.pointer.justPressed=!1,T.pointer.pressed=!1)}function G(){T={keysDown:T.keysDown,keysJustPressed:{},pointer:Object.assign({},T.pointer,{justPressed:!1,justReleased:!1})}}function Y(e,t,n,i){var r=t.width,a=t.height,o=t.widthMargin,s=t.heightMargin,c=t.deviceWidth,u=t.deviceHeight;e.save();var d=Math.min(c/r,u/a),l=r+2*o,p=a+2*s;return e.translate(c/2,u/2),e.scale(d,d),{scale:d,render:function(t){e.clearRect(-c/2/d,-u/2/d,c/d,u/d),e.fillStyle="white",e.fillRect(-l/2,-p/2,l,p),function e(t,n,i,r){var a=t.baseProps,o=t.textures;n.save(),z(n,a),o.forEach((function(t){if("type"in t){var o=R(n);return n.save(),z(n,t.props,a.opacity),function(e,t,n,i){switch(e.type){case"text":return t.text(e.props.font||i,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color),0;case"image":var r=n[e.props.fileName];if(!r)throw Error('Cannot find image file "'+e.props.fileName+'"');return t.image(r,e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,o,i,r),void n.restore()}e(t,n,i,r)})),n.restore()}(t,e,n,i)}}}var D=Math.PI/180,z=function(e,t,n){void 0===n&&(n=1);var i=t.x,r=t.y,a=t.rotation,o=t.scaleX,s=t.scaleY,c=t.anchorX,u=t.anchorY,d=t.opacity;e.translate(i,-r),e.rotate(a*D),e.scale(o,s),e.translate(-c,u),e.globalAlpha=d*n,function(e,t){if(!t)return 0;switch(t.type){case"lineMask":var n=t.path,i=n[0],r=i[0],a=i[1],o=n.slice(1);return e.beginPath(),e.moveTo(r,-a),o.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),e.clip(),0;case"circleMask":return e.beginPath(),e.arc(t.x,-t.y,Math.round(t.radius),0,2*Math.PI),e.clip(),0;case"rectangleMask":e.beginPath(),e.rect(t.x-t.width/2,-t.y-t.height/2,t.width,t.height),e.clip()}}(e,t.mask)};var H,R=function(e){return{circle:function(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle:function(t,n,i){e.fillStyle=i,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line:function(t,n,i){if(!(t.length<2)){var r=t[0],a=r[0],o=r[1],s=t.slice(1);e.strokeStyle=i,e.lineWidth=n,e.beginPath(),e.moveTo(a,-o),s.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),e.stroke()}},text:function(t,n,i,r){var a=t.size+"px "+t.name;e.font=a,e.textBaseline="middle",e.textAlign=i,e.fillStyle=r,e.fillText(n,0,0)},image:function(t,n,i){e.drawImage(t,-n/2,-i/2,n,i)},spriteSheet:function(t,n,i,r,a,o){var s=t.width/n,c=t.height/i,u=r%n,d=Math.floor(r/n)%i;e.drawImage(t,u*s,d*c,s,c,-a/2,-o/2,a,o)}}};function J(e,t,n,i){var r;"portrait"in i?r=t>e?i.portrait:i.landscape:r=i;var a=r,o=a.width,s=a.height,c=a.maxWidthMargin,u=void 0===c?0:c,d=a.maxHeightMargin;if("game-coords"===n)return{width:o,height:s,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:s};var l=o/s;if(l>e/t){var p=e,h=p/l,f=h/s*(void 0===d?0:d),m=Math.min(t,h+2*f);return{width:o,height:s,widthMargin:0,heightMargin:(m-h)/2*(s/h),deviceWidth:p,deviceHeight:m}}var v=t,g=v*l,b=g/o*u,y=Math.min(e,g+2*b);return{width:o,height:s,widthMargin:(y-g)/2*(o/g),heightMargin:0,deviceWidth:y,deviceHeight:v}}function W(e,t){return B.apply(this,arguments)}function B(){return(B=Object(x.a)(E.a.mark((function e(t,n){var i,r,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return i=e.sent,e.next=5,i.arrayBuffer();case 5:return r=e.sent,e.next=8,new Promise((function(e,n){t.decodeAudioData(r,e,n)}));case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t){return function(n){var i=t[n],r=i.data,a=i.mutPlayState;return{getPosition:function(){return a?a.isPaused?a.alreadyPlayedTime:e.currentTime-a.startTime:0},play:function(i,o){var s;void 0===o&&(o=!1);var c=e.createBufferSource();c.buffer=r,c.connect(e.destination);var u=null!==(s=null!=i?i:null==a?void 0:a.alreadyPlayedTime)&&void 0!==s?s:0;c.start(void 0,u),c.loop=o,c.onended=function(){var e;!1===(null===(e=t[n].mutPlayState)||void 0===e?void 0:e.isPaused)&&delete t[n].mutPlayState},a&&!a.isPaused||(t[n].mutPlayState={startTime:e.currentTime-u,sample:c,alreadyPlayedTime:u,isPaused:!1})},pause:function(){a&&!a.isPaused&&(a.sample.stop(),t[n].mutPlayState=Object.assign({},a,{alreadyPlayedTime:e.currentTime-a.startTime,isPaused:!0}))}}}}function F(){if("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch)return!0;return window.matchMedia("(touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled)").matches}var U={name:"sans-serif",size:12};function K(e,t){var n,i=t.loadingTextures,r=void 0===i?[]:i,a=t.assets,o=void 0===a?{}:a,s=t.dimensions,c=void 0===s?"game-coords":s,u=t.nativeSpriteMap,d=void 0===u?{}:u,l=t.canvas,p=t.windowSize,h=l||document.createElement("canvas");l||document.body.appendChild(h);var f,m,v,g,b,y,w=h.getContext("2d",{alpha:!1}),S=new(window.AudioContext||window.webkitAudioContext),I=!0,D=!0,z=0,R=!1,B=0,A=0,F=function(){document.hidden&&D&&(B=z,S.suspend()),document.hidden||D||(R=!0,S.resume()),D=!document.hidden};document.addEventListener("keydown",(function(e){I&&C(e)}),!1),document.addEventListener("keyup",(function(e){I&&X(e)}),!1),document.addEventListener("visibilitychange",F,!1),window.addEventListener("resize",V,!1);var K={didResize:!1,scale:1,gameXToPlatformX:function(e){return e},gameYToPlatformY:function(e){return e}};function V(t){if(!f||(w.restore(),document.removeEventListener("pointerdown",m),document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",g),document.removeEventListener("pointerout",b),!0!==t)){var n=function(e,t,n,i){var r=J(e,t,n,i);return H=r,r}((null==p?void 0:p.width)||window.innerWidth,(null==p?void 0:p.height)||window.innerHeight,c,e.props.size);h.width=n.deviceWidth,h.height=n.deviceHeight;var i=e.props.defaultFont||U,r=Y(w,n,Z,i);y=r.scale,_.ref=r.render,K.gameXToPlatformX=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return t+i*(e+r/2+n)}}({canvasOffsetLeft:h.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:y}),K.gameYToPlatformY=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return t-i*(e-r/2-n)}}({canvasOffsetTop:h.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:y}),K.didResize=!0,K.scale=y;var a=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return(e.clientX-t)/i-n-r/2}}({canvasOffsetLeft:h.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:y}),o=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return-(e.clientY-t)/i+n+r/2}}({canvasOffsetTop:h.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:y}),s=function(e,t){return e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2-n.heightMargin};m=function(e){var t=a(e),n=o(e);s(t,n)?I=!1:(I=!0,function(e,t,n){L.includes(n)||(L=[].concat(L,[n])),T.pointer.pressed=!0,T.pointer.numberPressed=L.length,T.pointer.justPressed=!0,T.pointer.x=e,T.pointer.y=t}(t,n,e.pointerId))},v=function(e){var t=a(e),n=o(e);s(t,n)||function(e,t){T.pointer.x=e,T.pointer.y=t}(t,n)},g=function(e){var t=a(e),n=o(e);s(t,n)?N(e.pointerId):function(e,t,n){0===(L=L.filter((function(e){return e!==n}))).length&&(T.pointer.justPressed=!1,T.pointer.pressed=!1),T.pointer.numberPressed=L.length,T.pointer.justReleased=!0,T.pointer.x=e,T.pointer.y=t}(t,n,e.pointerId)},b=function(e){N(e.pointerId)},document.addEventListener("pointerdown",m,!1),document.addEventListener("pointermove",v,!1),document.addEventListener("pointerup",g,!1),document.addEventListener("pointerout",b,!1),f=n}}var Q={},Z={},$={getGetDevice:q(S,Q,J((null==p?void 0:p.width)||window.innerWidth,(null==p?void 0:p.height)||window.innerHeight,c,e.props.size))},_={ref:null};V();var ee=!1,te=function(){var e=Object(x.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],(o.audioFileNames||[]).forEach((function(e){t.push(W(S,e).then((function(t){Q[e]={data:t}})))})),(o.imageFileNames||[]).forEach((function(e){Z[e]=new Image,t.push(new Promise((function(t,n){Z[e].addEventListener("load",t),Z[e].addEventListener("error",n),Z[e].src=e})))})),e.next=5,Promise.all(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null===(n=_.ref)||void 0===n||n.call(_,{id:"Loading",baseProps:Object(j.a)({}),textures:r}),{cleanup:function(){h.width=h.width,l||document.body.removeChild(h),ee=!0,document.removeEventListener("keydown",C,!1),document.removeEventListener("keyup",X,!1),document.removeEventListener("visibilitychange",F,!1),window.removeEventListener("resize",V,!1),V(!0)},loadPromise:te().then((function(){var t=function e(){document.removeEventListener("keydown",e,!1),document.removeEventListener("pointerdown",e,!1),"suspended"===S.state&&S.resume()};document.addEventListener("keydown",t,!1),document.addEventListener("pointerdown",t,!1);var n=function(e,t,n,i){var r=function(e){return{x:e.x,y:e.y}},a=e.getGetDevice(),o=a(r),s=M(n,a(r),0),c=i||n.props.size,u=O(o.size,c),d=0,l=0,p=k(s,n.props,a,r,!0,u,0,1,n.props.id,t);return{initTextures:p,getNextFrameTextures:function(i,a){var o=i-d;for(d=i,l+=o;l>=P;){var u=(l-=P)/P,h=e.getGetDevice(),f=O(h(r).size,c);p=k(s,n.props,h,r,!1,f,u,1,n.props.id,t),a()}return p}}}($,{nativeSpriteMap:d,nativeSpriteUtils:K},e),i=n.initTextures,r=n.getNextFrameTextures,a=null;!function e(t){var n;null===(n=_.ref)||void 0===n||n.call(_,t),window.requestAnimationFrame((function(t){ee||(null===a&&(a=t-1/60),R&&(R=!1,A+=t-B),z=t,e(r(t-a-A,G)))}))}(i)})),audioElements:Q,audioContext:S}}function q(e,t,n){var i,r={isTouchScreen:F(),log:console.log,random:Math.random,timer:(i={},{start:function(e,t){var n=window.setTimeout((function(){delete i[r],e()}),t),r=String(n);return i[r]={timeoutId:n,callback:e,timeStartedMs:Date.now(),timeRemainingMs:t,isPaused:!1},r},pause:function(e){var t=i[e];if(t&&!t.isPaused){var n=Date.now()-t.timeStartedMs;t.timeRemainingMs-=n,t.isPaused=!0,window.clearTimeout(t.timeoutId)}},resume:function(e){var t=i[e];if(t&&t.isPaused){t.timeStartedMs=Date.now(),t.isPaused=!1;var n=window.setTimeout((function(){delete i[e],t.callback()}),t.timeRemainingMs);t.timeoutId=n}},cancel:function(e){var t=i[e];t&&(window.clearTimeout(t.timeoutId),delete i[e])}}),audio:A(e,t),network:{get:function(e,t){fetch(e).then((function(e){return e.json()})).then(t)},post:function(e,t,n){fetch(e,{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},put:function(e,t,n){fetch(e,{method:"PUT",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},delete:function(e,t){fetch(e,{method:"DELETE"}).then((function(e){return e.json()})).then(t)}},storage:{getStore:function(){for(var e,t={},n=0;n<localStorage.length;n++){var i=localStorage.key(n);i&&(t[i]=null!==(e=localStorage.getItem(i))&&void 0!==e?e:void 0)}return t},setStore:function(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];void 0===n?localStorage.removeItem(t):localStorage.setItem(t,n)}))}},alert:{ok:function(e,t){alert(e),null==t||t()},okCancel:function(e,t){t(confirm(e))}},clipboard:{copy:function(e,t){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){t()})).catch((function(e){t(e)})):t(new Error(window.isSecureContext?"Couldn't access clipboard":"Clipboard only available on HTTPS or localhost"))}}};return function(){var e=Object.assign({},r,{size:H||n,now:function(){return new Date}});return function(t){return Object.assign({},e,{inputs:I(t)})}}}var V=n(140);function Q(e){var t=e.Game,n=e.gameProps,a=e.showReload,o=e.assets,s=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(null),n=t[0],r=t[1],a=function(){r(e.current.getBoundingClientRect())};Object(i.useEffect)((function(){return window.addEventListener("resize",a,!1),function(){return window.removeEventListener("resize",a,!1)}}),[]);var o=Object(i.useCallback)((function(t){null!==t&&(e.current=t,a())}),[]);return Object(i.useEffect)((function(){document.getElementById("iphone-img").onload=function(){a()}}),[]),[n,o]}(),c=s[0],u=s[1],d=Object(i.useState)(0),l=d[0],p=d[1],h=0,f=0,m=0;if(c&&c.height&&c.width){c.width/c.height>375/667?(f=c.height*(667/900),h=f*(375/667)):(h=c.width*(375/460),f=h/(375/667));var g=n.size.maxHeightMargin?0:.08*f;m=(c.height-f)/2+g}return Object(i.useEffect)((function(){if(h&&f){var e=document.getElementById("myCanvas"),i=K(t(n),{loadingTextures:[V.b.text({color:"black",text:"Loading..."})],assets:o,dimensions:"scale-up",canvas:e,windowSize:{width:h,height:f}}).cleanup;return function(){i()}}}),[h,f,l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:u,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),a&&r.a.createElement("img",{className:v.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return p((function(e){return e+1}))}}),r.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:m},width:h,height:f}))}function Z(e){var t=e.part,n=e.MDXContent,i=e.codesTs,c=e.codesJs,u=e.Game,d=e.gameProps,l=e.image,p=e.isEnd,h=e.assets,f=i&&c,m=u&&d?r.a.createElement(s.a,{fallback:r.a.createElement("div",null,"Preview")},(function(){return r.a.createElement(Q,{Game:u,gameProps:d,showReload:f,assets:h})})):r.a.createElement("div",null,r.a.createElement("img",{src:l}));return r.a.createElement(a.a,{title:"Tutorial - Part "+t,noFooter:!0},r.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},r.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},r.a.createElement(n,null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?r.a.createElement(o.a,{to:"/tutorial/"+(t-1)},"Back"):r.a.createElement("div",null),p?r.a.createElement("div",null):r.a.createElement(o.a,{to:"/tutorial/"+(t+1)},"Next"))),f?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},r.a.createElement(g,{codesTs:i,codesJs:c})),r.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},m)):r.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},m)))}},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(2),r=n(6),a=(n(0),n(141)),o={},s={unversionedId:"tutorial/9",id:"tutorial/9",isDocsHomePage:!1,title:"9",description:"9 - Keyboard",source:"@site/docs/tutorial/9.md",permalink:"/docs/tutorial/9",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/9.md"},c=[],u={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"9---keyboard"},"9 - Keyboard"),Object(a.b)("p",null,"We can also support pressing the space bar to jump for players using a keyboard through a browser."),Object(a.b)("p",null,"To do this we can look at the ",Object(a.b)("inlineCode",{parentName:"p"},"inputs.keysJustPressed")," object to see if the space key was just pressed."),Object(a.b)("p",null,"The fields ",Object(a.b)("inlineCode",{parentName:"p"},"inputs.keysDown")," and ",Object(a.b)("inlineCode",{parentName:"p"},"inputs.keysJustPressed")," contain an object which will have a ",Object(a.b)("inlineCode",{parentName:"p"},"true")," value for any key codes pressed. Check out ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://keycode.info"}),"keycode.info")," for possible ",Object(a.b)("inlineCode",{parentName:"p"},"key")," values."))}d.isMDXComponent=!0}}]);