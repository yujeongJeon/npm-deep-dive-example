/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(r){return setTimeout(r,t)}))};function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function e(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==r(e)?e:e+""}function o(t){var r="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(r){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return function(t,r,e){if(i())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,r);var o=new(t.bind.apply(t,n));return e&&c(o,e.prototype),o}(t,arguments,a(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),c(e,t)},o(t)}function i(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(i=function(){return!!t})()}function c(t,r){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},c(t,r)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}const u=function(t){function n(t){var e,o=t.message,c=t.errorCode,u=t.stack;return function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),(e=function(t,e,n){return e=a(e),function(t,e){if(e&&("object"==r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,i()?Reflect.construct(e,n||[],a(t).constructor):e.apply(t,n))}(this,n,[o])).errorCode=c,e.stack=u,e}return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&c(t,r)}(n,t),o=n,(u=[{key:"log",value:function(){console.error("errorCode: ".concat(this.errorCode,", %o"),this.stack.join("\n"))}}])&&e(o.prototype,u),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,u}(o(Error));function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function l(){l=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var i=r&&r.prototype instanceof b?r:b,c=Object.create(i.prototype),a=new N(n||[]);return o(c,"_invoke",{value:P(t,e,a)}),c}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",m="completed",g={};function b(){}function w(){}function E(){}var O={};s(O,c,(function(){return this}));var x=Object.getPrototypeOf,j=x&&x(x(C([])));j&&j!==e&&n.call(j,c)&&(O=j);var L=E.prototype=b.prototype=Object.create(O);function _(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function S(t,r){function e(o,i,c,a){var u=p(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==f(s)&&n.call(s,"__await")?r.resolve(s.__await).then((function(t){e("next",t,c,a)}),(function(t){e("throw",t,c,a)})):r.resolve(s).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,a)}))}a(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function P(r,e,n){var o=y;return function(i,c){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===i)throw c;return{value:t,done:!0}}for(n.method=i,n.arg=c;;){var a=n.delegate;if(a){var u=k(a,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var f=p(r,e,n);if("normal"===f.type){if(o=n.done?m:v,f.arg===g)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(o=m,n.method="throw",n.arg=f.arg)}}}function k(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var c=i.arg;return c?c.done?(e[r.resultName]=c.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function T(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function C(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(f(r)+" is not iterable")}return w.prototype=E,o(L,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:w,configurable:!0}),w.displayName=s(E,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},_(S.prototype),s(S.prototype,a,(function(){return this})),r.AsyncIterator=S,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var c=new S(h(t,e,n,o),i);return r.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},_(L),s(L,u,"Generator"),s(L,c,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=C,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return a.type="throw",a.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),f=n.call(c,"finallyLoc");if(u&&f){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!f)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(c)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:C(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}function s(t,r,e,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void e(t)}a.done?r(u):Promise.resolve(u).then(n,o)}function h(){var r;return r=l().mark((function r(){return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(1+2),r.next=3,t(3e3);case 3:new u({message:"This is Custom Error",errorCode:"500",stack:[]}).log();case 5:case"end":return r.stop()}}),r)})),h=function(){var t=this,e=arguments;return new Promise((function(n,o){var i=r.apply(t,e);function c(t){s(i,n,o,c,a,"next",t)}function a(t){s(i,n,o,c,a,"throw",t)}c(void 0)}))},h.apply(this,arguments)}!function(){h.apply(this,arguments)}()})();