import leia from 'readline-sync';
const atividades = ['Atividade 01', 'Atividade 02', 'Atividade 03', 'Atividade 04', 'Atividade 05', 'Atividade 06'];
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
    default:
        console.log("Voce escolheu sair");
        break;
}

function Atividade1() {

}
function Atividade2() {

}

function Atividade3() {

}

function Atividade4() {

}

function Atividade5() {

}

function Atividade6() {

}
