module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/3ze":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("bBV7");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zYPn");


/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "3VQ6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rOcY");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5dyF");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_convert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uiLY");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("sGQ9");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Aside(props) {
  return __jsx("div", {
    className: "widget-area"
  }, __jsx("div", {
    className: "about-widget"
  }, __jsx("div", {
    style: {
      maxWidth: 300,
      margin: "auto"
    }
  }, __jsx("div", {
    className: "about-image",
    style: {
      backgroundImage: "url(" + `${__webpack_require__("IaP9")}` + ")"
    }
  })), __jsx("div", {
    className: "about-content"
  }, __jsx("img", {
    className: "widget-title",
    src: __webpack_require__("NXdW")
  }), __jsx("p", {
    className: "about-text"
  }, "Glowish l\xE0 n\u1EC1n t\u1EA3ng ch\u0103m s\xF3c da online, d\xE0nh cho nh\u1EEFng b\u1EA1n ch\u01B0a c\xF3 th\u1EDDi gian, \u0111i\u1EC1u ki\u1EC7n \u0111i kh\xE1m tr\u1EF1c ti\u1EBFp t\u1EA1i c\xE1c ph\xF2ng kh\xE1m da li\u1EC5u, c\xF3 nhu c\u1EA7u t\xECm ki\u1EBFm c\xE1c s\u1EA3n ph\u1EA9m d\u01B0\u1EE1ng da b\xEAn ngo\xE0i \u0111\u1EC3 ch\u0103m s\xF3c da."))), __jsx("div", {
    className: "social-media-widget"
  }, __jsx("h2", {
    className: "widget-title"
  }, "Let\u2019s get social"), __jsx("div", {
    className: "social-media-icons"
  }, __jsx("a", {
    href: "https://www.facebook.com/glowish.net/",
    target: "_blank"
  }, __jsx("i", {
    className: "fab fa-facebook-f"
  })), __jsx("a", {
    href: "https://www.instagram.com/glowishofficial/",
    target: "_blank"
  }, __jsx("i", {
    className: "fab fa-instagram"
  })), __jsx("a", {
    href: "https://www.youtube.com/channel/UC8GpXX1RdB7SBLuGoOa61rg",
    target: "_blank"
  }, __jsx("i", {
    class: "fab fa-youtube"
  })))), props.compositions && props.compositions.length > 0 ? __jsx("div", {
    className: "category"
  }, __jsx("h2", {
    className: "widget-title"
  }, "COMPOSITIONS"), __jsx("ul", null, props.compositions && props.compositions.map((item, index) => {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: _config__WEBPACK_IMPORTED_MODULE_1___default.a.client.compositions + Object(_utils_convert__WEBPACK_IMPORTED_MODULE_4__[/* convertTitle */ "a"])(item.name) + "?id=" + item.id
    }, __jsx("li", {
      className: "cat-item cursor-pointer",
      key: index
    }, __jsx("a", null, item.name)));
  }))) : null, props.categories && props.categories.length > 0 ? __jsx("div", {
    className: "nav-menu"
  }, __jsx("h2", {
    className: "widget-title"
  }, "CATEGORIES"), __jsx("ul", null, props.categories && props.categories.map((item, index) => {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: _config__WEBPACK_IMPORTED_MODULE_1___default.a.client.categories + Object(_utils_convert__WEBPACK_IMPORTED_MODULE_4__[/* convertTitle */ "a"])(item.name) + "?id=" + item.id
    }, __jsx("li", {
      className: "cat-item cursor-pointer",
      key: index
    }, __jsx("a", null, item.name)));
  }))) : null);
}

/* harmony default export */ __webpack_exports__["a"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["inject"])("store")(Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["observer"])(Aside)));

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5dyF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9CGT")


/***/ }),

/***/ "63Ad":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "9CGT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

var _interopRequireWildcard = __webpack_require__("vdEC");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("bBV7"));

var _router2 = __webpack_require__("a4i1");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "A/Ti":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blush_title-eec4212d810eddc1e91b269041a158b4.png";

/***/ }),

/***/ "BCwt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "BukW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "CafY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__("5dyF");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./static/styles/style.scss
var style = __webpack_require__("UOsd");

// EXTERNAL MODULE: ./static/styles/post.scss
var post = __webpack_require__("HVfI");

// EXTERNAL MODULE: ./static/styles/react-draft-wysiwyg.scss
var react_draft_wysiwyg = __webpack_require__("lytG");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/footer.js

var __jsx = external_react_default.a.createElement;


