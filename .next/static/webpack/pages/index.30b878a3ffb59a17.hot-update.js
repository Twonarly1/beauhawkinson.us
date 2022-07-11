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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Heading */ \"./src/components/Heading.tsx\");\nvar _this = undefined;\n\n\n\n\nvar Portfolio = function(param) {\n    var data = param.data;\n    if (data) {\n        var projects = data.projects.slice(0, 3).map(function(projects) {\n            var projectImage = \"images/portfolio/\" + projects.image;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-lg border bg-white shadow-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: projects.url,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"justify-items-center overflow-hidden rounded-t-lg \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: projectImage,\n                                alt: projects.title,\n                                className: \"relative h-full w-full object-cover\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-1 flex-col justify-between rounded-b-lg border-t p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"projectsTitle\",\n                                    children: projects.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"projectsDescription\",\n                                    children: projects.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/images/skills/graphql.svg\",\n                                    className: \"w-4\",\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this)\n            }, projects.title, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this);\n        });\n        var projectsNoImage = data.projects.slice(3, 6).map(function(projects) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden rounded-lg border bg-white shadow-lg md:mt-0 md:flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"\",\n                    href: projects.url,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2 p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"projectsTitle\",\n                                children: projects.title\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"projectsDescription\",\n                                children: projects.description\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this)\n            }, projects.title, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-5xl pt-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Projects\",\n                subtitle: \"My Contributions\"\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3\",\n                children: projects\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-4 grid-cols-2 gap-4 sm:grid-cols-4 md:grid\",\n                children: [\n                    projectsNoImage,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex cursor-default flex-col items-center justify-center py-4 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-lg font-bold text-gray-800\",\n                                children: \"Want to see more?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-gray-600\",\n                                children: \"Explore more of my work\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/work\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"mt-3 rounded-md bg-gray-800 py-1 px-6 text-gray-100 hover:bg-gray-700\",\n                                    children: \"View all\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, _this);\n};\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLGlDQUFpQzswQ0FBQyxtQkFFakQ7Ozs7O3FDQUFNOzBDQUNOLDhEQUFDRCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsZUFBZTswQ0FBQyx5QkFBdUI7Ozs7O3FDQUFNOzBDQUM1RCw4REFBQ1gsa0RBQUk7Z0NBQUNhLElBQUksRUFBQyxPQUFPOzBDQUNoQiw0RUFBQ0QsR0FBQztvQ0FBQ0QsU0FBUyxFQUFDLHVFQUF1RTs4Q0FBQyxVQUVyRjs7Ozs7eUNBQUk7Ozs7O3FDQUNDOzs7Ozs7NkJBQ0g7Ozs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0FBcEVLUixLQUFBQSxTQUFTO0FBc0VmLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzLnRzeD85MjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkaW5nIGZyb20gJy4vSGVhZGluZydcblxuY29uc3QgUG9ydGZvbGlvID0gKHsgZGF0YSB9KSA9PiB7XG4gIGlmIChkYXRhKSB7XG4gICAgdmFyIHByb2plY3RzID0gZGF0YS5wcm9qZWN0cy5zbGljZSgwLCAzKS5tYXAoZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gICAgICB2YXIgcHJvamVjdEltYWdlID0gJ2ltYWdlcy9wb3J0Zm9saW8vJyArIHByb2plY3RzLmltYWdlXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtwcm9qZWN0cy50aXRsZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlciBiZy13aGl0ZSBzaGFkb3ctbGdcIlxuICAgICAgICA+XG4gICAgICAgICAgPGEgaHJlZj17cHJvamVjdHMudXJsfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1pdGVtcy1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtdC1sZyBcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdEltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdHMudGl0bGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLWItbGcgYm9yZGVyLXQgcC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNUaXRsZVwiPntwcm9qZWN0cy50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0c0Rlc2NyaXB0aW9uXCI+e3Byb2plY3RzLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2tpbGxzL2dyYXBocWwuc3ZnXCIgY2xhc3NOYW1lPVwidy00XCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PnsnICd9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9KVxuICAgIHZhciBwcm9qZWN0c05vSW1hZ2UgPSBkYXRhLnByb2plY3RzLnNsaWNlKDMsIDYpLm1hcChmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e3Byb2plY3RzLnRpdGxlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiByb3VuZGVkLWxnIGJvcmRlciBiZy13aGl0ZSBzaGFkb3ctbGcgbWQ6bXQtMCBtZDpmbGV4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiIGhyZWY9e3Byb2plY3RzLnVybH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0c1RpdGxlXCI+e3Byb2plY3RzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzRGVzY3JpcHRpb25cIj57cHJvamVjdHMuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNXhsIHB0LTEwXCI+XG4gICAgICA8SGVhZGluZyB0aXRsZT17J1Byb2plY3RzJ30gc3VidGl0bGU9eydNeSBDb250cmlidXRpb25zJ30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBncmlkIGdyaWQtY29scy0xIGdhcC00IHNtOmdyaWQtY29scy0zXCI+XG4gICAgICAgIHtwcm9qZWN0c31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS00IGdyaWQtY29scy0yIGdhcC00IHNtOmdyaWQtY29scy00IG1kOmdyaWRcIj5cbiAgICAgICAge3Byb2plY3RzTm9JbWFnZX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGN1cnNvci1kZWZhdWx0IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgICAgICBXYW50IHRvIHNlZSBtb3JlP1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPkV4cGxvcmUgbW9yZSBvZiBteSB3b3JrPC9kaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi93b3JrXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtdC0zIHJvdW5kZWQtbWQgYmctZ3JheS04MDAgcHktMSBweC02IHRleHQtZ3JheS0xMDAgaG92ZXI6YmctZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgVmlldyBhbGxcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwiSGVhZGluZyIsIlBvcnRmb2xpbyIsImRhdGEiLCJwcm9qZWN0cyIsInNsaWNlIiwibWFwIiwicHJvamVjdEltYWdlIiwiaW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwiaHJlZiIsInVybCIsImltZyIsInNyYyIsImFsdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcm9qZWN0c05vSW1hZ2UiLCJzdWJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Projects.tsx\n"));

/***/ })

});