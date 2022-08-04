(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{21:function(e,t,s){"use strict";s.r(t);var c=s(12),a=s.n(c),n=s(4),r=(s(18),s(19),s(2)),l=s(6),i=s.n(l),j=s(10),d=s(9),b=s(3),o=s(1);var h=s(0),u=function(e){var t=e.person,s=Object(r.f)().search;return Object(h.jsx)(n.b,{to:{pathname:"/people/".concat(t.slug),search:s},className:i()({"has-text-danger":"f"===t.sex}),children:t.name})},x=s(13);function O(e,t){var s=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(b.a)(e,2),c=t[0],a=t[1];null===a?s.delete(c):Array.isArray(a)?(s.delete(c),a.forEach((function(e){s.append(c,e)}))):s.set(c,a)})),s.toString()}var m=["children","params"],f=function(e){var t=e.children,s=e.params,c=Object(x.a)(e,m),a=Object(n.d)(),r=Object(b.a)(a,1)[0];return Object(h.jsx)(n.b,Object(d.a)(Object(d.a)({to:{search:O(r,s)}},c),{},{children:t}))},p=function(e){var t=e.field,s=Object(n.d)(),c=Object(b.a)(s,1)[0],a=c.get("sort")||"",r="desc"===c.get("order"),l={sort:t===a&&r?null:t,order:t!==a||r?null:"desc"};return Object(h.jsx)(f,{params:l,children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:i()("fas",{"fa-sort":a!==t,"fa-sort-up":a===t&&!r,"fa-sort-down":a===t&&r})})})})},v=["16","17","18","19","20"],N=function(){var e=Object(n.d)(),t=Object(b.a)(e,1)[0].getAll("centuries");return Object(h.jsxs)("div",{className:"level is-flex-grow-1 is-mobile",children:[Object(h.jsx)("div",{className:"level-left",children:v.map((function(e){return Object(h.jsx)(f,{className:i()("button","mr-1",{"is-info":t.includes(e)}),params:{centuries:t.includes(e)?t.filter((function(t){return t!==e})):[].concat(Object(j.a)(t),[e])},children:e},e)}))}),Object(h.jsx)("div",{className:"level-right ml-4",children:Object(h.jsx)(f,{params:{centuries:null},className:i()("button","is-success",{"is-outlined":t.length>0}),children:"All"})})]})},g=function(){var e=Object(n.d)(),t=Object(b.a)(e,2),s=t[0],c=t[1],a=s.get("query")||"";return Object(h.jsxs)("p",{className:"control has-icons-left",children:[Object(h.jsx)("input",{value:a,onChange:function(e){return c(O(s,{query:e.target.value||null}))},className:"input",type:"text",placeholder:"Search"}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})},w=function(){var e=Object(o.useState)([]),t=Object(b.a)(e,2),s=t[0],c=t[1],a=Object(n.d)(),l=Object(b.a)(a,1)[0],x=l.get("sex"),O=l.get("query")||"",m=l.getAll("centuries"),v=l.get("sort"),w="desc"===l.get("order"),k=Object(r.h)().slug;Object(o.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return Object(d.a)({},e)}));t.forEach((function(e){Object.assign(e,{mother:t.find((function(t){return t.name===e.motherName}))||null,father:t.find((function(t){return t.name===e.fatherName}))||null})})),c(t)}))}),[]);var y=Object(j.a)(s);if(x&&(y=y.filter((function(e){return e.sex===x}))),m.length>0){y=y.filter((function(e){return m.includes(function(e){return Math.ceil(e.born/100)}(e).toString())}))}if(O){var A=O.toLocaleLowerCase();y=y.filter((function(e){return[e.name,e.motherName||"",e.fatherName||""].join("\n").toLocaleLowerCase().includes(A)}))}return v&&(y.sort((function(e,t){switch(v){case"name":case"sex":return e[v].localeCompare(t[v]);case"born":case"died":return e[v]-t[v];default:return 0}})),w&&y.reverse()),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"title",children:"People page"}),y.length,Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(h.jsx)("div",{className:"column is-4-desktop",children:Object(h.jsxs)("nav",{className:"panel",children:[Object(h.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(h.jsxs)("p",{className:"panel-tabs",children:[Object(h.jsx)(f,{params:{sex:null},className:i()({"is-active":!x}),children:"All"}),Object(h.jsx)(f,{params:{sex:"m"},className:i()({"is-active":"m"===x}),children:"Male"}),Object(h.jsx)(f,{params:{sex:"f"},className:i()({"is-active":"f"===x}),children:"Female"})]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)(g,{})}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)(N,{})}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)(f,{className:"button is-link is-outlined is-fullwidth",params:{sex:null,query:null,centuries:null},children:"Reset all filters"})})]})}),Object(h.jsx)("div",{className:"column",children:Object(h.jsxs)("table",{className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Name",Object(h.jsx)(p,{field:"name"})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Sex",Object(h.jsx)(p,{field:"sex"})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Born",Object(h.jsx)(p,{field:"born"})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Died",Object(h.jsx)(p,{field:"died"})]})}),Object(h.jsx)("th",{children:"Mother"}),Object(h.jsx)("th",{children:"Father"})]})}),Object(h.jsx)("tbody",{children:y.map((function(e){return Object(h.jsxs)("tr",{className:i()({"has-background-warning":e.slug===k}),children:[Object(h.jsx)("td",{children:Object(h.jsx)(u,{person:e})}),Object(h.jsx)("td",{children:e.sex}),Object(h.jsx)("td",{children:e.born}),Object(h.jsx)("td",{children:e.died}),Object(h.jsx)("td",{children:e.mother?Object(h.jsx)(u,{person:e.mother}):e.motherName}),Object(h.jsx)("td",{children:e.father?Object(h.jsx)(u,{person:e.father}):e.fatherName})]},e.slug)}))})]})})]})})]})},k=function(e){return i()("navbar-item",{"has-background-grey-lighter":e.isActive})},y=function(){var e=Object(r.f)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("nav",{className:"navbar is-fixed-top has-background-light","data-cy":"nav",children:Object(h.jsx)("div",{className:"navbar-menu container",children:Object(h.jsxs)("div",{className:"navbar-start",children:[Object(h.jsx)(n.c,{to:"/",className:k,children:"Home"}),Object(h.jsx)(n.c,{to:{pathname:"people",search:e.search},className:k,children:"People"})]})})}),Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(r.d,{children:[Object(h.jsx)(r.b,{path:"/",element:Object(h.jsx)("h1",{className:"title",children:"Home Page"})}),Object(h.jsx)(r.b,{path:"home",element:Object(h.jsx)(r.a,{to:"/",replace:!0})}),Object(h.jsxs)(r.b,{path:"people",children:[Object(h.jsx)(r.b,{index:!0,element:Object(h.jsx)(w,{})}),Object(h.jsx)(r.b,{path:":slug",element:Object(h.jsx)(w,{})})]}),Object(h.jsx)(r.b,{path:"*",element:Object(h.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};a.a.render(Object(h.jsx)(n.a,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.3b147f14.chunk.js.map