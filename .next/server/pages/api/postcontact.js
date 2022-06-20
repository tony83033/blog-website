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
exports.id = "pages/api/postcontact";
exports.ids = ["pages/api/postcontact"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/postcontact.js":
/*!**********************************!*\
  !*** ./pages/api/postcontact.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        // Process a POST request\n        let data = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(\"mycontact/\");\n        console.log(data);\n        fs__WEBPACK_IMPORTED_MODULE_0__.promises.writeFile(`mycontact/${data.length + 1}.json`, JSON.stringify(req.body), \"utf-8\");\n        res.status(200).json({\n            \"Post\": \"Post\"\n        });\n        console.log(req.body);\n    } else {\n        // Handle any other HTTP method\n        res.status(200).json({\n            \"Name\": \"Sumit\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdGNvbnRhY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdCO0FBQ1QsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIseUJBQXlCO1FBQ3pCLElBQUlDLElBQUksR0FBRyxNQUFNTCxnREFBbUIsQ0FBQyxZQUFZLENBQUM7UUFDbERRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJLENBQUM7UUFDakJMLGtEQUFxQixDQUFDLENBQUMsVUFBVSxFQUFFSyxJQUFJLENBQUNNLE1BQU0sR0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDWCxHQUFHLENBQUNZLElBQUksQ0FBQyxFQUFDLE9BQU8sQ0FBRTtRQUMxRlgsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDLE1BQU0sRUFBQyxNQUFNO1NBQUMsQ0FBQztRQUVyQ1IsT0FBTyxDQUFDQyxHQUFHLENBQUNQLEdBQUcsQ0FBQ1ksSUFBSSxDQUFDO0tBQ3RCLE1BQU07UUFDTCwrQkFBK0I7UUFDN0JYLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQyxNQUFNLEVBQUMsT0FBTztTQUFDLENBQUM7S0FDekM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcnN0LWFwcC8uL3BhZ2VzL2FwaS9wb3N0Y29udGFjdC5qcz9iNWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJ1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgIC8vIFByb2Nlc3MgYSBQT1NUIHJlcXVlc3RcclxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkZGlyKCdteWNvbnRhY3QvJylcclxuICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgZnMucHJvbWlzZXMud3JpdGVGaWxlKGBteWNvbnRhY3QvJHtkYXRhLmxlbmd0aCsxfS5qc29uYCxKU09OLnN0cmluZ2lmeShyZXEuYm9keSksJ3V0Zi04JywpXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcIlBvc3RcIjpcIlBvc3RcIn0pXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEhhbmRsZSBhbnkgb3RoZXIgSFRUUCBtZXRob2RcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7J05hbWUnOlwiU3VtaXRcIn0pXHJcbiAgICB9XHJcbiAgfSJdLCJuYW1lcyI6WyJmcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwicHJvbWlzZXMiLCJyZWFkZGlyIiwiY29uc29sZSIsImxvZyIsIndyaXRlRmlsZSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJib2R5Iiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/postcontact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/postcontact.js"));
module.exports = __webpack_exports__;

})();