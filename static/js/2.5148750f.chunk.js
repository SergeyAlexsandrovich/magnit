(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{259:function(t,e,n){var r;window,t.exports=(r=n(28),function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(4)),c=function(){function t(t){var e=this;this.focusedPuzzleState=t,this.throttledChainCleaning=o.default.throttle(function(){e.focusedPuzzleState[0].length=0},100)}return t.prototype.onPuzzleFocus=function(t){var e=this.focusedPuzzleState,n=e[0],r=e[1];this.throttledChainCleaning(),n.includes(t)?r(n.slice()):(n.push(t),r(n.slice()))},t.prototype.onPuzzleBlur=function(t){t.preventDefault(),t.stopPropagation()},t}();e.EditorServiceImpl=c},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),r(n(2)),r(n(6)),r(n(8))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(3),c=n(5),i=n(0);!function(t){t[t.TEMPLATE=0]="TEMPLATE",t[t.TASK=1]="TASK"}(r=e.EEditorType||(e.EEditorType={})),e.getEditorService=function(t,e){switch(t){case r.TASK:return new(o.TaskEditorService.bind.apply(o.TaskEditorService,[void 0].concat(e)));case r.TEMPLATE:return new(c.TemplateEditorService.bind.apply(c.TemplateEditorService,[void 0].concat(e)));default:return console.log("%c%s","color:#F07178","Current type ("+t+") service does not exist!"),new(i.EditorServiceImpl.bind.apply(i.EditorServiceImpl,[void 0].concat(e)))}}},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(n(0).EditorServiceImpl);e.TaskEditorService=c},function(t,e){t.exports=r},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(n(0).EditorServiceImpl);e.TemplateEditorService=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n(7))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.EMPTY=""}(e.ETerminals||(e.ETerminals={}))},function(t,e,n){"use strict";function r(t){return 1===t.toString().length?"0"+t:t.toString()}Object.defineProperty(e,"__esModule",{value:!0}),e.getFriendlyDate=function(t){return r(t.getDate())+"."+r(t.getMonth()+1)+"."+t.getFullYear()}}]))},261:function(t,e,n){"use strict";n.r(e);var r=n(50),o=n(144),c=n(98),i=n(11),a=n(0),s=n(255),u=n(254),l=n(60),p=n(253),d=n(56),j=n(256),b=n(120),f=n(121),O=n(131),m=n(88),h=n(28),x=n.n(h),v=n(259);function g(){var t=Object(r.a)(["\n                                width: 180px;\n                            "]);return g=function(){return t},t}function y(){var t=Object(r.a)(["\n                            width: 180px;\n                        "]);return y=function(){return t},t}var _=[{id:"title",sortable:!0,label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u0430"},{id:"description",label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},{id:"createdAt",label:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f"},{id:"updatedAt",label:"\u0414\u0430\u0442\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"}],S=function(){var t=Object(a.useContext)(f.a),e=Object(a.useState)([]),n=Object(c.a)(e,2),r=n[0],h=n[1],S=Object(a.useState)({redirect:!1,to:""}),T=Object(c.a)(S,2),w=T[0],E=T[1];Object(a.useEffect)(function(){Object(b.c)(t.courier).then(function(t){t.templates=t.templates.map(function(t){return Object(o.a)({},t,{createdAt:Object(v.getFriendlyDate)(new Date(t.createdAt)),updatedAt:Object(v.getFriendlyDate)(new Date(t.updatedAt))})}),h(t.templates)}).catch(console.error)},[t.courier]);var P=!r.length;return Object(i.jsx)(u.a,null,w.redirect&&Object(i.jsx)(l.b,{to:"templates/edit/".concat(w.to),noThrow:!0}),Object(i.jsx)(s.a,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"},Object(i.jsx)(O.a,{item:!0,hidden:P},Object(i.jsx)(p.CustomButton,{component:l.a,to:"create",variant:"contained",title:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d",scheme:"blue",icon:Object(i.jsx)(d.AddIcon,null),css:Object(i.css)(y())}))),P&&Object(i.jsx)(j.a,{title:"\u0428\u0430\u0431\u043b\u043e\u043d\u043e\u0432 \u043d\u0435\u0442",actionName:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d",button:Object(i.jsx)(p.CustomButton,{component:l.a,to:"create",icon:Object(i.jsx)(d.AddIcon,null),title:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d",css:Object(i.css)(g())}),description:"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443"}),!P&&Object(i.jsx)(m.a,{square:!0,css:function(t){return{margin:t.spacing(3),boxShadow:"0px 0px ".concat(t.spacing(2)," ").concat(t.colors.lightGray," !important")}}},Object(i.jsx)(O.a,{container:!0,direction:"row",css:function(t){return{marginTop:t.spacing(2)}}},Object(i.jsx)(O.a,{container:!0,direction:"column",css:function(t){return{padding:t.spacing(3)}}},Object(i.jsx)(O.a,{container:!0,direction:"row",spacing:2},Object(i.jsx)(O.a,{item:!0,xs:!0},Object(i.jsx)(p.InputField,{placeholder:"\u041f\u043e\u0438\u0441\u043a ...",fullWidth:!0,css:function(t){return{borderRadius:t.radius(5),background:t.colors.white,border:"1px solid ".concat(t.colors.lightGray),transition:"border 0.25s ease-in-out",cursor:"pointer",":hover, :active":{border:"1px solid ".concat(t.colors.primary)},div:{":before, :after":{border:"none !important"}},input:{padding:"".concat(t.spacing(2)," ").concat(t.spacing(4))}}}}))),Object(i.jsx)(O.a,{item:!0,css:function(t){return{padding:t.spacing(3)}}},Object(i.jsx)(p.TableWrapper,{columns:_,data:r,onRowClick:function(t){x.a.isObject(t)&&x.a.has(t,"id")&&E({redirect:!0,to:x.a.get(t,"id")})}}))))))},T=n(61),w=n(257),E=n(135),P=n(114),C=n(128),k=n(138),M=n(136),A=n(137);function z(){var t=Object(r.a)(["\n                            display: flex;\n                            align-items: center;\n                        "]);return z=function(){return t},t}var D=function(t){var e=t.messages,n=t.error,r=t.open,o=Object(w.a)(t,["messages","error","open"]);return Object(i.jsx)(E.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:r,autoHideDuration:2500,onClose:o.onClose},Object(i.jsx)(P.a,{css:function(t){return{background:n?t.colors.red:t.colors.green,boxShadow:"0 4px 8px ".concat(n?t.colors.red:t.colors.green,"50")}},message:Object(i.jsx)("span",{css:Object(i.css)(z())},n?Object(i.jsx)(k.a,{css:function(t){return{marginRight:t.spacing(1)}}}):Object(i.jsx)(M.a,{css:function(t){return{marginRight:t.spacing(1)}}}),n?e.error:e.success),action:[Object(i.jsx)(C.a,{key:"close",color:"inherit",onClick:o.onClose},Object(i.jsx)(A.a,null))]}))},I=function(){var t=Object(a.useContext)(f.a),e=Object(a.useState)({}),n=Object(c.a)(e,2),r=n[0],o=n[1],j=Object(a.useState)(!1),m=Object(c.a)(j,2),h=m[0],v=m[1],g=Object(a.useState)(!1),y=Object(c.a)(g,2),_=y[0],S=y[1],w=Object(a.useState)(!1),E=Object(c.a)(w,2),P=E[0],C=E[1];return Object(i.jsx)(u.a,null,P&&Object(i.jsx)(l.b,{to:"/templates",noThrow:!0}),Object(i.jsx)(s.a,{title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u0430"},Object(i.jsx)(O.a,{item:!0},Object(i.jsx)(p.CustomButton,{variant:"contained",title:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",scheme:"blue",icon:Object(i.jsx)(d.CheckIcon,null),onClick:function(){Object(b.a)(t.courier,r).then(function(){return S(!0)}).catch(function(){S(!0),v(!0)})}}))),Object(i.jsx)(O.a,{css:function(t){return{maxWidth:t.maxTemplateWidth,margin:t.spacing(4),position:"relative",opacity:_?.5:1,transition:"opacity 0.3s ease-in-out",pointerEvents:_?"none":"initial"}}},Object(i.jsx)(T.TemplateEditor,{css:function(t){return{background:t.colors.main}},onChange:function(t){o(x.a.cloneDeep(t))}})),Object(i.jsx)(D,{open:_,error:h,onClose:function(t,e){"clickaway"!==e&&(h||C(!0),S(!1),setTimeout(function(){return v(!1)},100))},messages:{success:"\u0428\u0430\u0431\u043b\u043e\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d!",error:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430!"}}))},F=function(t){var e=t.templateId,n=Object(a.useContext)(f.a),r=Object(a.useState)({}),o=Object(c.a)(r,2),j=o[0],m=o[1],h=Object(a.useState)(!1),v=Object(c.a)(h,2),g=v[0],y=v[1],_=Object(a.useState)(!1),S=Object(c.a)(_,2),w=S[0],E=S[1],P=Object(a.useState)(!1),C=Object(c.a)(P,2),k=C[0],M=C[1];return Object(a.useEffect)(function(){Object(b.b)(n.courier,e).then(function(t){return m(JSON.parse(t.template))}).catch(console.error)},[n.courier,e]),Object(i.jsx)(u.a,null,k&&Object(i.jsx)(l.b,{to:"/templates",noThrow:!0}),Object(i.jsx)(s.a,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u0430"},Object(i.jsx)(O.a,{item:!0},Object(i.jsx)(p.CustomButton,{variant:"contained",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",scheme:"blue",icon:Object(i.jsx)(d.CheckIcon,null),onClick:function(){Object(b.d)(n.courier,e,j).then(function(){return E(!0)}).catch(function(){E(!0),y(!0)})}}))),Object(i.jsx)(O.a,{css:function(t){return{maxWidth:t.maxTemplateWidth,margin:t.spacing(4),position:"relative",opacity:w?.5:1,transition:"opacity 0.3s ease-in-out",pointerEvents:w?"none":"initial"}}},!x.a.isEmpty(j)&&Object(i.jsx)(T.TemplateEditor,{initialState:j,css:function(t){return{background:t.colors.main}},onChange:function(t){m(x.a.cloneDeep(t))}})),Object(i.jsx)(D,{open:w,error:g,onClose:function(t,e){"clickaway"!==e&&(g||M(!0),E(!1),setTimeout(function(){return y(!1)},100))},messages:{success:"\u0428\u0430\u0431\u043b\u043e\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0451\u043d!",error:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430!"}}))};n.d(e,"TemplateList",function(){return S}),n.d(e,"CreateTemplate",function(){return I}),n.d(e,"EditTemplate",function(){return F})}}]);
//# sourceMappingURL=2.5148750f.chunk.js.map