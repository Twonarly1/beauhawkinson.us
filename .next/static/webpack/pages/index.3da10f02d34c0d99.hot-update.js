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

/***/ "./src/components/Achievements.tsx":
/*!*****************************************!*\
  !*** ./src/components/Achievements.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Heading */ \"./src/components/Heading.tsx\");\nvar _this = undefined;\n\n/* eslint-disable @next/next/no-img-element */ \n\nvar _s = $RefreshSig$();\nvar Achievements = function(param) {\n    var data = param.data;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showMore = ref[0], setShowMore = ref[1];\n    if (data) {\n        var ref1;\n        var certificates = (ref1 = data.certificates) === null || ref1 === void 0 ? void 0 : ref1.map(function(certificate, key) {\n            var src = \"/images/certificates/\" + certificate.src;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: certificate.url,\n                        //@ts-ignore\n                        name: certificate.name,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            alt: certificate.name,\n                            src: src,\n                            className: \"mx-auto w-full rounded-lg object-cover shadow-md\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: [\n                            \" \",\n                            certificate.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, certificate.name, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-5xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Achievements\",\n                subtitle: \"Certifications and More.\"\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto gap-4 space-y-6 pt-6 md:grid md:grid-cols-2 md:space-y-0\",\n                children: certificates\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/components/Achievements.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(Achievements, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Achievements;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Achievements);\nvar _c;\n$RefreshReg$(_c, \"Achievements\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BY2hpZXZlbWVudHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOztBQURBLDhDQUE4QyxDQUNQO0FBQ1I7O0FBRS9CLElBQU1HLFlBQVksR0FBRyxnQkFBYztRQUFYQyxJQUFJLFNBQUpBLElBQUk7O0lBQzFCLElBQWdDSCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXhDSSxRQUFRLEdBQWlCSixHQUFlLEdBQWhDLEVBQUVLLFdBQVcsR0FBSUwsR0FBZSxHQUFuQjtJQUM1QixJQUFJRyxJQUFJLEVBQUU7WUFDV0EsSUFBaUI7UUFBcEMsSUFBSUcsWUFBWSxHQUFHSCxDQUFBQSxJQUFpQixHQUFqQkEsSUFBSSxDQUFDRyxZQUFZLGNBQWpCSCxJQUFpQixXQUFLLEdBQXRCQSxLQUFBQSxDQUFzQixHQUF0QkEsSUFBaUIsQ0FBRUksR0FBRyxDQUFDLFNBQVVDLFdBQVcsRUFBRUMsR0FBRyxFQUFFO1lBQ3BFLElBQUlDLEdBQUcsR0FBRyx1QkFBdUIsR0FBR0YsV0FBVyxDQUFDRSxHQUFHO1lBQ25ELHFCQUNFLDhEQUFDQyxLQUFHOztrQ0FDRiw4REFBQ0MsR0FBQzt3QkFDQUMsSUFBSSxFQUFFTCxXQUFXLENBQUNNLEdBQUc7d0JBQ3JCLFlBQVk7d0JBQ1pDLElBQUksRUFBRVAsV0FBVyxDQUFDTyxJQUFJO2tDQUV0Qiw0RUFBQ0MsS0FBRzs0QkFDRkMsR0FBRyxFQUFFVCxXQUFXLENBQUNPLElBQUk7NEJBQ3JCTCxHQUFHLEVBQUVBLEdBQUc7NEJBQ1JRLFNBQVMsRUFBQyxrREFBa0Q7Ozs7O2dDQUM1RDs7Ozs7NEJBQ0E7a0NBQ0osOERBQUNDLElBQUU7OzRCQUFDLEdBQUM7NEJBQUNYLFdBQVcsQ0FBQ08sSUFBSTs7Ozs7OzRCQUFNOztlQVpwQlAsV0FBVyxDQUFDTyxJQUFJOzs7O29CQWFwQixDQUNQO1NBQ0YsQ0FBQztLQUNIO0lBQ0QscUJBQ0UsOERBQUNKLEtBQUc7UUFBQ08sU0FBUyxFQUFDLGtCQUFrQjs7MEJBQy9CLDhEQUFDakIsZ0RBQU87Z0JBQUNtQixLQUFLLEVBQUUsY0FBYztnQkFBRUMsUUFBUSxFQUFFLDBCQUEwQjs7Ozs7cUJBQUk7MEJBQ3hFLDhEQUFDVixLQUFHO2dCQUFDTyxTQUFTLEVBQUMsa0VBQWtFOzBCQUM5RVosWUFBWTs7Ozs7cUJBQ1Q7Ozs7OzthQXFCRixDQUNQO0NBQ0Y7R0FuREtKLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQXFEbEIsK0RBQWVBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNoaWV2ZW1lbnRzLnRzeD8yMTljIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnLi9IZWFkaW5nJ1xuXG5jb25zdCBBY2hpZXZlbWVudHMgPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgW3Nob3dNb3JlLCBzZXRTaG93TW9yZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgaWYgKGRhdGEpIHtcbiAgICB2YXIgY2VydGlmaWNhdGVzID0gZGF0YS5jZXJ0aWZpY2F0ZXM/Lm1hcChmdW5jdGlvbiAoY2VydGlmaWNhdGUsIGtleSkge1xuICAgICAgdmFyIHNyYyA9ICcvaW1hZ2VzL2NlcnRpZmljYXRlcy8nICsgY2VydGlmaWNhdGUuc3JjXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17Y2VydGlmaWNhdGUubmFtZX0+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e2NlcnRpZmljYXRlLnVybH1cbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgbmFtZT17Y2VydGlmaWNhdGUubmFtZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGFsdD17Y2VydGlmaWNhdGUubmFtZX1cbiAgICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gdy1mdWxsIHJvdW5kZWQtbGcgb2JqZWN0LWNvdmVyIHNoYWRvdy1tZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8aDU+IHtjZXJ0aWZpY2F0ZS5uYW1lfTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy01eGxcIj5cbiAgICAgIDxIZWFkaW5nIHRpdGxlPXsnQWNoaWV2ZW1lbnRzJ30gc3VidGl0bGU9eydDZXJ0aWZpY2F0aW9ucyBhbmQgTW9yZS4nfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGdhcC00IHNwYWNlLXktNiBwdC02IG1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTIgbWQ6c3BhY2UteS0wXCI+XG4gICAgICAgIHtjZXJ0aWZpY2F0ZXN9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiIG10LTYgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPFNpZGViYXJSb3dcbiAgICAgICAgICBJY29uPXtCYWRnZUNoZWNrSWNvbn1cbiAgICAgICAgICB0aXRsZT1cIkNlcnRpZmljYXRpb25cIlxuICAgICAgICAgIHNyYz17Q2VydGlmaWNhdGV9IC8vTG9jaywgVHJvcGh5LCBCcmllZmNhc2VcbiAgICAgICAgICBjb250ZW50PVwiXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj4gKi99XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB0LTI0XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cteHMgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB4LTIgcHktMSB0ZXh0LWdyYXktODAwXCJcbiAgICAgICAgICBkYXRhLXNwbGl0YmVlLWV2ZW50PVwiVG9nZ2xlIEFjaGlldmVtZW50c1wiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vcmUoIXNob3dNb3JlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93TW9yZSA/ICdTaG93IGxlc3Mg4oaRJyA6ICdTaG93IG1vcmUg4oaTJ31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNoaWV2ZW1lbnRzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWRpbmciLCJBY2hpZXZlbWVudHMiLCJkYXRhIiwic2hvd01vcmUiLCJzZXRTaG93TW9yZSIsImNlcnRpZmljYXRlcyIsIm1hcCIsImNlcnRpZmljYXRlIiwia2V5Iiwic3JjIiwiZGl2IiwiYSIsImhyZWYiLCJ1cmwiLCJuYW1lIiwiaW1nIiwiYWx0IiwiY2xhc3NOYW1lIiwiaDUiLCJ0aXRsZSIsInN1YnRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Achievements.tsx\n"));

/***/ })

});