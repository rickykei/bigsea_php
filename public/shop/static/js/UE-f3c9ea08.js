import{_ as a}from"./Upload-07dc360a.js";import{_ as o}from"./index-4e0f3baf.js";import{K as s,w as t,L as l,al as e,o as n,c as i,P as d,T as u,S as r,W as p,Y as c,Q as m}from"./@vue-8009ac6a.js";const g=o({components:{Upload:a},props:["text","editorId"],setup(a,{emit:o}){const e=s({msg:a.text,editor:null,isupload:!1,hasCallback:!1,callback:null,this_config:{autoFloatEnabled:!1}});return t((()=>e.msg),(a=>{o("contentChange",a)})),{...l(e)}},methods:{ready(){window.openUpload=this.openUpload},openUpload:function(a){this.isupload=!0,a&&(this.hasCallback=!0,this.callback=a)},returnImgsFunc(a){null!=a&&this.hasCallback&&this.callback(a),this.isupload=!1}}},[["render",function(o,s,t,l,g,h){const f=e("vue-ueditor-wrap"),b=a;return n(),i(m,null,[d(f,{modelValue:o.msg,"onUpdate:modelValue":s[0]||(s[0]=a=>o.msg=a),config:o.this_config,"editor-id":t.editorId,onReady:h.ready},null,8,["modelValue","config","editor-id","onReady"]),o.isupload?(n(),u(b,{key:0,config:{total:9},isupload:o.isupload,onReturnImgs:h.returnImgsFunc},{default:r((()=>[p("上传图片")])),_:1},8,["isupload","onReturnImgs"])):c("",!0)],64)}]]);export{g as U};
