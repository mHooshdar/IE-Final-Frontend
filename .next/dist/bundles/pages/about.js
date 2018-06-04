module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FacebookIcon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/mohammad/Desktop/FirstNextProject/components/FacebookIcon.js";



var FacebookIcon = function FacebookIcon(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    width: props.width,
    height: props.height,
    style: {
      enableBackground: 'new 0 0 67 67'
    },
    viewBox: "0 0 67 67",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-44294866" + " " + "footer-icon"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "44294866",
    css: ".footer-icon.jsx-44294866{fill:#777777;}.footer-icon.jsx-44294866:hover{fill:#ede9e5;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmFjZWJvb2tJY29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdnQixBQUdzQixBQUlBLGFBSGYsQUFJaUIsZUFDakIiLCJmaWxlIjoiY29tcG9uZW50cy9GYWNlYm9va0ljb24uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9oYW1tYWQvRGVza3RvcC9GaXJzdE5leHRQcm9qZWN0Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRmFjZWJvb2tJY29uID0gKHByb3BzKSA9PiAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9XCJmb290ZXItaWNvblwiXG4gICAgd2lkdGg9e3Byb3BzLndpZHRofVxuICAgIGhlaWdodD17cHJvcHMuaGVpZ2h0fVxuICAgIHN0eWxlPXt7ZW5hYmxlQmFja2dyb3VuZDonbmV3IDAgMCA2NyA2Nyd9fVxuICAgIHZpZXdCb3g9XCIwIDAgNjcgNjdcIlxuICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcbiAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gID5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZm9vdGVyLWljb24ge1xuICAgICAgICBmaWxsOiAjNzc3Nzc3OyBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmZvb3Rlci1pY29uOmhvdmVyIHtcbiAgICAgICAgZmlsbDogI2VkZTllNTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyBcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8cGF0aCBcbiAgICAgIGQ9XCJNMjkuNzY1LDUwLjMyaDYuNzQ0VjMzLjk5OGg0LjQ5OWwwLjU5Ni01LjYyNGgtNS4wOTUgIGwwLjAwNy0yLjgxNmMwLTEuNDY2LDAuMTQtMi4yNTMsMi4yNDQtMi4yNTNoMi44MTJWMTcuNjhoLTQuNWMtNS40MDUsMC03LjMwNywyLjcyOS03LjMwNyw3LjMxN3YzLjM3N2gtMy4zNjl2NS42MjVoMy4zNjlWNTAuMzJ6ICAgTTM0LDY0QzE3LjQzMiw2NCw0LDUwLjU2OCw0LDM0QzQsMTcuNDMxLDE3LjQzMiw0LDM0LDRzMzAsMTMuNDMxLDMwLDMwQzY0LDUwLjU2OCw1MC41NjgsNjQsMzQsNjR6XCJcbiAgICAgIHN0eWxlPXt7ZmlsbFJ1bGU6J2V2ZW5vZGQnLCBjbGlwUnVsZTonZXZlbm9kZCd9fVxuICAgIC8+XG4gIDwvc3ZnPlxuKVxuXG5GYWNlYm9va0ljb24uZGVmYXVsdFByb3BzID0ge1xuICB3aWR0aDogJzEwMHB4JyxcbiAgaGVpZ2h0OiAnMTAwcHgnXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rSWNvblxuIl19 */\n/*@ sourceURL=components/FacebookIcon.js */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M29.765,50.32h6.744V33.998h4.499l0.596-5.624h-5.095  l0.007-2.816c0-1.466,0.14-2.253,2.244-2.253h2.812V17.68h-4.5c-5.405,0-7.307,2.729-7.307,7.317v3.377h-3.369v5.625h3.369V50.32z   M34,64C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z",
    style: {
      fillRule: 'evenodd',
      clipRule: 'evenodd'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: "jsx-44294866"
  }));
};

FacebookIcon.defaultProps = {
  width: '100px',
  height: '100px'
};
/* harmony default export */ __webpack_exports__["a"] = (FacebookIcon);

