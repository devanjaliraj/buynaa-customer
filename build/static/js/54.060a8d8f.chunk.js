(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[54],{552:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(6),s=t(178);a.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(s.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:c.c,finalItem:"span"}))))}},790:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var l=t(180),n=t(181),c=t(182),s=t(183),r=t(184),m=t(0),i=t.n(m),o=t(554),d=t.n(o),u=t(178),p=t(665),E=t(179),h=t(552),g=t(695),b=t(58),v=t.n(b),f=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var c;return Object(n.a)(this,t),(c=a.call(this,e)).addAddress=function(e){e.preventDefault(),console.log(c.state),v.a.post("http://35.154.86.59/api/user/addcus_address",c.state,{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},c.submitHandler=function(e){console.log(e)},c.changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(l.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault();c.props.match.params.id;v.a.post("http://35.154.86.59/api/user/editcustomer",c.state,{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},c.state={firstname:"",lastname:"",address:"",locality:"",pincode:"",city:"",state:""},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://35.154.86.59/api/user/getonecustomer",{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(a){console.log(a),e.setState({firstname:a.data.data.firstname,lastname:a.data.data.lastname,email:a.data.data.email,mobile:a.data.data.mobile}),console.log(e.state)})).catch((function(e){console.log(e.response)})),v.a.get("http://35.154.86.59/api/user/viewoneuseraddress",{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(a){console.log(a),e.setState({address:a.data.data.address,locality:a.data.data.locality,pincode:a.data.data.pincode,city:a.data.data.city,state:a.data.data.state}),console.log(e.state)})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return i.a.createElement(m.Fragment,null,i.a.createElement(d.a,null,i.a.createElement("title",null,"Agricoin | My Account"),i.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),i.a.createElement(u.BreadcrumbsItem,{to:"/"},"Home"),i.a.createElement(E.a,{headerTop:"visible"},i.a.createElement(h.a,null),i.a.createElement("div",{className:"myaccount-area pb-80 pt-100"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row d-flex justify-content-center align-items-center"},i.a.createElement("div",{className:"ml-auto mr-auto col-lg-9"},i.a.createElement("div",{className:"myaccount-wrapper"},i.a.createElement(p.a,{className:"single-my-account mb-20"},i.a.createElement(p.a.Header,{className:"panel-heading"}),i.a.createElement(p.a.Body,null,i.a.createElement(g.a,{onSubmit:this.submitHandler},i.a.createElement("div",{className:"myaccount-info-wrapper"},i.a.createElement("div",{className:"account-info-wrapper"},i.a.createElement("h4",null,"My Account Information")),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"billing-info"},i.a.createElement("label",null,"First Name"),i.a.createElement("input",{type:"text",placeholder:"First Name",name:"firstname",value:this.state.firstname,onChange:this.changeHandler}))),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"billing-info"},i.a.createElement("label",null,"Last Name"),i.a.createElement("input",{type:"text",placeholder:"Last Name",name:"lastname",value:this.state.lastname,onChange:this.changeHandler}))),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"billing-info"},i.a.createElement("label",null,"Email Address"),i.a.createElement("input",{readOnly:!0,type:"email",placeholder:"Customer Email",name:"email",value:this.state.email,onChange:this.changeHandler}))),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"billing-info"},i.a.createElement("label",null,"Mobile Number"),i.a.createElement("input",{readOnly:!0,type:"number",name:"mobile",value:this.state.mobile,onChange:this.changeHandler})))),i.a.createElement("div",{className:"billing-back-btn"},i.a.createElement("div",{className:"billing-btn"},i.a.createElement("button",{type:"submit"},"Continue"))))))),i.a.createElement(p.a,{className:"single-my-account mb-20"},i.a.createElement(p.a.Body,null,i.a.createElement(g.a,{onSubmit:this.addAddress},i.a.createElement("div",{className:"myaccount-info-wrapper"},i.a.createElement("div",{className:"account-info-wrapper"},i.a.createElement("h4",null,"My Address")),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"billing-info"},i.a.createElement("label",null,"Address"),i.a.createElement("input",{type:"textarea",placeholder:"Address",name:"address",value:this.state.address,onChange:this.changeHandler}))),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"billing-info"},i.a.createElement("label",null,"Locality"),i.a.createElement("input",{type:"text",placeholder:"Locality",name:"locality",value:this.state.locality,onChange:this.changeHandler}))),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"billing-info"},i.a.createElement("label",null,"Pin Code"),i.a.createElement("input",{type:"number",placeholder:"Pin Code",name:"pincode",value:this.state.pincode,onChange:this.changeHandler}))),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"billing-info"},i.a.createElement("label",null,"City"),i.a.createElement("input",{type:"text",placeholder:"city",name:"city",value:this.state.city,onChange:this.changeHandler}))),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"billing-info"},i.a.createElement("label",null,"State"),i.a.createElement("input",{type:"text",placeholder:"State",name:"state",value:this.state.state,onChange:this.changeHandler})))),i.a.createElement("div",{className:"billing-back-btn"},i.a.createElement("div",{className:"billing-btn"},i.a.createElement("button",{type:"submit"},"Continue"))))))),i.a.createElement(p.a,{className:"single-my-account mb-20"},i.a.createElement(p.a.Body,null,i.a.createElement(g.a,{onSubmit:this.addAddress},i.a.createElement("div",{className:"myaccount-info-wrapper"},i.a.createElement("div",{className:"account-info-wrapper"},i.a.createElement("h4",null,"My Orders")),i.a.createElement("div",{className:"row"}),i.a.createElement("div",{className:"billing-back-btn"},i.a.createElement("div",{className:"billing-btn"},i.a.createElement("button",{type:"submit"},"Continue"))))))))))))))}}]),t}(m.Component)}}]);
//# sourceMappingURL=54.060a8d8f.chunk.js.map