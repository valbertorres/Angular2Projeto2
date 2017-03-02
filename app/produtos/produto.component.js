"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var produtos_model_1 = require("./produtos.model");
var produto_service_1 = require("./produto.service");
var common_1 = require("@angular/common");
var ProdutoComponent = (function () {
    function ProdutoComponent(location, produtoService) {
        this.location = location;
        this.produtoService = produtoService;
        this.produtos = [];
    }
    ProdutoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listaprodutos = new produtos_model_1.Produto(null, '', null, null, '', null);
        this.produtoService.getFidAll()
            .then(function (produtos) {
            _this.produtos = produtos;
        }).catch(function (err) { return console.log(err); });
    };
    ProdutoComponent.prototype.getListaProduto = function (produto) {
        this.listaprodutos = produto;
    };
    ProdutoComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProdutoComponent.prototype.log = function (form) {
        console.log(form);
    };
    return ProdutoComponent;
}());
ProdutoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'produto-Component',
        templateUrl: 'produto-component.html',
        styleUrls: [
            'produto.css'
        ]
    }),
    __metadata("design:paramtypes", [common_1.Location,
        produto_service_1.ProdutoService])
], ProdutoComponent);
exports.ProdutoComponent = ProdutoComponent;
//# sourceMappingURL=produto.component.js.map