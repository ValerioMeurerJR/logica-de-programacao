import leia from 'readline-sync';


var NomeCompleto = ["Valerio", "Meurer", "Junior"]
NomeCompleto.push("Jose")
NomeCompleto.push("Aloisio")
NomeCompleto.push("Meurer")
NomeCompleto.push("Neto")
NomeCompleto.push("Rosana")

for (let i = 0; i < NomeCompleto.length; i++) {
    console.log(NomeCompleto[i])
}

console.log(NomeCompleto)

// var NomeCompleto = [["Valerio", "Meurer", "Junior"], ["Jose", "Aloisio", "Meurer", "Neto"], ["Rosana"]]

// for (let o = 0; o < NomeCompleto.length; o++) {
//     for (let i = 0; i < NomeCompleto[o].length; i++) {
//         console.log(NomeCompleto[o][i])
//     }
//     console.log("\n")
// }
// console.log(NomeCompleto)