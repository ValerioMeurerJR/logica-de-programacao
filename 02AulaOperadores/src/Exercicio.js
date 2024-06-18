import leia from "readline-sync"

console.log("SELECIONE O EXECICIO");
console.log("1 - Validar Senha");
console.log("2 - Validar Se Par");
console.log("3 - Placa");
console.log("4 - PDV");
console.log("5 - Clientes");
console.log("6 - Cofrinho");
console.log("7 - Sair");
var Opcao = Number(leia.prompt())
console.log("")
switch (Opcao) {
    case 1:
        ValidarSenha()
        break;
    case 2:
        ValidarSePar()
        break;
    case 3:
        Placa()
        break;
    case 4:
        PDV()
        break;
    case 5:
        Clientes()
        break;
    case 6:
        Cofrinho()
        break;
    default:
        console.log("Voce escolheu sair");
        break;
}

function ValidarSenha() {
    var Pass = leia.question("Informe a senha: ");
    if (Pass === "1234") {
        console.log("ACESSO PERMITIDO");
    } else {
        console.log("ACESSO NEGADO");
    }
}
function ValidarSePar() {
    var Numero = leia.questionInt("Informe o numero: ");
    var Result = (Numero % 2)
    if (Result === 0) {
        console.log("O NUMERO " + Numero + " E PAR");
    } else {
        console.log("O NUMERO " + Numero + " E IMPAR");
    }
}
function Placa() {
    var Placa = leia.question("INFORME A PLACA: ")
    var UltimoDigito = Placa.charAt(Placa.length - 1)
    switch (UltimoDigito) {
        case "0":
        case "1":
            console.log("não pode rodar na segunda-feira");
            break;
        case "2":
        case "3":
            console.log("não pode rodar na terça-feira");
            break;
        case "4":
        case "5":
            console.log("não pode rodar na quarta-feira");
            break;
        case "6":
        case "7":
            console.log("não pode rodar na quinta-feira");
            break;
        case "8":
        case "9":
            console.log("não pode rodar na sexta-feira");
            break;
        default:
            console.log("Digito invalido")
    }
}
function PDV() {
    var preco;
    var Quantidade = leia.questionInt("INFORME QUANTIDADE DE MACA: ");
    if (Quantidade <= 12) {
        preco = 0.30;
    } else {
        preco = 0.25;
    }
    var Total = Quantidade * preco;
    console.log("Total R$ " + Total.toFixed(2));
}
function Clientes() {

    var Cliente1 = leia.question("INFORME O NOME DO CLIENTE 1: ");
    var Total1 = leia.questionFloat("INFORME O VALOR DA COMPRA CLIENTE 1 R$: ");
    var Cliente2 = leia.question("INFORME O NOME DO CLIENTE 2: ");
    var Total2 = leia.questionFloat("INFORME O VALOR DA COMPRA CLIENTE 2 R$: ");
    var SomaTotal = Total1 + Total2;
    var Media = SomaTotal / 2
    console.log("")
    console.log("")
    console.log("TOTAL PAGO PELOS DOIS CLIENTES: R$ " + SomaTotal);
    console.log("MÉDIO DAS COMPRAS EFETUADAS: R$ " + Media);
    if (Total1 >= 20) {
        console.log("Cliente " + Cliente1 + " Gasto mais de R$ 20,00")
    }
    if (Total2 >= 20) {
        console.log("Cliente " + Cliente2 + " Gasto mais de R$ 20,00")
    }
}
function Cofrinho() {
    var ValorProduto = leia.questionFloat("INFORME O VALOR DO PRODUTO: ");
    var MoedaReal = leia.questionInt("INFORME N MOEDAS DE 1 REAL: ");
    var Moeda50 = leia.questionInt("INFORME N MOEDAS DE 50 CENTAVOS: ");
    var Moeda25 = leia.questionInt("INFORME N MOEDAS DE 25 CENTAVOS: ");
    var Moeda10 = leia.questionInt("INFORME N MOEDAS DE 10 CENTAVOS: ");
    var Moeda5 = leia.questionInt("INFORME N MOEDAS DE 5 CENTAVOS: ");

    var Moeda50 = Moeda50 * 0.5
    var Moeda25 = Moeda25 * 0.25
    var Moeda10 = Moeda10 * 0.1
    var Moeda5 = Moeda5 * 0.05

    var TotalCofrinho = MoedaReal + Moeda50 + Moeda25 + Moeda10 + Moeda5
    if (TotalCofrinho >= ValorProduto) {
        console.log("/nVoce tem R$ " + TotalCofrinho + " no cofrinho,")
        console.log("e o suficiente para comprar o produto R$ " + ValorProduto)
    } else {
        console.log("Voce tem R$ " + TotalCofrinho + "no cofrinho,")
        console.log("não e o suficiente para comprar o produto R$ " + ValorProduto)
    }
}
