"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects.tsx":
/*!*************************************!*\
  !*** ./src/components/Projects.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Heading */ \"./src/components/Heading.tsx\");\nvar _this = undefined;\n\n\n\n\nvar Portfolio = function(param) {\n    var data = param.data;\n    if (data) {\n        var _this1 = _this;\n        var test = data.projects.map(function(project) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: project.skills\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 7,\n                columnNumber: 49\n            }, _this1);\n        });\n        console.log(\"skills\", test);\n        var projects = data.projects.slice(0, 3).map(function(projects) {\n            var projectImage = \"images/portfolio/\" + projects.image;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-lg border bg-white shadow-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: projects.url,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"justify-items-center overflow-hidden rounded-t-lg \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: projectImage,\n                                alt: projects.title,\n                                className: \"relative h-full w-full object-cover\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-1 flex-col justify-between rounded-b-lg border-t p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"projectsTitle\",\n                                    children: projects.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"projectsDescription\",\n                                    children: projects.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex space-x-2 p-2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)\n            }, projects.title, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this);\n        });\n        var projectsNoImage = data.projects.slice(3, 6).map(function(projects) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden rounded-lg border bg-white shadow-lg md:mt-0 md:flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"\",\n                    href: projects.url,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2 p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"projectsTitle\",\n                                children: projects.title\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"projectsDescription\",\n                                children: projects.description\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this)\n            }, projects.title, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-5xl pt-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Projects\",\n                subtitle: \"My Contributions\"\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3\",\n                children: projects\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-4 grid-cols-2 gap-4 sm:grid-cols-4 md:grid\",\n                children: [\n                    projectsNoImage,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex cursor-default flex-col items-center justify-center py-4 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-lg font-bold text-gray-800\",\n                                children: \"Want to see more?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-gray-600\",\n                                children: \"Explore more of my work\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/work\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"mt-3 rounded-md bg-gray-800 py-1 px-6 text-gray-100 hover:bg-gray-700\",\n                                    children: \"View all\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, _this);\n};\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dCQUFDTyxTQUFTLEVBQUMsK0NBQStDOztvQkFDM0RTLGVBQWU7a0NBQ2hCLDhEQUFDaEIsS0FBRzt3QkFBQ08sU0FBUyxFQUFDLDJFQUEyRTs7MENBQ3hGLDhEQUFDUCxLQUFHO2dDQUFDTyxTQUFTLEVBQUMsaUNBQWlDOzBDQUFDLG1CQUVqRDs7Ozs7cUNBQU07MENBQ04sOERBQUNQLEtBQUc7Z0NBQUNPLFNBQVMsRUFBQyxlQUFlOzBDQUFDLHlCQUF1Qjs7Ozs7cUNBQU07MENBQzVELDhEQUFDaEIsa0RBQUk7Z0NBQUNrQixJQUFJLEVBQUMsT0FBTzswQ0FDaEIsNEVBQUNELEdBQUM7b0NBQUNELFNBQVMsRUFBQyx1RUFBdUU7OENBQUMsVUFFckY7Ozs7O3lDQUFJOzs7OztxQ0FDQzs7Ozs7OzZCQUNIOzs7Ozs7cUJBQ0Y7Ozs7OzthQUNGLENBQ1A7Q0FDRjtBQTdFS2IsS0FBQUEsU0FBUztBQStFZiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy50c3g/OTI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGluZyBmcm9tICcuL0hlYWRpbmcnXG5cbmNvbnN0IFBvcnRmb2xpbyA9ICh7IGRhdGEgfSkgPT4ge1xuICBpZiAoZGF0YSkge1xuICAgIGNvbnN0IHRlc3QgPSBkYXRhLnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gPGRpdj57cHJvamVjdC5za2lsbHN9PC9kaXY+KVxuICAgIGNvbnNvbGUubG9nKCdza2lsbHMnLCB0ZXN0KVxuXG4gICAgdmFyIHByb2plY3RzID0gZGF0YS5wcm9qZWN0cy5zbGljZSgwLCAzKS5tYXAoZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gICAgICB2YXIgcHJvamVjdEltYWdlID0gJ2ltYWdlcy9wb3J0Zm9saW8vJyArIHByb2plY3RzLmltYWdlXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtwcm9qZWN0cy50aXRsZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBiZy13aGl0ZSBzaGFkb3ctbGdcIlxuICAgICAgICA+XG4gICAgICAgICAgPGEgaHJlZj17cHJvamVjdHMudXJsfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1pdGVtcy1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtdC1sZyBcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdEltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdHMudGl0bGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLWItbGcgYm9yZGVyLXQgcC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNUaXRsZVwiPntwcm9qZWN0cy50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0c0Rlc2NyaXB0aW9uXCI+e3Byb2plY3RzLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIHAtMlwiPlxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiByb3VuZGVkLWZ1bGwgIGJvcmRlciBweC0zIHB5LTEgbWQ6cHgtMVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9za2lsbHMvZ3JhcGhxbC5zdmdcIiBjbGFzc05hbWU9XCJ3LTRcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbWQ6aGlkZGVuXCI+IEdyYXBoUUw8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIHJvdW5kZWQtZnVsbCBib3JkZXIgcHgtMyBweS0xIG1kOnB4LTFcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2tpbGxzL3N0ZXB6ZW4uc3ZnXCIgY2xhc3NOYW1lPVwidy00XCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1kOmhpZGRlblwiPiBTdGVwWmVuPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj57JyAnfSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSlcbiAgICB2YXIgcHJvamVjdHNOb0ltYWdlID0gZGF0YS5wcm9qZWN0cy5zbGljZSgzLCA2KS5tYXAoZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtwcm9qZWN0cy50aXRsZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gcm91bmRlZC1sZyBib3JkZXIgYmctd2hpdGUgc2hhZG93LWxnIG1kOm10LTAgbWQ6ZmxleFwiXG4gICAgICAgID5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJcIiBocmVmPXtwcm9qZWN0cy51cmx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgcC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNUaXRsZVwiPntwcm9qZWN0cy50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0c0Rlc2NyaXB0aW9uXCI+e3Byb2plY3RzLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTV4bCBwdC0xMFwiPlxuICAgICAgPEhlYWRpbmcgdGl0bGU9eydQcm9qZWN0cyd9IHN1YnRpdGxlPXsnTXkgQ29udHJpYnV0aW9ucyd9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNCBzbTpncmlkLWNvbHMtM1wiPlxuICAgICAgICB7cHJvamVjdHN9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNCBncmlkLWNvbHMtMiBnYXAtNCBzbTpncmlkLWNvbHMtNCBtZDpncmlkXCI+XG4gICAgICAgIHtwcm9qZWN0c05vSW1hZ2V9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjdXJzb3ItZGVmYXVsdCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgV2FudCB0byBzZWUgbW9yZT9cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5FeHBsb3JlIG1vcmUgb2YgbXkgd29yazwvZGl2PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd29ya1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXQtMyByb3VuZGVkLW1kIGJnLWdyYXktODAwIHB5LTEgcHgtNiB0ZXh0LWdyYXktMTAwIGhvdmVyOmJnLWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgIFZpZXcgYWxsXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpb1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIkhlYWRpbmciLCJQb3J0Zm9saW8iLCJkYXRhIiwidGVzdCIsInByb2plY3RzIiwibWFwIiwicHJvamVjdCIsImRpdiIsInNraWxscyIsImNvbnNvbGUiLCJsb2ciLCJzbGljZSIsInByb2plY3RJbWFnZSIsImltYWdlIiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJ1cmwiLCJpbWciLCJzcmMiLCJhbHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJvamVjdHNOb0ltYWdlIiwic3VidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Projects.tsx\n"));

/***/ })

});