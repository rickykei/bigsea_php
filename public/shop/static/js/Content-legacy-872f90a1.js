System.register(["./element-plus-legacy-0c4dfff3.js","./UE-legacy-19a3040b.js","./index-legacy-f3f9ad0b.js","./@vue-legacy-0c361579.js","./@vueuse-legacy-6f1b74e8.js","./lodash-es-legacy-48fc93c8.js","./async-validator-legacy-aa1fd2de.js","./@element-plus-legacy-09b16737.js","./dayjs-legacy-e1dcc8a8.js","./call-bind-legacy-8dd3cf22.js","./get-intrinsic-legacy-675d089b.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./Upload-legacy-db261d1a.js","./vue-router-legacy-27dfcc30.js","./pinia-legacy-7902df74.js","./vue-demi-legacy-97cfbb01.js","./axios-legacy-40880ebd.js","./qs-legacy-44633826.js","./side-channel-legacy-e9f055aa.js","./object-inspect-legacy-c9b49e9b.js","./vue-ueditor-wrap-legacy-b853d0ad.js"],(function(e,l){"use strict";var n,t,c,a,u,s,i,o,g;return{setters:[function(e){n=e.d},function(e){t=e.U},function(e){c=e._},function(e){a=e.al,u=e.o,s=e.c,i=e.P,o=e.S,g=e.a},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l={components:{Uediter:t},data:function(){return{ueditor:{text:"",config:{initialFrameWidth:400,initialFrameHeight:500}}}},created:function(){},inject:["form"],methods:{getContent:function(){},contentChangeFunc:function(e){this.form.model.content=e}}},r=g("div",{class:"common-form mt50"},"商品详情",-1),j={class:"edit_container"};e("default",c(l,[["render",function(e,l,t,c,y,d){var f=a("Uediter"),m=n;return u(),s("div",null,[r,i(m,{label:"内容："},{default:o((function(){return[g("div",j,[i(f,{text:d.form.model.content,config:y.ueditor.config,ref:"ue",onContentChange:d.contentChangeFunc},null,8,["text","config","onContentChange"])])]})),_:1})])}]]))}}}));