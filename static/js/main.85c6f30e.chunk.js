(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{62:function(e,t,s){},72:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(0),c=s(18),i=s.n(c),l=(s(62),s(17)),r=s(87),o=s(35),d=s.n(o),j=s(38),m=s.n(j),b=[{key:1,name:"Home",path:"#home"},{key:2,name:"About",path:"#about"},{key:3,name:"Services",path:"#services"},{key:4,name:"Skills",path:"#skills"},{key:5,name:"Contact",path:"#contact"}];var h=function(){var e=Object(a.useState)("navbar"),t=Object(l.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)({listClass:"menu",button:Object(n.jsx)(d.a,{style:{color:"#fff"}}),toggleStatus:!1}),o=Object(l.a)(i,2),j=o[0],h=o[1],x=function(){0==j.toggleStatus?h((function(e){return{listClass:"menu active",button:Object(n.jsx)(m.a,{style:{color:"#fff"}}),toggleStatus:!e.toggleStatus}})):1==j.toggleStatus&&h((function(e){return{listClass:"menu",button:Object(n.jsx)(d.a,{style:{color:"#fff"}}),toggleStatus:!e.toggleStatus}}))};return window.addEventListener("scroll",(function(){window.scrollY>20?c("navbar stickyNav"):c("navbar")})),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("nav",{className:s,children:Object(n.jsxs)("div",{className:"max-width",children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsxs)("a",{href:"#home",children:["zidan",Object(n.jsx)("span",{children:"mehedi"})]})}),Object(n.jsx)("ul",{className:j.listClass,children:b.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)("a",{onClick:x,href:e.path,children:e.name})},t)}))}),Object(n.jsx)("div",{className:"menu-btn",children:Object(n.jsx)(r.a,{onClick:x,"aria-label":"MenuRoundedIcon",children:j.button})})]})})})};var x=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("h2",{className:"title",children:e.value})})};var O=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("section",{className:e.sectionClassName,id:e.sectionId,children:Object(n.jsxs)("div",{className:e.widthClassName,children:[Object(n.jsx)(x,{value:e.titleValue}),Object(n.jsx)("div",{className:e.contentClassName,children:e.content})]})})})},u=s.p+"static/media/z.8a631dc8.jpg",g=s(33);function p(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{src:u}),Object(n.jsx)("div",{className:"text-1",children:"Hello, My name is"}),Object(n.jsx)("div",{className:"text-2",children:"Mehedi Hassan Zidan"}),Object(n.jsxs)("div",{className:"text-3",children:["and I am a ",Object(n.jsx)("span",{children:Object(n.jsx)(g.a,{steps:["Web Developer",1e3," Web Designer",1e3],wrapper:"b",loop:1/0})})]})]})}var v=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(O,{sectionClassName:"home",sectionId:"home",widthClassName:"max-width",contentClassName:"home-content",content:Object(n.jsx)(p,{})})})},N=s.p+"static/media/Zidan Bro.c6d0ea3c.jpeg",f=s.p+"static/media/Mehedi_Hassan_Zidan.ed386de9.pdf";function z(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"column left",children:Object(n.jsx)("img",{src:N})}),Object(n.jsxs)("div",{className:"column right",children:[Object(n.jsxs)("div",{className:"text",children:["Hello I'm Zidan. I'm a ",Object(n.jsx)("span",{children:Object(n.jsx)(g.a,{steps:["Web Developer",1e3," Web Designer",1e3],wrapper:"b",loop:1/0})})]}),Object(n.jsx)("p",{children:"I am a Final Year Undergrade Student of Computer Science and Engineering. Currently I am working on Web Development Projects. I have 1 year of experinece on desgning and developing innovative Web Applications. I have skills on building both Static and Dynamic Web Applications. I use modern Web Technologies while building Websites and Web Applications. I have strong professional, presentational and communicational skills to communicate with clients and I always try provide best of my services to them. To know more about me, please feel free to go through my resume attached below. Thank You for visiting my website."}),Object(n.jsx)("a",{id:"download",href:f,traget:"_blank",children:"Download Resume"})]})]})}var y=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(O,{sectionClassName:"about",sectionId:"about",widthClassName:"max-width",contentClassName:"about-content",titleValue:"About Me",content:Object(n.jsx)(z,{})})})},D=s(39),M=s.n(D),w=s(40),A=s.n(w);function I(){var e=[{key:1,serviceIcon:Object(n.jsx)(M.a,{className:"icon"}),serviceName:"Web Design",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veritatis enim perspiciatis, rerum animi a."},{key:2,serviceIcon:Object(n.jsx)(A.a,{className:"icon"}),serviceName:"Web Developing",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veritatis enim perspiciatis, rerum animi a."}];return Object(n.jsx)(n.Fragment,{children:e.map((function(e,t){return Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"box",children:[e.serviceIcon,Object(n.jsx)("div",{className:"text",children:e.serviceName}),Object(n.jsx)("p",{children:e.description})]})},t)}))})}var E=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(O,{sectionClassName:"services",sectionId:"services",widthClassName:"max-width",contentClassName:"serv-content",titleValue:"My Services",content:Object(n.jsx)(I,{})})})},Y=s.p+"static/media/laravel.8b2939ca.png",J=s.p+"static/media/react.06fec591.png",P=s.p+"static/media/php.e78fd4b4.png",T=s.p+"static/media/js.afcba61e.png",Z=s.p+"static/media/css.9d56f943.png",G=s(54);function H(){var e=[{key:1,serviceIcon:Object(n.jsx)("img",{src:Y,alt:"Laravel icon"}),serviceName:"Laravel",description:"A flexible and reliable PHP Framework."},{key:2,serviceIcon:Object(n.jsx)("img",{src:J,alt:"React icon"}),serviceName:"ReactJs",description:"A flexible and reliable JavaScript Library."},{key:3,serviceIcon:Object(n.jsx)("img",{src:P,alt:"PHP icon"}),serviceName:"PHP",description:"A server side programming language."},{key:4,serviceIcon:Object(n.jsx)("img",{src:T,alt:"JS icon"}),serviceName:"JavaScript",description:"A cient side scripting or programming language."},{key:5,serviceIcon:Object(n.jsx)("img",{src:"data:image/png;base64,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",alt:"MySql icon"}),serviceName:"MySql",description:"An open-source relational database management system."},{key:6,serviceIcon:Object(n.jsx)("img",{src:Z,alt:"CSS icon"}),serviceName:"CSS",description:"A style sheet language to designe Web page elements."},{key:7,serviceIcon:Object(n.jsx)("img",{src:"data:image/png;base64,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",alt:"HTML icon"}),serviceName:"HTML",description:"The standard markup language for Web pages."}];return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(G.a,{breakPoints:[{width:500,itemsToShow:1},{width:768,itemsToShow:2},{width:1e3,itemsToShow:3},{width:1300,itemsToShow:4}],children:e.map((function(e){return Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{children:e.serviceIcon}),Object(n.jsx)("div",{className:"text",children:e.serviceName}),Object(n.jsx)("p",{children:e.description})]})},e.key)}))})})}var F=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(O,{sectionClassName:"skills",sectionId:"skills",widthClassName:"max-width",contentClassName:"carousel owl-carousel",titleValue:"My Skills",content:Object(n.jsx)(H,{})})})},k=s(47),S=s.n(k),W=s(48),C=s.n(W),B=s(49),R=s.n(B),Q=s(50),K=s.n(Q),X=s(51),L=s.n(X),V=s(52),U=s.n(V),q=s(46),_=s.n(q),$=function(e){return Object(n.jsxs)("div",{className:"row",children:[e.icon,Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)("div",{className:"head",children:e.head}),Object(n.jsx)("div",{className:"sub-title",children:e.sub_title})]})]})},ee=function(e){return Object(n.jsx)("a",{href:e.href,target:"_blank",children:Object(n.jsx)(r.a,{className:"icon-button "+e.site,children:e.icon})})};function te(){var e=[{icon:Object(n.jsx)(S.a,{className:"icon"}),head:"Name",sub_title:"Mehedi Hassan Zidan"},{icon:Object(n.jsx)(C.a,{className:"icon"}),head:"Address",sub_title:"Narayanganj, Bangladesh"},{icon:Object(n.jsx)(R.a,{className:"icon"}),head:"E-Mail",sub_title:"mkzzidan786@gmail.com"}],t=[{href:"http://facebook.com/zidanMehedi.171/",site:"fb",icon:Object(n.jsx)(K.a,{className:" icon"})},{href:"http://linkedin.com/in/zidanmehedi/",site:"ld",icon:Object(n.jsx)(L.a,{className:"icon"})},{href:"http://github.com/zidanMehedi",site:"gh",icon:Object(n.jsx)(U.a,{className:"icon"})}];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"column left",children:[Object(n.jsx)("div",{className:"text",children:"Contact With Me"}),Object(n.jsx)("p",{children:"You can find me on the given information below. To contact with me, Please feel free to message me."}),Object(n.jsx)("div",{className:"icons",children:e.map((function(e,t){return Object(n.jsx)($,{icon:e.icon,head:e.head,sub_title:e.sub_title},t)}))}),Object(n.jsx)("div",{className:"social-icon",children:t.map((function(e,t){return Object(n.jsx)(ee,{href:e.href,site:e.site,icon:e.icon},t)}))})]}),Object(n.jsxs)("div",{className:"column right",children:[Object(n.jsx)("div",{className:"text",children:"Message Me"}),Object(n.jsx)("span",{id:"message",children:"Your Message Has Been Sent!!!"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=document.getElementById("message"),s=document.getElementById("name"),n=document.getElementById("email"),a=document.getElementById("invalid_email"),c=document.getElementById("invalid_name");return""===e.target[0].value||""===e.target[1].value||""===e.target[2].value||""===e.target[3].value?(t.innerText="Please fill up all the boxes!!",t.style.color="crimson",a.style.color="transparent",c.style.color="transparent",s.style.border="1px solid RGB(13, 151 , 129)",n.style.border="1px solid RGB(13, 151 , 129)",!1):/^[A-Za-z. ]{3,}$/.test(s.value)?/^[A-Za-z_.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/.test(n.value)?(_.a.sendForm("service_a3vaprs","zidanmehedigmail",e.target,"user_aTSNZ5f6VxQCfl4ZAyyGs").then((function(e){t.innerText="Your message has been sent successfully!!",t.style.color="green"}),(function(e){t.innerText="Message Sending Failed!!",t.style.color="crimson",a.style.color="transparent",c.style.color="transparent",s.style.border="1px solid RGB(13, 151 , 129)",n.style.border="1px solid RGB(13, 151 , 129)"})),void e.target.reset()):(t.style.color="transparent",s.style.border="1px solid RGB(13, 151 , 129)",c.style.color="transparent",a.innerText="** Please write a valid email",a.style.color="crimson",n.style.border="1px solid crimson",n.value="",!1):(t.style.color="transparent",a.style.color="transparent",c.innerText="** Please write a valid name",c.style.color="crimson",s.style.border="1px solid crimson",n.style.border="1px solid RGB(13, 151 , 129)",s.value="",!1)},children:[Object(n.jsxs)("div",{className:"fields",children:[Object(n.jsxs)("div",{className:"field name",children:[Object(n.jsx)("input",{type:"text",id:"name",placeholder:"Name",name:"name"}),Object(n.jsx)("span",{className:"invalid_alert",id:"invalid_name",children:"Name"})]}),Object(n.jsxs)("div",{className:"field email",children:[Object(n.jsx)("input",{type:"text",id:"email",placeholder:"Email",name:"email"}),Object(n.jsx)("span",{className:"invalid_alert",id:"invalid_email",children:"Email"})]})]}),Object(n.jsx)("div",{className:"field",children:Object(n.jsx)("input",{type:"text",placeholder:"Subject",name:"subject",id:"subject"})}),Object(n.jsx)("div",{className:"field textarea",children:Object(n.jsx)("textarea",{cols:"30",rows:"10",placeholder:"Message",name:"message",id:"textMessage"})}),Object(n.jsx)("div",{className:"button",children:Object(n.jsx)("button",{type:"submit",name:"submit",children:" Send "})})]})]})]})}var se=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(O,{sectionClassName:"contact",sectionId:"contact",widthClassName:"max-width",contentClassName:"contact-content",titleValue:"Contact",content:Object(n.jsx)(te,{})})})};var ne=function(){return Object(n.jsx)("footer",{children:Object(n.jsxs)("span",{children:["Created by ",Object(n.jsx)("a",{href:"#",children:"zidanmehedi"})," | ",Object(n.jsx)("span",{children:"\xa9"})," 2020 All Rights Reserved"]})})},ae=s(53),ce=s.n(ae);var ie=function(){var e=Object(a.useState)("scroll-up-btn-off"),t=Object(l.a)(e,2),s=t[0],c=t[1];return document.addEventListener("scroll",(function(){window.scrollY>200?c("scroll-up-btn"):window.scrollY<=200&&c("scroll-up-btn-off")})),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{id:s,children:Object(n.jsx)("a",{href:"#home",children:Object(n.jsx)(r.a,{children:Object(n.jsx)(ce.a,{id:"reset"})})})})})},le=s.p+"static/media/loader2.cfc783bb.gif";var re=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",width:"100%",background:"RGB(2, 0 , 0)"},children:Object(n.jsx)("img",{src:le,style:{height:"100px",width:"170px"}})})})};function oe(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ie,{}),Object(n.jsx)(h,{}),Object(n.jsx)(v,{}),Object(n.jsx)(y,{}),Object(n.jsx)(E,{}),Object(n.jsx)(F,{}),Object(n.jsx)(se,{}),Object(n.jsx)(ne,{})]})}var de=function(){var e=Object(a.useState)(Object(n.jsx)(re,{})),t=Object(l.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){setTimeout((function(){c(Object(n.jsx)(oe,{}))}),1e3)}),[]),Object(n.jsx)(n.Fragment,{children:s})};i.a.render(Object(n.jsx)(de,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.85c6f30e.chunk.js.map