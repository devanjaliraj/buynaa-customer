(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[3],{567:function(e,t,n){"use strict";var r=n(0);t.a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t}},569:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n(567);function a(e){var t=Object(o.a)(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},584:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));function r(e){return"".concat("data-rr-ui-").concat(e)}function o(e){return"".concat("rrUi").concat(e)}},585:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},586:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){t.current=e})),t.current}},591:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(e,t){return r(e.querySelectorAll(t))}},646:function(e,t,n){"use strict";function r(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,"a",(function(){return r}))},656:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n(657);function a(e){var t=Object(o.a)(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},657:function(e,t,n){"use strict";var r=n(0);t.a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t}},669:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r,o=n(609);function a(e){if((!r&&0!==r||e)&&o.a){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),r=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return r}},673:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(597);function o(e){void 0===e&&(e=Object(r.a)());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(n){return e.body}}},678:function(e,t,n){"use strict";var r=n(0);function o(e){var t=function(e){var t=Object(r.useRef)(e);return t.current=e,t}(e);Object(r.useEffect)((function(){return function(){return t.current()}}),[])}n.d(t,"a",(function(){return o}))},684:function(e,t,n){"use strict";var r=n(15),o=n(0),a=n(77),c=n.n(a),i=n(551);t.a=function(e){return o.forwardRef((function(t,n){return Object(i.jsx)("div",Object(r.a)(Object(r.a)({},t),{},{ref:n,className:c()(t.className,e)}))}))}},795:function(e,t,n){"use strict";var r=n(40),o=n(556),a=n(15),c=n(77),i=n.n(c),u=n(643),s=n(609),l=n(597),d=n(644),f=n(669),b=n(0);var j=n(656),O=n(670),v=n(678),h=n(616),p=n(673),m=n(646),g=n(645),y=n(34),E=n.n(y),k=n(585);function x(e){var t=function(e){var t=Object(b.useRef)(e);return t.current=e,t}(e);Object(b.useEffect)((function(){return function(){return t.current()}}),[])}var w=n(586),R=n(569),C=n(49),N=n(180),F=n(181),T=n(182),S=n(588),B=n(584);var D=Object(B.a)("modal-open"),A=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.handleContainerOverflow,r=void 0===n||n,o=t.isRTL,a=void 0!==o&&o;Object(F.a)(this,e),this.handleContainerOverflow=r,this.isRTL=a,this.modals=[]}return Object(T.a)(e,[{key:"getScrollbarWidth",value:function(){return Math.abs(window.innerWidth-document.documentElement.clientWidth)}},{key:"getElement",value:function(){return document.body}},{key:"setModalAttributes",value:function(e){}},{key:"removeModalAttributes",value:function(e){}},{key:"setContainerStyle",value:function(e){var t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style=Object(N.a)({overflow:r.style.overflow},n,r.style[n]),e.scrollBarWidth&&(t[n]="".concat(parseInt(Object(S.a)(r,n)||"0",10)+e.scrollBarWidth,"px")),r.setAttribute(D,""),Object(S.a)(r,t)}},{key:"reset",value:function(){var e=this;Object(C.a)(this.modals).forEach((function(t){return e.remove(t)}))}},{key:"removeContainerStyle",value:function(e){var t=this.getElement();t.removeAttribute(D),Object.assign(t.style,e.style)}},{key:"add",value:function(e){var t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}},{key:"remove",value:function(e){var t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}},{key:"isTopModal",value:function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}]),e}(),L=function(e){var t;return"undefined"===typeof document?null:null==e?Object(l.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};var M,P=n(551),H=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function W(e){var t=e||(M||(M=new A),M),n=Object(b.useRef)({dialog:null,backdrop:null});return Object.assign(n.current,{add:function(){return t.add(n.current)},remove:function(){return t.remove(n.current)},isTopModal:function(){return t.isTopModal(n.current)},setDialogRef:Object(b.useCallback)((function(e){n.current.dialog=e}),[]),setBackdropRef:Object(b.useCallback)((function(e){n.current.backdrop=e}),[])})}var I=Object(b.forwardRef)((function(e,t){var n=e.show,o=void 0!==n&&n,a=e.role,c=void 0===a?"dialog":a,i=e.className,u=e.style,l=e.children,d=e.backdrop,f=void 0===d||d,j=e.keyboard,O=void 0===j||j,v=e.onBackdropClick,h=e.onEscapeKeyDown,y=e.transition,C=e.backdropTransition,N=e.autoFocus,F=void 0===N||N,T=e.enforceFocus,S=void 0===T||T,B=e.restoreFocus,D=void 0===B||B,A=e.restoreFocusOptions,M=e.renderDialog,I=e.renderBackdrop,K=void 0===I?function(e){return Object(P.jsx)("div",Object.assign({},e))}:I,z=e.manager,U=e.container,_=e.onShow,J=e.onHide,V=void 0===J?function(){}:J,q=e.onExit,G=e.onExited,Q=e.onExiting,X=e.onEnter,Y=e.onEntering,Z=e.onEntered,$=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,H),ee=function(e,t){var n=Object(b.useState)((function(){return L(e)})),o=Object(r.a)(n,2),a=o[0],c=o[1];if(!a){var i=L(e);i&&c(i)}return Object(b.useEffect)((function(){t&&a&&t(a)}),[t,a]),Object(b.useEffect)((function(){var t=L(e);t!==a&&c(t)}),[e,a]),a}(U),te=W(z),ne=Object(k.a)(),re=Object(w.a)(o),oe=Object(b.useState)(!o),ae=Object(r.a)(oe,2),ce=ae[0],ie=ae[1],ue=Object(b.useRef)(null);Object(b.useImperativeHandle)(t,(function(){return te}),[te]),s.a&&!re&&o&&(ue.current=Object(p.a)()),y||o||ce?o&&ce&&ie(!1):ie(!0);var se=Object(R.a)((function(){if(te.add(),Oe.current=Object(g.a)(document,"keydown",be),je.current=Object(g.a)(document,"focus",(function(){return setTimeout(de)}),!0),_&&_(),F){var e=Object(p.a)(document);te.dialog&&e&&!Object(m.a)(te.dialog,e)&&(ue.current=e,te.dialog.focus())}})),le=Object(R.a)((function(){var e;(te.remove(),null==Oe.current||Oe.current(),null==je.current||je.current(),D)&&(null==(e=ue.current)||null==e.focus||e.focus(A),ue.current=null)}));Object(b.useEffect)((function(){o&&ee&&se()}),[o,ee,se]),Object(b.useEffect)((function(){ce&&le()}),[ce,le]),x((function(){le()}));var de=Object(R.a)((function(){if(S&&ne()&&te.isTopModal()){var e=Object(p.a)();te.dialog&&e&&!Object(m.a)(te.dialog,e)&&te.dialog.focus()}})),fe=Object(R.a)((function(e){e.target===e.currentTarget&&(null==v||v(e),!0===f&&V())})),be=Object(R.a)((function(e){O&&27===e.keyCode&&te.isTopModal()&&(null==h||h(e),e.defaultPrevented||V())})),je=Object(b.useRef)(),Oe=Object(b.useRef)(),ve=y;if(!ee||!(o||ve&&!ce))return null;var he=Object.assign({role:c,ref:te.setDialogRef,"aria-modal":"dialog"===c||void 0},$,{style:u,className:i,tabIndex:-1}),pe=M?M(he):Object(P.jsx)("div",Object.assign({},he,{children:b.cloneElement(l,{role:"document"})}));ve&&(pe=Object(P.jsx)(ve,{appear:!0,unmountOnExit:!0,in:!!o,onExit:q,onExiting:Q,onExited:function(){ie(!0),null==G||G.apply(void 0,arguments)},onEnter:X,onEntering:Y,onEntered:Z,children:pe}));var me=null;if(f){var ge=C;me=K({ref:te.setBackdropRef,onClick:fe}),ge&&(me=Object(P.jsx)(ge,{appear:!0,in:!!o,children:me}))}return Object(P.jsx)(P.Fragment,{children:E.a.createPortal(Object(P.jsxs)(P.Fragment,{children:[me,pe]}),ee)})}));I.displayName="Modal";var K=Object.assign(I,{Manager:A}),z=n(169);function U(e,t,n){return(U="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(z.a)(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}var _,J=n(183),V=n(184),q=n(188),G=n(591),Q=n(189),X=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Y=".sticky-top",Z=".navbar-toggler",$=function(e){Object(J.a)(n,e);var t=Object(V.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"adjustAndStore",value:function(e,t,n){var r=t.style[e];t.dataset[e]=r,Object(S.a)(t,Object(N.a)({},e,"".concat(parseFloat(Object(S.a)(t,e))+n,"px")))}},{key:"restore",value:function(e,t){var n=t.dataset[e];void 0!==n&&(delete t.dataset[e],Object(S.a)(t,Object(N.a)({},e,n)))}},{key:"setContainerStyle",value:function(e){var t=this;U(Object(z.a)(n.prototype),"setContainerStyle",this).call(this,e);var r=this.getElement();if(Object(q.a)(r,"modal-open"),e.scrollBarWidth){var o=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";Object(G.a)(r,X).forEach((function(n){return t.adjustAndStore(o,n,e.scrollBarWidth)})),Object(G.a)(r,Y).forEach((function(n){return t.adjustAndStore(a,n,-e.scrollBarWidth)})),Object(G.a)(r,Z).forEach((function(n){return t.adjustAndStore(a,n,e.scrollBarWidth)}))}}},{key:"removeContainerStyle",value:function(e){var t=this;U(Object(z.a)(n.prototype),"removeContainerStyle",this).call(this,e);var r=this.getElement();Object(Q.a)(r,"modal-open");var o=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";Object(G.a)(r,X).forEach((function(e){return t.restore(o,e)})),Object(G.a)(r,Y).forEach((function(e){return t.restore(a,e)})),Object(G.a)(r,Z).forEach((function(e){return t.restore(a,e)}))}}]),n}(A);var ee=n(617),te=n(577),ne=Object(te.a)("modal-body"),re=b.createContext({onHide:function(){}}),oe=n(562),ae=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],ce=b.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,c=e.contentClassName,u=e.centered,s=e.size,l=e.fullscreen,d=e.children,f=e.scrollable,b=Object(o.a)(e,ae);n=Object(oe.a)(n,"modal");var j="".concat(n,"-dialog"),O="string"===typeof l?"".concat(n,"-fullscreen-").concat(l):"".concat(n,"-fullscreen");return Object(P.jsx)("div",Object(a.a)(Object(a.a)({},b),{},{ref:t,className:i()(j,r,s&&"".concat(n,"-").concat(s),u&&"".concat(j,"-centered"),f&&"".concat(j,"-scrollable"),l&&O),children:Object(P.jsx)("div",{className:i()("".concat(n,"-content"),c),children:d})}))}));ce.displayName="ModalDialog";var ie=ce,ue=Object(te.a)("modal-footer"),se=n(3),le=n.n(se),de=["className","variant"],fe={"aria-label":le.a.string,onClick:le.a.func,variant:le.a.oneOf(["white"])},be=b.forwardRef((function(e,t){var n=e.className,r=e.variant,c=Object(o.a)(e,de);return Object(P.jsx)("button",Object(a.a)({ref:t,type:"button",className:i()("btn-close",r&&"btn-close-".concat(r),n)},c))}));be.displayName="CloseButton",be.propTypes=fe,be.defaultProps={"aria-label":"Close"};var je=be,Oe=["closeLabel","closeVariant","closeButton","onHide","children"],ve=b.forwardRef((function(e,t){var n=e.closeLabel,r=e.closeVariant,c=e.closeButton,i=e.onHide,u=e.children,s=Object(o.a)(e,Oe),l=Object(b.useContext)(re),d=Object(j.a)((function(){null==l||l.onHide(),null==i||i()}));return Object(P.jsxs)("div",Object(a.a)(Object(a.a)({ref:t},s),{},{children:[u,c&&Object(P.jsx)(je,{"aria-label":n,variant:r,onClick:d})]}))}));ve.defaultProps={closeLabel:"Close",closeButton:!1};var he=ve,pe=["bsPrefix","className"],me=b.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,c=Object(o.a)(e,pe);return n=Object(oe.a)(n,"modal-header"),Object(P.jsx)(he,Object(a.a)(Object(a.a)({ref:t},c),{},{className:i()(r,n)}))}));me.displayName="ModalHeader",me.defaultProps={closeLabel:"Close",closeButton:!1};var ge=me,ye=n(684),Ee=Object(ye.a)("h4"),ke=Object(te.a)("modal-title",{Component:Ee}),xe=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],we={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:ie};function Re(e){return Object(P.jsx)(ee.a,Object(a.a)(Object(a.a)({},e),{},{timeout:null}))}function Ce(e){return Object(P.jsx)(ee.a,Object(a.a)(Object(a.a)({},e),{},{timeout:null}))}var Ne=b.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,p=e.style,m=e.dialogClassName,g=e.contentClassName,y=e.children,E=e.dialogAs,k=e["aria-labelledby"],x=e.show,w=e.animation,R=e.backdrop,C=e.keyboard,N=e.onEscapeKeyDown,F=e.onShow,T=e.onHide,S=e.container,B=e.autoFocus,D=e.enforceFocus,A=e.restoreFocus,L=e.restoreFocusOptions,M=e.onEntered,H=e.onExit,W=e.onExiting,I=e.onEnter,z=e.onEntering,U=e.onExited,J=e.backdropClassName,V=e.manager,q=Object(o.a)(e,xe),G=Object(b.useState)({}),Q=Object(r.a)(G,2),X=Q[0],Y=Q[1],Z=Object(b.useState)(!1),ee=Object(r.a)(Z,2),te=ee[0],ne=ee[1],ae=Object(b.useRef)(!1),ce=Object(b.useRef)(!1),ie=Object(b.useRef)(null),ue=Object(b.useState)(null),se=Object(r.a)(ue,2),le=se[0],de=se[1],fe=Object(O.a)(t,de),be=Object(j.a)(T),je=Object(oe.b)();n=Object(oe.a)(n,"modal");var Oe=Object(b.useMemo)((function(){return{onHide:be}}),[be]);function ve(){return V||(e={isRTL:je},_||(_=new $(e)),_);var e}function he(e){if(s.a){var t=ve().getScrollbarWidth()>0,n=e.scrollHeight>Object(l.a)(e).documentElement.clientHeight;Y({paddingRight:t&&!n?Object(f.a)():void 0,paddingLeft:!t&&n?Object(f.a)():void 0})}}var pe=Object(j.a)((function(){le&&he(le.dialog)}));Object(v.a)((function(){Object(d.a)(window,"resize",pe),null==ie.current||ie.current()}));var me=function(){ae.current=!0},ge=function(e){ae.current&&le&&e.target===le.dialog&&(ce.current=!0),ae.current=!1},ye=function(){ne(!0),ie.current=Object(h.a)(le.dialog,(function(){ne(!1)}))},Ee=function(e){"static"!==R?ce.current||e.target!==e.currentTarget?ce.current=!1:null==T||T():function(e){e.target===e.currentTarget&&ye()}(e)},ke=Object(b.useCallback)((function(e){return Object(P.jsx)("div",Object(a.a)(Object(a.a)({},e),{},{className:i()("".concat(n,"-backdrop"),J,!w&&"show")}))}),[w,J,n]),we=Object(a.a)(Object(a.a)({},p),X);w||(we.display="block");return Object(P.jsx)(re.Provider,{value:Oe,children:Object(P.jsx)(K,{show:x,ref:fe,backdrop:R,container:S,keyboard:!0,autoFocus:B,enforceFocus:D,restoreFocus:A,restoreFocusOptions:L,onEscapeKeyDown:function(e){C||"static"!==R?C&&N&&N(e):(e.preventDefault(),ye())},onShow:F,onHide:T,onEnter:function(e,t){e&&(e.style.display="block",he(e)),null==I||I(e,t)},onEntering:function(e,t){null==z||z(e,t),Object(u.a)(window,"resize",pe)},onEntered:M,onExit:function(e){null==ie.current||ie.current(),null==H||H(e)},onExiting:W,onExited:function(e){e&&(e.style.display=""),null==U||U(e),Object(d.a)(window,"resize",pe)},manager:ve(),transition:w?Re:void 0,backdropTransition:w?Ce:void 0,renderBackdrop:ke,renderDialog:function(e){return Object(P.jsx)("div",Object(a.a)(Object(a.a)({role:"dialog"},e),{},{style:we,className:i()(c,n,te&&"".concat(n,"-static")),onClick:R?Ee:void 0,onMouseUp:ge,"aria-labelledby":k,children:Object(P.jsx)(E,Object(a.a)(Object(a.a)({},q),{},{onMouseDown:me,className:m,contentClassName:g,children:y}))}))}})})}));Ne.displayName="Modal",Ne.defaultProps=we;t.a=Object.assign(Ne,{Body:ne,Header:ge,Title:ke,Footer:ue,Dialog:ie,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})}}]);
//# sourceMappingURL=3.fec0ef2b.chunk.js.map