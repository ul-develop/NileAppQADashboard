(this.webpackJsonpnilehome=this.webpackJsonpnilehome||[]).push([[12],{1576:function(e,n,a){"use strict";var t=a(0),r=a(175);n.a=Object(r.a)(t.createElement("path",{d:"M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline")},1577:function(e,n,a){"use strict";var t=a(0),r=a(175);n.a=Object(r.a)(t.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked")},1578:function(e,n,a){"use strict";var t=a(0),r=a(175);n.a=Object(r.a)(t.createElement("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"}),"ArrowForwardIos")},1580:function(e,n,a){},1681:function(e,n,a){"use strict";a.r(n);var t=a(61),r=a(51),o=a(0),i=a.n(o),l=a(57),c=a.n(l),s=a(16),d=a.n(s),f=a(131),p=a(115),u=a(24),m=a(1446),g=a(144),b=a(269),O=a(138),v=a(166),y=a(37),h=a(1),C=a(237),E=a(283),I=a(3),j=a(288),N=a(175),A=Object(N.a)(o.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"}),"CancelOutlined"),k=a(1576),S=a(1577),F=a(1578),w=a(95),T=Object(m.a)((function(e){return{link:{fontFamily:e.typography.fontFamily.avenirLT,border:"1px solid #E0E0E0",backgroundColor:e.palette.background.lightGray,padding:e.spacing(2.125),marginBottom:e.spacing(1),display:"flex",alignItems:"center",cursor:"pointer"},name:Object(I.a)(Object(I.a)({},e.typography.h5),{},{marginLeft:e.spacing(1),color:e.palette.text.dark,flex:1,marginTop:"2px"}),linkHighlight:{fontWeight:"900"},disabledLink:{pointerEvents:"none",opacity:.5},selectIcon:{float:"right",width:"14px",height:"14px",color:e.palette.primary.main},checkIcon:{color:e.palette.primary.main},disabledIcon:{color:e.palette.primary.gray},loopIcon:{color:e.palette.primary.gray},cancelIcon:{color:e.palette.error.dark}}})),B=function(e){var n=e.step,a=e.isEnabled,r=e.isFinished,i=e.isCancelled,l=e.action,c=e.offer,s=T(),d=a&&!i,f=l.redirectTo,p=l.onClickHandler,m=function(){return o.createElement(o.Fragment,null,i?o.createElement(A,{className:s.cancelIcon}):r?o.createElement(k.a,{className:s.checkIcon}):o.createElement(S.a,{className:s.loopIcon}),o.createElement("span",{className:Object(u.a)(s.name,Object(t.a)({},s.linkHighlight,d))},n.name),o.createElement(F.a,{className:Object(u.a)(s.selectIcon,Object(t.a)({},s.disabledIcon,!d))}))};return f?o.createElement(w.b,{className:Object(u.a)(s.link,Object(t.a)({},s.disabledLink,!d)),to:f},m()):o.createElement("div",{className:Object(u.a)(s.link,Object(t.a)({},s.disabledLink,!d)),onClick:function(){return p(c)}},m())},H=Object(I.a)(Object(I.a)({},h.Ac),{},{viewOriginalOffer:101,contingencyRemoval:801}),L=[{id:H.pleaseComplete,name:"Continue Offer"},{id:H.viewOriginalOffer,name:"View Original Offer"},{id:H.buyerNeedToReviewNewOffer,name:"Negotiate"},{id:H.confirmTransfer,name:"Wire"},{id:H.scheduleAProperty,name:"Inspection"},{id:H.submitCorrectiveAction,name:"Request for Repair"},{id:H.contingencyRemoval,name:"Contingency Removal"}],D=function(e){var n=e.offerId,a=(e.stepId,e.formId);return"/offer?offerId=".concat(n,"&step=").concat(h.Ac.pleaseComplete,"&formId=").concat(a)},P=function(e){var n=e.offer,a=e.stepId,t=e.openOfferDialogHandler,r=e.openConfirmTransferHandler,o=e.openScheduleInspectionHandler,i=e.openOriginalOfferDialogHandler;switch(a){case H.pleaseComplete:return function(e){return{redirectTo:D({offerId:d()(e,["OfferId"]),stepId:h.Ac.pleaseComplete,formId:d()(e,["Forms",0,"FormId"])})}}(n);case H.viewOriginalOffer:return{onClickHandler:i};case H.buyerNeedToReviewNewOffer:return{onClickHandler:t};case H.confirmTransfer:return{onClickHandler:r};case H.scheduleAProperty:return{onClickHandler:o};case H.submitCorrectiveAction:return function(e){var n=(d()(e,["Forms"])||[]).find((function(e){return d()(e,["FormTypeId"])===h.oc.scar})),a=d()(n,["FormId"]);return{redirectTo:D({offerId:d()(e,["OfferId"]),stepId:h.Ac.submitCorrectiveAction,formId:a})}}(n);case H.contingencyRemoval:return function(e){var n=(d()(e,["Forms"])||[]).find((function(e){return d()(e,["FormTypeId"])===h.oc.contingencyRemoval})),a=d()(n,["FormId"]);return{redirectTo:D({offerId:d()(e,["OfferId"]),stepId:h.Ac.confirmTransfer,formId:a})}}(n);default:return{redirectTo:"/"}}},R=function(e){var n=e.offerStep,a=e.stepId;return[H.advisorDecline,H.sellerDecline,H.buyerDecline].includes(n)&&a>=H.buyerNeedToReviewNewOffer},x=function(e){var n=e.offer,a=e.step,t=e.openOfferDialogHandler,r=e.openConfirmTransferHandler,o=e.openScheduleInspectionHandler,i=e.openOriginalOfferDialogHandler,l=d()(n,"StepId",0),s=d()(n,"Contingencies"),f=d()(a,"id",0),p=R({offerStep:l,stepId:f}),u=function(e){var n=e.offerStep,a=e.contingencies,t=e.stepId,r=t===H.pleaseComplete&&n===H.pleaseResubmit,o=t===H.confirmTransfer&&n>=H.confirmTransfer,i=t===H.viewOriginalOffer&&n>H.pleaseComplete,l=t===H.contingencyRemoval&&n>=H.confirmTransfer&&!(R({offerStep:n,stepId:t})||c()(a)||d()(a,"AllRemoved"));return r||o||i||l||n===t}({offerStep:l,contingencies:s,stepId:f});return{offer:n,step:a,stepId:f,isCancelled:p,isEnabled:u,isFinished:function(e){var n=e.offerStep,a=e.contingencies,t=e.stepId;return t===H.pleaseComplete?n>=H.awaitingAdvisorApproval&&n!==H.pleaseResubmit:t===H.viewOriginalOffer?n>=H.awaitingAdvisorApproval:t===H.contingencyRemoval?d()(a,"AllRemoved"):t<n}({offerStep:l,contingencies:s,stepId:f}),action:!p&&u?P({offer:n,stepId:f,openOfferDialogHandler:t,openConfirmTransferHandler:r,openScheduleInspectionHandler:o,openOriginalOfferDialogHandler:i}):{}}},W=["stepId"],M=Object(m.a)((function(e){return{widget:{marginBottom:e.spacing(3)},address:Object(I.a)(Object(I.a)({},e.typography.h5),{},{marginBottom:e.spacing(1),color:e.palette.primary.gray}),message:Object(I.a)(Object(I.a)({},e.typography.h5),{},{color:e.palette.common.black,marginBottom:e.spacing(3)})}})),z=function(e){var n=e.offer,a=void 0===n?{}:n,t=e.openOfferDialogHandler,r=e.openConfirmTransferHandler,o=e.openScheduleInspectionHandler,l=e.openOriginalOfferDialogHandler,s=M();return c()(a)?i.a.createElement(i.a.Fragment,null):i.a.createElement(j.a,{className:s.widget,title:"Home Purchase Action Steps"},i.a.createElement("div",{className:s.address},i.a.createElement("strong",null,d()(a,"Property.PropertyData.FullAddress",""))),i.a.createElement("div",{className:s.message},d()(a,"Step.messages.buyer","")),L.map((function(e){var n=x({offer:a,step:e,openOfferDialogHandler:t,openConfirmTransferHandler:r,openScheduleInspectionHandler:o,openOriginalOfferDialogHandler:l}),c=n.stepId,s=Object(E.a)(n,W);return i.a.createElement(B,Object.assign({},s,{key:c}))})))},U=a(116),V=a(250),G=a(1499),Y=a(1502),_=a(181),q=a(178),J=a(633),K=Object(m.a)((function(e){return{wrapper:{backgroundColor:e.palette.background.lightGray,justifyContent:"space-between",padding:"1rem"},acceptButton:{borderRadius:0,padding:"0.5625rem 2rem",color:e.palette.common.white,borderWidth:"2px"},declineButton:{borderRadius:0,padding:"0.5625rem 2rem",color:e.palette.error.dark},counterButton:{borderRadius:0,padding:"0.5625rem 2rem",borderColor:e.palette.common.black,borderWidth:"2px","&:hover":{borderWidth:"2px"}}}})),Q=function(e){var n=e.offer,a=e.onAccept,t=e.onDecline,r=e.onCounter,o=e.disabled,l=K(),c=d()(n,"OfferId","");return i.a.createElement(G.a,{container:!0,alignItems:"center",className:l.wrapper},i.a.createElement(G.a,{item:!0},i.a.createElement(J.a,{variant:"outlined",color:"primary",className:l.counterButton,onClick:function(){return r(n)},disabled:o},"Counter")),i.a.createElement(G.a,{item:!0},i.a.createElement(J.a,{className:l.declineButton,onClick:function(){return t(c)},disabled:o},"Decline"),i.a.createElement(J.a,{variant:"contained",color:"primary",disableElevation:!0,className:l.acceptButton,onClick:function(){return a(c)},disabled:o},"Accept")))},X=a(192),Z=a(194),$=Object(m.a)((function(e){return{spacing:{padding:e.spacing(2)},title:{fontFamily:e.typography.fontFamily.avenir85},dialogContent:{padding:e.spacing(2),paddingTop:0},field:{marginBottom:e.spacing(1.5)},fieldLabel:{marginBottom:e.spacing(1),color:e.palette.primary.gray,textTransform:"uppercase"},fieldValue:{color:e.palette.text.secondaryDark}}})),ee=function(e){var n=e.open,a=e.onClose,t=e.offer,r=e.handleApproval,o=e.handleDecline,l=e.handleCounter,c=e.isSubmitting,s=$();Object(Z.b)({open:n});var f=d()(t,"Funding.PurchaseType",""),p=d()(t,"MappingCounter.RentBackInititated",!1),u=[{label:"Offer No",value:d()(t,"OfferNo","")},{label:"Down Payment",value:Object(q.b)(d()(t,"Funding.DownPayment",0))},{label:"funding",value:f},{label:"asking price",value:d()(t,"Property.ListingDetails.ListPrice")?Object(q.b)(d()(t,"Property.ListingDetails.ListPrice")):"TBD"},{label:"offer price",value:d()(t,"MappingCounter.OfferPrice")?Object(q.b)(d()(t,"MappingCounter.OfferPrice")):"TBD"},{label:"finance contingency",value:f===h.pc.cash?"N/A":d()(t,"MappingCounter.FinanceContingency","")},{label:"due diligence contingency",value:d()(t,"MappingCounter.InspectionContingency","")},{label:"home sale contingency",value:d()(t,"MappingCounter.SaleOfHomeContingency","")},{label:"Closing Period",value:d()(t,"MappingCounter.ClosingPeriod","")},{label:"Furniture",value:Object(X.c)(d()(t,"MappingCounter.Furniture",""),d()(t,"MappingCounter.FurnitureOther",""))},{label:"Buyer Name",value:Object(X.e)(t)},{label:"Buyer Agent Name",value:Object(X.f)(d()(t,"AgentInfo",{}))},{label:"Nile Listing Agent Name",value:"Khaled Yatim"},{label:"Property Address",value:d()(t,"Property.PropertyData.FullAddress","")}].concat(Object(U.a)(p?[{label:"Rent Back",value:Object(X.d)(d()(t,"MappingCounter",{}))}]:[]));return i.a.createElement(_.a,{open:n,"aria-labelledby":"customized-dialog-title",onClose:a,scroll:"paper",fullWidth:!0,maxWidth:"sm",visible:1},i.a.createElement(_.d,{id:"customized-dialog-title",disableTypography:!0,onClose:a,classes:{root:s.spacing}},i.a.createElement(V.a,{variant:"h4",className:s.title},"Offer ",d()(t,"OfferNo",""))),i.a.createElement(_.c,{className:s.dialogContent},i.a.createElement(G.a,{container:!0},u.map((function(e){var n=e.label,a=e.value;return i.a.createElement(G.a,{item:!0,xs:4,key:n,className:s.field},i.a.createElement(V.a,{variant:"h6",className:s.fieldLabel},n),i.a.createElement(V.a,{variant:"h5",className:s.fieldValue},a))})))),i.a.createElement(Y.a,null),i.a.createElement(_.b,null,i.a.createElement(Q,{offer:t,onAccept:r,onDecline:o,onCounter:l,disabled:c})))},ne=a(591),ae=a(593),te=a(642),re=a(635),oe=a(632),ie=a(289),le=a(216),ce=(a(1580),Object(m.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"none",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}))),se=Object(v.b)({isLoading:function(e){return d()(e,["buyerOffer","isLoading"])}}),de={updateOfferStep:b.c},fe=Object(le.c)(Object(O.connect)(se,de),Object(ie.a)((function(e){var n=e.offer;return n&&d()(n,["OfferId"])})),o.memo)((function(e){var n=e.open,a=e.handleClose,t=e.offer,r=e.isLoading,o=e.updateOfferStep,l=e.hideConfirmButton,c=void 0!==l&&l,s=ce();return i.a.createElement(te.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:s.modal,open:n,onClose:a,closeAfterTransition:!0,BackdropComponent:re.a,BackdropProps:{timeout:500}},i.a.createElement(oe.a,{in:n},i.a.createElement("div",{className:s.paper},i.a.createElement("div",{className:"wire-instruction"},i.a.createElement("p",null,"Payable to: Endpoint Escrow, Inc."),i.a.createElement("p",null,"Receiving Bank: First American Trust, FSB"),i.a.createElement("p",null,i.a.createElement("span",null,"5 First American Way"),i.a.createElement("br",null),i.a.createElement("span",null,"Santa Ana, CA 92707")),i.a.createElement("p",null,"Routing #: 122241255"),i.a.createElement("p",null,"Credit Beneficiary: Endpoint Escrow, Inc."),i.a.createElement("p",null,"Account #: 3145220000"),i.a.createElement("p",null,"NOTICE: Funds from a U.S. Bank: Funds should be wired from a bank within the United States."),i.a.createElement("p",null,"NOTICE: ACH Transfers are NOT wire transfers: An ACH transfer is not immediately available funds and requires additional time for clearance. An ACH transfer cannot be accepted for an imminent closing. Acceptance of ACH transfers are subject to state law."),i.a.createElement("p",null,i.a.createElement("b",null,"BEWARE OF CYBER-CRIME! Our bank wire instructions will not change.")),i.a.createElement("p",null,"If you receive an e-mail or any other communication that appears to be generated from NILE or Endpoint that contains new, revised or altered bank wire instructions, consider it suspect and call our office at a number you trust.")),i.a.createElement("div",{className:"wire-instruction-action"},i.a.createElement("button",{className:"prev_btn",onClick:a},"Close"),!c&&i.a.createElement("button",{className:"next_btn animated_fastest",onClick:function(){o({offerId:d()(t,["OfferId"]),newStep:h.Ac.scheduleAProperty}),a()},disabled:r},"Confirm Wire 3%")))))})),pe=Object(m.a)((function(e){return{spacing:{padding:e.spacing(2)},title:{fontFamily:e.typography.fontFamily.avenir85},dialogContent:{fontFamily:e.typography.fontFamily.avenir85,padding:e.spacing(2),paddingTop:0},actionWrapper:{backgroundColor:e.palette.background.lightGray,justifyContent:"flex-end",padding:"1rem"},acceptButton:{borderRadius:0,padding:"0.5625rem 2rem",color:e.palette.common.white,borderWidth:"2px"},declineButton:{borderRadius:0,padding:"0.5625rem 2rem",color:e.palette.error.dark}}})),ue=Object(v.b)({isLoading:function(e){return d()(e,["buyerOffer","isLoading"])}}),me={updateOfferStep:b.c},ge=Object(le.c)(Object(O.connect)(ue,me),Object(ie.a)((function(e){var n=e.offer;return n&&d()(n,["OfferId"])})),o.memo)((function(e){var n=e.open,a=e.handleClose,t=e.offer,r=e.isLoading,o=e.updateOfferStep,l=pe();return i.a.createElement(_.a,{open:n,onClose:a,scroll:"paper",fullWidth:!0,maxWidth:"sm",visible:1},i.a.createElement(_.d,{id:"customized-dialog-title",disableTypography:!0,onClose:a,classes:{root:l.spacing}},i.a.createElement(V.a,{variant:"h3",className:l.title},"Schedule Inspection")),i.a.createElement(_.c,{className:l.dialogContent},i.a.createElement(V.a,{variant:"h4"},"Please contact a NILE Advisor to schedule a house inspection")),i.a.createElement(Y.a,null),i.a.createElement(_.b,null,i.a.createElement(G.a,{container:!0,alignItems:"center",className:l.actionWrapper},i.a.createElement(J.a,{className:l.declineButton,onClick:a,disabled:r},"Close"),i.a.createElement(J.a,{variant:"contained",color:"primary",disableElevation:!0,className:l.acceptButton,onClick:function(){o({offerId:d()(t,["OfferId"]),newStep:h.Ac.submitCorrectiveAction}),a()},disabled:r},"Schedule Inspection"))))})),be=Object(m.a)((function(e){return{spacing:{padding:e.spacing(2)},title:{fontFamily:e.typography.fontFamily.avenir85},dialogContent:{padding:e.spacing(2),paddingTop:0},field:{marginBottom:e.spacing(1.5)},fieldLabel:{marginBottom:e.spacing(1),color:e.palette.primary.gray,textTransform:"uppercase"},fieldValue:{color:e.palette.text.secondaryDark}}})),Oe=function(e){var n=e.open,a=e.onClose,t=e.offer,r=be();if(Object(Z.b)({open:n}),c()(t))return i.a.createElement(i.a.Fragment,null);var o=function(e){if(!e||c()(e))return[];var n=d()(e,"Funding.PurchaseType","");return[{label:"Offer No",value:d()(e,"OfferNo","")},{label:"offer price",value:d()(e,"Offer.OfferPrice")?Object(q.b)(d()(e,"Offer.OfferPrice")):"TBD"},{label:"funding",value:n},{label:"Loan Type",value:n===h.pc.cash?"N/A":d()(e,"Funding.LoanType","")},{label:"finance contingency",value:n===h.pc.cash?"N/A":d()(e,"Offer.FinanceContingency","")},{label:"due diligence contingency",value:d()(e,"Offer.InspectionContingency","")},{label:"home sale contingency",value:d()(e,"Offer.SaleOfHomeContingency","")},{label:"Closing Period",value:d()(e,"Offer.ClosingPeriod","")},{label:"Furniture",value:Object(X.c)(d()(e,"Offer.Furniture",""),d()(e,"Offer.FurnitureOther",""))},{label:"Buyer Name",value:Object(X.e)(e)},{label:"Buyer Agent Name",value:Object(X.f)(d()(e,"AgentInfo",{}))},{label:"Nile Listing Agent Name",value:"Khaled Yatim"},{label:"Property Address",value:d()(e,"Property.PropertyData.FullAddress","")}]}(t);return i.a.createElement(_.a,{open:n,"aria-labelledby":"customized-dialog-title",onClose:a,scroll:"paper",fullWidth:!0,maxWidth:"sm",visible:1},i.a.createElement(_.d,{id:"customized-dialog-title",disableTypography:!0,onClose:a,classes:{root:r.spacing}},i.a.createElement(V.a,{variant:"h4",className:r.title},"Offer ",d()(t,"OfferNo","")," - Original Offer")),i.a.createElement(_.c,{className:r.dialogContent},i.a.createElement(G.a,{container:!0},o.map((function(e){var n=e.label,a=e.value;return i.a.createElement(G.a,{item:!0,xs:4,key:n,className:r.field},i.a.createElement(V.a,{variant:"h6",className:r.fieldLabel},n),i.a.createElement(V.a,{variant:"h5",className:r.fieldValue},a))})))))},ve=Object(m.a)((function(e){return{container:{minHeight:"100px",marginBottom:e.spacing(3)},loading:{border:"1px solid #E0E0E0",backgroundColor:e.palette.common.white}}})),ye=Object(v.b)({isUpdatedStep:function(e){return d()(e,["buyerOffer","isUpdatedStep"])},error:function(e){return d()(e,["buyerOffer","error"])},isFormLoaded:function(e){return d()(e,["form","isFormLoaded"])}}),he={saveOfferStep:b.c};n.default=Object(O.connect)(ye,he)(Object(g.a)((function(e){var n=e.error,a=e.saveOfferStep,l=e.isFormLoaded,s=e.isUpdatedStep,m=e.offers,g=e.getBuyerOffers,b=e.isLoading,O=ve(),v=Object(o.useState)(void 0),E=Object(r.a)(v,2),I=E[0],j=E[1],N=Object(o.useState)(!1),A=Object(r.a)(N,2),k=A[0],S=A[1],F=Object(o.useState)(!1),w=Object(r.a)(F,2),T=w[0],B=w[1],L=Object(o.useState)(!1),D=Object(r.a)(L,2),P=D[0],R=D[1],x=Object(o.useState)({children:"",onAgree:function(){return""}}),W=Object(r.a)(x,2),M=W[0],U=W[1],V=Object(o.useState)(!1),G=Object(r.a)(V,2),Y=G[0],_=G[1],q=Object(o.useState)(!1),J=Object(r.a)(q,2),K=J[0],Q=J[1],Z=Object(o.useState)(!1),$=Object(r.a)(Z,2),te=$[0],re=$[1];if(Object(o.useEffect)((function(){var e=(n||{}).message;e&&y.toastr.error(C.a.saveFailure,e)}),[n]),Object(o.useEffect)((function(){s&&(g(),de())}),[s]),c()(m)&&!b)return i.a.createElement(i.a.Fragment,null);var oe,ie=function(e){j(e),S(!0)},le=function(e){return"Are you sure? - This action cannot be reverted. Do you want to ".concat(e," the offer?")},ce=function(e){a({offerId:e,newStep:h.Ac.advisorNeedToReviewOffer})},se=function(e){a({offerId:e,newStep:h.Ac.buyerDecline})},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.isReload;j(),_(!1),S(!1),R(!1),n&&g()},pe=function(e){j(e),Q(!0)},ue=function(e){j(e),re(!0)},me=function(e){j(e),B(!0)},be=I&&Object(X.i)(I);return i.a.createElement(p.a,{tag:"div",blocking:b,loader:i.a.createElement(f.Loader,{active:!0,type:"ball-pulse",color:"rgba(231,28,99,1)"}),className:Object(u.a)(O.container,Object(t.a)({},O.loading,b))},m.map((function(e){return i.a.createElement(z,{offer:e,key:d()(e,"OfferId"),openOfferDialogHandler:ie,openConfirmTransferHandler:pe,openScheduleInspectionHandler:ue,openOriginalOfferDialogHandler:me})})),i.a.createElement(ae.a,{offer:be,open:Y,handleClickCloseDialog:de,isFormLoaded:l}),i.a.createElement(ee,{open:k,offer:be,onClose:function(){j(void 0),S(!1)},handleApproval:function(e){R(!0),U({children:le("accept"),onAgree:function(){R(!1),ce(e)}})},handleDecline:function(e){R(!0),U({children:le("decline"),onAgree:function(){R(!1),se(e)}})},handleCounter:function(e){j(e),S(!1),_(!0)},isSubmitting:b}),i.a.createElement(ne.a,Object.assign({open:P,onClose:function(){return R(!1)}},M)),i.a.createElement(fe,{open:K,handleClose:function(){return Q(!1)},offer:be,hideConfirmButton:(oe=I,d()(oe,"StepId",0)>H.confirmTransfer)}),i.a.createElement(ge,{open:te,handleClose:function(){return re(!1)},offer:be}),i.a.createElement(Oe,{open:T,onClose:function(){return B(!1)},offer:be}))})))}}]);
//# sourceMappingURL=12.64cbf369.chunk.js.map