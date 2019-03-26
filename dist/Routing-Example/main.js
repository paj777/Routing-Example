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

/***/ "./src/app/Main/main-container/main-container.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Main/main-container/main-container.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  main-container works!\n</p>\n"

/***/ }),

/***/ "./src/app/Main/main-container/main-container.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/Main/main-container/main-container.component.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01haW4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/Main/main-container/main-container.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Main/main-container/main-container.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContainerComponent", function() { return MainContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainContainerComponent = /** @class */ (function () {
    function MainContainerComponent() {
    }
    MainContainerComponent.prototype.ngOnInit = function () {
    };
    MainContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-container',
            template: __webpack_require__(/*! ./main-container.component.html */ "./src/app/Main/main-container/main-container.component.html"),
            styles: [__webpack_require__(/*! ./main-container.component.sass */ "./src/app/Main/main-container/main-container.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainContainerComponent);
    return MainContainerComponent;
}());



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
/* harmony import */ var _cloner_clone_container_clone_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cloner/clone-container/clone-container.component */ "./src/app/cloner/clone-container/clone-container.component.ts");
/* harmony import */ var _fiddler_fiddler_container_fiddler_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fiddler/fiddler-container/fiddler-container.component */ "./src/app/fiddler/fiddler-container/fiddler-container.component.ts");
/* harmony import */ var _scratcher_scratcher_container_scratcher_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scratcher/scratcher-container/scratcher-container.component */ "./src/app/scratcher/scratcher-container/scratcher-container.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    {
                        path: 'app',
                        children: [{
                                path: '',
                                component: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
                            }, {
                                path: 'cloner',
                                component: _cloner_clone_container_clone_container_component__WEBPACK_IMPORTED_MODULE_3__["CloneContainerComponent"]
                            },
                            {
                                path: 'fiddler',
                                component: _fiddler_fiddler_container_fiddler_container_component__WEBPACK_IMPORTED_MODULE_4__["FiddlerContainerComponent"]
                            },
                            {
                                path: 'scratcher',
                                component: _scratcher_scratcher_container_scratcher_container_component__WEBPACK_IMPORTED_MODULE_5__["ScratcherContainerComponent"]
                            }]
                    }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Some stuff you can do: </h2>\n\n<div class=\"card-body\">\n  <div class=\"wizard\">\n    <a [routerLink]=\"['app/cloner']\"\n    routerLinkActive=\"active\">\n      Cloner\n    </a>\n    <a [routerLink]=\"['app/fiddler']\"\n    routerLinkActive=\"active\">\n      Fiddler      \n    </a>\n    <a [routerLink]=\"['app/scratcher']\"\n    routerLinkActive=\"active\">\n      Scratcher\n    </a>\n  </div>\n</div>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Routing-Example';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cloner_clone_container_clone_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cloner/clone-container/clone-container.component */ "./src/app/cloner/clone-container/clone-container.component.ts");
