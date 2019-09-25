(window["webpackJsonp@magnit/frontend"]=window["webpackJsonp@magnit/frontend"]||[]).push([[2],{356:function(t,e,n){"use strict";var c=n(11),a=n(343),r=n(103),i=n(250),o=function(t){var e=t.title,n=t.children;return Object(c.jsx)(a.a,{item:!0,css:{height:"var(--section-title-height)",boxShadow:"0 6px 20px rgba(220, 227, 235, 0.3)"}},Object(c.jsx)(r.a,{square:!0,css:{height:"100%",display:"flex",alignItems:"center",boxShadow:"none !important"}},Object(c.jsx)(a.a,{container:!0,css:function(t){return{paddingLeft:t.spacing(4),paddingRight:t.spacing(4)}}},Object(c.jsx)(a.a,{item:!0,xs:!0},Object(c.jsx)(i.a,{variant:"h4",component:"div"},Object(c.jsx)("span",null,e))),n)))};o.displayName="SectionTitle",n.d(e,"a",function(){return o})},357:function(t,e,n){"use strict";var c=n(11),a=n(343),r=function(t){var e=t.children;return Object(c.jsx)(a.a,{container:!0,direction:"column",css:{width:"100%",minHeight:"100vh"}},e)};r.displayName="SectionLayout",n.d(e,"a",function(){return r})},358:function(t,e,n){"use strict";var c=n(343),a=n(250),r=n(11),i=function(t){var e=t.children;return Object(r.jsx)(c.a,{item:!0,xs:!0,css:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},e)};i.displayName="CenteredSectionItem";var o=function(t){var e=t.title,n=t.button,o=t.children;return Object(r.jsx)(i,null,Object(r.jsx)(c.a,{container:!0,justify:"center",alignContent:"center",direction:"column"},Object(r.jsx)(c.a,{item:!0,css:function(t){return{marginBottom:t.spacing(3)}}},Object(r.jsx)(a.a,{component:"div",align:"center",css:function(t){return{color:t.colors.black,fontWeight:500,fontSize:t.fontSize.xLarge}}},Object(r.jsx)("span",null,e))),Object(r.jsx)(c.a,{item:!0,css:function(t){return{marginBottom:t.spacing(3)}}},Object(r.jsx)(a.a,{component:"div",align:"center",css:function(t){return{color:t.colors.secondary,fontSize:t.colors.larger}}},o)),Object(r.jsx)(c.a,{item:!0},Object(r.jsx)(c.a,{container:!0,justify:"center",alignContent:"center"},Object(r.jsx)(c.a,{item:!0},n)))))};o.displayName="EmptyList",n.d(e,"a",function(){return o})},368:function(t,e,n){"use strict";n.r(e);var c=n(106),a=n(63),r=n(11),i=n(157),o=n(48),s=n(159),u=n(343),j=n(250),l=n(103),p=n(52),b=n(358),d=n(357),m=n(356),O=n(105),f=n(31),x=n.n(f),g=n(0),h=n(108),y=[{key:"title",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u0430",sortable:!0},{key:"description",label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",sortable:!0},{key:"createdAt",label:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f",sortable:!0},{key:"updatedAt",label:"\u0414\u0430\u0442\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",sortable:!0}],v=function(){var t=Object(g.useContext)(O.a),e=Object(g.useState)([]),n=Object(a.a)(e,2),f=n[0],v=n[1],w=Object(g.useState)({redirect:!1,to:""}),k=Object(a.a)(w,2),T=k[0],C=k[1];Object(g.useEffect)(function(){Object(h.c)(t.courier).then(function(t){t.templates=t.templates.map(function(t){return Object(c.a)({},t,{createdAt:Object(s.getFriendlyDate)(new Date(t.createdAt),!0),updatedAt:Object(s.getFriendlyDate)(new Date(t.updatedAt),!0)})}),v(t.templates)}).catch(console.error)},[t.courier]);var S=!f.length;return Object(r.jsx)(d.a,null,T.redirect&&Object(r.jsx)(p.Redirect,{to:"templates/edit/".concat(T.to),noThrow:!0}),Object(r.jsx)(m.a,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"},Object(r.jsx)(u.a,{item:!0,hidden:S},Object(r.jsx)(i.Button,{component:p.Link,to:"create",variant:"contained",scheme:"blue"},Object(r.jsx)(o.AddIcon,null),Object(r.jsx)(j.a,null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d")))),S&&Object(r.jsx)(b.a,{title:"\u0428\u0430\u0431\u043b\u043e\u043d\u043e\u0432 \u043d\u0435\u0442",button:Object(r.jsx)(i.Button,{component:p.Link,to:"create",scheme:"blue"},Object(r.jsx)(o.AddIcon,null),Object(r.jsx)(j.a,null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d"))},Object(r.jsx)("div",null,"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443"),Object(r.jsx)("div",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d")),!S&&Object(r.jsx)(l.a,{square:!0,css:function(t){var e=t.colors,n=t.spacing;return{margin:n(3),boxShadow:"0 0 ".concat(n(2)," ").concat(e.lightGray," !important")}}},Object(r.jsx)(u.a,{container:!0,direction:"row",css:function(t){return{marginTop:t.spacing(2)}}},Object(r.jsx)(u.a,{container:!0,direction:"column",css:function(t){return{padding:t.spacing(3)}}},Object(r.jsx)(u.a,{container:!0,direction:"row",spacing:2},Object(r.jsx)(u.a,{item:!0,xs:!0,css:function(t){return{padding:"0 ".concat(t.spacing(6)," !important")}}},Object(r.jsx)(i.InputField,{placeholder:"\u041f\u043e\u0438\u0441\u043a ...",fullWidth:!0,css:function(t){var e=t.colors,n=t.radius,c=t.spacing;return{borderRadius:n(5),background:e.white,border:"1px solid ".concat(e.lightGray),transition:"border 0.25s ease-in-out",cursor:"pointer",":hover, :active":{border:"1px solid ".concat(e.primary)},div:{":before, :after":{border:"none !important"}},input:{padding:"".concat(c(2)," ").concat(c(4))}}}}))),Object(r.jsx)(u.a,{item:!0,css:function(t){return{padding:t.spacing(3)}}},Object(r.jsx)(i.TableWrapper,{columns:y,data:f,onRowClick:function(t){x.a.isObject(t)&&x.a.has(t,"id")&&C({redirect:!0,to:x.a.get(t,"id")})}}))))))},w=n(8),k=n.n(w),T=n(15),C=n(158),S=n(67),A=n(109),I=n(110),E=function(){var t=Object(g.useContext)(O.a),e=Object(g.useState)({id:0,sections:[],title:"",description:"",type:C.ETemplateType.LIGHT}),n=Object(a.a)(e,2),s=n[0],l=n[1],p=Object(g.useState)(!1),b=Object(a.a)(p,2),f=b[0],x=b[1],y=Object(g.useState)({open:!1,message:""}),v=Object(a.a)(y,2),w=v[0],E=v[1];function L(){return(L=Object(T.a)(k.a.mark(function e(n){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(I.b)(t.courier,n).then(function(t){return Object(c.a)({},t,{filename:"".concat("http://91.144.161.208:1336","/").concat(t.filename)})}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function D(){return(D=Object(T.a)(k.a.mark(function e(n){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(I.a)(t.courier,n));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(r.jsx)(d.a,null,Object(r.jsx)(m.a,{title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u0430"},Object(r.jsx)(u.a,{item:!0},Object(r.jsx)(i.Button,{variant:"contained",scheme:"green",onClick:function(){Object(h.a)(t.courier,s).then(function(){return E({open:!0,message:"\u0428\u0430\u0431\u043b\u043e\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d!"})}).catch(function(){E({open:!0,message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430!"}),x(!0)})},disabled:w.open},Object(r.jsx)(o.CheckIcon,null),Object(r.jsx)(j.a,null,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))),Object(r.jsx)(u.a,{css:function(t){return{maxWidth:t.maxTemplateWidth,margin:t.spacing(4),position:"relative",opacity:w.open?.5:1,transition:"opacity 0.3s ease-in-out",pointerEvents:w.open?"none":"initial"}}},Object(r.jsx)(S.TemplateEditor,{template:s,css:function(t){return{background:t.colors.main}},onChange:function(t){l(Object(c.a)({},t))},onAddAsset:function(t){return L.apply(this,arguments)},onDeleteAsset:function(t){return D.apply(this,arguments)}})),Object(r.jsx)(A.a,{open:w.open,error:f,onClose:function(t,e){"clickaway"!==e&&(E({open:!1,message:""}),setTimeout(function(){return x(!1)},100))},message:w.message}))},L=n(71),D=function(t){var e=t.templateId,n=Object(g.useContext)(O.a),s=Object(g.useState)({id:0,sections:[],title:"",description:"",type:C.ETemplateType.LIGHT}),l=Object(a.a)(s,2),p=l[0],b=l[1],f=Object(g.useState)(!1),x=Object(a.a)(f,2),h=x[0],y=x[1],v=Object(g.useState)({open:!1,message:""}),w=Object(a.a)(v,2),I=w[0],E=w[1];function D(){return(D=Object(T.a)(k.a.mark(function t(e){return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(L.uploadFile)(n.courier,e).then(function(t){return Object(c.a)({},t,{filename:"".concat("http://91.144.161.208:1336","/").concat(t.filename)})}));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function W(){return(W=Object(T.a)(k.a.mark(function t(e){return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(L.deleteFile)(n.courier,e));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}return Object(g.useEffect)(function(){Object(L.getTemplate)(n.courier,e).then(function(t){return b(t.template)}).catch(console.error)},[n.courier,e]),Object(r.jsx)(d.a,null,Object(r.jsx)(m.a,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u0430"},Object(r.jsx)(u.a,{item:!0},Object(r.jsx)(i.Button,{variant:"contained",scheme:"blue",onClick:function(){Object(L.updateTemplate)(n.courier,e,p).then(function(){return E({open:!0,message:"\u0428\u0430\u0431\u043b\u043e\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0451\u043d!"})}).catch(function(){E({open:!0,message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430!"}),y(!0)})},disabled:I.open},Object(r.jsx)(o.CheckIcon,null),Object(r.jsx)(j.a,null,"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c")))),Object(r.jsx)(u.a,{css:function(t){return{maxWidth:t.maxTemplateWidth,margin:t.spacing(4),position:"relative",transition:"opacity 0.3s ease-in-out"}}},Object(r.jsx)(S.TemplateEditor,{template:p,css:function(t){return{background:t.colors.main}},onChange:function(t){b(Object(c.a)({},t))},onAddAsset:function(t){return D.apply(this,arguments)},onDeleteAsset:function(t){return W.apply(this,arguments)}})),Object(r.jsx)(A.a,{open:I.open,error:h,onClose:function(t,e){"clickaway"!==e&&(E({open:!1,message:""}),setTimeout(function(){return y(!1)},100))},message:I.message}))};n.d(e,"TemplateList",function(){return v}),n.d(e,"CreateTemplate",function(){return E}),n.d(e,"EditTemplate",function(){return D})}}]);
//# sourceMappingURL=2.a4cfe1c7.chunk.js.map