(this.webpackJsonpnilehome=this.webpackJsonpnilehome||[]).push([[11],{1477:function(e,t,r){"use strict";var n=r(0),a=r(167);t.a=Object(a.a)(n.createElement("path",{d:"M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline")},1478:function(e,t,r){"use strict";var n=r(0),a=r(167);t.a=Object(a.a)(n.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked")},1479:function(e,t,r){"use strict";var n=r(0),a=r(167);t.a=Object(a.a)(n.createElement("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"}),"ArrowForwardIos")},1523:function(e,t,r){"use strict";r.r(t);var n=r(112),a=r(0),o=r.n(a),c=r(24),i=r(395),l=r(41),s=r(183),p=r(150),m=r(21),u=r.n(m),d=r(58),f=r.n(d),g=r(179),b=r.n(g),y=r(4),h=r(416),E=r(182),O=r(1390),v=r(1477),j=r(1478),k=r(1479),I=r(161),F=Object(O.a)((function(e){return{link:{fontFamily:e.typography.fontFamily.avenirLT,border:"1px solid #E0E0E0",backgroundColor:e.palette.background.lightGray,padding:e.spacing(2.125),marginBottom:e.spacing(1),display:"flex",alignItems:"center"},name:Object(y.a)(Object(y.a)({},e.typography.h5),{},{marginLeft:e.spacing(1),color:e.palette.text.dark,flex:1,marginTop:"2px"}),linkHighlight:{fontWeight:"900"},disabledLink:{pointerEvents:"none",opacity:.5},selectIcon:{float:"right",width:"14px",height:"14px",color:e.palette.primary.main},checkIcon:{color:e.palette.primary.main},disabledIcon:{color:e.palette.primary.gray},loopIcon:{color:e.palette.primary.gray}}})),L=function(e){var t=e.propertyId,r=e.form,o=r.FormId,i=r.Name,l=r.DataStatus,s=r.isEnabled,p=void 0!==s&&s,m=l===E.d.submitted,u=F();return a.createElement("div",{"data-testid":"question-item"},a.createElement(I.b,{className:Object(c.a)(u.link,Object(n.a)({},u.disabledLink,!p)),to:"/property?propertyId=".concat(t,"&formId=").concat(o)},m?a.createElement(v.a,{className:u.checkIcon}):a.createElement(j.a,{className:u.loopIcon}),a.createElement("span",{className:Object(c.a)(u.name,Object(n.a)({},u.linkHighlight,m))},i),a.createElement(k.a,{className:Object(c.a)(u.selectIcon,Object(n.a)({},u.disabledIcon,!p))})))},w=r(415),N=r(1),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u()(e,["FormTypeId"])===N.mc.listingDetails},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.find((function(e){return x(e)}));if(!t)return e;var r=u()(t,["DataStatus"])===N.kc.submitted;return e.map((function(e){return Object(y.a)(Object(y.a)({},e),{},{isEnabled:x(e)||r})}))},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.sort((function(e,t){return u()(e,["Order"],0)-u()(t,["Order"],0)}))},S=Object(O.a)((function(e){return{widget:{marginBottom:e.spacing(3)},description:Object(y.a)(Object(y.a)({},e.typography.h5),{},{marginBottom:e.spacing(3),color:e.palette.primary.gray})}})),z=function(e){var t=e.property,r=e.forms,n=t.Property,a=t.PropertyId,c=S(),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=C(e);return P(t)}(r);return o.a.createElement(w.a,{title:"Question List",className:c.widget},o.a.createElement("div",{className:c.description},"To publish your properties (",o.a.createElement("strong",null,Object(N.q)(n)),") to our system, you need to complete the list of questions below:"),i.map((function(e){return o.a.createElement(L,{form:e,propertyId:a,key:u()(e,["FormId"])})})))},B=(Object(h.a)((function(e){var t=e.forms,r=e.property;return!f()(t)&&!f()(r)}))(z),r(125)),M=r(139),T=r(1445),q=r(243);r.d(t,"QuestionList",(function(){return D}));var A=Object(O.a)((function(e){return{container:{minHeight:"100px"},loading:{border:"1px solid #E0E0E0",backgroundColor:e.palette.common.white},notFound:{padding:"1rem"}}})),D=function(e){var t=e.properties,r=e.isLoading,i=e.fetchSellerPropertyForms,s=e.error,p=A();Object(a.useEffect)((function(){i()}),[]),Object(a.useEffect)((function(){s&&l.toastr.error("Something went wrong")}),[s]);var m=t.sort((function(e,t){return b()(e.CreatedAt)-b()(t.CreatedAt)}));return o.a.createElement(B.a,{tag:"div",blocking:r,loader:o.a.createElement(M.Loader,{active:!0,type:"ball-pulse",color:"rgba(231,28,99,1)"}),className:Object(c.a)(p.container,Object(n.a)({},p.loading,r))},!1,f()(t)&&!r&&o.a.createElement(T.a,{container:!0,className:p.notFound},o.a.createElement(q.a,{variant:"h3"},"No property found")),m.map((function(e){var t=e.Forms,r=e.PropertyId;return o.a.createElement(z,{property:e,forms:t,key:r})})))},H=Object(s.a)({properties:function(e){return u()(e,["sellerPropertyForms","propertyForms","Properties"],[])},isLoading:function(e){return u()(e,["sellerPropertyForms","isLoading"])},error:function(e){return u()(e,["sellerPropertyForms","error"])}}),J={fetchSellerPropertyForms:i.a};t.default=Object(p.connect)(H,J)(D)}}]);
//# sourceMappingURL=11.7e47bed4.chunk.js.map