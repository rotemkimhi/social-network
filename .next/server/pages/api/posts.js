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
exports.id = "pages/api/posts";
exports.ids = ["pages/api/posts"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more:\n// https://pris.ly/d/help/next-js-best-practices\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFFN0MsNEVBQTRFO0FBQzVFLDZDQUE2QztBQUM3QyxFQUFFO0FBQ0YsY0FBYztBQUNkLGdEQUFnRDtBQUVoRCxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFFO0FBRWxFLElBQUlJLElBQXlCLEVBQWNILGdCQUFnQkUsTUFBTSxHQUFHQTtBQUVwRSxpRUFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbi8vIFByaXNtYUNsaWVudCBpcyBhdHRhY2hlZCB0byB0aGUgYGdsb2JhbGAgb2JqZWN0IGluIGRldmVsb3BtZW50IHRvIHByZXZlbnRcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxuLy9cbi8vIExlYXJuIG1vcmU6XG4vLyBodHRwczovL3ByaXMubHkvZC9oZWxwL25leHQtanMtYmVzdC1wcmFjdGljZXNcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsIGFzIHVua25vd24gYXMgeyBwcmlzbWE6IFByaXNtYUNsaWVudCB9XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWFcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/posts.ts":
/*!****************************!*\
  !*** ./pages/api/posts.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n//pages\\api\\posts.ts\n\nconst handler = async (req, res)=>{\n    if (req.method === \"GET\") {\n        const start = req.query.start ? parseInt(req.query.start) : 0;\n        const end = req.query.end ? parseInt(req.query.end) : 3;\n        const posts = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.findMany({\n            where: {\n                published: true\n            },\n            include: {\n                author: {\n                    select: {\n                        name: true\n                    }\n                }\n            },\n            skip: start,\n            take: end - start\n        });\n        res.status(200).json({\n            posts\n        });\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVxQztBQUVyQyxNQUFNQyxVQUFVLE9BQU9DLEtBQXFCQyxNQUF5QjtJQUNuRSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixNQUFNQyxRQUFRSCxJQUFJSSxLQUFLLENBQUNELEtBQUssR0FBR0UsU0FBU0wsSUFBSUksS0FBSyxDQUFDRCxLQUFLLElBQWMsQ0FBQztRQUN2RSxNQUFNRyxNQUFNTixJQUFJSSxLQUFLLENBQUNFLEdBQUcsR0FBR0QsU0FBU0wsSUFBSUksS0FBSyxDQUFDRSxHQUFHLElBQWMsQ0FBQztRQUVqRSxNQUFNQyxRQUFRLE1BQU1ULGlFQUFvQixDQUFDO1lBQ3ZDWSxPQUFPO2dCQUNMQyxXQUFXO1lBQ2I7WUFDQUMsU0FBUztnQkFDUEMsUUFBUTtvQkFDTkMsUUFBUTt3QkFDTkMsTUFBTTtvQkFDUjtnQkFDRjtZQUNGO1lBQ0FDLE1BQU1iO1lBQ05jLE1BQU1YLE1BQU1IO1FBQ2Q7UUFFQUYsSUFBSWlCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRVo7UUFBTTtJQUMvQixPQUFPO1FBQ0xOLElBQUlpQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBcUI7SUFDdkQ7QUFDRjtBQUVBLGlFQUFlckIsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9hcGkvcG9zdHMudHM/ZGRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3BhZ2VzXFxhcGlcXHBvc3RzLnRzXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi9saWIvcHJpc21hJ1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgY29uc3Qgc3RhcnQgPSByZXEucXVlcnkuc3RhcnQgPyBwYXJzZUludChyZXEucXVlcnkuc3RhcnQgYXMgc3RyaW5nKSA6IDA7XG4gICAgY29uc3QgZW5kID0gcmVxLnF1ZXJ5LmVuZCA/IHBhcnNlSW50KHJlcS5xdWVyeS5lbmQgYXMgc3RyaW5nKSA6IDM7XG5cbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHByaXNtYS5wb3N0LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHB1Ymxpc2hlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHNraXA6IHN0YXJ0LFxuICAgICAgdGFrZTogZW5kIC0gc3RhcnQsXG4gICAgfSk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHBvc3RzIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhcnQiLCJxdWVyeSIsInBhcnNlSW50IiwiZW5kIiwicG9zdHMiLCJwb3N0IiwiZmluZE1hbnkiLCJ3aGVyZSIsInB1Ymxpc2hlZCIsImluY2x1ZGUiLCJhdXRob3IiLCJzZWxlY3QiLCJuYW1lIiwic2tpcCIsInRha2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts.ts"));
module.exports = __webpack_exports__;

})();