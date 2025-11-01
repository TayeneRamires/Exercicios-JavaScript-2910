//Importando a biblioteca
const leia = require("readline-sync");
console.log("Digite o código do produto: ");
const codigo = leia.questionInt();
const quantidade = leia.questionInt("Digite a quantidade: ");
//Variaveis
let nome, valor, valorTotal; 
switch (codigo) {
    case 1:
           nome = "Cachorro Quente";
           valor = 10.0
           break;
    case 2: 
           nome = "X-Salada";
           valor = 15.0
           break;
    case 3:
           nome = "X-Bacon";
           valor = 18.0
           break;
    case 4:
           nome = "Bauru"; 
           valor = 12.0
           break;
    case 5:
           nome = "Refrigerante";
           valor = 8.0
           break;
    case 6:
           nome = "Suco de laranja";
           valor = 13.0
           break;             
    default: 
       console.log("Opção Inválida - Digite de 1 a 6");
            nome = "Produto não inexistente"
            valor = 0
            break;
}
valorTotal = valor*quantidade
console.log("\nProduto: " + nome + "\nValor total: R$" + valorTotal);