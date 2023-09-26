/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n    var button = document.querySelector(\".header_button_1\");\r\n    var form = document.getElementById(\"contactForm\");\r\n    var closeButton = document.getElementById(\"closeForm\");\r\n    \r\n    button.addEventListener(\"click\", function () {\r\n        form.style.display = \"block\";\r\n    });\r\n    \r\n    \r\n\r\n    closeButton.addEventListener(\"click\", function () {\r\n        form.style.display = \"none\";\r\n    });\r\n});\r\n\r\n$(document).ready(function() {\r\n\r\n\t//E-mail Ajax Send\r\n\t$(\"form\").submit(function() { //Change\r\n\t\tvar th = $(this);\r\n\t\t$.ajax({\r\n\t\t\ttype: \"POST\",\r\n\t\t\turl: \"sendemail.php\", //Change\r\n\t\t\tdata: th.serialize()\r\n\t\t}).done(function() {\r\n\t\t\talert(\"Thank you!\");\r\n\t\t\tsetTimeout(function() {\r\n\t\t\t\t// Done Functions\r\n\t\t\t\tth.trigger(\"reset\");\r\n\t\t\t}, 1000);\r\n\t\t});\r\n\t\treturn false;\r\n\t});\r\n\r\n});\r\n\r\n//Слайдер\r\n\r\nconst slider = document.querySelector('.slider');\r\nconst slides = document.querySelectorAll('.slide');\r\nconst prevArrow = document.querySelector('.arrow.prev');\r\nconst nextArrow = document.querySelector('.arrow.next');\r\nconst paginationText = document.querySelector('.pagination-text');\r\n\r\nlet currentIndex = 0;\r\n\r\nfunction updatePagination() {\r\n    paginationText.textContent = `${currentIndex + 1}/${slides.length}`;\r\n}\r\n\r\nfunction showSlide(index) {\r\n    slides.forEach((slide, slideIndex) => {\r\n        if (slideIndex === index) {\r\n            slide.classList.add('active');\r\n        } else {\r\n            slide.classList.remove('active');\r\n        }\r\n    });\r\n    updatePagination();\r\n}\r\n\r\nprevArrow.addEventListener('click', () => {\r\n    if (currentIndex > 0) {\r\n        currentIndex--;\r\n        showSlide(currentIndex);\r\n    } else {\r\n        currentIndex = slides.length - 1; \r\n        showSlide(currentIndex);\r\n    }\r\n});\r\n\r\nnextArrow.addEventListener('click', () => {\r\n    if (currentIndex < slides.length - 1) {\r\n        currentIndex++;\r\n        showSlide(currentIndex);\r\n    } else {\r\n        currentIndex = 0;\r\n        showSlide(currentIndex);\r\n    }\r\n});\r\n\r\nshowSlide(currentIndex);\n\n//# sourceURL=webpack://test_rocket_business/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;