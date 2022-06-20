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
exports.id = "pages/api/blog";
exports.ids = ["pages/api/blog"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/blog.js":
/*!***************************!*\
  !*** ./pages/api/blog.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nfunction handler(req, res) {\n    fs__WEBPACK_IMPORTED_MODULE_0__.readFile(`blogpost/${req.query.slug}.json`, \"utf-8\", (err, data)=>{\n        if (err) {\n            res.status(500).json({\n                error: \"Internal server error\"\n            });\n        }\n        res.status(200).json(JSON.parse(data));\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw2RUFBNkU7QUFDckQ7QUFDVCxTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDSCx3Q0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFRSxHQUFHLENBQUNHLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBQyxDQUFDQyxHQUFHLEVBQUNDLElBQUksR0FBRztRQUNqRSxJQUFHRCxHQUFHLEVBQUM7WUFDTEosR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBQ0MsS0FBSyxFQUFFLHVCQUF1QjthQUFDLENBQUM7U0FDdkQ7UUFDRFIsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0UsSUFBSSxDQUFDQyxLQUFLLENBQUNMLElBQUksQ0FBQyxDQUFDO0tBQ3ZDLENBQUM7Q0FFSCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcnN0LWFwcC8uL3BhZ2VzL2FwaS9ibG9nLmpzPzMyNGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBmcy5yZWFkRmlsZShgYmxvZ3Bvc3QvJHtyZXEucXVlcnkuc2x1Z30uanNvbmAsICd1dGYtOCcsKGVycixkYXRhKT0+e1xuICAgIGlmKGVycil7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyb3I6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCJ9KVxuICAgIH1cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihKU09OLnBhcnNlKGRhdGEpKVxuICB9KVxuICBcbn1cbiJdLCJuYW1lcyI6WyJmcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZWFkRmlsZSIsInF1ZXJ5Iiwic2x1ZyIsImVyciIsImRhdGEiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJKU09OIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/blog.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blog.js"));
module.exports = __webpack_exports__;

})();