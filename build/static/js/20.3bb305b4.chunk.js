(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[20],{646:function(e){e.exports=JSON.parse('[{"id":1,"title":"Best Products Collection","subtitle":"Final Sale For <br /> 2020","image":"/assets/img/slider/slider-30.jpg","url":"/shop-grid-standard"},{"id":2,"title":"Best Products Collection","subtitle":"Final Sale For <br /> 2020","image":"/assets/img/slider/slider-30.jpg","url":"/shop-grid-standard"}]')},647:function(e,t,a){e.exports=a.p+"static/media/banner.7cfc0562.jpg"},649:function(e,t,a){e.exports=a.p+"static/media/store1.d4709711.png"},650:function(e,t,a){e.exports=a.p+"static/media/store3.ef1d83be.png"},651:function(e,t,a){e.exports=a.p+"static/media/store4.6dd28252.png"},654:function(e,t,a){},725:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(549),c=a.n(r),s=a(646),i=a(693),o=a(648),m=a(647),d=a.n(m),u=function(e){e.data;var t=e.sliderClass;return n.a.createElement("div",{className:"single-slider-2 slider-height-1 d-flex align-items-center bg-img ".concat(t||""),style:{backgroundImage:"url(".concat(d.a,")"),height:"100vh"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-6 col-lg-7 col-md-8 col-12"},n.a.createElement("div",{className:"slider-content-red slider-content-2 slider-content-2--white slider-animated-1"},n.a.createElement("h1",{className:"animated",style:{color:"white"}}," ","Discover ",n.a.createElement("br",null)," Apparel Stores ",n.a.createElement("br",null)," Near You"),n.a.createElement("h3",{className:"animated no-style mb-2",style:{color:"#FFFFFF"}},"One Stop Shop for you local clothing"),n.a.createElement("div",{className:"d-flex"},n.a.createElement(i.a,{type:"search"}),n.a.createElement(o.a,{color:"primary",className:"ml-1"},"Search")))))))},p=function(){var e={};return n.a.createElement("div",{className:"slider-area"},n.a.createElement("div",{className:"slider-active nav-style-1"},n.a.createElement(c.a,e,s&&s.map((function(e,t){return n.a.createElement(u,{data:e,key:t,sliderClass:"swiper-slide"})})))))},h=a(179),g=a(180),E=a(181),f=a(182),y=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"mt-5"},n.a.createElement("h2",{className:"fw-bolder",style:{textAlign:"center",color:"#1877f2",margin:15}},"How Buynaa Works?"),n.a.createElement("h6",{style:{textAlign:"center",margin:20}},"quis qui ex in qui non reprehenderit"))}}]),a}(l.Component),v=a(541),b=a(542),w=a(637),N=a(689),x=a(649),j=a.n(x),O=a(650),k=a.n(O),S=a(651),B=a.n(S),C=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"mt-5 mb-5"},n.a.createElement(v.a,null,n.a.createElement(b.a,{className:"justify-content-center"},n.a.createElement(w.a,{lg:"2",style:{textAlign:"center"}},n.a.createElement("img",{src:j.a,style:{width:"10rem",height:"20vh"},alt:""}),n.a.createElement("h4",{className:"fw-bold"},"Find A Shop"),n.a.createElement("h5",{style:{font:"caption"}},"loremTempor mollit esse deserunt ea adipisicing mollit veniam")),n.a.createElement(w.a,{lg:"1",className:"d-flex align-items-center"},n.a.createElement(N.a,{size:20,className:"p-1",style:{background:"#1877f2",color:"white",borderRadius:"10px"}})),n.a.createElement(w.a,{lg:"2",style:{textAlign:"center"}},n.a.createElement("img",{src:k.a,style:{width:"10rem",height:"20vh"},alt:""}),n.a.createElement("h4",{className:"fw-bold"},"Check Shop Profile"),n.a.createElement("h5",{style:{font:"caption"}},"loremTempor mollit esse deserunt ea adipisicing mollit veniam")),n.a.createElement(w.a,{lg:"1",className:"d-flex align-items-center"},n.a.createElement(N.a,{size:20,className:"p-1",style:{background:"#1877f2",color:"white",borderRadius:"10px"}})),n.a.createElement(w.a,{lg:"2",style:{textAlign:"center"}},n.a.createElement("img",{src:B.a,style:{width:"10rem",height:"20vh"},alt:""}),n.a.createElement("h4",{className:"fw-bold"},"Visit the Shop"),n.a.createElement("h5",{style:{font:"caption"}},"loremTempor mollit esse deserunt ea adipisicing mollit veniam")))))}}]),a}(l.Component),F=a(694),A=a(695),L=a(1),P=a(177),V=a.n(P),W=(a(628),a(652),a(653),function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={storeL:[]},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;V.a.get("http://35.154.86.59/api/admin/getstore").then((function(t){console.log(t.data.data),e.setState({storeL:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e;return n.a.createElement(v.a,{fluid:!0},n.a.createElement(F.a,{className:"mt-4"},n.a.createElement(v.a,{className:"mb-4"},n.a.createElement(b.a,null,n.a.createElement(w.a,{className:"mt-5",style:{marginLeft:"5rem"}},n.a.createElement("h2",{className:"fw-bolder",style:{color:"#1877f2"}},"Browse By Trending Store")))),n.a.createElement(A.a,null,n.a.createElement("div",null,n.a.createElement(c.a,Object.assign({},{slidesPerView:5,spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1024:{slidesPerView:4,spaceBetween:10},768:{slidesPerView:3,spaceBetween:10},640:{slidesPerView:2,spaceBetween:10},320:{slidesPerView:1,spaceBetween:10}}},{style:{width:"10px"}}),null===(e=this.state.storeL)||void 0===e?void 0:e.map((function(e){return n.a.createElement("div",{className:"",style:{width:"18rem"}},n.a.createElement(L.b,{to:"/product-slider/"+e.id},n.a.createElement("img",{src:e.storeImg[0],alt:"swiper 1",style:{width:"15rem",height:"40vh"}})))})))))))}}]),a}(n.a.Component)),G=a(696),T=(a(654),function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={ByCategoryList:[]},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;V.a.get("http://35.154.86.59/api/admin/getproductCategory/").then((function(t){console.log(t),e.setState({ByCategoryList:t.data.data})}))}},{key:"render",value:function(){var e,t=null===(e=this.state.ByCategoryList)||void 0===e?void 0:e.map((function(e){var t;return n.a.createElement("div",null,n.a.createElement(w.a,{lg:"4"},n.a.createElement(L.b,{to:"/shop-list-standard/".concat(null===(t=e.data)||void 0===t?void 0:t._id)},n.a.createElement("img",{src:null===e||void 0===e?void 0:e.product_img,alt:"img",height:"320vh",width:"250px"})))," ",n.a.createElement(w.a,{lg:"4"}))}));return n.a.createElement(v.a,{className:"main mb-5"},n.a.createElement(G.a,{className:"mb-5  "},n.a.createElement(b.a,{className:"m-5"},n.a.createElement(w.a,null,n.a.createElement("h1",{sm:"6",className:"fw-bolder text-primary",style:{color:"#1877f2"}},"Browse By Category")),n.a.createElement(w.a,{className:"d-flex justify-content-end"},n.a.createElement(o.a,{color:"primary",className:"",onClick:function(e){return window.location.href="/shop-grid-two-column"}},"Explore")))),n.a.createElement(G.a,{className:"d-flex align-items-center justify-content-center"},t))}}]),a}(n.a.Component)),q=a(697),D=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return n.a.createElement(v.a,{style:{position:"absolute"}},n.a.createElement("div",{className:"row",style:{background:"#1877f2",marginTop:"-5rem",marginLeft:"4rem",padding:"10px"}},n.a.createElement("div",{className:"col-sm-5",style:{padding:"6px"}},n.a.createElement("h2",{style:{color:"white"}},"Get Started With Newsletter"),n.a.createElement("p",{className:"p-1 m-1 text-light"},"Get Started With Newsletter Get Started With.")),n.a.createElement("div",{className:"col-sm-2",style:{padding:"6px"}}),n.a.createElement("div",{className:"col-sm-5",style:{padding:"10px"}},n.a.createElement(q.a,null,n.a.createElement(i.a,{type:"search",id:"gsearch",name:"gsearch"}),n.a.createElement(o.a,{color:"primary",style:{background:"black"}},"SUBSCRIBE")),n.a.createElement("p",{className:"p-1 m-1 text-light"},"Get Started With Newsletter Get Started With Newsletter"))))}}]),a}(l.Component),I=a(176);t.default=function(){return n.a.createElement(I.a,null,n.a.createElement(p,null),n.a.createElement(y,null),n.a.createElement(C,null),n.a.createElement(W,null),n.a.createElement(T,null),n.a.createElement(D,{spaceBottomClass:"pb-100"}))}}}]);
//# sourceMappingURL=20.3bb305b4.chunk.js.map