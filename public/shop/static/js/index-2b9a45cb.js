import{E as e,O as s,P as t,d as a,e as o,b as i}from"./element-plus-2311c378.js";import{S as r}from"./setting-2057f3de.js";import{_ as m}from"./index-cf2f72b9.js";import{o as l,c as n,P as p,S as d,Q as c,a8 as h,T as u,W as j,X as f,a as b}from"./@vue-8009ac6a.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-ueditor-wrap-71bb720e.js";const g={data:()=>({form:{keys:[]},list:[]}),created(){this.getData()},methods:{getData(){let e=this;r.clearDetail({},!0).then((s=>{e.list=s.data.cacheList})).catch((e=>{}))},onSubmit(){let s=this,t=this.form;r.editCache(t,!0).then((t=>{e({message:"恭喜你，清理成功",type:"success"}),s.$router.push("/setting/clear/index")})).catch((e=>{}))},handleCheckedCitiesChange(e){}}},C={class:"product-add"},k=b("div",{class:"common-form"},"清理缓存",-1),y={class:"common-button-wrapper"};const v=m(g,[["render",function(e,r,m,g,v,x){const _=s,w=t,S=a,D=o,V=i;return l(),n("div",C,[p(V,{size:"small",ref:"form",model:v.form,"label-width":"200px"},{default:d((()=>[k,p(S,{label:"数据缓存:"},{default:d((()=>[p(w,{modelValue:v.form.keys,"onUpdate:modelValue":r[0]||(r[0]=e=>v.form.keys=e),onChange:x.handleCheckedCitiesChange},{default:d((()=>[(l(!0),n(c,null,h(v.list,((e,s)=>(l(),u(_,{label:s,key:s,checked:!0},{default:d((()=>[j(f(e.name),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1}),b("div",y,[p(D,{type:"primary",onClick:x.onSubmit},{default:d((()=>[j("提交")])),_:1},8,["onClick"])])])),_:1},8,["model"])])}]]);export{v as default};
