//Importando a biblioteca
const leia = require('readline-sync');
//Variaveis
let numeroA, numeroB, numeroC, soma;
//Entrada de valores
console.log("Digite o número A:");
numeroA = leia.questionInt();
console.log("Digite o número B: ");
numeroB = leia.questionInt();
console.log("Digite o número C: ");
numeroC = leia.questionInt();
//Processamento
soma = (numeroA + numeroB);
if(soma > numeroC){
    console.log("A Soma de A + B é Maior do que C");
} else if (soma < numeroC) {
    console.log("A Soma de A + B é Menor do que C");
}else {
    console.log("A Soma de A + B é Igual a C");
}



