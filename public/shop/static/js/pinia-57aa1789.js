import{i as t}from"./vue-demi-71ba0ef2.js";import{ai as e,r as n,ah as s,w as o,K as a,B as c,at as r,ac as i,A as u,g as f,f as p,n as l,h,L as d,j as y}from"./@vue-8009ac6a.js";
/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let v;const b=t=>v=t,_=Symbol();function j(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var m,O;function $(){const o=e(!0),a=o.run((()=>n({})));let c=[],r=[];const i=s({install(t){b(i),i._a=t,t.provide(_,i),t.config.globalProperties.$pinia=i,r.forEach((t=>c.push(t))),r=[]},use(e){return this._a||t?c.push(e):r.push(e),this},_p:c,_a:null,_e:o,_s:new Map,state:a});return i}(O=m||(m={})).direct="direct",O.patchObject="patch object",O.patchFunction="patch function";const g=()=>{};function P(t,e,n,s=g){t.push(e);const o=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&f()&&p(o),o}function S(t,...e){t.slice().forEach((t=>{t(...e)}))}function w(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],o=t[n];j(o)&&j(s)&&t.hasOwnProperty(n)&&!c(s)&&!r(s)?t[n]=w(o,s):t[n]=s}return t}const E=Symbol();const{assign:A}=Object;function I(t,u,f={},p,h,d){let y;const v=A({actions:{}},f),_={deep:!0};let O,$,I,M=s([]),x=s([]);const F=p.state.value[t];let k;function B(e){let n;O=$=!1,"function"==typeof e?(e(p.state.value[t]),n={type:m.patchFunction,storeId:t,events:I}):(w(p.state.value[t],e),n={type:m.patchObject,payload:e,storeId:t,events:I});const s=k=Symbol();l().then((()=>{k===s&&(O=!0)})),$=!0,S(M,n,p.state.value[t])}d||F||(p.state.value[t]={}),n({});const J=d?function(){const{state:t}=f,e=t?t():{};this.$patch((t=>{A(t,e)}))}:g;function K(e,n){return function(){b(p);const s=Array.from(arguments),o=[],a=[];let c;S(x,{args:s,name:e,store:N,after:function(t){o.push(t)},onError:function(t){a.push(t)}});try{c=n.apply(this&&this.$id===t?this:N,s)}catch(r){throw S(a,r),r}return c instanceof Promise?c.then((t=>(S(o,t),t))).catch((t=>(S(a,t),Promise.reject(t)))):(S(o,c),c)}}const L={_p:p,$id:t,$onAction:P.bind(null,x),$patch:B,$reset:J,$subscribe(e,n={}){const s=P(M,e,n.detached,(()=>a())),a=y.run((()=>o((()=>p.state.value[t]),(s=>{("sync"===n.flush?$:O)&&e({storeId:t,type:m.direct,events:I},s)}),A({},_,n))));return s},$dispose:function(){y.stop(),M=[],x=[],p._s.delete(t)}},N=a(L);p._s.set(t,N);const q=p._e.run((()=>(y=e(),y.run((()=>u())))));for(const e in q){const n=q[e];if(c(n)&&(!c(C=n)||!C.effect)||r(n))d||(!F||j(z=n)&&z.hasOwnProperty(E)||(c(n)?n.value=F[e]:w(n,F[e])),p.state.value[t][e]=n);else if("function"==typeof n){const t=K(e,n);q[e]=t,v.actions[e]=n}}var z,C;return A(N,q),A(i(N),q),Object.defineProperty(N,"$state",{get:()=>p.state.value[t],set:t=>{B((e=>{A(e,t)}))}}),p._p.forEach((t=>{A(N,y.run((()=>t({store:N,app:p._a,pinia:p,options:v}))))})),F&&d&&f.hydrate&&f.hydrate(N.$state,F),O=!0,$=!0,N}function M(t,e,n){let o,a;const c="function"==typeof e;function r(t,n){const r=h();(t=t||r&&u(_,null))&&b(t),(t=v)._s.has(o)||(c?I(o,e,a,t):function(t,e,n,o){const{state:a,actions:c,getters:r}=e,i=n.state.value[t];let u;u=I(t,(function(){i||(n.state.value[t]=a?a():{});const e=d(n.state.value[t]);return A(e,c,Object.keys(r||{}).reduce(((e,o)=>(e[o]=s(y((()=>{b(n);const e=n._s.get(t);return r[o].call(e,e)}))),e)),{}))}),e,n,0,!0)}(o,a,t));return t._s.get(o)}return"string"==typeof t?(o=t,a=c?n:e):(a=t,o=t.id),r.$id=o,r}export{$ as c,M as d};