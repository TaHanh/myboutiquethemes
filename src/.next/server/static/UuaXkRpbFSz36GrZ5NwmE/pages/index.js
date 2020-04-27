module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "3VQ6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aside; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Aside(props) {
  return __jsx("div", {
    className: "widget-area"
  }, __jsx("div", {
    className: "about-widget"
  }, __jsx("div", {
    className: "about-image",
    style: {
      backgroundImage: "url(" + `${__webpack_require__("CXrm")}` + ")"
    }
  }), __jsx("div", {
    className: "about-content"
  }, __jsx("h2", {
    className: "widget-title"
  }, "Welcome"), __jsx("p", {
    className: "about-text"
  }, "I'm Vivian, the blogger on The Blush Co. I write about interior design, my obsession with the latest beauty products and my love for fashion and style. Follow my journey!"), __jsx("a", {
    href: "#",
    className: "btn-more"
  }, "More about me"))), __jsx("div", {
    className: "social-media-widget"
  }, __jsx("h2", {
    className: "widget-title"
  }, "Let\u2019s get social"), __jsx("div", {
    className: "social-media-icons"
  }, __jsx("a", {
    href: "#"
  }, __jsx("i", {
    class: "fab fa-facebook-f"
  })), __jsx("a", {
    href: "#"
  }, __jsx("i", {
    class: "fab fa-instagram"
  })), __jsx("a", {
    href: "#"
  }, __jsx("i", {
    class: "fab fa-twitter"
  })), __jsx("a", {
    href: "#"
  }, __jsx("i", {
    class: "fas fa-heart"
  })), __jsx("a", {
    href: "#"
  }, __jsx("i", {
    class: "fab fa-facebook-f"
  })))), __jsx("div", {
    className: "widget_text"
  }, __jsx("div", {
    className: "widget-title"
  }, "Currently Craving")), __jsx("div", {
    className: "category"
  }, __jsx("h2", {
    className: "widget-title"
  }, "What you can find here"), __jsx("ul", null, __jsx("li", {
    className: "cat-item"
  }, __jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/beauty/"
  }, "Beauty")), __jsx("li", {
    className: "cat-item"
  }, __jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/beauty/"
  }, "Fashion")), __jsx("li", {
    className: "cat-item"
  }, __jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/beauty/"
  }, "Lifestyle")), __jsx("li", {
    className: "cat-item"
  }, __jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/beauty/"
  }, "Outfits")), __jsx("li", {
    className: "cat-item"
  }, __jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/beauty/"
  }, "Personal")), __jsx("li", {
    className: "cat-item"
  }, __jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/beauty/"
  }, "Travel")))), __jsx("div", {
    className: "featured-post-widget"
  }, __jsx("h2", {
    className: "widget-title"
  }, "Favorite Article"), __jsx("div", {
    className: "featured-post"
  }, __jsx("div", {
    className: "entry-thumbnail"
  }, __jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, __jsx("img", {
    src: __webpack_require__("82Us")
  }))), __jsx("div", {
    className: "entry-header"
  }, __jsx("div", {
    className: "entry-title"
  }, __jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, "What I learnt from Blogging in the last 5 Years")), __jsx("div", {
    className: "posted-on"
  }, __jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, __jsx("time", null, "4. Mai 2019")))))), __jsx("div", {
    className: "nav-menu"
  }, __jsx("h2", {
    className: "widget-title"
  }, "Favorite Shops"), __jsx("ul", null, __jsx("li", {
    className: "cat-item"
  }, __jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/beauty/"
  }, "Asos")), __jsx("li", {
    className: "cat-item"
  }, __jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/beauty/"
  }, "H&M")), __jsx("li", {
    className: "cat-item"
  }, __jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/beauty/"
  }, "& Other Stories")), __jsx("li", {
    className: "cat-item"
  }, __jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/beauty/"
  }, "Zara")))));
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


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

/***/ "7GLh":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/the_tonik_b-a4f411da3b882a725f3e2a950f53cef1.jpg";

/***/ }),

