import{f as a,v as t,g as s}from"./element-plus-2311c378.js";import{I as d}from"./index-e1758f1a.js";import l from"./Ranking-6120ce50.js";import o from"./Transaction-afa6805a.js";import{_ as e,u as i}from"./index-4e0f3baf.js";import{$ as n,c as r,P as c,S as p,Y as _,a as u,T as y,o as m,X as f,W as v,bb as g,b9 as h,al as j}from"./@vue-8009ac6a.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./echarts-2361e669.js";import"./tslib-a4e99503.js";import"./zrender-1189e17c.js";import"./statistics-cdd1a0c6.js";import"./DateTime-12b085dd.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-ueditor-wrap-71bb720e.js";const{userInfo:b}=i(),w={components:{Ranking:l,Transaction:o},data:()=>({loading:!0,top_data:[],wait_data:{order:{},agent:{},supplier:{},activity:{},audit:{},stock:{}},today_data:{order_total_price:{},order_total:{},new_user_total:{},new_supplier_total:{},order_user_total:{},income_money:{}},product_data:{salesMoneyRank:[],salesNumRank:[]},user_type:""}),provide:function(){return{dataRank:this.product_data}},mounted(){this.getData(),this.getBaseInof()},methods:{async getBaseInof(){this.user_type=b.user_type},getData(){let a=this;a.loading=!0,d.getCount(!0).then((t=>{a.loading=!1,Object.assign(a.product_data,t.data.data.product_data),a.top_data=t.data.data.top_data,a.wait_data=t.data.data.wait_data,a.today_data=t.data.data.today_data})).catch((a=>{}))}}},k=a=>(g("data-v-7cfafe42"),a=a(),h(),a),x={class:"home"},F={key:0,class:"operation-wrap",style:{"background-color":"#FFFFFF"}},R={class:"grid-content blue"},z={class:"info"},I=k((()=>u("p",null,"门店总量",-1))),T={class:"grid-content yellow"},D={class:"info"},q=k((()=>u("p",null,"用户总量",-1))),B={class:"grid-content purple"},M={class:"info"},C=k((()=>u("p",null,"营业总量",-1))),N={class:"grid-content orderred"},O={class:"info"},P=k((()=>u("p",null,"订单总量",-1))),S={key:1,class:"operation-wrap",style:{"background-color":"#FFFFFF"}},W={class:"grid-content blue"},X={class:"info"},Y=k((()=>u("p",null,"订单总量",-1))),$={class:"grid-content purple"},A={class:"info"},E=k((()=>u("p",null,"商品总量",-1))),G={class:"grid-content yellow"},H={class:"info"},J={style:{"font-size":"32px"}},K=k((()=>u("p",null,"销售总额(元)",-1))),L={class:"grid-content orderred"},Q={class:"info"},U=k((()=>u("p",null,"预计收入",-1))),V={class:"home-index"},Z={class:"flex-1"},aa={class:"main-index"},ta=k((()=>u("div",{class:"common-form mt16",style:{"font-size":"18px"}}," 今日概况 ",-1))),sa={class:"grid-content"},da={class:"info t-c"},la=k((()=>u("p",{class:"des"},"销售额(元)",-1))),oa={class:"yesterday"},ea={class:"grid-content"},ia={class:"info"},na=k((()=>u("p",{class:"des"},"支付订单数",-1))),ra={class:"yesterday"},ca={class:"grid-content"},pa={class:"info"},_a=k((()=>u("p",{class:"des"},"新增用户数",-1))),ua={class:"yesterday"},ya={class:"grid-content"},ma={class:"info"},fa=k((()=>u("p",{class:"des"},"新增商户",-1))),va={class:"yesterday"},ga={class:"grid-content"},ha={class:"info"},ja=k((()=>u("p",{class:"des"},"销售额(元)",-1))),ba={class:"yesterday"},wa={class:"grid-content"},ka={class:"info"},xa=k((()=>u("p",{class:"des"},"支付订单数",-1))),Fa={class:"yesterday"},Ra={class:"grid-content"},za={class:"info"},Ia=k((()=>u("p",{class:"des"},"下单用户数",-1))),Ta={class:"yesterday"},Da={class:"grid-content"},qa={class:"info"},Ba=k((()=>u("p",{class:"des"},"预计收入",-1))),Ma={class:"yesterday"},Ca={class:"matters-wrap",style:{width:"100%"}},Na={class:"matters-wrap"},Oa=k((()=>u("div",{class:"common-form mt16",style:{"font-size":"18px"}},[v(" 待办事项"),u("span",{class:"ml10 f14 gray",style:{"font-weight":"normal"}},"请尽快处理，以免影响营业")],-1))),Pa={class:"matters"},Sa={class:"box"},Wa={class:"matters_item"},Xa={class:"fb"},Ya={class:"fb"};const $a=e(w,[["render",function(d,l,o,e,i,g){const h=s,b=a,w=j("Transaction"),k=j("Ranking"),$a=t;return n((m(),r("div",x,[0==i.user_type?(m(),r("div",F,[c(b,null,{default:p((()=>[c(h,{span:6,class:"d-c-c"},{default:p((()=>[u("div",R,[u("div",z,[u("h3",null,f(i.top_data.supplier_total),1),I])])])),_:1}),c(h,{span:6,class:"d-c-c"},{default:p((()=>[u("div",T,[u("div",D,[u("h3",null,f(i.top_data.user_total),1),q])])])),_:1}),c(h,{span:6,class:"d-c-c"},{default:p((()=>[u("div",B,[u("div",M,[u("h3",null,f(i.top_data.total_money),1),C])])])),_:1}),c(h,{span:6,class:"d-c-c"},{default:p((()=>[u("div",N,[u("div",O,[u("h3",null,f(i.top_data.order_total),1),P])])])),_:1})])),_:1})])):_("",!0),1==i.user_type?(m(),r("div",S,[c(b,null,{default:p((()=>[c(h,{span:6,class:"d-c-c"},{default:p((()=>[u("div",W,[u("div",X,[u("h3",null,f(i.top_data.order_total),1),Y])])])),_:1}),c(h,{span:6,class:"d-c-c"},{default:p((()=>[u("div",$,[u("div",A,[u("h3",null,f(i.top_data.product_total),1),E])])])),_:1}),c(h,{span:6,class:"d-c-c"},{default:p((()=>[u("div",G,[u("div",H,[u("h3",J,f(Math.floor(i.top_data.total_money)),1),K])])])),_:1}),c(h,{span:6,class:"d-c-c"},{default:p((()=>[u("div",L,[u("div",Q,[u("h3",null,f(i.top_data.income_money),1),U])])])),_:1})])),_:1})])):_("",!0),u("div",V,[u("div",Z,[u("div",aa,[ta,0==i.user_type?(m(),y(b,{key:0,class:"border-b-l"},{default:p((()=>[c(h,{span:6},{default:p((()=>[u("div",sa,[u("div",da,[la,u("h3",null,f(i.today_data.order_total_price.tday),1),u("p",oa,"昨日："+f(i.today_data.order_total_price.ytd),1)])])])),_:1}),c(h,{span:6},{default:p((()=>[u("div",ea,[u("div",ia,[na,u("h3",null,f(i.today_data.order_total.tday),1),u("p",ra,"昨日："+f(i.today_data.order_total.ytd),1)])])])),_:1}),c(h,{span:6},{default:p((()=>[u("div",ca,[u("div",pa,[_a,u("h3",null,f(i.today_data.new_user_total.tday),1),u("p",ua,"昨日："+f(i.today_data.new_user_total.ytd),1)])])])),_:1}),c(h,{span:6},{default:p((()=>[u("div",ya,[u("div",ma,[fa,u("h3",null,f(i.today_data.new_supplier_total.tday),1),u("p",va,"昨日："+f(i.today_data.new_supplier_total.ytd),1)])])])),_:1})])),_:1})):_("",!0),1==i.user_type?(m(),y(b,{key:1,class:"border-b-l"},{default:p((()=>[c(h,{span:6},{default:p((()=>[u("div",ga,[u("div",ha,[ja,u("h3",null,f(i.today_data.order_total_price.tday),1),u("p",ba,"昨日："+f(i.today_data.order_total_price.ytd),1)])])])),_:1}),c(h,{span:6},{default:p((()=>[u("div",wa,[u("div",ka,[xa,u("h3",null,f(i.today_data.order_total.tday),1),u("p",Fa,"昨日："+f(i.today_data.order_total.ytd),1)])])])),_:1}),c(h,{span:6},{default:p((()=>[u("div",Ra,[u("div",za,[Ia,u("h3",null,f(i.today_data.order_user_total.tday),1),u("p",Ta,"昨日："+f(i.today_data.order_user_total.ytd),1)])])])),_:1}),c(h,{span:6},{default:p((()=>[u("div",Da,[u("div",qa,[Ba,u("h3",null,f(i.today_data.income_money.tday),1),u("p",Ma,"昨日："+f(i.today_data.income_money.ytd),1)])])])),_:1})])),_:1})):_("",!0),u("div",null,[u("div",Ca,[c(w)])])])]),u("div",Na,[Oa,c(b,{class:"matters_box"},{default:p((()=>[c(h,{span:24},{default:p((()=>[u("div",Pa,[u("div",Sa,[u("ul",Wa,[u("li",null,[u("span",Xa,f(i.wait_data.order.disposal),1),v("待处理订单")]),u("li",null,[u("span",Ya,f(i.wait_data.stock.product),1),v("库存告急")])])])])])),_:1})])),_:1}),i.loading?_("",!0):(m(),y(k,{key:0}))])])])),[[$a,i.loading]])}],["__scopeId","data-v-7cfafe42"]]);export{$a as default};