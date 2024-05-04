import{x,i as m,y as C,z as T,A as L,o as P,c as ne,r as Ae,a as b,B as g,n as ft,l as _,t as je,b as se,d as k,C as D,D as q,E as pt,G as F,F as ue,H as vt,I as W,T as ht,J as mt,K as gt,L as yt,h as wt,g as bt,s as J,q as Et,w as U,M as St,N as X,j as Pe}from"./Y4Om6eZ8.js";import{u as Re}from"./336HxpDH.js";var de=function(){return de=Object.assign||function(e){for(var t,l=1,o=arguments.length;l<o;l++)for(var n in t=arguments[l])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},de.apply(this,arguments)},Ft=function(){function e(t,l,o){var n=this;this.endVal=l,this.options=o,this.version="2.6.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(a){n.startTime||(n.startTime=a);var i=a-n.startTime;n.remaining=n.duration-i,n.useEasing?n.countDown?n.frameVal=n.startVal-n.easingFn(i,0,n.startVal-n.endVal,n.duration):n.frameVal=n.easingFn(i,n.startVal,n.endVal-n.startVal,n.duration):n.frameVal=n.startVal+(n.endVal-n.startVal)*(i/n.duration);var r=n.countDown?n.frameVal<n.endVal:n.frameVal>n.endVal;n.frameVal=r?n.endVal:n.frameVal,n.frameVal=Number(n.frameVal.toFixed(n.options.decimalPlaces)),n.printValue(n.frameVal),i<n.duration?n.rAF=requestAnimationFrame(n.count):n.finalEndVal!==null?n.update(n.finalEndVal):n.options.onCompleteCallback&&n.options.onCompleteCallback()},this.formatNumber=function(a){var i,r,u,s,c=a<0?"-":"";i=Math.abs(a).toFixed(n.options.decimalPlaces);var v=(i+="").split(".");if(r=v[0],u=v.length>1?n.options.decimal+v[1]:"",n.options.useGrouping){s="";for(var d=3,f=0,p=0,h=r.length;p<h;++p)n.options.useIndianSeparators&&p===4&&(d=2,f=1),p!==0&&f%d==0&&(s=n.options.separator+s),f++,s=r[h-p-1]+s;r=s}return n.options.numerals&&n.options.numerals.length&&(r=r.replace(/[0-9]/g,function(w){return n.options.numerals[+w]}),u=u.replace(/[0-9]/g,function(w){return n.options.numerals[+w]})),c+n.options.prefix+r+u+n.options.suffix},this.easeOutExpo=function(a,i,r,u){return r*(1-Math.pow(2,-10*a/u))*1024/1023+i},this.options=de(de({},this.defaults),o),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(l),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof t=="string"?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return n.handleScroll(n)}),window.onscroll=function(){window.onScrollFns.forEach(function(a){return a()})},this.handleScroll(this)))}return e.prototype.handleScroll=function(t){if(t&&window&&!t.once){var l=window.innerHeight+window.scrollY,o=t.el.getBoundingClientRect(),n=o.top+window.pageYOffset,a=o.top+o.height+window.pageYOffset;a<l&&a>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>a||n>l)&&!t.paused&&t.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var l=t-this.startVal;if(Math.abs(l)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var o=this.countDown?1:-1;this.endVal=t+o*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(t){this.error||(t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(t){var l;if(this.el){var o=this.formattingFn(t);!((l=this.options.plugin)===null||l===void 0)&&l.render?this.options.plugin.render(this.el,o):this.el.tagName==="INPUT"?this.el.value=o:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=o:this.el.innerHTML=o}},e.prototype.ensureNumber=function(t){return typeof t=="number"&&!isNaN(t)},e.prototype.validateValue=function(t){var l=Number(t);return this.ensureNumber(l)?l:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}();function $t(e,t=1){const l=m(-1);let o;function n(i){o||(o=i),i-o<t*1e3?l.value=requestAnimationFrame(n):e()}l.value=requestAnimationFrame(n);function a(){window.cancelAnimationFrame(l.value)}return{cancel:a}}const Tt={class:"countup-wrap"},xt={name:"CountUp"},Le=x({...xt,props:{endVal:null,startVal:{default:0},duration:{default:2.5},decimalPlaces:{default:0},autoplay:{type:Boolean,default:!0},loop:{type:[Boolean,Number],default:!1},delay:{default:0},options:{default:void 0}},emits:["init","finished"],setup(e,{expose:t,emit:l}){const o=e;let n=m(),a=m(),i=0;const r=m(!1);let u;function s(){if(!n.value){console.warn("[vue-countup-v3]","elRef can't found");return}i=0,r.value=!1;const d=Number(o.startVal),f=Number(o.endVal),p=Number(o.duration);if(a.value=new Ft(n.value,f,{startVal:d,duration:p,decimalPlaces:o.decimalPlaces,...o.options}),a.value.error){console.error("[vue-countup-v3]",a.value.error);return}l("init",a.value)}function c(){var d;a.value||s(),(d=a.value)==null||d.start(f),i++;function f(){typeof o.loop=="boolean"&&o.loop||o.loop>i?u=$t(()=>{var p;(p=a.value)==null||p.reset(),c()},o.delay):r.value=!0}}function v(){u==null||u.cancel(),s(),c()}return C([()=>o.startVal,()=>o.endVal],()=>{o.autoplay&&v()}),C(r,d=>{var f;d&&((f=o.options)!=null&&f.onCompleteCallback&&o.options.onCompleteCallback(),l("finished"))}),T(()=>{s(),o.autoplay&&c()}),L(()=>{var d;u==null||u.cancel(),(d=a.value)==null||d.reset()}),t({init:s,restart:v}),(d,f)=>(P(),ne("div",Tt,[Ae(d.$slots,"prefix"),b("span",{ref_key:"elRef",ref:n},null,512),Ae(d.$slots,"suffix")]))}}),Vt={class:"flex items-center gap-x-2 justify-between"},Ot={class:"flex items-center gap-x-2"},At={class:"flex gap-x-2"},Pt=b("span",null,"votes",-1),Lt={class:"flex gap-1 font-semibold"},Dt={class:"w-full h-2 bg-gray-600 rounded-md relative overflow-hidden"},Nt=x({__name:"Choice",props:{choice_text:String,id:Number,votes:Array,percentage:{type:Number,required:!0},loading:{type:Boolean,required:!0},my_choice:{type:Boolean,required:!0},has_voted:{type:Number,required:!0}},emits:["choose","dialog"],setup(e,{emit:t}){const l=Re(),o=g(()=>l.user.id),n=m(!1),a=m(null),i=t,r=e;T(()=>{setTimeout(()=>{const s=a.value;s&&(s.style.width=r.percentage+"%")},500)}),C(()=>{var s;return(s=r.votes)==null?void 0:s.length},()=>{n.value=!1}),C(()=>r.percentage,()=>{const s=a.value;s&&(s.style.width=r.percentage+"%")});const u=()=>{if(!o.value){i("dialog",1);return}if(r.has_voted){i("dialog",2);return}n.value=!0,i("choose",r.id)};return(s,c)=>{var v;return P(),ne("div",{class:"flex flex-col gap-y-2 rounded-md my-2 border-2 px-3 border-slate-800 py-3 choice",onClick:u},[b("div",Vt,[b("div",Ot,[b("span",{class:ft(`w-5 h-5 border-2 border-white inline-block rounded-full choice-circle
          ${r.my_choice?"my_choice":""}
          ${_(n)?"loading animate-pulse":"animate-none"} `)},null,2),b("span",null,je(r.choice_text),1)]),b("div",At,[se(_(Le),{"end-val":((v=r.votes)==null?void 0:v.length)||0,duration:"2"},null,8,["end-val"]),Pt,k(" . "),b("span",Lt,[se(_(Le),{"end-val":e.percentage,duration:"2"},null,8,["end-val"]),k(" % ")])])]),b("div",Dt,[b("div",{style:{width:"0%"},ref_key:"per",ref:a,class:"duration-500 transition-all absolute left-0 top-0 bg-yellow-200 h-full rounded-full"},null,512)])])}}});let _t=Symbol("headlessui.useid"),Ct=0;function $e(){return D(_t,()=>`${++Ct}`)()}function S(e){var t;if(e==null||e.value==null)return null;let l=(t=e.value.$el)!=null?t:e.value;return l instanceof Node?l:null}function B(e,t,...l){if(e in t){let n=t[e];return typeof n=="function"?n(...l):n}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,B),o}var kt=Object.defineProperty,Mt=(e,t,l)=>t in e?kt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,De=(e,t,l)=>(Mt(e,typeof t!="symbol"?t+"":t,l),l);let jt=class{constructor(){De(this,"current",this.detect()),De(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},fe=new jt;function Y(e){if(fe.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=S(e);if(t)return t.ownerDocument}return document}let ge=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var M=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(M||{}),He=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(He||{}),Rt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Rt||{});function Ht(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ge)).sort((t,l)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(l.tabIndex||Number.MAX_SAFE_INTEGER)))}var Ie=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Ie||{});function It(e,t=0){var l;return e===((l=Y(e))==null?void 0:l.body)?!1:B(t,{0(){return e.matches(ge)},1(){let o=e;for(;o!==null;){if(o.matches(ge))return!0;o=o.parentElement}return!1}})}var Bt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Bt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function I(e){e==null||e.focus({preventScroll:!0})}let qt=["textarea","input"].join(",");function Ut(e){var t,l;return(l=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,qt))!=null?l:!1}function Wt(e,t=l=>l){return e.slice().sort((l,o)=>{let n=t(l),a=t(o);if(n===null||a===null)return 0;let i=n.compareDocumentPosition(a);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ie(e,t,{sorted:l=!0,relativeTo:o=null,skipElements:n=[]}={}){var a;let i=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,r=Array.isArray(e)?l?Wt(e):e:Ht(e);n.length>0&&r.length>1&&(r=r.filter(p=>!n.includes(p))),o=o??i.activeElement;let u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,r.indexOf(o))-1;if(t&4)return Math.max(0,r.indexOf(o))+1;if(t&8)return r.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},v=0,d=r.length,f;do{if(v>=d||v+d<=0)return 0;let p=s+v;if(t&16)p=(p+d)%d;else{if(p<0)return 3;if(p>=d)return 1}f=r[p],f==null||f.focus(c),v+=u}while(f!==i.activeElement);return t&6&&Ut(f)&&f.select(),2}function Be(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Yt(){return/Android/gi.test(window.navigator.userAgent)}function Gt(){return Be()||Yt()}function ae(e,t,l){fe.isServer||q(o=>{document.addEventListener(e,t,l),o(()=>document.removeEventListener(e,t,l))})}function qe(e,t,l){fe.isServer||q(o=>{window.addEventListener(e,t,l),o(()=>window.removeEventListener(e,t,l))})}function Kt(e,t,l=g(()=>!0)){function o(a,i){if(!l.value||a.defaultPrevented)return;let r=i(a);if(r===null||!r.getRootNode().contains(r))return;let u=function s(c){return typeof c=="function"?s(c()):Array.isArray(c)||c instanceof Set?c:[c]}(e);for(let s of u){if(s===null)continue;let c=s instanceof HTMLElement?s:S(s);if(c!=null&&c.contains(r)||a.composed&&a.composedPath().includes(c))return}return!It(r,Ie.Loose)&&r.tabIndex!==-1&&a.preventDefault(),t(a,r)}let n=m(null);ae("pointerdown",a=>{var i,r;l.value&&(n.value=((r=(i=a.composedPath)==null?void 0:i.call(a))==null?void 0:r[0])||a.target)},!0),ae("mousedown",a=>{var i,r;l.value&&(n.value=((r=(i=a.composedPath)==null?void 0:i.call(a))==null?void 0:r[0])||a.target)},!0),ae("click",a=>{Gt()||n.value&&(o(a,()=>n.value),n.value=null)},!0),ae("touchend",a=>o(a,()=>a.target instanceof HTMLElement?a.target:null),!0),qe("blur",a=>o(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var ye=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ye||{}),zt=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(zt||{});function j({visible:e=!0,features:t=0,ourProps:l,theirProps:o,...n}){var a;let i=We(o,l),r=Object.assign(n,{props:i});if(e||t&2&&i.static)return he(r);if(t&1){let u=(a=i.unmount)==null||a?0:1;return B(u,{0(){return null},1(){return he({...n,props:{...i,hidden:!0,style:{display:"none"}}})}})}return he(r)}function he({props:e,attrs:t,slots:l,slot:o,name:n}){var a,i;let{as:r,...u}=Jt(e,["unmount","static"]),s=(a=l.default)==null?void 0:a.call(l,o),c={};if(o){let v=!1,d=[];for(let[f,p]of Object.entries(o))typeof p=="boolean"&&(v=!0),p===!0&&d.push(f);v&&(c["data-headlessui-state"]=d.join(" "))}if(r==="template"){if(s=Ue(s??[]),Object.keys(u).length>0||Object.keys(t).length>0){let[v,...d]=s??[];if(!Xt(v)||d.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(u).concat(Object.keys(t)).map(h=>h.trim()).filter((h,w,V)=>V.indexOf(h)===w).sort((h,w)=>h.localeCompare(w)).map(h=>`  - ${h}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(h=>`  - ${h}`).join(`
`)].join(`
`));let f=We((i=v.props)!=null?i:{},u,c),p=pt(v,f,!0);for(let h in f)h.startsWith("on")&&(p.props||(p.props={}),p.props[h]=f[h]);return p}return Array.isArray(s)&&s.length===1?s[0]:s}return F(r,Object.assign({},u,c),{default:()=>s})}function Ue(e){return e.flatMap(t=>t.type===ue?Ue(t.children):[t])}function We(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},l={};for(let o of e)for(let n in o)n.startsWith("on")&&typeof o[n]=="function"?(l[n]!=null||(l[n]=[]),l[n].push(o[n])):t[n]=o[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(l).map(o=>[o,void 0])));for(let o in l)Object.assign(t,{[o](n,...a){let i=l[o];for(let r of i){if(n instanceof Event&&n.defaultPrevented)return;r(n,...a)}}});return t}function Jt(e,t=[]){let l=Object.assign({},e);for(let o of t)o in l&&delete l[o];return l}function Xt(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var ce=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ce||{});let we=x({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:l}){return()=>{var o;let{features:n,...a}=e,i={"aria-hidden":(n&2)===2?!0:(o=a["aria-hidden"])!=null?o:void 0,hidden:(n&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return j({ourProps:i,theirProps:a,slot:{},attrs:l,slots:t,name:"Hidden"})}}}),Qt=Symbol("Context");var ee=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(ee||{});function Zt(){return D(Qt,null)}var Ye=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ye||{});function en(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let R=[];en(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&R[0]!==t.target&&(R.unshift(t.target),R=R.filter(l=>l!=null&&l.isConnected),R.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Te(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function xe(){let e=[],t={addEventListener(l,o,n,a){return l.addEventListener(o,n,a),t.add(()=>l.removeEventListener(o,n,a))},requestAnimationFrame(...l){let o=requestAnimationFrame(...l);t.add(()=>cancelAnimationFrame(o))},nextFrame(...l){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...l)})},setTimeout(...l){let o=setTimeout(...l);t.add(()=>clearTimeout(o))},microTask(...l){let o={current:!0};return Te(()=>{o.current&&l[0]()}),t.add(()=>{o.current=!1})},style(l,o,n){let a=l.style.getPropertyValue(o);return Object.assign(l.style,{[o]:n}),this.add(()=>{Object.assign(l.style,{[o]:a})})},group(l){let o=xe();return l(o),this.add(()=>o.dispose())},add(l){return e.push(l),()=>{let o=e.indexOf(l);if(o>=0)for(let n of e.splice(o,1))n()}},dispose(){for(let l of e.splice(0))l()}};return t}function Ge(e,t,l,o){fe.isServer||q(n=>{e=e??window,e.addEventListener(t,l,o),n(()=>e.removeEventListener(t,l,o))})}var te=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(te||{});function tn(){let e=m(0);return qe("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Ke(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let l of e.value){let o=S(l);o instanceof HTMLElement&&t.add(o)}return t}var ze=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(ze||{});let Q=Object.assign(x({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:m(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:o}){let n=m(null);o({el:n,$el:n});let a=g(()=>Y(n)),i=m(!1);T(()=>i.value=!0),L(()=>i.value=!1),ln({ownerDocument:a},g(()=>i.value&&!!(e.features&16)));let r=on({ownerDocument:a,container:n,initialFocus:g(()=>e.initialFocus)},g(()=>i.value&&!!(e.features&2)));an({ownerDocument:a,container:n,containers:e.containers,previousActiveElement:r},g(()=>i.value&&!!(e.features&8)));let u=tn();function s(f){let p=S(n);p&&(h=>h())(()=>{B(u.value,{[te.Forwards]:()=>{ie(p,M.First,{skipElements:[f.relatedTarget]})},[te.Backwards]:()=>{ie(p,M.Last,{skipElements:[f.relatedTarget]})}})})}let c=m(!1);function v(f){f.key==="Tab"&&(c.value=!0,requestAnimationFrame(()=>{c.value=!1}))}function d(f){if(!i.value)return;let p=Ke(e.containers);S(n)instanceof HTMLElement&&p.add(S(n));let h=f.relatedTarget;h instanceof HTMLElement&&h.dataset.headlessuiFocusGuard!=="true"&&(Je(p,h)||(c.value?ie(S(n),B(u.value,{[te.Forwards]:()=>M.Next,[te.Backwards]:()=>M.Previous})|M.WrapAround,{relativeTo:f.target}):f.target instanceof HTMLElement&&I(f.target)))}return()=>{let f={},p={ref:n,onKeydown:v,onFocusout:d},{features:h,initialFocus:w,containers:V,...N}=e;return F(ue,[!!(h&4)&&F(we,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:ce.Focusable}),j({ourProps:p,theirProps:{...t,...N},slot:f,attrs:t,slots:l,name:"FocusTrap"}),!!(h&4)&&F(we,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:ce.Focusable})])}}}),{features:ze});function nn(e){let t=m(R.slice());return C([e],([l],[o])=>{o===!0&&l===!1?Te(()=>{t.value.splice(0)}):o===!1&&l===!0&&(t.value=R.slice())},{flush:"post"}),()=>{var l;return(l=t.value.find(o=>o!=null&&o.isConnected))!=null?l:null}}function ln({ownerDocument:e},t){let l=nn(t);T(()=>{q(()=>{var o,n;t.value||((o=e.value)==null?void 0:o.activeElement)===((n=e.value)==null?void 0:n.body)&&I(l())},{flush:"post"})}),L(()=>{t.value&&I(l())})}function on({ownerDocument:e,container:t,initialFocus:l},o){let n=m(null),a=m(!1);return T(()=>a.value=!0),L(()=>a.value=!1),T(()=>{C([t,l,o],(i,r)=>{if(i.every((s,c)=>(r==null?void 0:r[c])===s)||!o.value)return;let u=S(t);u&&Te(()=>{var s,c;if(!a.value)return;let v=S(l),d=(s=e.value)==null?void 0:s.activeElement;if(v){if(v===d){n.value=d;return}}else if(u.contains(d)){n.value=d;return}v?I(v):ie(u,M.First|M.NoScroll)===He.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),n.value=(c=e.value)==null?void 0:c.activeElement})},{immediate:!0,flush:"post"})}),n}function an({ownerDocument:e,container:t,containers:l,previousActiveElement:o},n){var a;Ge((a=e.value)==null?void 0:a.defaultView,"focus",i=>{if(!n.value)return;let r=Ke(l);S(t)instanceof HTMLElement&&r.add(S(t));let u=o.value;if(!u)return;let s=i.target;s&&s instanceof HTMLElement?Je(r,s)?(o.value=s,I(s)):(i.preventDefault(),i.stopPropagation(),I(u)):I(o.value)},!0)}function Je(e,t){for(let l of e)if(l.contains(t))return!0;return!1}function rn(e){let t=vt(e.getSnapshot());return L(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function sn(e,t){let l=e(),o=new Set;return{getSnapshot(){return l},subscribe(n){return o.add(n),()=>o.delete(n)},dispatch(n,...a){let i=t[n].call(l,...a);i&&(l=i,o.forEach(r=>r()))}}}function un(){let e;return{before({doc:t}){var l;let o=t.documentElement;e=((l=t.defaultView)!=null?l:window).innerWidth-o.clientWidth},after({doc:t,d:l}){let o=t.documentElement,n=o.clientWidth-o.offsetWidth,a=e-n;l.style(o,"paddingRight",`${a}px`)}}}function dn(){return Be()?{before({doc:e,d:t,meta:l}){function o(n){return l.containers.flatMap(a=>a()).some(a=>a.contains(n))}t.microTask(()=>{var n;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let r=xe();r.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>r.dispose()))}let a=(n=window.scrollY)!=null?n:window.pageYOffset,i=null;t.addEventListener(e,"click",r=>{if(r.target instanceof HTMLElement)try{let u=r.target.closest("a");if(!u)return;let{hash:s}=new URL(u.href),c=e.querySelector(s);c&&!o(c)&&(i=c)}catch{}},!0),t.addEventListener(e,"touchstart",r=>{if(r.target instanceof HTMLElement)if(o(r.target)){let u=r.target;for(;u.parentElement&&o(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(r.target,"touchAction","none")}),t.addEventListener(e,"touchmove",r=>{if(r.target instanceof HTMLElement)if(o(r.target)){let u=r.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&r.preventDefault()}else r.preventDefault()},{passive:!1}),t.add(()=>{var r;let u=(r=window.scrollY)!=null?r:window.pageYOffset;a!==u&&window.scrollTo(0,a),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function cn(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function fn(e){let t={};for(let l of e)Object.assign(t,l(t));return t}let H=sn(()=>new Map,{PUSH(e,t){var l;let o=(l=this.get(e))!=null?l:{doc:e,count:0,d:xe(),meta:new Set};return o.count++,o.meta.add(t),this.set(e,o),this},POP(e,t){let l=this.get(e);return l&&(l.count--,l.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:l}){let o={doc:e,d:t,meta:fn(l)},n=[dn(),un(),cn()];n.forEach(({before:a})=>a==null?void 0:a(o)),n.forEach(({after:a})=>a==null?void 0:a(o))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});H.subscribe(()=>{let e=H.getSnapshot(),t=new Map;for(let[l]of e)t.set(l,l.documentElement.style.overflow);for(let l of e.values()){let o=t.get(l.doc)==="hidden",n=l.count!==0;(n&&!o||!n&&o)&&H.dispatch(l.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",l),l.count===0&&H.dispatch("TEARDOWN",l)}});function pn(e,t,l){let o=rn(H),n=g(()=>{let a=e.value?o.value.get(e.value):void 0;return a?a.count>0:!1});return C([e,t],([a,i],[r],u)=>{if(!a||!i)return;H.dispatch("PUSH",a,l);let s=!1;u(()=>{s||(H.dispatch("POP",r??a,l),s=!0)})},{immediate:!0}),n}let me=new Map,Z=new Map;function Ne(e,t=m(!0)){q(l=>{var o;if(!t.value)return;let n=S(e);if(!n)return;l(function(){var i;if(!n)return;let r=(i=Z.get(n))!=null?i:1;if(r===1?Z.delete(n):Z.set(n,r-1),r!==1)return;let u=me.get(n);u&&(u["aria-hidden"]===null?n.removeAttribute("aria-hidden"):n.setAttribute("aria-hidden",u["aria-hidden"]),n.inert=u.inert,me.delete(n))});let a=(o=Z.get(n))!=null?o:0;Z.set(n,a+1),a===0&&(me.set(n,{"aria-hidden":n.getAttribute("aria-hidden"),inert:n.inert}),n.setAttribute("aria-hidden","true"),n.inert=!0)})}function vn({defaultContainers:e=[],portals:t,mainTreeNodeRef:l}={}){let o=m(null),n=Y(o);function a(){var i,r,u;let s=[];for(let c of e)c!==null&&(c instanceof HTMLElement?s.push(c):"value"in c&&c.value instanceof HTMLElement&&s.push(c.value));if(t!=null&&t.value)for(let c of t.value)s.push(c);for(let c of(i=n==null?void 0:n.querySelectorAll("html > *, body > *"))!=null?i:[])c!==document.body&&c!==document.head&&c instanceof HTMLElement&&c.id!=="headlessui-portal-root"&&(c.contains(S(o))||c.contains((u=(r=S(o))==null?void 0:r.getRootNode())==null?void 0:u.host)||s.some(v=>c.contains(v))||s.push(c));return s}return{resolveContainers:a,contains(i){return a().some(r=>r.contains(i))},mainTreeNodeRef:o,MainTreeNode(){return l!=null?null:F(we,{features:ce.Hidden,ref:o})}}}let Xe=Symbol("ForcePortalRootContext");function hn(){return D(Xe,!1)}let _e=x({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:l}){return W(Xe,e.force),()=>{let{force:o,...n}=e;return j({theirProps:n,ourProps:{},slot:{},slots:t,attrs:l,name:"ForcePortalRoot"})}}}),Qe=Symbol("StackContext");var be=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(be||{});function mn(){return D(Qe,()=>{})}function gn({type:e,enabled:t,element:l,onUpdate:o}){let n=mn();function a(...i){o==null||o(...i),n(...i)}T(()=>{C(t,(i,r)=>{i?a(0,e,l):r===!0&&a(1,e,l)},{immediate:!0,flush:"sync"})}),L(()=>{t.value&&a(1,e,l)}),W(Qe,a)}let Ze=Symbol("DescriptionContext");function yn(){let e=D(Ze,null);if(e===null)throw new Error("Missing parent");return e}function wn({slot:e=m({}),name:t="Description",props:l={}}={}){let o=m([]);function n(a){return o.value.push(a),()=>{let i=o.value.indexOf(a);i!==-1&&o.value.splice(i,1)}}return W(Ze,{register:n,slot:e,name:t,props:l}),g(()=>o.value.length>0?o.value.join(" "):void 0)}let bn=x({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:null}},setup(e,{attrs:t,slots:l}){var o;let n=(o=e.id)!=null?o:`headlessui-description-${$e()}`,a=yn();return T(()=>L(a.register(n))),()=>{let{name:i="Description",slot:r=m({}),props:u={}}=a,{...s}=e,c={...Object.entries(u).reduce((v,[d,f])=>Object.assign(v,{[d]:_(f)}),{}),id:n};return j({ourProps:c,theirProps:s,slot:r.value,attrs:t,slots:l,name:i})}}});function En(e){let t=Y(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let l=t.getElementById("headlessui-portal-root");if(l)return l;let o=t.createElement("div");return o.setAttribute("id","headlessui-portal-root"),t.body.appendChild(o)}const Ee=new WeakMap;function Sn(e){var t;return(t=Ee.get(e))!=null?t:0}function Ce(e,t){let l=t(Sn(e));return l<=0?Ee.delete(e):Ee.set(e,l),l}let Fn=x({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:l}){let o=m(null),n=g(()=>Y(o)),a=hn(),i=D(et,null),r=m(a===!0||i==null?En(o.value):i.resolveTarget());r.value&&Ce(r.value,d=>d+1);let u=m(!1);T(()=>{u.value=!0}),q(()=>{a||i!=null&&(r.value=i.resolveTarget())});let s=D(Se,null),c=!1,v=gt();return C(o,()=>{if(c||!s)return;let d=S(o);d&&(L(s.register(d),v),c=!0)}),L(()=>{var d,f;let p=(d=n.value)==null?void 0:d.getElementById("headlessui-portal-root");!p||r.value!==p||Ce(r.value,h=>h-1)||r.value.children.length>0||(f=r.value.parentElement)==null||f.removeChild(r.value)}),()=>{if(!u.value||r.value===null)return null;let d={ref:o,"data-headlessui-portal":""};return F(ht,{to:r.value},j({ourProps:d,theirProps:e,slot:{},attrs:l,slots:t,name:"Portal"}))}}}),Se=Symbol("PortalParentContext");function $n(){let e=D(Se,null),t=m([]);function l(a){return t.value.push(a),e&&e.register(a),()=>o(a)}function o(a){let i=t.value.indexOf(a);i!==-1&&t.value.splice(i,1),e&&e.unregister(a)}let n={register:l,unregister:o,portals:t};return[t,x({name:"PortalWrapper",setup(a,{slots:i}){return W(Se,n),()=>{var r;return(r=i.default)==null?void 0:r.call(i)}}})]}let et=Symbol("PortalGroupContext"),Tn=x({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:l}){let o=mt({resolveTarget(){return e.target}});return W(et,o),()=>{let{target:n,...a}=e;return j({theirProps:a,ourProps:{},slot:{},attrs:t,slots:l,name:"PortalGroup"})}}});var xn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(xn||{});let Fe=Symbol("DialogContext");function tt(e){let t=D(Fe,null);if(t===null){let l=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,tt),l}return t}let re="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Vn=x({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:re},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:l,slots:o,expose:n}){var a,i;let r=(a=e.id)!=null?a:`headlessui-dialog-${$e()}`,u=m(!1);T(()=>{u.value=!0});let s=!1,c=g(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(s||(s=!0,console.warn(`Invalid role [${c}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),v=m(0),d=Zt(),f=g(()=>e.open===re&&d!==null?(d.value&ee.Open)===ee.Open:e.open),p=m(null),h=g(()=>Y(p));if(n({el:p,$el:p}),!(e.open!==re||d!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof f.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value===re?void 0:e.open}`);let w=g(()=>u.value&&f.value?0:1),V=g(()=>w.value===0),N=g(()=>v.value>1),G=D(Fe,null)!==null,[$,K]=$n(),{resolveContainers:pe,mainTreeNodeRef:Ve,MainTreeNode:nt}=vn({portals:$,defaultContainers:[g(()=>{var y;return(y=z.panelRef.value)!=null?y:p.value})]}),lt=g(()=>N.value?"parent":"leaf"),Oe=g(()=>d!==null?(d.value&ee.Closing)===ee.Closing:!1),ot=g(()=>G||Oe.value?!1:V.value),at=g(()=>{var y,E,O;return(O=Array.from((E=(y=h.value)==null?void 0:y.querySelectorAll("body > *"))!=null?E:[]).find(A=>A.id==="headlessui-portal-root"?!1:A.contains(S(Ve))&&A instanceof HTMLElement))!=null?O:null});Ne(at,ot);let rt=g(()=>N.value?!0:V.value),it=g(()=>{var y,E,O;return(O=Array.from((E=(y=h.value)==null?void 0:y.querySelectorAll("[data-headlessui-portal]"))!=null?E:[]).find(A=>A.contains(S(Ve))&&A instanceof HTMLElement))!=null?O:null});Ne(it,rt),gn({type:"Dialog",enabled:g(()=>w.value===0),element:p,onUpdate:(y,E)=>{if(E==="Dialog")return B(y,{[be.Add]:()=>v.value+=1,[be.Remove]:()=>v.value-=1})}});let st=wn({name:"DialogDescription",slot:g(()=>({open:f.value}))}),le=m(null),z={titleId:le,panelRef:m(null),dialogState:w,setTitleId(y){le.value!==y&&(le.value=y)},close(){t("close",!1)}};W(Fe,z);let ut=g(()=>!(!V.value||N.value));Kt(pe,(y,E)=>{y.preventDefault(),z.close(),yt(()=>E==null?void 0:E.focus())},ut);let dt=g(()=>!(N.value||w.value!==0));Ge((i=h.value)==null?void 0:i.defaultView,"keydown",y=>{dt.value&&(y.defaultPrevented||y.key===Ye.Escape&&(y.preventDefault(),y.stopPropagation(),z.close()))});let ct=g(()=>!(Oe.value||w.value!==0||G));return pn(h,ct,y=>{var E;return{containers:[...(E=y.containers)!=null?E:[],pe]}}),q(y=>{if(w.value!==0)return;let E=S(p);if(!E)return;let O=new ResizeObserver(A=>{for(let ve of A){let oe=ve.target.getBoundingClientRect();oe.x===0&&oe.y===0&&oe.width===0&&oe.height===0&&z.close()}});O.observe(E),y(()=>O.disconnect())}),()=>{let{open:y,initialFocus:E,...O}=e,A={...l,ref:p,id:r,role:c.value,"aria-modal":w.value===0?!0:void 0,"aria-labelledby":le.value,"aria-describedby":st.value},ve={open:w.value===0};return F(_e,{force:!0},()=>[F(Fn,()=>F(Tn,{target:p.value},()=>F(_e,{force:!1},()=>F(Q,{initialFocus:E,containers:pe,features:V.value?B(lt.value,{parent:Q.features.RestoreFocus,leaf:Q.features.All&~Q.features.FocusLock}):Q.features.None},()=>F(K,{},()=>j({ourProps:A,theirProps:{...O,...l},slot:ve,attrs:l,slots:o,visible:w.value===0,features:ye.RenderStrategy|ye.Static,name:"Dialog"})))))),F(nt)])}}}),ke=x({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:null}},setup(e,{attrs:t,slots:l}){var o;let n=(o=e.id)!=null?o:`headlessui-dialog-title-${$e()}`,a=tt("DialogTitle");return T(()=>{a.setTitleId(n),L(()=>a.setTitleId(null))}),()=>{let{...i}=e;return j({ourProps:{id:n},theirProps:i,slot:{open:a.dialogState.value===0},attrs:t,slots:l,name:"DialogTitle"})}}}),Me=bn;const On={class:"col-span-5 lg:col-span-4"},An={class:"w-full h-full flex flex-col py-5 px-2 rounded *:transition-all"},Pn={class:"text-4xl text-center mb-5"},Ln={key:0,class:"flex justify-center"},Dn={class:"overflow-hidden image-container"},Nn=["src"],_n=b("div",{class:"fixed inset-0 bg-black/30","aria-hidden":"true"},null,-1),Cn={class:"fixed inset-0 flex w-screen items-center justify-center p-4"},Rn={__name:"[id]",setup(e){const t=m(!1),l=m(0);function o(d){t.value=d}const n=Re(),a=g(()=>n.user.id),i=wt();bt();const r=m(null),u=m(!1),s=m(!1),c=async()=>{try{s.value=!0;const d=await $fetch("https://gossipgirls.pythonanywhere.com/api/polls/"+i.params.id),f=d.choices.reduce((p,h)=>p+h.votes.length,0);d.choices=d.choices.map(p=>{const h=p.votes.find(w=>w.voted_by===a.value);return h&&(u.value=!0),{my_choice:h,loading:!1,...p,percentage:p.votes.length/f*100}}),document.querySelector("title").innerText="gossipgirls - "+d.question,r.value=d}catch(d){console.log({err:d})}finally{s.value=!1}},v=async d=>{await $fetch("https://gossipgirls.pythonanywhere.com/api/polls/"+i.params.id+"/choices/"+d+"/vote",{method:"POST",body:{voted_by:a.value}}),await c()};return T(()=>{c()}),(d,f)=>{var w,V,N,G;const p=Nt,h=St("DialogPanel");return P(),ne(ue,null,[b("div",On,[b("div",An,[b("div",null,[b("h3",Pn,je((w=r.value)==null?void 0:w.question),1)]),(V=r.value)!=null&&V.image?(P(),ne("div",Ln,[b("div",Dn,[b("img",{src:(N=r.value)==null?void 0:N.image,width:"300px",height:"140px"},null,8,Nn)])])):J("",!0),b("div",null,[(P(!0),ne(ue,null,Et((G=r.value)==null?void 0:G.choices,$=>(P(),X(p,{onDialog:f[0]||(f[0]=K=>{l.value=K,o(!0)}),has_voted:u.value,id:$.id,key:$.id,choice_text:$.choice_text,votes:$.votes,percentage:$.percentage,loading:$.loading,my_choice:$.my_choice,onChoose:f[1]||(f[1]=K=>v(K))},null,8,["has_voted","id","choice_text","votes","percentage","loading","my_choice"]))),128))])])]),se(_(Vn),{open:t.value,onClose:o,class:"relative z-50"},{default:U(()=>[_n,b("div",Cn,[se(h,{class:"w-full max-w-sm rounded bg-white p-5"},{default:U(()=>[l.value.valueOf()===1?(P(),X(_(ke),{key:0,class:"text-xl font-semibold mb-2"},{default:U(()=>[k("Login Required")]),_:1})):J("",!0),l.value.valueOf()===2?(P(),X(_(ke),{key:1,class:"text-xl font-semibold mb-2"},{default:U(()=>[k("Already Voted")]),_:1})):J("",!0),l.value.valueOf()===2?(P(),X(_(Me),{key:2,class:"mb-4"},{default:U(()=>[k(" You've already cast your vote on this poll. Thank you for your participation! ")]),_:1})):J("",!0),l.value.valueOf()===1?(P(),X(_(Me),{key:3,class:"mb-4"},{default:U(()=>[k(" Please "),b("a",{href:"#",onClick:f[2]||(f[2]=Pe($=>{o(!1),d.$router.push("/login")},["prevent"])),class:"text-blue-600 hover:text-blue-500"},"log in"),k(" or "),b("a",{href:"#",onClick:f[3]||(f[3]=Pe($=>{o(!1),d.$router.push("/signup")},["prevent"])),class:"text-blue-600 hover:text-blue-500"},"sign up"),k(" to vote on this poll. ")]),_:1})):J("",!0),b("button",{onClick:f[4]||(f[4]=$=>o(!1)),class:"text-red-500 hover:text-red-700 float-right font-semibold"}," close ")]),_:1})])]),_:1},8,["open"])],64)}}};export{Rn as default};