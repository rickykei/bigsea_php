!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function t(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(n){l(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(n,t,l){return(t=function(n){var t=function(n,t){if("object"!==e(n)||null===n)return n;var l=n[Symbol.toPrimitive];if(void 0!==l){var i=l.call(n,t||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"===e(t)?t:String(t)}(t))in n?Object.defineProperty(n,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[t]=l,n}System.register(["./index-legacy-876ca1cb.js","./vue-router-legacy-27dfcc30.js","./@vue-legacy-0c361579.js","./pinia-legacy-7902df74.js","./vue-demi-legacy-97cfbb01.js","./axios-legacy-40880ebd.js","./qs-legacy-44633826.js","./side-channel-legacy-e9f055aa.js","./get-intrinsic-legacy-675d089b.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./call-bind-legacy-8dd3cf22.js","./object-inspect-legacy-c9b49e9b.js","./element-plus-legacy-0c4dfff3.js","./@vueuse-legacy-6f1b74e8.js","./lodash-es-legacy-48fc93c8.js","./async-validator-legacy-aa1fd2de.js","./@element-plus-legacy-09b16737.js","./dayjs-legacy-e1dcc8a8.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-ueditor-wrap-legacy-b853d0ad.js"],(function(e,n){"use strict";var l,i,u,c,r,s,o,a,m,f,y,h,p,v,d,b=document.createElement("style");return b.textContent=".home-login .icon-tubiaozhizuomoban-{color:#3a8ee6;font-size:28px}.menu-item-icon.icon.iconfont{font-size:20px}.menu-item .item-box{display:flex}\n",document.head.appendChild(b),{setters:[function(e){l=e.u,i=e._},function(e){u=e.u},function(e){c=e.F,r=e.K,s=e.L,o=e.n,a=e.o,m=e.c,f=e.a,y=e.M,h=e.X,p=e.Q,v=e.a8,d=e.Y},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n=c({components:{},setup:function(e,n){var i=n.emit,c=l(),a=c.userInfo,m=c.bus_emit,f=c.menus,y=c.renderMenus,h=u(),p=r({route:h,munu_name:"首页",active_menu:null,active_child:0,menuList:y,shop_name:"",menus:f}),v=function(e){var n=e.path,t=null,l=null;if(p.menuList&&p.menuList.length>0){for(var u=0;u<p.menuList.length;u++){if(p.menuList[u].path==n){t=u;break}for(var c=0;c<p.menuList[u].children.length;c++)if(p.menuList[u].children[c].path==n){t=u,l=c;break}if(!t&&!l&&p.menuList[u].childrenList.includes(n)){t=u;break}}p.active_menu=t,p.active_child=l,i("selectMenu",t)}o((function(){m("MenuName",e.meta&&e.meta.showMenuTitle||e.meta.title)}))};return v(h),t(t({},s(p)),{},{userInfo:a,selectMenu:v,bus_emit:m})},mounted:function(){},methods:{choseMenu:function(e,n,t){if(1==e)this.active_menu=null,this.active_child=null,this.$router.push("/"),this.$emit("selectMenu",null);else if(2==e)this.active_menu=t,this.active_child=0,this.$router.push(n.redirect_name),n.children&&this.$emit("selectMenu",!1);else if(3==e){var l=n.path;n.redirect_name&&(l=n.redirect_name),this.active_child=t,this.$router.push(l)}}}}),b={class:"left-menu-wrapper"},g={class:"menu-wrapper"},j={class:"home-login"},_=[f("span",{class:"icon iconfont icon-tubiaozhizuomoban-"},null,-1)],k={class:"d-c-c"},O={class:"p-10-0 blue fb tc"},w={class:"nav-wrapper mt10"},L={class:"first-menu-content"},M={class:"nav-ul"},P=["onClick"],S={class:"item-box"},x={class:"child-menu-wrapper"},z={class:"child-menu right-animation"},C={key:0},$=["onClick"],D={class:"name"};e("default",i(n,[["render",function(e,n,t,l,i,u){return a(),m("div",b,[f("div",g,[f("div",j,[f("div",{class:y(null!=e.active_menu?"home-icon":"home-icon router-link-active"),onClick:n[0]||(n[0]=function(n){return e.choseMenu(1,null,null)})},_,2)]),f("div",k,[f("span",O,h(e.userInfo.shop_name||"点餐系统连锁总店"),1)]),f("div",w,[f("div",L,[f("ul",M,[(a(!0),m(p,null,v(e.menuList,(function(n,t){return a(),m(p,{key:t},[1==n.is_menu?(a(),m("li",{key:0,class:y(e.active_menu==t?"menu-item router-link-active":"menu-item"),onClick:function(l){return e.choseMenu(2,n,t)}},[f("div",S,[f("span",{class:y("icon iconfont menu-item-icon "+n.icon)},null,2),f("span",null,h(n.name),1)])],10,P)):d("",!0)],64)})),128))])])])]),f("div",x,[f("div",z,[null!=e.active_menu?(a(),m("ul",C,[(a(!0),m(p,null,v(e.menuList[e.active_menu].children,(function(n,t){return a(),m(p,{key:t},[1==n.is_menu?(a(),m("li",{key:0,class:y(e.active_child==t?"routre-link router-link-active":"router-link"),onClick:function(l){return e.choseMenu(3,n,t)}},[f("span",D,h(n.name),1)],10,$)):d("",!0)],64)})),128))])):d("",!0)])])])}]]))}}}))}();