export class Galeria {
    public nome:string;
    public descricao:string;
    public imgCapa:string;
    public dataCriacao:Date;

    constructor(){
        this.nome = ""
        this.descricao = ""
        this.imgCapa = ""
        this.dataCriacao = new Date;
    }
}
