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

/***/ "./src/components/GithubActivity.tsx":
/*!*******************************************!*\
  !*** ./src/components/GithubActivity.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Heading */ \"./src/components/Heading.tsx\");\nvar _this = undefined;\n\n\n\nvar GithubActivity = function(param) {\n    var repos = param.repos;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-5xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"GitHub Activity\"\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-24 md:grid-cols-2 md:gap-32\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                subtitle: \"Repos I Contributed to\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                lineNumber: 10,\n                                columnNumber: 11\n                            }, _this),\n                            repos.contributedRepos.map(function(repo) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: repo.url,\n                                        className: \"my-4 -mx-4 block rounded-md p-4 hover:bg-gray-100\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-blue-400\",\n                                                        children: [\n                                                            repo.owner.login,\n                                                            \"/\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                                        lineNumber: 18,\n                                                        columnNumber: 19\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-blue-600\",\n                                                        children: repo.name\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                                        lineNumber: 19,\n                                                        columnNumber: 19\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                                lineNumber: 17,\n                                                columnNumber: 17\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: repo.description\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                                lineNumber: 21,\n                                                columnNumber: 17\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                        lineNumber: 13,\n                                        columnNumber: 15\n                                    }, _this1)\n                                }, repo.id, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                    lineNumber: 12,\n                                    columnNumber: 13\n                                }, _this1);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/Twonarly1?tab=repositories\",\n                                className: \"text-sm text-blue-600\",\n                                children: [\n                                    \"View more on \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-semibold\",\n                                        children: \"GitHub\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 26\n                                    }, _this),\n                                    \" \\u2192\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                subtitle: \"Repos I Like\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, _this),\n                            repos.starredRepos.map(function(repo) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: repo.url,\n                                        className: \"my-4 -mx-4 block rounded-md p-4 hover:bg-gray-100\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-blue-400\",\n                                                        children: [\n                                                            repo.owner.login,\n                                                            \"/\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                                        lineNumber: 42,\n                                                        columnNumber: 19\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-blue-600\",\n                                                        children: repo.name\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 19\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 17\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: repo.description\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 17\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, _this1)\n                                }, repo.id, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, _this1);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/Twonarly1?tab=stars\",\n                                className: \"text-sm text-blue-600\",\n                                children: [\n                                    \"View more on \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-semibold\",\n                                        children: \"GitHub\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 26\n                                    }, _this),\n                                    \" \\u2192\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/GithubActivity.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this);\n};\n_c = GithubActivity;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GithubActivity);\nvar _c;\n$RefreshReg$(_c, \"GithubActivity\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HaXRodWJBY3Rpdml0eS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQXlCO0FBQ007QUFFL0IsSUFBTUUsY0FBYyxHQUFHLGdCQUFlO1FBQVpDLEtBQUssU0FBTEEsS0FBSzs7SUFDN0IscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFdBQVc7OzBCQUN4Qiw4REFBQ0osZ0RBQU87Z0JBQUNLLEtBQUssRUFBRSxpQkFBaUI7Ozs7O3FCQUFJOzBCQUNyQyw4REFBQ0YsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGtEQUFrRDs7a0NBQy9ELDhEQUFDRSxJQUFFOzswQ0FDRCw4REFBQ04sZ0RBQU87Z0NBQUNPLFFBQVEsRUFBRSx3QkFBd0I7Ozs7O3FDQUFJOzRCQUM5Q0wsS0FBSyxDQUFDTSxnQkFBZ0IsQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLElBQUk7cURBQy9CLDhEQUFDQyxJQUFFOzhDQUNELDRFQUFDQyxHQUFDO3dDQUNBQyxJQUFJLEVBQUVILElBQUksQ0FBQ0ksR0FBRzt3Q0FDZFYsU0FBUyxFQUFDLG1EQUFtRDs7MERBRTdELDhEQUFDRCxLQUFHOztrRUFDRiw4REFBQ1ksTUFBSTt3REFBQ1gsU0FBUyxFQUFDLGVBQWU7OzREQUFFTSxJQUFJLENBQUNNLEtBQUssQ0FBQ0MsS0FBSzs0REFBQyxHQUFDOzs7Ozs7OERBQU87a0VBQzFELDhEQUFDRixNQUFJO3dEQUFDWCxTQUFTLEVBQUMsZUFBZTtrRUFBRU0sSUFBSSxDQUFDUSxJQUFJOzs7Ozs4REFBUTs7Ozs7O3NEQUM5QzswREFDTiw4REFBQ2YsS0FBRzswREFBRU8sSUFBSSxDQUFDUyxXQUFXOzs7OztzREFBTzs7Ozs7OzhDQUMzQjttQ0FWR1QsSUFBSSxDQUFDVSxFQUFFOzs7OzBDQVdYOzZCQUNOLENBQUM7MENBQ0YsOERBQUNSLEdBQUM7Z0NBQ0FDLElBQUksRUFBRSwrQ0FBK0M7Z0NBQ3JEVCxTQUFTLEVBQUMsdUJBQXVCOztvQ0FDbEMsZUFDYztrREFBQSw4REFBQ1csTUFBSTt3Q0FBQ1gsU0FBUyxFQUFDLGVBQWU7a0RBQUMsUUFBTTs7Ozs7NkNBQU87b0NBQUEsU0FDNUQ7Ozs7OztxQ0FBSTs7Ozs7OzZCQUNEO2tDQUVMLDhEQUFDRSxJQUFFOzswQ0FDRCw4REFBQ04sZ0RBQU87Z0NBQUNPLFFBQVEsRUFBRSxjQUFjOzs7OztxQ0FBSTs0QkFDcENMLEtBQUssQ0FBQ21CLFlBQVksQ0FBQ1osR0FBRyxDQUFDLFNBQUNDLElBQUk7cURBQzNCLDhEQUFDQyxJQUFFOzhDQUNELDRFQUFDQyxHQUFDO3dDQUNBQyxJQUFJLEVBQUVILElBQUksQ0FBQ0ksR0FBRzt3Q0FDZFYsU0FBUyxFQUFDLG1EQUFtRDs7MERBRTdELDhEQUFDRCxLQUFHOztrRUFDRiw4REFBQ1ksTUFBSTt3REFBQ1gsU0FBUyxFQUFDLGVBQWU7OzREQUFFTSxJQUFJLENBQUNNLEtBQUssQ0FBQ0MsS0FBSzs0REFBQyxHQUFDOzs7Ozs7OERBQU87a0VBQzFELDhEQUFDRixNQUFJO3dEQUFDWCxTQUFTLEVBQUMsZUFBZTtrRUFBRU0sSUFBSSxDQUFDUSxJQUFJOzs7Ozs4REFBUTs7Ozs7O3NEQUM5QzswREFDTiw4REFBQ2YsS0FBRzswREFBRU8sSUFBSSxDQUFDUyxXQUFXOzs7OztzREFBTzs7Ozs7OzhDQUMzQjttQ0FWR1QsSUFBSSxDQUFDVSxFQUFFOzs7OzBDQVdYOzZCQUNOLENBQUM7MENBQ0YsOERBQUNSLEdBQUM7Z0NBQ0FDLElBQUksRUFBRSx3Q0FBd0M7Z0NBQzlDVCxTQUFTLEVBQUMsdUJBQXVCOztvQ0FDbEMsZUFDYztrREFBQSw4REFBQ1csTUFBSTt3Q0FBQ1gsU0FBUyxFQUFDLGVBQWU7a0RBQUMsUUFBTTs7Ozs7NkNBQU87b0NBQUEsU0FDNUQ7Ozs7OztxQ0FBSTs7Ozs7OzZCQUNEOzs7Ozs7cUJBQ0Q7Ozs7OzthQUNGLENBQ1A7Q0FDRjtBQXZES0gsS0FBQUEsY0FBYztBQXlEcEIsK0RBQWVBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2l0aHViQWN0aXZpdHkudHN4PzAwYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi9IZWFkaW5nJ1xuXG5jb25zdCBHaXRodWJBY3Rpdml0eSA9ICh7IHJlcG9zIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTV4bFwiPlxuICAgICAgPEhlYWRpbmcgdGl0bGU9eydHaXRIdWIgQWN0aXZpdHknfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC0yNCBtZDpncmlkLWNvbHMtMiBtZDpnYXAtMzJcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxIZWFkaW5nIHN1YnRpdGxlPXsnUmVwb3MgSSBDb250cmlidXRlZCB0byd9IC8+XG4gICAgICAgICAge3JlcG9zLmNvbnRyaWJ1dGVkUmVwb3MubWFwKChyZXBvKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtyZXBvLmlkfT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtyZXBvLnVybH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS00IC1teC00IGJsb2NrIHJvdW5kZWQtbWQgcC00IGhvdmVyOmJnLWdyYXktMTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+e3JlcG8ub3duZXIubG9naW59Lzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDBcIj57cmVwby5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PntyZXBvLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXsnaHR0cHM6Ly9naXRodWIuY29tL1R3b25hcmx5MT90YWI9cmVwb3NpdG9yaWVzJ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ibHVlLTYwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBtb3JlIG9uIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5HaXRIdWI8L3NwYW4+IOKGklxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8dWw+XG4gICAgICAgICAgPEhlYWRpbmcgc3VidGl0bGU9eydSZXBvcyBJIExpa2UnfSAvPlxuICAgICAgICAgIHtyZXBvcy5zdGFycmVkUmVwb3MubWFwKChyZXBvKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtyZXBvLmlkfT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtyZXBvLnVybH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS00IC1teC00IGJsb2NrIHJvdW5kZWQtbWQgcC00IGhvdmVyOmJnLWdyYXktMTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+e3JlcG8ub3duZXIubG9naW59Lzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDBcIj57cmVwby5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PntyZXBvLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXsnaHR0cHM6Ly9naXRodWIuY29tL1R3b25hcmx5MT90YWI9c3RhcnMnfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWUtNjAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBWaWV3IG1vcmUgb24gPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPkdpdEh1Yjwvc3Bhbj4g4oaSXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2l0aHViQWN0aXZpdHlcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRpbmciLCJHaXRodWJBY3Rpdml0eSIsInJlcG9zIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJ1bCIsInN1YnRpdGxlIiwiY29udHJpYnV0ZWRSZXBvcyIsIm1hcCIsInJlcG8iLCJsaSIsImEiLCJocmVmIiwidXJsIiwic3BhbiIsIm93bmVyIiwibG9naW4iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpZCIsInN0YXJyZWRSZXBvcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/GithubActivity.tsx\n"));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Skills */ \"./src/components/Skills.tsx\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Projects */ \"./src/components/Projects.tsx\");\n/* harmony import */ var _components_Achievements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Achievements */ \"./src/components/Achievements.tsx\");\n/* harmony import */ var _components_GithubActivity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/GithubActivity */ \"./src/components/GithubActivity.tsx\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Home(param) {\n    var repos = param.repos;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), resumeData = ref[0], setResumeData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"/resumeData.json\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setResumeData(data);\n        });\n    }, []);\n    {\n        console.log(repos);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto flex w-full flex-col items-center bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-32 p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        data: resumeData === null || resumeData === void 0 ? void 0 : resumeData.portfolio\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skills__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: resumeData === null || resumeData === void 0 ? void 0 : resumeData.main\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Achievements__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        data: resumeData === null || resumeData === void 0 ? void 0 : resumeData.main\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GithubActivity__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        repos: repos\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWtEO0FBQ0w7QUFDSjtBQUNBO0FBQ0k7QUFJUTtBQUNJOzs7QUEwQjFDLFNBQVNTLElBQUksQ0FBQyxLQUFtQixFQUFFO1FBQXJCLEtBQU8sR0FBUCxLQUFtQixDQUFqQkMsS0FBSzs7SUFDbEMsSUFBa0NSLEdBQXNCLEdBQXRCQSwrQ0FBUSxFQUFjLEVBQW5EUyxVQUFVLEdBQW1CVCxHQUFzQixHQUF6QyxFQUFFVSxhQUFhLEdBQUlWLEdBQXNCLEdBQTFCO0lBRTlCRCxnREFBUyxDQUFDLFdBQU07UUFDZFksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQ3RCQyxJQUFJLENBQUMsU0FBQ0MsR0FBRzttQkFBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7U0FBQSxDQUFDLENBQ3pCRixJQUFJLENBQUMsU0FBQ0csSUFBSSxFQUFLO1lBQ2RMLGFBQWEsQ0FBQ0ssSUFBSSxDQUFDO1NBQ3BCLENBQUM7S0FDTCxFQUFFLEVBQUUsQ0FBQztJQUVOO1FBQ0VDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxLQUFLLENBQUM7S0FDbkI7SUFDRCxxQkFDRSw4REFBQ1UsS0FBRztRQUFDQyxTQUFTLEVBQUMsb0RBQW9EOzswQkFDakUsOERBQUNsQixzREFBTTs7OztvQkFBRzswQkFDViw4REFBQ2lCLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7O2tDQUM3Qiw4REFBQ2YsNERBQVE7d0JBQUNXLElBQUksRUFBRU4sVUFBVSxhQUFWQSxVQUFVLFdBQVcsR0FBckJBLEtBQUFBLENBQXFCLEdBQXJCQSxVQUFVLENBQUVXLFNBQVM7Ozs7OzRCQUFJO2tDQUN6Qyw4REFBQ2pCLDBEQUFNO3dCQUFDWSxJQUFJLEVBQUVOLFVBQVUsYUFBVkEsVUFBVSxXQUFNLEdBQWhCQSxLQUFBQSxDQUFnQixHQUFoQkEsVUFBVSxDQUFFWSxJQUFJOzs7Ozs0QkFBSTtrQ0FDbEMsOERBQUNoQixnRUFBWTt3QkFBQ1UsSUFBSSxFQUFFTixVQUFVLGFBQVZBLFVBQVUsV0FBTSxHQUFoQkEsS0FBQUEsQ0FBZ0IsR0FBaEJBLFVBQVUsQ0FBRVksSUFBSTs7Ozs7NEJBQUk7a0NBQ3hDLDhEQUFDZixrRUFBYzt3QkFBQ0UsS0FBSyxFQUFFQSxLQUFLOzs7Ozs0QkFBSTtrQ0FDaEMsOERBQUNOLDBEQUFNOzs7OzRCQUFHOzs7Ozs7b0JBQ047Ozs7OztZQUNGLENBQ1A7Q0FDRjtHQTFCdUJLLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ta2lsbHMnXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0cydcbmltcG9ydCB7IFJlcG8sIFJlc3VtZURhdGEgfSBmcm9tICcuLi8uLi90eXBpbmdzJ1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xuaW1wb3J0IHsgZmV0Y2hSZXBvcyB9IGZyb20gJy4uL2NvcmUvZ2l0aHViJ1xuaW1wb3J0IEFjaGlldmVtZW50cyBmcm9tICcuLi9jb21wb25lbnRzL0FjaGlldmVtZW50cydcbmltcG9ydCBHaXRodWJBY3Rpdml0eSBmcm9tICcuLi9jb21wb25lbnRzL0dpdGh1YkFjdGl2aXR5J1xuXG5pbnRlcmZhY2UgQXBwUHJvcHMge1xuICByZXN1bWVEYXRhOiBSZXN1bWVEYXRhXG4gIHJlcG9zOiB7XG4gICAgc3RhcnJlZFJlcG9zOiBSZXBvW11cbiAgICBjb250cmlidXRlZFJlcG9zOiBSZXBvW11cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgc3RhcnJlZFJlcG9zLCBjb250cmlidXRlZFJlcG9zIH0gPSBhd2FpdCBmZXRjaFJlcG9zKFxuICAgIGNvbmZpZy5naXRodWJVc2VybmFtZSxcbiAgICBjb25maWcuZ2l0aHViVG9rZW5cbiAgKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICByZXBvczoge1xuICAgICAgICBzdGFycmVkUmVwb3MsXG4gICAgICAgIGNvbnRyaWJ1dGVkUmVwb3MsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMTAsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHJlcG9zIH06IEFwcFByb3BzKSB7XG4gIGxldCBbcmVzdW1lRGF0YSwgc2V0UmVzdW1lRGF0YV0gPSB1c2VTdGF0ZTxSZXN1bWVEYXRhPigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnL3Jlc3VtZURhdGEuanNvbicpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0UmVzdW1lRGF0YShkYXRhKVxuICAgICAgfSlcbiAgfSwgW10pXG5cbiAge1xuICAgIGNvbnNvbGUubG9nKHJlcG9zKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggdy1mdWxsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBiZy13aGl0ZVwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMyIHAtNlwiPlxuICAgICAgICA8UHJvamVjdHMgZGF0YT17cmVzdW1lRGF0YT8ucG9ydGZvbGlvfSAvPlxuICAgICAgICA8U2tpbGxzIGRhdGE9e3Jlc3VtZURhdGE/Lm1haW59IC8+XG4gICAgICAgIDxBY2hpZXZlbWVudHMgZGF0YT17cmVzdW1lRGF0YT8ubWFpbn0gLz5cbiAgICAgICAgPEdpdGh1YkFjdGl2aXR5IHJlcG9zPXtyZXBvc30gLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiRm9vdGVyIiwiU2tpbGxzIiwiUHJvamVjdHMiLCJBY2hpZXZlbWVudHMiLCJHaXRodWJBY3Rpdml0eSIsIkhvbWUiLCJyZXBvcyIsInJlc3VtZURhdGEiLCJzZXRSZXN1bWVEYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicG9ydGZvbGlvIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});