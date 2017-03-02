"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var produtos = [
            { codigo: 1, descricao: 'teste', grupo: 1, subgrupo: 2, especie: 'testse', estoque: 25 },
            { codigo: 2, descricao: 'produto perecivel', grupo: 1, subgrupo: 2, especie: 'testse', estoque: 25 },
            { codigo: 3, descricao: 'teste', grupo: 1, subgrupo: 2, especie: 'testse', estoque: 25 },
            { codigo: 4, descricao: 'teste', grupo: 1, subgrupo: 2, especie: 'testse', estoque: 25 },
        ];
        return { produtos: produtos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory.service.js.map