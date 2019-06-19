(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search-results/search-results.component */ "./src/app/components/search-results/search-results.component.ts");





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'results/:id', component: _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_4__["SearchResultsComponent"] }
    //{path: '', redirectTo: '/search-flights', pathMatch: 'full'}
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-main-menu></app-main-menu>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myFlightAngular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main-menu/main-menu.component */ "./src/app/components/main-menu/main-menu.component.ts");
/* harmony import */ var _components_search_flights_search_flights_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search-flights/search-flights.component */ "./src/app/components/search-flights/search-flights.component.ts");
/* harmony import */ var _components_recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/recommendation/recommendation.component */ "./src/app/components/recommendation/recommendation.component.ts");
/* harmony import */ var _components_main_links_main_links_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/main-links/main-links.component */ "./src/app/components/main-links/main-links.component.ts");
/* harmony import */ var _components_international_sites_international_sites_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/international-sites/international-sites.component */ "./src/app/components/international-sites/international-sites.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/search-results/search-results.component */ "./src/app/components/search-results/search-results.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_9__["MainMenuComponent"],
                _components_search_flights_search_flights_component__WEBPACK_IMPORTED_MODULE_10__["SearchFlightsComponent"],
                _components_recommendation_recommendation_component__WEBPACK_IMPORTED_MODULE_11__["RecommendationComponent"],
                _components_main_links_main_links_component__WEBPACK_IMPORTED_MODULE_12__["MainLinksComponent"],
                _components_international_sites_international_sites_component__WEBPACK_IMPORTED_MODULE_13__["InternationalSitesComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_18__["SearchResultsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"]
            ],
            providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer\">\n    <p>My Flight @ 2019. All rights reserved.</p>\n  </div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Nav -->\n<div class=\"container\">\n  <ul class=\"nav mt-1 justify-content-end\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-phone mr-2\"></i>Call +001 555 801</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-envelope mr-2\"></i>Login</a>\n    </li>\n  </ul>\n</div>\n<!-- End -->"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search-flights></app-search-flights>\r\n<app-recommendation></app-recommendation>\r\n<app-main-links></app-main-links>\r\n<app-international-sites></app-international-sites>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/international-sites/international-sites.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/international-sites/international-sites.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50ZXJuYXRpb25hbC1zaXRlcy9pbnRlcm5hdGlvbmFsLXNpdGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/international-sites/international-sites.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/international-sites/international-sites.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- International Informations  -->\n<div class=\"container container-custom\">\n  <h4 class=\"mt-3 text-mute h4-custom\">International Sites</h4>\n  <div class=\"row\">\n    <div class=\"col\">\n        <ul>\n          <li><a href=\"#\">Home</a></li>\n          <li><a href=\"#\">About Us</a></li>\n          <li><a href=\"#\">Airplane</a></li>\n          <li><a href=\"#\">Gaurantee Travel</a></li>\n          <li><a href=\"#\">Privacy Policy</a></li>\n        </ul>\n      </div>\n      <div class=\"col\">\n        <ul>\n        <li><a href=\"#\">lik 1</a></li>\n        <li><a href=\"#\">link2</a></li>\n        <li><a href=\"#\">www.air.com</a></li>\n        </ul>\n      </div>\n      <div class=\"col\">\n        <ul>\n        <li><a href=\"#\">Go Air</a></li>\n        <li><a href=\"#\">JetAirways</a></li>\n        <li><a href=\"#\">Air India</a></li>\n        <li><a href=\"#\">Air Lufthansa</a></li>\n        <li><a href=\"#\">Spice Jet</a></li>\n        <li><a href=\"#\">Areoflot</a></li>\n        <li><a href=\"#\">Air France</a></li>\n        </ul>\n      </div>\n      <div class=\"col\">\n        <ul>\n          <li><a href=\"#\">Go Air</a></li>\n          <li><a href=\"#\">JetAirways</a></li>\n          <li><a href=\"#\">Air India</a></li>\n          <li><a href=\"#\">Air Lufthansa</a></li>\n          <li><a href=\"#\">Spice Jet</a></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"sepe-line\"></div>\n    \n  </div>\n<!-- End -->"