function Footer(props) {
  return __jsx("footer", null, __jsx("div", {
    className: "footer-title"
  }, "Follow Me Around"), __jsx("div", {
    className: "row mx-0 justify-content-center"
  }, __jsx("div", {
    className: "col-md-12-8 px-0 col-12"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    style: {
      backgroundImage: 'url(' + `${__webpack_require__("YIil")}` + ')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, __jsx("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), __jsx("div", {
    className: "col-md-12-8 px-0 col-12"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    style: {
      backgroundImage: 'url(' + `${__webpack_require__("t0fM")}` + ')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, __jsx("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), __jsx("div", {
    className: "col-md-12-8 px-0 col-12"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    style: {
      backgroundImage: 'url(' + `${__webpack_require__("zVxs")}` + ')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, __jsx("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), __jsx("div", {
    className: "col-md-12-8 px-0 col-12"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    style: {
      backgroundImage: 'url(' + `${__webpack_require__("hdFj")}` + ')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, __jsx("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), __jsx("div", {
    className: "col-md-12-8 px-0 col-12"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    style: {
      backgroundImage: 'url(' + `${__webpack_require__("te99")}` + ')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, __jsx("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), __jsx("div", {
    className: "col-md-12-8 px-0 col-12"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    style: {
      backgroundImage: 'url(' + `${__webpack_require__("Fp8I")}` + ')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, __jsx("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), __jsx("div", {
    className: "col-md-12-8 px-0 d-sm-block d-none"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    style: {
      backgroundImage: 'url(' + `${__webpack_require__("DIPZ")}` + ')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, __jsx("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), __jsx("div", {
    className: "col-md-12-8 px-0 d-sm-block d-none"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    style: {
      backgroundImage: 'url(' + `${__webpack_require__("iZfG")}` + ')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, __jsx("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), __jsx("div", {
    className: "col-6 px-0 d-block d-sm-none"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    style: {
      backgroundImage: 'url(' + `${__webpack_require__("DIPZ")}` + ')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, __jsx("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), __jsx("div", {
    className: "col-6 px-0 d-block d-sm-none"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    style: {
      backgroundImage: 'url(' + `${__webpack_require__("iZfG")}` + ')',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, __jsx("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  }))))), __jsx("div", {
    className: "site-footer"
  }, __jsx("div", {
    className: "footer-container"
  }, __jsx("ul", {
    className: "footer-menu"
  }, __jsx("li", {
    className: "footer-menu-item"
  }, __jsx("a", {
    href: ""
  }, "Travel")), __jsx("li", {
    className: "footer-menu-item"
  }, __jsx("a", {
    href: ""
  }, "Fashion")), __jsx("li", {
    className: "footer-menu-item"
  }, __jsx("a", {
    href: ""
  }, "Lifestyle")), __jsx("li", {
    className: "footer-menu-item"
  }, __jsx("a", {
    href: ""
  }, "Shop my Style"))), __jsx("div", {
    className: "footer-info"
  }, __jsx("p", {
    className: "copyright"
  }, "Your copyright notice. 2020."), __jsx("a", {
    href: "",
    target: "_blank"
  }, "Blush Co. WordPress Theme"), ' ', "by My Boutique Themes."))));
}
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__("sGQ9");

// EXTERNAL MODULE: ./utils/convert.js
var convert = __webpack_require__("uiLY");

// CONCATENATED MODULE: ./components/header.js

var header_jsx = external_react_default.a.createElement;








function Header(props) {
  if (props.store.user && props.store.user.token) {} else {
    props.store.getUser();
    props.store.initApp();
  }

  Object(external_react_["useEffect"])(() => {}, []);
  return header_jsx("header", {
    className: "fixed-top"
  }, header_jsx("nav", {
    className: "navbar navbar-expand-lg navbar-light"
  }, header_jsx("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarTogglerDemo01",
    "aria-controls": "navbarTogglerDemo01",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, header_jsx("span", {
    className: "navbar-toggler-icon"
  }), header_jsx("span", {
    className: "navbar-txt"
  }, "MENU")), header_jsx("div", {
    className: "row mx-0 align-items-center"
  }, props.store.user && props.store.user.token ? header_jsx("div", {
    className: "dropdown btn-login d-lg-none"
  }, header_jsx("img", {
    id: "dropdownMenuButton",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    src: props.store.user.user.picture,
    alt: "avatar",
    className: "rounded-circle avatar cursor-pointer"
  }), header_jsx("div", {
    className: "dropdown-menu py-0",
    "aria-labelledby": "dropdownMenuButton"
  }, header_jsx("div", {
    className: "dropdown-item text-center cursor-pointer py-2",
    onClick: () => props.callBack('LOGOUT', '')
  }, "\u0110\u0103ng xu\u1EA5t"))) : null, header_jsx("div", {
    className: "search-icon d-lg-none cursor-pointer",
    onClick: () => props.callBack('CHECK_SEARCH', '')
  }, header_jsx("i", {
    className: "fas fa-search"
  }))), header_jsx("div", {
    className: "collapse navbar-collapse",
    id: "navbarTogglerDemo01"
  }, header_jsx("ul", {
    className: "navbar-nav mr-auto mt-2 mt-lg-0"
  }, header_jsx("li", {
    className: "nav-item"
  }, header_jsx(link_default.a, {
    href: "/"
  }, header_jsx("a", {
    className: "nav-link"
  }, "Home"))), !props.store.user && props.categories ? header_jsx("li", {
    className: "nav-item"
  }, header_jsx("a", {
    className: "nav-link d-lg-block d-none"
  }, "Category ", header_jsx("i", {
    className: "fas fa-angle-down"
  })), header_jsx("a", {
    className: "nav-link d-block d-lg-none",
    "data-toggle": "collapse",
    href: "#collapseOne"
  }), header_jsx("ul", {
    className: "sub-menu collapse",
    id: "collapseOne"
  }, props.categories.map(element => {
    return header_jsx("li", {
      className: "menu-item"
    }, header_jsx("a", {
      href: config_default.a.client.categories + Object(convert["a" /* convertTitle */])(element.name) + '?id=' + element.id
    }, element.name));
  }))) : null, !props.store.user && props.compositions ? header_jsx("li", {
    className: "nav-item"
  }, header_jsx("a", {
    className: "nav-link d-lg-block d-none"
  }, "Composition ", header_jsx("i", {
    className: "fas fa-angle-down"
  }), ' '), header_jsx("a", {
    className: "nav-link d-block d-lg-none",
    "data-toggle": "collapse",
    href: "#collapseTwo",
    "aria-expanded": "false"
  }), header_jsx("ul", {
    className: "sub-menu collapse",
    id: "collapseTwo"
  }, props.compositions.map(element => {
    return header_jsx("li", {
      className: "menu-item"
    }, header_jsx("a", {
      href: config_default.a.client.compositions + Object(convert["a" /* convertTitle */])(element.name) + '?id=' + element.id
    }, element.name));
  }))) : null, props.store.user && props.store.user.token ? header_jsx("li", {
    className: "nav-item"
  }, header_jsx(link_default.a, {
    href: config_default.a.client.adminPost
  }, header_jsx("a", {
    className: "nav-link"
  }, "Post"))) : null, props.store.user && props.store.user.token ? header_jsx("li", {
    className: "nav-item"
  }, header_jsx(link_default.a, {
    href: config_default.a.client.adminComposition
  }, header_jsx("a", {
    className: "nav-link"
  }, "Composition"))) : null, props.store.user && props.store.user.token ? header_jsx("li", {
    className: "nav-item"
  }, header_jsx(link_default.a, {
    href: config_default.a.client.adminCategories
  }, header_jsx("a", {
    className: "nav-link"
  }, "Category"))) : null, header_jsx("li", {
    className: "nav-item"
  }, header_jsx(link_default.a, {
    href: config_default.a.client.adminYoutube
  }, header_jsx("a", {
    className: "nav-link"
  }, "Youtube")))), header_jsx("form", {
    className: "form-inline my-2 my-lg-0 justify-content-center"
  }, header_jsx("div", {
    className: "social-media-icons"
  }, header_jsx("a", {
    href: "https://www.facebook.com/glowish.net/",
    target: "_blank"
  }, header_jsx("i", {
    className: "fab fa-facebook-f"
  })), header_jsx("a", {
    href: "https://www.instagram.com/glowishofficial/",
    target: "_blank"
  }, header_jsx("i", {
    className: "fab fa-instagram"
  })), header_jsx("a", {
    href: "https://www.youtube.com/channel/UC8GpXX1RdB7SBLuGoOa61rg",
    target: "_blank"
  }, header_jsx("i", {
    class: "fab fa-youtube"
  }))), props.store.user && props.store.user.token ? header_jsx("div", {
    className: "dropdown btn-login"
  }, header_jsx("img", {
    id: "dropdownMenuButton",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    src: props.store.user.user.picture,
    alt: "avatar",
    className: "rounded-circle avatar d-lg-block d-none cursor-pointer"
  }), header_jsx("div", {
    className: "dropdown-menu py-0",
    "aria-labelledby": "dropdownMenuButton"
  }, header_jsx("div", {
    className: "dropdown-item text-center cursor-pointer py-2",
    onClick: () => props.callBack('LOGOUT', '')
  }, "\u0110\u0103ng xu\u1EA5t"))) : null, header_jsx("div", {
    className: "search-icon d-lg-block d-none cursor-pointer",
    onClick: () => props.callBack('CHECK_SEARCH', '')
  }, header_jsx("i", {
    className: "fas fa-search"
  }))))));
}

/* harmony default export */ var header = (Object(external_mobx_react_["inject"])('store')(Object(external_mobx_react_["observer"])(Header)));
// EXTERNAL MODULE: ./components/aside.js
var aside = __webpack_require__("3VQ6");

// CONCATENATED MODULE: ./components/search.js

var search_jsx = external_react_default.a.createElement;


function Search(props) {
  const {
    0: value,
    1: changeValue
  } = Object(external_react_["useState"])('');

  const search = () => {};

  return search_jsx("div", {
    className: "search"
  }, search_jsx("div", {
    className: "popup-search"
  }, search_jsx("div", {
    className: "float-right btn-close cursor-pointer",
    onClick: () => props.callBack('CHECK_SEARCH', '')
  }, search_jsx("i", {
    className: "fas fa-times"
  })), search_jsx("div", {
    className: "search-container text-center"
  }, search_jsx("h2", null, "What are you looking for?"), search_jsx("div", {
    className: "searchform"
  }, search_jsx("label", {
    for: "search-top",
    className: "cursor-pointer",
    onClick: () => props.callBack('SEARCH', value)
  }, search_jsx("i", {
    className: "fas fa-search"
  })), search_jsx("input", {
    type: "text",
    id: "search-top",
    placeholder: "T\xECm ki\u1EBFm",
    value: value,
    onChange: e => {
      changeValue(e.target.value);
    },
    onKeyPress: e => {
      if (e.key == 'Enter') {
        props.callBack('SEARCH', value);
      }
    }
  })))));
}
// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "nprogress/nprogress"
var nprogress_ = __webpack_require__("GngY");

// EXTERNAL MODULE: ../node_modules/nprogress/nprogress.css
var nprogress = __webpack_require__("WBKl");

// CONCATENATED MODULE: ./utils/loading-progress.js




function loadingProgress() {
  external_nprogress_default.a.configure({
    showSpinner: false
  });

  router_default.a.onRouteChangeStart = () => external_nprogress_default.a.start();

  router_default.a.onRouteChangeComplete = () => external_nprogress_default.a.done();

  router_default.a.onRouteChangeError = () => external_nprogress_default.a.done();
} // Router.events.on('routeChangeStart', handleStart)
// Router.events.on('routeChangeComplete', handleComplete)
// Router.events.on('routeChangeError', handleComplete)
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__("RE4Q");
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);

// CONCATENATED MODULE: ./components/layout.js

var layout_jsx = external_react_default.a.createElement;















 // import { browserHistory } from "react-router";

loadingProgress();
/* harmony default export */ var layout = __webpack_exports__["a"] = (({
  children,
  title = "Glowish",
  compositions,
  categories
}) => {
  const {
    0: isSearch,
    1: changeSearch
  } = Object(external_react_["useState"])(false);
  const cookies = new external_universal_cookie_default.a();
  Object(external_react_["useEffect"])(() => {}, []);

  const callBack = (key, value) => {
    console.log(key, value);

    switch (key) {
      case "CHECK_SEARCH":
        changeSearch(!isSearch);
        break;

      case "SEARCH":
        changeSearch(false);
        router_default.a.push(config_default.a.client.search + Object(convert["a" /* convertTitle */])(value));
        break;

      case "LOGOUT":
        // hi;
        cookies.remove("user", {
          path: "/"
        });
        window.history.forward(1); // window.onunload = function () {
        //   null;
        // };

        window.location.href = "/";
        break;

      default:
        break;
    }
  };

  return layout_jsx("div", {
    className: "container-layout"
  }, layout_jsx(head_default.a, null, layout_jsx("title", null, title)), layout_jsx(header, {
    callBack: callBack,
    compositions: compositions,
    categories: categories
  }), layout_jsx("div", {
    style: {
      height: "60px"
    }
  }), layout_jsx("main", null, layout_jsx("div", {
    className: "content-area"
  }, children)), layout_jsx(Footer, null), layout_jsx(external_react_toastify_["ToastContainer"], null), isSearch ? layout_jsx(Search, {
    callBack: callBack
  }) : null);
});

/***/ }),

/***/ "DIPZ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f7-9bdc31555df6f0e0e2c228d3b4a4c302.jpg";

/***/ }),

/***/ "Fp8I":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f6-516d6e731ff67df8beac5e9f9622b6f0.jpg";

/***/ }),

/***/ "GngY":
/***/ (function(module, exports) {

module.exports = require("nprogress/nprogress");

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "HVfI":
/***/ (function(module, exports) {

module.exports = {
	"wysiwyg-wrapper": "_1TrmPmreEvNbeAkibeoonI",
	"rdw-editor-toolbar": "_15vwvf1NE7CNEaJ-hF4Inu",
	"rdw-option-wrapper": "_2JzR_h1TOHoVGogbZKIsHk",
	"rdw-option-active": "_5Y8vx5pzOGPo_BDGEUcvl",
	"wysiwyg-editor": "_3qBhvCpb5-bFlXMxW1qdSd",
	"public-DraftStyleDefault-block": "_1ZwFTeFbO9-_9BVDacLrjr",
	"post": "_2ejGVJGI5Ntan_M_5Bpte_",
	"post-image": "_2OEArW1hwlrYr0t2v3jyxd",
	"post-image-container": "_1hINdEYKwFh3C7yzIaDuIs",
	"post-image-btn": "_1KRXEE7QjHLNj4Yh4jk5nO"
};

/***/ }),

/***/ "IaP9":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Glowish_logo-55e8d0dec9ae13529c65357b7b591ed7.png";

/***/ }),

/***/ "Jxiz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "NXdW":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/welcome-8be53a0dd02860bce0a47c12c51a7c08.png";

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Qsx+":
/***/ (function(module, exports) {

module.exports = {
	"home-entry-body": "_1LUcjz49FM8ZDwzrgBQfS3",
	"home-entry-header": "_2BmUpCUgrp98qyJr8lF3Vu",
	"home-entry-title": "_29fXwu6Ba13PGDxTh1ZBLv",
	"home-entry-content": "_33mckX8CfI7k9iP_cF1veJ",
	"home-entry-meta": "_2xJMUhsHAjNXJTsElMBpF6",
	"shop-the-post": "nDHXjZRgLdaYGYzkkXOmO",
	"shop-the-post-container": "_1CCHZcBc9O1scEmlCkoYdO",
	"home-entry-footer": "_2VCz3YRElg99n86h4MMkn5",
	"comments-link": "_2Y4DRhwtVP4rFwRPAZkxdE",
	"share": "_1y_71h2M8KrXqbfE2vCrdk",
	"after-content-home": "_3z5yHd5CsRd-6gkosWU8Go",
	"widgettitle": "_1KidgqcVZ75En5nmyL6Bzy",
	"youtube-gallery": "_2y6GxwfuIbHyP0ZqEkI-gK",
	"youtube-video": "_1ltIhJdmVMuma-czC21RGM",
	"youtube-thumb": "WaD_Nj4ZHaL2JJHBQymL7",
	"icon": "_2dVv6PFaEroGGngipo2Mz-",
	"video-title": "_267wy895MQdWmoo7tYpT9M"
};

/***/ }),

/***/ "RE4Q":
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),

/***/ "UOsd":
/***/ (function(module, exports) {

module.exports = {
	"__next-prerender-indicator": "_11gMzjOD51jsdASRy4aJE9",
	"nprogress": "_32CD7rep5ZNdIUQeJMwjgq",
	"bar": "_1RYA35cci1PUcfm61Ayyf9",
	"container-layout": "cpC1bM08AXtb7gz4Jz_A8",
	"content-area": "_4CVbJtI1nkCGDPQ6bpHDi",
	"col-md-12-8": "_3rXnAPDtlGOGe93o27reNw",
	"cursor-pointer": "_2LaWq8KKnu_P2iTAyR20_Y",
	"btn-outline-custom": "_3CfHP5H3zB-iRAyxoZbiiP",
	"max-line": "_3UC_qG7FB0tGjNn5XBLJAR",
	"navbar-toggler": "uTPtXwtz1n2YOxOTvTLLS",
	"navbar-txt": "_20R6qg7y8AxARHIsTQyddG",
	"nav-item": "_2hdBn7QRjvbuu4--cXfkiZ",
	"nav-link": "_1DeRfmOmlfz9bkE47Kex3V",
	"sub-menu": "wpEVRt6M3fSB4_Q47gGRT",
	"example": "M8t-KvchGqZ7EI3nX7VtY",
	"menu-item": "INF-4FNu5Tfjh-s69oD2_",
	"social-media-icons": "_3qkCUw8AqHeYHe1g8nkcku",
	"search-icon": "_2zye57l77sImp9zOi3kmg8",
	"avatar": "_1VCD5ISrjMfiW_o3EAqFz-",
	"btn-login": "_25I81iJjt7dpaQ4eYlmJSN",
	"dropdown-menu": "_2cXakoLVO7rQvJpfFYMF3-",
	"footer-title": "_1ihj1dkdY9pbFQr_4TkCNx",
	"site-footer": "_3SEs2s9IWS_ecuO3F1fbvD",
	"footer-container": "_3VrvUelnDEOOAmKhZL2ock",
	"footer-menu": "_3FR6NY2M7iHhG_bmO39E_x",
	"footer-menu-item": "_330nyaGsRrhPGfwg4VDIjw",
	"footer-info": "hPNJ6tqgAcQcG0p01iom9",
	"copyright": "_1-EBgRI5FVYOP6ZJ-4lyck",
	"search": "_2Lrz2Q9VBA6a-3JAeVDwtO",
	"popup-search": "_13caehAug04HHq2AXbZiQ9",
	"btn-close": "_3BV9zOcRKafnHU7S4ju5YR",
	"search-container": "_3R8ivJufubvYy7cpCV_YoZ",
	"searchform": "Ydjq2NfwQrj12ij7uukE0",
	"site-branding": "RGP_DYOl03aP4k3jUo3Sl",
	"site-content": "_3jg1I48CVPvRzjJ0p6Krsv",
	"widget-area": "_3t4Bc2O_6KF6m4JuGvxuUS",
	"about-widget": "_cQx6XQdv4JD2mT44xJ9g",
	"social-media-widget": "_2yN_u3UPJrOH4FAmCADRcQ",
	"widget_text": "_38EQb12RC_Y_nY11bH93xq",
	"featured-post-widget": "_2GRXs8lAACVPCKt4NXDJ96",
	"category": "_3f0NVRdoNuzCnNQsBnmj46",
	"widget-title": "_3L8kI1xk1LHC1Yih3mw74_",
	"about-image": "_3LR5bu16wYp2kRPZGPODg_",
	"about-content": "_1sPAJS34oCWcoi3D2hqNex",
	"about-text": "_1p9GsAnYnVYflEWqg1O71E",
	"btn-more": "_2P0QjhUrlXQHgSpa_o213b",
	"featured-post": "_3gdRK_a2c5DoSVd5qqzPXU",
	"entry-header": "_3mEN29aM4xLAmrORLeu4Gu",
	"entry-title": "_1PRRGXA72masleL4XTVQDU",
	"posted-on": "_5F7qqdrgB54My6TYB9SYv",
	"nav-menu": "_3OHtHi2q2grNSe9Ph2v8wH",
	"item-swiper": "_3750J8pFJU-GhlzIPT3ocF",
	"item-swiper-img": "_2em9-7QRVHurHR1Zhgd6iu",
	"item-swiper-title": "_2ols1nQOhu6hMci5i5Ffac",
	"shop-the-post-container": "xgXL20aShTU7STlLTpGnC",
	"swiper-container": "UA3LY6h_EuMjJoweQK_yp",
	"swiper-button-next": "_38hDzE5zOPvqyfhgnLzg__",
	"swiper-button-prev": "_3f7NZzLRRTksbLCGtFHvNA",
	"shop-container": "_2X7BP7sDBWwDK9hODjZs1y",
	"shop-container-swiper": "m0hhLv4XZGB31HW3uZoWh",
	"btn-prev": "_1iJDjGAynOv5-gk00soom0",
	"btn-next": "_3w0k8URevXYQFRnOzSKFUz",
	"readmore": "_5aFBBIrOLNoJRU4q3ZxUd",
	"read-more": "_2tARYikln8V8ZMjPVYv6BL",
	"card-post": "_20yygHGuGu50woKCuRMoLF",
	"card-entry-thumbnail": "_2IAsmWR6XGUBmqp71dX4kK",
	"card-entry-body": "sF_8gR77ZGBChVtv069R1",
	"card-entry-header": "_1IdmNJ4ea0vg-7ECh8ygs5",
	"card-entry-title": "MZKdSbRfRdHD959FXYh_S",
	"card-entry-content": "_3qm2nTo29a4lz8JqkJ1Zoa",
	"card-entry-meta": "_1QHgXCp-7dDaomwv9FcIek",
	"multi-select": "cg98NT9WIttqZnrc5xUWo",
	"dropdown-content": "_2pMymoR9qfM4bbz_DeznLF"
};

/***/ }),

/***/ "VOyh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "WBKl":
/***/ (function(module, exports) {

module.exports = {
	"nprogress": "_3pWxcyNVF4yJcjQiTwOMHe",
	"bar": "_3jeSu4ylY-l-b1ZX5fJPOc",
	"peg": "_2SEqm6G7YNJjzn8yvwkkq-",
	"spinner": "_3IErG0E8QFggnYjtv7SBCX",
	"spinner-icon": "_2CLN_u7ERlgcTZuvisgOqI",
	"nprogress-spinner": "_3ioy5-d20vzEQXQGDS7Sox",
	"nprogress-custom-parent": "_1-zK-iuyhVQIjtpRuHVDKC"
};

/***/ }),

/***/ "YIil":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f1-d27da1beea848be5ac7881502bd22c7a.jpg";

/***/ }),

/***/ "a4i1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("Jxiz"));

const utils_1 = __webpack_require__("z4BS");

const is_dynamic_1 = __webpack_require__("BCwt");

const route_matcher_1 = __webpack_require__("VOyh");

const route_regex_1 = __webpack_require__("BukW");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "bBV7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("a4i1"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("/3ze"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "e+GP":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hdFj":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f4-c07e2b5aa66de157b6c1641b9b215773.jpg";

/***/ }),

