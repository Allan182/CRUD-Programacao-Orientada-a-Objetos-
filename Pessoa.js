export class Pessoa {

    #nome;
    #endereco;
    #telefone;
    #cpf;
    #dataNasc;

    constructor(nome, endereco = "", telefone = "(XX) XXXX - XXXX", cpf, dataNasc) {
        this.#nome = nome;
        this.#endereco = endereco;
        this.#telefone = telefone;
        this.#cpf = cpf;
        this.#dataNasc = dataNasc;
    }

    get nome() {
        return this.#nome;
    }

    get endereco() {
        return this.#endereco;
    }

    set endereco(_endereco) {
        this.#endereco = _endereco.toUpperCase();
    }

    get telefone() {
        return this.#telefone;
    }

    set telefone(_telefone) {
        this.#telefone = _telefone;
    }

    get cpf() {
        return this.#cpf;
    }

    get dataNasc() {
        return this.#dataNasc;
    }



}