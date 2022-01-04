(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[6],{561:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a(74),r=a(0),c=a(544),i=["as","disabled"];function o(e){var t=e.tagName,a=e.disabled,n=e.href,r=e.target,c=e.rel,i=e.onClick,o=e.tabIndex,l=void 0===o?0:o,u=e.type;t||(t=null!=n||null!=r||null!=c?"a":"button");var s={tagName:t};if("button"===t)return[{type:u||"button",disabled:a},s];var f=function(e){(a||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),a?e.stopPropagation():null==i||i(e)};return[{role:"button",disabled:void 0,tabIndex:a?void 0:l,href:"a"===t&&a?void 0:n,target:"a"===t?r:void 0,"aria-disabled":a||void 0,rel:"a"===t?c:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},s]}var l=r.forwardRef((function(e,t){var a=e.as,r=e.disabled,l=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,i),u=o(Object.assign({tagName:a,disabled:r},l)),s=Object(n.a)(u,2),f=s[0],v=s[1].tagName;return Object(c.jsx)(v,Object.assign({},l,f,{ref:t}))}));l.displayName="Button",t.a=l},568:function(e,t,a){"use strict";var n=a(0),r=n.createContext(null);r.displayName="CardHeaderContext",t.a=r},571:function(e,t,a){"use strict";var n=a(74),r=a(0);a(552);var c=a(553);a(563),a(564);a(578),new WeakMap;var i=a(561),o=a(544),l=["onKeyDown"];var u=r.forwardRef((function(e,t){var a,r=e.onKeyDown,u=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l),s=Object(i.b)(Object.assign({tagName:"a"},u)),f=Object(n.a)(s,1)[0],v=Object(c.a)((function(e){f.onKeyDown(e),null==r||r(e)}));return((a=u.href)&&"#"!==a.trim()||u.role)&&"button"!==u.role?Object(o.jsx)("a",Object.assign({ref:t},u,{onKeyDown:r})):Object(o.jsx)("a",Object.assign({ref:t},u,f,{onKeyDown:v}))}));u.displayName="Anchor";t.a=u},572:function(e,t,a){"use strict";var n=a(178),r=a(15),c=a(547),i=a(75),o=a.n(i),l=(a(576),a(0)),u=a(583),s=a(567);var f=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var v=function(e,t){return Object(l.useMemo)((function(){return function(e,t){var a=f(e),n=f(t);return function(e){a&&a(e),n&&n(e)}}(e,t)}),[e,t])},b=l.createContext(null);b.displayName="NavContext";var d=b,j=a(558),O=a(587),y=a(562),p=a(74),x=a(553),g=a(561),m=a(544),N=["as","active","eventKey"];function w(e){var t=e.key,a=e.onClick,n=e.active,r=e.id,c=e.role,i=e.disabled,o=Object(l.useContext)(j.a),u=Object(l.useContext)(d),s=n,f={role:c};if(u){c||"tablist"!==u.role||(f.role="tab");var v=u.getControllerId(null!=t?t:null),b=u.getControlledId(null!=t?t:null);f[Object(y.a)("event-key")]=t,f.id=v||r,f["aria-controls"]=b,s=null==n&&null!=t?u.activeKey===t:n}return"tab"===f.role&&(i&&(f.tabIndex=-1,f["aria-disabled"]=!0),s?f["aria-selected"]=s:f.tabIndex=-1),f.onClick=Object(x.a)((function(e){i||(null==a||a(e),null!=t&&o&&!e.isPropagationStopped()&&o(t,e))})),[f,{isActive:s}]}var h=l.forwardRef((function(e,t){var a=e.as,n=void 0===a?g.a:a,r=e.active,c=e.eventKey,i=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,N),o=w(Object.assign({key:Object(j.b)(c,i.href),active:r},i)),l=Object(p.a)(o,2),u=l[0],s=l[1];return u[Object(y.a)("active")]=s.isActive,Object(m.jsx)(n,Object.assign({},i,u,{ref:t}))}));h.displayName="NavItem";var k=h,C=["as","onSelect","activeKey","role","onKeyDown"];var K=function(){},P=Object(y.a)("event-key"),D=l.forwardRef((function(e,t){var a,n,r=e.as,c=void 0===r?"div":r,i=e.onSelect,o=e.activeKey,u=e.role,f=e.onKeyDown,b=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,C),p=Object(l.useReducer)((function(e){return!e}),!1)[1],x=Object(l.useRef)(!1),g=Object(l.useContext)(j.a),N=Object(l.useContext)(O.a);N&&(u=u||"tablist",o=N.activeKey,a=N.getControlledId,n=N.getControllerId);var w=Object(l.useRef)(null),h=function(e){var t=w.current;if(!t)return null;var a=Object(s.a)(t,"[".concat(P,"]:not([aria-disabled=true])")),n=t.querySelector("[aria-selected=true]");if(!n)return null;var r=a.indexOf(n);if(-1===r)return null;var c=r+e;return c>=a.length&&(c=0),c<0&&(c=a.length-1),a[c]},k=function(e,t){null!=e&&(null==i||i(e,t),null==g||g(e,t))};Object(l.useEffect)((function(){if(w.current&&x.current){var e=w.current.querySelector("[".concat(P,"][aria-selected=true]"));null==e||e.focus()}x.current=!1}));var D=v(t,w);return Object(m.jsx)(j.a.Provider,{value:k,children:Object(m.jsx)(d.Provider,{value:{role:u,activeKey:Object(j.b)(o),getControlledId:a||K,getControllerId:n||K},children:Object(m.jsx)(c,Object.assign({},b,{onKeyDown:function(e){if(null==f||f(e),N){var t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=h(-1);break;case"ArrowRight":case"ArrowDown":t=h(1);break;default:return}t&&(e.preventDefault(),k(t.dataset[Object(y.b)("EventKey")]||null,e),x.current=!0,p())}},ref:D,role:u}))})})}));D.displayName="Nav";var I=Object.assign(D,{Item:k}),R=a(551),A=l.createContext(null);A.displayName="NavbarContext";var S=A,E=a(568),_=a(573),M=Object(_.a)("nav-item"),q=a(571),L=["bsPrefix","className","as","active","eventKey"],B=l.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.as,l=void 0===i?q.a:i,u=e.active,s=e.eventKey,f=Object(c.a)(e,L);a=Object(R.a)(a,"nav-link");var v=w(Object(r.a)({key:Object(j.b)(s,f.href),active:u},f)),b=Object(p.a)(v,2),d=b[0],O=b[1];return Object(m.jsx)(l,Object(r.a)(Object(r.a)(Object(r.a)({},f),d),{},{ref:t,className:o()(n,a,f.disabled&&"disabled",O.isActive&&"active")}))}));B.displayName="NavLink",B.defaultProps={disabled:!1};var H=B,J=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","activeKey"],U=l.forwardRef((function(e,t){var a,i,s,f=Object(u.a)(e,{activeKey:"onSelect"}),v=f.as,b=void 0===v?"div":v,d=f.bsPrefix,j=f.variant,O=f.fill,y=f.justify,p=f.navbar,x=f.navbarScroll,g=f.className,N=f.activeKey,w=Object(c.a)(f,J),h=Object(R.a)(d,"nav"),k=!1,C=Object(l.useContext)(S),K=Object(l.useContext)(E.a);return C?(i=C.bsPrefix,k=null==p||p):K&&(s=K.cardHeaderBsPrefix),Object(m.jsx)(I,Object(r.a)({as:b,ref:t,activeKey:N,className:o()(g,(a={},Object(n.a)(a,h,!k),Object(n.a)(a,"".concat(i,"-nav"),k),Object(n.a)(a,"".concat(i,"-nav-scroll"),k&&x),Object(n.a)(a,"".concat(s,"-").concat(j),!!s),Object(n.a)(a,"".concat(h,"-").concat(j),!!j),Object(n.a)(a,"".concat(h,"-fill"),O),Object(n.a)(a,"".concat(h,"-justified"),y),a))},w))}));U.displayName="Nav",U.defaultProps={justify:!1,fill:!1};t.a=Object.assign(U,{Item:M,Link:H})},576:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];function n(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];var r=null;return t.forEach((function(e){if(null==r){var t=e.apply(void 0,a);null!=t&&(r=t)}})),r}return(0,c.default)(n)};var n,r=a(577),c=(n=r)&&n.__esModule?n:{default:n};e.exports=t.default},577:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,a,n,r,c,i){var o=r||"<<anonymous>>",l=i||n;if(null==a[n])return t?new Error("Required "+c+" `"+l+"` was not specified in `"+o+"`."):null;for(var u=arguments.length,s=Array(u>6?u-6:0),f=6;f<u;f++)s[f-6]=arguments[f];return e.apply(void 0,[a,n,o,c,l].concat(s))}var a=t.bind(null,!1);return a.isRequired=t.bind(null,!0),a},e.exports=t.default},578:function(e,t,a){"use strict";(function(e){var n=a(0),r="undefined"!==typeof e&&e.navigator&&"ReactNative"===e.navigator.product,c="undefined"!==typeof document;t.a=c||r?n.useLayoutEffect:n.useEffect}).call(this,a(103))}}]);
//# sourceMappingURL=6.09cc041a.chunk.js.map