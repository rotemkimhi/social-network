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
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./pages/signup.tsx":
/*!**************************!*\
  !*** ./pages/signup.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n//pages\\signup.tsx\n\n\n\nconst Signup = ()=>{\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        username: \"\",\n        password: \"\"\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleInputChange = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const res = await fetch(\"/api/auth/signup\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formData)\n        });\n        if (res.ok) router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"name\",\n                placeholder: \"Name\",\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akimh\\\\Downloads\\\\hw4-Cver\\\\pages\\\\signup.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"email\",\n                type: \"email\",\n                placeholder: \"Email\",\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akimh\\\\Downloads\\\\hw4-Cver\\\\pages\\\\signup.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"username\",\n                placeholder: \"Username\",\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akimh\\\\Downloads\\\\hw4-Cver\\\\pages\\\\signup.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"password\",\n                type: \"password\",\n                placeholder: \"Password\",\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akimh\\\\Downloads\\\\hw4-Cver\\\\pages\\\\signup.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akimh\\\\Downloads\\\\hw4-Cver\\\\pages\\\\signup.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\akimh\\\\Downloads\\\\hw4-Cver\\\\pages\\\\signup.tsx\",\n        lineNumber: 29,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDZ0M7QUFDTztBQUV2QyxNQUFNRSxTQUFtQkEsSUFBTTtJQUM3QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUM7UUFBRUssTUFBTTtRQUFJQyxPQUFPO1FBQUlDLFVBQVU7UUFBSUMsVUFBVTtJQUFHO0lBQzNGLE1BQU1DLFNBQVNSLHNEQUFTQTtJQUV4QixNQUFNUyxvQkFBb0JBLENBQUNDLElBQTJDO1FBQ3BFUCxZQUFZO1lBQUUsR0FBR0QsUUFBUTtZQUFFLENBQUNRLEVBQUVDLE1BQU0sQ0FBQ1AsSUFBSSxHQUFHTSxFQUFFQyxNQUFNLENBQUNDLEtBQUFBO1FBQU07SUFDN0Q7SUFFQSxNQUFNQyxlQUFlLE9BQU9ILElBQXdDO1FBQ2xFQSxFQUFFSSxjQUFjO1FBQ2hCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxvQkFBb0I7WUFDMUNDLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7WUFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ25CO1FBQ3ZCO1FBQ0EsSUFBSWEsSUFBSU8sRUFBRSxFQUFFZCxPQUFPZSxJQUFJLENBQUM7SUFDMUI7SUFFQSxxQkFDRUMsNkRBQUFBLENBQUNDLFFBQUFBO1FBQUtDLFVBQVViOzswQkFDZFcsNkRBQUFBLENBQUNHLFNBQUFBO2dCQUFNdkIsTUFBSztnQkFBT3dCLGFBQVk7Z0JBQU9DLFVBQVVwQjs7Ozs7OzBCQUNoRGUsNkRBQUFBLENBQUNHLFNBQUFBO2dCQUFNdkIsTUFBSztnQkFBUTBCLE1BQUs7Z0JBQVFGLGFBQVk7Z0JBQVFDLFVBQVVwQjs7Ozs7OzBCQUMvRGUsNkRBQUFBLENBQUNHLFNBQUFBO2dCQUFNdkIsTUFBSztnQkFBV3dCLGFBQVk7Z0JBQVdDLFVBQVVwQjs7Ozs7OzBCQUN4RGUsNkRBQUFBLENBQUNHLFNBQUFBO2dCQUFNdkIsTUFBSztnQkFBVzBCLE1BQUs7Z0JBQVdGLGFBQVk7Z0JBQVdDLFVBQVVwQjs7Ozs7OzBCQUN4RWUsNkRBQUFBLENBQUNPLFVBQUFBO2dCQUFPRCxNQUFLOzBCQUFTOzs7Ozs7Ozs7Ozs7QUFHNUI7QUFFQSxpRUFBZTdCLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvc2lnbnVwLnRzeD8wZWFhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vcGFnZXNcXHNpZ251cC50c3hcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgU2lnbnVwOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7IG5hbWU6IFwiXCIsIGVtYWlsOiBcIlwiLCB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2F1dGgvc2lnbnVwXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gICAgfSk7XG4gICAgaWYgKHJlcy5vaykgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICA8aW5wdXQgbmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgIDxpbnB1dCBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgPGlucHV0IG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIFVwPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiU2lnbnVwIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJlbWFpbCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyb3V0ZXIiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInB1c2giLCJfanN4REVWIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidHlwZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signup.tsx\n");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signup.tsx"));
module.exports = __webpack_exports__;

})();