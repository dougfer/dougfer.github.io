(this.webpackJsonpportifolio=this.webpackJsonpportifolio||[]).push([[0],{21:function(e,t,a){e.exports={mainContainer:"Projects_mainContainer__1EsLj",mainDiv:"Projects_mainDiv__2_KYo",header:"Projects_header__3Q9QN",projectContainer:"Projects_projectContainer__3pK_8",navigate:"Projects_navigate__23f6c"}},22:function(e,t,a){e.exports={mainContainer:"About_mainContainer__3NQ3M",mainDiv:"About_mainDiv__2CRML",header:"About_header__1Rwl0",aboutSection:"About_aboutSection__eCsE_",imageSection:"About_imageSection__2imL9",dataSection:"About_dataSection__32rps",icons:"About_icons__PXfUc"}},23:function(e,t,a){e.exports={headerImg:"Header_headerImg__3f199",header:"Header_header__3mObx",sprite1:"Header_sprite1__1xSon",play:"Header_play__d_oz7",sprite2:"Header_sprite2__3UrM3"}},26:function(e,t,a){e.exports={routeContainer:"app_routeContainer__UVNfi",claro:"app_claro__UbGds",escuro:"app_escuro__3qiWm",divs:"app_divs__MwbEv",menuIcon:"app_menuIcon__18kLA"}},27:function(e,t,a){e.exports={mainContainer:"Skills_mainContainer__3fi24",mainDiv:"Skills_mainDiv__2TT4o",header:"Skills_header__1zP0n",mainSection:"Skills_mainSection__2ccoV",section1:"Skills_section1__1_qoJ",section2:"Skills_section2__Z3uKQ"}},33:function(e,t,a){e.exports={menuContainer:"Menu_menuContainer__P3CqY",home:"Menu_home__q0hXZ",sobre:"Menu_sobre__1Thu0",Cranky:"Menu_Cranky__1R0Ne"}},36:function(e,t,a){e.exports={footer:"Footer_footer__2NNgL",dixieB:"Footer_dixieB__1qYUf",run:"Footer_run__1-Kts"}},42:function(e,t,a){e.exports={cardContainer:"ModalCard_cardContainer__3PUBR",links:"ModalCard_links__O5ZtC",close:"ModalCard_close__cP-xZ"}},46:function(e,t,a){e.exports={CardContainer:"ProjectCard_CardContainer___LhMl",modal:"ProjectCard_modal__3fjKw"}},49:function(e,t,a){e.exports={h2Hide:"Home_h2Hide__o2dw1",mainContainer:"Home_mainContainer__mKn9q"}},55:function(e,t,a){e.exports={menuContainer:"MenuPage_menuContainer__3ruUQ",mainContainer:"MenuPage_mainContainer__1epQ0"}},63:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(13),s=a.n(c),r=(a(63),a(3)),o=a(23),l=a.n(o),j=Object(n.createContext)(),d=a(1);var b=function(){var e=Object(n.useContext)(j),t=e.playing,a=e.light;return Object(d.jsxs)("header",{className:l.a.header,children:[!t&&!window.matchMedia("(max-width: 500px)").matches&&Object(d.jsx)("div",{style:{display:!a&&"none","margin-left":"".concat(Math.floor(80*Math.random()),"%")},className:l.a.sprite1}),!t&&!window.matchMedia("(max-width: 500px)").matches&&Object(d.jsx)("div",{style:{display:!a&&"none","margin-left":"".concat(Math.floor(80*Math.random()),"%")},className:l.a.sprite2})]})},h=a(49),u=a.n(h);var m=function(){return Object(d.jsx)("body",{children:Object(d.jsx)("main",{className:u.a.mainContainer,children:Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://fontmeme.com/permalink/210504/7e07449c6e32de3ff76e75fd554c1bce.png",alt:"donkey-kong-font",border:"0"})})})})},x=a(36),O=a.n(x),p=a.p+"static/media/dixieB.4d44cd29.gif";var _=function(){var e=Object(n.useContext)(j).playing;return Object(d.jsx)("div",{children:e&&Object(d.jsx)("img",{alt:"",className:O.a.dixieB,src:p})})};var f=function(){return Object(d.jsx)("footer",{className:O.a.footer,children:Object(d.jsx)(_,{})})},g=a(8),v=a(37),C=a(6),S=a.p+"static/media/loading.c7d9f081.gif",y=a.p+"static/media/crankyChair.b39ad12b.gif",k=a.p+"static/media/crankyPlay.54db5f9f.gif";var N=function(e){var t=e.file,a=Object(n.useContext)(j),i=a.playing,c=a.setPlaying,s=Object(n.useState)(!0),r=Object(C.a)(s,2),o=(r[0],r[1]),b=Object(n.useState)(!1),h=Object(C.a)(b,2),u=h[0],m=h[1],x=Object(v.b)({autoplay:!1,src:t,format:"mp3",loop:!0}),O=x.togglePlayPause,p=x.volume;return Object(n.useEffect)((function(){setTimeout((function(){o(!1)}),2e3)}),[]),Object(n.useEffect)((function(){p(.1)}),[p]),Object(d.jsx)("div",{children:u?Object(d.jsx)("img",{src:S,className:l.a.headerImg,alt:""}):Object(d.jsx)("div",{children:Object(d.jsx)("input",{className:l.a.headerImg,onClick:function(){O(),c(!i),m(!0),setTimeout((function(){m(!1)}),300)},type:"image",title:"Click me",src:i?k:y,alt:""})})})},w=a(33),P=a.n(w),M=a.p+"static/media/donkey.068df78d.mp3";var z=function(){return Object(d.jsxs)("nav",{className:P.a.menuContainer,children:[Object(d.jsx)("div",{className:P.a.Cranky,children:Object(d.jsx)(v.a,{children:Object(d.jsx)(N,{file:M})})}),Object(d.jsx)(g.b,{to:"/",children:Object(d.jsx)("button",{className:P.a.home,children:"Home"})}),Object(d.jsx)(g.b,{to:"/projects",children:Object(d.jsx)("button",{children:"Projects"})}),Object(d.jsx)(g.b,{to:"/skills",children:Object(d.jsx)("button",{children:"Skills"})}),Object(d.jsx)(g.b,{to:"about",children:Object(d.jsx)("button",{className:P.a.sobre,children:"About"})})]})},A=a(26),D=a.n(A),R=a(21),L=a.n(R),H=a.p+"static/media/line.977a25c6.png",T=a(46),I=a.n(T),U=a(86),E=a(42),q=a.n(E),B=a(41),F=a.n(B),Q=a(52),K=a.n(Q),G=a(51),J=a.n(G);var Z=function(e){var t=e.projectData,a=e.close;return Object(d.jsxs)("div",{className:q.a.cardContainer,children:[Object(d.jsx)(J.a,{onClick:function(){return a(!1)},className:q.a.close,fontSize:"large",color:"primary"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t.name}),Object(d.jsx)("p",{children:t.description})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("ul",{children:["Tecnologias utilizadas:",t.tech.map((function(e){return Object(d.jsx)("li",{children:e},e)}))]})}),Object(d.jsxs)("div",{className:q.a.links,children:[Object(d.jsx)("a",{href:t.githubLink,without:!0,rel:"noreferrer",target:"_blank",children:Object(d.jsx)(F.a,{fontSize:"large"})}),t.githubPage?Object(d.jsx)("a",{without:!0,rel:"noreferrer",href:t.githubPage,target:"_blank",children:Object(d.jsx)(K.a,{fontSize:"large"})}):""]})]})};var V=function(e){var t=e.data,a=Object(n.useState)(!1),i=Object(C.a)(a,2),c=i[0],s=i[1];return Object(d.jsxs)("div",{className:I.a.CardContainer,children:[Object(d.jsx)("h3",{children:t.name}),Object(d.jsx)("img",{src:t.image,alt:t.name}),Object(d.jsx)("button",{type:"button",onClick:function(){return s(!0)},children:"Ver detalhes"}),Object(d.jsx)(U.a,{open:c,onClose:function(){s(!1)},className:I.a.modal,children:Object(d.jsx)(Z,{close:s,projectData:t})})]})},W=[{name:"App de Receitas",githubLink:"https://github.com/dougfer/App-Receitas",githubPage:"https://dougfer.github.io/App-Receitas/#/",description:"Aplicativo web realizado durante o m\xf3dulo de front-end da Trybe. \xc9 poss\xedvel realizar consultas de receitas, favorit\xe1-las e inici\xe1-las. Feito para a responsividade mobile com as dimens\xf5es indicadas de 375x667. Utilizadas API's externas para consultas.",tech:["React","Context API","React Hooks","CSS"],image:a.p+"static/media/recipe.7a0fd82c.gif"},{name:"Expenses Wallet",githubLink:"https://github.com/dougfer/expenses-wallet",githubPage:"https://dougfer.github.io/expenses-wallet/#/",description:"Projeto realizado durante o m\xf3dulo de front-end da Trybe. \xc9 poss\xedvel realizar um controle de despesas juntamente com a convers\xe3o da moeda a escolha. Utilizadas API's externas para consultas.",tech:["React","Redux","CSS"],image:a.p+"static/media/expenses.27c526d8.gif"},{name:"Movie Card Library",githubLink:"https://github.com/dougfer/moviie-card-CRUD",description:"Projeto realizado durante o m\xf3dulo de front-end da Trybe. \xc9 poss\xedvel realizar consultas, editar e adicionar cards de filmes.",tech:["React","CSS"],image:a.p+"static/media/MovieCardCRUD.491061f3.jpg"}],Y=a(31),X=a.n(Y),$=a(32),ee=a.n($);var te=function(){var e=Object(n.useState)(0),t=Object(C.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(0),s=Object(C.a)(c,2),r=s[0],o=s[1],l=Object(n.useState)(1),j=Object(C.a)(l,2),b=j[0],h=j[1];return Object(d.jsx)("div",{className:L.a.mainContainer,children:Object(d.jsxs)("div",{className:L.a.mainDiv,children:[Object(d.jsxs)("header",{className:L.a.header,children:[Object(d.jsx)("h2",{children:"Projects"}),Object(d.jsx)("img",{src:H,alt:"roots"})]}),window.matchMedia("(max-width: 850px)").matches?Object(d.jsx)("div",{className:L.a.projectContainer,children:Object(d.jsx)(V,{data:W[a]})}):Object(d.jsxs)("div",{className:L.a.projectContainer,children:[Object(d.jsx)(V,{data:W[r]}),Object(d.jsx)(V,{data:W[b]})]}),window.matchMedia("(max-width: 850px)").matches?Object(d.jsxs)("div",{className:L.a.navigate,children:[Object(d.jsx)(X.a,{onClick:function(){i(a-1<0?W.length-1:a-1)},color:"primary",style:{fontSize:60,cursor:"pointer"}}),Object(d.jsx)(ee.a,{onClick:function(){i(a+1===W.length?0:a+1)},color:"primary",style:{fontSize:60,cursor:"pointer"}})]}):"",Object(d.jsxs)("div",{className:L.a.navigate,children:[Object(d.jsx)("span",{children:Object(d.jsx)(X.a,{onClick:function(){r-1<0?(o(W.length-1),h(b-1)):b-1<0?(h(W.length-1),o(r-1)):(o(r-1),h(b-1))},color:"primary",style:{fontSize:60}})}),Object(d.jsx)("span",{children:Object(d.jsx)(ee.a,{onClick:function(){b+1===W.length?(h(0),o(r+1)):r+1===W.length?(o(0),h(b+1)):(o(r+1),h(b+1))},color:"primary",style:{fontSize:60}})})]})]})})},ae=a(27),ne=a.n(ae);var ie=function(){return Object(d.jsx)("div",{className:ne.a.mainContainer,children:Object(d.jsxs)("div",{className:ne.a.mainDiv,children:[Object(d.jsxs)("header",{className:ne.a.header,children:[Object(d.jsx)("h2",{children:"Skills"}),Object(d.jsx)("img",{alt:"",src:H})]}),Object(d.jsx)("div",{className:ne.a.mainSection,children:Object(d.jsx)("section",{className:ne.a.section1,children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"HTML"}),Object(d.jsx)("li",{children:"CSS"}),Object(d.jsx)("li",{children:"JavaScript"}),Object(d.jsx)("li",{children:"React"}),Object(d.jsx)("li",{children:"Redux"}),Object(d.jsx)("li",{children:"Context API"}),Object(d.jsx)("li",{children:"Git"}),Object(d.jsx)("li",{children:"GitHub"}),Object(d.jsx)("li",{children:"Sass"}),Object(d.jsx)("li",{children:"RTL"}),Object(d.jsx)("li",{children:"MySQL"}),Object(d.jsx)("li",{children:"MongoDB"}),Object(d.jsx)("li",{children:"Node.Js"}),Object(d.jsx)("li",{children:"Express"})]})})})]})})},ce=a(22),se=a.n(ce),re=a.p+"static/media/profile.d596252e.png",oe=a(53),le=a.n(oe),je=a(54),de=a.n(je);var be=function(){var e=Object(n.useState)(!1),t=Object(C.a)(e,2),a=t[0],i=t[1];return Object(d.jsx)("div",{className:se.a.mainContainer,children:Object(d.jsxs)("div",{className:se.a.mainDiv,children:[Object(d.jsxs)("header",{className:se.a.header,children:[Object(d.jsx)("h2",{children:"About"}),Object(d.jsx)("img",{src:H,alt:"roots"})]}),Object(d.jsxs)("div",{className:se.a.aboutSection,children:[Object(d.jsx)("div",{style:{display:window.matchMedia("(max-width: 850px)").matches&&a&&"none"},className:se.a.imageSection,children:Object(d.jsx)("img",{src:re,alt:"Profile"})}),Object(d.jsxs)("div",{style:{display:window.matchMedia("(max-width: 850px)").matches&&!a&&"none"},className:se.a.dataSection,children:[Object(d.jsx)("h4",{children:"Ol\xe1, meu nome \xe9"}),Object(d.jsx)("h2",{children:"Douglas Ferreira Pinto."}),Object(d.jsx)("p",{children:"Residente de Belo Horizonte/MG \u2665, sou uma pessoa tranquila, adoro conhecer novas tecnologias, jogos, assistir filmes e s\xe9ries."}),Object(d.jsx)("p",{children:"Atrav\xe9s do curso de Desenvolvimento Web na Trybe, percebi que encontrei que encontrei a minha voca\xe7\xe3o e paix\xe3o nos c\xf3digos \u2665 "}),Object(d.jsx)("p",{children:"Com muita perseveran\xe7a, sigo na busca pela evolu\xe7\xe3o da vida profissional e pessoal."}),Object(d.jsxs)("footer",{children:["Gostou ?",Object(d.jsx)("br",{}),"Entre em contato:",Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("a",{without:!0,rel:"noreferrer",href:"https://www.linkedin.com/in/douglas-ferreira-a74279b8/",target:"_blank",children:Object(d.jsx)(le.a,{style:{fontSize:40}})}),Object(d.jsx)("a",{without:!0,rel:"noreferrer",href:"https://web.whatsapp.com/send?phone=5531993249396",target:"_blank",children:Object(d.jsx)(de.a,{style:{fontSize:40}})}),Object(d.jsx)("a",{without:!0,rel:"noreferrer",href:"https://github.com/dougfer",target:"_blank",children:Object(d.jsx)(F.a,{style:{fontSize:40}})})]})]})]}),window.matchMedia("(max-width: 850px)").matches?Object(d.jsxs)("div",{className:se.a.icons,children:[Object(d.jsx)("span",{onClick:function(){return i(!1)},children:Object(d.jsx)(X.a,{color:"primary",style:{fontSize:60,display:!a&&"none",cursor:"pointer"}})}),Object(d.jsx)("span",{onClick:function(){return i(!0)},children:Object(d.jsx)(ee.a,{color:"primary",style:{fontSize:60,display:a&&"none",cursor:"pointer"}})})]}):""]})]})})},he=a(56),ue=a.n(he),me=a(55),xe=a.n(me);var Oe=function(){return Object(d.jsxs)("div",{className:xe.a.menuContainer,children:[Object(d.jsx)(g.b,{to:"/",children:Object(d.jsx)("button",{children:"Home"})}),Object(d.jsx)(g.b,{to:"/projects",children:Object(d.jsx)("button",{children:"Projects"})}),Object(d.jsx)(g.b,{to:"/skills",children:Object(d.jsx)("button",{children:"Skills"})}),Object(d.jsx)(g.b,{to:"about",children:Object(d.jsx)("button",{children:"About"})})]})};var pe=function(){var e=Object(n.useContext)(j).playing;return Object(d.jsxs)("div",{className:e?D.a.claro:D.a.escuro,children:[Object(d.jsx)(g.b,{to:"/menu",children:Object(d.jsx)(ue.a,{style:{fontSize:50},className:D.a.menuIcon,color:"secondary"})}),Object(d.jsx)(b,{}),Object(d.jsxs)("div",{className:D.a.divs,children:[Object(d.jsx)(z,{}),Object(d.jsx)("div",{className:D.a.routeContainer,children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/",component:m}),Object(d.jsx)(r.a,{exact:!0,path:"/projects",component:te}),Object(d.jsx)(r.a,{exact:!0,path:"/skills",component:ie}),Object(d.jsx)(r.a,{exact:!0,path:"/about",component:be}),Object(d.jsx)(r.a,{exact:!0,path:"/menu",component:Oe})]})})]}),Object(d.jsx)(f,{})]})},_e=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,88)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};var fe=function(e){var t=e.children,a=Object(n.useState)(!1),i=Object(C.a)(a,2),c=i[0],s=i[1],r=Object(n.useState)(!1),o=Object(C.a)(r,2),l=o[0],b=o[1],h=Object(n.useState)(!1),u=Object(C.a)(h,2),m=u[0],x=u[1],O=function(){setInterval((function(){c||(b(!0),setTimeout((function(){b(!1)}),1e3))}),5e3)};Object(n.useEffect)((function(){O(),document.title="Meu Portf\xf3lio"}),[]);var p={playing:c,setPlaying:s,setLight:b,light:l,lightning:O,dix:m,setDix:x};return Object(d.jsx)(j.Provider,{value:p,children:t})};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(fe,{children:Object(d.jsx)(g.a,{children:Object(d.jsx)(pe,{})})})}),document.getElementById("root")),_e()}},[[71,1,2]]]);
//# sourceMappingURL=main.6f6d2994.chunk.js.map