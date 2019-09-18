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
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _storages_auth_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storages/auth.storage */ "./src/app/storages/auth.storage.ts");
/* harmony import */ var _register_associate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/associate.component */ "./src/app/register/associate.component.ts");



var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: '', component: _register_associate_component__WEBPACK_IMPORTED_MODULE_2__["AssociateComponent"], canActivate: [_storages_auth_storage__WEBPACK_IMPORTED_MODULE_1__["AuthStorage"]] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


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

module.exports = "<!-- main app container -->\n<div class=\"jumbotron\">\n  <div class=\"container\">\n      <div class=\"col-sm-12 col-md-12 col-lg-12\">\n          <router-outlet></router-outlet>\n      </div>\n  </div>\n</div>"

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
        this.title = 'clubecampestre';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-datatable */ "./node_modules/angular2-datatable/index.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_datatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _storages_auth_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storages/auth.storage */ "./src/app/storages/auth.storage.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_associate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/associate.service */ "./src/app/services/associate.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_associate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/associate.component */ "./src/app/register/associate.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                angular2_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_13__["appRoutes"])
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _register_associate_component__WEBPACK_IMPORTED_MODULE_12__["AssociateComponent"]
            ],
            providers: [
                _storages_auth_storage__WEBPACK_IMPORTED_MODULE_7__["AuthStorage"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
                _services_associate_service__WEBPACK_IMPORTED_MODULE_10__["AssociateService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_8__["JwtInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var strCurrentUser = localStorage.getItem('currentUser');
        if (strCurrentUser) {
            var currentUser = JSON.parse(strCurrentUser);
            if (currentUser && currentUser.token) {
                var dupReq = request.clone({
                    headers: request.headers.set('authorization', "Bearer " + currentUser.token),
                });
                return next.handle(dupReq);
            }
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>Login</h2>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"username\">Usuario</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">E obrigatório informar um usuario</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <label for=\"password\">Senha</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">E obrigatório informar uma senha</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n        </div>\r\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/associate.ts":
/*!*************************************!*\
  !*** ./src/app/models/associate.ts ***!
  \*************************************/
/*! exports provided: Associate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Associate", function() { return Associate; });
var Associate = /** @class */ (function () {
    function Associate() {
        this.id = 0;
        this.name = '';
        this.rg = '';
        this.cpf = '';
        this.telNumber = null;
        this.cellNumber = null;
        this.address = null;
        this.number = null;
        this.reference = null;
        this.complement = null;
        this.district = null;
        this.zipCode = null;
        this.city = null;
        this.state = null;
        this.bankCode = 0;
        this.bankName = null;
        this.bankAgency = null;
        this.bankAccount = null;
        this.associateType = null;
        this.sponsorid = null;
        this.sponsorname = null;
    }
    return Associate;
}());



/***/ }),

/***/ "./src/app/register/associate.component.html":
/*!***************************************************!*\
  !*** ./src/app/register/associate.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1\">\r\n    <h1>Associados</h1>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"newAssociate()\">Novo associado</button>\r\n    <table [mfData]=\"associates\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"20\" aria-describedby=\"table_info\" role=\"grid\" class=\"table table-hover\">\r\n        <thead>\r\n            <th scope=\"col\" class=\"col-4\">\r\n                Nome            \r\n            </th>\r\n            <th scope=\"col\" class=\"col-2\">RG</th>\r\n            <th scope=\"col\" class=\"col-2\">CPF</th>\r\n            <th scope=\"col\" class=\"col-2\">Celular</th>\r\n            <th scope=\"col\" class=\"col-3\"></th>\r\n        </thead>\r\n        <tbody>\r\n            <ng-template let-associate ngFor [ngForOf]=\"mf.data\">\r\n                <tr>\r\n                    <td><strong>{{associate.name}}</strong></td>\r\n                    <td>{{associate.rg}}</td>\r\n                    <td>{{associate.cpf}}</td>\r\n                    <td>{{associate.cellNumber}}</td>\r\n                    <td>\r\n                        <button class=\"btn btn-success btn-sm\" (click)=\"editAssociate(associate)\">Editar</button>\r\n                        <button class=\"btn btn-danger btn-sm\" alt=\"Excluir\" (click)=\"removeAssociate(associate)\">Excluir</button>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngIf=\"associate.hasDependents\">\r\n                    <table role=\"table\" class=\"table table-sm\">\r\n                        <tr *ngFor=\"let dependent of associate.dependents\">\r\n                            <td class=\"col-7\">{{dependent.name}}</td>\r\n                            <td class=\"col-5\">{{dependent.celPhone}}</td>\r\n                        </tr>\r\n                    </table>\r\n                </tr>\r\n            </ng-template>\r\n        </tbody>\r\n        <tfoot>\r\n            <tr>\r\n                <td colspan=\"10\">\r\n                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,20,50]\"></mfBootstrapPaginator>\r\n                </td>\r\n            </tr>\r\n        </tfoot>\r\n    </table>\r\n</div>\r\n\r\n<div id=\"move-to-end\">\r\n    <div class=\"modal fade\" id=\"associate-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"associateDataEditModal\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"associateDataEditModal\">{{modalTitle}}</h5>\r\n                    <button type=\"button\" class=\"close\" (click)='confirmClose()' aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <form #formAssociate='ngForm' (ngSubmit)='submitForm()'>\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-5\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"associate-type\">Tipo</label>\r\n                                    <select class=\"form-control\" name=\"associate-type\" [(ngModel)]=\"associate.associateType\">\r\n                                        <option value=\"SPONSOR\">Patrocinador</option>\r\n                                        <option value=\"DEPENDENT\">Dependente</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-7\" *ngIf=\"associate.associateType === 'DEPENDENT'\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"sponsor-id\">Mantedor</label>\r\n                                    <select class=\"form-control\" name=\"sponsor-id\" [(ngModel)]=\"associate.sponsorId\">\r\n                                        <option *ngFor=\"let associate of associates\" value=\"{{associate.id}}\">{{associate.cpf}} - {{associate.name}}</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-8\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': formAssociate.submitted && !name.valid }\">\r\n                                    <label for=\"name\">Nome</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"associate.name\" #name=\"ngModel\" required />\r\n                                    <div *ngIf=\"formAssociate.submitted && !name.valid\" class=\"help-block\">E obrigatório informar o nome do associado</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': formAssociate.submitted && !cpf.valid }\">\r\n                                    <label for=\"cpf\">CPF</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"cpf\" [(ngModel)]=\"associate.cpf\" #cpf=\"ngModel\" required />\r\n                                    <div *ngIf=\"formAssociate.submitted && !cpf.valid\" class=\"help-block\">E obrigatório informar o CPF do associado</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-4\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': formAssociate.submitted && !rg.valid }\">\r\n                                    <label for=\"rg\">RG</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"rg\" [(ngModel)]=\"associate.rg\" #rg=\"ngModel\" required />\r\n                                    <div *ngIf=\"formAssociate.submitted && !rg.valid\" class=\"help-block\">E obrigatório informar o RG do associado</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"cell-number\">Tel. Celular</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"cell-number\" [(ngModel)]=\"associate.cellNumber\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"cell-number\">Tel. Fixo</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"tel-number\" [(ngModel)]=\"associate.telNumber\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"address\">Endereço</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"associate.address\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-2\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"address-number\">Número</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"address-number\" [(ngModel)]=\"associate.number\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"complement\">Complemento</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"complement\" [(ngModel)]=\"associate.complement\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-5\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"district\">Bairro</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"district\" [(ngModel)]=\"associate.district\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"city\">Cidade</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"associate.city\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"state\">Estado</label>\r\n                                    <select class=\"form-control\" name=\"state\" [(ngModel)]=\"associate.state\">\r\n                                        <option value=\"AC\">Acre </option>\r\n                                        <option value=\"AL\">Alagoas </option>\r\n                                        <option value=\"AP\">Amapá </option>\r\n                                        <option value=\"AM\">Amazonas </option>\r\n                                        <option value=\"BA\">Bahia </option>\r\n                                        <option value=\"CE\">Ceará </option>\r\n                                        <option value=\"DF\">Distrito Federal </option>\r\n                                        <option value=\"ES\">Espírito Santo </option>\r\n                                        <option value=\"GO\">Goiás </option>\r\n                                        <option value=\"MA\">Maranhão </option>\r\n                                        <option value=\"MT\">Mato Grosso </option>\r\n                                        <option value=\"MS\">Mato Grosso do Sul </option>\r\n                                        <option value=\"MG\">Minas Gerais </option>\r\n                                        <option value=\"PA\">Pará </option>\r\n                                        <option value=\"PB\">Paraíba </option>\r\n                                        <option value=\"PR\">Paraná </option>\r\n                                        <option value=\"PE\">Pernambuco </option>\r\n                                        <option value=\"PI\">Piauí </option>\r\n                                        <option value=\"RJ\">Rio de Janeiro </option>\r\n                                        <option value=\"RN\">Rio Grande do Norte </option>\r\n                                        <option value=\"RS\">Rio Grande do Sul </option>\r\n                                        <option value=\"RO\">Rondônia </option>\r\n                                        <option value=\"RR\">Roraima </option>\r\n                                        <option value=\"SC\">Santa Catarina </option>\r\n                                        <option value=\"SP\">São Paulo </option>\r\n                                        <option value=\"SE\">Sergipe </option>\r\n                                        <option value=\"TO\">Tocantins </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"bank-code\">Banco</label>\r\n                                    <select class=\"form-control\" name=\"bank-code\" [ngModel]=\"associate.bankCode\" (ngModelChange)=\"bankChanged($event)\">\r\n                                        <option value=\"001\">001 - Banco do Brasil S.A.</option>\r\n                                        <option value=\"341\">341 - Banco Itaú S.A.</option>\r\n                                        <option value=\"033\">033 - Banco Santander (Brasil) S.A.</option>\r\n                                        <option value=\"356\">356 - Banco Real S.A. (antigo)</option>\r\n                                        <option value=\"652\">652 - Itaú Unibanco Holding S.A.</option>\r\n                                        <option value=\"237\">237 - Banco Bradesco S.A.</option>\r\n                                        <option value=\"745\">745 - Banco Citibank S.A.</option>\r\n                                        <option value=\"399\">399 - HSBC Bank Brasil S.A. – Banco Múltiplo</option>\r\n                                        <option value=\"104\">104 - Caixa Econômica Federal</option>\r\n                                        <option value=\"389\">389 - Banco Mercantil do Brasil S.A.</option>\r\n                                        <option value=\"453\">453 - Banco Rural S.A.</option>\r\n                                        <option value=\"422\">422 - Banco Safra S.A.</option>\r\n                                        <option value=\"633\">633 - Banco Rendimento S.A.</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"bank-agency\">Agencia</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"bank-agency\" [(ngModel)]=\"associate.bankAgency\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"bank-account\">Conta</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"bank-account\" [(ngModel)]=\"associate.bankAccount\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <div class=\"col-sm-24 col-md-24 col-lg-24 text-center\">\r\n                            <button type=\"submit\" id=\"btn-save-close\" class=\"btn btn-primary\">Salvar</button>\r\n                            <button type=\"submit\" id=\"btn-save\" *ngIf='modalType == \"insert\"' class=\"btn btn-info\">Salvar e Inserir Novo</button>\r\n                            <button type=\"button\" id=\"btn-close\" class=\"btn btn-light\" (click)='confirmClose()'>Fechar</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/register/associate.component.ts":
/*!*************************************************!*\
  !*** ./src/app/register/associate.component.ts ***!
  \*************************************************/
/*! exports provided: AssociateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociateComponent", function() { return AssociateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_associate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/associate */ "./src/app/models/associate.ts");
/* harmony import */ var _services_associate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/associate.service */ "./src/app/services/associate.service.ts");
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/load.service */ "./src/app/services/load.service.ts");





var AssociateComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AssociateComponent, _super);
    function AssociateComponent(el, associateService) {
        var _this = _super.call(this) || this;
        _this.associateService = associateService;
        _this.banks = {
            '001': '001 - Banco do Brasil S.A.',
            '341': '341 - Banco Itaú S.A.',
            '033': '033 - Banco Santander (Brasil) S.A.',
            '356': '356 - Banco Real S.A. (antigo)',
            '652': '652 - Itaú Unibanco Holding S.A.',
            '237': '237 - Banco Bradesco S.A.',
            '745': '745 - Banco Citibank S.A.',
            '399': '399 - HSBC Bank Brasil S.A. – Banco Múltiplo',
            '104': '104 - Caixa Econômica Federal',
            '389': '389 - Banco Mercantil do Brasil S.A.',
            '453': '453 - Banco Rural S.A.',
            '422': '422 - Banco Safra S.A.',
            '633': '633 - Banco Rendimento S.A.'
        };
        _this.associates = [];
        _this.associate = new _models_associate__WEBPACK_IMPORTED_MODULE_2__["Associate"]();
        _this.modalTitle = '';
        _this.modalType = 'INSERT';
        _this._el = el.nativeElement;
        return _this;
    }
    AssociateComponent.prototype.loadAssociates = function () {
        var _this = this;
        this.InitLoad('Carregando os associados');
        this.associateService.get()
            .subscribe(function (associates) {
            _this.associates = associates;
            _this.EndLoad();
        }, function (error) { return _this.EndLoad(); });
    };
    AssociateComponent.prototype.ngOnInit = function () {
        $('body').append($(this._el).children('#move-to-end'));
        this.loadAssociates();
    };
    AssociateComponent.prototype.ngAfterViewInit = function () {
        this.modalElement = $('div#associate-modal');
    };
    AssociateComponent.prototype.ngOnDestroy = function () {
        $(this._el).append($('body').children('#move-to-end'));
    };
    AssociateComponent.prototype.newAssociate = function () {
        this.associate = new _models_associate__WEBPACK_IMPORTED_MODULE_2__["Associate"]();
        this.modalTitle = "Novo associado";
        this.modalType = 'INSERT';
        this.modalElement.modal('show');
    };
    AssociateComponent.prototype.editAssociate = function (associate) {
        this.associate = associate;
        this.modalTitle = "Editando " + associate.name;
        this.modalType = 'UPDATE';
        this.modalElement.modal('show');
    };
    AssociateComponent.prototype.removeAssociate = function (associate) {
        var _this = this;
        swal({
            title: 'Excluir!!',
            text: "Deseja mesmo exluir " + associate.name + "?",
            icon: 'warning',
            buttons: ['Não', 'Excluir'],
            closeOnClickOutside: false,
            closeOnEsc: false
        }).then(function (hasConfirmed) {
            if (hasConfirmed) {
                _this.InitLoad("Excluindo " + associate.name);
                _this.associateService.delete(associate.id)
                    .subscribe(function () {
                    _this.EndLoad();
                    swal({ title: 'Sucesso', text: associate.name + " excluido com sucesso", icon: 'info' });
                    _this.loadAssociates();
                }, function (error) {
                    _this.EndLoad();
                    console.log(error);
                });
            }
        });
    };
    AssociateComponent.prototype.bankChanged = function (bankCode) {
        this.associate.bankCode = Number(bankCode);
        this.associate.bankName = this.banks[bankCode];
    };
    AssociateComponent.prototype.insert = function (associate) {
        var _this = this;
        this.InitLoad("Inserindo o associado " + associate.name + "...");
        this.associateService.post(associate)
            .subscribe(function (ret) {
            _this.EndLoad();
            console.log(ret);
            _this.loadAssociates();
            if (ret.status === 'SUCCESS') {
                swal({ title: 'Sucesso', text: associate.name + " cadastrado com sucesso", icon: 'success' });
            }
            else if (ret.status === 'INVALID') {
                swal({ title: 'Inválido', text: ret.message, icon: 'error' });
            }
            else {
                swal({ title: 'Erro no servidor', text: ret.message, icon: 'error' });
            }
        }, function (error) {
            _this.EndLoad();
            console.log(error);
        });
    };
    AssociateComponent.prototype.update = function (associate) {
        var _this = this;
        this.InitLoad("Alterando o associado " + associate.name + "...");
        this.associateService.put(associate)
            .subscribe(function (ret) {
            _this.EndLoad();
            console.log(ret);
            _this.loadAssociates();
            if (ret.status === 'SUCCESS') {
                swal({ title: 'Sucesso', text: associate.name + " alterado com sucesso", icon: 'success' });
            }
            else if (ret.status === 'INVALID') {
                swal({ title: 'Inválido', text: ret.message, icon: 'error' });
            }
            else {
                swal({ title: 'Erro no servidor', text: ret.message, icon: 'error' });
            }
        }, function (error) {
            _this.EndLoad();
            console.log(error);
        });
    };
    AssociateComponent.prototype.submitForm = function () {
        if (this.associate.id && this.associate.id > 0) {
            this.update(this.associate);
        }
        else {
            this.insert(this.associate);
        }
    };
    AssociateComponent.prototype.confirmClose = function () {
        var _this = this;
        swal({
            title: 'Confirmar fechamento',
            text: "Se a tela for fechada as altera\u00E7\u00F5es ser\u00E3o perdidas... Gostaria de prosseguir? ",
            icon: 'warning',
            buttons: ['Não', 'Sim, fechar'],
            closeOnClickOutside: false,
            closeOnEsc: false
        }).then(function (hasConfirmed) {
            if (hasConfirmed) {
                _this.modalElement.modal('hide');
                _this.associate = new _models_associate__WEBPACK_IMPORTED_MODULE_2__["Associate"]();
            }
        });
    };
    AssociateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./associate.component.html */ "./src/app/register/associate.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_associate_service__WEBPACK_IMPORTED_MODULE_3__["AssociateService"]])
    ], AssociateComponent);
    return AssociateComponent;
}(_services_load_service__WEBPACK_IMPORTED_MODULE_4__["LoadService"]));