/* harmony import */ var _fiddler_fiddler_container_fiddler_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fiddler/fiddler-container/fiddler-container.component */ "./src/app/fiddler/fiddler-container/fiddler-container.component.ts");
/* harmony import */ var _scratcher_scratcher_container_scratcher_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scratcher/scratcher-container/scratcher-container.component */ "./src/app/scratcher/scratcher-container/scratcher-container.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _Main_main_container_main_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Main/main-container/main-container.component */ "./src/app/Main/main-container/main-container.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _cloner_clone_container_clone_container_component__WEBPACK_IMPORTED_MODULE_4__["CloneContainerComponent"],
                _fiddler_fiddler_container_fiddler_container_component__WEBPACK_IMPORTED_MODULE_5__["FiddlerContainerComponent"],
                _scratcher_scratcher_container_scratcher_container_component__WEBPACK_IMPORTED_MODULE_6__["ScratcherContainerComponent"],
                _Main_main_container_main_container_component__WEBPACK_IMPORTED_MODULE_9__["MainContainerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cloner/clone-container/clone-container.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/cloner/clone-container/clone-container.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10\">\n      Hey\n    </div>\n    <div class=\"col-md-2\">\n      boo\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cloner/clone-container/clone-container.component.sass":
/*!***********************************************************************!*\
  !*** ./src/app/cloner/clone-container/clone-container.component.sass ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb25lci9jbG9uZS1jb250YWluZXIvY2xvbmUtY29udGFpbmVyLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/cloner/clone-container/clone-container.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/cloner/clone-container/clone-container.component.ts ***!
  \*********************************************************************/
/*! exports provided: CloneContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneContainerComponent", function() { return CloneContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CloneContainerComponent = /** @class */ (function () {
    function CloneContainerComponent() {
    }
    CloneContainerComponent.prototype.ngOnInit = function () {
    };
    CloneContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clone-container',
            template: __webpack_require__(/*! ./clone-container.component.html */ "./src/app/cloner/clone-container/clone-container.component.html"),
            styles: [__webpack_require__(/*! ./clone-container.component.sass */ "./src/app/cloner/clone-container/clone-container.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CloneContainerComponent);
    return CloneContainerComponent;
}());



/***/ }),

/***/ "./src/app/fiddler/fiddler-container/fiddler-container.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/fiddler/fiddler-container/fiddler-container.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  fiddler-container works!\n</p>\n"

/***/ }),

/***/ "./src/app/fiddler/fiddler-container/fiddler-container.component.sass":
/*!****************************************************************************!*\
  !*** ./src/app/fiddler/fiddler-container/fiddler-container.component.sass ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpZGRsZXIvZmlkZGxlci1jb250YWluZXIvZmlkZGxlci1jb250YWluZXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/fiddler/fiddler-container/fiddler-container.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/fiddler/fiddler-container/fiddler-container.component.ts ***!
  \**************************************************************************/
/*! exports provided: FiddlerContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiddlerContainerComponent", function() { return FiddlerContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FiddlerContainerComponent = /** @class */ (function () {
    function FiddlerContainerComponent() {
    }
    FiddlerContainerComponent.prototype.ngOnInit = function () {
    };
    FiddlerContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fiddler-container',
            template: __webpack_require__(/*! ./fiddler-container.component.html */ "./src/app/fiddler/fiddler-container/fiddler-container.component.html"),
            styles: [__webpack_require__(/*! ./fiddler-container.component.sass */ "./src/app/fiddler/fiddler-container/fiddler-container.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FiddlerContainerComponent);
    return FiddlerContainerComponent;
}());



/***/ }),

/***/ "./src/app/scratcher/scratcher-container/scratcher-container.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/scratcher/scratcher-container/scratcher-container.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  scratcher-container works!\n</p>\n"

/***/ }),

/***/ "./src/app/scratcher/scratcher-container/scratcher-container.component.sass":
/*!**********************************************************************************!*\
  !*** ./src/app/scratcher/scratcher-container/scratcher-container.component.sass ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmF0Y2hlci9zY3JhdGNoZXItY29udGFpbmVyL3NjcmF0Y2hlci1jb250YWluZXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/scratcher/scratcher-container/scratcher-container.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/scratcher/scratcher-container/scratcher-container.component.ts ***!
  \********************************************************************************/
/*! exports provided: ScratcherContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScratcherContainerComponent", function() { return ScratcherContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScratcherContainerComponent = /** @class */ (function () {
    function ScratcherContainerComponent() {
    }
    ScratcherContainerComponent.prototype.ngOnInit = function () {
    };
    ScratcherContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scratcher-container',
            template: __webpack_require__(/*! ./scratcher-container.component.html */ "./src/app/scratcher/scratcher-container/scratcher-container.component.html"),
            styles: [__webpack_require__(/*! ./scratcher-container.component.sass */ "./src/app/scratcher/scratcher-container/scratcher-container.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScratcherContainerComponent);
    return ScratcherContainerComponent;
}());



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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Code\Routing-Example\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map