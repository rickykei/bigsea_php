import{_ as t,u as e}from"./index-4e0f3baf.js";import s from"./index-ea5aba2b.js";import i from"./index-b38b12ae.js";import a from"./index-30c28b9a.js";import r from"./index-58a19365.js";import{F as o,K as p,L as m,al as u,o as n,c as d,T as c,Y as j}from"./@vue-8009ac6a.js";import"./vue-router-163d765a.js";import"./pinia-57aa1789.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-6a1b7bd0.js";import"./object-inspect-c71aff05.js";import"./element-plus-2311c378.js";import"./@vueuse-fc6bc671.js";import"./lodash-es-b547037d.js";import"./async-validator-cf877c1f.js";import"./@element-plus-0f32f795.js";import"./dayjs-13b7e569.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-ueditor-wrap-71bb720e.js";import"./product-33639840.js";import"./add-b499bf77.js";import"./Upload-07dc360a.js";import"./edit-ace01810.js";import"./add-33c6dbc1.js";import"./edit-efeb04c8.js";import"./add-64522933.js";import"./edit-83edd097.js";import"./add-4c87fb2c.js";import"./edit-27e359e2.js";const l=o({components:{spec:s,attr:i,unit:a,feed:r},setup(){const{bus_emit:t,bus_off:s,bus_on:i}=e(),a=p({bus_emit:t,bus_off:s,bus_on:i,loading:!0,form:{},param:{},activeName:"spec",sourceList:[{key:"spec",value:"规格库",path:"/product/expand/spec/index"},{key:"attr",value:"属性库",path:"/product/expand/attr/index"},{key:"feed",value:"加料库",path:"/product/expand/feed/index"},{key:"unit",value:"单位库",path:"/product/expand/unit/index"}],tabList:[],paramsFlag:!1});return{...m(a)}},created(){this.tabList=this.authFilter(),this.tabList.length>0&&(this.activeName=this.tabList[0].key),null!=this.$route.query.type&&(this.activeName=this.$route.query.type),this.bus_on("activeValue",(t=>{this.activeName=t}));let t={active:this.activeName,list:this.tabList,tab_type:"expand"};this.bus_emit("tabData",t)},beforeUnmount(){this.bus_emit("tabData",{active:null,tab_type:"expand",list:[]}),this.bus_off("activeValue")},methods:{authFilter(){let t=[];for(let e=0;e<this.sourceList.length;e++){let s=this.sourceList[e];this.$filter.isAuth(s.path)&&t.push(s)}return t}}}),h={class:"common-seach-wrap"};const b=t(l,[["render",function(t,e,s,i,a,r){const o=u("spec"),p=u("attr"),m=u("unit"),l=u("feed");return n(),d("div",h,["spec"==t.activeName?(n(),c(o,{key:0})):j("",!0),"attr"==t.activeName?(n(),c(p,{key:1})):j("",!0),"unit"==t.activeName?(n(),c(m,{key:2})):j("",!0),"feed"==t.activeName?(n(),c(l,{key:3})):j("",!0)])}]]);export{b as default};