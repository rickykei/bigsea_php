import{i as e,E as a,c as t,d as l,p as o,q as r,r as i,e as s,b as n,j as d,k as c,l as p,v as u}from"./element-plus-2311c378.js";import{T as m}from"./takeout-0189441a.js";import h from"./cancel-86544f23.js";import{l as _}from"./qs-74887072.js";import{_ as g,u as v}from"./index-cf2f72b9.js";import{al as b,am as f,o as j,c as k,a as C,P as y,S as w,Q as D,a8 as z,T as x,W as F,$ as S,Y as V}from"./@vue-8009ac6a.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vuedraggable-57158f40.js";import"./vue-c7de1ac4.js";import"./sortablejs-9c07ead7.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-ueditor-wrap-71bb720e.js";const{token:P}=v(),Y={components:{Cancel:h},data:()=>({loading:!0,tableData:[],pageSize:20,totalDataNumber:0,curPage:1,searchForm:{order_no:"",deliver_source:"",create_time:""},create_time:"",open_edit:!1,order_no:0,deliver_id:0,deliver_source:[],token:P}),created(){this.getData()},methods:{handleCurrentChange(e){this.curPage=e,this.getData()},handleSizeChange(e){this.curPage=1,this.pageSize=e,this.getData()},getData(){let e=this,a=this.searchForm;a.page=e.curPage,a.list_rows=e.pageSize,e.loading=!0,m.deliverList(a,!0).then((a=>{e.tableData.data=a.data.list.data,e.totalDataNumber=a.data.list.total,e.deliver_source=a.data.deliver_source,e.loading=!1})).catch((e=>{}))},detailClick(e){let a=e.deliver_id;this.$router.push({path:"/takeout/deliver/detail",query:{deliver_id:a}})},verifyClick(t){let l=this;e.confirm("此操作将确认送达, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{l.loading=!0,m.verify({deliver_id:t.deliver_id},!0).then((e=>{l.loading=!1,1==e.code&&(a({message:"恭喜你，操作成功",type:"success"}),l.getData())})).catch((e=>{l.loading=!1}))})).catch((()=>{l.loading=!1}))},cancelClick(e){this.deliver_id=e.deliver_id,this.order_no=e.order_no,this.open_edit=!0},onSubmit(){this.curPage=1,this.tableData=[],this.getData()},onExport:function(){let e=window.location.protocol+"//"+window.location.host;this.searchForm.token=this.token,window.location.href=e+"/index.php/shop/takeout.deliver/export?"+_.stringify(this.searchForm)},closeDialogFunc(e,a){"edit"==a&&(this.open_edit=e.openDialog,"success"==e.type&&this.getData())},closerefundDialogFunc(e,a){"edit"==a&&(this.open_refund=e.openDialog,"success"==e.type&&this.getData())}}},q={class:"user"},T={class:"common-seach-wrap"},E={class:"block"},N=C("span",{class:"demonstration"},null,-1),U={class:"product-content"},B={class:"table-wrap"},M={class:"pagination"};const $=g(Y,[["render",function(e,a,m,h,_,g){const v=t,P=l,Y=o,$=r,L=i,Q=s,W=n,A=d,G=c,H=p,I=b("Cancel"),J=f("auth"),K=u;return j(),k("div",q,[C("div",T,[y(W,{size:"small",inline:!0,model:_.searchForm,class:"demo-form-inline"},{default:w((()=>[y(P,{label:"订单号"},{default:w((()=>[y(v,{size:"small",modelValue:_.searchForm.order_no,"onUpdate:modelValue":a[0]||(a[0]=e=>_.searchForm.order_no=e),placeholder:"请输入订单号"},null,8,["modelValue"])])),_:1}),y(P,{label:"配送方式"},{default:w((()=>[y($,{size:"small",modelValue:_.searchForm.deliver_source,"onUpdate:modelValue":a[1]||(a[1]=e=>_.searchForm.deliver_source=e),placeholder:"请选择"},{default:w((()=>[y(Y,{label:"全部",value:""}),(j(!0),k(D,null,z(_.deliver_source,((e,a)=>(j(),x(Y,{key:a,label:e.name,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),y(P,{label:"起始时间"},{default:w((()=>[C("div",E,[N,y(L,{size:"small",modelValue:_.searchForm.create_time,"onUpdate:modelValue":a[2]||(a[2]=e=>_.searchForm.create_time=e),type:"daterange","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])])),_:1}),y(P,null,{default:w((()=>[y(Q,{size:"small",type:"primary",icon:"Search",onClick:g.onSubmit},{default:w((()=>[F("查询")])),_:1},8,["onClick"])])),_:1}),y(P,null,{default:w((()=>[y(Q,{size:"small",type:"success",onClick:g.onExport},{default:w((()=>[F("导出")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])]),C("div",U,[C("div",B,[S((j(),x(G,{size:"small",data:_.tableData.data,border:"",style:{width:"100%"}},{default:w((()=>[y(A,{prop:"order_no",label:"订单号"}),y(A,{prop:"orders.pay_price",label:"订单金额"}),y(A,{prop:"price",label:"配送费"}),y(A,{prop:"status_text",label:"订单状态"}),y(A,{prop:"deliver_status_text",label:"配送状态"}),y(A,{prop:"deliver_source_text",label:"配送方式"}),y(A,{prop:"linkman",label:"骑手姓名"}),y(A,{prop:"phone",label:"骑手电话"}),y(A,{prop:"create_time",label:"操作时间",width:"140"}),y(A,{fixed:"right",label:"操作",width:"120"},{default:w((e=>[S((j(),x(Q,{onClick:a=>g.detailClick(e.row),type:"text",size:"small"},{default:w((()=>[F("详情 ")])),_:2},1032,["onClick"])),[[J,"/takeout/deliver/detail"]]),20==e.row.deliver_source||40==e.row.deliver_source||50==e.row.deliver_source&&10==e.row.status?S((j(),x(Q,{key:0,onClick:a=>g.cancelClick(e.row),type:"text",size:"small"},{default:w((()=>[F("取消配送 ")])),_:2},1032,["onClick"])),[[J,"/takeout/deliver/cancel"]]):V("",!0),10==e.row.deliver_source&&10==e.row.status?S((j(),x(Q,{key:1,onClick:a=>g.verifyClick(e.row),type:"text",size:"small"},{default:w((()=>[F("确认送达 ")])),_:2},1032,["onClick"])),[[J,"/takeout/deliver/verify"]]):V("",!0)])),_:1})])),_:1},8,["data"])),[[K,_.loading]])]),C("div",M,[y(H,{onSizeChange:g.handleSizeChange,onCurrentChange:g.handleCurrentChange,background:"","current-page":_.curPage,"page-size":_.pageSize,layout:"total, prev, pager, next, jumper",total:_.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])]),_.open_edit?(j(),x(I,{key:0,open_edit:_.open_edit,deliver_id:_.deliver_id,order_no:_.order_no,onCloseDialog:a[3]||(a[3]=e=>g.closeDialogFunc(e,"edit"))},null,8,["open_edit","deliver_id","order_no"])):V("",!0)])}]]);export{$ as default};
