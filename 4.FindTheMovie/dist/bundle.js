/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/movie-list/index.js":
/*!***********************************************!*\
  !*** ./src/js/components/movie-list/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovieList; });\n/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../movie */ \"./src/js/components/movie/index.js\");\n\r\n\r\nclass MovieList {\r\n  drawToDom(selector) {\r\n    this.clearList(selector);\r\n    selector.appendChild(this.fragment);\r\n  }\r\n\r\n  renderMovies(data) {\r\n    this.data = data;\r\n    this.fragment = document.createDocumentFragment();\r\n\r\n    this.data.results.forEach(data => {\r\n      const article = document.createElement(\"article\");\r\n\r\n      article.classList.add(\"movie\");\r\n      article.innerHTML = Object(_movie__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\r\n      this.fragment.appendChild(article);\r\n    });\r\n  }\r\n\r\n  clearList(selector) {\r\n    selector.innerHTML = \"\";\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/components/movie-list/index.js?");

/***/ }),

/***/ "./src/js/components/movie/index.js":
/*!******************************************!*\
  !*** ./src/js/components/movie/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return movie; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"./src/js/config.js\");\n\r\n\r\nfunction movie(data) {\r\n  const mappingData = mapData(data);\r\n  const html = `\r\n    <h2 class=\"movie-title\">${mappingData.title}</h2>\r\n    <date class=\"date\">${mappingData.date}</date>\r\n    <div class=\"picture\"><img src=\"${mappingData.img}\"></div>\r\n    <div class=\"language\">${mappingData.language}</div>\r\n    <div class=\"overview\">${mappingData.overview}</div>\r\n    <div class=\"popularity\">${mappingData.popularity}</div>\r\n  `;\r\n\r\n  return html;\r\n}\r\n\r\nfunction mapData(data) {\r\n  return {\r\n    title: data.title || data.name || \"Unknown\",\r\n    date: data.release_date,\r\n    img: getPictureUrl(),\r\n    language: data.original_language,\r\n    overview: data.overview,\r\n    popularity: data.popularity,\r\n    id: data.id,\r\n  };\r\n\r\n  function getPictureUrl() {\r\n    const url = data.backdrop_path || data.poster_path;\r\n\r\n    if (url) {\r\n      return _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].imageSrc + url;\r\n    } else {\r\n      return _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].noImageSrc;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/components/movie/index.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst API_KEY = \"621ecb1bcdfba489ec672b3f7fea1ec7\";\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  searchMovieUrl: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`,\r\n  imageSrc: \"https://image.tmdb.org/t/p/w185_and_h278_bestv2/\",\r\n  noImageSrc: \"https://upload.wikimedia.org/wikipedia/commons/5/5e/No_image_available_-_museum.svg\",\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/config.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_movie_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/movie-list */ \"./src/js/components/movie-list/index.js\");\n/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies-service */ \"./src/js/movies-service.js\");\n\r\n\r\n\r\n\r\nconst input = document.querySelector(\".search-input\");\r\nconst movieList = document.querySelector(\".movies\");\r\nconst list = new _components_movie_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\ninput.addEventListener(\"input\", e => {\r\n  const searchText = e.target.value;\r\n\r\n  if (!searchText) {\r\n    list.clearList(movieList);\r\n    return;\r\n  }\r\n\r\n  _movies_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getVideoByText(searchText)\r\n    .then(result => {\r\n      list.renderMovies(result);\r\n\r\n      list.drawToDom(movieList);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/movies-service.js":
/*!**********************************!*\
  !*** ./src/js/movies-service.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n\r\n\r\nfunction getVideoByText(text) {\r\n  if (!text) {\r\n    return;\r\n  }\r\n\r\n  return fetch(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].searchMovieUrl + text)\r\n    .then(r => r.json());\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  getVideoByText\r\n});\n\n//# sourceURL=webpack:///./src/js/movies-service.js?");

/***/ })

/******/ });