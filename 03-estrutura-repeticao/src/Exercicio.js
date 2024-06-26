import leia from "readline-sync"
const formatador = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

console.log("SELECIONE A ATIVIDADE: ");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");
console.log("Sair");
var Opcao = Number(leia.prompt())
console.log("")
switch (Opcao) {
    case 1:
        Atividade1()
        break;
    case 2:
        Atividade2()
        break;
    case 3:
        Atividade3()
        break;
    case 4:
        Atividade4()
        break;
    case 5:
        Atividade5()
        break;
    case 6:
        Atividade6()
        break;
    case 7:
        Atividade7()
        break;
    case 8:
        Atividade8()
        break;
    case 9:
        Atividade9()
        break;
    case 10:
        Atividade10()
        break;
    default:
        console.log("Voce escolheu sair");
        break;
}

function Atividade1() {
    var numero = leia.questionInt("INFORME O NUMERO: ");
    for (var i = 0; i <= numero; i++) {
        console.log("Numero: " + i);
    }
}
function Atividade2() {
    var numero = leia.questionInt("INFORME O NUMERO: ");
    for (var i = numero; i >= 0; i--) {
        console.log("Numero: " + i);
    }
}
function Atividade3() {
    for (var i = 1000; i <= 1999; i++) {
        if (i % 11 === 5) {
            console.log("Numero: " + i + " / 11 = 5");
        }
    }
}
function Atividade4() {
    for (var i = 0; i <= 15; i++){
        var Valor = leia.questionInt("Informe " + i + ": ")
        if(i == 0){
            var maior = Valor;
            var menor = Valor;
        }
        if(Valor > maior){
            maior = Valor;
        }
        if(Valor < menor){
            menor = Valor;            
        }
        
    }
    console.log("MENOR NUMERO E " + menor)
    console.log("MAIOR NUMERO E " + maior)
}

function Atividade5(){
    for (var i = 1; i <= 500; i++){
        var Preco = i * 0.33;
        console.log(i + " copia custa: " + formatador.format(Preco))
    }
}

function Atividade6() {
    var numero = leia.questionInt("INFORME UM NUMERO: ")
    for(var i = 1; i <= 10; i++){
        console.log(numero + " X " + i + " = " + (numero * i))
    }
}
function Atividade7() {
    for (var i = 10; i <= 1000; i++){
        if(i <= 500){
            console.log("Numero: " + i)
        }else if(i >= 900 && i <= 1000){
            console.log("Numero: " + i)
        }
    }    
}
function Atividade8() {
    var par = 1;
    var impar = 0;
    for (let i = 0; i < 6; i++) {        
        var numero = leia.questionInt("INFORME NUMERO: ");
        if (i % 2 === 0) {
            par *= numero;
        }else{
            impar += numero;
        }
    }
    console.log("PAR: " + par)
    console.log("IMPAR: " + impar)    
}

function Atividade9() {
    var contador = 0 
    do {
        var num = leia.questionInt("INFORME UM NUMERO: ");
        if(num > 100 && num < 200){
            contador++
        }
    } while(num !== 0);
    console.log("FORAM DIGITATO " + contador + " ENTRE 100 E 200")

}
function Atividade10() {
    var Valentina = 1.50;
    var Joao = 1.40;
    var ano=0;
    while(Valentina >= Joao ){
        Valentina += 0.02
        Joao += 0.03
        ano ++
        
    }
    console.log("Valentina " + Valentina.toFixed(2))
    console.log("Joao " + Joao.toFixed(2))
    console.log("DEMORA " + ano + " PARA JOAO FICAR MAIOR QUE VALENTINA")
    
}