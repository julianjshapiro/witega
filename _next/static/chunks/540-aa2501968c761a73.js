"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[540],{9730:(t,e,n)=>{n.d(e,{A:()=>a});var r=n(2115),o=n(2784),i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},u=function(t,e){var n={};for(o in t)Object.prototype.hasOwnProperty.call(t,o)&&0>e.indexOf(o)&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)0>e.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]]);return n},c=function(t){return"Typesetting failed: ".concat(void 0!==t.message?t.message:JSON.stringify(t))};let a=function(t){function e(){var t;"every"===x&&E&&"post"===w&&null!==v.current&&(v.current.style.visibility=null!=(t=null==(t=y.style)?void 0:t.visibility)?t:"visible"),M.current||("first"===x&&null!==v.current&&(v.current.style.visibility="visible"),s&&s(),M.current=!0),l&&l(),S.current=!1}var n=t.inline,a=void 0!==n&&n,n=t.hideUntilTypeset,s=t.onInitTypeset,l=t.onTypeset,f=t.text,d=t.dynamic,p=t.typesettingOptions,h=t.renderMode,m=t.children,y=u(t,["inline","hideUntilTypeset","onInitTypeset","onTypeset","text","dynamic","typesettingOptions","renderMode","children"]),g=(0,r.useRef)(""),v=(0,r.useRef)(null),b=(0,r.useContext)(o.k),x=null!=n?n:null==b?void 0:b.hideUntilTypeset,w=null!=h?h:null==b?void 0:b.renderMode,O=null!=p?p:null==b?void 0:b.typesettingOptions,E=!1!==d&&(d||!1),M=(0,r.useRef)(!1),S=(0,r.useRef)(!1);return!S.current&&null!==v.current&&E&&"every"===x&&"post"===w&&(v.current.style.visibility="hidden"),("undefined"!=typeof window?r.useLayoutEffect:r.useEffect)(function(){if((E||!M.current)&&null!==v.current){if(!b)throw Error("MathJax was not loaded, did you use the MathJax component outside of a MathJaxContext?");if("pre"===w){if(!("string"==typeof f&&0<f.length))throw Error("Render mode 'pre' requires text prop to be set and non-empty, which was currently \"".concat(f,'"'));if(!p||!p.fn)throw Error("Render mode 'pre' requires 'typesettingOptions' prop with 'fn' property to be set on MathJax element or in the MathJaxContext");if(2===b.version)throw Error("Render mode 'pre' only available with MathJax 3, and version 2 is currently in use")}"post"!==w&&f===g.current||S.current||(S.current=!0,3===b.version?b.promise.then(function(t){var n;"pre"===w?(n=function(n){g.current=f,t.startup.document.clear(),t.startup.document.updateDocument(),null!==v.current&&(v.current.innerHTML=n.outerHTML),e()},p.fn.endsWith("Promise")?t.startup.promise.then(function(){return t[O.fn](f,i(i({},(null==O?void 0:O.options)||{}),{display:!a}))}).then(n).catch(function(t){throw e(),Error(c(t))}):t.startup.promise.then(function(){n(t[O.fn](f,i(i({},(null==O?void 0:O.options)||{}),{display:!a})))}).catch(function(t){throw e(),Error(c(t))})):t.startup.promise.then(function(){return t.typesetClear([v.current]),t.typesetPromise([v.current])}).then(e).catch(function(t){throw e(),Error(c(t))})}).catch(function(t){throw e(),Error(c(t))}):b.promise.then(function(t){t.Hub.Queue(["Typeset",t.Hub,v.current]),t.Hub.Queue(e)}).catch(function(t){throw e(),Error(c(t))}))}}),r.createElement("span",i({},y,{style:i(i({display:a?"inline":"block"},y.style),{visibility:x?"hidden":null==(t=y.style)?void 0:t.visibility}),ref:v}),m)}},2784:(t,e,n)=>{n.d(e,{A:()=>l,k:()=>c});var r,o,i=n(2115),u=function(){return(u=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},c=(0,i.createContext)(void 0),a="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML",s="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js";let l=function(t){var e=t.config,n=t.version,n=void 0===n?3:n,l=t.src,l=void 0===l?2===n?a:s:l,f=t.onStartup,d=t.onLoad,p=t.asyncLoad,h=void 0!==p&&p,m=t.onError,p=t.typesettingOptions,y=t.renderMode,y=void 0===y?"post":y,g=t.hideUntilTypeset,t=t.children,v=(0,i.useContext)(c);if(void 0!==(null==v?void 0:v.version)&&(null==v?void 0:v.version)!==n)throw Error("Cannot nest MathJaxContexts with different versions. MathJaxContexts should not be nested at all but if they are, they cannot have different versions. Stick with one version of MathJax in your app and avoid using more than one MathJaxContext.");if(2===n&&void 0!==o||3===n&&void 0!==r)throw Error("Cannot use MathJax versions 2 and 3 simultaneously in the same app due to how MathJax is set up in the browser; either you have multiple MathJaxContexts with different versions or you have mounted and unmounted MathJaxContexts with different versions. Please stick with one version of MathJax in your app. File an issue in the project Github page if you need this feature.");var b=(0,i.useRef)(v),v=(0,i.useRef)((null==v?void 0:v.version)||null);if(null===v.current)v.current=n;else if(v.current!==n)throw Error("Cannot change version of MathJax in a MathJaxContext after it has mounted. Reload the page with a new version when this must happen.");var x=l||(2===n?a:s);function w(t,n){e&&(window.MathJax=e);var r=document.createElement("script");r.type="text/javascript",r.src=x,r.async=h,r.addEventListener("load",function(){var e=window.MathJax;f&&f(e),t(e),d&&d()}),r.addEventListener("error",function(t){return n(t)}),document.getElementsByTagName("head")[0].appendChild(r)}return void 0===b.current&&(v={typesettingOptions:p,renderMode:y,hideUntilTypeset:g},2===n?void 0===r&&("undefined"!=typeof window?(r=new Promise(w)).catch(function(t){if(!m)throw Error("Failed to download MathJax version 2 from '".concat(x,"' due to: ").concat(JSON.stringify(t)));m(t)}):(r=Promise.reject()).catch(function(t){})):void 0===o&&("undefined"!=typeof window?(o=new Promise(w)).catch(function(t){if(!m)throw Error("Failed to download MathJax version 3 from '".concat(x,"' due to: ").concat(t));m(t)}):(o=Promise.reject()).catch(function(t){})),b.current=u(u({},v),2===n?{version:2,promise:r}:{version:3,promise:o})),i.createElement(c.Provider,{value:b.current},t)}},2750:(t,e,n)=>{n.d(e,{A:()=>o});let r={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function o(t={}){let e,n,i,u;let c=null,a=0,s=!1,l=!1,f=!1,d=!1;function p(){if(!i){if(y()){f=!0;return}s||n.emit("autoplay:play"),function(){let{ownerWindow:t}=n.internalEngine();t.clearTimeout(a),a=t.setTimeout(w,u[n.selectedScrollSnap()]),c=new Date().getTime(),n.emit("autoplay:timerset")}(),s=!0}}function h(){i||(s&&n.emit("autoplay:stop"),function(){let{ownerWindow:t}=n.internalEngine();t.clearTimeout(a),a=0,c=null,n.emit("autoplay:timerstopped")}(),s=!1)}function m(){if(y())return f=s,h();f&&p()}function y(){let{ownerDocument:t}=n.internalEngine();return"hidden"===t.visibilityState}function g(){l||h()}function v(){l||p()}function b(){l=!0,h()}function x(){l=!1,p()}function w(){let{index:t}=n.internalEngine(),r=t.clone().add(1).get(),o=n.scrollSnapList().length-1,i=e.stopOnLastSnap&&r===o;if(n.canScrollNext()?n.scrollNext(d):n.scrollTo(0,d),n.emit("autoplay:select"),i)return h();p()}return{name:"autoplay",options:t,init:function(c,a){n=c;let{mergeOptions:s,optionsAtMedia:l}=a,f=s(r,o.globalOptions);if(e=l(s(f,t)),n.scrollSnapList().length<=1)return;d=e.jump,i=!1,u=function(t,e){let n=t.scrollSnapList();return"number"==typeof e?n.map(()=>e):e(n,t)}(n,e.delay);let{eventStore:y,ownerDocument:w}=n.internalEngine(),O=!!n.internalEngine().options.watchDrag,E=function(t,e){let n=t.rootNode();return e&&e(n)||n}(n,e.rootNode);y.add(w,"visibilitychange",m),O&&n.on("pointerDown",g),O&&!e.stopOnInteraction&&n.on("pointerUp",v),e.stopOnMouseEnter&&y.add(E,"mouseenter",b),e.stopOnMouseEnter&&!e.stopOnInteraction&&y.add(E,"mouseleave",x),e.stopOnFocusIn&&n.on("slideFocusStart",h),e.stopOnFocusIn&&!e.stopOnInteraction&&y.add(n.containerNode(),"focusout",p),e.playOnInit&&p()},destroy:function(){n.off("pointerDown",g).off("pointerUp",v).off("slideFocusStart",h),h(),i=!0,s=!1},play:function(t){void 0!==t&&(d=t),p()},stop:function(){s&&h()},reset:function(){s&&p()},isPlaying:function(){return s},timeUntilNext:function(){return c?u[n.selectedScrollSnap()]-(new Date().getTime()-c):null}}}o.globalOptions=void 0},2576:(t,e,n)=>{n.d(e,{A:()=>S});var r=n(2115);function o(t){return"[object Object]"===Object.prototype.toString.call(t)||Array.isArray(t)}function i(t,e){let n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&JSON.stringify(Object.keys(t.breakpoints||{}))===JSON.stringify(Object.keys(e.breakpoints||{}))&&n.every(n=>{let r=t[n],u=e[n];return"function"==typeof r?`${r}`==`${u}`:o(r)&&o(u)?i(r,u):r===u})}function u(t){return t.concat().sort((t,e)=>t.name>e.name?1:-1).map(t=>t.options)}function c(t){return"number"==typeof t}function a(t){return"string"==typeof t}function s(t){return"boolean"==typeof t}function l(t){return"[object Object]"===Object.prototype.toString.call(t)}function f(t){return Math.abs(t)}function d(t){return Math.sign(t)}function p(t){return g(t).map(Number)}function h(t){return t[m(t)]}function m(t){return Math.max(0,t.length-1)}function y(t,e=0){return Array.from(Array(t),(t,n)=>e+n)}function g(t){return Object.keys(t)}function v(t,e){return void 0!==e.MouseEvent&&t instanceof e.MouseEvent}function b(){let t=[],e={add:function(n,r,o,i={passive:!0}){let u;return"addEventListener"in n?(n.addEventListener(r,o,i),u=()=>n.removeEventListener(r,o,i)):(n.addListener(o),u=()=>n.removeListener(o)),t.push(u),e},clear:function(){t=t.filter(t=>t())}};return e}function x(t=0,e=0){let n=f(t-e);function r(n){return n<t||n>e}return{length:n,max:e,min:t,constrain:function(n){return r(n)?n<t?t:e:n},reachedAny:r,reachedMax:function(t){return t>e},reachedMin:function(e){return e<t},removeOffset:function(t){return n?t-n*Math.ceil((t-e)/n):t}}}function w(t){let e=t;function n(t){return c(t)?t:t.get()}return{get:function(){return e},set:function(t){e=n(t)},add:function(t){e+=n(t)},subtract:function(t){e-=n(t)}}}function O(t,e){let n="x"===t.scroll?function(t){return`translate3d(${t}px,0px,0px)`}:function(t){return`translate3d(0px,${t}px,0px)`},r=e.style,o=null,i=!1;return{clear:function(){i||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))},to:function(e){if(i)return;let u=Math.round(100*t.direction(e))/100;u!==o&&(r.transform=n(u),o=u)},toggleActive:function(t){i=!t}}}let E={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function M(t,e,n){let r,o,i,u,S;let j=t.ownerDocument,T=j.defaultView,L=function(t){function e(t,e){return function t(e,n){return[e,n].reduce((e,n)=>(g(n).forEach(r=>{let o=e[r],i=n[r],u=l(o)&&l(i);e[r]=u?t(o,i):i}),e),{})}(t,e||{})}return{mergeOptions:e,optionsAtMedia:function(n){let r=n.breakpoints||{},o=g(r).filter(e=>t.matchMedia(e).matches).map(t=>r[t]).reduce((t,n)=>e(t,n),{});return e(n,o)},optionsMediaQueries:function(e){return e.map(t=>g(t.breakpoints||{})).reduce((t,e)=>t.concat(e),[]).map(t.matchMedia)}}}(T),I=(S=[],{init:function(t,e){return(S=e.filter(({options:t})=>!1!==L.optionsAtMedia(t).active)).forEach(e=>e.init(t,L)),e.reduce((t,e)=>Object.assign(t,{[e.name]:e}),{})},destroy:function(){S=S.filter(t=>t.destroy())}}),k=b(),D=function(){let t,e={},n={init:function(e){t=e},emit:function(r){return(e[r]||[]).forEach(e=>e(t,r)),n},off:function(t,r){return e[t]=(e[t]||[]).filter(t=>t!==r),n},on:function(t,r){return e[t]=(e[t]||[]).concat([r]),n},clear:function(){e={}}};return n}(),{mergeOptions:P,optionsAtMedia:F,optionsMediaQueries:J}=L,{on:C,off:A,emit:N}=D,H=!1,R=P(E,M.globalOptions),U=P(R),V=[];function z(e,n){!H&&(U=F(R=P(R,e)),V=n||V,function(){let{container:e,slides:n}=U;i=(a(e)?t.querySelector(e):e)||t.children[0];let r=a(n)?i.querySelectorAll(n):n;u=[].slice.call(r||i.children)}(),r=function e(n){let r=function(t,e,n,r,o,i,u){let l,E;let{align:M,axis:S,direction:j,startIndex:T,loop:L,duration:I,dragFree:k,dragThreshold:D,inViewThreshold:P,slidesToScroll:F,skipSnaps:J,containScroll:C,watchResize:A,watchSlides:N,watchDrag:H,watchFocus:R}=i,U={measure:function(t){let{offsetTop:e,offsetLeft:n,offsetWidth:r,offsetHeight:o}=t;return{top:e,right:n+r,bottom:e+o,left:n,width:r,height:o}}},V=U.measure(e),z=n.map(U.measure),q=function(t,e){let n="rtl"===e,r="y"===t,o=!r&&n?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":n?"right":"left",endEdge:r?"bottom":n?"left":"right",measureSize:function(t){let{height:e,width:n}=t;return r?e:n},direction:function(t){return t*o}}}(S,j),B=q.measureSize(V),$={measure:function(t){return t/100*B}},_=function(t,e){let n={start:function(){return 0},center:function(t){return(e-t)/2},end:function(t){return e-t}};return{measure:function(r,o){return a(t)?n[t](r):t(e,r,o)}}}(M,B),Q=!L&&!!C,{slideSizes:X,slideSizesWithGaps:G,startGap:W,endGap:Y}=function(t,e,n,r,o,i){let{measureSize:u,startEdge:c,endEdge:a}=t,s=n[0]&&o,l=function(){if(!s)return 0;let t=n[0];return f(e[c]-t[c])}(),d=s?parseFloat(i.getComputedStyle(h(r)).getPropertyValue(`margin-${a}`)):0,p=n.map(u),y=n.map((t,e,n)=>{let r=e===m(n);return e?r?p[e]+d:n[e+1][c]-t[c]:p[e]+l}).map(f);return{slideSizes:p,slideSizesWithGaps:y,startGap:l,endGap:d}}(q,V,z,n,L||!!C,o),K=function(t,e,n,r,o,i,u,a,s){let{startEdge:l,endEdge:d,direction:y}=t,g=c(n);return{groupSlides:function(t){return g?p(t).filter(t=>t%n==0).map(e=>t.slice(e,e+n)):t.length?p(t).reduce((n,c,s)=>{let p=h(n)||0,g=c===m(t),v=o[l]-i[p][l],b=o[l]-i[c][d],x=r||0!==p?0:y(u),w=f(b-(!r&&g?y(a):0)-(v+x));return s&&w>e+2&&n.push(c),g&&n.push(t.length),n},[]).map((e,n,r)=>{let o=Math.max(r[n-1]||0);return t.slice(o,e)}):[]}}}(q,B,F,L,V,z,W,Y,0),{snaps:Z,snapsAligned:tt}=function(t,e,n,r,o){let{startEdge:i,endEdge:u}=t,{groupSlides:c}=o,a=c(r).map(t=>h(t)[u]-t[0][i]).map(f).map(e.measure),s=r.map(t=>n[i]-t[i]).map(t=>-f(t)),l=c(s).map(t=>t[0]).map((t,e)=>t+a[e]);return{snaps:s,snapsAligned:l}}(q,_,V,z,K),te=-h(Z)+h(G),{snapsContained:tn,scrollContainLimit:tr}=function(t,e,n,r,o){let i=x(-e+t,0),u=n.map((t,e)=>{let{min:r,max:o}=i,u=i.constrain(t),c=e===m(n);return e?c||1>=f(r-u)?r:1>=f(o-u)?o:u:o}).map(t=>parseFloat(t.toFixed(3))),c=function(){let t=u[0],e=h(u);return x(u.lastIndexOf(t),u.indexOf(e)+1)}();return{snapsContained:function(){if(e<=t+2)return[i.max];if("keepSnaps"===r)return u;let{min:n,max:o}=c;return u.slice(n,o)}(),scrollContainLimit:c}}(B,te,tt,C,0),to=Q?tn:tt,{limit:ti}=function(t,e,n){let r=e[0];return{limit:x(n?r-t:h(e),r)}}(te,to,L),tu=function t(e,n,r){let{constrain:o}=x(0,e),i=e+1,u=c(n);function c(t){return r?f((i+t)%i):o(t)}function a(){return t(e,u,r)}let s={get:function(){return u},set:function(t){return u=c(t),s},add:function(t){return a().set(u+t)},clone:a};return s}(m(to),T,L),tc=tu.clone(),ta=p(n),ts=({dragHandler:t,scrollBody:e,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(t.pointerDown()),e.seek()},tl=({scrollBody:t,translate:e,location:n,offsetLocation:r,previousLocation:o,scrollLooper:i,slideLooper:u,dragHandler:c,animation:a,eventHandler:s,scrollBounds:l,options:{loop:f}},d)=>{let p=t.settled(),h=!l.shouldConstrain(),m=f?p:p&&h;m&&!c.pointerDown()&&(a.stop(),s.emit("settle")),m||s.emit("scroll");let y=n.get()*d+o.get()*(1-d);r.set(y),f&&(i.loop(t.direction()),u.loop()),e.to(r.get())},tf=function(t,e,n,r){let o=b(),i=1e3/60,u=null,c=0,a=0;function s(t){if(!a)return;u||(u=t,n(),n());let o=t-u;for(u=t,c+=o;c>=i;)n(),c-=i;r(c/i),a&&(a=e.requestAnimationFrame(s))}function l(){e.cancelAnimationFrame(a),u=null,c=0,a=0}return{init:function(){o.add(t,"visibilitychange",()=>{t.hidden&&(u=null,c=0)})},destroy:function(){l(),o.clear()},start:function(){a||(a=e.requestAnimationFrame(s))},stop:l,update:n,render:r}}(r,o,()=>ts(tS),t=>tl(tS,t)),td=to[tu.get()],tp=w(td),th=w(td),tm=w(td),ty=w(td),tg=function(t,e,n,r,o,i){let u=0,c=0,a=o,s=.68,l=t.get(),p=0;function h(t){return a=t,y}function m(t){return s=t,y}let y={direction:function(){return c},duration:function(){return a},velocity:function(){return u},seek:function(){let e=r.get()-t.get(),o=0;return a?(n.set(t),u+=e/a,u*=s,l+=u,t.add(u),o=l-p):(u=0,n.set(r),t.set(r),o=e),c=d(o),p=l,y},settled:function(){return .001>f(r.get()-e.get())},useBaseFriction:function(){return m(.68)},useBaseDuration:function(){return h(o)},useFriction:m,useDuration:h};return y}(tp,tm,th,ty,I,0),tv=function(t,e,n,r,o){let{reachedAny:i,removeOffset:u,constrain:c}=r;function a(t){return t.concat().sort((t,e)=>f(t)-f(e))[0]}function s(e,r){let o=[e,e+n,e-n];if(!t)return e;if(!r)return a(o);let i=o.filter(t=>d(t)===r);return i.length?a(i):h(o)-n}return{byDistance:function(n,r){let a=o.get()+n,{index:l,distance:d}=function(n){let r=t?u(n):c(n),{index:o}=e.map((t,e)=>({diff:s(t-r,0),index:e})).sort((t,e)=>f(t.diff)-f(e.diff))[0];return{index:o,distance:r}}(a),p=!t&&i(a);if(!r||p)return{index:l,distance:n};let h=n+s(e[l]-d,0);return{index:l,distance:h}},byIndex:function(t,n){let r=s(e[t]-o.get(),n);return{index:t,distance:r}},shortcut:s}}(L,to,te,ti,ty),tb=function(t,e,n,r,o,i,u){function c(o){let c=o.distance,a=o.index!==e.get();i.add(c),c&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),a&&(n.set(e.get()),e.set(o.index),u.emit("select"))}return{distance:function(t,e){c(o.byDistance(t,e))},index:function(t,n){let r=e.clone().set(t);c(o.byIndex(r.get(),n))}}}(tf,tu,tc,tg,tv,ty,u),tx=function(t){let{max:e,length:n}=t;return{get:function(t){return n?-((t-e)/n):0}}}(ti),tw=b(),tO=function(t,e,n,r){let o;let i={},u=null,c=null,a=!1;return{init:function(){o=new IntersectionObserver(t=>{a||(t.forEach(t=>{i[e.indexOf(t.target)]=t}),u=null,c=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(t=>o.observe(t))},destroy:function(){o&&o.disconnect(),a=!0},get:function(t=!0){if(t&&u)return u;if(!t&&c)return c;let e=g(i).reduce((e,n)=>{let r=parseInt(n),{isIntersecting:o}=i[r];return(t&&o||!t&&!o)&&e.push(r),e},[]);return t&&(u=e),t||(c=e),e}}}(e,n,u,P),{slideRegistry:tE}=function(t,e,n,r,o,i){let{groupSlides:u}=o,{min:c,max:a}=r;return{slideRegistry:function(){let r=u(i);return 1===n.length?[i]:t&&"keepSnaps"!==e?r.slice(c,a).map((t,e,n)=>{let r=e===m(n);return e?r?y(m(i)-h(n)[0]+1,h(n)[0]):t:y(h(n[0])+1)}):r}()}}(Q,C,to,tr,K,ta),tM=function(t,e,n,r,o,i,u,a){let l={passive:!0,capture:!0},f=0;function d(t){"Tab"===t.code&&(f=new Date().getTime())}return{init:function(p){a&&(i.add(document,"keydown",d,!1),e.forEach((e,d)=>{i.add(e,"focus",e=>{(s(a)||a(p,e))&&function(e){if(new Date().getTime()-f>10)return;u.emit("slideFocusStart"),t.scrollLeft=0;let i=n.findIndex(t=>t.includes(e));c(i)&&(o.useDuration(0),r.index(i,0),u.emit("slideFocus"))}(d)},l)}))}}}(t,n,tE,tb,tg,tw,u,R),tS={ownerDocument:r,ownerWindow:o,eventHandler:u,containerRect:V,slideRects:z,animation:tf,axis:q,dragHandler:function(t,e,n,r,o,i,u,c,a,l,p,h,m,y,g,w,O,E,M){let{cross:S,direction:j}=t,T=["INPUT","SELECT","TEXTAREA"],L={passive:!1},I=b(),k=b(),D=x(50,225).constrain(y.measure(20)),P={mouse:300,touch:400},F={mouse:500,touch:600},J=g?43:25,C=!1,A=0,N=0,H=!1,R=!1,U=!1,V=!1;function z(t){if(!v(t,r)&&t.touches.length>=2)return q(t);let e=i.readPoint(t),n=i.readPoint(t,S),u=f(e-A),a=f(n-N);if(!R&&!V&&(!t.cancelable||!(R=u>a)))return q(t);let s=i.pointerMove(t);u>w&&(U=!0),l.useFriction(.3).useDuration(.75),c.start(),o.add(j(s)),t.preventDefault()}function q(t){let e=p.byDistance(0,!1).index!==h.get(),n=i.pointerUp(t)*(g?F:P)[V?"mouse":"touch"],r=function(t,e){let n=h.add(-1*d(t)),r=p.byDistance(t,!g).distance;return g||f(t)<D?r:O&&e?.5*r:p.byIndex(n.get(),0).distance}(j(n),e),o=function(t,e){var n,r;if(0===t||0===e||f(t)<=f(e))return 0;let o=(n=f(t),r=f(e),f(n-r));return f(o/t)}(n,r);R=!1,H=!1,k.clear(),l.useDuration(J-10*o).useFriction(.68+o/50),a.distance(r,!g),V=!1,m.emit("pointerUp")}function B(t){U&&(t.stopPropagation(),t.preventDefault(),U=!1)}return{init:function(t){M&&I.add(e,"dragstart",t=>t.preventDefault(),L).add(e,"touchmove",()=>void 0,L).add(e,"touchend",()=>void 0).add(e,"touchstart",c).add(e,"mousedown",c).add(e,"touchcancel",q).add(e,"contextmenu",q).add(e,"click",B,!0);function c(c){(s(M)||M(t,c))&&function(t){let c=v(t,r);V=c,U=g&&c&&!t.buttons&&C,C=f(o.get()-u.get())>=2,c&&0!==t.button||function(t){let e=t.nodeName||"";return T.includes(e)}(t.target)||(H=!0,i.pointerDown(t),l.useFriction(0).useDuration(0),o.set(u),function(){let t=V?n:e;k.add(t,"touchmove",z,L).add(t,"touchend",q).add(t,"mousemove",z,L).add(t,"mouseup",q)}(),A=i.readPoint(t),N=i.readPoint(t,S),m.emit("pointerDown"))}(c)}},destroy:function(){I.clear(),k.clear()},pointerDown:function(){return H}}}(q,t,r,o,ty,function(t,e){let n,r;function o(t){return t.timeStamp}function i(n,r){let o=r||t.scroll,i=`client${"x"===o?"X":"Y"}`;return(v(n,e)?n:n.touches[0])[i]}return{pointerDown:function(t){return n=t,r=t,i(t)},pointerMove:function(t){let e=i(t)-i(r),u=o(t)-o(n)>170;return r=t,u&&(n=t),e},pointerUp:function(t){if(!n||!r)return 0;let e=i(r)-i(n),u=o(t)-o(n),c=o(t)-o(r)>170,a=e/u;return u&&!c&&f(a)>.1?a:0},readPoint:i}}(q,o),tp,tf,tb,tg,tv,tu,u,$,k,D,J,0,H),eventStore:tw,percentOfView:$,index:tu,indexPrevious:tc,limit:ti,location:tp,offsetLocation:tm,previousLocation:th,options:i,resizeHandler:function(t,e,n,r,o,i,u){let c,a;let l=[t].concat(r),d=[],p=!1;function h(t){return o.measureSize(u.measure(t))}return{init:function(o){i&&(a=h(t),d=r.map(h),c=new ResizeObserver(n=>{(s(i)||i(o,n))&&function(n){for(let i of n){if(p)return;let n=i.target===t,u=r.indexOf(i.target),c=n?a:d[u];if(f(h(n?t:r[u])-c)>=.5){o.reInit(),e.emit("resize");break}}}(n)}),n.requestAnimationFrame(()=>{l.forEach(t=>c.observe(t))}))},destroy:function(){p=!0,c&&c.disconnect()}}}(e,u,o,n,q,A,U),scrollBody:tg,scrollBounds:function(t,e,n,r,o){let i=o.measure(10),u=o.measure(50),c=x(.1,.99),a=!1;function s(){return!!(!a&&t.reachedAny(n.get())&&t.reachedAny(e.get()))}return{shouldConstrain:s,constrain:function(o){if(!s())return;let a=t.reachedMin(e.get())?"min":"max",l=f(t[a]-e.get()),d=n.get()-e.get(),p=c.constrain(l/u);n.subtract(d*p),!o&&f(d)<i&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(t){a=!t}}}(ti,tm,ty,tg,$),scrollLooper:function(t,e,n,r){let{reachedMin:o,reachedMax:i}=x(e.min+.1,e.max+.1);return{loop:function(e){if(!(1===e?i(n.get()):-1===e&&o(n.get())))return;let u=-1*e*t;r.forEach(t=>t.add(u))}}}(te,ti,tm,[tp,tm,th,ty]),scrollProgress:tx,scrollSnapList:to.map(tx.get),scrollSnaps:to,scrollTarget:tv,scrollTo:tb,slideLooper:function(t,e,n,r,o,i,u,c,a){let s=p(o),l=h(d(p(o).reverse(),u[0]),n,!1).concat(h(d(s,e-u[0]-1),-n,!0));function f(t,e){return t.reduce((t,e)=>t-o[e],e)}function d(t,e){return t.reduce((t,n)=>f(t,e)>0?t.concat([n]):t,[])}function h(o,u,s){let l=i.map((t,n)=>({start:t-r[n]+.5+u,end:t+e-.5+u}));return o.map(e=>{let r=s?0:-n,o=s?n:0,i=l[e][s?"end":"start"];return{index:e,loopPoint:i,slideLocation:w(-1),translate:O(t,a[e]),target:()=>c.get()>i?r:o}})}return{canLoop:function(){return l.every(({index:t})=>.1>=f(s.filter(e=>e!==t),e))},clear:function(){l.forEach(t=>t.translate.clear())},loop:function(){l.forEach(t=>{let{target:e,translate:n,slideLocation:r}=t,o=e();o!==r.get()&&(n.to(o),r.set(o))})},loopPoints:l}}(q,B,te,X,G,Z,to,tm,n),slideFocus:tM,slidesHandler:(E=!1,{init:function(t){N&&(l=new MutationObserver(e=>{!E&&(s(N)||N(t,e))&&function(e){for(let n of e)if("childList"===n.type){t.reInit(),u.emit("slidesChanged");break}}(e)})).observe(e,{childList:!0})},destroy:function(){l&&l.disconnect(),E=!0}}),slidesInView:tO,slideIndexes:ta,slideRegistry:tE,slidesToScroll:K,target:ty,translate:O(q,e)};return tS}(t,i,u,j,T,n,D);return n.loop&&!r.slideLooper.canLoop()?e(Object.assign({},n,{loop:!1})):r}(U),J([R,...V.map(({options:t})=>t)]).forEach(t=>k.add(t,"change",q)),U.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(Q),r.eventHandler.init(Q),r.resizeHandler.init(Q),r.slidesHandler.init(Q),r.options.loop&&r.slideLooper.loop(),i.offsetParent&&u.length&&r.dragHandler.init(Q),o=I.init(Q,V)))}function q(t,e){let n=_();B(),z(P({startIndex:n},t),e),D.emit("reInit")}function B(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),I.destroy(),k.clear()}function $(t,e,n){U.active&&!H&&(r.scrollBody.useBaseFriction().useDuration(!0===e?0:U.duration),r.scrollTo.index(t,n||0))}function _(){return r.index.get()}let Q={canScrollNext:function(){return r.index.add(1).get()!==_()},canScrollPrev:function(){return r.index.add(-1).get()!==_()},containerNode:function(){return i},internalEngine:function(){return r},destroy:function(){H||(H=!0,k.clear(),B(),D.emit("destroy"),D.clear())},off:A,on:C,emit:N,plugins:function(){return o},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:q,rootNode:function(){return t},scrollNext:function(t){$(r.index.add(1).get(),t,-1)},scrollPrev:function(t){$(r.index.add(-1).get(),t,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:$,selectedScrollSnap:_,slideNodes:function(){return u},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return z(e,n),setTimeout(()=>D.emit("init"),0),Q}function S(t={},e=[]){let n=(0,r.useRef)(t),o=(0,r.useRef)(e),[c,a]=(0,r.useState)(),[s,l]=(0,r.useState)(),f=(0,r.useCallback)(()=>{c&&c.reInit(n.current,o.current)},[c]);return(0,r.useEffect)(()=>{i(n.current,t)||(n.current=t,f())},[t,f]),(0,r.useEffect)(()=>{!function(t,e){if(t.length!==e.length)return!1;let n=u(t),r=u(e);return n.every((t,e)=>i(t,r[e]))}(o.current,e)&&(o.current=e,f())},[e,f]),(0,r.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&s){M.globalOptions=S.globalOptions;let t=M(s,n.current,o.current);return a(t),()=>t.destroy()}a(void 0)},[s,a]),[l,c]}M.globalOptions=void 0,S.globalOptions=void 0}}]);