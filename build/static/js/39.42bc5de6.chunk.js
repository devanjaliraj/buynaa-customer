(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[39,41,42],{545:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),l=n(175);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(l.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:o.c,finalItem:"span"}))))}},615:function(e,t,n){"use strict";var a,r=n(15),o=n(548),l=n(178),u=n(75),c=n.n(u),i=n(0),s=n(27),p=n(590),f=n(589),m=n(591),d=n(544),h=["className","children","transitionClasses"],b=(a={},Object(l.a)(a,s.b,"show"),Object(l.a)(a,s.a,"show"),a),v=i.forwardRef((function(e,t){var n=e.className,a=e.children,l=e.transitionClasses,u=void 0===l?{}:l,s=Object(o.a)(e,h),v=Object(i.useCallback)((function(e,t){Object(f.a)(e),null==s.onEnter||s.onEnter(e,t)}),[s]);return Object(d.jsx)(m.a,Object(r.a)(Object(r.a)({ref:t,addEndListener:p.a},s),{},{onEnter:v,childRef:a.ref,children:function(e,t){return i.cloneElement(a,Object(r.a)(Object(r.a)({},t),{},{className:c()("fade",n,a.props.className,b[e],u[e])}))}}))}));v.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},v.displayName="Fade",t.a=v},635:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==g(e)&&"function"!==typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=r?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(0)),r=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b(e);if(t){var r=b(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=function(e){return"object"===g(e)},O=function(e){p(n,e);var t=m(n);function n(e){var r;return c(this,n),v(h(r=t.call(this,e)),"getClasses",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return!y(e)&&!1!==e})).join(" ")})),v(h(r),"getType",(function(){var e=r.props,t=e.isInputSecure,n=e.isInputNum;return t?"password":n?"tel":"text"})),r.input=a.default.createRef(),r}return s(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.focus,n=e.shouldAutoFocus,a=this.input.current;a&&t&&n&&a.focus()}},{key:"componentDidUpdate",value:function(e){var t=this.props.focus,n=this.input.current;e.focus!==t&&n&&t&&(n.focus(),n.select())}},{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.separator,o=e.isLastChild,c=e.inputStyle,i=e.focus,s=e.isDisabled,p=e.hasErrored,f=e.errorStyle,m=e.focusStyle,d=e.disabledStyle,h=(e.shouldAutoFocus,e.isInputNum),b=e.index,v=e.value,g=e.className,O=(e.isInputSecure,u(e,r));return a.default.createElement("div",{className:g,style:{display:"flex",alignItems:"center"}},a.default.createElement("input",l({"aria-label":"".concat(0===b?"Please enter verification code. ":"").concat(h?"Digit":"Character"," ").concat(b+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},y(c)&&c,i&&y(m)&&m,s&&y(d)&&d,p&&y(f)&&f),placeholder:t,className:this.getClasses(c,i&&m,s&&d,p&&f),type:this.getType(),maxLength:"1",ref:this.input,disabled:s,value:v||""},O)),!o&&n)}}]),n}(a.PureComponent),E=function(e){p(n,e);var t=m(n);function n(){var e;c(this,n);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return v(h(e=t.call.apply(t,[this].concat(o))),"state",{activeInput:0}),v(h(e),"getOtpValue",(function(){return e.props.value?e.props.value.toString().split(""):[]})),v(h(e),"getPlaceholderValue",(function(){var t=e.props,n=t.placeholder,a=t.numInputs;if("string"===typeof n){if(n.length===a)return n;n.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}})),v(h(e),"handleOtpChange",(function(t){(0,e.props.onChange)(t.join(""))})),v(h(e),"isInputValueValid",(function(t){return(e.props.isInputNum?!isNaN(parseInt(t,10)):"string"===typeof t)&&1===t.trim().length})),v(h(e),"focusInput",(function(t){var n=e.props.numInputs,a=Math.max(Math.min(n-1,t),0);e.setState({activeInput:a})})),v(h(e),"focusNextInput",(function(){var t=e.state.activeInput;e.focusInput(t+1)})),v(h(e),"focusPrevInput",(function(){var t=e.state.activeInput;e.focusInput(t-1)})),v(h(e),"changeCodeAtFocus",(function(t){var n=e.state.activeInput,a=e.getOtpValue();a[n]=t[0],e.handleOtpChange(a)})),v(h(e),"handleOnPaste",(function(t){t.preventDefault();var n=e.state.activeInput,a=e.props,r=a.numInputs;if(!a.isDisabled){for(var o=e.getOtpValue(),l=n,u=t.clipboardData.getData("text/plain").slice(0,r-n).split(""),c=0;c<r;++c)c>=n&&u.length>0&&(o[c]=u.shift(),l++);e.setState({activeInput:l},(function(){e.focusInput(l),e.handleOtpChange(o)}))}})),v(h(e),"handleOnChange",(function(t){var n=t.target.value;e.isInputValueValid(n)&&e.changeCodeAtFocus(n)})),v(h(e),"handleOnKeyDown",(function(t){8===t.keyCode||"Backspace"===t.key?(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):46===t.keyCode||"Delete"===t.key?(t.preventDefault(),e.changeCodeAtFocus("")):37===t.keyCode||"ArrowLeft"===t.key?(t.preventDefault(),e.focusPrevInput()):39===t.keyCode||"ArrowRight"===t.key?(t.preventDefault(),e.focusNextInput()):32!==t.keyCode&&" "!==t.key&&"Spacebar"!==t.key&&"Space"!==t.key||t.preventDefault()})),v(h(e),"handleOnInput",(function(t){if(e.isInputValueValid(t.target.value))e.focusNextInput();else if(!e.props.isInputNum){var n=t.nativeEvent;null===n.data&&"deleteContentBackward"===n.inputType&&(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}})),v(h(e),"renderInputs",(function(){for(var t=e.state.activeInput,n=e.props,r=n.numInputs,o=n.inputStyle,l=n.focusStyle,u=n.separator,c=n.isDisabled,i=n.disabledStyle,s=n.hasErrored,p=n.errorStyle,f=n.shouldAutoFocus,m=n.isInputNum,d=n.isInputSecure,h=n.className,b=[],v=e.getOtpValue(),g=e.getPlaceholderValue(),y=e.props["data-cy"],E=e.props["data-testid"],j=function(n){b.push(a.default.createElement(O,{placeholder:g&&g[n],key:n,index:n,focus:t===n,value:v&&v[n],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(t){e.setState({activeInput:n}),t.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:u,inputStyle:o,focusStyle:l,isLastChild:n===r-1,isDisabled:c,disabledStyle:i,hasErrored:s,errorStyle:p,shouldAutoFocus:f,isInputNum:m,isInputSecure:d,className:h,"data-cy":y&&"".concat(y,"-").concat(n),"data-testid":E&&"".concat(E,"-").concat(n)}))},S=0;S<r;S++)j(S);return b})),e}return s(n,[{key:"render",value:function(){var e=this.props.containerStyle;return a.default.createElement("div",{style:Object.assign({display:"flex"},y(e)&&e),className:y(e)?"":e},this.renderInputs())}}]),n}(a.Component);v(E,"defaultProps",{numInputs:4,onChange:function(e){return console.log(e)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var j=E;t.default=j},640:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n(178),r=n(179),o=n(180),l=n(188),u=n(181),c=n(182),i=n(0),s=n.n(i),p=n(547),f=n.n(p),m=n(635),d=n.n(m),h=n(177),b=n.n(h),v=n(581),g=n(176),y=n(545),O=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={otp:""},e.resenddd=function(){e.setState({otp:""}),e.interval(),e.sendOtp()},e.state={customer_email:"",mobile:"12345678",otp:"1234",msg:"",input:{},errors:{}},e.handleChange=function(t){return e.setState({otp:t})},e.handleSubmit=e.handleSubmit.bind(Object(l.a)(e)),e}return Object(o.a)(n,[{key:"interval",value:function(){this.setState({seconds:26})}},{key:"handleChange",value:function(e){this.setState(Object(a.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),b.a.post("http://35.154.86.59/api/user/verifyotp",this.state).then((function(e){console.log(e),alert("anjali")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement(f.a,null,s.a.createElement("title",null,"Buynaa | Login"),s.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),s.a.createElement(g.a,{headerTop:"visible"},s.a.createElement(y.a,null),s.a.createElement("div",{className:"login-register-area pt-100 pb-100"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},s.a.createElement("div",{className:"login-register-wrapper"},s.a.createElement(v.a.Container,{defaultActiveKey:"login"},s.a.createElement(v.a.Content,null,s.a.createElement(v.a.Pane,{eventKey:"login"},s.a.createElement("div",{className:"login-form-container"},s.a.createElement("div",{className:"login-register-form"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",null,s.a.createElement(d.a,{value:this.state.otp,onChange:this.handleChange,numInputs:4,type:"number",name:"otp",separator:s.a.createElement("span",null)}),this.state.OTPError?this.state.OTPError:null),s.a.createElement("div",{className:"button-box"},s.a.createElement("button",{type:"back"},"Back"),s.a.createElement("button",{type:"submit"},"SendOTP")))))))))))))))}}]),n}(s.a.Component)},642:function(e,t,n){"use strict";n.r(t);var a=n(178),r=n(179),o=n(180),l=n(181),u=n(182),c=n(0),i=n.n(c),s=n(547),p=n.n(s),f=n(581),m=n(176),d=n(545),h=n(177),b=n.n(h),v=n(7),g=n(13),y=n(184),O=n(17),E=n(4),j=n.n(E),S=n(75),C=n.n(S),I=n(52),N=["className","cssModule","inline","tag","innerRef"],w={children:j.a.node,inline:j.a.bool,tag:I.c,innerRef:j.a.oneOfType([j.a.object,j.a.func,j.a.string]),className:j.a.string,cssModule:j.a.object},P=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(y.a)(n)),n.submit=n.submit.bind(Object(y.a)(n)),n}Object(O.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,a=e.inline,r=e.tag,o=e.innerRef,l=Object(g.a)(e,N),u=Object(I.b)(C()(t,!!a&&"form-inline"),n);return i.a.createElement(r,Object(v.a)({},l,{ref:o,className:u}))},t}(c.Component);P.propTypes=w,P.defaultProps={tag:"form"};var k=P;n.d(t,"default",(function(){return D}));var D=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).onChangeHandler=function(e){o.setState({selectedFile:e.target.files[0]}),o.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},o.changeHandler=function(e){o.setState(Object(a.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault(),b.a.post("http://35.154.86.59/api/user/sendotp",o.state).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},o.state={mobile_no:"12345678",customer_email:"guptapratima98710@gmail.com",selectedFile:null},o}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement(c.Fragment,null,i.a.createElement(p.a,null,i.a.createElement("title",null,"Buynaa | Login"),i.a.createElement("meta",{content:"Compare page of flone react minimalist eCommerce template."})),i.a.createElement(m.a,{headerTop:"visible"},i.a.createElement(d.a,null),i.a.createElement("div",{className:"login-register-area pt-100 pb-100"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},i.a.createElement("div",{className:"login-register-wrapper"},i.a.createElement(f.a.Container,{defaultActiveKey:"login"},i.a.createElement(f.a.Content,null,i.a.createElement(f.a.Pane,{eventKey:"login"},i.a.createElement("div",{className:"login-form-container"},i.a.createElement("div",{className:"login-register-form"},i.a.createElement(k,{onSubmit:this.submitHandler},i.a.createElement("input",{onChange:this.changeHandler,type:"number",value:this.state.mobile_no,name:"mobile_no ",placeholder:"Enter your mobile number"}),i.a.createElement("input",{value:this.state.customer_email,type:"email",name:"customer_email",placeholder:"Enter Email"}),i.a.createElement("div",{className:"button-box"},i.a.createElement("button",{type:"submit",color:"primary"},"SendOTP")))))))))))))))}}]),n}(c.Component)},716:function(e,t,n){"use strict";n.r(t);var a=n(178),r=n(15),o=n(74),l=n(0),u=n.n(l),c=n(642),i=n(640);t.default=function(){var e=Object(l.useState)({status:"",msg:"",mobile:"",otp:""}),t=Object(o.a)(e,2),n=t[0],s=t[1],p=Object(l.useState)(1),f=Object(o.a)(p,2),m=f[0],d=f[1],h=function(e){return function(t){s(Object(r.a)(Object(r.a)({},n),{},Object(a.a)({},e,t.target.value)))}},b=function(e){s(Object(r.a)(Object(r.a)({},n),{},{msg:e}))},v=function(){s((function(e){return d+1}))},g={status:n.status,msg:n.msg,mobile:n.mobile,otp:n.otp};switch(m){case 1:return u.a.createElement(c.default,{nextStep:v,msgHandleChange:b,handleChange:h,value:g});case 2:return u.a.createElement(i.default,{nextStep:v,prevStep:function(){s((function(e){return e-1}))},handleChange:h,value:g});default:return u.a.createElement(c.default,{nextStep:v,msgHandleChange:b,handleChange:h,value:g})}}}}]);
//# sourceMappingURL=39.42bc5de6.chunk.js.map