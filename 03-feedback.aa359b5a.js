!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.constructor===Symbol?"symbol":typeof e}var o="Expected a function",i=NaN,f="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,v=s||m||Function("return this")(),b=Object.prototype.toString,g=Math.max,p=Math.min,y=function(){return v.Date.now()};function S(e,t,n){var r,i,f,a,u,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function v(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function b(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=f}function S(){var e=y();if(b(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-c);return s?p(n,f-(e-l)):n}(e))}function h(e){return u=void 0,m&&r?v(e):(r=i=void 0,a)}function w(){var e=y(),n=b(e);if(r=arguments,i=this,c=e,n){if(void 0===u)return function(e){return l=e,u=setTimeout(S,t),d?v(e):a}(c);if(s)return u=setTimeout(S,t),v(c)}return void 0===u&&(u=setTimeout(S,t)),a}return t=T(t)||0,j(n)&&(d=!!n.leading,f=(s="maxWait"in n)?g(T(n.maxWait)||0,t):f,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},w.flush=function(){return void 0===u?a:h(y())},w}function j(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":r(e))||function(e){return!!e&&"object"==typeof e}(e)&&b.call(e)==f}(e))return i;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=c.test(e);return n||l.test(e)?d(e.slice(2),n?2:8):u.test(e)?i:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return j(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),S(e,t,{leading:r,maxWait:t,trailing:i})};var h={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input "),message:document.querySelector(".feedback-form textarea")};h.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),h.form.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(w))}),500));var w={};!function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);h.email.value=t.email,h.message.textContent=t.message}}()}();
//# sourceMappingURL=03-feedback.aa359b5a.js.map
