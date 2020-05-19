module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/Rj":
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

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

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "16nl":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/s6-04cfbee425770ba511632ee9ea4bea9b.jpg";

/***/ }),

/***/ "3VQ6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("fFdx");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-id-swiper"
var external_react_id_swiper_ = __webpack_require__("+/Rj");
var external_react_id_swiper_default = /*#__PURE__*/__webpack_require__.n(external_react_id_swiper_);

// CONCATENATED MODULE: ./components/swiper.js

/* harmony default export */ var swiper = (props => {
  var images = [{
    img: __webpack_require__("d0Xs"),
    title: "Get Sale Alert"
  }, {
    img: __webpack_require__("X5tz"),
    title: "Get Sale Alert"
  }, {
    img: __webpack_require__("HRFF"),
    title: "Get Sale Alert"
  }, {
    img: __webpack_require__("fBbb"),
    title: "Get Sale Alert"
  }, {
    img: __webpack_require__("ayor"),
    title: "Get Sale Alert"
  }, {
    img: __webpack_require__("16nl"),
    title: "Get Sale Alert"
  }, {
    img: __webpack_require__("gtTT"),
    title: "Get Sale Alert"
  }];
  return /*#__PURE__*/React.createElement(external_react_id_swiper_default.a, props.params, images.map((item, index) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "item-swiper"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, /*#__PURE__*/React.createElement("div", {
      className: "item-swiper-img",
      style: {
        backgroundImage: "url(" + "".concat(item.img) + ")"
      }
    }, /*#__PURE__*/React.createElement("img", {
      style: {},
      src: images[1].img
    })), /*#__PURE__*/React.createElement("div", {
      className: "item-swiper-title"
    }, /*#__PURE__*/React.createElement("i", {
      class: "far fa-heart"
    }), /*#__PURE__*/React.createElement("span", null, item.title))));
  }));
});
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");

// CONCATENATED MODULE: ./components/aside.js






function Aside(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "widget-area"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-image",
    style: {
      backgroundImage: 'url(' + "".concat(__webpack_require__("CXrm")) + ')'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "about-content"
  }, /*#__PURE__*/React.createElement("img", {
    className: "widget-title",
    src: __webpack_require__("NXdW")
  }), /*#__PURE__*/React.createElement("p", {
    className: "about-text"
  }, "I'm Vivian, the blogger on The Blush Co. I write about interior design, my obsession with the latest beauty products and my love for fashion and style. Follow my journey!"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn-more"
  }, "More about me"))), /*#__PURE__*/React.createElement("div", {
    className: "social-media-widget"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "widget-title"
  }, "Let\u2019s get social"), /*#__PURE__*/React.createElement("div", {
    className: "social-media-icons"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    class: "fab fa-facebook-f"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    class: "fab fa-instagram"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    class: "fas fa-heart"
  })))), props.compositions && props.compositions.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "category"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "widget-title"
  }, "What you can find here"), /*#__PURE__*/React.createElement("ul", null, props.compositions && props.compositions.map((item, index) => {
    return /*#__PURE__*/React.createElement("li", {
      className: "cat-item"
    }, /*#__PURE__*/React.createElement("a", {
      href: ""
    }, item.name));
  }))) : null, /*#__PURE__*/React.createElement("div", {
    className: "featured-post-widget"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "widget-title"
  }, "Favorite Article"), /*#__PURE__*/React.createElement("div", {
    className: "featured-post"
  }, /*#__PURE__*/React.createElement("div", {
    className: "entry-thumbnail"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, /*#__PURE__*/React.createElement("img", {
    src: __webpack_require__("82Us")
  }))), /*#__PURE__*/React.createElement("div", {
    className: "entry-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "entry-title"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, "What I learnt from Blogging in the last 5 Years")), /*#__PURE__*/React.createElement("div", {
    className: "posted-on"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, /*#__PURE__*/React.createElement("time", null, "4. Mai 2019")))))), props.categories && props.categories.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "nav-menu"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "widget-title"
  }, "Favorite Shops"), /*#__PURE__*/React.createElement("ul", null, props.categories && props.categories.map((item, index) => {
    return /*#__PURE__*/React.createElement("li", {
      className: "cat-item"
    }, /*#__PURE__*/React.createElement("a", {
      href: "/"
    }, item.name));
  }))) : null);
}

