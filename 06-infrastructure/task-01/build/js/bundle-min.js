!function(e){function t(n){if(r[n])return r[n].exports;var u=r[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),u=r(2);document.querySelector("#form").addEventListener("submit",e=>{e.preventDefault();let t=document.querySelector("#first-number"),r=document.querySelector("#second-number"),o=Object(n.a)(t.value,r.value),c=Object(u.a)(t.value,r.value);document.querySelector("#concated-string").innerHTML="Result string: "+c,document.querySelector("#sum").innerHTML="Sum: "+o})},function(e,t,r){"use strict";t.a=((...e)=>e.reduce((e,t)=>e+parseInt(t,10),0))},function(e,t,r){"use strict";t.a=((...e)=>e.reduce((e,t)=>e+t,""))}]);