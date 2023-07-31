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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n//pages\\login.tsx\n\n\n\nconst Login = ()=>{\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        password: \"\"\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleInputChange = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const res = await fetch(\"/api/auth/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formData)\n        });\n        if (res.ok) {\n            router.push(\"/\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"username\",\n                placeholder: \"Username\",\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akimh\\\\Downloads\\\\hw4-Cver\\\\pages\\\\login.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"password\",\n                type: \"password\",\n                placeholder: \"Password\",\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akimh\\\\Downloads\\\\hw4-Cver\\\\pages\\\\login.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Log In\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\akimh\\\\Downloads\\\\hw4-Cver\\\\pages\\\\login.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\akimh\\\\Downloads\\\\hw4-Cver\\\\pages\\\\login.tsx\",\n        lineNumber: 29,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFFOztBQUNnQztBQUNPO0FBRXZDLE1BQU1FLFFBQWtCQSxJQUFNO0lBQzVCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztRQUFFSyxVQUFVO1FBQUlDLFVBQVU7SUFBRztJQUN0RSxNQUFNQyxTQUFTTixzREFBU0E7SUFFeEIsTUFBTU8sb0JBQW9CQSxDQUFDQyxJQUEyQztRQUNwRUwsWUFBWTtZQUFFLEdBQUdELFFBQVE7WUFBRSxDQUFDTSxFQUFFQyxNQUFNLENBQUNDLElBQUksR0FBR0YsRUFBRUMsTUFBTSxDQUFDRSxLQUFBQTtRQUFNO0lBQzdEO0lBRUEsTUFBTUMsZUFBZSxPQUFPSixJQUF3QztRQUNsRUEsRUFBRUssY0FBYztRQUNoQixNQUFNQyxNQUFNLE1BQU1DLE1BQU0sbUJBQW1CO1lBQ3pDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNsQjtRQUN2QjtRQUNBLElBQUlZLElBQUlPLEVBQUUsRUFBRTtZQUNWZixPQUFPZ0IsSUFBSSxDQUFDO1FBRWQ7SUFDRjtJQUVBLHFCQUNFQyw2REFBQUEsQ0FBQ0MsUUFBQUE7UUFBS0MsVUFBVWI7OzBCQUNkVyw2REFBQUEsQ0FBQ0csU0FBQUE7Z0JBQU1oQixNQUFLO2dCQUFXaUIsYUFBWTtnQkFBV0MsVUFBVXJCOzs7Ozs7MEJBQ3hEZ0IsNkRBQUFBLENBQUNHLFNBQUFBO2dCQUFNaEIsTUFBSztnQkFBV21CLE1BQUs7Z0JBQVdGLGFBQVk7Z0JBQVdDLFVBQVVyQjs7Ozs7OzBCQUN4RWdCLDZEQUFBQSxDQUFDTyxVQUFBQTtnQkFBT0QsTUFBSzswQkFBUzs7Ozs7Ozs7Ozs7O0FBRzVCO0FBRUEsaUVBQWU1QixLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL2xvZ2luLnRzeD83MjQzIl0sInNvdXJjZXNDb250ZW50IjpbIiAgLy9wYWdlc1xcbG9naW4udHN4XG4gIGltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4gIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG4gIGNvbnN0IExvZ2luOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHsgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2F1dGgvbG9naW5cIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgIFxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICA8aW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9nIEluPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfTtcblxuICBleHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkxvZ2luIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyb3V0ZXIiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJwdXNoIiwiX2pzeERFViIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInR5cGUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/login.tsx"));
module.exports = __webpack_exports__;

})();