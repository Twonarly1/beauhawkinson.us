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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Heading */ \"./src/components/Heading.tsx\");\nvar _this = undefined;\n\n\n\n\nvar Portfolio = function(param) {\n    var data = param.data;\n    if (data) {\n        var projects = data.projects.slice(0, 3).map(function(projects) {\n            var projectImage = \"images/portfolio/\" + projects.image;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-lg border bg-white shadow-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: projects.url,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"justify-items-center overflow-hidden rounded-t-lg \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: projectImage,\n                                alt: projects.title,\n                                className: \"relative h-full w-full object-cover\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-1 flex-col justify-between rounded-b-lg border-t p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"projectsTitle\",\n                                    children: projects.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"projectsDescription\",\n                                    children: projects.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this)\n            }, projects.title, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this);\n        });\n        var projectsNoImage = data.projects.slice(3, 6).map(function(projects) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden rounded-lg border bg-white shadow-lg md:mt-0 md:flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"\",\n                    href: projects.url,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2 p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"projectsTitle\",\n                                children: projects.title\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"projectsDescription\",\n                                children: projects.description\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this)\n            }, projects.title, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-5xl pt-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Projects\",\n                subtitle: \"My Contributions\"\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3\",\n                children: [\n                    projects,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/skills/graphql.svg\",\n                        className: \"w-4\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-4 grid-cols-2 gap-4 sm:grid-cols-4 md:grid\",\n                children: [\n                    projectsNoImage,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex cursor-default flex-col items-center justify-center py-4 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-lg font-bold text-gray-800\",\n                                children: \"Want to see more?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-gray-600\",\n                                children: \"Explore more of my work\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/work\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"mt-3 rounded-md bg-gray-800 py-1 px-6 text-gray-100 hover:bg-gray-700\",\n                                    children: \"View all\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, _this);\n};\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztxQ0FBTTswQ0FDTiw4REFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLGVBQWU7MENBQUMseUJBQXVCOzs7OztxQ0FBTTswQ0FDNUQsOERBQUNYLGtEQUFJO2dDQUFDYSxJQUFJLEVBQUMsT0FBTzswQ0FDaEIsNEVBQUNELEdBQUM7b0NBQUNELFNBQVMsRUFBQyx1RUFBdUU7OENBQUMsVUFFckY7Ozs7O3lDQUFJOzs7OztxQ0FDQzs7Ozs7OzZCQUNIOzs7Ozs7cUJBQ0Y7Ozs7OzthQUNGLENBQ1A7Q0FDRjtBQWxFS1IsS0FBQUEsU0FBUztBQW9FZiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy50c3g/OTI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGluZyBmcm9tICcuL0hlYWRpbmcnXG5cbmNvbnN0IFBvcnRmb2xpbyA9ICh7IGRhdGEgfSkgPT4ge1xuICBpZiAoZGF0YSkge1xuICAgIHZhciBwcm9qZWN0cyA9IGRhdGEucHJvamVjdHMuc2xpY2UoMCwgMykubWFwKGZ1bmN0aW9uIChwcm9qZWN0cykge1xuICAgICAgdmFyIHByb2plY3RJbWFnZSA9ICdpbWFnZXMvcG9ydGZvbGlvLycgKyBwcm9qZWN0cy5pbWFnZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17cHJvamVjdHMudGl0bGV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYmctd2hpdGUgc2hhZG93LWxnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3RzLnVybH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktaXRlbXMtY2VudGVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLXQtbGcgXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3RJbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9e3Byb2plY3RzLnRpdGxlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLWItbGcgYm9yZGVyLXQgcC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNUaXRsZVwiPntwcm9qZWN0cy50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0c0Rlc2NyaXB0aW9uXCI+e3Byb2plY3RzLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9KVxuICAgIHZhciBwcm9qZWN0c05vSW1hZ2UgPSBkYXRhLnByb2plY3RzLnNsaWNlKDMsIDYpLm1hcChmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e3Byb2plY3RzLnRpdGxlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiByb3VuZGVkLWxnIGJvcmRlciBiZy13aGl0ZSBzaGFkb3ctbGcgbWQ6bXQtMCBtZDpmbGV4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiIGhyZWY9e3Byb2plY3RzLnVybH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0c1RpdGxlXCI+e3Byb2plY3RzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzRGVzY3JpcHRpb25cIj57cHJvamVjdHMuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNXhsIHB0LTEwXCI+XG4gICAgICA8SGVhZGluZyB0aXRsZT17J1Byb2plY3RzJ30gc3VidGl0bGU9eydNeSBDb250cmlidXRpb25zJ30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBncmlkIGdyaWQtY29scy0xIGdhcC00IHNtOmdyaWQtY29scy0zXCI+XG4gICAgICAgIHtwcm9qZWN0c31cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NraWxscy9ncmFwaHFsLnN2Z1wiIGNsYXNzTmFtZT1cInctNFwiIGFsdD1cIlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNCBncmlkLWNvbHMtMiBnYXAtNCBzbTpncmlkLWNvbHMtNCBtZDpncmlkXCI+XG4gICAgICAgIHtwcm9qZWN0c05vSW1hZ2V9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjdXJzb3ItZGVmYXVsdCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgV2FudCB0byBzZWUgbW9yZT9cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5FeHBsb3JlIG1vcmUgb2YgbXkgd29yazwvZGl2PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd29ya1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXQtMyByb3VuZGVkLW1kIGJnLWdyYXktODAwIHB5LTEgcHgtNiB0ZXh0LWdyYXktMTAwIGhvdmVyOmJnLWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgIFZpZXcgYWxsXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpb1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIkhlYWRpbmciLCJQb3J0Zm9saW8iLCJkYXRhIiwicHJvamVjdHMiLCJzbGljZSIsIm1hcCIsInByb2plY3RJbWFnZSIsImltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJ1cmwiLCJpbWciLCJzcmMiLCJhbHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJvamVjdHNOb0ltYWdlIiwic3VidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Projects.tsx\n"));

/***/ })

});