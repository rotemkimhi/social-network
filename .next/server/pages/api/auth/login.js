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
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
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

/***/ "(api)/./pages/api/auth/login.ts":
/*!*********************************!*\
  !*** ./pages/api/auth/login.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);\n//api/auth/login.ts\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient();\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    const { username , password  } = req.body;\n    const user = await prisma.user.findFirst({\n        where: {\n            username: username\n        }\n    });\n    const passwordCorrect = user?.password ? await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compare(password, user.password) : false;\n    if (!(user && passwordCorrect)) {\n        return res.status(401).json({\n            error: \"invalid username or password\"\n        });\n    }\n    const userForToken = {\n        username: user.username,\n        id: user.id,\n        email: user.email\n    };\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign(userForToken, \"abc\");\n    res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_3___default().serialize(\"auth\", token, {\n        httpOnly: true,\n        sameSite: \"strict\",\n        maxAge: 3600,\n        path: \"/\"\n    }));\n    //console.log('from login 36 sign in token', token)\n    console.log(\"logged in! Hi:\", username);\n    res.status(200).json({\n        token,\n        username: user.username,\n        name: user.name\n    });\n} // // pages/api/auth/login.ts\n // import { PrismaClient } from '@prisma/client';\n // import bcrypt from 'bcrypt';\n // import jwt from 'jsonwebtoken';\n // import cookie from 'cookie';\n // import { setup } from '../../../lib/csrf'; \n // const prisma = new PrismaClient();\n // const handler = async (req, res) => {\n //   if (req.method !== 'POST') {\n //     return res.status(405).json({ message: 'Method not allowed' });\n //   }\n //   const { username, password } = req.body;\n //   const user = await prisma.user.findFirst({ where: { username: username }})\n //   const passwordCorrect = user?.password \n //     ? await bcrypt.compare(password, user.password)\n //     : false;\n //   if (!(user && passwordCorrect)) {\n //     return res.status(401).json({ error: 'invalid username or password' });\n //   }\n //   const userForToken = { username: user.username, id: user.id, email: user.email }\n //   const token = jwt.sign(userForToken, 'abc');\n //   res.setHeader('Set-Cookie', cookie.serialize('auth', token, {\n //     httpOnly: true,\n //     sameSite: 'strict',\n //     maxAge: 3600,\n //     path: '/',\n //   }));\n //   res.status(200).json({\n //     token,\n //     username: user.username,\n //     name: user.name\n //   })\n // }\n // export default setup(handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUUyQjtBQUNHO0FBQ2U7QUFDbEI7QUFFM0IsTUFBTUksU0FBUyxJQUFJRix3REFBWUE7QUFFaEIsZUFBZUcsUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUMvRSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixPQUFPRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBcUI7SUFDOUQ7SUFFQSxNQUFNLEVBQUVDLFNBQUFBLEVBQVVDLFNBQUFBLEVBQVUsR0FBR1AsSUFBSVEsSUFBSTtJQUV2QyxNQUFNQyxPQUFPLE1BQU1YLE9BQU9XLElBQUksQ0FBQ0MsU0FBUyxDQUFDO1FBQUVDLE9BQU87WUFBRUwsVUFBVUE7UUFBUztJQUFDO0lBRXhFLE1BQU1NLGtCQUFrQkgsTUFBTUYsV0FDMUIsTUFBTWIscURBQWMsQ0FBQ2EsVUFBVUUsS0FBS0YsUUFBUSxJQUM1QyxLQUFLO0lBRVQsSUFBSSxDQUFFRSxDQUFBQSxRQUFRRyxlQUFBQSxHQUFrQjtRQUM5QixPQUFPWCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQzFCVSxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE1BQU1DLGVBQWU7UUFDbkJULFVBQVVHLEtBQUtILFFBQVE7UUFDdkJVLElBQUlQLEtBQUtPLEVBQUU7UUFDWEMsT0FBT1IsS0FBS1EsS0FBQUE7SUFDZDtJQUVBLE1BQU1DLFFBQVF2Qix3REFBUSxDQUFDb0IsY0FBYztJQUVyQ2QsSUFBSW1CLFNBQVMsQ0FBQyxjQUFjdkIsdURBQWdCLENBQUMsUUFBUXFCLE9BQU87UUFDMURJLFVBQVUsSUFBSTtRQUNkQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsTUFBTTtJQUNSO0lBR0E7SUFDQUMsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQnJCO0lBQzlCTCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ25CYztRQUNBWixVQUFVRyxLQUFLSCxRQUFRO1FBQ3ZCc0IsTUFBTW5CLEtBQUttQixJQUFBQTtJQUNiO0FBQ0YsRUFDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FFQTtDQUVBO0NBQ0E7Q0FDQTtDQUNBO0NBRUE7Q0FFQTtDQUNBO0NBQ0E7Q0FDQTtDQUVBO0NBQ0E7Q0FDQTtDQUVBO0NBQ0E7Q0FFQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FFQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi50cz83NDRkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vYXBpL2F1dGgvbG9naW4udHNcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCdcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSdcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xuICB9XG5cbiAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7IHdoZXJlOiB7IHVzZXJuYW1lOiB1c2VybmFtZSB9fSlcblxuICBjb25zdCBwYXNzd29yZENvcnJlY3QgPSB1c2VyPy5wYXNzd29yZCBcbiAgICA/IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKVxuICAgIDogZmFsc2U7XG5cbiAgaWYgKCEodXNlciAmJiBwYXNzd29yZENvcnJlY3QpKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcbiAgICAgIGVycm9yOiAnaW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZCcsXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHVzZXJGb3JUb2tlbiA9IHtcbiAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcbiAgICBpZDogdXNlci5pZCxcbiAgICBlbWFpbDogdXNlci5lbWFpbFxuICB9XG5cbiAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih1c2VyRm9yVG9rZW4sICdhYmMnKVxuXG4gIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBjb29raWUuc2VyaWFsaXplKCdhdXRoJywgdG9rZW4sIHtcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBzYW1lU2l0ZTogJ3N0cmljdCcsXG4gICAgbWF4QWdlOiAzNjAwLCAgXG4gICAgcGF0aDogJy8nLFxuICB9KSk7XG5cblxuICAvL2NvbnNvbGUubG9nKCdmcm9tIGxvZ2luIDM2IHNpZ24gaW4gdG9rZW4nLCB0b2tlbilcbiAgY29uc29sZS5sb2coJ2xvZ2dlZCBpbiEgSGk6JywgdXNlcm5hbWUpXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICB0b2tlbixcbiAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcbiAgICBuYW1lOiB1c2VyLm5hbWVcbiAgfSlcbn1cbi8vIC8vIHBhZ2VzL2FwaS9hdXRoL2xvZ2luLnRzXG4vLyBpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG4vLyBpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XG4vLyBpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG4vLyBpbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSc7XG4vLyBpbXBvcnQgeyBzZXR1cCB9IGZyb20gJy4uLy4uLy4uL2xpYi9jc3JmJzsgXG5cbi8vIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuLy8gY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuLy8gICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSk7XG4vLyAgIH1cblxuLy8gICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG5cbi8vICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7IHdoZXJlOiB7IHVzZXJuYW1lOiB1c2VybmFtZSB9fSlcbi8vICAgY29uc3QgcGFzc3dvcmRDb3JyZWN0ID0gdXNlcj8ucGFzc3dvcmQgXG4vLyAgICAgPyBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZClcbi8vICAgICA6IGZhbHNlO1xuXG4vLyAgIGlmICghKHVzZXIgJiYgcGFzc3dvcmRDb3JyZWN0KSkge1xuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnaW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZCcgfSk7XG4vLyAgIH1cblxuLy8gICBjb25zdCB1c2VyRm9yVG9rZW4gPSB7IHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLCBpZDogdXNlci5pZCwgZW1haWw6IHVzZXIuZW1haWwgfVxuLy8gICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHVzZXJGb3JUb2tlbiwgJ2FiYycpO1xuXG4vLyAgIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLCBjb29raWUuc2VyaWFsaXplKCdhdXRoJywgdG9rZW4sIHtcbi8vICAgICBodHRwT25seTogdHJ1ZSxcbi8vICAgICBzYW1lU2l0ZTogJ3N0cmljdCcsXG4vLyAgICAgbWF4QWdlOiAzNjAwLFxuLy8gICAgIHBhdGg6ICcvJyxcbi8vICAgfSkpO1xuXG4vLyAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbi8vICAgICB0b2tlbixcbi8vICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcbi8vICAgICBuYW1lOiB1c2VyLm5hbWVcbi8vICAgfSlcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgc2V0dXAoaGFuZGxlcik7XG5cbiJdLCJuYW1lcyI6WyJiY3J5cHQiLCJqd3QiLCJQcmlzbWFDbGllbnQiLCJjb29raWUiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYm9keSIsInVzZXIiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsInBhc3N3b3JkQ29ycmVjdCIsImNvbXBhcmUiLCJlcnJvciIsInVzZXJGb3JUb2tlbiIsImlkIiwiZW1haWwiLCJ0b2tlbiIsInNpZ24iLCJzZXRIZWFkZXIiLCJzZXJpYWxpemUiLCJodHRwT25seSIsInNhbWVTaXRlIiwibWF4QWdlIiwicGF0aCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/login.ts"));
module.exports = __webpack_exports__;

})();