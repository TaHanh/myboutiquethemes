(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"5WRv":function(e,t,n){var r=n("iNmH"),o=n("Qatm"),a=n("kluZ");e.exports=function(e){return r(e)||o(e)||a()}},"5dyF":function(e,t,n){e.exports=n("9CGT")},"9CGT":function(e,t,n){"use strict";var r=n("SDJZ"),o=n("NToG"),a=n("eef+"),i=n("K4DB"),u=n("+IV6");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var l=n("63Ad"),s=n("vdEC");t.__esModule=!0,t.default=void 0;var f,p=s(n("mXGw")),d=n("ly6l"),h=n("z4BS"),v=l(n("bBV7")),m=n("a4i1");function y(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var w=new Map,b=window.IntersectionObserver,g={};function k(){return f||(b?f=new b((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var C=function(e){a(l,e);var t,n=(t=l,function(){var e,n=u(t);if(c()){var r=u(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return i(this,e)});function l(e){var t;return r(this,l),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:(0,m.addBasePath)(y(e)),as:t?(0,m.addBasePath)(y(t)):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=t.formatUrls(t.props.href,t.props.as),i=a.href,u=a.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,d.resolve)(c,i),u=u?(0,d.resolve)(c,u):i,e.preventDefault();var l=t.props.scroll;null==l&&(l=u.indexOf("#")<0),v.default[t.props.replace?"replace":"push"](i,u,{shallow:t.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return o(l,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,d.resolve)(e,n);return[o,r?(0,d.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=k();return n?(n.observe(e),w.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}w.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),p.default.cloneElement(a,i)}}]),l}(p.Component);t.default=C},"9fEB":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("mXGw")),a=r(n("GlZI")),i=n("9rrO"),u=n("bxxT"),c=n("vI6Y");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var l=f[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var s=o.props[l],p=r[l]||new Set;p.has(s)?a=!1:(p.add(s),r[l]=p)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var d=a.default();function h(e){var t=e.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}h.rewind=d.rewind,t.default=h},"9rrO":function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("mXGw"));t.AmpStateContext=o.createContext({})},GlZI:function(e,t,n){"use strict";var r=n("SDJZ"),o=n("T1e2"),a=n("NToG"),i=n("eef+"),u=n("K4DB"),c=n("+IV6"),l=n("5WRv");function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var f=n("mXGw"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){i(h,l);var f,d=(f=h,function(){var e,t=c(f);if(s()){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function h(e){var a;return r(this,h),a=d.call(this,e),p&&(t.add(o(a)),n(o(a))),a}return a(h,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(h,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),h}(f.Component)}},KDK4:function(e,t,n){"use strict";var r=n("mXGw"),o=n.n(r),a=n("5dyF"),i=n.n(a),u=n("9fEB"),c=n.n(u),l=(n("UOsd"),o.a.createElement);t.a=function(e){var t=e.children,n=e.title,r=void 0===n?"This is the default title":n;return l("div",{className:"container-layout"},l(c.a,null,l("title",null,r)),l("header",null,l("ul",null,[{title:"title",slug:"about"},{title:"title",slug:"about"},{title:"title",slug:"about"}].map((function(e,t){return l("li",{key:t},l(i.a,{href:"/blog/[slug]",as:"/blog/".concat(e.slug)},l("a",null,e.title)))})))),l("main",null,t),l("footer",null,l("div",{className:"abc"},"I`m here to stay",l("div",{className:"xyz"},"I`m here to stay"))))}},Qatm:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},UOsd:function(e,t,n){},bxxT:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("mXGw"));t.HeadManagerContext=o.createContext(null)},iNmH:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},vI6Y:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("mXGw")),a=n("9rrO");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},vQvU:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("mXGw"),o=n.n(r),a=n("KDK4"),i=n("bBV7"),u=o.a.createElement;function c(e){var t=Object(i.useRouter)();return u("div",null,u(a.a,{title:"Contact us"},u("div",{onClick:function(e){e.preventDefault(),t.push("/about/[title]")}},e.title)))}}}]);