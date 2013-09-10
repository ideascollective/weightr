/*!
 * JavaScript Debug - v0.4 - 6/22/2010
 * http://benalman.com/projects/javascript-debug-console-log/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 *
 * With lots of help from Paul Irish!
 * http://paulirish.com/
 */

// Script: JavaScript Debug: A simple wrapper for console.log
//
// *Version: 0.4, Last Updated: 6/22/2010*
//
// Tested with Internet Explorer 6-8, Firefox 3-3.6, Safari 3-4, Chrome 3-5, Opera 9.6-10.5
//
// Home       - http://benalman.com/projects/javascript-debug-console-log/
// GitHub     - http://github.com/cowboy/javascript-debug/
// Source     - http://github.com/cowboy/javascript-debug/raw/master/ba-debug.js
// (Minified) - http://github.com/cowboy/javascript-debug/raw/master/ba-debug.min.js (1.1kb)
//
// About: License
//
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
//
// About: Support and Testing
//
// Information about what browsers this code has been tested in.
//
// Browsers Tested - Internet Explorer 6-8, Firefox 3-3.6, Safari 3-4, Chrome
// 3-5, Opera 9.6-10.5
//
// About: Examples
//
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
//
// Examples - http://benalman.com/code/projects/javascript-debug/examples/debug/
//
// About: Revision History
//
// 0.4 - (6/22/2010) Added missing passthrough methods: exception,
//       groupCollapsed, table
// 0.3 - (6/8/2009) Initial release
//
// Topic: Pass-through console methods
//
// assert, clear, count, dir, dirxml, exception, group, groupCollapsed,
// groupEnd, profile, profileEnd, table, time, timeEnd, trace
//
// These console methods are passed through (but only if both the console and
// the method exists), so use them without fear of reprisal. Note that these
// methods will not be passed through if the logging level is set to 0 via
// <debug.setLevel>.

window.debug=function(){function c(t){i&&(s||!n||!n.log)&&i.apply(e,t)}function h(e){return o>0?o>e:u.length+o<=e}var e=this,t=Array.prototype.slice,n=e.console,r={},i,s,o=9,u=["error","warn","info","debug","log"],a="assert clear count dir dirxml exception group groupCollapsed groupEnd profile profileEnd table time timeEnd trace".split(" "),f=a.length,l=[];while(--f>=0)(function(e){r[e]=function(){o!==0&&n&&n[e]&&n[e].apply(n,arguments)}})(a[f]);f=u.length;while(--f>=0)(function(i,s){r[s]=function(){var r=t.call(arguments),o=[s].concat(r);l.push(o),c(o);if(!n||!h(i))return;n.firebug?n[s].apply(e,r):n[s]?n[s](r):n.log(r)}})(f,u[f]);return r.setLevel=function(e){o=typeof e=="number"?e:9},r.setCallback=function(){var e=t.call(arguments),n=l.length,r=n;i=e.shift()||null,s=typeof e[0]=="boolean"?e.shift():!1,r-=typeof e[0]=="number"?e.shift():n;while(r<n)c(l[r++])},r}();