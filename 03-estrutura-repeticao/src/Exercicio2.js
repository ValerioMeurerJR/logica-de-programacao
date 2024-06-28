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
    default:
        console.log("Voce escolheu sair");
        break;
}

function Atividade1(){
    var generoM = 0;
    var generoF = 0;
    var AlturaMaior;
    var AlturaMenor;
    var AlturaF = 0;
    var Porcentual;
    var mediaAltura = 0;
    for(var i = 0; i < 10; i++){
        var Altura = leia.questionFloat("INFORME A ALTURA: ");  
        var opcao = leia.questionInt("INFORME 0 P/ MASC E 1 P/ FEM: ")      
        switch (opcao) {
            case 0:
                generoM++;
                break;
            case 1:
                generoF++;
                AlturaF += Altura;
                break;        
            default:
                console.log("OPÇÃO INCORRETA.");
                return;
        }     
        Porcentual = generoM * (100 / 10)   
        mediaAltura += Altura
        if(i === 0){            
            AlturaMaior = Altura;
            AlturaMenor = Altura;
        }
        if(AlturaMaior <= Altura){
            AlturaMaior = Altura;
        }
        if(AlturaMenor >= Altura){
            AlturaMenor = Altura;
        }
    }
    console.log("MAIOR ALTURA: " + AlturaMaior);
    console.log("MENOR ALTURA: " + AlturaMenor);
    console.log("QNT DE MULHER: " + generoF);
    console.log("MEIDA ALTURA DA POPULAÇÃO: " + (mediaAltura / 10));
    console.log("MEDIA DE ALTURA: " + (AlturaF / generoF));
    console.log("Porcentual: " + Porcentual);
}


function Atividade2(){
    var modo = leia.keyInSelect(["PVP", "PVE"],"ESCOLHA UMA DOS MODOS")
    var NMagico;
    switch (modo) {
        case 0:      
            NMagico = leia.questionInt("INFORME O NUMERO MAGICO: ",{hideEchoBack: true});
            break;
        case 1: 
            var Dificuldade = leia.keyInSelect(["FACIL", "MEDIO", "DIFICIL", "EXTREMO"],"ESCOLHA UMA DOS MODOS") + 2
            var Aleatorio = Math.random();
            var multi = Math.pow(10, Dificuldade);
            Aleatorio = Aleatorio * multi;
            NMagico = Math.floor(Aleatorio);
            break;    
        default:
            return;
    }    
    var valor;
    var cont = 0;
    var enquanto = true
    while(enquanto){
        cont++;
        valor = leia.questionInt("DIGITE O PALPITE: ");
        if(valor != NMagico){
            if(valor < NMagico){
                console.log("O NUMERO INFORMADO E MENOR QUE O NUMERO MAGICO");
            } else if(valor > NMagico){
                console.log("O NUMERO INFORMADO E MAIOR QUE O NUMERO MAGICO");
            }
        }else{
            console.log("PARABENS VOCE ACERTO: " + NMagico);
            console.log("VOCE ACERTO EM : " + cont + " TENTATIVAS");
            enquanto = false
        }

    }


}
function Atividade3(){
    var numero = leia.questionInt("DIGITE ATE QUAL VALOR QUER: ")
    var anterior = 1;
    var atual = 1;
    var proximo;
    var resultado = "1 - 1"
    for(var i = 2; i < numero; i++){
        proximo = anterior + atual;
        anterior = atual;
        atual=proximo
        resultado = resultado + " - " +  proximo
    }
    console.log(resultado)
}
function Atividade4(){
    var numero = leia.questionInt("DIGITE UM NUMERO: ")
    var resultado = 1
    while(numero > 0){
        resultado = resultado * numero
        numero--;
    }
    console.log("FATORIAL E: " + resultado)
}
function Atividade5(){
    var numero = leia.questionInt("INFORME UM NUMERO: ");
    var Binario = ""
    do{
        Binario = (numero % 2) + Binario 
        numero =  parseInt(numero / 2 )   
    } while (numero >= 1)
        Binario = numero + Binario 
        console.log(Binario)
}

function Atividade6(){
    var cont= 0
    var notaMedia = 0;
    var mediaturma = 0;
    var melhorestudante = 0;
    var nomemelhorestudante;
    for(var i = 0; i < 2; i++){
        var Nome = leia.question("INFORME O NOME: ");        
        for(var e = 0; e < 3; e++){
            var nota = leia.questionFloat("INFORME A " + e + "NOTA: ")
            notaMedia += nota;
            cont++
        }        
        mediaturma += notaMedia;
        console.log(mediaturma)
        var notaM = notaMedia / 3
        notaMedia = 0;
        if(i === 0){
            melhorestudante = notaM
            nomemelhorestudante = Nome;
        }
        if(melhorestudante < notaM){
            melhorestudante = notaM
            nomemelhorestudante = Nome;
        }
    }
    console.log("MEDIA DA TURMA: " + (mediaturma / cont).toFixed(2));
    console.log("MELHOR ESTUDANTE: " + nomemelhorestudante);
    console.log("MEDIA: " + melhorestudante.toFixed(2));
}