Aside.getInitialProps = /*#__PURE__*/asyncToGenerator_default()(function* () {
  var categories = []; // console.log('res.data')
  // Axios.get('http://1.2.3.127:9000/categories')
  //   .then((res) => {
  //     console.log(res.data)
  //     categories = res.data
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  return {
    categories: categories
  };
});
/* harmony default export */ var aside = __webpack_exports__["a"] = (Aside);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Urqi");


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

/***/ "82Us":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/the_tonik-014671fdbd9cca3e2f380c95508fa02c.jpg";

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


function Footer(props) {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "footer-title"
  }, "Follow Me Around"), /*#__PURE__*/React.createElement("div", {
    className: "row mx-0 justify-content-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12-8 px-0 col-12"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "url(" + "".concat(__webpack_require__("YIil")) + ")",
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/React.createElement("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12-8 px-0 col-12"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "url(" + "".concat(__webpack_require__("t0fM")) + ")",
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/React.createElement("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12-8 px-0 col-12"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "url(" + "".concat(__webpack_require__("zVxs")) + ")",
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/React.createElement("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12-8 px-0 col-12"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "url(" + "".concat(__webpack_require__("hdFj")) + ")",
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/React.createElement("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12-8 px-0 col-12"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "url(" + "".concat(__webpack_require__("te99")) + ")",
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/React.createElement("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12-8 px-0 col-12"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "url(" + "".concat(__webpack_require__("Fp8I")) + ")",
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/React.createElement("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12-8 px-0 d-sm-block d-none"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "url(" + "".concat(__webpack_require__("DIPZ")) + ")",
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/React.createElement("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12-8 px-0 d-sm-block d-none"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "url(" + "".concat(__webpack_require__("iZfG")) + ")",
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/React.createElement("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-6 px-0 d-block d-sm-none"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "url(" + "".concat(__webpack_require__("DIPZ")) + ")",
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/React.createElement("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-6 px-0 d-block d-sm-none"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: "url(" + "".concat(__webpack_require__("iZfG")) + ")",
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/React.createElement("img", {
    style: {
      visibility: 'hidden'
    },
    src: __webpack_require__("YIil")
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "footer-menu"
  }, /*#__PURE__*/React.createElement("li", {
    className: "footer-menu-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/travel/"
  }, "Travel")), /*#__PURE__*/React.createElement("li", {
    className: "footer-menu-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/fashion/"
  }, "Fashion")), /*#__PURE__*/React.createElement("li", {
    className: "footer-menu-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/"
  }, "Lifestyle")), /*#__PURE__*/React.createElement("li", {
    className: "footer-menu-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/contact/"
  }, "Shop my Style"))), /*#__PURE__*/React.createElement("div", {
    className: "footer-info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "copyright"
  }, "Your copyright notice. 2020."), /*#__PURE__*/React.createElement("a", {
    href: "https://www.etsy.com/de/shop/MyBoutiqueThemes",
    target: "_blank"
  }, "Blush Co. WordPress Theme"), " by My Boutique Themes."))));
}
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// CONCATENATED MODULE: ./components/header.js




function Header(props) {
  return /*#__PURE__*/React.createElement("header", {
    className: "fixed-top"
  }, /*#__PURE__*/React.createElement("nav", {
    class: "navbar navbar-expand-lg navbar-light"
  }, /*#__PURE__*/React.createElement("button", {
    class: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarTogglerDemo01",
    "aria-controls": "navbarTogglerDemo01",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/React.createElement("span", {
    class: "navbar-toggler-icon"
  }), /*#__PURE__*/React.createElement("span", {
    className: "navbar-txt"
  }, "MENU")), /*#__PURE__*/React.createElement("div", {
    className: "search-icon d-lg-none cursor-pointer",
    onClick: () => props.callBack('CHECK_SEARCH', '')
  }, /*#__PURE__*/React.createElement("i", {
    class: "fas fa-search"
  })), /*#__PURE__*/React.createElement("div", {
    class: "collapse navbar-collapse",
    id: "navbarTogglerDemo01"
  }, /*#__PURE__*/React.createElement("ul", {
    class: "navbar-nav mr-auto mt-2 mt-lg-0"
  }, /*#__PURE__*/React.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/React.createElement(link_default.a, {
    href: "/"
  }, /*#__PURE__*/React.createElement("a", {
    class: "nav-link"
  }, "Trang ch\u1EE7"))), /*#__PURE__*/React.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/React.createElement(link_default.a, {
    href: config_default.a.client.adminPost
  }, /*#__PURE__*/React.createElement("a", {
    class: "nav-link"
  }, "B\xE0i vi\u1EBFt"))), /*#__PURE__*/React.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    class: "nav-link d-lg-block d-none"
  }, "Fashion ", /*#__PURE__*/React.createElement("i", {
    class: "fas fa-angle-down"
  })), /*#__PURE__*/React.createElement("a", {
    class: "nav-link d-block d-lg-none",
    "data-toggle": "collapse",
    href: "#collapseOne"
  }, "Fashion ", /*#__PURE__*/React.createElement("i", {
    class: "fas fa-angle-down"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "sub-menu collapse",
    id: "collapseOne"
  }, /*#__PURE__*/React.createElement("li", {
    className: "menu-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/category/outfits/"
  }, "Outfits")))), /*#__PURE__*/React.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/React.createElement(link_default.a, {
    href: config_default.a.client.adminComposition
  }, /*#__PURE__*/React.createElement("a", {
    class: "nav-link"
  }, "Th\xE0nh ph\u1EA7n"))), /*#__PURE__*/React.createElement("li", {
    class: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    class: "nav-link d-lg-block d-none"
  }, "Page Templates ", /*#__PURE__*/React.createElement("i", {
    class: "fas fa-angle-down"
  })), /*#__PURE__*/React.createElement("a", {
    class: "nav-link d-block d-lg-none",
    "data-toggle": "collapse",
    href: "#collapseTwo",
    "aria-expanded": "false"
  }, "Page Templates ", /*#__PURE__*/React.createElement("i", {
    class: "fas fa-angle-down"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "sub-menu collapse",
    id: "collapseTwo"
  }, /*#__PURE__*/React.createElement("li", {
    className: "menu-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/contact/"
  }, "Boutique")), /*#__PURE__*/React.createElement("li", {
    className: "menu-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/instagram-page/"
  }, "Instagram Page")), /*#__PURE__*/React.createElement("li", {
    className: "menu-item"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/landing-page/"
  }, "Landing Page"))))), /*#__PURE__*/React.createElement("form", {
    class: "form-inline my-2 my-lg-0 justify-content-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "social-media-icons"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    class: "fab fa-facebook-f"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    class: "fab fa-instagram"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    class: "fab fa-twitter"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    class: "fas fa-heart"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    class: "fab fa-facebook-f"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "search-icon d-lg-block d-none cursor-pointer",
    onClick: () => props.callBack('CHECK_SEARCH', '')
  }, /*#__PURE__*/React.createElement("i", {
    class: "fas fa-search"
  }))))));
}
// EXTERNAL MODULE: ./components/aside.js + 1 modules
var aside = __webpack_require__("3VQ6");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./components/search.js

