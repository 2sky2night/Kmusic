import{r as S,a as d,_ as w,d as x,i as C}from"./index-1f548d76.js";import{u as L}from"./useSearchList-34053338.js";import{d as A,I as U,o as s,c as g,$ as e,F as B,a3 as E,S as l,a1 as c,W as F,e as $,U as N,L as f}from"./@vue-923429e4.js";import{F as P}from"./naive-ui-809e5fbb.js";import"./pinia-6f3a18e1.js";import"./vue-demi-71ba0ef2.js";import"./pinia-plugin-persistedstate-4f3b1591.js";import"./axios-760d4776.js";import"./nprogress-93825526.js";import"./artplayer-dacbf558.js";import"./@vicons-ed1f5506.js";import"./vue-router-70c59f8f.js";import"./vue-img-cutter-7be274e5.js";import"./pubsub-js-4eb33f76.js";/* empty css               */import"./vueuc-f6692277.js";import"./evtd-b614532e.js";import"./seemly-d1bbd19f.js";import"./@css-render-39cdbd82.js";import"./vooks-13ee1ac7.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-c742445b.js";import"./treemate-25c27bff.js";import"./date-fns-975a2d8f.js";const T=(_,r,n=20)=>S.get("/cloudsearch",{params:{keywords:_,type:10,offset:(r-1)*n,limit:n}}),V={class:"search-tab music-list"},j={key:0},ce=A({__name:"Album",setup(_){const r=U([]),{keywords:n,page:p,pageSize:o,pageSizes:h,isLoading:m,total:u}=L(y);async function y(){r.length=0;try{const i=await T(n.value,p.value,o.value);if(r.length)return;if(i.code!==200&&await Promise.reject(),i.result.albumCount===0){d("搜索结果为空 👀","info");return}i.result.albums.forEach(a=>{r.push(a)}),u.value=i.result.albumCount}catch{d("搜索专辑失败 😰","warning")}}return(i,a)=>{const k=x,v=P,b=C,z=w;return s(),g("div",V,[e(m)?l("",!0):(s(),g("ul",j,[(s(!0),g(B,null,E(r,t=>(s(),c(k,{key:t.id,id:t.id,artists:t.artists,name:t.name,"pic-url":t.picUrl,"sub-time":t.publishTime},null,8,["id","artists","name","pic-url","sub-time"]))),128))])),e(u)/e(o)>1&&r.length&&!e(m)?(s(),c(v,{key:1,style:{"align-self":"center"},"page-slot":6,page:e(p),"onUpdate:page":a[0]||(a[0]=t=>f(p)?p.value=t:null),"item-count":e(u),"page-size":e(o),"onUpdate:pageSize":a[1]||(a[1]=t=>f(o)?o.value=t:null),"show-size-picker":"","page-sizes":e(h)},{prefix:F(()=>[$(" 共 "+N(e(u))+" 项 ",1)]),_:1},8,["page","item-count","page-size","page-sizes"])):l("",!0),!r.length&&!e(m)?(s(),c(b,{key:2,description:"搜索的关键词太犀利了,没有搜索结果呢 🥱","show-btn":!0})):l("",!0),e(m)?(s(),c(z,{key:3,length:e(o),"cover-radius":10,"text-center":!1},null,8,["length"])):l("",!0)])}}});export{ce as default};