import leia from "readline-sync";

var Valor1 = leia.questionFloat("Informe Valor 1: ");
var Valor2 = leia.questionFloat("Informe Valor 2: ");
var Valor3 = leia.questionFloat("Informe Valor 3: ");
var Valor4 = leia.questionFloat("Informe Valor 4: ");
var Valor5 = leia.questionFloat("Informe Valor 5: ");

var soma = Valor1 + Valor2 + Valor3 + Valor4 + Valor5;
var desconto = soma * 0.25;
var arrecadado = soma - desconto;

console.log("");
console.log("Valor total R$: " + soma.toFixed(2));
console.log("Desconto 25% R$: " + desconto.toFixed(2));
console.log("Arrecadado R$: " + arrecadado.toFixed(2));