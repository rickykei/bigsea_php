import{E as e,i as a,e as t,j as l,o,k as i,s,t as d,v as r}from"./element-plus-2311c378.js";import{P as n}from"./product-33639840.js";import p from"./Add-761631d3.js";import c from"./Edit-b4bd75c8.js";import{_ as m}from"./index-4e0f3baf.js";import{al as u,am as g,o as h,c as y,P as _,S as f,a as w,$ as j,T as k,W as b,Y as C}from"./@vue-8009ac6a.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./Upload-07dc360a.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-ueditor-wrap-71bb720e.js";const v={class:"product"},D={class:"common-level-rail"},x={class:"product-content"},V={class:"table-wrap"},z={key:0,alt:"",width:"50"},E={class:"product-content"},M={class:"table-wrap"},S={key:0,alt:"",width:"50"};const U=m({components:{Add:p,Edit:c},data:()=>({loading:!0,activeName:"first",tableData:[],open_add:!1,open_edit:!1,categoryModel:{catList:[],model:{}}}),created(){this.getData()},methods:{handleClick(){this.getData()},getData(){let e=this;e.loading=!0,"first"==e.activeName?n.takeCatList({},!0).then((a=>{e.loading=!1,e.tableData=a.data.list,e.categoryModel.catList=e.tableData})).catch((a=>{e.loading=!1})):n.takeCatSP({},!0).then((a=>{e.loading=!1,e.tableData=a.data.list,e.categoryModel.catList=e.tableData})).catch((a=>{e.loading=!1}))},addClick(){this.open_add=!0},editClick(e){this.categoryModel.model=e,this.open_edit=!0},statusSet(a,t){n.takeCatSet({category_id:t,status:a}).then((a=>{e({message:a.msg,type:"success"})}))},closeDialogFunc(e,a){"add"==a&&(this.open_add=e.openDialog,"success"==e.type&&this.getData()),"edit"==a&&(this.open_edit=e.openDialog,"success"==e.type&&this.getData())},deleteClick(t){let l=this;a.confirm("删除后不可恢复，确认删除该记录吗?","提示",{type:"warning"}).then((()=>{n.takeCatDel({category_id:t.category_id}).then((a=>{e({message:"删除成功",type:"success"}),l.getData()}))}))}}},[["render",function(e,a,n,p,c,m){const U=t,A=l,L=o,N=i,P=s,F=d,T=u("Add"),q=u("Edit"),W=g("auth"),Y=g("img-url"),$=r;return h(),y("div",v,[_(F,{modelValue:c.activeName,"onUpdate:modelValue":a[0]||(a[0]=e=>c.activeName=e),onTabChange:m.handleClick},{default:f((()=>[_(P,{label:"普通分类",name:"first"},{default:f((()=>[w("div",D,[j((h(),k(U,{size:"small",type:"primary",onClick:m.addClick,icon:"Plus"},{default:f((()=>[b("添加分类")])),_:1},8,["onClick"])),[[W,"/product/takeaway/category/Add"]])]),w("div",x,[w("div",V,[j((h(),k(N,{size:"small",data:c.tableData,"row-key":"category_id","default-expand-all":"","tree-props":{children:"child"},style:{width:"100%"}},{default:f((()=>[_(A,{prop:"name",label:"分类名称",width:"180"}),_(A,{prop:"",label:"图片",width:"180"},{default:f((e=>[e.row.images?j((h(),y("img",z,null,512)),[[Y,e.row.images.file_path]]):C("",!0)])),_:1}),_(A,{prop:"sort",label:"分类排序"}),_(A,{prop:"sort",label:"状态"},{default:f((e=>[_(L,{modelValue:e.row.status,"onUpdate:modelValue":a=>e.row.status=a,"active-value":1,"inactive-value":0,onChange:a=>m.statusSet(a,e.row.category_id)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),_(A,{prop:"create_time",label:"添加时间"}),_(A,{fixed:"right",label:"操作",width:"100"},{default:f((e=>[j((h(),k(U,{onClick:a=>m.editClick(e.row),type:"text",size:"small"},{default:f((()=>[b("编辑")])),_:2},1032,["onClick"])),[[W,"/product/takeaway/category/Edit"]]),j((h(),k(U,{onClick:a=>m.deleteClick(e.row),type:"text",size:"small"},{default:f((()=>[b("删除")])),_:2},1032,["onClick"])),[[W,"/product/takeaway/category/Delete"]])])),_:1})])),_:1},8,["data"])),[[$,c.loading]])])])])),_:1}),_(P,{label:"特色分类",name:"second"},{default:f((()=>[w("div",E,[w("div",M,[j((h(),k(N,{size:"small",data:c.tableData,"row-key":"category_id","default-expand-all":"","tree-props":{children:"child"},style:{width:"100%"}},{default:f((()=>[_(A,{prop:"name",label:"分类名称",width:"180"}),_(A,{prop:"",label:"图片",width:"180"},{default:f((e=>[e.row.images?j((h(),y("img",S,null,512)),[[Y,e.row.images.file_path]]):C("",!0)])),_:1}),_(A,{prop:"sort",label:"分类排序"}),_(A,{prop:"sort",label:"状态"},{default:f((e=>[_(L,{modelValue:e.row.status,"onUpdate:modelValue":a=>e.row.status=a,"active-value":1,"inactive-value":0,onChange:a=>m.statusSet(a,e.row.category_id)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),_(A,{prop:"create_time",label:"添加时间"}),_(A,{fixed:"right",label:"操作",width:"100"},{default:f((e=>[j((h(),k(U,{onClick:a=>m.editClick(e.row),type:"text",size:"small"},{default:f((()=>[b("编辑")])),_:2},1032,["onClick"])),[[W,"/product/takeaway/category/Edit"]])])),_:1})])),_:1},8,["data"])),[[$,c.loading]])])])])),_:1})])),_:1},8,["modelValue","onTabChange"]),c.open_add?(h(),k(T,{key:0,open_add:c.open_add,addform:c.categoryModel,onCloseDialog:a[1]||(a[1]=e=>m.closeDialogFunc(e,"add"))},null,8,["open_add","addform"])):C("",!0),c.open_edit?(h(),k(q,{key:1,open_edit:c.open_edit,editform:c.categoryModel,onCloseDialog:a[2]||(a[2]=e=>m.closeDialogFunc(e,"edit"))},null,8,["open_edit","editform"])):C("",!0)])}]]);export{U as default};