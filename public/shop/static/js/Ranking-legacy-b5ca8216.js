System.register(["./element-plus-legacy-0c4dfff3.js","./index-legacy-f3f9ad0b.js","./@vue-legacy-0c361579.js","./@vueuse-legacy-6f1b74e8.js","./lodash-es-legacy-48fc93c8.js","./async-validator-legacy-aa1fd2de.js","./@element-plus-legacy-09b16737.js","./dayjs-legacy-e1dcc8a8.js","./call-bind-legacy-8dd3cf22.js","./get-intrinsic-legacy-675d089b.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-27dfcc30.js","./pinia-legacy-7902df74.js","./vue-demi-legacy-97cfbb01.js","./axios-legacy-40880ebd.js","./qs-legacy-44633826.js","./side-channel-legacy-e9f055aa.js","./object-inspect-legacy-c9b49e9b.js","./vue-ueditor-wrap-legacy-b853d0ad.js"],(function(e,a){"use strict";var l,t,n,s,i,c,u,d,o,r,g,h,y,m,p,v=document.createElement("style");return v.textContent=".right-box[data-v-9d310522]{padding:10px 20px;width:70%;box-sizing:border-box}.Echarts>div[data-v-9d310522]{height:400px}.right-box .list .key-box[data-v-9d310522]{width:20px;height:20px;line-height:20px;border-radius:50%;font-weight:700;text-align:center;color:#fff;background:red}.right-box .list img[data-v-9d310522]{width:30px;height:30px}\n",document.head.appendChild(v),{setters:[function(e){l=e.s,t=e.t},function(e){n=e._},function(e){s=e.o,i=e.c,c=e.a,u=e.P,d=e.S,o=e.Q,r=e.a8,g=e.X,h=e.W,y=e.Y,m=e.bb,p=e.b9},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var a={data:function(){return{activeName:"sale",listData:[]}},inject:["dataRank"],created:function(){this.listData=this.dataRank.salesMoneyRank},mounted:function(){},methods:{handleClick:function(){"sale"==this.activeName?this.listData=this.dataRank.salesNumRank:"view"==this.activeName&&(this.listData=this.dataRank.salesMoneyRank)}}},v={class:"right-box d-s-s d-c"},j=function(e){return m("data-v-9d310522"),e=e(),p(),e}((function(){return c("div",{class:"lh30 f16 tl"},"商品排行榜",-1)})),b={class:"ww100 mt10"},x={class:"list ww100"},f={key:0},k={class:"key-box"},w={class:"text-ellipsis-2 flex-1 ml10"},_={class:"gray9 tr",style:{width:"200px"}},N={key:1,class:"tc pt30"};e("default",n(a,[["render",function(e,a,n,m,p,R){var C=l,D=t;return s(),i("div",v,[j,c("div",b,[u(D,{modelValue:p.activeName,"onUpdate:modelValue":a[0]||(a[0]=function(e){return p.activeName=e}),type:"card",onTabChange:R.handleClick},{default:d((function(){return[u(C,{label:"销量TOP10",name:"sale"}),u(C,{label:"销售额TOP10",name:"view"})]})),_:1},8,["modelValue","onTabChange"])]),c("div",x,[p.listData.length>0?(s(),i("ul",f,[(s(!0),i(o,null,r(p.listData,(function(e,a){return s(),i("li",{key:a,class:"d-s-c p-6-0 border-b-d"},[c("span",k,g(a+1),1),c("span",w,g(e.product_name),1),c("span",_,["sale"==p.activeName?(s(),i(o,{key:0},[h(" 销量："+g(e.total_num)+" 销售额："+g(e.total_price),1)],64)):y("",!0),"view"==p.activeName?(s(),i(o,{key:1},[h(" 销量："+g(e.total_num)+" 销售额："+g(e.total_price),1)],64)):y("",!0)])])})),128))])):(s(),i("div",N,"暂无上榜记录"))])])}],["__scopeId","data-v-9d310522"]]))}}}));