"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var homePage_component_1 = require("./homePage.component");
var produto_component_1 = require("./../produtos/produto.component");
var homepageRoutes = [
    {
        path: 'home',
        component: homePage_component_1.HomePageComponent
    },
    {
        path: 'home/produto',
        component: produto_component_1.ProdutoComponent
    }
];
var homePageRoutigModule = (function () {
    function homePageRoutigModule() {
    }
    return homePageRoutigModule;
}());
homePageRoutigModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(homepageRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], homePageRoutigModule);
exports.homePageRoutigModule = homePageRoutigModule;
//# sourceMappingURL=home-page-routing.module.js.map