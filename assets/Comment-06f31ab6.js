import{d as R,r as g,I as B,g as j,w as z,o,c as u,V as l,W as m,e as P,U as T,y as H,v as W,a as S,F as U,a3 as V,T as A,S as i,$ as f,a1 as I}from"./@vue-923429e4.js";import{s as G,a as E,C as J}from"./CommentCell-0c6c6eee.js";import{T as b}from"./TitleHeader-f4057bc5.js";import{u as K,e as F,o as O,a as d,i as Q}from"./index-1f548d76.js";import{u as X,o as Y,a as Z}from"./vue-router-70c59f8f.js";import{d as ee,f as te,F as ae}from"./naive-ui-809e5fbb.js";import{_ as oe}from"./vue-img-cutter-7be274e5.js";const ne={class:"comment-area"},se={key:0,class:"hot-comments"},re={key:1,class:"my-comment-area"},ue={key:2,class:"comments"},le={style:{position:"relative",top:"2px"}},ce={key:0},ie={key:1,class:"pagination"},me=R({__name:"Comment",props:{getData:{type:Function},id:null,type:null},setup(p){const y=p,h=K(),C=Z(),L=X(),c=g(C.query.page?F(+C.query.page):1);let w=0;const n=g(!0),k=B([]),r=B([]);let x=g(0);const _=g(!0),v=g("");async function $(e){n.value=!0,r.splice(0,r.length),c.value!==1&&(_.value=!1);try{const t=await y.getData(e,c.value);t.code!==200&&Promise.reject(),t.comments.forEach(a=>{r.push(a)}),n.value=!1}catch{d("获取歌曲评论失败 🤣","error")}}async function M(){if(!h.isLogin&&!h.cookie)return d("登录后再进行该操作吧~ 😉","info");if(!v.value)return d("输入内容不能为空 😉","warning");try{const e=await G(y.id,1,y.type,v.value);e.code!==200?Promise.reject(e.message):d("评论成功 😋","success"),r.unshift({beReplied:[],commentId:e.comment.commentId,content:e.comment.content,ipLocation:{ip:null,location:"未知",userId:e.comment.user.userId},user:e.comment.user,timeStr:"刚刚",time:e.comment.time,status:0,parentCommentId:0,owner:!0,likedCount:0,liked:!1}),v.value="",x.value++}catch(e){d(e.response.data.msg,"error")}}j(()=>{q(+C.params.id)}),z(c,e=>{L.push({path:C.path,query:{page:e}})});async function q(e){n.value=!0;try{const t=await y.getData(e,1);t.code!==200&&Promise.reject(),w=O(20,t.total),x.value=t.total,t.hotComments.forEach(a=>{k.push(a)}),c.value===1?t.comments.forEach(a=>{r.push(a)}):await $(e),n.value=!1}catch{d("获取歌曲评论失败 🤣","error")}}return Y(async(e,t)=>{const a=+e.params.id,D=+t.params.id;n.value=!0,a!==D&&(k.length=0,r.length=0,q(a)),c.value=e.query.page?F(+e.query.page):1,$(a)}),(e,t)=>{const a=ee,D=te,N=ae;return o(),u("div",ne,[!n.value&&k.length?(o(),u("div",se,[l(b,{title:"热门评论"},{titleMore:m(()=>[l(a,{strong:"",secondary:"",size:"small",onClick:t[0]||(t[0]=s=>_.value=!_.value)},{default:m(()=>[P(T(_.value?"隐藏":"展开"),1)]),_:1})]),_:1}),l(A,{name:"hot"},{default:m(()=>[H(S("ul",null,[(o(!0),u(U,null,V(k,s=>(o(),I(E,{type:p.type,userId:f(h).userData.id,id:p.id,key:s.commentId,comment:s},null,8,["type","userId","id","comment"]))),128))],512),[[W,_.value]])]),_:1})])):i("",!0),n.value?i("",!0):(o(),u("div",re,[l(b,{title:"发送评论"}),S("div",null,[l(D,{clearable:"",value:v.value,"onUpdate:value":t[1]||(t[1]=s=>v.value=s),valueModifiers:{trim:!0},type:"textarea",placeholder:"输入评论吧~"},{suffix:m(()=>[l(a,{strong:"",secondary:"",type:"info",onClick:M},{default:m(()=>[P("发送")]),_:1})]),_:1},8,["value"])])])),n.value?i("",!0):(o(),u("div",ue,[l(b,{title:"全部评论"},{titleMore:m(()=>[S("span",le,T(f(x))+"条",1)]),_:1}),!n.value&&r.length?(o(),u("ul",ce,[(o(!0),u(U,null,V(r,s=>(o(),I(E,{type:p.type,userId:f(h).userData.id,id:p.id,key:s.commentId,comment:s},null,8,["type","userId","id","comment"]))),128))])):i("",!0),f(w)>1?(o(),u("div",ie,[l(N,{size:"small",page:c.value,"onUpdate:page":t[2]||(t[2]=s=>c.value=s),"page-slot":6,"page-count":f(w)},null,8,["page","page-count"])])):i("",!0),!n.value&&!r.length?(o(),I(Q,{key:2,description:"没有评论哟或本页没有数据~","show-btn":!1})):i("",!0)])),n.value?(o(),I(J,{key:3})):i("",!0)])}}});const he=oe(me,[["__scopeId","data-v-e28eb394"]]);export{he as C};
