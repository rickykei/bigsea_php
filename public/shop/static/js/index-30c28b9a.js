import{i as e,E as t,e as a,j as i,k as o,l as s,v as l}from"./element-plus-2311c378.js";import{P as n}from"./product-33639840.js";import d from"./add-64522933.js";import r from"./edit-83edd097.js";import{_ as p}from"./index-4e0f3baf.js";import{al as c,am as m,o as u,c as h,a as g,$ as j,T as C,S as _,W as f,P as D,Y as k}from"./@vue-8009ac6a.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./Upload-07dc360a.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-ueditor-wrap-71bb720e.js";const y={class:"product-list"},b={class:"common-level-rail"},v={class:"product-content"},z={class:"table-wrap"},S={class:"pagination"};const w=p({components:{Add:d,Edit:r},data:()=>({activeName:"sell",activeIndex:"0",loading:!0,pageSize:10,totalDataNumber:0,curPage:1,model:{},open_edit:!1,open_add:!1,tableData:[],multipleSelection:[]}),created(){this.getData()},methods:{handleCurrentChange(e){let t=this;t.loading=!0,t.curPage=e,t.getData()},handleSizeChange(e){this.pageSize=e,this.getData()},handleClick(e,t){this.curPage=1,this.getData()},getData(){let e=this,t={};t.page=e.curPage,t.list_rows=e.pageSize,e.loading=!0,n.UnitList(t,!0).then((t=>{e.loading=!1,e.tableData=t.data.list.data,e.totalDataNumber=t.data.list.total})).catch((t=>{e.loading=!1}))},closeDialogFunc(e,t){"add"==t&&(this.open_add=e.openDialog,"success"==e.type&&this.getData()),"edit"==t&&(this.open_edit=e.openDialog,"success"==e.type&&this.getData())},addClick(){this.open_add=!0},deleteClick(a){let i=this;e.confirm("删除后不可恢复，确认删除吗?","提示",{type:"warning"}).then((()=>{n.deleteUnit({unit_id:a}).then((e=>{t({message:"删除成功",type:"success"}),i.getData()}))}))},deleteBatch(){let a=this,i=[];this.multipleSelection.forEach(((e,t)=>{i.push(e.unit_id)}));let o=i.join(",");e.confirm("删除后不可恢复，确认删除吗?","提示",{type:"warning"}).then((()=>{n.deleteUnit({unit_id:o}).then((e=>{t({message:"删除成功",type:"success"}),a.getData()}))}))},handleSelectionChange(e){this.multipleSelection=e},editClick(e){this.model=e,this.open_edit=!0},undercarriage(a,i){let o=this,s="",l="";20==i?(s="强制下架",l="下架"):10==i&&(s="重新上架",l="上架"),e.confirm("确认要"+s+"吗?","提示",{type:"warning"}).then((()=>{n.auditProduct({product_id:a.product_id,state:i}).then((e=>{t({message:l+"成功",type:"success"}),o.getData()}))}))}}},[["render",function(e,t,n,d,r,p){const w=a,x=i,P=o,N=s,E=c("Add"),U=c("Edit"),F=m("auth"),q=l;return u(),h("div",y,[g("div",b,[j((u(),C(w,{size:"small",type:"primary",icon:"Plus",onClick:p.addClick},{default:_((()=>[f(" 添加单位")])),_:1},8,["onClick"])),[[F,"/product/expand/unit/add"]]),j((u(),C(w,{size:"small",onClick:p.deleteBatch},{default:_((()=>[f("批量删除")])),_:1},8,["onClick"])),[[F,"/product/expand/attr/delete"]])]),g("div",v,[g("div",z,[j((u(),C(P,{size:"small",data:r.tableData,border:"",style:{width:"100%"},onSelectionChange:p.handleSelectionChange},{default:_((()=>[D(x,{type:"selection",width:"45"}),D(x,{prop:"sort",label:"排序"}),D(x,{prop:"unit_id",label:"ID"}),D(x,{prop:"unit_name",label:"单位名称",width:"400px"}),D(x,{fixed:"right",label:"操作",width:"120"},{default:_((e=>[j((u(),C(w,{onClick:t=>p.editClick(e.row),type:"text",size:"small"},{default:_((()=>[f("编辑 ")])),_:2},1032,["onClick"])),[[F,"/product/expand/unit/edit"]]),j((u(),C(w,{onClick:t=>p.deleteClick(e.row.unit_id),type:"text",size:"small"},{default:_((()=>[f("删除")])),_:2},1032,["onClick"])),[[F,"/product/expand/unit/delete"]])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[q,r.loading]])])]),g("div",S,[D(N,{onSizeChange:p.handleSizeChange,onCurrentChange:p.handleCurrentChange,background:"","current-page":r.curPage,"page-size":r.pageSize,layout:"total, prev, pager, next, jumper",total:r.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])]),r.open_add?(u(),C(E,{key:0,open_add:r.open_add,addform:r.model,onCloseDialog:t[0]||(t[0]=e=>p.closeDialogFunc(e,"add"))},null,8,["open_add","addform"])):k("",!0),r.open_edit?(u(),C(U,{key:1,open_edit:r.open_edit,editform:r.model,onCloseDialog:t[1]||(t[1]=e=>p.closeDialogFunc(e,"edit"))},null,8,["open_edit","editform"])):k("",!0)])}]]);export{w as default};