/***/ }),

/***/ "./src/app/components/international-sites/international-sites.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/international-sites/international-sites.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InternationalSitesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternationalSitesComponent", function() { return InternationalSitesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InternationalSitesComponent = /** @class */ (function () {
    function InternationalSitesComponent() {
    }
    InternationalSitesComponent.prototype.ngOnInit = function () {
    };
    InternationalSitesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-international-sites',
            template: __webpack_require__(/*! ./international-sites.component.html */ "./src/app/components/international-sites/international-sites.component.html"),
            styles: [__webpack_require__(/*! ./international-sites.component.css */ "./src/app/components/international-sites/international-sites.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InternationalSitesComponent);
    return InternationalSitesComponent;
}());



/***/ }),

/***/ "./src/app/components/main-links/main-links.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/main-links/main-links.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1saW5rcy9tYWluLWxpbmtzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main-links/main-links.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/main-links/main-links.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Information about site  -->\n<div class=\"container-fluid container-fluid-custom-1\">\n  <div class=\"container\">\n    <div class=\"row text-white pt-3 pb-3\">\n      <div class=\"col\">\n        <h5 class=\"margin\">MAIN LINKS</h5>\n        <ul>\n          <li><a href=\"#\">Home</a></li>\n          <li><a href=\"#\">About Us</a></li>\n          <li><a href=\"#\">Airplane</a></li>\n          <li><a href=\"#\">Gaurantee Travel</a></li>\n          <li><a href=\"#\">Privacy Policy</a></li>\n        </ul>\n      </div>\n      <div class=\"col\">\n        <h5 class=\"margin\">CONTACT US</h5>\n        <ul>\n        <li><a href=\"#\">lik 1</a></li>\n        <li><a href=\"#\">link2</a></li>\n        <li><a href=\"#\">www.air.com</a></li>\n        </ul>\n      </div>\n      <div class=\"col\">\n        <h5 class=\"margin\">OUR PARTNERS</h5>\n        <ul>\n        <li><a href=\"#\">Go Air</a></li>\n        <li><a href=\"#\">JetAirways</a></li>\n        <li><a href=\"#\">Air India</a></li>\n        <li><a href=\"#\">Air Lufthansa</a></li>\n        <li><a href=\"#\">Spice Jet</a></li>\n        <li><a href=\"#\">Areoflot</a></li>\n        <li><a href=\"#\">Air France</a></li>\n        </ul>\n      </div>\n      <div class=\"col\">\n        <h5 class=\"margin\">COMPANY</h5>\n        <ul>\n        <li><a href=\"#\">Go Air</a></li>\n        <li><a href=\"#\">JetAirways</a></li>\n        <li><a href=\"#\">Air India</a></li>\n        <li><a href=\"#\">Air Lufthansa</a></li>\n        <li><a href=\"#\">Spice Jet</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n  <!-- End -->"

/***/ }),

/***/ "./src/app/components/main-links/main-links.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/main-links/main-links.component.ts ***!
  \***************************************************************/
