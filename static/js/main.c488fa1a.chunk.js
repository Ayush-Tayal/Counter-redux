(this["webpackJsonpredux-first-app"]=this["webpackJsonpredux-first-app"]||[]).push([[0],{16:function(t,n,e){},17:function(t,n,e){},26:function(t,n,e){"use strict";e.r(n);var c=e(0),a=e.n(c),r=e(4),s=e.n(r),i=(e(16),e(17),e(2)),o=e(7),b=e.n(o),u=e(9),l=function(t){return{type:"addition",payload:t}},j=function(t){return{type:"subtraction",payload:t}},d=function(t){return{type:"dogImage",payload:t}},m=e(1),h=function(){var t=Object(i.b)(),n=Object(i.c)((function(t){return t.dogData}));return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("button",{className:"btn btn-success",onClick:function(){t(function(){var t=Object(u.a)(b.a.mark((function t(n){var e,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://dog.ceo/api/breeds/image/random");case 2:return e=t.sent,t.next=5,e.json();case 5:c=t.sent,console.log("response is",c),n(d(c.message));case 8:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())},children:"Fetch dog "}),Object(m.jsx)("br",{}),Object(m.jsx)("img",{className:"my-4",src:n})]})})},x=function(){var t=Object(i.c)((function(t){return t.amount})),n=Object(i.c)((function(t){return t.isSignIn}));return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(m.jsxs)("div",{className:"container ",children:[Object(m.jsx)("a",{className:"navbar-brand my-3 fs-3",href:"/",children:"Counter-Redux"}),n?Object(m.jsx)("div",{children:Object(m.jsxs)("p",{className:"btn btn-success fs-4 my-2",children:["Balance: ",t]})}):Object(m.jsx)("button",{className:"btn btn-primary",disabled:!0,children:"Sign in to see Balance"})]})})})},O=e(11),p=function(){var t=Object(i.b)(),n=Object(c.useState)(""),e=Object(O.a)(n,2),a=e[0],r=e[1];var s=Object(i.c)((function(t){return t.amount})),o=Object(i.c)((function(t){return t.isSignIn}));return Object(m.jsx)(m.Fragment,{children:o?Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsxs)("h1",{className:"my-5",children:["Counter: ",s]}),Object(m.jsxs)("div",{className:"text-center fs-5",children:[Object(m.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){t(j(parseInt(a)))},children:"Sub amount"}),Object(m.jsx)("input",{type:"number",placeholder:"Enter the amount",onChange:function(t){r(t.target.value)}}),Object(m.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){t(l(parseInt(a)))},children:"Add amount"})]}),Object(m.jsxs)("div",{className:"text-center my-5 fs-3",children:[Object(m.jsx)("button",{className:"btn btn-primary mx-4",onClick:function(){t(j(1))},children:"-"}),"Click to subtract or add",Object(m.jsx)("button",{className:"btn btn-primary mx-4",onClick:function(){t(l(1))},children:"+"})]}),Object(m.jsx)("button",{className:"btn btn-primary my-4",onClick:function(){t({type:"signOut"})},children:"Sign Out"})]}):Object(m.jsx)("div",{className:"text-center",children:Object(m.jsx)("button",{className:"btn btn-primary my-5",onClick:function(){t({type:"signIn"})},children:"Sign IN"})})})};var g=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{}),Object(m.jsx)(p,{}),Object(m.jsx)(h,{})]})},f=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,27)).then((function(n){var e=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,s=n.getTTFB;e(t),c(t),a(t),r(t),s(t)}))},y=e(3),v=e(10),N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;return"addition"===n.type?t+n.payload:"subtraction"===n.type?t-n.payload:t},C=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1?arguments[1]:void 0;return"signIn"===n.type||"signOut"!==n.type&&t},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;return"dogImage"===n.type?n.payload:t},k=Object(y.b)({amount:N,isSignIn:C,dogData:I}),S=Object(y.c)(k,Object(y.a)(v.a));s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(i.a,{store:S,children:Object(m.jsx)(g,{})})}),document.getElementById("root")),f()}},[[26,1,2]]]);
//# sourceMappingURL=main.c488fa1a.chunk.js.map