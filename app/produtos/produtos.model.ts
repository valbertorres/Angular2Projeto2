export class Produto{

    constructor(
        public codigo: number,
        public descricao: string,
        public grupo: number,
        public subgrupo: number,
        public especie:string,
        public estoque:number
    ){}
}