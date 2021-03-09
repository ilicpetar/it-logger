(this["webpackJsonpit-logger"]=this["webpackJsonpit-logger"]||[]).push([[0],{24:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(7),l=c.n(n),i=(c(23),c(3)),r=c.n(i),j=(c(24),c(0)),o=function(){return Object(j.jsx)("nav",{style:{marginBottom:"30px"},className:"blue",children:Object(j.jsx)("div",{className:"nav-wrapper",children:Object(j.jsx)("form",{children:Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("input",{id:"search",type:"search",required:!0}),Object(j.jsx)("label",{className:"label-icon",htmlFor:"search",children:Object(j.jsx)("i",{className:"material-icons",children:"search"})}),Object(j.jsx)("i",{className:"material-icons",children:"close"})]})})})})},d=c(15),b=c.n(d),h=function(e){var t=e.log;return Object(j.jsx)("li",{className:"collection-item",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{href:"#edit-log-modal",className:"modal-trigger ".concat(t.attention?"red-text":"blue-text"),children:t.message}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{className:"grey-text",children:[Object(j.jsxs)("span",{className:"black-text",children:["ID #",t.id]})," last updated by"," ",Object(j.jsx)("span",{className:"black-text",children:t.tech})," on"," ",Object(j.jsx)(b.a,{format:"MMMM Do YYYY, h:mm:ss a",children:t.date})]}),Object(j.jsx)("a",{href:"#",className:"secondary-content",children:Object(j.jsx)("i",{className:"material-icons grey-text",children:"delete"})})]})})},u=function(){return Object(j.jsx)("div",{className:"progress blue lighten-4",children:Object(j.jsx)("div",{className:"indeteminate blue"})})},m=c(9),O=c(6),x=c.n(O),f=c(8),g="GET_LOGS",v="SET_LOADING",N="LOGS_ERROR",p=function(){return{type:v}},S=Object(m.b)((function(e){return{log:e.log}}),{getLogs:function(){return function(){var e=Object(f.a)(x.a.mark((function e(t){var c,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(),e.next=4,fetch("/logs");case 4:return c=e.sent,e.next=7,c.json();case 7:a=e.sent,t({type:g,payload:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:N,payload:e.t0.response.data});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.log,c=t.logs,s=t.loading,n=e.getLogs;return Object(a.useEffect)((function(){n()}),[]),s||null===c?Object(j.jsx)(u,{}):Object(j.jsxs)("ul",{className:"collection with-header",children:[Object(j.jsx)("li",{className:"collection-header",children:Object(j.jsx)("h4",{className:"center",children:"System Logs"})}),s||0!==c.length?c.map((function(e){return Object(j.jsx)(h,{log:e},e.id)})):Object(j.jsx)("p",{className:"center",children:"No logs to show ... "})]})})),y=function(){return Object(j.jsxs)("div",{className:"fixed-action-btn",children:[Object(j.jsx)("a",{href:"#add-log-modal",className:"btn-floating btn-large blue darken-2 modal-trigger",children:Object(j.jsx)("i",{className:"large material-icons",children:"add"})}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#tech-list-modal",className:"btn-floating green modal-trigger",children:Object(j.jsx)("i",{className:"material-icons",children:"person"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#add-tech-modal",className:"btn-floating red modal-trigger",children:Object(j.jsx)("i",{className:"material-icons",children:"person_add"})})})]})]})},w=c(2),k={width:"75%",height:"75%"},C=function(){var e=Object(a.useState)(""),t=Object(w.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),l=Object(w.a)(n,2),i=l[0],o=l[1],d=Object(a.useState)(""),b=Object(w.a)(d,2),h=b[0],u=b[1];return Object(j.jsxs)("div",{id:"add-log-modal",className:"modal",style:k,children:[Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsx)("h4",{children:"Enter System Log"}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("input",{type:"text",name:"message",value:c,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"message",className:"active",children:"Log Message"})]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"input-fied",children:Object(j.jsxs)("select",{name:"tech",value:h,className:"browser-default",onChange:function(e){return u(e.target.value)},children:[Object(j.jsx)("option",{value:"",disabled:!0,children:"Select Technican"}),Object(j.jsx)("option",{value:"John Doe",children:"John Doe"}),Object(j.jsx)("option",{value:"Sam Smith",children:"Sam Smith"}),Object(j.jsx)("option",{value:"Sara Wilson",children:"Sara Wilson"})]})})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"input-field",children:Object(j.jsx)("p",{children:Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",className:"filled-in",checked:i,value:i,onChange:function(e){return o(!i)}}),Object(j.jsx)("span",{children:"Needs Attention"})]})})})})]}),Object(j.jsx)("div",{className:"modal-footer",children:Object(j.jsx)("a",{href:"#!",onClick:function(){""===c||""===h?r.a.toast({html:"Please enter a message and tech"}):(console.log(c,i,h),s(""),u(""),o(!1))},className:"modal-close waves-effect blue waves-light btn",children:"Enter"})})]})},L={width:"75%",height:"75%"},E=function(){var e=Object(a.useState)(""),t=Object(w.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),l=Object(w.a)(n,2),i=l[0],o=l[1],d=Object(a.useState)(""),b=Object(w.a)(d,2),h=b[0],u=b[1];return Object(j.jsxs)("div",{id:"edit-log-modal",className:"modal",style:L,children:[Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsx)("h4",{children:"Enter System Log"}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("input",{type:"text",name:"message",value:c,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"message",className:"active",children:"Log Message"})]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"input-fied",children:Object(j.jsxs)("select",{name:"tech",value:h,className:"browser-default",onChange:function(e){return u(e.target.value)},children:[Object(j.jsx)("option",{value:"",disabled:!0,children:"Select Technican"}),Object(j.jsx)("option",{value:"John Doe",children:"John Doe"}),Object(j.jsx)("option",{value:"Sam Smith",children:"Sam Smith"}),Object(j.jsx)("option",{value:"Sara Wilson",children:"Sara Wilson"})]})})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"input-field",children:Object(j.jsx)("p",{children:Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",className:"filled-in",checked:i,value:i,onChange:function(e){return o(!i)}}),Object(j.jsx)("span",{children:"Needs Attention"})]})})})})]}),Object(j.jsx)("div",{className:"modal-footer",children:Object(j.jsx)("a",{href:"#!",onClick:function(){""===c||""===h?r.a.toast({html:"Please enter a message and tech"}):(console.log(c,i,h),s(""),u(""),o(!1))},className:"modal-close waves-effect blue waves-light btn",children:"Enter"})})]})},F=function(){var e=Object(a.useState)(""),t=Object(w.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),l=Object(w.a)(n,2),i=l[0],o=l[1];return Object(j.jsxs)("div",{id:"add-tech-modal",className:"modal",children:[Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsx)("h4",{children:"New Technician"}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("input",{type:"text",name:"firstName",value:c,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"firstName",className:"active",children:"First Name"})]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("input",{type:"text",name:"lasttName",value:i,onChange:function(e){return o(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"lastName",className:"active",children:"Last Name"})]})})]}),Object(j.jsx)("div",{className:"modal-footer",children:Object(j.jsx)("a",{href:"#!",onClick:function(){""===c||""===i?r.a.toast({html:"Please enter a firstName and lastName"}):(console.log(c,i),s(""),o(""))},className:"modal-close waves-effect blue waves-light btn",children:"Enter"})})]})},D=function(e){var t=e.tech;return Object(j.jsx)("li",{className:"collection-item",children:Object(j.jsxs)("div",{children:[t.firstName," ",t.lastName,Object(j.jsx)("a",{href:"#!",className:"secondary-content",children:Object(j.jsx)("i",{className:"material-icons grey-text",children:"delete"})})]})})},T=function(){var e=Object(a.useState)([]),t=Object(w.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),l=Object(w.a)(n,2),i=l[0],r=l[1];Object(a.useEffect)((function(){o()}),[]);var o=function(){var e=Object(f.a)(x.a.mark((function e(){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,fetch("/techs");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,s(c),r(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{id:"tech-list-modal",className:"modal",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsx)("h4",{children:"Technician List"}),Object(j.jsx)("ul",{className:"collection",children:!i&&c.map((function(e){return Object(j.jsx)(D,{tech:e},e.id)}))})]})})},M=c(4),J=c(17),I=c(18),P=c(5),W={logs:null,current:null,loading:!1,error:null},A=Object(M.combineReducers)({log:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(P.a)(Object(P.a)({},e),{},{logs:t.payload,loading:!1});case v:return Object(P.a)(Object(P.a)({},e),{},{loading:!0});case N:return Object(P.a)(Object(P.a)({},e),{},{error:t.payload});default:return e}}}),G=[I.a],R=Object(M.createStore)(A,{},Object(J.composeWithDevTools)(M.applyMiddleware.apply(void 0,G))),Y=function(){return Object(a.useEffect)((function(){r.a.AutoInit()})),Object(j.jsx)(m.a,{store:R,children:Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)(o,{}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(y,{}),Object(j.jsx)(C,{}),Object(j.jsx)(E,{}),Object(j.jsx)(F,{}),Object(j.jsx)(T,{}),Object(j.jsx)(S,{})]})]})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),a(e),s(e),n(e),l(e)}))};l.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(Y,{})}),document.getElementById("root")),_()}},[[34,1,2]]]);
//# sourceMappingURL=main.237f4cd9.chunk.js.map