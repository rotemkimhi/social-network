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
exports.id = "pages/api/auth/signup";
exports.ids = ["pages/api/auth/signup"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "(api)/./pages/api/auth/signup.ts":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n// import type { NextApiRequest, NextApiResponse } from 'next'\n// import bcrypt from 'bcrypt'\n// import jwt from 'jsonwebtoken'\n// import { User } from \"@prisma/client\"\n// export default async function handler(req: NextApiRequest, res: NextApiResponse) {\n//   if (req.method !== 'POST') {\n//     return res.status(405).json({ message: 'Method not allowed' });\n//   }\n//   const { name, email, username, password } = req.body\n//   const saltRounds = 10\n//   const passwordHash = await bcrypt.hash(password, saltRounds)\n//   const user = new User({\n//     username,\n//     name,\n//     email,\n//     passwordHash,\n//   })\n//   const savedUser = await user.save()\n//   res.status(201).json(savedUser)\n// }\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    const { username , password , email , name  } = req.body;\n    const saltRounds = 10;\n    const passwordHash = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, saltRounds);\n    const newUser = await prisma.user.create({\n        data: {\n            username,\n            name,\n            email,\n            password: passwordHash\n        }\n    });\n    res.status(200).json(newUser);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRzJCO0FBQ2tCO0FBRTdDLE1BQU1FLFNBQVMsSUFBSUQsd0RBQVlBO0FBRWhCLGVBQWVFLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDL0UsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFCO0lBQzlEO0lBRUEsTUFBTSxFQUFFQyxTQUFBQSxFQUFVQyxTQUFBQSxFQUFVQyxNQUFBQSxFQUFPQyxLQUFBQSxFQUFNLEdBQUdULElBQUlVLElBQUk7SUFFcEQsTUFBTUMsYUFBYTtJQUNuQixNQUFNQyxlQUFlLE1BQU1oQixrREFBVyxDQUFDVyxVQUFVSTtJQUVqRCxNQUFNRyxVQUFVLE1BQU1oQixPQUFPaUIsSUFBSSxDQUFDQyxNQUFNLENBQUM7UUFDdkNDLE1BQU07WUFDSlg7WUFDQUc7WUFDQUQ7WUFDQUQsVUFBVUs7UUFDWjtJQUNGO0lBRUFYLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNVO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL2FwaS9hdXRoL3NpZ251cC50cz83ZjFmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG4vLyBpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCdcbi8vIGltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuLy8gaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuLy8gICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSk7XG4vLyAgIH1cblxuLy8gICBjb25zdCB7IG5hbWUsIGVtYWlsLCB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5XG5cbi8vICAgY29uc3Qgc2FsdFJvdW5kcyA9IDEwXG4vLyAgIGNvbnN0IHBhc3N3b3JkSGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0Um91bmRzKVxuXG4vLyAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcih7XG4vLyAgICAgdXNlcm5hbWUsXG4vLyAgICAgbmFtZSxcbi8vICAgICBlbWFpbCxcbi8vICAgICBwYXNzd29yZEhhc2gsXG4vLyAgIH0pXG5cbi8vICAgY29uc3Qgc2F2ZWRVc2VyID0gYXdhaXQgdXNlci5zYXZlKClcblxuLy8gICByZXMuc3RhdHVzKDIwMSkuanNvbihzYXZlZFVzZXIpXG4vLyB9XG5cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCdcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSk7XG4gIH1cblxuICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCwgZW1haWwsIG5hbWUgfSA9IHJlcS5ib2R5XG5cbiAgY29uc3Qgc2FsdFJvdW5kcyA9IDEwXG4gIGNvbnN0IHBhc3N3b3JkSGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0Um91bmRzKVxuXG4gIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgbmFtZSxcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkSGFzaCxcbiAgICB9LFxuICB9KVxuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKG5ld1VzZXIpXG59XG5cbiJdLCJuYW1lcyI6WyJiY3J5cHQiLCJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZW1haWwiLCJuYW1lIiwiYm9keSIsInNhbHRSb3VuZHMiLCJwYXNzd29yZEhhc2giLCJoYXNoIiwibmV3VXNlciIsInVzZXIiLCJjcmVhdGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signup.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/signup.ts"));
module.exports = __webpack_exports__;

})();