/*! exports provided: MainLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLinksComponent", function() { return MainLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainLinksComponent = /** @class */ (function () {
    function MainLinksComponent() {
    }
    MainLinksComponent.prototype.ngOnInit = function () {
    };
    MainLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-links',
            template: __webpack_require__(/*! ./main-links.component.html */ "./src/app/components/main-links/main-links.component.html"),
            styles: [__webpack_require__(/*! ./main-links.component.css */ "./src/app/components/main-links/main-links.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainLinksComponent);
    return MainLinksComponent;
}());



/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation bar -->\r\n<div class=\"container\">\r\n  <nav class=\"navbar navbar-expand-sm mt-0 justify-content-between custom-navbar\">\r\n    <a class=\"navbar-brand\" href=\"#\"><h2><strong>My</strong> <span>F</span>light</h2></a>\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\"><a routerLink=\"/home\"><span class=\" nav-link text-white mr-1\">Home</span></a></li>\r\n      <li class=\"nav-item\"><a href=\"#\"><span class=\" nav-link text-white mr-1\">About Us</span></a></li>\r\n      <li class=\"nav-item\"><a href=\"#\"><span class=\" nav-link text-white mr-1\">Tickets</span></a></li>\r\n      <li class=\"nav-item\"><a href=\"#\"><span class=\" nav-link text-white mr-1\"> Multicity</span></a></li>\r\n      <li class=\"nav-item\"><a href=\"#\"><span class=\" nav-link text-white mr-1\"> Airlines</span></a></li>\r\n      <li class=\"nav-item mr-2\"><a href=\"#\"><span class=\" nav-link text-white mr-1\"> Contact Us</span></a></li>\r\n      <li class=\"nav-item rounded-circle social-rounded\">\r\n        <a href=\"#\"><span class=\"nav-link\"><i class=\"fa fa-facebook\"></i></span></a>\r\n      </li>\r\n        <li class=\"nav-item ml-1 rounded-circle social-rounded\">\r\n          <a href=\"#\"><span class=\"nav-link\"><i class=\"fa fa-twitter\"></i></span></a>\r\n        </li>\r\n    </ul>\r\n  </nav>  \r\n</div>\r\n\r\n\r\n<!-- End -->"

/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent() {
    }
    MainMenuComponent.prototype.ngOnInit = function () {
    };
    MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/components/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/components/main-menu/main-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/recommendation/recommendation.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/recommendation/recommendation.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjb21tZW5kYXRpb24vcmVjb21tZW5kYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/recommendation/recommendation.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/recommendation/recommendation.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Recommendations and Offers -->\n <div class=\"container recommends\">\n  <h4 class=\"mt-3 text-mute\">Recommendations for you</h4>\n  <div class=\"row\">\n    <div class=\"col image-left\">\n      <img src=\"../assets/images/Singapore.jpg\" alt=\"pic\" class=\"mt-3\" width=\"350\" height=\"250\">\n      <div class=\"price-details\"><h5 class=\"text-white image-left-1\">Singapore</h5>\n      <a href=\"#\" class=\"text-white\">Price details <i class=\"fa fa-angle-double-right\" style=\"font-size:16px\"></i></a> \n    </div>\n  </div>\n    <div class=\"col image-center\">\n      <img src=\"../assets/images/berlin.jpg\" alt=\"pic\" class=\"mt-3\" width=\"350\" height=\"250\">\n      <div class=\"price-details\"><h5 class=\"text-white image-center-1\">Berlin</h5>\n      <a href=\"#\" class=\"text-white\">Price details <i class=\"fa fa-angle-double-right\" style=\"font-size:16px\"></i></a> \n    </div>\n  </div>\n    <div class=\"col image-right\">\n      <img src=\"../assets/images/Newyork.jpg\" alt=\"pic\" class=\"mt-3\" width=\"350\" height=\"250\">\n      <div class=\"price-details\"> <h5 class=\"text-white image-right-1\">Newyork</h5>\n      <a href=\"#\" class=\"text-white\">Price details <i class=\"fa fa-angle-double-right\" style=\"font-size:16px\"></i></a> \n    </div>\n    </div>\n  </div>\n</div>\n<!-- End -->\n<!-- Deals -->\n<div class=\"container mb-3 deals\">\n  <h4 class=\"mt-3 text-mute\">Deals</h4>\n  <div class=\"row\">\n    <div class=\"col deal-left\">\n      <img src=\"../assets/images/singapore-sentosa.jpg\" alt=\"pic\" class=\"mt-3\" width=\"350\" height=\"250\">\n      <div class=\"price-details\">\n        <h5 class=\"text-white deal-left-1\">Singapore sentosa</h5>\n        <a href=\"#\" class=\"text-white\">Price details <i class=\"fa fa-angle-double-right\" style=\"font-size:16px\"></i></a>\n      </div> \n  </div>\n  <div class=\"col deal-center\">\n    <img src=\"../assets/images/denmark.jpg\" alt=\"pic\" class=\"mt-3\" width=\"350\" height=\"250\">\n    <div class=\"price-details\"><h5 class=\"text-white deal-center-1\">Denmark</h5>\n    <a href=\"#\" class=\"text-white\">Price details <i class=\"fa fa-angle-double-right\" style=\"font-size:16px\"></i></a> \n  </div>\n</div>\n  <div class=\"col deal-right\">\n    <img src=\"../assets/images/West Coast Park.jpg\" alt=\"pic\" class=\"mt-3\" width=\"350\" height=\"250\">\n    <div class=\"price-details\"><h5 class=\"text-white deal-right-1\">West Coast Park</h5>\n    <a href=\"#\" class=\"text-white\">Price details <i class=\"fa fa-angle-double-right\" style=\"font-size:16px\"></i></a> \n  </div>\n</div>\n  </div>\n</div>\n<!-- End -->"

/***/ }),

