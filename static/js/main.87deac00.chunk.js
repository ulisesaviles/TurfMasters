(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),i=a(17),o=a.n(i),r=(a(25),a(11)),l=(a(26),a(4)),u=a(2),d=function(){var e=Object(u.e)().lang;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"en"==e?"Home":"Inicio"}),Object(s.jsx)(l.b,{to:"/product/mochila",children:"Product"})]})},j=function(){return Object(s.jsx)("h1",{children:"Products"})},m=function(e){return Object(s.jsx)("h1",{children:"About"})},p=function(){return Object(s.jsx)("h1",{children:"Contact"})},h=function(){return Object(s.jsx)("h1",{children:"Installation"})},b=function(){return Object(s.jsx)("h1",{children:"Projects"})},f=function(){var e=Object(u.e)().productName;return console.log(e),Object(s.jsx)("h1",{children:"Product: ".concat(e)})},O=a.p+"static/media/logo.174abdf4.png",v=a(19),g=a(7),x=function(){var e=Object(n.useState)("es"),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)("lang selected-lang"),o=Object(r.a)(i,2),x=o[0],T=o[1],N=Object(n.useState)("lang non-selected-lang"),C=Object(r.a)(N,2),M=C[0],k=C[1],S=Object(n.useState)("pop-up-menu"),A=Object(r.a)(S,2),y=A[0],I=A[1];return Object(s.jsxs)(l.a,{children:[Object(s.jsx)("div",{className:y,children:Object(s.jsxs)("ul",{className:"pum-nav-items",children:[Object(s.jsx)("li",{className:"pum-nav-item",children:Object(s.jsx)(l.b,{className:"nav-item-link",to:"/TurfMasters/".concat(a),onClick:function(){I("pop-up-menu")},children:g["nav-bar"].home[a]})}),Object(s.jsx)("li",{className:"pum-nav-item",children:Object(s.jsx)(l.b,{className:"nav-item-link",to:"/TurfMasters/products/".concat(a),onClick:function(){I("pop-up-menu")},children:g["nav-bar"].products[a]})}),Object(s.jsx)("li",{className:"pum-nav-item",children:Object(s.jsx)(l.b,{className:"nav-item-link",to:"/TurfMasters/installation/".concat(a),onClick:function(){I("pop-up-menu")},children:g["nav-bar"].installation[a]})}),Object(s.jsx)("li",{className:"pum-nav-item",children:Object(s.jsx)(l.b,{className:"nav-item-link",to:"/TurfMasters/projects/".concat(a),onClick:function(){I("pop-up-menu")},children:g["nav-bar"].projects[a]})}),Object(s.jsx)("li",{className:"pum-nav-item",children:Object(s.jsx)(l.b,{className:"nav-item-link",to:"/TurfMasters/about/".concat(a),onClick:function(){I("pop-up-menu")},children:g["nav-bar"].about[a]})}),Object(s.jsx)("li",{className:"pum-nav-item",children:Object(s.jsx)(l.b,{className:"nav-item-link",to:"/TurfMasters/contact/".concat(a),onClick:function(){I("pop-up-menu")},children:Object(s.jsx)("div",{className:"contact",children:g["nav-bar"].contact[a]})})})]})}),Object(s.jsxs)("nav",{className:"nav",children:[Object(s.jsx)("div",{onClick:function(){I("pop-up-menu"==y?"pop-up-menu pum-appear":"pop-up-menu")},children:Object(s.jsx)(v.MdMenu,{className:"burguer-menu"})}),Object(s.jsx)(l.b,{className:"nav-item-link",to:"/TurfMasters/".concat(a),onClick:function(){I("pop-up-menu")},children:Object(s.jsx)("img",{src:O,alt:"TurfMasters",className:"nav-logo"})}),Object(s.jsxs)("ul",{className:"nav-items",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.b,{className:"nav-item-link",to:"/TurfMasters/".concat(a),children:g["nav-bar"].home[a]})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.b,{className:"nav-item-link",to:"/TurfMasters/products/".concat(a),children:g["nav-bar"].products[a]})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.b,{className:"nav-item-link",to:"/TurfMasters/installation/".concat(a),children:g["nav-bar"].installation[a]})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.b,{className:"nav-item-link",to:"/TurfMasters/projects/".concat(a),children:g["nav-bar"].projects[a]})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.b,{className:"nav-item-link",to:"/TurfMasters/about/".concat(a),children:g["nav-bar"].about[a]})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.b,{className:"nav-item-link",to:"/TurfMasters/contact/".concat(a),children:Object(s.jsx)("div",{className:"contact",children:g["nav-bar"].contact[a]})})})]})]}),Object(s.jsx)("div",{className:"toggle",onClick:function(){"es"==a?(c("en"),k("lang selected-lang"),T("lang non-selected-lang")):(c("es"),k("lang non-selected-lang"),T("lang selected-lang"))},children:Object(s.jsxs)(l.b,{to:function(){for(var e="",t=window.location.href,s=1,n=0;s<t.length;s++)if("/"==t.charAt(s)&&n++,3==n){e=t.substr(s,t.length-s);break}if("TurfMasters"==t.substr(t.length-11,t.length-1))return e+("en"==a?"/es":"/en");for(var c=1;;c++)if("/"==e.charAt(e.length-c))return e.substr(0,e.length-c+1)+("en"==a?"es":"en")},children:[Object(s.jsx)("h1",{className:x,children:"ES"}),Object(s.jsx)("h1",{className:M,children:"EN"})]})}),Object(s.jsx)(u.a,{path:"/TurfMasters/:lang",exact:!0,component:d}),Object(s.jsx)(u.a,{path:"/TurfMasters",exact:!0,component:d}),Object(s.jsx)(u.a,{path:"/TurfMasters/products/:lang",component:j}),Object(s.jsx)(u.a,{path:"/TurfMasters/product/:productName/:lang",component:f}),Object(s.jsx)(u.a,{path:"/TurfMasters/about/:lang",component:m}),Object(s.jsx)(u.a,{path:"/TurfMasters/contact/:lang",component:p}),Object(s.jsx)(u.a,{path:"/TurfMasters/installation/:lang",component:h}),Object(s.jsx)(u.a,{path:"/TurfMasters/projects/:lang",component:b})]})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),T()},7:function(e){e.exports=JSON.parse('{"nav-bar":{"home":{"es":"INICIO","en":"HOME"},"products":{"es":"PRODUCTOS","en":"PRODUCTS"},"installation":{"es":"INSTALACI\xd3N","en":"INSTALLATION"},"projects":{"es":"CLIENTES","en":"CLIENTS"},"about":{"es":"\xbfQUI\xc9NES SOMOS?","en":"ABOUT US"},"contact":{"es":"\xa1CONTACT US!","en":"\xa1CONT\xc1CTANOS!"}},"footer":{"copyright":{"es":"Copyright \xa9 2021 Turf Masters - Todos los derechos reservados.","en":"Copyright \xa9 2021 Turf Masters - All rights reserved."},"author":"Ulises Aviles"},"home":{"section2":{"title":{"es":"\xbfPor qu\xe9 turf masters?","en":"Why turf masters?"},"content":{"es":"Turf masters es una empresa enfocada totalmente a entregar de la mejor calidad a nuestros clientes a trav\xe9s de la extensa gama de productos con los que contamos. \xa1Contacta con nuestros asesores expertos para encontrar el producto perfecto para ti!","en":"Turf masters is a company totally focused on delivering the best quality to our clients through the extensive range of products that we have. Contact our expert advisors to find the perfect product for you!"}},"section3":{"title":{"es":"Nuestros productos","en":"Our products"},"content":{"es":"Los productos de Turf Masters son todos l\xedderes de calidad de la industria del c\xe9sped artificial. La certificaci\xf3n FIFA con la que contamos en cada uno de nuestros productos acredita ese hecho, es por ello que clientes tan grandes como lo son los equipos de primera divisi\xf3n de futbol soccer de la liga MX conf\xedan en la calidad de Turf Masters.","en":"Turf Masters products are all quality leaders in the artificial grass industry. The FIFA certification that we have in each of our products proves this fact, which is why clients as large as the first division soccer football teams of the MX league trust in the quality of Turf Masters."}},"section4":{"title":{"es":"Proyectos realizados","en":"Fulfilled projects"},"projects":[{"title":{"es":"Estadio Caliente","en":"Caliente Stadium"},"content":{"es":"Estadio Caliente es el estadio en donde debuta el equipo de primera divisi\xf3n de futbol \'Xoloitzcuintles de Tijuana\'.","en":"Caliente Stadium is the stadium where the first division soccer team \'Xoloitzcuintles de Tijuana\' makes its debut."},"img-url":"./images/clients/xolos.jpg"},{"title":{"es":"Estadio Akron","en":"Akron Stadium"},"content":{"es":"Estadio Akron es el estadio en donde debuta el equipo de primera divisi\xf3n de futbol \'Chivas de Guadalajara\'.","en":"Akron Stadium is the stadium where the first division soccer team \'Chivas de Guadalajara\' makes its debut."},"img-url":"./images/clients/chivas.jpg"},{"title":{"es":"Estadio Chevron","en":"Chevron Stadium"},"content":{"es":"Estadio Chevron es el estadio en donde debuta el equipo de primera divisi\xf3n de beisbol \'Toros de Tijuana\'.","en":"Chevron Stadium is the stadium where the first division baseball team \'Toros de Tijuana\' makes its debut."},"img-url":"./images/clients/toros.jpg"},{"title":{"es":"Palacio municipal","en":"City Hall"},"content":{"es":"El palacio municipal de Tijuana, B.C., M\xe9xico, constru\xeddo en 2009, cuenta con un jard\xedn de 1km cuadrado con c\xe9sped de Turf Masters.","en":"The City Hall of Tijuana, B.C., Mexico, built in 2009, has a 1km square garden with Turf Masters lawns."},"img-url":"./images/clients/palacio.jpg"}]}},"poducts":{"title":{"es":"Cat\xe1logo","en":"Catalouge"},"sections":[{"title":{"es":"Pasto sint\xe9tico","en":"Synthetic grass"}}]}}')}},[[32,1,2]]]);
//# sourceMappingURL=main.87deac00.chunk.js.map