/***/ "82Us":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/the_tonik-014671fdbd9cca3e2f380c95508fa02c.jpg";

/***/ }),

/***/ "95C+":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dex_ezekiel-9d00142bc8f1f3a6b59fd52f65ce2949.jpg";

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

/***/ "Ab+T":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/yt1-eb65662d9f6327116ae11180dc73047a.jpg";

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

/***/ "CXrm":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/kipa_chan-0c3a5564eff55502aaa23bccbdeeb8f6.jpg";

/***/ }),

/***/ "CafY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__("5dyF");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./static/styles/style.scss
var style = __webpack_require__("UOsd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

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
      backgroundImage: "url(" + `${__webpack_require__("YIil")}` + ")",
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
      backgroundImage: "url(" + `${__webpack_require__("t0fM")}` + ")",
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
      backgroundImage: "url(" + `${__webpack_require__("zVxs")}` + ")",
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
      backgroundImage: "url(" + `${__webpack_require__("hdFj")}` + ")",
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
      backgroundImage: "url(" + `${__webpack_require__("te99")}` + ")",
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
      backgroundImage: "url(" + `${__webpack_require__("Fp8I")}` + ")",
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
      backgroundImage: "url(" + `${__webpack_require__("DIPZ")}` + ")",
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
      backgroundImage: "url(" + `${__webpack_require__("iZfG")}` + ")",
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
      backgroundImage: "url(" + `${__webpack_require__("DIPZ")}` + ")",
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
      backgroundImage: "url(" + `${__webpack_require__("iZfG")}` + ")",
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
    href: "https://demo.myboutiquethemes.com/blush-classic/category/travel/"
  }, "Travel")), __jsx("li", {
    className: "footer-menu-item"
  }, __jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/fashion/"
  }, "Fashion")), __jsx("li", {
    className: "footer-menu-item"
  }, __jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/"
  }, "Lifestyle")), __jsx("li", {
    className: "footer-menu-item"
  }, __jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/contact/"
  }, "Shop my Style"))), __jsx("div", {
    className: "footer-info"
  }, __jsx("p", {
    className: "copyright"
  }, "Your copyright notice. 2020."), __jsx("a", {
    href: "https://www.etsy.com/de/shop/MyBoutiqueThemes",
    target: "_blank"
  }, "Blush Co. WordPress Theme"), " by My Boutique Themes."))));
}
// CONCATENATED MODULE: ./components/header.js

var header_jsx = external_react_default.a.createElement;