/***/ "./src/app/components/recommendation/recommendation.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/recommendation/recommendation.component.ts ***!
  \***********************************************************************/
/*! exports provided: RecommendationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationComponent", function() { return RecommendationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecommendationComponent = /** @class */ (function () {
    function RecommendationComponent() {
    }
    RecommendationComponent.prototype.ngOnInit = function () {
    };
    RecommendationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recommendation',
            template: __webpack_require__(/*! ./recommendation.component.html */ "./src/app/components/recommendation/recommendation.component.html"),
            styles: [__webpack_require__(/*! ./recommendation.component.css */ "./src/app/components/recommendation/recommendation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecommendationComponent);
    return RecommendationComponent;
}());



/***/ }),

/***/ "./src/app/components/search-flights/search-flights.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/search-flights/search-flights.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\nexample-custom-date-class {\r\n  background: orange;\r\n  border-radius: 50%;\r\n}\r\n\r\n.mat-form-field.mat-focused .mat-form-field-label{ color:#fff;}\r\n\r\n.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#fff;}\r\n\r\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill){\r\n  color:orange;\r\n}\r\n\r\n.mat-calendar-body-selected{\r\n  background-color:orange;\r\n  color:#fff;\r\n}\r\n\r\n.mat-calendar-body-today:not(.mat-calendar-body-selected){\r\n  border-color: #007bff;\r\n}\r\n\r\n.mat-datepicker-toggle-active{\r\n  color:#007bff;\r\n}\r\n\r\n.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon, .mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{\r\n  width: 2em !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtZmxpZ2h0cy9zZWFyY2gtZmxpZ2h0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUNBLG1EQUFtRCxVQUFVLENBQUM7O0FBQzlELG1EQUFtRCxxQkFBcUIsQ0FBQzs7QUFDekU7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtBQUNaOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtZmxpZ2h0cy9zZWFyY2gtZmxpZ2h0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5leGFtcGxlLWN1c3RvbS1kYXRlLWNsYXNzIHtcclxuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7IGNvbG9yOiNmZmY7fVxyXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7fVxyXG4uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCl7XHJcbiAgY29sb3I6b3JhbmdlO1xyXG59XHJcbi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOm9yYW5nZTtcclxuICBjb2xvcjojZmZmO1xyXG59XHJcbi5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtcclxuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmV7XHJcbiAgY29sb3I6IzAwN2JmZjtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWRlZmF1bHQtaWNvbiwgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1kZWZhdWx0LWljb257XHJcbiAgd2lkdGg6IDJlbSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/search-flights/search-flights.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/search-flights/search-flights.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- carousel  -->\r\n<div class=\"container-fluid custome-carousel\">\r\n  <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <ul class=\"carousel-indicators\">\r\n      <li class=\"active\" data-target=\"#demo\" data-slide-to=\"0\"></li>\r\n      <li data-target=\"#demo\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#demo\" data-slide-to=\"2\"></li>\r\n      <li data-target=\"#demo\" data-slide-to=\"3\"></li>\r\n    </ul>\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        <img src=\"../assets/images/flight-1.jpg\" alt=\"flight\" width=\"1100\" height=\"500\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img src=\"../assets/images/flight-2.jpg\" alt=\"flight\" width=\"1100\" height=\"500\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img src=\"../assets/images/flight-3.jpg\" alt=\"flight\" width=\"1100\" height=\"500\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img src=\"../assets/images/flight-4.jpg\" alt=\"flight\" width=\"1100\" height=\"500\">\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\"></span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\"></span>\r\n    </a>\r\n    <div class=\"flight-booking justify-content-center\">\r\n      <h4 class=\"text-white\">Book your flight with customize price</h4>\r\n      <div class=\"booking-option\">\r\n        <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"form-check-inline\">\r\n            <label class=\"form-check-label\" for=\"radio1\">\r\n            <input type=\"radio\" class=\"form-check-input\" id=\"radio1\" name=\"optradio\" value=\"Oneway\" checked>\r\n            One way</label>\r\n          </div>\r\n          <div class=\"form-check-inline\">\r\n            <label class=\"form-check-label\" for=\"radio2\">\r\n            <input type=\"radio\" class=\"form-check-input\" id=\"radio2\" name=\"optradio\" value=\"return\">\r\n            Return</label>\r\n            </div>\r\n            <div class=\"form-check-inline\">\r\n              <label class=\"form-check-label\" for=\"radio3\">\r\n              <input type=\"radio\" class=\"form-check-input\" id=\"radio3\" name=\"optradio\" value=\"multicity\">\r\n              MultiCity</label>\r\n            </div>\r\n            <!-- Source and destination controllers -->\r\n            <div class=\"container-fluid\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"input-group mt-3\">\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input type=\"text\" placeholder=\"Flight From\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"autoFrom\">\r\n                        <mat-autocomplete #autoFrom=\"matAutocomplete\">\r\n                          <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n                            {{option}}\r\n                          </mat-option>\r\n                        </mat-autocomplete>\r\n                      </mat-form-field>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"input-group mt-3\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input type=\"text\" placeholder=\"Flight To\" aria-label=\"Number\"  matInput [formControl]=\"DestinationControl\" [matAutocomplete]=\"autoTo\">\r\n                            <mat-autocomplete  #autoTo=\"matAutocomplete\">\r\n                              <mat-option *ngFor=\"let Destoption of filteredDestinationOptions | async\" [value]=\"Destoption\">\r\n                                {{Destoption}}\r\n                              </mat-option>\r\n                            </mat-autocomplete>\r\n                        </mat-form-field> \r\n                    </div>\r\n                </div>\r\n              </div>\r\n            </div><!-- end -->\r\n            <!-- traveling date -->\r\n            <div class=\"container-fluid\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"input-group mt-3\">\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker>\r\n                      </mat-form-field>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"input-group mt-3\">\r\n                        <mat-form-field color=\"accent\" class=\"example-full-width\">\r\n                          <mat-label>Choose a date</mat-label>\r\n                          <input matInput [matDatepicker]=\"picker2\">\r\n                          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                          <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"container-fluid\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"btn-group mt-3 mr-3\">\r\n                        <button type=\"btn\" class=\"btn btn-primary\">Adults</button>\r\n                        <button type=\"button\" class=\"btn btn-primary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\">\r\n                        </button>\r\n                      <div class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item\" href=\"#\">1</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">2</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">3</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">4</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">5</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">6</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">7</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">8</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">9</a>\r\n      \r\n                      </div>\r\n                    </div>\r\n                    <div class=\"btn-group mt-3 mr-3\">\r\n                      <select (change)=\"onSelect($event.target.value)\" class=\"form-control\">\r\n                        <option value=\"0\">All</option>\r\n                        <option *ngFor=\"let airline of airlines\" value= {{airline.AirlineCode}}>{{airline.AirlineName}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"btn-group mt-3 mr-3\">\r\n                        <select class=\"form-control\">\r\n                          <option *ngFor=\"let cabinclass of cabinclasses\" value= {{cabinclass.ClassCode}}>{{cabinclass.ClassName}}</option>\r\n                        </select>\r\n                      </div>\r\n                    <div class=\"form-check-inline ml-3 mt-3\">\r\n                        <label class=\"form-check-label checked-custom\">\r\n                          <input type=\"checkbox\" class=\"form-check-input\"  value=\"\">Direct flights only\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <button type=\"button\" (click)=\"onSearch('lon')\" class=\"btn btn-danger mt-3\"><i class=\"fa fa-search\"></i> Search</button>\r\n       </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n<!-- End -->\r\n"

