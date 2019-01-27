!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){
/*! lozad.js - v1.7.0 - 2018-11-08
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2018 Apoorv Saxena; Licensed MIT */
t.exports=function(){"use strict";var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},e="undefined"!=typeof document&&document.documentMode,n={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var n=document.createElement("img");e&&t.getAttribute("data-iesrc")&&(n.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(n.alt=t.getAttribute("data-alt")),t.appendChild(n)}t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset")),t.getAttribute("data-background-image")&&(t.style.backgroundImage="url('"+t.getAttribute("data-background-image")+"')"),t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function r(t){t.setAttribute("data-loaded",!0)}var o=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var e,a,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},u=t({},n,c),l=u.root,d=u.rootMargin,s=u.threshold,f=u.load,g=u.loaded,b=void 0;return window.IntersectionObserver&&(b=new IntersectionObserver((e=f,a=g,function(t,n){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(n.unobserve(t.target),o(t.target)||(e(t.target),r(t.target),a(t.target)))})}),{root:l,rootMargin:d,threshold:s})),{observe:function(){for(var t=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)}(i,l),e=0;e<t.length;e++)o(t[e])||(b?b.observe(t[e]):(f(t[e]),r(t[e]),g(t[e])))},triggerLoad:function(t){o(t)||(f(t),r(t),g(t))},observer:b}}}()},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=document.querySelector(".gallery__media"),o=function(){fetch("".concat("https://api.instagram.com/v1/users/self/media/recent/","?access_token=").concat("3570871508.f16a386.1c99bf54785545738360e2e9f7843edb","&count=12"),{method:"GET",headers:{Accept:"application/json"}}).then(function(t){return t.json()}).then(function(t){var e=t.meta,n=t.data;200===e.code&&n&&function(t){var e=t.map(function(t){var e=t.images,n=t.caption;return{image:e.standard_resolution.url,description:n.text}}),n="";e.forEach(function(t){var e=t.image,r=t.description;n+='\n    <div class="gallery__image">\n      <img class="materialboxed" width="300" src="'.concat(e,'" data-caption="').concat(r,'">\n    </div>\n    ')}),r.innerHTML='\n  <div>\n     <div class="gallery">\n       '.concat(n,"\n     </div>\n  </div>\n  ");var o=document.querySelectorAll(".materialboxed");M.Materialbox.init(o)}(n)})},a=n(0),i=n.n(a);n(1);function c(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}i()().observe(),document.addEventListener("DOMContentLoaded",function(){c(document.querySelectorAll(".js_btn")).forEach(function(t){var e=!1,n=t.innerText,r=t.dataset.hideText,o=document.getElementById(t.dataset.for),a=o.getElementsByClassName("trends__wrapper")[0],i=o.getElementsByClassName("trends__text")[0],c=a.offsetHeight;t.addEventListener("click",function(){e?(a.style.height="".concat(c,"px"),t.innerText=n):(a.style.height="".concat(i.offsetHeight,"px"),t.innerText=r),e=!e})}),document.getElementById("up-button").addEventListener("click",function(){window.scroll({behavior:"smooth",top:0})});var t=document.querySelectorAll(".collapsible");M.Collapsible.init(t);c(document.querySelectorAll(".js_link")).forEach(function(t){var e=document.getElementById(t.attributes.href.value.substring(2));t.addEventListener("click",function(t){t.preventDefault(),function(t){e=t,e instanceof Element&&(t=t.getBoundingClientRect().y+window.scrollY);var e;window.scroll({behavior:"smooth",top:t})}(e)})}),o();var e=document.querySelectorAll(".carousel");M.Carousel.init(e,{indicators:!0,fullWidth:!0}),e.forEach(function(t){var e=M.Carousel.getInstance(t);t.addEventListener("click",function(){e.next()})})})}]);