/***/ "i5qa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInitialDataAside; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rOcY");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);

 // const limit = 6
// export default async function getInitialData() {
//   let posts = []
//   let categories = []
//   let compositions = []
//   let resPost = await Axios.get(config.host.base + config.path.base.posts + '?page=1&&limit=' + limit).catch((e) => {
//     console.log('Error: ', e.code)
//   })
//   let resCate = await Axios.get(config.host.base + config.path.base.categories).catch((e) => {
//     console.log('Error: ', e.code)
//   })
//   let resCompos = await Axios.get(config.host.base + config.path.base.compositions).catch((e) =>
//     console.log('Error: ', e.code)
//   )
//   posts = resPost && resPost.data != undefined ? resPost.data : []
//   categories = resCate && resCate.data != undefined ? resCate.data : []
//   compositions = (resCompos && resCompos.data) != undefined ? resCompos.data : []
//   return { posts: posts, categories: categories, compositions: compositions }
// }

async function getInitialDataAside() {
  let categories = [];
  let compositions = [];
  let resCate = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_config__WEBPACK_IMPORTED_MODULE_1___default.a.host.base + _config__WEBPACK_IMPORTED_MODULE_1___default.a.path.base.categories, {
    timeout: 5000
  }).catch(e => {
    console.log('Error: ', e.code);
  });
  let resCompos = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_config__WEBPACK_IMPORTED_MODULE_1___default.a.host.base + _config__WEBPACK_IMPORTED_MODULE_1___default.a.path.base.compositions, {
    timeout: 5000
  }).catch(e => console.log('Error: ', e.code));
  categories = resCate && resCate.data != undefined ? resCate.data : [];
  compositions = (resCompos && resCompos.data) != undefined ? resCompos.data : [];
  console.log(compositions);
  return {
    compositions: compositions,
    categories: categories
  };
}

