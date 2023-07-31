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
exports.id = "pages/api/auth/user";
exports.ids = ["pages/api/auth/user"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./pages/api/auth/user.ts":
/*!********************************!*\
  !*** ./pages/api/auth/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);\n//api/auth/user.ts\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    //const token = getTokenFrom(req)\n    //console.log('req.headrs:', req.headers)\n    //console.log(token, 'from user 14')\n    const cookies = cookie__WEBPACK_IMPORTED_MODULE_2___default().parse(req.headers.cookie || \"\");\n    const token = cookies.auth;\n    let decodedToken = null;\n    try {\n        decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, \"abc\");\n    } catch (err) {\n        return res.status(401).json({\n            error: \"token invalid\"\n        });\n    }\n    if (!decodedToken || typeof decodedToken === \"string\" || !decodedToken.id) {\n        return res.status(401).json({\n            error: \"token invalid\"\n        });\n    }\n    const user = await prisma.user.findUnique({\n        where: {\n            id: Number(decodedToken.id)\n        }\n    });\n    //console.log('user from user 36', user)\n    if (!user) {\n        return res.status(404).json({\n            error: \"user not found\"\n        });\n    }\n    res.status(200).json(user);\n}\nconst getTokenFrom = (request)=>{\n    const cookies = cookie__WEBPACK_IMPORTED_MODULE_2___default().parse(request.headers.cookie || \"\");\n    const token = cookies.token;\n    if (token && token.toLowerCase().startsWith(\"bearer \")) {\n        return token.substring(7);\n    }\n    return null;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC91c2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUU4QztBQUNEO0FBQ2xCO0FBRTNCLE1BQU1HLFNBQVMsSUFBSUYsd0RBQVlBO0FBRWhCLGVBQWVHLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDL0UsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFCO0lBQzlEO0lBRUE7SUFDQTtJQUNBO0lBQ0EsTUFBTUMsVUFBVVQsbURBQVksQ0FBQ0csSUFBSVEsT0FBTyxDQUFDWCxNQUFNLElBQUk7SUFFbkQsTUFBTVksUUFBUUgsUUFBUUksSUFBSTtJQUUxQixJQUFJQyxlQUEyQyxJQUFJO0lBRW5ELElBQUk7UUFDRkEsZUFBZWhCLDBEQUFVLENBQUNjLE9BQU87SUFFbkMsRUFBRSxPQUFPSSxLQUFLO1FBQ1osT0FBT1osSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFVSxPQUFPO1FBQWdCO0lBQ3ZEO0lBRUEsSUFBSSxDQUFDSCxnQkFBZ0IsT0FBT0EsaUJBQWlCLFlBQVksQ0FBQ0EsYUFBYUksRUFBRSxFQUFFO1FBQ3pFLE9BQU9kLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRVUsT0FBTztRQUFnQjtJQUN2RDtJQUVBLE1BQU1FLE9BQU8sTUFBTWxCLE9BQU9rQixJQUFJLENBQUNDLFVBQVUsQ0FBQztRQUFFQyxPQUFPO1lBQUVILElBQUlJLE9BQU9SLGFBQWFJLEVBQUU7UUFBRTtJQUFDO0lBQ2xGO0lBRUEsSUFBSSxDQUFDQyxNQUFNO1FBQ1QsT0FBT2YsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFVSxPQUFPO1FBQWlCO0lBQ3hEO0lBRUFiLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNZO0FBQ3ZCO0FBRUEsTUFBTUksZUFBZUEsQ0FBQ0MsVUFBZ0I7SUFDcEMsTUFBTWYsVUFBVVQsbURBQVksQ0FBQ3dCLFFBQVFiLE9BQU8sQ0FBQ1gsTUFBTSxJQUFJO0lBQ3ZELE1BQU1ZLFFBQVFILFFBQVFHLEtBQUs7SUFDM0IsSUFBSUEsU0FBU0EsTUFBTWEsV0FBVyxHQUFHQyxVQUFVLENBQUMsWUFBWTtRQUN0RCxPQUFPZCxNQUFNZSxTQUFTLENBQUM7SUFDekI7SUFDQSxPQUFPLElBQUk7QUFDYiIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9hcGkvYXV0aC91c2VyLnRzPzI3NzciXSwic291cmNlc0NvbnRlbnQiOlsiLy9hcGkvYXV0aC91c2VyLnRzXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IGp3dCwgeyBKd3RQYXlsb2FkIH0gZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSc7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xuICB9XG5cbiAgLy9jb25zdCB0b2tlbiA9IGdldFRva2VuRnJvbShyZXEpXG4gIC8vY29uc29sZS5sb2coJ3JlcS5oZWFkcnM6JywgcmVxLmhlYWRlcnMpXG4gIC8vY29uc29sZS5sb2codG9rZW4sICdmcm9tIHVzZXIgMTQnKVxuICBjb25zdCBjb29raWVzID0gY29va2llLnBhcnNlKHJlcS5oZWFkZXJzLmNvb2tpZSB8fCAnJylcblxuICBjb25zdCB0b2tlbiA9IGNvb2tpZXMuYXV0aFxuXG4gIGxldCBkZWNvZGVkVG9rZW46IEp3dFBheWxvYWQgfCBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICB0cnkge1xuICAgIGRlY29kZWRUb2tlbiA9IGp3dC52ZXJpZnkodG9rZW4sICdhYmMnKSBhcyBKd3RQYXlsb2FkXG5cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICd0b2tlbiBpbnZhbGlkJyB9KVxuICB9XG5cbiAgaWYgKCFkZWNvZGVkVG9rZW4gfHwgdHlwZW9mIGRlY29kZWRUb2tlbiA9PT0gJ3N0cmluZycgfHwgIWRlY29kZWRUb2tlbi5pZCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAndG9rZW4gaW52YWxpZCcgfSlcbiAgfVxuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IE51bWJlcihkZWNvZGVkVG9rZW4uaWQpIH19KVxuICAvL2NvbnNvbGUubG9nKCd1c2VyIGZyb20gdXNlciAzNicsIHVzZXIpXG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6ICd1c2VyIG5vdCBmb3VuZCcgfSlcbiAgfVxuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpXG59XG5cbmNvbnN0IGdldFRva2VuRnJvbSA9IChyZXF1ZXN0OmFueSkgPT4ge1xuICBjb25zdCBjb29raWVzID0gY29va2llLnBhcnNlKHJlcXVlc3QuaGVhZGVycy5jb29raWUgfHwgJycpXG4gIGNvbnN0IHRva2VuID0gY29va2llcy50b2tlblxuICBpZiAodG9rZW4gJiYgdG9rZW4udG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCdiZWFyZXIgJykpIHtcbiAgICByZXR1cm4gdG9rZW4uc3Vic3RyaW5nKDcpXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cbiJdLCJuYW1lcyI6WyJqd3QiLCJQcmlzbWFDbGllbnQiLCJjb29raWUiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjb29raWVzIiwicGFyc2UiLCJoZWFkZXJzIiwidG9rZW4iLCJhdXRoIiwiZGVjb2RlZFRva2VuIiwidmVyaWZ5IiwiZXJyIiwiZXJyb3IiLCJpZCIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJOdW1iZXIiLCJnZXRUb2tlbkZyb20iLCJyZXF1ZXN0IiwidG9Mb3dlckNhc2UiLCJzdGFydHNXaXRoIiwic3Vic3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/user.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/user.ts"));
module.exports = __webpack_exports__;

})();