function Header(props) {
  return header_jsx("header", {
    className: "fixed-top"
  }, header_jsx("nav", {
    class: "navbar navbar-expand-lg navbar-light"
  }, header_jsx("button", {
    class: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarTogglerDemo01",
    "aria-controls": "navbarTogglerDemo01",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, header_jsx("span", {
    class: "navbar-toggler-icon"
  }), header_jsx("span", {
    className: "navbar-txt"
  }, "MENU")), header_jsx("div", {
    className: "search-icon d-lg-none"
  }, header_jsx("i", {
    class: "fas fa-search"
  })), header_jsx("div", {
    class: "collapse navbar-collapse",
    id: "navbarTogglerDemo01"
  }, header_jsx("ul", {
    class: "navbar-nav mr-auto mt-2 mt-lg-0"
  }, header_jsx("li", {
    class: "nav-item"
  }, header_jsx("a", {
    class: "nav-link",
    href: "#"
  }, "About Me")), header_jsx("li", {
    class: "nav-item"
  }, header_jsx("a", {
    class: "nav-link",
    href: "#"
  }, "Lifestyle")), header_jsx("li", {
    class: "nav-item"
  }, header_jsx("a", {
    class: "nav-link d-lg-block d-none"
  }, "Fashion ", header_jsx("i", {
    class: "fas fa-angle-down"
  })), header_jsx("a", {
    class: "nav-link d-block d-lg-none",
    "data-toggle": "collapse",
    href: "#collapseOne",
    "aria-expanded": "false"
  }, "Fashion ", header_jsx("i", {
    class: "fas fa-angle-down"
  })), header_jsx("ul", {
    className: "sub-menu",
    id: "collapseOne"
  }, header_jsx("li", {
    className: "menu-item"
  }, header_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/outfits/"
  }, "Outfits")))), header_jsx("li", {
    class: "nav-item"
  }, header_jsx("a", {
    class: "nav-link",
    href: "#"
  }, "Beauty")), header_jsx("li", {
    class: "nav-item"
  }, header_jsx("a", {
    class: "nav-link",
    href: "#"
  }, "Travel")), header_jsx("li", {
    class: "nav-item"
  }, header_jsx("a", {
    class: "nav-link d-lg-block d-none"
  }, "Page Templates  ", header_jsx("i", {
    class: "fas fa-angle-down"
  })), header_jsx("a", {
    class: "nav-link d-block d-lg-none",
    "data-toggle": "collapse",
    href: "#collapseTwo",
    "aria-expanded": "false"
  }, "Page Templates  ", header_jsx("i", {
    class: "fas fa-angle-down"
  })), header_jsx("ul", {
    className: "sub-menu",
    id: "collapseTwo"
  }, header_jsx("li", {
    className: "menu-item"
  }, header_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/contact/"
  }, "Boutique")), header_jsx("li", {
    className: "menu-item"
  }, header_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/instagram-page/"
  }, "Instagram Page")), header_jsx("li", {
    className: "menu-item"
  }, header_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/landing-page/"
  }, "Landing Page"))))), header_jsx("form", {
    class: "form-inline my-2 my-lg-0"
  }, header_jsx("div", {
    className: "social-media-icons"
  }, header_jsx("a", {
    href: "#"
  }, header_jsx("i", {
    class: "fab fa-facebook-f"
  })), header_jsx("a", {
    href: "#"
  }, header_jsx("i", {
    class: "fab fa-instagram"
  })), header_jsx("a", {
    href: "#"
  }, header_jsx("i", {
    class: "fab fa-twitter"
  })), header_jsx("a", {
    href: "#"
  }, header_jsx("i", {
    class: "fas fa-heart"
  })), header_jsx("a", {
    href: "#"
  }, header_jsx("i", {
    class: "fab fa-facebook-f"
  }))), header_jsx("div", {
    className: "search-icon"
  }, header_jsx("i", {
    class: "fas fa-search"
  }))))));
}
// EXTERNAL MODULE: ./components/aside.js
var aside = __webpack_require__("3VQ6");

// CONCATENATED MODULE: ./components/layout.js

var layout_jsx = external_react_default.a.createElement;






