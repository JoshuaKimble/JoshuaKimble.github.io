import{s as J,c as ce,u as ue,g as re,a as fe,x as de,i as he,r as me,o as _e,y as R,n as se}from"../chunks/scheduler.CdkXGkJ4.js";import{S as K,i as Q,e as k,c as I,d as j,g as C,o as b,j as E,y as G,t as y,a as T,m as W,q as le,n as ae,s as P,u as F,z as O,h as D,v as U,k as g,A as X,w as z,x as H,b as B,f as q,B as pe,l as Z}from"../chunks/index.D-k3M52J.js";function x(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function ve(s){let e,t,n,i,d;const u=s[5].default,f=ce(u,s,s[4],null);return{c(){e=k("button"),f&&f.c(),this.h()},l(r){e=I(r,"BUTTON",{class:!0,type:!0});var l=j(e);f&&f.l(l),l.forEach(C),this.h()},h(){b(e,"class",t="button "+s[1]+" "+s[0]+" svelte-1ntdbj4"),b(e,"type",s[2]),e.disabled=s[3]},m(r,l){E(r,e,l),f&&f.m(e,null),n=!0,i||(d=G(e,"click",s[6]),i=!0)},p(r,[l]){f&&f.p&&(!n||l&16)&&ue(f,u,r,r[4],n?fe(u,r[4],l,null):re(r[4]),null),(!n||l&3&&t!==(t="button "+r[1]+" "+r[0]+" svelte-1ntdbj4"))&&b(e,"class",t),(!n||l&4)&&b(e,"type",r[2]),(!n||l&8)&&(e.disabled=r[3])},i(r){n||(y(f,r),n=!0)},o(r){T(f,r),n=!1},d(r){r&&C(e),f&&f.d(r),i=!1,d()}}}function ge(s,e,t){let{$$slots:n={},$$scope:i}=e,{className:d=""}=e,{variant:u="primary"}=e,{type:f="button"}=e,{disabled:r=!1}=e;function l(m){de.call(this,s,m)}return s.$$set=m=>{"className"in m&&t(0,d=m.className),"variant"in m&&t(1,u=m.variant),"type"in m&&t(2,f=m.type),"disabled"in m&&t(3,r=m.disabled),"$$scope"in m&&t(4,i=m.$$scope)},[d,u,f,r,i,n,l]}class L extends K{constructor(e){super(),Q(this,e,ge,ve,J,{className:0,variant:1,type:2,disabled:3})}}function ee(s){let e,t,n,i="×",d,u,f="Enter PIN",r,l,m,_,o,w,a;return _=new L({props:{type:"submit",$$slots:{default:[be]},$$scope:{ctx:s}}}),_.$on("click",s[3]),{c(){e=k("div"),t=k("div"),n=k("button"),n.textContent=i,d=P(),u=k("h2"),u.textContent=f,r=P(),l=k("input"),m=P(),F(_.$$.fragment),this.h()},l(c){e=I(c,"DIV",{class:!0});var h=j(e);t=I(h,"DIV",{class:!0});var v=j(t);n=I(v,"BUTTON",{class:!0,"data-svelte-h":!0}),O(n)!=="svelte-1863m0g"&&(n.textContent=i),d=D(v),u=I(v,"H2",{"data-svelte-h":!0}),O(u)!=="svelte-zcibv1"&&(u.textContent=f),r=D(v),l=I(v,"INPUT",{type:!0,placeholder:!0,class:!0}),m=D(v),U(_.$$.fragment,v),v.forEach(C),h.forEach(C),this.h()},h(){b(n,"class","close svelte-h208v3"),b(l,"type","password"),b(l,"placeholder","Enter PIN"),b(l,"class","svelte-h208v3"),b(t,"class","modal-content svelte-h208v3"),b(e,"class","modal svelte-h208v3")},m(c,h){E(c,e,h),g(e,t),g(t,n),g(t,d),g(t,u),g(t,r),g(t,l),X(l,s[2]),g(t,m),z(_,t,null),o=!0,w||(a=[G(n,"click",function(){he(s[1])&&s[1].apply(this,arguments)}),G(l,"input",s[5])],w=!0)},p(c,h){s=c,h&4&&l.value!==s[2]&&X(l,s[2]);const v={};h&64&&(v.$$scope={dirty:h,ctx:s}),_.$set(v)},i(c){o||(y(_.$$.fragment,c),o=!0)},o(c){T(_.$$.fragment,c),o=!1},d(c){c&&C(e),H(_),w=!1,me(a)}}}function be(s){let e;return{c(){e=B("Sign In")},l(t){e=q(t,"Sign In")},m(t,n){E(t,e,n)},d(t){t&&C(e)}}}function Ce(s){let e,t,n=s[0]&&ee(s);return{c(){n&&n.c(),e=W()},l(i){n&&n.l(i),e=W()},m(i,d){n&&n.m(i,d),E(i,e,d),t=!0},p(i,[d]){i[0]?n?(n.p(i,d),d&1&&y(n,1)):(n=ee(i),n.c(),y(n,1),n.m(e.parentNode,e)):n&&(le(),T(n,1,1,()=>{n=null}),ae())},i(i){t||(y(n),t=!0)},o(i){T(n),t=!1},d(i){i&&C(e),n&&n.d(i)}}}function $e(s,e,t){let{show:n=!1}=e,{authenticate:i}=e,{close:d}=e,u="";const f=()=>{i(u),t(2,u="")};function r(){u=this.value,t(2,u)}return s.$$set=l=>{"show"in l&&t(0,n=l.show),"authenticate"in l&&t(4,i=l.authenticate),"close"in l&&t(1,d=l.close)},[n,d,u,f,i,r]}class we extends K{constructor(e){super(),Q(this,e,$e,Ce,J,{show:0,authenticate:4,close:1})}}function te(s,e,t){const n=s.slice();return n[9]=e[t],n[11]=t,n}function ke(s){let e;return{c(){e=B("Login")},l(t){e=q(t,"Login")},m(t,n){E(t,e,n)},d(t){t&&C(e)}}}function Ie(s){let e,t="-";return{c(){e=k("span"),e.textContent=t,this.h()},l(n){e=I(n,"SPAN",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-1vs2q8l"&&(e.textContent=t),this.h()},h(){b(e,"class","plus-minus svelte-1suvo2d")},m(n,i){E(n,e,i)},p:se,d(n){n&&C(e)}}}function Ne(s){let e,t="+";return{c(){e=k("span"),e.textContent=t,this.h()},l(n){e=I(n,"SPAN",{class:!0,"data-svelte-h":!0}),O(e)!=="svelte-1i4yz6j"&&(e.textContent=t),this.h()},h(){b(e,"class","plus-minus svelte-1suvo2d")},m(n,i){E(n,e,i)},p:se,d(n){n&&C(e)}}}function ne(s){let e,t,n,i,d,u,f,r=s[9].name+"",l,m,_,o=s[9].coins+"",w,a,c,h,v,p,V,M;function oe(){return s[6](s[11])}h=new L({props:{variant:"secondary",disabled:s[2],$$slots:{default:[Ie]},$$scope:{ctx:s}}}),h.$on("click",oe);function ie(){return s[7](s[11])}return p=new L({props:{disabled:s[2],$$slots:{default:[Ne]},$$scope:{ctx:s}}}),p.$on("click",ie),{c(){e=k("div"),t=k("img"),d=P(),u=k("div"),f=k("h3"),l=B(r),m=P(),_=k("p"),w=B(o),a=B(" coins"),c=P(),F(h.$$.fragment),v=P(),F(p.$$.fragment),V=P(),this.h()},l(N){e=I(N,"DIV",{class:!0});var $=j(e);t=I($,"IMG",{src:!0,alt:!0,class:!0}),d=D($),u=I($,"DIV",{class:!0});var S=j(u);f=I(S,"H3",{});var A=j(f);l=q(A,r),A.forEach(C),m=D(S),_=I(S,"P",{});var Y=j(_);w=q(Y,o),a=q(Y," coins"),Y.forEach(C),c=D(S),U(h.$$.fragment,S),v=D(S),U(p.$$.fragment,S),S.forEach(C),V=D($),$.forEach(C),this.h()},h(){R(t.src,n=s[9].img)||b(t,"src",n),b(t,"alt",i=s[9].name),b(t,"class","person-image svelte-1suvo2d"),b(u,"class","card-body svelte-1suvo2d"),b(e,"class","card svelte-1suvo2d")},m(N,$){E(N,e,$),g(e,t),g(e,d),g(e,u),g(u,f),g(f,l),g(u,m),g(u,_),g(_,w),g(_,a),g(u,c),z(h,u,null),g(u,v),z(p,u,null),g(e,V),M=!0},p(N,$){s=N,(!M||$&1&&!R(t.src,n=s[9].img))&&b(t,"src",n),(!M||$&1&&i!==(i=s[9].name))&&b(t,"alt",i),(!M||$&1)&&r!==(r=s[9].name+"")&&Z(l,r),(!M||$&1)&&o!==(o=s[9].coins+"")&&Z(w,o);const S={};$&4&&(S.disabled=s[2]),$&4096&&(S.$$scope={dirty:$,ctx:s}),h.$set(S);const A={};$&4&&(A.disabled=s[2]),$&4096&&(A.$$scope={dirty:$,ctx:s}),p.$set(A)},i(N){M||(y(h.$$.fragment,N),y(p.$$.fragment,N),M=!0)},o(N){T(h.$$.fragment,N),T(p.$$.fragment,N),M=!1},d(N){N&&C(e),H(h),H(p)}}}function Se(s){let e,t,n="Kiddie Coins",i,d,u,f,r,l,m;d=new L({props:{variant:"secondary",$$slots:{default:[ke]},$$scope:{ctx:s}}}),d.$on("click",s[4]),f=new we({props:{show:s[1],authenticate:s[3],close:s[4]}});let _=x(s[0]),o=[];for(let a=0;a<_.length;a+=1)o[a]=ne(te(s,_,a));const w=a=>T(o[a],1,1,()=>{o[a]=null});return{c(){e=k("div"),t=k("h1"),t.textContent=n,i=P(),F(d.$$.fragment),u=P(),F(f.$$.fragment),r=P(),l=k("div");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=I(a,"DIV",{class:!0});var c=j(e);t=I(c,"H1",{"data-svelte-h":!0}),O(t)!=="svelte-d1y84k"&&(t.textContent=n),i=D(c),U(d.$$.fragment,c),c.forEach(C),u=D(a),U(f.$$.fragment,a),r=D(a),l=I(a,"DIV",{class:!0});var h=j(l);for(let v=0;v<o.length;v+=1)o[v].l(h);h.forEach(C),this.h()},h(){b(e,"class","header svelte-1suvo2d"),b(l,"class","container svelte-1suvo2d")},m(a,c){E(a,e,c),g(e,t),g(e,i),z(d,e,null),E(a,u,c),z(f,a,c),E(a,r,c),E(a,l,c);for(let h=0;h<o.length;h+=1)o[h]&&o[h].m(l,null);m=!0},p(a,[c]){const h={};c&4096&&(h.$$scope={dirty:c,ctx:a}),d.$set(h);const v={};if(c&2&&(v.show=a[1]),f.$set(v),c&37){_=x(a[0]);let p;for(p=0;p<_.length;p+=1){const V=te(a,_,p);o[p]?(o[p].p(V,c),y(o[p],1)):(o[p]=ne(V),o[p].c(),y(o[p],1),o[p].m(l,null))}for(le(),p=_.length;p<o.length;p+=1)w(p);ae()}},i(a){if(!m){y(d.$$.fragment,a),y(f.$$.fragment,a);for(let c=0;c<_.length;c+=1)y(o[c]);m=!0}},o(a){T(d.$$.fragment,a),T(f.$$.fragment,a),o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)T(o[c]);m=!1},d(a){a&&(C(e),C(u),C(r),C(l)),H(d),H(f,a),pe(o,a)}}}function ye(){const s=new Date,e=String(s.getMonth()+1).padStart(2,"0"),t=String(s.getDate()).padStart(2,"0"),n=String(s.getFullYear()).slice(-2);return e+t+n}async function Ee(s,e){console.log("newCoinCount:",e),(await fetch("/api/people",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,coins:e})})).ok?console.log("Update was successful"):console.error("Failed to update coins")}function Pe(s,e,t){let n=[];_e(async()=>{const o=await fetch("/api/people");if(o.ok){const{data:w}=await o.json();t(0,n=w)}else console.error("Error fetching people")});let i=!1,d=!1,u=!1;function f(o){const w=ye();o===w?(d=!0,t(1,i=!1)):alert("Incorrect PIN")}function r(){t(1,i=!i)}async function l(o,w=!0){if(!d){alert("You must be signed in to edit coins!");return}const{coins:a,name:c}=n[o],h=w?a+1:a-1;if(h<0){alert("Coin count cannot be negative.");return}t(2,u=!0);try{await Ee(c,h),t(0,n[o].coins=h,n)}catch(v){console.error("Failed to update coins:",v),alert("Failed to update coins.")}finally{t(2,u=!1)}}return[n,i,u,f,r,l,o=>l(o),o=>l(o,!0)]}class je extends K{constructor(e){super(),Q(this,e,Pe,Se,J,{})}}export{je as component};