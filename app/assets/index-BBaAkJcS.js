(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Uv={exports:{}},zu={},Fv={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),eA=Symbol.for("react.portal"),tA=Symbol.for("react.fragment"),nA=Symbol.for("react.strict_mode"),rA=Symbol.for("react.profiler"),iA=Symbol.for("react.provider"),sA=Symbol.for("react.context"),oA=Symbol.for("react.forward_ref"),aA=Symbol.for("react.suspense"),lA=Symbol.for("react.memo"),uA=Symbol.for("react.lazy"),Rg=Symbol.iterator;function cA(t){return t===null||typeof t!="object"?null:(t=Rg&&t[Rg]||t["@@iterator"],typeof t=="function"?t:null)}var jv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bv=Object.assign,zv={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=zv,this.updater=n||jv}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $v(){}$v.prototype=Ns.prototype;function _f(t,e,n){this.props=t,this.context=e,this.refs=zv,this.updater=n||jv}var vf=_f.prototype=new $v;vf.constructor=_f;Bv(vf,Ns.prototype);vf.isPureReactComponent=!0;var Cg=Array.isArray,qv=Object.prototype.hasOwnProperty,wf={current:null},Hv={key:!0,ref:!0,__self:!0,__source:!0};function Wv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qv.call(e,r)&&!Hv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ma,type:t,key:s,ref:o,props:i,_owner:wf.current}}function hA(t,e){return{$$typeof:ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===ma}function dA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pg=/\/+/g;function ih(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dA(""+t.key):e.toString(36)}function _l(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ma:case eA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ih(o,0):r,Cg(i)?(n="",t!=null&&(n=t.replace(Pg,"$&/")+"/"),_l(i,e,n,"",function(c){return c})):i!=null&&(Ef(i)&&(i=hA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ih(s,l);o+=_l(s,e,n,u,i)}else if(u=cA(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ih(s,l++),o+=_l(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ga(t,e,n){if(t==null)return t;var r=[],i=0;return _l(t,r,"","",function(s){return e.call(n,s,i++)}),r}function fA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wt={current:null},vl={transition:null},pA={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:vl,ReactCurrentOwner:wf};function Gv(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Ga,forEach:function(t,e,n){Ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ga(t,function(){e++}),e},toArray:function(t){return Ga(t,function(e){return e})||[]},only:function(t){if(!Ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Ns;re.Fragment=tA;re.Profiler=rA;re.PureComponent=_f;re.StrictMode=nA;re.Suspense=aA;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pA;re.act=Gv;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Bv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)qv.call(e,u)&&!Hv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ma,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:sA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iA,_context:t},t.Consumer=t};re.createElement=Wv;re.createFactory=function(t){var e=Wv.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:oA,render:t}};re.isValidElement=Ef;re.lazy=function(t){return{$$typeof:uA,_payload:{_status:-1,_result:t},_init:fA}};re.memo=function(t,e){return{$$typeof:lA,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=vl.transition;vl.transition={};try{t()}finally{vl.transition=e}};re.unstable_act=Gv;re.useCallback=function(t,e){return wt.current.useCallback(t,e)};re.useContext=function(t){return wt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return wt.current.useDeferredValue(t)};re.useEffect=function(t,e){return wt.current.useEffect(t,e)};re.useId=function(){return wt.current.useId()};re.useImperativeHandle=function(t,e,n){return wt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return wt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return wt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return wt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return wt.current.useReducer(t,e,n)};re.useRef=function(t){return wt.current.useRef(t)};re.useState=function(t){return wt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return wt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return wt.current.useTransition()};re.version="18.3.1";Fv.exports=re;var X=Fv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mA=X,gA=Symbol.for("react.element"),yA=Symbol.for("react.fragment"),_A=Object.prototype.hasOwnProperty,vA=mA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wA={key:!0,ref:!0,__self:!0,__source:!0};function Kv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_A.call(e,r)&&!wA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:gA,type:t,key:s,ref:o,props:i,_owner:vA.current}}zu.Fragment=yA;zu.jsx=Kv;zu.jsxs=Kv;Uv.exports=zu;var A=Uv.exports,Qv={exports:{}},zt={},Xv={exports:{}},Yv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,K){var Z=B.length;B.push(K);e:for(;0<Z;){var Ee=Z-1>>>1,Ne=B[Ee];if(0<i(Ne,K))B[Ee]=K,B[Z]=Ne,Z=Ee;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],Z=B.pop();if(Z!==K){B[0]=Z;e:for(var Ee=0,Ne=B.length,Gr=Ne>>>1;Ee<Gr;){var Ht=2*(Ee+1)-1,Kr=B[Ht],Zt=Ht+1,Jn=B[Zt];if(0>i(Kr,Z))Zt<Ne&&0>i(Jn,Kr)?(B[Ee]=Jn,B[Zt]=Z,Ee=Zt):(B[Ee]=Kr,B[Ht]=Z,Ee=Ht);else if(Zt<Ne&&0>i(Jn,Z))B[Ee]=Jn,B[Zt]=Z,Ee=Zt;else break e}}return K}function i(B,K){var Z=B.sortIndex-K.sortIndex;return Z!==0?Z:B.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,E=!1,P=!1,x=!1,V=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(B){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=B)r(c),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(c)}}function D(B){if(x=!1,k(B),!P)if(n(u)!==null)P=!0,se(M);else{var K=n(c);K!==null&&Oe(D,K.startTime-B)}}function M(B,K){P=!1,x&&(x=!1,T(y),y=-1),E=!0;var Z=m;try{for(k(K),p=n(u);p!==null&&(!(p.expirationTime>K)||B&&!R());){var Ee=p.callback;if(typeof Ee=="function"){p.callback=null,m=p.priorityLevel;var Ne=Ee(p.expirationTime<=K);K=t.unstable_now(),typeof Ne=="function"?p.callback=Ne:p===n(u)&&r(u),k(K)}else r(u);p=n(u)}if(p!==null)var Gr=!0;else{var Ht=n(c);Ht!==null&&Oe(D,Ht.startTime-K),Gr=!1}return Gr}finally{p=null,m=Z,E=!1}}var U=!1,v=null,y=-1,_=5,S=-1;function R(){return!(t.unstable_now()-S<_)}function C(){if(v!==null){var B=t.unstable_now();S=B;var K=!0;try{K=v(!0,B)}finally{K?I():(U=!1,v=null)}}else U=!1}var I;if(typeof w=="function")I=function(){w(C)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ge=fe.port2;fe.port1.onmessage=C,I=function(){ge.postMessage(null)}}else I=function(){V(C,0)};function se(B){v=B,U||(U=!0,I())}function Oe(B,K){y=V(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){P||E||(P=!0,se(M))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var Z=m;m=K;try{return B()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=m;m=B;try{return K()}finally{m=Z}},t.unstable_scheduleCallback=function(B,K,Z){var Ee=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Ee+Z:Ee):Z=Ee,B){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=Z+Ne,B={id:d++,callback:K,priorityLevel:B,startTime:Z,expirationTime:Ne,sortIndex:-1},Z>Ee?(B.sortIndex=Z,e(c,B),n(u)===null&&B===n(c)&&(x?(T(y),y=-1):x=!0,Oe(D,Z-Ee))):(B.sortIndex=Ne,e(u,B),P||E||(P=!0,se(M))),B},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(B){var K=m;return function(){var Z=m;m=K;try{return B.apply(this,arguments)}finally{m=Z}}}})(Yv);Xv.exports=Yv;var EA=Xv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TA=X,jt=EA;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jv=new Set,zo={};function Ai(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for(zo[t]=e,t=0;t<e.length;t++)Jv.add(e[t])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qh=Object.prototype.hasOwnProperty,IA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xg={},Ng={};function SA(t){return Qh.call(Ng,t)?!0:Qh.call(xg,t)?!1:IA.test(t)?Ng[t]=!0:(xg[t]=!0,!1)}function AA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kA(t,e,n,r){if(e===null||typeof e>"u"||AA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new Et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new Et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new Et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new Et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new Et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new Et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new Et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new Et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new Et(t,5,!1,t.toLowerCase(),null,!1,!1)});var Tf=/[\-:]([a-z])/g;function If(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Tf,If);et[e]=new Et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Tf,If);et[e]=new Et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Tf,If);et[e]=new Et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new Et(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new Et(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sf(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kA(e,n,i,r)&&(n=null),r||i===null?SA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kn=TA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),$i=Symbol.for("react.portal"),qi=Symbol.for("react.fragment"),Af=Symbol.for("react.strict_mode"),Xh=Symbol.for("react.profiler"),Zv=Symbol.for("react.provider"),ew=Symbol.for("react.context"),kf=Symbol.for("react.forward_ref"),Yh=Symbol.for("react.suspense"),Jh=Symbol.for("react.suspense_list"),Rf=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),tw=Symbol.for("react.offscreen"),bg=Symbol.iterator;function so(t){return t===null||typeof t!="object"?null:(t=bg&&t[bg]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,sh;function _o(t){if(sh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sh=e&&e[1]||""}return`
`+sh+t}var oh=!1;function ah(t,e){if(!t||oh)return"";oh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{oh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_o(t):""}function RA(t){switch(t.tag){case 5:return _o(t.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return t=ah(t.type,!1),t;case 11:return t=ah(t.type.render,!1),t;case 1:return t=ah(t.type,!0),t;default:return""}}function Zh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qi:return"Fragment";case $i:return"Portal";case Xh:return"Profiler";case Af:return"StrictMode";case Yh:return"Suspense";case Jh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ew:return(t.displayName||"Context")+".Consumer";case Zv:return(t._context.displayName||"Context")+".Provider";case kf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rf:return e=t.displayName||null,e!==null?e:Zh(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return Zh(t(e))}catch{}}return null}function CA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zh(e);case 8:return e===Af?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function PA(t){var e=nw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qa(t){t._valueTracker||(t._valueTracker=PA(t))}function rw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=nw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ed(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iw(t,e){e=e.checked,e!=null&&Sf(t,"checked",e,!1)}function td(t,e){iw(t,e);var n=br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nd(t,e.type,n):e.hasOwnProperty("defaultValue")&&nd(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nd(t,e,n){(e!=="number"||zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vo=Array.isArray;function rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function rd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Og(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(vo(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function sw(t,e){var n=br(e.value),r=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Lg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ow(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function id(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ow(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,aw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xA=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(t){xA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ko[e]=ko[t]})});function lw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ko.hasOwnProperty(t)&&ko[t]?(""+e).trim():e+"px"}function uw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var NA=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sd(t,e){if(e){if(NA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function od(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ad=null;function Cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ld=null,is=null,ss=null;function Mg(t){if(t=_a(t)){if(typeof ld!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Gu(e),ld(t.stateNode,t.type,e))}}function cw(t){is?ss?ss.push(t):ss=[t]:is=t}function hw(){if(is){var t=is,e=ss;if(ss=is=null,Mg(t),e)for(t=0;t<e.length;t++)Mg(e[t])}}function dw(t,e){return t(e)}function fw(){}var lh=!1;function pw(t,e,n){if(lh)return t(e,n);lh=!0;try{return dw(t,e,n)}finally{lh=!1,(is!==null||ss!==null)&&(fw(),hw())}}function qo(t,e){var n=t.stateNode;if(n===null)return null;var r=Gu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var ud=!1;if(Fn)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){ud=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{ud=!1}function bA(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ro=!1,$l=null,ql=!1,cd=null,DA={onError:function(t){Ro=!0,$l=t}};function VA(t,e,n,r,i,s,o,l,u){Ro=!1,$l=null,bA.apply(DA,arguments)}function OA(t,e,n,r,i,s,o,l,u){if(VA.apply(this,arguments),Ro){if(Ro){var c=$l;Ro=!1,$l=null}else throw Error(F(198));ql||(ql=!0,cd=c)}}function ki(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ug(t){if(ki(t)!==t)throw Error(F(188))}function LA(t){var e=t.alternate;if(!e){if(e=ki(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ug(i),t;if(s===r)return Ug(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function gw(t){return t=LA(t),t!==null?yw(t):null}function yw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yw(t);if(e!==null)return e;t=t.sibling}return null}var _w=jt.unstable_scheduleCallback,Fg=jt.unstable_cancelCallback,MA=jt.unstable_shouldYield,UA=jt.unstable_requestPaint,De=jt.unstable_now,FA=jt.unstable_getCurrentPriorityLevel,Pf=jt.unstable_ImmediatePriority,vw=jt.unstable_UserBlockingPriority,Hl=jt.unstable_NormalPriority,jA=jt.unstable_LowPriority,ww=jt.unstable_IdlePriority,$u=null,_n=null;function BA(t){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot($u,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:qA,zA=Math.log,$A=Math.LN2;function qA(t){return t>>>=0,t===0?32:31-(zA(t)/$A|0)|0}var Ya=64,Ja=4194304;function wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=wo(l):(s&=o,s!==0&&(r=wo(s)))}else o=n&~i,o!==0?r=wo(o):s!==0&&(r=wo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function HA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function WA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=HA(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function hd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ew(){var t=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),t}function uh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function GA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function xf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function Tw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Iw,Nf,Sw,Aw,kw,dd=!1,Za=[],_r=null,vr=null,wr=null,Ho=new Map,Wo=new Map,ur=[],KA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jg(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(e.pointerId)}}function ao(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_a(e),e!==null&&Nf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function QA(t,e,n,r,i){switch(e){case"focusin":return _r=ao(_r,t,e,n,r,i),!0;case"dragenter":return vr=ao(vr,t,e,n,r,i),!0;case"mouseover":return wr=ao(wr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ho.set(s,ao(Ho.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Wo.set(s,ao(Wo.get(s)||null,t,e,n,r,i)),!0}return!1}function Rw(t){var e=ri(t.target);if(e!==null){var n=ki(e);if(n!==null){if(e=n.tag,e===13){if(e=mw(n),e!==null){t.blockedOn=e,kw(t.priority,function(){Sw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ad=r,n.target.dispatchEvent(r),ad=null}else return e=_a(n),e!==null&&Nf(e),t.blockedOn=n,!1;e.shift()}return!0}function Bg(t,e,n){wl(t)&&n.delete(e)}function XA(){dd=!1,_r!==null&&wl(_r)&&(_r=null),vr!==null&&wl(vr)&&(vr=null),wr!==null&&wl(wr)&&(wr=null),Ho.forEach(Bg),Wo.forEach(Bg)}function lo(t,e){t.blockedOn===e&&(t.blockedOn=null,dd||(dd=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,XA)))}function Go(t){function e(i){return lo(i,t)}if(0<Za.length){lo(Za[0],t);for(var n=1;n<Za.length;n++){var r=Za[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_r!==null&&lo(_r,t),vr!==null&&lo(vr,t),wr!==null&&lo(wr,t),Ho.forEach(e),Wo.forEach(e),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)Rw(n),n.blockedOn===null&&ur.shift()}var os=Kn.ReactCurrentBatchConfig,Gl=!0;function YA(t,e,n,r){var i=ce,s=os.transition;os.transition=null;try{ce=1,bf(t,e,n,r)}finally{ce=i,os.transition=s}}function JA(t,e,n,r){var i=ce,s=os.transition;os.transition=null;try{ce=4,bf(t,e,n,r)}finally{ce=i,os.transition=s}}function bf(t,e,n,r){if(Gl){var i=fd(t,e,n,r);if(i===null)vh(t,e,r,Kl,n),jg(t,r);else if(QA(i,t,e,n,r))r.stopPropagation();else if(jg(t,r),e&4&&-1<KA.indexOf(t)){for(;i!==null;){var s=_a(i);if(s!==null&&Iw(s),s=fd(t,e,n,r),s===null&&vh(t,e,r,Kl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vh(t,e,r,null,n)}}var Kl=null;function fd(t,e,n,r){if(Kl=null,t=Cf(r),t=ri(t),t!==null)if(e=ki(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Kl=t,null}function Cw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FA()){case Pf:return 1;case vw:return 4;case Hl:case jA:return 16;case ww:return 536870912;default:return 16}default:return 16}}var gr=null,Df=null,El=null;function Pw(){if(El)return El;var t,e=Df,n=e.length,r,i="value"in gr?gr.value:gr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return El=i.slice(t,1<r?1-r:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function zg(){return!1}function $t(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?el:zg,this.isPropagationStopped=zg,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vf=$t(bs),ya=Re({},bs,{view:0,detail:0}),ZA=$t(ya),ch,hh,uo,qu=Re({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(ch=t.screenX-uo.screenX,hh=t.screenY-uo.screenY):hh=ch=0,uo=t),ch)},movementY:function(t){return"movementY"in t?t.movementY:hh}}),$g=$t(qu),ek=Re({},qu,{dataTransfer:0}),tk=$t(ek),nk=Re({},ya,{relatedTarget:0}),dh=$t(nk),rk=Re({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),ik=$t(rk),sk=Re({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ok=$t(sk),ak=Re({},bs,{data:0}),qg=$t(ak),lk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ck={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ck[t])?!!e[t]:!1}function Of(){return hk}var dk=Re({},ya,{key:function(t){if(t.key){var e=lk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Of,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fk=$t(dk),pk=Re({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hg=$t(pk),mk=Re({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Of}),gk=$t(mk),yk=Re({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),_k=$t(yk),vk=Re({},qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wk=$t(vk),Ek=[9,13,27,32],Lf=Fn&&"CompositionEvent"in window,Co=null;Fn&&"documentMode"in document&&(Co=document.documentMode);var Tk=Fn&&"TextEvent"in window&&!Co,xw=Fn&&(!Lf||Co&&8<Co&&11>=Co),Wg=" ",Gg=!1;function Nw(t,e){switch(t){case"keyup":return Ek.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hi=!1;function Ik(t,e){switch(t){case"compositionend":return bw(e);case"keypress":return e.which!==32?null:(Gg=!0,Wg);case"textInput":return t=e.data,t===Wg&&Gg?null:t;default:return null}}function Sk(t,e){if(Hi)return t==="compositionend"||!Lf&&Nw(t,e)?(t=Pw(),El=Df=gr=null,Hi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xw&&e.locale!=="ko"?null:e.data;default:return null}}var Ak={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ak[t.type]:e==="textarea"}function Dw(t,e,n,r){cw(r),e=Ql(e,"onChange"),0<e.length&&(n=new Vf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Po=null,Ko=null;function kk(t){qw(t,0)}function Hu(t){var e=Ki(t);if(rw(e))return t}function Rk(t,e){if(t==="change")return e}var Vw=!1;if(Fn){var fh;if(Fn){var ph="oninput"in document;if(!ph){var Qg=document.createElement("div");Qg.setAttribute("oninput","return;"),ph=typeof Qg.oninput=="function"}fh=ph}else fh=!1;Vw=fh&&(!document.documentMode||9<document.documentMode)}function Xg(){Po&&(Po.detachEvent("onpropertychange",Ow),Ko=Po=null)}function Ow(t){if(t.propertyName==="value"&&Hu(Ko)){var e=[];Dw(e,Ko,t,Cf(t)),pw(kk,e)}}function Ck(t,e,n){t==="focusin"?(Xg(),Po=e,Ko=n,Po.attachEvent("onpropertychange",Ow)):t==="focusout"&&Xg()}function Pk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hu(Ko)}function xk(t,e){if(t==="click")return Hu(e)}function Nk(t,e){if(t==="input"||t==="change")return Hu(e)}function bk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:bk;function Qo(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qh.call(e,i)||!un(t[i],e[i]))return!1}return!0}function Yg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jg(t,e){var n=Yg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yg(n)}}function Lw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Lw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mw(){for(var t=window,e=zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zl(t.document)}return e}function Mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Dk(t){var e=Mw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Lw(n.ownerDocument.documentElement,n)){if(r!==null&&Mf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Jg(n,s);var o=Jg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Vk=Fn&&"documentMode"in document&&11>=document.documentMode,Wi=null,pd=null,xo=null,md=!1;function Zg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;md||Wi==null||Wi!==zl(r)||(r=Wi,"selectionStart"in r&&Mf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xo&&Qo(xo,r)||(xo=r,r=Ql(pd,"onSelect"),0<r.length&&(e=new Vf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Wi)))}function tl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Gi={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},mh={},Uw={};Fn&&(Uw=document.createElement("div").style,"AnimationEvent"in window||(delete Gi.animationend.animation,delete Gi.animationiteration.animation,delete Gi.animationstart.animation),"TransitionEvent"in window||delete Gi.transitionend.transition);function Wu(t){if(mh[t])return mh[t];if(!Gi[t])return t;var e=Gi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Uw)return mh[t]=e[n];return t}var Fw=Wu("animationend"),jw=Wu("animationiteration"),Bw=Wu("animationstart"),zw=Wu("transitionend"),$w=new Map,ey="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){$w.set(t,e),Ai(e,[t])}for(var gh=0;gh<ey.length;gh++){var yh=ey[gh],Ok=yh.toLowerCase(),Lk=yh[0].toUpperCase()+yh.slice(1);zr(Ok,"on"+Lk)}zr(Fw,"onAnimationEnd");zr(jw,"onAnimationIteration");zr(Bw,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(zw,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ai("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function ty(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,OA(r,e,void 0,t),t.currentTarget=null}function qw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;ty(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;ty(i,l,c),s=u}}}if(ql)throw t=cd,ql=!1,cd=null,t}function _e(t,e){var n=e[wd];n===void 0&&(n=e[wd]=new Set);var r=t+"__bubble";n.has(r)||(Hw(e,t,2,!1),n.add(r))}function _h(t,e,n){var r=0;e&&(r|=4),Hw(n,t,r,e)}var nl="_reactListening"+Math.random().toString(36).slice(2);function Xo(t){if(!t[nl]){t[nl]=!0,Jv.forEach(function(n){n!=="selectionchange"&&(Mk.has(n)||_h(n,!1,t),_h(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nl]||(e[nl]=!0,_h("selectionchange",!1,e))}}function Hw(t,e,n,r){switch(Cw(e)){case 1:var i=YA;break;case 4:i=JA;break;default:i=bf}n=i.bind(null,e,n,t),i=void 0,!ud||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ri(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}pw(function(){var c=s,d=Cf(n),p=[];e:{var m=$w.get(t);if(m!==void 0){var E=Vf,P=t;switch(t){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":E=fk;break;case"focusin":P="focus",E=dh;break;case"focusout":P="blur",E=dh;break;case"beforeblur":case"afterblur":E=dh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=$g;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=tk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=gk;break;case Fw:case jw:case Bw:E=ik;break;case zw:E=_k;break;case"scroll":E=ZA;break;case"wheel":E=wk;break;case"copy":case"cut":case"paste":E=ok;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Hg}var x=(e&4)!==0,V=!x&&t==="scroll",T=x?m!==null?m+"Capture":null:m;x=[];for(var w=c,k;w!==null;){k=w;var D=k.stateNode;if(k.tag===5&&D!==null&&(k=D,T!==null&&(D=qo(w,T),D!=null&&x.push(Yo(w,D,k)))),V)break;w=w.return}0<x.length&&(m=new E(m,P,null,n,d),p.push({event:m,listeners:x}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==ad&&(P=n.relatedTarget||n.fromElement)&&(ri(P)||P[jn]))break e;if((E||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,E?(P=n.relatedTarget||n.toElement,E=c,P=P?ri(P):null,P!==null&&(V=ki(P),P!==V||P.tag!==5&&P.tag!==6)&&(P=null)):(E=null,P=c),E!==P)){if(x=$g,D="onMouseLeave",T="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(x=Hg,D="onPointerLeave",T="onPointerEnter",w="pointer"),V=E==null?m:Ki(E),k=P==null?m:Ki(P),m=new x(D,w+"leave",E,n,d),m.target=V,m.relatedTarget=k,D=null,ri(d)===c&&(x=new x(T,w+"enter",P,n,d),x.target=k,x.relatedTarget=V,D=x),V=D,E&&P)t:{for(x=E,T=P,w=0,k=x;k;k=Mi(k))w++;for(k=0,D=T;D;D=Mi(D))k++;for(;0<w-k;)x=Mi(x),w--;for(;0<k-w;)T=Mi(T),k--;for(;w--;){if(x===T||T!==null&&x===T.alternate)break t;x=Mi(x),T=Mi(T)}x=null}else x=null;E!==null&&ny(p,m,E,x,!1),P!==null&&V!==null&&ny(p,V,P,x,!0)}}e:{if(m=c?Ki(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var M=Rk;else if(Kg(m))if(Vw)M=Nk;else{M=Pk;var U=Ck}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=xk);if(M&&(M=M(t,c))){Dw(p,M,n,d);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&nd(m,"number",m.value)}switch(U=c?Ki(c):window,t){case"focusin":(Kg(U)||U.contentEditable==="true")&&(Wi=U,pd=c,xo=null);break;case"focusout":xo=pd=Wi=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,Zg(p,n,d);break;case"selectionchange":if(Vk)break;case"keydown":case"keyup":Zg(p,n,d)}var v;if(Lf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Hi?Nw(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(xw&&n.locale!=="ko"&&(Hi||y!=="onCompositionStart"?y==="onCompositionEnd"&&Hi&&(v=Pw()):(gr=d,Df="value"in gr?gr.value:gr.textContent,Hi=!0)),U=Ql(c,y),0<U.length&&(y=new qg(y,t,null,n,d),p.push({event:y,listeners:U}),v?y.data=v:(v=bw(n),v!==null&&(y.data=v)))),(v=Tk?Ik(t,n):Sk(t,n))&&(c=Ql(c,"onBeforeInput"),0<c.length&&(d=new qg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=v))}qw(p,e)})}function Yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qo(t,n),s!=null&&r.unshift(Yo(t,s,i)),s=qo(t,e),s!=null&&r.push(Yo(t,s,i))),t=t.return}return r}function Mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ny(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=qo(n,s),u!=null&&o.unshift(Yo(n,u,l))):i||(u=qo(n,s),u!=null&&o.push(Yo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Uk=/\r\n?/g,Fk=/\u0000|\uFFFD/g;function ry(t){return(typeof t=="string"?t:""+t).replace(Uk,`
`).replace(Fk,"")}function rl(t,e,n){if(e=ry(e),ry(t)!==e&&n)throw Error(F(425))}function Xl(){}var gd=null,yd=null;function _d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vd=typeof setTimeout=="function"?setTimeout:void 0,jk=typeof clearTimeout=="function"?clearTimeout:void 0,iy=typeof Promise=="function"?Promise:void 0,Bk=typeof queueMicrotask=="function"?queueMicrotask:typeof iy<"u"?function(t){return iy.resolve(null).then(t).catch(zk)}:vd;function zk(t){setTimeout(function(){throw t})}function wh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Go(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Go(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),gn="__reactFiber$"+Ds,Jo="__reactProps$"+Ds,jn="__reactContainer$"+Ds,wd="__reactEvents$"+Ds,$k="__reactListeners$"+Ds,qk="__reactHandles$"+Ds;function ri(t){var e=t[gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sy(t);t!==null;){if(n=t[gn])return n;t=sy(t)}return e}t=n,n=t.parentNode}return null}function _a(t){return t=t[gn]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Gu(t){return t[Jo]||null}var Ed=[],Qi=-1;function $r(t){return{current:t}}function ve(t){0>Qi||(t.current=Ed[Qi],Ed[Qi]=null,Qi--)}function me(t,e){Qi++,Ed[Qi]=t.current,t.current=e}var Dr={},ut=$r(Dr),Rt=$r(!1),fi=Dr;function gs(t,e){var n=t.type.contextTypes;if(!n)return Dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function Yl(){ve(Rt),ve(ut)}function oy(t,e,n){if(ut.current!==Dr)throw Error(F(168));me(ut,e),me(Rt,n)}function Ww(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,CA(t)||"Unknown",i));return Re({},n,r)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,fi=ut.current,me(ut,t),me(Rt,Rt.current),!0}function ay(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Ww(t,e,fi),r.__reactInternalMemoizedMergedChildContext=t,ve(Rt),ve(ut),me(ut,t)):ve(Rt),me(Rt,n)}var xn=null,Ku=!1,Eh=!1;function Gw(t){xn===null?xn=[t]:xn.push(t)}function Hk(t){Ku=!0,Gw(t)}function qr(){if(!Eh&&xn!==null){Eh=!0;var t=0,e=ce;try{var n=xn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,Ku=!1}catch(i){throw xn!==null&&(xn=xn.slice(t+1)),_w(Pf,qr),i}finally{ce=e,Eh=!1}}return null}var Xi=[],Yi=0,Zl=null,eu=0,Wt=[],Gt=0,pi=null,bn=1,Dn="";function ei(t,e){Xi[Yi++]=eu,Xi[Yi++]=Zl,Zl=t,eu=e}function Kw(t,e,n){Wt[Gt++]=bn,Wt[Gt++]=Dn,Wt[Gt++]=pi,pi=t;var r=bn;t=Dn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bn=1<<32-on(e)+i|n<<i|r,Dn=s+t}else bn=1<<s|n<<i|r,Dn=t}function Uf(t){t.return!==null&&(ei(t,1),Kw(t,1,0))}function Ff(t){for(;t===Zl;)Zl=Xi[--Yi],Xi[Yi]=null,eu=Xi[--Yi],Xi[Yi]=null;for(;t===pi;)pi=Wt[--Gt],Wt[Gt]=null,Dn=Wt[--Gt],Wt[Gt]=null,bn=Wt[--Gt],Wt[Gt]=null}var Mt=null,Vt=null,Te=!1,rn=null;function Qw(t,e){var n=Kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ly(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mt=t,Vt=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mt=t,Vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pi!==null?{id:bn,overflow:Dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mt=t,Vt=null,!0):!1;default:return!1}}function Td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Id(t){if(Te){var e=Vt;if(e){var n=e;if(!ly(t,e)){if(Td(t))throw Error(F(418));e=Er(n.nextSibling);var r=Mt;e&&ly(t,e)?Qw(r,n):(t.flags=t.flags&-4097|2,Te=!1,Mt=t)}}else{if(Td(t))throw Error(F(418));t.flags=t.flags&-4097|2,Te=!1,Mt=t}}}function uy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mt=t}function il(t){if(t!==Mt)return!1;if(!Te)return uy(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_d(t.type,t.memoizedProps)),e&&(e=Vt)){if(Td(t))throw Xw(),Error(F(418));for(;e;)Qw(t,e),e=Er(e.nextSibling)}if(uy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vt=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vt=null}}else Vt=Mt?Er(t.stateNode.nextSibling):null;return!0}function Xw(){for(var t=Vt;t;)t=Er(t.nextSibling)}function ys(){Vt=Mt=null,Te=!1}function jf(t){rn===null?rn=[t]:rn.push(t)}var Wk=Kn.ReactCurrentBatchConfig;function co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function sl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cy(t){var e=t._init;return e(t._payload)}function Yw(t){function e(T,w){if(t){var k=T.deletions;k===null?(T.deletions=[w],T.flags|=16):k.push(w)}}function n(T,w){if(!t)return null;for(;w!==null;)e(T,w),w=w.sibling;return null}function r(T,w){for(T=new Map;w!==null;)w.key!==null?T.set(w.key,w):T.set(w.index,w),w=w.sibling;return T}function i(T,w){return T=Ar(T,w),T.index=0,T.sibling=null,T}function s(T,w,k){return T.index=k,t?(k=T.alternate,k!==null?(k=k.index,k<w?(T.flags|=2,w):k):(T.flags|=2,w)):(T.flags|=1048576,w)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,w,k,D){return w===null||w.tag!==6?(w=Ch(k,T.mode,D),w.return=T,w):(w=i(w,k),w.return=T,w)}function u(T,w,k,D){var M=k.type;return M===qi?d(T,w,k.props.children,D,k.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ar&&cy(M)===w.type)?(D=i(w,k.props),D.ref=co(T,w,k),D.return=T,D):(D=Pl(k.type,k.key,k.props,null,T.mode,D),D.ref=co(T,w,k),D.return=T,D)}function c(T,w,k,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==k.containerInfo||w.stateNode.implementation!==k.implementation?(w=Ph(k,T.mode,D),w.return=T,w):(w=i(w,k.children||[]),w.return=T,w)}function d(T,w,k,D,M){return w===null||w.tag!==7?(w=ui(k,T.mode,D,M),w.return=T,w):(w=i(w,k),w.return=T,w)}function p(T,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Ch(""+w,T.mode,k),w.return=T,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ka:return k=Pl(w.type,w.key,w.props,null,T.mode,k),k.ref=co(T,null,w),k.return=T,k;case $i:return w=Ph(w,T.mode,k),w.return=T,w;case ar:var D=w._init;return p(T,D(w._payload),k)}if(vo(w)||so(w))return w=ui(w,T.mode,k,null),w.return=T,w;sl(T,w)}return null}function m(T,w,k,D){var M=w!==null?w.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return M!==null?null:l(T,w,""+k,D);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ka:return k.key===M?u(T,w,k,D):null;case $i:return k.key===M?c(T,w,k,D):null;case ar:return M=k._init,m(T,w,M(k._payload),D)}if(vo(k)||so(k))return M!==null?null:d(T,w,k,D,null);sl(T,k)}return null}function E(T,w,k,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return T=T.get(k)||null,l(w,T,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ka:return T=T.get(D.key===null?k:D.key)||null,u(w,T,D,M);case $i:return T=T.get(D.key===null?k:D.key)||null,c(w,T,D,M);case ar:var U=D._init;return E(T,w,k,U(D._payload),M)}if(vo(D)||so(D))return T=T.get(k)||null,d(w,T,D,M,null);sl(w,D)}return null}function P(T,w,k,D){for(var M=null,U=null,v=w,y=w=0,_=null;v!==null&&y<k.length;y++){v.index>y?(_=v,v=null):_=v.sibling;var S=m(T,v,k[y],D);if(S===null){v===null&&(v=_);break}t&&v&&S.alternate===null&&e(T,v),w=s(S,w,y),U===null?M=S:U.sibling=S,U=S,v=_}if(y===k.length)return n(T,v),Te&&ei(T,y),M;if(v===null){for(;y<k.length;y++)v=p(T,k[y],D),v!==null&&(w=s(v,w,y),U===null?M=v:U.sibling=v,U=v);return Te&&ei(T,y),M}for(v=r(T,v);y<k.length;y++)_=E(v,T,y,k[y],D),_!==null&&(t&&_.alternate!==null&&v.delete(_.key===null?y:_.key),w=s(_,w,y),U===null?M=_:U.sibling=_,U=_);return t&&v.forEach(function(R){return e(T,R)}),Te&&ei(T,y),M}function x(T,w,k,D){var M=so(k);if(typeof M!="function")throw Error(F(150));if(k=M.call(k),k==null)throw Error(F(151));for(var U=M=null,v=w,y=w=0,_=null,S=k.next();v!==null&&!S.done;y++,S=k.next()){v.index>y?(_=v,v=null):_=v.sibling;var R=m(T,v,S.value,D);if(R===null){v===null&&(v=_);break}t&&v&&R.alternate===null&&e(T,v),w=s(R,w,y),U===null?M=R:U.sibling=R,U=R,v=_}if(S.done)return n(T,v),Te&&ei(T,y),M;if(v===null){for(;!S.done;y++,S=k.next())S=p(T,S.value,D),S!==null&&(w=s(S,w,y),U===null?M=S:U.sibling=S,U=S);return Te&&ei(T,y),M}for(v=r(T,v);!S.done;y++,S=k.next())S=E(v,T,y,S.value,D),S!==null&&(t&&S.alternate!==null&&v.delete(S.key===null?y:S.key),w=s(S,w,y),U===null?M=S:U.sibling=S,U=S);return t&&v.forEach(function(C){return e(T,C)}),Te&&ei(T,y),M}function V(T,w,k,D){if(typeof k=="object"&&k!==null&&k.type===qi&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Ka:e:{for(var M=k.key,U=w;U!==null;){if(U.key===M){if(M=k.type,M===qi){if(U.tag===7){n(T,U.sibling),w=i(U,k.props.children),w.return=T,T=w;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ar&&cy(M)===U.type){n(T,U.sibling),w=i(U,k.props),w.ref=co(T,U,k),w.return=T,T=w;break e}n(T,U);break}else e(T,U);U=U.sibling}k.type===qi?(w=ui(k.props.children,T.mode,D,k.key),w.return=T,T=w):(D=Pl(k.type,k.key,k.props,null,T.mode,D),D.ref=co(T,w,k),D.return=T,T=D)}return o(T);case $i:e:{for(U=k.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===k.containerInfo&&w.stateNode.implementation===k.implementation){n(T,w.sibling),w=i(w,k.children||[]),w.return=T,T=w;break e}else{n(T,w);break}else e(T,w);w=w.sibling}w=Ph(k,T.mode,D),w.return=T,T=w}return o(T);case ar:return U=k._init,V(T,w,U(k._payload),D)}if(vo(k))return P(T,w,k,D);if(so(k))return x(T,w,k,D);sl(T,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,w!==null&&w.tag===6?(n(T,w.sibling),w=i(w,k),w.return=T,T=w):(n(T,w),w=Ch(k,T.mode,D),w.return=T,T=w),o(T)):n(T,w)}return V}var _s=Yw(!0),Jw=Yw(!1),tu=$r(null),nu=null,Ji=null,Bf=null;function zf(){Bf=Ji=nu=null}function $f(t){var e=tu.current;ve(tu),t._currentValue=e}function Sd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function as(t,e){nu=t,Bf=Ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(At=!0),t.firstContext=null)}function Xt(t){var e=t._currentValue;if(Bf!==t)if(t={context:t,memoizedValue:e,next:null},Ji===null){if(nu===null)throw Error(F(308));Ji=t,nu.dependencies={lanes:0,firstContext:t}}else Ji=Ji.next=t;return e}var ii=null;function qf(t){ii===null?ii=[t]:ii.push(t)}function Zw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,qf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Bn(t,r)}function Bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function Hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Bn(t,n)}return i=r.interleaved,i===null?(e.next=e,qf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Bn(t,n)}function Il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xf(t,n)}}function hy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ru(t,e,n,r){var i=t.updateQueue;lr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,E=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,x=l;switch(m=e,E=n,x.tag){case 1:if(P=x.payload,typeof P=="function"){p=P.call(E,p,m);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=x.payload,m=typeof P=="function"?P.call(E,p,m):P,m==null)break e;p=Re({},p,m);break e;case 2:lr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=E,u=p):d=d.next=E,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gi|=o,t.lanes=o,t.memoizedState=p}}function dy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var va={},vn=$r(va),Zo=$r(va),ea=$r(va);function si(t){if(t===va)throw Error(F(174));return t}function Wf(t,e){switch(me(ea,e),me(Zo,t),me(vn,va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:id(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=id(e,t)}ve(vn),me(vn,e)}function vs(){ve(vn),ve(Zo),ve(ea)}function tE(t){si(ea.current);var e=si(vn.current),n=id(e,t.type);e!==n&&(me(Zo,t),me(vn,n))}function Gf(t){Zo.current===t&&(ve(vn),ve(Zo))}var Se=$r(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Th=[];function Kf(){for(var t=0;t<Th.length;t++)Th[t]._workInProgressVersionPrimary=null;Th.length=0}var Sl=Kn.ReactCurrentDispatcher,Ih=Kn.ReactCurrentBatchConfig,mi=0,ke=null,Be=null,We=null,su=!1,No=!1,ta=0,Gk=0;function rt(){throw Error(F(321))}function Qf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function Xf(t,e,n,r,i,s){if(mi=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sl.current=t===null||t.memoizedState===null?Yk:Jk,t=n(r,i),No){s=0;do{if(No=!1,ta=0,25<=s)throw Error(F(301));s+=1,We=Be=null,e.updateQueue=null,Sl.current=Zk,t=n(r,i)}while(No)}if(Sl.current=ou,e=Be!==null&&Be.next!==null,mi=0,We=Be=ke=null,su=!1,e)throw Error(F(300));return t}function Yf(){var t=ta!==0;return ta=0,t}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?ke.memoizedState=We=t:We=We.next=t,We}function Yt(){if(Be===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=We===null?ke.memoizedState:We.next;if(e!==null)We=e,Be=t;else{if(t===null)throw Error(F(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},We===null?ke.memoizedState=We=t:We=We.next=t}return We}function na(t,e){return typeof e=="function"?e(t):e}function Sh(t){var e=Yt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((mi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ke.lanes|=d,gi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,un(r,e.memoizedState)||(At=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ke.lanes|=s,gi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ah(t){var e=Yt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);un(s,e.memoizedState)||(At=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function nE(){}function rE(t,e){var n=ke,r=Yt(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,At=!0),r=r.queue,Jf(oE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,ra(9,sE.bind(null,n,r,i,e),void 0,null),Ke===null)throw Error(F(349));mi&30||iE(n,e,i)}return i}function iE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sE(t,e,n,r){e.value=n,e.getSnapshot=r,aE(e)&&lE(t)}function oE(t,e,n){return n(function(){aE(e)&&lE(t)})}function aE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function lE(t){var e=Bn(t,1);e!==null&&an(e,t,1,-1)}function fy(t){var e=pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},e.queue=t,t=t.dispatch=Xk.bind(null,ke,t),[e.memoizedState,t]}function ra(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function uE(){return Yt().memoizedState}function Al(t,e,n,r){var i=pn();ke.flags|=t,i.memoizedState=ra(1|e,n,void 0,r===void 0?null:r)}function Qu(t,e,n,r){var i=Yt();r=r===void 0?null:r;var s=void 0;if(Be!==null){var o=Be.memoizedState;if(s=o.destroy,r!==null&&Qf(r,o.deps)){i.memoizedState=ra(e,n,s,r);return}}ke.flags|=t,i.memoizedState=ra(1|e,n,s,r)}function py(t,e){return Al(8390656,8,t,e)}function Jf(t,e){return Qu(2048,8,t,e)}function cE(t,e){return Qu(4,2,t,e)}function hE(t,e){return Qu(4,4,t,e)}function dE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fE(t,e,n){return n=n!=null?n.concat([t]):null,Qu(4,4,dE.bind(null,e,t),n)}function Zf(){}function pE(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function mE(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function gE(t,e,n){return mi&21?(un(n,e)||(n=Ew(),ke.lanes|=n,gi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,At=!0),t.memoizedState=n)}function Kk(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Ih.transition;Ih.transition={};try{t(!1),e()}finally{ce=n,Ih.transition=r}}function yE(){return Yt().memoizedState}function Qk(t,e,n){var r=Sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_E(t))vE(e,n);else if(n=Zw(t,e,n,r),n!==null){var i=yt();an(n,t,r,i),wE(n,e,r)}}function Xk(t,e,n){var r=Sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_E(t))vE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,un(l,o)){var u=e.interleaved;u===null?(i.next=i,qf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Zw(t,e,i,r),n!==null&&(i=yt(),an(n,t,r,i),wE(n,e,r))}}function _E(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function vE(t,e){No=su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xf(t,n)}}var ou={readContext:Xt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},Yk={readContext:Xt,useCallback:function(t,e){return pn().memoizedState=[t,e===void 0?null:e],t},useContext:Xt,useEffect:py,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Al(4194308,4,dE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Al(4194308,4,t,e)},useInsertionEffect:function(t,e){return Al(4,2,t,e)},useMemo:function(t,e){var n=pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Qk.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=pn();return t={current:t},e.memoizedState=t},useState:fy,useDebugValue:Zf,useDeferredValue:function(t){return pn().memoizedState=t},useTransition:function(){var t=fy(!1),e=t[0];return t=Kk.bind(null,t[1]),pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=pn();if(Te){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ke===null)throw Error(F(349));mi&30||iE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,py(oE.bind(null,r,s,t),[t]),r.flags|=2048,ra(9,sE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pn(),e=Ke.identifierPrefix;if(Te){var n=Dn,r=bn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Gk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Jk={readContext:Xt,useCallback:pE,useContext:Xt,useEffect:Jf,useImperativeHandle:fE,useInsertionEffect:cE,useLayoutEffect:hE,useMemo:mE,useReducer:Sh,useRef:uE,useState:function(){return Sh(na)},useDebugValue:Zf,useDeferredValue:function(t){var e=Yt();return gE(e,Be.memoizedState,t)},useTransition:function(){var t=Sh(na)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:nE,useSyncExternalStore:rE,useId:yE,unstable_isNewReconciler:!1},Zk={readContext:Xt,useCallback:pE,useContext:Xt,useEffect:Jf,useImperativeHandle:fE,useInsertionEffect:cE,useLayoutEffect:hE,useMemo:mE,useReducer:Ah,useRef:uE,useState:function(){return Ah(na)},useDebugValue:Zf,useDeferredValue:function(t){var e=Yt();return Be===null?e.memoizedState=t:gE(e,Be.memoizedState,t)},useTransition:function(){var t=Ah(na)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:nE,useSyncExternalStore:rE,useId:yE,unstable_isNewReconciler:!1};function tn(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ad(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xu={isMounted:function(t){return(t=t._reactInternals)?ki(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yt(),i=Sr(t),s=Mn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(an(e,t,i,r),Il(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yt(),i=Sr(t),s=Mn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(an(e,t,i,r),Il(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yt(),r=Sr(t),i=Mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tr(t,i,r),e!==null&&(an(e,t,r,n),Il(e,t,r))}};function my(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qo(n,r)||!Qo(i,s):!0}function EE(t,e,n){var r=!1,i=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xt(s):(i=Ct(e)?fi:ut.current,r=e.contextTypes,s=(r=r!=null)?gs(t,i):Dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xu.enqueueReplaceState(e,e.state,null)}function kd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Hf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xt(s):(s=Ct(e)?fi:ut.current,i.context=gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ad(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xu.enqueueReplaceState(i,i.state,null),ru(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e){try{var n="",r=e;do n+=RA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function kh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eR=typeof WeakMap=="function"?WeakMap:Map;function TE(t,e,n){n=Mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){lu||(lu=!0,Md=r),Rd(t,e)},n}function IE(t,e,n){n=Mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Rd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rd(t,e),typeof r!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function yy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new eR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=pR.bind(null,t,e,n),e.then(t,t))}function _y(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mn(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var tR=Kn.ReactCurrentOwner,At=!1;function mt(t,e,n,r){e.child=t===null?Jw(e,null,n,r):_s(e,t.child,n,r)}function wy(t,e,n,r,i){n=n.render;var s=e.ref;return as(e,i),r=Xf(t,e,n,r,s,i),n=Yf(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(Te&&n&&Uf(e),e.flags|=1,mt(t,e,r,i),e.child)}function Ey(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ap(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,SE(t,e,s,r,i)):(t=Pl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qo,n(o,r)&&t.ref===e.ref)return zn(t,e,i)}return e.flags|=1,t=Ar(s,r),t.ref=e.ref,t.return=e,e.child=t}function SE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Qo(s,r)&&t.ref===e.ref)if(At=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(At=!0);else return e.lanes=t.lanes,zn(t,e,i)}return Cd(t,e,n,r,i)}function AE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(es,Nt),Nt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(es,Nt),Nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(es,Nt),Nt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,me(es,Nt),Nt|=r;return mt(t,e,i,n),e.child}function kE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cd(t,e,n,r,i){var s=Ct(n)?fi:ut.current;return s=gs(e,s),as(e,i),n=Xf(t,e,n,r,s,i),r=Yf(),t!==null&&!At?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(Te&&r&&Uf(e),e.flags|=1,mt(t,e,n,i),e.child)}function Ty(t,e,n,r,i){if(Ct(n)){var s=!0;Jl(e)}else s=!1;if(as(e,i),e.stateNode===null)kl(t,e),EE(e,n,r),kd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xt(c):(c=Ct(n)?fi:ut.current,c=gs(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&gy(e,o,r,c),lr=!1;var m=e.memoizedState;o.state=m,ru(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Rt.current||lr?(typeof d=="function"&&(Ad(e,n,d,r),u=e.memoizedState),(l=lr||my(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,eE(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:tn(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Xt(u):(u=Ct(n)?fi:ut.current,u=gs(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&gy(e,o,r,u),lr=!1,m=e.memoizedState,o.state=m,ru(e,r,o,i);var P=e.memoizedState;l!==p||m!==P||Rt.current||lr?(typeof E=="function"&&(Ad(e,n,E,r),P=e.memoizedState),(c=lr||my(e,n,c,r,m,P,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Pd(t,e,n,r,s,i)}function Pd(t,e,n,r,i,s){kE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ay(e,n,!1),zn(t,e,s);r=e.stateNode,tR.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=_s(e,t.child,null,s),e.child=_s(e,null,l,s)):mt(t,e,l,s),e.memoizedState=r.state,i&&ay(e,n,!0),e.child}function RE(t){var e=t.stateNode;e.pendingContext?oy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&oy(t,e.context,!1),Wf(t,e.containerInfo)}function Iy(t,e,n,r,i){return ys(),jf(i),e.flags|=256,mt(t,e,n,r),e.child}var xd={dehydrated:null,treeContext:null,retryLane:0};function Nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function CE(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(Se,i&1),t===null)return Id(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zu(o,r,0,null),t=ui(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nd(n),e.memoizedState=xd,t):ep(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return nR(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ar(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ar(l,s):(s=ui(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=xd,r}return s=t.child,t=s.sibling,r=Ar(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ep(t,e){return e=Zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ol(t,e,n,r){return r!==null&&jf(r),_s(e,t.child,null,n),t=ep(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=kh(Error(F(422))),ol(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Zu({mode:"visible",children:r.children},i,0,null),s=ui(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&_s(e,t.child,null,o),e.child.memoizedState=Nd(o),e.memoizedState=xd,s);if(!(e.mode&1))return ol(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=kh(s,r,void 0),ol(t,e,o,r)}if(l=(o&t.childLanes)!==0,At||l){if(r=Ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Bn(t,i),an(r,t,i,-1))}return op(),r=kh(Error(F(421))),ol(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Vt=Er(i.nextSibling),Mt=e,Te=!0,rn=null,t!==null&&(Wt[Gt++]=bn,Wt[Gt++]=Dn,Wt[Gt++]=pi,bn=t.id,Dn=t.overflow,pi=e),e=ep(e,r.children),e.flags|=4096,e)}function Sy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Sd(t.return,e,n)}function Rh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function PE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(mt(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sy(t,n,e);else if(t.tag===19)Sy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&iu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Rh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&iu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Rh(e,!0,n,null,s);break;case"together":Rh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rR(t,e,n){switch(e.tag){case 3:RE(e),ys();break;case 5:tE(e);break;case 1:Ct(e.type)&&Jl(e);break;case 4:Wf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(tu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?CE(t,e,n):(me(Se,Se.current&1),t=zn(t,e,n),t!==null?t.sibling:null);me(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return PE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,AE(t,e,n)}return zn(t,e,n)}var xE,bd,NE,bE;xE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bd=function(){};NE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,si(vn.current);var s=null;switch(n){case"input":i=ed(t,i),r=ed(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=rd(t,i),r=rd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xl)}sd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&_e("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};bE=function(t,e,n,r){n!==r&&(e.flags|=4)};function ho(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iR(t,e,n){var r=e.pendingProps;switch(Ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return Ct(e.type)&&Yl(),it(e),null;case 3:return r=e.stateNode,vs(),ve(Rt),ve(ut),Kf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rn!==null&&(jd(rn),rn=null))),bd(t,e),it(e),null;case 5:Gf(e);var i=si(ea.current);if(n=e.type,t!==null&&e.stateNode!=null)NE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return it(e),null}if(t=si(vn.current),il(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gn]=e,r[Jo]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Eo.length;i++)_e(Eo[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Dg(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Og(r,s),_e("invalid",r)}sd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&rl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&rl(r.textContent,l,t),i=["children",""+l]):zo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Qa(r),Vg(r,s,!0);break;case"textarea":Qa(r),Lg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ow(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gn]=e,t[Jo]=r,xE(t,e,!1,!1),e.stateNode=t;e:{switch(o=od(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<Eo.length;i++)_e(Eo[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":Dg(t,r),i=ed(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Og(t,r),i=rd(t,r),_e("invalid",t);break;default:i=r}sd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?uw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&aw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&$o(t,u):typeof u=="number"&&$o(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&Sf(t,s,u,o))}switch(n){case"input":Qa(t),Vg(t,r,!1);break;case"textarea":Qa(t),Lg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+br(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?rs(t,!!r.multiple,s,!1):r.defaultValue!=null&&rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)bE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=si(ea.current),si(vn.current),il(e)){if(r=e.stateNode,n=e.memoizedProps,r[gn]=e,(s=r.nodeValue!==n)&&(t=Mt,t!==null))switch(t.tag){case 3:rl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=e,e.stateNode=r}return it(e),null;case 13:if(ve(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Vt!==null&&e.mode&1&&!(e.flags&128))Xw(),ys(),e.flags|=98560,s=!1;else if(s=il(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[gn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;it(e),s=!1}else rn!==null&&(jd(rn),rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?ze===0&&(ze=3):op())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return vs(),bd(t,e),t===null&&Xo(e.stateNode.containerInfo),it(e),null;case 10:return $f(e.type._context),it(e),null;case 17:return Ct(e.type)&&Yl(),it(e),null;case 19:if(ve(Se),s=e.memoizedState,s===null)return it(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ho(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=iu(t),o!==null){for(e.flags|=128,ho(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>Es&&(e.flags|=128,r=!0,ho(s,!1),e.lanes=4194304)}else{if(!r)if(t=iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return it(e),null}else 2*De()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,r=!0,ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Se.current,me(Se,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return sp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Nt&1073741824&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function sR(t,e){switch(Ff(e),e.tag){case 1:return Ct(e.type)&&Yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vs(),ve(Rt),ve(ut),Kf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gf(e),null;case 13:if(ve(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Se),null;case 4:return vs(),null;case 10:return $f(e.type._context),null;case 22:case 23:return sp(),null;case 24:return null;default:return null}}var al=!1,at=!1,oR=typeof WeakSet=="function"?WeakSet:Set,H=null;function Zi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function Dd(t,e,n){try{n()}catch(r){xe(t,e,r)}}var Ay=!1;function aR(t,e){if(gd=Gl,t=Mw(),Mf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var E;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(E=p.firstChild)!==null;)m=p,p=E;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(E=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(yd={focusedElem:t,selectionRange:n},Gl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var x=P.memoizedProps,V=P.memoizedState,T=e.stateNode,w=T.getSnapshotBeforeUpdate(e.elementType===e.type?x:tn(e.type,x),V);T.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){xe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return P=Ay,Ay=!1,P}function bo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Dd(e,n,s)}i=i.next}while(i!==r)}}function Yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function DE(t){var e=t.alternate;e!==null&&(t.alternate=null,DE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gn],delete e[Jo],delete e[wd],delete e[$k],delete e[qk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function VE(t){return t.tag===5||t.tag===3||t.tag===4}function ky(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||VE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xl));else if(r!==4&&(t=t.child,t!==null))for(Od(t,e,n),t=t.sibling;t!==null;)Od(t,e,n),t=t.sibling}function Ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ld(t,e,n),t=t.sibling;t!==null;)Ld(t,e,n),t=t.sibling}var Qe=null,nn=!1;function sr(t,e,n){for(n=n.child;n!==null;)OE(t,e,n),n=n.sibling}function OE(t,e,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount($u,n)}catch{}switch(n.tag){case 5:at||Zi(n,e);case 6:var r=Qe,i=nn;Qe=null,sr(t,e,n),Qe=r,nn=i,Qe!==null&&(nn?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(nn?(t=Qe,n=n.stateNode,t.nodeType===8?wh(t.parentNode,n):t.nodeType===1&&wh(t,n),Go(t)):wh(Qe,n.stateNode));break;case 4:r=Qe,i=nn,Qe=n.stateNode.containerInfo,nn=!0,sr(t,e,n),Qe=r,nn=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Dd(n,e,o),i=i.next}while(i!==r)}sr(t,e,n);break;case 1:if(!at&&(Zi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}sr(t,e,n);break;case 21:sr(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,sr(t,e,n),at=r):sr(t,e,n);break;default:sr(t,e,n)}}function Ry(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oR),e.forEach(function(r){var i=gR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Qe=l.stateNode,nn=!1;break e;case 3:Qe=l.stateNode.containerInfo,nn=!0;break e;case 4:Qe=l.stateNode.containerInfo,nn=!0;break e}l=l.return}if(Qe===null)throw Error(F(160));OE(s,o,i),Qe=null,nn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)LE(e,t),e=e.sibling}function LE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),fn(t),r&4){try{bo(3,t,t.return),Yu(3,t)}catch(x){xe(t,t.return,x)}try{bo(5,t,t.return)}catch(x){xe(t,t.return,x)}}break;case 1:en(e,t),fn(t),r&512&&n!==null&&Zi(n,n.return);break;case 5:if(en(e,t),fn(t),r&512&&n!==null&&Zi(n,n.return),t.flags&32){var i=t.stateNode;try{$o(i,"")}catch(x){xe(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&iw(i,s),od(l,o);var c=od(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?uw(i,p):d==="dangerouslySetInnerHTML"?aw(i,p):d==="children"?$o(i,p):Sf(i,d,p,c)}switch(l){case"input":td(i,s);break;case"textarea":sw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?rs(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?rs(i,!!s.multiple,s.defaultValue,!0):rs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Jo]=s}catch(x){xe(t,t.return,x)}}break;case 6:if(en(e,t),fn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){xe(t,t.return,x)}}break;case 3:if(en(e,t),fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Go(e.containerInfo)}catch(x){xe(t,t.return,x)}break;case 4:en(e,t),fn(t);break;case 13:en(e,t),fn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(rp=De())),r&4&&Ry(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(at=(c=at)||d,en(e,t),at=c):en(e,t),fn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(p=H=d;H!==null;){switch(m=H,E=m.child,m.tag){case 0:case 11:case 14:case 15:bo(4,m,m.return);break;case 1:Zi(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(x){xe(r,n,x)}}break;case 5:Zi(m,m.return);break;case 22:if(m.memoizedState!==null){Py(p);continue}}E!==null?(E.return=m,H=E):Py(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=lw("display",o))}catch(x){xe(t,t.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){xe(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:en(e,t),fn(t),r&4&&Ry(t);break;case 21:break;default:en(e,t),fn(t)}}function fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(VE(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($o(i,""),r.flags&=-33);var s=ky(t);Ld(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ky(t);Od(t,l,o);break;default:throw Error(F(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lR(t,e,n){H=t,ME(t)}function ME(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||al;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||at;l=al;var c=at;if(al=o,(at=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?xy(i):u!==null?(u.return=o,H=u):xy(i);for(;s!==null;)H=s,ME(s),s=s.sibling;H=i,al=l,at=c}Cy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Cy(t)}}function Cy(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||Yu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Go(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}at||e.flags&512&&Vd(e)}catch(m){xe(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Py(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function xy(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yu(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){xe(e,i,u)}}var s=e.return;try{Vd(e)}catch(u){xe(e,s,u)}break;case 5:var o=e.return;try{Vd(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var uR=Math.ceil,au=Kn.ReactCurrentDispatcher,tp=Kn.ReactCurrentOwner,Qt=Kn.ReactCurrentBatchConfig,le=0,Ke=null,Me=null,Ze=0,Nt=0,es=$r(0),ze=0,ia=null,gi=0,Ju=0,np=0,Do=null,St=null,rp=0,Es=1/0,Pn=null,lu=!1,Md=null,Ir=null,ll=!1,yr=null,uu=0,Vo=0,Ud=null,Rl=-1,Cl=0;function yt(){return le&6?De():Rl!==-1?Rl:Rl=De()}function Sr(t){return t.mode&1?le&2&&Ze!==0?Ze&-Ze:Wk.transition!==null?(Cl===0&&(Cl=Ew()),Cl):(t=ce,t!==0||(t=window.event,t=t===void 0?16:Cw(t.type)),t):1}function an(t,e,n,r){if(50<Vo)throw Vo=0,Ud=null,Error(F(185));ga(t,n,r),(!(le&2)||t!==Ke)&&(t===Ke&&(!(le&2)&&(Ju|=n),ze===4&&cr(t,Ze)),Pt(t,r),n===1&&le===0&&!(e.mode&1)&&(Es=De()+500,Ku&&qr()))}function Pt(t,e){var n=t.callbackNode;WA(t,e);var r=Wl(t,t===Ke?Ze:0);if(r===0)n!==null&&Fg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fg(n),e===1)t.tag===0?Hk(Ny.bind(null,t)):Gw(Ny.bind(null,t)),Bk(function(){!(le&6)&&qr()}),n=null;else{switch(Tw(r)){case 1:n=Pf;break;case 4:n=vw;break;case 16:n=Hl;break;case 536870912:n=ww;break;default:n=Hl}n=HE(n,UE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function UE(t,e){if(Rl=-1,Cl=0,le&6)throw Error(F(327));var n=t.callbackNode;if(ls()&&t.callbackNode!==n)return null;var r=Wl(t,t===Ke?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cu(t,r);else{e=r;var i=le;le|=2;var s=jE();(Ke!==t||Ze!==e)&&(Pn=null,Es=De()+500,li(t,e));do try{dR();break}catch(l){FE(t,l)}while(!0);zf(),au.current=s,le=i,Me!==null?e=0:(Ke=null,Ze=0,e=ze)}if(e!==0){if(e===2&&(i=hd(t),i!==0&&(r=i,e=Fd(t,i))),e===1)throw n=ia,li(t,0),cr(t,r),Pt(t,De()),n;if(e===6)cr(t,r);else{if(i=t.current.alternate,!(r&30)&&!cR(i)&&(e=cu(t,r),e===2&&(s=hd(t),s!==0&&(r=s,e=Fd(t,s))),e===1))throw n=ia,li(t,0),cr(t,r),Pt(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:ti(t,St,Pn);break;case 3:if(cr(t,r),(r&130023424)===r&&(e=rp+500-De(),10<e)){if(Wl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vd(ti.bind(null,t,St,Pn),e);break}ti(t,St,Pn);break;case 4:if(cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uR(r/1960))-r,10<r){t.timeoutHandle=vd(ti.bind(null,t,St,Pn),r);break}ti(t,St,Pn);break;case 5:ti(t,St,Pn);break;default:throw Error(F(329))}}}return Pt(t,De()),t.callbackNode===n?UE.bind(null,t):null}function Fd(t,e){var n=Do;return t.current.memoizedState.isDehydrated&&(li(t,e).flags|=256),t=cu(t,e),t!==2&&(e=St,St=n,e!==null&&jd(e)),t}function jd(t){St===null?St=t:St.push.apply(St,t)}function cR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~np,e&=~Ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function Ny(t){if(le&6)throw Error(F(327));ls();var e=Wl(t,0);if(!(e&1))return Pt(t,De()),null;var n=cu(t,e);if(t.tag!==0&&n===2){var r=hd(t);r!==0&&(e=r,n=Fd(t,r))}if(n===1)throw n=ia,li(t,0),cr(t,e),Pt(t,De()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ti(t,St,Pn),Pt(t,De()),null}function ip(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Es=De()+500,Ku&&qr())}}function yi(t){yr!==null&&yr.tag===0&&!(le&6)&&ls();var e=le;le|=1;var n=Qt.transition,r=ce;try{if(Qt.transition=null,ce=1,t)return t()}finally{ce=r,Qt.transition=n,le=e,!(le&6)&&qr()}}function sp(){Nt=es.current,ve(es)}function li(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jk(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(Ff(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yl();break;case 3:vs(),ve(Rt),ve(ut),Kf();break;case 5:Gf(r);break;case 4:vs();break;case 13:ve(Se);break;case 19:ve(Se);break;case 10:$f(r.type._context);break;case 22:case 23:sp()}n=n.return}if(Ke=t,Me=t=Ar(t.current,null),Ze=Nt=e,ze=0,ia=null,np=Ju=gi=0,St=Do=null,ii!==null){for(e=0;e<ii.length;e++)if(n=ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ii=null}return t}function FE(t,e){do{var n=Me;try{if(zf(),Sl.current=ou,su){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}su=!1}if(mi=0,We=Be=ke=null,No=!1,ta=0,tp.current=null,n===null||n.return===null){ze=1,ia=e,Me=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=_y(o);if(E!==null){E.flags&=-257,vy(E,o,l,s,e),E.mode&1&&yy(s,c,e),e=E,u=c;var P=e.updateQueue;if(P===null){var x=new Set;x.add(u),e.updateQueue=x}else P.add(u);break e}else{if(!(e&1)){yy(s,c,e),op();break e}u=Error(F(426))}}else if(Te&&l.mode&1){var V=_y(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),vy(V,o,l,s,e),jf(ws(u,l));break e}}s=u=ws(u,l),ze!==4&&(ze=2),Do===null?Do=[s]:Do.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=TE(s,u,e);hy(s,T);break e;case 1:l=u;var w=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Ir===null||!Ir.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=IE(s,l,e);hy(s,D);break e}}s=s.return}while(s!==null)}zE(n)}catch(M){e=M,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function jE(){var t=au.current;return au.current=ou,t===null?ou:t}function op(){(ze===0||ze===3||ze===2)&&(ze=4),Ke===null||!(gi&268435455)&&!(Ju&268435455)||cr(Ke,Ze)}function cu(t,e){var n=le;le|=2;var r=jE();(Ke!==t||Ze!==e)&&(Pn=null,li(t,e));do try{hR();break}catch(i){FE(t,i)}while(!0);if(zf(),le=n,au.current=r,Me!==null)throw Error(F(261));return Ke=null,Ze=0,ze}function hR(){for(;Me!==null;)BE(Me)}function dR(){for(;Me!==null&&!MA();)BE(Me)}function BE(t){var e=qE(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,e===null?zE(t):Me=e,tp.current=null}function zE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sR(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Me=null;return}}else if(n=iR(n,e,Nt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);ze===0&&(ze=5)}function ti(t,e,n){var r=ce,i=Qt.transition;try{Qt.transition=null,ce=1,fR(t,e,n,r)}finally{Qt.transition=i,ce=r}return null}function fR(t,e,n,r){do ls();while(yr!==null);if(le&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(GA(t,s),t===Ke&&(Me=Ke=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,HE(Hl,function(){return ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qt.transition,Qt.transition=null;var o=ce;ce=1;var l=le;le|=4,tp.current=null,aR(t,n),LE(n,t),Dk(yd),Gl=!!gd,yd=gd=null,t.current=n,lR(n),UA(),le=l,ce=o,Qt.transition=s}else t.current=n;if(ll&&(ll=!1,yr=t,uu=i),s=t.pendingLanes,s===0&&(Ir=null),BA(n.stateNode),Pt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lu)throw lu=!1,t=Md,Md=null,t;return uu&1&&t.tag!==0&&ls(),s=t.pendingLanes,s&1?t===Ud?Vo++:(Vo=0,Ud=t):Vo=0,qr(),null}function ls(){if(yr!==null){var t=Tw(uu),e=Qt.transition,n=ce;try{if(Qt.transition=null,ce=16>t?16:t,yr===null)var r=!1;else{if(t=yr,yr=null,uu=0,le&6)throw Error(F(331));var i=le;for(le|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:bo(8,d,s)}var p=d.child;if(p!==null)p.return=d,H=p;else for(;H!==null;){d=H;var m=d.sibling,E=d.return;if(DE(d),d===c){H=null;break}if(m!==null){m.return=E,H=m;break}H=E}}}var P=s.alternate;if(P!==null){var x=P.child;if(x!==null){P.child=null;do{var V=x.sibling;x.sibling=null,x=V}while(x!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bo(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,H=T;break e}H=s.return}}var w=t.current;for(H=w;H!==null;){o=H;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,H=k;else e:for(o=w;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Yu(9,l)}}catch(M){xe(l,l.return,M)}if(l===o){H=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,H=D;break e}H=l.return}}if(le=i,qr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot($u,t)}catch{}r=!0}return r}finally{ce=n,Qt.transition=e}}return!1}function by(t,e,n){e=ws(n,e),e=TE(t,e,1),t=Tr(t,e,1),e=yt(),t!==null&&(ga(t,1,e),Pt(t,e))}function xe(t,e,n){if(t.tag===3)by(t,t,n);else for(;e!==null;){if(e.tag===3){by(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ir===null||!Ir.has(r))){t=ws(n,t),t=IE(e,t,1),e=Tr(e,t,1),t=yt(),e!==null&&(ga(e,1,t),Pt(e,t));break}}e=e.return}}function pR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yt(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(Ze&n)===n&&(ze===4||ze===3&&(Ze&130023424)===Ze&&500>De()-rp?li(t,0):np|=n),Pt(t,e)}function $E(t,e){e===0&&(t.mode&1?(e=Ja,Ja<<=1,!(Ja&130023424)&&(Ja=4194304)):e=1);var n=yt();t=Bn(t,e),t!==null&&(ga(t,e,n),Pt(t,n))}function mR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$E(t,n)}function gR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),$E(t,n)}var qE;qE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)At=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return At=!1,rR(t,e,n);At=!!(t.flags&131072)}else At=!1,Te&&e.flags&1048576&&Kw(e,eu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;kl(t,e),t=e.pendingProps;var i=gs(e,ut.current);as(e,n),i=Xf(null,e,r,t,i,n);var s=Yf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,Jl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hf(e),i.updater=Xu,e.stateNode=i,i._reactInternals=e,kd(e,r,t,n),e=Pd(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&Uf(e),mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(kl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_R(r),t=tn(r,t),i){case 0:e=Cd(null,e,r,t,n);break e;case 1:e=Ty(null,e,r,t,n);break e;case 11:e=wy(null,e,r,t,n);break e;case 14:e=Ey(null,e,r,tn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Cd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Ty(t,e,r,i,n);case 3:e:{if(RE(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,eE(t,e),ru(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ws(Error(F(423)),e),e=Iy(t,e,r,n,i);break e}else if(r!==i){i=ws(Error(F(424)),e),e=Iy(t,e,r,n,i);break e}else for(Vt=Er(e.stateNode.containerInfo.firstChild),Mt=e,Te=!0,rn=null,n=Jw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),r===i){e=zn(t,e,n);break e}mt(t,e,r,n)}e=e.child}return e;case 5:return tE(e),t===null&&Id(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,_d(r,i)?o=null:s!==null&&_d(r,s)&&(e.flags|=32),kE(t,e),mt(t,e,o,n),e.child;case 6:return t===null&&Id(e),null;case 13:return CE(t,e,n);case 4:return Wf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=_s(e,null,r,n):mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),wy(t,e,r,i,n);case 7:return mt(t,e,e.pendingProps,n),e.child;case 8:return mt(t,e,e.pendingProps.children,n),e.child;case 12:return mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,me(tu,r._currentValue),r._currentValue=o,s!==null)if(un(s.value,o)){if(s.children===i.children&&!Rt.current){e=zn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Mn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Sd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Sd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,as(e,n),i=Xt(i),r=r(i),e.flags|=1,mt(t,e,r,n),e.child;case 14:return r=e.type,i=tn(r,e.pendingProps),i=tn(r.type,i),Ey(t,e,r,i,n);case 15:return SE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),kl(t,e),e.tag=1,Ct(r)?(t=!0,Jl(e)):t=!1,as(e,n),EE(e,r,i),kd(e,r,i,n),Pd(null,e,r,!0,t,n);case 19:return PE(t,e,n);case 22:return AE(t,e,n)}throw Error(F(156,e.tag))};function HE(t,e){return _w(t,e)}function yR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,e,n,r){return new yR(t,e,n,r)}function ap(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _R(t){if(typeof t=="function")return ap(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kf)return 11;if(t===Rf)return 14}return 2}function Ar(t,e){var n=t.alternate;return n===null?(n=Kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ap(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qi:return ui(n.children,i,s,e);case Af:o=8,i|=8;break;case Xh:return t=Kt(12,n,e,i|2),t.elementType=Xh,t.lanes=s,t;case Yh:return t=Kt(13,n,e,i),t.elementType=Yh,t.lanes=s,t;case Jh:return t=Kt(19,n,e,i),t.elementType=Jh,t.lanes=s,t;case tw:return Zu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zv:o=10;break e;case ew:o=9;break e;case kf:o=11;break e;case Rf:o=14;break e;case ar:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ui(t,e,n,r){return t=Kt(7,t,r,e),t.lanes=n,t}function Zu(t,e,n,r){return t=Kt(22,t,r,e),t.elementType=tw,t.lanes=n,t.stateNode={isHidden:!1},t}function Ch(t,e,n){return t=Kt(6,t,null,e),t.lanes=n,t}function Ph(t,e,n){return e=Kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uh(0),this.expirationTimes=uh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lp(t,e,n,r,i,s,o,l,u){return t=new vR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hf(s),t}function wR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$i,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function WE(t){if(!t)return Dr;t=t._reactInternals;e:{if(ki(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Ct(n))return Ww(t,n,e)}return e}function GE(t,e,n,r,i,s,o,l,u){return t=lp(n,r,!0,t,i,s,o,l,u),t.context=WE(null),n=t.current,r=yt(),i=Sr(n),s=Mn(r,i),s.callback=e??null,Tr(n,s,i),t.current.lanes=i,ga(t,i,r),Pt(t,r),t}function ec(t,e,n,r){var i=e.current,s=yt(),o=Sr(i);return n=WE(n),e.context===null?e.context=n:e.pendingContext=n,e=Mn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tr(i,e,o),t!==null&&(an(t,i,o,s),Il(t,i,o)),o}function hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function up(t,e){Dy(t,e),(t=t.alternate)&&Dy(t,e)}function ER(){return null}var KE=typeof reportError=="function"?reportError:function(t){console.error(t)};function cp(t){this._internalRoot=t}tc.prototype.render=cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));ec(t,e,null,null)};tc.prototype.unmount=cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yi(function(){ec(null,t,null,null)}),e[jn]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Aw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&Rw(t)}};function hp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vy(){}function TR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=hu(o);s.call(c)}}var o=GE(e,r,t,0,null,!1,!1,"",Vy);return t._reactRootContainer=o,t[jn]=o.current,Xo(t.nodeType===8?t.parentNode:t),yi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=hu(u);l.call(c)}}var u=lp(t,0,!1,null,null,!1,!1,"",Vy);return t._reactRootContainer=u,t[jn]=u.current,Xo(t.nodeType===8?t.parentNode:t),yi(function(){ec(e,u,n,r)}),u}function rc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=hu(o);l.call(u)}}ec(e,o,t,i)}else o=TR(n,e,t,i,r);return hu(o)}Iw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wo(e.pendingLanes);n!==0&&(xf(e,n|1),Pt(e,De()),!(le&6)&&(Es=De()+500,qr()))}break;case 13:yi(function(){var r=Bn(t,1);if(r!==null){var i=yt();an(r,t,1,i)}}),up(t,1)}};Nf=function(t){if(t.tag===13){var e=Bn(t,134217728);if(e!==null){var n=yt();an(e,t,134217728,n)}up(t,134217728)}};Sw=function(t){if(t.tag===13){var e=Sr(t),n=Bn(t,e);if(n!==null){var r=yt();an(n,t,e,r)}up(t,e)}};Aw=function(){return ce};kw=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};ld=function(t,e,n){switch(e){case"input":if(td(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Gu(r);if(!i)throw Error(F(90));rw(r),td(r,i)}}}break;case"textarea":sw(t,n);break;case"select":e=n.value,e!=null&&rs(t,!!n.multiple,e,!1)}};dw=ip;fw=yi;var IR={usingClientEntryPoint:!1,Events:[_a,Ki,Gu,cw,hw,ip]},fo={findFiberByHostInstance:ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SR={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gw(t),t===null?null:t.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||ER,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{$u=ul.inject(SR),_n=ul}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IR;zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hp(e))throw Error(F(200));return wR(t,e,null,n)};zt.createRoot=function(t,e){if(!hp(t))throw Error(F(299));var n=!1,r="",i=KE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=lp(t,1,!1,null,null,n,!1,r,i),t[jn]=e.current,Xo(t.nodeType===8?t.parentNode:t),new cp(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=gw(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return yi(t)};zt.hydrate=function(t,e,n){if(!nc(e))throw Error(F(200));return rc(null,t,e,!0,n)};zt.hydrateRoot=function(t,e,n){if(!hp(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=KE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=GE(e,null,t,1,n??null,i,!1,s,o),t[jn]=e.current,Xo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new tc(e)};zt.render=function(t,e,n){if(!nc(e))throw Error(F(200));return rc(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!nc(t))throw Error(F(40));return t._reactRootContainer?(yi(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};zt.unstable_batchedUpdates=ip;zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return rc(t,e,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function QE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(QE)}catch(t){console.error(t)}}QE(),Qv.exports=zt;var AR=Qv.exports,XE,Oy=AR;XE=Oy.createRoot,Oy.hydrateRoot;const kR=()=>{};var Ly={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},RR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},JE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[p],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(YE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new CR;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),p!==64){const P=c<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PR=function(t){const e=YE(t);return JE.encodeByteArray(e,!0)},du=function(t){return PR(t).replace(/\./g,"")},ZE=function(t){try{return JE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=()=>xR().__FIREBASE_DEFAULTS__,bR=()=>{if(typeof process>"u"||typeof Ly>"u")return;const t=Ly.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ZE(t[1]);return e&&JSON.parse(e)},ic=()=>{try{return kR()||NR()||bR()||DR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eT=t=>{var e,n;return(n=(e=ic())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},dp=t=>{const e=eT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tT=()=>{var t;return(t=ic())==null?void 0:t.config},nT=t=>{var e;return(e=ic())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[du(JSON.stringify(n)),du(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function LR(){var e;const t=(e=ic())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function UR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FR(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jR(){return!LR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pp(){try{return typeof indexedDB=="object"}catch{return!1}}function mp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function iT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR="FirebaseError";class qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BR,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new qt(i,l,r)}}function zR(t,e){return t.replace($R,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $R=/\{\$([^}]+)}/g;function qR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function An(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(My(s)&&My(o)){if(!An(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function My(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function HR(t,e){const n=new WR(t,e);return n.subscribe.bind(n)}class WR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xh),i.error===void 0&&(i.error=xh),i.complete===void 0&&(i.complete=xh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=1e3,QR=2,XR=4*60*60*1e3,YR=.5;function Uy(t,e=KR,n=QR){const r=e*Math.pow(n,t),i=Math.round(YR*r*(Math.random()-.5)*2);return Math.min(XR,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sc(t){return(await fetch(t,{credentials:"include"})).ok}class Bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new VR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(e1(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZR(t){return t===ni?void 0:t}function e1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const n1={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},r1=ie.INFO,i1={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},s1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=i1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oc{constructor(e){this.name=e,this._logLevel=r1,this._logHandler=s1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?n1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const o1=(t,e)=>e.some(n=>t instanceof n);let Fy,jy;function a1(){return Fy||(Fy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l1(){return jy||(jy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sT=new WeakMap,Bd=new WeakMap,oT=new WeakMap,Nh=new WeakMap,gp=new WeakMap;function u1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sT.set(n,t)}).catch(()=>{}),gp.set(e,t),e}function c1(t){if(Bd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Bd.set(t,e)}let zd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||oT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function h1(t){zd=t(zd)}function d1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bh(this),e,...n);return oT.set(r,e.sort?e.sort():[e]),kr(r)}:l1().includes(t)?function(...e){return t.apply(bh(this),e),kr(sT.get(this))}:function(...e){return kr(t.apply(bh(this),e))}}function f1(t){return typeof t=="function"?d1(t):(t instanceof IDBTransaction&&c1(t),o1(t,a1())?new Proxy(t,zd):t)}function kr(t){if(t instanceof IDBRequest)return u1(t);if(Nh.has(t))return Nh.get(t);const e=f1(t);return e!==t&&(Nh.set(t,e),gp.set(e,t)),e}const bh=t=>gp.get(t);function aT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=kr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(kr(o.result),u.oldVersion,u.newVersion,kr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const p1=["get","getKey","getAll","getAllKeys","count"],m1=["put","add","delete","clear"],Dh=new Map;function By(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dh.get(e))return Dh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=m1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||p1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Dh.set(e,s),s}h1(t=>({...t,get:(e,n,r)=>By(e,n)||t.get(e,n,r),has:(e,n)=>!!By(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(y1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function y1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $d="@firebase/app",zy="0.14.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new oc("@firebase/app"),_1="@firebase/app-compat",v1="@firebase/analytics-compat",w1="@firebase/analytics",E1="@firebase/app-check-compat",T1="@firebase/app-check",I1="@firebase/auth",S1="@firebase/auth-compat",A1="@firebase/database",k1="@firebase/data-connect",R1="@firebase/database-compat",C1="@firebase/functions",P1="@firebase/functions-compat",x1="@firebase/installations",N1="@firebase/installations-compat",b1="@firebase/messaging",D1="@firebase/messaging-compat",V1="@firebase/performance",O1="@firebase/performance-compat",L1="@firebase/remote-config",M1="@firebase/remote-config-compat",U1="@firebase/storage",F1="@firebase/storage-compat",j1="@firebase/firestore",B1="@firebase/ai",z1="@firebase/firestore-compat",$1="firebase",q1="12.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="[DEFAULT]",H1={[$d]:"fire-core",[_1]:"fire-core-compat",[w1]:"fire-analytics",[v1]:"fire-analytics-compat",[T1]:"fire-app-check",[E1]:"fire-app-check-compat",[I1]:"fire-auth",[S1]:"fire-auth-compat",[A1]:"fire-rtdb",[k1]:"fire-data-connect",[R1]:"fire-rtdb-compat",[C1]:"fire-fn",[P1]:"fire-fn-compat",[x1]:"fire-iid",[N1]:"fire-iid-compat",[b1]:"fire-fcm",[D1]:"fire-fcm-compat",[V1]:"fire-perf",[O1]:"fire-perf-compat",[L1]:"fire-rc",[M1]:"fire-rc-compat",[U1]:"fire-gcs",[F1]:"fire-gcs-compat",[j1]:"fire-fst",[z1]:"fire-fst-compat",[B1]:"fire-vertex","fire-js":"fire-js",[$1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new Map,W1=new Map,Hd=new Map;function $y(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jt(t){const e=t.name;if(Hd.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;Hd.set(e,t);for(const n of sa.values())$y(n,t);for(const n of W1.values())$y(n,t);return!0}function Xn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rr=new Ri("app","Firebase",G1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=q1;function lT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:qd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Rr.create("bad-app-name",{appName:String(i)});if(n||(n=tT()),!n)throw Rr.create("no-options");const s=sa.get(i);if(s){if(An(n,s.options)&&An(r,s.config))return s;throw Rr.create("duplicate-app",{appName:i})}const o=new t1(i);for(const u of Hd.values())o.addComponent(u);const l=new K1(n,r,o);return sa.set(i,l),l}function Vs(t=qd){const e=sa.get(t);if(!e&&t===qd&&tT())return lT();if(!e)throw Rr.create("no-app",{appName:t});return e}function Q1(){return Array.from(sa.values())}function lt(t,e,n){let r=H1[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(o.join(" "));return}Jt(new Bt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="firebase-heartbeat-database",Y1=1,oa="firebase-heartbeat-store";let Vh=null;function uT(){return Vh||(Vh=aT(X1,Y1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),Vh}async function J1(t){try{const n=(await uT()).transaction(oa),r=await n.objectStore(oa).get(cT(t));return await n.done,r}catch(e){if(e instanceof qt)$n.warn(e.message);else{const n=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function qy(t,e){try{const r=(await uT()).transaction(oa,"readwrite");await r.objectStore(oa).put(e,cT(t)),await r.done}catch(n){if(n instanceof qt)$n.warn(n.message);else{const r=Rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function cT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=1024,eC=30;class tC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>eC){const o=iC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hy(),{heartbeatsToSend:r,unsentEntries:i}=nC(this._heartbeatsCache.heartbeats),s=du(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return $n.warn(n),""}}}function Hy(){return new Date().toISOString().substring(0,10)}function nC(t,e=Z1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pp()?mp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await J1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wy(t){return du(JSON.stringify({version:2,heartbeats:t})).length}function iC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){Jt(new Bt("platform-logger",e=>new g1(e),"PRIVATE")),Jt(new Bt("heartbeat",e=>new tC(e),"PRIVATE")),lt($d,zy,t),lt($d,zy,"esm2020"),lt("fire-js","")}sC("");var oC="firebase",aC="12.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(oC,aC,"app");function hT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lC=hT,dT=new Ri("auth","Firebase",hT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=new oc("@firebase/auth");function uC(t,...e){fu.logLevel<=ie.WARN&&fu.warn(`Auth (${Ci}): ${t}`,...e)}function xl(t,...e){fu.logLevel<=ie.ERROR&&fu.error(`Auth (${Ci}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,...e){throw yp(t,...e)}function wn(t,...e){return yp(t,...e)}function fT(t,e,n){const r={...lC(),[e]:n};return new Ri("auth","Firebase",r).create(e,{appName:t.name})}function Cr(t){return fT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dT.create(t,...e)}function Y(t,e,...n){if(!t)throw yp(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xl(e),new Error(e)}function Hn(t,e){t||Vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function cC(){return Gy()==="http:"||Gy()==="https:"}function Gy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cC()||fp()||"connection"in navigator)?navigator.onLine:!0}function dC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=OR()||UR()}get(){return hC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mC=new Ea(3e4,6e4);function ac(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Os(t,e,n,r,i={}){return mT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=wa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return MR()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Qn(t.emulatorConfig.host)&&(c.credentials="include"),pT.fetch()(await yT(t,t.config.apiHost,n,l),c)})}async function mT(t,e,n){t._canInitEmulator=!1;const r={...fC,...e};try{const i=new gC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw cl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw cl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw cl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw cl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fT(t,d,c);qn(t,d)}}catch(i){if(i instanceof qt)throw i;qn(t,"network-request-failed",{message:String(i)})}}async function gT(t,e,n,r,i={}){const s=await Os(t,e,n,r,i);return"mfaPendingCredential"in s&&qn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function yT(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?_p(t.config,i):`${t.config.apiScheme}://${i}`;return pC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class gC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),mC.get())})}}function cl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yC(t,e){return Os(t,"POST","/v1/accounts:delete",e)}async function pu(t,e){return Os(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _C(t,e=!1){const n=ue(t),r=await n.getIdToken(e),i=vp(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Oo(Oh(i.auth_time)),issuedAtTime:Oo(Oh(i.iat)),expirationTime:Oo(Oh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Oh(t){return Number(t)*1e3}function vp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xl("JWT malformed, contained fewer than 3 sections"),null;try{const i=ZE(n);return i?JSON.parse(i):(xl("Failed to decode base64 JWT payload"),null)}catch(i){return xl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ky(t){const e=vp(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qt&&vC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oo(this.lastLoginAt),this.creationTime=Oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await aa(t,pu(e,{idToken:n}));Y(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?_T(i.providerUserInfo):[],o=TC(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Gd(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function EC(t){const e=ue(t);await mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _T(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IC(t,e){const n=await mT(t,{},async()=>{const r=wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await yT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Qn(t.emulatorConfig.host)&&(u.credentials="include"),pT.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SC(t,e){return Os(t,"POST","/v2/accounts:revokeToken",ac(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ky(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Ky(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await IC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new us;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new us,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new wC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Gd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await aa(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _C(this,e)}reload(){return EC(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await aa(this,yC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:E,providerData:P,stsTokenManager:x}=n;Y(p&&x,e,"internal-error");const V=us.fromJSON(this.name,x);Y(typeof p=="string",e,"internal-error"),or(r,e.name),or(i,e.name),Y(typeof m=="boolean",e,"internal-error"),Y(typeof E=="boolean",e,"internal-error"),or(s,e.name),or(o,e.name),or(l,e.name),or(u,e.name),or(c,e.name),or(d,e.name);const T=new sn({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:V,createdAt:c,lastLoginAt:d});return P&&Array.isArray(P)&&(T.providerData=P.map(w=>({...w}))),u&&(T._redirectEventId=u),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new us;i.updateFromServerResponse(n);const s=new sn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await mu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?_T(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new us;l.updateFromIdToken(r);const u=new sn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Gd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=new Map;function On(t){Hn(t instanceof Function,"Expected a class definition");let e=Qy.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vT.type="NONE";const Xy=vT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t,e,n){return`firebase:${t}:${e}:${n}`}class cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Nl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Nl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await pu(this.auth,{idToken:e}).catch(()=>{});return n?sn._fromGetAccountInfoResponse(this.auth,n,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cs(On(Xy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||On(Xy);const o=Nl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await pu(e,{idToken:d}).catch(()=>{});if(!m)break;p=await sn._fromGetAccountInfoResponse(e,m,d)}else p=sn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new cs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new cs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(IT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(AT(e))return"Blackberry";if(kT(e))return"Webos";if(ET(e))return"Safari";if((e.includes("chrome/")||TT(e))&&!e.includes("edge/"))return"Chrome";if(ST(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wT(t=ct()){return/firefox\//i.test(t)}function ET(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function TT(t=ct()){return/crios\//i.test(t)}function IT(t=ct()){return/iemobile/i.test(t)}function ST(t=ct()){return/android/i.test(t)}function AT(t=ct()){return/blackberry/i.test(t)}function kT(t=ct()){return/webos/i.test(t)}function wp(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function AC(t=ct()){var e;return wp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function kC(){return FR()&&document.documentMode===10}function RT(t=ct()){return wp(t)||ST(t)||kT(t)||AT(t)||/windows phone/i.test(t)||IT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(t,e=[]){let n;switch(t){case"Browser":n=Yy(ct());break;case"Worker":n=`${Yy(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ci}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(t,e={}){return Os(t,"GET","/v2/passwordPolicy",ac(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=6;class xC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??PC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jy(this),this.idTokenSubscription=new Jy(this),this.beforeStateQueue=new RC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pu(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(Cr(this));const n=e?ue(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CC(this),n=new xC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ri("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await SC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=CT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&uC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function lc(t){return ue(t)}class Jy{constructor(e){this.auth=e,this.observer=null,this.addObserver=HR(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ep={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bC(t){Ep=t}function DC(t){return Ep.loadJS(t)}function VC(){return Ep.gapiScript}function OC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t,e){const n=Xn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(An(s,e??{}))return i;qn(i,"already-initialized")}return n.initialize({options:e})}function MC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function UC(t,e,n){const r=lc(t);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=PT(e),{host:o,port:l}=FC(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(An(c,r.config.emulator)&&An(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Qn(o)?sc(`${s}//${o}${u}`):jC()}function PT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function FC(t){const e=PT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Zy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Zy(o)}}}function Zy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t,e){return gT(t,"POST","/v1/accounts:signInWithIdp",ac(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC="http://localhost";class _i extends xT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new _i(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hs(e,n)}buildRequest(){const e={requestUri:BC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends NT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Ta{constructor(){super("facebook.com")}static credential(e){return _i._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _i._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.GOOGLE_SIGN_IN_METHOD="google.com";dr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Ta{constructor(){super("github.com")}static credential(e){return _i._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Ta{constructor(){super("twitter.com")}static credential(e,n){return _i._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zC(t,e){return gT(t,"POST","/v1/accounts:signUp",ac(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sn._fromIdTokenResponse(e,r,i),o=e_(r);return new Vr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=e_(r);return new Vr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function e_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $C(t){var i;if(bt(t.app))return Promise.reject(Cr(t));const e=lc(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new Vr({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await zC(e,{returnSecureToken:!0}),r=await Vr._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu extends qt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new gu(e,n,r,i)}}function bT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gu._fromErrorAndOperation(t,s,e,r):s})}async function qC(t,e,n=!1){const r=await aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(t,e,n=!1){const{auth:r}=t;if(bt(r.app))return Promise.reject(Cr(r));const i="reauthenticate";try{const s=await aa(t,bT(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=vp(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),Vr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(t,e,n=!1){if(bt(t.app))return Promise.reject(Cr(t));const r="signIn",i=await bT(t,r,e),s=await Vr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function GC(t,e,n,r){return ue(t).onIdTokenChanged(e,n,r)}function KC(t,e,n){return ue(t).beforeAuthStateChanged(e,n)}const yu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yu,"1"),this.storage.removeItem(yu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=1e3,XC=10;class VT extends DT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=RT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,XC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}VT.type="LOCAL";const YC=VT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT extends DT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OT.type="SESSION";const LT=OT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new uc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await JC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Tp("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return window}function eP(t){En().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function tP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function rP(){return MT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="firebaseLocalStorageDb",iP=1,_u="firebaseLocalStorage",FT="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cc(t,e){return t.transaction([_u],e?"readwrite":"readonly").objectStore(_u)}function sP(){const t=indexedDB.deleteDatabase(UT);return new Ia(t).toPromise()}function jT(){const t=indexedDB.open(UT,iP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_u,{keyPath:FT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_u)?e(r):(r.close(),await sP(),e(await jT()))})})}async function t_(t,e,n){const r=cc(t,!0).put({[FT]:e,value:n});return new Ia(r).toPromise()}async function oP(t,e){const n=cc(t,!1).get(e),r=await new Ia(n).toPromise();return r===void 0?null:r.value}function n_(t,e){const n=cc(t,!0).delete(e);return new Ia(n).toPromise()}const aP=800,lP=3;class BT{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=jT(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lP)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return MT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uc._getInstance(rP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await tP(),!this.activeServiceWorker)return;this.sender=new ZC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await t_(e,yu,"1"),await n_(e,yu)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>t_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>n_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=cc(i,!1).getAll();return new Ia(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}BT.type="LOCAL";const uP=BT;new Ea(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t,e){return e?On(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip extends xT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hP(t){return WC(t.auth,new Ip(t),t.bypassAuthState)}function dP(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),HC(n,new Ip(t),t.bypassAuthState)}async function fP(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),qC(n,new Ip(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hP;case"linkViaPopup":case"linkViaRedirect":return fP;case"reauthViaPopup":case"reauthViaRedirect":return dP;default:qn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=new Ea(2e3,1e4);class ts extends zT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=Tp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pP.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP="pendingRedirect",bl=new Map;class gP extends zT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bl.get(this.auth._key());if(!e){try{const r=await yP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bl.set(this.auth._key(),e)}return this.bypassAuthState||bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yP(t,e){const n=wP(e),r=vP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _P(t,e){bl.set(t._key(),e)}function vP(t){return On(t._redirectPersistence)}function wP(t){return Nl(mP,t.config.apiKey,t.name)}async function EP(t,e,n=!1){if(bt(t.app))return Promise.reject(Cr(t));const r=lc(t),i=cP(r,e),o=await new gP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=10*60*1e3;class IP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$T(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TP&&this.cachedEventUids.clear(),this.cachedEventUids.has(r_(e))}saveEventToCache(e){this.cachedEventUids.add(r_(e)),this.lastProcessedEventTime=Date.now()}}function r_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $T({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $T(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(t,e={}){return Os(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RP=/^https?/;async function CP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AP(t);for(const n of e)try{if(PP(n))return}catch{}qn(t,"unauthorized-domain")}function PP(t){const e=Wd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RP.test(n))return!1;if(kP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=new Ea(3e4,6e4);function i_(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NP(t){return new Promise((e,n)=>{var i,s,o;function r(){i_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{i_(),n(wn(t,"network-request-failed"))},timeout:xP.get()})}if((s=(i=En().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=En().gapi)!=null&&o.load)r();else{const l=OC("iframefcb");return En()[l]=()=>{gapi.load?r():n(wn(t,"network-request-failed"))},DC(`${VC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Dl=null,e})}let Dl=null;function bP(t){return Dl=Dl||NP(t),Dl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=new Ea(5e3,15e3),VP="__/auth/iframe",OP="emulator/auth/iframe",LP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UP(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_p(e,OP):`https://${t.config.authDomain}/${VP}`,r={apiKey:e.apiKey,appName:t.name,v:Ci},i=MP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wa(r).slice(1)}`}async function FP(t){const e=await bP(t),n=En().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:UP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),l=En().setTimeout(()=>{s(o)},DP.get());function u(){En().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BP=500,zP=600,$P="_blank",qP="http://localhost";class s_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HP(t,e,n,r=BP,i=zP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...jP,width:r.toString(),height:i.toString(),top:s,left:o},c=ct().toLowerCase();n&&(l=TT(c)?$P:n),wT(c)&&(e=e||qP,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[E,P])=>`${m}${E}=${P},`,"");if(AC(c)&&l!=="_self")return WP(e||"",l),new s_(null);const p=window.open(e||"",l,d);Y(p,t,"popup-blocked");try{p.focus()}catch{}return new s_(p)}function WP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP="__/auth/handler",KP="emulator/auth/handler",QP=encodeURIComponent("fac");async function o_(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ci,eventId:i};if(e instanceof NT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ta){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${QP}=${encodeURIComponent(u)}`:"";return`${XP(t)}?${wa(l).slice(1)}${c}`}function XP({config:t}){return t.emulator?_p(t,KP):`https://${t.authDomain}/${GP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="webStorageSupport";class YP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LT,this._completeRedirectFn=EP,this._overrideRedirectResult=_P}async _openPopup(e,n,r,i){var o;Hn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await o_(e,n,r,Wd(),i);return HP(e,s,Tp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await o_(e,n,r,Wd(),i);return eP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Hn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await FP(e),r=new IP(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lh,{type:Lh},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Lh];s!==void 0&&n(!!s),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return RT()||ET()||wp()}}const JP=YP;var a_="@firebase/auth",l_="1.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tx(t){Jt(new Bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CT(t)},c=new NC(r,i,s,u);return MC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Jt(new Bt("auth-internal",e=>{const n=lc(e.getProvider("auth").getImmediate());return(r=>new ZP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(a_,l_,ex(t)),lt(a_,l_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=5*60,rx=nT("authIdTokenMaxAge")||nx;let u_=null;const ix=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rx)return;const i=n==null?void 0:n.token;u_!==i&&(u_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sx(t=Vs()){const e=Xn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LC(t,{popupRedirectResolver:JP,persistence:[uP,YC,LT]}),r=nT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=ix(s.toString());KC(n,o,()=>o(n.currentUser)),GC(n,l=>o(l))}}const i=eT("auth");return i&&UC(n,`http://${i}`),n}function ox(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}bC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ox().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tx("Browser");var c_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pr,qT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function _(){}_.prototype=y.prototype,v.F=y.prototype,v.prototype=new _,v.prototype.constructor=v,v.D=function(S,R,C){for(var I=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)I[fe-2]=arguments[fe];return y.prototype[R].apply(S,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,_){_||(_=0);const S=Array(16);if(typeof y=="string")for(var R=0;R<16;++R)S[R]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(R=0;R<16;++R)S[R]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=v.g[0],_=v.g[1],R=v.g[2];let C=v.g[3],I;I=y+(C^_&(R^C))+S[0]+3614090360&4294967295,y=_+(I<<7&4294967295|I>>>25),I=C+(R^y&(_^R))+S[1]+3905402710&4294967295,C=y+(I<<12&4294967295|I>>>20),I=R+(_^C&(y^_))+S[2]+606105819&4294967295,R=C+(I<<17&4294967295|I>>>15),I=_+(y^R&(C^y))+S[3]+3250441966&4294967295,_=R+(I<<22&4294967295|I>>>10),I=y+(C^_&(R^C))+S[4]+4118548399&4294967295,y=_+(I<<7&4294967295|I>>>25),I=C+(R^y&(_^R))+S[5]+1200080426&4294967295,C=y+(I<<12&4294967295|I>>>20),I=R+(_^C&(y^_))+S[6]+2821735955&4294967295,R=C+(I<<17&4294967295|I>>>15),I=_+(y^R&(C^y))+S[7]+4249261313&4294967295,_=R+(I<<22&4294967295|I>>>10),I=y+(C^_&(R^C))+S[8]+1770035416&4294967295,y=_+(I<<7&4294967295|I>>>25),I=C+(R^y&(_^R))+S[9]+2336552879&4294967295,C=y+(I<<12&4294967295|I>>>20),I=R+(_^C&(y^_))+S[10]+4294925233&4294967295,R=C+(I<<17&4294967295|I>>>15),I=_+(y^R&(C^y))+S[11]+2304563134&4294967295,_=R+(I<<22&4294967295|I>>>10),I=y+(C^_&(R^C))+S[12]+1804603682&4294967295,y=_+(I<<7&4294967295|I>>>25),I=C+(R^y&(_^R))+S[13]+4254626195&4294967295,C=y+(I<<12&4294967295|I>>>20),I=R+(_^C&(y^_))+S[14]+2792965006&4294967295,R=C+(I<<17&4294967295|I>>>15),I=_+(y^R&(C^y))+S[15]+1236535329&4294967295,_=R+(I<<22&4294967295|I>>>10),I=y+(R^C&(_^R))+S[1]+4129170786&4294967295,y=_+(I<<5&4294967295|I>>>27),I=C+(_^R&(y^_))+S[6]+3225465664&4294967295,C=y+(I<<9&4294967295|I>>>23),I=R+(y^_&(C^y))+S[11]+643717713&4294967295,R=C+(I<<14&4294967295|I>>>18),I=_+(C^y&(R^C))+S[0]+3921069994&4294967295,_=R+(I<<20&4294967295|I>>>12),I=y+(R^C&(_^R))+S[5]+3593408605&4294967295,y=_+(I<<5&4294967295|I>>>27),I=C+(_^R&(y^_))+S[10]+38016083&4294967295,C=y+(I<<9&4294967295|I>>>23),I=R+(y^_&(C^y))+S[15]+3634488961&4294967295,R=C+(I<<14&4294967295|I>>>18),I=_+(C^y&(R^C))+S[4]+3889429448&4294967295,_=R+(I<<20&4294967295|I>>>12),I=y+(R^C&(_^R))+S[9]+568446438&4294967295,y=_+(I<<5&4294967295|I>>>27),I=C+(_^R&(y^_))+S[14]+3275163606&4294967295,C=y+(I<<9&4294967295|I>>>23),I=R+(y^_&(C^y))+S[3]+4107603335&4294967295,R=C+(I<<14&4294967295|I>>>18),I=_+(C^y&(R^C))+S[8]+1163531501&4294967295,_=R+(I<<20&4294967295|I>>>12),I=y+(R^C&(_^R))+S[13]+2850285829&4294967295,y=_+(I<<5&4294967295|I>>>27),I=C+(_^R&(y^_))+S[2]+4243563512&4294967295,C=y+(I<<9&4294967295|I>>>23),I=R+(y^_&(C^y))+S[7]+1735328473&4294967295,R=C+(I<<14&4294967295|I>>>18),I=_+(C^y&(R^C))+S[12]+2368359562&4294967295,_=R+(I<<20&4294967295|I>>>12),I=y+(_^R^C)+S[5]+4294588738&4294967295,y=_+(I<<4&4294967295|I>>>28),I=C+(y^_^R)+S[8]+2272392833&4294967295,C=y+(I<<11&4294967295|I>>>21),I=R+(C^y^_)+S[11]+1839030562&4294967295,R=C+(I<<16&4294967295|I>>>16),I=_+(R^C^y)+S[14]+4259657740&4294967295,_=R+(I<<23&4294967295|I>>>9),I=y+(_^R^C)+S[1]+2763975236&4294967295,y=_+(I<<4&4294967295|I>>>28),I=C+(y^_^R)+S[4]+1272893353&4294967295,C=y+(I<<11&4294967295|I>>>21),I=R+(C^y^_)+S[7]+4139469664&4294967295,R=C+(I<<16&4294967295|I>>>16),I=_+(R^C^y)+S[10]+3200236656&4294967295,_=R+(I<<23&4294967295|I>>>9),I=y+(_^R^C)+S[13]+681279174&4294967295,y=_+(I<<4&4294967295|I>>>28),I=C+(y^_^R)+S[0]+3936430074&4294967295,C=y+(I<<11&4294967295|I>>>21),I=R+(C^y^_)+S[3]+3572445317&4294967295,R=C+(I<<16&4294967295|I>>>16),I=_+(R^C^y)+S[6]+76029189&4294967295,_=R+(I<<23&4294967295|I>>>9),I=y+(_^R^C)+S[9]+3654602809&4294967295,y=_+(I<<4&4294967295|I>>>28),I=C+(y^_^R)+S[12]+3873151461&4294967295,C=y+(I<<11&4294967295|I>>>21),I=R+(C^y^_)+S[15]+530742520&4294967295,R=C+(I<<16&4294967295|I>>>16),I=_+(R^C^y)+S[2]+3299628645&4294967295,_=R+(I<<23&4294967295|I>>>9),I=y+(R^(_|~C))+S[0]+4096336452&4294967295,y=_+(I<<6&4294967295|I>>>26),I=C+(_^(y|~R))+S[7]+1126891415&4294967295,C=y+(I<<10&4294967295|I>>>22),I=R+(y^(C|~_))+S[14]+2878612391&4294967295,R=C+(I<<15&4294967295|I>>>17),I=_+(C^(R|~y))+S[5]+4237533241&4294967295,_=R+(I<<21&4294967295|I>>>11),I=y+(R^(_|~C))+S[12]+1700485571&4294967295,y=_+(I<<6&4294967295|I>>>26),I=C+(_^(y|~R))+S[3]+2399980690&4294967295,C=y+(I<<10&4294967295|I>>>22),I=R+(y^(C|~_))+S[10]+4293915773&4294967295,R=C+(I<<15&4294967295|I>>>17),I=_+(C^(R|~y))+S[1]+2240044497&4294967295,_=R+(I<<21&4294967295|I>>>11),I=y+(R^(_|~C))+S[8]+1873313359&4294967295,y=_+(I<<6&4294967295|I>>>26),I=C+(_^(y|~R))+S[15]+4264355552&4294967295,C=y+(I<<10&4294967295|I>>>22),I=R+(y^(C|~_))+S[6]+2734768916&4294967295,R=C+(I<<15&4294967295|I>>>17),I=_+(C^(R|~y))+S[13]+1309151649&4294967295,_=R+(I<<21&4294967295|I>>>11),I=y+(R^(_|~C))+S[4]+4149444226&4294967295,y=_+(I<<6&4294967295|I>>>26),I=C+(_^(y|~R))+S[11]+3174756917&4294967295,C=y+(I<<10&4294967295|I>>>22),I=R+(y^(C|~_))+S[2]+718787259&4294967295,R=C+(I<<15&4294967295|I>>>17),I=_+(C^(R|~y))+S[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,v.g[2]=v.g[2]+R&4294967295,v.g[3]=v.g[3]+C&4294967295}r.prototype.v=function(v,y){y===void 0&&(y=v.length);const _=y-this.blockSize,S=this.C;let R=this.h,C=0;for(;C<y;){if(R==0)for(;C<=_;)i(this,v,C),C+=this.blockSize;if(typeof v=="string"){for(;C<y;)if(S[R++]=v.charCodeAt(C++),R==this.blockSize){i(this,S),R=0;break}}else for(;C<y;)if(S[R++]=v[C++],R==this.blockSize){i(this,S),R=0;break}}this.h=R,this.o+=y},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var _=v.length-8;_<v.length;++_)v[_]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,_=0;_<4;++_)for(let S=0;S<32;S+=8)v[y++]=this.g[_]>>>S&255;return v};function s(v,y){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=y(v)}function o(v,y){this.h=y;const _=[];let S=!0;for(let R=v.length-1;R>=0;R--){const C=v[R]|0;S&&C==y||(_[R]=C,S=!1)}this.g=_}var l={};function u(v){return-128<=v&&v<128?s(v,function(y){return new o([y|0],y<0?-1:0)}):new o([v|0],v<0?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return V(c(-v));const y=[];let _=1;for(let S=0;v>=_;S++)y[S]=v/_|0,_*=4294967296;return new o(y,0)}function d(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return V(d(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=c(Math.pow(y,8));let S=p;for(let C=0;C<v.length;C+=8){var R=Math.min(8,v.length-C);const I=parseInt(v.substring(C,C+R),y);R<8?(R=c(Math.pow(y,R)),S=S.j(R).add(c(I))):(S=S.j(_),S=S.add(c(I)))}return S}var p=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-V(this).m();let v=0,y=1;for(let _=0;_<this.g.length;_++){const S=this.i(_);v+=(S>=0?S:4294967296+S)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(P(this))return"0";if(x(this))return"-"+V(this).toString(v);const y=c(Math.pow(v,6));var _=this;let S="";for(;;){const R=D(_,y).g;_=T(_,R.j(y));let C=((_.g.length>0?_.g[0]:_.h)>>>0).toString(v);if(_=R,P(_))return C+S;for(;C.length<6;)C="0"+C;S=C+S}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function P(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function x(v){return v.h==-1}t.l=function(v){return v=T(this,v),x(v)?-1:P(v)?0:1};function V(v){const y=v.g.length,_=[];for(let S=0;S<y;S++)_[S]=~v.g[S];return new o(_,~v.h).add(m)}t.abs=function(){return x(this)?V(this):this},t.add=function(v){const y=Math.max(this.g.length,v.g.length),_=[];let S=0;for(let R=0;R<=y;R++){let C=S+(this.i(R)&65535)+(v.i(R)&65535),I=(C>>>16)+(this.i(R)>>>16)+(v.i(R)>>>16);S=I>>>16,C&=65535,I&=65535,_[R]=I<<16|C}return new o(_,_[_.length-1]&-2147483648?-1:0)};function T(v,y){return v.add(V(y))}t.j=function(v){if(P(this)||P(v))return p;if(x(this))return x(v)?V(this).j(V(v)):V(V(this).j(v));if(x(v))return V(this.j(V(v)));if(this.l(E)<0&&v.l(E)<0)return c(this.m()*v.m());const y=this.g.length+v.g.length,_=[];for(var S=0;S<2*y;S++)_[S]=0;for(S=0;S<this.g.length;S++)for(let R=0;R<v.g.length;R++){const C=this.i(S)>>>16,I=this.i(S)&65535,fe=v.i(R)>>>16,ge=v.i(R)&65535;_[2*S+2*R]+=I*ge,w(_,2*S+2*R),_[2*S+2*R+1]+=C*ge,w(_,2*S+2*R+1),_[2*S+2*R+1]+=I*fe,w(_,2*S+2*R+1),_[2*S+2*R+2]+=C*fe,w(_,2*S+2*R+2)}for(v=0;v<y;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=y;v<2*y;v++)_[v]=0;return new o(_,0)};function w(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function k(v,y){this.g=v,this.h=y}function D(v,y){if(P(y))throw Error("division by zero");if(P(v))return new k(p,p);if(x(v))return y=D(V(v),y),new k(V(y.g),V(y.h));if(x(y))return y=D(v,V(y)),new k(V(y.g),y.h);if(v.g.length>30){if(x(v)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,S=y;S.l(v)<=0;)_=M(_),S=M(S);var R=U(_,1),C=U(S,1);for(S=U(S,2),_=U(_,2);!P(S);){var I=C.add(S);I.l(v)<=0&&(R=R.add(_),C=I),S=U(S,1),_=U(_,1)}return y=T(v,R.j(y)),new k(R,y)}for(R=p;v.l(y)>=0;){for(_=Math.max(1,Math.floor(v.m()/y.m())),S=Math.ceil(Math.log(_)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),C=c(_),I=C.j(y);x(I)||I.l(v)>0;)_-=S,C=c(_),I=C.j(y);P(C)&&(C=m),R=R.add(C),v=T(v,I)}return new k(R,v)}t.B=function(v){return D(this,v).h},t.and=function(v){const y=Math.max(this.g.length,v.g.length),_=[];for(let S=0;S<y;S++)_[S]=this.i(S)&v.i(S);return new o(_,this.h&v.h)},t.or=function(v){const y=Math.max(this.g.length,v.g.length),_=[];for(let S=0;S<y;S++)_[S]=this.i(S)|v.i(S);return new o(_,this.h|v.h)},t.xor=function(v){const y=Math.max(this.g.length,v.g.length),_=[];for(let S=0;S<y;S++)_[S]=this.i(S)^v.i(S);return new o(_,this.h^v.h)};function M(v){const y=v.g.length+1,_=[];for(let S=0;S<y;S++)_[S]=v.i(S)<<1|v.i(S-1)>>>31;return new o(_,v.h)}function U(v,y){const _=y>>5;y%=32;const S=v.g.length-_,R=[];for(let C=0;C<S;C++)R[C]=y>0?v.i(C+_)>>>y|v.i(C+_+1)<<32-y:v.i(C+_);return new o(R,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,qT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Pr=o}).apply(typeof c_<"u"?c_:typeof self<"u"?self:typeof window<"u"?window:{});var hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var HT,To,WT,Vl,Kd,GT,KT,QT;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof hl=="object"&&hl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in f))break e;f=f[N]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,N,b){for(var j=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)j[ee-2]=arguments[ee];return h.prototype[N].apply(g,j)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const h=a.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function P(a,h){for(let g=1;g<arguments.length;g++){const N=arguments[g];var f=typeof N;if(f=f!="object"?f:N?Array.isArray(N)?"array":f:"null",f=="array"||f=="object"&&typeof N.length=="number"){f=a.length||0;const b=N.length||0;a.length=f+b;for(let j=0;j<b;j++)a[f+j]=N[j]}else a.push(N)}}class x{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){o.setTimeout(()=>{throw a},0)}function T(){var a=v;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class w{constructor(){this.h=this.g=null}add(h,f){const g=k.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var k=new x(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let M,U=!1,v=new w,y=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(_)}};function _(){for(var a;a=T();){try{a.h.call(a.g)}catch(f){V(f)}var h=k;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}U=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function fe(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(fe,R),fe.prototype.init=function(a,h){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&fe.Z.h.call(this)},fe.prototype.h=function(){fe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ge="closure_listenable_"+(Math.random()*1e6|0),se=0;function Oe(a,h,f,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=N,this.key=++se,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function K(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function Z(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function Ee(a){const h={};for(const f in a)h[f]=a[f];return h}const Ne="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gr(a,h){let f,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(f in g)a[f]=g[f];for(let b=0;b<Ne.length;b++)f=Ne[b],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function Ht(a){this.src=a,this.g={},this.h=0}Ht.prototype.add=function(a,h,f,g,N){const b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);const j=Zt(a,h,g,N);return j>-1?(h=a[j],f||(h.fa=!1)):(h=new Oe(h,this.src,b,!!g,N),h.fa=f,a.push(h)),h};function Kr(a,h){const f=h.type;if(f in a.g){var g=a.g[f],N=Array.prototype.indexOf.call(g,h,void 0),b;(b=N>=0)&&Array.prototype.splice.call(g,N,1),b&&(B(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Zt(a,h,f,g){for(let N=0;N<a.length;++N){const b=a[N];if(!b.da&&b.listener==h&&b.capture==!!f&&b.ha==g)return N}return-1}var Jn="closure_lm_"+(Math.random()*1e6|0),Mc={};function Pm(a,h,f,g,N){if(Array.isArray(h)){for(let b=0;b<h.length;b++)Pm(a,h[b],f,g,N);return null}return f=bm(f),a&&a[ge]?a.J(h,f,l(g)?!!g.capture:!1,N):AS(a,h,f,!1,g,N)}function AS(a,h,f,g,N,b){if(!h)throw Error("Invalid event type");const j=l(N)?!!N.capture:!!N;let ee=Fc(a);if(ee||(a[Jn]=ee=new Ht(a)),f=ee.add(h,f,g,j,b),f.proxy)return f;if(g=kS(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)C||(N=j),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(Nm(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function kS(){function a(f){return h.call(a.src,a.listener,f)}const h=RS;return a}function xm(a,h,f,g,N){if(Array.isArray(h))for(var b=0;b<h.length;b++)xm(a,h[b],f,g,N);else g=l(g)?!!g.capture:!!g,f=bm(f),a&&a[ge]?(a=a.i,b=String(h).toString(),b in a.g&&(h=a.g[b],f=Zt(h,f,g,N),f>-1&&(B(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[b],a.h--)))):a&&(a=Fc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Zt(h,f,g,N)),(f=a>-1?h[a]:null)&&Uc(f))}function Uc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ge])Kr(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Nm(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Fc(h))?(Kr(f,a),f.h==0&&(f.src=null,h[Jn]=null)):B(a)}}}function Nm(a){return a in Mc?Mc[a]:Mc[a]="on"+a}function RS(a,h){if(a.da)a=!0;else{h=new fe(h,this);const f=a.listener,g=a.ha||a.src;a.fa&&Uc(a),a=f.call(g,h)}return a}function Fc(a){return a=a[Jn],a instanceof Ht?a:null}var jc="__closure_events_fn_"+(Math.random()*1e9>>>0);function bm(a){return typeof a=="function"?a:(a[jc]||(a[jc]=function(h){return a.handleEvent(h)}),a[jc])}function nt(){S.call(this),this.i=new Ht(this),this.M=this,this.G=null}p(nt,S),nt.prototype[ge]=!0,nt.prototype.removeEventListener=function(a,h,f,g){xm(this,a,h,f,g)};function dt(a,h){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var N=h;h=new R(g,a),Gr(h,N)}N=!0;let b,j;if(f)for(j=f.length-1;j>=0;j--)b=h.g=f[j],N=Oa(b,g,!0,h)&&N;if(b=h.g=a,N=Oa(b,g,!0,h)&&N,N=Oa(b,g,!1,h)&&N,f)for(j=0;j<f.length;j++)b=h.g=f[j],N=Oa(b,g,!1,h)&&N}nt.prototype.N=function(){if(nt.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let g=0;g<f.length;g++)B(f[g]);delete a.g[h],a.h--}}this.G=null},nt.prototype.J=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},nt.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Oa(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let b=0;b<h.length;++b){const j=h[b];if(j&&!j.da&&j.capture==f){const ee=j.listener,je=j.ha||j.src;j.fa&&Kr(a.i,j),N=ee.call(je,g)!==!1&&N}}return N&&!g.defaultPrevented}function CS(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Dm(a){a.g=CS(()=>{a.g=null,a.i&&(a.i=!1,Dm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class PS extends S{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Dm(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $s(a){S.call(this),this.h=a,this.g={}}p($s,S);var Vm=[];function Om(a){K(a.g,function(h,f){this.g.hasOwnProperty(f)&&Uc(h)},a),a.g={}}$s.prototype.N=function(){$s.Z.N.call(this),Om(this)},$s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bc=o.JSON.stringify,xS=o.JSON.parse,NS=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Lm(){}function Mm(){}var qs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function zc(){R.call(this,"d")}p(zc,R);function $c(){R.call(this,"c")}p($c,R);var Qr={},Um=null;function La(){return Um=Um||new nt}Qr.Ia="serverreachability";function Fm(a){R.call(this,Qr.Ia,a)}p(Fm,R);function Hs(a){const h=La();dt(h,new Fm(h))}Qr.STAT_EVENT="statevent";function jm(a,h){R.call(this,Qr.STAT_EVENT,a),this.stat=h}p(jm,R);function ft(a){const h=La();dt(h,new jm(h,a))}Qr.Ja="timingevent";function Bm(a,h){R.call(this,Qr.Ja,a),this.size=h}p(Bm,R);function Ws(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Gs(){this.g=!0}Gs.prototype.ua=function(){this.g=!1};function bS(a,h,f,g,N,b){a.info(function(){if(a.g)if(b){var j="",ee=b.split("&");for(let de=0;de<ee.length;de++){var je=ee[de].split("=");if(je.length>1){const qe=je[0];je=je[1];const dn=qe.split("_");j=dn.length>=2&&dn[1]=="type"?j+(qe+"="+je+"&"):j+(qe+"=redacted&")}}}else j=null;else j=b;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+f+`
`+j})}function DS(a,h,f,g,N,b,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+f+`
`+b+" "+j})}function Vi(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+OS(a,f)+(g?" "+g:"")})}function VS(a,h){a.info(function(){return"TIMEOUT: "+h})}Gs.prototype.info=function(){};function OS(a,h){if(!a.g)return h;if(!h)return null;try{const b=JSON.parse(h);if(b){for(a=0;a<b.length;a++)if(Array.isArray(b[a])){var f=b[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let j=1;j<g.length;j++)g[j]=""}}}}return Bc(b)}catch{return h}}var Ma={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},zm={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},$m;function qc(){}p(qc,Lm),qc.prototype.g=function(){return new XMLHttpRequest},$m=new qc;function Ks(a){return encodeURIComponent(String(a))}function LS(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Zn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.S=g||1,this.V=new $s(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new qm}function qm(){this.i=null,this.g="",this.h=!1}var Hm={},Hc={};function Wc(a,h,f){a.M=1,a.A=Fa(hn(h)),a.u=f,a.R=!0,Wm(a,null)}function Wm(a,h){a.F=Date.now(),Ua(a),a.B=hn(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),sg(f.i,"t",g),a.C=0,f=a.j.L,a.h=new qm,a.g=Ig(a.j,f?h:null,!a.u),a.P>0&&(a.O=new PS(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,g=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(Vm[0]=N.toString()),N=Vm);for(let b=0;b<N.length;b++){const j=Pm(f,N[b],g||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=a.J?Ee(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Hs(),bS(a.i,a.v,a.B,a.l,a.S,a.u)}Zn.prototype.ba=function(a){a=a.target;const h=this.O;h&&nr(a)==3?h.j():this.Y(a)},Zn.prototype.Y=function(a){try{if(a==this.g)e:{const ee=nr(this.g),je=this.g.ya(),de=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||dg(this.g)))){this.K||ee!=4||je==7||(je==8||de<=0?Hs(3):Hs(2)),Gc(this);var h=this.g.ca();this.X=h;var f=MS(this);if(this.o=h==200,DS(this.i,this.v,this.B,this.l,this.S,ee,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(g)){var b=g;break t}}b=null}if(a=b)Vi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Kc(this,a);else{this.o=!1,this.m=3,ft(12),Xr(this),Qs(this);break e}}if(this.R){a=!0;let qe;for(;!this.K&&this.C<f.length;)if(qe=US(this,f),qe==Hc){ee==4&&(this.m=4,ft(14),a=!1),Vi(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==Hm){this.m=4,ft(15),Vi(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Vi(this.i,this.l,qe,null),Kc(this,qe);if(Gm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||f.length!=0||this.h.h||(this.m=1,ft(16),a=!1),this.o=this.o&&a,!a)Vi(this.i,this.l,f,"[Invalid Chunked Response]"),Xr(this),Qs(this);else if(f.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),nh(j),j.P=!0,ft(11))}}else Vi(this.i,this.l,f,null),Kc(this,f);ee==4&&Xr(this),this.o&&!this.K&&(ee==4?vg(this.j,this):(this.o=!1,Ua(this)))}else JS(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,ft(12)):(this.m=0,ft(13)),Xr(this),Qs(this)}}}catch{}finally{}};function MS(a){if(!Gm(a))return a.g.la();const h=dg(a.g);if(h==="")return"";let f="";const g=h.length,N=nr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Xr(a),Qs(a),"";a.h.i=new o.TextDecoder}for(let b=0;b<g;b++)a.h.h=!0,f+=a.h.i.decode(h[b],{stream:!(N&&b==g-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Gm(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function US(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Hc:(f=Number(h.substring(f,g)),isNaN(f)?Hm:(g+=1,g+f>h.length?Hc:(h=h.slice(g,g+f),a.C=g+f,h)))}Zn.prototype.cancel=function(){this.K=!0,Xr(this)};function Ua(a){a.T=Date.now()+a.H,Km(a,a.H)}function Km(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ws(c(a.aa,a),h)}function Gc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Zn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(VS(this.i,this.B),this.M!=2&&(Hs(),ft(17)),Xr(this),this.m=2,Qs(this)):Km(this,this.T-a)};function Qs(a){a.j.I==0||a.K||vg(a.j,a)}function Xr(a){Gc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Om(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Kc(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||Qc(f.h,a))){if(!a.L&&Qc(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)qa(f),za(f);else break e;th(f),ft(18)}}else f.xa=N[1],0<f.xa-f.K&&N[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Ws(c(f.Va,f),6e3));Ym(f.h)<=1&&f.ta&&(f.ta=void 0)}else Jr(f,11)}else if((a.L||f.g==a)&&qa(f),!I(h))for(N=f.Ba.g.parse(h),h=0;h<N.length;h++){let de=N[h];const qe=de[0];if(!(qe<=f.K))if(f.K=qe,de=de[1],f.I==2)if(de[0]=="c"){f.M=de[1],f.ba=de[2];const dn=de[3];dn!=null&&(f.ka=dn,f.j.info("VER="+f.ka));const Zr=de[4];Zr!=null&&(f.za=Zr,f.j.info("SVER="+f.za));const rr=de[5];rr!=null&&typeof rr=="number"&&rr>0&&(g=1.5*rr,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const ir=a.g;if(ir){const Wa=ir.g?ir.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wa){var b=g.h;b.g||Wa.indexOf("spdy")==-1&&Wa.indexOf("quic")==-1&&Wa.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Xc(b,b.h),b.h=null))}if(g.G){const rh=ir.g?ir.g.getResponseHeader("X-HTTP-Session-Id"):null;rh&&(g.wa=rh,ye(g.J,g.G,rh))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var j=a;if(g.na=Tg(g,g.L?g.ba:null,g.W),j.L){Jm(g.h,j);var ee=j,je=g.O;je&&(ee.H=je),ee.D&&(Gc(ee),Ua(ee)),g.g=j}else yg(g);f.i.length>0&&$a(f)}else de[0]!="stop"&&de[0]!="close"||Jr(f,7);else f.I==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Jr(f,7):eh(f):de[0]!="noop"&&f.l&&f.l.qa(de),f.A=0)}}Hs(4)}catch{}}var FS=class{constructor(a,h){this.g=a,this.map=h}};function Qm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Xm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ym(a){return a.h?1:a.g?a.g.size:0}function Qc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Xc(a,h){a.g?a.g.add(h):a.h=h}function Jm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Qm.prototype.cancel=function(){if(this.i=Zm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Zm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return E(a.i)}var eg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jS(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let N,b=null;g>=0?(N=a[f].substring(0,g),b=a[f].substring(g+1)):N=a[f],h(N,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function er(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof er?(this.l=a.l,Xs(this,a.j),this.o=a.o,this.g=a.g,Ys(this,a.u),this.h=a.h,Yc(this,og(a.i)),this.m=a.m):a&&(h=String(a).match(eg))?(this.l=!1,Xs(this,h[1]||"",!0),this.o=Js(h[2]||""),this.g=Js(h[3]||"",!0),Ys(this,h[4]),this.h=Js(h[5]||"",!0),Yc(this,h[6]||"",!0),this.m=Js(h[7]||"")):(this.l=!1,this.i=new eo(null,this.l))}er.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Zs(h,tg,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Zs(h,tg,!0),"@"),a.push(Ks(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Zs(f,f.charAt(0)=="/"?$S:zS,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Zs(f,HS)),a.join("")},er.prototype.resolve=function(a){const h=hn(this);let f=!!a.j;f?Xs(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var g=a.h;if(f)Ys(h,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=h.h.lastIndexOf("/");N!=-1&&(g=h.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const b=[];for(let j=0;j<N.length;){const ee=N[j++];ee=="."?g&&j==N.length&&b.push(""):ee==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),g&&j==N.length&&b.push("")):(b.push(ee),g=!0)}g=b.join("/")}else g=N}return f?h.h=g:f=a.i.toString()!=="",f?Yc(h,og(a.i)):f=!!a.m,f&&(h.m=a.m),h};function hn(a){return new er(a)}function Xs(a,h,f){a.j=f?Js(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ys(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Yc(a,h,f){h instanceof eo?(a.i=h,WS(a.i,a.l)):(f||(h=Zs(h,qS)),a.i=new eo(h,a.l))}function ye(a,h,f){a.i.set(h,f)}function Fa(a){return ye(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Js(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,BS),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function BS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var tg=/[#\/\?@]/g,zS=/[#\?:]/g,$S=/[#\?]/g,qS=/[#\?@]/g,HS=/#/g;function eo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Yr(a){a.g||(a.g=new Map,a.h=0,a.i&&jS(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=eo.prototype,t.add=function(a,h){Yr(this),this.i=null,a=Oi(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ng(a,h){Yr(a),h=Oi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function rg(a,h){return Yr(a),h=Oi(a,h),a.g.has(h)}t.forEach=function(a,h){Yr(this),this.g.forEach(function(f,g){f.forEach(function(N){a.call(h,N,g,this)},this)},this)};function ig(a,h){Yr(a);let f=[];if(typeof h=="string")rg(a,h)&&(f=f.concat(a.g.get(Oi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return Yr(this),this.i=null,a=Oi(this,a),rg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=ig(this,a),a.length>0?String(a[0]):h):h};function sg(a,h,f){ng(a,h),f.length>0&&(a.i=null,a.g.set(Oi(a,h),E(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const N=Ks(f);f=ig(this,f);for(let b=0;b<f.length;b++){let j=N;f[b]!==""&&(j+="="+Ks(f[b])),a.push(j)}}return this.i=a.join("&")};function og(a){const h=new eo;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Oi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function WS(a,h){h&&!a.j&&(Yr(a),a.i=null,a.g.forEach(function(f,g){const N=g.toLowerCase();g!=N&&(ng(this,g),sg(this,N,f))},a)),a.j=h}function GS(a,h){const f=new Gs;if(o.Image){const g=new Image;g.onload=d(tr,f,"TestLoadImage: loaded",!0,h,g),g.onerror=d(tr,f,"TestLoadImage: error",!1,h,g),g.onabort=d(tr,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(tr,f,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function KS(a,h){const f=new Gs,g=new AbortController,N=setTimeout(()=>{g.abort(),tr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(b=>{clearTimeout(N),b.ok?tr(f,"TestPingServer: ok",!0,h):tr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),tr(f,"TestPingServer: error",!1,h)})}function tr(a,h,f,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(f)}catch{}}function QS(){this.g=new NS}function Jc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Jc,Lm),Jc.prototype.g=function(){return new ja(this.i,this.h)};function ja(a,h){nt.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ja,nt),t=ja.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,no(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,to(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,no(this)),this.g&&(this.readyState=3,no(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ag(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function ag(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?to(this):no(this),this.readyState==3&&ag(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,to(this))},t.Na=function(a){this.g&&(this.response=a,to(this))},t.ga=function(){this.g&&to(this)};function to(a){a.readyState=4,a.l=null,a.j=null,a.B=null,no(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function no(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lg(a){let h="";return K(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Zc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=lg(f),typeof a=="string"?f!=null&&Ks(f):ye(a,h,f))}function Pe(a){nt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Pe,nt);var XS=/^https?$/i,YS=["POST","PUT"];t=Pe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$m.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(b){ug(this,b);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)f.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const b of g.keys())f.set(b,g.get(b));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(b=>b.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(YS,h,void 0)>=0)||g||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,j]of f)this.g.setRequestHeader(b,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(b){ug(this,b)}};function ug(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,cg(a),Ba(a)}function cg(a){a.A||(a.A=!0,dt(a,"complete"),dt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,dt(this,"complete"),dt(this,"abort"),Ba(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ba(this,!0)),Pe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?hg(this):this.Xa())},t.Xa=function(){hg(this)};function hg(a){if(a.h&&typeof s<"u"){if(a.v&&nr(a)==4)setTimeout(a.Ca.bind(a),0);else if(dt(a,"readystatechange"),nr(a)==4){a.h=!1;try{const b=a.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=b===0){let j=String(a.D).match(eg)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),g=!XS.test(j?j.toLowerCase():"")}f=g}if(f)dt(a,"complete"),dt(a,"success");else{a.o=6;try{var N=nr(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",cg(a)}}finally{Ba(a)}}}}function Ba(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||dt(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function nr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return nr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),xS(h)}};function dg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function JS(a){const h={};a=(a.g&&nr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(I(a[g]))continue;var f=LS(a[g]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const b=h[N]||[];h[N]=b,b.push(f)}Z(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ro(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function fg(a){this.za=0,this.i=[],this.j=new Gs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ro("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ro("baseRetryDelayMs",5e3,a),this.Za=ro("retryDelaySeedMs",1e4,a),this.Ta=ro("forwardChannelMaxRetries",2,a),this.va=ro("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Qm(a&&a.concurrentRequestLimit),this.Ba=new QS,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=fg.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,g){ft(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Tg(this,null,this.W),$a(this)};function eh(a){if(pg(a),a.I==3){var h=a.V++,f=hn(a.J);if(ye(f,"SID",a.M),ye(f,"RID",h),ye(f,"TYPE","terminate"),io(a,f),h=new Zn(a,a.j,h),h.M=2,h.A=Fa(hn(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Ig(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ua(h)}Eg(a)}function za(a){a.g&&(nh(a),a.g.cancel(),a.g=null)}function pg(a){za(a),a.v&&(o.clearTimeout(a.v),a.v=null),qa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function $a(a){if(!Xm(a.h)&&!a.m){a.m=!0;var h=a.Ea;M||y(),U||(M(),U=!0),v.add(h,a),a.D=0}}function ZS(a,h){return Ym(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ws(c(a.Ea,a,h),wg(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new Zn(this,this.j,a);let b=this.o;if(this.U&&(b?(b=Ee(b),Gr(b,this.U)):b=this.U),this.u!==null||this.R||(N.J=b,b=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=gg(this,N,h),f=hn(this.J),ye(f,"RID",a),ye(f,"CVER",22),this.G&&ye(f,"X-HTTP-Session-Id",this.G),io(this,f),b&&(this.R?h="headers="+Ks(lg(b))+"&"+h:this.u&&Zc(f,this.u,b)),Xc(this.h,N),this.Ra&&ye(f,"TYPE","init"),this.S?(ye(f,"$req",h),ye(f,"SID","null"),N.U=!0,Wc(N,f,null)):Wc(N,f,h),this.I=2}}else this.I==3&&(a?mg(this,a):this.i.length==0||Xm(this.h)||mg(this))};function mg(a,h){var f;h?f=h.l:f=a.V++;const g=hn(a.J);ye(g,"SID",a.M),ye(g,"RID",f),ye(g,"AID",a.K),io(a,g),a.u&&a.o&&Zc(g,a.u,a.o),f=new Zn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=gg(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Xc(a.h,f),Wc(f,g,h)}function io(a,h){a.H&&K(a.H,function(f,g){ye(h,g,f)}),a.l&&K({},function(f,g){ye(h,g,f)})}function gg(a,h,f){f=Math.min(a.i.length,f);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var N=a.i;let ee=-1;for(;;){const je=["count="+f];ee==-1?f>0?(ee=N[0].g,je.push("ofs="+ee)):ee=0:je.push("ofs="+ee);let de=!0;for(let qe=0;qe<f;qe++){var b=N[qe].g;const dn=N[qe].map;if(b-=ee,b<0)ee=Math.max(0,N[qe].g-100),de=!1;else try{b="req"+b+"_"||"";try{var j=dn instanceof Map?dn:Object.entries(dn);for(const[Zr,rr]of j){let ir=rr;l(rr)&&(ir=Bc(rr)),je.push(b+Zr+"="+encodeURIComponent(ir))}}catch(Zr){throw je.push(b+"type="+encodeURIComponent("_badmap")),Zr}}catch{g&&g(dn)}}if(de){j=je.join("&");break e}}j=void 0}return a=a.i.splice(0,f),h.G=a,j}function yg(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;M||y(),U||(M(),U=!0),v.add(h,a),a.A=0}}function th(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ws(c(a.Da,a),wg(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,_g(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ws(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ft(10),za(this),_g(this))};function nh(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function _g(a){a.g=new Zn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=hn(a.na);ye(h,"RID","rpc"),ye(h,"SID",a.M),ye(h,"AID",a.K),ye(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ye(h,"TO",a.ia),ye(h,"TYPE","xmlhttp"),io(a,h),a.u&&a.o&&Zc(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Fa(hn(h)),f.u=null,f.R=!0,Wm(f,a)}t.Va=function(){this.C!=null&&(this.C=null,za(this),th(this),ft(19))};function qa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function vg(a,h){var f=null;if(a.g==h){qa(a),nh(a),a.g=null;var g=2}else if(Qc(a.h,h))f=h.G,Jm(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;g=La(),dt(g,new Bm(g,f)),$a(a)}else yg(a);else if(N=h.m,N==3||N==0&&h.X>0||!(g==1&&ZS(a,h)||g==2&&th(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),N){case 1:Jr(a,5);break;case 4:Jr(a,10);break;case 3:Jr(a,6);break;default:Jr(a,2)}}}function wg(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function Jr(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),g=a.Ua;const N=!g;g=new er(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Xs(g,"https"),Fa(g),N?GS(g.toString(),f):KS(g.toString(),f)}else ft(2);a.I=0,a.l&&a.l.pa(h),Eg(a),pg(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Eg(a){if(a.I=0,a.ja=[],a.l){const h=Zm(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ja,h),P(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function Tg(a,h,f){var g=f instanceof er?hn(f):new er(f);if(g.g!="")h&&(g.g=h+"."+g.g),Ys(g,g.u);else{var N=o.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const b=new er(null);g&&Xs(b,g),h&&(b.g=h),N&&Ys(b,N),f&&(b.h=f),g=b}return f=a.G,h=a.wa,f&&h&&ye(g,f,h),ye(g,"VER",a.ka),io(a,g),g}function Ig(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Pe(new Jc({ab:f})):new Pe(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sg(){}t=Sg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ha(){}Ha.prototype.g=function(a,h){return new xt(a,h)};function xt(a,h){nt.call(this),this.g=new fg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!I(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Li(this)}p(xt,nt),xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){eh(this.g)},xt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Bc(a),a=f);h.i.push(new FS(h.Ya++,a)),h.I==3&&$a(h)},xt.prototype.N=function(){this.g.l=null,delete this.j,eh(this.g),delete this.g,xt.Z.N.call(this)};function Ag(a){zc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Ag,zc);function kg(){$c.call(this),this.status=1}p(kg,$c);function Li(a){this.g=a}p(Li,Sg),Li.prototype.ra=function(){dt(this.g,"a")},Li.prototype.qa=function(a){dt(this.g,new Ag(a))},Li.prototype.pa=function(a){dt(this.g,new kg)},Li.prototype.oa=function(){dt(this.g,"b")},Ha.prototype.createWebChannel=Ha.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,QT=function(){return new Ha},KT=function(){return La()},GT=Qr,Kd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ma.NO_ERROR=0,Ma.TIMEOUT=8,Ma.HTTP_ERROR=6,Vl=Ma,zm.COMPLETE="complete",WT=zm,Mm.EventType=qs,qs.OPEN="a",qs.CLOSE="b",qs.ERROR="c",qs.MESSAGE="d",nt.prototype.listen=nt.prototype.J,To=Mm,Pe.prototype.listenOnce=Pe.prototype.K,Pe.prototype.getLastError=Pe.prototype.Ha,Pe.prototype.getLastErrorCode=Pe.prototype.ya,Pe.prototype.getStatus=Pe.prototype.ca,Pe.prototype.getResponseJson=Pe.prototype.La,Pe.prototype.getResponseText=Pe.prototype.la,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Fa,HT=Pe}).apply(typeof hl<"u"?hl:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls="12.14.0";function ax(t){Ls=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new oc("@firebase/firestore");function Fi(){return vi.logLevel}function $(t,...e){if(vi.logLevel<=ie.DEBUG){const n=e.map(Sp);vi.debug(`Firestore (${Ls}): ${t}`,...n)}}function Wn(t,...e){if(vi.logLevel<=ie.ERROR){const n=e.map(Sp);vi.error(`Firestore (${Ls}): ${t}`,...n)}}function wi(t,...e){if(vi.logLevel<=ie.WARN){const n=e.map(Sp);vi.warn(`Firestore (${Ls}): ${t}`,...n)}}function Sp(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,XT(t,r,n)}function XT(t,e,n){let r=`FIRESTORE (${Ls}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Wn(r),new Error(r)}function ae(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||XT(e,i,r)}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class ux{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cx{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string",31837,{l:r}),new YT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class hx{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class dx{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new hx(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class h_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fx{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ae(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new h_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new h_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=px(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function Qd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Mh(i)===Mh(s)?te(i,s):Mh(i)?1:-1}return te(t.length,e.length)}const mx=55296,gx=57343;function Mh(t){const e=t.charCodeAt(0);return e>=mx&&e<=gx}function Ts(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="__name__";class mn{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=mn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return te(e.length,n.length)}static compareSegments(e,n){const r=mn.isNumericId(e),i=mn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?mn.extractNumericId(e).compare(mn.extractNumericId(n)):Qd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pr.fromString(e.substring(4,e.length-2))}}class he extends mn{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new he(n)}static emptyPath(){return new he([])}}const yx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends mn{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return yx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===d_}static keyField(){return new Ye([d_])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new z(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(he.fromString(e))}static fromName(e){return new W(he.fromString(e).popFirst(5))}static empty(){return new W(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new he(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t,e,n){if(!n)throw new z(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _x(t,e,n,r){if(e===!0&&r===!0)throw new z(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function f_(t){if(!W.isDocumentKey(t))throw new z(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function p_(t){if(W.isDocumentKey(t))throw new z(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ZT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function hc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function _t(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hc(t);throw new z(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Sa(t,e){if(!ZT(t))throw new z(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new z(O.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=-62135596800,g_=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*g_);return new pe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<m_)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/g_}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Sa(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-m_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:Fe("string",pe._jsonSchemaVersion),seconds:Fe("number"),nanoseconds:Fe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new pe(0,0))}static max(){return new Q(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=-1;function vx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new Or(i,W.empty(),e)}function wx(t){return new Or(t.readTime,t.key,la)}class Or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Or(Q.min(),W.empty(),la)}static max(){return new Or(Q.max(),W.empty(),la)}}function Ex(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ix{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==Tx)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Sx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Us(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}dc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=-1;function Aa(t){return t==null}function vu(t){return t===0&&1/t==-1/0}function Ax(t){return typeof t=="number"&&Number.isInteger(t)&&!vu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="";function kx(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=y_(e)),e=Rx(t.get(n),e);return y_(e)}function Rx(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case eI:n+="";break;default:n+=s}}return n}function y_(t){return t+eI+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dl(this.root,e,this.comparator,!1)}getReverseIterator(){return new dl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dl(this.root,e,this.comparator,!0)}}class dl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new v_(this.data.getIterator())}getIteratorFrom(e){return new v_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class v_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new $e(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new nI("Invalid base64 string: "+s):s}}(e);return new tt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const Cx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(ae(!!t,39018),typeof t=="string"){let e=0;const n=Cx.exec(t);if(ae(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mr(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="server_timestamp",iI="__type__",sI="__previous_value__",oI="__local_write_time__";function Rp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[iI])==null?void 0:r.stringValue)===rI}function fc(t){const e=t.mapValue.fields[sI];return Rp(e)?fc(e):e}function ua(t){const e=Lr(t.mapValue.fields[oI].timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,n,r,i,s,o,l,u,c,d,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=p}}const wu="(default)";class ca{constructor(e,n){this.projectId=e,this.database=n||wu}static empty(){return new ca("","")}get isDefaultDatabase(){return this.database===wu}isEqual(e){return e instanceof ca&&e.projectId===this.projectId&&e.database===this.database}}function xx(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new z(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ca(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="__type__",Nx="__max__",fl={mapValue:{}},lI="__vector__",Eu="value";function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rp(t)?4:Dx(t)?9007199254740991:bx(t)?10:11:G(28295,{value:t})}function kn(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ua(t).isEqual(ua(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Lr(i.timestampValue),l=Lr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Mr(i.bytesValue).isEqual(Mr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),l=be(s.doubleValue);return o===l?vu(o)===vu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ts(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(__(o)!==__(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!kn(o[u],l[u])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function ha(t,e){return(t.values||[]).find(n=>kn(n,e))!==void 0}function Is(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=be(s.integerValue||s.doubleValue),u=be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return w_(t.timestampValue,e.timestampValue);case 4:return w_(ua(t),ua(e));case 5:return Qd(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Mr(s),u=Mr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=te(l[c],u[c]);if(d!==0)return d}return te(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=te(be(s.latitude),be(o.latitude));return l!==0?l:te(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return E_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,E,P,x;const l=s.fields||{},u=o.fields||{},c=(m=l[Eu])==null?void 0:m.arrayValue,d=(E=u[Eu])==null?void 0:E.arrayValue,p=te(((P=c==null?void 0:c.values)==null?void 0:P.length)||0,((x=d==null?void 0:d.values)==null?void 0:x.length)||0);return p!==0?p:E_(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===fl.mapValue&&o===fl.mapValue)return 0;if(s===fl.mapValue)return 1;if(o===fl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=Qd(u[p],d[p]);if(m!==0)return m;const E=Is(l[u[p]],c[d[p]]);if(E!==0)return E}return te(u.length,d.length)}(t.mapValue,e.mapValue);default:throw G(23264,{he:n})}}function w_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=Lr(t),r=Lr(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function E_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Is(n[i],r[i]);if(s)return s}return te(n.length,r.length)}function Ss(t){return Xd(t)}function Xd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Xd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Xd(n.fields[o])}`;return i+"}"}(t.mapValue):G(61005,{value:t})}function Ol(t){switch(Ur(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fc(t);return e?16+Ol(e):16;case 5:return 2*t.stringValue.length;case 6:return Mr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ol(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Hr(r.fields,(s,o)=>{i+=s.length+Ol(o)}),i}(t.mapValue);default:throw G(13486,{value:t})}}function T_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function da(t){return!!t&&"integerValue"in t}function uI(t){return da(t)||function(n){return!!n&&"doubleValue"in n}(t)}function Cp(t){return!!t&&"arrayValue"in t}function I_(t){return!!t&&"nullValue"in t}function S_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ll(t){return!!t&&"mapValue"in t}function bx(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[aI])==null?void 0:r.stringValue)===lI}function Lo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Hr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Lo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Lo(t.arrayValue.values[n]);return e}return{...t}}function Dx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Nx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ll(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Lo(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Lo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ll(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ll(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Hr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new gt(Lo(this.value))}}function cI(t){const e=[];return Hr(t.fields,(n,r)=>{const i=new Ye([n]);if(Ll(r)){const s=cI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ge(e,0,Q.min(),Q.min(),Q.min(),gt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ge(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new Ge(e,2,n,Q.min(),Q.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,Q.min(),Q.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n){this.position=e,this.inclusive=n}}function A_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Is(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function k_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n="asc"){this.field=e,this.dir=n}}function Vx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{}class Ue extends hI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Lx(e,n,r):n==="array-contains"?new Fx(e,r):n==="in"?new jx(e,r):n==="not-in"?new Bx(e,r):n==="array-contains-any"?new zx(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Mx(e,r):new Ux(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Is(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(Is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends hI{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new cn(e,n)}matches(e){return dI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function dI(t){return t.op==="and"}function fI(t){return Ox(t)&&dI(t)}function Ox(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function Yd(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+Ss(t.value);if(fI(t))return t.filters.map(e=>Yd(e)).join(",");{const e=t.filters.map(n=>Yd(n)).join(",");return`${t.op}(${e})`}}function pI(t,e){return t instanceof Ue?function(r,i){return i instanceof Ue&&r.op===i.op&&r.field.isEqual(i.field)&&kn(r.value,i.value)}(t,e):t instanceof cn?function(r,i){return i instanceof cn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&pI(o,i.filters[l]),!0):!1}(t,e):void G(19439)}function mI(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${Ss(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(mI).join(" ,")+"}"}(t):"Filter"}class Lx extends Ue{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class Mx extends Ue{constructor(e,n){super(e,"in",n),this.keys=gI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ux extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=gI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gI(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class Fx extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cp(n)&&ha(n.arrayValue,this.value)}}class jx extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ha(this.value.arrayValue,n)}}class Bx extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(ha(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ha(this.value.arrayValue,n)}}class zx extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ha(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function R_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $x(t,e,n,r,i,s,o)}function Pp(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Aa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),e.Te=n}return e.Te}function xp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Vx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!k_(t.startAt,e.startAt)&&k_(t.endAt,e.endAt)}function Jd(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function qx(t,e,n,r,i,s,o,l){return new Fs(t,e,n,r,i,s,o,l)}function pc(t){return new Fs(t)}function C_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Hx(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function yI(t){return t.collectionGroup!==null}function Mo(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new $e(Ye.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new fa(s,r))}),n.has(Ye.keyField().canonicalString())||e.Ie.push(new fa(Ye.keyField(),r))}return e.Ie}function In(t){const e=J(t);return e.Ee||(e.Ee=Wx(e,Mo(t))),e.Ee}function Wx(t,e){if(t.limitType==="F")return R_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new fa(i.field,s)});const n=t.endAt?new Tu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Tu(t.startAt.position,t.startAt.inclusive):null;return R_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Zd(t,e){const n=t.filters.concat([e]);return new Fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Gx(t,e){const n=t.explicitOrderBy.concat([e]);return new Fs(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Iu(t,e,n){return new Fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mc(t,e){return xp(In(t),In(e))&&t.limitType===e.limitType}function _I(t){return`${Pp(In(t))}|lt:${t.limitType}`}function ji(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>mI(i)).join(", ")}]`),Aa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ss(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ss(i)).join(",")),`Target(${r})`}(In(t))}; limitType=${t.limitType})`}function gc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Mo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=A_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Mo(r),i)||r.endAt&&!function(o,l,u){const c=A_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Mo(r),i))}(t,e)}function Kx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vI(t){return(e,n)=>{let r=!1;for(const i of Mo(t)){const s=Qx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Qx(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Is(u,c):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Hr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return tI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=new Ie(W.comparator);function Gn(){return Xx}const wI=new Ie(W.comparator);function Io(...t){let e=wI;for(const n of t)e=e.insert(n.key,n);return e}function EI(t){let e=wI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function oi(){return Uo()}function TI(){return Uo()}function Uo(){return new Pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Yx=new Ie(W.comparator),Jx=new $e(W.comparator);function ne(...t){let e=Jx;for(const n of t)e=e.add(n);return e}const Zx=new $e(te);function eN(){return Zx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vu(e)?"-0":e}}function Np(t){return{integerValue:""+t}}function II(t,e){return Ax(e)?Np(e):yc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this._=void 0}}function tN(t,e,n){return t instanceof pa?function(i,s){const o={fields:{[iI]:{stringValue:rI},[oI]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Rp(s)&&(s=fc(s)),s&&(o.fields[sI]=s),{mapValue:o}}(n,e):t instanceof As?AI(t,e):t instanceof ks?kI(t,e):t instanceof Rs?function(i,s){const o=SI(i,s),l=ku(o)+ku(i.Ae);return da(o)&&da(i.Ae)?Np(l):yc(i.serializer,l)}(t,e):t instanceof Su?function(i,s){return P_(i,s,Math.min)}(t,e):t instanceof Au?function(i,s){return P_(i,s,Math.max)}(t,e):void 0}function nN(t,e,n){return t instanceof As?AI(t,e):t instanceof ks?kI(t,e):n}function SI(t,e){return t instanceof Rs?uI(e)?e:{integerValue:0}:null}class pa extends _c{}class As extends _c{constructor(e){super(),this.elements=e}}function AI(t,e){const n=RI(e);for(const r of t.elements)n.some(i=>kn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ks extends _c{constructor(e){super(),this.elements=e}}function kI(t,e){let n=RI(e);for(const r of t.elements)n=n.filter(i=>!kn(i,r));return{arrayValue:{values:n}}}class bp extends _c{constructor(e,n){super(),this.serializer=e,this.Ae=n}}class Rs extends bp{}class Su extends bp{}class Au extends bp{}function P_(t,e,n){if(!uI(e))return t.Ae;const r=n(ku(e),ku(t.Ae));return da(e)&&da(t.Ae)?Np(r):yc(t.serializer,r)}function ku(t){return be(t.integerValue||t.doubleValue)}function RI(t){return Cp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n){this.field=e,this.transform=n}}function rN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof As&&i instanceof As||r instanceof ks&&i instanceof ks?Ts(r.elements,i.elements,kn):r instanceof Rs&&i instanceof Rs||r instanceof Su&&i instanceof Su||r instanceof Au&&i instanceof Au?kn(r.Ae,i.Ae):r instanceof pa&&i instanceof pa}(t.transform,e.transform)}class iN{constructor(e,n){this.version=e,this.transformResults=n}}class Je{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Je}static exists(e){return new Je(void 0,e)}static updateTime(e){return new Je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ml(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wc{}function CI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ec(t.key,Je.none()):new ka(t.key,t.data,Je.none());{const n=t.data,r=gt.empty();let i=new $e(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Wr(t.key,r,new Ot(i.toArray()),Je.none())}}function sN(t,e,n){t instanceof ka?function(i,s,o){const l=i.value.clone(),u=N_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Wr?function(i,s,o){if(!Ml(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=N_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(PI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Fo(t,e,n,r){return t instanceof ka?function(s,o,l,u){if(!Ml(s.precondition,o))return l;const c=s.value.clone(),d=b_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Wr?function(s,o,l,u){if(!Ml(s.precondition,o))return l;const c=b_(s.fieldTransforms,u,o),d=o.data;return d.setAll(PI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ml(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function oN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=SI(r.transform,i||null);s!=null&&(n===null&&(n=gt.empty()),n.set(r.field,s))}return n||null}function x_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ts(r,i,(s,o)=>rN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ka extends wc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wr extends wc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function PI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function N_(t,e,n){const r=new Map;ae(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,nN(o,l,n[i]))}return r}function b_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tN(s,o,e))}return r}class Ec extends wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xI extends wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&sN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=TI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=CI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,(n,r)=>x_(n,r))&&Ts(this.baseMutations,e.baseMutations,(n,r)=>x_(n,r))}}class Dp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Yx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Dp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,oe;function NI(t){switch(t){case O.OK:return G(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function bI(t){if(t===void 0)return Wn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Le.OK:return O.OK;case Le.CANCELLED:return O.CANCELLED;case Le.UNKNOWN:return O.UNKNOWN;case Le.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Le.INTERNAL:return O.INTERNAL;case Le.UNAVAILABLE:return O.UNAVAILABLE;case Le.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Le.NOT_FOUND:return O.NOT_FOUND;case Le.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Le.ABORTED:return O.ABORTED;case Le.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Le.DATA_LOSS:return O.DATA_LOSS;default:return G(39323,{code:t})}}(oe=Le||(Le={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=new Pr([4294967295,4294967295],0);function D_(t){const e=cN().encode(t),n=new qT;return n.update(e),new Uint8Array(n.digest())}function V_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Pr([n,r],0),new Pr([i,s],0)]}class Vp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new So(`Invalid padding: ${n}`);if(r<0)throw new So(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new So(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new So(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Pr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Pr.fromNumber(r)));return i.compare(hN)===1&&(i=new Pr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=D_(e),[r,i]=V_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Vp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=D_(e),[r,i]=V_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class So extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ca.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ra(Q.min(),i,new Ie(te),Gn(),ne())}}class Ca{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ca(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class DI{constructor(e,n){this.targetId=e,this.Ce=n}}class VI{constructor(e,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class O_{constructor(e){this.targetId=e,this.ve=0,this.Fe=L_(),this.Me=tt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),n=ne(),r=ne();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G(38017,{changeType:s})}}),new Ca(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=L_()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ae(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}}const po="WatchChangeAggregator";class dN{constructor(e){this.Ge=e,this.ze=new Map,this.je=Gn(),this.Je=pl(),this.He=pl(),this.Ze=new Ie(te)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.ze.get(n);if(r)switch(e.state){case 0:this.nt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}else $(po,`handleTargetChange received targetChange for untracked target ID (${n}) with state (${e.state})`)})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.Ce.count,i=this.st(n);if(i){const s=i.target;if(Jd(s))if(r===0){const o=new W(s.path);this.et(n,o,Ge.newNoDocument(o,Q.min()))}else ae(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}_t(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Mr(r).toUint8Array()}catch(u){if(u instanceof nI)return wi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Vp(o,i,s)}catch(u){return wi(u instanceof So?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ut(e,n,r){return n.Ce.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Pt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&Jd(l.target)){const u=new W(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.et(o,u,Ge.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=ne();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.st(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Ra(e,n,this.Ze,this.je,r);return this.je=Gn(),this.Je=pl(),this.He=pl(),this.Ze=new Ie(te),i}Ye(e,n){const r=this.ze.get(e);if(!r||!this.nt(e))return void $(po,`addDocumentToTarget received document for unknown inactive target (${e})`);const i=this.It(e,n.key)?2:0;r.Ke(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Tt(n.key).add(e)),this.He=this.He.insert(n.key,this.Et(n.key).add(e))}et(e,n,r){const i=this.ze.get(e);i&&this.nt(e)?(this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Et(n).delete(e)),this.He=this.He.insert(n,this.Et(n).add(e)),r&&(this.je=this.je.insert(n,r))):$(po,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){const n=this.ze.get(e);if(!n)return 0;const r=n.ke();return this.Ge.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}$e(e){let n=this.ze.get(e);n||($(po,`recordPendingTargetRequest set up tracking for target ID ${e}`),n=new O_(e),this.ze.set(e,n)),n.$e()}Et(e){let n=this.He.get(e);return n||(n=new $e(te),this.He=this.He.insert(e,n)),n}Tt(e){let n=this.Je.get(e);return n||(n=new $e(te),this.Je=this.Je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||$(po,"Detected inactive target",e),n}st(e){const n=this.ze.get(e);return n===void 0||n.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new O_(e)),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function pl(){return new Ie(W.comparator)}function L_(){return new Ie(W.comparator)}const fN={asc:"ASCENDING",desc:"DESCENDING"},pN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mN={and:"AND",or:"OR"};class gN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ef(t,e){return t.useProto3Json||Aa(e)?e:{value:e}}function Ru(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function OI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yN(t,e){return Ru(t,e.toTimestamp())}function Ut(t){return ae(!!t,49232),Q.fromTimestamp(function(n){const r=Lr(n);return new pe(r.seconds,r.nanos)}(t))}function Op(t,e){return tf(t,e).canonicalString()}function tf(t,e){const n=function(i){return new he(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function LI(t){const e=he.fromString(t);return ae(zI(e),10190,{key:e.toString()}),e}function Cu(t,e){return Op(t.databaseId,e.path)}function jo(t,e){const n=LI(e);if(n.get(1)!==t.databaseId.projectId)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(UI(n))}function MI(t,e){return Op(t.databaseId,e)}function _N(t){const e=LI(t);return e.length===4?he.emptyPath():UI(e)}function nf(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function UI(t){return ae(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function M_(t,e,n){return{name:Cu(t,e),fields:n.value.mapValue.fields}}function vN(t,e){return"found"in e?function(r,i){ae(!!i.found,43571),i.found.name,i.found.updateTime;const s=jo(r,i.found.name),o=Ut(i.found.updateTime),l=i.found.createTime?Ut(i.found.createTime):Q.min(),u=new gt({mapValue:{fields:i.found.fields}});return Ge.newFoundDocument(s,o,l,u)}(t,e):"missing"in e?function(r,i){ae(!!i.missing,3894),ae(!!i.readTime,22933);const s=jo(r,i.missing),o=Ut(i.readTime);return Ge.newNoDocument(s,o)}(t,e):G(7234,{result:e})}function wN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ae(d===void 0||typeof d=="string",58123),tt.fromBase64String(d||"")):(ae(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),tt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?O.UNKNOWN:bI(c.code);return new z(d,c.message||"")}(o);n=new VI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=jo(t,r.document.name),s=Ut(r.document.updateTime),o=r.document.createTime?Ut(r.document.createTime):Q.min(),l=new gt({mapValue:{fields:r.document.fields}}),u=Ge.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Ul(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=jo(t,r.document),s=r.readTime?Ut(r.readTime):Q.min(),o=Ge.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ul([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=jo(t,r.document),s=r.removedTargetIds||[];n=new Ul([],s,i,null)}else{if(!("filter"in e))return G(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new uN(i,s),l=r.targetId;n=new DI(l,o)}}return n}function FI(t,e){let n;if(e instanceof ka)n={update:M_(t,e.key,e.value)};else if(e instanceof Ec)n={delete:Cu(t,e.key)};else if(e instanceof Wr)n={update:M_(t,e.key,e.data),updateMask:PN(e.fieldMask)};else{if(!(e instanceof xI))return G(16599,{Vt:e.type});n={verify:Cu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof pa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof As)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ks)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Rs)return{fieldPath:o.field.canonicalString(),increment:l.Ae};if(l instanceof Su)return{fieldPath:o.field.canonicalString(),minimum:l.Ae};if(l instanceof Au)return{fieldPath:o.field.canonicalString(),maximum:l.Ae};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:yN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G(27497)}(t,e.precondition)),n}function EN(t,e){return t&&t.length>0?(ae(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Ut(i.updateTime):Ut(s);return o.isEqual(Q.min())&&(o=Ut(s)),new iN(o,i.transformResults||[])}(n,e))):[]}function TN(t,e){return{documents:[MI(t,e.path)]}}function IN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=MI(t,i);const s=function(c){if(c.length!==0)return BI(cn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Bi(m.field),direction:kN(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ef(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{dt:n,parent:i}}function SN(t){let e=_N(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=jI(p);return m instanceof cn&&fI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new fa(zi(P.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Aa(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,E=p.values||[];return new Tu(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,E=p.values||[];return new Tu(E,m)}(n.endAt)),qx(e,i,o,s,l,"F",u,c)}function AN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function jI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zi(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=zi(n.unaryFilter.field);return Ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=zi(n.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=zi(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(zi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>jI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(t):G(30097,{filter:t})}function kN(t){return fN[t]}function RN(t){return pN[t]}function CN(t){return mN[t]}function Bi(t){return{fieldPath:t.canonicalString()}}function zi(t){return Ye.fromServerFormat(t.fieldPath)}function BI(t){return t instanceof Ue?function(n){if(n.op==="=="){if(S_(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NAN"}};if(I_(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(S_(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NOT_NAN"}};if(I_(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bi(n.field),op:RN(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(i=>BI(i));return r.length===1?r[0]:{compositeFilter:{op:CN(n.op),filters:r}}}(t):G(54877,{filter:t})}function PN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function $I(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=tt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e){this.gt=e}}function NN(t){const e=SN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Iu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(){this.Sn=new DN}addToCollectionParentIndex(e,n){return this.Sn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Or.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Or.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class DN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new $e(he.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $e(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qI=41943040;class Tt{static withCacheSize(e){return new Tt(e,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(qI,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new Fr(0)}static _r(){return new Fr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="LruGarbageCollector",VN=1048576;function j_([t,e],[n,r]){const i=te(t,n);return i===0?te(e,r):i}class ON{constructor(e){this.hr=e,this.buffer=new $e(j_),this.Pr=0}Tr(){return++this.Pr}Ir(e){const n=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();j_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class LN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return this.Er!==null}Rr(e){$(F_,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Us(n)?$(F_,"Ignoring IndexedDB error during garbage collection: ",n):await Ms(n)}await this.Rr(3e5)})}}class MN{constructor(e,n){this.Ar=e,this.params=n}calculateTargetCount(e,n){return this.Ar.Vr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(dc.ce);const r=new ON(n);return this.Ar.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Ar.dr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Ar.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Ar.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(U_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),U_):this.mr(e,n))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Fi()<=ie.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function UN(t,e){return new MN(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(){this.changes=new Pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Fo(r.mutation,i,Ot.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=oi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Io();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=oi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Gn();const o=Uo(),l=function(){return Uo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Wr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Fo(d.mutation,c,d.mutation.getFieldMask(),pe.now())):o.set(c.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new jN(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Uo();let i=new Ie((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Ot.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=TI();d.forEach(m=>{if(!s.has(m)){const E=CI(n.get(m),r.get(m));E!==null&&p.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return Hx(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):yI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(oi());let l=la,u=s;return o.next(c=>L.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(d=>({batchId:l,changes:EI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Io();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Io();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const c=function(p,m){return new Fs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Ge.newInvalidDocument(d)))});let l=Io();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Fo(d.mutation,c,Ot.empty(),pe.now()),gc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,n){return L.resolve(this.Or.get(n))}saveBundleMetadata(e,n){return this.Or.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ut(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Nr.get(n))}saveNamedQuery(e,n){return this.Nr.set(n.name,function(i){return{name:i.name,query:NN(i.bundledQuery),readTime:Ut(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this.overlays=new Ie(W.comparator),this.Br=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=oi();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Br.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Br.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=oi(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=oi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=oi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return L.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Br.get(i.largestBatchId).delete(r.key);this.Br.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lN(n,r));let s=this.Br.get(n);s===void 0&&(s=ne(),this.Br.set(n,s)),this.Br.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this.Lr=new $e(He.kr),this.qr=new $e(He.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,n){const r=new He(e,n);this.Lr=this.Lr.add(r),this.qr=this.qr.add(r)}Ur(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.$r(new He(e,n))}Wr(e,n){e.forEach(r=>this.removeReference(r,n))}Qr(e){const n=new W(new he([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.$r(o),s.push(o.key)}),s}Gr(){this.Lr.forEach(e=>this.$r(e))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){const n=new W(new he([])),r=new He(n,e),i=new He(n,e+1);let s=ne();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.Lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.jr=n}static kr(e,n){return W.comparator(e.key,n.key)||te(e.jr,n.jr)}static Kr(e,n){return te(e.jr,n.jr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Xn=1,this.Jr=new $e(He.kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new aN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Jr=this.Jr.add(new He(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Hr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Zr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?kp:this.Xn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const l=this.Hr(o.jr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(te);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],l=>{r=r.add(l.jr)})}),L.resolve(this.Xr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new He(new W(s),0);let l=new $e(te);return this.Jr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.jr)),!0)},o),L.resolve(this.Xr(l))}Xr(e){const n=[];return e.forEach(r=>{const i=this.Hr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return L.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}tr(e){}containsKey(e,n){const r=new He(n,0),i=this.Jr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Yr(e,n){return this.Zr(e)}Zr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Hr(e){const n=this.Zr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e){this.ei=e,this.docs=function(){return new Ie(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ei(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let r=Gn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ge.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Gn();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ex(wx(d),r)<=0||(i.has(d.key)||gc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G(9500)}ti(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new GN(this)}getSize(e){return L.resolve(this.size)}}class GN extends FN{constructor(e){super(),this.Fr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Fr.addEntry(e,i)):this.Fr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Fr.getEntry(e,n)}getAllFromCache(e,n){return this.Fr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e){this.persistence=e,this.ni=new Pi(n=>Pp(n),xp),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.ri=0,this.ii=new Lp,this.targetCount=0,this.si=Fr.sr()}forEachTarget(e,n){return this.ni.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ri&&(this.ri=n),L.resolve()}cr(e){this.ni.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.si=new Fr(n),this.highestTargetId=n),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,n){return this.cr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.cr(n),L.resolve()}removeTargetData(e,n){return this.ni.delete(n.target),this.ii.Qr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ni.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ni.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ni.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.ii.Ur(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.ii.Wr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ii.Qr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ii.zr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.ii.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n){this.oi={},this.overlays={},this._i=new dc(0),this.ai=!1,this.ai=!0,this.ui=new qN,this.referenceDelegate=e(this),this.ci=new KN(this),this.indexManager=new bN,this.remoteDocumentCache=function(i){return new WN(i)}(r=>this.referenceDelegate.li(r)),this.serializer=new xN(n),this.hi=new zN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $N,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.oi[e.toKey()];return r||(r=new HN(n,this.referenceDelegate),this.oi[e.toKey()]=r),r}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new QN(this._i.next());return this.referenceDelegate.Pi(),r(i).next(s=>this.referenceDelegate.Ti(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return L.or(Object.values(this.oi).map(r=>()=>r.containsKey(e,n)))}}class QN extends Ix{constructor(e){super(),this.currentSequenceNumber=e}}class Mp{constructor(e){this.persistence=e,this.Ei=new Lp,this.Ri=null}static Ai(e){return new Mp(e)}get Vi(){if(this.Ri)return this.Ri;throw G(60996)}addReference(e,n,r){return this.Ei.addReference(r,n),this.Vi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ei.removeReference(r,n),this.Vi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Vi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ei.Qr(n.targetId).forEach(i=>this.Vi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Vi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Pi(){this.Ri=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Vi,r=>{const i=W.fromPath(r);return this.di(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.di(e,n).next(r=>{r?this.Vi.delete(n.toString()):this.Vi.add(n.toString())})}li(e){return 0}di(e,n){return L.or([()=>L.resolve(this.Ei.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Pu{constructor(e,n){this.persistence=e,this.mi=new Pi(r=>kx(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=UN(this,n)}static Ai(e,n){return new Pu(e,n)}Pi(){}Ti(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Vr(e){const n=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}gr(e){let n=0;return this.dr(e,r=>{n++}).next(()=>n)}dr(e,n){return L.forEach(this.mi,(r,i)=>this.yr(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ti(e,o=>this.yr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.mi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.mi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.mi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.mi.set(n,e.currentSequenceNumber),L.resolve()}li(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ol(e.data.value)),n}yr(e,n,r){return L.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.mi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ps=r,this.Ts=i}static Is(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Up(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=function(){return jR()?8:Sx(ct())>0?6:4}()}initialize(e,n){this.ds=e,this.indexManager=n,this.Es=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.fs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.gs(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new XN;return this.ps(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.ys(e,n,o,l.size)})}).next(()=>s.result)}ys(e,n,r,i){return r.documentReadCount<this.As?(Fi()<=ie.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),L.resolve()):(Fi()<=ie.DEBUG&&$("QueryEngine","Query:",ji(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Vs*i?(Fi()<=ie.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):L.resolve())}fs(e,n){if(C_(n))return L.resolve(null);let r=In(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Iu(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.ds.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ws(n,l);return this.Ss(n,c,o,u.readTime)?this.fs(e,Iu(n,null,"F")):this.bs(e,c,n,u)}))})))}gs(e,n,r,i){return C_(n)||i.isEqual(Q.min())?L.resolve(null):this.ds.getDocuments(e,r).next(s=>{const o=this.ws(n,s);return this.Ss(n,o,r,i)?L.resolve(null):(Fi()<=ie.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ji(n)),this.bs(e,o,n,vx(i,la)).next(l=>l))})}ws(e,n){let r=new $e(vI(e));return n.forEach((i,s)=>{gc(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ps(e,n,r){return Fi()<=ie.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",ji(n)),this.ds.getDocumentsMatchingQuery(e,n,Or.min(),r)}bs(e,n,r,i){return this.ds.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="LocalStore",JN=3e8;class ZN{constructor(e,n,r,i){this.persistence=e,this.Ds=n,this.serializer=i,this.Cs=new Ie(te),this.vs=new Pi(s=>Pp(s),xp),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(r)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BN(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Cs))}}function e2(t,e,n,r){return new ZN(t,e,n,r)}async function WI(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.xs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Os:c,removedBatchIds:o,addedBatchIds:l}))})})}function t2(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ms.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let E=L.resolve();return m.forEach(P=>{E=E.next(()=>d.getEntry(u,P)).next(x=>{const V=c.docVersions.get(P);ae(V!==null,48541),x.version.compareTo(V)<0&&(p.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),d.addEntry(x)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function GI(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ci.getLastRemoteSnapshotVersion(n))}function n2(t,e){const n=J(t),r=e.snapshotVersion;let i=n.Cs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ms.newChangeBuffer({trackRemovals:!0});i=n.Cs;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.ci.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.ci.addMatchingKeys(s,d.addedDocuments,p)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(tt.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(p,E),function(x,V,T){return x.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=JN?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,E,d)&&l.push(n.ci.updateTargetData(s,E))});let u=Gn(),c=ne();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(r2(s,o,e.documentUpdates).next(d=>{u=d.Ns,c=d.Bs})),!r.isEqual(Q.min())){const d=n.ci.getLastRemoteSnapshotVersion(s).next(p=>n.ci.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Cs=i,s))}function r2(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Gn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(Fp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ns:o,Bs:i}})}function i2(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=kp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function s2(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.ci.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.ci.allocateTargetId(r).next(o=>(i=new Ln(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.ci.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Cs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Cs=n.Cs.insert(r.targetId,r),n.vs.set(e,r.targetId)),r})}async function rf(t,e,n){const r=J(t),i=r.Cs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Us(o))throw o;$(Fp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Cs=r.Cs.remove(e),r.vs.delete(i.target)}function B_(t,e,n){const r=J(t);let i=Q.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=J(u),m=p.vs.get(d);return m!==void 0?L.resolve(p.Cs.get(m)):p.ci.getTargetData(c,d)}(r,o,In(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.ci.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Ds.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:ne())).next(l=>(o2(r,Kx(e),l),{documents:l,Ls:s})))}function o2(t,e,n){let r=t.Fs.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Fs.set(e,r)}class z_{constructor(){this.activeTargetIds=eN()}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class a2{constructor(){this.Co=new z_,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,n,r){this.vo[e]=n}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new z_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{Fo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="ConnectivityMonitor";class q_{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){$($_,"Network connectivity changed: AVAILABLE");for(const e of this.Bo)e(0)}No(){$($_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Bo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml=null;function sf(){return ml===null?ml=function(){return 268435456+Math.round(2147483648*Math.random())}():ml++,"0x"+ml.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="RestConnection",u2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class c2{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Uo=this.databaseId.database===wu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}$o(e,n,r,i,s){const o=sf(),l=this.Wo(e,n.toUriEncodedString());$(Uh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(u,i,s);const{host:c}=new URL(l),d=Qn(c);return this.Go(e,l,u,r,d).then(p=>($(Uh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw wi(Uh,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}zo(e,n,r,i,s,o){return this.$o(e,n,r,i,s)}Qo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ls}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Wo(e,n){const r=u2[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection",mo=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class ds extends c2{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){if(!ds.u_){const e=KT();mo(e,GT.STAT_EVENT,n=>{n.stat===Kd.PROXY?$(st,"STAT_EVENT: detected buffering proxy"):n.stat===Kd.NOPROXY&&$(st,"STAT_EVENT: detected no buffering proxy")}),ds.u_=!0}}Go(e,n,r,i,s){const o=sf();return new Promise((l,u)=>{const c=new HT;c.setWithCredentials(!0),c.listenOnce(WT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Vl.NO_ERROR:const p=c.getResponseJson();$(st,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Vl.TIMEOUT:$(st,`RPC '${e}' ${o} timed out`),u(new z(O.DEADLINE_EXCEEDED,"Request time out"));break;case Vl.HTTP_ERROR:const m=c.getStatus();if($(st,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let E=c.getResponseJson();Array.isArray(E)&&(E=E[0]);const P=E==null?void 0:E.error;if(P&&P.status&&P.message){const x=function(T){const w=T.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(w)>=0?w:O.UNKNOWN}(P.status);u(new z(x,P.message))}else u(new z(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new z(O.UNAVAILABLE,"Connection failed."));break;default:G(9055,{c_:e,streamId:o,l_:c.getLastErrorCode(),h_:c.getLastError()})}}finally{$(st,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);$(st,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}P_(e,n,r){const i=sf(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Qo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");$(st,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);this.T_(d);let p=!1,m=!1;const E=new h2({jo:P=>{m?$(st,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(p||($(st,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),$(st,`RPC '${e}' stream ${i} sending:`,P),d.send(P))},Jo:()=>d.close()});return mo(d,To.EventType.OPEN,()=>{m||($(st,`RPC '${e}' stream ${i} transport opened.`),E.r_())}),mo(d,To.EventType.CLOSE,()=>{m||(m=!0,$(st,`RPC '${e}' stream ${i} transport closed`),E.s_(),this.I_(d))}),mo(d,To.EventType.ERROR,P=>{m||(m=!0,wi(st,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),E.s_(new z(O.UNAVAILABLE,"The operation could not be completed")))}),mo(d,To.EventType.MESSAGE,P=>{var x;if(!m){const V=P.data[0];ae(!!V,16349);const T=V,w=(T==null?void 0:T.error)||((x=T[0])==null?void 0:x.error);if(w){$(st,`RPC '${e}' stream ${i} received error:`,w);const k=w.status;let D=function(v){const y=Le[v];if(y!==void 0)return bI(y)}(k),M=w.message;k==="NOT_FOUND"&&M.includes("database")&&M.includes("does not exist")&&M.includes(this.databaseId.database)&&wi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=O.INTERNAL,M="Unknown error status: "+k+" with message "+w.message),m=!0,E.s_(new z(D,M)),d.close()}else $(st,`RPC '${e}' stream ${i} received:`,V),E.o_(V)}}),ds.a_(),setTimeout(()=>{E.i_()},0),E}terminate(){this.__.forEach(e=>e.close()),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter(n=>n===e)}Qo(e,n,r){super.Qo(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return QT()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(t){return new ds(t)}function Fh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t){return new gN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ds.u_=!1;class jp{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Di=e,this.timerId=n,this.E_=r,this.R_=i,this.A_=s,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();const n=Math.floor(this.V_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){this.d_!==null&&(this.d_.skipDelay(),this.d_=null)}cancel(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="PersistentStream";class KI{constructor(e,n,r,i,s,o,l,u){this.Di=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new jp(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,n){this.q_(),this.K_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Wn(n.toString()),Wn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(n)}U_(){}auth(){this.state=1;const e=this.W_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.Q_(r,i)},r=>{e(()=>{const i=new z(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}Q_(e,n){const r=this.W_(this.b_);this.stream=this.z_(e,n),this.stream.Ho(()=>{r(()=>this.listener.Ho())}),this.stream.Xo(()=>{r(()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.Xo()))}),this.stream.e_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.v_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return $(H_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Di.enqueueAndForget(()=>this.b_===e?n():($(H_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class f2 extends KI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=wN(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Ut(o.readTime):Q.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=nf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Jd(u)?{documents:TN(s,u)}:{query:IN(s,u).dt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=OI(s,o.resumeToken);const c=ef(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=Ru(s,o.snapshotVersion.toTimestamp());const c=ef(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=AN(this.serializer,e);r&&(n.labels=r),this.k_(n)}Z_(e){const n={};n.database=nf(this.serializer),n.removeTarget=e,this.k_(n)}}class p2 extends KI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ae(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ae(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=EN(e.writeResults,e.commitTime),r=Ut(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=nf(this.serializer),this.k_(e)}Y_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>FI(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{}class g2 extends m2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.$o(e,tf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(O.UNKNOWN,s.toString())})}zo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.zo(e,tf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(O.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}function y2(t,e,n,r){return new g2(t,e,n,r)}class _2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Wn(n),this._a=!1):$("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="RemoteStore";class v2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new Fr(1e3),this.Aa=new Fr(1001),this.Va=new Set,this.da=[],this.ma=s,this.ma.Fo(o=>{r.enqueueAndForget(async()=>{xi(this)&&($(Rn,"Restarting streams for network reachability change."),await async function(u){const c=J(u);c.Va.add(4),await Pa(c),c.fa.set("Unknown"),c.Va.delete(4),await Ic(c)}(this))})}),this.fa=new _2(r,i)}}async function Ic(t){if(xi(t))for(const e of t.da)await e(!0)}async function Pa(t){for(const e of t.da)await e(!1)}function of(t,e){return t.Ia.get(e)||void 0}function QI(t,e){const n=J(t),r=of(n,e.targetId);if(r!==void 0&&n.Ta.has(r))return;const i=function(l,u){const c=of(l,u);c!==void 0&&l.Ea.delete(c);const d=function(m,E){return E%2!=0?m.Aa.next():m.Ra.next()}(l,u);return l.Ia.set(u,d),l.Ea.set(d,u),d}(n,e.targetId);$(Rn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new Ln(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ta.set(i,s),qp(n)?$p(n):js(n).x_()&&zp(n,s)}function Bp(t,e){const n=J(t),r=js(n),i=of(n,e);$(Rn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ta.delete(i),n.Ia.delete(e),n.Ea.delete(i),r.x_()&&XI(n,i),n.Ta.size===0&&(r.x_()?r.B_():xi(n)&&n.fa.set("Unknown"))}function zp(t,e){if(t.ga.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.Ea.get(e.targetId);if(n===void 0)return void $(Rn,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}js(t).H_(e)}function XI(t,e){t.ga.$e(e),js(t).Z_(e)}function $p(t){t.ga=new dN({getRemoteKeysForTarget:e=>{const n=t.Ea.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):ne()},Rt:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),js(t).start(),t.fa.aa()}function qp(t){return xi(t)&&!js(t).M_()&&t.Ta.size>0}function xi(t){return J(t).Va.size===0}function YI(t){t.ga=void 0}async function w2(t){t.fa.set("Online")}async function E2(t){t.Ta.forEach((e,n)=>{zp(t,e)})}async function T2(t,e){YI(t),qp(t)?(t.fa.la(e),$p(t)):t.fa.set("Unknown")}async function I2(t,e,n){if(t.fa.set("Online"),e instanceof VI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds){if(i.Ta.has(l)){const u=i.Ea.get(l);u!==void 0&&(await i.remoteSyncer.rejectListen(u,o),i.Ia.delete(u),i.Ea.delete(l)),i.Ta.delete(l)}i.ga.removeTarget(l)}}(t,e)}catch(r){$(Rn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xu(t,r)}else if(e instanceof Ul?t.ga.Xe(e):e instanceof DI?t.ga.it(e):t.ga.tt(e),!n.isEqual(Q.min()))try{const r=await GI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.ga.Pt(o);l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const p=s.Ta.get(d);p&&s.Ta.set(d,p.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,d)=>{const p=s.Ta.get(c);if(!p)return;s.Ta.set(c,p.withResumeToken(tt.EMPTY_BYTE_STRING,p.snapshotVersion)),XI(s,c);const m=new Ln(p.target,c,d,p.sequenceNumber);zp(s,m)});const u=function(d,p){const m=new Map;p.targetChanges.forEach((P,x)=>{const V=d.Ea.get(x);V!==void 0&&m.set(V,P)});let E=new Ie(te);return p.targetMismatches.forEach((P,x)=>{const V=d.Ea.get(P);V!==void 0&&(E=E.insert(V,x))}),new Ra(p.snapshotVersion,m,E,p.documentUpdates,p.resolvedLimboDocuments)}(s,l);return s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){$(Rn,"Failed to raise snapshot:",r),await xu(t,r)}}async function xu(t,e,n){if(!Us(e))throw e;t.Va.add(1),await Pa(t),t.fa.set("Offline"),n||(n=()=>GI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(Rn,"Retrying IndexedDB access"),await n(),t.Va.delete(1),await Ic(t)})}function JI(t,e){return e().catch(n=>xu(t,n,e))}async function Sc(t){const e=J(t),n=jr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:kp;for(;S2(e);)try{const i=await i2(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,A2(e,i)}catch(i){await xu(e,i)}ZI(e)&&e0(e)}function S2(t){return xi(t)&&t.Pa.length<10}function A2(t,e){t.Pa.push(e);const n=jr(t);n.x_()&&n.X_&&n.Y_(e.mutations)}function ZI(t){return xi(t)&&!jr(t).M_()&&t.Pa.length>0}function e0(t){jr(t).start()}async function k2(t){jr(t).na()}async function R2(t){const e=jr(t);for(const n of t.Pa)e.Y_(n.mutations)}async function C2(t,e,n){const r=t.Pa.shift(),i=Dp.from(r,e,n);await JI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Sc(t)}async function P2(t,e){e&&jr(t).X_&&await async function(r,i){if(function(o){return NI(o)&&o!==O.ABORTED}(i.code)){const s=r.Pa.shift();jr(r).N_(),await JI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Sc(r)}}(t,e),ZI(t)&&e0(t)}async function W_(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),$(Rn,"RemoteStore received new credentials");const r=xi(n);n.Va.add(3),await Pa(n),r&&n.fa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Va.delete(3),await Ic(n)}async function x2(t,e){const n=J(t);e?(n.Va.delete(2),await Ic(n)):e||(n.Va.add(2),await Pa(n),n.fa.set("Unknown"))}function js(t){return t.pa||(t.pa=function(n,r,i){const s=J(n);return s.ia(),new f2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ho:w2.bind(null,t),Xo:E2.bind(null,t),e_:T2.bind(null,t),J_:I2.bind(null,t)}),t.da.push(async e=>{e?(t.pa.N_(),qp(t)?$p(t):t.fa.set("Unknown")):(await t.pa.stop(),YI(t))})),t.pa}function jr(t){return t.ya||(t.ya=function(n,r,i){const s=J(n);return s.ia(),new p2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ho:()=>Promise.resolve(),Xo:k2.bind(null,t),e_:P2.bind(null,t),ea:R2.bind(null,t),ta:C2.bind(null,t)}),t.da.push(async e=>{e?(t.ya.N_(),await Sc(t)):(await t.ya.stop(),t.Pa.length>0&&($(Rn,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ya}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Hp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wp(t,e){if(Wn("AsyncQueue",`${e}: ${t}`),Us(t))return new z(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{static emptySet(e){return new fs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Io(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(){this.wa=new Ie(W.comparator)}track(e){const n=e.doc.key,r=this.wa.get(n);r?e.type!==0&&r.type===3?this.wa=this.wa.insert(n,e):e.type===3&&r.type!==1?this.wa=this.wa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.wa=this.wa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.wa=this.wa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.wa=this.wa.remove(n):e.type===1&&r.type===2?this.wa=this.wa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.wa=this.wa.insert(n,{type:2,doc:e.doc}):G(63341,{At:e,Sa:r}):this.wa=this.wa.insert(n,e)}ba(){const e=[];return this.wa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Cs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Cs(e,n,fs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some(e=>e.Fa())}}class b2{constructor(){this.queries=K_(),this.onlineState="Unknown",this.Ma=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=K_(),s.forEach((o,l)=>{for(const u of l.Ca)u.onError(r)})})(this,new z(O.ABORTED,"Firestore shutting down"))}}function K_(){return new Pi(t=>_I(t),mc)}async function Gp(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.va()&&e.Fa()&&(r=2):(s=new N2,r=e.Fa()?0:1);try{switch(r){case 0:s.Da=await n.onListen(i,!0);break;case 1:s.Da=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Wp(o,`Initialization of query '${ji(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Ca.push(e),e.xa(n.onlineState),s.Da&&e.Oa(s.Da)&&Qp(n)}async function Kp(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Ca.indexOf(e);o>=0&&(s.Ca.splice(o,1),s.Ca.length===0?i=e.Fa()?0:1:!s.va()&&e.Fa()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function D2(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Ca)l.Oa(i)&&(r=!0);o.Da=i}}r&&Qp(n)}function V2(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.Ca)s.onError(n);r.queries.delete(e)}function Qp(t){t.Ma.forEach(e=>{e.next()})}var af,Q_;(Q_=af||(af={})).Na="default",Q_.Cache="cache";class Xp{constructor(e,n,r){this.query=e,this.Ba=n,this.La=!1,this.ka=null,this.onlineState="Unknown",this.options=r||{}}Oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.La?this.qa(e)&&(this.Ba.next(e),n=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),n=!0),this.ka=e,n}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let n=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),n=!0),n}Ka(e,n){if(!e.fromCache||!this.Fa())return!0;const r=n!=="Offline";return(!this.options.$a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ua(e){e=Cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==af.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.key=e}}class n0{constructor(e){this.key=e}}class O2{constructor(e,n){this.query=e,this.eu=n,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=ne(),this.mutatedKeys=ne(),this.ru=vI(e),this.iu=new fs(this.ru)}get su(){return this.eu}ou(e,n){const r=n?n._u:new G_,i=n?n.iu:this.iu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),E=gc(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),x=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let V=!1;m&&E?m.data.isEqual(E.data)?P!==x&&(r.track({type:3,doc:E}),V=!0):this.au(m,E)||(r.track({type:2,doc:E}),V=!0,(u&&this.ru(E,u)>0||c&&this.ru(E,c)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),V=!0):m&&!E&&(r.track({type:1,doc:m}),V=!0,(u||c)&&(l=!0)),V&&(E?(o=o.add(E),s=x?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{iu:o,_u:r,Ss:l,mutatedKeys:s}}au(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;const o=e._u.ba();o.sort((d,p)=>function(E,P){const x=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{At:V})}};return x(E)-x(P)}(d.type,p.type)||this.ru(d.doc,p.doc)),this.uu(r),i=i??!1;const l=n&&!i?this.cu():[],u=this.nu.size===0&&this.current&&!i?1:0,c=u!==this.tu;return this.tu=u,o.length!==0||c?{snapshot:new Cs(this.query,e.iu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),lu:l}:{lu:l}}xa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({iu:this.iu,_u:new G_,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach(n=>this.eu=this.eu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.eu=this.eu.delete(n)),this.current=e.current)}cu(){if(!this.current)return[];const e=this.nu;this.nu=ne(),this.iu.forEach(r=>{this.hu(r.key)&&(this.nu=this.nu.add(r.key))});const n=[];return e.forEach(r=>{this.nu.has(r)||n.push(new n0(r))}),this.nu.forEach(r=>{e.has(r)||n.push(new t0(r))}),n}Pu(e){this.eu=e.Ls,this.nu=ne();const n=this.ou(e.documents);return this.applyChanges(n,!0)}Tu(){return Cs.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,this.tu===0,this.hasCachedResults)}}const Yp="SyncEngine";class L2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class M2{constructor(e){this.key=e,this.Iu=!1}}class U2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Eu={},this.Ru=new Pi(l=>_I(l),mc),this.Au=new Map,this.Vu=new Set,this.du=new Ie(W.comparator),this.mu=new Map,this.fu=new Lp,this.gu={},this.pu=new Map,this.yu=Fr._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return this.wu===!0}}async function F2(t,e,n=!0){const r=l0(t);let i;const s=r.Ru.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Tu()):i=await r0(r,e,n,!0),i}async function j2(t,e){const n=l0(t);await r0(n,e,!0,!1)}async function r0(t,e,n,r){const i=await s2(t.localStore,In(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await B2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&QI(t.remoteStore,i),l}async function B2(t,e,n,r,i){t.Su=(p,m,E)=>async function(x,V,T,w){let k=V.view.ou(T);k.Ss&&(k=await B_(x.localStore,V.query,!1).then(({documents:v})=>V.view.ou(v,k)));const D=w&&w.targetChanges.get(V.targetId),M=w&&w.targetMismatches.get(V.targetId)!=null,U=V.view.applyChanges(k,x.isPrimaryClient,D,M);return Y_(x,V.targetId,U.lu),U.snapshot}(t,p,m,E);const s=await B_(t.localStore,e,!0),o=new O2(e,s.Ls),l=o.ou(s.documents),u=Ca.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Y_(t,n,c.lu);const d=new L2(e,n,o);return t.Ru.set(e,d),t.Au.has(n)?t.Au.get(n).push(e):t.Au.set(n,[e]),c.snapshot}async function z2(t,e,n){const r=J(t),i=r.Ru.get(e),s=r.Au.get(i.targetId);if(s.length>1)return r.Au.set(i.targetId,s.filter(o=>!mc(o,e))),void r.Ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await rf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Bp(r.remoteStore,i.targetId),lf(r,i.targetId)}).catch(Ms)):(lf(r,i.targetId),await rf(r.localStore,i.targetId,!0))}async function $2(t,e){const n=J(t),r=n.Ru.get(e),i=n.Au.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bp(n.remoteStore,r.targetId))}async function q2(t,e,n){const r=Y2(t);try{const i=await function(o,l){const u=J(o),c=pe.now(),d=l.reduce((E,P)=>E.add(P.key),ne());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let P=Gn(),x=ne();return u.Ms.getEntries(E,d).next(V=>{P=V,P.forEach((T,w)=>{w.isValidDocument()||(x=x.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,P)).next(V=>{p=V;const T=[];for(const w of l){const k=oN(w,p.get(w.key).overlayedDocument);k!=null&&T.push(new Wr(w.key,k,cI(k.value.mapValue),Je.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,T,l)}).next(V=>{m=V;const T=V.applyToLocalDocumentSet(p,x);return u.documentOverlayCache.saveOverlays(E,V.batchId,T)})}).then(()=>({batchId:m.batchId,changes:EI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.gu[o.currentUser.toKey()];c||(c=new Ie(te)),c=c.insert(l,u),o.gu[o.currentUser.toKey()]=c}(r,i.batchId,n),await xa(r,i.changes),await Sc(r.remoteStore)}catch(i){const s=Wp(i,"Failed to persist write");n.reject(s)}}async function i0(t,e){const n=J(t);try{const r=await n2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.mu.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.Iu=!0:i.modifiedDocuments.size>0?ae(o.Iu,14607):i.removedDocuments.size>0&&(ae(o.Iu,42227),o.Iu=!1))}),await xa(n,r,e)}catch(r){await Ms(r)}}function X_(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ru.forEach((s,o)=>{const l=o.view.xa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.Ca)m.xa(l)&&(c=!0)}),c&&Qp(u)}(r.eventManager,e),i.length&&r.Eu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function H2(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.mu.get(e),s=i&&i.key;if(s){let o=new Ie(W.comparator);o=o.insert(s,Ge.newNoDocument(s,Q.min()));const l=ne().add(s),u=new Ra(Q.min(),new Map,new Ie(te),o,l);await i0(r,u),r.du=r.du.remove(s),r.mu.delete(e),Jp(r)}else await rf(r.localStore,e,!1).then(()=>lf(r,e,n)).catch(Ms)}async function W2(t,e){const n=J(t),r=e.batch.batchId;try{const i=await t2(n.localStore,e);o0(n,r,null),s0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xa(n,i)}catch(i){await Ms(i)}}async function G2(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ae(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);o0(r,e,n),s0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xa(r,i)}catch(i){await Ms(i)}}function s0(t,e){(t.pu.get(e)||[]).forEach(n=>{n.resolve()}),t.pu.delete(e)}function o0(t,e,n){const r=J(t);let i=r.gu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.gu[r.currentUser.toKey()]=i}}function lf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Au.get(e))t.Ru.delete(r),n&&t.Eu.bu(r,n);t.Au.delete(e),t.isPrimaryClient&&t.fu.Qr(e).forEach(r=>{t.fu.containsKey(r)||a0(t,r)})}function a0(t,e){t.Vu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Bp(t.remoteStore,n),t.du=t.du.remove(e),t.mu.delete(n),Jp(t))}function Y_(t,e,n){for(const r of n)r instanceof t0?(t.fu.addReference(r.key,e),K2(t,r)):r instanceof n0?($(Yp,"Document no longer in limbo: "+r.key),t.fu.removeReference(r.key,e),t.fu.containsKey(r.key)||a0(t,r.key)):G(19791,{Du:r})}function K2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Vu.has(r)||($(Yp,"New document in limbo: "+n),t.Vu.add(r),Jp(t))}function Jp(t){for(;t.Vu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Vu.values().next().value;t.Vu.delete(e);const n=new W(he.fromString(e)),r=t.yu.next();t.mu.set(r,new M2(n)),t.du=t.du.insert(n,r),QI(t.remoteStore,new Ln(In(pc(n.path)),r,"TargetPurposeLimboResolution",dc.ce))}}async function xa(t,e,n){const r=J(t),i=[],s=[],o=[];r.Ru.isEmpty()||(r.Ru.forEach((l,u)=>{o.push(r.Su(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Up.Is(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Eu.J_(i),await async function(u,c){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(c,m=>L.forEach(m.Ps,E=>d.persistence.referenceDelegate.addReference(p,m.targetId,E)).next(()=>L.forEach(m.Ts,E=>d.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))}catch(p){if(!Us(p))throw p;$(Fp,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const E=d.Cs.get(m),P=E.snapshotVersion,x=E.withLastLimboFreeSnapshotVersion(P);d.Cs=d.Cs.insert(m,x)}}}(r.localStore,s))}async function Q2(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){$(Yp,"User change. New user:",e.toKey());const r=await WI(n.localStore,e);n.currentUser=e,function(s,o){s.pu.forEach(l=>{l.forEach(u=>{u.reject(new z(O.CANCELLED,o))})}),s.pu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xa(n,r.Os)}}function X2(t,e){const n=J(t),r=n.mu.get(e);if(r&&r.Iu)return ne().add(r.key);{let i=ne();const s=n.Au.get(e);if(!s)return i;for(const o of s){const l=n.Ru.get(o);i=i.unionWith(l.view.su)}return i}}function l0(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=i0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=X2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=H2.bind(null,e),e.Eu.J_=D2.bind(null,e.eventManager),e.Eu.bu=V2.bind(null,e.eventManager),e}function Y2(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=W2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=G2.bind(null,e),e}class Nu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,n){return null}Nu(e,n){return null}xu(e){return e2(this.persistence,new YN,e.initialUser,this.serializer)}Mu(e){return new HI(Mp.Ai,this.serializer)}Fu(e){return new a2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nu.provider={build:()=>new Nu};class J2 extends Nu{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,n){ae(this.persistence.referenceDelegate instanceof Pu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new LN(r,e.asyncQueue,n)}Mu(e){const n=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new HI(r=>Pu.Ai(r,n),this.serializer)}}class uf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>X_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Q2.bind(null,this.syncEngine),await x2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new b2}()}createDatastore(e){const n=Tc(e.databaseInfo.databaseId),r=d2(e.databaseInfo);return y2(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new v2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>X_(this.syncEngine,n,0),function(){return q_.v()?new q_:new l2}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new U2(i,s,o,l,u,c);return d&&(p.wu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);$(Rn,"RemoteStore shutting down."),s.Va.add(5),await Pa(s),s.ma.shutdown(),s.fa.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}uf.provider={build:()=>new uf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):Wn("Uncaught Error in snapshot listener:",e.toString()))}ku(){this.muted=!0}Lu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z2=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(O.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=J(i),l={documents:s.map(p=>Cu(o.serializer,p))},u=await o.zo("BatchGetDocuments",o.serializer.databaseId,he.emptyPath(),l,s.length),c=new Map;u.forEach(p=>{const m=vN(o.serializer,p);c.set(m.key.toString(),m)});const d=[];return s.forEach(p=>{const m=c.get(p.toString());ae(!!m,55234,{key:p}),d.push(m)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ec(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=W.fromPath(r);this.mutations.push(new xI(i,this.precondition(i)))}),await async function(r,i){const s=J(r),o={writes:i.map(l=>FI(s.serializer,l))};await s.$o("Commit",s.serializer.databaseId,he.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw G(50498,{Ju:e.constructor.name});n=Q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new z(O.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(Q.min())?Je.exists(!1):Je.updateTime(n):Je.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Q.min()))throw new z(O.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Je.updateTime(n)}return Je.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Hu=r.maxAttempts,this.F_=new jp(this.asyncQueue,"transaction_retry")}Zu(){this.Hu-=1,this.Xu()}Xu(){this.F_.g_(async()=>{const e=new Z2(this.datastore),n=this.Yu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ec(i)}))}).catch(r=>{this.ec(r)})})}Yu(e){try{const n=this.updateFunction(e);return!Aa(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ec(e){this.Hu>0&&this.tc(e)?(this.Hu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Xu(),Promise.resolve()))):this.deferred.reject(e)}tc(e){if((e==null?void 0:e.name)==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!NI(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="FirestoreClient";class tb{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=ot.UNAUTHENTICATED,this.clientId=Ap.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(Br,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(Br,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jh(t,e){t.asyncQueue.verifyOperationInProgress(),$(Br,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await WI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function J_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nb(t);$(Br,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>W_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>W_(e.remoteStore,i)),t._onlineComponents=e}async function nb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(Br,"Using user provided OfflineComponentProvider");try{await jh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;wi("Error using user provided cache. Falling back to memory cache: "+n),await jh(t,new Nu)}}else $(Br,"Using default OfflineComponentProvider"),await jh(t,new J2(void 0));return t._offlineComponents}async function em(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(Br,"Using user provided OnlineComponentProvider"),await J_(t,t._uninitializedComponentsProvider._online)):($(Br,"Using default OnlineComponentProvider"),await J_(t,new uf))),t._onlineComponents}function rb(t){return em(t).then(e=>e.syncEngine)}function ib(t){return em(t).then(e=>e.datastore)}async function bu(t){const e=await em(t),n=e.eventManager;return n.onListen=F2.bind(null,e.syncEngine),n.onUnlisten=z2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=j2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$2.bind(null,e.syncEngine),n}function sb(t,e,n,r){const i=new Zp(r),s=new Xp(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Gp(await bu(t),s)),()=>{i.ku(),t.asyncQueue.enqueueAndForget(async()=>Kp(await bu(t),s))}}function ob(t,e,n={}){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Zp({next:m=>{d.ku(),o.enqueueAndForget(()=>Kp(s,p));const E=m.docs.has(l);!E&&m.fromCache?c.reject(new z(O.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?c.reject(new z(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Xp(pc(l.path),d,{includeMetadataChanges:!0,$a:!0});return Gp(s,p)}(await bu(t),t.asyncQueue,e,n,r)),r.promise}function ab(t,e,n={}){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Zp({next:m=>{d.ku(),o.enqueueAndForget(()=>Kp(s,p)),m.fromCache&&u.source==="server"?c.reject(new z(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Xp(l,d,{includeMetadataChanges:!0,$a:!0});return Gp(s,p)}(await bu(t),t.asyncQueue,e,n,r)),r.promise}function lb(t,e){const n=new Tn;return t.asyncQueue.enqueueAndForget(async()=>q2(await rb(t),e,n)),n.promise}function ub(t,e,n){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>{const i=await ib(t);new eb(t.asyncQueue,i,n,e,r).Zu()}),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="ComponentProvider",Z_=new Map;function hb(t,e,n,r,i){return new Px(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,u0(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0="firestore.googleapis.com",ev=!0;class tv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=c0,this.ssl=ev}else this.host=e.host,this.ssl=e.ssl??ev;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=qI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<VN)throw new z(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_x("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=u0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ac{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lx;switch(r.type){case"firstParty":return new dx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Z_.get(n);r&&($(cb,"Removing Datastore"),Z_.delete(n),r.terminate())}(this),Promise.resolve()}}function db(t,e,n,r={}){var c;t=_t(t,Ac);const i=Qn(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&sc(`https://${l}`),s.host!==c0&&s.host!==l&&wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!An(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=ot.MOCK_USER;else{d=rT(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new z(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(m)}t._authCredentials=new ux(new YT(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yn(this.firestore,e,this._query)}}class Ae{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ae(this.firestore,e,this._key)}toJSON(){return{type:Ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Sa(n,Ae._jsonSchema))return new Ae(e,r||null,new W(he.fromString(n.referencePath)))}}Ae._jsonSchemaVersion="firestore/documentReference/1.0",Ae._jsonSchema={type:Fe("string",Ae._jsonSchemaVersion),referencePath:Fe("string")};class xr extends Yn{constructor(e,n,r){super(e,n,pc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ae(this.firestore,null,new W(e))}withConverter(e){return new xr(this.firestore,e,this._path)}}function tm(t,e,...n){if(t=ue(t),JT("collection","path",e),t instanceof Ac){const r=he.fromString(e,...n);return p_(r),new xr(t,null,r)}{if(!(t instanceof Ae||t instanceof xr))throw new z(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return p_(r),new xr(t.firestore,null,r)}}function ht(t,e,...n){if(t=ue(t),arguments.length===1&&(e=Ap.newId()),JT("doc","path",e),t instanceof Ac){const r=he.fromString(e,...n);return f_(r),new Ae(t,null,new W(r))}{if(!(t instanceof Ae||t instanceof xr))throw new z(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return f_(r),new Ae(t.firestore,t instanceof xr?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv="AsyncQueue";class rv{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new jp(this,"async_queue_retry"),this.cc=()=>{const r=Fh();r&&$(nv,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this.lc=e;const n=Fh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;const n=Fh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise(()=>{});const n=new Tn;return this.Pc(()=>this.rc&&this.ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.nc.push(e),this.Tc()))}async Tc(){if(this.nc.length!==0){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!Us(e))throw e;$(nv,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_(()=>this.Tc())}}Pc(e){const n=this.lc.then(()=>(this._c=!0,e().catch(r=>{throw this.oc=r,this._c=!1,Wn("INTERNAL UNHANDLED ERROR: ",iv(r)),r}).then(r=>(this._c=!1,r))));return this.lc=n,n}enqueueAfterDelay(e,n,r){this.hc(),this.uc.indexOf(e)>-1&&(n=0);const i=Hp.createAndSchedule(this,e,n,r,s=>this.Ic(s));return this.sc.push(i),i}hc(){this.oc&&G(47125,{Ec:iv(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do e=this.lc,await e;while(e!==this.lc)}Ac(e){for(const n of this.sc)if(n.timerId===e)return!0;return!1}Vc(e){return this.Rc().then(()=>{this.sc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.sc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Rc()})}dc(e){this.uc.push(e)}Ic(e){const n=this.sc.indexOf(e);this.sc.splice(n,1)}}function iv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Cn extends Ac{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new rv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rv(e),this._firestoreClient=void 0,await e}}}function fb(t,e){const n=typeof t=="object"?t:Vs(),r=typeof t=="string"?t:wu,i=Xn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=dp("firestore");s&&db(i,...s)}return i}function Na(t){if(t._terminated)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||pb(t),t._firestoreClient}function pb(t){var r,i,s,o;const e=t._freezeSettings(),n=hb(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new tb(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dt(tt.fromBase64String(e))}catch(n){throw new z(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Dt(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Dt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Sa(e,Dt._jsonSchema))return Dt.fromBase64String(e.bytes)}}Dt._jsonSchemaVersion="firestore/bytes/1.0",Dt._jsonSchema={type:Fe("string",Dt._jsonSchemaVersion),bytes:Fe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Sn._jsonSchemaVersion}}static fromJSON(e){if(Sa(e,Sn._jsonSchema))return new Sn(e.latitude,e.longitude)}}Sn._jsonSchemaVersion="firestore/geoPoint/1.0",Sn._jsonSchema={type:Fe("string",Sn._jsonSchemaVersion),latitude:Fe("number"),longitude:Fe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ln._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Sa(e,ln._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new ln(e.vectorValues);throw new z(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ln._jsonSchemaVersion="firestore/vectorValue/1.0",ln._jsonSchema={type:Fe("string",ln._jsonSchemaVersion),vectorValues:Fe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=/^__.*__$/;class gb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ka(e,this.data,n,this.fieldTransforms)}}class h0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function d0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:t})}}class Rc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Rc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.yc(e),r}wc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(),r}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return Du(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(e.length===0)throw this.bc("Document fields must not be empty");if(d0(this.dataSource)&&mb.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class yb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Tc(e)}V(e,n,r,i=!1){return new Rc({dataSource:e,methodName:n,targetDoc:r,path:Ye.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ba(t){const e=t._freezeSettings(),n=Tc(t._databaseId);return new yb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nm(t,e,n,r,i,s={}){const o=t.V(s.merge||s.mergeFields?2:0,e,n,i);am("Data must be an object, but it was:",o,r);const l=g0(r,o);let u,c;if(s.merge)u=new Ot(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Ei(e,p,n);if(!o.contains(m))throw new z(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);v0(d,m)||d.push(m)}u=new Ot(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new gb(new gt(l),u,c)}class Cc extends Ni{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.bc(`${this._methodName}() can only appear at the top level of your update data`):e.bc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cc}}function f0(t,e,n){return new Rc({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class rm extends Ni{_toFieldTransform(e){return new vc(e.path,new pa)}isEqual(e){return e instanceof rm}}class im extends Ni{constructor(e,n){super(e),this.Cc=n}_toFieldTransform(e){const n=f0(this,e,!0),r=this.Cc.map(s=>bi(s,n)),i=new As(r);return new vc(e.path,i)}isEqual(e){return e instanceof im&&An(this.Cc,e.Cc)}}class sm extends Ni{constructor(e,n){super(e),this.Cc=n}_toFieldTransform(e){const n=f0(this,e,!0),r=this.Cc.map(s=>bi(s,n)),i=new ks(r);return new vc(e.path,i)}isEqual(e){return e instanceof sm&&An(this.Cc,e.Cc)}}class om extends Ni{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=new Rs(e.serializer,II(e.serializer,this.vc));return new vc(e.path,n)}isEqual(e){return e instanceof om&&(this.vc===e.vc||Number.isNaN(this.vc)&&Number.isNaN(e.vc))}}function p0(t,e,n,r){const i=t.V(1,e,n);am("Data must be an object, but it was:",i,r);const s=[],o=gt.empty();Hr(r,(u,c)=>{const d=_0(e,u,n);c=ue(c);const p=i.wc(d);if(c instanceof Cc)s.push(d);else{const m=bi(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new Ot(s);return new h0(o,l,i.fieldTransforms)}function m0(t,e,n,r,i,s){const o=t.V(1,e,n),l=[Ei(e,r,n)],u=[i];if(s.length%2!=0)throw new z(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Ei(e,s[m])),u.push(s[m+1]);const c=[],d=gt.empty();for(let m=l.length-1;m>=0;--m)if(!v0(c,l[m])){const E=l[m];let P=u[m];P=ue(P);const x=o.wc(E);if(P instanceof Cc)c.push(E);else{const V=bi(P,x);V!=null&&(c.push(E),d.set(E,V))}}const p=new Ot(c);return new h0(d,p,o.fieldTransforms)}function _b(t,e,n,r=!1){return bi(n,t.V(r?4:3,e))}function bi(t,e){if(y0(t=ue(t)))return am("Unsupported field value:",e,t),g0(t,e);if(t instanceof Ni)return function(r,i){if(!d0(i.dataSource))throw i.bc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.bc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.bc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=bi(l,i.Sc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return II(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:Ru(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ru(i.serializer,s)}}if(r instanceof Sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dt)return{bytesValue:OI(i.serializer,r._byteString)};if(r instanceof Ae){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.bc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Op(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ln)return function(o,l){const u=o instanceof ln?o.toArray():o;return{mapValue:{fields:{[aI]:{stringValue:lI},[Eu]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.bc("VectorValues must only contain numeric values.");return yc(l.serializer,d)})}}}}}}(r,i);if($I(r))return r._toProto(i.serializer);throw i.bc(`Unsupported field value: ${hc(r)}`)}(t,e)}function g0(t,e){const n={};return tI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hr(t,(r,i)=>{const s=bi(i,e.gc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function y0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof Sn||t instanceof Dt||t instanceof Ae||t instanceof Ni||t instanceof ln||$I(t))}function am(t,e,n){if(!y0(n)||!ZT(n)){const r=hc(n);throw r==="an object"?e.bc(t+" a custom object"):e.bc(t+" "+r)}}function Ei(t,e,n){if((e=ue(e))instanceof kc)return e._internalPath;if(typeof e=="string")return _0(t,e);throw Du("Field path arguments must be of type string or ",t,!1,void 0,n)}const vb=new RegExp("[~\\*/\\[\\]]");function _0(t,e,n){if(e.search(vb)>=0)throw Du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kc(...e.split("."))._internalPath}catch{throw Du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Du(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(O.INVALID_ARGUMENT,l+t+u)}function v0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Hr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Eu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>be(o.doubleValue));return new ln(n)}convertGeoPoint(e){return new Sn(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=fc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ua(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);ae(zI(r),9688,{name:e});const i=new ca(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||Wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends w0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,n)}}function Bs(){return new rm("serverTimestamp")}function wb(...t){return new im("arrayUnion",t)}function Eb(...t){return new sm("arrayRemove",t)}function Ps(t){return new om("increment",t)}const sv="@firebase/firestore",ov="4.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Tb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ei("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Tb extends Vu{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lm{}class um extends lm{}function T0(t,e,...n){let r=[];e instanceof lm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof cm).length,l=s.filter(u=>u instanceof xc).length;if(o>1||o>0&&l>0)throw new z(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class xc extends um{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new xc(e,n,r)}_apply(e){const n=this._parse(e);return I0(e._query,n),new Yn(e.firestore,e.converter,Zd(e._query,n))}_parse(e){const n=ba(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){uv(p,d);const P=[];for(const x of p)P.push(lv(u,s,x));m={arrayValue:{values:P}}}else m=lv(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||uv(p,d),m=_b(l,o,p,d==="in"||d==="not-in");return Ue.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ib(t,e,n){const r=e,i=Ei("where",t);return xc._create(i,r,n)}class cm extends lm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new cm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)I0(o,u),o=Zd(o,u)}(e._query,n),new Yn(e.firestore,e.converter,Zd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class hm extends um{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new hm(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fa(s,o)}(e._query,this._field,this._direction);return new Yn(e.firestore,e.converter,Gx(e._query,n))}}function Sb(t,e="asc"){const n=e,r=Ei("orderBy",t);return hm._create(r,n)}class dm extends um{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new dm(e,n,r)}_apply(e){return new Yn(e.firestore,e.converter,Iu(e._query,this._limit,this._limitType))}}function Ab(t){return dm._create("limit",t,"F")}function lv(t,e,n){if(typeof(n=ue(n))=="string"){if(n==="")throw new z(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yI(e)&&n.indexOf("/")!==-1)throw new z(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!W.isDocumentKey(r))throw new z(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return T_(t,new W(r))}if(n instanceof Ae)return T_(t,n._key);throw new z(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hc(n)}.`)}function uv(t,e){if(!Array.isArray(t)||t.length===0)throw new z(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function I0(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function fm(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class kb extends w0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,n)}}class ns{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nr extends Vu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ei("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Nr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Nr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Nr._jsonSchema={type:Fe("string",Nr._jsonSchemaVersion),bundleSource:Fe("string","DocumentSnapshot"),bundleName:Fe("string"),bundle:Fe("string")};class Fl extends Nr{data(e={}){return super.data(e)}}class ci{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ns(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fl(this._firestore,this._userDataWriter,r.key,r,new ns(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Fl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ns(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Fl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ns(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:Rb(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ci._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ap.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Rb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ci._jsonSchemaVersion="firestore/querySnapshot/1.0",ci._jsonSchema={type:Fe("string",ci._jsonSchemaVersion),bundleSource:Fe("string","QuerySnapshot"),bundleName:Fe("string"),bundle:Fe("string")};const Cb={maxAttempts:5};function Ao(t,e){if((t=ue(t)).firestore!==e)throw new z(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=ba(e)}get(e){const n=Ao(e,this._firestore),r=new kb(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return G(24041);const s=i[0];if(s.isFoundDocument())return new Vu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Vu(this._firestore,r,n._key,null,n.converter);throw G(18433,{doc:s})})}set(e,n,r){const i=Ao(e,this._firestore),s=fm(i.converter,n,r),o=nm(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Ao(e,this._firestore);let o;return o=typeof(n=ue(n))=="string"||n instanceof kc?m0(this._dataReader,"Transaction.update",s._key,n,r,i):p0(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Ao(e,this._firestore);return this._transaction.delete(n._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb extends Pb{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Ao(e,this._firestore),r=new Pc(this._firestore);return super.get(e).then(i=>new Nr(this._firestore,r,n._key,i._document,new ns(!1,!1),n.converter))}}function pm(t,e,n){t=_t(t,Cn);const r={...Cb,...n};(function(o){if(o.maxAttempts<1)throw new z(O.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r);const i=Na(t);return ub(i,s=>e(new xb(t,s)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(t){t=_t(t,Ae);const e=_t(t.firestore,Cn),n=Na(e);return ob(n,t._key).then(r=>A0(e,t,r))}function Nb(t){t=_t(t,Yn);const e=_t(t.firestore,Cn),n=Na(e),r=new Pc(e);return E0(t._query),ab(n,t._query).then(i=>new ci(e,r,t,i))}function Nc(t,e,n){t=_t(t,Ae);const r=_t(t.firestore,Cn),i=fm(t.converter,e,n),s=ba(r);return bc(r,[nm(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Je.none())])}function Da(t,e,n,...r){t=_t(t,Ae);const i=_t(t.firestore,Cn),s=ba(i);let o;return o=typeof(e=ue(e))=="string"||e instanceof kc?m0(s,"updateDoc",t._key,e,n,r):p0(s,"updateDoc",t._key,e),bc(i,[o.toMutation(t._key,Je.exists(!0))])}function bb(t){return bc(_t(t.firestore,Cn),[new Ec(t._key,Je.none())])}function Db(t,e){const n=_t(t.firestore,Cn),r=ht(t),i=fm(t.converter,e),s=ba(t.firestore);return bc(n,[nm(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Je.exists(!1))]).then(()=>r)}function Vb(t,...e){var c,d,p;t=ue(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||av(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(av(e[r])){const m=e[r];e[r]=(c=m.next)==null?void 0:c.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let s,o,l;if(t instanceof Ae)o=_t(t.firestore,Cn),l=pc(t._key.path),s={next:m=>{e[r]&&e[r](A0(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=_t(t,Yn);o=_t(m.firestore,Cn),l=m._query;const E=new Pc(o);s={next:P=>{e[r]&&e[r](new ci(o,E,m,P))},error:e[r+1],complete:e[r+2]},E0(t._query)}const u=Na(o);return sb(u,l,i,s)}function bc(t,e){const n=Na(t);return lb(n,e)}function A0(t,e,n){const r=n.docs.get(e._key),i=new Pc(t);return new Nr(t,i,e._key,r,new ns(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){ax(Ci),Jt(new Bt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Cn(new cx(r.getProvider("auth-internal")),new fx(o,r.getProvider("app-check-internal")),xx(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),lt(sv,ov,e),lt(sv,ov,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="firebasestorage.googleapis.com",R0="storageBucket",Ob=2*60*1e3,Lb=10*60*1e3,Mb=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends qt{constructor(e,n,r=0){super(Bh(e),`Firebase Storage: ${n} (${Bh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Bh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var we;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(we||(we={}));function Bh(t){return"storage/"+t}function mm(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce(we.UNKNOWN,t)}function Ub(t){return new Ce(we.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Fb(t){return new Ce(we.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function jb(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce(we.UNAUTHENTICATED,t)}function Bb(){return new Ce(we.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function zb(t){return new Ce(we.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function C0(){return new Ce(we.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function P0(){return new Ce(we.CANCELED,"User canceled the upload/download.")}function $b(t){return new Ce(we.INVALID_URL,"Invalid URL '"+t+"'.")}function qb(t){return new Ce(we.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Hb(){return new Ce(we.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+R0+"' property when initializing the app?")}function x0(){return new Ce(we.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Wb(){return new Ce(we.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Gb(){return new Ce(we.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Kb(t){return new Ce(we.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function cf(t){return new Ce(we.INVALID_ARGUMENT,t)}function N0(){return new Ce(we.APP_DELETED,"The Firebase app was deleted.")}function Qb(t){return new Ce(we.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Bo(t,e){return new Ce(we.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function go(t){throw new Ce(we.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Lt.makeFromUrl(e,n)}catch{return new Lt(e,"")}if(r.path==="")return r;throw qb(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),P={bucket:1,path:3},x=n===k0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,V="([^?#]*)",T=new RegExp(`^https?://${x}/${i}/${V}`,"i"),k=[{regex:l,indices:u,postModify:s},{regex:E,indices:P,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<k.length;D++){const M=k[D],U=M.regex.exec(e);if(U){const v=U[M.indices.bucket];let y=U[M.indices.path];y||(y=""),r=new Lt(v,y),M.postModify(r);break}}if(r==null)throw $b(e);return r}}class Xb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...V){c||(c=!0,e.apply(null,V))}function p(V){i=setTimeout(()=>{i=null,t(E,u())},V)}function m(){s&&clearTimeout(s)}function E(V,...T){if(c){m();return}if(V){m(),d.call(null,V,...T);return}if(u()||o){m(),d.call(null,V,...T);return}r<64&&(r*=2);let k;l===1?(l=2,k=0):k=(r+Math.random())*1e3,p(k)}let P=!1;function x(V){P||(P=!0,m(),!c&&(i!==null?(V||(l=2),clearTimeout(i),p(0)):V||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,x(!0)},n),x}function Jb(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(t){return t!==void 0}function eD(t){return typeof t=="function"}function tD(t){return typeof t=="object"&&!Array.isArray(t)}function Dc(t){return typeof t=="string"||t instanceof String}function cv(t){return gm()&&t instanceof Blob}function gm(){return typeof Blob<"u"}function hv(t,e,n,r){if(r<e)throw cf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw cf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function b0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var hi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(hi||(hi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n,r,i,s,o,l,u,c,d,p,m=!0,E=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,x)=>{this.resolve_=P,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new gl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===hi.NO_ERROR,u=s.getStatus();if(!l||D0(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===hi.ABORT;r(!1,new gl(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new gl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Zb(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=mm();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?N0():P0();o(u)}else{const u=C0();o(u)}};this.canceled_?n(!1,new gl(!1,null,!0)):this.backoffId_=Yb(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Jb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function rD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function iD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function sD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function oD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function aD(t,e,n,r,i,s,o=!0,l=!1){const u=b0(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return sD(d,e),rD(d,n),iD(d,s),oD(d,r),new nD(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function uD(...t){const e=lD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(gm())return new Blob(t);throw new Ce(we.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function cD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hD(t){if(typeof atob>"u")throw Kb("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class zh{constructor(e,n){this.data=e,this.contentType=n||null}}function dD(t,e){switch(t){case yn.RAW:return new zh(V0(e));case yn.BASE64:case yn.BASE64URL:return new zh(O0(t,e));case yn.DATA_URL:return new zh(pD(e),mD(e))}throw mm()}function V0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function fD(t){let e;try{e=decodeURIComponent(t)}catch{throw Bo(yn.DATA_URL,"Malformed data URL.")}return V0(e)}function O0(t,e){switch(t){case yn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Bo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case yn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Bo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=hD(e)}catch(i){throw i.message.includes("polyfill")?i:Bo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class L0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Bo(yn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=gD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function pD(t){const e=new L0(t);return e.base64?O0(yn.BASE64,e.rest):fD(e.rest)}function mD(t){return new L0(t).contentType}function gD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n){let r=0,i="";cv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(cv(this.data_)){const r=this.data_,i=cD(r,e,n);return i===null?null:new Nn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Nn(r,!0)}}static getBlob(...e){if(gm()){const n=e.map(r=>r instanceof Nn?r.data_:r);return new Nn(uD.apply(null,n))}else{const n=e.map(o=>Dc(o)?dD(yn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new Nn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t){let e;try{e=JSON.parse(t)}catch{return null}return tD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _D(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function U0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(t,e){return e}class pt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||vD}}let yl=null;function wD(t){return!Dc(t)||t.length<2?t:U0(t)}function ym(){if(yl)return yl;const t=[];t.push(new pt("bucket")),t.push(new pt("generation")),t.push(new pt("metageneration")),t.push(new pt("name","fullPath",!0));function e(s,o){return wD(o)}const n=new pt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new pt("size");return i.xform=r,t.push(i),t.push(new pt("timeCreated")),t.push(new pt("updated")),t.push(new pt("md5Hash",null,!0)),t.push(new pt("cacheControl",null,!0)),t.push(new pt("contentDisposition",null,!0)),t.push(new pt("contentEncoding",null,!0)),t.push(new pt("contentLanguage",null,!0)),t.push(new pt("contentType",null,!0)),t.push(new pt("metadata","customMetadata",!0)),yl=t,yl}function ED(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Lt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function TD(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return ED(r,t),r}function F0(t,e,n){const r=M0(e);return r===null?null:TD(t,r,n)}function ID(t,e,n,r){const i=M0(e);if(i===null||!Dc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),E=zs(m,n,r),P=b0({alt:"media",token:c});return E+P})[0]}function j0(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Di{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t){if(!t)throw mm()}function _m(t,e){function n(r,i){const s=F0(t,i,e);return Un(s!==null),s}return n}function SD(t,e){function n(r,i){const s=F0(t,i,e);return Un(s!==null),ID(s,i,t.host,t._protocol)}return n}function Va(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Bb():i=jb():n.getStatus()===402?i=Fb(t.bucket):n.getStatus()===403?i=zb(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function vm(t){const e=Va(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Ub(t.path)),s.serverResponse=i.serverResponse,s}return n}function AD(t,e,n){const r=e.fullServerUrl(),i=zs(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Di(i,s,_m(t,n),o);return l.errorHandler=vm(e),l}function kD(t,e,n){const r=e.fullServerUrl(),i=zs(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Di(i,s,SD(t,n),o);return l.errorHandler=vm(e),l}function RD(t,e){const n=e.fullServerUrl(),r=zs(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,c){}const l=new Di(r,i,o,s);return l.successCodes=[200,204],l.errorHandler=vm(e),l}function CD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function B0(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=CD(null,e)),r}function z0(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let k="";for(let D=0;D<2;D++)k=k+Math.random().toString().slice(2);return k}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=B0(e,r,i),d=j0(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",E=Nn.getBlob(p,r,m);if(E===null)throw x0();const P={name:c.fullPath},x=zs(s,t.host,t._protocol),V="POST",T=t.maxUploadRetryTime,w=new Di(x,V,_m(t,n),T);return w.urlParams=P,w.headers=o,w.body=E.uploadData(),w.errorHandler=Va(e),w}class Ou{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function wm(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Un(!1)}return Un(!!n&&(e||["active"]).indexOf(n)!==-1),n}function PD(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=B0(e,r,i),l={name:o.fullPath},u=zs(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=j0(o,n),m=t.maxUploadRetryTime;function E(x){wm(x);let V;try{V=x.getResponseHeader("X-Goog-Upload-URL")}catch{Un(!1)}return Un(Dc(V)),V}const P=new Di(u,c,E,m);return P.urlParams=l,P.headers=d,P.body=p,P.errorHandler=Va(e),P}function xD(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=wm(c,["active","final"]);let p=null;try{p=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Un(!1)}p||Un(!1);const m=Number(p);return Un(!isNaN(m)),new Ou(m,r.size(),d==="final")}const o="POST",l=t.maxUploadRetryTime,u=new Di(n,o,s,l);return u.headers=i,u.errorHandler=Va(e),u}const dv=256*1024;function ND(t,e,n,r,i,s,o,l){const u=new Ou(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw Wb();const c=u.total-u.current;let d=c;i>0&&(d=Math.min(d,i));const p=u.current,m=p+d;let E="";d===0?E="finalize":c===d?E="upload, finalize":E="upload";const P={"X-Goog-Upload-Command":E,"X-Goog-Upload-Offset":`${u.current}`},x=r.slice(p,m);if(x===null)throw x0();function V(D,M){const U=wm(D,["active","final"]),v=u.current+d,y=r.size();let _;return U==="final"?_=_m(e,s)(D,M):_=null,new Ou(v,y,U==="final",_)}const T="POST",w=e.maxUploadRetryTime,k=new Di(n,T,V,w);return k.headers=P,k.body=x.uploadData(),k.progressCallback=l||null,k.errorHandler=Va(t),k}const It={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function $h(t){switch(t){case"running":case"pausing":case"canceling":return It.RUNNING;case"paused":return It.PAUSED;case"success":return It.SUCCESS;case"canceled":return It.CANCELED;case"error":return It.ERROR;default:return It.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n,r){if(eD(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class DD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=hi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=hi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=hi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw go("cannot .send() more than once");if(Qn(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw go("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw go("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw go("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw go("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class VD extends DD{initXhr(){this.xhr_.responseType="text"}}function mr(){return new VD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=ym(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(we.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(D0(i.status,[]))if(s)i=C0();else{this.sleepTime=Math.max(this.sleepTime*2,Mb),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(we.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=PD(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,mr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=xD(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,mr,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=dv*this._chunkMultiplier,n=new Ou(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=ND(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const l=this._ref.storage._makeRequest(o,mr,i,s,!1);this._request=l,l.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){dv*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=AD(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,mr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=z0(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,mr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=P0(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=$h(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new bD(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch($h(this._state)){case It.SUCCESS:Ui(this._resolve.bind(null,this.snapshot))();break;case It.CANCELED:case It.ERROR:const n=this._reject;Ui(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch($h(this._state)){case It.RUNNING:case It.PAUSED:e.next&&Ui(e.next.bind(e,this.snapshot))();break;case It.SUCCESS:e.complete&&Ui(e.complete.bind(e))();break;case It.CANCELED:case It.ERROR:e.error&&Ui(e.error.bind(e,this._error))();break;default:e.error&&Ui(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n){this._service=e,n instanceof Lt?this._location=n:this._location=Lt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ti(e,n)}get root(){const e=new Lt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return U0(this._location.path)}get storage(){return this._service}get parent(){const e=yD(this._location.path);if(e===null)return null;const n=new Lt(this._location.bucket,e);return new Ti(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Qb(e)}}function LD(t,e,n){t._throwIfRoot("uploadBytes");const r=z0(t.storage,t._location,ym(),new Nn(e,!0),n);return t.storage.makeRequestWithTokens(r,mr).then(i=>({metadata:i,ref:t}))}function MD(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new OD(t,new Nn(e),n)}function UD(t){t._throwIfRoot("getDownloadURL");const e=kD(t.storage,t._location,ym());return t.storage.makeRequestWithTokens(e,mr).then(n=>{if(n===null)throw Gb();return n})}function FD(t){t._throwIfRoot("deleteObject");const e=RD(t.storage,t._location);return t.storage.makeRequestWithTokens(e,mr)}function jD(t,e){const n=_D(t._location.path,e),r=new Lt(t._location.bucket,n);return new Ti(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t){return/^[A-Za-z]+:\/\//.test(t)}function zD(t,e){return new Ti(t,e)}function $0(t,e){if(t instanceof Em){const n=t;if(n._bucket==null)throw Hb();const r=new Ti(n,n._bucket);return e!=null?$0(r,e):r}else return e!==void 0?jD(t,e):t}function $D(t,e){if(e&&BD(e)){if(t instanceof Em)return zD(t,e);throw cf("To use ref(service, url), the first argument must be a Storage instance.")}else return $0(t,e)}function fv(t,e){const n=e==null?void 0:e[R0];return n==null?null:Lt.makeFromBucketSpec(n,t)}function qD(t,e,n,r={}){t.host=`${e}:${n}`;const i=Qn(e);i&&sc(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:rT(s,t.app.options.projectId))}class Em{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=k0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ob,this._maxUploadRetryTime=Lb,this._requests=new Set,i!=null?this._bucket=Lt.makeFromBucketSpec(i,this._host):this._bucket=fv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Lt.makeFromBucketSpec(this._url,e):this._bucket=fv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ti(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Xb(N0());{const o=aD(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const pv="@firebase/storage",mv="0.14.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="storage";function H0(t,e,n){return t=ue(t),LD(t,e,n)}function HD(t,e,n){return t=ue(t),MD(t,e,n)}function hf(t){return t=ue(t),UD(t)}function WD(t){return t=ue(t),FD(t)}function Lu(t,e){return t=ue(t),$D(t,e)}function GD(t=Vs(),e){t=ue(t);const r=Xn(t,q0).getImmediate({identifier:e}),i=dp("storage");return i&&KD(r,...i),r}function KD(t,e,n,r={}){qD(t,e,n,r)}function QD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Em(n,r,i,e,Ci)}function XD(){Jt(new Bt(q0,QD,"PUBLIC").setMultipleInstances(!0)),lt(pv,mv,""),lt(pv,mv,"esm2020")}XD();const W0="@firebase/installations",Tm="0.6.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=1e4,K0=`w:${Tm}`,Q0="FIS_v2",YD="https://firebaseinstallations.googleapis.com/v1",JD=60*60*1e3,ZD="installations",eV="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tV={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ii=new Ri(ZD,eV,tV);function X0(t){return t instanceof qt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0({projectId:t}){return`${YD}/projects/${t}/installations`}function J0(t){return{token:t.token,requestStatus:2,expiresIn:rV(t.expiresIn),creationTime:Date.now()}}async function Z0(t,e){const r=(await e.json()).error;return Ii.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function eS({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function nV(t,{refreshToken:e}){const n=eS(t);return n.append("Authorization",iV(e)),n}async function tS(t){const e=await t();return e.status>=500&&e.status<600?t():e}function rV(t){return Number(t.replace("s","000"))}function iV(t){return`${Q0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sV({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Y0(t),i=eS(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Q0,appId:t.appId,sdkVersion:K0},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await tS(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:J0(c.authToken)}}else throw await Z0("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oV(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aV=/^[cdef][\w-]{21}$/,df="";function lV(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=uV(t);return aV.test(n)?n:df}catch{return df}}function uV(t){return oV(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=new Map;function iS(t,e){const n=Vc(t);sS(n,e),cV(n,e)}function sS(t,e){const n=rS.get(t);if(n)for(const r of n)r(e)}function cV(t,e){const n=hV();n&&n.postMessage({key:t,fid:e}),dV()}let ai=null;function hV(){return!ai&&"BroadcastChannel"in self&&(ai=new BroadcastChannel("[Firebase] FID Change"),ai.onmessage=t=>{sS(t.data.key,t.data.fid)}),ai}function dV(){rS.size===0&&ai&&(ai.close(),ai=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fV="firebase-installations-database",pV=1,Si="firebase-installations-store";let qh=null;function Im(){return qh||(qh=aT(fV,pV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Si)}}})),qh}async function Mu(t,e){const n=Vc(t),i=(await Im()).transaction(Si,"readwrite"),s=i.objectStore(Si),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&iS(t,e.fid),e}async function oS(t){const e=Vc(t),r=(await Im()).transaction(Si,"readwrite");await r.objectStore(Si).delete(e),await r.done}async function Oc(t,e){const n=Vc(t),i=(await Im()).transaction(Si,"readwrite"),s=i.objectStore(Si),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&iS(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sm(t){let e;const n=await Oc(t.appConfig,r=>{const i=mV(r),s=gV(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===df?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function mV(t){const e=t||{fid:lV(),registrationStatus:0};return aS(e)}function gV(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ii.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=yV(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_V(t)}:{installationEntry:e}}async function yV(t,e){try{const n=await sV(t,e);return Mu(t.appConfig,n)}catch(n){throw X0(n)&&n.customData.serverCode===409?await oS(t.appConfig):await Mu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function _V(t){let e=await gv(t.appConfig);for(;e.registrationStatus===1;)await nS(100),e=await gv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Sm(t);return r||n}return e}function gv(t){return Oc(t,e=>{if(!e)throw Ii.create("installation-not-found");return aS(e)})}function aS(t){return vV(t)?{fid:t.fid,registrationStatus:0}:t}function vV(t){return t.registrationStatus===1&&t.registrationTime+G0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wV({appConfig:t,heartbeatServiceProvider:e},n){const r=EV(t,n),i=nV(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:K0,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await tS(()=>fetch(r,l));if(u.ok){const c=await u.json();return J0(c)}else throw await Z0("Generate Auth Token",u)}function EV(t,{fid:e}){return`${Y0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Am(t,e=!1){let n;const r=await Oc(t.appConfig,s=>{if(!lS(s))throw Ii.create("not-registered");const o=s.authToken;if(!e&&SV(o))return s;if(o.requestStatus===1)return n=TV(t,e),s;{if(!navigator.onLine)throw Ii.create("app-offline");const l=kV(s);return n=IV(t,l),l}});return n?await n:r.authToken}async function TV(t,e){let n=await yv(t.appConfig);for(;n.authToken.requestStatus===1;)await nS(100),n=await yv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Am(t,e):r}function yv(t){return Oc(t,e=>{if(!lS(e))throw Ii.create("not-registered");const n=e.authToken;return RV(n)?{...e,authToken:{requestStatus:0}}:e})}async function IV(t,e){try{const n=await wV(t,e),r={...e,authToken:n};return await Mu(t.appConfig,r),n}catch(n){if(X0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await oS(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Mu(t.appConfig,r)}throw n}}function lS(t){return t!==void 0&&t.registrationStatus===2}function SV(t){return t.requestStatus===2&&!AV(t)}function AV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+JD}function kV(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function RV(t){return t.requestStatus===1&&t.requestTime+G0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CV(t){const e=t,{installationEntry:n,registrationPromise:r}=await Sm(e);return r?r.catch(console.error):Am(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PV(t,e=!1){const n=t;return await xV(n),(await Am(n,e)).token}async function xV(t){const{registrationPromise:e}=await Sm(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NV(t){if(!t||!t.options)throw Hh("App Configuration");if(!t.name)throw Hh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Hh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Hh(t){return Ii.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="installations",bV="installations-internal",DV=t=>{const e=t.getProvider("app").getImmediate(),n=NV(e),r=Xn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},VV=t=>{const e=t.getProvider("app").getImmediate(),n=Xn(e,uS).getImmediate();return{getId:()=>CV(n),getToken:i=>PV(n,i)}};function OV(){Jt(new Bt(uS,DV,"PUBLIC")),Jt(new Bt(bV,VV,"PRIVATE"))}OV();lt(W0,Tm);lt(W0,Tm,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="analytics",LV="firebase_id",MV="origin",UV=60*1e3,FV="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",km="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new oc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jV={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ft=new Ri("analytics","Analytics",jV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BV(t){if(!t.startsWith(km)){const e=Ft.create("invalid-gtag-resource",{gtagURL:t});return vt.warn(e.message),""}return t}function cS(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function zV(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function $V(t,e){const n=zV("firebase-js-sdk-policy",{createScriptURL:BV}),r=document.createElement("script"),i=`${km}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function qV(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function HV(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await cS(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){vt.error(l)}t("config",i,s)}async function WV(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await cS(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){vt.error(s)}}function GV(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await WV(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await HV(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){vt.error(l)}}return i}function KV(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=GV(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function QV(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(km)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XV=30,YV=1e3;class JV{constructor(e={},n=YV){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const hS=new JV;function ZV(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function eO(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:ZV(n)},i=FV.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw Ft.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function tO(t,e=hS,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ft.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ft.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new iO;return setTimeout(async()=>{l.abort()},UV),dS({appId:r,apiKey:i,measurementId:s},o,l,e)}async function dS(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=hS){var l;const{appId:s,measurementId:o}=t;try{await nO(r,e)}catch(u){if(o)return vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw u}try{const u=await eO(t);return i.deleteThrottleMetadata(s),u}catch(u){const c=u;if(!rO(c)){if(i.deleteThrottleMetadata(s),o)return vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw u}const d=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?Uy(n,i.intervalMillis,XV):Uy(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,p),vt.debug(`Calling attemptFetch again in ${d} millis`),dS(t,p,r,i)}}function nO(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ft.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function rO(t){if(!(t instanceof qt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class iO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function sO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function oO(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aO(){if(pp())try{await mp()}catch(t){return vt.warn(Ft.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return vt.warn(Ft.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lO(t,e,n,r,i,s,o){const l=tO(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&vt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>vt.error(m)),e.push(l);const u=aO().then(m=>{if(m)return r.getId()}),[c,d]=await Promise.all([l,u]);QV(s)||$V(s,c.measurementId),i("js",new Date);const p=(o==null?void 0:o.config)??{};return p[MV]="firebase",p.update=!0,d!=null&&(p[LV]=d),i("config",c.measurementId,p),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.app=e}_delete(){return delete ps[this.app.options.appId],Promise.resolve()}}let ps={},_v=[];const vv={};let Wh="dataLayer",cO="gtag",wv,Rm,Ev=!1;function hO(){const t=[];if(fp()&&t.push("This is a browser extension environment."),iT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ft.create("invalid-analytics-context",{errorInfo:e});vt.warn(n.message)}}function dO(t,e,n){hO();const r=t.options.appId;if(!r)throw Ft.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ft.create("no-api-key");if(ps[r]!=null)throw Ft.create("already-exists",{id:r});if(!Ev){qV(Wh);const{wrappedGtag:s,gtagCore:o}=KV(ps,_v,vv,Wh,cO);Rm=s,wv=o,Ev=!0}return ps[r]=lO(t,_v,vv,e,wv,Wh,n),new uO(t)}function fO(t=Vs()){t=ue(t);const e=Xn(t,Uu);return e.isInitialized()?e.getImmediate():pO(t)}function pO(t,e={}){const n=Xn(t,Uu);if(n.isInitialized()){const i=n.getImmediate();if(An(e,n.getOptions()))return i;throw Ft.create("already-initialized")}return n.initialize({options:e})}async function mO(){if(fp()||!iT()||!pp())return!1;try{return await mp()}catch{return!1}}function gO(t,e,n){t=ue(t),oO(Rm,ps[t.app.options.appId],e,n).catch(r=>vt.error(r))}function fS(t,e,n,r){t=ue(t),sO(Rm,ps[t.app.options.appId],e,n,r).catch(i=>vt.error(i))}const Tv="@firebase/analytics",Iv="0.10.22";function yO(){Jt(new Bt(Uu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return dO(r,i,n)},"PUBLIC")),Jt(new Bt("analytics-internal",t,"PRIVATE")),lt(Tv,Iv),lt(Tv,Iv,"esm2020");function t(e){try{const n=e.getProvider(Uu).getImmediate();return{logEvent:(r,i,s)=>fS(n,r,i,s),setUserProperties:(r,i)=>gO(n,r,i)}}catch(n){throw Ft.create("interop-component-reg-failed",{reason:n})}}}yO();const _O={apiKey:"AIzaSyBDZBg0ROX64qVqsqcFi7KoO3svZnkR_Jc",authDomain:"everybodytakes.firebaseapp.com",projectId:"everybodytakes",storageBucket:"everybodytakes.firebasestorage.app",messagingSenderId:"759909661412",appId:"1:759909661412:web:ba27e79b149d28aeeb4af1",measurementId:"G-5QQFFZ0ZBR"},Lc=Q1().length?Vs():lT(_O);let ff=null;mO().then(t=>{t&&(ff=fO(Lc))}).catch(()=>{});function pS(t,e){ff&&fS(ff,t,e)}const jl=sx(Lc),Ve=fb(Lc),Fu=GD(Lc);async function vO(){await jl.authStateReady();const t=jl.currentUser;if(t)try{return await t.getIdToken(),t.uid}catch{}const e=await $C(jl);return await e.user.getIdToken(),e.user.uid}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO="type.googleapis.com/google.protobuf.Int64Value",EO="type.googleapis.com/google.protobuf.UInt64Value";function mS(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function ju(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>ju(e));if(typeof t=="function"||typeof t=="object")return mS(t,e=>ju(e));throw new Error("Data cannot be encoded in JSON: "+t)}function xs(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case wO:case EO:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>xs(e)):typeof t=="function"||typeof t=="object"?mS(t,e=>xs(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class kt extends qt{constructor(e,n,r){super(`${Cm}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,kt.prototype)}}function TO(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Bu(t,e){let n=TO(t),r=n,i;try{const s=e&&e.error;if(s){const o=s.status;if(typeof o=="string"){if(!Sv[o])return new kt("internal","internal");n=Sv[o],r=o}const l=s.message;typeof l=="string"&&(r=l),i=s.details,i!==void 0&&(i=xs(i))}}catch{}return n==="ok"?null:new kt(n,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e,n,r,i){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,bt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(s=>this.auth=s,()=>{}),this.messaging||r.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i==null||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="us-central1",SO=/^data: (.*?)(?:\n|$)/;function AO(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new kt("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class kO{constructor(e,n,r,i,s=pf,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new IO(e,n,r,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(s);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=pf}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function RO(t,e,n){const r=Qn(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&sc(t.emulatorOrigin+"/backends")}function CO(t,e,n){const r=i=>xO(t,e,i,{});return r.stream=(i,s)=>bO(t,e,i,s),r}function gS(t){return t.emulatorOrigin&&Qn(t.emulatorOrigin)?"include":void 0}async function PO(t,e,n,r,i){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n,credentials:gS(i)})}catch{return{status:0,json:null}}let o=null;try{o=await s.json()}catch{}return{status:s.status,json:o}}async function yS(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function xO(t,e,n,r){const i=t._url(e);return NO(t,i,n,r)}async function NO(t,e,n,r){n=ju(n);const i={data:n},s=await yS(t,r),o=r.timeout||7e4,l=AO(o),u=await Promise.race([PO(e,i,s,t.fetchImpl,t),l.promise,t.cancelAllRequests]);if(l.cancel(),!u)throw new kt("cancelled","Firebase Functions instance was deleted.");const c=Bu(u.status,u.json);if(c)throw c;if(!u.json)throw new kt("internal","Response is not valid JSON object.");let d=u.json.data;if(typeof d>"u"&&(d=u.json.result),typeof d>"u")throw new kt("internal","Response is missing data field.");return{data:xs(d)}}function bO(t,e,n,r){const i=t._url(e);return DO(t,i,n,r||{})}async function DO(t,e,n,r){var m;n=ju(n);const i={data:n},s=await yS(t,r);s["Content-Type"]="application/json",s.Accept="text/event-stream";let o;try{o=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(i),headers:s,signal:r==null?void 0:r.signal,credentials:gS(t)})}catch(E){if(E instanceof Error&&E.name==="AbortError"){const x=new kt("cancelled","Request was cancelled.");return{data:Promise.reject(x),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(x)}}}}}}const P=Bu(0,null);return{data:Promise.reject(P),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(P)}}}}}}let l,u;const c=new Promise((E,P)=>{l=E,u=P});(m=r==null?void 0:r.signal)==null||m.addEventListener("abort",()=>{const E=new kt("cancelled","Request was cancelled.");u(E)});const d=o.body.getReader(),p=VO(d,l,u,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const E=p.getReader();return{async next(){const{value:P,done:x}=await E.read();return{value:P,done:x}},async return(){return await E.cancel(),{done:!0,value:void 0}}}}},data:c}}function VO(t,e,n,r){const i=(o,l)=>{const u=o.match(SO);if(!u)return;const c=u[1];try{const d=JSON.parse(c);if("result"in d){e(xs(d.result));return}if("message"in d){l.enqueue(xs(d.message));return}if("error"in d){const p=Bu(0,d);l.error(p),n(p);return}}catch(d){if(d instanceof kt){l.error(d),n(d);return}}},s=new TextDecoder;return new ReadableStream({start(o){let l="";return u();async function u(){if(r!=null&&r.aborted){const c=new kt("cancelled","Request was cancelled");return o.error(c),n(c),Promise.resolve()}try{const{value:c,done:d}=await t.read();if(d){l.trim()&&i(l.trim(),o),o.close();return}if(r!=null&&r.aborted){const m=new kt("cancelled","Request was cancelled");o.error(m),n(m),await t.cancel();return}l+=s.decode(c,{stream:!0});const p=l.split(`
`);l=p.pop()||"";for(const m of p)m.trim()&&i(m.trim(),o);return u()}catch(c){const d=c instanceof kt?c:Bu(0,null);o.error(d),n(d)}}},cancel(){return t.cancel()}})}const Av="@firebase/functions",kv="0.13.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO="auth-internal",LO="app-check-internal",MO="messaging-internal";function UO(t){const e=(n,{instanceIdentifier:r})=>{const i=n.getProvider("app").getImmediate(),s=n.getProvider(OO),o=n.getProvider(MO),l=n.getProvider(LO);return new kO(i,s,o,l,r)};Jt(new Bt(Cm,e,"PUBLIC").setMultipleInstances(!0)),lt(Av,kv,t),lt(Av,kv,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t=Vs(),e=pf){const r=Xn(ue(t),Cm).getImmediate({identifier:e}),i=dp("functions");return i&&jO(r,...i),r}function jO(t,e,n){RO(ue(t),e,n)}function BO(t,e,n){return CO(ue(t),e)}UO();const Bl=240,Gh=6e4,zO=150,$O=100*1024*1024;class di extends Error{constructor(e){super(e),this.code=e}}const _S=()=>crypto.randomUUID().replace(/-/g,"").slice(0,21);function mf(t){return t&&typeof t.toMillis=="function"?t.toMillis():typeof t=="string"&&Date.parse(t)||0}const qO=t=>[...t].sort((e,n)=>mf(n.createdAt)-mf(e.createdAt)),HO=24*60*60*1e3;function WO(t,e){if(t.archiveDays==null)return!1;const n=t.date?Date.parse(t.date):mf(t.firstPhotoAt);return!n||Number.isNaN(n)?!1:e>=n+t.archiveDays*HO}async function GO(t){const e=t.trim().toUpperCase(),n=await Nb(T0(tm(Ve,"events"),Ib("shortCode","==",e)));return n.empty?null:n.docs[0].data()}async function KO(t,e,n){const r=ht(Ve,"events",t),i=ht(Ve,"events",t,"guests",e);return pm(Ve,async s=>{const o=await s.get(r);if(!o.exists())throw new Error("Event not found");const l=o.data(),u=await s.get(i);if(u.exists())return u.data().shotsRemaining??0;if(l.maxGuests!=null&&(l.guestCount??0)>=l.maxGuests)throw new di("event_full");return s.set(i,{userId:e,nickname:n??"Anonymous",shotsRemaining:l.shotsPerGuest,joinedAt:Bs()}),s.update(r,{guestCount:Ps(1)}),l.shotsPerGuest})}const QO=t=>(t??0)>=999;async function XO(t,e){const n=ht(Ve,"events",t,"guests",e);await pm(Ve,async r=>{const i=await r.get(n);if(!i.exists())return;const s=i.data().shotsRemaining??0;if(s<=0)throw new di("no_shots");r.update(n,{shotsRemaining:s-1})})}const Rv=15e3;function Cv(t,e,n){return new Promise((r,i)=>{const s=setTimeout(()=>i(new Error(`${n} timed out`)),e);t.then(o=>{clearTimeout(s),r(o)},o=>{clearTimeout(s),i(o)})})}function YO(t,e){return new Promise((n,r)=>{t.toBlob(i=>i?n(i):r(new Error("encode failed")),"image/jpeg",e)})}function vS(t,e,n,r,i){const s=Math.min(1,r/Math.max(e,n)),o=document.createElement("canvas");return o.width=Math.round(e*s),o.height=Math.round(n*s),o.getContext("2d").drawImage(t,0,0,o.width,o.height),YO(o,i)}function JO(t,e,n){return typeof createImageBitmap!="function"?Promise.reject(new Error("no createImageBitmap")):createImageBitmap(t).then(async r=>{var i;try{return await vS(r,r.width,r.height,e,n)}finally{(i=r.close)==null||i.call(r)}})}function ZO(t,e,n){return new Promise((r,i)=>{const s=URL.createObjectURL(t),o=new Image;let l=!1;const u=c=>{l||(l=!0,URL.revokeObjectURL(s),c())};o.onload=()=>{vS(o,o.naturalWidth,o.naturalHeight,e,n).then(c=>u(()=>r(c)),c=>u(()=>i(c)))},o.onerror=()=>u(()=>i(new Error("decode failed"))),o.src=s})}function wS(t,e,n){return Cv(JO(t,e,n),Rv,"decode").catch(()=>Cv(ZO(t,e,n),Rv,"decode"))}const eL=t=>wS(t,1600,.8),ES=400,tL=4e3;function nL(t){return new Promise((e,n)=>{const r=URL.createObjectURL(t),i=document.createElement("video");let s=!1;const o=u=>{s||(s=!0,clearTimeout(l),i.removeAttribute("src"),URL.revokeObjectURL(r),u())},l=setTimeout(()=>o(()=>n(new Error("poster timed out"))),tL);i.muted=!0,i.playsInline=!0,i.preload="metadata",i.onloadeddata=()=>{try{i.currentTime=Math.min(.1,(i.duration||1)/2)}catch{o(()=>n(new Error("seek failed")))}},i.onseeked=()=>{let u=i.videoWidth,c=i.videoHeight;const d=Math.min(1,ES/Math.max(u,c));u=Math.round(u*d),c=Math.round(c*d);const p=document.createElement("canvas");p.width=u,p.height=c,p.getContext("2d").drawImage(i,0,0,u,c),p.toBlob(m=>o(()=>m?e(m):n(new Error("poster failed"))),"image/jpeg",.7)},i.onerror=()=>o(()=>n(new Error("video decode failed"))),i.src=r})}const rL=45e3;function iL(t,e,n,r){return new Promise((i,s)=>{const o=HD(t,e,{contentType:n});let l=Date.now(),u=!1;const c=p=>{u||(u=!0,clearInterval(d),p())},d=setInterval(()=>{Date.now()-l>rL&&c(()=>{o.cancel(),s(new Error("upload stalled"))})},2e3);o.on("state_changed",p=>{l=Date.now(),p.totalBytes>0&&(r==null||r(Math.round(p.bytesTransferred/p.totalBytes*100)))},p=>c(()=>s(p)),()=>c(()=>i()))})}async function sL(t,e,n){try{return n?await nL(t):await wS(e,ES,.7)}catch{return null}}async function oL(t,e,n,r,i,s){const o=_S(),l=ht(Ve,"events",t);if(i==="video"&&r.size>$O)throw new di("video_too_big");await pm(Ve,async u=>{const c=await u.get(l);if(!c.exists())throw new Error("Event not found");const d=c.data();if(!d.isActive)throw new di("event_ended");if(d.photoCap!=null&&(d.photoCount??0)>=d.photoCap)throw new di("photo_cap");u.update(l,{photoCount:Ps(1)})});try{const u=i==="video";let c,d;if(u)c=r,d=r.type||"video/mp4";else try{c=await eL(r),d="image/jpeg"}catch{c=r,d=r.type||"image/jpeg"}const p=u?d.split("/")[1]||"mp4":"jpg",m=Lu(Fu,`events/${t}/photos/${o}.${p}`);await iL(m,c,d,s);const E=await hf(m);let P=E;const x=await sL(r,c,u);if(x)try{const T=Lu(Fu,`events/${t}/thumbs/${o}.jpg`);await H0(T,x,{contentType:"image/jpeg"}),P=await hf(T)}catch{}const V={id:o,eventId:t,uploadedBy:e,uploaderName:n,imageUrl:E,thumbnailUrl:P,mediaType:i,isVisible:!0,likesCount:0,likedBy:[],createdAt:new Date().toISOString()};return await Nc(ht(Ve,"events",t,"photos",o),{...V,createdAt:Bs()}),V}catch(u){throw await Da(l,{photoCount:Ps(-1)}).catch(()=>{}),u}}function aL(t,e){const n=T0(tm(Ve,"events",t,"photos"),Sb("createdAt","desc"),Ab(zO));return Vb(n,r=>e(qO(r.docs.map(i=>i.data({serverTimestamps:"estimate"})))),()=>e([]))}async function lL(t,e,n,r){const i=r.trim().slice(0,Bl);i&&await Nc(ht(Ve,"events",t,"notes",e),{authorId:e,authorName:(n==null?void 0:n.trim())||null,text:i,createdAt:Bs()})}async function TS(t,e){const n=await S0(ht(Ve,"events",t,"notes",e));return n.exists()?{id:n.id,...n.data()}:null}async function uL(t,e,n,r,i){const s=Lu(Fu,`events/${t}/voices/${e}.m4a`);await H0(s,r,{contentType:r.type||"audio/mp4"});const o=await hf(s);await Nc(ht(Ve,"events",t,"voices",e),{authorId:e,authorName:(n==null?void 0:n.trim())||null,audioUrl:o,durationMs:Math.round(i),createdAt:Bs()})}async function IS(t,e){const n=await S0(ht(Ve,"events",t,"voices",e));return n.exists()?{id:n.id,...n.data()}:null}async function cL(t,e){await bb(ht(Ve,"events",t,"voices",e)),await WD(Lu(Fu,`events/${t}/voices/${e}.m4a`)).catch(()=>{})}async function hL(t){return(await BO(FO(),"createEventZip")({eventId:t})).data}async function dL(t,e,n,r){await Da(ht(Ve,"events",t,"photos",e),{likedBy:r?Eb(n):wb(n),likesCount:Ps(r?-1:1)})}async function fL(t,e){await Da(ht(Ve,"events",t,"photos",e),{isVisible:!1})}async function pL(t,e,n){await Nc(ht(Ve,"reports",_S()),{eventId:t,photoId:e,reporterId:n,reason:"objectionable",createdAt:Bs()}),await Da(ht(Ve,"events",t,"photos",e),{flagged:!0,reportCount:Ps(1)}).catch(()=>{})}async function Pv(t,e){await Da(ht(Ve,"events",t,"guests",e),{shotsRemaining:Ps(1)}).catch(()=>{})}const xv={en:{joining:"Joining event…",notFound:"We couldn't find that event. Check the code and try again.",enterCode:"Enter event code",codeHint:"Find it on the QR card or invite.",tryAgain:"Try another code",live:"Live",codePlaceholder:"ABC123",go:"Join event",yourName:"Your name",anonymous:"Anonymous",namePlaceholder:"You can stay anonymous",photo:"Photo",video:"Video",fromAlbum:"From album",shotsLeft:"{n} left",noShots:"No shots left",uploading:"Uploading…",ended:"This event has ended",gallery:"Gallery",empty:"No photos yet — be the first!",all:"All",mine:"Mine",by:"By",download:"Download",developing:"Photos reveal after the event",full:"This event is full",capReached:"Photo limit reached for this event",opensAt:"Opens {time}",uploadFailed:"Upload failed — your shot was returned. Try again.",videoTooBig:"That video is too large to upload. Record a shorter clip and try again.",report:"Report",reportConfirm:"Report this photo? It will be hidden and reviewed.",reported:"Thanks — the content was reported and hidden.",deleteBtn:"Delete",deleteConfirm:"Delete this photo?",leaveMemory:"Leave a memory",editMemory:"Edit your memory",memorySubtitle:"Share a few words about tonight",memoryPlaceholder:"Write your message…",memorySend:"Leave note",memoryUpdate:"Update",memorySent:"Your note has been added 💌",cancel:"Cancel",voiceLeave:"Leave a voice",voiceEdit:"Edit your voice",voiceYours:"Your voice",voiceSubtitle:"Say a few words for the album",voiceTap:"Tap to record",voiceStop:"Stop",voiceRerecord:"Record again",voiceSend:"Leave voice",voiceUpdate:"Update",voiceSent:"Your voice has been added",voiceDelete:"Delete",voiceDeleteConfirm:"Delete your voice?",voiceMaxHint:"Up to {s}s",voiceDenied:"Enable microphone access in your browser to record a voice memory.",voiceFailed:"Could not save your voice. Try again.",downloadZip:"Download all (ZIP)",zipPreparing:"Preparing…",zipFailed:"Could not prepare the ZIP. Try again in a moment.",archivedTitle:"This album is archived",archivedBody:"The event wrapped a while ago. Open the GuestCam app to unlock and download every photo."},tr:{joining:"Etkinliğe katılıyor…",notFound:"Bu etkinliği bulamadık. Kodu kontrol edip tekrar dene.",enterCode:"Etkinlik kodunu gir",codeHint:"QR kartında ya da davetiyede yazıyor.",tryAgain:"Başka kod dene",live:"Canlı",codePlaceholder:"ABC123",go:"Etkinliğe katıl",yourName:"Adın",anonymous:"Anonim",namePlaceholder:"Anonim kalabilirsin",photo:"Fotoğraf",video:"Video",fromAlbum:"Albümden",shotsLeft:"{n} kaldı",noShots:"Çekim kalmadı",uploading:"Yükleniyor…",ended:"Bu etkinlik sona erdi",gallery:"Galeri",empty:"Henüz fotoğraf yok — ilk sen ol!",all:"Tümü",mine:"Benim",by:"Çeken",download:"İndir",developing:"Fotoğraflar etkinlikten sonra açılır",full:"Bu etkinlik dolu",capReached:"Bu etkinliğin fotoğraf limiti doldu",opensAt:"{time} açılır",uploadFailed:"Yükleme başarısız — çekim hakkın iade edildi. Tekrar dene.",videoTooBig:"Bu video yüklenemeyecek kadar büyük. Daha kısa bir video çekip tekrar dene.",report:"Bildir",reportConfirm:"Bu fotoğraf bildirilsin mi? Gizlenir ve incelenir.",reported:"Teşekkürler — içerik bildirildi ve gizlendi.",deleteBtn:"Sil",deleteConfirm:"Bu fotoğraf silinsin mi?",leaveMemory:"Bir anı bırak",editMemory:"Anını düzenle",memorySubtitle:"Bu akşam için birkaç kelime",memoryPlaceholder:"Mesajını yaz…",memorySend:"Notu bırak",memoryUpdate:"Güncelle",memorySent:"Notun eklendi 💌",cancel:"İptal",voiceLeave:"Sesli not bırak",voiceEdit:"Sesini düzenle",voiceYours:"Sesin",voiceSubtitle:"Albüm için birkaç kelime söyle",voiceTap:"Kaydetmek için dokun",voiceStop:"Durdur",voiceRerecord:"Yeniden kaydet",voiceSend:"Sesi bırak",voiceUpdate:"Güncelle",voiceSent:"Sesin eklendi",voiceDelete:"Sil",voiceDeleteConfirm:"Sesin silinsin mi?",voiceMaxHint:"En fazla {s} sn",voiceDenied:"Sesli not kaydetmek için tarayıcıdan mikrofon erişimine izin ver.",voiceFailed:"Sesin kaydedilemedi. Tekrar dene.",downloadZip:"Hepsini indir (ZIP)",zipPreparing:"Hazırlanıyor…",zipFailed:"ZIP hazırlanamadı. Birazdan tekrar dene.",archivedTitle:"Bu albüm arşivlendi",archivedBody:"Etkinlik bir süre önce sona erdi. Tüm fotoğrafların kilidini açıp indirmek için GuestCam uygulamasını aç."}},mL=(navigator.language||"en").toLowerCase().startsWith("tr")?"tr":"en";function q(t,e){let n=xv[mL][t]??xv.en[t]??t;if(e)for(const[r,i]of Object.entries(e))n=n.replace(`{${r}}`,String(i));return n}const gL=30,yL="web-1";async function gf(t,e,n){var o;const r=e,i=(r==null?void 0:r.message)??String(e),s=(r==null?void 0:r.code)??null;try{await Db(tm(Ve,"errorLogs"),{context:t,message:String(i).slice(0,1e3),code:s,extra:n??null,uid:((o=jl.currentUser)==null?void 0:o.uid)??null,platform:"web",appVersion:yL,createdAt:Bs(),expireAt:pe.fromMillis(Date.now()+gL*24*60*60*1e3)})}catch{}}function _L({event:t,uid:e,nickname:n,shots:r,onShotsChange:i}){const[s,o]=X.useState(!1),[l,u]=X.useState(0),[c,d]=X.useState(""),p=X.useRef(null),m=X.useRef(null),E=X.useRef(null),P=QO(t.shotsPerGuest),x=!P&&r<=0;async function V(T,w){var U;const k=(U=T.target.files)==null?void 0:U[0];if(T.target.value="",!k||s||x)return;const D=w??(k.type.startsWith("video")?"video":"image");o(!0),u(0),d("");let M=!1;try{P||(await XO(t.id,e),M=!0,i(r-1)),await oL(t.id,e,n.trim()||null,k,D,u),pS("web_upload",{mediaType:D})}catch(v){v instanceof di?(v.code==="video_too_big"&&M&&(await Pv(t.id,e).catch(()=>{}),i(r)),d(v.code==="no_shots"?q("noShots"):v.code==="photo_cap"?q("capReached"):v.code==="video_too_big"?q("videoTooBig"):q("ended"))):(M&&(await Pv(t.id,e).catch(()=>{}),i(r)),gf("web_upload",v,{eventId:t.id,mediaType:D,fileType:k.type,fileBytes:k.size}),d(q("uploadFailed")))}finally{o(!1),u(0)}}return A.jsx("div",{className:"fixed inset-x-0 bottom-0 border-t border-line bg-paper/95 backdrop-blur",children:A.jsxs("div",{className:"mx-auto max-w-md px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]",children:[c&&A.jsx("p",{className:"mb-2 text-center text-xs font-semibold text-brand",children:c}),A.jsx("div",{className:"mb-2 flex justify-center",children:A.jsxs("span",{className:`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${x?"bg-brand/10 text-brand":"bg-paper-card text-ink-soft"}`,children:[A.jsx(Nv,{small:!0})," ",x?q("noShots"):q("shotsLeft",{n:P?"∞":r})]})}),A.jsx("input",{ref:p,type:"file",accept:"image/*",capture:"environment",hidden:!0,onChange:T=>V(T,"image")}),A.jsx("input",{ref:m,type:"file",accept:"video/*",capture:"environment",hidden:!0,onChange:T=>V(T,"video")}),A.jsx("input",{ref:E,type:"file",accept:"image/*,video/*",hidden:!0,onChange:T=>V(T)}),A.jsxs("div",{className:"flex items-center gap-2.5",children:[A.jsxs("button",{disabled:s||x,onClick:()=>{var T;return(T=p.current)==null?void 0:T.click()},className:"flex flex-1 items-center justify-center gap-2 rounded-2xl bg-brand py-3.5 font-semibold text-white shadow-sm transition active:scale-[0.98] disabled:opacity-40",children:[A.jsx(Nv,{})," ",s?l>0?`${l}%`:q("uploading"):q("photo")]}),A.jsx("button",{disabled:s||x,onClick:()=>{var T;return(T=m.current)==null?void 0:T.click()},"aria-label":q("video"),className:"grid h-[52px] w-[52px] place-items-center rounded-2xl border border-brand text-brand transition active:scale-[0.98] disabled:opacity-40",children:A.jsx(vL,{})}),t.allowGalleryUpload&&A.jsx("button",{disabled:s||x,onClick:()=>{var T;return(T=E.current)==null?void 0:T.click()},"aria-label":q("fromAlbum"),className:"grid h-[52px] w-[52px] place-items-center rounded-2xl border border-line text-ink-soft transition active:scale-[0.98] disabled:opacity-40",children:A.jsx(wL,{})})]})]})})}function Nv({small:t}){const e=t?14:20;return A.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A.jsx("path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"}),A.jsx("circle",{cx:"12",cy:"13",r:"3"})]})}function vL(){return A.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A.jsx("path",{d:"m22 8-6 4 6 4V8Z"}),A.jsx("rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"})]})}function wL(){return A.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),A.jsx("circle",{cx:"9",cy:"9",r:"2"}),A.jsx("path",{d:"m21 15-3.5-3.5L9 20"})]})}function bv(t){if(t.revealTiming!=="next_day")return 0;const e=t.date?new Date(t.date):new Date;return e.setHours(0,0,0,0),e.setDate(e.getDate()+1),e.getTime()}function EL({event:t,uid:e,photos:n}){var v,y;const[r,i]=X.useState(n),[s,o]=X.useState("all"),[l,u]=X.useState(null),[c,d]=X.useState(!1),p=X.useRef(null),m=X.useRef(null);X.useEffect(()=>i(n),[n]);const E=t.revealTiming==="private",P=t.revealTiming!=="next_day"||Date.now()>=bv(t),x=r.filter(_=>_.isVisible===!1||_.flagged?!1:E||s==="mine"?_.uploadedBy===e:!0),V=_=>{m.current=_,u(_)};X.useEffect(()=>{l!=null&&m.current!=null&&p.current&&(p.current.scrollLeft=m.current*p.current.clientWidth,m.current=null)},[l]);const T=()=>{const _=p.current;if(!_||m.current!=null)return;const S=Math.round(_.scrollLeft/_.clientWidth);S!==l&&S>=0&&S<x.length&&u(S)},w=_=>{const S=(_.likedBy??[]).includes(e);i(R=>R.map(C=>C.id===_.id?{...C,likedBy:S?(C.likedBy??[]).filter(I=>I!==e):[...C.likedBy??[],e],likesCount:(C.likesCount??0)+(S?-1:1)}:C)),dL(t.id,_.id,e,S).catch(()=>{})},k=_=>{window.confirm(q("deleteConfirm"))&&(u(null),i(S=>S.filter(R=>R.id!==_.id)),fL(t.id,_.id).catch(()=>{}))},D=_=>{window.confirm(q("reportConfirm"))&&(u(null),i(S=>S.filter(R=>R.id!==_.id)),pL(t.id,_.id,e).catch(()=>{}),window.alert(q("reported")))},M=async()=>{if(!c){d(!0);try{const{url:_}=await hL(t.id);window.location.href=_}catch{window.alert(q("zipFailed"))}finally{d(!1)}}},U=l!=null?x[l]:null;return A.jsxs("section",{className:"mt-5",children:[A.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[A.jsx("h2",{className:"text-lg font-bold",children:q("gallery")}),!E&&P&&A.jsx("div",{className:"flex gap-1 rounded-full border border-line bg-paper-card p-0.5",children:["all","mine"].map(_=>A.jsx("button",{onClick:()=>o(_),className:`rounded-full px-3 py-1 text-xs font-semibold ${s===_?"bg-brand text-white":"text-ink-muted"}`,children:q(_==="all"?"all":"mine")},_))})]}),P&&x.length>0&&A.jsx("div",{className:"mb-3 flex justify-center",children:A.jsxs("button",{onClick:M,disabled:c,className:"inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-dark px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(190,106,46,0.7)] transition hover:brightness-105 active:scale-[0.97] disabled:opacity-50",children:[A.jsx(kL,{})," ",q(c?"zipPreparing":"downloadZip")]})}),P?x.length===0?A.jsx(Dv,{children:q("empty")}):A.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:x.map((_,S)=>{var C;const R=((C=_.likedBy)==null?void 0:C.length)??0;return A.jsxs("button",{onClick:()=>V(S),className:"relative aspect-[9/13] overflow-hidden rounded-lg bg-paper-deep",children:[A.jsx(TL,{src:_.thumbnailUrl||_.imageUrl}),_.mediaType==="video"&&A.jsx("span",{className:"absolute left-1.5 top-1.5 rounded-full bg-black/55 p-1",children:A.jsx(IL,{})}),_.uploadedBy===e&&A.jsx("span",{className:"absolute right-1.5 top-1.5 h-4 w-4 rounded-full bg-brand"}),R>0&&A.jsxs("span",{className:"absolute bottom-1.5 left-1.5 flex items-center gap-1 rounded-full bg-black/55 px-1.5 py-0.5 text-[11px] font-semibold text-white",children:[A.jsx(Vv,{filled:!0})," ",R]})]},_.id)})}):A.jsxs(Dv,{children:[q("developing"),A.jsx("span",{className:"mt-1 block text-xs font-semibold text-brand",children:q("opensAt",{time:new Date(bv(t)).toLocaleString(void 0,{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})})})]}),U&&A.jsxs("div",{className:"fixed inset-0 z-50 bg-black",children:[A.jsx("div",{ref:p,onScroll:T,className:"no-scrollbar snap-x-mandatory flex h-full w-full overflow-x-auto overflow-y-hidden",children:x.map(_=>A.jsx("div",{className:"snap-center flex h-full w-full flex-none items-center justify-center",children:_.mediaType==="video"?A.jsx("video",{src:_.imageUrl,controls:!0,playsInline:!0,className:"max-h-full max-w-full"}):A.jsx("img",{src:_.imageUrl,alt:"",className:"max-h-full max-w-full object-contain"})},_.id))}),A.jsx("button",{onClick:()=>u(null),className:"absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white",children:A.jsx(SL,{})}),A.jsxs("div",{className:"absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6",children:[A.jsxs("p",{className:"text-sm text-white/70",children:[q("by")," ",A.jsx("span",{className:"font-semibold text-white",children:((v=U.uploaderName)==null?void 0:v.trim())||q("anonymous")})," · ",l+1,"/",x.length]}),A.jsxs("div",{className:"flex items-center gap-8 text-white",children:[A.jsxs("button",{onClick:()=>w(U),className:`flex flex-col items-center gap-1 text-xs ${(U.likedBy??[]).includes(e)?"text-brand":"text-white"}`,children:[A.jsx(Vv,{filled:(U.likedBy??[]).includes(e),big:!0}),(((y=U.likedBy)==null?void 0:y.length)??0)>0?U.likedBy.length:""]}),A.jsxs("a",{href:U.imageUrl,target:"_blank",rel:"noreferrer",download:!0,className:"flex flex-col items-center gap-1 text-xs",children:[A.jsx(AL,{})," ",q("download")]}),U.uploadedBy===e?A.jsxs("button",{onClick:()=>k(U),className:"flex flex-col items-center gap-1 text-xs",children:[A.jsx(RL,{})," ",q("deleteBtn")]}):A.jsxs("button",{onClick:()=>D(U),className:"flex flex-col items-center gap-1 text-xs",children:[A.jsx(CL,{})," ",q("report")]})]})]})]})]})}function Dv({children:t}){return A.jsx("div",{className:"rounded-2xl border border-line bg-paper-card py-12 text-center text-sm text-ink-muted",children:t})}function TL({src:t}){const[e,n]=X.useState(!1);return e||!t?A.jsx("div",{className:"h-full w-full bg-gradient-to-br from-brand/30 to-brand-dark/50"}):A.jsx("img",{src:t,alt:"",onError:()=>n(!0),className:"h-full w-full object-cover",loading:"lazy"})}function IL(){return A.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"white",children:A.jsx("path",{d:"M8 5v14l11-7z"})})}function SL(){return A.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:A.jsx("path",{d:"M18 6 6 18M6 6l12 12"})})}function AL(){return A.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:A.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"})})}function kL(){return A.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:A.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"})})}function RL(){return A.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:A.jsx("path",{d:"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})})}function CL(){return A.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:A.jsx("path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"})})}function Vv({filled:t,big:e}){const n=e?24:12;return A.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:t?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:A.jsx("path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"})})}function SS({s:t=17}){return A.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:A.jsx("path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"})})}function yf({s:t=17}){return A.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[A.jsx("path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}),A.jsx("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),A.jsx("line",{x1:"12",x2:"12",y1:"19",y2:"22"})]})}function PL({eventId:t,uid:e,nickname:n,onClose:r,onSaved:i}){const[s,o]=X.useState(""),[l,u]=X.useState(!1),[c,d]=X.useState(!1),p=Bl-s.length;X.useEffect(()=>{let P=!0;return TS(t,e).then(x=>{P&&(o((x==null?void 0:x.text)??""),u(!!x))}).catch(()=>{}),()=>{P=!1}},[t,e]);const m=()=>{c||r()},E=async()=>{if(!(!s.trim()||c)){d(!0);try{await lL(t,e,n.trim()||null,s),i(),r(),window.alert(q("memorySent"))}catch{window.alert(q("uploadFailed"))}finally{d(!1)}}};return A.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-5",children:[A.jsx("div",{className:"absolute inset-0 bg-black/45 backdrop-blur-sm",onClick:m}),A.jsxs("div",{className:"relative w-full max-w-sm rounded-3xl border border-line bg-paper p-5 shadow-[0_30px_60px_-30px_rgba(58,38,18,0.55)]",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("div",{className:"grid h-10 w-10 flex-none place-items-center rounded-full bg-brand/12 text-brand",children:A.jsx(SS,{s:20})}),A.jsxs("div",{className:"min-w-0",children:[A.jsx("h2",{className:"font-serif text-xl font-semibold leading-tight",children:q(l?"editMemory":"leaveMemory")}),A.jsx("p",{className:"text-sm text-ink-muted",children:q("memorySubtitle")})]})]}),A.jsx("textarea",{value:s,onChange:P=>o(P.target.value.slice(0,Bl)),placeholder:q("memoryPlaceholder"),maxLength:Bl,rows:4,autoFocus:!0,className:"mt-4 w-full resize-none rounded-2xl border border-line bg-paper-card px-4 py-3 text-[15px] outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"}),A.jsx("div",{className:`mt-1 text-right text-xs ${p<=20?"text-brand":"text-ink-muted"}`,children:p}),A.jsx("button",{onClick:E,disabled:!s.trim()||c,className:"mt-3 w-full rounded-2xl bg-brand py-3.5 font-semibold text-white shadow-sm transition active:scale-[0.98] disabled:opacity-40",children:q(l?"memoryUpdate":"memorySend")}),A.jsx("button",{onClick:m,className:"mt-1 w-full py-2 text-sm font-semibold text-brand",children:q("cancel")})]})]})}async function xL(){var o;if(!((o=navigator.mediaDevices)!=null&&o.getUserMedia))return"denied";let t;try{t=await navigator.mediaDevices.getUserMedia({audio:!0})}catch{return"denied"}const e=window.AudioContext??window.webkitAudioContext,n=new e,r=n.createMediaStreamSource(t),i=n.createScriptProcessor(4096,1,1),s=[];return i.onaudioprocess=l=>{s.push(new Float32Array(l.inputBuffer.getChannelData(0)))},r.connect(i),i.connect(n.destination),{stop:async()=>{i.disconnect(),r.disconnect(),t.getTracks().forEach(u=>u.stop());const l=n.sampleRate;return await n.close().catch(()=>{}),s.length?NL(s,l):null}}}function NL(t,e){const n=t.reduce((l,u)=>l+u.length,0),r=new ArrayBuffer(44+n*2),i=new DataView(r),s=(l,u)=>{for(let c=0;c<u.length;c++)i.setUint8(l+c,u.charCodeAt(c))};s(0,"RIFF"),i.setUint32(4,36+n*2,!0),s(8,"WAVE"),s(12,"fmt "),i.setUint32(16,16,!0),i.setUint16(20,1,!0),i.setUint16(22,1,!0),i.setUint32(24,e,!0),i.setUint32(28,e*2,!0),i.setUint16(32,2,!0),i.setUint16(34,16,!0),s(36,"data"),i.setUint32(40,n*2,!0);let o=44;for(const l of t)for(let u=0;u<l.length;u++){const c=Math.max(-1,Math.min(1,l[u]));i.setInt16(o,c<0?c*32768:c*32767,!0),o+=2}return new Blob([r],{type:"audio/wav"})}const Ov=t=>{const e=Number.isFinite(t)&&t>0?Math.floor(t/1e3):0;return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`};function bL({eventId:t,uid:e,nickname:n,onClose:r,onChanged:i}){const[s,o]=X.useState(!0),[l,u]=X.useState(null),[c,d]=X.useState(!1),[p,m]=X.useState(0),[E,P]=X.useState(null),[x,V]=X.useState(!1),[T,w]=X.useState(!1),k=X.useRef(null),D=X.useRef(0),M=X.useRef(null),U=X.useRef(null),v=()=>{U.current&&(clearInterval(U.current),U.current=null)};X.useEffect(()=>{let se=!0;return IS(t,e).then(Oe=>{se&&u(Oe)}).catch(()=>{}).finally(()=>{se&&o(!1)}),()=>{var Oe,B;se=!1,v(),(Oe=k.current)==null||Oe.stop(),(B=M.current)==null||B.pause()}},[t,e]);const y=(E==null?void 0:E.url)??(l==null?void 0:l.audioUrl)??null,_=E?E.ms:(l==null?void 0:l.durationMs)??0,S=()=>{var se,Oe;if(y){if(T){(se=M.current)==null||se.pause(),w(!1);return}if(!M.current||M.current.src!==y){(Oe=M.current)==null||Oe.pause();const B=new Audio(y);B.onended=()=>w(!1),M.current=B}M.current.currentTime=0,M.current.play().catch(()=>w(!1)),w(!0)}},R=async()=>{var Oe;(Oe=M.current)==null||Oe.pause(),w(!1);const se=await xL();if(se==="denied"){window.alert(q("voiceDenied"));return}k.current=se,D.current=Date.now(),m(0),d(!0),U.current=window.setInterval(()=>{const B=Date.now()-D.current;m(B),B>=Gh&&C()},200)},C=async()=>{const se=k.current;if(!se)return;k.current=null,v();const Oe=await se.stop();if(d(!1),!Oe)return;const B=Math.min(Date.now()-D.current,Gh);P(K=>(K&&URL.revokeObjectURL(K.url),{blob:Oe,ms:B,url:URL.createObjectURL(Oe)}))},I=async()=>{if(!(!E||x)){V(!0);try{await uL(t,e,n.trim()||null,E.blob,E.ms),i(!0),r(),window.alert(q("voiceSent"))}catch{window.alert(q("voiceFailed"))}finally{V(!1)}}},fe=async()=>{var se;!l||!window.confirm(q("voiceDeleteConfirm"))||((se=M.current)==null||se.pause(),w(!1),await cL(t,e).catch(()=>{}),u(null),i(!1))},ge=()=>{var se;x||c||((se=M.current)==null||se.pause(),r())};return A.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-5",children:[A.jsx("div",{className:"absolute inset-0 bg-black/45 backdrop-blur-sm",onClick:ge}),A.jsxs("div",{className:"relative w-full max-w-sm rounded-3xl border border-line bg-paper p-5 shadow-[0_30px_60px_-30px_rgba(58,38,18,0.55)]",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("div",{className:"grid h-10 w-10 flex-none place-items-center rounded-full bg-brand/12 text-brand",children:A.jsx(yf,{s:20})}),A.jsxs("div",{className:"min-w-0",children:[A.jsx("h2",{className:"font-serif text-xl font-semibold leading-tight",children:q(l&&!E?"voiceYours":"voiceLeave")}),A.jsx("p",{className:"text-sm text-ink-muted",children:q("voiceSubtitle")})]})]}),s?A.jsx("div",{className:"flex justify-center py-8",children:A.jsx("div",{className:"h-8 w-8 animate-spin rounded-full border-2 border-line border-t-brand"})}):c?A.jsxs("div",{className:"mt-4 flex flex-col items-center gap-3 py-2",children:[A.jsx("span",{className:"h-4 w-4 animate-pulse rounded-full bg-red-500"}),A.jsx("span",{className:"text-4xl font-bold tabular-nums",children:Ov(p)}),A.jsx("span",{className:"text-sm text-ink-muted",children:q("voiceMaxHint",{s:Math.round(Gh/1e3)})}),A.jsxs("button",{onClick:C,className:"mt-1 flex items-center gap-2 rounded-full bg-red-500 px-7 py-3 font-semibold text-white transition active:scale-95",children:[A.jsx(OL,{})," ",q("voiceStop")]})]}):y?A.jsxs("div",{className:"mt-4 flex flex-col items-center gap-3 py-2",children:[A.jsxs("div",{className:"flex items-center gap-4",children:[A.jsx("button",{onClick:S,className:"grid h-14 w-14 place-items-center rounded-full bg-brand text-white transition active:scale-95",children:T?A.jsx(VL,{}):A.jsx(DL,{})}),A.jsx("span",{className:"min-w-[3.5rem] text-2xl font-bold tabular-nums",children:Ov(_)})]}),A.jsxs("button",{onClick:R,className:"flex items-center gap-1.5 py-1 text-sm font-semibold text-brand",children:[A.jsx(LL,{})," ",q("voiceRerecord")]}),E?A.jsx("button",{onClick:I,disabled:x,className:"w-full rounded-2xl bg-brand py-3.5 font-semibold text-white shadow-sm transition active:scale-[0.98] disabled:opacity-40",children:q(x?"uploading":l?"voiceUpdate":"voiceSend")}):A.jsxs("button",{onClick:fe,className:"flex items-center gap-1.5 py-1 text-sm font-semibold text-red-500",children:[A.jsx(ML,{})," ",q("voiceDelete")]})]}):A.jsxs("div",{className:"mt-4 flex flex-col items-center gap-3 py-2",children:[A.jsx("button",{onClick:R,className:"grid h-20 w-20 place-items-center rounded-full bg-brand text-white shadow-sm transition active:scale-95",children:A.jsx(yf,{s:30})}),A.jsx("span",{className:"text-sm text-ink-muted",children:q("voiceTap")})]}),!c&&A.jsx("button",{onClick:ge,className:"mt-3 w-full py-2 text-sm font-semibold text-brand",children:q("cancel")})]})]})}function DL(){return A.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:A.jsx("polygon",{points:"6 3 20 12 6 21 6 3"})})}function VL(){return A.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"2",children:[A.jsx("rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}),A.jsx("rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"})]})}function OL(){return A.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round",children:A.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"})})}function LL(){return A.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A.jsx("path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}),A.jsx("path",{d:"M21 3v5h-5"}),A.jsx("path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}),A.jsx("path",{d:"M8 16H3v5"})]})}function ML(){return A.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A.jsx("path",{d:"M3 6h18"}),A.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),A.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),A.jsx("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),A.jsx("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})}const Lv="guestcam_nick";function UL(){return(new URLSearchParams(window.location.search).get("code")??"").trim()}function FL(){const[t,e]=X.useState("loading"),[n,r]=X.useState(null),[i,s]=X.useState(""),[o,l]=X.useState(0),[u,c]=X.useState([]),[d,p]=X.useState(()=>localStorage.getItem(Lv)??""),[m,E]=X.useState(""),[P,x]=X.useState(!1),[V,T]=X.useState(!1),[w,k]=X.useState(!1),[D,M]=X.useState(!1),U=X.useRef(null);async function v(C){if(!C){e("needCode");return}e("loading");let I="ensureAnon";try{const fe=await vO();s(fe),I="getByShortCode";const ge=await GO(C);if(!ge){e("error");return}if(r(ge),ge.isActive)try{const se=await KO(ge.id,fe,d||null);l(se),pS("web_join",{eventType:ge.type})}catch(se){se instanceof di&&se.code==="event_full"||gf("guest_join",se,{code:C,step:"joinEvent"})}I="subscribeToPhotos",U.current=aL(ge.id,c),ge.notes&&ge.notesEnabled!==!1&&TS(ge.id,fe).then(se=>T(!!se)).catch(()=>{}),ge.voices&&ge.voicesEnabled!==!1&&IS(ge.id,fe).then(se=>M(!!se)).catch(()=>{}),e("ready")}catch(fe){gf("guest_join",fe,{code:C,step:I}),e("error")}}X.useEffect(()=>(v(UL()),()=>{var C;return(C=U.current)==null?void 0:C.call(U)}),[]);const y=C=>{p(C),localStorage.setItem(Lv,C)};if(t==="loading")return A.jsxs(Kh,{children:[A.jsx(yo,{}),A.jsx(jL,{}),A.jsx("p",{className:"text-ink-soft",children:q("joining")})]});if(t==="needCode")return A.jsx(Kh,{children:A.jsxs("div",{className:"w-full max-w-xs rounded-3xl border border-line bg-paper-card/80 px-7 py-9 shadow-[0_30px_60px_-40px_rgba(58,38,18,0.5)] backdrop-blur",children:[A.jsx(yo,{}),A.jsx("h1",{className:"mt-6 font-serif text-2xl font-semibold leading-tight",children:q("enterCode")}),A.jsx("p",{className:"mt-1.5 text-sm text-ink-muted",children:q("codeHint")}),A.jsx("input",{value:m,onChange:C=>E(C.target.value.toUpperCase()),onKeyDown:C=>{C.key==="Enter"&&v(m)},placeholder:q("codePlaceholder"),maxLength:6,autoFocus:!0,className:"mt-6 w-full rounded-2xl border border-line bg-white/70 px-4 py-3.5 text-center text-2xl font-bold tracking-[0.4em] outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"}),A.jsx("button",{onClick:()=>v(m),disabled:m.length<4,className:"mt-4 w-full rounded-2xl bg-brand py-3.5 font-semibold text-white shadow-sm transition active:scale-[0.98] disabled:opacity-40",children:q("go")})]})});if(t==="error"||!n)return A.jsxs(Kh,{children:[A.jsx(yo,{}),A.jsx("div",{className:"mt-2 grid h-16 w-16 place-items-center rounded-full bg-brand/10 text-brand",children:A.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A.jsx("circle",{cx:"12",cy:"12",r:"10"}),A.jsx("path",{d:"M12 8v4M12 16h.01"})]})}),A.jsx("p",{className:"max-w-xs text-ink-soft",children:q("notFound")}),A.jsx("button",{onClick:()=>e("needCode"),className:"rounded-2xl border border-line bg-paper-card px-5 py-2.5 text-sm font-semibold text-ink-soft transition active:scale-95",children:q("tryAgain")})]});const _=n.date?new Date(n.date).toLocaleDateString(void 0,{day:"numeric",month:"long",year:"numeric"}):"",S=!!n.notes&&n.notesEnabled!==!1,R=!!n.voices&&n.voicesEnabled!==!1;return A.jsxs("div",{className:"min-h-full pb-36",children:[A.jsxs("header",{className:"sticky top-0 z-30 flex items-center justify-between border-b border-line/70 bg-paper/80 px-4 py-2.5 backdrop-blur-md",children:[A.jsx(yo,{small:!0}),A.jsxs("span",{className:"inline-flex items-center gap-1.5 rounded-full bg-paper-card px-2.5 py-1 text-xs font-semibold text-ink-soft",children:[A.jsx(Mv,{})," ",u.length]})]}),A.jsxs("div",{className:"relative h-60 w-full overflow-hidden",children:[n.coverImageUrl?A.jsx("img",{src:n.coverImageUrl,alt:"",className:"h-full w-full object-cover"}):A.jsx("div",{className:"flex h-full items-center justify-center bg-gradient-to-br from-brand to-brand-dark",children:A.jsx(yo,{})}),n.isActive&&A.jsxs("span",{className:"absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur",children:[A.jsx("span",{className:"h-1.5 w-1.5 animate-pulse rounded-full bg-red-400"})," ",q("live")]}),A.jsxs("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-5 pb-5 pt-16",children:[A.jsx("h1",{className:"font-serif text-3xl font-semibold leading-tight text-white drop-shadow-sm",children:n.name}),_&&A.jsx("p",{className:"mt-1 text-sm font-medium text-white/85",children:_})]})]}),A.jsxs("div",{className:"mx-auto max-w-md px-4",children:[A.jsxs("div",{className:"mt-4 flex items-center gap-3 rounded-2xl border border-line bg-paper-card px-3.5 py-3",children:[A.jsx("div",{className:"grid h-10 w-10 flex-none place-items-center rounded-full bg-brand/12 text-brand",children:d.trim()?A.jsx("span",{className:"font-serif text-lg font-semibold",children:d.trim()[0].toUpperCase()}):A.jsx(BL,{})}),A.jsxs("div",{className:"min-w-0 flex-1",children:[A.jsx("label",{className:"block text-[11px] font-semibold uppercase tracking-wide text-ink-muted",children:q("yourName")}),A.jsx("input",{value:d,onChange:C=>y(C.target.value),placeholder:q("namePlaceholder"),maxLength:30,className:"w-full bg-transparent text-[15px] font-medium outline-none placeholder:font-normal placeholder:text-ink-muted"})]})]}),n.isActive&&(S||R)&&A.jsxs("div",{className:"mt-3 flex gap-2",children:[S&&A.jsxs("button",{onClick:()=>x(!0),className:"flex flex-1 items-center justify-center gap-2 rounded-2xl border border-brand bg-brand/10 px-2 py-3 text-sm font-semibold text-brand transition active:scale-[0.98]",children:[A.jsx(SS,{})," ",A.jsx("span",{className:"truncate",children:q(V?"editMemory":"leaveMemory")})]}),R&&A.jsxs("button",{onClick:()=>k(!0),className:"flex flex-1 items-center justify-center gap-2 rounded-2xl border border-brand bg-brand/10 px-2 py-3 text-sm font-semibold text-brand transition active:scale-[0.98]",children:[A.jsx(yf,{})," ",A.jsx("span",{className:"truncate",children:q(D?"voiceEdit":"voiceLeave")})]})]}),WO(n,Date.now())?A.jsxs("div",{className:"mt-6 flex flex-col items-center gap-2 rounded-3xl border border-line bg-paper-card/80 px-6 py-8 text-center",children:[A.jsx("div",{className:"grid h-12 w-12 place-items-center rounded-full bg-brand/10 text-brand",children:A.jsx(Mv,{})}),A.jsx("p",{className:"text-base font-bold text-ink",children:q("archivedTitle")}),A.jsx("p",{className:"max-w-xs text-sm text-ink-muted",children:q("archivedBody")})]}):A.jsx(EL,{event:n,uid:i,photos:u})]}),n.isActive?A.jsx(_L,{event:n,uid:i,nickname:d,shots:o,onShotsChange:l}):A.jsx("div",{className:"fixed inset-x-0 bottom-0 bg-paper/90 py-4 text-center text-sm text-ink-muted backdrop-blur",children:q("ended")}),P&&A.jsx(PL,{eventId:n.id,uid:i,nickname:d,onClose:()=>x(!1),onSaved:()=>T(!0)}),w&&A.jsx(bL,{eventId:n.id,uid:i,nickname:d,onClose:()=>k(!1),onChanged:M})]})}function Kh({children:t}){return A.jsx("div",{className:"flex min-h-full flex-col items-center justify-center gap-4 px-6 text-center",children:t})}function jL(){return A.jsx("div",{className:"h-9 w-9 animate-spin rounded-full border-2 border-line border-t-brand"})}function yo({small:t}){return A.jsxs("div",{className:"flex items-center justify-center gap-2",children:[A.jsx("img",{src:"/app/guestmark.png",alt:"",className:t?"h-7 w-7 rounded-lg":"h-9 w-9 rounded-lg shadow-sm"}),A.jsxs("span",{className:`font-serif font-semibold tracking-tight ${t?"text-lg":"text-2xl"}`,children:["Guest",A.jsx("span",{className:"text-brand",children:"Cam"})]})]})}function BL(){return A.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A.jsx("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),A.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}function Mv(){return A.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[A.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),A.jsx("circle",{cx:"9",cy:"9",r:"2"}),A.jsx("path",{d:"m21 15-3.5-3.5L9 20"})]})}XE(document.getElementById("root")).render(A.jsx(X.StrictMode,{children:A.jsx(FL,{})}));