/***/ }),

/***/ "./src/app/components/search-flights/search-flights.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/search-flights/search-flights.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchFlightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFlightsComponent", function() { return SearchFlightsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_models_airline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/airline */ "./src/app/models/airline.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var SearchFlightsComponent = /** @class */ (function () {
    function SearchFlightsComponent(find, elementRef, fb, _dataService, router) {
        this.find = find;
        this.elementRef = elementRef;
        this.fb = fb;
        this._dataService = _dataService;
        this.router = router;
        this.selectedAirline = new src_app_models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](0, "All", 'All');
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.DestinationControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = [];
        this.refineSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.isFormValid = false;
        this.filteredOriginCities = [];
        this.filteredDestinationCities = [];
        this.totalCitiesListedOnServer = [];
        this.submitted = false;
        this.ServiceValue = [];
        this.DestinationValue = [];
        this.dep = "lon";
        this.arr = "del";
        this.depdat = "10102019";
        this.arrdat = "17102019";
        this.dateClass = function (d) {
            var date = d.getDate();
            // Highlight the 1st and 20th day of each month.
            return (date === 1 || date === 20) ? 'example-custom-date-class' : undefined;
        };
        this.search = {
            departureDate: '',
            destinationCity: '',
            originCity: '',
            oneway: true,
            passengers: 0,
            refine: 1000
        };
        this.airlines = this._dataService.getAirlines();
        this.cabinclasses = this._dataService.gerCabinClasses();
    }
    SearchFlightsComponent.prototype.onSearch = function (source) {
        console.log('search ');
        source = this.dep;
        //dest = this.arr; depdate = this.depdat; arrivaldate = this.arrdat;
        //this.router.navigate(['recommendation/'+ source + '/' + dest + '/' + depdate + '/' + arrivaldate]);
        //this.router.navigate(['/recommendation',{id: source , id2: dest}]);
        this.router.navigate(['results/', source]);
    };
    SearchFlightsComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*source*/
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) { return _this._filter(value); }));
        this.filteredDestinationOptions = this.DestinationControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) { return _this._filterDestination(value); }));
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.searchTo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            DestName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    };
    SearchFlightsComponent.prototype.onSelect = function (airlineId) {
        this.airlineId = airlineId;
    };
    SearchFlightsComponent.prototype._filter = function (value) {
        var _this = this;
        if (value.length >= 3) {
            var filterValue = value.toLowerCase();
            var data = {
                Name: filterValue
            };
            this.find.getOriginOnFlight(data).subscribe(function (res) {
                if (res) {
                    _this.ServiceValue = res;
                    console.log(_this.ServiceValue);
                }
            }, function (err) {
                console.log(err);
            });
            return this.ServiceValue;
        }
    };
    SearchFlightsComponent.prototype._filterDestination = function (value) {
        var _this = this;
        if (value.length >= 3) {
            var DestfilterValue = value.toLowerCase();
            var Destdata = {
                Name: DestfilterValue
            };
            this.find.getDestinationOnFlight(Destdata).subscribe(function (res) {
                if (res) {
                    _this.DestinationValue = res;
                    console.log(_this.DestinationValue);
                }
            }, function (err) {
                console.log(err);
            });
            return this.DestinationValue;
        }
    };
    /**
     * Selected value from list //return this.options.filter(option => option.toLowerCase().includes(filterValue));
     * @param city
     */
    SearchFlightsComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.searchForm.invalid) {
            return;
        }
        else
            // convert to lowercase
            // this.search.destinationCity = this.searchForm..destinationCity.toLowerCase();
            // this.search.originCity = this.searchForm.originCity.toLowerCase();
            console.log("f is", this.searchForm);
    };
    SearchFlightsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-flights',
            template: __webpack_require__(/*! ./search-flights.component.html */ "./src/app/components/search-flights/search-flights.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./search-flights.component.css */ "./src/app/components/search-flights/search-flights.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], SearchFlightsComponent);
    return SearchFlightsComponent;
}());



