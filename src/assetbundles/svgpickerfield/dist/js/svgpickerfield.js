!function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=155)}({155:function(e,t){var i=function(e){var t=(e.id,e.name,e.namespace),i=(e.prefix,e.svgs),n=e.value;$("#"+t).selectize({valueField:"id",labelField:"id",searchField:"id",options:i,render:{option:function(e,t){return'<div style="display:flex;align-items:center;"><svg style="height:24px" viewBox="'+e.viewBox+'">'+e.symbol+'</svg><span style="padding-left:10px;">'+e.id+"</span></div>"},item:function(e,t){return'<div style="display:flex;align-items:center;"><svg style="height:24px" viewBox="'+e.viewBox+'">'+e.symbol+'</svg><span style="padding-left:10px;">'+e.id+"</span></div>"}}})[0].selectize.setValue(n)};window.initSvgPicker=i}});
//# sourceMappingURL=svgpickerfield.js.map