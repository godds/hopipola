// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// walkway
!function(t,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n():t.Walkway=n()}(this,function(){"use strict";function t(t){var n=["path","line","polyline"],e=n.reduce(function(n,e){return n+t+" "+e+", "},"");return e.slice(0,-2)}function n(t){return this instanceof n?("string"==typeof t&&(t={selector:t}),t.selector?(this.opts=t,this.selector=t.selector,this.duration=t.duration||500,this.easing=c[t.easing]||c.easeInOutCubic,this.paths=this.getPaths(),this.setInitialStyles(),void(this.id=!1)):this.error("A selector needs to be specified")):new n(t)}function e(t){t.animationStarted||(t.animationStart=Date.now(),t.animationStarted=!0);var n=t.easing((Date.now()-t.animationStart)/t.duration),e=Math.ceil(t.length*(1-n));return t.el.style.strokeDashoffset=0>e?0:Math.abs(e),n>=1?!0:!1}function i(t,n,e){this.el=t,this.length=t.getTotalLength(),this.duration=n,this.easing=e,this.animationStart=null,this.animationStarted=!1}function a(t,n,e){this.el=t,this.length=s(t),this.duration=n,this.easing=e,this.animationStart=null,this.animationStarted=!1}function r(t,n,e){this.el=t,this.length=o(t),this.duration=n,this.easing=e,this.animationStart=null,this.animationStarted=!1}function o(t){for(var n,e,i,a,r=0,o=1;o<t.points.numberOfItems;o++)n=t.points.getItem(o-1).x,e=t.points.getItem(o).x,i=t.points.getItem(o-1).y,a=t.points.getItem(o).y,r+=Math.sqrt(Math.pow(n-e,2)+Math.pow(i-a,2));return r}function s(t){var n=t.getAttribute("x1"),e=t.getAttribute("x2"),i=t.getAttribute("y1"),a=t.getAttribute("y2");return Math.sqrt(Math.pow(n-e,2)+Math.pow(i-a,2))}var u=0;window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame,window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var n=(new Date).getTime(),e=Math.max(0,16-(n-u)),i=window.setTimeout(function(){t(n+e)},e);return u=n+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var c={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return.5>t?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return.5>t?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t}};return n.prototype.error=function(t){console.log("Walkway error: "+t)},n.prototype.getPaths=function(){var n=this,e=t(this.selector),o=document.querySelectorAll(e);return o=Array.prototype.slice.call(o),o.map(function(t){return"path"===t.tagName?new i(t,n.duration,n.easing):"line"===t.tagName?new a(t,n.duration,n.easing):"polyline"===t.tagName?new r(t,n.duration,n.easing):void 0})},n.prototype.setInitialStyles=function(){this.paths.forEach(function(t){t.el.style.strokeDasharray=t.length+" "+t.length,t.el.style.strokeDashoffset=t.length})},n.prototype.draw=function(t){var n,e=this.paths.length;if(0===e)return t&&"function"==typeof t&&t(),window.cancelAnimationFrame(this.id);for(;e--;){n=this.paths[e];var i=n.update();i&&this.paths.splice(e,1)}this.id=window.requestAnimationFrame(this.draw.bind(this,t))},i.prototype.update=function(){return e(this)},a.prototype.update=function(){return e(this)},r.prototype.update=function(){return e(this)},n});
