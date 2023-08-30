/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./assets/js/theme/functions.js":
/*!**************************************!*\
  !*** ./assets/js/theme/functions.js ***!
  \**************************************/
/***/ (() => {

/**
 * Global theme functions
 */

$(document).ready(function () {
  $(".lSNext, .lSPrev").each(function () {
    $(this).attr("href", "#");
  });
  /**
   * Contact form 7 alerts
   */
  var form = document.querySelector('.wpcf7');
  if (form) {
    form.addEventListener('wpcf7mailsent', function () {
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Mensagem enviada!'
      });
    });
    form.addEventListener('wpcf7mailfailed', function () {
      Swal.fire({
        icon: 'error',
        title: 'Ocorreu um erro!',
        text: 'Se o erro persistir, favor contatar o suporte.'
      });
    });
  }
  if (document.querySelector("#copy")) {
    document.querySelector("#copy").addEventListener("click", function () {
      var TextToCopy = document.querySelector("#copy").attributes.link.value;
      var TempText = document.createElement("input");
      TempText.value = TextToCopy;
      document.body.appendChild(TempText);
      TempText.select();
      document.execCommand("copy");
      document.body.removeChild(TempText);
      Swal.fire({
        icon: 'sucess',
        title: 'Texto copiado com sucesso'
      });
    });
  }
  $('#produtos-home').lightSlider({
    adaptiveHeight: true,
    item: 4,
    slideMove: 4,
    slideMargin: 0,
    loop: true,
    pager: false,
    prevHtml: '<i class="fa-solid fa-arrow-left"></i>',
    nextHtml: '<i class="fa-solid fa-arrow-right"></i>',
    responsive: [{
      breakpoint: 1160,
      settings: {
        item: 3,
        slideMove: 3
      }
    }, {
      breakpoint: 930,
      settings: {
        item: 2,
        slideMove: 2
      }
    }, {
      breakpoint: 630,
      settings: {
        item: 1,
        slideMove: 1
      }
    }]
  });
  $(".galleria img").each(function () {
    $(this).on("click", function () {
      var popup = document.createElement("div");
      popup.classList.add("popupProduto");
      var fechar = document.createElement("div");
      fechar.classList.add("fechar");
      var imagem = document.createElement("img");
      imagem.src = $(this).attr("src");
      popup.append(imagem);
      popup.append(fechar);
      popup.onclick = function (event) {
        if (event.target.nodeType == 1 && event.target.classList.contains('popupProduto')) {
          event.stopPropagation();
          $(event.target).remove();
        }
      };
      fechar.onclick = function (event) {
        $(".popupProduto").each(function () {
          $(this).remove();
        });
      };
      document.body.append(popup);
    });
  });
  $(".tamanhos img").each(function () {
    $(this).on("click", function () {
      var popup = document.createElement("div");
      popup.classList.add("popupProduto");
      var fechar = document.createElement("div");
      fechar.classList.add("fechar");
      var imagem = document.createElement("img");
      imagem.src = $(this).attr("src");
      popup.append(imagem);
      popup.append(fechar);
      popup.onclick = function (event) {
        if (event.target.nodeType == 1 && event.target.classList.contains('popupProduto')) {
          event.stopPropagation();
          $(event.target).remove();
        }
      };
      fechar.onclick = function (event) {
        $(".popupProduto").each(function () {
          $(this).remove();
        });
      };
      document.body.append(popup);
    });
  });
  $(".camiseta area").each(function () {
    $(this).on("click", function () {
      var url = "camiseta-modelo.png";
      if ($(this).attr("alvo") == "manga-direita") {
        url = "camiseta-modelo-manga-direita.png";
        document.getElementById("manga-direita").scrollIntoView(false);
        document.querySelector(".camiseta .row:has(#manga-direita)").style.scale = 1.1;
        setTimeout(function () {
          document.querySelector(".camiseta .row:has(#manga-direita)").style.scale = 1;
        }, 300);
        document.querySelector(".camiseta .row:has(#manga-direita)").classList.add("show");
      }
      if ($(this).attr("alvo") == "manga-esquerda") {
        url = "camiseta-modelo-manga-esquerda.png";
        document.getElementById("manga-esquerda").scrollIntoView(false);
        document.querySelector(".camiseta .row:has(#manga-esquerda)").style.scale = 1.1;
        setTimeout(function () {
          document.querySelector(".camiseta .row:has(#manga-esquerda)").style.scale = 1;
        }, 300);
        document.querySelector(".camiseta .row:has(#manga-esquerda)").classList.add("show");
      }
      //add costas e frente
      $(".imagemDestaque").remove();
      var img = document.createElement("img");
      img.classList.add("imagemDestaque");
      img.useMap = "#modelo-camiseta-frente";
      img.src = "http://192.168.0.39/renova/wp-content/themes/area-structure/assets/images/" + url;
      document.querySelector(".camiseta .image").append(img);
    });
  });
  $(".row *").on("mouseover", function () {
    var url = "camiseta-modelo.png";
    if ($(this).parent().attr("alvo") == "manga-direita") {
      url = "camiseta-modelo-manga-direita.png";
    }
    if ($(this).parent().attr("alvo") == "manga-esquerda") {
      url = "camiseta-modelo-manga-esquerda.png";
    }
    $(".imagemDestaque").remove();
    var img = document.createElement("img");
    img.classList.add("imagemDestaque");
    img.useMap = "#modelo-camiseta-frente";
    img.src = "http://192.168.0.39/renova/wp-content/themes/area-structure/assets/images/" + url;
    document.querySelector(".camiseta .image").append(img);
  });
  $(".row textarea").on("input propertychange", function () {
    $("div.texto-" + $(this).parent().attr("alvo")).html($(this).val());
  });
  $(".row *").on("mouseout", function () {
    $(".imagemDestaque").remove();
  });
  $(".row input[type=color]").on("input propertychange", function () {
    $("div.texto-" + $(this).parent().attr("alvo")).html("<p> <i class='circle'></i>" + $(this).val() + "</p>");
    $("div.texto-" + $(this).parent().attr("alvo") + " .circle").css("background-color", $(this).val());
  });
  $(".remove-value").on("click", function () {
    $("#" + $(this).attr("alvo")).val("");
    $("div.texto-" + $(this).attr("alvo")).html("");
  });
  $(".title span").each(function () {
    $(this).on("click", function () {
      if ($(this).parent().parent().parent().hasClass("show")) {
        $(this).parent().parent().parent().removeClass("show");
      } else {
        $(this).parent().parent().parent().addClass("show");
      }
    });
  });
  $("#telefone input").mask("(00) 00000-0000");
});

/***/ }),

/***/ "./assets/scss/index.scss":
/*!********************************!*\
  !*** ./assets/scss/index.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/js/app": 0,
/******/ 			"style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkestrutura_basica"] = self["webpackChunkestrutura_basica"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./assets/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./assets/js/theme/functions.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./assets/scss/index.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;