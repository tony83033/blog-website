"use strict";
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
exports.id = "pages/blogpost/[slug]";
exports.ids = ["pages/blogpost/[slug]"];
exports.modules = {

/***/ "./pages/blogpost/[slug].js":
/*!**********************************!*\
  !*** ./pages/blogpost/[slug].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst slug = (props)=>{\n    const { 0: blog , 1: setblog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.myblog);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mt-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-center\",\n                    children: [\n                        \"Title of this Blog is \",\n                        blog && blog.title\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Sumit\\\\Desktop\\\\Apna-collage\\\\Coad-with-harry\\\\first-app\\\\pages\\\\blogpost\\\\[slug].js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sumit\\\\Desktop\\\\Apna-collage\\\\Coad-with-harry\\\\first-app\\\\pages\\\\blogpost\\\\[slug].js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: blog && blog.contant\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sumit\\\\Desktop\\\\Apna-collage\\\\Coad-with-harry\\\\first-app\\\\pages\\\\blogpost\\\\[slug].js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Sumit\\\\Desktop\\\\Apna-collage\\\\Coad-with-harry\\\\first-app\\\\pages\\\\blogpost\\\\[slug].js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\nasync function getServerSideProps(context) {\n    const { slug: slug1  } = context.query;\n    let data = await fetch(`http://localhost:3000/api/blog?slug=${slug1}`);\n    let myblog = await data.json();\n    return {\n        props: {\n            myblog\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slug);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncG9zdC9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFpRDtBQUVUO0FBRXZDLE1BQU1JLElBQUksR0FBRyxDQUFDQyxLQUFLLEdBQUs7SUFFcEIsTUFBTSxFQU5YLEdBTVlDLElBQUksR0FOaEIsR0FNa0JDLE9BQU8sTUFBSUwsK0NBQVEsQ0FBQ0csS0FBSyxDQUFDRyxNQUFNLENBQUM7SUFLakQscUJBQ0U7a0JBQ0UsNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGdCQUFnQjs7OEJBQzdCLDhEQUFDQyxJQUFFO29CQUFDRCxTQUFTLEVBQUMsYUFBYTs7d0JBQUMsd0JBQXNCO3dCQUFDSixJQUFJLElBQUlBLElBQUksQ0FBQ00sS0FBSzs7Ozs7OzZCQUFNOzhCQUMzRSw4REFBQ0MsSUFBRTs7Ozs2QkFBRzs4QkFDTiw4REFBQ0MsR0FBQzs4QkFBRVIsSUFBSSxJQUFJQSxJQUFJLENBQUNTLE9BQU87Ozs7OzZCQUFLOzs7Ozs7cUJBQ3pCO3FCQUNMLENBQ0o7Q0FDRjtBQUVNLGVBQWVDLGtCQUFrQixDQUFDQyxPQUFPLEVBQUU7SUFFOUMsTUFBTSxFQUFDYixJQUFJLEVBQUpBLEtBQUksR0FBQyxHQUFHYSxPQUFPLENBQUNDLEtBQUs7SUFHN0IsSUFBSUMsSUFBSSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLG9DQUFvQyxFQUFFaEIsS0FBSSxDQUFDLENBQUMsQ0FBQztJQUNyRSxJQUFJSSxNQUFNLEdBQUcsTUFBTVcsSUFBSSxDQUFDRSxJQUFJLEVBQUU7SUFHL0IsT0FBTztRQUNMaEIsS0FBSyxFQUFFO1lBQUNHLE1BQU07U0FBQztLQUNoQjtDQUNGO0FBRUQsaUVBQWVKLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcnN0LWFwcC8uL3BhZ2VzL2Jsb2dwb3N0L1tzbHVnXS5qcz9iODlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbiBjb25zdCBzbHVnID0gKHByb3BzKSA9PiB7XHJcbiAgICAgXHJcbiAgICAgY29uc3QgW2Jsb2csIHNldGJsb2ddID0gdXNlU3RhdGUocHJvcHMubXlibG9nKVxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgXHJcbiAgICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5UaXRsZSBvZiB0aGlzIEJsb2cgaXMge2Jsb2cgJiYgYmxvZy50aXRsZX08L2gyPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxwPntibG9nICYmIGJsb2cuY29udGFudH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgXHJcbiAgICBjb25zdCB7c2x1Z30gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gICAgXHJcblxyXG4gICBsZXQgZGF0YSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Jsb2c/c2x1Zz0ke3NsdWd9YClcclxuICAgbGV0IG15YmxvZyA9IGF3YWl0IGRhdGEuanNvbigpXHJcbiAgICAgIFxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtteWJsb2d9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsdWc7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwic2x1ZyIsInByb3BzIiwiYmxvZyIsInNldGJsb2ciLCJteWJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInRpdGxlIiwiaHIiLCJwIiwiY29udGFudCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsImRhdGEiLCJmZXRjaCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blogpost/[slug].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blogpost/[slug].js"));
module.exports = __webpack_exports__;

})();