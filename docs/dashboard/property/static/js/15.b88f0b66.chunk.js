(this.webpackJsonpnilehome=this.webpackJsonpnilehome||[]).push([[15],{1524:function(e,t,a){"use strict";a.r(t);var n=a(112),r=a(0),c=a.n(r),o=a(139),l=a(125),i=a(41),s=a(1457),m=a(1390),u=a(24),f=a(21),d=a.n(f),g=a(58),p=a.n(g),b=a(184),E=a(124),O=a(268),y=a(267),j=a(4),v=a(151),h=a(415),k=a(30),F=a(1460),I=a(1462),N=a(1458),w=a(1459),C=a(1463),P=a(218),B=a(68),D=a(1398),T=a(1525),x=a(1518),A=a(243),S=a(1),z=a(555),J=a.n(z),L=a(161),R=function(e){var t=e.offer,a=Object(r.useState)(null),n=Object(B.a)(a,2),o=n[0],l=n[1],i=d()(t,["OfferId"]),s=d()(t,["Forms"]).find((function(e){return d()(e,["FormTypeId"])===S.mc.contingencyRemoval})),m=d()(s,["FormId"]),u=Boolean(o),f="/offer?offerId=".concat(i,"&step=").concat(S.zc.confirmTransfer,"&formId=").concat(m);return c.a.createElement(c.a.Fragment,null,c.a.createElement(D.a,{color:"primary",onClick:function(e){l(e.currentTarget)}},c.a.createElement(J.a,{sx:{fontSize:"1.3rem"}})),c.a.createElement(T.a,{anchorEl:o,keepMounted:!0,open:u,onClose:function(){l(null)}},c.a.createElement(x.a,null,c.a.createElement(L.b,{to:f},c.a.createElement(A.a,{variant:"h4"},"Remove")))))},U=Object(k.a)((function(e){return{root:{fontWeight:"bold"}}}))(F.a),H=Object(m.a)((function(e){return{widget:{marginBottom:e.spacing(3)},description:Object(j.a)(Object(j.a)({},e.typography.h5),{},{marginBottom:e.spacing(3),color:e.palette.primary.gray}),table:{fontFamily:e.typography.fontFamily.avenirLT},cell:Object(n.a)({height:e.spacing(6)},e.breakpoints.up("md"),{border:"none"})}})),M=function(e){var t=e.contingencies,a=e.offer,n=e.isBuyer,r=H();if(p()(t)||p()(a))return c.a.createElement(c.a.Fragment,null);var o=Object(P.a)(a);return c.a.createElement(h.a,{className:r.widget,title:"Contingencies status"},c.a.createElement("div",{className:r.description},"Contingencies status of your property"," ",c.a.createElement("strong",null,d()(a,"Property.PropertyData.FullAddress",""))),c.a.createElement(I.a,{className:r.table},c.a.createElement(N.a,null,c.a.createElement(w.a,null,c.a.createElement(U,{padding:"none"},"Type"),c.a.createElement(U,{padding:"none"},"Due Date"),c.a.createElement(U,{padding:"none"},"Status"),n&&c.a.createElement(U,{padding:"none",align:"right"},"Action"))),c.a.createElement(C.a,null,t.map((function(e){var t=o&&!Object(P.b)(e);return c.a.createElement(w.a,{key:e.title},c.a.createElement(F.a,{className:r.cell,padding:"none"},e.title),c.a.createElement(F.a,{className:r.cell,padding:"none"},e.dueDate||"N/A"),c.a.createElement(F.a,{className:r.cell,padding:"none"},e.status||"N/A"),n&&t&&c.a.createElement(F.a,{className:r.cell,padding:"none",align:"right"},c.a.createElement(R,{offer:a})))})))))},W="buyer",q="seller",G=Object(m.a)((function(e){return{loading:{border:"1px solid #E0E0E0",backgroundColor:e.palette.common.white,minHeight:"100px"}}}));t.default=Object(b.a)((function(){var e=G(),t=function(e){var t=d()(e,"IsBuyer",!1);return d()(e,"IsSeller",!1)?q:t?W:""}(Object(r.useContext)(E.b)),a=t===W,m=Object(s.a)(a?O.f:O.g,{errorPolicy:"all",skip:p()(t)}),f=m.data,g=m.loading,b=m.error,h=a?d()(f,["getUserOverview","Offers","Items"],[]):d()(f,["getUserOverview","Properties","Items"],[]).reduce((function(e,t){var a=(d()(t,"Offers")||[]).map((function(e){return Object(j.a)(Object(j.a)({},e),{},{Property:{PropertyData:d()(t,"PropertyData")}})}));return[].concat(Object(v.a)(e),Object(v.a)(a))}),[]);return Object(r.useEffect)((function(){if(t){var e=d()(b,["message"],"");e&&i.toastr.error(y.a.fetchFailure,e)}}),[t,b]),p()(h)||!t?c.a.createElement(c.a.Fragment,null):c.a.createElement(l.a,{tag:"div",blocking:g,loader:c.a.createElement(o.Loader,{active:!0,type:"ball-pulse",color:"rgba(231,28,99,1)"}),className:Object(u.a)(Object(n.a)({},e.loading,g))},function(e,t){return e.reduce((function(e,a){if(!(Object(P.e)(a)&&!p()(d()(a,["Contingencies"]))))return e;var n=Object(P.g)(a);return[].concat(Object(v.a)(e),[c.a.createElement(M,{key:d()(a,["OfferId"]),offer:a,contingencies:n,isBuyer:t})])}),[])}(h,a))}))}}]);
//# sourceMappingURL=15.b88f0b66.chunk.js.map