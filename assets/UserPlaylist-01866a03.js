import{w as E,a as F,_ as N,i as S,b as T}from"./index-1f548d76.js";import{T as k}from"./TitleHeader-f4057bc5.js";import{u as V}from"./vue-router-70c59f8f.js";import{d as M,I as j,r as d,m as x,g as D,w as G,o as s,c as p,a1 as a,S as n,$ as i,a as u,F as C,a3 as P,W as m,e as H,U}from"./@vue-923429e4.js";import{d as R}from"./naive-ui-809e5fbb.js";import{_ as W}from"./vue-img-cutter-7be274e5.js";const q={class:"music-list",style:{margin:"0 10px"}},z={style:{padding:"0 10px"}},A={style:{position:"relative",top:"-10px"}},J={style:{padding:"0 10px"}},K=["onClick"],O=M({__name:"UserPlaylist",props:{uid:null},setup(w){const r=w,I=V(),o=j([]),y=d(!1),l=d(!0),c=d(!0),g=x(()=>o.filter(t=>t.creator.userId===r.uid)),f=x(()=>o.filter(t=>t.creator.userId!==r.uid));async function _(){l.value=!0;try{const t=await E(r.uid,o.length,20);t.code!==200&&await Promise.reject(),y.value=t.more,t.playlist.forEach(v=>{o.push(v)}),l.value=!1}catch{F("获取用户歌单失败 🥱","warning")}}function L(t){I.push(`/user/${t}`)}return D(async()=>{await _(),c.value=!1}),G(()=>r.uid,()=>{o.length=0,_()}),(t,v)=>{const $=N,b=S,h=T,B=R;return s(),p("div",q,[c.value?(s(),a($,{key:0,"text-center":!1,"cover-radius":8,length:10})):n("",!0),o.length===0&&!l.value?(s(),a(b,{key:1,description:"没有创建歌单哟 😍","show-btn":!1})):n("",!0),!c.value&&i(g).length?(s(),a(k,{key:2,title:"用户的歌单"})):n("",!0),u("ul",z,[(s(!0),p(C,null,P(i(g),e=>(s(),a(h,{key:e.id,"cover-img-url":e.coverImgUrl,id:e.id,name:e.name,"play-count":e.playCount},{default:m(()=>[u("span",A,U(e.trackCount)+" 首",1)]),_:2},1032,["cover-img-url","id","name","play-count"]))),128))]),!c.value&&i(f).length?(s(),a(k,{key:3,title:"用户收藏的歌单"})):n("",!0),u("ul",J,[(s(!0),p(C,null,P(i(f),e=>(s(),a(h,{key:e.id,"cover-img-url":e.coverImgUrl,id:e.id,name:e.name,"play-count":e.playCount},{default:m(()=>[u("span",{class:"text",onClick:()=>L(e.creator.userId)},U(e.creator.nickname),9,K)]),_:2},1032,["cover-img-url","id","name","play-count"]))),128))]),y.value?(s(),a(B,{key:4,strong:"",secondary:"",loading:l.value,class:"more-btn",onClick:_},{default:m(()=>[H("点击加载更多")]),_:1},8,["loading"])):n("",!0)])}}});const se=W(O,[["__scopeId","data-v-cc9f1d66"]]);export{se as U};