/***/ }),

/***/ "./src/app/components/search-results/search-results.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/search-results/search-results.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  Result page \r\n  <ul>\r\n    <li  *ngFor=\"let result of pageresult\">\r\n    <span class=\"badge\">{{result}}</span>     \r\n    <li>\r\n    </ul>`\r\n   \r\n   \r\n</div>"

/***/ }),

/***/ "./src/app/components/search-results/search-results.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");



var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.pageresult = [];
        this.subscription = this.dataService.resultPage().subscribe(function (message) {
            console.log('resultpage');
            // if (message) {
            console.log(message);
            _this.pagess = message;
            //   for (const key in message) {
            //     if(message.hasOwnProperty(key)){
            //       this.pageresult.push(message[key]);
            //     }
            //   }        
            // } else {
            //   // clear messages when empty message received
            //   this.pageresult = [];
            // }
            //this.pageresult =  Object.keys(message).map(i => message[i]);
            var arr = [];
            Object.keys(message).map(function (key) {
                var _a;
                arr.push((_a = {}, _a[key] = message[key], _a));
                return arr;
            });
            _this.pageresult = arr["PricedItineraries"];
        });
        // this.employee = Object.keys(this.pageresult).map(key => ({type: key, value: this.pageresult[key]}));    
    }
    SearchResultsComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    SearchResultsComponent.prototype.ngOnInit = function () {
        //this.pageresult = this.pagess;
    };
    SearchResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/components/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.css */ "./src/app/components/search-results/search-results.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/models/airline.ts":
