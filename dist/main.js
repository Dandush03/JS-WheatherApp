!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),i=n(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},a=(r(i,o),i.locals?i.locals:{});e.exports=a},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],d=t.base?o[0]+t.base:o[0],l=n[d]||0,s="".concat(d," ").concat(l);n[d]=l+1;var u=c(s),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:s,updater:g(p,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function g(e,t){var n,r,i;if(t.singleton){var o=h++;n=m||(m=l(t)),r=p.bind(null,n,o,!1),i=p.bind(null,n,o,!0)}else n=l(t),r=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=c(n[r]);a[i].references--}for(var o=d(e,t),l=0;l<n.length;l++){var s=c(n[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=o}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,'*{box-sizing:border-box}body{background-image:url("https://data.whicdn.com/images/311386781/original.gif");background-position:center;background-repeat:no-repeat;background-size:cover;display:flex;height:100vh;justify-content:center;margin:auto;overflow:hidden;padding:0}body main{align-self:center;max-width:370px}.switch{display:inline-block;height:24px;position:relative;width:50px}.switch input{height:0;opacity:0;width:0}.slider{background-color:#2196f3;bottom:0;color:#fff;cursor:pointer;left:0;position:absolute;right:0;top:0;transition:.4s}.slider::before{background-color:#fff;bottom:4px;content:"";height:16px;left:4px;position:absolute;transition:.4s;width:16px}.slider.round{border-radius:34px}.slider.round::before{border-radius:50%}.slider::after{content:"F°";display:block;font-family:Verdana,sans-serif;font-size:10px;left:70%;position:absolute;top:50%;transform:translate(-50%, -50%)}input:focus+.slider{box-shadow:0 0 1px #2196f3}input:checked+.slider{background-color:#2196f3}input:checked+.slider::before{transform:translateX(26px)}input:checked+.slider::after{content:"C°";left:35%}form{margin:auto;padding:25px;width:80%}form .btn-container{display:flex;justify-content:space-between}form>:first-child{margin-bottom:10px}form>:first-child input{width:100%}.main-info,.sub-info{background-color:rgba(255,255,255,.486);border:1px solid #5d5d5d;display:flex;padding:20px}.main-info{border-top-left-radius:10px;border-top-right-radius:10px;justify-content:space-between;position:relative;text-transform:capitalize}.main-info>:last-child{align-self:center;display:flex;flex-direction:column;justify-content:center;margin-left:25px}.main-info img{margin:auto}.sub-info{border-bottom-left-radius:10px;border-bottom-right-radius:10px;flex-wrap:wrap;margin-top:-1px}.sub-info p{width:50%}.sub-info p:nth-child(even){text-align:right}.err{background-color:#ff0;color:red;left:0;margin:auto;position:absolute;text-align:center;top:-60px;width:100%}',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,c,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){"use strict";n.r(t);const r=async(e,t)=>{const n=`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=${t}&appid=37f12aac41f12be0ef05427d581ffce8`;let r;try{r=await fetch(n,{mode:"cors"})}catch(e){r=e}const i=await r.json();i.unit=t,localStorage.setItem("data",JSON.stringify(i)),location.reload()};function i(){const e=document.getElementById("city");let t;t=!0===document.getElementById("degrees").checked?"Metric":"Imperial",""!==e.value&&r(e.value,t)}function o(){const e=JSON.parse(localStorage.getItem("data")),{name:t}=e;let n;n=!0===document.getElementById("degrees").checked?"Metric":"Imperial",r(t,n)}n(0);window.onload=()=>{const e=JSON.parse(localStorage.getItem("data")),t=(()=>{const e=JSON.parse(localStorage.getItem("data")),t=document.createElement("main"),n=document.createElement("div"),r=document.createElement("form"),a=document.createElement("label"),c=document.createElement("div");a.className="switch";const d=document.createElement("input");d.type="checkbox",d.id="degrees","Metric"===e.unit&&(d.checked=!0),d.onchange=o;const l=document.createElement("span");l.className="slider round",a.appendChild(d),a.appendChild(l),c.appendChild(a);const s=document.createElement("div"),u=document.createElement("input");u.id="city",u.type="text",u.placeholder="City",s.appendChild(u);const p=document.createElement("div"),f=document.createElement("button");f.name="submit",f.innerText="Search",p.appendChild(f);const m=document.createElement("div");return m.className="btn-container",m.appendChild(p),m.appendChild(c),r.appendChild(s),r.appendChild(m),r.onsubmit=i,n.appendChild(r),t.appendChild(n),t})();t.insertBefore((e=>{const{main:t,name:n,sys:r,weather:i,cod:o,wind:a,unit:c}=e,d=(e=>{let t,n;return"Imperial"===e?(n="F°",t="Mi/h"):(n="C°",t="Km/h"),{speed:t,degrees:n}})(c),l=document.createElement("div"),s=document.createElement("div");s.className="main-info";const u=document.createElement("div");u.className="sub-info";const p=document.createElement("div"),f=document.createElement("div"),m=document.createElement("p"),h=document.createElement("h2"),g=document.createElement("p");p.appendChild(m),p.appendChild(h),p.appendChild(g);const b=document.createElement("img"),x=document.createElement("p");f.appendChild(b),f.appendChild(x),s.appendChild(p),s.appendChild(f);const v=document.createElement("p"),y=document.createElement("p"),C=document.createElement("p"),w=document.createElement("p");return u.appendChild(v),u.appendChild(y),u.appendChild(C),u.appendChild(w),l.appendChild(s),l.appendChild(u),200===o?(m.innerText=`${n}, ${r.country}`,h.innerText=`${t.temp} ${d.degrees}`,g.innerText=`Feels Like ${t.feels_like} ${d.degrees}`,b.src=`http://openweathermap.org/img/wn/${i[0].icon}.png`,x.innerText=""+i[0].description,v.innerText=`Minimum: ${t.temp_min} ${d.degrees}`,y.innerText=`Maximum: ${t.temp_max} ${d.degrees}`,C.innerText=`Humidity: ${t.humidity}%`,w.innerText=`Wind: ${a.speed} ${d.speed}`):(m.innerText="Sorry We Didn't Find The City You're Looking For",m.className="err",h.innerText="-- --",g.innerText="Feels Like -- --",x.innerText="---- ----",v.innerText="Minimum: -- --",y.innerText="Maximum: -- --",C.innerText="Humidity: -- --",w.innerText="Wind: -- --"),l})(e),t.childNodes[0]),document.body.appendChild(t)}}]);