/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FacebookIcon__ = __webpack_require__("./components/FacebookIcon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GoogleIcon__ = __webpack_require__("./components/GoogleIcon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TwitterIcon__ = __webpack_require__("./components/TwitterIcon.js");
var _jsxFileName = "/home/mohammad/Desktop/FirstNextProject/components/Footer.js";





var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__FacebookIcon__["a" /* default */], {
    width: "100px",
    heihgt: "100px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__GoogleIcon__["a" /* default */], {
    width: "100px",
    heihgt: "100px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__TwitterIcon__["a" /* default */], {
    width: "100px",
    heihgt: "100px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "footer"));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/GoogleIcon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/mohammad/Desktop/FirstNextProject/components/GoogleIcon.js";



var GoogleIcon = function GoogleIcon(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    width: props.width,
    height: props.height,
    style: {
      enableBackground: 'new 0 0 67 67'
    },
    viewBox: "0 0 67 67",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-44294866" + " " + "footer-icon"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "44294866",
    css: ".footer-icon.jsx-44294866{fill:#777777;}.footer-icon.jsx-44294866:hover{fill:#ede9e5;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR29vZ2xlSWNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXZ0IsQUFHc0IsQUFJQSxhQUhmLEFBSWlCLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvR29vZ2xlSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tb2hhbW1hZC9EZXNrdG9wL0ZpcnN0TmV4dFByb2plY3QiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHb29nbGVJY29uID0gKHByb3BzKSA9PiAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9XCJmb290ZXItaWNvblwiXG4gICAgd2lkdGg9e3Byb3BzLndpZHRofVxuICAgIGhlaWdodD17cHJvcHMuaGVpZ2h0fVxuICAgIHN0eWxlPXt7ZW5hYmxlQmFja2dyb3VuZDonbmV3IDAgMCA2NyA2Nyd9fVxuICAgIHZpZXdCb3g9XCIwIDAgNjcgNjdcIlxuICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5mb290ZXItaWNvbiB7XG4gICAgICAgIGZpbGw6ICM3Nzc3Nzc7IFxuICAgICAgfVxuICAgICAgXG4gICAgICAuZm9vdGVyLWljb246aG92ZXIge1xuICAgICAgICBmaWxsOiAjZWRlOWU1O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IFxuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICBcbiAgICA8cGF0aCBkPVwiTTMyLjk2MywzNS4wMDJjMS42MDktMS42MDgsMS43MzQtMy44NDUsMS43MzQtNS4xMDIgIGMwLTUuMDUxLTIuOTktMTIuODc1LTguNzk2LTEyLjg3NWMtMS44MSwwLTMuNzcsMC45MS00LjksMi4zMWMtMS4xODEsMS40NjgtMS41MzMsMy4zNTMtMS41MzMsNS4xNjIgIGMwLDQuNywyLjcxNCwxMi40NjUsOC43NDYsMTIuNDY1QzI5Ljk0OCwzNi45NjIsMzEuODMzLDM2LjEwNywzMi45NjMsMzUuMDAyeiBNNCwzNGMwLDcuNDA1LDIuNjgzLDE0LjE4NCw3LjEyOSwxOS40MTUgIGMwLjgzOS0xLjQxLDIuMTQtMi43OTcsNC4wNjYtMy45MzdjNC4zNDgtMi42NjQsMTAuMjA0LTMuMDE3LDEzLjM3LTMuMjE4Yy0wLjk4LTEuMjU3LTIuMTExLTIuNTg5LTIuMTExLTQuNzc0ICBjMC0xLjE4MiwwLjM1Mi0xLjg4NSwwLjcwNC0yLjcxNWMtMC43NzksMC4wNzYtMS41MzMsMC4xNTEtMi4yMzcsMC4xNTFjLTcuNDE0LDAtMTEuNjExLTUuNTI5LTExLjYxMS0xMC45ODMgIGMwLTMuMjE3LDEuNDgzLTYuNzkxLDQuNDczLTkuMzc3YzMuOTk2LTMuMjg0LDguNzQ2LTMuODQ1LDEyLjUxNi0zLjg0NUg0NC43bC00LjQ3NCwyLjUxNmgtNC4zMjIgIGMxLjYwNywxLjMyOSw0Ljk1MSw0LjEyNyw0Ljk1MSw5LjQ0OWMwLDUuMTc4LTIuOTQxLDcuNjE1LTUuODU2LDkuOTI2Yy0wLjkzLDAuOTA2LTEuOTYsMS44ODYtMS45NiwzLjQxOCAgYzAsMS41MzMsMS4wMywyLjM4OSwxLjgxLDMuMDE3bDIuNTEzLDEuOTZjMy4wOTIsMi41NjQsNS44ODEsNC45NTEsNS44ODEsOS43NzdjMCwzLjE4Mi0xLjQ4NCw2LjM3Ni00LjM3OSw4LjgyNiAgYy0xLjU1NywwLjI1NS0zLjE1MywwLjM4OC00Ljc4MSwwLjM5M2MyLjkzOC0xLjI4OSw0LjQ2MS0zLjY0Niw0LjQ2MS02LjQ4YzAtMy41NjgtMi4yODctNS40NTMtNy42MTUtOS4yNDggIGMtMC41NTMtMC4wNTEtMC45MDUtMC4wNTEtMS42MDgtMC4wNTFjLTAuNjI4LDAtNC4zOTgsMC4xMjctNy4zMzgsMS4xMDZjLTEuNTMzLDAuNTUzLTYuMDA2LDIuMjM3LTYuMDA2LDcuMjEzICBjMCwwLjU0MSwwLjA1OCwxLjA2NSwwLjE3LDEuNTY5QzguNzc1LDUyLjY0NSw0LDQzLjg4LDQsMzR6IE02MS43MywyMi41MzJMNjEuNzMsMjIuNTMyYzAuNDQsMS4wNjMsMC44MjEsMi4xNTksMS4xMzksMy4yODEgIEM2Mi41NTIsMjQuNjkxLDYyLjE3MSwyMy41OTYsNjEuNzMsMjIuNTMyTDYxLjczLDIyLjUzMkw2MS43MywyMi41MzJMNjEuNzMsMjIuNTMyeiBNMzQsNjRDMTcuNDMyLDY0LDQsNTAuNTY4LDQsMzQgIEM0LDE3LjQzMSwxNy40MzIsNCwzNCw0YzEyLjUwNywwLDIzLjIyNyw3LjY1MywyNy43MywxOC41MzJsMCwwaC01Ljk2NnYtNy44MTRoLTMuMzQ5djcuODE0aC03LjgxNHYzLjI4MWg3LjgxNHY3Ljg4MmgzLjM0OXYtNy44ODIgIGg3LjEwNEM2My42MDUsMjguNDE1LDY0LDMxLjE2Miw2NCwzNEM2NCw1MC41NjgsNTAuNTY4LDY0LDM0LDY0elwiXG4gICAgICBzdHlsZT17e2ZpbGxSdWxlOidldmVub2RkJywgY2xpcFJ1bGU6J2V2ZW5vZGQnfX1cbiAgICAvPlxuICA8L3N2Zz5cbilcblxuR29vZ2xlSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHdpZHRoOiAnMTAwcHgnLFxuICBoZWlnaHQ6ICcxMDBweCdcbn1cblxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlSWNvblxuIl19 */\n/*@ sourceURL=components/GoogleIcon.js */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M32.963,35.002c1.609-1.608,1.734-3.845,1.734-5.102  c0-5.051-2.99-12.875-8.796-12.875c-1.81,0-3.77,0.91-4.9,2.31c-1.181,1.468-1.533,3.353-1.533,5.162  c0,4.7,2.714,12.465,8.746,12.465C29.948,36.962,31.833,36.107,32.963,35.002z M4,34c0,7.405,2.683,14.184,7.129,19.415  c0.839-1.41,2.14-2.797,4.066-3.937c4.348-2.664,10.204-3.017,13.37-3.218c-0.98-1.257-2.111-2.589-2.111-4.774  c0-1.182,0.352-1.885,0.704-2.715c-0.779,0.076-1.533,0.151-2.237,0.151c-7.414,0-11.611-5.529-11.611-10.983  c0-3.217,1.483-6.791,4.473-9.377c3.996-3.284,8.746-3.845,12.516-3.845H44.7l-4.474,2.516h-4.322  c1.607,1.329,4.951,4.127,4.951,9.449c0,5.178-2.941,7.615-5.856,9.926c-0.93,0.906-1.96,1.886-1.96,3.418  c0,1.533,1.03,2.389,1.81,3.017l2.513,1.96c3.092,2.564,5.881,4.951,5.881,9.777c0,3.182-1.484,6.376-4.379,8.826  c-1.557,0.255-3.153,0.388-4.781,0.393c2.938-1.289,4.461-3.646,4.461-6.48c0-3.568-2.287-5.453-7.615-9.248  c-0.553-0.051-0.905-0.051-1.608-0.051c-0.628,0-4.398,0.127-7.338,1.106c-1.533,0.553-6.006,2.237-6.006,7.213  c0,0.541,0.058,1.065,0.17,1.569C8.775,52.645,4,43.88,4,34z M61.73,22.532L61.73,22.532c0.44,1.063,0.821,2.159,1.139,3.281  C62.552,24.691,62.171,23.596,61.73,22.532L61.73,22.532L61.73,22.532L61.73,22.532z M34,64C17.432,64,4,50.568,4,34  C4,17.431,17.432,4,34,4c12.507,0,23.227,7.653,27.73,18.532l0,0h-5.966v-7.814h-3.349v7.814h-7.814v3.281h7.814v7.882h3.349v-7.882  h7.104C63.605,28.415,64,31.162,64,34C64,50.568,50.568,64,34,64z",
    style: {
      fillRule: 'evenodd',
      clipRule: 'evenodd'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: "jsx-44294866"
  }));
};

