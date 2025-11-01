const leia = require("readline-sync");

let idade, menores21 = 0, maiores50 = 0, verdadeiro = true;

while (verdadeiro) {
  console.log("Digite uma idade (ou um número negativo para sair): ");
  idade = leia.questionInt();
  // Se a idade for negativa, o laço para
  if (idade < 0) {
    break;
  }
  // Conta as idades menores de 21 anos
  if (idade < 21) {
    menores21++;
  }
  // Conta as idades maiores de 50 anos
  if (idade > 50) {
    maiores50++;
  }
}
console.log("\nTotal de pessoas menores de 21 anos ", menores21);
console.log("Total de pessoas maiores de 50 anos: ", maiores50);

