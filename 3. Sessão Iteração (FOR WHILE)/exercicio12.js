// 12) Faça um programa no qual o usuário insira valores numéricos positivos até digitar -1 e ao final o diga o somatório 
// dos valores digitados.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function somaNumeros() {
  let soma = 0;
  let numero;

  function getInput() {
    rl.question('Digite um número positivo (ou -1 para sair): ', (input) => {
      numero = parseInt(input);

      if (!isNaN(numero)) {
        if (numero !== -1 && numero >= 0) {
          soma = soma + numero;
          getInput();
        } else if (numero !== -1) {
          console.log('Por favor, digite um número positivo.');
          getInput();
        } else {
          rl.close();
          console.log(`O somatório dos números digitados são: ${soma}`);
        }
      } else {
        console.log('Por favor, digite um número válido.');
        getInput();
      }
    });
  }

  getInput();
}

somaNumeros();