function Search(props) {
  var [value, changeValue] = Object(external_react_["useState"])("");

  var search = () => {};

  return /*#__PURE__*/React.createElement("div", {
    className: "search"
  }, /*#__PURE__*/React.createElement("div", {
    className: "popup-search"
  }, /*#__PURE__*/React.createElement("div", {
    className: "float-right btn-close cursor-pointer",
    onClick: () => props.callBack("CHECK_SEARCH", "")
  }, /*#__PURE__*/React.createElement("i", {
    class: "fas fa-times"
  })), /*#__PURE__*/React.createElement("div", {
    class: "search-container text-center"
  }, /*#__PURE__*/React.createElement("h2", null, "What are you looking for?"), /*#__PURE__*/React.createElement("form", {
    class: "searchform"
  }, /*#__PURE__*/React.createElement("label", {
    for: "search-top",
    className: "cursor-pointer",
    onClick: () => props.callBack("SEARCH", value)
  }, /*#__PURE__*/React.createElement("i", {
    class: "fas fa-search"
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "search-top",
    placeholder: "Type search",
    value: "",
    name: "s",
    value: value,
    onChange: e => {
      changeValue(e.target.value);
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

// CONCATENATED MODULE: ./components/layout.js












loadingProgress();
/* harmony default export */ var layout = __webpack_exports__["a"] = ((_ref) => {
  var {
    children,
    title = 'title'
  } = _ref;
  var [isSearch, changeSearch] = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {}, []);

  var callBack = (key, value) => {
    console.log(key, value);

    switch (key) {
      case 'CHECK_SEARCH':
        changeSearch(!isSearch);
        break;

      case 'SEARCH':
        changeSearch(false);
        alert(value);

      default:
        break;
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "container-layout"
  }, /*#__PURE__*/React.createElement(head_default.a, null, /*#__PURE__*/React.createElement("title", null, title)), /*#__PURE__*/React.createElement(Header, {
    callBack: callBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '50px'
    }
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "content-area"
  }, children)), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(external_react_toastify_["ToastContainer"], null), isSearch ? /*#__PURE__*/React.createElement(Search, {
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

/***/ "HRFF":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/s3-bbdd330d54f616ba332316faf01c9d37.jpg";

/***/ }),

/***/ "HVfI":
/***/ (function(module, exports) {



/***/ }),

/***/ "Hz3a":
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),

/***/ "JC3Y":
/***/ (function(module, exports) {

module.exports = require("react-draft-wysiwyg");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Jskx":
/***/ (function(module, exports) {

module.exports = require("@khanacademy/react-multi-select");

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

/***/ "OvAC":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "RPRI":
/***/ (function(module, exports) {

module.exports = require("draftjs-to-html");

/***/ }),

/***/ "UOsd":
/***/ (function(module, exports) {



/***/ }),

/***/ "Urqi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("fFdx");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("OvAC");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "draft-js"
var external_draft_js_ = __webpack_require__("Hz3a");

// EXTERNAL MODULE: external "draftjs-to-html"
var external_draftjs_to_html_ = __webpack_require__("RPRI");
var external_draftjs_to_html_default = /*#__PURE__*/__webpack_require__.n(external_draftjs_to_html_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// CONCATENATED MODULE: ./utils/upload.js


var upload = file => {
  var headers = {
    'Content-Type': 'multipart/form-data'
  };
  var formData = new FormData();
  formData.append('file[]', file);
  return external_axios_default.a.post(config_default.a.host.upload + '/uploads', formData, {
    headers
  }).then(res => res.data);
};
var uploadCallback = file => {
  return new Promise((resolve, reject) => {
    var formData = new FormData();
    formData.append('image', file);
    external_axios_default.a.post('http://1.2.3.127:9000/multers?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjkyMmMzZWViYjNlM2Y4MGUxYTY1NCIsImlhdCI6MTU4OTgwMTQ3NH0.E6KhxBFFZZ7mqBuMcg_1_vuyycEF6APiHLTfhkXFiO8', formData, {
      'Content-Type': 'multipart/form-data'
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err); // console.log('error upload ', err)
    });
  });
};
// CONCATENATED MODULE: ./components/wysiwyg-editor.js








var WysiwygNoSSRWrapper = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "JC3Y", 7)).then(mod => mod.Editor), {
  loading: () => null,
  ssr: false
});

class wysiwyg_editor_WysiwygEditor extends external_react_["Component"] {
  constructor(props) {
    super(props);

    defineProperty_default()(this, "toolbar", {
      options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'link', 'emoji', 'image', 'remove', 'history'],
      inline: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace']
      },
      blockType: {
        inDropdown: true,
        options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
        className: undefined,
        component: undefined,
        dropdownClassName: undefined
      },
      fontSize: {
        options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
        className: undefined,
        component: undefined,
        dropdownClassName: undefined
      },
      list: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: ['unordered', 'ordered', 'indent', 'outdent']
      },
      textAlign: {
        inDropdown: true,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: ['left', 'center', 'right', 'justify']
      },
      link: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        popupClassName: undefined,
        dropdownClassName: undefined,
        showOpenOptionOnHover: true,
        defaultTargetOption: '_self',
        options: ['link', 'unlink'],
        linkCallback: undefined
      },
      emoji: {
        className: undefined,
        component: undefined,
        popupClassName: undefined,
        emojis: ['😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓', '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈', '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃', '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕', '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥', '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸', '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈', '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅', '✅', '❎', '💯']
      },
      embedded: {
        className: undefined,
        component: undefined,
        popupClassName: undefined,
        embedCallback: undefined,
        defaultSize: {
          height: 'auto',
          width: 'auto'
        }
      },
      image: {
        className: undefined,
        component: undefined,
        popupClassName: undefined,
        urlEnabled: true,
        uploadEnabled: true,
        alignmentEnabled: true,
        previewImage: false,
        inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
        uploadCallback: this.upload,
        alt: {
          present: false,
          mandatory: false
        },
        defaultSize: {
          height: 'auto',
          width: 'auto'
        }
      },
      remove: {
        className: undefined,
        component: undefined
      },
      history: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: ['undo', 'redo']
      }
    });

    defineProperty_default()(this, "setEditor", editor => {
      this.editor = editor;
    });

    defineProperty_default()(this, "onEditorStateChange", editorState => {
      this.setState({
        editorState
      });
      this.props.callBack('EDITOR', external_draftjs_to_html_default()(Object(external_draft_js_["convertToRaw"])(editorState.getCurrentContent())));
    });

    this.state = {
      editorState: external_draft_js_["EditorState"].createEmpty()
    };
  }

  componentDidMount() {
    var value = this.props.valueTxt;

    if (value && value != '') {
      var contentState = external_draft_js_["ContentState"].createFromBlockArray(Object(external_draft_js_["convertFromHTML"])(value));
      var editorState = external_draft_js_["EditorState"].createWithContent(contentState);
      this.setState({
        editorState: editorState
      });
    }
  }

  upload(file) {
    return new Promise((resolve, reject) => {
      var formData = new FormData();
      formData.append('image', file);
      external_axios_default.a.post(config_default.a.host.upload + config_default.a.path.upload.upFile, formData, {
        'Content-Type': 'multipart/form-data'
      }).then(res => {
        console.log(res);
        resolve({
          data: {
            link: config_default.a.host.upload + '/' + res.data.imageLink
          }
        });
      }).catch(err => {
        console.log('error upload ', err);
      });
    });
  }

  render() {
    var {
      editorState
    } = this.state;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WysiwygNoSSRWrapper, {
      ref: this.setEditor,
      editorState: editorState,
      wrapperClassName: "wysiwyg-wrapper",
      editorClassName: "wysiwyg-editor",
      onEditorStateChange: this.onEditorStateChange,
      toolbar: this.toolbar
    }));
  }

}

/* harmony default export */ var wysiwyg_editor = (wysiwyg_editor_WysiwygEditor);
// EXTERNAL MODULE: ./components/layout.js + 4 modules
var layout = __webpack_require__("CafY");

// EXTERNAL MODULE: ./store/data.js
var store_data = __webpack_require__("i5qa");

// EXTERNAL MODULE: external "@khanacademy/react-multi-select"
var react_multi_select_ = __webpack_require__("Jskx");
var react_multi_select_default = /*#__PURE__*/__webpack_require__.n(react_multi_select_);

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ../node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__("v1MJ");

// EXTERNAL MODULE: ./store/redux.js
var redux = __webpack_require__("aq8O");

// CONCATENATED MODULE: ./pages/admin/post.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













function Post(props) {
  var [imgSrc, setImg] = Object(external_react_["useState"])('');
  var [file, setFile] = Object(external_react_["useState"])('');
  var refFile = React.createRef();
  var [data, setData] = Object(external_react_["useState"])({
    title: '',
    content: '',
    description: '',
    viewCount: 0,
    image: '',
    idCategory: '',
    idCreator: '5eb91ac9be4f1e373075d1b3',
    tags: [],
    compositions: []
  });
  var [optionComposition, setoptionComposition] = Object(external_react_["useState"])([]);
  var [selectedCompos, setSelectedCompos] = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    if (props.isData) {
      var compos = props.compositions.map(item => {
        return _objectSpread({}, item, {
          label: item.name,
          value: item.id
        });
      });
      setoptionComposition(compos);

      if (data.idCategory == '' && props.categories.length > 0) {
        data.idCategory = props.categories[0].id;
        setData(data);
      }
    }
  }, []);

  var changeImg = file => {
    // var reader = new FileReader()
    // reader.readAsDataURL(file)
    // reader.onloadend = function (e) {
    //   setImg(reader.result)
    // }.bind(this)
    setImg(URL.createObjectURL(file));
    setFile(file);
  };

  var callBack = (key, value) => {
    switch (key) {
      case 'EDITOR':
        setData(_objectSpread({}, data, {
          content: value
        }));
        break;

      case 'POST':
        console.log(key, value);

        var newData = _objectSpread({}, data);

        var newTags = data.tags.filter((item, index) => {
          return item != '';
        });
        newData = _objectSpread({}, data, {
          tags: newTags
        });
        setData(newData);

        if (file == '') {
          external_react_toastify_["toast"].error('Bạn chưa đăng ảnh bài viết !', {
            autoClose: 3000
          });
          console.log('file');
        } else if (newData.title == '' || newData.content == '' || newData.description == '' || newData.compositions.length == 0 || newData.tags.length == 0) {
          console.log('key');
          external_react_toastify_["toast"].error('Bạn phải nhập đầy đủ thông tin !', {
            autoClose: 3000
          });
        } else {
          post(newData);
        }

        break;

      default:
        break;
    }
  };

  var post = value => {
    console.log(file);
    var image = '';
    uploadCallback(file).then(res => {
      console.log(res);
      image = res.imageLink;
    }).then(() => {
      var dataa = _objectSpread({}, value, {
        image: image
      });

      setData(dataa);
      external_axios_default.a.post(config_default.a.host.base + config_default.a.path.base.posts, dataa, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjkyMmMzZWViYjNlM2Y4MGUxYTY1NCIsImlhdCI6MTU4OTg1NTMxNn0.uilfD8znjUSYSlBkv1vRr3vJ4LyEr6Fp4Ri8HcEg-AM'
        }
      }).then(res2 => {
        console.log(res2);
      }).catch(e => console.log('Error: ', e));
    }).catch(err => {
      console.log('err', err);
    });
  };

  return /*#__PURE__*/React.createElement(layout["a" /* default */], {
    title: 'Blush'
  }, props.isData ? /*#__PURE__*/React.createElement("div", {
    className: "post px-md-4 px-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pt-5 pb-md-3 pb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("h5", null, "Ti\xEAu \u0111\u1EC1"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    multiple: true,
    onChange: e => {
      setData(_objectSpread({}, data, {
        title: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("h5", null, "M\xF4 t\u1EA3 ng\u1EAFn"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    multiple: true,
    onChange: e => {
      setData(_objectSpread({}, data, {
        description: e.target.value
      }));
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "post-image"
  }, /*#__PURE__*/React.createElement("input", {
    ref: refFile,
    type: "file",
    onChange: e => changeImg(e.target.files[0]),
    className: "d-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "border border-secondary post-image-container",
    title: "\u1EA2nh b\xE0i vi\u1EBFt"
  }, imgSrc ? /*#__PURE__*/React.createElement("img", {
    src: imgSrc,
    style: {
      objectFit: 'cover'
    },
    className: "w-100 h-100"
  }) : /*#__PURE__*/React.createElement("p", null, "\u1EA2nh b\xE0i vi\u1EBFt"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-outline-danger post-image-btn",
    onClick: () => {
      refFile.current.click();
    }
  }, /*#__PURE__*/React.createElement("i", {
    class: "fas fa-upload"
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-5"
  }, /*#__PURE__*/React.createElement("div", {
    class: "form-group mb-3"
  }, /*#__PURE__*/React.createElement("h5", {
    for: "exampleFormControlSelect1"
  }, "Danh m\u1EE5c"), /*#__PURE__*/React.createElement("select", {
    class: "form-control",
    onChange: e => {
      console.log(e.target.value);
      setData(_objectSpread({}, data, {
        idCategory: e.target.value
      }));
    }
  }, props.categories && props.categories.map((item, index) => {
    return /*#__PURE__*/React.createElement("option", {
      value: item.id,
      selected: data.idCategory == props.categories[index].id ? true : false
    }, item.name);
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-5"
  }, /*#__PURE__*/React.createElement("div", {
    class: "post-compos mb-3"
  }, /*#__PURE__*/React.createElement("h5", null, "Th\xE0nh ph\u1EA7n"), /*#__PURE__*/React.createElement(react_multi_select_default.a, {
    options: optionComposition,
    selected: data.compositions,
    onSelectedChanged: selected => {
      console.log(selected);
      setData(_objectSpread({}, data, {
        compositions: selected
      })); // setSelectedCompos(selected)
    },
    overrideStrings: {
      selectSomeItems: 'Chọn ít nhất một thành phần...',
      allItemsAreSelected: 'Tất cả được chọn',
      selectAll: 'Chọn tất cả',
      search: 'Tìm kiếm'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("h5", null, "Tags"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    multiple: true,
    placeholder: "V\xED d\u1EE5 nh\u1EADp tags: M\u1EE5n,D\u1EA7u,Da Kh\xF4",
    value: data.tags.join(','),
    onChange: e => {
      setData(_objectSpread({}, data, {
        tags: e.target.value.split(',')
      }));
    }
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "mb-3"
  }, "N\u1ED9i dung b\xE0i vi\u1EBFt"), /*#__PURE__*/React.createElement(wysiwyg_editor, {
    callBack: callBack,
    valueTxt: data.description
  })), /*#__PURE__*/React.createElement("div", {
    className: "row justify-content-center pt-5 mx-0"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    class: "btn btn-danger text-uppercase font-weight-bold",
    onClick: () => callBack('POST', data)
  }, "\u0110\u0103ng b\xE0i"))) : /*#__PURE__*/React.createElement("div", {
    className: "pt-5"
  }, /*#__PURE__*/React.createElement("h4", null, "Hi\u1EC7n t\u1EA1i h\u1EC7 th\u1ED1ng \u0111ang l\u1ED7i !")));
}

Post.getInitialProps = /*#__PURE__*/asyncToGenerator_default()(function* () {
  var data = yield Object(store_data["a" /* default */])();

  if (data.categories.length == 0 && data.compositions.length == 0) {
    return {
      isData: false
    };
  }

  return _objectSpread({}, data, {
    isData: true
  });
});
/* harmony default export */ var admin_post = __webpack_exports__["default"] = (Post);

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



/***/ }),

/***/ "X5tz":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/s2-3963d4ae754320d3ce44ef71d68214e2.jpg";

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

/***/ "aq8O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return state; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("OvAC");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rKB8");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JMOJ");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var INITIAL_STATE = {
  foo: 1
};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'getData':
      return _objectSpread({}, state, {
        oke: 'oke'
      });

    default:
      return state;
  }
} // const store = (initialState) => {
//   return createStore(reducer, initialState)
// }

var state = INITIAL_STATE;

/***/ }),

/***/ "ayor":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/s5-47fa300f962f4363472ffcbea7f113e6.jpg";

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

/***/ "d0Xs":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/s1-217795ab6962a4270fc38980532c0333.jpg";

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

/***/ "fBbb":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/s4-85cd9f2be35d22d485e39122be51785b.jpg";

/***/ }),

/***/ "fFdx":
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "gtTT":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/s7-66b49ecdf61c7dbd53a65fb5b1edce0d.jpg";

/***/ }),

