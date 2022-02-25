(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[48],{552:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(6),o=t(178);a.a=function(){return l.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"breadcrumb-content text-center"},l.a.createElement(o.Breadcrumbs,{separator:l.a.createElement("span",null,"/"),item:c.c,finalItem:"span"}))))}},606:function(e,a,t){"use strict";var n=t(7),l=t(12),c=t(185),o=t(16),r=t(0),s=t.n(r),i=t(3),m=t.n(i),d=t(77),u=t.n(d),p=t(54),f=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],b={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:p.c,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(c.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],c=e.block,o=e.className,r=e.close,i=e.cssModule,m=e.color,d=e.outline,b=e.size,h=e.tag,g=e.innerRef,v=Object(l.a)(e,f);r&&"undefined"===typeof v.children&&(v.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var E="btn"+(d?"-outline":"")+"-"+m,N=Object(p.b)(u()(o,{close:r},r||"btn",r||E,!!b&&"btn-"+b,!!c&&"btn-block",{active:a,disabled:this.props.disabled}),i);v.href&&"button"===h&&(h="a");var y=r?"Close":null;return s.a.createElement(h,Object(n.a)({type:"button"===h&&v.onClick?"button":void 0},v,{className:N,ref:g,onClick:this.onClick,"aria-label":t||y}))},a}(s.a.Component);h.propTypes=b,h.defaultProps={color:"secondary",tag:"button"},a.a=h},682:function(e,a,t){"use strict";var n=t(7),l=t(12),c=t(185),o=t(16),r=t(0),s=t.n(r),i=t(3),m=t.n(i),d=t(77),u=t.n(d),p=t(54),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.c,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.focus=t.focus.bind(Object(c.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.type,o=e.bsSize,r=e.valid,i=e.invalid,m=e.tag,d=e.addon,b=e.plaintext,h=e.innerRef,g=Object(l.a)(e,f),v=["radio","checkbox"].indexOf(c)>-1,E=new RegExp("\\D","g"),N=m||("select"===c||"textarea"===c?c:"input"),y="form-control";b?(y+="-plaintext",N=m||"input"):"file"===c?y+="-file":"range"===c?y+="-range":v&&(y=d?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(p.d)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var j=Object(p.b)(u()(a,i&&"is-invalid",r&&"is-valid",!!o&&"form-control-"+o,y),t);return("input"===N||m&&"function"===typeof m)&&(g.type=c),g.children&&!b&&"select"!==c&&"string"===typeof N&&"select"!==N&&(Object(p.d)('Input with a type of "'+c+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),s.a.createElement(N,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":i}))},a}(s.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},689:function(e,a,t){"use strict";var n=t(7),l=t(12),c=t(0),o=t.n(c),r=t(3),s=t.n(r),i=t(77),m=t.n(i),d=t(54),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=s.a.oneOfType([s.a.number,s.a.string]),f=s.a.oneOfType([s.a.bool,s.a.string,s.a.number,s.a.shape({size:p,order:p,offset:p})]),b={children:s.a.node,hidden:s.a.bool,check:s.a.bool,size:s.a.string,for:s.a.string,tag:d.c,className:s.a.string,cssModule:s.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:s.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,c=e.hidden,r=e.widths,s=e.tag,i=e.check,p=e.size,f=e.for,b=Object(l.a)(e,u),h=[];r.forEach((function(a,n){var l=e[a];if(delete b[a],l||""===l){var c,o=!n;if(Object(d.a)(l)){var r,s=o?"-":"-"+a+"-";c=g(o,a,l.size),h.push(Object(d.b)(m()(((r={})[c]=l.size||""===l.size,r["order"+s+l.order]=l.order||0===l.order,r["offset"+s+l.offset]=l.offset||0===l.offset,r))),t)}else c=g(o,a,l),h.push(c)}}));var v=Object(d.b)(m()(a,!!c&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),t);return o.a.createElement(s,Object(n.a)({htmlFor:f},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v},698:function(e,a,t){"use strict";var n=t(7),l=t(12),c=t(0),o=t.n(c),r=t(3),s=t.n(r),i=t(77),m=t.n(i),d=t(54),u=["className","cssModule","row","disabled","check","inline","tag"],p={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:d.c,className:s.a.string,cssModule:s.a.object},f=function(e){var a=e.className,t=e.cssModule,c=e.row,r=e.disabled,s=e.check,i=e.inline,p=e.tag,f=Object(l.a)(e,u),b=Object(d.b)(m()(a,!!c&&"row",s?"form-check":"form-group",!(!s||!i)&&"form-check-inline",!(!s||!r)&&"disabled"),t);return"fieldset"===p&&(f.disabled=r),o.a.createElement(p,Object(n.a)({},f,{className:b}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},795:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O}));var n=t(180),l=t(181),c=t(182),o=t(183),r=t(184),s=t(0),i=t.n(s),m=t(554),d=t.n(m),u=t(178),p=t(665),f=t(179),b=t(552),h=t(695),g=t(689),v=t(682),E=t(698),N=t(606),y=t(58),j=t.n(y),O=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(e){var c;return Object(l.a)(this,t),(c=a.call(this,e)).addAddress=function(e){e.preventDefault(),console.log(c.state),j.a.post("http://35.154.134.118/api/user/addcus_address",c.state).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},c.submitHandler=function(e){console.log(e)},c.changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(n.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault();c.props.match.params.id;j.a.post("http://35.154.134.118/api/user/editcustomer",c.state).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},c.state={amount:"",state:""},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("http://35.154.134.118/api/user/getonecustomer").then((function(a){console.log(a),e.setState({amount:a.data.data.amount}),console.log(e.state)})).catch((function(e){console.log(e.response)})),j.a.get("http://35.154.134.118/api/user/viewoneuseraddress").then((function(a){console.log(a),e.setState({amount:a.data.data.amount,state:a.data.data.state}),console.log(e.state)})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return i.a.createElement(s.Fragment,null,i.a.createElement(d.a,null,i.a.createElement("title",null,"Agricoin | KYC FORM"),i.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),i.a.createElement(u.BreadcrumbsItem,{to:"/"},"Home"),i.a.createElement(u.BreadcrumbsItem,{to:"/"},"KYC FORM"),i.a.createElement(f.a,{headerTop:"visible"},i.a.createElement(b.a,null),i.a.createElement("div",{className:"myaccount-area pb-100 pt-100",style:{marginTop:"-60px"}},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row d-flex justify-content-center align-items-center"},i.a.createElement("div",{className:"ml-auto mr-auto col-lg-9"},i.a.createElement("div",{className:"myaccount-wrapper"},i.a.createElement(p.a,{className:"single-my-account mb-20"},i.a.createElement(p.a.Body,null,i.a.createElement(h.a,{onSubmit:this.submitHandler},i.a.createElement("div",{className:"myaccount-info-wrapper"},i.a.createElement("div",{className:"account-info-wrapper"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"billing-info"},i.a.createElement("ul",{className:""},i.a.createElement("li",{className:"wal"},i.a.createElement("h3",null,"KYC Registration Form"))))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement(g.a,null,"Name"),i.a.createElement("div",{className:"billing-info"},i.a.createElement(v.a,{type:"text",name:"name",id:"Name",placeholder:"Enter Your Name"}))),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement(g.a,null,"Phone No."),i.a.createElement("div",{className:"billing-info"},i.a.createElement(v.a,{type:"tel",name:"phone",id:"phone",placeholder:"Enter Your Number"}))),i.a.createElement(g.a,null,"Gender"),i.a.createElement("div",{className:"col-lg-3 col-md-6"},i.a.createElement(E.a,{check:!0,className:"p-2 m-2"},i.a.createElement(v.a,{className:"mb-0",name:"radio2",type:"radio"})," ",i.a.createElement(g.a,{check:!0},"Male"))),i.a.createElement("div",{className:"col-lg-3 col-md-6"},i.a.createElement(E.a,{check:!0,className:"p-2 m-2"},i.a.createElement(v.a,{className:"mb-0",name:"radio2",type:"radio"})," ",i.a.createElement(g.a,{check:!0},"Female"))),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement(g.a,null,"Nationality"),i.a.createElement("div",{className:"billing-info"},i.a.createElement(v.a,{type:"tel",name:"Nationality",id:"Nationality",placeholder:"Nationality "})))),i.a.createElement("div",{className:"col-lg-12 col-md-6"},i.a.createElement(g.a,null,"Address"),i.a.createElement("div",{className:"billing-info"},i.a.createElement(v.a,{type:"textarea",name:"address",id:"address",placeholder:"Enter Your Address"}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"upload"},i.a.createElement("h3",null,"upload your scanned photo identity card document"),i.a.createElement("div",{className:"account-info-wrapper ",style:{paddingBottom:"1px"}})),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement(g.a,null,"Type Aadhar Card/virtual Number"),i.a.createElement("div",{className:"billing-info"},i.a.createElement(v.a,{type:"number",name:"aadhar",id:"aadhar",placeholder:"Aadhar Card Number"}))),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement(g.a,null,"PAN Card"),i.a.createElement("div",{className:"billing-info"},i.a.createElement(v.a,{type:"text",name:"pan",id:"pan",placeholder:"PAN Card"}))),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement(g.a,null,"Upload Doc"),i.a.createElement("div",{className:"billing-info"},i.a.createElement(v.a,{id:"exampleFile",name:"file",type:"file"}))),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement(g.a,null,"Upload Doc"),i.a.createElement("div",{className:"billing-info"},i.a.createElement(v.a,{id:"exampleFile",name:"file",type:"file"})))),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement(N.a,{name:"subject",style:{backgroundColor:"#34b56b"}},"Submit")))))))))))))}}]),t}(s.Component)}}]);
//# sourceMappingURL=48.1e07b4d1.chunk.js.map