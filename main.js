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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
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

module.exports = "<app-toolbar></app-toolbar>\r\n<!--<div class=\"topics\">Topics</div>-->\r\n<router-outlet></router-outlet> "

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topics {\n  position: relative;\n  display: flex; }\n\n/*\r\n.logo::before{\r\n    content: '';\r\n    display: flex;\r\n    top: 0;\r\n    left: 0;\r\n    height: 10px;\r\n    width: 10px;\r\n    border: 0.5px solid #043591;\r\n}\r\n.logo::after{\r\n    content: '';\r\n    display: flex;\r\n    top: 0;\r\n    right: 0;\r\n    height: 10px;\r\n    width: 10px;\r\n    border: 0.5px solid #043591;\r\n}\r\n*/\n\n.topics {\n  position: relative;\n  display: flex; }\n\n* {\n  background-image: url('terminator.jpg'); }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2dyYW1taW5nXFxBbmd1bGFyXFxHYW1lcy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ21CQzs7QURFRDtFQUNJLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksdUNBQWlELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9waWNze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4vKlxyXG4ubG9nbzo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDQzNTkxO1xyXG59XHJcbi5sb2dvOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICMwNDM1OTE7XHJcbn1cclxuKi9cclxuXHJcbi50b3BpY3N7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4qe1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvdGVybWluYXRvci5qcGcnKTtcclxufSIsIi50b3BpY3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7IH1cblxuLypcclxuLmxvZ286OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgIzA0MzU5MTtcclxufVxyXG4ubG9nbzo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDQzNTkxO1xyXG59XHJcbiovXG4udG9waWNzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbioge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvdGVybWluYXRvci5qcGdcIik7IH1cbiJdfQ== */"

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
        this.title = "Games";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ssc_ssc_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ssc/ssc.module */ "./src/app/ssc/ssc.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _common_common_module__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _ssc_ssc_module__WEBPACK_IMPORTED_MODULE_6__["SscModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/common.module.ts":
/*!*****************************************!*\
  !*** ./src/app/common/common.module.ts ***!
  \*****************************************/
/*! exports provided: CommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonModule", function() { return CommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/common/toolbar/toolbar.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/common/sidenav/sidenav.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var CommonModule = /** @class */ (function () {
    function CommonModule() {
    }
    CommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"]
            ],
            imports: [],
            exports: [
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"]
            ]
        })
    ], CommonModule);
    return CommonModule;
}());



/***/ }),

/***/ "./src/app/common/sidenav/sidenav.component.html":
/*!*******************************************************!*\
  !*** ./src/app/common/sidenav/sidenav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <div id=\"sidebar-wrapper\">\n      <ul class=\"sidebar-nav\">\n        <li><a href=\"#\">Sidenav1</a></li>\n        <li><a href=\"#\">Sidenav2</a></li>\n        <li><a href=\"#\">Sidenav3</a></li>\n      </ul>\n    </div>\n  </div>\n  <!--<div id=\"page-content-wrapper\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <h1>Page content</h1>\n          <p>In Progress...</p>\n          <p>Thank you for your patience.</p>\n        </div>\n      </div>\n    </div>\n  </div>-->"

/***/ }),

/***/ "./src/app/common/sidenav/sidenav.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/common/sidenav/sidenav.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar-wrapper {\n  z-index: 1;\n  position: absolute;\n  width: 200px;\n  height: 100%;\n  overflow-y: hidden;\n  background: #fff;\n  border: 1px solid #424242;\n  margin-top: 30px; }\n\n#page-content-wrapper {\n  position: absolute;\n  width: 100%;\n  padding: 15px;\n  padding-left: 200px;\n  border: 1px solid #424242;\n  margin-top: 30px; }\n\n.sidebar-nav {\n  padding: 0px;\n  list-style: none; }\n\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px; }\n\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #424242; }\n\n.sidebar-nav li a:hover {\n  background: rgba(95, 93, 93, 0.15); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NpZGVuYXYvRDpcXFByb2dyYW1taW5nXFxBbmd1bGFyXFxHYW1lcy9zcmNcXGFwcFxcY29tbW9uXFxzaWRlbmF2XFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGNBQWMsRUFBQTs7QUFJbEI7RUFDSSxrQ0FBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2lkZWJhci13cmFwcGVye1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDI0MjQyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuI3BhZ2UtY29udGVudC13cmFwcGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MjQyNDI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1uYXZ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uc2lkZWJhci1uYXYgbGl7XHJcbiAgICB0ZXh0LWluZGVudDogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1uYXYgbGkgYXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM0MjQyNDI7XHJcblxyXG59XHJcblxyXG4uc2lkZWJhci1uYXYgbGkgYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoOTUsOTMsOTMsLjE1KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/common/sidenav/sidenav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/sidenav/sidenav.component.ts ***!
  \*****************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/common/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/common/sidenav/sidenav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/common/toolbar/toolbar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/common/toolbar/toolbar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"logo\">Math Games</div>\r\n</div>"

/***/ }),

