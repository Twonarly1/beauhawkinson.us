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

/***/ "./src/components/Work.tsx":
/*!*********************************!*\
  !*** ./src/components/Work.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar Portfolio = function(param) {\n    var projects = param.projects;\n    var _this1 = _this;\n    console.log(\"this1\", projects);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-5xl p-3 pt-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-2xl text-gray-600\",\n                        children: \"Things I contributed to in the Past\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3\",\n                        children: projects && projects.slice(0, 3).map(function(project, index) {\n                            var ref;\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"rounded-lg border\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"\",\n                                    href: project.url,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"relative overflow-hidden rounded-t-lg bg-white\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: project === null || project === void 0 ? void 0 : (ref = project.image) === null || ref === void 0 ? void 0 : ref.image,\n                                                alt: \"\",\n                                                className: \"relative h-full w-full object-cover\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                                                lineNumber: 20,\n                                                columnNumber: 21\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                                            lineNumber: 19,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"border-b-lg h-32 space-y-2 rounded-b-lg border-t bg-white p-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"font-semibold text-gray-800 group-hover:text-gray-700\",\n                                                    children: project.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                                                    lineNumber: 27,\n                                                    columnNumber: 21\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"font-sans text-sm font-light text-gray-500\",\n                                                    children: project.description\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                                                    lineNumber: 30,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 17\n                                }, _this1)\n                            }, index, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 15\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"-mt-1 grid-cols-2 gap-4 p-3 sm:grid-cols-4 md:grid\",\n                children: [\n                    projects && projects.slice(3, 6).map(function(project, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden rounded-lg border bg-white sm:flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"\",\n                                href: project.url,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-2 p-4\",\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"font-semibold text-gray-800 group-hover:text-gray-700\",\n                                            children: project.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"font-sans text-sm font-light text-gray-500\",\n                                            children: [\n                                                \" \",\n                                                project.description\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, _this1)\n                        }, index, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, _this1);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex cursor-default flex-col items-center justify-center py-4 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-lg font-bold text-gray-800\",\n                                children: \"Want to see more?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-gray-600\",\n                                children: \"Explore more of my work\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/work\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"mt-3 rounded-md bg-gray-800 py-1 px-6 text-gray-100 hover:bg-gray-700\",\n                                    children: \"View all\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Work.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEyRTs7MENBQ3hGLDhEQUFDRCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsaUNBQWlDOzBDQUFDLG1CQUVqRDs7Ozs7cUNBQU07MENBQ04sOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxlQUFlOzBDQUFDLHlCQUF1Qjs7Ozs7cUNBQU07MENBQzVELDhEQUFDUCxrREFBSTtnQ0FBQ2MsSUFBSSxFQUFDLE9BQU87MENBQ2hCLDRFQUFDRCxHQUFDO29DQUFDTixTQUFTLEVBQUMsdUVBQXVFOzhDQUFDLFVBRXJGOzs7Ozt5Q0FBSTs7Ozs7cUNBQ0M7Ozs7Ozs2QkFDSDs7Ozs7O3FCQUNGOzs7Ozs7YUFDRixDQUNQO0NBQ0Y7QUE1RUtMLEtBQUFBLFNBQVM7QUE4RWYsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvV29yay50c3g/NTI0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSZXBvIH0gZnJvbSAnLi4vLi4vdHlwaW5ncydcblxuY29uc3QgUG9ydGZvbGlvID0gKHsgcHJvamVjdHMgfSkgPT4ge1xuICBjb25zb2xlLmxvZygndGhpczEnLCBwcm9qZWN0cylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTV4bCBwLTMgcHQtMzJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGRcIj5Qcm9qZWN0czwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgIFRoaW5ncyBJIGNvbnRyaWJ1dGVkIHRvIGluIHRoZSBQYXN0XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNCAgc206Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICB7cHJvamVjdHMgJiZcbiAgICAgICAgICAgIHByb2plY3RzLnNsaWNlKDAsIDMpLm1hcCgocHJvamVjdDogUmVwbywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiIGhyZWY9e3Byb2plY3QudXJsfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtdC1sZyBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0Py5pbWFnZT8uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWItbGcgaC0zMiBzcGFjZS15LTIgcm91bmRlZC1iLWxnIGJvcmRlci10IGJnLXdoaXRlIHAtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMCBncm91cC1ob3Zlcjp0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtc20gZm9udC1saWdodCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXQtMSBncmlkLWNvbHMtMiBnYXAtNCBwLTMgc206Z3JpZC1jb2xzLTQgbWQ6Z3JpZFwiPlxuICAgICAgICB7cHJvamVjdHMgJiZcbiAgICAgICAgICBwcm9qZWN0cy5zbGljZSgzLCA2KS5tYXAoKHByb2plY3Q6IFJlcG8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiByb3VuZGVkLWxnIGJvcmRlciBiZy13aGl0ZSBzbTpmbGV4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiXCIgaHJlZj17cHJvamVjdC51cmx9PlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3Q/LmltYWdlPy5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBwLTRcIj5cbiAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMCBncm91cC1ob3Zlcjp0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtc20gZm9udC1saWdodCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggY3Vyc29yLWRlZmF1bHQgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICAgIFdhbnQgdG8gc2VlIG1vcmU/XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+RXhwbG9yZSBtb3JlIG9mIG15IHdvcms8L2Rpdj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3dvcmtcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm10LTMgcm91bmRlZC1tZCBiZy1ncmF5LTgwMCBweS0xIHB4LTYgdGV4dC1ncmF5LTEwMCBob3ZlcjpiZy1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICBWaWV3IGFsbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW9cbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJQb3J0Zm9saW8iLCJwcm9qZWN0cyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNsaWNlIiwibWFwIiwicHJvamVjdCIsImluZGV4IiwiYSIsImhyZWYiLCJ1cmwiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Work.tsx\n");

/***/ })

});