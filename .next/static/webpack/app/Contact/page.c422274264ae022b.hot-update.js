"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Contact/page",{

/***/ "(app-pages-browser)/./app/components/ContactSection.jsx":
/*!*******************************************!*\
  !*** ./app/components/ContactSection.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ThemeContext */ \"(app-pages-browser)/./app/context/ThemeContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ContactSection = ()=>{\n    _s();\n    const [emailSubmitted, setEmailSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const data = {\n            email: e.target.email.value,\n            subject: e.target.subject.value,\n            message: e.target.message.value\n        };\n        const JSONdata = JSON.stringify(data);\n        const endpoint = \"/api\";\n        const options = {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSONdata\n        };\n        const response = await fetch(endpoint, options);\n        const resData = await response.json();\n        if (response.status === 200) {\n            console.log(\"Message sent.\");\n            setEmailSubmitted(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"contact\",\n        className: \"flex h-screen items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: emailSubmitted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-pink-400 text-md mt-2\",\n                children: \"Email sent!\"\n            }, void 0, false, {\n                fileName: \"/Users/jennieshu/Desktop/project-1-personal-portfolio-shutj3/app/components/ContactSection.jsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-4xl font-extrabold font-['ui-serif'] text-pink-300 mb-4\",\n                                children: \"Let's chat\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jennieshu/Desktop/project-1-personal-portfolio-shutj3/app/components/ContactSection.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                className: \"text-indigo-400 block mb-2 text-sm font-medium\",\n                                children: \"Your Email\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jennieshu/Desktop/project-1-personal-portfolio-shutj3/app/components/ContactSection.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                name: \"email\",\n                                type: \"email\",\n                                id: \"email\",\n                                required: true,\n                                className: \"bg-pink-300 border border-pink-300 text-sm rounded-lg block w-full p-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jennieshu/Desktop/project-1-personal-portfolio-shutj3/app/components/ContactSection.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jennieshu/Desktop/project-1-personal-portfolio-shutj3/app/components/ContactSection.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"Subject\",\n                                className: \"text-indigo-400 block text-sm mb-2 font-medium\",\n                                children: \"Subject\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jennieshu/Desktop/project-1-personal-portfolio-shutj3/app/components/ContactSection.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                name: \"subject\",\n                                type: \"text\",\n                                id: \"subject\",\n                                required: true,\n                                className: \"bg-pink-300 border border-pink-300 text-sm rounded-lg block w-full p-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jennieshu/Desktop/project-1-personal-portfolio-shutj3/app/components/ContactSection.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jennieshu/Desktop/project-1-personal-portfolio-shutj3/app/components/ContactSection.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"message\",\n                                className: \"text-indigo-400 block text-sm mb-2 font-medium\",\n                                children: \"Message\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jennieshu/Desktop/project-1-personal-portfolio-shutj3/app/components/ContactSection.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                name: \"message\",\n                                id: \"message\",\n                                className: \"bg-pink-300 border border-pink-300 text-sm rounded-lg block w-full p-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jennieshu/Desktop/project-1-personal-portfolio-shutj3/app/components/ContactSection.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jennieshu/Desktop/project-1-personal-portfolio-shutj3/app/components/ContactSection.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-medium font-['ui-serif'] hover:text-sky-800 py-2.5 px-5 rounded-lg w-full\",\n                        children: \"Send Message\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jennieshu/Desktop/project-1-personal-portfolio-shutj3/app/components/ContactSection.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jennieshu/Desktop/project-1-personal-portfolio-shutj3/app/components/ContactSection.jsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/jennieshu/Desktop/project-1-personal-portfolio-shutj3/app/components/ContactSection.jsx\",\n            lineNumber: 39,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jennieshu/Desktop/project-1-personal-portfolio-shutj3/app/components/ContactSection.jsx\",\n        lineNumber: 36,\n        columnNumber: 7\n    }, undefined);\n};\n_s(ContactSection, \"IL/1oxkK5/Jlk2NonsoBRMUDKwE=\");\n_c = ContactSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactSection);\nvar _c;\n$RefreshReg$(_c, \"ContactSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dDO0FBQ1c7QUFFbkQsTUFBTUcsaUJBQWlCOztJQUNyQixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdKLCtDQUFRQSxDQUFDO0lBRXJELE1BQU1LLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsT0FBTztZQUNYQyxPQUFPSCxFQUFFSSxNQUFNLENBQUNELEtBQUssQ0FBQ0UsS0FBSztZQUMzQkMsU0FBU04sRUFBRUksTUFBTSxDQUFDRSxPQUFPLENBQUNELEtBQUs7WUFDL0JFLFNBQVNQLEVBQUVJLE1BQU0sQ0FBQ0csT0FBTyxDQUFDRixLQUFLO1FBQ2pDO1FBQ0EsTUFBTUcsV0FBV0MsS0FBS0MsU0FBUyxDQUFDUjtRQUNoQyxNQUFNUyxXQUFXO1FBRWpCLE1BQU1DLFVBQVU7WUFDZEMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNUDtRQUNSO1FBRUEsTUFBTVEsV0FBVyxNQUFNQyxNQUFNTixVQUFVQztRQUN2QyxNQUFNTSxVQUFVLE1BQU1GLFNBQVNHLElBQUk7UUFFbkMsSUFBSUgsU0FBU0ksTUFBTSxLQUFLLEtBQUs7WUFDM0JDLFFBQVFDLEdBQUcsQ0FBQztZQUNaeEIsa0JBQWtCO1FBQ3BCO0lBQ0Y7SUFFQSxxQkFDSSw4REFBQ3lCO1FBQ0NDLElBQUc7UUFDSEMsV0FBVTtrQkFDViw0RUFBQ0M7c0JBQ0U3QiwrQkFDQyw4REFBQzhCO2dCQUFFRixXQUFVOzBCQUE2Qjs7Ozs7MENBSTFDLDhEQUFDRztnQkFBS0gsV0FBVTtnQkFBZ0JJLFVBQVU5Qjs7a0NBQ3hDLDhEQUFDMkI7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDSztnQ0FBR0wsV0FBVTswQ0FBK0Q7Ozs7OzswQ0FDN0UsOERBQUNNO2dDQUNDQyxTQUFRO2dDQUNSUCxXQUFVOzBDQUNYOzs7Ozs7MENBR0QsOERBQUNRO2dDQUNDQyxNQUFLO2dDQUNMQyxNQUFLO2dDQUNMWCxJQUFHO2dDQUNIWSxRQUFRO2dDQUNSWCxXQUFVOzs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ007Z0NBQ0NDLFNBQVE7Z0NBQ1JQLFdBQVU7MENBQ1g7Ozs7OzswQ0FHRCw4REFBQ1E7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLE1BQUs7Z0NBQ0xYLElBQUc7Z0NBQ0hZLFFBQVE7Z0NBQ1JYLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FHZCw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDTTtnQ0FDQ0MsU0FBUTtnQ0FDUlAsV0FBVTswQ0FDWDs7Ozs7OzBDQUdELDhEQUFDWTtnQ0FDQ0gsTUFBSztnQ0FDTFYsSUFBRztnQ0FDSEMsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDYTt3QkFDQ0gsTUFBSzt3QkFDTFYsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBakdNN0I7S0FBQUE7QUFtR04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24uanN4PzQxZWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIi4uL2NvbnRleHQvVGhlbWVDb250ZXh0XCI7XG5cbmNvbnN0IENvbnRhY3RTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBbZW1haWxTdWJtaXR0ZWQsIHNldEVtYWlsU3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZW1haWw6IGUudGFyZ2V0LmVtYWlsLnZhbHVlLFxuICAgICAgc3ViamVjdDogZS50YXJnZXQuc3ViamVjdC52YWx1ZSxcbiAgICAgIG1lc3NhZ2U6IGUudGFyZ2V0Lm1lc3NhZ2UudmFsdWUsXG4gICAgfTtcbiAgICBjb25zdCBKU09OZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIGNvbnN0IGVuZHBvaW50ID0gXCIvYXBpXCI7XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTmRhdGEsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSBzZW50LlwiKTtcbiAgICAgIHNldEVtYWlsU3VibWl0dGVkKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9XCJjb250YWN0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7ZW1haWxTdWJtaXR0ZWQgPyAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXBpbmstNDAwIHRleHQtbWQgbXQtMlwiPlxuICAgICAgICAgICAgICBFbWFpbCBzZW50IVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCBmb250LVsndWktc2VyaWYnXSB0ZXh0LXBpbmstMzAwIG1iLTRcIj5MZXQncyBjaGF0PC9oMT5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby00MDAgYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBZb3VyIEVtYWlsXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcGluay0zMDAgYm9yZGVyIGJvcmRlci1waW5rLTMwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgYmxvY2sgdy1mdWxsIHAtM1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIlN1YmplY3RcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNDAwIGJsb2NrIHRleHQtc20gbWItMiBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU3ViamVjdFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3ViamVjdFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBpZD1cInN1YmplY3RcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXBpbmstMzAwIGJvcmRlciBib3JkZXItcGluay0zMDAgdGV4dC1zbSByb3VuZGVkLWxnIGJsb2NrIHctZnVsbCBwLTNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTQwMCBibG9jayB0ZXh0LXNtIG1iLTIgZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE1lc3NhZ2VcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXBpbmstMzAwIGJvcmRlciBib3JkZXItcGluay0zMDAgdGV4dC1zbSByb3VuZGVkLWxnIGJsb2NrIHctZnVsbCBwLTNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWluZGlnby01MDAgdmlhLXB1cnBsZS01MDAgdG8tcGluay01MDAgZm9udC1tZWRpdW0gZm9udC1bJ3VpLXNlcmlmJ10gaG92ZXI6dGV4dC1za3ktODAwIHB5LTIuNSBweC01IHJvdW5kZWQtbGcgdy1mdWxsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNlbmQgTWVzc2FnZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFNlY3Rpb247Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VUaGVtZSIsIkNvbnRhY3RTZWN0aW9uIiwiZW1haWxTdWJtaXR0ZWQiLCJzZXRFbWFpbFN1Ym1pdHRlZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJlbWFpbCIsInRhcmdldCIsInZhbHVlIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJKU09OZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbmRwb2ludCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXNEYXRhIiwianNvbiIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwiaDEiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ContactSection.jsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/context/ThemeContext.js":
/*!*************************************!*\
  !*** ./app/context/ThemeContext.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: function() { return /* binding */ ThemeProvider; },\n/* harmony export */   useTheme: function() { return /* binding */ useTheme; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ ThemeProvider,useTheme auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ThemeProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    const toggleTheme = ()=>{\n        setTheme(theme === \"light\" ? \"dark\" : \"light\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/jennieshu/Desktop/project-1-personal-portfolio-shutj3/app/context/ThemeContext.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ThemeProvider, \"1NR3O0/bzzhjlLyt740h+JhxH9c=\");\n_c = ThemeProvider;\nconst useTheme = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);\n};\n_s1(useTheme, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"ThemeProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb250ZXh0L1RoZW1lQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ29FO0FBRXBFLE1BQU1JLDZCQUFlSCxvREFBYUE7QUFFM0IsTUFBTUksZ0JBQWdCO1FBQUMsRUFBQ0MsUUFBUSxFQUFDOztJQUNwQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTU8sY0FBYztRQUNoQkQsU0FBU0QsVUFBVSxVQUFVLFNBQVM7SUFDMUM7SUFFQSxxQkFDSSw4REFBQ0gsYUFBYU0sUUFBUTtRQUFDQyxPQUFPO1lBQUVKO1lBQU9FO1FBQVk7a0JBQ2pESDs7Ozs7O0FBR1YsRUFBRTtHQVhXRDtLQUFBQTtBQWFOLE1BQU1PLFdBQVc7O0lBQU1ULE9BQUFBLGlEQUFVQSxDQUFDQztBQUFZLEVBQUU7SUFBMUNRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb250ZXh0L1RoZW1lQ29udGV4dC5qcz84NzY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0ICwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBUaGVtZVByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKFwibGlnaHRcIik7XG4gICAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PntcbiAgICAgICAgc2V0VGhlbWUodGhlbWUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0aGVtZSwgdG9nZ2xlVGhlbWUgfX0+XG4gICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VUaGVtZSA9ICgpID0+IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJUaGVtZUNvbnRleHQiLCJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0aGVtZSIsInNldFRoZW1lIiwidG9nZ2xlVGhlbWUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlVGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/context/ThemeContext.js\n"));

/***/ })

});