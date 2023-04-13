import { excluirContato, pesquisarContato, cadastrarContato, alterarEndereco, alterarTelefone, filtrarEndereco, consultarContato, carregadorDados, criarTabela }
    from './scriptOperacoes.js';

document.addEventListener("DOMContentLoaded", carregadorDados);

var inNomeContato = document.getElementById("inNomeContato");
var inEnderecoContato = document.getElementById("inEnderecoContato");
var inTelefoneContato = document.getElementById("inTelefoneContato");
var inCpfContato = document.getElementById("inCpfContato");
var inDataNascContato = document.getElementById("inDataNascContato");
var inFiltroEndereco = document.getElementById("inFiltroEndereco");
var selectOpcao = document.getElementById("selectOpcao");
var outSaida = document.getElementById("outSaida");
var btOk = document.getElementById("btOk");
var table = document.querySelector(".table")

btOk.addEventListener("click", executarFunc);



selectOpcao.addEventListener("change", function () {
    let opcao = selectOpcao.value;

    if (opcao != "") {
        verificarOpcao(opcao);
    }
});


document.addEventListener('DOMContentLoaded', function () {

    inNomeContato.disabled = true;
    inNomeContato.value = "";

    inEnderecoContato.disabled = true;
    inEnderecoContato.value = "";

    inTelefoneContato.disabled = true;
    inTelefoneContato.value = "";

    inCpfContato.disabled = true;
    inCpfContato.value = "";

    inDataNascContato.disabled = true;
    inDataNascContato.value = "";

    inFiltroEndereco.disabled = true;
    inFiltroEndereco.value = "";

    inFiltroEndereco.disabled = true;
    inFiltroEndereco.value = "";

    outSaida.textContent = "";
});


function verificarOpcao(opcao) {


    inNomeContato.disabled = true;
    inNomeContato.value = "";

    inEnderecoContato.disabled = true;
    inEnderecoContato.value = "";

    inTelefoneContato.disabled = true;
    inTelefoneContato.value = "";

    inCpfContato.disabled = true;
    inCpfContato.value = "";

    inDataNascContato.disabled = true;
    inDataNascContato.value = "";

    inFiltroEndereco.disabled = true;
    inFiltroEndereco.value = "";

    inFiltroEndereco.disabled = true;
    inFiltroEndereco.value = "";

    outSaida.textContent = "";


    switch (opcao) {


        case "Cadastrar-Contato":

            inNomeContato.disabled = false;
            inNomeContato.placeholder = "Ex: Allan Furlani";
            inNomeContato.value = "";

            inEnderecoContato.disabled = false;
            inEnderecoContato.placeholder = "Ex: Itapuã";
            inEnderecoContato.value = "";

            inTelefoneContato.disabled = false;
            inTelefoneContato.placeholder = "Ex: (XX) XXXX- XXXX";
            inTelefoneContato.value = "";

            inCpfContato.disabled = false;
            inCpfContato.value = "";
            inCpfContato.placeholder = "Ex: 13268107745"

            inDataNascContato.disabled = false;
            inDataNascContato.placeholder = "Ex: 23/08/2002";
            inDataNascContato.value = "";


            inFiltroEndereco.disabled = false;
            inFiltroEndereco.placeholder = "Ex: Rua dos Pardais";
            inFiltroEndereco.value = "";

            break;

        case "Excluir-Contato":

            inNomeContato.disabled = false;
            inNomeContato.placeholder = "Ex: Allan Furlani";
            inNomeContato.value = "";

            break;

        case "Alterar-Endereco":

            inNomeContato.disabled = false;
            inNomeContato.placeholder = "Ex: Allan Furlani";
            inNomeContato.value = "";

            inEnderecoContato.disabled = false;
            inEnderecoContato.placeholder = "Ex: Itapuã";
            inEnderecoContato.value = "";

            break;

        case "Alterar-Telefone":

            inNomeContato.disabled = false;
            inNomeContato.placeholder = "Ex: Allan Furlani";
            inNomeContato.value = "";
            inTelefoneContato.disabled = false;
            inTelefoneContato.placeholder = "Ex: (XX) XXXX- XXXX";
            inTelefoneContato.value = "";

            break;

        case "Exibir-Contato":

            inNomeContato.disabled = false;
            inNomeContato.placeholder = "Ex: Allan Furlani";
            inNomeContato.value = "";
            break;
        case "Filtrar-Endereço":

            inEnderecoContato.disabled = false;
            inEnderecoContato.placeholder = "Ex: Itapuã";
            inEnderecoContato.value = "";
            break;

    }
}


