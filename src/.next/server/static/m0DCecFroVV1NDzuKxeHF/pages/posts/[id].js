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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5dyF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9CGT")


/***/ }),

/***/ "5zyf":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/share_post-c1a873c3ce2218c26456bacab2bca05d.png";

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("yG97");


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

/***/ "9nMc":
/***/ (function(module, exports) {



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

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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

/***/ "jGH4":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/alyssa_strohmann-baf005ff46476c1ce2de18d07a0a0ad5.jpg";

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

/***/ "q5MH":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/the_tonik_women-a1796bae0b4c0f1a095c0bbc760c9e37.jpg";

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

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yG97":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("OvAC");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fFdx");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_styles_blush_classic_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9nMc");
/* harmony import */ var _static_styles_blush_classic_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_styles_blush_classic_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("CafY");
/* harmony import */ var _components_aside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3VQ6");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("5dyF");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("rOcY");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("i5qa");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("aq8O");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















function PostDetail(props) {
  var [isSearch, changeSearch] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  var routes = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    console.log(props.data);
  }, []);

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

  return /*#__PURE__*/React.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    title: 'Beauty Favorites for Summer – Blush ',
    callBack: callBack,
    isSearch: isSearch
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-branding"
  }, /*#__PURE__*/React.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/blush-classic"
  }, /*#__PURE__*/React.createElement("img", {
    src: __webpack_require__("A/Ti")
  }))), /*#__PURE__*/React.createElement("div", {
    className: "site-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-lg-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "entry-thumbnail"
  }, /*#__PURE__*/React.createElement("img", {
    src: _config__WEBPACK_IMPORTED_MODULE_8___default.a.host.upload + props.data.image
  })), /*#__PURE__*/React.createElement("div", {
    className: "entry-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "entry-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cat-links"
  }, props.data.tags && props.data.tags.map((item, index) => {
    return /*#__PURE__*/React.createElement("a", {
      href: item
    }, item, index != props.data.tags.length - 1 ? ', ' : null);
  })), "|", /*#__PURE__*/React.createElement("span", {
    className: "posted-on"
  }, /*#__PURE__*/React.createElement("time", null, moment__WEBPACK_IMPORTED_MODULE_11___default()(props.data.updatedAt || props.data.createdAt).format('DD. MMM YYYY')))), /*#__PURE__*/React.createElement("h1", {
    className: "entry-title"
  }, props.data.title)), /*#__PURE__*/React.createElement("div", {
    className: "entry-content"
  }, /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: props.data.content
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "entry-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "share"
  }, /*#__PURE__*/React.createElement("img", {
    src: __webpack_require__("5zyf")
  }), /*#__PURE__*/React.createElement("a", {
    href: "mailto:?subject=Beauty Favorites for Summer&body=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("i", {
    class: "far fa-envelope"
  })), /*#__PURE__*/React.createElement("a", {
    href: "http://www.facebook.com/sharer.php?u=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/&t=Beauty Favorites for Summer",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("i", {
    class: "fab fa-facebook-f"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/wp-content/uploads/sites/14/2019/04/blush-flowers.jpg",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("i", {
    class: "fab fa-pinterest"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://twitter.com/share?text=Beauty Favorites for Summer&url=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/"
  }, /*#__PURE__*/React.createElement("i", {
    class: "fab fa-twitter"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "posts-navigation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-previous"
  }, /*#__PURE__*/React.createElement("p", null, "Previous Article"), /*#__PURE__*/React.createElement("span", null, '«'), ' ', /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/04/29/my-workout-routine-w-dkny/"
  }, "How to move to another city and find new friends", ' '))), /*#__PURE__*/React.createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-next"
  }, /*#__PURE__*/React.createElement("p", null, "Next Article"), /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, "What I learnt from Blogging in the last 5 Years"), ' ', "\xBB")))), /*#__PURE__*/React.createElement("div", {
    className: "related-posts"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "related-title"
  }, "Related Posts"), /*#__PURE__*/React.createElement("div", {
    className: "featured"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-sm-6 col-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "post"
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
  }, /*#__PURE__*/React.createElement("time", null, "4. Mai 2019")))))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-sm-6 col-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "post"
  }, /*#__PURE__*/React.createElement("div", {
    className: "entry-thumbnail"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, /*#__PURE__*/React.createElement("img", {
    src: __webpack_require__("q5MH")
  }))), /*#__PURE__*/React.createElement("div", {
    className: "entry-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "entry-title"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, "How to move to another city and find new friends")), /*#__PURE__*/React.createElement("div", {
    className: "posted-on"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, /*#__PURE__*/React.createElement("time", null, "29. April 2019")))))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "post"
  }, /*#__PURE__*/React.createElement("div", {
    className: "entry-thumbnail"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, /*#__PURE__*/React.createElement("img", {
    src: __webpack_require__("jGH4")
  }))), /*#__PURE__*/React.createElement("div", {
    className: "entry-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "entry-title"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, "My Favorite Books, Websites and Podcasts for Personal Development")), /*#__PURE__*/React.createElement("div", {
    className: "posted-on"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/"
  }, /*#__PURE__*/React.createElement("time", null, "29. April 2019"))))))))), /*#__PURE__*/React.createElement("div", {
    className: "comments"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "comment-reply-title"
  }, "Schreibe einen Kommentar "), /*#__PURE__*/React.createElement("form", {
    className: "comment-form"
  }, /*#__PURE__*/React.createElement("p", {
    className: "comment-notes"
  }, "Deine E-Mail-Adresse wird nicht ver\xF6ffentlicht. Erforderliche Felder sind mit * markiert."), /*#__PURE__*/React.createElement("div", {
    className: "comment-form-comment"
  }, /*#__PURE__*/React.createElement("label", null, "Kommentar"), /*#__PURE__*/React.createElement("textarea", {
    cols: "45",
    rows: "8"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "comment-form-author"
  }, /*#__PURE__*/React.createElement("label", null, "Name *"), /*#__PURE__*/React.createElement("input", {
    type: "text"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "comment-form-author"
  }, /*#__PURE__*/React.createElement("label", null, "E-Mail *"), /*#__PURE__*/React.createElement("input", {
    type: "text"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "comment-form-author"
  }, /*#__PURE__*/React.createElement("label", null, "Website"), /*#__PURE__*/React.createElement("input", {
    type: "text"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "comment-form-cookies"
  }, /*#__PURE__*/React.createElement("p", {
    className: "comment-form-cookies-consent"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    value: "yes"
  }), /*#__PURE__*/React.createElement("label", null, "Meinen Namen, E-Mail und Website in diesem Browser speichern, bis ich wieder kommentiere.")), /*#__PURE__*/React.createElement("p", {
    className: "form-submit"
  }, /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Kommentar abschicken"
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "col-lg-4"
  }, /*#__PURE__*/React.createElement(_components_aside__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null)))));
}

PostDetail.getInitialProps = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function* (ctx) {
    var {
      req,
      res,
      query
    } = ctx;
    var data = {};
    var resPost = yield axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(_config__WEBPACK_IMPORTED_MODULE_8___default.a.host.base + _config__WEBPACK_IMPORTED_MODULE_8___default.a.path.base.posts + '/' + query.id).catch(e => {
      console.log('Error: ', e.code);
      res.redirect('/');
    });
    data = resPost && resPost.data != undefined ? resPost.data : [];
    var dataa = Object(_store_data__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])();
    return _objectSpread({}, dataa, {
      data: data
    });
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])()(PostDetail));

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