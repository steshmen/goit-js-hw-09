!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),u=document.querySelector(".form");u.addEventListener("submit",(function(n){var t=function(n,t){setTimeout((function(){var o,i,u,a;(o=n,i=t,u=Math.random()>.3,a={position:o,delay:i},new Promise((function(e,n){u?e(a):n(a)}))).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}),t)};n.preventDefault();for(var o=Number(u.elements.delay.value),i=Number(u.elements.amount.value),a=Number(u.elements.step.value),l=1,c=o+a;l<=i;l+=1,c+=a)t(l,c)}))}();
//# sourceMappingURL=03-promises.3ccd0ca8.js.map
