System.register(["./element-plus-legacy-0c4dfff3.js","./setting-legacy-2cf1b2a6.js","./index-legacy-876ca1cb.js","./@vue-legacy-0c361579.js","./@vueuse-legacy-6f1b74e8.js","./lodash-es-legacy-48fc93c8.js","./async-validator-legacy-aa1fd2de.js","./@element-plus-legacy-09b16737.js","./dayjs-legacy-e1dcc8a8.js","./call-bind-legacy-8dd3cf22.js","./get-intrinsic-legacy-675d089b.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-27dfcc30.js","./pinia-legacy-7902df74.js","./vue-demi-legacy-97cfbb01.js","./axios-legacy-40880ebd.js","./qs-legacy-44633826.js","./side-channel-legacy-e9f055aa.js","./object-inspect-legacy-c9b49e9b.js","./vue-ueditor-wrap-legacy-b853d0ad.js"],(function(e,l){"use strict";var n,a,t,s,c,u,o,i,r,d,y,m,g,f=document.createElement("style");return f.textContent=".tips{color:#ccc}\n",document.head.appendChild(f),{setters:[function(e){n=e.E,a=e.c,t=e.d,s=e.e,c=e.b},function(e){u=e.S},function(e){o=e._},function(e){i=e.o,r=e.c,d=e.P,y=e.S,m=e.W,g=e.a},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l={data:function(){return{form:{close_days:"",receive_days:""},loading:!1}},created:function(){this.getParams()},methods:{getParams:function(){var e=this;u.tradeDetail({},!0).then((function(l){if(1==l.code){var n=l.data.vars.values;e.form.close_days=n.order.close_days,e.form.receive_days=n.order.receive_days}})).catch((function(e){}))},handleCheckedCitiesChange:function(e){},onSubmit:function(){var e=this;e.loading=!0;var l=e.form;u.editTrade(l,!0).then((function(l){e.loading=!1,n({message:"恭喜你，交易设置成功",type:"success"}),e.$router.push("/setting/trade/index")})).catch((function(l){e.loading=!1}))}}},f={class:"product-add"},j=g("div",{class:"common-form"},"订单流程设置",-1),p=g("div",{class:"tips"}," 订单下单未付款，n分钟后自动关闭，设置0不自动关闭 ",-1),h=g("div",{class:"tips"}," 如果在期间未核销，系统自动完成核销，设置0不自动核销(不包括桌台订单) ",-1),v={class:"common-button-wrapper"};e("default",o(l,[["render",function(e,l,n,u,o,_){var b=a,x=t,w=s,C=c;return i(),r("div",f,[d(C,{size:"small",ref:"form",model:o.form,"label-width":"150px"},{default:y((function(){return[j,d(x,{label:"未支付订单"},{default:y((function(){return[d(b,{modelValue:o.form.close_days,"onUpdate:modelValue":l[0]||(l[0]=function(e){return o.form.close_days=e}),type:"number",style:{width:"200px"}},null,8,["modelValue"]),m(" 分钟后自动关闭 "),p]})),_:1}),d(x,{label:"已支付订单"},{default:y((function(){return[d(b,{modelValue:o.form.receive_days,"onUpdate:modelValue":l[1]||(l[1]=function(e){return o.form.receive_days=e}),type:"number",style:{width:"200px"}},null,8,["modelValue"]),m(" 分钟后自动核销 "),h]})),_:1}),g("div",v,[d(w,{type:"primary",onClick:_.onSubmit,loading:o.loading},{default:y((function(){return[m("提交")]})),_:1},8,["onClick","loading"])])]})),_:1},8,["model"])])}]]))}}}));