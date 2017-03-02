import { Injectable } from '@angular/core'
import { Produto } from './produtos.model';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Http, Headers, Response } from '@angular/http'


@Injectable()
export class ProdutoService{

    private produtoUrl : string = 'app/produtos';

    constructor(
        private http : Http
    ){}

    getFidAll(): Promise<Produto[]>{
        return this.http.get(this.produtoUrl)
        .toPromise()
        .then(response => response.json().data as Produto[])
        .catch()
    }

    private handle(err : any ) : Promise<any>{
        console.log('err',err);
        return Promise.reject(err.mesage || err);
    }
}