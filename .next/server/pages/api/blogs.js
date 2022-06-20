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
exports.id = "pages/api/blogs";
exports.ids = ["pages/api/blogs"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/blogs.js":
/*!****************************!*\
  !*** ./pages/api/blogs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    let data = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(\"blogpost\");\n    let myfile;\n    let allblog = [];\n    for(let index = 0; index < data.length; index++){\n        const item = data[index];\n        myfile = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(\"blogpost/\" + item, \"utf-8\");\n        allblog.push(JSON.parse(myfile));\n    }\n    res.status(200).json(allblog);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBQ3JEO0FBQ1QsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJQyxJQUFJLEdBQUcsTUFBTUosZ0RBQW1CLENBQUMsVUFBVSxDQUFDO0lBQ2hELElBQUlPLE1BQU07SUFDVixJQUFJQyxPQUFPLEdBQUMsRUFBRTtJQUNkLElBQUssSUFBSUMsS0FBSyxHQUFHLENBQUMsRUFBRUEsS0FBSyxHQUFHTCxJQUFJLENBQUNNLE1BQU0sRUFBRUQsS0FBSyxFQUFFLENBQUU7UUFDaEQsTUFBTUUsSUFBSSxHQUFHUCxJQUFJLENBQUNLLEtBQUssQ0FBQztRQUN4QkYsTUFBTSxHQUFHLE1BQU1QLGlEQUFvQixDQUFFLFdBQVcsR0FBQ1csSUFBSSxFQUFFLE9BQU8sQ0FBQztRQUMvREgsT0FBTyxDQUFDSyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDUixNQUFNLENBQUMsQ0FBQztLQUVqQztJQUNESixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDVCxPQUFPLENBQUM7Q0FFOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdC1hcHAvLi9wYWdlcy9hcGkvYmxvZ3MuanM/ZWM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcydcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGxldCBkYXRhID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZGRpcignYmxvZ3Bvc3QnKVxyXG4gIGxldCBteWZpbGU7XHJcbiAgbGV0IGFsbGJsb2c9W11cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBkYXRhW2luZGV4XTtcclxuICAgIG15ZmlsZSA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRGaWxlKCgnYmxvZ3Bvc3QvJytpdGVtKSwndXRmLTgnKVxyXG4gICAgYWxsYmxvZy5wdXNoKEpTT04ucGFyc2UobXlmaWxlKSlcclxuICAgIFxyXG4gIH1cclxuICByZXMuc3RhdHVzKDIwMCkuanNvbihhbGxibG9nKVxyXG4gIFxyXG59XHJcbiJdLCJuYW1lcyI6WyJmcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYXRhIiwicHJvbWlzZXMiLCJyZWFkZGlyIiwibXlmaWxlIiwiYWxsYmxvZyIsImluZGV4IiwibGVuZ3RoIiwiaXRlbSIsInJlYWRGaWxlIiwicHVzaCIsIkpTT04iLCJwYXJzZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/blogs.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blogs.js"));
module.exports = __webpack_exports__;

})();