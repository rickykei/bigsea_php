import{_ as t,u as e}from"./index-4e0f3baf.js";import s from"./index-be7fa9bc.js";import a from"./index-32543e12.js";import i from"./index-2369d906.js";import{F as r,K as o,L as m,al as p,o as l,c as u,T as n,Y as b}from"./@vue-8009ac6a.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-6a1b7bd0.js";import"./object-inspect-c71aff05.js";import"./element-plus-2311c378.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-ueditor-wrap-71bb720e.js";import"./store-0ee46d2f.js";import"./add-553a9691.js";import"./edit-f7d252b8.js";import"./Qrcode-ece5d41a.js";import"./add-8a848de3.js";import"./edit-0edd5451.js";import"./add-47ef3561.js";import"./edit-c7e3e798.js";const j=r({components:{tables:s,tablearea:a,tabletype:i},setup(){const{bus_emit:t,bus_off:s,bus_on:a}=e(),i=o({bus_emit:t,bus_off:s,bus_on:a,loading:!0,form:{},param:{},activeName:"tables",sourceList:[{key:"tables",value:"桌位管理",path:"/store/table/table/index"},{key:"tablearea",value:"区域管理",path:"/store/table/area/index"},{key:"tabletype",value:"桌位类型",path:"/store/table/type/index"}],tabList:[],paramsFlag:!1});return{...m(i)}},created(){this.tabList=this.authFilter(),this.tabList.length>0&&(this.activeName=this.tabList[0].key),null!=this.$route.query.type&&(this.activeName=this.$route.query.type),this.bus_on("activeValue",(t=>{this.activeName=t}));let t={active:this.activeName,list:this.tabList,tab_type:"tablemanage"};this.bus_emit("tabData",t)},beforeUnmount(){this.bus_emit("tabData",{active:null,tab_type:"tablemanage",list:[]}),this.bus_off("activeValue")},methods:{authFilter(){let t=[];for(let e=0;e<this.sourceList.length;e++){let s=this.sourceList[e];this.$filter.isAuth(s.path)&&t.push(s)}return t}}}),h={class:"common-seach-wrap"};const c=t(j,[["render",function(t,e,s,a,i,r){const o=p("tables"),m=p("tablearea"),j=p("tabletype");return l(),u("div",h,["tables"==t.activeName?(l(),n(o,{key:0})):b("",!0),"tablearea"==t.activeName?(l(),n(m,{key:1})):b("",!0),"tabletype"==t.activeName?(l(),n(j,{key:2})):b("",!0)])}]]);export{c as default};