/***/ }),

/***/ "iZfG":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f8-c9959de37753bcce560624d266a91048.jpg";

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "lytG":
/***/ (function(module, exports) {

module.exports = {
	"rdw-option-wrapper": "_3MHYnEl6_hMx_Eu9T5AR92",
	"rdw-option-active": "_1xn9eA8zZrA8akcxD5v_e7",
	"rdw-option-disabled": "_3mroT8KgsJRgsK2bwwi816",
	"rdw-dropdown-wrapper": "_17vdUmHXCmovJ5nh1WghxS",
	"rdw-dropdown-carettoopen": "_1VR1eKGXMkmZSHsOvzMr8Y",
	"rdw-dropdown-carettoclose": "_1fCdy2AyAwXYrH9ZVJr4Jk",
	"rdw-dropdown-selectedtext": "_2A0LqqixvgKZNslXELniZO",
	"rdw-dropdown-optionwrapper": "_1RLiu7R7KF6qUotadF4Onk",
	"rdw-dropdownoption-default": "_2z3-Rx5qjxmwotoozDnqrV",
	"rdw-dropdownoption-highlighted": "_17r8BLW37ySfJZvAcEAvfX",
	"rdw-dropdownoption-active": "_1igFl1-Gb_olapksijjVRA",
	"rdw-dropdownoption-disabled": "_2l4RMvoDtbaCtEkV377hfu",
	"rdw-inline-wrapper": "_1kQDhkwGRWdHFhvloILEy5",
	"rdw-inline-dropdown": "_3QjzLAwLlaDmYIRNM69Su0",
	"rdw-inline-dropdownoption": "Z_LZDmev7bDFw3YqkeV0H",
	"rdw-block-wrapper": "_3YuQaBbjB1cV9YMLWPHL_H",
	"rdw-block-dropdown": "_2UMWyZoZ0N1JwxJQNybXj7",
	"rdw-fontsize-wrapper": "uQWtnYoJel_9w_u2btcvD",
	"rdw-fontsize-dropdown": "_14m2fK-_mqUYFfDZb14aap",
	"rdw-fontsize-option": "_3I0O52c3vQOAA7ezWa_In2",
	"rdw-fontfamily-wrapper": "_2nVsLn4DqFRIz1-uWy7Rgr",
	"rdw-fontfamily-dropdown": "_3-sdjdygUSychnn0gJMcwn",
	"rdw-fontfamily-placeholder": "_10bBkyWrxeUfKlXaVsbzfP",
	"rdw-fontfamily-optionwrapper": "mwtNV6KaWoMnMsrksazcy",
	"rdw-list-wrapper": "_2q9K4hWalC7UgG5jiIcFE7",
	"rdw-list-dropdown": "_1JUkL0PSIIza0us3mSjyq",
	"rdw-list-dropdownOption": "ttdf3JAyVezzBCZLeCLDi",
	"rdw-text-align-wrapper": "_3aG75ZNc375-qiDmhpb1K0",
	"rdw-text-align-dropdown": "s1FBTNu6eB1YoiKmLDXVu",
	"rdw-text-align-dropdownOption": "_2JEJ8_N5TgCUfNZbBfjuHJ",
	"rdw-right-aligned-block": "JmI3dtc1yLjnFXuuJPcVB",
	"rdw-left-aligned-block": "_2bcLiXPtvvUTTPdq3sGEVO",
	"rdw-center-aligned-block": "_2Swudwshc4b-iZp3zFwoiU",
	"rdw-justify-aligned-block": "_21Gu8vx5Bpr0nsHTW4Zme0",
	"rdw-colorpicker-wrapper": "_1aK_-gPsHnWv9TROO7lMch",
	"rdw-colorpicker-modal": "_385zDvNN92S4TAp-weeSGm",
	"rdw-colorpicker-modal-header": "_2MEwyZD2rACx3Bn9QiaZMu",
	"rdw-colorpicker-modal-style-label": "_3j34eR51Uv_Gs681ez74Gl",
	"rdw-colorpicker-modal-style-label-active": "_32yZncwus5wd8X262jm0kZ",
	"rdw-colorpicker-modal-options": "_1TXoDpe13rxtQSIBBnFEPH",
	"rdw-colorpicker-cube": "_2Gr4gugqJ5LTnSIv9ExTam",
	"rdw-colorpicker-option": "_2IEKTngQyPllCtwy7FF7m2",
	"rdw-colorpicker-option-active": "_3HDE5xkFSZP_lUX-lLf6iV",
	"rdw-link-wrapper": "_1oAsZN8-kCF9FG62pjvJoB",
	"rdw-link-dropdown": "ER3r_ZQjam8Z1X-Uig4uQ",
	"rdw-link-dropdownOption": "_20vgUqachOHYCjtrgEYmjf",
	"rdw-link-dropdownPlaceholder": "_14GjRdEPupKUtI0d9Yux_k",
	"rdw-link-modal": "_2MGFIy-TRbx4g7bdsyqrtr",
	"rdw-link-modal-label": "_3EW88Lw025CqsXynFU3FkW",
	"rdw-link-modal-input": "_31OOOyCqoCrkHivkopUeg",
	"rdw-link-modal-buttonsection": "EnCGWoBk4vBxYJvO3wLvZ",
	"rdw-link-modal-target-option": "_35aZGpeYoNecsuVIWSfm9B",
	"rdw-link-modal-btn": "_2lBl1HWd_HsGNq20jK5QWw",
	"rdw-link-dropdownoption": "_3ZbdsWFNtG3MyV8rbBZc-0",
	"rdw-history-dropdown": "_2GZYLjR7aT8Lw_DeISxmGz",
	"rdw-embedded-wrapper": "-zYxcZBPSwSYgI1BmLVmL",
	"rdw-embedded-modal": "LSDjz1kv1JKc6wbp6u_WC",
	"rdw-embedded-modal-header": "_3RF3EyfmLyKRiTgBmg54EJ",
	"rdw-embedded-modal-header-option": "_3iRRxaFeLTMADhrBTGVbRw",
	"rdw-embedded-modal-header-label": "qAbKi6_B7JPn-L1RyI76g",
	"rdw-embedded-modal-link-section": "_27yY9QFVgO5j57OcsOK5T5",
	"rdw-embedded-modal-link-input": "_3Yu9W2AAq0TsIUV1Vo2_b4",
	"rdw-embedded-modal-link-input-wrapper": "auufR78R_tb9rqoUC1vMx",
	"rdw-embedded-modal-btn-section": "smJBVFTx7EAxwrF6YQ3Zt",
	"rdw-embedded-modal-btn": "_3WYQa_Dmx6H9viqYbny7aS",
	"rdw-embedded-modal-size": "_3PvSFMUINBZ_4pdsIs3GyQ",
	"rdw-embedded-modal-size-input": "xVqMUaV7kjbZ5OJvmqWf7",
	"rdw-emoji-wrapper": "D9bN7two7I4yCDzB7WjkE",
	"rdw-emoji-modal": "_1ehmc93PRnTe7zsV-4tS4F",
	"rdw-emoji-icon": "_5DYlrBpyD9Ubm86fNAVNY",
	"rdw-spinner": "_12I9B0U8Uwqli0m5Y4GFBJ",
	"sk-bouncedelay": "_2razka750lHwK51iR4jROA",
	"rdw-bounce1": "GnbCBENZSgTfqmpfrr7RQ",
	"rdw-bounce2": "_1E-5JM1EHIP-cY0QuCAVQq",
	"rdw-image-wrapper": "_3CqrlFPKUM0EjqphAa7p4t",
	"rdw-image-modal": "_1i0qr6ZXVbyxxmxIraTIvK",
	"rdw-image-modal-header": "SfvY-4lF_PKw_SNroRIR5",
	"rdw-image-modal-header-option": "_3hwY1o9FgNFbUddPkzWRFD",
	"rdw-image-modal-header-label": "gTrZWEjaazBrXuuNSpfUP",
	"rdw-image-modal-header-label-highlighted": "_32JTlzDni3X-dPiIY1e9N-",
	"rdw-image-modal-upload-option": "_3f06jiDFJ2ttEOsYOlBTgg",
	"rdw-image-modal-upload-option-highlighted": "gzVXM_-lrZj9J60FtJJXz",
	"rdw-image-modal-upload-option-label": "_34Osrqu0X4nnsUP7uEwxve",
	"rdw-image-modal-upload-option-image-preview": "_2X-avJgGePbWJpMRQHg3Sn",
	"rdw-image-modal-upload-option-input": "_3u1QtmVbOr1YfTTiiJYWVA",
	"rdw-image-modal-url-section": "IN6WP_JbQ-O6i84h7vTqY",
	"rdw-image-modal-url-input": "tbTpyu_JKElAfjQtHbzui",
	"rdw-image-modal-btn-section": "_1ISFq2ygpmJVmNzE7qRoYo",
	"rdw-image-modal-btn": "_2Gr5QWvlX0gArRPcPbbUv2",
	"rdw-image-modal-spinner": "_2aZD8ojcZYpJYrAkbgo0y6",
	"rdw-image-modal-alt-input": "wwzV_xdECGraXcPfl7JPV",
	"rdw-image-modal-alt-lbl": "Uyw5XnO1CotGcqGog-ccy",
	"rdw-image-modal-size": "_2BwjlOOdtshDyeBbZsDHxq",
	"rdw-image-modal-size-input": "X7L1B_rHzAwaUwlh20kkT",
	"rdw-image-mandatory-sign": "RHPPbU31T8__xhNl_h5_5",
	"rdw-remove-wrapper": "_3qYdAp8gqG8PX92f3m_ZM0",
	"rdw-history-wrapper": "_1f7SOTbOAv8V2glZ2jBYYf",
	"rdw-history-dropdownoption": "_1wkukdw7lToS8ybGh0wnkv",
	"rdw-link-decorator-wrapper": "objtQxIhOMJt43Fhz1fak",
	"rdw-link-decorator-icon": "wdqcYWqaNjanCU2WfNhZS",
	"rdw-mention-link": "Fizn-YuLmoPhQxTu3b4LW",
	"rdw-suggestion-wrapper": "_1PnYtQrqZxDTN5Mnu-0ciN",
	"rdw-suggestion-dropdown": "_13dxklpmu7WVsUTP3OyDA2",
	"rdw-suggestion-option": "JlZc8aK6byrjcccaaHV4F",
	"rdw-suggestion-option-active": "_3F382arA8YtQ0ti5No-izn",
	"rdw-hashtag-link": "_1UFaar4TV8Po3jydHEeizV",
	"rdw-image-alignment-options-popup": "_3D8u8yPtQxM6bp_-lsN-rv",
	"rdw-alignment-option-left": "_3uQssKdj4wqkcvcrcq-5hr",
	"rdw-image-alignment-option": "_2iOhJneE3PhEUj01CyRcvf",
	"rdw-image-alignment": "_3J2i8PMVRIDoDlaAANI3DL",
	"rdw-image-imagewrapper": "_2NMurzZeDl-wFg4GgzC2XO",
	"rdw-image-center": "tQbx6ZwBgmdZO9qSGa8ia",
	"rdw-image-left": "_2MwIi4Ok3iEx73xxMr8tBJ",
	"rdw-image-right": "_2Uyn0HQ2rT0XUXdP9loGiu",
	"rdw-image-alignment-options-popup-right": "_2akyDVJfyewYjRiQQRV85z",
	"rdw-editor-main": "_1ygQ-2npgzeqBWWcrgFB3S",
	"rdw-editor-toolbar": "y1LmqpS6qFN78EFdoRX84",
	"public-DraftStyleDefault-block": "_1xAigTSbAmz8AtXrQLw21a",
	"rdw-editor-wrapper": "_1nvWbIVM-Hw6yDjnqfpVBL",
	"DraftEditor-editorContainer": "_1XIWni2VEMwUjwDu8-UXLZ",
	"DraftEditor-root": "_2kvy48IFwDlVFOU0L-V443",
	"public-DraftEditor-content": "r78uXX6GNzpi22mns4EdV",
	"public-DraftEditor-block": "_3R6fj_hBQ4Pxwk7FmRVEO8",
	"DraftEditor-alignLeft": "_3DPpQnQu0sMBQUpHMeqYZB",
	"public-DraftEditorPlaceholder-root": "_3hcCqnreH1yAn83g2DmjRM",
	"DraftEditor-alignCenter": "_2TUcs5ik7gRRSp8ki2O0Mz",
	"DraftEditor-alignRight": "_1HYeUjIRP39EUVaQgyLjnz",
	"public-DraftEditorPlaceholder-hasFocus": "_7gHmUbaIS7bKyLy2fz4_b",
	"DraftEditorPlaceholder-hidden": "_1I3AB2lEIE3s8w3tJSWyBv",
	"public-DraftStyleDefault-ltr": "_1At4KYUVvQ5cXWRLAvLXYG",
	"public-DraftStyleDefault-rtl": "tx7ppLkAcyec3VCDYGRnu",
	"public-DraftStyleDefault-listLTR": "_2nsSH8ij9XvtSlz7DviqUs",
	"public-DraftStyleDefault-listRTL": "_3Ar8-u3_Vx6gMiV2HMPafH",
	"public-DraftStyleDefault-ol": "_1PvzzzyOc_eABEu2G7PgQH",
	"public-DraftStyleDefault-ul": "_2X707Do2NAVoMXW-vX787j",
	"public-DraftStyleDefault-depth0": "jKySngYDL2aPIc0DAGVSb",
	"public-DraftStyleDefault-depth1": "_2_9AiHSXDiXLozmKQinddP",
	"public-DraftStyleDefault-depth2": "_1y5U5onfXNK6iKRFWte2o_",
	"public-DraftStyleDefault-depth3": "_1UtsraSvaUlrMHiDuzkYZR",
	"public-DraftStyleDefault-depth4": "bLSwCQ1Df1xfS4NsAbli9",
	"public-DraftStyleDefault-unorderedListItem": "_1BTI0IZfXNghVihLI4nX8E",
	"public-DraftStyleDefault-orderedListItem": "_2W-OnsO2vPVOmx48lJAzdY",
	"public-DraftStyleDefault-reset": "_3ILqNrwqf1fsFFF0191enj"
};

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rOcY":
/***/ (function(module, exports) {

module.exports = {
  host: {
    base: 'http://1.2.3.127:9000',
    upload: 'http://1.2.3.127:9000',
    DB: 'mongodb://yp9tdlorbv:yp9tdlorbv@176.9.57.130:27017/yp9tdlorbv',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjkyMmMzZWViYjNlM2Y4MGUxYTY1NCIsImlhdCI6MTU4OTgwMTQ3NH0.E6KhxBFFZZ7mqBuMcg_1_vuyycEF6APiHLTfhkXFiO8',
    access_token: 'sOx6Ht1o4VexuHZTSy548J4ALjJzGQNS'
  },
  path: {
    upload: {
      upFile: '/multers'
    },
    base: {
      posts: '/posts',
      categories: '/categories',
      categoriesPosts: '/categories/posts/',
      compositions: '/compositions',
      compositionsPost: '/compositions/posts/',
      users: '/users',
      auth: '/auth?access_token=',
      tags: '/tags',
      postsFind: '/posts/find/',
      youtubes: '/youtubes'
    }
  },
  client: {
    posts: '/posts',
    adminPost: '/admin/posts',
    adminPostDetail: '/admin/posts/detail',
    adminComposition: '/admin/compositions',
    adminCategories: '/admin/categories',
    tags: '/tags/',
    categories: '/categories/',
    compositions: '/compositions/',
    search: '/search/',
    postsCategory: '/posts/category/',
    adminYoutube: '/admin/youtube'
  }
};

/***/ }),

/***/ "sGQ9":
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "t0fM":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f2-c42291a69b26827a93471748a19b9221.jpg";

/***/ }),

