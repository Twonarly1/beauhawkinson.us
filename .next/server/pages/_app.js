/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/apollo/authLink.ts":
/*!************************************!*\
  !*** ./src/lib/apollo/authLink.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client/link/context */ \"@apollo/client/link/context\");\n/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_0__);\n\nconst authLink = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_0__.setContext)((_, { headers  })=>{\n    const token = process.env.GITHUB_ACCESS_TOKEN;\n    return {\n        headers: {\n            ...headers,\n            authorization: token ? `Bearer ${token}` : \"\"\n        }\n    };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authLink);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2Fwb2xsby9hdXRoTGluay50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFHeEQsTUFBTUMsUUFBUSxHQUFHRCx1RUFBVSxDQUFDLENBQUNFLENBQUMsRUFBRSxFQUFFQyxPQUFPLEdBQUUsR0FBSztJQUM5QyxNQUFNQyxLQUFLLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxtQkFBbUI7SUFFN0MsT0FBTztRQUNMSixPQUFPLEVBQUU7WUFDUCxHQUFHQSxPQUFPO1lBQ1ZLLGFBQWEsRUFBRUosS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFQSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUU7U0FDOUM7S0FDRjtDQUNGLENBQUM7QUFFRixpRUFBZUgsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9saWIvYXBvbGxvL2F1dGhMaW5rLnRzPzhjZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2xpbmsvY29udGV4dCdcbmltcG9ydCB7IEdJVEhVQl9BQ0NFU1NfVE9LRU4gfSBmcm9tICcuLi9jb25maWcvZW52J1xuXG5jb25zdCBhdXRoTGluayA9IHNldENvbnRleHQoKF8sIHsgaGVhZGVycyB9KSA9PiB7XG4gIGNvbnN0IHRva2VuID0gcHJvY2Vzcy5lbnYuR0lUSFVCX0FDQ0VTU19UT0tFTlxuXG4gIHJldHVybiB7XG4gICAgaGVhZGVyczoge1xuICAgICAgLi4uaGVhZGVycyxcbiAgICAgIGF1dGhvcml6YXRpb246IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiAnJyxcbiAgICB9LFxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBhdXRoTGlua1xuIl0sIm5hbWVzIjpbInNldENvbnRleHQiLCJhdXRoTGluayIsIl8iLCJoZWFkZXJzIiwidG9rZW4iLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0FDQ0VTU19UT0tFTiIsImF1dGhvcml6YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/apollo/authLink.ts\n");

/***/ }),

/***/ "./src/lib/apollo/client.ts":
/*!**********************************!*\
  !*** ./src/lib/apollo/client.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _authLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authLink */ \"./src/lib/apollo/authLink.ts\");\n\n\nconst httpLink = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.createHttpLink)({\n    uri: \"https://api.github.com/graphql\"\n});\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    link: _authLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"].concat(httpLink),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2Fwb2xsby9jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0RTtBQUMzQztBQUVqQyxNQUFNSSxRQUFRLEdBQUdILDhEQUFjLENBQUM7SUFDOUJJLEdBQUcsRUFBRSxnQ0FBZ0M7Q0FDdEMsQ0FBQztBQUVGLE1BQU1DLE1BQU0sR0FBRyxJQUFJTix3REFBWSxDQUFDO0lBQzlCTyxJQUFJLEVBQUVKLHdEQUFlLENBQUNDLFFBQVEsQ0FBQztJQUMvQkssS0FBSyxFQUFFLElBQUlQLHlEQUFhLEVBQUU7Q0FDM0IsQ0FBQztBQUVGLGlFQUFlSSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9hcG9sbG8vY2xpZW50LnRzPzZjYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBjcmVhdGVIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IGF1dGhMaW5rIGZyb20gJy4vYXV0aExpbmsnXG5cbmNvbnN0IGh0dHBMaW5rID0gY3JlYXRlSHR0cExpbmsoe1xuICB1cmk6ICdodHRwczovL2FwaS5naXRodWIuY29tL2dyYXBocWwnLFxufSlcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIGxpbms6IGF1dGhMaW5rLmNvbmNhdChodHRwTGluayksXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50XG4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiY3JlYXRlSHR0cExpbmsiLCJJbk1lbW9yeUNhY2hlIiwiYXV0aExpbmsiLCJodHRwTGluayIsInVyaSIsImNsaWVudCIsImxpbmsiLCJjb25jYXQiLCJjYWNoZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/apollo/client.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/apollo/client */ \"./src/lib/apollo/client.ts\");\n\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"bhawkinson\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/_app.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/two.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/_app.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        async: true,\n                        src: \"https://cdn.splitbee.io/sb.js\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/_app.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloProvider, {\n                client: _lib_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n                    attribute: \"class\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/_app.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/_app.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFRjtBQUNlO0FBQ0k7QUFDTjtBQUUxQixTQUFTSSxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUM5RCxxQkFDRTs7MEJBQ0UsOERBQUNOLGtEQUFJOztrQ0FDSCw4REFBQ08sT0FBSztrQ0FBQyxZQUFVOzs7Ozs0QkFBUTtrQ0FDekIsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTs7Ozs7NEJBQUc7a0NBQ25DLDhEQUFDQyxRQUFNO3dCQUFDQyxLQUFLO3dCQUFDQyxHQUFHLEVBQUMsK0JBQStCOzs7Ozs0QkFBVTs7Ozs7O29CQUN0RDswQkFDUCw4REFBQ1gsMERBQWM7Z0JBQUNDLE1BQU0sRUFBRUEsMERBQU07MEJBQzVCLDRFQUFDRixzREFBYTtvQkFBQ2EsU0FBUyxFQUFDLE9BQU87OEJBQzlCLDRFQUFDVCxTQUFTO3dCQUFFLEdBQUdDLFNBQVM7Ozs7OzRCQUFJOzs7Ozt3QkFDZDs7Ozs7b0JBQ0Q7O29CQUNoQixDQUNKO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvYXBwJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ25leHQtdGhlbWVzJ1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vbGliL2Fwb2xsby9jbGllbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Ymhhd2tpbnNvbjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3R3by5wbmdcIiAvPlxuICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vY2RuLnNwbGl0YmVlLmlvL3NiLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICA8VGhlbWVQcm92aWRlciBhdHRyaWJ1dGU9XCJjbGFzc1wiPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJUaGVtZVByb3ZpZGVyIiwiQXBvbGxvUHJvdmlkZXIiLCJjbGllbnQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwic2NyaXB0IiwiYXN5bmMiLCJzcmMiLCJhdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/context":
/*!**********************************************!*\
  !*** external "@apollo/client/link/context" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();