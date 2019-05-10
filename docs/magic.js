(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function b(a){return l(a)||c(a)||j()}function c(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function e(a,b){if(a==null)return{};var c=f(a,b);var d,e;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(e=0;e<g.length;e++)d=g[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function f(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function g(a,b){return l(a)||k(a,b)||j()}function j(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function k(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function l(a){if(Array.isArray(a))return a}function m(a){for(var b=1;b<arguments.length;b++){var c=arguments[b]==null?{}:arguments[b];var d=Object.keys(c);typeof Object.getOwnPropertySymbols==="function"&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){n(a,b,c[b])})}return a}function n(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function o(a){return o=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function o(a){return typeof a}:function o(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o(a)}var q=require("hyperapp"),r=q.app,s=q.h;var h=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===o(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),s(a,b,d)}};var t=function Page(a){return function(b,c){return S({"class":"Wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&c.go&&window.addEventListener("popstate",c.go)}},[R,S({"class":"Page"},a?a(b,c):"404 - not found"),Q])}};var u=function LibraryList(a){return E(m({org:"magic-libraries",header:[L({to:"https://magic-libraries.github.io"},"@magic-libraries")],desc:["below is a collection of the available @magic client libraries."],items:[{name:"json",description:["the @magic-libraries/json module parses and stringifies json."," it also returns errors instead of throwing them."]},{name:"is",description:"the @magic-libraries/is module unifies the javascript type testing apis."},{name:"uri",description:["the @magic-libraries/uri module "," encodes objects to uri strings and decodes uri strings to objects."]}]},a))};var v=function Pre(a){var b=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(c,d){return S({"class":"Pre ".concat(b||c.pre.theme)},[S({"class":"menu"},[!b&&z({onclick:d.pre.changeTheme},c.pre.theme==="dark"?"light":"dark"),z({onclick:function onclick(){return d.pre.clip(a)}},"copy")]),y(LIB.PRE.format(a))])}};var w=h("h1");var x=h("code");var y=h("pre");var z=h("button");var A=function GitBadges(a){if(typeof a==="string")a={project:a};else if(!a.project)return;var b=a,c=b.project,d=c!==void 0&&c,e=b.branch,f=e===void 0?"master":e,h=b.host,j=h===void 0?"github":h;var k=[["npm",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(f)}}],["appveyor",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;if(a){var b=a.split("/"),c=g(b,2),e=c[0],h=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(h,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(h,"/").concat(f,".svg")}}}],["coveralls",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return{to:"https://coveralls.io/".concat(j,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(j,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(j,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=g(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return k.length?i({"class":"GitBadges"},k.map(function(a){var b=a.to,c=a.src;return N([L({to:b},H({src:c}))])})):void 0};var B=h("h3");var C=h("h2");var D=h("description");var E=function GitList(a){var b=a.items,c=b===void 0?[]:b,d=a.org,e=a.host,f=e===void 0?"github":e,g=a.header,h=a.desc,j=h===void 0?a.description:h;var k={};return a["class"]?!a["class"].includes("GitList")&&(k["class"]="GitList ".concat(a["class"])):k["class"]="GitList",k.id=a.id?a.id:d,!k.id.startsWith("gl")&&(k.id="gl-".concat(k.id)),S(k,[g&&C(g),j&&S({"class":"description"},j),i({id:"".concat(k.id,"-ul")},[c.map(function(a){return E.Item(m({org:d,id:"".concat(k.id,"-li"),host:f},a))})])])};E.Item=function(a){var b=a.name,c=a.org,d=a.id,e=a.host;var f=a.desc||a.description;return N({id:"".concat(d,"-").concat(b),"class":"GitListItem"},[B([L({to:"https://".concat(e,".com/").concat(c,"/").concat(b)},"@".concat(c,"/").concat(b))]),f&&M(f),A("".concat(c,"/").concat(b)),L({to:"https://".concat(c,".").concat(e,".io/").concat(b)},"docs / demo")])};var F=h("img");var G=function Menu(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"menu";return function(b){typeof a==="string"&&(a={name:a});var c=a,d=c.name,e=d===void 0?"menu":d,f=c["class"],g=f===void 0?"Menu":f,h=c.items,j=h===void 0?[]:h,k=c.collapse;var n=b.url,o=b[e],p=o===void 0?[]:o;if(j=j.length?j:p,!!j.length)return b.hash&&(n+="#".concat(b.hash)),P({"class":g},i(j.map(function(a){return G.Item(m({},a,{url:n,collapse:k===void 0||k}))})))}};G.Item=function(b){var c=b.url,d=b.text,f=b.items,g=f===void 0?[]:f,h=b.parentTo,j=h===void 0?undefined:h,k=b.collapse,l=e(b,["url","text","items","parentTo","collapse"]);return function(b){if(l.to||d){var e={"class":"MenuItem"};if(j){var p=l.to.includes("://");var q=l.to.startsWith("/");var r=!j||l.to.startsWith(j);!r&&!q&&!p&&(!j.endsWith("/")&&!l.to.startsWith("-")&&(j="".concat(j,"/")),l.to=j+l.to)}var f=l.to.startsWith(b.root)?l.to:"".concat(b.root).concat(l.to.substr(1));var h=c.startsWith(f);c===f&&(e["class"]+=" active");var o=[];return(g.length&&h||!k)&&(o=i(g.map(function(a){return G.Item(m({parentTo:l.to,url:c,collapse:k},a))}))),N(e,[l.to?L(l,d):a(l,d),o])}}};var H=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),F(a)}};var I=h("header");var J=h("footer");var K=h("a");var a=h("span");var L=function Link(a,b){var c=a.to,d=e(a,["to"]);return function(a,f){var g=d.href,h=d.text,i=d.nofollow,j=d.noreferrer,k=d.onclick,l=e(d,["href","text","nofollow","noreferrer","onclick"]);return c=c||g||"",l.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?l.onclick=function(a){k&&k({e:a,to:c}),f.go({e:a,to:c})}:(l.target="_blank",l.rel="noopener",i&&(l.rel+=" nofollow"),j&&(l.rel+=" noreferrer")),K(l,[h,b])}};var M=h("p");var N=h("li");var p=h("text");var O=h("i");var i=h("ul");var P=h("nav");var Q=function Footer(){return J({"class":"Footer"},[S({"class":"wrapper"},["made with a few bits of ",L({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])};var R=function Header(b){return(b.logo||b.menu||b.tagline)&&I({"class":"Header"},[(b.logo||b.logotext)&&L({to:"/library-list/","class":"LogoWrapper"},[b.logo&&H({"class":"Logo",src:b.logo}),b.logotext&&a({"class":"LogoText"},b.logotext)]),b.menu&&G])};var S=h("div");var T={};(function(){var c="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final export throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()});var d="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()});var e=["true","false"];var f=function wrapWords(b){if(typeof b!=="string")return b;var f=b.split(/\b/);return b=f.map(function(b,g){if(b!==""){var h="";return b==="state"?h="state":b==="actions"?h="actions":f[g+1]&&f[g+1].includes(":")?h="colon":c.includes(b)?h="keyword":d.includes(b)?h="builtin":e.includes(b)?h="boolean":f[g-1]==="."?h="property":f[g+1]==="."&&(h="object"),h&&(b=a({"class":h},b)),b}}),b};var g=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g;var h=function wrapEmails(a){return a.split(g).map(function(a){if(g.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a);var c=a.replace("mailto:","");return L({"class":"email",to:b},c)}return f(a)})};var i=function wrapComments(a,b){return[m(a.substring(0,b)),m(a.substring(b))]};var j=function wrapLinks(a){return a.split(/(?= )/).map(function(a){return a.includes("://")?L({to:a},a):m(a)})};var k=function wrapUrls(a){return a.includes("://")&&!a.includes("@")?j(a):h(a)};var l=function wrapStrings(c){var d=c.replace(/"/g,"'");var e=d.split("'"),g=b(e),h=g[0],i=g[1],j=g.slice(2);var l=j;l.length===1?l=m(l[0]):l.length>1&&(l=m(l.join("'")));var n=[];return n=typeof i==="undefined"?f(c):[f(h),a({"class":"string"},["'",k(i),"'"]),l],n};var m=function wordsByLine(b){var c=b.indexOf("//");var d=b.trim();if(d.startsWith("//")){var e=b.search(/\S|$/);var f="";for(var g=0;g<e;g++)f+=" ";return!d.startsWith("// ")&&(b="".concat(f,"// ").concat(d.substr(2))),a({"class":"comment"},[f,"// ",m(d.substring(3))])}return c>-1&&b[c-1]!==":"?i(b,c):b.indexOf("://")>2?j(b):b.indexOf("@")&&b.includes(".")&&!b.trim().includes(" ")?h(b):l(b)};var n=function wrapLine(a){return x({"class":"line"},m(a))};T.PRE={keywords:c,builtins:d,format:function format(a){return a.trim().split("\n").map(n)},wordsByLine:m,wrapWords:f}})(),window.LIB=T;var U={"/library-list/":function libraryList(a){return[w(a.title),M(["this is the ",L({to:"https://github.com/magic-modules"},"@magic-modules")," LibraryList component. ",a.description]),A("magic-modules/library-list"),C({id:"installation"},"installation"),v("npm install magic-modules/library-list"),C({id:"usage"},"usage"),M("in a page or module View"),v("module.exports = () => [LibraryList]"),C({id:"demo"},"demo"),M("this is what it looks like"),u,C({id:"source"},"source"),M(["the source for this page is in the ",L({to:"https://github.com/magic-modules/library-list/tree/master/example"},"example directory")," and gets built and published to github using ",L({to:"https://github.com/magic/core"},"@magic/core")])]},"/library-list/404/":function libraryList404(){return S("404 - not found")}};var V={"url":"/library-list/","root":"/library-list/","title":"@magic-modules/library-list","description":"shows a list of all @magic-modules with gitbadges and urls to the docs","logotext":"LibraryList","menu":[{to:"/library-list/#installation","text":"installation"},{to:"/library-list/#usage","text":"usage"},{to:"/library-list/#demo","text":"demo"},{to:"/library-list/#source","text":"source"}],"pre":{"theme":"light"}};V.url=window.location.pathname,V.root="/library-list/";var W={"go":function go(a){return function(b){if(typeof window==="undefined"||!window.history)return!0;var c=a.to;var d=a.e?a.e:a;d.preventDefault();var e=b.url;var f=e.split("#"),h=g(f,2),i=h[0],j=h[1],k=j===void 0?"":j;if(c){e=c.replace(window.location.origin,"");var l=e.split("#"),m=g(l,2),n=m[0],o=m[1],p=o===void 0?"":o;i=n,k=p&&p!=="/"?p:"";var q=b.hash?"#".concat(b.hash):window.location.hash;var r=b.url+q;(e!==r||k!==q)&&(window.history&&window.history.pushState({uri:i},"",e),!k&&window.scrollTo(0,0))}else i=d.state?d.state.uri:"/";if(window.location&&k){var s=document.getElementById(k);if(s){var t=s.offsetTop;window.scrollTo(0,t),window.location.hash=k}}return{url:i,hash:k,prev:b.url}}},"pre":{"changeTheme":function changeTheme(){return function(a){return{theme:a.theme==="dark"?"light":"dark"}}},"clip":function clip(a){if(typeof document!=="undefined"&&typeof document.execCommand==="function"){var b=document.createElement("textarea");b.id="copy",b.innerHTML=a,document.body.appendChild(b);var c=document.getElementById("copy");c.select(),document.execCommand("copy"),document.body.removeChild(c)}}}};var X=function view(a,b){var c=U[a.url]?a.url:"/404/";var d=U[c];if(a.pages){var e=a.pages[c];for(var f in e)a[f]=e[f]}if(b.pages){var g=b.pages[c];for(var h in g)b[h]=g[h]}return t(d)(a,b)};var Y=document;var d=Y.getElementById("Magic");!d&&(d=Y.createElement("div"),d.id="magic",Y.body.appendChild(d)),r(V,W,X,d);
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);