/***/ "te99":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f5-80b4f658c8ef91e2ada04b799cf558be.jpg";

/***/ }),

/***/ "uiLY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getParamsURL; });
const convertTitle = str => {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ');
  str = str.replace(/ + /g, ' ');
  str = str.trim();
  str = str.replace(/ /g, '-');
  return str;
};
const getParamsURL = url => {
  if (url.search('&') != -1) {
    return url.substring(url.search('v=') + 2, url.search('&'));
  } else {
    return url.substring(url.search('v=') + 2, url.length);
  }
};

/***/ }),

/***/ "vdEC":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("e+GP");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z4BS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "zVxs":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f3-998be2fee23cfde7ea444ea5c3be9f28.jpg";

/***/ }),

/***/ "zYPn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("CafY");
/* harmony import */ var _static_styles_home_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Qsx+");
/* harmony import */ var _static_styles_home_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_styles_home_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_aside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3VQ6");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5dyF");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("rOcY");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("i5qa");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("rKB8");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_convert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("uiLY");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const FilterPost = props => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.data);
  const {
    0: isLoad,
    1: setLoad
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isLoadBtn,
    1: setLoadBtn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {}, []);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    title: "Blush",
    compositions: props.compositions,
    categories: props.categories
  }, __jsx("div", {
    className: "site-branding"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/blush-classic"
  }, __jsx("img", {
    src: __webpack_require__("A/Ti")
  }))), __jsx("div", {
    className: "site-content"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-8"
  }, __jsx("div", {
    className: "site-main"
  }, __jsx("div", {
    className: "row"
  }, data && data.length > 0 ? data.map((item, index) => {
    return __jsx("div", {
      className: "col-md-6 col-12"
    }, __jsx("div", {
      className: "card-post"
    }, __jsx("div", {
      className: "card-entry-thumbnail"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: _config__WEBPACK_IMPORTED_MODULE_6___default.a.client.posts + "/" + Object(_utils_convert__WEBPACK_IMPORTED_MODULE_11__[/* convertTitle */ "a"])(item.title) + "_" + item.idPost
    }, __jsx("a", null, __jsx("div", {
      style: {
        backgroundImage: "url(" + `${_config__WEBPACK_IMPORTED_MODULE_6___default.a.host.upload + item.image}` + ")",
        backgroundPosition: "center center",
        backgroundSize: "cover"
      }
    }, __jsx("img", {
      style: {
        visibility: "hidden"
      },
      src: __webpack_require__("YIil")
    }))))), __jsx("div", {
      className: "card-entry-body"
    }, __jsx("div", {
      className: "card-entry-header"
    }, __jsx("h2", {
      className: "card-entry-title max-line"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: _config__WEBPACK_IMPORTED_MODULE_6___default.a.client.posts + "/" + Object(_utils_convert__WEBPACK_IMPORTED_MODULE_11__[/* convertTitle */ "a"])(item.title) + "_" + item.idPost
    }, __jsx("a", null, item.title)))), __jsx("div", {
      className: "card-entry-content"
    }, __jsx("p", {
      className: "max-line"
    }, item.description), __jsx("div", {
      className: "card-entry-meta"
    }, item.tags && item.tags.map((e, i) => {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: _config__WEBPACK_IMPORTED_MODULE_6___default.a.client.tags + Object(_utils_convert__WEBPACK_IMPORTED_MODULE_11__[/* convertTitle */ "a"])(e)
      }, __jsx("a", null, e, " ", i != item.tags.length - 1 ? ", " : null));
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: _config__WEBPACK_IMPORTED_MODULE_6___default.a.client.posts + "/" + Object(_utils_convert__WEBPACK_IMPORTED_MODULE_11__[/* convertTitle */ "a"])(item.title) + "_" + item.idPost
    }, __jsx("a", {
      className: "readmore"
    }, __jsx("button", {
      className: "btn read-more"
    }, "Read more")))))));
  }) : __jsx("h5", null, "Kh\xF4ng c\xF3 b\xE0i vi\u1EBFt n\xE0o ph\xF9 h\u1EE3p !")))), __jsx("div", {
    className: "col-lg-4"
  }, __jsx(_components_aside__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    categories: props.categories,
    compositions: props.compositions
  })))));
};

