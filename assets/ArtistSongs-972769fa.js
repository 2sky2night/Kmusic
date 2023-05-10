import{e as E,z as U,o as N,f as P,a as h,h as V,j as $}from"./index-1f548d76.js";import{c as q}from"./index-4e1a89f8.js";import{u as C,o as R,a as D}from"./vue-router-70c59f8f.js";import{S as F,F as L}from"./naive-ui-809e5fbb.js";import{d as z,r as u,I as M,g as T,w as b,o as g,c as w,a as _,U as j,V as S,W as y,e as k,$ as A,S as W,a1 as Y,Y as Z,Z as G}from"./@vue-923429e4.js";import{_ as H}from"./vue-img-cutter-7be274e5.js";import"./pinia-6f3a18e1.js";import"./vue-demi-71ba0ef2.js";import"./pinia-plugin-persistedstate-4f3b1591.js";import"./axios-760d4776.js";import"./nprogress-93825526.js";import"./artplayer-dacbf558.js";import"./@vicons-ed1f5506.js";import"./pubsub-js-4eb33f76.js";/* empty css               */import"./vueuc-f6692277.js";import"./evtd-b614532e.js";import"./seemly-d1bbd19f.js";import"./@css-render-39cdbd82.js";import"./vooks-13ee1ac7.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-c742445b.js";import"./treemate-25c27bff.js";import"./date-fns-975a2d8f.js";const J=m=>(Z("data-v-beba307f"),m=m(),G(),m),K={class:"page"},O={class:"title"},Q=J(()=>_("span",{style:{"margin-right":"10px"}},"全部歌曲",-1)),X={class:"list"},ee={key:0},te={key:0,class:"pagination"},ae=z({__name:"ArtistSongs",setup(m){const x=C(),c=D(),p=u("hot"),t=M([]),i=u(!0),n=u(c.query.page?E(+c.query.page):1),d=u(0);let f=0;const I=u("");async function B(a){i.value=!0,t.splice(0,t.length);try{const e=await U(a,n.value,p.value);e.code!==200&&await Promise.reject(),e.songs.forEach(s=>{t.push(s)});const o=await P(t.map(s=>s.id));o.code!==200&&await Promise.reject(),o.songs.forEach((s,r)=>{t[r].al.picUrl=s.al.picUrl}),i.value=!1}catch{h("获取歌手的歌曲失败 🤐","error")}}async function v(a){t.splice(0,t.length),i.value=!0;try{const e=await q(a);e.code!==200&&await Promise.reject(),I.value=e.data.artist.name;const o=await U(a,n.value,p.value);o.code!==200&&await Promise.reject(),o.songs.forEach(r=>{t.push(r)}),d.value=o.total,f=N(20,d.value);const s=await P(t.map(r=>r.id));s.code!==200&&await Promise.reject(),s.songs.forEach((r,l)=>{t[l].al.picUrl=r.al.picUrl}),i.value=!1}catch{h("获取歌手的全部歌曲失败 🤐","warning"),x.replace("/404")}}return T(()=>{v(+c.params.id)}),b(n,a=>{x.push({path:c.path,query:{page:a}})}),R((a,e)=>{const o=+a.params.id,s=+e.params.id;o!==s&&v(o),n.value=+a.query.page,B(o)}),b(p,a=>{a==="time"&&h("接口有问题,页面显示可能会异常 😙","info"),n.value=1,v(+c.params.id)}),(a,e)=>{const o=F,s=V,r=L;return g(),w("div",K,[_("div",O,[_("span",null,j(t.length?I.value:"未知歌手"),1),Q,S(o,{loading:i.value,"checked-value":"hot",value:p.value,"onUpdate:value":e[0]||(e[0]=l=>p.value=l),"unchecked-value":"time"},{checked:y(()=>[k(" 热门排序 ")]),unchecked:y(()=>[k(" 时间排序 ")]),_:1},8,["loading","value"])]),_("div",X,[i.value?(g(),Y($,{key:1,length:20})):(g(),w("ul",ee,[S(s,{"song-list":t},null,8,["song-list"]),A(f)>1?(g(),w("div",te,[S(r,{page:n.value,"onUpdate:page":e[1]||(e[1]=l=>n.value=l),"page-count":A(f)},{prefix:y(()=>[k(" 共 "+j(d.value)+" 项 ",1)]),_:1},8,["page","page-count"])])):W("",!0)]))])])}}});const Be=H(ae,[["__scopeId","data-v-beba307f"]]);export{Be as default};
