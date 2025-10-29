//Leia quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4
//Importando a biblioteca
const leia = require('readline-sync')

//Variaveis
let n1, n2, n3, n4, diferenca;

//Entrada de dados
n1 = leia.questionFloat("numero1: ");
n2 = leia.questionFloat("numero2: ");
n3 = leia.questionFloat("numero3: ");
n4 = leia.questionFloat("numero4:" );

//Processamento
diferenca = (n1* n2) - (n3* n4)

//Saída de dados
console.log("A diferença é de: " + diferenca.toFixed(1))