FilterPost.getInitialProps = async function (ctx) {
  const {
    req,
    res,
    query
  } = ctx;
  let data = {};

  switch (query.filterPost) {
    case "tags":
      let resTag = await axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(_config__WEBPACK_IMPORTED_MODULE_6___default.a.host.base + _config__WEBPACK_IMPORTED_MODULE_6___default.a.path.base.tags + "/" + query.name).catch(e => {
        console.log("Error: ", e.code);
      });
      console.log(resTag.data);
      data = resTag && resTag.data != undefined ? resTag.data : [];
      break;

    case "compositions":
      console.log(_config__WEBPACK_IMPORTED_MODULE_6___default.a.host.base + _config__WEBPACK_IMPORTED_MODULE_6___default.a.path.base.compositionsPost + query.name + "." + query.id);
      let resCom = await axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(_config__WEBPACK_IMPORTED_MODULE_6___default.a.host.base + _config__WEBPACK_IMPORTED_MODULE_6___default.a.path.base.compositionsPost + query.name + "." + query.id).catch(e => {
        console.log("Error: ", e.code);
      });
      console.log(resCom.data);
      data = resCom && resCom.data != undefined ? resCom.data : [];
      break;

    case "categories":
      console.log(_config__WEBPACK_IMPORTED_MODULE_6___default.a.host.base + _config__WEBPACK_IMPORTED_MODULE_6___default.a.path.base.categoriesPosts + query.name + "." + query.id);
      let resCate = await axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(_config__WEBPACK_IMPORTED_MODULE_6___default.a.host.base + _config__WEBPACK_IMPORTED_MODULE_6___default.a.path.base.categoriesPosts + query.name + "." + query.id).catch(e => {
        console.log("Error: ", e.code);
      });
      console.log(resCate.data);
      data = resCate && resCate.data != undefined ? resCate.data : [];
      break;

    case "search":
      var content = query.name.replace("-", " ");
      console.log("content", content);
      console.log(_config__WEBPACK_IMPORTED_MODULE_6___default.a.host.base + _config__WEBPACK_IMPORTED_MODULE_6___default.a.path.base.postsFind + content);
      let res = await axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(_config__WEBPACK_IMPORTED_MODULE_6___default.a.host.base + _config__WEBPACK_IMPORTED_MODULE_6___default.a.path.base.postsFind + content).catch(e => {
        console.log("Error: ", e.code);
      });
      console.log(res);
      data = res && res.data != undefined ? res.data : [];
      break;

    default:
      break;
  }

  const dataa = await Object(_store_data__WEBPACK_IMPORTED_MODULE_8__[/* getInitialDataAside */ "a"])();
  return _objectSpread({}, dataa, {
    data: data
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FilterPost);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });