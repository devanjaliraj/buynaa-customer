(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[21],{700:function(e){e.exports=JSON.parse('[{"id":1,"title":"Best Products Collection","subtitle":"Final Sale For <br /> 2020","image":"/assets/img/slider/slider-30.jpg","url":"/shop-grid-standard"},{"id":2,"title":"Best Products Collection","subtitle":"Final Sale For <br /> 2020","image":"/assets/img/slider/slider-30.jpg","url":"/shop-grid-standard"}]')},701:function(e,t,a){e.exports=a.p+"static/media/banner.7cfc0562.jpg"},702:function(e,t,a){e.exports=a.p+"static/media/buynaa1.fee3c8e1.gif"},703:function(e,t,a){e.exports=a.p+"static/media/buynaa2.cafd9785.gif"},704:function(e,t,a){e.exports=a.p+"static/media/buynaa3.aa1e86ef.gif"},705:function(e,t,a){},706:function(e,t,a){e.exports=a.p+"static/media/men.d3712790.jpg"},707:function(e,t,a){e.exports=a.p+"static/media/women.a056abed.jpg"},708:function(e,t,a){e.exports=a.p+"static/media/kid.1255d88f.jpg"},799:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(566),c=a.n(r),s=a(700),i=a(48),o=a.n(i),m=a(78),d=a(181),u=a(182),p=a(183),h=a(184),g=a(7),f=a(754),E=a(701),v=a.n(E),y=a(58),b=a.n(y),w=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).search=function(){var e=Object(m.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({loading:!0}),console.log(n.state),b.a.post("http://35.154.86.59/api/admin/searchinputproduct",{oneinput:n.state.value}).then((function(e){console.log(e.data.data),n.setState({products:e.data.data}),console.log(n.state.products)})).catch((function(e){console.log(e),console.log(e.response)})),n.setState({loading:!1});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onChangeHandler=function(){var e=Object(m.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.search(t.target.value),n.setState({value:t.target.value});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={products:[],loading:!1,value:""},n}return Object(u.a)(a,[{key:"renderMovies",get:function(){return l.a.createElement("h4",null,"There's no products")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"single-slider-2 slider-height-1 d-flex align-items-center bg-img ".concat(this.props.sliderClass?this.props.sliderClass:""),style:{backgroundImage:"url(".concat(v.a,")"),height:"100vh"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-6 col-lg-7 col-md-8 col-12"},l.a.createElement("div",{className:"slider-content-red slider-content-2 slider-content-2--white slider-animated-1"},l.a.createElement("h1",{className:"animated",style:{color:"white"}}," ","Discover ",l.a.createElement("br",null)," Apparel Stores ",l.a.createElement("br",null)," Near You"),l.a.createElement("h3",{className:"animated no-style mb-2",style:{color:"#FFFFFF"}},"One Stop Shop for you local clothing"),l.a.createElement("div",{className:"d-flex"},l.a.createElement(f.a,{type:"search",value:this.state.value,onChange:function(t){return e.onChangeHandler(t)},placeholder:"Type something to search"})),l.a.createElement("div",{style:{backgroundColor:"white",textTransform:"capitalize"}},this.state.products.map((function(e){return l.a.createElement("li",{className:"p-1",key:null===e||void 0===e?void 0:e._id},l.a.createElement(g.b,{to:"/product-slider/"+e.store}," ",null===e||void 0===e?void 0:e.product_name)," ")}))))))))}}]),a}(n.Component),N=function(){var e={};return l.a.createElement("div",{className:"slider-area"},l.a.createElement("div",{className:"slider-active nav-style-1"},l.a.createElement(c.a,e,s&&s.map((function(e,t){return l.a.createElement(w,{data:e,key:t,sliderClass:"swiper-slide"})})))))},x=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"mt-5"},l.a.createElement("h2",{className:"fw-bolder",style:{textAlign:"center",color:"#1877f2",marginTop:15}},"How Buynaa Works?"),l.a.createElement("h6",{style:{textAlign:"center"}},"quis qui ex in qui non reprehenderit"))}}]),a}(n.Component),j=a(548),k=a(549),O=a(688),C=a(747),S=a(702),B=a.n(S),F=a(703),A=a.n(F),P=a(704),T=a.n(P),L=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"mt-1 mb-3"},l.a.createElement(j.a,null,l.a.createElement(k.a,{className:"justify-content-center"},l.a.createElement(O.a,{lg:"2",style:{textAlign:"center"}},l.a.createElement("img",{src:B.a,style:{width:"12rem"},alt:""}),l.a.createElement("h4",{className:"fw-bold"},"Find A Shop"),l.a.createElement("h5",{style:{font:"caption"}},"loremTempor mollit esse deserunt ea adipisicing mollit veniam")),l.a.createElement(O.a,{lg:"1",className:"d-flex align-items-center"},l.a.createElement(C.a,{size:20,className:"p-1",style:{background:"#1877f2",color:"white",borderRadius:"10px"}})),l.a.createElement(O.a,{lg:"2",style:{textAlign:"center"}},l.a.createElement("img",{src:A.a,style:{width:"12rem"},alt:""}),l.a.createElement("h4",{className:"fw-bold"},"Check Shop Profile"),l.a.createElement("h5",{style:{font:"caption"}},"loremTempor mollit esse deserunt ea adipisicing mollit veniam")),l.a.createElement(O.a,{lg:"1",className:"d-flex align-items-center"},l.a.createElement(C.a,{size:20,className:"p-1",style:{background:"#1877f2",color:"white",borderRadius:"10px"}})),l.a.createElement(O.a,{lg:"2",style:{textAlign:"center"}},l.a.createElement("img",{src:T.a,style:{width:"12rem"},alt:""}),l.a.createElement("h4",{className:"fw-bold"},"Visit the Shop"),l.a.createElement("h5",{style:{font:"caption"}},"loremTempor mollit esse deserunt ea adipisicing mollit veniam")))))}}]),a}(n.Component),_=a(755),V=a(756),q=(a(667),a(681),a(682),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={storeL:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://35.154.86.59/api/admin/browsebytrending_store").then((function(t){console.log(t.data.data),e.setState({storeL:t.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e;return l.a.createElement(j.a,{fluid:!0},l.a.createElement(_.a,{className:"mt-4"},l.a.createElement(j.a,{className:"d-flex justify-content-center align-items-center"},l.a.createElement(k.a,null,l.a.createElement(O.a,{className:"mt-5",style:{marginLeft:"5rem"}},l.a.createElement("h2",{className:"fw-bolder",style:{color:"#1877f2"}},"Browse By Trending Store")))),l.a.createElement(V.a,null,l.a.createElement("div",null,l.a.createElement(c.a,Object.assign({},{slidesPerView:5,spaceBetween:5,breakpoints:{1024:{slidesPerView:4,spaceBetween:10},768:{slidesPerView:3,spaceBetween:10},640:{slidesPerView:2,spaceBetween:10},320:{slidesPerView:1,spaceBetween:10}}},{style:{width:"10px"}}),null===(e=this.state.storeL)||void 0===e?void 0:e.map((function(e){return l.a.createElement("div",{className:"",key:e._id,style:{width:"15rem"}},l.a.createElement(g.b,{to:"/product-slider/"+e._id},l.a.createElement("img",{src:e.storeImg[0],alt:"swiper 1",style:{width:"200px",height:"35vh"}})))})))))))}}]),a}(l.a.Component)),z=a(709),D=a(656),H=(a(705),a(706)),J=a.n(H),M=a(707),I=a.n(M),R=a(708),W=a.n(R),Y=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={ByCategoryList:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://35.154.86.59/api/admin/getproductCategory/").then((function(t){console.log(t),e.setState({ByCategoryList:t.data.data})}))}},{key:"render",value:function(){var e;null===(e=this.state.ByCategoryList)||void 0===e||e.map((function(e){var t;return l.a.createElement("div",null,l.a.createElement(O.a,{lg:"4"},l.a.createElement(g.b,{to:"/shop-list-standard/".concat(null===(t=e.data)||void 0===t?void 0:t._id)},l.a.createElement("img",{src:null===e||void 0===e?void 0:e.product_img,alt:"store",height:"320vh",width:"250px"})))," ",l.a.createElement(O.a,{lg:"4"}))}));return l.a.createElement(j.a,{className:"main mb-2"},l.a.createElement(z.a,{className:"mb-5"},l.a.createElement(k.a,{className:"m-2"},l.a.createElement(O.a,null,l.a.createElement("h1",{sm:"6",className:"fw-bolder text-primary",style:{color:"#1877f2"}},"Browse By Category")),l.a.createElement(O.a,{className:"d-flex justify-content-end"},l.a.createElement(D.a,{color:"primary",className:"",onClick:function(e){window.location.href="/shop-grid-two-column",console.log("ok")}},"Explore All")))),l.a.createElement(z.a,{className:"d-flex align-items-center justify-content-center"},l.a.createElement(k.a,null,l.a.createElement(O.a,{lg:"4"},l.a.createElement(g.b,{to:"/shop-grid-men-column"},l.a.createElement("img",{src:J.a,alt:"img",height:"300vh",width:"300px"}))),l.a.createElement(O.a,{lg:"4"},l.a.createElement(g.b,{to:"/shop-grid-women-column"},l.a.createElement("img",{src:I.a,alt:"img",height:"300vh",width:"300px"}))),l.a.createElement(O.a,{lg:"4"},l.a.createElement(g.b,{to:"/shop-grid-kids-column"},l.a.createElement("img",{src:W.a,alt:"img",height:"300vh",width:"300px"}))))))}}]),a}(l.a.Component),G=a(179);t.default=function(){return l.a.createElement(G.a,null,l.a.createElement(N,null),l.a.createElement(x,null),l.a.createElement(L,null),l.a.createElement(q,null),l.a.createElement(Y,null))}}}]);
//# sourceMappingURL=21.7e6da643.chunk.js.map