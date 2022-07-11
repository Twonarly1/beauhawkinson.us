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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Heading */ \"./src/components/Heading.tsx\");\nvar _this = undefined;\n\n\n\n\nvar Portfolio = function(param) {\n    var data = param.data;\n    if (data) {\n        var projects = data.projects.slice(0, 3).map(function(projects) {\n            var ref;\n            var projectImage = \"images/portfolio/\" + projects.image;\n            var skills = (ref = projects.skills) === null || ref === void 0 ? void 0 : ref.map(function(skills) {\n                var skillImage = \"images/skills/\" + skills.image;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex space-x-2 rounded-full border p-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: skillImage,\n                        className: \"h-5 w-5\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, this);\n            });\n            console.log(skills);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-lg border bg-white shadow-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: projects.url,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"justify-items-center overflow-hidden rounded-t-lg \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: projectImage,\n                                alt: projects.title,\n                                className: \"relative h-full w-full object-cover\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-1 flex-col justify-between rounded-b-lg border-t p-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"projectsTitle\",\n                                    children: projects.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"projectsDescription\",\n                                    children: projects.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex space-x-2 p-2\",\n                            children: skills\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, this)\n            }, projects.title, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this);\n        });\n        var projectsNoImage = data.projects.slice(3, 6).map(function(projects) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden rounded-lg border bg-white shadow-lg md:mt-0 md:flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"\",\n                    href: projects.url,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-2 p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"projectsTitle\",\n                                children: projects.title\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"projectsDescription\",\n                                children: projects.description\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this)\n            }, projects.title, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-5xl pt-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Projects\",\n                subtitle: \"My Contributions\"\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3\",\n                children: projects\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-4 grid-cols-2 gap-4 sm:grid-cols-4 md:grid\",\n                children: [\n                    projectsNoImage,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex cursor-default flex-col items-center justify-center py-4 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-lg font-bold text-gray-800\",\n                                children: \"Want to see more?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-gray-600\",\n                                children: \"Explore more of my work\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/work\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"mt-3 rounded-md bg-gray-800 py-1 px-6 text-gray-100 hover:bg-gray-700\",\n                                    children: \"View all\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Projects.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, _this);\n};\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDSDtBQUNNO0FBRS9CLElBQU1HLFNBQVMsR0FBRyxnQkFBYztRQUFYQyxJQUFJLFNBQUpBLElBQUk7SUFDdkIsSUFBSUEsSUFBSSxFQUFFO1FBQ1IsSUFBSUMsUUFBUSxHQUFHRCxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVVGLFFBQVEsRUFBRTtnQkFHaERBLEdBQWU7WUFGOUIsSUFBSUcsWUFBWSxHQUFHLG1CQUFtQixHQUFHSCxRQUFRLENBQUNJLEtBQUs7WUFFdkQsSUFBTUMsTUFBTSxHQUFHTCxDQUFBQSxHQUFlLEdBQWZBLFFBQVEsQ0FBQ0ssTUFBTSxjQUFmTCxHQUFlLFdBQUssR0FBcEJBLEtBQUFBLENBQW9CLEdBQXBCQSxHQUFlLENBQUVFLEdBQUcsQ0FBQyxTQUFVRyxNQUFNLEVBQUU7Z0JBQ3BELElBQUlDLFVBQVUsR0FBRyxnQkFBZ0IsR0FBR0QsTUFBTSxDQUFDRCxLQUFLO2dCQUNoRCxxQkFDRSw4REFBQ0csS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHdDQUF5Qzs4QkFDdEQsNEVBQUNDLEtBQUc7d0JBQUNDLEdBQUcsRUFBRUosVUFBVTt3QkFBRUUsU0FBUyxFQUFDLFNBQVM7d0JBQUNHLEdBQUcsRUFBQyxFQUFFOzs7Ozs0QkFBRzs7Ozs7d0JBRS9DLENBQ1A7YUFDRixDQUFDO1lBQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixNQUFNLENBQUM7WUFFbkIscUJBQ0UsOERBQUNFLEtBQUc7Z0JBRUZDLFNBQVMsRUFBQyxzQ0FBc0M7MEJBRWhELDRFQUFDTSxHQUFDO29CQUFDQyxJQUFJLEVBQUVmLFFBQVEsQ0FBQ2dCLEdBQUc7O3NDQUNuQiw4REFBQ1QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLG9EQUFvRDtzQ0FDakUsNEVBQUNDLEtBQUc7Z0NBQ0ZDLEdBQUcsRUFBRVAsWUFBWTtnQ0FDakJRLEdBQUcsRUFBRVgsUUFBUSxDQUFDaUIsS0FBSztnQ0FDbkJULFNBQVMsRUFBQyxxQ0FBcUM7Ozs7O29DQUMvQzs7Ozs7Z0NBQ0U7c0NBQ04sOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxnRUFBZ0U7OzhDQUM3RSw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLGVBQWU7OENBQUVSLFFBQVEsQ0FBQ2lCLEtBQUs7Ozs7O3dDQUFPOzhDQUNyRCw4REFBQ1YsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLHFCQUFxQjs4Q0FBRVIsUUFBUSxDQUFDa0IsV0FBVzs7Ozs7d0NBQU87Ozs7OztnQ0FDN0Q7c0NBQ04sOERBQUNYLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxvQkFBb0I7c0NBQ2hDSCxNQUFNOzs7OztnQ0FTSDs7Ozs7O3dCQUNKO2VBMUJDTCxRQUFRLENBQUNpQixLQUFLOzs7O29CQTJCZixDQUNQO1NBQ0YsQ0FBQztRQUNGLElBQUlFLGVBQWUsR0FBR3BCLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxHQUFHLENBQUMsU0FBVUYsUUFBUSxFQUFFO1lBQ3RFLHFCQUNFLDhEQUFDTyxLQUFHO2dCQUVGQyxTQUFTLEVBQUMsNkRBQTZEOzBCQUV2RSw0RUFBQ00sR0FBQztvQkFBQ04sU0FBUyxFQUFDLEVBQUU7b0JBQUNPLElBQUksRUFBRWYsUUFBUSxDQUFDZ0IsR0FBRzs4QkFDaEMsNEVBQUNULEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxlQUFlOzswQ0FDNUIsOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxlQUFlOzBDQUFFUixRQUFRLENBQUNpQixLQUFLOzs7OztvQ0FBTzswQ0FDckQsOERBQUNWLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxxQkFBcUI7MENBQUVSLFFBQVEsQ0FBQ2tCLFdBQVc7Ozs7O29DQUFPOzs7Ozs7NEJBQzdEOzs7Ozt3QkFDSjtlQVJDbEIsUUFBUSxDQUFDaUIsS0FBSzs7OztvQkFTZixDQUNQO1NBQ0YsQ0FBQztLQUNIO0lBRUQscUJBQ0UsOERBQUNWLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGlCQUFpQjs7MEJBQzlCLDhEQUFDWCxnREFBTztnQkFBQ29CLEtBQUssRUFBRSxVQUFVO2dCQUFFRyxRQUFRLEVBQUUsa0JBQWtCOzs7OztxQkFBSTswQkFDNUQsOERBQUNiLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyw0Q0FBNEM7MEJBQ3hEUixRQUFROzs7OztxQkFDTDswQkFDTiw4REFBQ08sS0FBRztnQkFBQ0MsU0FBUyxFQUFDLCtDQUErQzs7b0JBQzNEVyxlQUFlO2tDQUNoQiw4REFBQ1osS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDJFQUEyRTs7MENBQ3hGLDhEQUFDRCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsaUNBQWlDOzBDQUFDLG1CQUVqRDs7Ozs7cUNBQU07MENBQ04sOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxlQUFlOzBDQUFDLHlCQUF1Qjs7Ozs7cUNBQU07MENBQzVELDhEQUFDYixrREFBSTtnQ0FBQ29CLElBQUksRUFBQyxPQUFPOzBDQUNoQiw0RUFBQ0QsR0FBQztvQ0FBQ04sU0FBUyxFQUFDLHVFQUF1RTs4Q0FBQyxVQUVyRjs7Ozs7eUNBQUk7Ozs7O3FDQUNDOzs7Ozs7NkJBQ0g7Ozs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0FBdkZLVixLQUFBQSxTQUFTO0FBeUZmLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzLnRzeD85MjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkaW5nIGZyb20gJy4vSGVhZGluZydcblxuY29uc3QgUG9ydGZvbGlvID0gKHsgZGF0YSB9KSA9PiB7XG4gIGlmIChkYXRhKSB7XG4gICAgdmFyIHByb2plY3RzID0gZGF0YS5wcm9qZWN0cy5zbGljZSgwLCAzKS5tYXAoZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gICAgICB2YXIgcHJvamVjdEltYWdlID0gJ2ltYWdlcy9wb3J0Zm9saW8vJyArIHByb2plY3RzLmltYWdlXG5cbiAgICAgIGNvbnN0IHNraWxscyA9IHByb2plY3RzLnNraWxscz8ubWFwKGZ1bmN0aW9uIChza2lsbHMpIHtcbiAgICAgICAgdmFyIHNraWxsSW1hZ2UgPSAnaW1hZ2VzL3NraWxscy8nICsgc2tpbGxzLmltYWdlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiByb3VuZGVkLWZ1bGwgIGJvcmRlciBwLTFcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtza2lsbEltYWdlfSBjbGFzc05hbWU9XCJoLTUgdy01XCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1kOmhpZGRlblwiPiB7c2tpbGxzLm5hbWV9PC9wPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKHNraWxscylcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17cHJvamVjdHMudGl0bGV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYmctd2hpdGUgc2hhZG93LWxnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3RzLnVybH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktaXRlbXMtY2VudGVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLXQtbGcgXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3RJbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9e3Byb2plY3RzLnRpdGxlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC1iLWxnIGJvcmRlci10IHAtNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzVGl0bGVcIj57cHJvamVjdHMudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNEZXNjcmlwdGlvblwiPntwcm9qZWN0cy5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiBwLTJcIj5cbiAgICAgICAgICAgICAge3NraWxsc31cbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgcm91bmRlZC1mdWxsICBib3JkZXIgcHgtMyBweS0xIG1kOnB4LTFcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2tpbGxzL2dyYXBocWwuc3ZnXCIgY2xhc3NOYW1lPVwidy00XCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1kOmhpZGRlblwiPiBHcmFwaFFMPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiByb3VuZGVkLWZ1bGwgYm9yZGVyIHB4LTMgcHktMSBtZDpweC0xXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NraWxscy9zdGVwemVuLnN2Z1wiIGNsYXNzTmFtZT1cInctNFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtZDpoaWRkZW5cIj4gU3RlcFplbjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+eycgJ30gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0pXG4gICAgdmFyIHByb2plY3RzTm9JbWFnZSA9IGRhdGEucHJvamVjdHMuc2xpY2UoMywgNikubWFwKGZ1bmN0aW9uIChwcm9qZWN0cykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17cHJvamVjdHMudGl0bGV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIHJvdW5kZWQtbGcgYm9yZGVyIGJnLXdoaXRlIHNoYWRvdy1sZyBtZDptdC0wIG1kOmZsZXhcIlxuICAgICAgICA+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiXCIgaHJlZj17cHJvamVjdHMudXJsfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIHAtNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzVGl0bGVcIj57cHJvamVjdHMudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNEZXNjcmlwdGlvblwiPntwcm9qZWN0cy5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy01eGwgcHQtMTBcIj5cbiAgICAgIDxIZWFkaW5nIHRpdGxlPXsnUHJvamVjdHMnfSBzdWJ0aXRsZT17J015IENvbnRyaWJ1dGlvbnMnfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTQgc206Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAge3Byb2plY3RzfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTQgZ3JpZC1jb2xzLTIgZ2FwLTQgc206Z3JpZC1jb2xzLTQgbWQ6Z3JpZFwiPlxuICAgICAgICB7cHJvamVjdHNOb0ltYWdlfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggY3Vyc29yLWRlZmF1bHQgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICAgIFdhbnQgdG8gc2VlIG1vcmU/XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+RXhwbG9yZSBtb3JlIG9mIG15IHdvcms8L2Rpdj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3dvcmtcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm10LTMgcm91bmRlZC1tZCBiZy1ncmF5LTgwMCBweS0xIHB4LTYgdGV4dC1ncmF5LTEwMCBob3ZlcjpiZy1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICBWaWV3IGFsbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW9cbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJIZWFkaW5nIiwiUG9ydGZvbGlvIiwiZGF0YSIsInByb2plY3RzIiwic2xpY2UiLCJtYXAiLCJwcm9qZWN0SW1hZ2UiLCJpbWFnZSIsInNraWxscyIsInNraWxsSW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJjb25zb2xlIiwibG9nIiwiYSIsImhyZWYiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJvamVjdHNOb0ltYWdlIiwic3VidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Projects.tsx\n"));

/***/ })

});