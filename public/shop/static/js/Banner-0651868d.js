import{_ as l}from"./Setlink-e7998c62.js";import{J as e,e as a,d as s,c as t,I as i,b as n}from"./element-plus-2311c378.js";import{al as o,am as m,o as r,c as d,a as c,X as u,P as p,S as k,a1 as v,W as j,Q as f,a8 as h,$ as x,T as y,Y as b}from"./@vue-8009ac6a.js";import{_ as V}from"./index-4e0f3baf.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-ueditor-wrap-71bb720e.js";const g={components:{Setlink:l},data:()=>({is_linkset:!1,index:null,linktype:""}),props:["curItem","selectedIndex"],methods:{changeLink(l,e){this.is_linkset=!0,this.index=l,this.linktype=e},closeLinkset(l){this.is_linkset=!1,l&&"banner"==this.linktype?(this.curItem.data[this.index].linkUrl=l.url,this.curItem.data[this.index].name="链接到 "+l.type+" "+l.name):"nav"==this.linktype&&(this.curItem.params.nav[this.index].navlinkUrl=l.url)}}},_={class:"common-form"},C={class:"d-s-c"},I=c("p",null,"轮播图自动切换的间隔时间，单位：毫秒",-1),U={class:"delete-box"},D={class:"pic"},$=["onClick"],E=c("p",{class:"tc gray9"},"建议尺寸750x360",-1),L={class:"d-s-c"},S={class:"url-box flex-1"},w=c("span",{class:"key-name"},"链接地址：",-1),q={class:"url-box ml10"},z={class:"d-c-c"},A={class:"icon"},F=["onClick"],J=c("p",{class:"tc gray9"},"建议尺寸100x100",-1),P={class:"url-box"},Q=c("span",{class:"key-name"},"标题内容：",-1),R={class:"url-box"},T=c("span",{class:"key-name"},"文字内容：",-1),W={class:"d-s-c"},X={class:"url-box flex-1"},Y=c("span",{class:"key-name"},"链接名称：",-1),B={class:"url-box ml10"};const G=V(g,[["render",function(V,g,G,H,K,M){const N=e,O=a,Z=s,ll=t,el=o("DeleteFilled"),al=i,sl=n,tl=l,il=m("img-url");return r(),d("div",null,[c("div",_,[c("span",null,u(G.curItem.name),1)]),p(sl,{size:"small",model:G.curItem,"label-width":"100px"},{default:k((()=>[p(Z,{label:"指示点颜色："},{default:k((()=>[c("div",C,[p(N,{modelValue:G.curItem.style.btnColor,"onUpdate:modelValue":g[0]||(g[0]=l=>G.curItem.style.btnColor=l)},null,8,["modelValue"]),p(O,{type:"button",style:{"margin-left":"10px"},onClick:g[1]||(g[1]=v((l=>V.$parent.onEditorResetColor(G.curItem.style,"btnColor","#ffffff")),["stop"]))},{default:k((()=>[j("重置 ")])),_:1})])])),_:1}),p(Z,{label:"切换时间："},{default:k((()=>[p(ll,{modelValue:G.curItem.params.interval,"onUpdate:modelValue":g[2]||(g[2]=l=>G.curItem.params.interval=l)},null,8,["modelValue"]),I])),_:1}),p(Z,{label:"图片："},{default:k((()=>[(r(!0),d(f,null,h(G.curItem.data,((l,e)=>(r(),d("div",{class:"param-img-item",key:e},[c("div",U,[p(al,{onClick:l=>V.$parent.onEditorDeleleData(e,G.selectedIndex)},{default:k((()=>[p(el)])),_:2},1032,["onClick"])]),c("div",D,[x(c("img",{alt:"",onClick:e=>V.$parent.onEditorSelectImage(l,"imgUrl")},null,8,$),[[il,l.imgUrl]])]),E,c("div",L,[c("div",S,[w,p(ll,{placeholder:"请选择链接地址",modelValue:l.name,"onUpdate:modelValue":e=>l.name=e},null,8,["modelValue","onUpdate:modelValue"])]),c("div",q,[p(O,{type:"primary",onClick:l=>M.changeLink(e,"banner")},{default:k((()=>[j("选择链接")])),_:2},1032,["onClick"])])])])))),128)),c("div",z,[p(O,{onClick:V.$parent.onEditorAddData},{default:k((()=>[j("添加一个")])),_:1},8,["onClick"])])])),_:1}),p(Z,{label:"图片："},{default:k((()=>[(r(!0),d(f,null,h(G.curItem.params.nav,((l,e)=>(r(),d("div",{class:"param-img-item",key:e},[c("div",A,[x(c("img",{alt:"",onClick:e=>V.$parent.onEditorSelectImage(l,"navimgUrl")},null,8,F),[[il,l.navimgUrl]])]),J,c("div",P,[Q,p(ll,{modelValue:l.title,"onUpdate:modelValue":e=>l.title=e},null,8,["modelValue","onUpdate:modelValue"])]),c("div",R,[T,p(ll,{modelValue:l.text,"onUpdate:modelValue":e=>l.text=e},null,8,["modelValue","onUpdate:modelValue"])]),c("div",W,[c("div",X,[Y,p(ll,{modelValue:l.navlinkUrl,"onUpdate:modelValue":e=>l.navlinkUrl=e},null,8,["modelValue","onUpdate:modelValue"])]),c("div",B,[p(O,{type:"primary",onClick:l=>M.changeLink(e,"nav")},{default:k((()=>[j("选择链接")])),_:2},1032,["onClick"])])])])))),128))])),_:1})])),_:1},8,["model"]),K.is_linkset?(r(),y(tl,{key:0,is_linkset:K.is_linkset,onCloseDialog:M.closeLinkset},{default:k((()=>[j("选择链接")])),_:1},8,["is_linkset","onCloseDialog"])):b("",!0)])}]]);export{G as default};
