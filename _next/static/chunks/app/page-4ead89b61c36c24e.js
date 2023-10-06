(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{53010:function(e){"use strict";e.exports=function equal(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;if(Array.isArray(e)){if((r=e.length)!=t.length)return!1;for(n=r;0!=n--;)if(!equal(e[n],t[n]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((r=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(n=r;0!=n--;)if(!Object.prototype.hasOwnProperty.call(t,o[n]))return!1;for(n=r;0!=n--;){var r,n,o,a=o[n];if(!equal(e[a],t[a]))return!1}return!0}return e!=e&&t!=t}},98098:function(e,t,r){Promise.resolve().then(r.bind(r,25260))},25260:function(e,t,r){"use strict";let n,o,a;r.r(t),r.d(t,{default:function(){return Home}});var l=r(57437),i=r(87301),s=r.n(i);function Divider(){return(0,l.jsx)("div",{className:s().divider,children:(0,l.jsx)("svg",{preserveAspectRatio:"none",viewBox:"0 0 1200 120",xmlns:"http://www.w3.org/2000/svg",style:{fill:"#00088b",width:"109%",height:185,transform:"scaleX(-1)"},children:(0,l.jsx)("path",{d:"M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"})})})}var u=r(2265);let c=new Set,d=new WeakMap,f=new WeakMap,p=new WeakMap,h=new WeakMap,g=new WeakMap,m=new WeakMap,b=new WeakMap,y=new WeakSet,v=0,_=0,w="__aa_tgt",j="__aa_del",P="__aa_new";function updatePos(e){clearTimeout(b.get(e));let t=getOptions(e),r=isPlugin(t)?500:t.duration;b.set(e,setTimeout(async()=>{let t=p.get(e);try{await (null==t?void 0:t.finished),d.set(e,getCoords(e)),function(e){let t=h.get(e);null==t||t.disconnect();let r=d.get(e),o=0;r||(r=getCoords(e),d.set(e,r));let{offsetWidth:a,offsetHeight:l}=n,i=[r.top-5,a-(r.left+5+r.width),l-(r.top+5+r.height),r.left-5],s=i.map(e=>`${-1*Math.floor(e)}px`).join(" "),u=new IntersectionObserver(()=>{++o>1&&updatePos(e)},{root:n,threshold:1,rootMargin:s});u.observe(e),h.set(e,u)}(e)}catch{}},r))}function poll(e){setTimeout(()=>{g.set(e,setInterval(()=>lowPriority(updatePos.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function lowPriority(e){"function"==typeof requestIdleCallback?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}function target(e,t){t||w in e?!t||w in t||Object.defineProperty(t,w,{value:e}):Object.defineProperty(e,w,{value:e})}function raw(e){return Number(e.replace(/[^0-9.\-]/g,""))}function getCoords(e){let t=e.getBoundingClientRect(),{x:r,y:n}=function(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}(e);return{top:t.top+n,left:t.left+r,width:t.width,height:t.height}}function getTransitionSizes(e,t,r){let n=t.width,o=t.height,a=r.width,l=r.height,i=getComputedStyle(e),s=i.getPropertyValue("box-sizing");if("content-box"===s){let e=raw(i.paddingTop)+raw(i.paddingBottom)+raw(i.borderTopWidth)+raw(i.borderBottomWidth),t=raw(i.paddingLeft)+raw(i.paddingRight)+raw(i.borderRightWidth)+raw(i.borderLeftWidth);n-=t,a-=t,o-=e,l-=e}return[n,a,o,l].map(Math.round)}function getOptions(e){return w in e&&m.has(e[w])?m.get(e[w]):{duration:250,easing:"ease-in-out"}}function getTarget(e){if(w in e)return e[w]}function isEnabled(e){let t=getTarget(e);return!!t&&y.has(t)}function forEach(e,...t){t.forEach(t=>t(e,m.has(e)));for(let r=0;r<e.children.length;r++){let n=e.children.item(r);n&&t.forEach(e=>e(n,m.has(n)))}}function getPluginTuple(e){return Array.isArray(e)?e:[e]}function isPlugin(e){return"function"==typeof e}function add(e){let t;P in e&&delete e[P];let r=getCoords(e);d.set(e,r);let n=getOptions(e);if(isEnabled(e)){if("function"!=typeof n)t=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*n.duration,easing:"ease-in"});else{let[o]=getPluginTuple(n(e,"add",r));(t=new Animation(o)).play()}p.set(e,t),t.addEventListener("finish",updatePos.bind(null,e))}}function cleanUp(e,t){var r;e.remove(),d.delete(e),f.delete(e),p.delete(e),null===(r=h.get(e))||void 0===r||r.disconnect(),setTimeout(()=>{if(j in e&&delete e[j],Object.defineProperty(e,P,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(let r in t)e.style[r]=""},0)}function rounded(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return parseFloat(e.toFixed(t))}function solveEquation(e){let{maxFont:t,maxScreen:r,minFont:n,minScreen:o}=e,a=(t-n)/(r-o);return{slope:a,yIntersection:-1*o*a+n}}"undefined"!=typeof window&&(n=document.documentElement,o=new MutationObserver(e=>{let t=function(e){let t=e.reduce((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)],[]),r=t.every(e=>"#comment"===e.nodeName);return!r&&e.reduce((e,t)=>{if(!1===e)return!1;if(t.target instanceof Element){if(target(t.target),!e.has(t.target)){e.add(t.target);for(let r=0;r<t.target.children.length;r++){let n=t.target.children.item(r);if(n){if(j in n)return!1;target(t.target,n),e.add(n)}}}if(t.removedNodes.length)for(let r=0;r<t.removedNodes.length;r++){let n=t.removedNodes[r];if(j in n)return!1;n instanceof Element&&(e.add(n),target(t.target,n),f.set(n,[t.previousSibling,t.nextSibling]))}}return e},new Set)}(e);t&&t.forEach(e=>(function(e){var t;let r=e.isConnected,o=d.has(e);r&&f.has(e)&&f.delete(e),p.has(e)&&(null===(t=p.get(e))||void 0===t||t.cancel()),P in e?add(e):o&&r?function(e){let t;let r=d.get(e),n=getCoords(e);if(!isEnabled(e))return d.set(e,n);if(!r)return;let o=getOptions(e);if("function"!=typeof o){let a=r.left-n.left,l=r.top-n.top,[i,s,u,c]=getTransitionSizes(e,r,n),d={transform:`translate(${a}px, ${l}px)`},f={transform:"translate(0, 0)"};i!==s&&(d.width=`${i}px`,f.width=`${s}px`),u!==c&&(d.height=`${u}px`,f.height=`${c}px`),t=e.animate([d,f],{duration:o.duration,easing:o.easing})}else{let[a]=getPluginTuple(o(e,"remain",r,n));(t=new Animation(a)).play()}p.set(e,t),d.set(e,n),t.addEventListener("finish",updatePos.bind(null,e))}(e):o&&!r?function(e){var t;let r;if(!f.has(e)||!d.has(e))return;let[o,a]=f.get(e);Object.defineProperty(e,j,{value:!0,configurable:!0});let l=window.scrollX,i=window.scrollY;if(a&&a.parentNode&&a.parentNode instanceof Element?a.parentNode.insertBefore(e,a):o&&o.parentNode?o.parentNode.appendChild(e):null===(t=getTarget(e))||void 0===t||t.appendChild(e),!isEnabled(e))return cleanUp(e);let[s,u,c,h]=function(e){let t=d.get(e),[r,,n]=getTransitionSizes(e,t,getCoords(e)),o=e.parentElement;for(;o&&("static"===getComputedStyle(o).position||o instanceof HTMLBodyElement);)o=o.parentElement;o||(o=document.body);let a=getComputedStyle(o),l=d.get(o)||getCoords(o),i=Math.round(t.top-l.top)-raw(a.borderTopWidth),s=Math.round(t.left-l.left)-raw(a.borderLeftWidth);return[i,s,r,n]}(e),g=getOptions(e),m=d.get(e);(l!==v||i!==_)&&function(e,t,r,o){let a=v-t,l=_-r,i=document.documentElement.style.scrollBehavior,s=getComputedStyle(n).scrollBehavior;if("smooth"===s&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+a,window.scrollY+l),!e.parentElement)return;let u=e.parentElement,c=u.clientHeight,d=u.clientWidth,f=performance.now();!function smoothScroll(){requestAnimationFrame(()=>{if(!isPlugin(o)){let e=c-u.clientHeight,t=d-u.clientWidth;f+o.duration>performance.now()?(window.scrollTo({left:window.scrollX-t,top:window.scrollY-e}),c=u.clientHeight,d=u.clientWidth,smoothScroll()):document.documentElement.style.scrollBehavior=i}})}()}(e,l,i,g);let b={position:"absolute",top:`${s}px`,left:`${u}px`,width:`${c}px`,height:`${h}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(isPlugin(g)){let[t,n]=getPluginTuple(g(e,"remove",m));(null==n?void 0:n.styleReset)!==!1&&(b=(null==n?void 0:n.styleReset)||b,Object.assign(e.style,b)),(r=new Animation(t)).play()}else Object.assign(e.style,b),r=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:g.duration,easing:"ease-out"});p.set(e,r),r.addEventListener("finish",cleanUp.bind(null,e,b))}(e):add(e)})(e))}),a=new ResizeObserver(e=>{e.forEach(e=>{e.target===n&&(clearTimeout(b.get(n)),b.set(n,setTimeout(()=>{c.forEach(e=>forEach(e,e=>lowPriority(()=>updatePos(e))))},100))),d.has(e.target)&&updatePos(e.target)})}),window.addEventListener("scroll",()=>{_=window.scrollY,v=window.scrollX}),a.observe(n));var O=r(87185),x=r(63085),E=r(29854),S=r(88893),k=r(17099),C=r(53010);function filterErrors(e){return null===e||"object"!=typeof e?{}:Object.keys(e).reduce((t,r)=>{let n=e[r];return null!=n&&!1!==n&&(t[r]=n),t},{})}var N=Object.defineProperty,V=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__spreadValues=(e,t)=>{for(var r in t||(t={}))M.call(t,r)&&__defNormalProp(e,r,t[r]);if(V)for(var r of V(t))T.call(t,r)&&__defNormalProp(e,r,t[r]);return e};function clearListState(e,t){if(null===t||"object"!=typeof t)return{};let r=__spreadValues({},t);return Object.keys(t).forEach(t=>{t.includes(`${String(e)}.`)&&delete r[t]}),r}function shouldValidateOnChange(e,t){return!!t&&("boolean"==typeof t?t:!!Array.isArray(t)&&t.includes(e.replace(/[.][0-9]/g,".__MANTINE_FORM_INDEX__")))}function set(e,t,r){"object"==typeof r.value&&(r.value=klona(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function klona(e){if("object"!=typeof e)return e;var t,r,n,o=0,a=Object.prototype.toString.call(e);if("[object Object]"===a?n=Object.create(e.__proto__||null):"[object Array]"===a?n=Array(e.length):"[object Set]"===a?(n=new Set,e.forEach(function(e){n.add(klona(e))})):"[object Map]"===a?(n=new Map,e.forEach(function(e,t){n.set(klona(t),klona(e))})):"[object Date]"===a?n=new Date(+e):"[object RegExp]"===a?n=new RegExp(e.source,e.flags):"[object DataView]"===a?n=new e.constructor(klona(e.buffer)):"[object ArrayBuffer]"===a?n=e.slice(0):"Array]"===a.slice(-6)&&(n=new e.constructor(e)),n){for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)set(n,r[o],Object.getOwnPropertyDescriptor(e,r[o]));for(o=0,r=Object.getOwnPropertyNames(e);o<r.length;o++)Object.hasOwnProperty.call(n,t=r[o])&&n[t]===e[t]||set(n,t,Object.getOwnPropertyDescriptor(e,t))}return n||e}function getSplittedPath(e){return"string"!=typeof e?[]:e.split(".")}function setPath(e,t,r){let n=getSplittedPath(e);if(0===n.length)return r;let o=klona(r);if(1===n.length)return o[n[0]]=t,o;let a=o[n[0]];for(let e=1;e<n.length-1;e+=1){if(void 0===a)return o;a=a[n[e]]}return a[n[n.length-1]]=t,o}function getPath(e,t){let r=getSplittedPath(e);if(0===r.length||"object"!=typeof t||null===t)return;let n=t[r[0]];for(let e=1;e<r.length&&void 0!==n;e+=1)n=n[r[e]];return n}function getValidationResults(e){let t=filterErrors(e);return{hasErrors:Object.keys(t).length>0,errors:t}}function validateValues(e,t){return"function"==typeof e?getValidationResults(e(t)):getValidationResults(function validateRulesRecord(e,t,r="",n={}){return"object"!=typeof e||null===e?n:Object.keys(e).reduce((n,o)=>{let a=e[o],l=`${""===r?"":`${r}.`}${o}`,i=getPath(l,t),s=!1;return"function"==typeof a&&(n[l]=a(i,t,l)),"object"==typeof a&&Array.isArray(i)&&(s=!0,i.forEach((e,r)=>validateRulesRecord(a,t,`${l}.${r}`,n))),"object"!=typeof a||"object"!=typeof i||null===i||s||validateRulesRecord(a,t,l,n),n},n)}(e,t))}function validateFieldValue(e,t,r){if("string"!=typeof e)return{hasError:!1,error:null};let n=validateValues(t,r),o=Object.keys(n.errors).find(t=>e.split(".").every((e,r)=>e===t.split(".")[r]));return{hasError:!!o,error:o?n.errors[o]:null}}var I=Object.defineProperty,A=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,reorder_errors_defNormalProp=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,reorder_errors_spreadValues=(e,t)=>{for(var r in t||(t={}))$.call(t,r)&&reorder_errors_defNormalProp(e,r,t[r]);if(A)for(var r of A(t))F.call(t,r)&&reorder_errors_defNormalProp(e,r,t[r]);return e},R=Object.defineProperty,W=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,change_error_indices_defNormalProp=(e,t,r)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,change_error_indices_spreadValues=(e,t)=>{for(var r in t||(t={}))L.call(t,r)&&change_error_indices_defNormalProp(e,r,t[r]);if(W)for(var r of W(t))z.call(t,r)&&change_error_indices_defNormalProp(e,r,t[r]);return e};function getIndexFromKeyAfterPath(e,t){let r=e.substring(t.length+1).split(".")[0];return parseInt(r,10)}function changeErrorIndices(e,t,r,n){if(void 0===t)return r;let o=`${String(e)}`,a=r;-1===n&&(a=clearListState(`${o}.${t}`,a));let l=change_error_indices_spreadValues({},a),i=new Set;return Object.entries(a).filter(([e])=>{if(!e.startsWith(`${o}.`))return!1;let r=getIndexFromKeyAfterPath(e,o);return!Number.isNaN(r)&&r>=t}).forEach(([e,t])=>{let r=getIndexFromKeyAfterPath(e,o),a=e.replace(`${o}.${r}`,`${o}.${r+n}`);l[a]=t,i.add(a),i.has(e)||delete l[e]}),l}function getStatus(e,t){let r=Object.keys(e);if("string"==typeof t){let n=r.filter(e=>e.startsWith(`${t}.`));return e[t]||n.some(t=>e[t])||!1}return r.some(t=>e[t])}var B=Object.defineProperty,D=Object.defineProperties,H=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,use_form_defNormalProp=(e,t,r)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,use_form_spreadValues=(e,t)=>{for(var r in t||(t={}))U.call(t,r)&&use_form_defNormalProp(e,r,t[r]);if(X)for(var r of X(t))Y.call(t,r)&&use_form_defNormalProp(e,r,t[r]);return e},__spreadProps=(e,t)=>D(e,H(t)),K=r(20712);function Home(){let[e]=function(e){let[t,r]=(0,u.useState)(),n=(0,u.useCallback)(t=>{t instanceof HTMLElement?r(function(e,t={}){if(o&&a){let r=window.matchMedia("(prefers-reduced-motion: reduce)"),n=r.matches&&!isPlugin(t)&&!t.disrespectUserMotionPreference;n||(y.add(e),"static"===getComputedStyle(e).position&&Object.assign(e.style,{position:"relative"}),forEach(e,updatePos,poll,e=>null==a?void 0:a.observe(e)),isPlugin(t)?m.set(e,t):m.set(e,{duration:250,easing:"ease-in-out",...t}),o.observe(e,{childList:!0}),c.add(e))}return Object.freeze({parent:e,enable:()=>{y.add(e)},disable:()=>{y.delete(e)},isEnabled:()=>y.has(e)})}(t,e)):r(void 0)},[e]),l=(0,u.useCallback)(e=>{t&&(e?t.enable():t.disable())},[t]);return[n,l]}(),t=(0,K.V)({timeout:1e3}),[r,n]=(0,u.useState)(0),[i,s]=(0,u.useState)(null),d=function({initialValues:e={},initialErrors:t={},initialDirty:r={},initialTouched:n={},clearInputErrorOnChange:o=!0,validateInputOnChange:a=!1,validateInputOnBlur:l=!1,transformValues:i=e=>e,validate:s}={}){let[c,d]=(0,u.useState)(n),[f,p]=(0,u.useState)(r),[h,g]=(0,u.useState)(e),[m,b]=(0,u.useState)(filterErrors(t)),y=(0,u.useRef)(e),setValuesSnapshot=e=>{y.current=e},v=(0,u.useCallback)(()=>d({}),[]),_=(0,u.useCallback)(e=>b(t=>filterErrors("function"==typeof e?e(t):e)),[]),w=(0,u.useCallback)(()=>b({}),[]),j=(0,u.useCallback)(()=>{g(e),w(),setValuesSnapshot(e),p({}),v()},[]),P=(0,u.useCallback)((e,t)=>_(r=>__spreadProps(use_form_spreadValues({},r),{[e]:t})),[]),O=(0,u.useCallback)(e=>_(t=>{if("string"!=typeof e)return t;let r=use_form_spreadValues({},t);return delete r[e],r}),[]),x=(0,u.useCallback)(e=>p(t=>{if("string"!=typeof e)return t;let r=clearListState(e,t);return delete r[e],r}),[]),E=(0,u.useCallback)((e,t)=>{let r=shouldValidateOnChange(e,a);x(e),d(t=>__spreadProps(use_form_spreadValues({},t),{[e]:!0})),g(n=>{let o=setPath(e,t,n);if(r){let t=validateFieldValue(e,s,o);t.hasError?P(e,t.error):O(e)}return o}),!r&&o&&P(e,null)},[]),S=(0,u.useCallback)(e=>{g(t=>{let r="function"==typeof e?e(t):e;return use_form_spreadValues(use_form_spreadValues({},t),r)}),o&&w()},[]),k=(0,u.useCallback)((e,t)=>{x(e),g(r=>(function(e,{from:t,to:r},n){let o=getPath(e,n);if(!Array.isArray(o))return n;let a=[...o],l=o[t];return a.splice(t,1),a.splice(r,0,l),setPath(e,a,n)})(e,t,r)),b(r=>(function(e,{from:t,to:r},n){let o=`${e}.${t}`,a=`${e}.${r}`,l=reorder_errors_spreadValues({},n);return Object.keys(n).every(e=>{let t,r;if(e.startsWith(o)&&(t=e,r=e.replace(o,a)),e.startsWith(a)&&(t=e.replace(a,o),r=e),t&&r){let e=l[t],n=l[r];return void 0===n?delete l[t]:l[t]=n,void 0===e?delete l[r]:l[r]=e,!1}return!0}),l})(e,t,r))},[]),N=(0,u.useCallback)((e,t)=>{x(e),g(r=>(function(e,t,r){let n=getPath(e,r);return Array.isArray(n)?setPath(e,n.filter((e,r)=>r!==t),r):r})(e,t,r)),b(r=>changeErrorIndices(e,t,r,-1))},[]),V=(0,u.useCallback)((e,t,r)=>{x(e),g(n=>(function(e,t,r,n){let o=getPath(e,n);if(!Array.isArray(o))return n;let a=[...o];return a.splice("number"==typeof r?r:a.length,0,t),setPath(e,a,n)})(e,t,r,n)),b(t=>changeErrorIndices(e,r,t,1))},[]),M=(0,u.useCallback)(()=>{let e=validateValues(s,h);return b(e.errors),e},[h,s]),T=(0,u.useCallback)(e=>{let t=validateFieldValue(e,s,h);return t.hasError?P(e,t.error):O(e),t},[h,s]),I=(0,u.useCallback)(e=>{e.preventDefault(),j()},[]),A=(0,u.useCallback)(e=>getStatus(c,e),[c]),$=(0,u.useCallback)(e=>e?!validateFieldValue(e,s,h).hasError:!validateValues(s,h).hasErrors,[h,s]);return{values:h,errors:m,setValues:S,setInitialValues:setValuesSnapshot,setErrors:_,setFieldValue:E,setFieldError:P,clearFieldError:O,clearErrors:w,reset:j,validate:M,validateField:T,reorderListItem:k,removeListItem:N,insertListItem:V,getInputProps:(e,{type:t="input",withError:r=!0,withFocus:n=!0}={})=>{var o;let a=(o=t=>E(e,t),e=>{if(e){if("function"==typeof e)o(e);else if("object"==typeof e&&"nativeEvent"in e){let{currentTarget:t}=e;t instanceof HTMLInputElement?"checkbox"===t.type?o(t.checked):o(t.value):(t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)&&o(t.value)}else o(e)}else o(e)}),i={onChange:a};return r&&(i.error=m[e]),"checkbox"===t?i.checked=getPath(e,h):i.value=getPath(e,h),n&&(i.onFocus=()=>d(t=>__spreadProps(use_form_spreadValues({},t),{[e]:!0})),i.onBlur=()=>{if(shouldValidateOnChange(e,l)){let t=validateFieldValue(e,s,h);t.hasError?P(e,t.error):O(e)}}),i},onSubmit:(e,t)=>r=>{null==r||r.preventDefault();let n=M();n.hasErrors?null==t||t(n.errors,h,r):null==e||e(i(h),r)},onReset:I,isDirty:e=>{if(e){let t=getPath(e,f);if("boolean"==typeof t)return t;let r=getPath(e,h),n=getPath(e,y.current);return!C(r,n)}let t=Object.keys(f).length>0;return t?getStatus(f):!C(h,y.current)},isTouched:A,setTouched:d,setDirty:p,resetTouched:v,resetDirty:e=>{let t=e?use_form_spreadValues(use_form_spreadValues({},h),e):h;setValuesSnapshot(t),p({})},isValid:$,getTransformedValues:e=>i(e||h)}}({initialValues:{minScreen:375,minFont:16,maxScreen:1440,maxFont:18},validate:{minScreen:e=>e<0?"Must be greater than 0":null,minFont:e=>e<0?"Must be greater than 0":null,maxScreen:e=>e<0?"Must be greater than 0":null,maxFont:e=>e<0?"Must be greater than 0":null}}),f=function(e){if(!e)return"";let{slope:t,yIntersection:r}=solveEquation(e);return"clamp(".concat(e.minFont/16,"rem, ").concat(rounded(r/16),"rem + ").concat(rounded(100*t),"vw, ").concat(e.maxFont/16,"rem)")}(i);return(0,l.jsxs)("main",{children:[(0,l.jsx)(Divider,{}),(0,l.jsxs)(O.Container,{ref:e,className:"main",children:[(0,l.jsx)("h1",{children:"Fluidity"}),(0,l.jsx)(x.Paper,{shadow:"lg",radius:"lg",p:"xl",children:(0,l.jsxs)("form",{className:"form",onSubmit:d.onSubmit(e=>s(e)),children:[(0,l.jsxs)("div",{className:"inputWrapper",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Min Viewport"}),(0,l.jsxs)("div",{className:"inputs",children:[(0,l.jsx)(E.NumberInput,{label:"Font size (px)",variant:"unstyled",size:"lg",...d.getInputProps("minFont")}),(0,l.jsx)(E.NumberInput,{label:"Width (px)",variant:"unstyled",size:"lg",...d.getInputProps("minScreen")})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Max Viewport"}),(0,l.jsxs)("div",{className:"inputs",children:[(0,l.jsx)(E.NumberInput,{label:"Font size (px)",variant:"unstyled",size:"lg",...d.getInputProps("maxFont")}),(0,l.jsx)(E.NumberInput,{label:"Width (px)",variant:"unstyled",size:"lg",...d.getInputProps("maxScreen")})]})]})]}),(0,l.jsx)(S.Group,{justify:"flex-end",mt:"md",children:(0,l.jsx)(k.Button,{type:"submit",children:"Submit"})})]})}),i&&(0,l.jsxs)(x.Paper,{shadow:"lg",radius:"lg",p:"xl",mt:"xl",children:[(0,l.jsxs)("h2",{className:"fontSizeAt",children:["What is the font size at",(0,l.jsx)(E.NumberInput,{min:i.minScreen,max:i.maxScreen,defaultValue:0,suffix:"px",onChange:e=>n(function(e,t){let{slope:r,yIntersection:n}=solveEquation(t);return Math.min(Math.max(r*e+n,t.minFont),t.maxFont)}(Number(e),i)),variant:"unstyled"}),"screen?"]}),(0,l.jsx)("p",{children:r})]}),(0,l.jsxs)(x.Paper,{shadow:"lg",radius:"lg",p:"xl",mt:"xl",children:[(0,l.jsx)(k.Button,{color:t.copied?"teal":"blue",onClick:()=>t.copy("--fluid-scale: ".concat(f,";")),children:t.copied?"Copied":"Copy"}),(0,l.jsxs)("pre",{children:[":root ","{",(0,l.jsx)("br",{}),"  ","--fluid-scale: ",f,";",(0,l.jsx)("br",{}),"}"]})]})]})]})}r(65394)},65394:function(){},87301:function(e){e.exports={divider:"divider_divider__WRX1g"}},30622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var n,s={},u=null,c=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!i.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:c,props:s,_owner:l.current}}t.jsx=q,t.jsxs=q},57437:function(e,t,r){"use strict";e.exports=r(30622)}},function(e){e.O(0,[954,971,864,744],function(){return e(e.s=98098)}),_N_E=e.O()}]);