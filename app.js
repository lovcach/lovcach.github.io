!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist",t(t.s=5)}([function(e,n,t){var r=t(1);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(2)(!0)).push([e.i,"body{height:100vh;margin:0;padding:0}.loader,.loader::before,.loader::after{border-radius:50%;width:2.5em;height:2.5em;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation:load7 1.8s infinite ease-in-out;animation:load7 1.8s infinite ease-in-out}.loader{color:#ffffff;font-size:10px;margin:80px auto;position:relative;text-indent:-9999em;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-0.16s;animation-delay:-0.16s}.loader::before,.loader::after{content:'';position:absolute;top:0}.loader::before{left:-3.5em;-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.loader::after{left:3.5em}@-webkit-keyframes load7{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em}40%{box-shadow:0 2.5em 0 0}}@keyframes load7{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em}40%{box-shadow:0 2.5em 0 0}}.logo{text-align:center;margin:10vw 0 0 0}.pagination{display:flex;justify-content:center;margin:0 auto;padding:0;text-align:center}.pagination__item{margin:0 20px 0 0;list-style:none}.pagination__item:last-child{margin:0}.pagination__link{display:inline-block;width:30px;height:30px;font-size:18px;line-height:30px;color:#555;text-decoration:none;background-color:gray;border-radius:50%}.pagination__link--active{background-color:#ffffff;border:1px solid #aaa}.pagination__link--disabled{opacity:0.2;cursor:default}.search{display:flex;justify-content:center;margin:0 0 6vh 0;padding:6vh 0 0 0;font-family:Arial,sans-serif}.search__form{display:flex}.search__input{width:50vw;margin:0;padding:10px;font-size:18px;line-height:normal;color:#555;border:1px solid #aaa;border-radius:3px 0 0 3px}.search__button{margin:0;padding:10px 20px;font-size:18px;line-height:normal;color:#555;background-color:#fff;border:1px solid #aaa;border-left:none;border-radius:0 3px 3px 0;cursor:pointer}.search__button:hover{color:#222;background-color:#eee}.card{box-sizing:border-box;padding:10px 15px;height:480px;font-family:Arial,sans-serif;border:1px solid #aaa;border-radius:3px}.card__title{font-size:18px;line-height:normal;color:#555}.card__image{width:100%;height:auto}.card__link{color:inherit;text-decoration:none}.slider{margin:0;padding:0}.slider__screen{position:relative;height:480px;margin:0 0 5vw 0;overflow:hidden}.slider__list{position:absolute;top:0;left:0;z-index:300;display:flex;margin:0;padding:0;will-change:transform;transition:transform 0.5s}.slider__item{width:21.25vw;margin:0 0 0 3vw;list-style:none}.slider__item:nth-child(4n+0){margin:0 3vw 0 3vw}.slider__pagination{margin:60px 0 0 0}@media (max-width: 800px){.slider__item{width:41vw;margin:0 0 0 6vw}.slider__item:nth-child(4n){margin:0}.slider__item:nth-child(2n){margin:0 6vw 0 6vw}}@media (max-width: 600px){.slider__item{width:80vw;margin:0 0 0 10vw}.slider__item:nth-child(2n){margin:0}.slider__item:nth-child(1n){margin:0 10vw 0 10vw}}\n","",{version:3,sources:["D:/rsschool/youtube-client/src/scss/utils/common.scss","D:/rsschool/youtube-client/src/scss/components/logo.scss","D:/rsschool/youtube-client/src/scss/components/pagination.scss","D:/rsschool/youtube-client/src/scss/utils/mixins.scss","D:/rsschool/youtube-client/src/scss/utils/vars.scss","D:/rsschool/youtube-client/src/scss/components/search.scss","D:/rsschool/youtube-client/src/scss/components/card.scss","D:/rsschool/youtube-client/src/scss/components/slider.scss"],names:[],mappings:"AAAA,KACE,YAAa,CACb,QAAS,CACT,SAAU,CACX,uCAKC,iBAAkB,CAClB,WAAY,CACZ,YAAa,CACb,gCAAiC,CACjC,wBAAyB,CACzB,iDAAkD,CAClD,yCAA0C,CAC3C,QAEC,aAAc,CACd,cAAe,CACf,gBAAiB,CACjB,iBAAkB,CAClB,mBAAoB,CACpB,+BAAgC,CAChC,2BAA4B,CAC5B,uBAAwB,CACxB,8BAA+B,CAC/B,sBAAuB,CAVzB,+BAcI,UAAW,CACX,iBAAkB,CAClB,KAAM,CAhBV,gBAoBI,WAAY,CACZ,8BAA+B,CAC/B,sBAAuB,CAtB3B,eA0BI,UAAW,CACZ,yBAID,YAGE,2BAA4B,CAE9B,IACE,sBAAuB,CAAA,CAG3B,iBACE,YAGE,2BAA4B,CAE9B,IACE,sBAAuB,CAAA,CChE3B,MACE,iBAAkB,CAClB,iBAAkB,CACnB,YCFC,YAAa,CACb,sBAAuB,CACvB,aAAc,CACd,SAAU,CACV,iBAAkB,CACnB,kBAGC,iBAAkB,CAClB,eAAgB,CAFlB,6BAII,QAAS,CACV,kBAID,oBAAqB,CACrB,UAAW,CACX,WAAY,CClBA,cCCO,CDAT,gBDmBgC,CClB5B,UCAS,CFmBvB,oBAAqB,CAErB,qBAAsB,CACtB,iBAAkB,CAElB,0BACE,wBAAyB,CACzB,qBErBiB,CFsBlB,4BAGC,WAAY,CACZ,cAAe,CAChB,QGlCD,YAAa,CACb,sBAAuB,CACvB,gBAAiB,CACjB,iBAAkB,CAElB,4BDL2B,CCM5B,cAGC,YAAa,CACd,eAGC,UAAW,CACX,QAAS,CACT,YAAa,CFfD,cEiBa,CFhBf,kBEgBuB,CFfnB,UCAS,CCiBvB,qBDZmB,CCanB,yBAA0B,CAC3B,gBAGC,QAAS,CACT,iBAAkB,CFzBN,cE2Ba,CF1Bf,kBE0BuB,CFzBnB,UCAS,CC2BvB,qBAAsB,CACtB,qBDvBmB,CCwBnB,gBAAiB,CACjB,yBAA0B,CAC1B,cAAe,CAVjB,sBAaI,UD1BkB,CC4BlB,qBDjCoB,CCkCrB,MCvCD,qBAAsB,CACtB,iBAAkB,CAClB,YAAa,CAEb,4BFJ2B,CEM3B,qBFCmB,CEAnB,iBAAkB,CACnB,aHRa,cCCO,CDAT,kBGWkC,CHV9B,UCAS,CEWxB,aAGC,UAAW,CACX,WAAY,CACb,YAGC,aAAc,CACd,oBAAqB,CACtB,QCvBC,QAAS,CACT,SAAU,CACX,gBAEC,iBAAkB,CAClB,YAAa,CACb,gBAAiB,CAEjB,eAAgB,CACjB,cAGC,iBAAkB,CAClB,KAAM,CACN,MAAO,CACP,WAAY,CAEb,YAAa,CACb,QAAS,CACR,SAAU,CAEV,qBAAsB,CACtB,yBAA0B,CAC3B,cAGC,aAAc,CACd,gBAAiB,CAEjB,eAAgB,CAJlB,8BAOI,kBAAmB,CACpB,oBAID,iBAAkB,CACnB,0BAGC,cACE,UAAW,CACX,gBAAiB,CAFnB,4BAKI,QAAS,CALb,4BASI,kBAAmB,CACpB,CAIL,0BACE,cACE,UAAW,CAEX,iBAAkB,CAHpB,4BAMI,QAAS,CANb,4BAUI,oBAAqB,CACtB",file:"main.scss",sourcesContent:["body {\r\n  height: 100vh;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.loader,\r\n.loader::before,\r\n.loader::after {\r\n  border-radius: 50%;\r\n  width: 2.5em;\r\n  height: 2.5em;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n  -webkit-animation: load7 1.8s infinite ease-in-out;\r\n  animation: load7 1.8s infinite ease-in-out;\r\n}\r\n.loader {\r\n  color: #ffffff;\r\n  font-size: 10px;\r\n  margin: 80px auto;\r\n  position: relative;\r\n  text-indent: -9999em;\r\n  -webkit-transform: translateZ(0);\r\n  -ms-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-animation-delay: -0.16s;\r\n  animation-delay: -0.16s;\r\n\r\n  &::before,\r\n  &::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n  }\r\n\r\n  &::before {\r\n    left: -3.5em;\r\n    -webkit-animation-delay: -0.32s;\r\n    animation-delay: -0.32s;\r\n  }\r\n\r\n  &::after {\r\n    left: 3.5em;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes load7 {\r\n  0%,\r\n  80%,\r\n  100% {\r\n    box-shadow: 0 2.5em 0 -1.3em;\r\n  }\r\n  40% {\r\n    box-shadow: 0 2.5em 0 0;\r\n  }\r\n}\r\n@keyframes load7 {\r\n  0%,\r\n  80%,\r\n  100% {\r\n    box-shadow: 0 2.5em 0 -1.3em;\r\n  }\r\n  40% {\r\n    box-shadow: 0 2.5em 0 0;\r\n  }\r\n}\r\n",".logo {\r\n  text-align: center;\r\n  margin: 10vw 0 0 0;\r\n}",".pagination {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  text-align: center;\r\n}\r\n\r\n.pagination__item {\r\n  margin: 0 20px 0 0;\r\n  list-style: none;\r\n  &:last-child {\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n.pagination__link {\r\n  display: inline-block;\r\n  width: 30px;\r\n  height: 30px;\r\n\r\n  @include font-styles($main-font-size, 30px, $main-font-color);\r\n  text-decoration: none;\r\n\r\n  background-color: gray;\r\n  border-radius: 50%;\r\n\r\n  &--active {\r\n    background-color: #ffffff;\r\n    border: 1px solid $gray--light;\r\n  }\r\n\r\n  &--disabled {\r\n    opacity: 0.2;\r\n    cursor: default;\r\n  }\r\n}","@mixin font-styles($size: false, $lh: false, $colour: false, $weight: false) {\r\n  @if $size { font-size: $size; }\r\n  @if $lh { line-height: $lh; }\r\n  @if $colour { color: $colour; }\r\n  @if $weight { font-weight: $weight; }\r\n}","// Font\r\n$main-font: Arial, sans-serif;\r\n$main-font-size: 18px;\r\n$main-font-color: #555555;\r\n\r\n//Сolors\r\n$gary--lightest: #eeeeee;\r\n$gray--lighten: #bbbbbb;\r\n$gray--light: #aaaaaa;\r\n$gray: #808080;\r\n$gray--dark: #555555;\r\n$gray--darken: #222222;\r\n\r\n$color-main: #ffffff;\r\n\r\n$color-red: #1ffc64;\r\n$color-green: #ff6666;\r\n$color-blue: #0066cc;",".search {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 0 0 6vh 0;\r\n  padding: 6vh 0 0 0;\r\n\r\n  font-family: $main-font;\r\n}\r\n\r\n.search__form {\r\n  display: flex;\r\n}\r\n\r\n.search__input {\r\n  width: 50vw;\r\n  margin: 0;\r\n  padding: 10px;\r\n\r\n  @include font-styles(18px, normal, $main-font-color);\r\n\r\n  border: 1px solid $gray--light;\r\n  border-radius: 3px 0 0 3px;\r\n}\r\n\r\n.search__button {\r\n  margin: 0;\r\n  padding: 10px 20px;\r\n  \r\n  @include font-styles(18px, normal, $main-font-color);\r\n\r\n  background-color: #fff;\r\n  border: 1px solid $gray--light;\r\n  border-left: none;\r\n  border-radius: 0 3px 3px 0;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    color: $gray--darken;\r\n\r\n    background-color: $gary--lightest;\r\n  }\r\n}",".card {\r\n  box-sizing: border-box;\r\n  padding: 10px 15px;\r\n  height: 480px;\r\n  \r\n  font-family: $main-font;\r\n\r\n  border: 1px solid $gray--light;\r\n  border-radius: 3px;\r\n}\r\n\r\n.card__title {\r\n  \r\n  @include font-styles($main-font-size, normal, $main-font-color);\r\n}\r\n\r\n.card__image {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.card__link {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}",".slider {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.slider__screen {\r\n  position: relative;\r\n  height: 480px;\r\n  margin: 0 0 5vw 0;\r\n\r\n  overflow: hidden;\r\n}\r\n\r\n.slider__list {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 300;\r\n\r\n\tdisplay: flex;\r\n\tmargin: 0;\r\n  padding: 0;\r\n\r\n  will-change: transform;\r\n  transition: transform 0.5s;\r\n}\r\n\r\n.slider__item {\r\n  width: 21.25vw;\r\n  margin: 0 0 0 3vw;\r\n\r\n  list-style: none;\r\n\r\n  &:nth-child(4n + 0) {\r\n    margin: 0 3vw 0 3vw;\r\n  }\r\n}\r\n\r\n.slider__pagination {\r\n  margin: 60px 0 0 0;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .slider__item {\r\n    width: 41vw;\r\n    margin: 0 0 0 6vw;\r\n  \r\n    &:nth-child(4n) {\r\n      margin: 0;\r\n    }\r\n\r\n    &:nth-child(2n) {\r\n      margin: 0 6vw 0 6vw;\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .slider__item {\r\n    width: 80vw;\r\n\r\n    margin: 0 0 0 10vw;\r\n\r\n    &:nth-child(2n) {\r\n      margin: 0;\r\n    }\r\n\r\n    &:nth-child(1n) {\r\n      margin: 0 10vw 0 10vw;\r\n    }\r\n    \r\n  }\r\n}"]}])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),s=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(s).concat([i]).join("\n")}var o;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(i=0;i<e.length;i++){var o=e[i];null!=o[0]&&r[o[0]]||(t&&!o[2]?o[2]=t:t&&(o[2]="("+o[2]+") and ("+t+")"),n.push(o))}},n}},function(e,n,t){var r,i,s={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),l=null,c=0,d=[],h=t(4);function u(e,n){for(var t=0;t<e.length;t++){var r=e[t],i=s[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(C(r.parts[o],n))}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(C(r.parts[o],n));s[r.id]={id:r.id,refs:1,parts:a}}}}function p(e,n){for(var t=[],r={},i=0;i<e.length;i++){var s=e[i],o=n.base?s[0]+n.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};r[o]?r[o].parts.push(a):t.push(r[o]={id:o,parts:[a]})}return t}function A(e,n){var t=a(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),d.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(e.insertAt.before,t);t.insertBefore(n,i)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=d.indexOf(e);n>=0&&d.splice(n,1)}function m(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return g(n,e.attrs),A(e,n),n}function g(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function C(e,n){var t,r,i,s;if(n.transform&&e.css){if(!(s="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=s}if(n.singleton){var o=c++;t=l||(l=m(n)),r=b.bind(null,t,o,!1),i=b.bind(null,t,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(n,e.attrs),A(e,n),n}(n),r=function(e,n,t){var r=t.css,i=t.sourceMap,s=void 0===n.convertToAbsoluteUrls&&i;(n.convertToAbsoluteUrls||s)&&(r=h(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}.bind(null,t,n),i=function(){f(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){f(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=p(e,n);return u(t,n),function(e){for(var r=[],i=0;i<t.length;i++){var o=t[i];(a=s[o.id]).refs--,r.push(a)}e&&u(p(e,n),n);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete s[a.id]}}}};var B,v=(B=[],function(e,n){return B[e]=n,B.filter(Boolean).join("\n")});function b(e,n,t,r){var i=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(n,i);else{var s=document.createTextNode(i),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(s,o[n]):e.appendChild(s)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var i,s=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(i=0===s.indexOf("//")?s:0===s.indexOf("/")?t+s:r+s.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,n,t){"use strict";t.r(n);class r{constructor(){this.url="https://www.googleapis.com/youtube/v3/",this.key="AIzaSyAwDr2EjWyqadRot5pc1prM3glYpQg2VKQ",this.maxResults=15}get(e){return new Promise(n=>{setTimeout(()=>{n("js"===e?fetch("data.json"):fetch("./data/data.json"))},400)})}search(e,n=null,t=15){const r=n?`&pageToken=${n}`:"";this.url,this.key}}class i{constructor(e){this.clip=e}render(){const{publishedAt:e,channelTitle:n,description:t,title:r,thumbnails:{medium:i}}=this.clip.snippet,{id:{videoId:s}}=this.clip,o=`\n        <h2 class="card__title">\n          <a class="card__link" href="https://www.youtube.com/watch?v=${s}">\n            ${r}\n          </a>\n        </h2>\n        <a class="card__link" href="https://www.youtube.com/watch?v=${s}">\n          <img class="card__image" src="${i.url}" alt=""/>\n        </a>\n        <p class="card__author">${n}</p>\n        <p class="card__date">${e}</p>\n        <p class="card__view">10000</p>\n        <p class="card__description">\n          ${t}\n        </p>`,a=document.createElement("article");return a.classList.add("card"),a.innerHTML=o,a}}window.customElements.define("slider-pagination",class extends HTMLElement{constructor(){super(),this.currenPage=null,this.prevIsActve=!1,this.prevBeforeIsActive=!1}static get observedAttributes(){return["position"]}get position(){return this.getAttribute("position")}attributeChangedCallback(e,n,t){this.currenPage&&(this.currenPage.innerHTML=t),t>1&&!1===this.prevIsActve?(this.prevIsActve=!0,this.prev.classList.remove("pagination__link--disabled")):t<2&&!0===this.prevIsActve&&(this.prevIsActve=!1,this.prev.classList.add("pagination__link--disabled")),t>2&&!1===this.prevBeforeIsActive?(this.prevBeforeIsActive=!0,this.prevBefore.classList.remove("pagination__link--disabled")):t<3&&!0===this.prevBeforeIsActive&&(this.prevBeforeIsActive=!1,this.prevBefore.classList.add("pagination__link--disabled"))}onClick(e){e.preventDefault();const n=e.target;if("A"===n.nodeName){const e=n.id,t={"prev-before":-2,prev:-1,current:0,next:1};this.changePage(t[e])}}connectedCallback(){this.addEventListener("click",this.onClick);const e=`\n      <ul class="pagination">\n        <li class="pagination__item">\n          <a class="pagination__link pagination__link--disabled" href="#" id="prev-before"></a>\n        </li>\n        <li class="pagination__item">\n          <a class="pagination__link pagination__link--disabled" href="#" id="prev"></a>\n        </li>\n        <li class="pagination__item">\n          <a class="pagination__link pagination__link--active" href="#" id="current">\n            ${this.position}\n          </a>\n        </li>\n        <li class="pagination__item">\n          <a class="pagination__link" href="#" id="next"></a>\n        </li>\n      </ul>\n      `;this.innerHTML=e,this.addEventListener("click",this.onClick),this.currenPage=this.querySelector("#current"),this.prev=this.querySelector("#prev"),this.prevBefore=this.querySelector("#prev-before")}});class s{constructor(){this.dataStorage=new r,this.query=null,this.pageToken=null,this.clips=[],this.clipsPerPage=4,this.currentPage=0,this.offsetStep=null,this.element=document.createElement("div"),this.list=null,this.onFlippStart=this.onFlippStart.bind(this),this.shiftList=this.shiftList.bind(this)}get offsetList(){return-this.currentPage*this.offsetStep}get indexLastClip(){return this.currentPage*this.clipsPerPage}change(e){this.query=e}reset(){this.pageToken=null,this.clips=[],this.currentPage=0,this.list=null,this.offset=0}static getClipsPerPage(e){return e<800&&e>600?2:e<600?1:4}changeCurrentPage(e){this.currentPage+e>=0&&(this.currentPage+=e)}changePage(){this.pag.setAttribute("position",this.currentPage+1)}shiftList(e){this.changeCurrentPage(e),this.list.style.transform=`translateX(${-this.currentPage*this.offsetStep}px)`,this.addClips(),this.changePage()}addClips(){this.clips.length-3*this.clipsPerPage<this.indexLastClip&&this.renderClips()}renderClips(){this.dataStorage.get(this.query,this.pageToken).then(e=>e.json()).then(e=>{this.clips=this.clips.concat(e.items),this.pageToken=e.nextPageToken;const n=document.createDocumentFragment(),t=document.createElement("li");t.classList.add("slider__item"),e.items.forEach(e=>{const r=t.cloneNode(!0);r.appendChild(new i(e).render()),n.appendChild(r)}),this.list.appendChild(n)})}onFlippStart(e){const n=e.target;e.preventDefault();const t=e=>{e.preventDefault()},r=e.pageX?e.pageX:e.changedTouches[0].screenX;this.list.ondragstart=(()=>!1);const i=this.list.getBoundingClientRect(),s=i.left,o=i.width,a=this.element.getBoundingClientRect().width;this.offsetStep=a;const l=r-s;this.list.style.transitionDuration="0s";const c=e=>{const n=(e.pageX?e.pageX:e.changedTouches[0].screenX)-l;n<=100&&n>=-o-100&&(this.list.style.transform=`translateX(${n}px)`)},d=i=>{i.preventDefault(),this.list.style.transitionDuration="0.5s";const s=i.pageX?i.pageX:i.changedTouches[0].screenX;r-s>100?this.shiftList(1):r-s<-100&&this.shiftList(-1),(e=>{("A"===n.nodeName||"IMG"===n.nodeName)&&Math.abs(e)>10&&n.addEventListener("click",t)})(r-s),this.list.style.transform=`translateX(${this.offsetList}px)`,document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",d),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",d),setTimeout(()=>{e.target.removeEventListener("click",t)},0)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",d),document.addEventListener("touchmove",c),document.addEventListener("touchend",d)}render(){this.reset();const e=()=>(this.pag=document.createElement("slider-pagination"),this.pag.changePage=this.shiftList,this.pag.setAttribute("position","1"),this.pag);this.query?(this.element.innerHTML='\n      <div class="slider">\n        <div class="slider__screen">\n          <ul class="slider__list"></ul>\n        </div>\n      </div>\n    ',this.offsetStep=this.element.getBoundingClientRect().width,this.clipsPerPage=s.getClipsPerPage(this.offsetStep),this.element.appendChild(e()),this.list=this.element.querySelector(".slider__list"),this.list.addEventListener("mousedown",this.onFlippStart),this.list.addEventListener("touchstart",this.onFlippStart),this.renderClips()):this.element.appendChild((()=>{const e=document.createElement("div");e.classList.add("logo");const n=document.createElement("img");return n.classList.add("logo__image"),n.setAttribute("src","./youtube-logo.png"),e.appendChild(n),e})());return window.addEventListener("resize",()=>{if(!this.list)return;this.offsetStep=this.element.getBoundingClientRect().width;const e=s.getClipsPerPage(this.offsetStep);this.clipsPerPage!==e&&(this.currentPage=Math.floor(this.clipsPerPage/e*this.currentPage),this.clipsPerPage=e),this.list.style.transform=`translateX(${-this.currentPage*this.offsetStep}px)`,this.changePage()}),this.element}}class o{constructor(e){this.element=document.createElement("div"),this.onSubmit=this.onSubmit.bind(this),this.onSearch=e}onSubmit(e){e.preventDefault();const n=e.target.querySelector(".search__input").value;this.onSearch(n)}render(){return this.element.classList.add("search"),this.element.innerHTML='\n      <form class="search__form" autocomplete="off">\n        <input class="search__input" type="text" name="search" placeholder="Введите запрос"/>\n        <button class="search__button" type="submit">Поиск</button>\n      </form>\n    ',this.element.addEventListener("submit",this.onSubmit),this.element}}const a=new class{constructor(){this.dataStorage=new r,this.query=null,this.onSearch=this.onSearch.bind(this)}onSearch(e){e&&e.length>=2&&(this.query=e,this.slider.change(e),this.slider.render())}render(){this.search=new o(this.onSearch),this.slider=new s;const e=document.createElement("div");return e.classList.add("app"),e.appendChild(this.search.render()),e.appendChild(this.slider.render()),e}};document.body.appendChild(a.render());t(0)}]);