//Importando a biblioteca
const leia = require("readline-sync");
//Variaveis
let numero;
//Entrada de valores
console.log("Digite um número: ");
numero = leia.questionInt();
//Processamento
if (numero % 2 === 0 && numero > 0) {
console.log("O número " + numero + " é par e positivo!");
} else if (numero % 2 === 0 && numero < 0) {
  console.log("O número " + numero +  " é par e negativo!");
} else if (numero % 2 !== 0 && numero > 0) {
  console.log("O número " + numero +  " é ímpar e positivo!");
} else if (numero % 2 !== 0 && numero < 0) {
  console.log("O número " + numero +  " é ímpar e negativo!");
} else {
  console.log("O número é zero!");
}
  




