(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var th={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function Dy(){if(M_)return wo;M_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return wo.Fragment=t,wo.jsx=n,wo.jsxs=n,wo}var E_;function Uy(){return E_||(E_=1,th.exports=Dy()),th.exports}var Sn=Uy(),eh={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function Ly(){if(T_)return he;T_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(N,J,xt){this.props=N,this.context=J,this.refs=A,this.updater=xt||y}S.prototype.isReactComponent={},S.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=S.prototype;function P(N,J,xt){this.props=N,this.context=J,this.refs=A,this.updater=xt||y}var D=P.prototype=new v;D.constructor=P,E(D,S.prototype),D.isPureReactComponent=!0;var C=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function I(N,J,xt,yt,Q,pt){return xt=pt.ref,{$$typeof:r,type:N,key:J,ref:xt!==void 0?xt:null,props:pt}}function X(N,J){return I(N.type,J,void 0,void 0,void 0,N.props)}function L(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function w(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xt){return J[xt]})}var H=/\/+/g;function ct(N,J){return typeof N=="object"&&N!==null&&N.key!=null?w(""+N.key):J.toString(36)}function rt(){}function gt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(rt,rt):(N.status="pending",N.then(function(J){N.status==="pending"&&(N.status="fulfilled",N.value=J)},function(J){N.status==="pending"&&(N.status="rejected",N.reason=J)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ut(N,J,xt,yt,Q){var pt=typeof N;(pt==="undefined"||pt==="boolean")&&(N=null);var Et=!1;if(N===null)Et=!0;else switch(pt){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(N.$$typeof){case r:case t:Et=!0;break;case g:return Et=N._init,ut(Et(N._payload),J,xt,yt,Q)}}if(Et)return Q=Q(N),Et=yt===""?"."+ct(N,0):yt,C(Q)?(xt="",Et!=null&&(xt=Et.replace(H,"$&/")+"/"),ut(Q,J,xt,"",function(ae){return ae})):Q!=null&&(L(Q)&&(Q=X(Q,xt+(Q.key==null||N&&N.key===Q.key?"":(""+Q.key).replace(H,"$&/")+"/")+Et)),J.push(Q)),1;Et=0;var Dt=yt===""?".":yt+":";if(C(N))for(var Nt=0;Nt<N.length;Nt++)yt=N[Nt],pt=Dt+ct(yt,Nt),Et+=ut(yt,J,xt,pt,Q);else if(Nt=x(N),typeof Nt=="function")for(N=Nt.call(N),Nt=0;!(yt=N.next()).done;)yt=yt.value,pt=Dt+ct(yt,Nt++),Et+=ut(yt,J,xt,pt,Q);else if(pt==="object"){if(typeof N.then=="function")return ut(gt(N),J,xt,yt,Q);throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Et}function z(N,J,xt){if(N==null)return N;var yt=[],Q=0;return ut(N,yt,"","",function(pt){return J.call(xt,pt,Q++)}),yt}function q(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(xt){(N._status===0||N._status===-1)&&(N._status=1,N._result=xt)},function(xt){(N._status===0||N._status===-1)&&(N._status=2,N._result=xt)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var Z=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Mt(){}return he.Children={map:z,forEach:function(N,J,xt){z(N,function(){J.apply(this,arguments)},xt)},count:function(N){var J=0;return z(N,function(){J++}),J},toArray:function(N){return z(N,function(J){return J})||[]},only:function(N){if(!L(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},he.Component=S,he.Fragment=n,he.Profiler=l,he.PureComponent=P,he.StrictMode=s,he.Suspense=p,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,he.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},he.cache=function(N){return function(){return N.apply(null,arguments)}},he.cloneElement=function(N,J,xt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var yt=E({},N.props),Q=N.key,pt=void 0;if(J!=null)for(Et in J.ref!==void 0&&(pt=void 0),J.key!==void 0&&(Q=""+J.key),J)!G.call(J,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&J.ref===void 0||(yt[Et]=J[Et]);var Et=arguments.length-2;if(Et===1)yt.children=xt;else if(1<Et){for(var Dt=Array(Et),Nt=0;Nt<Et;Nt++)Dt[Nt]=arguments[Nt+2];yt.children=Dt}return I(N.type,Q,void 0,void 0,pt,yt)},he.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},he.createElement=function(N,J,xt){var yt,Q={},pt=null;if(J!=null)for(yt in J.key!==void 0&&(pt=""+J.key),J)G.call(J,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Q[yt]=J[yt]);var Et=arguments.length-2;if(Et===1)Q.children=xt;else if(1<Et){for(var Dt=Array(Et),Nt=0;Nt<Et;Nt++)Dt[Nt]=arguments[Nt+2];Q.children=Dt}if(N&&N.defaultProps)for(yt in Et=N.defaultProps,Et)Q[yt]===void 0&&(Q[yt]=Et[yt]);return I(N,pt,void 0,void 0,null,Q)},he.createRef=function(){return{current:null}},he.forwardRef=function(N){return{$$typeof:h,render:N}},he.isValidElement=L,he.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:q}},he.memo=function(N,J){return{$$typeof:m,type:N,compare:J===void 0?null:J}},he.startTransition=function(N){var J=F.T,xt={};F.T=xt;try{var yt=N(),Q=F.S;Q!==null&&Q(xt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(Mt,Z)}catch(pt){Z(pt)}finally{F.T=J}},he.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},he.use=function(N){return F.H.use(N)},he.useActionState=function(N,J,xt){return F.H.useActionState(N,J,xt)},he.useCallback=function(N,J){return F.H.useCallback(N,J)},he.useContext=function(N){return F.H.useContext(N)},he.useDebugValue=function(){},he.useDeferredValue=function(N,J){return F.H.useDeferredValue(N,J)},he.useEffect=function(N,J,xt){var yt=F.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(N,J)},he.useId=function(){return F.H.useId()},he.useImperativeHandle=function(N,J,xt){return F.H.useImperativeHandle(N,J,xt)},he.useInsertionEffect=function(N,J){return F.H.useInsertionEffect(N,J)},he.useLayoutEffect=function(N,J){return F.H.useLayoutEffect(N,J)},he.useMemo=function(N,J){return F.H.useMemo(N,J)},he.useOptimistic=function(N,J){return F.H.useOptimistic(N,J)},he.useReducer=function(N,J,xt){return F.H.useReducer(N,J,xt)},he.useRef=function(N){return F.H.useRef(N)},he.useState=function(N){return F.H.useState(N)},he.useSyncExternalStore=function(N,J,xt){return F.H.useSyncExternalStore(N,J,xt)},he.useTransition=function(){return F.H.useTransition()},he.version="19.1.0",he}var b_;function Nd(){return b_||(b_=1,eh.exports=Ly()),eh.exports}var Vn=Nd(),nh={exports:{}},Do={},ih={exports:{}},ah={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function Ny(){return A_||(A_=1,function(r){function t(z,q){var Z=z.length;z.push(q);t:for(;0<Z;){var Mt=Z-1>>>1,N=z[Mt];if(0<l(N,q))z[Mt]=q,z[Z]=N,Z=Mt;else break t}}function n(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var q=z[0],Z=z.pop();if(Z!==q){z[0]=Z;t:for(var Mt=0,N=z.length,J=N>>>1;Mt<J;){var xt=2*(Mt+1)-1,yt=z[xt],Q=xt+1,pt=z[Q];if(0>l(yt,Z))Q<N&&0>l(pt,yt)?(z[Mt]=pt,z[Q]=Z,Mt=Q):(z[Mt]=yt,z[xt]=Z,Mt=xt);else if(Q<N&&0>l(pt,Z))z[Mt]=pt,z[Q]=Z,Mt=Q;else break t}}return q}function l(z,q){var Z=z.sortIndex-q.sortIndex;return Z!==0?Z:z.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,_=null,x=3,y=!1,E=!1,A=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var q=n(m);q!==null;){if(q.callback===null)s(m);else if(q.startTime<=z)s(m),q.sortIndex=q.expirationTime,t(p,q);else break;q=n(m)}}function F(z){if(A=!1,C(z),!E)if(n(p)!==null)E=!0,G||(G=!0,ct());else{var q=n(m);q!==null&&ut(F,q.startTime-z)}}var G=!1,I=-1,X=5,L=-1;function w(){return S?!0:!(r.unstable_now()-L<X)}function H(){if(S=!1,G){var z=r.unstable_now();L=z;var q=!0;try{t:{E=!1,A&&(A=!1,P(I),I=-1),y=!0;var Z=x;try{e:{for(C(z),_=n(p);_!==null&&!(_.expirationTime>z&&w());){var Mt=_.callback;if(typeof Mt=="function"){_.callback=null,x=_.priorityLevel;var N=Mt(_.expirationTime<=z);if(z=r.unstable_now(),typeof N=="function"){_.callback=N,C(z),q=!0;break e}_===n(p)&&s(p),C(z)}else s(p);_=n(p)}if(_!==null)q=!0;else{var J=n(m);J!==null&&ut(F,J.startTime-z),q=!1}}break t}finally{_=null,x=Z,y=!1}q=void 0}}finally{q?ct():G=!1}}}var ct;if(typeof D=="function")ct=function(){D(H)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,gt=rt.port2;rt.port1.onmessage=H,ct=function(){gt.postMessage(null)}}else ct=function(){v(H,0)};function ut(z,q){I=v(function(){z(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(z){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var Z=x;x=q;try{return z()}finally{x=Z}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=x;x=z;try{return q()}finally{x=Z}},r.unstable_scheduleCallback=function(z,q,Z){var Mt=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Mt+Z:Mt):Z=Mt,z){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Z+N,z={id:g++,callback:q,priorityLevel:z,startTime:Z,expirationTime:N,sortIndex:-1},Z>Mt?(z.sortIndex=Z,t(m,z),n(p)===null&&z===n(m)&&(A?(P(I),I=-1):A=!0,ut(F,Z-Mt))):(z.sortIndex=N,t(p,z),E||y||(E=!0,G||(G=!0,ct()))),z},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(z){var q=x;return function(){var Z=x;x=q;try{return z.apply(this,arguments)}finally{x=Z}}}}(ah)),ah}var R_;function Oy(){return R_||(R_=1,ih.exports=Ny()),ih.exports}var sh={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function Py(){if(C_)return Dn;C_=1;var r=Nd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},Dn.flushSync=function(p){var m=f.T,g=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=g,s.d.f()}},Dn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Dn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Dn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):g==="script"&&s.d.X(p,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Dn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Dn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Dn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Dn.requestFormReset=function(p){s.d.r(p)},Dn.unstable_batchedUpdates=function(p,m){return p(m)},Dn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Dn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Dn.version="19.1.0",Dn}var w_;function zy(){if(w_)return sh.exports;w_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),sh.exports=Py(),sh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function By(){if(D_)return Do;D_=1;var r=Oy(),t=Nd(),n=zy();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return h(u),e;if(d===o)return h(u),i;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var M=!1,b=u.child;b;){if(b===a){M=!0,a=u,o=d;break}if(b===o){M=!0,o=u,a=d;break}b=b.sibling}if(!M){for(b=d.child;b;){if(b===a){M=!0,a=d,o=u;break}if(b===o){M=!0,o=d,a=u;break}b=b.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function m(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=m(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),D=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case F:return"Suspense";case G:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case D:return(e.displayName||"Context")+".Provider";case P:return(e._context.displayName||"Context")+".Consumer";case C:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return i=e.displayName||null,i!==null?i:gt(e.type)||"Memo";case X:i=e._payload,e=e._init;try{return gt(e(i))}catch{}}return null}var ut=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Mt=[],N=-1;function J(e){return{current:e}}function xt(e){0>N||(e.current=Mt[N],Mt[N]=null,N--)}function yt(e,i){N++,Mt[N]=e.current,e.current=i}var Q=J(null),pt=J(null),Et=J(null),Dt=J(null);function Nt(e,i){switch(yt(Et,i),yt(pt,e),yt(Q,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Kg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Kg(i),e=Qg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xt(Q),yt(Q,e)}function ae(){xt(Q),xt(pt),xt(Et)}function Jt(e){e.memoizedState!==null&&yt(Dt,e);var i=Q.current,a=Qg(i,e.type);i!==a&&(yt(pt,e),yt(Q,a))}function De(e){pt.current===e&&(xt(Q),xt(pt)),Dt.current===e&&(xt(Dt),To._currentValue=Z)}var ye=Object.prototype.hasOwnProperty,ue=r.unstable_scheduleCallback,U=r.unstable_cancelCallback,Ut=r.unstable_shouldYield,bt=r.unstable_requestPaint,wt=r.unstable_now,mt=r.unstable_getCurrentPriorityLevel,Wt=r.unstable_ImmediatePriority,Rt=r.unstable_UserBlockingPriority,Gt=r.unstable_NormalPriority,fe=r.unstable_LowPriority,O=r.unstable_IdlePriority,T=r.log,tt=r.unstable_setDisableYieldValue,ot=null,ht=null;function lt(e){if(typeof T=="function"&&tt(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(ot,e)}catch{}}var Ft=Math.clz32?Math.clz32:jt,Pt=Math.log,Zt=Math.LN2;function jt(e){return e>>>=0,e===0?32:31-(Pt(e)/Zt|0)|0}var St=256,Vt=4194304;function $t(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function te(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~d,o!==0?u=$t(o):(M&=b,M!==0?u=$t(M):a||(a=b&~e,a!==0&&(u=$t(a))))):(b=o&~d,b!==0?u=$t(b):M!==0?u=$t(M):a||(a=o&~e,a!==0&&(u=$t(a)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:u}function Ot(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ce(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function Bt(){var e=Vt;return Vt<<=1,(Vt&62914560)===0&&(Vt=4194304),e}function Tt(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function kt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ct(e,i,a,o,u,d){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,B=e.expirationTimes,et=e.hiddenUpdates;for(a=M&~a;0<a;){var ft=31-Ft(a),_t=1<<ft;b[ft]=0,B[ft]=-1;var nt=et[ft];if(nt!==null)for(et[ft]=null,ft=0;ft<nt.length;ft++){var it=nt[ft];it!==null&&(it.lane&=-536870913)}a&=~_t}o!==0&&vt(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~i))}function vt(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Ft(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function qt(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-Ft(a),u=1<<o;u&i|e[o]&i&&(e[o]|=i),a&=~u}}function le(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ne(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ae(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:g_(e.type))}function Wn(e,i){var a=q.p;try{return q.p=e,i()}finally{q.p=a}}var pn=Math.random().toString(36).slice(2),on="__reactFiber$"+pn,Mn="__reactProps$"+pn,Pn="__reactContainer$"+pn,Za="__reactEvents$"+pn,Qo="__reactListeners$"+pn,Jo="__reactHandles$"+pn,ja="__reactResources$"+pn,ua="__reactMarker$"+pn;function fa(e){delete e[on],delete e[Mn],delete e[Za],delete e[Qo],delete e[Jo]}function zi(e){var i=e[on];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Pn]||a[on]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=e_(e);e!==null;){if(a=e[on])return a;e=e_(e)}return i}e=a,a=e.parentNode}return null}function Bi(e){if(e=e[on]||e[Pn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Ka(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function ha(e){var i=e[ja];return i||(i=e[ja]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function nn(e){e[ua]=!0}var $o=new Set,tl={};function Ii(e,i){R(e,i),R(e+"Capture",i)}function R(e,i){for(tl[e]=i,e=0;e<i.length;e++)$o.add(i[e])}var j=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},st={};function K(e){return ye.call(st,e)?!0:ye.call(at,e)?!1:j.test(e)?st[e]=!0:(at[e]=!0,!1)}function At(e,i,a){if(K(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function zt(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Ht(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}var Xt,re;function ne(e){if(Xt===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Xt=i&&i[1]||"",re=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xt+e+re}var Kt=!1;function pe(e,i){if(!e||Kt)return"";Kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(it){var nt=it}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(it){nt=it}e.call(_t.prototype)}}else{try{throw Error()}catch(it){nt=it}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],b=d[1];if(M&&b){var B=M.split(`
`),et=b.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===et.length)for(o=B.length-1,u=et.length-1;1<=o&&0<=u&&B[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==et[u]){var ft=`
`+B[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=u);break}}}finally{Kt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ne(a):""}function Ue(e){switch(e.tag){case 26:case 27:case 5:return ne(e.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return pe(e.type,!1);case 11:return pe(e.type.render,!1);case 1:return pe(e.type,!0);case 31:return ne("Activity");default:return""}}function qe(e){try{var i="";do i+=Ue(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ve(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Le(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ee(e){var i=Le(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,d.call(this,M)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ze(e){e._valueTracker||(e._valueTracker=ee(e))}function Te(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=Le(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var da=/[\n"\\]/g;function Xe(e){return e.replace(da,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Fi(e,i,a,o,u,d,M,b){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),i!=null?M==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ve(i)):e.value!==""+ve(i)&&(e.value=""+ve(i)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),i!=null?Cn(e,M,ve(i)):a!=null?Cn(e,M,ve(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+ve(b):e.removeAttribute("name")}function Ve(e,i,a,o,u,d,M,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+ve(a):"",i=i!=null?""+ve(i):a,b||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Cn(e,i,a){i==="number"&&mn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ln(e,i,a,o){if(e=e.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=i.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ve(a),i=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function gn(e,i,a){if(i!=null&&(i=""+ve(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+ve(a):""}function En(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(ut(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=ve(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Si(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var Hi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kd(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||Hi.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Qd(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&a[u]!==o&&Kd(e,u,o)}else for(var d in i)i.hasOwnProperty(d)&&Kd(e,d,i[d])}function Jc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var C0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),w0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function el(e){return w0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var $c=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,Ds=null;function Jd(e){var i=Bi(e);if(i&&(e=i.stateNode)){var a=e[Mn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Fi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xe(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var u=o[Mn]||null;if(!u)throw Error(s(90));Fi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&Te(o)}break t;case"textarea":gn(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&ln(e,!!a.multiple,i,!1)}}}var eu=!1;function $d(e,i,a){if(eu)return e(i,a);eu=!0;try{var o=e(i);return o}finally{if(eu=!1,(ws!==null||Ds!==null)&&(Hl(),ws&&(i=ws,e=Ds,Ds=ws=null,Jd(i),e)))for(i=0;i<e.length;i++)Jd(e[i])}}function zr(e,i){var a=e.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(Gi)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){nu=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{nu=!1}var pa=null,iu=null,nl=null;function tp(){if(nl)return nl;var e,i=iu,a=i.length,o,u="value"in pa?pa.value:pa.textContent,d=u.length;for(e=0;e<a&&i[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&i[a-o]===u[d-o];o++);return nl=u.slice(e,1<o?1-o:void 0)}function il(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function al(){return!0}function ep(){return!1}function zn(e){function i(a,o,u,d,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?al:ep,this.isPropagationStopped=ep,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),i}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=zn(Qa),Ir=g({},Qa,{view:0,detail:0}),D0=zn(Ir),au,su,Fr,rl=g({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(au=e.screenX-Fr.screenX,su=e.screenY-Fr.screenY):su=au=0,Fr=e),au)},movementY:function(e){return"movementY"in e?e.movementY:su}}),np=zn(rl),U0=g({},rl,{dataTransfer:0}),L0=zn(U0),N0=g({},Ir,{relatedTarget:0}),ru=zn(N0),O0=g({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),P0=zn(O0),z0=g({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),B0=zn(z0),I0=g({},Qa,{data:0}),ip=zn(I0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V0(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=G0[e])?!!i[e]:!1}function ou(){return V0}var k0=g({},Ir,{key:function(e){if(e.key){var i=F0[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?H0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),X0=zn(k0),W0=g({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ap=zn(W0),q0=g({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),Y0=zn(q0),Z0=g({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),j0=zn(Z0),K0=g({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Q0=zn(K0),J0=g({},Qa,{newState:0,oldState:0}),$0=zn(J0),tx=[9,13,27,32],lu=Gi&&"CompositionEvent"in window,Hr=null;Gi&&"documentMode"in document&&(Hr=document.documentMode);var ex=Gi&&"TextEvent"in window&&!Hr,sp=Gi&&(!lu||Hr&&8<Hr&&11>=Hr),rp=" ",op=!1;function lp(e,i){switch(e){case"keyup":return tx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Us=!1;function nx(e,i){switch(e){case"compositionend":return cp(i);case"keypress":return i.which!==32?null:(op=!0,rp);case"textInput":return e=i.data,e===rp&&op?null:e;default:return null}}function ix(e,i){if(Us)return e==="compositionend"||!lu&&lp(e,i)?(e=tp(),nl=iu=pa=null,Us=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return sp&&i.locale!=="ko"?null:i.data;default:return null}}var ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!ax[e.type]:i==="textarea"}function fp(e,i,a,o){ws?Ds?Ds.push(o):Ds=[o]:ws=o,i=ql(i,"onChange"),0<i.length&&(a=new sl("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var Gr=null,Vr=null;function sx(e){Wg(e,0)}function ol(e){var i=Ka(e);if(Te(i))return e}function hp(e,i){if(e==="change")return i}var dp=!1;if(Gi){var cu;if(Gi){var uu="oninput"in document;if(!uu){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),uu=typeof pp.oninput=="function"}cu=uu}else cu=!1;dp=cu&&(!document.documentMode||9<document.documentMode)}function mp(){Gr&&(Gr.detachEvent("onpropertychange",gp),Vr=Gr=null)}function gp(e){if(e.propertyName==="value"&&ol(Vr)){var i=[];fp(i,Vr,e,tu(e)),$d(sx,i)}}function rx(e,i,a){e==="focusin"?(mp(),Gr=i,Vr=a,Gr.attachEvent("onpropertychange",gp)):e==="focusout"&&mp()}function ox(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(Vr)}function lx(e,i){if(e==="click")return ol(i)}function cx(e,i){if(e==="input"||e==="change")return ol(i)}function ux(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var qn=typeof Object.is=="function"?Object.is:ux;function kr(e,i){if(qn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ye.call(i,u)||!qn(e[u],i[u]))return!1}return!0}function _p(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vp(e,i){var a=_p(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=_p(a)}}function xp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?xp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function yp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=mn(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=mn(e.document)}return i}function fu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var fx=Gi&&"documentMode"in document&&11>=document.documentMode,Ls=null,hu=null,Xr=null,du=!1;function Sp(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;du||Ls==null||Ls!==mn(o)||(o=Ls,"selectionStart"in o&&fu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Xr&&kr(Xr,o)||(Xr=o,o=ql(hu,"onSelect"),0<o.length&&(i=new sl("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=Ls)))}function Ja(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var Ns={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},pu={},Mp={};Gi&&(Mp=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function $a(e){if(pu[e])return pu[e];if(!Ns[e])return e;var i=Ns[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Mp)return pu[e]=i[a];return e}var Ep=$a("animationend"),Tp=$a("animationiteration"),bp=$a("animationstart"),hx=$a("transitionrun"),dx=$a("transitionstart"),px=$a("transitioncancel"),Ap=$a("transitionend"),Rp=new Map,mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mu.push("scrollEnd");function hi(e,i){Rp.set(e,i),Ii(i,[e])}var Cp=new WeakMap;function ni(e,i){if(typeof e=="object"&&e!==null){var a=Cp.get(e);return a!==void 0?a:(i={value:e,source:i,stack:qe(i)},Cp.set(e,i),i)}return{value:e,source:i,stack:qe(i)}}var ii=[],Os=0,gu=0;function ll(){for(var e=Os,i=gu=Os=0;i<e;){var a=ii[i];ii[i++]=null;var o=ii[i];ii[i++]=null;var u=ii[i];ii[i++]=null;var d=ii[i];if(ii[i++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&wp(a,u,d)}}function cl(e,i,a,o){ii[Os++]=e,ii[Os++]=i,ii[Os++]=a,ii[Os++]=o,gu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function _u(e,i,a,o){return cl(e,i,a,o),ul(e)}function Ps(e,i){return cl(e,null,null,i),ul(e)}function wp(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&i!==null&&(u=31-Ft(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=a|536870912),d):null}function ul(e){if(50<go)throw go=0,Tf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var zs={};function mx(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,i,a,o){return new mx(e,i,a,o)}function vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,i){var a=e.alternate;return a===null?(a=Yn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Dp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function fl(e,i,a,o,u,d){var M=0;if(o=e,typeof e=="function")vu(e)&&(M=1);else if(typeof e=="string")M=_y(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=Yn(31,a,i,u),e.elementType=L,e.lanes=d,e;case E:return ts(a.children,u,d,i);case A:M=8,u|=24;break;case S:return e=Yn(12,a,i,u|2),e.elementType=S,e.lanes=d,e;case F:return e=Yn(13,a,i,u),e.elementType=F,e.lanes=d,e;case G:return e=Yn(19,a,i,u),e.elementType=G,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case D:M=10;break t;case P:M=9;break t;case C:M=11;break t;case I:M=14;break t;case X:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=Yn(M,a,i,u),i.elementType=e,i.type=o,i.lanes=d,i}function ts(e,i,a,o){return e=Yn(7,e,o,i),e.lanes=a,e}function xu(e,i,a){return e=Yn(6,e,null,i),e.lanes=a,e}function yu(e,i,a){return i=Yn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Bs=[],Is=0,hl=null,dl=0,ai=[],si=0,es=null,ki=1,Xi="";function ns(e,i){Bs[Is++]=dl,Bs[Is++]=hl,hl=e,dl=i}function Up(e,i,a){ai[si++]=ki,ai[si++]=Xi,ai[si++]=es,es=e;var o=ki;e=Xi;var u=32-Ft(o)-1;o&=~(1<<u),a+=1;var d=32-Ft(i)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,ki=1<<32-Ft(i)+u|a<<u|o,Xi=d+e}else ki=1<<d|a<<u|o,Xi=e}function Su(e){e.return!==null&&(ns(e,1),Up(e,1,0))}function Mu(e){for(;e===hl;)hl=Bs[--Is],Bs[Is]=null,dl=Bs[--Is],Bs[Is]=null;for(;e===es;)es=ai[--si],ai[si]=null,Xi=ai[--si],ai[si]=null,ki=ai[--si],ai[si]=null}var Nn=null,Qe=null,we=!1,is=null,Mi=!1,Eu=Error(s(519));function as(e){var i=Error(s(418,""));throw Yr(ni(i,e)),Eu}function Lp(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[on]=e,i[Mn]=o,a){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(a=0;a<vo.length;a++)Me(vo[a],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),Ve(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ze(i);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),En(i,o.value,o.defaultValue,o.children),ze(i)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||jg(i.textContent,a)?(o.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),o.onScroll!=null&&Me("scroll",i),o.onScrollEnd!=null&&Me("scrollend",i),o.onClick!=null&&(i.onclick=Yl),i=!0):i=!1,i||as(e)}function Np(e){for(Nn=e.return;Nn;)switch(Nn.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Nn=Nn.return}}function Wr(e){if(e!==Nn)return!1;if(!we)return Np(e),we=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Hf(e.type,e.memoizedProps)),a=!a),a&&Qe&&as(e),Np(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){Qe=pi(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}Qe=null}}else i===27?(i=Qe,Da(e.type)?(e=Xf,Xf=null,Qe=e):Qe=i):Qe=Nn?pi(e.stateNode.nextSibling):null;return!0}function qr(){Qe=Nn=null,we=!1}function Op(){var e=is;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),is=null),e}function Yr(e){is===null?is=[e]:is.push(e)}var Tu=J(null),ss=null,Wi=null;function ma(e,i,a){yt(Tu,i._currentValue),i._currentValue=a}function qi(e){e._currentValue=Tu.current,xt(Tu)}function bu(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function Au(e,i,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=u;for(var B=0;B<i.length;B++)if(b.context===i[B]){d.lanes|=a,b=d.alternate,b!==null&&(b.lanes|=a),bu(d.return,a,e),o||(M=null);break t}d=b.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),bu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Zr(e,i,a,o){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var b=u.type;qn(u.pendingProps.value,M.value)||(e!==null?e.push(b):e=[b])}}else if(u===Dt.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}u=u.return}e!==null&&Au(i,e,a,o),i.flags|=262144}function pl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rs(e){ss=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Pp(ss,e)}function ml(e,i){return ss===null&&rs(e),Pp(e,i)}function Pp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Wi===null){if(e===null)throw Error(s(308));Wi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Wi=Wi.next=i;return a}var gx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},_x=r.unstable_scheduleCallback,vx=r.unstable_NormalPriority,cn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ru(){return{controller:new gx,data:new Map,refCount:0}}function jr(e){e.refCount--,e.refCount===0&&_x(vx,function(){e.controller.abort()})}var Kr=null,Cu=0,Fs=0,Hs=null;function xx(e,i){if(Kr===null){var a=Kr=[];Cu=0,Fs=Uf(),Hs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Cu++,i.then(zp,zp),i}function zp(){if(--Cu===0&&Kr!==null){Hs!==null&&(Hs.status="fulfilled");var e=Kr;Kr=null,Fs=0,Hs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function yx(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<a.length;u++)(0,a[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Bp=z.S;z.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&xx(e,i),Bp!==null&&Bp(e,i)};var os=J(null);function wu(){var e=os.current;return e!==null?e:We.pooledCache}function gl(e,i){i===null?yt(os,os.current):yt(os,i.pool)}function Ip(){var e=wu();return e===null?null:{parent:cn._currentValue,pool:e}}var Qr=Error(s(460)),Fp=Error(s(474)),_l=Error(s(542)),Du={then:function(){}};function Hp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vl(){}function Gp(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(vl,vl),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,kp(e),e;default:if(typeof i.status=="string")i.then(vl,vl);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,kp(e),e}throw Jr=i,Qr}}var Jr=null;function Vp(){if(Jr===null)throw Error(s(459));var e=Jr;return Jr=null,e}function kp(e){if(e===Qr||e===_l)throw Error(s(483))}var ga=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lu(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Oe&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=ul(e),wp(e,null,a),i}return cl(e,o,i,a),ul(e)}function $r(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,qt(e,a)}}function Nu(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?u=d=i:d=d.next=i}else u=d=i;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var Ou=!1;function to(){if(Ou){var e=Hs;if(e!==null)throw e}}function eo(e,i,a,o){Ou=!1;var u=e.updateQueue;ga=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var B=b,et=B.next;B.next=null,M===null?d=et:M.next=et,M=B;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==M&&(b===null?ft.firstBaseUpdate=et:b.next=et,ft.lastBaseUpdate=B))}if(d!==null){var _t=u.baseState;M=0,ft=et=B=null,b=d;do{var nt=b.lane&-536870913,it=nt!==b.lane;if(it?(be&nt)===nt:(o&nt)===nt){nt!==0&&nt===Fs&&(Ou=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var oe=e,ie=b;nt=i;var Fe=a;switch(ie.tag){case 1:if(oe=ie.payload,typeof oe=="function"){_t=oe.call(Fe,_t,nt);break t}_t=oe;break t;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ie.payload,nt=typeof oe=="function"?oe.call(Fe,_t,nt):oe,nt==null)break t;_t=g({},_t,nt);break t;case 2:ga=!0}}nt=b.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=u.callbacks,it===null?u.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?(et=ft=it,B=_t):ft=ft.next=it,M|=nt;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;it=b,b=it.next,it.next=null,u.lastBaseUpdate=it,u.shared.pending=null}}while(!0);ft===null&&(B=_t),u.baseState=B,u.firstBaseUpdate=et,u.lastBaseUpdate=ft,d===null&&(u.shared.lanes=0),Aa|=M,e.lanes=M,e.memoizedState=_t}}function Xp(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Wp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Xp(a[e],i)}var Gs=J(null),xl=J(0);function qp(e,i){e=$i,yt(xl,e),yt(Gs,i),$i=e|i.baseLanes}function Pu(){yt(xl,$i),yt(Gs,Gs.current)}function zu(){$i=xl.current,xt(Gs),xt(xl)}var xa=0,ge=null,Be=null,an=null,yl=!1,Vs=!1,ls=!1,Sl=0,no=0,ks=null,Sx=0;function tn(){throw Error(s(321))}function Bu(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!qn(e[a],i[a]))return!1;return!0}function Iu(e,i,a,o,u,d){return xa=d,ge=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=e===null||e.memoizedState===null?wm:Dm,ls=!1,d=a(o,u),ls=!1,Vs&&(d=Zp(i,a,o,u)),Yp(e),d}function Yp(e){z.H=Rl;var i=Be!==null&&Be.next!==null;if(xa=0,an=Be=ge=null,yl=!1,no=0,ks=null,i)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&pl(e)&&(_n=!0))}function Zp(e,i,a,o){ge=e;var u=0;do{if(Vs&&(ks=null),no=0,Vs=!1,25<=u)throw Error(s(301));if(u+=1,an=Be=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=Cx,d=i(a,o)}while(Vs);return d}function Mx(){var e=z.H,i=e.useState()[0];return i=typeof i.then=="function"?io(i):i,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ge.flags|=1024),i}function Fu(){var e=Sl!==0;return Sl=0,e}function Hu(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Gu(e){if(yl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}yl=!1}xa=0,an=Be=ge=null,Vs=!1,no=Sl=0,ks=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?ge.memoizedState=an=e:an=an.next=e,an}function sn(){if(Be===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var i=an===null?ge.memoizedState:an.next;if(i!==null)an=i,Be=e;else{if(e===null)throw ge.alternate===null?Error(s(467)):Error(s(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},an===null?ge.memoizedState=an=e:an=an.next=e}return an}function Vu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function io(e){var i=no;return no+=1,ks===null&&(ks=[]),e=Gp(ks,e,i),i=ge,(an===null?i.memoizedState:an.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?wm:Dm),e}function Ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return io(e);if(e.$$typeof===D)return wn(e)}throw Error(s(438,String(e)))}function ku(e){var i=null,a=ge.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Vu(),ge.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=w;return i.index++,a}function Yi(e,i){return typeof i=="function"?i(e):i}function El(e){var i=sn();return Xu(i,Be,e)}function Xu(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}i.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var b=M=null,B=null,et=i,ft=!1;do{var _t=et.lane&-536870913;if(_t!==et.lane?(be&_t)===_t:(xa&_t)===_t){var nt=et.revertLane;if(nt===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),_t===Fs&&(ft=!0);else if((xa&nt)===nt){et=et.next,nt===Fs&&(ft=!0);continue}else _t={lane:0,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(b=B=_t,M=d):B=B.next=_t,ge.lanes|=nt,Aa|=nt;_t=et.action,ls&&a(d,_t),d=et.hasEagerState?et.eagerState:a(d,_t)}else nt={lane:_t,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(b=B=nt,M=d):B=B.next=nt,ge.lanes|=_t,Aa|=_t;et=et.next}while(et!==null&&et!==i);if(B===null?M=d:B.next=b,!qn(d,e.memoizedState)&&(_n=!0,ft&&(a=Hs,a!==null)))throw a;e.memoizedState=d,e.baseState=M,e.baseQueue=B,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Wu(e){var i=sn(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=i.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);qn(d,i.memoizedState)||(_n=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,o]}function jp(e,i,a){var o=ge,u=sn(),d=we;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var M=!qn((Be||u).memoizedState,a);M&&(u.memoizedState=a,_n=!0),u=u.queue;var b=Jp.bind(null,o,u,e);if(ao(2048,8,b,[e]),u.getSnapshot!==i||M||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,Xs(9,Tl(),Qp.bind(null,o,u,a,i),null),We===null)throw Error(s(349));d||(xa&124)!==0||Kp(o,i,a)}return a}function Kp(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=ge.updateQueue,i===null?(i=Vu(),ge.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Qp(e,i,a,o){i.value=a,i.getSnapshot=o,$p(i)&&tm(e)}function Jp(e,i,a){return a(function(){$p(i)&&tm(e)})}function $p(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!qn(e,a)}catch{return!0}}function tm(e){var i=Ps(e,2);i!==null&&Jn(i,e,2)}function qu(e){var i=Bn();if(typeof e=="function"){var a=e;if(e=a(),ls){lt(!0);try{a()}finally{lt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:e},i}function em(e,i,a,o){return e.baseState=a,Xu(e,Be,typeof o=="function"?o:Yi)}function Ex(e,i,a,o,u){if(Al(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};z.T!==null?a(!0):d.isTransition=!1,o(d),a=i.pending,a===null?(d.next=i.pending=d,nm(i,d)):(d.next=a.next,i.pending=a.next=d)}}function nm(e,i){var a=i.action,o=i.payload,u=e.state;if(i.isTransition){var d=z.T,M={};z.T=M;try{var b=a(u,o),B=z.S;B!==null&&B(M,b),im(e,i,b)}catch(et){Yu(e,i,et)}finally{z.T=d}}else try{d=a(u,o),im(e,i,d)}catch(et){Yu(e,i,et)}}function im(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){am(e,i,o)},function(o){return Yu(e,i,o)}):am(e,i,a)}function am(e,i,a){i.status="fulfilled",i.value=a,sm(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,nm(e,a)))}function Yu(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,sm(i),i=i.next;while(i!==o)}e.action=null}function sm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function rm(e,i){return i}function om(e,i){if(we){var a=We.formState;if(a!==null){t:{var o=ge;if(we){if(Qe){e:{for(var u=Qe,d=Mi;u.nodeType!==8;){if(!d){u=null;break e}if(u=pi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Qe=pi(u.nextSibling),o=u.data==="F!";break t}}as(o)}o=!1}o&&(i=a[0])}}return a=Bn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rm,lastRenderedState:i},a.queue=o,a=Am.bind(null,ge,o),o.dispatch=a,o=qu(!1),d=Ju.bind(null,ge,!1,o.queue),o=Bn(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,a=Ex.bind(null,ge,u,d,a),u.dispatch=a,o.memoizedState=e,[i,a,!1]}function lm(e){var i=sn();return cm(i,Be,e)}function cm(e,i,a){if(i=Xu(e,i,rm)[0],e=El(Yi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=io(i)}catch(M){throw M===Qr?_l:M}else o=i;i=sn();var u=i.queue,d=u.dispatch;return a!==i.memoizedState&&(ge.flags|=2048,Xs(9,Tl(),Tx.bind(null,u,a),null)),[o,d,e]}function Tx(e,i){e.action=i}function um(e){var i=sn(),a=Be;if(a!==null)return cm(i,a,e);sn(),i=i.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function Xs(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=ge.updateQueue,i===null&&(i=Vu(),ge.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function Tl(){return{destroy:void 0,resource:void 0}}function fm(){return sn().memoizedState}function bl(e,i,a,o){var u=Bn();o=o===void 0?null:o,ge.flags|=e,u.memoizedState=Xs(1|i,Tl(),a,o)}function ao(e,i,a,o){var u=sn();o=o===void 0?null:o;var d=u.memoizedState.inst;Be!==null&&o!==null&&Bu(o,Be.memoizedState.deps)?u.memoizedState=Xs(i,d,a,o):(ge.flags|=e,u.memoizedState=Xs(1|i,d,a,o))}function hm(e,i){bl(8390656,8,e,i)}function dm(e,i){ao(2048,8,e,i)}function pm(e,i){return ao(4,2,e,i)}function mm(e,i){return ao(4,4,e,i)}function gm(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function _m(e,i,a){a=a!=null?a.concat([e]):null,ao(4,4,gm.bind(null,i,e),a)}function Zu(){}function vm(e,i){var a=sn();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&Bu(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function xm(e,i){var a=sn();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&Bu(i,o[1]))return o[0];if(o=e(),ls){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[o,i],o}function ju(e,i,a){return a===void 0||(xa&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=Mg(),ge.lanes|=e,Aa|=e,a)}function ym(e,i,a,o){return qn(a,i)?a:Gs.current!==null?(e=ju(e,a,o),qn(e,i)||(_n=!0),e):(xa&42)===0?(_n=!0,e.memoizedState=a):(e=Mg(),ge.lanes|=e,Aa|=e,i)}function Sm(e,i,a,o,u){var d=q.p;q.p=d!==0&&8>d?d:8;var M=z.T,b={};z.T=b,Ju(e,!1,i,a);try{var B=u(),et=z.S;if(et!==null&&et(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ft=yx(B,o);so(e,i,ft,Qn(e))}else so(e,i,o,Qn(e))}catch(_t){so(e,i,{then:function(){},status:"rejected",reason:_t},Qn())}finally{q.p=d,z.T=M}}function bx(){}function Ku(e,i,a,o){if(e.tag!==5)throw Error(s(476));var u=Mm(e).queue;Sm(e,u,i,Z,a===null?bx:function(){return Em(e),a(o)})}function Mm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:Z},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Em(e){var i=Mm(e).next.queue;so(e,i,{},Qn())}function Qu(){return wn(To)}function Tm(){return sn().memoizedState}function bm(){return sn().memoizedState}function Ax(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=Qn();e=_a(a);var o=va(i,e,a);o!==null&&(Jn(o,i,a),$r(o,i,a)),i={cache:Ru()},e.payload=i;return}i=i.return}}function Rx(e,i,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Al(e)?Rm(i,a):(a=_u(e,i,a,o),a!==null&&(Jn(a,e,o),Cm(a,i,o)))}function Am(e,i,a){var o=Qn();so(e,i,a,o)}function so(e,i,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(e))Rm(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var M=i.lastRenderedState,b=d(M,a);if(u.hasEagerState=!0,u.eagerState=b,qn(b,M))return cl(e,i,u,0),We===null&&ll(),!1}catch{}finally{}if(a=_u(e,i,u,o),a!==null)return Jn(a,e,o),Cm(a,i,o),!0}return!1}function Ju(e,i,a,o){if(o={lane:2,revertLane:Uf(),action:o,hasEagerState:!1,eagerState:null,next:null},Al(e)){if(i)throw Error(s(479))}else i=_u(e,a,o,2),i!==null&&Jn(i,e,2)}function Al(e){var i=e.alternate;return e===ge||i!==null&&i===ge}function Rm(e,i){Vs=yl=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Cm(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,qt(e,a)}}var Rl={readContext:wn,use:Ml,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},wm={readContext:wn,use:Ml,useCallback:function(e,i){return Bn().memoizedState=[e,i===void 0?null:i],e},useContext:wn,useEffect:hm,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,bl(4194308,4,gm.bind(null,i,e),a)},useLayoutEffect:function(e,i){return bl(4194308,4,e,i)},useInsertionEffect:function(e,i){bl(4,2,e,i)},useMemo:function(e,i){var a=Bn();i=i===void 0?null:i;var o=e();if(ls){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=Bn();if(a!==void 0){var u=a(i);if(ls){lt(!0);try{a(i)}finally{lt(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Rx.bind(null,ge,e),[o.memoizedState,e]},useRef:function(e){var i=Bn();return e={current:e},i.memoizedState=e},useState:function(e){e=qu(e);var i=e.queue,a=Am.bind(null,ge,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Zu,useDeferredValue:function(e,i){var a=Bn();return ju(a,e,i)},useTransition:function(){var e=qu(!1);return e=Sm.bind(null,ge,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=ge,u=Bn();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),We===null)throw Error(s(349));(be&124)!==0||Kp(o,i,a)}u.memoizedState=a;var d={value:a,getSnapshot:i};return u.queue=d,hm(Jp.bind(null,o,d,e),[e]),o.flags|=2048,Xs(9,Tl(),Qp.bind(null,o,d,a,i),null),a},useId:function(){var e=Bn(),i=We.identifierPrefix;if(we){var a=Xi,o=ki;a=(o&~(1<<32-Ft(o)-1)).toString(32)+a,i="«"+i+"R"+a,a=Sl++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=Sx++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Qu,useFormState:om,useActionState:om,useOptimistic:function(e){var i=Bn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Ju.bind(null,ge,!0,a),a.dispatch=i,[e,i]},useMemoCache:ku,useCacheRefresh:function(){return Bn().memoizedState=Ax.bind(null,ge)}},Dm={readContext:wn,use:Ml,useCallback:vm,useContext:wn,useEffect:dm,useImperativeHandle:_m,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:El,useRef:fm,useState:function(){return El(Yi)},useDebugValue:Zu,useDeferredValue:function(e,i){var a=sn();return ym(a,Be.memoizedState,e,i)},useTransition:function(){var e=El(Yi)[0],i=sn().memoizedState;return[typeof e=="boolean"?e:io(e),i]},useSyncExternalStore:jp,useId:Tm,useHostTransitionStatus:Qu,useFormState:lm,useActionState:lm,useOptimistic:function(e,i){var a=sn();return em(a,Be,e,i)},useMemoCache:ku,useCacheRefresh:bm},Cx={readContext:wn,use:Ml,useCallback:vm,useContext:wn,useEffect:dm,useImperativeHandle:_m,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:Wu,useRef:fm,useState:function(){return Wu(Yi)},useDebugValue:Zu,useDeferredValue:function(e,i){var a=sn();return Be===null?ju(a,e,i):ym(a,Be.memoizedState,e,i)},useTransition:function(){var e=Wu(Yi)[0],i=sn().memoizedState;return[typeof e=="boolean"?e:io(e),i]},useSyncExternalStore:jp,useId:Tm,useHostTransitionStatus:Qu,useFormState:um,useActionState:um,useOptimistic:function(e,i){var a=sn();return Be!==null?em(a,Be,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ku,useCacheRefresh:bm},Ws=null,ro=0;function Cl(e){var i=ro;return ro+=1,Ws===null&&(Ws=[]),Gp(Ws,e,i)}function oo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function wl(e,i){throw i.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Um(e){var i=e._init;return i(e._payload)}function Lm(e){function i(Y,V){if(e){var $=Y.deletions;$===null?(Y.deletions=[V],Y.flags|=16):$.push(V)}}function a(Y,V){if(!e)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function o(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function u(Y,V){return Y=Vi(Y,V),Y.index=0,Y.sibling=null,Y}function d(Y,V,$){return Y.index=$,e?($=Y.alternate,$!==null?($=$.index,$<V?(Y.flags|=67108866,V):$):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function M(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function b(Y,V,$,dt){return V===null||V.tag!==6?(V=xu($,Y.mode,dt),V.return=Y,V):(V=u(V,$),V.return=Y,V)}function B(Y,V,$,dt){var Yt=$.type;return Yt===E?ft(Y,V,$.props.children,dt,$.key):V!==null&&(V.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===X&&Um(Yt)===V.type)?(V=u(V,$.props),oo(V,$),V.return=Y,V):(V=fl($.type,$.key,$.props,null,Y.mode,dt),oo(V,$),V.return=Y,V)}function et(Y,V,$,dt){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=yu($,Y.mode,dt),V.return=Y,V):(V=u(V,$.children||[]),V.return=Y,V)}function ft(Y,V,$,dt,Yt){return V===null||V.tag!==7?(V=ts($,Y.mode,dt,Yt),V.return=Y,V):(V=u(V,$),V.return=Y,V)}function _t(Y,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=xu(""+V,Y.mode,$),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return $=fl(V.type,V.key,V.props,null,Y.mode,$),oo($,V),$.return=Y,$;case y:return V=yu(V,Y.mode,$),V.return=Y,V;case X:var dt=V._init;return V=dt(V._payload),_t(Y,V,$)}if(ut(V)||ct(V))return V=ts(V,Y.mode,$,null),V.return=Y,V;if(typeof V.then=="function")return _t(Y,Cl(V),$);if(V.$$typeof===D)return _t(Y,ml(Y,V),$);wl(Y,V)}return null}function nt(Y,V,$,dt){var Yt=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Yt!==null?null:b(Y,V,""+$,dt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===Yt?B(Y,V,$,dt):null;case y:return $.key===Yt?et(Y,V,$,dt):null;case X:return Yt=$._init,$=Yt($._payload),nt(Y,V,$,dt)}if(ut($)||ct($))return Yt!==null?null:ft(Y,V,$,dt,null);if(typeof $.then=="function")return nt(Y,V,Cl($),dt);if($.$$typeof===D)return nt(Y,V,ml(Y,$),dt);wl(Y,$)}return null}function it(Y,V,$,dt,Yt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return Y=Y.get($)||null,b(V,Y,""+dt,Yt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case x:return Y=Y.get(dt.key===null?$:dt.key)||null,B(V,Y,dt,Yt);case y:return Y=Y.get(dt.key===null?$:dt.key)||null,et(V,Y,dt,Yt);case X:var xe=dt._init;return dt=xe(dt._payload),it(Y,V,$,dt,Yt)}if(ut(dt)||ct(dt))return Y=Y.get($)||null,ft(V,Y,dt,Yt,null);if(typeof dt.then=="function")return it(Y,V,$,Cl(dt),Yt);if(dt.$$typeof===D)return it(Y,V,$,ml(V,dt),Yt);wl(V,dt)}return null}function oe(Y,V,$,dt){for(var Yt=null,xe=null,Qt=V,se=V=0,xn=null;Qt!==null&&se<$.length;se++){Qt.index>se?(xn=Qt,Qt=null):xn=Qt.sibling;var Re=nt(Y,Qt,$[se],dt);if(Re===null){Qt===null&&(Qt=xn);break}e&&Qt&&Re.alternate===null&&i(Y,Qt),V=d(Re,V,se),xe===null?Yt=Re:xe.sibling=Re,xe=Re,Qt=xn}if(se===$.length)return a(Y,Qt),we&&ns(Y,se),Yt;if(Qt===null){for(;se<$.length;se++)Qt=_t(Y,$[se],dt),Qt!==null&&(V=d(Qt,V,se),xe===null?Yt=Qt:xe.sibling=Qt,xe=Qt);return we&&ns(Y,se),Yt}for(Qt=o(Qt);se<$.length;se++)xn=it(Qt,Y,se,$[se],dt),xn!==null&&(e&&xn.alternate!==null&&Qt.delete(xn.key===null?se:xn.key),V=d(xn,V,se),xe===null?Yt=xn:xe.sibling=xn,xe=xn);return e&&Qt.forEach(function(Pa){return i(Y,Pa)}),we&&ns(Y,se),Yt}function ie(Y,V,$,dt){if($==null)throw Error(s(151));for(var Yt=null,xe=null,Qt=V,se=V=0,xn=null,Re=$.next();Qt!==null&&!Re.done;se++,Re=$.next()){Qt.index>se?(xn=Qt,Qt=null):xn=Qt.sibling;var Pa=nt(Y,Qt,Re.value,dt);if(Pa===null){Qt===null&&(Qt=xn);break}e&&Qt&&Pa.alternate===null&&i(Y,Qt),V=d(Pa,V,se),xe===null?Yt=Pa:xe.sibling=Pa,xe=Pa,Qt=xn}if(Re.done)return a(Y,Qt),we&&ns(Y,se),Yt;if(Qt===null){for(;!Re.done;se++,Re=$.next())Re=_t(Y,Re.value,dt),Re!==null&&(V=d(Re,V,se),xe===null?Yt=Re:xe.sibling=Re,xe=Re);return we&&ns(Y,se),Yt}for(Qt=o(Qt);!Re.done;se++,Re=$.next())Re=it(Qt,Y,se,Re.value,dt),Re!==null&&(e&&Re.alternate!==null&&Qt.delete(Re.key===null?se:Re.key),V=d(Re,V,se),xe===null?Yt=Re:xe.sibling=Re,xe=Re);return e&&Qt.forEach(function(wy){return i(Y,wy)}),we&&ns(Y,se),Yt}function Fe(Y,V,$,dt){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:t:{for(var Yt=$.key;V!==null;){if(V.key===Yt){if(Yt=$.type,Yt===E){if(V.tag===7){a(Y,V.sibling),dt=u(V,$.props.children),dt.return=Y,Y=dt;break t}}else if(V.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===X&&Um(Yt)===V.type){a(Y,V.sibling),dt=u(V,$.props),oo(dt,$),dt.return=Y,Y=dt;break t}a(Y,V);break}else i(Y,V);V=V.sibling}$.type===E?(dt=ts($.props.children,Y.mode,dt,$.key),dt.return=Y,Y=dt):(dt=fl($.type,$.key,$.props,null,Y.mode,dt),oo(dt,$),dt.return=Y,Y=dt)}return M(Y);case y:t:{for(Yt=$.key;V!==null;){if(V.key===Yt)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(Y,V.sibling),dt=u(V,$.children||[]),dt.return=Y,Y=dt;break t}else{a(Y,V);break}else i(Y,V);V=V.sibling}dt=yu($,Y.mode,dt),dt.return=Y,Y=dt}return M(Y);case X:return Yt=$._init,$=Yt($._payload),Fe(Y,V,$,dt)}if(ut($))return oe(Y,V,$,dt);if(ct($)){if(Yt=ct($),typeof Yt!="function")throw Error(s(150));return $=Yt.call($),ie(Y,V,$,dt)}if(typeof $.then=="function")return Fe(Y,V,Cl($),dt);if($.$$typeof===D)return Fe(Y,V,ml(Y,$),dt);wl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(a(Y,V.sibling),dt=u(V,$),dt.return=Y,Y=dt):(a(Y,V),dt=xu($,Y.mode,dt),dt.return=Y,Y=dt),M(Y)):a(Y,V)}return function(Y,V,$,dt){try{ro=0;var Yt=Fe(Y,V,$,dt);return Ws=null,Yt}catch(Qt){if(Qt===Qr||Qt===_l)throw Qt;var xe=Yn(29,Qt,null,Y.mode);return xe.lanes=dt,xe.return=Y,xe}finally{}}}var qs=Lm(!0),Nm=Lm(!1),ri=J(null),Ei=null;function ya(e){var i=e.alternate;yt(un,un.current&1),yt(ri,e),Ei===null&&(i===null||Gs.current!==null||i.memoizedState!==null)&&(Ei=e)}function Om(e){if(e.tag===22){if(yt(un,un.current),yt(ri,e),Ei===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Ei=e)}}else Sa()}function Sa(){yt(un,un.current),yt(ri,ri.current)}function Zi(e){xt(ri),Ei===e&&(Ei=null),xt(un)}var un=J(0);function Dl(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||kf(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function $u(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:g({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var tf={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=Qn(),u=_a(o);u.payload=i,a!=null&&(u.callback=a),i=va(e,u,o),i!==null&&(Jn(i,e,o),$r(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=Qn(),u=_a(o);u.tag=1,u.payload=i,a!=null&&(u.callback=a),i=va(e,u,o),i!==null&&(Jn(i,e,o),$r(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=Qn(),o=_a(a);o.tag=2,i!=null&&(o.callback=i),i=va(e,o,a),i!==null&&(Jn(i,e,a),$r(i,e,a))}};function Pm(e,i,a,o,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):i.prototype&&i.prototype.isPureReactComponent?!kr(a,o)||!kr(u,d):!0}function zm(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&tf.enqueueReplaceState(i,i.state,null)}function cs(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Ul=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Bm(e){Ul(e)}function Im(e){console.error(e)}function Fm(e){Ul(e)}function Ll(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Hm(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ef(e,i,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){Ll(e,i)},a}function Gm(e){return e=_a(e),e.tag=3,e}function Vm(e,i,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){Hm(i,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Hm(i,a,o),typeof u!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function wx(e,i,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&Zr(i,a,u,!0),a=ri.current,a!==null){switch(a.tag){case 13:return Ei===null?Af():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Du?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),Cf(e,o,u)),!1;case 22:return a.flags|=65536,o===Du?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),Cf(e,o,u)),!1}throw Error(s(435,a.tag))}return Cf(e,o,u),Af(),!1}if(we)return i=ri.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==Eu&&(e=Error(s(422),{cause:o}),Yr(ni(e,a)))):(o!==Eu&&(i=Error(s(423),{cause:o}),Yr(ni(i,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ni(o,a),u=ef(e.stateNode,o,u),Nu(e,u),Je!==4&&(Je=2)),!1;var d=Error(s(520),{cause:o});if(d=ni(d,a),mo===null?mo=[d]:mo.push(d),Je!==4&&(Je=2),i===null)return!0;o=ni(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ef(a.stateNode,o,e),Nu(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ra===null||!Ra.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Gm(u),Vm(u,e,a,o),Nu(a,u),!1}a=a.return}while(a!==null);return!1}var km=Error(s(461)),_n=!1;function Tn(e,i,a,o){i.child=e===null?Nm(i,null,a,o):qs(i,e.child,a,o)}function Xm(e,i,a,o,u){a=a.render;var d=i.ref;if("ref"in o){var M={};for(var b in o)b!=="ref"&&(M[b]=o[b])}else M=o;return rs(i),o=Iu(e,i,a,M,d,u),b=Fu(),e!==null&&!_n?(Hu(e,i,u),ji(e,i,u)):(we&&b&&Su(i),i.flags|=1,Tn(e,i,o,u),i.child)}function Wm(e,i,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!vu(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,qm(e,i,d,o,u)):(e=fl(a.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!uf(e,u)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:kr,a(M,o)&&e.ref===i.ref)return ji(e,i,u)}return i.flags|=1,e=Vi(d,o),e.ref=i.ref,e.return=i,i.child=e}function qm(e,i,a,o,u){if(e!==null){var d=e.memoizedProps;if(kr(d,o)&&e.ref===i.ref)if(_n=!1,i.pendingProps=o=d,uf(e,u))(e.flags&131072)!==0&&(_n=!0);else return i.lanes=e.lanes,ji(e,i,u)}return nf(e,i,a,o,u)}function Ym(e,i,a){var o=i.pendingProps,u=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(u=i.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;i.childLanes=d&~o}else i.childLanes=0,i.child=null;return Zm(e,i,o,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&gl(i,d!==null?d.cachePool:null),d!==null?qp(i,d):Pu(),Om(i);else return i.lanes=i.childLanes=536870912,Zm(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(gl(i,d.cachePool),qp(i,d),Sa(),i.memoizedState=null):(e!==null&&gl(i,null),Pu(),Sa());return Tn(e,i,u,a),i.child}function Zm(e,i,a,o){var u=wu();return u=u===null?null:{parent:cn._currentValue,pool:u},i.memoizedState={baseLanes:a,cachePool:u},e!==null&&gl(i,null),Pu(),Om(i),e!==null&&Zr(e,i,o,!0),null}function Nl(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function nf(e,i,a,o,u){return rs(i),a=Iu(e,i,a,o,void 0,u),o=Fu(),e!==null&&!_n?(Hu(e,i,u),ji(e,i,u)):(we&&o&&Su(i),i.flags|=1,Tn(e,i,a,u),i.child)}function jm(e,i,a,o,u,d){return rs(i),i.updateQueue=null,a=Zp(i,o,a,u),Yp(e),o=Fu(),e!==null&&!_n?(Hu(e,i,d),ji(e,i,d)):(we&&o&&Su(i),i.flags|=1,Tn(e,i,a,d),i.child)}function Km(e,i,a,o,u){if(rs(i),i.stateNode===null){var d=zs,M=a.contextType;typeof M=="object"&&M!==null&&(d=wn(M)),d=new a(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=tf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Uu(i),M=a.contextType,d.context=typeof M=="object"&&M!==null?wn(M):zs,d.state=i.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&($u(i,a,M,o),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&tf.enqueueReplaceState(d,d.state,null),eo(i,o,d,u),to(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var b=i.memoizedProps,B=cs(a,b);d.props=B;var et=d.context,ft=a.contextType;M=zs,typeof ft=="object"&&ft!==null&&(M=wn(ft));var _t=a.getDerivedStateFromProps;ft=typeof _t=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=i.pendingProps!==b,ft||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||et!==M)&&zm(i,d,o,M),ga=!1;var nt=i.memoizedState;d.state=nt,eo(i,o,d,u),to(),et=i.memoizedState,b||nt!==et||ga?(typeof _t=="function"&&($u(i,a,_t,o),et=i.memoizedState),(B=ga||Pm(i,a,B,o,nt,et,M))?(ft||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=et),d.props=o,d.state=et,d.context=M,o=B):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,Lu(e,i),M=i.memoizedProps,ft=cs(a,M),d.props=ft,_t=i.pendingProps,nt=d.context,et=a.contextType,B=zs,typeof et=="object"&&et!==null&&(B=wn(et)),b=a.getDerivedStateFromProps,(et=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==_t||nt!==B)&&zm(i,d,o,B),ga=!1,nt=i.memoizedState,d.state=nt,eo(i,o,d,u),to();var it=i.memoizedState;M!==_t||nt!==it||ga||e!==null&&e.dependencies!==null&&pl(e.dependencies)?(typeof b=="function"&&($u(i,a,b,o),it=i.memoizedState),(ft=ga||Pm(i,a,ft,o,nt,it,B)||e!==null&&e.dependencies!==null&&pl(e.dependencies))?(et||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,it,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,it,B)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=it),d.props=o,d.state=it,d.context=B,o=ft):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,Nl(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=qs(i,e.child,null,u),i.child=qs(i,null,a,u)):Tn(e,i,a,u),i.memoizedState=d.state,e=i.child):e=ji(e,i,u),e}function Qm(e,i,a,o){return qr(),i.flags|=256,Tn(e,i,a,o),i.child}var af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sf(e){return{baseLanes:e,cachePool:Ip()}}function rf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=oi),e}function Jm(e,i,a){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),M&&(u=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,e===null){if(we){if(u?ya(i):Sa(),we){var b=Qe,B;if(B=b){t:{for(B=b,b=Mi;B.nodeType!==8;){if(!b){b=null;break t}if(B=pi(B.nextSibling),B===null){b=null;break t}}b=B}b!==null?(i.memoizedState={dehydrated:b,treeContext:es!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},B=Yn(18,null,null,0),B.stateNode=b,B.return=i,i.child=B,Nn=i,Qe=null,B=!0):B=!1}B||as(i)}if(b=i.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return kf(b)?i.lanes=32:i.lanes=536870912,null;Zi(i)}return b=o.children,o=o.fallback,u?(Sa(),u=i.mode,b=Ol({mode:"hidden",children:b},u),o=ts(o,u,a,null),b.return=i,o.return=i,b.sibling=o,i.child=b,u=i.child,u.memoizedState=sf(a),u.childLanes=rf(e,M,a),i.memoizedState=af,o):(ya(i),of(i,b))}if(B=e.memoizedState,B!==null&&(b=B.dehydrated,b!==null)){if(d)i.flags&256?(ya(i),i.flags&=-257,i=lf(e,i,a)):i.memoizedState!==null?(Sa(),i.child=e.child,i.flags|=128,i=null):(Sa(),u=o.fallback,b=i.mode,o=Ol({mode:"visible",children:o.children},b),u=ts(u,b,a,null),u.flags|=2,o.return=i,u.return=i,o.sibling=u,i.child=o,qs(i,e.child,null,a),o=i.child,o.memoizedState=sf(a),o.childLanes=rf(e,M,a),i.memoizedState=af,i=u);else if(ya(i),kf(b)){if(M=b.nextSibling&&b.nextSibling.dataset,M)var et=M.dgst;M=et,o=Error(s(419)),o.stack="",o.digest=M,Yr({value:o,source:null,stack:null}),i=lf(e,i,a)}else if(_n||Zr(e,i,a,!1),M=(a&e.childLanes)!==0,_n||M){if(M=We,M!==null&&(o=a&-a,o=(o&42)!==0?1:le(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==B.retryLane))throw B.retryLane=o,Ps(e,o),Jn(M,e,o),km;b.data==="$?"||Af(),i=lf(e,i,a)}else b.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=B.treeContext,Qe=pi(b.nextSibling),Nn=i,we=!0,is=null,Mi=!1,e!==null&&(ai[si++]=ki,ai[si++]=Xi,ai[si++]=es,ki=e.id,Xi=e.overflow,es=i),i=of(i,o.children),i.flags|=4096);return i}return u?(Sa(),u=o.fallback,b=i.mode,B=e.child,et=B.sibling,o=Vi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,et!==null?u=Vi(et,u):(u=ts(u,b,a,null),u.flags|=2),u.return=i,o.return=i,o.sibling=u,i.child=o,o=u,u=i.child,b=e.child.memoizedState,b===null?b=sf(a):(B=b.cachePool,B!==null?(et=cn._currentValue,B=B.parent!==et?{parent:et,pool:et}:B):B=Ip(),b={baseLanes:b.baseLanes|a,cachePool:B}),u.memoizedState=b,u.childLanes=rf(e,M,a),i.memoizedState=af,o):(ya(i),a=e.child,e=a.sibling,a=Vi(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(M=i.deletions,M===null?(i.deletions=[e],i.flags|=16):M.push(e)),i.child=a,i.memoizedState=null,a)}function of(e,i){return i=Ol({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Ol(e,i){return e=Yn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function lf(e,i,a){return qs(i,e.child,null,a),e=of(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function $m(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),bu(e.return,i,a)}function cf(e,i,a,o,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function tg(e,i,a){var o=i.pendingProps,u=o.revealOrder,d=o.tail;if(Tn(e,i,o.children,a),o=un.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$m(e,a,i);else if(e.tag===19)$m(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(yt(un,o),u){case"forwards":for(a=i.child,u=null;a!==null;)e=a.alternate,e!==null&&Dl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),cf(i,!1,u,a,d);break;case"backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Dl(e)===null){i.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}cf(i,!0,a,null,d);break;case"together":cf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ji(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Aa|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Zr(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Vi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Vi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function uf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&pl(e)))}function Dx(e,i,a){switch(i.tag){case 3:Nt(i,i.stateNode.containerInfo),ma(i,cn,e.memoizedState.cache),qr();break;case 27:case 5:Jt(i);break;case 4:Nt(i,i.stateNode.containerInfo);break;case 10:ma(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(ya(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Jm(e,i,a):(ya(i),e=ji(e,i,a),e!==null?e.sibling:null);ya(i);break;case 19:var u=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(Zr(e,i,a,!1),o=(a&i.childLanes)!==0),u){if(o)return tg(e,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(un,un.current),o)break;return null;case 22:case 23:return i.lanes=0,Ym(e,i,a);case 24:ma(i,cn,e.memoizedState.cache)}return ji(e,i,a)}function eg(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)_n=!0;else{if(!uf(e,a)&&(i.flags&128)===0)return _n=!1,Dx(e,i,a);_n=(e.flags&131072)!==0}else _n=!1,we&&(i.flags&1048576)!==0&&Up(i,dl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,u=o._init;if(o=u(o._payload),i.type=o,typeof o=="function")vu(o)?(e=cs(o,e),i.tag=1,i=Km(null,i,o,e,a)):(i.tag=0,i=nf(null,i,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===C){i.tag=11,i=Xm(null,i,o,e,a);break t}else if(u===I){i.tag=14,i=Wm(null,i,o,e,a);break t}}throw i=gt(o)||o,Error(s(306,i,""))}}return i;case 0:return nf(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,u=cs(o,i.pendingProps),Km(e,i,o,u,a);case 3:t:{if(Nt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var d=i.memoizedState;u=d.element,Lu(e,i),eo(i,o,null,a);var M=i.memoizedState;if(o=M.cache,ma(i,cn,o),o!==d.cache&&Au(i,[cn],a,!0),to(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Qm(e,i,o,a);break t}else if(o!==u){u=ni(Error(s(424)),i),Yr(u),i=Qm(e,i,o,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=pi(e.firstChild),Nn=i,we=!0,is=null,Mi=!0,a=Nm(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(qr(),o===u){i=ji(e,i,a);break t}Tn(e,i,o,a)}i=i.child}return i;case 26:return Nl(e,i),e===null?(a=s_(i.type,null,i.pendingProps,null))?i.memoizedState=a:we||(a=i.type,e=i.pendingProps,o=Zl(Et.current).createElement(a),o[on]=i,o[Mn]=e,An(o,a,e),nn(o),i.stateNode=o):i.memoizedState=s_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Jt(i),e===null&&we&&(o=i.stateNode=n_(i.type,i.pendingProps,Et.current),Nn=i,Mi=!0,u=Qe,Da(i.type)?(Xf=u,Qe=pi(o.firstChild)):Qe=u),Tn(e,i,i.pendingProps.children,a),Nl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&we&&((u=o=Qe)&&(o=ay(o,i.type,i.pendingProps,Mi),o!==null?(i.stateNode=o,Nn=i,Qe=pi(o.firstChild),Mi=!1,u=!0):u=!1),u||as(i)),Jt(i),u=i.type,d=i.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,Hf(u,d)?o=null:M!==null&&Hf(u,M)&&(i.flags|=32),i.memoizedState!==null&&(u=Iu(e,i,Mx,null,null,a),To._currentValue=u),Nl(e,i),Tn(e,i,o,a),i.child;case 6:return e===null&&we&&((e=a=Qe)&&(a=sy(a,i.pendingProps,Mi),a!==null?(i.stateNode=a,Nn=i,Qe=null,e=!0):e=!1),e||as(i)),null;case 13:return Jm(e,i,a);case 4:return Nt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=qs(i,null,o,a):Tn(e,i,o,a),i.child;case 11:return Xm(e,i,i.type,i.pendingProps,a);case 7:return Tn(e,i,i.pendingProps,a),i.child;case 8:return Tn(e,i,i.pendingProps.children,a),i.child;case 12:return Tn(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,ma(i,i.type,o.value),Tn(e,i,o.children,a),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,rs(i),u=wn(u),o=o(u),i.flags|=1,Tn(e,i,o,a),i.child;case 14:return Wm(e,i,i.type,i.pendingProps,a);case 15:return qm(e,i,i.type,i.pendingProps,a);case 19:return tg(e,i,a);case 31:return o=i.pendingProps,a=i.mode,o={mode:o.mode,children:o.children},e===null?(a=Ol(o,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Vi(e.child,o),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Ym(e,i,a);case 24:return rs(i),o=wn(cn),e===null?(u=wu(),u===null&&(u=We,d=Ru(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),i.memoizedState={parent:o,cache:u},Uu(i),ma(i,cn,u)):((e.lanes&a)!==0&&(Lu(e,i),eo(i,null,null,a),to()),u=e.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),ma(i,cn,o)):(o=d.cache,ma(i,cn,o),o!==u.cache&&Au(i,[cn],a,!0))),Tn(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Ki(e){e.flags|=4}function ng(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!u_(i)){if(i=ri.current,i!==null&&((be&4194048)===be?Ei!==null:(be&62914560)!==be&&(be&536870912)===0||i!==Ei))throw Jr=Du,Fp;e.flags|=8192}}function Pl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Bt():536870912,e.lanes|=i,Ks|=i)}function lo(e,i){if(!we)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function Ux(e,i,a){var o=i.pendingProps;switch(Mu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(i),null;case 1:return je(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),qi(cn),ae(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wr(i)?Ki(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Op())),je(i),null;case 26:return a=i.memoizedState,e===null?(Ki(i),a!==null?(je(i),ng(i,a)):(je(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Ki(i),je(i),ng(i,a)):(je(i),i.flags&=-16777217):(e.memoizedProps!==o&&Ki(i),je(i),i.flags&=-16777217),null;case 27:De(i),a=Et.current;var u=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return je(i),null}e=Q.current,Wr(i)?Lp(i):(e=n_(u,o,a),i.stateNode=e,Ki(i))}return je(i),null;case 5:if(De(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return je(i),null}if(e=Q.current,Wr(i))Lp(i);else{switch(u=Zl(Et.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[on]=i,e[Mn]=o;t:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break t;for(;u.sibling===null;){if(u.return===null||u.return===i)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=e;t:switch(An(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ki(i)}}return je(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&Ki(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=Et.current,Wr(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||jg(e.nodeValue,a)),e||as(i)}else e=Zl(e).createTextNode(o),e[on]=i,i.stateNode=e}return je(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Wr(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=i}else qr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),u=!1}else u=Op(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(Zi(i),i):(Zi(i),null)}if(Zi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Pl(i,i.updateQueue),je(i),null;case 4:return ae(),e===null&&Pf(i.stateNode.containerInfo),je(i),null;case 10:return qi(i.type),je(i),null;case 19:if(xt(un),u=i.memoizedState,u===null)return je(i),null;if(o=(i.flags&128)!==0,d=u.rendering,d===null)if(o)lo(u,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Dl(e),d!==null){for(i.flags|=128,lo(u,!1),e=d.updateQueue,i.updateQueue=e,Pl(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Dp(a,e),a=a.sibling;return yt(un,un.current&1|2),i.child}e=e.sibling}u.tail!==null&&wt()>Il&&(i.flags|=128,o=!0,lo(u,!1),i.lanes=4194304)}else{if(!o)if(e=Dl(d),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,Pl(i,e),lo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!we)return je(i),null}else 2*wt()-u.renderingStartTime>Il&&a!==536870912&&(i.flags|=128,o=!0,lo(u,!1),i.lanes=4194304);u.isBackwards?(d.sibling=i.child,i.child=d):(e=u.last,e!==null?e.sibling=d:i.child=d,u.last=d)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=wt(),i.sibling=null,e=un.current,yt(un,o?e&1|2:e&1),i):(je(i),null);case 22:case 23:return Zi(i),zu(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(je(i),i.subtreeFlags&6&&(i.flags|=8192)):je(i),a=i.updateQueue,a!==null&&Pl(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&xt(os),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),qi(cn),je(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function Lx(e,i){switch(Mu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return qi(cn),ae(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return De(i),null;case 13:if(Zi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));qr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return xt(un),null;case 4:return ae(),null;case 10:return qi(i.type),null;case 22:case 23:return Zi(i),zu(),e!==null&&xt(os),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return qi(cn),null;case 25:return null;default:return null}}function ig(e,i){switch(Mu(i),i.tag){case 3:qi(cn),ae();break;case 26:case 27:case 5:De(i);break;case 4:ae();break;case 13:Zi(i);break;case 19:xt(un);break;case 10:qi(i.type);break;case 22:case 23:Zi(i),zu(),e!==null&&xt(os);break;case 24:qi(cn)}}function co(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==u)}}catch(b){ke(i,i.return,b)}}function Ma(e,i,a){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var M=o.inst,b=M.destroy;if(b!==void 0){M.destroy=void 0,u=i;var B=a,et=b;try{et()}catch(ft){ke(u,B,ft)}}}o=o.next}while(o!==d)}}catch(ft){ke(i,i.return,ft)}}function ag(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Wp(i,a)}catch(o){ke(e,e.return,o)}}}function sg(e,i,a){a.props=cs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ke(e,i,o)}}function uo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){ke(e,i,u)}}function Ti(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){ke(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ke(e,i,u)}else a.current=null}function rg(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){ke(e,e.return,u)}}function ff(e,i,a){try{var o=e.stateNode;$x(o,e.type,a,i),o[Mn]=i}catch(u){ke(e,e.return,u)}}function og(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function hf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||og(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function df(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Yl));else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(df(e,i,a),e=e.sibling;e!==null;)df(e,i,a),e=e.sibling}function zl(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zl(e,i,a),e=e.sibling;e!==null;)zl(e,i,a),e=e.sibling}function lg(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);An(i,o,a),i[on]=e,i[Mn]=a}catch(d){ke(e,e.return,d)}}var Qi=!1,en=!1,pf=!1,cg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Nx(e,i){if(e=e.containerInfo,If=tc,e=yp(e),fu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var M=0,b=-1,B=-1,et=0,ft=0,_t=e,nt=null;e:for(;;){for(var it;_t!==a||u!==0&&_t.nodeType!==3||(b=M+u),_t!==d||o!==0&&_t.nodeType!==3||(B=M+o),_t.nodeType===3&&(M+=_t.nodeValue.length),(it=_t.firstChild)!==null;)nt=_t,_t=it;for(;;){if(_t===e)break e;if(nt===a&&++et===u&&(b=M),nt===d&&++ft===o&&(B=M),(it=_t.nextSibling)!==null)break;_t=nt,nt=_t.parentNode}_t=it}a=b===-1||B===-1?null:{start:b,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ff={focusedElem:e,selectionRange:a},tc=!1,vn=i;vn!==null;)if(i=vn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,vn=e;else for(;vn!==null;){switch(i=vn,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var oe=cs(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(oe,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){ke(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Vf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,vn=e;break}vn=i.return}}function ug(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ea(e,a),o&4&&co(5,a);break;case 1:if(Ea(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(M){ke(a,a.return,M)}else{var u=cs(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(M){ke(a,a.return,M)}}o&64&&ag(a),o&512&&uo(a,a.return);break;case 3:if(Ea(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Wp(e,i)}catch(M){ke(a,a.return,M)}}break;case 27:i===null&&o&4&&lg(a);case 26:case 5:Ea(e,a),i===null&&o&4&&rg(a),o&512&&uo(a,a.return);break;case 12:Ea(e,a);break;case 13:Ea(e,a),o&4&&dg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Vx.bind(null,a),ry(e,a))));break;case 22:if(o=a.memoizedState!==null||Qi,!o){i=i!==null&&i.memoizedState!==null||en,u=Qi;var d=en;Qi=o,(en=i)&&!d?Ta(e,a,(a.subtreeFlags&8772)!==0):Ea(e,a),Qi=u,en=d}break;case 30:break;default:Ea(e,a)}}function fg(e){var i=e.alternate;i!==null&&(e.alternate=null,fg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&fa(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,In=!1;function Ji(e,i,a){for(a=a.child;a!==null;)hg(e,i,a),a=a.sibling}function hg(e,i,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ot,a)}catch{}switch(a.tag){case 26:en||Ti(a,i),Ji(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||Ti(a,i);var o=Ye,u=In;Da(a.type)&&(Ye=a.stateNode,In=!1),Ji(e,i,a),yo(a.stateNode),Ye=o,In=u;break;case 5:en||Ti(a,i);case 6:if(o=Ye,u=In,Ye=null,Ji(e,i,a),Ye=o,In=u,Ye!==null)if(In)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(d){ke(a,i,d)}else try{Ye.removeChild(a.stateNode)}catch(d){ke(a,i,d)}break;case 18:Ye!==null&&(In?(e=Ye,t_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Co(e)):t_(Ye,a.stateNode));break;case 4:o=Ye,u=In,Ye=a.stateNode.containerInfo,In=!0,Ji(e,i,a),Ye=o,In=u;break;case 0:case 11:case 14:case 15:en||Ma(2,a,i),en||Ma(4,a,i),Ji(e,i,a);break;case 1:en||(Ti(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&sg(a,i,o)),Ji(e,i,a);break;case 21:Ji(e,i,a);break;case 22:en=(o=en)||a.memoizedState!==null,Ji(e,i,a),en=o;break;default:Ji(e,i,a)}}function dg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Co(e)}catch(a){ke(i,i.return,a)}}function Ox(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new cg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new cg),i;default:throw Error(s(435,e.tag))}}function mf(e,i){var a=Ox(e);i.forEach(function(o){var u=kx.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Zn(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,M=i,b=M;t:for(;b!==null;){switch(b.tag){case 27:if(Da(b.type)){Ye=b.stateNode,In=!1;break t}break;case 5:Ye=b.stateNode,In=!1;break t;case 3:case 4:Ye=b.stateNode.containerInfo,In=!0;break t}b=b.return}if(Ye===null)throw Error(s(160));hg(d,M,u),Ye=null,In=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)pg(i,e),i=i.sibling}var di=null;function pg(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(i,e),jn(e),o&4&&(Ma(3,e,e.return),co(3,e),Ma(5,e,e.return));break;case 1:Zn(i,e),jn(e),o&512&&(en||a===null||Ti(a,a.return)),o&64&&Qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=di;if(Zn(i,e),jn(e),o&512&&(en||a===null||Ti(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ua]||d[on]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),An(d,o,a),d[on]=e,nn(d),o=d;break t;case"link":var M=l_("link","href",u).get(o+(a.href||""));if(M){for(var b=0;b<M.length;b++)if(d=M[b],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(b,1);break e}}d=u.createElement(o),An(d,o,a),u.head.appendChild(d);break;case"meta":if(M=l_("meta","content",u).get(o+(a.content||""))){for(b=0;b<M.length;b++)if(d=M[b],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(b,1);break e}}d=u.createElement(o),An(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[on]=e,nn(d),o=d}e.stateNode=o}else c_(u,e.type,e.stateNode);else e.stateNode=o_(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?c_(u,e.type,e.stateNode):o_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ff(e,e.memoizedProps,a.memoizedProps)}break;case 27:Zn(i,e),jn(e),o&512&&(en||a===null||Ti(a,a.return)),a!==null&&o&4&&ff(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Zn(i,e),jn(e),o&512&&(en||a===null||Ti(a,a.return)),e.flags&32){u=e.stateNode;try{Si(u,"")}catch(it){ke(e,e.return,it)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,ff(e,u,a!==null?a.memoizedProps:u)),o&1024&&(pf=!0);break;case 6:if(Zn(i,e),jn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(it){ke(e,e.return,it)}}break;case 3:if(Ql=null,u=di,di=jl(i.containerInfo),Zn(i,e),di=u,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Co(i.containerInfo)}catch(it){ke(e,e.return,it)}pf&&(pf=!1,mg(e));break;case 4:o=di,di=jl(e.stateNode.containerInfo),Zn(i,e),jn(e),di=o;break;case 12:Zn(i,e),jn(e);break;case 13:Zn(i,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Sf=wt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,mf(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,et=Qi,ft=en;if(Qi=et||u,en=ft||B,Zn(i,e),en=ft,Qi=et,jn(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(a===null||B||Qi||en||us(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){B=a=i;try{if(d=B.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{b=B.stateNode;var _t=B.memoizedProps.style,nt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){ke(B,B.return,it)}}}else if(i.tag===6){if(a===null){B=i;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(it){ke(B,B.return,it)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,mf(e,a))));break;case 19:Zn(i,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,mf(e,o)));break;case 30:break;case 21:break;default:Zn(i,e),jn(e)}}function jn(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(og(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=hf(e);zl(e,d,u);break;case 5:var M=a.stateNode;a.flags&32&&(Si(M,""),a.flags&=-33);var b=hf(e);zl(e,b,M);break;case 3:case 4:var B=a.stateNode.containerInfo,et=hf(e);df(e,et,B);break;default:throw Error(s(161))}}catch(ft){ke(e,e.return,ft)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function mg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;mg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ea(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ug(e,i.alternate,i),i=i.sibling}function us(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ma(4,i,i.return),us(i);break;case 1:Ti(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&sg(i,i.return,a),us(i);break;case 27:yo(i.stateNode);case 26:case 5:Ti(i,i.return),us(i);break;case 22:i.memoizedState===null&&us(i);break;case 30:us(i);break;default:us(i)}e=e.sibling}}function Ta(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,d=i,M=d.flags;switch(d.tag){case 0:case 11:case 15:Ta(u,d,a),co(4,d);break;case 1:if(Ta(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){ke(o,o.return,et)}if(o=d,u=o.updateQueue,u!==null){var b=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Xp(B[u],b)}catch(et){ke(o,o.return,et)}}a&&M&64&&ag(d),uo(d,d.return);break;case 27:lg(d);case 26:case 5:Ta(u,d,a),a&&o===null&&M&4&&rg(d),uo(d,d.return);break;case 12:Ta(u,d,a);break;case 13:Ta(u,d,a),a&&M&4&&dg(u,d);break;case 22:d.memoizedState===null&&Ta(u,d,a),uo(d,d.return);break;case 30:break;default:Ta(u,d,a)}i=i.sibling}}function gf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&jr(a))}function _f(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&jr(e))}function bi(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)gg(e,i,a,o),i=i.sibling}function gg(e,i,a,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:bi(e,i,a,o),u&2048&&co(9,i);break;case 1:bi(e,i,a,o);break;case 3:bi(e,i,a,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&jr(e)));break;case 12:if(u&2048){bi(e,i,a,o),e=i.stateNode;try{var d=i.memoizedProps,M=d.id,b=d.onPostCommit;typeof b=="function"&&b(M,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){ke(i,i.return,B)}}else bi(e,i,a,o);break;case 13:bi(e,i,a,o);break;case 23:break;case 22:d=i.stateNode,M=i.alternate,i.memoizedState!==null?d._visibility&2?bi(e,i,a,o):fo(e,i):d._visibility&2?bi(e,i,a,o):(d._visibility|=2,Ys(e,i,a,o,(i.subtreeFlags&10256)!==0)),u&2048&&gf(M,i);break;case 24:bi(e,i,a,o),u&2048&&_f(i.alternate,i);break;default:bi(e,i,a,o)}}function Ys(e,i,a,o,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,M=i,b=a,B=o,et=M.flags;switch(M.tag){case 0:case 11:case 15:Ys(d,M,b,B,u),co(8,M);break;case 23:break;case 22:var ft=M.stateNode;M.memoizedState!==null?ft._visibility&2?Ys(d,M,b,B,u):fo(d,M):(ft._visibility|=2,Ys(d,M,b,B,u)),u&&et&2048&&gf(M.alternate,M);break;case 24:Ys(d,M,b,B,u),u&&et&2048&&_f(M.alternate,M);break;default:Ys(d,M,b,B,u)}i=i.sibling}}function fo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,u=o.flags;switch(o.tag){case 22:fo(a,o),u&2048&&gf(o.alternate,o);break;case 24:fo(a,o),u&2048&&_f(o.alternate,o);break;default:fo(a,o)}i=i.sibling}}var ho=8192;function Zs(e){if(e.subtreeFlags&ho)for(e=e.child;e!==null;)_g(e),e=e.sibling}function _g(e){switch(e.tag){case 26:Zs(e),e.flags&ho&&e.memoizedState!==null&&xy(di,e.memoizedState,e.memoizedProps);break;case 5:Zs(e);break;case 3:case 4:var i=di;di=jl(e.stateNode.containerInfo),Zs(e),di=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ho,ho=16777216,Zs(e),ho=i):Zs(e));break;default:Zs(e)}}function vg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function po(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];vn=o,yg(o,e)}vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xg(e),e=e.sibling}function xg(e){switch(e.tag){case 0:case 11:case 15:po(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:po(e);break;case 12:po(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Bl(e)):po(e);break;default:po(e)}}function Bl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];vn=o,yg(o,e)}vg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ma(8,i,i.return),Bl(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Bl(i));break;default:Bl(i)}e=e.sibling}}function yg(e,i){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Ma(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:jr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else t:for(a=e;vn!==null;){o=vn;var u=o.sibling,d=o.return;if(fg(o),o===a){vn=null;break t}if(u!==null){u.return=d,vn=u;break t}vn=d}}}var Px={getCacheForType:function(e){var i=wn(cn),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},zx=typeof WeakMap=="function"?WeakMap:Map,Oe=0,We=null,Se=null,be=0,Pe=0,Kn=null,ba=!1,js=!1,vf=!1,$i=0,Je=0,Aa=0,fs=0,xf=0,oi=0,Ks=0,mo=null,Fn=null,yf=!1,Sf=0,Il=1/0,Fl=null,Ra=null,bn=0,Ca=null,Qs=null,Js=0,Mf=0,Ef=null,Sg=null,go=0,Tf=null;function Qn(){if((Oe&2)!==0&&be!==0)return be&-be;if(z.T!==null){var e=Fs;return e!==0?e:Uf()}return Ae()}function Mg(){oi===0&&(oi=(be&536870912)===0||we?k():536870912);var e=ri.current;return e!==null&&(e.flags|=32),oi}function Jn(e,i,a){(e===We&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&($s(e,0),wa(e,be,oi,!1)),kt(e,a),((Oe&2)===0||e!==We)&&(e===We&&((Oe&2)===0&&(fs|=a),Je===4&&wa(e,be,oi,!1)),Ai(e))}function Eg(e,i,a){if((Oe&6)!==0)throw Error(s(327));var o=!a&&(i&124)===0&&(i&e.expiredLanes)===0||Ot(e,i),u=o?Fx(e,i):Rf(e,i,!0),d=o;do{if(u===0){js&&!o&&wa(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!Bx(a)){u=Rf(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;t:{var b=e;u=mo;var B=b.current.memoizedState.isDehydrated;if(B&&($s(b,M).flags|=256),M=Rf(b,M,!1),M!==2){if(vf&&!B){b.errorRecoveryDisabledLanes|=d,fs|=d,u=4;break t}d=Fn,Fn=u,d!==null&&(Fn===null?Fn=d:Fn.push.apply(Fn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){$s(e,0),wa(e,i,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:wa(o,i,oi,!ba);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(u=Sf+300-wt(),10<u)){if(wa(o,i,oi,!ba),te(o,0,!0)!==0)break t;o.timeoutHandle=Jg(Tg.bind(null,o,a,Fn,Fl,yf,i,oi,fs,Ks,ba,d,2,-0,0),u);break t}Tg(o,a,Fn,Fl,yf,i,oi,fs,Ks,ba,d,0,-0,0)}}break}while(!0);Ai(e)}function Tg(e,i,a,o,u,d,M,b,B,et,ft,_t,nt,it){if(e.timeoutHandle=-1,_t=i.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(Eo={stylesheets:null,count:0,unsuspend:vy},_g(i),_t=yy(),_t!==null)){e.cancelPendingCommit=_t(Ug.bind(null,e,i,d,a,o,u,M,b,B,ft,1,nt,it)),wa(e,d,M,!et);return}Ug(e,i,d,a,o,u,M,b,B)}function Bx(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!qn(d(),u))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function wa(e,i,a,o){i&=~xf,i&=~fs,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var d=31-Ft(u),M=1<<d;o[d]=-1,u&=~M}a!==0&&vt(e,a,i)}function Hl(){return(Oe&6)===0?(_o(0),!1):!0}function bf(){if(Se!==null){if(Pe===0)var e=Se.return;else e=Se,Wi=ss=null,Gu(e),Ws=null,ro=0,e=Se;for(;e!==null;)ig(e.alternate,e),e=e.return;Se=null}}function $s(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ey(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),bf(),We=e,Se=a=Vi(e.current,null),be=i,Pe=0,Kn=null,ba=!1,js=Ot(e,i),vf=!1,Ks=oi=xf=fs=Aa=Je=0,Fn=mo=null,yf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-Ft(o),d=1<<u;i|=e[u],o&=~d}return $i=i,ll(),a}function bg(e,i){ge=null,z.H=Rl,i===Qr||i===_l?(i=Vp(),Pe=3):i===Fp?(i=Vp(),Pe=4):Pe=i===km?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Kn=i,Se===null&&(Je=1,Ll(e,ni(i,e.current)))}function Ag(){var e=z.H;return z.H=Rl,e===null?Rl:e}function Rg(){var e=z.A;return z.A=Px,e}function Af(){Je=4,ba||(be&4194048)!==be&&ri.current!==null||(js=!0),(Aa&134217727)===0&&(fs&134217727)===0||We===null||wa(We,be,oi,!1)}function Rf(e,i,a){var o=Oe;Oe|=2;var u=Ag(),d=Rg();(We!==e||be!==i)&&(Fl=null,$s(e,i)),i=!1;var M=Je;t:do try{if(Pe!==0&&Se!==null){var b=Se,B=Kn;switch(Pe){case 8:bf(),M=6;break t;case 3:case 2:case 9:case 6:ri.current===null&&(i=!0);var et=Pe;if(Pe=0,Kn=null,tr(e,b,B,et),a&&js){M=0;break t}break;default:et=Pe,Pe=0,Kn=null,tr(e,b,B,et)}}Ix(),M=Je;break}catch(ft){bg(e,ft)}while(!0);return i&&e.shellSuspendCounter++,Wi=ss=null,Oe=o,z.H=u,z.A=d,Se===null&&(We=null,be=0,ll()),M}function Ix(){for(;Se!==null;)Cg(Se)}function Fx(e,i){var a=Oe;Oe|=2;var o=Ag(),u=Rg();We!==e||be!==i?(Fl=null,Il=wt()+500,$s(e,i)):js=Ot(e,i);t:do try{if(Pe!==0&&Se!==null){i=Se;var d=Kn;e:switch(Pe){case 1:Pe=0,Kn=null,tr(e,i,d,1);break;case 2:case 9:if(Hp(d)){Pe=0,Kn=null,wg(i);break}i=function(){Pe!==2&&Pe!==9||We!==e||(Pe=7),Ai(e)},d.then(i,i);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Hp(d)?(Pe=0,Kn=null,wg(i)):(Pe=0,Kn=null,tr(e,i,d,7));break;case 5:var M=null;switch(Se.tag){case 26:M=Se.memoizedState;case 5:case 27:var b=Se;if(!M||u_(M)){Pe=0,Kn=null;var B=b.sibling;if(B!==null)Se=B;else{var et=b.return;et!==null?(Se=et,Gl(et)):Se=null}break e}}Pe=0,Kn=null,tr(e,i,d,5);break;case 6:Pe=0,Kn=null,tr(e,i,d,6);break;case 8:bf(),Je=6;break t;default:throw Error(s(462))}}Hx();break}catch(ft){bg(e,ft)}while(!0);return Wi=ss=null,z.H=o,z.A=u,Oe=a,Se!==null?0:(We=null,be=0,ll(),Je)}function Hx(){for(;Se!==null&&!Ut();)Cg(Se)}function Cg(e){var i=eg(e.alternate,e,$i);e.memoizedProps=e.pendingProps,i===null?Gl(e):Se=i}function wg(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=jm(a,i,i.pendingProps,i.type,void 0,be);break;case 11:i=jm(a,i,i.pendingProps,i.type.render,i.ref,be);break;case 5:Gu(i);default:ig(a,i),i=Se=Dp(i,$i),i=eg(a,i,$i)}e.memoizedProps=e.pendingProps,i===null?Gl(e):Se=i}function tr(e,i,a,o){Wi=ss=null,Gu(i),Ws=null,ro=0;var u=i.return;try{if(wx(e,u,i,a,be)){Je=1,Ll(e,ni(a,e.current)),Se=null;return}}catch(d){if(u!==null)throw Se=u,d;Je=1,Ll(e,ni(a,e.current)),Se=null;return}i.flags&32768?(we||o===1?e=!0:js||(be&536870912)!==0?e=!1:(ba=e=!0,(o===2||o===9||o===3||o===6)&&(o=ri.current,o!==null&&o.tag===13&&(o.flags|=16384))),Dg(i,e)):Gl(i)}function Gl(e){var i=e;do{if((i.flags&32768)!==0){Dg(i,ba);return}e=i.return;var a=Ux(i.alternate,i,$i);if(a!==null){Se=a;return}if(i=i.sibling,i!==null){Se=i;return}Se=i=e}while(i!==null);Je===0&&(Je=5)}function Dg(e,i){do{var a=Lx(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);Je=6,Se=null}function Ug(e,i,a,o,u,d,M,b,B){e.cancelPendingCommit=null;do Vl();while(bn!==0);if((Oe&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=gu,Ct(e,a,d,M,b,B),e===We&&(Se=We=null,be=0),Qs=i,Ca=e,Js=a,Mf=d,Ef=u,Sg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Xx(Gt,function(){return zg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=q.p,q.p=2,M=Oe,Oe|=4;try{Nx(e,i,a)}finally{Oe=M,q.p=u,z.T=o}}bn=1,Lg(),Ng(),Og()}}function Lg(){if(bn===1){bn=0;var e=Ca,i=Qs,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=q.p;q.p=2;var u=Oe;Oe|=4;try{pg(i,e);var d=Ff,M=yp(e.containerInfo),b=d.focusedElem,B=d.selectionRange;if(M!==b&&b&&b.ownerDocument&&xp(b.ownerDocument.documentElement,b)){if(B!==null&&fu(b)){var et=B.start,ft=B.end;if(ft===void 0&&(ft=et),"selectionStart"in b)b.selectionStart=et,b.selectionEnd=Math.min(ft,b.value.length);else{var _t=b.ownerDocument||document,nt=_t&&_t.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),oe=b.textContent.length,ie=Math.min(B.start,oe),Fe=B.end===void 0?ie:Math.min(B.end,oe);!it.extend&&ie>Fe&&(M=Fe,Fe=ie,ie=M);var Y=vp(b,ie),V=vp(b,Fe);if(Y&&V&&(it.rangeCount!==1||it.anchorNode!==Y.node||it.anchorOffset!==Y.offset||it.focusNode!==V.node||it.focusOffset!==V.offset)){var $=_t.createRange();$.setStart(Y.node,Y.offset),it.removeAllRanges(),ie>Fe?(it.addRange($),it.extend(V.node,V.offset)):($.setEnd(V.node,V.offset),it.addRange($))}}}}for(_t=[],it=b;it=it.parentNode;)it.nodeType===1&&_t.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_t.length;b++){var dt=_t[b];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}tc=!!If,Ff=If=null}finally{Oe=u,q.p=o,z.T=a}}e.current=i,bn=2}}function Ng(){if(bn===2){bn=0;var e=Ca,i=Qs,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=q.p;q.p=2;var u=Oe;Oe|=4;try{ug(e,i.alternate,i)}finally{Oe=u,q.p=o,z.T=a}}bn=3}}function Og(){if(bn===4||bn===3){bn=0,bt();var e=Ca,i=Qs,a=Js,o=Sg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?bn=5:(bn=0,Qs=Ca=null,Pg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ra=null),Ne(a),i=i.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ot,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=z.T,u=q.p,q.p=2,z.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var b=o[M];d(b.value,{componentStack:b.stack})}}finally{z.T=i,q.p=u}}(Js&3)!==0&&Vl(),Ai(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Tf?go++:(go=0,Tf=e):go=0,_o(0)}}function Pg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,jr(i)))}function Vl(e){return Lg(),Ng(),Og(),zg()}function zg(){if(bn!==5)return!1;var e=Ca,i=Mf;Mf=0;var a=Ne(Js),o=z.T,u=q.p;try{q.p=32>a?32:a,z.T=null,a=Ef,Ef=null;var d=Ca,M=Js;if(bn=0,Qs=Ca=null,Js=0,(Oe&6)!==0)throw Error(s(331));var b=Oe;if(Oe|=4,xg(d.current),gg(d,d.current,M,a),Oe=b,_o(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ot,d)}catch{}return!0}finally{q.p=u,z.T=o,Pg(e,i)}}function Bg(e,i,a){i=ni(a,i),i=ef(e.stateNode,i,2),e=va(e,i,2),e!==null&&(kt(e,2),Ai(e))}function ke(e,i,a){if(e.tag===3)Bg(e,e,a);else for(;i!==null;){if(i.tag===3){Bg(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ra===null||!Ra.has(o))){e=ni(a,e),a=Gm(2),o=va(i,a,2),o!==null&&(Vm(a,o,i,e),kt(o,2),Ai(o));break}}i=i.return}}function Cf(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new zx;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(a)||(vf=!0,u.add(a),e=Gx.bind(null,e,i,a),i.then(e,e))}function Gx(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(be&a)===a&&(Je===4||Je===3&&(be&62914560)===be&&300>wt()-Sf?(Oe&2)===0&&$s(e,0):xf|=a,Ks===be&&(Ks=0)),Ai(e)}function Ig(e,i){i===0&&(i=Bt()),e=Ps(e,i),e!==null&&(kt(e,i),Ai(e))}function Vx(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),Ig(e,a)}function kx(e,i){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),Ig(e,a)}function Xx(e,i){return ue(e,i)}var kl=null,er=null,wf=!1,Xl=!1,Df=!1,hs=0;function Ai(e){e!==er&&e.next===null&&(er===null?kl=er=e:er=er.next=e),Xl=!0,wf||(wf=!0,qx())}function _o(e,i){if(!Df&&Xl){Df=!0;do for(var a=!1,o=kl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,b=o.pingedLanes;d=(1<<31-Ft(42|e)+1)-1,d&=u&~(M&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Vg(o,d))}else d=be,d=te(o,o===We?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ot(o,d)||(a=!0,Vg(o,d));o=o.next}while(a);Df=!1}}function Wx(){Fg()}function Fg(){Xl=wf=!1;var e=0;hs!==0&&(ty()&&(e=hs),hs=0);for(var i=wt(),a=null,o=kl;o!==null;){var u=o.next,d=Hg(o,i);d===0?(o.next=null,a===null?kl=u:a.next=u,u===null&&(er=a)):(a=o,(e!==0||(d&3)!==0)&&(Xl=!0)),o=u}_o(e)}function Hg(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-Ft(d),b=1<<M,B=u[M];B===-1?((b&a)===0||(b&o)!==0)&&(u[M]=ce(b,i)):B<=i&&(e.expiredLanes|=b),d&=~b}if(i=We,a=be,a=te(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&U(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ot(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&U(o),Ne(a)){case 2:case 8:a=Rt;break;case 32:a=Gt;break;case 268435456:a=O;break;default:a=Gt}return o=Gg.bind(null,e),a=ue(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&U(o),e.callbackPriority=2,e.callbackNode=null,2}function Gg(e,i){if(bn!==0&&bn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Vl()&&e.callbackNode!==a)return null;var o=be;return o=te(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Eg(e,o,i),Hg(e,wt()),e.callbackNode!=null&&e.callbackNode===a?Gg.bind(null,e):null)}function Vg(e,i){if(Vl())return null;Eg(e,i,!0)}function qx(){ny(function(){(Oe&6)!==0?ue(Wt,Wx):Fg()})}function Uf(){return hs===0&&(hs=k()),hs}function kg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:el(""+e)}function Xg(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function Yx(e,i,a,o,u){if(i==="submit"&&a&&a.stateNode===u){var d=kg((u[Mn]||null).action),M=o.submitter;M&&(i=(i=M[Mn]||null)?kg(i.formAction):M.getAttribute("formAction"),i!==null&&(d=i,M=null));var b=new sl("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(hs!==0){var B=M?Xg(u,M):new FormData(u);Ku(a,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(b.preventDefault(),B=M?Xg(u,M):new FormData(u),Ku(a,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var Lf=0;Lf<mu.length;Lf++){var Nf=mu[Lf],Zx=Nf.toLowerCase(),jx=Nf[0].toUpperCase()+Nf.slice(1);hi(Zx,"on"+jx)}hi(Ep,"onAnimationEnd"),hi(Tp,"onAnimationIteration"),hi(bp,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(hx,"onTransitionRun"),hi(dx,"onTransitionStart"),hi(px,"onTransitionCancel"),hi(Ap,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function Wg(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var M=o.length-1;0<=M;M--){var b=o[M],B=b.instance,et=b.currentTarget;if(b=b.listener,B!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=et;try{d(u)}catch(ft){Ul(ft)}u.currentTarget=null,d=B}else for(M=0;M<o.length;M++){if(b=o[M],B=b.instance,et=b.currentTarget,b=b.listener,B!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=et;try{d(u)}catch(ft){Ul(ft)}u.currentTarget=null,d=B}}}}function Me(e,i){var a=i[Za];a===void 0&&(a=i[Za]=new Set);var o=e+"__bubble";a.has(o)||(qg(i,e,2,!1),a.add(o))}function Of(e,i,a){var o=0;i&&(o|=4),qg(a,e,o,i)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function Pf(e){if(!e[Wl]){e[Wl]=!0,$o.forEach(function(a){a!=="selectionchange"&&(Kx.has(a)||Of(a,!1,e),Of(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Wl]||(i[Wl]=!0,Of("selectionchange",!1,i))}}function qg(e,i,a,o){switch(g_(i)){case 2:var u=Ey;break;case 8:u=Ty;break;default:u=jf}a=u.bind(null,i,a,e),u=void 0,!nu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,a,{capture:!0,passive:u}):e.addEventListener(i,a,!0):u!==void 0?e.addEventListener(i,a,{passive:u}):e.addEventListener(i,a,!1)}function zf(e,i,a,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var b=o.stateNode.containerInfo;if(b===u)break;if(M===4)for(M=o.return;M!==null;){var B=M.tag;if((B===3||B===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;b!==null;){if(M=zi(b),M===null)return;if(B=M.tag,B===5||B===6||B===26||B===27){o=d=M;continue t}b=b.parentNode}}o=o.return}$d(function(){var et=d,ft=tu(a),_t=[];t:{var nt=Rp.get(e);if(nt!==void 0){var it=sl,oe=e;switch(e){case"keypress":if(il(a)===0)break t;case"keydown":case"keyup":it=X0;break;case"focusin":oe="focus",it=ru;break;case"focusout":oe="blur",it=ru;break;case"beforeblur":case"afterblur":it=ru;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=L0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Y0;break;case Ep:case Tp:case bp:it=P0;break;case Ap:it=j0;break;case"scroll":case"scrollend":it=D0;break;case"wheel":it=Q0;break;case"copy":case"cut":case"paste":it=B0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=ap;break;case"toggle":case"beforetoggle":it=$0}var ie=(i&4)!==0,Fe=!ie&&(e==="scroll"||e==="scrollend"),Y=ie?nt!==null?nt+"Capture":null:nt;ie=[];for(var V=et,$;V!==null;){var dt=V;if($=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||$===null||Y===null||(dt=zr(V,Y),dt!=null&&ie.push(xo(V,dt,$))),Fe)break;V=V.return}0<ie.length&&(nt=new it(nt,oe,null,a,ft),_t.push({event:nt,listeners:ie}))}}if((i&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&a!==$c&&(oe=a.relatedTarget||a.fromElement)&&(zi(oe)||oe[Pn]))break t;if((it||nt)&&(nt=ft.window===ft?ft:(nt=ft.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(oe=a.relatedTarget||a.toElement,it=et,oe=oe?zi(oe):null,oe!==null&&(Fe=c(oe),ie=oe.tag,oe!==Fe||ie!==5&&ie!==27&&ie!==6)&&(oe=null)):(it=null,oe=et),it!==oe)){if(ie=np,dt="onMouseLeave",Y="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(ie=ap,dt="onPointerLeave",Y="onPointerEnter",V="pointer"),Fe=it==null?nt:Ka(it),$=oe==null?nt:Ka(oe),nt=new ie(dt,V+"leave",it,a,ft),nt.target=Fe,nt.relatedTarget=$,dt=null,zi(ft)===et&&(ie=new ie(Y,V+"enter",oe,a,ft),ie.target=$,ie.relatedTarget=Fe,dt=ie),Fe=dt,it&&oe)e:{for(ie=it,Y=oe,V=0,$=ie;$;$=nr($))V++;for($=0,dt=Y;dt;dt=nr(dt))$++;for(;0<V-$;)ie=nr(ie),V--;for(;0<$-V;)Y=nr(Y),$--;for(;V--;){if(ie===Y||Y!==null&&ie===Y.alternate)break e;ie=nr(ie),Y=nr(Y)}ie=null}else ie=null;it!==null&&Yg(_t,nt,it,ie,!1),oe!==null&&Fe!==null&&Yg(_t,Fe,oe,ie,!0)}}t:{if(nt=et?Ka(et):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Yt=hp;else if(up(nt))if(dp)Yt=cx;else{Yt=ox;var xe=rx}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?et&&Jc(et.elementType)&&(Yt=hp):Yt=lx;if(Yt&&(Yt=Yt(e,et))){fp(_t,Yt,a,ft);break t}xe&&xe(e,nt,et),e==="focusout"&&et&&nt.type==="number"&&et.memoizedProps.value!=null&&Cn(nt,"number",nt.value)}switch(xe=et?Ka(et):window,e){case"focusin":(up(xe)||xe.contentEditable==="true")&&(Ls=xe,hu=et,Xr=null);break;case"focusout":Xr=hu=Ls=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,Sp(_t,a,ft);break;case"selectionchange":if(fx)break;case"keydown":case"keyup":Sp(_t,a,ft)}var Qt;if(lu)t:{switch(e){case"compositionstart":var se="onCompositionStart";break t;case"compositionend":se="onCompositionEnd";break t;case"compositionupdate":se="onCompositionUpdate";break t}se=void 0}else Us?lp(e,a)&&(se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(sp&&a.locale!=="ko"&&(Us||se!=="onCompositionStart"?se==="onCompositionEnd"&&Us&&(Qt=tp()):(pa=ft,iu="value"in pa?pa.value:pa.textContent,Us=!0)),xe=ql(et,se),0<xe.length&&(se=new ip(se,e,null,a,ft),_t.push({event:se,listeners:xe}),Qt?se.data=Qt:(Qt=cp(a),Qt!==null&&(se.data=Qt)))),(Qt=ex?nx(e,a):ix(e,a))&&(se=ql(et,"onBeforeInput"),0<se.length&&(xe=new ip("onBeforeInput","beforeinput",null,a,ft),_t.push({event:xe,listeners:se}),xe.data=Qt)),Yx(_t,e,et,a,ft)}Wg(_t,i)})}function xo(e,i,a){return{instance:e,listener:i,currentTarget:a}}function ql(e,i){for(var a=i+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=zr(e,a),u!=null&&o.unshift(xo(e,u,d)),u=zr(e,i),u!=null&&o.push(xo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yg(e,i,a,o,u){for(var d=i._reactName,M=[];a!==null&&a!==o;){var b=a,B=b.alternate,et=b.stateNode;if(b=b.tag,B!==null&&B===o)break;b!==5&&b!==26&&b!==27||et===null||(B=et,u?(et=zr(a,d),et!=null&&M.unshift(xo(a,et,B))):u||(et=zr(a,d),et!=null&&M.push(xo(a,et,B)))),a=a.return}M.length!==0&&e.push({event:i,listeners:M})}var Qx=/\r\n?/g,Jx=/\u0000|\uFFFD/g;function Zg(e){return(typeof e=="string"?e:""+e).replace(Qx,`
`).replace(Jx,"")}function jg(e,i){return i=Zg(i),Zg(e)===i}function Yl(){}function Ie(e,i,a,o,u,d){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Si(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Si(e,""+o);break;case"className":zt(e,"class",o);break;case"tabIndex":zt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(e,a,o);break;case"style":Qd(e,o,d);break;case"data":if(i!=="object"){zt(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=el(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Ie(e,i,"name",u.name,u,null),Ie(e,i,"formEncType",u.formEncType,u,null),Ie(e,i,"formMethod",u.formMethod,u,null),Ie(e,i,"formTarget",u.formTarget,u,null)):(Ie(e,i,"encType",u.encType,u,null),Ie(e,i,"method",u.method,u,null),Ie(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=el(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Yl);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=el(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),At(e,"popover",o);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":At(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=C0.get(a)||a,At(e,a,o))}}function Bf(e,i,a,o,u,d){switch(a){case"style":Qd(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Si(e,o):(typeof o=="number"||typeof o=="bigint")&&Si(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Yl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),i=a.slice(2,u?a.length-7:void 0),d=e[Mn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):At(e,a,o)}}}function An(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ie(e,i,d,M,a,null)}}u&&Ie(e,i,"srcSet",a.srcSet,a,null),o&&Ie(e,i,"src",a.src,a,null);return;case"input":Me("invalid",e);var b=d=M=u=null,B=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":u=ft;break;case"type":M=ft;break;case"checked":B=ft;break;case"defaultChecked":et=ft;break;case"value":d=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,i));break;default:Ie(e,i,o,ft,a,null)}}Ve(e,d,b,B,et,M,u,!1),ze(e);return;case"select":Me("invalid",e),o=M=d=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":M=b;break;case"multiple":o=b;default:Ie(e,i,u,b,a,null)}i=d,a=M,e.multiple=!!o,i!=null?ln(e,!!o,i,!1):a!=null&&ln(e,!!o,a,!0);return;case"textarea":Me("invalid",e),d=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(b=a[M],b!=null))switch(M){case"value":o=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ie(e,i,M,b,a,null)}En(e,o,u,d),ze(e);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ie(e,i,B,o,a,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<vo.length;o++)Me(vo[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ie(e,i,et,o,a,null)}return;default:if(Jc(i)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&Bf(e,i,ft,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Ie(e,i,b,o,a,null))}function $x(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,b=null,B=null,et=null,ft=null;for(it in a){var _t=a[it];if(a.hasOwnProperty(it)&&_t!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":B=_t;default:o.hasOwnProperty(it)||Ie(e,i,it,null,o,_t)}}for(var nt in o){var it=o[nt];if(_t=a[nt],o.hasOwnProperty(nt)&&(it!=null||_t!=null))switch(nt){case"type":d=it;break;case"name":u=it;break;case"checked":et=it;break;case"defaultChecked":ft=it;break;case"value":M=it;break;case"defaultValue":b=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,i));break;default:it!==_t&&Ie(e,i,nt,it,o,_t)}}Fi(e,M,b,B,et,ft,d,u);return;case"select":it=M=b=nt=null;for(d in a)if(B=a[d],a.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":it=B;default:o.hasOwnProperty(d)||Ie(e,i,d,null,o,B)}for(u in o)if(d=o[u],B=a[u],o.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":nt=d;break;case"defaultValue":b=d;break;case"multiple":M=d;default:d!==B&&Ie(e,i,u,d,o,B)}i=b,a=M,o=it,nt!=null?ln(e,!!a,nt,!1):!!o!=!!a&&(i!=null?ln(e,!!a,i,!0):ln(e,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ie(e,i,b,null,o,u)}for(M in o)if(u=o[M],d=a[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":nt=u;break;case"defaultValue":it=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Ie(e,i,M,u,o,d)}gn(e,nt,it);return;case"option":for(var oe in a)if(nt=a[oe],a.hasOwnProperty(oe)&&nt!=null&&!o.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:Ie(e,i,oe,null,o,nt)}for(B in o)if(nt=o[B],it=a[B],o.hasOwnProperty(B)&&nt!==it&&(nt!=null||it!=null))switch(B){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ie(e,i,B,nt,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)nt=a[ie],a.hasOwnProperty(ie)&&nt!=null&&!o.hasOwnProperty(ie)&&Ie(e,i,ie,null,o,nt);for(et in o)if(nt=o[et],it=a[et],o.hasOwnProperty(et)&&nt!==it&&(nt!=null||it!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,i));break;default:Ie(e,i,et,nt,o,it)}return;default:if(Jc(i)){for(var Fe in a)nt=a[Fe],a.hasOwnProperty(Fe)&&nt!==void 0&&!o.hasOwnProperty(Fe)&&Bf(e,i,Fe,void 0,o,nt);for(ft in o)nt=o[ft],it=a[ft],!o.hasOwnProperty(ft)||nt===it||nt===void 0&&it===void 0||Bf(e,i,ft,nt,o,it);return}}for(var Y in a)nt=a[Y],a.hasOwnProperty(Y)&&nt!=null&&!o.hasOwnProperty(Y)&&Ie(e,i,Y,null,o,nt);for(_t in o)nt=o[_t],it=a[_t],!o.hasOwnProperty(_t)||nt===it||nt==null&&it==null||Ie(e,i,_t,nt,o,it)}var If=null,Ff=null;function Zl(e){return e.nodeType===9?e:e.ownerDocument}function Kg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Hf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Gf=null;function ty(){var e=window.event;return e&&e.type==="popstate"?e===Gf?!1:(Gf=e,!0):(Gf=null,!1)}var Jg=typeof setTimeout=="function"?setTimeout:void 0,ey=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(e){return $g.resolve(null).then(e).catch(iy)}:Jg;function iy(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function t_(e,i){var a=i,o=0,u=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&yo(M.documentElement),a&2&&yo(M.body),a&4)for(a=M.head,yo(a),M=a.firstChild;M;){var b=M.nextSibling,B=M.nodeName;M[ua]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=b}}if(u===0){e.removeChild(d),Co(i);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Co(i)}function Vf(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),fa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ay(e,i,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ua])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function sy(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function kf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ry(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function pi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Xf=null;function e_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function n_(e,i,a){switch(i=Zl(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function yo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);fa(e)}var li=new Map,i_=new Set;function jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=q.d;q.d={f:oy,r:ly,D:cy,C:uy,L:fy,m:hy,X:py,S:dy,M:my};function oy(){var e=ta.f(),i=Hl();return e||i}function ly(e){var i=Bi(e);i!==null&&i.tag===5&&i.type==="form"?Em(i):ta.r(e)}var ir=typeof document>"u"?null:document;function a_(e,i,a){var o=ir;if(o&&typeof i=="string"&&i){var u=Xe(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),i_.has(u)||(i_.add(u),e={rel:e,crossOrigin:a,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),An(i,"link",e),nn(i),o.head.appendChild(i)))}}function cy(e){ta.D(e),a_("dns-prefetch",e,null)}function uy(e,i){ta.C(e,i),a_("preconnect",e,i)}function fy(e,i,a){ta.L(e,i,a);var o=ir;if(o&&e&&i){var u='link[rel="preload"][as="'+Xe(i)+'"]';i==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Xe(a.imageSizes)+'"]')):u+='[href="'+Xe(e)+'"]';var d=u;switch(i){case"style":d=ar(e);break;case"script":d=sr(e)}li.has(d)||(e=g({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),li.set(d,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(So(d))||i==="script"&&o.querySelector(Mo(d))||(i=o.createElement("link"),An(i,"link",e),nn(i),o.head.appendChild(i)))}}function hy(e,i){ta.m(e,i);var a=ir;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Xe(o)+'"][href="'+Xe(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=sr(e)}if(!li.has(d)&&(e=g({rel:"modulepreload",href:e},i),li.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Mo(d)))return}o=a.createElement("link"),An(o,"link",e),nn(o),a.head.appendChild(o)}}}function dy(e,i,a){ta.S(e,i,a);var o=ir;if(o&&e){var u=ha(o).hoistableStyles,d=ar(e);i=i||"default";var M=u.get(d);if(!M){var b={loading:0,preload:null};if(M=o.querySelector(So(d)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},a),(a=li.get(d))&&Wf(e,a);var B=M=o.createElement("link");nn(B),An(B,"link",e),B._p=new Promise(function(et,ft){B.onload=et,B.onerror=ft}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Kl(M,i,o)}M={type:"stylesheet",instance:M,count:1,state:b},u.set(d,M)}}}function py(e,i){ta.X(e,i);var a=ir;if(a&&e){var o=ha(a).hoistableScripts,u=sr(e),d=o.get(u);d||(d=a.querySelector(Mo(u)),d||(e=g({src:e,async:!0},i),(i=li.get(u))&&qf(e,i),d=a.createElement("script"),nn(d),An(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function my(e,i){ta.M(e,i);var a=ir;if(a&&e){var o=ha(a).hoistableScripts,u=sr(e),d=o.get(u);d||(d=a.querySelector(Mo(u)),d||(e=g({src:e,async:!0,type:"module"},i),(i=li.get(u))&&qf(e,i),d=a.createElement("script"),nn(d),An(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function s_(e,i,a,o){var u=(u=Et.current)?jl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=ar(a.href),a=ha(u).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ar(a.href);var d=ha(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(So(e)))&&!d._p&&(M.instance=d,M.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),d||gy(u,e,a,M.state))),i&&o===null)throw Error(s(528,""));return M}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=sr(a),a=ha(u).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ar(e){return'href="'+Xe(e)+'"'}function So(e){return'link[rel="stylesheet"]['+e+"]"}function r_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function gy(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),An(i,"link",a),nn(i),e.head.appendChild(i))}function sr(e){return'[src="'+Xe(e)+'"]'}function Mo(e){return"script[async]"+e}function o_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+Xe(a.href)+'"]');if(o)return i.instance=o,nn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nn(o),An(o,"style",u),Kl(o,a.precedence,e),i.instance=o;case"stylesheet":u=ar(a.href);var d=e.querySelector(So(u));if(d)return i.state.loading|=4,i.instance=d,nn(d),d;o=r_(a),(u=li.get(u))&&Wf(o,u),d=(e.ownerDocument||e).createElement("link"),nn(d);var M=d;return M._p=new Promise(function(b,B){M.onload=b,M.onerror=B}),An(d,"link",o),i.state.loading|=4,Kl(d,a.precedence,e),i.instance=d;case"script":return d=sr(a.src),(u=e.querySelector(Mo(d)))?(i.instance=u,nn(u),u):(o=a,(u=li.get(d))&&(o=g({},a),qf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),nn(u),An(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Kl(o,a.precedence,e));return i.instance}function Kl(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var b=o[M];if(b.dataset.precedence===i)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Wf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function qf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Ql=null;function l_(e,i,a){if(Ql===null){var o=new Map,u=Ql=new Map;u.set(a,o)}else u=Ql,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[ua]||d[on]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(i)||"";M=e+M;var b=o.get(M);b?b.push(d):o.set(M,[d])}}return o}function c_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function _y(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function u_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Eo=null;function vy(){}function xy(e,i,a){if(Eo===null)throw Error(s(475));var o=Eo;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=ar(a.href),d=e.querySelector(So(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Jl.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=d,nn(d);return}d=e.ownerDocument||e,a=r_(a),(u=li.get(u))&&Wf(a,u),d=d.createElement("link"),nn(d);var M=d;M._p=new Promise(function(b,B){M.onload=b,M.onerror=B}),An(d,"link",a),i.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=Jl.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function yy(){if(Eo===null)throw Error(s(475));var e=Eo;return e.stylesheets&&e.count===0&&Yf(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Yf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Jl(){if(this.count--,this.count===0){if(this.stylesheets)Yf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $l=null;function Yf(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$l=new Map,i.forEach(Sy,e),$l=null,Jl.call(e))}function Sy(e,i){if(!(i.state.loading&4)){var a=$l.get(e);if(a)var o=a.get(null);else{a=new Map,$l.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=i.instance,M=u.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,u),a.set(M,u),this.count++,o=Jl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var To={$$typeof:D,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function My(e,i,a,o,u,d,M,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function f_(e,i,a,o,u,d,M,b,B,et,ft,_t){return e=new My(e,i,a,M,b,B,et,_t),i=1,d===!0&&(i|=24),d=Yn(3,null,null,i),e.current=d,d.stateNode=e,i=Ru(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:i},Uu(d),e}function h_(e){return e?(e=zs,e):zs}function d_(e,i,a,o,u,d){u=h_(u),o.context===null?o.context=u:o.pendingContext=u,o=_a(i),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=va(e,o,i),a!==null&&(Jn(a,e,i),$r(a,e,i))}function p_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Zf(e,i){p_(e,i),(e=e.alternate)&&p_(e,i)}function m_(e){if(e.tag===13){var i=Ps(e,67108864);i!==null&&Jn(i,e,67108864),Zf(e,67108864)}}var tc=!0;function Ey(e,i,a,o){var u=z.T;z.T=null;var d=q.p;try{q.p=2,jf(e,i,a,o)}finally{q.p=d,z.T=u}}function Ty(e,i,a,o){var u=z.T;z.T=null;var d=q.p;try{q.p=8,jf(e,i,a,o)}finally{q.p=d,z.T=u}}function jf(e,i,a,o){if(tc){var u=Kf(o);if(u===null)zf(e,i,o,ec,a),__(e,o);else if(Ay(u,e,i,a,o))o.stopPropagation();else if(__(e,o),i&4&&-1<by.indexOf(e)){for(;u!==null;){var d=Bi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=$t(d.pendingLanes);if(M!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;M;){var B=1<<31-Ft(M);b.entanglements[1]|=B,M&=~B}Ai(d),(Oe&6)===0&&(Il=wt()+500,_o(0))}}break;case 13:b=Ps(d,2),b!==null&&Jn(b,d,2),Hl(),Zf(d,2)}if(d=Kf(o),d===null&&zf(e,i,o,ec,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else zf(e,i,o,null,a)}}function Kf(e){return e=tu(e),Qf(e)}var ec=null;function Qf(e){if(ec=null,e=zi(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return ec=e,null}function g_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(mt()){case Wt:return 2;case Rt:return 8;case Gt:case fe:return 32;case O:return 268435456;default:return 32}default:return 32}}var Jf=!1,Ua=null,La=null,Na=null,bo=new Map,Ao=new Map,Oa=[],by="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function __(e,i){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":bo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(i.pointerId)}}function Ro(e,i,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=Bi(i),i!==null&&m_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function Ay(e,i,a,o,u){switch(i){case"focusin":return Ua=Ro(Ua,e,i,a,o,u),!0;case"dragenter":return La=Ro(La,e,i,a,o,u),!0;case"mouseover":return Na=Ro(Na,e,i,a,o,u),!0;case"pointerover":var d=u.pointerId;return bo.set(d,Ro(bo.get(d)||null,e,i,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Ao.set(d,Ro(Ao.get(d)||null,e,i,a,o,u)),!0}return!1}function v_(e){var i=zi(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Wn(e.priority,function(){if(a.tag===13){var o=Qn();o=le(o);var u=Ps(a,o);u!==null&&Jn(u,a,o),Zf(a,o)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Kf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);$c=o,a.target.dispatchEvent(o),$c=null}else return i=Bi(a),i!==null&&m_(i),e.blockedOn=a,!1;i.shift()}return!0}function x_(e,i,a){nc(e)&&a.delete(i)}function Ry(){Jf=!1,Ua!==null&&nc(Ua)&&(Ua=null),La!==null&&nc(La)&&(La=null),Na!==null&&nc(Na)&&(Na=null),bo.forEach(x_),Ao.forEach(x_)}function ic(e,i){e.blockedOn===i&&(e.blockedOn=null,Jf||(Jf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ry)))}var ac=null;function y_(e){ac!==e&&(ac=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ac===e&&(ac=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(Qf(o||a)===null)continue;break}var d=Bi(a);d!==null&&(e.splice(i,3),i-=3,Ku(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Co(e){function i(B){return ic(B,e)}Ua!==null&&ic(Ua,e),La!==null&&ic(La,e),Na!==null&&ic(Na,e),bo.forEach(i),Ao.forEach(i);for(var a=0;a<Oa.length;a++){var o=Oa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)v_(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],M=u[Mn]||null;if(typeof d=="function")M||y_(a);else if(M){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[Mn]||null)b=M.formAction;else if(Qf(u)!==null)continue}else b=M.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),y_(a)}}}function $f(e){this._internalRoot=e}sc.prototype.render=$f.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=Qn();d_(a,o,e,i,null,null)},sc.prototype.unmount=$f.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;d_(e.current,2,null,e,null,null),Hl(),i[Pn]=null}};function sc(e){this._internalRoot=e}sc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ae();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Oa.length&&i!==0&&i<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&v_(e)}};var S_=t.version;if(S_!=="19.1.0")throw Error(s(527,S_,"19.1.0"));q.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Cy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{ot=rc.inject(Cy),ht=rc}catch{}}return Do.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",u=Bm,d=Im,M=Fm,b=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(b=i.unstable_transitionCallbacks)),i=f_(e,1,!1,null,null,a,o,u,d,M,b,null),e[Pn]=i.current,Pf(e),new $f(i)},Do.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=Bm,M=Im,b=Fm,B=null,et=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(B=a.unstable_transitionCallbacks),a.formState!==void 0&&(et=a.formState)),i=f_(e,1,!0,i,a??null,o,u,d,M,b,B,et),i.context=h_(null),a=i.current,o=Qn(),o=le(o),u=_a(o),u.callback=null,va(a,u,o),a=o,i.current.lanes=a,kt(i,a),Ai(i),e[Pn]=i.current,Pf(e),new sc(i)},Do.version="19.1.0",Do}var U_;function Iy(){if(U_)return nh.exports;U_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),nh.exports=By(),nh.exports}var Fy=Iy();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Od="178",Er={ROTATE:0,DOLLY:1,PAN:2},yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hy=0,L_=1,Gy=2,Gv=1,Vy=2,ra=3,qa=0,kn=1,Ci=2,Xa=0,Tr=1,N_=2,O_=3,P_=4,ky=5,ys=100,Xy=101,Wy=102,qy=103,Yy=104,Zy=200,jy=201,Ky=202,Qy=203,Vh=204,kh=205,Jy=206,$y=207,tS=208,eS=209,nS=210,iS=211,aS=212,sS=213,rS=214,Xh=0,Wh=1,qh=2,Rr=3,Yh=4,Zh=5,jh=6,Kh=7,Pd=0,oS=1,lS=2,Wa=0,cS=1,uS=2,fS=3,hS=4,dS=5,pS=6,mS=7,Vv=300,Cr=301,wr=302,Qh=303,Jh=304,Zc=306,$h=1e3,Ms=1001,td=1002,yi=1003,gS=1004,oc=1005,wi=1006,rh=1007,Es=1008,Li=1009,kv=1010,Xv=1011,Go=1012,zd=1013,Ts=1014,oa=1015,Zo=1016,Bd=1017,Id=1018,Vo=1020,Wv=35902,qv=1021,Yv=1022,xi=1023,ko=1026,Xo=1027,Zv=1028,Fd=1029,jv=1030,Hd=1031,Gd=1033,zc=33776,Bc=33777,Ic=33778,Fc=33779,ed=35840,nd=35841,id=35842,ad=35843,sd=36196,rd=37492,od=37496,ld=37808,cd=37809,ud=37810,fd=37811,hd=37812,dd=37813,pd=37814,md=37815,gd=37816,_d=37817,vd=37818,xd=37819,yd=37820,Sd=37821,Hc=36492,Md=36494,Ed=36495,Kv=36283,Td=36284,bd=36285,Ad=36286,_S=3200,vS=3201,Qv=0,xS=1,ka="",ui="srgb",Dr="srgb-linear",kc="linear",He="srgb",rr=7680,z_=519,yS=512,SS=513,MS=514,Jv=515,ES=516,TS=517,bS=518,AS=519,B_=35044,I_="300 es",la=2e3,Xc=2001;class Cs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gc=Math.PI/180,Rd=180/Math.PI;function Nr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[n&63|128]+Un[n>>8&255]+"-"+Un[n>>16&255]+Un[n>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function _e(r,t,n){return Math.max(t,Math.min(n,r))}function RS(r,t){return(r%t+t)%t}function oh(r,t,n){return(1-n)*r+n*t}function Uo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const CS={DEG2RAD:Gc};class Lt{constructor(t=0,n=0){Lt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,l=t.elements;return this.x=l[0]*n+l[3]*s+l[6],this.y=l[1]*n+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=_e(this.x,t.x,n.x),this.y=_e(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=_e(this.x,t,n),this.y=_e(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bs{constructor(t=0,n=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=l}static slerpFlat(t,n,s,l,c,f,h){let p=s[l+0],m=s[l+1],g=s[l+2],_=s[l+3];const x=c[f+0],y=c[f+1],E=c[f+2],A=c[f+3];if(h===0){t[n+0]=p,t[n+1]=m,t[n+2]=g,t[n+3]=_;return}if(h===1){t[n+0]=x,t[n+1]=y,t[n+2]=E,t[n+3]=A;return}if(_!==A||p!==x||m!==y||g!==E){let S=1-h;const v=p*x+m*y+g*E+_*A,P=v>=0?1:-1,D=1-v*v;if(D>Number.EPSILON){const F=Math.sqrt(D),G=Math.atan2(F,v*P);S=Math.sin(S*G)/F,h=Math.sin(h*G)/F}const C=h*P;if(p=p*S+x*C,m=m*S+y*C,g=g*S+E*C,_=_*S+A*C,S===1-h){const F=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=F,m*=F,g*=F,_*=F}}t[n]=p,t[n+1]=m,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,s,l,c,f){const h=s[l],p=s[l+1],m=s[l+2],g=s[l+3],_=c[f],x=c[f+1],y=c[f+2],E=c[f+3];return t[n]=h*E+g*_+p*y-m*x,t[n+1]=p*E+g*x+m*_-h*y,t[n+2]=m*E+g*y+h*x-p*_,t[n+3]=g*E-h*_-p*x-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,l){return this._x=t,this._y=n,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(s/2),g=h(l/2),_=h(c/2),x=p(s/2),y=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=x*g*_+m*y*E,this._y=m*y*_-x*g*E,this._z=m*g*E+x*y*_,this._w=m*g*_-x*y*E;break;case"YXZ":this._x=x*g*_+m*y*E,this._y=m*y*_-x*g*E,this._z=m*g*E-x*y*_,this._w=m*g*_+x*y*E;break;case"ZXY":this._x=x*g*_-m*y*E,this._y=m*y*_+x*g*E,this._z=m*g*E+x*y*_,this._w=m*g*_-x*y*E;break;case"ZYX":this._x=x*g*_-m*y*E,this._y=m*y*_+x*g*E,this._z=m*g*E-x*y*_,this._w=m*g*_+x*y*E;break;case"YZX":this._x=x*g*_+m*y*E,this._y=m*y*_+x*g*E,this._z=m*g*E-x*y*_,this._w=m*g*_-x*y*E;break;case"XZY":this._x=x*g*_-m*y*E,this._y=m*y*_-x*g*E,this._z=m*g*E+x*y*_,this._w=m*g*_+x*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],l=n[4],c=n[8],f=n[1],h=n[5],p=n[9],m=n[2],g=n[6],_=n[10],x=s+h+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-m)*y,this._z=(f-l)*y}else if(s>h&&s>_){const y=2*Math.sqrt(1+s-h-_);this._w=(g-p)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+m)/y}else if(h>_){const y=2*Math.sqrt(1+h-s-_);this._w=(c-m)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+_-s-h);this._w=(f-l)/y,this._x=(c+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,n/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,l=t._y,c=t._z,f=t._w,h=n._x,p=n._y,m=n._z,g=n._w;return this._x=s*g+f*h+l*m-c*p,this._y=l*g+f*p+c*h-s*m,this._z=c*g+f*m+s*p-l*h,this._w=f*g-s*h-l*p-c*m,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+s*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*s+n*this._x,this._y=y*l+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),_=Math.sin((1-n)*g)/m,x=Math.sin(n*g)/m;return this._w=f*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,n=0,s=0){W.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(F_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(F_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*l,this.y=c[1]*n+c[4]*s+c[7]*l,this.z=c[2]*n+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*l-h*s),g=2*(h*n-c*l),_=2*(c*s-f*n);return this.x=n+p*m+f*_-h*g,this.y=s+p*g+h*m-c*_,this.z=l+p*_+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*l,this.y=c[1]*n+c[5]*s+c[9]*l,this.z=c[2]*n+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=_e(this.x,t.x,n.x),this.y=_e(this.y,t.y,n.y),this.z=_e(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=_e(this.x,t,n),this.y=_e(this.y,t,n),this.z=_e(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,l=t.y,c=t.z,f=n.x,h=n.y,p=n.z;return this.x=l*p-c*h,this.y=c*f-s*p,this.z=s*h-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return lh.copy(this).projectOnVector(t),this.sub(lh)}reflect(t){return this.sub(lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return n*n+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const l=Math.sin(n)*t;return this.x=l*Math.sin(s),this.y=Math.cos(n)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new W,F_=new bs;class de{constructor(t,n,s,l,c,f,h,p,m){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,h,p,m)}set(t,n,s,l,c,f,h,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=s,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],h=s[3],p=s[6],m=s[1],g=s[4],_=s[7],x=s[2],y=s[5],E=s[8],A=l[0],S=l[3],v=l[6],P=l[1],D=l[4],C=l[7],F=l[2],G=l[5],I=l[8];return c[0]=f*A+h*P+p*F,c[3]=f*S+h*D+p*G,c[6]=f*v+h*C+p*I,c[1]=m*A+g*P+_*F,c[4]=m*S+g*D+_*G,c[7]=m*v+g*C+_*I,c[2]=x*A+y*P+E*F,c[5]=x*S+y*D+E*G,c[8]=x*v+y*C+E*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return n*f*g-n*h*m-s*c*g+s*h*p+l*c*m-l*f*p}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=g*f-h*m,x=h*p-g*c,y=m*c-f*p,E=n*_+s*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=_*A,t[1]=(l*m-g*s)*A,t[2]=(h*s-l*f)*A,t[3]=x*A,t[4]=(g*n-l*p)*A,t[5]=(l*c-h*n)*A,t[6]=y*A,t[7]=(s*p-m*n)*A,t[8]=(f*n-s*c)*A,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*h)+f+t,-l*m,l*p,-l*(-m*f+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(ch.makeScale(t,n)),this}rotate(t){return this.premultiply(ch.makeRotation(-t)),this}translate(t,n){return this.premultiply(ch.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<9;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ch=new de;function $v(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Wc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wS(){const r=Wc("canvas");return r.style.display="block",r}const H_={};function br(r){r in H_||(H_[r]=!0,console.warn(r))}function DS(r,t,n){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}function US(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function LS(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const G_=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V_=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NS(){const r={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===He&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===He&&(l.r=Ar(l.r),l.g=Ar(l.g),l.b=Ar(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?kc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Dr]:{primaries:t,whitePoint:s,transfer:kc,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:s,transfer:He,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),r}const Ce=NS();function ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ar(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let or;class OS{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{or===void 0&&(or=Wc("canvas")),or.width=t.width,or.height=t.height;const l=or.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=or}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Wc("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ca(c[f]/255)*255;return s.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(ca(n[s]/255)*255):n[s]=ca(n[s]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let PS=0;class Vd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Nr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(uh(l[f].image)):c.push(uh(l[f]))}else c=uh(l);s.url=c}return n||(t.images[this.uuid]=s),s}}function uh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?OS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zS=0;const fh=new W;class Xn extends Cs{constructor(t=Xn.DEFAULT_IMAGE,n=Xn.DEFAULT_MAPPING,s=Ms,l=Ms,c=wi,f=Es,h=xi,p=Li,m=Xn.DEFAULT_ANISOTROPY,g=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Nr(),this.name="",this.source=new Vd(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fh).x}get height(){return this.source.getSize(fh).y}get depth(){return this.source.getSize(fh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $h:t.x=t.x-Math.floor(t.x);break;case Ms:t.x=t.x<0?0:1;break;case td:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $h:t.y=t.y-Math.floor(t.y);break;case Ms:t.y=t.y<0?0:1;break;case td:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Vv;Xn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,n=0,s=0,l=1){$e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,l){return this.x=t,this.y=n,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,l,c;const p=t.elements,m=p[0],g=p[4],_=p[8],x=p[1],y=p[5],E=p[9],A=p[2],S=p[6],v=p[10];if(Math.abs(g-x)<.01&&Math.abs(_-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+A)<.1&&Math.abs(E+S)<.1&&Math.abs(m+y+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,C=(y+1)/2,F=(v+1)/2,G=(g+x)/4,I=(_+A)/4,X=(E+S)/4;return D>C&&D>F?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=G/s,c=I/s):C>F?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=G/l,c=X/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=I/c,l=X/c),this.set(s,l,c,n),this}let P=Math.sqrt((S-E)*(S-E)+(_-A)*(_-A)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(S-E)/P,this.y=(_-A)/P,this.z=(x-g)/P,this.w=Math.acos((m+y+v-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=_e(this.x,t.x,n.x),this.y=_e(this.y,t.y,n.y),this.z=_e(this.z,t.z,n.z),this.w=_e(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=_e(this.x,t,n),this.y=_e(this.y,t,n),this.z=_e(this.z,t,n),this.w=_e(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BS extends Cs{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new $e(0,0,t,n),this.scissorTest=!1,this.viewport=new $e(0,0,t,n);const l={width:t,height:n,depth:s.depth},c=new Xn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new Vd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends BS{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class t0 extends Xn{constructor(t=null,n=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class IS extends Xn{constructor(t=null,n=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(t=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(mi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(mi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=mi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,mi):mi.fromBufferAttribute(c,f),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),lc.copy(s.boundingBox)),lc.applyMatrix4(t.matrixWorld),this.union(lc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lo),cc.subVectors(this.max,Lo),lr.subVectors(t.a,Lo),cr.subVectors(t.b,Lo),ur.subVectors(t.c,Lo),za.subVectors(cr,lr),Ba.subVectors(ur,cr),ds.subVectors(lr,ur);let n=[0,-za.z,za.y,0,-Ba.z,Ba.y,0,-ds.z,ds.y,za.z,0,-za.x,Ba.z,0,-Ba.x,ds.z,0,-ds.x,-za.y,za.x,0,-Ba.y,Ba.x,0,-ds.y,ds.x,0];return!hh(n,lr,cr,ur,cc)||(n=[1,0,0,0,1,0,0,0,1],!hh(n,lr,cr,ur,cc))?!1:(uc.crossVectors(za,Ba),n=[uc.x,uc.y,uc.z],hh(n,lr,cr,ur,cc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ea=[new W,new W,new W,new W,new W,new W,new W,new W],mi=new W,lc=new jo,lr=new W,cr=new W,ur=new W,za=new W,Ba=new W,ds=new W,Lo=new W,cc=new W,uc=new W,ps=new W;function hh(r,t,n,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){ps.fromArray(r,c);const h=l.x*Math.abs(ps.x)+l.y*Math.abs(ps.y)+l.z*Math.abs(ps.z),p=t.dot(ps),m=n.dot(ps),g=s.dot(ps);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const FS=new jo,No=new W,dh=new W;class jc{constructor(t=new W,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):FS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;No.subVectors(t,this.center);const n=No.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),l=(s-this.radius)*.5;this.center.addScaledVector(No,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(No.copy(t.center).add(dh)),this.expandByPoint(No.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const na=new W,ph=new W,fc=new W,Ia=new W,mh=new W,hc=new W,gh=new W;class kd{constructor(t=new W,n=new W(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,na)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=na.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(na.copy(this.origin).addScaledVector(this.direction,n),na.distanceToSquared(t))}distanceSqToSegment(t,n,s,l){ph.copy(t).add(n).multiplyScalar(.5),fc.copy(n).sub(t).normalize(),Ia.copy(this.origin).sub(ph);const c=t.distanceTo(n)*.5,f=-this.direction.dot(fc),h=Ia.dot(this.direction),p=-Ia.dot(fc),m=Ia.lengthSq(),g=Math.abs(1-f*f);let _,x,y,E;if(g>0)if(_=f*p-h,x=f*h-p,E=c*g,_>=0)if(x>=-E)if(x<=E){const A=1/g;_*=A,x*=A,y=_*(_+f*x+2*h)+x*(f*_+x+2*p)+m}else x=c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*p)+m;else x=-c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*p)+m;else x<=-E?(_=Math.max(0,-(-f*c+h)),x=_>0?-c:Math.min(Math.max(-c,-p),c),y=-_*_+x*(x+2*p)+m):x<=E?(_=0,x=Math.min(Math.max(-c,-p),c),y=x*(x+2*p)+m):(_=Math.max(0,-(f*c+h)),x=_>0?c:Math.min(Math.max(-c,-p),c),y=-_*_+x*(x+2*p)+m);else x=f>0?-c:c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ph).addScaledVector(fc,x),y}intersectSphere(t,n){na.subVectors(t.center,this.origin);const s=na.dot(this.direction),l=na.dot(na)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,p=s+f;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,l,c,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(s=(t.min.x-x.x)*m,l=(t.max.x-x.x)*m):(s=(t.max.x-x.x)*m,l=(t.min.x-x.x)*m),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-x.z)*_,p=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,p=(t.min.z-x.z)*_),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,n)}intersectsBox(t){return this.intersectBox(t,na)!==null}intersectTriangle(t,n,s,l,c){mh.subVectors(n,t),hc.subVectors(s,t),gh.crossVectors(mh,hc);let f=this.direction.dot(gh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ia.subVectors(this.origin,t);const p=h*this.direction.dot(hc.crossVectors(Ia,hc));if(p<0)return null;const m=h*this.direction.dot(mh.cross(Ia));if(m<0||p+m>f)return null;const g=-h*Ia.dot(gh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(t,n,s,l,c,f,h,p,m,g,_,x,y,E,A,S){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,h,p,m,g,_,x,y,E,A,S)}set(t,n,s,l,c,f,h,p,m,g,_,x,y,E,A,S){const v=this.elements;return v[0]=t,v[4]=n,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=y,v[7]=E,v[11]=A,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,s=t.elements,l=1/fr.setFromMatrixColumn(t,0).length(),c=1/fr.setFromMatrixColumn(t,1).length(),f=1/fr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*l,n[1]=s[1]*l,n[2]=s[2]*l,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*f,n[9]=s[9]*f,n[10]=s[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=f*g,y=f*_,E=h*g,A=h*_;n[0]=p*g,n[4]=-p*_,n[8]=m,n[1]=y+E*m,n[5]=x-A*m,n[9]=-h*p,n[2]=A-x*m,n[6]=E+y*m,n[10]=f*p}else if(t.order==="YXZ"){const x=p*g,y=p*_,E=m*g,A=m*_;n[0]=x+A*h,n[4]=E*h-y,n[8]=f*m,n[1]=f*_,n[5]=f*g,n[9]=-h,n[2]=y*h-E,n[6]=A+x*h,n[10]=f*p}else if(t.order==="ZXY"){const x=p*g,y=p*_,E=m*g,A=m*_;n[0]=x-A*h,n[4]=-f*_,n[8]=E+y*h,n[1]=y+E*h,n[5]=f*g,n[9]=A-x*h,n[2]=-f*m,n[6]=h,n[10]=f*p}else if(t.order==="ZYX"){const x=f*g,y=f*_,E=h*g,A=h*_;n[0]=p*g,n[4]=E*m-y,n[8]=x*m+A,n[1]=p*_,n[5]=A*m+x,n[9]=y*m-E,n[2]=-m,n[6]=h*p,n[10]=f*p}else if(t.order==="YZX"){const x=f*p,y=f*m,E=h*p,A=h*m;n[0]=p*g,n[4]=A-x*_,n[8]=E*_+y,n[1]=_,n[5]=f*g,n[9]=-h*g,n[2]=-m*g,n[6]=y*_+E,n[10]=x-A*_}else if(t.order==="XZY"){const x=f*p,y=f*m,E=h*p,A=h*m;n[0]=p*g,n[4]=-_,n[8]=m*g,n[1]=x*_+A,n[5]=f*g,n[9]=y*_-E,n[2]=E*_-y,n[6]=h*g,n[10]=A*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(HS,t,GS)}lookAt(t,n,s){const l=this.elements;return $n.subVectors(t,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Fa.crossVectors(s,$n),Fa.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Fa.crossVectors(s,$n)),Fa.normalize(),dc.crossVectors($n,Fa),l[0]=Fa.x,l[4]=dc.x,l[8]=$n.x,l[1]=Fa.y,l[5]=dc.y,l[9]=$n.y,l[2]=Fa.z,l[6]=dc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],h=s[4],p=s[8],m=s[12],g=s[1],_=s[5],x=s[9],y=s[13],E=s[2],A=s[6],S=s[10],v=s[14],P=s[3],D=s[7],C=s[11],F=s[15],G=l[0],I=l[4],X=l[8],L=l[12],w=l[1],H=l[5],ct=l[9],rt=l[13],gt=l[2],ut=l[6],z=l[10],q=l[14],Z=l[3],Mt=l[7],N=l[11],J=l[15];return c[0]=f*G+h*w+p*gt+m*Z,c[4]=f*I+h*H+p*ut+m*Mt,c[8]=f*X+h*ct+p*z+m*N,c[12]=f*L+h*rt+p*q+m*J,c[1]=g*G+_*w+x*gt+y*Z,c[5]=g*I+_*H+x*ut+y*Mt,c[9]=g*X+_*ct+x*z+y*N,c[13]=g*L+_*rt+x*q+y*J,c[2]=E*G+A*w+S*gt+v*Z,c[6]=E*I+A*H+S*ut+v*Mt,c[10]=E*X+A*ct+S*z+v*N,c[14]=E*L+A*rt+S*q+v*J,c[3]=P*G+D*w+C*gt+F*Z,c[7]=P*I+D*H+C*ut+F*Mt,c[11]=P*X+D*ct+C*z+F*N,c[15]=P*L+D*rt+C*q+F*J,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],p=t[9],m=t[13],g=t[2],_=t[6],x=t[10],y=t[14],E=t[3],A=t[7],S=t[11],v=t[15];return E*(+c*p*_-l*m*_-c*h*x+s*m*x+l*h*y-s*p*y)+A*(+n*p*y-n*m*x+c*f*x-l*f*y+l*m*g-c*p*g)+S*(+n*m*_-n*h*y-c*f*_+s*f*y+c*h*g-s*m*g)+v*(-l*h*g-n*p*_+n*h*x+l*f*_-s*f*x+s*p*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=t[9],x=t[10],y=t[11],E=t[12],A=t[13],S=t[14],v=t[15],P=_*S*m-A*x*m+A*p*y-h*S*y-_*p*v+h*x*v,D=E*x*m-g*S*m-E*p*y+f*S*y+g*p*v-f*x*v,C=g*A*m-E*_*m+E*h*y-f*A*y-g*h*v+f*_*v,F=E*_*p-g*A*p-E*h*x+f*A*x+g*h*S-f*_*S,G=n*P+s*D+l*C+c*F;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/G;return t[0]=P*I,t[1]=(A*x*c-_*S*c-A*l*y+s*S*y+_*l*v-s*x*v)*I,t[2]=(h*S*c-A*p*c+A*l*m-s*S*m-h*l*v+s*p*v)*I,t[3]=(_*p*c-h*x*c-_*l*m+s*x*m+h*l*y-s*p*y)*I,t[4]=D*I,t[5]=(g*S*c-E*x*c+E*l*y-n*S*y-g*l*v+n*x*v)*I,t[6]=(E*p*c-f*S*c-E*l*m+n*S*m+f*l*v-n*p*v)*I,t[7]=(f*x*c-g*p*c+g*l*m-n*x*m-f*l*y+n*p*y)*I,t[8]=C*I,t[9]=(E*_*c-g*A*c-E*s*y+n*A*y+g*s*v-n*_*v)*I,t[10]=(f*A*c-E*h*c+E*s*m-n*A*m-f*s*v+n*h*v)*I,t[11]=(g*h*c-f*_*c-g*s*m+n*_*m+f*s*y-n*h*y)*I,t[12]=F*I,t[13]=(g*A*l-E*_*l+E*s*x-n*A*x-g*s*S+n*_*S)*I,t[14]=(E*h*l-f*A*l-E*s*p+n*A*p+f*s*S-n*h*S)*I,t[15]=(f*_*l-g*h*l+g*s*p-n*_*p-f*s*x+n*h*x)*I,this}scale(t){const n=this.elements,s=t.x,l=t.y,c=t.z;return n[0]*=s,n[4]*=l,n[8]*=c,n[1]*=s,n[5]*=l,n[9]*=c,n[2]*=s,n[6]*=l,n[10]*=c,n[3]*=s,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,l))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),l=Math.sin(n),c=1-s,f=t.x,h=t.y,p=t.z,m=c*f,g=c*h;return this.set(m*f+s,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+s,g*p-l*f,0,m*p-l*h,g*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,s){const l=this.elements,c=n._x,f=n._y,h=n._z,p=n._w,m=c+c,g=f+f,_=h+h,x=c*m,y=c*g,E=c*_,A=f*g,S=f*_,v=h*_,P=p*m,D=p*g,C=p*_,F=s.x,G=s.y,I=s.z;return l[0]=(1-(A+v))*F,l[1]=(y+C)*F,l[2]=(E-D)*F,l[3]=0,l[4]=(y-C)*G,l[5]=(1-(x+v))*G,l[6]=(S+P)*G,l[7]=0,l[8]=(E+D)*I,l[9]=(S-P)*I,l[10]=(1-(x+A))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,s){const l=this.elements;let c=fr.set(l[0],l[1],l[2]).length();const f=fr.set(l[4],l[5],l[6]).length(),h=fr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],gi.copy(this);const m=1/c,g=1/f,_=1/h;return gi.elements[0]*=m,gi.elements[1]*=m,gi.elements[2]*=m,gi.elements[4]*=g,gi.elements[5]*=g,gi.elements[6]*=g,gi.elements[8]*=_,gi.elements[9]*=_,gi.elements[10]*=_,n.setFromRotationMatrix(gi),s.x=c,s.y=f,s.z=h,this}makePerspective(t,n,s,l,c,f,h=la){const p=this.elements,m=2*c/(n-t),g=2*c/(s-l),_=(n+t)/(n-t),x=(s+l)/(s-l);let y,E;if(h===la)y=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===Xc)y=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,s,l,c,f,h=la){const p=this.elements,m=1/(n-t),g=1/(s-l),_=1/(f-c),x=(n+t)*m,y=(s+l)*g;let E,A;if(h===la)E=(f+c)*_,A=-2*_;else if(h===Xc)E=c*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=A,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<16;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const fr=new W,gi=new Ze,HS=new W(0,0,0),GS=new W(1,1,1),Fa=new W,dc=new W,$n=new W,k_=new Ze,X_=new bs;class Ni{constructor(t=0,n=0,s=0,l=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,l=this._order){return this._x=t,this._y=n,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],g=l[9],_=l[2],x=l[6],y=l[10];switch(n){case"XYZ":this._y=Math.asin(_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-_e(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(_e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return k_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(k_,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return X_.setFromEuler(this),this.setFromQuaternion(X_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class e0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let VS=0;const W_=new W,hr=new bs,ia=new Ze,pc=new W,Oo=new W,kS=new W,XS=new bs,q_=new W(1,0,0),Y_=new W(0,1,0),Z_=new W(0,0,1),j_={type:"added"},WS={type:"removed"},dr={type:"childadded",child:null},_h={type:"childremoved",child:null};class Rn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const t=new W,n=new Ni,s=new bs,l=new W(1,1,1);function c(){s.setFromEuler(n,!1)}function f(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new de}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new e0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return hr.setFromAxisAngle(t,n),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,n){return hr.setFromAxisAngle(t,n),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(q_,t)}rotateY(t){return this.rotateOnAxis(Y_,t)}rotateZ(t){return this.rotateOnAxis(Z_,t)}translateOnAxis(t,n){return W_.copy(t).applyQuaternion(this.quaternion),this.position.add(W_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(q_,t)}translateY(t){return this.translateOnAxis(Y_,t)}translateZ(t){return this.translateOnAxis(Z_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?pc.copy(t):pc.set(t,n,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(Oo,pc,this.up):ia.lookAt(pc,Oo,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),hr.setFromRotationMatrix(ia),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(j_),dr.child=t,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(WS),_h.child=t,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(j_),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,kS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,XS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(n){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),_=f(t.shapes),x=f(t.skeletons),y=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Rn.DEFAULT_UP=new W(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new W,aa=new W,vh=new W,sa=new W,pr=new W,mr=new W,K_=new W,xh=new W,yh=new W,Sh=new W,Mh=new $e,Eh=new $e,Th=new $e;class vi{constructor(t=new W,n=new W,s=new W){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,l){l.subVectors(s,n),_i.subVectors(t,n),l.cross(_i);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,s,l,c){_i.subVectors(l,n),aa.subVectors(s,n),vh.subVectors(t,n);const f=_i.dot(_i),h=_i.dot(aa),p=_i.dot(vh),m=aa.dot(aa),g=aa.dot(vh),_=f*m-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,y=(m*p-h*g)*x,E=(f*g-h*p)*x;return c.set(1-y-E,E,y)}static containsPoint(t,n,s,l){return this.getBarycoord(t,n,s,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,n,s,l,c,f,h,p){return this.getBarycoord(t,n,s,l,sa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,sa.x),p.addScaledVector(f,sa.y),p.addScaledVector(h,sa.z),p)}static getInterpolatedAttribute(t,n,s,l,c,f){return Mh.setScalar(0),Eh.setScalar(0),Th.setScalar(0),Mh.fromBufferAttribute(t,n),Eh.fromBufferAttribute(t,s),Th.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Mh,c.x),f.addScaledVector(Eh,c.y),f.addScaledVector(Th,c.z),f}static isFrontFacing(t,n,s,l){return _i.subVectors(s,n),aa.subVectors(t,n),_i.cross(aa).dot(l)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,l){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,s,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),_i.cross(aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return vi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,l,c){return vi.getInterpolation(t,this.a,this.b,this.c,n,s,l,c)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,l=this.b,c=this.c;let f,h;pr.subVectors(l,s),mr.subVectors(c,s),xh.subVectors(t,s);const p=pr.dot(xh),m=mr.dot(xh);if(p<=0&&m<=0)return n.copy(s);yh.subVectors(t,l);const g=pr.dot(yh),_=mr.dot(yh);if(g>=0&&_<=g)return n.copy(l);const x=p*_-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(s).addScaledVector(pr,f);Sh.subVectors(t,c);const y=pr.dot(Sh),E=mr.dot(Sh);if(E>=0&&y<=E)return n.copy(c);const A=y*m-p*E;if(A<=0&&m>=0&&E<=0)return h=m/(m-E),n.copy(s).addScaledVector(mr,h);const S=g*E-y*_;if(S<=0&&_-g>=0&&y-E>=0)return K_.subVectors(c,l),h=(_-g)/(_-g+(y-E)),n.copy(l).addScaledVector(K_,h);const v=1/(S+A+x);return f=A*v,h=x*v,n.copy(s).addScaledVector(pr,f).addScaledVector(mr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const n0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},mc={h:0,s:0,l:0};function bh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class Ee{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,n),this}setRGB(t,n,s,l=Ce.workingColorSpace){return this.r=t,this.g=n,this.b=s,Ce.colorSpaceToWorking(this,l),this}setHSL(t,n,s,l=Ce.workingColorSpace){if(t=RS(t,1),n=_e(n,0,1),s=_e(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,f=2*s-c;this.r=bh(f,c,t+1/3),this.g=bh(f,c,t),this.b=bh(f,c,t-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(t,n=ui){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ui){const s=n0[t.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return Ce.workingToColorSpace(Ln.copy(this),t),Math.round(_e(Ln.r*255,0,255))*65536+Math.round(_e(Ln.g*255,0,255))*256+Math.round(_e(Ln.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ce.workingColorSpace){Ce.workingToColorSpace(Ln.copy(this),n);const s=Ln.r,l=Ln.g,c=Ln.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const _=f-h;switch(m=g<=.5?_/(f+h):_/(2-f-h),f){case s:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-s)/_+2;break;case c:p=(s-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,n=Ce.workingColorSpace){return Ce.workingToColorSpace(Ln.copy(this),n),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=ui){Ce.workingToColorSpace(Ln.copy(this),t);const n=Ln.r,s=Ln.g,l=Ln.b;return t!==ui?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,n,s){return this.getHSL(Ha),this.setHSL(Ha.h+t,Ha.s+n,Ha.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(Ha),t.getHSL(mc);const s=oh(Ha.h,mc.h,n),l=oh(Ha.s,mc.s,n),c=oh(Ha.l,mc.l,n);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*l,this.g=c[1]*n+c[4]*s+c[7]*l,this.b=c[2]*n+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ee;Ee.NAMES=n0;let qS=0;class Or extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=Tr,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=kh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(s.blending=this.blending),this.side!==qa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Vh&&(s.blendSrc=this.blendSrc),this.blendDst!==kh&&(s.blendDst=this.blendDst),this.blendEquation!==ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const l=n.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class i0 extends Or{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new W,gc=new Lt;let YS=0;class Ui{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YS++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=B_,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)gc.fromBufferAttribute(this,n),gc.applyMatrix3(t),this.setXY(n,gc.x,gc.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix3(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=Uo(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=Hn(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Uo(n,this.array)),n}setX(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Uo(n,this.array)),n}setY(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Uo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Uo(n,this.array)),n}setW(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=Hn(n,this.array),s=Hn(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,l){return t*=this.itemSize,this.normalized&&(n=Hn(n,this.array),s=Hn(s,this.array),l=Hn(l,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,n,s,l,c){return t*=this.itemSize,this.normalized&&(n=Hn(n,this.array),s=Hn(s,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==B_&&(t.usage=this.usage),t}}class a0 extends Ui{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class s0 extends Ui{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class ei extends Ui{constructor(t,n,s){super(new Float32Array(t),n,s)}}let ZS=0;const ci=new Ze,Ah=new Rn,gr=new W,ti=new jo,Po=new jo,yn=new W;class Oi extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($v(t)?s0:a0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new de().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,n,s){return ci.makeTranslation(t,n,s),this.applyMatrix4(ci),this}scale(t,n,s){return ci.makeScale(t,n,s),this.applyMatrix4(ci),this}lookAt(t){return Ah.lookAt(t),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ei(s,3))}else{const s=Math.min(t.length,n.count);for(let l=0;l<s;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,l=n.length;s<l;s++){const c=n[s];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jc);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];Po.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ti.min,Po.min),ti.expandByPoint(yn),yn.addVectors(ti.max,Po.max),ti.expandByPoint(yn)):(ti.expandByPoint(Po.min),ti.expandByPoint(Po.max))}ti.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)yn.fromBufferAttribute(h,m),p&&(gr.fromBufferAttribute(t,m),yn.add(gr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let X=0;X<s.count;X++)h[X]=new W,p[X]=new W;const m=new W,g=new W,_=new W,x=new Lt,y=new Lt,E=new Lt,A=new W,S=new W;function v(X,L,w){m.fromBufferAttribute(s,X),g.fromBufferAttribute(s,L),_.fromBufferAttribute(s,w),x.fromBufferAttribute(c,X),y.fromBufferAttribute(c,L),E.fromBufferAttribute(c,w),g.sub(m),_.sub(m),y.sub(x),E.sub(x);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(H),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(H),h[X].add(A),h[L].add(A),h[w].add(A),p[X].add(S),p[L].add(S),p[w].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let X=0,L=P.length;X<L;++X){const w=P[X],H=w.start,ct=w.count;for(let rt=H,gt=H+ct;rt<gt;rt+=3)v(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const D=new W,C=new W,F=new W,G=new W;function I(X){F.fromBufferAttribute(l,X),G.copy(F);const L=h[X];D.copy(L),D.sub(F.multiplyScalar(F.dot(L))).normalize(),C.crossVectors(G,L);const H=C.dot(p[X])<0?-1:1;f.setXYZW(X,D.x,D.y,D.z,H)}for(let X=0,L=P.length;X<L;++X){const w=P[X],H=w.start,ct=w.count;for(let rt=H,gt=H+ct;rt<gt;rt+=3)I(t.getX(rt+0)),I(t.getX(rt+1)),I(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ui(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new W,c=new W,f=new W,h=new W,p=new W,m=new W,g=new W,_=new W;if(t)for(let x=0,y=t.count;x<y;x+=3){const E=t.getX(x+0),A=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,A),f.fromBufferAttribute(n,S),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,E),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,S),h.add(g),p.add(g),m.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,y=n.count;x<y;x+=3)l.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)yn.fromBufferAttribute(t,n),yn.normalize(),t.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,_=h.normalized,x=new m.constructor(p.length*g);let y=0,E=0;for(let A=0,S=p.length;A<S;A++){h.isInterleavedBufferAttribute?y=p[A]*h.data.stride+h.offset:y=p[A]*g;for(let v=0;v<g;v++)x[E++]=m[y++]}return new Ui(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Oi,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,s);n.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,_=m.length;g<_;g++){const x=m[g],y=t(x,s);p.push(y)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,x=m.length;_<x;_++){const y=m[_];g.push(y.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(n))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Q_=new Ze,ms=new kd,_c=new jc,J_=new W,vc=new W,xc=new W,yc=new W,Rh=new W,Sc=new W,$_=new W,Mc=new W;class Di extends Rn{constructor(t=new Oi,n=new i0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;n.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Sc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],_=c[p];g!==0&&(Rh.fromBufferAttribute(_,t),f?Sc.addScaledVector(Rh,g):Sc.addScaledVector(Rh.sub(n),g))}n.add(Sc)}return n}raycast(t,n){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),_c.copy(s.boundingSphere),_c.applyMatrix4(c),ms.copy(t.ray).recast(t.near),!(_c.containsPoint(ms.origin)===!1&&(ms.intersectSphere(_c,J_)===null||ms.origin.distanceToSquared(J_)>(t.far-t.near)**2))&&(Q_.copy(c).invert(),ms.copy(t.ray).applyMatrix4(Q_),!(s.boundingBox!==null&&ms.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,ms)))}_computeIntersections(t,n,s){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const S=x[E],v=f[S.materialIndex],P=Math.max(S.start,y.start),D=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let C=P,F=D;C<F;C+=3){const G=h.getX(C),I=h.getX(C+1),X=h.getX(C+2);l=Ec(this,v,t,s,m,g,_,G,I,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let S=E,v=A;S<v;S+=3){const P=h.getX(S),D=h.getX(S+1),C=h.getX(S+2);l=Ec(this,f,t,s,m,g,_,P,D,C),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const S=x[E],v=f[S.materialIndex],P=Math.max(S.start,y.start),D=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let C=P,F=D;C<F;C+=3){const G=C,I=C+1,X=C+2;l=Ec(this,v,t,s,m,g,_,G,I,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,n.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(p.count,y.start+y.count);for(let S=E,v=A;S<v;S+=3){const P=S,D=S+1,C=S+2;l=Ec(this,f,t,s,m,g,_,P,D,C),l&&(l.faceIndex=Math.floor(S/3),n.push(l))}}}}function jS(r,t,n,s,l,c,f,h){let p;if(t.side===kn?p=s.intersectTriangle(f,c,l,!0,h):p=s.intersectTriangle(l,c,f,t.side===qa,h),p===null)return null;Mc.copy(h),Mc.applyMatrix4(r.matrixWorld);const m=n.ray.origin.distanceTo(Mc);return m<n.near||m>n.far?null:{distance:m,point:Mc.clone(),object:r}}function Ec(r,t,n,s,l,c,f,h,p,m){r.getVertexPosition(h,vc),r.getVertexPosition(p,xc),r.getVertexPosition(m,yc);const g=jS(r,t,n,s,vc,xc,yc,$_);if(g){const _=new W;vi.getBarycoord($_,vc,xc,yc,_),l&&(g.uv=vi.getInterpolatedAttribute(l,h,p,m,_,new Lt)),c&&(g.uv1=vi.getInterpolatedAttribute(c,h,p,m,_,new Lt)),f&&(g.normal=vi.getInterpolatedAttribute(f,h,p,m,_,new W),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:p,c:m,normal:new W,materialIndex:0};vi.getNormal(vc,xc,yc,x.normal),g.face=x,g.barycoord=_}return g}class Ko extends Oi{constructor(t=1,n=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],_=[];let x=0,y=0;E("z","y","x",-1,-1,s,n,t,f,c,0),E("z","y","x",1,-1,s,n,-t,f,c,1),E("x","z","y",1,1,t,s,n,l,f,2),E("x","z","y",1,-1,t,s,-n,l,f,3),E("x","y","z",1,-1,t,n,s,l,c,4),E("x","y","z",-1,-1,t,n,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new ei(m,3)),this.setAttribute("normal",new ei(g,3)),this.setAttribute("uv",new ei(_,2));function E(A,S,v,P,D,C,F,G,I,X,L){const w=C/I,H=F/X,ct=C/2,rt=F/2,gt=G/2,ut=I+1,z=X+1;let q=0,Z=0;const Mt=new W;for(let N=0;N<z;N++){const J=N*H-rt;for(let xt=0;xt<ut;xt++){const yt=xt*w-ct;Mt[A]=yt*P,Mt[S]=J*D,Mt[v]=gt,m.push(Mt.x,Mt.y,Mt.z),Mt[A]=0,Mt[S]=0,Mt[v]=G>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),_.push(xt/I),_.push(1-N/X),q+=1}}for(let N=0;N<X;N++)for(let J=0;J<I;J++){const xt=x+J+ut*N,yt=x+J+ut*(N+1),Q=x+(J+1)+ut*(N+1),pt=x+(J+1)+ut*N;p.push(xt,yt,pt),p.push(yt,Q,pt),Z+=6}h.addGroup(y,Z,L),y+=Z,x+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ur(r){const t={};for(const n in r){t[n]={};for(const s in r[n]){const l=r[n][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=l.clone():Array.isArray(l)?t[n][s]=l.slice():t[n][s]=l}}return t}function On(r){const t={};for(let n=0;n<r.length;n++){const s=Ur(r[n]);for(const l in s)t[l]=s[l]}return t}function KS(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function r0(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const QS={clone:Ur,merge:On};var JS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$S=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ya extends Or{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JS,this.fragmentShader=$S,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ur(t.uniforms),this.uniformsGroups=KS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class o0 extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=la}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new W,tv=new Lt,ev=new Lt;class fi extends o0{constructor(t=50,n=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Rd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(Gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z)}getViewSize(t,n){return this.getViewBounds(t,tv,ev),n.subVectors(ev,tv)}setViewOffset(t,n,s,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Gc*.5*this.fov)/this.zoom,s=2*n,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,n-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _r=-90,vr=1;class tM extends Rn{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(_r,vr,t,n);l.layers=this.layers,this.add(l);const c=new fi(_r,vr,t,n);c.layers=this.layers,this.add(c);const f=new fi(_r,vr,t,n);f.layers=this.layers,this.add(f);const h=new fi(_r,vr,t,n);h.layers=this.layers,this.add(h);const p=new fi(_r,vr,t,n);p.layers=this.layers,this.add(p);const m=new fi(_r,vr,t,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,l,c,f,h,p]=n;for(const m of n)this.remove(m);if(t===la)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Xc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of n)this.add(m),m.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(n,c),t.setRenderTarget(s,1,l),t.render(n,f),t.setRenderTarget(s,2,l),t.render(n,h),t.setRenderTarget(s,3,l),t.render(n,p),t.setRenderTarget(s,4,l),t.render(n,m),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(n,g),t.setRenderTarget(_,x,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class l0 extends Xn{constructor(t=[],n=Cr,s,l,c,f,h,p,m,g){super(t,n,s,l,c,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class eM extends As{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new l0(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ko(5,5,5),c=new Ya({name:"CubemapFromEquirect",uniforms:Ur(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Xa});c.uniforms.tEquirect.value=n;const f=new Di(l,c),h=n.minFilter;return n.minFilter===Es&&(n.minFilter=wi),new tM(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,s,l);t.setRenderTarget(c)}}class Tc extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nM={type:"move"};class Ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const A of t.hand.values()){const S=n.getJointPose(A,s),v=this._getHandJoint(m,A);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,E=.005;m.inputState.pinching&&x>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=n.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(nM)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new Tc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class iM extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const wh=new W,aM=new W,sM=new de;class Va{constructor(t=new W(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,l){return this.normal.set(t,n,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const l=wh.subVectors(s,n).cross(aM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(wh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||sM.getNormalMatrix(t),l=this.coplanarPoint(wh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new jc,rM=new Lt(.5,.5),bc=new W;class Xd{constructor(t=new Va,n=new Va,s=new Va,l=new Va,c=new Va,f=new Va){this.planes=[t,n,s,l,c,f]}set(t,n,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=la){const s=this.planes,l=t.elements,c=l[0],f=l[1],h=l[2],p=l[3],m=l[4],g=l[5],_=l[6],x=l[7],y=l[8],E=l[9],A=l[10],S=l[11],v=l[12],P=l[13],D=l[14],C=l[15];if(s[0].setComponents(p-c,x-m,S-y,C-v).normalize(),s[1].setComponents(p+c,x+m,S+y,C+v).normalize(),s[2].setComponents(p+f,x+g,S+E,C+P).normalize(),s[3].setComponents(p-f,x-g,S-E,C-P).normalize(),s[4].setComponents(p-h,x-_,S-A,C-D).normalize(),n===la)s[5].setComponents(p+h,x+_,S+A,C+D).normalize();else if(n===Xc)s[5].setComponents(h,_,A,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);const n=rM.distanceTo(t.center);return gs.radius=.7071067811865476+n,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const n=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const l=n[s];if(bc.x=l.normal.x>0?t.max.x:t.min.x,bc.y=l.normal.y>0?t.max.y:t.min.y,bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class c0 extends Or{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qc=new W,Yc=new W,nv=new Ze,zo=new kd,Ac=new jc,Dh=new W,iv=new W;class oM extends Rn{constructor(t=new Oi,n=new c0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[0];for(let l=1,c=n.count;l<c;l++)qc.fromBufferAttribute(n,l-1),Yc.fromBufferAttribute(n,l),s[l]=s[l-1],s[l]+=qc.distanceTo(Yc);t.setAttribute("lineDistance",new ei(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(l),Ac.radius+=c,t.ray.intersectsSphere(Ac)===!1)return;nv.copy(l).invert(),zo.copy(t.ray).applyMatrix4(nv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const y=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let A=y,S=E-1;A<S;A+=m){const v=g.getX(A),P=g.getX(A+1),D=Rc(this,t,zo,p,v,P,A);D&&n.push(D)}if(this.isLineLoop){const A=g.getX(E-1),S=g.getX(y),v=Rc(this,t,zo,p,A,S,E-1);v&&n.push(v)}}else{const y=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let A=y,S=E-1;A<S;A+=m){const v=Rc(this,t,zo,p,A,A+1,A);v&&n.push(v)}if(this.isLineLoop){const A=Rc(this,t,zo,p,E-1,y,E-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Rc(r,t,n,s,l,c,f){const h=r.geometry.attributes.position;if(qc.fromBufferAttribute(h,l),Yc.fromBufferAttribute(h,c),n.distanceSqToSegment(qc,Yc,Dh,iv)>s)return;Dh.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(Dh);if(!(m<t.near||m>t.far))return{distance:m,point:iv.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const av=new W,sv=new W;class lM extends oM{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[];for(let l=0,c=n.count;l<c;l+=2)av.fromBufferAttribute(n,l),sv.fromBufferAttribute(n,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+av.distanceTo(sv);t.setAttribute("lineDistance",new ei(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class u0 extends Xn{constructor(t,n,s=Ts,l,c,f,h=yi,p=yi,m,g=ko,_=1){if(g!==ko&&g!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:n,depth:_};super(x,l,c,f,h,p,g,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Pi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){const s=this.getUtoTmapping(t);return this.getPoint(s,n)}getPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPoint(s/t));return n}getSpacedPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPointAt(s/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let s,l=this.getPoint(0),c=0;n.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),n.push(c),l=s;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const s=this.getLengths();let l=0;const c=s.length;let f;n?f=n:f=t*s[c-1];let h=0,p=c-1,m;for(;h<=p;)if(l=Math.floor(h+(p-h)/2),m=s[l]-f,m<0)h=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===f)return l/(c-1);const g=s[l],x=s[l+1]-g,y=(f-g)/x;return(l+y)/(c-1)}getTangent(t,n){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),p=n||(f.isVector2?new Lt:new W);return p.copy(h).sub(f).normalize(),p}getTangentAt(t,n){const s=this.getUtoTmapping(t);return this.getTangent(s,n)}computeFrenetFrames(t,n=!1){const s=new W,l=[],c=[],f=[],h=new W,p=new Ze;for(let y=0;y<=t;y++){const E=y/t;l[y]=this.getTangentAt(E,new W)}c[0]=new W,f[0]=new W;let m=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),x=Math.abs(l[0].z);g<=m&&(m=g,s.set(1,0,0)),_<=m&&(m=_,s.set(0,1,0)),x<=m&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),h.crossVectors(l[y-1],l[y]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(_e(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(p.makeRotationAxis(h,E))}f[y].crossVectors(l[y],c[y])}if(n===!0){let y=Math.acos(_e(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],y*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wd extends Pi{constructor(t=0,n=0,s=1,l=1,c=0,f=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=p}getPoint(t,n=new Lt){const s=n,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const h=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),x=p-this.aX,y=m-this.aY;p=x*g-y*_+this.aX,m=x*_+y*g+this.aY}return s.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class cM extends Wd{constructor(t,n,s,l,c,f){super(t,n,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function qd(){let r=0,t=0,n=0,s=0;function l(c,f,h,p){r=c,t=h,n=-3*c+3*f-2*h-p,s=2*c-2*f+h+p}return{initCatmullRom:function(c,f,h,p,m){l(f,h,m*(h-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,h,p,m,g,_){let x=(f-c)/m-(h-c)/(m+g)+(h-f)/g,y=(h-f)/g-(p-f)/(g+_)+(p-h)/_;x*=g,y*=g,l(f,h,x,y)},calc:function(c){const f=c*c,h=f*c;return r+t*c+n*f+s*h}}}const Cc=new W,Uh=new qd,Lh=new qd,Nh=new qd;class uM extends Pi{constructor(t=[],n=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=s,this.tension=l}getPoint(t,n=new W){const s=n,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),p=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:p===0&&h===c-1&&(h=c-2,p=1);let m,g;this.closed||h>0?m=l[(h-1)%c]:(Cc.subVectors(l[0],l[1]).add(l[0]),m=Cc);const _=l[h%c],x=l[(h+1)%c];if(this.closed||h+2<c?g=l[(h+2)%c]:(Cc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Cc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(_),y),A=Math.pow(_.distanceToSquared(x),y),S=Math.pow(x.distanceToSquared(g),y);A<1e-4&&(A=1),E<1e-4&&(E=A),S<1e-4&&(S=A),Uh.initNonuniformCatmullRom(m.x,_.x,x.x,g.x,E,A,S),Lh.initNonuniformCatmullRom(m.y,_.y,x.y,g.y,E,A,S),Nh.initNonuniformCatmullRom(m.z,_.z,x.z,g.z,E,A,S)}else this.curveType==="catmullrom"&&(Uh.initCatmullRom(m.x,_.x,x.x,g.x,this.tension),Lh.initCatmullRom(m.y,_.y,x.y,g.y,this.tension),Nh.initCatmullRom(m.z,_.z,x.z,g.z,this.tension));return s.set(Uh.calc(p),Lh.calc(p),Nh.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const l=this.points[n];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(new W().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rv(r,t,n,s,l){const c=(s-t)*.5,f=(l-n)*.5,h=r*r,p=r*h;return(2*n-2*s+c+f)*p+(-3*n+3*s-2*c-f)*h+c*r+n}function fM(r,t){const n=1-r;return n*n*t}function hM(r,t){return 2*(1-r)*r*t}function dM(r,t){return r*r*t}function Fo(r,t,n,s){return fM(r,t)+hM(r,n)+dM(r,s)}function pM(r,t){const n=1-r;return n*n*n*t}function mM(r,t){const n=1-r;return 3*n*n*r*t}function gM(r,t){return 3*(1-r)*r*r*t}function _M(r,t){return r*r*r*t}function Ho(r,t,n,s,l){return pM(r,t)+mM(r,n)+gM(r,s)+_M(r,l)}class f0 extends Pi{constructor(t=new Lt,n=new Lt,s=new Lt,l=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=s,this.v3=l}getPoint(t,n=new Lt){const s=n,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return s.set(Ho(t,l.x,c.x,f.x,h.x),Ho(t,l.y,c.y,f.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vM extends Pi{constructor(t=new W,n=new W,s=new W,l=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=s,this.v3=l}getPoint(t,n=new W){const s=n,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return s.set(Ho(t,l.x,c.x,f.x,h.x),Ho(t,l.y,c.y,f.y,h.y),Ho(t,l.z,c.z,f.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class h0 extends Pi{constructor(t=new Lt,n=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Lt){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Lt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xM extends Pi{constructor(t=new W,n=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new W){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new W){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class d0 extends Pi{constructor(t=new Lt,n=new Lt,s=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new Lt){const s=n,l=this.v0,c=this.v1,f=this.v2;return s.set(Fo(t,l.x,c.x,f.x),Fo(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yM extends Pi{constructor(t=new W,n=new W,s=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new W){const s=n,l=this.v0,c=this.v1,f=this.v2;return s.set(Fo(t,l.x,c.x,f.x),Fo(t,l.y,c.y,f.y),Fo(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class p0 extends Pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Lt){const s=n,l=this.points,c=(l.length-1)*t,f=Math.floor(c),h=c-f,p=l[f===0?f:f-1],m=l[f],g=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return s.set(rv(h,p.x,m.x,g.x,_.x),rv(h,p.y,m.y,g.y,_.y)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const l=this.points[n];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const l=t.points[n];this.points.push(new Lt().fromArray(l))}return this}}var Cd=Object.freeze({__proto__:null,ArcCurve:cM,CatmullRomCurve3:uM,CubicBezierCurve:f0,CubicBezierCurve3:vM,EllipseCurve:Wd,LineCurve:h0,LineCurve3:xM,QuadraticBezierCurve:d0,QuadraticBezierCurve3:yM,SplineCurve:p0});class SM extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cd[s](n,t))}return this}getPoint(t,n){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const f=l[c]-s,h=this.curves[c],p=h.getLength(),m=p===0?0:1-f/p;return h.getPointAt(m,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let s=0,l=this.curves.length;s<l;s++)n+=this.curves[s].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let s=0;s<=t;s++)n.push(this.getPoint(s/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],h=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,p=f.getPoints(h);for(let m=0;m<p.length;m++){const g=p[m];s&&s.equals(g)||(n.push(g),s=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,s=t.curves.length;n<s;n++){const l=t.curves[n];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,s=this.curves.length;n<s;n++){const l=this.curves[n];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,s=t.curves.length;n<s;n++){const l=t.curves[n];this.curves.push(new Cd[l.type]().fromJSON(l))}return this}}class wd extends SM{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,s=t.length;n<s;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const s=new h0(this.currentPoint.clone(),new Lt(t,n));return this.curves.push(s),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,s,l){const c=new d0(this.currentPoint.clone(),new Lt(t,n),new Lt(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,n,s,l,c,f){const h=new f0(this.currentPoint.clone(),new Lt(t,n),new Lt(s,l),new Lt(c,f));return this.curves.push(h),this.currentPoint.set(c,f),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),s=new p0(n);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,s,l,c,f){const h=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+h,n+p,s,l,c,f),this}absarc(t,n,s,l,c,f){return this.absellipse(t,n,s,s,l,c,f),this}ellipse(t,n,s,l,c,f,h,p){const m=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+m,n+g,s,l,c,f,h,p),this}absellipse(t,n,s,l,c,f,h,p){const m=new Wd(t,n,s,l,c,f,h,p);if(this.curves.length>0){const _=m.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(m);const g=m.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class m0 extends wd{constructor(t){super(t),this.uuid=Nr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let s=0,l=this.holes.length;s<l;s++)n[s]=this.holes[s].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,s=t.holes.length;n<s;n++){const l=t.holes[n];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,s=this.holes.length;n<s;n++){const l=this.holes[n];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,s=t.holes.length;n<s;n++){const l=t.holes[n];this.holes.push(new wd().fromJSON(l))}return this}}function MM(r,t,n=2){const s=t&&t.length,l=s?t[0]*n:r.length;let c=g0(r,0,l,n,!0);const f=[];if(!c||c.next===c.prev)return f;let h,p,m;if(s&&(c=RM(r,t,c,n)),r.length>80*n){h=1/0,p=1/0;let g=-1/0,_=-1/0;for(let x=n;x<l;x+=n){const y=r[x],E=r[x+1];y<h&&(h=y),E<p&&(p=E),y>g&&(g=y),E>_&&(_=E)}m=Math.max(g-h,_-p),m=m!==0?32767/m:0}return Wo(c,f,n,h,p,m,0),f}function g0(r,t,n,s,l){let c;if(l===IM(r,t,n,s)>0)for(let f=t;f<n;f+=s)c=ov(f/s|0,r[f],r[f+1],c);else for(let f=n-s;f>=t;f-=s)c=ov(f/s|0,r[f],r[f+1],c);return c&&Lr(c,c.next)&&(Yo(c),c=c.next),c}function Rs(r,t){if(!r)return r;t||(t=r);let n=r,s;do if(s=!1,!n.steiner&&(Lr(n,n.next)||Ke(n.prev,n,n.next)===0)){if(Yo(n),n=t=n.prev,n===n.next)break;s=!0}else n=n.next;while(s||n!==t);return t}function Wo(r,t,n,s,l,c,f){if(!r)return;!f&&c&&LM(r,s,l,c);let h=r;for(;r.prev!==r.next;){const p=r.prev,m=r.next;if(c?TM(r,s,l,c):EM(r)){t.push(p.i,r.i,m.i),Yo(r),r=m.next,h=m.next;continue}if(r=m,r===h){f?f===1?(r=bM(Rs(r),t),Wo(r,t,n,s,l,c,2)):f===2&&AM(r,t,n,s,l,c):Wo(Rs(r),t,n,s,l,c,1);break}}}function EM(r){const t=r.prev,n=r,s=r.next;if(Ke(t,n,s)>=0)return!1;const l=t.x,c=n.x,f=s.x,h=t.y,p=n.y,m=s.y,g=Math.min(l,c,f),_=Math.min(h,p,m),x=Math.max(l,c,f),y=Math.max(h,p,m);let E=s.next;for(;E!==t;){if(E.x>=g&&E.x<=x&&E.y>=_&&E.y<=y&&Bo(l,h,c,p,f,m,E.x,E.y)&&Ke(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function TM(r,t,n,s){const l=r.prev,c=r,f=r.next;if(Ke(l,c,f)>=0)return!1;const h=l.x,p=c.x,m=f.x,g=l.y,_=c.y,x=f.y,y=Math.min(h,p,m),E=Math.min(g,_,x),A=Math.max(h,p,m),S=Math.max(g,_,x),v=Dd(y,E,t,n,s),P=Dd(A,S,t,n,s);let D=r.prevZ,C=r.nextZ;for(;D&&D.z>=v&&C&&C.z<=P;){if(D.x>=y&&D.x<=A&&D.y>=E&&D.y<=S&&D!==l&&D!==f&&Bo(h,g,p,_,m,x,D.x,D.y)&&Ke(D.prev,D,D.next)>=0||(D=D.prevZ,C.x>=y&&C.x<=A&&C.y>=E&&C.y<=S&&C!==l&&C!==f&&Bo(h,g,p,_,m,x,C.x,C.y)&&Ke(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;D&&D.z>=v;){if(D.x>=y&&D.x<=A&&D.y>=E&&D.y<=S&&D!==l&&D!==f&&Bo(h,g,p,_,m,x,D.x,D.y)&&Ke(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;C&&C.z<=P;){if(C.x>=y&&C.x<=A&&C.y>=E&&C.y<=S&&C!==l&&C!==f&&Bo(h,g,p,_,m,x,C.x,C.y)&&Ke(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function bM(r,t){let n=r;do{const s=n.prev,l=n.next.next;!Lr(s,l)&&v0(s,n,n.next,l)&&qo(s,l)&&qo(l,s)&&(t.push(s.i,n.i,l.i),Yo(n),Yo(n.next),n=r=l),n=n.next}while(n!==r);return Rs(n)}function AM(r,t,n,s,l,c){let f=r;do{let h=f.next.next;for(;h!==f.prev;){if(f.i!==h.i&&PM(f,h)){let p=x0(f,h);f=Rs(f,f.next),p=Rs(p,p.next),Wo(f,t,n,s,l,c,0),Wo(p,t,n,s,l,c,0);return}h=h.next}f=f.next}while(f!==r)}function RM(r,t,n,s){const l=[];for(let c=0,f=t.length;c<f;c++){const h=t[c]*s,p=c<f-1?t[c+1]*s:r.length,m=g0(r,h,p,s,!1);m===m.next&&(m.steiner=!0),l.push(OM(m))}l.sort(CM);for(let c=0;c<l.length;c++)n=wM(l[c],n);return n}function CM(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);n=s-l}return n}function wM(r,t){const n=DM(r,t);if(!n)return t;const s=x0(n,r);return Rs(s,s.next),Rs(n,n.next)}function DM(r,t){let n=t;const s=r.x,l=r.y;let c=-1/0,f;if(Lr(r,n))return n;do{if(Lr(r,n.next))return n.next;if(l<=n.y&&l>=n.next.y&&n.next.y!==n.y){const _=n.x+(l-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(_<=s&&_>c&&(c=_,f=n.x<n.next.x?n:n.next,_===s))return f}n=n.next}while(n!==t);if(!f)return null;const h=f,p=f.x,m=f.y;let g=1/0;n=f;do{if(s>=n.x&&n.x>=p&&s!==n.x&&_0(l<m?s:c,l,p,m,l<m?c:s,l,n.x,n.y)){const _=Math.abs(l-n.y)/(s-n.x);qo(n,r)&&(_<g||_===g&&(n.x>f.x||n.x===f.x&&UM(f,n)))&&(f=n,g=_)}n=n.next}while(n!==h);return f}function UM(r,t){return Ke(r.prev,r,t.prev)<0&&Ke(t.next,r,r.next)<0}function LM(r,t,n,s){let l=r;do l.z===0&&(l.z=Dd(l.x,l.y,t,n,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,NM(l)}function NM(r){let t,n=1;do{let s=r,l;r=null;let c=null;for(t=0;s;){t++;let f=s,h=0;for(let m=0;m<n&&(h++,f=f.nextZ,!!f);m++);let p=n;for(;h>0||p>0&&f;)h!==0&&(p===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,h--):(l=f,f=f.nextZ,p--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;s=f}c.nextZ=null,n*=2}while(t>1);return r}function Dd(r,t,n,s,l){return r=(r-n)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function OM(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function _0(r,t,n,s,l,c,f,h){return(l-f)*(t-h)>=(r-f)*(c-h)&&(r-f)*(s-h)>=(n-f)*(t-h)&&(n-f)*(c-h)>=(l-f)*(s-h)}function Bo(r,t,n,s,l,c,f,h){return!(r===f&&t===h)&&_0(r,t,n,s,l,c,f,h)}function PM(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!zM(r,t)&&(qo(r,t)&&qo(t,r)&&BM(r,t)&&(Ke(r.prev,r,t.prev)||Ke(r,t.prev,t))||Lr(r,t)&&Ke(r.prev,r,r.next)>0&&Ke(t.prev,t,t.next)>0)}function Ke(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function Lr(r,t){return r.x===t.x&&r.y===t.y}function v0(r,t,n,s){const l=Dc(Ke(r,t,n)),c=Dc(Ke(r,t,s)),f=Dc(Ke(n,s,r)),h=Dc(Ke(n,s,t));return!!(l!==c&&f!==h||l===0&&wc(r,n,t)||c===0&&wc(r,s,t)||f===0&&wc(n,r,s)||h===0&&wc(n,t,s))}function wc(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function Dc(r){return r>0?1:r<0?-1:0}function zM(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&v0(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function qo(r,t){return Ke(r.prev,r,r.next)<0?Ke(r,t,r.next)>=0&&Ke(r,r.prev,t)>=0:Ke(r,t,r.prev)<0||Ke(r,r.next,t)<0}function BM(r,t){let n=r,s=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&l<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==r);return s}function x0(r,t){const n=Ud(r.i,r.x,r.y),s=Ud(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=l,l.prev=n,s.next=n,n.prev=s,c.next=s,s.prev=c,s}function ov(r,t,n,s){const l=Ud(r,t,n);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function Yo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ud(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function IM(r,t,n,s){let l=0;for(let c=t,f=n-s;c<n;c+=s)l+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return l}class FM{static triangulate(t,n,s=2){return MM(t,n,s)}}class Sr{static area(t){const n=t.length;let s=0;for(let l=n-1,c=0;c<n;l=c++)s+=t[l].x*t[c].y-t[c].x*t[l].y;return s*.5}static isClockWise(t){return Sr.area(t)<0}static triangulateShape(t,n){const s=[],l=[],c=[];lv(t),cv(s,t);let f=t.length;n.forEach(lv);for(let p=0;p<n.length;p++)l.push(f),f+=n[p].length,cv(s,n[p]);const h=FM.triangulate(s,l);for(let p=0;p<h.length;p+=3)c.push(h.slice(p,p+3));return c}}function lv(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function cv(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class Yd extends Oi{constructor(t=new m0([new Lt(.5,.5),new Lt(-.5,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const s=this,l=[],c=[];for(let h=0,p=t.length;h<p;h++){const m=t[h];f(m)}this.setAttribute("position",new ei(l,3)),this.setAttribute("uv",new ei(c,2)),this.computeVertexNormals();function f(h){const p=[],m=n.curveSegments!==void 0?n.curveSegments:12,g=n.steps!==void 0?n.steps:1,_=n.depth!==void 0?n.depth:1;let x=n.bevelEnabled!==void 0?n.bevelEnabled:!0,y=n.bevelThickness!==void 0?n.bevelThickness:.2,E=n.bevelSize!==void 0?n.bevelSize:y-.1,A=n.bevelOffset!==void 0?n.bevelOffset:0,S=n.bevelSegments!==void 0?n.bevelSegments:3;const v=n.extrudePath,P=n.UVGenerator!==void 0?n.UVGenerator:HM;let D,C=!1,F,G,I,X;v&&(D=v.getSpacedPoints(g),C=!0,x=!1,F=v.computeFrenetFrames(g,!1),G=new W,I=new W,X=new W),x||(S=0,y=0,E=0,A=0);const L=h.extractPoints(m);let w=L.shape;const H=L.holes;if(!Sr.isClockWise(w)){w=w.reverse();for(let U=0,Ut=H.length;U<Ut;U++){const bt=H[U];Sr.isClockWise(bt)&&(H[U]=bt.reverse())}}function rt(U){const bt=10000000000000001e-36;let wt=U[0];for(let mt=1;mt<=U.length;mt++){const Wt=mt%U.length,Rt=U[Wt],Gt=Rt.x-wt.x,fe=Rt.y-wt.y,O=Gt*Gt+fe*fe,T=Math.max(Math.abs(Rt.x),Math.abs(Rt.y),Math.abs(wt.x),Math.abs(wt.y)),tt=bt*T*T;if(O<=tt){U.splice(Wt,1),mt--;continue}wt=Rt}}rt(w),H.forEach(rt);const gt=H.length,ut=w;for(let U=0;U<gt;U++){const Ut=H[U];w=w.concat(Ut)}function z(U,Ut,bt){return Ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(Ut,bt)}const q=w.length;function Z(U,Ut,bt){let wt,mt,Wt;const Rt=U.x-Ut.x,Gt=U.y-Ut.y,fe=bt.x-U.x,O=bt.y-U.y,T=Rt*Rt+Gt*Gt,tt=Rt*O-Gt*fe;if(Math.abs(tt)>Number.EPSILON){const ot=Math.sqrt(T),ht=Math.sqrt(fe*fe+O*O),lt=Ut.x-Gt/ot,Ft=Ut.y+Rt/ot,Pt=bt.x-O/ht,Zt=bt.y+fe/ht,jt=((Pt-lt)*O-(Zt-Ft)*fe)/(Rt*O-Gt*fe);wt=lt+Rt*jt-U.x,mt=Ft+Gt*jt-U.y;const St=wt*wt+mt*mt;if(St<=2)return new Lt(wt,mt);Wt=Math.sqrt(St/2)}else{let ot=!1;Rt>Number.EPSILON?fe>Number.EPSILON&&(ot=!0):Rt<-Number.EPSILON?fe<-Number.EPSILON&&(ot=!0):Math.sign(Gt)===Math.sign(O)&&(ot=!0),ot?(wt=-Gt,mt=Rt,Wt=Math.sqrt(T)):(wt=Rt,mt=Gt,Wt=Math.sqrt(T/2))}return new Lt(wt/Wt,mt/Wt)}const Mt=[];for(let U=0,Ut=ut.length,bt=Ut-1,wt=U+1;U<Ut;U++,bt++,wt++)bt===Ut&&(bt=0),wt===Ut&&(wt=0),Mt[U]=Z(ut[U],ut[bt],ut[wt]);const N=[];let J,xt=Mt.concat();for(let U=0,Ut=gt;U<Ut;U++){const bt=H[U];J=[];for(let wt=0,mt=bt.length,Wt=mt-1,Rt=wt+1;wt<mt;wt++,Wt++,Rt++)Wt===mt&&(Wt=0),Rt===mt&&(Rt=0),J[wt]=Z(bt[wt],bt[Wt],bt[Rt]);N.push(J),xt=xt.concat(J)}let yt;if(S===0)yt=Sr.triangulateShape(ut,H);else{const U=[],Ut=[];for(let bt=0;bt<S;bt++){const wt=bt/S,mt=y*Math.cos(wt*Math.PI/2),Wt=E*Math.sin(wt*Math.PI/2)+A;for(let Rt=0,Gt=ut.length;Rt<Gt;Rt++){const fe=z(ut[Rt],Mt[Rt],Wt);ae(fe.x,fe.y,-mt),wt===0&&U.push(fe)}for(let Rt=0,Gt=gt;Rt<Gt;Rt++){const fe=H[Rt];J=N[Rt];const O=[];for(let T=0,tt=fe.length;T<tt;T++){const ot=z(fe[T],J[T],Wt);ae(ot.x,ot.y,-mt),wt===0&&O.push(ot)}wt===0&&Ut.push(O)}}yt=Sr.triangulateShape(U,Ut)}const Q=yt.length,pt=E+A;for(let U=0;U<q;U++){const Ut=x?z(w[U],xt[U],pt):w[U];C?(I.copy(F.normals[0]).multiplyScalar(Ut.x),G.copy(F.binormals[0]).multiplyScalar(Ut.y),X.copy(D[0]).add(I).add(G),ae(X.x,X.y,X.z)):ae(Ut.x,Ut.y,0)}for(let U=1;U<=g;U++)for(let Ut=0;Ut<q;Ut++){const bt=x?z(w[Ut],xt[Ut],pt):w[Ut];C?(I.copy(F.normals[U]).multiplyScalar(bt.x),G.copy(F.binormals[U]).multiplyScalar(bt.y),X.copy(D[U]).add(I).add(G),ae(X.x,X.y,X.z)):ae(bt.x,bt.y,_/g*U)}for(let U=S-1;U>=0;U--){const Ut=U/S,bt=y*Math.cos(Ut*Math.PI/2),wt=E*Math.sin(Ut*Math.PI/2)+A;for(let mt=0,Wt=ut.length;mt<Wt;mt++){const Rt=z(ut[mt],Mt[mt],wt);ae(Rt.x,Rt.y,_+bt)}for(let mt=0,Wt=H.length;mt<Wt;mt++){const Rt=H[mt];J=N[mt];for(let Gt=0,fe=Rt.length;Gt<fe;Gt++){const O=z(Rt[Gt],J[Gt],wt);C?ae(O.x,O.y+D[g-1].y,D[g-1].x+bt):ae(O.x,O.y,_+bt)}}}Et(),Dt();function Et(){const U=l.length/3;if(x){let Ut=0,bt=q*Ut;for(let wt=0;wt<Q;wt++){const mt=yt[wt];Jt(mt[2]+bt,mt[1]+bt,mt[0]+bt)}Ut=g+S*2,bt=q*Ut;for(let wt=0;wt<Q;wt++){const mt=yt[wt];Jt(mt[0]+bt,mt[1]+bt,mt[2]+bt)}}else{for(let Ut=0;Ut<Q;Ut++){const bt=yt[Ut];Jt(bt[2],bt[1],bt[0])}for(let Ut=0;Ut<Q;Ut++){const bt=yt[Ut];Jt(bt[0]+q*g,bt[1]+q*g,bt[2]+q*g)}}s.addGroup(U,l.length/3-U,0)}function Dt(){const U=l.length/3;let Ut=0;Nt(ut,Ut),Ut+=ut.length;for(let bt=0,wt=H.length;bt<wt;bt++){const mt=H[bt];Nt(mt,Ut),Ut+=mt.length}s.addGroup(U,l.length/3-U,1)}function Nt(U,Ut){let bt=U.length;for(;--bt>=0;){const wt=bt;let mt=bt-1;mt<0&&(mt=U.length-1);for(let Wt=0,Rt=g+S*2;Wt<Rt;Wt++){const Gt=q*Wt,fe=q*(Wt+1),O=Ut+wt+Gt,T=Ut+mt+Gt,tt=Ut+mt+fe,ot=Ut+wt+fe;De(O,T,tt,ot)}}}function ae(U,Ut,bt){p.push(U),p.push(Ut),p.push(bt)}function Jt(U,Ut,bt){ye(U),ye(Ut),ye(bt);const wt=l.length/3,mt=P.generateTopUV(s,l,wt-3,wt-2,wt-1);ue(mt[0]),ue(mt[1]),ue(mt[2])}function De(U,Ut,bt,wt){ye(U),ye(Ut),ye(wt),ye(Ut),ye(bt),ye(wt);const mt=l.length/3,Wt=P.generateSideWallUV(s,l,mt-6,mt-3,mt-2,mt-1);ue(Wt[0]),ue(Wt[1]),ue(Wt[3]),ue(Wt[1]),ue(Wt[2]),ue(Wt[3])}function ye(U){l.push(p[U*3+0]),l.push(p[U*3+1]),l.push(p[U*3+2])}function ue(U){c.push(U.x),c.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,s=this.parameters.options;return GM(n,s,t)}static fromJSON(t,n){const s=[];for(let c=0,f=t.shapes.length;c<f;c++){const h=n[t.shapes[c]];s.push(h)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new Cd[l.type]().fromJSON(l)),new Yd(s,t.options)}}const HM={generateTopUV:function(r,t,n,s,l){const c=t[n*3],f=t[n*3+1],h=t[s*3],p=t[s*3+1],m=t[l*3],g=t[l*3+1];return[new Lt(c,f),new Lt(h,p),new Lt(m,g)]},generateSideWallUV:function(r,t,n,s,l,c){const f=t[n*3],h=t[n*3+1],p=t[n*3+2],m=t[s*3],g=t[s*3+1],_=t[s*3+2],x=t[l*3],y=t[l*3+1],E=t[l*3+2],A=t[c*3],S=t[c*3+1],v=t[c*3+2];return Math.abs(h-g)<Math.abs(f-m)?[new Lt(f,1-p),new Lt(m,1-_),new Lt(x,1-E),new Lt(A,1-v)]:[new Lt(h,1-p),new Lt(g,1-_),new Lt(y,1-E),new Lt(S,1-v)]}};function GM(r,t,n){if(n.shapes=[],Array.isArray(r))for(let s=0,l=r.length;s<l;s++){const c=r[s];n.shapes.push(c.uuid)}else n.shapes.push(r.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class Kc extends Oi{constructor(t=1,n=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:l};const c=t/2,f=n/2,h=Math.floor(s),p=Math.floor(l),m=h+1,g=p+1,_=t/h,x=n/p,y=[],E=[],A=[],S=[];for(let v=0;v<g;v++){const P=v*x-f;for(let D=0;D<m;D++){const C=D*_-c;E.push(C,-P,0),A.push(0,0,1),S.push(D/h),S.push(1-v/p)}}for(let v=0;v<p;v++)for(let P=0;P<h;P++){const D=P+m*v,C=P+m*(v+1),F=P+1+m*(v+1),G=P+1+m*v;y.push(D,C,G),y.push(C,F,G)}this.setIndex(y),this.setAttribute("position",new ei(E,3)),this.setAttribute("normal",new ei(A,3)),this.setAttribute("uv",new ei(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kc(t.width,t.height,t.widthSegments,t.heightSegments)}}class VM extends Or{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qv,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kM extends Or{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_S,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class XM extends Or{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class y0 extends Rn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Oh=new Ze,uv=new W,fv=new W;class WM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xd,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,s=this.matrix;uv.setFromMatrixPosition(t.matrixWorld),n.position.copy(uv),fv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(fv),n.updateMatrixWorld(),Oh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Oh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class S0 extends o0{constructor(t=-1,n=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+n,p=l-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class qM extends WM{constructor(){super(new S0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hv extends y0{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new qM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class YM extends y0{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class ZM extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class dv{constructor(t=1,n=0,s=0){this.radius=t,this.phi=n,this.theta=s}set(t,n,s){return this.radius=t,this.phi=n,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,s){return this.radius=Math.sqrt(t*t+n*n+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(_e(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jM extends lM{constructor(t=10,n=10,s=4473924,l=8947848){s=new Ee(s),l=new Ee(l);const c=n/2,f=t/n,h=t/2,p=[],m=[];for(let x=0,y=0,E=-h;x<=n;x++,E+=f){p.push(-h,0,E,h,0,E),p.push(E,0,-h,E,0,h);const A=x===c?s:l;A.toArray(m,y),y+=3,A.toArray(m,y),y+=3,A.toArray(m,y),y+=3,A.toArray(m,y),y+=3}const g=new Oi;g.setAttribute("position",new ei(p,3)),g.setAttribute("color",new ei(m,3));const _=new c0({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class KM extends Cs{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function pv(r,t,n,s){const l=QM(s);switch(n){case qv:return r*t;case Zv:return r*t/l.components*l.byteLength;case Fd:return r*t/l.components*l.byteLength;case jv:return r*t*2/l.components*l.byteLength;case Hd:return r*t*2/l.components*l.byteLength;case Yv:return r*t*3/l.components*l.byteLength;case xi:return r*t*4/l.components*l.byteLength;case Gd:return r*t*4/l.components*l.byteLength;case zc:case Bc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ic:case Fc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nd:case ad:return Math.max(r,16)*Math.max(t,8)/4;case ed:case id:return Math.max(r,8)*Math.max(t,8)/2;case sd:case rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case od:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ld:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ud:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case fd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case hd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case dd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case pd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case md:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case gd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case _d:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case vd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case xd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case yd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Sd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Hc:case Md:case Ed:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Kv:case Td:return Math.ceil(r/4)*Math.ceil(t/4)*8;case bd:case Ad:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function QM(r){switch(r){case Li:case kv:return{byteLength:1,components:1};case Go:case Xv:case Zo:return{byteLength:2,components:1};case Bd:case Id:return{byteLength:2,components:4};case Ts:case zd:case oa:return{byteLength:4,components:1};case Wv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function M0(){let r=null,t=!1,n=null,s=null;function l(c,f){n(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function JM(r){const t=new WeakMap;function n(h,p){const m=h.array,g=h.usage,_=m.byteLength,x=r.createBuffer();r.bindBuffer(p,x),r.bufferData(p,m,g),h.onUploadCallback();let y;if(m instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=r.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=r.SHORT;else if(m instanceof Uint32Array)y=r.UNSIGNED_INT;else if(m instanceof Int32Array)y=r.INT;else if(m instanceof Int8Array)y=r.BYTE;else if(m instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,p,m){const g=p.array,_=p.updateRanges;if(r.bindBuffer(m,h),_.length===0)r.bufferSubData(m,0,g);else{_.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<_.length;y++){const E=_[x],A=_[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,_[x]=A)}_.length=x+1;for(let y=0,E=_.length;y<E;y++){const A=_[y];r.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(r.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}var $M=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ME=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,EE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wE="gl_FragColor = linearToOutputTexel( gl_FragColor );",DE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,LE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,GE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,WE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$E=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_T=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ST=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,MT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ET=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,CT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,PT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,BT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,VT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,QT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$T=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ob=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,db=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_b=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Eb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Db=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ub=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:$M,alphahash_pars_fragment:tE,alphamap_fragment:eE,alphamap_pars_fragment:nE,alphatest_fragment:iE,alphatest_pars_fragment:aE,aomap_fragment:sE,aomap_pars_fragment:rE,batching_pars_vertex:oE,batching_vertex:lE,begin_vertex:cE,beginnormal_vertex:uE,bsdfs:fE,iridescence_fragment:hE,bumpmap_pars_fragment:dE,clipping_planes_fragment:pE,clipping_planes_pars_fragment:mE,clipping_planes_pars_vertex:gE,clipping_planes_vertex:_E,color_fragment:vE,color_pars_fragment:xE,color_pars_vertex:yE,color_vertex:SE,common:ME,cube_uv_reflection_fragment:EE,defaultnormal_vertex:TE,displacementmap_pars_vertex:bE,displacementmap_vertex:AE,emissivemap_fragment:RE,emissivemap_pars_fragment:CE,colorspace_fragment:wE,colorspace_pars_fragment:DE,envmap_fragment:UE,envmap_common_pars_fragment:LE,envmap_pars_fragment:NE,envmap_pars_vertex:OE,envmap_physical_pars_fragment:WE,envmap_vertex:PE,fog_vertex:zE,fog_pars_vertex:BE,fog_fragment:IE,fog_pars_fragment:FE,gradientmap_pars_fragment:HE,lightmap_pars_fragment:GE,lights_lambert_fragment:VE,lights_lambert_pars_fragment:kE,lights_pars_begin:XE,lights_toon_fragment:qE,lights_toon_pars_fragment:YE,lights_phong_fragment:ZE,lights_phong_pars_fragment:jE,lights_physical_fragment:KE,lights_physical_pars_fragment:QE,lights_fragment_begin:JE,lights_fragment_maps:$E,lights_fragment_end:tT,logdepthbuf_fragment:eT,logdepthbuf_pars_fragment:nT,logdepthbuf_pars_vertex:iT,logdepthbuf_vertex:aT,map_fragment:sT,map_pars_fragment:rT,map_particle_fragment:oT,map_particle_pars_fragment:lT,metalnessmap_fragment:cT,metalnessmap_pars_fragment:uT,morphinstance_vertex:fT,morphcolor_vertex:hT,morphnormal_vertex:dT,morphtarget_pars_vertex:pT,morphtarget_vertex:mT,normal_fragment_begin:gT,normal_fragment_maps:_T,normal_pars_fragment:vT,normal_pars_vertex:xT,normal_vertex:yT,normalmap_pars_fragment:ST,clearcoat_normal_fragment_begin:MT,clearcoat_normal_fragment_maps:ET,clearcoat_pars_fragment:TT,iridescence_pars_fragment:bT,opaque_fragment:AT,packing:RT,premultiplied_alpha_fragment:CT,project_vertex:wT,dithering_fragment:DT,dithering_pars_fragment:UT,roughnessmap_fragment:LT,roughnessmap_pars_fragment:NT,shadowmap_pars_fragment:OT,shadowmap_pars_vertex:PT,shadowmap_vertex:zT,shadowmask_pars_fragment:BT,skinbase_vertex:IT,skinning_pars_vertex:FT,skinning_vertex:HT,skinnormal_vertex:GT,specularmap_fragment:VT,specularmap_pars_fragment:kT,tonemapping_fragment:XT,tonemapping_pars_fragment:WT,transmission_fragment:qT,transmission_pars_fragment:YT,uv_pars_fragment:ZT,uv_pars_vertex:jT,uv_vertex:KT,worldpos_vertex:QT,background_vert:JT,background_frag:$T,backgroundCube_vert:tb,backgroundCube_frag:eb,cube_vert:nb,cube_frag:ib,depth_vert:ab,depth_frag:sb,distanceRGBA_vert:rb,distanceRGBA_frag:ob,equirect_vert:lb,equirect_frag:cb,linedashed_vert:ub,linedashed_frag:fb,meshbasic_vert:hb,meshbasic_frag:db,meshlambert_vert:pb,meshlambert_frag:mb,meshmatcap_vert:gb,meshmatcap_frag:_b,meshnormal_vert:vb,meshnormal_frag:xb,meshphong_vert:yb,meshphong_frag:Sb,meshphysical_vert:Mb,meshphysical_frag:Eb,meshtoon_vert:Tb,meshtoon_frag:bb,points_vert:Ab,points_frag:Rb,shadow_vert:Cb,shadow_frag:wb,sprite_vert:Db,sprite_frag:Ub},It={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Ri={basic:{uniforms:On([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:On([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ee(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:On([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:On([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:On([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Ee(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:On([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:On([It.points,It.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:On([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:On([It.common,It.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:On([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:On([It.sprite,It.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:On([It.common,It.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:On([It.lights,It.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Ri.physical={uniforms:On([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Uc={r:0,b:0,g:0},_s=new Ni,Lb=new Ze;function Nb(r,t,n,s,l,c,f){const h=new Ee(0);let p=c===!0?0:1,m,g,_=null,x=0,y=null;function E(D){let C=D.isScene===!0?D.background:null;return C&&C.isTexture&&(C=(D.backgroundBlurriness>0?n:t).get(C)),C}function A(D){let C=!1;const F=E(D);F===null?v(h,p):F&&F.isColor&&(v(F,1),C=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,f):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(D,C){const F=E(C);F&&(F.isCubeTexture||F.mapping===Zc)?(g===void 0&&(g=new Di(new Ko(1,1,1),new Ya({name:"BackgroundCubeMaterial",uniforms:Ur(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),_s.copy(C.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(_s)),g.material.toneMapped=Ce.getTransfer(F.colorSpace)!==He,(_!==F||x!==F.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=F,x=F.version,y=r.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(m===void 0&&(m=new Di(new Kc(2,2),new Ya({name:"BackgroundMaterial",uniforms:Ur(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=F,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Ce.getTransfer(F.colorSpace)!==He,F.matrixAutoUpdate===!0&&F.updateMatrix(),m.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||x!==F.version||y!==r.toneMapping)&&(m.material.needsUpdate=!0,_=F,x=F.version,y=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function v(D,C){D.getRGB(Uc,r0(r)),s.buffers.color.setClear(Uc.r,Uc.g,Uc.b,C,f)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,C=1){h.set(D),p=C,v(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,v(h,p)},render:A,addToRenderList:S,dispose:P}}function Ob(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function h(w,H,ct,rt,gt){let ut=!1;const z=_(rt,ct,H);c!==z&&(c=z,m(c.object)),ut=y(w,rt,ct,gt),ut&&E(w,rt,ct,gt),gt!==null&&t.update(gt,r.ELEMENT_ARRAY_BUFFER),(ut||f)&&(f=!1,C(w,H,ct,rt),gt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function p(){return r.createVertexArray()}function m(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,H,ct){const rt=ct.wireframe===!0;let gt=s[w.id];gt===void 0&&(gt={},s[w.id]=gt);let ut=gt[H.id];ut===void 0&&(ut={},gt[H.id]=ut);let z=ut[rt];return z===void 0&&(z=x(p()),ut[rt]=z),z}function x(w){const H=[],ct=[],rt=[];for(let gt=0;gt<n;gt++)H[gt]=0,ct[gt]=0,rt[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ct,attributeDivisors:rt,object:w,attributes:{},index:null}}function y(w,H,ct,rt){const gt=c.attributes,ut=H.attributes;let z=0;const q=ct.getAttributes();for(const Z in q)if(q[Z].location>=0){const N=gt[Z];let J=ut[Z];if(J===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),N===void 0||N.attribute!==J||J&&N.data!==J.data)return!0;z++}return c.attributesNum!==z||c.index!==rt}function E(w,H,ct,rt){const gt={},ut=H.attributes;let z=0;const q=ct.getAttributes();for(const Z in q)if(q[Z].location>=0){let N=ut[Z];N===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(N=w.instanceColor));const J={};J.attribute=N,N&&N.data&&(J.data=N.data),gt[Z]=J,z++}c.attributes=gt,c.attributesNum=z,c.index=rt}function A(){const w=c.newAttributes;for(let H=0,ct=w.length;H<ct;H++)w[H]=0}function S(w){v(w,0)}function v(w,H){const ct=c.newAttributes,rt=c.enabledAttributes,gt=c.attributeDivisors;ct[w]=1,rt[w]===0&&(r.enableVertexAttribArray(w),rt[w]=1),gt[w]!==H&&(r.vertexAttribDivisor(w,H),gt[w]=H)}function P(){const w=c.newAttributes,H=c.enabledAttributes;for(let ct=0,rt=H.length;ct<rt;ct++)H[ct]!==w[ct]&&(r.disableVertexAttribArray(ct),H[ct]=0)}function D(w,H,ct,rt,gt,ut,z){z===!0?r.vertexAttribIPointer(w,H,ct,gt,ut):r.vertexAttribPointer(w,H,ct,rt,gt,ut)}function C(w,H,ct,rt){A();const gt=rt.attributes,ut=ct.getAttributes(),z=H.defaultAttributeValues;for(const q in ut){const Z=ut[q];if(Z.location>=0){let Mt=gt[q];if(Mt===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),Mt!==void 0){const N=Mt.normalized,J=Mt.itemSize,xt=t.get(Mt);if(xt===void 0)continue;const yt=xt.buffer,Q=xt.type,pt=xt.bytesPerElement,Et=Q===r.INT||Q===r.UNSIGNED_INT||Mt.gpuType===zd;if(Mt.isInterleavedBufferAttribute){const Dt=Mt.data,Nt=Dt.stride,ae=Mt.offset;if(Dt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<Z.locationSize;Jt++)v(Z.location+Jt,Dt.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let Jt=0;Jt<Z.locationSize;Jt++)S(Z.location+Jt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Jt=0;Jt<Z.locationSize;Jt++)D(Z.location+Jt,J/Z.locationSize,Q,N,Nt*pt,(ae+J/Z.locationSize*Jt)*pt,Et)}else{if(Mt.isInstancedBufferAttribute){for(let Dt=0;Dt<Z.locationSize;Dt++)v(Z.location+Dt,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Dt=0;Dt<Z.locationSize;Dt++)S(Z.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Dt=0;Dt<Z.locationSize;Dt++)D(Z.location+Dt,J/Z.locationSize,Q,N,J*pt,J/Z.locationSize*Dt*pt,Et)}}else if(z!==void 0){const N=z[q];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(Z.location,N);break;case 3:r.vertexAttrib3fv(Z.location,N);break;case 4:r.vertexAttrib4fv(Z.location,N);break;default:r.vertexAttrib1fv(Z.location,N)}}}}P()}function F(){X();for(const w in s){const H=s[w];for(const ct in H){const rt=H[ct];for(const gt in rt)g(rt[gt].object),delete rt[gt];delete H[ct]}delete s[w]}}function G(w){if(s[w.id]===void 0)return;const H=s[w.id];for(const ct in H){const rt=H[ct];for(const gt in rt)g(rt[gt].object),delete rt[gt];delete H[ct]}delete s[w.id]}function I(w){for(const H in s){const ct=s[H];if(ct[w.id]===void 0)continue;const rt=ct[w.id];for(const gt in rt)g(rt[gt].object),delete rt[gt];delete ct[w.id]}}function X(){L(),f=!0,c!==l&&(c=l,m(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:L,dispose:F,releaseStatesOfGeometry:G,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:S,disableUnusedAttributes:P}}function Pb(r,t,n){let s;function l(m){s=m}function c(m,g){r.drawArrays(s,m,g),n.update(g,s,1)}function f(m,g,_){_!==0&&(r.drawArraysInstanced(s,m,g,_),n.update(g,s,_))}function h(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];n.update(y,s,1)}function p(m,g,_,x){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)f(m[E],g[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(s,m,0,g,0,x,0,_);let E=0;for(let A=0;A<_;A++)E+=g[A]*x[A];n.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function zb(r,t,n,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==xi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const X=I===Zo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Li&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==oa&&!X)}function p(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,G=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:P,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:F,maxSamples:G}}function Bb(r){const t=this;let n=null,s=0,l=!1,c=!1;const f=new Va,h=new de,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||s!==0||l;return l=x,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,y){const E=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,v=r.get(_);if(!l||E===null||E.length===0||c&&!S)c?g(null):m();else{const P=c?0:s,D=P*4;let C=v.clippingState||null;p.value=C,C=g(E,x,D,y);for(let F=0;F!==D;++F)C[F]=n[F];v.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,y,E){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=p.value,E!==!0||S===null){const v=y+A*4,P=x.matrixWorldInverse;h.getNormalMatrix(P),(S===null||S.length<v)&&(S=new Float32Array(v));for(let D=0,C=y;D!==A;++D,C+=4)f.copy(_[D]).applyMatrix4(P,h),f.normal.toArray(S,C),S[C+3]=f.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}function Ib(r){let t=new WeakMap;function n(f,h){return h===Qh?f.mapping=Cr:h===Jh&&(f.mapping=wr),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Qh||h===Jh)if(t.has(f)){const p=t.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new eM(p.height);return m.fromEquirectangularTexture(r,f),t.set(f,m),f.addEventListener("dispose",l),n(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Mr=4,mv=[.125,.215,.35,.446,.526,.582],Ss=20,Ph=new S0,gv=new Ee;let zh=null,Bh=0,Ih=0,Fh=!1;const xs=(1+Math.sqrt(5))/2,xr=1/xs,_v=[new W(-xs,xr,0),new W(xs,xr,0),new W(-xr,0,xs),new W(xr,0,xs),new W(0,xs,-xr),new W(0,xs,xr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],Fb=new W;class vv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,s=.1,l=100,c={}){const{size:f=256,position:h=Fb}=c;zh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zh,Bh,Ih),this._renderer.xr.enabled=Fh,t.scissorTest=!1,Lc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Cr||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:Zo,format:xi,colorSpace:Dr,depthBuffer:!1},l=xv(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xv(t,n,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hb(c)),this._blurMaterial=Gb(c,t,n)}return l}_compileMaterial(t){const n=new Di(this._lodPlanes[0],t);this._renderer.compile(n,Ph)}_sceneToCubeUV(t,n,s,l,c){const p=new fi(90,1,n,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(gv),_.toneMapping=Wa,_.autoClear=!1;const E=new i0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),A=new Di(new Ko,E);let S=!1;const v=t.background;v?v.isColor&&(E.color.copy(v),t.background=null,S=!0):(E.color.copy(gv),S=!0);for(let P=0;P<6;P++){const D=P%3;D===0?(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[P],c.y,c.z)):D===1?(p.up.set(0,0,m[P]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[P],c.z)):(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[P]));const C=this._cubeSize;Lc(l,D*C,P>2?C:0,C,C),_.setRenderTarget(l),S&&_.render(A,p),_.render(t,p)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=y,_.autoClear=x,t.background=v}_textureToCubeUV(t,n){const s=this._renderer,l=t.mapping===Cr||t.mapping===wr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Di(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;Lc(n,0,0,3*p,2*p),s.setRenderTarget(n),s.render(f,Ph)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=_v[(l-c-1)%_v.length];this._blur(t,c-1,c,f,h)}n.autoClear=s}_blur(t,n,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,n,s,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Di(this._lodPlanes[l],m),x=m.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ss-1),A=c/E,S=isFinite(c)?1+Math.floor(g*A):Ss;S>Ss&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ss}`);const v=[];let P=0;for(let I=0;I<Ss;++I){const X=I/A,L=Math.exp(-X*X/2);v.push(L),I===0?P+=L:I<S&&(P+=2*L)}for(let I=0;I<v.length;I++)v[I]=v[I]/P;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:D}=this;x.dTheta.value=E,x.mipInt.value=D-s;const C=this._sizeLods[l],F=3*C*(l>D-Mr?l-D+Mr:0),G=4*(this._cubeSize-C);Lc(n,F,G,3*C,2*C),p.setRenderTarget(n),p.render(_,Ph)}}function Hb(r){const t=[],n=[],s=[];let l=r;const c=r-Mr+1+mv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);n.push(h);let p=1/h;f>r-Mr?p=mv[f-r+Mr-1]:f===0&&(p=0),s.push(p);const m=1/(h-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,A=3,S=2,v=1,P=new Float32Array(A*E*y),D=new Float32Array(S*E*y),C=new Float32Array(v*E*y);for(let G=0;G<y;G++){const I=G%3*2/3-1,X=G>2?0:-1,L=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];P.set(L,A*E*G),D.set(x,S*E*G);const w=[G,G,G,G,G,G];C.set(w,v*E*G)}const F=new Oi;F.setAttribute("position",new Ui(P,A)),F.setAttribute("uv",new Ui(D,S)),F.setAttribute("faceIndex",new Ui(C,v)),t.push(F),l>Mr&&l--}return{lodPlanes:t,sizeLods:n,sigmas:s}}function xv(r,t,n){const s=new As(r,t,n);return s.texture.mapping=Zc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Lc(r,t,n,s,l){r.viewport.set(t,n,s,l),r.scissor.set(t,n,s,l)}function Gb(r,t,n){const s=new Float32Array(Ss),l=new W(0,1,0);return new Ya({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function yv(){return new Ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function Sv(){return new Ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function Zd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vb(r){let t=new WeakMap,n=null;function s(h){if(h&&h.isTexture){const p=h.mapping,m=p===Qh||p===Jh,g=p===Cr||p===wr;if(m||g){let _=t.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return n===null&&(n=new vv(r)),_=m?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return m&&y&&y.height>0||g&&y&&l(y)?(n===null&&(n=new vv(r)),_=m?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function kb(r){const t={};function n(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const l=n(s);return l===null&&br("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Xb(r,t,n,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,n.memory.geometries++),x}function p(_){const x=_.attributes;for(const y in x)t.update(x[y],r.ARRAY_BUFFER)}function m(_){const x=[],y=_.index,E=_.attributes.position;let A=0;if(y!==null){const P=y.array;A=y.version;for(let D=0,C=P.length;D<C;D+=3){const F=P[D+0],G=P[D+1],I=P[D+2];x.push(F,G,G,I,I,F)}}else if(E!==void 0){const P=E.array;A=E.version;for(let D=0,C=P.length/3-1;D<C;D+=3){const F=D+0,G=D+1,I=D+2;x.push(F,G,G,I,I,F)}}else return;const S=new($v(x)?s0:a0)(x,1);S.version=A;const v=c.get(_);v&&t.remove(v),c.set(_,S)}function g(_){const x=c.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function Wb(r,t,n){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function p(x,y){r.drawElements(s,y,c,x*f),n.update(y,s,1)}function m(x,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,x*f,E),n.update(y,s,E))}function g(x,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,x,0,E);let S=0;for(let v=0;v<E;v++)S+=y[v];n.update(S,s,1)}function _(x,y,E,A){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)m(x[v]/f,y[v],A[v]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,c,x,0,A,0,E);let v=0;for(let P=0;P<E;P++)v+=y[P]*A[P];n.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function qb(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:s}}function Yb(r,t,n){const s=new WeakMap,l=new $e;function c(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==_){let w=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let C=0;E===!0&&(C=1),A===!0&&(C=2),S===!0&&(C=3);let F=h.attributes.position.count*C,G=1;F>t.maxTextureSize&&(G=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const I=new Float32Array(F*G*4*_),X=new t0(I,F,G,_);X.type=oa,X.needsUpdate=!0;const L=C*4;for(let H=0;H<_;H++){const ct=v[H],rt=P[H],gt=D[H],ut=F*G*4*H;for(let z=0;z<ct.count;z++){const q=z*L;E===!0&&(l.fromBufferAttribute(ct,z),I[ut+q+0]=l.x,I[ut+q+1]=l.y,I[ut+q+2]=l.z,I[ut+q+3]=0),A===!0&&(l.fromBufferAttribute(rt,z),I[ut+q+4]=l.x,I[ut+q+5]=l.y,I[ut+q+6]=l.z,I[ut+q+7]=0),S===!0&&(l.fromBufferAttribute(gt,z),I[ut+q+8]=l.x,I[ut+q+9]=l.y,I[ut+q+10]=l.z,I[ut+q+11]=gt.itemSize===4?l.w:1)}}x={count:_,texture:X,size:new Lt(F,G)},s.set(h,x),h.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const A=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",A),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function Zb(r,t,n,s){let l=new WeakMap;function c(p){const m=s.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return _}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}const E0=new Xn,Mv=new u0(1,1),T0=new t0,b0=new IS,A0=new l0,Ev=[],Tv=[],bv=new Float32Array(16),Av=new Float32Array(9),Rv=new Float32Array(4);function Pr(r,t,n){const s=r[0];if(s<=0||s>0)return r;const l=t*n;let c=Ev[l];if(c===void 0&&(c=new Float32Array(l),Ev[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,r[f].toArray(c,h)}return c}function hn(r,t){if(r.length!==t.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==t[n])return!1;return!0}function dn(r,t){for(let n=0,s=t.length;n<s;n++)r[n]=t[n]}function Qc(r,t){let n=Tv[t];n===void 0&&(n=new Int32Array(t),Tv[t]=n);for(let s=0;s!==t;++s)n[s]=r.allocateTextureUnit();return n}function jb(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function Kb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;r.uniform2fv(this.addr,t),dn(n,t)}}function Qb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(hn(n,t))return;r.uniform3fv(this.addr,t),dn(n,t)}}function Jb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;r.uniform4fv(this.addr,t),dn(n,t)}}function $b(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(hn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),dn(n,t)}else{if(hn(n,s))return;Rv.set(s),r.uniformMatrix2fv(this.addr,!1,Rv),dn(n,s)}}function tA(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(hn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),dn(n,t)}else{if(hn(n,s))return;Av.set(s),r.uniformMatrix3fv(this.addr,!1,Av),dn(n,s)}}function eA(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(hn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),dn(n,t)}else{if(hn(n,s))return;bv.set(s),r.uniformMatrix4fv(this.addr,!1,bv),dn(n,s)}}function nA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function iA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;r.uniform2iv(this.addr,t),dn(n,t)}}function aA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;r.uniform3iv(this.addr,t),dn(n,t)}}function sA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;r.uniform4iv(this.addr,t),dn(n,t)}}function rA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function oA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;r.uniform2uiv(this.addr,t),dn(n,t)}}function lA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;r.uniform3uiv(this.addr,t),dn(n,t)}}function cA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;r.uniform4uiv(this.addr,t),dn(n,t)}}function uA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Mv.compareFunction=Jv,c=Mv):c=E0,n.setTexture2D(t||c,l)}function fA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture3D(t||b0,l)}function hA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTextureCube(t||A0,l)}function dA(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture2DArray(t||T0,l)}function pA(r){switch(r){case 5126:return jb;case 35664:return Kb;case 35665:return Qb;case 35666:return Jb;case 35674:return $b;case 35675:return tA;case 35676:return eA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return aA;case 35669:case 35673:return sA;case 5125:return rA;case 36294:return oA;case 36295:return lA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return dA}}function mA(r,t){r.uniform1fv(this.addr,t)}function gA(r,t){const n=Pr(t,this.size,2);r.uniform2fv(this.addr,n)}function _A(r,t){const n=Pr(t,this.size,3);r.uniform3fv(this.addr,n)}function vA(r,t){const n=Pr(t,this.size,4);r.uniform4fv(this.addr,n)}function xA(r,t){const n=Pr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function yA(r,t){const n=Pr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function SA(r,t){const n=Pr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function MA(r,t){r.uniform1iv(this.addr,t)}function EA(r,t){r.uniform2iv(this.addr,t)}function TA(r,t){r.uniform3iv(this.addr,t)}function bA(r,t){r.uniform4iv(this.addr,t)}function AA(r,t){r.uniform1uiv(this.addr,t)}function RA(r,t){r.uniform2uiv(this.addr,t)}function CA(r,t){r.uniform3uiv(this.addr,t)}function wA(r,t){r.uniform4uiv(this.addr,t)}function DA(r,t,n){const s=this.cache,l=t.length,c=Qc(n,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let f=0;f!==l;++f)n.setTexture2D(t[f]||E0,c[f])}function UA(r,t,n){const s=this.cache,l=t.length,c=Qc(n,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||b0,c[f])}function LA(r,t,n){const s=this.cache,l=t.length,c=Qc(n,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||A0,c[f])}function NA(r,t,n){const s=this.cache,l=t.length,c=Qc(n,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||T0,c[f])}function OA(r){switch(r){case 5126:return mA;case 35664:return gA;case 35665:return _A;case 35666:return vA;case 35674:return xA;case 35675:return yA;case 35676:return SA;case 5124:case 35670:return MA;case 35667:case 35671:return EA;case 35668:case 35672:return TA;case 35669:case 35673:return bA;case 5125:return AA;case 36294:return RA;case 36295:return CA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return UA;case 35680:case 36300:case 36308:case 36293:return LA;case 36289:case 36303:case 36311:case 36292:return NA}}class PA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=pA(n.type)}}class zA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=OA(n.type)}}class BA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,n[h.id],s)}}}const Hh=/(\w+)(\])?(\[|\.)?/g;function Cv(r,t){r.seq.push(t),r.map[t.id]=t}function IA(r,t,n){const s=r.name,l=s.length;for(Hh.lastIndex=0;;){const c=Hh.exec(s),f=Hh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){Cv(n,m===void 0?new PA(h,r,t):new zA(h,r,t));break}else{let _=n.map[h];_===void 0&&(_=new BA(h),Cv(n,_)),n=_}}}class Vc{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(n,l),f=t.getUniformLocation(n,c.name);IA(c,f,this)}}setValue(t,n,s,l){const c=this.map[n];c!==void 0&&c.setValue(t,s,l)}setOptional(t,n,s){const l=n[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,n,s,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,n){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&s.push(f)}return s}}function wv(r,t,n){const s=r.createShader(t);return r.shaderSource(s,n),r.compileShader(s),s}const FA=37297;let HA=0;function GA(r,t){const n=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return s.join(`
`)}const Dv=new de;function VA(r){Ce._getMatrix(Dv,Ce.workingColorSpace,r);const t=`mat3( ${Dv.elements.map(n=>n.toFixed(4))} )`;switch(Ce.getTransfer(r)){case kc:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Uv(r,t,n){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+GA(r.getShaderSource(t),f)}else return l}function kA(r,t){const n=VA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function XA(r,t){let n;switch(t){case cS:n="Linear";break;case uS:n="Reinhard";break;case fS:n="Cineon";break;case hS:n="ACESFilmic";break;case pS:n="AgX";break;case mS:n="Neutral";break;case dS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nc=new W;function WA(){Ce.getLuminanceCoefficients(Nc);const r=Nc.x.toFixed(4),t=Nc.y.toFixed(4),n=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function YA(r){const t=[];for(const n in r){const s=r[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function ZA(r,t){const n={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return n}function Io(r){return r!==""}function Lv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(r){return r.replace(jA,QA)}const KA=new Map;function QA(r,t){let n=me[t];if(n===void 0){const s=KA.get(t);if(s!==void 0)n=me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ld(n)}const JA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ov(r){return r.replace(JA,$A)}function $A(r,t,n,s){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Pv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function t1(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Gv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Vy?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function e1(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Cr:case wr:t="ENVMAP_TYPE_CUBE";break;case Zc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function n1(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case wr:t="ENVMAP_MODE_REFRACTION";break}return t}function i1(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Pd:t="ENVMAP_BLENDING_MULTIPLY";break;case oS:t="ENVMAP_BLENDING_MIX";break;case lS:t="ENVMAP_BLENDING_ADD";break}return t}function a1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:s,maxMip:n}}function s1(r,t,n,s){const l=r.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const p=t1(n),m=e1(n),g=n1(n),_=i1(n),x=a1(n),y=qA(n),E=YA(c),A=l.createProgram();let S,v,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Io).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Io).join(`
`),v.length>0&&(v+=`
`)):(S=[Pv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),v=[Pv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wa?"#define TONE_MAPPING":"",n.toneMapping!==Wa?me.tonemapping_pars_fragment:"",n.toneMapping!==Wa?XA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,kA("linearToOutputTexel",n.outputColorSpace),WA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Io).join(`
`)),f=Ld(f),f=Lv(f,n),f=Nv(f,n),h=Ld(h),h=Lv(h,n),h=Nv(h,n),f=Ov(f),h=Ov(h),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",n.glslVersion===I_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===I_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=P+S+f,C=P+v+h,F=wv(l,l.VERTEX_SHADER,D),G=wv(l,l.FRAGMENT_SHADER,C);l.attachShader(A,F),l.attachShader(A,G),n.index0AttributeName!==void 0?l.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function I(H){if(r.debug.checkShaderErrors){const ct=l.getProgramInfoLog(A).trim(),rt=l.getShaderInfoLog(F).trim(),gt=l.getShaderInfoLog(G).trim();let ut=!0,z=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(ut=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,F,G);else{const q=Uv(l,F,"vertex"),Z=Uv(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ct+`
`+q+`
`+Z)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(rt===""||gt==="")&&(z=!1);z&&(H.diagnostics={runnable:ut,programLog:ct,vertexShader:{log:rt,prefix:S},fragmentShader:{log:gt,prefix:v}})}l.deleteShader(F),l.deleteShader(G),X=new Vc(l,A),L=ZA(l,A)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,FA)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HA++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=G,this}let r1=0;class o1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new l1(t),n.set(t,s)),s}}class l1{constructor(t){this.id=r1++,this.code=t,this.usedTimes=0}}function c1(r,t,n,s,l,c,f){const h=new e0,p=new o1,m=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(L){return m.add(L),L===0?"uv":`uv${L}`}function S(L,w,H,ct,rt){const gt=ct.fog,ut=rt.geometry,z=L.isMeshStandardMaterial?ct.environment:null,q=(L.isMeshStandardMaterial?n:t).get(L.envMap||z),Z=q&&q.mapping===Zc?q.image.height:null,Mt=E[L.type];L.precision!==null&&(y=l.getMaxPrecision(L.precision),y!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",y,"instead."));const N=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,J=N!==void 0?N.length:0;let xt=0;ut.morphAttributes.position!==void 0&&(xt=1),ut.morphAttributes.normal!==void 0&&(xt=2),ut.morphAttributes.color!==void 0&&(xt=3);let yt,Q,pt,Et;if(Mt){const Ae=Ri[Mt];yt=Ae.vertexShader,Q=Ae.fragmentShader}else yt=L.vertexShader,Q=L.fragmentShader,p.update(L),pt=p.getVertexShaderID(L),Et=p.getFragmentShaderID(L);const Dt=r.getRenderTarget(),Nt=r.state.buffers.depth.getReversed(),ae=rt.isInstancedMesh===!0,Jt=rt.isBatchedMesh===!0,De=!!L.map,ye=!!L.matcap,ue=!!q,U=!!L.aoMap,Ut=!!L.lightMap,bt=!!L.bumpMap,wt=!!L.normalMap,mt=!!L.displacementMap,Wt=!!L.emissiveMap,Rt=!!L.metalnessMap,Gt=!!L.roughnessMap,fe=L.anisotropy>0,O=L.clearcoat>0,T=L.dispersion>0,tt=L.iridescence>0,ot=L.sheen>0,ht=L.transmission>0,lt=fe&&!!L.anisotropyMap,Ft=O&&!!L.clearcoatMap,Pt=O&&!!L.clearcoatNormalMap,Zt=O&&!!L.clearcoatRoughnessMap,jt=tt&&!!L.iridescenceMap,St=tt&&!!L.iridescenceThicknessMap,Vt=ot&&!!L.sheenColorMap,$t=ot&&!!L.sheenRoughnessMap,te=!!L.specularMap,Ot=!!L.specularColorMap,ce=!!L.specularIntensityMap,k=ht&&!!L.transmissionMap,Bt=ht&&!!L.thicknessMap,Tt=!!L.gradientMap,kt=!!L.alphaMap,Ct=L.alphaTest>0,vt=!!L.alphaHash,qt=!!L.extensions;let le=Wa;L.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(le=r.toneMapping);const Ne={shaderID:Mt,shaderType:L.type,shaderName:L.name,vertexShader:yt,fragmentShader:Q,defines:L.defines,customVertexShaderID:pt,customFragmentShaderID:Et,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:y,batching:Jt,batchingColor:Jt&&rt._colorsTexture!==null,instancing:ae,instancingColor:ae&&rt.instanceColor!==null,instancingMorph:ae&&rt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Dt===null?r.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:Dr,alphaToCoverage:!!L.alphaToCoverage,map:De,matcap:ye,envMap:ue,envMapMode:ue&&q.mapping,envMapCubeUVHeight:Z,aoMap:U,lightMap:Ut,bumpMap:bt,normalMap:wt,displacementMap:x&&mt,emissiveMap:Wt,normalMapObjectSpace:wt&&L.normalMapType===xS,normalMapTangentSpace:wt&&L.normalMapType===Qv,metalnessMap:Rt,roughnessMap:Gt,anisotropy:fe,anisotropyMap:lt,clearcoat:O,clearcoatMap:Ft,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Zt,dispersion:T,iridescence:tt,iridescenceMap:jt,iridescenceThicknessMap:St,sheen:ot,sheenColorMap:Vt,sheenRoughnessMap:$t,specularMap:te,specularColorMap:Ot,specularIntensityMap:ce,transmission:ht,transmissionMap:k,thicknessMap:Bt,gradientMap:Tt,opaque:L.transparent===!1&&L.blending===Tr&&L.alphaToCoverage===!1,alphaMap:kt,alphaTest:Ct,alphaHash:vt,combine:L.combine,mapUv:De&&A(L.map.channel),aoMapUv:U&&A(L.aoMap.channel),lightMapUv:Ut&&A(L.lightMap.channel),bumpMapUv:bt&&A(L.bumpMap.channel),normalMapUv:wt&&A(L.normalMap.channel),displacementMapUv:mt&&A(L.displacementMap.channel),emissiveMapUv:Wt&&A(L.emissiveMap.channel),metalnessMapUv:Rt&&A(L.metalnessMap.channel),roughnessMapUv:Gt&&A(L.roughnessMap.channel),anisotropyMapUv:lt&&A(L.anisotropyMap.channel),clearcoatMapUv:Ft&&A(L.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&A(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&A(L.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&A(L.iridescenceMap.channel),iridescenceThicknessMapUv:St&&A(L.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&A(L.sheenColorMap.channel),sheenRoughnessMapUv:$t&&A(L.sheenRoughnessMap.channel),specularMapUv:te&&A(L.specularMap.channel),specularColorMapUv:Ot&&A(L.specularColorMap.channel),specularIntensityMapUv:ce&&A(L.specularIntensityMap.channel),transmissionMapUv:k&&A(L.transmissionMap.channel),thicknessMapUv:Bt&&A(L.thicknessMap.channel),alphaMapUv:kt&&A(L.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(wt||fe),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ut.attributes.uv&&(De||kt),fog:!!gt,useFog:L.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:L.flatShading===!0&&L.wireframe===!1,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Nt,skinning:rt.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:xt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:L.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,decodeVideoTexture:De&&L.map.isVideoTexture===!0&&Ce.getTransfer(L.map.colorSpace)===He,decodeVideoTextureEmissive:Wt&&L.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(L.emissiveMap.colorSpace)===He,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Ci,flipSided:L.side===kn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:qt&&L.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&L.extensions.multiDraw===!0||Jt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Ne.vertexUv1s=m.has(1),Ne.vertexUv2s=m.has(2),Ne.vertexUv3s=m.has(3),m.clear(),Ne}function v(L){const w=[];if(L.shaderID?w.push(L.shaderID):(w.push(L.customVertexShaderID),w.push(L.customFragmentShaderID)),L.defines!==void 0)for(const H in L.defines)w.push(H),w.push(L.defines[H]);return L.isRawShaderMaterial===!1&&(P(w,L),D(w,L),w.push(r.outputColorSpace)),w.push(L.customProgramCacheKey),w.join()}function P(L,w){L.push(w.precision),L.push(w.outputColorSpace),L.push(w.envMapMode),L.push(w.envMapCubeUVHeight),L.push(w.mapUv),L.push(w.alphaMapUv),L.push(w.lightMapUv),L.push(w.aoMapUv),L.push(w.bumpMapUv),L.push(w.normalMapUv),L.push(w.displacementMapUv),L.push(w.emissiveMapUv),L.push(w.metalnessMapUv),L.push(w.roughnessMapUv),L.push(w.anisotropyMapUv),L.push(w.clearcoatMapUv),L.push(w.clearcoatNormalMapUv),L.push(w.clearcoatRoughnessMapUv),L.push(w.iridescenceMapUv),L.push(w.iridescenceThicknessMapUv),L.push(w.sheenColorMapUv),L.push(w.sheenRoughnessMapUv),L.push(w.specularMapUv),L.push(w.specularColorMapUv),L.push(w.specularIntensityMapUv),L.push(w.transmissionMapUv),L.push(w.thicknessMapUv),L.push(w.combine),L.push(w.fogExp2),L.push(w.sizeAttenuation),L.push(w.morphTargetsCount),L.push(w.morphAttributeCount),L.push(w.numDirLights),L.push(w.numPointLights),L.push(w.numSpotLights),L.push(w.numSpotLightMaps),L.push(w.numHemiLights),L.push(w.numRectAreaLights),L.push(w.numDirLightShadows),L.push(w.numPointLightShadows),L.push(w.numSpotLightShadows),L.push(w.numSpotLightShadowsWithMaps),L.push(w.numLightProbes),L.push(w.shadowMapType),L.push(w.toneMapping),L.push(w.numClippingPlanes),L.push(w.numClipIntersection),L.push(w.depthPacking)}function D(L,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),L.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),L.push(h.mask)}function C(L){const w=E[L.type];let H;if(w){const ct=Ri[w];H=QS.clone(ct.uniforms)}else H=L.uniforms;return H}function F(L,w){let H;for(let ct=0,rt=g.length;ct<rt;ct++){const gt=g[ct];if(gt.cacheKey===w){H=gt,++H.usedTimes;break}}return H===void 0&&(H=new s1(r,w,L,c),g.push(H)),H}function G(L){if(--L.usedTimes===0){const w=g.indexOf(L);g[w]=g[g.length-1],g.pop(),L.destroy()}}function I(L){p.remove(L)}function X(){p.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:C,acquireProgram:F,releaseProgram:G,releaseShaderCache:I,programs:g,dispose:X}}function u1(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,p){r.get(f)[h]=p}function c(){r=new WeakMap}return{has:t,get:n,remove:s,update:l,dispose:c}}function f1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function zv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Bv(){const r=[];let t=0;const n=[],s=[],l=[];function c(){t=0,n.length=0,s.length=0,l.length=0}function f(_,x,y,E,A,S){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:E,renderOrder:_.renderOrder,z:A,group:S},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=A,v.group=S),t++,v}function h(_,x,y,E,A,S){const v=f(_,x,y,E,A,S);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):n.push(v)}function p(_,x,y,E,A,S){const v=f(_,x,y,E,A,S);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):n.unshift(v)}function m(_,x){n.length>1&&n.sort(_||f1),s.length>1&&s.sort(x||zv),l.length>1&&l.sort(x||zv)}function g(){for(let _=t,x=r.length;_<x;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:s,transparent:l,init:c,push:h,unshift:p,finish:g,sort:m}}function h1(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Bv,r.set(s,[f])):l>=c.length?(f=new Bv,c.push(f)):f=c[l],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function d1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new W,color:new Ee};break;case"SpotLight":n={position:new W,direction:new W,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":n={color:new Ee,position:new W,halfWidth:new W,halfHeight:new W};break}return r[t.id]=n,n}}}function p1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let m1=0;function g1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function _1(r){const t=new d1,n=p1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new W);const l=new W,c=new Ze,f=new Ze;function h(m){let g=0,_=0,x=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let y=0,E=0,A=0,S=0,v=0,P=0,D=0,C=0,F=0,G=0,I=0;m.sort(g1);for(let L=0,w=m.length;L<w;L++){const H=m[L],ct=H.color,rt=H.intensity,gt=H.distance,ut=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=ct.r*rt,_+=ct.g*rt,x+=ct.b*rt;else if(H.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(H.sh.coefficients[z],rt);I++}else if(H.isDirectionalLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const q=H.shadow,Z=n.get(H);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,s.directionalShadow[y]=Z,s.directionalShadowMap[y]=ut,s.directionalShadowMatrix[y]=H.shadow.matrix,P++}s.directional[y]=z,y++}else if(H.isSpotLight){const z=t.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(ct).multiplyScalar(rt),z.distance=gt,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,s.spot[A]=z;const q=H.shadow;if(H.map&&(s.spotLightMap[F]=H.map,F++,q.updateMatrices(H),H.castShadow&&G++),s.spotLightMatrix[A]=q.matrix,H.castShadow){const Z=n.get(H);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,s.spotShadow[A]=Z,s.spotShadowMap[A]=ut,C++}A++}else if(H.isRectAreaLight){const z=t.get(H);z.color.copy(ct).multiplyScalar(rt),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=z,S++}else if(H.isPointLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const q=H.shadow,Z=n.get(H);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,s.pointShadow[E]=Z,s.pointShadowMap[E]=ut,s.pointShadowMatrix[E]=H.shadow.matrix,D++}s.point[E]=z,E++}else if(H.isHemisphereLight){const z=t.get(H);z.skyColor.copy(H.color).multiplyScalar(rt),z.groundColor.copy(H.groundColor).multiplyScalar(rt),s.hemi[v]=z,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const X=s.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==A||X.rectAreaLength!==S||X.hemiLength!==v||X.numDirectionalShadows!==P||X.numPointShadows!==D||X.numSpotShadows!==C||X.numSpotMaps!==F||X.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=A,s.rectArea.length=S,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=C+F-G,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=I,X.directionalLength=y,X.pointLength=E,X.spotLength=A,X.rectAreaLength=S,X.hemiLength=v,X.numDirectionalShadows=P,X.numPointShadows=D,X.numSpotShadows=C,X.numSpotMaps=F,X.numLightProbes=I,s.version=m1++)}function p(m,g){let _=0,x=0,y=0,E=0,A=0;const S=g.matrixWorldInverse;for(let v=0,P=m.length;v<P;v++){const D=m[v];if(D.isDirectionalLight){const C=s.directional[_];C.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),_++}else if(D.isSpotLight){const C=s.spot[y];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),f.identity(),c.copy(D.matrixWorld),c.premultiply(S),f.extractRotation(c),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const C=s.point[x];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),x++}else if(D.isHemisphereLight){const C=s.hemi[A];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(S),A++}}}return{setup:h,setupView:p,state:s}}function Iv(r){const t=new _1(r),n=[],s=[];function l(g){m.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function f(g){s.push(g)}function h(){t.setup(n)}function p(g){t.setupView(n,g)}const m={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function v1(r){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new Iv(r),t.set(l,[h])):c>=f.length?(h=new Iv(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:n,dispose:s}}const x1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function S1(r,t,n){let s=new Xd;const l=new Lt,c=new Lt,f=new $e,h=new kM({depthPacking:vS}),p=new XM,m={},g=n.maxTextureSize,_={[qa]:kn,[kn]:qa,[Ci]:Ci},x=new Ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:x1,fragmentShader:y1}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new Oi;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Di(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gv;let v=this.type;this.render=function(G,I,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const L=r.getRenderTarget(),w=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),ct=r.state;ct.setBlending(Xa),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const rt=v!==ra&&this.type===ra,gt=v===ra&&this.type!==ra;for(let ut=0,z=G.length;ut<z;ut++){const q=G[ut],Z=q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const Mt=Z.getFrameExtents();if(l.multiply(Mt),c.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Mt.x),l.x=c.x*Mt.x,Z.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Mt.y),l.y=c.y*Mt.y,Z.mapSize.y=c.y)),Z.map===null||rt===!0||gt===!0){const J=this.type!==ra?{minFilter:yi,magFilter:yi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new As(l.x,l.y,J),Z.map.texture.name=q.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const N=Z.getViewportCount();for(let J=0;J<N;J++){const xt=Z.getViewport(J);f.set(c.x*xt.x,c.y*xt.y,c.x*xt.z,c.y*xt.w),ct.viewport(f),Z.updateMatrices(q,J),s=Z.getFrustum(),C(I,X,Z.camera,q,this.type)}Z.isPointLightShadow!==!0&&this.type===ra&&P(Z,X),Z.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(L,w,H)};function P(G,I){const X=t.update(A);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new As(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,r.setRenderTarget(G.mapPass),r.clear(),r.renderBufferDirect(I,null,X,x,A,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,r.setRenderTarget(G.map),r.clear(),r.renderBufferDirect(I,null,X,y,A,null)}function D(G,I,X,L){let w=null;const H=X.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(H!==void 0)w=H;else if(w=X.isPointLight===!0?p:h,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ct=w.uuid,rt=I.uuid;let gt=m[ct];gt===void 0&&(gt={},m[ct]=gt);let ut=gt[rt];ut===void 0&&(ut=w.clone(),gt[rt]=ut,I.addEventListener("dispose",F)),w=ut}if(w.visible=I.visible,w.wireframe=I.wireframe,L===ra?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:_[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ct=r.properties.get(w);ct.light=X}return w}function C(G,I,X,L,w){if(G.visible===!1)return;if(G.layers.test(I.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&w===ra)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,G.matrixWorld);const rt=t.update(G),gt=G.material;if(Array.isArray(gt)){const ut=rt.groups;for(let z=0,q=ut.length;z<q;z++){const Z=ut[z],Mt=gt[Z.materialIndex];if(Mt&&Mt.visible){const N=D(G,Mt,L,w);G.onBeforeShadow(r,G,I,X,rt,N,Z),r.renderBufferDirect(X,null,rt,N,G,Z),G.onAfterShadow(r,G,I,X,rt,N,Z)}}}else if(gt.visible){const ut=D(G,gt,L,w);G.onBeforeShadow(r,G,I,X,rt,ut,null),r.renderBufferDirect(X,null,rt,ut,G,null),G.onAfterShadow(r,G,I,X,rt,ut,null)}}const ct=G.children;for(let rt=0,gt=ct.length;rt<gt;rt++)C(ct[rt],I,X,L,w)}function F(G){G.target.removeEventListener("dispose",F);for(const X in m){const L=m[X],w=G.target.uuid;w in L&&(L[w].dispose(),delete L[w])}}}const M1={[Xh]:Wh,[qh]:jh,[Yh]:Kh,[Rr]:Zh,[Wh]:Xh,[jh]:qh,[Kh]:Yh,[Zh]:Rr};function E1(r,t){function n(){let k=!1;const Bt=new $e;let Tt=null;const kt=new $e(0,0,0,0);return{setMask:function(Ct){Tt!==Ct&&!k&&(r.colorMask(Ct,Ct,Ct,Ct),Tt=Ct)},setLocked:function(Ct){k=Ct},setClear:function(Ct,vt,qt,le,Ne){Ne===!0&&(Ct*=le,vt*=le,qt*=le),Bt.set(Ct,vt,qt,le),kt.equals(Bt)===!1&&(r.clearColor(Ct,vt,qt,le),kt.copy(Bt))},reset:function(){k=!1,Tt=null,kt.set(-1,0,0,0)}}}function s(){let k=!1,Bt=!1,Tt=null,kt=null,Ct=null;return{setReversed:function(vt){if(Bt!==vt){const qt=t.get("EXT_clip_control");vt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Bt=vt;const le=Ct;Ct=null,this.setClear(le)}},getReversed:function(){return Bt},setTest:function(vt){vt?Dt(r.DEPTH_TEST):Nt(r.DEPTH_TEST)},setMask:function(vt){Tt!==vt&&!k&&(r.depthMask(vt),Tt=vt)},setFunc:function(vt){if(Bt&&(vt=M1[vt]),kt!==vt){switch(vt){case Xh:r.depthFunc(r.NEVER);break;case Wh:r.depthFunc(r.ALWAYS);break;case qh:r.depthFunc(r.LESS);break;case Rr:r.depthFunc(r.LEQUAL);break;case Yh:r.depthFunc(r.EQUAL);break;case Zh:r.depthFunc(r.GEQUAL);break;case jh:r.depthFunc(r.GREATER);break;case Kh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}kt=vt}},setLocked:function(vt){k=vt},setClear:function(vt){Ct!==vt&&(Bt&&(vt=1-vt),r.clearDepth(vt),Ct=vt)},reset:function(){k=!1,Tt=null,kt=null,Ct=null,Bt=!1}}}function l(){let k=!1,Bt=null,Tt=null,kt=null,Ct=null,vt=null,qt=null,le=null,Ne=null;return{setTest:function(Ae){k||(Ae?Dt(r.STENCIL_TEST):Nt(r.STENCIL_TEST))},setMask:function(Ae){Bt!==Ae&&!k&&(r.stencilMask(Ae),Bt=Ae)},setFunc:function(Ae,Wn,pn){(Tt!==Ae||kt!==Wn||Ct!==pn)&&(r.stencilFunc(Ae,Wn,pn),Tt=Ae,kt=Wn,Ct=pn)},setOp:function(Ae,Wn,pn){(vt!==Ae||qt!==Wn||le!==pn)&&(r.stencilOp(Ae,Wn,pn),vt=Ae,qt=Wn,le=pn)},setLocked:function(Ae){k=Ae},setClear:function(Ae){Ne!==Ae&&(r.clearStencil(Ae),Ne=Ae)},reset:function(){k=!1,Bt=null,Tt=null,kt=null,Ct=null,vt=null,qt=null,le=null,Ne=null}}}const c=new n,f=new s,h=new l,p=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,y=[],E=null,A=!1,S=null,v=null,P=null,D=null,C=null,F=null,G=null,I=new Ee(0,0,0),X=0,L=!1,w=null,H=null,ct=null,rt=null,gt=null;const ut=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,q=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=q>=1):Z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=q>=2);let Mt=null,N={};const J=r.getParameter(r.SCISSOR_BOX),xt=r.getParameter(r.VIEWPORT),yt=new $e().fromArray(J),Q=new $e().fromArray(xt);function pt(k,Bt,Tt,kt){const Ct=new Uint8Array(4),vt=r.createTexture();r.bindTexture(k,vt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qt=0;qt<Tt;qt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Bt,0,r.RGBA,1,1,kt,0,r.RGBA,r.UNSIGNED_BYTE,Ct):r.texImage2D(Bt+qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ct);return vt}const Et={};Et[r.TEXTURE_2D]=pt(r.TEXTURE_2D,r.TEXTURE_2D,1),Et[r.TEXTURE_CUBE_MAP]=pt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[r.TEXTURE_2D_ARRAY]=pt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Et[r.TEXTURE_3D]=pt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Dt(r.DEPTH_TEST),f.setFunc(Rr),bt(!1),wt(L_),Dt(r.CULL_FACE),U(Xa);function Dt(k){g[k]!==!0&&(r.enable(k),g[k]=!0)}function Nt(k){g[k]!==!1&&(r.disable(k),g[k]=!1)}function ae(k,Bt){return _[k]!==Bt?(r.bindFramebuffer(k,Bt),_[k]=Bt,k===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Bt),k===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Bt),!0):!1}function Jt(k,Bt){let Tt=y,kt=!1;if(k){Tt=x.get(Bt),Tt===void 0&&(Tt=[],x.set(Bt,Tt));const Ct=k.textures;if(Tt.length!==Ct.length||Tt[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,qt=Ct.length;vt<qt;vt++)Tt[vt]=r.COLOR_ATTACHMENT0+vt;Tt.length=Ct.length,kt=!0}}else Tt[0]!==r.BACK&&(Tt[0]=r.BACK,kt=!0);kt&&r.drawBuffers(Tt)}function De(k){return E!==k?(r.useProgram(k),E=k,!0):!1}const ye={[ys]:r.FUNC_ADD,[Xy]:r.FUNC_SUBTRACT,[Wy]:r.FUNC_REVERSE_SUBTRACT};ye[qy]=r.MIN,ye[Yy]=r.MAX;const ue={[Zy]:r.ZERO,[jy]:r.ONE,[Ky]:r.SRC_COLOR,[Vh]:r.SRC_ALPHA,[nS]:r.SRC_ALPHA_SATURATE,[tS]:r.DST_COLOR,[Jy]:r.DST_ALPHA,[Qy]:r.ONE_MINUS_SRC_COLOR,[kh]:r.ONE_MINUS_SRC_ALPHA,[eS]:r.ONE_MINUS_DST_COLOR,[$y]:r.ONE_MINUS_DST_ALPHA,[iS]:r.CONSTANT_COLOR,[aS]:r.ONE_MINUS_CONSTANT_COLOR,[sS]:r.CONSTANT_ALPHA,[rS]:r.ONE_MINUS_CONSTANT_ALPHA};function U(k,Bt,Tt,kt,Ct,vt,qt,le,Ne,Ae){if(k===Xa){A===!0&&(Nt(r.BLEND),A=!1);return}if(A===!1&&(Dt(r.BLEND),A=!0),k!==ky){if(k!==S||Ae!==L){if((v!==ys||C!==ys)&&(r.blendEquation(r.FUNC_ADD),v=ys,C=ys),Ae)switch(k){case Tr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case N_:r.blendFunc(r.ONE,r.ONE);break;case O_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case P_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Tr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case N_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case O_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case P_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}P=null,D=null,F=null,G=null,I.set(0,0,0),X=0,S=k,L=Ae}return}Ct=Ct||Bt,vt=vt||Tt,qt=qt||kt,(Bt!==v||Ct!==C)&&(r.blendEquationSeparate(ye[Bt],ye[Ct]),v=Bt,C=Ct),(Tt!==P||kt!==D||vt!==F||qt!==G)&&(r.blendFuncSeparate(ue[Tt],ue[kt],ue[vt],ue[qt]),P=Tt,D=kt,F=vt,G=qt),(le.equals(I)===!1||Ne!==X)&&(r.blendColor(le.r,le.g,le.b,Ne),I.copy(le),X=Ne),S=k,L=!1}function Ut(k,Bt){k.side===Ci?Nt(r.CULL_FACE):Dt(r.CULL_FACE);let Tt=k.side===kn;Bt&&(Tt=!Tt),bt(Tt),k.blending===Tr&&k.transparent===!1?U(Xa):U(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const kt=k.stencilWrite;h.setTest(kt),kt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Wt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Dt(r.SAMPLE_ALPHA_TO_COVERAGE):Nt(r.SAMPLE_ALPHA_TO_COVERAGE)}function bt(k){w!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),w=k)}function wt(k){k!==Hy?(Dt(r.CULL_FACE),k!==H&&(k===L_?r.cullFace(r.BACK):k===Gy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Nt(r.CULL_FACE),H=k}function mt(k){k!==ct&&(z&&r.lineWidth(k),ct=k)}function Wt(k,Bt,Tt){k?(Dt(r.POLYGON_OFFSET_FILL),(rt!==Bt||gt!==Tt)&&(r.polygonOffset(Bt,Tt),rt=Bt,gt=Tt)):Nt(r.POLYGON_OFFSET_FILL)}function Rt(k){k?Dt(r.SCISSOR_TEST):Nt(r.SCISSOR_TEST)}function Gt(k){k===void 0&&(k=r.TEXTURE0+ut-1),Mt!==k&&(r.activeTexture(k),Mt=k)}function fe(k,Bt,Tt){Tt===void 0&&(Mt===null?Tt=r.TEXTURE0+ut-1:Tt=Mt);let kt=N[Tt];kt===void 0&&(kt={type:void 0,texture:void 0},N[Tt]=kt),(kt.type!==k||kt.texture!==Bt)&&(Mt!==Tt&&(r.activeTexture(Tt),Mt=Tt),r.bindTexture(k,Bt||Et[k]),kt.type=k,kt.texture=Bt)}function O(){const k=N[Mt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{r.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{r.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{r.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{r.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{r.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{r.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Zt(){try{r.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{r.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{r.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(k){yt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function $t(k){Q.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function te(k,Bt){let Tt=m.get(Bt);Tt===void 0&&(Tt=new WeakMap,m.set(Bt,Tt));let kt=Tt.get(k);kt===void 0&&(kt=r.getUniformBlockIndex(Bt,k.name),Tt.set(k,kt))}function Ot(k,Bt){const kt=m.get(Bt).get(k);p.get(Bt)!==kt&&(r.uniformBlockBinding(Bt,kt,k.__bindingPointIndex),p.set(Bt,kt))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Mt=null,N={},_={},x=new WeakMap,y=[],E=null,A=!1,S=null,v=null,P=null,D=null,C=null,F=null,G=null,I=new Ee(0,0,0),X=0,L=!1,w=null,H=null,ct=null,rt=null,gt=null,yt.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Dt,disable:Nt,bindFramebuffer:ae,drawBuffers:Jt,useProgram:De,setBlending:U,setMaterial:Ut,setFlipSided:bt,setCullFace:wt,setLineWidth:mt,setPolygonOffset:Wt,setScissorTest:Rt,activeTexture:Gt,bindTexture:fe,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:tt,texImage2D:jt,texImage3D:St,updateUBOMapping:te,uniformBlockBinding:Ot,texStorage2D:Pt,texStorage3D:Zt,texSubImage2D:ot,texSubImage3D:ht,compressedTexSubImage2D:lt,compressedTexSubImage3D:Ft,scissor:Vt,viewport:$t,reset:ce}}function T1(r,t,n,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Lt,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,T){return y?new OffscreenCanvas(O,T):Wc("canvas")}function A(O,T,tt){let ot=1;const ht=fe(O);if((ht.width>tt||ht.height>tt)&&(ot=tt/Math.max(ht.width,ht.height)),ot<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const lt=Math.floor(ot*ht.width),Ft=Math.floor(ot*ht.height);_===void 0&&(_=E(lt,Ft));const Pt=T?E(lt,Ft):_;return Pt.width=lt,Pt.height=Ft,Pt.getContext("2d").drawImage(O,0,0,lt,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+lt+"x"+Ft+")."),Pt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),O;return O}function S(O){return O.generateMipmaps}function v(O){r.generateMipmap(O)}function P(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(O,T,tt,ot,ht=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let lt=T;if(T===r.RED&&(tt===r.FLOAT&&(lt=r.R32F),tt===r.HALF_FLOAT&&(lt=r.R16F),tt===r.UNSIGNED_BYTE&&(lt=r.R8)),T===r.RED_INTEGER&&(tt===r.UNSIGNED_BYTE&&(lt=r.R8UI),tt===r.UNSIGNED_SHORT&&(lt=r.R16UI),tt===r.UNSIGNED_INT&&(lt=r.R32UI),tt===r.BYTE&&(lt=r.R8I),tt===r.SHORT&&(lt=r.R16I),tt===r.INT&&(lt=r.R32I)),T===r.RG&&(tt===r.FLOAT&&(lt=r.RG32F),tt===r.HALF_FLOAT&&(lt=r.RG16F),tt===r.UNSIGNED_BYTE&&(lt=r.RG8)),T===r.RG_INTEGER&&(tt===r.UNSIGNED_BYTE&&(lt=r.RG8UI),tt===r.UNSIGNED_SHORT&&(lt=r.RG16UI),tt===r.UNSIGNED_INT&&(lt=r.RG32UI),tt===r.BYTE&&(lt=r.RG8I),tt===r.SHORT&&(lt=r.RG16I),tt===r.INT&&(lt=r.RG32I)),T===r.RGB_INTEGER&&(tt===r.UNSIGNED_BYTE&&(lt=r.RGB8UI),tt===r.UNSIGNED_SHORT&&(lt=r.RGB16UI),tt===r.UNSIGNED_INT&&(lt=r.RGB32UI),tt===r.BYTE&&(lt=r.RGB8I),tt===r.SHORT&&(lt=r.RGB16I),tt===r.INT&&(lt=r.RGB32I)),T===r.RGBA_INTEGER&&(tt===r.UNSIGNED_BYTE&&(lt=r.RGBA8UI),tt===r.UNSIGNED_SHORT&&(lt=r.RGBA16UI),tt===r.UNSIGNED_INT&&(lt=r.RGBA32UI),tt===r.BYTE&&(lt=r.RGBA8I),tt===r.SHORT&&(lt=r.RGBA16I),tt===r.INT&&(lt=r.RGBA32I)),T===r.RGB&&tt===r.UNSIGNED_INT_5_9_9_9_REV&&(lt=r.RGB9_E5),T===r.RGBA){const Ft=ht?kc:Ce.getTransfer(ot);tt===r.FLOAT&&(lt=r.RGBA32F),tt===r.HALF_FLOAT&&(lt=r.RGBA16F),tt===r.UNSIGNED_BYTE&&(lt=Ft===He?r.SRGB8_ALPHA8:r.RGBA8),tt===r.UNSIGNED_SHORT_4_4_4_4&&(lt=r.RGBA4),tt===r.UNSIGNED_SHORT_5_5_5_1&&(lt=r.RGB5_A1)}return(lt===r.R16F||lt===r.R32F||lt===r.RG16F||lt===r.RG32F||lt===r.RGBA16F||lt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function C(O,T){let tt;return O?T===null||T===Ts||T===Vo?tt=r.DEPTH24_STENCIL8:T===oa?tt=r.DEPTH32F_STENCIL8:T===Go&&(tt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ts||T===Vo?tt=r.DEPTH_COMPONENT24:T===oa?tt=r.DEPTH_COMPONENT32F:T===Go&&(tt=r.DEPTH_COMPONENT16),tt}function F(O,T){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==yi&&O.minFilter!==wi?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function G(O){const T=O.target;T.removeEventListener("dispose",G),X(T),T.isVideoTexture&&g.delete(T)}function I(O){const T=O.target;T.removeEventListener("dispose",I),w(T)}function X(O){const T=s.get(O);if(T.__webglInit===void 0)return;const tt=O.source,ot=x.get(tt);if(ot){const ht=ot[T.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&L(O),Object.keys(ot).length===0&&x.delete(tt)}s.remove(O)}function L(O){const T=s.get(O);r.deleteTexture(T.__webglTexture);const tt=O.source,ot=x.get(tt);delete ot[T.__cacheKey],f.memory.textures--}function w(O){const T=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(T.__webglFramebuffer[ot]))for(let ht=0;ht<T.__webglFramebuffer[ot].length;ht++)r.deleteFramebuffer(T.__webglFramebuffer[ot][ht]);else r.deleteFramebuffer(T.__webglFramebuffer[ot]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ot])}else{if(Array.isArray(T.__webglFramebuffer))for(let ot=0;ot<T.__webglFramebuffer.length;ot++)r.deleteFramebuffer(T.__webglFramebuffer[ot]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ot=0;ot<T.__webglColorRenderbuffer.length;ot++)T.__webglColorRenderbuffer[ot]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ot]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=O.textures;for(let ot=0,ht=tt.length;ot<ht;ot++){const lt=s.get(tt[ot]);lt.__webglTexture&&(r.deleteTexture(lt.__webglTexture),f.memory.textures--),s.remove(tt[ot])}s.remove(O)}let H=0;function ct(){H=0}function rt(){const O=H;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),H+=1,O}function gt(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function ut(O,T){const tt=s.get(O);if(O.isVideoTexture&&Rt(O),O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){const ot=O.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(tt,O,T);return}}n.bindTexture(r.TEXTURE_2D,tt.__webglTexture,r.TEXTURE0+T)}function z(O,T){const tt=s.get(O);if(O.version>0&&tt.__version!==O.version){Et(tt,O,T);return}n.bindTexture(r.TEXTURE_2D_ARRAY,tt.__webglTexture,r.TEXTURE0+T)}function q(O,T){const tt=s.get(O);if(O.version>0&&tt.__version!==O.version){Et(tt,O,T);return}n.bindTexture(r.TEXTURE_3D,tt.__webglTexture,r.TEXTURE0+T)}function Z(O,T){const tt=s.get(O);if(O.version>0&&tt.__version!==O.version){Dt(tt,O,T);return}n.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture,r.TEXTURE0+T)}const Mt={[$h]:r.REPEAT,[Ms]:r.CLAMP_TO_EDGE,[td]:r.MIRRORED_REPEAT},N={[yi]:r.NEAREST,[gS]:r.NEAREST_MIPMAP_NEAREST,[oc]:r.NEAREST_MIPMAP_LINEAR,[wi]:r.LINEAR,[rh]:r.LINEAR_MIPMAP_NEAREST,[Es]:r.LINEAR_MIPMAP_LINEAR},J={[yS]:r.NEVER,[AS]:r.ALWAYS,[SS]:r.LESS,[Jv]:r.LEQUAL,[MS]:r.EQUAL,[bS]:r.GEQUAL,[ES]:r.GREATER,[TS]:r.NOTEQUAL};function xt(O,T){if(T.type===oa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===wi||T.magFilter===rh||T.magFilter===oc||T.magFilter===Es||T.minFilter===wi||T.minFilter===rh||T.minFilter===oc||T.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,Mt[T.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,Mt[T.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,Mt[T.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,N[T.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,N[T.minFilter]),T.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yi||T.minFilter!==oc&&T.minFilter!==Es||T.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function yt(O,T){let tt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",G));const ot=T.source;let ht=x.get(ot);ht===void 0&&(ht={},x.set(ot,ht));const lt=gt(T);if(lt!==O.__cacheKey){ht[lt]===void 0&&(ht[lt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,tt=!0),ht[lt].usedTimes++;const Ft=ht[O.__cacheKey];Ft!==void 0&&(ht[O.__cacheKey].usedTimes--,Ft.usedTimes===0&&L(T)),O.__cacheKey=lt,O.__webglTexture=ht[lt].texture}return tt}function Q(O,T,tt){return Math.floor(Math.floor(O/tt)/T)}function pt(O,T,tt,ot){const lt=O.updateRanges;if(lt.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,tt,ot,T.data);else{lt.sort((St,Vt)=>St.start-Vt.start);let Ft=0;for(let St=1;St<lt.length;St++){const Vt=lt[Ft],$t=lt[St],te=Vt.start+Vt.count,Ot=Q($t.start,T.width,4),ce=Q(Vt.start,T.width,4);$t.start<=te+1&&Ot===ce&&Q($t.start+$t.count-1,T.width,4)===Ot?Vt.count=Math.max(Vt.count,$t.start+$t.count-Vt.start):(++Ft,lt[Ft]=$t)}lt.length=Ft+1;const Pt=r.getParameter(r.UNPACK_ROW_LENGTH),Zt=r.getParameter(r.UNPACK_SKIP_PIXELS),jt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let St=0,Vt=lt.length;St<Vt;St++){const $t=lt[St],te=Math.floor($t.start/4),Ot=Math.ceil($t.count/4),ce=te%T.width,k=Math.floor(te/T.width),Bt=Ot,Tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ce),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),n.texSubImage2D(r.TEXTURE_2D,0,ce,k,Bt,Tt,tt,ot,T.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Pt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Zt),r.pixelStorei(r.UNPACK_SKIP_ROWS,jt)}}function Et(O,T,tt){let ot=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ot=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ot=r.TEXTURE_3D);const ht=yt(O,T),lt=T.source;n.bindTexture(ot,O.__webglTexture,r.TEXTURE0+tt);const Ft=s.get(lt);if(lt.version!==Ft.__version||ht===!0){n.activeTexture(r.TEXTURE0+tt);const Pt=Ce.getPrimaries(Ce.workingColorSpace),Zt=T.colorSpace===ka?null:Ce.getPrimaries(T.colorSpace),jt=T.colorSpace===ka||Pt===Zt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let St=A(T.image,!1,l.maxTextureSize);St=Gt(T,St);const Vt=c.convert(T.format,T.colorSpace),$t=c.convert(T.type);let te=D(T.internalFormat,Vt,$t,T.colorSpace,T.isVideoTexture);xt(ot,T);let Ot;const ce=T.mipmaps,k=T.isVideoTexture!==!0,Bt=Ft.__version===void 0||ht===!0,Tt=lt.dataReady,kt=F(T,St);if(T.isDepthTexture)te=C(T.format===Xo,T.type),Bt&&(k?n.texStorage2D(r.TEXTURE_2D,1,te,St.width,St.height):n.texImage2D(r.TEXTURE_2D,0,te,St.width,St.height,0,Vt,$t,null));else if(T.isDataTexture)if(ce.length>0){k&&Bt&&n.texStorage2D(r.TEXTURE_2D,kt,te,ce[0].width,ce[0].height);for(let Ct=0,vt=ce.length;Ct<vt;Ct++)Ot=ce[Ct],k?Tt&&n.texSubImage2D(r.TEXTURE_2D,Ct,0,0,Ot.width,Ot.height,Vt,$t,Ot.data):n.texImage2D(r.TEXTURE_2D,Ct,te,Ot.width,Ot.height,0,Vt,$t,Ot.data);T.generateMipmaps=!1}else k?(Bt&&n.texStorage2D(r.TEXTURE_2D,kt,te,St.width,St.height),Tt&&pt(T,St,Vt,$t)):n.texImage2D(r.TEXTURE_2D,0,te,St.width,St.height,0,Vt,$t,St.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Bt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,kt,te,ce[0].width,ce[0].height,St.depth);for(let Ct=0,vt=ce.length;Ct<vt;Ct++)if(Ot=ce[Ct],T.format!==xi)if(Vt!==null)if(k){if(Tt)if(T.layerUpdates.size>0){const qt=pv(Ot.width,Ot.height,T.format,T.type);for(const le of T.layerUpdates){const Ne=Ot.data.subarray(le*qt/Ot.data.BYTES_PER_ELEMENT,(le+1)*qt/Ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ct,0,0,le,Ot.width,Ot.height,1,Vt,Ne)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ct,0,0,0,Ot.width,Ot.height,St.depth,Vt,Ot.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ct,te,Ot.width,Ot.height,St.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Tt&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Ct,0,0,0,Ot.width,Ot.height,St.depth,Vt,$t,Ot.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Ct,te,Ot.width,Ot.height,St.depth,0,Vt,$t,Ot.data)}else{k&&Bt&&n.texStorage2D(r.TEXTURE_2D,kt,te,ce[0].width,ce[0].height);for(let Ct=0,vt=ce.length;Ct<vt;Ct++)Ot=ce[Ct],T.format!==xi?Vt!==null?k?Tt&&n.compressedTexSubImage2D(r.TEXTURE_2D,Ct,0,0,Ot.width,Ot.height,Vt,Ot.data):n.compressedTexImage2D(r.TEXTURE_2D,Ct,te,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Tt&&n.texSubImage2D(r.TEXTURE_2D,Ct,0,0,Ot.width,Ot.height,Vt,$t,Ot.data):n.texImage2D(r.TEXTURE_2D,Ct,te,Ot.width,Ot.height,0,Vt,$t,Ot.data)}else if(T.isDataArrayTexture)if(k){if(Bt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,kt,te,St.width,St.height,St.depth),Tt)if(T.layerUpdates.size>0){const Ct=pv(St.width,St.height,T.format,T.type);for(const vt of T.layerUpdates){const qt=St.data.subarray(vt*Ct/St.data.BYTES_PER_ELEMENT,(vt+1)*Ct/St.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,St.width,St.height,1,Vt,$t,qt)}T.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Vt,$t,St.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,te,St.width,St.height,St.depth,0,Vt,$t,St.data);else if(T.isData3DTexture)k?(Bt&&n.texStorage3D(r.TEXTURE_3D,kt,te,St.width,St.height,St.depth),Tt&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Vt,$t,St.data)):n.texImage3D(r.TEXTURE_3D,0,te,St.width,St.height,St.depth,0,Vt,$t,St.data);else if(T.isFramebufferTexture){if(Bt)if(k)n.texStorage2D(r.TEXTURE_2D,kt,te,St.width,St.height);else{let Ct=St.width,vt=St.height;for(let qt=0;qt<kt;qt++)n.texImage2D(r.TEXTURE_2D,qt,te,Ct,vt,0,Vt,$t,null),Ct>>=1,vt>>=1}}else if(ce.length>0){if(k&&Bt){const Ct=fe(ce[0]);n.texStorage2D(r.TEXTURE_2D,kt,te,Ct.width,Ct.height)}for(let Ct=0,vt=ce.length;Ct<vt;Ct++)Ot=ce[Ct],k?Tt&&n.texSubImage2D(r.TEXTURE_2D,Ct,0,0,Vt,$t,Ot):n.texImage2D(r.TEXTURE_2D,Ct,te,Vt,$t,Ot);T.generateMipmaps=!1}else if(k){if(Bt){const Ct=fe(St);n.texStorage2D(r.TEXTURE_2D,kt,te,Ct.width,Ct.height)}Tt&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Vt,$t,St)}else n.texImage2D(r.TEXTURE_2D,0,te,Vt,$t,St);S(T)&&v(ot),Ft.__version=lt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Dt(O,T,tt){if(T.image.length!==6)return;const ot=yt(O,T),ht=T.source;n.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+tt);const lt=s.get(ht);if(ht.version!==lt.__version||ot===!0){n.activeTexture(r.TEXTURE0+tt);const Ft=Ce.getPrimaries(Ce.workingColorSpace),Pt=T.colorSpace===ka?null:Ce.getPrimaries(T.colorSpace),Zt=T.colorSpace===ka||Ft===Pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const jt=T.isCompressedTexture||T.image[0].isCompressedTexture,St=T.image[0]&&T.image[0].isDataTexture,Vt=[];for(let vt=0;vt<6;vt++)!jt&&!St?Vt[vt]=A(T.image[vt],!0,l.maxCubemapSize):Vt[vt]=St?T.image[vt].image:T.image[vt],Vt[vt]=Gt(T,Vt[vt]);const $t=Vt[0],te=c.convert(T.format,T.colorSpace),Ot=c.convert(T.type),ce=D(T.internalFormat,te,Ot,T.colorSpace),k=T.isVideoTexture!==!0,Bt=lt.__version===void 0||ot===!0,Tt=ht.dataReady;let kt=F(T,$t);xt(r.TEXTURE_CUBE_MAP,T);let Ct;if(jt){k&&Bt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,kt,ce,$t.width,$t.height);for(let vt=0;vt<6;vt++){Ct=Vt[vt].mipmaps;for(let qt=0;qt<Ct.length;qt++){const le=Ct[qt];T.format!==xi?te!==null?k?Tt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,qt,0,0,le.width,le.height,te,le.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,qt,ce,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,qt,0,0,le.width,le.height,te,Ot,le.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,qt,ce,le.width,le.height,0,te,Ot,le.data)}}}else{if(Ct=T.mipmaps,k&&Bt){Ct.length>0&&kt++;const vt=fe(Vt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,kt,ce,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(St){k?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Vt[vt].width,Vt[vt].height,te,Ot,Vt[vt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ce,Vt[vt].width,Vt[vt].height,0,te,Ot,Vt[vt].data);for(let qt=0;qt<Ct.length;qt++){const Ne=Ct[qt].image[vt].image;k?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,qt+1,0,0,Ne.width,Ne.height,te,Ot,Ne.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,qt+1,ce,Ne.width,Ne.height,0,te,Ot,Ne.data)}}else{k?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,te,Ot,Vt[vt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ce,te,Ot,Vt[vt]);for(let qt=0;qt<Ct.length;qt++){const le=Ct[qt];k?Tt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,qt+1,0,0,te,Ot,le.image[vt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,qt+1,ce,te,Ot,le.image[vt])}}}S(T)&&v(r.TEXTURE_CUBE_MAP),lt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Nt(O,T,tt,ot,ht,lt){const Ft=c.convert(tt.format,tt.colorSpace),Pt=c.convert(tt.type),Zt=D(tt.internalFormat,Ft,Pt,tt.colorSpace),jt=s.get(T),St=s.get(tt);if(St.__renderTarget=T,!jt.__hasExternalTextures){const Vt=Math.max(1,T.width>>lt),$t=Math.max(1,T.height>>lt);ht===r.TEXTURE_3D||ht===r.TEXTURE_2D_ARRAY?n.texImage3D(ht,lt,Zt,Vt,$t,T.depth,0,Ft,Pt,null):n.texImage2D(ht,lt,Zt,Vt,$t,0,Ft,Pt,null)}n.bindFramebuffer(r.FRAMEBUFFER,O),Wt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,ht,St.__webglTexture,0,mt(T)):(ht===r.TEXTURE_2D||ht>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ot,ht,St.__webglTexture,lt),n.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(O,T,tt){if(r.bindRenderbuffer(r.RENDERBUFFER,O),T.depthBuffer){const ot=T.depthTexture,ht=ot&&ot.isDepthTexture?ot.type:null,lt=C(T.stencilBuffer,ht),Ft=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pt=mt(T);Wt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pt,lt,T.width,T.height):tt?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,lt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,lt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ft,r.RENDERBUFFER,O)}else{const ot=T.textures;for(let ht=0;ht<ot.length;ht++){const lt=ot[ht],Ft=c.convert(lt.format,lt.colorSpace),Pt=c.convert(lt.type),Zt=D(lt.internalFormat,Ft,Pt,lt.colorSpace),jt=mt(T);tt&&Wt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,Zt,T.width,T.height):Wt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,jt,Zt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Zt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Jt(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ot=s.get(T.depthTexture);ot.__renderTarget=T,(!ot.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut(T.depthTexture,0);const ht=ot.__webglTexture,lt=mt(T);if(T.depthTexture.format===ko)Wt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0,lt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0);else if(T.depthTexture.format===Xo)Wt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0,lt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function De(O){const T=s.get(O),tt=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const ot=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ot){const ht=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ot.removeEventListener("dispose",ht)};ot.addEventListener("dispose",ht),T.__depthDisposeCallback=ht}T.__boundDepthTexture=ot}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ot=O.texture.mipmaps;ot&&ot.length>0?Jt(T.__webglFramebuffer[0],O):Jt(T.__webglFramebuffer,O)}else if(tt){T.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ot]),T.__webglDepthbuffer[ot]===void 0)T.__webglDepthbuffer[ot]=r.createRenderbuffer(),ae(T.__webglDepthbuffer[ot],O,!1);else{const ht=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer[ot];r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,lt)}}else{const ot=O.texture.mipmaps;if(ot&&ot.length>0?n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),ae(T.__webglDepthbuffer,O,!1);else{const ht=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,lt)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(O,T,tt){const ot=s.get(O);T!==void 0&&Nt(ot.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),tt!==void 0&&De(O)}function ue(O){const T=O.texture,tt=s.get(O),ot=s.get(T);O.addEventListener("dispose",I);const ht=O.textures,lt=O.isWebGLCubeRenderTarget===!0,Ft=ht.length>1;if(Ft||(ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture()),ot.__version=T.version,f.memory.textures++),lt){tt.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Pt]=[];for(let Zt=0;Zt<T.mipmaps.length;Zt++)tt.__webglFramebuffer[Pt][Zt]=r.createFramebuffer()}else tt.__webglFramebuffer[Pt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Pt=0;Pt<T.mipmaps.length;Pt++)tt.__webglFramebuffer[Pt]=r.createFramebuffer()}else tt.__webglFramebuffer=r.createFramebuffer();if(Ft)for(let Pt=0,Zt=ht.length;Pt<Zt;Pt++){const jt=s.get(ht[Pt]);jt.__webglTexture===void 0&&(jt.__webglTexture=r.createTexture(),f.memory.textures++)}if(O.samples>0&&Wt(O)===!1){tt.__webglMultisampledFramebuffer=r.createFramebuffer(),tt.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Pt=0;Pt<ht.length;Pt++){const Zt=ht[Pt];tt.__webglColorRenderbuffer[Pt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,tt.__webglColorRenderbuffer[Pt]);const jt=c.convert(Zt.format,Zt.colorSpace),St=c.convert(Zt.type),Vt=D(Zt.internalFormat,jt,St,Zt.colorSpace,O.isXRRenderTarget===!0),$t=mt(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,$t,Vt,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,tt.__webglColorRenderbuffer[Pt])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(tt.__webglDepthRenderbuffer=r.createRenderbuffer(),ae(tt.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(lt){n.bindTexture(r.TEXTURE_CUBE_MAP,ot.__webglTexture),xt(r.TEXTURE_CUBE_MAP,T);for(let Pt=0;Pt<6;Pt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Zt=0;Zt<T.mipmaps.length;Zt++)Nt(tt.__webglFramebuffer[Pt][Zt],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Zt);else Nt(tt.__webglFramebuffer[Pt],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);S(T)&&v(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ft){for(let Pt=0,Zt=ht.length;Pt<Zt;Pt++){const jt=ht[Pt],St=s.get(jt);n.bindTexture(r.TEXTURE_2D,St.__webglTexture),xt(r.TEXTURE_2D,jt),Nt(tt.__webglFramebuffer,O,jt,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,0),S(jt)&&v(r.TEXTURE_2D)}n.unbindTexture()}else{let Pt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Pt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Pt,ot.__webglTexture),xt(Pt,T),T.mipmaps&&T.mipmaps.length>0)for(let Zt=0;Zt<T.mipmaps.length;Zt++)Nt(tt.__webglFramebuffer[Zt],O,T,r.COLOR_ATTACHMENT0,Pt,Zt);else Nt(tt.__webglFramebuffer,O,T,r.COLOR_ATTACHMENT0,Pt,0);S(T)&&v(Pt),n.unbindTexture()}O.depthBuffer&&De(O)}function U(O){const T=O.textures;for(let tt=0,ot=T.length;tt<ot;tt++){const ht=T[tt];if(S(ht)){const lt=P(O),Ft=s.get(ht).__webglTexture;n.bindTexture(lt,Ft),v(lt),n.unbindTexture()}}}const Ut=[],bt=[];function wt(O){if(O.samples>0){if(Wt(O)===!1){const T=O.textures,tt=O.width,ot=O.height;let ht=r.COLOR_BUFFER_BIT;const lt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ft=s.get(O),Pt=T.length>1;if(Pt)for(let jt=0;jt<T.length;jt++)n.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);const Zt=O.texture.mipmaps;Zt&&Zt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let jt=0;jt<T.length;jt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ht|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ht|=r.STENCIL_BUFFER_BIT)),Pt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[jt]);const St=s.get(T[jt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,St,0)}r.blitFramebuffer(0,0,tt,ot,0,0,tt,ot,ht,r.NEAREST),p===!0&&(Ut.length=0,bt.length=0,Ut.push(r.COLOR_ATTACHMENT0+jt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Ut.push(lt),bt.push(lt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,bt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ut))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Pt)for(let jt=0;jt<T.length;jt++){n.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[jt]);const St=s.get(T[jt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.TEXTURE_2D,St,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const T=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function mt(O){return Math.min(l.maxSamples,O.samples)}function Wt(O){const T=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Rt(O){const T=f.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function Gt(O,T){const tt=O.colorSpace,ot=O.format,ht=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||tt!==Dr&&tt!==ka&&(Ce.getTransfer(tt)===He?(ot!==xi||ht!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function fe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=rt,this.resetTextureUnits=ct,this.setTexture2D=ut,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=Z,this.rebindTextures=ye,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Wt}function b1(r,t){function n(s,l=ka){let c;const f=Ce.getTransfer(l);if(s===Li)return r.UNSIGNED_BYTE;if(s===Bd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Id)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Wv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===kv)return r.BYTE;if(s===Xv)return r.SHORT;if(s===Go)return r.UNSIGNED_SHORT;if(s===zd)return r.INT;if(s===Ts)return r.UNSIGNED_INT;if(s===oa)return r.FLOAT;if(s===Zo)return r.HALF_FLOAT;if(s===qv)return r.ALPHA;if(s===Yv)return r.RGB;if(s===xi)return r.RGBA;if(s===ko)return r.DEPTH_COMPONENT;if(s===Xo)return r.DEPTH_STENCIL;if(s===Zv)return r.RED;if(s===Fd)return r.RED_INTEGER;if(s===jv)return r.RG;if(s===Hd)return r.RG_INTEGER;if(s===Gd)return r.RGBA_INTEGER;if(s===zc||s===Bc||s===Ic||s===Fc)if(f===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ed||s===nd||s===id||s===ad)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ed)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===id)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ad)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sd||s===rd||s===od)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===sd||s===rd)return f===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===od)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===yd||s===Sd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===ld)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ud)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===md)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_d)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hc||s===Md||s===Ed)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Hc)return f===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Md)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ed)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kv||s===Td||s===bd||s===Ad)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Hc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Td)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ad)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const A1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class C1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,s){if(this.texture===null){const l=new Xn,c=t.properties.get(l);c.__webglTexture=n.texture,(n.depthNear!==s.depthNear||n.depthFar!==s.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new Ya({vertexShader:A1,fragmentShader:R1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Di(new Kc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w1 extends Cs{constructor(t,n){super();const s=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,g=null,_=null,x=null,y=null,E=null;const A=new C1,S=n.getContextAttributes();let v=null,P=null;const D=[],C=[],F=new Lt;let G=null;const I=new fi;I.viewport=new $e;const X=new fi;X.viewport=new $e;const L=[I,X],w=new ZM;let H=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pt=D[Q];return pt===void 0&&(pt=new Ch,D[Q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Q){let pt=D[Q];return pt===void 0&&(pt=new Ch,D[Q]=pt),pt.getGripSpace()},this.getHand=function(Q){let pt=D[Q];return pt===void 0&&(pt=new Ch,D[Q]=pt),pt.getHandSpace()};function rt(Q){const pt=C.indexOf(Q.inputSource);if(pt===-1)return;const Et=D[pt];Et!==void 0&&(Et.update(Q.inputSource,Q.frame,m||f),Et.dispatchEvent({type:Q.type,data:Q.inputSource}))}function gt(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",ut);for(let Q=0;Q<D.length;Q++){const pt=C[Q];pt!==null&&(C[Q]=null,D[Q].disconnect(pt))}H=null,ct=null,A.reset(),t.setRenderTarget(v),y=null,x=null,_=null,l=null,P=null,yt.stop(),s.isPresenting=!1,t.setPixelRatio(G),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",ut),S.xrCompatible!==!0&&await n.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Dt=null,Nt=null;S.depth&&(Nt=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Et=S.stencil?Xo:ko,Dt=S.stencil?Vo:Ts);const ae={colorFormat:n.RGBA8,depthFormat:Nt,scaleFactor:c};_=new XRWebGLBinding(l,n),x=_.createProjectionLayer(ae),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),P=new As(x.textureWidth,x.textureHeight,{format:xi,type:Li,depthTexture:new u0(x.textureWidth,x.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Et={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,n,Et),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new As(y.framebufferWidth,y.framebufferHeight,{format:xi,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),yt.setContext(l),yt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ut(Q){for(let pt=0;pt<Q.removed.length;pt++){const Et=Q.removed[pt],Dt=C.indexOf(Et);Dt>=0&&(C[Dt]=null,D[Dt].disconnect(Et))}for(let pt=0;pt<Q.added.length;pt++){const Et=Q.added[pt];let Dt=C.indexOf(Et);if(Dt===-1){for(let ae=0;ae<D.length;ae++)if(ae>=C.length){C.push(Et),Dt=ae;break}else if(C[ae]===null){C[ae]=Et,Dt=ae;break}if(Dt===-1)break}const Nt=D[Dt];Nt&&Nt.connect(Et)}}const z=new W,q=new W;function Z(Q,pt,Et){z.setFromMatrixPosition(pt.matrixWorld),q.setFromMatrixPosition(Et.matrixWorld);const Dt=z.distanceTo(q),Nt=pt.projectionMatrix.elements,ae=Et.projectionMatrix.elements,Jt=Nt[14]/(Nt[10]-1),De=Nt[14]/(Nt[10]+1),ye=(Nt[9]+1)/Nt[5],ue=(Nt[9]-1)/Nt[5],U=(Nt[8]-1)/Nt[0],Ut=(ae[8]+1)/ae[0],bt=Jt*U,wt=Jt*Ut,mt=Dt/(-U+Ut),Wt=mt*-U;if(pt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Wt),Q.translateZ(mt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Nt[10]===-1)Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Rt=Jt+mt,Gt=De+mt,fe=bt-Wt,O=wt+(Dt-Wt),T=ye*De/Gt*Rt,tt=ue*De/Gt*Rt;Q.projectionMatrix.makePerspective(fe,O,T,tt,Rt,Gt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Mt(Q,pt){pt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let pt=Q.near,Et=Q.far;A.texture!==null&&(A.depthNear>0&&(pt=A.depthNear),A.depthFar>0&&(Et=A.depthFar)),w.near=X.near=I.near=pt,w.far=X.far=I.far=Et,(H!==w.near||ct!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),H=w.near,ct=w.far),I.layers.mask=Q.layers.mask|2,X.layers.mask=Q.layers.mask|4,w.layers.mask=I.layers.mask|X.layers.mask;const Dt=Q.parent,Nt=w.cameras;Mt(w,Dt);for(let ae=0;ae<Nt.length;ae++)Mt(Nt[ae],Dt);Nt.length===2?Z(w,I,X):w.projectionMatrix.copy(I.projectionMatrix),N(Q,w,Dt)};function N(Q,pt,Et){Et===null?Q.matrix.copy(pt.matrixWorld):(Q.matrix.copy(Et.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Rd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(Q){p=Q,x!==null&&(x.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(w)};let J=null;function xt(Q,pt){if(g=pt.getViewerPose(m||f),E=pt,g!==null){const Et=g.views;y!==null&&(t.setRenderTargetFramebuffer(P,y.framebuffer),t.setRenderTarget(P));let Dt=!1;Et.length!==w.cameras.length&&(w.cameras.length=0,Dt=!0);for(let Jt=0;Jt<Et.length;Jt++){const De=Et[Jt];let ye=null;if(y!==null)ye=y.getViewport(De);else{const U=_.getViewSubImage(x,De);ye=U.viewport,Jt===0&&(t.setRenderTargetTextures(P,U.colorTexture,U.depthStencilTexture),t.setRenderTarget(P))}let ue=L[Jt];ue===void 0&&(ue=new fi,ue.layers.enable(Jt),ue.viewport=new $e,L[Jt]=ue),ue.matrix.fromArray(De.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(De.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(ye.x,ye.y,ye.width,ye.height),Jt===0&&(w.matrix.copy(ue.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Dt===!0&&w.cameras.push(ue)}const Nt=l.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Jt=_.getDepthInformation(Et[0]);Jt&&Jt.isValid&&Jt.texture&&A.init(t,Jt,l.renderState)}}for(let Et=0;Et<D.length;Et++){const Dt=C[Et],Nt=D[Et];Dt!==null&&Nt!==void 0&&Nt.update(Dt,pt,m||f)}J&&J(Q,pt),pt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pt}),E=null}const yt=new M0;yt.setAnimationLoop(xt),this.setAnimationLoop=function(Q){J=Q},this.dispose=function(){}}}const vs=new Ni,D1=new Ze;function U1(r,t){function n(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,r0(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,P,D,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),_(S,v)):v.isMeshPhongMaterial?(c(S,v),g(S,v)):v.isMeshStandardMaterial?(c(S,v),x(S,v),v.isMeshPhysicalMaterial&&y(S,v,C)):v.isMeshMatcapMaterial?(c(S,v),E(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),A(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?p(S,v,P,D):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,n(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===kn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,n(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===kn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,n(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,n(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const P=t.get(v),D=P.envMap,C=P.envMapRotation;D&&(S.envMap.value=D,vs.copy(C),vs.x*=-1,vs.y*=-1,vs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),S.envMapRotation.value.setFromMatrix4(D1.makeRotationFromEuler(vs)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function p(S,v,P,D){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*P,S.scale.value=D*.5,v.map&&(S.map.value=v.map,n(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,P){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function A(S,v){const P=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function L1(r,t,n,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,D){const C=D.program;s.uniformBlockBinding(P,C)}function m(P,D){let C=l[P.id];C===void 0&&(E(P),C=g(P),l[P.id]=C,P.addEventListener("dispose",S));const F=D.program;s.updateUBOMapping(P,F);const G=t.render.frame;c[P.id]!==G&&(x(P),c[P.id]=G)}function g(P){const D=_();P.__bindingPointIndex=D;const C=r.createBuffer(),F=P.__size,G=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,F,G),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,C),C}function _(){for(let P=0;P<h;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const D=l[P.id],C=P.uniforms,F=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let G=0,I=C.length;G<I;G++){const X=Array.isArray(C[G])?C[G]:[C[G]];for(let L=0,w=X.length;L<w;L++){const H=X[L];if(y(H,G,L,F)===!0){const ct=H.__offset,rt=Array.isArray(H.value)?H.value:[H.value];let gt=0;for(let ut=0;ut<rt.length;ut++){const z=rt[ut],q=A(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,ct+gt,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,gt),gt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ct,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(P,D,C,F){const G=P.value,I=D+"_"+C;if(F[I]===void 0)return typeof G=="number"||typeof G=="boolean"?F[I]=G:F[I]=G.clone(),!0;{const X=F[I];if(typeof G=="number"||typeof G=="boolean"){if(X!==G)return F[I]=G,!0}else if(X.equals(G)===!1)return X.copy(G),!0}return!1}function E(P){const D=P.uniforms;let C=0;const F=16;for(let I=0,X=D.length;I<X;I++){const L=Array.isArray(D[I])?D[I]:[D[I]];for(let w=0,H=L.length;w<H;w++){const ct=L[w],rt=Array.isArray(ct.value)?ct.value:[ct.value];for(let gt=0,ut=rt.length;gt<ut;gt++){const z=rt[gt],q=A(z),Z=C%F,Mt=Z%q.boundary,N=Z+Mt;C+=Mt,N!==0&&F-N<q.storage&&(C+=F-N),ct.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=C,C+=q.storage}}}const G=C%F;return G>0&&(C+=F-G),P.__size=C,P.__cache={},this}function A(P){const D={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(D.boundary=4,D.storage=4):P.isVector2?(D.boundary=8,D.storage=8):P.isVector3||P.isColor?(D.boundary=16,D.storage=12):P.isVector4?(D.boundary=16,D.storage=16):P.isMatrix3?(D.boundary=48,D.storage=48):P.isMatrix4?(D.boundary=64,D.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),D}function S(P){const D=P.target;D.removeEventListener("dispose",S);const C=f.indexOf(D.__bindingPointIndex);f.splice(C,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function v(){for(const P in l)r.deleteBuffer(l[P]);f=[],l={},c={}}return{bind:p,update:m,dispose:v}}class N1{constructor(t={}){const{canvas:n=wS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,v=null;const P=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let F=!1;this._outputColorSpace=ui;let G=0,I=0,X=null,L=-1,w=null;const H=new $e,ct=new $e;let rt=null;const gt=new Ee(0);let ut=0,z=n.width,q=n.height,Z=1,Mt=null,N=null;const J=new $e(0,0,z,q),xt=new $e(0,0,z,q);let yt=!1;const Q=new Xd;let pt=!1,Et=!1;const Dt=new Ze,Nt=new Ze,ae=new W,Jt=new $e,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function ue(){return X===null?Z:1}let U=s;function Ut(R,j){return n.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Od}`),n.addEventListener("webglcontextlost",kt,!1),n.addEventListener("webglcontextrestored",Ct,!1),n.addEventListener("webglcontextcreationerror",vt,!1),U===null){const j="webgl2";if(U=Ut(j,R),U===null)throw Ut(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let bt,wt,mt,Wt,Rt,Gt,fe,O,T,tt,ot,ht,lt,Ft,Pt,Zt,jt,St,Vt,$t,te,Ot,ce,k;function Bt(){bt=new kb(U),bt.init(),Ot=new b1(U,bt),wt=new zb(U,bt,t,Ot),mt=new E1(U,bt),wt.reverseDepthBuffer&&x&&mt.buffers.depth.setReversed(!0),Wt=new qb(U),Rt=new u1,Gt=new T1(U,bt,mt,Rt,wt,Ot,Wt),fe=new Ib(C),O=new Vb(C),T=new JM(U),ce=new Ob(U,T),tt=new Xb(U,T,Wt,ce),ot=new Zb(U,tt,T,Wt),Vt=new Yb(U,wt,Gt),Zt=new Bb(Rt),ht=new c1(C,fe,O,bt,wt,ce,Zt),lt=new U1(C,Rt),Ft=new h1,Pt=new v1(bt),St=new Nb(C,fe,O,mt,ot,y,p),jt=new S1(C,ot,wt),k=new L1(U,Wt,wt,mt),$t=new Pb(U,bt,Wt),te=new Wb(U,bt,Wt),Wt.programs=ht.programs,C.capabilities=wt,C.extensions=bt,C.properties=Rt,C.renderLists=Ft,C.shadowMap=jt,C.state=mt,C.info=Wt}Bt();const Tt=new w1(C,U);this.xr=Tt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=bt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=bt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(z,q,!1))},this.getSize=function(R){return R.set(z,q)},this.setSize=function(R,j,at=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,q=j,n.width=Math.floor(R*Z),n.height=Math.floor(j*Z),at===!0&&(n.style.width=R+"px",n.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(z*Z,q*Z).floor()},this.setDrawingBufferSize=function(R,j,at){z=R,q=j,Z=at,n.width=Math.floor(R*at),n.height=Math.floor(j*at),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,j,at,st){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,j,at,st),mt.viewport(H.copy(J).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,j,at,st){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,j,at,st),mt.scissor(ct.copy(xt).multiplyScalar(Z).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(R){mt.setScissorTest(yt=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,at=!0){let st=0;if(R){let K=!1;if(X!==null){const At=X.texture.format;K=At===Gd||At===Hd||At===Fd}if(K){const At=X.texture.type,zt=At===Li||At===Ts||At===Go||At===Vo||At===Bd||At===Id,Ht=St.getClearColor(),Xt=St.getClearAlpha(),re=Ht.r,ne=Ht.g,Kt=Ht.b;zt?(E[0]=re,E[1]=ne,E[2]=Kt,E[3]=Xt,U.clearBufferuiv(U.COLOR,0,E)):(A[0]=re,A[1]=ne,A[2]=Kt,A[3]=Xt,U.clearBufferiv(U.COLOR,0,A))}else st|=U.COLOR_BUFFER_BIT}j&&(st|=U.DEPTH_BUFFER_BIT),at&&(st|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",kt,!1),n.removeEventListener("webglcontextrestored",Ct,!1),n.removeEventListener("webglcontextcreationerror",vt,!1),St.dispose(),Ft.dispose(),Pt.dispose(),Rt.dispose(),fe.dispose(),O.dispose(),ot.dispose(),ce.dispose(),k.dispose(),ht.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",on),Tt.removeEventListener("sessionend",Mn),Pn.stop()};function kt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=Wt.autoReset,j=jt.enabled,at=jt.autoUpdate,st=jt.needsUpdate,K=jt.type;Bt(),Wt.autoReset=R,jt.enabled=j,jt.autoUpdate=at,jt.needsUpdate=st,jt.type=K}function vt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function qt(R){const j=R.target;j.removeEventListener("dispose",qt),le(j)}function le(R){Ne(R),Rt.remove(R)}function Ne(R){const j=Rt.get(R).programs;j!==void 0&&(j.forEach(function(at){ht.releaseProgram(at)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,at,st,K,At){j===null&&(j=De);const zt=K.isMesh&&K.matrixWorld.determinant()<0,Ht=Ka(R,j,at,st,K);mt.setMaterial(st,zt);let Xt=at.index,re=1;if(st.wireframe===!0){if(Xt=tt.getWireframeAttribute(at),Xt===void 0)return;re=2}const ne=at.drawRange,Kt=at.attributes.position;let pe=ne.start*re,Ue=(ne.start+ne.count)*re;At!==null&&(pe=Math.max(pe,At.start*re),Ue=Math.min(Ue,(At.start+At.count)*re)),Xt!==null?(pe=Math.max(pe,0),Ue=Math.min(Ue,Xt.count)):Kt!=null&&(pe=Math.max(pe,0),Ue=Math.min(Ue,Kt.count));const qe=Ue-pe;if(qe<0||qe===1/0)return;ce.setup(K,st,Ht,at,Xt);let ve,Le=$t;if(Xt!==null&&(ve=T.get(Xt),Le=te,Le.setIndex(ve)),K.isMesh)st.wireframe===!0?(mt.setLineWidth(st.wireframeLinewidth*ue()),Le.setMode(U.LINES)):Le.setMode(U.TRIANGLES);else if(K.isLine){let ee=st.linewidth;ee===void 0&&(ee=1),mt.setLineWidth(ee*ue()),K.isLineSegments?Le.setMode(U.LINES):K.isLineLoop?Le.setMode(U.LINE_LOOP):Le.setMode(U.LINE_STRIP)}else K.isPoints?Le.setMode(U.POINTS):K.isSprite&&Le.setMode(U.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Le.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))Le.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ee=K._multiDrawStarts,ze=K._multiDrawCounts,Te=K._multiDrawCount,mn=Xt?T.get(Xt).bytesPerElement:1,da=Rt.get(st).currentProgram.getUniforms();for(let Xe=0;Xe<Te;Xe++)da.setValue(U,"_gl_DrawID",Xe),Le.render(ee[Xe]/mn,ze[Xe])}else if(K.isInstancedMesh)Le.renderInstances(pe,qe,K.count);else if(at.isInstancedBufferGeometry){const ee=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,ze=Math.min(at.instanceCount,ee);Le.renderInstances(pe,qe,ze)}else Le.render(pe,qe)};function Ae(R,j,at){R.transparent===!0&&R.side===Ci&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,fa(R,j,at),R.side=qa,R.needsUpdate=!0,fa(R,j,at),R.side=Ci):fa(R,j,at)}this.compile=function(R,j,at=null){at===null&&(at=R),v=Pt.get(at),v.init(j),D.push(v),at.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),R!==at&&R.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const st=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const At=K.material;if(At)if(Array.isArray(At))for(let zt=0;zt<At.length;zt++){const Ht=At[zt];Ae(Ht,at,K),st.add(Ht)}else Ae(At,at,K),st.add(At)}),v=D.pop(),st},this.compileAsync=function(R,j,at=null){const st=this.compile(R,j,at);return new Promise(K=>{function At(){if(st.forEach(function(zt){Rt.get(zt).currentProgram.isReady()&&st.delete(zt)}),st.size===0){K(R);return}setTimeout(At,10)}bt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Wn=null;function pn(R){Wn&&Wn(R)}function on(){Pn.stop()}function Mn(){Pn.start()}const Pn=new M0;Pn.setAnimationLoop(pn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(R){Wn=R,Tt.setAnimationLoop(R),R===null?Pn.stop():Pn.start()},Tt.addEventListener("sessionstart",on),Tt.addEventListener("sessionend",Mn),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(j),j=Tt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,j,X),v=Pt.get(R,D.length),v.init(j),D.push(v),Nt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(Nt),Et=this.localClippingEnabled,pt=Zt.init(this.clippingPlanes,Et),S=Ft.get(R,P.length),S.init(),P.push(S),Tt.enabled===!0&&Tt.isPresenting===!0){const At=C.xr.getDepthSensingMesh();At!==null&&Za(At,j,-1/0,C.sortObjects)}Za(R,j,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(Mt,N),ye=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,ye&&St.addToRenderList(S,R),this.info.render.frame++,pt===!0&&Zt.beginShadows();const at=v.state.shadowsArray;jt.render(at,R,j),pt===!0&&Zt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=S.opaque,K=S.transmissive;if(v.setupLights(),j.isArrayCamera){const At=j.cameras;if(K.length>0)for(let zt=0,Ht=At.length;zt<Ht;zt++){const Xt=At[zt];Jo(st,K,R,Xt)}ye&&St.render(R);for(let zt=0,Ht=At.length;zt<Ht;zt++){const Xt=At[zt];Qo(S,R,Xt,Xt.viewport)}}else K.length>0&&Jo(st,K,R,j),ye&&St.render(R),Qo(S,R,j);X!==null&&I===0&&(Gt.updateMultisampleRenderTarget(X),Gt.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(C,R,j),ce.resetDefaultState(),L=-1,w=null,D.pop(),D.length>0?(v=D[D.length-1],pt===!0&&Zt.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function Za(R,j,at,st){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){st&&Jt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Nt);const zt=ot.update(R),Ht=R.material;Ht.visible&&S.push(R,zt,Ht,at,Jt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const zt=ot.update(R),Ht=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Jt.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Jt.copy(zt.boundingSphere.center)),Jt.applyMatrix4(R.matrixWorld).applyMatrix4(Nt)),Array.isArray(Ht)){const Xt=zt.groups;for(let re=0,ne=Xt.length;re<ne;re++){const Kt=Xt[re],pe=Ht[Kt.materialIndex];pe&&pe.visible&&S.push(R,zt,pe,at,Jt.z,Kt)}}else Ht.visible&&S.push(R,zt,Ht,at,Jt.z,null)}}const At=R.children;for(let zt=0,Ht=At.length;zt<Ht;zt++)Za(At[zt],j,at,st)}function Qo(R,j,at,st){const K=R.opaque,At=R.transmissive,zt=R.transparent;v.setupLightsView(at),pt===!0&&Zt.setGlobalState(C.clippingPlanes,at),st&&mt.viewport(H.copy(st)),K.length>0&&ja(K,j,at),At.length>0&&ja(At,j,at),zt.length>0&&ja(zt,j,at),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Jo(R,j,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[st.id]===void 0&&(v.state.transmissionRenderTarget[st.id]=new As(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?Zo:Li,minFilter:Es,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const At=v.state.transmissionRenderTarget[st.id],zt=st.viewport||H;At.setSize(zt.z*C.transmissionResolutionScale,zt.w*C.transmissionResolutionScale);const Ht=C.getRenderTarget(),Xt=C.getActiveCubeFace(),re=C.getActiveMipmapLevel();C.setRenderTarget(At),C.getClearColor(gt),ut=C.getClearAlpha(),ut<1&&C.setClearColor(16777215,.5),C.clear(),ye&&St.render(at);const ne=C.toneMapping;C.toneMapping=Wa;const Kt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),v.setupLightsView(st),pt===!0&&Zt.setGlobalState(C.clippingPlanes,st),ja(R,at,st),Gt.updateMultisampleRenderTarget(At),Gt.updateRenderTargetMipmap(At),bt.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Ue=0,qe=j.length;Ue<qe;Ue++){const ve=j[Ue],Le=ve.object,ee=ve.geometry,ze=ve.material,Te=ve.group;if(ze.side===Ci&&Le.layers.test(st.layers)){const mn=ze.side;ze.side=kn,ze.needsUpdate=!0,ua(Le,at,st,ee,ze,Te),ze.side=mn,ze.needsUpdate=!0,pe=!0}}pe===!0&&(Gt.updateMultisampleRenderTarget(At),Gt.updateRenderTargetMipmap(At))}C.setRenderTarget(Ht,Xt,re),C.setClearColor(gt,ut),Kt!==void 0&&(st.viewport=Kt),C.toneMapping=ne}function ja(R,j,at){const st=j.isScene===!0?j.overrideMaterial:null;for(let K=0,At=R.length;K<At;K++){const zt=R[K],Ht=zt.object,Xt=zt.geometry,re=zt.group;let ne=zt.material;ne.allowOverride===!0&&st!==null&&(ne=st),Ht.layers.test(at.layers)&&ua(Ht,j,at,Xt,ne,re)}}function ua(R,j,at,st,K,At){R.onBeforeRender(C,j,at,st,K,At),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,j,at,st,R,At),K.transparent===!0&&K.side===Ci&&K.forceSinglePass===!1?(K.side=kn,K.needsUpdate=!0,C.renderBufferDirect(at,j,st,K,R,At),K.side=qa,K.needsUpdate=!0,C.renderBufferDirect(at,j,st,K,R,At),K.side=Ci):C.renderBufferDirect(at,j,st,K,R,At),R.onAfterRender(C,j,at,st,K,At)}function fa(R,j,at){j.isScene!==!0&&(j=De);const st=Rt.get(R),K=v.state.lights,At=v.state.shadowsArray,zt=K.state.version,Ht=ht.getParameters(R,K.state,At,j,at),Xt=ht.getProgramCacheKey(Ht);let re=st.programs;st.environment=R.isMeshStandardMaterial?j.environment:null,st.fog=j.fog,st.envMap=(R.isMeshStandardMaterial?O:fe).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,re===void 0&&(R.addEventListener("dispose",qt),re=new Map,st.programs=re);let ne=re.get(Xt);if(ne!==void 0){if(st.currentProgram===ne&&st.lightsStateVersion===zt)return Bi(R,Ht),ne}else Ht.uniforms=ht.getUniforms(R),R.onBeforeCompile(Ht,C),ne=ht.acquireProgram(Ht,Xt),re.set(Xt,ne),st.uniforms=Ht.uniforms;const Kt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Kt.clippingPlanes=Zt.uniform),Bi(R,Ht),st.needsLights=nn(R),st.lightsStateVersion=zt,st.needsLights&&(Kt.ambientLightColor.value=K.state.ambient,Kt.lightProbe.value=K.state.probe,Kt.directionalLights.value=K.state.directional,Kt.directionalLightShadows.value=K.state.directionalShadow,Kt.spotLights.value=K.state.spot,Kt.spotLightShadows.value=K.state.spotShadow,Kt.rectAreaLights.value=K.state.rectArea,Kt.ltc_1.value=K.state.rectAreaLTC1,Kt.ltc_2.value=K.state.rectAreaLTC2,Kt.pointLights.value=K.state.point,Kt.pointLightShadows.value=K.state.pointShadow,Kt.hemisphereLights.value=K.state.hemi,Kt.directionalShadowMap.value=K.state.directionalShadowMap,Kt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Kt.spotShadowMap.value=K.state.spotShadowMap,Kt.spotLightMatrix.value=K.state.spotLightMatrix,Kt.spotLightMap.value=K.state.spotLightMap,Kt.pointShadowMap.value=K.state.pointShadowMap,Kt.pointShadowMatrix.value=K.state.pointShadowMatrix),st.currentProgram=ne,st.uniformsList=null,ne}function zi(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Vc.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Bi(R,j){const at=Rt.get(R);at.outputColorSpace=j.outputColorSpace,at.batching=j.batching,at.batchingColor=j.batchingColor,at.instancing=j.instancing,at.instancingColor=j.instancingColor,at.instancingMorph=j.instancingMorph,at.skinning=j.skinning,at.morphTargets=j.morphTargets,at.morphNormals=j.morphNormals,at.morphColors=j.morphColors,at.morphTargetsCount=j.morphTargetsCount,at.numClippingPlanes=j.numClippingPlanes,at.numIntersection=j.numClipIntersection,at.vertexAlphas=j.vertexAlphas,at.vertexTangents=j.vertexTangents,at.toneMapping=j.toneMapping}function Ka(R,j,at,st,K){j.isScene!==!0&&(j=De),Gt.resetTextureUnits();const At=j.fog,zt=st.isMeshStandardMaterial?j.environment:null,Ht=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Dr,Xt=(st.isMeshStandardMaterial?O:fe).get(st.envMap||zt),re=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ne=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Kt=!!at.morphAttributes.position,pe=!!at.morphAttributes.normal,Ue=!!at.morphAttributes.color;let qe=Wa;st.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(qe=C.toneMapping);const ve=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Le=ve!==void 0?ve.length:0,ee=Rt.get(st),ze=v.state.lights;if(pt===!0&&(Et===!0||R!==w)){const gn=R===w&&st.id===L;Zt.setState(st,R,gn)}let Te=!1;st.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==ze.state.version||ee.outputColorSpace!==Ht||K.isBatchedMesh&&ee.batching===!1||!K.isBatchedMesh&&ee.batching===!0||K.isBatchedMesh&&ee.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ee.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ee.instancing===!1||!K.isInstancedMesh&&ee.instancing===!0||K.isSkinnedMesh&&ee.skinning===!1||!K.isSkinnedMesh&&ee.skinning===!0||K.isInstancedMesh&&ee.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ee.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ee.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ee.instancingMorph===!1&&K.morphTexture!==null||ee.envMap!==Xt||st.fog===!0&&ee.fog!==At||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Zt.numPlanes||ee.numIntersection!==Zt.numIntersection)||ee.vertexAlphas!==re||ee.vertexTangents!==ne||ee.morphTargets!==Kt||ee.morphNormals!==pe||ee.morphColors!==Ue||ee.toneMapping!==qe||ee.morphTargetsCount!==Le)&&(Te=!0):(Te=!0,ee.__version=st.version);let mn=ee.currentProgram;Te===!0&&(mn=fa(st,j,K));let da=!1,Xe=!1,Fi=!1;const Ve=mn.getUniforms(),Cn=ee.uniforms;if(mt.useProgram(mn.program)&&(da=!0,Xe=!0,Fi=!0),st.id!==L&&(L=st.id,Xe=!0),da||w!==R){mt.buffers.depth.getReversed()?(Dt.copy(R.projectionMatrix),US(Dt),LS(Dt),Ve.setValue(U,"projectionMatrix",Dt)):Ve.setValue(U,"projectionMatrix",R.projectionMatrix),Ve.setValue(U,"viewMatrix",R.matrixWorldInverse);const En=Ve.map.cameraPosition;En!==void 0&&En.setValue(U,ae.setFromMatrixPosition(R.matrixWorld)),wt.logarithmicDepthBuffer&&Ve.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Ve.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Xe=!0,Fi=!0)}if(K.isSkinnedMesh){Ve.setOptional(U,K,"bindMatrix"),Ve.setOptional(U,K,"bindMatrixInverse");const gn=K.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ve.setValue(U,"boneTexture",gn.boneTexture,Gt))}K.isBatchedMesh&&(Ve.setOptional(U,K,"batchingTexture"),Ve.setValue(U,"batchingTexture",K._matricesTexture,Gt),Ve.setOptional(U,K,"batchingIdTexture"),Ve.setValue(U,"batchingIdTexture",K._indirectTexture,Gt),Ve.setOptional(U,K,"batchingColorTexture"),K._colorsTexture!==null&&Ve.setValue(U,"batchingColorTexture",K._colorsTexture,Gt));const ln=at.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Vt.update(K,at,mn),(Xe||ee.receiveShadow!==K.receiveShadow)&&(ee.receiveShadow=K.receiveShadow,Ve.setValue(U,"receiveShadow",K.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Cn.envMap.value=Xt,Cn.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&j.environment!==null&&(Cn.envMapIntensity.value=j.environmentIntensity),Xe&&(Ve.setValue(U,"toneMappingExposure",C.toneMappingExposure),ee.needsLights&&ha(Cn,Fi),At&&st.fog===!0&&lt.refreshFogUniforms(Cn,At),lt.refreshMaterialUniforms(Cn,st,Z,q,v.state.transmissionRenderTarget[R.id]),Vc.upload(U,zi(ee),Cn,Gt)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Vc.upload(U,zi(ee),Cn,Gt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Ve.setValue(U,"center",K.center),Ve.setValue(U,"modelViewMatrix",K.modelViewMatrix),Ve.setValue(U,"normalMatrix",K.normalMatrix),Ve.setValue(U,"modelMatrix",K.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const gn=st.uniformsGroups;for(let En=0,Si=gn.length;En<Si;En++){const Hi=gn[En];k.update(Hi,mn),k.bind(Hi,mn)}}return mn}function ha(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function nn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,j,at){const st=Rt.get(R);st.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Rt.get(R.texture).__webglTexture=j,Rt.get(R.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const at=Rt.get(R);at.__webglFramebuffer=j,at.__useDefaultFramebuffer=j===void 0};const $o=U.createFramebuffer();this.setRenderTarget=function(R,j=0,at=0){X=R,G=j,I=at;let st=!0,K=null,At=!1,zt=!1;if(R){const Xt=Rt.get(R);if(Xt.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(U.FRAMEBUFFER,null),st=!1;else if(Xt.__webglFramebuffer===void 0)Gt.setupRenderTarget(R);else if(Xt.__hasExternalTextures)Gt.rebindTextures(R,Rt.get(R.texture).__webglTexture,Rt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Kt=R.depthTexture;if(Xt.__boundDepthTexture!==Kt){if(Kt!==null&&Rt.has(Kt)&&(R.width!==Kt.image.width||R.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(R)}}const re=R.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(zt=!0);const ne=Rt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[j])?K=ne[j][at]:K=ne[j],At=!0):R.samples>0&&Gt.useMultisampledRTT(R)===!1?K=Rt.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?K=ne[at]:K=ne,H.copy(R.viewport),ct.copy(R.scissor),rt=R.scissorTest}else H.copy(J).multiplyScalar(Z).floor(),ct.copy(xt).multiplyScalar(Z).floor(),rt=yt;if(at!==0&&(K=$o),mt.bindFramebuffer(U.FRAMEBUFFER,K)&&st&&mt.drawBuffers(R,K),mt.viewport(H),mt.scissor(ct),mt.setScissorTest(rt),At){const Xt=Rt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+j,Xt.__webglTexture,at)}else if(zt){const Xt=Rt.get(R.texture),re=j;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xt.__webglTexture,at,re)}else if(R!==null&&at!==0){const Xt=Rt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xt.__webglTexture,at)}L=-1},this.readRenderTargetPixels=function(R,j,at,st,K,At,zt,Ht=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=Rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Xt=Xt[zt]),Xt){mt.bindFramebuffer(U.FRAMEBUFFER,Xt);try{const re=R.textures[Ht],ne=re.format,Kt=re.type;if(!wt.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-st&&at>=0&&at<=R.height-K&&(R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ht),U.readPixels(j,at,st,K,Ot.convert(ne),Ot.convert(Kt),At))}finally{const re=X!==null?Rt.get(X).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,re)}}},this.readRenderTargetPixelsAsync=async function(R,j,at,st,K,At,zt,Ht=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=Rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Xt=Xt[zt]),Xt)if(j>=0&&j<=R.width-st&&at>=0&&at<=R.height-K){mt.bindFramebuffer(U.FRAMEBUFFER,Xt);const re=R.textures[Ht],ne=re.format,Kt=re.type;if(!wt.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,pe),U.bufferData(U.PIXEL_PACK_BUFFER,At.byteLength,U.STREAM_READ),R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ht),U.readPixels(j,at,st,K,Ot.convert(ne),Ot.convert(Kt),0);const Ue=X!==null?Rt.get(X).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,Ue);const qe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await DS(U,qe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,pe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,At),U.deleteBuffer(pe),U.deleteSync(qe),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,at=0){const st=Math.pow(2,-at),K=Math.floor(R.image.width*st),At=Math.floor(R.image.height*st),zt=j!==null?j.x:0,Ht=j!==null?j.y:0;Gt.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,at,0,0,zt,Ht,K,At),mt.unbindTexture()};const tl=U.createFramebuffer(),Ii=U.createFramebuffer();this.copyTextureToTexture=function(R,j,at=null,st=null,K=0,At=null){At===null&&(K!==0?(br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=K,K=0):At=0);let zt,Ht,Xt,re,ne,Kt,pe,Ue,qe;const ve=R.isCompressedTexture?R.mipmaps[At]:R.image;if(at!==null)zt=at.max.x-at.min.x,Ht=at.max.y-at.min.y,Xt=at.isBox3?at.max.z-at.min.z:1,re=at.min.x,ne=at.min.y,Kt=at.isBox3?at.min.z:0;else{const ln=Math.pow(2,-K);zt=Math.floor(ve.width*ln),Ht=Math.floor(ve.height*ln),R.isDataArrayTexture?Xt=ve.depth:R.isData3DTexture?Xt=Math.floor(ve.depth*ln):Xt=1,re=0,ne=0,Kt=0}st!==null?(pe=st.x,Ue=st.y,qe=st.z):(pe=0,Ue=0,qe=0);const Le=Ot.convert(j.format),ee=Ot.convert(j.type);let ze;j.isData3DTexture?(Gt.setTexture3D(j,0),ze=U.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(Gt.setTexture2DArray(j,0),ze=U.TEXTURE_2D_ARRAY):(Gt.setTexture2D(j,0),ze=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment);const Te=U.getParameter(U.UNPACK_ROW_LENGTH),mn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),da=U.getParameter(U.UNPACK_SKIP_PIXELS),Xe=U.getParameter(U.UNPACK_SKIP_ROWS),Fi=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ve.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ve.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,re),U.pixelStorei(U.UNPACK_SKIP_ROWS,ne),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Kt);const Ve=R.isDataArrayTexture||R.isData3DTexture,Cn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const ln=Rt.get(R),gn=Rt.get(j),En=Rt.get(ln.__renderTarget),Si=Rt.get(gn.__renderTarget);mt.bindFramebuffer(U.READ_FRAMEBUFFER,En.__webglFramebuffer),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Hi=0;Hi<Xt;Hi++)Ve&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.get(R).__webglTexture,K,Kt+Hi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.get(j).__webglTexture,At,qe+Hi)),U.blitFramebuffer(re,ne,zt,Ht,pe,Ue,zt,Ht,U.DEPTH_BUFFER_BIT,U.NEAREST);mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Rt.has(R)){const ln=Rt.get(R),gn=Rt.get(j);mt.bindFramebuffer(U.READ_FRAMEBUFFER,tl),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ii);for(let En=0;En<Xt;En++)Ve?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ln.__webglTexture,K,Kt+En):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ln.__webglTexture,K),Cn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,gn.__webglTexture,At,qe+En):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,gn.__webglTexture,At),K!==0?U.blitFramebuffer(re,ne,zt,Ht,pe,Ue,zt,Ht,U.COLOR_BUFFER_BIT,U.NEAREST):Cn?U.copyTexSubImage3D(ze,At,pe,Ue,qe+En,re,ne,zt,Ht):U.copyTexSubImage2D(ze,At,pe,Ue,re,ne,zt,Ht);mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Cn?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(ze,At,pe,Ue,qe,zt,Ht,Xt,Le,ee,ve.data):j.isCompressedArrayTexture?U.compressedTexSubImage3D(ze,At,pe,Ue,qe,zt,Ht,Xt,Le,ve.data):U.texSubImage3D(ze,At,pe,Ue,qe,zt,Ht,Xt,Le,ee,ve):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,At,pe,Ue,zt,Ht,Le,ee,ve.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,At,pe,Ue,ve.width,ve.height,Le,ve.data):U.texSubImage2D(U.TEXTURE_2D,At,pe,Ue,zt,Ht,Le,ee,ve);U.pixelStorei(U.UNPACK_ROW_LENGTH,Te),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,da),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Fi),At===0&&j.generateMipmaps&&U.generateMipmap(ze),mt.unbindTexture()},this.copyTextureToTexture3D=function(R,j,at=null,st=null,K=0){return br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,at,st,K)},this.initRenderTarget=function(R){Rt.get(R).__webglFramebuffer===void 0&&Gt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Gt.setTextureCube(R,0):R.isData3DTexture?Gt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Gt.setTexture2DArray(R,0):Gt.setTexture2D(R,0),mt.unbindTexture()},this.resetState=function(){G=0,I=0,X=null,mt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ce._getUnpackColorSpace()}}class O1{parse(t,n={}){n=Object.assign({binary:!1},n);const s=n.binary,l=[];let c=0;t.traverse(function(v){if(v.isMesh){const P=v.geometry,D=P.index,C=P.getAttribute("position");c+=D!==null?D.count/3:C.count/3,l.push({object3d:v,geometry:P})}});let f,h=80;if(s===!0){const v=c*2+c*3*4*4+80+4,P=new ArrayBuffer(v);f=new DataView(P),f.setUint32(h,c,!0),h+=4}else f="",f+=`solid exported
`;const p=new W,m=new W,g=new W,_=new W,x=new W,y=new W;for(let v=0,P=l.length;v<P;v++){const D=l[v].object3d,C=l[v].geometry,F=C.index,G=C.getAttribute("position");if(F!==null)for(let I=0;I<F.count;I+=3){const X=F.getX(I+0),L=F.getX(I+1),w=F.getX(I+2);E(X,L,w,G,D)}else for(let I=0;I<G.count;I+=3){const X=I+0,L=I+1,w=I+2;E(X,L,w,G,D)}}return s===!1&&(f+=`endsolid exported
`),f;function E(v,P,D,C,F){p.fromBufferAttribute(C,v),m.fromBufferAttribute(C,P),g.fromBufferAttribute(C,D),F.isSkinnedMesh===!0&&(F.applyBoneTransform(v,p),F.applyBoneTransform(P,m),F.applyBoneTransform(D,g)),p.applyMatrix4(F.matrixWorld),m.applyMatrix4(F.matrixWorld),g.applyMatrix4(F.matrixWorld),A(p,m,g),S(p),S(m),S(g),s===!0?(f.setUint16(h,0,!0),h+=2):(f+=`		endloop
`,f+=`	endfacet
`)}function A(v,P,D){_.subVectors(D,P),x.subVectors(v,P),_.cross(x).normalize(),y.copy(_).normalize(),s===!0?(f.setFloat32(h,y.x,!0),h+=4,f.setFloat32(h,y.y,!0),h+=4,f.setFloat32(h,y.z,!0),h+=4):(f+="	facet normal "+y.x+" "+y.y+" "+y.z+`
`,f+=`		outer loop
`)}function S(v){s===!0?(f.setFloat32(h,v.x,!0),h+=4,f.setFloat32(h,v.y,!0),h+=4,f.setFloat32(h,v.z,!0),h+=4):f+="			vertex "+v.x+" "+v.y+" "+v.z+`
`}}}const Fv={type:"change"},jd={type:"start"},R0={type:"end"},Oc=new kd,Hv=new Va,P1=Math.cos(70*CS.DEG2RAD),fn=new W,Gn=2*Math.PI,Ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gh=1e-6;class z1 extends KM{constructor(t,n=null){super(t,n),this.state=Ge.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Er.ROTATE,MIDDLE:Er.DOLLY,RIGHT:Er.PAN},this.touches={ONE:yr.ROTATE,TWO:yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new bs,this._lastTargetPosition=new W,this._quat=new bs().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dv,this._sphericalDelta=new dv,this._scale=1,this._panOffset=new W,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new W,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=I1.bind(this),this._onPointerDown=B1.bind(this),this._onPointerUp=F1.bind(this),this._onContextMenu=q1.bind(this),this._onMouseWheel=V1.bind(this),this._onKeyDown=k1.bind(this),this._onTouchStart=X1.bind(this),this._onTouchMove=W1.bind(this),this._onMouseDown=H1.bind(this),this._onMouseMove=G1.bind(this),this._interceptControlDown=Y1.bind(this),this._interceptControlUp=Z1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fv),this.update(),this.state=Ge.NONE}update(t=null){const n=this.object.position;fn.copy(n).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===Ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Gn:s>Math.PI&&(s-=Gn),l<-Math.PI?l+=Gn:l>Math.PI&&(l-=Gn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),n.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=fn.length();f=this._clampDistance(h*this._scale);const p=h-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const h=new W(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new W(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(h),this.object.updateMatrixWorld(),f=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Oc.origin.copy(this.object.position),Oc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oc.direction))<P1?this.object.lookAt(this.target):(Hv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oc.intersectPlane(Hv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Gh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gh||this._lastTargetPosition.distanceToSquared(this.target)>Gh?(this.dispatchEvent(Fv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Gn/60*this.autoRotateSpeed*t:Gn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){fn.setFromMatrixColumn(n,0),fn.multiplyScalar(-t),this._panOffset.add(fn)}_panUp(t,n){this.screenSpacePanning===!0?fn.setFromMatrixColumn(n,1):(fn.setFromMatrixColumn(n,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(t),this._panOffset.add(fn)}_pan(t,n){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;fn.copy(l).sub(this.target);let c=fn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*n*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=n-s.top,f=s.width,h=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),s=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),s=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Lt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function B1(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function I1(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function F1(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(R0),this.state=Ge.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function H1(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Er.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ge.DOLLY;break;case Er.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ge.ROTATE}break;case Er.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ge.PAN}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(jd)}function G1(r){switch(this.state){case Ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function V1(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ge.NONE||(r.preventDefault(),this.dispatchEvent(jd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(R0))}function k1(r){this.enabled!==!1&&this._handleKeyDown(r)}function X1(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case yr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ge.TOUCH_ROTATE;break;case yr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ge.TOUCH_PAN;break;default:this.state=Ge.NONE}break;case 2:switch(this.touches.TWO){case yr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ge.TOUCH_DOLLY_PAN;break;case yr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ge.TOUCH_DOLLY_ROTATE;break;default:this.state=Ge.NONE}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(jd)}function W1(r){switch(this._trackPointer(r),this.state){case Ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ge.NONE}}function q1(r){this.enabled!==!1&&r.preventDefault()}function Y1(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Z1(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Pc=.001,j1=(r,t,n)=>{const s=t/2,l=n/2,c=1,f=c*2,h=new m0().absarc(0,0,l,0,Math.PI*2,!1),p=Math.floor(s*2/f);console.log(p);for(let y=-Math.floor(p/2);y<=Math.floor(p/2);y++){const E=y*f,A=0,S=E,v=Math.sqrt(Math.pow(s,2)-Math.pow(E,2)),P=E,D=v-A,C=P-S,F=Math.sqrt(D*D+C*C),G=-C/F*(c/2),I=D/F*(c/2),X=new wd;X.moveTo(A+G,S+I),X.lineTo(A-G,S-I),X.lineTo(v-G,P-I),X.lineTo(v+G,P+I),X.lineTo(A+G,S+I),h.holes.push(X)}const m={depth:3,bevelEnabled:!1},g=new Yd(h,m),_=new VM({color:3447003,flatShading:!0,side:Ci}),x=new Di(g,_);return x.position.set(0,3*Pc,0),x.rotation.set(Math.PI/2,0,0),x.scale.set(Pc,Pc,Pc),x};function K1(){const[r,t]=Vn.useState(416),[n,s]=Vn.useState(65),[l,c]=Vn.useState(80),[f,h]=Vn.useState(160),[p,m]=Vn.useState(3),g=Vn.useRef(null),_=Vn.useRef(null),x=Vn.useRef(null),y=Vn.useRef(null),E=Vn.useRef(null),A=Vn.useRef(null);Vn.useEffect(()=>{let v=new iM;v.background=new Ee(15790320),_.current=v;var P=new fi(60,window.innerWidth/window.innerHeight,.01,10);P.position.set(0,.25,-.25);var D=new N1({antialias:!0});D.setSize(window.innerWidth,window.innerHeight),D.setPixelRatio(window.devicePixelRatio),g.current&&g.current.appendChild(D.domElement);const C=new z1(P,D.domElement);C.enableDamping=!0,C.dampingFactor=.05,C.minDistance=.05,C.maxDistance=2;const F=new YM(16777215,.6);_.current.add(F);const G=new hv(16777215,1.8);G.position.set(.5,.5,.5),_.current.add(G);const I=new hv(16777215,1.8);I.position.set(-.5,.5,.5),_.current.add(I);const X=new jM(.2,20);_.current.add(X);var L=function(){requestAnimationFrame(L),C.update(),D.render(_.current,P)};return L(),()=>{A.current&&cancelAnimationFrame(A.current),y.current&&y.current.dispose()}},[]),Vn.useEffect(()=>{_.current&&(E.current&&(_.current.remove(E.current),E.current.geometry&&E.current.geometry.dispose(),E.current.material&&E.current.material.dispose()),E.current=j1(r,n,l),_.current.add(E.current),y.current&&y.current.render(_.current,x.current))},[r,n,l,f,p]);const S=()=>{if(!E.current)return;const P=new O1().parse(E.current,{binary:!1}),D=new Blob([P],{type:"text/plain"}),C=document.createElement("a");C.href=URL.createObjectURL(D),C.download=`циліндр_Ø${n}мм_f${r}мм_бахтiнов.stl`,document.body.appendChild(C),C.click(),document.body.removeChild(C)};return Sn.jsxs("div",{className:"App",children:[Sn.jsx("div",{ref:g,className:"three-container"}),Sn.jsxs("div",{className:"ui-panel",children:[Sn.jsx("h2",{children:"Генератор маски Бахтінова"}),Sn.jsxs("div",{className:"input-group",children:[Sn.jsx("label",{htmlFor:"focalLength",children:"Фокусна відстань (мм):"}),Sn.jsx("input",{type:"number",id:"focalLength",value:r,min:"100",max:"3000",step:"1",onChange:v=>t(Number(v.target.value))})]}),Sn.jsxs("div",{className:"input-group",children:[Sn.jsx("label",{htmlFor:"apertureDiameter",children:"Апертура (мм):"}),Sn.jsx("input",{type:"number",id:"apertureDiameter",value:n,min:"50",max:"500",step:"1",onChange:v=>s(Number(v.target.value))})]}),Sn.jsxs("div",{className:"input-group",children:[Sn.jsx("label",{htmlFor:"telescopeInnerDiameter",children:"Внутрішній діаметр труби (мм):"}),Sn.jsx("input",{type:"number",id:"telescopeInnerDiameter",value:l,min:"40",max:"400",step:"1",onChange:v=>c(Number(v.target.value))})]}),Sn.jsx("div",{className:"button-group",children:Sn.jsx("button",{onClick:S,children:"Експорт в STL"})}),Sn.jsx("div",{className:"status",children:status})]})]})}Fy.createRoot(document.getElementById("root")).render(Sn.jsx(Vn.StrictMode,{children:Sn.jsx(K1,{})}));
