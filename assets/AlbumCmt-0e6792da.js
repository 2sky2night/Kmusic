import{u as y,o as k,a as A}from"./vue-router-70c59f8f.js";import{r as I,a as $}from"./index-1f548d76.js";import{g as w}from"./index-049603f6.js";import{C as N}from"./Comment-06f31ab6.js";import{d as S,r as h,g as V,o as c,c as p,V as l,W as d,e as z,a as o,U as b,F as B,a3 as R,$ as T,S as U,Y as D,Z as F}from"./@vue-923429e4.js";import{G as L,_ as j}from"./naive-ui-809e5fbb.js";import{_ as q}from"./vue-img-cutter-7be274e5.js";import"./pinia-6f3a18e1.js";import"./vue-demi-71ba0ef2.js";import"./pinia-plugin-persistedstate-4f3b1591.js";import"./axios-760d4776.js";import"./nprogress-93825526.js";import"./artplayer-dacbf558.js";import"./@vicons-ed1f5506.js";import"./pubsub-js-4eb33f76.js";/* empty css               */import"./vueuc-f6692277.js";import"./evtd-b614532e.js";import"./seemly-d1bbd19f.js";import"./@css-render-39cdbd82.js";import"./vooks-13ee1ac7.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-c742445b.js";import"./treemate-25c27bff.js";import"./date-fns-975a2d8f.js";import"./CommentCell-0c6c6eee.js";import"./TitleHeader-f4057bc5.js";const E=(s,e,a=20)=>I.get("/comment/album",{params:{id:s,offset:(e-1)*a,limit:a}}),G=s=>(D("data-v-feb0f5ea"),s=s(),F(),s),H={class:"page"},M={key:0},P={class:"comment-infor"},W={class:"cover"},Y=["src"],Z={class:"infor-data"},J={class:"infor-title"},K={class:"infor-more"},O=G(()=>o("span",{style:{"font-size":"14px"}},"歌手: ",-1)),Q=["onClick"],X=S({__name:"AlbumCmt",setup(s){const e=h(),a=h(!0),u=y(),x=A();V(()=>{f(+x.params.id)});async function f(t){try{const r=await w(t);r.code!==200&&await Promise.reject(),e.value=r.album,a.value=!1}catch{$("获取专辑评论失败 🤔","error"),u.replace("/404")}}function v(){var t;u.push(`/album/${(t=e.value)==null?void 0:t.id}`)}function C(t){u.push(`/artist/${t}`)}return k((t,r)=>{const n=+t.params.id,m=+r.params.id;n!==m&&(a.value=!0,f(n))}),(t,r)=>{var g;const n=L,m=j;return c(),p("div",H,[a.value?U("",!0):(c(),p("div",M,[l(n,null,{default:d(()=>[z("专辑评论区")]),_:1}),o("div",P,[o("div",W,[o("img",{src:(g=e.value)==null?void 0:g.picUrl},null,8,Y)]),o("div",Z,[o("div",J,[l(m,{"line-clamp":2,class:"text",style:{"font-size":"18px"}},{default:d(()=>{var i;return[o("span",{onClick:v},b((i=e.value)==null?void 0:i.name),1)]}),_:1})]),o("div",K,[l(m,{"line-clamp":1,onClick:v,style:{"font-size":"18px"}},{default:d(()=>{var i;return[O,(c(!0),p(B,null,R((i=e.value)==null?void 0:i.artists,_=>(c(),p("span",{onClick:tt=>C(_.id),key:_.id,class:"text",style:{"margin-right":"5px","font-size":"14px"}},b(_.name),9,Q))),128))]}),_:1})])])]),l(N,{type:3,"get-data":T(E),id:e.value.id},null,8,["get-data","id"])]))])}}});const zt=q(X,[["__scopeId","data-v-feb0f5ea"]]);export{zt as default};
