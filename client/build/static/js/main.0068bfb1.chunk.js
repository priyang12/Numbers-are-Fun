(this.webpackJsonpmathfacts=this.webpackJsonpmathfacts||[]).push([[0],{12:function(e,t,c){"use strict";var a=c.p+"static/media/diceGif.f14d5946.gif",n=c(0);t.a=function(){return Object(n.jsx)("div",{className:" d-flex justify-content-center",children:Object(n.jsx)("img",{src:a,alt:"Loading"})})}},36:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),A=c(27),i=c.n(A),s=(c(36),c(11)),r=c(2),j=c(0),l=function(){return Object(j.jsx)("header",{className:"nav display-1 text-center justify-content-center",children:"Tales of Numbers"})},o=function(e){var t=e.type;return Object(j.jsx)("section",{id:"blackboard-".concat(t||"primary"),className:"container",children:e.children})},d=function(){var e=Object(r.f)().pathname;return Object(j.jsx)("nav",{className:"mx-auto navigator ",children:Object(j.jsxs)("ul",{className:"d-flex flex-column flex-md-row align-items-center justify-content-around p-4 text-center",children:["/"!==e&&Object(j.jsx)(o,{type:"primary",children:Object(j.jsx)("li",{className:"list-group-item mx-3 h1 bg-transparent ",children:Object(j.jsx)(s.b,{to:"/",className:"text-light",children:"Single Numbers"})})}),"/Random"!==e&&Object(j.jsx)(o,{type:"secondary",children:Object(j.jsx)("li",{className:"list-group-item mx-3 h1 bg-transparent ",children:Object(j.jsx)(s.b,{to:"Random",className:"text-light",children:"Random Numnbers"})})}),"/Multiple"!==e&&Object(j.jsx)(o,{type:"primary",children:Object(j.jsx)("li",{className:"list-group-item mx-3 h1 bg-transparent",children:Object(j.jsx)(s.b,{to:"Multiple",className:"text-light",children:"Multiple Numbers"})})}),"/Math"!==e&&Object(j.jsx)(o,{type:"secondary",children:Object(j.jsx)("li",{className:"list-group-item  h1 bg-transparent",children:Object(j.jsx)(s.b,{to:"Math",className:"text-light",children:"Mathematicians Tale"})})})]})})},b=c(4),O=c(9),x=function(e){var t=e.type,c=Object(a.useState)("?ApiCall=0/".concat(t)),n=Object(b.a)(c,2),A=n[0],i=n[1],s=Object(O.a)(0),r=Object(b.a)(s,3),l=r[0],o=r[1],d=r[2],x=Object(O.b)(A),g=x.loading,u=x.Error,m=x.fact;return Object(j.jsxs)("form",{id:"getFacts",className:"m-2 d-flex flex-column flex-md-row align-items-start justify-content-center","data-testid":"FactTestId",children:[Object(j.jsx)("div",{id:"Facts",className:"display-4 ",children:g?Object(j.jsx)("div",{className:"loading","data-testid":"loader",children:"Wait For IT"}):u?Object(j.jsx)("div",{className:"error",children:"'Server Timeout'"}):Object(j.jsx)("div",{children:m})}),Object(j.jsxs)("div",{className:"d-flex align-items-center justify-content-center inputfield","data-testid":"form-test",children:[Object(j.jsxs)("label",{htmlFor:t,className:"display-6 order-2",children:["/",t]}),Object(j.jsxs)("div",{id:"start",className:"d-flex align-items-center p-3 display-2",children:[Object(j.jsx)("div",{onClick:d,children:"<"}),Object(j.jsx)("div",{children:l}),Object(j.jsx)("div",{onClick:o,children:">"})]}),Object(j.jsx)("div",{type:"submit",className:"order-3 p-3 display-5 border m-3",onClick:function(e){e.preventDefault(),A!=="?ApiCall=".concat(l,"/").concat(t)&&i("?ApiCall=".concat(l,"/").concat(t))},children:"Click"})]})]})},g=function(e){var t=e.title;return Object(j.jsx)("div",{id:"header",className:"container rounded",children:Object(j.jsx)("h1",{className:"display-2 text-center text-light ",children:t})})},u=function(){return Object(j.jsx)(a.Fragment,{children:Object(j.jsxs)(o,{children:[Object(j.jsx)(g,{title:"Single Numbers"}),Object(j.jsx)(x,{type:"math"}),Object(j.jsx)(x,{type:"trivia"}),Object(j.jsx)(x,{type:"year"})]})})},m=c(12),p=Object(a.lazy)((function(){return c.e(3).then(c.bind(null,68))})),h=function(){return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(a.Suspense,{fallback:m.a,children:Object(j.jsxs)(o,{children:[Object(j.jsx)(g,{title:"Random Numbers"}),Object(j.jsx)(p,{type:"math"})]})}),Object(j.jsx)("br",{}),Object(j.jsx)(a.Suspense,{fallback:m.a,children:Object(j.jsx)(o,{children:Object(j.jsx)(p,{type:"trivia"})})}),Object(j.jsx)("br",{}),Object(j.jsx)(a.Suspense,{fallback:m.a,children:Object(j.jsx)(o,{children:Object(j.jsx)(p,{type:"year"})})})]})},C=c.p+"static/media/dropdown.5d6f946c.png",N=function(e){var t=e.seturl,c=Object(O.a)(0),a=Object(b.a)(c,3),n=a[0],A=a[1],i=a[2],s=Object(O.a)(5),r=Object(b.a)(s,3),d=r[0],x=r[1],g=r[2],u=function(e,t){return!(e-t>99)};return Object(j.jsx)("div",{id:"radomFacts",className:"containe","data-testid":"multirandom",children:Object(j.jsxs)(o,{children:[Object(j.jsx)(l,{title:"Multiple Numbers"}),Object(j.jsxs)("div",{id:"range",className:"display-1 d-flex flex-column flex-md-row  align-items-center justify-content-around mt-2 ",children:[Object(j.jsxs)("h1",{children:["Select Range",Object(j.jsx)("p",{className:"h4",children:"Between Diffrence of 100"})]}),Object(j.jsx)("h4",{children:"Start"}),Object(j.jsxs)("div",{id:"start",className:"d-flex align-items-center",children:[Object(j.jsx)("div",{onClick:i,children:"<"}),Object(j.jsx)("div",{children:n}),Object(j.jsx)("div",{onClick:A,children:">"})]}),Object(j.jsx)("h4",{children:"End"}),Object(j.jsxs)("div",{id:"end",className:"d-flex align-items-center",children:[Object(j.jsx)("div",{onClick:g,children:"<"}),Object(j.jsx)("div",{children:d}),Object(j.jsx)("div",{onClick:x,children:">"})]})]}),Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsxs)("div",{id:"randomType",className:"container d-flex flex-column justify-content-around ",children:[Object(j.jsx)("button",{type:"button",id:"math",className:"btn  ",onClick:function(){u(n,d),t("?ApiCall=".concat(n,"..").concat(d,"/math"))},children:"Math"}),Object(j.jsx)("button",{type:"button",id:"trivia",className:"btn ",onClick:function(){u(n,d),t("?ApiCall=".concat(n,"..").concat(d,"/trivia"))},children:"Trivia"}),Object(j.jsx)("button",{type:"button",id:"year",className:"btn ",onClick:function(){u(n,d),t("?ApiCall=".concat(n,"..").concat(d,"/year"))},children:"Year"})]}),Object(j.jsx)("div",{className:"container mt-5 d-sm-none d-md-none d-lg-block",children:Object(j.jsx)("img",{src:C,alt:"Look Down"})})]})]})})},K=function(e){var t=e.Facts,c=Object(a.useState)([]),n=Object(b.a)(c,2),A=n[0],i=n[1];if(Object(a.useEffect)((function(){var e=function(e){i((function(c){return c.concat(t[e])}))};for(var c in t)e(c)}),[t]),t)return Object(j.jsx)("div",{className:"mt-5",children:Object(j.jsx)(o,{type:"secondary",children:Object(j.jsx)("ul",{className:"list","data-testid":"ListItems",children:A.length>0&&A.map((function(e,t){return Object(j.jsx)("li",{className:"list-item",children:e},t)}))})})})},Q=function(){var e=Object(a.useState)(null),t=Object(b.a)(e,2),c=t[0],n=t[1],A=Object(a.useState)("?ApiCall=0..5/math"),i=Object(b.a)(A,2),s=i[0],r=i[1],l=Object(O.b)(s),o=l.loading,d=l.Error,x=l.fact;return Object(a.useEffect)((function(){x&&n(JSON.parse(x))}),[x]),Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(N,{seturl:r}),o||null===x?Object(j.jsx)(m.a,{}):d?Object(j.jsx)("div",{children:d&&"Server Timeout"}):Object(j.jsx)(K,{Facts:c})]})},B=function(){return Object(j.jsx)("div",{className:"hero-container p-3",children:Object(j.jsxs)("div",{className:"Title ",children:[Object(j.jsx)("h1",{children:"Ramanujan favourite number 1729"}),Object(j.jsx)("blockquote",{className:" m-4",children:"---I remember once going to see him when he was ill at Putney. I had ridden in taxi cab number 1729"}),Object(j.jsxs)("ul",{className:"list-group",children:[Object(j.jsx)("li",{className:"list-group-item bg-transparent text-light",children:Object(j.jsx)("h3",{children:"- 1729, the Hardy-Ramanujan Number, is the smallest number which can be expressed as the sum of two different cubes in two different ways."})}),Object(j.jsx)("li",{className:"list-group-item bg-transparent text-light",children:Object(j.jsx)("h3",{children:"- 1729 is also the sum of the cubes of 12 and 1. Cube of 12 is 1728 and the cube of 1 is 1. Both the cubes, therefore, add up to 1729."})})]})]})})},y=function(){return Object(j.jsxs)("div",{className:" d-flex flex-column flex-md-row justify-content-centers container",children:[Object(j.jsx)("div",{className:"order- ",children:Object(j.jsx)(o,{type:"secondary",children:Object(j.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"rama"})})}),Object(j.jsx)("div",{className:"order-1",children:Object(j.jsxs)(o,{children:[Object(j.jsx)(g,{title:"Tale of 1927"}),Object(j.jsx)(B,{})]})})]})},f=(c(66),c.p+"static/media/github-brands.f6872500.svg"),U=c.p+"static/media/linkedin-brands.3b082c25.svg",k=c.p+"static/media/twitter-brands.cf7ebfc5.svg",S=function(){return Object(j.jsxs)("footer",{children:[Object(j.jsxs)("svg",{id:"wave",style:{transform:"rotate(0deg)",transition:"0.3s"},viewBox:"0 0 1440 150",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("defs",{children:Object(j.jsxs)("linearGradient",{id:"sw-gradient-0",x1:"0",x2:"0",y1:"1",y2:"0",children:[Object(j.jsx)("stop",{stopColor:"rgba(159.802, 127.358, 22.16, 1)",offset:"0%"}),Object(j.jsx)("stop",{stopColor:"rgba(255, 207.215, 101.586, 1)",offset:"100%"})]})}),Object(j.jsx)("path",{style:{transform:"rotate(0deg)",transition:"0.3s",opacity:"0.5"},fill:"url(#sw-gradient-0)",d:"M0,135L10,117.5C20,100,40,65,60,52.5C80,40,100,50,120,65C140,80,160,100,180,97.5C200,95,220,70,240,70C260,70,280,95,300,95C320,95,340,70,360,60C380,50,400,55,420,50C440,45,460,30,480,25C500,20,520,25,540,42.5C560,60,580,90,600,85C620,80,640,40,660,27.5C680,15,700,30,720,42.5C740,55,760,65,780,70C800,75,820,75,840,67.5C860,60,880,45,900,40C920,35,940,40,960,47.5C980,55,1000,65,1020,65C1040,65,1060,55,1080,52.5C1100,50,1120,55,1140,62.5C1160,70,1180,80,1200,85C1220,90,1240,90,1260,75C1280,60,1300,30,1320,25C1340,20,1360,40,1380,57.5C1400,75,1420,90,1430,97.5L1440,105L1440,150L1430,150C1420,150,1400,150,1380,150C1360,150,1340,150,1320,150C1300,150,1280,150,1260,150C1240,150,1220,150,1200,150C1180,150,1160,150,1140,150C1120,150,1100,150,1080,150C1060,150,1040,150,1020,150C1000,150,980,150,960,150C940,150,920,150,900,150C880,150,860,150,840,150C820,150,800,150,780,150C760,150,740,150,720,150C700,150,680,150,660,150C640,150,620,150,600,150C580,150,560,150,540,150C520,150,500,150,480,150C460,150,440,150,420,150C400,150,380,150,360,150C340,150,320,150,300,150C280,150,260,150,240,150C220,150,200,150,180,150C160,150,140,150,120,150C100,150,80,150,60,150C40,150,20,150,10,150L0,150Z"})]}),Object(j.jsx)("div",{className:"footer-container",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"p-3 m-2",children:Object(j.jsx)("a",{href:"https://github.com/priyang12",children:Object(j.jsx)("img",{src:f,alt:"GithubIcon"})})}),Object(j.jsx)("li",{className:"p-3 m-2",children:Object(j.jsx)("a",{href:"google.com",children:Object(j.jsx)("img",{src:k,alt:"TwitterIcon"})})}),Object(j.jsx)("li",{className:"p-3 m-2",children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/priyang-patel-948685176/",children:Object(j.jsx)("img",{src:U,alt:"LinkdinIcon"})})})]})})]})};var R=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(d,{}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(j.jsx)(r.a,{exact:!0,path:"/Math",component:y}),Object(j.jsx)(r.a,{exact:!0,path:"/Random",component:h}),Object(j.jsx)(r.a,{exact:!0,path:"/Multiple",component:Q}),Object(j.jsx)(r.a,{path:"*",component:function(){return Object(j.jsx)("div",{className:"p-5 text-light display-1 bg-black",children:"NotFound"})}})]}),Object(j.jsx)(S,{})]})})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root"))},9:function(e,t,c){"use strict";c.d(t,"a",(function(){return l})),c.d(t,"b",(function(){return o}));var a=c(18),n=c.n(a),A=c(30),i=c(4),s=c(1),r=c(31),j=c.n(r),l=function(e){var t=Object(s.useState)(e),c=Object(i.a)(t,2),a=c[0],n=c[1];return[a,Object(s.useCallback)((function(){return n((function(e){return e+1}))}),[]),Object(s.useCallback)((function(){return n((function(e){return e-1}))}),[])]},o=function(e){var t=Object(s.useState)(!1),c=Object(i.a)(t,2),a=c[0],r=c[1],l=Object(s.useState)(null),o=Object(i.a)(l,2),d=o[0],b=o[1],O=Object(s.useState)(null),x=Object(i.a)(O,2),g=x[0],u=x[1],m=Object(s.useRef)(!0);return Object(s.useEffect)((function(){var t=function(){var t=Object(A.a)(n.a.mark((function t(){var c,a,A,i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(!0),console.log("API CALL"),t.next=5,j.a.get("/api"+e);case 5:c=t.sent,a=c.data,console.log(a),b(a),u(null),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),i=(null===(A=t.t0.response)||void 0===A?void 0:A.data)||"SERVER ERROR",u(i),b(null);case 17:return t.prev=17,setTimeout((function(){r(!1)}),1e3),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[0,12,17,20]])})));return function(){return t.apply(this,arguments)}}();return console.log(m),t(),function(){m.current=null}}),[e]),{loading:a,fact:d,Error:g}}}},[[67,1,2]]]);
//# sourceMappingURL=main.0068bfb1.chunk.js.map