/***/ }),

/***/ "./src/app/services/associate.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/associate.service.ts ***!
  \***********************************************/
/*! exports provided: AssociateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociateService", function() { return AssociateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AssociateService = /** @class */ (function () {
    function AssociateService(http) {
        this.http = http;
        this.urlServer = 'http://localhost:8080/associate';
    }
    AssociateService.prototype.get = function (id) {
        var url = this.urlServer;
        if (id) {
            url = url + '/' + id;
        }
        return this.http.get(url);
    };
    AssociateService.prototype.post = function (body) {
        return this.http.post(this.urlServer, body);
    };
    AssociateService.prototype.put = function (body) {
        return this.http.put(this.urlServer, body);
    };
    AssociateService.prototype.delete = function (id) {
        var url = this.urlServer;
        if (id) {
            url += '/' + id;
        }
        return this.http.delete(url);
    };
    AssociateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AssociateService);
    return AssociateService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.urlServer = 'http://localhost:8080/';
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(this.urlServer + 'login', { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/load.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/load.service.ts ***!
  \******************************************/
/*! exports provided: LoadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadService", function() { return LoadService; });
var LoadService = /** @class */ (function () {
    function LoadService() {
        this.templ = "<div id=\"loader\">\n    <div class=\"loader-body\">\n        <div class=\"loader-body-header\">\n            <span class=\"text\">Carregando, Aguarde</span>\n        </div>\n        <center>\n            <div class=\"loader-circle\" id=\"loading-indicator\"></div>\n        </center>\n    </div>\n</div>";
    }
    LoadService.prototype._createElement = function () {
        try {
            if ($('body').children('div#loader').length === 0) {
                $('div#loader').remove();
                $('body').append($(this.templ));
            }
        }
        catch (error) {
            console.log('Ocorreu um erro ao criar o elemento de loader');
            console.error(error);
        }
    };
    LoadService.prototype._destroyElement = function () {
        try {
            $('#loader').remove();
        }
        catch (error) {
            console.log('Ocorreu um erro ao remover o elemento de loader');
            console.error(error);
        }
    };
    LoadService.prototype.InitLoad = function (message) {
        try {
            this._createElement();
            $('#loader>.loader-body>.loader-body-header>.text').html(message);
        }
        catch (error) {
            console.log('Ocorreu um erro ao preencher os dados da mensagem "' + message + '"');
            console.error(error);
        }
    };
    LoadService.prototype.EndLoad = function () {
        this._destroyElement();
    };
    return LoadService;
}());



/***/ }),

/***/ "./src/app/storages/auth.storage.ts":
/*!******************************************!*\
  !*** ./src/app/storages/auth.storage.ts ***!
  \******************************************/
/*! exports provided: AuthStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStorage", function() { return AuthStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthStorage = /** @class */ (function () {
    function AuthStorage(router) {
        this.router = router;
    }
    AuthStorage.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthStorage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthStorage);
    return AuthStorage;
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

module.exports = __webpack_require__(/*! C:\Projetos\Web\clubecampestre\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map