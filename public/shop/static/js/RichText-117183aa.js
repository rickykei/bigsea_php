import{K as t,d as e,J as s,e as o,b as a}from"./element-plus-2311c378.js";import{U as n}from"./UE-f3c9ea08.js";import{al as l,o as i,c as r,a as m,X as p,P as d,S as u,a1 as c,W as f}from"./@vue-8009ac6a.js";import{_ as j}from"./index-4e0f3baf.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./Upload-07dc360a.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-ueditor-wrap-71bb720e.js";const h={class:"common-form"},g={class:"d-s-c"};const I=j({components:{Uediter:n},data:()=>({ueditor:{text:"",config:{initialFrameWidth:400,initialFrameHeight:500}},content:""}),props:["curItem","selectedIndex","opts"],watch:{},created(){this.curItem.style.paddingTop=parseInt(this.curItem.style.paddingTop),this.curItem.style.paddingLeft=parseInt(this.curItem.style.paddingLeft),this.content=this.curItem.params.content},methods:{contentChangeFunc(t){this.content=t,this.curItem.params.content=t}}},[["render",function(n,j,I,y,b,x){const v=t,C=e,V=s,U=o,w=l("Uediter"),_=a;return i(),r("div",null,[m("div",h,[m("span",null,p(I.curItem.name),1)]),d(_,{size:"small",model:I.curItem,"label-width":"100px"},{default:u((()=>[d(C,{label:"上下边距："},{default:u((()=>[d(v,{modelValue:I.curItem.style.paddingTop,"onUpdate:modelValue":j[0]||(j[0]=t=>I.curItem.style.paddingTop=t),"show-input":""},null,8,["modelValue"])])),_:1}),d(C,{label:"左右边距："},{default:u((()=>[d(v,{modelValue:I.curItem.style.paddingLeft,"onUpdate:modelValue":j[1]||(j[1]=t=>I.curItem.style.paddingLeft=t),"show-input":""},null,8,["modelValue"])])),_:1}),d(C,{label:"背景颜色："},{default:u((()=>[m("div",g,[d(V,{modelValue:I.curItem.style.background,"onUpdate:modelValue":j[2]||(j[2]=t=>I.curItem.style.background=t)},null,8,["modelValue"]),d(U,{type:"button",style:{"margin-left":"10px"},onClick:j[3]||(j[3]=c((t=>n.$parent.onEditorResetColor(I.curItem.style,"btnColor","#ffffff")),["stop"]))},{default:u((()=>[f("重置")])),_:1})])])),_:1}),d(C,{label:"内容："},{default:u((()=>[d(w,{text:b.content,config:b.ueditor.config,onContentChange:x.contentChangeFunc,ref:"ue"},null,8,["text","config","onContentChange"])])),_:1})])),_:1},8,["model"])])}]]);export{I as default};