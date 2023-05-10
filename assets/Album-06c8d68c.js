import{u as U,a as p,C as V,s as x,t as L,h as j}from"./index-1f548d76.js";import{d as z,r as C,I as D,g as F,o,c as d,a1 as w,S as _,a as s,V as l,$ as v,U as a,W as f,e as g,F as R,a3 as T,Y as E,Z as M,a4 as W}from"./@vue-923429e4.js";import{u as H,o as K,a as Y}from"./vue-router-70c59f8f.js";import{P as Z}from"./PlaylistSkeleton-321b9240.js";import{g as q,t as $}from"./index-049603f6.js";import{p as G}from"./index-92c9656a.js";import{K as J,_ as O,d as Q}from"./naive-ui-809e5fbb.js";import{_ as X}from"./vue-img-cutter-7be274e5.js";import"./pinia-6f3a18e1.js";import"./vue-demi-71ba0ef2.js";import"./pinia-plugin-persistedstate-4f3b1591.js";import"./axios-760d4776.js";import"./nprogress-93825526.js";import"./artplayer-dacbf558.js";import"./@vicons-ed1f5506.js";import"./pubsub-js-4eb33f76.js";/* empty css               */import"./vueuc-f6692277.js";import"./evtd-b614532e.js";import"./seemly-d1bbd19f.js";import"./@css-render-39cdbd82.js";import"./vooks-13ee1ac7.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-c742445b.js";import"./treemate-25c27bff.js";import"./date-fns-975a2d8f.js";const ee=h=>(E("data-v-0f34e1af"),h=h(),M(),h),te={class:"page page-layout"},se={key:1,class:"music-infor"},oe={class:"infor"},ae={class:"desc"},ie={class:"list-title"},ne={class:"list-time"},re={key:2,class:"list"},le=ee(()=>s("span",null,"歌手: ",-1)),ue=["onClick"],ce={class:"album-pub"},me=z({__name:"Album",setup(h){const u=C(!0),b=D([]),e=C(),n=C(!1),A=Y(),k=H(),c=U();F(()=>{S(+A.params.id)});async function I(){if(!c.isLogin&&!c.cookie)return p("请登录后再进行操作 😂","warning");try{n.value?(await $(e.value.id,0)).code===200?(c.removeStarAlbum(e.value.id),p("取消收藏专辑成功! 🤑","success"),n.value=!1):await Promise.reject():(await $(e.value.id,1)).code===200?(c.addStarAlbum(e.value.id),p("收藏专辑成功! 的😁","success"),n.value=!0):await Promise.reject()}catch{p("收藏/取消收藏专辑失败! 😪","error")}}function P(){k.push(`/album-comment/${e.value.id}?page=1`)}async function S(i){u.value=!0;try{const t=await q(i);t.code!==200&&await Promise.reject(),t.songs.forEach(m=>{b.push(m)}),e.value=t.album,n.value=c.userData.idAlbums.some(m=>m===t.album.id),u.value=!1}catch{p("获取专辑数据失败 😋","error"),k.replace("/404")}}return K(i=>{b.length=0,S(+i.params.id)}),(i,t)=>{const m=J,B=O,y=Q,N=j;return o(),d("div",te,[u.value?(o(),w(Z,{key:0})):_("",!0),u.value?_("",!0):(o(),d("div",se,[s("div",{class:"cover",onClick:t[0]||(t[0]=r=>v(G)(e.value.picUrl))},[l(V,{img:e.value.picUrl},null,8,["img"])]),s("div",oe,[s("h1",null,a(e.value.name),1),l(m,null,{default:f(()=>[g("专辑简介")]),_:1}),s("div",ae,[l(B,{style:{width:"250px"},"line-clamp":4,tooltip:!1},{default:f(()=>[g(a(e.value.description||"无"),1)]),_:1}),e.value.description?(o(),w(y,{key:0,onClick:t[1]||(t[1]=r=>v(x)(e.value.description,"歌单简介")),style:{width:"100%","margin-bottom":"10px"},strong:"",secondary:""},{default:f(()=>[g(" 全部简介 ")]),_:1})):_("",!0)]),s("div",ie,[s("div",ne,[e.value.description?(o(),w(y,{key:0,strong:"",secondary:"",size:"small",class:"check-desc",onClick:t[2]||(t[2]=r=>v(x)(e.value.description,"歌单简介"))},{default:f(()=>[g(" 查看简介 ")]),_:1})):_("",!0),l(y,{onClick:I,strong:"",secondary:"",size:"small",type:n.value?"warning":"default",textContent:a(n.value?"已收藏":"收藏")},null,8,["type","textContent"]),l(y,{onClick:P,strong:"",secondary:"",size:"small",type:"info"},{default:f(()=>[g(" 评论 "+a(e.value.info.commentCount),1)]),_:1})])])])])),u.value?_("",!0):(o(),d("div",re,[s("h1",null,a(e.value.name),1),s("div",null,[le,(o(!0),d(R,null,T(e.value.artists,r=>(o(),d("span",{onClick:W(pe=>v(k).push(`/artist/${r.id}`),["stop"]),class:"artist",key:r.id},a(r.name),9,ue))),128))]),s("div",ce,[s("span",null,"发行时间: "+a(v(L)(e.value.publishTime)),1),s("span",null,"发行公司: "+a(e.value.company||"无"),1)]),l(N,{style:{"margin-right":"10px"},"song-list":b},null,8,["song-list"])]))])}}});const Me=X(me,[["__scopeId","data-v-0f34e1af"]]);export{Me as default};
