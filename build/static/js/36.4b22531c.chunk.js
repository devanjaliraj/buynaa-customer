(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[36],{545:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=a(1),l=a(175);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(l.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:n.c,finalItem:"span"}))))}},546:function(e,t,a){"use strict";var c=a(0),r=a.n(c);t.a=function(e){for(var t=e.ratingValue,a=[],n=0;n<5;n++)a.push(r.a.createElement("i",{className:"fa fa-star-o",key:n}));if(t&&t>0)for(var l=0;l<=t-1;l++)a[l]=r.a.createElement("i",{className:"fa fa-star-o yellow",key:l});return r.a.createElement(c.Fragment,null,a)}},554:function(e,t,a){"use strict";var c=a(74),r=a(0),n=a.n(r),l=a(549),o=a.n(l),s=a(722),i=a(546),m=a(42);t.a=Object(m.connect)((function(e){return{cartitems:e.cartData}}))((function(e){var t=e.product,a=e.currency,l=e.discountedprice,m=e.finalproductprice,u=e.finaldiscountedprice,d=Object(r.useState)(null),p=Object(c.a)(d,2),E=p[0],f=p[1],b=Object(r.useState)(null),v=Object(c.a)(b,2),g=v[0],N=v[1],h=Object(r.useState)(t.data?t.data[0].color:""),w=Object(c.a)(h,2),O=w[0],j=w[1],y=Object(r.useState)(t.data?t.data[0].size[0].stock:t.stock),C=Object(c.a)(y,2),k=C[0],S=C[1],x=Object(r.useState)(1),P=Object(c.a)(x,2),T=P[0],F=P[1],I=e.wishlistitem,B=e.compareitem,z=e.addtocart,L=e.addtowishlist,A=e.addtocompare,_=e.addtoast;e.cartitems,Object(r.useEffect)((function(){null!==E&&E.controller&&null!==g&&g.controller&&(E.controller.control=g,g.controller.control=E)}),[E,g]);var D={getSwiper:f,spaceBetween:10,loopedSlides:4,loop:!0},H={getSwiper:N,spaceBetween:10,slidesPerView:4,loopedSlides:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return n.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},n.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return n.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},n.a.createElement("i",{className:"pe-7s-angle-right"}))}};return n.a.createElement(r.Fragment,null,n.a.createElement(s.a,{show:e.show,onHide:e.onHide,className:"product-quickview-modal-wrapper"},n.a.createElement(s.a.Header,{closeButton:!0}),n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-5 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"product-large-image-wrapper"},n.a.createElement(o.a,D,t.image&&t.image.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("div",{className:"single-image"},n.a.createElement("img",{src:""+e,className:"img-fluid",alt:""})))})))),n.a.createElement("div",{className:"product-small-image-wrapper mt-15"},n.a.createElement(o.a,H,t.image&&t.image.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("div",{className:"single-image"},n.a.createElement("img",{src:""+e,className:"img-fluid",alt:""})))}))))),n.a.createElement("div",{className:"col-md-7 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"product-details-content quickview-content"},n.a.createElement("h2",null,t.name),n.a.createElement("div",{className:"product-details-price"},null!==l?n.a.createElement(r.Fragment,null,n.a.createElement("span",null,a.currencySymbol+u)," ",n.a.createElement("span",{className:"old"},a.currencySymbol+m)):n.a.createElement("span",null,a.currencySymbol+m," ")),t.rating&&t.rating>0?n.a.createElement("div",{className:"pro-details-rating-wrap"},n.a.createElement("div",{className:"pro-details-rating"},n.a.createElement(i.a,{ratingValue:t.rating}))):"",n.a.createElement("div",{className:"pro-details-list"},n.a.createElement("p",null,t.shortDescription)),t.data?n.a.createElement("div",{className:"pro-details-size-color"},n.a.createElement("div",{className:"pro-details-color-wrap"},n.a.createElement("span",null,"Color"),n.a.createElement("div",{className:"pro-details-color-content"},t.data.map((function(e,t){return n.a.createElement("label",{className:"pro-details-color-content--single ".concat(e.color),key:t},n.a.createElement("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===O?"checked":"",onChange:function(){j(e.color),S(e.size[0].stock),F(1)}}),n.a.createElement("span",{className:"checkmark"}))})))),n.a.createElement("div",{className:"pro-details-size"},n.a.createElement("span",null,"Size"),n.a.createElement("div",{className:"pro-details-size-content"},t.data&&t.data.map((function(e){return e.color===O?e.size.map((function(e,t){return n.a.createElement("label",{className:"pro-details-size-content--single",key:t},n.a.createElement("span",{className:"size-name"},e.name))})):""}))))):"",t.affiliateLink?n.a.createElement("div",{className:"pro-details-quality"},n.a.createElement("div",{className:"pro-details-cart btn-hover"},n.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank"},"Buy Now"))):n.a.createElement("div",{className:"pro-details-quality"},n.a.createElement("div",{className:"cart-plus-minus"},n.a.createElement("button",{onClick:function(){return F(T>1?T-1:1)},className:"dec qtybutton"},"-"),n.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:T,readOnly:!0}),n.a.createElement("button",{className:"inc qtybutton"},"+")),n.a.createElement("div",{className:"pro-details-cart btn-hover"},k&&k>0?n.a.createElement("button",{onClick:function(){return z(t,_,T,O)}}," ","Add To Cart"," "):n.a.createElement("button",{disabled:!0},"Out of Stock")),n.a.createElement("div",{className:"pro-details-wishlist"},n.a.createElement("button",{className:void 0!==I?"active":"",disabled:void 0!==I,title:void 0!==I?"Added to wishlist":"Add to wishlist",onClick:function(){return L(t,_)}},n.a.createElement("i",{className:"pe-7s-like"}))),n.a.createElement("div",{className:"pro-details-compare"},n.a.createElement("button",{className:void 0!==B?"active":"",disabled:void 0!==B,title:void 0!==B?"Added to compare":"Add to compare",onClick:function(){return A(t,_)}},n.a.createElement("i",{className:"pe-7s-shuffle"}))))))))))}))},562:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=a(42),l=a(174),o=a(65),s=a(102),i=a(130),m=a(556),u=a.n(m),d=a(557),p=a(74),E=(a(177),a(1)),f=a(101),b=a(554),v=function(e){var t=e.product,a=e.currency,n=e.addToCart,o=e.addToWishlist,s=e.addToCompare,i=e.cartItem,m=e.wishlistItem,v=e.discountedPrice,g=e.compareItem,N=e.sliderClassName,h=e.spaceBottomClass,w=e.colorClass,O=e.titlePriceClass,j=Object(c.useState)(!1),y=Object(p.a)(j,2),C=y[0],k=y[1],S=Object(f.useToasts)().addToast,x=Object(c.useState)([]),P=Object(p.a)(x,2),T=P[0],F=P[1];Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://35.154.86.59/api/admin/getproduct");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,F(a.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[F]),v=Object(l.a)(t.price,t.discount);var I=+(t.price*a.currencyRate).toFixed(2),B=+(v*a.currencyRate).toFixed(2);return r.a.createElement(c.Fragment,null,T.map((function(e){return r.a.createElement("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6 ".concat(N||""),key:e._id},r.a.createElement("div",{className:"product-wrap-2 ".concat(h||""," ").concat(w||""," ")},r.a.createElement("div",{className:"product-img"},r.a.createElement(E.b,{to:"/product/"+e._id},r.a.createElement("img",{className:"default-img",src:e.product_img[0],alt:"",style:{width:"200px",height:"250px"}}),r.a.createElement("img",{className:"hover-img",src:e.product_img[1],alt:"",style:{width:"200px",height:"250px"}})),r.a.createElement("div",{className:"product-action-2"},e.affiliateLink?r.a.createElement("a",{href:e.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now"}," ",r.a.createElement("i",{className:"fa fa-shopping-cart"})," "):e.variation&&e.variation.length>=1?r.a.createElement(E.b,{to:"".concat("","/product/").concat(e.id),title:"Select options"},r.a.createElement("i",{className:"fa fa-cog"})):e.stock&&e.stock>0?r.a.createElement("button",{onClick:function(){return n(e,S)},className:void 0!==i&&i.quantity>0?"active":"",disabled:void 0!==i&&i.quantity>0,title:void 0!==i?"Added to cart":"Add to cart"}," ",r.a.createElement("i",{className:"fa fa-shopping-cart"})," "):r.a.createElement("button",{disabled:!0,className:"active",title:"Out of stock"},r.a.createElement("i",{className:"fa fa-shopping-cart"})),r.a.createElement("button",{onClick:function(){return k(!0)},title:"Quick View"},r.a.createElement("i",{className:"fa fa-eye"})),r.a.createElement("button",{className:void 0!==g?"active":"",disabled:void 0!==g,title:void 0!==g?"Added to compare":"Add to compare",onClick:function(){return s(e,S)}},r.a.createElement("i",{className:"fa fa-retweet"})))),r.a.createElement("div",{className:"product-content-2"},r.a.createElement("div",{className:"title-price-wrap-2 ".concat(O||"")},r.a.createElement("h3",null,r.a.createElement(E.b,{to:"/product/"+e._id},e.product_name)),r.a.createElement("div",{className:"price-2"},r.a.createElement(c.Fragment,null,r.a.createElement("span",null,"\u20b9 ",e.sell_price)))),r.a.createElement("div",{className:"pro-wishlist-2"},r.a.createElement("button",{className:void 0!==m?"active":"",disabled:void 0!==m,title:void 0!==m?"Added to wishlist":"Add to wishlist",onClick:function(){return o(e,S)}},r.a.createElement("i",{className:"fa fa-heart-o"}))))))})),r.a.createElement(b.a,{show:C,onHide:function(){return k(!1)},product:t,currency:a,discountedprice:v,finalproductprice:I,finaldiscountedprice:B,cartitem:i,wishlistitem:m,compareitem:g,addtocart:n,addtowishlist:o,addtocompare:s,addtoast:S}))},g=Object(n.connect)((function(e,t){return{products:Object(l.e)(e.productData.products,t.category,t.type,t.limit),currency:e.currencyData,cartItems:e.cartData,wishlistItems:e.wishlistData,compareItems:e.compareData}}),(function(e){return{addToCart:function(t,a,c,r,n){e(Object(o.e)(t,a,c,r,n))},addToWishlist:function(t,a){e(Object(s.d)(t,a))},addToCompare:function(t,a){e(Object(i.c)(t,a))}}}))((function(e){var t=e.products,a=e.currency,n=e.addToCart,l=e.addToWishlist,o=e.addToCompare,s=e.cartItems,i=e.wishlistItems,m=e.compareItems,u=e.sliderClassName,d=e.spaceBottomClass,p=e.colorClass,E=e.titlePriceClass;return r.a.createElement(c.Fragment,null,t.map((function(e){return r.a.createElement(v,{sliderClassName:u,spaceBottomClass:d,colorClass:p,product:e,currency:a,addToCart:n,addToWishlist:l,addToCompare:o,cartItem:s.filter((function(t){return t.id===e.id}))[0],wishlistItem:i.filter((function(t){return t.id===e.id}))[0],compareItem:m.filter((function(t){return t.id===e.id}))[0],key:e.id,titlePriceClass:E})})))}));t.a=function(e){var t=e.products,a=e.layout;return r.a.createElement("div",{className:"shop-bottom-area mt-35"},r.a.createElement("div",{className:"row ".concat(a||"")},r.a.createElement(g,{products:t,spaceBottomClass:"mb-25"})))}},636:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=a(174),l=function(e){var t=e.products,a=e.getSortParams,c=Object(n.b)(t),l=Object(n.c)(t),o=Object(n.f)(t),s=Object(n.d)(t);return r.a.createElement("div",{className:"product-filter-wrapper",id:"product-filter-wrapper"},r.a.createElement("div",{className:"product-filter-wrapper__inner"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30"},r.a.createElement("div",{className:"product-filter"},r.a.createElement("h5",null,"Categories"),c?r.a.createElement("ul",null,c.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(t){a("category",e),Object(n.i)(t)}},e))}))):"No categories found")),r.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30"},r.a.createElement("div",{className:"product-filter"},r.a.createElement("h5",null,"Color"),l?r.a.createElement("ul",null,l.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(t){a("color",e),Object(n.i)(t)}},e))}))):"No colors found")),r.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30"},r.a.createElement("div",{className:"product-filter"},r.a.createElement("h5",null,"Size"),o?r.a.createElement("ul",null,o.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{className:"text-uppercase",onClick:function(t){a("size",e),Object(n.i)(t)}},e))}))):"No sizes found")),r.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30"},r.a.createElement("div",{className:"product-filter product-filter--tag"},r.a.createElement("h5",null,"Tag"),s?r.a.createElement("ul",null,s.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(t){a("tag",e),Object(n.i)(t)}},e))}))):"No tags found")))))},o=function(e){var t=e.getFilterSortParams,a=e.productCount,o=e.sortedProductCount,s=e.products,i=e.getSortParams;return r.a.createElement(c.Fragment,null,r.a.createElement("div",{className:"shop-top-bar mb-35"},r.a.createElement("div",{className:"select-shoing-wrap"},r.a.createElement("div",{className:"shop-select"},r.a.createElement("select",{onChange:function(e){return t("filterSort",e.target.value)}},r.a.createElement("option",{value:"default"},"Default"),r.a.createElement("option",{value:"priceHighToLow"},"Price - High to Low"),r.a.createElement("option",{value:"priceLowToHigh"},"Price - Low to High"))),r.a.createElement("p",null,"Showing ",o," of ",a," result")),r.a.createElement("div",{className:"filter-active"},r.a.createElement("button",{onClick:function(e){return Object(n.j)(e)}},r.a.createElement("i",{className:"fa fa-plus"})," filter"))),r.a.createElement(l,{products:s,getSortParams:i}))};t.a=function(e){var t=e.getLayout,a=e.getFilterSortParams,n=e.productCount,l=e.sortedProductCount,s=e.products,i=e.getSortParams;return r.a.createElement(c.Fragment,null,r.a.createElement(o,{getLayout:t,getFilterSortParams:a,productCount:n,sortedProductCount:l,products:s,getSortParams:i}))}},699:function(e,t,a){"use strict";a.r(t);var c=a(74),r=a(0),n=a.n(r),l=a(547),o=a.n(l),s=a(586),i=a(175),m=a(42),u=a(174),d=a(176),p=a(545),E=a(636),f=a(562);t.default=Object(m.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.location,a=e.products,l=Object(r.useState)("grid three-column"),m=Object(c.a)(l,2),b=m[0],v=m[1],g=Object(r.useState)(""),N=Object(c.a)(g,2),h=N[0],w=N[1],O=Object(r.useState)(""),j=Object(c.a)(O,2),y=j[0],C=j[1],k=Object(r.useState)(""),S=Object(c.a)(k,2),x=S[0],P=S[1],T=Object(r.useState)(""),F=Object(c.a)(T,2),I=F[0],B=F[1],z=Object(r.useState)(0),L=Object(c.a)(z,2),A=L[0],_=L[1],D=Object(r.useState)(1),H=Object(c.a)(D,2),q=H[0],R=H[1],V=Object(r.useState)([]),W=Object(c.a)(V,2),J=W[0],M=W[1],Q=Object(r.useState)([]),G=Object(c.a)(Q,2),K=G[0],U=G[1],X=t.pathname;return Object(r.useEffect)((function(){var e=Object(u.g)(a,h,y),t=Object(u.g)(e,x,I);U(e=t),M(e.slice(A,A+15))}),[A,a,h,y,x,I]),n.a.createElement(r.Fragment,null,n.a.createElement(o.a,null,n.a.createElement("title",null,"Flone | Shop Page"),n.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),n.a.createElement(i.BreadcrumbsItem,{to:"/"},"Home"),n.a.createElement(i.BreadcrumbsItem,{to:""+X},"Shop"),n.a.createElement(d.a,{headerTop:"visible"},n.a.createElement(p.a,null),n.a.createElement("div",{className:"shop-area pt-95 pb-100"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(E.a,{getLayout:function(e){v(e)},getFilterSortParams:function(e,t){P(e),B(t)},productCount:a.length,sortedProductCount:J.length,products:a,getSortParams:function(e,t){w(e),C(t)}}),n.a.createElement(f.a,{layout:b,products:J}),n.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},n.a.createElement(s.a,{totalRecords:K.length,pageLimit:15,pageNeighbours:2,setOffset:_,currentPage:q,setCurrentPage:R,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))}}]);
//# sourceMappingURL=36.4b22531c.chunk.js.map