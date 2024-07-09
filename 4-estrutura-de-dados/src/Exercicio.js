import leia from 'readline-sync';
const atividades = ['Atividade 01', 'Atividade 02', 'Atividade 03', 'Atividade 04', 'Atividade 05', 'Atividade 06', 'Atividade 07'];
var Opcao = leia.keyInSelect(atividades, 'Escolha uma atividade:')
switch (Opcao) {
    case 0:
        Atividade1()
        break;
    case 1:
        Atividade2()
        break;
    case 2:
        Atividade3()
        break;
    case 3:
        Atividade4()
        break;
    case 4:
        Atividade5()
        break;
    case 5:
        Atividade6()
        break;
    case 6:
        Atividade7()
        break;
    default:
        console.log("Voce escolheu sair");
        break;
}

function Atividade1() {
    var lista = [];
    var lista2 = [];
    for (let i = 0; i < 10; i++) {
        var numero = leia.questionInt("INFORME UM VALOR: ");
        lista[i] = numero;
    }
    for (var valor of lista) {
        lista2[i] = valor * 5;
    }
    for (var valor of lista) {
        console.log(valor)
    }
    console.log("------------------")
    for (var valor of lista) {
        console.log(valor)
    }
}
function Atividade2() {
    var numeros = [];
    var soma = 0;
    for (let i = 0; i < 5; i++) {
        numeros[i] = leia.questionInt("INFORME UM VALOR: ");
    }
    numeros.forEach(valor => soma += valor);
    numeros.forEach(valor => console.log(valor));
    console.log("Soma = " + soma);
}

function Atividade3() {
    var numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros[i] = leia.questionInt("INFORME UM VALOR: ");
    }
    for (var valor of numeros) {
        if (valor % 2 == 0) {
            console.log(valor)
        }
    }
}

function Atividade4() {
    var numeros = [];
    var maior = [];
    for (let i = 0; i < 15; i++) {
        numeros[i] = leia.questionInt("INFORME UM VALOR: ");
    }
    for (var valor of numeros) {
        if (valor >= 10) {
            maior.push(valor)
        }
    }
    maior.forEach(valor => console.log(valor));
}

function Atividade5() {
    var numeros = [];
    var auxiliar = [];
    for (let i = 0; i < 5; i++) {
        numeros[i] = leia.questionInt("INFORME UM VALOR: ");
    }

    for (var i = numeros.length - 1; i >= 0; i--) {
        auxiliar.push(numeros[i]);
    }
    auxiliar.forEach(Valor => console.log(Valor))

}

function Atividade6() {
    var TempMax = [];
    var TempMin = [];
    for (var i = 0; i < 30; i++) {
        var temp1 = parseInt(Math.random() * 23) + 12;
        var temp2 = parseInt(Math.random() * 23) + 12;

        if(temp1 > temp2){
            TempMax[i] = temp1
            TempMin[i] = temp2
        }else{
            TempMax[i] = temp2
            TempMin[i] = temp1
        }
    }
    console.log(TempMax)
    console.log(TempMin)
}

function Atividade7() {
    var Pai = []
    var Mae = []
    var Filho = []
    for (var i = 0; i < 50; i++) {
        Pai.push(parseInt(Math.random() * 100)+20)
        Mae.push(parseInt(Math.random() * 100)+10)
    }
    for (var i = 0; i < 50; i++) {
        if(i % 2 === 0){
            Filho.push(Pai[i]) 
        }else{
            Filho.push(Mae[i]) 
        }
    }
    console.log(Pai)
    console.log(Mae)
    console.log(Filho)

}