/*!***********************************!*\
  !*** ./src/app/models/airline.ts ***!
  \***********************************/
/*! exports provided: Airline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Airline", function() { return Airline; });
var Airline = /** @class */ (function () {
    function Airline(id, AirlineCode, AirlineName) {
        this.id = id;
        this.AirlineCode = AirlineCode;
        this.AirlineName = AirlineName;
    }
    return Airline;
}());



/***/ }),

/***/ "./src/app/models/cabinclass.ts":
/*!**************************************!*\
  !*** ./src/app/models/cabinclass.ts ***!
  \**************************************/
/*! exports provided: CabinClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabinClass", function() { return CabinClass; });
var CabinClass = /** @class */ (function () {
    function CabinClass(ClassCode, ClassName) {
        this.ClassCode = ClassCode;
        this.ClassName = ClassName;
    }
    return CabinClass;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var _models_airline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/airline */ "./src/app/models/airline.ts");
/* harmony import */ var _models_cabinclass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/cabinclass */ "./src/app/models/cabinclass.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");










// const apiUrl = `./assets/data/flight-data.json`;
var apifightUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl; // 'http://travelservice.geetainfotech.com/api';
var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this._jsonURL = '/assets/skycanner.json';
    }
    SearchService.prototype.getOriginOnFlight = function (sourcestr) {
        if (this.httpOptions !== null) {
            this.setHeaders();
        }
        return this.http.post(apifightUrl + '/Mydata', sourcestr, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError()));
    };
    SearchService.prototype.getDestinationOnFlight = function (destinationstr) {
        if (this.httpOptions !== null) {
            this.setHeaders();
        }
        return this.http.post(apifightUrl + "GetDestination", destinationstr, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError()));
    };
    SearchService.prototype.resultPage = function () {
        if (this.httpOptions !== null) {
            this.setHeaders();
        }
        return this.http.get('http://localhost:3000/OTA_AirLowFareSearchRS')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    SearchService.prototype.getSearchResult = function () {
        console.log('getSearchResult');
        return this.getJSON();
    };
    SearchService.prototype.getJSON = function () {
        return this.http.get(this._jsonURL);
    };
    SearchService.prototype.getAirlines = function () {
        return [
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'EI', 'Aer Lingus'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](2, 'AR', 'Aerolineas Argentinas'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](3, 'AB', 'Air Berlin'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](4, 'AC', 'Air Canada'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](5, 'CA', 'Air China'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](6, 'UX', 'Air Europa Lineas Aereas'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](7, 'AF', 'Air France'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](8, 'AI', 'Air India'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](9, 'JM', 'Air Jamaica'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](10, 'KM', 'Air Malta'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](11, 'MK', 'Air Mauritius'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](12, 'SW', 'Air Namibia'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](13, 'NZ', 'Air New Zealand'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](14, 'HM', 'Air Seychelles'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](15, 'AZ', 'Alitalia'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](16, 'AA', 'American Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](17, 'NH', 'ANA'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](18, 'OZ', 'Asiana Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](19, 'OS', 'Austrian Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](20, 'BA', 'British Airways'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'SN', 'Brussels Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'BW', 'Caribbean Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'CX', 'Cathay Pacific Airways'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'CI', 'China Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'MU', 'China Eastern Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'CZ', 'China Southern'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'CO', 'Continental Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'CY', 'Cyprus Airways'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'OK', 'Czech Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'DL', 'Delta Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'MS', 'Egypt Air'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'EK', 'Emirates Airways'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'OV', 'Estonian Air'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'ET', 'Ethiopian Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'EY', 'Etihad Airways'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'BR', 'EVA Air'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'AY', 'Finnair'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'BE', 'FlyBe'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'GA', 'Garuda Indonesia'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'GF', 'Gulf Air'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'IB', 'Iberia Airlines '),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'FI', 'IcelandAir'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'JL', 'Japan Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, '9W', 'Jet Airways'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'KL', 'KLM Royal Dutch Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'KE', 'Korean Air'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'KU', 'Kuwait Airways'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'LA', 'LAN Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'LO', 'LOT Polish Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'LH', 'Lufthansa'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'MH', 'Malaysia Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'ZB', 'Monarch Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'NW', 'Northwest Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'OA', 'Olympic Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'WY', 'Oman Air'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'QF', 'Qantas Airways'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'QR', 'Qatar Airways'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'AT', 'Royal Air Maroc'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'BI', 'Royal Brunei Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'RJ', 'Royal Jordanian'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'SK', 'SAS - Scandinavian Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'SQ', 'Singapore Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'SA', 'South African Airways'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'UL', 'SriLankan Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'LX', 'Swiss Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'JJ', 'TAM Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'TP', 'TAP Portugal'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'TG', 'Thai Airways'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'TK', 'Turkish Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'PS', 'Ukraine Intl.'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'UA', 'United Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'US', 'US Airways'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'HY', 'Uzbekistan Airways'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'RG', 'Varig Brazilian'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'VN', 'Vietnam Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'VS', 'Virgin Atlantic'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'VG', 'VLM Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'WS', 'WestJet'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'FZ', 'Flydubai'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'PG', 'Bangkok Airways'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'HU', 'Hainan Airlines'),
            new _models_airline__WEBPACK_IMPORTED_MODULE_6__["Airline"](1, 'GS', 'Tianjin Airlines')
        ];
    };
    SearchService.prototype.gerCabinClasses = function () {
        return [
            new _models_cabinclass__WEBPACK_IMPORTED_MODULE_7__["CabinClass"]('any', 'Any'),
            new _models_cabinclass__WEBPACK_IMPORTED_MODULE_7__["CabinClass"]('M', 'Economy'),
            new _models_cabinclass__WEBPACK_IMPORTED_MODULE_7__["CabinClass"]('C', 'Business'),
            new _models_cabinclass__WEBPACK_IMPORTED_MODULE_7__["CabinClass"]('F', 'First Class'),
            new _models_cabinclass__WEBPACK_IMPORTED_MODULE_7__["CabinClass"]('W', 'Premium Economy')
        ];
    };
    SearchService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            if (error.status === 401) {
            }
            throw error;
        };
    };
    SearchService.prototype.setHeaders = function (contentType) {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': contentType || 'application/json'
            })
        };
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    apiUrl: 'http://travelservice.geetainfotech.com/api/',
    isMasterMockTrue: false,
    wpSSO: 'https://addev.abc.com/wordpress/wp-json/wp-single-sign-on/login'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://travelservice.geetainfotech.com/api/',
    isMasterMockTrue: false,
    wpSSO: 'https://addev.abc.com/wordpress/wp-json/wp-single-sign-on/login'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sony\Downloads\myFlightAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map