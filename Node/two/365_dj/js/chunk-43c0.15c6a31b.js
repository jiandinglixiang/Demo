(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43c0"],{"11ae":function(t,e,n){"use strict";var o=n("53bd"),i=n.n(o);i.a},"3d4f":function(t,e,n){"use strict";n.r(e);var o,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"UnionPay"},[n("nav-head",{attrs:{title:"银联转账充值",FixedOrTransparency:"isFixed NoTransparency"}}),n("div",{staticClass:"padding-0-15"},[n("div",{staticClass:"account-wrap"},[n("div",[n("h2",[t._v("官方账户")]),n("div",[n("span",[t._v("开户行：")]),n("span",[t._v(t._s(t.bank_name))]),n("mt-button",{staticClass:"btn-copy",attrs:{id:"copy_1",size:"small",plain:"",type:"primary","data-clipboard-text":t.bank_name},on:{click:t.copy}},[t._v("复制")])],1),n("div",[n("span",[t._v("银行账户：")]),n("span",[t._v(t._s(t.bank_account))]),n("mt-button",{staticClass:"btn-copy",attrs:{id:"copy_2",size:"small",plain:"",type:"primary","data-clipboard-text":t.bank_account},on:{click:t.copy}},[t._v("复制")])],1),n("div",[n("span",[t._v("账户名称：")]),n("span",[t._v(t._s(t.account_name))])])])]),n("div",{staticClass:"item-wrap"},[n("div",{staticClass:"item"},[t._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],class:{bank:t.name},attrs:{type:"text",maxlength:"20",placeholder:"请输入付款人姓名"},domProps:{value:t.name},on:{input:[function(e){e.target.composing||(t.name=e.target.value)},t.handleInputName]}}),n("span",{staticClass:"icon-del-365",class:{show:t.name},on:{click:function(e){t.clearValue("name")}}})]),n("div",{staticClass:"item"},[t._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.money,expression:"money"}],class:{bank:t.money},attrs:{type:"text",maxlength:"9",placeholder:"充值金额"},domProps:{value:t.money},on:{input:[function(e){e.target.composing||(t.money=e.target.value)},t.handleInputNum]}}),n("span",{staticClass:"icon-del-365",class:{show:t.money},on:{click:function(e){t.clearValue("money")}}})]),n("div",{staticClass:"item"},[t._m(2),n("input",{directives:[{name:"model",rawName:"v-model",value:t.remark,expression:"remark"}],class:{bank:t.remark},attrs:{type:"text",maxlength:"50",placeholder:"备注信息，选填"},domProps:{value:t.remark},on:{input:function(e){e.target.composing||(t.remark=e.target.value)}}}),n("span",{staticClass:"icon-del-365",class:{show:t.remark},on:{click:function(e){t.clearValue("remark")}}})])]),t._m(3),n("mt-button",{staticClass:"btn-bind",class:{available:t.money&&t.name},attrs:{size:"large",disabled:!t.money||!t.name},nativeOn:{click:function(e){return t.bindBank(e)}}},[t._v("发送充值信息")])],1)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("b",[t._v("*")]),t._v("付款人姓名")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("b",[t._v("*")]),t._v("付款金额")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("b",{staticStyle:{opacity:"0"}},[t._v("*")]),t._v("付款说明")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-wrap"},[n("p",[t._v("完成转账后，客服会主动与您联系！")]),n("p",[t._v("注：转账完成后请提交正确的金额，充值人姓名（付款银行卡的实名制姓名）")])])}],a=n("a322"),c=(n("f2d0"),n("518b")),s=n.n(c),l=(n("5fc6"),n("5af2")),u=n.n(l),f=n("c93e"),d=n("c793"),p=n("b311"),m=n.n(p),h=n("2f62"),y=n("7ff4"),v={name:"rechargeByUnionPay",data:function(){return{name:"",money:"",remark:"",bank_name:this.$route.params.item.bank_name,bank_account:this.$route.params.item.bank_account,account_name:this.$route.params.item.account_name,CopySuccessMessage:["开户行信息已复制","银行账户信息已复制"]}},methods:Object(f["a"])({bindBank:function(){this.name?this.money?(console.log(this.name+" "+this.money),this.addPaymentMsg({channel_id:5,payer_name:this.name,payer_money:this.money,payer_remark:this.remark})):u()("请输入付款金额!"):u()("请输入真实姓名!")},handleInputNum:function(t){this.money=t.target.value.replace(/[^\d]/g,"")},handleInputName:function(t){this.name=t.target.value.replace(/[^a-zA-Z0-9\u4E00-\u9FA5]/g,"")},clearValue:function(t){this[t]=""},copy:function(){var t=this,e=new m.a(".btn-copy");e.on("success",function(n){u()(t.CopySuccessMessage[n.trigger.id.split("_")[1]-1]),e.destroy()}),e.on("error",function(t){u()("复制失败"),e.destroy()})}},Object(h["b"])({addPaymentMsg:y["b"]})),components:(o={NavHead:d["a"]},Object(a["a"])(o,s.a.name,s.a),Object(a["a"])(o,"Clipboard",m.a),o)},b=v,g=(n("11ae"),n("2877")),k=Object(g["a"])(b,i,r,!1,null,"5da2d832",null);k.options.__file="RechargeByUnionPay.vue";e["default"]=k.exports},"53bd":function(t,e,n){},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.1
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){var o,i,r;(function(a,c){i=[t,n(7)],o=c,r="function"===typeof o?o.apply(e,i):o,void 0===r||(t.exports=r)})(0,function(t,e){"use strict";var n=o(e);function o(t){return t&&t.__esModule?t:{default:t}}var i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function(){function t(e){r(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"===typeof t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=c})},function(t,e,n){var o=n(6),i=n(5);function r(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return a(t,e,n);if(o.nodeList(t))return c(t,e,n);if(o.string(t))return s(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function c(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function s(t,e,n){return i(document.body,t,e,n)}t.exports=r},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function i(){o.off(t,i),e.apply(n,arguments)}return i._=e,this.on(t,i,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;r<a;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},t.exports=n},function(t,e,n){var o,i,r;(function(a,c){i=[t,n(0),n(2),n(1)],o=c,r="function"===typeof o?o.apply(e,i):o,void 0===r||(t.exports=r)})(0,function(t,e,n,o){"use strict";var i=c(e),r=c(n),a=c(o);function c(t){return t&&t.__esModule?t:{default:t}}var s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function d(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var p=function(t){function e(t,n){l(this,e);var o=f(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return d(e,t),u(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===s(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,a.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new i.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return m("action",t)}},{key:"defaultTarget",value:function(t){var e=m("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return m("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(r.default);function m(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=p})},function(t,e){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}function i(t,e){while(t&&t.nodeType!==n){if("function"===typeof t.matches&&t.matches(e))return t;t=t.parentNode}}t.exports=i},function(t,e,n){var o=n(4);function i(t,e,n,o,i){var r=a.apply(this,arguments);return t.addEventListener(n,r,i),{destroy:function(){t.removeEventListener(n,r,i)}}}function r(t,e,n,o,r){return"function"===typeof t.addEventListener?i.apply(null,arguments):"function"===typeof n?i.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}function a(t,e,n,i){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&i.call(t,n)}}t.exports=r},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i),e=o.toString()}return e}t.exports=n}])})}}]);
//# sourceMappingURL=chunk-43c0.15c6a31b.js.map