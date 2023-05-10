import{u as w,a as m}from"./index-1f548d76.js";import{u as U}from"./vue-router-70c59f8f.js";import{_ as C,$ as I}from"./@vicons-ed1f5506.js";import{d as g,o as s,c as o,a as e,U as n,V as l,W as d,a1 as _,$ as p,S as u,e as $,F as z,a3 as N}from"./@vue-923429e4.js";import{N as R,_ as F,d as S,v as V}from"./naive-ui-809e5fbb.js";import{_ as b}from"./vue-img-cutter-7be274e5.js";const B={class:"user-infor-card"},T={class:"user-infor"},L={class:"user-cover"},O=["src"],P={class:"user-data"},W={key:0,style:{"margin-left":"10px"}},A=["src"],D=["src"],E={class:"follows"},M={style:{"font-size":"12px",color:"var(--text-dark)"}},j=g({__name:"UserInforCard",props:{data:null},setup(t){const i=t,c=w(),a=U();function f(){a.push(`/user/${i.data.userId}`)}function r(){if(!c.cookie&&!c.isLogin)return m("请先登录~ 😀","info");m("由于安全问题,暂时不能关注/取消关注用户 😎","info")}function h(){a.push(`/user-follow/${i.data.userId}`)}function k(){a.push(`/user-fans/${i.data.userId}`)}return(q,G)=>{const x=R,y=F,v=S;return s(),o("li",B,[e("div",T,[e("div",L,[e("img",{src:t.data.avatarUrl},null,8,O)]),e("div",P,[e("div",null,[e("span",{class:"text",style:{"font-size":"14px","font-weight":"bolder"},onClick:f},n(t.data.nickname),1),l(x,{style:{position:"relative",top:"2px",left:"3px"},size:"15",color:t.data.gender===1?"skyblue":"pink"},{default:d(()=>[t.data.gender?(s(),_(p(C),{key:0})):(s(),_(p(I),{key:1}))]),_:1},8,["color"]),t.data.vipRights?(s(),o("span",W,[t.data.vipRights.associator?(s(),o("img",{key:0,class:"vip",src:t.data.vipRights.associator.iconUrl},null,8,A)):u("",!0),t.data.vipRights.musicPackage?(s(),o("img",{key:1,class:"pack",src:t.data.vipRights.musicPackage.iconUrl},null,8,D)):u("",!0)])):u("",!0)]),e("div",E,[e("span",{onClick:h,class:"text",style:{"font-size":"12px"}},"关注:"+n(t.data.follows),1),e("span",{onClick:k,class:"text",style:{"font-size":"12px"}},"粉丝:"+n(t.data.followeds),1)]),l(y,{style:{"max-width":"240px"},tooltip:!1},{default:d(()=>[e("span",M,n(t.data.signature),1)]),_:1})])]),l(v,{size:"small",onClick:r,strong:"",secondary:"",type:t.data.followed?"info":"default"},{default:d(()=>[$(n(t.data.followed?"已关注":"关注"),1)]),_:1},8,["type"])])}}});const Z=b(j,[["__scopeId","data-v-c2455d68"]]),tt=g({__name:"UserSkeletonList",props:{length:null},setup(t){return(i,c)=>{const a=V;return s(),o("ul",null,[(s(!0),o(z,null,N(Array.from({length:t.length}),(f,r)=>(s(),_(a,{height:"80px",style:{margin:"10px 0","border-radius":"10px"},width:"100%",key:r}))),128))])}}});export{Z as U,tt as _};