//Salário antigo 10000.00, recebeu abono de 1000.00, novo salário 11000.00
//Importando a biblioteca
const leia = require("readline-sync")

//Variaveis
let salario, abono, novosalario;
//Entrada de dados
salario = leia.questionFloat("Digite o Salário: R$");
abono = leia.questionFloat("Digite o Abono: R$");

//Processamento
novosalario = salario + abono

//Saída de dados
console.log("Novo Salário: R$" + novosalario.toFixed(2))








