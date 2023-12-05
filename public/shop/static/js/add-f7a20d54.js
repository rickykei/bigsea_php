import{E as e,c as l,d as s,e as a,h as t,w as i,f as o,b as r}from"./element-plus-2311c378.js";import{_ as m}from"./Setlink-ed4aeb20.js";import{_ as n}from"./Upload-846deafd.js";import{P as u}from"./page-2c3dd0bd.js";import{_ as d}from"./index-cf2f72b9.js";import{o as p,c,P as f,S as g,a as _,W as h,Y as j,T as k,X as y}from"./@vue-8009ac6a.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-ueditor-wrap-71bb720e.js";const b={components:{Upload:n,Setlink:m},data:()=>({isupload:!1,is_linkset:!1,isImg:!1,path:"",tips_Id:"",form:{title:"",image_url:"",sort:1,status:1,link_url:"",name:"",sys_tag:""},loading:!1,rules:{title:[{required:!0,message:"请输入菜单名称",trigger:"blur"}],image_url:[{required:!0,message:"请上传图标",trigger:"blur"}],link_url:[{required:!0,message:"请选择链接地址",trigger:"blur"}]}}),created(){},methods:{changeLink(){this.is_linkset=!0},closeLinkset(e){this.is_linkset=!1,null!=e&&(this.form.link_url=e.url,this.form.name="链接到 "+e.type+" "+e.name,this.form.sys_tag=e.sys_tag||"",this.tips_Id="链接到 "+e.type+" "+e.name)},openUpload(){this.isupload=!0},returnImgsFunc(e){null!=e&&(this.form.image_url=e[0].file_path,this.path=e[0].file_path,this.isImg=!0),this.isupload=!1},onSubmit(){let l=this,s=l.form;l.$refs.form.validate((a=>{a&&(l.loading=!0,u.addMenu(s,!0).then((s=>{l.loading=!1,e({message:s.msg,type:"success"}),l.$router.push("/page/page/mymenu/index")})).catch((e=>{l.loading=!1})))}))},cancelFunc(){this.$router.push({path:"/page/page/mymenu/index"})}}},x={class:"product-add pb50"},v=_("div",{class:"common-form"},"添加菜单",-1),V=["src","isImg"],w=_("div",{style:{color:"red"}},"图标大小为:25*25",-1),I={class:"url-box flex-1"},C=_("span",null,null,-1),U={class:"tips",id:"tips",style:{color:"#000"}},q=_("div",{class:"url-box ml10",style:{float:"right"}},null,-1),S={class:"common-button-wrapper"};const z=d(b,[["render",function(e,u,d,b,z,F){const L=l,$=s,D=a,P=n,R=t,E=i,M=o,T=m,W=r;return p(),c("div",x,[f(W,{size:"small",model:z.form,ref:"form",rules:z.rules,"label-width":"100px"},{default:g((()=>[v,f($,{label:"菜单名称",prop:"title"},{default:g((()=>[f(L,{modelValue:z.form.title,"onUpdate:modelValue":u[0]||(u[0]=e=>z.form.title=e),placeholder:"请输入菜单名称",class:"max-w460"},null,8,["modelValue"])])),_:1}),f($,{label:"图标",prop:"image_url"},{default:g((()=>[_("div",null,[f(D,{type:"primary",onClick:F.openUpload},{default:g((()=>[h("上传图片")])),_:1},8,["onClick"]),z.isImg?(p(),c("img",{key:0,src:z.form.image_url,class:"mt10",width:50,height:50,isImg:z.isImg},null,8,V)):j("",!0),w,z.isupload?(p(),k(P,{key:1,isupload:z.isupload,onReturnImgs:F.returnImgsFunc},{default:g((()=>[h("上传图片")])),_:1},8,["isupload","onReturnImgs"])):j("",!0)])])),_:1}),f($,{label:"状态"},{default:g((()=>[f(E,{modelValue:z.form.status,"onUpdate:modelValue":u[1]||(u[1]=e=>z.form.status=e)},{default:g((()=>[f(R,{label:1},{default:g((()=>[h("显示")])),_:1}),f(R,{label:0},{default:g((()=>[h("隐藏")])),_:1})])),_:1},8,["modelValue"])])),_:1}),f($,{label:"排序"},{default:g((()=>[f(L,{type:"number",modelValue:z.form.sort,"onUpdate:modelValue":u[2]||(u[2]=e=>z.form.sort=e),placeholder:"请输入数字",class:"max-w460"},null,8,["modelValue"])])),_:1}),f($,{label:"链接",prop:"link_url"},{default:g((()=>[f(M,null,{default:g((()=>[_("div",I,[f(L,{modelValue:z.form.link_url,"onUpdate:modelValue":u[3]||(u[3]=e=>z.form.link_url=e),type:"text",class:"max-w460",style:{width:"380px"}},null,8,["modelValue"]),C,f(D,{type:"primary",onClick:u[4]||(u[4]=e=>F.changeLink())},{default:g((()=>[h("选择链接 ")])),_:1}),_("div",U,y(z.tips_Id),1),f(L,{modelValue:z.form.name,"onUpdate:modelValue":u[5]||(u[5]=e=>z.form.name=e),type:"hidden",class:"max-w460",style:{width:"380px"}},null,8,["modelValue"])]),q])),_:1})])),_:1}),z.is_linkset?(p(),k(T,{key:0,is_linkset:z.is_linkset,onCloseDialog:F.closeLinkset},{default:g((()=>[h("选择链接")])),_:1},8,["is_linkset","onCloseDialog"])):j("",!0),_("div",S,[f(D,{size:"small",type:"info",onClick:F.cancelFunc},{default:g((()=>[h("取消")])),_:1},8,["onClick"]),f(D,{size:"small",type:"primary",onClick:F.onSubmit,loading:z.loading},{default:g((()=>[h("提交")])),_:1},8,["onClick","loading"])])])),_:1},8,["model","rules"])])}]]);export{z as default};