GoogleIcon.defaultProps = {
  width: '100px',
  height: '100px'
};
/* harmony default export */ __webpack_exports__["a"] = (GoogleIcon);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/mohammad/Desktop/FirstNextProject/components/Header.js";



var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-1117817508"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1117817508",
    css: ".text.jsx-1117817508{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVnQixBQUdtQixVQUNaIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21vaGFtbWFkL0Rlc2t0b3AvRmlyc3ROZXh0UHJvamVjdCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPGhlYWRlcj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGV4dCB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPmhlYWRlcjwvcD5cbiAgPC9oZWFkZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl19 */\n/*@ sourceURL=components/Header.js */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-1117817508" + " " + "text"
  }, "header"));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = "/home/mohammad/Desktop/FirstNextProject/components/MyLayout.js";




var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/TwitterIcon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/mohammad/Desktop/FirstNextProject/components/TwitterIcon.js";



var TwitterIcon = function TwitterIcon(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    width: props.width,
    height: props.height,
    style: {
      enableBackground: 'new 0 0 67 67'
    },
    viewBox: "0 0 67 67",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-44294866" + " " + "footer-icon"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "44294866",
    css: ".footer-icon.jsx-44294866{fill:#777777;}.footer-icon.jsx-44294866:hover{fill:#ede9e5;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVHdpdHRlckljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2dCLEFBR3NCLEFBSUEsYUFIZixBQUlpQixlQUNqQiIsImZpbGUiOiJjb21wb25lbnRzL1R3aXR0ZXJJY29uLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21vaGFtbWFkL0Rlc2t0b3AvRmlyc3ROZXh0UHJvamVjdCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFR3aXR0ZXJJY29uID0gKHByb3BzKSA9PiAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9XCJmb290ZXItaWNvblwiXG4gICAgd2lkdGg9e3Byb3BzLndpZHRofVxuICAgIGhlaWdodD17cHJvcHMuaGVpZ2h0fVxuICAgIHN0eWxlPXt7ZW5hYmxlQmFja2dyb3VuZDonbmV3IDAgMCA2NyA2Nyd9fVxuICAgIHZpZXdCb3g9XCIwIDAgNjcgNjdcIlxuICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcbiAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gID5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZm9vdGVyLWljb24ge1xuICAgICAgICBmaWxsOiAjNzc3Nzc3OyBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmZvb3Rlci1pY29uOmhvdmVyIHtcbiAgICAgICAgZmlsbDogI2VkZTllNTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyBcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8cGF0aCBcbiAgICAgIGQ9XCJNMzguMTY3LDIyLjI4M2MtMi42MTksMC45NTMtNC4yNzQsMy40MTEtNC4wODYsNi4xMDEgIGwwLjA2MywxLjAzOGwtMS4wNDgtMC4xMjdjLTMuODEzLTAuNDg3LTcuMTQ1LTIuMTM5LTkuOTc0LTQuOTE1bC0xLjM4My0xLjM3N2wtMC4zNTYsMS4wMTdjLTAuNzU0LDIuMjY3LTAuMjcyLDQuNjYxLDEuMjk5LDYuMjcxICBjMC44MzgsMC44OSwwLjY0OSwxLjAxNy0wLjc5NiwwLjQ4N2MtMC41MDMtMC4xNjktMC45NDMtMC4yOTYtMC45ODUtMC4yMzNjLTAuMTQ2LDAuMTQ5LDAuMzU2LDIuMDc2LDAuNzU0LDIuODM5ICBjMC41NDUsMS4wNiwxLjY1NSwyLjA5NywyLjg3MSwyLjcxMmwxLjAyNywwLjQ4N2wtMS4yMTUsMC4wMjFjLTEuMTczLDAtMS4yMTUsMC4wMjEtMS4wODksMC40NjcgIGMwLjQxOSwxLjM3NywyLjA3NCwyLjgzOSwzLjkxOCwzLjQ3NWwxLjI5OSwwLjQ0NGwtMS4xMzEsMC42NzhjLTEuNjc2LDAuOTc2LTMuNjQ2LDEuNTI2LTUuNjE2LDEuNTY3ICBDMjAuNzc1LDQzLjI1NiwyMCw0My4zNDEsMjAsNDMuNDA1YzAsMC4yMTEsMi41NTcsMS4zOTcsNC4wNDQsMS44NjRjNC40NjMsMS4zNzcsOS43NjUsMC43ODMsMTMuNzQ2LTEuNTY4ICBjMi44MjktMS42NzQsNS42NTctNSw2Ljk3OC04LjIyMWMwLjcxMy0xLjcxNSwxLjQyNS00Ljg1MSwxLjQyNS02LjM1NGMwLTAuOTc1LDAuMDYzLTEuMTAyLDEuMjM2LTIuMjY3ICBjMC42OTItMC42NzgsMS4zNDEtMS40MTksMS40NjctMS42MzFjMC4yMS0wLjQwMywwLjE4OC0wLjQwMy0wLjg4LTAuMDQzYy0xLjc4MSwwLjYzNi0yLjAzMywwLjU1MS0xLjE1Mi0wLjQwMiAgYzAuNjQ5LTAuNjc4LDEuNDI1LTEuOTA3LDEuNDI1LTIuMjY3YzAtMC4wNjMtMC4zMTQsMC4wNDItMC42NzEsMC4yMzNjLTAuMzc3LDAuMjEyLTEuMjE1LDAuNTMtMS44NDQsMC43MmwtMS4xMzEsMC4zNjFsLTEuMDI3LTAuNyAgYy0wLjU2Ni0wLjM4MS0xLjM2MS0wLjgwNS0xLjc4MS0wLjkzMkM0MC43NjYsMjEuOTAyLDM5LjEzMSwyMS45NDQsMzguMTY3LDIyLjI4M3ogTTM0LDY0QzE3LjQzMiw2NCw0LDUwLjU2OCw0LDM0ICBDNCwxNy40MzEsMTcuNDMyLDQsMzQsNHMzMCwxMy40MzEsMzAsMzBDNjQsNTAuNTY4LDUwLjU2OCw2NCwzNCw2NHpcIlxuICAgICAgc3R5bGU9e3tmaWxsUnVsZTonZXZlbm9kZCcsIGNsaXBSdWxlOidldmVub2RkJ319XG4gICAgLz5cbiAgPC9zdmc+XG4pXG5cblR3aXR0ZXJJY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgd2lkdGg6ICcxMDBweCcsXG4gIGhlaWdodDogJzEwMHB4J1xufVxuXG5leHBvcnQgZGVmYXVsdCBUd2l0dGVySWNvblxuIl19 */\n/*@ sourceURL=components/TwitterIcon.js */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M38.167,22.283c-2.619,0.953-4.274,3.411-4.086,6.101  l0.063,1.038l-1.048-0.127c-3.813-0.487-7.145-2.139-9.974-4.915l-1.383-1.377l-0.356,1.017c-0.754,2.267-0.272,4.661,1.299,6.271  c0.838,0.89,0.649,1.017-0.796,0.487c-0.503-0.169-0.943-0.296-0.985-0.233c-0.146,0.149,0.356,2.076,0.754,2.839  c0.545,1.06,1.655,2.097,2.871,2.712l1.027,0.487l-1.215,0.021c-1.173,0-1.215,0.021-1.089,0.467  c0.419,1.377,2.074,2.839,3.918,3.475l1.299,0.444l-1.131,0.678c-1.676,0.976-3.646,1.526-5.616,1.567  C20.775,43.256,20,43.341,20,43.405c0,0.211,2.557,1.397,4.044,1.864c4.463,1.377,9.765,0.783,13.746-1.568  c2.829-1.674,5.657-5,6.978-8.221c0.713-1.715,1.425-4.851,1.425-6.354c0-0.975,0.063-1.102,1.236-2.267  c0.692-0.678,1.341-1.419,1.467-1.631c0.21-0.403,0.188-0.403-0.88-0.043c-1.781,0.636-2.033,0.551-1.152-0.402  c0.649-0.678,1.425-1.907,1.425-2.267c0-0.063-0.314,0.042-0.671,0.233c-0.377,0.212-1.215,0.53-1.844,0.72l-1.131,0.361l-1.027-0.7  c-0.566-0.381-1.361-0.805-1.781-0.932C40.766,21.902,39.131,21.944,38.167,22.283z M34,64C17.432,64,4,50.568,4,34  C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z",
    style: {
      fillRule: 'evenodd',
      clipRule: 'evenodd'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: "jsx-44294866"
  }));
};

TwitterIcon.defaultProps = {
  width: '100px',
  height: '100px'
};
/* harmony default export */ __webpack_exports__["a"] = (TwitterIcon);

/***/ }),

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
var _jsxFileName = "/home/mohammad/Desktop/FirstNextProject/pages/about.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_MyLayout_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "This is the about page"));
});

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/about.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map