import{i as e,E as a,c as t,d as r,p as o,q as l,r as s,e as i,b as d,M as n,s as u,t as c,j as p,k as _,l as m,v as h}from"./element-plus-2311c378.js";import{O as y}from"./order-5d94dd10.js";import g from"./cancel-d4038db7.js";import v from"./refund-531e6a43.js";import{l as f}from"./qs-74887072.js";import{_ as w,u as k}from"./index-cf2f72b9.js";import{al as b,am as C,o as x,c as j,a as D,P as z,S,Q as F,a8 as V,T,W as N,X as P,$ as M,M as U,Y}from"./@vue-8009ac6a.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vuedraggable-57158f40.js";import"./vue-c7de1ac4.js";import"./sortablejs-9c07ead7.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-ueditor-wrap-71bb720e.js";const{token:q}=k(),B={components:{Cancel:g,refund:v},data:()=>({activeName:"all",loading:!0,tableData:[],pageSize:20,totalDataNumber:0,curPage:1,searchForm:{order_no:"",style_id:"",create_time:""},exStyle:[],shopList:[],create_time:"",order_count:{all:0,payment:0,delivery:0,received:0,cancel:0},open_edit:!1,open_refund:!1,order_no:0,deliver_name:"",deliverType:"",order_id:0,token:q}),created(){this.getData()},methods:{arraySpanMethod(e){if(e.rowIndex%2==0&&0===e.columnIndex)return[1,8]},handleCurrentChange(e){this.curPage=e,this.getData()},handleSizeChange(e){this.curPage=1,this.pageSize=e,this.getData()},handleClick(e,a){this.curPage=1,this.getData()},getData(){let e=this,a=this.searchForm;a.dataType=e.activeName,a.page=e.curPage,a.list_rows=e.pageSize,e.loading=!0,y.takeOrderlist(a,!0).then((a=>{let t=[];for(let e=0;e<a.data.list.data.length;e++){let r=a.data.list.data[e],o={order_no:r.order_no,create_time:r.create_time,order_source:r.order_source,order_source_text:r.order_source_text,is_top_row:!0,order_status:r.order_status.value};t.push(o),t.push(r)}e.tableData.data=t,e.deliver_name=a.data.deliver_name,e.deliverType=a.data.deliver.default,e.totalDataNumber=a.data.list.total,e.exStyle=a.data.ex_style,e.order_count=a.data.order_count.order_count,e.loading=!1})).catch((e=>{}))},addClick(e){let a=e.order_id;this.$router.push({path:"/takeout/order/detail",query:{order_id:a}})},verifyClick(t){let r=this,o={};e.confirm("是否确认此操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{o.order_id=t.order_id,y.takeExtract(o,!0).then((e=>{r.loading=!1,a({message:"恭喜你，操作成功",type:"success"}),r.getData()})).catch((e=>{r.loading=!1}))})).catch((()=>{a({type:"info",message:"已取消操作"})}))},senDada(t){let r=this,o={};e.confirm("是否确认此操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{o.order_id=t.order_id,y.sendDada(o,!0).then((e=>{r.loading=!1,a({message:"恭喜你，操作成功",type:"success"}),r.getData()})).catch((e=>{r.loading=!1}))})).catch((()=>{a({type:"info",message:"已取消操作"})}))},onSubmit(){this.curPage=1,this.tableData=[],this.getData()},onExport:function(){let e=window.location.protocol+"//"+window.location.host;this.searchForm.token=this.token,window.location.href=e+"/index.php/shop/takeout.operate/export?"+f.stringify(this.searchForm)},cancelClick(e){this.order_no=e.order_no,this.order_id=e.order_id,this.open_edit=!0},refundClick(e){this.order_no=e.order_no,this.order_id=e.order_id,this.open_refund=!0},closeDialogFunc(e,a){"edit"==a&&(this.open_edit=e.openDialog,"success"==e.type&&this.getData())},closerefundDialogFunc(e,a){"edit"==a&&(this.open_refund=e.openDialog,"success"==e.type&&this.getData())}}},E={class:"user"},O={class:"common-seach-wrap"},I={class:"block"},$=D("span",{class:"demonstration"},null,-1),L={class:"product-content"},Q={class:"table-wrap"},W={key:0,class:"order-code"},X={class:"c_main"},A={class:"pl16"},G={key:0,class:"pl16"},H={class:"pic"},J={alt:""},K={class:"info"},R={class:"name gray3 product-name"},Z={key:0,class:"gray9"},ee={key:1,class:"orange"},ae={class:"d-c-c d-c"},te={class:"orange"},re={class:"gray3"},oe={key:0},le={class:"orange"},se={class:"gray9"},ie={class:"gray9"},de={key:0},ne={class:"gray9"},ue={key:0},ce={key:0},pe={class:"gray9"},_e={key:0},me={class:"green"},he={key:0},ye={key:0},ge={class:"pagination"};const ve=w(B,[["render",function(e,a,y,g,v,f){const w=t,k=r,q=o,B=l,ve=s,fe=i,we=d,ke=n,be=u,Ce=c,xe=p,je=_,De=m,ze=b("Cancel"),Se=b("refund"),Fe=C("img-url"),Ve=C("auth"),Te=h;return x(),j("div",E,[D("div",O,[z(we,{size:"small",inline:!0,model:v.searchForm,class:"demo-form-inline"},{default:S((()=>[z(k,{label:"订单号"},{default:S((()=>[z(w,{size:"small",modelValue:v.searchForm.order_no,"onUpdate:modelValue":a[0]||(a[0]=e=>v.searchForm.order_no=e),placeholder:"请输入订单号"},null,8,["modelValue"])])),_:1}),z(k,{label:"配送方式"},{default:S((()=>[z(B,{size:"small",modelValue:v.searchForm.style_id,"onUpdate:modelValue":a[1]||(a[1]=e=>v.searchForm.style_id=e),placeholder:"请选择"},{default:S((()=>[z(q,{label:"全部",value:""}),(x(!0),j(F,null,V(v.exStyle,((e,a)=>(x(),T(q,{key:a,label:e.name,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),z(k,{label:"起始时间"},{default:S((()=>[D("div",I,[$,z(ve,{size:"small",modelValue:v.searchForm.create_time,"onUpdate:modelValue":a[2]||(a[2]=e=>v.searchForm.create_time=e),type:"daterange","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])])),_:1}),z(k,null,{default:S((()=>[z(fe,{size:"small",type:"primary",icon:"Search",onClick:f.onSubmit},{default:S((()=>[N("查询")])),_:1},8,["onClick"])])),_:1}),z(k,null,{default:S((()=>[z(fe,{size:"small",type:"success",onClick:f.onExport},{default:S((()=>[N("导出")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])]),D("div",L,[D("div",Q,[z(Ce,{modelValue:v.activeName,"onUpdate:modelValue":a[3]||(a[3]=e=>v.activeName=e),onTabChange:f.handleClick},{default:S((()=>[z(be,{label:"全部订单",name:"all"},{label:S((()=>[D("span",null,[N("全部订单 "),z(ke,{size:"mini"},{default:S((()=>[N(P(v.order_count.all),1)])),_:1})])])),_:1}),z(be,{label:"未付款",name:"payment"},{label:S((()=>[D("span",null,[N("未付款 "),z(ke,{size:"mini"},{default:S((()=>[N(P(v.order_count.payment),1)])),_:1})])])),_:1}),z(be,{label:"进行中",name:"process"},{label:S((()=>[D("span",null,[N("进行中 "),z(ke,{size:"mini"},{default:S((()=>[N(P(v.order_count.process),1)])),_:1})])])),_:1}),z(be,{label:"已取消",name:"cancel"},{label:S((()=>[D("span",null,[N("已取消 "),z(ke,{size:"mini"},{default:S((()=>[N(P(v.order_count.cancel),1)])),_:1})])])),_:1}),z(be,{label:"已完成",name:"complete"},{label:S((()=>[D("span",null,[N("已完成 "),z(ke,{size:"mini"},{default:S((()=>[N(P(v.order_count.complete),1)])),_:1})])])),_:1})])),_:1},8,["modelValue","onTabChange"]),M((x(),T(je,{size:"small",data:v.tableData.data,"span-method":f.arraySpanMethod,border:"",style:{width:"100%"}},{default:S((()=>[z(xe,{prop:"order_no",label:"订单信息",width:"400"},{default:S((e=>[e.row.is_top_row?(x(),j("div",W,[D("span",{class:U(["state-text",{"state-text-red":10!=e.row.order_source}])},P(e.row.order_source_text),3),D("span",X,"订单号："+P(e.row.order_no),1),D("span",A,"下单时间："+P(e.row.create_time),1),21==e.row.order_status?(x(),j("span",G,[z(ke,{effect:"dark",size:"mini"},{default:S((()=>[N("取消申请中")])),_:1})])):Y("",!0)])):(x(!0),j(F,{key:1},V(e.row.product,((e,a)=>(x(),j("div",{class:"product-info",key:a},[D("div",H,[M(D("img",J,null,512),[[Fe,e.image.file_path]])]),D("div",K,[D("div",R,[D("span",null,P(e.product_name),1)]),e.product_attr?(x(),j("div",Z,P(e.product_attr),1)):Y("",!0),e.refund?(x(),j("div",ee,P(e.refund.type.text)+"-"+P(e.refund.status.text),1)):Y("",!0)]),D("div",ae,[D("div",te,"￥ "+P(e.product_price),1),D("div",re,"x"+P(e.total_num),1)])])))),128))])),_:1}),z(xe,{prop:"pay_price",label:"实付款"},{default:S((e=>[e.row.is_top_row?Y("",!0):(x(),j("div",oe,[D("div",le,P(e.row.pay_price),1),D("p",se,"(含配送费："+P(e.row.express_price)+")",1),D("p",ie,"(含包装费："+P(e.row.bag_price)+")",1)]))])),_:1}),z(xe,{prop:"",label:"买家"},{default:S((e=>[e.row.is_top_row?Y("",!0):(x(),j("div",de,[D("div",null,P(e.row.user.nickName),1),D("div",ne,"ID：("+P(e.row.user.user_id)+")",1)]))])),_:1}),z(xe,{prop:"supplier.name",label:"门店名称"}),z(xe,{prop:"state_text",label:"交易状态"},{default:S((e=>[e.row.is_top_row?Y("",!0):(x(),j("div",ue,P(e.row.state_text),1))])),_:1}),z(xe,{prop:"pay_type.text",label:"支付方式"},{default:S((e=>[e.row.is_top_row?Y("",!0):(x(),j("div",ce,[D("span",pe,P(e.row.pay_type.text),1)]))])),_:1}),z(xe,{prop:"delivery_type.text",label:"配送方式"},{default:S((e=>[e.row.is_top_row?Y("",!0):(x(),j("div",_e,[D("span",me,P(e.row.delivery_type.text),1),30==e.row.delivery_type.value?(x(),j("span",he,"手机号:"+P(e.row.user.mobile),1)):Y("",!0)]))])),_:1}),z(xe,{fixed:"right",label:"操作",width:"200"},{default:S((e=>[e.row.is_top_row?Y("",!0):(x(),j("div",ye,[M((x(),T(fe,{onClick:a=>f.addClick(e.row),type:"text",size:"small"},{default:S((()=>[N("订单详情 ")])),_:2},1032,["onClick"])),[[Ve,"/takeout/order/detail"]]),10==e.row.order_status.value&&20==e.row.pay_status.value&&0==e.row.refund_money?M((x(),T(fe,{key:0,onClick:a=>f.refundClick(e.row),type:"text",size:"small"},{default:S((()=>[N("退款 ")])),_:2},1032,["onClick"])),[[Ve,"/takeout/Operate/refund"]]):Y("",!0),10==e.row.order_status.value&&10==e.row.delivery_status.value&&20==e.row.pay_status.value?M((x(),T(fe,{key:1,onClick:a=>f.cancelClick(e.row),type:"text",size:"small"},{default:S((()=>[N("取消 ")])),_:2},1032,["onClick"])),[[Ve,"/takeout/operate/orderCancel"]]):Y("",!0),10==e.row.order_status.value&&20==e.row.delivery_type.value&&20==e.row.pay_status.value?M((x(),T(fe,{key:2,onClick:a=>f.verifyClick(e.row),type:"text",size:"small"},{default:S((()=>[N("核销 ")])),_:2},1032,["onClick"])),[[Ve,"/takeout/operate/extract"]]):Y("",!0),10==e.row.deliver_source&&10==e.row.order_status.value&&10==e.row.delivery_type.value&&20==e.row.pay_status.value&&20==e.row.delivery_status.value?M((x(),T(fe,{key:3,onClick:a=>f.verifyClick(e.row),type:"text",size:"small"},{default:S((()=>[N("确认送达 ")])),_:2},1032,["onClick"])),[[Ve,"/takeout/operate/extract"]]):Y("",!0),20==e.row.pay_status.value&&0==e.row.deliver_status&&10==e.row.order_status.value&&10==e.row.delivery_type.value?M((x(),T(fe,{key:4,onClick:a=>f.senDada(e.row),type:"text",size:"small"},{default:S((()=>[N(P(v.deliver_name),1)])),_:2},1032,["onClick"])),[[Ve,"/takeout/operate/sendOrder"]]):Y("",!0)]))])),_:1})])),_:1},8,["data","span-method"])),[[Te,v.loading]])]),D("div",ge,[z(De,{onSizeChange:f.handleSizeChange,onCurrentChange:f.handleCurrentChange,background:"","current-page":v.curPage,"page-size":v.pageSize,layout:"total, prev, pager, next, jumper",total:v.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])]),v.open_edit?(x(),T(ze,{key:0,open_edit:v.open_edit,order_no:v.order_no,order_id:v.order_id,onCloseDialog:a[4]||(a[4]=e=>f.closeDialogFunc(e,"edit"))},null,8,["open_edit","order_no","order_id"])):Y("",!0),v.open_refund?(x(),T(Se,{key:1,open_edit:v.open_refund,order_no:v.order_no,order_id:v.order_id,onCloseDialog:a[5]||(a[5]=e=>f.closerefundDialogFunc(e,"edit"))},null,8,["open_edit","order_no","order_id"])):Y("",!0)])}]]);export{ve as default};