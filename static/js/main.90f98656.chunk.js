(this["webpackJsonpreact-crud-generator"]=this["webpackJsonpreact-crud-generator"]||[]).push([[0],{18:function(e,t,c){},20:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var l=c(1),n=c.n(l),a=c(12),s=c.n(a),r=(c(18),c(9)),i=c(6),j=(c(19),c(20),c(8)),o=c(13),b=c(0);function d(e){return Object(b.jsxs)("div",{className:"mb-2",children:[Object(b.jsxs)("label",{className:"form-label text-muted",children:[" ",e.fieldObj.name," "]}),Object(b.jsx)("input",{type:"number",className:"form-control"})]})}function m(e){var t=[];return e.fieldObj.options&&(t=e.fieldObj.options.split(",")),Object(b.jsxs)("div",{className:"mb-2",children:[Object(b.jsxs)("label",{className:"form-label text-muted",children:[" ",e.fieldObj.name," "]}),Object(b.jsxs)("select",{className:"form-control",children:[Object(b.jsx)("option",{value:""}),t.length>0&&t.map((function(e,t){return Object(b.jsxs)("option",{value:e,children:[" ",e," "]},t)}))]})]})}function O(e){return Object(b.jsxs)("div",{className:"w-100 mb-2",children:[Object(b.jsxs)("label",{className:"form-label text-muted",children:[" ",e.fieldObj.name," "]}),Object(b.jsx)("textarea",{className:"form-control"})]})}function u(e){return Object(b.jsxs)("div",{className:"mb-2",children:[Object(b.jsxs)("label",{className:"form-label text-muted",children:[" ",e.fieldObj.name," "]}),Object(b.jsx)("input",{type:"text",className:"form-control"})]})}function f(e){return Object(b.jsxs)("div",{children:["text"==e.fieldObj.type&&Object(b.jsx)(u,{fieldObj:e.fieldObj}),"number"==e.fieldObj.type&&Object(b.jsx)(d,{fieldObj:e.fieldObj}),"textarea"==e.fieldObj.type&&Object(b.jsx)(O,{fieldObj:e.fieldObj}),"select"==e.fieldObj.type&&Object(b.jsx)(m,{fieldObj:e.fieldObj})]})}var x=function(){var e=Object(l.useState)([{name:"",type:""}]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(l.useState)(!0),s=Object(i.a)(a,2),d=s[0];return s[1],Object(b.jsxs)("div",{className:"w-100 d-flex bg-dark",children:[Object(b.jsxs)("div",{className:"w-50 justify-content-center text-center",style:{height:"100vh"},children:[Object(b.jsx)("div",{style:{color:"#FFF",fontFamily:"Roboto",fontSize:"30px"},children:"FORM GENERATOR"}),Object(b.jsx)("div",{className:"w-75 justify-content-center align-items-center mx-auto",children:Object(b.jsx)(j.a,{className:"m-3",children:Object(b.jsx)(j.a.Body,{children:Object(b.jsxs)("form",{children:[Object(b.jsx)("div",{children:c.map((function(e,t){return Object(b.jsxs)("div",{className:"row mb-2",children:[Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("label",{className:"form-label",children:" Name "}),Object(b.jsx)("input",{className:"form-control",type:"text",value:e.name,onChange:function(e){return function(e,t){var l=Object(r.a)(c);l[t].name=e.target.value,n(l)}(e,t)}})]}),Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("label",{className:"form-label",children:" Type "}),Object(b.jsxs)("select",{className:"form-control",value:e.type,onChange:function(e){return function(e,t){var l=Object(r.a)(c);l[t].type=e.target.value,n(l)}(e,t)},children:[Object(b.jsx)("option",{children:" "}),h.map((function(e,t){return Object(b.jsxs)("option",{value:e.value,children:[" ",e.label," "]},t)}))]})]}),"select"==e.type&&Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsx)("label",{className:"form-label text-muted fw-10",children:" Select Options separated by comma "}),Object(b.jsx)("input",{className:"form-control",type:"text",value:e.options,onChange:function(e){return function(e,t){var l=Object(r.a)(c);l[t].options=e.target.value,n(l)}(e,t)}})]})]},t)}))}),Object(b.jsx)(o.a,{variant:"outline-secondary",className:"me-2",onClick:function(e){return function(e){e.preventDefault();var t=Object(r.a)(c);t.push({name:"",type:""}),n(t)}(e)},children:"Add new field"})]})})})})]}),Object(b.jsxs)("div",{className:"w-50 bg-secondary",style:{color:"#000",height:"100vh"},children:[Object(b.jsx)("div",{style:{color:"#FFF",fontFamily:"Roboto",fontSize:"30px"},children:"FORM PREVIEW"}),Object(b.jsx)("div",{className:"w-75 m-4",children:Object(b.jsx)(j.a,{children:Object(b.jsx)(j.a.Body,{children:Object(b.jsx)("form",{children:d&&c.map((function(e,t){return Object(b.jsx)(f,{fieldObj:e},t)}))})})})})]})]})},h=[{label:"Text",value:"text"},{label:"Number",value:"number"},{label:"Text Area",value:"textarea"},{label:"Select",value:"select"}],v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(t){var c=t.getCLS,l=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),l(e),n(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),v()}},[[22,1,2]]]);
//# sourceMappingURL=main.90f98656.chunk.js.map