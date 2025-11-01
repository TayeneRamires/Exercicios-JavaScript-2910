//Elabore um algoritmo em JavaScript que leia 4 notas de um participante, exiba na tela a média final do participante.
//Importando a biblioteca
const leia = require('readline-sync')

//Variaveis
let nota1, nota2, nota3, nota4, media;

//Entrada de dados
nota1 = leia.questionFloat("Nota 1:");
nota2 = leia.questionFloat("Nota 2:");
nota3 = leia.questionFloat("Nota 3:");
nota4 = leia.questionFloat("Nota 4:");

//Processamento
media = (nota1 + nota2 + nota3 + nota4) / 4;

//Saída dos dados
console.log("Média das notas:" + media.toFixed(1));