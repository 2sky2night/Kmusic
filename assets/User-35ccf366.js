import{r as U,a as f,i as z}from"./index-1f548d76.js";import{u as S}from"./useSearchList-34053338.js";import{_ as w,U as x}from"./UserSkeletonList.vue_vue_type_script_setup_true_lang-1154ba73.js";import{d as b,I as C,o as r,c as _,$ as e,F as L,a3 as I,S as l,a1 as c,W as B,e as E,U as F,L as d}from"./@vue-923429e4.js";import{F as $}from"./naive-ui-809e5fbb.js";import{_ as j}from"./vue-img-cutter-7be274e5.js";import"./pinia-6f3a18e1.js";import"./vue-demi-71ba0ef2.js";import"./pinia-plugin-persistedstate-4f3b1591.js";import"./axios-760d4776.js";import"./nprogress-93825526.js";import"./artplayer-dacbf558.js";import"./@vicons-ed1f5506.js";import"./vue-router-70c59f8f.js";import"./pubsub-js-4eb33f76.js";/* empty css               */import"./vueuc-f6692277.js";import"./evtd-b614532e.js";import"./seemly-d1bbd19f.js";import"./@css-render-39cdbd82.js";import"./vooks-13ee1ac7.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-c742445b.js";import"./treemate-25c27bff.js";import"./date-fns-975a2d8f.js";const D=(g,t,n=20)=>U.get("/cloudsearch",{params:{keywords:g,type:1002,offset:(t-1)*n,limit:n}}),N={class:"search-tab"},P={key:0},V=b({__name:"User",setup(g){const t=C([]),{keywords:n,page:p,pageSize:s,pageSizes:h,total:m,isLoading:u}=S(y);async function y(){t.length=0;try{const o=await D(n.value,p.value,s.value);if(t.length)return;if(o.code!==200&&await Promise.reject(),Object.keys(o.result).length===0){f("搜索结果为空 👀","info");return}m.value=o.result.userprofileCount,o.result.userprofiles.forEach(a=>t.push(a))}catch{f("搜索用户失败 UserSkeletonList😛","warning")}}return(o,a)=>{const k=$,v=z;return r(),_("div",N,[e(u)?l("",!0):(r(),_("ul",P,[(r(!0),_(L,null,I(t,i=>(r(),c(x,{key:i.userId,data:i},null,8,["data"]))),128))])),e(m)/e(s)>1&&t.length&&!e(u)?(r(),c(k,{key:1,style:{"align-self":"center"},"page-slot":6,page:e(p),"onUpdate:page":a[0]||(a[0]=i=>d(p)?p.value=i:null),"item-count":e(m),"page-size":e(s),"onUpdate:pageSize":a[1]||(a[1]=i=>d(s)?s.value=i:null),"show-size-picker":"","page-sizes":e(h)},{prefix:B(()=>[E(" 共 "+F(e(m))+" 项 ",1)]),_:1},8,["page","item-count","page-size","page-sizes"])):l("",!0),!t.length&&!e(u)?(r(),c(v,{key:2,description:"搜索的关键词太犀利了,没有搜索结果呢 🥱","show-btn":!0})):l("",!0),e(u)?(r(),c(w,{key:3,length:e(s)},null,8,["length"])):l("",!0)])}}});const _e=j(V,[["__scopeId","data-v-78869b60"]]);export{_e as default};