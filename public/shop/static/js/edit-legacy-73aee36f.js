System.register(["./element-plus-legacy-0c4dfff3.js","./setting-legacy-27e87fb1.js","./index-legacy-f3f9ad0b.js","./@vue-legacy-0c361579.js","./@vueuse-legacy-6f1b74e8.js","./lodash-es-legacy-48fc93c8.js","./async-validator-legacy-aa1fd2de.js","./@element-plus-legacy-09b16737.js","./dayjs-legacy-e1dcc8a8.js","./call-bind-legacy-8dd3cf22.js","./get-intrinsic-legacy-675d089b.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-27dfcc30.js","./pinia-legacy-7902df74.js","./vue-demi-legacy-97cfbb01.js","./axios-legacy-40880ebd.js","./qs-legacy-44633826.js","./side-channel-legacy-e9f055aa.js","./object-inspect-legacy-c9b49e9b.js","./vue-ueditor-wrap-legacy-b853d0ad.js"],(function(e,l){"use strict";var n,r,t,a,u,o,i,s,c,d,m,p,f,_,E,y,g,N,U,v=document.createElement("style");return v.textContent=".tips{color:#ccc}\n",document.head.appendChild(v),{setters:[function(e){n=e.E,r=e.c,t=e.d,a=e.p,u=e.q,o=e.e,i=e.b},function(e){s=e.S},function(e){c=e._},function(e){d=e.o,m=e.c,p=e.P,f=e.S,_=e.Q,E=e.a8,y=e.T,g=e.Y,N=e.a,U=e.W},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l={data:function(){return{form:{printer_id:"",printer_name:"",printer_type:"",sort:1,print_times:"",FEI_E_YUN:{USER:"",UKEY:"",SN:""},PRINT_CENTER:{deviceNo:"",key:""}},loading:!1,type:[]}},created:function(){this.getData()},methods:{getData:function(){var e=this,l=this.$route.query.printer_id;s.printerDetail({printer_id:l},!0).then((function(l){var n=l.data.detail;e.type=l.data.printerType,e.form.printer_name=n.printer_name,e.form.printer_type=n.printer_type.value,e.form.sort=n.sort,e.form.printer_id=n.printer_id,e.form.print_times=n.print_times,"FEI_E_YUN"==n.printer_type.value&&(e.form.FEI_E_YUN.USER=n.printer_config.USER,e.form.FEI_E_YUN.UKEY=n.printer_config.UKEY,e.form.FEI_E_YUN.SN=n.printer_config.SN),"PRINT_CENTER"==n.printer_type.value&&(e.form.PRINT_CENTER.deviceNo=n.printer_config.deviceNo,e.form.PRINT_CENTER.key=n.printer_config.key)})).catch((function(e){}))},onSubmit:function(){var e=this,l=e.form;e.$refs.form.validate((function(r){r&&(e.loading=!0,s.editPrinter(l,!0).then((function(l){e.loading=!1,n({message:"恭喜你，修改成功",type:"success"}),e.$router.push("/setting/printer/index")})).catch((function(l){e.loading=!1})))}))}}},v={class:"product-add"},j=N("div",{class:"common-form"},"编辑小票打印机",-1),R=N("div",{class:"tips"},"目前支持 飞鹅打印机、365云打印",-1),V={key:0},I=N("div",{class:"tips"},"飞鹅云后台注册用户名",-1),T=N("div",{class:"tips"},"飞鹅云后台登录生成的UKEY",-1),Y=N("div",{class:"tips"},"打印机编号为9位数字，查看飞鹅打印机底部贴纸上面的编号",-1),b={key:1},h=N("div",{class:"tips"},"同一订单，打印的次数",-1),S=N("div",{class:"tips"},"数字越小越靠前",-1),C={class:"common-button-wrapper"};e("default",c(l,[["render",function(e,l,n,s,c,F){var x=r,P=t,k=a,w=u,q=o,K=i;return d(),m("div",v,[p(K,{size:"small",ref:"form",model:c.form,"label-width":"200px"},{default:f((function(){return[j,p(P,{label:"打印机名称 ",prop:"printer_name",rules:[{required:!0,message:" "}]},{default:f((function(){return[p(x,{modelValue:c.form.printer_name,"onUpdate:modelValue":l[0]||(l[0]=function(e){return c.form.printer_name=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),p(P,{label:"打印机类型 "},{default:f((function(){return[p(w,{modelValue:c.form.printer_type,"onUpdate:modelValue":l[1]||(l[1]=function(e){return c.form.printer_type=e}),placeholder:"请选择"},{default:f((function(){return[(d(!0),m(_,null,E(c.type,(function(e,l){return d(),y(k,{key:l,label:e,value:l},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"]),R]})),_:1}),"FEI_E_YUN"==c.form.printer_type?(d(),m("div",V,[p(P,{label:"USER",prop:"FEI_E_YUN.USER",rules:[{required:!0,message:" "}]},{default:f((function(){return[p(x,{modelValue:c.form.FEI_E_YUN.USER,"onUpdate:modelValue":l[2]||(l[2]=function(e){return c.form.FEI_E_YUN.USER=e}),class:"max-w460"},null,8,["modelValue"]),I]})),_:1}),p(P,{label:"UKEY",prop:"FEI_E_YUN.UKEY",rules:[{required:!0,message:" "}]},{default:f((function(){return[p(x,{modelValue:c.form.FEI_E_YUN.UKEY,"onUpdate:modelValue":l[3]||(l[3]=function(e){return c.form.FEI_E_YUN.UKEY=e}),class:"max-w460"},null,8,["modelValue"]),T]})),_:1}),p(P,{label:"打印机编号",prop:"FEI_E_YUN.SN",rules:[{required:!0,message:" "}]},{default:f((function(){return[p(x,{modelValue:c.form.FEI_E_YUN.SN,"onUpdate:modelValue":l[4]||(l[4]=function(e){return c.form.FEI_E_YUN.SN=e}),class:"max-w460"},null,8,["modelValue"]),Y]})),_:1})])):g("",!0),"PRINT_CENTER"==c.form.printer_type?(d(),m("div",b,[p(P,{label:"打印机编号 ",prop:"PRINT_CENTER.deviceNo",rules:[{required:!0,message:" "}]},{default:f((function(){return[p(x,{modelValue:c.form.PRINT_CENTER.deviceNo,"onUpdate:modelValue":l[5]||(l[5]=function(e){return c.form.PRINT_CENTER.deviceNo=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),p(P,{label:"打印机秘钥",prop:"PRINT_CENTER.key",rules:[{required:!0,message:" "}]},{default:f((function(){return[p(x,{modelValue:c.form.PRINT_CENTER.key,"onUpdate:modelValue":l[6]||(l[6]=function(e){return c.form.PRINT_CENTER.key=e})},null,8,["modelValue"])]})),_:1})])):g("",!0),p(P,{label:"打印联数",prop:"print_times",rules:[{required:!0,message:" "}]},{default:f((function(){return[p(x,{modelValue:c.form.print_times,"onUpdate:modelValue":l[7]||(l[7]=function(e){return c.form.print_times=e}),type:"number",class:"max-w460"},null,8,["modelValue"]),h]})),_:1}),p(P,{label:"排序"},{default:f((function(){return[p(x,{modelValue:c.form.sort,"onUpdate:modelValue":l[8]||(l[8]=function(e){return c.form.sort=e}),type:"number",class:"max-w460"},null,8,["modelValue"]),S]})),_:1}),N("div",C,[p(q,{type:"primary",onClick:F.onSubmit,loading:c.loading},{default:f((function(){return[U("提交")]})),_:1},8,["onClick","loading"])])]})),_:1},8,["model"])])}]]))}}}));