/* harmony default export */ var layout = __webpack_exports__["a"] = (({
  children,
  title = 'title'
}) => {
  return layout_jsx("div", {
    className: "container-layout"
  }, layout_jsx(head_default.a, null, layout_jsx("title", null, title)), layout_jsx(Header, null), layout_jsx("div", {
    style: {
      height: '50px'
    }
  }), layout_jsx("main", null, layout_jsx("div", {
    className: "content-area"
  }, layout_jsx("div", {
    className: "site-branding"
  }, layout_jsx("a", null, layout_jsx("img", {
    src: __webpack_require__("A/Ti")
  }))), children)), layout_jsx(Footer, null));
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

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Qsx+":
/***/ (function(module, exports) {



/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// EXTERNAL MODULE: ./components/layout.js + 2 modules
var layout = __webpack_require__("CafY");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/home.js

var __jsx = external_react_default.a.createElement;



function Home(props) {
  const router = Object(router_["useRouter"])();

  const handleClick = e => {
    e.preventDefault();
    router.push('/about/[title]'); // Router.push({
    //    pathname: '/about',
    //    query: { name: 'Zeit' },
    //  })
  };

  return __jsx("div", null, __jsx(layout["a" /* default */], {
    title: "Contact us"
  }, __jsx("div", {
    onClick: handleClick
  }, props.title)));
}
// EXTERNAL MODULE: ./static/styles/home.scss
var home = __webpack_require__("Qsx+");

// EXTERNAL MODULE: ./components/aside.js
var aside = __webpack_require__("3VQ6");

// EXTERNAL MODULE: ../node_modules/slick-carousel/slick/slick.scss
var slick = __webpack_require__("dghS");

// EXTERNAL MODULE: ./static/styles/slick-carousel/slick-theme.scss
var slick_theme = __webpack_require__("YwCF");

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// CONCATENATED MODULE: ./components/slick-carousel.js

var slick_carousel_jsx = external_react_default.a.createElement;
 // import "slick-carousel/slick/slick-theme.scss";



function SlickCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return slick_carousel_jsx(external_react_slick_default.a, settings, slick_carousel_jsx("div", null, slick_carousel_jsx("h3", null, "1")), slick_carousel_jsx("div", null, slick_carousel_jsx("h3", null, "2")), slick_carousel_jsx("div", null, slick_carousel_jsx("h3", null, "3")), slick_carousel_jsx("div", null, slick_carousel_jsx("h3", null, "4")), slick_carousel_jsx("div", null, slick_carousel_jsx("h3", null, "5")), slick_carousel_jsx("div", null, slick_carousel_jsx("h3", null, "6")));
}
// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;







function pages_Home(props) {
  return pages_jsx(layout["a" /* default */], {
    title: "Beauty Favorites for Summer – Blush "
  }, pages_jsx("div", {
    className: "site-content"
  }, pages_jsx("div", {
    className: "row"
  }, pages_jsx("div", {
    className: "col-lg-8"
  }, pages_jsx("div", {
    className: "site-main"
  }, pages_jsx("div", {
    className: "entry-thumbnail"
  }, pages_jsx("img", {
    src: __webpack_require__("7GLh")
  })), pages_jsx("div", {
    className: "entry-body"
  }, pages_jsx("div", {
    className: "entry-header"
  }, pages_jsx("div", {
    className: "entry-meta"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/"
  }, "LIFESTYLE"), ",", pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/travel/"
  }, " TRAVEL")), pages_jsx("h1", {
    className: "entry-title"
  }, "WHAT I LEARNT FROM BLOGGING IN THE LAST 5 YEARS")), pages_jsx("div", {
    className: "entry-content"
  }, pages_jsx("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam \u2026"), pages_jsx("div", {
    className: "shop-the-post"
  }, pages_jsx("h3", null, "Shop this Post"), pages_jsx("div", {
    className: "shop-the-post-container"
  }, pages_jsx("p", null), pages_jsx(SlickCarousel, null))), pages_jsx("a", {
    className: "readmore",
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, pages_jsx("button", {
    className: "btn read-more"
  }, "Read more"))), pages_jsx("div", {
    className: "entry-footer"
  }, pages_jsx("a", {
    className: "comments-link",
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/#respond"
  }, "Leave a Comment"), pages_jsx("div", {
    className: "share"
  }, pages_jsx("a", {
    href: "mailto:?subject=Beauty Favorites for Summer&body=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/",
    target: "_blank"
  }, pages_jsx("i", {
    class: "far fa-envelope"
  })), pages_jsx("a", {
    href: "http://www.facebook.com/sharer.php?u=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/&t=Beauty Favorites for Summer",
    target: "_blank"
  }, pages_jsx("i", {
    class: "fab fa-facebook-f"
  })), pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/wp-content/uploads/sites/14/2019/04/blush-flowers.jpg",
    target: "_blank"
  }, pages_jsx("i", {
    class: "fab fa-pinterest"
  })), pages_jsx("a", {
    href: "https://twitter.com/share?text=Beauty Favorites for Summer&url=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/"
  }, pages_jsx("i", {
    class: "fab fa-twitter"
  }))))), pages_jsx("div", {
    className: "row"
  }, pages_jsx("div", {
    className: "col-md-6 col-12"
  }, pages_jsx("div", {
    className: "small"
  }, pages_jsx("div", {
    className: "entry-thumbnail"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/"
  }, pages_jsx("img", {
    className: "w-100",
    src: __webpack_require__("iLhY")
  }))), pages_jsx("div", {
    className: "entry-body"
  }, pages_jsx("div", {
    className: "entry-header"
  }, pages_jsx("div", {
    className: "entry-meta"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/"
  }, "LIFESTYLE"), ",", pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/travel/"
  }, " TRAVEL")), pages_jsx("h2", {
    className: "entry-title"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/"
  }, "Beauty Favorites for Summer"))), pages_jsx("div", {
    className: "entry-content"
  }, pages_jsx("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam \u2026"), pages_jsx("a", {
    className: "readmore",
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, pages_jsx("button", {
    className: "btn read-more"
  }, "Read more")))))), pages_jsx("div", {
    className: "col-md-6 col-12"
  }, pages_jsx("div", {
    className: "small"
  }, pages_jsx("div", {
    className: "entry-thumbnail"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/"
  }, pages_jsx("img", {
    className: "w-100",
    src: __webpack_require__("q5MH")
  }))), pages_jsx("div", {
    className: "entry-body"
  }, pages_jsx("div", {
    className: "entry-header"
  }, pages_jsx("div", {
    className: "entry-meta"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/"
  }, "LIFESTYLE"), ",", pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/personal/"
  }, "  PERSONAL")), pages_jsx("h2", {
    className: "entry-title"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/"
  }, "HOW TO MOVE TO ANOTHER CITY AND FIND NEW FRIENDS"))), pages_jsx("div", {
    className: "entry-content"
  }, pages_jsx("a", {
    className: "readmore",
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, pages_jsx("button", {
    className: "btn read-more"
  }, "Read more")))))), pages_jsx("div", {
    className: "col-md-6 col-12"
  }, pages_jsx("div", {
    className: "small"
  }, pages_jsx("div", {
    className: "entry-thumbnail"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/"
  }, pages_jsx("img", {
    className: "w-100",
    src: __webpack_require__("hqL+")
  }))), pages_jsx("div", {
    className: "entry-body"
  }, pages_jsx("div", {
    className: "entry-header"
  }, pages_jsx("div", {
    className: "entry-meta"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/fashion/"
  }, "FASHION"), ",", pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/outfits/"
  }, " OUTFITS")), pages_jsx("h2", {
    className: "entry-title"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/"
  }, "FASHION PIECES FOR THE NEW SEASON"))), pages_jsx("div", {
    className: "entry-content"
  }, pages_jsx("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."), pages_jsx("a", {
    className: "readmore",
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, pages_jsx("button", {
    className: "btn read-more"
  }, "Read more")))))), pages_jsx("div", {
    className: "col-md-6 col-12"
  }, pages_jsx("div", {
    className: "small"
  }, pages_jsx("div", {
    className: "entry-thumbnail"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/"
  }, pages_jsx("img", {
    className: "w-100",
    src: __webpack_require__("jGH4")
  }))), pages_jsx("div", {
    className: "entry-body"
  }, pages_jsx("div", {
    className: "entry-header"
  }, pages_jsx("div", {
    className: "entry-meta"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/"
  }, "LIFESTYLE")), pages_jsx("h2", {
    className: "entry-title"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/"
  }, "MY FAVORITE BOOKS, WEBSITES AND PODCASTS FOR PERSONAL DEVELOPMENT"))), pages_jsx("div", {
    className: "entry-content"
  }, pages_jsx("a", {
    className: "readmore",
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, pages_jsx("button", {
    className: "btn read-more"
  }, "Read more")))))), pages_jsx("div", {
    className: "col-md-6 col-12"
  }, pages_jsx("div", {
    className: "small"
  }, pages_jsx("div", {
    className: "entry-thumbnail"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/"
  }, pages_jsx("img", {
    className: "w-100",
    src: __webpack_require__("95C+")
  }))), pages_jsx("div", {
    className: "entry-body"
  }, pages_jsx("div", {
    className: "entry-header"
  }, pages_jsx("div", {
    className: "entry-meta"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/"
  }, "LIFESTYLE")), pages_jsx("h2", {
    className: "entry-title"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/"
  }, "HOW TO STYLE YOUR APARTMENT WITH FLOWERS"))), pages_jsx("div", {
    className: "entry-content"
  }, pages_jsx("a", {
    className: "readmore",
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, pages_jsx("button", {
    className: "btn read-more"
  }, "Read more")))))), pages_jsx("div", {
    className: "col-md-6 col-12"
  }, pages_jsx("div", {
    className: "small"
  }, pages_jsx("div", {
    className: "entry-thumbnail"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/"
  }, pages_jsx("img", {
    className: "w-100",
    src: __webpack_require__("g5Tp")
  }))), pages_jsx("div", {
    className: "entry-body"
  }, pages_jsx("div", {
    className: "entry-header"
  }, pages_jsx("div", {
    className: "entry-meta"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/"
  }, "BEAUTY"), ",", pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/travel/"
  }, " LIFESTYLE")), pages_jsx("h2", {
    className: "entry-title"
  }, pages_jsx("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/"
  }, "THE NEW GUCCI BEAUTY COLLECTION"))), pages_jsx("div", {
    className: "entry-content"
  }, pages_jsx("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam \u2026"), pages_jsx("a", {
    className: "readmore",
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, pages_jsx("button", {
    className: "btn read-more"
  }, "Read more"))))))))), pages_jsx("div", {
    className: "col-lg-4"
  }, pages_jsx(aside["a" /* default */], null)))), pages_jsx("div", {
    className: "after-content-home"
  }, pages_jsx("h2", {
    class: "widgettitle"
  }, "Follow my Youtube Journey"), pages_jsx("div", {
    className: "youtube-gallery"
  }, pages_jsx("div", {
    className: "row"
  }, pages_jsx("div", {
    className: "col-md-4"
  }, pages_jsx("div", {
    class: "youtube-video"
  }, pages_jsx("a", {
    href: "https://www.youtube.com/watch?v=5S4y_GpaU-c",
    title: "CHANGE YOUR APPEARANCE with LOA & Self-Love",
    target: "_blank",
    rel: "nofollow"
  }, pages_jsx("div", {
    class: "youtube-thumb"
  }, pages_jsx("img", {
    className: "w-100",
    src: __webpack_require__("Ab+T"),
    alt: "CHANGE YOUR APPEARANCE with LOA & Self-Love"
  }), pages_jsx("img", {
    className: "icon",
    src: __webpack_require__("VmzP")
  })), pages_jsx("h3", {
    class: "video-title"
  }, "CHANGE YOUR APPEARANCE with LOA & Self-Love")))), pages_jsx("div", {
    className: "col-md-4"
  }, pages_jsx("div", {
    class: "youtube-video"
  }, pages_jsx("a", {
    href: "https://www.youtube.com/watch?v=-I9S1F_zTCM",
    title: "CHANGE YOUR APPEARANCE with LOA & Self-Love",
    target: "_blank",
    rel: "nofollow"
  }, pages_jsx("div", {
    class: "youtube-thumb"
  }, pages_jsx("img", {
    className: "w-100",
    src: __webpack_require__("T4+H"),
    alt: "CHANGE YOUR APPEARANCE with LOA & Self-Love"
  }), pages_jsx("img", {
    className: "icon",
    src: __webpack_require__("VmzP")
  })), pages_jsx("h3", {
    class: "video-title"
  }, "I May Never Get Married... | EGO vs SOUL Journey")))), pages_jsx("div", {
    className: "col-md-4"
  }, pages_jsx("div", {
    class: "youtube-video"
  }, pages_jsx("a", {
    href: "https://www.youtube.com/watch?v=PkzAJ4oKqQU",
    title: "CHANGE YOUR APPEARANCE with LOA & Self-Love",
    target: "_blank",
    rel: "nofollow"
  }, pages_jsx("div", {
    class: "youtube-thumb"
  }, pages_jsx("img", {
    className: "w-100",
    src: __webpack_require__("oR6L"),
    alt: "CHANGE YOUR APPEARANCE with LOA & Self-Love"
  }), pages_jsx("img", {
    className: "icon",
    src: __webpack_require__("VmzP")
  })), pages_jsx("h3", {
    class: "video-title"
  }, "VIPASSANA: One Year Later..."))))))));
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ }),

