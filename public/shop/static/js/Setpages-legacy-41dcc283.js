System.register(["./element-plus-legacy-0c4dfff3.js","./@vue-legacy-0c361579.js","./index-legacy-f3f9ad0b.js","./@vueuse-legacy-6f1b74e8.js","./lodash-es-legacy-48fc93c8.js","./async-validator-legacy-aa1fd2de.js","./@element-plus-legacy-09b16737.js","./dayjs-legacy-e1dcc8a8.js","./call-bind-legacy-8dd3cf22.js","./get-intrinsic-legacy-675d089b.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-27dfcc30.js","./pinia-legacy-7902df74.js","./vue-demi-legacy-97cfbb01.js","./axios-legacy-40880ebd.js","./qs-legacy-44633826.js","./side-channel-legacy-e9f055aa.js","./object-inspect-legacy-c9b49e9b.js","./vue-ueditor-wrap-legacy-b853d0ad.js"],(function(e,l){"use strict";var t,n,u,a,o,c,r,s,i,d,m,g,y,f,p,j,h,I,v,_,b=document.createElement("style");return b.textContent=".diy-setpages-cover>img{width:60px;height:60px}\n",document.head.appendChild(b),{setters:[function(e){t=e.h,n=e.w,u=e.d,a=e.c,o=e.J,c=e.e,r=e.b},function(e){s=e.am,i=e.o,d=e.c,m=e.a,g=e.X,y=e.P,f=e.S,p=e.W,j=e.$,h=e.V,I=e.Y,v=e.a1},function(e){_=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l={data:function(){return{logo_type:"image"}},props:["curItem","selectedIndex","opts"],created:function(){this.curItem.style.toplogo,this.logo_type="image"},methods:{logechange:function(e){this.curItem.style.toplogo="text"==e?"text":""}}},b={class:"common-form"},V={class:"diy-setpages-cover"},x=m("div",null,"建议尺寸60×60",-1),C=m("p",{class:"gray"},"页面名称仅用于后台查找",-1),k=m("p",{class:"gray"},"小程序端转发时显示的标题",-1),w={class:"d-s-c"};e("default",_(l,[["render",function(e,l,_,B,U,E){var S=t,$=n,q=u,z=a,J=o,P=c,R=r,W=s("img-url");return i(),d("div",null,[m("div",b,[m("span",null,g(_.curItem.name),1)]),y(R,{size:"small",model:_.curItem,"label-width":"100px"},{default:f((function(){return[y(q,{label:"标题类型："},{default:f((function(){return[y($,{modelValue:U.logo_type,"onUpdate:modelValue":l[0]||(l[0]=function(e){return U.logo_type=e}),onChange:E.logechange},{default:f((function(){return[y(S,{label:"image"},{default:f((function(){return[p("图片")]})),_:1})]})),_:1},8,["modelValue","onChange"])]})),_:1}),y(q,{label:"图片："},{default:f((function(){return[m("div",V,[_.curItem.style.toplogo?j((i(),d("img",{key:0,alt:"",onClick:l[1]||(l[1]=function(l){return e.$parent.onEditorSelectImage(_.curItem.style,"toplogo")}),style:h("background-color:"+_.curItem.style.titleBackgroundColor+" ;")},null,4)),[[W,_.curItem.style.toplogo]]):I("",!0),x])]})),_:1}),y(q,{label:"页面名称："},{default:f((function(){return[y(z,{modelValue:_.curItem.params.name,"onUpdate:modelValue":l[2]||(l[2]=function(e){return _.curItem.params.name=e})},null,8,["modelValue"]),C]})),_:1}),y(q,{label:"分享标题："},{default:f((function(){return[y(z,{modelValue:_.curItem.params.share_title,"onUpdate:modelValue":l[3]||(l[3]=function(e){return _.curItem.params.share_title=e})},null,8,["modelValue"]),k]})),_:1}),y(q,{label:"背景颜色："},{default:f((function(){return[m("div",w,[y(J,{modelValue:_.curItem.style.titleBackgroundColor,"onUpdate:modelValue":l[4]||(l[4]=function(e){return _.curItem.style.titleBackgroundColor=e})},null,8,["modelValue"]),y(P,{type:"button",style:{"margin-left":"10px"},onClick:l[5]||(l[5]=v((function(l){return e.$parent.onEditorResetColor(_.curItem.style,"titleBackgroundColor","#ffffff")}),["stop"]))},{default:f((function(){return[p("重置")]})),_:1})])]})),_:1})]})),_:1},8,["model"])])}]]))}}}));