/***/ "./src/app/common/toolbar/toolbar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/common/toolbar/toolbar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  display: block;\n  margin: 0 0 0 0;\n  padding: 0 0 0 0; }\n\n.logo {\n  position: relative;\n  display: inline-block;\n  margin: 5px 5px 5px 5px;\n  padding: 5px 5px 5px 5px;\n  color: aqua;\n  font-size: 10px;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  border-radius: 10px;\n  border: 0.5px solid #043591; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3Rvb2xiYXIvRDpcXFByb2dyYW1taW5nXFxBbmd1bGFyXFxHYW1lcy9zcmNcXGFwcFxcY29tbW9uXFx0b29sYmFyXFx0b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysd0VBQXdFO0VBQ3hFLG1CQUFtQjtFQUNuQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgY29sb3I6IGFxdWE7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDQzNTkxO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/common/toolbar/toolbar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/toolbar/toolbar.component.ts ***!
  \*****************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/common/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/common/toolbar/toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"machine\"></div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".machine {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 10px;\n  height: 10px;\n  background-image: url('terminator.jpg');\n  margin: auto;\n  border-radius: 50%;\n  color: #E7908A;\n  box-shadow: 50px 0 2px 0, \r 50px 0 3px red, \r 50px 0 5px red, \r -50px 0 2px 0, \r -50px 0 3px red,\r -50px 0 5px red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcUHJvZ3JhbW1pbmdcXEFuZ3VsYXJcXEdhbWVzL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUVaLHVDQUFvRDtFQUNwRCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrSENBWSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hY2hpbmV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3Rlcm1pbmF0b3IuanBnJyk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogI0U3OTA4QTtcclxuICAgIGJveC1zaGFkb3c6IFxyXG4gICAgICAgIDUwcHggMCAycHggMCwgXHJcbiAgICAgICAgNTBweCAwIDNweCByZWQsIFxyXG4gICAgICAgIDUwcHggMCA1cHggcmVkLCBcclxuICAgICAgICAtNTBweCAwIDJweCAwLCBcclxuICAgICAgICAtNTBweCAwIDNweCByZWQsXHJcbiAgICAgICAgLTUwcHggMCA1cHggcmVkO1xyXG4gICAgXHJcbn1cclxuXHJcbiIsIi5tYWNoaW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90ZXJtaW5hdG9yLmpwZ1wiKTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjRTc5MDhBO1xuICBib3gtc2hhZG93OiA1MHB4IDAgMnB4IDAsIFxyIDUwcHggMCAzcHggcmVkLCBcciA1MHB4IDAgNXB4IHJlZCwgXHIgLTUwcHggMCAycHggMCwgXHIgLTUwcHggMCAzcHggcmVkLFxyIC01MHB4IDAgNXB4IHJlZDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
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
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ssc/ratio-proportions/ratio-proportions.component.html":
/*!************************************************************************!*\
  !*** ./src/app/ssc/ratio-proportions/ratio-proportions.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"circle\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/ssc/ratio-proportions/ratio-proportions.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/ssc/ratio-proportions/ratio-proportions.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 500px;\n  width: 500px;\n  background-color: lightblue;\n  border-radius: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3NjL3JhdGlvLXByb3BvcnRpb25zL0Q6XFxQcm9ncmFtbWluZ1xcQW5ndWxhclxcR2FtZXMvc3JjXFxhcHBcXHNzY1xccmF0aW8tcHJvcG9ydGlvbnNcXHJhdGlvLXByb3BvcnRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zc2MvcmF0aW8tcHJvcG9ydGlvbnMvcmF0aW8tcHJvcG9ydGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ssc/ratio-proportions/ratio-proportions.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ssc/ratio-proportions/ratio-proportions.component.ts ***!
  \**********************************************************************/
/*! exports provided: RatioProportionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatioProportionsComponent", function() { return RatioProportionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RatioProportionsComponent = /** @class */ (function () {
    function RatioProportionsComponent() {
    }
    RatioProportionsComponent.prototype.ngOnInit = function () {
    };
    RatioProportionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ratio-proportions',
            template: __webpack_require__(/*! ./ratio-proportions.component.html */ "./src/app/ssc/ratio-proportions/ratio-proportions.component.html"),
            styles: [__webpack_require__(/*! ./ratio-proportions.component.scss */ "./src/app/ssc/ratio-proportions/ratio-proportions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RatioProportionsComponent);
    return RatioProportionsComponent;
}());



/***/ }),

/***/ "./src/app/ssc/ssc-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ssc/ssc-routing.module.ts ***!
  \*******************************************/
/*! exports provided: SscRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SscRoutingModule", function() { return SscRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var SscRoutingModule = /** @class */ (function () {
    function SscRoutingModule() {
    }
    SscRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SscRoutingModule);
    return SscRoutingModule;
}());



/***/ }),

/***/ "./src/app/ssc/ssc.module.ts":
/*!***********************************!*\
  !*** ./src/app/ssc/ssc.module.ts ***!
  \***********************************/
/*! exports provided: SscModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SscModule", function() { return SscModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ssc_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ssc-routing.module */ "./src/app/ssc/ssc-routing.module.ts");
/* harmony import */ var _ratio_proportions_ratio_proportions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ratio-proportions/ratio-proportions.component */ "./src/app/ssc/ratio-proportions/ratio-proportions.component.ts");





var SscModule = /** @class */ (function () {
    function SscModule() {
    }
    SscModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_ratio_proportions_ratio_proportions_component__WEBPACK_IMPORTED_MODULE_4__["RatioProportionsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ssc_routing_module__WEBPACK_IMPORTED_MODULE_3__["SscRoutingModule"]
            ],
            exports: [
                _ratio_proportions_ratio_proportions_component__WEBPACK_IMPORTED_MODULE_4__["RatioProportionsComponent"]
            ]
        })
    ], SscModule);
    return SscModule;
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

module.exports = __webpack_require__(/*! D:\Programming\Angular\Games\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map