System.register(["./Setpages-legacy-9879b88e.js","./Banner-legacy-d81c516e.js","./Window-legacy-6f92027d.js","./NavBar-legacy-f2db6b9a.js","./RichText-legacy-72bc7a8d.js","./Blank-legacy-fafa1c21.js","./Guide-legacy-67b7ce5d.js","./vuedraggable-legacy-520c0633.js","./element-plus-legacy-0c4dfff3.js","./index-legacy-f3f9ad0b.js","./@vue-legacy-0c361579.js","./call-bind-legacy-8dd3cf22.js","./get-intrinsic-legacy-675d089b.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./vue-legacy-1724938b.js","./sortablejs-legacy-c7a1baf8.js","./@vueuse-legacy-6f1b74e8.js","./lodash-es-legacy-48fc93c8.js","./async-validator-legacy-aa1fd2de.js","./@element-plus-legacy-09b16737.js","./dayjs-legacy-e1dcc8a8.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-27dfcc30.js","./pinia-legacy-7902df74.js","./vue-demi-legacy-97cfbb01.js","./axios-legacy-40880ebd.js","./qs-legacy-44633826.js","./side-channel-legacy-e9f055aa.js","./object-inspect-legacy-c9b49e9b.js","./vue-ueditor-wrap-legacy-b853d0ad.js"],(function(e,n){"use strict";var t,i,l,a,d,o,c,s,r,u,p,y,m,g,x,h,f,j,v,b=document.createElement("style");return b.textContent=".diy-phone-container{position:relative;height:calc(100vh - 150px)}.diy-phone-container .wrapper{height:calc(100% - 90px);overflow-y:auto}.diy-phone-container .phone-top{padding:0 20px;border-radius:18px 18px 0 0}.diy-phone-container .phone-top .status-bar{height:20px;display:flex;justify-content:space-between}.diy-phone-container .phone-top .svg-icon{width:20px;height:20px;color:#333}.diy-phone-container .phone-top .navigation{height:44px;line-height:44px;text-align:center;font-size:18px}.diy-phone-container .diy-phone-item>div{position:relative;border:2px solid #f1f1f2}.diy-phone-container .diy-phone-item>div:hover,.diy-phone-container .diy-phone-item.active>div{border:2px dashed #3a8ee6}.diy-phone-container .diy-phone-item .btn-edit-del{position:absolute;bottom:0;right:0;z-index:10}.diy-phone-container .diy-phone-item .btn-edit-del>div{width:32px;height:16px;line-height:16px;display:inline-block;text-align:center;font-size:10px;color:#fff;background:rgba(0,0,0,.4);margin-left:2px;cursor:pointer}.diy-phone-container img{width:100%}\n",document.head.appendChild(b),{setters:[function(e){t=e.default},function(e){i=e.default},function(e){l=e.default},function(e){a=e.default},function(e){d=e.default},function(e){o=e.default},function(e){c=e.default},function(e){s=e.d},function(e){r=e.i},function(e){u=e._},function(e){p=e.al,y=e.o,m=e.c,g=e.P,x=e.S,h=e.a,f=e.M,j=e.T,v=e.Y},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n={class:"diy-phone-container"};e("default",u({components:{Setpages:t,Banner:i,Window:l,NavBar:a,RichText:d,Blank:o,Guide:c,draggable:s},data:function(){return{}},props:{form:Object,defaultData:Object,diyData:Object},created:function(){},methods:{onDeleleItem:function(e){var n=this;r.confirm("确定要删除吗?","提示",{type:"warning"}).then((function(){n.diyData.items.splice(e,1),n.form.selectedIndex=-1}))},onEditer:function(e){var n=this;n.form.selectedIndex=e,n.form.curItem=n.form.selectedIndex<0?n.diyData.page:n.diyData.items[n.form.selectedIndex]},initEditor:function(){var e=this;e.$nextTick((function(){e.form.umeditor.hasOwnProperty("key")&&e.form.umeditor.destroy(),e.editorHtmlComponent(),e.form.curItem.type}))},editorHtmlComponent:function(){this.$refs["diy-editor"]}}},[["render",function(e,t,i,l,a,d){var o=p("Banner"),c=p("Window"),s=p("NavBar"),r=p("RichText"),u=p("Blank"),b=p("Guide"),I=p("draggable");return y(),m("div",n,[g(I,{class:"wrapper",modelValue:i.diyData.items,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.diyData.items=e}),options:{animation:120,filter:".drag__nomove"}},{item:x((function(e){var n=e.element,t=e.index;return[h("div",{class:f(["diy-phone-item",{active:i.form.selectedIndex==t}])},["banner"==n.type?(y(),j(o,{key:0,item:n,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"window"==n.type?(y(),j(c,{key:1,item:n,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"navBar"==n.type?(y(),j(s,{key:2,item:n,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"richText"==n.type?(y(),j(r,{key:3,item:n,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"blank"==n.type?(y(),j(u,{key:4,item:n,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"guide"==n.type?(y(),j(b,{key:5,item:n,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):v("",!0)],2)]})),_:1},8,["modelValue","options"])])}]]))}}}));
