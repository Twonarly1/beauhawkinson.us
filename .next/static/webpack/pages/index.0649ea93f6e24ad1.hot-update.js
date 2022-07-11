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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Heading */ \"./src/components/Heading.tsx\");\nvar _this = undefined;\n\n\n\n\nvar Portfolio = function(param) {\n    var data = param.data;\n    if (data) {\n        var test = data.projects.map(function(project) {\n            return project.skills[0].name;\n        });\n        console.log(\"skills\", test);\n        var projects = data.projects.slice(0, 3).map(function(projects) {\n            var projectImage = \"images/portfolio/\" + projects.image;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-lg border bg-white shadow-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: projects.url,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"justify-items-center overflow-hidden rounded-t-lg \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: projectImage,\n                                alt: projects.title,\n                                className: \"relative h-full w-full object-cover\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-1 flex-col justify-between rounded-b-lg border-t p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"projectsTitle\",\n                                    children: projects.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"projectsDescription\",\n                                    children: projects.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex space-x-2 p-2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)\n            }, projects.title, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this);\n        });\n        var projectsNoImage = data.projects.slice(3, 6).map(function(projects) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden rounded-lg border bg-white shadow-lg md:mt-0 md:flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"\",\n                    href: projects.url,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2 p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"projectsTitle\",\n                                children: projects.title\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"projectsDescription\",\n                                children: projects.description\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this)\n            }, projects.title, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-5xl pt-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Projects\",\n                subtitle: \"My Contributions\"\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3\",\n                children: projects\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-4 grid-cols-2 gap-4 sm:grid-cols-4 md:grid\",\n                children: [\n                    projectsNoImage,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex cursor-default flex-col items-center justify-center py-4 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-lg font-bold text-gray-800\",\n                                children: \"Want to see more?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-gray-600\",\n                                children: \"Explore more of my work\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/work\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"mt-3 rounded-md bg-gray-800 py-1 px-6 text-gray-100 hover:bg-gray-700\",\n                                    children: \"View all\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, _this);\n};\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLFNBQVMsRUFBQywrQ0FBK0M7O29CQUMzRFMsZUFBZTtrQ0FDaEIsOERBQUNWLEtBQUc7d0JBQUNDLFNBQVMsRUFBQywyRUFBMkU7OzBDQUN4Riw4REFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLGlDQUFpQzswQ0FBQyxtQkFFakQ7Ozs7O3FDQUFNOzBDQUNOLDhEQUFDRCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsZUFBZTswQ0FBQyx5QkFBdUI7Ozs7O3FDQUFNOzBDQUM1RCw4REFBQ2pCLGtEQUFJO2dDQUFDbUIsSUFBSSxFQUFDLE9BQU87MENBQ2hCLDRFQUFDRCxHQUFDO29DQUFDRCxTQUFTLEVBQUMsdUVBQXVFOzhDQUFDLFVBRXJGOzs7Ozt5Q0FBSTs7Ozs7cUNBQ0M7Ozs7Ozs2QkFDSDs7Ozs7O3FCQUNGOzs7Ozs7YUFDRixDQUNQO0NBQ0Y7QUE3RUtkLEtBQUFBLFNBQVM7QUErRWYsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMudHN4PzkyNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi9IZWFkaW5nJ1xuXG5jb25zdCBQb3J0Zm9saW8gPSAoeyBkYXRhIH0pID0+IHtcbiAgaWYgKGRhdGEpIHtcbiAgICBjb25zdCB0ZXN0ID0gZGF0YS5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHByb2plY3Quc2tpbGxzWzBdLm5hbWUpXG4gICAgY29uc29sZS5sb2coJ3NraWxscycsIHRlc3QpXG5cbiAgICB2YXIgcHJvamVjdHMgPSBkYXRhLnByb2plY3RzLnNsaWNlKDAsIDMpLm1hcChmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgICAgIHZhciBwcm9qZWN0SW1hZ2UgPSAnaW1hZ2VzL3BvcnRmb2xpby8nICsgcHJvamVjdHMuaW1hZ2VcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e3Byb2plY3RzLnRpdGxlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyIGJnLXdoaXRlIHNoYWRvdy1sZ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0cy51cmx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC10LWxnIFwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0SW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0cy50aXRsZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQtYi1sZyBib3JkZXItdCBwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0c1RpdGxlXCI+e3Byb2plY3RzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzRGVzY3JpcHRpb25cIj57cHJvamVjdHMuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgcC0yXCI+XG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIHJvdW5kZWQtZnVsbCAgYm9yZGVyIHB4LTMgcHktMSBtZDpweC0xXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NraWxscy9ncmFwaHFsLnN2Z1wiIGNsYXNzTmFtZT1cInctNFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtZDpoaWRkZW5cIj4gR3JhcGhRTDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgcm91bmRlZC1mdWxsIGJvcmRlciBweC0zIHB5LTEgbWQ6cHgtMVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9za2lsbHMvc3RlcHplbi5zdmdcIiBjbGFzc05hbWU9XCJ3LTRcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbWQ6aGlkZGVuXCI+IFN0ZXBaZW48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PnsnICd9ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9KVxuICAgIHZhciBwcm9qZWN0c05vSW1hZ2UgPSBkYXRhLnByb2plY3RzLnNsaWNlKDMsIDYpLm1hcChmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e3Byb2plY3RzLnRpdGxlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiByb3VuZGVkLWxnIGJvcmRlciBiZy13aGl0ZSBzaGFkb3ctbGcgbWQ6bXQtMCBtZDpmbGV4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiIGhyZWY9e3Byb2plY3RzLnVybH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0c1RpdGxlXCI+e3Byb2plY3RzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzRGVzY3JpcHRpb25cIj57cHJvamVjdHMuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNXhsIHB0LTEwXCI+XG4gICAgICA8SGVhZGluZyB0aXRsZT17J1Byb2plY3RzJ30gc3VidGl0bGU9eydNeSBDb250cmlidXRpb25zJ30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBncmlkIGdyaWQtY29scy0xIGdhcC00IHNtOmdyaWQtY29scy0zXCI+XG4gICAgICAgIHtwcm9qZWN0c31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS00IGdyaWQtY29scy0yIGdhcC00IHNtOmdyaWQtY29scy00IG1kOmdyaWRcIj5cbiAgICAgICAge3Byb2plY3RzTm9JbWFnZX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGN1cnNvci1kZWZhdWx0IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgICAgICBXYW50IHRvIHNlZSBtb3JlP1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPkV4cGxvcmUgbW9yZSBvZiBteSB3b3JrPC9kaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi93b3JrXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtdC0zIHJvdW5kZWQtbWQgYmctZ3JheS04MDAgcHktMSBweC02IHRleHQtZ3JheS0xMDAgaG92ZXI6YmctZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgVmlldyBhbGxcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwiSGVhZGluZyIsIlBvcnRmb2xpbyIsImRhdGEiLCJ0ZXN0IiwicHJvamVjdHMiLCJtYXAiLCJwcm9qZWN0Iiwic2tpbGxzIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJzbGljZSIsInByb2plY3RJbWFnZSIsImltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJ1cmwiLCJpbWciLCJzcmMiLCJhbHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJvamVjdHNOb0ltYWdlIiwic3VidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Projects.tsx\n"));

/***/ })

});