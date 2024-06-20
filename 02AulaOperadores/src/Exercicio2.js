import leia, { question, questionInt } from "readline-sync"

function Emprestimo() {
    var Valoremprestimo = leia.questionFloat("INFORME O VALOR DO EMPRESTIMO R$: ");
    var Salario = leia.questionFloat("INFORME O SALARIO R$: ");
    var Prestacao = leia.questionInt("INFORME O NUMERO DE PARCELA: ");
    var Parcelas = Valoremprestimo / Prestacao;
    var Trinta = Salario * 0.30

    if (Parcelas <= Trinta) {
        console.log("\nEMPRESTIMO AUTORIAZADO")
        console.log("VALOR DAS PARCELA: R$ " + Parcelas.toFixed(2))
        console.log("VALOR 30% DO SALARIO: R$ " + Trinta.toFixed(2))
    } else {
        console.log("\nEMPRESTIMO NEGADO")
        console.log("VALOR DA PARCELA ULTRAPASSO OS 30%")
        console.log("VALOR DAS PARCELA: R$ " + Parcelas.toFixed(2))
        console.log("VALOR 30% DO SALARIO: R$ " + Trinta.toFixed(2))
    }
}
function Meses() {
    var Mes = leia.questionInt("INFORME O NUMERO DO MES: ");
    switch (Mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("\n31 dias")
            break;
        case 2:
            console.log("\n28 dias")
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("\n30 dias")
            break;
        default:
            console.log("\nMES INVALIDO")
            break;
    }
}
function Calcsalarios() {
    var Nome = leia.question("INFORME O NOME: ");
    var Salario = leia.questionFloat("INFORME O SALARIO: ");
    var Depedentes = leia.questionInt("INFORME QNT DEPEDENTES: ");
    var Composto;
    switch (Depedentes) {
        case 0:
            Composto = Salario * 0.02;
            break;
        case 1:
            Composto = Salario * 0.05;
            break;
        case 2:
            Composto = Salario * 0.07;
            break;
        case 3:
            Composto = Salario * 0.10;
            break;
        default:
            Composto = Salario * 0.15;
            break;
    }
    console.log("NOME DO FUNCIONARIO: " + Nome);
    console.log("SALARIO BASE: " + Salario);
    console.log("QUANTIDADE DE DEPEDENTES: " + Depedentes);
    console.log("BONUS DEPEDENTES: R$ " + Composto);
    console.log("SALARIO TOTAL: R$ " + (Salario + Composto));
}
function Doacao() {
    console.log("SELECIONE UMAS DAS OPÇÃO");
    console.log("1 - DOAR R$ 10,00");
    console.log("2 - DOAR R$ 25,00");
    console.log("3 - DOAR R$ 50,00");
    console.log("4 - OUTRO VALOR");
    var Opcao = Number(leia.prompt())
    var valorDoado;
    switch (Opcao) {
        case 1:
            console.log("VOCE FEZ UMA DOACAO DE R$ 10,00")
            console.log("MUITO OBRIGADO.")
            break;
        case 2:
            console.log("VOCE FEZ UMA DOACAO DE R$ 25,00")
            console.log("MUITO OBRIGADO.")
            break;
        case 3:
            console.log("VOCE FEZ UMA DOACAO DE R$ 50,00")
            console.log("MUITO OBRIGADO.")
            break;
        case 4:
            valorDoado = leia.questionFloat("INFORME O VALOR: R$ ")
            console.log("VOCE FEZ UMA DOACAO DE R$ " + valorDoado)
            console.log("MUITO OBRIGADO.")
            break;
        default:
            console.log("Opção invalida.")
    }
}
function Partida() {
    var timeA = leia.questionInt("INFORME A QNT GOLS TIME A: ");
    var timeB = leia.questionInt("INFORME A QNT GOLS TIME B: ");
    var diferenca = Math.abs(timeA - timeB);
    switch (diferenca) {
        case 0:
            console.log("EMPATE");
            break;
        case 1:
        case 2:
        case 3:
            console.log("JOGO NORMAL");
            break;
        default:
            console.log("GOLEADA");
            break;
    }
}
Idade()
function Idade() {
    var idade = leia.questionInt("INFORM A IDADE: ");
    if (idade < 18) {
        var permissao = questionInt("SEUS PAIS PERMITIRAM A VIAGEM: \n 1 - SIM\n 2 - NAO\n")
        if (permissao === 1) {
            var nome = leia.question("INFORME SEU NOME: ")
            console.log("VOCE PODE VIAJAR TRANQUILO ".nome)
        } else if (permissao === 2) {
            console.log("NAO TEM PERMISSAO PARA VIAJAR  ")
        } else {
            console.log("OPCAO INVALIDA")
        }
    } else {
        var nome = leia.question("INFORME SEU NOME: ")
        console.log("VOCE PODE VIAJAR TRANQUILO ".nome)
    }
}
