// 14) Faça um programa no qual o usuário insira valores numéricos positivos até digitar -1 e ao final informe entre os 
// números digitados quantos são: (a) múltiplos de 2 e 5, simultaneamente; (b) múltiplos de 2 e 3.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificaMultiplos() {
  let multiplos2e5 = [];
  let multiplos2e3 = [];
  let numero;

  function getInput() {
    rl.question('Digite um número positivo (ou -1 para sair): ', (input) => {
      numero = parseInt(input);

      if (!isNaN(numero)) {
        if (numero !== -1 && numero >= 0) {

          if (numero % 2 === 0 && numero % 5 === 0) {
            multiplos2e5.push(numero);
          } else if (numero % 2 === 0 && numero % 3 === 0) {
            multiplos2e3.push(numero);
          }

          getInput();
        } else if (numero !== -1) {
          console.log('Por favor, digite um número positivo.');
          getInput();
        } else {
          rl.close();
          console.log(`Os números ${multiplos2e3} são múltiplos de 2 e 3, e os números ${multiplos2e5} são múltiplos de 2 e 5.`);
        }
      } else {
        console.log('Por favor, digite um número válido.');
        getInput();
      }
    });
  }

  getInput();
}

verificaMultiplos();
