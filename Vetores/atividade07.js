const rosa = require("readline-sync");
let vetorInteiros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6], numero, posicao = -1, indice;
console.log("Vetor: ", vetorInteiros.join(" | "));
console.log("Digite o número que você deseja encontrar");
numero = rosa.questionInt();

for (indice = 0; indice < 10; indice++) {
  
  if (vetorInteiros[indice] === numero) {
    posicao = indice; // guarda o índice
    break; // sai do laço (pois o número foi encontrado)
  }
}
if (posicao !== -1) {
  console.log(`O número ${numero} está localizado na posição: ${posicao}`);
} else {
  console.log(`O número ${numero} não foi encontrado!`);
}


