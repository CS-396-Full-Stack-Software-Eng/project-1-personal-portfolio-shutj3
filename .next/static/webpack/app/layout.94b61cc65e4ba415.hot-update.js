"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"12d8222809cd\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzA1YmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIxMmQ4MjIyODA5Y2RcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/ThemeToggle.jsx":
/*!****************************************!*\
  !*** ./app/components/ThemeToggle.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/ThemeContext */ \"(app-pages-browser)/./app/context/ThemeContext.js\");\n\nvar _s = $RefreshSig$();\n\nconst ThemeToggle = ()=>{\n    _s();\n    const { theme, toggleTheme } = (0,_context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.useTheme)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: toggleTheme,\n        className: \"px-4 py-2 rounded \".concat(theme === \"light\" ? \"bg-dark text-white\" : \"bg-light text-black\"),\n        children: theme === \"light\" ? \"Switch to Dark Theme\" : \"Switch to Light Theme\"\n    }, void 0, false, {\n        fileName: \"/Users/jennieshu/Desktop/project-1-personal-portfolio-shutj3/app/components/ThemeToggle.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ThemeToggle, \"Q4eAjrIZ0CuRuhycs6byifK2KBk=\", false, function() {\n    return [\n        _context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.useTheme\n    ];\n});\n_c = ThemeToggle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeToggle);\nvar _c;\n$RefreshReg$(_c, \"ThemeToggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RoZW1lVG9nZ2xlLmpzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFtRDtBQUVuRCxNQUFNQyxjQUFjOztJQUNoQixNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFLEdBQUdILCtEQUFRQTtJQUV2QyxxQkFDSSw4REFBQ0k7UUFDREMsU0FBU0Y7UUFDVEcsV0FBVyxxQkFFVixPQURDSixVQUFVLFVBQVUsdUJBQXVCO2tCQUc1Q0EsVUFBVSxVQUFVLHlCQUF5Qjs7Ozs7O0FBR3BEO0dBYklEOztRQUM2QkQsMkRBQVFBOzs7S0FEckNDO0FBZUosK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVGhlbWVUb2dnbGUuanN4PzRlODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiLi4vY29udGV4dC9UaGVtZUNvbnRleHRcIjtcblxuY29uc3QgVGhlbWVUb2dnbGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0aGVtZSwgdG9nZ2xlVGhlbWUgfSA9IHVzZVRoZW1lKCk7XG4gIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17dG9nZ2xlVGhlbWV9XG4gICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiByb3VuZGVkICR7XG4gICAgICAgICAgdGhlbWUgPT09ICdsaWdodCcgPyAnYmctZGFyayB0ZXh0LXdoaXRlJyA6ICdiZy1saWdodCB0ZXh0LWJsYWNrJ1xuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAge3RoZW1lID09PSAnbGlnaHQnID8gJ1N3aXRjaCB0byBEYXJrIFRoZW1lJyA6ICdTd2l0Y2ggdG8gTGlnaHQgVGhlbWUnfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IFRoZW1lVG9nZ2xlOyJdLCJuYW1lcyI6WyJ1c2VUaGVtZSIsIlRoZW1lVG9nZ2xlIiwidGhlbWUiLCJ0b2dnbGVUaGVtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ThemeToggle.jsx\n"));

/***/ })

});