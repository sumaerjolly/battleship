!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var r=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(e.i,o,i),o.locals?o.locals:{});e.exports=a},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a={};function u(e,n,t){for(var r=0;r<n.length;r++){var o={css:n[r][1],media:n[r][2],sourceMap:n[r][3]};a[e][r]?a[e][r](o):a[e].push(v(o,t))}}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function p(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function s(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function v(e,n){var t,r,o;if(n.singleton){var i=h++;t=f||(f=c(n)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=c(n),r=s.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o()),e=t.base?e+t.base:e,n=n||[],a[e]||(a[e]=[]),u(e,n,t),function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){a[e]||(a[e]=[]),u(e,n,t);for(var r=n.length;r<a[e].length;r++)a[e][r]();a[e].length=n.length,0===a[e].length&&delete a[e]}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,".col-1 {\n  border: 1px solid black;\n  background-color: rgb(118, 199, 226);\n  border-radius: 5px;\n  height: 45px;\n}\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,u,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r=0;r<e.length;r++){var o=[].concat(e[r]);t&&(o[2]?o[2]="".concat(t," and ").concat(o[2]):o[2]=t),n.push(o)}},n}},function(e,n,t){"use strict";t.r(n);t(0);var r=e=>{const n=[];return{length:e,position:n,hit:t=>{!n.includes(t)&&n.length<e&&n.push(t)},isSunk:()=>n.length===e}};var o=e=>{document.querySelectorAll(".ships").forEach((n,t)=>{t===e&&(n.style.backgroundColor="#000",n.style.border="1px solid #111",n.style.borderRadius="0px")})};var i=()=>{let e=new Array(100),n=new Array(100);return{addMyShip:(n,t,r)=>{if(((n,t,r)=>{if("h"===r&&10-t%10<n.length)return!1;if("v"===r&&10-Math.floor(t/10)<n.length)return!1;for(let o=0;o<n.length;o+=1){if("v"===r&&e[t+10*o])return!1;if("h"===r&&e[t+1*o])return!1}return!0})(n,t,r))for(let i=0;i<n.length;i+=1)"v"===r&&(e[t+10*i]=n,o(t+10*i)),"h"===r&&(e[t+1*i]=n,o(t+1*i))},addOpponentShip:(e,t,r)=>{if(((e,t,r)=>{if("h"===r&&10-t%10<e.length)return!1;if("v"===r&&10-Math.floor(t/10)<e.length)return!1;for(let o=0;o<e.length;o+=1){if("v"===r&&n[t+10*o])return!1;if("h"===r&&n[t+1*o])return!1}return!0})(e,t,r))for(let o=0;o<e.length;o+=1)"v"===r&&(n[t+10*o]=e),"h"===r&&(n[t+1*o]=e)},receiveAttacks:(e,n)=>e[n]?"x"!==e[n]&&("-"!==e[n]&&"x"!==e[n]?(e[n].hit(n),e[n]="x",!0):void 0):(e[n]="-",!1),myBoard:e,oppBoard:n,resetBoard:()=>{e=new Array(100),n=new Array(100)},allSunk:e=>e.every(e=>{})}};var a=e=>({name:e,randomMove:()=>Math.floor(100*Math.random())});var u=(()=>{const e=i();a("user"),a("computer");return{board:e}})();var c=(()=>{const e=u.board;return console.log(e.myBoard),console.log(e.oppBoard),{myFleet:()=>{e.addMyShip(r(4),45,"v"),e.addMyShip(r(3),50,"v"),e.addMyShip(r(3),14,"h"),e.addMyShip(r(2),32,"v"),e.addMyShip(r(2),38,"v"),e.addMyShip(r(2),68,"h"),e.addMyShip(r(1),1,"v"),e.addMyShip(r(1),9,"v"),e.addMyShip(r(1),89,"v"),e.addMyShip(r(1),97,"v")},opponentFleet:()=>{e.addOpponentShip(r(4),12,"h"),e.addOpponentShip(r(3),70,"v"),e.addOpponentShip(r(3),82,"h"),e.addOpponentShip(r(2),43,"v"),e.addOpponentShip(r(2),28,"v"),e.addOpponentShip(r(2),68,"h"),e.addOpponentShip(r(1),35,"v"),e.addOpponentShip(r(1),7,"v"),e.addOpponentShip(r(1),75,"v"),e.addOpponentShip(r(1),97,"v")}}})();c.myFleet(),c.opponentFleet()}]);