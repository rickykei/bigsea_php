import{x as a,y as e,A as t,j as s,k as l,B as i,C as o,D as r,m as d,v as p}from"./element-plus-2311c378.js";import{C as n}from"./cash-98903578.js";import{_ as m}from"./index-cf2f72b9.js";import{$ as c,o as u,T as _,S as j,P as b,a as h,X as f,c as v,Y as y,bb as x,b9 as g}from"./@vue-8009ac6a.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-ueditor-wrap-71bb720e.js";const w={data:()=>({dialogVisible:!1,loading:!0,tableData:[],detail:{}}),props:["isPopup","order_id"],watch:{isPopup:function(a,e){a!=e&&this.getdata()}},methods:{getdata(){let a=this;a.loading=!0,n.orderRecordDetail({order_id:a.order_id},!0).then((e=>{a.loading=!1,a.tableData=e.data.detail.product,a.detail=e.data.detail})).catch((e=>{a.loading=!1}))},handleClose(a){this.$emit("close")}}},k=a=>(x("data-v-66c13c07"),a=a(),g(),a),D={class:"p30 ww100"},C=k((()=>h("div",{class:"common-form"},"订单信息",-1))),P={class:"p-0-20"},q={key:0},z=k((()=>h("div",{class:"common-form"},"订单费用",-1))),F=k((()=>h("div",{class:"common-form"},"商品信息",-1)));const I=m(w,[["render",function(n,m,x,g,w,k){const I=a,$=e,A=t,B=s,N=l,R=i,S=o,T=r,V=d,X=p;return c((u(),_(V,{title:"提示","model-value":x.isPopup,width:"80%","before-close":k.handleClose},{default:j((()=>[b(T,null,{default:j((()=>[h("div",D,[w.loading?y("",!0):(u(),_(T,{key:0},{default:j((()=>[b($,{width:"400px",class:"border"},{default:j((()=>[C,h("div",P,[h("span",null,"订单类型："+f(w.detail.delivery_type.text),1),b(I),w.detail.user?(u(),v("span",q,"用户信息："+f(w.detail.user.nickName),1)):y("",!0),b(I),h("span",null,"下单时间："+f(w.detail.create_time),1),b(I),h("span",null,"订单编号："+f(w.detail.order_no),1),b(I),h("span",null,"实付金额："+f(w.detail.pay_price),1),b(I),h("span",null,"支付状态："+f(w.detail.pay_status.text),1),b(I),h("span",null,"付款方式："+f(w.detail.pay_type.text),1),b(I),h("span",null,"订单状态："+f(w.detail.order_status.text),1),b(I),h("span",null,"备注："+f(w.detail.buyer_remark),1)])])),_:1}),b(S,{class:"ww100 p-0-20 main-box"},{default:j((()=>[b(A,{height:"430px",class:"border mb16"},{default:j((()=>[z,h("div",null,[h("span",null,"商品价格："+f(w.detail.total_price),1),b(I),h("span",null,"包装费："+f(w.detail.bag_price),1),b(I),h("span",null,"配送费："+f(w.detail.express_price),1),b(I),h("span",null,"服务费："+f(w.detail.service_money),1),b(I),h("span",null,"优惠："+f((w.detail.order_price-w.detail.pay_price).toFixed(2)),1),b(I),h("span",null,"商户实际收入："+f((w.detail.pay_price-w.detail.refund_money).toFixed(2)),1)])])),_:1}),b(R,{class:"border",height:"400px"},{default:j((()=>[F,c((u(),_(N,{size:"small",data:w.tableData,border:"",style:{width:"100%"}},{default:j((()=>[b(B,{prop:"product_name",label:"商品名称"}),b(B,{prop:"product_id",label:"商品ID"}),b(B,{prop:"product_price",label:"商品价格"}),b(B,{prop:"total_num",label:"数量"}),b(B,{prop:"total_price",label:"小计(元)"})])),_:1},8,["data"])),[[X,w.loading]])])),_:1})])),_:1})])),_:1}))])])),_:1})])),_:1},8,["model-value","before-close"])),[[X,w.loading]])}],["__scopeId","data-v-66c13c07"]]);export{I as default};
