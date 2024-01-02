import{p as e,q as a,d as l,u as t,w as o,r as s,b as i,e as r,j as n,k as d,l as p,v as u}from"./element-plus-2311c378.js";import{C as m}from"./cash-d44489c6.js";import h from"./recorddetail-af3d3636.js";import{l as _}from"./qs-74887072.js";import{_ as c,u as f}from"./index-4e0f3baf.js";import{al as b,am as g,o as y,c as C,a as j,P as v,S as I,$ as z,T as k,Q as w,a8 as V,W as S,X as x,Y as P}from"./@vue-8009ac6a.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./vue-ueditor-wrap-71bb720e.js";const{token:L}=f(),D={components:{popup:h},data:()=>({loading:!0,tableData:[],storeList:[],pageSize:20,totalDataNumber:0,curPage:1,formInline:{order_status:0,type:1,shop_supplier_id:0,time:"",pay_type:0,order_type:-1},is_settled:"全部",open_add:!1,open_edit:!1,userModel:{},supplierList:[],pay_type:{},order_id:"",isPopup:!1,token:L}),created(){this.getTableList()},methods:{handleCurrentChange(e){let a=this;a.curPage=e,a.loading=!0,a.getTableList()},handleSizeChange(e){this.curPage=1,this.pageSize=e,this.getTableList()},getTableList(){let e=this,a=this.formInline;a.page=e.curPage,a.list_rows=e.pageSize,e.loading=!0,m.orderRecord(a,!0).then((a=>{e.loading=!1,e.tableData=a.data.list.data,e.supplierList=a.data.supplierList,e.pay_type=a.data.pay_type,e.totalDataNumber=a.data.list.total})).catch((a=>{e.loading=!1}))},getIssettled(e){this.formInline.is_settled=e},onSubmit(){(4!=this.formInline.type||this.formInline.time)&&(this.curPage=1,this.getTableList())},addClick(e){let a=e.order_id;this.$router.push({path:"/cash/order/recorddetail",query:{order_id:a}})},selectId(e){this.formInline.shop_supplier_id=e,this.getData()},addClick(e){this.isPopup=!0,this.order_id=e.order_id},closepop(){this.isPopup=!1},onExport(){let e=window.location.protocol+"//"+window.location.host;this.formInline.token=this.token,window.location.href=e+"/index.php/shop/cash.order/export?"+_.stringify(this.formInline)}}},T={class:"user clearfix"},U={class:"common-seach-wrap"},Y={class:"flex-1"},q={class:"d-s-c"},M={class:"block"},N=j("span",{class:"demonstration"},null,-1),E={class:"product-content"},$={class:"table-wrap"},Q={key:0},R={key:1},W={class:"pagination"};const X=c(D,[["render",function(m,h,_,c,f,L){const D=e,X=a,Z=l,A=t,B=o,F=s,G=i,H=r,J=n,K=d,O=p,ee=b("popup"),ae=g("auth"),le=u;return y(),C("div",T,[j("div",U,[v(G,{size:"small",inline:!0,model:f.formInline,class:"demo-form-inline d-s-c"},{default:I((()=>[j("div",Y,[z((y(),k(Z,{label:"选择店铺"},{default:I((()=>[v(X,{size:"small",modelValue:f.formInline.shop_supplier_id,"onUpdate:modelValue":h[0]||(h[0]=e=>f.formInline.shop_supplier_id=e),placeholder:"请选择",onChange:L.onSubmit},{default:I((()=>[v(D,{label:"全部",value:0}),(y(!0),C(w,null,V(f.supplierList,((e,a)=>(y(),k(D,{key:a,label:e.name,value:e.shop_supplier_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})),[[ae,"/auth/shop"]]),j("div",null,[v(Z,{label:"订单状态"},{default:I((()=>[v(B,{modelValue:f.formInline.order_status,"onUpdate:modelValue":h[1]||(h[1]=e=>f.formInline.order_status=e),size:"medium",onChange:L.onSubmit},{default:I((()=>[v(A,{label:0},{default:I((()=>[S("全部")])),_:1}),v(A,{label:1},{default:I((()=>[S("待支付")])),_:1}),v(A,{label:2},{default:I((()=>[S("进行中")])),_:1}),v(A,{label:3},{default:I((()=>[S("已取消")])),_:1}),v(A,{label:4},{default:I((()=>[S("已完成")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1})]),j("div",null,[v(Z,{label:"订单类型"},{default:I((()=>[v(B,{modelValue:f.formInline.order_type,"onUpdate:modelValue":h[2]||(h[2]=e=>f.formInline.order_type=e),size:"medium",onChange:L.onSubmit},{default:I((()=>[v(A,{label:-1},{default:I((()=>[S("全部")])),_:1}),v(A,{label:0},{default:I((()=>[S("外卖")])),_:1}),v(A,{label:1},{default:I((()=>[S("店内")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1})]),j("div",null,[v(Z,{label:"支付方式"},{default:I((()=>[v(B,{modelValue:f.formInline.pay_type,"onUpdate:modelValue":h[3]||(h[3]=e=>f.formInline.pay_type=e),size:"medium",onChange:L.onSubmit},{default:I((()=>[v(A,{label:0},{default:I((()=>[S("全部")])),_:1}),(y(!0),C(w,null,V(f.pay_type,((e,a)=>(y(),k(A,{label:e.value,key:a},{default:I((()=>[S(x(e.name),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})]),j("div",q,[v(Z,{label:"查询日期"},{default:I((()=>[v(B,{modelValue:f.formInline.type,"onUpdate:modelValue":h[4]||(h[4]=e=>f.formInline.type=e),size:"medium",onChange:L.onSubmit},{default:I((()=>[v(A,{label:1},{default:I((()=>[S("今天")])),_:1}),v(A,{label:2},{default:I((()=>[S("近七天")])),_:1}),v(A,{label:3},{default:I((()=>[S("近十五天")])),_:1}),v(A,{label:4},{default:I((()=>[S("自定义时间")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),4==f.formInline.type?(y(),k(Z,{key:0,label:"起始时间"},{default:I((()=>[j("div",M,[N,v(F,{onChange:L.onSubmit,size:"small",modelValue:f.formInline.time,"onUpdate:modelValue":h[5]||(h[5]=e=>f.formInline.time=e),type:"daterange","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["onChange","modelValue"])])])),_:1})):P("",!0)])])])),_:1},8,["model"])]),v(H,{class:"daochu",size:"small",type:"success",onClick:L.onExport},{default:I((()=>[S("导出")])),_:1},8,["onClick"]),j("div",E,[j("div",$,[z((y(),k(K,{size:"small",data:f.tableData,border:"",style:{width:"100%"}},{default:I((()=>[v(J,{prop:"order_no",label:"订单号"}),v(J,{prop:"order_type_text",label:"订单类型"}),v(J,{prop:"order_price",label:"应付金额"}),v(J,{prop:"pay_price",label:"实付总额"}),v(J,{prop:"refund_money",label:"退款金额"}),v(J,{prop:"pay_price",label:"实际到账"},{default:I((e=>[20!=e.row.order_status.value?(y(),C("span",Q,x(e.row.pay_price-e.row.refund_money),1)):(y(),C("span",R,"0"))])),_:1}),v(J,{prop:"order_status.text",label:"订单状态"}),v(J,{prop:"create_time",label:"添加时间"}),v(J,{prop:"settled_id",fixed:"right",label:"操作",width:"120"},{default:I((e=>[z((y(),k(H,{onClick:a=>L.addClick(e.row),type:"text",size:"small"},{default:I((()=>[S("详情 ")])),_:2},1032,["onClick"])),[[ae,"/cash/order/recorddetail"]])])),_:1})])),_:1},8,["data"])),[[le,f.loading]])]),j("div",W,[v(O,{onSizeChange:L.handleSizeChange,onCurrentChange:L.handleCurrentChange,background:"","current-page":f.curPage,"page-size":f.pageSize,layout:"total, prev, pager, next, jumper",total:f.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])]),v(ee,{isPopup:f.isPopup,order_id:f.order_id,onClose:L.closepop},null,8,["isPopup","order_id","onClose"])])}]]);export{X as default};