import { Component, OnInit } from '@angular/core';

import { Produto } from './produtos.model';
import { ProdutoService } from './produto.service';
import { Location } from '@angular/common';

@Component({
    moduleId : module.id,
    selector : 'produto-Component',
    templateUrl : 'produto-component.html',
    styleUrls : [
        'produto.css'
    ]
})
export class ProdutoComponent{

produtos : Produto[]= [];
listaprodutos : Produto

constructor(
    private location : Location,
      private  produtoService : ProdutoService  
){}

    ngOnInit():void{
        this.listaprodutos= new Produto(null,'',null,null,'',null);
        this.produtoService.getFidAll()
        .then((produtos : Produto[]) =>{
            this.produtos = produtos;
        } ).catch(err => console.log(err));

    }

    getListaProduto(produto : Produto):void{
        this.listaprodutos = produto;
    }

    goBack():void{
        this.location.back();
    }

    log(form):void{
        console.log(form);
    }

}




