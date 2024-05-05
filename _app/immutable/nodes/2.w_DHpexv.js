import{s as J,c as ue,u as re,g as fe,a as de,x as he,i as me,r as _e,o as pe,y as R,n as le}from"../chunks/scheduler.CdkXGkJ4.js";import{S as K,i as Q,e as k,c as I,d as j,g as C,o as $,j as E,y as G,t as y,a as T,m as W,q as ae,n as oe,s as P,u as F,z as O,h as D,v as U,k as b,A as X,w as z,x as H,b as B,f as q,B as ve,l as Z}from"../chunks/index.D-k3M52J.js";import{b as x}from"../chunks/paths.D-1gFjzq.js";function ee(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function ge(s){let e,t,n,o,d;const c=s[5].default,r=ue(c,s,s[4],null);return{c(){e=k("button"),r&&r.c(),this.h()},l(u){e=I(u,"BUTTON",{class:!0,type:!0});var a=j(e);r&&r.l(a),a.forEach(C),this.h()},h(){$(e,"class",t="button "+s[1]+" "+s[0]+" svelte-1ntdbj4"),$(e,"type",s[2]),e.disabled=s[3]},m(u,a){E(u,e,a),r&&r.m(e,null),n=!0,o||(d=G(e,"click",s[6]),o=!0)},p(u,[a]){r&&r.p&&(!n||a&16)&&re(r,c,u,u[4],n?de(c,u[4],a,null):fe(u[4]),null),(!n||a&3&&t!==(t="button "+u[1]+" "+u[0]+" svelte-1ntdbj4"))&&$(e,"class",t),(!n||a&4)&&$(e,"type",u[2]),(!n||a&8)&&(e.disabled=u[3])},i(u){n||(y(r,u),n=!0)},o(u){T(r,u),n=!1},d(u){u&&C(e),r&&r.d(u),o=!1,d()}}}function be(s,e,t){let{$$slots:n={},$$scope:o}=e,{className:d=""}=e,{variant:c="primary"}=e,{type:r="button"}=e,{disabled:u=!1}=e;function a(m){he.call(this,s,m)}return s.$$set=m=>{"className"in m&&t(0,d=m.className),"variant"in m&&t(1,c=m.variant),"type"in m&&t(2,r=m.type),"disabled"in m&&t(3,u=m.disabled),"$$scope"in m&&t(4,o=m.$$scope)},[d,c,r,u,o,n,a]}class L extends K{constructor(e){super(),Q(this,e,be,ge,J,{className:0,variant:1,type:2,disabled:3})}}function te(s){let e,t,n,o="×",d,c,r="Enter PIN",u,a,m,v,f,g,l;return v=new L({props:{type:"submit",$$slots:{default:[$e]},$$scope:{ctx:s}}}),v.$on("click",s[3]),{c(){e=k("div"),t=k("div"),n=k("button"),n.textContent=o,d=P(),c=k("h2"),c.textContent=r,u=P(),a=k("input"),m=P(),F(v.$$.fragment),this.h()},l(i){e=I(i,"DIV",{class:!0});var h=j(e);t=I(h,"DIV",{class:!0});var p=j(t);n=I(p,"BUTTON",{class:!0,"data-svelte-h":!0}),O(n)!=="svelte-1863m0g"&&(n.textContent=o),d=D(p),c=I(p,"H2",{"data-svelte-h":!0}),O(c)!=="svelte-zcibv1"&&(c.textContent=r),u=D(p),a=I(p,"INPUT",{type:!0,placeholder:!0,class:!0}),m=D(p),U(v.$$.fragment,p),p.forEach(C),h.forEach(C),this.h()},h(){$(n,"class","close svelte-h208v3"),$(a,"type","password"),$(a,"placeholder","Enter PIN"),$(a,"class","svelte-h208v3"),$(t,"class","modal-content svelte-h208v3"),$(e,"class","modal svelte-h208v3")},m(i,h){E(i,e,h),b(e,t),b(t,n),b(t,d),b(t,c),b(t,u),b(t,a),X(a,s[2]),b(t,m),z(v,t,null),f=!0,g||(l=[G(n,"click",function(){me(s[1])&&s[1].apply(this,arguments)}),G(a,"input",s[5])],g=!0)},p(i,h){s=i,h&4&&a.value!==s[2]&&X(a,s[2]);const p={};h&64&&(p.$$scope={dirty:h,ctx:s}),v.$set(p)},i(i){f||(y(v.$$.fragment,i),f=!0)},o(i){T(v.$$.fragment,i),f=!1},d(i){i&&C(e),H(v),g=!1,_e(l)}}}function $e(s){let e;return{c(){e=B("Sign In")},l(t){e=q(t,"Sign In")},m(t,n){E(t,e,n)},d(t){t&&C(e)}}}function Ce(s){let e,t,n=s[0]&&te(s);return{c(){n&&n.c(),e=W()},l(o){n&&n.l(o),e=W()},m(o,d){n&&n.m(o,d),E(o,e,d),t=!0},p(o,[d]){o[0]?n?(n.p(o,d),d&1&&y(n,1)):(n=te(o),n.c(),y(n,1),n.m(e.parentNode,e)):n&&(ae(),T(n,1,1,()=>{n=null}),oe())},i(o){t||(y(n),t=!0)},o(o){T(n),t=!1},d(o){o&&C(e),n&&n.d(o)}}}function we(s,e,t){let{show:n=!1}=e,{authenticate:o}=e,{close:d}=e,c="";const r=()=>{o(c),t(2,c="")};function u(){c=this.value,t(2,c)}return s.$$set=a=>{"show"in a&&t(0,n=a.show),"authenticate"in a&&t(4,o=a.authenticate),"close"in a&&t(1,d=a.close)},[n,d,c,r,o,u]}class ke extends K{constructor(e){super(),Q(this,e,we,Ce,J,{show:0,authenticate:4,close:1})}}function ne(s,e,t){const n=s.slice();return n[10]=e[t],n[12]=t,n}function Ie(s){let e;return{c(){e=B("Login")},l(t){e=q(t,"Login")},m(t,n){E(t,e,n)},d(t){t&&C(e)}}}function Ne(s){let e,t="-";return{c(){e=k("span"),e.textContent=t,this.h()},l(n){e=I(n,"SPAN",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-1vs2q8l"&&(e.textContent=t),this.h()},h(){$(e,"class","plus-minus svelte-1suvo2d")},m(n,o){E(n,e,o)},p:le,d(n){n&&C(e)}}}function Se(s){let e,t="+";return{c(){e=k("span"),e.textContent=t,this.h()},l(n){e=I(n,"SPAN",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-1i4yz6j"&&(e.textContent=t),this.h()},h(){$(e,"class","plus-minus svelte-1suvo2d")},m(n,o){E(n,e,o)},p:le,d(n){n&&C(e)}}}function se(s){let e,t,n,o,d,c,r,u=s[10].name+"",a,m,v,f=s[10].coins+"",g,l,i,h,p,_,V,M;function ie(){return s[6](s[12])}h=new L({props:{variant:"secondary",disabled:s[2],$$slots:{default:[Ne]},$$scope:{ctx:s}}}),h.$on("click",ie);function ce(){return s[7](s[12])}return _=new L({props:{disabled:s[2],$$slots:{default:[Se]},$$scope:{ctx:s}}}),_.$on("click",ce),{c(){e=k("div"),t=k("img"),d=P(),c=k("div"),r=k("h3"),a=B(u),m=P(),v=k("p"),g=B(f),l=B(" coins"),i=P(),F(h.$$.fragment),p=P(),F(_.$$.fragment),V=P(),this.h()},l(N){e=I(N,"DIV",{class:!0});var w=j(e);t=I(w,"IMG",{src:!0,alt:!0,class:!0}),d=D(w),c=I(w,"DIV",{class:!0});var S=j(c);r=I(S,"H3",{});var A=j(r);a=q(A,u),A.forEach(C),m=D(S),v=I(S,"P",{});var Y=j(v);g=q(Y,f),l=q(Y," coins"),Y.forEach(C),i=D(S),U(h.$$.fragment,S),p=D(S),U(_.$$.fragment,S),S.forEach(C),V=D(w),w.forEach(C),this.h()},h(){R(t.src,n=s[10].img)||$(t,"src",n),$(t,"alt",o=s[10].name),$(t,"class","person-image svelte-1suvo2d"),$(c,"class","card-body svelte-1suvo2d"),$(e,"class","card svelte-1suvo2d")},m(N,w){E(N,e,w),b(e,t),b(e,d),b(e,c),b(c,r),b(r,a),b(c,m),b(c,v),b(v,g),b(v,l),b(c,i),z(h,c,null),b(c,p),z(_,c,null),b(e,V),M=!0},p(N,w){s=N,(!M||w&1&&!R(t.src,n=s[10].img))&&$(t,"src",n),(!M||w&1&&o!==(o=s[10].name))&&$(t,"alt",o),(!M||w&1)&&u!==(u=s[10].name+"")&&Z(a,u),(!M||w&1)&&f!==(f=s[10].coins+"")&&Z(g,f);const S={};w&4&&(S.disabled=s[2]),w&8192&&(S.$$scope={dirty:w,ctx:s}),h.$set(S);const A={};w&4&&(A.disabled=s[2]),w&8192&&(A.$$scope={dirty:w,ctx:s}),_.$set(A)},i(N){M||(y(h.$$.fragment,N),y(_.$$.fragment,N),M=!0)},o(N){T(h.$$.fragment,N),T(_.$$.fragment,N),M=!1},d(N){N&&C(e),H(h),H(_)}}}function ye(s){let e,t,n="Kiddie Coins",o,d,c,r,u,a,m;d=new L({props:{variant:"secondary",$$slots:{default:[Ie]},$$scope:{ctx:s}}}),d.$on("click",s[4]),r=new ke({props:{show:s[1],authenticate:s[3],close:s[4]}});let v=ee(s[0]),f=[];for(let l=0;l<v.length;l+=1)f[l]=se(ne(s,v,l));const g=l=>T(f[l],1,1,()=>{f[l]=null});return{c(){e=k("div"),t=k("h1"),t.textContent=n,o=P(),F(d.$$.fragment),c=P(),F(r.$$.fragment),u=P(),a=k("div");for(let l=0;l<f.length;l+=1)f[l].c();this.h()},l(l){e=I(l,"DIV",{class:!0});var i=j(e);t=I(i,"H1",{"data-svelte-h":!0}),O(t)!=="svelte-d1y84k"&&(t.textContent=n),o=D(i),U(d.$$.fragment,i),i.forEach(C),c=D(l),U(r.$$.fragment,l),u=D(l),a=I(l,"DIV",{class:!0});var h=j(a);for(let p=0;p<f.length;p+=1)f[p].l(h);h.forEach(C),this.h()},h(){$(e,"class","header svelte-1suvo2d"),$(a,"class","container svelte-1suvo2d")},m(l,i){E(l,e,i),b(e,t),b(e,o),z(d,e,null),E(l,c,i),z(r,l,i),E(l,u,i),E(l,a,i);for(let h=0;h<f.length;h+=1)f[h]&&f[h].m(a,null);m=!0},p(l,[i]){const h={};i&8192&&(h.$$scope={dirty:i,ctx:l}),d.$set(h);const p={};if(i&2&&(p.show=l[1]),r.$set(p),i&37){v=ee(l[0]);let _;for(_=0;_<v.length;_+=1){const V=ne(l,v,_);f[_]?(f[_].p(V,i),y(f[_],1)):(f[_]=se(V),f[_].c(),y(f[_],1),f[_].m(a,null))}for(ae(),_=v.length;_<f.length;_+=1)g(_);oe()}},i(l){if(!m){y(d.$$.fragment,l),y(r.$$.fragment,l);for(let i=0;i<v.length;i+=1)y(f[i]);m=!0}},o(l){T(d.$$.fragment,l),T(r.$$.fragment,l),f=f.filter(Boolean);for(let i=0;i<f.length;i+=1)T(f[i]);m=!1},d(l){l&&(C(e),C(c),C(u),C(a)),H(d),H(r,l),ve(f,l)}}}function Ee(){const s=new Date,e=String(s.getMonth()+1).padStart(2,"0"),t=String(s.getDate()).padStart(2,"0"),n=String(s.getFullYear()).slice(-2);return e+t+n}function Pe(s,e,t){let n=[];pe(async()=>{const g=await fetch(`${x}/api/people`);if(g.ok){const{data:l}=await g.json();l&&t(0,n=l)}else console.error("Error fetching people")});let o=!1,d=!1,c=!1;function r(g){const l=Ee();g===l?(d=!0,t(1,o=!1)):alert("Incorrect PIN")}function u(){t(1,o=!o)}async function a(g,l){(await fetch(`${x}/api/people`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:g,coins:l})})).ok?console.info("Update was successful"):console.error("Failed to update coins")}async function m(g,l=!0){if(!d){alert("You must be signed in to edit coins!");return}const{coins:i,name:h}=n[g],p=l?i+1:i-1;if(p<0){alert("Coin count cannot be negative.");return}t(2,c=!0);try{await a(h,p),t(0,n[g].coins=p,n)}catch(_){console.error("Failed to update coins:",_),alert("Failed to update coins.")}finally{t(2,c=!1)}}return[n,o,c,r,u,m,g=>m(g,!1),g=>m(g)]}class Me extends K{constructor(e){super(),Q(this,e,Pe,ye,J,{})}}export{Me as component};