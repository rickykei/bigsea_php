import{g as s,f as a,v as t}from"./element-plus-2311c378.js";import{S as i}from"./store-0ee46d2f.js";import{_ as l}from"./index-4e0f3baf.js";import{$ as e,o as d,c as r,a as o,P as c,S as n,X as p,Q as m,a8 as u}from"./@vue-8009ac6a.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-ueditor-wrap-71bb720e.js";const v={data:()=>({active:0,loading:!0,detail:{total_price:"",income_money:"",order_count:"",refund_money:""},activeName:"sale",salesNumRank:[],salesMoneyRank:[]}),created(){this.getParams()},methods:{getParams(){let s=this;s.loading=!0,i.storeSurvey({},!0).then((a=>{s.detail=a.data.detail,s.salesNumRank=a.data.salesNumRank,s.salesMoneyRank=a.data.salesMoneyRank,s.loading=!1})).catch((a=>{s.loading=!1}))},handleClick(){this.getParams()}}},y={class:"pb50"},j={class:"product-content"},g=o("div",{class:"common-form"},"实时概况",-1),h={class:"table-wrap"},b={class:"pb16 grid-content bg-purple"},_=o("div",null,"营业总额(元)",-1),f={class:"detail_prici"},k={class:"pb16 grid-content bg-purple"},x=o("div",null,"预计收入(元)",-1),w={class:"detail_prici"},R={class:"pb16 grid-content bg-purple"},N=o("div",null,"有效订单(元)",-1),M={class:"detail_prici"},P={class:"pb16 grid-content bg-purple"},S=o("div",null,"退款金额(元)",-1),q={class:"detail_prici"},z={class:"product-content d-b-c"},C={class:"flex-1"},Q={class:"right-box d-s-s d-c pr16",style:{width:"80%"}},X=o("div",{class:"lh30 f16 tl"},"销量排行榜",-1),$={class:"list ww100"},A={key:0},B={class:"key-box"},D={class:"text-ellipsis-2 flex-1 ml10"},E={class:"gray9 tr",style:{width:"100px"}},F={class:"gray9 tr",style:{width:"100px"}},G={key:1,class:"tc pt30"},H={class:"flex-1"},I={class:"right-box d-s-s d-c pr16",style:{width:"80%"}},J=o("div",{class:"lh30 f16 tl"},"销售额排行榜",-1),K={class:"list ww100"},L={key:0},O={class:"key-box"},T={class:"text-ellipsis-2 flex-1 ml10"},U={class:"gray9 tr",style:{width:"100px"}},V={class:"gray9 tr",style:{width:"100px"}},W={key:1,class:"tc pt30"};const Y=l(v,[["render",function(i,l,v,Y,Z,ss){const as=s,ts=a,is=t;return e((d(),r("div",y,[o("div",j,[g,o("div",h,[c(ts,{gutter:20},{default:n((()=>[c(as,{span:6},{default:n((()=>[o("div",b,[_,o("div",f,p(Z.detail.total_price),1)])])),_:1}),c(as,{span:6},{default:n((()=>[o("div",k,[x,o("div",w,p(Z.detail.income_money),1)])])),_:1}),c(as,{span:6},{default:n((()=>[o("div",R,[N,o("div",M,p(Z.detail.order_count),1)])])),_:1}),c(as,{span:6},{default:n((()=>[o("div",P,[S,o("div",q,p(Z.detail.refund_money),1)])])),_:1})])),_:1})]),o("div",z,[o("div",C,[o("div",Q,[X,o("div",$,[Z.salesNumRank.length>0?(d(),r("ul",A,[(d(!0),r(m,null,u(Z.salesNumRank,((s,a)=>(d(),r("li",{key:a,class:"d-s-c p-6-0 border-b-d"},[o("div",B,p(a+1),1),o("div",D,p(s.product_name),1),o("div",E," 销售额："+p(s.total_price),1),o("div",F," 销量："+p(s.total_num),1)])))),128))])):(d(),r("div",G,"暂无上榜记录"))])])]),o("div",H,[o("div",I,[J,o("div",K,[Z.salesMoneyRank.length>0?(d(),r("ul",L,[(d(!0),r(m,null,u(Z.salesMoneyRank,((s,a)=>(d(),r("li",{key:a,class:"d-s-c p-6-0 border-b-d"},[o("div",O,p(a+1),1),o("div",T,p(s.product_name),1),o("div",U," 销售额："+p(s.total_price),1),o("div",V," 销量："+p(s.total_num),1)])))),128))])):(d(),r("div",W,"暂无上榜记录"))])])])])])])),[[is,Z.loading]])}]]);export{Y as default};