function executarFunc() {

    let opcao = selectOpcao.value;

    switch (opcao) {

        case "Cadastrar-Contato":

            if (inNomeContato.value == "") {
                outSaida.style.color = "red";
                outSaida.textContent = "Campo Nome Vazio";
                inNomeContato.focus();
            } else {
                if (inCpfContato.value == "") {
                    outSaida.style.color = "red";
                    outSaida.textContent = "Campo CPF Vazio";
                    inCpfContato.focus();
                } else {
                    if (inDataNascContato.value == "") {
                        outSaida.style.color = "red";
                        outSaida.textContent = "Campo Data Nascimento Vazio";
                        inDataNascContato.focus();
                    }
                    else {
                        if (pesquisarContato(inNomeContato.value) == null) {

                            cadastrarContato(inNomeContato.value, inEnderecoContato.value, inTelefoneContato.value, inCpfContato.value, inDataNascContato.value);
                            outSaida.style.color = "blue";
                            outSaida.textContent = "Contato Cadastrado!";

                        } else {
                            outSaida.style.color = "red";
                            outSaida.textContent = "Erro! o Contato Já Existe!";
                        }
                    }
                }
            }
            break;


        case "Excluir-Contato":

            if (inNomeContato.value == "") {
                outSaida.style.color = "red";
                outSaida.textContent = "Contato Não Inserido!";
                inNomeContato.focus()
            } else {

                if (pesquisarContato(inNomeContato.value) != null) {
                    excluirContato(inNomeContato.value);
                    outSaida.style.color = "blue";
                    outSaida.textContent = "Contato Excluido com Sucesso!";
                } else {
                    outSaida.style.color = "red";
                    outSaida.textContent = "Contato não encontrado!";
                }
            }

            break;

        case "Alterar-Endereco":
            if (inEnderecoContato.value == "") {
                outSaida.style.color = "red";
                outSaida.textContent = "Ops, digite um Endereço";
                inEnderecoContato.focus();
            } else {
                if (pesquisarContato(inNomeContato.value) != null) {

                    alterarEndereco(inNomeContato.value, inEnderecoContato.value);

                    outSaida.style.color = "blue";
                    outSaida.textContent = "Alterado com Sucesso!!!";

                } else {
                    outSaida.style.color = "red";
                    outSaida.textContent = "O Contato com  Não existe!";
                }
            }
            break;

        case "Alterar-Telefone":

            if (inTelefoneContato.value == "") {
                outSaida.style.color = "red";
                outSaida.textContent = "Ops, digite um Endereço";
                inTelefoneContato.focus();
            } else {
                if (pesquisarContato(inNomeContato.value) != null) {

                    alterarTelefone(inNomeContato.value, inTelefoneContato.value);

                    outSaida.style.color = "blue";
                    outSaida.textContent = "Alterado com Sucesso!!!";

                } else {
                    outSaida.style.color = "red";
                    outSaida.textContent = "O Contato com  Não existe!";
                }
            }
            break;

        case "Exibir-Contato":
            if (inNomeContato.value == "") {
                outSaida.style.color = "red";
                outSaida.textContent = "Contato Não Inserido!";
                inNomeContato.focus()
            } else {
                if (pesquisarContato(inNomeContato.value) != null) {
                    let z = consultarContato(inNomeContato.value);
                    outSaida.textContent = z;
                }
                else {
                    outSaida.style.color = "red";
                    outSaida.textContent = "O Contato com  Não existe!";
                }
            }
            break;

        case "Filtrar-Endereço": // Corrigir Filtrar Endereço !
            if (inEnderecoContato.value == "") {
                outSaida.style.color = "red";
                outSaida.textContent = "Ops! Digite um Endereço !!!";
                inEnderecoContato.focus();
            } else {
                if (filtrarEndereco(inEnderecoContato.value) == null) {
                    outSaida.style.color = "red";
                    outSaida.textContent = "Ops! Nenhum Contato com este Endereço !!!";
                } else {
                    let saida = filtrarEndereco(inEnderecoContato.value);
                    outSaida.textContent = saida;
                }
            }
            break;

        case "Listar-Tabela":

            table.textContent = "";

            let tabela = criarTabela();

            if (tabela != null) {
                table.appendChild(tabela);
            }
            break;

    }
}
