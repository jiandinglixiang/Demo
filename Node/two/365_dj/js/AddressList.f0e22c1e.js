(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AddressList"],{"02ea":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dialog"},[n("div",{staticClass:"mask",on:{click:t.onClose}}),n("div",{staticClass:"content"},[t._t("default")],2)])},s=[],r={name:"vDialog",methods:{onClose:function(){this.$emit("close")}}},a=r,o=(n("8f66"),n("2877")),c=Object(o["a"])(a,i,s,!1,null,null,null);c.options.__file="VDialog.vue";e["a"]=c.exports},"103a":function(t,e,n){t.exports=n.p+"img/ic_address_no@2x.6f9224e1.png"},"21d5":function(t,e,n){},"237b":function(t,e,n){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=213)}({0:function(t,e){t.exports=function(t,e,n,i,s){var r,a=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,a=t.default);var c,l="function"===typeof a?a.options:a;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),i&&(l._scopeId=i),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):n&&(c=n),c){var u=l.functional,d=u?l.render:l.beforeCreate;u?l.render=function(t,e){return c.call(e),d(t,e)}:l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:r,exports:a,options:l}}},1:function(t,e){t.exports=n("2b0e")},102:function(t,e){},12:function(t,e,n){"use strict";var i="@@clickoutsideContext";e["a"]={bind:function(t,e,n){var s=function(e){n.context&&!t.contains(e.target)&&n.context[t[i].methodName]()};t[i]={documentHandler:s,methodName:e.expression,arg:e.arg||"click"},document.addEventListener(t[i].arg,s)},update:function(t,e){t[i].methodName=e.expression},unbind:function(t){document.removeEventListener(t[i].arg,t[i].documentHandler)},install:function(t){t.directive("clickoutside",{bind:this.bind,unbind:this.unbind})}}},133:function(t,e,n){function i(t){n(102)}var s=n(0)(n(55),n(171),i,null,null);t.exports=s.exports},171:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("x-cell",{directives:[{name:"clickoutside",rawName:"v-clickoutside:touchstart",value:t.swipeMove,expression:"swipeMove",arg:"touchstart"}],ref:"cell",staticClass:"mint-cell-swipe",attrs:{title:t.title,icon:t.icon,label:t.label,to:t.to,"is-link":t.isLink,value:t.value},nativeOn:{click:function(e){t.swipeMove()},touchstart:function(e){t.startDrag(e)},touchmove:function(e){t.onDrag(e)},touchend:function(e){t.endDrag(e)}}},[n("div",{ref:"right",staticClass:"mint-cell-swipe-buttongroup",slot:"right"},t._l(t.right,function(e){return n("a",{staticClass:"mint-cell-swipe-button",style:e.style,domProps:{innerHTML:t._s(e.content)},on:{click:function(n){n.preventDefault(),n.stopPropagation(),e.handler&&e.handler(),t.swipeMove()}}})})),t._v(" "),n("div",{ref:"left",staticClass:"mint-cell-swipe-buttongroup",slot:"left"},t._l(t.left,function(e){return n("a",{staticClass:"mint-cell-swipe-button",style:e.style,domProps:{innerHTML:t._s(e.content)},on:{click:function(n){n.preventDefault(),n.stopPropagation(),e.handler&&e.handler(),t.swipeMove()}}})})),t._v(" "),t._t("default"),t._v(" "),t.$slots.title?n("span",{slot:"title"},[t._t("title")],2):t._e(),t._v(" "),t.$slots.icon?n("span",{slot:"icon"},[t._t("icon")],2):t._e()],2)},staticRenderFns:[]}},2:function(t,e,n){"use strict";var i=n(1),s=n.n(i);n.d(e,"c",function(){return l}),e["a"]=d,e["b"]=f;var r=s.a.prototype.$isServer,a=(r||Number(document.documentMode),function(t){return(t||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")}),o=function(){return!r&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)}}(),c=function(){return!r&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)}}(),l=function(t,e,n){var i=function(){n&&n.apply(this,arguments),c(t,e,i)};o(t,e,i)};function u(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}function d(t,e){if(t){for(var n=t.className,i=(e||"").split(" "),s=0,r=i.length;s<r;s++){var a=i[s];a&&(t.classList?t.classList.add(a):u(t,a)||(n+=" "+a))}t.classList||(t.className=n)}}function f(t,e){if(t&&e){for(var n=e.split(" "),i=" "+t.className+" ",s=0,r=n.length;s<r;s++){var o=n[s];o&&(t.classList?t.classList.remove(o):u(t,o)&&(i=i.replace(" "+o+" "," ")))}t.classList||(t.className=a(i))}}},21:function(t,e,n){"use strict";var i=n(133),s=n.n(i);Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return s.a})},213:function(t,e,n){t.exports=n(21)},3:function(t,e){t.exports=n("e384")},4:function(t,e){t.exports=n("8516")},55:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=n(3),r=n.n(s),a=n(12);n(4),e["default"]={name:"mt-cell-swipe",components:{XCell:r.a},directives:{Clickoutside:a["a"]},props:{to:String,left:Array,right:Array,icon:String,title:String,label:String,isLink:Boolean,value:{}},data:function(){return{start:{x:0,y:0}}},mounted:function(){this.wrap=this.$refs.cell.$el.querySelector(".mint-cell-wrapper"),this.leftElm=this.$refs.left,this.rightElm=this.$refs.right,this.leftWrapElm=this.leftElm.parentNode,this.rightWrapElm=this.rightElm.parentNode,this.leftWidth=this.leftElm.getBoundingClientRect().width,this.rightWidth=this.rightElm.getBoundingClientRect().width,this.leftDefaultTransform=this.translate3d(-this.leftWidth-1),this.rightDefaultTransform=this.translate3d(this.rightWidth),this.rightWrapElm.style.webkitTransform=this.rightDefaultTransform,this.leftWrapElm.style.webkitTransform=this.leftDefaultTransform},methods:{resetSwipeStatus:function(){this.swiping=!1,this.opened=!0,this.offsetLeft=0},translate3d:function(t){return"translate3d("+t+"px, 0, 0)"},setAnimations:function(t){this.wrap.style.transitionDuration=t,this.rightWrapElm.style.transitionDuration=t,this.leftWrapElm.style.transitionDuration=t},swipeMove:function(t){void 0===t&&(t=0),this.wrap.style.webkitTransform=this.translate3d(t),this.rightWrapElm.style.webkitTransform=this.translate3d(this.rightWidth+t),this.leftWrapElm.style.webkitTransform=this.translate3d(-this.leftWidth+t),t&&(this.swiping=!0)},swipeLeaveTransition:function(t){var e=this;setTimeout(function(){return e.swipeLeave=!0,t>0&&-e.offsetLeft>.4*e.rightWidth?(e.swipeMove(-e.rightWidth),void e.resetSwipeStatus()):t<0&&e.offsetLeft>.4*e.leftWidth?(e.swipeMove(e.leftWidth),void e.resetSwipeStatus()):(e.swipeMove(0),void n.i(i["c"])(e.wrap,"webkitTransitionEnd",function(t){e.wrap.style.webkitTransform="",e.rightWrapElm.style.webkitTransform=e.rightDefaultTransform,e.leftWrapElm.style.webkitTransform=e.leftDefaultTransform,e.swipeLeave=!1,e.swiping=!1}))},0)},startDrag:function(t){t=t.changedTouches?t.changedTouches[0]:t,this.dragging=!0,this.start.x=t.pageX,this.start.y=t.pageY,this.direction=""},onDrag:function(t){if(this.opened)return this.swiping||(this.swipeMove(0),this.setAnimations("")),void(this.opened=!1);if(this.dragging){var e,n=t.changedTouches?t.changedTouches[0]:t,i=n.pageY-this.start.y,s=this.offsetLeft=n.pageX-this.start.x,r=Math.abs(i),a=Math.abs(s);if(this.setAnimations("0ms"),""===this.direction&&(this.direction=a>r?"horizonal":"vertical"),"horizonal"===this.direction){if(t.preventDefault(),t.stopPropagation(),e=!(a<5||a>=5&&r>=1.73*a),!e)return;s<0&&-s>this.rightWidth||s>0&&s>this.leftWidth||s>0&&!this.leftWidth||s<0&&!this.rightWidth||this.swipeMove(s)}}},endDrag:function(){this.direction="",this.setAnimations(""),this.swiping&&this.swipeLeaveTransition(this.offsetLeft>0?-1:1)}}}}})},"6a14":function(t,e,n){},"77cb":function(t,e){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=210)}({0:function(t,e){t.exports=function(t,e,n,i,s){var r,a=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,a=t.default);var c,l="function"===typeof a?a.options:a;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),i&&(l._scopeId=i),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):n&&(c=n),c){var u=l.functional,d=u?l.render:l.beforeCreate;u?l.render=function(t,e){return c.call(e),d(t,e)}:l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:r,exports:a,options:l}}},106:function(t,e){},131:function(t,e,n){function i(t){n(106)}var s=n(0)(n(53),n(175),i,null,null);t.exports=s.exports},175:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"mint-badge",class:["is-"+t.type,"is-size-"+t.size],style:{backgroundColor:t.color}},[t._t("default")],2)},staticRenderFns:[]}},19:function(t,e,n){"use strict";var i=n(131),s=n.n(i);Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return s.a})},210:function(t,e,n){t.exports=n(19)},53:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"mt-badge",props:{color:String,type:{type:String,default:"primary"},size:{type:String,default:"normal"}}}}})},8516:function(t,e,n){},"8ed7":function(t,e,n){"use strict";n.r(e);var i,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"addressList"},[n("nav-head",{attrs:{title:"收货地址",FixedOrTransparency:"isFixed NoTransparency"}}),n("div",[n("div",{staticClass:"address-list"},[n("div",t._l(t.AddressList,function(e){return n("address-item",{key:e.id,attrs:{item:e},on:{handler:t.deleteButtonHandler}})})),n("no-address",{directives:[{name:"show",rawName:"v-show",value:0===t.AddressList.length,expression:"AddressList.length===0"}]})],1),n("div",{staticClass:"bottom"},[n("router-link",{staticClass:"btn-add",attrs:{to:"addNewAddress",tag:"a"}},[t._v("添加新地址")])],1)]),n("v-dialog",{directives:[{name:"show",rawName:"v-show",value:this.display,expression:"this.display"}],on:{close:t.onCloseDialog}},[n("div",{staticClass:"text"},[t._v("确认删除地址信息？")]),n("div",{staticClass:"btn-group"},[n("mt-button",{staticClass:"btn-cancel",nativeOn:{click:function(e){return t.onCloseDialog(e)}}},[t._v("取消")]),n("mt-button",{staticClass:"btn-confirm",nativeOn:{click:function(e){return t.deleteAddress(e)}}},[t._v("确定")])],1)])],1)},r=[],a=n("a322"),o=(n("affe"),n("237b")),c=n.n(o),l=(n("f2d0"),n("518b")),u=n.n(l),d=(n("5fc6"),n("5af2")),f=n.n(d),p=n("c93e"),h=n("c793"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-wrap text-left margin-top-15"},[n("mt-cell-swipe",{staticClass:"item",attrs:{right:t.rightOptions}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("p",{staticClass:"address-title"},[1===t.item.is_default?[n("span",{staticClass:"badge"},[t._v("默认")])]:t._e(),t._v("\n        "+t._s(t.item.province_name)+" "+t._s(t.item.city_name)+" "+t._s(t.item.county_name)+"\n      ")],2),n("p",{staticClass:"address-detail"},[t._v(t._s(t.item.address)),n("br"),n("span",{staticClass:"color-light margin-right-10"},[t._v(t._s(t.item.user_name))]),t._v(t._s(t.item.user_phone)),n("br"),n("span",{staticClass:"color-light margin-right-10"},[t._v("QQ号码")]),t._v(t._s(t.item.user_qq))]),n("router-link",{staticClass:"btn-edit",attrs:{to:{name:"editAddress",query:{list:t.item}},tag:"button"}},[t._v("编辑")])],1)])],1)},m=[],_=(n("6a14"),n("77cb")),g=n.n(_),b={name:"addressItem",props:{item:{type:Object},display:{type:Boolean}},data:function(){var t=this;return{rightOptions:[{content:"删除",style:{background:"#F64646",color:"#fff",width:"60px",padding:"0",textAlign:"center",lineHeight:"118px",fontSize:"15px"},handler:function(){return t.deleteHandler(t.item.id)}}]}},methods:{showCancelBind:function(){this.display=!0},closeCancelBind:function(){this.display=!1},deleteHandler:function(t){this.$emit("handler",t)}},components:(i={},Object(a["a"])(i,c.a.name,c.a),Object(a["a"])(i,g.a.name,g.a),i)},x=b,C=(n("9e34"),n("2877")),w=Object(C["a"])(x,v,m,!1,null,"58719638",null);w.options.__file="AddressItem.vue";var y=w.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"no-address"},[i("img",{attrs:{src:n("103a")}}),i("p",[t._v("暂无地址数据")])])}],L={name:"noAddress"},k=L,T=(n("9c05"),Object(C["a"])(k,E,O,!1,null,"027d7536",null));T.options.__file="NoAddress.vue";var $,j=T.exports,S=n("02ea"),M=n("2f62"),A=n("7ff4"),D=n("d5db"),N={name:"addressList",data:function(){return{display:!1,addressId:""}},methods:Object(p["a"])({onCloseDialog:function(){this.display=!1},deleteButtonHandler:function(t){this.addressId=t,this.display=!0},deleteAddress:function(){var t=this;this.addressId&&D["a"].postDeleteAddress({id:this.addressId}).then(function(e){e?t.display=!1:f()("删除地址失败")})}},Object(M["b"])({getAddressList:A["l"]})),components:($={NavHead:h["a"]},Object(a["a"])($,u.a.name,u.a),Object(a["a"])($,c.a.name,c.a),Object(a["a"])($,"AddressItem",y),Object(a["a"])($,"NoAddress",j),Object(a["a"])($,"VDialog",S["a"]),$),computed:Object(p["a"])({},Object(M["d"])({AddressList:function(t){return t.mine.AddressList}})),created:function(){this.getAddressList()}},W=N,P=(n("c1cc"),Object(C["a"])(W,s,r,!1,null,"76c671d4",null));P.options.__file="AddressList.vue";e["default"]=P.exports},"8f2c":function(t,e,n){},"8f66":function(t,e,n){"use strict";var i=n("8f2c"),s=n.n(i);s.a},"9c05":function(t,e,n){"use strict";var i=n("21d5"),s=n.n(i);s.a},"9e34":function(t,e,n){"use strict";var i=n("e177"),s=n.n(i);s.a},affe:function(t,e,n){},c1cc:function(t,e,n){"use strict";var i=n("f49c"),s=n.n(i);s.a},e177:function(t,e,n){},e384:function(t,e,n){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=212)}({0:function(t,e){t.exports=function(t,e,n,i,s){var r,a=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,a=t.default);var c,l="function"===typeof a?a.options:a;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),i&&(l._scopeId=i),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):n&&(c=n),c){var u=l.functional,d=u?l.render:l.beforeCreate;u?l.render=function(t,e){return c.call(e),d(t,e)}:l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:r,exports:a,options:l}}},116:function(t,e){},134:function(t,e,n){function i(t){n(116)}var s=n(0)(n(56),n(186),i,null,null);t.exports=s.exports},17:function(t,e){t.exports=n("84dc")},186:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"mint-cell",attrs:{href:t.href}},[t.isLink?n("span",{staticClass:"mint-cell-mask"}):t._e(),t._v(" "),n("div",{staticClass:"mint-cell-left"},[t._t("left")],2),t._v(" "),n("div",{staticClass:"mint-cell-wrapper"},[n("div",{staticClass:"mint-cell-title"},[t._t("icon",[t.icon?n("i",{staticClass:"mintui",class:"mintui-"+t.icon}):t._e()]),t._v(" "),t._t("title",[n("span",{staticClass:"mint-cell-text",domProps:{textContent:t._s(t.title)}}),t._v(" "),t.label?n("span",{staticClass:"mint-cell-label",domProps:{textContent:t._s(t.label)}}):t._e()])],2),t._v(" "),n("div",{staticClass:"mint-cell-value",class:{"is-link":t.isLink}},[t._t("default",[n("span",{domProps:{textContent:t._s(t.value)}})])],2),t._v(" "),t.isLink?n("i",{staticClass:"mint-cell-allow-right"}):t._e()]),t._v(" "),n("div",{staticClass:"mint-cell-right"},[t._t("right")],2)])},staticRenderFns:[]}},212:function(t,e,n){t.exports=n(22)},22:function(t,e,n){"use strict";var i=n(134),s=n.n(i);Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return s.a})},56:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(17),e["default"]={name:"mt-cell",props:{to:[String,Object],icon:String,title:String,label:String,isLink:Boolean,value:{}},computed:{href:function(){var t=this;if(this.to&&!this.added&&this.$router){var e=this.$router.match(this.to);return e.matched.length?(this.$nextTick(function(){t.added=!0,t.$el.addEventListener("click",t.handleClick)}),e.fullPath||e.path):this.to}return this.to}},methods:{handleClick:function(t){t.preventDefault(),this.$router.push(this.href)}}}}})},f49c:function(t,e,n){}}]);
//# sourceMappingURL=AddressList.f0e22c1e.js.map