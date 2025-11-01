const rosa = require("readline-sync")

let nome, codigoCargo, salario, novoSalario, reajuste;
console.log("=== REAJUSTE SALARIAL ===");
console.log("Digite o nome do colaborador: ")
nome = rosa.question();
console.log("Digite o código do cargo (1 a 6): ")
codigoCargo = rosa.questionInt();
console.log("Digite o salário atual: R$ ")
salario = rosa.questionFloat();

// Processamento
switch (codigoCargo) {
  case 1:
    cargo = "Gerente";
    reajuste = 0.10;
    break;
  case 2:
    cargo = "Vendedor";
    reajuste = 0.07;
    break;
  case 3:
    cargo = "Supervisor";
    reajuste = 0.09;
    break;
  case 4:
    cargo = "Motorista";
    reajuste = 0.06;
    break;
  case 5:
    cargo = "Estoquista";
    reajuste = 0.05;
    break;
  case 6:
    cargo = "Técnico de TI";
    reajuste = 0.08;
    break;
  default:
  console.log("Código de cargo inválido!");
  cargo = "Cargo inexistente";
  reajuste = 0;
  break;
}
// Cálculo do novo salário
novoSalario = salario + (reajuste * salario);

// Saída formatada
console.log("\n=== RESULTADO ===");
console.log(`Nome do colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário reajustado: R$ ${novoSalario.toFixed(2)}`);