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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Heading */ \"./src/components/Heading.tsx\");\nvar _this = undefined;\n\n\n\n\nvar Portfolio = function(param) {\n    var data = param.data;\n    if (data) {\n        var projects = data.projects.slice(0, 3).map(function(projects) {\n            var projectImage = \"images/portfolio/\" + projects.image;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-lg border bg-white shadow-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: projects.url,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"justify-items-center overflow-hidden rounded-t-lg \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: projectImage,\n                                alt: projects.title,\n                                className: \"relative h-full w-full object-cover\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-1 flex-col justify-between rounded-b-lg border-t p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"projectsTitle\",\n                                    children: projects.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"projectsDescription\",\n                                    children: projects.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative bottom-0 flex w-8 space-x-2 rounded-full border px-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/images/skills/graphql.svg\",\n                                        className: \"h-6 w-6\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this)\n            }, projects.title, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this);\n        });\n        var projectsNoImage = data.projects.slice(3, 6).map(function(projects) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden rounded-lg border bg-white shadow-lg md:mt-0 md:flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"\",\n                    href: projects.url,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2 p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"projectsTitle\",\n                                children: projects.title\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"projectsDescription\",\n                                children: projects.description\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, this)\n            }, projects.title, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-5xl pt-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Projects\",\n                subtitle: \"My Contributions\"\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3\",\n                children: projects\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-4 grid-cols-2 gap-4 sm:grid-cols-4 md:grid\",\n                children: [\n                    projectsNoImage,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex cursor-default flex-col items-center justify-center py-4 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-lg font-bold text-gray-800\",\n                                children: \"Want to see more?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-gray-600\",\n                                children: \"Explore more of my work\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/work\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"mt-3 rounded-md bg-gray-800 py-1 px-6 text-gray-100 hover:bg-gray-700\",\n                                    children: \"View all\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, _this);\n};\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDRCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsaUNBQWlDOzBDQUFDLG1CQUVqRDs7Ozs7cUNBQU07MENBQ04sOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxlQUFlOzBDQUFDLHlCQUF1Qjs7Ozs7cUNBQU07MENBQzVELDhEQUFDWCxrREFBSTtnQ0FBQ2EsSUFBSSxFQUFDLE9BQU87MENBQ2hCLDRFQUFDRCxHQUFDO29DQUFDRCxTQUFTLEVBQUMsdUVBQXVFOzhDQUFDLFVBRXJGOzs7Ozt5Q0FBSTs7Ozs7cUNBQ0M7Ozs7Ozs2QkFDSDs7Ozs7O3FCQUNGOzs7Ozs7YUFDRixDQUNQO0NBQ0Y7QUF2RUtSLEtBQUFBLFNBQVM7QUF5RWYsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMudHN4PzkyNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi9IZWFkaW5nJ1xuXG5jb25zdCBQb3J0Zm9saW8gPSAoeyBkYXRhIH0pID0+IHtcbiAgaWYgKGRhdGEpIHtcbiAgICB2YXIgcHJvamVjdHMgPSBkYXRhLnByb2plY3RzLnNsaWNlKDAsIDMpLm1hcChmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgICAgIHZhciBwcm9qZWN0SW1hZ2UgPSAnaW1hZ2VzL3BvcnRmb2xpby8nICsgcHJvamVjdHMuaW1hZ2VcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e3Byb2plY3RzLnRpdGxlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJnLXdoaXRlIHNoYWRvdy1sZ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0cy51cmx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC10LWxnIFwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0SW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0cy50aXRsZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQtYi1sZyBib3JkZXItdCBwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0c1RpdGxlXCI+e3Byb2plY3RzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzRGVzY3JpcHRpb25cIj57cHJvamVjdHMuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYm90dG9tLTAgZmxleCB3LTggc3BhY2UteC0yIHJvdW5kZWQtZnVsbCBib3JkZXIgcHgtMlwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvc2tpbGxzL2dyYXBocWwuc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTZcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSlcbiAgICB2YXIgcHJvamVjdHNOb0ltYWdlID0gZGF0YS5wcm9qZWN0cy5zbGljZSgzLCA2KS5tYXAoZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtwcm9qZWN0cy50aXRsZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gcm91bmRlZC1sZyBib3JkZXIgYmctd2hpdGUgc2hhZG93LWxnIG1kOm10LTAgbWQ6ZmxleFwiXG4gICAgICAgID5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJcIiBocmVmPXtwcm9qZWN0cy51cmx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgcC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNUaXRsZVwiPntwcm9qZWN0cy50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0c0Rlc2NyaXB0aW9uXCI+e3Byb2plY3RzLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTV4bCBwdC0xMFwiPlxuICAgICAgPEhlYWRpbmcgdGl0bGU9eydQcm9qZWN0cyd9IHN1YnRpdGxlPXsnTXkgQ29udHJpYnV0aW9ucyd9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNCBzbTpncmlkLWNvbHMtM1wiPlxuICAgICAgICB7cHJvamVjdHN9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNCBncmlkLWNvbHMtMiBnYXAtNCBzbTpncmlkLWNvbHMtNCBtZDpncmlkXCI+XG4gICAgICAgIHtwcm9qZWN0c05vSW1hZ2V9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjdXJzb3ItZGVmYXVsdCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgV2FudCB0byBzZWUgbW9yZT9cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5FeHBsb3JlIG1vcmUgb2YgbXkgd29yazwvZGl2PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd29ya1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXQtMyByb3VuZGVkLW1kIGJnLWdyYXktODAwIHB5LTEgcHgtNiB0ZXh0LWdyYXktMTAwIGhvdmVyOmJnLWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgIFZpZXcgYWxsXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpb1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIkhlYWRpbmciLCJQb3J0Zm9saW8iLCJkYXRhIiwicHJvamVjdHMiLCJzbGljZSIsIm1hcCIsInByb2plY3RJbWFnZSIsImltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJ1cmwiLCJpbWciLCJzcmMiLCJhbHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJvamVjdHNOb0ltYWdlIiwic3VidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Projects.tsx\n"));

/***/ })

});