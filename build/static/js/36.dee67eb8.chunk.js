(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[36],{552:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=a(2),l=a(178);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(l.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:n.c,finalItem:"span"}))))}},556:function(e,t,a){"use strict";var c=a(0),r=a.n(c);t.a=function(e){for(var t=e.ratingValue,a=[],n=0;n<5;n++)a.push(r.a.createElement("i",{className:"fa fa-star-o",key:n}));if(t&&t>0)for(var l=0;l<=t-1;l++)a[l]=r.a.createElement("i",{className:"fa fa-star-o yellow",key:l});return r.a.createElement(c.Fragment,null,a)}},564:function(e,t,a){"use strict";var c=a(42),r=a(0),n=a.n(r),l=a(558),s=a.n(l),o=a(739),i=a(556),m=a(43);t.a=Object(m.connect)((function(e){return{cartitems:e.cartData}}))((function(e){var t=e.product,a=e.currency,l=e.discountedprice,m=e.finalproductprice,d=e.finaldiscountedprice,u=Object(r.useState)(null),p=Object(c.a)(u,2),E=p[0],b=p[1],f=Object(r.useState)(null),g=Object(c.a)(f,2),v=g[0],N=g[1],h=Object(r.useState)(t.data?t.data[0].color:""),k=Object(c.a)(h,2),w=k[0],y=k[1],O=Object(r.useState)(t.data?t.data[0].size[0].stock:t.stock),j=Object(c.a)(O,2),C=j[0],S=j[1],P=Object(r.useState)(1),x=Object(c.a)(P,2),T=x[0],z=x[1],B=e.wishlistitem,F=e.compareitem,A=e.addtocart,_=e.addtowishlist,I=e.addtocompare,L=e.addtoast;e.cartitems,Object(r.useEffect)((function(){null!==E&&E.controller&&null!==v&&v.controller&&(E.controller.control=v,v.controller.control=E)}),[E,v]);var q={getSwiper:b,spaceBetween:10,loopedSlides:4,loop:!0},D={getSwiper:N,spaceBetween:10,slidesPerView:4,loopedSlides:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return n.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},n.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return n.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},n.a.createElement("i",{className:"pe-7s-angle-right"}))}};return n.a.createElement(r.Fragment,null,n.a.createElement(o.a,{show:e.show,onHide:e.onHide,className:"product-quickview-modal-wrapper"},n.a.createElement(o.a.Header,{closeButton:!0}),n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-5 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"product-large-image-wrapper"},n.a.createElement(s.a,q,t.image&&t.image.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("div",{className:"single-image"},n.a.createElement("img",{src:""+e,className:"img-fluid",alt:""})))})))),n.a.createElement("div",{className:"product-small-image-wrapper mt-15"},n.a.createElement(s.a,D,t.image&&t.image.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("div",{className:"single-image"},n.a.createElement("img",{src:""+e,className:"img-fluid",alt:""})))}))))),n.a.createElement("div",{className:"col-md-7 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"product-details-content quickview-content"},n.a.createElement("h2",null,t.name),n.a.createElement("div",{className:"product-details-price"},null!==l?n.a.createElement(r.Fragment,null,n.a.createElement("span",null,a.currencySymbol+d)," ",n.a.createElement("span",{className:"old"},a.currencySymbol+m)):n.a.createElement("span",null,a.currencySymbol+m," ")),t.rating&&t.rating>0?n.a.createElement("div",{className:"pro-details-rating-wrap"},n.a.createElement("div",{className:"pro-details-rating"},n.a.createElement(i.a,{ratingValue:t.rating}))):"",n.a.createElement("div",{className:"pro-details-list"},n.a.createElement("p",null,t.shortDescription)),t.data?n.a.createElement("div",{className:"pro-details-size-color"},n.a.createElement("div",{className:"pro-details-color-wrap"},n.a.createElement("span",null,"Color"),n.a.createElement("div",{className:"pro-details-color-content"},t.data.map((function(e,t){return n.a.createElement("label",{className:"pro-details-color-content--single ".concat(e.color),key:t},n.a.createElement("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===w?"checked":"",onChange:function(){y(e.color),S(e.size[0].stock),z(1)}}),n.a.createElement("span",{className:"checkmark"}))})))),n.a.createElement("div",{className:"pro-details-size"},n.a.createElement("span",null,"Size"),n.a.createElement("div",{className:"pro-details-size-content"},t.data&&t.data.map((function(e){return e.color===w?e.size.map((function(e,t){return n.a.createElement("label",{className:"pro-details-size-content--single",key:t},n.a.createElement("span",{className:"size-name"},e.name))})):""}))))):"",t.affiliateLink?n.a.createElement("div",{className:"pro-details-quality"},n.a.createElement("div",{className:"pro-details-cart btn-hover"},n.a.createElement("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank"},"Buy Now"))):n.a.createElement("div",{className:"pro-details-quality"},n.a.createElement("div",{className:"cart-plus-minus"},n.a.createElement("button",{onClick:function(){return z(T>1?T-1:1)},className:"dec qtybutton"},"-"),n.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:T,readOnly:!0}),n.a.createElement("button",{className:"inc qtybutton"},"+")),n.a.createElement("div",{className:"pro-details-cart btn-hover"},C&&C>0?n.a.createElement("button",{onClick:function(){return A(t,L,T,w)}}," ","Add To Cart"," "):n.a.createElement("button",{disabled:!0},"Out of Stock")),n.a.createElement("div",{className:"pro-details-wishlist"},n.a.createElement("button",{className:void 0!==B?"active":"",disabled:void 0!==B,title:void 0!==B?"Added to wishlist":"Add to wishlist",onClick:function(){return _(t,L)}},n.a.createElement("i",{className:"pe-7s-like"}))),n.a.createElement("div",{className:"pro-details-compare"},n.a.createElement("button",{className:void 0!==F?"active":"",disabled:void 0!==F,title:void 0!==F?"Added to compare":"Add to compare",onClick:function(){return I(t,L)}},n.a.createElement("i",{className:"pe-7s-shuffle"}))))))))))}))},566:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=(a(177),function(e){e.getLayout,e.getFilterSortParams;var t=e.productCount,a=e.sortedProductCount;return r.a.createElement("div",{className:"shop-top-bar mb-35"},r.a.createElement("div",{className:"select-shoing-wrap"},r.a.createElement("p",null,"Showing ",a," of ",t," result")))});t.a=function(e){var t=e.getLayout,a=e.getFilterSortParams,l=e.productCount,s=e.sortedProductCount;return r.a.createElement(c.Fragment,null,r.a.createElement(n,{getLayout:t,getFilterSortParams:a,productCount:l,sortedProductCount:s}))}},568:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=a(177),l=function(){return r.a.createElement("div",{className:"sidebar-widget"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Search "),r.a.createElement("div",{className:"pro-sidebar-search mb-50 mt-25"},r.a.createElement("form",{className:"pro-sidebar-search-form",action:"#"},r.a.createElement("input",{type:"text",placeholder:"Search here..."}),r.a.createElement("button",null,r.a.createElement("i",{className:"pe-7s-search"})))))},s=function(e){var t=e.categories,a=e.getSortParams,c=e.cb;return r.a.createElement("div",{className:"sidebar-widget"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Categories "),r.a.createElement("div",{className:"sidebar-widget-list mt-30"},t?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(e){a("category",""),Object(n.h)(e)}},r.a.createElement("span",{className:"checkmark"})," All Categories"))),t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(t){console.log(e._id),c(e._id),a("category",e),Object(n.h)(t)}}," ",r.a.createElement("span",{className:"checkmark"})," ",e.name," ")))}))):"No categories found"))},o=function(e){var t=e.colors,a=e.getSortParams,c=e.getonecolor;return r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Color "),r.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(e){a("color",""),Object(n.h)(e)}},r.a.createElement("span",{className:"checkmark"})," All Colors"," "))),t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(t){c(e._id),console.log(e._id),a("color",e),Object(n.h)(t)}},r.a.createElement("span",{className:"checkmark"}),r.a.createElement("span",{style:{backgroundColor:null===e||void 0===e?void 0:e.colorName,borderRadius:"50%",height:25,width:25}})," ",null===e||void 0===e?void 0:e.colorName," ")))}))):"No colors found"))},i=function(e){var t=e.sizes,a=e.getSortParams;return r.a.createElement("div",{className:"sidebar-widget mt-40"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Size "),r.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(e){a("size",""),Object(n.h)(e)}},r.a.createElement("span",{className:"checkmark"})," All Sizes"," "))),t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{className:"text-uppercase",onClick:function(t){a("size",e),Object(n.h)(t)}}," ",r.a.createElement("span",{className:"checkmark"}),e.sizeName," ")))}))):"No sizes found"))},m=function(e){var t=e.tags,a=e.getSortParams,c=e.getonetag;return r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Tag "),r.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(t){c(e),a("tag",e),Object(n.h)(t)}},e))}))):"No tags found"))},d=function(e){var t=e.brands,a=e.getSortParams;return r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Brand "),r.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(t){a("brands",e),Object(n.h)(t)}},e.name))}))):"No brands found"))};t.a=function(e){var t=e.products,a=e.getSortParams,c=e.sideSpaceClass,u=e.colors,p=e.sizes,E=e.category,b=e.tags,f=e.brand,g=e.callback,v=e.tagcallback,N=e.colorcallback;Object(n.b)(t),Object(n.c)(t),Object(n.f)(t),Object(n.d)(t);return r.a.createElement("div",{className:"sidebar-style ".concat(c||"")},r.a.createElement(l,null),r.a.createElement(s,{categories:E,getSortParams:a,cb:function(e){g(e),console.log(e)}}),r.a.createElement(o,{colors:u,getSortParams:a,getonecolor:function(e){N(e),console.log(e)}}),r.a.createElement(i,{sizes:p,getSortParams:a}),r.a.createElement(m,{tags:b,getSortParams:a,getonetag:function(e){v(e),console.log(e)}}),r.a.createElement(d,{brands:f,getSortParams:a}))}},572:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=a(43),l=a(177),s=a(68),o=a(105),i=a(133),m=a(57),d=a.n(m),u=a(84),p=a(42),E=(a(67),a(2)),b=a(104),f=a(564),g=function(e){var t=e.product,a=e.currency,n=e.addToCart,s=e.addToWishlist,o=e.addToCompare,i=e.cartItem,m=e.wishlistItem,g=e.discountedPrice,v=e.compareItem,N=e.sliderClassName,h=e.spaceBottomClass,k=e.colorClass,w=e.titlePriceClass,y=Object(c.useState)(!1),O=Object(p.a)(y,2),j=O[0],C=O[1],S=Object(b.useToasts)().addToast,P=Object(c.useState)([]),x=Object(p.a)(P,2),T=x[0],z=x[1];Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://35.154.86.59/api/admin/getproduct");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,z(a.data),console.log(a.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),g=Object(l.a)(t.price,t.discount);var B=+(t.price*a.currencyRate).toFixed(2),F=+(g*a.currencyRate).toFixed(2);return r.a.createElement(c.Fragment,null,T.map((function(e){return r.a.createElement("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6 ".concat(N||""),key:e._id},r.a.createElement("div",{className:"product-wrap-2 ".concat(h||""," ").concat(k||""," ")},r.a.createElement("div",{className:"product-img"},r.a.createElement(E.b,{to:"/product-sticky/"+e._id},r.a.createElement("img",{className:"default-img",src:e.product_img[0],alt:"",style:{width:"200px",height:"250px"}}),r.a.createElement("img",{className:"hover-img",src:e.product_img[1],alt:"",style:{width:"200px",height:"250px"}})),r.a.createElement("div",{className:"product-action-2"},e.affiliateLink?r.a.createElement("a",{href:e.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now"}," ",r.a.createElement("i",{className:"fa fa-shopping-cart"})," "):e.variation&&e.variation.length>=1?r.a.createElement(E.b,{to:"".concat("","/product/").concat(e.id),title:"Select options"},r.a.createElement("i",{className:"fa fa-cog"})):e.stock&&e.stock>0?r.a.createElement("button",{onClick:function(){return n(e,S)},className:void 0!==i&&i.quantity>0?"active":"",disabled:void 0!==i&&i.quantity>0,title:void 0!==i?"Added to cart":"Add to cart"}," ",r.a.createElement("i",{className:"fa fa-shopping-cart"})," "):r.a.createElement("button",{disabled:!0,className:"active",title:"Out of stock"},r.a.createElement("i",{className:"fa fa-shopping-cart"})),r.a.createElement("button",{onClick:function(){return C(!0)},title:"Quick View"},r.a.createElement("i",{className:"fa fa-eye"})),r.a.createElement("button",{className:void 0!==v?"active":"",disabled:void 0!==v,title:void 0!==v?"Added to compare":"Add to compare",onClick:function(){return o(e,S)}},r.a.createElement("i",{className:"fa fa-retweet"})))),r.a.createElement("div",{className:"product-content-2"},r.a.createElement("div",{className:"title-price-wrap-2 ".concat(w||"")},r.a.createElement("h3",null,r.a.createElement(E.b,{to:"/product/"+e._id},e.product_name)),r.a.createElement("div",{className:"price-2"},r.a.createElement(c.Fragment,null,r.a.createElement("span",null,"\u20b9 ",e.sell_price)))),r.a.createElement("div",{className:"pro-wishlist-2"},r.a.createElement("button",{className:void 0!==m?"active":"",disabled:void 0!==m,title:void 0!==m?"Added to wishlist":"Add to wishlist",onClick:function(){return s(e,S)}},r.a.createElement("i",{className:"fa fa-heart-o"}))))))})),r.a.createElement(f.a,{show:j,onHide:function(){return C(!1)},product:t,currency:a,discountedprice:g,finalproductprice:B,finaldiscountedprice:F,cartitem:i,wishlistitem:m,compareitem:v,addtocart:n,addtowishlist:s,addtocompare:o,addtoast:S}))},v=Object(n.connect)((function(e,t){return{products:Object(l.e)(e.productData.products,t.category,t.type,t.limit),currency:e.currencyData,cartItems:e.cartData,wishlistItems:e.wishlistData,compareItems:e.compareData}}),(function(e){return{addToCart:function(t,a,c,r,n){e(Object(s.e)(t,a,c,r,n))},addToWishlist:function(t,a){e(Object(o.d)(t,a))},addToCompare:function(t,a){e(Object(i.c)(t,a))}}}))((function(e){var t=e.products,a=e.currency,n=e.addToCart,l=e.addToWishlist,s=e.addToCompare,o=(e.cartItems,e.wishlistItems,e.compareItems,e.sliderClassName),i=e.spaceBottomClass,m=e.colorClass,d=e.titlePriceClass;return r.a.createElement(c.Fragment,null,t.map((function(e){return r.a.createElement(g,{sliderClassName:o,spaceBottomClass:i,colorClass:m,product:e,currency:a,addToCart:n,addToWishlist:l,addToCompare:s,key:e.id,titlePriceClass:d})})))}));t.a=function(e){var t=e.products,a=e.layout;return r.a.createElement("div",{className:"shop-bottom-area mt-35"},r.a.createElement("div",{className:"row ".concat(a||"")},r.a.createElement(v,{products:t,spaceBottomClass:"mb-25"})))}},719:function(e,t,a){"use strict";a.r(t);var c=a(42),r=a(0),n=a.n(r),l=a(553),s=a.n(l),o=a(579),i=a(178),m=a(43),d=a(177),u=a(179),p=a(552),E=a(568),b=a(566),f=a(572);t.default=Object(m.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.location,a=e.products,l=Object(r.useState)("list"),m=Object(c.a)(l,2),g=m[0],v=m[1],N=Object(r.useState)(""),h=Object(c.a)(N,2),k=h[0],w=h[1],y=Object(r.useState)(""),O=Object(c.a)(y,2),j=O[0],C=O[1],S=Object(r.useState)(""),P=Object(c.a)(S,2),x=P[0],T=P[1],z=Object(r.useState)(""),B=Object(c.a)(z,2),F=B[0],A=B[1],_=Object(r.useState)(0),I=Object(c.a)(_,2),L=I[0],q=I[1],D=Object(r.useState)(1),H=Object(c.a)(D,2),R=H[0],V=H[1],W=Object(r.useState)([]),J=Object(c.a)(W,2),M=J[0],Q=J[1],G=Object(r.useState)([]),K=Object(c.a)(G,2),U=K[0],X=K[1],Y=t.pathname;return Object(r.useEffect)((function(){var e=Object(d.g)(a,k,j),t=Object(d.g)(e,x,F);X(e=t),Q(e.slice(L,L+15))}),[L,a,k,j,x,F]),n.a.createElement(r.Fragment,null,n.a.createElement(s.a,null,n.a.createElement("title",null,"Flone | Shop Page"),n.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),n.a.createElement(i.BreadcrumbsItem,{to:"/"},"Home"),n.a.createElement(i.BreadcrumbsItem,{to:""+Y},"Shop"),n.a.createElement(u.a,{headerTop:"visible"},n.a.createElement(p.a,null),n.a.createElement("div",{className:"shop-area pt-95 pb-100"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3 order-2 order-lg-1"},n.a.createElement(E.a,{products:a,getSortParams:function(e,t){w(e),C(t)},sideSpaceClass:"mr-30"})),n.a.createElement("div",{className:"col-lg-9 order-1 order-lg-2"},n.a.createElement(b.a,{getLayout:function(e){v(e)},getFilterSortParams:function(e,t){T(e),A(t)},productCount:a.length,sortedProductCount:M.length}),n.a.createElement(f.a,{layout:g,products:M}),n.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},n.a.createElement(o.a,{totalRecords:U.length,pageLimit:15,pageNeighbours:2,setOffset:q,currentPage:R,setCurrentPage:V,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))}}]);
//# sourceMappingURL=36.dee67eb8.chunk.js.map