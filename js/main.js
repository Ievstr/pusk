/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {

$(function () {
  $('.js-footer-link').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    var headerHeight = $('.js-header').outerHeight();
    var padding = $(window).width() > 767 ? 20 : 16;
    $('html').animate({
      scrollTop: top - (headerHeight / 2 + padding)
    }, 1000);
  });
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

$(function () {
  $('.js-burger').click(function () {
    $(this).toggleClass('burger_active');
    if ($(this).hasClass('burger_active')) {
      $('body').removeClass('o-hidden');
    } else {
      $('body').addClass('o-hidden');
    }
    $('.header__content').toggleClass('header__content_active');
    $('body').toggleClass('o-hidden');
  });
});

/***/ }),

/***/ "./src/blocks/modules/nav/nav.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/nav/nav.js ***!
  \***************************************/
/***/ (() => {

$(function () {
  $('.js-nav-link').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    var headerHeight = $('.js-header').outerHeight();
    var padding = $(window).width() > 767 ? 20 : 16;
    $('html').animate({
      scrollTop: top - (headerHeight / 2 + padding)
    }, 1000);
    $('.js-burger').removeClass('burger_active');
    $('.header__content').removeClass('header__content_active');
    $('body').removeClass('o-hidden');
  });
});

/***/ }),

/***/ "./src/blocks/modules/slider/slider.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/slider/slider.js ***!
  \*********************************************/
/***/ (() => {

$(function () {
  var ticker = new Swiper('.js-ticker', {
    slidesPerView: 'auto',
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0
    },
    on: {
      init: function init() {
        var speed = this.slides[0].childElementCount * 8000;
        this.params.speed = speed;
      }
    }
  });
  var aboutSlider = new Swiper('.js-about-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    spaceBetween: 8,
    breakpoints: {
      768: {
        enabled: false,
        spaceBetween: 0
      }
    },
    navigation: {
      nextEl: '.about-button-next',
      prevEl: '.about-button-prev'
    }
  });
  var advantagesSlider = new Swiper('.js-advantages-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    spaceBetween: 8,
    breakpoints: {
      768: {
        enabled: false,
        spaceBetween: 0
      }
    },
    navigation: {
      nextEl: '.advantages-button-next',
      prevEl: '.advantages-button-prev'
    }
  });
  var featureSlider = new Swiper('.js-feature-slider', {
    slidesPerView: 1.14,
    speed: 1200,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        enabled: false,
        spaceBetween: 0
      }
    },
    navigation: {
      nextEl: '.feature-button-next',
      prevEl: '.feature-button-prev'
    }
  });
  var tariffsSlider = new Swiper('.js-tariffs-slider', {
    enabled: false,
    slidesPerView: 'auto',
    speed: 1200,
    breakpoints: {
      768: {
        enabled: true,
        spaceBetween: 16,
        initialSlide: 1,
        centeredSlides: true,
        centeredSlidesBounds: true
      },
      1366: {
        enabled: false,
        spaceBetween: 16,
        initialSlide: 1,
        centeredSlides: true,
        centeredSlidesBounds: true
      }
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/steps/steps.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/steps/steps.js ***!
  \*******************************************/
/***/ (() => {

$(function () {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
  gsap.defaults({
    ease: 'none'
  });
  if ($('.steps').length) {
    /* $(window).width() > 1279 */
    var main = gsap.timeline({
      defaults: {
        duration: .5,
        stagger: .5
      },
      scrollTrigger: {
        trigger: '.steps',
        // scrub: true,
        start: 'top+=30% center',
        end: 'bottom-=50% center'
        // markers: true
      }
    }).from('.steps__decor-line mask path', {
      drawSVG: 0
    }, 0).to('.steps__decor-dot', {
      autoAlpha: 1
    }, 0).to('.steps__item', {
      autoAlpha: 1
    }, 0);
  }
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_nav_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/nav/nav */ "./src/blocks/modules/nav/nav.js");
/* harmony import */ var _modules_nav_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_nav_nav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/slider/slider */ "./src/blocks/modules/slider/slider.js");
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_slider_slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_steps_steps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/steps/steps */ "./src/blocks/modules/steps/steps.js");
/* harmony import */ var _modules_steps_steps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_steps_steps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__);






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map