/***/ "hdFj":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f4-c07e2b5aa66de157b6c1641b9b215773.jpg";

/***/ }),

/***/ "i5qa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInitialData; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fFdx");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rOcY");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);



var limit = 6;
function getInitialData() {
  return _getInitialData.apply(this, arguments);
}

function _getInitialData() {
  _getInitialData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(function* () {
    var posts = [];
    var categories = [];
    var compositions = [];
    var resPost = yield axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_config__WEBPACK_IMPORTED_MODULE_2___default.a.host.base + _config__WEBPACK_IMPORTED_MODULE_2___default.a.path.base.posts + '?page=1&&limit=' + limit).catch(e => {
      console.log('Error: ', e.code);
    });
    var resCate = yield axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_config__WEBPACK_IMPORTED_MODULE_2___default.a.host.base + _config__WEBPACK_IMPORTED_MODULE_2___default.a.path.base.categories).catch(e => {
      console.log('Error: ', e.code);
    });
    var resCompos = yield axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_config__WEBPACK_IMPORTED_MODULE_2___default.a.host.base + _config__WEBPACK_IMPORTED_MODULE_2___default.a.path.base.compositions).catch(e => console.log('Error: ', e.code));
    posts = resPost && resPost.data != undefined ? resPost.data : [];
    categories = resCate && resCate.data != undefined ? resCate.data : [];
    compositions = (resCompos && resCompos.data) != undefined ? resCompos.data : [];
    return {
      posts: posts,
      categories: categories,
      compositions: compositions
    };
  });
  return _getInitialData.apply(this, arguments);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  host: {
    base: 'http://1.2.3.127:9000',
    upload: 'http://1.2.3.127:9000',
    DB: 'mongodb://yp9tdlorbv:yp9tdlorbv@176.9.57.130:27017/yp9tdlorbv',
    token: ''
  },
  path: {
    upload: {
      upFile: '/multers'
    },
    base: {
      posts: '/posts',
      categories: '/categories',
      compositions: '/compositions'
    }
  },
  client: {
    posts: '/posts',
    adminPost: '/admin/post',
    adminComposition: '/admin/composition'
  }
};

/***/ }),

/***/ "t0fM":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f2-c42291a69b26827a93471748a19b9221.jpg";

/***/ }),

/***/ "te99":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/f5-80b4f658c8ef91e2ada04b799cf558be.jpg";

/***/ }),

/***/ "v1MJ":
/***/ (function(module, exports) {



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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });