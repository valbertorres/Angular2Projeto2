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

private tabPaine:boolean = false;



produtos : Produto[]= [];
listaprodutos : Produto;
private testeLink:{};

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
        this.cadastroProduto();
       
    }
    
    cadastroProduto():void{
    $(function(){
          $('#cadastro').addClass('active');
        $('#lista').removeClass('active');
    })
        this.tabPaine = true;
    }

     novoProduto():void{
         this.listaprodutos= new Produto(null,'',null,null,'',null);
    $(function(){
          $('#cadastro').addClass('active');
        $('#lista').removeClass('active');
    })
        this.tabPaine = true;
    }


    listaProduto():void{
    $(function(){
          $('#lista').addClass('active');
        $('#cadastro').removeClass('active'); 
    })
        this.tabPaine = false;
    }

    goBack():void{
        this.location.back();
    }

    log(form):void{
        console.log(form);
    }

}



