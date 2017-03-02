import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Produto} from './produtos/produtos.model';

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
            let produtos :  Produto[] = [
            {codigo:1, descricao:'teste', grupo:1, subgrupo:2,especie:'testse', estoque:25},
             {codigo:2, descricao:'produto perecivel', grupo:1, subgrupo:2,especie:'testse', estoque:25},
              {codigo:3, descricao:'teste', grupo:1, subgrupo:2,especie:'testse', estoque:25},
               {codigo:4, descricao:'teste', grupo:1, subgrupo:2,especie:'testse', estoque:25},
            
            ]
            return {produtos}
    }
}