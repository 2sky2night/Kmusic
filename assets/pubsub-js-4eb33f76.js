import{c as A}from"./artplayer-dacbf558.js";var b={},P={get exports(){return b},set exports(l){b=l}};(function(l,y){(function(e,i){var f={};e.PubSub?(f=e.PubSub,console.warn("PubSub already loaded, using existing version")):(e.PubSub=f,i(f)),l!==void 0&&l.exports&&(y=l.exports=f),y.PubSub=f,l.exports=y=f})(typeof window=="object"&&window||A,function(e){var i={},f=-1,O="*";function v(t){var r;for(r in t)if(Object.prototype.hasOwnProperty.call(t,r))return!0;return!1}function S(t){return function(){throw t}}function j(t,r,n){try{t(r,n)}catch(o){setTimeout(S(o),0)}}function k(t,r,n){t(r,n)}function h(t,r,n,o){var c=i[r],s=o?k:j,p;if(Object.prototype.hasOwnProperty.call(i,r))for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&s(c[p],t,n)}function I(t,r,n){return function(){var c=String(t),s=c.lastIndexOf(".");for(h(t,t,r,n);s!==-1;)c=c.substr(0,s),s=c.lastIndexOf("."),h(t,c,r,n);h(t,O,r,n)}}function d(t){var r=String(t),n=!!(Object.prototype.hasOwnProperty.call(i,r)&&v(i[r]));return n}function E(t){for(var r=String(t),n=d(r)||d(O),o=r.lastIndexOf(".");!n&&o!==-1;)r=r.substr(0,o),o=r.lastIndexOf("."),n=d(r);return n}function x(t,r,n,o){t=typeof t=="symbol"?t.toString():t;var c=I(t,r,o),s=E(t);return s?(n===!0?c():setTimeout(c,0),!0):!1}e.publish=function(t,r){return x(t,r,!1,e.immediateExceptions)},e.publishSync=function(t,r){return x(t,r,!0,e.immediateExceptions)},e.subscribe=function(t,r){if(typeof r!="function")return!1;t=typeof t=="symbol"?t.toString():t,Object.prototype.hasOwnProperty.call(i,t)||(i[t]={});var n="uid_"+String(++f);return i[t][n]=r,n},e.subscribeAll=function(t){return e.subscribe(O,t)},e.subscribeOnce=function(t,r){var n=e.subscribe(t,function(){e.unsubscribe(n),r.apply(this,arguments)});return e},e.clearAllSubscriptions=function(){i={}},e.clearSubscriptions=function(r){var n;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&n.indexOf(r)===0&&delete i[n]},e.countSubscriptions=function(r){var n,o,c=0;for(n in i)if(Object.prototype.hasOwnProperty.call(i,n)&&n.indexOf(r)===0){for(o in i[n])c++;break}return c},e.getSubscriptions=function(r){var n,o=[];for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&n.indexOf(r)===0&&o.push(n);return o},e.unsubscribe=function(t){var r=function(T){var w;for(w in i)if(Object.prototype.hasOwnProperty.call(i,w)&&w.indexOf(T)===0)return!0;return!1},n=typeof t=="string"&&(Object.prototype.hasOwnProperty.call(i,t)||r(t)),o=!n&&typeof t=="string",c=typeof t=="function",s=!1,p,u,a;if(n){e.clearSubscriptions(t);return}for(p in i)if(Object.prototype.hasOwnProperty.call(i,p)){if(u=i[p],o&&u[t]){delete u[t],s=t;break}if(c)for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&u[a]===t&&(delete u[a],s=!0)}return s}})})(P,b);const D=b;export{D as P};
