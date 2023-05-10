import{r as C,a as d,_ as L,b as P,i as B}from"./index-1f548d76.js";import{u as U}from"./useSearchList-34053338.js";import{d as b,I as E,o as a,c as g,$ as e,F,a3 as N,S as l,a1 as c,W as f,e as V,U as y,L as h,a as $}from"./@vue-923429e4.js";import{F as D}from"./naive-ui-809e5fbb.js";import"./pinia-6f3a18e1.js";import"./vue-demi-71ba0ef2.js";import"./pinia-plugin-persistedstate-4f3b1591.js";import"./axios-760d4776.js";import"./nprogress-93825526.js";import"./artplayer-dacbf558.js";import"./@vicons-ed1f5506.js";import"./vue-router-70c59f8f.js";import"./vue-img-cutter-7be274e5.js";import"./pubsub-js-4eb33f76.js";/* empty css               */import"./vueuc-f6692277.js";import"./evtd-b614532e.js";import"./seemly-d1bbd19f.js";import"./@css-render-39cdbd82.js";import"./vooks-13ee1ac7.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-c742445b.js";import"./treemate-25c27bff.js";import"./date-fns-975a2d8f.js";const I=(_,u,o=20)=>C.get("/cloudsearch",{params:{keywords:_,type:1e3,offset:(u-1)*o,limit:o}}),j={class:"search-tab music-list"},q={key:0},R={class:"text",style:{position:"relative",top:"-5px"}},_e=b({__name:"Playlist",setup(_){const{keywords:u,isLoading:o,total:p,page:m,pageSize:r,pageSizes:v}=U(k),s=E([]);async function k(){s.length=0;try{const n=await I(u.value,m.value,r.value);if(s.length)return;if(n.code!==200&&await Promise.reject(),n.result.playlistCount===0){d("搜索结果为空 👀","info");return}p.value=n.result.playlistCount,n.result.playlists.forEach(i=>s.push(i))}catch{d("搜索歌单失败 😎","warning")}}return(n,i)=>{const x=P,z=D,S=B,w=L;return a(),g("div",j,[e(o)?l("",!0):(a(),g("ul",q,[(a(!0),g(F,null,N(s,t=>(a(),c(x,{key:t.id,"cover-img-url":t.coverImgUrl,id:t.id,name:t.name,"play-count":t.playCount},{default:f(()=>[$("span",R,y(t.creator.nickname),1)]),_:2},1032,["cover-img-url","id","name","play-count"]))),128))])),e(p)/e(r)>1&&s.length&&!e(o)?(a(),c(z,{key:1,style:{"align-self":"center"},"page-slot":6,page:e(m),"onUpdate:page":i[0]||(i[0]=t=>h(m)?m.value=t:null),"item-count":e(p),"page-size":e(r),"onUpdate:pageSize":i[1]||(i[1]=t=>h(r)?r.value=t:null),"show-size-picker":"","page-sizes":e(v)},{prefix:f(()=>[V(" 共 "+y(e(p))+" 项 ",1)]),_:1},8,["page","item-count","page-size","page-sizes"])):l("",!0),!s.length&&!e(o)?(a(),c(S,{key:2,description:"搜索的关键词太犀利了,没有搜索结果呢 🥱","show-btn":!0})):l("",!0),e(o)?(a(),c(w,{key:3,length:e(r),"cover-radius":10,"text-center":!1},null,8,["length"])):l("",!0)])}}});export{_e as default};
