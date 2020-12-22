(this["webpackJsonpastshop-app"] = this["webpackJsonpastshop-app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/styles.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  box-sizing: border-box;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.dropdown-menu {\n  height: 300px;\n  overflow-y: scroll;\n}\n\n.head_title h1 {\n  margin-top: \"100px\";\n  width: 100%;\n  max-width: 1300px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 100px;\n  text-align: center;\n  font-weight: bold;\n}\n@media (max-width: 1000px) {\n  .head_title h1 {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n\n.head_title_store h1 {\n  font-size: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: right;\n  font-weight: bold;\n}\n\n.sidenav {\n  width: 130px;\n  margin-top: 200px;\n  position: fixed;\n  z-index: 1;\n  top: 20px;\n  left: 10px;\n  background: #eee;\n  overflow-x: hidden;\n  padding: 8px 0;\n}\n\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #2196f3;\n  display: block;\n}\n\n.sidenav a:hover {\n  color: #064579;\n}\n\n.contact_font {\n  font-size: 20px;\n}\n.contact_font p {\n  font-size: 20px;\n}\n.contact_font b {\n  font-size: 25px;\n}\n.contact_font h1 {\n  font-size: 35px;\n}\n.contact_font h2 {\n  font-size: 3opx;\n}\n\n.buttonslide {\n  transition: all 0.5s ease;\n  border: none;\n  background: #ffd800;\n  border-radius: 30px;\n  text-transform: uppercase;\n  box-sizing: border-box;\n  padding: 15px 40px;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: cursor;\n}\n\n.buttonslide:hover {\n  color: #000000;\n  background: #f3f5f3;\n  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));\n}\n\n.slider-content {\n  text-align: center;\n}\n\n.slider-content .inner {\n  padding: 0 70px;\n  box-sizing: border-box;\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.slider-content .inner .buttonslide {\n  position: relative;\n  -webkit-transition-delay: 0s;\n  transform: translate(50%, 450%);\n  transition-delay: 0s;\n}\n\n.slider-content .inner h1 {\n  font-weight: 900;\n  margin: 0 auto;\n  max-width: 840px;\n  color: #ffffff;\n  font-size: 64px;\n  line-height: 1;\n}\n\n.slider-content .inner p {\n  color: #ffffff;\n  font-size: 14px;\n  line-height: 1.5;\n  margin: 20px auto 30px;\n  max-width: 640px;\n}\n\n.slider-content section {\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n}\n\n.slider-content section span {\n  color: #ffffff;\n}\n\n.slider-content section span {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  display: inline-block;\n  text-align: left;\n  line-height: 1.4;\n  vertical-align: middle;\n  margin-left: 10px;\n}\n\n.slider-content section img {\n  width: 40px;\n  height: 40px;\n  border: solid 2px rgba(255, 255, 255, 0.5);\n  border-radius: 100%;\n  vertical-align: middle;\n}\n\n.slider-content section span strong {\n  color: #ffffff;\n  font-size: 14px;\n  display: block;\n}\n\n@media (max-height: 500px) {\n  .slider-wrapper,\n.slider-content .inner .buttonslide,\n.slide {\n    height: calc(100vh - 75px);\n  }\n}\n@media (max-width: 640px) {\n  .slider-wrapper,\n.slider-content .inner .buttonslide,\n.slide {\n    height: calc(80vh - 75px);\n  }\n}\n@media (max-height: 600px) {\n  .slider-content .inner h1 {\n    font-size: 32px;\n  }\n}\n@media (max-width: 640px) {\n  .slider-content .inner h1 {\n    font-size: 32px;\n  }\n}\n.app {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n\n.link {\n  margin-right: 40px;\n  color: #474747;\n}\n\n.center {\n  align-content: center;\n  flex: 1 1;\n  justify-content: \"center\";\n}\n\n.headerPD {\n  min-height: 100vh;\n  font-size: calc(10px + 2vmin);\n  background: radial-gradient(#ffffff, #adf1fa);\n}\n\n.col-2 {\n  flex-basis: 50%;\n  min-width: 300px;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.col-2 img {\n  max-width: 100%;\n  padding: 50px 0;\n}\n\n.col-2 h1 {\n  font-size: 50px;\n}\n\n.card {\n  width: \"20rem\";\n  height: \"20rem\";\n  margin: 1rem;\n  background-color: #ffffff;\n  padding: 1.5rem;\n  text-align: left;\n  text-decoration: none;\n  border: 1px solid #eaeaea;\n  border-radius: 10px;\n  transition: color 0.15s ease, border-color 0.15s ease;\n}\n.card:hover {\n  transform: translateY(-7px);\n}\n\n.card:focus,\n.card:active {\n  color: #0070f3;\n  border-color: #0070f3;\n}\n\n.card h1 {\n  margin: 0;\n  font-size: 1.5rem;\n}\n\n.card p {\n  margin: 0;\n  font-size: 1rem;\n  line-height: 1.5;\n}\n\n.footers {\n  max-width: 1500px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 100px;\n  font-size: 14px;\n  align-items: center;\n  padding: 60px 0 20px;\n}\n.footers p {\n  font-size: 16px;\n}\n\n.header {\n  margin-top: \"100px\";\n  width: 100%;\n  max-width: 1300px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n@media (max-width: 1000px) {\n  .header {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n.header__summary {\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n}\n.header__price {\n  color: #60b0f1;\n  margin-left: 10px;\n}\n.header__logo {\n  height: 38px;\n}\n.header__title {\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n  margin-left: 20px;\n}\n\n.background-image {\n  position: absolute;\n  opacity: 0.02;\n  left: -10vw;\n  top: -10vh;\n  height: 75vh;\n  transform: rotate(20deg);\n  pointer-events: none;\n}\n\n.promotional-message {\n  margin-bottom: 100px;\n  margin-top: 25px;\n  text-align: center;\n}\n.promotional-message h3 {\n  font-size: 20px;\n  line-height: normal;\n  text-align: center;\n  letter-spacing: 0.4em;\n  text-transform: uppercase;\n  margin: 0;\n}\n.promotional-message h2 {\n  font-size: 100px;\n  margin: 0;\n  color: #60b0f1;\n}\n@media (max-width: 600px) {\n  .promotional-message h2 {\n    font-size: 50px;\n  }\n}\n\n.product-list {\n  margin-top: \"100px\";\n  width: 100%;\n  max-width: 1300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media (max-width: 1000px) {\n  .product-list {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n\n.product {\n  display: grid;\n  width: 100%;\n  height: 400px;\n  display: grid;\n  grid-template-areas: \"title        title         image\" \"description  description  image\" \"button       button       image\" \".            .            image\";\n  grid-template-columns: 1fr 1fr 3fr;\n  margin-bottom: 100px;\n  grid-column-gap: 100px;\n}\n.product:nth-of-type(odd) {\n  grid-template-areas: \"image title        title\" \"image .       .\" \"image description  description\" \"image .       .\" \"image .       .\" \"image .       .\" \"image .       .\" \"image .       .\" \"image button       button\" \"image .       .\";\n  grid-template-columns: 3fr 1fr 1fr;\n}\n@media (max-width: 600px) {\n  .product:nth-of-type(odd) {\n    grid-template-areas: \"image        image      \" \"title         title     \" \"description  description\" \"button       button     \";\n    grid-template-columns: 1fr 1fr;\n  }\n  .product:nth-of-type(odd) img {\n    height: 300px;\n    width: 100%;\n  }\n}\n.product__title {\n  margin: 0;\n  grid-area: title;\n  font-size: 32px;\n  font-weight: bold;\n}\n@media (max-width: 600px) {\n  .product__title {\n    font-weight: bold;\n    font-size: 16px;\n  }\n}\n.product__description {\n  grid-area: description;\n  line-height: 1.75rem;\n  min-height: 120px;\n}\n@media (max-width: 600px) {\n  .product__description {\n    min-height: 0px;\n  }\n}\n.product__price {\n  grid-area: price;\n  font-size: 28px;\n  font-weight: bold;\n  animation: fadeWish 1s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;\n  animation-delay: 0s;\n}\n.product__image {\n  grid-area: image;\n  object-fit: cover;\n  border-radius: 4px;\n}\n@media (max-width: 600px) {\n  .product__image {\n    max-width: 250px;\n    max-height: 250px;\n  }\n}\n.product__price-button-container {\n  display: flex;\n  grid-area: button;\n}\n.product__button {\n  margin-left: 60px;\n  font-size: 14pt;\n  font-weight: bold;\n  border-radius: 4px;\n  padding: 6px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border: none;\n  background-color: #60b0f1;\n  color: white;\n  position: relative;\n}\n@media (max-width: 600px) {\n  .product__button {\n    margin-left: 60px;\n    font-size: 10pt;\n    font-weight: bold;\n    border-radius: 4px;\n    padding: 6px;\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n.product__button:hover {\n  transition: 0.2s all;\n}\n.product__button:hover:before {\n  transform: scale(1.15, 1.4);\n}\n.product__button:before {\n  content: \" \";\n  position: absolute;\n  background-color: #60b0f1;\n  top: 0;\n  left: 0;\n  border-radius: 4px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.4;\n  z-index: -1;\n  transform: scale(1);\n  transition: all 0.3s cubic-bezier(0.16, 0.8, 0.66, 1.54);\n}\n.product__button1 {\n  margin-left: 65px;\n  font-size: 14pt;\n  font-weight: bold;\n  border-radius: 4px;\n  padding: 6px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border: none;\n  background-color: #60b0f1;\n  color: white;\n  position: relative;\n}\n.product__button1:hover {\n  transition: 0.2s all;\n  background: rgba(211, 41, 41, 0.856);\n}\n.product__button1:before {\n  content: \" \";\n  position: absolute;\n  background-color: #60b0f1;\n  top: 0;\n  left: 0;\n  border-radius: 4px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.4;\n  z-index: -1;\n  transform: scale(1);\n  transition: all 0.3s cubic-bezier(0.16, 0.8, 0.66, 1.54);\n}\n@media (max-width: 600px) {\n  .product {\n    grid-template-areas: \"image        image      \" \"title         title     \" \"description  description\" \"button       button     \";\n    grid-template-columns: 1fr 1fr;\n  }\n  .product img {\n    height: 300px;\n    width: 100%;\n    margin-bottom: 30px;\n  }\n}\n\n.product2 {\n  display: grid;\n  width: 100%;\n  height: 5px;\n  display: grid;\n  grid-template-areas: \"title        title         image\" \"description  description  image\" \"button       button       image\" \".            .            image\";\n  grid-template-columns: 1fr 1fr 3fr;\n  margin-bottom: 100px;\n  grid-column-gap: 100px;\n}\n.product2:nth-of-type(odd) {\n  grid-template-areas: \"image title        title\" \"image description  description\" \"image button       button\" \"image .       .\";\n  grid-template-columns: 3fr 1fr 1fr;\n}\n@media (max-width: 600px) {\n  .product2:nth-of-type(odd) {\n    grid-template-areas: \"image        image      \" \"title         title     \" \"description  description\" \"button       button     \";\n    grid-template-columns: 1fr 1fr;\n  }\n  .product2:nth-of-type(odd) img {\n    height: 300px;\n    width: 100%;\n  }\n}\n.product2__title {\n  margin: 0;\n  grid-area: title;\n  font-size: 32px;\n  font-weight: bold;\n}\n.product2__description {\n  grid-area: description;\n  line-height: 1.75rem;\n  min-height: 120px;\n}\n@media (max-width: 600px) {\n  .product2__description {\n    min-height: 0px;\n  }\n}\n.product2__price {\n  grid-area: price;\n  font-size: 28px;\n  font-weight: bold;\n  animation: fadeWish 1s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;\n  animation-delay: 0s;\n}\n.product2__image {\n  grid-area: image;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 4px;\n  box-shadow: 0px 18.025px 43.775px rgba(0, 0, 0, 0.25);\n}\n.product2__price-button-container {\n  display: flex;\n  grid-area: button;\n}\n.product2__button {\n  margin-left: 60px;\n  font-size: 14pt;\n  font-weight: bold;\n  border-radius: 4px;\n  padding: 6px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border: none;\n  background-color: #60b0f1;\n  color: white;\n  position: relative;\n  animation: fadeBuy 1s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;\n  animation-delay: 0s;\n}\n.product2__button:hover {\n  transition: 0.2s all;\n}\n.product2__button:hover:before {\n  transform: scale(1.15, 1.4);\n}\n.product2__button:before {\n  content: \" \";\n  position: absolute;\n  background-color: #60b0f1;\n  top: 0;\n  left: 0;\n  border-radius: 4px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.4;\n  z-index: -1;\n  transform: scale(1);\n  transition: all 0.3s cubic-bezier(0.16, 0.8, 0.66, 1.54);\n}\n.product2__button1 {\n  margin-left: 65px;\n  font-size: 14pt;\n  font-weight: bold;\n  border-radius: 4px;\n  padding: 6px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border: none;\n  background-color: #60b0f1;\n  color: white;\n  position: relative;\n}\n.product2__button1:hover {\n  transition: 0.2s all;\n  background: rgba(211, 41, 41, 0.856);\n}\n.product2__button1:before {\n  content: \" \";\n  position: absolute;\n  background-color: #60b0f1;\n  top: 0;\n  left: 0;\n  border-radius: 4px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.4;\n  z-index: -1;\n  transform: scale(1);\n  transition: all 0.3s cubic-bezier(0.16, 0.8, 0.66, 1.54);\n}\n@media (max-width: 600px) {\n  .product2 {\n    grid-template-areas: \"image        image      \" \"title         title     \" \"description  description\" \"button       button     \";\n    grid-template-columns: 1fr 1fr;\n  }\n  .product2 img {\n    height: 300px;\n    width: 100%;\n    margin-bottom: 30px;\n  }\n}\n\n.contact {\n  text-align: center;\n  background-color: #ebebeb;\n  padding-top: 100px;\n  padding-bottom: 100px;\n}\n.contact__title {\n  font-size: 36px;\n}\n.contact__title .colored {\n  font-size: inherit;\n  color: #60b0f1;\n}\n.contact__paragraph {\n  margin-top: \"100px\";\n  width: 100%;\n  max-width: 1300px;\n  margin-left: auto;\n  margin-right: auto;\n  font-weight: 600;\n}\n@media (max-width: 1000px) {\n  .contact__paragraph {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n.contact button {\n  margin-top: 15px;\n  font-size: 14px;\n  font-weight: bold;\n  border-radius: 4px;\n  padding: 12px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border: none;\n  background-color: #343434;\n  color: white;\n  position: relative;\n  z-index: 99;\n}\n.contact button:hover {\n  transition: 0.2s all;\n}\n.contact button:hover:before {\n  transform: scale(1.15, 1.4);\n}\n.contact button:before {\n  content: \" \";\n  position: absolute;\n  background-color: #343434;\n  top: 0;\n  left: 0;\n  border-radius: 4px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.4;\n  z-index: -1;\n  transform: scale(1);\n  transition: all 0.3s cubic-bezier(0.16, 0.8, 0.66, 1.54);\n}\n\n.footer {\n  color: white;\n  background: linear-gradient(90deg, #707070 0%, #474747 100%);\n}\n.footer__left {\n  margin-left: auto;\n}\n.footer a {\n  color: white;\n}\n.footer p {\n  display: flex;\n  margin: 0;\n  margin-top: \"100px\";\n  width: 100%;\n  max-width: 1300px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n@media (max-width: 1000px) {\n  .footer p {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n\n@keyframes openBox {\n  0% {\n    width: 0px;\n    left: 15%;\n  }\n  100% {\n    width: 900px;\n    left: 15%;\n  }\n}\n@keyframes fadeImg {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes showDisc {\n  0% {\n    width: 0px;\n    left: 450px;\n  }\n  100% {\n    width: 500px;\n    left: 450px;\n  }\n}\n@keyframes fadeContent {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeWish {\n  0% {\n    opacity: 0;\n    bottom: -25px;\n  }\n  100% {\n    opacity: 1;\n    bottom: 0;\n  }\n}\n@keyframes fadeBuy {\n  0% {\n    opacity: 0;\n    bottom: -25px;\n  }\n  100% {\n    opacity: 1;\n    bottom: 0;\n  }\n}\n/*ignore*/\n@keyframes top {\n  0% {\n    opacity: 0;\n    bottom: -80px;\n  }\n  100% {\n    opacity: 1;\n    bottom: 0px;\n  }\n}\n@keyframes icon {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.3) rotate(-2deg);\n  }\n  100% {\n    opacity: 1;\n    bottom: 0px;\n  }\n}\n.button_at {\n  display: inline-block;\n  padding: 0.75rem 1.25rem;\n  border-radius: 10rem;\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 1rem;\n  letter-spacing: 0.15rem;\n  transition: all 0.3s;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\n.button_at:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #0cf;\n  border-radius: 10rem;\n  z-index: -2;\n}\n.button_at:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0%;\n  height: 100%;\n  background-color: #008fb3;\n  transition: all 0.3s;\n  border-radius: 10rem;\n  z-index: -1;\n}\n.button_at:hover {\n  color: #fff;\n}\n.button_at:hover:before {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://src/styles.scss"],"names":[],"mappings":"AA+BA;EACE,sBAAA;EACA,oCAAA;EACA,eAAA;AA7BF;;AAgCA;;EAEE,SAAA;EACA,UAAA;AA7BF;;AAgCA;EACE,aAAA;EACA,kBAAA;AA7BF;;AAiCA;EAzCE,mBAAA;EACA,WAAA;EACA,iBALU;EAMV,iBAAA;EACA,kBAAA;EAuCA,oBAAA;EACA,kBAAA;EACA,iBAAA;AA1BF;AADE;EAuBF;IAlCI,kBAAA;IACA,mBAAA;EAgBF;AACF;;AAsBA;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;AAnBF;;AAsBA;EACE,YAAA;EACA,iBAAA;EACA,eAAA;EACA,UAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;EACA,cAAA;AAnBF;;AAsBA;EACE,yBAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;EACA,cAAA;AAnBF;;AAsBA;EACE,cAAA;AAnBF;;AAsBA;EACE,eAAA;AAnBF;AAoBE;EACE,eAAA;AAlBJ;AAoBE;EACE,eAAA;AAlBJ;AAoBE;EACE,eAAA;AAlBJ;AAoBE;EACE,eAAA;AAlBJ;;AAqBA;EAQE,yBAAA;EACA,YAAA;EACA,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,cAAA;AAzBF;;AA4BA;EACE,cAAA;EACA,mBAAA;EAEA,+CAAA;AAzBF;;AA2BA;EACE,kBAAA;AAxBF;;AA2BA;EACE,eAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,SAAA;EAEA,gCAAA;AAxBF;;AA2BA;EACE,kBAAA;EACA,4BAAA;EAEA,+BAAA;EACA,oBAAA;AAxBF;;AA2BA;EACE,gBAAA;EACA,cAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;EACA,cAAA;AAxBF;;AA2BA;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,sBAAA;EACA,gBAAA;AAxBF;;AA2BA;EACE,kBAAA;EACA,YAAA;EACA,UAAA;AAxBF;;AA2BA;EACE,cAAA;AAxBF;;AA2BA;EACE,+BAAA;EACA,eAAA;EACA,qBAAA;EACA,gBAAA;EACA,gBAAA;EACA,sBAAA;EACA,iBAAA;AAxBF;;AA2BA;EACE,WAAA;EACA,YAAA;EACA,0CAAA;EACA,mBAAA;EACA,sBAAA;AAxBF;;AA2BA;EACE,cAAA;EACA,eAAA;EACA,cAAA;AAxBF;;AA2BA;EACE;;;IAGE,0BAAA;EAxBF;AACF;AA2BA;EACE;;;IAGE,yBAAA;EAzBF;AACF;AA4BA;EACE;IACE,eAAA;EA1BF;AACF;AA6BA;EACE;IACE,eAAA;EA3BF;AACF;AA6BA;EACE,iBAAA;EACA,aAAA;EACA,iCAAA;AA3BF;;AA6BA;EACE,kBAAA;EACA,cAAA;AA1BF;;AA6BA;EACE,qBAAA;EACA,SAAA;EACA,yBAAA;AA1BF;;AA6BA;EACE,iBAAA;EAKA,6BAAA;EACA,6CAAA;AA9BF;;AAgCA;EACE,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,eAAA;EACA,6BAAA;AA7BF;;AAgCA;EACE,eAAA;EACA,eAAA;AA7BF;;AAgCA;EACE,eAAA;AA7BF;;AA+BA;EAEE,cAAA;EACA,eAAA;EACA,YAAA;EACA,yBAAA;EAEA,eAAA;EACA,gBAAA;EAEA,qBAAA;EACA,yBAAA;EACA,mBAAA;EACA,qDAAA;AA/BF;AAiCA;EACE,2BAAA;AA/BF;;AAkCA;;EAEE,cAAA;EACA,qBAAA;AA/BF;;AAiCA;EACE,SAAA;EACA,iBAAA;AA9BF;;AAmCA;EACE,SAAA;EACA,eAAA;EACA,gBAAA;AAhCF;;AAkCA;EAEE,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,oBAAA;AAhCF;AAkCA;EACE,eAAA;AAhCF;;AAkCA;EAvTE,mBAAA;EACA,WAAA;EACA,iBALU;EAMV,iBAAA;EACA,kBAAA;EAsTA,aAAA;EACA,iBAAA;EACA,oBAAA;AA5BF;AA9QE;EAqSF;IAhTI,kBAAA;IACA,mBAAA;EA6RF;AACF;AAwBE;EACE,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;AAtBJ;AAyBE;EACE,cA7US;EA8UT,iBAAA;AAvBJ;AA0BE;EACE,YAAA;AAxBJ;AA2BE;EACE,SAAA;EACA,UAAA;EACA,eAAA;EACA,iBAAA;AAzBJ;;AAgCA;EACE,kBAAA;EACA,aAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,wBAAA;EACA,oBAAA;AA7BF;;AAgCA;EACE,oBAAA;EACA,gBAAA;EACA,kBAAA;AA7BF;AA+BE;EACE,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,yBAAA;EACA,SAAA;AA7BJ;AAgCE;EACE,gBAAA;EAIA,SAAA;EACA,cA9XS;AA6Vb;AA3UE;EAsWA;IAGI,eAAA;EA1BJ;AACF;;AAgCA;EA5XE,mBAAA;EACA,WAAA;EACA,iBALU;EAMV,iBAAA;EACA,kBAAA;AAgWF;AAlVE;EA0WF;IArXI,kBAAA;IACA,mBAAA;EAiWF;AACF;;AAsBA;EAEE,aAAA;EACA,WAAA;EACA,aAAA;EACA,aAAA;EACA,6JACE;EAIF,kCAAA;EACA,oBAAA;EACA,sBAAA;AAxBF;AA0BE;EACE,0OACE;EAUF,kCAAA;AAlCJ;AA7WE;EAmYA;IAeI,gIACE;IAIF,8BAAA;EArCJ;EAuCI;IACE,aAAA;IACA,WAAA;EArCN;AACF;AA0CE;EACE,SAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AAxCJ;AA7XE;EAiaA;IAMI,iBAAA;IACA,eAAA;EAtCJ;AACF;AAyCE;EACE,sBAAA;EACA,oBAAA;EACA,iBAAA;AAvCJ;AAxYE;EA4aA;IAMI,eAAA;EAtCJ;AACF;AAyCE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,mEAAA;EACA,mBAAA;AAvCJ;AA0CE;EACE,gBAAA;EAIA,iBAAA;EACA,kBAAA;AA3CJ;AAzZE;EA8bA;IASI,gBAAA;IACA,iBAAA;EA1CJ;AACF;AA6CE;EACE,aAAA;EACA,iBAAA;AA3CJ;AA8CE;EACE,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EACA,yBA5eS;EA6eT,YAAA;EACA,kBAAA;AA5CJ;AAhbE;EAidA;IAeI,iBAAA;IACA,eAAA;IACA,iBAAA;IACA,kBAAA;IACA,YAAA;IACA,kBAAA;IACA,mBAAA;EA5CJ;AACF;AA8CI;EACE,oBAAA;AA5CN;AA8CM;EACE,2BAAA;AA5CR;AAgDI;EACE,YAAA;EACA,kBAAA;EACA,yBAtgBO;EAugBP,MAAA;EACA,OAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,wDAAA;AA9CN;AAiDE;EACE,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EACA,yBA3hBS;EA4hBT,YAAA;EACA,kBAAA;AA/CJ;AAiDI;EACE,oBAAA;EACA,oCAAA;AA/CN;AAqDI;EACE,YAAA;EACA,kBAAA;EACA,yBA1iBO;EA2iBP,MAAA;EACA,OAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,wDAAA;AAnDN;AA9eE;EAoXF;IAkLI,gIACE;IAIF,8BAAA;EAxDF;EA0DE;IACE,aAAA;IACA,WAAA;IACA,mBAAA;EAxDJ;AACF;;AA4DA;EAEE,aAAA;EACA,WAAA;EACA,WAAA;EACA,aAAA;EACA,6JACE;EAIF,kCAAA;EACA,oBAAA;EACA,sBAAA;AA9DF;AAgEE;EACE,8HACE;EAIF,kCAAA;AAlEJ;AAxgBE;EAokBA;IASI,gIACE;IAIF,8BAAA;EArEJ;EAuEI;IACE,aAAA;IACA,WAAA;EArEN;AACF;AA0EE;EACE,SAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AAxEJ;AA2EE;EACE,sBAAA;EACA,oBAAA;EACA,iBAAA;AAzEJ;AA7hBE;EAmmBA;IAMI,eAAA;EAxEJ;AACF;AA2EE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,mEAAA;EACA,mBAAA;AAzEJ;AA4EE;EACE,gBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,qDAAA;AA1EJ;AA6EE;EACE,aAAA;EACA,iBAAA;AA3EJ;AA8EE;EACE,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EACA,yBA9pBS;EA+pBT,YAAA;EACA,kBAAA;EACA,kEAAA;EACA,mBAAA;AA5EJ;AA8EI;EACE,oBAAA;AA5EN;AA8EM;EACE,2BAAA;AA5ER;AAgFI;EACE,YAAA;EACA,kBAAA;EACA,yBA/qBO;EAgrBP,MAAA;EACA,OAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,wDAAA;AA9EN;AAiFE;EACE,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EACA,yBApsBS;EAqsBT,YAAA;EACA,kBAAA;AA/EJ;AAiFI;EACE,oBAAA;EACA,oCAAA;AA/EN;AAqFI;EACE,YAAA;EACA,kBAAA;EACA,yBAntBO;EAotBP,MAAA;EACA,OAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,wDAAA;AAnFN;AAvnBE;EAqjBF;IA0JI,gIACE;IAIF,8BAAA;EAxFF;EA0FE;IACE,aAAA;IACA,WAAA;IACA,mBAAA;EAxFJ;AACF;;AA4FA;EACE,kBAAA;EACA,yBAjvBiB;EAkvBjB,kBAAA;EACA,qBAAA;AAzFF;AA0FE;EACE,eAAA;AAxFJ;AA0FI;EACE,kBAAA;EACA,cA1vBO;AAkqBb;AA4FE;EAxvBA,mBAAA;EACA,WAAA;EACA,iBALU;EAMV,iBAAA;EACA,kBAAA;EAsvBE,gBAAA;AAtFJ;AAlpBE;EAsuBA;IAjvBE,kBAAA;IACA,mBAAA;EAiqBF;AACF;AAmFE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EACA,yBA1wBS;EA2wBT,YAAA;EACA,kBAAA;EACA,WAAA;AAjFJ;AAmFI;EACE,oBAAA;AAjFN;AAkFM;EACE,2BAAA;AAhFR;AAoFI;EACE,YAAA;EACA,kBAAA;EACA,yBAzxBO;EA0xBP,MAAA;EACA,OAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,wDAAA;AAlFN;;AAuFA;EACE,YAAA;EACA,4DAAA;AApFF;AAqFE;EACE,iBAAA;AAnFJ;AAsFE;EACE,YAAA;AApFJ;AAsFE;EACE,aAAA;EACA,SAAA;EA/yBF,mBAAA;EACA,WAAA;EACA,iBALU;EAMV,iBAAA;EACA,kBAAA;EA6yBE,iBAAA;EACA,oBAAA;AAhFJ;AAhtBE;EA2xBA;IAtyBE,kBAAA;IACA,mBAAA;EA+tBF;AACF;;AA6EA;EACE;IACE,UAAA;IACA,SAAA;EA1EF;EA4EA;IACE,YAAA;IACA,SAAA;EA1EF;AACF;AA4EA;EACE;IACE,UAAA;EA1EF;EA4EA;IACE,UAAA;EA1EF;AACF;AA6EA;EACE;IACE,UAAA;IACA,WAAA;EA3EF;EA6EA;IACE,YAAA;IACA,WAAA;EA3EF;AACF;AA6EA;EACE;IACE,UAAA;EA3EF;EA6EA;IACE,UAAA;EA3EF;AACF;AA6EA;EACE;IACE,UAAA;IACA,aAAA;EA3EF;EA6EA;IACE,UAAA;IACA,SAAA;EA3EF;AACF;AA6EA;EACE;IACE,UAAA;IACA,aAAA;EA3EF;EA6EA;IACE,UAAA;IACA,SAAA;EA3EF;AACF;AA6EA,SAAA;AAEA;EACE;IACE,UAAA;IACA,aAAA;EA5EF;EA8EA;IACE,UAAA;IACA,WAAA;EA5EF;AACF;AA8EA;EACE;IACE,UAAA;IACA,mBAAA;EA5EF;EA8EA;IACE,UAAA;IACA,mCAAA;EA5EF;EA8EA;IACE,UAAA;IACA,WAAA;EA5EF;AACF;AA+EA;EACE,qBAAA;EACA,wBAAA;EACA,oBAAA;EACA,WAAA;EACA,yBAAA;EACA,eAAA;EACA,uBAAA;EACA,oBAAA;EACA,kBAAA;EACA,gBAAA;EACA,UAAA;AA7EF;AA8EE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,sBApBI;EAqBJ,oBAAA;EACA,WAAA;AA5EJ;AA8EE;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,SAAA;EACA,YAAA;EACA,yBAAA;EACA,oBAAA;EACA,oBAAA;EACA,WAAA;AA5EJ;AA8EE;EACE,WAAA;AA5EJ;AA6EI;EACE,WAAA;AA3EN","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800\");\n\n$color-blue: #60b0f1;\n$color-light-grey: #ebebeb;\n$color-dark: #343434;\n$max-width: 1300px;\n\n@mixin centered {\n  margin-top: \"100px\";\n  width: 100%;\n  max-width: $max-width;\n  margin-left: auto;\n  margin-right: auto;\n\n  @include smallerThanDesktop {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n@mixin mobile {\n  @media (max-width: \"600px\") {\n    @content;\n  }\n}\n\n@mixin smallerThanDesktop {\n  @media (max-width: \"1000px\") {\n    @content;\n  }\n}\n\n* {\n  box-sizing: border-box;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.dropdown-menu {\n  height: 300px;\n  overflow-y: scroll;\n\n}\n\n.head_title h1 {\n  @include centered;\n  margin-bottom: 100px;\n  text-align: center;\n  font-weight: bold;\n}\n.head_title_store h1 {\n  font-size: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: right;\n  font-weight: bold;\n}\n\n.sidenav {\n  width: 130px;\n  margin-top: 200px;\n  position: fixed;\n  z-index: 1;\n  top: 20px;\n  left: 10px;\n  background: #eee;\n  overflow-x: hidden;\n  padding: 8px 0;\n}\n\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #2196f3;\n  display: block;\n}\n\n.sidenav a:hover {\n  color: #064579;\n}\n\n.contact_font {\n  font-size: 20px;\n  p {\n    font-size: 20px;\n  }\n  b {\n    font-size: 25px;\n  }\n  h1 {\n    font-size: 35px;\n  }\n  h2 {\n    font-size: 3opx;\n  }\n}\n.buttonslide {\n  // -webkit-appearance: none;\n  // appearance: none;\n  // -webkit-filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));\n  // filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));\n  // -webkit-transition: all 0.5s ease;\n  // filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));\n  // -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n  border: none;\n  background: #ffd800;\n  border-radius: 30px;\n  text-transform: uppercase;\n  box-sizing: border-box;\n  padding: 15px 40px;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: cursor;\n}\n\n.buttonslide:hover {\n  color: #000000;\n  background: #f3f5f3;\n  -webkit-filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));\n  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));\n}\n.slider-content {\n  text-align: center;\n}\n\n.slider-content .inner {\n  padding: 0 70px;\n  box-sizing: border-box;\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n\n.slider-content .inner .buttonslide {\n  position: relative;\n  -webkit-transition-delay: 0s;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(50%, 450%);\n  transition-delay: 0s;\n}\n\n.slider-content .inner h1 {\n  font-weight: 900;\n  margin: 0 auto;\n  max-width: 840px;\n  color: #ffffff;\n  font-size: 64px;\n  line-height: 1;\n}\n\n.slider-content .inner p {\n  color: #ffffff;\n  font-size: 14px;\n  line-height: 1.5;\n  margin: 20px auto 30px;\n  max-width: 640px;\n}\n\n.slider-content section {\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n}\n\n.slider-content section span {\n  color: #ffffff;\n}\n\n.slider-content section span {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 12px;\n  display: inline-block;\n  text-align: left;\n  line-height: 1.4;\n  vertical-align: middle;\n  margin-left: 10px;\n}\n\n.slider-content section img {\n  width: 40px;\n  height: 40px;\n  border: solid 2px rgba(255, 255, 255, 0.5);\n  border-radius: 100%;\n  vertical-align: middle;\n}\n\n.slider-content section span strong {\n  color: #ffffff;\n  font-size: 14px;\n  display: block;\n}\n\n@media (max-height: 500px) {\n  .slider-wrapper,\n  .slider-content .inner .buttonslide,\n  .slide {\n    height: calc(100vh - 75px);\n  }\n}\n\n@media (max-width: 640px) {\n  .slider-wrapper,\n  .slider-content .inner .buttonslide,\n  .slide {\n    height: calc(80vh - 75px);\n  }\n}\n\n@media (max-height: 600px) {\n  .slider-content .inner h1 {\n    font-size: 32px;\n  }\n}\n\n@media (max-width: 640px) {\n  .slider-content .inner h1 {\n    font-size: 32px;\n  }\n}\n.app {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n.link {\n  margin-right: 40px;\n  color: #474747;\n}\n\n.center {\n  align-content: center;\n  flex: 1;\n  justify-content: \"center\";\n}\n\n.headerPD {\n  min-height: 100vh;\n  //display: flex;\n  //flex-direction: column;\n  //align-items: center;\n  //justify-content: center;\n  font-size: calc(10px + 2vmin);\n  background: radial-gradient(#ffffff, #adf1fa);\n}\n.col-2 {\n  flex-basis: 50%;\n  min-width: 300px;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.col-2 img {\n  max-width: 100%;\n  padding: 50px 0;\n}\n\n.col-2 h1 {\n  font-size: 50px;\n}\n.card {\n  @include mobile;\n  width: \"20rem\";\n  height: \"20rem\";\n  margin: 1rem;\n  background-color: #ffffff;\n  // flex-basis: 45%;\n  padding: 1.5rem;\n  text-align: left;\n\n  text-decoration: none;\n  border: 1px solid #eaeaea;\n  border-radius: 10px;\n  transition: color 0.15s ease, border-color 0.15s ease;\n}\n.card:hover {\n  transform: translateY(-7px);\n}\n\n.card:focus,\n.card:active {\n  color: #0070f3;\n  border-color: #0070f3;\n}\n.card h1 {\n  margin: 0;\n  font-size: 1.5rem;\n}\n.mobile {\n  @include mobile;\n}\n.card p {\n  margin: 0;\n  font-size: 1rem;\n  line-height: 1.5;\n}\n.footers {\n  @include mobile;\n  max-width: 1500px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 100px;\n  font-size: 14px;\n  align-items: center;\n  padding: 60px 0 20px;\n}\n.footers p {\n  font-size: 16px;\n}\n.header {\n  @include centered;\n\n  display: flex;\n  padding-top: 20px;\n  padding-bottom: 20px;\n\n  &__summary {\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: auto;\n  }\n\n  &__price {\n    color: $color-blue;\n    margin-left: 10px;\n  }\n\n  &__logo {\n    height: 38px;\n  }\n\n  &__title {\n    margin: 0;\n    padding: 0;\n    font-size: 24px;\n    margin-left: 20px;\n  }\n}\n\n// .main {\n// }\n\n.background-image {\n  position: absolute;\n  opacity: 0.02;\n  left: -10vw;\n  top: -10vh;\n  height: 75vh;\n  transform: rotate(20deg);\n  pointer-events: none;\n}\n\n.promotional-message {\n  margin-bottom: 100px;\n  margin-top: 25px;\n  text-align: center;\n\n  h3 {\n    font-size: 20px;\n    line-height: normal;\n    text-align: center;\n    letter-spacing: 0.4em;\n    text-transform: uppercase;\n    margin: 0;\n  }\n\n  h2 {\n    font-size: 100px;\n    @include mobile {\n      font-size: 50px;\n    }\n    margin: 0;\n    color: $color-blue;\n  }\n}\n\n.product-list {\n  @include centered;\n}\n\n.product {\n  @include mobile();\n  display: grid;\n  width: 100%;\n  height: 400px;\n  display: grid;\n  grid-template-areas:\n    \"title        title         image\"\n    \"description  description  image\"\n    \"button       button       image\"\n    \".            .            image\";\n  grid-template-columns: 1fr 1fr 3fr;\n  margin-bottom: 100px;\n  grid-column-gap: 100px;\n\n  &:nth-of-type(odd) {\n    grid-template-areas:\n      \"image title        title\"\n      \"image .       .\"\n      \"image description  description\"\n      \"image .       .\"\n      \"image .       .\"\n      \"image .       .\"\n      \"image .       .\"\n      \"image .       .\"\n      \"image button       button\"\n      \"image .       .\";\n    grid-template-columns: 3fr 1fr 1fr;\n\n    @include mobile {\n      grid-template-areas:\n        \"image        image      \"\n        \"title         title     \"\n        \"description  description\"\n        \"button       button     \";\n      grid-template-columns: 1fr 1fr;\n\n      img {\n        height: 300px;\n        width: 100%;\n        // margin-bottom: 30px;\n      }\n    }\n  }\n\n  &__title {\n    margin: 0;\n    grid-area: title;\n    font-size: 32px;\n    font-weight: bold;\n    @include mobile {\n      font-weight: bold;\n      font-size: 16px;\n    }\n  }\n\n  &__description {\n    grid-area: description;\n    line-height: 1.75rem;\n    min-height: 120px;\n\n    @include mobile {\n      min-height: 0px;\n    }\n  }\n\n  &__price {\n    grid-area: price;\n    font-size: 28px;\n    font-weight: bold;\n    animation: fadeWish 1s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;\n    animation-delay: 0s;\n  }\n\n  &__image {\n    grid-area: image;\n    // width: 100%;\n    // height: 100%;\n\n    object-fit: cover;\n    border-radius: 4px;\n    // box-shadow: 0px 18.025px 43.775px rgba(0, 0, 0, 0.25);\n    @include mobile {\n      max-width: 250px;\n      max-height: 250px;\n    }\n  }\n\n  &__price-button-container {\n    display: flex;\n    grid-area: button;\n  }\n\n  &__button {\n    margin-left: 60px;\n    font-size: 14pt;\n    font-weight: bold;\n    border-radius: 4px;\n    padding: 6px;\n    padding-left: 20px;\n    padding-right: 20px;\n    border: none;\n    background-color: $color-blue;\n    color: white;\n    position: relative;\n    // animation: fadeBuy 1s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;\n    // animation-delay: 0s;\n    @include mobile {\n      margin-left: 60px;\n      font-size: 10pt;\n      font-weight: bold;\n      border-radius: 4px;\n      padding: 6px;\n      padding-left: 20px;\n      padding-right: 20px;\n    }\n\n    &:hover {\n      transition: 0.2s all;\n\n      &:before {\n        transform: scale(1.15, 1.4);\n      }\n    }\n\n    &:before {\n      content: \" \";\n      position: absolute;\n      background-color: $color-blue;\n      top: 0;\n      left: 0;\n      border-radius: 4px;\n      width: 100%;\n      height: 100%;\n      opacity: 0.4;\n      z-index: -1;\n      transform: scale(1);\n      transition: all 0.3s cubic-bezier(0.16, 0.8, 0.66, 1.54);\n    }\n  }\n  &__button1 {\n    margin-left: 65px;\n    font-size: 14pt;\n    font-weight: bold;\n    border-radius: 4px;\n    padding: 6px;\n    padding-left: 20px;\n    padding-right: 20px;\n    border: none;\n    background-color: $color-blue;\n    color: white;\n    position: relative;\n\n    &:hover {\n      transition: 0.2s all;\n      background: rgba(211, 41, 41, 0.856);\n      // &:before {\n      //   transform: scale(1.15, 1.4);\n      // }\n    }\n\n    &:before {\n      content: \" \";\n      position: absolute;\n      background-color: $color-blue;\n      top: 0;\n      left: 0;\n      border-radius: 4px;\n      width: 100%;\n      height: 100%;\n      opacity: 0.4;\n      z-index: -1;\n      transform: scale(1);\n      transition: all 0.3s cubic-bezier(0.16, 0.8, 0.66, 1.54);\n    }\n  }\n\n  @include mobile {\n    grid-template-areas:\n      \"image        image      \"\n      \"title         title     \"\n      \"description  description\"\n      \"button       button     \";\n    grid-template-columns: 1fr 1fr;\n\n    img {\n      height: 300px;\n      width: 100%;\n      margin-bottom: 30px;\n    }\n  }\n}\n\n.product2 {\n  @include mobile();\n  display: grid;\n  width: 100%;\n  height: 5px;\n  display: grid;\n  grid-template-areas:\n    \"title        title         image\"\n    \"description  description  image\"\n    \"button       button       image\"\n    \".            .            image\";\n  grid-template-columns: 1fr 1fr 3fr;\n  margin-bottom: 100px;\n  grid-column-gap: 100px;\n\n  &:nth-of-type(odd) {\n    grid-template-areas:\n      \"image title        title\"\n      \"image description  description\"\n      \"image button       button\"\n      \"image .       .\";\n    grid-template-columns: 3fr 1fr 1fr;\n\n    @include mobile {\n      grid-template-areas:\n        \"image        image      \"\n        \"title         title     \"\n        \"description  description\"\n        \"button       button     \";\n      grid-template-columns: 1fr 1fr;\n\n      img {\n        height: 300px;\n        width: 100%;\n        // margin-bottom: 30px;\n      }\n    }\n  }\n\n  &__title {\n    margin: 0;\n    grid-area: title;\n    font-size: 32px;\n    font-weight: bold;\n  }\n\n  &__description {\n    grid-area: description;\n    line-height: 1.75rem;\n    min-height: 120px;\n\n    @include mobile {\n      min-height: 0px;\n    }\n  }\n\n  &__price {\n    grid-area: price;\n    font-size: 28px;\n    font-weight: bold;\n    animation: fadeWish 1s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;\n    animation-delay: 0s;\n  }\n\n  &__image {\n    grid-area: image;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 4px;\n    box-shadow: 0px 18.025px 43.775px rgba(0, 0, 0, 0.25);\n  }\n\n  &__price-button-container {\n    display: flex;\n    grid-area: button;\n  }\n\n  &__button {\n    margin-left: 60px;\n    font-size: 14pt;\n    font-weight: bold;\n    border-radius: 4px;\n    padding: 6px;\n    padding-left: 20px;\n    padding-right: 20px;\n    border: none;\n    background-color: $color-blue;\n    color: white;\n    position: relative;\n    animation: fadeBuy 1s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;\n    animation-delay: 0s;\n\n    &:hover {\n      transition: 0.2s all;\n\n      &:before {\n        transform: scale(1.15, 1.4);\n      }\n    }\n\n    &:before {\n      content: \" \";\n      position: absolute;\n      background-color: $color-blue;\n      top: 0;\n      left: 0;\n      border-radius: 4px;\n      width: 100%;\n      height: 100%;\n      opacity: 0.4;\n      z-index: -1;\n      transform: scale(1);\n      transition: all 0.3s cubic-bezier(0.16, 0.8, 0.66, 1.54);\n    }\n  }\n  &__button1 {\n    margin-left: 65px;\n    font-size: 14pt;\n    font-weight: bold;\n    border-radius: 4px;\n    padding: 6px;\n    padding-left: 20px;\n    padding-right: 20px;\n    border: none;\n    background-color: $color-blue;\n    color: white;\n    position: relative;\n\n    &:hover {\n      transition: 0.2s all;\n      background: rgba(211, 41, 41, 0.856);\n      // &:before {\n      //   transform: scale(1.15, 1.4);\n      // }\n    }\n\n    &:before {\n      content: \" \";\n      position: absolute;\n      background-color: $color-blue;\n      top: 0;\n      left: 0;\n      border-radius: 4px;\n      width: 100%;\n      height: 100%;\n      opacity: 0.4;\n      z-index: -1;\n      transform: scale(1);\n      transition: all 0.3s cubic-bezier(0.16, 0.8, 0.66, 1.54);\n    }\n  }\n\n  @include mobile {\n    grid-template-areas:\n      \"image        image      \"\n      \"title         title     \"\n      \"description  description\"\n      \"button       button     \";\n    grid-template-columns: 1fr 1fr;\n\n    img {\n      height: 300px;\n      width: 100%;\n      margin-bottom: 30px;\n    }\n  }\n}\n\n.contact {\n  text-align: center;\n  background-color: $color-light-grey;\n  padding-top: 100px;\n  padding-bottom: 100px;\n  &__title {\n    font-size: 36px;\n\n    .colored {\n      font-size: inherit;\n      color: $color-blue;\n    }\n  }\n\n  &__paragraph {\n    @include centered;\n    font-weight: 600;\n  }\n\n  button {\n    margin-top: 15px;\n    font-size: 14px;\n    font-weight: bold;\n    border-radius: 4px;\n    padding: 12px;\n    padding-left: 20px;\n    padding-right: 20px;\n    border: none;\n    background-color: $color-dark;\n    color: white;\n    position: relative;\n    z-index: 99;\n\n    &:hover {\n      transition: 0.2s all;\n      &:before {\n        transform: scale(1.15, 1.4);\n      }\n    }\n\n    &:before {\n      content: \" \";\n      position: absolute;\n      background-color: $color-dark;\n      top: 0;\n      left: 0;\n      border-radius: 4px;\n      width: 100%;\n      height: 100%;\n      opacity: 0.4;\n      z-index: -1;\n      transform: scale(1);\n      transition: all 0.3s cubic-bezier(0.16, 0.8, 0.66, 1.54);\n    }\n  }\n}\n\n.footer {\n  color: white;\n  background: linear-gradient(90deg, #707070 0%, #474747 100%);\n  &__left {\n    margin-left: auto;\n  }\n\n  a {\n    color: white;\n  }\n  p {\n    display: flex;\n    margin: 0;\n    @include centered;\n    padding-top: 20px;\n    padding-bottom: 20px;\n  }\n}\n@keyframes openBox {\n  0% {\n    width: 0px;\n    left: 15%;\n  }\n  100% {\n    width: 900px;\n    left: 15%;\n  }\n}\n@keyframes fadeImg {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes showDisc {\n  0% {\n    width: 0px;\n    left: 450px;\n  }\n  100% {\n    width: 500px;\n    left: 450px;\n  }\n}\n@keyframes fadeContent {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeWish {\n  0% {\n    opacity: 0;\n    bottom: -25px;\n  }\n  100% {\n    opacity: 1;\n    bottom: 0;\n  }\n}\n@keyframes fadeBuy {\n  0% {\n    opacity: 0;\n    bottom: -25px;\n  }\n  100% {\n    opacity: 1;\n    bottom: 0;\n  }\n}\n/*ignore*/\n\n@keyframes top {\n  0% {\n    opacity: 0;\n    bottom: -80px;\n  }\n  100% {\n    opacity: 1;\n    bottom: 0px;\n  }\n}\n@keyframes icon {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.3) rotate(-2deg);\n  }\n  100% {\n    opacity: 1;\n    bottom: 0px;\n  }\n}\n$color: #0cf;\n.button_at {\n  display: inline-block;\n  padding: 0.75rem 1.25rem;\n  border-radius: 10rem;\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 1rem;\n  letter-spacing: 0.15rem;\n  transition: all 0.3s;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  &:after {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: $color;\n    border-radius: 10rem;\n    z-index: -2;\n  }\n  &:before {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 0%;\n    height: 100%;\n    background-color: darken($color, 15%);\n    transition: all 0.3s;\n    border-radius: 10rem;\n    z-index: -1;\n  }\n  &:hover {\n    color: #fff;\n    &:before {\n      width: 100%;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE;IACE,4CAA4C;EAC9C;AACF;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb","sourcesContent":["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layouts/Footer */ "./src/components/layouts/Footer.js");
/* harmony import */ var _components_route_Route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/route/Route */ "./src/components/route/Route.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/jakkaphan.c/code/react/astshop-app/src/App.js";





function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_route_Route__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/PopProducts.js":
/*!***************************************!*\
  !*** ./src/components/PopProducts.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopProducts; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/jakkaphan.c/code/react/astshop-app/src/components/PopProducts.js";

function PopProducts({
  popPD,
  head_title
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "product-list",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "head_title",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: head_title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("min", {
      children: popPD.map(product => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "product",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "product__title",
            children: product.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "product__description",
            children: product.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: product.image,
            alt: product.title,
            width: "100%",
            height: "500px",
            className: "product__image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "product__price-button-container",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "product__price",
              children: "\u0E3F xxx.xx"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "snipcart-add-item product__button   ",
              "data-item-id": "1",
              "data-item-image": "/images/01.jpg",
              "data-item-name": "cats",
              "data-item-url": "/",
              "data-item-price": "300",
              children: "Add to cart"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
_c = PopProducts;

var _c;

__webpack_require__.$Refresh$.register(_c, "PopProducts");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ProductStore.js":
/*!****************************************!*\
  !*** ./src/components/ProductStore.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductStore; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_Allstore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Allstore */ "./src/pages/Allstore/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/jakkaphan.c/code/react/astshop-app/src/components/ProductStore.js";




const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 1,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
function ProductStore({
  prop_product,
  head
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "product-list",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "product2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "product__price ",
          children: head
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
          ssr: true,
          partialVisbile: true,
          itemClass: "image-item",
          responsive: responsive,
          autoPlaySpeed: 3000,
          autoPlay: true,
          infinite: true,
          children: prop_product.slice(0, 5).map(product => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "card",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("picture", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  draggable: false,
                  className: "product__image",
                  src: product.image,
                  alt: product.title,
                  quality: "75%",
                  width: "290px",
                  height: "290px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "product__title",
                style: {
                  marginTop: "15px"
                },
                children: product.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "product__description",
                children: product.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "product__price-button-container",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "product__price",
                  children: ["\u0E3F", product.price]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "product__button snipcart-add-item",
                  "data-item-id": product.id,
                  "data-item-image": product.image,
                  "data-item-name": product.title,
                  "data-item-url": "/",
                  "data-item-price": product.price,
                  children: "Add to Cart"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 19
              }, this)]
            }, product.id, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
_c = ProductStore;

var _c;

__webpack_require__.$Refresh$.register(_c, "ProductStore");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ProductsAll.js":
/*!***************************************!*\
  !*** ./src/components/ProductsAll.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductAll; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/jakkaphan.c/code/react/astshop-app/src/components/ProductsAll.js";


function ProductAll({
  all
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "product-list",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        gutter: 100,
        children: all.map(product => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            xs: {
              span: 12
            },
            sm: {
              span: 4
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "card",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("picture", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  draggable: false,
                  className: "product__image",
                  src: product.image,
                  alt: product.title,
                  quality: "75%",
                  width: 330,
                  height: 300
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "product__title",
                style: {
                  marginTop: "15px"
                },
                children: product.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "product__description",
                children: product.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "product__price-button-container",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "product__price",
                  children: ["\u0E3F", product.price]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "product__button1 snipcart-add-item",
                  "data-item-id": product.id,
                  "data-item-image": product.image,
                  "data-item-name": product.title,
                  "data-item-url": "/",
                  "data-item-price": product.price,
                  children: "Add to Cart"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 19
              }, this)]
            }, product.id, true, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
_c = ProductAll;

var _c;

__webpack_require__.$Refresh$.register(_c, "ProductAll");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/layouts/Footer.js":
/*!******************************************!*\
  !*** ./src/components/layouts/Footer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/jakkaphan.c/code/react/astshop-app/src/components/layouts/Footer.js";


function Footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Footer, {
      style: {
        marginTop: "200px"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "footers",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/logo-AST.png",
              alt: "logo-navbaer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: ["\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E2D\u0E2D\u0E25\u0E25\u0E4C\u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19\u0E2A\u0E4C\u0E40\u0E17\u0E04 \u0E08\u0E33\u0E01\u0E31\u0E14", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, this), "ALL SOLUTIONS TECH CO.,LTD.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: ["\u0E2A\u0E33\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E43\u0E2B\u0E0D\u0E48", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, this), "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 : 47/316 \u0E16.\u0E1B\u0E4A\u0E2D\u0E1B\u0E1B\u0E39\u0E25\u0E48\u0E32 \u0E15.\u0E1A\u0E49\u0E32\u0E19\u0E43\u0E2B\u0E21\u0E48 \u0E2D.\u0E1B\u0E32\u0E01\u0E40\u0E01\u0E23\u0E47\u0E14 \u0E08.\u0E19\u0E19\u0E17\u0E1A\u0E38\u0E23\u0E35 11120", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, this), "47/316 Poppular Rd., Ban Mai, Pak Kret,", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, this), "Nonthaburi 11120 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 32
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "\u0E2A\u0E33\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E19\u0E04\u0E23\u0E23\u0E32\u0E0A\u0E2A\u0E35\u0E21\u0E32 "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this), "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 : 3279/25 \u0E16.\u0E2A\u0E37\u0E1A\u0E28\u0E34\u0E23\u0E34 \u0E15.\u0E43\u0E19\u0E40\u0E21\u0E37\u0E2D\u0E07 \u0E2D.\u0E40\u0E21\u0E37\u0E2D\u0E07 \u0E08.\u0E19\u0E04\u0E23\u0E23\u0E32\u0E0A\u0E2A\u0E35\u0E21\u0E32 30000", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, this), "3279/25 Suebsiri Rd, T.Nimueng, A.Mueng,", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, this), "NakhonRatchasima,Thailand 30000 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 47
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this), "\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C/\u0E41\u0E1F\u0E47\u0E01\u0E0B\u0E4C 02-012-3795 / 065-969-3552 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 58
            }, this), "Tel./Fax. +662-012-3795 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 39
            }, this), "Mobile : +665-969-3552", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this), "Email : ast.allsolutionstech@gmail.com", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          style: {
            marginLeft: "50px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "\u0E2A\u0E2D\u0E1A\u0E16\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [" ", "\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E27\u0E07\u0E08\u0E23\u0E1B\u0E34\u0E14,", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this), "\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E27\u0E07\u0E08\u0E23\u0E1B\u0E34\u0E14,", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this), "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2A\u0E41\u0E01\u0E19\u0E25\u0E32\u0E22\u0E19\u0E34\u0E49\u0E27\u0E21\u0E37\u0E2D,", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this), "\u0E2A\u0E31\u0E0D\u0E0D\u0E32\u0E13\u0E01\u0E31\u0E19\u0E02\u0E42\u0E21\u0E22\u0E1A\u0E49\u0E32\u0E19, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 34
            }, this), "\u0E15\u0E39\u0E49\u0E2A\u0E32\u0E02\u0E32\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 32
            }, this), "\u0E27\u0E32\u0E07\u0E23\u0E30\u0E1A\u0E1A Network,", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this), "\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E1B\u0E23\u0E30\u0E15\u0E39 AutoDoor,", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this), "\u0E41\u0E1C\u0E07\u0E44\u0E21\u0E49\u0E01\u0E31\u0E49\u0E19, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 27
            }, this), "\u0E27\u0E32\u0E07\u0E23\u0E30\u0E1A\u0E1A CarPark, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 32
            }, this), "\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E23\u0E30\u0E1A\u0E1A\u0E02\u0E32\u0E22\u0E2B\u0E19\u0E49\u0E32\u0E23\u0E49\u0E32\u0E19 POS ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 41
            }, this), "\u0E23\u0E30\u0E1A\u0E1A\u0E0B\u0E37\u0E49\u0E2D\u0E21\u0E32\u0E02\u0E32\u0E22\u0E44\u0E1B ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 31
            }, this), "\u0E23\u0E30\u0E1A\u0E1A\u0E08\u0E48\u0E32\u0E22\u0E40\u0E07\u0E34\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E41\u0E25\u0E30\u0E2D\u0E35\u0E01\u0E21\u0E32\u0E01\u0E21\u0E32\u0E22"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

__webpack_require__.$Refresh$.register(_c, "Footer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/layouts/Header.js":
/*!******************************************!*\
  !*** ./src/components/layouts/Header.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/jakkaphan.c/code/react/astshop-app/src/components/layouts/Header.js";



const pathnames = [{
  href: "/",
  label: "home"
}, {
  href: "/allproducts",
  label: "stores ",
  subMenus: [{
    name: "กล้องวงจรปิด"
  }, {
    name: "เครื่องบันทึกDVR"
  }, {
    name: "  เครื่องสแกน"
  }, {
    name: "  นาฬิกายาม (Guardtour)"
  }, {
    name: "  โดรนถ่ายภาพ (Drone)"
  }, {
    name: "  การ์ด Card"
  }, {
    name: "เครื่องทาบบัตร (Reader Card)"
  }, {
    name: "  เครื่องอ่านการ์ด(Access Control)"
  }, {
    name: "  ชุดกลอนแม่เหล็กไฟฟ้า"
  }, {
    name: "ระบบแจ้งเตือนเพลิงใหม้"
  }, {
    name: "  สัญญาณกันขโมย"
  }, {
    name: " GPS ติดตามรถยนต์"
  }, {
    name: "  Network accessories"
  }, {
    name: "  ประตู"
  }, {
    name: "  เว็บไซต์"
  }, {
    name: "  ตู้สาขาโทรศัพท์"
  }, {
    name: " รั้วไฟฟ้า"
  }, {
    name: "  บ้านอัจฉริยะ (HomeXpert)"
  }, {
    name: "  อุปกรณ์ความปลอดภัยส่วนบุคคล"
  }, {
    name: "  งานจราจร"
  }, {
    name: "  ระบบ POS"
  }, {
    name: " Video Conference"
  }, {
    name: "  ระบบห้องประชุม"
  }, {
    name: " ระบบที่จอดรถ"
  }, {
    name: "  ตู้เซฟ"
  }, {
    name: "  LED Display"
  }, {
    name: "  Accessories"
  }, {
    name: "  ระบบประตูกั้นทางเดิน"
  }, {
    name: " เครื่องทำลายเอกสาร"
  }, {
    name: "  เครื่องบันทึกเวลา"
  }, {
    name: "  รับทำและออกแบบเว็บไซต์"
  }, {
    name: "  ระบบออกบัตรประจำตัว"
  }, {
    name: "  เครื่องพับเอกสาร"
  }, {
    name: "  กริ่งสนทนา (VDO PHONE)"
  }]
}, {
  href: "/contact",
  label: "Contact"
}];
function Header() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
      collapseOnSelect: true,
      expand: "lg",
      sticky: "top",
      bg: "light",
      variant: "light",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
        ml: "50px",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
          to: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("picture", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/logo-title.png",
              alt: "AST-logo",
              width: 64,
              height: 42,
              quality: "70%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
        "aria-controls": "responsive-navbar-nav"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
        id: "responsive-navbar-nav",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
          className: "ml-auto text-uppercase font-weight-bold ",
          children: pathnames.map(function (pathname, i) {
            if (pathname.subMenus !== undefined) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                    variant: "outline-light",
                    to: `${pathname.href}`,
                    children: `${pathname.label}`
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Toggle, {
                    split: true,
                    id: "dropdown"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, {
                    alignRight: true,
                    style: {},
                    children: pathname.subMenus.map(function (subMenu, i) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                          children: subMenu.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 90,
                          columnNumber: 31
                        }, this)
                      }, i, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 29
                      }, this);
                    })
                  }, i, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 19
              }, this);
            } else {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                    className: "link",
                    to: pathname.href,
                    exact: true,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: pathname.label
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 25
                    }, this)
                  }, i, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 21
                }, this)
              }, void 0, false);
            }
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            style: {
              textDecoration: "none"
            },
            width: 50,
            height: 50,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Image"], {
              style: {
                marginLeft: "20px",
                marginBottom: "5px",
                marginRight: "50px"
              },
              src: "../../../cart.png",
              width: "25px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
_c = Header;

var _c;

__webpack_require__.$Refresh$.register(_c, "Header");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/layouts/SideNav.js":
/*!*******************************************!*\
  !*** ./src/components/layouts/SideNav.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Side; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/jakkaphan.c/code/react/astshop-app/src/components/layouts/SideNav.js";

function Side() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    class: "sidenav",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#about",
      children: "About"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#services",
      children: "Services"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#clients",
      children: "Clients"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#contact",
      children: "Contact"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
_c = Side;

var _c;

__webpack_require__.$Refresh$.register(_c, "Side");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/layouts/Slide.js":
/*!*****************************************!*\
  !*** ./src/components/layouts/Slide.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slide; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_animated_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-animated-slider */ "./node_modules/react-animated-slider/build/index.js");
/* harmony import */ var react_animated_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_animated_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/jakkaphan.c/code/react/astshop-app/src/components/layouts/Slide.js";


function Slide({
  content
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mobile",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_animated_slider__WEBPACK_IMPORTED_MODULE_1___default.a, {
      autoplay: 2000,
      children: content.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "slider-content",
        style: {
          background: `url('${item.image}') no-repeat center center `,
          backgroundSize: "100%"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "inner ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: item.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
_c = Slide;

var _c;

__webpack_require__.$Refresh$.register(_c, "Slide");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/route/Route.js":
/*!***************************************!*\
  !*** ./src/components/route/Route.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Router; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/contact */ "./src/pages/contact/index.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/Home */ "./src/pages/Home/index.js");
/* harmony import */ var _pages_AllProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/AllProduct */ "./src/pages/AllProduct/index.js");
/* harmony import */ var _pages_Allstore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/Allstore */ "./src/pages/Allstore/index.js");
/* harmony import */ var _layouts_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layouts/Header */ "./src/components/layouts/Header.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/jakkaphan.c/code/react/astshop-app/src/components/route/Route.js";







function Router() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layouts_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/",
        component: _pages_Home__WEBPACK_IMPORTED_MODULE_4__["default"],
        exact: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/contact",
        component: _pages_contact__WEBPACK_IMPORTED_MODULE_3__["default"],
        exact: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/allproducts",
        component: _pages_AllProduct__WEBPACK_IMPORTED_MODULE_5__["default"],
        exact: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "/allstore",
        component: _pages_Allstore__WEBPACK_IMPORTED_MODULE_6__["default"],
        exact: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
_c = Router;

var _c;

__webpack_require__.$Refresh$.register(_c, "Router");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_animated_slider_build_horizontal_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-animated-slider/build/horizontal.css */ "./node_modules/react-animated-slider/build/horizontal.css");
/* harmony import */ var react_animated_slider_build_horizontal_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_animated_slider_build_horizontal_css__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/jakkaphan.c/code/react/astshop-app/src/index.js";









react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 12,
  columnNumber: 3
}, undefined), document.getElementById("root")); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/AllProduct/index.js":
/*!***************************************!*\
  !*** ./src/pages/AllProduct/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AllProduct; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../products.json */ "./src/products.json");
