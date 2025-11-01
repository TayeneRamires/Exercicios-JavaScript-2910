//Elabore um algoritmo em JavaScript , que leia o Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, exiba na tela o Salário Líquido.
//Importando a biblioteca
const leia = require("readline-sync")

//Variaveis
let SalarioBruto, AdicionalNoturno, HorasExtras, Descontos, SalarioLiquido;

//Entrada de dados
SalarioBruto = leia.questionFloat ("Digite o Salário Bruto: R$");
AdicionalNoturno = leia.questionFloat("Digite o adicional noturno: R$");
HorasExtras = leia.questionFloat("Digite as horas extras: R$");
Descontos = leia.questionFloat("Digite o desconto: R$");

//Processamento
SalarioLiquido = SalarioBruto + AdicionalNoturno + (HorasExtras * 5) - Descontos

//Saída dos dados
console.log("Salário Líquido: R$" + SalarioLiquido.toFixed(2));


