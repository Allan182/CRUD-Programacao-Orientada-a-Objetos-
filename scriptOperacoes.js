
import { Pessoa } from './Pessoa.js';


var vetContatos;

export function carregadorDados() {

    vetContatos = [new Pessoa("Allan", "Rua Pedro Gasparini", "99885-9003", "13268107745", "23/08/2002"),
    new Pessoa("Elder", "Itapuã", "99959-1247", "12186108875", "23/05/1974"),
    new Pessoa("Zoroastro", "Maracanã", "99712-5413", "13245612305", "13/09/1990")];

}

export function excluirContato(nomeContato) {

    let indContato = vetContatos.findIndex(contato => contato.nome == nomeContato); // Retorna -1 Se não existir 

    if (indContato == -1) {
        return false;
    }

    vetContatos.splice(indContato, 1);

    return true;

}

export function pesquisarContato(nomeContato) {


    let contato = null;  //retorna null se produto não foi cadastrado

    for (let i = 0; i < vetContatos.length && contato == null; i++) {
        if (vetContatos[i].nome == nomeContato) {
            contato = vetContatos[i];
        }
    }
    return contato;
}

export function cadastrarContato(nomeContato, enderecoContato, telefoneContato, cpfContato, dataNascContato) {

    let temContato = pesquisarContato(nomeContato);

    if (temContato == null) {
        let contato = new Pessoa(nomeContato, enderecoContato, telefoneContato, cpfContato, dataNascContato);
        vetContatos.push(contato);
        return true;
    }
    return false;

}

export function alterarEndereco(nomeContato, _endereco) {

    let endereco = pesquisarContato(nomeContato);

    if (endereco != null) {
        endereco.endereco = _endereco;
    }

    return endereco;

}

export function alterarTelefone(nomeContato, _telefone) {

    let contato = pesquisarContato(nomeContato);

    if (contato != null) {
        contato.telefone = _telefone;
    }
    return contato;
}

export function consultarContato(nomeContato) {

    let contato = pesquisarContato(nomeContato);
    let saida = "";

    if (contato != null) {
        saida = "Nome do Usuario: " + contato.nome + "\n Endereço:" + contato.endereco + "\n Telefone: " + contato.telefone + "\n CPF: " + contato.cpf + "\n Data Nascimento: " + contato.dataNasc;
    }
    return saida;
}


export function filtrarEndereco(enderecoContato) {

    let saidaEndereco = ""; //  Return Vazio se não existir nenhum contato com o endereço especifico;


    for (let i = 0; i < vetContatos.length; i++) {

        if (vetContatos[i].endereco == enderecoContato) {

            saidaEndereco += " | " + vetContatos[i].nome + " | " + vetContatos[i].endereco + " | " + vetContatos[i].telefone + " | " + vetContatos[i].cpf + " | " + vetContatos[i].dataNasc + " \n";

        }

    }
    return saidaEndereco == "" ? null : saidaEndereco;
}


export function criarTabela() {



    if (vetContatos.length > 0) {

        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");


        thead.appendChild(document.createElement("th")).textContent = "Contato";
        thead.appendChild(document.createElement("th")).textContent = "Endereço";
        thead.appendChild(document.createElement("th")).textContent = "Telefone";
        thead.appendChild(document.createElement("th")).textContent = "CPF";
        thead.appendChild(document.createElement("th")).textContent = "Data Nasc";

        for (let z = 0; z < vetContatos.length; z++) {

            let linha = document.createElement("tr");

            let tdNome = document.createElement("td");
            let tdEndereco = document.createElement("td");
            let tdTel = document.createElement("td");
            let tdCPF = document.createElement("td");
            let tdNasc = document.createElement("td");

            tdNome.textContent = vetContatos[z].nome;
            tdEndereco.textContent = vetContatos[z].endereco;
            tdTel.textContent = vetContatos[z].telefone;
            tdCPF.textContent = vetContatos[z].cpf;
            tdNasc.textContent = vetContatos[z].dataNasc;

            linha.appendChild(tdNome);
            linha.appendChild(tdEndereco);
            linha.appendChild(tdTel);
            linha.appendChild(tdCPF);
            linha.appendChild(tdNasc);

            tbody.appendChild(linha);

        }

        table.appendChild(thead);
        table.appendChild(tbody);

        return table;
    }
    return null;
}