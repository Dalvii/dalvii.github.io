"use strict";function e(){}function t(e){return e()}function i(e){e.forEach(t)}function s(t,...i){if(null==t)return e;const s=t.subscribe(...i);return s.unsubscribe?()=>s.unsubscribe():s}let n;function r(e){n=e}function a(){if(!n)throw new Error("Function called outside component initialization");return n}function o(){const e=a();return(t,i)=>{const s=e.$$.callbacks[t];if(s){const n=function(e,t,i=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,i,!1,t),s}(t,i);s.slice().forEach((t=>{t.call(e,n)}))}}}function l(e,t){a().$$.context.set(e,t)}function c(e){return a().$$.context.get(e)}Promise.resolve();const d=new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),u=/[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;const p={'"':"&quot;","'":"&#39;","&":"&amp;","<":"&lt;",">":"&gt;"};function m(e){return"string"==typeof e?String(e).replace(/["'&<>]/g,(e=>p[e])):e}function g(e){const t={};for(const i in e)t[i]=m(e[i]);return t}const v={$$render:()=>""};function h(e,t){if(!e||!e.$$render)throw"svelte:component"===t&&(t+=" this={...}"),new Error(`<${t}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);return e}let f;function b(e){function t(t,i,s,a,o){const l=n;r({$$:{on_destroy:f,context:new Map(o||(l?l.$$.context:[])),on_mount:[],before_update:[],after_update:[],callbacks:Object.create(null)}});const c=e(t,i,s,a);return r(l),c}return{render:(e={},{$$slots:s={},context:n=new Map}={})=>{f=[];const r={title:"",head:"",css:new Set},a=t(r,e,{},s,n);return i(f),{html:a,css:{code:Array.from(r.css).map((e=>e.code)).join("\n"),map:null},head:r.title+r.head}},$$render:t}}function F(e){return Object.keys(e).filter((t=>e[t])).map((t=>`${t}: ${e[t]};`)).join(" ")}const x=[];function $(t,i=e){let s;const n=new Set;function r(e){if(r=e,((i=t)!=i?r==r:i!==r||i&&"object"==typeof i||"function"==typeof i)&&(t=e,s)){const e=!x.length;for(const e of n)e[1](),x.push(e,t);if(e){for(let e=0;e<x.length;e+=2)x[e][0](x[e+1]);x.length=0}}var i,r}return{set:r,update:function(e){r(e(t))},subscribe:function(a,o=e){const l=[a,o];return n.add(l),1===n.size&&(s=i(r)||e),a(t),()=>{n.delete(l),0===n.size&&(s(),s=null)}}}}function y(t,n,r){const a=!Array.isArray(t),o=a?[t]:t,l=n.length<2;return c=t=>{let r=!1;const c=[];let d=0,u=e;const p=()=>{if(d)return;u();const i=n(a?c[0]:c,t);l?t(i):u="function"==typeof i?i:e},m=o.map(((e,t)=>s(e,(e=>{c[t]=e,d&=~(1<<t),r&&p()}),(()=>{d|=1<<t}))));return r=!0,p(),function(){i(m),u()}},{subscribe:$(r,c).subscribe};var c}const k={},w={};function j(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}const E=function(e,t){const i=[];let s=j(e);return{get location(){return s},listen(t){i.push(t);const n=()=>{s=j(e),t({location:s,action:"POP"})};return e.addEventListener("popstate",n),()=>{e.removeEventListener("popstate",n);const s=i.indexOf(t);i.splice(s,1)}},navigate(t,{state:n,replace:r=!1}={}){n={...n,key:Date.now()+""};try{r?e.history.replaceState(n,null,t):e.history.pushState(n,null,t)}catch(i){e.location[r?"replace":"assign"](t)}s=j(e),i.forEach((e=>e({location:s,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(e="/"){let t=0;const i=[{pathname:e,search:""}],s=[];return{get location(){return i[t]},addEventListener(e,t){},removeEventListener(e,t){},history:{get entries(){return i},get index(){return t},get state(){return s[t]},pushState(e,n,r){const[a,o=""]=r.split("?");t++,i.push({pathname:a,search:o}),s.push(e)},replaceState(e,n,r){const[a,o=""]=r.split("?");i[t]={pathname:a,search:o},s[t]=e}}}}()),C=/^:(.+)/;function P(e,t){return e.substr(0,t.length)===t}function L(e){return"*"===e[0]}function q(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function S(e){return e.replace(/(^\/+|\/+$)/g,"")}function D(e,t){return{route:e,score:e.default?0:q(e.path).reduce(((e,t)=>(e+=4,!function(e){return""===e}(t)?!function(e){return C.test(e)}(t)?L(t)?e-=5:e+=3:e+=2:e+=1,e)),0),index:t}}function R(e,t){let i,s;const[n]=t.split("?"),r=q(n),a=""===r[0],o=function(e){return e.map(D).sort(((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index))}(e);for(let e=0,n=o.length;e<n;e++){const n=o[e].route;let l=!1;if(n.default){s={route:n,params:{},uri:t};continue}const c=q(n.path),d={},u=Math.max(r.length,c.length);let p=0;for(;p<u;p++){const e=c[p],t=r[p];if(void 0!==e&&L(e)){d["*"===e?"*":e.slice(1)]=r.slice(p).map(decodeURIComponent).join("/");break}if(void 0===t){l=!0;break}let i=C.exec(e);if(i&&!a){const e=decodeURIComponent(t);d[i[1]]=e}else if(e!==t){l=!0;break}}if(!l){i={route:n,params:d,uri:"/"+r.slice(0,p).join("/")};break}}return i||s||null}function T(e,t){return e+(t?`?${t}`:"")}function _(e,t){return`${S("/"===t?e:`${S(e)}/${S(t)}`)}/`}const B=b(((e,t,i,n)=>{let r,o,d,u,p,m,{basepath:g="/"}=t,{url:v=null}=t;const h=c(k),f=c(w),b=$([]);u=s(b,(e=>d=e));const F=$(null);let x=!1;const j=h||$(v?{pathname:v}:E.location);o=s(j,(e=>r=e));const C=f?f.routerBase:$({path:g,uri:g});m=s(C,(e=>p=e));const P=y([C,F],(([e,t])=>{if(null===t)return e;const{path:i}=e,{route:s,uri:n}=t;return{path:s.default?i:s.path.replace(/\*.*$/,""),uri:n}}));var L;h||(L=()=>E.listen((e=>{j.set(e.location)})),a().$$.on_mount.push(L),l(k,j)),l(w,{activeRoute:F,base:C,routerBase:P,registerRoute:function(e){const{path:t}=p;let{path:i}=e;if(e._path=i,e.path=_(t,i),"undefined"==typeof window){if(x)return;const t=function(e,t){return R([e],t)}(e,r.pathname);t&&(F.set(t),x=!0)}else b.update((t=>(t.push(e),t)))},unregisterRoute:function(e){b.update((t=>{const i=t.indexOf(e);return t.splice(i,1),t}))}}),void 0===t.basepath&&i.basepath&&void 0!==g&&i.basepath(g),void 0===t.url&&i.url&&void 0!==v&&i.url(v);{const{path:e}=p;b.update((t=>(t.forEach((t=>t.path=_(e,t._path))),t)))}{const e=R(d,r.pathname);F.set(e)}return o(),u(),m(),`${n.default?n.default({}):""}`})),V=b(((e,t,i,n)=>{let r,o,l,d,{path:u=""}=t,{component:p=null}=t;const{registerRoute:m,unregisterRoute:g,activeRoute:f}=c(w);o=s(f,(e=>r=e));d=s(c(k),(e=>l=e));const b={path:u,default:""===u};let F={},x={};var $;m(b),"undefined"!=typeof window&&($=()=>{g(b)},a().$$.on_destroy.push($)),void 0===t.path&&i.path&&void 0!==u&&i.path(u),void 0===t.component&&i.component&&void 0!==p&&i.component(p),r&&r.route===b&&(F=r.params);{const{path:e,component:i,...s}=t;x=s}return o(),d(),""+(null!==r&&r.route===b?""+(null!==p?`${h(p||v,"svelte:component").$$render(e,Object.assign({location:l},F,x),{},{})}`:`${n.default?n.default({params:F,location:l}):""}`):"")})),M=b(((e,t,i,n)=>{let r,a,l,p,v,h=function(e,t){const i={};t=new Set(t);for(const s in e)t.has(s)||"$"===s[0]||(i[s]=e[s]);return i}(t,["to","replace","state","getProps"]),{to:f="#"}=t,{replace:b=!1}=t,{state:x={}}=t,{getProps:$=(()=>({}))}=t;const{base:y}=c(w);v=s(y,(e=>p=e));let j,E,C,L;return l=s(c(k),(e=>a=e)),o(),void 0===t.to&&i.to&&void 0!==f&&i.to(f),void 0===t.replace&&i.replace&&void 0!==b&&i.replace(b),void 0===t.state&&i.state&&void 0!==x&&i.state(x),void 0===t.getProps&&i.getProps&&void 0!==$&&i.getProps($),j="/"===f?p.uri:function(e,t){if(P(e,"/"))return e;const[i,s]=e.split("?"),[n]=t.split("?"),r=q(i),a=q(n);if(""===r[0])return T(n,s);if(!P(r[0],"."))return T(("/"===n?"":"/")+a.concat(r).join("/"),s);const o=a.concat(r),l=[];return o.forEach((e=>{".."===e?l.pop():"."!==e&&l.push(e)})),T("/"+l.join("/"),s)}(f,p.uri),E=P(a.pathname,j),C=j===a.pathname,r=C?"page":void 0,L=$({location:a,href:j,isPartiallyCurrent:E,isCurrent:C}),l(),v(),`<a${function(e,t){const i=Object.assign({},...e);if(t){const e=t.classes,s=t.styles;e&&(null==i.class?i.class=e:i.class+=" "+e),s&&(null==i.style?i.style=F(s):i.style=F(function(e,t){const i={};for(const t of e.split(";")){const e=t.indexOf(":"),s=t.slice(0,e).trim(),n=t.slice(e+1).trim();s&&(i[s]=n)}for(const e in t){const s=t[e];s?i[e]=s:delete i[e]}return i}(i.style,s)))}let s="";return Object.keys(i).forEach((e=>{if(u.test(e))return;const t=i[e];!0===t?s+=" "+e:d.has(e.toLowerCase())?t&&(s+=" "+e):null!=t&&(s+=` ${e}="${t}"`)})),s}([{href:m(j)},{"aria-current":m(r)},g(L),g(h)],{})}>${n.default?n.default({}):""}</a>`}));function z({location:e,href:t,isPartiallyCurrent:i,isCurrent:s}){return("/"===t?s:i||s)?{class:"active"}:{}}const A=b(((e,t,i,s)=>{let{to:n=""}=t;return void 0===t.to&&i.to&&void 0!==n&&i.to(n),`${h(M,"Link").$$render(e,{to:n,getProps:z},{},{default:()=>`${s.default?s.default({}):""}`})}`})),N=b(((e,t,i,s)=>`<div>${s.default?s.default({}):""}</div>`)),I=b(((e,t,i,s)=>`${h(N,"PageTransitions").$$render(e,{},{},{default:()=>`<div class="article-list"><div class="main-app" style="animation: 0.5s ease-out 0s 1 slideInFromBottom;" id="content"><div class="home-header"><div class="home-title-text"><h1 class="home-text-title" style="font-size: 28px; margin-bottom: 0;">Théo Vidal</h1>\n                    <div class="lil-desc" style="font-size: 14px;">Developpeur Web - Créateur de services en ligne</div>\n                    <div style="display: flex"><a class="lil-desc" style="font-size: 14px; color: inherit; text-decoration: none; margin-left: 9px;" href="mailto:contact@theo-vidal.fr">- contact@theo-vidal.fr</a></div></div>\n                <img class="pp-img" src="img/profile.jpg" alt="Profil" onerror="this.onerror=null;this.src='default-image.jpg';"></div>\n            <div class="home-main"><h3 class="home-main-title">Bio</h3>\n                <p style="word-wrap: break-word; text-align: justify; text-indent: 1em; color: #f2f0edeb; line-height: 24px;">Développeur débutant de 19 ans, en 1re année d&#39;études supérieures à l&#39;IUT de Nice, passionné par les technologies futuristes et les problématiques de notre monde résolvable par le code.</p>\n                <h3 class="home-main-title">Historique</h3>\n                <div class="home-main-timeline"><span>2022</span>\n                    Création du service en ligne Visioligne.com permettant d&#39;intégrer une fenêtre de visioconférence sur son site internet grâce à une simple balise &lt;iframe&gt;.\n                </div>\n                <div class="home-main-timeline"><span>2021</span>\n                    Fondation de l&#39;outil/site internet Estudium.net permettant aux professeurs et aux élèves de gérer leur cours, devoirs, notes, absences... Utilisé par le lycée polyvalent Léonard de Vinci à Antibes courant 2021.\n                </div>\n                <div class="home-main-timeline"><span>2020</span>\n                    Création d&#39;une version miniature et Always On Top du réseau social Discord.\n                </div>\n                <div class="home-main-timeline"><span>2019</span>\n                    Installation d&#39;un système domotique dans mon domicile grâce à la technologie Homekit et aux langages JavaScript et avr-C++.\n                </div>\n\n\n                <h3 class="home-main-title">Compétences</h3>\n                <p style="word-wrap: break-word; text-align: justify; text-indent: 1em; color: #f2f0edeb;">Technologies que j&#39;ai déjà utilisé sur un/des projet(s)\n                </p>\n                <div class="home-main-timeline"><span>Front-end</span>\n                    <div class="c_logos"><img src="/img/png-32/html5-32x32-1175209.png" alt="HTML" title="HTML">\n                        <img src="/img/png-32/css3-32x32-1175238.png" alt="CSS" title="CSS">\n                        <img src="/img/png-32/javascript-32x32-1174949.png" alt="Javascript" title="Javascript">\n                        <img src="/img/png-32/electron-32x32-1175035.png" alt="ElectronJS" title="ElectronJS">\n                        <img src="/img/png-32/pwa.png" alt="Progressive Web app" title="Progressive Web app"></div></div>\n                <div class="home-main-timeline"><span>Back-end</span>\n                    <div class="c_logos"><img src="/img/png-32/node-js-32x32-1174935.png" alt="NodeJS" title="NodeJS">\n                        <img src="/img/png-32/express-32x32-1175029.png" alt="ExpressJS" title="ExpressJS">\n                        <img src="/img/png-32/java-32x32-1174953.png" alt="Java" title="Java">\n                        <img src="/img/png-32/python.png" alt="Python" title="Python">\n                        <img src="/img/png-32/linux-32x32-1174928.png" alt="Linux/Bash" title="Linux/Bash">\n                        <img src="/img/png-32/heroku-32x32-1175212.png" alt="Heroku" title="Heroku">\n                        <img src="/img/png-32/apache-32x32-1175268.png" alt="Apache" title="Apache">\n                        <img src="/img/png-32/nginx-32x32-1174926.png" alt="Nginx" title="Nginx"></div></div>\n                <div class="home-main-timeline"><span>Database</span>\n                    <div class="c_logos"><img src="/img/png-32/mysql-32x32-1174941.png" alt="MySQL" title="MySQL">\n                        <img src="/img/png-32/mongodb.png" alt="MongoDB" title="MongoDB">\n                        <img src="/img/png-32/firebase.png" alt="Firebase" title="Firebase"></div></div>\n                <div class="home-main-timeline"><span>API</span>\n                    <div class="c_logos"><img src="/img/png-32/graphql.png" alt="Graphql" title="Graphql">\n                        <img src="/img/png-32/webrtc.png" alt="WebRTC/Peer2Peer" title="WebRTC/Peer2Peer">\n                        <img src="/img/png-32/stripe.png" alt="Stripe" title="Stripe">\n                        <img src="/img/png-32/paypal.png" alt="Paypal" title="Paypal"></div></div>\n                <div class="home-main-timeline"><span>DevOps</span>\n                    <div class="c_logos"><img src="/img/png-32/vscode.png" alt="VSCode" title="VSCode">\n                        <img src="/img/png-32/github.png" alt="Github" title="Github">\n                        <img src="/img/png-32/docker-32x32-1175229.png" alt="Docker" title="Docker">\n                        <img src="/img/png-32/npm.png" alt="NPM" title="NPM"></div></div>\n\n\n                <h3 class="home-main-title">Hobbies</h3>\n                <p style="word-wrap: break-word; text-align: justify; text-indent: 1em; color: #f2f0edeb;">Escalade, Volleyball, Batterie, Piano, Cryptographie, Machine learning\n                </p>\n                <h3 class="home-main-title">Social</h3>\n                <br>\n                <div class="socials"><a class="social-link" href="https://github.com/dalvii" target="_blank"><div class="list-socials"><div class="social-logo"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" focusable="false" class="chakra-icon css-13otjrl" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor; --darkreader-inline-fill:currentColor;" data-darkreader-inline-fill=""><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path></svg></div>\n                            <div class="social-desc">@dalvii</div></div></a>\n    \n                    <a class="social-link" href="https://instagram.com/theovi.dal" target="_blank"><div class="list-socials"><div class="social-logo"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" focusable="false" class="chakra-icon css-13otjrl" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor; --darkreader-inline-fill:currentColor;" data-darkreader-inline-fill=""><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path></svg></div>\n                            <div class="social-desc">@theovi.dal</div></div></a></div>\n                <h3 class="home-main-title">Travaux</h3>\n                <br>\n                <div class="list-grid"><a class="list-item" href="estudium"><img class="item-img" src="img/estudium.PNG" alt="estudium" onerror="this.onerror=null;this.src='default-image.jpg';">\n                            <div class="item-title text-title item-text-title">Estudium</div>\n                            <div class="item-desc">Un outil scolaire qui révolutionne les cours distanciels.</div></a>\n                    <a class="list-item" href="visioligne.com"><img class="item-img" src="img/visioligne.png" alt="visioligne" onerror="this.onerror=null;this.src='default-image.jpg';">\n                        <div class="item-title text-title item-text-title">Visioligne</div>\n                        <div class="item-desc">La visioconférence directement sur votre site internet, plus besoin de télécharger une application tierce.</div></a></div>\n                <div class="home-more">${h(A,"NavLink").$$render(e,{to:"works"},{},{default:()=>"Plus..."})}</div></div></div></div>`})}`)),J=b(((e,t,i,s)=>`${h(N,"PageTransitions").$$render(e,{},{},{default:()=>'<div class="article-list"><div class="main-app" style="animation: 0.5s ease-out 0s 1 slideInFromBottom;" id="content"><div class="home-header"><div class="home-title-text"><h1 class="home-text-title" style="font-size: 28px; margin-bottom: 0;">Estudium.net</h1>\n                    </div></div>\n            <div class="home-main"><h3 class="home-main-title">Un peu de lecture...</h3>\n                <p class="paragraph" style="text-indent: 1em;">Estudium.net est un site internet et outil scolaire permettant aux professeurs de pouvoir gérer les horaires des cours de façon libre.\n                </p>\n                <p class="paragraph">Il permet aussi de gérer les devoirs rendus par les élèves, les corriger, les noter et les rendre individuellement d&#39;une façon automatique.\n                </p>\n                <p class="paragraph">Et pour finir, il permet aussi de faire l’appel de façon automatique en fonction des membres connectés sur Discord lors des cours.\n                </p>\n                <p class="paragraph">Ce service a été utilisé par le Lycée Polyvalent Leonard de Vinci à Antibes courant 2021.\n                </p>\n\n                <h3 class="home-main-title">La problématique des services de cours en ligne</h3>\n                <p class="paragraph" style="text-indent: 1em;">Le site Pronote, utilisé officiellement par presque tous les établissements scolaires de France, (qui a pour but de gérer les emplois du temps des élèves et des professeurs, de gérer les devoirs, les notes, et les évaluations) possède certains défauts :\n                </p>\n                <p class="paragraph" style="text-indent: 1em;">Les emplois du temps sont définis au début de l&#39;année, et ne peuvent être changés, à moins d&#39;une procédure longue et fastidieuse. Ce qui est problématique en ces temps de crise sanitaires ou les cours doivent être fait chez soi, car les emplois du temps habituels sont peu respectés.\n                </p>\n                <p class="paragraph" style="text-indent: 1em;">Ce site internet permet au professeur, en toute liberté, de fixer l&#39;horaire d&#39;un cours en particulier, et recevoir un message d&#39;erreur si l&#39;horaire choisi est déjà réservé. Les élèves concernés par le cours recevront une notification de rappel sur Discord.\n                </p>\n\n                <h3 class="home-main-title">Un outil révolutionnaire de gestion des devoirs</h3>\n                <p class="paragraph" style="text-indent: 1em;">Ce projet est la meilleure solution, il permet aux élèves de rendre leurs travaux (Sur ce site ou sur Discord). Les fichiers envoyés y sont stockés et rendus accessibles uniquement par le professeur concerné (que l&#39;élève aura préalablement sélectionné).\n                </p>\n                <p class="paragraph">Le professeur peut alors corriger directement (sans devoir télécharger) la copie sur le site (via un mini logiciel de dessin), puis finaliser la note. Le compte rendu/correction du devoir sera alors automatiquement envoyé à l&#39;élève concerné via un message sur Discord.\n                </p>\n\n                <h3 class="home-main-title">L&#39;appel sur Discord</h3>\n                <p class="paragraph" style="text-indent: 1em;">Comme les cours se font en visioconférence sur Discord, ce service est capable de faire &quot;l&#39;appel&quot; en fonction de la présence des élèves sur le salon vocal lors du cours, un compte-rendu sera alors disponible sur le site (Mes classes) et un résumé de toutes les &quot;fiches d’appel&quot; peut être obtenu.\n                </p>\n\n\n                <h3 class="home-main-title">Liens</h3>\n                <br>\n                <div class="socials"><a class="social-link" href="https://estudium.net" target="_blank"><div class="list-socials"><div class="social-logo"><img style="width: 1.1em; border: 1.5px #63bdb2 solid; border-radius: 5px;" src="https://estudium.net/assets/favicon.ico" alt="" srcset=""></div>\n                            <div class="social-desc">Le site</div></div></a></div>\n                <h3 class="home-main-title">Images</h3>\n                <br>\n                <div class="list-grid"><div class="list-item"><img class="item-img" src="https://estudium.net/assets/schedule_demo.png" alt="Emploi du temps" onerror="this.onerror=null;this.src=\'default-image.jpg\';">\n                            <div class="item-desc">Emploi du temps</div></div>\n                    <div class="list-item"><img class="item-img" src="https://estudium.net/assets/devoirs_demo.png" alt="Gestion des devoirs" onerror="this.onerror=null;this.src=\'default-image.jpg\';">\n                        <div class="item-desc">Gestion des devoirs</div></div>\n                    <div class="list-item"><img class="item-img" src="https://estudium.net/assets/appel_demo.png" alt="Appel automatique" onerror="this.onerror=null;this.src=\'default-image.jpg\';">\n                        <div class="item-desc">Appel automatique</div></div></div></div></div></div>'})}`)),O=b(((e,t,i,s)=>`${h(N,"PageTransitions").$$render(e,{},{},{default:()=>'<div class="article-list"><div class="main-app" style="animation: 0.5s ease-out 0s 1 slideInFromBottom;" id="content"><div class="home-header"><div class="home-title-text"><h1 class="home-text-title" style="font-size: 28px; margin-bottom: 0;">Visioligne.com</h1>\n                    </div></div>\n            <div class="home-main"><h3 class="home-main-title">Un peu de lecture...</h3>\n                \n                <p class="paragraph" style="text-indent: 1em;">Visioligne est un service en ligne offrant un outil de visioconférence s&#39;intégrant <b>directement sur votre site internet</b>, une fenêtre faisant apparaître Visioligne s’affichera au milieu de votre page web.</p>\n                <p class="paragraph">Le but est d’accueillir vos interlocuteurs directement sur votre site web <b>plutôt que de les inviter a installer une application dédie.</b></p>\n                <p class="paragraph" style="text-indent: 1em;">Ce service permet de communiquer avec les intervenant par vidéo grâce à <b>votre webcam et votre microphone</b>, il est aussi possible de diffuser une <b>capture de l’écran</b> de votre ordinateur, ainsi que d’envoyer des messages textuels.</p>\n                <p class="paragraph" style="text-indent: 1em;">Il est possible de personnaliser l’interface de l’application depuis le panneau de configuration. Plusieurs thèmes visuels sont déjà disponibles, cependant, selon les tarifs professionnels, d’autre thèmes en accord avec la charte graphique de votre peuvent être proposés.</p>\n\n                <h3 class="home-main-title">Sécurité et vie privé</h3>\n                <p class="paragraph" style="text-indent: 1em;">Les flux vidéos/audios et messages sont chiffrés de bout à bout et sont transmis d’un utilisateur à un autre grâce à la technologie p2p (peer-to-peer), consistant a envoyer un flux directement d’un client à un autre sans l’intermédiaire d’un serveur, ces données ne sont donc <b>pas enregistré</b> car tout simplement non intercepté par un serveur, ce qui offre une <b>sécurité native importante.</b></p>\n                <p class="paragraph" style="text-indent: 1em;">De plus, la qualité et la stabilité globale de la communication ne dépendront que de la connexion internet des interlocuteurs et non de l’infrastructure de Visioligne, ce qui offre une <b>stabilité du service sans pareil.</b></p>\n                <p class="paragraph" style="text-indent: 1em;">Les serveurs sont <b>protégés des attaques et des virus par Cloudflare</b> un des pare-feux d&#39;applications web (WAF) les plus puissants sur le marché.</p>\n                <p class="paragraph" style="text-indent: 1em;">Toutes les interactions sont protégés grâce à une <b>connexion SSL sécurisée</b> (protocole https, visible sur la barre d&#39;adresse) garantissant un degré élevé de confidentialité.</p>\n\n                <h3 class="home-main-title">Liens</h3>\n                <br>\n                <div class="socials"><a class="social-link" href="https://visioligne.com" target="_blank"><div class="list-socials"><div class="social-logo"></div>\n                            <div class="social-desc">Le site</div></div></a>\n                    <a class="social-link" href="https://dashboard.visioligne.com" target="_blank"><div class="list-socials"><div class="social-logo"></div>\n                            <div class="social-desc">Panneau de configuration</div></div></a></div>\n                <h3 class="home-main-title">Images</h3>\n                <br>\n                <div class="list-grid"><div class="list-item"><img class="item-img" src="img/visioligne.png" alt="Site internet" onerror="this.onerror=null;this.src=\'default-image.jpg\';">\n                            <div class="item-desc">Site internet</div></div>\n                    <div class="list-item"><img class="item-img" src="img/tab.png" alt="Panneau de configuration" onerror="this.onerror=null;this.src=\'default-image.jpg\';">\n                        <div class="item-desc">Panneau de configuration</div></div>\n                    <div class="list-item"><img class="item-img" src="img/white.png" alt="Visioconférence blanc" onerror="this.onerror=null;this.src=\'default-image.jpg\';">\n                        <div class="item-desc">Visioconférence en blanc</div></div>\n                    <div class="list-item"><img class="item-img" src="img/dark.png" alt="Visioconférence sombre" onerror="this.onerror=null;this.src=\'default-image.jpg\';">\n                        <div class="item-desc">Visioconférence en sombre</div></div></div></div></div></div>'})}`)),U=b(((e,t,i,s)=>`${h(N,"PageTransitions").$$render(e,{},{},{default:()=>`${h(B,"Router").$$render(e,{},{},{default:()=>`<div class="article-list"><div class="main-app" style="animation: 0.5s ease-out 0s 1 slideInFromBottom;" id="content"><h1>Bientôt</h1>\n\n      \n        ${h(V,"Route").$$render(e,{path:"first"},{},{default:()=>"<p>bgfdbgfdbfdgd fgbfbdx g fbgv gbfcgb fc fgbc\n          </p>"})}\n        ${h(V,"Route").$$render(e,{path:"second"},{},{default:()=>"<p>ghj km hujgk ghjkj hgk ghjkmh jgkm ghjkmghj mhgj hmgjgmhj\n          </p>"})}\n        ${h(V,"Route").$$render(e,{path:"third"},{},{default:()=>"<p>hud figslfgsdhruikgfsdhuighsidfughufidshusgdfikrdghfuikgdfhiuhiukjsfi hjgdfsfghdihigjkldfsgikhjdfs\n          </p>"})}</div></div>`})}`})}`)),H=b(((e,t,i,s)=>`${h(N,"PageTransitions").$$render(e,{},{},{default:()=>`<div class="article-list"><div class="main-app" style="animation: 0.5s ease-out 0s 1 slideInFromBottom;" id="content"><h3 class="text-title" style="font-size: 19px;">Projets</h3>\n            <div class="list-grid">\n                    ${h(A,"NavLink").$$render(e,{class:"list-item",to:"estudium"},{},{default:()=>'<img class="item-img" src="img/estudium.PNG" alt="Estudium" onerror="this.onerror=null;this.src=\'default-image.jpg\';">\n                        <div class="item-title text-title item-text-title">Estudium</div>\n                        <div class="item-desc">Un outil scolaire pour les professeurs et les élèves qui révolutionne les cours distanciels.</div>'})}\n                \n                ${h(A,"NavLink").$$render(e,{class:"list-item",to:"visioligne.com"},{},{default:()=>'<img class="item-img" src="img/visioligne.png" alt="visioligne" onerror="this.onerror=null;this.src=\'default-image.jpg\';">\n                    <div class="item-title text-title item-text-title">Visioligne</div>\n                    <div class="item-desc">La visioconférence directement sur votre site internet, plus besoin de télécharger une application tierce.</div>'})}\n                <a href="https://github.com/Dalvii/discord-companion" target="_blank" class="list-item"><img class="item-img" src="img/discord.png" alt="discord" onerror="this.onerror=null;this.src='default-image.jpg';">\n                    <div class="item-title text-title item-text-title">Discord Companion</div>\n                    <div class="item-desc">Une version miniature de Discord toujours au premier plan, pour pouvoir discuter en faisant autre chose.</div></a></div>\n\n            <h3 class="text-title" style="font-size: 19px;">Découverte</h3>\n            <div class="list-grid"><div class="list-item"><img class="item-img" src="" alt="test" onerror="this.onerror=null;this.src='default-image.jpg';">\n                    <div class="item-title text-title item-text-title">Test</div>\n                    <div class="item-desc">test</div></div>\n                <div class="list-item"><img class="item-img" src="" alt="" onerror="this.onerror=null;this.src='default-image.jpg';">\n                    <div class="item-title text-title item-text-title">Test</div>\n                    <div class="item-desc">test</div></div>\n                <div class="list-item"><img class="item-img" src="" alt="" onerror="this.onerror=null;this.src='default-image.jpg';">\n                    <div class="item-title text-title item-text-title">Test</div>\n                    <div class="item-desc">test</div></div></div></div></div>`})}`)),G=b(((e,t,i,s)=>'<div class="article-list"><div class="main-app"><h3 class="home-main-title" style="text-align: center;">Page introuvable</h3></div></div>')),W=b(((e,t,i,s)=>{let{url:n=""}=t;return void 0===t.url&&i.url&&void 0!==n&&i.url(n),`${h(B,"Router").$$render(e,{url:n},{},{default:()=>`<nav class="nav-header" style="backdrop-filter:blur(10px)"><div class="header"><div class="logo">${h(A,"NavLink").$$render(e,{class:"logo",to:"/"},{},{default:()=>"Théo Vidal"})}</div>\n\t\t\t<div class="links">${h(A,"NavLink").$$render(e,{class:"button",to:"works"},{},{default:()=>"Travaux"})}\n\t\t\t\t${h(A,"NavLink").$$render(e,{class:"button",to:"blog"},{},{default:()=>"Blog"})}</div>\n\t\t\t<div class="light"><button id="toggleMode" class="toggleMode"></button></div></div></nav>\n\t<div>${h(V,"Route").$$render(e,{path:"estudium",component:J},{},{})}\n\t\t${h(V,"Route").$$render(e,{path:"visioligne.com",component:O},{},{})}\n\t\t${h(V,"Route").$$render(e,{path:"works",component:H},{},{})}\n\t\t${h(V,"Route").$$render(e,{path:"blog/*",component:U},{},{})}\n\t\t${h(V,"Route").$$render(e,{path:"/",component:I},{},{})}\n\t\t${h(V,"Route").$$render(e,{path:"*",component:G},{},{})}</div>\n\t<footer class="footer">© 2021 Théo Vidal. Tout droits réservés.</footer>`})}`}));module.exports=W;
