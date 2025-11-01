const leia = require("readline-sync");

let pares = 0, impares = 0, contador; 

for (contador = 1; contador <= 10; contador++) {
    console.log(`Digite o ${contador}º número: `)
  let numero = leia.questionInt();
//O número é divisível por 2 sem sobrar nada? Se sim é PAR, se não é IMPAR
  if (numero % 2 === 0) {
    //Anote mais um número PAR na minha lista!
    pares++;
  } else {
    //Anote mais um número IMPAR na minha lista!
    impares++;
  }
}
console.log("\nTotal de números pares:", pares);
console.log("Total de números ímpares:", impares);
