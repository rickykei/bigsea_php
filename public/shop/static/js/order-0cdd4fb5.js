import{r as e}from"./index-4e0f3baf.js";let t={takeOrderlist:(t,o)=>e._post("/shop/takeout.order/index",t,o),storeOrderlist:(t,o)=>e._post("/shop/store.order/index",t,o),takeOrderdetail:(t,o)=>e._post("/shop/takeout.order/detail",t,o),storeOrderdetail:(t,o)=>e._post("/shop/store.order/detail",t,o),storeConfirm:(t,o)=>e._post("/shop/store.Operate/orderCancel",t,o),takeConfirm:(t,o)=>e._post("/shop/takeout.Operate/orderCancel",t,o),takeRefund:(t,o)=>e._post("/shop/takeout.Operate/refund",t,o),storeRefund:(t,o)=>e._post("/shop/store.Operate/refund",t,o),takeReceipt:(t,o)=>e._post("/shop/takeout.refund/receipt",t,o),storeReceipt:(t,o)=>e._post("/shop/store.refund/receipt",t,o),takeExtract:(t,o)=>e._post("/shop/takeout.operate/extract",t,o),storeExtract:(t,o)=>e._post("/shop/store.operate/extract",t,o),sendDada:(t,o)=>e._post("/shop/takeout.operate/sendOrder",t,o),deliveryData:(t,o)=>e._get("/shop/takeout.delivery/index",t,o)};export{t as O};
