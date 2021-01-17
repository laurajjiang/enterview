module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/NavBar/index.jsx":
/*!*************************************!*\
  !*** ./components/NavBar/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ \"@blueprintjs/core\");\n/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/laurajiang/Documents/enterview/components/NavBar/index.jsx\";\n\n\nfunction NavBar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"], {\n    fixedToTop: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"].Group, {\n      style: {\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"].Heading, {\n        children: \"insert app name\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"].Divider, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        className: \"bp3-minimal\",\n        icon: \"home\",\n        text: \"Home\",\n        onClick: e => window.location.href = \"/\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        className: \"bp3-minimal\",\n        icon: \"calendar\",\n        text: \"Schedule\",\n        onClick: e => window.location.href = \"/schedule\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        className: \"bp3-minimal\",\n        icon: \"annotation\",\n        text: \"Practice\",\n        onClick: e => window.location.href = \"/practice\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        className: \"bp3-minimal\",\n        icon: \"archive\",\n        text: \"Resources\",\n        onClick: e => window.location.href = \"/resources\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"].Group, {\n      align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__[\"Alignment\"].RIGHT,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        className: \"bp3-minimal\",\n        icon: \"id-number\",\n        text: \"About\",\n        onClick: e => window.location.href = \"/about\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci9pbmRleC5qc3g/N2RlNyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIkFsaWdubWVudCIsIlJJR0hUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFDL0Isc0JBQ0UscUVBQUMsd0RBQUQ7QUFBUSxjQUFVLE1BQWxCO0FBQUEsNEJBQ0UscUVBQUMsd0RBQUQsQ0FBUSxLQUFSO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLGVBQU8sRUFBRSxNQURKO0FBRUxDLGtCQUFVLEVBQUUsUUFGUDtBQUdMQyxzQkFBYyxFQUFFO0FBSFgsT0FEVDtBQUFBLDhCQU1FLHFFQUFDLHdEQUFELENBQVEsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBT0UscUVBQUMsd0RBQUQsQ0FBUSxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVFFLHFFQUFDLHdEQUFEO0FBQ0UsaUJBQVMsRUFBQyxhQURaO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxZQUFJLEVBQUMsTUFIUDtBQUlFLGVBQU8sRUFBR0MsQ0FBRCxJQUFRQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCO0FBSjFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQWNFLHFFQUFDLHdEQUFEO0FBQ0UsaUJBQVMsRUFBQyxhQURaO0FBRUUsWUFBSSxFQUFDLFVBRlA7QUFHRSxZQUFJLEVBQUMsVUFIUDtBQUlFLGVBQU8sRUFBR0gsQ0FBRCxJQUFRQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCO0FBSjFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRixlQW9CRSxxRUFBQyx3REFBRDtBQUNFLGlCQUFTLEVBQUMsYUFEWjtBQUVFLFlBQUksRUFBQyxZQUZQO0FBR0UsWUFBSSxFQUFDLFVBSFA7QUFJRSxlQUFPLEVBQUdILENBQUQsSUFBUUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QjtBQUoxQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJGLGVBMEJFLHFFQUFDLHdEQUFEO0FBQ0UsaUJBQVMsRUFBQyxhQURaO0FBRUUsWUFBSSxFQUFDLFNBRlA7QUFHRSxZQUFJLEVBQUMsV0FIUDtBQUlFLGVBQU8sRUFBR0gsQ0FBRCxJQUFRQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCO0FBSjFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFrQ0UscUVBQUMsd0RBQUQsQ0FBUSxLQUFSO0FBQWMsV0FBSyxFQUFFQywyREFBUyxDQUFDQyxLQUEvQjtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQ0UsaUJBQVMsRUFBQyxhQURaO0FBRUUsWUFBSSxFQUFDLFdBRlA7QUFHRSxZQUFJLEVBQUMsT0FIUDtBQUlFLGVBQU8sRUFBR0wsQ0FBRCxJQUFRQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCO0FBSjFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZCYXIvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWxpZ25tZW50LCBCdXR0b24sIE5hdmJhciB9IGZyb20gXCJAYmx1ZXByaW50anMvY29yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XG4gIHJldHVybiAoXG4gICAgPE5hdmJhciBmaXhlZFRvVG9wPlxuICAgICAgPE5hdmJhci5Hcm91cFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIH19PlxuICAgICAgICA8TmF2YmFyLkhlYWRpbmc+aW5zZXJ0IGFwcCBuYW1lPC9OYXZiYXIuSGVhZGluZz5cbiAgICAgICAgPE5hdmJhci5EaXZpZGVyIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9J2JwMy1taW5pbWFsJ1xuICAgICAgICAgIGljb249J2hvbWUnXG4gICAgICAgICAgdGV4dD0nSG9tZSdcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCIpfVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPSdicDMtbWluaW1hbCdcbiAgICAgICAgICBpY29uPSdjYWxlbmRhcidcbiAgICAgICAgICB0ZXh0PSdTY2hlZHVsZSdcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvc2NoZWR1bGVcIil9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9J2JwMy1taW5pbWFsJ1xuICAgICAgICAgIGljb249J2Fubm90YXRpb24nXG4gICAgICAgICAgdGV4dD0nUHJhY3RpY2UnXG4gICAgICAgICAgb25DbGljaz17KGUpID0+ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3ByYWN0aWNlXCIpfVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPSdicDMtbWluaW1hbCdcbiAgICAgICAgICBpY29uPSdhcmNoaXZlJ1xuICAgICAgICAgIHRleHQ9J1Jlc291cmNlcydcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvcmVzb3VyY2VzXCIpfVxuICAgICAgICAvPlxuICAgICAgPC9OYXZiYXIuR3JvdXA+XG4gICAgICA8TmF2YmFyLkdyb3VwIGFsaWduPXtBbGlnbm1lbnQuUklHSFR9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPSdicDMtbWluaW1hbCdcbiAgICAgICAgICBpY29uPSdpZC1udW1iZXInXG4gICAgICAgICAgdGV4dD0nQWJvdXQnXG4gICAgICAgICAgb25DbGljaz17KGUpID0+ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2Fib3V0XCIpfVxuICAgICAgICAvPlxuICAgICAgPC9OYXZiYXIuR3JvdXA+XG4gICAgPC9OYXZiYXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavBar/index.jsx\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ \"@blueprintjs/core\");\n/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NavBar_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBar/index.jsx */ \"./components/NavBar/index.jsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/laurajiang/Documents/enterview/pages/index.js\";\n\n\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Enterview\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_NavBar_index_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/topHomeImg.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: \"OUR MISSION\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"bp3-heading\",\n          children: [\"We want to help you \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 33\n          }, this), \" ace your interview\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \".bp3-text-disabled\",\n          children: [\"A mock interview with a peer is the best way to start working on\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 13\n          }, this), \"your interview skills in a low-pressure interview. Simply schedule\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, this), \"your first mock interview now and start leveling up.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          className: \"bp3-button bp3-outlined\",\n          children: \"Schedule a mock interview\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.mainalt\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: \"bp3-heading\",\n      children: [\"Be an interviewer or an \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 33\n      }, this), \" interviewee, both are great\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"/botHomeImg.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.footer\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwibWFpbmFsdCIsImZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixzQkFDRTtBQUFLLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFNRTtBQUFNLGVBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsSUFBeEI7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFJLG1CQUFTLEVBQUMsYUFBZDtBQUFBLDBEQUNzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUR0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLGVBTUU7QUFBRyxtQkFBUyxFQUFDLG9CQUFiO0FBQUEsc0dBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixxRkFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixlQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkYsZUFjRSxxRUFBQyx3REFBRDtBQUFRLG1CQUFTLEVBQUMseUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBMkJFO0FBQU0sZUFBUyxFQUFFRiw4REFBTSxDQUFDRztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JGLGVBNEJFO0FBQUksZUFBUyxFQUFDLGFBQWQ7QUFBQSwwREFDMEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1QkYsZUErQkU7QUFBSyxTQUFHLEVBQUU7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0JGLGVBZ0NFO0FBQVEsZUFBUyxFQUFFSCw4REFBTSxDQUFDSTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0NEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGJsdWVwcmludGpzL2NvcmVcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyL2luZGV4LmpzeFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RW50ZXJ2aWV3PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2QmFyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGltZyBzcmM9e1wiL3RvcEhvbWVJbWcucG5nXCJ9IC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPk9VUiBNSVNTSU9OPC9oMz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdicDMtaGVhZGluZyc+XG4gICAgICAgICAgICBXZSB3YW50IHRvIGhlbHAgeW91IDxiciAvPiBhY2UgeW91ciBpbnRlcnZpZXdcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nLmJwMy10ZXh0LWRpc2FibGVkJz5cbiAgICAgICAgICAgIEEgbW9jayBpbnRlcnZpZXcgd2l0aCBhIHBlZXIgaXMgdGhlIGJlc3Qgd2F5IHRvIHN0YXJ0IHdvcmtpbmcgb25cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgeW91ciBpbnRlcnZpZXcgc2tpbGxzIGluIGEgbG93LXByZXNzdXJlIGludGVydmlldy4gU2ltcGx5IHNjaGVkdWxlXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIHlvdXIgZmlyc3QgbW9jayBpbnRlcnZpZXcgbm93IGFuZCBzdGFydCBsZXZlbGluZyB1cC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J2JwMy1idXR0b24gYnAzLW91dGxpbmVkJz5cbiAgICAgICAgICAgIFNjaGVkdWxlIGEgbW9jayBpbnRlcnZpZXdcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWluYWx0fT48L21haW4+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdicDMtaGVhZGluZyc+XG4gICAgICAgIEJlIGFuIGludGVydmlld2VyIG9yIGFuIDxiciAvPiBpbnRlcnZpZXdlZSwgYm90aCBhcmUgZ3JlYXRcbiAgICAgIDwvaDE+XG4gICAgICA8aW1nIHNyYz17XCIvYm90SG9tZUltZy5wbmdcIn0gLz5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT48L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"mainalt\": \"Home_mainalt__8WmPS\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2VmZDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJtYWluYWx0XCI6IFwiSG9tZV9tYWluYWx0X184V21QU1wiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fYXh4MllcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzJTZHRCXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "@blueprintjs/core":
/*!************************************!*\
  !*** external "@blueprintjs/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@blueprintjs/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmx1ZXByaW50anMvY29yZVwiPzMwMTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGJsdWVwcmludGpzL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmx1ZXByaW50anMvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@blueprintjs/core\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });