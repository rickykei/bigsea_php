import{g as a,e as s,f as e,j as l,k as t,v as d}from"./element-plus-2311c378.js";import{O as i}from"./order-5d94dd10.js";import{_ as r}from"./index-cf2f72b9.js";import{am as p,$ as c,o as n,c as o,a as u,P as _,S as m,W as y,X as v,T as f,Y as b,M as g,Q as k}from"./@vue-8009ac6a.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-ueditor-wrap-71bb720e.js";const w={components:{},data:()=>({active:0,loading:!0,detail:{order_id:0,pay_status:[],pay_type:[],delivery_type:[],user:{},address:[],product:[],order_status:[],extract:[],delivery_status:[],supplier:{name:""}}}),created(){this.getParams()},methods:{next(){this.active++>4&&(this.active=0)},getParams(){let a=this;const s=this.$route.query.order_id;i.takeOrderdetail({order_id:s},!0).then((s=>{a.loading=!1,a.detail=s.data.detail})).catch((s=>{a.loading=!1}))},cancelFunc(){this.$router.back(-1)}}},j={class:"pb50"},h={class:"product-content"},x=u("div",{class:"common-form"},"基本信息",-1),z={class:"table-wrap"},C={class:"pb16"},P=u("span",{class:"gray9"},"订单号：",-1),q={class:"pb16"},$=u("span",{class:"gray9"},"买家：",-1),F={class:"pb16"},O=u("span",{class:"gray9"},"订单金额 (元)：",-1),D={class:"pb16"},I=u("span",{class:"gray9"},"配送费 (元)：",-1),M={class:"pb16"},N=u("span",{class:"gray9"},"包装费 (元)：",-1),Q={key:0,class:"pb16"},S=u("span",{class:"gray9"},"优惠券抵扣 (元)：",-1),T={key:0,class:"pb16"},W=u("span",{class:"gray9"},"积分抵扣 (元)：",-1),X={key:0,class:"pb16"},Y=u("span",{class:"gray9"},"满减金额 (元)：",-1),A={class:"pb16"},B=u("span",{class:"gray9"},"实付款金额 (元)：",-1),E={class:"pb16"},G=u("span",{class:"gray9"},"支付方式：",-1),H={class:"pb16"},J=u("span",{class:"gray9"},"配送方式：",-1),K={class:"pb16"},L=u("span",{class:"gray9"},"配送状态：",-1),R={class:"pb16"},U={key:0,class:"gray9"},V={key:1,class:"gray9"},Z={class:"pb16"},aa=u("span",{class:"gray9"},"交易状态：",-1),sa=u("div",{class:"common-form mt16"},"门店信息",-1),ea={class:"table-wrap"},la={class:"pb16"},ta=u("span",{class:"gray9"},"门店名称：",-1),da=u("div",{class:"common-form mt16"},"商品信息",-1),ia={class:"table-wrap"},ra={class:"product-info"},pa={class:"pic"},ca={class:"info"},na={class:"name"},oa={key:0,class:"gray9"},ua={key:1,class:"orange"},_a={class:"price"},ma={key:0,class:"ml10"},ya={key:0},va=u("div",{class:"common-form mt16"},"配送信息",-1),fa={class:"table-wrap"},ba={class:"pb16"},ga=u("span",{class:"gray9"},"联系人：",-1),ka={class:"pb16"},wa=u("span",{class:"gray9"},"联系电话：",-1),ja={class:"pb16"},ha=u("span",{class:"gray9"},"联系地址：",-1),xa={class:"pb16"},za=u("span",{class:"gray9"},"备注：",-1),Ca=u("div",{class:"common-form mt16"},"自提用户信息",-1),Pa={key:0,class:"table-wrap"},qa={class:"pb16"},$a=u("span",{class:"gray9"},"联系电话：",-1),Fa={class:"pb16"},Oa=u("span",{class:"gray9"},"备注：",-1),Da={key:2,class:"table-wrap"},Ia=u("div",{class:"common-form mt16"},"付款信息",-1),Ma={class:"table-wrap"},Na={class:"pb16"},Qa=u("span",{class:"gray9"},"应付款金额：",-1),Sa={class:"pb16"},Ta=u("span",{class:"gray9"},"支付方式：",-1),Wa={class:"pb16"},Xa=u("span",{class:"gray9"},"支付流水号：",-1),Ya={class:"pb16"},Aa=u("span",{class:"gray9"},"付款状态：",-1),Ba={class:"pb16"},Ea=u("span",{class:"gray9"},"付款时间：",-1),Ga={class:"pb16"},Ha=u("span",{class:"gray9"},"退款金额：",-1),Ja={key:3},Ka=u("div",{class:"common-form mt16"},"发货信息",-1),La={class:"table-wrap"},Ra={class:"pb16"},Ua=u("span",{class:"gray9"},"发货状态：",-1),Va={key:4,class:"table-wrap"},Za=u("div",{class:"common-form mt16"},"取消信息",-1),as={class:"table-wrap"},ss={class:"pb16"},es=u("span",{class:"gray9"},"商家备注：",-1),ls={key:5},ts=u("div",{class:"common-form mt16"},"门店自提核销",-1),ds={class:"table-wrap"},is={class:"pb16"},rs=u("span",{class:"gray9"},"核销状态：",-1),ps={class:"pb16"},cs=u("span",{class:"gray9"},"核销时间：",-1),ns={class:"common-button-wrapper"};const os=r(w,[["render",function(i,r,w,os,us,_s){const ms=a,ys=s,vs=e,fs=l,bs=t,gs=p("auth"),ks=p("img-url"),ws=d;return c((n(),o("div",j,[u("div",h,[x,u("div",z,[_(vs,null,{default:m((()=>[_(ms,{span:5},{default:m((()=>[u("div",C,[P,y(" "+v(us.detail.order_no),1)])])),_:1}),_(ms,{span:5},{default:m((()=>[u("div",q,[$,y(" "+v(us.detail.user.nickName)+" ",1),u("span",null,"用户ID：("+v(us.detail.user.user_id)+")",1)])])),_:1}),_(ms,{span:5},{default:m((()=>[u("div",F,[O,y(" "+v(us.detail.order_price),1)])])),_:1}),us.detail.express_price>0?(n(),f(ms,{key:0,span:5},{default:m((()=>[u("div",D,[I,y(" "+v(us.detail.express_price),1)])])),_:1})):b("",!0),us.detail.bag_price>0?(n(),f(ms,{key:1,span:5},{default:m((()=>[u("div",M,[N,y(" "+v(us.detail.bag_price),1)])])),_:1})):b("",!0),_(ms,{span:5},{default:m((()=>[us.detail.coupon_money>0?(n(),o("div",Q,[S,y(" "+v(us.detail.coupon_money),1)])):b("",!0)])),_:1}),_(ms,{span:5},{default:m((()=>[us.detail.points_money>0?(n(),o("div",T,[W,y(" "+v(us.detail.points_money),1)])):b("",!0)])),_:1}),_(ms,{span:5},{default:m((()=>[us.detail.fullreduce_money>0?(n(),o("div",X,[Y,y(" "+v(us.detail.fullreduce_money),1)])):b("",!0)])),_:1}),_(ms,{span:5},{default:m((()=>[u("div",A,[B,y(" "+v(us.detail.pay_price),1)])])),_:1}),_(ms,{span:5},{default:m((()=>[u("div",E,[G,y(" "+v(us.detail.pay_type.text),1)])])),_:1}),_(ms,{span:5},{default:m((()=>[u("div",H,[J,y(" "+v(us.detail.delivery_type.text),1)])])),_:1}),_(ms,{span:5},{default:m((()=>[u("div",K,[L,y(" "+v(us.detail.deliver_text),1)])])),_:1}),_(ms,{span:5},{default:m((()=>[u("div",R,[10==us.detail.delivery_type.value?(n(),o("span",U,"配送时间：")):b("",!0),20==us.detail.delivery_type.value?(n(),o("span",V,"取餐时间：")):b("",!0),y(" "+v(us.detail.mealtime),1)])])),_:1}),_(ms,{span:5},{default:m((()=>[u("div",Z,[aa,y(" "+v(us.detail.order_status.text),1)])])),_:1}),10==us.detail.pay_status.value&&10==us.detail.order_status.value&&10==us.detail.order_source?c((n(),f(ms,{key:2,span:5},{default:m((()=>[_(ys,{onClick:r[0]||(r[0]=a=>i.editClick(us.detail)),size:"small"},{default:m((()=>[y("修改价格")])),_:1})])),_:1})),[[gs,"/takeout/order/updatePrice"]]):b("",!0)])),_:1})]),sa,u("div",ea,[_(vs,null,{default:m((()=>[_(ms,{span:5},{default:m((()=>[u("div",la,[ta,y(" "+v(us.detail.supplier.name),1)])])),_:1})])),_:1})]),da,u("div",ia,[_(bs,{size:"small",data:us.detail.product,border:"",style:{width:"100%"}},{default:m((()=>[_(fs,{prop:"product_name",label:"商品",width:"400"},{default:m((a=>[u("div",ra,[u("div",pa,[c(u("img",null,null,512),[[ks,a.row.image.file_path]])]),u("div",ca,[u("div",na,v(a.row.product_name),1),""!=a.row.product_attr?(n(),o("div",oa,v(a.row.product_attr),1)):b("",!0),a.row.refund?(n(),o("div",ua,v(a.row.refund.type.text)+"-"+v(a.row.refund.status.text),1)):b("",!0),u("div",_a,[u("span",{class:g({"text-d-line":1==a.row.is_user_grade,gray6:1!=a.row.is_user_grade})},"￥ "+v(a.row.line_price),3),1==a.row.is_user_grade?(n(),o("span",ma," 会员折扣价：￥ "+v(a.row.grade_product_price),1)):b("",!0)])])])])),_:1}),_(fs,{prop:"total_num",label:"购买数量"},{default:m((a=>[u("p",null,"x "+v(a.row.total_num),1)])),_:1}),_(fs,{prop:"total_price",label:"商品总价(元)"},{default:m((a=>[u("p",null,"￥ "+v(a.row.total_price),1)])),_:1})])),_:1},8,["data"])]),10==us.detail.delivery_type.value?(n(),o("div",ya,[va,u("div",fa,[_(vs,null,{default:m((()=>[_(ms,{span:5},{default:m((()=>[u("div",ba,[ga,y(" "+v(us.detail.address.name),1)])])),_:1}),_(ms,{span:5},{default:m((()=>[u("div",ka,[wa,y(" "+v(us.detail.address.phone),1)])])),_:1}),_(ms,{span:9},{default:m((()=>[u("div",ja,[ha,y(" "+v(us.detail.address.detail)+v(us.detail.address.address),1)])])),_:1})])),_:1}),_(vs,null,{default:m((()=>[_(ms,{span:25},{default:m((()=>[u("div",xa,[za,y(" "+v(us.detail.buyer_remark),1)])])),_:1})])),_:1})])])):b("",!0),20==us.detail.delivery_type.value?(n(),o(k,{key:1},[Ca,us.detail.extract?(n(),o("div",Pa,[_(vs,null,{default:m((()=>[_(ms,{span:5},{default:m((()=>[u("div",qa,[$a,y(" "+v(us.detail.extract.phone),1)])])),_:1})])),_:1}),_(vs,null,{default:m((()=>[_(ms,{span:25},{default:m((()=>[u("div",Fa,[Oa,y(" "+v(us.detail.buyer_remark),1)])])),_:1})])),_:1})])):b("",!0)],64)):b("",!0),20==us.detail.pay_status.value?(n(),o("div",Da,[Ia,u("div",Ma,[_(vs,null,{default:m((()=>[_(ms,{span:5},{default:m((()=>[u("div",Na,[Qa,y(" "+v(us.detail.pay_price),1)])])),_:1}),_(ms,{span:5},{default:m((()=>[u("div",Sa,[Ta,y(" "+v(us.detail.pay_type.text),1)])])),_:1}),_(ms,{span:5},{default:m((()=>[u("div",Wa,[Xa,y(" "+v(us.detail.transaction_id),1)])])),_:1}),_(ms,{span:5},{default:m((()=>[u("div",Ya,[Aa,y(" "+v(us.detail.pay_status.text),1)])])),_:1}),_(ms,{span:5},{default:m((()=>[u("div",Ba,[Ea,y(" "+v(us.detail.pay_time),1)])])),_:1}),us.detail.refund_money>0?(n(),f(ms,{key:0,span:5},{default:m((()=>[u("div",Ga,[Ha,y(" "+v(us.detail.refund_money),1)])])),_:1})):b("",!0)])),_:1})])])):b("",!0),10==us.detail.delivery_type.value?(n(),o("div",Ja,[u("div",null,[Ka,u("div",La,[_(vs,null,{default:m((()=>[_(ms,{span:5},{default:m((()=>[u("div",Ra,[Ua,y(" "+v(us.detail.delivery_status.text),1)])])),_:1})])),_:1})])])])):b("",!0),20==us.detail.order_status.value&&""!=us.detail.cancel_remark?(n(),o("div",Va,[Za,u("div",as,[_(vs,null,{default:m((()=>[_(ms,{span:5},{default:m((()=>[u("div",ss,[es,y(" "+v(us.detail.cancel_remark),1)])])),_:1})])),_:1})])])):b("",!0),20==us.detail.delivery_type.value&&20==us.detail.pay_status.value&&21!=us.detail.order_status.value&&20!=us.detail.order_status.value?(n(),o("div",ls,[ts,u("div",ds,[u("template",null,[_(vs,null,{default:m((()=>[_(ms,{span:5},{default:m((()=>[u("div",is,[rs,20==us.detail.delivery_status.value?(n(),o(k,{key:0},[y(" 已核销 ")],64)):(n(),o(k,{key:1},[y(" 未核销 ")],64))])])),_:1}),us.detail.delivery_time?(n(),f(ms,{key:0,span:5},{default:m((()=>[u("div",ps,[cs,y(" "+v(us.detail.delivery_time),1)])])),_:1})):b("",!0)])),_:1})])])])):b("",!0)]),u("div",ns,[_(ys,{size:"small",type:"info",onClick:_s.cancelFunc},{default:m((()=>[y("返回上一页")])),_:1},8,["onClick"])])])),[[ws,us.loading]])}]]);export{os as default};
