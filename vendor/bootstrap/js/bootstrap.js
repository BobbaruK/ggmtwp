/*!
  * Bootstrap util.js v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Util=t(e.jQuery)}(this,(function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),i="transitionend";function a(e){var t=this,i=!1;return n.default(this).one(l.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||l.triggerTransitionEnd(t)}),e),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var t=n.default(e).css("transition-duration"),i=n.default(e).css("transition-delay"),a=parseFloat(t),l=parseFloat(i);return a||l?(t=t.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(t)+parseFloat(i))):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){n.default(e).trigger(i)},supportsTransitionEnd:function(){return Boolean(i)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var a=n[i],o=t[i],r=o&&l.isElement(o)?"element":null==(s=o)?""+s:{}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(a).test(r))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+r+'" but expected type "'+a+'".')}var s},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){var t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?l.findShadowRoot(e.parentNode):null},jQueryDetection:function(){if(void 0===n.default)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=n.default.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};return l.jQueryDetection(),n.default.fn.emulateTransitionEnd=a,n.default.event.special[l.TRANSITION_END]={bindType:i,delegateType:i,handle:function(e){if(n.default(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}},l})),function(e){if(void 0===e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}($),
/*!
  * Bootstrap collapse.js v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Collapse=t(e.jQuery,e.Util)}(this,(function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(e),a=n(t);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r="collapse",s="bs.collapse",d=i.default.fn[r],u={toggle:!0,parent:""},f={toggle:"boolean",parent:"(string|element)"},c="show",h="collapse",g="collapsing",m="collapsed",_="width",p='[data-toggle="collapse"]',v=function(){function e(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(p)),i=0,l=n.length;i<l;i++){var o=n[i],r=a.default.getSelectorFromElement(o),s=[].slice.call(document.querySelectorAll(r)).filter((function(t){return t===e}));null!==r&&s.length>0&&(this._selector=r,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t,n,d,v=e.prototype;return v.toggle=function(){i.default(this._element).hasClass(c)?this.hide():this.show()},v.show=function(){var t,n,l=this;if(!this._isTransitioning&&!i.default(this._element).hasClass(c)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(e){return"string"==typeof l._config.parent?e.getAttribute("data-parent")===l._config.parent:e.classList.contains(h)}))).length&&(t=null),!(t&&(n=i.default(t).not(this._selector).data(s))&&n._isTransitioning))){var o=i.default.Event("show.bs.collapse");if(i.default(this._element).trigger(o),!o.isDefaultPrevented()){t&&(e._jQueryInterface.call(i.default(t).not(this._selector),"hide"),n||i.default(t).data(s,null));var r=this._getDimension();i.default(this._element).removeClass(h).addClass(g),this._element.style[r]=0,this._triggerArray.length&&i.default(this._triggerArray).removeClass(m).attr("aria-expanded",!0),this.setTransitioning(!0);var d="scroll"+(r[0].toUpperCase()+r.slice(1)),u=a.default.getTransitionDurationFromElement(this._element);i.default(this._element).one(a.default.TRANSITION_END,(function(){i.default(l._element).removeClass(g).addClass("collapse show"),l._element.style[r]="",l.setTransitioning(!1),i.default(l._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(u),this._element.style[r]=this._element[d]+"px"}}},v.hide=function(){var e=this;if(!this._isTransitioning&&i.default(this._element).hasClass(c)){var t=i.default.Event("hide.bs.collapse");if(i.default(this._element).trigger(t),!t.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",a.default.reflow(this._element),i.default(this._element).addClass(g).removeClass("collapse show");var l=this._triggerArray.length;if(l>0)for(var o=0;o<l;o++){var r=this._triggerArray[o],s=a.default.getSelectorFromElement(r);if(null!==s)i.default([].slice.call(document.querySelectorAll(s))).hasClass(c)||i.default(r).addClass(m).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var d=a.default.getTransitionDurationFromElement(this._element);i.default(this._element).one(a.default.TRANSITION_END,(function(){e.setTransitioning(!1),i.default(e._element).removeClass(g).addClass(h).trigger("hidden.bs.collapse")})).emulateTransitionEnd(d)}}},v.setTransitioning=function(e){this._isTransitioning=e},v.dispose=function(){i.default.removeData(this._element,s),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},v._getConfig=function(e){return(e=l({},u,e)).toggle=Boolean(e.toggle),a.default.typeCheckConfig(r,e,f),e},v._getDimension=function(){return i.default(this._element).hasClass(_)?_:"height"},v._getParent=function(){var t,n=this;a.default.isElement(this._config.parent)?(t=this._config.parent,void 0!==this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var l='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',o=[].slice.call(t.querySelectorAll(l));return i.default(o).each((function(t,i){n._addAriaAndCollapsedClass(e._getTargetFromElement(i),[i])})),t},v._addAriaAndCollapsedClass=function(e,t){var n=i.default(e).hasClass(c);t.length&&i.default(t).toggleClass(m,!n).attr("aria-expanded",n)},e._getTargetFromElement=function(e){var t=a.default.getSelectorFromElement(e);return t?document.querySelector(t):null},e._jQueryInterface=function(t){return this.each((function(){var n=i.default(this),a=n.data(s),o=l({},u,n.data(),"object"==typeof t&&t?t:{});if(!a&&o.toggle&&"string"==typeof t&&/show|hide/.test(t)&&(o.toggle=!1),a||(a=new e(this,o),n.data(s,a)),"string"==typeof t){if(void 0===a[t])throw new TypeError('No method named "'+t+'"');a[t]()}}))},t=e,d=[{key:"VERSION",get:function(){return"4.5.3"}},{key:"Default",get:function(){return u}}],(n=null)&&o(t.prototype,n),d&&o(t,d),e}();return i.default(document).on("click.bs.collapse.data-api",p,(function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var t=i.default(this),n=a.default.getSelectorFromElement(this),l=[].slice.call(document.querySelectorAll(n));i.default(l).each((function(){var e=i.default(this),n=e.data(s)?"toggle":t.data();v._jQueryInterface.call(e,n)}))})),i.default.fn[r]=v._jQueryInterface,i.default.fn[r].Constructor=v,i.default.fn[r].noConflict=function(){return i.default.fn[r]=d,v._jQueryInterface},v})),
/*!
  * Bootstrap modal.js v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Modal=t(e.jQuery,e.Util)}(this,(function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(e),a=n(t);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r="modal",s="bs.modal",d=".bs.modal",u=i.default.fn.modal,f={backdrop:!0,keyboard:!0,focus:!0,show:!0},c={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},h="hidden.bs.modal",g="show.bs.modal",m="focusin.bs.modal",_="resize.bs.modal",p="click.dismiss.bs.modal",v="keydown.dismiss.bs.modal",y="mousedown.dismiss.bs.modal",b="modal-open",w="fade",T="show",E="modal-static",C=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",S=".sticky-top",N=function(){function e(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t,n,u,N=e.prototype;return N.toggle=function(e){return this._isShown?this.hide():this.show(e)},N.show=function(e){var t=this;if(!this._isShown&&!this._isTransitioning){i.default(this._element).hasClass(w)&&(this._isTransitioning=!0);var n=i.default.Event(g,{relatedTarget:e});i.default(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),i.default(this._element).on(p,'[data-dismiss="modal"]',(function(e){return t.hide(e)})),i.default(this._dialog).on(y,(function(){i.default(t._element).one("mouseup.dismiss.bs.modal",(function(e){i.default(e.target).is(t._element)&&(t._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return t._showElement(e)})))}},N.hide=function(e){var t=this;if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning){var n=i.default.Event("hide.bs.modal");if(i.default(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var l=i.default(this._element).hasClass(w);if(l&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),i.default(document).off(m),i.default(this._element).removeClass(T),i.default(this._element).off(p),i.default(this._dialog).off(y),l){var o=a.default.getTransitionDurationFromElement(this._element);i.default(this._element).one(a.default.TRANSITION_END,(function(e){return t._hideModal(e)})).emulateTransitionEnd(o)}else this._hideModal()}}},N.dispose=function(){[window,this._element,this._dialog].forEach((function(e){return i.default(e).off(d)})),i.default(document).off(m),i.default.removeData(this._element,s),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},N.handleUpdate=function(){this._adjustDialog()},N._getConfig=function(e){return e=l({},f,e),a.default.typeCheckConfig(r,e,c),e},N._triggerBackdropTransition=function(){var e=this;if("static"===this._config.backdrop){var t=i.default.Event("hidePrevented.bs.modal");if(i.default(this._element).trigger(t),t.isDefaultPrevented())return;var n=this._element.scrollHeight>document.documentElement.clientHeight;n||(this._element.style.overflowY="hidden"),this._element.classList.add(E);var l=a.default.getTransitionDurationFromElement(this._dialog);i.default(this._element).off(a.default.TRANSITION_END),i.default(this._element).one(a.default.TRANSITION_END,(function(){e._element.classList.remove(E),n||i.default(e._element).one(a.default.TRANSITION_END,(function(){e._element.style.overflowY=""})).emulateTransitionEnd(e._element,l)})).emulateTransitionEnd(l),this._element.focus()}else this.hide()},N._showElement=function(e){var t=this,n=i.default(this._element).hasClass(w),l=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),i.default(this._dialog).hasClass("modal-dialog-scrollable")&&l?l.scrollTop=0:this._element.scrollTop=0,n&&a.default.reflow(this._element),i.default(this._element).addClass(T),this._config.focus&&this._enforceFocus();var o=i.default.Event("shown.bs.modal",{relatedTarget:e}),r=function(){t._config.focus&&t._element.focus(),t._isTransitioning=!1,i.default(t._element).trigger(o)};if(n){var s=a.default.getTransitionDurationFromElement(this._dialog);i.default(this._dialog).one(a.default.TRANSITION_END,r).emulateTransitionEnd(s)}else r()},N._enforceFocus=function(){var e=this;i.default(document).off(m).on(m,(function(t){document!==t.target&&e._element!==t.target&&0===i.default(e._element).has(t.target).length&&e._element.focus()}))},N._setEscapeEvent=function(){var e=this;this._isShown?i.default(this._element).on(v,(function(t){e._config.keyboard&&27===t.which?(t.preventDefault(),e.hide()):e._config.keyboard||27!==t.which||e._triggerBackdropTransition()})):this._isShown||i.default(this._element).off(v)},N._setResizeEvent=function(){var e=this;this._isShown?i.default(window).on(_,(function(t){return e.handleUpdate(t)})):i.default(window).off(_)},N._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop((function(){i.default(document.body).removeClass(b),e._resetAdjustments(),e._resetScrollbar(),i.default(e._element).trigger(h)}))},N._removeBackdrop=function(){this._backdrop&&(i.default(this._backdrop).remove(),this._backdrop=null)},N._showBackdrop=function(e){var t=this,n=i.default(this._element).hasClass(w)?w:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",n&&this._backdrop.classList.add(n),i.default(this._backdrop).appendTo(document.body),i.default(this._element).on(p,(function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&t._triggerBackdropTransition()})),n&&a.default.reflow(this._backdrop),i.default(this._backdrop).addClass(T),!e)return;if(!n)return void e();var l=a.default.getTransitionDurationFromElement(this._backdrop);i.default(this._backdrop).one(a.default.TRANSITION_END,e).emulateTransitionEnd(l)}else if(!this._isShown&&this._backdrop){i.default(this._backdrop).removeClass(T);var o=function(){t._removeBackdrop(),e&&e()};if(i.default(this._element).hasClass(w)){var r=a.default.getTransitionDurationFromElement(this._backdrop);i.default(this._backdrop).one(a.default.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else e&&e()},N._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},N._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},N._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(e.left+e.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},N._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(C)),n=[].slice.call(document.querySelectorAll(S));i.default(t).each((function(t,n){var a=n.style.paddingRight,l=i.default(n).css("padding-right");i.default(n).data("padding-right",a).css("padding-right",parseFloat(l)+e._scrollbarWidth+"px")})),i.default(n).each((function(t,n){var a=n.style.marginRight,l=i.default(n).css("margin-right");i.default(n).data("margin-right",a).css("margin-right",parseFloat(l)-e._scrollbarWidth+"px")}));var a=document.body.style.paddingRight,l=i.default(document.body).css("padding-right");i.default(document.body).data("padding-right",a).css("padding-right",parseFloat(l)+this._scrollbarWidth+"px")}i.default(document.body).addClass(b)},N._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(C));i.default(e).each((function(e,t){var n=i.default(t).data("padding-right");i.default(t).removeData("padding-right"),t.style.paddingRight=n||""}));var t=[].slice.call(document.querySelectorAll(".sticky-top"));i.default(t).each((function(e,t){var n=i.default(t).data("margin-right");void 0!==n&&i.default(t).css("margin-right",n).removeData("margin-right")}));var n=i.default(document.body).data("padding-right");i.default(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},N._getScrollbarWidth=function(){var e=document.createElement("div");e.className="modal-scrollbar-measure",document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},e._jQueryInterface=function(t,n){return this.each((function(){var a=i.default(this).data(s),o=l({},f,i.default(this).data(),"object"==typeof t&&t?t:{});if(a||(a=new e(this,o),i.default(this).data(s,a)),"string"==typeof t){if(void 0===a[t])throw new TypeError('No method named "'+t+'"');a[t](n)}else o.show&&a.show(n)}))},t=e,u=[{key:"VERSION",get:function(){return"4.5.3"}},{key:"Default",get:function(){return f}}],(n=null)&&o(t.prototype,n),u&&o(t,u),e}();return i.default(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(e){var t,n=this,o=a.default.getSelectorFromElement(this);o&&(t=document.querySelector(o));var r=i.default(t).data(s)?"toggle":l({},i.default(t).data(),i.default(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var d=i.default(t).one(g,(function(e){e.isDefaultPrevented()||d.one(h,(function(){i.default(n).is(":visible")&&n.focus()}))}));N._jQueryInterface.call(i.default(t),r,this)})),i.default.fn.modal=N._jQueryInterface,i.default.fn.modal.Constructor=N,i.default.fn.modal.noConflict=function(){return i.default.fn.modal=u,N._jQueryInterface},N})),
/*!
  * Bootstrap tab.js v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).Tab=t(e.jQuery,e.Util)}(this,(function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(e),a=n(t);function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o="bs.tab",r=i.default.fn.tab,s="active",d="fade",u="show",f=".active",c="> li > .active",h=function(){function e(e){this._element=e}var t,n,r,h=e.prototype;return h.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&i.default(this._element).hasClass(s)||i.default(this._element).hasClass("disabled"))){var t,n,l=i.default(this._element).closest(".nav, .list-group")[0],o=a.default.getSelectorFromElement(this._element);if(l){var r="UL"===l.nodeName||"OL"===l.nodeName?c:f;n=(n=i.default.makeArray(i.default(l).find(r)))[n.length-1]}var d=i.default.Event("hide.bs.tab",{relatedTarget:this._element}),u=i.default.Event("show.bs.tab",{relatedTarget:n});if(n&&i.default(n).trigger(d),i.default(this._element).trigger(u),!u.isDefaultPrevented()&&!d.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,l);var h=function(){var t=i.default.Event("hidden.bs.tab",{relatedTarget:e._element}),a=i.default.Event("shown.bs.tab",{relatedTarget:n});i.default(n).trigger(t),i.default(e._element).trigger(a)};t?this._activate(t,t.parentNode,h):h()}}},h.dispose=function(){i.default.removeData(this._element,o),this._element=null},h._activate=function(e,t,n){var l=this,o=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?i.default(t).children(f):i.default(t).find(c))[0],r=n&&o&&i.default(o).hasClass(d),s=function(){return l._transitionComplete(e,o,n)};if(o&&r){var h=a.default.getTransitionDurationFromElement(o);i.default(o).removeClass(u).one(a.default.TRANSITION_END,s).emulateTransitionEnd(h)}else s()},h._transitionComplete=function(e,t,n){if(t){i.default(t).removeClass(s);var l=i.default(t.parentNode).find("> .dropdown-menu .active")[0];l&&i.default(l).removeClass(s),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}if(i.default(e).addClass(s),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),a.default.reflow(e),e.classList.contains(d)&&e.classList.add(u),e.parentNode&&i.default(e.parentNode).hasClass("dropdown-menu")){var o=i.default(e).closest(".dropdown")[0];if(o){var r=[].slice.call(o.querySelectorAll(".dropdown-toggle"));i.default(r).addClass(s)}e.setAttribute("aria-expanded",!0)}n&&n()},e._jQueryInterface=function(t){return this.each((function(){var n=i.default(this),a=n.data(o);if(a||(a=new e(this),n.data(o,a)),"string"==typeof t){if(void 0===a[t])throw new TypeError('No method named "'+t+'"');a[t]()}}))},t=e,r=[{key:"VERSION",get:function(){return"4.5.3"}}],(n=null)&&l(t.prototype,n),r&&l(t,r),e}();return i.default(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(e){e.preventDefault(),h._jQueryInterface.call(i.default(this),"show")})),i.default.fn.tab=h._jQueryInterface,i.default.fn.tab.Constructor=h,i.default.fn.tab.noConflict=function(){return i.default.fn.tab=r,h._jQueryInterface},h}));