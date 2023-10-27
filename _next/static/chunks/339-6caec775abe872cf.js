"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[339],{58:function(e,t,n){n.d(t,{Z:function(){return useEmblaCarousel}});var r=n(2265);function isObject(e){return"[object Object]"===Object.prototype.toString.call(e)}function isRecord(e){return isObject(e)||Array.isArray(e)}function canUseDOM(){return!!("undefined"!=typeof window&&window.document&&window.document.createElement)}function areOptionsEqual(e,t){let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;let i=JSON.stringify(Object.keys(e.breakpoints||{})),o=JSON.stringify(Object.keys(t.breakpoints||{}));return i===o&&n.every(n=>{let r=e[n],i=t[n];return"function"==typeof r?`${r}`==`${i}`:isRecord(r)&&isRecord(i)?areOptionsEqual(r,i):r===i})}function sortAndMapPluginToOptions(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function arePluginsEqual(e,t){if(e.length!==t.length)return!1;let n=sortAndMapPluginToOptions(e),r=sortAndMapPluginToOptions(t);return n.every((e,t)=>{let n=r[t];return areOptionsEqual(e,n)})}function isNumber(e){return"number"==typeof e}function isString(e){return"string"==typeof e}function isBoolean(e){return"boolean"==typeof e}function embla_carousel_esm_isObject(e){return"[object Object]"===Object.prototype.toString.call(e)}function mathAbs(e){return Math.abs(e)}function mathSign(e){return Math.sign(e)}function factorAbs(e,t){var n,r;if(0===e||0===t||mathAbs(e)<=mathAbs(t))return 0;let i=(n=mathAbs(e),r=mathAbs(t),mathAbs(n-r));return mathAbs(i/e)}function arrayKeys(e){return objectKeys(e).map(Number)}function arrayLast(e){return e[arrayLastIndex(e)]}function arrayLastIndex(e){return Math.max(0,e.length-1)}function arrayFromNumber(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function objectKeys(e){return Object.keys(e)}function objectsMergeDeep(e,t){return[e,t].reduce((e,t)=>(objectKeys(t).forEach(n=>{let r=e[n],i=t[n],o=embla_carousel_esm_isObject(r)&&embla_carousel_esm_isObject(i);e[n]=o?objectsMergeDeep(r,i):i}),e),{})}function isMouseEvent(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function Alignment(e,t){let n={start,center,end};function start(){return 0}function center(e){return(t-e)/2}function end(e){return t-e}function percent(){return t*Number(e)}return{measure:function(t){return isNumber(e)?percent():n[e](t)}}}function Axis(e,t){let n="y"===e?"y":"x",r=getStartEdge(),i=getEndEdge();function measureSize(e){let{width:t,height:r}=e;return"x"===n?t:r}function getStartEdge(){return"y"===n?"top":"rtl"===t?"right":"left"}function getEndEdge(){return"y"===n?"bottom":"rtl"===t?"left":"right"}return{scroll:n,cross:"y"===e?"x":"y",startEdge:r,endEdge:i,measureSize}}function Limit(e,t){let n=mathAbs(e-t);function reachedMin(t){return t<e}function reachedMax(e){return e>t}function reachedAny(n){return n<e||n>t}function constrain(n){return reachedAny(n)?n<e?e:t:n}function removeOffset(e){return n?e-n*Math.ceil((e-t)/n):e}return{length:n,max:t,min:e,constrain,reachedAny,reachedMax,reachedMin,removeOffset}}function Counter(e,t,n){let{constrain:r}=Limit(0,e),i=e+1,o=withinLimit(t);function withinLimit(e){return n?mathAbs((i+e)%i):r(e)}function get(){return o}function set(e){return o=withinLimit(e),a}function add(e){return clone().set(o+e)}function clone(){return Counter(e,o,n)}let a={get,set,add,clone};return a}function Direction(e){let t="rtl"===e?-1:1;return{apply:function(e){return e*t}}}function EventStore(){let e=[];function add(n,r,i,o={passive:!0}){let a;return"addEventListener"in n?(n.addEventListener(r,i,o),a=()=>n.removeEventListener(r,i,o)):(n.addListener(i),a=()=>n.removeListener(i)),e.push(a),t}function clear(){e=e.filter(e=>e())}let t={add,clear};return t}function DragHandler(e,t,n,r,i,o,a,u,s,l,c,d,f,m,p,g,b,S,h,v){let{cross:E}=e,A=["INPUT","SELECT","TEXTAREA"],L={passive:!1},w=EventStore(),O=EventStore(),D=Limit(50,225).constrain(p.measure(20)),T={mouse:300,touch:400},P={mouse:500,touch:600},I=g?43:25,C=!1,k=0,N=0,M=!1,F=!1,j=!1,z=!1;function addDragEvents(){let e=z?r:n;O.add(e,"touchmove",move,L).add(e,"touchend",up).add(e,"mousemove",move,L).add(e,"mouseup",up)}function isFocusNode(e){let t=e.nodeName||"";return A.includes(t)}function forceBoost(){let e=g?P:T,t=z?"mouse":"touch";return e[t]}function allowedForce(e,t){let n=f.add(-1*mathSign(e)),r=d.byDistance(e,!g).distance;return g||mathAbs(e)<D?r:S&&t?.5*r:d.byIndex(n.get(),0).distance}function down(e){let t=isMouseEvent(e,i);z=t,(!t||0===e.button)&&!isFocusNode(e.target)&&(j=g&&t&&!e.buttons&&C,C=mathAbs(o.get()-u.get())>=2,M=!0,a.pointerDown(e),c.useFriction(0).useDuration(0),o.set(u),addDragEvents(),k=a.readPoint(e),N=a.readPoint(e,E),m.emit("pointerDown"))}function move(e){let n=a.readPoint(e),r=a.readPoint(e,E),i=mathAbs(n-k),u=mathAbs(r-N);if(!F&&!z&&(!e.cancelable||!(F=i>u)))return up(e);let l=a.pointerMove(e);i>b&&(j=!0),c.useFriction(.3).useDuration(1),s.start(),o.add(t.apply(l)),e.preventDefault()}function up(e){let n=d.byDistance(0,!1),r=n.index!==f.get(),i=a.pointerUp(e)*forceBoost(),o=allowedForce(t.apply(i),r),u=factorAbs(i,o);F=!1,M=!1,O.clear(),c.useDuration(I-10*u).useFriction(h+u/50),l.distance(o,!g),z=!1,m.emit("pointerUp")}function click(e){j&&(e.stopPropagation(),e.preventDefault())}return{init:function(e){v&&w.add(n,"dragstart",e=>e.preventDefault(),L).add(n,"touchmove",()=>void 0,L).add(n,"touchend",()=>void 0).add(n,"touchstart",downIfAllowed).add(n,"mousedown",downIfAllowed).add(n,"touchcancel",up).add(n,"contextmenu",up).add(n,"click",click,!0);function downIfAllowed(t){(isBoolean(v)||v(e,t))&&down(t)}},pointerDown:function(){return M},destroy:function(){w.clear(),O.clear()}}}function DragTracker(e,t){let n,r;function readTime(e){return e.timeStamp}function readPoint(n,r){let i=r||e.scroll,o=`client${"x"===i?"X":"Y"}`;return(isMouseEvent(n,t)?n:n.touches[0])[o]}return{pointerDown:function(e){return n=e,r=e,readPoint(e)},pointerMove:function(e){let t=readPoint(e)-readPoint(r),i=readTime(e)-readTime(n)>170;return r=e,i&&(n=e),t},pointerUp:function(e){if(!n||!r)return 0;let t=readPoint(r)-readPoint(n),i=readTime(e)-readTime(n),o=readTime(e)-readTime(r)>170,a=t/i,u=i&&!o&&mathAbs(a)>.1;return u?a:0},readPoint}}function PercentOfView(e){return{measure:function(t){return e*(t/100)}}}function ResizeHandler(e,t,n,r,i,o){let a,u;let s=[],l=!1;function readSize(e){return i.measureSize(e.getBoundingClientRect())}return{init:function(i){if(!o)return;function defaultCallback(o){for(let a of o){let o=a.target===e,l=r.indexOf(a.target),c=o?u:s[l],d=readSize(o?e:r[l]),f=mathAbs(d-c);if(f>=.2){n.requestAnimationFrame(()=>{i.reInit(),t.emit("resize")});break}}}u=readSize(e),s=r.map(readSize),a=new ResizeObserver(e=>{!l&&(isBoolean(o)||o(i,e))&&defaultCallback(e)});let c=[e].concat(r);c.forEach(e=>a.observe(e))},destroy:function(){a&&a.disconnect(),l=!0}}}function ScrollBody(e,t,n,r){let i=!0,o=0,a=0,u=n,s=r,l=e.get(),c=0;function seek(){let n=t.get()-e.get(),r=!u,f=0;return r?(o=0,e.set(t),f=n):(o+=n/u,o*=s,l+=o,e.add(o),f=l-c),a=mathSign(f),c=l,i=.001>mathAbs(n),d}function settled(){return i}function duration(){return u}function direction(){return a}function velocity(){return o}function useBaseDuration(){return useDuration(n)}function useBaseFriction(){return useFriction(r)}function useDuration(e){return u=e,d}function useFriction(e){return s=e,d}let d={direction,duration,velocity,seek,settled,useBaseFriction,useBaseDuration,useFriction,useDuration};return d}function ScrollBounds(e,t,n,r,i){let o=i.measure(10),a=i.measure(50),u=Limit(.1,.99),s=!1;function shouldConstrain(){return!!(!s&&e.reachedAny(n.get())&&e.reachedAny(t.get()))}return{constrain:function(i){if(!shouldConstrain())return;let s=e.reachedMin(t.get())?"min":"max",l=mathAbs(e[s]-t.get()),c=n.get()-t.get(),d=u.constrain(l/a);n.subtract(c*d),!i&&mathAbs(c)<o&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(e){s=!e}}}function ScrollContain(e,t,n,r){let i=Limit(-t+e,0),o=measureBounded(),a=findScrollContainLimit(),u=measureContained();function findScrollContainLimit(){let e=o[0],t=arrayLast(o),n=o.lastIndexOf(e),r=o.indexOf(t)+1;return Limit(n,r)}function measureBounded(){return n.map(i.constrain).map(e=>parseFloat(e.toFixed(3)))}function measureContained(){if(t<=e)return[i.max];if("keepSnaps"===r)return o;let{min:n,max:u}=a;return o.slice(n,u)}return{snapsContained:u,scrollContainLimit:a}}function ScrollLimit(e,t,n){let r=t[0],i=n?r-e:arrayLast(t),o=Limit(i,r);return{limit:o}}function ScrollLooper(e,t,n,r){let i=t.min+.1,o=t.max+.1,{reachedMin:a,reachedMax:u}=Limit(i,o);function shouldLoop(e){return 1===e?u(n.get()):-1===e&&a(n.get())}return{loop:function(t){if(!shouldLoop(t))return;let n=e*(-1*t);r.forEach(e=>e.add(n))}}}function ScrollProgress(e){let{max:t,length:n}=e;return{get:function(e){return n?-((e-t)/n):0}}}function ScrollSnaps(e,t,n,r,i){let{startEdge:o,endEdge:a}=e,{groupSlides:u}=i,s=measureSizes().map(t.measure),l=measureUnaligned(),c=measureAligned();function measureSizes(){return u(r).map(e=>arrayLast(e)[a]-e[0][o]).map(mathAbs)}function measureUnaligned(){return r.map(e=>n[o]-e[o]).map(e=>-mathAbs(e))}function measureAligned(){return u(l).map(e=>e[0]).map((e,t)=>e+s[t])}return{snaps:l,snapsAligned:c}}function SlideRegistry(e,t,n,r,i,o){let{groupSlides:a}=i,{min:u,max:s}=r,l=createSlideRegistry();function createSlideRegistry(){let r=a(o);return!n||t<=e?r:r.slice(u,s).map((e,t,n)=>{let r=!t,i=!r&&t===arrayLastIndex(n);if(r){let e=arrayLast(n[0])+1;return arrayFromNumber(e)}if(i){let e=arrayLastIndex(o)-arrayLast(n)[0]+1;return arrayFromNumber(e,arrayLast(n)[0])}return e})}return{slideRegistry:l}}function ScrollTarget(e,t,n,r,i){let{reachedAny:o,removeOffset:a,constrain:u}=r;function minDistance(e){return e.concat().sort((e,t)=>mathAbs(e)-mathAbs(t))[0]}function findTargetSnap(n){let r=e?a(n):u(n),i=t.map(e=>e-r).map(e=>shortcut(e,0)).map((e,t)=>({diff:e,index:t})).sort((e,t)=>mathAbs(e.diff)-mathAbs(t.diff)),{index:o}=i[0];return{index:o,distance:r}}function shortcut(t,r){let i=[t,t+n,t-n];if(!e)return i[0];if(!r)return minDistance(i);let o=i.filter(e=>mathSign(e)===r);return o.length?minDistance(o):arrayLast(i)-n}return{byDistance:function(n,r){let a=i.get()+n,{index:u,distance:s}=findTargetSnap(a),l=!e&&o(a);if(!r||l)return{index:u,distance:n};let c=t[u]-s,d=n+shortcut(c,0);return{index:u,distance:d}},byIndex:function(e,n){let r=t[e]-i.get(),o=shortcut(r,n);return{index:e,distance:o}},shortcut}}function ScrollTo(e,t,n,r,i,o,a){function scrollTo(r){let u=r.distance,s=r.index!==t.get();o.add(u),u&&(i.duration()?e.start():(e.update(),e.render(1),e.update())),s&&(n.set(t.get()),t.set(r.index),a.emit("select"))}return{distance:function(e,t){let n=r.byDistance(e,t);scrollTo(n)},index:function(e,n){let i=t.clone().set(e),o=r.byIndex(i.get(),n);scrollTo(o)}}}function SlideFocus(e,t,n,r,i,o){let a=0;function registerTabPress(e){"Tab"===e.code&&(a=new Date().getTime())}function addSlideFocusEvent(u){o.add(u,"focus",()=>{let o=new Date().getTime(),s=o-a;if(s>10)return;e.scrollLeft=0;let l=t.indexOf(u),c=n.findIndex(e=>e.includes(l));isNumber(c)&&(i.useDuration(0),r.index(c,0))},{passive:!0,capture:!0})}return{init:function(){o.add(document,"keydown",registerTabPress,!1),t.forEach(addSlideFocusEvent)}}}function Vector1D(e){let t=e;function normalizeInput(e){return isNumber(e)?e:e.get()}return{get:function(){return t},set:function(e){t=normalizeInput(e)},add:function(e){t+=normalizeInput(e)},subtract:function(e){t-=normalizeInput(e)}}}function Translate(e,t,n){let r="x"===e.scroll?x:y,i=n.style,o=!1;function x(e){return`translate3d(${e}px,0px,0px)`}function y(e){return`translate3d(0px,${e}px,0px)`}return{clear:function(){o||(i.transform="",n.getAttribute("style")||n.removeAttribute("style"))},to:function(e){o||(i.transform=r(t.apply(e)))},toggleActive:function(e){o=!e}}}function SlideLooper(e,t,n,r,i,o,a,u,s,l){let c=arrayKeys(o),d=arrayKeys(o).reverse(),f=startPoints().concat(endPoints());function removeSlideSizes(e,t){return e.reduce((e,t)=>e-o[t],t)}function slidesInGap(e,t){return e.reduce((e,n)=>{let r=removeSlideSizes(e,t);return r>0?e.concat([n]):e},[])}function findSlideBounds(e){return a.map((t,r)=>({start:t-i[r]+.5+e,end:t+n-.5+e}))}function findLoopPoints(n,i,o){let a=findSlideBounds(i);return n.map(n=>{let i=o?0:-r,u=o?r:0,c=a[n][o?"end":"start"];return{index:n,slideLocation:Vector1D(-1),translate:Translate(e,t,l[n]),target:()=>s.get()>c?i:u}})}function startPoints(){let e=u[0]-1,t=slidesInGap(d,e);return findLoopPoints(t,r,!1)}function endPoints(){let e=n-u[0]-1,t=slidesInGap(c,e);return findLoopPoints(t,-r,!0)}return{canLoop:function(){return f.every(({index:e})=>{let t=c.filter(t=>t!==e);return .1>=removeSlideSizes(t,n)})},clear:function(){f.forEach(e=>e.translate.clear())},loop:function(){f.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,i=t();i!==r.get()&&(n.to(i),r.set(i))})},loopPoints:f}}function SlidesHandler(e,t,n){let r;let i=!1;return{init:function(o){n&&(r=new MutationObserver(e=>{!i&&(isBoolean(n)||n(o,e))&&defaultCallback(e)})).observe(e,{childList:!0});function defaultCallback(e){for(let n of e)if("childList"===n.type){o.reInit(),t.emit("slidesChanged");break}}},destroy:function(){r&&r.disconnect(),i=!0}}}function SlidesInView(e,t,n,r){let i;let o={},a=null,u=null,s=!1;function createInViewList(e){return objectKeys(o).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:i}=o[r];return(e&&i||!e&&!i)&&t.push(r),t},[])}return{init:function(){i=new IntersectionObserver(e=>{s||(e.forEach(e=>{let n=t.indexOf(e.target);o[n]=e}),a=null,u=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:r}),t.forEach(e=>i.observe(e))},destroy:function(){i&&i.disconnect(),s=!0},get:function(e=!0){if(e&&a)return a;if(!e&&u)return u;let t=createInViewList(e);return e&&(a=t),e||(u=t),t}}}function SlideSizes(e,t,n,r,i,o){let{measureSize:a,startEdge:u,endEdge:s}=e,l=n[0]&&i,c=measureStartGap(),d=measureEndGap(),f=n.map(a),m=measureWithGaps();function measureStartGap(){if(!l)return 0;let e=n[0];return mathAbs(t[u]-e[u])}function measureEndGap(){if(!l)return 0;let e=o.getComputedStyle(arrayLast(r));return parseFloat(e.getPropertyValue(`margin-${s}`))}function measureWithGaps(){return n.map((e,t,n)=>{let r=t===arrayLastIndex(n);return t?r?f[t]+d:n[t+1][u]-e[u]:f[t]+c}).map(mathAbs)}return{slideSizes:f,slideSizesWithGaps:m,startGap:c,endGap:d}}function SlidesToScroll(e,t,n,r,i,o,a,u,s){let{startEdge:l,endEdge:c}=e,d=isNumber(r);function byNumber(e,t){return arrayKeys(e).filter(e=>e%t==0).map(n=>e.slice(n,n+t))}function bySize(e){return e.length?arrayKeys(e).reduce((r,d)=>{let f=arrayLast(r)||0,m=d===arrayLastIndex(e),p=o[l]-a[f][l],g=o[l]-a[d][c],b=i||0!==f?0:t.apply(u),S=!i&&m?t.apply(s):0,h=mathAbs(g-S-(p+b));return h>n&&r.push(d),m&&r.push(e.length),r},[]).map((t,n,r)=>{let i=Math.max(r[n-1]||0);return e.slice(i,t)}):[]}return{groupSlides:function(e){return d?byNumber(e,r):bySize(e)}}}function Engine(e,t,n,r,i,o,a,u){let{align:s,axis:l,direction:c,startIndex:d,loop:f,duration:m,dragFree:p,dragThreshold:g,inViewThreshold:b,slidesToScroll:S,skipSnaps:h,containScroll:v,watchResize:E,watchSlides:A,watchDrag:L}=o,w=t.getBoundingClientRect(),O=n.map(e=>e.getBoundingClientRect()),D=Direction(c),T=Axis(l,c),P=T.measureSize(w),I=PercentOfView(P),C=Alignment(s,P),k=!f&&!!v,N=f||!!v,{slideSizes:M,slideSizesWithGaps:F,startGap:j,endGap:z}=SlideSizes(T,w,O,n,N,i),_=SlidesToScroll(T,D,P,S,f,w,O,j,z),{snaps:B,snapsAligned:R}=ScrollSnaps(T,C,w,O,_),H=-arrayLast(B)+arrayLast(F),{snapsContained:V,scrollContainLimit:K}=ScrollContain(P,H,R,v),U=k?V:R,{limit:G}=ScrollLimit(H,U,f),$=Counter(arrayLastIndex(U),d,f),W=$.clone(),J=arrayKeys(n),update=({dragHandler:e,scrollBody:t,scrollBounds:n,eventHandler:r,animation:i,options:{loop:o}})=>{let a=e.pointerDown();o||n.constrain(a);let u=t.seek().settled();u&&!a&&(i.stop(),r.emit("settle")),u||r.emit("scroll")},render=({scrollBody:e,translate:t,location:n,offsetLocation:r,scrollLooper:i,slideLooper:o,options:{loop:a}},u)=>{let s=e.velocity();r.set(n.get()-s+s*u),a&&(i.loop(e.direction()),o.loop()),t.to(r.get())},X={start:()=>u.start(el),stop:()=>u.stop(el),update:()=>update(el),render:e=>render(el,e)},Y=U[$.get()],Q=Vector1D(Y),Z=Vector1D(Y),ee=Vector1D(Y),et=ScrollBody(Q,ee,m,.68),en=ScrollTarget(f,U,H,G,ee),er=ScrollTo(X,$,W,en,et,ee,a),ei=ScrollProgress(G),eo=EventStore(),ea=SlidesInView(t,n,a,b),{slideRegistry:eu}=SlideRegistry(P,H,k,K,_,J),es=SlideFocus(e,n,eu,er,et,eo),el={ownerDocument:r,ownerWindow:i,eventHandler:a,containerRect:w,slideRects:O,animation:X,axis:T,direction:D,dragHandler:DragHandler(T,D,e,r,i,ee,DragTracker(T,i),Q,X,er,et,en,$,a,I,p,g,h,.68,L),eventStore:eo,percentOfView:I,index:$,indexPrevious:W,limit:G,location:Q,offsetLocation:Z,options:o,resizeHandler:ResizeHandler(t,a,i,n,T,E),scrollBody:et,scrollBounds:ScrollBounds(G,Q,ee,et,I),scrollLooper:ScrollLooper(H,G,Z,[Q,Z,ee]),scrollProgress:ei,scrollSnapList:U.map(ei.get),scrollSnaps:U,scrollTarget:en,scrollTo:er,slideLooper:SlideLooper(T,D,P,H,M,F,B,U,Z,n),slideFocus:es,slidesHandler:SlidesHandler(t,a,A),slidesInView:ea,slideIndexes:J,slideRegistry:eu,slidesToScroll:_,target:ee,translate:Translate(T,D,t)};return el}function Animations(e){let t=1e3/60,n=[],r=null,i=0,o=0;function animate(a){r||(r=a);let u=a-r;for(r=a,i+=u;i>=t;)n.forEach(({animation:e})=>e.update()),i-=t;let s=mathAbs(i/t);n.forEach(({animation:e})=>e.render(s)),o&&e.requestAnimationFrame(animate)}return{start:function(t){n.includes(t)||n.push(t),o||(o=e.requestAnimationFrame(animate))},stop:function(t){(n=n.filter(e=>e!==t)).length||(e.cancelAnimationFrame(o),r=null,i=0,o=0)},reset:function(){r=null,i=0},window:e}}function EventHandler(){let e;let t={};function init(t){e=t}function emit(r){return(t[r]||[]).forEach(t=>t(e,r)),n}function on(e,r){return t[e]=(t[e]||[]).concat([r]),n}function off(e,r){return t[e]=(t[e]||[]).filter(e=>e!==r),n}let n={init,emit,off,on};return n}let i={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function OptionsHandler(e){function mergeOptions(e,t){return objectsMergeDeep(e,t||{})}function optionsAtMedia(t){let n=t.breakpoints||{},r=objectKeys(n).filter(t=>e.matchMedia(t).matches).map(e=>n[e]).reduce((e,t)=>mergeOptions(e,t),{});return mergeOptions(t,r)}return{mergeOptions,optionsAtMedia,optionsMediaQueries:function(t){return t.map(e=>objectKeys(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}}}function PluginsHandler(e){let t=[];return{init:function(n,r){return(t=r.filter(({options:t})=>!1!==e.optionsAtMedia(t).active)).forEach(t=>t.init(n,e)),r.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})},destroy:function(){t=t.filter(e=>e.destroy())}}}function EmblaCarousel(e,t,n){let r,o,a,u;let s=e.ownerDocument,l=s.defaultView,c=OptionsHandler(l),d=PluginsHandler(c),f=EventStore(),m=EventStore(),p=EventHandler(),{animationRealms:g}=EmblaCarousel,{mergeOptions:b,optionsAtMedia:S,optionsMediaQueries:h}=c,{on:v,off:E,emit:A}=p,L=reActivate,w=!1,O=b(i,EmblaCarousel.globalOptions),D=b(O),T=[];function storeElements(){let{container:t,slides:n}=D,r=isString(t)?e.querySelector(t):t;a=r||e.children[0];let i=isString(n)?a.querySelectorAll(n):n;u=[].slice.call(i||a.children)}function createEngine(t,n){let r=Engine(e,a,u,s,l,t,p,n);if(t.loop&&!r.slideLooper.canLoop()){let e=Object.assign({},t,{loop:!1});return createEngine(e,n)}return r}function activate(e,t){if(w)return;let n=g.find(e=>e.window===l),i=n||Animations(l);n||g.push(i),D=S(O=b(O,e)),T=t||T,storeElements(),r=createEngine(D,i),h([O,...T.map(({options:e})=>e)]).forEach(e=>f.add(e,"change",reActivate)),D.active&&(r.translate.to(r.location.get()),r.slidesInView.init(),r.slideFocus.init(),r.eventHandler.init(P),r.resizeHandler.init(P),r.slidesHandler.init(P),m.add(s,"visibilitychange",()=>{s.hidden&&i.reset()}),r.options.loop&&r.slideLooper.loop(),a.offsetParent&&u.length&&r.dragHandler.init(P),o=d.init(P,T))}function reActivate(e,t){let n=selectedScrollSnap();deActivate(),activate(b({startIndex:n},e),t),p.emit("reInit")}function deActivate(){r.dragHandler.destroy(),r.animation.stop(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),d.destroy(),f.clear(),m.clear()}function destroy(){w||(w=!0,f.clear(),deActivate(),p.emit("destroy"))}function scrollTo(e,t,n){D.active&&!w&&(r.scrollBody.useBaseFriction().useDuration(t?0:D.duration),r.scrollTo.index(e,n||0))}function scrollNext(e){let t=r.index.add(1).get();scrollTo(t,!0===e,-1)}function scrollPrev(e){let t=r.index.add(-1).get();scrollTo(t,!0===e,1)}function canScrollNext(){let e=r.index.add(1).get();return e!==selectedScrollSnap()}function canScrollPrev(){let e=r.index.add(-1).get();return e!==selectedScrollSnap()}function scrollSnapList(){return r.scrollSnapList}function scrollProgress(){return r.scrollProgress.get(r.location.get())}function selectedScrollSnap(){return r.index.get()}function previousScrollSnap(){return r.indexPrevious.get()}function slidesInView(){return r.slidesInView.get()}function slidesNotInView(){return r.slidesInView.get(!1)}function plugins(){return o}function internalEngine(){return r}function rootNode(){return e}function containerNode(){return a}function slideNodes(){return u}let P={canScrollNext,canScrollPrev,containerNode,internalEngine,destroy,off:E,on:v,emit:A,plugins,previousScrollSnap,reInit:L,rootNode,scrollNext,scrollPrev,scrollProgress,scrollSnapList,scrollTo,selectedScrollSnap,slideNodes,slidesInView,slidesNotInView};return activate(t,n),setTimeout(()=>p.emit("init"),0),P}function useEmblaCarousel(e={},t=[]){let n=(0,r.useRef)(e),i=(0,r.useRef)(t),[o,a]=(0,r.useState)(),[u,s]=(0,r.useState)(),l=(0,r.useCallback)(()=>{o&&o.reInit(n.current,i.current)},[o]);return(0,r.useEffect)(()=>{if(canUseDOM()&&u){EmblaCarousel.globalOptions=useEmblaCarousel.globalOptions;let e=EmblaCarousel(u,n.current,i.current);return a(e),()=>e.destroy()}a(void 0)},[u,a]),(0,r.useEffect)(()=>{areOptionsEqual(n.current,e)||(n.current=e,l())},[e,l]),(0,r.useEffect)(()=>{arePluginsEqual(i.current,t)||(i.current=t,l())},[t,l]),[s,o]}EmblaCarousel.animationRealms=[],EmblaCarousel.globalOptions=void 0,useEmblaCarousel.globalOptions=void 0},30622:function(e,t,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),i=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var r,s={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!u.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:c,props:s,_owner:a.current}}t.jsx=q,t.jsxs=q},57437:function(e,t,n){e.exports=n(30622)}}]);