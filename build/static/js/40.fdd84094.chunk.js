(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[40],{545:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(1),r=t(175);a.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(r.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:c.c,finalItem:"span"}))))}},566:function(e,a,t){"use strict";var l=t(0),n=l.createContext(null);n.displayName="CardHeaderContext",a.a=n},631:function(e,a,t){"use strict";var l=t(15),n=t(0),c=t(75),r=t.n(c),m=t(544);a.a=function(e){return n.forwardRef((function(a,t){return Object(m.jsx)("div",Object(l.a)(Object(l.a)({},a),{},{ref:t,className:r()(a.className,e)}))}))}},726:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(547),r=t.n(c),m=t(175),s=t(15),i=t(548),o=t(75),d=t.n(o),u=t(551),E=t(576),b=t(631),p=t(544),v=["bsPrefix","className","variant","as"],N=l.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.variant,c=e.as,r=void 0===c?"img":c,m=Object(i.a)(e,v),o=Object(u.a)(t,"card-img");return Object(p.jsx)(r,Object(s.a)({ref:a,className:d()(n?"".concat(o,"-").concat(n):o,l)},m))}));N.displayName="CardImg";var f=N,g=t(566),y=["bsPrefix","className","as"],j=l.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,c=e.as,r=void 0===c?"div":c,m=Object(i.a)(e,y),o=Object(u.a)(t,"card-header"),E=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:o}}),[o]);return Object(p.jsx)(g.a.Provider,{value:E,children:Object(p.jsx)(r,Object(s.a)(Object(s.a)({ref:a},m),{},{className:d()(n,o)}))})}));j.displayName="CardHeader";var O=j,x=["bsPrefix","className","bg","text","border","body","children","as"],h=Object(b.a)("h5"),w=Object(b.a)("h6"),C=Object(E.a)("card-body"),P=Object(E.a)("card-title",{Component:h}),k=Object(E.a)("card-subtitle",{Component:w}),B=Object(E.a)("card-link",{Component:"a"}),H=Object(E.a)("card-text",{Component:"p"}),I=Object(E.a)("card-footer"),K=Object(E.a)("card-img-overlay"),T=l.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.bg,c=e.text,r=e.border,m=e.body,o=e.children,E=e.as,b=void 0===E?"div":E,v=Object(i.a)(e,x),N=Object(u.a)(t,"card");return Object(p.jsx)(b,Object(s.a)(Object(s.a)({ref:a},v),{},{className:d()(l,N,n&&"bg-".concat(n),c&&"text-".concat(c),r&&"border-".concat(r)),children:m?Object(p.jsx)(C,{children:o}):o}))}));T.displayName="Card",T.defaultProps={body:!1};var A=Object.assign(T,{Img:f,Title:P,Subtitle:k,Body:C,Link:B,Text:H,Header:O,Footer:I,ImgOverlay:K}),F=t(641),M=t(176),R=t(545);a.default=function(e){var a=e.location.pathname;return n.a.createElement(l.Fragment,null,n.a.createElement(r.a,null,n.a.createElement("title",null,"Flone | My Account"),n.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),n.a.createElement(m.BreadcrumbsItem,{to:"/"},"Home"),n.a.createElement(m.BreadcrumbsItem,{to:""+a},"My Account"),n.a.createElement(M.a,{headerTop:"visible"},n.a.createElement(R.a,null),n.a.createElement("div",{className:"myaccount-area pb-80 pt-100"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"ml-auto mr-auto col-lg-9"},n.a.createElement("div",{className:"myaccount-wrapper"},n.a.createElement(F.a,{defaultActiveKey:"0"},n.a.createElement(A,{className:"single-my-account mb-20"},n.a.createElement(A.Header,{className:"panel-heading"},n.a.createElement(F.a.Toggle,{variant:"link",eventKey:"0"},n.a.createElement("h3",{className:"panel-title"},n.a.createElement("span",null,"1 .")," Edit your account information"," "))),n.a.createElement(F.a.Collapse,{eventKey:"0"},n.a.createElement(A.Body,null,n.a.createElement("div",{className:"myaccount-info-wrapper"},n.a.createElement("div",{className:"account-info-wrapper"},n.a.createElement("h4",null,"My Account Information"),n.a.createElement("h5",null,"Your Personal Details")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info"},n.a.createElement("label",null,"First Name"),n.a.createElement("input",{type:"text"}))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info"},n.a.createElement("label",null,"Last Name"),n.a.createElement("input",{type:"text"}))),n.a.createElement("div",{className:"col-lg-12 col-md-12"},n.a.createElement("div",{className:"billing-info"},n.a.createElement("label",null,"Email Address"),n.a.createElement("input",{type:"email"}))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info"},n.a.createElement("label",null,"Telephone"),n.a.createElement("input",{type:"text"}))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"billing-info"},n.a.createElement("label",null,"Fax"),n.a.createElement("input",{type:"text"})))),n.a.createElement("div",{className:"billing-back-btn"},n.a.createElement("div",{className:"billing-btn"},n.a.createElement("button",{type:"submit"},"Continue"))))))),n.a.createElement(A,{className:"single-my-account mb-20"},n.a.createElement(A.Header,{className:"panel-heading"},n.a.createElement(F.a.Toggle,{variant:"link",eventKey:"1"},n.a.createElement("h3",{className:"panel-title"},n.a.createElement("span",null,"2 .")," Change your password"))),n.a.createElement(F.a.Collapse,{eventKey:"1"},n.a.createElement(A.Body,null,n.a.createElement("div",{className:"myaccount-info-wrapper"},n.a.createElement("div",{className:"account-info-wrapper"},n.a.createElement("h4",null,"Change Password"),n.a.createElement("h5",null,"Your Password")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 col-md-12"},n.a.createElement("div",{className:"billing-info"},n.a.createElement("label",null,"Password"),n.a.createElement("input",{type:"password"}))),n.a.createElement("div",{className:"col-lg-12 col-md-12"},n.a.createElement("div",{className:"billing-info"},n.a.createElement("label",null,"Password Confirm"),n.a.createElement("input",{type:"password"})))),n.a.createElement("div",{className:"billing-back-btn"},n.a.createElement("div",{className:"billing-btn"},n.a.createElement("button",{type:"submit"},"Continue"))))))),n.a.createElement(A,{className:"single-my-account mb-20"},n.a.createElement(A.Header,{className:"panel-heading"},n.a.createElement(F.a.Toggle,{variant:"link",eventKey:"2"},n.a.createElement("h3",{className:"panel-title"},n.a.createElement("span",null,"3 .")," Modify your address book entries"," "))),n.a.createElement(F.a.Collapse,{eventKey:"2"},n.a.createElement(A.Body,null,n.a.createElement("div",{className:"myaccount-info-wrapper"},n.a.createElement("div",{className:"account-info-wrapper"},n.a.createElement("h4",null,"Address Book Entries")),n.a.createElement("div",{className:"entries-wrapper"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 col-md-6 d-flex align-items-center justify-content-center"},n.a.createElement("div",{className:"entries-info text-center"},n.a.createElement("p",null,"John Doe"),n.a.createElement("p",null,"Paul Park "),n.a.createElement("p",null,"Lorem ipsum dolor set amet"),n.a.createElement("p",null,"NYC"),n.a.createElement("p",null,"New York"))),n.a.createElement("div",{className:"col-lg-6 col-md-6 d-flex align-items-center justify-content-center"},n.a.createElement("div",{className:"entries-edit-delete text-center"},n.a.createElement("button",{className:"edit"},"Edit"),n.a.createElement("button",null,"Delete"))))),n.a.createElement("div",{className:"billing-back-btn"},n.a.createElement("div",{className:"billing-btn"},n.a.createElement("button",{type:"submit"},"Continue")))))))))))))))}}}]);
//# sourceMappingURL=40.fdd84094.chunk.js.map