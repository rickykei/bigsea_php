!function(){function n(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=r(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,l=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){l=!0,u=n},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw u}}}}function e(n){return function(n){if(Array.isArray(n))return o(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||r(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(f){c=!0,o=f}finally{try{if(!l&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(n,e)||r(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(n,e){if(n){if("string"==typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(n,e):void 0}}function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./@vue-legacy-da61ce60.js"],(function(r,o){"use strict";var i,u,a,l,c,f,s,d,v,y;return{setters:[function(n){i=n.r,u=n.w,a=n.g,l=n.d,c=n.u,f=n.e,s=n.f,d=n.n,v=n.h,y=n.i}],execute:function(){var o;r({a:function(n,e){var t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r,a=o.window,l=void 0===a?I:a,c=N(o,["window"]),v=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=i(),r=function(){return t.value=Boolean(n())};return r(),function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];f()?s(n):e?n():d(n)}(r,e),t}((function(){return l&&"ResizeObserver"in l})),y=function(){t&&(t.disconnect(),t=void 0)},p=u((function(){return O(n)}),(function(n){y(),v.value&&l&&n&&(t=new ResizeObserver(e)).observe(n,c)}),{immediate:!0,flush:"post"}),m=function(){y(),p()};return w(m),{isSupported:v,stop:m}},b:O,c:function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.window,a=void 0===o?I:o,l=r.initialValue,c=void 0===l?"":l,f=i(c),s=y((function(){var n;return O(e)||(null==(n=null==a?void 0:a.document)?void 0:n.documentElement)}));return u([s,function(){return g(n)}],(function(n){var e,r=t(n,2),o=r[0],i=r[1];if(o&&a){var u=null==(e=a.getComputedStyle(o).getPropertyValue(i))?void 0:e.trim();f.value=u||c}}),{immediate:!0}),u(f,(function(e){var t;(null==(t=s.value)?void 0:t.style)&&s.value.style.setProperty(g(n),e)})),f},d:function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.immediate,o=void 0===r||r,u=i(!1),a=null;function l(){a&&(clearTimeout(a),a=null)}function c(){u.value=!1,l()}function f(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];l(),u.value=!0,a=setTimeout((function(){u.value=!1,a=null,n.apply(void 0,r)}),g(e))}o&&(u.value=!0,p&&f());return w(c),{isPending:v(u),start:f,stop:c}},o:function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.window,o=void 0===r?I:r,i=t.ignore,u=void 0===i?[]:i,a=t.capture,l=void 0===a||a,c=t.detectIframe,f=void 0!==c&&c;if(!o)return;b&&!E&&(E=!0,Array.from(o.document.body.children).forEach((function(n){return n.addEventListener("click",h)})));var s=!0,d=function(n){return u.some((function(e){if("string"==typeof e)return Array.from(o.document.querySelectorAll(e)).some((function(e){return e===n.target||n.composedPath().includes(e)}));var t=O(e);return t&&(n.target===t||n.composedPath().includes(t))}))},v=[A(o,"click",(function(t){var r=O(n);r&&r!==t.target&&!t.composedPath().includes(r)&&(0===t.detail&&(s=!d(t)),s?e(t):s=!0)}),{passive:!0,capture:l}),A(o,"pointerdown",(function(e){var t=O(n);t&&(s=!e.composedPath().includes(t)&&!d(e))}),{passive:!0}),f&&A(o,"blur",(function(t){var r,i=O(n);"IFRAME"!==(null==(r=o.document.activeElement)?void 0:r.tagName)||(null==i?void 0:i.contains(o.document.activeElement))||e(t)}))].filter(Boolean);return function(){return v.forEach((function(n){return n()}))}},r:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i(n.value),o=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(n,e){function t(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return new Promise((function(r,i){Promise.resolve(n((function(){return e.apply(t,o)}),{fn:e,thisArg:t,args:o})).then(r).catch(i)}))}return t}(function(n){var e,t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=h,i=function(n){clearTimeout(n),o(),o=h},u=function(u){var a=g(n),l=g(r.maxWait);return e&&i(e),a<=0||void 0!==l&&l<=0?(t&&(i(t),t=null),Promise.resolve(u())):new Promise((function(n,c){o=r.rejectOnCancel?c:n,l&&!t&&(t=setTimeout((function(){e&&i(e),t=null,n(u())}),l)),e=setTimeout((function(){t&&i(t),t=null,n(u())}),a)}))};return u}(e,t),n)}((function(){r.value=n.value}),e,t);return u(n,(function(){return o()})),r},t:w,u:A});var p=r("i","undefined"!=typeof window),m=function(n){return"string"==typeof n},h=function(){},b=r("e",p&&(null==(o=null==window?void 0:window.navigator)?void 0:o.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent));function g(n){return"function"==typeof n?n():c(n)}function w(n){return!!a()&&(l(n),!0)}function O(n){var e,t=g(n);return null!=(e=null==t?void 0:t.$el)?e:t}var I=p?window:void 0;function A(){for(var n,r,o,i,a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];if(m(l[0])||Array.isArray(l[0])?(r=l[0],o=l[1],i=l[2],n=I):(n=l[0],r=l[1],o=l[2],i=l[3]),!n)return h;Array.isArray(r)||(r=[r]),Array.isArray(o)||(o=[o]);var f=[],s=function(){f.forEach((function(n){return n()})),f.length=0},d=u((function(){return[O(n),g(i)]}),(function(n){var i=t(n,2),u=i[0],a=i[1];s(),u&&f.push.apply(f,e(r.flatMap((function(n){return o.map((function(e){return function(n,e,t,r){return n.addEventListener(e,t,r),function(){return n.removeEventListener(e,t,r)}}(u,n,e,a)}))}))))}),{immediate:!0,flush:"post"}),v=function(){d(),s()};return w(v),v}var E=!1;var S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},P="__vueuse_ssr_handlers__";S[P]=S[P]||{};var j,T,x=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,N=function(e,t){var r={};for(var o in e)C.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&x){var i,u=n(x(e));try{for(u.s();!(i=u.n()).done;){o=i.value;t.indexOf(o)<0&&Q.call(e,o)&&(r[o]=e[o])}}catch(a){u.e(a)}finally{u.f()}}return r};(T=j||(j={})).UP="UP",T.RIGHT="RIGHT",T.DOWN="DOWN",T.LEFT="LEFT",T.NONE="NONE";var _=Object.defineProperty,k=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,R=function(n,e,t){return e in n?_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t};!function(e,t){for(var r in t||(t={}))B.call(t,r)&&R(e,r,t[r]);if(k){var o,i=n(k(t));try{for(i.s();!(o=i.n()).done;){r=o.value;L.call(t,r)&&R(e,r,t[r])}}catch(u){i.e(u)}finally{i.f()}}}({linear:function(n){return n}},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]})}}}))}();