/***/ "T4+H":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/yt2-1e619130efd64f2c9735b90e0c646e38.jpg";

/***/ }),

/***/ "UOsd":
/***/ (function(module, exports) {



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

/***/ "VmzP":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACP0lEQVRoge3ZzW8NURjH8Y9yExKhJUWQqKRNy0bY+AcqYuOPsJHY2EosbKwl/hgWXtI/QEgjCCmCtA0qbQnqrWVx7iTT09GZ25n7QuabPMnMycx5nt+ZM895o6ampqampsamgs81MIwRHMA+7Mdu7EA/djavG813tmJbqo7P+Nm8XsKnlM3jPd5hGrN4ijcb0LSGIVzFQ/zA7y7YR0zgvNAwLXNOaMFuBP83e4SjrYg4i+UeCDzLXmEwK+jNGfe3hD7fi/QLjXw378Fjut/qefYyK/C+6H44T2kPcFjIkKuIhRzqTCylGY0L/lUhR+KCWMhQSQenhDTZbsbiglhIZmprgTs4LgxgcyXrWo/cnjOpXEZJswvXhWlJ1Znrdp6QqQqFJIziRsVCJvOEzLRBSMK48P9UIWQmT8hiG4UQZsYXsVDSz3c5M/eys9yiJP/PrxK+Vg2KcdbqFEXXQRuuo+wnzyPpWmW78LKcjzDdRiHjeFyy/sTmc3x51gYhY6pPv5kz4DQPKhTSzgHxfhz4luj+S57SAjRwAVcwUEF9WSzGBbGQtyUdnME1GZO6ipmNC2Ihz0s6uFny/aK8iAviFFZWSKdY87P/t0KeYKUzsWyYFWGYWEUsZE7Y2etlJhRctJ3AV9Xn/irsG062ovq0sKHc7cDT9kHYBW2ZQVzCPWH3vBvBLzX9X8ae9YItOp3uExb8I8JxwkHsbdqAcJyQWHKU0MD2VB3rHSssCD0gfawwhdd6P/nU1NTU1NT0Dn8AGXx2NWoKMM8AAAAASUVORK5CYII="

/***/ }),

