(this["webpackJsonpredux-first-app"]=this["webpackJsonpredux-first-app"]||[]).push([[0],{14:function(t,n,e){},15:function(t,n,e){},23:function(t,n,e){"use strict";e.r(n);var c=e(0),a=e.n(c),r=e(4),i=e.n(r),s=(e(14),e(15),e(2)),b=e(1),o=function(){var t=Object(s.c)((function(t){return t.amount}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container ",children:[Object(b.jsx)("a",{className:"navbar-brand my-3 fs-3",href:"/",children:"Counter-Redux"}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{className:"btn btn-success fs-4 my-2",children:["Balance: ",t]})})]})})})},u=e(9),l=function(t){return function(n){n({type:"addition",payload:t})}},j=function(t){return function(n){n({type:"subtraction",payload:t})}},d=function(){var t=Object(s.b)(),n=Object(c.useState)(""),e=Object(u.a)(n,2),a=e[0],r=e[1];var i=Object(s.c)((function(t){return t.amount})),o=Object(s.c)((function(t){return t.isSignIn}));return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsxs)("h1",{className:"my-5",children:["Counter: ",i]}),Object(b.jsxs)("div",{className:"text-center fs-5",children:[Object(b.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){t(j(parseInt(a)))},children:"Sub amount"}),Object(b.jsx)("input",{type:"number",placeholder:"Enter the amount",onChange:function(t){r(t.target.value)}}),Object(b.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){t(l(parseInt(a)))},children:"Add amount"})]}),Object(b.jsxs)("div",{className:"text-center my-5 fs-3",children:[Object(b.jsx)("button",{className:"btn btn-primary mx-4",onClick:function(){t(j(1))},children:"-"}),"Click to subtract or add",Object(b.jsx)("button",{className:"btn btn-primary mx-4",onClick:function(){t(l(1))},children:"+"})]}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){t({type:"signOut"})},children:"Sign Out"})]}):Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("button",{className:"btn btn-primary my-5",onClick:function(){t({type:"signIn"})},children:"Sign IN"})})})};var m=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o,{}),Object(b.jsx)(d,{})]})},h=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,24)).then((function(n){var e=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;e(t),c(t),a(t),r(t),i(t)}))},x=e(3),O=e(8),p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;return"addition"===n.type?t+n.payload:"subtraction"===n.type?t-n.payload:t},f=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1?arguments[1]:void 0;return"signIn"===n.type||"signOut"!==n.type&&t},g=Object(x.b)({amount:p,isSignIn:f}),y=Object(x.c)(g,Object(x.a)(O.a));i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(s.a,{store:y,children:Object(b.jsx)(m,{})})}),document.getElementById("root")),h()}},[[23,1,2]]]);
//# sourceMappingURL=main.caa33d8f.chunk.js.map