var _products_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../products.json */ "./src/products.json", 1);
/* harmony import */ var _components_ProductsAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ProductsAll */ "./src/components/ProductsAll.js");
/* harmony import */ var _components_layouts_SideNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layouts/SideNav */ "./src/components/layouts/SideNav.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/jakkaphan.c/code/react/astshop-app/src/pages/AllProduct/index.js";




function AllProduct() {
  const ProductA = _products_json__WEBPACK_IMPORTED_MODULE_2__.productA;
  const productB = _products_json__WEBPACK_IMPORTED_MODULE_2__.productB;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_SideNav__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductsAll__WEBPACK_IMPORTED_MODULE_3__["default"], {
      all: ProductA
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductsAll__WEBPACK_IMPORTED_MODULE_3__["default"], {
      all: productB
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
_c = AllProduct;

var _c;

__webpack_require__.$Refresh$.register(_c, "AllProduct");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Allstore/index.js":
/*!*************************************!*\
  !*** ./src/pages/Allstore/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AllProduct; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ProductsAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ProductsAll */ "./src/components/ProductsAll.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/jakkaphan.c/code/react/astshop-app/src/pages/Allstore/index.js";


function AllProduct({
  component
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductsAll__WEBPACK_IMPORTED_MODULE_2__["default"], {
      all: component
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
_c = AllProduct;

var _c;

__webpack_require__.$Refresh$.register(_c, "AllProduct");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Home/index.js":
/*!*********************************!*\
  !*** ./src/pages/Home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ProductStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ProductStore */ "./src/components/ProductStore.js");
/* harmony import */ var _components_layouts_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layouts/Slide */ "./src/components/layouts/Slide.js");
/* harmony import */ var _components_PopProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PopProducts */ "./src/components/PopProducts.js");
/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../products.json */ "./src/products.json");
var _products_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../products.json */ "./src/products.json", 1);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/jakkaphan.c/code/react/astshop-app/src/pages/Home/index.js";





function Home() {
  const ProductA = _products_json__WEBPACK_IMPORTED_MODULE_5__.productA;
  const ProductB = _products_json__WEBPACK_IMPORTED_MODULE_5__.productB;
  const content = [{
    title: "",
    image: "/images/Banner 1018x387-02.jpg",
    description: "",
    button: "Buy Now",
    href: "#productA"
  }, {
    title: "",
    image: "/images/Banner 1018x387-01.jpg",
    description: "",
    button: "Buy Now",
    href: "#productA"
  }];
  const popPDA = [{
    head_title: "",
    image: "/images/DS-2CD2021G1-I.jpg",
    title: "กล้องวงจรปิดHikvision ",
    id: "1",
    description: "DS-2CD2021G1-I" // price: "xxx.xx",

  }];
  const popPDB = [{
    head_title: "",
    title: "Coming Soon",
    image: "/images/cmi p66s.jpeg",
    description: "" // price: "xxx.xx",

  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_Slide__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "productA",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PopProducts__WEBPACK_IMPORTED_MODULE_4__["default"], {
        popPD: popPDA,
        head_title: "\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E27\u0E07\u0E08\u0E23\u0E1B\u0E34\u0E14"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductStore__WEBPACK_IMPORTED_MODULE_2__["default"], {
        prop_product: ProductA,
        head: "\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E27\u0E07\u0E08\u0E23\u0E1B\u0E34\u0E14 \u0E41\u0E19\u0E30\u0E19\u0E33 "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginTop: "200px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PopProducts__WEBPACK_IMPORTED_MODULE_4__["default"], {
        popPD: popPDB,
        head_title: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2A\u0E41\u0E01\u0E19\u0E25\u0E32\u0E22\u0E19\u0E34\u0E49\u0E27\u0E21\u0E37\u0E2D "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductStore__WEBPACK_IMPORTED_MODULE_2__["default"], {
        prop_product: ProductB,
        head: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2A\u0E41\u0E01\u0E19\u0E25\u0E32\u0E22\u0E19\u0E34\u0E49\u0E27\u0E21\u0E37\u0E2D \u0E41\u0E19\u0E30\u0E19\u0E33"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = Home;

var _c;

__webpack_require__.$Refresh$.register(_c, "Home");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/contact/index.js":
/*!************************************!*\
  !*** ./src/pages/contact/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/jakkaphan.c/code/react/astshop-app/src/pages/contact/index.js";


function Contact() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "product-list contact_font",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Contact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "center",
            style: {
              marginTop: '200px'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/logo-AST.png",
              alt: "logo-navbaer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: ["\u0E2A\u0E33\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E43\u0E2B\u0E0D\u0E48", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, this), "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 : 47/316 \u0E16.\u0E1B\u0E4A\u0E2D\u0E1B\u0E1B\u0E39\u0E25\u0E48\u0E32 \u0E15.\u0E1A\u0E49\u0E32\u0E19\u0E43\u0E2B\u0E21\u0E48 \u0E2D.\u0E1B\u0E32\u0E01\u0E40\u0E01\u0E23\u0E47\u0E14 \u0E08.\u0E19\u0E19\u0E17\u0E1A\u0E38\u0E23\u0E35 11120", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, this), "47/316 Poppular Rd., Ban Mai, Pak Kret,", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, this), "Nonthaburi 11120 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 32
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "\u0E2A\u0E33\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E19\u0E04\u0E23\u0E23\u0E32\u0E0A\u0E2A\u0E35\u0E21\u0E32 "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this), "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 : 3279/25 \u0E16.\u0E2A\u0E37\u0E1A\u0E28\u0E34\u0E23\u0E34 \u0E15.\u0E43\u0E19\u0E40\u0E21\u0E37\u0E2D\u0E07 \u0E2D.\u0E40\u0E21\u0E37\u0E2D\u0E07 \u0E08.\u0E19\u0E04\u0E23\u0E23\u0E32\u0E0A\u0E2A\u0E35\u0E21\u0E32 30000", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, this), "3279/25 Suebsiri Rd, T.Nimueng, A.Mueng,", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, this), "NakhonRatchasima,Thailand 30000 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 47
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, this), "\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C/\u0E41\u0E1F\u0E47\u0E01\u0E0B\u0E4C 02-012-3795 / 065-969-3552 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 58
            }, this), "Tel./Fax. +662-012-3795 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 39
            }, this), "Mobile : +665-969-3552", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this), "Email : ast.allsolutionstech@gmail.com", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 22
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
_c = Contact;

var _c;

__webpack_require__.$Refresh$.register(_c, "Contact");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/products.json":
/*!***************************!*\
  !*** ./src/products.json ***!
  \***************************/
/*! exports provided: productA, productB, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"productA\":[{\"image\":\"/images/DS-2CD2021G1-I.jpg\",\"title\":\"กล้องวงจรปิดHikvision \",\"id\":\"1\",\"description\":\"DS-2CD2021G1-I\",\"price\":\"XXX.XX\"},{\"image\":\"/images/DS-2CD1123GOE-I.jpg\",\"title\":\"กล้องวงจรปิดHikvision\",\"id\":\"2\",\"description\":\"DS-2CD1123G0E-I\",\"price\":\"XXX.XX\"},{\"image\":\"/images/DS-2CD1023G0E-I.jpeg\",\"title\":\"กล้องวงจรปิดHikvision\",\"id\":\"3\",\"description\":\"DS-2CD1023G0E-I\",\"price\":\"XXX.XX\"},{\"image\":\"/images/16003-ds_2ce56d8t_it3zf-640x480.jpg\",\"title\":\"กล้องวงจรปิดHikvision\",\"id\":\"4\",\"description\":\"CDS-2CE56D8T-IT3ZF\",\"price\":\"XXX.XX\"},{\"image\":\"/images/DS-2CE16U1T-ITF.jpg\",\"title\":\"กล้องวงจรปิดHikvision\",\"id\":\"5\",\"description\":\"DS-2CE16U1T-ITF\",\"price\":\"XXX.XX\"},{\"image\":\"/images/20170605074453780.png\",\"title\":\"กล้องวงจรปิดHikvision\",\"id\":\"6\",\"description\":\"DS-2CD2685FWD-IZS\",\"price\":\"XXX.XX\"}],\"productB\":[{\"image\":\"/images/cmi p66s.jpeg\",\"title\":\"เครื่องสแกนลายนิ้วมือHIP \",\"id\":\"1\",\"description\":\"Ci P66S\",\"price\":\"XXX.XX\"},{\"image\":\"/images/comingPD.jpg\",\"title\":\"\",\"id\":\"2\",\"description\":\"Coming Soon\",\"price\":\"XXX.XX\"},{\"image\":\"/images/comingPD.jpg\",\"title\":\"\",\"id\":\"3\",\"description\":\"Coming Soon\",\"price\":\"XXX.XX\"},{\"image\":\"/images/comingPD.jpg\",\"title\":\"\",\"id\":\"4\",\"description\":\"Coming Soon\",\"price\":\"XXX.XX\"},{\"image\":\"/images/comingPD.jpg\",\"title\":\"\",\"id\":\"5\",\"description\":\"Coming Soon\",\"price\":\"XXX.XX\"},{\"image\":\"/images/comingPD.jpg\",\"title\":\"\",\"id\":\"6\",\"description\":\"Coming Soon\",\"price\":\"XXX.XX\"}]}");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jakkaphan.c/code/react/astshop-app/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/jakkaphan.c/code/react/astshop-app/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/jakkaphan.c/code/react/astshop-app/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/jakkaphan.c/code/react/astshop-app/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map