/***/ "YIil":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f1-d27da1beea848be5ac7881502bd22c7a.jpg";

/***/ }),

/***/ "YwCF":
/***/ (function(module, exports) {



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

/***/ "dghS":
/***/ (function(module, exports) {



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

/***/ "g5Tp":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/the_tonik_nik-5412a6604364b17c6aee18950fcb5639.jpg";

/***/ }),

/***/ "hdFj":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f4-c07e2b5aa66de157b6c1641b9b215773.jpg";

/***/ }),

/***/ "hqL+":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/kipa_chan_b-c78192ad596d84ee53a9b2a8de263fec.jpg";

/***/ }),

/***/ "iLhY":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blush_flowers_b-7eb42996804bfdf6c53a77f62ba62ea9.jpg";

/***/ }),

/***/ "iZfG":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f8-c9959de37753bcce560624d266a91048.jpg";

/***/ }),

/***/ "jGH4":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/alyssa_strohmann-baf005ff46476c1ce2de18d07a0a0ad5.jpg";

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "oR6L":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/yt3-e2762c01e031742b365bf137357b67d3.jpg";

/***/ }),

/***/ "q5MH":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/the_tonik_women-a1796bae0b4c0f1a095c0bbc760c9e37.jpg";

/***/ }),

/***/ "t0fM":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f2-c42291a69b26827a93471748a19b9221.jpg";

/***/ }),

/***/ "te99":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f5-80b4f658c8ef91e2ada04b799cf558be.jpg";

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

/***/ })

/******/ });