import{i as e,E as a,e as t,j as i,k as s,l,v as o}from"./element-plus-2311c378.js";import{P as r}from"./page-d1c7a7c4.js";import{_ as p}from"./index-4e0f3baf.js";import{am as n,o as d,c as g,a as c,$ as m,T as u,S as h,W as j,P as b,X as C,Y as _}from"./@vue-8009ac6a.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-ueditor-wrap-71bb720e.js";const y={class:"user"},f={class:"common-level-rail"},k={class:"product-content"},w={class:"table-wrap"},z={key:0},v={key:1},x={class:"pagination"};const T=p({data:()=>({loading:!0,tableData:[],pageSize:20,totalDataNumber:0,curPage:1}),created(){this.getTableList()},methods:{handleCurrentChange(e){let a=this;a.curPage=e,a.loading=!0,a.getTableList()},handleSizeChange(e){this.curPage=1,this.pageSize=e,this.getTableList()},getTableList(){let e=this,a={};a.page=e.curPage,a.list_rows=e.pageSize,r.PageList(a,!0).then((a=>{e.loading=!1,e.tableData=a.data.list.data,e.totalDataNumber=a.data.list.total})).catch((e=>{}))},deleteClick(t){let i=this;e.confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{i.loading=!0,r.deletePage({page_id:t},!0).then((e=>{1==e.code?(i.loading=!1,a({message:"恭喜你，删除成功",type:"success"}),i.getTableList()):i.loading=!1})).catch((e=>{i.loading=!1}))})).catch((()=>{}))},addClick(){this.$router.push("/page/page/add")},setHomeClick(t){let i=this;e.confirm("确定要将此页面设置为默认首页吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{i.loading=!0,r.setHome({page_id:t},!0).then((e=>{i.loading=!1,1==e.code?(a({message:"恭喜你，设置成功",type:"success"}),i.getTableList()):a.error("错了哦，这是一条错误消息")})).catch((e=>{i.loading=!1}))})).catch((()=>{}))},editClick(e){this.$router.push({path:"/page/page/edit",query:{page_id:e}})}}},[["render",function(e,a,r,p,T,P){const S=t,D=i,L=s,B=l,q=n("auth"),N=o;return d(),g("div",y,[c("div",f,[m((d(),u(S,{size:"small",type:"primary",icon:"Plus",onClick:a[0]||(a[0]=e=>P.addClick())},{default:h((()=>[j("添加页面")])),_:1})),[[q,"/page/page/add"]])]),c("div",k,[c("div",w,[m((d(),u(L,{size:"small",data:T.tableData,border:"",style:{width:"100%"}},{default:h((()=>[b(D,{prop:"page_id",label:"页面ID",width:"80"}),b(D,{prop:"page_name",label:"页面名称"},{default:h((e=>[c("span",null,C(e.row.page_name),1)])),_:1}),b(D,{prop:"page_type",label:"页面类型"},{default:h((e=>[10==e.row.page_type?(d(),g("span",z,"商城首页")):_("",!0),20==e.row.page_type?(d(),g("span",v,"自定义页")):_("",!0)])),_:1}),b(D,{prop:"create_time",label:"添加时间"}),b(D,{prop:"update_time",label:"更新时间"}),b(D,{fixed:"right",label:"操作",width:"120"},{default:h((e=>[m((d(),u(S,{onClick:a=>P.editClick(e.row.page_id),type:"text",size:"small"},{default:h((()=>[j("编辑")])),_:2},1032,["onClick"])),[[q,"/page/page/edit"]]),20==e.row.page_type?m((d(),u(S,{key:0,onClick:a=>P.deleteClick(e.row.page_id),type:"text",size:"small"},{default:h((()=>[j("删除 ")])),_:2},1032,["onClick"])),[[q,"/page/page/delete"]]):_("",!0)])),_:1})])),_:1},8,["data"])),[[N,T.loading]])]),c("div",x,[b(B,{onSizeChange:P.handleSizeChange,onCurrentChange:P.handleCurrentChange,background:"","current-page":T.curPage,"page-size":T.pageSize,layout:"total, prev, pager, next, jumper",total:T.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])])}]]);export{T as default};
